<?php
/**
 * Created by PhpStorm.
 * Author: zhubaodi
 * Date Time: 2021/6/10 17:13
 */
namespace app\community\model\service;
use app\common\model\db\ProcessPlan;
use app\community\model\db\HouseMenuNew;
use app\community\model\db\HouseMeterAdminUser;
use app\community\model\db\HouseNewChargeNumber;
use app\community\model\db\HouseNewChargeTime;
use app\community\model\db\HouseNewOfflinePay;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseProperty;
use app\community\model\db\HouseVillagePropertyPaylist;
use app\community\model\service\HousePropertyDigitService;
use app\community\model\db\HouseVillage;
use app\community\model\db\ProcessSubPlan;
use app\community\model\db\User;
use app\job\CommonLogSysJob;
use app\traits\CommonLogTraits;
use think\facade\Queue;
use token\Token;
use think\facade\Request;
use customization\customization;

class HouseNewPorpertyService extends HouseNewChargeService
{

	use CommonLogTraits;
    use customization;

    public $charge_status=[1=>'开启',2=>'关闭'];
    /**
     *新版收费管理时间设置
     * @param integer $property_id
     * @param string $take_effect_time
     * @return string
     * @author:zhubaodi
     * @date_time: 2021/6/10 17:16
     */
    public function takeEffectTimeSet($property_id,$take_effect_time){
        if (!empty($take_effect_time)){
            $take_effect_time=strtotime($take_effect_time);
            $time=strtotime(date('Y-m-d 23:59:59'));
            if ($take_effect_time<$time){
                throw new \think\Exception("生效时间必须大于当天");
            }
        }
        $nowtime=time();
        $db_chargeTime=new HouseNewChargeTime();
        $timeInfo=$db_chargeTime->get_one(['property_id'=>$property_id]);
        $data=[];
        if (empty($timeInfo)){
            $data=[
                'property_id'=>$property_id,
                'take_effect_time'=>$take_effect_time,
                'add_time'=>$nowtime,
                'update_time'=>$nowtime
            ];
            $id=$db_chargeTime->addOne($data);
           return $id;
        }else{
            if (!empty($timeInfo['take_effect_time'])&&$timeInfo['take_effect_time']<$nowtime){
                throw new \think\Exception("当前已启用新版收费管理，无法修改生效时间");
            }else{
                $data=[
                    'property_id'=>$property_id,
                    'take_effect_time'=>$take_effect_time,
                    'update_time'=>$nowtime
                ];
                $id=$db_chargeTime->saveOne(['id'=>$timeInfo['id']],$data);
                $db_process_plan=new ProcessPlan();
                $db_process_sub_plan=new ProcessSubPlan();
                $automatic_late_payment=$db_process_plan->get_one(['file'=>'automatic_late_payment']);
                if (empty($automatic_late_payment)){
                    $data_call=[];
                    $data_call['param']='';
                    $data_call['add_time']=$nowtime;
                    $data_call['plan_time']=$take_effect_time;
                    $data_call['space_time']=86400;
                    $data_call['error_count']=0;
                    $data_call['url']='';
                    $data_call['file']='automatic_late_payment';
                    $data_call['time_type']=1;
                    $data_call['sub_process_num']=0;
                    $data_call['unique_id']='';
                    $data_call['plan_desc']='每天凌晨0点更新滞纳金和滞纳天数';
                    $db_process_plan->addOne($data_call);
                }else{
                    $data_call=[];
                    $data_call['plan_time']=$take_effect_time;
                    $db_process_plan->save_one(['file'=>'automatic_late_payment'],$data_call);
                }
                $automatic_call=$db_process_plan->get_one(['file'=>'automatic_call']);
                if (empty($automatic_call)){
                    $data_call=[];
                    $data_call['param']='';
                    $data_call['add_time']=$nowtime;
                    $data_call['plan_time']=$take_effect_time;
                    $data_call['space_time']=86400;
                    $data_call['error_count']=0;
                    $data_call['url']='';
                    $data_call['file']='automatic_call';
                    $data_call['time_type']=1;
                    $data_call['sub_process_num']=0;
                    $data_call['unique_id']='';
                    $data_call['plan_desc']='每天凌晨0点自动生成账单';
                    $db_process_plan->addOne($data_call);
                }else{
                    $data_call=[];
                    $data_call['plan_time']=$take_effect_time;
                    $db_process_plan->save_one(['file'=>'automatic_call'],$data_call);
                }                
                $db_process_sub_plan->deleteOne(['file'=>'autoAddOrderLog']);// 删除错误的子计划任务
                $autoAddOrderLog=$db_process_sub_plan->get_one(['file'=>'sub_autoAddOrderLog','unique_id'=>'sub_autoAddOrderLog' .$property_id]);
                if (empty($autoAddOrderLog)){
                    $data_call=[];
                    $data_call['param'] = serialize(array('property_id'=>$property_id));
                    $data_call['plan_time'] = $take_effect_time;
                    $data_call['space_time'] = 0;
                    $data_call['add_time'] = time();
                    $data_call['file'] = 'sub_autoAddOrderLog';
                    $data_call['time_type'] = 1;
                    $data_call['unique_id'] = 'sub_autoAddOrderLog' .$property_id;
                    $data_call['rand_number'] = mt_rand(1, max(cfg('sub_process_num'), 3));
                    $db_process_sub_plan->add($data_call);
                }else{
                    $data_call=[];
                    $data_call['plan_time']=$take_effect_time;
                    $db_process_sub_plan->save_one(['file'=>'sub_autoAddOrderLog'],$data_call);
                }
                return $id;
            }

        }


    }

    /**
     * 查询新版收费管理时间设置
     * @param integer $property_id
     * @author:zhubaodi
     * @date_time: 2021/6/10 19:03
     */
    public function getTakeEffectTimeInfo($property_id){
        $db_chargeTime=new HouseNewChargeTime();
        $timeInfo=$db_chargeTime->get_one(['property_id'=>$property_id]);
        if (!empty($timeInfo)){
            $timeInfo['take_effect_time']=date('Y-m-d 00:00:00',$timeInfo['take_effect_time']);
        }else{
            $timeInfo['take_effect_time']=date('Y-m-d 00:00:00',2082729599);
        }
        return $timeInfo;
    }


    /**
     * 查询新版收费管理判断依据
     * @param integer $property_id
     * @author:zhubaodi
     * @date_time: 2021/6/10 19:03
     */
    public function getTakeEffectTimeJudge($property_id){
        $db_chargeTime=new HouseNewChargeTime();
        $timeInfo=$db_chargeTime->get_one(['property_id'=>$property_id]);
        if (!empty($timeInfo) && isset($timeInfo['take_effect_time']) && $timeInfo['take_effect_time']){
            if (intval(time())>intval($timeInfo['take_effect_time'])) {
                // 设置了生效时间 并且 当前时间大于生效时间 返回true 其他返回false
                return true;
            }
        }
        return false;
    }
    // 查询新版收费已经生效的物业id集合或者小区id集合 默认获取小区id集合
    public function getTakeJudgeVillages($isVillage=true) {
        // 查询已经生效的集合
        $db_chargeTime=new HouseNewChargeTime();
        $whereColumn = [];
        // 查询已经生效的
        $whereColumn[] = ['property_id','>',0];
        $whereColumn[] = ['take_effect_time','between',[0,time()]];
        $propertyIdArr = $db_chargeTime->getColumn($whereColumn,'property_id');
        if (!$isVillage) {
            if (empty($propertyIdArr)||!isset($propertyIdArr[0])) {
                $propertyIdArr = [];
            }
            // 返回物业id 集合
            return $propertyIdArr;
        }
        $dbHouseVillage = new HouseVillage();
        if (!empty($propertyIdArr)&&isset($propertyIdArr[0])) {
            $village_where = [];
            $village_where[] = ['property_id', 'in', $propertyIdArr];
            $village_id_arr = $dbHouseVillage->getColumn($village_where, 'village_id');
        } else {
            $village_id_arr = [];
        }
        return $village_id_arr;
    }

    /**
     * 查询收费科目列表
     * @param int $property_id 物业id
     * @param $page
     * @param $limit
     * @return array|null|\think\Model
     * @throws \think\Exception
     * @author: zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function getChargeNumberList($property_id, $page, $limit)
    {
        // 初始化 数据层
        $db_house_property = new HouseProperty();
        $property_info = $db_house_property->get_one(['id' => $property_id]);
        if (empty($property_info)){
            throw new \think\Exception("物业信息不存在！");
        }
        if ($property_info['status'] != 1) {
            throw new \think\Exception("该物业没有获取科目收费信息的权限！");
        }
        $db_charge_number = new HouseNewChargeNumber();
        $where = ['status' => [1,2],'property_id'=>$property_id];
        $count = $db_charge_number->getCount($where);
        $list = $db_charge_number->getList($where, true,$page, $limit, 'id DESC');

        if (!empty($list)) {
            $list = $list->toArray();
            foreach ($list as $k => $value) {
                $list[$k] = $value;
                if (!empty($value['charge_type']) ) {
                    $list[$k]['charge_type_name'] = isset($this->charge_type[$value['charge_type']]) ? $this->charge_type[$value['charge_type']]:'';
                    $list[$k]['status'] = $this->charge_status[$value['status']];
                }

            }
        }
        $data = [];
        $data['count'] = $count;
        $data['total_limit'] = $limit;
        $data['list'] = $list;

        return $data;
    }


    /**
     * 查询收费科目详情
     * @param integer $id
     * @author:zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function getChargeNumberInfo($id){
        if (empty($id)){
            throw new \think\Exception("收费科目id不能为空！");
        }
        $db_charge_number = new HouseNewChargeNumber();
        $numberInfo=$db_charge_number->get_one(['id'=>$id,'status'=>[1,2]]);
        return $numberInfo;
    }

    /**
     * 编辑收费科目
     * @param array $data
     * @author:zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function editChargeNumber($data){
        // 初始化 数据层
        $db_house_property = new HouseProperty();
        $property_info = $db_house_property->get_one(['id' => $data['property_id']]);
        if (empty($property_info)){
            throw new \think\Exception("物业信息不存在！");
        }
        if ($property_info['status'] != 1) {
            throw new \think\Exception("该物业没有获取线下支付信息的权限！");
        }
        if (empty($data['id'])){
            throw new \think\Exception("收费科目id不能为空！");
        }
        $db_charge_number = new HouseNewChargeNumber();
        $numberInfo=$db_charge_number->get_one(['id'=>$data['id'],'status'=>[1,2]]);
        if (empty($numberInfo)){
            throw new \think\Exception("收费科目信息为空，无法编辑！");
        }
        $where=[
            ['charge_number_name','=',$data['charge_number_name']],
            ['status','<>',4],
            ['id','<>',$data['id']],
            ['property_id','=',$data['property_id']],

        ];
        $numberInfo_name=$db_charge_number->get_one($where);
        if (!empty($numberInfo_name)){
            throw new \think\Exception("收费科目名称重复，无法编辑！");
        }

        $edit_data['update_time']=time();
        if (!empty($data['property_id'])){
            $edit_data['property_id']=$data['property_id'];
        }
        if (!empty($data['charge_type'])){
            $edit_data['charge_type']=$data['charge_type'];
        }
        if (!empty($data['charge_number_name'])){
            $edit_data['charge_number_name']=$data['charge_number_name'];
        }
        if (!empty($data['status'])){
            $edit_data['status']=$data['status'];
        }
        $edit_data['water_type']=($this->hasHqby()) ? (int)$data['water_type'] : 0;

        // print_r($edit_data);exit;
        $id=$db_charge_number->save_one(['id'=>$data['id']],$edit_data);

	    $queuData = [
		    'logData' => [
			    'tbname' => '物业新版收费科目设置表',
			    'table'  => 'house_new_charge_number',
			    'client' => '物业后台',
			    'trigger_path' => '缴费管理->收费科目管理',
			    'trigger_type' => $this->getUpdateNmae(),
			    'addtime'      => time(),
			    'property_id'  => $data['property_id']
		    ],
		    'newData' => $edit_data,
		    'oldData' => $numberInfo
	    ];
		$this->laterLogInQueue($queuData);

        return $id;
    }


    /**
     * 添加收费科目
     * @param array $data
     * @author:zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function addChargeNumber($data){

        if (empty($data['property_id'])){
            throw new \think\Exception("物业id不能为空！");

        }
        if (empty($data['charge_type'])){
            throw new \think\Exception("收费类别不能为空！");

        }
        if (empty($data['charge_number_name'])){
            throw new \think\Exception("收费科目名称不能为空！");

        }
        if (empty($data['status'])){
            throw new \think\Exception("收费科目状态不能为空！");

        }
        $where=[
            ['charge_number_name','=',$data['charge_number_name']],
            ['property_id','=',$data['property_id']],
            ['status','<>',4]];
        $db_charge_number = new HouseNewChargeNumber();
        $numberInfo_name=$db_charge_number->get_one($where);
        if (!empty($numberInfo_name)){
            throw new \think\Exception("收费科目名称重复，无法添加！");
        }
        $add_data=[
            'property_id'=>$data['property_id'],
            'charge_type'=>$data['charge_type'],
            'charge_number_name'=>$data['charge_number_name'],
            'status'=>$data['status'],
            'update_time'=>time(),
            'add_time'=>time()
        ];
        $add_data['water_type']=($this->hasHqby()) ? (int)$data['water_type'] : 0;

        $id=$db_charge_number->addOne($add_data);

	    $queuData = [
		    'logData' => [
			    'tbname' => '物业新版收费科目设置表',
			    'table'  => 'house_new_charge_number',
			    'client' => '物业后台',
			    'trigger_path' => '缴费管理->收费科目管理',
			    'trigger_type' => $this->getAddLogName(),
			    'addtime'      => time(),
			    'property_id'  => $data['property_id']
		    ],
		    'newData' => $add_data,
		    'oldData' => []
	    ];
	    $this->laterLogInQueue($queuData);
	    return $id;
    }



    /**
     * 查询线下支付列表
     * @param int $property_id 物业id
     * @param $page
     * @param $limit
     * @return array|null|\think\Model
     * @throws \think\Exception
     * @author: zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function getOfflinePayList($property_id, $page, $limit)
    {
        // 初始化 数据层
        $db_house_property = new HouseProperty();
        $property_info = $db_house_property->get_one(['id' => $property_id]);
        if (empty($property_info)){
            throw new \think\Exception("物业信息不存在！");
        }
        if ($property_info['status'] != 1) {
            throw new \think\Exception("该物业没有获取线下支付信息的权限！");
        }
        $db_offline_pay = new HouseNewOfflinePay();
        $where = ['status' => 1,'property_id'=>$property_id];
        $count = $db_offline_pay->getCount($where);
        $list = $db_offline_pay->getList($where, true, $page, $limit, 'id ASC');
        $data = [];
        $data['total_limit'] = $limit;
        $data['count'] = $count;
        $data['list'] = $list;

        return $data;
    }


    /**
     * 查询线下支付详情
     * @param integer $id
     * @author:zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function getOfflinePayInfo($id){
        if (empty($id)){
            throw new \think\Exception("线下支付id不能为空！");
        }
        $db_offline_pay = new HouseNewOfflinePay();
        $payInfo=$db_offline_pay->get_one(['id'=>$id,'status'=>1]);
        return $payInfo;
    }

    /**
     * 编辑线下支付
     * @param array $data
     * @author:zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function editOfflinePay($data){
        if (empty($data['id'])){
            throw new \think\Exception("线下支付id不能为空！");
        }
        $db_offline_pay = new HouseNewOfflinePay();
        $payInfo=$db_offline_pay->get_one(['id'=>$data['id'],'status'=>1]);
        if (empty($payInfo)){
            throw new \think\Exception("线下支付方式信息为空，无法编辑！");
        }
        $where=[
            ['name','=',$data['name']],
            ['status','<>',4],
            ['id','<>',$data['id']],

        ];
        $payInfo_name=$db_offline_pay->get_one($where);
        if (!empty($payInfo_name)){
            throw new \think\Exception("线下支付方式名称重复，无法编辑！");
        }

        $edit_data['update_time']=time();
        if (!empty($data['property_id'])){
            $edit_data['property_id']=$data['property_id'];
        }
        if (!empty($data['name'])){
            $edit_data['name']=$data['name'];
        }

        $id=$db_offline_pay->save_one(['id'=>$data['id']],$edit_data);
        return $id;
    }


    /**
     * 添加线下支付
     * @param array $data
     * @author:zhubaodi
     * @date_time: 2021/6/11 10:01
     */
    public function addOfflinePay($data){

        if (empty($data['property_id'])){
            throw new \think\Exception("物业id不能为空！");
        }
        if (empty($data['name'])){
            throw new \think\Exception("线下支付名称不能为空！");
        }
        $db_offline_pay = new HouseNewOfflinePay();
        $where=[
            ['name','=',$data['name']],
            ['property_id','=',$data['property_id']],
            ['status','<>',4],
        ];
        $offline_name=$db_offline_pay->get_one($where);

        if (!empty($offline_name)){
            throw new \think\Exception("线下支付方式名称重复，无法添加！");
        }
        $add_data=[
            'property_id'=>$data['property_id'],
            'name'=>$data['name'],
            'status'=>1,
            'update_time'=>time(),
            'add_time'=>time()
        ];

        $id=$db_offline_pay->addOne($add_data);
        return $id;
    }

    /**
     * 删除线下支付方式
     * @author:zhubaodi
     * @date_time: 2021/6/11 14:01
     */
    public function delOfflinePay($id){
        if (empty($id)){
            throw new \think\Exception("线下支付id不能为空！");
        }
        $db_offline_pay = new HouseNewOfflinePay();
        $payInfo=$db_offline_pay->get_one(['id'=>$id,'status'=>1]);
        if (empty($payInfo)){
            throw new \think\Exception("线下支付方式信息为空，无法编辑！");
        }
        $res=$db_offline_pay->save_one(['id'=>$id],['status'=>4]);
        return $res;
    }

    /**
     * 线下支付列表
     * @author lijie
     * @date_time 2021/06/28
     * @param array $where
     * @param bool $field
     * @return \think\Collection
     */
    public function getOfflineList($where=[],$field=true)
    {
        $db_house_new_offline = new HouseNewOfflinePay();
        $data = $db_house_new_offline->getList($where,$field);
        return $data;
    }

    /**
     *
     * @author:zhubaodi
     * @date_time: 2021/7/6 10:11
     */
    public function countVillageFee($property_id,$villageids=''){
        $db_house_village=new HouseVillage();
        $db_house_new_pay_order=new HouseNewPayOrder();
        $whereArr=[['property_id','=',$property_id],['status','=',1]];
        if(!empty($villageids)){
           if(!is_array($villageids)){
               $villageids=explode(',',$villageids);
           }
            $whereArr[]=array('village_id','in',$villageids);
        }
        $village_list=$db_house_village->getList($whereArr,'village_id,village_name');

        $countList1=[];
        if (!empty($village_list)){
            $village_list=$village_list->toArray();
            if (!empty($village_list)){
                $db_house_property_digit_service = new HousePropertyDigitService();
                $digit_info = $db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
                foreach ($village_list as $k=>$value){
                    $countList=[];
                    $where=[];
                    $where[]=['village_id','=',$value['village_id']];
                    $where[]=['is_discard','=',1];
                    $where[]=['is_paid','=',2];
                    //$where[]=['room_id|position_id','<>',0];
                    $field='sum(total_money) as total_money';
                    $order_info=$db_house_new_pay_order->get_one($where,$field);
                  //   print_r($order_info);exit;
                    $where1=[];
                    $where1[]=['village_id','=',$value['village_id']];
                    $where1[]=['is_discard','=',1];
                    $where1[]=['is_paid','=',1];
                    $field1='sum(pay_money) as pay_money,sum(refund_money) as refund_money';
                    $order_info1=$db_house_new_pay_order->get_one($where1,$field1);

                    $countList['village_id']=$value['village_id'];
                    $countList['village_name']=$value['village_name'];
                    $countList['total_money']=$order_info['total_money'];
                    $countList['pay_money']=$order_info1['pay_money']-$order_info1['refund_money'];
                    $countList['pay_money']=$countList['pay_money']>0 ? round($countList['pay_money'],2):0;
                    //$countList['pay_money'] = $countList['total_money'] > 0 ? round($countList['total_money'], 2) : 0;
                    $countList['total_money'] = '￥' . formatNumber($countList['total_money'], 2, 1);
                    $countList['pay_money'] = '￥' . formatNumber($countList['pay_money'], 2, 1);
                    $countList1[] = $countList;

                }
            }
        }

        return $countList1;
    }

    /**
     * 登录小区后台
     * @author:zhubaodi
     * @date_time: 2021/7/6 10:11
     * $admin_id 是property_admin的id
     */
    public function village_login($village_id,$property_id,$admin_id=0){
        $database_village = new HouseVillage();
        $now_village = $database_village->getOne($village_id);
        $arr=[];
        $arr['now_village']='';
        $arr['ticket']='';
        if(empty($now_village) || $now_village['status'] == 2){
            return $arr;
        }
        if ($property_id != $now_village['property_id']) {
            return $arr;
        }
        // 是否为平台登录
        $now_village['is_system'] = 2;
        //查询权限 超级管理员赋予所有权限
        $db_house_menu_new=new HouseMenuNew();
        $admin_menus = $db_house_menu_new->getOne(array('status'=>1));
        $menus = array();
        foreach ($admin_menus as $value) {
            $menus[] = $value['id'];
        }
        $now_village['menus'] = $menus;
        session('house',$now_village);
      //   import("@.ORG.Token");
        // 给予小区管理员身份
        $user_id=$village_id.'_'.$admin_id;
        $ticket = Token::createToken($user_id,7);
       // setcookie('village_access_token',$ticket,$_SERVER['REQUEST_TIME']+10000000,'/');

        $arr['now_village']=$now_village;
        $arr['ticket']=$ticket;
        return $arr;
    }

    //todo 新版收费未开启 弹出提示
    public function checkNewCharge($controller,$action,$property_id){
        if(strpos($controller, 'village_api') !== false){
            $str=isset(explode('.',$controller)[1]) ? explode('.',$controller)[1] : '';
            $action_arr=[ //控制器名/方法名
                'housemeter/meterreadingadd', //抄表管理=>录入用量=>添加
                'housemeter/uploadfiles',     //抄表管理=>抄表记录=>导入
                'housemeter/exportmeter',     //抄表管理=>抄表记录=>导入
                'cashier/manualcall',         //收银台=>添加收费项=>手动生成账单
                'cashier/prepaidcall',        //收银台=>添加收费项=>生成预缴账单
                'cashier/gopay',              //收银台=>收款
            ];
            if(!empty($str) && in_array($str.'/'.$action,$action_arr)){
                $takeEffectTimeJudge = $this->getTakeEffectTimeJudge($property_id);
                if(!$takeEffectTimeJudge){
                    exit(json([
                        'status' => 1003,
                        'msg' 	 => '您暂未开启新版收费，无法体验。请前往物业后台=>新版收费=>收费设置（启用新版收费管理时间）',
                        'data' 	 => []
                    ])->send());
                }
            }
        }
        return true;
    }

    public function setSoftwareNewEffectCharge($property_id) {
        $isSoftwareMew = isSoftwareMew();
        if ($isSoftwareMew) {
            // 如果是符合条件的 直接 按照当前时间前推10天设置物业新版收费生效时间
            $nowTimeS = strtotime(date('Y-m-d'));
            $setTakeEffectTime = $nowTimeS-864000;
            $db_chargeTime = new HouseNewChargeTime();
            $new_charge_time = $db_chargeTime->get_one(['property_id'=>$property_id]);
            if ($new_charge_time&&isset($new_charge_time['take_effect_time'])&&$new_charge_time['take_effect_time']<$nowTimeS) {
                return true;
            }
            $saveData = [
                'property_id' => $property_id,
                'take_effect_time' => $setTakeEffectTime,
            ];
            if ($new_charge_time) {
                $saveData['update_time'] = time();
                $where = [
                    'property_id' => $property_id
                ];
                $db_chargeTime->saveOne($where,$saveData);
            } else {
                $saveData['add_time'] = time();
                $db_chargeTime->addOne($saveData);
            }
        }
        return true;
    }



    /**
     * 判断是否是新安装客户
     * @return bool
     */
    function isSoftwareMew()
    {
        $software_new_version = cfg('software_new_version');
        if ($software_new_version) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 定制水费类型
     * @author: liukezhu
     * @date : 2022/7/25
     * @return array
     */
    public function checkChargeWaterType(){
        $data=[
            ['title'=>'冷水表','value'=>1],
            ['title'=>'热水表','value'=>2],
            ['title'=>'其它','value'=>0],
        ];
        return ['data'=>$data,'status'=>$this->hasHqby()];
    }

	/**
	 * 检查是否启用了新版收费
	 * @param $property_id
	 *
	 * @return int
	 */
	public function isUseNewCharge($property_id){
		$new_charge_time = (new HouseNewChargeTime())->getColumn(['property_id' => $property_id],'take_effect_time');
		$nowtime = time();
		$status=0;
		if (!empty($new_charge_time) && $new_charge_time[0] < $nowtime && $new_charge_time[0] > 1) {
			$status=1;
		}
		return $status;
	}

	/**
	 * 老版本的收费显示服务时间 依赖已交过的账单 与 v20/app/community/model/service/VisitorInviteService.php 类似 getUserEndTime
	 * @param      $where
	 * @param bool $field
	 *
	 * @return mixed
	 */
	public function getOldUserEndTime($where,$field =true)
	{
		return (new HouseVillagePropertyPaylist())->getOne($where,$field);
	}

    public function checkTakeEffectTime($property_id){
        $result=$this->getTakeEffectTimeJudge($property_id);
        $msg='请先在物业后台开启新版收费（物业后台=>新版收费=>收费设置（启用新版收费管理时间））';
        $data=[
            'status'=>$result,
            'msg'=>$result ? '' : $msg
        ];
        return $data;
    }
}