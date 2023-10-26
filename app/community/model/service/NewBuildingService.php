<?php
/**
 * @author : 合肥快鲸科技有限公司
 * @date : 2022/12/8
 */

namespace app\community\model\service;


use app\common\model\service\config\ConfigCustomizationService;
use app\community\model\db\AreaStreetPartyBranch;
use app\community\model\db\FaceA185Indoor;
use app\community\model\db\HouseFaceDevice;
use app\community\model\db\HouseNewChargeStandardBind;
use app\community\model\db\HouseNewOfflinePay;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseNewPayOrderSummary;
use app\community\model\db\HouseNewRepairCate;
use app\community\model\db\HouseNewRepairCateCustom;
use app\community\model\db\HouseNewRepairWorksOrder;
use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillageBindCar;
use app\community\model\db\HouseVillageBindPosition;
use app\community\model\db\HouseVillageDataConfig;
use app\community\model\db\HouseVillageDetailRecord;
use app\community\model\db\HouseVillageFloor;
use app\community\model\db\HouseVillageFloorType;
use app\community\model\db\HouseVillageImportRecord;
use app\community\model\db\HouseVillageLabel;
use app\community\model\db\HouseVillageLabelCat;
use app\community\model\db\HouseVillageLayer;
use app\community\model\db\HouseVillagePublicArea;
use app\community\model\db\HouseVillageSingle;
use app\community\model\db\HouseVillageUserAttribute;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageUserLabel;
use app\community\model\db\HouseVillageUserLabelBind;
use app\community\model\db\HouseVillageUserRecord;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\db\HouseVillageVacancyIccard;
use app\community\model\db\HouseVillageVacancyNum;
use app\community\model\db\StreetPartyBindUser;
use app\community\model\db\User;
use app\community\model\service\Park\D6Service;
use app\thirdAccess\model\db\HouseThirdConfig;
use customization\customization;
use think\facade\Cache;

class NewBuildingService
{

    use customization;

    protected $time;
    protected $HouseVillageUserBind;
    protected $HouseVillageUserService;
    protected $HouseVillageService;
    protected $HouseVillageUserVacancy;
    protected $FaceA185Indoor;
    protected $HouseFaceDevice;
    protected $HouseVillageVacancyNum;
    protected $HouseNewChargeStandardBind;
    protected $HouseVillageBindPosition;
    protected $HouseVillageBindCar;
    protected $HouseVillageUserLabelService;
    protected $HouseVillageDataConfig;
    protected $HouseVillageLabelCat;
    protected $HouseVillageLabel;
    protected $User;
    protected $HouseNewPayOrder;
    protected $HouseNewPayOrderSummary;
    protected $HouseNewOfflinePay;
    protected $HouseNewCashierService;
    protected $HouseVillageDetailRecord;
    protected $HouseNewRepairWorksOrder;
    protected $HouseNewRepairService;
    protected $HouseVillagePublicArea;
    protected $HouseNewRepairCate;
    protected $HouseNewRepairCateCustom;
    protected $HouseVillageVacancyIccard;
    protected $HouseVillageUserLabelBind;
    protected $StreetPartyBindUser;
    protected $HouseVillageUserLabel;
    protected $AreaStreetPartyBranch;
    protected $HouseVillage;
    protected $HouseVillageFloor;
    protected $HouseVillageFloorType;
    protected $HouseVillageUserAttribute;
    protected $HouseVillageSingle;
    protected $HouseVillageLayer;
    protected $HouseThirdConfig;
    protected $HouseVillageUserRecord;
    protected $HouseVillageImportRecord;

    public $person_type_list=[
        ['color'=>'green','value'=>'业主'],
        ['color'=>'lime','value'=>'家属'],
        ['color'=>'orange','value'=>'租客'],
        ['color'=>'green','value'=>'业主(new)'],
        ['color'=>'volcano','value'=>'工作人员'],
        ['color'=>'red','value'=>'访客'],
        ['color'=>'gold','value'=>'出入证'],
    ];

    public $person_type_arr=[
        0=>['color'=>'green','value'=>'业主'],
        1=>['color'=>'lime','value'=>'家属'],
        2=>['color'=>'orange','value'=>'租客'],
        3=>['color'=>'green','value'=>'业主(new)'],
        4=>['color'=>'volcano','value'=>'工作人员'],
        5=>['color'=>'red','value'=>'访客'],
        6=>['color'=>'gold','value'=>'出入证'],
    ];

    public $limitThirdTypeBtnArr = ['linghui'];
    public $thirdTypeTitle = [
        'linghui' => '智慧楼宇管理系统',
    ];

    public function __construct()
    {
        $this->time=time();
        $this->HouseVillageUserBind=new HouseVillageUserBind();
        $this->HouseVillageUserService=new HouseVillageUserService();
        $this->HouseVillageService = new HouseVillageService();
        $this->HouseVillageUserVacancy=new HouseVillageUserVacancy();
        $this->FaceA185Indoor=new FaceA185Indoor();
        $this->HouseFaceDevice=new HouseFaceDevice();
        $this->HouseVillageVacancyNum=new HouseVillageVacancyNum();
        $this->HouseNewChargeStandardBind = new HouseNewChargeStandardBind();
        $this->HouseVillageBindPosition=new HouseVillageBindPosition();
        $this->HouseVillageBindCar=new HouseVillageBindCar();
        $this->HouseVillageUserLabelService=new HouseVillageUserLabelService();
        $this->HouseVillageDataConfig=new HouseVillageDataConfig();
        $this->HouseVillageLabelCat=new HouseVillageLabelCat();
        $this->HouseVillageLabel=new HouseVillageLabel();
        $this->User=new User();
        $this->HouseNewPayOrder=new HouseNewPayOrder();
        $this->HouseNewPayOrderSummary=new HouseNewPayOrderSummary();
        $this->HouseNewOfflinePay=new HouseNewOfflinePay();
        $this->HouseNewCashierService=new HouseNewCashierService();
        $this->HouseVillageDetailRecord=new HouseVillageDetailRecord();
        $this->HouseNewRepairWorksOrder=new HouseNewRepairWorksOrder();
        $this->HouseNewRepairService=new HouseNewRepairService();
        $this->HouseVillagePublicArea=new HouseVillagePublicArea();
        $this->HouseNewRepairCate = new HouseNewRepairCate();
        $this->HouseNewRepairCateCustom=new HouseNewRepairCateCustom();
        $this->HouseVillageVacancyIccard=new HouseVillageVacancyIccard();
        $this->HouseVillageUserLabelBind=new HouseVillageUserLabelBind();
        $this->StreetPartyBindUser=new StreetPartyBindUser();
        $this->HouseVillageUserLabel=new HouseVillageUserLabel();
        $this->AreaStreetPartyBranch=new AreaStreetPartyBranch();
        $this->HouseVillage=new HouseVillage();
        $this->HouseVillageFloor=new HouseVillageFloor();
        $this->HouseVillageFloorType=new HouseVillageFloorType();
        $this->HouseVillageUserAttribute= new HouseVillageUserAttribute();
        $this->HouseVillageSingle =new HouseVillageSingle();
        $this->HouseVillageLayer=new HouseVillageLayer();
        $this->HouseThirdConfig=new HouseThirdConfig();
        $this->HouseVillageUserRecord=new HouseVillageUserRecord();
        $this->HouseVillageImportRecord=new HouseVillageImportRecord();
    }


    //====================================todo 共用方法 start======================================

    //todo 获取指定房间数据
    public function getHouseVillageUserVacancyMethod($village_id,$vacancy_id,$field=true){
        $where=[
            ['village_id','=',$village_id],
            ['pigcms_id','=',$vacancy_id],
            ['is_del','=',0],
        ];
        $vacancy_info=$this->HouseVillageUserVacancy->getOne($where,$field);
        if (!$vacancy_info || $vacancy_info->isEmpty()) {
            throw new \think\Exception("该房间不存在");
        }
        return $vacancy_info->toArray();
    }

    //todo 获取单个房间数据
    public function getHouseVillageUserVacancyFindMethod($where,$field=true){
        $vacancy_info=$this->HouseVillageUserVacancy->getOne($where,$field);
        if (!$vacancy_info || $vacancy_info->isEmpty()) {
            return [];
        }
        return $vacancy_info->toArray();
    }

    //todo 校验室内机唯一性
    public function a185IndoorUniqueMethod($device_sn,$id=0){
        $where=[
            ['device_sn','=',$device_sn],
            ['status', 'in', [0,1]]
        ];
        if($id > 0){
            $where[] = ['id','<>',$id];
        }
        $data=$this->FaceA185Indoor->getOne($where,'id,device_sn,status');
        if ($data && !$data->isEmpty()) {
            return ['error'=>false,'msg'=>'该室内机设备号已存在'];
        }else{
            return ['error'=>true,'msg'=>'ok'];
        }
    }

    //todo 写入室内机数据
    public function addA185IndoorRoomMethod($indoor,$param){
        $data=array(
            'device_sn'=>$param['device_sn'],
            'status'=>$param['status']
        );
        if(isset($indoor['id']) && !empty($indoor['id'])){
            //编辑
            $data['update_time']=$this->time;
            $rr=$this->a185IndoorUniqueMethod($param['device_sn'],$indoor['id']);
            if(!$rr['error']){
                return ['error'=>false,'msg'=>$rr['msg']];
            }
            $this->FaceA185Indoor->updateThis(['id'=>$indoor['id']],$data);
        }else{
            //添加
            if($param['device_sn']){
                $rr=$this->a185IndoorUniqueMethod($param['device_sn']);
                if(!$rr['error']){
                    return ['error'=>false,'msg'=>$rr['msg']];
                }
                $data['village_id']=$param['village_id'];
                $data['room_id']=$param['room_id'];
                $data['device_type']=2;
                $data['add_time']=$this->time;
                $this->FaceA185Indoor->add($data);
            }
        }
        return ['error'=>true,'msg'=>'ok'];
    }

    //todo 校验定制水电燃编号
    public function checkWaterElectricGasParamMethod($village_id,$vacancy_id,$param=[]){
        if(!cfg('customized_meter_reading') || empty($param)){
            return ['status'=>true,'msg'=>'非定制/无数据操作'];
        }
        $param['water_number']=trim($param['water_number']);
        $param['heat_water_number']=trim($param['heat_water_number']);
        if(!empty($param['water_number']) && !empty($param['heat_water_number']) && $param['water_number'] == $param['heat_water_number']){
            return ['error'=>false,'msg'=>'该冷/热水表编号不可相同,请重新添加!'];
        }
        $vacancy_num=$this->HouseVillageVacancyNum->getFind([
            ['village_id','=',$village_id],
            ['vacancy_id','=',$vacancy_id],
        ],'id');
        $where_str='(village_id = '.$village_id.')';
        if(!empty($param['water_number']) && !empty($param['heat_water_number'])){ //存在冷/热水水编号
            $where_str.=' AND ((water_number = "'.$param['water_number'].'" AND water_number <> "") OR (heat_water_number = "'.$param['heat_water_number'].'" AND heat_water_number <> "") OR (water_number = "'.$param['heat_water_number'].'" AND water_number <> "") OR (heat_water_number = "'.$param['water_number'].'" AND heat_water_number <> ""))';
        }else{ //存在冷或热水水编号
            $number='';
            if(!empty($param['water_number'])){
                $number=$param['water_number'];
            }elseif (!empty($param['heat_water_number'])){
                $number=$param['heat_water_number'];
            }
            if(!empty($number)){
                $where_str.=' AND ((water_number = "'.$number.'" AND water_number <> "") OR (heat_water_number = "'.$number.'" AND heat_water_number <> ""))';
            }
        }
        if($vacancy_num && !$vacancy_num->isEmpty()){
            $where_str.=' AND (id <> '.$vacancy_num['id'].')';
        }else{
            $where_str.=' AND (vacancy_id = '.$vacancy_id.')';
        }
        $result=$this->HouseVillageVacancyNum->getFind($where_str,'id,water_number,heat_water_number');
        if($result){
            $water_type_arr=[
                $result['water_number'],
                $result['heat_water_number']
            ];
            if($param['water_number'] && in_array($param['water_number'],$water_type_arr)){
                return ['error'=>false,'msg'=>'该冷水表编号【'.$param['water_number'].'】已存在,请重新添加!'];
            }elseif ($param['heat_water_number'] && in_array($param['heat_water_number'],$water_type_arr)){
                return ['error'=>false,'msg'=>'该热水表编号【'.$param['heat_water_number'].'】已存在,请重新添加!'];
            }
        }
        $param['village_id']=$village_id;
        if($vacancy_num){
            $this->HouseVillageVacancyNum->saveOne(['vacancy_id'=>$vacancy_id],$param);
        }else{
            $param['vacancy_id']=$vacancy_id;
            $res=$this->HouseVillageVacancyNum->addFind($param);
            if(!$res){
                fdump_api(['获取$res=='.__LINE__,$village_id,$vacancy_id,$param],'v20NewBuilding/error_log',1);
                return ['error'=>false,'msg'=>'操作失败,请重试!'];
            }
        }
        return ['error'=>true,'msg'=>'操作成功'];

    }

    //todo 查询收费标准
    public function getHouseNewChargeRuleMethod($where,$field=true,$order='b.id DESC',$page=0,$limit=10){
        $list = $this->HouseNewChargeStandardBind->getList($where,$field,$page,$limit,$order);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $count = $this->HouseNewChargeStandardBind->getListCount($where);
        }
        return ['list'=>$list,'count'=>$count];
    }

    //todo 查询车位数据
    public function getHouseVillageBindCarMethod($where,$field=true,$order='a.id DESC',$page=0,$limit=10){
        $list = $this->HouseVillageBindCar->getUserBindList($where,$field,$order,$page,$limit);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $count = $this->HouseVillageBindCar->getUserBindCount($where);
        }
        return ['list'=>$list,'count'=>$count];
    }

    //todo 查询账单
    public function getHouseNewPayOrderMethod($where,$whereRaw='',$field=true,$order='o.order_id DESC',$page=0,$limit=10){
        $list = $this->HouseNewPayOrder->getRoomPayOrderList($where,$whereRaw,$field,$order,$page,$limit);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $count = $this->HouseNewPayOrder->getRoomPayOrderCount($where,$whereRaw);
        }
        return ['list'=>$list,'count'=>$count];
    }

    //todo 查询工单数据
    public function getHouseNewRepairWorksOrderMethod($where,$whereRaw='',$field=true,$order='o.order_id DESC',$page=0,$limit=10){
        $list = $this->HouseNewRepairWorksOrder->getBindWorksOrderList($where,$whereRaw,$field,$order,$page,$limit);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $count = $this->HouseNewRepairWorksOrder->getBindWorksOrderCount($where,$whereRaw);
        }
        return ['list'=>$list,'count'=>$count];
    }

    //todo 查询房间绑定IC卡
    public function getHouseVillageVacancyIccardMethod($where,$field=true,$order='id DESC',$page=0,$limit=10){
        $list = $this->HouseVillageVacancyIccard->getBindVacancyList($where,$field,$order,$page,$limit);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $count = $this->HouseVillageVacancyIccard->getBindVacancyCount($where);
        }
        return ['list'=>$list,'count'=>$count];
    }

    //todo 查询绑定标签集合
    public function getHouseVillageUserLabelBindColumnMethod($pigcms_id,$column){
        $where=[
            ['bind_id','=',$pigcms_id],
            ['is_delete','=',0],
        ];
        return $this->HouseVillageUserLabelBind->getColumn($where,$column);
    }

    //todo 一维转二维
    public function arrayChunkMethod($param,$type=0){
        $data=[];
        if($param){
            foreach ($param as $k=>$v){
                $types=0;
                if($type == 1 && $v && $v == '党员'){
                    $types=1;
                }
                $data[]=['label'=>$k,'value'=>$v,'type'=>$types];
            }
        }
        return $data;
    }

    //todo 查询小区自定义字段
    public function getHouseVillageDataConfigMethod($property_id,$village_info=[]){
        $where=[
            ['village_id','=',0],
            ['property_id','=',$property_id],
            ['is_display','=',1],
            ['is_close','=',0],
        ];
        $field='key,type,title,is_must,is_system,use_field';
        $list=$this->HouseVillageDataConfig->getList($where,$field,$order='sort DESC, acid ASC');
        if ($list && ! is_array($list)) {
            $list=$list->toArray();
        }
        if($list && !empty($list)){
            foreach ($list as &$v){
                $use_field=[];
                $is_disabled=false;
                if($v['type'] == 2){
                    if($v['is_system'] == 1){
                        $use_field = $this->HouseVillageService->get_system_value($v['key']);
                    }else{
                        $use_field = explode(',',$v['use_field']);
                    }
                }
                if(isset($village_info['set_id_code']) && $village_info['set_id_code'] == 1 && in_array($v['key'],['birthday','sex'])){
                    $is_disabled=true;
                }
                $v['use_field']=$use_field;
                $v['source']=2;
                $v['is_disabled']=$is_disabled;
                unset($v['is_system']);
            }
        }
        return $list;
    }

    //todo 获取信息标注
    public function getUserMarkMethod($street_id,$village_id,$user_info=[]){
        $bind_party_data=$this->assembleBindStreetPartyData($street_id,$user_info);
        $label=$this->HouseVillageUserLabelService;
        $data=[
            [
                'label'=>$label->political_affiliation_title,
                'value'=>$this->arrayChunkMethod($label->political_affiliation_arr,1),
                'type'=>1,
                'field'=>'user_political_affiliation',
                'data'=>[
                    'value'=>$bind_party_data['political_affiliation'],
                    'field'=>'user_party_id',
                    'party_id'=>$bind_party_data['political_party_id'],
                    'street_party_branch'=>$bind_party_data['street_party_branch']
                ]
            ],
            [
                'label'=>$label->special_groups_title,
                'value'=>$this->arrayChunkMethod($label->special_groups_arr),
                'type'=>0,
                'field'=>'user_special_groups',
                'data'=>[
                    'value'=>$bind_party_data['special_groups']?$bind_party_data['special_groups']:array(),
                ]
            ],
            [
                'label'=>$label->focus_groups_title,
                'value'=>$this->arrayChunkMethod($label->focus_groups_arr),
                'type'=>0,
                'field'=>'user_focus_groups',
                'data'=>[
                    'value'=>$bind_party_data['focus_groups']?$bind_party_data['focus_groups']:array(),
                ]
            ],
            [
                'label'=>$label->vulnerable_groups_title,
                'value'=>$this->arrayChunkMethod($label->vulnerable_groups_arr),
                'type'=>0,
                'field'=>'user_vulnerable_groups',
                'data'=>[
                    'value'=>$bind_party_data['care_groups']?$bind_party_data['care_groups']:array(),
                ]
            ],
        ];
        return $data;
    }

    //todo 获取用户标签
    public function getUserLabelMethod($village_id,$pigcms_id,$cat_function){
        $list=[];
        $label_id=[];
        $where=[
            ['cat_function','=',$cat_function],
            ['village_id','=',$village_id],
            ['status','=',1]
        ];
        $cat_list=$this->HouseVillageLabelCat->getList($where,'cat_id as id,cat_name as name');
        if(!$cat_list || $cat_list->isEmpty()) {
           return ['list'=>$list,'value'=>$label_id];
        }
        $cat_list=$cat_list->toArray();
        $cat_id = array_column($cat_list, 'id');
        $where=[
            ['cat_id','in',$cat_id],
            ['status','=',0]
        ];
        $label_list=$this->HouseVillageLabel->getHouseVillageLabel($where,'id,cat_id as pid,label_name as name');
        if($pigcms_id){//读取选中的值
            $label_id=$this->getHouseVillageUserLabelBindColumnMethod($pigcms_id,'village_label_id');
        }
        foreach ($cat_list as $k1=>$v1){
            $data=[
                'id'=>$v1['id'],
                'name'=>$v1['name']
            ];
            $children=[];
            if($label_list){
                foreach ($label_list as $k2=>$v2){
                    if($v1['id'] == $v2['pid']){
                        $children[]=$v2;
                    }
                }
            }
            $data['children']=$children;
            if($children){
                $ids=[];
                $children_id=array_column($children,'id');
                if($label_id){
                    foreach ($label_id as $k3=>$v3){
                        if(in_array($v3,$children_id)){
                           $ids[]=$v3;
                        }
                    }
                }
                $data['value']=$ids;
            }else{
                $data['value']=[];
            }
            $list[]=$data;
        }
        return ['list'=>$list,'value'=>$label_id,'field'=>'user_label_groups'];
    }

    //todo 获取单个平台用户
    public function getUserFindMethod($where,$field=true,$is_tips=true){
        $result=$this->User->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            if($is_tips){
                throw new \think\Exception('该用户不存在');
            }else{
                return [];
            }
        }
        return $result->toArray();
    }

    //todo 获取单个小区用户
    public function getHouseVillageUserBindFindMethod($where,$field=true,$is_tips=true){
        $result=$this->HouseVillageUserBind->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            if($is_tips){
                throw new \think\Exception('该用户不存在');
            }else{
                return [];
            }
        }
        return $result->toArray();
    }

    //todo 查询某一列集合
    public function getHouseVillageUserBindColumnMethod($where,$field=true,$key=''){
        $result=$this->HouseVillageUserBind->getColumn($where,$field,$key);
        return $result;
    }

    //todo 查询线下支付设置
    public function getHouseNewOfflinePayFindMethod($property_id,$field=true){
        $where=[
            ['property_id','=',$property_id],
        ];
        $result=$this->HouseNewOfflinePay->getList($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }

    //todo 查询开票记录
    public function getHouseVillageDetailRecordFindMethod($order_id,$field=true){
        $where=[
            ['order_id','=',$order_id],
            ['order_type','=',2],
        ];
        $result=$this->HouseVillageDetailRecord->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }

    //todo 获取订单支付方式
    public function getOrderPayTypeMethod($summary_id,$offline_pay,$village_balance){
        $offline_pay_type = '';
        $pay_type='';
        $payList=[];
        if($offline_pay){
            foreach ($offline_pay as $vv) {
                $payList[$vv['id']] = $vv['name'];
            }
        }
        $summary_order=$this->HouseNewPayOrderSummary->getOne(['summary_id'=>$summary_id],'pay_type,offline_pay_type,online_pay_type');
        if($payList && $summary_order && !$summary_order->isEmpty()){
            if(strpos($summary_order['offline_pay_type'],',')>0){
                $offline_pay_type_arr=explode(',',$summary_order['offline_pay_type']);
                foreach ($offline_pay_type_arr as $opay){
                    if(isset($payList[$opay])){
                        $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                    }
                }
            }else{
                $offline_pay_type = isset($payList[$summary_order['offline_pay_type']]) ? $payList[$summary_order['offline_pay_type']]:'';
            }
            $online_pay_type = $summary_order['online_pay_type'];
            $pay_type=$summary_order['pay_type'];
            if (in_array($pay_type, [2, 22])) {
                $pay_type = $this->HouseNewCashierService->pay_type[$pay_type] . '-' . $offline_pay_type;
            } elseif (in_array($pay_type, [1, 3])) {
                $pay_type = $this->HouseNewCashierService->pay_type[$pay_type];
            } elseif ($pay_type == 4) {
                if (empty($online_pay_type)) {
                    if ($village_balance>0){
                        $online_pay_type1 = '小区住户余额支付';
                    }else{
                        $online_pay_type1 = '余额支付';
                    }
                } else {
                    $online_pay_type1 = $this->HouseNewCashierService->pay_type_arr[$online_pay_type];
                }
                $pay_type = $this->HouseNewCashierService->pay_type[$pay_type] . '-' . $online_pay_type1;
            }
        }
        return $pay_type;
    }

    //todo 获取房间里所有人员id集合
    public function getRoomUserIdArrMethod($village_id,$vacancy_id){
        $whereUserBind = [
            ['village_id', '=', $village_id],
            ['vacancy_id', '=', $vacancy_id],
            ['status','<>',4],
        ];
        $result=$this->HouseVillageUserBind->getColumn($whereUserBind, 'pigcms_id');
        return $result;
    }

    //todo 获取人员参数属性
    public function getRoomUserFieldDataMethod(){
        $data=[
            ['type'=>1,'title'=>'用户编号','key'=>'bind_number','use_field'=>[],'is_must'=>0,'source'=>1,'is_disabled'=>true],
            ['type'=>1,'title'=>'姓名','key'=>'name','use_field'=>[],'is_must'=>1,'source'=>1,'is_disabled'=>false],
            ['type'=>1,'title'=>'手机号','key'=>'phone','use_field'=>[],'is_must'=>0,'source'=>1,'is_disabled'=>false],
            ['type'=>1,'title'=>'身份证号','key'=>'id_card','use_field'=>[],'is_must'=>0,'source'=>1,'is_disabled'=>false],
            ['type'=>1,'title'=>'IC卡号','key'=>'ic_card','use_field'=>[],'is_must'=>0,'source'=>1,'is_disabled'=>false],
            ['type'=>1,'title'=>'非机动车卡号','key'=>'nmv_card','use_field'=>[],'is_must'=>0,'source'=>1,'is_disabled'=>false],
            ['type'=>1,'title'=>'备注','key'=>'memo','use_field'=>[],'is_must'=>0,'source'=>1,'is_disabled'=>false],
        ];
        return $data;
    }

    //todo 获取用户关联党信息
    public function getStreetPartyBindUserFindMethod($where,$field=true){
        $result=$this->StreetPartyBindUser->getFind($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }

    //todo 获取关联标签
    public function getHouseVillageUserLabelFindMethod($where,$field=true){
        $result=$this->HouseVillageUserLabel->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }

    //todo 查询党支部
    public function getAreaStreetPartyBranchMethod($where,$field=true,$order='id DESC'){
        $list = $this->AreaStreetPartyBranch->getList($where,$field,$order);
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
        }
        return $list;
    }

    //todo 查询小区
    public function getHouseVillageFindMethod($village_id,$field=true){
        $result=$this->HouseVillage->getOne($village_id,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }

    //todo 查询房间
    public function getHouseVillageUserVacancyListMethod($where,$field=true,$order='pigcms_id DESC',$page=0,$limit=10){
        $list = $this->HouseVillageUserVacancy->getList($where,$field,$order,$limit,$page);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $where[] = ['is_del','=',0];
            $count = $this->HouseVillageUserVacancy->getCount($where);
        }
        return ['list'=>$list,'count'=>$count];
    }

    //todo 查询房间指定一列
    public function getHouseVillageUserVacancyColumnMethod($where,$field){
        $result = $this->HouseVillageUserVacancy->getColumn($where,$field);
        return $result ? array_values(array_unique($result)) : [];
    }
    
    //todo 查询指定单元集合
    public function getHouseVillageFloorSelectMethod($where,$field=true,$key=''){
        $result=$this->HouseVillageFloor->getOneColumn($where,$field,$key);
        return $result;
    }

    //todo 查询单个单元
    public function getHouseVillageFloorFindMethod($where,$field=true){
        $result=$this->HouseVillageFloor->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }

    //todo 查询单个单元
    public function getHouseVillageLayerFindMethod($where,$field=true){
        $result=$this->HouseVillageLayer->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }
    
    

    //todo 查询指定单元类型集合
    public function getHouseVillageFloorTypeSelectMethod($where,$field=true,$key=''){
        $result=$this->HouseVillageFloorType->getColumn($where,$field,$key);
        return $result;
    }

    //todo 查询业主属性集合
    public function getHouseVillageUserAttributeSelectMethod($where,$field=true,$key=''){
        $result=$this->HouseVillageUserAttribute->getColumn($where,$field,$key);
        if(!$result) {
            return [];
        }
        $attribute_list = array();
        foreach ($result as $key => $value) {
            $attribute_list[$value['pigcms_id']] = $value['name'];
        }
        return $attribute_list;
    }

    //todo 查询指定楼栋集合
    public function getHouseVillageSingleSelectMethod($where,$field=true,$key=''){
        $result=$this->HouseVillageSingle->getOneColumn($where,$field,$key);
        return $result;
    }
    
    //todo 查询单个楼栋
    public function getHouseVillageSingleFindMethod($where,$field=true){
        $result=$this->HouseVillageSingle->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }

    //todo 查询指定楼层集合
    public function getHouseVillageLayerSelectMethod($where,$field=true,$key=''){
        $result=$this->HouseVillageLayer->getOneColumn($where,$field,$key);
        return $result;
    }
    
    //todo 查询智慧社区业务对外三方配置表
    public function getHouseThirdConfigFindMethod($where,$field=true){
        $result=$this->HouseThirdConfig->getOne($where,$field);
        if(!$result || $result->isEmpty()) {
            return [];
        }
        return $result->toArray();
    }
    
    //todo 查询指定房间
    public function getHouseVillageUserVacancySelectMethod($where,$field=true,$order='pigcms_id DESC',$page=0,$limit=10){
        $list = $this->HouseVillageUserVacancy->getList($where,$field,$order,$limit,$page);
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
        }else{
            $list=[];
        }
        return $list;
    }

    //todo 查询已解绑住户记录
    public function getHouseVillageUserRecordMethod($where,$field=true,$order='id DESC',$page=0,$limit=10){
        $list = $this->HouseVillageUserRecord->getList($where,$field,$page,$limit,$order);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $count = $this->HouseVillageUserRecord->getCount($where);
        }
        return ['list'=>$list,'count'=>$count];
    }


    //todo 查询导入记录
    public function getHouseVillageImportRecordMethod($where,$field=true,$order='a.id DESC',$page=0,$limit=10){
        $list = $this->HouseVillageImportRecord->getList($where,$field,$order,$page,$limit);
        $count=0;
        if($list && !$list->isEmpty()){
            $list=$list->toArray();
            $count = $this->HouseVillageImportRecord->getCount($where);
        }
        return ['list'=>$list,'count'=>$count];
    }
    
    //todo 写入导入记录
    public function addHouseVillageImportRecordMethod($param){
        return  $this->HouseVillageImportRecord->addFind($param);
    }
    
    //todo 批量写入楼栋数据
    public function addAllHouseVillageSingleMethod($param){
        return  $this->HouseVillageSingle->addAll($param);
    }

    //todo 更新楼栋数据
    public function saveAllHouseVillageSingleMethod($id,$param){
        if($param){
            $where=[
                ['id','=',$id],
            ];
            try{
                return  $this->HouseVillageSingle->saveOne($where,$param);
            }catch (\Exception $e){
                return  $e->getMessage();
            }
        }
        return false;
    }

    //todo 批量写入单元数据
    public function addAllHouseVillageFloorMethod($param){
        return  $this->HouseVillageFloor->addAll($param);
    }
    
    //todo 更新单元数据
    public function saveAllHouseVillageFloorMethod($id,$param){
        if($param){
            $where=[
                ['floor_id','=',$id],
            ];
            try{
                return  $this->HouseVillageFloor->saveOne($where,$param);
            }catch (\Exception $e){
                return  $e->getMessage();
            }
        }
        return false;
    }

    //todo 更新楼层数据
    public function saveAllHouseVillageLayerMethod($id,$param){
        if($param){
            $where=[
                ['id','=',$id],
            ];
            try{
                return  $this->HouseVillageLayer->saveOne($where,$param);
            }catch (\Exception $e){
                return  $e->getMessage();
            }
        }
        return false;
    }

    //todo 批量写入楼层数据
    public function addAllHouseVillageLayerMethod($param){
        return  $this->HouseVillageLayer->addAll($param);
    }
    
    
    //todo 校验取值字符串
    public function checkNumberMethod($number){
        // 字符串替换去除数字以外的
        $pattern_number = "/[^0-9]/";
        $str_number = preg_replace($pattern_number, '', $number);
        if($str_number){
            if (strlen($str_number) > 2) {
                // 超过2位 截取后2位
                $str_number = substr($str_number, -2, 2);
            } elseif (strlen($str_number) < 2) {
                // 不足2位 补足2位
                $str_number = str_pad($str_number, 2, "0", STR_PAD_LEFT);
            }
        }
        return $str_number;
    }


    //====================================todo 业务方法 start======================================

    /**
     * 返选项类型参数
     * @author : lkz
     * @date : 2022/12/8
     * @param $village_id
     * @param $vacancy_id
     * @return array
     */
    public function getRoomOptionType($village_id,$vacancy_id){
        $option_list[]=['key'=>9,'icon_type'=>'snippets','tab_name'=>'用户信息','component'=>'userInformation'];
        $option_list[]=['key'=>2,'icon_type'=>'info-circle','tab_name'=>'房间资料','component'=>'roomInformation'];
        $option_list[]=['key'=>3,'icon_type'=>'calculator','tab_name'=>'收费标准','component'=>'chargingStandard'];
        $option_list[]=['key'=>4,'icon_type'=>'dollar','tab_name'=>'关联车辆','component'=>'parkingSpace'];
        $option_list[]=['key'=>5,'icon_type'=>'snippets','tab_name'=>'房产账单','component'=>'propertyBill'];
        $option_list[]=['key'=>6,'icon_type'=>'snippets','tab_name'=>'关联工单','component'=>'associatedWorkOrder'];
//        $option_list[]=['key'=>7,'icon_type'=>'copy','tab_name'=>'在线文件管理','component'=>'onlineFile'];
        if($this->hasPmwlc()){
            $option_list[]=['key'=>8,'icon_type'=>'credit-card','tab_name'=>'关联卡号','component'=>'associatedCardNo'];
        }
//        $option_list[]=['key'=>1,'icon_type'=>'idcard','tab_name'=>'人员资料','component'=>'personnelInformation'];
        $user_type_list=[
            ['key'=>'ownerData','value'=>'业主资料'],
            ['key'=>'ownerFamily','value'=>'家属/租客'],
            ['key'=>'ownerTrajectory','value'=>'轨迹信息'],
            ['key'=>'ownerChat','value'=>'聊天记录'],
            ['key'=>'ownerForm','value'=>'装修申请单'],
            ['key'=>'ownerExpress','value'=>'快递管理'],
        ];
        $room_type_list=[
            ['key'=>0,'value'=>'无'],
            ['key'=>1,'value'=>'住宅'],
            ['key'=>2,'value'=>'商铺'],
            ['key'=>3,'value'=>'办公'],
        ];
        $user_status_list=[
            ['key'=>0,'value'=>'无'],
            ['key'=>1,'value'=>'业主入住'],
            ['key'=>2,'value'=>'未入住'],
            ['key'=>3,'value'=>'租客入住'],
        ];
        $sell_status_list=[
            ['key'=>0,'value'=>'无'],
            ['key'=>1,'value'=>'正常居住'],
            ['key'=>2,'value'=>'出售中'],
            ['key'=>3,'value'=>'出租中'],
        ];
        $data=[
            'user_type_list'=>$user_type_list,
            'option_list'=>$option_list,
            'person_type_list'=>$this->person_type_list,
            'room_type_list'=>$room_type_list,
            'user_status_list'=>$user_status_list,
            'sell_status_list'=>$sell_status_list,
        ];
        return $data;
    }

    /**
     * 获取房间绑定的用户
     * @author : lkz
     * @date : 2022/12/8
     * @param $param
     * @return mixed
     */
    public function getRoomBindUserList($param){
        $where=[
            ['village_id','=',$param['village_id']],
            ['vacancy_id','=',$param['vacancy_id']],
            ['type','in',[1,2,4,5,6]],
            ['status','in',[0,1,2]]
        ];
        $field='pigcms_id,vacancy_id,name,phone,status,add_time,type,relatives_type,adopt_time,authentication_field,id_card';
        $order='pigcms_id desc';
        $list = $this->HouseVillageUserBind->getLimitUserList($where,$param['page'],$field,$order,$param['limit']);
        $count=0;
        if($list && !$list->isEmpty()){
            $status_arr=[
                0=>['color'=>'red','value'=>'禁用'],
                1=>['color'=>'green','value'=>'正常'],
                2=>['color'=>'','value'=>'审核中'],
            ];
            foreach ($list as &$v){
                $sex='未知';
                $birthday='--';
                if($v['authentication_field'] && @unserialize($v['authentication_field'])){
                    $authentication_field=unserialize($v['authentication_field']);
                    if(isset($authentication_field['sex']) && $authentication_field['sex']){
                        $sex=$authentication_field['sex']['value'];
                    }
                    if(isset($authentication_field['birthday']) && $authentication_field['birthday']){
                        $birthday=$authentication_field['birthday']['value'];
                    }
                }
                $v['sex']=$sex;
                $v['birthday']=$birthday;
                if(isset($v['add_time']) && $v['add_time']){
                    $v['add_time']=date('Y-m-d H:i:s',$v['add_time']);
                }
                if(isset($v['adopt_time']) && $v['adopt_time']){
                    $v['adopt_time']=date('Y-m-d H:i:s',$v['adopt_time']);
                }
                $v['user_type']=isset($this->person_type_arr[$v['type']]) ? $this->person_type_arr[$v['type']] : [];
                if($v['type'] == 1){ //针对只有家属才存在和业主映射关系
                    $user_relatives=isset($this->HouseVillageUserService->relatives_type_arr[$v['relatives_type']]) ? $this->HouseVillageUserService->relatives_type_arr[$v['relatives_type']] : '';
                }else{
                    $user_relatives='';
                }
                $v['user_relatives']=$user_relatives;
                $v['user_status']=$status_arr[$v['status']];
                unset($v['authentication_field'],$v['type'],$v['relatives_type'],$v['status']);
            }
            $count = $this->HouseVillageUserBind->getVillageUserNum($where);
        }
        $data['list'] = $list;
        $data['total_limit'] = $param['limit'];
        $data['count'] = $count;
        return $data;
    }

    /**
     * 获取业主信息
     * @author : lkz
     * @date : 2022/12/12
     * @param $village_id
     * @param $vacancy_id
     * @return array
     * @throws \think\Exception
     */
    public function getRoomBindOwnerData($village_id,$vacancy_id){
        $user_id='';
        $user_sex='';
        $user_age='';
        $user_phone='';
        $user_address='';
        $user_name='';
        $user_card='';
        $user_add_time='';
        $user_adopt_time='';
        $user_property_time='';
        $user_avatar=cfg('site_url') . '/static/images/user_avatar.jpg';
        $is_person=true;
        $where=[
            ['village_id','=',$village_id],
            ['vacancy_id','=',$vacancy_id],
            ['type','in',[0,3]],
            ['status', '<>', 4],
        ];
        $field='pigcms_id,uid,name,phone,authentication_field,single_id,floor_id,layer_id,id_card,add_time,adopt_time';
        $owner_bind=$this->getHouseVillageUserBindFindMethod($where,$field,false);
        if(!$owner_bind){ //该房间没有业主
            $where=[
                ['village_id','=',$village_id],
                ['vacancy_id','=',$vacancy_id],
                ['type','in',[1,2]],
                ['status', '<>', 4],
            ];
            $family_bind=$this->getHouseVillageUserBindFindMethod($where,$field,false);
            if(!$family_bind){//该房间下没有家属或租客
                $is_person=false;
            }
        }
        else{
            //读取平台头像
            $user=$this->getUserFindMethod([['uid','=',$owner_bind['uid']]],'avatar',false);
            if($user){
                $user_avatar=replace_file_domain($user['avatar']);
            }
            $user_id=$owner_bind['pigcms_id'];
            if ($owner_bind['authentication_field'] && @unserialize($owner_bind['authentication_field'])) {
                $authentication_field = unserialize($owner_bind['authentication_field']);
                $user_sex = isset($authentication_field['sex'])?$authentication_field['sex']['value']:'';
                if(isset($authentication_field['birthday'])){
                    $birthday=intval(substr($authentication_field['birthday']['value'], 0, 4));
                    $user_age= ($birthday > 0) ? date('Y') - $birthday : 0;
                }
            }
            $user_phone=$owner_bind['phone'];
            $user_address = $this->HouseVillageService->getSingleFloorRoom($owner_bind['single_id'], $owner_bind['floor_id'], $owner_bind['layer_id'], $vacancy_id,$village_id);
            $user_name=$owner_bind['name'];
            $user_card=$owner_bind['id_card'];
            $user_add_time=$owner_bind['add_time'] ? date('Y/m/d H:i:s',$owner_bind['add_time']) : '--';
            $user_adopt_time=$owner_bind['adopt_time'] ? date('Y/m/d H:i:s',$owner_bind['adopt_time']) : '--';
            $userTimes=(new VisitorInviteService())->getUserEndTime($owner_bind['pigcms_id']);
            if (isset($userTimes['propertyStartTime'])) {
                $property_starttime = date('Y/m/d',$userTimes['propertyStartTime']);
            } else {
                $property_starttime = '还未设置';
            }
            if (isset($userTimes['propertyEndTime'])) {
                $property_endtime = date('Y/m/d',$userTimes['propertyEndTime']);
            } else {
                $property_endtime = '还未设置';
            }
            $user_property_time=$property_starttime.'-'.$property_endtime;
        }
        $user_info=[
            'pigcms_id'=>$owner_bind ? $owner_bind['pigcms_id'] : 0,
            'name'=>$owner_bind ? $owner_bind['name'] : '',
            'avatar'=>$user_avatar
        ];
        $user_field_list=[
            ['label'=>'业主ID','value'=>$user_id],
            ['label'=>'性别','value'=>$user_sex],
            ['label'=>'年龄','value'=>$user_age],
            ['label'=>'手机号','value'=>$user_phone],
            ['label'=>'家庭住址','value'=>$user_address],
            ['label'=>'昵称','value'=>$user_name],
            ['label'=>'身份证','value'=>$user_card],
            ['label'=>'修改时间','value'=>$user_add_time],
            ['label'=>'审核通过时间','value'=>$user_adopt_time],
            ['label'=>'物业服务起止时间','value'=>$user_property_time],
        ];
        if(!$is_person){
            $room=$this->getHouseVillageUserVacancyFindMethod([
                ['village_id','=',$village_id],
                ['pigcms_id','=',$vacancy_id],
            ],'single_id,floor_id,layer_id,pigcms_id');
            if($room){
                $user_address = $this->HouseVillageService->getSingleFloorRoom($room['single_id'], $room['floor_id'], $room['layer_id'], $room['pigcms_id'],$village_id);
            }
        }
        $data=[
            'is_person'=>$is_person,
            'add_jump_url'=>cfg('site_url').'/shequ.php?g=House&c=User&a=user_add',
            'user_info'=>$user_info,
            'user_field_list'=>$is_person ? $user_field_list : [],
            'room_address'=>$user_address
        ];
        return $data;
    }

    /**
     * 组装返回用户信息
     * @author : lkz
     * @date : 2022/12/14
     * @param array $user_info
     * @param array $field_list
     * @return array
     */
    public function assembleBindUserData($user_info=[],$field_list=[]){
        $resultArr=[];
        if($user_info){
            $user_bind=$user_info;
            $authentication_field=[];
            if($user_bind['authentication_field'] && @unserialize($user_bind['authentication_field'])){
                $authentication_field=unserialize($user_bind['authentication_field']);
            }
            unset($user_bind['authentication_field'],$user_bind['uid']);
            $resultArr=array_merge($user_bind,$authentication_field);
        }
        if($field_list && $resultArr){
            foreach ($field_list as &$v1){
                $value='';
                if(isset($resultArr[$v1['key']])){
                    if(isset($resultArr[$v1['key']]['value'])){
                        $value=$resultArr[$v1['key']]['value'];
                    }elseif(!is_array($resultArr[$v1['key']]) && !empty($resultArr[$v1['key']])){
                        $value=$resultArr[$v1['key']];
                    }elseif(is_array($resultArr[$v1['key']]) && is_array($resultArr[$v1['key']]['value']) && isset($resultArr[$v1['key']]['value']['value'])){
                        $value=$resultArr[$v1['key']]['value']['value'] ? $resultArr[$v1['key']]['value']['value']:'';
                    }
                }
                $v1['value']=$value;
            }
        }
        return $field_list;
    }

    //获取绑定用户信息
    public function getBindUserData($village_id,$vacancy_id,$pigcms_id=0){
        if(!$pigcms_id){
            return [];
        }
        $where=[
            ['village_id','=',$village_id],
            ['vacancy_id','=',$vacancy_id],
            ['pigcms_id','=',$pigcms_id],
            ['status','in',[0,1,2]],
        ];
        $field='pigcms_id,uid,bind_number,name,phone,id_card,ic_card,nmv_card,memo,authentication_field';
        $result=$this->getHouseVillageUserBindFindMethod($where,$field);
        return $result;
    }

    //组装关联党员信息
    public function assembleBindStreetPartyData($street_id,$user_info=[]){
        $data=[
            'political_affiliation'=>0,//政治面貌
            'political_party_id'=>0,//党员关联党组织id
            'street_party_branch'=>[],//街道党支部
            'special_groups'=>[],//特殊人群
            'focus_groups'=>[],//重点人群
            'care_groups'=>[],//关怀群体
        ];
        if(!$user_info){
            return $data;
        }
        $where=[
            ['bind_id','=',$user_info['pigcms_id']],
        ];
        //小区居住人员关联标签
        $user_bind_label=$this->getHouseVillageUserLabelFindMethod($where);
        if($user_bind_label){
            if ($user_bind_label['user_special_groups']) {
                $user_bind_label['user_special_groups'] = explode(',',$user_bind_label['user_special_groups']);
            }
            if ($user_bind_label['user_focus_groups']) {
                $user_bind_label['user_focus_groups'] = explode(',',$user_bind_label['user_focus_groups']);
            }
            if ($user_bind_label['user_vulnerable_groups']) {
                $user_bind_label['user_vulnerable_groups'] = explode(',',$user_bind_label['user_vulnerable_groups']);
            }
            $data['political_affiliation']=$user_bind_label['user_political_affiliation'];
            $data['special_groups']=$user_bind_label['user_special_groups'];
            $data['focus_groups']=$user_bind_label['user_focus_groups'];
            $data['care_groups']=$user_bind_label['user_vulnerable_groups'];
        }
        $where=[
            ['street_id','=',$street_id],
            ['status', 'not in', [-1]]
        ];
        $data['street_party_branch']=$this->getAreaStreetPartyBranchMethod($where,'id,name','sort desc,id desc');
        $where=[
            ['uid','=',$user_info['uid']],
            ['party_status','in',[1,4,5]],
        ];
        $field='party_id,party_status';
        //用户uid查询关联对应社区
        $party_bind_user =$this->getStreetPartyBindUserFindMethod($where,$field);
        if($party_bind_user){
            $data['political_party_id']=$party_bind_user['party_id'] ? $party_bind_user['party_id'] : 0;
        }
        return $data;
    }

    /**
     * 获取用户数据
     * @author : lkz
     * @date : 2022/12/14
     * @param $param
     * @return array
     */
    public function getRoomBindUserData($param){
        $village_info=$this->getHouseVillageFindMethod($param['village_id'],'set_id_code');
        $user_field=$this->getRoomUserFieldDataMethod();//业主基本字段
        $config_field=$this->getHouseVillageDataConfigMethod($param['property_id'],$village_info);//自定义字段
        if (! empty($config_field) && is_array($config_field)) {
            $field_list = array_merge($user_field,$config_field);//合并字段
        } else {
            $field_list = $user_field;
        }
        $user_info=$this->getBindUserData($param['village_id'],$param['vacancy_id'],$param['pigcms_id']);//获取绑定用户信息
        $data=[
            'field_list'=>$this->assembleBindUserData($user_info,$field_list),//组装返回基本信息
            'mark_list'=>$this->getUserMarkMethod($param['street_id'],$param['village_id'],$user_info), //信息标注
            'label_list'=>$this->getUserLabelMethod($param['village_id'],$param['pigcms_id'],'userLabel'),//用户标签
        ];
        return $data;
    }

    //todo 同步修改用户信息标注
    public function sysSaveStreetPartyBindUser($param){
        $user_label = array();
        if ($param['user_political_affiliation']) {
            $user_label['user_political_affiliation'] = $param['user_political_affiliation'];
        }
        if ($param['user_special_groups']) {
            $user_label['user_special_groups'] = implode(',', $param['user_special_groups']);
        }
        else{
            $user_label['user_special_groups']='';
        }
        if ($param['user_focus_groups']) {
            $user_label['user_focus_groups'] = implode(',', $param['user_focus_groups']);
        }
        else{
            $user_label['user_focus_groups']='';
        }
        if ($param['user_vulnerable_groups']) {
            $user_label['user_vulnerable_groups'] = implode(',', $param['user_vulnerable_groups']);
        }
        else{
            $user_label['user_vulnerable_groups']='';
        }
        if($param['pigcms_id']){
            $user_label_info=$this->getHouseVillageUserLabelFindMethod([
                ['bind_id','=',$param['pigcms_id']],
            ],'id');
            if ($user_label_info) {
                $user_label['last_time'] = $this->time;
                $this->HouseVillageUserLabel->edit(['id'=>$user_label_info['id']],$user_label);
            }  else {
                $user_label['bind_id'] = $param['pigcms_id'];
                $user_label['add_time'] = $this->time;
                $this->HouseVillageUserLabel->addOne($user_label);
            }
        }
        if($param['user_party_id'] && $param['uid']){
            $party_bind_user=$this->getStreetPartyBindUserFindMethod([
                ['uid','=',$param['uid']],
            ],'id,party_id');
            if(!$party_bind_user) {
                $party_data = [
                    'uid'=>$param['uid'],
                    'party_id'=>$param['user_party_id'],
                    'create_time'=>$this->time
                ];
                $this->StreetPartyBindUser->addFind($party_data);
            }else{
                if ($party_bind_user['party_id'] != $param['user_party_id']) {
                    $this->StreetPartyBindUser->edit([
                        'id'=>$party_bind_user['id'],
                    ],[
                        'party_id' => $param['user_party_id']
                    ]);
                }
            }
        }
        return true;
    }

    //todo 同步修改用户自定义标签
    public function sysSaveHouseVillageUserLabelBind($pigcms_id,$param=[]){
        $user_label=$this->getHouseVillageUserLabelBindColumnMethod($pigcms_id,'village_label_id');
        $user_label_used_id=[];//已记录的标签id
        $user_label_del_id=[];//要删除的标签id
        $user_label_retain_id=[];//要保留的标签id
        $user_label_arr=[];
        if($user_label){
            $user_label_used_id=$user_label;
        }
        if($param && is_array($param)){
            $user_label_new_id=array_values($param);
        }else{
            $user_label_new_id=[];
        }
        if(!$user_label_new_id && $user_label){
            $this->HouseVillageUserLabelBind->delOne(['bind_id'=>$pigcms_id]);
            return true;
        }
        foreach ($user_label_used_id as $v){
            if(!in_array($v,$user_label_new_id)){
                $user_label_del_id[]=$v;
            }else{
                $user_label_retain_id[]=$v;
            }
        }
        if($user_label_del_id){//删除无用标签
            $this->HouseVillageUserLabelBind->delOne([
                ['bind_id','=',$pigcms_id],
                ['village_label_id', 'in', $user_label_del_id]
            ]);
        }
        foreach ($user_label_new_id as $v){
            if(!in_array($v,$user_label_retain_id)){
                $user_label_arr[]=[
                    'village_label_id'=>$v,
                    'bind_id'=>$pigcms_id,
                    'is_delete'=>0,
                    'create_at'=>$this->time,
                    'update_at'=>$this->time
                ];
            }
        }
        if($user_label_arr){
            $this->HouseVillageUserLabelBind->addUserLabelBind($user_label_arr);
        }
        return true;
    }

    //todo [针对业主或家属添加/编辑] 校验手机号不能与当前房屋中待审核和审核通过的手机号一样
    public function checkHousePhoneLegal($vacancy_id,$pigcms_id,$phone){
        $where=[
            ['vacancy_id','=',$vacancy_id],
            ['pigcms_id','<>',$pigcms_id],
            ['phone','=',$phone],
            ['type','in',[0,1,2,3]],
            ['status','in',[1,2]],
        ];
        $field='pigcms_id,uid';
        $result=$this->getHouseVillageUserBindFindMethod($where,$field,false);
        if($result){
            throw new \think\Exception('该手机号已绑定或已申请绑定此房间');
        }
        return true;
    }

    //todo [针对业主或家属添加/编辑] 校验姓名不能与当前房屋中待审核和审核通过的姓名一样
    public function checkHouseUserNameLegal($vacancy_id,$pigcms_id,$name='',$phone=''){
        if(!$name || !$phone){
            return true;
        }
        $where=[
            ['vacancy_id','=',$vacancy_id],
            ['pigcms_id','<>',$pigcms_id],
            ['name','=',$name],
            ['phone','=',$phone],
            ['type','in',[0,1,2,3]],
            ['status','in',[1,2]],
        ];
        $field='pigcms_id,uid';
        $result=$this->getHouseVillageUserBindFindMethod($where,$field,false);
        if($result){
            throw new \think\Exception('【'.$name.'】已绑定或已申请绑定此房间');
        }
        return true;
    }

    //todo [针对业主或家属添加/编辑] 校验当前ic卡是否已经被其他人使用 状态处于正常的
    public function checkUserIcCardLegal($village_id,$pigcms_id,$ic_card=''){
        if(!$ic_card){
            return true;
        }
        $where=[
            ['ic_card','=',trim($ic_card)],
            ['status','=',1],
            ['pigcms_id','<>',$pigcms_id],
        ];
        $field='pigcms_id,village_id,name';
        $repeat=$this->getHouseVillageUserBindFindMethod($where,$field,false);
        if($repeat){
            if ($repeat['village_id'] == $village_id) {
                // 同一个小区提示具体重复人员
                throw new \think\Exception('当前用户【'.$repeat['name'].'】已经使用了该卡号');
            }else{
                $village_info=$this->getHouseVillageFindMethod($repeat['village_id'],'village_name');
                if($village_info){
                    throw new \think\Exception('当前【'.$repeat['name'].'】小区用户已经使用了该卡号');
                }
            }
        }
        return true;
    }

    //todo [针对业主或家属添加/编辑] 校验非机动车卡号
    public function checkUserNmvCardLegal($village_id,$pigcms_id,$nmv_card=''){
        if(!$nmv_card){
            return true;
        }
        $where=[
            ['nmv_card','=',trim($nmv_card)],
            ['status','=',1],
            ['pigcms_id','<>',$pigcms_id],
        ];
        $field='pigcms_id,village_id,name';
        $repeat=$this->getHouseVillageUserBindFindMethod($where,$field,false);
        if($repeat){
            if ($repeat['village_id'] == $village_id) {
                // 同一个小区提示具体重复人员
                throw new \think\Exception('当前用户【'.$repeat['name'].'】已经使用了该非机动车卡号');
            }else{
                $village_info=$this->getHouseVillageFindMethod($repeat['village_id'],'village_name');
                if($village_info){
                    throw new \think\Exception('当前【'.$repeat['name'].'】小区用户已经使用了该非机动车卡号');
                }
            }
        }
        return true;
    }

    //todo 校验更新房屋数据
    public function checkUpdateHouse($update_where,$update_data){
        $data_vacancy['status'] = 3;
        $data_vacancy['uid'] = isset($update_data['uid']) ? $update_data['uid'] : 0;
        $data_vacancy['name'] = $update_data['name'];
        $data_vacancy['phone'] = $update_data['phone'];
        $data_vacancy['memo'] = $update_data['memo'];
        $data_vacancy['type'] = 0;
        return $this->HouseVillageUserVacancy->saveOne($update_where,$data_vacancy);
    }

    /**
     * 提交编辑信息标注
     * @author : lkz
     * @date : 2022/12/14
     * @param $param
     * @return bool
     * @throws \think\Exception
     */
    public function subStreetPartyBindUser($param){
        $where=[
            ['village_id','=',$param['village_id']],
            ['pigcms_id','=',$param['pigcms_id']],
            ['status','in',[0,1,2]],
        ];
        $field='pigcms_id,uid';
        $user_info=$this->getHouseVillageUserBindFindMethod($where,$field);
        $data=[
            'user_political_affiliation'=>$param['user_political_affiliation']? $param['user_political_affiliation'] : 0,
            'user_party_id'=>$param['user_party_id']? $param['user_party_id'] : 0,
            'user_special_groups'=>$param['user_special_groups'] ? $param['user_special_groups'] : [],
            'user_focus_groups'=>$param['user_focus_groups'] ? $param['user_focus_groups'] : [],
            'user_vulnerable_groups'=>$param['user_vulnerable_groups'] ? $param['user_vulnerable_groups'] : [],
            'pigcms_id'=>$user_info['pigcms_id'],
            'uid'=>$user_info['uid']
        ];
        return $this->sysSaveStreetPartyBindUser($data);
    }

    /**
     * 提交编辑用户标签
     * @author : lkz
     * @date : 2022/12/14
     * @param $param
     * @return bool
     * @throws \think\Exception
     */
    public function subBindUserLabel($param){
        $where=[
            ['village_id','=',$param['village_id']],
            ['pigcms_id','=',$param['pigcms_id']],
            ['status','in',[0,1,2]],
        ];
        $field='pigcms_id,uid';
        $user_info=$this->getHouseVillageUserBindFindMethod($where,$field);
        return $this->sysSaveHouseVillageUserLabelBind($user_info['pigcms_id'],$param['user_label_groups']);
    }

    /**
     * 提交用户数据
     * @author : lkz
     * @date : 2022/12/15
     * @param $param
     * @return bool
     * @throws \think\Exception
     */
    public function subRoomBindUserData($param){
        $update_data=[];
        $update_field=[];
        $where=[
            ['village_id','=',$param['village_id']],
            ['pigcms_id','=',$param['pigcms_id']],
            ['status','in',[0,1,2]],
        ];
        $field='pigcms_id,uid,type,bind_number,name,phone,vacancy_id,id_card,ic_card,nmv_card,memo,authentication_field';
        $user_bind=$this->getHouseVillageUserBindFindMethod($where,$field);
        $authentication_field=[];
        if($user_bind['authentication_field'] && @unserialize($user_bind['authentication_field'])){
            $authentication_field=unserialize($user_bind['authentication_field']);
        }
        unset($user_bind['authentication_field']);
        if($param['basic_data']){
            foreach ($param['basic_data'] as $k1=>$v1){
                if($v1['is_must']){
                    if(!$v1['value']){
                        throw new \think\Exception('【'.$v1['title'].'】必填项，请完善数据');
                    }
                }
                if($v1['source']  == 1){ //user_bind 指定字段
                    if(in_array($v1['key'],['name','phone','id_card','ic_card','nmv_card','memo'])){
                        if($v1['key'] == 'id_card'){
                            if(is_idcard($v1['value']) == false){
                                //throw new \think\Exception('请填写正确的身份证号码');
                            }
                        }
                        $update_data[$v1['key']]=$v1['value'];
                    }
                }
                elseif ($v1['source'] == 2){ //authentication_field 字段集合
                    if($authentication_field){
                        foreach ($authentication_field as $k2=>$v2){
                            if($k2 == $v1['key'] && isset($v2['key']) && $v2['key'] ==  $v1['key']){
                                if($v1['value'] != $v2['value']){
                                    $authentication_field[$k2]['value']=$v1['value'];
                                    $update_field[]=$v1;
                                }
                            }
                        }
                    }
                }
            }
        }
        if($update_field && $authentication_field){
            $update_data['authentication_field']=serialize($authentication_field);
        }
        if(!$update_data){
            throw new \think\Exception('暂无数据保存');
        }
        if($update_data['phone']){
           $user= $this->getUserFindMethod([
                ['phone','=',$update_data['phone']]
            ],'uid',false);
           if($user){
               $update_data['uid']=$user['uid'];
           }
        }
        //查询房间状态
        $vacancy_info=$this->getHouseVillageUserVacancyMethod($param['village_id'],$user_bind['vacancy_id'],'pigcms_id,usernum');
        //校验手机号
        $this->checkHousePhoneLegal($user_bind['vacancy_id'],$user_bind['pigcms_id'],$update_data['phone']);
        //校验姓名唯一性
        $this->checkHouseUserNameLegal($user_bind['vacancy_id'],$user_bind['pigcms_id'],$update_data['name'],$update_data['phone']);
        //校验ic卡唯一性
        $this->checkUserIcCardLegal($param['village_id'],$user_bind['pigcms_id'],$user_bind['ic_card']);
        //校验非机动车卡号唯一性
        $this->checkUserNmvCardLegal($param['village_id'],$user_bind['pigcms_id'],$user_bind['nmv_card']);

        $update_vacancy = true;
        if($user_bind['uid'] == 0 && empty($user_bind['phone'])){ // 虚拟业主
            if(!$update_data['phone']){ //没有修改手机号，不更新房屋状态；修改则更新
                $update_vacancy = false;
            }
        }
        $update_data['add_time']=$this->time;
        $result=$this->HouseVillageUserBind->saveOne([
            ['pigcms_id','=',$user_bind['pigcms_id']]
        ],$update_data);
        if($result){
            if($update_vacancy){
                $update_where=[
                    ['village_id','=',$param['village_id']],
                    ['usernum','=',$vacancy_info['usernum']]
                ];
                $this->checkUpdateHouse($update_where,$update_data);
            }
            (new HouseUserTrajectoryLogService())->addLog(4,$param['village_id'],0,$user_bind['uid'],$user_bind['pigcms_id'],2,'更新了人员数据','后台更新了人员数据');
            if(isset($update_data['authentication_field'])){
                $authentication_field=$update_data['authentication_field'];
            }else{
                if($authentication_field){
                    $authentication_field=serialize($authentication_field);
                }
            }
            if($authentication_field){
                (new TaskReleaseService())->userAttributeRecord($user_bind['pigcms_id'],$authentication_field);
            }
        }
        return true;
    }

    /**
     * 获取A185室内机参数
     * @author : lkz
     * @date : 2022/12/9
     * @param $village_id
     * @param $vacancy_id
     * @param bool $is_id
     * @return array
     */
    public function getFaceA185IndoorParam($village_id,$vacancy_id,$is_id=true){
        $data=[
            'indoor_device_sn'=>'',
            'indoor_status'=>1
        ];
        $a185_device=$this->HouseFaceDevice->getOne([
            ['village_id','=',$village_id],
            ['device_type','=',61],
            ['is_del','=',0],
        ],'device_id');
        if(!$a185_device){
            return ['status'=>false,'data'=>$data];
        }
        $a185_indoor=$this->FaceA185Indoor->getOne([
            ['village_id','=',$village_id],
            ['device_type','=',2],
            ['room_id','=',$vacancy_id],
        ],'id,device_sn as indoor_device_sn,status as indoor_status');
        if($a185_indoor && !$a185_indoor->isEmpty()){
            $data=$a185_indoor->toArray();
            if($is_id){
                unset($data['id']);
            }
        }
        return ['status'=>true,'data'=>$data];
    }

    /**
     * 获取水电燃定制参数
     * @author : lkz
     * @date : 2022/12/9
     * @param $village_id
     * @param $vacancy_id
     * @param bool $is_id
     * @return array
     */
    public function getWaterElectricGasParam($village_id,$vacancy_id,$is_id=true){
        $data=[
            'water_number'=>'',
            'heat_water_number'=>'',
            'ele_number'=>'',
            'gas_number'=>'',
        ];
        if(!cfg('customized_meter_reading')){
            return ['status'=>false,'data'=>$data];
        }
        $vacancy_num=$this->HouseVillageVacancyNum->getFind([
            ['village_id','=',$village_id],
            ['vacancy_id','=',$vacancy_id],
        ],'id,water_number,heat_water_number,ele_number,gas_number');
        if($vacancy_num && !$vacancy_num->isEmpty()){
            $data=$vacancy_num->toArray();
            if($is_id){
                unset($data['id']);
            }
        }
        return ['status'=>true,'data'=>$data];
    }

    /**
     * 获取房间资料
     * @author : lkz
     * @date : 2022/12/9
     * @param $village_id
     * @param $vacancy_id
     * @return mixed
     * @throws \think\Exception
     */
    public function getRoomDetails($village_id,$vacancy_id){
        $field='pigcms_id,single_id,floor_id,layer_id,property_number,room,usernum,house_type,user_status,sell_status,housesize,sort,status,contract_time_start,contract_time_end,room_alias_id';
        $vacancy_info=$this->getHouseVillageUserVacancyMethod($village_id,$vacancy_id,$field);
        $address = $this->HouseVillageService->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $vacancy_info['pigcms_id'],$village_id,1);
        
        //todo 合同时间，是房间的合同时间必须在小区设置的合同时间范围内
        $villageInfo =  $this->HouseVillageService->getHouseVillageInfoExtend(['village_id'=>$village_id],'contract_time_end,contract_time_start');
        if (!empty($villageInfo)){
            $village_contract_time_start = ($villageInfo['contract_time_start'] > 1)  ? date('Y-m-d',$villageInfo['contract_time_start']) : '';
            $village_contract_time_end   = ($villageInfo['contract_time_end'] > 1)    ? date('Y-m-d',$villageInfo['contract_time_end'])   : '';
        }else{
            $village_contract_time_start = '';
            $village_contract_time_end   = '';
        }
        //房间信息
        $data['room_info']=[
            'vacancy_id'=>$vacancy_info['pigcms_id'],
            'property_number'=>$vacancy_info['property_number'],
            'address'=>$address['single_name'].'/'.$address['floor_name'].'/'.$address['layer'],
            'room'=>$vacancy_info['room'],
            'usernum'=>$vacancy_info['usernum'],
            'contract_time_start'=>$vacancy_info['contract_time_start']>31420800 ? date('Y-m-d',$vacancy_info['contract_time_start']):'',
            'contract_time_end'=>$vacancy_info['contract_time_end']>31420800 ? date('Y-m-d',$vacancy_info['contract_time_end']):'',
            'village_contract_time_start'=>$village_contract_time_start,
            'village_contract_time_end'=>$village_contract_time_end,
            'house_type'=>$vacancy_info['house_type'],
            'user_status'=>$vacancy_info['user_status'],
            'sell_status'=>$vacancy_info['sell_status'],
            'housesize'=>$vacancy_info['housesize'],
            'sort'=>$vacancy_info['sort'],
            'status'=>$vacancy_info['status'] >= 1 ? 1 : 0,
            'room_alias_id'=>$vacancy_info['room_alias_id'] ? $vacancy_info['room_alias_id']:'',
        ];

        
        //A185室内机管理
        $data['a185_indoor_module']=$this->getFaceA185IndoorParam($village_id,$vacancy_id);
        //水电燃仪表设备定制 设备管理
        $data['water_electric_gas_module']=$this->getWaterElectricGasParam($village_id,$vacancy_id);
        return $data;
    }

    /**
     * 编辑提交房间属性
     * @author : lkz
     * @date : 2022/12/10
     * @param $param
     * @return bool
     * @throws \think\Exception
     */
    public function editRoomParam($param){
        $field='pigcms_id,single_id,floor_id,layer_id,property_number,room,usernum,house_type,user_status,sell_status,housesize,sort,status,contract_time_start,contract_time_end';
        $vacancy_info=$this->getHouseVillageUserVacancyMethod($param['village_id'],$param['vacancy_id'],$field);
        $room_data=[
            'usernum'=>$param['usernum'],
            'contract_time_start'=>$param['contract_time_start'],
            'contract_time_end'=>$param['contract_time_end'],
            'house_type'=>$param['house_type'],
            'user_status'=>$param['user_status'],
            'sell_status'=>$param['sell_status'],
            'housesize'=>$param['housesize'],
            'sort'=>$param['sort'],
            'status'=>$param['status'],
        ];
        if(isset($param['room']) && !empty($param['room'])){
            $room_data['room']=$param['room'];
        }
        if(isset($param['room_alias_id'])){
            $room_data['room_alias_id']=$param['room_alias_id'];
        }
        $is_indoor= $this->getFaceA185IndoorParam($param['village_id'],$param['vacancy_id'],false);
        if($is_indoor['status'] && isset($param['indoor_device_sn'])){
            $a185_data=[
                'village_id'=>$param['village_id'],
                'device_sn'=>$param['indoor_device_sn'],
                'status'=>$param['indoor_status'],
                'room_id'=>$vacancy_info['pigcms_id']
            ];
            $result=$this->addA185IndoorRoomMethod($is_indoor['data'],$a185_data);
            if(!$result['error']){
                throw new \think\Exception($result['msg']);
            }
        }
        $is_water_electric_gas= $this->getWaterElectricGasParam($param['village_id'],$param['vacancy_id'],false);
        if($is_water_electric_gas['status']){
            $vacancy_num_data=[
                'water_number'=>$param['water_number'],
                'heat_water_number'=>$param['heat_water_number'],
                'ele_number'=>$param['ele_number'],
                'gas_number'=>$param['gas_number'],
            ];
            $result=$this->checkWaterElectricGasParamMethod($param['village_id'],$param['vacancy_id'],$vacancy_num_data);
            if(!$result['error']){
                throw new \think\Exception($result['msg']);
            }
        }
        $this->HouseVillageUserVacancy->saveOne(['pigcms_id'=>$vacancy_info['pigcms_id']],$room_data);
        if (isset($room_data['housesize'])) {
            $update_data = [
                'housesize' => $param['housesize']
            ];
            $this->HouseVillageUserBind->saveOne([
                ['vacancy_id','=',$vacancy_info['pigcms_id']]
            ],$update_data);
            // 修改了房屋面积，且在绑定表格中存在对应的数据，同步更改其中的房屋面积 (更改对象包括房主，家属，租客及更新房主)
            $standard_bindArr=array('b.vacancy_id'=>$vacancy_info['pigcms_id'],'b.village_id'=>$param['village_id']);
            $standard_bindArr['b.floor_id']=$vacancy_info['floor_id'];
            $standard_bindArr['b.layer_id']=$vacancy_info['layer_id'];
            $standard_bindArr['b.is_del']=1;
            $standard_bindArr['b.bind_type']=1;
            $standard_bindArr['r.fees_type']=2;
            $standard_bindArr['_string']='r.unit_gage="" OR r.unit_gage IS NULL';
            $standard_bind=$this->HouseNewChargeStandardBind->getLists2($standard_bindArr,'b.id,b.custom_value');
            if(!empty($standard_bind)){
                foreach ($standard_bind as $vv){
                    $saveArr=array('custom_value'=>$param['housesize']);
                    $this->HouseNewChargeStandardBind->saveOne(array('id'=>$vv['id']),$saveArr);
                }
            }
        }
        return true;
    }

    /**
     * 获取房间对应的收费标准
     * @author : lkz
     * @date : 2022/12/10
     * @param $param
     * @return mixed
     */
    public function getRoomBindChargeRuleList($param){
        $where=[
            ['b.is_del','=',1],
            ['b.vacancy_id','=',$param['vacancy_id']],
            ['b.village_id','=',$param['village_id']],
            ['r.status','=',1]
        ];
        $field = 'b.id as bind_id,n.charge_number_name as subject_name,p.name as project_name,r.charge_name,r.charge_valid_type,r.charge_valid_time,r.fees_type,r.bill_create_set,r.bill_arrears_set,r.bill_type,r.is_prepaid,r.not_house_rate,n.charge_type';
        $order='b.id DESC';
        $result=$this->getHouseNewChargeRuleMethod($where,$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            foreach ($result['list'] as &$v){
                switch ($v['charge_valid_type']){
                    case 1:
                        $charge_valid_time=date('Y-m-d', $v['charge_valid_time']);
                        break;
                    case 2:
                        $charge_valid_time=date('Y-m', $v['charge_valid_time']);
                        break;
                    case 3:
                        $charge_valid_time=date('Y', $v['charge_valid_time']);
                        break;
                    default:
                        $charge_valid_time='--';
                }
                $v['charge_valid_time']=$charge_valid_time;
                if(in_array($v['charge_type'],['water','gas','electric'])){
                    $v['not_house_rate'] = '-';
                    $v['fees_type'] = '-';
                    $v['bill_create_set'] = '-';
                    $v['bill_arrears_set'] = '-';
                    $v['bill_type'] = '-';
                }else{
                    if(isset($v['not_house_rate'])){
                        $v['not_house_rate'] = empty($v['not_house_rate']) ? '-' : ($v['not_house_rate'].'%');
                    }
                    if(isset($v['fees_type'])){
                        $v['fees_type'] = empty($v['fees_type']) ? '-' : (($v['fees_type'] == 1) ? '固定费用' : '单价计量单位');
                    }
                    if(isset($v['bill_create_set'])){
                        $v['bill_create_set'] = empty($v['bill_create_set']) ? '-' : (($v['bill_create_set'] == 1) ? '按日生成' : (($v['bill_create_set'] == 2) ? '按月生成' : '按年生成'));
                    }
                    if(isset($v['bill_arrears_set'])){
                        $v['bill_arrears_set'] = empty($v['bill_arrears_set']) ? '-' : (($v['bill_arrears_set'] == 1) ? '预生成' : '后生成');
                    }
                    if(isset($v['bill_type'])){
                        $v['bill_type'] = empty($v['bill_type']) ? '-' : (($v['bill_type'] == 1) ? '手动' : '自动');
                    }
                }
                if(isset($v['is_prepaid'])){
                    $v['is_prepaid'] = empty($v['is_prepaid']) ? '-' : (($v['is_prepaid'] == 1) ? '支持' : '不支持');
                }
                unset($v['charge_valid_type'],$v['charge_type']);
            }
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }

    /**
     * 获取房间绑定的车辆
     * @author : lkz
     * @date : 2022/12/12
     * @param $param
     * @return mixed
     */
    public function getRoomBindVehicleList($param){
        $HouseNewParkingService=new HouseNewParkingService();
        $D6Service=new D6Service();
        $userPigcmsIdArr=$this->getRoomUserIdArrMethod($param['village_id'],$param['vacancy_id']);
        if(!$userPigcmsIdArr){
            $data['list'] = [];
            $data['total_limit'] = $param['limit'];
            $data['count'] = 0;
            return $data;
        }
        $where=[
            ['a.village_id','=',$param['village_id']],
            ['a.user_id','in', $userPigcmsIdArr]
        ];
        $field = 'a.id as bind_id,a.relationship,c.province,c.car_number,p.position_num,g.garage_num,ub.name,ub.phone,c.end_time,c.examine_status,c.examine_response';
        $order='a.id DESC';
        $result=$this->getHouseVillageBindCarMethod($where,$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            $relationship=$HouseNewParkingService->relationship;
            $examine_status=[0=>'待审核',1=>'审核通过',2=>'审核拒绝'];
            foreach ($result['list'] as &$v){
                $v['end_time']=$v['end_time'] ? date('Y-m-d',$v['end_time']) : '--';
                $v['relationship']=isset($relationship[$v['relationship']]) ? $relationship[$v['relationship']] :'--';
                $v['car_number']=$D6Service->checkCarNumber($v['province'],$v['car_number']);
                $v['examine_status']=isset($examine_status[$v['examine_status']]) ? $examine_status[$v['examine_status']] :'';
                $v['examine_response']=(string)$v['examine_response'];
                unset($v['province']);
            }
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }

    /**
     * 获取房间待缴账单
     * @author : lkz
     * @date : 2022/12/12
     * @param $param
     * @return array
     */
    public function getRoomUnpaidBillList($param){
        $where=[
            ['o.is_paid','=',2],
            ['o.is_discard','=',1],
            ['o.village_id','=',$param['village_id']],
            ['o.room_id','=',$param['vacancy_id']],
        ];
        $field='o.order_id,r.charge_name,p.name as project_name,n.charge_number_name as subject_name,o.total_money,o.service_start_time,o.service_end_time,o.add_time,o.last_ammeter,o.now_ammeter,o.check_status,n.charge_type';
        $order='o.order_id DESC';
        $result=$this->getHouseNewPayOrderMethod($where,'',$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            $check_status=[
                1=>'作废审核中',
                2=>'退款审核中',
                3=>'审核通过',
                4=>'审核未通过',
            ];
            foreach ($result['list'] as &$v){
                $last_ammeter='--';
                $now_ammeter='--';
                $service_start_time='--';
                $service_end_time='--';
                if(!in_array($v['charge_type'],['water','electric','gas','park'])){
                    if(intval($v['service_start_time']) > 1 && intval($v['service_end_time']) > 1){
                        $service_start_time=date('Y/m/d', $v['service_start_time']);
                        $service_end_time=date('Y/m/d', $v['service_end_time']);
                    }
                }
                if(in_array($v['charge_type'],['water','electric','gas'])){
                    $last_ammeter=$v['last_ammeter'];
                    $now_ammeter=$v['now_ammeter'];
                }
                $v['last_ammeter']=$last_ammeter;
                $v['now_ammeter']=$now_ammeter;
                $v['add_time']=date('Y-m-d H:i:s',$v['add_time']);
                $v['service_start_time']=$service_start_time;
                $v['service_end_time']=$service_end_time;
                $v['check_status']=isset($check_status[$v['check_status']]) ? $check_status[$v['check_status']] : '';
                unset($v['charge_type']);
            }
        }
        return $result;
    }

    /**
     * 获取房间已缴账单
     * @author : lkz
     * @date : 2022/12/13
     * @param $param
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getRoomPaidBillList($param){
        $where=[
            ['o.is_paid','=',1],
            ['o.is_discard','=',1],
            ['o.village_id','=',$param['village_id']],
            ['o.room_id','=',$param['vacancy_id']],
//            ['o.order_type','<>','non_motor_vehicle'],
        ];
        $whereRaw='`o`.`refund_money`<`o`.`modify_money`';
        $field='o.order_id,r.charge_name,p.name as project_name,n.charge_number_name as subject_name,o.pay_money,o.pay_time,o.service_start_time,o.service_end_time,o.add_time,o.last_ammeter,o.now_ammeter,o.check_status,n.charge_type,o.summary_id,o.is_refund,o.refund_money,o.village_balance';
        $order='o.order_id DESC';
        $result=$this->getHouseNewPayOrderMethod($where,$whereRaw,$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            $check_status=[
                1=>'作废审核中',
                2=>'退款审核中',
                3=>'审核通过',
                4=>'审核未通过',
            ];
            $offline_pay=$this->getHouseNewOfflinePayFindMethod($param['property_id'],'id,name');
            foreach ($result['list'] as &$v){
                $last_ammeter='--';
                $now_ammeter='--';
                $service_start_time='--';
                $service_end_time='--';
                if(!in_array($v['charge_type'],['water','electric','gas','park'])){
                    if(intval($v['service_start_time']) > 1 && intval($v['service_end_time']) > 1){
                        $service_start_time=date('Y/m/d', $v['service_start_time']);
                        $service_end_time=date('Y/m/d', $v['service_end_time']);
                    }
                }
                if(in_array($v['charge_type'],['water','electric','gas'])){
                    $last_ammeter=$v['last_ammeter'];
                    $now_ammeter=$v['now_ammeter'];
                }
                $v['pay_type']=$this->getOrderPayTypeMethod($v['summary_id'],$offline_pay,$v['village_balance']);
                $is_invoicing=$this->getHouseVillageDetailRecordFindMethod($v['order_id'],'id');
                if ($is_invoicing) {
                    $v['invoicing_status'] = '已开票';
                } else {
                    $v['invoicing_status'] = '未开票';
                }
                if ($v['is_refund'] == 1) {
                    $v['order_status'] = '正常';
                } else {
                    $refund_money_tmp=round($v['refund_money'],2);
                    $pay_money_tmp=round($v['pay_money'],2);
                    if ($refund_money_tmp == $pay_money_tmp) {
                        $v['order_status'] = '已退款';
                    } else {
                        $v['order_status'] = '部分退款';
                    }
                }
                $v['last_ammeter']=$last_ammeter;
                $v['now_ammeter']=$now_ammeter;
                $v['add_time']=date('Y-m-d H:i:s',$v['add_time']);
                $v['pay_time']=date('Y-m-d H:i:s',$v['pay_time']);
                $v['service_start_time']=$service_start_time;
                $v['service_end_time']=$service_end_time;
                $v['check_status']=isset($check_status[$v['check_status']]) ? $check_status[$v['check_status']] : '';
                unset($v['charge_type'],$v['refund_money'],$v['village_balance'],$v['summary_id'],$v['is_refund']);
            }
        }
        return $result;
    }

    /**
     * 获取房产账单
     * @author : lkz
     * @date : 2022/12/13
     * @param $param
     * @return mixed
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getRoomBindBillList($param){
        if($param['type'] == 1){//待缴账单
            $result=$this->getRoomUnpaidBillList($param);
        }elseif ($param['type'] == 2){//已缴账单
            $result=$this->getRoomPaidBillList($param);
        }else{
            throw new \think\Exception("请求不合法");
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }

    /**
     * 获取房间工单
     * @author : lkz
     * @date : 2022/12/13
     * @param $param
     * @return mixed
     */
    public function getRoomBindWorksOrderList($param){
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $userPigcmsIdArr=$this->getRoomUserIdArrMethod($param['village_id'],$param['vacancy_id']);
        $where=[
            ['o.village_id','=',$param['village_id']],
        ];
        $field = 'o.order_id,o.name,o.phone,o.event_status,o.address_type,o.room_id,o.public_id,o.cat_id,o.cat_fid,o.label_txt,o.add_time,o.order_content';
        $whereRaw='(o.room_id = '.$param['vacancy_id'].')';
        if($userPigcmsIdArr){
            $whereRaw.=' or (o.bind_id in ('.(implode(',',$userPigcmsIdArr)).'))';
        }
        $order='o.order_id DESC';
        $result=$this->getHouseNewRepairWorksOrderMethod($where,$whereRaw,$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            foreach ($result['list'] as &$v){
                $cate_name = '';
                $subject_name='';
                $address_txt='';
                $order_content = '';
                $status_txt = $this->HouseNewRepairService->order_status_txt[$v['event_status']];
                $status_color = $this->HouseNewRepairService->order_status_color[$v['event_status']];
                $v['status_arr']=['status_txt'=>$status_txt,'status_color'=>$status_color];
                if (isset($v['address_type']) && $v['address_type'] == 'room') {
                    $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $v['room_id']], 'village_id,single_id,floor_id,layer_id,pigcms_id');
                    $address = $this->HouseVillageService->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $vacancy_info['pigcms_id'], $vacancy_info['village_id']);
                    $address_txt = $address;
                }
                if (isset($v['address_type']) && $v['address_type'] == 'public') {
                    $public_info = $this->HouseVillagePublicArea->getOne(['public_area_id' => $v['public_id']], 'public_area_name');
                    $address = $public_info['public_area_name'];
                    $address_txt = $address;
                }
                $v['address_txt']=$address_txt;
                if(isset($v['cat_id'])){
                    $subject_info=$this->HouseNewRepairCate->getOne(['id'=>$v['cat_id']],'cate_name');
                    $cate_name=isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                $v['cate_name'] = $cate_name;
                if(isset($v['cat_fid'])){
                    $subject_info=$this->HouseNewRepairCate->getOne(['id'=>$v['cat_fid']],'cate_name');
                    $subject_name = isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                $v['subject_name'] = $subject_name;
                if($v['label_txt']){
                    $label_txt_arr = explode(',', $v['label_txt']);
                    if($label_txt_arr){
                        $cate_custom=$this->HouseNewRepairCateCustom->get_column([
                            ['id', 'in', $label_txt_arr]
                        ],'name');
                        if($cate_custom){
                            $order_content.=implode(';',$cate_custom);
                        }
                    }
                    $order_content = rtrim($order_content, ';');
                }
                if (empty($order_content)) {
                    $order_content = '无';
                }
                $v['order_content']=$order_content;
                $v['add_time'] = date('Y-m-d',$v['add_time']);
                unset($v['event_status'],$v['room_id'],$v['public_id'],$v['cat_id'],$v['cat_fid'],$v['label_txt'],$v['address_type']);
            }
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }

    /**
     * 获取关联卡号
     * @author : lkz
     * @date : 2022/12/13
     * @param $param
     * @return mixed
     */
    public function getRoomBindIcCardList($param){
        $where=[
            ['village_id','=',$param['village_id']],
            ['vacancy_id','=',$param['vacancy_id']],
            ['status','=',1],
        ];
        $field = 'id as bind_id,device_brand,device_type,ic_card,add_time';
        $order='id DESC';
        $result=$this->getHouseVillageVacancyIccardMethod($where,$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            foreach ($result['list'] as &$v){
                $v['add_time']=date('Y-m-d H:i:s',$v['add_time']);
            }
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }
    
    //智慧社区业务对外三方
    public function getHouseThirdConfigFind($village_id){
        $where=[
            ['businessType','=','village'],
            ['businessId','=',$village_id],
            ['thirdType','in',$this->limitThirdTypeBtnArr],
            ['status','<>' ,4]
        ];
        $infoHouseThirdConfig=$this->getHouseThirdConfigFindMethod($where);
        if($infoHouseThirdConfig){
            if (isset($infoHouseThirdConfig['checkId'])&&$infoHouseThirdConfig['checkId']) {
                $infoHouseThirdConfig['appsecret'] = $infoHouseThirdConfig['checkId'];
            }
            if (isset($infoHouseThirdConfig['thirdAppid'])&&$infoHouseThirdConfig['thirdAppid']) {
                $infoHouseThirdConfig['appid'] = $infoHouseThirdConfig['thirdAppid'];
            }
            if (isset($infoHouseThirdConfig['thirdAppkey'])&&$infoHouseThirdConfig['thirdAppkey']) {
                $infoHouseThirdConfig['appkey'] = $infoHouseThirdConfig['thirdAppkey'];
            }
        }
        return $infoHouseThirdConfig;
    }

    /**
     * 房间列表配置数据
     * @param $param
     * @return \array[][] HouseThirdConfig
     * @author : lkz
     * Date: 2023/1/7
     * Time: 17:28
     */
    public function getRoomListConfig($param){
        $configCustomizationService = new ConfigCustomizationService();
        $HousePropertyService=new HousePropertyService();
        $explain_tips='';
        $search_list=[
            ['key'=>2,'value'=>'姓名'],
            ['key'=>1,'value'=>'物业编号'],
            ['key'=>3,'value'=>'手机号'],
        ];
        if($param['write_iccard']){
            $search_list[]=['key'=>5,'value'=>'门禁卡编号'];
        }
        $status_list=[
            ['key'=>1,'value'=>'空置'],
            ['key'=>2,'value'=>'审核中'],
            ['key'=>3,'value'=>'已绑定业主'],
            ['key'=>4,'value'=>'关闭'],
        ];
        //table格式
        $table_list[]=['title'=>'排序','dataIndex'=>'sort','sorter'=>true];
        $table_list[]=['title'=>'物业编号','dataIndex'=>'usernum'];
        $table_list[]=['title'=>'楼号','dataIndex'=>'building_name'];
        $table_list[]=['title'=>'单元名称','dataIndex'=>'floor_name'];
        $table_list[]=['title'=>'层号','dataIndex'=>'layer_name'];
        $table_list[]=['title'=>'房间号','dataIndex'=>'room'];
        $table_list[]=['title'=>'使用状态','dataIndex'=>'user_status_txt'];
        $table_list[]=['title'=>'已解绑住户记录','dataIndex'=>'unbound','scopedSlots'=>['customRender'=>'unbound']];
        if($configCustomizationService->getAnakeParkJudge()){
            $table_list[]=['title'=>'IC卡管理','dataIndex'=>'ic_manage','scopedSlots'=>['customRender'=>'ic_manage']];
            $explain_tips='房间列表，IC卡绑定当前只支持狄耐克设备 ';
        }
        $table_list[]=['title'=>'物业服务时间','dataIndex'=>'service_cycle'];
        $table_list[]=['title'=>'状态','dataIndex'=>'room_status_txt','scopedSlots'=>['customRender'=>'room_status_txt']];
        $table_list[]=['title'=>'操作','dataIndex'=>'action','scopedSlots'=>['customRender'=>'action']];
        //智慧社区业务对外三方
        if(cfg('third_building_appid')){
            $base_third_config=$this->getHouseThirdConfigFind($param['village_id']);
            $limit_info=$HousePropertyService->get_room_limit_num($param['property_id']);
            if((!$base_third_config || !$base_third_config['third_id']) && $limit_info['room_limit_num'] >0){
                $explain_tips.=PHP_EOL.'剩余导入房间数量为'.$limit_info['surplus_room_num'];
            }
        }
        $data=[
            'search_list'=>$search_list,
            'status_list'=>$status_list,
            'explain_tips'=>$explain_tips,
            'button_list'=>[
                'is_customized_meter_reading'=>cfg('customized_meter_reading') ? true :false //客户定制的水电燃
            ],
            'table_list'=>$table_list
        ];
        return $data;
    }

    /**
     * 查询房间列表
     * @param $param
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author : lkz
     * Date: 2023/1/7
     * Time: 15:04
     */
    public function getRoomDataList($param){
        $key='newV20:getRoomDataList:';
        $room_status=[
            1=>1,//空置
            2=>2,//审核中
            3=>3,//已绑定业主
            4=>0,//关闭
        ];
        $where=[
            ['village_id','=',$param['village_id']],
            ['is_public_rental','=',0],
        ];
        switch ($param['find_type']) {
            case 1: //物业编号
                if($param['find_value']){
                    $where[]  = ['usernum|property_number','like',"%".$param['find_value']."%"];
                }
                break;
            case 2: //姓名
                if($param['find_value']){
                    $user_bind=$this->getHouseVillageUserBindColumnMethod([
                        ['village_id','=',$param['village_id']],
                        ['name','like',"%".$param['find_value']."%"]
                    ],'vacancy_id');
                    if($user_bind){
                        $user_bind=array_values(array_unique($user_bind));
                        $where[]= ['pigcms_id','in',$user_bind];
                    }
                }
                break;
            case 3: //手机号
                if($param['find_value']){
                    $user_bind=$this->getHouseVillageUserBindColumnMethod([
                        ['village_id','=',$param['village_id']],
                        ['phone','like',"%".$param['find_value']."%"]
                    ],'vacancy_id');
                    if($user_bind){
                        $user_bind=array_values(array_unique($user_bind));
                        $where[]= ['pigcms_id','in',$user_bind];
                    }
                }
                break;
            case 4: //地址
                if($param['find_value']){
                    $where[]  = ['address','like',"%".$param['find_value']."%"]; 
                }
                break;
            case 5: //门禁卡编号
                if($param['find_value']){
                    $where[]  = ['card_no','like',"%".$param['find_value']."%"];
                }
                break;
        }
        if(isset($room_status[$param['room_status']])){
            $where[]=['status','=',$param['room_status']];
        }
        if(intval($param['single_id']) > 0){
            $where[]=['single_id','=',intval($param['single_id'])];
        }
        if(intval($param['floor_id']) > 0){
            $where[]=['floor_id','=',intval($param['floor_id'])];
        }
        if(intval($param['layer_id']) > 0){
            $where[]=['layer_id','=',intval($param['layer_id'])];
        }
        if(intval($param['vacancy_id']) > 0){
            $where[]=['pigcms_id','=',intval($param['vacancy_id'])];
        }
        $field = 'pigcms_id,usernum,single_id,floor_id,layer_id,room,user_status,status,sort';
        $order='sort DESC,pigcms_id DESC';
        $result=$this->getHouseVillageUserVacancyListMethod($where,$field,$order,$param['page'],$param['limit']);
        $service_house_new_property = new HouseNewPorpertyService();
        $HouseVillageUserVacancyService=new HouseVillageUserVacancyService();
        $is_new_charge = $service_house_new_property->getTakeEffectTimeJudge($param['property_id']);
        if($result['list']){
            //单元集合
            $floor_list=$this->getHouseVillageFloorSelectMethod([
                ['village_id','=',$param['village_id']],
                ['status','=',1],
            ],'floor_id,floor_name,floor_layer,floor_type,single_id','floor_id');
            //单元类型集合
            $floor_type_key=$key.'floor_type';
            if(Cache::get($floor_type_key)){
                $floor_type_list=Cache::get($floor_type_key);
            }else{
                $floor_type_list=$this->getHouseVillageFloorTypeSelectMethod([
                    ['village_id','=',$param['village_id']],
                    ['status','=',1],
                ],'id,name','id');
                Cache::set($floor_type_key, $floor_type_list, 120);
            }
            //楼栋、楼层
            $single_id_arr=$this->getHouseVillageUserVacancyColumnMethod($where,'single_id');
            $sing_arr = [];
            $layer_arr = [];
            if($single_id_arr){
                $sing_arr=$this->getHouseVillageSingleSelectMethod([
                    ['village_id','=',$param['village_id']],
                    ['id','in',$single_id_arr]
                ],'id,single_name','id');
                $layer_arr=$this->getHouseVillageLayerSelectMethod([
                    ['village_id','=',$param['village_id']],
                    ['single_id','in',$single_id_arr],
                ],'id,layer_name','id');
            } 
            foreach ($result['list'] as &$v){
                if($is_new_charge){
                    $serviceTimeInfo = $HouseVillageUserVacancyService->getRoomEndTime($v['pigcms_id'],$param['village_id'],$param['property_id']);
                    if ($serviceTimeInfo['propertyStartTime']>1){
                        $v['service_start_time'] = date('Y-m-d',$serviceTimeInfo['propertyStartTime']);
                    }else{
                        $v['service_start_time'] = '未设置';
                    }
                    if ($serviceTimeInfo['propertyEndTime']>1){
                        $v['service_end_time'] = date('Y-m-d',$serviceTimeInfo['propertyEndTime']);
                    }else{
                        $v['service_end_time'] = '未设置';
                    }
                    $v['service_cycle'] = $v['service_start_time'].' - '.$v['service_end_time'];
                }
                $whereArr=array();
                $whereArr[]=array('village_id','=',$param['village_id']);
                $whereArr[]=array('room_id','=',$v['pigcms_id']);
                $whereArr[]=array('is_paid','=',2);
                $whereArr[]=array('is_discard','=',1);
                $notpayordercount=$this->HouseNewPayOrder->getPayCount($whereArr);
                $v['notpayordercount']=$notpayordercount ? $notpayordercount:0;
                $single=$this->getHouseVillageSingleFindMethod([
                    ['id','=',$v['single_id']],
                ],'single_name');
                $v['floor_name'] = isset($floor_list[$v['floor_id']]['floor_name']) ? $floor_list[$v['floor_id']]['floor_name'] : '';
                if ($v['single_id'] && isset($sing_arr[$v['single_id']])) {
                    $v['building_name'] = isset($sing_arr[$v['single_id']]['single_name']) ? $sing_arr[$v['single_id']]['single_name'] : '';
                }
                else {
                    $v['building_name'] = (isset($floor_list[$v['floor_id']]) && isset($floor_list[$v['floor_id']]['floor_layer'])) ? $floor_list[$v['floor_id']]['floor_layer'] :'';
                }
                if ($v['layer_id']) {
                    $v['layer_name'] = (isset($layer_arr[$v['layer_id']]) && isset($layer_arr[$v['layer_id']]['layer_name'])) ? $layer_arr[$v['layer_id']]['layer_name'] : '';
                }
                $v['floor_type_name'] = (isset($floor_list[$v['floor_id']]['floor_type']) && $floor_list[$v['floor_id']]['floor_type']) ? $floor_type_list[$floor_list[$v['floor_id']]['floor_type']] : '';
                $word_data = [
                    'floor_name'=>$v['floor_name'],
                    'layer'=>$v['layer_name'],
                    'room'=>$v['room'],
                    'single_name'=>$single ? $single['single_name']:$v['building_name']
                ];
                $room_diy_name = $this->HouseVillageService->word_replce_msg($word_data,$param['village_id']);
                $v['address'] = $room_diy_name;
                $v['building_name'] = $v['building_name']? $v['building_name']:$word_data['single_name'];
                $v['user_status_txt']= isset($this->HouseVillageService->user_status_arr[$v['user_status']]) ? $this->HouseVillageService->user_status_arr[$v['user_status']] : '无';
                $v['room_status_txt']= isset($this->HouseVillageService->room_status_arr[$v['status']]) ? $this->HouseVillageService->room_status_arr[$v['status']] : '关闭';
                unset($v['single_id'],$v['floor_id'],$v['layer_id'],$v['user_status'],$v['status'],$v['service_start_time'],$v['service_end_time'],$v['floor_type_name']);
            }
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }

    /**
     * 删除房间
     * @param $village_id
     * @param $vacancy_id
     * @return bool
     * @throws \think\Exception
     * @author : lkz
     * Date: 2023/1/9
     * Time: 13:14
     */
    public function delRoomOperation($village_id,$vacancy_id=[]){
        $where=[
            ['village_id','=',$village_id],
            ['pigcms_id','in',$vacancy_id],
            ['is_del','=',0],
        ];
        $vacancy_list=$this->getHouseVillageUserVacancySelectMethod($where,'pigcms_id,usernum,room');
        if(!$vacancy_list){
            throw new \think\Exception("该房间不存在");
        }
        $flag=[];
        foreach ($vacancy_list as $v){
            $user_info=$this->getHouseVillageUserBindFindMethod([
                ['vacancy_id','=',$v['pigcms_id']],
                ['status','in',[0,1,2]],
                ['type','<>',6]
            ],'pigcms_id',false);
            if($user_info && isset($user_info['pigcms_id'])){
                $flag=$v;
                break;
            }
        }
        if(!empty($flag)){
            throw new \think\Exception('该物业编号:['.$flag['usernum'].']，房间号:['.$flag['room'].']房间有绑定住户，无法删除');
        }
        foreach ($vacancy_list as $v){
            $set_data = [
                'usernum'=>$v['usernum'].'del'.$v['pigcms_id'],
                'is_del' => 1,
                'del_time' => time()
            ];
            $this->HouseVillageUserVacancy->saveOne([
                ['pigcms_id','=',$v['pigcms_id']],
            ],$set_data);
            $whereUserArr=array(['vacancy_id','=',$v['pigcms_id'],['type','=',6]]);
            $this->HouseVillageUserBind->saveOne($whereUserArr,['status'=>4]);
            
            $whereArr=array();
            $whereArr[]=array('village_id','=',$village_id);
            $whereArr[]=array('room_id','=',$v['pigcms_id']);
            $whereArr[]=array('is_paid','=',2);
            $whereArr[]=array('is_discard','=',1);
            $this->HouseNewPayOrder->saveOne($whereArr,['is_discard' => 2, 'discard_reason' => '房间被删除了', 'update_time' => time()]);
        }
        return true;
    }

    /**
     * 读取设备品牌
     * @return array
     * @author : lkz
     * Date: 2023/1/9
     * Time: 14:31
     */
    public function getIcDeviceBrand($type){
        $list= (new HardwareBrandService())->getBrand($type);
        $data=[];
        if($list){
            foreach ($list as $v){
                $data[]=[
                    'brand_id'=>$v['id'],
                    'brand_name'=>$v['name']
                ];
            }
        }
        return $data;
    }

    /**
     * 读取设备类型
     * @param $brand_id
     * @return array
     * @author : lkz
     * Date: 2023/1/9
     * Time: 14:32
     */
    public function getIcDeviceType($brand_id){
        $list= (new HardwareBrandService())->getType($brand_id);
        $data=[];
        if($list){
            foreach ($list as  $v) {
                if ($v['sub_series_type'] != 1) {
                    continue;
                }
                $data[]=[
                    'type_id'=>$v['id'],
                    'type_name'=>$v['series_title']
                ];
            }
        }
        return $data;
    }

    /**
     * 已解绑住户记录
     * @param $param
     * @return array
     * @author : lkz
     * Date: 2023/1/9
     * Time: 19:02
     */
    public function getRoomUnbindingUserList($param){
        $where=[
            ['village_id','=',$param['village_id']],
            ['vacancy_id','=',$param['vacancy_id']],
        ];
        $field='name,phone,check_in_time,add_time';
        $order='id DESC';
        $result=$this->getHouseVillageUserRecordMethod($where,$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            foreach ($result['list'] as &$v){
                $v['check_in_time']=date('Y-m-d H:i:s',$v['check_in_time']);
                $v['add_time']=date('Y-m-d H:i:s',$v['add_time']);
            }  
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }

}