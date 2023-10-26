<?php
/**
 * Created by PhpStorm.
 * Author: zhubaodi
 * Date Time: 2021/4/28 14:07
 */

namespace app\community\model\service;


use app\common\model\service\UserService;
use app\common\model\service\weixin\TemplateNewsService;
use app\community\model\db\HouseVillagePayOrder;
use app\community\model\db\HouseVillagePilePayOrder;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\db\PlatOrder;
use app\community\model\db\User;
use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillagePileAttributeSet;
use app\community\model\db\HouseVillagePileEquipment;
use app\community\model\db\HouseVillagePileEquipmentAttribute;
use app\community\model\db\HouseVillagePileMonthCard;
use app\community\model\db\HouseVillagePileMonthCardUser;
use app\community\model\db\HouseVillagePileAttribute;
use app\pay\model\db\PayOrderInfo;
use app\common\model\db\PaidOrderRecord;

class PileOrderPayService
{
    public $base_url = '';


    public $street_url = '';


    //支付类型 alipay:支付宝 wechat:微信 unionpay:银联
    public $pay_type_arr1 = [
        'wechat' => '1', 'alipay' => '2', 'unionpay' => '3'
    ];


    /**
     * 生成订单
     * @param 传参
     * array(
     * 'uid'=>用户uid
     * 'type'=>缴费类型 1充电支付 2购买月卡支付
     * 'id'=>设备id
     * 'portNum'=>插座编号
     * 'price'=>充值金额
     * 'card_id'=>月卡id
     * )
     * @throws \think\Exception
     * @author:zhubaodi
     * @date_time: 2021/4/12 16:07
     */
    public function  addOrderInfo($data)
    {
        $service_user = new User();
        $user_info = $service_user->getOne(['uid' => $data['uid']]);
        if (!$user_info) {
            throw new \think\Exception("该用户不存在！");
        }

        $service_equipment = new HouseVillagePileEquipment();
        $equipment_info = $service_equipment->getInfo(['id' => $data['id']]);
        if (!$equipment_info) {
            throw new \think\Exception("设备不存在！");
        }
        if ($equipment_info['type'] == 1) {
            if ($data['type'] == 1) {
                $order_data = [
                    'order_name' => '充电桩充电支付',
                    'order_type' => 'pile',
                    'order_no' => build_real_orderid($data['uid']),
                    'uid' => $data['uid'],
                    'village_id' => $equipment_info['village_id'],
                    'bind_id' =>$data['pigcms_id'],
                    'money' => $data['price'],
                    'time' => time(),
                    'paid' => 0,
                    'pay_uid' => $data['uid'],
                ];
                $order_pile = [
                    'village_id' => $equipment_info['village_id'],
                    'order_type' => 1,
                    'order_no' => $order_data['order_no'],
                    'equipment_id' => $equipment_info['id'],
                    'socket_no' => $data['portNum'],
                    'use_money' => $data['price'],
                    'uid' => $data['uid'],
                    'add_time' => time(),
                ];
            } else {
                $service_card = new HouseVillagePileMonthCard();
                $card_info = $service_card->getOne(['id' => $data['card_id'], 'status' => 1, 'is_del' => 1,'village_id'=>$equipment_info['village_id']]);
                if (!$card_info) {
                    throw new \think\Exception("月卡信息不存在！");
                }

                $service_card_user = new HouseVillagePileMonthCardUser();
                $card_user_info = $service_card_user->getOne(['uid' => $data['uid'],'village_id'=>$equipment_info['village_id']]);
                if ($card_user_info && $card_user_info['expire_time'] > time() && $card_user_info['status'] == 1) {
                    throw new \think\Exception("您当前有未到期的月卡，需到期后才能继续购买月卡！");
                }
                $order_data = [
                    'order_name' => '充电桩购买月卡',
                    'order_type' => 'pile',
                    'order_no' => build_real_orderid($data['uid']),
                    'village_id' => $card_info['village_id'],
                    'bind_id' =>$data['pigcms_id'],
                    'money' => $data['price'],
                    'time' => time(),
                    'paid' => 0,
                    'pay_uid' => $data['uid'],

                ];
                $order_pile = [
                    'village_id' => $card_info['village_id'],
                    'order_type' => 2,
                    'equipment_id' => $equipment_info['id'],
                    'uid' => $data['uid'],
                    'order_no' => $order_data['order_no'],
                    'use_money' => $data['price'],
                    'add_time' => time(),
                ];

                $order_user = [
                    'uid' => $data['uid'],
                    'village_id' => $card_info['village_id'],
                    'card_id' => $data['card_id'],
                    'price' => $card_info['price'],
                    'all_num' => $card_info['all_num'],
                    'per_price' => $card_info['per_price'],
                    'surplus_num' => $card_info['all_num'],
                    'max_num' => $card_info['max_num'],
                    'use_month' => $card_info['use_month'],
                    'buy_time' => time(),
                    'expire_time' => strtotime('+' . $card_info['use_month'] . 'month'),
                    'add_time' => time(),
                    'status' => 0,
                ];

                $service_card_user->insertCard($order_user);

            }
        }
        elseif($equipment_info['type'] == 21){
            if ($data['type'] ==1) {
                $portNum=$data['portNum']-1;
                if ($portNum<=9){
                    $portNum='0'.$portNum;
                }
                $order_data = [
                    'order_name' => '艾特充充电桩充电支付',
                    'order_type' => 'pile',
                    'order_no' =>build_real_orderid($data['uid']),
                    'uid' => $data['uid'],
                    'village_id' => $equipment_info['village_id'],
                    'bind_id' =>$data['pigcms_id'],
                    'money' => $data['price'],
                    'time' => time(),
                    'paid' => 0,
                    'pay_uid' => $data['uid'],
                ];
                if (strlen($equipment_info['equipment_serial'])==8){
                    $equipment_serial='00'.$equipment_info['equipment_serial'];
                }else{
                    $equipment_serial=$equipment_info['equipment_serial'];
                }
                $order_pile = [
                    'village_id' => $equipment_info['village_id'],
                    'order_type' => 1,
                    'order_no' => date('ymdhis').mt_rand(10000000,99999999).$equipment_serial.$portNum,
                    'equipment_id' => $equipment_info['id'],
                    'socket_no' => $data['portNum'],
                    'use_money' => $data['price'],
                    'uid' => $data['uid'],
                    'type' => 21,
                    'add_time' => time(),
                ];
            }
            else {
                $service_card = new HouseVillagePileMonthCard();
                $card_info = $service_card->getOne(['id' => $data['card_id']]);
                if (!$card_info) {
                    throw new \think\Exception("月卡信息不存在！");
                }

                $service_card_user = new HouseVillagePileMonthCardUser();
                $card_user_info = $service_card_user->getOne(['uid' => $data['uid']]);
                if ($card_user_info && $card_user_info['expire_time'] > time() && $card_user_info['status'] == 1) {
                    throw new \think\Exception("您当前有未到期的月卡，需到期后才能继续购买月卡！");
                }
                $order_data = [
                    'order_name' => 'tcp充电桩购买月卡',
                    'order_type' => 'pile',
                    'order_no' => build_real_orderid($data['uid']),
                    'village_id' => $card_info['village_id'],
                    'bind_id' =>$data['pigcms_id'],
                    'money' => $data['price'],
                    'time' => time(),
                    'paid' => 0,
                    'pay_uid' => $data['uid'],

                ];
                $order_pile = [
                    'village_id' => $card_info['village_id'],
                    'order_type' => 2,
                    'equipment_id' => $equipment_info['id'],
                    'uid' => $data['uid'],
                    'order_no' => mt_rand(1000000,9999999).$data['uid'].substr(time(), 2, 9 - strlen($data['uid'])),
                    'use_money' => $data['price'],
                    'add_time' => time(),
                    'type' => 2,
                ];

                $order_user = [
                    'uid' => $data['uid'],
                    'card_id' => $data['card_id'],
                    'price' => $card_info['price'],
                    'per_price' => $card_info['per_price'],
                    'all_num' => $card_info['all_num'],
                    'surplus_num' => $card_info['all_num'],
                    'max_num' => $card_info['max_num'],
                    'use_month' => $card_info['use_month'],
                    'buy_time' => time(),
                    'status' => 0,
                    'expire_time' => strtotime('+' . $card_info['use_month'] . 'month'),
                    'add_time' => time(),
                ];

                $service_card_user->insertCard($order_user);

            }
        }
        else {
            if ($data['type'] ==1) {
                if ($equipment_info['status'] != 1) {
                    throw new \think\Exception("当前设备已离线，无法充电");
                }
                if (empty($equipment_info['fd'])) {
                    throw new \think\Exception("当前设备异常，无法充电");
                }
                $time1 = time() - 300;
                if ($equipment_info['last_heart_time'] < $time1) {
                    throw new \think\Exception("当前设备已离线，无法充电");
                }
                $socket_arr = json_decode($equipment_info['port_status']);
                if (!empty($socket_arr)) {
                    $status = 0;
                    foreach ($socket_arr as $k=>$value) {
                        if ($k == $data['portNum']-1) {
                            $status = $value;
                            break;
                        }
                    }
                    //判断插座状态
                    if ($status != 0) {
                        throw new \think\Exception("当前插座不能充电，请更换插座");
                    }
                }
                $order_data = [
                    'order_name' => 'tcp充电桩充电支付',
                    'order_type' => 'pile',
                    'order_no' => build_real_orderid($data['uid']),
                    'uid' => $data['uid'],
                    'village_id' => $equipment_info['village_id'],
                    'bind_id' =>$data['pigcms_id'],
                    'money' => $data['price'],
                    'time' => time(),
                    'paid' => 0,
                    'pay_uid' => $data['uid'],
                ];
                $order_pile = [
                    'village_id' => $equipment_info['village_id'],
                    'order_type' => 1,
                    'order_no' => mt_rand(1000000,9999999).$data['uid'].substr(time(), 2, 9 - strlen($data['uid'])),
                    'equipment_id' => $equipment_info['id'],
                    'socket_no' => $data['portNum'],
                    'use_money' => $data['price'],
                    'uid' => $data['uid'],
                    'type' => 2,
                    'add_time' => time(),
                ];
            } else {
                $service_card = new HouseVillagePileMonthCard();
                $card_info = $service_card->getOne(['id' => $data['card_id']]);
                if (!$card_info) {
                    throw new \think\Exception("月卡信息不存在！");
                }

                $service_card_user = new HouseVillagePileMonthCardUser();
                $card_user_info = $service_card_user->getOne(['uid' => $data['uid']]);
                if ($card_user_info && $card_user_info['expire_time'] > time() && $card_user_info['status'] == 1) {
                    throw new \think\Exception("您当前有未到期的月卡，需到期后才能继续购买月卡！");
                }
                $order_data = [
                    'order_name' => 'tcp充电桩购买月卡',
                    'order_type' => 'pile',
                    'order_no' => build_real_orderid($data['uid']),
                    'village_id' => $card_info['village_id'],
                    'bind_id' => '',
                    'money' => $data['price'],
                    'time' => time(),
                    'paid' => 0,
                    'pay_uid' => $data['uid'],

                ];
                $order_pile = [
                    'village_id' => $card_info['village_id'],
                    'order_type' => 2,
                    'equipment_id' => $equipment_info['id'],
                    'uid' => $data['uid'],
                    'order_no' => mt_rand(1000000,9999999).$data['uid'].substr(time(), 2, 9 - strlen($data['uid'])),
                    'use_money' => $data['price'],
                    'add_time' => time(),
                    'type' => 2,
                ];

                $order_user = [
                    'uid' => $data['uid'],
                    'card_id' => $data['card_id'],
                    'price' => $card_info['price'],
                    'per_price' => $card_info['per_price'],
                    'all_num' => $card_info['all_num'],
                    'surplus_num' => $card_info['all_num'],
                    'max_num' => $card_info['max_num'],
                    'use_month' => $card_info['use_month'],
                    'buy_time' => time(),
                    'status' => 0,
                    'expire_time' => strtotime('+' . $card_info['use_month'] . 'month'),
                    'add_time' => time(),
                ];

                $service_card_user->insertCard($order_user);

            }
        }

        $service_order = new HouseVillagePayOrder();
        $order_id = $service_order->add_order($order_data);
        $order_info = $service_order->get_one(['order_id' => $order_id]);
        $pay_order_param = array(
            'business_type' => $order_info['order_type'],
            'business_id' => $order_info['order_id'],
            'order_name' => $order_info['order_name'],
            'uid' => $order_info['uid'],
            'total_money' => $order_info['money'],
            'wx_cheap' => 0,
            'is_own' => 4
        );
        $db_plat_order = new PlatOrder();
        $plat_order_result = $db_plat_order->add_order($pay_order_param);
        $order_pile['order_id'] = $order_id;
        $service_order_pile = new HouseVillagePilePayOrder();
        $order_pile_id = $service_order_pile->add_order($order_pile);

        return $order_id;
    }


    /**
     * 支付查询订单信息
     * @param integer $order_id 订单id
     * @date_time: 2021/4/12 16:54
     * @return array
     * @throws \think\Exception
     * @author:zhubaodi
     */
    public function getOrderPayInfo($order_id)
    {
        if (empty($order_id)) {
            throw new \think\Exception("请上传订单id！");
        }
        $service_order = new HouseVillagePayOrder();
        $order_info = $service_order->get_one(['order_id' => $order_id]);
        if (!$order_info) {
            throw new \think\Exception("订单信息不存在！");
        }
        $data = [
            'village_id'=>$order_info['village_id'],
            'order_money' => $order_info['money'],
            'order_no' => $order_info['order_no'],
            'uid' => $order_info['uid'],
            'title' => '充电桩充电支付',
            'time_remaining' => 900,
            'paid' => 0,
            'is_cancel' => 0,
            'city_id' => 0,
            'store_id' => 0,
            'mer_id' => 0,
            'goods_desc'=>'电瓶车充电费用', 
        ];

        return $data;


    }

    /**
     * 支付成功后跳转url
     * @param integer $order_id 订单id
     * @date_time: 2021/4/12 16:54
     * @return array
     * @throws \think\Exception
     * @author:zhubaodi
     */
    public function getPayResultUrl($order_id)
    {
        if (empty($order_id)) {
            throw new \think\Exception("请上传订单id！");
        }
        $service_order = new HouseVillagePayOrder();
        $order_info = $service_order->get_one(['order_id' => $order_id]);
        if (!$order_info) {
            throw new \think\Exception("订单信息不存在！");
        }
        $service_order_pile = new HouseVillagePilePayOrder();
        $order_pile_id = $service_order_pile->get_one(['order_id' => $order_id]);
        //payType=1&

        $service_equipment = new HouseVillagePileEquipment();
        $equipment_info = $service_equipment->getInfo(['id' => $order_pile_id['equipment_id']]);
        if (!$equipment_info) {
            throw new \think\Exception("设备不存在！");
        }

        if ($order_pile_id['order_type'] == 2) {
            $service_Card_User = new HouseVillagePileMonthCardUser();
            $where=[];
            $where[] = ['uid', '=', $order_pile_id['uid']];
            $where[] = ['status', '=', 1];
            $where[] = ['expire_time', '>', time()];
            $where[] = ['surplus_num', '>', 0];
            $cardUserInfo = $service_Card_User->getOne($where);
            $url = get_base_url('pages/village/smartCharge/monthCardDetails?id=' . $equipment_info['id'] . '&mycardid=' . $cardUserInfo['id'] . '&cardId=' . $cardUserInfo['card_id']);
         //   $url = get_base_url('pages/village/smartCharge/paySuccess?payType=1&id=' . $equipment_info['id'] . '&mycardid=' . $cardUserInfo['id'] . '&cardId=' . $cardUserInfo['card_id']);

        }else if ($equipment_info['type']==21){
           //  $url = get_base_url('pages/village/smartCharge/paySuccess?type=21&qcodeNum=' .$equipment_info['equipment_num']);
            $url = get_base_url('pages/village/smartCharge/chargeDetails?status=0&order_id=' . $order_pile_id['id']);

        } else {
            $url = get_base_url('pages/village/smartCharge/chargeDetails?status=0&order_id=' . $order_pile_id['id']);
        }
        $res['redirect_url'] = $url;
        $res['direct'] = 1;
        return $res;
    }


    /**
     * 支付成功后回调
     * @param integer $order_id 订单id
     * @param array $extra 支付返回参数
     * @date_time: 2021/4/12 16:54
     * @return string
     * @throws \think\Exception
     * @author:zhubaodi
     */
    public function afterPay($order_id, $extra)
    {
        fdump_api(['支付回调' => __LINE__,'order_id' => $order_id,'extra' => $extra],'after_pay/PileOrderPayService',1);
        $service_order = new HouseVillagePayOrder();
        $db_plat_order = new PlatOrder();
        $order_info = $service_order->get_one(['order_id' => $order_id]);
        if (!$order_info) {
            throw new \think\Exception("订单信息不存在！");
        }

        if ($extra['current_system_balance'] >= ($extra['paid_money']+$extra['current_system_balance'])) {

            $pay_type = 'balance';
        } else {
            $pay_type = $extra['paid_type'];
        }
        //fdump_api(['支付回调', $pay_type ,$extra],'afterpay/meter',1);
        if ($extra['paid_type'] == 'wechat') {
            $paid_type = 'weixin';
        } else {
            //todo 环球支付
            $paid_type = $extra['paid_type'];
        }
        $pay_order_info_id=0;
        $service_paid_order = new PayOrderInfo();
        $order_paid_no=$service_paid_order->getByOrderNo($extra['paid_orderid']);
        $paid_orderNo='';
        $pay_orderid=isset($extra['paid_orderid']) ? $extra['paid_orderid']:'';
        if (!empty($order_paid_no)){
            $paid_orderNo=$order_paid_no['paid_extra'];
            $pay_order_info_id=$order_paid_no['id'];
        }
        $order_data = [
            'pay_time' => $extra['paid_time'],
            'pay_money' => $extra['paid_money'],
            'pay_type' => $paid_type,
            'third_id' => $paid_orderNo,
            'orderid'=>isset($extra['paid_orderid'])?$extra['paid_orderid']:'',
            'is_mobile_pay' => 0,
            'paid' => $extra['paid'],
            'system_balance' => $extra['current_system_balance'],
            'system_score' => $extra['current_score_use'],
            'system_score_money' => $extra['current_score_deducte'],
        ];
        if (isset($extra['current_village_balance'])){
            $order_data['village_balance']=$extra['current_village_balance'];
        }
        $db_plat_order->save_one(['business_id' => $order_id], $order_data);
        $plat_order_info = $db_plat_order->get_one(['business_id' => $order_id]);
        $extra['order_name'] = $order_info['order_name'];
        $extra['order_id'] = $plat_order_info['order_id'];
        $extra['pay_time'] = $extra['paid_time'];
        $param = [
            'order_id' => $order_id,
            'plat_order_info' => $extra,
        ];
        $service_order_pile = new HouseVillagePilePayOrder();
        $pile_order_info = $service_order_pile->get_one(['order_id' => $order_id]);
        
        $order_record_id=0;
        if(isset($extra['order_record_id'])){
            $order_record_id=$extra['order_record_id'];
        }
        if(isset($extra['pay_order_info_id']) && $extra['pay_order_info_id']){
            $pay_order_info_id=$extra['pay_order_info_id'];
        }
        $record_extra_data=$extra;
        $record_extra_data['house_village_pay_order_id']=$order_id;
        $record_extra_data['after_pay_time']=time();
        $save_paid_order_record=array('source_from'=>1);
        $save_paid_order_record['business_type']='village_pile_pay';
        $save_paid_order_record['house_type']='village_pile_pay';
        $save_paid_order_record['business_name']='充电桩充电支付';
        $save_paid_order_record['uid']=$pile_order_info['uid'] ? $pile_order_info['uid']:$order_info['pay_uid'];
        $save_paid_order_record['order_id']=$pile_order_info['id'];
        $save_paid_order_record['order_no']=$pile_order_info['order_no'];
        $save_paid_order_record['order_type']='village_pile_pay';
        if($pile_order_info['type']!=1){
            $save_paid_order_record['order_type']='village_tcp_pile_pay';
        }
        $save_paid_order_record['order_type_v'] =$pile_order_info['type'];
        $service_user = new User();
        $user_info = $service_user->getOne(['uid' => $save_paid_order_record['uid']]);
        if($user_info && isset($user_info['uid'])){
            $save_paid_order_record['u_phone']=$user_info['phone'] ? $user_info['phone']:'';
            $save_paid_order_record['u_name']=$user_info['nickname'] ? $user_info['nickname']:'';
        }
        $save_paid_order_record['table_name']='house_village_pile_pay_order';
        $save_paid_order_record['business_order_id']=$order_id;
        if(isset($extra['paid_orderid']) && $extra['paid_orderid']){
            $save_paid_order_record['pay_order_no']=$extra['paid_orderid'];
        }
        if($paid_orderNo){
            $save_paid_order_record['third_transaction_no']=$paid_orderNo;
        }
        $save_paid_order_record['order_money']=$pile_order_info['use_money'];
        $save_paid_order_record['pay_money']=$extra['paid_money'];
        $save_paid_order_record['pay_type']=$pay_type;
        $balance_money= $extra['current_system_balance'];
        if(isset($extra['current_village_balance']) && $extra['current_village_balance']>0){
            $balance_money += $extra['current_village_balance'];
        }
        $save_paid_order_record['balance_money'] = $balance_money;
        $save_paid_order_record['is_online']=1;
        $save_paid_order_record['pay_time']=$extra['paid_time'];
        $save_paid_order_record['bind_user_id']=isset($order_info['bind_id']) && $order_info['bind_id'] ? $order_info['bind_id']:0;
        $save_paid_order_record['village_id']=$pile_order_info['village_id'];
        $record_extra_data['order_serial']=$pile_order_info['order_serial'];
        $record_extra_data['equipment_id']=$pile_order_info['equipment_id'];
        $record_extra_data['use_ele']=$pile_order_info['use_ele'];
        $record_extra_data['socket_no']=$pile_order_info['socket_no'];
        $save_paid_order_record['extra_data']=json_encode($record_extra_data,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
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
            $whereArr[]=array('table_name','=','house_village_pile_pay_order');
        }
        $paidOrderRecordDb = new PaidOrderRecord();
        $paidOrderRecordInfo = $paidOrderRecordDb->getOneData($whereArr, 'id,update_time');
        if ($paidOrderRecordInfo && !$paidOrderRecordInfo->isEmpty()) {
            $paidOrderRecordDb->saveOneData(array(['id', '=', $paidOrderRecordInfo['id']]), $save_paid_order_record);
        } else {
            $paidOrderRecordDb->addOneData($save_paid_order_record);
        }

        fdump_api(['1支付回调老版' => __LINE__,'param' => $param],'after_pay/PileOrderPayService',1);
        $res = invoke_cms_model('House_village_pay_order/after_pay', $param);
        fdump_api(['2支付回调老版' => __LINE__,'res' => $res],'after_pay/PileOrderPayService',1);
        
        if ($pay_type == 'balance') {
            $pay_type_pile = 1;
        }elseif ($pay_type== 'wechat'||$pay_type== 'weixin') {
            $pay_type_pile = 2;
        } else {
            $pay_type_pile = 4;
        }
        //todo 环球支付
        if(isset($extra['is_hqpay']) && intval($extra['is_hqpay']) == 1){
            $pay_type_pile=($extra['hqpay_source'] == 'weixin') ? 2: 4;
        }

        $order_data_pile = [
            'pay_time' => time(),
            'pay_type' => $pay_type_pile,
        ];
        if (isset($extra['current_system_balance']) && $extra['current_system_balance']) {
            $order_data_pile['current_system_balance'] = $extra['current_system_balance'];
        }
        if($pile_order_info && isset($pile_order_info['third_paid_orderid'])){
            $order_data_pile['pay_orderid']=$pay_orderid;
            $order_data_pile['third_paid_orderid']=$paid_orderNo ? $paid_orderNo:'';
        }
        fdump_api(['更改记录' => __LINE__,'order_data_pile' => $order_data_pile],'after_pay/PileOrderPayService',1);
        $orderId = $service_order_pile->saveOne(['id' => $pile_order_info['id']], $order_data_pile);
        fdump_api(['1更改记录' => __LINE__,'orderId' => $orderId, 'pile_order_info' => $pile_order_info],'after_pay/PileOrderPayService',1);
        if ($pile_order_info['order_type'] == 1) {
            //开启充电
            $service_pile = new PileUserService();
            if ($pile_order_info['type'] == 1) {
                $service_pile->newPriceStandardCharge($pile_order_info['id']);
            }elseif($pile_order_info['type'] == 21) {
                $service_pile->outCharge($pile_order_info['id'],2);
            }else {
                $service_pile->newPriceStandardCharge_tcp($pile_order_info['id']);
            }
        } elseif ($pile_order_info['order_type'] == 2) {
            $service_card_user = new HouseVillagePileMonthCardUser();
            $card_where = [
                ['uid', '=', $pile_order_info['uid']],
                ['status', '=', 0],
                ['expire_time', '>', time()]
            ];

            $carg_list=$service_card_user->getList($card_where)->toArray();
            if (!empty($carg_list)){
                rsort($carg_list);
                $data_card = ['status' => 1];
                $service_card_user->saveOne(['id'=>$carg_list[0]['id']], $data_card);
            }
            
        }
        //-----小区住户余额start-------//
        //获取小区用户信息
        $village_user = new StorageService();
        // print_r([$now_order['uid'],$villageId]);
        if(!empty($order_info['pay_uid'])&&!empty($order_info['village_id'])){
            $now_village_user = $village_user->getVillageUser($order_info['pay_uid'],$order_info['village_id']);
        }
        if (empty($now_village_user)) {
            throw new \Exception(L_("小区住户余额信息不存在"), 1003);
        }
        $villageBalancePay=0;
        if (isset($extra['current_village_balance'])){
            //判断小区住户帐户余额,扣除余额
            $villageBalancePay = floatval($extra['current_village_balance']);
            if ($villageBalancePay && $now_village_user['current_money'] < $villageBalancePay) {
                throw new \Exception(L_("您的帐户余额不够此次支付"), 1003);
            } 
        }
        if ($villageBalancePay > 0) {
            $village_money_data=[
                'uid'=>$order_info['pay_uid'],
                'village_id'=>$order_info['village_id'],
                'type'=>2,
                'current_village_balance'=>$villageBalancePay,
                'role_id'=>0,
                'desc'=>L_("物业缴费，扣除小区住户余额，订单编号X1", array("X1" => $pile_order_info['order_no'])),
                'order_id'=>$pile_order_info['order_id'],
                'order_type'=>1,
            ];
            $villageUseResult = $village_user->addVillageUserMoney($village_money_data);
            if ($villageUseResult['error_code']) {
                throw new \Exception($villageUseResult['msg'], 1003);
            }
        }
        //-------小区住户余额end--------//
        
        //获取购买用户信息
        $userService = new UserService();
        $buyer = $userService->getUser($order_info['pay_uid'], 'uid');
        if (empty($buyer)) {
            throw new \think\Exception(L_("购买用户不存在"), 1003);
        }
        //判断帐户余额,扣除余额
        $balancePay = floatval($extra['current_system_balance']);
        if ($balancePay && $buyer['now_money'] < $balancePay) {
            throw new \think\Exception(L_("您的帐户余额不够此次支付"), 1003);
        }
        if ($balancePay > 0) {
            $useResult = (new UserService())->userMoney($order_info['pay_uid'], $balancePay, L_("电表充值，扣除余额，订单编号X1", array("X1" => $order_info['order_no'])));
            if ($useResult['error_code']) {
                throw new \think\Exception($useResult['msg'], 1003);
            }
        }
        //积分抵扣，扣除积分
        $scoreUsedCount = $order_info['score_used_count'];
        if ($scoreUsedCount && $buyer['score_count'] < $scoreUsedCount) {
            throw new \think\Exception(L_("您的积分余额不够此次支付"), 1003);
        }
        if ($scoreUsedCount > 0) {
            $use_result = (new UserService())->userScore($order_info['uid'], $scoreUsedCount, L_("电表充值 ，扣除X1 ，订单编号X2", array("X1" => cfg('score_name'), "X2" => $order_info['order_no'])));
            if ($use_result['error_code']) {
                throw new \think\Exception($use_result['msg'], 1003);
            }
        }
        return $order_id;

    }
}