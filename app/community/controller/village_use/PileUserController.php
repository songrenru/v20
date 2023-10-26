<?php
/**
 * Created by PhpStorm.
 * Author: zhubaodi
 * Date Time: 2021/4/26 9:18
 */

namespace app\community\controller\village_use;

use app\common\model\service\weixin\TemplateNewsService;
use app\community\controller\CommunityBaseController;
use app\community\model\service\AreaStreetMatter;
use app\community\model\service\PileUserService;
use app\community\model\service\PileOrderPayService;
use app\community\model\service\UserService;
use think\App;

class PileUserController extends CommunityBaseController
{

    protected $uid;

    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->uid = $this->request->log_uid;
        // $this->uid =1;
    }


    /**
     * 扫码获取设备详情
     * @param integer $uid 用户uid
     * @param string $erweima 设备编码
     * @author:zhubaodi
     * @date_time: 2021/4/26 9:23
     */
    public function equipmentInfo()
    {
        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }

        /* $qcodeNum = $this->request->param('qcodeNum', '', 'trim');
         $deviceId = $this->request->param('deviceId', '', 'trim');*/
        $type = $this->request->param('type', '', 'intval');
        $qcodeNum = $this->request->param('qcodeNum', '', 'trim');
        $deviceId = $this->request->param('deviceId', '', 'trim');
        if (empty($deviceId) && empty($qcodeNum)) {
            return api_output_error(1001, '请先扫描设备码');
        }

        $lat = $this->request->param('lat', '', 'trim');
        // $lat = 111;
        /*if (empty($lat)) {
            return api_output_error(1001, '请上传经度');
        }*/
        $long = $this->request->param('long', '', 'trim');
        //   $long = 111;
        $pileService = new PileUserService();
        try {
            $info = $pileService->getEquipmentInfo($uid, $qcodeNum, $deviceId, $lat, $long, $type);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $info);
    }

    /**
     * 插座详情页信息
     * @author:zhubaodi
     * @date_time: 2021/4/26 17:37
     */
    public function socketInfo()
    {
        $uid = $this->uid;
        $uid = intval($uid);
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $id = $this->request->param('id', '', 'trim');
        $id = intval($id);
        if (empty($id)) {
            return api_output_error(1001, '请先扫描设备码');
        }
        $socket = $this->request->param('socket', '', 'intval');
        $socket = intval($socket);
        if (empty($socket)) {
            return api_output_error(1001, '请选择插座');
        }
        $pileService = new PileUserService();
        try {
            $info = $pileService->getEquipmentwork($uid, $id, $socket);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0, $info);

    }

    /**
     * 获取月卡列表
     * @author:zhubaodi
     * @date_time: 2021/4/26 17:38
     */
    public function cardList()
    {
        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }

        $id = $this->request->param('id', '', 'intval');
        if (empty($id)) {
            return api_output_error(1001, '请先扫描设备码');
        }
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->getCardList($uid, $id);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0, $cardList);

    }


    /**
     * 获取购买月卡列表
     * @author:zhubaodi
     * @date_time: 2021/4/26 17:38
     */
    public function cardOrderList()
    {
        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        //todo:需要前端增加设备id字段
        $id = $this->request->param('id', '', 'intval');
        if (empty($id)) {
            return api_output_error(1001, '请先扫描设备码');
        }
        $page = $this->request->param('page', '', 'intval');
        $limit = 10;
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->getOrderCardList($uid, $page, $limit,$id);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0, $cardList);

    }


    /**
     * 缴费
     * @author:zhubaodi
     * @date_time: 2021/4/11 10:49
     */
    public function orderPay()
    {
        $data['uid'] = $this->uid;
        if (!$data['uid']) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $data['type'] = $this->request->param('type', '', 'intval');
        if (empty($data['type'])) {
            return api_output_error(1001, '请选择一种充电方式');
        }
        $data['pigcms_id'] = $this->request->param('pigcms_id', '', 'intval');
        
        $data['id'] = $this->request->param('id', '', 'intval');
        if (empty($data['id'])) {
            return api_output_error(1001, '请上传设备编号');
        }

        if ($data['type'] && $data['type'] != 2) {
            $data['portNum'] = $this->request->param('socket', '', 'trim');
            if (empty($data['portNum'])) {
                return api_output_error(1001, '请上传设备插座编号');
            }
        }

        $data['card_id'] = $this->request->param('card_id', '', 'intval');
        $data['price'] = $this->request->param('price', '', 'trim');
        if ($data['price'] == '0.00') {
            $pileService = new PileUserService();
            try {
                $cardList = $pileService->payOrderCard($data);
               if (!empty($cardList)) {
                    $link = get_base_url('pages/village/smartCharge/chargeDetails?status=0&order_id=' . $cardList['order_id']);
                }
                /*if ($cardList['type']==21){
                    $link = get_base_url('pages/village/smartCharge/paySuccess?type=21&qcodeNum=' . $cardList['equipment_num']);
                }else{
                    if (!empty($cardList)) {
                        $link = get_base_url('pages/village/smartCharge/paySuccess?status=0&order_id=' . $cardList['order_id']);
                    }
                }*/
            } catch (\Exception $e) {
                return api_output_error(-1, $e->getMessage());
            }
        } else {
            $pileService = new PileUserService();
            $serviceHouseMeter = new PileOrderPayService();
            /*$order_id = $serviceHouseMeter->addOrderInfo($data);
            $link = get_base_url('pages/pay/check?order_type=pile&order_id=' . $order_id);*/
            try {
                $info = $pileService->getEquipmentwork($data['uid'], $data['id'], $data['portNum']);
                $order_id = $serviceHouseMeter->addOrderInfo($data);
                if (!empty($order_id)) {
                    $link = get_base_url('pages/pay/check?order_type=pile&order_id=' . $order_id);
                 }
            } catch (\Exception $e) {
                fdump_api([$data,$info, $order_id,$e->getMessage()],'pile/errOrderPay',1);
                return api_output_error(-1, $e->getMessage());
            }
        }


        return api_output(0, $link);
    }

    /**
     * 获取广告信息
     * @author:zhubaodi
     * @date_time: 2021/5/7 10:38
     */
    public function advertisement()
    {
        $pileService = new PileUserService();
        try {
            $advertisement = $pileService->getAdvertisement();
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0, $advertisement);

    }

    /**
     * 驴充充充电结束通知
     * @author:zhubaodi
     * @date_time: 2021/4/26 17:38
     */
    public function notification()
    {
        fdump_api(['通知记录=='.__LINE__,[$_GET,$_POST,$this->request->param()]],'lvcc/notification',1);
        $params = $this->request->param();
        $data['orderNum'] = $this->request->param('orderNum', '', 'trim');//订单号
        $data['endType'] = $this->request->param('endType', '', 'intval');//1:计时结束 2:充满结束 3:手动结束 4:功率过大 5:空载结束 6:中途异常拔 掉插座
        $data['powerCount'] = $this->request->param('powerCount', '', 'trim');//耗电量
        $data['startTime'] = $this->request->param('startTime', 0, 'trim');// 开始时间戳（毫秒）
        $data['endTime'] = $this->request->param('endTime', 0, 'trim');// 结束时间戳（毫秒
        $data['totalElectricMoney'] = $this->request->param('totalElectricMoney', 0, 'trim');//消费金额（计量模式下）
        $data['totalServiceFee'] = $this->request->param('totalServiceFee', 0, 'trim');//服务费（计量模式）

        $data['deviceId'] = $this->request->param('deviceId', '', 'trim');// 设备id Device id
        $data['portNum']  = $this->request->param('portNum', '', 'trim');//插座号 Socekt No.
        $data['cardNum']  = $this->request->param('cardNum', '', 'trim');//卡号 card number
        if (isset($params['payPrice'])) {
            $data['payPrice'] = $this->request->param('payPrice', '', 'trim');// 消费金额 pay price
        }
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->notification($data);
        } catch (\Exception $e) {
            fdump_api(['错误=='.__LINE__,[$_GET,$_POST,$this->request->param(), $e->getMessage()]],'lvcc/notification',1);
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $cardList);

    }


    /**
     * 艾特充充电结束通知
     * @author:zhubaodi
     * @date_time: 2021/7/22 17:38
     */
    public function outSettlement()
    {
        $data['orderNo'] = $this->request->param('orderNo', '', 'trim');
        $data['stopReason'] = $this->request->param('stopReason', '', 'trim');
        $data['powerConsumption'] = $this->request->param('powerConsumption', '', 'trim');
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->outSettlement($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0, $cardList);

    }

    /**
     * 获取订单列表
     * @author:zhubaodi
     * @date_time: 2021/5/25 17:38
     */
    public function getOrderList()
    {
        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $page = $this->request->param('page', '', 'intval');
        $page = $page > 0 ? $page : 1;
        $limit = 10;
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->getOrderList($uid, $page, $limit);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0, $cardList);

    }


    /**
     *获取订单详情
     * @author: liukezhu
     * @date : 2021/7/20
     */
    public function getOrderListDetails(){
        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $order_id= $this->request->param('order_id', '', 'intval');
        $pileService = new PileUserService();
        try {
            $list = $pileService->getOrderListDetails($uid,$order_id);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $list);
    }


    /**
     * 获取消费列表
     * @author:zhubaodi
     * @date_time: 2021/5/25 17:38
     */
    public function getConsumeList()
    {

        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $page = $this->request->param('page', '', 'intval');
        $cardId = $this->request->param('cardId', '', 'intval');
        $page = $page > 0 ? $page : 1;
        $limit = 10;
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->getConsumeList($uid, $cardId, $page, $limit);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }

        return api_output(0, $cardList);

    }

    /**
     * 获取购买的月卡详情
     * @author:zhubaodi
     * @date_time: 2021/5/25 17:38
     */
    public function getOrderCardInfo()
    {

        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $id = $this->request->param('id', '', 'intval');//设备id
        $cardId = $this->request->param('cardId', '', 'intval');//购买的月卡id
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->getOrderCardInfo($uid, $cardId, $id);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $cardList);

    }

    /**
     * 结束充电
     * @author:zhubaodi
     * @date_time: 2021/7/22 11:38
     */
    public function getStopCharge()
    {

        $uid = $this->uid;
        if (!$uid) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $order_id = $this->request->param('order_id', '', 'intval');//订单id
        $pileService = new PileUserService();
        try {
            $res = $pileService->stopCharge($order_id,$uid);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,[], $res);

    }

    /**
     * 添加退款纪录
     * @author:zhubaodi
     * @date_time: 2021/7/22 11:38
     */
    public function add_refund_order()
    {

        $data['uid'] = $this->uid;

        if (!$data['uid']) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $data['order_id'] = $this->request->param('order_id',0, 'intval');//订单id
        if (empty($data['order_id'])){
            return api_output_error(1001, '订单id不能为空');
        }
        $data['refund_reason'] = $this->request->param('refund_reason', '', 'trim');//退款原因
        if (empty($data['refund_reason'])){
            return api_output_error(1001, '退款原因不能为空');
        }
        $data['img'] = $this->request->param('img', '', 'trim');//图片
        $pileService = new PileUserService();
        try {
            $id = $pileService->add_refund_order($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $id);
    }

    /**
     * 取消退款
     * @author:zhubaodi
     * @date_time: 2021/7/29 15:43
     */
    public function cancelRefundOrder(){
        $data['uid'] = $this->uid;

        if (!$data['uid']) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $data['order_id'] = $this->request->param('order_id',0, 'intval');//订单id
        if (empty($data['order_id'])){
            return api_output_error(1001, '订单id不能为空');
        }
        $pileService = new PileUserService();
        try {
            $id = $pileService->cancel_refund_order($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $id,'操作成功');
    }

    /**
     * 扫码获取设备列表
     * @param integer $uid 用户uid
     * @author:zhubaodi
     * @date_time: 2021/4/26 9:23
     */
    public function equipmentList()
    {
        $data['uid'] = $this->uid;
        $data['uid']=1;
        if (! $data['uid']) {
            return api_output_error(1002, '未登陆或者登陆失效');
        }
        $data['lat'] = $this->request->param('lat', '', 'trim');
        $data['lng'] = $this->request->param('lng', '', 'trim');
        $data['page'] = $this->request->param('page', '1', 'intval');
        $data['equipment_name'] = $this->request->param('equipment_name', '', 'trim');
        $data['limit'] =10;
        $pileService = new PileUserService();
        try {
            $info = $pileService->getPileList($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, ['list'=>$info]);
    }

    public function test(){
        $pileService = new PileUserService();
        try {
            $info = $pileService->addLvccUser();
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, '1');
    }
}