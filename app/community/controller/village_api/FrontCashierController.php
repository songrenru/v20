<?php


namespace app\community\controller\village_api;


use app\common\model\service\config\ConfigCustomizationService;
use app\community\controller\CommunityBaseController;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\service\ConfigService;
use app\community\model\service\HouseNewCashierService;
use app\community\model\service\HouseNewChargePrepaidService;
use app\community\model\service\HouseNewChargeProjectService;
use app\community\model\service\HouseNewChargeRuleService;
use app\community\model\service\HouseNewChargeService;
use app\community\model\service\HouseNewParkingService;
use app\community\model\service\HouseVillageCheckauthApplyService;
use app\community\model\service\HouseVillageCheckauthSetService;
use app\community\model\service\HouseVillageParkingService;
use app\community\model\service\HouseVillageService;
use app\community\model\service\HouseVillageUserBindService;
use app\community\model\service\HouseVillageUserVacancyService;
use app\community\model\service\HouseNewPorpertyService;
use app\community\model\service\NewPayService;
use app\common\model\service\plan\PlanService;
use app\community\model\service\StorageService;
use app\consts\newChargeConst;

class FrontCashierController extends CommunityBaseController
{
    /**
     * 欠费列表
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/28
     */
    public function getOrderList()
    {
        $room_id = $this->request->post('room_id', 0);
        $position_id = $this->request->post('position_id', 0);
        $page = $this->request->post('page', 1);
        $limit = $this->request->post('limit', 10);
        $village_id = $this->request->post('village_id',0);
        if (!$room_id && !$position_id || !$village_id)
            return api_output_error(1001, '缺少必传参数');
        $service_house_new_cashier = new HouseNewCashierService();
        $service_house_village_parking = new HouseVillageParkingService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village = new HouseVillageService();
        $where[] = ['p.is_paid', '=', 2];
        $where[] = ['p.order_type', '<>', 'non_motor_vehicle'];
        $where[] = ['p.is_discard', '=', 1];
        $where[] = ['p.village_id', '=', $village_id];
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
        if ($room_id) {
            $where[] = ['p.room_id', '=', $room_id];
            $group = 'p.project_id';
            $field = "j.name,p.project_id,p.position_id,p.room_id,sum(p.modify_money) as modify_money,sum(p.total_money) as total_money,sum(p.late_payment_day) as late_payment_day,sum(p.late_payment_money) as late_payment_money,p.order_id,p.order_name,p.uid,p.order_id,p.modify_time,p.property_id,p.order_type,p.village_id,p.check_status,p.check_apply_id,p.pigcms_id,p.service_start_time,p.service_end_time,p.service_month_num,p.service_give_month_num,p.add_time,p.rule_id";
             $field.=',p.unify_flage_id';
            
            $where['check_level_info']=$check_level_info;
            $data = $service_house_new_cashier->getSumByGroup($where, $group, $field,$page,$limit);
            unset($where['check_level_info']);
            $count = $service_house_new_cashier->getCountByGroup($where, $group);
            $user_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $room_id], 'usernum,name,phone,single_id,floor_id,layer_id,pigcms_id,village_id,property_number');
            $data['deposit_money']=0;
            $data_deposit['room_id']=$room_id;
            $data_deposit['village_id']=$this->adminUser['village_id'];
            $data_deposit['money']=$data['total_money'];
            $deposit_money= $service_house_new_cashier->getDepositInfo($data_deposit);
            if (!empty($deposit_money['total_money'])){
                $data['deposit_money'] = $deposit_money['total_money'];
            }

        } else {
            $position_info = $service_house_village_parking->getParkingPositionByCondition(['pp.position_id' => $position_id], 'pp.children_type,pp.parent_position_id,pp.end_time,pg.garage_num,pp.position_num');
            //查询子车位信息
            if ($position_info['children_type']==1){
                $children_arr=$service_house_village_parking->getChildrenPositionList(['village_id'=>$village_id,'position_id'=>$position_id]);
            }
            $address_position = $position_info['garage_num'].$position_info['position_num'];
            $where[] = ['p.position_id', '=', $position_id];
            $group = 'p.project_id';
            $field = "j.name,p.project_id,p.position_id,p.room_id,sum(p.modify_money) as modify_money,sum(p.total_money) as total_money,sum(p.late_payment_day) as late_payment_day,sum(p.late_payment_money) as late_payment_money,p.order_name,p.uid,p.order_id,p.modify_time,p.property_id,p.order_type,p.village_id,p.check_status,p.check_apply_id,p.pigcms_id,p.service_start_time,p.service_end_time,p.service_month_num,p.service_give_month_num,p.add_time,p.rule_id";
            $field.=',p.unify_flage_id';
            
            $where['check_level_info']=$check_level_info;
            $data = $service_house_new_cashier->getSumByGroup($where, $group, $field,$page,$limit);
            unset($where['check_level_info']);
            $count = $service_house_new_cashier->getCountByGroup($where, $group);
            $bind_position = $service_house_village_parking->getBindPosition(['position_id' => $position_id]);
            $bind_info = $service_house_village_user_bind->getBindInfo(['pigcms_id' => $bind_position['user_id']], 'vacancy_id');
            $user_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $bind_info['vacancy_id']], 'usernum,name,phone,single_id,floor_id,layer_id,pigcms_id,village_id,property_number');
            $data['position_end_time'] = $position_info['end_time'];
        }
        if ($user_info) {
            if (isset($children_arr)&&!empty($children_arr['children_arr_info'])){
                $user_info['children_arr_info']=$children_arr['children_arr_info'];
            }else{
                $user_info['children_arr_info']='';
            }
            if($user_info['property_number']){
                $user_info['usernum'] = $user_info['property_number'];
            }
            $address = $service_house_village->getSingleFloorRoom($user_info['single_id'], $user_info['floor_id'], $user_info['layer_id'], $user_info['pigcms_id'], $user_info['village_id']);
            if($position_id){
                $user_info['address'] = isset($address_position)?$address_position:$address;
            }else{
                $user_info['address'] = $address;
            }
        }
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $data['is_grapefruit_prepaid']=$is_grapefruit_prepaid;
        $data['count'] = $count;
        $data['user_info'] = !empty($user_info)?$user_info:(object)[];
        $modify_show_info=(new ConfigService())->get_config('modify_show');
        if (!empty($modify_show_info)){
            $data['modify_show']=$modify_show_info['value'];
        }else{
            $data['modify_show']=1;
        }
        return api_output(0, $data);
    }

    /**
     * 修改账单金额
     * @return \json
     * @author lijie
     * @date_time 2021/06/28
     */
    public function modifyMoney()
    {
        $modify_show_info=(new ConfigService())->get_config('modify_show');
        if (!empty($modify_show_info)&&$modify_show_info['value']==0){
            return api_output_error(1001,'当前小区无法修改费用');;
        }
        $modify_reason = $this->request->post('modify_reason', '');
        if (empty($modify_reason))
            return api_output_error(1001, '请填写修改原因');
        $order_id = $this->request->post('order_id', 0);
        $modify_money = $this->request->post('modify_money', 0);
        if (!$order_id || !$modify_money || empty($modify_reason))
            return api_output_error(1001, '缺少必传参数');
        if($modify_money < 0){
            return api_output_error(1001, '修改金额不可小于0');
        }
        $where[] = ['order_id', '=', $order_id];
        $service_house_new_cashier = new HouseNewCashierService();
        $order_info = $service_house_new_cashier->getOneOrder($where,'modify_money');
        if($order_info['modify_money'] == $modify_money){
            return api_output_error(1001, '修改金额不可和当前金额一致');
        }
        $res = $service_house_new_cashier->saveOrder($where, ['modify_money' => $modify_money, 'modify_reason' => $modify_reason,'modify_time'=>time()]);
        if ($res)
            return api_output(0, [], '修改成功');
        else
            return api_output_error(0, '修改失败');
    }

    /**
     * 作废账单
     * @return \json
     * @author lijie
     * @date_time 2021/06/28
     */
    public function discardOrder()
    {
        $discard_reason = $this->request->post('discard_reason', '');
        if (empty($discard_reason))
            return api_output_error(1001, '请填写作废原因');
        $project_id = $this->request->post('project_id', 0);
        $room_id = $this->request->post('room_id', 0);
        $position_id = $this->request->post('position_id', 0);
        $order_id = $this->request->post('order_id', 0);
        if ($order_id) {
            $where['order_id'] = $order_id;
        } else {
            if (empty($project_id) || (empty($room_id) && empty($position_id)))
                return api_output_error(1001, '缺少必传参数');
            $where[] = ['project_id', '=', $project_id];
            $where[] = ['is_paid', '=', 2];
            //$where[] = ['from', '=', 1];
            $where[] = ['is_discard', '=', 1];
            if ($room_id)
                $where[] = ['room_id', '=', $room_id];
            if ($position_id)
                $where[] = ['position_id', '=', $position_id];
        }
        $service_house_new_cashier = new HouseNewCashierService();
        $orderInfo = $service_house_new_cashier->getInfo($where);
        if (empty($orderInfo)) {
            return api_output_error(1001, '未查找到订单信息！');
        }

        $projectInfo = $service_house_new_cashier->getProjectInfo(['id'=>$orderInfo['project_id']],'type');
        if ($projectInfo['type']==2){
            //查询最新未缴账单
            $subject_id_arr = $service_house_new_cashier->getNumberArr(['charge_type'=>$orderInfo['order_type'],'status'=>1],'id');
            if (!empty($subject_id_arr)){
                $getProjectArr=$service_house_new_cashier->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
            }
            if(empty($orderInfo['position_id'])){
                $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$orderInfo['room_id'],'order_type'=>$orderInfo['order_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            } else{
                $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$orderInfo['position_id'],'order_type'=>$orderInfo['order_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            }
            //判断当前订单是否是最新的订单
            if (cfg('new_pay_order')==1&&(empty($pay_order_info)||$pay_order_info['order_id']!=$orderInfo['order_id'])){
                return api_output_error(1001, '当前账单无法作废,请先作废最新的账单');
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
            $extra_data = array('order_id' => $order_id, 'discard_reason' => $discard_reason, 'total_money' => $orderInfo['total_money'], 'opt_time' => time());
            $orderRefundCheckArr['extra_data'] = json_encode($extra_data, JSON_UNESCAPED_UNICODE);
            $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
            $extra['checkauth_set'] = $checkauthSet;
            $insert_id = $houseVillageCheckauthApplyService->addApply($orderRefundCheckArr, $extra);
            if ($insert_id > 0) {
                $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $insert_id]);
                if ($order_apply['status'] == 2) {
                    //自动全额通过
                    $orderUpdateArr = array('check_status' => 3, 'check_apply_id' => $insert_id);
                    $service_house_new_cashier->saveOrder(['order_id' => $order_id], $orderUpdateArr);
                } else {
                    $orderUpdateArr = array('check_status' => 1, 'check_apply_id' => $insert_id);
                    $service_house_new_cashier->saveOrder(['order_id' => $order_id], $orderUpdateArr);
                    //需要审核
                    return api_output(0, array('xtype' => 'check_opt', 'check_status' => 1, 'check_apply_id' => $insert_id), '操作成功！');
                    exit();
                }
            }
        }
        //押金解冻
        $frozen_data=['order_id'=>$orderInfo['order_id'],'type'=>3];
        (new NewPayService())->editFrozenlog($frozen_data);
        $where = array('order_id' => $orderInfo['order_id']);
        $res = $service_house_new_cashier->saveOrder($where, ['is_discard' => 2, 'discard_reason' => $discard_reason,'update_time'=>time()]);
        if ($res)
            return api_output(0, [], '作废成功');
        else
            return api_output_error(0, '操作失败');
    }

    /**
     * 计算账单合计费用
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/28
     */
    public function getPayMoney()
    {
        $village_id = $this->adminUser['village_id'];
        $village_id = 51;
        $room_id = $this->request->post('room_id', 0);
        $position_id = $this->request->post('position_id', 0);
        $project_id = $this->request->post('project_id', 0);
        if (!$room_id && !$position_id && !$project_id)
            return api_output_error(1001, '缺少必传参数');
        $service_house_new_cashier = new HouseNewCashierService();
        $where[] = ['o.is_paid', '=', 2];
        $where[] = ['o.from', '=', 1];
        $where[] = ['o.is_discard', '=', 1];
        $where[] = ['o.village_id', '=', $village_id];
        $where[] = ['o.project_id', 'in', $project_id];
        if ($room_id)
            $where[] = ['o.room_id', '=', $room_id];
        else
            $where[] = ['o.position_id', '=', $position_id];
        $field = 'o.add_time,o.modify_money,r.late_fee_reckon_day,r.late_fee_top_day,r.late_fee_rate,o.late_payment_day,o.late_payment_money';
        $pay_money = $service_house_new_cashier->getPayMoney($where, $field);
        return api_output(0, ['pay_money' => $pay_money]);
    }

    /**
     * 线下支付列表
     * @return \json
     * @author lijie
     * @date_time 2021/06/28
     */
    public function getOfflineList()
    {
        $village_id = $this->adminUser['village_id'];
        $service_house_new_offline = new HouseNewPorpertyService();
        $service_house_village = new HouseVillageService();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id' => $village_id], 'property_id');
        $where['property_id'] = $village_info['property_id'];
        $where['status'] = 1;
        $data = $service_house_new_offline->getOfflineList($where, 'id,name');
        return api_output(0, $data);
    }

    /**
     * 查询历史缴费列表
     * @author:zhubaodi
     * @date_time: 2021/6/29 13:14
     */
    public function historyOrderList()
    {
        $village_id = $this->adminUser['village_id'];
      //   $village_id = 50;
      //   print_r($village_id);exit;
        $room_id = $this->request->post('room_id', 0);
        $position_id = $this->request->post('position_id', 0);
        $page = $this->request->post('page', 1);
        $limit = 10;
        $service_house_new_cashier = new HouseNewCashierService();
        $data = $service_house_new_cashier->getHistoryOrderList($village_id, $page, $limit,$room_id,$position_id);
        return api_output(0, $data);
    }

    /**
     * 获取收费项列表
     * @return \json
     * @author lijie
     * @date_time 2021/06/16
     */
    public function getCharges()
    {
        $room_id = $this->request->post('room_id', 0);
        $position_id = $this->request->post('position_id', 0);
        if (!$room_id && !$position_id)
            return api_output_error(1001, '缺少必传参数');
        $page = $this->request->post('page', 1);
        $limit = $this->request->post('limit', 10);
        if ($room_id)
            $where[] = ['b.vacancy_id', '=', $room_id];
        else
            $where[] = ['b.position_id', '=', $position_id];
        $where[] = ['b.is_del', '=', 1];
        $field = 'r.id as charge_rule_id,b.id,b.cycle,p.name as project_name,r.charge_name,b.order_add_type,b.order_add_time,r.charge_valid_time,r.bill_type,r.is_prepaid,p.type,n.charge_type,p.id as project_id,b.vacancy_id,b.position_id';
        $service_house_new_cashier = new HouseNewCashierService();
        $data = $service_house_new_cashier->getChargeStandardBindList($where, $field, $page, $limit, 'b.id DESC');
        $count = $service_house_new_cashier->getChargeStandardBindCount($where);
        $res['list'] = $data;
        $res['limit'] = 10;
        $res['count'] = $count;
        return api_output(0, $res);
    }

    /**
     * 收费项目列表
     * @author lijie
     * @date_time 2021/07/14
     * @return \json
     */
    public function ChargeProjectList()
    {
        $village_id = $this->request->post('village_id',0);
        if(!$village_id)
            return api_output_error(1001, '缺少必传参数');
        $HouseNewChargeProjectService = new HouseNewChargeProjectService();
        $where['p.village_id'] = $village_id;
        $where['p.status'] = 1;
        try{
            $list = $HouseNewChargeProjectService->getLists($where,'p.id,p.name,p.type,c.charge_type');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 项目对应的消费标准列表
     * @author lijie
     * @date_time 2021/07/14
     * @return \json
     */
    public function ChargeRuleList()
    {
        $charge_project_id = $this->request->post('charge_project_id');
        $village_id = $this->request->post('village_id',0);
        if(!$charge_project_id || !$village_id)
        {
            return api_output_error(1001,'必传参数缺失');
        }
        $HouseNewChargeRuleService = new HouseNewChargeRuleService();
        $param=[
            'charge_project_id'=>$charge_project_id,
            'village_id'=>$village_id,
            'status'=>1,
        ];
        try{
            $list = $HouseNewChargeRuleService->getRuleLists($param,'id,charge_name,bill_type,bill_create_set,charge_valid_time,fees_type,unit_gage');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 添加收费项
     * @author lijie
     * @date_time 2021/07/14
     * @return \json
     * @throws \think\Exception
     */
    public function bindRule()
    {
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $village_id = $this->request->post('village_id',0);
        $project_id = $this->request->post('project_id',0);
        $rule_id = $this->request->post('rule_id',0);
        $order_add_time = $this->request->post('order_add_time',0);
        $custom_value = $this->request->post('custom_value','');
        $room_id = $this->request->post('room_id',0);
        $position_id = $this->request->post('position_id',0);
        $cycle = $this->request->post('cycle',1);
        if(!$project_id || !$rule_id  || (!$room_id && !$position_id))
            return api_output_error(1001,'缺少必传参数');
        $data['village_id'] = $village_id;
        $data['rule_id'] = $rule_id;
        if(empty($cycle)){
            $cycle = 1;
        }
        $data['cycle'] = $cycle;
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$rule_id],'r.*');
        if (!empty($order_add_time)){
            if($info['bill_create_set'] == 2)
                $order_add_time = date('Y-m-d',strtotime($order_add_time));
            elseif ($info['bill_create_set'] == 3)
                $order_add_time = date('Y-m-d',strtotime($order_add_time));
        }
        $data['order_add_time'] = $order_add_time;
        if($room_id){
            $bind_type = 1;
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$room_id],'single_id,floor_id,layer_id');
            $data['single_id'] = $vacancy_info['single_id']?$vacancy_info['single_id']:0;
            $data['floor_id'] = $vacancy_info['floor_id']?$vacancy_info['floor_id']:0;
            $data['layer_id'] = $vacancy_info['layer_id']?$vacancy_info['layer_id']:0;
            $data['vacancy_id'] = $room_id;
        } else{
            $bind_type = 2;
            $service_house_parking = new HouseVillageParkingService();
            $garage_info = $service_house_parking->getParkingPositionDetail(['pp.position_id'=>$position_id],'pp.position_num,pg.garage_num,pp.garage_id');
            $data['garage_id'] = $garage_info['detail']['garage_id']?$garage_info['detail']['garage_id']:0;
            $data['position_id'] = $position_id;
        }
        $data['bind_type'] = $bind_type;
        $data['custom_value'] = $custom_value;
        try{
            $res = $service_house_new_charge_rule->addStandardBind($data);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        if($res)
            return api_output(0,[],'添加成功');
        return api_output_error(1001,'服务异常');
    }


    /**
     * 获取欠费项目对应的订单列表
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/15
     */
    public function getPayOrderList()
    {
        $project_id = $this->request->post('project_id', 0);
        $room_id = $this->request->post('room_id', 0);
        $position_id = $this->request->post('position_id', 0);
        $where[] = ['o.project_id', '=', $project_id];
        $where[] = ['o.is_paid', '=', 2];
        $where[] = ['o.is_discard', '=', 1];
        if ($room_id)
            $where[] = ['o.room_id', '=', $room_id];
        if ($position_id)
            $where[] = ['o.position_id', '=', $position_id];
        $service_house_new_cashier = new HouseNewCashierService();
        $field = 'r.charge_name,o.order_id,o.modify_money,o.add_time,r.late_fee_reckon_day,r.late_fee_rate,r.late_fee_top_day,o.modify_time,o.total_money,o.late_payment_money,o.is_auto,o.service_start_time,o.service_end_time,o.property_id,o.order_type,o.village_id,n.charge_type';
        $data = $service_house_new_cashier->getOrderList($where, $field, 0, 0, 'o.order_id DESC');
        return api_output(0, $data);
    }

    /**
     * 订单详情
     * @return array|\json|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/15
     */
    public function getPayOrderInfo()
    {
        $order_id = $this->request->post('order_id', 0);
        if (!$order_id)
            return api_output_error(1001, '缺少必传参数');
        $service_house_new_cashier = new HouseNewCashierService();
        $where[] = ['o.order_id', '=', $order_id];
        $field = 'o.parking_num,o.parking_lot,o.is_prepare,o.total_money,o.modify_money,o.diy_content,o.service_month_num,o.add_time,r.charge_name,p.name as project_name,r.late_fee_reckon_day,r.late_fee_rate,r.late_fee_top_day,r.charge_valid_time,r.bill_create_set,o.last_ammeter,o.now_ammeter,o.late_payment_day,o.late_payment_money,o.property_id,o.village_id,o.order_type,o.project_id';
        $data = $service_house_new_cashier->getOrderDetail($where, $field);
        return api_output(0, $data);
    }

    /**
     * 获取收费标准预缴周期列表
     * @return \json
     * @author lijie
     * @date_time 2021/06/25
     */
    public function getPrepaid()
    {
        $village_id = $this->request->post('village_id',0);
        $charge_rule_id = $this->request->post('charge_rule_id', 0);
        $room_id = $this->request->post('room_id',0);
        $position_id = $this->request->post('position_id',0);
        if (!$charge_rule_id || !$village_id || (!$room_id && !$position_id))
            return api_output_error(1001, '缺少必传参数');
        $service_house_new_charge_prepaid = new HouseNewChargePrepaidService();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $where['pre.charge_rule_id'] = $charge_rule_id;
        $where['pre.village_id'] = $village_id;
        $where['pre.status'] = 1;
        $housesize=0;
        $charge_type='';
        try {
            $rule_info = $service_house_new_charge_rule->get_rule_info(['id'=>$charge_rule_id],'fees_type,unit_price,unit_gage,bill_create_set,rate,not_house_rate,charge_project_id,bill_create_set,id,cyclicity_set,charge_valid_time',$room_id,$position_id);
            if($room_id){
                /*
                $service_house_village_user_bind = new HouseVillageUserBindService();
                $condition1 = [];
                $condition1[] = ['vacancy_id','=',$room_id];
                $condition1[] = ['status','=',1];
                $condition1[] = ['type','in',[0,3,1,2]];
                $bind_list = $service_house_village_user_bind->getList($condition1,true);
                */
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $whereArrTmp=array();
                $whereArrTmp[]=array('pigcms_id','=',$room_id);
                $whereArrTmp[]=array('status','in',[1,2,3]);
                $whereArrTmp[]=array('is_del','=',0);
                $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
                $not_house_rate = 1;
                if($room_vacancy && !$room_vacancy->isEmpty()){
                    $room_vacancy = $room_vacancy->toArray();
                    if(!empty($room_vacancy)){
                        if($room_vacancy['user_status']==2){
                            $not_house_rate = $rule_info['not_house_rate'];
                        }
                        $housesize = $room_vacancy['housesize'];
                    }
                }
                
                $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$rule_info['charge_project_id'],'rule_id'=>$rule_info['id'],'vacancy_id'=>$room_id,'is_del'=>1]);
                $whereArr=array(['r.id','=',$charge_rule_id],['r.charge_project_id','=',$rule_info['charge_project_id']]);
                $chargeProjectNumber=$service_house_new_charge_rule->getChargeProjectNumber($whereArr,'c.charge_type');
                if($chargeProjectNumber && isset($chargeProjectNumber['charge_type']) && $chargeProjectNumber['charge_type']){
                    $charge_type=$chargeProjectNumber['charge_type'];
                }
            }else{
                $service_house_village_parking = new HouseVillageParkingService();
                $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$position_id]);
                if($carInfo){
                    $carInfo = $carInfo->toArray();
                }
                if(empty($carInfo))
                    $not_house_rate = $rule_info['not_house_rate']/100;
                else
                    $not_house_rate = 1;
            }
            if($position_id){
                if($position_id){
                    $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$rule_info['charge_project_id'],'rule_id'=>$rule_info['id'],'position_id'=>$position_id]);
                }
            }
            if(isset($projectBindInfo) && !empty($projectBindInfo)){
                $custom_value = $projectBindInfo['custom_value'];
            }else{
                $custom_value = 1;
            }
            if ($charge_type=='property' && $custom_value<=1 && $housesize>0){
                $custom_value=$housesize;
            }
            if(empty($custom_value)){
                $custom_value = 1;
            }
            $data = $service_house_new_charge_prepaid->getPrepaidList($where, 'pre.*,r.rate as r_rule_rate,r.fees_type,r.charge_project_id,charge_price,r.bill_create_set',strtotime($rule_info['service_end_time']),$not_house_rate,$custom_value);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data);
    }

    /**
     * 获取预缴账单详情
     * @return \json
     * @author lijie
     * @date_time 2021/06/25
     */
    public function getPrepaidDetail()
    {
        $prepaid_id = $this->request->post('prepaid_id');
        if (!$prepaid_id)
            return api_output_error(1001, '缺少必传参数');
        $service_house_new_charge_prepaid = new HouseNewChargePrepaidService();
        $where['pre.id'] = $prepaid_id;
        $field = 'pre.*,r.charge_price,r.not_house_rate,r.unit_gage,r.fees_type';
        try {
            $data = $service_house_new_charge_prepaid->getPrepaidDetail($where, $field);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data);
    }

    /**
     * 生成预缴账单
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/25
     */
    public function prepaidCall()
    {
        $prepaid_id = $this->request->post('prepaid_id', 0);
        $project_id = $this->request->post('project_id', 0);
        $room_id = $this->request->post('room_id', 0);
        $position_id = $this->request->post('position_id', 0);
        if (!$prepaid_id || !$project_id || (!$room_id && !$position_id)) {
            return api_output_error(1001, '缺少必传参数');
        }
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_new_charge = new HouseNewChargeService();
        $service_house_village = new HouseVillageService();
        $service_house_new_charge_prepaid = new HouseNewChargePrepaidService();
        $service_house_new_cashier = new HouseNewCashierService();
        if($room_id) {
            $history_list = $service_house_new_cashier->getOneOrder(['room_id'=>$room_id,'project_id'=>$project_id,'is_discard'=>1,'is_paid'=>2,'is_prepare'=>1,'position_id'=>0]);
        }
        else {
            $history_list = $service_house_new_cashier->getOneOrder(['position_id'=>$position_id,'project_id'=>$project_id,'is_discard'=>1,'is_paid'=>2,'is_prepare'=>1]);
        }
        if(isset($history_list['order_id'])){
            return api_output_error(1001,'该项目存在未支付的预缴账单，请先支付');
        }
        $where['pre.id'] = $prepaid_id;
        $prepaid_info = $service_house_new_charge_prepaid->getPrepaidDetail($where,'pre.*');
        if(empty($prepaid_info)) {
            return api_output_error(1001,'参数异常');
        }
        if($room_id){
            $type = 1;
            $id = $room_id;
        }else{
            $type = 2;
            $id = $position_id;
        }
        $is_allow = $service_house_new_charge_rule->checkChargeValid($project_id,$prepaid_info['charge_rule_id'],$id,$type);
        if(!$is_allow) {
            return api_output_error(1001,'当前收费标准未生效');
        }
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$prepaid_info['charge_rule_id']],'n.charge_type,r.*');
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
            if(!$position_id) {
                $order_list = $service_house_new_cashier->getOrderLists(['o.is_discard'=>1,'o.room_id'=>$room_id,'o.project_id'=>$project_id,'o.rule_id'=>$info['id'],'o.is_refund'=>1],'o.*');
            }
            else {
                $order_list = $service_house_new_cashier->getOrderLists(['o.is_discard'=>1,'o.position_id'=>$position_id,'o.project_id'=>$project_id,'o.rule_id'=>$info['id'],'o.is_refund'=>1],'o.*');
            }
            if($order_list){
                $order_list = $order_list->toArray();
                if(count($order_list) >= $info['cyclicity_set']) {
                    return api_output_error(1001,'超过最大缴费周期数');
                }
                $order_count = 0;
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
        }
        $postData['order_type'] = $info['charge_type'];
        $postData['order_name'] = $service_house_new_charge->charge_type[$info['charge_type']];
        $postData['village_id'] = $prepaid_info['village_id'];
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$prepaid_info['village_id']],'property_id');
        $postData['property_id'] = $village_info['property_id'];
        $postData['service_month_num'] = $prepaid_info['cycle'];
        $postData['prepaid_cycle'] = $prepaid_info['cycle'];
        if($room_id){
            /*
            $condition1 = [];
            $condition1[] = ['vacancy_id','=',$room_id];
            $condition1[] = ['status','=',1];
            $condition1[] = ['type','in',[0,3,1,2]];
            $bind_list = $service_house_village_user_bind->getList($condition1,true);
            */
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $whereArrTmp=array();
            $whereArrTmp[]=array('pigcms_id','=',$room_id);
            $whereArrTmp[]=array('user_status','=',2);
            $whereArrTmp[]=array('status','in',[1,2,3]);
            $whereArrTmp[]=array('is_del','=',0);
            $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
            $not_house_rate = 100;
            if($room_vacancy && !$room_vacancy->isEmpty()){
                $room_vacancy = $room_vacancy->toArray();
                if(!empty($room_vacancy)){
                    $not_house_rate = $info['not_house_rate'];
                }
            }
            $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'vacancy_id'=>$room_id]);
        }else{
            $service_house_village_parking = new HouseVillageParkingService();
            $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$position_id]);
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
        if($position_id){
            $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'position_id'=>$position_id]);
        }
        if(isset($projectBindInfo) && !empty($projectBindInfo)){
            $custom_value = $projectBindInfo['custom_value'];
            $custom_number = $custom_value;
        }else{
            $custom_value = 1;
        }
        if(empty($custom_value)){
            $custom_value = 1;
        }
        if($prepaid_info['type'] == 1){
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$prepaid_info['rate']/100*$prepaid_info['cycle']*$info['rate']*$custom_value;
            $postData['rate'] = $prepaid_info['rate'];
            $postData['diy_content'] = '折扣率'.$prepaid_info['rate'].'%';
            $postData['diy_type'] = 1;
        } elseif ($prepaid_info['type'] == 2){
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$prepaid_info['cycle']*$info['rate']*$custom_value;
            $postData['service_give_month_num'] = $prepaid_info['give_cycle_type'];
            if($info['bill_create_set'] == 1){
                $postData['diy_content'] = '赠送'.$prepaid_info['give_cycle_type'].'天';
            }elseif ($info['bill_create_set'] == 2){
                $postData['diy_content'] = '赠送'.$prepaid_info['give_cycle_type'].'个月';
            }else{
                $postData['diy_content'] = '赠送'.$prepaid_info['give_cycle_type'].'年';
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
        if($not_house_rate>0 && $not_house_rate<100){
            $postData['not_house_rate'] = $not_house_rate;
        }
        if(isset($custom_number)){
            $postData['number'] = $custom_number;
        }
        if($info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES && $parkingNum > 1) {
            $postData['total_money'] = $postData['total_money'] * intval($parkingNum);
            $postData['parking_num'] = intval($parkingNum);
            $postData['parking_lot'] = isset($ruleHasParkNumInfo) && isset($ruleHasParkNumInfo['parking_lot']) ? $ruleHasParkNumInfo['parking_lot'] : '';
        }
        $postData['modify_money'] = $postData['total_money'];
        $postData['prepare_pay_money'] = $postData['total_money'];
        $postData['is_paid'] = 2;
        $postData['is_prepare'] = 1;
        $postData['rule_id'] = $info['id'];
        $postData['project_id'] = $info['charge_project_id'];
        $postData['order_no'] = '';
        $postData['add_time'] = time();
        $postData['from'] = 1;
        $projectInfo = $service_house_new_cashier->getProjectInfo(['id'=>$project_id],'subject_id');
        $numberInfo = $service_house_new_cashier->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
        if($position_id) {
            $last_order = $service_house_new_cashier->getOrderLog([['position_id','=',$position_id],['order_type','=',$numberInfo['charge_type']],['project_id','=',$info['charge_project_id']]],true,'id DESC');
        }
        else {
            $last_order = $service_house_new_cashier->getOrderLog([['room_id','=',$room_id],['order_type','=',$numberInfo['charge_type']],['project_id','=',$info['charge_project_id']],['position_id','=',0]],true,'id DESC');
        }
         
        //查询未缴账单
        $subject_id_arr = $service_house_new_cashier->getNumberArr(['charge_type'=>$numberInfo['charge_type'],'status'=>1],'id');
        if (!empty($subject_id_arr)){
            $getProjectArr=$service_house_new_cashier->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
        }
        if($type == 1){
            $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$room_id,'order_type'=>$numberInfo['charge_type']];
            if (isset($getProjectArr)&&!empty($getProjectArr)){
                $pay_where['project_id']=$getProjectArr;
            }
            $pay_order_info = $service_house_new_cashier->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
        } else{
            $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$position_id,'order_type'=>$numberInfo['charge_type']];
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
                        ['position_id', '=', $position_id],
                        ['order_type', '=', $numberInfo['charge_type']],
                    ];
                } else {
                    $where22 = [
                        ['room_id', '=', $room_id],
                        ['order_type', '=', $numberInfo['charge_type']],
                        ['position_id', '=', 0]
                    ];
                }
                $new_order_log = $service_house_new_cashier->getOrderLog($where22, true, 'id DESC');
                if (!empty($new_order_log)) {
                    $last_order = $new_order_log;
                }
            }
            if ($last_order) {
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
                $postData['service_end_time'] = strtotime("+".$cycle." month",$postData['service_start_time'])-1;
            }else{
                $cycle = $cycle*30;
                $postData['service_end_time'] = strtotime("+".$cycle." day",$postData['service_start_time'])-1;
            }
        }else{
            $postData['service_end_time'] = strtotime("+".$cycle." year",$postData['service_start_time'])-1;
        }
        $contract_info = $service_house_new_charge_rule->getHouseVillageInfo(['village_id'=>$prepaid_info['village_id']],'contract_time_start,contract_time_end');
        if(isset($contract_info['contract_time_start']) && $contract_info['contract_time_start'] > 1){
            if($postData['service_start_time'] < $contract_info['contract_time_start'] || $postData['service_start_time'] > $contract_info['contract_time_end']){
                return api_output_error(1001,'账单开始时间不在合同范围内');
            }
            if($postData['service_end_time'] < $contract_info['contract_time_start'] || $postData['service_end_time'] > $contract_info['contract_time_end']){
                return api_output_error(1001,'账单结束时间不在合同范围内');
            }
        }
        $postData['unit_price'] = $info['charge_price'];
        if($room_id){
            $postData['room_id'] = $room_id;
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$postData['room_id']],['type','in','0,3'],['status','=',1]],'uid,pigcms_id,name,phone');
            if($user_info){
                $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                $postData['name'] = $user_info['name']?$user_info['name']:'';
                $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
                $postData['uid'] = $user_info['uid']?$user_info['uid']:0;
            }
        }
        if($position_id){
            $service_house_village_parking = new HouseVillageParkingService();
            $postData['position_id'] = $position_id;
            /*
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$postData['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'uid,pigcms_id,name,phone,vacancy_id');
            if($user_info){
                $postData['room_id'] = $user_info['vacancy_id']?$user_info['vacancy_id']:0;
                $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                $postData['name'] = $user_info['name']?$user_info['name']:'';
                $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
            }
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
                $uid=(isset($user_info['uid'])&&!empty($user_info['uid']))?$user_info['uid']:0;
                if (!empty($uid)) {
                    $result = (new StorageService())->userBalanceChange($uid, 2, $postData['modify_money'], '移动管理端手动生成预缴账单，物业费自动扣除余额', '移动管理端手动生成预缴账单，物业费自动扣除余额', $id,$postData['village_id']);
                    if ($result['error']) {
                        return api_output(0, ['msg' => $result['msg']], $result['msg']);
                    }
                }
            }
            return api_output(0,['msg'=>'预缴账单已生成'],'预缴账单已生成');
        }
        return api_output_error(1001,'服务异常');
    }


    /**
     * 查询历史缴费账单详情
     * @author:zhubaodi
     * @date_time: 2021/6/29 19:58
     */
    public function historyOrderInfo()
    {
        $village_id = $this->adminUser['village_id'];
        $summary_id = $this->request->post('summary_id', 0, 'intval');
        if($village_id<1){
            return api_output_error(1002, '您尚未登录，请先登录移动管理端！');
        }
        $service_house_new_cashier = new HouseNewCashierService();
        try {

            $res = $service_house_new_cashier->getHistoryOrderInfo($village_id, $summary_id);
            if ($res) {
                return api_output(0, $res);
            }
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output_error(1001, '未获取到数据');
    }

    /**
     * 查询历史缴费账单详情
     * @author:zhubaodi
     * @date_time: 2021/6/29 19:58
     */
    public function historyInfo()
    {

        $village_id = $this->request->post('village_id',0);
        if($this->adminUser && isset($this->adminUser['village_id'])){
            $village_id = $this->adminUser['village_id'];
        }
        if($village_id<1){
            return api_output_error(1002, '您尚未登录，请先登录移动管理端！');
        }
        $type = $this->request->post('type', 0, 'intval');
        $type=empty($type)?1:$type;
        if ($type==1){
            $order_id = $this->request->post('order_id', 0, 'intval');
            $service_house_new_cashier = new HouseNewCashierService();
            $res = $service_house_new_cashier->getHistoryInfo($village_id, $order_id);
            if ($res){
                return api_output(0, $res);
            }
            return api_output_error(1001, '未获取到数据');
        }else{
            $summary_id = $this->request->post('order_id', 0, 'intval');
            try {
                $service_house_new_cashier = new HouseNewCashierService();
                $res = $service_house_new_cashier->getHistoryOrderInfo($village_id, $summary_id);
                if ($res){
                    return api_output(0, $res);
                }
            }catch (\Exception $e) {
                return api_output_error(-1, $e->getMessage());
            }

            return api_output_error(1001, '未获取到数据');
        }

    }


    /**
     * 查询应收账单
     * @author:zhubaodi
     * @date_time: 2021/6/29 20:07
     */
    public function receivableOrderList()
    {
        $village_id = $this->adminUser['village_id'];
        // $village_id = 50;
        $page = $this->request->post('page', 1);
        $service_house_new_cashier = new HouseNewCashierService();
        $where['o.is_paid'] = 2;
        $where['o.is_discard'] = 1;
        $where['o.village_id'] = $village_id;
        try {
            $data = $service_house_new_cashier->getOrderListByGroup($where, 'sum(o.total_money) as total_money,o.name,o.phone,v.room,p.position_num,o.room_id,o.position_id,o.uid,o.property_id,o.order_type', $page, 15, 'o.order_id DESC', 'o.room_id,o.position_id');
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        $res = $data;
        return api_output(0, $res);
    }
    
    /**
     * 获取已缴账单
     * @author:zhubaodi
     * @date_time: 2021/6/24 17:01
     */
    public function payableOrderList()
    {

        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page', 1);
        $keyword = $this->request->post('keyword', '', 'trim');
        $keyword = trim($keyword);
        $service_house_new_cashier = new HouseNewCashierService();
        $where = array();
        $where[] = ['o.village_id', '=', $village_id];
        $where[] = ['o.is_discard', '=', 1];
        $where[] = ['o.is_paid', '=', 1];
        $where[] = ['o.order_type', '<>', 'non_motor_vehicle'];
        $where1 = '`o`.`refund_money`<`o`.`modify_money`';
        if (!empty($keyword)) {
            $where[] = ['o.pay_bind_name|o.pay_bind_phone', 'like', '%' . $keyword . '%'];
        }
        $field = 'o.*,p.name as project_name';
        $limit=10;
        try {
            $houseVillageCheckauthSetService = new HouseVillageCheckauthSetService();
            $orderRefundCheckWhere = array('village_id' => $this->adminUser['village_id'], 'xtype' => 'order_refund_check');
            $orderRefundCheckOpen = $houseVillageCheckauthSetService->isOpenSet($orderRefundCheckWhere);
            $wid = 0;
            if (in_array($this->login_role, $this->villageOrderCheckRole) && $orderRefundCheckOpen > 0 && isset($this->adminUser['wid']) && ($this->adminUser['wid'] > 0)) {
                $wid = $this->adminUser['wid'];
                $userAuthLevel = $houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
                if (!empty($userAuthLevel)) {
                    $where['check_level_info'] = array('wid' => $this->adminUser['wid'], 'check_level' => $userAuthLevel['check_level']);
                }
            }
            $list = $service_house_new_cashier->getCancelOrder($where, $where1, $field, $page, $limit, 'o.pay_time DESC');
            if($list && isset($list['list']) && !empty($list['list'])){
                
                foreach ($list['list'] as $okk=>$ovv){
                    $tmpArr=array();
                    $tmpArr[]=array('title'=>'支付方式','name'=>$ovv['pay_type']);
                    $tmpArr[]=array('title'=>'业主姓名','name'=>$ovv['pay_bind_name']);
                    $tmpArr[]=array('title'=>'联系方式','name'=>$ovv['pay_bind_phone']);
                    $tmpArr[]=array('title'=>'地址','name'=>$ovv['numbers']);
                    $tmpArr[]=array('title'=>'支付时间','name'=>$ovv['pay_time']);
                    $tmpArr[]=array('title'=>'备注','name'=>$ovv['remark'] ?$ovv['remark']:'暂无' );
                    $list['list'][$okk]['list']=$tmpArr;
                }
                
            }
            $list['orderRefundCheckOpen'] = $orderRefundCheckOpen;
            $list['login_role'] = $this->login_role;
            $list['wid'] = $wid;
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $list);
    }
    
    /**
     * 应收账单明细
     * @return \json
     * @author:zhubaodi
     * @date_time: 2021/6/29 20:07
     */
    public function receivableOrderInfo()
    {
        $village_id = $this->adminUser['village_id'];
       //  $village_id = 50;
        $type = $this->request->post('type', '');
        $key_id = $this->request->post('key_id', 0);
        $page = $this->request->post('page', 1);
        if (empty($type) || !$key_id)
            return api_output_error(1001, '缺少必传参数');
        $service_house_new_cashier = new HouseNewCashierService();
        if ($type == 'room')
            $where['o.room_id'] = $key_id;
        else
            $where['o.position_id'] = $key_id;
        $where['o.is_paid'] = 2;
        $where['o.is_discard'] = 1;
        $where['o.village_id'] = $village_id;
        try {
            //$filed='r.charge_name,p.name,o.project_id,o.order_id,o.room_id,o.position_id,n.charge_number_name,o.total_money,o.modify_money,o.late_payment_money,o.is_auto,o.service_start_time,o.service_end_time,o.last_ammeter,o.now_ammeter,n.charge_type,o.property_id,o.order_type';
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
            $data = $service_house_new_cashier->getOrderList($where,$filed , $page, 10, 'o.order_id DESC');
            if (isset($where['check_level_info'])) {
                unset($where['check_level_info']);
            }
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data);
    }


    /**
     * 应收账单详情
     * @return \json
     * @author:zhubaodi
     * @date_time: 2021/6/29 20:07
     */
    public function getReceivableOrderInfo()
    {
        $village_id = $this->adminUser['village_id'];
       //  $village_id = 50;
        $order_id = $this->request->post('order_id',0);
        if(empty($order_id) )
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_cashier = new HouseNewCashierService();

        $where['o.order_id'] = $order_id;
        $where['o.is_paid'] = 2;
        $where['o.is_discard'] = 1;
        $where['o.village_id'] = $village_id;
        try{
            $data = $service_house_new_cashier->getReceivableOrderInfo($where,'r.charge_name,p.name,o.order_id,n.charge_number_name,o.total_money,o.modify_money,o.service_start_time,o.service_end_time,o.last_ammeter,o.now_ammeter,o.order_type,o.property_id',0,0,'o.order_id DESC');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 发送缴费通知
     * @return \json
     * @throws \think\Exception
     * @author lijie
     * @date_time 2021/06/26
     */
    public function sendMessage()
    {
        set_time_limit(0);
		$village_id = $this->adminUser['village_id'];
       //  $village_id = 50;
        $service_house_village = new HouseVillageService();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $service_house_parking = new HouseVillageParkingService();
        $service_house_new_cashier = new HouseNewCashierService();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id' => $village_id], 'property_id,property_name,village_name');
        $room_id = $this->request->post('room_id',0);
        $position_id = $this->request->post('position_id',0);
        if (empty($room_id)&&empty($position_id)){
            return api_output_error(1001, '缺少必传参数');
        }
        try {

            if (!empty($room_id)){
                $where['o.room_id'] = $room_id;
            }
            if (!empty($position_id)){
                $where['o.position_id'] = $position_id;
            }
            $where['o.is_paid'] = 2;
            $where['o.is_discard'] = 1;
            $where['o.village_id'] = $village_id;
            $data = $service_house_new_cashier->getOrderListByGroup($where, 'sum(o.total_money) as total_money,o.order_id,o.order_type,o.property_id,o.name,o.phone,v.room,p.position_num,o.room_id,o.position_id,o.uid,o.rule_id', 0, 0, 'o.order_id DESC', 'o.room_id,o.position_id');
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        $village_info_extend = $service_house_village->getHouseVillageInfoExtend(['village_id'=>$village_id]);
        $urge_notice_type=0;
        if($village_info_extend && isset($village_info_extend['urge_notice_type'])){
            //1短信通知2微信模板通知3短信和微信模板通知
            $urge_notice_type=$village_info_extend['urge_notice_type'];
        }
       // print_r($data);exit;

        $list = $data['list'];
        $service_house_village_user_bind = new HouseVillageUserBindService();
        if ($list) {
            foreach ($list as $v) {
                $href = '';
                if ($v['room_id']) {
                    $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $v['room_id']], 'uid,single_id,floor_id,layer_id,village_id');
                    if ($vacancy_info) {
                        $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $v['room_id'], $vacancy_info['village_id']);
                        if($v['uid']<=0 && $vacancy_info['uid']>0){
                            $v['uid']=$vacancy_info['uid'];
                        }
                    } else {
                        $address = '';
                    }
                    $condition=array();
                    $condition[] = ['vacancy_id','=',$v['room_id']];
                    $condition[] = ['status','=',1];
                    $condition[] = ['type','in',[0,3]];
                    $bind_list = $service_house_village_user_bind->getList($condition,'uid,pigcms_id,village_id');
                    $pigcms_id=0;
                    if($bind_list && !$bind_list->isEmpty()) {
                        $bind_list = $bind_list->toArray();
                        $pigcms_id=$bind_list['0']['pigcms_id'];
                        $v['uid']=$bind_list['0']['uid'];
                    }
                    $href = get_base_url('pages/houseMeter/NewCollectMoney/newLiveExpenses?village_id=' . $village_id . '&pigcms_id='.$pigcms_id);
                } else {
                    $garage_info = $service_house_parking->getParkingPositionDetail(['pp.position_id' => $v['position_id']], 'pp.position_num,pg.garage_num');
                    if ($garage_info) {
                        $address = $garage_info['detail']['garage_num'] . '--' . $garage_info['detail']['position_num'];
                    } else {
                        $address = '';
                    }
                }

                if($urge_notice_type!=1) {
                    $name = $v['name'] ?: (new HouseVillageUserBind())->where(['uid'=>$v['uid'],'village_id'=>$village_id])->value('name');
                    $service_house_new_cashier->sendCashierMessage($v['uid'], $href, $address, $village_info['village_name'], $v['total_money'],$village_info['property_id'],$v['order_type'],$v['rule_id'],$name);
                }
            }
        }
        return api_output(0,[]);
    }

    /**
     * 移动管理端收银台生成支付账单
     * @author lijie
     * @date_time 2021/07/08
     * @return \json
     */
    public function goPay()
    {
        $village_id = $this->request->post('village_id',0);
        $order_list = $this->request->post('order_list',[]);
        $data1['pay_money'] = $this->request->post('pay_money','');//待支付金额
        $data1['deposit_money'] = $this->request->post('deposit_money','');//押金抵扣金额
        $data1['deposit_type'] = $this->request->post('deposit_type','');//是否开启押金抵扣
        if(empty($order_list) || !$village_id)
            return api_output_error(1001,'缺少必传参数');
        $service_new_pay = new NewPayService();
        try{
            $data = $service_new_pay->frontCashierGoPay($order_list,$village_id,$data1);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,['info'=>$data]);
    }

    /**
     * 移动管理端线下支付
     * @author lijie
     * @date_time 2021/07/08
     * @return \json
     */
    public function pay()
    {
        $summary_id = $this->request->post('summary_id',0,'intval');
        $pay_type = $this->request->post('pay_type',1,'intval');
        $remark = $this->request->post('remark','');
        $app_type = $this->request->post('app_type','');
        $offline_pay_type = $this->request->post('order_pay_type',0);
        if(!$summary_id || !$pay_type)
            return api_output_error(1001,'缺少必传参数');
        $service_new_pay = new NewPayService();
        try{
            $res = $service_new_pay->pay($summary_id,$pay_type,$remark,$app_type,$offline_pay_type);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if($res['error_code']){
            return api_output_error(1001, $res['msg']);
        }
        return api_output(0,$res,'支付成功');
    }

    /**
     * 车库列表
     * @author lijie
     * @date_time 2021/07/12
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getParkingGarage()
    {
        $village_id = $this->request->post('village_id', 0);
        if (!$village_id)
            return api_output_error(1001, '必传参数缺失');
        $where[] = ['village_id','=',$village_id];
        $where[] = ['status','=',1];
        $house_village_parking_garage = new HouseVillageParkingService();
        $lists = $house_village_parking_garage->getParkingGarageLists($where, 'garage_id,garage_num,garage_position,garage_remark');
        return api_output(0, $lists, '获取成功');
    }

    /**
     * 车位列表
     * @author lijie
     * @date_time 2021/07/12
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getParkingPosition()
    {
        $garage_id = $this->request->post('garage_id', 0);
        $village_id = $this->request->post('village_id',0);
        if (!$garage_id || !$village_id)
            return api_output_error(1001, '必传参数缺失');
        $house_village_parking_position = new HouseVillageParkingService();
        $where[] = ['pp.children_type','=',1];
        $where[] = ['pp.garage_id','=',$garage_id];
        $where[] = ['pp.village_id','=',$village_id];
        $field = 'pp.position_id,pp.position_num,pp.position_area,pp.position_note,pp.position_status,pp.garage_id';
        $data = $house_village_parking_position->getParkingPositionLists($where, $field,0);
        return api_output(0, $data, '获取成功');
    }

    /**
     * 收银台付款方式
     * @author lijie
     * @date_time 2021/09/25
     * @return \json
     */
    public function getPayType()
    {
        $data = [
            ['id'=>1,'name'=>'扫码支付'],
            ['id'=>2,'name'=>'线下支付'],
        ];
        return api_output(0,$data);
    }
}