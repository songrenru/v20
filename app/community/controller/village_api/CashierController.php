<?php


namespace app\community\controller\village_api;

use app\common\model\service\send_message\SmsService;
use app\community\controller\CommunityBaseController;
use app\community\model\db\HouseNewChargeRule;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageParkingPosition;
use app\community\model\service\ConfigService;
use app\community\model\service\HousePropertyDigitService;
use app\community\model\db\HouseVillageInfo;
use app\community\model\service\HouseNewChargePrepaidService;
use app\community\model\service\HouseNewChargeProjectService;
use app\community\model\service\HouseNewChargeRuleService;
use app\community\model\service\HouseNewChargeService;
use app\community\model\service\HouseNewPorpertyService;
use app\community\model\service\HouseVillageUserBindService;
use app\community\model\service\HouseNewCashierService;
use app\community\model\service\HouseVillageService;
use app\community\model\service\HouseVillageSingleService;
use app\community\model\service\HouseVillageParkingService;
use app\community\model\service\NewPayService;
use app\community\model\service\HouseVillageUserVacancyService;
use app\community\model\service\PlatOrderService;
use app\community\model\service\RecognitionService;
use app\common\model\service\plan\PlanService;
use app\community\model\service\UserService;
use app\consts\newChargeConst;
use app\pay\model\service\PayService;
use app\community\model\service\HouseVillageCheckauthSetService;
use app\community\model\service\HouseVillageCheckauthApplyService;
use customization\customization;
use think\facade\Cache;
use think\route\RuleGroup;
use app\community\model\service\StorageService;
use app\common\model\service\config\ConfigCustomizationService;

class CashierController extends CommunityBaseController
{
    use customization;

	public $cacheTagKey;
	
	public function clearCache()
	{
		$village_id = $this->adminUser['village_id'];
		$this->cacheTagKey = 'village:cache:'.$village_id;
		Cache::tag($this->cacheTagKey)->clear();
		return api_output(0,[],'缓存清空成功');
	}
    /**
     * 房产组织架构
     * @author lijie
     * @date_time 2021/06/10
     * @return \json
     */
    public function getHouseTissueNav()
    {
        $village_id  = $this->adminUser['village_id'];
        $select      = $this->request->post('select',1);
        $title       = $this->request->post('title','');
        $isAllChoose = $this->request->post('isAllChoose','');
        $service_house_village_single = new HouseVillageSingleService();
        $data = $service_house_village_single->getNav(['village_id'=>$village_id,'status'=>1],'id,single_name',$select, $title, $isAllChoose);
        return api_output(0,$data);
    }

    /**
     * 车场组织架构
     * @author lijie
     * @date_time 2021/06/11
     */
    public function getCarTissueNav()
    {
        $village_id = $this->adminUser['village_id'];
        $select = $this->request->post('select',1);
        $service_house_village_parking = new HouseVillageParkingService();
        $data = $service_house_village_parking->getNav(['village_id'=>$village_id,'status'=>1],'garage_id,garage_num',$select);
        return api_output(0,$data);
    }
    
    public function getConfigCustomization(){
        $village_id = $this->adminUser['village_id'];
        $datas=array();
        $configCustomizationService=new ConfigCustomizationService();
        $life_tools=$configCustomizationService->getZairizhaoCnJudge();
        $datas['life_tools']=intval($life_tools);
        $cockpit=intval(cfg('cockpit'));
        $customized_meter_reading=cfg('customized_meter_reading');
        $datas['is_customized_meter_reading']=!empty($customized_meter_reading) ? intval($customized_meter_reading):0;
        /*
         * $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        */
        $is_grapefruit_prepaid=1;
        $datas['is_grapefruit_prepaid']=$is_grapefruit_prepaid;
        $datas['cockpit']=$cockpit;
        $houseVillageService=new HouseVillageService();
        $datas['role_payment']=$houseVillageService->checkPermissionMenu(112082,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $datas['role_mdymoney']=$houseVillageService->checkPermissionMenu(112083,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $datas['role_discard']=$houseVillageService->checkPermissionMenu(112084,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $datas['role_addrule']=$houseVillageService->checkPermissionMenu(112085,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $datas['role_addcar']=$houseVillageService->checkPermissionMenu(112086,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $datas['role_addorder']=$houseVillageService->checkPermissionMenu(112087,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $datas['role_delrule']=$houseVillageService->checkPermissionMenu(112088,$this->adminUser,$this->login_role,$this->dismissPermissionRole);

        return api_output(0,$datas);
    }
    /**
     * 收银台搜索
     * @author lijie
     * @date_time 2021/06/11
     * @return \json
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDetailTree()
    {
        $village_id = $this->adminUser['village_id'];
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $service_house_village = new HouseVillageService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $select_type = $this->request->post('select_type',1);
        $where = [];
        if($select_type == 1){
            $option_type = $this->request->post('option_type',1);
            $value = $this->request->post('value','');
            $single_id = $this->request->post('single_id',0);
            $floor_id = $this->request->post('floor_id',0);
            $layer_id = $this->request->post('layer_id',0);
            $room_id = $this->request->post('room_id',0);
            if($value){
                if($room_id)
                    $where[] = ['pigcms_id','=',$room_id];
                elseif ($layer_id)
                    $where[] = ['layer_id','=',$layer_id];
                elseif ($floor_id)
                    $where[] = ['floor_id','=',$floor_id];
                elseif ($single_id)
                    $where[] = ['single_id','=',$single_id];
                switch ($option_type){
                    case 1:
                        if(strpos($value,'-') !== false){
                            $where = $service_house_village_user_vacancy->propertyNumberMatching($where,$value,$village_id);
                        }else{
                            $whereArr=array(['village_id','=',$village_id]);
                            $whereArr[]=array('bind_number|usernum','=',$value);
                            $whereArr[]=array('status','=',1);
                            $bindInfoObj=$service_house_village_user_bind->getBindInfo($whereArr,'room_number,vacancy_id');
                            if($bindInfoObj && !$bindInfoObj->isEmpty()){
                                $bindInfo=$bindInfoObj->toArray();
                                $where[] = ['pigcms_id','=',$bindInfo['vacancy_id']];
                            }else{
                                $where[] = ['property_number|usernum','=',$value];
                            }
                        }
                        break;
                    case 2:
                        $where[] = ['name','=',$value];
                        break;
                    case 3:
                        $where[] = ['phone','=',$value];
                        break;
                    case 4:
                        $where[] = ['room_alias_id','=',$value];
                        break;
                    default:
                        $where[] = ['usernum','=',$value];
                }
                $where[] = ['status','in','1,3'];
                $where[] = ['is_del','=',0];
                $where[] = ['village_id','=',$village_id];
                $data = $service_house_village_user_vacancy->getUserVacancyInfo($where,'pigcms_id,room,single_id,floor_id,layer_id');
                if($data){
                    $service_house_village_single = new HouseVillageSingleService();
                    $whereArr=array('village_id'=>$village_id,'vacancy_id'=>$data['pigcms_id'],'type'=>[0,3],'status'=>1);
                    $bind_user_info=$service_house_village_user_bind->getBindInfo($whereArr,'pigcms_id,room_number,vacancy_id');
                    if (empty($bind_user_info)){
                        $bind_user_info['pigcms_id']=0;
                    }
                    $expanded_keys[] = '0|房产|house';
                    if($data['single_id']){
                        $single_info = $service_house_village_single->getSingleInfo(['id'=>$data['single_id']],'single_name,id');
                        $expanded_keys[] = $single_info['id'].'|'.$single_info['single_name'].'|single';
                    }
                    if($data['floor_id']){
                        $floor_info = $service_house_village_single->getFloorInfo(['floor_id'=>$data['floor_id']],'floor_name,floor_id');
                        $expanded_keys[] = $floor_info['floor_id'].'|'.$floor_info['floor_name'].'|floor';
                    }
                    if($data['layer_id']){
                        $layer_info = $service_house_village_single->getLayerInfo(['id'=>$data['layer_id']],'layer_name,id');
                        $expanded_keys[] = $layer_info['id'].'|'.$layer_info['layer_name'].'|layer';
                    }
                    $expanded_keys[] = $data['pigcms_id'].'|'.$data['room'].'|'.'room';
                    return api_output(0,['pigcms_id'=>$bind_user_info['pigcms_id'],'key'=>$data['pigcms_id'].'|'.$data['room'].'|'.'room','expanded_keys'=>$expanded_keys]);
                } else{
                    return api_output(0,['key'=>'']);
                }
            }else{
                if($room_id){
                    $whereArr=array('village_id'=>$village_id,'vacancy_id'=>$room_id,'type'=>[0,3],'status'=>1);
                    $bind_user_info=$service_house_village_user_bind->getBindInfo($whereArr,'pigcms_id,room_number,vacancy_id');
                    if (empty($bind_user_info)){
                        $bind_user_info['pigcms_id']=0;
                    }
                    $where[] = ['pigcms_id','=',$room_id];
                    $where[] = ['village_id','=',$village_id];
                    $data = $service_house_village_user_vacancy->getUserVacancyInfo($where,'pigcms_id,room,single_id,floor_id,layer_id');
                    if($data){
                        $service_house_village_single = new HouseVillageSingleService();
                        $expanded_keys[] = '0|房产|house';
                        if($data['single_id']){
                            $single_info = $service_house_village_single->getSingleInfo(['id'=>$data['single_id']],'single_name,id');
                            $expanded_keys[] = $single_info['id'].'|'.$single_info['single_name'].'|single';
                        }
                        if($data['floor_id']){
                            $floor_info = $service_house_village_single->getFloorInfo(['floor_id'=>$data['floor_id']],'floor_name,floor_id');
                            $expanded_keys[] = $floor_info['floor_id'].'|'.$floor_info['floor_name'].'|floor';
                        }
                        if($data['layer_id']){
                            $layer_info = $service_house_village_single->getLayerInfo(['id'=>$data['layer_id']],'layer_name,id');
                            $expanded_keys[] = $layer_info['id'].'|'.$layer_info['layer_name'].'|layer';
                        }
                        $expanded_keys[] = $data['pigcms_id'].'|'.$data['room'].'|'.'room';
                        return api_output(0,['pigcms_id'=>$bind_user_info['pigcms_id'],'key'=>$data['pigcms_id'].'|'.$data['room'].'|'.'room','expanded_keys'=>$expanded_keys]);
                    } else{
                        return api_output(0,['pigcms_id'=>$bind_user_info['pigcms_id'],'key'=>'']);
                    }
                }elseif ($layer_id){
                    $data = $service_house_village->getHouseVillageLayerWhere(['id'=>$layer_id,'village_id'=>$village_id],'id,layer_name,single_id,floor_id');
                    if($data){
                        $service_house_village_single = new HouseVillageSingleService();
                        $expanded_keys[] = '0|房产|house';
                        if($data['single_id']){
                            $single_info = $service_house_village_single->getSingleInfo(['id'=>$data['single_id']],'single_name,id');
                            $expanded_keys[] = $single_info['id'].'|'.$single_info['single_name'].'|single';
                        }
                        if($data['floor_id']){
                            $floor_info = $service_house_village_single->getFloorInfo(['floor_id'=>$data['floor_id']],'floor_name,floor_id');
                            $expanded_keys[] = $floor_info['floor_id'].'|'.$floor_info['floor_name'].'|floor';
                        }
                        $expanded_keys[] = $data['id'].'|'.$data['layer_name'].'|'.'layer';
                        return api_output(0,['key'=>$data['id'].'|'.$data['layer_name'].'|'.'layer','expanded_keys'=>$expanded_keys]);
                    } else{
                        return api_output(0,['key'=>'']);
                    }
                }elseif ($floor_id){
                    $data = $service_house_village->getHouseVillageFloorWhere(['floor_id'=>$floor_id,'village_id'=>$village_id],'floor_id,floor_name,single_id');
                    if($data){
                        $service_house_village_single = new HouseVillageSingleService();
                        $expanded_keys[] = '0|房产|house';
                        if($data['single_id']){
                            $single_info = $service_house_village_single->getSingleInfo(['id'=>$data['single_id']],'single_name,id');
                            $expanded_keys[] = $single_info['id'].'|'.$single_info['single_name'].'|single';
                        }
                        $expanded_keys[] = $data['floor_id'].'|'.$data['floor_name'].'|'.'floor';
                        return api_output(0,['key'=>$data['floor_id'].'|'.$data['floor_name'].'|'.'floor','expanded_keys'=>$expanded_keys]);
                    } else{
                        return api_output(0,['key'=>'']);
                    }
                }elseif ($single_id){
                    $data = $service_house_village->get_house_village_single_where(['id'=>$single_id,'village_id'=>$village_id],'id,single_name');
                    if($data){
                        $expanded_keys[] = '0|房产|house';
                        $expanded_keys[] = $data['id'].'|'.$data['single_name'].'|'.'single';
                        return api_output(0,['key'=>$data['id'].'|'.$data['single_name'].'|'.'single','expanded_keys'=>$expanded_keys]);
                    } else{
                        return api_output(0,['key'=>'']);
                    }
                }
                return api_output(0,['key'=>'']);
            }
        }else{
            $option_type = $this->request->post('option_type',1);
            $value = $this->request->post('value','');
            if($option_type == 1){
                $data = $service_house_village_parking->getParkingPositionByCondition(['pp.position_num'=>$value,'pp.village_id'=>$village_id],'pp.position_id,pp.position_num,pg.garage_id,garage_num');
                if($data){
                    $expanded_keys[] = '0|车场|car';
                    $expanded_keys[] = $data['garage_id'].'|'.$data['garage_num'].'|garage';
                    $expanded_keys[] = $data['position_id'].'|'.$data['position_num'].'|'.'position';
                    return api_output(0,['key'=>$data['position_id'].'|'.$data['position_num'].'|'.'position','expanded_keys'=>$expanded_keys]);
                } else{
                    return api_output(0,['key'=>'']);
                }
            }elseif($option_type == 2){
                $value = preg_replace("/[\x{4e00}-\x{9fa5}]/iu", "", trim($value));
                $data = $service_house_village_parking->getParkingCarDetail(['pc.car_number'=>$value,'pc.village_id'=>$village_id],'pc.*,pp.position_num,pp.garage_id');
                fdump_api([$data,$value,$village_id],'getDetailTree_0615',1);
                if($data&&$data['detail']['car_position_id']>0){
                    $expanded_keys[] = '0|车场|car';
                    $garage_info = $service_house_village_parking->getParkingGarageByCondition(['garage_id'=>$data['detail']['garage_id']]);
                    $expanded_keys[] = $garage_info['detail']['garage_id'].'|'.$garage_info['detail']['garage_num'].'|garage';
                    $expanded_keys[] = $data['detail']['car_position_id'].'|'.$data['detail']['position_num'].'|'.'position';
                    return api_output(0,['key'=>$data['detail']['car_position_id'].'|'.$data['detail']['position_num'].'|'.'position','expanded_keys'=>$expanded_keys]);
                } else{
                    return api_output(0,['key'=>'']);
                }
            }elseif ($option_type == 3){
                $service_house_village_user_bind = new HouseVillageUserBindService();
                $bind_info = $service_house_village_user_bind->getBindInfo(['bind_number'=>$value,'village_id'=>$village_id,'status'=>1],'pigcms_id');
                $bind_position = $service_house_village_parking->getBindPosition(['user_id'=>$bind_info['pigcms_id']]);
                if($bind_position){
                    $data = $service_house_village_parking->getParkingPositionByCondition(['pp.position_id'=>$bind_position['position_id']],'pp.position_id,pp.position_num,pg.garage_id,garage_num');
                    if($data){
                        $expanded_keys[] = '0|车场|car';
                        $expanded_keys[] = $data['garage_id'].'|'.$data['garage_num'].'|garage';
                        $expanded_keys[] = $data['position_id'].'|'.$data['position_num'].'|'.'position';
                        return api_output(0,['pigcms_id'=>$bind_info['pigcms_id'],'key'=>$data['position_id'].'|'.$data['position_num'].'|'.'position','expanded_keys'=>$expanded_keys]);
                    } else{
                        return api_output(0,['key'=>'']);
                    }
                }
                return api_output(0,['key'=>'']);
            }elseif ($option_type == 4){
                $service_house_village_user_bind = new HouseVillageUserBindService();
                $bind_info = $service_house_village_user_bind->getBindInfo(['name'=>$value,'village_id'=>$village_id,'status'=>1],'pigcms_id');
                $bind_position = $service_house_village_parking->getBindPosition(['user_id'=>$bind_info['pigcms_id']]);
                if($bind_position){
                    $data = $service_house_village_parking->getParkingPositionByCondition(['pp.position_id'=>$bind_position['position_id']],'pp.position_id,pp.position_num,pg.garage_id,garage_num');
                    if($data){
                        $expanded_keys[] = '0|车场|car';
                        $expanded_keys[] = $data['garage_id'].'|'.$data['garage_num'].'|garage';
                        $expanded_keys[] = $data['position_id'].'|'.$data['position_num'].'|'.'position';
                        return api_output(0,['pigcms_id'=>$bind_info['pigcms_id'],'key'=>$data['position_id'].'|'.$data['position_num'].'|'.'position','expanded_keys'=>$expanded_keys]);
                    } else{
                        return api_output(0,['key'=>'']);
                    }
                }
                return api_output(0,['key'=>'']);
            }elseif ($option_type == 5){
                $service_house_village_user_bind = new HouseVillageUserBindService();
                $bind_info = $service_house_village_user_bind->getList(['phone'=>$value,'village_id'=>$village_id,'status'=>1],'pigcms_id');
                foreach ($bind_info as $v1){
                    $bind_position = $service_house_village_parking->getBindPosition(['user_id'=>$v1['pigcms_id']]);
                    if($bind_position){
                        if($bind_position){
                            $data = $service_house_village_parking->getParkingPositionByCondition(['pp.position_id'=>$bind_position['position_id']],'pp.position_id,pp.position_num,pg.garage_id,pg.garage_num');
                            if($data){
                                $expanded_keys[] = '0|车场|car';
                                $expanded_keys[] = $data['garage_id'].'|'.$data['garage_num'].'|garage';
                                $expanded_keys[] = $data['position_id'].'|'.$data['position_num'].'|'.'position';
                                return api_output(0,['pigcms_id'=>$v1['pigcms_id'],'key'=>$data['position_id'].'|'.$data['position_num'].'|'.'position','expanded_keys'=>$expanded_keys]);
                            }
                        }
                    }
                }
                return api_output(0,['key'=>'']);
            }
            return api_output(0,['key'=>'']);
        }
    }

    /**
     * 获取未缴列表
     * @author lijie
     * @date_time 2021/06/15
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderList()
    {
        $village_id = $this->adminUser['village_id'];
        $key = $this->request->post('key','');
        $source_type = $this->request->post('source_type',0, 'int');
        $model_type = $this->request->post('model_type',0, 'int');  //1支持同一个收费项目顺序不完全支付
        if(empty($key))
            return api_output_error(1001,'缺少必传参数');
        $key_info = explode('|',$key);
        if(count($key_info) != 3) {
            $key_info = explode('-',$key);
        }
        if(count($key_info) != 3) {
            return api_output_error(1001,'参数异常');
        }
        $service_house_new_cashier = new HouseNewCashierService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $houseVillageService=new HouseVillageService();
        $type = $key_info[2];
        $where[] = ['p.is_paid','=',2];
        $where[] = ['p.order_type','<>','non_motor_vehicle'];
        $where[] = ['p.is_discard','=',1];
        $where[] = ['p.village_id','=',$village_id];
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();

        $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
        $orderRefundCheckWhere=array('village_id'=>$this->adminUser['village_id'],'xtype'=>'order_refund_check');
        $orderRefundCheckOpen=$houseVillageCheckauthSetService->isOpenSet($orderRefundCheckWhere);
        $wid=0;
        $check_level_info='';
        if(in_array($this->login_role,$this->villageOrderCheckRole) && $orderRefundCheckOpen>0 && isset($this->adminUser['wid']) && ($this->adminUser['wid']>0)){
            $wid=$this->adminUser['wid'];
            $userAuthLevel=$houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
            if(!empty($userAuthLevel)){
                $check_level_info=array('wid'=>$this->adminUser['wid'],'check_level'=>$userAuthLevel['check_level']);
            }
        }
        $user_bind_pigcms_id=0;
        /**** 
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
         */
        $is_grapefruit_prepaid=1;
        if($type == 'room'){
            $room_id = $key_info[0];
            $group = 'p.project_id';
            $field = "j.name as charge_name,p.project_id,p.position_id,p.room_id,sum(p.modify_money) as modify_money,sum(p.total_money) as total_money,sum(p.late_payment_day) as late_payment_day,sum(p.late_payment_money) as late_payment_money,p.order_id,p.modify_time,p.order_name,p.order_type,p.property_id,j.type,p.village_id,p.check_status,p.check_apply_id,p.pigcms_id,p.service_start_time,p.service_end_time,p.service_month_num,p.service_give_month_num,p.add_time,p.rule_id";
            if($is_grapefruit_prepaid==1){
                $field.=',p.unify_flage_id';
            }
            /*$bind_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$room_id],['type','in',[0,3]],['status','=',1]],'name,phone,pigcms_id');
            if($bind_info){
                $service_house_village_parking_service = new HouseVillageParkingService();
                $bind_position  = $service_house_village_parking_service->getBindPositionList(['user_id'=>$bind_info['pigcms_id']]);
                if($bind_position){
                    $position_ids = [];
                    foreach ($bind_position as $val){
                        $position_ids[] = $val['position_id'];
                    }
                }
            }
            $whereOr = [];
            if(isset($position_ids) && $position_ids){
                $whereOr['room_id'] = $room_id;
                $whereOr['position_ids'] = $position_ids;
            }else{
                $where[] = ['p.room_id','=',$room_id];
            }*/
            $where[] = ['p.room_id','=',$room_id];
            $where['check_level_info']=$check_level_info;
            $where[]=['p.check_status','<>',1];
            $data = $service_house_new_cashier->getSumByGroup($where,$group,$field,0,2000,[],$type,$model_type);
            unset($where['check_level_info']);
            //$count = $service_house_new_cashier->getCountByGroup($where,$group);
            $count = count($data);
            $user_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$room_id],'pigcms_id,usernum,name,phone,property_number,housesize,single_id,floor_id,layer_id,village_id');
            if($user_info && is_object($user_info) && !$user_info->isEmpty()){
                $user_info=$user_info->toArray();
            }
            if($user_info['property_number']){
                $user_info['usernum'] = $user_info['property_number'];
            }
            if($user_info['housesize']>0){
                $user_info['housesize']=$user_info['housesize'].'㎡';
            }
            $user_info['vacancy_id']=$room_id;
            $user_info['room'] = $houseVillageService->getSingleFloorRoom($user_info['single_id'],$user_info['floor_id'],$user_info['layer_id'],$user_info['pigcms_id'],$user_info['village_id']);

            $bind_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$room_id],['type','in',[0,3]],['status','=',1],['name|phone|uid','<>','']],'pigcms_id,name,phone');
            if(empty($bind_info)){
                $bind_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$room_id],['type','in',[1,2]],['status','=',1],['name|phone|uid','<>','']],'pigcms_id,name,phone');
            }
            if($bind_info){
                $user_info['pigcms_id'] = $bind_info['pigcms_id'];
                $user_bind_pigcms_id=$bind_info['pigcms_id'];
                $user_info['name'] = $bind_info['name'];
                $user_info['phone'] = $bind_info['phone'];
            }else{
                $user_info['pigcms_id']=0;
                $user_info['name'] = '';
                $user_info['phone'] = '';
            }
            $user_info['is_houses_room']=1;
            $user_info['is_car_position']=0;
            $user_info['car_position_num']=array();  //车位号
            $user_info['car_numberplate']=array();  //车牌
            if($user_bind_pigcms_id>0){
                $whereArr=array();
                $whereArr[]=array('a.user_id','=',$user_bind_pigcms_id);
                $whereArr[]=array('a.village_id','=',$village_id);
                $whereArr[]=array('a.car_id','>',0);
                $whereArr[]=array('b.village_id','=',$village_id);
                $whereArr[]=array('b.examine_status','<',2);
                $whereArr[]=array('b.is_del','=',1);
                $field='b.car_id,b.village_id,b.car_position_id as position_id,b.car_type,b.province,b.car_number,b.room_id,b.garage_id';
                $bindCars=$service_house_village_parking->getUserBindCarList($whereArr,$field);
                //绑定的车位
                $whereArr=array();
                $whereArr[]=array('bp.user_id','=',$user_bind_pigcms_id);
                $whereArr[]=array('bp.village_id','=',$village_id);
                $whereArr[]=array('pp.village_id','=',$village_id);
                $bindPosition=$service_house_village_parking->getUserBindPositionList($whereArr,'pp.position_id,pp.village_id,pp.garage_id,pp.position_num');
                if(!empty($bindPosition)){
                    $bindCars=$service_house_village_parking->handleBindCarAndPosition($bindCars,$bindPosition);
                }
                if($bindCars){
                    //print_r($bindCars);
                    $position_idArr=array();
                    foreach ($bindCars as $cvv){
                        if($cvv['car_number']){
                            $user_info['car_numberplate'][] = $cvv['car_number'];
                        }
                        if($cvv['position_num'] && !in_array($cvv['position_id'],$position_idArr)){
                            $user_info['car_position_num'][] = $cvv['garage_num'].' - '.$cvv['position_num'];
                        }
                        $position_idArr[]=$cvv['position_id'];
                    }
                }
            }
        }else{
            $position_id = $key_info[0];
            $position_info = $service_house_village_parking->getParkingPositionByCondition(['pp.position_id'=>$position_id],'pp.end_time,pp.position_area,pg.garage_num,pp.position_num');
            $where[] = ['p.position_id','=',$position_id];
            $group = 'p.project_id';
            $field = "j.name as charge_name,p.project_id,p.position_id,p.room_id,sum(p.modify_money) as modify_money,sum(p.total_money) as total_money,sum(p.late_payment_day) as late_payment_day,sum(p.late_payment_money) as late_payment_money,p.order_id,p.modify_time,p.order_name,p.order_type,p.property_id,j.type,p.village_id,p.check_status,p.check_apply_id,p.pigcms_id,p.service_start_time,p.service_end_time,p.service_month_num,p.service_give_month_num,p.add_time,p.rule_id";
            if($is_grapefruit_prepaid==1){
                $field.=',p.unify_flage_id';
            }
            $where['check_level_info']=$check_level_info;
            $where[]=['p.check_status','<>',1];
            $data = $service_house_new_cashier->getSumByGroup($where,$group,$field,0,10,[],'',$model_type);
            unset($where['check_level_info']);
            $count = $service_house_new_cashier->getCountByGroup($where,$group);

            $bind_info=$service_house_new_cashier->getRoomUserBindByPosition($position_id,$village_id);
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$position_id]);
            $bind_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,vacancy_id');
            */
            $user_info=array();
            if(!empty($bind_info)){
                $user_info_obj = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$bind_info['vacancy_id']],'pigcms_id,usernum,name,phone,property_number,housesize,single_id,floor_id,layer_id,village_id');
                if($user_info_obj && !$user_info_obj->isEmpty()){
                    $user_info=$user_info_obj->toArray();
                }
                $user_info['vacancy_id']=$bind_info['vacancy_id'];
                $user_info['pigcms_id']=$bind_info['pigcms_id'];
                $user_bind_pigcms_id=$bind_info['pigcms_id'];
            }
            $user_info['position_area']=0;
            if(!empty($position_info) && !empty($position_info['position_area'])){
                $user_info['position_area']=$position_info['position_area'].'㎡';
            }
            if(!empty($user_info) && isset($user_info['housesize']) && ($user_info['housesize']>0)){
                $user_info['housesize']=$user_info['housesize'].'㎡';
            }

            $user_info['room'] = empty($position_info['garage_num'])? $position_info['position_num'] : $position_info['garage_num'].'-'.$position_info['position_num'];

            if(!empty($user_info) && isset($user_info['property_number']) && $user_info['property_number']){
                $user_info['usernum'] = $user_info['property_number'];
            }
            $user_info['is_houses_room']=0;
            $user_info['is_car_position']=1;
            $user_info['position_id']=$position_id;
            if(empty($position_info['end_time'])){
                $car_info = $service_house_village_parking->getCar(['car_position_id'=>$position_id]);
                if(empty($car_info['end_time']))
                    $data['position_end_time'] = '暂无';
                else
                    $data['position_end_time'] = date('Y-m-d H:i:s',$car_info['end_time']);
            }else{
                $data['position_end_time'] = $position_info['end_time'];
            }
            $user_info['car_numberplate']=array();  //车牌
            $whereArr=array();
            $whereArr[]=array('car_position_id','=',$position_id);
            $whereArr[]=array('village_id','=',$village_id);
            $whereArr[]=array('car_id','>',0);
            $whereArr[]=array('examine_status','<',2);
            $whereArr[]=array('is_del','=',1);
            $field='car_id,village_id,car_position_id,car_type,province,car_number,room_id,garage_id';
            $parking_car=$service_house_village_parking->getParkingCarLists($whereArr,$field,0);
            if($parking_car && !$parking_car->isEmpty()){
                $parking_cars=$parking_car->toArray();
                foreach ($parking_cars as $cvv){
                    if($cvv['car_number']){
                        $car_number=$cvv['province'].$cvv['car_number'];
                        $user_info['car_numberplate'][] =$car_number;
                    }
                }
            }
        }

        $is_pay_but=false;
        if($source_type == 1){
            $template_id=(new HouseVillageService())->getPrintTemplateId($village_id);
            $is_pay_but=$template_id>0 ? true : false;
        }
        $data['is_pay_but']=$is_pay_but;
        $data['user_info'] =[];
        if($user_info){
            if(isset($user_info['phone']) && !empty($user_info['phone'])){
                $user_info['phone']=phone_desensitization($user_info['phone']);
            }
            $data['user_info'] = $user_info;
        }
        $data['count'] = $count;
        $data['total_limit'] = 5;
        $data['orderRefundCheckOpen']=$orderRefundCheckOpen;
        $data['login_role']=$this->login_role;
        $data['wid']=$wid;
        $show_scrcu=cfg('show_scrcu');
        $data['show_scrcu']=0;
        $modify_show_info=(new ConfigService())->get_config('modify_show');
        if (!empty($modify_show_info)){
            $data['modify_show']=$modify_show_info['value'];
        }else{
            $data['modify_show']=1;
        }
        if(!empty($show_scrcu)){
            $data['show_scrcu']=1;
        }
        return api_output(0,$data);
    }

    /**
     * 修改账单金额
     * @author lijie
     * @date_time 2021/06/15
     * @return \json
     */
    public function modifyMoney()
    {
        $property_id = $this->adminUser['property_id'];
        $modify_reason = $this->request->post('modify_reason','');
        if(empty($modify_reason) && strlen($modify_reason) <= 0)
            return api_output_error(1001,'请填写修改原因');
        $project_id = $this->request->post('project_id',0);
        $room_id = $this->request->post('room_id',0);
        $position_id = $this->request->post('position_id',0);
        $modify_money = $this->request->post('modify_money',0);
        $modify_money = (float)$modify_money;
        $order_id = $this->request->post('order_id',0);
        $modify_show_info=(new ConfigService())->get_config('modify_show');
        if (!empty($modify_show_info)&&$modify_show_info['value']==0){
            return api_output_error(1001,'当前小区无法修改费用');;
        }
        if(empty($project_id) || (empty($room_id) && empty($position_id)) || (!$modify_money && strlen($modify_money) <= 0)){
            return api_output_error(1001,'缺少必传参数'); 
        }
        if($modify_money <= 0){
            return api_output_error(1001,'修改金额需要大于0');
        }
        if(!is_numeric($modify_money)){
            return api_output_error(1001,'修改金额需要是数字');
        }
        if($order_id){
            $where['order_id'] = $order_id;
        }else{
            $where[] = ['project_id','=',$project_id];
            $where[] = ['is_paid','=',2];
            $where[] = ['is_discard','=',1];
            if($position_id)
                $where[] = ['position_id','=',$position_id];
            else
                $where[] = ['room_id','=',$room_id];
        }
        $service_house_new_cashier = new HouseNewCashierService();
        $order_info=$service_house_new_cashier->getInfo($where);
        if (!empty($order_info)){
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
            
            if(empty($digit_info)){
                $modify_money_temp = formatNumber($modify_money,2,1);
                $digit=2;
            }else{
                //  print_r($data['order_type']);exit;
                if($order_info['order_type'] == 'water' || $order_info['order_type'] == 'electric' || $order_info['order_type'] == 'gas'){
                   $modify_money_temp = formatNumber($modify_money, $digit_info['meter_digit'], $digit_info['type']);
                    $digit=$digit_info['meter_digit'];
                }else {
                    $modify_money_temp = formatNumber($modify_money, $digit_info['other_digit'], $digit_info['type']);
                    $digit=$digit_info['other_digit'];
                }
            }
        }
       
        if(strlen($modify_money) > strlen($modify_money_temp)){
            return api_output_error(1001,'修改的金额只能保留'.$digit.'位小数');
        }
        $res = $service_house_new_cashier->saveOrder($where,['modify_money'=>$modify_money,'modify_reason'=>$modify_reason,'modify_time'=>time()]);
        if($res)
            return api_output(0,[],'修改成功');
        else
            return api_output_error(1001,'修改失败');
    }

    /**
     * 作废账单
     * @author lijie
     * @date_time 2021/06/15
     * @return \json
     */
    public function discardOrder()
    {
        $discard_reason = $this->request->post('discard_reason', '','trim');
        if (empty($discard_reason)) {
            return api_output_error(1001, '请填写作废原因');
        }
        $project_id = $this->request->post('project_id', 0,'int');
        $room_id = $this->request->post('room_id', 0,'int');
        $position_id = $this->request->post('position_id', 0,'int');
        $order_id = $this->request->post('order_id', 0,'trim');
        $key = $this->request->post('key', '');
        $village_id = $this->adminUser['village_id'];
        $service_house_new_cashier = new HouseNewCashierService();
        $where=array();
        $where[]=['village_id', '=', $village_id];
        if (!empty($order_id)) {
            if(strpos($order_id,',')>0){
                //批量作废
                $order_idArr=explode(',',$order_id);
                $where[]=['order_id', 'in', $order_idArr];
                $fieldStr='order_id,summary_id,pigcms_id,position_id,order_type,room_id,total_money,property_id,village_id,project_id,rule_id';
                $newOrders=$service_house_new_cashier->getNewPayOrderList($where,$fieldStr,0);
                if(isset($newOrders['list']) && !empty($newOrders['list'])){
                    $have_error_num=0;
                    foreach ($newOrders['list'] as $ovv){
                        $res=$this->discardOrderHandle($ovv,$discard_reason,true);
                        if($res['err_code']>0){
                            $have_error_num++;
                        }
                    }
                    if($have_error_num>0){
                        return api_output(0, ['msg'=>'有'.$have_error_num.'个订单没有作废成功，请重新选择作废订单！'], '有'.$have_error_num.'个订单没有作废成功，请重新选择作废订单！');
                    }
                }
                return api_output(0, ['msg'=>'批量作废成功'], '批量作废成功');
            }else{
                $where[] = ['order_id', '=', $order_id];
            }
        } else {
            if (empty($project_id) || (empty($room_id) && empty($position_id))){
                return api_output_error(1001, '缺少必传参数');
            }
            $where[] = ['project_id', '=', $project_id];
            $where[] = ['is_paid', '=', 2];
            $where[] = ['is_discard', '=', 1];
            if ($key) {
                $key_info = explode('|', $key);
                if (count($key_info) != 3) {
                    $key_info = explode('-', $key);
                }
                if (count($key_info) != 3) {
                    return api_output_error(1001, '参数异常');
                }
                $type = $key_info[2];
                if ($type == 'room')
                    $where[] = ['room_id', '=', $room_id];
                else
                    $where[] = ['position_id', '=', $position_id];
            } else {
                if ($position_id)
                    $where[] = ['position_id', '=', $position_id];
                else
                    $where[] = ['room_id', '=', $room_id];
            }
        }
        $orderInfo = $service_house_new_cashier->getInfo($where);
        if (empty($orderInfo)) {
            return api_output_error(1001, '未查找到订单信息！');
        }
        $res=$this->discardOrderHandle($orderInfo,$discard_reason);
        return $res;
    }
    
    public function discardOrderHandle($orderInfo=array(),$discard_reason='',$is_return=false){
        $service_house_new_cashier = new HouseNewCashierService();
        $projectInfo = $service_house_new_cashier->getProjectInfo(['id'=>$orderInfo['project_id']],'type');
        if ($projectInfo['type']==2){
            //查询最新未缴账单
            if(!empty($orderInfo['position_id']) ){
                $pay_where=[['is_discard','=',1],['is_paid','=',2],['position_id','=',$orderInfo['position_id']],['order_type','=',$orderInfo['order_type']]];
                $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'order_id,project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            } else{
                $pay_where=[['is_discard','=',1],['is_paid','=',2],['room_id','=',$orderInfo['room_id']],['order_type','=',$orderInfo['order_type']]];
                $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'order_id,project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            }
            // print_r([$pay_where,$pay_order_info]);die;
            //判断当前订单是否是最新的订单
            if (cfg('new_pay_order')==1&&(empty($pay_order_info)||$pay_order_info['order_id']!=$orderInfo['order_id'])){
                if($is_return){
                    return ['err_code'=>1001,'msg'=>'当前账单无法作废,请先作废最新的账单','is_check'=>0,'order_id'=>$orderInfo['order_id']];
                }else{
                    return api_output_error(1001, '当前账单无法作废,请先作废最新的账单');
                }
                
            }
        }
        
        $extra = array('login_role' => $this->login_role, 'wid' => 0, 'apply_uid' => $this->_uid, 'apply_name' => '', 'apply_phone' => '');
        if (isset($this->adminUser['wid']) && ($this->adminUser['wid'] > 0)) {
            $extra['wid'] = $this->adminUser['wid'];
        }
        if (isset($this->adminUser['user_name']) && !empty($this->adminUser['user_name'])) {
            $extra['apply_name'] = $this->adminUser['user_name'];
        }
        $houseVillageCheckauthSetService = new HouseVillageCheckauthSetService();
        $orderRefundCheckWhere = array('village_id' => $orderInfo['village_id'], 'xtype' => 'order_refund_check');
        $checkauthSet = $houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
        if (!empty($checkauthSet) && ($checkauthSet['is_open'] > 0) && !empty($checkauthSet['check_level'])) {
            //需要审核
            $summaryInfo = $service_house_new_cashier->getOrderSummary(['summary_id' => $orderInfo['summary_id']], 'order_no');
            $orderRefundCheckArr = array('property_id' => $orderInfo['property_id'], 'village_id' => $orderInfo['village_id']);
            $orderRefundCheckArr['xtype'] = 'order_discard';
            $orderRefundCheckArr['order_id'] = $orderInfo['order_id'];
            $orderRefundCheckArr['other_relation_id'] = !empty($summaryInfo) ? $summaryInfo['order_no'] : '';
            $orderRefundCheckArr['money'] = $orderInfo['total_money'];
            $orderRefundCheckArr['status'] = 1;  //0未审核 1审核中 2审核通过
            $orderRefundCheckArr['apply_login_role'] = $extra['login_role'];
            $orderRefundCheckArr['apply_name'] = $extra['apply_name'];
            $orderRefundCheckArr['apply_phone'] = $extra['apply_phone'];
            $orderRefundCheckArr['apply_uid'] = $extra['apply_uid'];
            $extra_data = array('order_id' => $orderInfo['order_id'], 'discard_reason' => $discard_reason, 'total_money' => $orderInfo['total_money'], 'opt_time' => time());
            $orderRefundCheckArr['extra_data'] = json_encode($extra_data, JSON_UNESCAPED_UNICODE);
            $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
            $extra['checkauth_set'] = $checkauthSet;
            $insert_id = $houseVillageCheckauthApplyService->addApply($orderRefundCheckArr, $extra);
            if ($insert_id > 0) {
                $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $insert_id]);
                if ($order_apply['status'] == 2) {
                    //自动全额通过
                    $orderUpdateArr = array('check_status' => 3, 'check_apply_id' => $insert_id);
                    $service_house_new_cashier->saveOrder(['order_id' => $orderInfo['order_id']], $orderUpdateArr);
                } else {
                    $orderUpdateArr = array('check_status' => 1, 'check_apply_id' => $insert_id);
                    $service_house_new_cashier->saveOrder(['order_id' => $orderInfo['order_id']], $orderUpdateArr);
                    //需要审核
                    if($is_return){
                        return ['err_code'=>0,'msg'=>'操作成功！','is_check'=>1,'order_id'=>$orderInfo['order_id']];
                    }else {
                        return api_output(0, array('xtype' => 'check_opt', 'check_status' => 1, 'check_apply_id' => $insert_id), '操作成功！');
                        exit();
                    }
                }
            }
        }
        //押金解冻
        $frozen_data=['order_id'=>$orderInfo['order_id'],'type'=>3];
        (new NewPayService())->editFrozenlog($frozen_data);
        $where = array('order_id' => $orderInfo['order_id']);
        $res = $service_house_new_cashier->saveOrder($where, ['is_discard' => 2, 'discard_reason' => $discard_reason, 'update_time' => time()]);
        if($is_return){
            return ['err_code'=>0,'msg'=>'操作成功！','is_check'=>0,'order_id'=>$orderInfo['order_id']];
        }else{
            return api_output(0, [], '作废成功');
        }
    }
    
    /**
     * 获取欠费项目对应的订单列表
     * @author lijie
     * @date_time 2021/06/15
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getPayOrderList()
    {
        $village_id = $this->adminUser['village_id'];
        $project_id = $this->request->post('project_id',0);
        $room_id = $this->request->post('room_id',0);
        $position_id = $this->request->post('position_id',0);
        $key = $this->request->post('key','');
        if($key){
            $key_info = explode('|',$key);
            if(count($key_info) != 3) {
                $key_info = explode('-',$key);
            }
            if(count($key_info) != 3) {
                return api_output_error(1001, '参数异常');
            }
            $type = $key_info[2];
        }
        $where[] = ['o.project_id','=',$project_id];
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.is_discard','=',1];
        if(isset($type) && $type == 'room'){
            $where[] = ['o.room_id','=',$room_id];
        } elseif(isset($type) && $type == 'position'){
            $where[] = ['o.position_id','=',$position_id];
        }else{
            if($position_id)
                $where[] = ['o.position_id','=',$position_id];
            else
                $where[] = ['o.room_id','=',$room_id];
        }
        $service_house_new_cashier = new HouseNewCashierService();
        //$field = 'r.charge_name,o.order_id,o.modify_money,o.add_time,r.late_fee_reckon_day,r.late_fee_rate,r.late_fee_top_day,o.total_money,o.project_id,o.room_id,o.position_id,o.late_payment_money,o.late_payment_day,o.modify_time,n.charge_type,o.property_id,o.order_type,o.is_auto,o.service_start_time,o.service_end_time,r.not_house_rate,r.fees_type,r.bill_create_set,r.bill_arrears_set,r.bill_type,n.charge_type,r.charge_valid_type,r.charge_valid_time';
        $field='o.*,r.charge_name,r.late_fee_reckon_day,r.late_fee_rate,r.late_fee_top_day,r.not_house_rate,r.fees_type,r.bill_create_set,r.bill_arrears_set,r.bill_type,p.name,n.charge_number_name,n.charge_type,r.charge_valid_type,r.charge_valid_time';
        $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
        $orderRefundCheckWhere=array('village_id'=>$this->adminUser['village_id'],'xtype'=>'order_refund_check');
        $orderRefundCheckOpen=$houseVillageCheckauthSetService->isOpenSet($orderRefundCheckWhere);
        $wid=0;
        if(in_array($this->login_role,$this->villageOrderCheckRole) && $orderRefundCheckOpen>0 && isset($this->adminUser['wid']) && ($this->adminUser['wid']>0)){
            $wid=$this->adminUser['wid'];
            $userAuthLevel=$houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
            if(!empty($userAuthLevel)){
                $where['check_level_info']=array('wid'=>$this->adminUser['wid'],'check_level'=>$userAuthLevel['check_level']);
            }
        }
        $data = $service_house_new_cashier->getOrderList($where,$field,0,0,'o.order_id DESC',$village_id);
        if (isset($where['check_level_info'])) {
            unset($where['check_level_info']);
        }
        return api_output(0,$data);
    }

    /**
     * 订单详情
     * @author lijie
     * @date_time 2021/06/15
     * @return array|\json|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getPayOrderInfo()
    {
        $order_id = $this->request->post('order_id',0);
        if(!$order_id)
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_cashier = new HouseNewCashierService();
        $where[] = ['o.order_id','=',$order_id];
        $field = 'o.*,r.charge_name,p.name as project_name,p.type,r.late_fee_reckon_day,r.late_fee_rate,r.late_fee_top_day,r.charge_valid_time,r.bill_create_set,r.charge_valid_type,r.not_house_rate,r.fees_type,r.bill_arrears_set,r.bill_type';
        $data = $service_house_new_cashier->getOrderIn($where,$field);
        return api_output(0,$data);
    }

    /**
     * 获取收费项列表
     * @author lijie
     * @date_time 2021/06/16
     * @return \json
     */
    public function getCharges()
    {
        $key = $this->request->post('key','');
        if(empty($key))
            return api_output_error(1001,'缺少必传参数');
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',2000);
        $key_info = explode('|',$key);
        if(count($key_info) != 3) {
            $key_info = explode('-',$key);
        }
        if(count($key_info) != 3) {
            return api_output_error(1001,'参数异常');
        }
        $type = $key_info[2];
        if($type == 'room'){
            $where[] = ['b.vacancy_id','=',$key_info[0]];
        } else{
            $where[] = ['b.position_id','=',$key_info[0]];
        }
        $where[] = ['b.is_del','=',1];
        $field = 'r.id as charge_rule_id,b.id,b.cycle,p.name as project_name,r.charge_name,b.order_add_type,b.order_add_time,r.charge_valid_time,r.bill_type,r.is_prepaid,p.type,n.charge_type,p.id as project_id,r.charge_valid_type,b.vacancy_id,b.position_id,b.is_del,r.not_house_rate,r.fees_type,r.bill_create_set,r.bill_arrears_set,r.bill_type,n.charge_type';
        $service_house_new_cashier = new HouseNewCashierService();
        $data = $service_house_new_cashier->getChargeStandardBindList($where,$field,$page,$limit,'b.id DESC');
        //$count = $service_house_new_cashier->getChargeStandardBindCount($where,$whereOr);
        $count = count($data);
        $res['list'] = $data;
        $res['total_limit'] = 5;
        $res['count'] = $count;
        return api_output(0,$res);
    }

    /**
     *删除房间/车位绑定消费标准
     * @author lijie
     * @date_time 2021/06/17
     * @return \json
     */
    public function delChargeStandardBind()
    {
        $id = $this->request->post('charge_standard_bind_id',0);
        if(!$id){
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_new_cashier = new HouseNewCashierService();
        $where['id'] = $id;
        $res = $service_house_new_cashier->delChargeStandardBind($where);
        if($res){
            return api_output(0,[],'移除成功');
        }
        return api_output_error(1001,'操作失败');
    }

    /**
     *作废账单列表
     * @author: liukezhu
     * @date : 2021/6/17
     */
    public function cancelOrderList(){
        $service_house_new_cashier = new HouseNewCashierService();
        // 获取登录信息
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $date = $this->request->post('date','','trim');
        $garage_id = $this->request->post('garage_id',0,'intval');
        $position_num = $this->request->post('position_num','','trim');
        $project_id = $this->request->post('project_id',0,'intval');
        $rule_id = $this->request->post('rule_id',0,'intval');
        $vacancy = $this->request->post('vacancy','','trim');
        $key_val = $this->request->post('key_val','','trim');
        $value = $this->request->post('value',0);
        $service_start_time   = $this->request->post('service_start_time','','trim');
        $service_end_time    = $this->request->post('service_end_time','','trim');
        try{
            if (!empty($date)&&count($date)>0){
                if (!empty($date[0])){
                    $where[] = ['o.update_time','>=',strtotime($date[0].' 00:00:00')];
                }
                if (!empty($date[1])){
                    $where[] = ['o.update_time','<=',strtotime($date[1].' 23:59:59')];
                }

            }
            if (!empty($project_id)){
                $where[] = ['o.project_id','=',$project_id];
            }
            if (!empty($rule_id)){
                $where[] = ['o.rule_id','=',$rule_id];
            }
           /* if (!empty($vacancy)&&!empty($vacancy[3])){

                $where[] = ['o.room_id','=',$vacancy[3]];
            }*/
            if(!empty($vacancy)){
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $where_vacancy=[];
                if (isset($vacancy[3])){
                    $where_vacancy[]=['pigcms_id','=',$vacancy[3]];
                }elseif (isset($vacancy[2])){
                    $where_vacancy[]=['layer_id','=',$vacancy[2]];
                }elseif (isset($vacancy[1])){
                    $where_vacancy[]=['floor_id','=',$vacancy[1]];
                } else{
                    $where_vacancy[]=['single_id','=',$vacancy[0]];
                }
                $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
                $room_id_arr=[];
                if (!empty($vacancy_info)){
                    $vacancy_info=$vacancy_info->toArray();
                    if (!empty($vacancy_info)){
                        foreach ($vacancy_info as $vv){
                            $room_id_arr[]=$vv['pigcms_id'];
                        }
                    }
                }
                $where[] = ['o.room_id','in',$room_id_arr];
            }
            $positionGarageList=[];
            $positionList=[];
            $service_garage=new HouseVillageParkingService();
            if (!empty($garage_id)){
                $positionGarageList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.garage_id'=>$garage_id],'pp.*');
                if (empty($positionGarageList['ids'])){
                    $positionGarageList['ids']='-1';
                }
            }
            if (!empty($position_num)){
                $positionList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.position_num'=>$position_num],'pp.*');
                if (empty($positionList['ids'])){
                    $positionList['ids']='-1';
                }
            }

            if (!empty($positionList)&&!empty($positionGarageList)){
                $where[] = ['o.position_id','in',array_merge($positionList['ids'],$positionGarageList['ids'])];
            }elseif (!empty($positionList)){
                $where[] = ['o.position_id','in',$positionList['ids']];
            }elseif (!empty($positionGarageList)){
                $where[] = ['o.position_id','in',$positionGarageList['ids']];
            }
            if (!empty($key_val)&&!empty($value)){
                $where[] = ['o.'.$key_val,'=',$value];
            }
            if($service_start_time){
                $where[] =['o.service_start_time','>=',strtotime($service_start_time.' 00:00:00')];
            }
            if($service_end_time){
                $where[] =['o.service_end_time','<=',strtotime($service_end_time.' 23:59:59')];
            }
            $where[] = ['o.village_id','=',$village_id];
            $where[] = ['o.is_discard','=',2];
            $field='o.update_time,o.update_time,o.property_id,o.project_id,o.last_ammeter,o.order_type,u.realname as account,o.now_ammeter,o.role_id,o.order_id,o.room_id,o.position_id,p.name as project_name,n.charge_number_name,o.modify_money as total_money,o.name as user_name,o.phone as user_phone,o.service_start_time,o.service_end_time,o.discard_reason,o.is_refund,o.village_id';
            $list = $service_house_new_cashier->getCancelOrder1($where,'',$field,$page,$limit);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 线上支付订单
     * @author: liukezhu
     * @date : 2021/6/17
     * @return \json
     */
    public function onlineOrderList(){
        $service_house_new_cashier = new HouseNewCashierService();
        // 获取登录信息
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $date = $this->request->post('date','','trim');
        $garage_id = $this->request->post('garage_id',0,'intval');
        $position_num = $this->request->post('position_num','','trim');
        $project_id = $this->request->post('project_id',0,'intval');
        $rule_id = $this->request->post('rule_id',0,'intval');
        $vacancy = $this->request->post('vacancy','','trim');
        $key_val = $this->request->post('key_val','','trim');
        $value = $this->request->post('value','','trim');
        $pay_type=$this->request->post('pay_type',0,'trim');
        try{
            if (!empty($date)&&count($date)>0){
                if (!empty($date[0])){
                    $where[] = ['o.pay_time','>=',strtotime($date[0].' 00:00:00')];
                }
                if (!empty($date[1])){
                    $where[] = ['o.pay_time','<=',strtotime($date[1].' 23:59:59')];
                }
            }
            if (!empty($project_id)){
                $where[] = ['o.project_id','=',$project_id];
            }
            if (!empty($rule_id)){
                $where[] = ['o.rule_id','=',$rule_id];
            }
           /* if (!empty($vacancy)&&!empty($vacancy[3])){

                $where[] = ['o.room_id','=',$vacancy[3]];
            }*/
            if(!empty($vacancy)){
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $where_vacancy=[];
                if (isset($vacancy[3])){
                    $where_vacancy[]=['pigcms_id','=',$vacancy[3]];
                }elseif (isset($vacancy[2])){
                    $where_vacancy[]=['layer_id','=',$vacancy[2]];
                }elseif (isset($vacancy[1])){
                    $where_vacancy[]=['floor_id','=',$vacancy[1]];
                } else{
                    $where_vacancy[]=['single_id','=',$vacancy[0]];
                }
                $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
                $room_id_arr=[];
                if (!empty($vacancy_info)){
                    $vacancy_info=$vacancy_info->toArray();
                    if (!empty($vacancy_info)){
                        foreach ($vacancy_info as $vv){
                            $room_id_arr[]=$vv['pigcms_id'];
                        }
                    }
                }
                $where[] = ['o.room_id','in',$room_id_arr];
            }
            if (!empty($pay_type)){

                $where[] = ['o.pay_type','=',$pay_type];
            }
            $positionGarageList=[];
            $positionList=[];
            $service_garage=new HouseVillageParkingService();
            if (!empty($garage_id)){
                $positionGarageList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.garage_id'=>$garage_id],'pp.*');
                if (empty($positionGarageList['ids'])){
                    $positionGarageList['ids']='-1';
                }
            }
            if (!empty($position_num)){
                $positionList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.position_num'=>$position_num],'pp.*');
                if (empty($positionList['ids'])){
                    $positionList['ids']='-1';
                }
            }
            if (!empty($positionList)&&!empty($positionGarageList)){
                $where[] = ['o.position_id','in',array_merge($positionList['ids'],$positionGarageList['ids'])];
            }elseif (!empty($positionList)){
                $where[] = ['o.position_id','in',$positionList['ids']];
            }elseif (!empty($positionGarageList)){
                $where[] = ['o.position_id','in',$positionGarageList['ids']];
            }
            if (!empty($key_val)&&!empty($value)){
                $where[] = ['o.pay_bind_'.$key_val,'=',$value];
            }
            $where[] = ['o.village_id','=',$this->adminUser['village_id']];
            $where[] = ['o.is_discard','=',1];
            $where[] = ['o.is_paid','=',1];
            $where[] = ['o.is_online','=',1];
            $where[] = ['o.order_type','<>','non_motor_vehicle'];
            $where1 = '`o`.`refund_money`<`o`.`pay_money`';
            $field='o.*,p.name as project_name,p.img';
            $list = $service_house_new_cashier->getCancelOrder($where,$where1,$field,$page,$limit,'o.pay_time DESC');
            $houseVillageService=new HouseVillageService();
            $list['role_export']=$houseVillageService->checkPermissionMenu(112103,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }



    /**
     * 获取退款账单
     * @author: zhubaodi
     * @date : 2021/6/24
     * @return \json
     */
    public function refundOrderList(){
        $service_house_new_cashier = new HouseNewCashierService();
        // 获取登录信息
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $date = $this->request->post('date','','trim');
        $garage_id = $this->request->post('garage_id',0,'intval');
        $position_num = $this->request->post('position_num','','trim');
        $project_id = $this->request->post('project_id',0,'intval');
        $rule_id = $this->request->post('rule_id',0,'intval');
        $vacancy = $this->request->post('vacancy','','trim');
        $key_val = $this->request->post('key_val','','trim');
        $key_val1 = $this->request->post('key_val1','','trim');
        $value = $this->request->post('value','','trim');
        $pay_type=$this->request->post('pay_type',0,'trim');
        $order_status=$this->request->post('order_type',0,'intval');  //0全部 2部分退 1全退
        $service_start_time   = $this->request->post('service_start_time','','trim');
        $service_end_time    = $this->request->post('service_end_time','','trim');
        try{
            if (!empty($date)&&count($date)>0){
                if ($key_val1=='paytime'){
                    if (!empty($date[0])){
                        $where[] = ['o.pay_time','>=',strtotime($date[0].' 00:00:00')];
                    }
                    if (!empty($date[1])){
                        $where[] = ['o.pay_time','<=',strtotime($date[1].' 23:59:59')];
                    }
                }else{
                    if (!empty($date[0])){
                        $where[] = ['o.update_time','>=',strtotime($date[0].' 00:00:00')];
                    }
                    if (!empty($date[1])){
                        $where[] = ['o.update_time','<=',strtotime($date[1].' 23:59:59')];
                    }
                }

            }
           // print_r($where);exit;
            if (!empty($project_id)){
                $where[] = ['o.project_id','=',$project_id];
            }
            if (!empty($rule_id)){
                $where[] = ['o.rule_id','=',$rule_id];
            }
           /* if (!empty($vacancy)&&!empty($vacancy[3])){

                $where[] = ['o.room_id','=',$vacancy[3]];
            }*/
            if(!empty($vacancy)){
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $where_vacancy=[];
                if (isset($vacancy[3])){
                    $where_vacancy[]=['pigcms_id','=',$vacancy[3]];
                }elseif (isset($vacancy[2])){
                    $where_vacancy[]=['layer_id','=',$vacancy[2]];
                }elseif (isset($vacancy[1])){
                    $where_vacancy[]=['floor_id','=',$vacancy[1]];
                } else{
                    $where_vacancy[]=['single_id','=',$vacancy[0]];
                }
                $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
                $room_id_arr=[];
                if (!empty($vacancy_info)){
                    $vacancy_info=$vacancy_info->toArray();
                    if (!empty($vacancy_info)){
                        foreach ($vacancy_info as $vv){
                            $room_id_arr[]=$vv['pigcms_id'];
                        }
                    }
                }
                $where[] = ['o.room_id','in',$room_id_arr];
            }
            if (!empty($pay_type)){

                $where[] = ['o.pay_type','=',$pay_type];
            }
            $positionGarageList=[];
            $positionList=[];
            $service_garage=new HouseVillageParkingService();
            if (!empty($garage_id)){
                $positionGarageList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.garage_id'=>$garage_id],'pp.*');
                if (empty($positionGarageList['ids'])){
                    $positionGarageList['ids']='-1';
                }
            }
            if (!empty($position_num)){
                $positionList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.position_num'=>$position_num],'pp.*');
            }
            if (!empty($positionList['ids'])&&!empty($positionGarageList['ids'])){
                $where[] = ['o.position_id','in',array_merge($positionList['ids'],$positionGarageList['ids'])];
            }elseif (!empty($positionList['ids'])){
                $where[] = ['o.position_id','in',$positionList['ids']];
            }elseif (!empty($positionGarageList['ids'])){
                $where[] = ['o.position_id','in',$positionGarageList['ids']];
            }elseif(empty($positionList['ids'])&&!empty($position_num)){
                $where[] = ['o.position_id','=','-1'];
            }
            if (!empty($key_val)&&!empty($value)){
                $where[] = ['o.pay_bind_'.$key_val,'=',$value];
            }
            if($service_start_time){
                $where[] =['o.service_start_time','>=',strtotime($service_start_time.' 00:00:00')];
            }
            if($service_end_time){
                $where[] =['o.service_end_time','<=',strtotime($service_end_time.' 23:59:59')];
            }
            $where[] = ['o.village_id','=',$this->adminUser['village_id']];
            $where[] = ['o.is_discard','=',1];
            $where[] = ['o.is_paid','=',1];
            $where[] = ['o.is_refund','=',2];
            //$where1 = '`o`.`refund_money`=`o`.`pay_money`';
            $where1 = '`o`.`refund_money` > 0';
            if($order_status==1){
                $where1 .= ' AND `o`.`refund_money`=`o`.`pay_money`';
            }elseif($order_status==2){
                $where1 .= ' AND `o`.`refund_money`<`o`.`pay_money`';
            }
            $field='o.*,p.name as project_name';
            $list = $service_house_new_cashier->getCancelOrder($where,$where1,$field,$page,$limit);
            $houseVillageService=new HouseVillageService();
            $list['role_export']=$houseVillageService->checkPermissionMenu(112102,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }


    /**
     * 获取已缴账单
     * @author:zhubaodi
     * @date_time: 2021/6/24 17:01
     */
    public function payableOrderList(){
        $service_house_new_cashier = new HouseNewCashierService();
        // 获取登录信息
        $village_id = $this->adminUser['village_id'];
      //   print_r($this->adminUser);die;
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page          = $this->request->post('page',1);
        $limit         = $this->request->post('limit',10);
        $date          = $this->request->post('date','');
        $garage_id     = $this->request->post('garage_id',0,'intval');
        $position_num  = $this->request->post('position_num','','trim');
        $project_id    = $this->request->post('project_id',0,'intval');
        $rule_id    = $this->request->post('rule_id',0,'intval');
        $vacancy       = $this->request->post('vacancy','','trim');
        $key_val       = $this->request->post('key_val','','trim');
        $value         = $this->request->post('value','','trim');
        $pay_type      = $this->request->post('pay_type',0,'trim');
        $record_status = $this->request->post('invoice_type',0,'intval');
        $order_status  = $this->request->post('order_type',0,'intval');
        $pigcms_id     = $this->request->post('pigcms_id',0,'intval');
        $vacancy_id    = $this->request->post('vacancy_id',0,'intval');  //房间id
        $position_id   = $this->request->post('position_id',0,'intval');
        $service_start_time          = $this->request->post('service_start_time','','trim');
        $service_end_time          = $this->request->post('service_end_time','','trim');
        $menus = (isset($this->adminUser['menus']) && !empty($this->adminUser['menus'])) ? (is_array($this->adminUser['menus']) ? $this->adminUser['menus'] : explode(',', $this->adminUser['menus'])) : [];
        if (empty($vacancy_id) && !empty($room_id)) {
            $vacancy_id = $room_id;
        }
        try{
            $where=[];
            if (!empty($date)&&count($date)>0){
                if (!empty($date[0])){
                    $where[] = ['o.pay_time','>=',strtotime($date[0].' 00:00:00')];
                }
                if (!empty($date[1])){
                    $where[] = ['o.pay_time','<=',strtotime($date[1].' 23:59:59')];
                }

            }
            if (!empty($project_id)){
                $where[] = ['o.project_id','=',$project_id];
            }
            if (!empty($rule_id)){
                $where[] = ['o.rule_id','=',$rule_id];
            }
            if ($vacancy_id > 0) {
                $where[] = ['o.room_id', '=', $vacancy_id];
            } else if (!empty($pigcms_id)) {
                $service_house_village_user_bind = new HouseVillageUserBindService();
                $whereArr = array('pigcms_id' => $pigcms_id, 'status' => 1);
                $village_user_bind = $service_house_village_user_bind->getBindInfo($whereArr, 'vacancy_id');
                $vacancy_id = 0;
                if ($village_user_bind && !$village_user_bind->isEmpty()) {
                    $village_user_bind = $village_user_bind->toArray();
                    $vacancy_id = $village_user_bind['vacancy_id'];
                }
                if ($vacancy_id > 0) {
                    $where[] = ['o.room_id', '=', $vacancy_id];
                } else {
                    $where[] = ['o.pigcms_id', '=', $pigcms_id];
                }
            }
            if($position_id>0){
                $where[] = ['o.position_id','=',$position_id];
            }
           /* if (!empty($vacancy)&&!empty($vacancy[3])){

                $where[] = ['o.room_id','=',$vacancy[3]];
            }*/
            if(!empty($vacancy)){
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $where_vacancy = [];
                if (isset($vacancy[3])) {
                    $where_vacancy[] = ['pigcms_id', '=', $vacancy[3]];
                } elseif (isset($vacancy[2])) {
                    $where_vacancy[] = ['layer_id', '=', $vacancy[2]];
                } elseif (isset($vacancy[1])) {
                    $where_vacancy[] = ['floor_id', '=', $vacancy[1]];
                } else {
                    $where_vacancy[] = ['single_id', '=', $vacancy[0]];
                }
                $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy, 'pigcms_id,single_id,floor_id,layer_id,village_id');
                $room_id_arr = [];
                if (!empty($vacancy_info)) {
                    $vacancy_info = $vacancy_info->toArray();
                    if (!empty($vacancy_info)) {
                        foreach ($vacancy_info as $vv) {
                            $room_id_arr[] = $vv['pigcms_id'];
                        }
                    }
                }
                $where[] = ['o.room_id', 'in', $room_id_arr];
            }
            if (!empty($pay_type)) {
                $where[] = ['o.pay_type', '=', $pay_type];
            }
            if (!empty($order_status)) {
                if ($order_status == 3) {
                    $where[] = ['o.check_status', 'in', array(1, 2)];
                } else {
                    $where[] = ['o.is_refund', '=', $order_status];
                }

            }
            $positionGarageList=[];
            $positionList=[];
            $service_garage=new HouseVillageParkingService();
            if (!empty($garage_id)){
                $positionGarageList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.garage_id'=>$garage_id],'pp.*');
                if (empty($positionGarageList['ids'])){
                    $positionGarageList['ids']='-1';
                }
            }
            if (!empty($position_num)){
                $positionList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.position_num'=>$position_num],'pp.*');
            }
           // print_r($positionList);exit;
            if (!empty($positionList['ids']) && !empty($positionGarageList['ids'])) {
                $where[] = ['o.position_id', 'in', array_merge($positionList['ids'], $positionGarageList['ids'])];
            } elseif (!empty($positionList['ids'])) {
                $where[] = ['o.position_id', 'in', $positionList['ids']];
            } elseif (!empty($positionGarageList['ids'])) {
                $where[] = ['o.position_id', 'in', $positionGarageList['ids']];
            } elseif (!empty($position_num) && empty($positionList['ids'])) {
                $where[] = ['o.position_id', '=', '-1'];
            }
            if (!empty($record_status)) {
                $where[] = ['record_status', '=', $record_status];
            }

            if (!empty($key_val)&&!empty($value)){
                $where[] = ['o.pay_bind_'.$key_val,'=',$value];
            }
            if($service_start_time){
                $where[] =['o.service_start_time','>=',strtotime($service_start_time.' 00:00:00')];
            }
            if($service_end_time){
                $where[] =['o.service_end_time','<=',strtotime($service_end_time.' 23:59:59')];
            }
            $where[] = ['o.village_id','=',$this->adminUser['village_id']];
            $where[] = ['o.is_discard','=',1];
            $where[] = ['o.is_paid','=',1];
            $where[] = ['o.order_type','<>','non_motor_vehicle'];
           // print_r($where);exit;
            $where1 = '(`o`.`is_refund`=1 OR `o`.`refund_money`<`o`.`modify_money`)';
            $field='o.*,p.name as project_name';
            $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
            $orderRefundCheckWhere=array('village_id'=>$this->adminUser['village_id'],'xtype'=>'order_refund_check');
            $orderRefundCheckOpen=$houseVillageCheckauthSetService->isOpenSet($orderRefundCheckWhere);
            $wid=0;
            if (in_array($this->login_role, $this->villageOrderCheckRole) && $orderRefundCheckOpen > 0 && isset($this->adminUser['wid']) && ($this->adminUser['wid'] > 0)) {
                $wid = $this->adminUser['wid'];
                $userAuthLevel = $houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
                if (!empty($userAuthLevel)) {
                    $where['check_level_info'] = array('wid' => $this->adminUser['wid'], 'check_level' => $userAuthLevel['check_level']);
                }
            }
            $list = $service_house_new_cashier->getCancelOrder($where,$where1,$field,$page,$limit,'o.pay_time DESC',$menus);
            $list['orderRefundCheckOpen']=$orderRefundCheckOpen;
            $list['total_pay_money_real']=$list['total_pay_money']-$list['total_refund_money'];
            $list['total_pay_money_real'] = $list['total_pay_money_real']<0 ? 0 : formatNumber($list['total_pay_money_real'],2,1);
            $list['login_role']=$this->login_role;
            $list['wid']=$wid;
            $houseVillageService=new HouseVillageService();
            $list['role_export']=$houseVillageService->checkPermissionMenu(112100,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
            $list['role_refund']=$houseVillageService->checkPermissionMenu(112101,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 添加收费项
     * @author lijie
     * @date_time 2021/06/18
     * @return \json
     * @throws \think\Exception
     */
    public function bindRule()
    {
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $village_id = $this->adminUser['village_id'];
        $project_id = $this->request->post('project_id',0);
        $rule_id = $this->request->post('rule_id',0);
        $order_add_time = $this->request->post('order_add_time',0);
        $custom_value = $this->request->post('custom_value',1);
        $cycle = $this->request->post('cycle',1);
        $data=array();
        /****
         $configCustomizationService=new ConfigCustomizationService();
          $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
         **/
    
        $data['per_one_order'] = $this->request->param('per_one_order', 0, 'intval'); //1时 将生成多笔按一个月或一日计费的账单
        if(empty($custom_value)){
            $custom_value = 1;
        }
        if(empty($cycle)){
            $cycle = 1;
        }
        $data['cycle'] = $cycle;
        $key = $this->request->post('key','');
        if(!$project_id || !$rule_id  || empty($key))
            return api_output_error(1001,'缺少必传参数');
        $data['village_id'] = $village_id;
        $data['rule_id'] = $rule_id;
        $key_info = explode('|',$key);
        if(count($key_info) != 3) {
            $key_info = explode('-',$key);
        }
        if(count($key_info) != 3)
            return api_output_error(1001,'参数异常');
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$rule_id],'r.*');
        if (!empty($order_add_time)){
            if($info['bill_create_set'] == 2)
                $order_add_time = date('Y-m-d',strtotime($order_add_time));
            elseif ($info['bill_create_set'] == 3)
                $order_add_time = date('Y-m-d',strtotime($order_add_time));
        }
        $data['order_add_time'] = $order_add_time;
        $type = $key_info[2];
        if($type == 'room'){
            $bind_type = 1;
            $room_id = $key_info[0];
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$room_id],'single_id,floor_id,layer_id,housesize');
            if($info['fees_type'] == 2 && empty($info['unit_gage'])){
                $custom_value = $vacancy_info['housesize']?$vacancy_info['housesize']:1;
            }
            $data['single_id'] = $vacancy_info['single_id'];
            $data['floor_id'] = $vacancy_info['floor_id'];
            $data['layer_id'] = $vacancy_info['layer_id'];
            $data['vacancy_id'] = $room_id;
        } else{
            if($key_info[2] != 'position'){
                return api_output_error(1001,'请选择缴费车辆');
            }
            $bind_type = 2;
            $position_id = $key_info[0];
            $service_house_parking = new HouseVillageParkingService();
            $garage_info = $service_house_parking->getParkingPositionDetail(['pp.position_id'=>$position_id],'pp.position_num,pg.garage_num,pp.garage_id,pp.position_area');
            $data['garage_id'] = $garage_info['detail']['garage_id'];
            $data['position_id'] = $position_id;
        }
        $data['bind_type'] = $bind_type;
        $data['custom_value'] = $custom_value;
        try{
            $res = $service_house_new_charge_rule->addStandardBind($data);
            if($res)
                return api_output(0,$res,'添加成功');
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output_error(1001,'服务异常');
    }

    /**
     * 收银台手动生成账单
     * @author lijie
     * @date_time 2021/06/23
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function manualCall()
    {
        $village_id = $this->adminUser['village_id'];
        $role_id=0;
        if(in_array($this->login_role,$this->villageOrderCheckRole)){
            $role_id=$this->_uid;
        }
        $charge_standard_bind_id = $this->request->post('charge_standard_bind_id',0);
        $service_start_time = $this->request->post('service_start_time','');
        if(!$charge_standard_bind_id) {
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $service_house_new_charge = new HouseNewChargeService();
        $service_house_village = new HouseVillageService();
        $service_house_new_cashier = new HouseNewCashierService();
        $where[] = ['id','=',$charge_standard_bind_id];
        $contract_info = $service_house_new_charge_rule->getHouseVillageInfo(['village_id'=>$village_id],'contract_time_start,contract_time_end');
        $charge_standard_bind_info = $service_house_new_charge_rule->getBindDetail($where,true);
        if ($charge_standard_bind_info && !is_array($charge_standard_bind_info)) {
            $charge_standard_bind_info = $charge_standard_bind_info->toArray();
        }
        if(empty($charge_standard_bind_info)) {
            return api_output_error(1001,'数据不存在');
        }
        $cycle = $charge_standard_bind_info['cycle'];
        $x_cycle = $cycle>0 ? $cycle:0;
        if($charge_standard_bind_info['vacancy_id']){
            $type = 1;
            $id = $charge_standard_bind_info['vacancy_id'];
        }else{
            $type = 2;
            $id = $charge_standard_bind_info['position_id'];
        }
        $is_allow = $service_house_new_charge_rule->checkChargeValid($charge_standard_bind_info['project_id'],$charge_standard_bind_info['rule_id'],$id,$type);
        if(!$is_allow) {
            return api_output_error(1001,'当前收费标准未生效');
        }
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$charge_standard_bind_info['rule_id']],'n.charge_type,r.*,p.type,p.name as order_name');
        if ($info && !is_array($info)) {
            $info = $info->toArray();
        }
        if(empty($info)) {
            return api_output_error(1001,'数据不存在');
        }
        if($type == 2 && $info['fees_type'] == 2 && empty($info['unit_gage']) && $info['unit_gage_type'] != 3) {
            return api_output_error(1001,'车场没有房屋面积，无法生成账单');
        }
        $positionSize = 0;
        if($info['unit_gage_type'] == 3) {
            if(empty($charge_standard_bind_info['position_id'])){
                return api_output_error(1001,'房间没有车位面积，无法生成账单');
            }
            $positionSize = (new HouseVillageParkingPosition())->where(['position_id' =>$charge_standard_bind_info['position_id']])->value('position_area');
            if(!$positionSize || $positionSize<=0){
                return api_output_error(1001,'车位面积为0，无法生成账单');
            }
        }
        if($info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES) {
            $ruleHasParkNumInfo = $service_house_new_charge_rule->getRuleHasParkNumInfo($id, $charge_standard_bind_info['rule_id'], $type, $info);
            if (empty($ruleHasParkNumInfo) || !isset($ruleHasParkNumInfo['parkingNum']) || intval($ruleHasParkNumInfo['parkingNum']) <= 0) {
                return api_output_error(1001,'计费模式为车位数量缺少车位数量，无法生成账单');
            }
            $parkingNum  = $ruleHasParkNumInfo['parkingNum'];
        } else {
            $parkingNum = 1;
        }
        if($info['cyclicity_set'] > 0){
            if($charge_standard_bind_info['vacancy_id']) {
                $order_list = $service_house_new_cashier->getOrderLists(['o.is_discard' => 1, 'o.room_id' => $charge_standard_bind_info['vacancy_id'], 'o.project_id' => $charge_standard_bind_info['project_id'], 'o.position_id' => 0, 'o.rule_id' => $info['id'], 'o.is_refund' => 1], 'o.*');
            }else {
                $order_list = $service_house_new_cashier->getOrderLists(['o.is_discard' => 1, 'o.position_id' => $charge_standard_bind_info['position_id'], 'o.project_id' => $charge_standard_bind_info['project_id'], 'o.rule_id' => $info['id'], 'o.is_refund' => 1], 'o.*');
            }
            $order_count = 0;
            if($order_list){
                $order_list = $order_list->toArray();
                if(count($order_list) >= $info['cyclicity_set']) {
                    return api_output_error(1001,'超过最大缴费周期数');
                }
                foreach ($order_list as $item){
                    if($item['service_month_num'] == 0) {
                        $order_count += 1;
                    }
                    else {
                        $order_count = $order_count+$item['service_month_num']+$item['service_give_month_num'];
                    }
                }
                if($order_count >= $info['cyclicity_set']) {
                    return api_output_error(1001,'超过最大缴费周期数');
                }
            }
            if($cycle>0){
                $order_count+=$cycle;
            }
            if($order_count>$info['cyclicity_set']){
                return api_output_error(1001,'超过最大缴费周期数!');
            }
        }
        $housesize = 0;
        if($charge_standard_bind_info['vacancy_id']){
            /*
            $condition1 = [];
            $condition1[] = ['vacancy_id','=',$charge_standard_bind_info['vacancy_id']];
            $condition1[] = ['status','=',1];
            $condition1[] = ['type','in',[0,3,1,2]];
            $bind_list = $service_house_village_user_bind->getList($condition1,true);
            */
            //使用房子的 未入住状态来判断
            $whereArrTmp = array();
            $whereArrTmp[] = array('pigcms_id', '=', $charge_standard_bind_info['vacancy_id']);

            $whereArrTmp[] = array('status', 'in', [1, 2, 3]);
            $whereArrTmp[] = array('is_del', '=', 0);
            $room_vacancy = $service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
            if ($room_vacancy && !is_array($room_vacancy)) {
                $room_vacancy = $room_vacancy->toArray();
            }
            if (!empty($room_vacancy)) {
                $housesize = isset($info['housesize']) ? $info['housesize'] : 0;
            }
            $whereArrTmp[]=array('user_status','=',2);
            $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
            $not_house_rate = 100;
            if($room_vacancy && !$room_vacancy->isEmpty()){
                $room_vacancy = $room_vacancy->toArray();
                if(!empty($room_vacancy)){
                    $not_house_rate = $info['not_house_rate'];
                }
            }
            $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'vacancy_id'=>$charge_standard_bind_info['vacancy_id']]);
        }else{
            $service_house_village_parking = new HouseVillageParkingService();
            $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$charge_standard_bind_info['position_id']]);
            if($carInfo){
                $carInfo = $carInfo->toArray();
            }
            if(empty($carInfo)) {
                $not_house_rate = $info['not_house_rate'];
            }
            else {
                $not_house_rate = 100;
            }
            if($info['unit_gage_type'] == 3){
                $housesize = $positionSize;
            }
        }
        if($charge_standard_bind_info['position_id']){
            $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'position_id'=>$charge_standard_bind_info['position_id']]);
        }
        if(isset($projectBindInfo) && !empty($projectBindInfo)){
            if($projectBindInfo['custom_value']){
                $custom_value = $projectBindInfo['custom_value'];
                $custom_number = $custom_value;
            }else{
                $custom_value = 1;
            }
        }else{
            $custom_value = 1;
        }

        if($not_house_rate<=0 || $not_house_rate>100){
            $not_house_rate=100;
        }
        $postData['order_type'] = $info['charge_type'];
        $charge_type_arr=$service_house_new_charge->charge_type;
        $postData['order_name'] = isset($charge_type_arr[$info['charge_type']]) ? $charge_type_arr[$info['charge_type']]:$info['charge_type'];
        if(isset($info['order_name']) && !empty($info['order_name'])){
            $postData['order_name'] =$info['order_name'];
        }
        $postData['village_id'] = $charge_standard_bind_info['village_id'];
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$charge_standard_bind_info['village_id']],'property_id');
        $postData['property_id'] = $village_info['property_id'];
        if($info['fees_type'] == 1){
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$info['rate']*$cycle;
        }else{
            if ($info['charge_type']=='property'&&$custom_value<=1){
                $custom_number=$custom_value=$housesize;
            }
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$custom_value*$info['rate']*$cycle;
        }

        $rule_digit=-1;
        if(isset($info['rule_digit']) && $info['rule_digit']>-1 && $info['rule_digit']<5){
            $rule_digit=$info['rule_digit'];
        }
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);

        if($rule_digit>-1 && $rule_digit<5){
            if(!empty($digit_info)){
                $digit_info['meter_digit']=$rule_digit;
                $digit_info['other_digit']=$rule_digit;
            }else{
                $digit_info=array('type'=>1);
                $digit_info['meter_digit']=$rule_digit;
                $digit_info['other_digit']=$rule_digit;
            }
        }
        if($info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES && $parkingNum > 1) {
            $postData['total_money'] = $postData['total_money'] * intval($parkingNum);
            $postData['parking_num'] = intval($parkingNum);
            $postData['parking_lot'] = isset($ruleHasParkNumInfo) && isset($ruleHasParkNumInfo['parking_lot']) ? $ruleHasParkNumInfo['parking_lot'] : '';
        }
        if (!empty($digit_info)) {
            if ($postData['order_type'] == 'water' || $postData['order_type'] == 'electric' || $postData['order_type'] == 'gas') {
                $postData['total_money'] = formatNumber($postData['total_money'], $digit_info['meter_digit'], $digit_info['type']);
            } else {
                $postData['total_money'] = formatNumber($postData['total_money'], $digit_info['other_digit'], $digit_info['type']);
            }
        }
        $postData['total_money'] = formatNumber($postData['total_money'], 2, 1);
        $postData['modify_money'] = $postData['total_money'];
        $postData['is_paid'] = 2;
        $postData['role_id'] = $role_id;
        $postData['is_prepare'] = 2;
        //$postData['service_month_num'] = $info['cyclicity_set'];
        $postData['rule_id'] = $info['id'];
        $postData['project_id'] = $info['charge_project_id'];
        $postData['order_no'] = '';
        $postData['add_time'] = time();
        if($not_house_rate>0 && $not_house_rate<100){
            $postData['not_house_rate'] = $not_house_rate;
        }
        if(isset($custom_number)){
            $postData['number'] = $custom_number;
        }
        $postData['from'] = 1;
        if($info['type'] == 2){
            $postData['service_month_num'] = $cycle;
            $projectInfo = $service_house_new_cashier->getProjectInfo(['id'=>$info['charge_project_id']],'subject_id');
            $numberInfo = $service_house_new_cashier->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
            if($type ==1){
                $last_order = $service_house_new_cashier->getOrderLog([['room_id','=',$charge_standard_bind_info['vacancy_id']],['order_type','=',$numberInfo['charge_type']],['project_id','=',$info['charge_project_id']],['position_id','=',0]],true,'id DESC');
            } else{
                $last_order = $service_house_new_cashier->getOrderLog([['position_id','=',$charge_standard_bind_info['position_id']],['order_type','=',$numberInfo['charge_type']],['project_id','=',$info['charge_project_id']]],true,'id DESC');
            }

            //查询未缴账单
            $subject_id_arr = $service_house_new_cashier->getNumberArr(['charge_type'=>$numberInfo['charge_type'],'status'=>1],'id');
            if (!empty($subject_id_arr)){
                $getProjectArr=$service_house_new_cashier->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
            }
            if($type == 1){
                $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$charge_standard_bind_info['vacancy_id'],'order_type'=>$numberInfo['charge_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            } else{
                $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$charge_standard_bind_info['position_id'],'order_type'=>$numberInfo['charge_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            }
            if (cfg('new_pay_order')==1&&!empty($pay_order_info)&& $pay_order_info['service_end_time']>100){
                if ($pay_order_info['project_id']!=$info['charge_project_id']){
                    return api_output_error(1001,'当前房间的该类别下有其他项目的待缴账单，无法生成账单');
                }
                $postData['service_start_time'] = $pay_order_info['service_end_time']+1;
                $postData['service_start_time'] = strtotime(date('Y-m-d',$postData['service_start_time']));
                if($info['bill_create_set'] == 1){
                    $postData['service_end_time'] = $postData['service_start_time']+86400*$cycle-1;
                }elseif ($info['bill_create_set'] == 2){
                    //todo 判断是不是按照自然月来生成订单
                    if(cfg('open_natural_month') == 1){
                        $start_d=date('d',$postData['service_start_time']);
                        $tmp_service_end_time=strtotime("+$cycle month",$postData['service_start_time']);
                        $end_d=date('d',$tmp_service_end_time);
                        if($start_d!=$end_d){
                            $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                            $end_date_time=strtotime($end_date);
                            $tmp_service_end_time=$end_date_time;
                        }
                        $postData['service_end_time'] = $tmp_service_end_time-1;
                    }else{
                        $cycle = $cycle*30;
                        $postData['service_end_time'] = strtotime("+$cycle day",$postData['service_start_time'])-1;
                    }
                }else{
                    $postData['service_end_time'] = strtotime("+$cycle year",$postData['service_start_time'])-1;
                }
            }else{
                if($numberInfo['charge_type'] == 'property'){
                    if($type != 1){
                        $where22=[
                            ['position_id','=',$charge_standard_bind_info['position_id']],
                            ['order_type','=',$numberInfo['charge_type']],
                        ];
                    }else{
                        $where22=[
                            ['room_id','=',$charge_standard_bind_info['vacancy_id']],
                            ['order_type','=',$numberInfo['charge_type']],
                            ['position_id','=',0]
                        ];
                    }
                    $new_order_log = $service_house_new_cashier->getOrderLog($where22,true,'id DESC');
                    if(!empty($new_order_log)){
                        $last_order=$new_order_log;
                    }
                }
                if($service_start_time){
                    $service_start_time_tmp=strtotime($service_start_time);
                    if($info['charge_valid_type'] == 1){
                        $postData['service_start_time'] = strtotime(date('Y-m-d',$service_start_time_tmp));
                    }
                    elseif($info['charge_valid_type'] == 2){
                        $postData['service_start_time'] = strtotime(date('Y-m-d',$service_start_time_tmp));
                    }
                    else {
                        $postData['service_start_time'] = strtotime(date('Y-m-d',$service_start_time_tmp));
                    }
                    if($last_order && $last_order['service_end_time']>1){
                        $updateLogArr=array('service_start_time'=>$service_start_time_tmp,'service_end_time'=>$service_start_time_tmp);
                        $whereLogArr=array();
                        $whereLogArr[]=array('order_id','>',0);
                        $whereLogArr[]=array('project_id','=',$last_order['project_id']);
                        $whereLogArr[]=array('order_type','=',$last_order['order_type']);
                        $whereLogArr[]=array('room_id','=',$last_order['room_id']);
                        $whereLogArr[]=array('village_id','=',$last_order['village_id']);
                        $service_house_new_cashier->saveOrderLog($whereLogArr,$updateLogArr);
                    }
                }elseif($last_order && $last_order['service_end_time']>100){
                    $postData['service_start_time'] = $last_order['service_end_time']+1;
                    $postData['service_start_time'] = strtotime(date('Y-m-d',$postData['service_start_time']));
                }elseif($charge_standard_bind_info['order_add_time']){
                    $postData['service_start_time'] = strtotime(date('Y-m-d',$charge_standard_bind_info['order_add_time']));
                    if(!$postData['service_start_time']){
                        $postData['service_start_time'] = strtotime(date('Y-m-d',$info['charge_valid_time']));
                    }
                }else{
                    $postData['service_start_time'] = strtotime(date('Y-m-d',$info['charge_valid_time']));
                }
                if($info['bill_create_set'] == 1){
                    $postData['service_end_time'] = $postData['service_start_time']+86400*$cycle-1;
                }elseif ($info['bill_create_set'] == 2){
                    //todo 判断是不是按照自然月来生成订单
                    if(cfg('open_natural_month') == 1){
                        $start_d=date('d',$postData['service_start_time']);
                        $tmp_service_end_time=strtotime("+$cycle month",$postData['service_start_time']);
                        $end_d=date('d',$tmp_service_end_time);
                        if($start_d!=$end_d){
                            $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                            $end_date_time=strtotime($end_date);
                            $tmp_service_end_time=$end_date_time;
                        }
                        $postData['service_end_time'] = $tmp_service_end_time-1;
                    }else{
                        $cycle = $cycle*30;
                        $postData['service_end_time'] = strtotime("+$cycle day",$postData['service_start_time'])-1;
                    }
                }else{
                    $postData['service_end_time'] = strtotime("+$cycle year",$postData['service_start_time'])-1;
                }
            }
            if(isset($contract_info['contract_time_start']) && $contract_info['contract_time_start'] > 1){
                if($postData['service_start_time'] < $contract_info['contract_time_start'] || $postData['service_start_time'] > $contract_info['contract_time_end']){
                    return api_output_error(1001,'账单开始时间不在合同范围内');
                }
                if($postData['service_end_time'] < $contract_info['contract_time_start'] || $postData['service_end_time'] > $contract_info['contract_time_end']){
                    return api_output_error(1001,'账单结束时间不在合同范围内！');
                }
            }
        }
        if($info['type'] == 1||$info['type'] == 3){
            $postData['service_start_time'] = time();
            $postData['service_end_time'] = time();
        }
        $postData['unit_price'] = $info['charge_price'];
        if($info['fees_type'] == 4&&empty($charge_standard_bind_info['position_id'])){
            return api_output_error(1001,'该收费标准需绑定车位才能生成账单');
        }
        if($charge_standard_bind_info['vacancy_id']){
            $postData['room_id'] = $charge_standard_bind_info['vacancy_id'];
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$charge_standard_bind_info['vacancy_id']],['type','in','0,3'],['status','=',1]],'uid,pigcms_id,name,phone');
            if($user_info){
                $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                $postData['name'] = $user_info['name']?$user_info['name']:'';
                $postData['uid'] = $user_info['uid']?$user_info['uid']:0;
                $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
            }
        }
        if($charge_standard_bind_info['position_id']){
            $service_house_village_parking = new HouseVillageParkingService();
            $postData['position_id'] = $charge_standard_bind_info['position_id'];
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$postData['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'uid,pigcms_id,name,phone,vacancy_id');
            */
            $user_info=$service_house_new_cashier->getRoomUserBindByPosition($charge_standard_bind_info['position_id'],$charge_standard_bind_info['village_id']);
            if($user_info){
                $postData['pigcms_id'] = $user_info['pigcms_id'] ? $user_info['pigcms_id']:0;
                $postData['name'] = $user_info['name'] ? $user_info['name']:'';
                $postData['uid'] = $user_info['uid']?$user_info['uid']:0;
                $postData['phone'] = $user_info['phone'] ? $user_info['phone']:'';
                $postData['room_id'] = $user_info['vacancy_id' ]? $user_info['vacancy_id']:0;
            }
            if($info['fees_type'] == 4){
                $car_info= $service_house_village_parking->getCar(['car_position_id'=>$postData['position_id']],'car_id,province,car_number,end_time');
                $postData['car_type'] = 'month_type';
                $postData['is_prepare'] = 2;
                $postData['car_number'] = !empty($car_info)?$car_info['province'].$car_info['car_number']:'';
                $postData['car_id'] = !empty($car_info)?$car_info['car_id']:0;
                $postData['service_month_num'] =$cycle?$cycle:1 ;
                $postData['service_start_time'] =$car_info['end_time']>time()?($car_info['end_time']+1):strtotime(date('Y-m-d 00:00:00'));
                if($info['bill_create_set'] == 1){
                    $postData['service_end_time'] = $postData['service_start_time']+86400*$cycle-1;
                }elseif ($info['bill_create_set'] == 2){
                    //todo 判断是不是按照自然月来生成订单
                    if(cfg('open_natural_month') == 1){
                        $start_d=date('d',$postData['service_start_time']);
                        $tmp_service_end_time=strtotime("+$cycle month",$postData['service_start_time']);
                        $end_d=date('d',$tmp_service_end_time);
                        if($start_d!=$end_d){
                            $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                            $end_date_time=strtotime($end_date);
                            $tmp_service_end_time=$end_date_time;
                        }
                        $postData['service_end_time'] = $tmp_service_end_time-1;
                    }else{
                        $cycle = $cycle*30;
                        $postData['service_end_time'] = strtotime("+$cycle day",$postData['service_start_time'])-1;
                    }
                }else{
                    $postData['service_end_time'] = strtotime("+$cycle year",$postData['service_start_time'])-1;
                }
            }
        }
        $unify_flage_id='130'.date('YmdHis').rand(100000,999999);
        $tmp_cycle=0;
        if(isset($charge_standard_bind_info['per_one_order']) && $charge_standard_bind_info['per_one_order']>0 && $info['bill_create_set']==2 && $x_cycle>1){
            //月按月拆
            $tmp_cycle=$x_cycle;
        }else if(isset($charge_standard_bind_info['per_one_order']) && $charge_standard_bind_info['per_one_order']>0 && $info['bill_create_set']==3){
            //年按月拆
            $tmp_cycle=$x_cycle*12;
        }

        if($tmp_cycle>1){
            fdump_api(['postData'=>$postData,'tmp_cycle'=>$tmp_cycle],'000manualCall',1);
            $postData['unify_flage_id']=$unify_flage_id;
            $service_start_time=$postData['service_start_time'];
            $service_end_time=$postData['service_end_time'];
            $total_money=$postData['total_money'];
            $modify_money=$postData['modify_money'];
            $service_month_num=$postData['service_month_num'];
            //拆订单 拆成按一个月一个月的
            $month_end_time_arr=array();
            $total_money_arr=array();
            $tmp_total_money=$total_money/$tmp_cycle;
            $tmp_total_money=round($tmp_total_money,2);
            $tmp_total_money=$tmp_total_money*1;
            for($ii=1;$ii<=$tmp_cycle;$ii++){
                $per_total_money=$tmp_total_money;
                if($ii==1){
                    //第一次
                    $tmp_service_start_time=$service_start_time;
                    $tmp_service_end_time=strtotime("+1 month",$tmp_service_start_time)-1;
                }elseif($ii==$tmp_cycle){
                    //最后一次
                    $mckey=$ii-1;
                    $tmp_service_start_time=$month_end_time_arr[$mckey]+1;
                    $tmp_service_end_time=$service_end_time;
                    $x_total_money=array_sum($total_money_arr);
                    $x_total_money=round($x_total_money,2);
                    $x_total_money=$x_total_money*1;
                    $per_total_money=$total_money-$x_total_money;
                    $per_total_money=round($per_total_money,2);
                }else{
                    $mckey=$ii-1;
                    $tmp_service_start_time=$month_end_time_arr[$mckey]+1;
                    $tmp_service_end_time=strtotime("+1 month",$tmp_service_start_time)-1;
                }
                $postData['service_start_time']=$tmp_service_start_time;
                $postData['service_end_time']=$tmp_service_end_time;
                $month_end_time_arr[$ii]=$tmp_service_end_time;
                $postData['service_month_num']=1;
                $postData['total_money']=$per_total_money;
                $postData['modify_money']=$per_total_money;
                $total_money_arr[]=$per_total_money;
                fdump_api(['addOrder','postData'=>$postData,'tmp_cycle'=>$tmp_cycle],'000manualCall',1);
                $res = $service_house_new_cashier->addOrder($postData);
                if($res){
                    if($postData['order_type'] == 'property' && intval(cfg('cockpit')) && isset($postData['pigcms_id']) && !empty($postData['pigcms_id'])){
                        $system_remarks=(new StorageService())->getRoleData($this->_uid,$this->login_role,$this->adminUser);
                        $uid=(isset($user_info['uid'])&&!empty($user_info['uid']))?$user_info['uid']:0;
                        if (!empty($uid)){
                            $result=(new StorageService())->userBalanceChange($uid,2,$postData['modify_money'],$system_remarks['remarks'],'收银台手动生成账单，物业费自动扣除余额',$res,$this->adminUser['village_id']);
                        }
                    }
                }
            }
            return api_output(0,['msg'=>'账单已生成','status'=>0],'账单已生成');
        }
        $res = $service_house_new_cashier->addOrder($postData);
        if($res){
            if($postData['order_type'] == 'property' && intval(cfg('cockpit')) && isset($postData['pigcms_id']) && !empty($postData['pigcms_id'])){
                $system_remarks=(new StorageService())->getRoleData($this->_uid,$this->login_role,$this->adminUser);
                $uid=(isset($user_info['uid'])&&!empty($user_info['uid']))?$user_info['uid']:0;
                if (!empty($uid)){
                    $result=(new StorageService())->userBalanceChange($uid,2,$postData['modify_money'],$system_remarks['remarks'],'收银台手动生成账单，物业费自动扣除余额',$res,$this->adminUser['village_id']);
                    if($result['error']){
                        return api_output(0,[
                            'msg'=>$result['msg'],
                            'status'=>1,
                            'param'=>array(
                                'order_id'=>$res,
                                'pigcms_id'=>$postData['pigcms_id']
                            )
                        ],$result['msg']);
                    }
                }

            }
            return api_output(0,['msg'=>'账单已生成','status'=>0],'账单已生成');
        }
        return api_output_error(1001,'服务异常');
    }

    /**
     * 收费项目列表
     * @author lijie
     * @date_time 2021/06/23
     * @return \json
     */
    public function ChargeProjectList()
    {
        $village_id = $this->adminUser['village_id'];
        $HouseNewChargeProjectService = new HouseNewChargeProjectService();
        try{
            $typeAry = (new HouseNewChargeService())->charge_type;
            $typeAry = array_keys($typeAry);
            $key = array_search('qrcode',$typeAry);
            if($key!==false){
                array_splice($typeAry,$key,1);
            }

            $where[] = ['p.village_id','=',$village_id];
            $where[] = ['p.status','=',1];
            $where[] = ['n.charge_type','in',$typeAry];
            $list = $HouseNewChargeProjectService->getProjectListByChargeType($where,'p.id,p.name');
           
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 项目对应的消费标准列表
     * @author lijie
     * @date_time 2021/06/24
     * @return \json
     */
    public function ChargeRuleList(){
        $charge_project_id = $this->request->post('charge_project_id');
        $village_id = $this->adminUser['village_id'];
        if(!$charge_project_id)
        {
            return api_output_error(1001,'必传参数缺失');
        }
        $HouseNewChargeRuleService = new HouseNewChargeRuleService();
        $rule_id = $HouseNewChargeRuleService->getValidChargeRule($charge_project_id);
        $param=[
            'charge_project_id'=>$charge_project_id,
            'village_id'=>$village_id,
            'status'=>1,
            //'id'=>$rule_id,
        ];
        try{
            $list = $HouseNewChargeRuleService->getLists($param,'id,charge_name,charge_valid_time,bill_create_set,charge_valid_type');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }


    /**
     * 消费标准详情
     * @author lijie
     * @date_time 2021/06/24
     * @return \json
     */
    public function ruleInfo()
    {
        $rule_id = $this->request->post('rule_id',0);
        if(!$rule_id)
            return api_output_error(1001,'必传参数缺失');
        try{
            $HouseNewChargeRuleService = new HouseNewChargeRuleService();
            $list = $HouseNewChargeRuleService->getRuleInfo($rule_id);
	    $list['is_grapefruit_prepaid']=1;
            /**** 
            $configCustomizationService=new ConfigCustomizationService();
            $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
            if($is_grapefruit_prepaid==1){
                $list['is_grapefruit_prepaid'] = $is_grapefruit_prepaid;
            }
             */
            
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**

     * 查询订单详情
     * @author:zhubaodi
     * @date_time: 2021/6/25 16:04
     */
    public function payOrderInfo(){

        $order_id = $this->request->post('id',0,'intval');
        if(!$order_id)
            return api_output_error(1001,'必传参数缺失');
        try{
            $HouseNewCashierService = new HouseNewCashierService();
            $data = $HouseNewCashierService->getPayOrderInfo($order_id,true);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);

    }

    /**
     * 查询支付方式列表
     * @author:zhubaodi
     * @date_time: 2021/9/16 14:45
     */
    public function payTypeList(){
        $property_id = $this->adminUser['property_id'];
	    $village_id = $this->adminUser['village_id'];
        $type = $this->request->post('type',0,'intval');
        try {
			$cacheKey = 'village:payTypeList:'.$village_id.'type'.$type;
	        $data     = Cache::get($cacheKey);
			if (!empty($data)){
				return api_output(0, $data); 
			}
            $HouseNewCashierService = new HouseNewCashierService();
            $data = $HouseNewCashierService->getPayTypeList($property_id,$type);
			Cache::tag('village:cache:'.$village_id)->set($cacheKey,$data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data);
    }

    /**
     * 查询退款纪录
     * @author:zhubaodi
     * @date_time: 2021/6/25 16:04
     */
    public function refundList()
    {
        $order_id = $this->request->post('order_id', 0, 'intval');
        $page = $this->request->post('page', 0, 'intval');
        $limit = $this->request->post('limit', 10, 'intval');
        if (!$order_id)
            return api_output_error(1001, '必传参数缺失');
        try {
            $HouseNewCashierService = new HouseNewCashierService();
            $data = $HouseNewCashierService->getRefundList($order_id, $page, $limit);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data);
    }
   /**
     * 获取应收金额和合计金额
     * @author lijie
     * @date_time 2021/06/24
     * @return \json
     */
    public function getMoney()
    {
        $order_list = $this->request->post('order_list',[]);
        if(empty($order_list))
            return api_output_error(1001,'缺少必传参数');
        $total_money = 0.00;
        $pay_money = 0.00;
        $property_id = $order_list[0]['property_id'];
        $db_house_property_digit = new HousePropertyDigitService();
        $digit_info = $db_house_property_digit->get_one_digit(['property_id'=>$property_id]);
        /*if($digit_info){
            $digit_info = $digit_info->toArray();
        }*/
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $discount_money=0;
        $service_house_new_cashier = new HouseNewCashierService();
        $rule_order_discount = array();
        if ($is_grapefruit_prepaid == 1) {
            foreach ($order_list as $fkk => $fvv) {
                if(isset($fvv['detail_order']) && !empty($fvv['detail_order'])){
                    foreach ($fvv['detail_order'] as $v) {
                        $oneChargeRule=$service_house_new_cashier->getOneChargeRule(array('id' => $v['rule_id']),'id,charge_name,charge_valid_type');
                        $charge_valid_type=!empty($oneChargeRule)&&isset($oneChargeRule['charge_valid_type']) ? $oneChargeRule['charge_valid_type']:0;
                        $month_num=$v['service_month_num'];
                        if(isset($v['unify_flage_id']) && !empty($v['unify_flage_id']) && $charge_valid_type==3){
                            $month_num=$month_num/12;
                        }
                        if (isset($rule_order_discount[$v['rule_id']])) {
                            $rule_order_discount[$v['rule_id']]['num'] += $month_num;
                            $rule_order_discount[$v['rule_id']]['money'] += ($v['modify_money'] + $v['late_payment_money']);
                        } else {
                            $rule_order_discount[$v['rule_id']] = array();
                            $rule_order_discount[$v['rule_id']]['rule_id'] = $v['rule_id'];
                            $rule_order_discount[$v['rule_id']]['num'] = $month_num;
                            $rule_order_discount[$v['rule_id']]['money'] = ($v['modify_money'] + $v['late_payment_money']);
                        }
                    }
                }elseif(isset($fvv['rule_id'])){
                    $oneChargeRule=$service_house_new_cashier->getOneChargeRule(array('id' => $fvv['rule_id']),'id,charge_name,charge_valid_type');
                    $charge_valid_type=!empty($oneChargeRule)&&isset($oneChargeRule['charge_valid_type']) ? $oneChargeRule['charge_valid_type']:0;
                    $fmonth_num=$fvv['service_month_num'];
                    if(isset($fvv['unify_flage_id']) && !empty($fvv['unify_flage_id']) && $charge_valid_type==3){
                        $fmonth_num=$fmonth_num/12;
                    }
                    if (isset($rule_order_discount[$fvv['rule_id']])) {
                        $rule_order_discount[$fvv['rule_id']]['num'] += $fmonth_num;
                        $rule_order_discount[$fvv['rule_id']]['money'] += ($fvv['modify_money'] + $fvv['late_payment_money']);
                    } else {
                        $rule_order_discount[$fvv['rule_id']] = array();
                        $rule_order_discount[$fvv['rule_id']]['rule_id'] = $fvv['rule_id'];
                        $rule_order_discount[$fvv['rule_id']]['num'] = $fmonth_num;
                        $rule_order_discount[$fvv['rule_id']]['money'] = ($fvv['modify_money'] + $fvv['late_payment_money']);
                    }
                }
            }
            
            foreach ($rule_order_discount as $kk=>$rv) {
                $rv['num']=round($rv['num'],2);
                $rv['num']=floor($rv['num']);
                $rv['num']=$rv['num']*1;
                $discountArr = $service_house_new_cashier->getChargePrepaidDiscount($rv['rule_id'], $rv);
                $rule_order_discount[$kk]['optimum']=$discountArr['optimum'];
                $rule_order_discount[$kk]['discount_money']=$discountArr['discount_money'];
                $discount_money += $discountArr['discount_money'];
            }
        }
        foreach ($order_list as $v) {
             $total_money += ($v['total_money']);
             $pay_money += ($v['modify_money'] + $v['late_payment_money']);

        }
        $pay_money=$pay_money-$discount_money;
        $total_money=formatNumber($total_money,2,1);
        $pay_money=formatNumber($pay_money,2,1);
        $data['total_money'] = $total_money;
        $data['pay_money'] = $pay_money;
        $data['discount_money'] = formatNumber($discount_money);
        $data['rule_order_discount'] =$rule_order_discount;
        return api_output(0,$data);
    }

    /**
     * 获取临时二维码
     * @author lijie
     * @date_time 2021/06/28
     * @return \json
     * @throws \think\Exception
     */
    public function getCode()
    {
        $qrcode_id = $this->request->post('qrcode_id',300000000);
        $summary_id = $this->request->post('order_id',0);
        if(!$summary_id)
            return api_output_error(1001,'缺少必传参数');
        $service_recognition = new RecognitionService();
        $data = $service_recognition->getTmpQrcode($summary_id*1+$qrcode_id);
        return api_output(0,$data);
     }

    /**
     * 生成支付账单
     * @author lijie
     * @date_time 2021/06/25
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function goPay()
    {
        $role_id=0;
        if(in_array($this->login_role,$this->villageOrderCheckRole)){
            $role_id=$this->_uid;
        }
        $village_id = $this->adminUser['village_id'];
        $pay_type = $this->request->post('pay_type',0);
        $offline_pay_type = $this->request->post('offline_pay_type','');
        $order_list = $this->request->post('order_list',[]);
        $auth_code = $this->request->post('auth_code','');
        $remark = $this->request->post('remark','');
        $offline_pay_type_mix = $this->request->post('offline_pay_type_mix','');  //混合下线支付
        $extra_data=array();
        if(!empty($offline_pay_type_mix) && is_array($offline_pay_type_mix) ){
            $extra_data['offline_pay_type_mix']=$offline_pay_type_mix;
        }
        $param = [];
        $param['pay_money'] = $this->request->post('pay_money','');//待支付金额
        $param['deposit_money'] = $this->request->post('deposit_money','');//押金抵扣金额
        $param['deposit_type'] = $this->request->post('deposit_type','');//是否开启押金抵扣
        if(empty($pay_type) || empty($order_list))
            return api_output_error(1001,'缺少必传参数');
        if($pay_type == 3 && empty($auth_code))
            return api_output_error(1001,'缺少付款码');
        $service_new_pay = new NewPayService();
        try{
            $param['from'] = 1;
            $data = $service_new_pay->goPay($order_list,$village_id,$pay_type,$offline_pay_type,$auth_code,$remark,$extra_data,$role_id,$param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 查询订单支付状态
     * @author lijie
     * @date_time 2021/10/26
     * @return array|\json
     * @throws \think\Exception
     */
    public function queryScanPay()
    {
        $order_no = $this->request->post('order_no','');
        $pay_type = $this->request->post('pay_type','');
        $summary_id = $this->request->post('summary_id',0);
        if(empty($order_no) || empty($pay_type) || !$summary_id)
            return api_output_error(1001,'缺少必传参数');
        $service_pay = new PayService();
        $res = $service_pay->queryScanPay($order_no,$pay_type);
        fdump_api(['summary_id' => $summary_id,'order_no' => $order_no,'pay_type' => $pay_type,'res' => $res],'000queryScanPay');
        if($res['status'] == 1){
            $service_new_pay = new NewPayService();
            $service_plat_order = new PlatOrderService();
            $plat_order['pay_type'] = $res['pay_type'];
            $plat_order['orderid'] = $res['order_no'];
            $plat_order['third_id'] = $res['transaction_no'];
            $plat_order['pay_time'] = time();
            $plat_order['paid'] = 1;
            $plat_id = $service_plat_order->savePlatOrder(['business_id'=>$summary_id,'business_type '=>'village_new_pay'],$plat_order);
            $res = $service_new_pay->offlineAfterPay($summary_id);
            $data =  ['status'=>1];
        }elseif ($res['status'] == 2){
            $data = ['status'=>2];
        }else{
            $data = ['status'=>0];
        }
        return api_output(0,$data);
    }

    /**
     * 扫码枪支付回调
     * @author lijie
     * @date_time 2021/10/26
     * @return bool|\json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function afterPay()
    {
        $summary_id = $this->request->post('summary_id',0);
        if(!$summary_id)
            return api_output_error(1001,'缺少必传参数');
        $service_new_pay = new NewPayService();
        $res = $service_new_pay->offlineAfterPay($summary_id);
        return true;
    }

    /**
     * 获取收费标准预缴周期列表
     * @author lijie
     * @date_time 2021/06/25
     * @return \json
     */
    public function getPrepaid()
    {
        $village_id = $this->adminUser['village_id'];
        $charge_rule_id = $this->request->post('charge_rule_id',0);
        if(!$charge_rule_id || !$village_id)
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_charge_prepaid = new HouseNewChargePrepaidService();
        $where['charge_rule_id'] = $charge_rule_id;
        $where['village_id'] = $village_id;
        $where['status'] = 1;
        try{
            $data = $service_house_new_charge_prepaid->getLists($where,true);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 添加退款纪录
     * @author:zhubaodi
     * @date_time: 2021/6/25 18:59
     */
    public function addRefundInfo(){
        $role_id=$this->_uid;
        $order_id = $this->request->post('order_id',0,'intval');
        $refund_type= $this->request->post('refund_type',0,'intval');
        $refund_money = $this->request->post('refund_money','','trim');
        $refund_reason= $this->request->post('refund_reason','','trim');
        if(empty($order_id)){
            return api_output_error(1001,'账单id不能为空');
        }
        if(empty($refund_type)){
            return api_output_error(1001,'请选择退款模式');
        }
        if(empty($refund_money) || !is_numeric($refund_money)){
            return api_output_error(1001,'请正确输入退款金额');
        }
        if(empty($refund_reason)){
            return api_output_error(1001,'请输入退款原因');
        }

        if ($refund_money<0){
            return api_output_error(1001,'退款金额需大于0');
        }
        try{
            $houseNewCashierService = new HouseNewCashierService();
            $extra=array('login_role'=>$this->login_role,'wid'=>0,'apply_uid'=>$this->_uid,'apply_name'=>'','apply_phone'=>'');
            if(isset($this->adminUser['wid']) && ($this->adminUser['wid']>0)){
                $extra['wid']=$this->adminUser['wid'];
            }
            if(isset($this->adminUser['user_name']) && !empty($this->adminUser['user_name'])){
                $extra['apply_name']=$this->adminUser['user_name'];
            }
            $data = $houseNewCashierService->addRefundInfo($role_id,$order_id,$refund_type,$refund_money,$refund_reason,$extra);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 获取预缴账单详情
     * @author lijie
     * @date_time 2021/06/25
     * @return \json
     */
    public function getPrepaidDetail()
    {
        $prepaid_id = $this->request->post('prepaid_id');
        $key = $this->request->post('key','');
        if(!$prepaid_id || empty($key))
            return api_output_error(1001,'缺少必传参数');
        $key_info = explode('|',$key);
        if(count($key_info) != 3) {
            $key_info = explode('-',$key);
        }
        if(count($key_info) != 3)
            return api_output_error(1001,'参数异常');
        $service_house_new_charge_prepaid = new HouseNewChargePrepaidService();
        $where['pre.id'] = $prepaid_id;
        $field='pre.*,r.charge_price,r.not_house_rate,r.unit_gage,r.fees_type,r.rate as r_rate,r.charge_project_id,p.village_id,n.charge_type';
        try{
            $type = $key_info[2];
            $data = $service_house_new_charge_prepaid->getPrepaidDetail($where,$field,$type,$key_info[0]);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 查询退款模式
     * @author:zhubaodi
     * @date_time: 2021/6/25 19:47
     */
    public function getRefundtype(){
        $order_id = $this->request->post('order_id',0,'intval');
        if(empty($order_id)){
            return api_output_error(1001,'必传参数缺失');
        }

        try{
            $HouseNewCashierService = new HouseNewCashierService();
            $data = $HouseNewCashierService->getRefundtype($order_id,true);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 获取项目的服务时间
     * @author lijie
     * @date_time 2021/06/25
     * @return \json
     */
    public function getProjectServiceTime()
    {
        $project_id = $this->request->post('project_id',0);
        $key = $this->request->post('key','');
        if(!$project_id || empty($key))
            return api_output_error(1001,'缺少必传参数');
        $key_info = explode('|',$key);
        if(count($key_info) != 3) {
            $key_info = explode('-',$key);
        }
        if(count($key_info) != 3)
            return api_output_error(1001,'参数异常');
        if($key_info[2] == 'room'){
            $where[] = ['room_id','=',$key_info[0]];
            $where[] = ['position_id','=',0];
        } else{
            $where[] = ['position_id','=',$key_info[0]];
        }
        $service_house_new_cashier = new HouseNewCashierService();
        try{
            $projectInfo = $service_house_new_cashier->getProjectInfo(['id'=>$project_id],'subject_id');
            $numberInfo = $service_house_new_cashier->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
            if($numberInfo['charge_type'] == 'water' || $numberInfo['charge_type'] == 'electric' || $numberInfo['charge_type'] == 'gas'|| $numberInfo['charge_type'] == 'park_new'){
                $data['service_end_time'] = 1;
                $data['is_expire'] = 0;
            }else{
                if($numberInfo['charge_type'] != 'property'){
                    $where[] = ['order_type','=',$numberInfo['charge_type']];
                    $where[] = ['project_id','=',$project_id];
                }else{
                    $where[] = ['order_type','=','property'];
                }
                $data = $service_house_new_cashier->getOrderLog($where,'*','id DESC');
                if($data && $data['service_end_time']>100){
                    if($data['service_end_time'] > 1){
                        $data['is_expire'] = 0;
                    } else{
                        $data['is_expire'] = 1;
                    }
                    $data['service_end_time'] = date('Y-m-d H:i:s',$data['service_end_time']);
                    $whereArr=array();
                    $whereArr[]=array('room_id','=',$data['room_id']);
                    $whereArr[]=array('project_id','=',$data['project_id']);
                    $whereArr[]=array('village_id','=',$data['village_id']);
                    $whereArr[]=array('order_type','=',$data['order_type']);
                    $whereArrTmp=$whereArr;
                    $whereArrTmp[]=array('is_paid','=',1);
                    $whereArrTmp[]=array('refund_money','<=',0);
                    $tmp_order_data=$service_house_new_cashier->getInfo($whereArrTmp,'order_id,is_refund,refund_money');
                    if(empty($tmp_order_data) || $tmp_order_data->isEmpty()){
                        //没有已支付 没退款的
                        $whereArrTmp=$whereArr;
                        $whereArrTmp[]=array('is_paid','=',1);
                        $whereArrTmp[]=array('refund_money','>',0);
                        $whereArrTmp['string']='`refund_money`>=`modify_money`';
                        $tmp_order_data=$service_house_new_cashier->getInfo($whereArrTmp,'order_id,is_refund,refund_money');
                        if(!empty($tmp_order_data) && !$tmp_order_data->isEmpty()){
                            //有已支付 已退款的
                            $whereArrTmp=$whereArr;
                            $whereArrTmp[]=array('is_discard','=',2);
                            $whereArrTmp[]=array('is_paid','=',2);
                            $whereArrTmp[]=array('order_id','>',$tmp_order_data['order_id']);
                            $tmp_order_data=$service_house_new_cashier->getInfo($whereArrTmp,'order_id,is_refund,refund_money');
                            if(!empty($tmp_order_data) && !$tmp_order_data->isEmpty()){
                                //有未支付已作废的
                                $data['is_expire'] = 1;
                                $data['service_end_time'] = '';
                            }
                        }
                    }
                }else{
                    $data['is_expire'] = 1;
                    $data['service_end_time'] = '';
                }
            }
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 生成预缴账单
     * @author lijie
     * @date_time 2021/06/25
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function prepaidCall()
    {
        $village_id = $this->adminUser['village_id'];
        $role_id=0;
        if(in_array($this->login_role,$this->villageOrderCheckRole)){
            $role_id=$this->_uid;
        }
        $prepaid_id = $this->request->post('prepaid_id',0);
        $project_id = $this->request->post('project_id',0);
        $key = $this->request->post('key','');
        if(!$prepaid_id || !$project_id || empty($key)) {
            return api_output_error(1001,'缺少必传参数');
        }
        $key_info = explode('|',$key);
        if(count($key_info) != 3) {
            $key_info = explode('-',$key);
        }
        if(count($key_info) != 3) {
            return api_output_error(1001,'参数异常');
        }
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_new_charge = new HouseNewChargeService();
        $service_house_village = new HouseVillageService();
        $service_house_new_charge_prepaid = new HouseNewChargePrepaidService();
        $service_house_new_cashier = new HouseNewCashierService();
        $contract_info = $service_house_new_charge_rule->getHouseVillageInfo(['village_id'=>$village_id],'contract_time_start,contract_time_end');
        if($key_info[2] == 'room') {
            $history_list = $service_house_new_cashier->getOneOrder([['room_id','=',$key_info[0]],['project_id','=',$project_id],['is_discard','=',1],['is_paid','=',2],['is_prepare','=',1],['position_id','=',0]]);
        }
         else {
             $history_list = $service_house_new_cashier->getOneOrder(['position_id'=>$key_info[0],'project_id'=>$project_id,'is_discard'=>1,'is_paid'=>2,'is_prepare'=>1]);
         }
        if(isset($history_list['order_id'])){
            return api_output_error(1001,'该项目存在未支付的预缴账单，请先支付');
        }
        $where['pre.id'] = $prepaid_id;
        $prepaid_info = $service_house_new_charge_prepaid->getPrepaidDetail($where,'pre.*');
        if(empty($prepaid_info)) {
            return api_output_error(1001,'参数异常');
        }
        if($key_info[2] == 'room'){
            $type = 1;
            $id = $key_info[0];
        }else{
            $type = 2;
            $id = $key_info[0];
        }
        $is_allow = $service_house_new_charge_rule->checkChargeValid($project_id,$prepaid_info['charge_rule_id'],$id,$type);
        if(!$is_allow) {
            return api_output_error(1001,'当前收费标准未生效');
        }
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$prepaid_info['charge_rule_id']],'n.charge_type,p.name as order_name,r.*');
        if ($info && !is_array($info)) {
            $info = $info->toArray();
        }
        if(empty($info)) {
            return api_output_error(1001,'数据不存在');
        }
        if($type == 2 && $info['fees_type'] == 2 && empty($info['unit_gage'])) {
            return api_output_error(1001,'车场没有房屋面积，无法生成账单');
        }
        if($info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES) {
            $ruleHasParkNumInfo = $service_house_new_charge_rule->getRuleHasParkNumInfo($id, $prepaid_info['charge_rule_id'], $type, $info);
            if (empty($ruleHasParkNumInfo) || !isset($ruleHasParkNumInfo['parkingNum']) || intval($ruleHasParkNumInfo['parkingNum']) <= 0) {
                return api_output_error(1001,'计费模式为车位数量缺少车位数量，无法生成账单');
            }
            $parkingNum  = $ruleHasParkNumInfo['parkingNum'];
        } else {
            $parkingNum = 1;
        }
        if($info['cyclicity_set'] > 0){
            if($key_info[2] != 'position') {
                $order_list = $service_house_new_cashier->getOrderLists(['o.is_discard'=>1,'o.room_id'=>$key_info[0],'o.project_id'=>$project_id,'o.position_id'=>0,'o.rule_id'=>$info['id'],'o.is_refund'=>1],'o.*');
            }else {
                $order_list = $service_house_new_cashier->getOrderLists(['o.is_discard'=>1,'o.position_id'=>$key_info[0],'o.project_id'=>$project_id,'o.rule_id'=>$info['id'],'o.is_refund'=>1],'o.*');
            }
            $order_count = 0;
            if($order_list){
                $order_list = $order_list->toArray();
                if(count($order_list) >= $info['cyclicity_set']) {
                    return api_output_error(1001,'超过最大缴费周期数');
                }
                foreach ($order_list as $item){
                    if($item['service_month_num'] == 0) {
                        $order_count += 1;
                    }
                    else {
                        $order_count = $order_count+$item['service_month_num']+$item['service_give_month_num'];
                    }
                }
                if($order_count >= $info['cyclicity_set']) {
                    return api_output_error(1001,'超过最大缴费周期数');
                }
            }
            if($prepaid_info['cycle']>0){
                $order_count+=$prepaid_info['cycle'];
            }
            if($order_count>$info['cyclicity_set']){
                return api_output_error(1001,'超过最大缴费周期数!');
            }
        }
        $postData=array();
        $postData['order_type'] = $info['charge_type'];
        $postData['order_name'] = $service_house_new_charge->charge_type[$info['charge_type']];
        if(isset($info['order_name']) && !empty($info['order_name'])){
            $postData['order_name'] =$info['order_name'];
        }
        $postData['village_id'] = $prepaid_info['village_id'];
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$prepaid_info['village_id']],'property_id');
        $postData['property_id'] = $village_info['property_id'];
        $postData['service_month_num'] = $prepaid_info['cycle'];
        $housesize=0;
        if($key_info[2] == 'room'){
            /*
            $condition1 = [];
            $condition1[] = ['vacancy_id','=',$key_info[0]];
            $condition1[] = ['status','=',1];
            $condition1[] = ['type','in',[0,3,1,2]];
            $bind_list = $service_house_village_user_bind->getList($condition1,true);
            */
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $whereArrTmp=array();
            $whereArrTmp[]=array('pigcms_id','=',$key_info[0]);
            $whereArrTmp[]=array('status','in',[1,2,3]);
            $whereArrTmp[]=array('is_del','=',0);
            $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
            if($room_vacancy && !$room_vacancy->isEmpty()){
                $room_vacancy = $room_vacancy->toArray();
                if(!empty($room_vacancy)&&$info&&isset($info['housesize'])){
                    $housesize = $info['housesize'];
                }
            }
            $whereArrTmp[]=array('user_status','=',2);
            $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
            $not_house_rate = 100;
            if($room_vacancy && !$room_vacancy->isEmpty()){
                $room_vacancy = $room_vacancy->toArray();
                if(!empty($room_vacancy)){
                    $not_house_rate = $info['not_house_rate'];
                }
            }
            $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'vacancy_id'=>$key_info[0]]);
        }else{
            $service_house_village_parking = new HouseVillageParkingService();
            $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$key_info[0]]);
            if($carInfo){
                $carInfo = $carInfo->toArray();
            }
            if(empty($carInfo)) {
                $not_house_rate = $info['not_house_rate'];
            }
            else {
                $not_house_rate = 100;
            }
        }
        if($key_info[2] == 'position'){
            $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'position_id'=>$key_info[0]]);
        }
        if(isset($projectBindInfo) && !empty($projectBindInfo)){
            $custom_value = $projectBindInfo['custom_value'];
            $custom_number = $custom_value;
        }else{
            $custom_value = 1;
        }
        if($info['charge_type']=='property' && $custom_value<=1 && $housesize>0){
            $custom_value=$housesize;
        }
        if($not_house_rate<=0 || $not_house_rate>100){
            $not_house_rate=100;
        }
        $custom_value=isset($custom_value)&&!empty($custom_value)?$custom_value:1;
        if($prepaid_info['type'] == 1){
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$prepaid_info['rate']/100*$prepaid_info['cycle']*$info['rate']*$custom_value;
            $postData['rate'] = $prepaid_info['rate'];
            $postData['diy_content'] = '折扣率'.$postData['rate'].'%';
            $postData['diy_type'] = 1;
        } elseif ($prepaid_info['type'] == 2){
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$prepaid_info['cycle']*$info['rate']*$custom_value;
            $postData['service_give_month_num'] = $prepaid_info['give_cycle_type'];
            if($info['bill_create_set'] == 1){
                $postData['diy_content'] = '赠送周期'.$postData['service_give_month_num'].'日';
            }elseif ($info['bill_create_set'] == 2){
                $postData['diy_content'] = '赠送周期'.$postData['service_give_month_num'].'个月';
            }else{
                $postData['diy_content'] = '赠送周期'.$postData['service_give_month_num'].'年';
            }
            $postData['diy_type'] = 2;
        }elseif ($prepaid_info['type'] == 3){
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$prepaid_info['cycle']*$info['rate']*$custom_value;
            $postData['diy_content'] = $prepaid_info['custom_txt'];
            $postData['diy_type'] = 3;
        }else{
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$prepaid_info['cycle']*$info['rate']*$custom_value;
            $postData['diy_type'] = 4;
        }
        $rule_digit=-1;
        if(isset($info['rule_digit']) && $info['rule_digit']>-1 && $info['rule_digit']<5){
            $rule_digit=$info['rule_digit'];
        }
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);

        if($rule_digit>-1 && $rule_digit<5){
            if(!empty($digit_info)){
                $digit_info['meter_digit']=$rule_digit;
                $digit_info['other_digit']=$rule_digit;
            }else{
                $digit_info=array('type'=>1);
                $digit_info['meter_digit']=$rule_digit;
                $digit_info['other_digit']=$rule_digit;
            }
        }

        if($info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES && $parkingNum > 1) {
            $postData['total_money'] = $postData['total_money'] * intval($parkingNum);
            $postData['parking_num'] = intval($parkingNum);
            $postData['parking_lot'] = isset($ruleHasParkNumInfo) && isset($ruleHasParkNumInfo['parking_lot']) ? $ruleHasParkNumInfo['parking_lot'] : '';
        }
        if (!empty($digit_info)) {
            if ($postData['order_type'] == 'water' || $postData['order_type'] == 'electric' || $postData['order_type'] == 'gas') {
                $postData['total_money'] = formatNumber($postData['total_money'], $digit_info['meter_digit'], $digit_info['type']);
            } else {
                $postData['total_money'] = formatNumber($postData['total_money'], $digit_info['other_digit'], $digit_info['type']);
            }
        }

        $postData['total_money'] = formatNumber($postData['total_money'], 2, 1);
        if($not_house_rate>0 && $not_house_rate<100){
            $postData['not_house_rate'] = $not_house_rate;
        }
        if(isset($custom_number)){
            $postData['number'] = $custom_number;
        }
        $postData['modify_money'] = $postData['total_money'];
        $postData['prepare_pay_money'] = $postData['total_money'];
        $postData['is_paid'] = 2;
        $postData['role_id'] = $role_id;
        $postData['is_prepare'] = 1;
        $postData['rule_id'] = $info['id'];
        $postData['prepaid_cycle'] = $postData['service_month_num'];
        $postData['project_id'] = $info['charge_project_id'];
        $postData['order_no'] = '';
        $postData['add_time'] = time();
        $postData['from'] = 1;
        $projectInfo = $service_house_new_cashier->getProjectInfo(['id'=>$project_id],'subject_id');
        $numberInfo = $service_house_new_cashier->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
        if($key_info[2] != 'position') {
            $last_order = $service_house_new_cashier->getOrderLog([['room_id','=',$key_info[0]],['order_type','=',$numberInfo['charge_type']],['project_id','=',$info['charge_project_id']],['position_id','=',0]],true,'id DESC');
        }
        else {
            $last_order = $service_house_new_cashier->getOrderLog([['position_id', '=', $key_info[0]], ['order_type', '=', $numberInfo['charge_type']], ['project_id', '=', $info['charge_project_id']]], true, 'id DESC');
        }
    /*    //查询未缴账单
        if($type == 1){
            $pay_order_info = $service_house_new_cashier->getInfo(['is_discard'=>1,'is_paid'=>2,'room_id'=>$key_info[0],'order_type'=>$numberInfo['charge_type']],'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
        } else{
            $pay_order_info = $service_house_new_cashier->getInfo(['is_discard'=>1,'is_paid'=>2,'position_id'=>$key_info[0],'order_type'=>$numberInfo['charge_type']],'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
        }*/
        //查询未缴账单
        $subject_id_arr = $service_house_new_cashier->getNumberArr(['charge_type'=>$numberInfo['charge_type'],'status'=>1],'id');
        if (!empty($subject_id_arr)){
            $getProjectArr=$service_house_new_cashier->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
        }
        if($type == 1){
            $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$key_info[0],'order_type'=>$numberInfo['charge_type']];
            if (isset($getProjectArr)&&!empty($getProjectArr)){
                $pay_where['project_id']=$getProjectArr;
            }
            $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
        } else{
            $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$key_info[0],'order_type'=>$numberInfo['charge_type']];
            if (isset($getProjectArr)&&!empty($getProjectArr)){
                $pay_where['project_id']=$getProjectArr;
            }
            $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
        }

        //新版生成账单逻辑,按照计费时间顺序来生成账单
        if (cfg('new_pay_order')==1&&!empty($pay_order_info)&& $pay_order_info['service_end_time']>100){
            if ($pay_order_info['project_id']!=$info['charge_project_id']){
                return api_output_error(1001,'当前房间的该类别下有其他项目的待缴账单，无法生成账单');
            }
            $postData['service_start_time'] = $pay_order_info['service_end_time']+1;
            $postData['service_start_time'] = strtotime(date('Y-m-d',$postData['service_start_time']));
        }else {
            if ($numberInfo['charge_type'] == 'property') {
                if ($type != 1) {
                    $where22 = [
                        ['position_id', '=', $key_info[0]],
                        ['order_type', '=', $numberInfo['charge_type']],
                    ];
                } else {
                    $where22 = [
                        ['room_id', '=', $key_info[0]],
                        ['order_type', '=', $numberInfo['charge_type']],
                        ['position_id', '=', 0]
                    ];
                }
                $new_order_log = $service_house_new_cashier->getOrderLog($where22, true, 'id DESC');
                if (!empty($new_order_log)) {
                    $last_order = $new_order_log;
                }
            }
            if ($last_order && $last_order['service_end_time'] > 100) {
                $postData['service_start_time'] = $last_order['service_end_time'] + 1;
                $postData['service_start_time'] = strtotime(date('Y-m-d', $postData['service_start_time']));
            } else {
                if (isset($projectBindInfo) && !empty($projectBindInfo['order_add_time'])) {
                    $postData['service_start_time'] = strtotime(date('Y-m-d', $projectBindInfo['order_add_time']));
                    if (!$postData['service_start_time']) {
                        $postData['service_start_time'] = strtotime(date('Y-m-d', $info['charge_valid_time']));
                    }
                } else {
                    $postData['service_start_time'] = strtotime(date('Y-m-d', $info['charge_valid_time']));
                }
            }
        }
        if(isset($postData['service_give_month_num'])){
            $cycle = $postData['service_give_month_num'] + $postData['service_month_num'];
        }else{
            $cycle = $postData['service_month_num'];
        }

        if($info['bill_create_set'] == 1){
            $postData['service_end_time'] = $postData['service_start_time']+$cycle*86400-1;
        }elseif ($info['bill_create_set'] == 2){
            //todo 判断是不是按照自然月来生成订单
            if(cfg('open_natural_month') == 1){
                $start_d=date('d',$postData['service_start_time']);
                $tmp_service_end_time=strtotime("+$cycle month",$postData['service_start_time']);
                $end_d=date('d',$tmp_service_end_time);
                if($start_d!=$end_d){
                    $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                    $end_date_time=strtotime($end_date);
                    $tmp_service_end_time=$end_date_time;
                }
                $postData['service_end_time'] = $tmp_service_end_time-1;
            }else{
                $cycle = $cycle*30;
                $postData['service_end_time'] = strtotime("+".$cycle." day",$postData['service_start_time'])-1;
            }
        }else{
            $postData['service_end_time'] = strtotime("+".$cycle." year",$postData['service_start_time'])-1;
        }
        if(isset($contract_info['contract_time_start']) && $contract_info['contract_time_start'] > 1){
            if($postData['service_start_time'] < $contract_info['contract_time_start'] || $postData['service_start_time'] > $contract_info['contract_time_end']){
                return api_output_error(1001,'账单开始时间不在合同范围内');
            }
            if($postData['service_end_time'] < $contract_info['contract_time_start'] || $postData['service_end_time'] > $contract_info['contract_time_end']){
                return api_output_error(1001,'账单结束时间不在合同范围内');
            }
        }
        $postData['unit_price'] = $info['charge_price'];
        if($key_info[2] == 'room'){
            $postData['room_id'] = $key_info[0];
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$postData['room_id']],['type','in','0,3'],['status','=',1]],'uid,pigcms_id,name,phone');
            if($user_info){
                $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                $postData['uid'] = $user_info['uid']?$user_info['uid']:0;
                $postData['name'] = $user_info['name']?$user_info['name']:'';
                $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
            }
        }
        if($key_info[2] == 'position'){
            $service_house_village_parking = new HouseVillageParkingService();
            $postData['position_id'] = $key_info[0];
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$postData['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'uid,pigcms_id,name,phone,vacancy_id');
    */
            $user_info=$service_house_new_cashier->getRoomUserBindByPosition($postData['position_id'],$postData['village_id']);
            if($user_info){
                $postData['pigcms_id'] = $user_info['pigcms_id'] ? $user_info['pigcms_id']:0;
                $postData['name'] = $user_info['name'] ? $user_info['name']:'';
                $postData['uid'] = $user_info['uid']?$user_info['uid']:0;
                $postData['phone'] = $user_info['phone'] ? $user_info['phone']:'';
                $postData['room_id'] = $user_info['vacancy_id' ]? $user_info['vacancy_id']:0;
            }
        }
        $id = $service_house_new_cashier->addOrder($postData);
        if($id){
            $digit_info = $service_house_new_cashier->getDigit(['property_id'=>$village_info['property_id']]);
            if($digit_info && !$digit_info->isEmpty()){
                $digit_info = $digit_info->toArray();
            }
            fdump_api(['digit_info'=>$digit_info,'comfrom'=>'FrontCashierController'],'000discardPrepaidOrder',1);
            if(empty($digit_info) || $digit_info['deleteBillMin'] == 30){
                $service_plan = new PlanService();
                $param['plan_time'] = time()+1800;
                $param['space_time'] = 0;
                $param['add_time'] = time();
                $param['file'] = 'sub_auto_discard_prepaid_order';
                $param['time_type'] = 1;
                $param['unique_id'] = 'sub_auto_discard_prepaid_order'.$id;
                $service_plan->addTask($param,1);
            }
            if($postData['order_type'] == 'property' && intval(cfg('cockpit')) && isset($postData['pigcms_id']) && !empty($postData['pigcms_id'])){
                $system_remarks=(new StorageService())->getRoleData($this->_uid,$this->login_role,$this->adminUser);
                $uid=(isset($user_info['uid'])&&!empty($user_info['uid']))?$user_info['uid']:0;
                if (!empty($uid)){
                    $result=(new StorageService())->userBalanceChange($uid,2,$postData['modify_money'],$system_remarks['remarks'],'收银台手动生成预缴账单，物业费自动扣除余额',$id,$postData['village_id']);
                    if($result['error']){
                        return api_output(0,[
                            'msg'=>$result['msg'],
                            'status'=>1,
                            'param'=>array(
                                'order_id'=>$id,
                                'pigcms_id'=>$postData['pigcms_id']
                            )
                        ],$result['msg']);
                    }
                }

            }
            return api_output(0,['msg'=>'预缴账单已生成','status'=>0],'预缴账单已生成');
        }
        return api_output_error(1001,'服务异常');
    }

    /**
     * 导出已缴账单
     * @author:zhubaodi
     * @date_time: 2021/6/26 10:01
     */
    public function printPayOrderList(){
        set_time_limit(0);
        $service_house_new_cashier = new HouseNewCashierService();
        // 获取登录信息
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $date = $this->request->post('date','','trim');
        $garage_id = $this->request->post('garage_id',0,'intval');
        $position_num = $this->request->post('position_num','','trim');
        $project_id = $this->request->post('project_id',0,'intval');
        $rule_id = $this->request->post('rule_id',0,'intval');
        $vacancy = $this->request->post('vacancy','','trim');
        $key_val = $this->request->post('key_val','','trim');
        $value = $this->request->post('value','','trim');
        $pay_type=$this->request->post('pay_type',0,'trim');
        $record_status=$this->request->post('invoice_type',0,'intval');
        $order_status=$this->request->post('order_status',0,'intval');
        $exportPattern=$this->request->post('exportPattern',2,'intval'); // 导出模式  1是多行模式  2是合并模式
        $pigcms_id=$this->request->post('pigcms_id',0,'intval');
        $service_start_time          = $this->request->post('service_start_time','','trim');
        $service_end_time          = $this->request->post('service_end_time','','trim');
        try{
            if (!empty($date)&&count($date)>0){
                if (!empty($date[0])){
                    $where[] = ['o.pay_time','>=',strtotime($date[0].' 00:00:00')];
                }
                if (!empty($date[1])){
                    $where[] = ['o.pay_time','<=',strtotime($date[1].' 23:59:59')];
                }
            }
            if (!empty($project_id)){
                $where[] = ['o.project_id','=',$project_id];
            }
            if (!empty($rule_id)){
                $where[] = ['o.rule_id','=',$rule_id];
            }
            if(!empty($pigcms_id)){
                $where[] = ['o.pigcms_id','=',$pigcms_id];
            }

            if(!empty($record_status)){
                $where[] = ['record_status','=',$record_status];
            }
          /*  if (!empty($vacancy)&&!empty($vacancy[3])){

                $where[] = ['o.room_id','=',$vacancy[3]];
            }*/
            if(!empty($vacancy)){
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $where_vacancy=[];
                if (isset($vacancy[3])){
                    $where_vacancy[]=['pigcms_id','=',$vacancy[3]];
                }elseif (isset($vacancy[2])){
                    $where_vacancy[]=['layer_id','=',$vacancy[2]];
                }elseif (isset($vacancy[1])){
                    $where_vacancy[]=['floor_id','=',$vacancy[1]];
                } else{
                    $where_vacancy[]=['single_id','=',$vacancy[0]];
                }
                $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
                $room_id_arr=[];
                if (!empty($vacancy_info)){
                    $vacancy_info=$vacancy_info->toArray();
                    if (!empty($vacancy_info)){
                        foreach ($vacancy_info as $vv){
                            $room_id_arr[]=$vv['pigcms_id'];
                        }
                    }
                }
                $where[] = ['o.room_id','in',$room_id_arr];
                $where[] = ['o.position_id','=',0];
            }
            if (!empty($pay_type)){
                $where[] = ['o.pay_type','=',$pay_type];
            }
            if (!empty($order_status)){
                $where[] = ['o.is_refund','=',$order_status];
            }
            $positionGarageList=[];
            $positionList=[];
            $service_garage=new HouseVillageParkingService();
            if (!empty($garage_id)){
                $positionGarageList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.garage_id'=>$garage_id],'pp.*');
                if (empty($positionGarageList['ids'])){
                    $positionGarageList['ids']='-1';
                }
            }
            if (!empty($position_num)){
                $positionList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.position_num'=>$position_num],'pp.*');
            }
            if (!empty($positionList)&&!empty($positionGarageList)){
                $where[] = ['s.position_id','in',array_merge($positionList['ids'],$positionGarageList['ids'])];
            }elseif (!empty($positionList)){
                $where[] = ['s.position_id','in',$positionList['ids']];
            }elseif (!empty($positionGarageList)){
                $where[] = ['o.position_id','in',$positionGarageList['ids']];
            }
            if (!empty($key_val)&&!empty($value)){
                $where[] = ['o.pay_bind_'.$key_val,'=',$value];
            }
            if($service_start_time){
                $where[] =['o.service_start_time','>=',strtotime($service_start_time.' 00:00:00')];
            }
            if($service_end_time){
                $where[] =['o.service_end_time','<=',strtotime($service_end_time.' 23:59:59')];
            }
            $where[] = ['o.village_id','=',$this->adminUser['village_id']];
            $where[] = ['o.is_discard','=',1];
            $where[] = ['o.is_paid','=',1];
            $where[] = ['o.order_type','<>','non_motor_vehicle'];
             $where1 = '(`o`.`is_refund`=1 OR `o`.`refund_money`<`o`.`modify_money`)';
            $field='o.*,p.name as project_name,n.charge_number_name';
            $order='o.room_id DESC,o.position_id DESC,o.project_id DESC';
            $list = $service_house_new_cashier->printPayOrder($where,$where1,$field,$order,'',$exportPattern);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 导出线上支付订单
     * @author:zhubaodi
     * @date_time: 2021/6/26 10:01
     * @return \json
     */
    public function printOnlineOrderList(){
        $service_house_new_cashier = new HouseNewCashierService();
        // 获取登录信息
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $date = $this->request->post('date','','trim');
        $garage_id = $this->request->post('garage_id',0,'intval');
        $position_num = $this->request->post('position_num','','trim');
        $project_id = $this->request->post('project_id',0,'intval');
        $rule_id = $this->request->post('rule_id',0,'intval');
        $vacancy = $this->request->post('vacancy','','trim');
        $key_val = $this->request->post('key_val','','trim');
        $value = $this->request->post('value','','trim');
        $pay_type=$this->request->post('pay_type',0,'trim');
        try{
            if (!empty($date)&&count($date)>0){
                if (!empty($date[0])){
                    $where[] = ['o.pay_time','>=',strtotime($date[0].' 00:00:00')];
                }
                if (!empty($date[1])){
                    $where[] = ['o.pay_time','<=',strtotime($date[1].' 23:59:59')];
                }
            }
            if (!empty($project_id)){
                $where[] = ['o.project_id','=',$project_id];
            }
            if (!empty($rule_id)){
                $where[] = ['o.rule_id','=',$rule_id];
            }
            /*if (!empty($vacancy)&&!empty($vacancy[3])){

                $where[] = ['o.room_id','=',$vacancy[3]];
            }*/
            if(!empty($vacancy)){
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $where_vacancy=[];
                if (isset($vacancy[3])){
                    $where_vacancy[]=['pigcms_id','=',$vacancy[3]];
                }elseif (isset($vacancy[2])){
                    $where_vacancy[]=['layer_id','=',$vacancy[2]];
                }elseif (isset($vacancy[1])){
                    $where_vacancy[]=['floor_id','=',$vacancy[1]];
                } else{
                    $where_vacancy[]=['single_id','=',$vacancy[0]];
                }
                $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
                $room_id_arr=[];
                if (!empty($vacancy_info)){
                    $vacancy_info=$vacancy_info->toArray();
                    if (!empty($vacancy_info)){
                        foreach ($vacancy_info as $vv){
                            $room_id_arr[]=$vv['pigcms_id'];
                        }
                    }
                }
                $where[] = ['o.room_id','in',$room_id_arr];
            }
            if (!empty($pay_type)){

                $where[] = ['o.pay_type','=',$pay_type];
            }
            $positionGarageList=[];
            $positionList=[];
            $service_garage=new HouseVillageParkingService();
            if (!empty($garage_id)){
                $positionGarageList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.garage_id'=>$garage_id],'pp.*');
                if (empty($positionGarageList['ids'])){
                    $positionGarageList['ids']='-1';
                }
            }
            if (!empty($position_num)){
                $positionList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.position_num'=>$position_num],'pp.*');
            }
            if (!empty($positionList)&&!empty($positionGarageList)){
                $where[] = ['o.position_id','in',array_merge($positionList['ids'],$positionGarageList['ids'])];
            }elseif (!empty($positionList)){
                $where[] = ['o.position_id','in',$positionList['ids']];
            }elseif (!empty($positionGarageList)){
                $where[] = ['o.position_id','in',$positionGarageList['ids']];
            }
            if (!empty($key_val)&&!empty($value)){
                $where[] = ['o.pay_bind_'.$key_val,'=',$value];
            }
            $where[] = ['o.village_id','=',$this->adminUser['village_id']];
            $where[] = ['o.is_discard','=',1];
            $where[] = ['o.is_paid','=',1];
            $where[] = ['o.is_online','=',1];
            $where1 = '`o`.`refund_money`<`o`.`pay_money`';
            $field='o.*,p.name as project_name,n.charge_number_name';
            $order='o.pay_time DESC,o.room_id DESC,o.position_id DESC,o.project_id DESC';
            $list = $service_house_new_cashier->printPayOrder($where,$where1,$field,$order);

        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 导出退款账单
     * @author: zhubaodi
     * @date : 2021/6/24
     * @return \json
     */
    public function exportRefundOrders(){
        $service_house_new_cashier = new HouseNewCashierService();
        // 获取登录信息
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $date = $this->request->post('date','','trim');
        $garage_id = $this->request->post('garage_id',0,'intval');
        $position_num = $this->request->post('position_num','','trim');
        $project_id = $this->request->post('project_id',0,'intval');
        $rule_id = $this->request->post('rule_id',0,'intval');
        $vacancy = $this->request->post('vacancy','','trim');
        $key_val = $this->request->post('key_val','','trim');
        $key_val1 = $this->request->post('key_val1','','trim');
        $value = $this->request->post('value','','trim');
        $pay_type=$this->request->post('pay_type',0,'trim');
        $order_status=$this->request->post('order_type',0,'intval');  //0全部 2部分退 1全退
        $service_start_time   = $this->request->post('service_start_time','','trim');
        $service_end_time    = $this->request->post('service_end_time','','trim');
        try{
            $where=array();
            if (!empty($date)&&count($date)>0){
                if ($key_val1=='paytime'){
                    if (!empty($date[0])){
                        $where[] = ['o.pay_time','>=',strtotime($date[0].' 00:00:00')];
                    }
                    if (!empty($date[1])){
                        $where[] = ['o.pay_time','<=',strtotime($date[1].' 23:59:59')];
                    }
                }else{
                    if (!empty($date[0])){
                        $where[] = ['o.update_time','>=',strtotime($date[0].' 00:00:00')];
                    }
                    if (!empty($date[1])){
                        $where[] = ['o.update_time','<=',strtotime($date[1].' 23:59:59')];
                    }
                }

            }
            if (!empty($project_id)){
                $where[] = ['o.project_id','=',$project_id];
            }
            if (!empty($rule_id)){
                $where[] = ['o.rule_id','=',$rule_id];
            }
            /* if (!empty($vacancy)&&!empty($vacancy[3])){

                 $where[] = ['o.room_id','=',$vacancy[3]];
             }*/
            if(!empty($vacancy)){
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $where_vacancy=[];
                if (isset($vacancy[3])){
                    $where_vacancy[]=['pigcms_id','=',$vacancy[3]];
                }elseif (isset($vacancy[2])){
                    $where_vacancy[]=['layer_id','=',$vacancy[2]];
                }elseif (isset($vacancy[1])){
                    $where_vacancy[]=['floor_id','=',$vacancy[1]];
                } else{
                    $where_vacancy[]=['single_id','=',$vacancy[0]];
                }
                $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
                $room_id_arr=[];
                if (!empty($vacancy_info)){
                    $vacancy_info=$vacancy_info->toArray();
                    if (!empty($vacancy_info)){
                        foreach ($vacancy_info as $vv){
                            $room_id_arr[]=$vv['pigcms_id'];
                        }
                    }
                }
                $where[] = ['o.room_id','in',$room_id_arr];
            }
            if (!empty($pay_type)){

                $where[] = ['o.pay_type','=',$pay_type];
            }
            $positionGarageList=[];
            $positionList=[];
            $service_garage=new HouseVillageParkingService();
            if (!empty($garage_id)){
                $positionGarageList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.garage_id'=>$garage_id],'pp.*');
                if (empty($positionGarageList['ids'])){
                    $positionGarageList['ids']='-1';
                }
            }
            if (!empty($position_num)){
                $positionList=$service_garage->getPositionList(['pp.village_id'=>$village_id,'pp.position_num'=>$position_num],'pp.*');
            }
            if (!empty($positionList['ids'])&&!empty($positionGarageList['ids'])){
                $where[] = ['o.position_id','in',array_merge($positionList['ids'],$positionGarageList['ids'])];
            }elseif (!empty($positionList['ids'])){
                $where[] = ['o.position_id','in',$positionList['ids']];
            }elseif (!empty($positionGarageList['ids'])){
                $where[] = ['o.position_id','in',$positionGarageList['ids']];
            }elseif(empty($positionList['ids'])&&!empty($position_num)){
                $where[] = ['o.position_id','=','-1'];
            }
            if (!empty($key_val)&&!empty($value)){
                $where[] = ['o.pay_bind_'.$key_val,'=',$value];
            }
            if($service_start_time){
                $where[] =['o.service_start_time','>=',strtotime($service_start_time.' 00:00:00')];
            }
            if($service_end_time){
                $where[] =['o.service_end_time','<=',strtotime($service_end_time.' 23:59:59')];
            }
            $where[] = ['o.village_id','=',$this->adminUser['village_id']];
            $where[] = ['o.is_discard','=',1];
            $where[] = ['o.is_paid','=',1];
            $where[] = ['o.is_refund','=',2];
            //$where1 = '`o`.`refund_money`=`o`.`pay_money`';
            $where1 = '`o`.`refund_money` > 0';
            if($order_status==1){
                $where1 .= ' AND `o`.`refund_money`=`o`.`pay_money`';
            }elseif($order_status==2){
                $where1 .= ' AND `o`.`refund_money`<`o`.`pay_money`';
            }
            $field='o.*,p.name as project_name,n.charge_number_name';
            //$list = $service_house_new_cashier->getCancelOrder($where,$where1,$field,$page,$limit);
            $list = $service_house_new_cashier->exportRefundOrders($where,$where1,$field,'o.order_id DESC','exportRefund');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 应收账单
     * @author lijie
     * @date_time 2021/06/26
     * @return \json
     */
    public function receivableOrderList()
    {
        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $garage_id = $this->request->post('garage_id',0);
        $project_id = $this->request->post('project_id',0);
        $rule_id = $this->request->post('rule_id',0,'intval');
        $position_num = $this->request->post('position_num','');
        $room_id = $this->request->post('room_id',0);
        $pigcms_id = $this->request->post('pigcms_id',0);
        $room_id_arr=[];
        if(!empty($room_id)){

            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $where_vacancy=[];
            if (isset($room_id[3])){
                $where_vacancy[]=['pigcms_id','=',$room_id[3]];
            }elseif (isset($room_id[2])){
                $where_vacancy[]=['layer_id','=',$room_id[2]];
            }elseif (isset($room_id[1])){
                $where_vacancy[]=['floor_id','=',$room_id[1]];
            } else{
                $where_vacancy[]=['single_id','=',$room_id[0]];
           }
            $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
            if (!empty($vacancy_info)){
                $vacancy_info=$vacancy_info->toArray();
                if (!empty($vacancy_info)){
                    foreach ($vacancy_info as $vv){
                        $room_id_arr[]=$vv['pigcms_id'];
                    }
                }
            }

        }
      // print_r($room_id_arr);exit;
        $key_val = $this->request->post('key_val','');

        $value = $this->request->post('value','');
        $service_house_new_cashier = new HouseNewCashierService();
        if($garage_id){
            $where[] = ['p.garage_id','=',$garage_id];
        }
        if($project_id){
            $where[] = ['o.project_id','=',$project_id];
        }
        if($rule_id){
            $where[] = ['o.rule_id','=',$rule_id];
        }
        if($position_num){
            $where[] = ['p.position_num','like','%'.$position_num.'%'];
        }
        if($key_val && $value){
            if($key_val == 'name')
                $where[] = ['o.name','like','%'.$value.'%'];
            else
                $where[] = ['o.phone','like','%'.$value.'%'];
        }
        if($room_id)
            $where[] = ['o.room_id','in',$room_id_arr];
        $where[] = ['o.is_paid','=',2];
        //$where[] = ['o.order_type','<>','non_motor_vehicle'];
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.village_id','=',$village_id];
        $where[] = ['o.room_id|o.position_id','<>',''];
        // 兼容企微预存管理
        if(!empty($pigcms_id)){
            $where[] = ['o.pigcms_id','=',$pigcms_id];
        }
        try{
            $data = $service_house_new_cashier->getOrderListByGroup($where,'sum(o.total_money) as total_money,sum(o.modify_money) as modify_money,sum(o.late_payment_money) as late_payment_money,o.name,o.phone,v.room,p.position_num,o.room_id,o.position_id,o.uid,o.property_id,o.order_type',$page,$limit,'o.order_id DESC','o.position_id,o.room_id');
            $list = $service_house_new_cashier->getOrderListByGroup($where,'sum(o.total_money) as total_money,sum(o.modify_money) as modify_money,sum(o.late_payment_money) as late_payment_money,o.name,o.phone,v.room,p.position_num,o.room_id,o.position_id,o.uid,o.property_id,o.order_type',0,0,'o.order_id DESC','o.position_id,o.room_id');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        $res['list'] = $data['list'];
        $res['total_money'] = $list['total_money'].'元';
        $res['total_limit'] =$limit;
        $res['count'] = count($list['list']);
        $houseVillageService=new HouseVillageService();
        $res['role_export']=$houseVillageService->checkPermissionMenu(112097,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_callpay']=$houseVillageService->checkPermissionMenu(112098,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_discard']=$houseVillageService->checkPermissionMenu(112099,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        
        $res['role_import_bill'] = 1;
        
        return api_output(0,$res);
    }

    public function getNewPayOrders()
    {
        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $garage_id = $this->request->post('garage_id',0);
        $project_id = $this->request->post('project_id',0);
        $rule_id = $this->request->post('rule_id',0,'intval');
        $position_num = $this->request->post('position_num','');
        $room_id = $this->request->post('room_id',0);
        $pigcms_id = $this->request->post('pigcms_id',0);
        $order_status = $this->request->post('order_type',0);
        $service_start_time   = $this->request->post('service_start_time','','trim');
        $service_end_time    = $this->request->post('service_end_time','','trim');
        $room_id_arr=[];
        if(!empty($room_id)){
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $where_vacancy=[];
            if (isset($room_id[3])){
                $where_vacancy[]=['pigcms_id','=',$room_id[3]];
            }elseif (isset($room_id[2])){
                $where_vacancy[]=['layer_id','=',$room_id[2]];
            }elseif (isset($room_id[1])){
                $where_vacancy[]=['floor_id','=',$room_id[1]];
            } else{
                $where_vacancy[]=['single_id','=',$room_id[0]];
            }
            $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
            if (!empty($vacancy_info)){
                $vacancy_info=$vacancy_info->toArray();
                if (!empty($vacancy_info)){
                    foreach ($vacancy_info as $vv){
                        $room_id_arr[]=$vv['pigcms_id'];
                    }
                }
            }
        }
        $key_val = $this->request->post('key_val','');
        $time_slot = $this->request->post('time_slot');
        $value = $this->request->post('value','');
        $service_house_new_cashier = new HouseNewCashierService();
        if($garage_id){
            $where[] = ['pp.garage_id','=',$garage_id];
        }
        if($project_id){
            $where[] = ['o.project_id','=',$project_id];
        }
        if($rule_id>0){
            $where[] = ['o.rule_id','=',$rule_id];
        }
        if($position_num){
            $where[] = ['pp.position_num','like','%'.$position_num.'%'];
        }
        if($key_val && $value){
            if($key_val == 'name')
                $where[] = ['o.name','like','%'.$value.'%'];
            else
                $where[] = ['o.phone','like','%'.$value.'%'];
        }
        // 时间段
        if($time_slot && !empty($time_slot[0]) && !empty($time_slot[1])){
            $where[] = ['o.add_time','>=',strtotime($time_slot[0])];
            $where[] = ['o.add_time','<=',strtotime(($time_slot[1].' 23:59:59'))];
        }
        if($order_status==1){
            $where[] = ['o.check_status','in',array(1,2)];
        }
        if($room_id) {
            $where[] = ['o.room_id','in',$room_id_arr];
        }
        if($service_start_time){
            $where[] =['o.service_start_time','>=',strtotime($service_start_time.' 00:00:00')];
        }
        if($service_end_time){
            $where[] =['o.service_end_time','<=',strtotime($service_end_time.' 23:59:59')];
        }
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.village_id','=',$village_id];
        $where[] = ['o.room_id|o.position_id','<>',''];
        // 兼容企微预存管理
        if(!empty($pigcms_id)){
            $where[] = ['o.pigcms_id','=',$pigcms_id];
        }
        try{
            $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
            $orderRefundCheckWhere=array('village_id'=>$this->adminUser['village_id'],'xtype'=>'order_refund_check');
            $orderRefundCheckOpen=$houseVillageCheckauthSetService->isOpenSet($orderRefundCheckWhere);
            $wid=0;
            if(in_array($this->login_role,$this->villageOrderCheckRole) && $orderRefundCheckOpen>0 && isset($this->adminUser['wid']) && ($this->adminUser['wid']>0)){
                $wid=$this->adminUser['wid'];
                $userAuthLevel=$houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
                if(!empty($userAuthLevel)){
                    $where['check_level_info']=array('wid'=>$this->adminUser['wid'],'check_level'=>$userAuthLevel['check_level']);
                }
            }
            $fieldStr='o.*,r.charge_name,p.name as project_name,n.charge_number_name';
            $data = $service_house_new_cashier->getNewPayOrders($where,$fieldStr,$page,$limit,'o.order_id DESC');
            if (isset($where['check_level_info'])) {
                unset($where['check_level_info']);
            }
            $count = $service_house_new_cashier->getNewPayOrdersCount($where);
            $total_money=$service_house_new_cashier->getNewPayOrder2Sum($where,'total_money');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        $res['list'] = $data;
        $res['total_money'] = $total_money;
        $res['count'] = $count;
        $res['total_limit'] = $limit;
        $res['orderRefundCheckOpen']=$orderRefundCheckOpen;
        $res['login_role']=$this->login_role;
        $res['wid']=$wid;
        $houseVillageService=new HouseVillageService();
        $res['role_export']=$houseVillageService->checkPermissionMenu(112097,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_callpay']=$houseVillageService->checkPermissionMenu(112098,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_discard']=$houseVillageService->checkPermissionMenu(112099,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        return api_output(0,$res);
    }

    /**
     * 应收账单明细
     * @author lijie
     * @date_time 2021/06/26
     * @return \json
     */
    public function receivableOrderInfo()
    {
        $village_id = $this->adminUser['village_id'];
        $type = $this->request->post('type','');
        $key_id = $this->request->post('key_id',0);
        $page = $this->request->post('page',0);
        $limit = $this->request->post('limit',10);
        $month = $this->request->post('month'); // 年月 格式 2021-12
        $source = $this->request->post('source',0); // 是否是新版应收明细 1是 0否
        if(empty($village_id)){
            $village_id = $this->request->post('village_id','');
        }
        if(empty($type) || !$key_id)
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_cashier = new HouseNewCashierService();
        $where = [];
        if($type == 'room'){
            $where[] = ['o.room_id', '=', $key_id];
            $where[] = ['o.position_id', '=', 0];
        } else{
            $where[] = ['o.position_id', '=', $key_id];
        }
        if(!empty($month)){
            $start_time = strtotime($month);
            $end_time = strtotime("+1 month",$start_time)-1;
            $where[] = ['o.add_time','>=',$start_time];
            $where[] = ['o.add_time','<=',$end_time];
        }
        $where[] = ['o.is_paid', '=', 2];
        $where[] = ['o.is_discard', '=', 1];
        $where[] = ['o.village_id', '=', $village_id];
        try{
            if(empty($limit)){
                $limit = 20;
            }
            //$filed = 'r.charge_name,p.name,o.order_id,o.late_payment_money,o.modify_money,o.is_auto,n.charge_number_name,o.total_money,o.service_start_time,o.service_end_time,o.last_ammeter,o.now_ammeter,n.charge_type,o.property_id,o.order_type,r.charge_valid_type,r.charge_valid_time';
            $filed='o.*,r.charge_name,p.name,n.charge_number_name,n.charge_type,r.charge_valid_type,r.charge_valid_time';
            $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
            $orderRefundCheckWhere=array('village_id'=>$this->adminUser['village_id'],'xtype'=>'order_refund_check');
            $orderRefundCheckOpen=$houseVillageCheckauthSetService->isOpenSet($orderRefundCheckWhere);
            $wid=0;
            if(in_array($this->login_role,$this->villageOrderCheckRole) && $orderRefundCheckOpen>0 && isset($this->adminUser['wid']) && ($this->adminUser['wid']>0)){
                $wid=$this->adminUser['wid'];
                $userAuthLevel=$houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
                if(!empty($userAuthLevel)){
                    $where['check_level_info']=array('wid'=>$this->adminUser['wid'],'check_level'=>$userAuthLevel['check_level']);
                }
            }
            $list = $service_house_new_cashier->getOrderList($where,$filed,$page,$limit,'o.order_id DESC',$village_id);
            if (isset($where['check_level_info'])) {
                unset($where['check_level_info']);
            }
            if($source){
                $count = $service_house_new_cashier->getNewPayOrdersCount($where);
                $data = [
                    'list' => $list,
                    'page_limit' => $limit,
                    'count' => $count
                ];
            }else{
                $data = $list;
            }
            $data['orderRefundCheckOpen']=$orderRefundCheckOpen;
            $data['login_role']=$this->login_role;
            $data['wid']=$wid;
            $houseVillageService=new HouseVillageService();
            $data['role_export']=$houseVillageService->checkPermissionMenu(112097,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
            $data['role_callpay']=$houseVillageService->checkPermissionMenu(112098,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
            $data['role_discard']=$houseVillageService->checkPermissionMenu(112099,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 导出应收账单明细
     * @author lijie
     * @date_time 2021/12/28
     * @return \json
     */
    public function receivableOrderImport()
    {
        set_time_limit(0);
        $village_id = $this->adminUser['village_id'];
        $garage_id = $this->request->post('garage_id',0);
        $project_id = $this->request->post('project_id',0);
        $rule_id = $this->request->post('rule_id',0,'intval');
        $position_num = $this->request->post('position_num','');
        $room_id = $this->request->post('room_id',0);
        $pigcms_id = $this->request->post('pigcms_id',0);
        $order_status = $this->request->post('order_type',0);
        $service_start_time   = $this->request->post('service_start_time','','trim');
        $service_end_time    = $this->request->post('service_end_time','','trim');
        $room_id_arr=[];
        if(!empty($room_id)){
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $where_vacancy=[];
            if (isset($room_id[3])){
                $where_vacancy[]=['pigcms_id','=',$room_id[3]];
            }elseif (isset($room_id[2])){
                $where_vacancy[]=['layer_id','=',$room_id[2]];
            }elseif (isset($room_id[1])){
                $where_vacancy[]=['floor_id','=',$room_id[1]];
            } else{
                $where_vacancy[]=['single_id','=',$room_id[0]];
            }
            $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
            if (!empty($vacancy_info)){
                $vacancy_info=$vacancy_info->toArray();
                if (!empty($vacancy_info)){
                    foreach ($vacancy_info as $vv){
                        $room_id_arr[]=$vv['pigcms_id'];
                    }
                }
            }
        }
        $key_val = $this->request->post('key_val','');
        $value = $this->request->post('value','');
        $time_slot = $this->request->post('time_slot');
        $service_house_new_cashier = new HouseNewCashierService();
        if($garage_id){
            $where[] = ['pp.garage_id','=',$garage_id];
        }
        if($project_id){
            $where[] = ['o.project_id','=',$project_id];
        }
        if($rule_id){
            $where[] = ['o.rule_id','=',$rule_id];
        }
        if($position_num){
            $where[] = ['pp.position_num','like','%'.$position_num.'%'];
        }
        if($key_val && $value){
            if($key_val == 'name')
                $where[] = ['o.name','like','%'.$value.'%'];
            else
                $where[] = ['o.phone','like','%'.$value.'%'];
        }
        // 时间段
        if($time_slot && !empty($time_slot[0]) && !empty($time_slot[1])){
            $where[] = ['o.add_time','>=',strtotime($time_slot[0])];
            $where[] = ['o.add_time','<=',strtotime(($time_slot[1].' 23:59:59'))];
        }
        if($order_status==1){
            $where[] = ['o.check_status','in',array(1,2)];
        }
        if($room_id){
            $where[] = ['o.room_id','in',$room_id_arr];
        }
        if($service_start_time){
            $where[] =['o.service_start_time','>=',strtotime($service_start_time.' 00:00:00')];
        }
        if($service_end_time){
            $where[] =['o.service_end_time','<=',strtotime($service_end_time.' 23:59:59')];
        }
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.village_id','=',$village_id];
        $where[] = ['o.room_id|o.position_id','<>',''];
        // 兼容企微预存管理
        if(!empty($pigcms_id)){
            $where[] = ['o.pigcms_id','=',$pigcms_id];
        }
        try{
            $data = $service_house_new_cashier->getNewPayOrders($where,'o.order_id,o.total_money,o.name,o.phone,o.room_id,o.position_id,o.uid,o.property_id,o.order_type,r.charge_name,p.name as project_name,n.charge_number_name,o.service_start_time,o.service_end_time,o.last_ammeter,o.now_ammeter',0,0,'o.order_id DESC');
            $title = ['车位号/房间号','业主名','电话','收费标准名称','收费项目名称','所属收费科目','应收金额','计费开始时间','计费结束时间','上次度数','本次度数'];
            $res = $service_house_new_cashier->receivableOrderImport($data,$title,'应收账单明细表' . time());
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 发送缴费通知
     * @author lijie
     * @date_time 2021/06/26
     * @return \json
     * @throws \think\Exception
     */
    public function sendMessage()
    {

        set_time_limit(0);
        $village_id = $this->adminUser['village_id'];
        $service_house_village = new HouseVillageService();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $service_house_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_user = new UserService();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id,property_name,village_name');
        $type = $this->request->post('type',1);
        $list = $this->request->post('list',[]);
        $send_type = $this->request->post('send_type',1);
        $is_detail = $this->request->post('is_detail',0);
        $href = '';
        if($type == 1)
            $list = array($list);
        if($type == 1 || $type == 2){
            if(empty($list))
                return api_output_error(1001,'缺少必传参数');
        }
        if($type == 3){
            try{
                $where=[
                    ['o.is_paid','=',2],
                    ['o.is_discard','=',1],
                    ['o.village_id','=',$village_id],
                    ['o.order_type','<>','park_new'],
                ];
                /*$where['o.is_paid'] = 2;
                $where['o.is_discard'] = 1;
                $where['o.village_id'] = $village_id;*/
                if($is_detail){
                    $data = $service_house_new_cashier->getNewPayOrders($where,'o.order_id,o.total_money,o.name,o.phone,o.room_id,o.position_id,o.uid,o.property_id,o.order_type,r.charge_name,p.name as project_name,n.charge_number_name,o.service_start_time,o.service_end_time,o.last_ammeter,o.now_ammeter,o.rule_id',0,0,'o.order_id DESC');
                    $list = $data;
                } else{
                    $data = $service_house_new_cashier->getOrderListByGroup($where,'sum(o.total_money) as total_money,o.name,o.phone,v.room,p.position_num,o.room_id,o.position_id,o.uid,o.property_id,o.order_type,o.rule_id',0,0,'o.order_id DESC','o.room_id,o.position_id');
                    $list = $data;
                    if($list){
                        $list = $list['list'];
                    }
                }
            }catch (\Exception $e){
                return api_output_error(-1, $e->getMessage());
            }
        }
        $village_info_extend = $service_house_village->getHouseVillageInfoExtend(['village_id'=>$village_id]);
        $urge_notice_type=0;
        if($village_info_extend && isset($village_info_extend['urge_notice_type'])){
            //1短信通知2微信模板通知3短信和微信模板通知
            $urge_notice_type=$village_info_extend['urge_notice_type'];
        }
        if($list){
            $service_house_new_charge_project = new HouseNewChargeProjectService();
            $charge_info = $service_house_new_charge_project->getChargeSetInfo($village_id);
            if(empty($charge_info)){
                $call_type = 1;
            }else{
                $call_type = $charge_info['call_type'];
            }
            foreach ($list as $v){
                if($v['room_id']){
                    $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$v['room_id']],'single_id,floor_id,layer_id,village_id');
                    if($vacancy_info){
                        $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'],$vacancy_info['floor_id'],$vacancy_info['layer_id'],$v['room_id'],$vacancy_info['village_id']);
                    }else{
                        $address = '';
                    }
                    $condition=array();
                    $condition[] = ['vacancy_id','=',$v['room_id']];
                    $condition[] = ['status','=',1];
                    if($send_type == 1){
                        $condition[] = ['type','in',[0,3]];
                    }elseif($send_type == 2){
                        $condition[] = ['type','in',[0,3,1,2]];
                    }else{
                        $condition[] = ['type','in',[1,2]];
                    }
                    $bind_list = $service_house_village_user_bind->getList($condition,'uid,pigcms_id,village_id,name');
                    if($bind_list && !$bind_list->isEmpty()){
                        $bind_list=$bind_list->toArray();
                        foreach ($bind_list as $v1){
                            $href = get_base_url('pages/houseMeter/NewCollectMoney/newLiveExpenses?village_id=' . $v1['village_id'] . '&pigcms_id='.$v1['pigcms_id']);
                            if($urge_notice_type!=1) {
                                $service_house_new_cashier->sendCashierMessage($v1['uid'], $href, $address, $village_info['village_name'], $v['total_money'], $village_info['property_id'],$v['order_type'],$v['rule_id'],$v1['name']);
                            }
                            $user_info = $service_user->getUserOne(['uid'=>$v1['uid']],'phone');
                            if(isset($user_info['phone']) && $user_info['phone']){
                                $sms_data = array('type' => 'fee_notice');
                                $sms_data['uid'] = $v1['uid'];
                                $sms_data['village_id'] = $v1['village_id'];
                                $sms_data['mobile'] = $user_info['phone'];
                                $sms_data['sendto'] = 'user';
                                $sms_data['mer_id'] = 0;
                                $sms_data['store_id'] = 0;
                                $project_name_str=$v['project_name'];
                                if(isset($v['project_name_str'])){
                                    $project_name_str=$v['project_name_str'];
                                }
                                if(!$is_detail){
                                    //新模板 =》 尊敬的业主，您好！有您的物业待缴账单。截止到当前，您的待缴总额{1}，请进行缴费
                                    $sms_data['content'] = L_('[物业未缴账单]尊敬的业主，您好！截止到当前，您的待缴总额为[x1]，请进行缴费。', array('x1' => $v['total_money']));

                                } else {
                                    //新模板 =》尊敬的业主，您好！有您的物业待缴账单。截止到当前，您的{1}待缴总额为{2}，请进行缴费。
                                    $sms_data['content'] = L_('[物业未缴账单]尊敬的业主，您好！截止到当前，您的（x1）待缴总额为[x2]，请进行缴费。', array('x1' => $project_name_str, 'x2' => $v['total_money']));
                                }
                                if($urge_notice_type!=2) {
                                    $sms = (new SmsService())->sendSms($sms_data);
                                    fdump_api($sms,'send_sms',1);
                                }

                            }
                        }
                    }
                }else{
                    $garage_info = $service_house_parking->getParkingPositionDetail(['pp.position_id'=>$v['position_id']],'pp.position_num,pg.garage_num',1);
                    if($garage_info){
                        $address = $garage_info['detail']['garage_num'].'--'.$garage_info['detail']['position_num'];
                    }else{
                        $address = '';
                    }
                    if($urge_notice_type!=1) {
                        $name = $v['name'] ?: (new HouseVillageUserBind())->where(['uid'=>$v['uid'],'village_id'=>$village_id])->value('name');
                        $service_house_new_cashier->sendCashierMessage($v['uid'], $href, $address, $village_info['village_name'], $v['total_money'],$village_info['property_id'],$v['order_type'],$v['rule_id'],$name);
                    }
                    $user_info = $service_user->getUserOne(['uid'=>$v['uid']],'phone');
                    if(isset($user_info['phone']) && $user_info['phone']){
                        $sms_data = array('type' => 'fee_notice');
                        $sms_data['uid'] = $v['uid'];
                        $sms_data['mobile'] = $user_info['phone'];
                        $sms_data['sendto'] = 'user';
                        $sms_data['mer_id'] = 0;
                        $sms_data['store_id'] = 0;
                        $project_name_str=$v['project_name'];
                        if(isset($v['project_name_str'])){
                            $project_name_str=$v['project_name_str'];
                        }
                        if(!$is_detail)
                            $sms_data['content'] = L_('[物业未缴账单]尊敬的业主，您好！截止到当前，您的待缴总额为[x1]，请进行缴费。', array('x1' => $v['total_money']));
                        else
                            $sms_data['content'] = L_('[物业未缴账单]尊敬的业主，您好！截止到当前，您的（x1）待缴总额为[x2]，请进行缴费。', array('x1'=>$project_name_str,'x2' => $v['total_money']));
                        if($urge_notice_type!=2) {
                            $sms = (new SmsService())->sendSms($sms_data);
                            fdump_api($sms,'send_sms',1);
                        }

                    }
                }
            }
        }
        return api_output(0,[]);
    }

    /**
     * 导出应收账单
     * @author zhubaodi
     * @date_time 2021/06/26
     * @return \json
     */
    public function printReceivableOrder()
    {
        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page',1);
        $garage_id = $this->request->post('garage_id',0);
        $project_id = $this->request->post('project_id',0);
        $rule_id = $this->request->post('rule_id',0,'intval');
        $position_num = $this->request->post('position_num','');
        $key_val = $this->request->post('key_val','');
        $value = $this->request->post('value','');
        $room_id = $this->request->post('room_id',0);
        $room_id_arr=[];
        if(!empty($room_id)){

            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $where_vacancy=[];
            if (isset($room_id[3])){
                $where_vacancy[]=['pigcms_id','=',$room_id[3]];
            }elseif (isset($room_id[2])){
                $where_vacancy[]=['layer_id','=',$room_id[2]];
            }elseif (isset($room_id[1])){
                $where_vacancy[]=['floor_id','=',$room_id[1]];
            } else{
                $where_vacancy[]=['single_id','=',$room_id[0]];
            }
            $vacancy_info = $service_house_village_user_vacancy->getVacancyList($where_vacancy,'pigcms_id,single_id,floor_id,layer_id,village_id');
            if (!empty($vacancy_info)){
                $vacancy_info=$vacancy_info->toArray();
                if (!empty($vacancy_info)){
                    foreach ($vacancy_info as $vv){
                        $room_id_arr[]=$vv['pigcms_id'];
                    }
                }
            }

        }
        $service_house_new_cashier = new HouseNewCashierService();
        if($garage_id){
            $where['p.garage_id'] = $garage_id;
        }
        if($project_id){
            $where['o.project_id'] = $project_id;
        }
        if($rule_id){
            $where['o.rule_id'] = $rule_id;
        }
        if($position_num){
            $where['p.position_num'] = $position_num;
        }
        if($key_val && $value){
            if($key_val == 'name')
                $where['o.name'] = $value;
            else
                $where['o.phone'] = $value;
        }
        if($room_id){
            $where['o.room_id'] = $room_id_arr;
        }
        $where['o.is_paid'] = 2;
        $where['o.is_discard'] = 1;
        $where['o.village_id'] = $village_id;
        try{
            $order='o.room_id DESC,o.position_id DESC,n.id DESC,o.project_id DESC';
            $data = $service_house_new_cashier->printOrder($where,'r.charge_name,p.name as project_name,o.order_id,n.charge_number_name,o.total_money,o.service_start_time,o.service_end_time,o.last_ammeter,o.now_ammeter,o.name,o.phone,o.room_id,o.position_id',$order);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 查询打印模板
     * @author:zhubaodi
     * @date_time: 2021/6/28 9:38
     */
    public function getTemplate(){
        $village_id = $this->adminUser['village_id'];
        $print_type = $this->request->post('print_type',0,'int');  //0已缴费账单模板设置 1待缴账单模板设置
        $service_house_new_cashier = new HouseNewCashierService();
        try{
            $data = $service_house_new_cashier->getPrintTemplate($village_id,$print_type);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0,$data);

    }

    /**
     * 查询打印数据
     * @author:zhubaodi
     * @date_time: 2021/6/28 11:33
     */
    public function getPrintInfo(){
        $village_id = $this->adminUser['village_id'];
        $order_id = $this->request->post('order_id',0);
        $pigcms_id = $this->request->post('pigcms_id',0);
        $choice_ids = $this->request->post('choice_ids',[]);
        if (empty($order_id) && empty($choice_ids)){
            return api_output_error(1001,'缺少必传参数');
        }
        $template_id = $this->request->post('template_id',0);
        if (empty($template_id)){
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_new_cashier = new HouseNewCashierService();
        try{
            $data = $service_house_new_cashier->getPrintInfo($village_id,$order_id,$template_id,$pigcms_id,$choice_ids);
            $data['print_name']='';
            $data['print_time']=date('Y-m-d H:i:s');
            if(isset($this->adminUser['user_name']) && !empty($this->adminUser['user_name'])){
                $user_name=$this->adminUser['user_name'];
                $user_name=str_replace('admin-','',$user_name);
                $data['print_name']=$user_name;
            }
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 获取添加车辆的相关参数
     * @author lijie
     * @date_time 2021/07/02
     * @return \json
     */
    public function getCarConfig()
    {
        $city_arr = array('京','津','冀','晋','蒙','辽','吉','黑','沪','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','桂','琼','渝','川','贵','云','藏','陕','甘','青','宁','新');
        $parking_car_type_arr  = [
            '月租车A',
            '月租车B',
            '月租车C',
            '月租车D',
            '临时车A',
            '临时车B',
            '临时车C',
            '临时车D',
            '临时车E',
            '临时车F',
            '临时车G',
             '临时车H',
            '储值车A',
            '储值车B',
            '储值车C',
            '储值车D',
            '免费车A',
            '免费车B',
        ];
        $car_color = array(
            array(
                'id'=>'A',
                'lable'=>'白色'
            ),
            array(
                'id'=>'B',
                'lable'=>'灰色'
            ),
            array(
                'id'=>'C',
                'lable'=>'黄色'
            ),
            array(
                'id'=>'D',
                'lable'=>'粉色'
            ),
            array(
                'id'=>'E',
                'lable'=>'红色'
            ),
            array(
                'id'=>'F',
                'lable'=>'紫色'
            ),
            array(
                'id'=>'G',
                'lable'=>'绿色'
            ),
            array(
                'id'=>'H',
                'lable'=>'蓝色'
            ),
            array(
                'id'=>'I',
                'lable'=>'棕色'
            ),
            array(
                'id'=>'J',
                'lable'=>'黑色'
            ),
            array(
                'id'=>'Z',
                'lable'=>'其他'
            ),

        );
        $data['city_arr'] = $city_arr;
        $data['parking_car_type_arr'] = $parking_car_type_arr;
        $data['car_color'] = $car_color;
        return api_output(0,$data);
    }

    /**
     * 添加临时车
     * @author lijie
     * @date_time 2021/07/06
     * @return \json
     */
    public function addCar()
    {
        $village_id = $this->adminUser['village_id'];
        $post = $this->request->post('post','');
        $car_type = $post['car_type'];
        $province = $post['province'];
        $car_number = $post['car_number'];
        $car_stop_num = $post['car_stop_num'];
        $temporary_car_type = $post['temporary_car_type'];
        $car_color = $post['car_color'];
        $equipment_no = $post['equipment_no'];
        $position_id = $post['position_id'];
        $type = $post['type'];
        if(empty($province) || empty($car_number) || empty($temporary_car_type))
            return api_output_error(1001,'缺少必传参数');
        if($type == 1){
            $car_user_name = $post['name'];
            $car_user_phone = $post['phone'];
            if(empty($car_user_name) || empty($car_user_phone))
                return api_output_error(1001,'缺少必传参数');
            $postDataCar['car_user_name'] = $car_user_name;
            $postDataCar['car_user_phone'] = $car_user_phone;
        }else{
            if(!$post['room_id']){
                return api_output_error(1001,'请选择房间');
            }
            $postDataCar['room_id'] = $post['room_id'];
        }
        $service_house_village_parking = new HouseVillageParkingService();
        $postData['garage_id'] = 9999;
        $postData['position_status'] = 2;
        $postData['position_num'] = $car_number;
        $postData['position_type'] = 3;
        $postData['village_id'] = $village_id;
        $postData['start_time'] = time();
        $postData['end_time'] = 0;
        if($position_id){
            $res = $service_house_village_parking->editParkingPosition(['position_id'=>$position_id],$postData); //添加车位
            if(!$res)
                return api_output_error(1001,'服务异常');
            $postDataCar['village_id'] = $village_id;
            $postDataCar['car_type'] = $car_type;
            $postDataCar['province'] = $province;
            $postDataCar['car_number'] = $car_number;
            $postDataCar['car_stop_num'] = $car_stop_num;
            $postDataCar['car_addtime'] = time();
            $postDataCar['end_time'] = 0;
            $postDataCar['car_color'] = $car_color;
            $postDataCar['equipment_no'] = $equipment_no;
            $postDataCar['temporary_car_type'] = $temporary_car_type;
            $postDataCar['start_time'] = time();
            $res = $service_house_village_parking->editParkingCar(['car_position_id'=>$position_id],$postDataCar);
            if($res)
                return api_output(0,[],'添加成功');
            return api_output_error(1001,'服务异常');
        }else{
            $position_id = $service_house_village_parking->addParkingPosition($postData); //添加车位
            if(!$position_id)
                return api_output_error(1001,'服务异常');
            $postDataCar['village_id'] = $village_id;
            $postDataCar['car_position_id'] = $position_id;
            $postDataCar['car_type'] = $car_type;
            $postDataCar['province'] = $province;
            $postDataCar['car_number'] = $car_number;
            $postDataCar['car_stop_num'] = $car_stop_num;
            $postDataCar['car_addtime'] = time();
            $postDataCar['end_time'] = 0;
            $postDataCar['car_color'] = $car_color;
            $postDataCar['equipment_no'] = $equipment_no;
            $postDataCar['temporary_car_type'] = $temporary_car_type;
            $postDataCar['start_time'] = time();

            $res = $service_house_village_parking->addParkingCar($postDataCar);
            if($res)
                return api_output(0,[],'添加成功');
            return api_output_error(1001,'服务异常');
        }
    }

    /**
     * 车辆详情
     * @author lijie
     * @date_time 2021/07/06
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCarDetail()
    {
        $position_id = $this->request->post('position_id',0);
        if(!$position_id)
            return api_output_error(1001,'参数错误');
        $service_house_village_parking = new HouseVillageParkingService();
        $where['car_position_id'] = $position_id;
        $data = $service_house_village_parking->getCarDetail($where,'*,car_user_name as name,car_user_phone as phone');
        if($data['end_time'])
            $data['end_time'] = date('Y-m-d',$data['end_time']);
        return api_output(0,$data);
    }

    /**
     * 删除车位
     * @author lijie
     * @date_time 2021/07/06
     * @return \json
     * @throws \Exception
     */
    public function delPosition()
    {
        $position_id = $this->request->post('position_id',0);
        if(!$position_id)
            return api_output_error(1001,'参数错误');
        $service_house_village_parking = new HouseVillageParkingService();
        $where['position_id'] = $position_id;
        try{
            $res = $service_house_village_parking->delParkingPosition($where);
            if($res){
                $service_house_village_parking->delParkingCar(['car_position_id'=>$position_id]);
                return api_output(0,[],'删除成功');
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output_error(1001,'服务异常');
    }

    /**
     * 获取应收明细年月应收金额统计
     * User: zhanghan
     * Date: 2022/1/18
     * Time: 17:49
     * @return \json
     */
    public function getOrderStatisticsByYears(){
        $village_id = $this->adminUser['village_id'];
        $type = $this->request->post('type','room');
        $year = $this->request->post('year','');
        $key_id = $this->request->post('key_id',0);
        if(empty($type) || !$key_id){
            return api_output_error(1001,'缺少必传参数');
        }
        if(empty($village_id)){
            $village_id = $this->request->post('village_id',''); // 测试使用
        }
        $service_house_new_cashier = new HouseNewCashierService();
        $param['key_id'] = $key_id;
        $param['type'] = $type;
        $param['village_id'] = $village_id;
        $param['year'] = $year;
        try{
            $data = $service_house_new_cashier->getOrderStatisticsByYears($param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 收银台搜索自动补全
     * User: zhanghan
     * Date: 2022/1/12
     * Time: 20:03
     * @return \json
     */
    public function getCashierOrderListSearch(){
        $select_type = $this->request->post('select_type',1,'int');
        $option_type = $this->request->post('option_type',1,'int');
        $search_keyword = $this->request->post('search_keyword','');
        $village_id = $this->adminUser['village_id'];
        if(empty($search_keyword)){
            return api_output(0,[],'无数据');
        }
        $where = [];
        $where['option_type'] = $option_type;
        $where['search_keyword'] = trim($search_keyword);
        $where['village_id'] = $village_id;
        try{
            if($select_type == 1){ // 房产
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                if($option_type==4){
                    //房间别名编号
                    $data = $service_house_village_user_vacancy->getVacancySearchByAliasIdList($where);
                }else{

                    $data = $service_house_village_user_vacancy->getUserVacancySearchList($where);
                }
            }else{ // 车场
                if($option_type < 3){ // 车位
                    $serve_parking_position = new HouseVillageParkingService();
                    $data = $serve_parking_position->getVillageParkingSearchList($where);
                }else{ // 小区用户
                    $serve_user_bind = new HouseVillageUserBindService();
                    $where_user_bind = [];
                    $where_user_bind[] = ['village_id','=',$village_id];
                    $feild_user_bind = 'distinct bind_number as text';
                    switch ($option_type){
                        case 4:
                            $feild_user_bind = 'distinct name as text';
                            $where_user_bind[] = ['name','like','%'.$search_keyword.'%'];
                            break;
                        case 5:
                            $feild_user_bind = 'distinct phone as text';
                            $where_user_bind[] = ['phone','like','%'.$search_keyword.'%'];
                            break;
                        default:
                            $where_user_bind[] = ['bind_number','like','%'.$search_keyword.'%'];
                            break;
                    }
                    $data = $serve_user_bind->getList($where_user_bind,$feild_user_bind);
                }
            }
            if($data && is_object($data) && !$data->isEmpty()){
                $returnData['list'] = $data->toArray();
            }elseif($data && is_array($data)){
                $returnData['list'] = $data;
            }else{
                $returnData['list'] = [];
            }
        }catch (\Exception $e){
            return api_output(1003,[],$e->getMessage());
        }
        return api_output(0,$returnData,'查询成功');
    }

    //审核
    public function verifyCheckauthApply(){
        $order_id = $this->request->post('order_id',1,'int');
        $xtype = $this->request->post('xtype',1,'trim');
        $status = $this->request->post('status',1,'int');
        $bak = $this->request->post('bak',1,'trim');
        $village_id = $this->adminUser['village_id'];
        $houseVillageCheckauthApplyService=new HouseVillageCheckauthApplyService();
        $houseNewCashierService = new HouseNewCashierService();
        $whereArr=array('order_id'=>$order_id,'village_id'=>$village_id);
        $order=$houseNewCashierService->getInfo($whereArr);
        if(!$order || $order->isEmpty()){
            return api_output_error(1001,'订单不存在！');
        }
        $order=$order->toArray();
        if(!in_array($order['check_status'],array(1,2))){
            return api_output_error(1001,'订单审核状态不正确！');
        }
        if(!in_array($xtype,array('order_refund','order_discard'))){
            return api_output_error(1001, '查询参数xtype值错误！');
        }
        $check_level_info=array();
        if(in_array($this->login_role,$this->villageOrderCheckRole)  && isset($this->adminUser['wid']) && ($this->adminUser['wid']>0)){
            $check_level_info['wid']=$this->adminUser['wid'];
            $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
            $orderRefundCheckWhere=array('village_id'=>$this->adminUser['village_id'],'xtype'=>'order_refund_check');
            $userAuthLevel=$houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
            if(!empty($userAuthLevel)){
                $check_level_info['check_level']=$userAuthLevel['check_level'];
            }
        }else{
            return api_output_error(1001,'您没有权限审核！');
        }
        try {
            $verifyData=array('xtype'=>$xtype,'bak'=>$bak,'status'=>$status);
            $tmp_data = $houseVillageCheckauthApplyService->verifyCheckauthApply($order,$verifyData, $check_level_info);
            return api_output(0,$tmp_data,'查询成功');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
    }
    //审核明细
    public function getCheckauthDetail()
    {
        $village_id = $this->adminUser['village_id'];
        $order_id = $this->request->post('order_id', 1, 'int');
        $check_apply_id = $this->request->post('check_apply_id', 1, 'int');
        $page = $this->request->post('page', 0, 'intval');
        $xtype = $this->request->post('xtype', 1, 'trim');
        if ($check_apply_id < 1 || $order_id < 1) {
            return api_output_error(1001, '必传参数缺失！');
        }
        if (!in_array($xtype, array('order_refund', 'order_discard'))) {
            return api_output_error(1001, '查询参数xtype值错误！');
        }
        try {
            $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
            $data = $houseVillageCheckauthApplyService->getRefundApplyCheckDetail($order_id, $check_apply_id, $xtype);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data);
    }

    /**
     *校验是否设置打印模板
     * @author: liukezhu
     * @date : 2022/2/15
     * @return \json
     */
   public function checkSetPrint(){
       $village_id = $this->adminUser['village_id'];
       $print_type = $this->request->post('print_type',0,'int'); //0已缴费账单模板设置 1待缴账单模板设置
       $print_type = !empty($print_type) ? intval($print_type):0;
       try {
           $template_id=(new HouseVillageService())->getPrintTemplateId($village_id,$print_type);
           $data=array('template_id'=>$template_id);
       } catch (\Exception $e) {
           return api_output_error(-1, $e->getMessage());
       }
       return api_output(0, $data);
   }

    /**
     * 设置打印模板
     * @author: liukezhu
     * @date : 2022/2/15
     * @return \json
     */
   public function editSetPrint(){
       $village_id = $this->adminUser['village_id'];
       $template_id = $this->request->post('template_id',0,'int');
       $print_type = $this->request->post('print_type',0,'int'); //0已缴费账单模板设置 1待缴账单模板设置
       try {
           $data=(new HouseVillageService())->setPrintTemplateId($print_type,$village_id,$template_id);
       } catch (\Exception $e) {
           return api_output_error(-1, $e->getMessage());
       }
       return api_output(0, $data);
   }




    /**
     * 收银台快捷生成账单
     * @author:zhubaodi
     * @date_time: 2022/6/17 13:29
     */
    public function quickCall()
    {
        $data=array();
        $data['village_id'] = $this->adminUser['village_id'];
        $data['role_id']=0;
        if(in_array($this->login_role,$this->villageOrderCheckRole)){
            $data['role_id']=$this->_uid;
        }
        $data['rule_id'] = $this->request->post('rule_id', 0);//收费标准id
        $data['order_add_time'] = $this->request->post('start_time', '');//账单生成时间
        $data['cycle'] = $this->request->post('cycle', '');//收费周期
        $data['custom_value']= $this->request->post('custom_value','');//收费周期
        $data['end_time'] = $this->request->post('end_time', '');//收费截止时间
        $data['expires'] = $this->request->post('expires', '');//缴费时效

        $key = $this->request->post('key', '');
        if (empty($key)) {
            return api_output_error(1001, '房间或车场不能为空！');
        }
        $key_info = explode('|', $key);
        if (count($key_info) != 3) {
            $key_info = explode('-', $key);
        }
        if (count($key_info) != 3) {
            return api_output_error(1001, '参数异常');
        }
        $data['room_id'] = 0;//房间id
        $data['position_id'] = 0;//车位id
        if ($key_info[2] == 'room') {
            $data['room_id'] = $key_info[0];
        }
        if ($key_info[2] == 'position') {
            $data['position_id'] = $key_info[0];
        }
        if (empty($data['rule_id'])) {
            return api_output_error(1001, '收费标准不能为空！');
        }

        if (!empty($data['expires'])) {
            if (!is_numeric($data['expires']) || floor($data['expires']) != $data['expires'] || $data['expires'] < 0) {
                return api_output_error(1001, '请正确输入缴费时效,缴费时效为大于0的正整数！');
            }
        } else {
            $data['expires'] = 1;
        }
        if (!empty($data['cycle'])) {
            if (!is_numeric($data['cycle']) || floor($data['cycle']) != $data['cycle'] || $data['cycle'] < 0) {
                return api_output_error(1001, '请正确输入收费周期,收费周期为大于0的正整数！');
            }
        } else {
            $data['cycle'] = 1;
        }
        if (!empty($data['custom_value'])) {
            if (!is_numeric($data['custom_value'])  || $data['custom_value'] < 0) {
                return api_output_error(1001, '请正确输入自定义单位数值,自定义单位数值为大于0的正数！');
            }
        } 
        if (empty($data['room_id']) && empty($data['position_id'])) {
            return api_output_error(1001, '房间或车场不能为空！');
        }
        /****
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
         **/
    
         $data['per_one_order'] = $this->request->param('per_one_order', 0, 'intval'); //1时 将生成多笔按一个月或一日计费的账单
        try {
            $res = (new HouseNewCashierService())->quickCall($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        if ($res) {
            return api_output(0, ['msg' => '账单已生成', 'status' => 0], '账单已生成');
        }
        return api_output_error(1001, '服务异常');
    }
    /**
     * 押金管理列表
     * @author:zhubaodi
     * @date_time: 2022/5/16 18:06
     */
   public function getDepositList(){
       $data['village_id'] = $this->adminUser['village_id'];
       $data['room_id'] = $this->request->post('room_id', 0, 'intval');
       $data['page'] = $this->request->post('page', 1, 'intval');
       if (empty($data['room_id'])){
           return api_output_error(1001, '房间id不能为空！');
       }
       $data['limit']=20;
       try {
           $data=(new HouseNewCashierService())->getDepositList($data);
       } catch (\Exception $e) {
           return api_output_error(-1, $e->getMessage());
       }
       return api_output(0, $data);
   }

   public function getDepositInfo(){
       $data['room_id'] = $this->request->post('room_id', 0, 'intval');
       $data['money'] = $this->request->post('money');
       $data['village_id'] = $this->request->post('village_id',0,'intval');
       if (empty($data['village_id'])){
           $data['village_id'] = $this->adminUser['village_id'];
       }
       if (empty($data['room_id'])){
           return api_output_error(1001, '房间id不能为空！');
       }
       try {
           $data=(new HouseNewCashierService())->getDepositInfo($data);
       } catch (\Exception $e) {
           return api_output_error(-1, $e->getMessage());
       }
       return api_output(0, $data);
   }

    /**
     * 根据楼栋查单元列表
     * @author:zhubaodi
     * @date_time: 2022/5/27 10:12
     */
   public function getfloorList(){
       $data['village_id'] = $this->adminUser['village_id'];
       $data['single_id'] = $this->request->post('single_id', 1, 'intval');
       if (empty($data['single_id'])){
           return api_output_error(1001, '楼栋id不能为空！');
       }
       try {
           $res=(new HouseNewCashierService())->getFloorList($data);
       } catch (\Exception $e) {
           return api_output_error(-1, $e->getMessage());
       }
       return api_output(0, $res);
   }

    /**
     * 根据楼栋单元查房间列表
     * @author:zhubaodi
     * @date_time: 2022/5/27 11:05
     */
   public function getVacancyList(){
       $data['village_id'] = $this->adminUser['village_id'];
       $data['single_id'] = $this->request->post('single_id', 0, 'intval');
       $data['floor_id'] = $this->request->post('floor_id', 0, 'intval');
       
       if (empty($data['single_id'])){
           return api_output_error(1001, '楼栋id不能为空！');
       }
       if (empty($data['floor_id'])){
           return api_output_error(1001, '单元id不能为空！');
       }
       try {
           $res=(new HouseNewCashierService())->getVacancyList($data);
       } catch (\Exception $e) {
           return api_output_error(-1, $e->getMessage());
       }
       return api_output(0, $res);
   }

    /**
     *家属/租客绑定列表
     * @author:zhubaodi
     * @date_time: 2022/5/30 11:13
     */
    public function bind_list(){
        $data =$this->adminUser;
        $data['pigcms_id'] = $this->request->post('pigcms_id', 0, 'intval');
        if (empty($data['pigcms_id'])){
            return api_output_error(1001, '用户绑定id不能为空！');
        }
        try {
            $res=(new HouseNewCashierService())->bind_list($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }


    /**
     * 在线文件管理列表查询
     * @author:zhubaodi
     * @date_time: 2022/5/30 11:13
     */
    public function material_list(){
        $data['village_id'] =$this->adminUser['village_id'];
        $data['pigcms_id'] = $this->request->post('pigcms_id', 0, 'intval');
        if (empty($data['pigcms_id'])){
            return api_output_error(1001, '用户绑定id不能为空！');
        }
        try {
            return api_output(0, ['url'=>'/packapp/material_diy/index.html#/write_list?pigcms_id='.$data['pigcms_id']]);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }

    /**
     * 附件查询
     * @author:zhubaodi
     * @date_time: 2022/5/30 11:13
     */
    public function write_file_list(){
        $data =$this->adminUser;
        $data['diy_id'] = $this->request->post('diy_id', 0, 'intval');
        $data['page'] = $this->request->post('page', 1, 'intval');
        if (empty($data['diy_id'])){
            return api_output_error(1001, '文件id不能为空！');
        }
        $data['limit'] =20;
        try {
            $res=(new HouseNewCashierService())->write_file_list($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }

    /**
     * 备注查询
     * @author:zhubaodi
     * @date_time: 2022/5/30 11:13
     */
    public function write_remark_list(){
        $data =$this->adminUser;
        $data['diy_id'] = $this->request->post('diy_id', 0, 'intval');
        $data['page'] = $this->request->post('page', 1, 'intval');
        if (empty($data['diy_id'])){
            return api_output_error(1001, '文件id不能为空！');
        }
        $data['limit'] =20;
        try {
            $res=(new HouseNewCashierService())->write_remark_list($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }

    /**
     * 文件详情查询
     * @author:zhubaodi
     * @date_time: 2022/5/30 11:13
     */
    public function template_write_detail(){
        $data =$this->adminUser;
        $data['diy_id'] = $this->request->post('diy_id', 0, 'intval');
        if (empty($data['diy_id'])){
            return api_output_error(1001, '文件id不能为空！');
        }
        try {
            $res=(new HouseNewCashierService())->template_write_detail($data['diy_id'],true);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }


    /**
     * 快捷账单查询收费标准信息
     * @author:zhubaodi
     * @date_time: 2022/6/23 9:01
     */
    public function getQuickRuleInfo(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['rule_id']= $this->request->post('rule_id',0);//收费标准id
        $data['cycle']= $this->request->post('cycle',0);//收费周期
        $data['custom_value']= $this->request->post('custom_value','');//收费周期
        $data['end_time']= $this->request->post('end_time','');//收费截止时间
        $data['start_time']= $this->request->post('start_time','');//账单生成时间

        $key = $this->request->post('key','');
        if (empty($data['rule_id'])){
            return api_output_error(1001, '收费标准不能为空！');
        }
        if(empty($key)){
            return api_output_error(1001, '房间或车场不能为空！');
        }
        $key_info = explode('|',$key);
        if(count($key_info) != 3) {
            $key_info = explode('-',$key);
        }
        if(count($key_info) != 3) {
            return api_output_error(1001,'参数异常');
        }
        if (empty($data['cycle'])){
            $data['cycle']=1;
        }
        if (!empty($data['custom_value'])) {
            if (!is_numeric($data['custom_value'])  || $data['custom_value'] < 0) {
                return api_output_error(1001, '请正确输入自定义单位数值,自定义单位数值为大于0的正数！');
            }
        }
        $data['room_id']= 0;//房间id
        $data['position_id']= 0;//车位id
        if ($key_info[2]=='room'){
            $data['room_id']=$key_info[0];
        }
        if ($key_info[2]=='position'){
            $data['position_id']=$key_info[0];
        }

        if (empty($data['room_id'])&&empty($data['position_id'])){
            return api_output_error(1001, '房间或车场不能为空！');
        }
        try {
            $res=(new HouseNewCashierService())->getQuickRuleInfo($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }
    /**
     * 设置房间的欠费状态
     * @author:zhubaodi
     * @date_time: 2022/6/7 15:59
     */
    public function setVacancyPayStatus()
    {
        $data['village_id'] = $this->adminUser['village_id'];
        $data['room_id'] = $this->request->post('room_id', 0, 'intval');
        $data['pay_status'] = $this->request->post('pay_status', 0, 'intval');

        if (empty($data['room_id'])){
            return api_output_error(1001, '房间id不能为空！');
        }
        if (empty($data['pay_status'])){
            return api_output_error(1001, '欠费状态不能为空！');
        }
        try {
            $res=(new HouseNewCashierService())->setVacancyPayStatus($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }

    /**
     * 查询自动生成账单结果列表
     * @author:zhubaodi
     * @date_time: 2022/7/21 18:10
     */
    public function getAutoOrderLogList(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['rule_id'] = $this->request->post('rule_id', 0, 'intval');
        $data['page'] = $this->request->post('page', 0, 'intval');
        $data['limit'] = $this->request->post('limit', 0, 'intval');
        if (empty($data['rule_id'])){
            return api_output_error(1001, '收费标准id不能为空！');
        }
        try {
            $res=(new HouseNewCashierService())->getAutoOrderLogList($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $res);
    }
}