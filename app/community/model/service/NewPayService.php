<?php


namespace app\community\model\service;

use app\common\model\service\send_message\SmsService;
use app\common\model\service\UserService;
use app\common\model\service\ConfigService;
use app\common\model\service\weixin\TemplateNewsService;
use app\community\model\db\HouseNewChargeRule;
use app\community\model\db\HouseNewDepositFrozenLog;
use app\community\model\db\HouseNewDepositLog;
use app\community\model\db\HouseNewChargePrepaid;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseNewPayOrderSummary;
use app\community\model\db\HouseNewPileUserMoney;
use app\community\model\db\HouseNewPileUserMoneyLog;
use app\community\model\db\HouseNewSelectProjectRecord;
use app\community\model\db\HouseProperty;
use app\community\model\db\HouseVillageCarAccessRecord;
use app\community\model\db\HouseVillageParkingGarage;
use app\community\model\db\InPark;
use app\community\model\db\ParkScrcuRecord;
use app\community\model\service\Device\HouseFaceImgService;
use app\community\model\service\HousePropertyDigitService;
use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillageNmvCard;
use app\community\model\db\HouseVillageNmvCharge;
use app\community\model\db\HouseVillageParkConfig;
use app\community\model\db\HouseVillageParkingCar;
use app\community\model\db\HouseVillageParkingPosition;
use app\community\model\db\HouseVillageParkingTemp;
use app\community\model\db\HouseVillagePayOrder;
use app\community\model\db\HouseVillagePileEquipment;
use app\community\model\db\HouseVillagePilePayOrder;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseNewOrderLog;
use app\community\model\db\ParkOpenLog;
use app\community\model\db\ParkPassage;
use app\community\model\db\ParkPlateresultLog;
use app\community\model\db\ParkSystem;
use app\community\model\db\ParkTotalRecord;
use app\community\model\db\PlatOrder;
use app\community\model\db\User;
use app\community\model\service\Park\A11Service;
use app\community\model\service\Park\D5Service;
use app\community\model\service\Park\D6Service;
use app\community\model\service\Park\QinLinCloudService;
use app\pay\model\db\PayOrderInfo;
use app\pay\model\service\PayService as PlatPayService;
use Dompdf\Exception;
use think\facade\Cache;
use app\pay\model\db\PayChannel;
use app\pay\model\service\PayService;
use app\community\model\service\PayService as CommunityPayService;
use app\community\model\service\HouseNewChargeProjectService;
use app\community\model\service\CustomizeMeterWaterReadingService;
use app\community\model\db\HouseWorker;
use app\common\model\service\config\ConfigCustomizationService;
use app\common\model\db\PaidOrderRecord;
use think\facade\Db;

class NewPayService
{
    /**
     * 收银台生成支付账单
     * @author lijie
     * @date_time 2021/06/25
     * @param array $order_list
     * @param int $village_id
     * @param int $pay_type
     * @param int $offline_pay_type
     * @param string $auth_code
     * @param string $remark
     * @return array|bool|int[]
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function goPay($order_list=[],$village_id=0,$pay_type=1,$offline_pay_type=0,$auth_code='',$remark='',$extra_data=array(),$role_id=0,$param=[])
    {
        fdump_api([$order_list,$village_id,$pay_type,$offline_pay_type,$auth_code,$remark],'workgoPay_0414',1);
        $service_house_village = new HouseVillageService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        $db_house_new_deposit_log=new HouseNewDepositLog();

        if(empty($order_list)){
            return false;
        }
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $now_order = $order_list[0];
        if (!empty($now_order['room_id'])&&!empty($param['deposit_type'])){
            $where['village_id']=$village_id;
            $where['room_id']=$now_order['room_id'];
            $info=$db_house_new_deposit_log->get_one($where,'total_money,id');
            if ($info['total_money']!=$param['deposit_money']){
                throw new \think\Exception("押金总额有变化，请刷新页面，重新操作");
            }
        }

        if($pay_type == 3 && !empty($auth_code)){
            if($now_order['room_id']){
                
                if(Cache::get($now_order['room_id'].'_'.$now_order['project_id'])){
                    throw new \think\Exception("不要重复扫码");
                }else{
                    Cache::set($now_order['room_id'].'_'.$now_order['project_id'], $now_order, 5);
                }
            }else{
                if(Cache::get($now_order['position_id'].'_'.$now_order['project_id'])){
                    throw new \think\Exception("不要重复扫码");
                }else{
                    Cache::set($now_order['position_id'].'_'.$now_order['project_id'], $now_order, 5);
                }
            }
        }

        if (!empty($now_order['room_id'])&&!empty($param['deposit_type'])){
            $where['village_id']=$village_id;
            $where['room_id']=$now_order['room_id'];
            $info=$db_house_new_deposit_log->get_one($where,'total_money,id');
            if ($info['total_money']!=$param['deposit_money']){
                throw new \think\Exception("押金总额有变化，请刷新页面，重新操作");
            }
        }

        $summaryData=array();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $summaryData['village_id'] = $village_id;
        $summaryData['property_id'] = $village_info['property_id'];
   
        $orderData=array();
        if($now_order['room_id']){
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$now_order['room_id']],['type','in','0,3'],['status','=',1]],'pigcms_id,name,phone,uid');
            if($user_info && is_object($user_info) && !$user_info->isEmpty()){
                $user_info=$user_info->toArray();
            }
            $summaryData['room_id'] = $now_order['room_id'];
            if(isset($now_order['position_id']) && $now_order['position_id']>0){
                $summaryData['position_id'] = $now_order['position_id'];
            }
        }else{
            $summaryData['position_id'] = $now_order['position_id'];
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$now_order['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,uid');
            */       
            $user_info=$service_house_new_cashier->getRoomUserBindByPosition($now_order['position_id'],$village_id);
        }
        if($user_info && is_object($user_info) && !$user_info->isEmpty()) {
            $user_info = $user_info->toArray();
        }

        $summaryData['pay_uid'] = 0;
        $summaryData['uid']=0;
        $summaryData['pigcms_id']=0;
        $summaryData['pay_bind_id']=0;
        if(!empty($user_info)){
            $summaryData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $summaryData['pay_uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $summaryData['pigcms_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $summaryData['pay_bind_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;

            $orderData['uid'] = $user_info['uid'];
            $orderData['pigcms_id'] = $user_info['pigcms_id'];
            $orderData['name'] = $user_info['name'];
            $orderData['phone'] = $user_info['phone'];
            $orderData['pay_bind_name'] = $user_info['name'];
            $orderData['pay_bind_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $orderData['pay_bind_phone'] = $user_info['phone'];
        }

        $summaryData['order_no'] =  build_real_orderid($summaryData['pay_uid']);
        $summaryData['is_paid'] = 2;
        $summaryData['pay_type'] = $pay_type;
        $summaryData['offline_pay_type'] = $offline_pay_type;
        $summaryData['is_online'] = 0;
        $summaryData['remark'] = $remark;
        $summary_id = $service_house_new_cashier->addOrderSummary($summaryData);
        fdump_api([$summary_id,$summaryData,$order_list],'workgoPay_0414',1);
        $total_money = 0;
        $pay_money = 0;
        $orderData['pay_type'] = $pay_type;
        $orderData['offline_pay_type'] = $offline_pay_type;
        $orderData['summary_id'] = $summary_id;
        $orderData['is_paid'] = 2;
        $orderData['is_online'] = 0;
        $orderData['update_time'] = time();
        $orderData['remark'] = $remark; // 也同步到子订单

        if (!empty($role_id)){
            $orderData['role_id'] = $role_id;
        }

        if(!empty($extra_data) && is_array($extra_data)){
            $orderData['extra_data']=json_encode($extra_data,JSON_UNESCAPED_UNICODE);
        }
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);
        if (isset($param['deposit_money'])){
            $deposit_money=$param['deposit_money'];
        }else{
            $deposit_money=0;
        }
        
        $rule_order_discount = array();
        foreach ($order_list as $value){

            $total_money += $value['total_money'];
            $pay_money += $value['late_payment_money'] + $value['modify_money'];
            if ($is_grapefruit_prepaid == 1) {
                    if(isset($value['detail_order']) && !empty($value['detail_order'])){
                        foreach ($value['detail_order'] as $dv) {
                            $month_num=$dv['service_month_num'];
                            if(isset($dv['unify_flage_id']) && !empty($dv['unify_flage_id'])){
                                $oneChargeRule=$service_house_new_cashier->getOneChargeRule(array('id' => $dv['rule_id']),'id,charge_name,charge_valid_type');
                                $charge_valid_type=!empty($oneChargeRule)&&isset($oneChargeRule['charge_valid_type']) ? $oneChargeRule['charge_valid_type']:0;
                                if($charge_valid_type==3){
                                    $month_num=$month_num/12;
                                }
                            }
                            if (isset($rule_order_discount[$dv['rule_id']])) {
                                $rule_order_discount[$dv['rule_id']]['num'] += $month_num;
                                $rule_order_discount[$dv['rule_id']]['money'] += ($dv['modify_money'] + $dv['late_payment_money']);
                                $rule_order_discount[$dv['rule_id']]['order_ids'][]=$dv['order_id'];
                            } else {
                                $rule_order_discount[$dv['rule_id']] = array();
                                $rule_order_discount[$dv['rule_id']]['rule_id'] = $dv['rule_id'];
                                $rule_order_discount[$dv['rule_id']]['num'] = $month_num;
                                $rule_order_discount[$dv['rule_id']]['money'] = ($dv['modify_money'] + $dv['late_payment_money']);
                                $rule_order_discount[$dv['rule_id']]['order_ids']= array($dv['order_id']);
                            }
                        }
                    }elseif(isset($value['rule_id'])){
                        $fmonth_num=$value['service_month_num'];
                        if(isset($value['unify_flage_id']) && !empty($value['unify_flage_id'])){
                            $oneChargeRule=$service_house_new_cashier->getOneChargeRule(array('id' => $value['rule_id']),'id,charge_name,charge_valid_type');
                            $charge_valid_type=!empty($oneChargeRule)&&isset($oneChargeRule['charge_valid_type']) ? $oneChargeRule['charge_valid_type']:0;
                            if($charge_valid_type==3){
                                $fmonth_num=$fmonth_num/12;
                            }
                        }
                        if (isset($rule_order_discount[$value['rule_id']])) {
                            $rule_order_discount[$value['rule_id']]['num'] += $fmonth_num;
                            $rule_order_discount[$value['rule_id']]['money'] += ($value['modify_money'] + $value['late_payment_money']);
                            $rule_order_discount[$value['rule_id']]['order_ids'][]=$value['order_id'];
                        } else {
                            $rule_order_discount[$value['rule_id']] = array();
                            $rule_order_discount[$value['rule_id']]['rule_id'] = $value['rule_id'];
                            $rule_order_discount[$value['rule_id']]['num'] = $fmonth_num;
                            $rule_order_discount[$value['rule_id']]['money'] = ($value['modify_money'] + $value['late_payment_money']);
                            $rule_order_discount[$value['rule_id']]['order_ids']= array($value['order_id']);
                        }
                    }
            }
            $where = [];
            if(isset($value['order_id']) && ($value['order_id']>0) && isset($value['is_only_pay_this']) && ($value['is_only_pay_this']==1)){
                $where[] = ['order_id','=',$value['order_id']];
            }else if(isset($value['detail_order']) && !empty($value['detail_order']) && is_array($value['detail_order'])){
                $order_idArr=array();
                foreach ($value['detail_order'] as $dvv){
                    $order_idArr[]=$dvv['order_id'];
                }
                $order_idArr=array_unique($order_idArr);
                if(!empty($order_idArr)){
                    $where[] = ['order_id','in',$order_idArr];
                }else{
                    if($value['room_id']){
                        $where[] = ['room_id','=',$value['room_id']];
                    }
                    if($value['position_id']>0){
                        $where[] = ['position_id','=',$value['position_id']];
                    }
                }
                
            }else{
                if($value['room_id']){
                    $where[] = ['room_id','=',$value['room_id']];
                } 
                if($value['position_id']>0){
                    $where[] = ['position_id','=',$value['position_id']];
                }
            }
            $where[] = ['add_time','<=',time()];
            $where[] = ['project_id','=',$value['project_id']];
            $where[] = ['is_paid','=',2];
            $where[] = ['is_refund','=',1];
            $where[] = ['is_discard','=',1];
            $where[] = ['check_status','<>',1];
            //押金解冻
            $frozen_data=['order_id'=>$value['order_id'],'type'=>3];
            $this->editFrozenlog($frozen_data);
            if (!empty($param)&&!empty($param['deposit_type'])&&$deposit_money>0){
                if ($deposit_money>$pay_money){
                    $orderData['deposit_money'] = $pay_money;
                    $deposit_money=$deposit_money-$pay_money;
                }else{
                    $orderData['deposit_money'] = $deposit_money;
                    $deposit_money=0;
                }
                //冻结押金
                $frozen_log_data=[
                    'order_id'=>$value['order_id'],
                    'deposit_money'=>$orderData['deposit_money'],
                ];
                $this->addFrozenlog($frozen_log_data);
            }
            if ($is_grapefruit_prepaid == 1) {
                $orderData['rate']=0;
                $orderData['diy_type']=0;
                $orderData['diy_content']='';
            }
            $service_house_new_cashier->saveOrder($where,$orderData);
        }
        $discount_money=0;
        if ($is_grapefruit_prepaid == 1 && !empty($rule_order_discount)) {
            foreach ($rule_order_discount as $kk => $rv) {
                $rv['num']=round($rv['num'],2);
                $rv['num']=floor($rv['num']);
                $rv['num']=$rv['num']*1;
                $discountArr = $service_house_new_cashier->getChargePrepaidDiscount($rv['rule_id'], $rv);
                $rule_order_discount[$kk]['optimum'] = $discountArr['optimum'];
                $rule_order_discount[$kk]['discount_money'] = $discountArr['discount_money'];
                if(!empty($discountArr['optimum']) && !empty($rv['order_ids'])){
                    $whereArrTmp=array(['order_id','in',$rv['order_ids']]);
                    $discount_type='达到按'.$discountArr['optimum']['num'].'个月（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    if($discountArr['optimum']['discount_type']==2){
                        $discount_type='达到按'.$discountArr['optimum']['quarter'].'个季度（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    }else if($discountArr['optimum']['discount_type']==3){
                        $discount_type='达到按'.$discountArr['optimum']['num'].'年（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    }
                    $orderDataTmp=array('rate'=>$discountArr['optimum']['rate'],'diy_type'=>1,'diy_content'=>$discount_type);
                    if(!empty($extra_data) && is_array($extra_data)){
                        $extra_data['optimum']=$discountArr['optimum'];
                    }else{
                        $extra_data=array();
                        $extra_data['optimum']=$discountArr['optimum'];
                    }
                    $orderDataTmp['extra_data']=json_encode($extra_data,JSON_UNESCAPED_UNICODE);
                    $service_house_new_cashier->saveOrder($whereArrTmp,$orderDataTmp);
                }
                $discount_money += $discountArr['discount_money'];
            }
            $pay_money=$pay_money-$discount_money;
        }

        if (!empty($param)&&!empty($param['deposit_type'])){
            if ($pay_money>$param['deposit_money']){
                $pay_money = $pay_money-$param['deposit_money'];
            }else{
                $pay_money=0;
            }

        }else{
            $param['deposit_money']=0;
        }
        $total_money = formatNumber($total_money,2,1);
        $pay_money = formatNumber($pay_money,2,1);
        $service_house_new_cashier->saveOrderSummary(['summary_id'=>$summary_id],['deposit_money'=>$param['deposit_money'],'total_money'=>$total_money,'pay_money'=>$pay_money,'pay_amount_points'=>$pay_money*100]);
        $service_user = new UserService();
        $user = $service_user->getUser($summaryData['uid'],'uid');
        if($user){
            //$score = $this->get_score($summary_id,$user,false); 支付前掉传的 传$summary_id 是不对的 必须传$plat_order_id
        }
        if ($pay_money==0){
            $res = $this->offlineAfterPay($summary_id);
        }else{
            if($pay_type == 2|| $pay_type == 22){
                $res = $this->offlineAfterPay($summary_id);
            }
            if($pay_type == 3){
                $show_scrcu=cfg('show_scrcu');
                if (empty($show_scrcu)){
                    throw new \think\Exception("暂未对接扫码枪支付");
                }
                $service_pay = new PayService();

                $PayChannel=(new PayChannel)->getOne(['channel'=>'hqpay','switch'=>1]);


                if($PayChannel && !$PayChannel->isEmpty()){
                    $PayChannel= $PayChannel->toArray();
                }else{
                    $PayChannel= array();
                }
                //todo 是否开启环球支付
                if($PayChannel){
                    $params = $service_pay->getChannelParam($PayChannel['id']);
                    if(empty($params)){
                        throw new \think\Exception("请先配置环球汇通聚合支付参数！");
                    }
                }else{
                    //todo 四川农信支付
                    $service_community_pay = new CommunityPayService();
                    $params = $service_community_pay->getVillageScrcu($village_id);
                }
                if($params){
                    $plat_order = array(
                        'business_type' => 'village_new_pay',
                        'business_id' => $summary_id,
                        'order_name' => count($order_list)>1?'多缴费订单':$now_order['order_name'],
                        'uid' => $summaryData['pay_uid'],
                        'total_money' => $pay_money,
                        'wx_cheap' => 0,
                        'add_time'=>time(),
                    );
                    $service_plat_order = new PlatOrderService();
                    $service_plat_pay = new PlatPayService(0,0,0,$village_id);
                    try {
                        $payResult = $service_plat_pay->scanPay($auth_code, $pay_money);
                    } catch (\Exception $e) {
                        if ($e->getMessage()=="支付通道未配置！"){
                            throw new \think\Exception("支付通道未配置！");
                        }else{
                            throw new \think\Exception($e->getMessage(), $e->getCode());
                        }

                    }
                    fdump_api([$payResult,$auth_code, $pay_money],'scanPay_1215',1);
                    if($payResult['status'] == 1){
                        $payOrderParam['pay_type'] = $payResult['pay_type'];
                        $payOrderParam['paid_orderid'] = $payResult['order_no'];
                        $payOrderParam['is_own'] = $payResult['is_own'];
                        $payOrderParam['pay_money'] = $pay_money;
                        $plat_order['pay_type'] = $payResult['pay_type'];
                        $plat_order['pay_money'] = $pay_money;
                        $plat_order['orderid'] = $payResult['order_no'];
                        $plat_order['third_id'] = $payResult['transaction_no'];
                        $plat_order['pay_time'] = time();
                        $plat_order['paid'] = 1;
                        fdump_api([$plat_order],'scanPay_1215',1);
                        $plat_id = $service_plat_order->addPlatOrder($plat_order);
                        if ($plat_id>0){
                            $db_pay_order_info=new PayOrderInfo();
                            $payOrderInfo=$db_pay_order_info->getByOrderNo($payResult['order_no']);
                            if (!empty($payOrderInfo)){
                                $db_pay_order_info->updateById($payOrderInfo['id'],['business_order_id'=>$plat_id]) ;
                            }
                        }
                        fdump_api([$plat_id,$plat_order],'scanPay_1215',1);
                        //支付成功
                        $res = $this->offlineAfterPay($summary_id);
                        fdump_api([$res,$summary_id,$payOrderParam],'scanPay_1215',1);
                        return ['status'=>1,'info'=>$payOrderParam];
                    }elseif($payResult['status'] == 2){
                        // 正在支付
                        $payOrderParam['pay_type'] = $payResult['pay_type'];
                        $payOrderParam['paid_orderid'] = $payResult['order_no'];
                        $payOrderParam['summary_id'] = $summary_id;
                        $plat_order['pay_money'] = $pay_money;
                        $plat_id = $service_plat_order->addPlatOrder($plat_order);
                        if ($plat_id>0){
                            $db_pay_order_info=new PayOrderInfo();
                            $payOrderInfo=$db_pay_order_info->getByOrderNo($payResult['order_no']);
                            if (!empty($payOrderInfo)){
                                $db_pay_order_info->updateById($payOrderInfo['id'],['business_order_id'=>$plat_id]) ;
                            }
                        }
                        if(empty($PayChannel) && $payResult['order_no']){
                            // todo 目前只对接了 环球和农信扫码支付（不能同时支持） 为空就是农信
                            $record = [
                                'order_number' => $payResult['order_no'],
                                'order_type' => 'pay_order_info',
                                'limit' => 0,
                                'over' => 0,
                                'add_time' => time(),
                            ];
                            Db::name('Scrcu_record')->insertGetId($record);//支付记录，保险起见做主动查询支付结果的。
                        }
                        return ['status'=>2,'info'=>$payOrderParam];
                    }else{
                        return ['status'=>0];
                    }
                }else{
                    return ['status'=>0];
                }
            }
            if($pay_type == 1){
                $service_recognition = new RecognitionService();
                if (cfg('pay_farmersbankpay_open')){
                    $data = $service_recognition->getWxTmpQrcode($summary_id);
                }else{
                    $data = $service_recognition->getTmpQrcode($summary_id*1+300000000);
                }

                return $data;
            }
        }

        return true;
    }

    /**
     * 押金解冻
     * @author:zhubaodi
     * @date_time: 2022/6/13 10:14
     */
    public function editFrozenlog($data){
        $service_house_new_cashier = new HouseNewCashierService();
        $db_house_new_deposit_log=new HouseNewDepositLog();
        $db_house_new_deposit_frozen_log=new HouseNewDepositFrozenLog();
        $where=['order_id'=>$data['order_id']];
        $order_deposit_info=$service_house_new_cashier->getInfo($where,'order_id,deposit_money,room_id,summary_id,role_id,village_id');
        $res=0;
        if (!empty($order_deposit_info)&&$order_deposit_info['deposit_money']>0){
            $frozen_log=$db_house_new_deposit_frozen_log->get_one(['order_id'=>$order_deposit_info['order_id'],'type'=>1]);
            $deposit_log=$db_house_new_deposit_log->get_one(['room_id'=>$order_deposit_info['room_id']]);
            if (!empty($frozen_log)){
                $f_res=$db_house_new_deposit_frozen_log->save_one(['order_id'=>$order_deposit_info['order_id'],'type'=>1],['type'=>$data['type'],'desc'=>'订单取消支付']);
                if ($f_res>0&&$data['type']==3){
                    if (!empty($deposit_log)){
                       $total_money=$deposit_log['total_money'];
                    }else{
                        $total_money=0;
                    }
                    $deposit_money11=$order_deposit_info['deposit_money']+$total_money;
                    $log_data=[
                        'order_id'=>$order_deposit_info['order_id'],
                        'order_no'=>'',
                        'type'=>1,
                        'before_money'=>$total_money,
                        'money'=>$order_deposit_info['deposit_money'],
                        'total_money'=>$deposit_money11,
                        'role_id'=>$order_deposit_info['role_id'],
                        'room_id'=>$order_deposit_info['room_id'],
                        'village_id'=>$order_deposit_info['village_id'],
                        'add_time'=>time(),
                    ];
                    $res=$db_house_new_deposit_log->addOne($log_data);
                }elseif($f_res>0){
                    $res=1;
                }
            }
        }else{
            $res=1;
        }
        return $res;
    }

    /**冻结押金
     * @author:zhubaodi
     * @date_time: 2022/6/13 10:14
     */
    public function addFrozenlog($data){
        $service_house_new_cashier = new HouseNewCashierService();
        $db_house_new_deposit_log=new HouseNewDepositLog();
        $db_house_new_deposit_frozen_log=new HouseNewDepositFrozenLog();
        $where=['order_id'=>$data['order_id']];
        $order_deposit_info=$service_house_new_cashier->getInfo($where,'order_id,deposit_money,room_id,summary_id,role_id,village_id');
        $res=0;
      //  print_r([$order_deposit_info,$data['deposit_money']]);die;
        if (!empty($order_deposit_info)&&$data['deposit_money']>0){
            $order_summary_info=$service_house_new_cashier->getOrderSummary(['summary_id'=>$order_deposit_info['summary_id']],'summary_id,order_no');
            $frozen_log=$db_house_new_deposit_frozen_log->get_one(['order_id'=>$order_deposit_info['order_id'],'type'=>1]);
            $deposit_log=$db_house_new_deposit_log->get_one(['room_id'=>$order_deposit_info['room_id']]);
          //   print_r([$frozen_log,$deposit_log]);die;
            if (empty($frozen_log)){
                if (!empty($deposit_log)&&$deposit_log['total_money']>=$data['deposit_money']){
                    $deposit_money11=$deposit_log['total_money']-$data['deposit_money'];
                    $frozen_log_data=[
                        'order_id'=>$order_deposit_info['order_id'],
                        'type'=>1,
                        'before_money'=>$deposit_log['total_money'],
                        'money'=>$data['deposit_money'],
                        'total_money'=>$deposit_money11,
                        'role_id'=>$order_deposit_info['role_id'],
                        'room_id'=>$order_deposit_info['room_id'],
                        'village_id'=>$order_deposit_info['village_id'],
                        'desc'=>'订单发起支付，冻结押金',
                        'add_time'=>time(),
                    ];
                //     print_r($frozen_log_data);die;
                    $f_res=$db_house_new_deposit_frozen_log->addOne($frozen_log_data);
                    if ($f_res>0){
                            $log_data=[
                                'order_id'=>$order_deposit_info['order_id'],
                                'order_no'=>isset($order_summary_info['order_no'])?$order_summary_info['order_no']:'',
                                'type'=>2,
                                'before_money'=>$deposit_log['total_money'],
                                'money'=>$data['deposit_money'],
                                'total_money'=>$deposit_money11,
                                'role_id'=>$order_deposit_info['role_id'],
                                'room_id'=>$order_deposit_info['room_id'],
                                'village_id'=>$order_deposit_info['village_id'],
                                'add_time'=>time(),
                            ];
                        $res=$db_house_new_deposit_log->addOne($log_data);
                    }
                }

            }
        }
        return $res;
    }

    /**
     * 移动管理端收银台生成支付账单
     * @author lijie
     * @date_time 2021/07/08
     * @param array $order_list
     * @param int $village_id
     * @return bool|int|string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function frontCashierGoPay($order_list=[],$village_id=0,$param=[])
    {
        $service_house_village = new HouseVillageService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        $db_house_new_deposit_log=new HouseNewDepositLog();
        if(empty($order_list)){
            return false;
        }
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $summaryData=array();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $summaryData['village_id'] = $village_id;
        $summaryData['property_id'] = $village_info['property_id'];
        $now_order = $order_list[0];
        if (!empty($now_order['room_id'])&&!empty($param['deposit_type'])){
            $where['village_id']=$village_id;
            $where['room_id']=$now_order['room_id'];
            $info=$db_house_new_deposit_log->get_one($where,'total_money,id');
            if ($info['total_money']!=$param['deposit_money']){
                throw new \think\Exception("押金总额有变化，请刷新页面，重新操作");
            }
        }
        if($now_order['room_id']){
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$now_order['room_id']],['type','in','0,3'],['status','=',1]],'pigcms_id,name,phone,uid');
            if($user_info && is_object($user_info) && !$user_info->isEmpty()){
                $user_info=$user_info->toArray();
            }
            $summaryData['room_id'] = $now_order['room_id'];
            if(isset($now_order['position_id']) && $now_order['position_id']>0){
                $summaryData['position_id'] = $now_order['position_id'];
            }
        }else{
            $summaryData['position_id'] = $now_order['position_id'];
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$now_order['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,uid,name,phone');
            */
            $user_info=$service_house_new_cashier->getRoomUserBindByPosition($now_order['position_id'],$village_id);
        }
        $orderData=array();
        if(!empty($user_info)){
            $summaryData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $summaryData['pay_uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $summaryData['pigcms_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $summaryData['pay_bind_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $orderData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $orderData['pigcms_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $orderData['pay_bind_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $orderData['name'] = isset($user_info['name'])?$user_info['name']:0;
            $orderData['phone'] = isset($user_info['phone'])?$user_info['phone']:0;
            $orderData['pay_bind_name'] = isset($user_info['name'])?$user_info['name']:0;
            $orderData['pay_bind_phone'] = isset($user_info['phone'])?$user_info['phone']:0;
        }

        $summaryData['order_no'] =  build_real_orderid($summaryData['pay_uid']);
        $summaryData['is_paid'] = 2;
        $summary_id = $service_house_new_cashier->addOrderSummary($summaryData);
        $total_money = 0;
        $pay_money = 0;
        $orderData['summary_id'] = $summary_id;

        $orderData['is_paid'] = 2;
        $deposit_money=$param['deposit_money'];
        $rule_order_discount = array();
        foreach ($order_list as $value){
            $total_money += $value['total_money'];
            $pay_money += getFormatNumber($value['late_payment_money'] + $value['modify_money']);
            if ($is_grapefruit_prepaid == 1) {
                if(isset($value['detail_order']) && !empty($value['detail_order'])){
                    foreach ($value['detail_order'] as $dv) {
                        $month_num=$dv['service_month_num'];
                        if(isset($dv['unify_flage_id']) && !empty($dv['unify_flage_id'])){
                            $oneChargeRule=$service_house_new_cashier->getOneChargeRule(array('id' => $dv['rule_id']),'id,charge_name,charge_valid_type');
                            $charge_valid_type=!empty($oneChargeRule)&&isset($oneChargeRule['charge_valid_type']) ? $oneChargeRule['charge_valid_type']:0;
                            if($charge_valid_type==3){
                                $month_num=$month_num/12;
                            }
                        }
                        if (isset($rule_order_discount[$dv['rule_id']])) {
                            $rule_order_discount[$dv['rule_id']]['num'] += $month_num;
                            $rule_order_discount[$dv['rule_id']]['money'] += ($dv['modify_money'] + $dv['late_payment_money']);
                            $rule_order_discount[$dv['rule_id']]['order_ids'][]=$dv['order_id'];
                        } else {
                            $rule_order_discount[$dv['rule_id']] = array();
                            $rule_order_discount[$dv['rule_id']]['rule_id'] = $dv['rule_id'];
                            $rule_order_discount[$dv['rule_id']]['num'] = $month_num;
                            $rule_order_discount[$dv['rule_id']]['money'] = ($dv['modify_money'] + $dv['late_payment_money']);
                            $rule_order_discount[$dv['rule_id']]['order_ids']= array($dv['order_id']);
                        }
                    }
                }elseif(isset($value['rule_id'])){
                    $fmonth_num=$value['service_month_num'];
                    if(isset($value['unify_flage_id']) && !empty($value['unify_flage_id'])){
                        $oneChargeRule=$service_house_new_cashier->getOneChargeRule(array('id' => $value['rule_id']),'id,charge_name,charge_valid_type');
                        $charge_valid_type=!empty($oneChargeRule)&&isset($oneChargeRule['charge_valid_type']) ? $oneChargeRule['charge_valid_type']:0;
                        if($charge_valid_type==3){
                            $fmonth_num=$fmonth_num/12;
                        }
                    }
                    if (isset($rule_order_discount[$value['rule_id']])) {
                        $rule_order_discount[$value['rule_id']]['num'] += $fmonth_num;
                        $rule_order_discount[$value['rule_id']]['money'] += ($value['modify_money'] + $value['late_payment_money']);
                        $rule_order_discount[$value['rule_id']]['order_ids'][]=$value['order_id'];
                    } else {
                        $rule_order_discount[$value['rule_id']] = array();
                        $rule_order_discount[$value['rule_id']]['rule_id'] = $value['rule_id'];
                        $rule_order_discount[$value['rule_id']]['num'] = $fmonth_num;
                        $rule_order_discount[$value['rule_id']]['money'] = ($value['modify_money'] + $value['late_payment_money']);
                        $rule_order_discount[$value['rule_id']]['order_ids']= array($value['order_id']);
                    }
                }
            }
            $where = [];
            if($value['position_id'])
                $where[] = ['position_id','=',$now_order['position_id']];
            else
                $where[] = ['room_id','=',$now_order['room_id']];
            $where[] = ['add_time','<=',time()];
            $where[] = ['project_id','=',$value['project_id']];
            $where[] = ['is_paid','=',2];
            $where[] = ['is_refund','=',1];
            $where[] = ['is_discard','=',1];
            //押金解冻
            $frozen_data=['order_id'=>$value['order_id'],'type'=>3];
            $this->editFrozenlog($frozen_data);
            if (!empty($param['deposit_type'])&&$deposit_money>0){
                if ($deposit_money>$pay_money){
                    $orderData['deposit_money'] = $pay_money;
                    $deposit_money=$deposit_money-$pay_money;
                }else{
                    $orderData['deposit_money'] = $deposit_money;
                    $deposit_money=0;
                }
                //冻结押金
                $frozen_log_data=[
                    'order_id'=>$value['order_id'],
                    'deposit_money'=>$orderData['deposit_money'],
                ];
                $this->addFrozenlog($frozen_log_data);
            }
            if ($is_grapefruit_prepaid == 1) {
                $orderData['rate']=0;
                $orderData['diy_type']=0;
                $orderData['diy_content']='';
            }
            $service_house_new_cashier->saveOrder($where,$orderData);
        }
        $discount_money=0;
        if ($is_grapefruit_prepaid == 1 && !empty($rule_order_discount)) {
            foreach ($rule_order_discount as $kk => $rv) {
                $rv['num']=round($rv['num'],2);
                $rv['num']=floor($rv['num']);
                $rv['num']=$rv['num']*1;
                $discountArr = $service_house_new_cashier->getChargePrepaidDiscount($rv['rule_id'], $rv);
                $rule_order_discount[$kk]['optimum'] = $discountArr['optimum'];
                $rule_order_discount[$kk]['discount_money'] = $discountArr['discount_money'];
                if(!empty($discountArr['optimum']) && !empty($rv['order_ids'])){
                    $whereArrTmp=array(['order_id','in',$rv['order_ids']]);
                    $discount_type='达到按'.$discountArr['optimum']['num'].'个月（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    if($discountArr['optimum']['discount_type']==2){
                        $discount_type='达到按'.$discountArr['optimum']['quarter'].'个季度（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    }else if($discountArr['optimum']['discount_type']==3){
                        $discount_type='达到按'.$discountArr['optimum']['num'].'年（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    }
                    $orderDataTmp=array('rate'=>$discountArr['optimum']['rate'],'diy_type'=>1,'diy_content'=>$discount_type);
                    if(!empty($extra_data) && is_array($extra_data)){
                        $extra_data['optimum']=$discountArr['optimum'];
                    }else{
                        $extra_data=array();
                        $extra_data['optimum']=$discountArr['optimum'];
                    }
                    $orderDataTmp['extra_data']=json_encode($extra_data,JSON_UNESCAPED_UNICODE);
                    $service_house_new_cashier->saveOrder($whereArrTmp,$orderDataTmp);
                }
                $discount_money += $discountArr['discount_money'];
            }
            $pay_money=$pay_money-$discount_money;
        }
        /*$plat_order = array(
            'business_type' => 'village_new_pay',
            'business_id' => $summary_id,
            'order_name' => $now_order['order_name'],
            'uid' => $now_order['uid'],
            'total_money' => $pay_money,
            'wx_cheap' => 0,
            'add_time'=>time(),
        );
        $service_plat_order = new PlatOrderService();
        $plat_id = $service_plat_order->addPlatOrder($plat_order);*/
        if (!empty($param['deposit_type'])){
            if ($pay_money>$param['deposit_money']){
                $pay_money = $pay_money-$param['deposit_money'];
            }else{
                $pay_money=0;
            }

        }else{
            $param['deposit_money']=0;
        }
        $total_money = formatNumber($total_money,2,1);
        $pay_money = formatNumber($pay_money,2,1);
        $service_house_new_cashier->saveOrderSummary(['summary_id'=>$summary_id],['deposit_money'=>$param['deposit_money'],'total_money'=>$total_money,'pay_money'=>$pay_money]);
        return ['order_id'=>$summary_id,'summary_id'=>$summary_id,'total_money'=>sprintf('%.2f',$total_money ),'pay_money'=>sprintf('%.2f',$pay_money )];
    }

    /**
     * 线下支付回调
     * @author lijie
     * @date_time 2021/06/29
     * @param int $summary_id
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * pay_order_info_id 是pay_order_info表id
     */
    public function offlineAfterPay($summary_id=0,$is_other=1,$pay_order_info_id=0)
    {
        if (!$summary_id) {
            return array('error_code'=>1,'msg'=>'参数传递出错！');
        }
        Db::startTrans();
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $village_nmv_card = new HouseVillageNmvCard();
        $summary_order_info = $db_house_new_pay_order_summary->getOne(['summary_id'=>$summary_id],true);
        if($summary_order_info['is_paid'] == 1 && $is_other){
            Db::rollback();
            return array('error_code'=>false,'msg'=>'该订单已经支付！');
        }
        $nowtime=time();
        $res = $db_house_new_pay_order_summary->saveOne(['summary_id'=>$summary_id],['is_paid'=>1,'pay_time'=>$nowtime]);
        if(!$res && $is_other){
            Db::rollback();
            return array('error_code'=>false,'msg'=>'支付失败！');
        }
        /*$service_plat_order = new PlatOrderService();
        $plat_order_info = $service_plat_order->getPlatOrder(['business_id'=>$summary_id,'business_type'=>'village_new_pay']);
        if (empty($plat_order_info)){
            return array('error_code'=>false,'msg'=>'订单信息错误！'); 
        }*/
        $db_house_new_pay_order = new HouseNewPayOrder();
        $order_list = $db_house_new_pay_order->getList(['o.summary_id'=>$summary_id],'o.*',0,0,'o.order_id ASC');
        if (!$order_list) {
            Db::rollback();
            return array('error_code'=>1,'msg'=>'没有子订单！');
        }
        
        $village_id=$summary_order_info['village_id'];
        $messageDatas=array();
        $messageDatas['property_id']=$summary_order_info['property_id'];
        $messageDatas['pay_money']=$summary_order_info['pay_money'];
        $messageDatas['type']=2;
        $messageDatas['order_id']=$summary_id;
        $messageDatas['summary_id']=$summary_id;
        $updateData = [];
        $updateData['is_paid'] = 1;
        $updateData['pay_time'] = time();
        $updateData['pay_type'] = $summary_order_info['pay_type'];
        $updateData['offline_pay_type'] = $summary_order_info['offline_pay_type'];
        $updateData['order_pay_type'] = $summary_order_info['order_pay_type'];
        $updateData['update_time'] = time();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $db_house_new_order_log = new HouseNewOrderLog();
        $db_house_new_deposit_log = new HouseNewDepositLog();

        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$summary_order_info['property_id']]);
        fdump_api([$order_list,$summary_id],'park_new_pay_0610',1);
        $countnum=0;

        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $car_number='';
        $messageDatas['order_type'] = [];
        $offline_pay = (new NewBuildingService())->getHouseNewOfflinePayFindMethod($summary_order_info['property_id'],'id,name');
        $messageDatas['pay_type_str'] = (new NewBuildingService())->getOrderPayTypeMethod($summary_id,$offline_pay,$summary_order_info['village_balance']);
        $save_paid_order_record=array('source_from'=>1);
        $save_paid_order_record['business_type']='village_new_pay';
        $save_paid_order_record['uid']=$summary_order_info['pay_uid'] ? $summary_order_info['pay_uid']:$summary_order_info['uid'];
        $save_paid_order_record['order_id']=$summary_id;
        $save_paid_order_record['order_no']=$summary_order_info['order_no'];
        $save_paid_order_record['table_name']='house_new_pay_order_summary';
        $save_paid_order_record['order_money']=$summary_order_info['pay_money'];
        $save_paid_order_record['is_own']=1;
        $save_paid_order_record['pay_type']='offline';
        $save_paid_order_record['pay_type_from']=$summary_order_info['offline_pay_type'];
        if($summary_order_info['village_balance']>=$summary_order_info['pay_money']){
            $save_paid_order_record['pay_type']='offline_balance';
            $save_paid_order_record['balance_money']=$summary_order_info['pay_money'];
            $save_paid_order_record['pay_type_from']='village_balance';
        }else if($summary_order_info['system_balance']>=$summary_order_info['pay_money']){
            $save_paid_order_record['pay_type']='offline_balance';
            $save_paid_order_record['balance_money']=$summary_order_info['pay_money'];
            $save_paid_order_record['pay_type_from']='system_balance';
        }else{
            $tmp_pay_money=$summary_order_info['pay_money']-$summary_order_info['village_balance']-$summary_order_info['system_balance'];
            $save_paid_order_record['pay_money']=$tmp_pay_money>0 ? $tmp_pay_money:0;
            $save_paid_order_record['balance_money']=$summary_order_info['village_balance']+$summary_order_info['system_balance'];
        }
        $save_paid_order_record['pay_time']=$nowtime;
        $save_paid_order_record['room_id']=$summary_order_info['room_id'];
        $save_paid_order_record['bind_user_id']=$summary_order_info['pigcms_id'] ? $summary_order_info['pigcms_id']:$summary_order_info['pay_bind_id'];
        $save_paid_order_record['property_id']=$summary_order_info['property_id'];
        $save_paid_order_record['village_id']=$village_id;
        $position_id=0;

        $house_type_arr=array();
        $sub_order_ids=array();
        $business_name='';
        $tmp_order_type='';
        $tmp_order_type_v='';
        foreach ($order_list as $v){
            $countnum++;
            if($village_id<1 && $v['village_id']>0){
                $village_id=$v['village_id'];
            }
            if($v['order_type']){
                $house_type_arr[]=$v['order_type'];
            }
            if(isset($v['phone']) && $v['phone']){
                $save_paid_order_record['u_phone']=$v['phone'];
            }
            if(isset($v['pay_bind_phone']) && $v['pay_bind_phone']){
                $save_paid_order_record['u_phone']=$v['pay_bind_phone'];
            }
            if(isset($v['name']) && $v['name']){
                $save_paid_order_record['u_name']=$v['name'];
            }
            if(isset($v['pay_bind_name']) && $v['pay_bind_name']){
                $save_paid_order_record['u_name']=$v['pay_bind_name'];
            }
            $business_name=$v['order_name'];
            $sub_order_ids[]=$v['order_id'];
            if($v['position_id']>0){
                $position_id=$v['position_id'];
            }
            $updateData['pay_money'] = $v['modify_money'] + $v['late_payment_money'];
            if ($v['deposit_money']>0){
                $deposit_info=$db_house_new_deposit_log->get_one(['order_id'=>$v['order_id'],'type'=>2]);
                if (empty($deposit_info)){
                    $deposit_info1=$db_house_new_deposit_log->get_one(['room_id'=>$v['room_id']]);
                    if ($deposit_info1['total_money']>$v['deposit_money']){
                        $deposit_money11= $deposit_info1['total_money']-$v['deposit_money'];
                    }else{
                        $deposit_money11=0;
                    }
                    $db_house_new_deposit_log->addOne([
                        'order_id'=>$v['order_id'],
                        'order_no'=>$summary_order_info['order_no'],
                        'type'=>2,
                        'before_money'=>$deposit_info1['total_money'],
                        'money'=>$v['deposit_money'],
                        'total_money'=>$deposit_money11,
                        'role_id'=>$v['role_id'],
                        'room_id'=>$v['room_id'],
                        'village_id'=>$v['village_id'],
                        'add_time'=>time(),
                    ]);
                    //押金解冻
                    $frozen_data=['order_id'=>$v['order_id'],'type'=>2];
                    $this->editFrozenlog($frozen_data);
                }
                if ($updateData['pay_money']>$v['deposit_money']){
                    $updateData['pay_money']=$updateData['pay_money']-$v['deposit_money'];
                }else{
                    $updateData['pay_money']=0;
                }
            }
            if ($summary_order_info['pay_type']!=2&& $summary_order_info['pay_type']!=22){
                $updateData['pay_amount_points'] = $updateData['pay_money']*100;
            }
            $service_end_time = $v['service_end_time'];
            $service_start_time = $v['service_start_time'];
            $updateData['service_start_time']=$v['service_start_time'];
            $updateData['service_end_time']=$v['service_end_time'];
            if($v['order_type'] == 'non_motor_vehicle'){ // 非机动车缴费
                // 更新非机动车卡到期时间
                $tmp_order_type='non_motor_vehicle';
                $village_nmv_card->updateCardInfo(['id' => $v['position_id']],['expiration_time' => $service_end_time]);
                $send_nmv_card = new CloudIntercomService();
                $send_nmv_card->sendNmvToDevice($v['position_id']);
            }
            $rule_info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$v['rule_id']],'n.charge_type,r.*,p.type');
            if($v['order_type'] != 'non_motor_vehicle' && ($rule_info['type'] == 2||$v['order_type'] == 'park_new')){
                if($v['position_id']){
                    $last_order = $db_house_new_order_log->getOne([['position_id','=',$v['position_id']],['order_type','=',$v['order_type']],['project_id','=',$v['project_id']]],true,'id DESC');
                } else{
                    $last_order = $db_house_new_order_log->getOne([['room_id','=',$v['room_id']],['order_type','=',$v['order_type']],['position_id','=',0],['project_id','=',$v['project_id']]],true,'id DESC');
                }
                // 兼容老版停车收费
                if($v['order_type'] == 'park'){
                    if($v['position_id']){
                        $where22=[
                            ['position_id','=',$v['position_id']],
                            ['order_type','=',$v['order_type']],
                            ['project_id','=',0],
                        ];
                    }else{
                        $where22=[
                            ['room_id','=',$v['room_id']],
                            ['order_type','=',$v['order_type']],
                        ];
                    }
                    $new_order_log = $db_house_new_order_log->getOne($where22,true,'id DESC');
                    if(!empty($new_order_log)){
                        $last_order=$new_order_log;
                    }
                    fdump_api(['线下支付house_new_order_log表数据=='.__LINE__,($v['position_id'] ? '车场' : '房产'),$new_order_log],'park/xia_log',1);
                }elseif ($v['order_type'] == 'property'){
                    if($v['position_id']){
                        $where22=[
                            ['position_id','=',$v['position_id']],
                            ['order_type','=',$v['order_type']],
                        ];
                    }else{
                        $where22=[
                            ['room_id','=',$v['room_id']],
                            ['position_id','=',0],
                            ['order_type','=',$v['order_type']],
                        ];
                    }
                    $new_order_log = $db_house_new_order_log->getOne($where22,true,'id DESC');
                    if(!empty($new_order_log)){
                        $last_order=$new_order_log;
                    }
                    fdump_api(['线上支付house_new_order_log表数据=='.__LINE__,($v['position_id'] ? '车场' : '房产')],'park/shang_log',1);
                }
                if($last_order){
                    $last_order = $last_order->toArray();
                    if($last_order){
                        $updateData['service_start_time'] = $last_order['service_end_time']+1;
                        $updateData['service_start_time'] = strtotime(date('Y-m-d',$updateData['service_start_time']));
                        $service_start_time = $updateData['service_start_time'];
                        if($v['is_prepare'] == 1){
                            $cycle = $v['service_give_month_num'] + $v['service_month_num'];
                        }else{
                            $cycle = $v['service_month_num']?$v['service_month_num']:1;
                        }
                        if($rule_info['bill_create_set'] == 1){
                            $updateData['service_end_time'] = strtotime("+".$cycle." day",$updateData['service_start_time'])-1;
                        }elseif(isset($v['unify_flage_id']) && !empty($v['unify_flage_id'])){
                            $updateData['service_end_time'] =strtotime("+1 month",$updateData['service_start_time'])-1;
                        }elseif ($rule_info['bill_create_set'] == 2){
                            //todo 判断是不是按照自然月来生成订单
                            if(cfg('open_natural_month') == 1){
                                $updateData['service_end_time'] = strtotime("+".$cycle." month",$updateData['service_start_time'])-1;
                            }else{
                                $cycle = $cycle*30;
                                $updateData['service_end_time'] = strtotime("+".$cycle." day",$updateData['service_start_time'])-1;
                            }
                            fdump_api(['线下支付【账单生成周期设置 1：按日生成2：按月生成3：按年生成】 当前是'.$rule_info['bill_create_set'].'=='.__LINE__,(cfg('open_natural_month') == 1 ? '开启自然月' : '未开启自然月'),'天数：'.$cycle,'service_end_time：'.date('Y-m-d H:i:s',$updateData['service_end_time'])],'park/xia_log',1);
                        }else{
                            $updateData['service_end_time'] = strtotime("+".$cycle." year",$updateData['service_start_time'])-1;
                        }
                        $service_end_time = $updateData['service_end_time'];
                    }
                }else{
                    $updateData['service_start_time'] = $service_start_time;
                    $updateData['service_end_time'] = $service_end_time;
                }
                $db_house_new_order_log->addOne([
                    'order_id'=>$v['order_id'],
                    'project_id'=>$v['project_id'],
                    'order_type'=>$v['order_type'],
                    'order_name'=>$v['order_name'],
                    'room_id'=>$v['room_id'],
                    'position_id'=>$v['position_id'],
                    'property_id'=>$v['property_id'],
                    'village_id'=>$v['village_id'],
                    'service_start_time'=>$service_start_time,
                    'service_end_time'=>$service_end_time,
                    'add_time'=>time(),
                ]);
                if($v['order_type'] == 'property'){
                    $service_house_village_user_bind->saveUserBind([
                        ['vacancy_id','=',$v['room_id']],
                        ['type','in',[0,3]],
                        ['status','=',1],
                    ],['property_endtime'=>$service_end_time]);
                }
                 if($v['order_type'] == 'park_new'){
                     $car_number=$v['car_number'];
                     $tmp_order_type=$v['car_type'] ? $v['car_type']:'';
                     $tmp_order_type_v=$car_number;
                    $db_House_new_parking=new HouseNewParkingService();
                    $db_house_village_park_config=new HouseVillageParkConfig();
                    $db_house_village_parking_car=new HouseVillageParkingCar();
                    $db_house_village_parking_position=new HouseVillageParkingPosition();
                    $db_park_passage=new ParkPassage();
                    $db_house_village=new HouseVillage();
                    $db_park_system=new ParkSystem();
                    $db_park_total_record=new ParkTotalRecord();
                    $service_house_new_charge_prepaid=new HouseNewChargePrepaid();
                    $park_config=$db_house_village_park_config->getFind(['village_id'=>$v['village_id']]);
                    $park_sys_type=$park_config['park_sys_type'];
                    $house_village =$db_house_village->getOne($v['village_id'],'village_name');
                    $park_system =$db_park_system->getFind(['park_id'=>$v['village_id']]);
                    fdump_api([$v,$park_config,$house_village,$park_system],'children_position_log_0803',1);
                    //月租车缴费
                    if ($v['car_type']=='month_type'){
                        $prepaid_info= $service_house_new_charge_prepaid-> getList(['charge_rule_id'=>$v['rule_id']]);
                        $parking_position =$db_house_village_parking_position->getFind(['position_id'=>$v['position_id']]);
                        $parking_car = $db_house_village_parking_car->getHouseVillageParkingCarLists(['car_position_id'=>$parking_position['position_id']],'*',0);
                        $channel_number_arr =$db_park_passage->getColumn(['village_id'=>$v['village_id']],'channel_number');
                        $channel_number_str = implode(',', $channel_number_arr);
                        fdump_api([$prepaid_info,$parking_position,$parking_car,$channel_number_arr,$channel_number_str],'children_position_log_0803',1);
                        if (!$channel_number_str) {
                            $channel_number_str = '';
                        }
                        if (2!=$parking_position['position_pattern']) {
                            // 固定车位-共同使用一个月卡会员编号
                            if ($parking_position['card_id']) {
                                $now_car_id = $parking_position['card_id'];
                            } else {
                                $now_car_id = '1'.sprintf("%09d",$parking_position['position_id']);//月卡会员编号（收费系统唯一编号  是
                                $park_position_set['card_id'] = $now_car_id;
                            }
                            $address = $house_village['village_name'] .'车位：'.$parking_position['position_num'];
                        } else {
                            $address = $house_village['village_name'];
                        }
                        // 如果是虚拟停车位 对应每一个车生成唯一收费编号
                        $parking_car_type_arr = $db_House_new_parking->parking_car_type_arr;
                        if ($parking_position['end_time']<time()){
                            $park_end_time=strtotime(date('Y-m-d 23:59:59',(time()-86400)));
                        }else{
                            $park_end_time= $parking_position['end_time'];
                        }
                        $park_set = [];
                        $park_data['begin_time'] = $park_end_time+1;
                        if($v['is_prepare'] == 1){
                            if (!empty($prepaid_info)){
                                $prepaid_info=$prepaid_info->toArray();
                            }
                            if (!empty($prepaid_info)){
                                $prepaidInfo=$prepaid_info[0];
                                if ($prepaidInfo['give_cycle_datetype']==1){
                                    $park_end_time = strtotime("+".$v['service_give_month_num']." day",$park_end_time);
                                }elseif($prepaidInfo['give_cycle_datetype']==2){
                                    $park_end_time = strtotime("+".$v['service_give_month_num']." day",$park_end_time);
                                }elseif($prepaidInfo['give_cycle_datetype']==3){
                                    $park_end_time = strtotime("+".$v['service_give_month_num']." day",$park_end_time);
                                }
                            }

                            $cycle = $v['service_month_num'];
                        }else{
                            $cycle = $v['service_month_num']?$v['service_month_num']:1;
                        }
                        if($rule_info['bill_create_set'] == 1){
                            $park_data['end_time'] = strtotime("+".$cycle." day",$park_end_time);
                        }elseif ($rule_info['bill_create_set'] == 2){
                            //todo 判断是不是按照自然月来生成订单
                            if(cfg('open_natural_month') == 1){
                                $park_data['end_time'] = strtotime("+".$cycle." month",$park_end_time);
                            }else{
                                $cycle = $cycle*30;
                                $park_data['end_time'] = strtotime("+".$cycle." day",$park_end_time);
                            }
                        }else{
                            $park_data['end_time'] = strtotime("+".$cycle." year", $park_end_time);
                        }
                        $park_position_set['end_time']=$park_data['end_time'];
                        $db_house_village_parking_position->saveOne(['position_id'=>$v['position_id']],$park_position_set);
                        foreach($parking_car as $k=>$vv) {
                            if (intval($parking_position['end_time']) < intval(time())) {
                                $park_data['begin_time'] = time();
                            }
                            $park_set['start_time'] = $park_data['begin_time'];
                            $park_set['end_time'] = $park_data['end_time'];
                            if ($park_sys_type != 'D1') {
                                $park_data['park_id'] = $vv['village_id'];
                            }
                            $park_data['car_number'] = $vv['province'] . $vv['car_number'];
                            if ($now_car_id) {
                                $park_position_set['start_time'] = $park_data['begin_time'];
                                $park_position_set['end_time'] = $park_data['end_time'];
                            }
                            if ($park_sys_type == 'D5') {
                                //todo D5智慧停车 触发下发到设备
                                (new D5Service())->D5AddCar($vv['village_id'], $vv['card_id'], $park_set['start_time'], $park_set['end_time']);
                            } elseif ($park_sys_type == 'D6') {
                                //todo D6智慧停车 触发下发到设备
                                fdump_api(['D6智慧停车续费成功==' . __LINE__, $vv], 'd6_park/after_pay', 1);
                                (new D6Service())->d6synVehicle($vv['village_id'], $vv['card_id'], 0, $park_set);
                            }

                            //D3同步白名单到设备上
                            $white_record = [
                                'village_id' => $vv['village_id'],
                                'car_number' => $park_data['car_number']
                            ];
                            (new HouseVillageParkingService())->addWhitelist($white_record);
                            // 3.7月卡会员同步（停车云）
                            $park_data['remark'] = '';
                            $park_data['pid'] = '';
                            $service_name = 'month_member_sync';// 添加会员卡操作
                            if ($now_car_id) {
                                $card_id = $now_car_id;
                            } else {
                                $card_id = '2' . sprintf("%09d", $vv['car_id']);//月卡会员编号（收费系统唯一编号  是
                            }
                            // 同步储值卡
                            if ($parking_car_type_arr && $vv['parking_car_type'] && isset($parking_car_type_arr[$vv['parking_car_type']]) && $parking_car_type_arr[$vv['parking_car_type']]) {
                                $car_type_id = $parking_car_type_arr[$vv['parking_car_type']];
                            } else if ($vv['temporary_car_type']) {
                                $car_type_id = $vv['store_value_car_type'];
                            } else {
                                $car_type_id = '储值车A';
                            }
                            $park_set['card_id'] = $card_id;
                            if ($park_sys_type == 'D1' && $vv['card_id']) {
                                $park_data['is_edit'] = 1;
                            } elseif ($park_sys_type != 'D1') {
                                $park_data['operate_type'] = $vv['card_id'] ? '2' : '1';    //1 添加，2 编辑
                                if ($park_data['operate_type'] == 1) {
                                    $park_data['create_time'] = time();
                                } else {
                                    $park_data['update_time'] = time();
                                }
                                $park_data['price'] = $v['pay_money'];//实收金额
                                $park_data['channel_id'] = $channel_number_str;//月卡允许通行的通道编号
                                $park_data['amount_receivable'] = $v['pay_money'];//应收金额
                            }
                            if ($park_sys_type == 'D7') {
                                if (!empty($v['parking_car_type']) && $v['parking_car_type'] < 17) {
                                    $res_park = $db_house_village_parking_car->editHouseVillageParkingCar(['car_id' => $v['car_id']], $park_set);
                                    fdump_api([$res_park, $park_position_set, $parking_position['position_id']], 'D3park/mouth_type_0718', 1);
                                    if ($park_position_set) {
                                        $db_house_village_parking_position->saveOne(['position_id' => $v['car_position_id']], $park_position_set);
                                    }
                                }
                            } else {
                                $park_data['name'] = $vv['car_user_name'];
                                $park_data['car_type_id'] = $car_type_id;
                                $park_data['tel'] = $vv['car_user_phone'] ? $vv['car_user_phone'] : '';
                                $park_data['address'] = $address;
                                $park_data['p_lot'] = strval($parking_position['position_num']);

                                $park_data['card_id'] = $card_id;
                                $json_data['msg_id'] = createRandomStr(8, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(12, true, true);//是
                                $json_data['data'] = $park_data;
                                $json_data['service_name'] = $service_name;

                                $post_data['unserialize_desc'] = serialize($json_data);
                                $post_data['status'] = 2;
                                $post_data['card_id'] = $card_id;
                                $post_data['msg_id'] = $json_data['msg_id'];
                                $post_data['village_id'] = $v['village_id'];
                                $post_data['park_id'] = $park_system['park_id'];
                                $post_data['token'] = $park_system['token'];
                                $post_data['car_number'] = $park_data['car_number'] ? $park_data['car_number'] : '';
                                $post_data['service_name'] = $service_name;
                                $post_data['create_time'] = time();
                                $res = $db_park_total_record->add($post_data);
                                // 没有配置停车场，或者数据添加成功都保存车辆信息。
                                if (!($park_system['park_id'] && $park_system['token']) || $res) {
                                    $db_house_village_parking_car->editHouseVillageParkingCar(['car_id' => $vv['car_id']], $park_set);
                                    if ($park_position_set) {
                                        $db_house_village_parking_position->saveOne(['position_id' => $parking_position['position_id']], $park_position_set);
                                    }
                                } else {
                                    //2021/2/1 多车多位  修改 start
                                    /* $infos = D('House_village_parking_car')->bind_parking_position($card_id);
                                     if($infos){
                                         $park_data['car_group'] = intval($infos['car_group']);
                                         $park_data['p_lot_number'] = intval($infos['p_lot_number']);
                                     }*/
                                    //2021/2/1 多车多位  修改 end
                                    $json_data['msg_id'] = createRandomStr(8, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(12, true, true);//是
                                    $json_data['data'] = $park_data;
                                    $json_data['service_name'] = $service_name;
                                    $post_data['unserialize_desc'] = serialize($json_data);
                                    $post_data['status'] = 2;
                                    $post_data['card_id'] = $card_id;
                                    $post_data['msg_id'] = $json_data['msg_id'];
                                    $post_data['village_id'] = $vv['village_id'];
                                    $post_data['park_id'] = $park_system['park_id'];
                                    $post_data['token'] = $park_system['token'];
                                    $post_data['car_number'] = $park_data['car_number'] ? $park_data['car_number'] : '';
                                    $post_data['service_name'] = $service_name;
                                    $post_data['create_time'] = time();
                                    $res = $db_park_total_record->add($post_data);//月卡会员下发
                                    if ($res) {
                                        $db_house_village_parking_car->editHouseVillageParkingCar(['car_id' => $vv['car_id']], $park_set);
                                        if ($park_position_set) {
                                            $db_house_village_parking_position->saveOne(['position_id' => $parking_position['position_id']], $park_position_set);
                                        }
                                    }
                                }
                            }
                        }
                       // fdump_api([$park_position_set,$park_set,$park_config],'children_position_log_0803',1);
                        //子母车位续费同步到期时间
                        if ($park_config['children_position_type']==1){
                            $parking_position_arr =$db_house_village_parking_position->getColumn(['parent_position_id'=>$v['position_id'],'children_type'=>2],'position_id');
                            fdump_api([$v['position_id'],$parking_position_arr,$park_position_set],'children_position_log_0803',1);
                            if (!empty($parking_position_arr)){
                                $db_house_village_parking_position->saveOne(['position_id'=>$parking_position_arr],$park_position_set);
                                $park_car_arr=$db_house_village_parking_car->get_column(['car_position_id'=>$parking_position_arr],'car_id');
                                fdump_api([$park_car_arr],'children_position_log_0803',1);
                                if (!empty($park_car_arr)&&isset($park_set)&&!empty($park_set)){
                                    $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$park_car_arr],$park_set);
                                }
                            }
                        }
                        $updateData['service_start_time']=$park_data['begin_time'];
                        $updateData['service_end_time']=$park_data['end_time'];
                    }
                }
                if($v['order_type'] == 'park' || $v['order_type'] == 'parking_management'){
                    fdump_api([$v['position_id'],$v['order_type'],$v['village_id']],'children_position_log_0803',1);
                    if($v['position_id']){
                        $service_house_village_parking->editParkingPosition(['position_id'=>$v['position_id']],['end_time'=>$service_end_time]);
                        $service_house_village_parking->editParkingCar(['car_position_id'=>$v['position_id']],['end_time'=>$service_end_time]);
                    }
                }
                if($v['order_type'] == 'property'){
                    try {
                        $userList = $service_house_village_user_bind->getList([['vacancy_id','=',$v['room_id']], ['status','=',1]], 'uid, pigcms_id');
                        $houseFaceImgService = new HouseFaceImgService();
                        foreach ($userList as $userInfo) {
                            $houseFaceImgService->commonUserToBox($userInfo['uid'], $userInfo['pigcms_id']);
                        }
                    } catch (\Exception $e){
                        fdump_api($e->getMessage(),'$houseFaceImgService');
                    }
                }
            }
            $updateData['is_discard'] = 1;
            $updateData['from'] = 1;
            $updateData['discard_reason'] = '';
            if($is_grapefruit_prepaid==1 && $v['rate']>0 && $v['diy_type']==1 && $v['diy_content'] && strpos($v['diy_content'],'预缴优惠')!==false){
                $updateData['pay_money']=($updateData['pay_money']*$v['rate'])/100;
                $updateData['pay_money']=round($updateData['pay_money'],2);
            }
            $db_house_new_pay_order->saveOne(['order_id'=>$v['order_id']],$updateData);
            array_push($messageDatas['order_type'],(new HouseNewChargeService())->getType($v['order_type']));
           /* if ($v['par_type']==3){
                $tmp_order = [];
                $tmp_order['plat_order_id'] = $plat_order_info['id'];
                $tmp_order['score_used_count'] = 0;
                $tmp_order['score_can_get'] =0;
                $tmp_order['order_id'] = $summary_id;
                $tmp_order['is_own'] = $plat_order_info['is_own'];
                $tmp_order['payment_money'] = $v['pay_money'];
                $tmp_order['score_deducte'] = 0;
                $tmp_order['desc'] = '社区扫码缴费';
                $order_info = array_merge($tmp_order,$v);
                if($plat_order_info['is_own']==0 || $plat_order_info['is_own']==1){
                    $plat_order_info['is_own']+=4;
                }
                $order_info['is_own'] = $plat_order_info['is_own']-4;
                if (!$order_info['balance_pay']) {
                    $order_info['balance_pay'] = 0;
                }
                $order_info['order_type'] = 'scanpay';
                $order_info['money'] = $order_info['pay_money'];
                $order_info['money']=$order_info['money']>0 ? $order_info['money']:0;
                fdump_api(['新版本支付'.__LINE__,$tmp_order,$v,$order_info],'new_after_pay',1);
                $res_bill = invoke_cms_model('SystemBill/bill_method',['type'=>$plat_order_info['is_own'],'order_info'=>$order_info,'is_fenzhang'=>0,'is_new_charge'=>1]);
                if(!$res_bill['retval']['error_code']){
                    $is_pay_bill = 2;
                    $service_house_new_cashier->saveOrder(['summary_id'=>$summary_id],['is_pay_bill'=>$is_pay_bill]);
                }
            }*/
        }
        if(empty($save_paid_order_record['village_id']) && $village_id>0){
            $save_paid_order_record['village_id']=$village_id;
        }
        $house_type_arr=array_unique($house_type_arr);
        $save_paid_order_record['house_type']=$house_type_arr ? implode(',',$house_type_arr):'';
        $save_paid_order_record['sub_order_ids']=$sub_order_ids ? implode(',',$sub_order_ids):'';
        $houseNewChargeProjectService=new HouseNewChargeProjectService();
        $business_name_tmp=$houseNewChargeProjectService->getChargeNanmeStr($house_type_arr);
        $save_paid_order_record['business_name']=$business_name_tmp ? $business_name_tmp:$business_name;
        $save_paid_order_record['order_type']=$tmp_order_type;
        $save_paid_order_record['order_type_v']=$tmp_order_type_v;
        $whereArr=array();
        if($pay_order_info_id>0){
            $whereArr[]=array('pay_order_info_id','=',$pay_order_info_id);
        }else{
            $whereArr[]=array('village_id','=',$save_paid_order_record['village_id']);
            $whereArr[]=array('source_from','=',1);
            $whereArr[]=array('order_id','=',$save_paid_order_record['order_id']);
            $whereArr[]=array('order_no','=',$save_paid_order_record['order_no']);
            $whereArr[]=array('table_name','=','house_new_pay_order_summary');
        }
        $paidOrderRecordDb = new PaidOrderRecord();
        $paidOrderRecordInfo = $paidOrderRecordDb->getOneData($whereArr,'id,update_time');
        if($paidOrderRecordInfo && !$paidOrderRecordInfo->isEmpty()){
            if(!empty($paidOrderRecordInfo['business_type']) &&($paidOrderRecordInfo['business_type']=='scanpay') ){
                $save_paid_order_record['pay_type']='offline_scan'; //线下扫码支付
            }
            $extra_data=$paidOrderRecordInfo['extra_data'] ? json_decode($paidOrderRecordInfo['extra_data'],true):array();
            if($position_id>0){
                $extra_data['car_position_id']=$position_id;
                $save_paid_order_record['extra_data']=json_encode($extra_data,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
            }
            $paidOrderRecordDb->saveOneData(array(['id', '=', $paidOrderRecordInfo['id']]),$save_paid_order_record);
        }else{
            $service_plat_order = new PlatOrderService();
            $plat_order_info = $service_plat_order->getPlatOrder(['business_id'=>$summary_id,'business_type'=>'village_new_pay']);
            $db_pay_order_info=new PayOrderInfo();
            if($plat_order_info && !$plat_order_info->isEmpty()){
                $plat_order_info=$plat_order_info->toArray();
                $save_paid_order_record['business_order_id']=$plat_order_info['order_id'];
                $save_paid_order_record['pay_order_no']=$plat_order_info['orderid'];
                $save_paid_order_record['third_transaction_no']=$plat_order_info['third_id'];
                $save_paid_order_record['pay_money']=$plat_order_info['pay_money'];
                
                $payOrderInfo=$db_pay_order_info->getByOrderNo($plat_order_info['orderid']);
                if (!empty($payOrderInfo) && !$payOrderInfo->isEmpty()){
                    $payOrderInfo=$payOrderInfo->toArray();
                    $save_paid_order_record['pay_env']=$payOrderInfo['env'];
                    $save_paid_order_record['pay_channel']=$payOrderInfo['channel'];
                    $save_paid_order_record['pay_order_info_id']=$payOrderInfo['id'];
                    if(!empty($payOrderInfo['business_type']) &&($payOrderInfo['business_type']=='scanpay') ){
                        $save_paid_order_record['pay_type']='offline_scan'; //线下扫码支付
                    }
                }
            }
            if($position_id>0){
                $save_paid_order_record['extra_data']=array('car_position_id'=>$position_id);
                $save_paid_order_record['extra_data']=json_encode($save_paid_order_record['extra_data'],JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
            }
            $paidOrderRecordDb->addOneData($save_paid_order_record);
        }
        if($countnum>1){
            $messageDatas['type']=1;
        }
        $service_house_village = new HouseVillageService();
        $village_info = $service_house_village->getHouseVillageInfo(array('village_id'=>$village_id));
        $property_info = $service_house_village->get_house_property($village_info['property_id'],'property_name');
        $village_bind = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$summary_order_info['pay_bind_id']]);
        $messageDatas['property_id']=$village_info['property_id'];
        $messageDatas['property_name']=$property_info['property_name'];
        $messageDatas['village_name']=$village_info['village_name'];
        $messageDatas['name']=$village_bind['name'];
        if ($village_bind['single_id'] && $village_bind['floor_id'] && $village_bind['layer_id'] && $village_bind['vacancy_id'] && $village_bind['village_id']) {
            $address = $service_house_village->getSingleFloorRoom($village_bind['single_id'],$village_bind['floor_id'],$village_bind['layer_id'],$village_bind['vacancy_id'],$village_bind['village_id']);
            if ($address) {
                $village_bind['address'] = $address;
            }
        }
        $messageDatas['address']=$village_bind && $village_bind['address']?$village_bind['address']:'';
        if(empty($messageDatas['address']) && !empty($car_number)){
            $messageDatas['address']='车牌号 '.$car_number;
        }
        $this->sendMessageToHouseWorker($village_id,$messageDatas);
        Db::commit();
        return array('error_code'=>true,'msg'=>'提交成功！');
    }

    /**
     * 线上支付回调
     * @author lijie
     * @date_time 2021/06/24
     * @param $plat_order_id
     * @param $extra
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function afterPay($plat_order_id,$extra)
    {
        // print_r([$plat_order_id,$extra]);die;
        fdump_api([$plat_order_id,$extra],'111111111',1);
        $serviceHouseVillage = new HouseVillageService();
        $service_house_new_cashier = new HouseNewCashierService();
        $service_plat_order = new PlatOrderService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $db_pay_order_info = new PayOrderInfo();
        $service_user = new UserService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $db_house_new_order_log = new HouseNewOrderLog();
        $village_nmv_charge = new HouseVillageNmvCharge();
        $village_nmv_card = new HouseVillageNmvCard();
        $village_id=0;
        $messageDatas=array();
        $plat_order_res = $service_plat_order->getPlatOrder(['order_id'=>$plat_order_id]);
        fdump_api([$plat_order_res],'plat_order_res_230105',1);
        $pay_order_info = $db_pay_order_info->getByOrderNo($extra['paid_orderid']);
        fdump_api([$pay_order_info,$plat_order_res],'plat_order_res_230105',1);
        if ($plat_order_res['paid']==1){
            return array('error_code'=>1,'msg'=>'订单已支付！');
        }
        $pay_order_info_id=$pay_order_info && isset($pay_order_info['id']) ? $pay_order_info['id']:0;
        $order_record_id=0;
        if(isset($extra['order_record_id'])){
            $order_record_id=$extra['order_record_id'];
        }
        if(isset($extra['pay_order_info_id'])){
            $pay_order_info_id=$extra['pay_order_info_id'];
        }
        $record_extra_data=$extra;
        $record_extra_data['plat_order_id']=$plat_order_id;
        $record_extra_data['after_pay_time']=time();
        $record_extra_data['car_position_id']=0;
        $save_paid_order_record=array('source_from'=>1);
        $messageDatas['pay_money']=$extra['paid_money'];
        /**
        ***定制的住户余额的冷水，热水，电费余额支付
         ***/
        $customized_meter_reading=cfg('customized_meter_reading');
        $is_customized_meter_reading=!empty($customized_meter_reading) ? intval($customized_meter_reading):0;
        $current_village_hot_water_balance=0;
        $current_village_cold_water_balance=0;
        $current_village_electric_balance=0;
        $current_village_balance=$extra['current_village_balance'];
        $opt_money_balance_type='';
        if($is_customized_meter_reading>0){
            if(isset($extra['current_village_hot_water_balance']) && $extra['current_village_hot_water_balance']>0){
                $current_village_hot_water_balance=$extra['current_village_hot_water_balance'];
                $current_village_balance=$current_village_hot_water_balance;
                $opt_money_balance_type='hot_water_balance';
            }
            if(isset($extra['current_village_cold_water_balance'])&& $extra['current_village_cold_water_balance']>0){
                $current_village_cold_water_balance=$extra['current_village_cold_water_balance'];
                $current_village_balance=$current_village_cold_water_balance;
                $opt_money_balance_type='cold_water_balance';
            }
            if(isset($extra['current_village_electric_balance'])&& $extra['current_village_electric_balance']>0){
                $current_village_electric_balance=$extra['current_village_electric_balance'];
                $current_village_balance=$current_village_electric_balance;
                $opt_money_balance_type='electric_balance';
            }
        }
        $save_paid_order_record['pay_type_from']=$opt_money_balance_type;
        if($current_village_balance>0){
            $save_paid_order_record['pay_type_from']=$save_paid_order_record['pay_type_from'] ? $save_paid_order_record['pay_type_from'].',village_balance':'village_balance';
        }
        if($extra['current_system_balance']>0){
            $save_paid_order_record['pay_type_from']=$save_paid_order_record['pay_type_from'] ? $save_paid_order_record['pay_type_from'].',system_balance':'system_balance';
        }
        $messageDatas['type']=2;
        if (isset($extra['is_own']) && intval($extra['is_own']) >= 1) {
            $is_own = 5;
        } else {
            $is_own = 4;
        }
        $service_plat_order->savePlatOrder(['order_id'=>$plat_order_id],
            [
                'system_balance'     => $extra['current_system_balance'],
                'village_balance'    => $current_village_balance,
                'pay_time'           => time(),
                'paid'               => 1,
                'pay_type'           => $extra['paid_type'],
                'pay_money'          => $extra['paid_money'],
                'third_id'           => isset($pay_order_info['paid_extra'])?$pay_order_info['paid_extra']:'',
                'system_score'       => $extra['current_score_use'],
                'system_score_money' => $extra['current_score_deducte'],
                'orderid'            => $extra['paid_orderid'],
                'is_own'             => $is_own
            ]);
        $plat_order_info = $service_plat_order->getPlatOrder(['order_id'=>$plat_order_id]);
        $order_id = $plat_order_info['business_id'];
        $cashier_order = $service_house_new_cashier->getOrderSummary(['summary_id'=>$order_id]);
        if ($cashier_order['is_paid']==1){
            return array('error_code'=>1,'msg'=>'订单已支付！'); 
        }
        $offline_pay = (new NewBuildingService())->getHouseNewOfflinePayFindMethod($cashier_order['property_id'],'id,name');
        $messageDatas['pay_type_str'] = (new NewBuildingService())->getOrderPayTypeMethod($order_id,$offline_pay,$cashier_order['village_balance']);
        if($cashier_order['village_id']){
            $village_id=$cashier_order['village_id'];
            $service_electronic_invoice = new ElectronicInvoiceService();
            $e_config = $service_electronic_invoice->getEConfig($cashier_order['village_id']);
            if(empty($e_config))
                $auto = false;
            elseif ($e_config['is_open'] == 1 && $e_config['is_tui'] == 1)
                $auto = true;
            else
                $auto = false;
        }else{
            $auto = false;
        }
        $save_paid_order_record['order_id']=$order_id;
        $save_paid_order_record['order_no']=$cashier_order['order_no'];
        $save_paid_order_record['village_id']=$village_id;
        $save_paid_order_record['property_id']=$cashier_order['property_id'];
        $save_paid_order_record['room_id']=$cashier_order['room_id'];
        $save_paid_order_record['bind_user_id']=$cashier_order['pigcms_id'] ? $cashier_order['pigcms_id']:$cashier_order['pay_bind_id'];
        $save_paid_order_record['uid']=$cashier_order['pay_uid'] ? $cashier_order['pay_uid']:$cashier_order['uid'];
        $save_paid_order_record['order_money']=$cashier_order['pay_money']>0 ? $cashier_order['pay_money']:$cashier_order['total_money'];
        $save_paid_order_record['table_name']='house_new_pay_order_summary';
        // 积分
        if (intval($extra['current_score_use']) > 0) { // 使用了积分
            $score_can_get = $cashier_order['score_can_get'];
            $service_user->addScore($cashier_order['pay_uid'],$score_can_get,'缴纳社区收银台缴费获得积分');
        }else{
            $user = $service_user->getUser($cashier_order['pay_uid'],'uid');
            $score = $this->get_score($plat_order_id,$user,false);
            $score_can_get = $score['score_can_get'];
            $service_user->addScore($cashier_order['pay_uid'],$score_can_get,'缴纳社区收银台缴费获得积分');
        }
        if($messageDatas['pay_money']<=0 && $extra['current_system_balance']>0 && $cashier_order['pay_type']==4){
            $messageDatas['pay_money']= $extra['current_system_balance'];
        }
        $date_summary_order = [];
        if (isset($pay_order_info['own_from']) && $pay_order_info['own_from'] && isset($pay_order_info['own_from_id']) && $pay_order_info['own_from_id']) {
            $date_summary_order['own_from']    = $pay_order_info['own_from'];
            $date_summary_order['own_from_id'] = $pay_order_info['own_from_id'];
        }
        
        $date_summary_order['pay_time'] = time();
        $date_summary_order['is_paid'] = 1;
        $date_summary_order['pay_money']=$plat_order_info['pay_money'];
        $date_summary_order['pay_amount_points']=$extra['paid_money']*100;
        $date_summary_order['system_balance']=$extra['current_system_balance'];
        $date_summary_order['village_balance']=$current_village_balance;
        $date_summary_order['score_used_count'] = $extra['current_score_use'];
        $date_summary_order['score_can_get'] = $score_can_get ? $score_can_get : 0;
        $date_summary_order['score_deducte'] = $extra['current_score_deducte'] ? $extra['current_score_deducte'] : 0;
        $date_summary_order['paid_orderid'] = isset($pay_order_info['paid_extra'])?$pay_order_info['paid_extra']:'';
        $date_summary_order['online_pay_type'] = isset($extra['paid_type'])?$extra['paid_type']:'';
        $summary_res=$service_house_new_cashier->saveOrderSummary(['summary_id'=>$order_id],$date_summary_order);//更新总订单
        if($plat_order_info['is_own']==0) {
            $plat_order_info['is_own'] += 4;
        }
        //查询子订单
        $order_list = $service_house_new_cashier->getOrderList(['summary_id'=>$order_id],'o.*,n.charge_type,r.fees_type',0,0,'o.order_id ASC');
        if (empty($order_list)) {
            return array('error_code'=>1,'msg'=>'没有子订单！');
        }
        $service_house_village = new HouseVillageService();

        $totle_money=0;
        $totle_score_deducte=0;
        $totle_system_balance=0;
        $totle_score_used_count=0;
        $totle_village_balance=0;
        //-----小区住户余额start-------//
        //获取小区用户信息
        $village_user = new StorageService();
        // print_r([$now_order['uid'],$villageId]);

        if (isset($extra['current_village_balance']) && ($extra['current_village_balance']>0)){
            $now_village_user=array();
            if(!empty($cashier_order['pay_uid'])&&!empty($cashier_order['village_id'])){
                $now_village_user = $village_user->getVillageUser($cashier_order['pay_uid'],$cashier_order['village_id']);
            }
            if (empty($now_village_user)) {
                throw new \Exception(L_("小区住户余额信息不存在"), 1003);
            }
            //判断小区住户帐户余额,扣除余额
            $villageBalancePay = floatval($extra['current_village_balance']);
            if ($villageBalancePay && $now_village_user['current_money'] < $villageBalancePay) {
                throw new \Exception(L_("您的帐户余额不够此次支付"), 1003);
            }   
        }
        if($is_customized_meter_reading>0){
            $now_village_user=array();
            if(!empty($cashier_order['pay_uid'])&&!empty($cashier_order['village_id'])){
                $now_village_user = $village_user->getVillageUser($cashier_order['pay_uid'],$cashier_order['village_id']);
            }
            if(isset($extra['current_village_hot_water_balance']) && $extra['current_village_hot_water_balance']>0 && $now_village_user['hot_water_balance']<$extra['current_village_hot_water_balance']){
                throw new \Exception(L_("您的帐户热水余额不够此次支付"), 1003);
            }
            if(isset($extra['current_village_cold_water_balance'])&& $extra['current_village_cold_water_balance']>0 && $now_village_user['cold_water_balance']<$extra['current_village_cold_water_balance']){
                throw new \Exception(L_("您的帐户冷水余额不够此次支付"), 1003);
            }
            if(isset($extra['current_village_electric_balance'])&& $extra['current_village_electric_balance']>0 && $now_village_user['electric_balance']<$extra['current_village_electric_balance']){
                throw new \Exception(L_("您的帐户冷电费余额不够此次支付"), 1003);
            }
        }
        //-------小区住户余额end--------//
        $messageDatas['order_id']=$order_id;
        if($order_list && count($order_list)>1){
            $messageDatas['type']=1;
            $messageDatas['summary_id']=$order_id;
        }
        if (!isset($extra['current_village_balance'])){
            $extra['current_village_balance']=0;
        }
        $park_new_type_arr=array();
        if (isset($extra['is_own']) && intval($extra['is_own']) >= 1) {
            $is_new_own = 1;
        } else {
            $is_new_own = 2;
        }

        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $car_number='';
        if (isset($cashier_order['pay_bind_id']) && $cashier_order['pay_bind_id']) {
            $village_bind = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$cashier_order['pay_bind_id']]);
        } else {
            $village_bind = [];
        }
        $name  = isset($village_bind['name'])  ? $village_bind['name']  : '';
        $phone = isset($village_bind['phone']) ? $village_bind['phone'] : '';
        
        $only_order_id    = 0;
        $car_number_arr   = [];// 车牌
        $car_stay_time    = 0;//  车辆停留时长 单位秒S
        $car_park_str     = '';// 车场名称
        $car_stored_price = 0;//  车辆储值金额
        $car_end_time     = 0;//  车辆月租结尾时间
        $db_in_park = new InPark();
        $db_house_village_parking_garage = new HouseVillageParkingGarage();
        $messageDatas['order_type'] = [];
        $house_type_arr=array();
        $sub_order_ids=array();
        $business_name='';
        $tmp_order_type='';
        $tmp_order_type_v='';
        foreach ($order_list as $key => $now_order) {
            $only_order_id = $now_order['order_id'];
            fdump_api([$now_order],'A1Park_0930',1);
            $village_id=$now_order['village_id'];
            if($now_order['order_type']){
                $house_type_arr[]=$now_order['order_type'];
            }
            if($now_order['position_id']>0){
                $record_extra_data['car_position_id']=$now_order['position_id'];
            }
            if(isset($now_order['phone']) && $now_order['phone']){
                $save_paid_order_record['u_phone']=$now_order['phone'];
            }
            if(isset($now_order['pay_bind_phone']) && $now_order['pay_bind_phone']){
                $save_paid_order_record['u_phone']=$now_order['pay_bind_phone'];
            }
            if(isset($now_order['name']) && $now_order['name']){
                $save_paid_order_record['u_name']=$now_order['name'];
            }
            if(isset($now_order['pay_bind_name']) && $now_order['pay_bind_name']){
                $save_paid_order_record['u_name']=$now_order['pay_bind_name'];
            }
            $business_name=$now_order['order_name'];
            $sub_order_ids[]=$now_order['order_id'];
            if($is_grapefruit_prepaid==1 && $now_order['rate']>0 && $now_order['diy_type']==1 && $now_order['diy_content'] && strpos($now_order['diy_content'],'预缴优惠')!==false) {
                $now_order['pay_money'] = ($now_order['pay_money'] * $now_order['rate']) / 100;
                $now_order['pay_money'] = round($now_order['pay_money'], 2);
            }
            if (!$name && isset($now_order['name']) && $now_order['name']) {
                $name = $now_order['name'];
            }
            if (!$phone && isset($now_order['phone']) && $now_order['phone']) {
                $phone = $now_order['phone'];
            }
            if (isset($order_list[$key+1])){
                //实际线上支付的金额
                $tmp_pay_money=$extra['paid_money']*($now_order['pay_money']/$cashier_order['pay_money'])*100;
                $pay_money=round($tmp_pay_money);
                //实际积分抵扣的金额
                $score_deducte=round_number($extra['current_score_deducte']*($now_order['pay_money']/$cashier_order['pay_money']),2);
                //实际余额支付的金额
                $system_balance=round_number($extra['current_system_balance']*($now_order['pay_money']/$cashier_order['pay_money']),2);
                //实际小区余额支付的金额
                $village_balance=round_number($current_village_balance*($now_order['pay_money']/$cashier_order['pay_money']),2);
                //积分抵扣的数量
                $score_used_count_tmp=$extra['current_score_use']*($now_order['pay_money']/$cashier_order['pay_money']);
                $score_used_count=round($score_used_count_tmp);

                $totle_money=$totle_money+$pay_money;
                $totle_score_deducte=$totle_score_deducte+$score_deducte;
                $totle_system_balance=$totle_system_balance+$system_balance;
                $totle_village_balance=$totle_village_balance+$village_balance;
                $totle_score_used_count=$totle_score_used_count+$score_used_count;
            }else{
                $tmp_pay_money=$extra['paid_money']*100-$totle_money;
                $pay_money=round($tmp_pay_money);
                //实际积分抵扣的金额
                $score_deducte=round_number(($extra['current_score_deducte']-$totle_score_deducte),2);
                //实际余额支付的金额
                $system_balance=round_number(($extra['current_system_balance']-$totle_system_balance),2);
                //实际小区余额支付的金额
                $village_balance=round_number(($current_village_balance-$totle_village_balance),4);
                //积分抵扣的数量
                $score_used_count_tmp=$extra['current_score_use']-$totle_score_used_count;
                $score_used_count=round($score_used_count_tmp);
            }
            // 跟新订单状态
            $date_order = [];
            $date_order['pay_time'] = time();
            $date_order['is_paid']  = 1;
            $date_order['is_own']   = $is_new_own;
            $date_order['pay_type'] = $cashier_order['pay_type'];
            $date_order['score_used_count'] = $score_used_count;
            $date_order['score_deducte'] = $score_deducte;
            //$now_order = $now_order->toArray();
            $tmp_order = [];
            $tmp_order['plat_order_id'] = $plat_order_id;
            $tmp_order['score_used_count'] = $date_summary_order['score_used_count'] ? $date_summary_order['score_used_count'] : 0;
            $tmp_order['score_can_get'] =$score_can_get ? $score_can_get : 0;
            $tmp_order['order_id'] = $cashier_order['summary_id'];
            $tmp_order['is_own'] = $plat_order_info['is_own'];
            /*$tmp_order['payment_money'] = $plat_order_info['pay_money'];
            $tmp_order['score_deducte'] = $plat_order_info['current_score_deducte'];
            $tmp_order['balance_pay'] = $plat_order_info['current_system_balance'];*/
            $tmp_order['payment_money'] = round_number($pay_money/100,2);
            $tmp_order['score_deducte'] = $score_deducte;
            $tmp_order['balance_pay'] =$system_balance;
            $tmp_order['order_type'] = 'village_new_pay';
            $tmp_order['desc'] = '社区缴费';
            $service_start_time = $now_order['service_start_time'];
            $service_end_time = $now_order['service_end_time'];
            $rule_info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$now_order['rule_id']],'n.charge_type,r.*,p.type');

            if($now_order['order_type'] == 'non_motor_vehicle'){ // 非机动车缴费
                $tmp_order_type='non_motor_vehicle';
                // 更新非机动车卡到期时间
                $village_nmv_card->updateCardInfo(['id' => $now_order['position_id']],['expiration_time' => $service_end_time]);
                $send_nmv_card = new CloudIntercomService();
                $send_nmv_card->sendNmvToDevice($now_order['position_id']);
            }
            elseif($now_order['order_type'] == 'pile'){ // 汽车充电桩缴费
                $db_house_new_pile_user_money=new HouseNewPileUserMoney();
                $db_house_new_pile_user_money_log=new HouseNewPileUserMoneyLog();
                $user_money_info=$db_house_new_pile_user_money->getOne(['business_id'=>$now_order['village_id'],'uid'=>$now_order['uid']]);
                if (empty($user_money_info)){
                    $user_money_info['current_money']=0;
                    $arr_add=[
                        'uid'=>$now_order['uid'],
                        'business_id'=>$now_order['village_id'],
                        'business_type'=>1,
                        'current_money'=>$now_order['modify_money'],
                        'add_time'=>time(),
                        'update_time'=>time(),
                        'remarks'=>'用户充值',
                    ];
                    $current_money=$now_order['modify_money'];
                    $update_money=$db_house_new_pile_user_money->addOne($arr_add);
                }else{
                    $current_money=$user_money_info['current_money']+$now_order['modify_money'];
                    $update_money=$db_house_new_pile_user_money->saveOne(['uid'=>$now_order['uid'],'business_id'=>$now_order['village_id'],'business_type'=>1],['current_money'=>$current_money]);
                }
                $tmp_order_type='car_pile';
                if ($update_money>0){
                    $log_data=[
                        'uid'=>$now_order['uid'],
                        'business_type'=>1,
                        'business_id'=>$now_order['village_id'],
                        'type'=>1,
                        'current_money'=>$user_money_info['current_money'],
                        'money'=>$now_order['modify_money'],
                        'after_price'=>$current_money,
                        'add_time'=>time(),
                        'role_id'=>isset($now_order['role_id'])?$now_order['role_id']:0,
                        'ip'=>get_client_ip(),
                        'desc'=>'用户充值',
                        'order_id'=>isset($now_order['order_id'])?$now_order['order_id']:0,
                        'order_type'=>isset($now_order['order_type'])?$now_order['order_type']:1,
                    ];
                    $db_house_new_pile_user_money_log->addOne($log_data);
                }
            }
            elseif($now_order['order_type'] == 'park_new'){ // 新版停车费
                fdump_api([$now_order],'A1Park_0930',1);
                $db_House_new_parking=new HouseNewParkingService();
                $db_house_village_park_config=new HouseVillageParkConfig();
                $db_house_village_parking_car=new HouseVillageParkingCar();
                $db_house_village_parking_position=new HouseVillageParkingPosition();
                $db_park_passage=new ParkPassage();
                $db_house_village=new HouseVillage();
                $db_park_system=new ParkSystem();
                $db_park_total_record=new ParkTotalRecord();
                $service_house_new_charge_prepaid=new HouseNewChargePrepaid();
                $park_config=$db_house_village_park_config->getFind(['village_id'=>$now_order['village_id']]);
                $park_sys_type=$park_config['park_sys_type'];
                $house_village =$db_house_village->getOne($now_order['village_id'],'village_name');
                $park_system =$db_park_system->getFind(['park_id'=>$now_order['village_id']]);
                //月租车缴费
                $park_new_type_arr[]=$now_order['car_type'];
                fdump_api([$park_config],'A1Park_0930',1);
                $car_number = isset($now_order['car_number']) && $now_order['car_number'] ? trim($now_order['car_number']) : '';
                if ($car_number) {
                    $car_number_arr[]  = $car_number;
                }
                $tmp_order_type=$now_order['car_type'] ? $now_order['car_type']:'';
                $tmp_order_type_v=$car_number;
                if ($now_order['car_type']=='month_type'){
                    $prepaid_info = $service_house_new_charge_prepaid-> getList(['charge_rule_id'=>$now_order['rule_id']]);
                    if($park_sys_type=='D3'){
                        $parking_car = $db_house_village_parking_car->getHouseVillageParkingCarLists(['car_id'=>$now_order['car_id']],'*',0);
                        $parking_position =$db_house_village_parking_position->getFind(['position_id'=>$parking_car[0]['car_position_id']]);
                    }else{
                        $parking_position =$db_house_village_parking_position->getFind(['position_id'=>$now_order['position_id']]);
                        if (empty($parking_position)){
                            $parking_car = $db_house_village_parking_car->getHouseVillageParkingCarLists(['car_id'=>$now_order['car_id']],'*',0);
                            $parking_position =$db_house_village_parking_position->getFind(['position_id'=>$parking_car[0]['car_position_id']]);

                        }else{
                            $parking_car = $db_house_village_parking_car->getHouseVillageParkingCarLists(['car_position_id'=>$parking_position['position_id']],'*',0);

                        }
                    }
                    $channel_number_arr =$db_park_passage->getColumn(['village_id'=>$now_order['village_id']],'channel_number');
                   // $parking_car_single = D('House_village_parking_car')->where(array('car_id'=>$pay_order['car_id']))->find();
                    $channel_number_str = implode(',', $channel_number_arr);
                    if (!$channel_number_str) {
                        $channel_number_str = '';
                    }
                    if (2!=$parking_position['position_pattern']) {
                        // 固定车位-共同使用一个月卡会员编号
                        if ($parking_position['card_id']) {
                            $now_car_id = $parking_position['card_id'];
                        } else {
                            $now_car_id = '1'.sprintf("%09d",$parking_position['position_id']);//月卡会员编号（收费系统唯一编号  是
                            $park_position_set['card_id'] = $now_car_id;
                        }
                        $address = $house_village['village_name'] .'车位：'.$parking_position['position_num'];
                    } else {
                        $address = $house_village['village_name'];
                    }
                    // 如果是虚拟停车位 对应每一个车生成唯一收费编号
                    $parking_car_type_arr = $db_House_new_parking->parking_car_type_arr;
                    fdump_api([$parking_car,$parking_position,$now_order],'D3park/mouth_type_0718',1);
                    if ($parking_position['end_time']<time()){
                        $park_end_time=strtotime(date('Y-m-d 23:59:59',(time()-86400)));
                    }else{
                        $park_end_time= strtotime(date('Y-m-d 23:59:59',$parking_position['end_time']));
                    }
                    $park_set = [];
                    $park_data['begin_time'] = $park_end_time+1;
                    if($now_order['is_prepare'] == 1){
                        if (!empty($prepaid_info)){
                            $prepaid_info=$prepaid_info->toArray();
                        }
                        if (!empty($prepaid_info)){
                            $prepaidInfo=$prepaid_info[0];
                            if ($prepaidInfo['give_cycle_datetype']==1){
                                $park_end_time = strtotime("+".$now_order['service_give_month_num']." day",$park_end_time);
                            }elseif($prepaidInfo['give_cycle_datetype']==2){
                                $park_end_time = strtotime("+".$now_order['service_give_month_num']." day",$park_end_time);
                            }elseif($prepaidInfo['give_cycle_datetype']==3){
                                $park_end_time = strtotime("+".$now_order['service_give_month_num']." day",$park_end_time);
                            }
                        }

                        $cycle = $now_order['service_month_num'];
                    }else{
                        $cycle = $now_order['service_month_num']?$now_order['service_month_num']:1;
                    }
                    if($rule_info['bill_create_set'] == 1){
                        $park_data['end_time'] = strtotime("+".$cycle." day",$park_end_time);
                    }elseif ($rule_info['bill_create_set'] == 2){
                        //todo 判断是不是按照自然月来生成订单
                        if(cfg('open_natural_month') == 1){
                            $park_data['end_time'] = strtotime("+".$cycle." month",$park_end_time);
                        }else{
                            $cycle = $cycle*30;
                            $park_data['end_time'] = strtotime("+".$cycle." day",$park_end_time);
                        }
                    }else{
                        $park_data['end_time'] = strtotime("+".$cycle." year", $park_end_time);
                    }
                    $park_position_set['end_time']=$park_data['end_time'];
                    $car_end_time = $park_data['end_time'];
                    $db_house_village_parking_position->saveOne(['position_id'=>$now_order['position_id']],$park_position_set);
                    foreach($parking_car as $k=>$v){
                        if (intval($parking_position['end_time']) < intval(time())) {
                            $park_data['begin_time'] = time();
                        }
                        $park_set['start_time'] = $park_data['begin_time'];
                        $park_set['end_time'] = $park_data['end_time'];
                        if ($park_sys_type!='D1') {
                            $park_data['park_id'] = $v['village_id'];
                        }
                        $park_data['car_number'] = $v['province'].$v['car_number'];
                        if (!$car_number) {
                            $car_number_arr[]  = $park_data['car_number'];
                        }
                        $park_position_set['start_time'] = $park_data['begin_time'];
                        $park_position_set['end_time'] = $park_data['end_time'];
                        if($park_sys_type =='D5'){
                            //todo D5智慧停车 触发下发到设备
                            (new D5Service())->D5AddCar($v['village_id'],$v['card_id'],$park_set['start_time'],$park_set['end_time']);
                        }elseif ($park_sys_type =='D6'){
                            //todo D6智慧停车 触发下发到设备
                            fdump_api(['D6智慧停车续费成功=='.__LINE__,$v],'d6_park/after_pay',1);
                            (new D6Service())->d6synVehicle($v['village_id'],$v['card_id'],0,$park_set);
                        }
                        //D3同步白名单到设备上
                        $white_record=[
                            'village_id'=>$v['village_id'],
                            'car_number'=>$park_data['car_number']
                        ];
                        (new HouseVillageParkingService())->addWhitelist($white_record);
                        // 3.7月卡会员同步（停车云）
                        $park_data['remark'] = '';
                        $park_data['pid'] = '';
                        $service_name = 'month_member_sync';// 添加会员卡操作
                        if ($now_car_id) {
                            $card_id = $now_car_id;
                        } else {
                            $card_id = '2'.sprintf("%09d",$v['car_id']);//月卡会员编号（收费系统唯一编号  是
                        }
                        // 同步储值卡
                        if ($parking_car_type_arr && $v['parking_car_type'] && $parking_car_type_arr[$v['parking_car_type']]) {
                            $car_type_id = $parking_car_type_arr[$v['parking_car_type']];
                        } else if($v['temporary_car_type']) {
                            $car_type_id = $v['store_value_car_type'];
                        } else {
                            $car_type_id = '储值车A';
                        }
                        $park_set['card_id'] = $card_id;
                        if ($park_sys_type=='D1' && $v['card_id']) {
                            $park_data['is_edit'] = 1;
                        }
                        elseif ($park_sys_type!='D1') {
                            $park_data['operate_type'] = $v['card_id'] ? '2' : '1';	//1 添加，2 编辑
                            if ($park_data['operate_type']==1) {
                                $park_data['create_time'] = time();
                            } else {
                                $park_data['update_time'] = time();
                            }
                            $park_data['price'] = $now_order['pay_money'];//实收金额
                            $park_data['channel_id'] = $channel_number_str;//月卡允许通行的通道编号
                            $park_data['amount_receivable'] = $now_order['pay_money'];//应收金额
                        }
                        fdump_api([$park_sys_type,$v['car_id'],$park_set],'D3park/mouth_type_0718',1);
                        if($park_sys_type=='D7'){
                            if (!empty($v['parking_car_type'])&&$v['parking_car_type']<17){
                                $d7_data=[];
                                $d7_data['park_id']=$park_config['d7_park_id'];
                                $d7_data['operate']=2;
                                $d7_data['vehicleId']=$v['vehicleId'];
                                $d7_data['vehicleNo']=$v['province'].$v['car_number'];
                                $d7_data['carTypeCode']=$db_House_new_parking->parking_D7_car_type_value[$v['parking_car_type']]['value'];
                                if (!empty($v['car_user_name'])){
                                    $d7_data['userName']=$v['car_user_name'];
                                }
                                if (!empty($v['car_user_phone'])){
                                    $d7_data['tels']=$v['car_user_phone'];
                                }
                                if (!empty($park_set['end_time'])){
                                    $d7_data['beginTime']=time();
                                    $d7_data['endTime']=$park_set['end_time'];
                                }
                                $res_whiteList=(new QinLinCloudService())->whiteList($d7_data);
                                fdump_api([$d7_data,$res_whiteList],'stored_pay_0824',1);
                                $res_park=$db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$v['car_id']],$park_set);
                                fdump_api([$res_park,$park_position_set,$parking_position['position_id']],'D3park/mouth_type_0718',1);
                                if ($park_position_set) {
                                    $db_house_village_parking_position->saveOne(['position_id'=>$v['car_position_id']],$park_position_set);
                                }
                            }
                        }elseif($park_sys_type=='D3'){
                            $res_park=$db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$v['car_id']],$park_set);
                            fdump_api([$res_park,$park_position_set,$parking_position['position_id']],'D3park/mouth_type_0718',1);
                            if ($park_position_set) {
                                $parking_position_info =$db_house_village_parking_position->getFind(['position_id'=>$v['car_position_id']]);
                                if (!empty($parking_position_info)){
                                    $db_house_village_parking_position->saveOne(['position_id'=>$v['car_position_id']],$park_position_set);
                                }

                            }
                        }else{
                            $park_data['name'] = $v['car_user_name'];
                            $park_data['car_type_id'] = $car_type_id;
                            $park_data['tel'] = $v['car_user_phone'] ? $v['car_user_phone'] : '';
                            $park_data['address'] = $address;
                            $park_data['p_lot'] = strval($parking_position['position_num']);

                            $park_data['card_id'] = $card_id;
                            //2021/2/1 多车多位  修改 start
                            /*$infos = D('House_village_parking_car')->bind_parking_position($card_id);
                            if($infos){
                                $park_data['car_group'] = intval($infos['car_group']);
                                $park_data['p_lot_number'] = intval($infos['p_lot_number']);
                            }*/
                            //2021/2/1 多车多位  修改 end
                            $json_data['msg_id'] = createRandomStr(8,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(12,true,true);//是
                            $json_data['data'] = $park_data;
                            $json_data['service_name'] = $service_name;

                            $post_data['unserialize_desc'] = serialize($json_data);
                            $post_data['status'] = 2;
                            $post_data['card_id'] = $card_id;
                            $post_data['msg_id'] = $json_data['msg_id'];
                            $post_data['village_id'] = $v['village_id'];
                            $post_data['park_id'] = $park_system['park_id'];
                            $post_data['token'] = $park_system['token'];
                            $post_data['car_number'] = $park_data['car_number']?$park_data['car_number']:'';
                            $post_data['service_name'] = $service_name;
                            $post_data['create_time'] = time();
                            $res=$db_park_total_record->add($post_data);
                            // 没有配置停车场，或者数据添加成功都保存车辆信息。
                            if(!($park_system['park_id'] && $park_system['token']) || $res){
                                $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$v['car_id']],$park_set);
                                if ($park_position_set) {
                                    $db_house_village_parking_position->saveOne(['position_id'=>$parking_position['position_id']],$park_position_set);
                                }
                            } else {
                                //2021/2/1 多车多位  修改 start
                                /* $infos = D('House_village_parking_car')->bind_parking_position($card_id);
                                 if($infos){
                                     $park_data['car_group'] = intval($infos['car_group']);
                                     $park_data['p_lot_number'] = intval($infos['p_lot_number']);
                                 }*/
                                //2021/2/1 多车多位  修改 end
                                $json_data['msg_id'] = createRandomStr(8,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(12,true,true);//是
                                $json_data['data'] = $park_data;
                                $json_data['service_name'] = $service_name;
                                $post_data['unserialize_desc'] = serialize($json_data);
                                $post_data['status'] = 2;
                                $post_data['card_id'] = $card_id;
                                $post_data['msg_id'] = $json_data['msg_id'];
                                $post_data['village_id'] = $v['village_id'];
                                $post_data['park_id'] = $park_system['park_id'];
                                $post_data['token'] = $park_system['token'];
                                $post_data['car_number'] = $park_data['car_number']?$park_data['car_number']:'';
                                $post_data['service_name'] = $service_name;
                                $post_data['create_time'] = time();
                                $res=$db_park_total_record->add($post_data);//月卡会员下发
                                if($res){
                                    $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$v['car_id']],$park_set);
                                    if ($park_position_set) {
                                        $db_house_village_parking_position->saveOne(['position_id'=>$parking_position['position_id']],$park_position_set);
                                    }
                                }
                            }
                        }
                        //子母车位续费同步到期时间
                        $db_house_village_park_config=new HouseVillageParkConfig();
                        $house_village_park_config=$db_house_village_park_config->getFind(['village_id' => $v['village_id']]);
                        if ($house_village_park_config['children_position_type']==1){
                            $parking_position_arr =$db_house_village_parking_position->getColumn(['parent_position_id'=>$v['car_position_id'],'garage_id'=>$v['garage_id'],'children_type'=>2],'position_id');
                            if (!empty($parking_position_arr)){
                                $db_house_village_parking_position->saveOne(['position_id'=>$parking_position_arr],$park_position_set);
                                $park_car_arr=$db_house_village_parking_car->get_column(['car_position_id'=>$parking_position_arr],'car_id');
                                if (!empty($park_car_arr)){
                                    $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$park_car_arr],$park_set);
                                }
                            }
                        }
                    }
                    $date_order['service_start_time']=$park_data['begin_time'];
                    $date_order['service_end_time']=$park_data['end_time'];
                }
                elseif($now_order['car_type'] == 'stored_type'){//储值
                    $address = $house_village['village_name'];
                    $parking_car =$db_house_village_parking_car->getOne(['car_id'=>$now_order['car_id']]);
                    $stored_balance=$parking_car['stored_balance'];
                    if ($park_sys_type=='D7'){
                        if ($parking_car['parking_car_type']>=17&&$parking_car['parking_car_type']<=20){
                            $car_info=(new QinLinCloudService())->queryRentVehicle($park_config['d7_park_id'],$parking_car['province'].$parking_car['car_number']);
                            fdump_api([$car_info],'stored_pay_0824',1);
                            if ($car_info['state']==200&&!empty($car_info['data'])){
                                $carInfo=json_decode($car_info['data'],true);
                                $stored_balance=$carInfo['balance'];
                            }
                        }

                    }
                    $car_stored_price = $stored_balance+$now_order['modify_money'];
                    $service_house_new_cashier->saveOrder(['order_id'=>$now_order['order_id']],['stored_balance'=>$car_stored_price]);
                    $nowtime = date("mdHis");
                    $trade_no = $nowtime . sprintf("%04d", $order_id);
                    $res_balance=$db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$parking_car['car_id']],['stored_balance'=>$car_stored_price]);
                    fdump_api(['对应车辆储值余额变动'=>$parking_car['car_number'],'now_order' => $now_order, 'stored_balance0' => $parking_car['stored_balance'],'stored_balance' => $stored_balance,'modify_money' => $now_order['modify_money'],'stored_balance1' => $car_stored_price], 'park_temp/stored_balance_' . $car_number, 1);
                    fdump_api([$res_balance],'stored_pay_0824',1);
                    if ($res_balance&&$park_sys_type=='D7'&&$parking_car['parking_car_type']>=17&&$parking_car['parking_car_type']<=20){
                        $d7_data=[];
                        $d7_data['park_id']=$park_config['d7_park_id'];
                        $d7_data['operate']=2;
                        $d7_data['balance']=$car_stored_price;
                        $d7_data['vehicleId']=$parking_car['vehicleId'];
                        $d7_data['vehicleNo']=$parking_car['province'].$parking_car['car_number'];
                        $d7_data['carTypeCode']=$db_House_new_parking->parking_D7_car_type_value[$parking_car['parking_car_type']]['value'];
                        if (!empty($parking_car['car_user_name'])){
                            $d7_data['userName']=$parking_car['car_user_name'];
                        }
                        if (!empty($parking_car['car_user_phone'])){
                            $d7_data['tels']=$parking_car['car_user_phone'];
                        }
                        if (!empty($parking_car['end_time'])){
                            $d7_data['beginTime']=time();
                            $d7_data['endTime']=$parking_car['end_time'];
                        }
                        fdump_api([$d7_data],'stored_pay_0824',1);
                        $res_whiteList=(new QinLinCloudService())->whiteList($d7_data);
                        fdump_api([$d7_data,$res_whiteList],'stored_pay_0824',1);
                    }
                    if ($parking_car['stored_card']) {
                        // 储值卡续充
                        $service_name = 'prepay_card_trade_sync';
                        $park_data['trade_no'] = $trade_no;
                        $park_data['card_id'] = $parking_car['stored_card'];
                        $park_data['pay_time'] = $now_order['pay_time'] ? $now_order['pay_time'] : time();
                        $park_data['pay_type'] = $now_order['pay_type']!=3?'线上支付':'现金';
                        $park_data['total_price'] = $now_order['pay_money'];
                        $park_data['car_number'] = $parking_car['province'].$parking_car['car_number'];
                        $park_data['mobile'] = $parking_car['car_user_phone'];
                        $park_data['park_id'] = $park_system['park_id'];
                        $park_data['name'] = $parking_car['car_user_name'];
                        $json_data['service_name'] = $service_name;
                        $json_data['msg_id'] = createRandomStr(8,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(12,true,true);//是
                        $json_data['data'] = $park_data;
                        $post_data['unserialize_desc'] = serialize($json_data);
                        $post_data['park_id'] = $park_system['park_id'];
                        $post_data['token'] = $park_system['token'];
                        $post_data['service_name'] = $service_name;
                        $post_data['car_number'] = $parking_car['province'].$parking_car['car_number'];
                        $post_data['village_id'] = $now_order['village_id'];
                        $post_data['msg_id'] = $json_data['msg_id'];
                        $post_data['stored_card'] = $park_data['card_id'];
                        $post_data['order_id'] = $order_id;
                        $post_data['car_id'] = isset($now_order['car_id'])?intval($now_order['car_id']):0;
                        $post_data['create_time'] = time();
                        $db_park_total_record->add($post_data);//储值卡续充同步
                    } else {
                        $parking_car_type_arr = $db_House_new_parking->parking_car_type_arr;
                        // 同步储值卡
                        if ($parking_car_type_arr && $parking_car['parking_car_type'] && $parking_car_type_arr[$parking_car['parking_car_type']]) {
                            $car_type_id = $parking_car_type_arr[$parking_car['parking_car_type']];
                        } else if($parking_car['temporary_car_type']) {
                            $car_type_id = $parking_car['store_value_car_type'];
                        } else {
                            $car_type_id = '储值车A';
                        }
                        // 同步储值卡
                        $service_name = 'prepay_card_sync';
                        $park_data['operate_type'] = 1;
                        $park_data['create_time'] = time();
                        $park_data['total_price'] = $now_order['pay_money'];
                        $park_data['car_number'] = $parking_car['province'].$parking_car['car_number'];
                        $park_data['mobile'] = $parking_car['car_user_phone'];
                        $park_data['name'] = $parking_car['car_user_name'];
                        $park_data['park_id'] = $park_system['park_id'];
                        $park_data['remark'] = '储值卡数据下发';
                        $park_data['card_id'] = '3_'.$park_system['park_id'].$parking_car['car_id'];//储值卡编号（收费系统唯一编号）
                        $park_data['car_type_id'] = $car_type_id;
                        $park_data['address'] = $address;
                        $json_data['service_name'] = $service_name;
                        $json_data['msg_id'] = createRandomStr(8,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(12,true,true);//是
                        $json_data['data'] = $park_data;
                        $post_data['unserialize_desc'] = serialize($json_data);
                        $post_data['park_id'] = $park_system['park_id'];
                        $post_data['car_number'] = $parking_car['province'].$parking_car['car_number'];
                        $post_data['token'] = $park_system['token'];
                        $post_data['service_name'] = $service_name;
                        $post_data['village_id'] = $now_order['village_id'];
                        $post_data['msg_id'] = $json_data['msg_id'];
                        $post_data['stored_card'] = $park_data['card_id'];
                        $post_data['car_id'] = isset($now_order['car_id'])?intval($now_order['car_id']):0;
                        $post_data['create_time'] = time();
                        $id = $db_park_total_record->add($post_data); //储值卡同步
                        $data_set = [
                            'stored_card' => $park_data['card_id']
                        ];
                        if ($id) {
                            $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$parking_car['car_id']],$data_set);
                        }
                    }
                }
                elseif($now_order['car_type'] == 'temporary_type'){ //临时
                    $db_house_village_parking_temp=new HouseVillageParkingTemp();
                    $db_park_plateresult_log=new ParkPlateresultLog();
                    $db_park_scrcu_record=new ParkScrcuRecord();
                    $db_park_open_log=new ParkOpenLog();
                    $whereTemp= [
                        ['car_number','=',$now_order['car_number']],
                        ['village_id','=',$now_order['village_id']],
                        ['is_paid', '=', 0]
                    ];
                    $whereNewInPark = [];
                    $whereNewInPark[] = ['pay_order_id', '=', $now_order['summary_id']];
                    $whereNewInPark[] = ['park_id',      '=', $village_id];
                    $new_in_park_arr = $db_in_park->getOne1($whereNewInPark, 'id, in_time, out_time, car_number, order_id, pay_order_id');
                    if (isset($new_in_park_arr['in_time']) && $new_in_park_arr['in_time']) {
                        $car_stay_time = time() - $new_in_park_arr['in_time'];
                    }
                    if($park_sys_type=='D6'){
                        $whereTemp= [
                            ['car_number','=',$now_order['car_number']],
                            ['village_id','=',$now_order['village_id']],
                            ['service_name','=','d6_charging'],
                            ['state','=',1],
                        ];
                    }
                    $house_village_parking_temp =  $db_house_village_parking_temp->getFind($whereTemp);
                    if($house_village_parking_temp && isset($house_village_parking_temp['id']) && $house_village_parking_temp['id']>0){
                        $db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                    }
                    $in_record_id = isset($house_village_parking_temp['in_record_id']) && $house_village_parking_temp['in_record_id'] ? intval($house_village_parking_temp['in_record_id']) : 0;
                    $out_record_id = isset($house_village_parking_temp['out_record_id']) && $house_village_parking_temp['out_record_id'] ? intval($house_village_parking_temp['out_record_id']) : 0;

                    if($house_village_parking_temp && isset($house_village_parking_temp['id']) && $house_village_parking_temp['id']>0){
                        $db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                    }
                    if (!$car_number && isset($house_village_parking_temp['car_number']) && $house_village_parking_temp['car_number']) {
                        $car_number = $house_village_parking_temp['car_number'];
                    }
                    if ((!$car_stay_time || $car_stay_time<=0) && $car_number) {
                        $where_log = [
                            ['car_number','=',$car_number],
                            ['park_type','=',1],
                        ];
                        $in_log_info = $db_park_plateresult_log->get_one($where_log, true, 'add_time DESC,id DESC');
                        if (isset($in_log_info['add_time']) && $in_log_info['add_time']) {
                            $car_stay_time = time() - $in_log_info['add_time'];
                        }
                    }
                    if ($park_sys_type=='D1') {
                        // d1上报缴费结果
                        $param = [];
                        $param['car_number'] = $now_order['car_number'];
                        $param['money'] = $now_order['money'];
                        $param['pay_time'] = time();
                        $param['order_id'] = $cashier_order['paid_orderid'];
                        $data_park_d1=[
                           'village_id'=>$now_order['village_id'],
                            'param'=>$param,
                        ];
                        $toPark = invoke_cms_model('cms/Lib/Model/ParkService\payNoticeToPark',$data_park_d1);
                    }
                    elseif ($park_sys_type=='D3'){

                        fdump_api(['停车支付回调'.__LINE__,$house_village_parking_temp],'park_after_pay_0521',1);
                        if($house_village_parking_temp){
                            fdump_api(['停车支付回调'.__LINE__,$now_order,$car_number],'park_after_pay_0521',1);
                            $out_channel_id = $house_village_parking_temp['out_channel_id'];
                            if(!$out_channel_id){
                                $out_channel_id = '1';
                            }
                           /* if($house_village_parking_temp['is_pay_scene'] == 1){//直付
                                $where_log = [
                                    ['car_number','=',$car_number],
                                    ['park_type','=',2],
                                    ['add_time','>=',time() - 180],
                                    ['add_time','<=',time() + 180],
                                ];
                                $log_info= $db_park_plateresult_log->get_one($where_log);
                                if (!empty($log_info)) {
                                    $park_log_data = [];
                                    $park_log_data['car_number'] = $log_info['car_number'];
                                    $park_log_data['channel_id'] = $log_info['channel_id'];
                                    $park_log_data['park_type'] = $log_info['park_type'];
                                    $park_log_data['add_time'] = time();
                                    $db_park_open_log->add($park_log_data);
                                }
                            }*/

                            $record_info= $db_park_scrcu_record->get_one(['order_number'=>$extra['paid_orderid']]);
                            if($house_village_parking_temp['is_pay_scene'] == 1 || is_null($house_village_parking_temp['is_pay_scene'])){//直付
                                $where_log = [
                                    ['car_number','=',$car_number],
                                    ['park_type','=',2],
                                    ['add_time','>=',time() - 600],
                                    ['add_time','<=',time() + 180],
                                ];
                                $log_info= $db_park_plateresult_log->get_one($where_log);
                                fdump_api([$log_info,$where_log],'park_after_pay_0521',1);
                                if (!empty($log_info)) {
                                    $park_log_data = [];
                                    $park_log_data['car_number'] = $log_info['car_number'];
                                    $park_log_data['channel_id'] = $log_info['channel_id'];
                                    $park_log_data['park_type'] = $log_info['park_type'];
                                    $park_log_data['add_time'] = time();
                                    $log_id= $db_park_open_log->add($park_log_data);
                                    //查询设备
                                    $passage_info = $db_park_passage->getFind(['device_number' => $log_info['channel_id'], 'village_id'=>$now_order['village_id'],'status' => 1]);
                                    $data_screen=[
                                        'passage'=>$passage_info,
                                        'car_type'=>'temporary_type',
                                        'village_id'=>$now_order['village_id'],
                                        'car_number'=>$log_info['car_number'],
                                        'channel_id'=>$log_info['channel_id'],
                                        'content'=>'请通行,祝您一路平安',
                                        'voice_content'=>6
                                    ];
                                    (new HouseVillageParkingService())->addParkShowScreenLog($data_screen);
                                    fdump_api([$log_id,$park_log_data],'park_after_pay_0521',1);
                                }else{
                                    $where_log = [
                                        ['car_number','=',$car_number],
                                        ['park_type','=',2],
                                        ['add_time','>=',time() - 600],
                                        ['add_time','<=',time() + 180],
                                    ];
                                    $log_info= $db_park_plateresult_log->get_one($where_log);
                                    fdump_api([$log_info,$where_log],'park_after_pay_0521',1);
                                    if (!empty($log_info)) {
                                        $park_log_data = [];
                                        $park_log_data['car_number'] = $log_info['car_number'];
                                        $park_log_data['channel_id'] = $log_info['channel_id'];
                                        $park_log_data['park_type'] = $log_info['park_type'];
                                        $park_log_data['add_time'] = time();
                                        $log_id= $db_park_open_log->add($park_log_data);
                                        //查询设备
                                        $passage_info = $db_park_passage->getFind(['device_number' => $log_info['channel_id'], 'village_id'=>$now_order['village_id'],'status' => 1]);
                                        $data_screen=[
                                            'passage'=>$passage_info,
                                            'car_type'=>'temporary_type',
                                            'village_id'=>$now_order['village_id'],
                                            'car_number'=>$log_info['car_number'],
                                            'channel_id'=>$log_info['channel_id'],
                                            'content'=>'请通行,祝您一路平安',
                                            'voice_content'=>6
                                        ];
                                        (new HouseVillageParkingService())->addParkShowScreenLog($data_screen);
                                        fdump_api([$log_id,$park_log_data],'park_after_pay_0521',1);
                                    }else{
                                        $where_log = [];
                                        $where_log['channel_id']=$out_channel_id;
                                        $where_log['park_type']=2;
                                        $log_info= $db_park_plateresult_log->get_one($where_log);
                                        fdump_api([$log_info,$car_number],'park_after_pay_0521',1);
                                        if (!empty($log_info)&&$log_info['car_number']==$car_number){
                                            $park_log_data = [];
                                            $park_log_data['car_number'] = $log_info['car_number'];
                                            $park_log_data['channel_id'] = $log_info['channel_id'];
                                            $park_log_data['park_type'] = $log_info['park_type'];
                                            $park_log_data['add_time'] = time();
                                            $log_id= $db_park_open_log->add($park_log_data);
                                            fdump_api([$log_id,$park_log_data],'park_after_pay_0521',1);
                                        }
                                    }
                                }
                                fdump_api([$house_village_parking_temp['id']],'park_after_pay_0521',1);
                                $db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                            }
                            elseif($house_village_parking_temp['is_pay_scene'] == 2){//无牌车直付
                                $db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                          }elseif($house_village_parking_temp['is_pay_scene'] == 0){//预付
                                if (!empty($record_info)&&$record_info['over']==1){
                                    $db_park_scrcu_record->delOne(['id'=>$record_info['id']]);
                                }else {
				                    if($out_channel_id>1){
                                        $where_log = [];
                                        $where_log['channel_id']=$out_channel_id;
                                        $where_log['park_type']=2;
				                     }else{
                                         $where_log = [
                                            ['car_number','=',$car_number],
                                            ['park_type','=',2],
                                            ['add_time','>=',time() - 300],
                                            ['add_time','<=',time() + 180],
                                        ];
				                     }
                                    $log_info = $db_park_plateresult_log->get_one($where_log);
                                    fdump_api([$log_info,$out_channel_id,$where_log],'park_after_pay_0521',1);
                                    if (!empty($log_info)&&$log_info['car_number']==$car_number){
                                        $park_log_data = [];
                                        $park_log_data['car_number'] = $log_info['car_number'];
                                        $park_log_data['channel_id'] = $log_info['channel_id'];
                                        $park_log_data['park_type'] = $log_info['park_type'];
                                        $park_log_data['add_time'] = time();
                                        $log_id=$db_park_open_log->add($park_log_data);
                                        //查询设备
                                        $passage_info = $db_park_passage->getFind(['device_number' => $log_info['channel_id'], 'village_id'=>$now_order['village_id'],'status' => 1]);
                                        $data_screen=[
                                            'passage'=>$passage_info,
                                            'car_type'=>'temporary_type',
                                            'village_id'=>$now_order['village_id'],
                                            'car_number'=>$log_info['car_number'],
                                            'channel_id'=>$log_info['channel_id'],
                                            'content'=>'请通行,祝您一路平安',
                                            'voice_content'=>6
                                        ];
                                        (new HouseVillageParkingService())->addParkShowScreenLog($data_screen);
                                        fdump_api([$log_id,$park_log_data],'park_after_pay_0521',1);
                                    }
                                }
                                fdump_api([$house_village_parking_temp['id']],'park_after_pay_0521',1);
                                $res_park=$db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                                fdump_api([$res_park],'park_after_pay_0521',1);
                            }
                            $recordIds = [];
                            if (isset($in_record_id) && $in_record_id) {
                                $recordIds[] = $in_record_id;
                            }
                            if (isset($out_record_id) && $out_record_id) {
                                $recordIds[] = $out_record_id;
                            }
                            if (! empty($recordIds)) {
                                $whereRecord = [
                                    ['record_id', 'in', $recordIds],
                                ];
                                (new HouseVillageCarAccessRecord())->saveOne($whereRecord, array('pay_time' => time(), 'update_time' => time()));
                            }
                        }
                    }
		            elseif ($park_sys_type=='D7'){
                        $d7_pay_data=[];
                        $d7_pay_data['parkId']=$park_config['d7_park_id'];
                        $d7_pay_data['orderNo']=$house_village_parking_temp['order_id'];
                        $d7_pay_data['outTradeNo']=$cashier_order['paid_orderid'];
                        $d7_pay_data['tradeStatus']='SUCCESS';
                        $d7_pay_data['totalAmount']=$now_order['money']*100;
                        $d7_pay_data['discountAmount']=0;
                        $d7_pay_data['pointDeductAmount']=0;
                        $d7_pay_data['payTime']=time();
                        $d7_pay_data['payType']=1;
                        $d7_pay_data['payMethod']='CASHSELF';
                        (new QinLinCloudService())->notifyBill($d7_pay_data);
                    }
                    elseif ($park_sys_type=='D6'){
                        $paid_type=isset($cashier_order['online_pay_type']) ? $cashier_order['online_pay_type'] : '';
                        if(in_array($paid_type,['wechat','weixin'])){
                            $pay_type0729=1;
                        }elseif (in_array($paid_type,['alipay'])){
                            $pay_type0729=2;
                        }elseif (in_array($paid_type,['unionpay'])){
                            $pay_type0729=3;
                        }else{
                            $pay_type0729=5;
                        }
                        $temp0729=$house_village_parking_temp;
                        $time0729=time();
                        //todo D6智慧停车 支付成功
                        fdump_api(['D6智慧停车支付成功=='.__LINE__,$now_order,$temp0729,$now_order['pay_money'],$pay_type0729,$time0729],'d6_park/after_pay',1);
                        (new D6Service())->d6ChargingResult($temp0729,$now_order['pay_money'],$pay_type0729,$time0729);
                    }
                    elseif ($park_sys_type=='A11'){
                        $village_id = $now_order['village_id'];
                        fdump_api(['停车支付回调'.__LINE__,'now_order' => $now_order, 'whereTemp' => $whereTemp, 'house_village_parking_temp' => $house_village_parking_temp],'a11_park/after_pay_log',1);
                        if($house_village_parking_temp){
                            $car_number = $now_order['car_number'] ? $now_order['car_number'] : $house_village_parking_temp['car_number'];
                            fdump_api(['停车支付回调'.__LINE__,'car_number' => $car_number],'a11_park/after_pay_log',1);
                            $out_channel_id = $house_village_parking_temp['out_channel_id'];
                            if(!$out_channel_id){
                                $out_channel_id = '1';
                            }
                            if($house_village_parking_temp['is_pay_scene'] == 1 || is_null($house_village_parking_temp['is_pay_scene'])){//直付
                                $where_log = [
                                    ['car_number','=',$car_number],
                                    ['park_type','=',2],
                                    ['add_time','>=',time() - 600],
                                    ['add_time','<=',time() + 180],
                                ];
                                $log_info= $db_park_plateresult_log->get_one($where_log);
                                fdump_api(['车辆识别记录'.__LINE__,'log_info' => $log_info,'where_log' => $where_log],'a11_park/after_pay_log',1);
                                if (!empty($log_info)) {
                                    $park_log_data = [];
                                    $park_log_data['car_number'] = $log_info['car_number'];
                                    $park_log_data['channel_id'] = $log_info['channel_id'];
                                    $park_log_data['park_type']  = $log_info['park_type'];
                                    $park_log_data['add_time']   = time();
                                    $log_id= $db_park_open_log->add($park_log_data);
                                    //查询设备
                                    $passage_info = $db_park_passage->getFind(['device_number' => $log_info['channel_id'], 'village_id'=>$now_order['village_id'],'status' => 1]);
                                    $data_screen = [
                                        'passage'       => $passage_info,
                                        'car_type'      => 'temporary_type',
                                        'village_id'    => $now_order['village_id'],
                                        'car_number'    => $log_info['car_number'],
                                        'channel_id'    => $log_info['channel_id'],
                                        'content'       => '请通行,祝您一路平安',
                                        'voice_content' => 6
                                    ];
                                    (new A11Service())->addParkShowScreenLog($data_screen);
                                    fdump_api(['显屏数据'.__LINE__,'passage_info' => $passage_info,'data_screen' => $data_screen],'a11_park/after_pay_log',1);
                                    $passage_area = isset($passage_info['passage_area']) && $passage_info['passage_area'] ? $passage_info['passage_area'] : 0;
                                    $whereGarage = [];
                                    $whereGarage[] = ['garage_id', '=', $passage_area];
                                    $infoGarage = $db_house_village_parking_garage->getOne($whereGarage, 'garage_num');
                                    $car_park_str = isset($infoGarage['garage_num']) && $infoGarage['garage_num'] ? $infoGarage['garage_num'] : '';
                                }else{
                                    $where_log = [
                                        ['car_number','=',$car_number],
                                        ['park_type','=',2],
                                        ['add_time','>=',time() - 600],
                                        ['add_time','<=',time() + 180],
                                    ];
                                    $log_info= $db_park_plateresult_log->get_one($where_log);
                                    fdump_api(['车辆识别记录'.__LINE__,'log_info' => $log_info,'where_log' => $where_log],'a11_park/after_pay_log',1);
                                    if (!empty($log_info)) {
                                        $park_log_data = [];
                                        $park_log_data['car_number'] = $log_info['car_number'];
                                        $park_log_data['channel_id'] = $log_info['channel_id'];
                                        $park_log_data['park_type'] = $log_info['park_type'];
                                        $park_log_data['add_time'] = time();
                                        $log_id= $db_park_open_log->add($park_log_data);
                                        //查询设备
                                        $passage_info = $db_park_passage->getFind(['device_number' => $log_info['channel_id'], 'village_id'=>$now_order['village_id'],'status' => 1]);
                                        $data_screen = [
                                            'passage'       => $passage_info,
                                            'car_type'      => 'temporary_type',
                                            'village_id'    => $now_order['village_id'],
                                            'car_number'    => $log_info['car_number'],
                                            'channel_id'    => $log_info['channel_id'],
                                            'content'       => '请通行,祝您一路平安',
                                            'voice_content' => 6
                                        ];
                                        (new A11Service())->addParkShowScreenLog($data_screen);
                                        fdump_api(['显屏数据'.__LINE__,'passage_info' => $passage_info,'data_screen' => $data_screen],'a11_park/after_pay_log',1);
                                        $passage_area = isset($passage_info['passage_area']) && $passage_info['passage_area'] ? $passage_info['passage_area'] : 0;
                                        $whereGarage = [];
                                        $whereGarage[] = ['garage_id', '=', $passage_area];
                                        $infoGarage = $db_house_village_parking_garage->getOne($whereGarage, 'garage_num');
                                        $car_park_str = isset($infoGarage['garage_num']) && $infoGarage['garage_num'] ? $infoGarage['garage_num'] : '';
                                    }else{
                                        $where_log = [];
                                        $where_log['channel_id'] = $out_channel_id;
                                        $where_log['park_type']  = 2;
                                        $log_info = $db_park_plateresult_log->get_one($where_log);
                                        fdump_api(['车辆识别记录' . __LINE__, 'log_info' => $log_info, 'where_log' => $where_log], 'a11_park/after_pay_log', 1);
                                        if ((!empty($log_info) && $log_info['car_number'] == $car_number)||(strpos($car_number,'临')!==false)) {
                                            $park_log_data = [];
                                            $park_log_data['car_number'] = $log_info['car_number'];
                                            $park_log_data['channel_id'] = $log_info['channel_id'];
                                            $park_log_data['park_type'] = $log_info['park_type'];
                                            $park_log_data['add_time'] = time();
                                            $log_id = $db_park_open_log->add($park_log_data);
                                            //查询设备
                                            $passage_info = $db_park_passage->getFind(['device_number' => $out_channel_id, 'village_id'=>$now_order['village_id'],'status' => 1]);
                                            if($passage_info && isset($passage_info['passage_area'])){
                                                $data_screen = [
                                                    'passage'       => $passage_info,
                                                    'car_type'      => 'temporary_type',
                                                    'village_id'    => $now_order['village_id'],
                                                    'car_number'    => $car_number,
                                                    'channel_id'    => $out_channel_id,
                                                    'content'       => '请通行,祝您一路平安',
                                                    'voice_content' => 6
                                                ];
                                                (new A11Service())->addParkShowScreenLog($data_screen);
                                                $passage_area = isset($passage_info['passage_area']) && $passage_info['passage_area'] ? $passage_info['passage_area'] : 0;
                                                $whereGarage = [];
                                                $whereGarage[] = ['garage_id', '=', $passage_area];
                                                $infoGarage = $db_house_village_parking_garage->getOne($whereGarage, 'garage_num');
                                                $car_park_str = isset($infoGarage['garage_num']) && $infoGarage['garage_num'] ? $infoGarage['garage_num'] : '';
                                            }
                                            fdump_api(['记录车辆开门' . __LINE__, 'park_log_data' => $park_log_data, 'log_id' => $log_id], 'a11_park/after_pay_log', 1);
                                        }
                                    }
                                }
                                fdump_api(['修改临时停车记录为已支付' . __LINE__, 'id' => $house_village_parking_temp['id']], 'a11_park/after_pay_log', 1);
                                $db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                            }
                            elseif($house_village_parking_temp['is_pay_scene'] == 2){//无牌车直付
                                fdump_api(['无牌车直付修改临时停车记录为已支付' . __LINE__, 'id' => $house_village_parking_temp['id']], 'a11_park/after_pay_log', 1);
                                $db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                            }elseif($house_village_parking_temp['is_pay_scene'] == 0){//预付
                                if($out_channel_id>1){
                                    $where_log = [];
                                    $where_log['channel_id']=$out_channel_id;
                                    $where_log['park_type']=2;
                                }else{
                                    $where_log = [
                                        ['car_number','=',$car_number],
                                        ['park_type','=',2],
                                        ['add_time','>=',time() - 300],
                                        ['add_time','<=',time() + 180],
                                    ];
                                }
                                $log_info = $db_park_plateresult_log->get_one($where_log);
                                fdump_api(['车辆识别记录' . __LINE__, 'log_info' => $log_info, 'where_log' => $where_log], 'a11_park/after_pay_log', 1);
                                if (!empty($log_info)&&$log_info['car_number']==$car_number){
                                    $park_log_data = [];
                                    $park_log_data['car_number'] = $log_info['car_number'];
                                    $park_log_data['channel_id'] = $log_info['channel_id'];
                                    $park_log_data['park_type'] = $log_info['park_type'];
                                    $park_log_data['add_time'] = time();
                                    $log_id=$db_park_open_log->add($park_log_data);
                                    //查询设备
                                    $passage_info = $db_park_passage->getFind(['device_number' => $log_info['channel_id'], 'village_id'=>$now_order['village_id'],'status' => 1]);
                                    $data_screen=[
                                        'passage'=>$passage_info,
                                        'car_type'=>'temporary_type',
                                        'village_id'=>$now_order['village_id'],
                                        'car_number'=>$log_info['car_number'],
                                        'channel_id'=>$log_info['channel_id'],
                                        'content'=>'请通行,祝您一路平安',
                                        'voice_content'=>6
                                    ];
                                    (new A11Service())->addParkShowScreenLog($data_screen);
                                    fdump_api(['显屏数据'.__LINE__,'passage_info' => $passage_info,'data_screen' => $data_screen],'a11_park/after_pay_log',1);
                                    $passage_area = isset($passage_info['passage_area']) && $passage_info['passage_area'] ? $passage_info['passage_area'] : 0;
                                    $whereGarage = [];
                                    $whereGarage[] = ['garage_id', '=', $passage_area];
                                    $infoGarage = $db_house_village_parking_garage->getOne($whereGarage, 'garage_num');
                                    $car_park_str = isset($infoGarage['garage_num']) && $infoGarage['garage_num'] ? $infoGarage['garage_num'] : '';
                                }
                                fdump_api(['预付修改临时停车记录为已支付' . __LINE__, 'id' => $house_village_parking_temp['id']], 'a11_park/after_pay_log', 1);
                                $res_park=$db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                                fdump_api(['预付修改临时停车记录为已支付结果' . __LINE__, 'res_park' => $res_park], 'a11_park/after_pay_log', 1);
                            }
                        }
                    }
                    else {
                        //临时车处理
                       if($park_system){
                           $house_village_parking_temp =  $db_house_village_parking_temp->getFind(['car_number'=>$now_order['car_number'],'token'=>$park_system['token']]);
                           fdump_api([$house_village_parking_temp],'A1Park_0930',1);
                             if($house_village_parking_temp){
                                $car_number = $now_order['car_number'] ? $now_order['car_number'] : $house_village_parking_temp['car_number'];
                                $out_channel_id = $house_village_parking_temp['out_channel_id'];
                                if(!$out_channel_id){
                                    $out_channel_id = '1';
                                }
                                if($house_village_parking_temp['is_pay_scene'] == 1){//直付
                                    $nowtime = date("mdHis");
                                    $orderid = $nowtime . sprintf("%04d", $now_order['order_id']);
                                    $json_data['state'] = 1;
                                    $json_data['order_id'] = $house_village_parking_temp['order_id'];
                                    $json_data['service_name'] = 'outpark';
                                    $json_data['trade_no'] = $orderid;
                                    $json_data['pay_type'] = 'scancode';
                                    $json_data['out_channel_id'] = $out_channel_id;//通道号暂时写1
                                    $json_data['total'] = floatval($house_village_parking_temp['price']);
                                    $json_data['errmsg'] = '支付成功';
                                    $json_data['pay_time'] = time();
                                    $json_data['car_number'] = $car_number;
                                    $json_data['arrive_money'] = $house_village_parking_temp['price'];
                                    $json_data['fee'] = 0.00;
                                    $json_data['account_type'] = 1;
                                    $json_data['remark'] = '收到停车费-'.$json_data['car_number'];

                                    $post_data['unserialize_desc'] = serialize($json_data);
                                    $post_data['park_id'] = $park_system['park_id'];
                                    $post_data['token'] = $park_system['token'];
                                    $post_data['service_name'] = 'outpark';
                                    $post_data['order_id'] = $house_village_parking_temp['order_id'] ? $house_village_parking_temp['order_id'] : '';
                                    $post_data['create_time'] = time();
                                    $post_data['car_number'] = $car_number;
                                    $post_data['village_id'] = $now_order['village_id'];
                                    $res =$db_park_total_record->add($post_data);
                                    fdump_api([$res],'A1Park_0930',1);
                                }
                                elseif($house_village_parking_temp['is_pay_scene'] == 2){//无牌车直付
                                    $nowtime = date("mdHis");
                                    $orderid = $nowtime . sprintf("%04d", $now_order['order_id']);
                                    $json_data['state'] = 1;
                                    $json_data['order_id'] = $house_village_parking_temp['order_id'];
                                    $json_data['service_name'] = 'outpark';
                                    $json_data['trade_no'] = $orderid;
                                    $json_data['pay_type'] = 'scancode';
                                    $json_data['out_channel_id'] = $out_channel_id;//通道号暂时写1
                                    $json_data['total'] = floatval($house_village_parking_temp['price']);
                                    $json_data['errmsg'] = '支付成功';
                                    $json_data['pay_time'] = time();//
                                    $json_data['car_number'] = $car_number;
                                    $json_data['arrive_money'] = $house_village_parking_temp['price'];
                                    $json_data['fee'] = 0.00;
                                    $json_data['account_type'] = 1;
                                    $json_data['remark'] = '收到无牌车停车费-'.$json_data['car_number'];

                                    $post_data['unserialize_desc'] = serialize($json_data);
                                    $post_data['park_id'] = $park_system['park_id'];
                                    $post_data['token'] = $park_system['token'];
                                    $post_data['service_name'] = 'outpark';
                                    $post_data['order_id'] = $house_village_parking_temp['order_id'] ? $house_village_parking_temp['order_id'] : '';
                                    $post_data['create_time'] = time();
                                    $post_data['car_number'] = $car_number;
                                    $post_data['village_id'] = $now_order['village_id'];
                                    $res =$db_park_total_record->add($post_data);
                                }elseif($house_village_parking_temp['is_pay_scene'] == 0){//预付
                                    $nowtime = date("mdHis");
                                    $orderid = $nowtime . sprintf("%04d", $now_order['order_id']);

                                    $json_data['car_number'] = $car_number;
                                    $json_data['service_name'] = 'prepay_order';
                                    $json_data['prepay'] = '';//金额 float
                                    $json_data['prepay_type'] = '';
                                    $json_data['pay_channel'] = '0微信';
                                    $json_data['order_id'] = $house_village_parking_temp['order_id'];//车场订单id //跟入场一起
                                    $json_data['query_order_no'] = '';//查询价格编号，查询时收费系统返回的查询价格编号 否
                                    $json_data['park_id'] = $park_system['park_id'];//
                                    $json_data['trade_no'] = $orderid;//
                                    $json_data['query_time'] = $house_village_parking_temp['add_time'];//
                                    $json_data['pay_time'] =  time();//
                                    $json_data['arrive_money'] = $house_village_parking_temp['price'];//到账金额
                                    $json_data['fee'] = 0.00;//手续费
                                    $json_data['account_type'] = 1;//
                                    $json_data['remark'] = '收到停车费-'.$json_data['car_number'];

                                    $post_data['unserialize_desc'] = serialize($json_data);
                                    $post_data['park_id'] = $park_system['park_id'];
                                    $post_data['token'] = $park_system['token'];
                                    $post_data['service_name'] = 'prepay_order';
                                    $post_data['order_id'] = $house_village_parking_temp['order_id'] ? $house_village_parking_temp['order_id'] : '';
                                    $post_data['create_time'] = time();
                                    $post_data['car_number'] = $car_number;
                                    $post_data['village_id'] = $now_order['village_id'];
                                    $res =$db_park_total_record->add($post_data);
                                }
                                 $db_house_village_parking_temp->saveOne(['id'=>$house_village_parking_temp['id']],['is_paid'=>1,'pay_time'=> time()]);
                            }

                        }
                    }
                }
             }
            else{
                if($rule_info['type'] == 2){
                if($now_order['position_id']){
                    $last_order = $db_house_new_order_log->getOne([['position_id','=',$now_order['position_id']],['order_type','=',$now_order['order_type']],['project_id','=',$now_order['project_id']]],true,'id DESC');
                } else{
                    $last_order = $db_house_new_order_log->getOne([['room_id','=',$now_order['room_id']],['order_type','=',$now_order['order_type']],['position_id','=',0],['project_id','=',$now_order['project_id']]],true,'id DESC');
                }
                // 兼容老版停车收费
                if($now_order['order_type'] == 'park'){
                    if($now_order['position_id']){
                        $where22=[
                            ['position_id','=',$now_order['position_id']],
                            ['order_type','=',$now_order['order_type']],
                            ['project_id','=',0],
                        ];
                    }else{
                        $where22=[
                            ['room_id','=',$now_order['room_id']],
                            ['order_type','=',$now_order['order_type']],
                        ];
                    }
                    $new_order_log = $db_house_new_order_log->getOne($where22,true,'id DESC');
                    if(!empty($new_order_log)){
                        $last_order=$new_order_log;
                    }
                    //fdump_api(['线上支付house_new_order_log表数据=='.__LINE__,($now_order['position_id'] ? '车场' : '房产'),$new_order_log->toArray()],'park/shang_log',1);
                }elseif ($now_order['order_type'] == 'property'){
                    if($now_order['position_id']){
                        $where22=[
                            ['position_id','=',$now_order['position_id']],
                            ['order_type','=',$now_order['order_type']],
                        ];
                    }else{
                        $where22=[
                            ['room_id','=',$now_order['room_id']],
                            ['position_id','=',0],
                            ['order_type','=',$now_order['order_type']],
                        ];
                    }
                    $new_order_log = $db_house_new_order_log->getOne($where22,true,'id DESC');
                    if(!empty($new_order_log)){
                        $last_order=$new_order_log;
                    }
                    //fdump_api(['线上支付house_new_order_log表数据=='.__LINE__,($now_order['position_id'] ? '车场' : '房产'),$new_order_log->toArray()],'park/shang_log',1);
                }
                if($last_order){
                    $last_order = $last_order->toArray();
                    if($last_order){
                        $date_order['service_start_time'] = $last_order['service_end_time']+1;
                        $date_order['service_start_time'] = strtotime(date('Y-m-d',$date_order['service_start_time']));
                        $service_start_time = $date_order['service_start_time'];
                        if($now_order['is_prepare'] == 1){
                            $cycle = $now_order['service_give_month_num'] + $now_order['service_month_num'];
                        }else{
                            $cycle = $now_order['service_month_num']?$now_order['service_month_num']:1;
                        }
                        if($rule_info['bill_create_set'] == 1){
                            $date_order['service_end_time'] = strtotime("+".$cycle." day",$date_order['service_start_time'])-1;
                        }elseif(isset($now_order['unify_flage_id']) && !empty($now_order['unify_flage_id'])){
                            $date_order['service_end_time'] =strtotime("+1 month",$date_order['service_start_time'])-1;
                        }elseif ($rule_info['bill_create_set'] == 2){
                            //todo 判断是不是按照自然月来生成订单
                            if(cfg('open_natural_month') == 1){
                                $date_order['service_end_time'] = strtotime("+".$cycle." month",$date_order['service_start_time'])-1;
                            }else{
                                $cycle = $cycle*30;
                                $date_order['service_end_time'] = strtotime("+".$cycle." day",$date_order['service_start_time'])-1;
                            }
                            fdump_api(['线上支付【账单生成周期设置 1：按日生成2：按月生成3：按年生成】 当前是'.$rule_info['bill_create_set'].'=='.__LINE__,(cfg('open_natural_month') == 1 ? '开启自然月' : '未开启自然月'),'天数：'.$cycle,'service_end_time：'.date('Y-m-d H:i:s',$date_order['service_end_time'])],'park/shang_log',1);
                        }else{
                            $date_order['service_end_time'] = strtotime("+".$cycle." year",$date_order['service_start_time'])-1;
                        }
                        $service_end_time = $date_order['service_end_time'];
                    }
                }
                    $db_house_new_order_log->addOne([
                        'order_id'=>$now_order['order_id'],
                        'project_id'=>$now_order['project_id'],
                        'order_type'=>$now_order['order_type'],
                        'order_name'=>$now_order['order_name'],
                        'room_id'=>$now_order['room_id'],
                        'position_id'=>$now_order['position_id'],
                        'property_id'=>$now_order['property_id'],
                        'village_id'=>$now_order['village_id'],
                        'service_start_time'=>$service_start_time,
                        'service_end_time'=>$service_end_time,
                        'add_time'=>time(),
                    ]);
                    if($now_order['order_type'] == 'property'){
                        $service_house_village_user_bind->saveUserBind([
                            ['vacancy_id','=',$now_order['room_id']],
                            ['type','in',[0,3]],
                            ['status','=',1],
                        ],['property_endtime'=>$service_end_time]);
                        $spec = date('Y-m-d',$service_start_time) . '至' . date('Y-m-d',$service_end_time);
                    }
                    if($now_order['order_type'] == 'park' || $now_order['order_type'] == 'parking_management'){
                        if($now_order['position_id']){
                            $service_house_village_parking->editParkingPosition(['position_id'=>$now_order['position_id']],['end_time'=>$service_end_time]);
                            $service_house_village_parking->editParkingCar(['car_position_id'=>$now_order['position_id']],['end_time'=>$service_end_time]);
                        }
                    }
                }
            }
            fdump_api([$now_order['village_id']],'park_after_pay_0521',1);
            //$now_village = $service_house_village->getHouseVillageInfo(['village_id'=>$now_order['village_id']]);
            $detail[$key]['goodsname'] = $now_order['order_name'];
            $detail[$key]['price'] = $now_order['modify_money'];
            $detail[$key]['order_id'] = $now_order['order_id'];
            $spec = isset($spec)?$spec:'';
            $date_order['village_balance'] =$village_balance;
            $date_order['system_balance'] =$system_balance;
            $date_order['pay_amount_points'] = $pay_money;
            $date_order['pay_money'] = $now_order['modify_money'] + $now_order['late_payment_money'];
            if($is_grapefruit_prepaid==1 && $now_order['rate']>0 && $now_order['diy_type']==1 && $now_order['diy_content'] && strpos($now_order['diy_content'],'预缴优惠')!==false){
                $date_order['pay_money']=($date_order['pay_money']*$now_order['rate'])/100;
                $date_order['pay_money']=round($date_order['pay_money'],2);
            }
            $date_order['is_discard'] = 1;
            $date_order['from'] = 2;
            $date_order['discard_reason'] = '';
            fdump_api([$now_order['order_id'],$date_order],'park_after_pay_0521',1);
            $service_house_new_cashier->saveOrder(['order_id'=>$now_order['order_id']],$date_order);
            $msgbalance='物业缴费，扣除小区住户余额';
            if($is_customized_meter_reading>0) {
                $customizeMeterWaterReadingService=new CustomizeMeterWaterReadingService();
                if ($now_order['order_type_flag'] == 'hot_water_balance') {
                    $msgbalance='热水费，扣除小区热水费余额';
                    $customizeMeterWaterReadingService->openUserWaterElectricUse($now_order['village_id'],$now_order['room_id'],$now_order['order_type_flag']);
                } else if ($now_order['order_type_flag'] == 'cold_water_balance') {
                    $msgbalance='冷水费，扣除小区冷水费余额';
                    $customizeMeterWaterReadingService->openUserWaterElectricUse($now_order['village_id'],$now_order['room_id'],$now_order['order_type_flag']);
                } else if ($now_order['order_type_flag']== 'electric_balance') {
                    $msgbalance='电费，扣除小区电费余额';
                    $customizeMeterWaterReadingService->openUserWaterElectricUse($now_order['village_id'],$now_order['room_id'],$now_order['order_type_flag']);
                }
            }
            if ($now_order['deposit_money']>0){
                $db_house_new_deposit_log=new HouseNewDepositLog();
                $deposit_info=$db_house_new_deposit_log->get_one(['order_id'=>$now_order['order_id'],'type'=>2]);
                if (empty($deposit_info)){
                    $deposit_info1=$db_house_new_deposit_log->get_one(['room_id'=>$now_order['room_id']]);
                    if ($deposit_info1['total_money']>$now_order['deposit_money']){
                        $deposit_money11= $deposit_info1['total_money']-$now_order['deposit_money'];
                    }else{
                        $deposit_money11=0;
                    }
                    $db_house_new_deposit_log->addOne([
                        'order_id'=>$now_order['order_id'],
                        'order_no'=>$cashier_order['order_no'],
                        'type'=>2,
                        'before_money'=>$deposit_info1['total_money'],
                        'money'=>$now_order['deposit_money'],
                        'total_money'=>$deposit_money11,
                        'role_id'=>$now_order['role_id'],
                        'room_id'=>$now_order['room_id'],
                        'village_id'=>$now_order['village_id'],
                        'add_time'=>time(),
                    ]);
                    //押金解冻
                    $frozen_data=['order_id'=>$now_order['order_id'],'type'=>2];
                    $this->editFrozenlog($frozen_data);
                }
            }
            //社区对账.
            $order_info = array_merge($tmp_order,$now_order);
            fdump_api(['新版本支付'.__LINE__,$tmp_order,$now_order,$order_info],'new_after_pay',1);
            $order_info['order_type'] = 'village_new_pay';
            if($plat_order_info['is_own']==0 || $plat_order_info['is_own']==1){
                $plat_order_info['is_own']+=4;
            }
            $order_info['is_own'] = $plat_order_info['is_own']-4;
            if (!$order_info['balance_pay']) {

                $order_info['balance_pay'] = 0;
            }
            $order_info['money'] = $order_info['pay_money'];
            $order_info['village_balance']=$village_balance;  //减掉小区住户余额
            $order_info['money']=$order_info['money']>0 ? $order_info['money']:0;
            fdump_api(['新版本支付'.__LINE__,$tmp_order,$now_order,$order_info],'new_after_pay',1);
            $res = invoke_cms_model('SystemBill/bill_method',['type'=>$plat_order_info['is_own'],'order_info'=>$order_info,'is_fenzhang'=>0,'is_new_charge'=>1]);
            //$res = D('SystemBill')->bill_method($plat_order_info['is_own'],$tmp_order);
            if(!$res['retval']['error_code']){
                $is_pay_bill = 2;
                $service_house_new_cashier->saveOrder(['summary_id'=>$order_id],['is_pay_bill'=>$is_pay_bill]);
            }

            //-----小区住户余额start-------//
            if ($village_balance > 0) {
                $village_money_data=[
                    'uid'=>$cashier_order['pay_uid'],
                    'village_id'=>$cashier_order['village_id'],
                    'type'=>2,
                    'current_village_balance'=>$village_balance,
                    'role_id'=>$now_order['role_id'],
                    'desc'=>L_($msgbalance."，订单编号X1", array("X1" => $cashier_order['order_no'])),
                    'order_id'=>$now_order['order_id'],
                    'order_type'=>1,
                    'opt_money_type'=>$opt_money_balance_type
                ];
                $villageUseResult = $village_user->addVillageUserMoney($village_money_data);
                if ($villageUseResult['error_code']) {
                    throw new \Exception($villageUseResult['msg'], 1003);
                }
            }
            array_push($messageDatas['order_type'],(new HouseNewChargeService())->getType($now_order['order_type']));
            //-------小区住户余额end--------//
        }
        if(empty($save_paid_order_record['village_id']) && $village_id>0){
             $save_paid_order_record['village_id']=$village_id;
        }
        $house_type_arr=array_unique($house_type_arr);
        $save_paid_order_record['house_type']=$house_type_arr ? implode(',',$house_type_arr):'';
        $save_paid_order_record['sub_order_ids']=$sub_order_ids ? implode(',',$sub_order_ids):'';
        $houseNewChargeProjectService=new HouseNewChargeProjectService();
        $business_name_tmp=$houseNewChargeProjectService->getChargeNanmeStr($house_type_arr);
        $save_paid_order_record['business_name']=$business_name_tmp ? $business_name_tmp:$business_name;
        $save_paid_order_record['extra_data']=json_encode($record_extra_data,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
        $save_paid_order_record['order_type']=$tmp_order_type;
        $save_paid_order_record['order_type_v']=$tmp_order_type_v;

        $whereArr=array();
        if ($pay_order_info_id > 0) {
            $whereArr[] = array('pay_order_info_id', '=', $pay_order_info_id);
        }else if($order_record_id>0){
            $whereArr[] = array('id', '=', $order_record_id);
        }else{
            $whereArr[]=array('village_id','=',$save_paid_order_record['village_id']);
            $whereArr[]=array('source_from','=',1);
            $whereArr[]=array('order_id','=',$save_paid_order_record['order_id']);
            $whereArr[]=array('order_no','=',$save_paid_order_record['order_no']);
            $whereArr[]=array('table_name','=','house_new_pay_order_summary');
        }
        $paidOrderRecordDb = new PaidOrderRecord();
        $paidOrderRecordInfo = $paidOrderRecordDb->getOneData($whereArr, 'id,update_time');
        if ($paidOrderRecordInfo && !$paidOrderRecordInfo->isEmpty()) {
            $paidOrderRecordDb->saveOneData(array(['id', '=', $paidOrderRecordInfo['id']]), $save_paid_order_record);
        } else {
            $save_paid_order_record['business_type']='village_new_pay';
            $save_paid_order_record['pay_type']=$plat_order_info['pay_type'];
            $save_paid_order_record['pay_money']=$plat_order_info['pay_money'];
            $save_paid_order_record['is_own']=$plat_order_info['is_own'];
            $save_paid_order_record['pay_order_no']=$plat_order_info['orderid'];
            $save_paid_order_record['business_order_id']=$plat_order_info['id'];
            $save_paid_order_record['third_transaction_no']=$plat_order_info['third_id'];
            $paidOrderRecordDb->addOneData($save_paid_order_record);
        }
        if(isset($plat_order_info['village_balance'])){
            $messageDatas['pay_money']=$messageDatas['pay_money']+$plat_order_info['village_balance'];
//            $plat_order_info['pay_money']=$plat_order_info['pay_money']+$plat_order_info['village_balance'];
        }
        $plat_order_info['pay_money']=$cashier_order['total_money'];
        //获取购买用户信息
        $userService = new UserService();
        $buyer = $userService->getUser($cashier_order['pay_uid'], 'uid');
        if (empty($buyer)) {
            if($cashier_order['pay_uid']<1 && !empty($park_new_type_arr) && in_array('temporary_type',$park_new_type_arr)){
                //有临时 支付  且 pay_uid 字段值是0 不抛出异常
                $buyer=array('now_money'=>0,'score_count'=>0);
            }else{
                throw new \Exception(L_("购买用户不存在"), 1003);
            }
        }
        //判断帐户余额,扣除余额
        $balancePay = floatval($extra['current_system_balance']);
        if ($balancePay && $buyer['now_money'] < $balancePay) {
            throw new \Exception(L_("您的帐户余额不够此次支付"), 1003);
        }
        if ($balancePay > 0) {
            $useResult = (new UserService())->userMoney($cashier_order['pay_uid'], $balancePay, L_("物业缴费，扣除余额，订单编号X1", array("X1" => $cashier_order['order_no'])));
            if ($useResult['error_code']) {
                throw new \Exception($useResult['msg'], 1003);
            }
        }

        //积分抵扣，扣除积分
        $scoreUsedCount = $extra['current_score_use'];
        fdump_api([$scoreUsedCount,$buyer['score_count']],'score_0224',1);
        if ($scoreUsedCount && $buyer['score_count'] < $scoreUsedCount&&ceil($buyer['score_count'])<$scoreUsedCount) {
            throw new \Exception(L_("您的积分余额不够此次支付"), 1003);
        }
        if ($scoreUsedCount > 0) {
            if ($buyer['score_count'] < $scoreUsedCount&&ceil($buyer['score_count'])>=$scoreUsedCount){
                $scoreUsedCount=$buyer['score_count'];
            }
            $use_result = (new UserService())->userScore($cashier_order['pay_uid'], $scoreUsedCount, L_("物业缴费 ，扣除X1 ，订单编号X2", array( "X1" => cfg('score_name'), "X2" => $cashier_order['order_no'])));
            if ($use_result['error_code']) {
                throw new \Exception($use_result['msg'], 1003);
            }
        }

        /*if($auto){
            $order_no = date('Ymd') . str_pad(mt_rand(1, 99999), 5, '0', STR_PAD_LEFT);
            $now_bind_info['name'] = !empty($now_bind_info['name'])?$now_bind_info['name']:'未知用户';
            $res = $this->addInvoice($now_bind_info['address'].'-'.$now_bind_info['name'],$now_bind_info['phone'],$order_no,$e_config['duty_paragraph'],$detail,$now_village['village_name'],$spec,$now_village['property_id']);
            if($res['status'] == '0000'){
                $this->addERecord($e_config['duty_paragraph'],$now_bind_info['name'],$now_bind_info['phone'],$res['fpqqlsh'],$order_no,$detail,$now_bind_info['pigcms_id']);
            }
        }*/
        if (isset($cashier_order['pay_uid']) && $cashier_order['pay_uid']) {
            $now_user = $service_user->getUser($cashier_order['pay_uid'],'uid');
        } else {
            $now_user = $service_user->getUser($cashier_order['uid'],'uid');
        }
        $village_info = $service_house_village->getHouseVillageInfo(array('village_id'=>$cashier_order['village_id']));
        $property_info = $service_house_village->get_house_property($village_info['property_id'],'property_name');
        $messageDatas['property_id']=$village_info['property_id'];
        $messageDatas['property_name']=$property_info['property_name'];
        $messageDatas['village_name']=$village_info['village_name'];
        $messageDatas['name'] = $name;
        $keynote1 = $property_info['property_name'];
        if (isset($village_info['village_name']) && $village_info['village_name']) {
            $keynote1 .= ' ' . $village_info['village_name'];
        }
        if ($car_park_str) {
            $car_park_str .= '（车场）';
            $keynote1 .= ' ' . $car_park_str;
        }
        if (count($car_number_arr) == 1) {
            $car_number_txt = $car_number_arr[0];
            $keynote2 = '车牌 ' . $car_number_txt;
        } elseif (count($car_number_arr) > 1) {
            $car_number_txt = implode(',', $car_number_arr);
            $keynote2 = '车牌 ' . $car_number_txt;
        } elseif ($name) {
            $keynote2 = '用户 ' . $name;
        } else {
            $keynote2 = '物业号 '. $village_bind['usernum'];
        }
        $remark = '缴费时间：'.date('Y年n月j日 H:i',time()).'\n'.'缴费金额：'.$plat_order_info['pay_money'];
        if (count($car_number_arr) == 1 && $car_stay_time) {
            // 车辆停留时长
            $hours  = intval($car_stay_time / 3600);
            $mins   = intval(($car_stay_time - $hours * 3600) / 60);
            $second = $car_stay_time - $hours * 3600 - $mins * 60;
            $car_stay_time_txt = '';
            if ($hours) {
                $car_stay_time_txt .= $hours . '小时';
            }
            if ($mins) {
                $car_stay_time_txt .= $mins . '分钟';
            }
            if ($second) {
                $car_stay_time_txt .= $second . '秒';
            }
            $remark .= '\n停留时长：'.$car_stay_time_txt;
        }
        if (count($car_number_arr) == 1 && $car_stored_price) {
            // 车辆储值余额
            $remark .= '\n储值余额：'.$car_stored_price.'元';
        }
        if (count($car_number_arr) >= 1 && $car_end_time) {
            // 车辆月租
            $remark .= '\n月租期限：'.date('Y-m-d H:i:s', $car_end_time);
        }
        //查询收费类型
        $thing9 = $messageDatas['order_type']??[];
        $thing9 = array_unique($thing9);
        $thing9 = implode('、',$thing9);
        if (mb_strlen($thing9, 'utf8') > 12) {
            $thing9 = mb_substr($thing9, 0, 12, 'utf8') . '......';
        }
        //查询收费标准
        $thing13 = $messageDatas['pay_type_str']??'';
        $dateStr=date('Y年n月j日H点i分',time());
        if(!empty($now_user['openid'])){
            $templateNewsService = new TemplateNewsService();
            if (count($order_list) == 1 && $only_order_id) {
                $href = get_base_url('pages/houseMeter/NewCollectMoney/billDetails?order_id=' .$only_order_id.'&type=2');
            } else {
                $href = get_base_url('pages/houseMeter/NewCollectMoney/billsPaid?pigcms_id='.$cashier_order['pay_bind_id'].'&village_id='.$cashier_order['village_id']);
            }
            $messageDatas['address']=$village_bind['address'];
            $datamsg = [
                'tempKey' => 'TM01008',//todo 类目模板TM01008
                'dataArr' => [
                    'href'     => $href,
                    'wecha_id' => $now_user['openid'],
                    'first'    => '缴费成功提醒',
                    'keynote1' => $keynote1,
                    'keynote2' => $keynote2,
                    'remark'   => $remark,
                    'new_info' => [//新版本发送需要的信息
                        'type'=>1,//缴费提醒类型（0：提醒缴费，1：提醒缴费成功）
                        'thing8'=>$name,//户名
                        'thing17'=>$messageDatas['village_name'].$messageDatas['address'],//地址
                        'thing9'=>$thing9?:'缴费',//账单类型
                        'thing13'=>$thing13?:'无',//缴费方式
                        'thing10'=>$messageDatas['property_name'],//商家名称（物业名称）
                        'amount3'=>$messageDatas['pay_money'].'元',//缴费金额
                        'time12'=>$dateStr,//缴费时间
                    ],
                ]
            ];
            $templateNewsService->sendTempMsg($datamsg['tempKey'], $datamsg['dataArr'],0,$village_info['property_id'],1);
        }

        if ($village_bind['single_id'] && $village_bind['floor_id'] && $village_bind['layer_id'] && $village_bind['vacancy_id'] && $village_bind['village_id']) {
            $address = $serviceHouseVillage->getSingleFloorRoom($village_bind['single_id'],$village_bind['floor_id'],$village_bind['layer_id'],$village_bind['vacancy_id'],$village_bind['village_id']);
            if ($address) {
                $village_bind['address'] = $address;
            }
        }
        $messageDatas['address']=$village_bind['address'];
        if($village_info['openid']){
            if (isset($village_bind['address']) && $village_bind['address']) {
                $first =  '业主 '.$name.'( '.$village_bind['address'].' )缴费成功提醒';
            } else {
                $first = '用户 '.$name.' 缴费成功提醒';
            }
            $templateNewsService = new TemplateNewsService();
            $datamsg = [
                'tempKey' => 'TM01008',//todo 类目模板TM01008
                'dataArr' => [
                    'wecha_id' => $village_info['openid'],
                    'first'    => $first,
                    'keynote1' => $keynote1,
                    'keynote2' => $name."( ".$phone." )",
                    'remark'   => '社区缴费\n：'.$remark,
                    'new_info' => [//新版本发送需要的信息
                        'type'=>1,//缴费提醒类型（0：提醒缴费，1：提醒缴费成功）
                        'thing8'=>$name,//户名
                        'thing17'=>$messageDatas['village_name'].$messageDatas['address'],//地址
                        'thing9'=>$thing9?:'缴费',//账单类型
                        'thing13'=>$thing13?:'无',//缴费方式
                        'thing10'=>$messageDatas['property_name'],//商家名称（物业名称）
                        'amount3'=>$messageDatas['pay_money'].'元',//缴费金额
                        'time12'=>$dateStr,//缴费时间
                    ],
                ]
            ];
            $templateNewsService->sendTempMsg($datamsg['tempKey'], $datamsg['dataArr'],0,$village_info['property_id'],1);
        }
        if($now_order['order_type'] == 'property'){
            try {
                $userList = $service_house_village_user_bind->getList([['vacancy_id','=',$now_order['room_id']], ['status','=',1]], 'uid, pigcms_id');
                $houseFaceImgService = new HouseFaceImgService();
                foreach ($userList as $userInfo) {
                    $houseFaceImgService->commonUserToBox($userInfo['uid'], $userInfo['pigcms_id']);
                }
            } catch (\Exception $e){
                fdump_api($e->getMessage(),'$houseFaceImgService');
            }
        }

        $this->sendMessageToHouseWorker($village_id,$messageDatas);
    }

    public function sendMessageToHouseWorker($village_id=0,$datas=array()){

        if($village_id<1){
            return false;
        }
        $templateNewsService = new TemplateNewsService();
        $property_id=isset($datas['property_id']) ? $datas['property_id']:0;
        $type=$property_id>0 ? 1:0;
        $service_house_village = new HouseVillageService();
        $village_info_extend = $service_house_village->getHouseVillageInfoExtend(['village_id'=>$village_id]);
        $urge_notice_type=0;
        if($village_info_extend && isset($village_info_extend['urge_notice_type'])){
            //1短信通知2微信模板通知3短信和微信模板通知
            $urge_notice_type=$village_info_extend['urge_notice_type'];
        }
        $service_house_new_charge_project = new HouseNewChargeProjectService();
        $charge_info = $service_house_new_charge_project->getChargeSetInfo($village_id);
        $wids='';
        $dateStr=date('Y年n月j日H点i分',time());
        if($charge_info && isset($charge_info['wids']) && !empty($charge_info['wids'])){
            if(!is_array($charge_info['wids'])){
                $wids=json_decode($charge_info['wids'],1);
            }else{
                $wids=$charge_info['wids'];
            }
            fdump_api(['wids'=>$wids],'000sendMessageToHouseWorker',1);
            if(!empty($wids)){
                $href = cfg('site_url').'/packapp/community/pages/Community/NewCollectMoney/FeeDetails?order_id='.$datas['order_id'].'&type=2&gotoIndex=tem_msg';
                if($datas['type']==1){
                    $href = cfg('site_url').'/packapp/community/pages/Community/NewCollectMoney/PaymentDetails?summary_id='.$datas['summary_id'].'&gotoIndex=tem_msg';
                }
                $first='缴费成功提醒';
                if(!empty($datas['name'])){
                    $first=' 业主【'.$datas['name'].'】缴费成功提醒';
                }
                //查询物业名称
                $property_name = $datas['property_name']??'';
                if(!$property_name){
                    $property_name = (new HouseProperty())->where('id',$village_info_extend['property_id'])->value('property_name');
                }
                //查询收费类型
                $thing9 = $datas['order_type']??[];
                $thing9 = array_unique($thing9);
                $thing9 = implode('、',$thing9);
                if (mb_strlen($thing9, 'utf8') > 12) {
                    $thing9 = mb_substr($thing9, 0, 12, 'utf8') . '......';
                }
                //查询收费标准
                $thing13 = $datas['pay_type_str']??'';
                $datamsg = [
                    'tempKey' => 'TM01008',//todo 类目模板TM01008
                    'dataArr' => [
                        'href' => $href,
                        'wecha_id' => '',
                        'first' => $first ,
                        'keynote1' =>$datas['village_name'],
                        'keynote2' =>$datas['address'],
                        'remark' => '社区缴费\n缴费时间：'.$dateStr.'\n'.'已缴总额为：'.$datas['pay_money'].'元，点击查看！',
                        'new_info' => [//新版本发送需要的信息
                            'type'=>1,//缴费提醒类型（0：提醒缴费，1：提醒缴费成功）
                            'thing8'=>$datas['name'],//户名
                            'thing17'=>$datas['village_name'].$datas['address'],//地址
                            'thing9'=>$thing9?:'缴费',//账单类型
                            'thing13'=>$thing13?:'无',//缴费方式
                            'thing10'=>$property_name,//商家名称（物业名称）
                            'amount3'=>$datas['pay_money'].'元',//缴费金额
                            'time12'=>$dateStr,//缴费时间
                        ],
                    ]
                ];
                $houseWorkerDb=new HouseWorker();
                foreach ($wids as $wid){
                    if($wid>0){
                        $whereArr=[['wid','=',$wid],['is_del','=',0]];
                        $whereArr[]=['status','in',array(0,1)];
                        $workerObj=$houseWorkerDb->get_one($whereArr,'wid,village_id,property_id,type,phone,name,openid,nickname,status');
                        if($workerObj && !$workerObj->isEmpty()){
                            $worker=$workerObj->toArray();
                            if($urge_notice_type!=2 && !empty($worker['phone']) && strlen($worker['phone'])==11){
                                //发短信
                                //模板 缴费成功通知，业主{1}在{2}缴纳{3}小区{4}物业费用。缴费总金额为{5}元
                                $sms_data = array('type' => 'fee_notice');
                                $sms_data['uid'] = 0;
                                $sms_data['village_id'] = $village_id;
                                $sms_data['mobile'] = $worker['phone'];
                                $sms_data['sendto'] = 'user';
                                $sms_data['mer_id'] = 0;
                                $sms_data['store_id'] = 0;
                                $sms_data['nationCode'] =86;
                                $sms_content = L_('缴费成功通知，业主x1在x2缴纳x3小区的x4物业费用。缴费总金额为x5元', array('x1' => $datas['name'], 'x2' => $dateStr,'x3' =>$datas['village_name'],'x4' =>$datas['address'],'x5'=>$datas['pay_money']));
                                $sms_data['content']=$sms_content;
                                $sms = (new SmsService())->sendSms($sms_data);
                                fdump_api([$sms_data,$sms],'000sendMessageToHouseWorker',1);
                            }
                            if($urge_notice_type!=1 && !empty($worker['openid'])){
                                //发模板消息
                                $datamsg['dataArr']['wecha_id']=$worker['openid'];
                                fdump_api([$datamsg,$property_id,$type],'000sendMessageToHouseWorker',1);
                                $templateNewsService->sendTempMsg($datamsg['tempKey'], $datamsg['dataArr'],0,$property_id,$type);
                            }
                        }
                    }

                }
            }
        }
    }

    /**
     * 可得到的积分
     * @author lijie
     * @date_time 2021/06/24
     * @param $order_id
     * @param $now_user
     * @param bool $user_score
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function get_score($order_id,$now_user,$user_score=true){
        fdump_api([$order_id,$now_user],'payinfo_0224',1);
        $service_house_new_cashier = new HouseNewCashierService();
        $service_house_village_config = new HouseVillageConfigService();
        $service_config = new ConfigService();
        $db_plat_order = new PlatOrder();
        $plat_order_info = $db_plat_order->get_one(['order_id'=>$order_id]);
        if($plat_order_info && !$plat_order_info->isEmpty()){
            $plat_order_info=$plat_order_info->toArray();
        }else{
            return false;
        }
        $order_info = $service_house_new_cashier->getOrderSummary(['summary_id'=>$plat_order_info['business_id']]);
        // 其他缴费也可获得积分
        $percent = 0;            //计算物业费和抵扣金额
        //判断是否允许使用积分
        $village_config = $service_house_village_config->getConfig(['village_id'=>$order_info['village_id']]);
        //首先得到 积分比例 和 用户总积分
        $system_config = $service_config->addConfigData();
        //得到多少积分抵扣一元
        $moneytointegral = cfg('user_score_use_percent');
        //得到用户总积分
        $user_score_count = $now_user['score_count'];
        //得到总金额
        $total_price = $order_info['pay_money'];
        //第一步 判断是否允许使用积分 (注意 这里是针对设置了小区本身的缴费配置)
        if($village_config['village_pay_use_integral']==1){ //允许使用积分 针对小区开启
            $percent = $village_config['use_max_integral_percentage'];
            $property_info = $this->get_use_score($total_price ,$village_config['use_max_integral_percentage'] , $village_config['use_max_integral_num'] , $moneytointegral , $user_score_count);
        }elseif($village_config['village_pay_use_integral']==0){ // 继承系统设置
            if(cfg('village_pay_use_integral')==1){
                $percent = cfg('use_max_integral_percentage');
                $property_info = $this->get_use_score($total_price ,cfg('use_max_integral_percentage') , cfg('use_max_integral_num') , $moneytointegral , $user_score_count);
            }else{
                $property_info['use_total_score_count'] = 0;
                $property_info['use_total_money'] = 0;
            }
        }else{
            $property_info['use_total_score_count'] = 0;
            $property_info['use_total_money'] = 0;
        }
        //计算可生成积分多少
        if($village_config['village_pay_integral']==1){ //允许生成积分
            if($village_config['open_score_get_percent']==1){
                // 开启了积分百分比， 取当前小区的积分百分比计算
                $score_get = $village_config['score_get_percent']/100;
            }else{
                // 关闭了积分百分比， 取当前小区的积分计算
                $score_get = $village_config['user_score_get'];
            }
            if(empty($score_get)){
                $score_get=0;
            }
            if ($user_score) { // 使用了积分
                $property_info['generate_integral'] = ($total_price - $property_info['use_total_money']) * $score_get; // 得到生成积分
            }else{ // 未使用积分
                $property_info['generate_integral'] = $total_price * $score_get; // 得到生成积分
            }
        }elseif($village_config['village_pay_integral']==0){ //继承平台设置 是否允许生成积分
            if(cfg('village_pay_integral')==1){ // 平台允许生成积分
                if(cfg('open_score_get_percent')==1){
                    // 开启了积分百分比， 取平台小区的积分百分比计算
                    $score_get = cfg('score_get_percent')/100;
                }else{
                    // 关闭了积分百分比， 取平台小区的积分计算
                    $score_get = cfg('user_score_get');
                }
                if(empty($score_get)){
                    $score_get=0;
                }
                if ($user_score) { // 使用了积分
                    $property_info['generate_integral'] = ($total_price - $property_info['use_total_money']) * $score_get; // 得到生成积分
                }else{ // 未使用积分
                    $property_info['generate_integral'] = $total_price * $score_get; // 得到生成积分
                }
            }else{
                $property_info['generate_integral'] = 0; // 得到生成积分
            }
        }elseif($village_config['village_pay_integral']==-1){ //不允许生成积分
            $property_info['generate_integral'] = 0;
        }

        $data_order['score_can_use'] = round_number($property_info['use_total_score_count'],2);
        $data_order['score_can_pay'] = round_number($property_info['use_total_money'],2);
        $data_order['score_percent'] = round_number($percent,2);
        $data_order['score_can_get'] = round_number($property_info['generate_integral'],2);
        fdump_api([$property_info,$data_order,$total_price,$score_get],'payinfo_0224',1);

        $service_house_new_cashier->saveOrderSummary(['summary_id'=>$plat_order_info['business_id']],$data_order);
        return $data_order;
    }

    // 计算可使用积分
    /****************************************************************
    $total_price 总价格
    $use_max_integral_percentage 使用最大积分占总额百分比
    $use_max_integral_num 允许使用的最大积分
    $moneytointegral 多少积分抵扣一元
    $user_score_count 用户总共多少积分
     ****************************************************************/
    public function get_use_score($total_price ,$use_max_integral_percentage , $use_max_integral_num , $moneytointegral , $user_score_count){
        if ($user_score_count<=0) {
            $property_info['use_total_score_count'] = 0;
            $property_info['use_total_money'] = 0;
            return $property_info;
        }
        if($use_max_integral_percentage > 0){ //使用最大百分比

            //得到最大抵扣金额
            $max_use_price = sprintf("%.2f",$total_price * $use_max_integral_percentage / 100);

            //计算可以使用多少积分
            $use_total_score_count = floor($max_use_price * $moneytointegral);

            //这里计算用户应该支出的积分  和 应该抵扣的钱  和 要支付的钱
            if($user_score_count < $use_total_score_count){

                $property_info['use_total_money'] =sprintf("%.2f",$user_score_count/$moneytointegral);
                $property_info['use_total_score_count'] = $property_info['use_total_money'] * $moneytointegral;

            }else{
                $property_info['use_total_money'] = $max_use_price;
                $property_info['use_total_score_count'] = $use_total_score_count;
            }
        }elseif($use_max_integral_num > 0){ //使用最大积分
            if($use_max_integral_num < $user_score_count){
                $property_info['use_total_money'] = sprintf("%.2f",$use_max_integral_num / $moneytointegral);
                $property_info['use_total_score_count'] = $property_info['use_total_money'] * $moneytointegral;
            }else{
                $property_info['use_total_money'] = sprintf("%.2f",$user_score_count/$moneytointegral);
                $property_info['use_total_score_count'] = $property_info['use_total_money'] * $moneytointegral;
            }

            if ($property_info['use_total_money']>$total_price) { // 可抵扣金额大于支付金额
                $property_info['use_total_money'] = $total_price;
                $property_info['use_total_score_count'] = $total_price * $moneytointegral;
            }
        }else{ // 否则不计算
            $property_info['use_total_score_count'] = 0;
            $property_info['use_total_money'] = 0;
        }
        return $property_info;
    }

    /**
     * 移动管理端线下支付
     * @author lijie
     * @date_time 2021/07/08
     * @param int $summary_id
     * @param int $pay_type
     * @param string $remark
     * @param string $app_type
     * @param int $offline_pay_type
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function pay($summary_id=0,$pay_type=1,$remark='',$app_type='',$offline_pay_type=0)
    {
        if (!$summary_id) {
            return array('error_code'=>1,'msg'=>'参数传递出错！');
        }
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_new_cashier = new HouseNewCashierService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $db_house_new_order_log = new HouseNewOrderLog();
        $summary_order_info = $db_house_new_pay_order_summary->getOne(['summary_id'=>$summary_id],true);
        if($summary_order_info['is_paid'] == 1){
            return array('error_code'=>1,'msg'=>'该订单已经支付！');
        }
        if($pay_type == 2){
            $is_online = 0;
        }else{
            $is_online = 1;
        }
        $res = $db_house_new_pay_order_summary->saveOne(['summary_id'=>$summary_id],['is_paid'=>1,'pay_time'=>time(),'pay_type'=>$pay_type,'remark'=>$remark,'is_online'=>$is_online,'offline_pay_type'=>$offline_pay_type]);
        if(!$res){
            return array('error_code'=>1,'msg'=>'支付失败！');
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $order_list = $db_house_new_pay_order->getList(['o.summary_id'=>$summary_id],'o.*',0,0,'o.order_id ASC');
        if (empty($order_list)) {
            return array('error_code'=>1,'msg'=>'没有子订单！');
        }
        $total_money = 0.00;
        $pay_money = 0.00;
        $updateData['is_paid'] = 1;
        $updateData['pay_time'] = time();
        $updateData['pay_type'] = $pay_type;
        $updateData['is_online'] = $is_online;
        $updateData['offline_pay_type'] = $offline_pay_type;
        $updateData['update_time'] = time();
        $updateData['remark'] = $remark;
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        foreach ($order_list as $value){
            $total_money += getFormatNumber($value['late_payment_money'] + $value['modify_money']);
            $pay_money = getFormatNumber($value['late_payment_money'] + $value['modify_money']);
            $service_end_time = $value['service_end_time'];
            $updateData['service_start_time'] = $value['service_start_time'];
            $updateData['service_end_time']= $value['service_end_time'];
            $service_start_time = $value['service_start_time'];
            $updateData['pay_money'] = $pay_money;
            $rule_info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$value['rule_id']],'n.charge_type,r.*,p.type');
            if($rule_info['type'] == 2||$value['order_type'] == 'park_new'){
                if($value['position_id']){
                    $last_order = $db_house_new_order_log->getOne([['position_id','=',$value['position_id']],['order_type','=',$value['order_type']],['project_id','=',$value['project_id']]],true,'id DESC');
                } else{
                    $last_order = $db_house_new_order_log->getOne([['room_id','=',$value['room_id']],['order_type','=',$value['order_type']],['position_id','=',0],['project_id','=',$value['project_id']]],true,'id DESC');
                }
                if($last_order){
                    $last_order = $last_order->toArray();
                    if($last_order){
                        $updateData['service_start_time'] = $last_order['service_end_time']+1;
                        $updateData['service_start_time'] = strtotime(date('Y-m-d',$updateData['service_start_time']));
                        $service_start_time = $updateData['service_start_time'];
                        if($value['is_prepare'] == 1){
                            $cycle = $value['service_give_month_num'] + $value['service_month_num'];
                        }else{
                            $cycle = $value['service_month_num']?$value['service_month_num']:1;
                        }
                        if($rule_info['bill_create_set'] == 1){
                            $updateData['service_end_time'] = strtotime("+".$cycle." day",$updateData['service_start_time'])-1;
                        }elseif ($rule_info['bill_create_set'] == 2){
                            //todo 判断是不是按照自然月来生成订单
                            if(cfg('open_natural_month') == 1){
                                $updateData['service_end_time'] = strtotime("+".$cycle." month",$updateData['service_start_time'])-1;
                            }else{
                                $cycle = $cycle*30;
                                $updateData['service_end_time'] = strtotime("+".$cycle." day",$updateData['service_start_time'])-1;
                            }
                        }else{
                            $updateData['service_end_time'] = strtotime("+".$cycle." year",$updateData['service_start_time'])-1;
                        }
                        $service_end_time = $updateData['service_end_time'];
                    }
                }
                if($value['order_type'] == 'property'){
                    $service_house_village_user_bind->saveUserBind([
                        ['vacancy_id','=',$value['room_id']],
                        ['type','in',[0,3]],
                        ['status','=',1],
                    ],['property_endtime'=>$service_end_time]);
                    $spec = date('Y-m-d',$service_start_time) . '至' . date('Y-m-d',$service_end_time);
                }
                if($value['order_type'] == 'park_new'){
                    $db_House_new_parking=new HouseNewParkingService();
                    $db_house_village_park_config=new HouseVillageParkConfig();
                    $db_house_village_parking_car=new HouseVillageParkingCar();
                    $db_house_village_parking_position=new HouseVillageParkingPosition();
                    $db_park_passage=new ParkPassage();
                    $db_house_village=new HouseVillage();
                    $db_park_system=new ParkSystem();
                    $db_park_total_record=new ParkTotalRecord();
                    $service_house_new_charge_prepaid=new HouseNewChargePrepaid();
                    $park_config=$db_house_village_park_config->getFind(['village_id'=>$value['village_id']]);
                    $park_sys_type=$park_config['park_sys_type'];
                    $house_village =$db_house_village->getOne($value['village_id'],'village_name');
                    $park_system =$db_park_system->getFind(['park_id'=>$value['village_id']]);
                    fdump_api([$value,$park_config,$house_village,$park_system],'children_position_log_0803',1);
                    //月租车缴费
                    if ($value['car_type']=='month_type'){
                        $prepaid_info= $service_house_new_charge_prepaid-> getList(['charge_rule_id'=>$value['rule_id']]);
                        $parking_position =$db_house_village_parking_position->getFind(['position_id'=>$value['position_id']]);
                        $parking_car = $db_house_village_parking_car->getHouseVillageParkingCarLists(['car_position_id'=>$parking_position['position_id']],'*',0);
                        $channel_number_arr =$db_park_passage->getColumn(['village_id'=>$value['village_id']],'channel_number');
                        $channel_number_str = implode(',', $channel_number_arr);
                        fdump_api([$prepaid_info,$parking_position,$parking_car,$channel_number_arr,$channel_number_str],'children_position_log_0803',1);
                        if (!$channel_number_str) {
                            $channel_number_str = '';
                        }
                        if (2!=$parking_position['position_pattern']) {
                            // 固定车位-共同使用一个月卡会员编号
                            if ($parking_position['card_id']) {
                                $now_car_id = $parking_position['card_id'];
                            } else {
                                $now_car_id = '1'.sprintf("%09d",$parking_position['position_id']);//月卡会员编号（收费系统唯一编号  是
                                $park_position_set['card_id'] = $now_car_id;
                            }
                            $address = $house_village['village_name'] .'车位：'.$parking_position['position_num'];
                        } else {
                            $address = $house_village['village_name'];
                        }
                        // 如果是虚拟停车位 对应每一个车生成唯一收费编号
                        $parking_car_type_arr = $db_House_new_parking->parking_car_type_arr;
                        foreach($parking_car as $k=>$vv){
                            if ($parking_position['end_time']<time()){
                                $park_end_time=strtotime(date('Y-m-d 23:59:59',time()));
                            }else{
                                $park_end_time= $parking_position['end_time'];
                            }
                            $park_set = [];
                            $park_data['begin_time'] = $park_end_time+1;
                            if($value['is_prepare'] == 1){
                                if (!empty($prepaid_info)){
                                    $prepaid_info=$prepaid_info->toArray();
                                }
                                if (!empty($prepaid_info)){
                                    $prepaidInfo=$prepaid_info[0];
                                    if ($prepaidInfo['give_cycle_datetype']==1){
                                        $park_end_time = strtotime("+".$value['service_give_month_num']." day",$park_end_time);
                                    }elseif($prepaidInfo['give_cycle_datetype']==2){
                                        $park_end_time = strtotime("+".$value['service_give_month_num']." day",$park_end_time);
                                    }elseif($prepaidInfo['give_cycle_datetype']==3){
                                        $park_end_time = strtotime("+".$value['service_give_month_num']." day",$park_end_time);
                                    }
                                }

                                $cycle = $value['service_month_num'];
                            }else{
                                $cycle = $value['service_month_num']?$value['service_month_num']:1;
                            }
                            if($rule_info['bill_create_set'] == 1){
                                $park_data['end_time'] = strtotime("+".$cycle." day",$park_end_time);
                            }elseif ($rule_info['bill_create_set'] == 2){
                                //todo 判断是不是按照自然月来生成订单
                                if(cfg('open_natural_month') == 1){
                                    $park_data['end_time'] = strtotime("+".$cycle." month",$park_end_time);
                                }else{
                                    $cycle = $cycle*30;
                                    $park_data['end_time'] = strtotime("+".$cycle." day",$park_end_time);
                                }
                            }else{
                                $park_data['end_time'] = strtotime("+".$cycle." year", $park_end_time);
                            }
                            if (intval($parking_position['end_time']) < intval(time())) {
                                $park_data['begin_time'] = time();
                            }
                            $park_set['start_time'] = $park_data['begin_time'];
                            $park_set['end_time'] = $park_data['end_time'];
                            if ($park_sys_type!='D1') {
                                $park_data['park_id'] = $vv['village_id'];
                            }
                            $park_data['car_number'] = $vv['province'].$vv['car_number'];
                            if ($now_car_id) {
                                $park_position_set['start_time'] = $park_data['begin_time'];
                                $park_position_set['end_time'] = $park_data['end_time'];
                            }
                            if($park_sys_type =='D5'){
                                //todo D5智慧停车 触发下发到设备
                                (new D5Service())->D5AddCar($vv['village_id'],$vv['card_id'],$park_set['start_time'],$park_set['end_time']);
                            }elseif ($park_sys_type =='D6'){
                                //todo D6智慧停车 触发下发到设备
                                fdump_api(['D6智慧停车续费成功=='.__LINE__,$vv],'d6_park/after_pay',1);
                                (new D6Service())->d6synVehicle($vv['village_id'],$vv['card_id'],0,$park_set);
                            }

                            //D3同步白名单到设备上
                            $white_record=[
                                'village_id'=>$vv['village_id'],
                                'car_number'=>$park_data['car_number']
                            ];
                            (new HouseVillageParkingService())->addWhitelist($white_record);
                            // 3.7月卡会员同步（停车云）
                            $park_data['remark'] = '';
                            $park_data['pid'] = '';
                            $service_name = 'month_member_sync';// 添加会员卡操作
                            if ($now_car_id) {
                                $card_id = $now_car_id;
                            } else {
                                $card_id = '2'.sprintf("%09d",$vv['car_id']);//月卡会员编号（收费系统唯一编号  是
                            }
                            // 同步储值卡
                            if ($parking_car_type_arr && $vv['parking_car_type'] && $parking_car_type_arr[$vv['parking_car_type']]) {
                                $car_type_id = $parking_car_type_arr[$vv['parking_car_type']];
                            } else if($vv['temporary_car_type']) {
                                $car_type_id = $vv['store_value_car_type'];
                            } else {
                                $car_type_id = '储值车A';
                            }
                            $park_set['card_id'] = $card_id;
                            if ($park_sys_type=='D1' && $vv['card_id']) {
                                $park_data['is_edit'] = 1;
                            } elseif ($park_sys_type!='D1') {
                                $park_data['operate_type'] = $vv['card_id'] ? '2' : '1';	//1 添加，2 编辑
                                if ($park_data['operate_type']==1) {
                                    $park_data['create_time'] = time();
                                } else {
                                    $park_data['update_time'] = time();
                                }
                                $park_data['price'] = $value['pay_money'];//实收金额
                                $park_data['channel_id'] = $channel_number_str;//月卡允许通行的通道编号
                                $park_data['amount_receivable'] = $value['pay_money'];//应收金额
                            }
                            $park_data['name'] = $vv['car_user_name'];
                            $park_data['car_type_id'] = $car_type_id;
                            $park_data['tel'] = $vv['car_user_phone'] ? $vv['car_user_phone'] : '';
                            $park_data['address'] = $address;
                            $park_data['p_lot'] = strval($parking_position['position_num']);

                            $park_data['card_id'] = $card_id;
                            $json_data['msg_id'] = createRandomStr(8,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(12,true,true);//是
                            $json_data['data'] = $park_data;
                            $json_data['service_name'] = $service_name;

                            $post_data['unserialize_desc'] = serialize($json_data);
                            $post_data['status'] = 2;
                            $post_data['card_id'] = $card_id;
                            $post_data['msg_id'] = $json_data['msg_id'];
                            $post_data['village_id'] = $value['village_id'];
                            $post_data['park_id'] = $park_system['park_id'];
                            $post_data['token'] = $park_system['token'];
                            $post_data['car_number'] = $park_data['car_number']?$park_data['car_number']:'';
                            $post_data['service_name'] = $service_name;
                            $post_data['create_time'] = time();
                            $res=$db_park_total_record->add($post_data);
                            // 没有配置停车场，或者数据添加成功都保存车辆信息。
                            if(!($park_system['park_id'] && $park_system['token']) || $res){
                                $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$vv['car_id']],$park_set);
                                if ($park_position_set) {
                                    $db_house_village_parking_position->saveOne(['position_id'=>$parking_position['position_id']],$park_position_set);
                                }
                            } else {
                                //2021/2/1 多车多位  修改 start
                                /* $infos = D('House_village_parking_car')->bind_parking_position($card_id);
                                 if($infos){
                                     $park_data['car_group'] = intval($infos['car_group']);
                                     $park_data['p_lot_number'] = intval($infos['p_lot_number']);
                                 }*/
                                //2021/2/1 多车多位  修改 end
                                $json_data['msg_id'] = createRandomStr(8,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(4,true,true).'-'.createRandomStr(12,true,true);//是
                                $json_data['data'] = $park_data;
                                $json_data['service_name'] = $service_name;
                                $post_data['unserialize_desc'] = serialize($json_data);
                                $post_data['status'] = 2;
                                $post_data['card_id'] = $card_id;
                                $post_data['msg_id'] = $json_data['msg_id'];
                                $post_data['village_id'] = $vv['village_id'];
                                $post_data['park_id'] = $park_system['park_id'];
                                $post_data['token'] = $park_system['token'];
                                $post_data['car_number'] = $park_data['car_number']?$park_data['car_number']:'';
                                $post_data['service_name'] = $service_name;
                                $post_data['create_time'] = time();
                                $res=$db_park_total_record->add($post_data);//月卡会员下发
                                if($res){
                                    $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$vv['car_id']],$park_set);
                                    if ($park_position_set) {
                                        $db_house_village_parking_position->saveOne(['position_id'=>$parking_position['position_id']],$park_position_set);
                                    }
                                }
                            }
                        }
                        //子母车位续费同步到期时间
                        if ($park_config['children_position_type']==1){
                            $parking_position_arr =$db_house_village_parking_position->getColumn(['parent_position_id'=>$value['position_id'],'children_type'=>2],'position_id');
                            fdump_api([$value['position_id'],$parking_position_arr],'children_position_log_0803',1);
                            if (!empty($parking_position_arr)){
                                $db_house_village_parking_position->saveOne(['position_id'=>$parking_position_arr],$park_position_set);
                                $park_car_arr=$db_house_village_parking_car->get_column(['car_position_id'=>$parking_position_arr],'car_id');
                                fdump_api([$park_car_arr],'children_position_log_0803',1);
                                if (!empty($park_car_arr)){
                                    $db_house_village_parking_car->editHouseVillageParkingCar(['car_id'=>$park_car_arr],$park_set);
                                }
                            }
                        }
                    }
                }
                if($value['order_type'] == 'park' || $value['order_type'] == 'parking_management'){
                    if($value['position_id']){
                        $service_house_village_parking->editParkingPosition(['position_id'=>$value['position_id']],['end_time'=>$service_end_time]);
                        $service_house_village_parking->editParkingCar(['car_position_id'=>$value['position_id']],['end_time'=>$service_end_time]);
                    }
                }
                $db_house_new_order_log->addOne([
                    'order_id'=>$value['order_id'],
                    'project_id'=>$value['project_id'],
                    'order_type'=>$value['order_type'],
                    'order_name'=>$value['order_name'],
                    'room_id'=>$value['room_id'],
                    'position_id'=>$value['position_id'],
                    'property_id'=>$value['property_id'],
                    'village_id'=>$value['village_id'],
                    'service_start_time'=>$service_start_time,
                    'service_end_time'=>$service_end_time,
                    'add_time'=>time(),
                ]);
                if($value['order_type'] == 'property'){
                    try {
                        $userList = $service_house_village_user_bind->getList([['vacancy_id','=',$value['room_id']], ['status','=',1]], 'uid, pigcms_id');
                        $houseFaceImgService = new HouseFaceImgService();
                        foreach ($userList as $userInfo) {
                            $houseFaceImgService->commonUserToBox($userInfo['uid'], $userInfo['pigcms_id']);
                        }
                    } catch (\Exception $e){
                        fdump_api($e->getMessage(),'$houseFaceImgService');
                    }
                }
            }
            if($is_grapefruit_prepaid==1 && $value['rate']>0 && $value['diy_type']==1 && $value['diy_content'] && strpos($value['diy_content'],'预缴优惠')!==false){
                $updateData['pay_money']=($updateData['pay_money']*$value['rate'])/100;
                $updateData['pay_money']=round($updateData['pay_money'],2);
            }
            $db_house_new_pay_order->saveOne(['order_id'=>$value['order_id']],$updateData);
            if ($value['deposit_money']>0){
                $db_house_new_deposit_log=new HouseNewDepositLog();
                $deposit_info=$db_house_new_deposit_log->get_one(['order_id'=>$value['order_id'],'type'=>2]);
                if (empty($deposit_info)){
                    $deposit_info1=$db_house_new_deposit_log->get_one(['room_id'=>$value['room_id']]);
                    $db_house_new_order_log->addOne([
                        'order_id'=>$value['order_id'],
                        'order_no'=>$summary_order_info['order_no'],
                        'type'=>2,
                        'before_money'=>$deposit_info1['total_money'],
                        'money'=>$value['deposit_money'],
                        'total_money'=>($deposit_info1['total_money']-$value['deposit_money']),
                        'role_id'=>$value['role_id'],
                        'room_id'=>$value['room_id'],
                        'village_id'=>$value['village_id'],
                        'add_time'=>time(),
                    ]);
                }
            }
        }
        /*$plat_order = array(
            'business_type' => 'village_new_pay',
            'business_id' => $summary_id,
            'order_name' => $order_list[0]['order_name'],
            'uid' => $order_list[0]['uid'],
            'total_money' => $total_money,
            'wx_cheap' => 0,
            'add_time'=>time(),
        );
        if($app_type == 'packapp'){
            $plat_order['is_mobile_pay'] = 1;
        }elseif ($app_type == 'flutter' || $app_type == 1 || $app_type == 2){
            $plat_order['is_mobile_pay'] = 2;
        }elseif ($app_type == 'wxapp'){
            $plat_order['is_mobile_pay'] = 2;
        }
        $service_plat_order = new PlatOrderService();
        $plat_id = $service_plat_order->addPlatOrder($plat_order);*/
        return array('error_code'=>0,'msg'=>'支付成功！');
    }

    /**
     * 用户端生成支付账单
     * @author lijie
     * @date_time 2021/07/16
     * @param int $pigcms_id
     * @param int $village_id
     * @param string $app_type
     * @return array|bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function CashierApiGoPay($pigcms_id=0,$village_id=0,$app_type='',$param=[])
    {
        $service_house_village = new HouseVillageService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        $service_plat_order = new PlatOrderService();
        $db_pay_order_info=new PayOrderInfo();
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $summaryData=array();
        $summaryData['village_id'] = $village_id;
        $summaryData['property_id'] = $village_info['property_id'];
        $db_house_new_select_project_record = new HouseNewSelectProjectRecord();
        $pay_user_info = array();
        if($pigcms_id>0){
            $pay_user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$pigcms_id]);
        }
        $summary_id=0;
        if(isset($param['summary_id']) && $param['summary_id']>0){
            $summary_id=$param['summary_id'];
        }
        $uid=0;
        if(isset($param['uid']) && $param['uid']>0){
            $userDb=new User();
            $uid=$param['uid'];
            $userWhere=array(['uid','=',$param['uid']]);
            $pay_user_info =$userDb->getOne($userWhere,'uid,nickname as name,phone');
        }
        fdump_api(['param'=>$param,'village_id'=>$village_id],'order_02245',1);
         if($summary_id>0 && $uid>0){
            $record_list = $db_house_new_select_project_record->getList(['village_id'=>$village_id,'uid'=>$uid]);
        }else if($pigcms_id>0){
            $record_list = $db_house_new_select_project_record->getList(['village_id'=>$village_id,'pigcms_id'=>$pigcms_id]);
        }
        
        if($record_list && !$record_list->isEmpty()){
            $record_list = $record_list->toArray();
        }else{
            $record_list=array();
        }
        if(empty($record_list)){
            return  false;
        }
        $order_arr = [];
        $yearArray=array();
        foreach ($record_list as $v){
            $time = $service_house_new_cashier->getStartAndEndUnixTimestamp($v['year']);
            /**
            if ($is_grapefruit_prepaid){
                $order_list = $service_house_new_cashier->getOrderList([['o.order_id','=',$v['order_id']],['o.add_time','between',array($time['start'],$time['end'])],['o.is_discard','=',1],['o.is_paid','=',2],['o.room_id','=',$bind_info['vacancy_id']]],'o.*,r.late_fee_top_day,r.late_fee_reckon_day,r.late_fee_rate,r.charge_valid_type,n.charge_type');
				fdump_api(['time'=>$time,'order_list'=>$order_list],'order_02245',1);
            }else{
                $order_list = $service_house_new_cashier->getOrderList([['o.project_id','=',$v['project_id']],['o.add_time','between',array($time['start'],$time['end'])],['o.is_discard','=',1],['o.is_paid','=',2],['o.room_id','=',$bind_info['vacancy_id']]],'o.*,r.late_fee_top_day,r.late_fee_reckon_day,r.late_fee_rate,r.charge_valid_type,n.charge_type');
            }
            */
            $whereOrderArr=[['o.order_id','=',$v['order_id']],['o.add_time','between',array($time['start'],$time['end'])],['o.is_discard','=',1],['o.is_paid','=',2]];
             if($summary_id>0 && $uid>0){
                $whereOrderArr[]=['o.summary_id','=',$summary_id];
            }elseif($v['pigcms_id']>0){
                $bind_info = $service_house_village_user_bind->getBindInfo([['pigcms_id','=',$v['pigcms_id']]],'vacancy_id');
                $whereOrderArr[]=['o.room_id','=',$bind_info['vacancy_id']];
            }
            $order_list = $service_house_new_cashier->getOrderList($whereOrderArr,'o.*,r.late_fee_top_day,r.late_fee_reckon_day,r.late_fee_rate,r.charge_valid_type,n.charge_type');
            fdump_api(['time'=>$time,'order_list'=>$order_list],'order_02245',1);
            if($order_list && !is_array($order_list)){
                $order_list = $order_list->toArray();
            }
			$order_arr = array_merge($order_arr,$order_list);
            if(isset($yearArray[$v['project_id']]) && ($v['year']<$yearArray[$v['project_id']])){
                $yearArray[$v['project_id']]=$v['year'];
            }elseif(!isset($yearArray[$v['project_id']])){
                $yearArray[$v['project_id']]=$v['year'];
            }
        }
        $customized_meter_reading=cfg('customized_meter_reading');
        $customized_meter_reading=!empty($customized_meter_reading) ? intval($customized_meter_reading):0;
        $order_type_flag_arr=array();
        $no_order_type_flag_count=0;
        $order_type_flag_last='';
        $order_type_balance=array('cold_water_balance'=>'冷水费','hot_water_balance'=>'热水费','electric_balance'=>'电费');
        if($customized_meter_reading>0){
            foreach ($order_arr as $tmpV){
                $order_type_flag=!empty($tmpV['order_type_flag']) ? $tmpV['order_type_flag']:'';
                if(!empty($order_type_flag) && !empty($order_type_flag_arr) && !in_array($order_type_flag,$order_type_flag_arr)){
                    $e_msg=$order_type_balance[$order_type_flag].'不能和其他费用一起交！';
                    throw new \Exception($e_msg);
                    return  false;
                }else if(empty($order_type_flag) && !empty($order_type_flag_arr) && !empty($order_type_flag_last)){
                    $e_msg=$order_type_balance[$order_type_flag_last].'不能和其他费用一起交！';
                    throw new \Exception($e_msg);
                    return  false;
                }else if(!empty($order_type_flag) && !empty($order_type_flag_arr) && in_array($order_type_flag,$order_type_flag_arr) && $no_order_type_flag_count>0){
                    $e_msg=$order_type_balance[$order_type_flag].'不能和其他费用一起交！';
                    throw new \Exception($e_msg);
                    return  false;
                }
                if(!empty($order_type_flag)){
                    $order_type_flag_last=$order_type_flag;
                }else{
                    $no_order_type_flag_count++;
                }
                $order_type_flag_arr[$tmpV['order_id']]=$order_type_flag;
            }
        }
        if($yearArray){
            foreach ($yearArray as $project_id_key=>$yv){
                $ytime = $service_house_new_cashier->getStartAndEndUnixTimestamp($yv);
                $whereTempArr=[['o.project_id','=',$project_id_key],['o.add_time','<',$ytime['start']],['o.is_discard','=',1],['o.is_paid','=',2],['o.room_id','=',$bind_info['vacancy_id']],['o.check_status','<>',1]];
                $order_list_tmp = $service_house_new_cashier->getOrderList($whereTempArr,'o.*,r.late_fee_top_day,r.late_fee_reckon_day,r.late_fee_rate,n.charge_type,p.name as project_name',1,1);
                if($order_list_tmp && is_object($order_list_tmp) && !is_array($order_list_tmp) && !$order_list_tmp->isEmpty()){
                    $order_list_tmp=$order_list_tmp->toArray();
                }
                if($order_list_tmp && is_array($order_list_tmp)){
                    //还有之前未支付的订单
                    $order_name=$order_list_tmp['0']['order_name'];
                    if($order_list_tmp['0']['project_name']){
                        $order_name=$order_list_tmp['0']['project_name'];
                    }
                    $year_str=date('Y',$order_list_tmp['0']['add_time']);
                    $e_msg='您还有'.$year_str.'年的'.$order_name.'订单未支付！';
                    throw new \Exception($e_msg);
                    return  false;
                }
            }
        }
        
        fdump_api([$record_list,$order_arr],'order_02245',1);
        if(empty($order_arr)){
            throw new \Exception('订单信息错误！');
        }
        $now_order = $order_arr[0];
        if($now_order['room_id']){
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$now_order['room_id']],['type','in','0,3'],['status','=',1]],'pigcms_id,name,phone,uid');
            $summaryData['room_id'] = $now_order['room_id'];
            if($user_info && is_object($user_info) && !$user_info->isEmpty()){
                $user_info=$user_info->toArray();
            }
            if(isset($now_order['position_id']) && $now_order['position_id']>0){
                $summaryData['position_id'] = $now_order['position_id'];
            }
        }else{
            $summaryData['position_id'] = $now_order['position_id'];
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$now_order['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,uid');
            */
            $user_info=$service_house_new_cashier->getRoomUserBindByPosition($now_order['position_id'],$village_id);
        }
        $orderData=array();
        if(!empty($user_info) && isset($user_info['uid'])){
            $summaryData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $summaryData['pigcms_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $orderData['uid'] = $user_info['uid'];
            $orderData['pigcms_id'] = $user_info['pigcms_id'];
            $orderData['name'] = $user_info['name'];
            $orderData['phone'] = $user_info['phone'];
        }elseif($pay_user_info && isset($pay_user_info['uid'])){
            $summaryData['uid']=$pay_user_info['uid'];
            $orderData['uid'] = $pay_user_info['uid'];
        }
        
        $summaryData['pay_uid'] = isset($pay_user_info['uid'])?$pay_user_info['uid']:0;
        $summaryData['pay_bind_id'] = $pigcms_id;
        $summaryData['order_no'] =  build_real_orderid($summaryData['pay_uid']);
        $summaryData['is_paid'] = 2;
        $summaryData['pay_type'] = 4;
        $summaryData['is_online'] = 1;
        if($summary_id>0){
            $save_summary_ret = $service_house_new_cashier->saveOrderSummary(array('summary_id'=>$summary_id,'village_id'=>$village_id),$summaryData);
        }else{
            $summary_id = $service_house_new_cashier->addOrderSummary($summaryData);
        }
        fdump_api([$user_info,$summaryData,$summary_id],'order_02245',1);
        $total_money = 0;
        $pay_money = 0;
        $late_payment_money=0;
        $orderData['summary_id'] = $summary_id;
        $orderData['is_paid'] = 2;
        $orderData['is_online'] = 1;
        $orderData['pay_bind_name'] = $pay_user_info['name'];
        $orderData['pay_bind_id'] = $pigcms_id;
        $orderData['pay_bind_phone'] = $pay_user_info['phone'];
        $db_house_village = new HouseVillage();
        $village_info = $db_house_village->getOne($village_id,'property_id');
        $property_id = $village_info['property_id'];
        if($property_id){
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
        }else{
            $digit_info = [];
        }
        $deposit_money=$param['deposit_money'];
        $rule_month_num=[];
        foreach ($order_arr as $value){
            if (!empty($value['summary_id'])){
                $plat_info = $service_plat_order->getPlatOrder(['business_id'=>$value['summary_id'],'business_type'=>'village_new_pay']);
                if (!empty($plat_info)){
                    $pay_order=$db_pay_order_info->getSome(['business'=>'village_new_pay','business_order_id'=>$plat_info['order_id']]);
                    if (!empty($pay_order)){
                        $pay_order=$pay_order->toArray();
                        if (!empty($pay_order)&&$plat_info['add_time']+100>time()){
                            throw new \Exception('支付订单已生成，请勿重复操作');
                        }
                    }
                }
            }
            if ($is_grapefruit_prepaid && isset($value['rule_id'])){
                $month_num=$value['service_month_num'];
                if(isset($value['unify_flage_id']) && !empty($value['unify_flage_id']) && $value['charge_valid_type']==3){
                    $month_num=$month_num/12;
                }
                if (isset($rule_month_num[$value['rule_id']])){
                    $rule_month_num[$value['rule_id']]['num']=$rule_month_num[$value['rule_id']]['num']+$month_num;
                    $rule_month_num[$value['rule_id']]['money'] +=($value['modify_money'] + $value['late_payment_money']);
                    $rule_month_num[$value['rule_id']]['order_ids'][]=$value['order_id'];
                }else{
                    $rule_month_num[$value['rule_id']] = array();
                    $rule_month_num[$value['rule_id']]['num']=$month_num;
                    $rule_month_num[$value['rule_id']]['money']=($value['modify_money'] + $value['late_payment_money']);
                    $rule_month_num[$value['rule_id']]['rule_id'] = $value['rule_id'];
                    $rule_month_num[$value['rule_id']]['order_ids']= array($value['order_id']);
                }
            }
            $total_money += $value['total_money'];
            $pay_money += $value['late_payment_money'] + $value['modify_money'];
            $late_payment_money+=$value['late_payment_money'];
            $orderData['late_payment_money'] = $value['late_payment_money'];
            $orderData['late_payment_day'] = $value['late_payment_day'];
            $where = [];
            if($value['room_id'])
                $where[] = ['room_id','=',$now_order['room_id']];
            else
                $where[] = ['position_id','=',$now_order['position_id']];
            $where[] = ['add_time','<=',time()];
            $where[] = ['project_id','=',$value['project_id']];
            $where[] = ['is_paid','=',2];
            $where[] = ['is_discard','=',1];
            if(isset($value['order_id']) && $value['order_id']){
                $where[] = ['order_id','=',$value['order_id']];
            }
            $where[]=['check_status','<>',1];
            $service_house_new_cashier->saveOrder($where,$orderData);
            //押金解冻
            $edit_res=$this->editFrozenlog(['order_id'=>$value['order_id'],'type'=>3]);
            $orderData['pay_type'] = 4;
            if (!empty($param['deposit_type'])&&$deposit_money>0){
                if ($deposit_money>$pay_money){
                    $orderData['deposit_money'] = $pay_money;
                    $deposit_money=$deposit_money-$pay_money;
                }else{
                    $orderData['deposit_money'] = $deposit_money;
                    $deposit_money=0;
                }
                //冻结押金
                $frozen_log_data=[
                    'order_id'=>$value['order_id'],
                    'deposit_money'=>$orderData['deposit_money'],
                ];
                $add_res= $this->addFrozenlog($frozen_log_data);
               //  print_r([$add_res,$frozen_log_data]);die;
            }
            if ($is_grapefruit_prepaid == 1) {
                $orderData['rate']=0;
                $orderData['diy_type']=0;
                $orderData['diy_content']='';
            }
            $service_house_new_cashier->saveOrder($where,$orderData);
        }
        $discount_money=0;
        if ($is_grapefruit_prepaid == 1 && !empty($rule_month_num)) {
            foreach ($rule_month_num as $kk => $rv) {
                $rv['num']=round($rv['num'],2);
                $rv['num']=floor($rv['num']);
                $rv['num']=$rv['num']*1;
                $discountArr = $service_house_new_cashier->getChargePrepaidDiscount($rv['rule_id'], $rv);
                $rule_month_num[$kk]['optimum'] = $discountArr['optimum'];
                $rule_month_num[$kk]['discount_money'] = $discountArr['discount_money'];
                if(!empty($discountArr['optimum']) && !empty($rv['order_ids'])){
                    $whereArrTmp=array(['order_id','in',$rv['order_ids']]);
                    $discount_type='达到按'.$discountArr['optimum']['num'].'个月（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    if($discountArr['optimum']['discount_type']==2){
                        $discount_type='达到按'.$discountArr['optimum']['quarter'].'个季度（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    }else if($discountArr['optimum']['discount_type']==3){
                        $discount_type='达到按'.$discountArr['optimum']['num'].'年（'.$discountArr['optimum']['rate'].'%折扣）预缴优惠';
                    }
                    $orderDataTmp=array('rate'=>$discountArr['optimum']['rate'],'diy_type'=>1,'diy_content'=>$discount_type);
                    $extra_data=array();
                    $extra_data['optimum']=$discountArr['optimum'];
                    
                    $orderDataTmp['extra_data']=json_encode($extra_data,JSON_UNESCAPED_UNICODE);
                    $service_house_new_cashier->saveOrder($whereArrTmp,$orderDataTmp);
                }
                $discount_money += $discountArr['discount_money'];
            }
            $pay_money=$pay_money-$discount_money;
        }
        
        $total_money = formatNumber($total_money,2,1);
        $pay_money = formatNumber($pay_money,2,1);
        if (!empty($param['deposit_type'])){
            if ($pay_money>$param['deposit_money']){
                $pay_money = $pay_money-$param['deposit_money'];
            }else{
                $pay_money=0;
            }

        }else{
            $param['deposit_money']=0;
        }
        $plat_order = array(
            'business_type' => 'village_new_pay',
            'business_id' => $summary_id,
            'order_name' => count($order_arr)>1?'多缴费订单':$now_order['order_name'],
            'uid' => $summaryData['pay_uid'],
            'total_money' => $pay_money,
            'wx_cheap' => 0,
            'add_time'=>time(),
        );
        if($app_type == 'packapp'){
            $plat_order['is_mobile_pay'] = 1;
        }elseif ($app_type == 'flutter' || $app_type == 1 || $app_type == 2){
            $plat_order['is_mobile_pay'] = 2;
        }elseif ($app_type == 'wxapp'){
            $plat_order['is_mobile_pay'] = 2;
        }

        
        $plat_id = $service_plat_order->addPlatOrder($plat_order);
        $service_house_new_cashier->saveOrderSummary(['summary_id'=>$summary_id],['deposit_money'=>$param['deposit_money'],'total_money'=>$total_money,'pay_money'=>$pay_money]);
        if ($pay_money<=0){
            $res = $this->offlineAfterPay($summary_id);
            $res_url=$this->getPayResultUrl($plat_id);
           //  print_r([$res_url,$res]);die;
            return ['order_id'=>$plat_id,'order_url'=>$res_url['redirect_url']];
        }else{
            $base_url = $service_house_village->base_url;
            return ['order_id'=>$plat_id,'order_url'=>cfg('site_url') . $base_url . 'pages/pay/check?order_id=' . $plat_id . '&order_type=village_new_pay','order_type'=>'village_new_pay','type'=>'village_new_pay'];
        }

    }
    /**
     * 用户端生成支付账单(二维码项目付款)
     */
    public function CashierApiGoPayQrcode($pigcms_id=0,$village_id=0,$app_type='',$param=[])
    {
        if(!$param['rule_id']){
            return false;
        }
        $service_house_village = new HouseVillageService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        $service_plat_order = new PlatOrderService();
        $db_pay_order_info=new PayOrderInfo();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $summaryData=array();
        $summaryData['village_id'] = $village_id;
        $summaryData['property_id'] = $village_info['property_id'];
        $db_house_new_select_project_record = new HouseNewSelectProjectRecord();
        if($pigcms_id){
            $pay_user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$pigcms_id]);
        }else{
            $pay_user_info = (new User())->where('uid',$param['uid'])->field('nickname as name,phone')->find();
        }
//        $record_list = $db_house_new_select_project_record->getList(['village_id'=>$village_id,'pigcms_id'=>$pigcms_id]);
//        if($record_list){
//            $record_list = $record_list->toArray();
//        }
//        if(empty($record_list)){
            //根据项目标准id查询项目信息
            $project_id = (new HouseNewChargeRule())->where('id',$param['rule_id'])->value('charge_project_id');
            $record_list = [[
                'year'=>'',
                'pigcms_id'=>$pigcms_id,
                'project_id'=>$project_id
            ]];
            //创建订单表
            $service_house_new_charge = new HouseNewChargeService();
            $payData = [
                'order_type'=>$param['order_type'],
                'order_name'=>$service_house_new_charge->charge_type[$param['order_type']],
                'village_id'=>$village_id,
                'property_id'=>$village_info['property_id'],
                'total_money'=>$param['pay_money'],
                'diy_type'=>4,
                'modify_money'=>$param['pay_money'],
                'prepare_pay_money'=>$param['pay_money'],
                'is_paid'=>2,
                'is_prepare'=>2,
                'rule_id'=>$param['rule_id'],
                'project_id'=>$project_id,
                'order_no'=>'',
                'add_time'=>time(),
                'from'=>1,
                'service_start_time'=>strtotime(date('Y-m-d',time())),
                'service_end_time'=>strtotime(date('Y-m-d',time())),
                'unit_price'=>$param['pay_money'],
                'pigcms_id'=>$pigcms_id,
                'name'=>$pay_user_info['name']??'',
                'phone'=>$pay_user_info['phone']??'',
                'uid'=>$param['uid'],
                'pay_bind_name'=>$pay_user_info['name']??'',
                'pay_bind_id'=>$pigcms_id,
                'pay_bind_phone'=>$pay_user_info['phone']??'',
            ];
            $id = $service_house_new_cashier->addOrder($payData);
            if(!$id){
                return false;
            }
//        }
        $order_arr = [];
        $yearArray=array();
        foreach ($record_list as $v){
            $time = $service_house_new_cashier->getStartAndEndUnixTimestamp($v['year']);
            $bind_info = $service_house_village_user_bind->getBindInfo([['pigcms_id','=',$v['pigcms_id']]],'vacancy_id');
            $order_list = $service_house_new_cashier->getOrderList([['o.order_id','=',$id],['o.project_id','=',$v['project_id']],['o.add_time','between',array($time['start'],$time['end'])],['o.is_discard','=',1],['o.is_paid','=',2],['o.order_type','=',$param['order_type']],['o.check_status','<>',1]],'o.*,r.late_fee_top_day,r.late_fee_reckon_day,r.late_fee_rate,n.charge_type');
            if($order_list && !is_array($order_list)){
                $order_list = $order_list->toArray();
            }
            if(isset($yearArray[$v['project_id']]) && ($v['year']<$yearArray[$v['project_id']])){
                $yearArray[$v['project_id']]=$v['year'];
            }elseif(!isset($yearArray[$v['project_id']])){
                $yearArray[$v['project_id']]=$v['year'];
            }
            $order_arr = array_merge($order_arr,$order_list);
        }
        if($yearArray){
            foreach ($yearArray as $project_id_key=>$yv){
                $ytime = $service_house_new_cashier->getStartAndEndUnixTimestamp($yv);
                $whereTempArr=[['o.project_id','=',$project_id_key],['o.add_time','<',$ytime['start']],['o.is_discard','=',1],['o.is_paid','=',2],['o.room_id','=',$bind_info['vacancy_id']],['o.check_status','<>',1]];
                $order_list_tmp = $service_house_new_cashier->getOrderList($whereTempArr,'o.*,r.late_fee_top_day,r.late_fee_reckon_day,r.late_fee_rate,n.charge_type,p.name as project_name',1,1);
                if($order_list_tmp && is_object($order_list_tmp) && !is_array($order_list_tmp) && !$order_list_tmp->isEmpty()){
                    $order_list_tmp=$order_list_tmp->toArray();
                }
                if($order_list_tmp && is_array($order_list_tmp)){
                    //还有之前未支付的订单
                    $order_name=$order_list_tmp['0']['order_name'];
                    if($order_list_tmp['0']['project_name']){
                        $order_name=$order_list_tmp['0']['project_name'];
                    }
                    $year_str=date('Y',$order_list_tmp['0']['add_time']);
                    $e_msg='您还有'.$year_str.'年的'.$order_name.'订单未支付！';
                    throw new \Exception($e_msg);
                    return  false;
                }
            }
        }
        
        fdump_api([$record_list,$order_arr],'order_02245',1);
        $now_order = $order_arr[0];
        if($now_order['room_id']){
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$now_order['room_id']],['type','in','0,3'],['status','=',1]],'pigcms_id,name,phone,uid');
            $summaryData['room_id'] = $now_order['room_id'];
            if($user_info && is_object($user_info) && !$user_info->isEmpty()){
                $user_info=$user_info->toArray();
            }
            if(isset($now_order['position_id']) && $now_order['position_id']>0){
                $summaryData['position_id'] = $now_order['position_id'];
            }
        }else{
            $summaryData['position_id'] = $now_order['position_id'];
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$now_order['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,uid');
            */
            $user_info=$service_house_new_cashier->getRoomUserBindByPosition($now_order['position_id'],$village_id);
        }
        $orderData=array();
        if(!empty($user_info)){
            $summaryData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $summaryData['pigcms_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $orderData['uid'] = $user_info['uid'];
            $orderData['pigcms_id'] = $user_info['pigcms_id'];
            $orderData['name'] = $user_info['name'];
            $orderData['phone'] = $user_info['phone'];
        }
        
        $summaryData['pay_uid'] = $param['uid'];
        $summaryData['pay_bind_id'] = $pigcms_id;
        $summaryData['order_no'] =  build_real_orderid($summaryData['pay_uid']);
        $summaryData['is_paid'] = 2;
        $summaryData['pay_type'] = 4;
        $summaryData['is_online'] = 1;
        $summary_id = $service_house_new_cashier->addOrderSummary($summaryData);
        fdump_api([$user_info,$summaryData,$summary_id],'order_02245',1);
        $total_money = 0;
        $pay_money = 0;
        $orderData['summary_id'] = $summary_id;
        $orderData['is_paid'] = 2;
        $orderData['is_online'] = 1;
        $orderData['pay_bind_name'] = $pay_user_info['name'];
        $orderData['pay_bind_id'] = $pigcms_id;
        $orderData['pay_bind_phone'] = $pay_user_info['phone'];
        $db_house_village = new HouseVillage();
        $village_info = $db_house_village->getOne($village_id,'property_id');
        $property_id = $village_info['property_id'];
        if($property_id){
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
        }else{
            $digit_info = [];
        }
        $deposit_money=$param['deposit_money'];
        foreach ($order_arr as $value){
            if (!empty($value['summary_id'])){
                $plat_info = $service_plat_order->getPlatOrder(['business_id'=>$value['summary_id'],'business_type'=>'village_new_pay']);
                if (!empty($plat_info)){
                    $pay_order=$db_pay_order_info->getSome(['business'=>'village_new_pay','business_order_id'=>$plat_info['order_id']]);
                    if (!empty($pay_order)){
                        $pay_order=$pay_order->toArray();
                        if (!empty($pay_order)&&$plat_info['add_time']+100>time()){
                            throw new \Exception('支付订单已生成，请勿重复操作');
                        }
                    }
                }
            }
            
            $total_money += $value['total_money'];
            $pay_money += $value['late_payment_money'] + $value['modify_money'];
            $orderData['late_payment_money'] = $value['late_payment_money'];
            $orderData['late_payment_day'] = $value['late_payment_day'];
            $where = [];
            if($value['room_id'])
                $where[] = ['room_id','=',$now_order['room_id']];
            else
                $where[] = ['position_id','=',$now_order['position_id']];
            $where[] = ['add_time','<=',time()];
            $where[] = ['project_id','=',$value['project_id']];
            $where[] = ['is_paid','=',2];
            $where[] = ['is_discard','=',1];
            if(isset($value['order_id']) && $value['order_id']){
                $where[] = ['order_id','=',$value['order_id']];
            }
            $where[]=['check_status','<>',1];
            $service_house_new_cashier->saveOrder($where,$orderData);
            //押金解冻
            $edit_res=$this->editFrozenlog(['order_id'=>$value['order_id'],'type'=>3]);
            $orderData['pay_type'] = 4;
            if (!empty($param['deposit_type'])&&$deposit_money>0){
                if ($deposit_money>$pay_money){
                    $orderData['deposit_money'] = $pay_money;
                    $deposit_money=$deposit_money-$pay_money;
                }else{
                    $orderData['deposit_money'] = $deposit_money;
                    $deposit_money=0;
                }
                //冻结押金
                $frozen_log_data=[
                    'order_id'=>$value['order_id'],
                    'deposit_money'=>$orderData['deposit_money'],
                ];
                $add_res= $this->addFrozenlog($frozen_log_data);
               //  print_r([$add_res,$frozen_log_data]);die;
            }
            $service_house_new_cashier->saveOrder($where,$orderData);
        }
        $total_money = formatNumber($total_money,2,1);
        $pay_money = formatNumber($pay_money,2,1);
        if (!empty($param['deposit_type'])){
            if ($pay_money>$param['deposit_money']){
                $pay_money = $pay_money-$param['deposit_money'];
            }else{
                $pay_money=0;
            }

        }else{
            $param['deposit_money']=0;
        }
        $plat_order = array(
            'business_type' => 'village_new_pay',
            'business_id' => $summary_id,
            'order_name' => count($order_arr)>1?'多缴费订单':$now_order['order_name'],
            'uid' => $summaryData['pay_uid'],
            'total_money' => $pay_money,
            'wx_cheap' => 0,
            'add_time'=>time(),
        );
        if($app_type == 'packapp'){
            $plat_order['is_mobile_pay'] = 1;
        }elseif ($app_type == 'flutter' || $app_type == 1 || $app_type == 2){
            $plat_order['is_mobile_pay'] = 2;
        }elseif ($app_type == 'wxapp'){
            $plat_order['is_mobile_pay'] = 2;
        }

        
        $plat_id = $service_plat_order->addPlatOrder($plat_order);
        $service_house_new_cashier->saveOrderSummary(['summary_id'=>$summary_id],['deposit_money'=>$param['deposit_money'],'total_money'=>$total_money,'pay_money'=>$pay_money]);
        if ($pay_money==0){
            $res = $this->offlineAfterPay($summary_id);
            $res_url=$this->getPayResultUrl($plat_id);
           //  print_r([$res_url,$res]);die;
            return ['order_id'=>$plat_id,'order_url'=>$res_url['redirect_url']];
        }else{
            $base_url = $service_house_village->base_url;
            return ['order_id'=>$plat_id,'order_url'=>cfg('site_url') . $base_url . 'pages/pay/check?order_id=' . $plat_id . '&order_type=village_new_pay','order_type'=>'village_new_pay','type'=>'village_new_pay'];
        }

    }

    /**
     * 预缴支付
     * @author lijie
     * @date_time 2021/07/27
     * @param array $order_list
     * @param int $village_id
     * @return array|bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function CashierPrepaidGoPay($order_list=[],$village_id=0,$pigcms_id=0,$app_type='')
    {
        $service_house_village = new HouseVillageService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        if(empty($order_list))
            return false;
        $pay_user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$pigcms_id]);
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $summaryData=array();
        $summaryData['village_id'] = $village_id;
        $summaryData['property_id'] = $village_info['property_id'];
        $now_order = $order_list;
        if(isset($now_order['room_id']) && $now_order['room_id']){
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$now_order['room_id']],['type','in','0,3'],['status','=',1]],'pigcms_id,name,phone,uid');
            if($user_info && is_object($user_info) && !$user_info->isEmpty()){
                $user_info=$user_info->toArray();
            }
            $summaryData['room_id'] = $now_order['room_id'];
            if(isset($now_order['position_id']) && $now_order['position_id']>0){
                $summaryData['position_id'] = $now_order['position_id'];
            }
        }else{
            $summaryData['position_id'] = $now_order['position_id'];
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$now_order['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,uid');
            */
            $user_info=$service_house_new_cashier->getRoomUserBindByPosition($now_order['position_id'],$village_id);
        }
        $orderData=array();
        if(!empty($user_info)){
            $summaryData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $summaryData['pigcms_id'] = isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0;
            $orderData['uid'] = $user_info['uid'];
            $orderData['name'] = $user_info['name'];
            $orderData['phone'] = $user_info['phone'];
        }
        $summaryData['pay_uid'] = isset($pay_user_info['uid'])?$pay_user_info['uid']:0;
        $summaryData['is_paid'] = 2;
        $summaryData['pay_bind_id'] = $pigcms_id;
        $summaryData['order_no'] =  build_real_orderid($summaryData['pay_uid']);
        $summaryData['pay_type'] = 4;
        $summary_id = $service_house_new_cashier->addOrderSummary($summaryData);

        $total_money = 0;
        $pay_money = 0;
        $orderData['summary_id'] = $summary_id;

        $orderData['is_paid'] = 2;
        $total_money += $now_order['total_money'];
        $pay_money += $now_order['modify_money'];
        $orderData['late_payment_money'] = 0;
        $orderData['late_payment_day'] = 0;
        $where = [];
        $where['order_id'] = $now_order['order_id'];
        $service_house_new_cashier->saveOrder($where,$orderData);
        $plat_order = array(
            'business_type' => 'village_new_pay',
            'business_id' => $summary_id,
            'order_name' => $now_order['order_name'],
            'uid' => $summaryData['pay_uid'],
            'total_money' => $pay_money,
            'wx_cheap' => 0,
            'add_time'=>time(),
        );
        if($app_type == 'packapp'){
            $plat_order['is_mobile_pay'] = 1;
        }elseif ($app_type == 'flutter' || $app_type == 1 || $app_type == 2){
            $plat_order['is_mobile_pay'] = 2;
        }elseif ($app_type == 'wxapp'){
            $plat_order['is_mobile_pay'] = 2;
        }
        $service_plat_order = new PlatOrderService();
        $plat_id = $service_plat_order->addPlatOrder($plat_order);
        $service_house_new_cashier->saveOrderSummary(['summary_id'=>$summary_id],['total_money'=>$total_money,'pay_money'=>$pay_money]);
        $base_url = $service_house_village->base_url;
        return ['order_id'=>$plat_id,'order_url'=>cfg('site_url') . $base_url . 'pages/pay/check?order_id=' . $plat_id . '&order_type=village_new_pay','order_type'=>'village_new_pay','type'=>'village_new_pay'];
    }

    /**
     * 支付之前调用
     * @author lijie
     * @date_time 2021/07/27
     * @param $order_id
     * @return mixed
     */
    public function getOrderPayInfo($order_id)
    {
        $service_house_village_order = new PlatOrderService();
        $service_house_new_cashier = new HouseNewCashierService();
        $order_info = $service_house_village_order->getPlatOrder(['order_id'=>$order_id]);
        $summary_info = $service_house_new_cashier->getOrderSummary(['summary_id'=>$order_info['business_id']],'village_id');
        $service_house_new_pay_order = new HouseNewPayOrder();
        $order_list=$service_house_new_pay_order->getPayLists(['summary_id'=>$order_info['business_id'],'village_id'=>$summary_info['village_id']],'*');
        $customized_meter_reading=cfg('customized_meter_reading');
        $is_customized_meter_reading=!empty($customized_meter_reading) ? intval($customized_meter_reading):0;
        $data['village_id'] = $summary_info['village_id'];
        $data['paid'] = 0;
        $data['mer_id'] = 0;
        $data['city_id'] = 0;//城市id
        $data['store_id'] = 0;
        $data['order_money'] = $order_info['total_money'];//订单支付金额
        $data['uid'] = $order_info['uid'];//用户id
        $data['order_no'] = $order_id;//订单号
        $data['title'] = '生活缴费支付';
        $data['time_remaining'] = $order_info['add_time']+15*60-time();//倒计时（15分钟），订单可付款的剩余时间，超出不可支付
        $data['is_cancel'] = 0;//1表示取消订单
        $data['goods_desc']='';
        if($order_list && !is_array($order_list) && !$order_list->isEmpty()){
            $order_list=$order_list->toArray();
        }
        $order_type_flag='';
        $have_no_order_type_flag=false;
        if(!empty($order_list)){
            $goods_desc='';
            foreach ($order_list as $ovv){
                if(isset($ovv['order_type_flag'])){
                    $order_type_flag=!empty($ovv['order_type_flag']) ? $ovv['order_type_flag']:'';
                }else{
                    $have_no_order_type_flag=true;
                }
                if($ovv['order_type']=='park_new'){
                    $goods_desc='停车费用';
                }else{
                    $goods_desc='';
                    $car_number='';
                    break;
                }
            }
            $count=count($order_list);
            if($goods_desc && $count==1 && !empty($order_list['0']['car_number'])){
                $goods_desc='停车费用-'.$order_list['0']['car_number'];
            }
            $data['goods_desc']=$goods_desc;
            if($is_customized_meter_reading>0 && $order_type_flag && !$have_no_order_type_flag){
                $data['village_order_type_flag']=$order_type_flag;
            }
        }
        unset($order_list);
        return $data;
    }

    /**
     * 支付成功后跳转url
     * @author lijie
     * @date_time 2021/07/27
     * @param int $order_id
     * @return mixed
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getPayResultUrl($order_id=0)
    {
        if (empty($order_id)) {
            throw new \think\Exception("请上传订单id！");
        }
        $service_order = new PlatOrderService();
        $service_pay_order = new HouseNewPayOrderSummary();
        $service_house_new_pay_order = new HouseNewPayOrder();
        $plat_info = $service_order->getPlatOrder(['order_id' => $order_id]);
        $order_info = $service_pay_order->getOne(['summary_id'=>$plat_info['business_id']],'pay_bind_id,village_id');
        $order_list=$service_house_new_pay_order->get_one(['summary_id'=>$plat_info['business_id']],'order_id,order_type,car_number');
        if (!$plat_info || !$order_info||!$order_list) {
            throw new \think\Exception("订单信息不存在！");
        }
        $url = get_base_url('pages/houseMeter/NewCollectMoney/billsPaid?pigcms_id=' .$order_info['pay_bind_id'].'&village_id='.$order_info['village_id']);
        if($plat_info['order_name'] == '非机动车停车费'){
            $url = get_base_url('pages/houseMeter/BicycleLane/PayRecord?pigcms_id=' .$order_info['pay_bind_id'].'&village_id='.$order_info['village_id']);
        }

        if($order_list['order_type'] == 'park_new'){
            $url = get_base_url('pages/parkingLot/pages/payList?village_id='.$order_info['village_id']);
        }
        if($order_list['order_type'] == 'pile'){
            if (!empty($order_list['car_number'])){
                $url = get_base_url('pages/newCharge/pages/startCharging?equipment_num='.$order_list['car_number']);
            }else{
                $url = get_base_url('pages/newCharge/index?village_id='.$order_info['village_id']);
            }
        }
        $res['redirect_url'] = $url;
        $res['direct'] = 1;
        return $res;
    }

    /*public function afterPay()
    {

    }*/

    
    public function setHouseNewOrderLog($now_order) {
        $service_start_time = $now_order['service_start_time'];
        $service_end_time = $now_order['service_end_time'];
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $db_house_new_order_log = new HouseNewOrderLog();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village_parking = new HouseVillageParkingService();
        $rule_info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$now_order['rule_id']],'n.charge_type,r.*,p.type');
        if($rule_info['type'] == 2){
            if($now_order['position_id']){
                $last_order = $db_house_new_order_log->getOne([['position_id','=',$now_order['position_id']],['order_type','=',$now_order['order_type']],['project_id','=',$now_order['project_id']]],true,'id DESC');
            } else{
                $last_order = $db_house_new_order_log->getOne([['room_id','=',$now_order['room_id']],['order_type','=',$now_order['order_type']],['position_id','=',0],['project_id','=',$now_order['project_id']]],true,'id DESC');
            }
            // 兼容老版停车收费
            if($now_order['order_type'] == 'park'){
                if($now_order['position_id']){
                    $where22=[
                        ['position_id','=',$now_order['position_id']],
                        ['order_type','=',$now_order['order_type']],
                        ['project_id','=',0],
                    ];
                }else{
                    $where22=[
                        ['room_id','=',$now_order['room_id']],
                        ['order_type','=',$now_order['order_type']],
                    ];
                }
                $new_order_log = $db_house_new_order_log->getOne($where22,true,'id DESC');
                if(!empty($new_order_log)){
                    $last_order=$new_order_log;
                }
            }elseif ($now_order['order_type'] == 'property'){
                if($now_order['position_id']){
                    $where22=[
                        ['position_id','=',$now_order['position_id']],
                        ['order_type','=',$now_order['order_type']],
                    ];
                }else{
                    $where22=[
                        ['room_id','=',$now_order['room_id']],
                        ['position_id','=',0],
                        ['order_type','=',$now_order['order_type']],
                    ];
                }
                $new_order_log = $db_house_new_order_log->getOne($where22,true,'id DESC');
                if(!empty($new_order_log)){
                    $last_order=$new_order_log;
                }
            }
            if($last_order){
                $last_order = $last_order->toArray();
                if($last_order && isset($last_order['id'])){
                    $date_order['service_start_time'] = $last_order['service_end_time']+1;
                    $date_order['service_start_time'] = strtotime(date('Y-m-d',$date_order['service_start_time']));
                    $service_start_time = $date_order['service_start_time'];
                    if($now_order['is_prepare'] == 1){
                        $cycle = $now_order['service_give_month_num'] + $now_order['service_month_num'];
                    }else{
                        $cycle = $now_order['service_month_num']?$now_order['service_month_num']:1;
                    }
                    if($rule_info['bill_create_set'] == 1){
                        $date_order['service_end_time'] = strtotime("+".$cycle." day",$date_order['service_start_time'])-1;
                    }elseif ($rule_info['bill_create_set'] == 2){
                        //todo 判断是不是按照自然月来生成订单
                        if(cfg('open_natural_month') == 1){
                            $date_order['service_end_time'] = strtotime("+".$cycle." month",$date_order['service_start_time'])-1;
                        }else{
                            $cycle = $cycle*30;
                            $date_order['service_end_time'] = strtotime("+".$cycle." day",$date_order['service_start_time'])-1;
                        }
                        fdump_api(['线上支付【账单生成周期设置 1：按日生成2：按月生成3：按年生成】 当前是'.$rule_info['bill_create_set'].'=='.__LINE__,(cfg('open_natural_month') == 1 ? '开启自然月' : '未开启自然月'),'天数：'.$cycle,'service_end_time：'.date('Y-m-d H:i:s',$date_order['service_end_time'])],'park/shang_log',1);
                    }else{
                        $date_order['service_end_time'] = strtotime("+".$cycle." year",$date_order['service_start_time'])-1;
                    }
                    $service_end_time = $date_order['service_end_time'];
                }
            }
            $db_house_new_order_log->addOne([
                'order_id'=>$now_order['order_id'],
                'project_id'=>$now_order['project_id'],
                'order_type'=>$now_order['order_type'],
                'order_name'=>$now_order['order_name'],
                'room_id'=>$now_order['room_id'],
                'position_id'=>$now_order['position_id'],
                'property_id'=>$now_order['property_id'],
                'village_id'=>$now_order['village_id'],
                'service_start_time'=>$service_start_time,
                'service_end_time'=>$service_end_time,
                'add_time'=>time(),
            ]);
            if($now_order['order_type'] == 'property'){
                $service_house_village_user_bind->saveUserBind([
                    ['vacancy_id','=',$now_order['room_id']],
                    ['type','in',[0,3]],
                    ['status','=',1],
                ],['property_endtime'=>$service_end_time]);
                $spec = date('Y-m-d',$service_start_time) . '至' . date('Y-m-d',$service_end_time);
            }
            if($now_order['order_type'] == 'park' || $now_order['order_type'] == 'parking_management'){
                if($now_order['position_id']){
                    $service_house_village_parking->editParkingPosition(['position_id'=>$now_order['position_id']],['end_time'=>$service_end_time]);
                    $service_house_village_parking->editParkingCar(['car_position_id'=>$now_order['position_id']],['end_time'=>$service_end_time]);
                }
            }
            if($now_order['order_type'] == 'property'){
                try {
                    $userList = $service_house_village_user_bind->getList([['vacancy_id','=',$now_order['room_id']], ['status','=',1]], 'uid, pigcms_id');
                    $houseFaceImgService = new HouseFaceImgService();
                    foreach ($userList as $userInfo) {
                        $houseFaceImgService->commonUserToBox($userInfo['uid'], $userInfo['pigcms_id']);
                    }
                } catch (\Exception $e){
                    fdump_api($e->getMessage(),'$houseFaceImgService');
                }
            }
        }
        return true;
    }
    
}