<?php


namespace app\community\model\service;

use app\common\model\db\Admin;
use app\common\model\service\config\ConfigCustomizationService;
use app\common\model\service\export\ExportService as BaseExportService;
use app\common\model\service\UserService;
use app\common\model\service\weixin\TemplateNewsService;
use app\community\model\db\HouseAdmin;
use app\community\model\db\HouseFaceImg;
use app\community\model\db\HouseNewAutoOrderLog;
use app\community\model\db\HouseNewChargePrepaid;
use app\community\model\db\HouseNewChargePrepaidDiscount;
use app\community\model\db\HouseNewDepositLog;
use app\community\model\db\HousePropertyDigit;
use app\community\model\db\HouseVillageMeterReading;
use app\community\model\db\HouseVillageParkConfig;
use app\community\model\db\ProcessSubPlan;
use app\community\model\db\HouseVillageFloor;
use app\community\model\db\HouseVillageLayer;
use app\community\model\db\HouseVillageSingle;
use app\community\model\db\HouseVillageUserAttribute;
use app\community\model\db\PluginMaterialDiyFile;
use app\community\model\db\PluginMaterialDiyRemark;
use app\community\model\db\PluginMaterialDiyValue;
use app\community\model\service\HousePropertyDigitService;
use app\community\model\db\HouseVillageInfo;
use app\community\model\db\HouseVillagePayOrder;
use app\community\model\db\HouseVillagePrintCustomConfigure;
use app\community\model\db\HouseVillagePrintTemplateNumber;
use app\community\model\db\PlatOrder;
use app\community\model\service\HouseVillageParkingService;
use app\community\model\service\HouseVillageUserVacancyService;
use app\community\model\service\third\ImportExcelService;

use app\consts\newChargeConst;
use app\pay\model\db\PayOrderInfo;
use app\pay\model\service\PayService;
use app\community\model\db\HouseNewCharge;
use app\community\model\db\HouseNewChargeNumber;
use app\community\model\db\HouseNewChargeProject;
use app\community\model\db\HouseNewChargeRule;
use app\community\model\db\HouseNewChargeTime;
use app\community\model\db\HouseNewOfflinePay;
use app\community\model\db\HouseNewOrderLog;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseNewPayOrderRefund;
use app\community\model\db\HouseNewPayOrderSummary;
use app\community\model\db\HouseNewChargeStandardBind;
use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillageDetailRecord;
use app\community\model\db\HouseVillageParkingCar;
use app\community\model\db\HouseVillageParkingPosition;
use app\community\model\db\HouseVillagePrintCustom;
use app\community\model\db\HouseVillagePrintTemplate;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\db\HouseVillageBindCar;
use app\community\model\db\HouseNewSelectProjectLog;
use app\community\model\db\HouseNewSelectProjectRecord;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use app\community\model\db\User;
use app\community\model\db\HouseVillageBindPosition;
use app\community\model\service\HouseVillageCheckauthSetService;
use app\community\model\service\HouseVillageCheckauthApplyService;
use app\community\model\service\HouseVillageCheckauthDetailService;

use think\Exception;
use function Qcloud\Cos\encodeKey;

class HouseNewCashierService
{
    public $pay_type = [1 => '扫码支付', 2 => '线下支付', 3 => '付款码支付', 4 => '线上支付',22=>'线下支付'];
    public $diy_type = [1 => '折扣', 2 => '赠送周期', 3 => '自定义文本', 4 => '无优惠'];
    public $pay_type_arr = ['wechat' => '微信', 'aiHorsePay' => '通联支付','alipay' => '支付宝', 'unionpay' => '银联','hqpay_wx'=>'环球汇通微信支付','hqpay_al'=>'环球汇通支付宝支付','farmersbankpay'=>'仪征农商行支付'];
    public $pay_type_arr1 = [0=>'',1 => 'wechat', 2 => 'alipay', 3 => 'unionpay',4=>'hqpay_'];
    // 填写模板对应状态
    public $diy_tatus_txt = [
        0 => '待审核',
        1 => '已通过',
        3 => '已拒绝',
        4 => '已删除',
    ];
    public $now_all_exts = array(
        'jpg', 'jpeg', 'png', 'gif','ico',
        'xls', 'xlsx', 'txt', 'jnt', 'doc', 'docx', 'rtf', 'pdf'
    );
    // 图片文件的后缀
    public $image_exts = array(
        'jpg', 'jpeg', 'png', 'gif'
    );
    // 图片文件的所有类型
    public $image_type = array(
        'image/png', 'image/x-png', 'image/jpg', 'image/jpeg',
        'image/pjpeg', 'image/gif', 'image/x-icon'
    );
// 对应区块信息-可以添加不可以删除
    public $template_type_arr = array(
        'title_txt' => '标题文本',
        'txt' => '单行文本',
        'mul_txt' => '多行文本',
        'floor_choose' => '单元选择框',
        'owner_choose' => '业主姓名选择框',
        'owner_phone' => '业主联系方式框',
        'owner_identity' => '业主身份选择',
        'date_choose' => '时间选择框',
        'time_choose' => '办公时间选择框',
    );
    
    public function getPayTypeMsg($type)
    {
        return $this->pay_type_arr[$type]??'';
    }


    /**
     * 获取科目信息
     * @author lijie
     * @date_time 2021/09/07
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getNumberInfo($where=[],$field=true)
    {
        $db_house_new_charge_number = new HouseNewChargeNumber();
        $data = $db_house_new_charge_number->get_one($where,$field);
        return $data;
    }

    /**
     * 获取科目信息
     * @author zhubaodi
     * @date_time 2022/08/03
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getNumberArr($where=[],$field=true)
    {
        $db_house_new_charge_number = new HouseNewChargeNumber();
        $data = $db_house_new_charge_number->getColumn($where,$field);
        return $data;
    }
    /**
     * 收费项目信息
     * @author lijie
     * @date_time 2021/09/07
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getProjectInfo($where=[],$field=true)
    {
        $db_house_new_charge_project = new HouseNewChargeProject();
        $data = $db_house_new_charge_project->getOne($where,$field);
        return $data;
    }
    /**
     * 收费项目信息
     * @author zhubaodi
     * @date_time 2022/08/03
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getProjectArr($where=[],$field=true)
    {
        $db_house_new_charge_project = new HouseNewChargeProject();
        $data = $db_house_new_charge_project->getColumn($where,$field);
        return $data;
    }
    /**
     * 根据分组获取未交费列表
     * @param array $where
     * @param array $whereOr
     * @param string $group
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param int $model_type 1支持同一个收费项目顺序不完全支付数据格式
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/15
     */
    public function getSumByGroup($where = [], $group = '', $field = true,$page=1,$limit=10,$whereOr=[],$type='',$model_type=0)
    {
        $check_level_info = array();
        if (isset($where['check_level_info'])) {
            $check_level_info = $where['check_level_info'];
            unset($where['check_level_info']);
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getSumByGroup($where, $group, $field,$page,$limit,$whereOr);
        $total_money = 0;
        if($data){
            $data = $data->toArray();
        }
        if ($data) {
            $houseNewChargeRule=new HouseNewChargeRule();
            $ruleNameArr=array();
            $property_id = $data[0]['property_id'];
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
            $childrenfield='o.order_id,o.pigcms_id,o.village_id,o.property_id,o.room_id,o.position_id,o.order_type,o.total_money,o.modify_money,o.rule_id,o.project_id,r.rule_digit,r.charge_name as rule_name,r.charge_valid_type,o.service_start_time,o.service_end_time,o.service_month_num,o.service_give_month_num,o.add_time,o.late_payment_money,o.check_status,o.check_apply_id';
       
            $configCustomizationService=new ConfigCustomizationService();
            $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();

            $childrenfield.=',o.unify_flage_id';
            foreach ($data as $k => &$v) {
                $whereTmp=array();
                $whereTmp[] = ['o.project_id','=',$v['project_id']];
                $whereTmp[] = ['o.is_paid','=',2];
                $whereTmp[] = ['o.is_discard','=',1];
                if(!empty($type) && $type == 'room'){
                    $whereTmp[] = ['o.room_id','=',$v['room_id']];
                } elseif(!empty($type) && $type == 'position'){
                    $whereTmp[] = ['o.position_id','=',$v['position_id']];
                }else{
                    if($v['position_id']){
                        $whereTmp[] = ['o.position_id','=',$v['position_id']];
                    } else{
                        $whereTmp[] = ['o.room_id','=',$v['room_id']];
                    }
                }
                $data[$k]['show_action'] = 1;
                if(isset($v['service_start_time'])){
                    $v['service_start_time']=$v['service_start_time']>100 ? date('Y-m-d',$v['service_start_time']):'--';
                    $v['service_end_time']=$v['service_end_time']>100 ? date('Y-m-d',$v['service_end_time']):'--';
                }
                if(isset($v['add_time'])){
                    $v['add_time']=$v['add_time']>100 ? date('Y-m-d H:i:s',$v['add_time']):'--';
                }
                $data[$k]['rule_name']='--';
                $data[$k]['charge_valid_type']=1;
                if(isset($v['rule_id']) && ($v['rule_id']>0)){
                    if(isset($ruleNameArr[$v['rule_id']])){
                        $data[$k]['rule_name']=$ruleNameArr[$v['rule_id']]['rule_name'];
                        $data[$k]['charge_valid_type']=$ruleNameArr[$v['rule_id']]['charge_valid_type'];
                    }else {
                        $whereRule = array('id' => $v['rule_id']);
                        $newChargeRuleData = $houseNewChargeRule->getOne($whereRule, 'id,charge_name,charge_valid_type');
                        if ($newChargeRuleData && !$newChargeRuleData->isEmpty()) {
                            $data[$k]['rule_name'] = $newChargeRuleData['charge_name'];
                            $data[$k]['charge_valid_type'] = $newChargeRuleData['charge_valid_type'];
                            $ruleNameArr[$v['rule_id']]=array();
                            $ruleNameArr[$v['rule_id']]['rule_name'] = $newChargeRuleData['charge_name'];
                            $ruleNameArr[$v['rule_id']]['charge_valid_type'] = $newChargeRuleData['charge_valid_type'];
                        }
                    }
                }
                $parentkey='order_id_'.$v['order_id'];
                if($model_type==1){
                    $data[$k]['key']=$parentkey;
                }
                $data[$k]['type_txt'] = empty($v['type']) ? '-' : (($v['type'] != 2) ? "一次性费用" : "周期性费用");
                $detailOrder=$db_house_new_pay_order->getList($whereTmp,$childrenfield,0,20,'o.service_end_time ASC,o.order_id ASC');
                $data[$k]['detail_order']=array();
                if ($detailOrder && !$detailOrder->isEmpty()) {
                    $orderTmps = $detailOrder->toArray();
                    $data[$k]['detail_order'] = $orderTmps;
                    $children_count = count($orderTmps);
                    if ($children_count > 1) {
                        //多个订单时 处理
                        $data[$k]['show_action'] = 0;
                        $data[$k]['service_month_num'] = '';
                    }
                    if (empty($digit_info)) {
                        $digit_info['other_digit'] = 2;
                        $digit_info['meter_digit'] = 2;
                        $digit_info['type'] = 1;
                    }
                    if ($model_type == 1) {
                        $data[$k]['show_action'] = 1;
                        if ($children_count>1) {
                            $data[$k]['rule_name'] = '--';
                            $data[$k]['children'] = array();
                        }
                    }
                    //未支付的订单 客户改动小数设置处理
                    $total_x_money=0;
                    $modify_x_money=0;
                    $rule_month_num=[];
                    $min_service_start_time = $orderTmps['0']['service_start_time'];
                    $max_service_end_time = $orderTmps['0']['service_end_time'];
                    foreach ($orderTmps as $ook => $novv) {
                        $rule_digit = $digit_info['other_digit'];
                        if (in_array($novv['order_type'], array('water', 'electric', 'gas'))) {
                            $rule_digit = $digit_info['meter_digit'];

                        }
                        if ($novv['rule_digit'] > -1 && $novv['rule_digit'] < 5) {
                            $rule_digit = $novv['rule_digit'];
                        }
                        
                        $total_money_tmp = formatNumber($novv['total_money'], 3, 1);
                        $modify_money_tmp = formatNumber($novv['modify_money'], 3, 1);
                        $total_money_tmp = formatNumber($total_money_tmp, $rule_digit, $digit_info['type']);
                        $modify_money_tmp = formatNumber($modify_money_tmp, $rule_digit, $digit_info['type']);
                        
                        $novv['total_money'] = $total_money_tmp;
                        $novv['modify_money'] = $modify_money_tmp;
                        
                        $whereArr=array('order_id'=>$novv['order_id']);
                        $saveMoneyData=array('total_money'=>$total_money_tmp,'modify_money'=>$modify_money_tmp);
                        $db_house_new_pay_order->saveOne($whereArr,$saveMoneyData);
                        $total_x_money +=$total_money_tmp;
                        $modify_x_money +=$modify_money_tmp;
                        if ($model_type == 1 && $children_count > 1) {
                            if ($min_service_start_time > $novv['service_start_time']) {
                                $min_service_start_time = $novv['service_start_time'];
                            }
                            if ($max_service_end_time < $novv['service_end_time']) {
                                $max_service_end_time = $novv['service_end_time'];
                            }
                            $childrenArr = $novv;
                            $childrenArr['key'] = 'children_' . $novv['order_id'];
                            $childrenArr['parent_key'] = $parentkey;
                            $childrenArr['key_sort'] = $ook;
                            $childrenArr['is_only_pay_this'] = 1;
                            $childrenArr['charge_name'] = '';
                            $childrenArr['order_name'] = '';
                            $childrenArr['show_action'] = 1;
                            $childrenArr['type'] = $data[$k]['type'];
                            $childrenArr['type_txt'] = $data[$k]['type_txt'];
                            $childrenArr['service_start_time'] = $childrenArr['service_start_time'] > 100 ? date('Y-m-d', $childrenArr['service_start_time']) : '--';
                            $childrenArr['service_end_time'] = $childrenArr['service_end_time'] > 100 ? date('Y-m-d', $childrenArr['service_end_time']) : '--';
                            $childrenArr['add_time'] = $childrenArr['add_time'] > 100 ? date('Y-m-d H:i:s', $childrenArr['add_time']) : '--';
                            $childrenArr['order_apply_info'] = '';
                            if (isset($childrenArr['check_status']) && ($childrenArr['check_status'] == 1)) {
                                $childrenArr['pay_money'] = 0;
                                $childrenArr['modify_money'] = 0;
                                $childrenArr['late_payment_money'] = 0;
                            } else {
                                $childrenArr['pay_money'] = $childrenArr['modify_money'] + $childrenArr['late_payment_money'];
                                $childrenArr['pay_money'] = formatNumber($childrenArr['pay_money'], $rule_digit, $digit_info['type']);
                            }
                            $childrenArr['modify_money'] = formatNumber($childrenArr['modify_money'], 2, 1);
                            $childrenArr['pay_money'] = formatNumber($childrenArr['pay_money'], 2, 1);
                            if (isset($ruleNameArr[$novv['rule_id']])) {
                                $childrenArr['rule_name'] = $ruleNameArr[$novv['rule_id']]['rule_name'];
                            } else {
                                $whereRule = array('id' => $novv['rule_id']);
                                $newChargeRuleData = $houseNewChargeRule->getOne($whereRule, 'id,charge_name');
                                if ($newChargeRuleData && !$newChargeRuleData->isEmpty()) {
                                    $childrenArr['rule_name'] = $newChargeRuleData['charge_name'];
                                    $ruleNameArr[$v['rule_id']]=array();
                                    $ruleNameArr[$novv['rule_id']]['rule_name'] = $newChargeRuleData['charge_name'];
                                }
                            }
                            if (isset($childrenArr['check_status']) && $childrenArr['check_status'] == 1) {
                                $childrenArr['check_status_str'] = '审核中';
                            }
                            //处理审核状态
                            if (isset($childrenArr['check_status']) && $childrenArr['check_status'] == 1 && !empty($check_level_info)) {
                                $childrenArr['my_check_status'] = 1;
                                $houseVillageCheckauthDetailService = new HouseVillageCheckauthDetailService();
                                if (!empty($check_level_info['wid'])) {
                                    $checkauthApplyWhere = array('order_id' => $childrenArr['order_id'], 'village_id' => $childrenArr['village_id'], 'wid' => $check_level_info['wid'], 'apply_id' => $childrenArr['check_apply_id']);
                                    $checkDetail = $houseVillageCheckauthDetailService->getOneData($checkauthApplyWhere);
                                    if (!empty($checkDetail) && $checkDetail['status'] == 0) {
                                        $childrenArr['my_check_status'] = 2;
                                        $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
                                        $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $checkDetail['apply_id'], 'order_id' => $childrenArr['order_id']]);
                                        if ($order_apply && !empty($order_apply['extra_data'])) {
                                            $order_apply_info = json_decode($order_apply['extra_data'], 1);
                                            if ($order_apply_info) {
                                                $order_apply_info['opt_time_str'] = $order_apply_info['opt_time'] > 0 ? date('Y-m-d H:i:s', $order_apply_info['opt_time']) : '';
                                            }
                                            $childrenArr['order_apply_info'] = $order_apply_info;
                                        }
                                    } elseif (!empty($checkDetail) && $checkDetail['status'] == 1) {
                                        $childrenArr['my_check_status'] = 3;
                                    }
                                }

                            } elseif (isset($childrenArr['check_status']) && $childrenArr['check_status'] == 1) {
                                $childrenArr['my_check_status'] = 1;
                            }
                            $data[$k]['children'][] = $childrenArr;
                        }
                        if ($novv['charge_valid_type']!=1){
                            $month_num=$novv['service_month_num'];
                            if(isset($novv['unify_flage_id']) && !empty($novv['unify_flage_id']) && $novv['charge_valid_type']==3){
                                $month_num=$month_num/12;
                            }
                            if (isset($rule_month_num[$novv['rule_id']])){
                                $rule_month_num[$novv['rule_id']]['num']=$rule_month_num[$novv['rule_id']]['num']+$month_num;
                                $rule_month_num[$novv['rule_id']]['money']=$rule_month_num[$novv['rule_id']]['money']+$novv['modify_money'];
                            }else{
                                $rule_month_num[$novv['rule_id']]['num']=$month_num;
                                $rule_month_num[$novv['rule_id']]['money']=$novv['modify_money'];
                            }
                        }
                    }
                    if ($model_type == 1) {
                        $v['service_start_time'] = $min_service_start_time > 100 ? date('Y-m-d', $min_service_start_time) : '--';
                        $v['service_end_time'] = $max_service_end_time > 100 ? date('Y-m-d', $max_service_end_time) : '--';
                    }
                    if ($model_type == 1) {
                        $v['service_start_time'] = $min_service_start_time > 100 ? date('Y-m-d', $min_service_start_time) : '--';
                        $v['service_end_time'] = $max_service_end_time > 100 ? date('Y-m-d', $max_service_end_time) : '--';
                    }
                    if ($group == 'p.project_id') {
                        $v['total_money'] = formatNumber($total_x_money, 2, 1);
                        $v['modify_money'] = formatNumber($modify_x_money, 2, 1);
                    }
                    
                    $v['discount_money']=0;
                    if(!empty($rule_month_num) && $is_grapefruit_prepaid==1){
                        $discount_money=0;
                        $pay_money=0;
                        foreach ($rule_month_num as $key=>$rv){
                            if (!empty($rv['num'])){
                                $rv['num']=round($rv['num'],2);
                                $rv['num']=floor($rv['num']);
                                $rv['num']=$rv['num']*1;
                                $money_arr=$this->getChargePrepaidDiscount($key,$rv);
                                $pay_money=$pay_money+$money_arr['pay_money'];
                                $discount_money=$discount_money+$money_arr['discount_money'];
                                $v['pay_money']=$pay_money;
                            }
                            $v['discount_money']=round($discount_money,2);
                            
                        }
                    }
                }
                $v['total_money'] = formatNumber($v['total_money'],2,1);
                $v['modify_money'] = formatNumber($v['modify_money'],2,1);
                $v['late_payment_money'] = formatNumber($v['late_payment_money'],2,1);
                /*
                $where = [];
                $where[] = ['o.is_paid', '=', 2];
                $where[] = ['o.is_discard', '=', 1];
                $where[] = ['o.project_id', '=', $v['project_id']];
                if($type){
                    if($type == 'room'){
                        $where[] = ['o.room_id', '=', $v['room_id']];
                    }else{
                        $where[] = ['o.position_id', '=', $v['position_id']];
                    }
                }else{
                    if ($v['position_id'])
                        $where[] = ['o.position_id', '=', $v['position_id']];
                    else
                        $where[] = ['o.room_id', '=', $v['room_id']];
                }
               
                $order_list = $db_house_new_pay_order->getList($where, 'o.order_id,o.add_time,r.late_fee_reckon_day,r.late_fee_rate,r.late_fee_top_day,o.modify_money,o.late_payment_day,o.late_payment_money')->toArray();
                if (count($order_list) > 1){
                    $data[$k]['show_action'] = 0;
                } else{
                    $data[$k]['show_action'] = 1;
                }
                */
                if(isset($v['check_status']) && ($v['check_status']==1)){
                    $data[$k]['pay_money']=0;
                    $v['modify_money']=0;
                    $v['late_payment_money']=0;
                }else{
                    $data[$k]['pay_money'] = $v['modify_money'] + $v['late_payment_money'];
                }

                $data[$k]['pay_money'] = formatNumber($data[$k]['pay_money'],2,1);
                $total_money += ($data[$k]['pay_money']);
                
                $v['my_check_status']=0;  //我看到审核状态 1审核中 2审核 自己已审核
                $v['order_apply_info']='';
                $v['check_status_str']='';
                if(isset($v['check_status']) && $v['check_status']==1){
                    $v['check_status_str']='审核中';
                }
                //处理审核状态
                if(isset($v['check_status']) && $v['check_status']==1 && !empty($check_level_info)){
                    $v['my_check_status']=1;
                    $houseVillageCheckauthDetailService=new HouseVillageCheckauthDetailService();
                    if(!empty($check_level_info['wid'])){
                        $checkauthApplyWhere=array('order_id'=>$v['order_id'],'village_id'=>$v['village_id'],'wid'=>$check_level_info['wid'],'apply_id'=>$v['check_apply_id']);
                        $checkDetail=$houseVillageCheckauthDetailService->getOneData($checkauthApplyWhere);
                        if(!empty($checkDetail) && $checkDetail['status']==0){
                            $v['my_check_status']=2;
                            $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
                            $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $checkDetail['apply_id'],'order_id'=>$v['order_id']]);
                            if($order_apply && !empty($order_apply['extra_data'])){
                                $order_apply_info=json_decode($order_apply['extra_data'],1);
                                if($order_apply_info){
                                    $order_apply_info['opt_time_str']= $order_apply_info['opt_time']>0?date('Y-m-d H:i:s' ,$order_apply_info['opt_time']):'';
                                }
                                $v['order_apply_info']=$order_apply_info;
                            }
                        }elseif(!empty($checkDetail) && $checkDetail['status']==1){
                            $v['my_check_status']=3;
                        }
                    }

                }elseif(isset($v['check_status']) && $v['check_status']==1){
                    $v['my_check_status']=1;
                }
            }
        }
        $total_money = formatNumber($total_money,2,1);
        /*  当水小数 电然 和 其他  设置不一样时 有问题  改成统一取两位小数处理
        if(empty($digit_info)){
            $total_money = formatNumber($total_money,2,1);
        }else{
            $total_money = formatNumber($total_money,$digit_info['other_digit'],$digit_info['type']);
        }
        */
        $res['total_money'] = $total_money;
        $res['order_list'] = $data;
        return $res;
    }

    /**
     * 根据分组获取未交费数量
     * @param array $where
     * @param string $group
     * @return mixed
     * @author lijie
     * @date_time 2021/06/24
     */
    public function getCountByGroup($where = [], $group = '')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $count = $db_house_new_pay_order->getCountByGroup($where, $group);
        return $count;
    }

    /**
     * 修改订单
     * @param array $where
     * @param array $data
     * @return bool
     * @author lijie
     * @date_time 2021/06/15
     */
    public function saveOrder($where = [], $data = [])
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $res = $db_house_new_pay_order->saveOne($where, $data);
        return $res;
    }

    /**
     * 添加订单
     * @param array $data
     * @return int|string
     * @author lijie
     * @date_time 2021/06/15
     */
    public function addOrder($data = [])
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $id = $db_house_new_pay_order->addOne($data);
        return $id;
    }

    /**
     * 物业参数配置
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getDigit($where=[],$field=true)
    {
        $db_house_property_digit = new HousePropertyDigit();
        return $db_house_property_digit->getOne($where,$field);
    }

    /**
     * 预缴账单30分钟内未支付作废
     * @author lijie
     * @date_time 2021/09/16
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function discardPrepaidOrder()
    {
        $where=array();
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.is_prepare','=',1];
        $houseVillageCheckauthApplyService=new HouseVillageCheckauthApplyService();
        $field = 'o.order_id,o.property_id,o.village_id,o.add_time,o.check_apply_id,o.check_status';
        $db_house_new_pay_order = new HouseNewPayOrder();
        $order_list = $db_house_new_pay_order->getList($where,$field);
        if ($order_list && !$order_list->isEmpty()) {
            $order_list = $order_list->toArray();
            $nowtime = time();
            $discard_property_arr = array();
            fdump_api(['order_list' => $order_list], '000discardPrepaidOrder', 1);
            foreach ($order_list as $v) {
                $is_need_discard = 0;
                if (isset($discard_property_arr[$v['property_id']])) {
                    $is_need_discard = $discard_property_arr[$v['property_id']];
                } else {
                    $digit_info = $this->getDigit(['property_id' => $v['property_id']]);
                    if ($digit_info && !$digit_info->isEmpty()) {
                        $digit_info = $digit_info->toArray();
                    }
                    $discard_property_arr[$v['property_id']] = 0;
                    if (empty($digit_info) || $digit_info['deleteBillMin'] == 30||$digit_info['deleteBillMin'] == '30') {
                        $discard_property_arr[$v['property_id']] = 1;
                        $is_need_discard =1;
                    }
                }
                if ($is_need_discard == 1 && ($nowtime - $v['add_time'] > 1798)) {
                    $db_house_new_pay_order->saveOne(['order_id' => $v['order_id']], ['is_discard' => 2, 'discard_reason' => '预缴账单30分钟内未支付', 'update_time' => time()]);
                    if($v['check_apply_id']>0 && $v['check_status']==1){
                        $verifyData=array('xtype'=>'order_discard','bak'=>'预缴账单30分钟内未支付自动审核','status'=>1);
                        $houseVillageCheckauthApplyService->verifyDiscardCheckauthApply($v,$verifyData);
                    }
                }
            }
        }
        return true;
    }

    /**
     * 每天凌晨0点更新滞纳金和滞纳天数
     * @author lijie
     * @date_time 2021/09/14
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function automaticLatePayment()
    {
        $where = [];
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.is_discard','=',1];
        $where[] = ['r.late_fee_rate','>',0];
        $field = 'o.order_id,o.add_time,r.late_fee_reckon_day,r.late_fee_top_day,r.late_fee_rate,o.modify_money';
        $db_house_new_pay_order = new HouseNewPayOrder();
        $order_list = $db_house_new_pay_order->getList($where,$field);
        if($order_list && !$order_list->isEmpty()){
            $order_list=$order_list->toArray();
            foreach ($order_list as $k=>$v){
                if (isset($v['late_fee_reckon_day']) && isset($v['add_time']) && isset($v['late_fee_top_day']) && isset($v['late_fee_rate']) && isset($v['modify_money'])) {
                    $differ_day = ceil((time() - $v['add_time']) / 86400) - $v['late_fee_reckon_day'];
                    fdump_api([$v['order_id'],$differ_day],'automaticLatePayment',true);
                    if ($differ_day > $v['late_fee_top_day'] && $v['late_fee_top_day'] > 0){
                        $differ_day = $v['late_fee_top_day'];
                    }
                    if ($differ_day < 0) {
                        $differ_day = 0;
                    }
                    $late_payment_money = get_format_number($differ_day * $v['late_fee_rate']/100 * $v['modify_money']);
                    $late_payment_day = $differ_day;
                    $db_house_new_pay_order->saveOne(['order_id'=>$v['order_id']],['late_payment_money'=>$late_payment_money,'late_payment_day'=>$late_payment_day,'update_time'=>time()]);
                }
            }
        }
        return true;
    }

    /**
     * 订单详情
     * @param array $where
     * @param bool $field
     * @param int $isKeyVal
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/07/06
     */
    public function getOrder($where = [], $field = true, $isKeyVal = 0)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getOne($where, $field);
        if ($data && !is_array($data)) {
            $data = $data->toArray();
        }
        if(isset($data['property_id'])){
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$data['property_id']]);
        }else{
            $digit_info = [];
        }
   
        $data['modify_money'] = formatNumber($data['modify_money'],2,1);
        $data['modify_money']=$data['modify_money']*1;
        $data['total_money'] = formatNumber($data['total_money'],2,1);
        $data['total_money']=$data['total_money']*1;
        $data['late_payment_money'] = formatNumber($data['late_payment_money'],2,1);
        $data['late_payment_money']=$data['late_payment_money']*1;

        if (isset($data['add_time'])) {
            $data['add_time_txt'] = date('Y-m-d H:i:s', $data['add_time']);
        }
        if (isset($data['charge_valid_time'])) {
            $data['charge_valid_time_txt'] = date('Y-m-d H:i:s', $data['charge_valid_time']);
        }
        if (isset($data['service_start_time'])) {
            if ($data['service_start_time'] == 1)
                $data['service_start_time_txt'] = '无';
            else
                $data['service_start_time_txt'] = date('Y-m-d H:i:s', $data['service_start_time']);
        }
        if (isset($data['service_end_time'])) {
            if ($data['service_end_time'] == 1)
                $data['service_end_time_txt'] = '无';
            else
                $data['service_end_time_txt'] = date('Y-m-d H:i:s', $data['service_end_time']);
        }
        if ($isKeyVal) {
            $return_data[0]['title'] = '账单基本信息';
            $return_data[0]['list'][] = array(
                'title' => '收费标准名称',
                'val' => $data['charge_name']
            );
            $return_data[0]['list'][] = array(
                'title' => '项目名称',
                'val' => $data['project_name']
            );
            $return_data[0]['list'][] = array(
                'title' => '账单开始时间',
                'val' => $data['service_start_time_txt']
            );
            $return_data[0]['list'][] = array(
                'title' => '账单结束时间',
                'val' => $data['service_end_time_txt']
            );
            if (isset($data['parking_num']) && intval($data['parking_num'])) {
                $return_data[0]['list'][] = array(
                    'title' => '车位数量',
                    'val' => $data['parking_num']
                );
            }
            $return_data[0]['list'][] = array(
                'title' => '应收费用',
                'val' => $data['total_money']
            );
            $return_data[0]['list'][] = array(
                'title' => '实收费用',
                'val' => $data['modify_money']
            );
            if(isset($data['now_ammeter']) && isset($data['last_ammeter']) && $data['now_ammeter']-$data['last_ammeter']>0){
                $return_data[0]['list'][] = array(
                    'title' => '用量',
                    'val' => formatNumber(($data['now_ammeter']-$data['last_ammeter']))
                );
            }
            //针对水电燃
            if(in_array($data['order_type'],['water','electric','gas'])){
                $return_data[0]['list'][] = array(
                    'title' => '起度',
                    'val' => formatNumber($data['last_ammeter'],2,1)
                );
                $return_data[0]['list'][] = array(
                    'title' => '止度',
                    'val' =>formatNumber($data['now_ammeter'],2,1)
                );
                $return_data[0]['list'][] = array(
                    'title' => '抄表时间',
                    'val' => date('Y-m-d H:i:s',$data['add_time'])
                );
                if(isset($data['meter_reading_id']) && $data['meter_reading_id']>0){
                    $db_house_village_meter_reading=new HouseVillageMeterReading();
                    $meter_reading=$db_house_village_meter_reading->getOne(['id'=>$data['meter_reading_id']],'note');
                    $note='';
                    if($meter_reading && !$meter_reading->isEmpty()){
                        $note=$meter_reading['note'];
                    }
                    $return_data[0]['list'][] = array(
                        'title' => '抄表备注',
                        'val' => $note ? trim($note) :''
                    );
                }
            }
            $return_data[0]['list'][] = array(
                'title' => '收费标准生效时间',
                'val' => $data['charge_valid_time_txt']
            );
            $return_data[0]['list'][] = array(
                'title' => '账单生成时间',
                'val' => $data['add_time_txt']
            );
            if(isset($data['type']) && $data['type'] == 2){
                $data['service_month_num'] = $data['service_month_num']?$data['service_month_num']:1;
                if (!empty($data['service_month_num'])){
                    $service_month_num=$data['service_month_num'];
                    if ($data['bill_create_set']==1){
                        $data['service_month_num']=$data['service_month_num'].'天';
                    }elseif ($data['bill_create_set']==2){
                        $data['service_month_num']=$data['service_month_num'].'个月';
                    }elseif ($data['bill_create_set']==3){
                        $data['service_month_num']=$data['service_month_num'].'年';
                    }else{
                        $data['service_month_num']=$data['service_month_num'].'';
                    }
                    if(isset($data['unify_flage_id']) && !empty($data['unify_flage_id'])){
                        $data['service_month_num']=$service_month_num.'个月';
                    }
                }
                $return_data[0]['list'][] = array(
                    'title' => '收费周期',
                    'val' => $data['service_month_num']
                );
            }
            $return_data[1]['title'] = '滞纳金信息';
            $return_data[1]['list'][] = array(
                'title' => '滞纳天数',
                'val' => $data['late_payment_day']
            );
            $return_data[1]['list'][] = array(
                'title' => '滞纳金收取比例（每天）',
                'val' => $data['late_fee_rate'].'%'
            );
            $return_data[1]['list'][] = array(
                'title' => '滞纳金费用',
                'val' => $data['late_payment_money']
            );
            return $return_data;
        }
        return $data;
    }

    public function getOneOrder($where = [], $field = true,$order='order_id DESC')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->get_one($where, $field,$order);
        if($data){
            $data['service_end_time'] = date('Y-m-d H:i:s',$data['service_end_time']);
        }else{
            $data['service_end_time'] = 1;
        }
        return $data;
    }

    public function getInfo($where = [], $field = true,$order='order_id DESC')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->get_one($where, $field,$order);
        return $data;
    }

    /**
     * 添加总订单
     * @param array $data
     * @return int|string
     */
    public function addOrderSummary($data = [])
    {
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $id = $db_house_new_pay_order_summary->addOne($data);
        return $id;
    }

    /**
     * 更新总订单
     * @param array $where
     * @param array $data
     * @return bool
     * @author lijie
     * @date_time 2021/06/24
     */
    public function saveOrderSummary($where = [], $data = [])
    {
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $res = $db_house_new_pay_order_summary->saveOne($where, $data);
        return $res;
    }

    /**
     * 获取总订单详情
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * date_time 2021/06/24
     */
    public function getOrderSummary($where = [], $field = true)
    {
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $data = $db_house_new_pay_order_summary->getOne($where, $field);
        return $data;
    }

    /**
     * 获取订单列表
     * @author lijie
     * @date_time 2021/06/15
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param int $village_id
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderList($where = [], $field = true, $page = 0, $limit = 10, $order = 'order_id DESC',$village_id=0)
    {
        $check_level_info = array();
        if (isset($where['check_level_info'])) {
            $check_level_info = $where['check_level_info'];
            unset($where['check_level_info']);
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getList($where, $field, $page, $limit, $order);

        if($data){
            $data = $data->toArray();
        }
        if ($data) {

            $digit_info=array();
            $serviceHouseNewChargeRule = new HouseNewChargeRuleService();
            foreach ($data as $k => &$v) {
                if(empty($digit_info)){
                    $v['late_payment_money'] = formatNumber($v['late_payment_money'],2,1);
                    $v['modify_money'] = formatNumber($v['modify_money'],2,1);
                    $v['total_money'] = formatNumber($v['total_money'],2,1);
                }else{
                    $v['charge_type']=isset($v['charge_type'])?$v['charge_type']:(isset($v['order_type'])?$v['order_type']:'');
                    if($v['charge_type'] != 'water' && $v['charge_type'] != 'electric' && $v['charge_type'] != 'gas'){
                        $v['late_payment_money'] = formatNumber($v['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
                        $v['modify_money'] = formatNumber($v['modify_money'],$digit_info['other_digit'],$digit_info['type']);
                        $v['total_money'] = formatNumber($v['total_money'],$digit_info['other_digit'],$digit_info['type']);
                    }else{
                        $v['late_payment_money'] = formatNumber($v['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $v['modify_money'] = formatNumber($v['modify_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $v['total_money'] = formatNumber($v['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                    }
                }
                $late_payment_money = $v['late_payment_money'];
                $data[$k]['pay_money'] = $v['modify_money'] + $late_payment_money;
                if($v['charge_type'] != 'park'){
                    if (isset($v['service_start_time'])) {
                        if ($v['service_start_time'] && $v['service_start_time'] > 1)
                            $data[$k]['service_start_time_txt'] = date('Y-m-d', $v['service_start_time']);
                        else
                            $data[$k]['service_start_time_txt'] = '--';
                    }
                    if (isset($v['service_end_time'])) {
                        if ($v['service_end_time'] && $v['service_end_time'] > 1)
                            $data[$k]['service_end_time_txt'] = date('Y-m-d', $v['service_end_time']);
                        else
                            $data[$k]['service_end_time_txt'] = '--';
                    }
                }else{
                    $data[$k]['service_end_time_txt'] = '--';
                    $data[$k]['service_start_time_txt'] = '--';
                }
                if (isset($v['add_time'])) {
                    $data[$k]['add_time_txt'] = date('Y-m-d H:i:s', $v['add_time']);
                }
                /*
                if($v['is_auto']){
                    $data[$k]['add_time_txt'] = $data[$k]['service_start_time_txt'].'至'.$data[$k]['service_end_time_txt'];
                }
                */
                if (isset($v['last_ammeter'])) {
                    if (!$v['last_ammeter'] && $v['charge_type'] != 'water' && $v['charge_type'] != 'electric' && $v['charge_type'] != 'gas')
                        $data[$k]['last_ammeter'] = '--';
                }
                if (isset($v['now_ammeter'])) {
                    if (!$v['now_ammeter'] && $v['charge_type'] != 'water' && $v['charge_type'] != 'electric' && $v['charge_type'] != 'gas')
                        $data[$k]['now_ammeter'] = '--';
                }

                if(in_array($v['charge_type'],['water','gas','electric'])){
                    $data[$k]['not_house_rate'] = '-';
                    $data[$k]['fees_type'] = '-';
                    $data[$k]['bill_create_set'] = '-';
                    $data[$k]['bill_arrears_set'] = '-';
                    $data[$k]['bill_type'] = '-';
                }else{
                    if(isset($v['not_house_rate'])){
                        $data[$k]['not_house_rate'] = empty($v['not_house_rate']) ? '-' : ($v['not_house_rate'].'%');
                    }
                    if(isset($v['fees_type'])){
                        $data[$k]['fees_type'] = $serviceHouseNewChargeRule->getFeesTypeTxt($v['fees_type']);
                    }
                    if(isset($v['bill_create_set'])){
                        $data[$k]['bill_create_set'] = empty($v['bill_create_set']) ? '-' : (($v['bill_create_set'] == 1) ? '按日生成' : (($v['bill_create_set'] == 2) ? '按月生成' : '按年生成'));
                    }
                    if(isset($v['bill_arrears_set'])){
                        $data[$k]['bill_arrears_set'] = empty($v['bill_arrears_set']) ? '-' : (($v['bill_arrears_set'] == 1) ? '预生成' : '后生成');
                    }
                    if(isset($v['bill_type'])){
                        $data[$k]['bill_type'] = empty($v['bill_type']) ? '-' : (($v['bill_type'] == 1) ? '手动' : '自动');
                    }
                }

                //防止其他调用接口没有传此字段
                if($field === true || (strpos($field,'charge_valid_type') && strpos($field,'charge_valid_time'))){
                    if($v['charge_valid_type'] == 3) {
                        $data[$k]['charge_valid_time_txt'] = date('Y', $v['charge_valid_time']);
                    }elseif ($v['charge_valid_type'] == 2) {
                        $data[$k]['charge_valid_time_txt'] = date('Y-m', $v['charge_valid_time']);
                    }elseif ($v['charge_valid_type'] == 1) {
                        $data[$k]['charge_valid_time_txt'] = date('Y-m-d', $v['charge_valid_time']);
                    }
                }

                $v['my_check_status']=0;  //我看到审核状态 1审核中 2审核 自己已审核
                $v['order_apply_info']='';
                $v['check_status_str']='';
                if(isset($v['check_status']) && $v['check_status']==1){
                    $v['check_status_str']='审核中';
                }
                //处理审核状态
                if(isset($v['check_status']) && $v['check_status']==1 && !empty($check_level_info)){
                    $v['my_check_status']=1;
                    $houseVillageCheckauthDetailService=new HouseVillageCheckauthDetailService();
                    if(!empty($check_level_info['wid'])){
                        $checkauthApplyWhere=array('order_id'=>$v['order_id'],'village_id'=>$v['village_id'],'wid'=>$check_level_info['wid'],'apply_id'=>$v['check_apply_id']);
                        $checkDetail=$houseVillageCheckauthDetailService->getOneData($checkauthApplyWhere);
                        if(!empty($checkDetail) && $checkDetail['status']==0){
                            $v['my_check_status']=2;
                            $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
                            $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $checkDetail['apply_id'],'order_id'=>$v['order_id']]);
                            if($order_apply && !empty($order_apply['extra_data'])){
                                $order_apply_info=json_decode($order_apply['extra_data'],1);
                                if($order_apply_info){
                                    $order_apply_info['opt_time_str']= $order_apply_info['opt_time']>0?date('Y-m-d H:i:s' ,$order_apply_info['opt_time']):'';
                                }
                                $v['order_apply_info']=$order_apply_info;
                            }
                        }elseif(!empty($checkDetail) && $checkDetail['status']==1){
                            $v['my_check_status']=3;
                        }
                    }

                }elseif(isset($v['check_status']) && $v['check_status']==1){
                    $v['my_check_status']=1;
                }

            }
        }
        return $data;
    }
    
    public function getCarParkingById($position_id=0,$village_id=0){
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $park_number='';
        if($position_id<1){
            return $park_number;
        }
        $whereArr=array('pp.position_id' => $position_id);
        if($village_id>0){
            $whereArr['pp.village_id']=$village_id;
        }
        $position_num = $db_house_village_parking_position->getLists($whereArr, 'pp.position_num,pg.garage_num', 0);
        if (!empty($position_num) && !$position_num->isEmpty()) {
            $position_num = $position_num->toArray();
            if (!empty($position_num)) {
                $position_num1 = $position_num[0];
                if (empty($position_num1['garage_num'])) {
                    $position_num1['garage_num'] = '临时车库';
                }
                $park_number = $position_num1['garage_num'] . '-' . $position_num1['position_num'];
            }
        }
        return $park_number;
    }
    /**
    ** 根据条件获取某个字段的累加值
     **/
    public function  getNewPayOrderSum($where,$strWhere='',$field='pay_money'){
        $db_house_new_pay_order = new HouseNewPayOrder();
        $tmpV=0;
        
        if($strWhere){
            $where['string']=$strWhere;
            $orderSum=$db_house_new_pay_order->get_one($where,'sum('.$field.') as sum_v');
            if($orderSum && isset($orderSum['sum_v'])){
                $tmpV=$orderSum['sum_v'];
            }
           // $tmpV=$db_house_new_pay_order->sumMoney($where,$strWhere,$field);
        }else{
            $orderSum=$db_house_new_pay_order->get_one($where,'sum('.$field.') as sum_v');
            if($orderSum && isset($orderSum['sum_v'])){
                $tmpV=$orderSum['sum_v'];
            }
           //  $tmpV=$db_house_new_pay_order->getSum($where,$field);
        }
        $tmpV=$tmpV>0 ? round($tmpV,2):0;
        return $tmpV;
    }
    public function  getNewPayOrder2Sum($where,$field='pay_money'){
        $db_house_new_pay_order = new HouseNewPayOrder();
        $tmpV=$db_house_new_pay_order->getJoinSum($where,$field);
        $tmpV=$tmpV>0 ? round($tmpV,2):0;
        return $tmpV;
    }
    /**
     * 应收明细
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param int $village_id
     * @return mixed
     */
    public function getNewPayOrders($where = [], $field = true, $page = 0, $limit = 10, $order = 'order_id DESC')
    {
        $check_level_info = array();
        if (isset($where['check_level_info'])) {
            $check_level_info = $where['check_level_info'];
            unset($where['check_level_info']);
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getPayOrders($where, $field, $page, $limit, $order);

        if($data){
            $data = $data->toArray();
        }
        if ($data) {
            $db_house_property_digit_service = new HousePropertyDigitService();
            //$digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$data[0]['property_id']]);
            foreach ($data as $k => &$v) {
                $v['charge_type']=isset($v['charge_type'])?$v['charge_type']:(isset($v['order_type'])?$v['order_type']:'');
                $v['total_money'] = formatNumber($v['total_money'],2,1);
                $v['park_number'] ='';
                $v['project_name_str']=$v['project_name'];
                if(isset($v['project_name']) && !empty($v['project_name'])){
                    $v['project_name']=$v['project_name'].'(ID:'.$v['project_id'].')';
                }
                if(isset($v['charge_name']) && !empty($v['charge_name'])){
                    $v['charge_name']=$v['charge_name'].'(ID:'.$v['rule_id'].')';
                }
                if($v['room_id']){
                    $numberArr=array('--','--');
                    $db_house_village_user_vacancy = new HouseVillageUserVacancy();
                    $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                    if (!empty($room)) {
                        $room = $room->toArray();
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $house_village_service=new HouseVillageService();
                            $number =$house_village_service->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$data[0]['property_id']['village_id']);

                           //  $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                            $v['number'] = $number;
                            $numberArr['0']=$number;
                        }else{
                            $v['number'] = '';
                        }
                    }else{
                        $v['number'] = '';
                    }
                    if($v['position_id']>0){
                        $v['park_number']=$this->getCarParkingById($v['position_id']);
                        $numberArr['1']=$v['park_number'];
                    }
                    if(!empty($v['number']) || !empty($v['park_number'])){
                        $v['number']=implode(' / ',$numberArr);
                    }
                }else{
                    $db_house_village_parking_position = new HouseVillageParkingPosition();
                    $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                    if (!empty($position_num)) {
                        $position_num = $position_num->toArray();
                        if (!empty($position_num)) {
                            $position_num1 = $position_num[0];
                            if (empty($position_num1['garage_num'])) {
                                $position_num1['garage_num'] = '临时车库';
                            }
                            $number = $position_num1['garage_num'] . '-' . $position_num1['position_num'];
                            $v['number'] = '-- / '.$number; //房号 车位号 分开
                            $v['park_number']= $number;
                        }else{
                            $v['number'] = '';
                        }
                    }else{
                        $v['number'] = '';
                    }
                }
                
                    if (isset($v['service_start_time']) && $v['service_start_time'] > 100) {
                            $data[$k]['service_start_time_txt'] = date('Y-m-d', $v['service_start_time']);
                    }else{
                        $data[$k]['service_start_time_txt'] = '--';
                    }
                    if (isset($v['service_end_time']) && $v['service_end_time'] > 100) {
                            $data[$k]['service_end_time_txt'] = date('Y-m-d', $v['service_end_time']);
                    }else{
                        $data[$k]['service_end_time_txt'] = '--';
                    }
       
                if (isset($v['last_ammeter'])) {
                    if (!$v['last_ammeter'] && $v['charge_type'] != 'water' && $v['charge_type'] != 'electric' && $v['charge_type'] != 'gas')
                        $data[$k]['last_ammeter'] = '--';
                }
                if (isset($v['now_ammeter'])) {
                    if (!$v['now_ammeter'] && $v['charge_type'] != 'water' && $v['charge_type'] != 'electric' && $v['charge_type'] != 'gas')
                        $data[$k]['now_ammeter'] = '--';
                }
                $data[$k]['add_time_txt'] = '--';
                if(isset($v['add_time']) && !empty($v['add_time'])){
                    $data[$k]['add_time_txt'] = date('Y-m-d', $v['add_time']);
                }
                $v['my_check_status']=0;  //我看到审核状态 1审核中 2审核 自己已审核
                $v['order_apply_info']='';
                $v['check_status_str']='';
                if(isset($v['check_status']) && $v['check_status']==1){
                    $v['check_status_str']='审核中';
                }
                //处理审核状态
                if(isset($v['check_status']) && $v['check_status']==1 && !empty($check_level_info)){
                    $v['my_check_status']=1;
                    $houseVillageCheckauthDetailService=new HouseVillageCheckauthDetailService();
                    if(!empty($check_level_info['wid'])){
                        $checkauthApplyWhere=array('order_id'=>$v['order_id'],'village_id'=>$v['village_id'],'wid'=>$check_level_info['wid'],'apply_id'=>$v['check_apply_id']);
                        $checkDetail=$houseVillageCheckauthDetailService->getOneData($checkauthApplyWhere);
                        if(!empty($checkDetail) && $checkDetail['status']==0){
                            $v['my_check_status']=2;
                            $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
                            $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $checkDetail['apply_id'],'order_id'=>$v['order_id']]);
                            if($order_apply && !empty($order_apply['extra_data'])){
                                $order_apply_info=json_decode($order_apply['extra_data'],1);
                                if($order_apply_info){
                                    $order_apply_info['opt_time_str']= $order_apply_info['opt_time']>0?date('Y-m-d H:i:s' ,$order_apply_info['opt_time']):'';
                                }
                                $v['order_apply_info']=$order_apply_info;
                            }
                        }elseif(!empty($checkDetail) && $checkDetail['status']==1){
                            $v['my_check_status']=3;
                        }
                    }

                }elseif(isset($v['check_status']) && $v['check_status']==1){
                    $v['my_check_status']=1;
                }
                if($page>0 && isset($v['phone']) && !empty($v['phone'])){
                    $v['phone']=phone_desensitization($v['phone']);
                }
            }
        }
        return $data;
    }

    public function getNewPayOrdersCount($where=[])
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $count = $db_house_new_pay_order->getPayOrdersCount($where);
        return $count;
    }

    public function getOrderLists($where=[],$field=true)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getList($where, $field);
        return $data;
    }


    /**
     * 获取应收订单详情
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/15
     */
    public function getReceivableOrderInfo($where = [], $field = true, $page = 1, $limit = 1, $order = 'order_id DESC')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data1 = $db_house_new_pay_order->getList($where, $field, $page, $limit, $order);
      //  print_r($data1);exit;
        //  print_r($data1->toArray());exit;
        if ($data1) {
            $late_payment_money = 0.00;
            //$db_house_property_digit_service = new HousePropertyDigitService();
            //$digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$data1[0]['property_id']]);
            $data = [];
            foreach ($data1 as $k => $v) {
                $data[$k] = $v;
                $data[$k]['pay_money'] = $v['total_money'];
                $data[$k]['pay_money']= formatNumber($data[$k]['total_money'],2,1);
                if ((!isset($v['service_start_time'])||$v['service_start_time']<=1)&&(!isset($v['service_end_time'])||$v['service_end_time']<=1)){
                    $service_time=0;
                }else{
                    $service_time=1;
                }
                if (isset($v['service_start_time'])) {
                    if ($v['service_start_time'])
                        $data[$k]['service_start_time_txt'] = date('Y-m-d H:i:s', $v['service_start_time']);
                    else
                        $data[$k]['service_start_time_txt'] = '--';
                }
                if (isset($v['service_end_time'])) {
                    if ($v['service_end_time'])
                        $data[$k]['service_end_time_txt'] = date('Y-m-d H:i:s', $v['service_end_time']);
                    else
                        $data[$k]['service_end_time_txt'] = '--';
                }
                if (isset($v['add_time'])) {
                    $data[$k]['add_time_txt'] = date('Y-m-d H:i:s', $v['add_time']);
                }
                if ((!isset($v['last_ammeter'])||empty($v['last_ammeter']))&&(!isset($v['now_ammeter'])||empty($v['now_ammeter']))){
                    $ammeter=0;
                }else{
                    $ammeter=1;
                }
                if (isset($v['last_ammeter'])) {
                    if (!$v['last_ammeter'])
                        $data[$k]['last_ammeter'] = '--';
                }
                if (isset($v['now_ammeter'])) {
                    if (!$v['now_ammeter'])
                        $data[$k]['now_ammeter'] = '--';
                }
            }
        }

        $list = [];
        $list[0]['title'] = '收费标准名称';
        $list[0]['val'] = $data[0]['charge_name'];
        $list[1]['title'] = '收费项目名称';
        $list[1]['val'] = $data[0]['name'];
        $list[2]['title'] = '所属收费科目';
        $list[2]['val'] = $data[0]['charge_number_name'];
        $list[3]['title'] = '应收费用';
        $list[3]['val'] = '￥' . $data[0]['pay_money'];
        if (!empty($service_time)){
            $list[4]['title'] = '计费开始时间';
            $list[4]['val'] = $data[0]['service_start_time_txt'];
            $list[5]['title'] = '计费结束时间';
            $list[5]['val'] = $data[0]['service_end_time_txt'];
        }
        if (!empty($ammeter)){
            $list[6]['title'] = '上次度数';
            $list[6]['val'] = $data[0]['last_ammeter'];
            $list[7]['title'] = '本次度数';
            $list[7]['val'] = $data[0]['now_ammeter'];
        }
        $res = [];
        $res['list'] = $list;
        $res['total_money'] = $data[0]['pay_money'];

        return $res;
    }

    /**
     * 计算账单合计费用
     * @param array $where
     * @param bool $field
     * @return float|int|mixed|string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/06/28
     */
    public function getPayMoney($where = [], $field = true)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getList($where, $field);
        $total_money = 0.00;
        if ($data) {
            foreach ($data as $k => $v) {
                $total_money += ($v['modify_money'] + $v['late_payment_money']);
            }
        }
        return get_format_number($total_money);
    }

    /**
     * 获取订单详情
     * @param array $where
     * @param bool $field
     * @param int $isKeyVal
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderInfo($where = [], $field = true, $isKeyVal = 0)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getOne($where, $field);
        if ($data && !is_array($data)) {
            $data = $data->toArray();
        }
        if (empty($data['project_name'])&&$data['car_type']=='stored_type'){
            $data['project_name']='储值车充值（'.$data['car_number'].'）';
        }
        if (empty($data['project_name'])&&$data['car_type']=='temporary_type'){
            $data['project_name']='临时车缴费（'.$data['car_number'].'）';
        }
        $digit_info=array();
        $late_payment_money = formatNumber($data['late_payment_money'],2,1);
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        if (isset($data['summary_id']) && !empty($data['summary_id'])){
            $summary_info= $db_house_new_pay_order_summary->getOne(['summary_id' => $data['summary_id']]);
            if (!empty($summary_info)){
                $data['order_serial']=$summary_info['paid_orderid'];
                $data['order_no']=$summary_info['order_no'];
                $data['remark']=$summary_info['remark'];
            }
        }
        $late_payment_day = $data['late_payment_day'];
        $data['late_payment_money'] = $late_payment_money;
        $data['late_payment_day'] = $late_payment_day;
        if(isset($data['charge_valid_type']) && $data['charge_valid_type'] == 3) {
            $data['charge_valid_time_txt'] = date('Y', $data['charge_valid_time']);
        }
        elseif (isset($data['charge_valid_type']) && $data['charge_valid_type'] == 2) {
            $data['charge_valid_time_txt'] = date('Y-m', $data['charge_valid_time']);
        }
        elseif (isset($data['charge_valid_type']) && $data['charge_valid_type'] == 1) {
            $data['charge_valid_time_txt'] = date('Y-m-d', $data['charge_valid_time']);
        }
        $data['add_time_txt'] = date('Y-m-d H:i:s', $data['add_time']);
        if ($data['is_prepare'] == 1) {
            if ($data['bill_create_set'] == 1)
                $data['service_month_num'] = $data['service_month_num'] . '日';
            elseif ($data['bill_create_set'] == 2)
                $data['service_month_num'] = $data['service_month_num'] . '月';
            elseif ($data['bill_create_set'] == 3)
                $data['service_month_num'] = $data['service_month_num'] . '年';
            else
                $data['service_month_num'] = '--';
        }
        if ($data['service_end_time']) {
            if ($data['service_end_time'] >= time())
                $data['is_in_service'] = 1;
            else
                $data['is_in_service'] = 2;
        }
        if ($data['service_end_time']) {
            if ($data['service_end_time'] == 1)
                $data['service_end_time'] = '无';
            else
                $data['service_end_time'] = date('Y-m-d H:i:s', $data['service_end_time']);
        }
        if ($data['service_start_time']) {
            if ($data['service_start_time'] == 1)
                $data['service_start_time'] = '无';
            else
                $data['service_start_time'] = date('Y-m-d H:i:s', $data['service_start_time']);
        }
        if ($data['pay_time']>100){
            $data['pay_time_txt'] = date('Y-m-d H:i:s', $data['pay_time']);
        }
        if(empty($digit_info)){
            $data['modify_money'] = formatNumber($data['modify_money'],2,1);
            $data['total_money'] = formatNumber($data['total_money'],2,1);
            $data['refund_money'] = formatNumber($data['refund_money'],2,1);
            $data['pay_money'] = formatNumber($data['pay_money'],2,1);

            $data['pay_amount_points']=formatNumber($data['pay_amount_points']/100,2,1);
            $data['system_balance']=formatNumber($data['system_balance'],2,1);
            $data['score_deducte']=formatNumber($data['score_deducte'],2,1);
            $data['score_used_count']=formatNumber($data['score_used_count'],2,1);

        }else{
          //  print_r($data['order_type']);exit;
            if($data['order_type'] == 'water' || $data['order_type'] == 'electric' || $data['order_type'] == 'gas'){
                $digit_info['meter_digit'] = $digit_info['meter_digit']>2 || empty($digit_info['meter_digit'])?2:$digit_info['meter_digit'];
                $data['modify_money'] = formatNumber($data['modify_money'], $digit_info['meter_digit'], $digit_info['type']);
                $data['total_money'] = formatNumber($data['total_money'], $digit_info['meter_digit'], $digit_info['type']);
                $data['refund_money'] = formatNumber($data['refund_money'], $digit_info['meter_digit'], $digit_info['type']);
                $data['pay_money'] = formatNumber($data['pay_money'], $digit_info['meter_digit'], $digit_info['type']);

                $data['pay_amount_points']=formatNumber($data['pay_amount_points']/100,$digit_info['meter_digit'], $digit_info['type']).'元';
                $data['system_balance']=formatNumber($data['system_balance'],$digit_info['meter_digit'], $digit_info['type']);
                $data['score_deducte']=formatNumber($data['score_deducte'],$digit_info['meter_digit'], $digit_info['type']);
                $data['score_used_count']=formatNumber($data['score_used_count'],$digit_info['meter_digit'], $digit_info['type']);

            }else {
                $digit_info['other_digit'] = $digit_info['other_digit'] > 2 || empty($digit_info['other_digit']) ? 2 : $digit_info['other_digit'];
                $data['modify_money'] = formatNumber($data['modify_money'], $digit_info['other_digit'], $digit_info['type']);
                $data['total_money'] = formatNumber($data['total_money'], $digit_info['other_digit'], $digit_info['type']);
                $data['refund_money'] = formatNumber($data['refund_money'], $digit_info['other_digit'], $digit_info['type']);
                $data['pay_money'] = formatNumber($data['pay_money'], $digit_info['other_digit'], $digit_info['type']);

                $data['pay_amount_points']=formatNumber($data['pay_amount_points']/100,$digit_info['other_digit'], $digit_info['type']);
                $data['system_balance']=formatNumber($data['system_balance'],$digit_info['other_digit'], $digit_info['type']);
                $data['score_deducte']=formatNumber($data['score_deducte'],$digit_info['other_digit'], $digit_info['type']);
                $data['score_used_count']=formatNumber($data['score_used_count'],$digit_info['other_digit'], $digit_info['type']);

            }
        }
        $data['opt_meter_time']='';
        if(in_array($data['order_type'],['water','electric','gas'])&&!empty($data['meter_reading_id'])){
            $db_house_village_meter_reading=new HouseVillageMeterReading();
            $meter_addtime=$db_house_village_meter_reading->getOne(['id'=>$data['meter_reading_id']],'opt_meter_time,add_time');
            if (!empty($meter_addtime)){
                if (!empty($meter_addtime['opt_meter_time'])){
                    $data['opt_meter_time']=date('Y-m-d H:i:s',$meter_addtime['opt_meter_time']);
                } elseif (empty($meter_addtime['opt_meter_time'])||!empty($meter_addtime['add_time'])){
                    $data['opt_meter_time']=date('Y-m-d H:i:s',$meter_addtime['add_time']);
                }
            }
        }
        $data['all_fee'] = $data['modify_money'] + $data['late_payment_money'];
        if($data['is_prepare'] == 1){
            $data['prepare_money'] = $data['total_money'];
        }else{
            $data['prepare_money'] = 0;
        }
        if ($isKeyVal) {
            $return_data[0]['title'] = '账单基本信息';
            $return_data[0]['list'][] = array(
                'title' => '订单ID',
                'val' => $data['order_id']
            );
            $return_data[0]['list'][] = array(
                'title' => '订单编号',
                'val' => $data['order_no']
            );
            if (isset($data['order_serial']) && $data['order_serial']) {
                $return_data[0]['list'][] = array(
                    'title' => '支付单号',
                    'val' => $data['order_serial']
                );
            }
            $return_data[0]['list'][] = array(
                'title' => '收费项目名称',
                'val' => $data['project_name']
            );
            $return_data[0]['list'][] = array(
                'title' => '应收费用',
                'val' => $data['total_money']
            );
            $return_data[0]['list'][] = array(
                'title' => '修改后费用',
                'val' => $data['modify_money']
            );
            $return_data[0]['list'][] = array(
                'title' => '修改原因',
                'val' => $data['modify_reason']
            );
            $discount_money=$data['modify_money']-$data['pay_money'];
            $discount_money=$discount_money>0 ? formatNumber($discount_money):0;
            $return_data[0]['list'][] = array(
                'title' => '优惠金额',
                'val' => $discount_money
            );
            $return_data[0]['list'][] = array(
                'title' => '实际缴费金额',
                'val' => $data['pay_money']
            );
            $return_data[0]['list'][] = array(
                'title' => '线上支付金额',
                'val' => $data['pay_amount_points']
            );
            $return_data[0]['list'][] = array(
                'title' => '余额支付金额',
                'val' => $data['system_balance']
            );
            $return_data[0]['list'][] = array(
                'title' => '小区余额支付金额',
                'val' => $data['village_balance']
            );
            $return_data[0]['list'][] = array(
                'title' => '积分抵扣金额',
                'val' => $data['score_deducte']
            );
            $return_data[0]['list'][] = array(
                'title' => '积分使用数量',
                'val' => $data['score_used_count']
            );
            if(isset($data['now_ammeter']) && isset($data['last_ammeter']) && $data['now_ammeter']-$data['last_ammeter']>0){
                $return_data[0]['list'][] = array(
                    'title' => '用量',
                    'val' => $data['now_ammeter']-$data['last_ammeter']
                );
                $return_data[0]['list'][] = array(
                    'title' => '起度',
                    'val' => $data['last_ammeter']
                );
                $return_data[0]['list'][] = array(
                    'title' => '止度',
                    'val' => $data['now_ammeter']
                );

            }
            if (isset($data['opt_meter_time'])||!empty($data['opt_meter_time'])){
                $return_data[0]['list'][] = array(
                    'title' => '抄表时间',
                    'val' => $data['opt_meter_time']
                );
            }
            $return_data[0]['list'][] = array(
                'title' => '支付时间',
                'val' => $data['pay_time_txt']
            );
            $return_data[0]['list'][] = array(
                'title' => '计费开始时间',
                'val' => $data['service_start_time']
            );
            $return_data[0]['list'][] = array(
                'title' => '计费结束时间',
                'val' => $data['service_end_time']
            );
            $return_data[0]['list'][] = array(
                'title' => '单价',
                'val' => $data['unit_price']
            );
            if (isset($data['parking_num']) && intval($data['parking_num'])) {
                $return_data[0]['list'][] = array(
                    'title' => '车位数量',
                    'val' => $data['parking_num']
                );
            }
            if($data['type'] == 2 && $data['is_prepare'] != 1){
                if ($data['bill_create_set'] == 1){
                    $cycle = '收费周期（日）';
                }elseif($data['bill_create_set'] == 2){
                    $cycle = '收费周期（月）';
                }else{
                    $cycle = '收费周期（年）';
                }
                $return_data[0]['list'][] = array(
                    'title' => $cycle,
                    'val' => $data['service_month_num']+$data['service_give_month_num']
                );
            }
            $return_data[1]['title'] = '滞纳金信息';
            $return_data[1]['list'][] = array(
                'title' => '滞纳天数',
                'val' => $data['late_payment_day']
            );
            $return_data[1]['list'][] = array(
                'title' => '滞纳金收取比例（每天）',
                'val' => $data['late_fee_rate'].'%'
            );
            if ($data['is_prepare'] == 1) {
                $return_data[2]['title'] = '预缴信息';
                $return_data[2]['list'][] = array(
                    'title' => '预缴周期',
                    'val' => $data['service_month_num']
                );
                $return_data[2]['list'][] = array(
                    'title' => '预缴优惠',
                    'val' => $data['diy_content']
                );
                $return_data[2]['list'][] = array(
                    'title' => '预缴费用',
                    'val' => $data['pay_money']
                );
            }
            if ($data['is_refund'] == 2) {
                $return_data[3]['title'] = '退款信息';
                $return_data[3]['list'][] = array(
                    'title' => '退款总金额',
                    'val' => $data['refund_money']
                );
            }
            return array_values($return_data);
        }
        $data['late_fee_rate'] = $data['late_fee_rate'].'%';
        return $data;
    }

    /**
     * 获取订单详情
     * @param array $where
     * @param bool $field
     * @param int $isKeyVal
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderIn($where = [], $field = true, $isKeyVal = 0)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $data = $db_house_new_pay_order->getOne($where, $field);
        if ($data && !is_array($data)) {
            $data = $data->toArray();
        }
        $digit_info = [];
        $field_list=[];
        if(empty($digit_info)){
            $late_payment_money = formatNumber($data['late_payment_money'],2,1);
        }else{
            if($data['order_type'] == 'water' || $data['order_type'] == 'electric' || $data['order_type'] == 'gas'){
                $late_payment_money = formatNumber($data['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']);
            }else{
                $late_payment_money = formatNumber($data['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
            }
        }
        $late_payment_day = $data['late_payment_day'];
        $data['late_payment_money'] = $late_payment_money;
        $data['late_payment_day'] = $late_payment_day;
        if($data['charge_valid_type'] == 3) {
            $data['charge_valid_time_txt'] = date('Y', $data['charge_valid_time']);
        }elseif ($data['charge_valid_type'] == 2) {
            $data['charge_valid_time_txt'] = date('Y-m', $data['charge_valid_time']);
        }elseif ($data['charge_valid_type'] == 1) {
            $data['charge_valid_time_txt'] = date('Y-m-d', $data['charge_valid_time']);
        }

        $data['add_time_txt'] = date('Y-m-d H:i:s', $data['add_time']);
        if ($data['type'] == 2) {
            if(empty($data['service_month_num'])){
                $data['service_month_num'] = 1;
            }
            if ($data['bill_create_set'] == 1)
                $data['service_month_num'] = $data['service_month_num'] . '天';
            elseif ($data['bill_create_set'] == 2)
                $data['service_month_num'] = $data['service_month_num'] . '个月';
            elseif ($data['bill_create_set'] == 3)
                $data['service_month_num'] = $data['service_month_num'] . '年';
            else
                $data['service_month_num'] = '--';
        }
        if ($data['service_end_time']) {
            if ($data['service_end_time'] >= time())
                $data['is_in_service'] = 1;
            else
                $data['is_in_service'] = 2;
        }
        if ($data['service_end_time']) {
            if ($data['service_end_time'] == 1)
                $data['service_end_time'] = '--';
            else
                $data['service_end_time'] = date('Y-m-d', $data['service_end_time']);
        }
        if ($data['service_start_time']) {
            if ($data['service_start_time'] == 1)
                $data['service_start_time'] = '--';
            else
                $data['service_start_time'] = date('Y-m-d', $data['service_start_time']);
        }
        if ($data['pay_time']>100){
            $data['pay_time_txt'] = date('Y-m-d H:i:s', $data['pay_time']);
        }
        if(empty($digit_info)){
            $data['modify_money'] = formatNumber($data['modify_money'],2,1);
            $data['total_money'] = formatNumber($data['total_money'],2,1);
            $data['refund_money'] = formatNumber($data['refund_money'],2,1);
            $data['pay_money'] = formatNumber($data['pay_money'],2,1);
        }else{
            if($data['order_type'] == 'water' || $data['order_type'] == 'electric' || $data['order_type'] == 'gas'){
                $data['modify_money'] = formatNumber($data['modify_money'],$digit_info['meter_digit'],$digit_info['type']);
                $data['total_money'] = formatNumber($data['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                $data['refund_money'] = formatNumber($data['refund_money'],$digit_info['meter_digit'],$digit_info['type']);
                $data['pay_money'] = formatNumber($data['pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                $data['not_house_rate'] = '-';
                $data['fees_type'] = '-';
                $data['bill_create_set'] = '-';
                $data['bill_arrears_set'] = '-';
                $data['bill_type'] = '-';
            }else{
                $data['modify_money'] = formatNumber($data['modify_money'],$digit_info['other_digit'],$digit_info['type']);
                $data['total_money'] = formatNumber($data['total_money'],$digit_info['other_digit'],$digit_info['type']);
                $data['refund_money'] = formatNumber($data['refund_money'],$digit_info['other_digit'],$digit_info['type']);
                $data['pay_money'] = formatNumber($data['pay_money'],$digit_info['other_digit'],$digit_info['type']);

                if(isset($data['not_house_rate'])){
                    $data['not_house_rate_txt'] = empty($data['not_house_rate']) ? '-' : ($data['not_house_rate'].'%');
                }
                if(isset($data['fees_type'])){
                    $data['fees_type_txt'] = (new HouseNewChargeRuleService())->getFeesTypeTxt($data['fees_type']);
                }
                if(isset($data['bill_create_set'])){
                    $data['bill_create_set_txt'] = empty($data['bill_create_set']) ? '-' : (($data['bill_create_set'] == 1) ? '按日生成' : (($data['bill_create_set'] == 2) ? '按月生成' : '按年生成'));
                }
                if(isset($data['bill_arrears_set'])){
                    $data['bill_arrears_set_txt'] = empty($data['bill_arrears_set']) ? '-' : (($data['bill_arrears_set'] == 1) ? '预生成' : '后生成');
                }
                if(isset($data['bill_type'])){
                    $data['bill_type_txt'] = empty($data['bill_type']) ? '-' : (($data['bill_type'] == 1) ? '手动' : '自动');
                }
            }

        }
        /**
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $data['is_split_order']=0;
        if($is_grapefruit_prepaid==1){
            $data['is_split_order']=1;
        }
         **/
        $data['is_split_order']=1;
        $data['all_fee'] = $data['modify_money'] + $data['late_payment_money'];
        $data['all_fee'] = formatNumber($data['all_fee'],2,1);
        if($data['is_prepare'] == 1){
            $data['prepare_money'] = $data['total_money'];
        }else{
            $data['prepare_money'] = 0;
        }
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        if (isset($data['summary_id']) && !empty($data['summary_id'])){
            $summary_info= $db_house_new_pay_order_summary->getOne(['summary_id' => $data['summary_id']]);
            if (!empty($summary_info)){
                $data['order_serial']=$summary_info['paid_orderid'];
                $data['order_no']=$summary_info['order_no'];
                $data['remark']=$summary_info['remark'];
            }
        }
        //针对水电燃
        if(in_array($data['order_type'],['water','electric','gas'])){
            $field_list[]=['key'=>'起度：','value'=>formatNumber($data['last_ammeter'],2,1)];
            $field_list[]=['key'=>'止度：','value'=>formatNumber($data['now_ammeter'],2,1)];
            $field_list[]=['key'=>'抄表时间：','value'=>date('Y-m-d H:i:s',$data['add_time'])];
        }
        if ($isKeyVal) {
            $return_data[0]['title'] = '账单基本信息';
            $return_data[0]['list'][] = array(
                'title' => '订单ID',
                'val' => $data['order_id']
            );
            $return_data[0]['list'][] = array(
                'title' => '订单编号',
                'val' => $data['order_no']
            );
            if (isset($data['order_serial']) && $data['order_serial']) {
                $return_data[0]['list'][] = array(
                    'title' => '支付单号',
                    'val' => $data['order_serial']
                );
            }
            $return_data[0]['list'][] = array(
                'title' => '收费项目名称',
                'val' => $data['project_name']
            );
            $return_data[0]['list'][] = array(
                'title' => '应收费用',
                'val' => $data['total_money']
            );
            $return_data[0]['list'][] = array(
                'title' => '修改后费用',
                'val' => $data['modify_money']
            );
            $return_data[0]['list'][] = array(
                'title' => '修改原因',
                'val' => $data['modify_reason']
            );
            $return_data[0]['list'][] = array(
                'title' => '实际缴费金额',
                'val' => $data['pay_money']
            );
            if(isset($data['now_ammeter']) && isset($data['last_ammeter']) && $data['now_ammeter']-$data['last_ammeter']>0){
                $return_data[0]['list'][] = array(
                    'title' => '用量',
                    'val' => $data['now_ammeter']-$data['last_ammeter']
                );
            }
            $return_data[0]['list'][] = array(
                'title' => '支付时间',
                'val' => $data['pay_time_txt']
            );
            $return_data[0]['list'][] = array(
                'title' => '计费开始时间',
                'val' => $data['service_start_time']
            );
            $return_data[0]['list'][] = array(
                'title' => '计费结束时间',
                'val' => $data['service_end_time']
            );
            $return_data[0]['list'][] = array(
                'title' => '单价',
                'val' => $data['unit_price']
            );
            $return_data[1]['title'] = '滞纳金信息';
            $return_data[1]['list'][] = array(
                'title' => '滞纳天数',
                'val' => $data['late_payment_day']
            );
            $return_data[1]['list'][] = array(
                'title' => '滞纳金收取比例（每天）',
                'val' => $data['late_fee_rate'].'%'
            );
            if ($data['is_prepare'] == 1) {
                $return_data[2]['title'] = '预缴信息';
                $return_data[2]['list'][] = array(
                    'title' => '预缴周期',
                    'val' => $data['service_month_num']
                );
                $return_data[2]['list'][] = array(
                    'title' => '预缴优惠',
                    'val' => $data['diy_content']
                );
                $return_data[2]['list'][] = array(
                    'title' => '预缴费用',
                    'val' => $data['pay_money']
                );
            }
            if ($data['is_refund'] == 2) {
                $return_data[3]['title'] = '退款信息';
                $return_data[3]['list'][] = array(
                    'title' => '退款总金额',
                    'val' => $data['refund_money']
                );
            }
            return array_values($return_data);
        }
        $data['field_list']=$field_list;
        $data['late_fee_rate'] = $data['late_fee_rate'].'%';

        if (!empty($data['order_id'])){
            $this->updateOrderInfo($data['order_id']);
        }


        if (isset($data['parking_num']) && $data['parking_num']>0) {
            $data['parking_num_txt'] = $data['parking_num'];
        }
        if (isset($data['parking_lot']) && $data['parking_lot']) {
            $data['parking_lot_txt_arr'] = explode(',', $data['parking_lot']);
        }
        
        return $data;
    }

    public function getOrderDetail($where = [], $field = true)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_charge_project = new HouseNewChargeProject();
        $data = $db_house_new_pay_order->getOne($where, $field);

        $digit_info = [];

        if(empty($digit_info)){
            $data['late_payment_money'] = formatNumber($data['late_payment_money'],2,1);
            $data['modify_money'] = formatNumber($data['modify_money'],2,1);
            $data['total_money'] = formatNumber($data['total_money'],2,1);
        }else{
            if($data['order_type'] == 'water' || $data['order_type'] == 'electric' || $data['order_type'] == 'gas'){
                $data['late_payment_money'] = formatNumber($data['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']);
                $data['modify_money'] = formatNumber($data['modify_money'],$digit_info['meter_digit'],$digit_info['type']);
                $data['total_money'] = formatNumber($data['total_money'],$digit_info['meter_digit'],$digit_info['type']);
            }else{
                $data['late_payment_money'] = formatNumber($data['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
                $data['modify_money'] = formatNumber($data['modify_money'],$digit_info['other_digit'],$digit_info['type']);
                $data['total_money'] = formatNumber($data['total_money'],$digit_info['other_digit'],$digit_info['type']);
            }
        }
        $late_payment_money = $data['late_payment_money'];
        $late_payment_day = $data['late_payment_day'];
        $data['late_payment_money'] = $late_payment_money;
        $data['late_payment_day'] = $late_payment_day;
        $data['charge_valid_time_txt'] = date('Y-m-d H:i:s', $data['charge_valid_time']);
        $project_info = $db_house_new_charge_project->getOne(['id'=>$data['project_id']],'type');
        if ($project_info['type'] == 2) {
            $data['service_month_num'] = $data['service_month_num']?$data['service_month_num']:1;
            if ($data['bill_create_set'] == 1)
                $data['service_month_num'] = $data['service_month_num'] . '日';
            elseif ($data['bill_create_set'] == 2)
                $data['service_month_num'] = $data['service_month_num'] . '个月';
            elseif ($data['bill_create_set'] == 3)
                $data['service_month_num'] = $data['service_month_num'] . '年';
            else
                $data['service_month_num'] = '--';
        }
        if ($data['service_end_time']) {
            if ($data['service_end_time'] >= time())
                $data['is_in_service'] = 1;
            else
                $data['is_in_service'] = 2;
        }
        if ($data['service_end_time'])
            $data['service_end_time'] = date('Y-m-d H:i:s', $data['service_end_time']);
        if ($data['service_start_time'])
            $data['service_start_time'] = date('Y-m-d H:i:s', $data['service_start_time']);
        if ($data['pay_time']>100){
            $data['pay_time_txt'] = date('Y-m-d H:i:s', $data['pay_time']);
        }
        if ($data['add_time'])
            $data['add_time_txt'] = date('Y-m-d H:i:s', $data['add_time']);
        $data['all_fee'] = $data['modify_money'] + $data['late_payment_money'];
        $return_data['all_fee'] = $data['all_fee'];
        $return_data['list'][] = array(
            'title' => '收费标准名称',
            'val' => $data['charge_name']
        );
        $return_data['list'][] = array(
            'title' => '收费项目',
            'val' => $data['project_name']
        );
        $return_data['list'][] = array(
            'title' => '应收费用',
            'val' => $data['total_money']
        );
        $return_data['list'][] = array(
            'title' => '实收费用',
            'val' => $data['modify_money']
        );
        if (isset($data['parking_num']) && intval($data['parking_num'])) {
            $return_data['list'][] = array(
                'title' => '车位数量',
                'val' => $data['parking_num']
            );
        }
        if(isset($data['now_ammeter']) && isset($data['last_ammeter']) && $data['now_ammeter']-$data['last_ammeter']>0){
            $return_data['list'][] = array(
                'title' => '用量',
                'val' => $data['now_ammeter']-$data['last_ammeter']
            );
        }
        //针对水电燃
        if(in_array($data['order_type'],['water','electric','gas'])){
            $return_data['list'][] = array(
                'title' => '起度',
                'val' => formatNumber($data['last_ammeter'],2,1)
            );
            $return_data['list'][] = array(
                'title' => '止度',
                'val' =>formatNumber($data['now_ammeter'],2,1)
            );
            $return_data['list'][] = array(
                'title' => '抄表时间',
                'val' => date('Y-m-d H:i:s',$data['add_time'])
            );
        }
        $return_data['list'][] = array(
            'title' => '收费标准生效时间',
            'val' => $data['charge_valid_time_txt']
        );
        $return_data['list'][] = array(
            'title' => '账单生成时间',
            'val' => $data['add_time_txt']
        );
        if ($data['is_prepare'] != 1) {
            $return_data['list'][] = array(
                'title' => '收费周期',
                'val' => $data['service_month_num']
            );
            $return_data['list'][] = array(
                'title' => '预缴周期',
                'val' => '无'
            );
        }else{
            $return_data['list'][] = array(
                'title' => '收费周期',
                'val' => '无'
            );
            $return_data['list'][] = array(
                'title' => '预缴周期',
                'val' => $data['service_month_num']
            );
        }
        if ($data['is_prepare'] == 1) {
            $return_data['list'][] = array(
                'title' => '预缴优惠',
                'val' => $data['diy_content']
            );
            $return_data['list'][] = array(
                'title' => '预缴费用',
                'val' => $data['modify_money']
            );
        } else {
            $return_data['list'][] = array(
                'title' => '预缴周期',
                'val' => 0
            );
            $return_data['list'][] = array(
                'title' => '预缴优惠',
                'val' => ''
            );
            $return_data['list'][] = array(
                'title' => '预缴费用',
                'val' => 0
            );
        }
        $return_data['list'][] = array(
            'title' => '滞纳天数',
            'val' => $data['late_payment_day']
        );
        $return_data['list'][] = array(
            'title' => '滞纳金收取比例（每天）',
            'val' => $data['late_fee_rate'].'%'
        );
        $return_data['list'][] = array(
            'title' => '滞纳金费用',
            'val' => $data['late_payment_money']
        );
        return $return_data;
    }

    /**
     * 订单数量
     * @param array $where
     * @return int
     * @author lijie
     * @date_time 2021/06/15
     */
    public function getCount($where = [])
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $count = $db_house_new_pay_order->getCount($where);
        return $count;
    }

    /**
     * 房间/车位绑定消费标准列表
     * @author lijie
     * @date_time 2021/06/15
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return array
     */
    public function getChargeStandardBindList($where = [], $field = true, $page = 0, $limit = 6, $order = 'b.id DESC')
    {
        $db_house_new_charge_standard_bind = new HouseNewChargeStandardBind();
        $data = $db_house_new_charge_standard_bind->getList($where, $field, $page, $limit, $order);
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        if ($data && !$data->isEmpty()) {
            $configCustomizationService=new ConfigCustomizationService();
            $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
            $data = $data->toArray();
            foreach ($data as $k => $v) {
                $condition=[];
                if ($v['cycle']<1){
                    $v['cycle']=1;
                }
                if($v['vacancy_id']){
                    $type = 1;
                    $id = $v['vacancy_id'];
                    $condition[] = ['room_id','=',$v['vacancy_id']];
                }else{
                    $type = 2;
                    $id = $v['position_id'];
                    $condition[] = ['position_id','=',$v['position_id']];
                }
                $is_valid = $service_house_new_charge_rule->checkChargeValid($v['project_id'], $v['charge_rule_id'],$id,$type);
                if (!$is_valid) {
                    $data[$k]['is_valid'] = 0;
                    $data[$k]['is_valid_txt'] = '已过期';
                }else{
                    $data[$k]['is_valid'] = 1;
                    $data[$k]['is_valid_txt'] = '生效中';
                }
                if ($v['charge_valid_time']>time()){
                    $data[$k]['is_valid_txt'] = '未生效';
                }
                if(isset($v['charge_valid_type'])){
                    if ($v['charge_valid_type'] == 1)
                        $data[$k]['charge_valid_time_txt'] = date('Y-m-d', $v['charge_valid_time']);
                    elseif ($v['charge_valid_type'] == 2)
                        $data[$k]['charge_valid_time_txt'] = date('Y-m', $v['charge_valid_time']);
                    else
                        $data[$k]['charge_valid_time_txt'] = date('Y', $v['charge_valid_time']);
                }else{
                    $data[$k]['charge_valid_time_txt'] = date('Y-m-d', $v['charge_valid_time']);
                }
                //$condition[] = ['project_id','=',$v['project_id']];
                $condition[] = ['is_paid','=',1];
                $condition[] = ['refund_type','<>',2];
                $projectInfo = $this->getProjectInfo(['id'=>$v['project_id']],'subject_id');
                $numberInfo = $this->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
                $condition[] = ['order_type','=',$numberInfo['charge_type']];
                $info = $this->getOneOrder($condition,'service_end_time','service_end_time DESC');
                if(strtotime($info['service_end_time']) > time()){
                    $is_expire = 0;
                }else{
                    $is_expire = 1;
                }
                $data[$k]['order_add_time_txt'] = date('Y-m-d', $v['order_add_time']);
                if ($v['type'] == 2) {
                    if ($v['order_add_type'] == 1)
                        $data[$k]['order_add_type_txt'] = '按日生成';
                    elseif ($v['order_add_type'] == 2)
                        $data[$k]['order_add_type_txt'] = '按月生成';
                    elseif ($v['order_add_type'] == 3)
                        $data[$k]['order_add_type_txt'] = '按年生成';
                    else
                        $data[$k]['order_add_type_txt'] = '--';
                } else {
                    $data[$k]['order_add_type_txt'] = '--';
                }
                // r.not_house_rate,r.fees_type,r.bill_create_set,r.bill_arrears_set,r.bill_type
                if(in_array($v['charge_type'],['water','gas','electric'])){
                    $data[$k]['not_house_rate_txt'] = '-';
                    $data[$k]['fees_type_txt'] = '-';
                    $data[$k]['bill_create_set_txt'] = '-';
                    $data[$k]['bill_arrears_set_txt'] = '-';
                    $data[$k]['bill_type_txt'] = '-';
                }else{
                    if(isset($v['not_house_rate'])){
                        $data[$k]['not_house_rate_txt'] = empty($v['not_house_rate']) ? '-' : ($v['not_house_rate'].'%');
                    }
                    if(isset($v['fees_type'])){
                        $data[$k]['fees_type_txt'] = $service_house_new_charge_rule->getFeesTypeTxt($v['fees_type']);
                    }
                    if(isset($v['bill_create_set'])){
                        $data[$k]['bill_create_set_txt'] = empty($v['bill_create_set']) ? '-' : (($v['bill_create_set'] == 1) ? '按日生成' : (($v['bill_create_set'] == 2) ? '按月生成' : '按年生成'));
                    }
                    if(isset($v['bill_arrears_set'])){
                        $data[$k]['bill_arrears_set_txt'] = empty($v['bill_arrears_set']) ? '-' : (($v['bill_arrears_set'] == 1) ? '预生成' : '后生成');
                    }
                    if(isset($v['bill_type'])){
                        $data[$k]['bill_type_txt'] = empty($v['bill_type']) ? '-' : (($v['bill_type'] == 1) ? '手动' : '自动');
                    }
                    if($v['charge_type']=='park_new'){
                        $data[$k]['is_prepaid'] =$v['is_prepaid']= 2;
                    }
                }

                $manual_btn = 0;
                $prepaid_btn = 0;
                if($is_valid){
                    if(($v['bill_type'] == 1 || $v['type'] == 1) && $v['type'] != 0){
                        $manual_btn = 1;
                    }
                    if($v['is_prepaid'] == 1 && $v['type'] != 1 && $v['bill_type'] != 1 && $v['type'] != 0){
                        $prepaid_btn = 1;
                    }
                }
                $data[$k]['is_prepaid_btn']=1;
                if($is_grapefruit_prepaid==1 && $v['is_prepaid']){
                    $data[$k]['is_prepaid'] =$v['is_prepaid']= 2;
                }
                $data[$k]['manual_btn'] = $manual_btn;
                $data[$k]['prepaid_btn'] = $prepaid_btn;
             
                $data[$k]['is_expire'] = $is_expire;
            }
        }else{
            $data=array();
        }
        return array_values($data);
    }

    /**
     * 查询这个房间当前绑定且有效的收费标准
     * @date : 2022/11/16
     * @param $room_id
     * @return array
     */
    public function getValidPrepaid($room_id){
        $service_house_new_charge_rule=new HouseNewChargeRuleService();
        $where[] = ['b.vacancy_id','=',$room_id];
        $where[] = ['b.is_del','=',1];
        $where[] = ['r.is_prepaid','=',1];
        $field = 'r.id as charge_rule_id,b.id,r.charge_valid_time,p.id as project_id,b.vacancy_id,b.position_id';
        $data = (new HouseNewChargeStandardBind())->getList($where, $field);
        $ids=[];
        if($data){
            foreach ($data as $v){
                if($v['vacancy_id']){
                    $type = 1;
                    $id = $v['vacancy_id'];
                    $condition[] = ['room_id','=',$v['vacancy_id']];
                }else{
                    $type = 2;
                    $id = $v['position_id'];
                    $condition[] = ['position_id','=',$v['position_id']];
                }
                $is_valid = $service_house_new_charge_rule->checkChargeValid($v['project_id'], $v['charge_rule_id'],$id,$type);
                if($is_valid){
                    $ids[]=$v['id'];
                }

            }
        }
        return $ids;
    }

    /**
     * 可预存收费项列表页
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param $room_id
     * @return mixed
     * @author lijie
     * @date_time 2021/07/07
     */
    public function getPrepaidList($where = [], $field = true, $page = 0, $limit = 6, $order = 'b.id DESC', $room_id)
    {
        $db_house_new_charge_standard_bind = new HouseNewChargeStandardBind();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_charge_project = new HouseNewChargeProject();
        $db_house_new_charge_number = new HouseNewChargeNumber();
        $data = $db_house_new_charge_standard_bind->getList($where, $field, $page, $limit, $order);
        $db_house_new_order_log=new HouseNewOrderLog();
        $service_house_new_charge_rule     = new HouseNewChargeRuleService();
        if($data && is_object($data) && !$data->isEmpty()){
            $data =$data->toArray();
        }
        if ($data) {
            foreach ($data as $k => $v) {
                $whereBind = [
                    'rule_id'    =>$v['charge_rule_id'],
                    'project_id' =>$v['project_id']
                ];
                if (isset($room_id) && $room_id) {
                    $whereBind['vacancy_id'] = $room_id;
                }
                $bind_info = $db_house_new_charge_standard_bind->getOne($whereBind,'custom_value, vacancy_id, position_id');
                if ($bind_info && !is_array($bind_info)) {
                    $bind_info = $bind_info->toArray();
                }
                $bind_type = 0;
                $id        = 0;
                if(isset($bind_info['vacancy_id']) && $bind_info['vacancy_id']){
                    $bind_type = 1;
                    $id        = $bind_info['vacancy_id'];
                }elseif(isset($bind_info['position_id']) && $bind_info['position_id']){
                    $bind_type = 2;
                    $id        = $bind_info['position_id'];
                }

                if(isset($bind_type) && $bind_type && $v['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES) {
                    $ruleHasParkNumInfo = $service_house_new_charge_rule->getRuleHasParkNumInfo($id, $v['charge_rule_id'], $bind_type, $v);
                    if (empty($ruleHasParkNumInfo) || !isset($ruleHasParkNumInfo['parkingNum']) || intval($ruleHasParkNumInfo['parkingNum']) <= 0) {
                        unset($data[$k]);
                        continue;
                    }
                }
                
                $rel=$db_house_new_order_log->getOne([
                    ['order_type','=',$v['charge_type']],
                    ['room_id','=',$room_id]
                ],'id,service_end_time');
                if($rel){
                    $service_end_time=strtotime(date('Y-m-d',$rel['service_end_time']));
                }else{
                    $service_end_time = time();
                }

//                $res = $db_house_new_pay_order->get_one(['is_paid' => 1, 'is_refund' => 1, 'is_discard' => 1, 'room_id' => $room_id, 'project_id' => $v['project_id']], 'service_end_time');
//                if($res){
//                    $service_end_time = $res['service_end_time'];
//                }else{
//                    $service_end_time = time();
//                }
                if($v['bill_create_set'] == 1)
                    $data[$k]['service_end_time'] = date('Y-m-d', $service_end_time);
                elseif($v['bill_create_set'] == 2)
                    $data[$k]['service_end_time'] = date('Y-m', $service_end_time);
                else
                    $data[$k]['service_end_time'] = date('Y', $service_end_time);
                $project_info = $db_house_new_charge_project->getOne(['id'=>$v['project_id']],'subject_id');
                $number_info = $db_house_new_charge_number->get_one(['id'=>$project_info['subject_id']]);
                if($number_info['charge_type'] == 'park'){
                    $data[$k]['service_end_time'] = '';
                }
            }
        }
        if($data){
            $data=array_values($data);
        }
        return $data;
    }

    /**
     * 房间/车位绑定消费标准数量
     * @author lijie
     * @date_time 2021/06/17
     * @param array $where
     * @param array $whereOr
     * @return int
     */
    public function getChargeStandardBindCount($where = [],$whereOr=[])
    {
        $db_house_new_charge_standard_bind = new HouseNewChargeStandardBind();
        $count = $db_house_new_charge_standard_bind->getCount($where,$whereOr);
        return $count;
    }

    /**
     * 删除房间/车位绑定消费标准
     * @param array $where
     * @return bool
     * @author lijie
     * @date_time 2021/06/17
     */
    public function delChargeStandardBind($where = [])
    {
        $db_house_new_charge_standard_bind = new HouseNewChargeStandardBind();
        $res = $db_house_new_charge_standard_bind->delOne($where);
        return $res;
    }


    /**
     *获取作废订单
     * @author: liukezhu
     * @date : 2021/6/17
     */
    public function getCancelOrder($where = [], $where1 = '', $field = true, $page = 1, $limit = 10,$order='',$menus=[])
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $db_house_new_charge_project = new HouseNewChargeProject();
        $db_village_info = new HouseVillageInfo();

        $village_id = 0;
        $is_online = 0;
        $room_flag=0;
        $where_summary = [];
        $check_level_info=array();
        $isinsummary=false;
        if (!empty($where)) {
            if(isset($where['check_level_info'])){
                $check_level_info=$where['check_level_info'];
                unset($where['check_level_info']);
            }
            foreach ($where as $k => &$va) {
                if ($va[0] == 'record_status') {
                    $record_status = $va[2];
                    unset($where[$k]);
                }
                if ($va[0] == 'o.village_id') {
                    $village_id = $va[2];
                }
                if ($va[0] == 'o.room_id') {
                    $room_flag=1;
                }
                if ($va[0] == 'o.pay_type') {
                    $pay_type_arr =explode('-',$va[2]);
                    if ($pay_type_arr[0]==1){
                        $va[2]=1;
                        $where_summary[]=['pay_type','=',1];
                       // unset($where[$k]);
                    }elseif($pay_type_arr[0]==2){
                        $where[]=['o.offline_pay_type','find in set',$pay_type_arr[1]]; //whereFindInSet
                        $va[1]='in';
                        $va[2]=array(2,22);
                    }elseif($pay_type_arr[0]==4){
                        $va[2]=4;
                        $where_summary[]=['online_pay_type','=',$this->pay_type_arr1[$pay_type_arr[1]]];
                        $where_summary[]=['pay_type','=',4];
                        $is_online = 1;
                      //  unset($where[$k]);
                    }elseif($pay_type_arr[0]==5){
                        $where_summary[]=['online_pay_type','in',['hqpay_wx','hqpay_al']];
                        $isinsummary=true;
                        unset($where[$k]);
                    }
                }
                if ($va[0] == 'o.is_online' && $va[2] == 1) {
                    $is_online = 1;
                }
            }
            $where = array_values($where);
        }
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $where_summary[] = ['is_paid', '=', 1];
        $where_summary[] = ['village_id', '=', $village_id];
        $summary_list = $db_house_new_pay_order_summary->getLists($where_summary, '*');
        $sumMoney=$db_house_new_pay_order_summary->sumMoney(['is_paid'=>1,'village_id'=>$village_id,'pay_type'=>4]);
        $sumRefundMoney=$db_house_new_pay_order_summary->sumRefundMoney(['is_paid'=>1,'village_id'=>$village_id,'pay_type'=>4]);
        if (!empty($summary_list)) {
            $summary_list = $summary_list->toArray();
            if (!empty($summary_list)) {
                foreach ($summary_list as $val) {
                     $summary_arr[]=$val['summary_id'];
                }
            }
        }
        $db_house_new_offline_pay = new HouseNewOfflinePay();
        $where_pay = [];
        $pay_list = $db_house_new_offline_pay->getList($where_pay, '*');
        $payList = [];
        if (!empty($pay_list)) {
            $pay_list = $pay_list->toArray();
            if (!empty($pay_list)) {
                foreach ($pay_list as $vv) {
                    $payList[$vv['id']] = $vv['name'];
                }
            }
        }
        if (isset($summary_arr)&&!empty($summary_arr)){
            $where[]=['o.summary_id','in',$summary_arr];
        }elseif($isinsummary){
            $where[]=['o.summary_id','in',array()];
        }
        if ($is_online == 1&&(!isset($summary_arr)||empty($summary_arr))){
            $data['list'] = [];
            $data['total_limit'] = $limit;
            $data['count'] = 0;
            $data['sumMoney'] = $sumMoney-$sumRefundMoney;
            $data['sumMoney'] =formatNumber($data['sumMoney'],2,1);
            return $data;
        }

        // 有房间ID，就不查询有车场ID的 对应原1945行条件
       /* if($room_flag == 1){
            $where[] = ['o.position_id','=',''];
        }*/
        $record = $db_house_village_detail_record->getList([['order_type','=',2]],'order_id');
        $record_order = [0];
        if(!empty($record)){
            $record_order = array_column($record,'order_id');
            if (isset($record_status) && $record_status == 1) {
                $where[]=['o.order_id','in',$record_order];
            } elseif (isset($record_status) && $record_status == 2) {
                $where[]=['o.order_id','not in',$record_order];
            }
        }else{
            if (isset($record_status) && $record_status == 1) {
                $where[]=['o.order_id','in',$record_order];
            } elseif (isset($record_status) && $record_status == 2) {
                $where[]=['o.order_id','not in',$record_order];
            }
        }
        $village_info_config = $db_village_info->getOne([['village_id','=',$village_id]],'print_number_times');

        $is_allow_print=true;
        if(!empty($menus) && in_array(111182,$menus)){
            $is_allow_print=false;
        }
        //print_r($where);die;
        $list = $db_house_new_pay_order->getCancelOrder($where, $where1, $field, $page, $limit,$order);
        if ($list) {
            $list = $list->toArray();
            if(!empty($list)){

		 $digit_info=array();
                if(empty($digit_info)){
                    $sumMoney = formatNumber($sumMoney,2,1);
                    $sumRefundMoney= formatNumber($sumRefundMoney,2,1);
                }else{
                    $sumMoney = formatNumber($sumMoney,$digit_info['other_digit'],$digit_info['type']);
                    $sumRefundMoney = formatNumber($sumRefundMoney,$digit_info['other_digit'],$digit_info['type']);
                }
                foreach ($list as $k => &$v) {
                    $is_button=false;
                    if(isset($village_info_config['print_number_times']) && (intval($village_info_config['print_number_times']) == 0)){
                        if($is_allow_print && !empty($record_order) && in_array($v['order_id'],$record_order)){
                            $is_button=true;
                        }
                    }
                    $v['is_button']=$is_button;
                    $v['pay_money'] = formatNumber($v['pay_money'],2,1);
                    if(isset($v['project_name']) && !empty($v['project_name'])){
                        $v['project_name']=$v['project_name'].'(ID:'.$v['project_id'].')';
                    }

                    if (!empty($summary_list) && !empty($v['summary_id'])) {
                        foreach ($summary_list as $val) {
                            //    print_r($val);
                            $is_online_show = 0;
                            if ($val['summary_id'] == $v['summary_id']) {
                                $pay_time = $val['pay_time'];
                                $pay_type = $val['pay_type'];
                                $offline_pay_type = '';
                                if (!empty($payList) && !empty($val['offline_pay_type'])) {
                                    if(strpos($val['offline_pay_type'],',')>0){
                                        $offline_pay_type_arr=explode(',',$val['offline_pay_type']);
                                        foreach ($offline_pay_type_arr as $opay){
                                            if(isset($payList[$opay])){
                                                $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                                            }
                                        }
                                    }else{
                                        $offline_pay_type = isset($payList[$val['offline_pay_type']]) ? $payList[$val['offline_pay_type']]:'';
                                    }

                                }
                                $online_pay_type = $val['online_pay_type'];
                                if ($val['pay_type'] == 4 && $is_online == 1) {
                                    if (empty($val['online_pay_type'])) {
                                        $is_online_show = 1;
                                    }
                                }
                                $order_no=$val['paid_orderid'];
                                break;
                            }

                        }
                    }
                    /* if (!empty($is_online_show) && isset($is_online_show)) {
                         unset($list[$k]);
                         continue;
                     }*/
                    //  print_r($pay_type);exit;
                    $v['pay_type_way']=0;
                    if (isset($pay_type) && !empty($pay_type)) {
                        $v['pay_type_way']=$pay_type;
                        if (in_array($pay_type, [2, 22])) {
                            $v['pay_type'] = $this->pay_type[$pay_type] . '-' . $offline_pay_type;
                        } elseif (in_array($pay_type, [1, 3])) {
                            $v['pay_type'] = $this->pay_type[$pay_type];
                        } elseif ($pay_type == 4) {
                            if (empty($online_pay_type)) {
                                if ($v['village_balance']>0){
                                    $online_pay_type1 = '小区住户余额支付';
                                    if(isset($v['order_type_flag']) && ($v['order_type_flag']=='cold_water_balance')){
                                        $online_pay_type1 = '冷水余额';
                                    }elseif(isset($v['order_type_flag']) && ($v['order_type_flag']=='hot_water_balance')){
                                        $online_pay_type1 = '热水余额';
                                    }elseif(isset($v['order_type_flag']) && ($v['order_type_flag']=='electric_balance')){
                                        $online_pay_type1 = '电费余额';
                                    }
                                }else{
                                    $online_pay_type1 = '余额支付';
                                }
                               
                            } else {
                                $online_pay_type1 = $this->getPayTypeMsg($online_pay_type);
                            }
                            $v['pay_type'] = $this->pay_type[$pay_type] . '-' . $online_pay_type1;
                            if (isset($order_no)&&!empty($order_no)){
                                $v['order_no']=$order_no;
                            }
                        }
                    }
                    //   print_r($v['pay_type']);
                    if (isset($v['update_time']) && $v['update_time'] > 1) {
                        $v['updateTime'] = date('Y-m-d H:i:s', $v['update_time']);
                    }
                    if (isset($pay_time) && $pay_time > 1) {
                        $v['pay_time'] = date('Y-m-d H:i:s', $pay_time);
                    } else {
                        if (isset($v['pay_time']) && $v['pay_time'] > 1) {
                            $v['pay_time'] = date('Y-m-d H:i:s', $v['pay_time']);
                        }
                    }
                    /*
                    $project_info = $db_house_new_charge_project->getOne(['id'=>$v['project_id']]);
                    if($project_info && !$project_info->isEmpty()){
                        $project_info = $project_info->toArray();
                        if (!empty($project_info)&&$project_info['type']==1){
                            $v['service_start_time']=1;
                            $v['service_end_time']=1;
                        }
                    }
                    */
                    if (isset($v['service_start_time']) && $v['service_start_time'] > 1) {
                        $v['service_start_time'] = date('Y-m-d', $v['service_start_time']);
                    }else{
                        $v['service_start_time'] = '--';
                    }
                    if (isset($v['service_end_time']) && $v['service_end_time'] > 1) {
                        $v['service_end_time'] = date('Y-m-d', $v['service_end_time']);
                    }else{
                        $v['service_end_time'] = '--';
                    }

                    $record = $db_house_village_detail_record->getOne(['order_id' => $v['order_id'],'order_type'=>2]);
                    /*if (isset($record_status) && $record_status == 1) {
                        if (empty($record)) {
                            unset($list[$k]);
                            continue;
                        } else {
                            $v['record_status'] = '已开票';
                        }
                    } elseif (isset($record_status) && $record_status == 2) {
                        if (empty($record)) {
                            $v['record_status'] = '未开票';
                        } else {
                            unset($list[$k]);
                            continue;
                        }
                    } else {
                        if (empty($record)) {
                            $v['record_status'] = '未开票';
                        } else {
                            $v['record_status'] = '已开票';
                        }
                    }*/

                    if (empty($record)) {
                        $v['record_status'] = '未开票';
                    } else {
                        $v['record_status'] = '已开票';
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
                        $v['refund_money'] =formatNumber($v['refund_money'],2,1);
                    }
                    if (empty($v['pay_bind_name'])){
                        $v['pay_bind_name']='无';
                    }
                    if (empty($v['pay_bind_phone'])){
                        $v['pay_bind_phone']='无';
                    }

                    $number = '';
                    /*if ($room_flag==1&&!empty($v['position_id'])){
                        unset($list[$k]);
                        continue;
                    }*/
                    $v['park_number']='';
                    if (!empty($v['room_id'])) {
                        $numberArr=array('--','--');
                        $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                        if (!empty($room)) {
                            $room = $room->toArray();
                            if (!empty($room)) {
                                $room1 = $room[0];
                                $house_village_service=new HouseVillageService();
                                $number =$house_village_service->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$v['village_id']);
                                $numberArr['0']=$number;
                                // $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                            }
                            if($v['position_id']>0){
                                $v['park_number']=$this->getCarParkingById($v['position_id']);
                                $numberArr['1']=$v['park_number'];
                            }
                            if(!empty($number) || !empty($v['park_number'])){
                                $number=implode(' / ',$numberArr);
                            }
                        }
                    }elseif (!empty($v['position_id'])) {
                        $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                        if (!empty($position_num)) {
                            $position_num = $position_num->toArray();
                            if (!empty($position_num)) {
                                $position_num1 = $position_num[0];
                                if (empty($position_num1['garage_num'])) {
                                    $position_num1['garage_num'] = '临时车库';
                                }
                                $number = $position_num1['garage_num'] . $position_num1['position_num'];
                                $number = '-- / '.$number;
                            }
                        }
                    } 
                    $v['numbers'] = $number;
                    $v['add_time'] = date('Y-m-d', $v['add_time']);
                    $v['my_check_status'] = 0;  //我看到审核状态 1审核中 2审核
                    $v['order_apply_info'] = '';
                    $v['check_status_str'] = '';
                    if (isset($v['check_status']) && $v['check_status'] == 2) {
                        $v['check_status_str'] = '审核中';
                    }
                    //处理审核状态
                    if (isset($v['check_status']) && $v['check_status'] == 2 && !empty($check_level_info)) {
                        $v['my_check_status'] = 1;
                        $houseVillageCheckauthDetailService = new HouseVillageCheckauthDetailService();
                        if (!empty($check_level_info['wid'])) {
                            $checkauthApplyWhere = array('order_id' => $v['order_id'], 'village_id' => $v['village_id'], 'wid' => $check_level_info['wid'], 'apply_id' => $v['check_apply_id']);
                            $checkDetail = $houseVillageCheckauthDetailService->getOneData($checkauthApplyWhere);
                            if (!empty($checkDetail) && $checkDetail['status'] == 0) {
                                $v['my_check_status'] = 2;
                                $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
                                $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $checkDetail['apply_id'], 'order_id' => $v['order_id']]);
                                if ($order_apply && !empty($order_apply['extra_data'])) {
                                    $order_apply_info = json_decode($order_apply['extra_data'], 1);
                                    if ($order_apply_info) {
                                        $order_apply_info['opt_time_str'] = $order_apply_info['opt_time'] > 0 ? date('Y-m-d H:i:s', $order_apply_info['opt_time']) : '';
                                    }
                                    $v['order_apply_info'] = $order_apply_info;
                                }
                            } elseif (!empty($checkDetail) && $checkDetail['status'] == 1) {
                                $v['my_check_status'] = 3;
                            }
                        }

                    } elseif (isset($v['check_status']) && $v['check_status'] == 2) {
                        $v['my_check_status'] = 1;
                    }
                    if($page>0 && isset($v['pay_bind_phone']) && !empty($v['pay_bind_phone'])) {
                        $v['pay_bind_phone'] = phone_desensitization($v['pay_bind_phone']);
                    }
                    $car_type = isset($v['car_type']) ? $v['car_type'] : '';
                    $car_type_txt = (new HouseNewParkingService())->getCarType($car_type);
                    if (!$v['project_name'] && isset($v['car_number']) && $v['car_number']) {
                        $v['project_name'] = $v['car_number'];
                        if ($car_type_txt) {
                            $v['project_name'] .= "（{$car_type_txt}）";
                        }
                    } elseif(isset($v['car_number']) && $v['car_number']) {
                        $v['project_name'] = '[' . $v['car_number'];
                        if ($car_type_txt) {
                            $v['project_name'] .= "（{$car_type_txt}）";
                        }
                        $v['project_name'] .= ']';
                    }
                }
            }

        } else {
            $list = [];
        }
        /*  print_r($list);exit;*/
        $count = $db_house_new_pay_order->getCancelOrderCount($where, $where1);
        $total_pay_money=$this->getNewPayOrderSum($where,$where1,'ROUND(pay_money,2)');
        $total_refund_money=$this->getNewPayOrderSum($where,$where1,'ROUND(refund_money,2)');
        $data['list'] = array_values($list);
        $data['total_limit'] = $limit;
        $data['count'] = $count;
        $data['total_pay_money'] = $total_pay_money;
        $data['total_refund_money'] = $total_refund_money;
        $data['sumMoney'] =  $sumMoney-$sumRefundMoney;
        $data['sumMoney']=formatNumber($data['sumMoney'],2,1);
        return $data;
    }



    /**
     *获取作废订单
     * @author: liukezhu
     * @date : 2021/6/17
     */
    public function getCancelOrderUser($where = [], $where1 = '', $field = true, $page = 1, $limit = 10,$order='')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $village_id = 0;
        $is_online = 0;
        $room_flag=0;
        $where_summary = [];
        if (!empty($where)) {
            foreach ($where as $k => &$va) {
                if ($va[0] == 'record_status') {
                    $record_status = $va[2];
                    unset($where[$k]);
                }
                if ($va[0] == 'o.village_id') {
                    $village_id = $va[2];
                }
                if ($va[0] == 'o.room_id') {
                    $room_flag=1;
                }
                if ($va[0] == 'o.pay_type') {
                    $pay_type_arr =explode('-',$va[2]);
                    if ($pay_type_arr[0]==1){
                        $va[2]=1;
                        $where_summary[]=['pay_type','=',1];
                        unset($where[$k]);
                    }elseif($pay_type_arr[0]==2){
                        $where[]=['o.offline_pay_type','find in set',$pay_type_arr[1]];
                        $va[1]='in';
                        $va[2]=array(2,22);
                    }elseif($pay_type_arr[0]==4){
                        $va[2]=4;
                        $where_summary[]=['online_pay_type','=',$this->pay_type_arr1[$pay_type_arr[1]]];
                        $where_summary[]=['pay_type','=',4];
                        $is_online = 1;
                        unset($where[$k]);
                    }
                }
                if ($va[0] == 'o.is_online' && $va[2] == 1) {
                    $is_online = 1;
                }
            }
            $where = array_values($where);
        }
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $where_summary[] = ['is_paid', '=', 1];
        $where_summary[] = ['village_id', '=', $village_id];
        $summary_list_arr = $db_house_new_pay_order_summary->getColumn($where_summary, '*', 'summary_id');
        $summary_arr      = $db_house_new_pay_order_summary->getColumn($where_summary, 'summary_id');
        $sumMoney = $db_house_new_pay_order_summary->sumMoney(['is_paid'=>1,'village_id'=>$village_id,'pay_type'=>4]);
        $db_house_new_offline_pay = new HouseNewOfflinePay();
        $where_pay = [];
        $pay_list = $db_house_new_offline_pay->getList($where_pay, '*');
        $payList = [];
        if (!empty($pay_list)) {
            $pay_list = $pay_list->toArray();
            if (!empty($pay_list)) {
                foreach ($pay_list as $vv) {
                    $payList[$vv['id']] = $vv['name'];
                }
            }
        }
        if (isset($summary_arr)&&!empty($summary_arr)){
            $where[]=['o.summary_id','in',$summary_arr];
        }
        if ($is_online == 1&&(!isset($summary_arr)||empty($summary_arr))){
            $data['list'] = [];
            $data['total_limit'] = $limit;
            $data['count'] = 0;
            $data['sumMoney'] = $sumMoney;
            return $data;
        }
        
        $list = $db_house_new_pay_order->getCancelOrder($where, $where1, $field, $page, $limit,$order);
        if($list){
            $list = $list->toArray();
        }
        fdump_api([__LINE__,$where, $list, $where_summary, $summary_list_arr, $summary_arr, $sumMoney],'$getCancelOrder');
        if ($list) {
		$digit_info=array();

            if(empty($digit_info)){
                $sumMoney = formatNumber($sumMoney,2,1);
            }else{
                $digit_info['other_digit'] = ($digit_info['other_digit']>2 || empty($digit_info['other_digit'])) && $digit_info['other_digit']!=0?2:$digit_info['other_digit'];
                $sumMoney = formatNumber($sumMoney,$digit_info['other_digit'],$digit_info['type']);
            }
            foreach ($list as $k => &$v) {

                $car_type = isset($v['car_type']) ? $v['car_type'] : '';
                $car_type_txt = (new HouseNewParkingService())->getCarType($car_type);
                if (!$v['project_name'] && isset($v['car_number']) && $v['car_number']) {
                    $v['project_name'] = $v['car_number'];
                    if ($car_type_txt) {
                        $v['project_name'] .= "（{$car_type_txt}）";
                    }
                } elseif(isset($v['car_number']) && $v['car_number']) {
                    $v['project_name'] = '[' . $v['car_number'];
                    if ($car_type_txt) {
                        $v['project_name'] .= "（{$car_type_txt}）";
                    }
                    $v['project_name'] .= ']';
                }
                if(empty($digit_info)){
                    $v['pay_money'] = formatNumber($v['pay_money'],2,1);
                }else{
                    if($v['order_type'] == 'water' || $v['order_type'] == 'electric' || $v['order_type'] == 'gas'){
                        $digit_info['meter_digit'] = $digit_info['meter_digit']>2 || empty($digit_info['meter_digit'])?2:$digit_info['meter_digit'];
                        $v['pay_money'] = formatNumber($v['pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                    }else{
                        $digit_info['other_digit'] = ($digit_info['other_digit']>2 || empty($digit_info['other_digit'])) && $digit_info['other_digit']!=0?2:$digit_info['other_digit'];
                        $v['pay_money'] = formatNumber($v['pay_money'],$digit_info['other_digit'],$digit_info['type']);
                    }
                }
                $summary_id       = isset($v['summary_id']) ? $v['summary_id'] : 0;
                $offline_pay_type = '';
                if (isset($summary_list_arr[$summary_id]) && $summary_list_arr[$summary_id]) {
                    $summary = $summary_list_arr[$summary_id];
                    $pay_time = $summary['pay_time'];
                    $pay_type = $summary['pay_type'];
                    if (!empty($payList) && !empty($summary['offline_pay_type'])) {
                        if (strpos($summary['offline_pay_type'], ',') > 0) {
                            $offline_pay_type_arr = explode(',', $summary['offline_pay_type']);
                            foreach ($offline_pay_type_arr as $opay) {
                                if (isset($payList[$opay])) {
                                    $offline_pay_type .= empty($offline_pay_type) ? $payList[$opay] : '、' . $payList[$opay];
                                }
                            }
                        } else {
                            $offline_pay_type = isset($payList[$summary['offline_pay_type']]) ? $payList[$summary['offline_pay_type']] : '';
                        }

                    }
                    $online_pay_type = $summary['online_pay_type'];
                    if ($summary['pay_type'] == 4 && $is_online == 1) {
                        if (empty($summary['online_pay_type'])) {
                            $is_online_show = 1;
                        }
                    }
                    $order_no = $summary['paid_orderid'];
                }
                if (isset($pay_type) && !empty($pay_type)) {
                    if (in_array($pay_type, [2, 22])) {
                        $v['pay_type'] = $this->pay_type[$pay_type] . '-' . $offline_pay_type;
                    } elseif (in_array($pay_type, [1, 3])) {
                        $v['pay_type'] = $this->pay_type[$pay_type];
                    } elseif ($pay_type == 4) {
                        if (empty($online_pay_type)) {
                            $online_pay_type1 = '余额支付';
                        } else {
                            $online_pay_type1 = $this->getPayTypeMsg($online_pay_type);
                        }
                        $v['pay_type'] = $this->pay_type[$pay_type] . '-' . $online_pay_type1;
                        if (isset($order_no)&&!empty($order_no)){
                            $v['order_no']=$order_no;
                        }
                    }
                }
                //   print_r($v['pay_type']);
                if (isset($v['update_time']) && $v['update_time'] > 1) {
                    $v['updateTime'] = date('Y-m-d H:i:s', $v['update_time']);
                }
                if (isset($pay_time) && $pay_time > 1) {
                    $v['pay_time'] = date('Y-m-d H:i:s', $pay_time);
                } else {
                    if (isset($v['pay_time']) && $v['pay_time'] > 1) {
                        $v['pay_time'] = date('Y-m-d H:i:s', $v['pay_time']);
                    }
                }
                //   print_r($v['pay_time']);
                if (isset($v['service_start_time']) && $v['service_start_time'] > 1) {
                    $v['service_start_time'] = date('Y-m-d', $v['service_start_time']);
                }else{
                    $v['service_start_time'] = '--';
                }
                if (isset($v['service_end_time']) && $v['service_end_time'] > 1) {
                    $v['service_end_time'] = date('Y-m-d', $v['service_end_time']);
                }else{
                    $v['service_end_time'] = '--';
                }

                $record = $db_house_village_detail_record->getOne(['order_id' => $v['order_id'],'order_type'=>2]);
                if (isset($record_status) && $record_status == 1) {
                    if (empty($record)) {
                        unset($list[$k]);
                        continue;
                    } else {
                        $v['record_status'] = '已开票';
                    }
                } elseif (isset($record_status) && $record_status == 2) {
                    if (empty($record)) {
                        $v['record_status'] = '未开票';
                    } else {
                        unset($list[$k]);
                        continue;
                    }
                } else {
                    if (empty($record)) {
                        $v['record_status'] = '未开票';
                    } else {
                        $v['record_status'] = '已开票';
                    }
                }
                if ($v['is_refund'] == 1) {
                    $v['order_status'] = '正常';
                } else {
                    if ($v['refund_money'] == $v['pay_money']) {
                        $v['order_status'] = '已退款';
                    } else {
                        $v['order_status'] = '部分退款';
                    }
                }
                if (empty($v['pay_bind_name'])){
                    $v['pay_bind_name']='无';
                }
                if (empty($v['pay_bind_phone'])){
                    $v['pay_bind_phone']='无';
                }

                $number = '';
                if ($room_flag==1&&!empty($v['position_id'])){
                    unset($list[$k]);
                    continue;
                }
                if (!empty($v['position_id'])) {
                    $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                    if (!empty($position_num)) {
                        $position_num = $position_num->toArray();
                        if (!empty($position_num)) {
                            $position_num1 = $position_num[0];
                            if (empty($position_num1['garage_num'])) {
                                $position_num1['garage_num'] = '临时车库';
                            }
                            $number = $position_num1['garage_num'] . $position_num1['position_num'];
                        }
                    }
                } elseif (!empty($v['room_id'])) {
                    $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                    if (!empty($room)) {
                        $room = $room->toArray();
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $house_village_service=new HouseVillageService();
                            $number =$house_village_service->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$v['village_id']);
                            // $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                        }
                    }
                }
                $v['numbers'] = $number;
                /* print_r($v);
                  print_r($list[$k]);*/
            }
        } else {
            $list = [];
        }
        /*  print_r($list);exit;*/
        $count = $db_house_new_pay_order->getCancelOrderCount($where, $where1);

        $data['list'] = array_values($list);
        $data['total_limit'] = $limit;
        $data['count'] = $count;
        $data['sumMoney'] = $sumMoney;
        return $data;
    }
    /**
     *获取作废订单
     * @author: liukezhu
     * @date : 2021/6/17
     */
    public function getCancelOrder1($where = [], $where1 = '', $field = true, $page = 1, $limit = 10,$order='')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $room_flag=0;
        if (!empty($where)) {
            foreach ($where as $k => &$va) {
                if ($va[0] == 'o.room_id') {
                    $room_flag=1;
                }
            }
        }

        $list = $db_house_new_pay_order->getCancelOrder($where, $where1, $field, $page, $limit,$order);
        if ($list) {
            $list = $list->toArray();
            if ($list){

		$digit_info=array();
                foreach ($list as $k => &$v) {
                    
                    if(empty($digit_info)){
                        $v['total_money']= formatNumber($v['total_money'],2,1);
                    }else{
                        if($v['order_type'] == 'water' || $v['order_type'] == 'electric' || $v['order_type'] == 'gas'){
                            $v['total_money']= formatNumber($v['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                        }else{
                            $v['total_money'] = formatNumber($v['total_money'],$digit_info['other_digit'],$digit_info['type']);
                        }
                    }
                    if(isset($v['project_name']) && !empty($v['project_name'])){
                        $v['project_name']=$v['project_name'].'(ID:'.$v['project_id'].')';
                    }
                    if (isset($v['update_time']) && $v['update_time'] > 1) {
                        $v['updateTime'] = date('Y-m-d H:i:s', $v['update_time']);
                    }
                    if (isset($pay_time) && $pay_time > 1) {
                        $v['pay_time'] = date('Y-m-d H:i:s', $pay_time);
                    } else {
                        if (isset($v['pay_time']) && $v['pay_time'] > 1) {
                            $v['pay_time'] = date('Y-m-d H:i:s', $v['pay_time']);
                        }
                    }
                    if (isset($v['service_start_time']) && $v['service_start_time'] > 1) {
                        $v['service_start_time'] = date('Y-m-d', $v['service_start_time']);
                    }else{
                        $v['service_start_time'] = '--';
                    }
                    if (isset($v['service_end_time']) && $v['service_end_time'] > 1) {
                        $v['service_end_time'] = date('Y-m-d', $v['service_end_time']);
                    }else{
                        $v['service_end_time'] = '--';
                    }
                    if ($room_flag==1&&!empty($v['position_id'])){
                        unset($list[$k]);
                        continue;
                    }
                    $number = '';
                    $v['park_number']='';
                    if (!empty($v['room_id'])) {
                        $numberArr=array('--','--');
                        $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                        if (!empty($room)) {
                            $room = $room->toArray();
                            if (!empty($room)) {
                                $room1 = $room[0];
                                $house_village_service=new HouseVillageService();
                                $number =$house_village_service->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$v['village_id']);
                                $numberArr['0']=$number;
                               //  $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                            }
                        }
                        if($v['position_id']>0){
                            $v['park_number']=$this->getCarParkingById($v['position_id']);
                            $numberArr['0']=$v['park_number'];
                        }
                        if(!empty($number) || !empty($v['park_number'])){
                            $number=implode(' / ',$numberArr);
                        }
                    } elseif (!empty($v['position_id'])) {
                        $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                        if (!empty($position_num)) {
                            $position_num = $position_num->toArray();
                            if (!empty($position_num)) {
                                $position_num1 = $position_num[0];
                                if (empty($position_num1['garage_num'])) {
                                    $position_num1['garage_num'] = '临时车库';
                                }
                                $number = '-- / '.$position_num1['garage_num'] . $position_num1['position_num'];
                            }
                        }
                    }
                    $v['numbers'] = $number;
                    if($page>0 && isset($v['user_phone']) && !empty($v['user_phone'])){
                        $v['user_phone']=phone_desensitization($v['user_phone']);
                    }
                }
            }

        } else {
            $list = [];
        }
        $count = $db_house_new_pay_order->getCancelOrderCount($where, $where1);
        $cancel_total_money=$this->getNewPayOrderSum($where,$where1,'total_money');
        $data['list'] = array_values($list);
        $data['total_limit'] = $limit;
        $data['count'] = $count;
        $data['cancel_total_money'] = $cancel_total_money;
        return $data;
    }


    /**
     * 根据分组获取账单列表
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param string $group
     * @return mixed
     * @author lijie
     * @date_time 2021/06/25
     */
    public function getOrderListByGroup($where = [], $field = true, $page = 0, $limit = 15, $order = 'o.order_id DESC', $group = 'o.room_id,o.position_id')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $service_house_village_user_bind_service = new HouseVillageUserBindService();
        $data = $db_house_new_pay_order->getListByGroup($where, $field, $page, $limit, $order, $group);
        $total_money = 0.00;
        if (!empty($data)) {
            $data = $data->toArray();
            if (!empty($data)) {
                $db_house_property_digit_service = new HousePropertyDigitService();
                $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$data[0]['property_id']]);

                foreach ($data as $k=>&$val) {
                    if (empty($val['position_id']) && empty($val['room_id'])) {
                        unset($data[$k]);
                        continue;
                    }
                    $number = '';
                    $val['position_num'] = '';
                    if (!empty($val['room_id'])) {
                        $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $val['room_id']]);
                        $numberArr=array('--','--');
                        if (!empty($room)) {
                            $room = $room->toArray();
                            if (!empty($room)) {
                                $room1 = $room[0];
                                $house_village_service=new HouseVillageService();
                                $number =$house_village_service->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$data[0]['property_id']['village_id']);
                                //  $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                                $val['room'] = $number;
                                $numberArr['0']=$number;
                            }
                        }
                        $bind_info = $service_house_village_user_bind_service->getBindInfo([['vacancy_id','=',$val['room_id']],['status','=',1],['type','in','0,3']],'name,phone');
                        $val['name'] = isset($bind_info['name'])?$bind_info['name']:(!empty($val['name'])?$val['name']:'无');
                        $val['phone'] = isset($bind_info['phone'])?$bind_info['phone']:(!empty($val['phone'])?$val['phone']:'无');
                        if($val['position_id']>0){
                            $val['position_num']=$this->getCarParkingById($val['position_id']);
                            $numberArr['1']=$val['position_num'];
                        }
                        if($number || $val['position_num']){
                            $number=implode(' / ',$numberArr);
                        }
                    }else if (!empty($val['position_id'])){
                        $position_num = $db_house_village_parking_position->getLists(['position_id' => $val['position_id']], 'pp.position_num,pg.garage_num', 0);
                        //   print_r($position_num);exit;
                        if (!empty($position_num)) {
                            $position_num = $position_num->toArray();
                            if (!empty($position_num)) {
                                $position_num1 = $position_num[0];
                                if (empty($position_num1['garage_num'])) {
                                    $position_num1['garage_num'] = '临时车库';
                                }
                                $val['position_num'] = $position_num1['garage_num'] . '-' . $position_num1['position_num'];
                                $number='-- / '.$val['position_num'];
                            }
                        }
                        $service_house_village_parking_service = new HouseVillageParkingService();
                        $bind_position  = $service_house_village_parking_service->getBindPosition(['position_id'=>$val['position_id']]);
                        if($bind_position){
                            $bind_info = $service_house_village_user_bind_service->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'name,phone');
                            $val['name'] = isset($bind_info['name'])?$bind_info['name']:'无';
                            $val['phone'] = isset($bind_info['phone'])?$bind_info['phone']:'无';
                        }
                    }

                    $val['total_money'] = formatNumber($val['total_money'],2,1);
                    /*
                    if(empty($digit_info)){
                        $val['total_money'] = formatNumber($val['total_money'],2,1);
                    }else{
                        $val['total_money'] = formatNumber($val['total_money'],$digit_info['other_digit'],$digit_info['type']);
                    }
                    */
                    $val['number'] = $number;
                    $tot_money = $val['total_money'];
                    $val['total_money'] =$val['total_money'].'元';
                    $total_money += $tot_money;
                    if($page>0 && isset($val['phone']) && !empty($val['phone'])){
                        $val['phone']=phone_desensitization($val['phone']);
                    }
                }
            }
        }

        return ['list'=>array_slice($data,0),'total_money'=>$total_money];
    }


    /**
     * 查询订单详情
     * @author:zhubaodi
     * @date_time: 2021/6/25 14:45
     */
    public function getPayOrderInfo($order_id,$hidephone=false)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $db_house_new_charge_number = new HouseNewChargeNumber();
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $db_house_new_pay_order_refund = new HouseNewPayOrderRefund();
        $db_admin = new HouseAdmin();
        $where[] = ['order_id', '=', $order_id];
        $data = $db_house_new_pay_order->getOne($where, 'o.*,p.name as project_name,p.subject_id,r.bill_create_set,p.type,r.charge_name');
        if ($data && !is_array($data)) {
            $data = $data->toArray();
        }
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $data['showArr'] = [];
        if (!empty($data)) {
            $third_import_data_switch_judge = (new ConfigCustomizationService())->getThirdImportDataSwitch();
            if ($third_import_data_switch_judge && isset($data['village_id']) && isset($data['order_id'])) {
                $showArrInfo = (new ImportExcelService())->getThirdImportOrderInfo($data['village_id'], $data['order_id']);
                if (isset($showArrInfo['showArr']) && $showArrInfo['showArr']) {
                    $data['showArr'] = $showArrInfo['showArr'];
                }
            }
	    $digit_info =[];
            if(isset($data['check_apply_id']) && ($data['check_apply_id']>0) && ($data['check_status']==4) && $data['pay_time']>100){
                $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();
                $order_refund_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $data['check_apply_id'],'order_id'=>$data['order_id'],'xtype'=>'order_refund','village_id'=>$data['village_id']]);
                if(empty($order_refund_apply)){
                    $data['check_apply_id']=0;
                }
            }
            if (empty($data['refund_type']) ) {
                $data['refund_type'] ='无';
            }elseif($data['refund_type']==1){
                $data['refund_type'] ='仅退款，不还原账单';
            }elseif($data['refund_type']==2){
                $data['refund_type'] ='退款且还原账单';
            }
            if ($data['pay_time'] > 1) {
                $data['pay_time'] = date('Y-m-d H:i:s', $data['pay_time']);
            }
            if ($data['service_start_time'] > 1) {
                $data['service_start_time'] = date('Y-m-d', $data['service_start_time']);
            }else{
                $data['service_start_time']='无';
            }
            if ($data['service_end_time'] > 1) {
                $data['service_end_time'] = date('Y-m-d', $data['service_end_time']);
            }else{
                $data['service_end_time'] ='无';
            }
            $data['subject_name'] = '';
            $subjectinfo = $db_house_new_charge_number->get_one(['id' => $data['subject_id']]);
            if (!empty($subjectinfo)) {
                $data['subject_name'] = $subjectinfo['charge_number_name'];
            }
            if (!empty($data['summary_id'])){
                $summary_info= $db_house_new_pay_order_summary->getOne(['summary_id' => $data['summary_id']]);
                if (!empty($summary_info)){
                    $data['order_serial']=$summary_info['paid_orderid'];
                    $data['order_no']=$summary_info['order_no'];
                    $data['remark']=$summary_info['remark'];
                }
            }
            $data['pay_type_way']=$data['pay_type'];
            if (isset($summary_info['pay_type']) && !empty($summary_info['pay_type'])) {
                if ($data['pay_type'] == 2 || $data['pay_type'] == 22) {
                    $db_house_new_offline_pay = new HouseNewOfflinePay();
                    $offline_pay_type='';
                    if(strpos($data['offline_pay_type'],',')>0){
                        $offline_pay_type_arr=explode(',',$data['offline_pay_type']);
                        $where_pay_arr=array();
                        $where_pay_arr[]=['id','in',$offline_pay_type_arr];
                        $pay_list = $db_house_new_offline_pay->getList($where_pay_arr, '*');
                        $payList = [];
                        if (!empty($pay_list)) {
                            $pay_list = $pay_list->toArray();
                            if (!empty($pay_list)) {
                                foreach ($pay_list as $vv) {
                                    $payList[$vv['id']] = $vv['name'];
                                }
                            }
                        }
                        foreach ($offline_pay_type_arr as $opay){
                            if(isset($payList[$opay])){
                                $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                            }
                        }

                    }else{
                        $offline_pay = $db_house_new_offline_pay->get_one(['id'=>$data['offline_pay_type']]);
                        if (!empty($offline_pay) && !$offline_pay->isEmpty()){
                            $offline_pay_type=$offline_pay['name'];
                        }
                    }

                    $data['pay_type'] = $this->pay_type[$data['pay_type']] . '-' . $offline_pay_type;
                } elseif (in_array($summary_info['pay_type'], [1, 3])) {
                    $data['pay_type'] = $this->pay_type[$summary_info['pay_type']];
                } elseif ($summary_info['pay_type'] == 4) {
                    if (empty($summary_info['online_pay_type'])) {
                        $online_pay_type1 = '余额支付';
                    } else {
                        $online_pay_type1 = $this->getPayTypeMsg($summary_info['online_pay_type']);
                    }
                    $data['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $online_pay_type1;
                }
            }
            if(in_array($data['order_type'],['water','electric','gas'])&&!empty($data['meter_reading_id'])){
                $db_house_village_meter_reading=new HouseVillageMeterReading();
                $meter_addtime=$db_house_village_meter_reading->getOne(['id'=>$data['meter_reading_id']],'opt_meter_time,add_time');
                if (!empty($meter_addtime)){
                    if (!empty($meter_addtime['opt_meter_time'])){
                        $data['opt_meter_time']=date('Y-m-d H:i:s',$meter_addtime['opt_meter_time']);
                    } elseif (empty($meter_addtime['opt_meter_time'])||!empty($meter_addtime['add_time'])){
                        $data['opt_meter_time']=date('Y-m-d H:i:s',$meter_addtime['add_time']);
                    }
                }
            }
            $data['ammeter'] = bcsub(strval($data['now_ammeter']),strval($data['last_ammeter']),2);
            $admininfo = $db_admin->getOne(['id' => $data['role_id']]);
            $data['role_name'] = '';
            if (!empty($admininfo)) {
                if (!empty($admininfo['realname'])){
                    $data['role_name'] = $admininfo['realname'];
                }else{
                    $data['role_name'] = $admininfo['account'];
                }
            }
            $record = $db_house_village_detail_record->getOne(['order_id' => $data['order_id']]);
            if (empty($record)) {
                $data['record_status'] = '未开票';
            } else {
                $data['record_status'] = '已开票';
            }
            if ($data['is_refund'] == 1) {
                $data['refund_status'] = '正常';
            } else {
                if ($data['refund_money'] == $data['pay_money']) {
                    $data['refund_status'] = '已退款';
                } else {
                    $data['refund_status'] = '部分退款';
                }
            }
            $data['pay_money_real'] = $data['pay_money'] - $data['refund_money'];
            $data['is_split_order']=1;
            if($is_grapefruit_prepaid==1 && $data['diy_type']==1 && !empty($data['diy_content']) && strpos($data['diy_content'],'预缴优惠')!==false){
                $data['diy_type'] ='折扣';
               $discount_money=$data['modify_money']-$data['pay_money'];
               $discount_money=round($discount_money,2);
               if($discount_money>0){
                   $data['diy_type'] .='（折扣金额：'.$discount_money.'元）';
               }
            }else{
                if ($data['is_prepare']==2){
                    $data['diy_type'] ='无';
                }else{
                    if (empty($data['diy_type'])){
                        $data['diy_type'] ='无';
                    }else{
                        $data['diy_type'] = $this->diy_type[$data['diy_type']];
                    }
                }
            }
            $number = '';
            $data['children_arr_info']='';
            $data['park_number']='--';
           if (!empty($data['room_id'])) {
                $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $data['room_id']]);
                if (!empty($room)) {
                    $room = $room->toArray();
                    if (!empty($room)) {
                        $room1 = $room[0];
                        //   $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                        $house_village_service=new HouseVillageService();
                        $number =$house_village_service->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$data['village_id']);
    
                    }
                }
               if($data['position_id']>0){
                   $data['park_number']=$this->getCarParkingById($data['position_id']);
               }

           } elseif (!empty($data['position_id'])) {
                $position_num = $db_house_village_parking_position->getLists(['position_id' => $data['position_id']], 'pp.children_type,pp.position_num,pg.garage_num', 0);
                if (!empty($position_num)) {
                    $position_num = $position_num->toArray();
                    if (!empty($position_num)) {
                        $position_num1 = $position_num[0];
                        if (empty($position_num1['garage_num'])) {
                            $position_num1['garage_num'] = '临时车库';
                        }
                        $data['park_number'] = $position_num1['garage_num'] . $position_num1['position_num'];
                        $number='--';
                        //查询子车位信息
                        if ($position_num1['children_type']==1){
                            $service_house_village_parking = new HouseVillageParkingService();
                            $children_arr=$service_house_village_parking->getChildrenPositionList(['village_id'=>$data['village_id'],'position_id'=>$data['position_id']]);
                            if (isset($children_arr)&&!empty($children_arr['children_arr_info'])){
                                $data['children_arr_info']=$children_arr['children_arr_info'];
                            }
                        }

                    }
                }
            }
            $data['numbers'] = !empty($number) ? $number:'--';
            if(1||empty($digit_info)){
                $data['total_money']= formatNumber($data['total_money'],2,1).'元';
                $data['deposit_money']= formatNumber($data['deposit_money'],2,1).'元';
                if (empty($data['modify_reason'])){
                    $data['modify_money']='无';
                    $data['modify_reason']='无';
                }else{
                    $data['modify_money']=formatNumber($data['modify_money'],2,1).'元';
                }
                if(isset($data['village_balance']) && $data['village_balance']>0){
                    $data['system_balance']=$data['system_balance']+$data['village_balance'];
                }
                $data['pay_amount_points']=formatNumber($data['pay_amount_points']/100,2,1).'元';
                $data['system_balance']=formatNumber($data['system_balance'],2,1).'元';
                $data['score_deducte']=formatNumber($data['score_deducte'],2,1).'元';
                $data['score_used_count']=formatNumber($data['score_used_count'],2,1);


                $data['pay_money']=formatNumber($data['pay_money'],2,1).'元';
                $data['late_payment_money']=formatNumber($data['late_payment_money'],2,1).'元';
                $data['prepare_pay_money']=formatNumber($data['prepare_pay_money'],2,1).'元';
                $data['refund_money']=formatNumber($data['refund_money'],2,1).'元';
                $data['pay_money_real']=formatNumber($data['pay_money_real'],2,1).'元';

            }else{
                //没有意义 这里处理的
                if($data['order_type'] == 'water' || $data['order_type'] == 'electric' || $data['order_type'] == 'gas'){
                    $data['total_money']= formatNumber($data['total_money'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['deposit_money']= formatNumber($data['deposit_money'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    if (empty($data['modify_reason'])){
                        $data['modify_money']='无';
                        $data['modify_reason']='无';
                    }else{
                        $data['modify_money']=formatNumber($data['modify_money'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    }

                    $data['pay_amount_points']=formatNumber($data['pay_amount_points']/100,$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['system_balance']=formatNumber($data['system_balance'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['score_deducte']=formatNumber($data['score_deducte'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['score_used_count']=formatNumber($data['score_used_count'],$digit_info['meter_digit'],$digit_info['type']);


                    $data['pay_money']=formatNumber($data['pay_money'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['late_payment_money']=formatNumber($data['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['prepare_pay_money']=formatNumber($data['prepare_pay_money'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['refund_money']=formatNumber($data['refund_money'],$digit_info['meter_digit'],$digit_info['type']).'元';
                    $data['pay_money_real']=formatNumber($data['pay_money_real'],$digit_info['meter_digit'],$digit_info['type']).'元';

                }else{
                    $data['deposit_money']= formatNumber($data['deposit_money'],$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['total_money']= formatNumber($data['total_money'],$digit_info['other_digit'],$digit_info['type']).'元';
                    if (empty($data['modify_reason'])){
                        $data['modify_money']='无';
                        $data['modify_reason']='无';
                    }else{
                        $data['modify_money']=formatNumber($data['modify_money'],$digit_info['other_digit'],$digit_info['type']).'元';
                    }
                    $data['pay_amount_points']=formatNumber($data['pay_amount_points']/100,$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['system_balance']=formatNumber($data['system_balance'],$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['score_deducte']=formatNumber($data['score_deducte'],$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['score_used_count']=formatNumber($data['score_used_count'],$digit_info['other_digit'],$digit_info['type']);

                    $data['pay_money']=formatNumber($data['pay_money'],$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['late_payment_money']=formatNumber($data['late_payment_money'],$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['prepare_pay_money']=formatNumber($data['prepare_pay_money'],$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['refund_money']=formatNumber($data['refund_money'],$digit_info['other_digit'],$digit_info['type']).'元';
                    $data['pay_money_real']=formatNumber($data['pay_money_real'],$digit_info['other_digit'],$digit_info['type']).'元';
                }
            }
           // $data['total_money']=$data['total_money'].'元';
            if($data['type'] == 2){
                if(empty($data['service_month_num'])){
                    $data['service_month_num'] = 1;
                }
                if ($data['bill_create_set']==1){
                    $data['service_month_num']=$data['service_month_num'].'天';
                }elseif ($data['bill_create_set']==2){
                    $data['service_month_num']=$data['service_month_num'].'个月';
                }elseif ($data['bill_create_set']==3){
                    $data['service_month_num']=$data['service_month_num'].'年';
                }else{
                    $data['service_month_num']=$data['service_month_num'].'';
                }
                if($data['is_prepare']==1){
                    $data['prepare_month_num'] = $data['service_month_num'];
                }else{
                    $data['prepare_month_num'] = 0;
                }
            }
            if (empty($data['diy_content'])){
                $data['diy_content']='无优惠';
            }
            $print_template_service = new PrintTemplateService();
            $orderPrintNumber=$print_template_service->getOrderPrintNumber($data['village_id'],$order_id);
            $data['print_no']='';
            if($orderPrintNumber){
                $print_no_arr=array();
                foreach ($orderPrintNumber as $pvv){
                    $print_no_arr[]=sprintf('%07s',$pvv['print_number']);;
                }
                $data['print_no']=implode('，',$print_no_arr);
            }
            if($hidephone && isset($data['pay_bind_phone']) && !empty($data['pay_bind_phone'])){
                $data['pay_bind_phone']=phone_desensitization($data['pay_bind_phone']);
            }
        }
        if (isset($data['parking_num']) && $data['parking_num']>0) {
            $data['parking_num_txt'] = $data['parking_num'];
        }
        $car_type = isset($data['car_type']) ? $data['car_type'] : '';
        $car_type_txt = (new HouseNewParkingService())->getCarType($car_type);
        if (!$data['project_name'] && isset($data['car_number']) && $data['car_number']) {
            $data['project_name'] = $data['car_number'];
            if ($car_type_txt) {
                $data['project_name'] .= "（{$car_type_txt}）";
            }
        } elseif(isset($data['car_number']) && $data['car_number']) {
            $data['project_name'] = '[' . $data['car_number'];
            if ($car_type_txt) {
                $data['project_name'] .= "（{$car_type_txt}）";
            }
            $data['project_name'] .= ']';
        }
        //订单创建时间
        $data['add_time'] = $data['add_time'] ? date('Y-m-d H:i:s',$data['add_time']) : '';
        return $data;
    }


    /**
     * 查询退款纪录
     * @author:zhubaodi
     * @date_time: 2021/6/25 19:12
     */
    public function getRefundList($order_id, $page, $limit)
    {
        $db_house_new_pay_order = new HouseNewPayOrderRefund();
        $db_house_new_pay_order1 = new HouseNewPayOrder();
         $db_admin = new HouseAdmin();
        $where[] = ['order_id', '=', $order_id];
        $page = empty($page) ? 1 : $page;
        $orderInfo=$db_house_new_pay_order1->get_one($where);
        $count = $db_house_new_pay_order->getCount($where);
        $list = $db_house_new_pay_order->getList($where, true, $page, $limit);
        if (!empty($list)) {
            $list = $list->toArray();
            if (!empty($list)) {

		$digit_info=[];
                // 退款总金额
                $refund_money_total = 0;
                foreach ($list as &$v) {
                    $v['add_time'] = date('Y-m-d', $v['add_time']);
                    $admininfo = $db_admin->getOne(['id' => $v['role_id']]);
                    $v['role_name'] = '';
                    if (!empty($admininfo)) {
                        if (!empty($admininfo['realname'])){
                             $v['role_name']= $admininfo['realname'];
                        }else{
                             $v['role_name'] = $admininfo['account'];
                        }
                    }
                    $v['refund_score_count']= formatNumber($v['refund_score_count'],2,1);
                    if(1||empty($digit_info)){
                        $v['refund_money']= formatNumber($v['refund_money'],2,1);
                        $v['refund_online_money']= formatNumber($v['refund_online_money'],2,1);
                        $v['refund_balance_money']= formatNumber($v['refund_balance_money'],2,1);
                        $v['refund_score_money']= formatNumber($v['refund_score_money'],2,1);
                    }else{
                        if($orderInfo['order_type'] == 'water' || $orderInfo['order_type'] == 'electric' || $orderInfo['order_type'] == 'gas'){
                            $v['refund_online_money']= formatNumber($v['refund_online_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $v['refund_balance_money']= formatNumber($v['refund_balance_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $v['refund_score_money']= formatNumber($v['refund_score_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $v['refund_money']= formatNumber($v['refund_money'],$digit_info['meter_digit'],$digit_info['type']);
                        }else{
                            $v['refund_online_money']= formatNumber($v['refund_online_money'],$digit_info['other_digit'],$digit_info['type']);
                            $v['refund_balance_money']= formatNumber($v['refund_balance_money'],$digit_info['other_digit'],$digit_info['type']);
                            $v['refund_score_money']= formatNumber($v['refund_score_money'],$digit_info['other_digit'],$digit_info['type']);
                            $v['refund_money']= formatNumber($v['refund_money'],$digit_info['other_digit'],$digit_info['type']);
                        }
                    }
                    $refund_money_total = round((float)$refund_money_total + (float)$v['refund_money'],4);
                    $v['remaining_amount'] = round((float)$orderInfo['pay_money'] - (float)$refund_money_total,4);
                }
            }
        }

        $data = [];
        $data['list'] = $list;
        $data['count'] = $count;
        $data['total_limit'] = $limit;
        return $data;

    }

    /**
     * 添加退款纪录
     * @author:zhubaodi
     * @date_time: 2021/6/25 19:12
     * *$extra 额外数据 审核时用
     */
    public function addRefundInfo($role_id, $order_id, $refund_type, $refund_money, $refund_reason,$extra=array())
    {
        $db_house_new_pay_order_refund = new HouseNewPayOrderRefund();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $db_house_new_charge = new HouseNewCharge();
        $db_house_new_order_log = new HouseNewOrderLog();
        $db_plat_order = new PlatOrder();
        $db_house_new_charge_rule = new HouseNewChargeRule();
        $db_charge_project = new HouseNewChargeProject();
        $db_house_new_charge_standard_bind = new HouseNewChargeStandardBind();
        $orderInfo = $db_house_new_pay_order->get_one(['order_id' => $order_id], '*');
        if (empty($orderInfo)) {
            throw new \think\Exception("订单信息不存在！");
        }
        if ($orderInfo['order_type']=='park_new'){
            throw new \think\Exception("新版停车费账单不允许退款！");
        }
        $projectInfo = $db_charge_project->getOne(['id'=>$orderInfo['project_id']],'type');
        $refund_type1=1;
        if ($orderInfo['order_type']=='deposit_new'){
            $refund_type1=$refund_type;
            $refund_type=1;
        }
        $meter_type=1;
        $other_digit=2;
        $meter_digit=2;
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$orderInfo['property_id']]);
        if (!empty($digit_info)){
            $meter_type=$digit_info['type'];
            $other_digit=$digit_info['other_digit'];
            $meter_digit=$digit_info['meter_digit'];
        }
        $ruleInfo=$db_house_new_charge_rule->getOne(['id'=>$orderInfo['rule_id']]);
        if(isset($ruleInfo['rule_digit']) && $ruleInfo['rule_digit']>-1 && $ruleInfo['rule_digit']<5){
            $other_digit=$ruleInfo['rule_digit'];
            $meter_digit=$ruleInfo['rule_digit'];
        }
        // 查询收费标准是否是一次性费用
        $refund_period = $db_charge_project->getOne([['id','=',$ruleInfo['charge_project_id']],['type','=',1],['status','=','1']],'refund_period,name');
        $refund_status = 1;
        $chargeInfo = $db_house_new_charge->get_one(['village_id' => $orderInfo['village_id']], '*');
        $is_check_pass_refund=0;
        if (!empty($extra) && isset($extra['opt_type']) && ($extra['opt_type'] == 'check_pass_refund')) {
            //审核完成通过后退款 疲敝掉判断
            $is_check_pass_refund=1;
        } else{
            if ($orderInfo['order_type']=='deposit_new'){
                if ($refund_period && !$refund_period->isEmpty()) {
                    $refund_period = $refund_period->toArray();
                    if ($refund_period['refund_period']<=0&&$chargeInfo['refund_term']>=0){
                        $refund_period['refund_period']=$chargeInfo['refund_term'];
                    }
                    // 一次性费用，则使用一次性费用退款期限
                    $time = intval($refund_period['refund_period']) * 86400;
                    if ($time <= 0) {
                        throw new \think\Exception("该订单不能进行退款，请前往【收费项目管理】【" . $refund_period['name'] . "】收费项目名称，编辑（一次性费用退款期限）");
                    }
                } else {
                    $time = intval($chargeInfo['refund_term']) * 86400;
                    if ($time <= 0) {
                        throw new \think\Exception("该订单不能进行退款，请前往【收费设置】，编辑（已缴账单退款期限）");
                    }
                }

                $time1 = time() - $orderInfo['pay_time'];
                if ($time1 < $time) {
                    throw new \think\Exception("订单未到可退款期限！");
                }
            }
            elseif (!empty($chargeInfo)) {

                if ($chargeInfo['refund_term'] <= 0) {
                    throw new \think\Exception("未设置退款期限，订单不能进行退款！");
                }

                if ($refund_period && !$refund_period->isEmpty()) {
                    $refund_period = $refund_period->toArray();
                    if ($refund_period['refund_period']<$chargeInfo['refund_term']){
                        $refund_period['refund_period']=$chargeInfo['refund_term'];
                    }
                    // 一次性费用，则使用一次性费用退款期限
                    $time = intval($refund_period['refund_period']) * 86400;
                    if ($time <= 0) {
                        throw new \think\Exception("该订单不能进行退款，请前往【收费项目管理】【" . $refund_period['name'] . "】收费项目名称，编辑（一次性费用退款期限）");
                    }
                } else {
                    $time = intval($chargeInfo['refund_term']) * 86400;
                    if ($time <= 0) {
                        throw new \think\Exception("该订单不能进行退款，请前往【收费设置】，编辑（已缴账单退款期限）");
                    }
                }

                $time1 = time() - $orderInfo['pay_time'];
                if ($time1 > $time) {
                    throw new \think\Exception("订单已超过退款期限！");
                }
            } else {
                throw new \think\Exception("订单未设置退款权限！");
            }

            fdump_api(['退款信息' . __LINE__, $refund_money, $orderInfo['pay_money']], 'new_village_order_refund_zbd', 1);
            if ($refund_money > formatNumber($orderInfo['pay_money'], 2)) {
                throw new \think\Exception("退款金额不能大于实付金额");
            }
            if ($refund_money > formatNumber(($orderInfo['pay_money'] - $orderInfo['refund_money']), 2)) {
                throw new \think\Exception("退款总金额不能大于实付金额");
            }
        }

        $summaryInfo = $db_house_new_pay_order_summary->getOne(['summary_id' => $orderInfo['summary_id']], '*');
        if ($refund_type == 2) {
            if ($projectInfo['type']==2){
                //查询最新未缴账单
            /*    if(!empty($orderInfo['position_id']) ){
                    $pay_order_info = $db_house_new_pay_order->get_one(['is_discard'=>1,'is_paid'=>2,'position_id'=>$orderInfo['position_id'],'order_type'=>$orderInfo['order_type']],'service_start_time,service_end_time,order_id','service_end_time DESC');
                    $payed_order_info = $db_house_new_pay_order->get_one(['is_paid'=>1,'is_refund'=>1,'position_id'=>$orderInfo['position_id'],'order_type'=>$orderInfo['order_type']],'service_start_time,service_end_time,order_id','service_end_time DESC');

                } else{
                    $pay_order_info = $db_house_new_pay_order->get_one(['is_discard'=>1,'is_paid'=>2,'room_id'=>$orderInfo['room_id'],'order_type'=>$orderInfo['order_type']],'service_start_time,service_end_time,order_id','service_end_time DESC');
                    $payed_order_info = $db_house_new_pay_order->get_one(['is_paid'=>1,'is_refund'=>1,'room_id'=>$orderInfo['room_id'],'order_type'=>$orderInfo['order_type']],'service_start_time,service_end_time,order_id','service_end_time DESC');

                }*/

                //查询最新未缴账单
                $subject_id_arr = $this->getNumberArr(['charge_type'=>$orderInfo['order_type'],'status'=>1],'id');
                if (!empty($subject_id_arr)){
                    $getProjectArr=$this->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
                }
                if(!empty($orderInfo['position_id']) ){
                    $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$orderInfo['position_id'],'order_type'=>$orderInfo['order_type']];
                    $payed_where=['is_paid'=>1,'is_refund'=>1,'position_id'=>$orderInfo['position_id'],'order_type'=>$orderInfo['order_type']];

                    if (isset($getProjectArr)&&!empty($getProjectArr)){
                        $pay_where['project_id']=$getProjectArr;
                        $payed_where['project_id']=$getProjectArr;
                    }
                    $pay_order_info = $this->getInfo($pay_where,'order_id,project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
                    $payed_order_info = $db_house_new_pay_order->get_one($payed_where,'service_start_time,service_end_time,order_id','service_end_time DESC');
                } else{
                    $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$orderInfo['room_id'],'order_type'=>$orderInfo['order_type']];
                    $payed_where=['is_paid'=>1,'is_refund'=>1,'room_id'=>$orderInfo['room_id'],'order_type'=>$orderInfo['order_type']];
                    if (isset($getProjectArr)&&!empty($getProjectArr)){
                        $pay_where['project_id']=$getProjectArr;
                        $payed_where['project_id']=$getProjectArr;
                    }
                    $payed_order_info = $db_house_new_pay_order->get_one($payed_where,'service_start_time,service_end_time,order_id','service_end_time DESC');
                    $pay_order_info = $this->getInfo($pay_where,'order_id,project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
                }


                //判断当前订单是否是最新的订单
                if (cfg('new_pay_order')==1 && $is_check_pass_refund==0){
                    if (!empty($pay_order_info)){
                        throw new \think\Exception("当前账单无法退款,请先将该类别下的待缴账单进行缴费！");
                    }
                    if (!empty($payed_order_info)&&$payed_order_info['order_id']!=$orderInfo['order_id']){
                        throw new \think\Exception("当前账单无法退款,请先将最新缴费的账单进行退款！");
                    }

                }
                if(isset($orderInfo['unify_flage_id']) && $orderInfo['unify_flage_id'] && $is_check_pass_refund==0 && !empty($payed_order_info) && $payed_order_info['order_id']!=$orderInfo['order_id']){
                    throw new \think\Exception("当前账单无法退款,请先将最新缴费的账单进行退款！");
                }
            }
            //todo判断是不是按照自然月来生成订单，true默认开启自然月配置，配置项后面加
            if (!empty($ruleInfo)&&cfg('open_natural_month') == 1){
                $where[] = ['is_del', '=', 1];
                $where[] = ['project_id', '=', $orderInfo['project_id']];
                $where[] = ['vacancy_id', '=', $orderInfo['room_id']];
                $where[] = ['position_id', '=', $orderInfo['position_id']];
                $where[] = ['charge_valid_time', '<=', time()];
                $list = $db_house_new_charge_standard_bind->getLists1($where, 'rule_id', 'charge_valid_time desc');
                $id = 0;
                if (!empty($list)){
                    $list=$list->toArray();
                    if (isset($list[0]['rule_id']) && !empty($list[0]['rule_id'])) {
                        $id = $list[0]['rule_id'];
                    }
                }
                $ruleInfo1=$db_house_new_charge_rule->getOne(['id'=>$id]);
                if ($is_check_pass_refund==0&&!empty($ruleInfo1)&&$ruleInfo1['charge_valid_type']!=$ruleInfo['charge_valid_type'] && (empty($extra) || !isset($extra['opt_type']) && ($extra['opt_type'] != 'check_pass_refund'))){
                    throw new \think\Exception("收费标准更替,无法退款！");
                }
            }
            $refund_money = $orderInfo['pay_money'];
            $refund_status = 1;

        }
        $refund_money=round($refund_money,2);
        if (!empty($extra) && isset($extra['opt_type']) && ($extra['opt_type'] == 'check_pass_refund')) {
            //审核完成通过后退款 不在走 else里的业务 改变一下 订单里的状态
            $orderUpdateArr = array('check_status' => 3);
            $db_house_new_pay_order->saveOne(['order_id' => $order_id], $orderUpdateArr);
        } else {
            $houseVillageCheckauthSetService = new HouseVillageCheckauthSetService();
            $orderRefundCheckWhere = array('village_id' => $orderInfo['village_id'], 'xtype' => 'order_refund_check');
            $checkauthSet = $houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
            if (!empty($checkauthSet) && $checkauthSet['is_open']>0 && !empty($checkauthSet['check_level'])) {
                $orderRefundCheckArr = array('property_id' => $orderInfo['property_id'], 'village_id' => $orderInfo['village_id']);
                $orderRefundCheckArr['xtype'] = 'order_refund';
                $orderRefundCheckArr['order_id'] = $orderInfo['order_id'];
                $orderRefundCheckArr['other_relation_id'] = $summaryInfo['order_no'];
                $orderRefundCheckArr['money'] = $refund_money;
                $orderRefundCheckArr['status'] = 1;  //0未审核 1审核中 2审核通过
                $orderRefundCheckArr['apply_login_role'] = isset($extra['login_role']) ? $extra['login_role'] : 0;
                $orderRefundCheckArr['apply_name'] = isset($extra['apply_name']) ? $extra['apply_name'] : '';
                $orderRefundCheckArr['apply_phone'] = isset($extra['apply_phone']) ? $extra['apply_phone'] : '';
                $orderRefundCheckArr['apply_uid'] = isset($extra['apply_uid']) ? $extra['apply_uid'] : 0;
                $extra_data = array('order_id' => $order_id, 'refund_type' => $refund_type, 'refund_money' => $refund_money, 'refund_reason' => $refund_reason, 'role_id' => $role_id, 'opt_time' => time());
                $orderRefundCheckArr['extra_data'] = json_encode($extra_data, JSON_UNESCAPED_UNICODE);
                $houseVillageCheckauthApplyService = new HouseVillageCheckauthApplyService();

                $extra['checkauth_set'] = $checkauthSet;
                $insert_id = $houseVillageCheckauthApplyService->addApply($orderRefundCheckArr, $extra);
                if ($insert_id > 0) {
                    $order_apply = $houseVillageCheckauthApplyService->getOneData(['id' => $insert_id]);
                    if ($order_apply['status'] == 2) {
                        //自动全额通过
                        $orderUpdateArr = array('check_status' => 3, 'check_apply_id' => $insert_id);
                        $db_house_new_pay_order->saveOne(['order_id' => $order_id], $orderUpdateArr);
                    } else {
                        $orderUpdateArr = array('check_status' => 2, 'check_apply_id' => $insert_id);
                        $db_house_new_pay_order->saveOne(['order_id' => $order_id], $orderUpdateArr);
                        //需要审核
                        return array('xtype' => 'check_opt', 'check_status' => 2, 'check_apply_id' => $insert_id);
                    }
                }
            }
        }
        $pay_money_tmp=round($orderInfo['pay_money'],2);
        if ($refund_type == 1 && $refund_money < $pay_money_tmp) {
            $refund_status = 2;
        } elseif ($refund_type == 1 && $refund_money == $pay_money_tmp) {
            $refund_status = 1;
        }
        $pay_type=0;
        if (in_array($orderInfo['pay_type'],[1,4])){
            $pay_type=1;
        }

        $refund_money= (double)$refund_money;
        $payInfo=$db_plat_order->get_one(['business_id' => $orderInfo['summary_id'],'business_type'=>'village_new_pay','paid'=>1]);
        $online_money=0;
        $system_balance_money=0;
        $score_deducte_money=0;
        $score_used_count=0;
        $village_balance_money=0;
        $refund_money4=$refund_money3=$refund_money2=$refund_money1=$refund_money;
        
        if ($refund_type1==1){
            if (!empty($payInfo) && $orderInfo['pay_type']!=2&& $orderInfo['pay_type']!=22){
                if(in_array($payInfo['pay_type'],['hqpay_wx','hqpay_al'])){
                    if($refund_money != $summaryInfo['pay_money']){
                        throw new \think\Exception("【环球汇通聚合支付】不支持分批退款，请输入".$summaryInfo['pay_money'].'元');
                    }
                }
                $orderInfo['pay_amount_points']=$orderInfo['pay_amount_points']/100;
                //1.线上可退款金额
                if($orderInfo['pay_amount_points']>0){
                    $refund_online_money=$db_house_new_pay_order_refund->sumFieldv(['order_id'=>$orderInfo['order_id']],'refund_online_money');
                    $t_money= (double)($orderInfo['pay_amount_points']-$refund_online_money);
                    if ($t_money>$refund_money) {
                        $online_money = $refund_money;
                        $refund_money1 = 0;
                    } elseif ($t_money<=0) {
                        $online_money = 0;

                        // $refund_money 不变
                    } else {
                        $online_money = $t_money;
                        $refund_money1 =(double) ($refund_money-$t_money);
                    }
                }
                //2.余额可退金额-当前只有线上和余额支付，有增加其他支付类型的需继续判断
                if ($refund_money1>0&&$orderInfo['system_balance']>0){
                    //  $system_balance_money=$refund_money1;
                    $refund_balance_money=$db_house_new_pay_order_refund->sumFieldv(['order_id'=>$orderInfo['order_id']],'refund_balance_money');
                    $t_money= (double)($orderInfo['system_balance']-$refund_balance_money);
                    if ($t_money>$refund_money1) {
                        $system_balance_money = $refund_money1;
                        $refund_money2 = 0;
                    } elseif ($t_money<=0) {
                        $system_balance_money = 0;
                        // $refund_money 不变
                    } else {
                        $system_balance_money = $t_money;
                        $refund_money2 =(double) ($refund_money1-$t_money);
                    }

                }
                //3.积分可退金额-当前只有线上和余额支付、积分抵扣，有增加其他支付类型的需继续判断
                if ($refund_money2>0&&$orderInfo['score_deducte']>0){
                    //  $system_balance_money=$refund_money1;
                    $refund_score_money=$db_house_new_pay_order_refund->sumFieldv(['order_id'=>$orderInfo['order_id']],'refund_score_money');
                    $t_money= (double)($orderInfo['score_deducte']-$refund_score_money);
                    if ($t_money>$refund_money2) {
                        $score_deducte_money = $refund_money2;
                        $refund_money3 = 0;
                    } elseif ($t_money<=0) {
                        $score_deducte_money = 0;
                        // $refund_money 不变
                    } else {
                        $score_deducte_money = $t_money;
                        $refund_money3 =(double) ($refund_money2-$t_money);
                    }

                }
                //3.积分可退金额-当前只有线上和余额支付、积分抵扣，有增加其他支付类型的需继续判断
                if ($refund_money3>0&&$orderInfo['village_balance']>0){
                    //  $system_balance_money=$refund_money1;
                    $refund_score_money=$db_house_new_pay_order_refund->sumFieldv(['order_id'=>$orderInfo['order_id']],'refund_village_balance_money');
                    $t_money= (double)($orderInfo['village_balance']-$refund_score_money);
                    if ($t_money>$refund_money3) {
                        $village_balance_money = $refund_money3;
                        $refund_money4 = 0;
                    } elseif ($t_money<=0) {
                        $village_balance_money = 0;
                        // $refund_money 不变
                    } else {
                        $village_balance_money = $t_money;
                        $refund_money4 =(double) ($refund_money3-$t_money);
                    }

                }
                //   print_r([$orderInfo->toArray(),$online_money,$system_balance_money,$score_deducte_money,$score_used_count,$refund_money3,$refund_money2,$refund_money1,$refund_money]);exit;

                //线上退款
                if ($online_money>0){
                    $param = [
                        'param' => array('business_type' => 'village_new_pay', 'business_id' => $orderInfo['summary_id']),
                        'operation_info' => '',
                        'refund_money' => round_number($online_money,2),
                        'pay_type'=>$pay_type
                    ];
                    $payService=new PayService();
                    $db_pay_order_info = new PayOrderInfo();
                    $pay_order_info = $db_pay_order_info->getByOrderNo($payInfo['orderid']);
                    if (!empty($pay_order_info)){
                        /*
                        if ($online_money>$pay_order_info['chinaums_merchant_already_get']&&$pay_order_info['channel']=='chinaums'){
                            $online_money=$pay_order_info['chinaums_merchant_already_get'];
                        }
                        */
                    }
                    fdump_api([$payInfo['orderid'],$online_money],'PayService_0211',1);
                    $refund = $payService->refund($payInfo['orderid'],$online_money);
                    if (isset($refund['refund_no'])&&!empty($refund['refund_no'])){
                        $business_order_table=new HouseVillagePayOrder();
                        $tOrder=$business_order_table->get_one(['order_id' => $payInfo['business_id']]);
                        $tOrder['order_type'] = 'new_village_refund';
                        $tOrder['desc'] = $payInfo['order_name'].'退款';
                        $tOrder['refund_money'] = $online_money;

                        if($payInfo['orderid']){
                            $pay_order_info=new PayOrderInfo();
                            $pay_info=$pay_order_info->getByOrderNo($payInfo['orderid']);
                            // if($pay_info['channel'] == 'scrcu' || $pay_info['channel'] == 'scrcuCash'){
                            if($pay_info['is_own'] > 0){
                                $tOrder['refund_money']=0;
                            }
                            //   }
                        }
                        $param_bill=[];
                        $param_bill=[
                            'village_id'=>$orderInfo['village_id'],
                            'money'=>$tOrder['refund_money'],
                            'type'=>'new_village_refund',
                            'desc'=>$payInfo['order_name'].'退款',
                            'order_id'=>$payInfo['order_id'],
                        ];
                        fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$tOrder['refund_money'],$online_money],'new_village_order_refund_zbd',1);
                        $res =invoke_cms_model('Village_money_list/use_money', $param_bill);
                        fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$tOrder['refund_money'],$res],'new_village_order_refund_zbd',1);
                        $data_plat_order['is_refund'] = 1;
                        $data_shop_order['order_id'] = $payInfo['order_id'];
                        $data_shop_order['refund_detail'] = serialize($param);
                        $db_plat_order->save_one(['order_id'=>$payInfo['order_id']],$data_plat_order);
                    }

                }
                //余额退款
                if ($system_balance_money>0){
                    $param = [
                        'param' => array('business_type' => 'village_new_pay','paid' => 1, 'business_id' => $orderInfo['summary_id']),
                        'operation_info' => '',
                        'refund_money' => round_number($system_balance_money,2),
                        'pay_type'=>$pay_type
                    ];
                    $refund = invoke_cms_model('Plat_order/new_village_order_refund', $param);
                }

                //积分退款
                if ($score_deducte_money>0){
                    if($score_deducte_money==$orderInfo['score_deducte']){
                        $score_used_count=$orderInfo['score_used_count'];
                    }else{
                        $score_used_count=round_number($orderInfo['score_used_count']*($score_deducte_money/$orderInfo['score_deducte']),2);
                    }
                    $refund = (new UserService())->addScore($summaryInfo['pay_uid'], $score_used_count, L_("账单退款 ，增加X1 ，订单编号X2", array( "X1" => $score_used_count, "X2" => $orderInfo['order_id'])));
                    if (empty($refund['error_code'])){
                        $param_bill=[];
                        $param_bill=[
                            'village_id'=>$orderInfo['village_id'],
                            'money'=>$score_deducte_money,
                            'type'=>'new_village_refund',
                            'desc'=>$payInfo['order_name'].'退款',
                            'order_id'=>$payInfo['order_id'],
                        ];
                        fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$score_deducte_money,$score_used_count,$refund],'new_village_order_refund_zbd',1);
                        $res =invoke_cms_model('Village_money_list/use_money', $param_bill);
                        fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$score_deducte_money,$res],'new_village_order_refund_zbd',1);
                        $data_plat_order['is_refund'] = 1;
                        $data_shop_order['order_id'] = $payInfo['order_id'];
                        $data_shop_order['refund_detail'] = serialize($param_bill);
                        $db_plat_order->save_one(['order_id'=>$payInfo['order_id']],$data_plat_order);
                    }
                }
                if($summaryInfo && $summaryInfo['score_can_get']>0){
                    //退或得的积分
                    $refund_score_can_get=$summaryInfo['score_can_get'];
                    if($refund_money<=$pay_money_tmp){
                        $refund_score_can_get=($refund_money/$pay_money_tmp)*$summaryInfo['score_can_get'];
                        if($refund_score_can_get<1){
                            $refund_score_can_get=0;
                        }else{
                            $refund_score_can_get=floor($refund_score_can_get);
                        }
                    }
                    if($refund_score_can_get>0){
                        $user_result = (new UserService())->userScore($summaryInfo['pay_uid'], $refund_score_can_get, '社区退款扣除已获得积分，订单编号'.$orderInfo['order_id']);
                    }
                }
                //住户余额退款
                if ($village_balance_money>0){
                    $village_user = new StorageService();
                    $village_money_data=[
                        'uid'=>$summaryInfo['pay_uid'],
                        'village_id'=>$summaryInfo['village_id'],
                        'type'=>1,
                        'current_village_balance'=>$village_balance_money,
                        'role_id'=>0,
                        'desc'=>L_("物业退款，退还小区住户余额，订单编号X1", array("X1" => $summaryInfo['order_no'])),
                        'order_id'=>$orderInfo['order_id'],
                        'order_type'=>1,
                        'summary_id'=>$summaryInfo['summary_id'],
                        'come_from'=>'house_new_pay_order_refund'
                    ];
                    if(isset($orderInfo['order_type_flag']) && !empty($orderInfo['order_type_flag'])){
                        $village_money_data['opt_money_type']=$orderInfo['order_type_flag'];
                    }
                    $villageUseResult = $village_user->addVillageUserMoney($village_money_data);
                    if ($villageUseResult['error_code']) {
                        fdump_api(['住户余额退款失败'.__LINE__,$villageUseResult,$village_money_data],'new_village_order_refund_zbd',1);
                    }
                }
                /* fdump_api(['退款信息'.__LINE__,$param],'new_village_order_refund_zbd',1);
                 if ($payInfo['pay_money']>0){
                     $payService=new PayService();
                     $db_pay_order_info = new PayOrderInfo();
                     $pay_order_info = $db_pay_order_info->getByOrderNo($payInfo['orderid']);
                     if (!empty($pay_order_info)){
                         if ($refund_money>$pay_order_info['chinaums_merchant_already_get']&&$pay_order_info['channel']=='chinaums'){
                             $refund_money=$pay_order_info['chinaums_merchant_already_get'];
                         }
                     }
                     fdump_api([$payInfo['orderid'],$refund_money],'PayService_0211',1);
                     $refund = $payService->refund($payInfo['orderid'],$refund_money);
                     if (isset($refund['refund_no'])&&!empty($refund['refund_no'])){
                         $business_order_table=new HouseVillagePayOrder();
                         $tOrder=$business_order_table->get_one(['order_id' => $payInfo['business_id']]);
                         $tOrder['order_type'] = 'new_village_refund';
                         $tOrder['desc'] = $payInfo['order_name'].'退款';
                         $tOrder['refund_money'] = $refund_money;

                         if($payInfo['orderid']){
                             $pay_order_info=new PayOrderInfo();
                             $pay_info=$pay_order_info->getByOrderNo($payInfo['orderid']);
                             if($pay_info['channel'] == 'scrcu' || $pay_info['channel'] == 'scrcuCash'){
                                 if($pay_info['is_own'] > 0){
                                     $tOrder['refund_money']=0;
                                 }
                             }
                         }
                         $param_bill=[];
                         $param_bill=[
                             'village_id'=>$orderInfo['village_id'],
                             'money'=>$tOrder['refund_money'],
                             'type'=>'new_village_refund',
                             'desc'=>$payInfo['order_name'].'退款',
                             'order_id'=>$payInfo['order_id'],
                         ];
                         fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$tOrder['refund_money'],$refund_money],'new_village_order_refund_zbd',1);
                         $res =invoke_cms_model('Village_money_list/use_money', $param_bill);
                         fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$tOrder['refund_money'],$res],'new_village_order_refund_zbd',1);
                         $data_plat_order['is_refund'] = 1;
                         $data_shop_order['order_id'] = $payInfo['order_id'];
                         $data_shop_order['refund_detail'] = serialize($param);
                         $db_plat_order->save_one(['order_id'=>$payInfo['order_id']],$data_plat_order);
                     }
                 }
                 if ($payInfo['system_balance']>0){
                     $refund = invoke_cms_model('Plat_order/new_village_order_refund', $param);
                 }*/


            }
            elseif (!empty($payInfo)&&$orderInfo['pay_type']==2){
                //线下支付的
                $param = [
                    'param' => array('business_type' => 'village_new_pay','paid' => 1, 'business_id' => $orderInfo['summary_id']),
                    'operation_info' => '',
                    'refund_money' => $refund_money,
                    'pay_type'=>$pay_type
                ];
                $data_plat_order['is_refund'] = 1;
                $data_shop_order['order_id'] = $payInfo['order_id'];
                $data_shop_order['refund_detail'] = serialize($param);
                $db_plat_order->save_one(['order_id'=>$payInfo['order_id']],$data_plat_order);
                //积分退款
                if ($score_deducte_money>0){
                    if($score_deducte_money==$orderInfo['score_deducte']){
                        $score_used_count=$orderInfo['score_used_count'];
                    }else{
                        $score_used_count=round_number($orderInfo['score_used_count']*($score_deducte_money/$orderInfo['score_deducte']),2);
                    }
                    $refund = (new UserService())->addScore($summaryInfo['pay_uid'], $score_used_count, L_("账单退款 ，增加X1 ，订单编号X2", array( "X1" => $score_used_count, "X2" => $orderInfo['order_id'])));
                    if (empty($refund['error_code'])){
                        $param_bill=[];
                        $param_bill=[
                            'village_id'=>$orderInfo['village_id'],
                            'money'=>$score_deducte_money,
                            'type'=>'new_village_refund',
                            'desc'=>$payInfo['order_name'].'退款',
                            'order_id'=>$payInfo['order_id'],
                        ];
                        fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$score_deducte_money,$score_used_count,$refund],'new_village_order_refund_zbd',1);
                        $res =invoke_cms_model('Village_money_list/use_money', $param_bill);
                        fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$score_deducte_money,$res],'new_village_order_refund_zbd',1);
                        $data_plat_order['is_refund'] = 1;
                        $data_shop_order['order_id'] = $payInfo['order_id'];
                        $data_shop_order['refund_detail'] = serialize($param_bill);
                        $db_plat_order->save_one(['order_id'=>$payInfo['order_id']],$data_plat_order);
                    }
                }
                if($summaryInfo && $summaryInfo['score_can_get']>0){
                    //退或得的积分
                    $refund_score_can_get=$summaryInfo['score_can_get'];
                    if($refund_money<=$pay_money_tmp){
                        $refund_score_can_get=($refund_money/$pay_money_tmp)*$summaryInfo['score_can_get'];
                        if($refund_score_can_get<1){
                            $refund_score_can_get=0;
                        }else{
                            $refund_score_can_get=floor($refund_score_can_get);
                        }
                    }
                    if($refund_score_can_get>0){
                        $user_result = (new UserService())->userScore($summaryInfo['pay_uid'], $refund_score_can_get, '社区退款扣除已获得积分，订单编号'.$orderInfo['order_id']);
                    }
                }
            }
           
           /* fdump_api(['退款信息'.__LINE__,$param],'new_village_order_refund_zbd',1);
            if ($payInfo['pay_money']>0){
                $payService=new PayService();
                $db_pay_order_info = new PayOrderInfo();
                $pay_order_info = $db_pay_order_info->getByOrderNo($payInfo['orderid']);
                if (!empty($pay_order_info)){
                    if ($refund_money>$pay_order_info['chinaums_merchant_already_get']&&$pay_order_info['channel']=='chinaums'){
                        $refund_money=$pay_order_info['chinaums_merchant_already_get'];
                    }
                }
                fdump_api([$payInfo['orderid'],$refund_money],'PayService_0211',1);
                $refund = $payService->refund($payInfo['orderid'],$refund_money);
                if (isset($refund['refund_no'])&&!empty($refund['refund_no'])){
                    $business_order_table=new HouseVillagePayOrder();
                    $tOrder=$business_order_table->get_one(['order_id' => $payInfo['business_id']]);
                    $tOrder['order_type'] = 'new_village_refund';
                    $tOrder['desc'] = $payInfo['order_name'].'退款';
                    $tOrder['refund_money'] = $refund_money;

                    if($payInfo['orderid']){
                        $pay_order_info=new PayOrderInfo();
                        $pay_info=$pay_order_info->getByOrderNo($payInfo['orderid']);
                        if($pay_info['channel'] == 'scrcu' || $pay_info['channel'] == 'scrcuCash'){
                            if($pay_info['is_own'] > 0){
                                $tOrder['refund_money']=0;
                            }
                        }
                    }
                    $param_bill=[];
                    $param_bill=[
                        'village_id'=>$orderInfo['village_id'],
                        'money'=>$tOrder['refund_money'],
                        'type'=>'new_village_refund',
                        'desc'=>$payInfo['order_name'].'退款',
                        'order_id'=>$payInfo['order_id'],
                    ];
                    fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$tOrder['refund_money'],$refund_money],'new_village_order_refund_zbd',1);
                    $res =invoke_cms_model('Village_money_list/use_money', $param_bill);
                    fdump_api(['退款写入物业余额'.__LINE__,$param_bill,$tOrder['refund_money'],$res],'new_village_order_refund_zbd',1);
                    $data_plat_order['is_refund'] = 1;
                    $data_shop_order['order_id'] = $payInfo['order_id'];
                    $data_shop_order['refund_detail'] = serialize($param);
                    $db_plat_order->save_one(['order_id'=>$payInfo['order_id']],$data_plat_order);
                }
            }
            if ($payInfo['system_balance']>0){
                $refund = invoke_cms_model('Plat_order/new_village_order_refund', $param);
            }*/
        }
        elseif ($refund_type1==2){
            $param = [
                'param' => array('business_type' => 'village_new_pay','paid' => 1, 'business_id' => $orderInfo['summary_id']),
                'operation_info' => '',
                'refund_money' => $refund_money,
                'pay_type'=>$pay_type
            ];
            $data_plat_order['is_refund'] = 1;
            $data_shop_order['order_id'] = $payInfo['order_id'];
            $data_shop_order['refund_detail'] = serialize($param);
            $db_plat_order->save_one(['order_id'=>$payInfo['order_id']],$data_plat_order);
            $db_house_new_deposit_log=new HouseNewDepositLog();
            $deposit_info=$db_house_new_deposit_log->get_one(['village_id'=>$orderInfo['village_id'],'room_id'=>$orderInfo['room_id']]);
            if (!empty($deposit_info)){
                $before_money=$deposit_info['total_money'];
            }else{
                $before_money=0;
            }
            $total_money=$before_money+$refund_money;
            $deposit_data=[
                'village_id'=>$orderInfo['village_id'],
                'room_id'=>$orderInfo['room_id'],
                'order_id'=>$orderInfo['order_id'],
                'order_no'=>$summaryInfo['order_no'],
                'type'=>1,
                'before_money'=>$before_money,
                'money'=>$refund_money,
                'total_money'=>$total_money,
                'add_time'=>time(),
                'role_id'=>0,
            ];
            $db_house_new_deposit_log->addOne($deposit_data);
        }
        $data = [
            'order_id' => $order_id,
            'refund_type' => $refund_type,
            'refund_money' => $refund_money,
            'refund_reason' => $refund_reason,
            'refund_status' => $refund_status,
            'refund_online_money'=>$online_money,
            'refund_balance_money'=>$system_balance_money,
            'refund_score_money'=>$score_deducte_money,
            'refund_score_count'=>$score_used_count,
            'role_id' => $role_id,
            'add_time' => time(),
            'update_time' => time(),

        ];
        $id = $db_house_new_pay_order_refund->addOne($data);
        if ($id > 0) {
            if($orderInfo['deposit_money']>0){
                $db_house_new_deposit_log=new HouseNewDepositLog();
                $deposit_info=$db_house_new_deposit_log->get_one(['village_id'=>$orderInfo['village_id'],'room_id'=>$orderInfo['room_id']]);
                if (!empty($deposit_info)){
                    $before_money=$deposit_info['total_money'];
                }else{
                    $before_money=0;
                }
                $total_money=$before_money+$orderInfo['deposit_money'];
                $deposit_data=[
                    'village_id'=>$orderInfo['village_id'],
                    'room_id'=>$orderInfo['room_id'],
                    'order_id'=>$orderInfo['order_id'],
                    'order_no'=>$summaryInfo['order_no'],
                    'type'=>1,
                    'before_money'=>$before_money,
                    'money'=>$orderInfo['deposit_money'],
                    'total_money'=>$total_money,
                    'add_time'=>time(),
                    'role_id'=>0,
                ];
                $db_house_new_deposit_log->addOne($deposit_data);
            }
            $data_order = [
                'is_refund' => 2,
                'refund_money' => $refund_money + $orderInfo['refund_money'],
                'refund_reason' => $refund_reason,
                'update_time' => time(),
                'refund_type' => $refund_type,
            ];
            $db_house_new_pay_order->saveOne(['order_id' => $order_id], $data_order);
            //$summaryInfo = $db_house_new_pay_order_summary->getOne(['summary_id' => $orderInfo['summary_id']], '*');
            $data_order1 = [
                'is_refund' => 2,
                'refund_money' => $refund_money + $summaryInfo['refund_money'],
                'refund_reason' => $refund_reason,
            ];
            $db_house_new_pay_order_summary->saveOne(['summary_id' => $orderInfo['summary_id']], $data_order1);

            if ($refund_type==1){
                $order_log_info=$db_house_new_order_log->getOne(['order_type' => $orderInfo['order_type'],'room_id' => $orderInfo['room_id'], 'position_id' => $orderInfo['position_id'],  'village_id' => $orderInfo['village_id']]);
                if (!empty($order_log_info)){
                    $orderInfo['service_start_time']=$order_log_info['service_start_time'];
                    $orderInfo['service_end_time']=$order_log_info['service_end_time'];
                }
                $new_order_log = [
                    'order_id' => $orderInfo['order_id'],
                    'order_type' => $orderInfo['order_type'],
                    'order_name' => $orderInfo['order_name'],
                    'room_id' => $orderInfo['room_id'],
                    'position_id' => $orderInfo['position_id'],
                    'property_id' => $orderInfo['property_id'],
                    'village_id' => $orderInfo['village_id'],
                    'service_start_time' => $orderInfo['service_start_time'],
                    'service_end_time' => $orderInfo['service_end_time'],
                    'project_id' => $orderInfo['project_id'],
                    'desc'=>'退款不还原账单',
                    'add_time' => time(),
                ];
                $db_house_new_order_log->addOne($new_order_log);
            }
            if ($refund_type == 2) {
                $logInfo = $db_house_new_order_log->getOne([['room_id' ,'=', $orderInfo['room_id']],['position_id' ,'=', $orderInfo['position_id']],['order_type','=', $orderInfo['order_type']]], '*','id DESC');
              // print_r($logInfo->toArray());
                if (empty($logInfo) || $logInfo['service_end_time']<100){
                    $orderInfo1 = $db_house_new_pay_order->get_one([['room_id' ,'=', $orderInfo['room_id']],['position_id' ,'=', $orderInfo['position_id']],['order_type','=', $orderInfo['order_type']],['is_paid','=',1],['refund_type','<>',2]], '*','service_end_time DESC');
                    if (!empty($orderInfo1)){
                        $service_end_time=$orderInfo1['service_end_time'];
                    }else{
                        $service_end_time=$orderInfo['service_start_time'];
                    }
                }else{
                    if (cfg('open_natural_month') == 1){
                        //todo判断是不是按照自然月来生成订单，true默认开启自然月配置，配置项后面加
                        if ($orderInfo['is_prepare']==1){
                            if ($ruleInfo['charge_valid_type']==1){
                                $service_end_time=$logInfo['service_end_time']-86400*($orderInfo['prepaid_cycle']+$orderInfo['service_give_month_num']);
                            }elseif($ruleInfo['charge_valid_type']==2){
                                
                                $diff_service_time=$orderInfo['service_end_time']-$orderInfo['service_start_time'];
                                if($diff_service_time>0 && $orderInfo['service_start_time']>0){
                                    $aa=$logInfo['service_end_time']-$diff_service_time;
                                    $service_end_time=$aa;
                                }else{
                                    $mouth=$orderInfo['service_month_num']+$orderInfo['service_give_month_num'];
                                    $aa=date('Y-m-d H:i:s',strtotime('-'.$mouth.' month',$logInfo['service_end_time']));
                                    $service_end_time=strtotime($aa);
                                }
                                $logInfo_current_daty=date('j ',$logInfo['service_end_time']);
                                $service_end_time_current_daty=date('j ',$service_end_time);
                                if($logInfo_current_daty==31 && $service_end_time_current_daty==1){
                                    $tmp_data=date('Y-m-d ',$service_end_time);
                                    $service_end_time=strtotime($tmp_data)-1;
                                }
                            }elseif($ruleInfo['charge_valid_type']==3){
                                $year=date('Y',$logInfo['service_end_time'])-1*($orderInfo['prepaid_cycle']+$orderInfo['service_give_month_num']);
                                $service_end_time=strtotime(date($year.'-m-d H:i:s',$logInfo['service_end_time']));
                            }
                           if(isset($orderInfo['unify_flage_id']) && $orderInfo['unify_flage_id']){
                                $service_end_time=strtotime('-1 month',$logInfo['service_end_time']);
                            }
                        }else{
                            if (empty($orderInfo['service_month_num'])){
                                $orderInfo['service_month_num']=1;
                            }
                            if ($ruleInfo['charge_valid_type']==1){
                                $service_end_time=$logInfo['service_end_time']-86400*$orderInfo['service_month_num'];
                            }elseif(isset($orderInfo['unify_flage_id']) && $orderInfo['unify_flage_id']){
                               $service_end_time=strtotime('-1 month',$logInfo['service_end_time']);
                            }elseif($ruleInfo['charge_valid_type']==2){
                                $aa=date('Y-m-d H:i:s',strtotime('-'.$orderInfo['service_month_num'].' month',$logInfo['service_end_time']));
                                $service_end_time=strtotime($aa);
                            }elseif($ruleInfo['charge_valid_type']==3){
                                $year=date('Y',$logInfo['service_end_time'])-1*$orderInfo['service_month_num'];
                                $service_end_time=strtotime(date($year.'-m-d H:i:s',$logInfo['service_end_time']));
                            }
                            $service_end_time=$logInfo['service_end_time']-($orderInfo['service_end_time']-$orderInfo['service_start_time'])-1;
                        }
                    }else{
                        $service_end_time=$logInfo['service_end_time']-($orderInfo['service_end_time']-$orderInfo['service_start_time'])-1;
                    }
                }
                $new_order = [
                    'summary_id' => $orderInfo['summary_id'],
                    'uid' => $orderInfo['uid'],
                    'pigcms_id' => $orderInfo['pigcms_id'],
                    'name' => $orderInfo['name'],
                    'phone' => $orderInfo['phone'],
                    'order_type' => $orderInfo['order_type'],
                    'order_name' => $orderInfo['order_name'],
                    'room_id' => $orderInfo['room_id'],
                    'position_id' => $orderInfo['position_id'],
                    'property_id' => $orderInfo['property_id'],
                    'village_id' => $orderInfo['village_id'],
                    'total_money' => $orderInfo['total_money'],
                    'modify_money' => $orderInfo['total_money'],
                    'is_paid' => 2,
                    'is_prepare' => $orderInfo['is_prepare'],
                    'prepare_pay_money' => $orderInfo['prepare_pay_money'],
                    'service_month_num' => $orderInfo['service_month_num'],
                    'service_give_month_num' => $orderInfo['service_give_month_num'],
                    'service_start_time' => $orderInfo['service_start_time'],
                    'service_end_time' => $orderInfo['service_end_time'],
                    'rate' => $orderInfo['rate'],
                    'diy_type' => $orderInfo['diy_type'],
                    'diy_content' => $orderInfo['diy_content'],
                    'rule_id' => $orderInfo['rule_id'],
                    'project_id' => $orderInfo['project_id'],
                    'order_no' => '',
                    'unit_price' => $orderInfo['unit_price'],
                    'from' => $orderInfo['from'],
                    'remark' => $orderInfo['remark'],
                    'add_time' => time(),
                    'update_time' => time(),
                    'role_id' => $orderInfo['role_id'],
                    'last_ammeter' => $orderInfo['last_ammeter'],
                    'now_ammeter' => $orderInfo['now_ammeter'],
                    'meter_reading_id'=>$orderInfo['meter_reading_id'],
                ];
                $db_house_new_pay_order->addOne($new_order);

                $new_order_log = [
                    'order_id' => $orderInfo['order_id'],
                    'order_type' => $orderInfo['order_type'],
                    'order_name' => $orderInfo['order_name'],
                    'room_id' => $orderInfo['room_id'],
                    'position_id' => $orderInfo['position_id'],
                    'property_id' => $orderInfo['property_id'],
                    'village_id' => $orderInfo['village_id'],
                    'service_start_time' => $orderInfo['service_start_time'],
                    'service_end_time' => $service_end_time,
                    'project_id' => $orderInfo['project_id'],
                    'desc'=>'退款且还原账单',
                    'add_time' => time(),
                ];
                $db_house_new_order_log->addOne($new_order_log);
                if($orderInfo['order_type'] == 'park' || $orderInfo['order_type'] == 'parking_management'){
                    $service_house_village_parking = new HouseVillageParkingService();
                    if($orderInfo['position_id']>0){
                        $service_house_village_parking->editParkingPosition(['position_id'=>$orderInfo['position_id']],['end_time'=>$service_end_time]);
                        $service_house_village_parking->editParkingCar(['car_position_id'=>$orderInfo['position_id']],['end_time'=>$service_end_time]);
                    }
                }
            }
        } else {
            throw new \think\Exception("退款失败");
        }
        return $id;
    }

    public function getRefundtype($order_id,$sum_refund_money=false)
    {
        $db_house_new_pay_order_refund = new HouseNewPayOrderRefund();
        $refundType = $db_house_new_pay_order_refund->getOne(['order_id' => $order_id]);
        if($sum_refund_money && !empty($refundType)){
            $refund_money_sum = $db_house_new_pay_order_refund->sumFieldv(['order_id' => $order_id],'refund_money');
            $refundType['refund_money']=$refund_money_sum;
        }
        return $refundType;
    }


    /**
     * 导出文件
     * @author:zhubaodi
     * @date_time: 2021/5/21 14:44
     */
    public function saveExcel($title, $data, $fileName,$exporttype='',$exportPattern = 2)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getDefaultColumnDimension()->setWidth(24);
        $sheet->getDefaultRowDimension()->setRowHeight(22);//设置行高
        $sheet->getRowDimension('1')->setRowHeight(25);//设置行高

        if($exporttype=='exportRefund'){
            $sheet->getStyle('A1:Ak1')->getFont()->setBold(true)->setSize(14);
            $sheet->mergeCells('A1:Ak1'); //合并单元格
            $sheet->getColumnDimension('A')->setWidth(32);
            $sheet->setCellValue('A1', '退款账单明细');
            $sheet->setCellValue('A2', '总合计：');
            $sheet->setCellValue('K2', $data['total_money']);
            $sheet->setCellValue('L2', $data['modify_money']);
            $sheet->setCellValue('M2', $data['pay_money']);
            $sheet->setCellValue('W2', $data['late_payment_money']);
            $sheet->setCellValue('Y2', $data['prepare_pay_money']);
            $sheet->setCellValue('Z2', $data['refund_money']);

            //设置单元格内容
            $titCol = 'A';
            foreach ($title as $key => $value) {
                //单元格内容写入
                $sheet->setCellValue($titCol . '3', $value);
                $sheet->getStyle('A3:Ak3')->getFont()->setBold(true);
                $titCol++;
            }
            //设置单元格内容
            $row = 4;
            foreach ($data['list'] as $k => $item) {
                $dataCol = 'A';
                $order_id=$item['order_id'];
                unset($item['order_id']);
               //  print_r($item);exit;
                foreach ($item as $value) {
                    //单元格内容写入
                    $sheet->setCellValue($dataCol . $row, $value);
                    $dataCol++;
                }
                if($exportPattern != 1){
                    $row1 = $row - 1;
                    if ($k > 0 && ($data['list'][$k]['numbers'] == $data['list'][$k - 1]['numbers'])) {
                        $sheet->mergeCells('A' . $row1 . ':' . 'A' . $row); //合并单元格
                        $sheet->mergeCells('B' . $row1 . ':' . 'B' . $row); //合并单元格
                        $sheet->mergeCells('C' . $row1 . ':' . 'C' . $row); //合并单元格
                        $sheet->mergeCells('D' . $row1 . ':' . 'D' . $row); //合并单元格
                        $sheet->mergeCells('E' . $row1 . ':' . 'E' . $row); //合并单元格
                        $sheet->mergeCells('F' . $row1 . ':' . 'F' . $row); //合并单元格
                    }
                    if ($k > 0 && ($data['list'][$k]['numbers'] == $data['list'][$k - 1]['numbers']) && ($data['list'][$k]['charge_number_name'] == $data['list'][$k - 1]['charge_number_name'])) {
                        $sheet->mergeCells('G' . $row1 . ':' . 'G' . $row); //合并单元格
                    }
                    if ($k > 0&&($order_id == $data['list'][$k - 1]['order_id'])){
                        $sheet->mergeCells('H' . $row1 . ':' . 'H' . $row); //合并单元格
                        $sheet->mergeCells('I' . $row1 . ':' . 'I' . $row); //合并单元格
                        $sheet->mergeCells('J' . $row1 . ':' . 'J' . $row); //合并单元格
                        $sheet->mergeCells('K' . $row1 . ':' . 'K' . $row); //合并单元格
                        $sheet->mergeCells('L' . $row1 . ':' . 'L' . $row); //合并单元格
                        $sheet->mergeCells('M' . $row1 . ':' . 'M' . $row); //合并单元格
                        $sheet->mergeCells('N' . $row1 . ':' . 'N' . $row); //合并单元格
                        $sheet->mergeCells('O' . $row1 . ':' . 'O' . $row); //合并单元格
                        $sheet->mergeCells('P' . $row1 . ':' . 'P' . $row); //合并单元格
                        $sheet->mergeCells('Q' . $row1 . ':' . 'Q' . $row); //合并单元格
                        $sheet->mergeCells('R' . $row1 . ':' . 'R' . $row); //合并单元格
                        $sheet->mergeCells('S' . $row1 . ':' . 'S' . $row); //合并单元格
                        $sheet->mergeCells('T' . $row1 . ':' . 'T' . $row); //合并单元格
                        $sheet->mergeCells('U' . $row1 . ':' . 'U' . $row); //合并单元格
                        $sheet->mergeCells('V' . $row1 . ':' . 'V' . $row); //合并单元格
                        $sheet->mergeCells('W' . $row1 . ':' . 'W' . $row); //合并单元格
                        $sheet->mergeCells('X' . $row1 . ':' . 'X' . $row); //合并单元格
                        $sheet->mergeCells('Y' . $row1 . ':' . 'Y' . $row); //合并单元格
                        $sheet->mergeCells('Z' . $row1 . ':' . 'Z' . $row); //合并单元格
                        $sheet->mergeCells('AA' . $row1 . ':' . 'AA' . $row); //合并单元格
                        $sheet->mergeCells('AB' . $row1 . ':' . 'AB' . $row); //合并单元格
                        $sheet->mergeCells('AC' . $row1 . ':' . 'AC' . $row); //合并单元格
                        $sheet->mergeCells('AD' . $row1 . ':' . 'AD' . $row); //合并单元格
                    }
                }
                $row++;
            }
        }
        else{
            $sheet->getStyle('A1:AG1')->getFont()->setBold(true)->setSize(12);
            $sheet->mergeCells('A1:AG1'); //合并单元格
            $sheet->setCellValue('A1', '已缴账单明细表');
            $sheet->setCellValue('A2', '总合计：');
            $sheet->setCellValue('K2', $data['total_money']);
            $sheet->setCellValue('L2', $data['modify_money']);
            $sheet->setCellValue('M2', $data['pay_money']);
            $sheet->setCellValue('W2', $data['late_payment_money']);
            $sheet->setCellValue('Y2', $data['prepare_pay_money']);
            $sheet->setCellValue('Z2', $data['refund_money']);
            //设置单元格内容
            $titCol = 'A';
            foreach ($title as $key => $value) {
                //单元格内容写入
                $sheet->setCellValue($titCol . '3', $value);
                $titCol++;
            }
            //设置单元格内容
            $row = 4;
            foreach ($data['list'] as $k => $item) {

                $dataCol = 'A';
                foreach ($item as $value) {
                    //单元格内容写入
                    $sheet->setCellValue($dataCol . $row, $value);
                    $dataCol++;
                }
                if($exportPattern != 1){
                    $row1 = $row - 1;
                    if ($k > 0 && ($data['list'][$k]['numbers'] == $data['list'][$k - 1]['numbers'])&&($data['list'][$k]['number_name'] == $data['list'][$k - 1]['number_name'])&&($data['list'][$k]['floor_name'] == $data['list'][$k - 1]['floor_name'])&&($data['list'][$k]['layer_name'] == $data['list'][$k - 1]['layer_name'])) {
                        $sheet->mergeCells('A' . $row1 . ':' . 'A' . $row); //合并单元格
                        $sheet->mergeCells('B' . $row1 . ':' . 'B' . $row); //合并单元格
                        $sheet->mergeCells('C' . $row1 . ':' . 'C' . $row); //合并单元格
                        $sheet->mergeCells('D' . $row1 . ':' . 'D' . $row); //合并单元格
                        $sheet->mergeCells('E' . $row1 . ':' . 'E' . $row); //合并单元格
                        $sheet->mergeCells('F' . $row1 . ':' . 'F' . $row); //合并单元格
                    }
                    if ($k > 0 && ($data['list'][$k]['numbers'] == $data['list'][$k - 1]['numbers']) &&($data['list'][$k]['number_name'] == $data['list'][$k - 1]['number_name'])&&($data['list'][$k]['floor_name'] == $data['list'][$k - 1]['floor_name'])&&($data['list'][$k]['layer_name'] == $data['list'][$k - 1]['layer_name'])&& ($data['list'][$k]['charge_number_name'] == $data['list'][$k - 1]['charge_number_name'])) {
                        $sheet->mergeCells('G' . $row1 . ':' . 'G' . $row); //合并单元格
                    }
                }
                $row++;
            }
        }
        //保存

        $styleArrayBody = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
        ];
        $total_rows = $row + 1;
        //添加所有边框/居中

        if($exporttype=='exportRefund'){
            $sheet->getStyle('A1:Ak' . $total_rows)->applyFromArray($styleArrayBody);
         //   $sheet->getStyle('A2:A'. $total_rows)->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
        }else{
            $sheet->getStyle('A1:AG' . $total_rows)->applyFromArray($styleArrayBody);
        }
        //下载
        $filename = $fileName . '.xlsx';
        (new BaseExportService())->phpSpreadsheet($filename, $spreadsheet);
        return $this->downloadExportFile($filename);
    }

    /**
     * 下载表格
     */
    public function downloadExportFile($param)
    {
        $returnArr = [];
        if (!file_exists(request()->server('DOCUMENT_ROOT') . '/v20/runtime/' . $param)) {
            $returnArr['error'] = 1;
            return $returnArr;
        }
        $filename = $param;

        $ua = request()->server('HTTP_USER_AGENT');
        $ua = strtolower($ua);
        if (preg_match('/msie/', $ua) || preg_match('/edge/', $ua) || preg_match('/trident/', $ua)) { //判断是否为IE或Edge浏览器
            $filename = str_replace('+', '%20', urlencode($filename)); //使用urlencode对文件名进行重新编码
        }

        $returnArr['url'] = cfg('site_url') . '/v20/runtime/' . $param;
        $returnArr['error'] = 0;

        return $returnArr;
    }


    /**
     *导出账单
     * @author: zhubaodi
     * @date : 2021/6/26
     */
    public function printPayOrder($where = [], $where1 = '', $field = true, $order = 'o.order_id DESC',$exporttype='',$exportPattern = 2)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $db_house_new_offline_pay = new HouseNewOfflinePay();
        $print_number = new HouseVillagePrintTemplateNumber();
        $db_admin = new HouseAdmin();

        $where_summary = [];
        $record_status = 0;
        $village_id = 0;
        if (!empty($where)) {
            foreach ($where as $k => &$va) {
                if ($va[0] == 'record_status') {
                    $record_status = $va[2];
                    unset($where[$k]);
                }
                if ($va[0] == 'o.pay_type') {
                    $pay_type_arr =explode('-',$va[2]);
                    if ($pay_type_arr[0]==1){
                        $va[2]=1;
                        $where_summary[]=['pay_type','=',1];
                        unset($where[$k]);
                    }elseif($pay_type_arr[0]==2){
                        $where[]=['o.offline_pay_type','find in set',$pay_type_arr[1]];
                        $va[1]='in';
                        $va[2]=array(2,22);
                    }elseif($pay_type_arr[0]==4){
                        $va[2]=4;
                        $where_summary[]=['online_pay_type','=',$this->pay_type_arr1[$pay_type_arr[1]]];
                        $where_summary[]=['pay_type','=',4];
                        $is_online = 1;
                        unset($where[$k]);
                    }
                }
                if ($va[0] == 'o.village_id') {
                    $village_id = $va[2];
                }
            }
            $where = array_values($where);
        }
        $where_summary[] = ['is_paid', '=', 1];
        $where_summary[] = ['village_id', '=', $village_id];
        $summary_list = $db_house_new_pay_order_summary->getLists($where_summary, '*');
        if (!empty($summary_list)) {
            $summary_list = $summary_list->toArray();
            if (!empty($summary_list)) {
                foreach ($summary_list as $val) {
                    $summary_arr[]=$val['summary_id'];
                }
            }
        }
        if (isset($summary_arr)&&!empty($summary_arr)){
            $where[]=['o.summary_id','in',$summary_arr];
        }

        // 开票状态筛选
        $record = $db_house_village_detail_record->getList([['order_type','=',2]],'order_id');
        $record_order = [0];
        if(!empty($record)){
            $record_order = array_column($record,'order_id');
            // 开票
            if ($record_status == 1) {
                $where[]=['o.order_id','in',$record_order];
            } elseif ($record_status == 2) {
                // 未开票
                $where[]=['o.order_id','not in',$record_order];
            }
        }else{
            if (isset($record_status) && $record_status == 1) {
                $where[]=['o.order_id','in',$record_order];
            } elseif (isset($record_status) && $record_status == 2) {
                $where[]=['o.order_id','not in',$record_order];
            }
        }

        $list = $db_house_new_pay_order->getPayOrder($where, $where1, $field, $order);
        $count = [];
        $count['total_money'] = 0;
        $count['modify_money'] = 0;
        $count['pay_money'] = 0;
        $count['late_payment_money'] = 0;
        $count['prepare_pay_money'] = 0;
        $count['refund_money'] = 0;
        $filename='已缴账单明细表';
        if(is_array($exporttype)){
            if(isset($exporttype['filename']) && !empty($exporttype['filename'])){
                $filename=$exporttype['filename'];
            }
            if(isset($exporttype['exporttype']) && !empty($exporttype['exporttype'])){
                $exporttype=$exporttype['exporttype'];
            }else{
                $exporttype='';
            }
        }
        if($exporttype=='exportRefund'){
            $filename='退款账单明细';
        }
        $digit_info=array();
        if ($list) {
            $list= $list->toArray();
            if(empty($list)){
                throw new \think\Exception("暂无数据导出");
            }
            $data_list = [];

            $where_pay = [];
            $pay_list = $db_house_new_offline_pay->getList($where_pay, '*');
            $payList = [];
            if (!empty($pay_list)) {
                $pay_list = $pay_list->toArray();
                if (!empty($pay_list)) {
                    foreach ($pay_list as $vv) {
                        $payList[$vv['id']] = $vv['name'];
                    }
                }
            }
            foreach ($list as $k => $v) {
                $count['total_money'] = $count['total_money'] + $v['total_money'];
                $count['modify_money'] = $count['modify_money'] + $v['modify_money'];
                $count['pay_money'] = $count['pay_money'] + $v['pay_money'];
                $count['late_payment_money'] = $count['late_payment_money'] + $v['late_payment_money'];
                $count['prepare_pay_money'] = $count['prepare_pay_money'] + $v['prepare_pay_money'];
                $count['refund_money'] = $count['refund_money'] + $v['refund_money'];
                if (isset($v['update_time']) && $v['update_time'] > 1) {
                    $v['updateTime'] = date('Y-m-d', $v['update_time']);
                }
                if (isset($v['pay_time']) && $v['pay_time'] > 1) {
                    $v['pay_time'] = date('Y-m-d H:i:s', $v['pay_time']);
                }
                if (isset($v['service_start_time']) && $v['service_start_time'] > 1) {
                    $v['service_start_time'] = date('Y-m-d', $v['service_start_time']);
                }else{
                    $v['service_start_time'] ='无';
                }
                if (isset($v['service_end_time']) && $v['service_end_time'] > 1) {
                    $v['service_end_time'] = date('Y-m-d', $v['service_end_time']);
                }else{
                    $v['service_end_time']='无';
                }

                $record = $db_house_village_detail_record->getOne(['order_id' => $v['order_id']]);
                if (empty($record)) {
                    $v['record_status'] = '未开票';
                    $v['print_number'] = '';
                } else {
                    $v['record_status'] = '已开票';
                }
                $no = $print_number->getList([['order_ids','find in set',$v['order_id']]],'print_number');
                $print_num = [];
                foreach ($no as $k1 => $v1){
                    if(!empty($v1['print_number'])){
                        $print_num[] = sprintf('%07d',$v1['print_number']);
                    }
                }
                $v['print_number'] = (!empty($print_num)) ? implode(',',$print_num) : '';
                if ($v['is_refund'] == 1) {
                    $v['order_status'] = '未退款';
                }elseif($v['refund_money'] >= $v['pay_money']){
                    $v['order_status'] = '已退款';
                } else {
                    $v['order_status'] = '部分退款';
                }
                if (empty($v['refund_type']) || ($v['refund_type']<1)) {
                    $v['refund_type'] ='无';
                }elseif($v['refund_type']==1){
                    $v['refund_type'] ='仅退款，不还原账单';
                }elseif($v['refund_type']==2){
                    $v['refund_type'] ='退款且还原账单';
                }
                $number = '';
                $number_name = '';
                if (!empty($v['position_id'])) {
                    $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                    if (!empty($position_num)) {
                        $position_num = $position_num->toArray();
                        if (!empty($position_num)) {
                            $position_num1 = $position_num[0];
                            if (empty($position_num1['garage_num'])) {
                                $position_num1['garage_num'] = '临时车库';
                            }
                            $room1=[];
                            $number = $position_num1['position_num'];
                            $number_name = $position_num1['garage_num'];
                        }
                    }
                }elseif (!empty($v['room_id'])) {
                    $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                    if (!empty($room)) {
                        $room = $room->toArray();
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $number = $room1['room'];
                            $number_name = $room1['single_name'] . '(栋)';
                        }
                    }
                }
                if (!empty($v['summary_id'])){
                    $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
                    $summary_info= $db_house_new_pay_order_summary->getOne(['summary_id' => $v['summary_id']]);
                    if (!empty($summary_info)){
                        $v['order_serial']=$summary_info['paid_orderid'];
                        $v['order_no']=$summary_info['order_no'];
                    }
                }
                $admininfo = $db_admin->getOne(['id' => $v['role_id']]);
                $v['role_name'] = '';
                if ($admininfo && !$admininfo->isEmpty()) {
                    $admininfo = $admininfo->toArray();
                    if (!empty($admininfo['realname'])){
                        $v['role_name'] = $admininfo['realname'];
                    }else{
                        $v['role_name'] = $admininfo['account'];
                    }
                }

                $v['numbers'] = $number;
                if($exporttype=='exportRefund'){
                    $floor_name = isset($room1['floor_name']) ? $room1['floor_name'] . '(单元)' : '';
                    $layer_name = isset($room1['layer_name']) ? $room1['layer_name'] . '(层)' : '';
                    $data_list[$k]['full_number_name'] = $number_name.$floor_name.$layer_name.$v['numbers'];
                    $data_list[$k]['name'] = $v['name'];
                    $data_list[$k]['phone'] = $v['phone'];
                    $data_list[$k]['charge_number_name'] = $v['charge_number_name'];
                    $data_list[$k]['project_name'] = $v['project_name'];
                    $data_list[$k]['order_no'] = '';
                    //$data_list[$k]['order_serial'] = $v['order_serial'];
                    if (!empty($v['summary_id'])) {
                        $summary_info = $db_house_new_pay_order_summary->getOne(['summary_id' => $v['summary_id']]);
                        if (!empty($summary_info)) {
                            $data_list[$k]['order_no'] = $summary_info['order_no'];
                            //$data_list[$k]['order_serial'] = $summary_info['paid_orderid'];
                        }
                    }
                    $data_list[$k]['total_money'] = $v['total_money'];
                    $data_list[$k]['pay_money'] = $v['pay_money'];
                    $data_list[$k]['refund_money'] = $v['refund_money'];
                    if (!empty($v['pay_type'])) {
                        $data_list[$k]['pay_type'] = $this->pay_type[$v['pay_type']];
                    } else {
                        $data_list[$k]['pay_type'] = '无';
                    }
                    if (isset($summary_info) && isset($summary_info['pay_type']) && !empty($summary_info['pay_type'])) {
                        if ($summary_info['pay_type'] == 2 || $summary_info['pay_type'] == 22) {
                            $offline_pay_type = '';
                            if (!empty($payList) && !empty($summary_info['offline_pay_type'])) {
                                if(strpos($summary_info['offline_pay_type'],',')>0){
                                    $offline_pay_type_arr=explode(',',$summary_info['offline_pay_type']);
                                    foreach ($offline_pay_type_arr as $opay){
                                        if(isset($payList[$opay])){
                                            $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                                        }
                                    }
                                }else{
                                    $offline_pay_type = isset($payList[$summary_info['offline_pay_type']]) ? $payList[$summary_info['offline_pay_type']]:'';
                                }

                            }

                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $offline_pay_type;
                        } elseif (in_array($summary_info['pay_type'], [1, 3])) {
                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']];
                        } elseif ($summary_info['pay_type'] == 4) {
                            if (empty($summary_info['online_pay_type'])) {
                                $online_pay_type1 = '余额支付';
                            } else {
                                $online_pay_type1 = $this->getPayTypeMsg($summary_info['online_pay_type']);
                            }
                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $online_pay_type1;
                        }
                        unset($summary_info);
                    }
                    $data_list[$k]['pay_time'] = $v['pay_time'];
                    $data_list[$k]['update_time'] = $v['update_time']>1 ? date('Y-m-d H:i:s',$v['update_time']):'';
                    $data_list[$k]['record_status'] =$v['record_status'];
                    $data_list[$k]['order_status'] =$v['order_status'];
                    $data_list[$k]['refund_type'] = $v['refund_type'];
                    $data_list[$k]['number_name'] = $number_name;
                    $data_list[$k]['floor_name'] = isset($room1['floor_name']) ? $room1['floor_name'] . '(单元)' : '';
                    $data_list[$k]['layer_name'] = isset($room1['layer_name']) ? $room1['layer_name'] . '(层)' : '';
                    $data_list[$k]['numbers'] = $v['numbers'];
                    $data_list[$k]['modify_money'] = $v['modify_money'];
                    if (!empty($v['diy_type'])) {
                        $data_list[$k]['diy_type'] = $this->diy_type[$v['diy_type']];
                    } else {
                        $data_list[$k]['diy_type'] = '无';
                    }
                    $data_list[$k]['score_used_count'] = $v['score_used_count'];
                    $data_list[$k]['service_start_time'] = $v['service_start_time'];
                    $data_list[$k]['service_end_time'] = $v['service_end_time'];
                    $data_list[$k]['ammeter'] = $v['now_ammeter'] - $v['last_ammeter'];
                    $data_list[$k]['role_id'] = $v['role_name'];
                    $data_list[$k]['late_payment_day'] = $v['late_payment_day'];
                    $data_list[$k]['late_payment_money'] = $v['late_payment_money'];
                    $data_list[$k]['service_month_num'] = $v['service_month_num'];
                    $data_list[$k]['prepare_pay_money'] = $v['prepare_pay_money'];
                }else {
                    $data_list[$k]['number_name'] = $number_name;
                    $data_list[$k]['floor_name'] = isset($room1['floor_name']) ? $room1['floor_name'] . '(单元)' : '';
                    $data_list[$k]['layer_name'] = isset($room1['layer_name']) ? $room1['layer_name'] . '(层)' : '';
                    $data_list[$k]['numbers'] = $v['numbers'];
                    $data_list[$k]['name'] = $v['name'];
                    $data_list[$k]['phone'] = $v['phone'];
                    $data_list[$k]['charge_number_name'] = $v['charge_number_name'];
                    $data_list[$k]['project_name'] = $v['project_name'];
                    $data_list[$k]['order_no'] = '';
                    $data_list[$k]['order_serial'] = $v['order_serial'];
                    $remark = '';
                    if (!empty($v['summary_id'])) {
                        $summary_info = $db_house_new_pay_order_summary->getOne(['summary_id' => $v['summary_id']]);
                        if (!empty($summary_info)) {
                            $data_list[$k]['order_no'] = $summary_info['order_no'];
                            $data_list[$k]['order_serial'] = $summary_info['paid_orderid'];
                            $remark = $summary_info['remark'];
                        }
                    }
                    $data_list[$k]['total_money'] = $v['total_money'];
                    $data_list[$k]['modify_money'] = $v['modify_money'];
                    $data_list[$k]['pay_money'] = $v['pay_money'];
                    if (!empty($v['diy_type'])) {
                        $data_list[$k]['diy_type'] = $this->diy_type[$v['diy_type']];
                    } else {
                        $data_list[$k]['diy_type'] = '无';
                    }

                    $data_list[$k]['score_used_count'] = $v['score_used_count'];
                    $data_list[$k]['pay_time'] = $v['pay_time'];
                    if (!empty($v['pay_type'])) {
                        $data_list[$k]['pay_type'] = $this->pay_type[$v['pay_type']];
                    } else {
                        $data_list[$k]['pay_type'] = '无';
                    }
                    if (isset($summary_info['pay_type']) && !empty($summary_info['pay_type'])) {
                        if ($summary_info['pay_type'] == 2  || $summary_info['pay_type'] == 22) {
                            $offline_pay_type = '';
                            if (!empty($payList) && !empty($summary_info['offline_pay_type'])) {
                                if(strpos($summary_info['offline_pay_type'],',')>0){
                                    $offline_pay_type_arr=explode(',',$summary_info['offline_pay_type']);
                                    foreach ($offline_pay_type_arr as $opay){
                                        if(isset($payList[$opay])){
                                            $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                                        }
                                    }
                                }else{
                                    $offline_pay_type = isset($payList[$summary_info['offline_pay_type']]) ? $payList[$summary_info['offline_pay_type']]:'';
                                }

                            }

                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $offline_pay_type;
                        } elseif (in_array($summary_info['pay_type'], [1, 3])) {
                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']];
                        } elseif ($summary_info['pay_type'] == 4) {
                            if (empty($summary_info['online_pay_type'])) {
                                $online_pay_type1 = '余额支付';
                            } else {
                                $online_pay_type1 = $this->getPayTypeMsg($summary_info['online_pay_type']);
                            }
                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $online_pay_type1;
                        }
                        unset($summary_info);
                    }

                    $data_list[$k]['service_start_time'] = $v['service_start_time'];
                    $data_list[$k]['service_end_time'] = $v['service_end_time'];
                    $data_list[$k]['ammeter'] = $v['now_ammeter'] - $v['last_ammeter'];
                    $data_list[$k]['role_id'] = $v['role_name'];
                    $data_list[$k]['late_payment_day'] = $v['late_payment_day'];
                    $data_list[$k]['late_payment_money'] = $v['late_payment_money'];
                    $data_list[$k]['service_month_num'] = $v['service_month_num'];
                    $data_list[$k]['prepare_pay_money'] = $v['prepare_pay_money'];
                    $data_list[$k]['refund_money'] = $v['refund_money'];
                    $data_list[$k]['remark'] = (!empty($remark)) ? $remark : $v['remark'];
                    $data_list[$k]['record_status'] =$v['record_status'];
                    $data_list[$k]['print_number'] =$v['print_number'];
                }
                if(empty($digit_info)){
                    $data_list[$k]['late_payment_money']= formatNumber($data_list[$k]['late_payment_money'],2,1);
                    $data_list[$k]['prepare_pay_money']= formatNumber($data_list[$k]['prepare_pay_money'],2,1);
                    $data_list[$k]['refund_money']= formatNumber($data_list[$k]['refund_money'],2,1);
                    $data_list[$k]['total_money']= formatNumber($data_list[$k]['total_money'],2,1);
                    $data_list[$k]['modify_money']= formatNumber($data_list[$k]['modify_money'],2,1);
                    $data_list[$k]['pay_money']= formatNumber($data_list[$k]['pay_money'],2,1);
                    if(isset($v['village_balance']) && ($v['village_balance']>0)){
                        $v['system_balance']=$v['system_balance']+$v['village_balance'];
                    }
                    $data_list[$k]['pay_amount_points']=formatNumber($v['pay_amount_points']/100,2,1);
                    $data_list[$k]['system_balance']=formatNumber($v['system_balance'],2,1);
                    $data_list[$k]['score_deducte']=formatNumber($v['score_deducte'],2,1);


                }else{
                    if($v['order_type'] == 'water' || $v['order_type'] == 'electric' || $v['order_type'] == 'gas'){
                        $data_list[$k]['late_payment_money']= formatNumber($data_list[$k]['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['prepare_pay_money']= formatNumber($data_list[$k]['prepare_pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['refund_money']= formatNumber($data_list[$k]['refund_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['total_money']= formatNumber($data_list[$k]['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['modify_money']= formatNumber($data_list[$k]['modify_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['pay_money']= formatNumber($data_list[$k]['pay_money'],$digit_info['meter_digit'],$digit_info['type']);

                        $data_list[$k]['pay_amount_points']=formatNumber($v['pay_amount_points']/100,$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['system_balance']=formatNumber($v['system_balance'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['score_deducte']=formatNumber($v['score_deducte'],$digit_info['meter_digit'],$digit_info['type']);

                    }else{
                        $data_list[$k]['late_payment_money']= formatNumber($data_list[$k]['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['prepare_pay_money']= formatNumber($data_list[$k]['prepare_pay_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['refund_money']= formatNumber($data_list[$k]['refund_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['total_money']= formatNumber($data_list[$k]['total_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['modify_money']= formatNumber($data_list[$k]['modify_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['pay_money']= formatNumber($data_list[$k]['pay_money'],$digit_info['other_digit'],$digit_info['type']);

                        $data_list[$k]['pay_amount_points']=formatNumber($v['pay_amount_points']/100,$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['system_balance']=formatNumber($v['system_balance'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['score_deducte']=formatNumber($v['score_deducte'],$digit_info['other_digit'],$digit_info['type']);
                    }
                }
                $data_list[$k]['car_number']=!empty($v['car_number'])? $v['car_number']:'';
            }
        }
        $data = $count;
        if(empty($digit_info)){
            $count['total_money']= formatNumber($count['total_money'],2,1);
            $count['modify_money']= formatNumber($count['modify_money'],2,1);
            $count['pay_money']= formatNumber($count['pay_money'],2,1);
            $count['late_payment_money']= formatNumber($count['late_payment_money'],2,1);
            $count['prepare_pay_money']= formatNumber($count['prepare_pay_money'],2,1);
            $count['refund_money']= formatNumber($count['refund_money'],2,1);
        }else{
            $count['total_money']= formatNumber($count['total_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['modify_money']= formatNumber($count['modify_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['pay_money']= formatNumber($count['pay_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['late_payment_money']= formatNumber($count['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['prepare_pay_money']= formatNumber($count['prepare_pay_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['refund_money']= formatNumber($count['refund_money'],$digit_info['other_digit'],$digit_info['type']);
       }

        $data['total_money'] = $count['total_money'] . '元';
        $data['modify_money'] = $count['modify_money'] . '元';
        $data['pay_money'] = $count['pay_money'] . '元';
        $data['late_payment_money'] = $count['late_payment_money'] . '元';
        $data['prepare_pay_money'] = $count['prepare_pay_money'] . '元';
        $data['refund_money'] = $count['refund_money'] . '元';
        $data['list'] = $data_list;
       
        if($exporttype=='exportRefund'){
            $title = ['房间号/车位号', '缴费人', '电话', '所属收费科目', '收费项目名称', '订单编号', '应收费用（元）', '实际缴费金额', '退款金额', '支付方式', '支付时间', '退款时间','开票状态','账单状态','账单模式', '楼栋/车库', '单元', '楼层','房间/车位','修改后费用', '优惠方式', '积分使用数量', '计费开始时间', '计费结束时间', '使用电量', '收款人', '滞纳天数', '滞纳金费用（元）', '预缴周期', '预缴费用（元）','线上支付金额','余额支付金额','积分抵扣金额','车牌号'];
        }else{
            $title = ['楼栋/车库', '单元', '楼层', '房间号/车位号', '业主名', '电话', '所属收费科目', '收费项目名称', '订单编号', '支付单号', '应收费用（元）', '修改后费用', '实际缴费金额', '优惠方式', '积分使用数量', '支付时间', '支付方式', '计费开始时间', '计费结束时间', '使用电量', '收款人', '滞纳天数', '滞纳金费用（元）', '预缴周期', '预缴费用（元）', '退款总金额', '备注','开票状态','打印编号','线上支付金额','余额支付金额','积分抵扣金额','车牌号'];
        }
        $res = $this->saveExcel($title, $data, $filename . time(),$exporttype,$exportPattern);
        return $res;
    }

    /**
     *导出退款账单
     * @author: zhubaodi
     * @date : 2021/6/26
     */
    public function exportRefundOrders($where = [], $where1 = '', $field = true, $order = 'o.order_id DESC',$exporttype='',$exportPattern = 2)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $db_house_new_offline_pay = new HouseNewOfflinePay();
        $print_number = new HouseVillagePrintTemplateNumber();
        $db_admin = new HouseAdmin();
        $db_house_new_pay_order_refund= new HouseNewPayOrderRefund();

        $where_summary = [];
        $record_status = 0;
        $village_id = 0;
        if (!empty($where)) {
            foreach ($where as $k => &$va) {
                if ($va[0] == 'record_status') {
                    $record_status = $va[2];
                    unset($where[$k]);
                }
                if ($va[0] == 'o.pay_type') {
                    $pay_type_arr =explode('-',$va[2]);
                    if ($pay_type_arr[0]==1){
                        $va[2]=1;
                        $where_summary[]=['pay_type','=',1];
                        unset($where[$k]);
                    }elseif($pay_type_arr[0]==2){
                        $where[]=['o.offline_pay_type','find in set',$pay_type_arr[1]];
                        $va[1]='in';
                        $va[2]=array(2,22);
                    }elseif($pay_type_arr[0]==4){
                        $va[2]=4;
                        $where_summary[]=['online_pay_type','=',$this->pay_type_arr1[$pay_type_arr[1]]];
                        $where_summary[]=['pay_type','=',4];
                        $is_online = 1;
                        unset($where[$k]);
                    }
                }
                if ($va[0] == 'o.village_id') {
                    $village_id = $va[2];
                }
            }
            $where = array_values($where);
        }
        $where_summary[] = ['is_paid', '=', 1];
        $where_summary[] = ['village_id', '=', $village_id];
        $summary_list = $db_house_new_pay_order_summary->getLists($where_summary, '*');
        if (!empty($summary_list)) {
            $summary_list = $summary_list->toArray();
            if (!empty($summary_list)) {
                foreach ($summary_list as $val) {
                    $summary_arr[]=$val['summary_id'];
                }
            }
        }
        if (isset($summary_arr)&&!empty($summary_arr)){
            $where[]=['o.summary_id','in',$summary_arr];
        }

        // 开票状态筛选
        $record = $db_house_village_detail_record->getList([['order_type','=',2]],'order_id');
        $record_order = [0];
        if(!empty($record)){
            $record_order = array_column($record,'order_id');
            // 开票
            if ($record_status == 1) {
                $where[]=['o.order_id','in',$record_order];
            } elseif ($record_status == 2) {
                // 未开票
                $where[]=['o.order_id','not in',$record_order];
            }
        }else{
            if (isset($record_status) && $record_status == 1) {
                $where[]=['o.order_id','in',$record_order];
            } elseif (isset($record_status) && $record_status == 2) {
                $where[]=['o.order_id','not in',$record_order];
            }
        }

        $list = $db_house_new_pay_order->getPayOrder($where, $where1, $field, $order);

        $count = [];
        $count['total_money'] = 0;
        $count['modify_money'] = 0;
        $count['pay_money'] = 0;
        $count['late_payment_money'] = 0;
        $count['prepare_pay_money'] = 0;
        $count['refund_money'] = 0;
        $filename='退款账单明细';

        if ($list) {
            $list= $list->toArray();
            if(empty($list)){
                throw new \think\Exception("暂无数据导出");
            }
            $where_pay = [];
            $pay_list = $db_house_new_offline_pay->getList($where_pay, '*');
            $payList = [];
            if (!empty($pay_list)) {
                $pay_list = $pay_list->toArray();
                if (!empty($pay_list)) {
                    foreach ($pay_list as $vv) {
                        $payList[$vv['id']] = $vv['name'];
                    }
                }
            }
            $data_list = [];
            $data_refund_list = [];

	    $digit_info=array();
            $kr=0;
            foreach ($list as $k => $v) {
                $count['total_money'] = $count['total_money'] + $v['total_money'];
                $count['modify_money'] = $count['modify_money'] + $v['modify_money'];
                $count['pay_money'] = $count['pay_money'] + $v['pay_money'];
                $count['late_payment_money'] = $count['late_payment_money'] + $v['late_payment_money'];
                $count['prepare_pay_money'] = $count['prepare_pay_money'] + $v['prepare_pay_money'];
                $count['refund_money'] = $count['refund_money'] + $v['refund_money'];
                if (isset($v['update_time']) && $v['update_time'] > 1) {
                    $v['updateTime'] = date('Y-m-d', $v['update_time']);
                }
                if (isset($v['pay_time']) && $v['pay_time'] > 1) {
                    $v['pay_time'] = date('Y-m-d H:i:s', $v['pay_time']);
                }
                if (isset($v['service_start_time']) && $v['service_start_time'] > 1) {
                    $v['service_start_time'] = date('Y-m-d', $v['service_start_time']);
                }else{
                    $v['service_start_time'] ='无';
                }
                if (isset($v['service_end_time']) && $v['service_end_time'] > 1) {
                    $v['service_end_time'] = date('Y-m-d', $v['service_end_time']);
                }else{
                    $v['service_end_time']='无';
                }
                if ($v['is_refund'] == 1) {
                    $v['order_status'] = '未退款';
                }elseif($v['refund_money'] >= $v['pay_money']){
                    $v['order_status'] = '已退款';
                } else {
                    $v['order_status'] = '部分退款';
                }
                if (empty($v['refund_type']) || ($v['refund_type']<1)) {
                    $v['refund_type'] ='无';
                }elseif($v['refund_type']==1){
                    $v['refund_type'] ='仅退款，不还原账单';
                }elseif($v['refund_type']==2){
                    $v['refund_type'] ='退款且还原账单';
                }
                $number = '';
                $number_name = '';
                if (!empty($v['position_id'])) {
                    $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                    if (!empty($position_num)) {
                        $position_num = $position_num->toArray();
                        if (!empty($position_num)) {
                            $position_num1 = $position_num[0];
                            if (empty($position_num1['garage_num'])) {
                                $position_num1['garage_num'] = '临时车库';
                            }
                            $room1=[];
                            $number = $position_num1['position_num'];
                            $number_name = $position_num1['garage_num'];
                        }
                    }
                }elseif (!empty($v['room_id'])) {
                    $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                    if (!empty($room)) {
                        $room = $room->toArray();
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $number = $room1['room'];
                            $number_name = $room1['single_name'] . '栋';
                        }
                    }
                }
                if (!empty($v['summary_id'])){
                    $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
                    $summary_info= $db_house_new_pay_order_summary->getOne(['summary_id' => $v['summary_id']]);
                    if (!empty($summary_info)){
                        $v['order_serial']=$summary_info['paid_orderid'];
                        $v['order_no']=$summary_info['order_no'];
                    }
                }
                $admininfo = $db_admin->getOne(['id' => $v['role_id']]);
                $v['role_name'] = '';
                if ($admininfo && !$admininfo->isEmpty()) {
                    $admininfo = $admininfo->toArray();
                    if (!empty($admininfo['realname'])){
                        $v['role_name'] = $admininfo['realname'];
                    }else{
                        $v['role_name'] = $admininfo['account'];
                    }
                }
                   $v['numbers'] = $number;

                    $data_list[$k]['number_name'] = $number_name;
                    $data_list[$k]['floor_name'] = isset($room1['floor_name']) ? $room1['floor_name'] . '单元' : '';
                    $data_list[$k]['layer_name'] = isset($room1['layer_name']) ? $room1['layer_name'] . '层' : '';
                    $data_list[$k]['numbers'] = $v['numbers'];
                    $data_list[$k]['name'] = $v['name'];
                    $data_list[$k]['phone'] = $v['phone'];
                    $data_list[$k]['charge_number_name'] = $v['charge_number_name'];
                    $data_list[$k]['project_name'] = $v['project_name'];
                    $data_list[$k]['order_no'] = '';
                    $data_list[$k]['order_serial'] = $v['order_serial'];
                    $remark = '';
                    if (!empty($v['summary_id'])) {
                        $summary_info = $db_house_new_pay_order_summary->getOne(['summary_id' => $v['summary_id']]);
                        if (!empty($summary_info)) {
                            $data_list[$k]['order_no'] = $summary_info['order_no'];
                            $data_list[$k]['order_serial'] = $summary_info['paid_orderid'];
                            $remark = $summary_info['remark'];
                        }
                    }
                    $data_list[$k]['total_money'] = $v['total_money'];
                    $data_list[$k]['modify_money'] = $v['modify_money'];
                    $data_list[$k]['pay_money'] = $v['pay_money'];
                    $data_list[$k]['pay_amount_points']=$v['pay_amount_points']/100;
                    $data_list[$k]['system_balance']=$v['system_balance'];
                    $data_list[$k]['score_deducte']=$v['score_deducte'];
                    $data_list[$k]['score_used_count'] = $v['score_used_count'];
                if (!empty($v['diy_type'])) {
                        $data_list[$k]['diy_type'] = $this->diy_type[$v['diy_type']];
                    } else {
                        $data_list[$k]['diy_type'] = '无';
                    }
                    $data_list[$k]['pay_time'] = $v['pay_time'];
                    if (!empty($v['pay_type'])) {
                        $data_list[$k]['pay_type'] = $this->pay_type[$v['pay_type']];
                    } else {
                        $data_list[$k]['pay_type'] = '无';
                    }
                    if (isset($summary_info['pay_type']) && !empty($summary_info['pay_type'])) {
                        if ($summary_info['pay_type'] == 2 || $summary_info['pay_type'] == 22) {
                            $offline_pay_type = '';
                            if (!empty($payList) && !empty($summary_info['offline_pay_type'])) {
                                if(strpos($summary_info['offline_pay_type'],',')>0){
                                    $offline_pay_type_arr=explode(',',$summary_info['offline_pay_type']);
                                    foreach ($offline_pay_type_arr as $opay){
                                        if(isset($payList[$opay])){
                                            $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                                        }
                                    }
                                }else{
                                    $offline_pay_type = isset($payList[$summary_info['offline_pay_type']]) ? $payList[$summary_info['offline_pay_type']]:'';
                                }

                            }
                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $offline_pay_type;
                        } elseif (in_array($summary_info['pay_type'], [1, 3])) {
                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']];
                        } elseif ($summary_info['pay_type'] == 4) {
                            if (empty($summary_info['online_pay_type'])) {
                                $online_pay_type1 = '余额支付';
                            } else {
                                $online_pay_type1 = $this->getPayTypeMsg($summary_info['online_pay_type']);
                            }
                            $data_list[$k]['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $online_pay_type1;
                        }
                        unset($summary_info);
                    }

                    $data_list[$k]['service_start_time'] = $v['service_start_time'];
                    $data_list[$k]['service_end_time'] = $v['service_end_time'];
                    $data_list[$k]['ammeter'] = $v['now_ammeter'] - $v['last_ammeter'];
                    $data_list[$k]['role_id'] = $v['role_name'];
                    $data_list[$k]['late_payment_day'] = $v['late_payment_day'];
                    $data_list[$k]['late_payment_money'] = $v['late_payment_money'];
                    $data_list[$k]['service_month_num'] = $v['service_month_num'];
                    $data_list[$k]['prepare_pay_money'] = $v['prepare_pay_money'];
                    $data_list[$k]['remark'] = (!empty($remark)) ? $remark : $v['remark'];
                    $data_list[$k]['refund_money'] = $v['refund_money'];
                if(empty($digit_info)){
                    $data_list[$k]['late_payment_money']= formatNumber($data_list[$k]['late_payment_money'],2,1);
                    $data_list[$k]['prepare_pay_money']= formatNumber($data_list[$k]['prepare_pay_money'],2,1);
                    $data_list[$k]['refund_money']= formatNumber($data_list[$k]['refund_money'],2,1);
                    $data_list[$k]['total_money']= formatNumber($data_list[$k]['total_money'],2,1);
                    $data_list[$k]['modify_money']= formatNumber($data_list[$k]['modify_money'],2,1);
                    $data_list[$k]['pay_money']= formatNumber($data_list[$k]['pay_money'],2,1);

                    $data_list[$k]['pay_amount_points']=formatNumber($data_list[$k]['pay_amount_points']/100,2,1);
                    $data_list[$k]['system_balance']=formatNumber($data_list[$k]['system_balance'],2,1);
                    $data_list[$k]['score_deducte']=formatNumber($data_list[$k]['score_deducte'],2,1);
                }else{
                    if($v['order_type'] == 'water' || $v['order_type'] == 'electric' || $v['order_type'] == 'gas'){
                        $data_list[$k]['late_payment_money']= formatNumber($data_list[$k]['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['prepare_pay_money']= formatNumber($data_list[$k]['prepare_pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['refund_money']= formatNumber($data_list[$k]['refund_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['total_money']= formatNumber($data_list[$k]['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['modify_money']= formatNumber($data_list[$k]['modify_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['pay_money']= formatNumber($data_list[$k]['pay_money'],$digit_info['meter_digit'],$digit_info['type']);

                        $data_list[$k]['pay_amount_points']=formatNumber($data_list[$k]['pay_amount_points']/100,$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['system_balance']=formatNumber($data_list[$k]['system_balance'],$digit_info['meter_digit'],$digit_info['type']);
                        $data_list[$k]['score_deducte']=formatNumber($data_list[$k]['score_deducte'],$digit_info['meter_digit'],$digit_info['type']);

                    }else{
                        $data_list[$k]['late_payment_money']= formatNumber($data_list[$k]['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['prepare_pay_money']= formatNumber($data_list[$k]['prepare_pay_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['refund_money']= formatNumber($data_list[$k]['refund_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['total_money']= formatNumber($data_list[$k]['total_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['modify_money']= formatNumber($data_list[$k]['modify_money'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['pay_money']= formatNumber($data_list[$k]['pay_money'],$digit_info['other_digit'],$digit_info['type']);

                        $data_list[$k]['pay_amount_points']=formatNumber($data_list[$k]['pay_amount_points']/100,$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['system_balance']=formatNumber($data_list[$k]['system_balance'],$digit_info['other_digit'],$digit_info['type']);
                        $data_list[$k]['score_deducte']=formatNumber($data_list[$k]['score_deducte'],$digit_info['other_digit'],$digit_info['type']);
                    }
                }
                $refund_list=$db_house_new_pay_order_refund->getList(['order_id'=>$v['order_id']]);
                if(!empty($refund_list)){
                    $refund_list=$refund_list->toArray();
                    if(!empty($refund_list)){
                        foreach ($refund_list as $vr){
                            $data_refund_list[$kr]['order_id']=$v['order_id'];
                            $data_refund_list[$kr]['number_name']=$data_list[$k]['number_name'];
                            $data_refund_list[$kr]['floor_name']=$data_list[$k]['floor_name'];
                            $data_refund_list[$kr]['layer_name']=$data_list[$k]['layer_name'];
                            $data_refund_list[$kr]['numbers']=$data_list[$k]['numbers'];
                            $data_refund_list[$kr]['name']=$data_list[$k]['name'];
                            $data_refund_list[$kr]['phone']=$data_list[$k]['phone'];
                            $data_refund_list[$kr]['charge_number_name']=$data_list[$k]['charge_number_name'];
                            $data_refund_list[$kr]['project_name']=$data_list[$k]['project_name'];
                            $data_refund_list[$kr]['order_no']=$data_list[$k]['order_no'];
                            $data_refund_list[$kr]['order_serial']=$data_list[$k]['order_serial'];
                            $data_refund_list[$kr]['total_money']=$data_list[$k]['total_money'];
                            $data_refund_list[$kr]['modify_money']=$data_list[$k]['modify_money'];
                            $data_refund_list[$kr]['pay_money']=$data_list[$k]['pay_money'];
                            $data_refund_list[$kr]['pay_amount_points']=$data_list[$k]['pay_amount_points'];
                            $data_refund_list[$kr]['system_balance']=$data_list[$k]['system_balance'];
                            $data_refund_list[$kr]['score_deducte']=$data_list[$k]['score_deducte'];
                            $data_refund_list[$kr]['score_used_count']=$data_list[$k]['score_used_count'];
                            $data_refund_list[$kr]['diy_type']=$data_list[$k]['diy_type'];
                            $data_refund_list[$kr]['pay_time']=$data_list[$k]['pay_time'];
                            $data_refund_list[$kr]['pay_type']=$data_list[$k]['pay_type'];
                            $data_refund_list[$kr]['service_start_time']=$data_list[$k]['service_start_time'];
                            $data_refund_list[$kr]['service_end_time']=$data_list[$k]['service_end_time'];
                            $data_refund_list[$kr]['ammeter']=$data_list[$k]['ammeter'];
                            $data_refund_list[$kr]['role_id']=$data_list[$k]['role_id'];
                            $data_refund_list[$kr]['late_payment_day']=$data_list[$k]['late_payment_day'];
                            $data_refund_list[$kr]['late_payment_money']=$data_list[$k]['late_payment_money'];
                            $data_refund_list[$kr]['service_month_num']=$data_list[$k]['service_month_num'];
                            $data_refund_list[$kr]['prepare_pay_money']=$data_list[$k]['prepare_pay_money'];
                            $data_refund_list[$kr]['remark']=$data_list[$k]['remark'];
                            $data_refund_list[$kr]['refund_type']=$v['refund_type'];
                            $data_refund_list[$kr]['refund_money']=$data_list[$k]['refund_money'];

                            if(empty($digit_info)){
                                $data_refund_list[$kr]['refund_online_money']=formatNumber($vr['refund_online_money'],2,1);
                                $data_refund_list[$kr]['refund_balance_money']=formatNumber($vr['refund_balance_money'],2,1);
                                $data_refund_list[$kr]['refund_score_money']=formatNumber($vr['refund_score_money'],2,1);
                            }else{
                                if($v['order_type'] == 'water' || $v['order_type'] == 'electric' || $v['order_type'] == 'gas'){
                                    $data_refund_list[$kr]['refund_online_money']=formatNumber($vr['refund_online_money'],$digit_info['meter_digit'],$digit_info['type']);
                                    $data_refund_list[$kr]['refund_balance_money']=formatNumber($vr['refund_balance_money'],$digit_info['meter_digit'],$digit_info['type']);
                                    $data_refund_list[$kr]['refund_score_money']=formatNumber($vr['refund_score_money'],$digit_info['meter_digit'],$digit_info['type']);

                                }else{
                                    $data_refund_list[$kr]['refund_online_money']=formatNumber($vr['refund_online_money'],$digit_info['other_digit'],$digit_info['type']);
                                    $data_refund_list[$kr]['refund_balance_money']=formatNumber($vr['refund_balance_money'],$digit_info['other_digit'],$digit_info['type']);
                                    $data_refund_list[$kr]['refund_score_money']=formatNumber($vr['refund_score_money'],$digit_info['other_digit'],$digit_info['type']);
                                }
                            }
                            $data_refund_list[$kr]['refund_score_count']=formatNumber($vr['refund_score_count'],2,1);
                            $data_refund_list[$kr]['refund_reason']=$vr['refund_reason'];
                            $data_refund_list[$kr]['add_time']=date('Y-m-d H:i:s',$vr['add_time']);
                            $kr++;
                        }
                    }
                }


            }
        }
      //  print_r($data_refund_list);exit;
        $data = $count;
        if(empty($digit_info)){
            $count['total_money']= formatNumber($count['total_money'],2,1);
            $count['modify_money']= formatNumber($count['modify_money'],2,1);
            $count['pay_money']= formatNumber($count['pay_money'],2,1);
            $count['late_payment_money']= formatNumber($count['late_payment_money'],2,1);
            $count['prepare_pay_money']= formatNumber($count['prepare_pay_money'],2,1);
            $count['refund_money']= formatNumber($count['refund_money'],2,1);
        }else{
            $count['total_money']= formatNumber($count['total_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['modify_money']= formatNumber($count['modify_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['pay_money']= formatNumber($count['pay_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['late_payment_money']= formatNumber($count['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['prepare_pay_money']= formatNumber($count['prepare_pay_money'],$digit_info['other_digit'],$digit_info['type']);
            $count['refund_money']= formatNumber($count['refund_money'],$digit_info['other_digit'],$digit_info['type']);
        }

        $data['total_money'] = $count['total_money'] . '元';
        $data['modify_money'] = $count['modify_money'] . '元';
        $data['pay_money'] = $count['pay_money'] . '元';
        $data['late_payment_money'] = $count['late_payment_money'] . '元';
        $data['prepare_pay_money'] = $count['prepare_pay_money'] . '元';
        $data['refund_money'] = $count['refund_money'] . '元';
        $data['list'] = $data_refund_list;
        $title = ['楼栋/车库', '单元', '楼层', '房间号/车位号', '业主名', '电话', '所属收费科目', '收费项目名称', '订单编号', '支付单号', '应收费用（元）', '修改后费用', '实际缴费金额','线上支付金额','余额支付金额','积分抵扣金额','积分使用数量','优惠方式', '支付时间', '支付方式', '计费开始时间', '计费结束时间', '用量', '收款人', '滞纳天数', '滞纳金费用（元）', '预缴周期', '预缴费用（元）','备注','退款模式','退款总金额','线上支付退款金额','余额支付退款金额','积分抵扣退款金额','退还积分数量','退款原因','退款时间'];
        $res = $this->saveExcel($title, $data, $filename . time(),$exporttype,$exportPattern);
        return $res;
    }


    /**
     * 发送公众号缴费通知
     * @param int $user_id
     * @param string $href
     * @param string $address
     * @param string $property_name
     * @param float $total_money
     * @author lijie
     * @date_time 2021/06/26
     */
    public function sendCashierMessage($user_id = 0, $href = '', $address = '', $property_name = '', $total_money = 0.00,$property_id=0,$order_type='',$rule_id='',$name='')
    {
        $templateNewsService = new TemplateNewsService();
        $db_user = new User();
        $user_info = $db_user->getOne(['uid' => $user_id]);
        $test='';
        if($href){
            $test='，点击缴费！';
        }
        if (!empty($user_info)) {
            $order_type = $order_type ? (new HouseNewChargeService())->getType($order_type) : '';
            $rule_name = $rule_id ? (new HouseNewChargeRule())->where('id',$rule_id)->value('charge_name') : '';
            $datamsg = [
                'tempKey' => 'TM01008',//todo 类目模板TM01008
                'dataArr' => [
                    'href' => $href,
                    'wecha_id' => $user_info['openid'],
                    'first' => ' 尊敬的业主，您有新的账单！',
                    'keynote2' => $address,
                    'keynote1' => $property_name,
                    'remark' => '您的待缴总额为：[' . $total_money . ']'.$test,
                    'new_info' => [//新版本发送需要的信息
                        'type'=>0,//缴费提醒类型（0：提醒缴费，1：提醒缴费成功）
                        'thing2'=>$name?:'业主',//业主姓名
                        'thing3'=>$address,//地址
                        'thing9'=>$order_type?:'无',//缴费类型
                        'thing10'=>$rule_name?:'无',//账单名称
                        'amount4'=>preg_replace('/元/u','',$total_money).'元',//账单金额
                    ],
                ]
            ];
            //调用微信模板消息  send_msg('work', $worker['wid'], $data, $token_info);
            $xtype=0;
            if($property_id>0){
                $xtype=1;
            }else{
                $property_id=0;
            }
            $templateNewsService->sendTempMsg($datamsg['tempKey'], $datamsg['dataArr'],0,$property_id,$xtype);
        }
    }

    /**
     * 导出文件
     * @author:zhubaodi
     * @date_time: 2021/5/21 14:44
     */
    public function saveOrderExcel($title, $data, $fileName)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getDefaultColumnDimension()->setWidth(20);
        $sheet->getRowDimension('1')->setRowHeight(25);//设置行高
        $sheet->getStyle('A1:N1')->getFont()->setBold(true)->setSize(12);
        $sheet->mergeCells('A1:N1'); //合并单元格
        $sheet->mergeCells('A2:N2'); //合并单元格
        $sheet->setCellValue('A1', '应收账单明细表');
        $sheet->setCellValue('A2', $data['total_money']);

        //设置单元格内容
        $titCol = 'A';
        foreach ($title as $key => $value) {
            //单元格内容写入
            $sheet->setCellValue($titCol . '3', $value);
            $titCol++;
        }

        //设置单元格内容
        $row = 4;
        foreach ($data['list'] as $k => $item) {

            $dataCol = 'A';
            foreach ($item as $value) {
                //单元格内容写入
                $sheet->setCellValue($dataCol . $row, $value);
                $dataCol++;
            }
            $row1 = $row - 1;
            if ($k > 0 && ($data['list'][$k]['numbers'] == $data['list'][$k - 1]['numbers'])) {
                $sheet->mergeCells('A' . $row1 . ':' . 'A' . $row); //合并单元格
                $sheet->mergeCells('B' . $row1 . ':' . 'B' . $row); //合并单元格
                $sheet->mergeCells('C' . $row1 . ':' . 'C' . $row); //合并单元格
                $sheet->mergeCells('D' . $row1 . ':' . 'D' . $row); //合并单元格
                $sheet->mergeCells('E' . $row1 . ':' . 'E' . $row); //合并单元格
                $sheet->mergeCells('F' . $row1 . ':' . 'F' . $row); //合并单元格
            }
            if ($k > 0 && ($data['list'][$k]['numbers'] == $data['list'][$k - 1]['numbers']) && ($data['list'][$k]['charge_number_name'] == $data['list'][$k - 1]['charge_number_name'])) {
                $sheet->mergeCells('G' . $row1 . ':' . 'G' . $row); //合并单元格
            }
            if ($k > 0 && ($data['list'][$k]['numbers'] == $data['list'][$k - 1]['numbers']) && ($data['list'][$k]['charge_number_name'] == $data['list'][$k - 1]['charge_number_name']) && ($data['list'][$k]['project_name'] == $data['list'][$k - 1]['project_name'])) {
                $sheet->mergeCells('H' . $row1 . ':' . 'H' . $row); //合并单元格
            }
            $row++;
        }
        //保存

        $styleArrayBody = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
        ];
        $total_rows = $row + 1;
        //添加所有边框/居中
        $sheet->getStyle('A1:N1' . $total_rows)->applyFromArray($styleArrayBody);
        $sheet->getStyle('A3:N' . $total_rows)->applyFromArray($styleArrayBody);

        $styleArrayBody1 = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
        ];
        //添加所有边框/居中
        $sheet->getStyle('A2:N2' . $total_rows)->applyFromArray($styleArrayBody1);
        //下载
        $filename = $fileName . '.xlsx';
        (new BaseExportService())->phpSpreadsheet($filename, $spreadsheet);
        return $this->downloadExportFile($filename);
    }

    /**
     * 导出应收账单
     * @author: zhubaodi
     * @date : 2021/6/26
     */
    public function printOrder($where = [], $field = true, $order = 'o.order_id DESC')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $list = $db_house_new_pay_order->getPayOrder($where, '', $field, $order);
        $count = [];
        $count['total_money'] = 0;
        if ($list) {
            $data_list = [];
            foreach ($list as $k => $v) {
                $count['total_money'] = $count['total_money'] + $v['total_money'];
                if (isset($v['service_start_time'])) {
                    if ($v['service_start_time']>1)
                        $v['service_start_time_txt'] = date('Y-m-d H:i:s', $v['service_start_time']);
                    else
                        $v['service_start_time_txt'] = '--';
                }
                if (isset($v['service_end_time'])) {
                    if ($v['service_end_time']>1)
                        $v['service_end_time_txt'] = date('Y-m-d H:i:s', $v['service_end_time']);
                    else
                        $v['service_end_time_txt'] = '--';
                }
                if (isset($v['last_ammeter'])) {
                    if (!$v['last_ammeter'])
                        $v['last_ammeter'] = '--';
                }
                if (isset($v['now_ammeter'])) {
                    if (!$v['now_ammeter'])
                        $v['now_ammeter'] = '--';
                }
                $number = '';
                $number_name = '';
                if (!empty($v['room_id'])) {
                    $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                    if (!empty($room)) {
                        $room = $room->toArray();
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $number = $room1['room'];
                            $number_name = $room1['single_name'] . '(栋)';
                        }
                    }
                } elseif (!empty($v['position_id'])) {
                    $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                    if (!empty($position_num)) {
                        $position_num = $position_num->toArray();
                        if (!empty($position_num)) {
                            $position_num1 = $position_num[0];
                            if (empty($position_num1['garage_num'])) {
                                $position_num1['garage_num'] = '临时车库';
                            }
                            $number = $position_num1['position_num'];
                            $number_name = $position_num1['garage_num'];
                        }
                    }
                }
                $v['numbers'] = $number;

                $data_list[$k]['number_name'] = $number_name;
                $data_list[$k]['floor_name'] = isset($room1['floor_name']) ? $room1['floor_name'] . '(单元)' : '';
                $data_list[$k]['layer_name'] = isset($room1['layer_name']) ? $room1['layer_name'] . '(层)' : '';
                $data_list[$k]['numbers'] = $v['numbers'];
                $data_list[$k]['name'] = $v['name'];
                $data_list[$k]['phone'] = $v['phone'];
                $data_list[$k]['charge_number_name'] = $v['charge_number_name'];
                $data_list[$k]['project_name'] = $v['project_name'];
                $data_list[$k]['charge_name'] = $v['charge_name'];
                $data_list[$k]['total_money'] = $v['total_money'];
                $data_list[$k]['service_start_time'] = $v['service_start_time_txt'];
                $data_list[$k]['service_end_time'] = $v['service_end_time_txt'];
                $data_list[$k]['last_ammeter'] = $v['last_ammeter'];
                $data_list[$k]['now_ammeter'] = $v['now_ammeter'];
            }
        }
        //   print_r($data_list);exit;
        $data['total_money'] = '应收总费用：' . $count['total_money'] . '元';
        $data['list'] = $data_list;
        //楼栋/车库	单元	楼层	房间号/车位号	业主名	电话	所属收费科目	收费项目名称	收费标准名称	应收费用（元）	计费开始时间	计费结束时间	上次度数	本次度数
        $title = ['楼栋/车库', '单元', '楼层', '房间号/车位号', '业主名', '电话', '所属收费科目', '收费项目名称', '收费标准名称', '应收费用（元）', '计费开始时间', '计费结束时间', '上次度数', '本次度数'];
        $res = $this->saveOrderExcel($title, $data, '应收账单明细表' . time());
        return $res;
    }

    /**
     * 导出应收账单明细
     * @author lijie
     * @date_time 2021/12/28
     * @param array $data
     * @param string $title
     * @param string $fileName
     * @return array
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     * @throws \think\Exception
     */
    public function receivableOrderImport($data=[],$title='',$fileName='')
    {
        if(empty($data) || empty($title) || empty($fileName)){
            throw new \think\Exception("无数据！");
        }
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getDefaultColumnDimension()->setWidth(20);
        $sheet->getRowDimension('1')->setRowHeight(25);//设置行高
        $sheet->getStyle('A1:K1')->getFont()->setBold(true)->setSize(12);
        $sheet->mergeCells('A1:K1'); //合并单元格
        $sheet->setCellValue('A1', '应收账单明细表');

        //设置单元格内容
        $titCol = 'A';
        foreach ($title as $key => $value) {
            //单元格内容写入
            $sheet->setCellValue($titCol . '2', $value);
            $titCol++;
        }
        //设置单元格内容
        $row = 3;
        foreach ($data as $k => $item) {
            //单元格内容写入
            $sheet->setCellValue('A' . $row, $item['number']);
            $sheet->setCellValue('B' . $row, $item['name']);
            $sheet->setCellValue('C' . $row, $item['phone']);
            $sheet->setCellValue('D' . $row, $item['charge_name']);
            $sheet->setCellValue('E' . $row, $item['project_name']);
            $sheet->setCellValue('F' . $row, $item['charge_number_name']);
            $sheet->setCellValue('G' . $row, $item['total_money']);
            $sheet->setCellValue('H' . $row, $item['service_start_time_txt']);
            $sheet->setCellValue('I' . $row, $item['service_end_time_txt']);
            $sheet->setCellValue('J' . $row, $item['last_ammeter']);
            $sheet->setCellValue('K' . $row, $item['now_ammeter']);
            $row++;
        }
        //保存
        $styleArrayBody = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
        ];
        $total_rows = $row + 1;
        //添加所有边框/居中
        $sheet->getStyle('A1:K1' . $total_rows)->applyFromArray($styleArrayBody);

        $styleArrayBody1 = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
        ];
        //下载
        $filename = $fileName . '.xlsx';
        (new BaseExportService())->phpSpreadsheet($filename, $spreadsheet);
        return $this->downloadExportFile($filename);
    }


    /**
     * 查询打印模板
     * print_type 0已缴费账单模板设置 1待缴账单模板设置
     * @author:zhubaodi
     * @date_time: 2021/6/28 9:58
     */
    public function getPrintTemplate($village_id,$print_type=0)
    {
        if (empty($village_id)) {
            throw new \think\Exception("小区id不能为空！");
        }
        $db_template = new HouseVillagePrintTemplate();
        $list = $db_template->getList(['village_id' => $village_id]);
        $village_info=(new HouseVillageInfo())->getOne(['village_id'=>$village_id],'*');
        $template_id=0;
        if($village_info && !$village_info->isEmpty()){
            if($print_type==1 && $village_info['nopay_print_template_id']){
                $template_info=$db_template->get_one(['template_id' => $village_info['nopay_print_template_id']],'template_id');
                if($template_info && !$template_info->isEmpty()){
                    $template_id=$template_info['template_id'];
                }
            }else if($print_type==0 && $village_info['print_template_id']>0){
                $template_info=$db_template->get_one(['template_id' => $village_info['print_template_id']],'template_id');
                if($template_info && !$template_info->isEmpty()){
                    $template_id=$template_info['template_id'];
                }
            }
        }
        return ['list'=>$list,'template_id'=>$template_id];

    }

    public function getPrintInfo($village_id, $order_id, $template_id,$pigcms_id=0,$choice_ids=[])
    {
        if (empty($village_id)) {
            throw new \think\Exception("小区id不能为空！");
        }
        if (empty($order_id) && empty($choice_ids)) {
            throw new \think\Exception("订单id不能为空！");
        }
        if (empty($template_id)) {
            throw new \think\Exception("打印模板id不能为空！");
        }
        $db_printCustom = new HouseVillagePrintCustom();
        $db_printCustomConfig = new HouseVillagePrintCustomConfigure();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_charge_project = new HouseNewChargeProject();
        $db_charge_rule = new HouseNewChargeRule();
        $db_house_admin = new HouseAdmin();
        $db_template = new HouseVillagePrintTemplate();
        $db_house_village_user_bind = new HouseVillageUserBind();
        $db_house_village = new HouseVillage();
        $db_house_new_offline_pay = new HouseNewOfflinePay();
        $db_house_property_digit_service = new HousePropertyDigitService();
        $ser_print_template = new PrintTemplateService();
        $db_standard_bind = new HouseNewChargeStandardBind();
        $db_admin = new HouseAdmin();
        $templateInfo = $db_template->get_one(['village_id' => $village_id, 'template_id' => $template_id]);
        if (empty($templateInfo) || $templateInfo->isEmpty()) {
            throw new \think\Exception("打印模板信息不存在！");
        }
        $templateInfo=$templateInfo->toArray();
        $printCustomList = [];
        if(!empty($templateInfo['custom_field'])){
            // 模板字段
            $template_field = json_decode($templateInfo['custom_field'],true);
            foreach ($template_field as $v){
                if(is_numeric($v['id'])){
                    $printCustomList[] = $db_printCustomConfig->getOne(['configure_id' => $v['id']],'configure_id,field_name,title,type');
                }else{
                    $printCustomList[] = [
                        'configure_id' => 0,
                        'field_name' => '',
                        'title' => $v['title'],
                        'type' => $v['print_type']
                    ];
                }
            }
        }else{
            // 兼容老的打印模板 custom_field没有数据的情况
            $printCustomList = $db_printCustom->getLists(['c.template_id' => $template_id, 'c.village_id' => $village_id], 'c.*,b.*',0,0,'b.weight DESC,c.id ASC');
            if($printCustomList && !$printCustomList->isEmpty()){
                $printCustomList = $printCustomList->toArray();
            }else{
                $printCustomList = [];
            }
        }

        if (empty($templateInfo)) {
            throw new \think\Exception("打印模板详情不存在！");
        }

        //小区信息
        $village_info = $db_house_village->getOne($village_id, 'village_name,property_id');
        $role_name = '';
        $property_info=(new HousePropertyService())->getFind(['id'=>$village_info['property_id']],'property_name');
        if($property_info){
            $role_name=$property_info['property_name'];
        }
        $user_info=array();
        $is_notpay_print=0;
        if(!empty($choice_ids)){
            $arr2 = array_unique(array_column($choice_ids, 'pigcms_id'));
            $orderid2 = array_unique(array_column($choice_ids, 'orderid'));
            $roomIdArr = array_unique(array_column($choice_ids, 'room_id'));
            if(empty($arr2) ){
                throw new \think\Exception("查询数据不存在！");
            }
            $pigcms_id_count=count($arr2);
            if($pigcms_id_count==2 && in_array(0,$arr2)){
                //如果是两个数距 有一个是0 则算一个人
            }else if($pigcms_id_count > 1 ){
                throw new \think\Exception("当前仅支持同一个缴费人进行批量打印已缴账单！");
            }
            if(empty($arr2[0]) && count($roomIdArr) > 1 ){
                throw new \think\Exception("不同房间不支持批量打印已缴账单！");
            }
            $pigcms_id_tmp=$arr2[0];
            if($pigcms_id_tmp>0){
                $user_info_obj = $db_house_village_user_bind->getOne(['pigcms_id' =>$pigcms_id_tmp]);
                if($user_info_obj && !$user_info_obj->isEmpty()){
                    $user_info = $user_info_obj->toArray();
                }
            }
            $where[] = ['order_id','in',$orderid2];
            $order_ids = $orderid2;
        }
        else{
            $where[] = ['order_id', '=', $order_id];

            if($pigcms_id>0){
                $user_info_obj = $db_house_village_user_bind->getOne(['pigcms_id' => $pigcms_id]);
                if($user_info_obj && !$user_info_obj->isEmpty()){
                    $user_info = $user_info_obj->toArray();
                }
            }
            $order_ids = [$order_id];
        }
        $one_order_obj=$db_house_new_pay_order->get_one(array('order_id'=>$order_ids['0']),'order_id,village_id,is_paid,pay_time');
        if($one_order_obj && !$one_order_obj->isEmpty()){
            $one_order=$one_order_obj->toArray();
            if($one_order && $one_order['pay_time']<10){
                $is_notpay_print=1;
            }
        }
        if ($is_notpay_print < 1) {
            // 是否允许打印
            $res = $this->isAllowPrint($village_id, $template_id, $order_ids);
            if ($res == 1) {
                throw new Exception('有账单已经打印，不能再单条打印');
            } elseif ($res == 2) {
                throw new Exception('有账单已经打印，不能再合并打印');
            }
        }
        $field='o.parking_num,o.score_used_count,o.score_deducte,o.order_id,o.pigcms_id,o.project_id,o.village_id,o.order_type,o.total_money,o.unit_price,o.room_id,o.position_id,o.pay_type,o.service_month_num,o.property_id,o.pay_money,o.offline_pay_type,o.refund_money,o.pay_time,o.pay_bind_name,s.remark,o.service_start_time,o.service_end_time,o.diy_content,o.order_name,p.name as order_name2,p.type,r.bill_create_set,r.measure_unit,s.online_pay_type,s.order_no,o.last_ammeter,o.now_ammeter,o.meter_reading_id,o.late_payment_money,o.from,o.role_id,o.rule_id,o.not_house_rate,o.car_type,o.car_number,o.car_id,r.charge_name,r.fees_type';
        
        $orderList = $db_house_new_pay_order->getOrderList($where,$field);
        if ($orderList && !is_array($orderList)) {
            $orderList = $orderList->toArray();
        }
        if(empty($orderList)){
            throw new \think\Exception("订单不存在！");
        }
        $time=time();
        $realMoney=[];//实付金额
        $order_body=[];//表格区
        $pay_type=[];//收款方式
        $pay_time=[];//收款日期
        $remark=[];//备注
        $money = []; // 应收金额
        $late_payment_money = []; // 滞纳金
        $role_id = []; // 操作人ID 新版打印 收款人名称取操作人名称
        $is_water_electric_gas=0;
        $room_id = 0;
        $payee_name='';
        $max_print_num=0;
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $property_service_end_time=0;
        foreach ($orderList as $k=>$v){
            if(!empty($v['order_name2'])){
                $v['order_name']=$v['order_name2'];
            }
            if (isset($v['parking_num']) && intval($v['parking_num']) > 1) {
                $parking_num = intval($v['parking_num']);
            } else {
                $parking_num = 1;
            }
            if (isset($v['parking_num']) && intval($v['parking_num']) > 1) {
                $parking_num = intval($v['parking_num']);
            } else {
                $parking_num = 1;
            }
            $print_numArr=$db_house_village_detail_record->getOneOrder([['order_id','=',$v['order_id']]],'print_num');
            if($print_numArr && ($print_numArr['print_num']>$max_print_num)){
                $max_print_num=$print_numArr['print_num'];
            }
            $room_num = '';
            $car_position_no='';
            $car_number=$v['car_number'];//车牌号
            $car_owner_name='';//车主姓名
            $car_owner_tel='';//车主电话
            $number ='无';
            $last_ammeter='';
            $now_ammeter='';
            if(empty($user_info) && $v['pigcms_id']>0){
                $user_info_obj = $db_house_village_user_bind->getOne(['pigcms_id' => $v['pigcms_id']]);
                if($user_info_obj && !$user_info_obj->isEmpty()){
                    $user_info = $user_info_obj->toArray();
                }
            }
            if (in_array($v['order_type'], ['water', 'electric', 'gas'])) {
                if (empty($v["unit_price"])&&!empty($v['rule_id'])){
                    $rule_info=$db_charge_rule->getOne(['id'=>$v['rule_id']],'unit_price,rate');
                    $number = round($v["total_money"] / $rule_info["unit_price"], 2);
                }else{
                    $number = round($v["total_money"] / $v["unit_price"], 2);
                }
                if ($number && $parking_num) {
                    $number = round($number / $parking_num, 2);
                }
                if ($v['order_type'] == 'electric') {
                    $last_ammeter='0 度';
                    $now_ammeter='0 度';
                    if ($v['last_ammeter'] > 0) {
                        $last_ammeter = $v['last_ammeter'] . ' 度';
                    }
                    if ($v['now_ammeter'] > 0) {
                        $now_ammeter = $v['now_ammeter'] . ' 度';
                    }
                } elseif (in_array($v['order_type'], ['water', 'gas'])) {
                    $last_ammeter='0 m³';
                    $now_ammeter='0 m³';
                    if ($v['last_ammeter'] > 0) {
                        $last_ammeter = $v['last_ammeter'] . ' m³';
                    }
                    if ($v['now_ammeter'] > 0) {
                        $now_ammeter = $v['now_ammeter'] . ' m³';
                    }
                }
                $is_water_electric_gas=1;
            }

            // 收费规则 数量
            $rule_info = $db_charge_rule->getOne([['id','=',$v['rule_id']]],'fees_type');
            if($rule_info && !$rule_info->isEmpty()){
                $rule_info = $rule_info->toArray();
                if($rule_info['fees_type'] == 2){
                    $where_standard = [];
                    $where_standard[] = ['rule_id','=',$v['rule_id']];
                    if($v['room_id']){
                        $where_standard[] = ['vacancy_id','=',$v['room_id']];
                        $where_standard[] = ['bind_type','=',1];
                        $standard_info = $db_standard_bind->getOne($where_standard,'custom_value');
                        if($standard_info && !$standard_info->isEmpty()){
                            $standard_info = $standard_info->toArray();
                            $number = $standard_info['custom_value'];
                        }
                    }
                    if($v['position_id']){
                        $where_standard = [];
                        $where_standard[] = ['rule_id','=',$v['rule_id']];
                        $where_standard[] = ['position_id','=',$v['position_id']];
                        $where_standard[] = ['bind_type','=',1];
                        $standard_info = $db_standard_bind->getOne($where_standard,'custom_value');
                        if($standard_info && !$standard_info->isEmpty()){
                            $standard_info = $standard_info->toArray();
                            $number = $standard_info['custom_value'];
                        }
                    }
                }
            }

            if (!empty($v['room_id'])) {
                $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                if (!empty($room)) {
                    $room = $room->toArray();
                    if (!empty($room)) {
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $room_num=(new HouseVillageService())->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$v['village_id']);
                            /*if ($v['order_type']=='property'&&!empty($room1['housesize'])){
                                $number=$room1['housesize'].' ㎡';
                            }*/
                        }
                    }
                }
            }
            
            if (!empty($v['position_id'])) {
                $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                if (!empty($position_num)) {
                    $position_num = $position_num->toArray();
                    if (!empty($position_num)) {
                        $position_num1 = $position_num[0];
                        if (empty($position_num1['garage_num'])) {
                            $position_num1['garage_num'] = '临时车库';
                        }
                        //$room_num = $position_num1['garage_num'] . $position_num1['position_num'];
                        $car_position_no=$position_num1['garage_num'] . $position_num1['position_num'];
                    }
                }
            }
            if(!empty($v['car_id']) && ($v['car_id']>0)){
                $whereCar=array();
                $whereCar[]=array('car_id','=',$v['car_id']);
                $whereCar[]=array('village_id','=',$v['village_id']);
                $parking_car_obj=$db_house_village_parking_car->getFind($whereCar,'car_type,province,car_number,car_user_name,car_user_phone');
                if($parking_car_obj && !$parking_car_obj->isEmpty()){
                    $parking_car=$parking_car_obj->toArray();
                    $car_owner_name=$parking_car['car_user_name'];//车主姓名
                    $car_owner_tel=$parking_car['car_user_phone'];//车主电话
                    if(empty($car_number)){
                        $car_number=$parking_car['province'].$parking_car['car_number'];//车牌号
                    }
                }
            }
            
            if (!empty($v['pay_type'])) {
                if (in_array($v['pay_type'], [2, 22])) {
                    $offline_pay_type='';
                    if(strpos($v['offline_pay_type'],',')>0){
                        $offline_pay_type_arr=explode(',',$v['offline_pay_type']);
                        $where_pay_arr=array();
                        $where_pay_arr[]=['id','in',$offline_pay_type_arr];
                        $pay_list = $db_house_new_offline_pay->getList($where_pay_arr, '*');
                        $payList = [];
                        if (!empty($pay_list)) {
                            $pay_list = $pay_list->toArray();
                            if (!empty($pay_list)) {
                                foreach ($pay_list as $vv) {
                                    $payList[$vv['id']] = $vv['name'];
                                }
                            }
                        }
                        foreach ($offline_pay_type_arr as $opay){
                            if(isset($payList[$opay])){
                                $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                            }
                        }

                    }else{
                        $offline_pay = $db_house_new_offline_pay->get_one(['id'=>$v['offline_pay_type']]);
                        if (!empty($offline_pay) && !$offline_pay->isEmpty()){
                            $offline_pay_type=$offline_pay['name'];
                        }
                    }
                    $pay_type[] = $this->pay_type[$v['pay_type']] . '-' . $offline_pay_type;
                }
                elseif (in_array($v['pay_type'], [1, 3])) {
                    $pay_type[] = $this->pay_type[$v['pay_type']];
                }
                elseif ($v['pay_type'] == 4) {
                    if (empty($v['online_pay_type'])) {
                        $online_pay_type1 = '余额支付';
                    } else {
                        $online_pay_type1 = $this->getPayTypeMsg($v['online_pay_type']);
                    }
                    $pay_type[] = $this->pay_type[$v['pay_type']] . '-' . $online_pay_type1;
                }
            }

            if (!empty($v['service_month_num'])){
                if ($v['bill_create_set']==1){
                    $v['service_month_num']=$v['service_month_num'].'天';
                }elseif ($v['bill_create_set']==2){
                    $v['service_month_num']=$v['service_month_num'].'个月';
                }elseif ($v['bill_create_set']==3){
                    $v['service_month_num']=$v['service_month_num'].'年';
                }else{
                    $v['service_month_num']=$v['service_month_num'].'';
                }
            }


	    $digit_info=array();
            $v['score_used_count']=formatNumber($v['score_used_count'],2,1);
            if(1||empty($digit_info)){
                $real_money=formatNumber($v['pay_money']-$v['refund_money'],2,1);
                $v['total_money']=formatNumber($v['total_money'],2,1);
                $v['pay_money']=formatNumber($v['pay_money'],2,1);
                $v['score_deducte']=formatNumber($v['score_deducte'],2,1);

            }
            else{
                if($v['order_type'] == 'water' || $v['order_type'] == 'electric' || $v['order_type'] == 'gas'){
                    $real_money=formatNumber($v['pay_money']-$v['refund_money'],$digit_info['meter_digit'],$digit_info['type']);
                    $v['total_money']=formatNumber($v['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                    $v['pay_money']=formatNumber($v['pay_money'],$digit_info['meter_digit'],$digit_info['type']);

                    $v['score_deducte']=formatNumber($v['score_deducte'],$digit_info['meter_digit'],$digit_info['type']);

                }else{
                    $real_money=formatNumber($v['pay_money']-$v['refund_money'],$digit_info['other_digit'],$digit_info['type']);
                    $v['total_money']=formatNumber($v['total_money'],$digit_info['other_digit'],$digit_info['type']);
                    $v['pay_money']=formatNumber($v['pay_money'],$digit_info['other_digit'],$digit_info['type']);

                    $v['score_deducte']=formatNumber($v['score_deducte'],$digit_info['other_digit'],$digit_info['type']);

                }
            }

            $project_info=$db_house_new_charge_project->getOne(['id'=>$v['project_id']]);
            if (!empty($project_info)&&$project_info['type']==1 && $v['fees_type'] != 4 ){
                $v['service_start_time']=1;
                $v['service_end_time']=1;
            }
            $v['unit_price']=$v['unit_price']*1;
            //表格区
            if($v['type'] == 2){
                if($v['bill_create_set'] == 1){
                    $unit_price = $v['unit_price'].'元/日';
                }elseif($v['bill_create_set'] == 2){
                    $unit_price = $v['unit_price'].'元/月';
                }elseif($v['bill_create_set'] == 3){
                    $unit_price = $v['unit_price'].'元/年';
                }else{
                    $unit_price = $v['unit_price'].'元';
                }
            }else{
                if($v['order_type'] == 'water' || $v['order_type'] == 'electric' || $v['order_type'] == 'gas'){
                    $measure_unit = $v['measure_unit']?$v['measure_unit']:'元/度';
                    $unit_price = $v['unit_price'].$measure_unit;
                }else{
                    $unit_price = $v['unit_price'].'元';
                }
            }
            if(in_array($v['order_type'],['water','electric','gas'])){
                $start_time=$end_time='-';
            }else{
                $start_time=intval($v['service_start_time']) > 1 ? date('Y-m-d', $v['service_start_time']) : '-';
                $end_time=intval($v['service_end_time']) > 1 ? date('Y-m-d', $v['service_end_time']) : '-';
            }
            if ($v['order_type']=='property' && $v['service_end_time']>100 && ($v['service_end_time']>$property_service_end_time)) {
                $property_service_end_time=$v['service_end_time'];
            }
            $not_house_rate='100%';
            if($v['not_house_rate']>0 && $v['not_house_rate']<100){
                $not_house_rate=$v['not_house_rate'].'%';
            }
            $v["total_money"]=$v["total_money"]*1;
            $real_money=$real_money*1;
            $order_body[]=[
                'room_num'=>$room_num,  //房号
                'rule_name'=>$v['charge_name'], //收费标准名称
                'order_name'=>$v['order_name'], //收费项目
                'service_cycle'=>$v['service_month_num'], //缴费周期
                'number'=>$number, //数量
                'price'=>$unit_price,//单价
                'money'=>round($v["total_money"],4), //应收金额
                'discount'=>$v['diy_content'],//优惠
                'score_deducte'=>$v["score_deducte"], //积分抵扣金额
                'score_used_count'=>$v['score_used_count'],//积分使用数量
                'real_money'=>round($real_money,4), //实收金额
                'remarks'=>$v['remark'], //备注
                'start_time'=>$start_time,//起始时间
                'end_time'=>$end_time, //终止日期
                'pay_time'=>$v['pay_time']>10 ? date('Y-m-d', $v['pay_time']):'无',//缴费日期
                'last_ammeter'=>$last_ammeter,
                'now_ammeter'=>$now_ammeter,
                'not_house_rate'=>$not_house_rate,
                'order_no'=>$v['order_no'],
                'car_position_no'=>$car_position_no,
                'car_number'=>$car_number,
                'car_owner_name'=>$car_owner_name,
                'car_owner_tel'=>$car_owner_tel,
            ];
            fdump_api([$v,$order_body],'0106111',1);
            $realMoney[]=$real_money;
            if($v['pay_time']>10){
                $pay_time[]=$v['pay_time'];
            }
            if(!empty($v['remark'])){
                $remark[]=$v['remark'];
            }
            $money[] = $v["total_money"];
            $late_payment_money[] = $v["late_payment_money"];

            // 新版打印 收款人名称取操作人名称
           //  $role_id[] = ($v['from'] == 1) ? (empty($v['role_id']) ? '1-0' : $v['role_id']) : 0;
            if($v['from'] == 1){
                $role_id[]=  (empty($v['role_id']) ? '1-0' : $v['role_id']);
            }else{
                if ($v['pay_type']!=4){
                    $role_id[]=  (empty($v['role_id']) ? 0 : $v['role_id']);
                }else{
                    $role_id[]=  0;
                }
            }

            // 房间ID
            $room_id = $v['room_id'];

            $admininfo = $db_admin->getOne(['id' => $v['role_id']],'realname,account');
            if (!empty($admininfo)) {
                if (!empty($admininfo['realname'])){
                    $payee_name = $admininfo['realname'];
                }else{
                    $payee_name = $admininfo['account'];
                }
            }

            // 新版打印 更新订单为开票状态 无法监听浏览器打印机打印事件，程序默认查询数据后就打印了
            $recordData=[];
            $recordData[] = [
                'order_id' => $v['order_id'],
                'property_type' => $v['order_name'],
                'price' => $v['unit_price'],
                'create_time' => time(),
                'order_type' => 2,
                'print_num' => 1,
            ];
            //打印后，订单开票状态为已开票  无法监听浏览器打印机打印事件，程序默认查询数据后就打印了
            if (empty($print_numArr)) {
                $db_house_village_detail_record->addEDetailRecord($recordData);
            }
        }
        $realMoney=empty($realMoney) ? '0' : array_sum($realMoney);
        $money = empty($money) ? '0' : array_sum($money);
        $late_payment_money = empty($late_payment_money) ? '0' : array_sum($late_payment_money);
        if(!empty($pay_time)){
            if(count($pay_time) > 1){
                $max = array_search(max($pay_time), $pay_time);
                $min = array_search(min($pay_time), $pay_time);
                $pay_time=date('Y/m/d',$pay_time[$min]).'-'.date('Y/m/d',$pay_time[$max]);
            } else{
                $pay_time=date('Y-m-d H:i:s',$pay_time[0]);
            }
        }
        else{
            $pay_time='';
        }
        // 新版打印 延华 收款人
        $payeeType = '自助缴费';
        if(!in_array(0,$role_id)){
            if(in_array('1-0',$role_id)){
                $payeeType = '平台缴费';
            }else{
                $admininfo = $db_house_admin->getOne([['id','in', $role_id]]);
                if($admininfo && !$admininfo->isEmpty()){
                    $admininfo = $admininfo->toArray();
                    $payeeType = !empty($admininfo['realname']) ? $admininfo['realname'] : '自助缴费';
                }
            }
        }
        if ($payeeType=='自助缴费' && isset($v['pay_type'])&&$v['pay_type']==2) {
            $payeeType = '收银台缴费';
        }
        $money=$money*1;
        //页眉区/页脚区 非表格区
        $realMoney=round($realMoney,4);
        $order_field=[
            'title'=> $templateInfo['top_title'],
            'usernum'=>'',//编号
            'housesize'=>0,//房屋面积
            'village_name'=>$village_info['village_name'],//小区
            'room_num'=>'',//房号
            'username'=> !empty($user_info) ? $user_info['name'] : '',//住户姓名
            'phone'=>!empty($user_info) ? $user_info['phone'] : '',//住户手机号
            'totalMoney'=>'￥' . $realMoney . '（人民币大写：' . cny($realMoney) . '）',//合计
            'real_money_type' => ['value1' => cny($realMoney),'value2' => '￥' . $realMoney], // 实收金额 新版打印模板使用
            'totalMoneyType' => round_number($realMoney,2), // 金额合计 新版打印模板使用 无大写数字
            'money' => round($money,4), // 应收金额 新版打印模板使用 无大写数字
            'late_payment_money' => $late_payment_money, // 滞纳金 新版打印模板使用 无大写数字
            'payeeType' => $payeeType, // 收款员 新版打印模板使用 无大写数字
            'print_time'=>date('Y-m-d H:i:s', $time),//打印日期
            'pay_time'=>$pay_time,//收款日期
            'payee'=>$role_name,//收款方
            'payee_namess'=>$payee_name,//收款人
            'desc'=>$templateInfo['desc'],//说明
            'payer'=>!empty($user_info) ? $user_info['name'] : '',//付款人
            'pay_type_name'=>!empty($pay_type) ? (implode('，',array_unique($pay_type))): '',//收款方式
            'remarks'=>empty($remark) ? '' : ((count($remark) < 2) ? $remark[0] :count($remark).'条账单有备注内容'),//收款备注
            'case'=>cny($realMoney),//合计(大写)
            'printNumber'=>$ser_print_template->printTemplateNumber($templateInfo['template_id'],$order_ids,$village_id), // 新版打印模板编号 NO 编号7位数
            'fact_total_money'=> ['value1' => cny($realMoney),'value2' => '￥' . $realMoney],
            'need_total_money'=> ['value1' => cny($money),'value2' => '￥' . $money],
        ];
        if($property_service_end_time>1000){
           //  $property_service_end_time=$property_service_end_time;
            $order_field['property_fee_expire_time']=date('Y-m-d',$property_service_end_time);
        }
        if((!empty($user_info) && !empty($user_info['vacancy_id']))){
            $room_id = $user_info['vacancy_id'];
        }
        if(!empty($room_id)){
            $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $room_id]);
            if (!empty($room)) {
                $room = $room->toArray();
                if (!empty($room)) {
                    if (!empty($room)) {
                        $room1 = $room[0];
                        $order_field['room_num']=(new HouseVillageService())->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$room1['village_id']);
                        $order_field['housesize'] = $room1['housesize'].' ㎡';
                    }
                }
            }
        }
        if (!empty($user_info) && empty($user_info['bind_number'])){
            $order_field['usernum'] = $user_info['usernum'];
        }
        else{
            $order_field['usernum'] = !empty($user_info) ? $user_info['bind_number'] : '';
        }
        /*$where[] = ['order_id', '=', $order_id];
        $orderInfo = $db_house_new_pay_order->get_one($where);
        if (empty($orderInfo)) {
            throw new \think\Exception("订单信息不存在！");
        }
        $data_order = [];
        if (!empty($orderInfo)) {
            $orderInfo = $orderInfo->toArray();
            if (!empty($orderInfo)) {
                //小区信息
                $village_info = $db_house_village->getOne($village_id, 'village_name,property_id');
                $user_info = $db_house_village_user_bind->getOne(['pigcms_id' => $orderInfo['pigcms_id']]);

                $orderInfo['role_name'] = '';
                $property_info=(new HousePropertyService())->getFind(['id'=>$village_info['property_id']],'property_name');
                if($property_info){
                    $orderInfo['role_name']=$property_info['property_name'];
                }

                $projectinfo=$db_house_new_charge_project->getOne(['id' => $orderInfo['project_id']]);

                if (!empty($projectinfo)) {
                    $orderInfo['order_name'] = $projectinfo['name'];
                }
                $number = '';
                $orderInfo['number'] ='无';
                if (in_array($orderInfo['order_type'],['water','electric','gas'])){
                    $orderInfo['number'] = round($orderInfo["total_money"] / $orderInfo["unit_price"], 2);
                }
                if (!empty($orderInfo['room_id'])) {
                    $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $orderInfo['room_id']]);
                    if (!empty($room)) {
                        $room = $room->toArray();
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                            if ($orderInfo['order_type']=='property'&&!empty($room1['housesize'])){
                                $orderInfo['number']=$room1['housesize'].'(房屋面积)';
                            }
                        }
                    }
                } elseif (!empty($orderInfo['position_id'])) {
                    $position_num = $db_house_village_parking_position->getLists(['position_id' => $orderInfo['position_id']], 'pp.position_num,pg.garage_num', 0);
                    if (!empty($position_num)) {
                        $position_num = $position_num->toArray();
                        if (!empty($position_num)) {
                            $position_num1 = $position_num[0];
                            if (empty($position_num1['garage_num'])) {
                                $position_num1['garage_num'] = '临时车库';
                            }
                            $number = $position_num1['garage_num'] . $position_num1['position_num'];
                        }
                    }
                }

                if (isset($orderInfo['pay_type']) && !empty($orderInfo['pay_type'])) {
                    if ($orderInfo['pay_type'] == 2) {
                        $db_house_new_offline_pay = new HouseNewOfflinePay();
                        $offline_pay = $db_house_new_offline_pay->get_one(['id'=>$orderInfo['offline_pay_type']]);
                        if (empty($offline_pay)){
                            $offline_pay_type='';
                        }else{
                            $offline_pay_type=$offline_pay['name'];
                        }
                        $orderInfo['pay_type'] = $this->pay_type[$orderInfo['pay_type']] . '-' . $offline_pay_type;
                    } elseif (in_array($orderInfo['pay_type'], [1, 3])) {
                        $orderInfo['pay_type'] = $this->pay_type[$orderInfo['pay_type']];
                    } elseif ($orderInfo['pay_type'] == 4) {
                        if (empty($orderInfo['online_pay_type'])) {
                            $online_pay_type1 = '余额支付';
                        } else {
                            $online_pay_type1 = $this->pay_type_arr[$orderInfo['online_pay_type']];
                        }
                        $orderInfo['pay_type'] = $this->pay_type[$orderInfo['pay_type']] . '-' . $online_pay_type1;
                    }
                }

                if (!empty($orderInfo['service_month_num'])){
                    $db_house_new_charge_rule = new HouseNewChargeRule();
                    $ruleInfo = $db_house_new_charge_rule->getOne(['id'=>$orderInfo['rule_id']]);
                    if ($ruleInfo['bill_create_set']==1){
                        $orderInfo['service_month_num']=$orderInfo['service_month_num'].'天';
                    }elseif ($ruleInfo['bill_create_set']==2){
                        $orderInfo['service_month_num']=$orderInfo['service_month_num'].'个月';
                    }elseif ($ruleInfo['bill_create_set']==3){
                        $orderInfo['service_month_num']=$orderInfo['service_month_num'].'年';
                    }else{
                        $orderInfo['service_month_num']=$orderInfo['service_month_num'].'';
                    }

                }

 
		$digit_info=[];
                if(empty($digit_info)){
                    $real_money=formatNumber($orderInfo['pay_money']-$orderInfo['refund_money'],2,1);
                    $orderInfo['total_money']=formatNumber($orderInfo['total_money'],2,1);
                    $orderInfo['pay_money']=formatNumber($orderInfo['pay_money'],2,1);
                }else{
                    if($orderInfo['order_type'] == 'water' || $orderInfo['order_type'] == 'electric' || $orderInfo['order_type'] == 'gas'){
                        $real_money=formatNumber($orderInfo['pay_money']-$orderInfo['refund_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $orderInfo['total_money']=formatNumber($orderInfo['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                        $orderInfo['pay_money']=formatNumber($orderInfo['pay_money'],$digit_info['meter_digit'],$digit_info['type']);

                    }else{
                        $real_money=formatNumber($orderInfo['pay_money']-$orderInfo['refund_money'],$digit_info['other_digit'],$digit_info['type']);
                        $orderInfo['total_money']=formatNumber($orderInfo['total_money'],$digit_info['other_digit'],$digit_info['type']);
                        $orderInfo['pay_money']=formatNumber($orderInfo['pay_money'],$digit_info['other_digit'],$digit_info['type']);

                    }
                }

                $data_order['title'] = $templateInfo['title'];
                if (empty($user_info['bind_number'])){
                    $data_order['usernum'] = $user_info['usernum'];
                }else{
                    $data_order['usernum'] = $user_info['bind_number'];
                }

                $data_order['print_time'] = date('Y-m-d H:i:s', time());;
                $data_order['village_name'] = $village_info['village_name'];
                $data_order['room_num'] = $number;
                $data_order['username'] = $user_info['name'];
                $data_order['phone'] = $user_info['phone'];
                $data_order['totalMoney'] = '￥' . $orderInfo['total_money'] . '（人民币大写：' . cny($orderInfo['total_money']) . '）';;
                $data_order['pay_time'] = date('Y-m-d H:i:s', $orderInfo['pay_time']);
                $data_order['payee'] = $orderInfo['role_name'];
                $data_order['payer'] = $orderInfo['pay_bind_name'];
                $data_order['order_name'] = $orderInfo['order_name'];
                $data_order['price'] = $orderInfo['unit_price'];
                $data_order['service_cycle'] = $orderInfo['service_month_num'];
                $data_order['number'] = $orderInfo['number'];
                $data_order['money'] = $orderInfo["total_money"];
                $data_order['discount'] = $orderInfo['diy_content'];
                $data_order['real_money'] = $real_money;
                $data_order['remarks'] = $orderInfo['remark'];
                $data_order['pay_type_name'] = $orderInfo['pay_type'];
                $data_order['desc'] = $templateInfo['desc'];
                $data_order['start_time'] = date('Y-m-d', $orderInfo['service_start_time']);
                $data_order['end_time'] = date('Y-m-d', $orderInfo['service_end_time']);
                $data_order['case'] = cny($orderInfo['pay_money']);

            }

        }

        $printList1 = [];
        $printList2 = [];
        $printList3 = [];
        if (!empty($printCustomList)) {
            $printCustomList = $printCustomList->toArray();
            if (!empty($printCustomList)) {
                foreach ($printCustomList as $val) {
                    $val['value'] = $data_order[$val['field_name']];
                    if ($val['field_name'] == 'title') {
                        unset($val);
                        continue;
                    }
                    if ($val['type'] == 1) {
                        $printList1[] = $val;
                    } elseif ($val['type'] == 2) {
                        $printList2[] = $val;
                    } else {
                        $printList3[] = $val;
                    }
                }
            }
        }*/

        $printList1 = [];
        $printList2 = [];
        $printList3 = [];
        $printList4 = [];
        $printList5 = [];
        $printList6 = [];
        $printList7 = [];
        $is_title = false;
        $is_not_house_rate_field=0;
        if (!empty($printCustomList)) {
            foreach ($printCustomList as $val) {
                if(!isset($val['type'])){
                    continue;
                }
                $value='';
                if(in_array($val['type'],[1,3,4,5,6,7])){
                    if($val['field_name'] == 'payee' && $val['type']==1){
                        $value=$order_field['payee_namess'];
                    }else{
                        if (isset($order_field[$val['field_name']])){
                            $value=$order_field[$val['field_name']];
                        }
                    }

                }
                $val['value'] = $value;
                if ($val['field_name'] == 'title') {
                    $is_title = true;
                    unset($val);
                    continue;
                }
                switch ($val['type']){
                    case 2:
                        if($is_water_electric_gas<1 && in_array($val['field_name'],array('now_ammeter','last_ammeter'))){
                            break;
                        }
                        if($val['field_name']=='not_house_rate'){
                            $is_not_house_rate_field=1;
                        }
                        $printList2[] = $val;
                        break;
                    case 3:
                        $printList3[] = $val;
                        break;
                    case 4:
                        $printList4[] = $val;
                        break;
                    case 5:
                        $printList5[] = $val;
                        break;
                    case 6:
                        $printList6[] = $val;
                        break;
                    case 7:
                        $printList7[] = $val;
                        break;
                    default:
                        $printList1[] = $val;
                        break;
                }
            }
        }

        // 新版打印模板处理表格器数据
        
        $tab_list = [];
        if(!empty($order_body) && !empty($printList2)){
            foreach ($order_body as $value){
                $temp = [];
                foreach ($printList2 as $v){
                    $temp[] = isset($value[$v['field_name']]) ? $value[$v['field_name']] : '';
                }
                $tab_list[] = $temp;
            }
        }

        // 模板一强制新增区域为空数组  模板二修改成模板一的情况
        if($templateInfo['type'] == 1){
            $printList4 = [];
            $printList5 = [];
            $printList6 = [];
        }
        $blankline=0;  //留空白行
        if($templateInfo['type'] == 3){
            //加一条备注
            $bak_content=isset($templateInfo['bak_content']) && !empty($templateInfo['bak_content']) ? trim($templateInfo['bak_content']) :'';
            $printList6[]=['configure_id'=>0,'field_name'=>'bak_remarks','title'=>'备注','type'=>6,'value'=>$bak_content];
            if(isset($templateInfo['extra_data']) && !empty($templateInfo['extra_data'])){
                $extra_data=json_decode($templateInfo['extra_data'],1);
                if($extra_data && isset($extra_data['blankline'])){
                    $blankline=intval($extra_data['blankline']);
                }
            }
        }
        $font_set=[];
        if(isset($templateInfo['font_set']) && !empty($templateInfo['font_set'])){
            $font_set=json_decode($templateInfo['font_set'],1);
        }
        $not_house_rate_desc='';
        if($is_not_house_rate_field>0){
            $not_house_rate_desc='未入住折扣率说明：应收费用（折扣后金额）= 账单应收费用 * 未入住房屋折扣';
        }
        return [
            'print_title' => $order_field['title'],
            'type' => $templateInfo['type'],
            'is_title' => $is_title,
            'printList1' => $printList1,
            'printList2' => $printList2,
            'printList3' => $printList3,
            'printList4' => $printList4,
            'printList5' => $printList5,
            'printList6' => $printList6,
            'printList7' => $printList7,
            'data_order' => $order_body,
            'tab_list' => $tab_list,
            'col' => $templateInfo['col_num'],
            'font_set'=>$font_set,
            'print_number'=>$order_field['printNumber'],
            'prints_num'=>$max_print_num,
            'blankline'=>$blankline,
            'not_house_rate_desc'=>$not_house_rate_desc,
            'is_notpay_print'=>$is_notpay_print,
        ];
    }


    /**
     * 查询支付方式列表
     * @author:zhubaodi
     * @date_time: 2021/9/16 14:50
     */
    public function getPayTypeList($property_id,$type){
        $db_house_new_offline_pay = new HouseNewOfflinePay();

        //1扫码支付  2线下支付 3收款码支付 4线上支付
        // $pay_type_arr = ['wechat' => '微信', 'alipay' => '支付宝', 'unionpay' => '银联'];
        $data=[
            ['id'=>'4-0', 'name'=>'线上支付-余额支付'],
            ['id'=>'4-1', 'name'=>'线上支付-微信'],
            ['id'=>'4-2', 'name'=>'线上支付-支付宝'],
            ['id'=>'4-3', 'name'=>'线上支付-银联'],
            ['id'=>'5-0', 'name'=>'线上支付-环球汇通'],
        ];
        if (empty($type)){
            $data[]=['id'=>'1', 'name'=>'扫码支付'];
            $offline_pay = $db_house_new_offline_pay->getList(['property_id'=>$property_id,'status'=>1]);
            if (!empty($offline_pay)){
                $offline_pay= $offline_pay->toArray();
                if (!empty($offline_pay)) {
                    foreach ($offline_pay as $v) {
                        $vv=[];
                        $vv['id']='2-'.$v['id'];
                        $vv['name']='线下支付-'.$v['name'];
                        $data[]=$vv;
                    }
                }
            }
        }
        return $data;
    }

    /**
     * 查询历史缴费账单
     * @author:zhubaodi
     * @date_time: 2021/6/29 17:36
     */
    public function getHistoryOrderList($village_id, $page, $limit,$room_id,$position_id)
    {
        if (empty($village_id)) {
            throw new \think\Exception("小区id不能为空！");
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $where = [];
        $where[] = ['is_paid', '=', 1];
        $where[] = ['village_id', '=', $village_id];
        if(!empty($room_id)){
            $where[] = ['room_id', '=', $room_id];
        }
        if(!empty($position_id)){
            $where[] = ['position_id', '=', $position_id];
        }
        $where1 = '`refund_money`<`pay_money`';
        $list = $db_house_new_pay_order_summary->getList($where, $where1, '*', $page, $limit);
        if (!empty($list)) {
            $list = $list->toArray();
            if (!empty($list)) {
                $where_pay = [];
                $db_house_new_offline_pay = new HouseNewOfflinePay();
                $pay_list = $db_house_new_offline_pay->getList($where_pay, '*');
                $payList = [];
                if (!empty($pay_list)) {
                    $pay_list = $pay_list->toArray();
                    if (!empty($pay_list)) {
                        foreach ($pay_list as $vv) {
                            $payList[$vv['id']] = $vv['name'];
                        }
                    }
                }
                $db_house_property_digit_service = new HousePropertyDigitService();
                $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$list[0]['property_id']]);

                foreach ($list as $key => &$value) {
                    $where_order = [];
                    $where_order[] = ['o.summary_id', '=', $value['summary_id']];
                    $where_order[] = ['o.is_paid', '=', 1];
                    $where_order[] = ['o.order_type', '<>', 'non_motor_vehicle'];
                    $where_order[] = ['o.village_id', '=', $village_id];
                    $where11 = '`o`.`refund_money`<`o`.`pay_money`';
                    $whereRefund=[];
                    $whereRefund[]=['refund_type', '<>', 2];
                    $whereRefund[] = ['summary_id', '=', $value['summary_id']];
                    $whereRefund[] = ['is_paid', '=', 1];
                    $whereRefund[] = ['order_type', '<>', 'non_motor_vehicle'];
                    $whereRefund[] = ['village_id', '=', $village_id];
                    $countRefund=$db_house_new_pay_order->getSum($whereRefund,'pay_money');
                    $value['pay_money']=$countRefund;
                    $pay_money=0;
                    $order_list = $db_house_new_pay_order->getHistoryOrder($where_order, $where11, 'cp.img,cp.name as project_name,o.summary_id,o.order_id,o.order_type,o.order_name,o.pay_money,o.pay_time,o.pay_type ,o.offline_pay_type,o.is_paid', 'o.order_id DESC');
                       if (!empty($order_list)) {
                            $order_list = $order_list->toArray();
                            if (!empty($order_list)){
                                foreach ($order_list as $vv){
                                    $pay_money=$pay_money+$vv['pay_money'];
                                }
                            }
                            $value['pay_money']=$pay_money;
                            $value['pay_money'] = formatNumber($value['pay_money'],2,1);
                            if (!empty($order_list)) {
                                if (count($order_list) > 1) {
                                    $value['type'] = 2;
                                    $value['order_name'] = '合计';
                                    $value['img'] = cfg('site_url') . '/static/images/house/total.png';
                                } else {
                                    $value['type'] = 1;
                                    $value['order_name'] = $order_list[0]['project_name'];
                                    $value['img'] = replace_file_domain($order_list[0]['img']);
                                }
                                if ($value['pay_type'] == 2||$value['pay_type'] == 22) {
                                    $offline_pay_type_str=$order_list[0]['offline_pay_type'];
                                    $offline_pay_type = '';
                                    if (!empty($payList) && !empty($offline_pay_type_str)) {
                                        if(strpos($offline_pay_type_str,',')>0){
                                            $offline_pay_type_arr=explode(',',$offline_pay_type_str);
                                            foreach ($offline_pay_type_arr as $opay){
                                                if(isset($payList[$opay])){
                                                    $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                                                }
                                            }
                                        }else{
                                            $offline_pay_type = isset($payList[$offline_pay_type_str]) ? $payList[$offline_pay_type_str]:'';
                                        }
                                    }
                                    $value['pay_type'] = $this->pay_type[$value['pay_type']] . '-' . $offline_pay_type;
                                } elseif (in_array($value['pay_type'], [1, 3])) {
                                    $value['pay_type'] = $this->pay_type[$value['pay_type']];
                                } elseif ($value['pay_type'] == 4) {
                                    if (empty($value['online_pay_type'])) {
                                        $online_pay_type = '余额支付';
                                    } else {
                                        $online_pay_type = $this->getPayTypeMsg($value['online_pay_type']);
                                    }
                                    $value['pay_type'] = $this->pay_type[$value['pay_type']] . '-' . $online_pay_type;
                                }
                                if ($value['pay_time'] > 1) {
                                    $value['pay_time'] = date('Y-m-d H:i:s', $value['pay_time']);
                                }
                                if (!empty($value['refund_money']) && $value['refund_money'] < $value['pay_money']) {
                                    $value['refund_status'] = '部分退款';
                                } else {
                                    $value['refund_status'] = '';
                                }

                                //  print_r($value);exit;

                            }
                        }else{
                            unset($list[$key]);
                        }
                    }
                $list = array_values($list);
            }
        }

        return $list;
    }

    /**
     * 查询历史缴费账单详情
     * @author:zhubaodi
     * @date_time: 2021/6/29 19:47
     */
    public function getHistoryOrderInfo($village_id, $summary_id)
    {
        if (empty($village_id)) {
            throw new \think\Exception("小区id不能为空！");
        }
        if (empty($summary_id)) {
            throw new \think\Exception("账单id不能为空！");
        }
        $db_house_new_pay_order_summary = new HouseNewPayOrderSummary();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $db_house_new_charge_project = new HouseNewChargeProject();
        $db_house_new_charge_number = new HouseNewChargeNumber();
        $db_house_new_charge_rule = new HouseNewChargeRule();
        $db_admin = new Admin();
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $summary_info = $db_house_new_pay_order_summary->getOne(['summary_id' => $summary_id]);
        if (!empty($summary_info)){
            if ($summary_info['pay_type'] == 2 || $summary_info['pay_type'] == 22) {
                $db_house_new_offline_pay = new HouseNewOfflinePay();
                $offline_pay_type='';
                if(strpos($summary_info['offline_pay_type'],',')>0){
                    $offline_pay_type_arr=explode(',',$summary_info['offline_pay_type']);
                    $where_pay_arr=array();
                    $where_pay_arr[]=['id','in',$offline_pay_type_arr];
                    $pay_list = $db_house_new_offline_pay->getList($where_pay_arr, '*');
                    $payList = [];
                    if (!empty($pay_list)) {
                        $pay_list = $pay_list->toArray();
                        if (!empty($pay_list)) {
                            foreach ($pay_list as $vv) {
                                $payList[$vv['id']] = $vv['name'];
                            }
                        }
                    }
                    foreach ($offline_pay_type_arr as $opay){
                        if(isset($payList[$opay])){
                            $offline_pay_type.=empty($offline_pay_type) ? $payList[$opay]:'、'.$payList[$opay];
                        }
                    }

                }else{
                    $offline_pay = $db_house_new_offline_pay->get_one(['id'=>$summary_info['offline_pay_type']]);
                    if (!empty($offline_pay) && !$offline_pay->isEmpty()){
                        $offline_pay_type=$offline_pay['name'];
                    }
                }

                $data['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $offline_pay_type;
            } elseif (in_array($summary_info['pay_type'], [1, 3])) {
                $data['pay_type'] = $this->pay_type[$summary_info['pay_type']];
            } elseif ($summary_info['pay_type'] == 4) {
                if (empty($summary_info['online_pay_type'])) {
                    $online_pay_type1 = '余额支付';
                } else {
                    $online_pay_type1 = $this->getPayTypeMsg($summary_info['online_pay_type']);
                }
                $data['pay_type'] = $this->pay_type[$summary_info['pay_type']] . '-' . $online_pay_type1;
            }
        }
        $field = 'o.*,cp.img,cp.type';
        $where1 = '`refund_money`<`pay_money`';
        $list = $db_house_new_pay_order->getHistoryOrder([['o.summary_id' ,'=',$summary_id],['o.is_paid','=',1],['o.refund_type','<>',2]], $where1, $field);
        $order_data = [];
        $children_arr_info='';
        if($list && !$list->isEmpty()){
            $list = $list->toArray();
        }else{
            $list=array();
            //包含退款的查一下
            $listTmp = $db_house_new_pay_order->getHistoryOrder([['o.summary_id' ,'=',$summary_id],['o.is_paid','=',1]], '', $field);
            if ($listTmp && !$listTmp->isEmpty()){
                    throw new \think\Exception("账单已经退款了！");
            }
        }
            if (!empty($list)) {
                $db_house_property_digit_service = new HousePropertyDigitService();
                $service_house_village_parking = new HouseVillageParkingService();
                $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$list[0]['property_id']]);

                if (count($list) == 1) {
                    $park_number='无';
                    $number = '无';
                    if (!empty($list[0]['room_id'])) {
                        $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $list[0]['room_id']]);
                        if (!empty($room)) {
                            $room = $room->toArray();
                            if (!empty($room)) {
                                $room1 = $room[0];
                                $number = $room1['single_name'] . '(栋)' . $room1['floor_name'] . '(单元)' . $room1['layer_name'] . '(层)' . $room1['room'];
                            }
                        }
                        if($list[0]['position_id']>0){
                            $park_number=$this->getCarParkingById($list[0]['position_id']);
                        }
                    } else if (!empty($list[0]['position_id'])) {
                        $position_num = $db_house_village_parking_position->getLists(['position_id' => $list[0]['position_id']], 'pp.children_type,pp.position_num,pg.garage_num', 0);
                        if (!empty($position_num)) {
                            $position_num = $position_num->toArray();
                            if (!empty($position_num)) {
                                $position_num1 = $position_num[0];
                                if (empty($position_num1['garage_num'])) {
                                    $position_num1['garage_num'] = '临时车库';
                                }
                                $park_number = $position_num1['garage_num'] . $position_num1['position_num'];
                                if ($position_num1['children_type'] == 1) {
                                    $children_arr = $service_house_village_parking->getChildrenPositionList(['village_id' => $village_id, 'position_id' => $list[0]['position_id']]);
                                    if (!empty($children_arr['children_arr_info'])) {
                                        $children_arr_info = $children_arr['children_arr_info'];
                                    }
                                }
                            }

                        }
                    }
                    $project_name = '';
                    if (!empty($list[0]['project_id'])) {
                        $project_info = $db_house_new_charge_project->getOne(['id' => $list[0]['project_id']], 'id,name,subject_id');
                        $project_name = $project_info['name'];
                    }
                    if (!empty($list[0]['rule_id'])) {
                        $rule_info = $db_house_new_charge_rule->getOne(['id' => $list[0]['rule_id']], '*');
                    }
                    $subject_name = '';
                    $subject_type='';
                    if (!empty($project_info['subject_id'])) {
                        $subjectinfo = $db_house_new_charge_number->get_one(['id' => $project_info['subject_id']]);
                        if (!empty($subjectinfo)) {
                            $subject_name = $subjectinfo['charge_number_name'];
                            $subject_type = $subjectinfo['charge_type'];
                        }
                    }
                    $admininfo = $db_admin->getOne(['id' => $list[0]['role_id']]);
                    $list[0]['role_name'] = '';
                    if (!empty($admininfo)) {
                        $list[0]['role_name'] = $admininfo['account'];
                    }
                    $record = $db_house_village_detail_record->getOne(['order_id' => $list[0]['order_id']]);
                    if (empty($record)) {
                        $list[0]['record_status'] = '未开票';
                    } else {
                        $list[0]['record_status'] = '已开票';
                    }
                    if ($list[0]['is_refund'] == 1) {
                        $list[0]['refund_status'] = '正常';
                    } elseif ($list[0]['refund_money'] < $list[0]['pay_money']) {
                        $list[0]['refund_status'] = '部分退款';
                    }
                    $pay_type=$data['pay_type'];

                    if(empty($digit_info) || ($list[0]['pay_time']>0)){
                        $list[0]['pay_money']= formatNumber($list[0]['pay_money'],2,1);
                        $list[0]['total_money']= formatNumber($list[0]['total_money'],2,1);
                        $list[0]['modify_money']= formatNumber($list[0]['modify_money'],2,1);
                        $list[0]['late_payment_money']= formatNumber($list[0]['late_payment_money'],2,1);
                        $list[0]['prepare_pay_money']= formatNumber($list[0]['prepare_pay_money'],2,1);
                        $list[0]['refund_money']= formatNumber($list[0]['refund_money'],2,1);

                        $list[0]['pay_amount_points']=formatNumber($list[0]['pay_amount_points']/100,2,1);
                        $list[0]['system_balance']=formatNumber($list[0]['system_balance'],2,1);
                        $list[0]['score_deducte']=formatNumber($list[0]['score_deducte'],2,1);
                        $list[0]['score_used_count']=formatNumber($list[0]['score_used_count'],2,1);


                    }else{
                        if($list[0]['order_type'] == 'water' || $list[0]['order_type'] == 'electric' || $list[0]['order_type'] == 'gas'){
                            $list[0]['pay_money']= formatNumber( $list[0]['pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['total_money']= formatNumber( $list[0]['total_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['modify_money']= formatNumber( $list[0]['modify_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['late_payment_money']= formatNumber( $list[0]['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['prepare_pay_money']= formatNumber( $list[0]['prepare_pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['refund_money']= formatNumber( $list[0]['refund_money'],$digit_info['meter_digit'],$digit_info['type']);

                            $list[0]['pay_amount_points']=formatNumber($list[0]['pay_amount_points']/100,$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['system_balance']=formatNumber($list[0]['system_balance'],$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['score_deducte']=formatNumber($list[0]['score_deducte'],$digit_info['meter_digit'],$digit_info['type']);
                            $list[0]['score_used_count']=formatNumber($list[0]['score_used_count'],$digit_info['meter_digit'],$digit_info['type']);

                        }else{
                            $list[0]['pay_money']= formatNumber( $list[0]['pay_money'],$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['total_money']= formatNumber( $list[0]['total_money'],$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['modify_money']= formatNumber( $list[0]['modify_money'],$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['late_payment_money']= formatNumber( $list[0]['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['prepare_pay_money']= formatNumber( $list[0]['prepare_pay_money'],$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['refund_money']= formatNumber( $list[0]['refund_money'],$digit_info['other_digit'],$digit_info['type']);

                            $list[0]['pay_amount_points']=formatNumber($list[0]['pay_amount_points']/100,$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['system_balance']=formatNumber($list[0]['system_balance'],$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['score_deducte']=formatNumber($list[0]['score_deducte'],$digit_info['other_digit'],$digit_info['type']);
                            $list[0]['score_used_count']=formatNumber($list[0]['score_used_count'],$digit_info['other_digit'],$digit_info['type']);

                        }
                    }
                    $data = [];
                    if (isset($list[0]['parking_num']) && $list[0]['parking_num']) {
                        $data['parking_num'] = $list[0]['parking_num'];
                    }
                    $data['money'] = '￥' . $list[0]['pay_money'];
                    $data['order_no'] = $summary_info['order_no'];
                    $data['order_serial'] = $summary_info['paid_orderid'];
                    $data['number'] = $number;
                    $data['park_number'] = $park_number;
                    $data['pay_bind_name'] = $list[0]['pay_bind_name'];
                    $data['pay_bind_phone'] = $list[0]['pay_bind_phone'];
                    $data['project_name'] = $project_name;
                    $data['subject_name'] = $subject_name;
                    $data['total_money'] = $list[0]['total_money'];
                    $data['modify_money'] = '￥' . $list[0]['modify_money'];
                    $data['modify_reason'] = $list[0]['modify_reason'];
                    $data['pay_money'] = '￥' . $list[0]['pay_money'];
                    $data['pay_money1'] = $list[0]['pay_money'];
                    $data['village_balance'] = '￥' . $list[0]['village_balance'];
                    if (empty($list[0]['diy_type'])){
                        $data['diy_type'] ='无';
                    }else if($is_grapefruit_prepaid==1 && $list[0]['diy_type']==1 && !empty($list[0]['diy_content']) && strpos($list[0]['diy_content'],'预缴优惠')!==false){
                        $data['diy_type'] ='折扣';
                        $discount_money=$list[0]['modify_money']-$list[0]['pay_money'];
                        $discount_money=round($discount_money,2);
                        if($discount_money>0){
                            $data['diy_type'] .='（折扣金额：'.$discount_money.'元）';
                        }
                    }else {
                        $data['diy_type'] = $this->diy_type[$list[0]['diy_type']];
                    }
                    
                    $data['score_used_count'] = $list[0]['score_used_count'];
                    $data['pay_time'] = date('Y-m-d H:i:s', $list[0]['pay_time']);
                    $data['pay_type'] = $pay_type;
                    if ($list[0]['service_start_time'] > 1) {
                        $data['service_start_time'] = date('Y-m-d H:i:s', $list[0]['service_start_time']);
                        $data['service_end_time'] = date('Y-m-d H:i:s', $list[0]['service_end_time']);
                    }
                    $data['opt_meter_time']='';
                    if(in_array($list[0]['order_type'],['water','electric','gas'])&&!empty($list[0]['meter_reading_id'])){
                        $db_house_village_meter_reading=new HouseVillageMeterReading();
                        $meter_addtime=$db_house_village_meter_reading->getOne(['id'=>$list[0]['meter_reading_id']],'opt_meter_time,add_time');
                        if (!empty($meter_addtime)){
                            if (!empty($meter_addtime['opt_meter_time'])){
                                $data['opt_meter_time']=date('Y-m-d H:i:s',$meter_addtime['opt_meter_time']);
                            } elseif (empty($meter_addtime['opt_meter_time'])||!empty($meter_addtime['add_time'])){
                                $data['opt_meter_time']=date('Y-m-d H:i:s',$meter_addtime['add_time']);
                            }
                        }
                    }
                    $data['now_ammeter'] =$list[0]['now_ammeter'];
                    $data['last_ammeter'] =$list[0]['last_ammeter'];
                    $data['ammeter'] = $list[0]['now_ammeter'] - $list[0]['last_ammeter'];
                    $data['role_name'] = $list[0]['role_name'];
                    $data['record_status'] = $list[0]['record_status'];
                    $data['refund_status'] = $list[0]['refund_status'];

                    $data['remark'] = $list[0]['remark'];
                    $data['late_payment_day'] = $list[0]['late_payment_day'];
                    $data['late_payment_money'] = '￥' . $list[0]['late_payment_money'];

                    $data['pay_amount_points'] = '￥' . $list[0]['pay_amount_points'];
                    $data['system_balance'] = '￥' . $list[0]['system_balance'];
                    $data['score_deducte'] = '￥' . $list[0]['score_deducte'];
                    $is_prepare = $list[0]['is_prepare'];
                    if ($list[0]['type'] == 2) {
                        $data['service_month_num'] = $list[0]['service_month_num']?$list[0]['service_month_num']:1;
                        if (!empty($data['service_month_num'])){
                            if ($rule_info['bill_create_set']==1){
                                $data['service_month_num']=$data['service_month_num'].'天';
                            }elseif ($rule_info['bill_create_set']==2){
                                $data['service_month_num']=$data['service_month_num'].'个月';
                            }elseif ($rule_info['bill_create_set']==3){
                                $data['service_month_num']=$data['service_month_num'].'年';
                            }else{
                                $data['service_month_num']=$data['service_month_num'].'';
                            }

                        }
                    } else {
                        $data['service_month_num'] = 0;
                    }
                    $data['diy_content'] = $list[0]['diy_content'];
                    $data['order_type'] =$list[0]['order_type'];
                    $data['children_arr_info'] =$children_arr_info;
                    $data['prepare_pay_money'] = '￥' . $list[0]['prepare_pay_money'];
                    $data['refund_money'] = '￥' . $list[0]['refund_money'];

                    $ammeter_name='用量';

                    $list = [];
                    $list[]=array(
                        'title'=>'订单编号',
                        'val'=>$data['order_no']
                    );
                    $list[]=array(
                        'title'=>'支付单号',
                        'val'=>$data['order_serial']
                    );
                    $list[]=array(
                        'title'=>'房间号',
                        'val'=>$data['number']
                    );
                    $list[]=array(
                        'title'=>'车位号',
                        'val'=>$data['park_number']
                    );
                    if (!empty($data['children_arr_info'])){
                        $list[]=array(
                            'title'=>'子车位号',
                            'val'=>$data['children_arr_info']
                        );
                    }
                    $list[]=array(
                        'title'=>'缴费人',
                        'val'=>$data['pay_bind_name']
                    );
                    $list[]=array(
                        'title'=>'电话',
                        'val'=>$data['pay_bind_phone']
                    );
                    $list[]=array(
                        'title'=>'收费项目名称',
                        'val'=>$data['project_name']
                    );
                    $list[]=array(
                        'title'=>'所属收费科目',
                        'val'=>$data['subject_name']
                    );
                    if (isset($data['parking_num']) && intval($data['parking_num'])) {
                        $list[]=array(
                            'title' => '车位数量',
                            'val' => $data['parking_num']
                        );
                    }
                    $list[]=array(
                        'title'=>'应收费用',
                        'val'=>'￥' . $data['total_money']
                    );
                    $list[]=array(
                        'title'=>'修改后费用',
                        'val'=>$data['modify_money']
                    );
                    $list[]=array(
                        'title'=>'修改原因',
                        'val'=>$data['modify_reason']
                    );
                    $list[]=array(
                        'title'=>'实际缴费金额',
                        'val'=>$data['pay_money']
                    );
                    $list[]=array(
                        'title'=>'线上支付金额',
                        'val'=>$data['pay_amount_points']
                    );
                    $list[]=array(
                        'title'=>'余额支付金额',
                        'val'=>$data['system_balance']
                    );
                    $list[]=array(
                        'title'=>'小区余额支付金额',
                        'val'=>$data['village_balance']
                    );
                    $list[]=array(
                        'title'=>'积分抵扣金额',
                        'val'=>$data['score_deducte']
                    );
                    $list[]=array(
                        'title'=>'优惠方式',
                        'val'=>$data['diy_type']
                    );
                    $list[]=array(
                        'title'=>'积分使用数量',
                        'val'=>$data['score_used_count']
                    );
                    $list[]=array(
                        'title'=>'支付时间',
                        'val'=>$data['pay_time']
                    );
                    $list[]=array(
                        'title'=>'支付方式',
                        'val'=>$data['pay_type']
                    );
                    $list[]=array(
                        'title'=>$ammeter_name,
                        'val'=>$data['ammeter']
                    );
                    if (in_array($data['order_type'],['water','electric','gas'])){
                        $list[]=array(
                            'title'=>'起度',
                            'val'=>$data['last_ammeter']
                        );
                        $list[]=array(
                            'title'=>'止度',
                            'val'=>$data['now_ammeter']
                        );
                        $list[]=array(
                            'title'=>'抄表时间',
                            'val'=>$data['opt_meter_time']
                        );
                    }


                    $list[]=array(
                        'title'=>'收款人',
                        'val'=>$data['role_name']
                    );
                    $list[]=array(
                        'title'=>'开票状态',
                        'val'=>$data['record_status']
                    );
                    $list[]=array(
                        'title'=>'账单状态',
                        'val'=>$data['refund_status']
                    );
                    $list[]=array(
                        'title'=>'备注',
                        'val'=>$data['remark']
                    );
                    $list[]=array(
                        'title'=>'滞纳总天数',
                        'val'=>$data['late_payment_day']
                    );
                    $list[]=array(
                        'title'=>'滞纳金总费用',
                        'val'=>$data['late_payment_money']
                    );
                    if($is_prepare == 1){
                        $list[]=array(
                            'title'=>'收费周期',
                            'val'=>'无'
                        );
                        $list[]=array(
                            'title'=>'预缴周期',
                            'val'=>$data['service_month_num']
                        );

                    }else{
                        $list[]=array(
                            'title'=>'收费周期',
                            'val'=>$data['service_month_num']
                        );
                        $list[]=array(
                            'title'=>'预缴周期',
                            'val'=>'无'
                        );
                    }
                    $list[]=array(
                        'title'=>'预缴优惠',
                        'val'=>$data['diy_content']
                    );
                    $list[]=array(
                        'title'=>'预缴费用',
                        'val'=>$data['prepare_pay_money']
                    );
                    $list[]=array(
                        'title'=>'退款总金额',
                        'val'=>$data['refund_money']
                    );
                    if (isset($data['service_start_time'])) {
                        $list[]=array(
                            'title'=>'计费开始时间',
                            'val'=>$data['service_start_time']
                        );
                        $list[]=array(
                            'title'=>'计费结束时间',
                            'val'=>$data['service_end_time']
                        );
                    }

                    $order_data['type'] = 1;
                    $order_data['total_money'] = $data['pay_money1'];
                    $order_data['data'] = $list;
                } else {
                    $order_data['type'] = 2;
                    $pay_type=$data['pay_type'];
                    $data = [];
                    if (!empty($summary_info)) {
                        $number = '';
                        if (!empty($summary_info['room_id'])) {
                            $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $summary_info['room_id']]);
                            if (!empty($room)) {
                                $room = $room->toArray();
                                if (!empty($room)) {
                                    $room1 = $room[0];
                                    $number = $room1['single_name'] . '(栋)' . $room1['floor_name'] . '(单元)' . $room1['layer_name'] . '(层)' . $room1['room'];
                                }
                            }
                        } elseif (!empty($summary_info['position_id'])) {
                            $position_num = $db_house_village_parking_position->getLists(['position_id' => $summary_info['position_id']], 'pp.position_num,pg.garage_num', 0);
                            if (!empty($position_num)) {
                                $position_num = $position_num->toArray();
                                if (!empty($position_num)) {
                                    $position_num1 = $position_num[0];
                                    if (empty($position_num1['garage_num'])) {
                                        $position_num1['garage_num'] = '临时车库';
                                    }
                                    $number = $position_num1['garage_num'] . $position_num1['position_num'];
                                }
                            }
                        }
                        $admininfo = $db_admin->getOne(['id' => $list[0]['role_id']]);
                        $list[0]['role_name'] = '';
                        if (!empty($admininfo)) {
                            $list[0]['role_name'] = $admininfo['account'];
                        }
                        $data['pay_bind_name'] = $list[0]['pay_bind_name'];
                        $data['pay_bind_phone'] = $list[0]['pay_bind_phone'];
                        $data['order_serial'] = $list[0]['order_no'];
                        $data['number'] = $number;
                        $data['pay_type'] = $pay_type;
                        /*if ($list[0]['pay_type'] == 2) {
                            $data['pay_type'] = $this->pay_type[$list[0]['pay_type']] . $list[0]['pay_type_name'];
                        } elseif (in_array($list[0]['pay_type'], [1, 3])) {
                            $data['pay_type'] = $this->pay_type[$list[0]['pay_type']];
                        }*/
                        $data['pay_time'] = date('Y-m-d H:i:s', $list[0]['pay_time']);
                        $data['role_name'] = $list[0]['role_name'];
                        $data['diy_content'] = $list[0]['diy_content'];
                        $data['score_used_count'] = $summary_info['score_used_count'];
                        $data['system_balance'] = $summary_info['system_balance'];
                        $data['pay_amount_points'] = round_number($summary_info['pay_amount_points']/100,2);
                        $data['score_deducte'] = $summary_info['score_deducte'];
                        $data['remarks'] = $summary_info['remarks'];

                        $list1 = [];
                        $list1[]=array(
                            'title'=>'缴费人',
                            'val'=>$data['pay_bind_name']
                        );
                        $list1[]=array(
                            'title'=>'支付单号',
                            'val'=>$data['order_serial']
                        );
                        $list1[]=array(
                            'title'=>'电话',
                            'val'=>$data['pay_bind_phone']
                        );
                        $list1[]=array(
                            'title'=>'地址',
                            'val'=>$data['number']
                        );
                        $list1[]=array(
                            'title'=>'支付方式',
                            'val'=>$data['pay_type']
                        );
                        $list1[]=array(
                            'title'=>'支付时间',
                            'val'=>$data['pay_time']
                        );
                        $list1[]=array(
                            'title'=>'收款人',
                            'val'=>$data['role_name']
                        );
                        $list1[]=array(
                            'title'=>'优惠方式',
                            'val'=>$data['diy_content']
                        );
                        $list1[]=array(
                            'title'=>'线上支付金额',
                            'val'=>$data['pay_amount_points']
                        );
                        $list1[]=array(
                            'title'=>'余额支付金额',
                            'val'=>$data['system_balance']
                        );
                        $list1[]=array(
                            'title'=>'积分抵扣金额',
                            'val'=>$data['score_deducte']
                        );
                        $list1[]=array(
                            'title'=>'积分使用数量',
                            'val'=>$data['score_used_count']
                        );
                        $list1[]=array(
                            'title'=>'备注',
                            'val'=>$data['remarks']
                        );
                        $order_list = [];
                        $sum_money = 0;
                        foreach ($list as $k => $val) {
                            $sum_money = $sum_money + $val['pay_money'];
                            $order_list[$k]['order_name'] = $val['order_name'];
                            $order_list[$k]['pay_money'] = $val['pay_money'];
                            $order_list[$k]['order_id'] = $val['order_id'];
                            $order_list[$k]['summary_id'] = $val['summary_id'];
                            if ($val['is_refund'] == 1) {
                                $order_list[$k]['refund_status'] = '';
                            } elseif ($val['refund_money'] < $val['pay_money']) {
                                $order_list[$k]['refund_status'] = '部分退款';
                            }
                            $order_list[$k]['img'] = replace_file_domain($val['img']);
                            if(empty($digit_info)){
                                $order_list[$k]['pay_money']= formatNumber($order_list[$k]['pay_money'],2,1);
                            }else{
                                if($val['order_type'] == 'water' || $val['order_type'] == 'electric' || $val['order_type'] == 'gas'){
                                    $order_list[$k]['pay_money']= formatNumber($order_list[$k]['pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                               }else{
                                    $order_list[$k]['pay_money']= formatNumber($order_list[$k]['pay_money'],$digit_info['other_digit'],$digit_info['type']);
                                }
                            }
                        }

                        $sum_money= formatNumber($sum_money,2,1);

                        $order_data['sum_money'] = $sum_money;
                        $order_data['list'] = $order_list;
                        $order_data['data'] = $list1;
                    }
                }
            }
       
        return $order_data;
    }

    /**
     * 查询多个账单里面的单个账单详情
     * @author:zhubaodi
     * @date_time: 2021/6/29 19:47
     */
    public function getHistoryInfo($village_id, $order_id)
    {
        if (empty($village_id)) {
            throw new \think\Exception("小区id不能为空！");
        }
        if (empty($order_id)) {
            throw new \think\Exception("账单id不能为空！");
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_detail_record = new HouseVillageDetailRecord();
        $db_house_new_charge_rule = new HouseNewChargeRule();
        $order_info = $db_house_new_pay_order->get_one(['order_id' => $order_id, 'village_id' => $village_id]);
        $data = [];
        if (isset($order_info['parking_num']) && intval($order_info['parking_num']) > 0) {
            $data['parking_num'] = $order_info['parking_num'];
        }
        $list = [];
        if (!empty($order_info)) {
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$order_info['property_id']]);

            $record = $db_house_village_detail_record->getOne(['order_id' => $order_info['order_id']]);
            if (empty($record)) {
                $order_info['record_status'] = '未开票';
            } else {
                $order_info['record_status'] = '已开票';
            }
            if ($order_info['is_refund'] == 1) {
                $order_info['refund_status'] = '正常';
            } elseif ($order_info['refund_money'] < $order_info['pay_money']) {
                $order_info['refund_status'] = '部分退款';
            }

            if(empty($digit_info) || ($order_info['pay_time']>0)){
                $order_info['pay_money']= formatNumber($order_info['pay_money'],2,1);
                $order_info['modify_money']= formatNumber($order_info['modify_money'],2,1);
                $order_info['late_payment_money']= formatNumber($order_info['late_payment_money'],2,1);
                $order_info['refund_money']= formatNumber($order_info['refund_money'],2,1);

                $order_info['pay_amount_points']=formatNumber($order_info['pay_amount_points']/100,2,1);
                $order_info['system_balance']=formatNumber($order_info['system_balance'],2,1);
                $order_info['score_deducte']=formatNumber($order_info['score_deducte'],2,1);
                $order_info['score_used_count']=formatNumber($order_info['score_used_count'],2,1);

            }else{
                if($order_info['order_type'] == 'water' || $order_info['order_type'] == 'electric' || $order_info['order_type'] == 'gas'){
                    $order_info['pay_money']= formatNumber($order_info['pay_money'],$digit_info['meter_digit'],$digit_info['type']);
                    $order_info['modify_money']= formatNumber($order_info['modify_money'],$digit_info['meter_digit'],$digit_info['type']);
                    $order_info['late_payment_money']= formatNumber($order_info['late_payment_money'],$digit_info['meter_digit'],$digit_info['type']);
                    $order_info['refund_money']= formatNumber($order_info['refund_money'],$digit_info['meter_digit'],$digit_info['type']);

                    $order_info['pay_amount_points']=formatNumber($order_info['pay_amount_points']/100,$digit_info['meter_digit'],$digit_info['type']);
                    $order_info['system_balance']=formatNumber($order_info['system_balance'],$digit_info['meter_digit'],$digit_info['type']);
                    $order_info['score_deducte']=formatNumber($order_info['score_deducte'],$digit_info['meter_digit'],$digit_info['type']);
                    $order_info['score_used_count']=formatNumber($order_info['score_used_count'],$digit_info['meter_digit'],$digit_info['type']);
                }else{
                    $order_info['pay_money']= formatNumber($order_info['pay_money'],$digit_info['other_digit'],$digit_info['type']);
                    $order_info['modify_money']= formatNumber($order_info['modify_money'],$digit_info['other_digit'],$digit_info['type']);
                    $order_info['late_payment_money']= formatNumber($order_info['late_payment_money'],$digit_info['other_digit'],$digit_info['type']);
                    $order_info['refund_money']= formatNumber($order_info['refund_money'],$digit_info['other_digit'],$digit_info['type']);

                    $order_info['pay_amount_points']=formatNumber($order_info['pay_amount_points']/100,$digit_info['other_digit'],$digit_info['type']);
                    $order_info['system_balance']=formatNumber($order_info['system_balance'],$digit_info['other_digit'],$digit_info['type']);
                    $order_info['score_deducte']=formatNumber($order_info['score_deducte'],$digit_info['other_digit'],$digit_info['type']);
                    $order_info['score_used_count']=formatNumber($order_info['score_used_count'],$digit_info['other_digit'],$digit_info['type']);
                }
            }
            $data['total_money'] = $order_info['pay_money'];
            $data['order_no'] = $order_info['order_no'];
            $data['order_name'] = $order_info['order_name'];
            $data['pay_money'] = '￥' . $order_info['modify_money'];
            $data['service_start_time'] = date('Y-m-d H:i:s', $order_info['service_start_time']);
            $data['service_end_time'] = date('Y-m-d H:i:s', $order_info['service_end_time']);
            $data['ammeter'] = $order_info['now_ammeter'] - $order_info['last_ammeter'];
            $data['record_status'] = $order_info['record_status'];
            $data['refund_status'] = $order_info['refund_status'];
            $data['late_payment_day'] = $order_info['late_payment_day'];
            $data['late_payment_money'] = '￥' . $order_info['late_payment_money'];
            $rule_info = $db_house_new_charge_rule->getOne(['id' => $order_info['rule_id']], '*');
            $db_house_new_charge_project = new HouseNewChargeProject();
            $project_info = $db_house_new_charge_project->getOne(['id'=>$order_info['project_id']],'type');
            $data['service_month_num'] = $order_info['service_month_num'];
            if($project_info['type'] == 2){
                $data['service_month_num'] = $data['service_month_num']?$data['service_month_num']:1;
                if (!empty($data['service_month_num'])){
                    if ($rule_info['bill_create_set']==1){
                        $data['service_month_num']=$data['service_month_num'].'天';
                    }elseif ($rule_info['bill_create_set']==2){
                        $data['service_month_num']=$data['service_month_num'].'个月';
                    }elseif ($rule_info['bill_create_set']==3){
                        $data['service_month_num']=$data['service_month_num'].'年';
                    }else{
                        $data['service_month_num']=$data['service_month_num'].'';
                    }
                }
            }
            $data['diy_content'] = $order_info['diy_content'];
            $data['prepare_pay_money'] = '￥' . $order_info['pay_money'];
            $data['refund_money'] = '￥' . $order_info['refund_money'];

            $data['pay_amount_points'] = '￥' . $order_info['pay_amount_points'];
            $data['system_balance'] = '￥' . $order_info['system_balance'];
            $data['score_deducte'] = '￥' . $order_info['score_deducte'];
            $data['score_used_count'] =  $order_info['score_used_count'];

           /* $list[0]['title'] = '应收';
            $list[0]['val'] = '￥' . $data['total_money'];*/
            $list = [];
            $list[]=array(
                'title'=>'订单编号',
                'val'=>$data['order_no']
            );
            $list[]=array(
                'title'=>'缴费项目',
                'val'=>$data['order_name']
            );
            if (isset($data['parking_num']) && intval($data['parking_num'])) {
                $list[]=array(
                    'title' => '车位数量',
                    'val' => $data['parking_num']
                );
            }
            $list[]=array(
                'title'=>'应收费用',
                'val'=>$data['pay_money']
            );
            $list[]=array(
                'title'=>'用量',
                'val'=>$data['ammeter']
            );

            $list[]=array(
                'title'=>'开票状态',
                'val'=>$data['record_status']
            );
            $list[]=array(
                'title'=>'账单状态',
                'val'=>$data['refund_status']
            );
            $list[]=array(
                'title'=>'滞纳天数',
                'val'=>$data['late_payment_day']
            );
            $list[]=array(
                'title'=>'滞纳金费用',
                'val'=>$data['late_payment_money']
            );
            if($order_info['is_prepare'] == 1){
                $list[]=array(
                    'title'=>'收费周期',
                    'val'=>'无'
                );
                $list[]=array(
                    'title'=>'预缴周期',
                    'val'=>$data['service_month_num']
                );

            }else{
                $list[]=array(
                    'title'=>'收费周期',
                    'val'=>$data['service_month_num']
                );
                $list[]=array(
                    'title'=>'预缴周期',
                    'val'=>'无'
                );
            }

        }


        $res = [];
        if (!empty($list)) {
            $res['list'] = $list;
            $res['total_money'] = $data['total_money'];
        } else {
            $res['list'] = [];
            $res['total_money'] = 0;
        }

        return $res;
    }


    /**
     * 未缴账单合计页
     * @param array $where
     * @param bool $field
     * @param int $pigcms_id
     * @param int $village_id
     * @param int $room_id
     * @param bool $static
     * @param string $year_1
     * @param bool $is_all_select
     * @param int $type
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/07/01
     */
    public function getYear($where = [], $field = true, $pigcms_id = 0, $village_id = 0, $room_id = 0, $static = true, $year_1 = '', $is_all_select = true, $type = 0)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village = new HouseVillage();
        $village_info = $db_house_village->getOne($village_id,'property_id');
        $property_id = $village_info['property_id'];
        if($property_id){
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
        }else{
            $digit_info = [];
        }
        $data = $db_house_new_pay_order->getList($where, $field, 0);
        fdump_api($data,'0108',1);
        $year_arr = array();
        $list = array();
        if ($data) {
            foreach ($data as $v) {
                $year = date('Y', $v['add_time']);
                if (!in_array($year, $year_arr)) {
                    $year_arr[] = $year;
                }
            }
        }
        if ($year_arr) {
            foreach ($year_arr as $key => $value) {
                $where = [];
                $time = $this->getStartAndEndUnixTimestamp($value);
                $where[] = ['add_time', 'between', array($time['start'], $time['end'])];
                $where[] = ['is_discard', '=', 1];
                $where[] = ['is_paid', '=', 2];
                $where[] = ['order_type', '<>', 'non_motor_vehicle'];
                $where[] = ['room_id', '=', $room_id];
                $where[] = ['village_id', '=', $village_id];
                $where[]=  ['check_status','<>',1];
                $no_pay = $db_house_new_pay_order->getOrderByGroup($where, 'order_id', 'project_id');
                $no_pay_sum1 = $db_house_new_pay_order->getSum($where, 'modify_money');
                $no_pay_sum2 = $db_house_new_pay_order->getSum($where, 'late_payment_money');
                $no_pay_sum = $no_pay_sum2+$no_pay_sum1;
                $where[] = ['is_paid', '=', 2];
                $list[$key]['year'] = $value;
                $list[$key]['no_pay_count'] = count($no_pay);
                $no_pay_sum=$no_pay_sum*1;
                $no_pay_sum = formatNumber($no_pay_sum,2,1);
                $list[$key]['no_pay_sum'] = $no_pay_sum;
            }
        }
        if ($list) {
            $db_house_new_select_project_log = new HouseNewSelectProjectLog();
            $db_house_new_select_project_record = new HouseNewSelectProjectRecord();
            $log_info = $db_house_new_select_project_log->getOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id]);
            if (empty($log_info) || $log_info['action_name'] == 'layOutCycle') {
                $db_house_new_select_project_log->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'action_name' => 'firstIn', 'add_time' => time()]);
                $total_money = 0.00;
                foreach ($list as $k => $v) {
                    $total_money += $v['no_pay_sum'];
                    $list[$k]['selected_pay_count'] = $v['no_pay_count'];
                    $list[$k]['selected_pay_sum'] = $v['no_pay_sum'];
                    $list[$k]['static'] = true;
                    $no_pay_list = $this->getNoPayDetail($v['year'], $room_id, 1, 0, 0, $village_id, true, true, 0);
                    if ($no_pay_list['list']) {
                        foreach ($no_pay_list['list'] as $v1) {
                            $record_info = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v1['project_id'], 'year' => $v['year']]);
                            if($record_info){
                                $record_info = $record_info->toArray();
                            }
                            if (empty($record_info)) {
                                $db_house_new_select_project_record->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v1['project_id'], 'year' => $v['year'], 'add_time' => time()]);
                            }
                        }
                    }
                }
                $is_all_select = true;
            } elseif ($year_1 && !$static) {    //取消选中单个年份
                $total_money = 0.00;
                $db_house_new_select_project_log->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'action_name' => 'unSelected', 'add_time' => time()]);
                $db_house_new_select_project_record->del(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'year' => $year_1]);
                $is_all_select = true;
                if(empty($list)){
                    $is_all_select=false;
                }
                foreach ($list as $k => $v) {
                    $no_pay_count = 0;
                    $no_pay_sum = 0.00;
                    if ($v['year'] != $year_1) {
                        $time = $this->getStartAndEndUnixTimestamp($v['year']);
                        $record_list = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'year' => $v['year']])->toArray();
                        if ($record_list) {
                            $list[$k]['static'] = true;
                            foreach ($record_list as $v1) {
                                $project_ids[] = $v1['project_id'];
                                $no_pay_count += 1;
                            }
                            $sum = $db_house_new_pay_order->getSum([['add_time', 'between', array($time['start'], $time['end'])], ['is_discard', '=', 1], ['is_paid', '=', 2],['order_type', '<>', 'non_motor_vehicle'], ['room_id', '=', $room_id], ['project_id', 'in', $project_ids],['check_status','<>',1]], 'modify_money');
                            $total_money += $sum;
                            $no_pay_sum += $sum;
                        } else {
                            $list[$k]['static'] = false;
                            $is_all_select = false;
                        }
                    } else {
                        $list[$k]['static'] = false;
                        $is_all_select = false;
                    }
                    $no_pay_sum=$no_pay_sum*1;
                    $total_money=$total_money*1;
                    $no_pay_sum = formatNumber($no_pay_sum,2,1);
                    $total_money = formatNumber($total_money,2,1);
                    $list[$k]['selected_pay_count'] = $no_pay_count;
                    $list[$k]['selected_pay_sum'] = $no_pay_sum;
                }
            } elseif ($year_1 && $static) {           //选中单个年份
                $count = 0;
                $total_money = 0.00;
                $db_house_new_select_project_log->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'action_name' => 'Selected', 'add_time' => time()]);
                foreach ($list as $k2 => $v2) {
                    $no_pay_count = 0;
                    $no_pay_sum = 0.00;
                    if ($v2['year'] == $year_1) {
                        $no_pay_list = $this->getNoPayDetail($v2['year'], $room_id);
                        if ($no_pay_list['list']) {
                            foreach ($no_pay_list['list'] as $v1) {
                                $record_info = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v1['project_id'], 'year' => $v2['year']])->toArray();
                                if (empty($record_info)) {
                                    $db_house_new_select_project_record->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v1['project_id'], 'year' => $v2['year'], 'add_time' => time()]);
                                }
                            }
                        }
                    }
                    $time = $this->getStartAndEndUnixTimestamp($v2['year']);
                    $record_list = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'year' => $v2['year']])->toArray();
                    if ($record_list) {
                        $list[$k2]['static'] = true;
                        $count += 1;
                        foreach ($record_list as $v1) {
                            $project_ids[] = $v1['project_id'];
                            $no_pay_count += 1;
                        }
                        $sum = $db_house_new_pay_order->getSum([['add_time', 'between', array($time['start'], $time['end'])], ['is_discard', '=', 1], ['is_paid', '=', 2],['order_type', '<>', 'non_motor_vehicle'], ['room_id', '=', $room_id], ['project_id', 'in', $project_ids],['check_status','<>',1]], 'modify_money');
                        $late_payment_money = $db_house_new_pay_order->getSum([['add_time', 'between', array($time['start'], $time['end'])], ['is_discard', '=', 1], ['is_paid', '=', 2], ['order_type', '<>', 'non_motor_vehicle'], ['room_id', '=', $room_id], ['project_id', 'in', $project_ids],['check_status','<>',1]], 'late_payment_money');
                        $total_money += $sum+$late_payment_money;
                        $no_pay_sum += $sum+$late_payment_money;
                        $no_pay_sum=$no_pay_sum*1;
                        $total_money=$total_money*1;
                        $no_pay_sum = formatNumber($no_pay_sum,2,1);
                        $total_money = formatNumber($total_money,2,1);
                    } else {
                        $list[$k2]['static'] = false;
                    }
                    if (count($list) == $count)
                        $is_all_select = true;
                    else
                        $is_all_select = false;
                    $list[$k2]['selected_pay_count'] = $no_pay_count;
                    $list[$k2]['selected_pay_sum'] = $no_pay_sum;
                }
            } elseif ($is_all_select && $type) {             //全选
                $no_pay_count = 0;
                $no_pay_sum = 0.00;
                $db_house_new_select_project_log->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'action_name' => 'selectedAll', 'add_time' => time()]);
                $total_money = 0.00;
                foreach ($list as $k3 => $v3) {
                    $total_money += $v3['no_pay_sum'];
                    $list[$k3]['selected_pay_count'] = $v3['no_pay_count'];
                    $list[$k3]['selected_pay_sum'] = $v3['no_pay_sum'];
                    $list[$k3]['static'] = true;
                    $no_pay_list = $this->getNoPayDetail($v3['year'], $room_id);
                    if ($no_pay_list['list']) {
                        foreach ($no_pay_list['list'] as $v1) {
                            $record_info = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v1['project_id'], 'year' => $v3['year']])->toArray();
                            if (empty($record_info)) {
                                $db_house_new_select_project_record->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v1['project_id'], 'year' => $v3['year'], 'add_time' => time()]);
                            }
                        }
                    }
                }
                $is_all_select = true;
            } elseif (!$is_all_select && $type) {             //取消全选
                $db_house_new_select_project_log->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'action_name' => 'unSelectedAll', 'add_time' => time()]);
                $total_money = 0.00;
                foreach ($list as $k4 => $v4) {
                    //$total_money += $v4['no_pay_sum'];
                    $list[$k4]['selected_pay_count'] = 0;
                    $list[$k4]['selected_pay_sum'] = 0.00;
                    $list[$k4]['static'] = false;
                    $db_house_new_select_project_record->del(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'year' => $v4['year']]);
                }
                $is_all_select = false;
            } else {
                $count = 0;
                $db_house_new_select_project_log->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'action_name' => 'returnBack', 'add_time' => time()]);
                $total_money = 0.00;
                foreach ($list as $k5 => $v5) {
                    $no_pay_count = 0;
                    $no_pay_sum = 0.00;
                    $time = $this->getStartAndEndUnixTimestamp($v5['year']);
                    $record_list = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'year' => $v5['year']])->toArray();
                    if ($record_list) {
                        $list[$k5]['static'] = true;
                        $count += 1;
                        $project_ids = [];
                        foreach ($record_list as $v1) {
                            $project_ids[] = $v1['project_id'];
                            $no_pay_count += 1;
                        }
                        $sum1 = $db_house_new_pay_order->getSum([['add_time', 'between', array($time['start'], $time['end'])], ['is_discard', '=', 1], ['is_paid', '=', 2], ['order_type', '<>', 'non_motor_vehicle'], ['room_id', '=', $room_id], ['project_id', 'in', $project_ids],['check_status','<>',1]], 'modify_money');
                        $sum2 = $db_house_new_pay_order->getSum([['add_time', 'between', array($time['start'], $time['end'])], ['is_discard', '=', 1], ['is_paid', '=', 2], ['order_type', '<>', 'non_motor_vehicle'], ['room_id', '=', $room_id], ['project_id', 'in', $project_ids],['check_status','<>',1]], 'late_payment_money');
                        $sum = $sum1+$sum2;
                        $total_money += $sum;
                        $no_pay_sum += $sum;
                    } else {
                        $list[$k5]['static'] = false;
                    }
                    if (count($list) == $count)
                        $is_all_select = true;
                    else
                        $is_all_select = false;

                    $no_pay_sum=$no_pay_sum*1;
                    $total_money=$total_money*1;
                    $no_pay_sum = formatNumber($no_pay_sum,2,1);
                    $total_money = formatNumber($total_money,2,1);
                    $list[$k5]['selected_pay_count'] = $no_pay_count;
                    $list[$k5]['selected_pay_sum'] = $no_pay_sum;
                }
            }
            $selected_count = 0;
            foreach ($list as &$v) {
                $selected_count += $v['selected_pay_count'];
                $v['selected_pay_sum'] = $v['selected_pay_sum'];
            }
        } else {
            $is_all_select = false;
            $total_money = 0.00;
            $selected_count = 0;
        }
        $res['list'] = $list;
        $res['is_all_select'] = $is_all_select;
        $res['total_money'] = $total_money>0 ? $total_money:'0.00';
        $res['selected_count'] = $selected_count;
        return $res;
    }

    /**
     * 未缴账单明细
     * @author lijie
     * @date_time 2021/07/07
     * @param string $year
     * @param int $room_id
     * @param int $page
     * @param int $project_id
     * @param int $pigcms_id
     * @param int $village_id
     * @param bool $is_all_select
     * @param bool $static
     * @param int $type
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getNoPayDetail($year = '', $room_id = 0, $page = 1, $project_id = 0, $pigcms_id = 0, $village_id = 0, $is_all_select = true, $static = true, $type = 0)
    {
        if (empty($year) || !$room_id)
            return false;
        $time = $this->getStartAndEndUnixTimestamp($year);
        $where[] = ['o.add_time', 'between', array($time['start'], $time['end'])];
        $where[] = ['o.is_discard', '=', 1];
        $where[] = ['o.is_paid', '=', 2];
        $where[] = ['o.order_type','<>','non_motor_vehicle'];
        $where[] = ['o.room_id', '=', $room_id];
        $where[] = ['o.check_status','<>',1];
        if($village_id){
            $where[] = ['o.village_id', '=', $village_id];
        }
        $db_house_village = new HouseVillage();
        $village_info = $db_house_village->getOne($village_id,'property_id');
        $property_id = $village_info['property_id'];
        if($property_id){
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
        }else{
            $digit_info = [];
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_select_project_record = new HouseNewSelectProjectRecord();
        $data = $db_house_new_pay_order->getListByGroup($where, 'o.project_id,c.name', 0, 0, 'o.order_id DESC', 'o.project_id', $page);
        $list = [];
        $total_money = 0;
        $count = 0;
        if ($data) {
            foreach ($data as $k => $v) {
                $all_money = 0;
                $list[$k]['project_name'] = $v['name'];
                $list[$k]['project_id'] = $v['project_id'];
                if ($project_id && !$static) {
                    if ($v['project_id'] == $project_id) {
                        $db_house_new_select_project_record->del(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'year' => $year, 'project_id' => $project_id]);
                    }
                } elseif ($project_id && $static) {
                    if ($project_id == $v['project_id']) {
                        $record_info = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $project_id, 'year' => $year])->toArray();
                        if (empty($record_info)) {
                            $db_house_new_select_project_record->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $project_id, 'year' => $year, 'add_time' => time()]);
                        }
                    }
                } elseif ($is_all_select && $type) {
                    $record_info = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v['project_id'], 'year' => $year])->toArray();
                    if (empty($record_info)) {
                        $db_house_new_select_project_record->addOne(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v['project_id'], 'year' => $year, 'add_time' => time()]);
                    }
                } elseif (!$is_all_select && $type) {
                    $db_house_new_select_project_record->del(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'year' => $year]);
                }
                $record_info = $db_house_new_select_project_record->getList(['village_id' => $village_id, 'pigcms_id' => $pigcms_id, 'project_id' => $v['project_id'], 'year' => $year])->toArray();
                if ($record_info) {
                    $list[$k]['static'] = true;
                    $count += 1;
                } else {
                    $list[$k]['static'] = false;
                }
                $where = [];
                $where[] = ['o.add_time', 'between', array($time['start'], $time['end'])];
                $where[] = ['o.is_discard', '=', 1];
                $where[] = ['o.is_paid', '=', 2];
                $where[] = ['o.room_id', '=', $room_id];
                $where[] = ['o.project_id', '=', $v['project_id']];
                $where[] = ['o.check_status','<>',1];
                $list[$k]['list'] = $db_house_new_pay_order->getList($where, 'o.add_time,o.modify_money as money,o.order_id,o.room_id,o.position_id,o.total_money,o.late_payment_money,o.modify_money,o.late_payment_day,o.project_id,o.order_name,o.uid,o.order_type')->toArray();
                foreach ($list[$k]['list'] as &$v2) {
                        $all_money += $v2['modify_money']+$v2['late_payment_money'];
                        $v2['money']=$v2['modify_money']+$v2['late_payment_money'];
                        $v2['money'] =$v2['money']*1;
                        $v2['money'] = formatNumber($v2['money'],2,1);
                        $v2['money'] =$v2['money']*1;
                        if ($record_info) {
                            $total_money += $v2['modify_money']+$v2['late_payment_money'];
                        }
                }
                $all_money = $all_money *1;
                $all_money = formatNumber($all_money,2,1);
                $total_money = $total_money *1;
                $total_money = formatNumber($total_money,2,1);

                $list[$k]['all_money'] = $all_money*1;
            }
            foreach ($list as $k => $value) {
                foreach ($value['list'] as $k1 => $v1) {
                    $list[$k]['list'][$k1]['add_time_txt'] = date('Y-m', $v1['add_time']);
                }
            }
        }
        if ($count == count($data) && !empty($data)) {
            $is_all_select = true;
        } else {
            $is_all_select = false;
        }
        $res['list'] = $list;
        $res['is_all_select'] = $is_all_select;
        $res['total_money'] = $total_money*1;
        $res['selected_count'] = $count;
        return $res;
    }

    /**
     * @param array $data
     * @return int|string
     */
    public function addLog($data = [])
    {
        $db_house_new_select_project_log = new HouseNewSelectProjectLog();
        $res = $db_house_new_select_project_log->addOne($data);
        return $res;
    }

    /**
     * 获取指定年月日的开始时间戳和结束时间戳(本地时间戳非GMT时间戳)
     * [1] 指定年：获取指定年份第一天第一秒的时间戳和下一年第一天第一秒的时间戳
     * [2] 指定年月：获取指定年月第一天第一秒的时间戳和下一月第一天第一秒时间戳
     * [3] 指定年月日：获取指定年月日第一天第一秒的时间戳
     * @param integer $year [年份]
     * @param integer $month [月份]
     * @param integer $day [日期]
     * @return array('start' => '', 'end' => '')
     */
    public function getStartAndEndUnixTimestamp($year = 0, $month = 0, $day = 0)
    {
        if (empty($year)) {
            $year = date("Y");
        }

        $start_year = $year;
        $start_year_formated = str_pad(intval($start_year), 4, "0", STR_PAD_RIGHT);
        $end_year = $start_year + 1;
        $end_year_formated = str_pad(intval($end_year), 4, "0", STR_PAD_RIGHT);

        if (empty($month)) {
            //只设置了年份
            $start_month_formated = '01';
            $end_month_formated = '01';
            $start_day_formated = '01';
            $end_day_formated = '01';
        } else {

            $month > 12 || $month < 1 ? $month = 1 : $month = $month;
            $start_month = $month;
            $start_month_formated = sprintf("%02d", intval($start_month));

            if (empty($day)) {
                //只设置了年份和月份
                $end_month = $start_month + 1;

                if ($end_month > 12) {
                    $end_month = 1;
                } else {
                    $end_year_formated = $start_year_formated;
                }
                $end_month_formated = sprintf("%02d", intval($end_month));
                $start_day_formated = '01';
                $end_day_formated = '01';
            } else {
                //设置了年份月份和日期
                $startTimestamp = strtotime($start_year_formated . '-' . $start_month_formated . '-' . sprintf("%02d", intval($day)) . " 00:00:00");
                $endTimestamp = $startTimestamp + 24 * 3600 - 1;
                return array('start' => $startTimestamp, 'end' => $endTimestamp);
            }
        }

        $startTimestamp = strtotime($start_year_formated . '-' . $start_month_formated . '-' . $start_day_formated . " 00:00:00");
        $endTimestamp = strtotime($end_year_formated . '-' . $end_month_formated . '-' . $end_day_formated . " 00:00:00") - 1;
        return array('start' => $startTimestamp, 'end' => $endTimestamp);
    }

    /**
     * 欠费发送模板通知
     * @author:zhubaodi
     * @date_time: 2021/7/5 14:37
     */
    public function getArrearsOrderList()
    {
        $db_house_new_charge = new HouseNewCharge();
        $db_house_new_charge_time = new HouseNewChargeTime();
        $db_house_village_user_bind = new HouseVillageUserBind();
        $service_house_village = new HouseVillageService();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();

        $href = '';
        $where['o.is_paid'] = 2;
        $where['o.is_discard'] = 1;
        $data = $this->getOrderListByGroup($where, 'sum(o.total_money) as total_money,o.name,o.village_id,o.phone,v.room,p.position_num,o.room_id,o.position_id,o.uid,o.order_type,o.rule_id', 0, 0, 'o.order_id DESC', 'o.room_id,o.position_id');
        $list=array();
        if(isset($data['list']) && !empty($data['list'])){
            $list=$data['list'];
        }
        foreach ($list as $v) {

            $charge_info = $db_house_new_charge->get_one(['village_id' => $v['village_id']]);
            if (empty($charge_info)) {
                continue;
            }
            $day = intval(substr(date('Y-m-d'), 8));
            if ($charge_info['call_date'] != $day) {
                continue;
            }
            $village_info = $service_house_village->getHouseVillageInfo(['village_id' => $v['village_id']], 'property_id,property_name');
            if (empty($village_info)) {
                continue;
            }
            $charge_time = $db_house_new_charge_time->get_one(['property_id' => $village_info['property_id']]);
            if (empty($charge_time) || $charge_time['take_effect_time'] > time()) {
                continue;
            }

            if ($v['room_id']) {
                $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $v['room_id']], 'single_id,floor_id,layer_id,village_id');
                if ($vacancy_info) {
                    $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $v['room_id'], $vacancy_info['village_id']);
                } else {
                    $address = '';
                }
                if ($charge_info['call_type'] == 1) {
                    $user_list = $db_house_village_user_bind->getList(['vacancy_id' => $v['room_id'], 'status' => 1, 'type' => [0, 3]]);
                } elseif ($charge_info['call_type'] == 2) {
                    $user_list = $db_house_village_user_bind->getList(['vacancy_id' => $v['room_id'], 'status' => 1, 'type' => [0, 1, 3]]);
                } elseif ($charge_info['call_type'] == 3) {
                    $user_list = $db_house_village_user_bind->getList(['vacancy_id' => $v['room_id'], 'status' => 1, 'type' => [0, 1, 2, 3]]);
                }
                if (empty($user_list)) {
                    continue;
                } else {
                    $user_list = $user_list->toArray();
                    if (empty($user_list)) {
                        continue;
                    }
                    foreach ($user_list as $vv) {
                        $this->sendCashierMessage($vv['uid'], $href, $address, $village_info['property_name'], $v['total_money'],0,$v['order_type'],$v['rule_id'],$vv['name']);
                    }
                }
            } else {
                continue;
            }


        }
        return true;
    }

    /**
     * 生成欠费账单给业主发送模板通知
     * @author:zhubaodi
     * @date_time: 2021/7/5 14:37
     */
    public function getArrearsList()
    {
        $db_house_new_charge_time = new HouseNewChargeTime();
        $service_house_village = new HouseVillageService();
        $service_house_parking = new HouseVillageParkingService();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();

        $href = '';
        $where['o.is_paid'] = 2;
        $where['o.is_discard'] = 1;
        $data = $this->getOrderListByGroup($where, 'sum(o.total_money) as total_money,o.name,o.village_id,o.phone,v.room,p.position_num,o.room_id,o.position_id,o.uid,o.order_type,o.rule_id', 0, 0, 'o.order_id DESC', 'o.room_id,o.position_id');
        $list=array();
        if(isset($data['list']) && !empty($data['list'])){
            $list=$data['list'];
        }
        foreach ($list as $v) {

            $start = strtotime(date('Y-m-d 00:00:00', $v['add_time']));
            $end = strtotime(date('Y-m-d 23:59:59', $v['add_time']));
            if ($v['add_time'] < $start || $end < $v['add_time']) {
                continue;
            }
            $village_info = $service_house_village->getHouseVillageInfo(['village_id' => $v['village_id']], 'property_id,property_name');
            if (empty($village_info)) {
                continue;
            }
            $charge_time = $db_house_new_charge_time->get_one(['property_id' => $village_info['property_id']]);
            if (empty($charge_time) || $charge_time['take_effect_time'] > time()) {
                continue;
            }

            if ($v['room_id']) {
                $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $v['room_id']], 'single_id,floor_id,layer_id,village_id');
                if ($vacancy_info) {
                    $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $v['room_id'], $vacancy_info['village']);
                } else {
                    $address = '';
                }
            } else {
                if (!empty($v['position_id'])){
                    $garage_info = $service_house_parking->getParkingPositionDetail(['pp.position_id' => $v['position_id']], 'pp.position_num,pg.garage_num');
                    if ($garage_info) {
                        $address = $garage_info['detail']['garage_num'] . '--' . $garage_info['detail']['position_num'];
                    } else {
                        $address = '';
                    }
                }

            }
            $name = $v['name'] ?: (new HouseVillageUserBind())->where(['uid'=>$v['uid'],'village_id'=>$v['village_id']])->value('name');
            $this->sendCashierMessage($v['uid'], $href, $address, $village_info['property_name'], $v['total_money'],0,$v['order_type'],$v['rule_id'],$name);
        }
        return true;
    }

    /**
     * 获取消费标准绑定列表
     * @param array $where
     * @param bool $field
     * @param int $page
     * @return mixed
     * @author lijie
     * @date_time 2021/07/06
     */
    public function getBindList($where = [], $field = true, $page = 0)
    {
        $db_house_new_charge_standard_bind = new HouseNewChargeStandardBind();
        $data = $db_house_new_charge_standard_bind->getList($where, $field, $page);
        return $data;
    }

    /**
     * 业主车辆列表
     * @param $bind_id
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return mixed
     * @author lijie
     * @date_time 2021/07/08
     */
    public function getUserCarList($bind_id, $field = true, $page = 0, $limit = 15, $order = 'a.id DESC')
    {
        $db_house_village_bind_car = new HouseVillageBindCar();
        $data = $db_house_village_bind_car->user_bind_car_list($bind_id, [], $field, $page, $limit);
        if ($data) {
            foreach ($data as $k => $v) {
                if($v['end_time']>1)
                    $data[$k]['end_time_txt'] = date('Y-m-d', $v['end_time']);
                else
                    $data[$k]['end_time_txt'] = date('Y-m-d', time());
            }
        }
        return $data;
    }


    /**
     * 查询新版收费 统计两个收入最多的收费项目
     * @param $type 1:物业  2：小区
     * @param $property_id
     * @param $village_id
     * @return array
     * @author: liukezhu
     * @date : 2021/7/17
     */
    public function getChargeProjectType($type, $property_id, $village_id = 0, $num = 2)
    {
        $db_charge_time = new HouseNewChargeTime();
        $db_house_new_charge_service = new HouseNewChargeService();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $new_charge_time = $db_charge_time->get_one(['property_id' => $property_id]);
        $nowtime = time();
        //旧版收费标准
        $new_charge = 0;
        $data_list = $data_type = [];
        $where=[];
        $where[] = ['o.property_id', '=', $property_id];
        $where[] = ['o.is_paid', '=', 1];
        $where[] = ['o.is_discard','=',1];
        if ($type == 2) {
            $where[] = ['o.village_id', '=', $village_id];
        }
        $where['string']='o.refund_money < o.pay_money';
        if (!empty($new_charge_time) && $new_charge_time['take_effect_time'] < $nowtime && $new_charge_time['take_effect_time'] > 1) {
            //新版收费标准
            $new_charge = 1;

            if($type == 1){
                //物业  物业的用收费科目来统计数据
                $data_list = $db_house_new_pay_order->getMostChargeProject($where, 'o.project_id,sum( o.pay_money - o.refund_money ) num,n.charge_type,o.order_name', 'num desc,n.id desc', 'n.charge_type', $num);
            }else{
                //小区 小区的用收费项目来统计数据
                $data_list = $db_house_new_pay_order->getMostChargeProject($where, 'o.project_id,sum( o.pay_money - o.refund_money ) num,n.charge_type,p.name as project_name,o.order_name', 'num desc,n.id desc', 'o.project_id', $num);
            }
            if ($data_list) {
                $data_list = $data_list->toarray();
                foreach ($data_list as $k => &$v) {
                    $value =$v['order_name'];
                    foreach ($db_house_new_charge_service->charge_type_arr as $v2) {
                        if ($v['charge_type'] && $v2['key'] == $v['charge_type']) {
                            $value = $v2['value'];
                            continue;
                        }
                    }
                    if(empty($v['project_name'])){
                        $v['project_name']=$value;
                    }
                    $v['charge_name'] = $value;
                    $v['charge_param'] = $v['charge_type'];
                    $data_type[] = array('name' => ($type == 1 ? $value : $v['project_name']), 'color' => '');
                    unset($v['num']);
                }
                unset($v);
                $data_list[] = array(
                    'project_id' => array_column($data_list, 'project_id'),
                    'charge_type' => array_column($data_list, 'charge_type'),
                    'charge_name' => '其他收入',
                    'charge_param' => 'other',
                    'charge_param_type' => 1
                );
            }

        }
        $data_type[] = array('name' => '其他收入', 'color' => '');
        return ['status' => $new_charge, 'charge_data' => $data_list, 'charge_type' => $data_type];
    }

    /**查询订单金额
     * @param $where
     * @return mixed
     * @author: liukezhu
     * @date : 2021/7/17
     */
    public function getChargeProjectMoney($where)
    {
        $dbHouseNewPayOrder = new HouseNewPayOrder();
        $where[]=['is_discard','=',1];
        $where['string']='refund_money < pay_money';
        $field1='sum(pay_money) as pay_money,sum(refund_money) as refund_money';
        $order_info1=$dbHouseNewPayOrder->get_one($where,$field1);
        return $order_info1 ?  get_number_format($order_info1['pay_money'] - $order_info1['refund_money']) : 0;
//        return $dbHouseNewPayOrder->sumMoney($where);
    }

    /**
     * 自动生成账单
     * @author lijie
     * @date_time 2021/07/06
     * @return bool
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function automaticCall()
    {
        $serviceHouseNewPorperty = new HouseNewPorpertyService();
        $village_id_arr = $serviceHouseNewPorperty->getTakeJudgeVillages();
        // 获取已经生效的小区ID集合
        $condition = [];
        if (!empty($village_id_arr)) {
            $condition[] = ['b.village_id','in',$village_id_arr];
        } else {
            return [];
        }
        $condition[] = ['b.is_del','=',1];
        $condition[] = ['r.bill_type','=',2];
        $condition[] = ['b.order_add_time','<=',time()];
        $data = $this->getBindList($condition,'p.type,b.*,r.bill_type,p.name,r.unit_price,r.rate,r.not_house_rate,r.unit_gage,r.fees_type,n.charge_type',0);
        if($data){
            $data = $data->toArray();
        }else{
            $data = [];
        }
        fdump_api([__LINE__,'data'=>$data],'000automaticCall',true);
        return $data;
    }

    /**
     * 单个房间自动生成账单
     * @author lijie
     * @date_time 2022/01/20
     * @param $v
     * @return bool
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function call($v)
    {
        try {

            fdump_api(['start'.__LINE__,'v'=>$v],'000call',true);
            $service_house_new_charge_rule = new HouseNewChargeRuleService();
            $service_house_village_user_bind = new HouseVillageUserBindService();
            $service_house_village = new HouseVillageService();
            $db_house_new_pay_order = new HouseNewPayOrder();
            if($v['vacancy_id']){
                $type = 1;
                $id = $v['vacancy_id'];
            }else{
                $type = 2;
                $id = $v['position_id'];
            }
            if($type == 2 && $v['fees_type'] == 2 && empty($v['unit_gage']) && $v['unit_gage_type']!=3) {
                fdump_api(['错误1：'.__LINE__],'000call',true);
                return false;
            }
            if($v['charge_type'] == 'water' || $v['charge_type'] == 'electric' || $v['charge_type'] == 'gas') {
                fdump_api(['错误2：'.__LINE__],'000call',true);
                return false;
            }
            $is_allow = $service_house_new_charge_rule->checkChargeValid($v['project_id'], $v['rule_id'],$id,$type);
            if (!$is_allow || $v['bill_type'] == 1 || ($v['order_add_time'] > (strtotime((date('Y-m-d',time()).' 23:59:59'))))){
                fdump_api(['错误3：'.__LINE__],'000call',true);
                return false;
            }
            $rule_info = $service_house_new_charge_rule->getRuleInfo($v['rule_id']);

            if($v['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES) {
                $ruleHasParkNumInfo = $service_house_new_charge_rule->getRuleHasParkNumInfo($id, $v['rule_id'], $type, $rule_info);
                if (empty($ruleHasParkNumInfo) || !isset($ruleHasParkNumInfo['parkingNum']) || intval($ruleHasParkNumInfo['parkingNum']) <= 0) {
                    fdump_api(['错误4：'.__LINE__],'000call',true);
                    return false;
                }
                $parkingNum  = $ruleHasParkNumInfo['parkingNum'];
            } else {
                $parkingNum = 1;
            }
            $configCustomizationService=new ConfigCustomizationService();
            $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
            $where = [];
            if($v['order_add_type'] == 1){
                $beginTime = mktime(0,0,0,date('m'),date('d'),date('Y'));
                $where[] = ['service_end_time|add_time','>=',$beginTime];
            }
            elseif($v['order_add_type'] == 2){
                $beginTime = mktime(0,0,0,date('m'),1,date('Y'));
                if($rule_info['bill_arrears_set'] == 2){
                    if(date("t") != date("j")) {
                        fdump_api(['错误5：'.__LINE__],'000call',true);
                        return false;
                    }
                }
                if($is_grapefruit_prepaid==1){
                    $where[] = ['service_end_time','>=',$beginTime];
                }else{
                    $where[] = ['service_end_time|add_time','>=',$beginTime];
                }
            } else{
                if($rule_info['bill_arrears_set'] == 2){
                    if(date('m-d',time()) != '12-31') {
                        fdump_api(['错误6：'.__LINE__],'000call',true);
                        return false;
                    }
                }
                if($is_grapefruit_prepaid==1){
                    $perdaytime=date('Y').'-12-31 00:00:10';
                    $beginTime = strtotime($perdaytime)-1;
                    $where[] = ['service_end_time','>=',$beginTime];
                }else{
                    $perdaytime=date('Y-m-d').' 00:00:10';
                    $beginTime = strtotime($perdaytime)-1;
                    $where[] = ['service_end_time|add_time','>=',$beginTime];
                }
            }
            if($v['vacancy_id']){
                $where[] = ['room_id','=',$v['vacancy_id']];
            }
            if($v['position_id']){
                $where[] = ['position_id','=',$v['position_id']];
            }
            $where[] = ['project_id','=',$v['project_id']];
            $where[] = ['is_discard','=',1];
            $order_info = $db_house_new_pay_order->get_one($where, true);
            if($order_info && !is_array($order_info)){
                $order_info = $order_info->toArray();
            }
            if(!empty($order_info)){
                fdump_api(['错误7:have_order'.__LINE__, 'where'=>$where,'order_info'=>$order_info],'000call',true);
                return false;
            }
            if($v['charge_type']=='property' && $v['vacancy_id']>0){
                $whereTmp = [];
                $whereTmp[] = ['room_id','=',$v['vacancy_id']];
                $whereTmp[] = ['village_id','=',$v['village_id']];
                $whereTmp[] = ['order_type','=','property'];
                $whereTmp[] = ['is_discard','=',1];
                $property_fee_info = $db_house_new_pay_order->get_one($whereTmp, 'order_id,village_id');
                if($property_fee_info && !is_array($property_fee_info)){
                    $property_fee_info = $property_fee_info->toArray();
                }
                fdump_api(['$property_fee_info'.__LINE__, 'property_fee_info'=>$property_fee_info],'000call',true);
                if(empty($property_fee_info)){
                    //没有生成过物业费科目订单
                    $whereproperty=[
                        ['room_id','=',$v['vacancy_id']],
                        ['order_id','=',0],
                        ['project_id','=',0],
                        ['position_id','=',0],
                        ['order_type','=','property'],
                    ];
                    $tmptime=time()+3600;
                    $property_order_log = $this->getOrderLog($whereproperty,'*','id DESC');
                    if($property_order_log && isset($property_order_log['service_end_time']) && $property_order_log['service_end_time']>$tmptime){
                        $fail_reason=$property_order_log['desc'].'到'.date('Y-m-d H时',$property_order_log['service_end_time']).'，物业时间未到期无法生成账单';
                        fdump_api(['property_time'.__LINE__, 'order_log_id'=>$property_order_log['id'],'fail_reason'=>$fail_reason],'000call',true);
                        return false;
                    }
                }
            }
            $cycle = isset($v['cycle'])?$v['cycle']:1;
            $x_cycle=$cycle;
            if($rule_info['cyclicity_set'] > 0){
                if($type == 1){
                    $order_list = $db_house_new_pay_order->getList(['o.is_discard'=>1,'o.room_id'=>$v['vacancy_id'],'o.project_id'=>$v['project_id'],'o.position_id'=>0,'o.rule_id'=>$v['rule_id']],'o.service_month_num,o.service_give_month_num');
                } else{
                    $order_list = $db_house_new_pay_order->getList(['o.is_discard'=>1,'o.position_id'=>$v['position_id'],'o.project_id'=>$v['project_id'],'o.rule_id'=>$v['rule_id']],'o.service_month_num,o.service_give_month_num');
                }
                $order_count = 0;
                if($order_list){
                    $order_list = $order_list->toArray();
                    if(count($order_list) >= $rule_info['cyclicity_set'])
                        return false;

                    foreach ($order_list as $item){
                        if($item['service_month_num'] == 0)
                            $order_count += 1;
                        else
                            $order_count = $order_count+$item['service_month_num'];
                    }
                    if($order_count >= $rule_info['cyclicity_set'])
                        return false;
                }
                if($cycle>0){
                    $order_count+=$cycle;
                }
                if($order_count>$rule_info['cyclicity_set']){
                    return false;
                }
            }
            $orderData = [];
            if($v['vacancy_id']){
                $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$v['vacancy_id']],['type','in',[0,3]],['status','=',1]],'pigcms_id,name,phone,uid');
                $orderData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
                $orderData['name'] = isset($user_info['name'])?$user_info['name']:'';
                $orderData['phone'] = isset($user_info['phone'])?$user_info['phone']:'';
                $orderData['room_id'] = isset($v['vacancy_id'])?$v['vacancy_id']:0;
            }
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            if($v['position_id']){
                $orderData['position_id'] = $v['position_id'];
                $service_house_village_parking = new HouseVillageParkingService();
//            
//            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$v['position_id']]);
//
//            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,vacancy_id,uid');
//            
                $user_info =$this->getRoomUserBindByPosition($v['position_id'],$v['village_id']);

                if($user_info){
                    $orderData['pigcms_id'] = $user_info['pigcms_id'] ? $user_info['pigcms_id']:0;
                    $orderData['uid'] = $user_info['uid']?$user_info['uid']:0;
                    $orderData['name'] = $user_info['name'] ? $user_info['name']:'';
                    $orderData['phone'] = $user_info['phone'] ? $user_info['phone']:'';
                    $orderData['room_id'] = $user_info['vacancy_id' ]? $user_info['vacancy_id']:0;
                }
            }
            $orderData['village_id'] = $v['village_id'];
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$v['village_id']],'property_id');
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);
            $rule_digit=-1;
            if(isset($rule_info['rule_digit']) && $rule_info['rule_digit']>-1 && $rule_info['rule_digit']<5){
                $rule_digit=$rule_info['rule_digit'];
                if(!empty($digit_info)){
                    $digit_info['meter_digit']=$rule_digit;
                    $digit_info['other_digit']=$rule_digit;
                }else{
                    $digit_info=array('type'=>1);
                    $digit_info['meter_digit']=$rule_digit;
                    $digit_info['other_digit']=$rule_digit;
                }
            }
            $orderData['property_id'] = isset($village_info['property_id'])?$village_info['property_id']:0;
            $orderData['order_name'] = $v['name'];
            $orderData['order_type'] = $v['charge_type'];
            $orderData['project_id'] = $v['project_id'];
            $orderData['rule_id'] = $v['rule_id'];
            $orderData['is_auto'] = 1;
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            if($v['vacancy_id']){
                /*
                $condition1 = [];
                $condition1[] = ['vacancy_id','=',$v['vacancy_id']];
                $condition1[] = ['status','=',1];
                $condition1[] = ['type','in',[0,3,1,2]];
                $bind_list = $service_house_village_user_bind->getList($condition1,true);
                */
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $whereArrTmp=array();
                $whereArrTmp[]=array('pigcms_id','=',$v['vacancy_id']);
                $whereArrTmp[]=array('user_status','=',2);  // 2未入住
                $whereArrTmp[]=array('status','in',[1,2,3]);
                $whereArrTmp[]=array('is_del','=',0);
                $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
                $not_house_rate = 100;
                if($room_vacancy && !$room_vacancy->isEmpty()){
                    $room_vacancy = $room_vacancy->toArray();
                    if(!empty($room_vacancy)){
                        $not_house_rate = $v['not_house_rate'];
                    }
                }
            }else{
                $service_house_village_parking = new HouseVillageParkingService();
                $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$v['position_id']]);
                if($carInfo){
                    $carInfo = $carInfo->toArray();
                }
                if(empty($carInfo)){
                    $not_house_rate = $v['not_house_rate'];
                } else{
                    $not_house_rate = 100;
                }

            }
            if($not_house_rate<=0 || $not_house_rate>100){
                $not_house_rate=100;
            }
            if($v['fees_type'] == 1){
                $orderData['total_money'] = $v['unit_price'] * $v['rate'] * ($not_house_rate/100)*$cycle;
            }else{
                if(empty($v['custom_value'])){
                    $custom_value = 1;
                } else{
                    $custom_value = $v['custom_value'];
                    $custom_number=$custom_value;
                }
                if(empty($custom_value)){
                    $custom_value=1;
                }
                if($v['unit_gage_type'] == 3 && $v['position_id']){
                    $positionSize = (new HouseVillageParkingPosition())->where(['position_id' =>$v['position_id']])->value('position_area');
                    $custom_value = $positionSize?:$custom_value;
                }
                $orderData['total_money'] = $v['unit_price'] * $v['rate'] * ($not_house_rate/100) * $custom_value*$cycle;
            }
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            if($v['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES && $parkingNum > 1) {
                $orderData['total_money'] = $orderData['total_money'] * intval($parkingNum);
                $orderData['parking_num'] = intval($parkingNum);
                $orderData['parking_lot'] = isset($ruleHasParkNumInfo) && isset($ruleHasParkNumInfo['parking_lot']) ? $ruleHasParkNumInfo['parking_lot'] : '';
            }
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            if (!empty($digit_info)) {
                if ($orderData['order_type'] == 'water' || $orderData['order_type'] == 'electric' || $orderData['order_type'] == 'gas') {
                    $orderData['total_money'] = formatNumber($orderData['total_money'], $digit_info['meter_digit'], $digit_info['type']);
                } else {
                    $orderData['total_money'] = formatNumber($orderData['total_money'], $digit_info['other_digit'], $digit_info['type']);

                }
            }
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            $orderData['total_money']=formatNumber($orderData['total_money'], 2, 1);
            $orderData['modify_money'] = $orderData['total_money'];
            $orderData['is_paid'] = 2;
            $orderData['is_prepare'] = 2;
            //$orderData['service_month_num'] = 1;
            $orderData['unit_price'] = $v['unit_price'];
            $orderData['add_time'] = time();
            $con = [];
            if($v['vacancy_id']){
                $con[] = ['room_id','=',$v['vacancy_id']];
                $con[] = ['position_id','=',0];
            }else{
                $con[] = ['position_id','=',$v['position_id']];
            }
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            $con[] = ['project_id','=',$v['project_id']];
            $projectInfo = $this->getProjectInfo(['id'=>$v['project_id']],'subject_id');
            $numberInfo = $this->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
            $con[] = ['order_type','=',$numberInfo['charge_type']];
            $order_info = $this->getOrderLog($con, 'service_end_time','id DESC');
            if($v['type'] == 2){
                $orderData['service_month_num'] = $cycle;

                //查询未缴账单
                $subject_id_arr = $this->getNumberArr(['charge_type'=>$numberInfo['charge_type'],'status'=>1],'id');
                if (!empty($subject_id_arr)){
                    $getProjectArr=$this->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
                }
                if($type == 1){
                    $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$v['vacancy_id'],'order_type'=>$numberInfo['charge_type']];
                    if (isset($getProjectArr)&&!empty($getProjectArr)){
                        $pay_where['project_id']=$getProjectArr;
                    }
                    $pay_order_info = $db_house_new_pay_order->get_one($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
                } else{
                    $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$v['position_id'],'order_type'=>$numberInfo['charge_type']];
                    if (isset($getProjectArr)&&!empty($getProjectArr)){
                        $pay_where['project_id']=$getProjectArr;
                    }
                    $pay_order_info = $db_house_new_pay_order->get_one($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
                }

                //新版生成账单逻辑,按照计费时间顺序来生成账单
                if (cfg('new_pay_order')==1&&!empty($pay_order_info)&& $pay_order_info['service_end_time']>100){
                    if ($pay_order_info['project_id']!=$v['project_id']){
                        fdump_api(['新版生成账单逻辑,按照计费时间顺序来生成账单'.__LINE__, 'orderData'=>$orderData],'000call',true);
                        return false;
                    }
                    $orderData['service_start_time'] = $pay_order_info['service_end_time']+1;
                    $orderData['service_start_time'] = strtotime(date('Y-m-d',$orderData['service_start_time']));
                    if($v['order_add_type'] == 1){
                        $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                    } elseif($v['order_add_type'] == 2){
                        //todo 判断是不是按照自然月来生成订单
                        if(cfg('open_natural_month') == 1){
                            $start_d=date('d',$orderData['service_start_time']);
                            $tmp_service_end_time=strtotime("+$cycle month",$orderData['service_start_time']);
                            $end_d=date('d',$tmp_service_end_time);
                            if($start_d!=$end_d){
                                $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                                $end_date_time=strtotime($end_date);
                                $tmp_service_end_time=$end_date_time;
                            }
                            $orderData['service_end_time'] =$tmp_service_end_time-1;
                        }else{
                            $cycle = $cycle*30;
                            $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                        }
                    } else{
                        $orderData['service_end_time'] = strtotime("+$cycle year",$orderData['service_start_time'])-1;
                    }
                }else{
                    if($numberInfo['charge_type'] == 'property'){
                        if($type != 1){
                            $where22=[
                                ['position_id','=',$v['position_id']],
                                ['order_type','=',$numberInfo['charge_type']],
                            ];
                        }else{
                            $where22=[
                                ['room_id','=',$v['vacancy_id']],
                                ['order_type','=',$numberInfo['charge_type']],
                                ['position_id','=',0]
                            ];
                        }
                        $new_order_log = $this->getOrderLog($where22,'*','id DESC');
                        if(!empty($new_order_log)){
                            $order_info=$new_order_log;
                        }
                    }
                    if($order_info && $order_info['service_end_time']>100){
                        $orderData['service_start_time'] = $order_info['service_end_time']+1;
                        $orderData['service_start_time'] = strtotime(date('Y-m-d',$orderData['service_start_time']));
                    }elseif($v['order_add_time']){
                        $orderData['service_start_time'] = strtotime(date('Y-m-d',$v['order_add_time']));
                    }else{
                        $orderData['service_start_time'] = strtotime(date('Y-m-d',$v['charge_valid_time']));
                    }
                    if($v['order_add_type'] == 1){
                        $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                    } elseif($v['order_add_type'] == 2){
                        //todo 判断是不是按照自然月来生成订单
                        if(cfg('open_natural_month') == 1){
                            $start_d=date('d',$orderData['service_start_time']);
                            $tmp_service_end_time=strtotime("+$cycle month",$orderData['service_start_time']);
                            $end_d=date('d',$tmp_service_end_time);
                            if($start_d!=$end_d){
                                $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                                $end_date_time=strtotime($end_date);
                                $tmp_service_end_time=$end_date_time;
                            }
                            $orderData['service_end_time'] = $tmp_service_end_time-1;
                        }else{
                            $cycle = $cycle*30;
                            $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                        }
                    } else{
                        $orderData['service_end_time'] = strtotime("+$cycle year",$orderData['service_start_time'])-1;
                    }
                }

            }else{
                $orderData['service_start_time'] = time();
                $orderData['service_end_time'] = time();
            }
            fdump_api(['$orderData'.__LINE__, 'orderData'=>$orderData],'000call',true);
            $contract_info = $service_house_new_charge_rule->getHouseVillageInfo(['village_id'=>$v['village_id']],'contract_time_start,contract_time_end');
            if(isset($contract_info['contract_time_start']) && $contract_info['contract_time_start'] > 1){
                if($orderData['service_end_time'] < $contract_info['contract_time_start'] || $orderData['service_end_time'] > $contract_info['contract_time_end']){
                    fdump_api(['错误111：'.__LINE__, 'orderData'=>$orderData, 'contract_info'=>$contract_info],'000call',true);
                    return false;
                }
                if($orderData['service_start_time'] < $contract_info['contract_time_start'] || $orderData['service_start_time'] > $contract_info['contract_time_end']){
                    fdump_api(['错误222：'.__LINE__, 'orderData'=>$orderData, 'contract_info'=>$contract_info],'000call',true);
                    return false;
                }
            }
            if($not_house_rate>0 && $not_house_rate<100){
                $orderData['not_house_rate'] = $not_house_rate;
            }
            if(isset($custom_number)){
                $orderData['number'] = $custom_number;
            }

            $unify_flage_id='120'.date('YmdHis').rand(100000,999999);
            $tmp_cycle=0;
            if(isset($v['per_one_order']) && $v['per_one_order']>0 && $v['order_add_type']==2 && $x_cycle>1){
                //月按月拆
                $tmp_cycle=$x_cycle;
            }else if(isset($v['per_one_order']) && $v['per_one_order']>0 && $v['order_add_type']==3){
                //年按月拆
                $tmp_cycle=$x_cycle*12;
            }
            fdump_api(['$tmp_cycle：'.__LINE__, '$tmp_cycle'=>$tmp_cycle],'000call',true);
            if($tmp_cycle>1){
                fdump_api(['$orderData'=>$orderData,'tmp_cycle'=>$tmp_cycle],'000call',1);
                $orderData['unify_flage_id']=$unify_flage_id;
                $service_start_time=$orderData['service_start_time'];
                $service_end_time=$orderData['service_end_time'];
                $total_money=$orderData['total_money'];
                $modify_money=$orderData['modify_money'];
                $service_month_num=$orderData['service_month_num'];
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
                    $orderData['service_start_time']=$tmp_service_start_time;
                    $orderData['service_end_time']=$tmp_service_end_time;
                    $month_end_time_arr[$ii]=$tmp_service_end_time;
                    $orderData['service_month_num']=1;
                    $orderData['total_money']=$per_total_money;
                    $orderData['modify_money']=$per_total_money;
                    $total_money_arr[]=$per_total_money;
                    $res = $this->addOrder($orderData);
                    fdump_api(['addOrder','$orderData'=>$orderData,'tmp_cycle'=>$tmp_cycle,'res'=>$res],'000call',1);
                    if($res && $orderData['order_type'] == 'property' && intval(cfg('cockpit')) && isset($orderData['pigcms_id']) && !empty($orderData['pigcms_id'])){
                        $remarks='自动生成账单，物业费自动扣除余额';
                        (new StorageService())->userBalanceChange($orderData['uid'],2,$orderData['modify_money'],$remarks,$remarks,$res,$orderData['village_id']);
                    }
                }
            }else{
                $res = $this->addOrder($orderData);
                fdump_api([$orderData,$res,__LINE__],'000call',true);
                if($res && $orderData['order_type'] == 'property' && intval(cfg('cockpit')) && isset($orderData['pigcms_id']) && !empty($orderData['pigcms_id'])){
                    $remarks='自动生成账单，物业费自动扣除余额';
                    (new StorageService())->userBalanceChange($orderData['uid'],2,$orderData['modify_money'],$remarks,$remarks,$res,$orderData['village_id']);
                }
            }
            return true;
        } catch (\Exception $e) {
            fdump_api(['大的错误line：'.__LINE__, 'line'=>$e->getLine(), 'err' => $e->getMessage(), 'code' => $e->getCode(), 'file' => $e->getFile()],'000call',true);
        }
    }

    public function call1($v)
    {
        $root=dirname(dirname(dirname(__DIR__)));
        $root=dirname(dirname($root));
        $basePath =  rtrim($root,'/');
        $_SERVER['DOCUMENT_ROOT']=$basePath;
        fdump_api([__LINE__.'start',$v],'001call11',true);
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village = new HouseVillageService();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_auto_order_log = new HouseNewAutoOrderLog();
        if($v['vacancy_id']){
            $type = 1;
            $id = $v['vacancy_id'];
            $auto_order_info=$db_house_new_auto_order_log->getOne(['rule_id'=>$v['rule_id'],'room_id'=>$v['room_id'],'status'=>0]);
        }else{
            $type = 2;
            $id = $v['position_id'];
            $auto_order_info=$db_house_new_auto_order_log->getOne(['rule_id'=>$v['rule_id'],'position_id'=>$v['position_id'],'status'=>0]);

        }
        if(isset($v['unit_gage_type']) && $v['unit_gage_type']==3){
            //不允许绑定房间，只能绑定车位，查询车位面积是否大于0
            if(!$v['position_id']){
                if (!empty($auto_order_info)){
                    $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'房间没有车位面积，无法生成账单']);
                }
                $result=[];
                $result['error']=1;
                $result['msg']='房间没有车位面积，无法生成账单';
                return $result;
            }
            $usePositionId = (new HouseVillageParkingPosition())->where([['position_id' ,'=', $v['position_id']],['position_area','>',0]])->column('position_id');
            if(!$usePositionId){
                if (!empty($auto_order_info)){
                    $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'车位面积为0，无法生成账单']);
                }
                $result=[];
                $result['error']=1;
                $result['msg']='车位面积为0，无法生成账单';
                return $result;
            }
        }
        if($type == 2 && $v['fees_type'] == 2 && empty($v['unit_gage']) && (!isset($v['unit_gage_type']) || $v['unit_gage_type']!=3)){
           if (!empty($auto_order_info)){
                $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'车位绑定周期性收费标准时未设置计量单位']);
            }
            $result=[];
            $result['error']=1;
            $result['msg']='车位绑定周期性收费标准时未设置计量单位,无法生成账单';
            return $result;
        }

        if($v['charge_type'] == 'water' || $v['charge_type'] == 'electric' || $v['charge_type'] == 'gas'){
            if (!empty($auto_order_info)){
                $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'水电燃类别的收费标准，无法自动生成账单']);
            }
            $result=[];
            $result['error']=1;
            $result['msg']='水电燃类别的收费标准，无法生成账单';
            return $result;
            //return false;
        }

        $is_allow = $service_house_new_charge_rule->checkChargeValid($v['project_id'], $v['rule_id'],$id,$type);
        if (!$is_allow || $v['bill_type'] == 1 || ($v['order_add_time'] > (strtotime((date('Y-m-d',time()).' 23:59:59'))))){
            if (!empty($auto_order_info)){
                $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'收费标准未生效，无法自动生成账单']);
            }
            $result=[];
            $result['error']=1;
            $result['msg']='收费标准未生效，无法生成账单';
            return $result;
          //  return false;
        }
        $rule_info = $service_house_new_charge_rule->getRuleInfo($v['rule_id']);

        if($v['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES) {
            $ruleHasParkNumInfo = $service_house_new_charge_rule->getRuleHasParkNumInfo($id, $v['rule_id'], $type, $rule_info);
            if (empty($ruleHasParkNumInfo) || !isset($ruleHasParkNumInfo['parkingNum']) || intval($ruleHasParkNumInfo['parkingNum']) <= 0) {
                $result=[];
                $result['error']=1;
                $result['msg']='计费模式为车位数量缺少车位数量，无法生成账单';
                return $result;
            }
            $parkingNum  = $ruleHasParkNumInfo['parkingNum'];
        } else {
            $parkingNum = 1;
        }
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge(true);
        $where = [];
        if($v['order_add_type'] == 1){
            $beginTime = mktime(0,0,0,date('m'),date('d'),date('Y'));
            $where[] = ['service_end_time|add_time','>=',$beginTime];
        }
        elseif($v['order_add_type'] == 2){
            $beginTime = mktime(0,0,0,date('m'),1,date('Y'));
            if($is_grapefruit_prepaid==1){
                $where[] = ['service_end_time','>=',$beginTime];
            }else{
                $where[] = ['service_end_time|add_time','>=',$beginTime];
            }
        } else{
            if($is_grapefruit_prepaid==1){
                $perdaytime=date('Y').'-12-31 00:00:10';
                $beginTime = strtotime($perdaytime)-1;
                $where[] = ['service_end_time','>=',$beginTime];
            }else{
                $perdaytime=date('Y-m-d').' 00:00:10';
                $beginTime = strtotime($perdaytime)-1;
                $where[] = ['service_end_time|add_time','>=',$beginTime];
            }
        }
        if($v['vacancy_id']){
            $where[] = ['room_id','=',$v['vacancy_id']];
        }

        if($v['position_id']){
            $where[] = ['position_id','=',$v['position_id']];
        }
        $where[] = ['project_id','=',$v['project_id']];
        $where[] = ['is_discard','=',1];

        $order_info =array();
        if($is_grapefruit_prepaid!=1){
            $order_info = $db_house_new_pay_order->get_one($where, true);
            if($order_info){
                $order_info = $order_info->toArray();
            }
        }
        if(!empty($order_info)){
           if (!empty($auto_order_info)){
                $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'当前房间/车位已生成账单，无法生成账单']);
            }
            $result=[];
            $result['error']=1;
            $result['msg']='当前房间/车位已生成账单，无法生成账单';
            return $result;
        }
        if($is_grapefruit_prepaid!=1 && $v['charge_type']=='property' && $v['vacancy_id']>0){
            $whereTmp = [];
            $whereTmp[] = ['room_id','=',$v['vacancy_id']];
            $whereTmp[] = ['village_id','=',$v['village_id']];
            $whereTmp[] = ['order_type','=','property'];
            $whereTmp[] = ['is_discard','=',1];
            $property_fee_info = $db_house_new_pay_order->get_one($whereTmp, 'order_id,village_id');
            if(empty($property_fee_info) || $property_fee_info->isEmpty()) {
                $whereproperty = [
                    ['room_id', '=', $v['vacancy_id']],
                    ['order_id', '=', 0],
                    ['project_id', '=', 0],
                    ['position_id', '=', 0],
                    ['order_type', '=', 'property'],
                ];
                $tmptime = time() + 3600;
                $property_order_log = $this->getOrderLog($whereproperty, '*', 'id DESC');
                if ($property_order_log && isset($property_order_log['service_end_time']) && $property_order_log['service_end_time'] > $tmptime) {
                    $fail_reason = $property_order_log['desc'] . '到' . date('Y-m-d H时', $property_order_log['service_end_time']) . '，物业时间未到期无法生成账单';
                    if (!empty($auto_order_info)) {
                        $db_house_new_auto_order_log->saveOne(['id' => $auto_order_info['id']], ['status' => 2, 'fail_reason' => $fail_reason]);
                    }
                    $result = [];
                    $result['error'] = 1;
                    $result['msg'] = $fail_reason;
                    return $result;
                }
            }
        }

        $cycle = isset($v['cycle'])?$v['cycle']:1;
        $x_cycle=$cycle;
        if($rule_info['cyclicity_set'] > 0){
            if($type == 1){
                $order_list = $db_house_new_pay_order->getList(['o.is_discard'=>1,'o.room_id'=>$v['vacancy_id'],'o.project_id'=>$v['project_id'],'o.position_id'=>0,'o.rule_id'=>$v['rule_id']],'o.service_month_num,o.service_give_month_num');
            } else{
                $order_list = $db_house_new_pay_order->getList(['o.is_discard'=>1,'o.position_id'=>$v['position_id'],'o.project_id'=>$v['project_id'],'o.rule_id'=>$v['rule_id']],'o.service_month_num,o.service_give_month_num');
            }
            if($order_list){
                $order_list = $order_list->toArray();
                if(count($order_list) >= $rule_info['cyclicity_set']){
                    if (!empty($auto_order_info)){
                        $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'已生成的账单周期总数超出设置的周期总数，无法生成账单']);
                    }
                    $result=[];
                    $result['error']=1;
                    $result['msg']='已生成的账单周期总数超出设置的周期总数，无法生成账单';
                    return $result;
                    return false;
                }
                $order_count = 0;
                foreach ($order_list as $item){
                    if($item['service_month_num'] == 0)
                        $order_count += 1;
                    else
                        $order_count = $order_count+$item['service_month_num'];
                }
                if($order_count >= $rule_info['cyclicity_set']){
                    if (!empty($auto_order_info)){
                        $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'已生成的账单周期总数超出设置的周期总数，无法生成账单']);
                    }
                    $result=[];
                    $result['error']=1;
                    $result['msg']='生成的账单周期超出设置的周期总数，无法生成账单';
                    return $result;
                    return false;

                }

            }
        }

        $orderData = [];
        if($v['vacancy_id']){
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$v['vacancy_id']],['type','in',[0,3]],['status','=',1]],'pigcms_id,name,phone,uid');
            $orderData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $orderData['name'] = isset($user_info['name'])?$user_info['name']:'';
            $orderData['phone'] = isset($user_info['phone'])?$user_info['phone']:'';
            $orderData['room_id'] = isset($v['vacancy_id'])?$v['vacancy_id']:0;
        }
        if($v['position_id']){
            $orderData['position_id'] = $v['position_id'];
            $service_house_village_parking = new HouseVillageParkingService();
//          
//            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$v['position_id']]);
//
//            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,vacancy_id,uid');
//
            $user_info =$this->getRoomUserBindByPosition($v['position_id'],$v['village_id']);

            if($user_info){
                $orderData['pigcms_id'] = $user_info['pigcms_id'] ? $user_info['pigcms_id']:0;
                $orderData['uid'] = $user_info['uid']?$user_info['uid']:0;
                $orderData['name'] = $user_info['name'] ? $user_info['name']:'';
                $orderData['phone'] = $user_info['phone'] ? $user_info['phone']:'';
                $orderData['room_id'] = $user_info['vacancy_id' ]? $user_info['vacancy_id']:0;
            }
            $orderData['uid'] = isset($user_info['uid'])?$user_info['uid']:0;
            $orderData['name'] = isset($user_info['name'])?$user_info['name']:'';
            $orderData['phone'] = isset($user_info['phone'])?$user_info['phone']:'';
        }
        $orderData['village_id'] = $v['village_id'];
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$v['village_id']],'property_id');
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);
        $rule_digit=-1;
        if(isset($rule_info['rule_digit']) && $rule_info['rule_digit']>-1 && $rule_info['rule_digit']<5){
            $rule_digit=$rule_info['rule_digit'];
            if(!empty($digit_info)){
                $digit_info['meter_digit']=$rule_digit;
                $digit_info['other_digit']=$rule_digit;
            }else{
                $digit_info=array('type'=>1);
                $digit_info['meter_digit']=$rule_digit;
                $digit_info['other_digit']=$rule_digit;
            }
        }
        $orderData['property_id'] = isset($village_info['property_id'])?$village_info['property_id']:0;
        $orderData['order_name'] = $v['name'];
        $orderData['order_type'] = $v['charge_type'];
        $orderData['project_id'] = $v['project_id'];
        $orderData['rule_id'] = $v['rule_id'];
        $orderData['is_auto'] = 1;

        if($v['vacancy_id']){
            /*
            $condition1 = [];
            $condition1[] = ['vacancy_id','=',$v['vacancy_id']];
            $condition1[] = ['status','=',1];
            $condition1[] = ['type','in',[0,3,1,2]];
            $bind_list = $service_house_village_user_bind->getList($condition1,true);
            */
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $whereArrTmp=array();
            $whereArrTmp[]=array('pigcms_id','=',$v['vacancy_id']);
            $whereArrTmp[]=array('user_status','=',2);  // 2未入住
            $whereArrTmp[]=array('status','in',[1,2,3]);
            $whereArrTmp[]=array('is_del','=',0);
            $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
            $not_house_rate = 100;
            if($room_vacancy && !$room_vacancy->isEmpty()){
                $room_vacancy = $room_vacancy->toArray();
                if(!empty($room_vacancy)){
                    $not_house_rate = $v['not_house_rate'];
                }
            }
        }else{
            $service_house_village_parking = new HouseVillageParkingService();
            $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$v['position_id']]);
            if($carInfo){
                $carInfo = $carInfo->toArray();
            }
            if(empty($carInfo)){
                $not_house_rate = $v['not_house_rate'];
            } else{
                $not_house_rate = 100;
            }

        }
        if($not_house_rate<=0 || $not_house_rate>100){
            $not_house_rate=100;
        }
        if($v['fees_type'] == 1){
            $orderData['total_money'] = $v['unit_price'] * $v['rate'] * ($not_house_rate/100)*$cycle;
        }else{
            if(empty($v['custom_value'])){
                $custom_value = 1;
            } else{
                $custom_value = $v['custom_value'];
                $custom_number=$custom_value;
            }
            if(empty($custom_value)){
                $custom_value=1;
            }
            $orderData['total_money'] = $v['unit_price'] * $v['rate'] * ($not_house_rate/100) * $custom_value*$cycle;
        }
        if($v['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES && $parkingNum > 1) {
            $orderData['total_money'] = $orderData['total_money'] * intval($parkingNum);
            $orderData['parking_num'] = intval($parkingNum);
            $orderData['parking_lot'] = isset($ruleHasParkNumInfo) && isset($ruleHasParkNumInfo['parking_lot']) ? $ruleHasParkNumInfo['parking_lot'] : '';
        }
        if (!empty($digit_info)) {
            if ($orderData['order_type'] == 'water' || $orderData['order_type'] == 'electric' || $orderData['order_type'] == 'gas') {
                $orderData['total_money'] = formatNumber($orderData['total_money'], $digit_info['meter_digit'], $digit_info['type']);
            } else {
                $orderData['total_money'] = formatNumber($orderData['total_money'], $digit_info['other_digit'], $digit_info['type']);

            }
        }

        $orderData['total_money']=formatNumber($orderData['total_money'], 2, 1);
        $orderData['modify_money'] = $orderData['total_money'];
        $orderData['is_paid'] = 2;
        $orderData['is_prepare'] = 2;
        //$orderData['service_month_num'] = 1;
        $orderData['unit_price'] = $v['unit_price'];
        $orderData['add_time'] = time();
        $con = [];
        if($v['vacancy_id']){
            $con[] = ['room_id','=',$v['vacancy_id']];
            $con[] = ['position_id','=',0];
        }else{
            $con[] = ['position_id','=',$v['position_id']];
        }
        $con[] = ['project_id','=',$v['project_id']];
        $projectInfo = $this->getProjectInfo(['id'=>$v['project_id']],'subject_id');
        $numberInfo = $this->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
        $con[] = ['order_type','=',$numberInfo['charge_type']];
        $order_info = $this->getOrderLog($con, '*','id DESC');
        if($v['type'] == 2){
            $orderData['service_month_num'] = $cycle;
            //查询未缴账单
            $subject_id_arr = $this->getNumberArr(['charge_type'=>$numberInfo['charge_type'],'status'=>1],'id');
            if (!empty($subject_id_arr)){
                $getProjectArr=$this->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
            }
            if($type == 1){
                $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$v['vacancy_id'],'order_type'=>$numberInfo['charge_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $this->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            } else{
                $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$v['position_id'],'order_type'=>$numberInfo['charge_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $this->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            }
            //新版生成账单逻辑,按照计费时间顺序来生成账单
            if (cfg('new_pay_order')==1&&!empty($pay_order_info)&& $pay_order_info['service_end_time']>100){
                if ($pay_order_info['project_id']!=$v['project_id']){
                    if (!empty($auto_order_info)){
                        $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'当前房间的该类别下有其他项目的待缴账单，无法生成账单']);
                    }
                    $result=[];
                    $result['error']=1;
                    $result['msg']='当前房间的该类别下有其他项目的待缴账单，无法生成账单';
                    return $result;
                   // return false;
                }
                $orderData['service_start_time'] = $pay_order_info['service_end_time']+1;
                $orderData['service_start_time'] = strtotime(date('Y-m-d',$orderData['service_start_time']));
                if($v['order_add_type'] == 1){
                    $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                } elseif($v['order_add_type'] == 2){
                    //todo 判断是不是按照自然月来生成订单
                    if(cfg('open_natural_month') == 1){
                        $start_d=date('d',$orderData['service_start_time']);
                        $tmp_service_end_time=strtotime("+$cycle month",$orderData['service_start_time']);
                        $end_d=date('d',$tmp_service_end_time);
                        if($start_d!=$end_d){
                            $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                            $end_date_time=strtotime($end_date);
                            $tmp_service_end_time=$end_date_time;
                        }
                        $orderData['service_end_time'] = $tmp_service_end_time-1;
                    }else{
                        $cycle = $cycle*30;
                        $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                    }
                } else{
                    $orderData['service_end_time'] = strtotime("+$cycle year",$orderData['service_start_time'])-1;
                }
            }else{
                if($numberInfo['charge_type'] == 'property'){
                    if($type != 1){
                        $where22=[
                            ['position_id','=',$v['position_id']],
                            ['order_type','=',$numberInfo['charge_type']],
                        ];
                    }else{
                        $where22=[
                            ['room_id','=',$v['vacancy_id']],
                            ['order_type','=',$numberInfo['charge_type']],
                            ['position_id','=',0]
                        ];
                    }
                    $new_order_log = $this->getOrderLog($where22,'*','id DESC');
                    if(!empty($new_order_log)){
                        $order_info=$new_order_log;
                    }
                }
                $is_add_order_log=false;
                $whereLogArr=array();
                if($order_info && $order_info['service_end_time']>100){
                    $whereArr=array();
                    $whereArr[]=array('room_id','=',$order_info['room_id']);
                    $whereArr[]=array('project_id','=',$order_info['project_id']);
                    $whereArr[]=array('village_id','=',$order_info['village_id']);
                    $whereArr[]=array('order_type','=',$order_info['order_type']);
                    $whereArrTmp=$whereArr;
                    $whereArrTmp[]=array('is_paid','=',1);
                    $whereArrTmp[]=array('refund_money','<=',0);
                    $tmp_order_data=$this->getInfo($whereArrTmp,'order_id,is_refund,refund_money');
                    if(empty($tmp_order_data) || $tmp_order_data->isEmpty()){
                        //没有已支付 没退款的
                        $whereArrTmp=$whereArr;
                        $whereArrTmp[]=array('is_paid','=',1);
                        $whereArrTmp[]=array('refund_money','>',0);
                        $whereArrTmp['string']='`refund_money`>=`modify_money`';
                        $tmp_order_data=$this->getInfo($whereArrTmp,'order_id,is_refund,refund_money');
                        if(!empty($tmp_order_data) && !$tmp_order_data->isEmpty()){
                            //有已支付 已退款的
                            $whereArrTmp=$whereArr;
                            $whereArrTmp[]=array('is_discard','=',2);
                            $whereArrTmp[]=array('is_paid','=',2);
                            $whereArrTmp[]=array('order_id','>',$tmp_order_data['order_id']);
                            $tmp_order_data=$this->getInfo($whereArrTmp,'order_id,is_refund,refund_money');
                            if(!empty($tmp_order_data) && !$tmp_order_data->isEmpty()){
                                //有未支付已作废的
                                $whereLogArr[]=array('order_id','>',0);
                                $whereLogArr[]=array('project_id','=',$order_info['project_id']);
                                $whereLogArr[]=array('order_type','=',$order_info['order_type']);
                                $whereLogArr[]=array('room_id','=',$order_info['room_id']);
                                $whereLogArr[]=array('village_id','=',$order_info['village_id']);
                                $order_info=array();
                                $is_add_order_log=true;
                            }
                        }
                    }
                    
                }
                if(!empty($order_info) && $order_info['service_end_time']>100){
                    $orderData['service_start_time'] = $order_info['service_end_time']+1;
                    $orderData['service_start_time'] = strtotime(date('Y-m-d',$orderData['service_start_time']));
                }elseif($v['order_add_time']){
                    $orderData['service_start_time'] = strtotime(date('Y-m-d',$v['order_add_time']));
                }else{
                    $orderData['service_start_time'] = strtotime(date('Y-m-d',$v['charge_valid_time']));
                }
                if($is_add_order_log && !empty($whereLogArr)){
                    $updateLogArr=array('service_start_time'=>$orderData['service_start_time'],'service_end_time'=>$orderData['service_start_time']);
                    $this->saveOrderLog($whereLogArr,$updateLogArr);
                }
                if($v['order_add_type'] == 1){
                    $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                } elseif($v['order_add_type'] == 2){
                    //todo 判断是不是按照自然月来生成订单
                    if(cfg('open_natural_month') == 1){
                        $start_d=date('d',$orderData['service_start_time']);
                        $tmp_service_end_time=strtotime("+$cycle month",$orderData['service_start_time']);
                        $end_d=date('d',$tmp_service_end_time);
                        if($start_d!=$end_d){
                            $end_date=date('Y-m',$tmp_service_end_time).'-01 00:00:00';
                            $end_date_time=strtotime($end_date);
                            $tmp_service_end_time=$end_date_time;
                        }
                        $orderData['service_end_time'] = $tmp_service_end_time-1;
                    }else{
                        $cycle = $cycle*30;
                        $orderData['service_end_time'] = strtotime("+$cycle day",$orderData['service_start_time'])-1;
                    }
                } else{
                    $orderData['service_end_time'] = strtotime("+$cycle year",$orderData['service_start_time'])-1;
                }
            }
        }else{
            $orderData['service_start_time'] = time();
            $orderData['service_end_time'] = time();
        }
        $contract_info = $service_house_new_charge_rule->getHouseVillageInfo(['village_id'=>$v['village_id']],'contract_time_start,contract_time_end');
        if(isset($contract_info['contract_time_start']) && $contract_info['contract_time_start'] > 1){
            if($orderData['service_end_time'] < $contract_info['contract_time_start'] || $orderData['service_end_time'] > $contract_info['contract_time_end']){
                if (!empty($auto_order_info)){
                    $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'当前房间的物业服务结束时间不在合同时间范围内，无法生成账单']);
                }
                $result=[];
                $result['error']=1;
                $result['msg']='当前房间的物业服务结束时间不在合同时间范围内，无法生成账单';
                return $result;
               // return false;
            }
            if($orderData['service_start_time'] < $contract_info['contract_time_start'] || $orderData['service_start_time'] > $contract_info['contract_time_end']){
                if (!empty($auto_order_info)){
                    $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>2,'fail_reason'=>'当前房间的物业服务开始时间不在合同时间范围内，无法生成账单']);
                }
                $result=[];
                $result['error']=1;
                $result['msg']='当前房间的物业服务开始时间不在合同时间范围内，无法生成账单';
                return $result;
                return false;
            }
        }
        if($not_house_rate>0 && $not_house_rate<100){
            $orderData['not_house_rate'] = $not_house_rate;
        }
        if(isset($custom_number)){
            $orderData['number'] = $custom_number;
        }
        $unify_flage_id='150'.date('YmdHis').rand(100000,999999);
        $tmp_cycle=0;
        if(isset($v['per_one_order']) && $v['per_one_order']>0 && $v['order_add_type']==2 && $x_cycle>1){
            //月按月拆
            $tmp_cycle=$x_cycle;
        }else if(isset($v['per_one_order']) && $v['per_one_order']>0 && $v['order_add_type']==3){
            //年按月拆
            $tmp_cycle=$x_cycle*12;
        }
        if($tmp_cycle>1){
            fdump_api(['postData'=>$orderData,'tmp_cycle'=>$tmp_cycle],'001call11',1);
            $orderData['unify_flage_id']=$unify_flage_id;
            $service_start_time=$orderData['service_start_time'];
            $service_end_time=$orderData['service_end_time'];
            $total_money=$orderData['total_money'];
            $modify_money=$orderData['modify_money'];
            $service_month_num=$orderData['service_month_num'];
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
                $orderData['service_start_time']=$tmp_service_start_time;
                $orderData['service_end_time']=$tmp_service_end_time;
                $month_end_time_arr[$ii]=$tmp_service_end_time;
                $orderData['service_month_num']=1;
                $orderData['total_money']=$per_total_money;
                $orderData['modify_money']=$per_total_money;
                $total_money_arr[]=$per_total_money;
                $res = $this->addOrder($orderData);
                fdump_api(['addOrder','postData'=>$orderData,'tmp_cycle'=>$tmp_cycle,'res'=>$res],'001call11',1);
                if (!empty($auto_order_info)&&$res>0){
                    $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>1]);
                }
                if($res && $orderData['order_type'] == 'property' && intval(cfg('cockpit')) && isset($orderData['pigcms_id']) && !empty($orderData['pigcms_id'])){
                    $remarks='自动生成账单，物业费自动扣除余额';
                    (new StorageService())->userBalanceChange($orderData['uid'],2,$orderData['modify_money'],$remarks,$remarks,$res,$orderData['village_id']);
                }
            }
        }else{
            $res = $this->addOrder($orderData);
            if (!empty($auto_order_info)&&$res>0){
                $db_house_new_auto_order_log->saveOne(['id'=>$auto_order_info['id']],['status'=>1]);
            }
            fdump_api(['postData'=>$orderData,'res'=>$res],'001call11',1);
            if($res && $orderData['order_type'] == 'property' && intval(cfg('cockpit')) && isset($orderData['pigcms_id']) && !empty($orderData['pigcms_id'])){
                $remarks='自动生成账单，物业费自动扣除余额';
                (new StorageService())->userBalanceChange($orderData['uid'],2,$orderData['modify_money'],$remarks,$remarks,$res,$orderData['village_id']);
            }

        }
        $result=[];
        $result['error']=0;
        $result['data']=$res;
        $result['order_id']=$res;
        return $result;
        return true;
    }

    public function delRecord($where=[])
    {
        $db_house_new_select_project_record = new HouseNewSelectProjectRecord();
        $res = $db_house_new_select_project_record->del($where);
        return $res;
    }

    /**
     * 收取收费项目服务到期时间
     * @param array $where
     * @param bool $field
     * @param string $order
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderLog($where=[],$field=true,$order='id DESC')
    {
        $db_house_new_order_log = new HouseNewOrderLog();
        $data = $db_house_new_order_log->getOne($where,$field,$order);
        return $data;
    }
    public function saveOrderLog($where=[],$update=array())
    {
        $db_house_new_order_log = new HouseNewOrderLog();
        $data = $db_house_new_order_log->saveOne($where,$update);
        return $data;
    }
    public function queryScanPay($order_no='',$pay_type='',$summary_id=0)
    {
        if(empty($order_no) || empty($pay_type) || !$summary_id)
            return api_output_error(1001,'缺少必传参数');
        $service_pay = new PayService();
        $res = $service_pay->queryScanPay($order_no,$pay_type);
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
            return ['status'=>1];
        }elseif ($res['status'] == 2){
            $this->queryScanPay($order_no,$pay_type,$summary_id);
        }else{
            return ['status'=>0];
        }
    }

    /**
     * 补足残月剩余天数的账单
     * @author lijie
     * @date_time 2021/11/09
     * @param string $month
     * @param string $year
     * @param string $day
     * @param string $time
     * @param array $postData
     * @param array $charge_standard_bind_info
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function addSingleDayOrder($month='',$year='',$day='',$time='',$postData=[],$charge_standard_bind_info=[])
    {
        if(empty($month) || empty($year) || empty($day) || empty($time) || empty($charge_standard_bind_info) || empty($postData))
            return false;
        $days = getMonthLastDay($month,$year);//获取所属月总共的天数
        if(substr($day,0,1) == 0){
            $day = ltrim($day,0);
        }
        $dateArr = [];  //残月需要缴费的单日列表
        for($i=0;$i<=$days-$day;$i++){
            if($i == 0){
                $dateArr[$i] = strtotime($time);
            }else{
                $dateArr[$i] = $dateArr[$i-1]+24*60*60;
            }
        }
        $db_house_new_pay_order = new HouseNewPayOrder();
        $where = [];
        if($charge_standard_bind_info['vacancy_id']){
            $where[] = ['o.room_id','=',$charge_standard_bind_info['vacancy_id']];
            $where1[] = ['o.room_id','=',$charge_standard_bind_info['vacancy_id']];
        }else{
            $where[] = ['o.position_id','=',$charge_standard_bind_info['position_id']];
            $where1[] = ['o.position_id','=',$charge_standard_bind_info['position_id']];
        }
        $where[] = ['o.project_id','=',$charge_standard_bind_info['project_id']];
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.is_auto','=',2];
        $count = $db_house_new_pay_order->getCount($where);
        $where1[] = ['o.project_id','=',$charge_standard_bind_info['project_id']];
        $where1[] = ['o.is_discard','=',1];
        $where1[] = ['o.is_paid','=',2];
        $count1 = $db_house_new_pay_order->getCount($where1);
        $count = $count+$count1;
        if($count == count($dateArr)){
            $dateArr = [];
        }elseif (count($dateArr) < $count){
            $dateArr = [];
        }else{
            array_splice($dateArr, 0, $count);
        }
        if(!empty($dateArr)){
            $service_house_new_charge_rule = new HouseNewChargeRuleService();
            $service_house_village_user_bind = new HouseVillageUserBindService();
            $rule_list = $service_house_new_charge_rule->getRuleListOfDay([['village_id','=',$postData['village_id']],['charge_project_id','=',$charge_standard_bind_info['project_id']],['status','=',1],['bill_create_set','=',1]],true,'charge_valid_time DESC');
            if($rule_list){
                foreach ($rule_list as $val){
                    foreach ($dateArr as $k=>$v){
                        if($val['charge_valid_time'] <= $v){
                            if($charge_standard_bind_info['vacancy_id']){
                                /*
                                $condition1 = [];
                                $condition1[] = ['vacancy_id','=',$charge_standard_bind_info['vacancy_id']];
                                $condition1[] = ['status','=',1];
                                $condition1[] = ['type','in',[0,3,1,2]];
                                $bind_list = $service_house_village_user_bind->getList($condition1,true);
                                */
                                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                                $whereArrTmp=array();
                                $whereArrTmp[]=array('pigcms_id','=',$charge_standard_bind_info['vacancy_id']);
                                $whereArrTmp[]=array('user_status','=',2);  // 2未入住
                                $whereArrTmp[]=array('status','in',[1,2,3]);
                                $whereArrTmp[]=array('is_del','=',0);
                                $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
                                $not_house_rate = 100;
                                if($room_vacancy && !$room_vacancy->isEmpty()){
                                    $room_vacancy = $room_vacancy->toArray();
                                    if(!empty($room_vacancy)){
                                        $not_house_rate = $val['not_house_rate'];
                                    }
                                }
                                $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$val['charge_project_id'],'rule_id'=>$val['id'],'vacancy_id'=>$charge_standard_bind_info['vacancy_id']]);
                            }else{
                                $service_house_village_parking = new HouseVillageParkingService();
                                $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$charge_standard_bind_info['position_id']]);
                                if($carInfo){
                                    $carInfo = $carInfo->toArray();
                                }
                                if(empty($carInfo))
                                    $not_house_rate = $val['not_house_rate'];
                                else
                                    $not_house_rate = 100;
                            }
                            if($charge_standard_bind_info['position_id']){
                                $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$val['charge_project_id'],'rule_id'=>$val['id'],'position_id'=>$charge_standard_bind_info['position_id']]);
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
                            if($val['fees_type'] == 1){
                                $postData['total_money'] = $val['charge_price']*$not_house_rate/100*$val['rate'];
                                $postData['modify_money'] = $postData['total_money'];
                            }else{
                                $postData['total_money'] = $val['charge_price']*$not_house_rate/100*$custom_value*$val['rate'];
                                $postData['modify_money'] = $postData['total_money'];
                            }
                            $postData['service_start_time'] = $v;
                            $postData['service_end_time'] = $postData['service_start_time']+24*60*60-1;
                            $postData['unit_price'] = $val['charge_price'];
                            if($charge_standard_bind_info['vacancy_id']){
                                $postData['room_id'] = $charge_standard_bind_info['vacancy_id'];
                                $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$charge_standard_bind_info['vacancy_id']],['type','in','0,3'],['status','=',1]],'pigcms_id,name,phone');
                                if($user_info){
                                    $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                                    $postData['name'] = $user_info['name']?$user_info['name']:'';
                                    $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
                                }
                            }
                            if($charge_standard_bind_info['position_id']){
                                $service_house_village_parking = new HouseVillageParkingService();
                                $postData['position_id'] = $charge_standard_bind_info['position_id'];
                                $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$postData['position_id']]);
                                $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,vacancy_id');
                                if($user_info){
                                    $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                                    $postData['name'] = $user_info['name']?$user_info['name']:'';
                                    $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
                                    $postData['room_id'] = $user_info['vacancy_id']?$user_info['vacancy_id']:0;
                                }
                            }
                            $postData['rule_id'] = $val['id'];
                            $postData['prepaid_cycle'] = 0;
                            $postData['service_month_num'] = 0;
                            $postData['service_give_month_num'] = 0;
                            $postData['diy_content'] = '';
                            $postData['diy_type'] = 0;
                            $postData['rate'] = 100;
                            $postData['is_auto'] = 2;
                            if($not_house_rate>0 && $not_house_rate<100){
                                $postData['not_house_rate'] = $not_house_rate;
                            }
                            if(isset($custom_number)){
                                $postData['number'] = $custom_number;
                            }
                            $res = $this->addOrder($postData);
                            if($res){
                                unset($dateArr[$k]);
                                $dateArr = array_values($dateArr);
                            }

                        }
                    }
                }
            }
        }
    }

    /**
     * 获取应收明细年月应收金额统计
     * User: zhanghan
     * Date: 2022/1/11
     * Time: 9:32
     * @param $param
     * @return array
     */
    public function getOrderStatisticsByYears($param){
        $db_house_new_pay_order = new HouseNewPayOrder();

        $where = [];
        // 房间
        if($param['type'] == 'room'){
            $where[] = ['room_id','=',$param['key_id']];
            $where[] = ['position_id','=',0];
        } else{
            // 车位
            $where[] = ['position_id','=',$param['key_id']];
        }

        $where[] = ['is_paid','=',2];
        $where[] = ['is_discard','=',1];
        //$where[] = ['order_type','<>','non_motor_vehicle'];
        $where[] = ['village_id','=',$param['village_id']];
        $data = [
            'list' => [],
            'count' => 0,
            'source' => 1
        ];
        // 获取第一笔应收明细的时间作为起始年
        $first_order = $db_house_new_pay_order->get_one($where,'add_time,property_id','add_time asc');

        if($first_order && !$first_order->isEmpty()){
            $first_order = $first_order->toArray();
            $db_house_property_digit_service = new HousePropertyDigitService();
            $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$first_order['property_id']]);

            $first_year = date('Y',$first_order['add_time']);
            $first_month = date('n',$first_order['add_time']);
            // 当前年
            $cur_year = date('Y');

            $list = [];
            $count = 0;
            // 查询每年
            if(empty($param['year'])){
                for($i = $cur_year;$i >= $first_year; $i--){
                    $count++;
                    // 起始年
                    $start_time = strtotime($i.'-01-01');
                    $end_time = strtotime($i.'-12-31 23:59:59');

                    $where_year = $where;
                    $where_year[] = ['add_time','>=',$start_time];
                    $where_year[] = ['add_time','<=',$end_time];
                    // 统计每年金额
                    $modify_money = $db_house_new_pay_order->getSum($where_year,'total_money');
                    if(empty($modify_money)){
                        continue;
                    }
                    $modify_money = formatNumber($modify_money,2,1);
                    /*
                    if(empty($digit_info)){
                        $modify_money = formatNumber($modify_money,2,1);
                    }else{
                        $modify_money = formatNumber($modify_money,$digit_info['other_digit'],$digit_info['type']);
                    }
                    */
                    $list[] = [
                        'title' => $i.'年账单',
                        'number' => (int)$i,
                        'money' => $modify_money
                    ];
                    // 最多循环次数
                    if($count > 20){
                        break;
                    }
                }
            }else{
                // 查询每月
                $end_month = 12; // 默认年的最后一月
                $start_month = 1; // 默认年的第一天
                if($first_year == $param['year']){
                    // 查询的是第一年的每月数据 起始月为第一笔订单的月份
                    $start_month = $first_month;
                }
                if ($param['year'] == $cur_year){
                    // 查询的是当前年的每月数据 最后一个月为当前月
                    $end_month = date('n',time());
                }
                for($i = $end_month;$i >= $start_month; $i--){
                    $count++;
                    // 起始月
                    $start_time = strtotime($param['year'].'-'.$i.'-01');
                    $end_time = strtotime("+1 month",$start_time)-1;

                    $where_month = $where;
                    $where_month[] = ['add_time','>=',$start_time];
                    $where_month[] = ['add_time','<=',$end_time];
                    // 统计每月金额
                    $modify_money = $db_house_new_pay_order->getSum($where_month,'total_money');
                    if(empty($modify_money)){
                        continue;
                    }
                    $modify_money = formatNumber($modify_money,2,1);
                    /*
                    if(empty($digit_info)){
                        $modify_money = formatNumber($modify_money,2,1);
                    }else{
                        $modify_money = formatNumber($modify_money,$digit_info['other_digit'],$digit_info['type']);
                    }
                    */

                    $list[] = [
                        'title' => $param['year'].'年'.$i.'月账单详情',
                        'number' => (int)$i,
                        'month' => $param['year'].'-'.$i,
                        'money' => $modify_money
                    ];
                    // 最多循环次数
                    if($count > 12){
                        break;
                    }
                }
            }
            $data = [
                'list' => $list,
                'count' => $count,
                'source' => 1
            ];
        }
        return $data;
    }


    /**
     * 新老版收费更替时同步物业服务时间
     * @author:zhubaodi
     * @date_time: 2022/2/9 16:11
     */
    public function autoAddOrderLog($data)
    {
        $db_house_village_user_bind = new HouseVillageUserBind();
        $db_house_village = new HouseVillage();
        $db_house_new_order_log = new HouseNewOrderLog();
        $village_id_arr = $db_house_village->getList(['property_id' => $data['property_id'], 'status' => 1], 'village_id');
        if (!empty($village_id_arr)) {
            $village_id_arr = $village_id_arr->toArray();
            $arr_village_id = [];
            foreach ($village_id_arr as $vv) {
                $arr_village_id[] = $vv['village_id'];
            }
            $condition1 = [];
            $condition1[] = ['village_id', 'in', $arr_village_id];
            $condition1[] = ['status', '=', 1];
            $condition1[] = ['type', 'in', [0, 3]];
            $condition1[] = ['property_endtime', '>', 0];
            $field = 'pigcms_id,village_id,uid,type,vacancy_id,status,property_endtime,property_starttime';
            $bind_list = $db_house_village_user_bind->getList($condition1, $field);
            if (!empty($bind_list)) {
                $bind_list = $bind_list->toArray();
                if (!empty($bind_list)) {
                    foreach ($bind_list as $v) {
                        $where = [];
                        $where[] = ['village_id', '=', $v['village_id']];
                        $where[] = ['room_id', '=', $v['vacancy_id']];
                        $where[] = ['order_type', '=', 'property'];
                        $log_info = $db_house_new_order_log->getOne($where, true);
                        if (empty($log_info)) {
                            $arr = [];
                            $arr['order_type'] = 'property';
                            $arr['order_name'] = '物业费';
                            $arr['room_id'] = $v['vacancy_id'];
                            $arr['property_id'] = $data['property_id'];
                            $arr['village_id'] = $v['village_id'];
                            $arr['service_start_time'] = $v['property_starttime'];
                            $arr['service_end_time'] = $v['property_endtime'];
                            $arr['desc'] = '新老版收费更替同步物业服务时间';
                            $arr['add_time'] = time();
                            $db_house_new_order_log->addOne($arr);
                        }
                    }
                }
            }
        }
    }


    /**
     * 物业费预缴 触发未缴物业费扣款
     * @author: liukezhu
     * @date : 2022/2/8
     * @param $village_id
     * @param $pigcms_id
     * @return bool
     */
    public function userUnpaidOrder($village_id=0,$pigcms_id=0,$xtype=''){
        if(!intval(cfg('cockpit'))){
            return false;
        }
        $StorageService=new StorageService();
        $where[] = ['is_paid','=',2];
        if(empty($xtype)){
            $where[] = ['order_type','=','property'];
        }else if(in_array($xtype,array('cold_water_balance','hot_water_balance','electric_balance'))){
            $where[] = ['order_type_flag','=',$xtype];
        }
        $where[] = ['is_discard','=',1];
        $where[] = ['village_id','=',$village_id];
        $where[] = ['pigcms_id','=',$pigcms_id];
        $field='order_id,pigcms_id,modify_money';
        $order='modify_money asc,order_id asc';
        $list=(new HouseNewPayOrder())->getOrder($where,$field,$order);
        if(!empty($list)){
            $list=$list->toArray();
        }
        if(empty($list)){
            return false;
        }
        $remarks='物业预缴，触发自动扣除余额';
        foreach ($list as $v){
            $StorageService->userBalanceChange($v['pigcms_id'],2,$v['modify_money'],$remarks,$remarks,$v['order_id'],$village_id,$xtype);
        }
        return true;
    }

    public function getNewProperty(){
        $db_house_new_charge_time=new HouseNewChargeTime();
        $where=[];
        $where[]=['take_effect_time','<=',time()];
        $property_list=$db_house_new_charge_time->getList($where,'property_id');
        if (!empty($property_list)){
            $property_list=$property_list->toArray();
            if (!empty($property_list)){
                foreach ($property_list as $v){
                    $this->autoAddOrderLog($v);
                }
            }
        }

    }

    /**
     * 是否允许打印
     * User: zhanghan
     * Date: 2022/2/17
     * Time: 14:03
     * @param $village_id
     * @param $template_id
     * @param $order_ids
     * @return int
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function isAllowPrint($village_id,$template_id,$order_ids){
        $db_village_info = new HouseVillageInfo();
        $db_print_number = new HouseVillagePrintTemplateNumber();
        $print_number_times = 0;
        // 获取打印配置
        $village_info_config = $db_village_info->getOne([['village_id','=',$village_id]],'print_number_times');
        if($village_info_config && !$village_info_config->isEmpty()){
            $village_info_config = $village_info_config->toArray();
            $print_number_times = $village_info_config['print_number_times'];
        }
        // 不允许
        if($print_number_times < 1){
            // 查询当前订单及模板，是否已有记录
            $where = [];
            $where[] = ['print_template_id','=',$template_id];
            $where[] = ['order_ids','=',implode(',',$order_ids)];
            $res = $db_print_number->getOne($where);
            if(!empty($res)){
                return 0;
            }else{
                // 判断订单中是否存在订单有过打印
                $isExistence = false;
                foreach ($order_ids as $valu){
                    $where = [];
                    $where[] = ['order_ids','find in set',$valu];
                    $res = $db_print_number->getOne($where);
                    if(!empty($res)){
                        $isExistence = true;
                        break;
                    }
                }
                if($isExistence){
                    return (count($order_ids) > 1) ? 2 : 1;
                }else{
                    return 0;
                }
            }
        }
        return 0;
    }

    
    /**
     * 收银台快捷生成账单
     * @author:zhubaodi
     * @date_time: 2022/6/17 13:30
     */
    public function quickCall($data){
        $db_rule=new HouseNewChargeRule();
        $db_project=new HouseNewChargeProject();
        $db_pay_order=new HouseNewPayOrder();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_new_charge = new HouseNewChargeService();
        $service_house_village = new HouseVillageService();
        if (!empty($data['room_id'])){
            $type = 1;
            $id   = $data['room_id'];
        }else{
            $type = 2;
            $id   = $data['position_id'];
        }
        if (empty($data['cycle'])){
            $data['cycle']=1;
        }
        $contract_info = $service_house_new_charge_rule->getHouseVillageInfo(['village_id'=>$data['village_id']],'contract_time_start,contract_time_end');
        $info = $db_rule->getDetail(['r.id'=>$data['rule_id']],'n.charge_type,r.*,p.type,p.name as order_name');
        if ($info && !is_array($info)) {
            $info = $info->toArray();
        }
        if(empty($info)){
            throw new \think\Exception("收费标准信息不存在");
        }
        if($type == 2 && $info['fees_type'] == 2 && empty($info['unit_gage'])){
            throw new \think\Exception("车场没有房屋面积，无法生成账单");
        }
        
        if($info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES) {
            $ruleHasParkNumInfo = $service_house_new_charge_rule->getRuleHasParkNumInfo($id, $data['rule_id'], $type, $info);
            if (empty($ruleHasParkNumInfo) || !isset($ruleHasParkNumInfo['parkingNum']) || intval($ruleHasParkNumInfo['parkingNum']) <= 0) {
                return api_output_error(1001,'计费模式为车位数量缺少车位数量，无法生成账单');
            }
            $parkingNum  = $ruleHasParkNumInfo['parkingNum'];
        } else {
            $parkingNum = 1;
        }

        if($info['cyclicity_set'] > 0){
            if($data['room_id']){
                $order_list = $this->getOrderLists(['o.is_discard'=>1,'o.room_id'=>$data['room_id'],'o.project_id'=>$info['charge_project_id'],'o.position_id'=>0,'o.rule_id'=>$info['id'],'o.is_refund'=>1],'o.*');
            }else{
                $order_list = $this->getOrderLists(['o.is_discard'=>1,'o.position_id'=>$data['position_id'],'o.project_id'=>$info['charge_project_id'],'o.rule_id'=>$info['id'],'o.is_refund'=>1],'o.*');
            }
            $order_count = 0;
            if($order_list){
                $order_list = $order_list->toArray();
                if(count($order_list) >= $info['cyclicity_set']){
                    throw new \think\Exception("超过最大缴费周期数");
                }
                foreach ($order_list as $item){
                    if($item['service_month_num'] == 0)
                        $order_count += 1;
                    else
                        $order_count = $order_count+$item['service_month_num']+$item['service_give_month_num'];
                }
                if($order_count >= $info['cyclicity_set']){
                    throw new \think\Exception("超过最大缴费周期数");
                }
            }
            if($data['cycle']>0){
                $order_count+=$data['cycle'];
            }
            if($order_count>$info['cyclicity_set']){
                throw new \think\Exception("超过最大缴费周期数了！");
            }
        }
        if($data['room_id']){
            //使用房子的 未入住状态来判断
            $whereArrTmp=array();
            $whereArrTmp[]=array('pigcms_id','=',$data['room_id']);
            $whereArrTmp[]=array('user_status','=',2);
            $whereArrTmp[]=array('status','in',[1,2,3]);
            $whereArrTmp[]=array('is_del','=',0);
            $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
            $not_house_rate = 100;
            if(!empty($room_vacancy)){
                $not_house_rate = $info['not_house_rate'];
            }
        }else{
            $service_house_village_parking = new HouseVillageParkingService();
            $carInfo = $service_house_village_parking->getCar(['car_position_id'=>$data['position_id']]);
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
        $postData=[];
        $custom_value = 1;
        $postData['expires'] = $data['expires'];
        $postData['order_type'] = $info['charge_type'];
        $charge_type_arr=$service_house_new_charge->charge_type;
        $postData['order_name'] = isset($charge_type_arr[$info['charge_type']]) ? $charge_type_arr[$info['charge_type']]:$info['charge_type'];
        if(isset($info['order_name']) && !empty($info['order_name'])){
            $postData['order_name'] =$info['order_name'];
        }
        $postData['village_id'] = $data['village_id'];
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$data['village_id']],'property_id');
        $postData['property_id'] = $village_info['property_id'];
      //   print_r([$info['charge_price'],$not_house_rate,$info['rate'],$data['cycle']]);die;
        if($info['fees_type'] == 1){
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$info['rate']*$data['cycle'];
        }else{
            if (empty($info['unit_gage'])){
                $vacancy_info=$service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$data['room_id']],'housesize');
                if (!empty($vacancy_info)&&$vacancy_info['housesize']>0){
                    $custom_value=$vacancy_info['housesize'];
                }
            }elseif (!empty($info['unit_gage'])&&!empty($data['custom_value'])){
                $custom_value=$data['custom_value'];
            }
            $postData['total_money'] = $info['charge_price']*$not_house_rate/100*$custom_value*$info['rate']*$data['cycle'];
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
        }else{
            $postData['total_money'] = formatNumber($postData['total_money'], 2, 1);
        }
        $postData['modify_money'] = $postData['total_money'];
        $postData['is_paid'] = 2;
        $postData['role_id'] = $data['role_id'];
        $postData['is_prepare'] = 2;
        $postData['rule_id'] = $info['id'];
        $postData['project_id'] = $info['charge_project_id'];
        $postData['order_no'] = '';
        $postData['add_time'] = time();
        if($not_house_rate>0 && $not_house_rate<100){
            $postData['not_house_rate'] = $not_house_rate;
        }
        $custom_number=$custom_value;
        if(isset($custom_number)){
            $postData['number'] = $custom_number;
        }
        $cycle_cc=$cycle=$data['cycle'];
        $postData['from'] = 1;
        if($info['type'] == 2){
            $postData['service_month_num'] = $data['cycle'];
            $projectInfo = $db_project->getOne(['id'=>$info['charge_project_id']],'subject_id');
            $numberInfo = $this->getNumberInfo(['id'=>$projectInfo['subject_id']],'charge_type');
            if($type ==1){
                $last_order = $this->getOrderLog([['room_id','=',$data['room_id']],['order_type','=',$numberInfo['charge_type']],['project_id','=',$info['charge_project_id']],['position_id','=',0]],true,'id DESC');
            } else{
                $last_order = $this->getOrderLog([['position_id','=',$data['position_id']],['order_type','=',$numberInfo['charge_type']],['project_id','=',$info['charge_project_id']]],true,'id DESC');
            }
            //查询未缴账单
            $subject_id_arr = $this->getNumberArr(['charge_type'=>$numberInfo['charge_type'],'status'=>1],'id');
            if (!empty($subject_id_arr)){
                $getProjectArr=$this->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
            }
            if($type == 1){
                $pay_where=['is_discard'=>1,'is_paid'=>2,'room_id'=>$data['room_id'],'order_type'=>$numberInfo['charge_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $this->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            } else{
                $pay_where=['is_discard'=>1,'is_paid'=>2,'position_id'=>$data['position_id'],'order_type'=>$numberInfo['charge_type']];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $pay_where['project_id']=$getProjectArr;
                }
                $pay_order_info = $this->getInfo($pay_where,'project_id,service_start_time,service_end_time','service_end_time DESC,order_id DESC');
            }
            if (cfg('new_pay_order')==1&&!empty($pay_order_info)&& $pay_order_info['service_end_time']>100){
                if ($pay_order_info['project_id']!=$info['charge_project_id']){
                    throw new \think\Exception("当前房间的该类别下有其他项目的待缴账单，无法生成账单");
                }
                $postData['service_start_time'] = $pay_order_info['service_end_time']+1;
                $postData['service_start_time'] = strtotime(date('Y-m-d',$postData['service_start_time']));
                if($info['bill_create_set'] == 1){
                    $postData['service_end_time'] = $postData['service_start_time']+86400*$data['cycle']-1;
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
                        $postData['service_end_time'] =$tmp_service_end_time-1;
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
                            ['position_id','=',$data['position_id']],
                            ['order_type','=',$numberInfo['charge_type']],
                        ];
                    }else{
                        $where22=[
                            ['room_id','=',$data['room_id']],
                            ['order_type','=',$numberInfo['charge_type']],
                            ['position_id','=',0]
                        ];
                    }
                    $new_order_log = $this->getOrderLog($where22,true,'id DESC');
                    if(!empty($new_order_log)){
                        $last_order=$new_order_log;
                    }
                }
                if($last_order && $last_order['service_end_time']>100){
                    $postData['service_start_time'] = $last_order['service_end_time']+1;
                    $postData['service_start_time'] = strtotime(date('Y-m-d',$postData['service_start_time']));
                }elseif($data['order_add_time']){
                    $postData['service_start_time'] = strtotime($data['order_add_time']. ' 00:00:00');
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
            if ($info['fees_type']==2&&empty($info['unit_gage'])){
                $vacancy_info=$service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$data['room_id']],'housesize');
                if (!empty($vacancy_info)&&$vacancy_info['housesize']>0&&$info['fees_type']==2){
                    $info['charge_price']=$info['charge_price']*$vacancy_info['housesize'];
                }
            }elseif ($info['fees_type']==2&&!empty($info['unit_gage'])&&!empty($data['custom_value'])){
                $info['charge_price']=$info['charge_price']*$data['custom_value'];
            }
            if (!empty($data['end_time'])){
               $end_time=strtotime($data['end_time'].' 23:59:59');
                $cycle_c=$cycle_cc+1;
                if ($info['bill_create_set']==1){
                    $starttime=strtotime("+$cycle_c day",$postData['service_start_time']);
                }elseif($info['bill_create_set']==2){
                    $starttime=strtotime("+$cycle_cc month",$postData['service_start_time']);
                    $starttime=strtotime("+28 day",$starttime);
                }else{
                    $starttime=strtotime("+$cycle_c year",$postData['service_start_time']);
                }
               
                if($end_time>$starttime){
                    throw new \think\Exception("收费截止时间不能大于".date('Y-m-d',$starttime));
                }
              if ($end_time>$postData['service_end_time']){
                  $postData['service_end_time']=$end_time;
              }
            }
            //计算缴费时长
            if ($info['bill_create_set']==1){
                $time_c=$postData['service_end_time']-strtotime("+$cycle_cc day",$postData['service_start_time']);
            }elseif($info['bill_create_set']==2){
                $time_c=$postData['service_end_time']-strtotime("+$cycle_cc month",$postData['service_start_time']);
            }else{
                $time_c=$postData['service_end_time']-strtotime("+$cycle_cc year",$postData['service_start_time']);
            }
            $time_c=$time_c+1;
           
            if ($info['charge_valid_type']==1){
                //todo 收费总金额计算
                $days=ceil($time_c/86400);
                $price=$info['charge_price']*$days;
            }
            elseif($info['charge_valid_type']==2){
                $cycle_s=86400*30;
                $price=$info['charge_price']*($time_c/$cycle_s);
            }else{
                $cycle_s=86400*365;
                $price=$info['charge_price']*($time_c/$cycle_s);
            }
            $total_money=$info['charge_price']*$cycle_cc+$price;
            if($info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES && $parkingNum > 1) {
                $total_money = $total_money * intval($parkingNum);
            }
            if (!empty($digit_info)) {
                if ($postData['order_type'] == 'water' || $postData['order_type'] == 'electric' || $postData['order_type'] == 'gas') {
                    $postData['total_money'] = formatNumber($total_money, $digit_info['meter_digit'], $digit_info['type']);
                } else {
                    $postData['total_money'] = formatNumber($total_money, $digit_info['other_digit'], $digit_info['type']);
                }
            }else{
                $postData['total_money'] = formatNumber($total_money, 2, 1);
            }
            $postData['modify_money'] = $postData['total_money'];
            if(isset($contract_info['contract_time_start']) && $contract_info['contract_time_start'] > 1){
                if($postData['service_start_time'] < $contract_info['contract_time_start'] || $postData['service_start_time'] > $contract_info['contract_time_end']){
                    throw new \think\Exception("账单开始时间不在合同范围内");
                }
                if($postData['service_end_time'] < $contract_info['contract_time_start'] || $postData['service_end_time'] > $contract_info['contract_time_end']){
                    throw new \think\Exception("账单开始时间不在合同范围内");
                }
            }
        }
        if($info['type'] == 1){
            $postData['service_start_time'] = time();
            $postData['service_end_time'] = time();
        }
        $postData['unit_price'] = $info['charge_price'];
        if($info['fees_type'] == 4&&empty($data['position_id'])){
            throw new \think\Exception("该收费标准需绑定车位才能生成账单");
        }
        if($data['room_id']){
            $postData['room_id'] = $data['room_id'];
            $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$data['room_id']],['type','in','0,3'],['status','=',1]],'pigcms_id,name,phone');
            if($user_info){
                $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                $postData['name'] = $user_info['name']?$user_info['name']:'';
                $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
            }
        }
        if($data['position_id']){
            $service_house_village_parking = new HouseVillageParkingService();
            $postData['position_id'] = $data['position_id'];
            $bind_position = $service_house_village_parking->getBindPosition(['position_id'=>$postData['position_id']]);
            $user_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$bind_position['user_id']],'pigcms_id,name,phone,vacancy_id');
            if($user_info){
                $postData['pigcms_id'] = $user_info['pigcms_id']?$user_info['pigcms_id']:0;
                $postData['name'] = $user_info['name']?$user_info['name']:'';
                $postData['phone'] = $user_info['phone']?$user_info['phone']:'';
                $postData['room_id'] = $user_info['vacancy_id']?$user_info['vacancy_id']:0;
            }
            if($info['fees_type'] == 4){
                $car_info= $service_house_village_parking->getCar(['car_position_id'=>$postData['position_id']],'car_id,province,car_number,end_time');
                $postData['car_type'] = 'month_type';
                $postData['is_prepare'] = 2;
                $postData['car_number'] = !empty($car_info)?$car_info['province'].$car_info['car_number']:'';
                $postData['car_id'] = !empty($car_info)?$car_info['car_id']:0;
                $postData['service_month_num'] =$cycle?$cycle:1 ;
                $postData['service_start_time'] = strtotime(date('Y-m-d 00:00:00'));
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
        $service_house_new_cashier = new HouseNewCashierService();
        
        $unify_flage_id='110'.date('YmdHis').rand(100000,999999);
        $tmp_cycle=0;
        if(isset($data['per_one_order']) && $data['per_one_order']>0 && $info['bill_create_set']==2 && $data['cycle']>1){
            //月按月拆
            $tmp_cycle=$data['cycle'];
        }else if(isset($data['per_one_order']) && $data['per_one_order']>0 && $info['bill_create_set']==3){
            //年按月拆
            $tmp_cycle=$data['cycle']*12;
        }
        if($tmp_cycle>1){
            fdump_api(['postData'=>$postData,'tmp_cycle'=>$tmp_cycle],'sub_quick_call_0718',1);
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
                fdump_api(['addOrder','postData'=>$postData,'tmp_cycle'=>$tmp_cycle],'sub_quick_call_0718',1);
                $res = $service_house_new_cashier->addOrder($postData);
                if ($res>0){
                    $db_process_sub_plan = new ProcessSubPlan();
                    $arr = array();
                    $arr['param'] = serialize(array('order_id' =>$res));
                    $arr['plan_time'] = time()+$postData['expires']*3600;
                    $arr['space_time'] = 0;
                    $arr['add_time'] = time();
                    $arr['file'] = 'sub_quick_call';
                    $arr['time_type'] = 1;
                    $arr['unique_id'] = $res.'_sub_quick_call';
                    $arr['rand_number'] = mt_rand(1, max(cfg('sub_process_num'), 3));
                    $db_process_sub_plan->add($arr);
                }
            }
        }else{
            $res = $service_house_new_cashier->addOrder($postData);
            if ($res>0){
                $db_process_sub_plan = new ProcessSubPlan();
                $arr = array();
                $arr['param'] = serialize(array('order_id' =>$res));
                $arr['plan_time'] = time()+$postData['expires']*3600;
                $arr['space_time'] = 0;
                $arr['add_time'] = time();
                $arr['file'] = 'sub_quick_call';
                $arr['time_type'] = 1;
                $arr['unique_id'] = $res.'_sub_quick_call';
                $arr['rand_number'] = mt_rand(1, max(cfg('sub_process_num'), 3));
                fdump_api([$arr],'sub_quick_call_0718',1);
                $db_process_sub_plan->add($arr);
            }
        }
        return $res;
    }

    public function getQuickRuleInfo($data){
        $service_rule=new HouseNewChargeRuleService();
        $db_house_village_user_vacancy=new HouseVillageUserVacancy();
        $db_house_new_pay_order=new HouseNewPayOrder();
        $db_house_new_order_log=new HouseNewOrderLog();
        $rule_info=$service_rule->getRuleInfo($data['rule_id']);
        if ($rule_info && !is_array($rule_info)) {
            $rule_info = $rule_info->toArray();
        }
        //收费周期
        if (empty($data['cycle'])){
            $data['cycle']=1;
            $cycle=1;
        }else{
            $cycle=$data['cycle'];
        }

        if ($rule_info['charge_type']==2){
            //查询未缴账单
            $subject_id_arr = $this->getNumberArr(['charge_type'=>$rule_info['order_type'],'status'=>1],'id');
            if (!empty($subject_id_arr)){
                $getProjectArr=$this->getProjectArr(['subject_id'=>$subject_id_arr,'type'=>2,'status'=>1],'id');
            }
            if (!empty($data['room_id'])){
                $bindType = 1;
                $bindId   = $data['room_id'];
                if ($rule_info['fees_type']==2&&$rule_info['order_type']=='property'){
                    $vacancy_info=$db_house_village_user_vacancy->getOne(['pigcms_id'=>$data['room_id']],'housesize');
                    if (!empty($vacancy_info)&&$vacancy_info['housesize']>0){
                        $rule_info['charge_price']=$rule_info['charge_price']*$vacancy_info['housesize'];
                    }
                }elseif ($rule_info['fees_type']==2&&!empty($rule_info['unit_gage'])&&!empty($data['custom_value'])){
                    $rule_info['charge_price']=$rule_info['charge_price']*$data['custom_value'];
                }
                $where_order=[
                    'village_id'=>$data['village_id'],
                    'room_id'=>$data['room_id'],
                    'order_type'=>$rule_info['order_type'],
                    'is_paid'=>2,
                    'is_discard'=>1,
                ];
                $where_order_log=[
                    ['room_id','=',$data['room_id']],
                    ['order_type','=',$rule_info['order_type']],
                    ['project_id','=',$rule_info['charge_project_id']],
                    ['position_id','=',0]
                ];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $where_order['project_id']=$getProjectArr;
                }
           
            }else{
                $bindType = 2;
                $bindId   = $data['position_id'];
                $where_order=[
                    'village_id'=>$data['village_id'],
                    'position_id'=>$data['position_id'],
                    'order_type'=>$rule_info['order_type'],
                    'is_paid'=>2,
                    'is_discard'=>1,
                ];
                $where_order_log=[
                    ['order_type','=',$rule_info['order_type']],
                    ['project_id','=',$rule_info['charge_project_id']],
                    ['position_id','=',$data['position_id']]
                ];
                if (isset($getProjectArr)&&!empty($getProjectArr)){
                    $where_order['project_id']=$getProjectArr;
                }
            }

            $last_order = $this->getOrderLog($where_order_log,true,'id DESC');
            $order_info=$db_house_new_pay_order->get_one($where_order,'project_id,order_id,service_start_time,service_end_time');
            if (cfg('new_pay_order')==1&&!empty($order_info)&& $order_info['service_end_time']>100){
                if ($order_info['project_id']!=$rule_info['charge_project_id']){
                    throw new \think\Exception("当前房间的该类别下有其他项目的待缴账单，无法生成账单");
                }
                $rule_info['start_time'] = $order_info['service_end_time']+1;
                $rule_info['start_time'] = strtotime(date('Y-m-d',$rule_info['start_time']));
                if ($rule_info['charge_valid_type']==1){
                    $time=$order_info['service_end_time']+86400*$cycle;
                }elseif($rule_info['charge_valid_type']==2){
                    $time=strtotime("+$cycle month",$order_info['service_end_time']+1);
                }else{
                    $time=strtotime("+$cycle year",$order_info['service_end_time']+1);
                }
            }else{
                if($last_order && $last_order['service_end_time']>100){
                    $rule_info['start_time'] = $last_order['service_end_time']+1;
                    $rule_info['start_time'] = strtotime(date('Y-m-d',$rule_info['start_time']));
                    if ($rule_info['charge_valid_type']==1){
                        $time=$last_order['service_end_time']+86400*$cycle;
                    }elseif($rule_info['charge_valid_type']==2){
                        $time=strtotime("+$cycle month",$last_order['service_end_time']+1);
                    }else{
                        $time=strtotime("+$cycle year",$last_order['service_end_time']+1);
                    }
                }else{
                    if (!empty($data['start_time'])){
                        $rule_info['start_time']=strtotime($data['start_time'].' 00:00:00');
                    }else{
                        $rule_info['start_time']=$rule_info['charge_valid_time'];
                    }
                    if ($rule_info['charge_valid_type']==1){
                        $time=$rule_info['start_time']+86400*$cycle;
                    }elseif($rule_info['charge_valid_type']==2){
                        $time=strtotime("+$cycle month",$rule_info['start_time']);
                        //   $time=$rule_info['start_time']+30*86400*$cycle-1;
                    }else{
                        $time=strtotime("+$cycle year",$rule_info['start_time']);
                        //  $time=$rule_info['start_time']+365*86400*$cycle-1;
                    }
                }
                
            }
            
           
/*            if (empty($order_info)){

            $order_info = $db_house_new_pay_order->get_one($where_order,'order_id,service_start_time,service_end_time');
            if ($order_info && !is_array($order_info)) {
                $order_info = $order_info->toArray();
            }
            $order_info = $db_house_new_pay_order->get_one($where_order,'order_id,service_start_time,service_end_time');
            if ($order_info && !is_array($order_info)) {
                $order_info = $order_info->toArray();
            }
            if (empty($order_info)){

                if (!empty($data['room_id'])){
                    $where_log=[
                        'village_id'=>$data['village_id'],
                        'room_id'=>$data['room_id'],
                        'order_type'=>$rule_info['order_type'],
                    ];
                }else{
                    $where_log=[
                        'village_id'=>$data['village_id'],
                        'position_id'=>$data['position_id'],
                        'order_type'=>$rule_info['order_type'],
                    ];
                }
                $order_info=$db_house_new_order_log->getOne($where_log,'order_id,service_start_time,service_end_time');
                if ($order_info && !is_array($order_info)) {
                    $order_info = $order_info->toArray();
                }
            }
            if (!empty($order_info)){
                $rule_info['start_time']=$order_info['service_end_time']+1;
                if ($rule_info['charge_valid_type']==1){
                    $time=$order_info['service_end_time']+86400*$cycle;
                }elseif($rule_info['charge_valid_type']==2){
                    $time=strtotime("+$cycle month",$order_info['service_end_time']+1);
                }else{
                    $time=strtotime("+$cycle year",$order_info['service_end_time']+1);
                }
            }else{
                if (!empty($data['start_time'])){
                    $rule_info['start_time']=strtotime($data['start_time'].' 00:00:00');
                }else{
                    $rule_info['start_time']=$rule_info['charge_valid_time'];
                }
                if ($rule_info['charge_valid_type']==1){
                    $time=$rule_info['start_time']+86400*$cycle;
                }elseif($rule_info['charge_valid_type']==2){
                    $time=strtotime("+$cycle month",$rule_info['start_time']);
                  //   $time=$rule_info['start_time']+30*86400*$cycle-1;
                }else{
                    $time=strtotime("+$cycle year",$rule_info['start_time']);
                  //  $time=$rule_info['start_time']+365*86400*$cycle-1;
                }
            }*/
            //计算收费总金额的收费周期
            if ($rule_info['charge_valid_type']==1){
                $cycle_s=86400;
            }elseif($rule_info['charge_valid_type']==2){
                $cycle_s=30*86400;
            }else{
                $cycle_s=365*86400;
            }
            if (empty($data['cycle'])&&empty($data['end_time'])){
                if ($rule_info['charge_valid_type']==1){
                    $rule_info['pay_cycle']='1天';
                }elseif($rule_info['charge_valid_type']==2){
                    $rule_info['pay_cycle']='1月';
                }else{
                    $rule_info['pay_cycle']='1年';
                }
                $rule_info['pay_money']=$rule_info['charge_price'];
            }
            elseif(!empty($data['cycle'])&&empty($data['end_time'])){ 
                if ($rule_info['charge_valid_type']==1){
                    $rule_info['pay_cycle']=$data['cycle'].'天';
                }elseif($rule_info['charge_valid_type']==2){
                    $rule_info['pay_cycle']=$data['cycle'].'个月';
                }else{
                    $rule_info['pay_cycle']=$data['cycle'].'年';
                }
                $rule_info['pay_money']=$rule_info['charge_price']*$data['cycle'];
            }

            elseif(!empty($data['end_time'])&&!empty($rule_info['start_time'])){
               // print_r([$data['end_time'],$rule_info['start_time'],$cycle]);die;
                $data['end_time']=strtotime($data['end_time'].' 23:59:59');
                $cycle_c=$cycle+1;
                if ($rule_info['charge_valid_type']==1){
                    $starttime=strtotime("+$cycle_c day",$rule_info['start_time']);
                }elseif($rule_info['charge_valid_type']==2){
                    $starttime=strtotime("+$cycle month",$rule_info['start_time']);
                    $starttime=strtotime("+28 day",$starttime);
                }else{
                    $starttime=strtotime("+$cycle_c year",$rule_info['start_time']);
                }
                if($data['end_time']>$starttime){
                    throw new \think\Exception("收费截止时间不能大于".date('Y-m-d',$starttime)); 
                }
                //收费截止时间不能小于默认收费截止时间
               if ($data['end_time']<$time){
                   throw new \think\Exception("收费截止时间不能小于".date('Y-m-d',$time));
               }
               //计算缴费时长
                $time_c=$time_s=$data['end_time']-$rule_info['start_time'];

                if ($time_s>31536000){
                    $years=intval($time_s/31536000);
                    $time_s=$data['end_time']-strtotime("+$years year",$rule_info['start_time']);
                    if ($time_s<0){
                        $years=$years-1;
                        $time_s=$data['end_time']-strtotime("+$years year",$rule_info['start_time']);
                    }
                    $time_y= $time_s;
                }

                if($time_s>2592000){
                    $month=intval($time_s/2592000);
                    if(isset($years)){
                        $month1=$month+ $years*12;
                    }else{
                        $month1=$month;
                    }
                    $time_s=$data['end_time']-strtotime("+$month1 month",$rule_info['start_time']);
                     // print_r([$month,$time_y,$time_s,$data['end_time'],$order_info['service_end_time']]);die;
                    if ($time_s<0){
                        $month=$month-1;
                        if(isset($years)){
                            $month1=$month+ $years*12;
                        }else{
                            $month1=$month;
                        }
                        $time_s=$data['end_time']-strtotime("+$month1 month",$rule_info['start_time']);
                    }
                    $time_m=$time_s;
                }
                //  print_r([$years,$month,$time_y,$time_m,$time_s,$data['end_time'],$order_info['service_end_time'],strtotime("+$years year",$order_info['service_end_time']),strtotime("+$month month",$order_info['service_end_time'])]);die;
                $day=ceil($time_s/86400);
                $rule_info['pay_cycle']='';
                if (isset($years)&&!empty($years)){
                    $rule_info['pay_cycle']=$rule_info['pay_cycle'].$years.'年';
                }
                if (isset($month)&&!empty($month)){
                    $rule_info['pay_cycle']=$rule_info['pay_cycle'].$month.'个月';
                }
                if (isset($day)&&!empty($day)){
                    $rule_info['pay_cycle']=$rule_info['pay_cycle'].$day.'天';
                }
                if ($rule_info['charge_valid_type']==1){
                    //todo 收费总金额计算
                    $days=ceil($time_c/86400);
                    $rule_info['pay_money']=$rule_info['charge_price']*$days;
                }elseif($rule_info['charge_valid_type']==2){
                    $cycles=0;
                    if (isset($years)&&!empty($years)){
                       $cycles=$cycles+$years*12;
                    }
                    if (isset($month)&&!empty($month)){
                        $cycles=$cycles+$month;
                    }
                    $times=$data['end_time']-strtotime("+$cycles month",$rule_info['start_time']);
                    $price=$rule_info['charge_price']*($times/$cycle_s);
                    $rule_info['pay_money']=$rule_info['charge_price']*$cycles+$price;

                }else{
                    $cycles=0;
                    if (isset($years)&&!empty($years)){
                        $cycles=$years;
                    }
                    $times=$data['end_time']-strtotime("+$cycles year",$rule_info['start_time']);
                    $price=$rule_info['charge_price']*($times/$cycle_s);
                    $rule_info['pay_money']=$rule_info['charge_price']*$cycles+$price;
                }
            }
            else{
                $data['end_time']=strtotime($data['end_time'].' 23:59:59');
                //收费截止时间不能小于默认收费截止时间
                if ($data['end_time']<$time){
                    throw new \think\Exception("收费截止时间不能小于".date('Y-m-d',$time));
                }
                //计算缴费时长
                $time_c=$time_s=$data['end_time']-$rule_info['charge_valid_time'];
                if ($time_s>(365*86400)){
                    $years=intval($time_s/(365*86400));
                    $time_s=$data['end_time']-strtotime("+$years year",$rule_info['charge_valid_time']);
                    if ($time_s<0){
                        $years=$years-1;
                        $time_s=$data['end_time']-strtotime("+$years year",$rule_info['charge_valid_time']);
                    }
                    $time_y= $time_s;
                }
                if($time_s>(30*86400)){
                    $month=intval($time_s/(30*86400));
                    if(isset($years)){
                        $month1=$month+ $years*12;
                    }else{
                        $month1=$month;
                    }
                    $time_s=$data['end_time']-strtotime("+$month1 month",$rule_info['charge_valid_time']);
                    if ($time_s<0){
                        $month=$month-1;
                        if(isset($years)){
                            $month1=$month+ $years*12;
                        }else{
                            $month1=$month;
                        }
                        $time_s=$data['end_time']-strtotime("+$month1 month",$rule_info['charge_valid_time']);
                    }
                }
                $day=ceil($time_s/86400);
                $rule_info['pay_cycle']='';
                if (isset($years)&&!empty($years)){
                    $rule_info['pay_cycle']=$rule_info['pay_cycle'].$years.'年';
                }
                if (isset($month)&&!empty($month)){
                    $rule_info['pay_cycle']=$rule_info['pay_cycle'].$month.'个月';
                }
                if (isset($day)&&!empty($day)){
                    $rule_info['pay_cycle']=$rule_info['pay_cycle'].$day.'天';
                }
                if ($rule_info['charge_valid_type']==1){
                    //todo 收费总金额计算
                    $days=ceil($time_c/86400);
                    $rule_info['pay_money']=$rule_info['charge_price']*$days;
                }elseif($rule_info['charge_valid_type']==2){
                    $cycles=0;
                    if (isset($years)&&!empty($years)){
                        $cycles=$cycles+$years*12;
                    }
                    if (isset($month)&&!empty($month)){
                        $cycles=$cycles+$month;
                    }
                    $price=$rule_info['charge_price']*($time_s/$cycle_s);
                    $rule_info['pay_money']=$rule_info['charge_price']*$cycles+$price;

                }else{
                    $cycles=0;
                    if (isset($years)&&!empty($years)){
                        $cycles=$years;
                    }
                    $times=$data['end_time']-strtotime("+$cycles year",$rule_info['charge_valid_time']);
                    $price=$rule_info['charge_price']*($times/$cycle_s);
                    $rule_info['pay_money']=$rule_info['charge_price']*$cycles+$price;
                }
            }
            if (!empty($data['end_time'])){
                $rule_info['end_time']=date('Y-m-d',$data['end_time']);
            }else{
                $rule_info['end_time']=date('Y-m-d',($time-1));
            }
            if (!empty($rule_info['start_time'])){
                $rule_info['start_time']=date('Y-m-d',$rule_info['start_time']);
            }else{
                $rule_info['start_time']=date('Y-m-d',time());
            }
            
            
            $rule_info['ruleList'][]=[
                'title' => '缴费时长',
                'value' => $rule_info['pay_cycle'],
                'is_show'=> true
            ];
            
        }else{
            if (!empty($data['room_id'])) {
                $bindType = 1;
                $bindId = $data['room_id'];
            } else {
                $bindType = 2;
                $bindId   = $data['position_id'];
            }
            $rule_info['pay_money']=$rule_info['charge_price'];
        }
        // 处理车位数
        if(isset($bindType) && isset($bindId) && $rule_info['fees_type'] == newChargeConst::FEES_TYPE_NUMBER_OF_PARKING_SPACES) {
            $ruleHasParkNumInfo = (new HouseNewChargeRuleService())->getRuleHasParkNumInfo($bindId, $rule_info['id'], $bindType, $rule_info);
            if (empty($ruleHasParkNumInfo) || !isset($ruleHasParkNumInfo['parkingNum']) || intval($ruleHasParkNumInfo['parkingNum']) <= 0) {
                return api_output_error(1001,'计费模式为车位数量缺少车位数量，无法生成账单');
            }
            $parkingNum  = $ruleHasParkNumInfo['parkingNum'];
        } else {
            $parkingNum  = 1;
        }
        $rule_info['pay_money'] = $rule_info['pay_money'] * $parkingNum;
        if (intval($parkingNum) > 1) {
            $rule_info['ruleList'][]=[
                'title' => '车位数',
                'value' => intval($parkingNum),
                'is_show'=> true
            ];
        }
        
        $rule_info['ruleList'][]=[
            'title' => '收费总金额',
            'value' => round_number($rule_info['pay_money'],4).'元',
            'is_show'=> true
        ];
        if (!empty($data['room_id'])){
           $contract_time=$this->getContractTime($data['room_id']);
           if (empty($contract_time)){
               $rule_info['contract_time_start']=0;
               $rule_info['contract_time_end']=0;
           }else{
               $rule_info['contract_time_start']=date('Y-m-d',$contract_time['contract_time_start']);
               $rule_info['contract_time_end']=date('Y-m-d',$contract_time['contract_time_end']);
           }


        }
        return $rule_info;
    }
    

    /**
     * 查询当前的房间合同时间
     * @author:zhubaodi
     * @date_time: 2022/7/20 17:08
     */
    public function getContractTime($vacancy_id){
        $db_House_village_user_vacancy=new HouseVillageUserVacancy();
        $db_House_village_single=new HouseVillageSingle();
        $db_House_village_info=new HouseVillageInfo();
        //查房间的合同时间
        $vacancy_time=$db_House_village_user_vacancy->getOne(['pigcms_id' => $vacancy_id],'village_id,single_id,contract_time_start,contract_time_end');
        //$vacancy_time=D('House_village_user_vacancy')->field('village_id,single_id,contract_time_start,contract_time_end')->where(array('pigcms_id' => $vacancy_id))->find();
        $arr=[];
        if (!empty($vacancy_time)&&$vacancy_time['contract_time_start']>1){
            $arr['contract_time_start']=$vacancy_time['contract_time_start'];
            $arr['contract_time_end']=$vacancy_time['contract_time_end'];
            return $arr;
        }
        //楼栋的合同时间
        $single_time=$db_House_village_single->getOne(['id' => $vacancy_time['single_id']],'contract_time_start,contract_time_end');
       //  $single_time=D('House_village_single')->field('contract_time_start,contract_time_end')->where(array('id' => $vacancy_time['single_id']))->find();
        if (!empty($single_time)&&$single_time['contract_time_start']>1){
            $arr['contract_time_start']=$single_time['contract_time_start'];
            $arr['contract_time_end']=$single_time['contract_time_end'];
            return $arr;
        }
        //小区的合同时间
        $village_time=$db_House_village_info->getOne(['village_id' => $vacancy_time['village_id']],'contract_time_start,contract_time_end');
       //  $village_time=D('House_village_info')->field('contract_time_start,contract_time_end')->where(array('village_id' => $vacancy_time['village_id']))->find();
        if (!empty($village_time)&&$village_time['contract_time_start']>1){
            $arr['contract_time_start']=$village_time['contract_time_start'];
            $arr['contract_time_end']=$village_time['contract_time_end'];
            return $arr;
        }
        $arr['contract_time_start']=0;
        $arr['contract_time_end']=0;
        return $arr;
    }

    public function discardQuickCall($data){
        $db_house_new_pay_order=new HouseNewPayOrder();
        $where=[
            'order_id'=>$data['order_id'],
            'is_discard'=>1,
            'is_paid'=>2
        ];
        $now_time=time();
        $order_info=$db_house_new_pay_order->get_one($where,'order_id,add_time,expires');
        if (!empty($order_info)){
            $time=$order_info['add_time']+$order_info['expires']*3600;
            if($now_time>=$time){
                $arr=[
                    'is_discard'=>2,
                    'discard_reason'=>'快速生成账单到期未缴费，自动作废账单'
                ];
                $db_house_new_pay_order->saveOne($where,$arr);
            }
        }
        return true;
    }
    /**
     * 押金管理列表
     * @author:zhubaodi
     * @date_time: 2022/5/16 18:06
     */
    public function getDepositList($data){
        $db_house_new_deposit_log=new HouseNewDepositLog();
        $where['village_id']=$data['village_id'];
        $where['room_id']=$data['room_id'];
        $list=$db_house_new_deposit_log->getList($where,'*',$data['page'],$data['limit']);
        $count=$db_house_new_deposit_log->getCount($where);
        if (!empty($list)){
            $list=$list->toArray();
        }
        if (!empty($list)){
            foreach ($list as &$v){
                if ($v['type']==1){
                    $v['type_txt']='押金退款';
                }else if ($v['type']==2){
                    $v['type_txt']='押金抵扣';
                }

                if (!empty($v['add_time'])){
                    $v['add_time']=date('Y-m-d H:i:s',$v['add_time']);
                }
            }
        }

        $data1['count']=$count;
        $data1['limit']=$data['limit'];
        $data1['list']=$list;
        return $data1;
    }


    public function getDepositInfo($data){
        $db_house_new_deposit_log=new HouseNewDepositLog();
        $where['village_id']=$data['village_id'];
        $where['room_id']=$data['room_id'];
        $info=$db_house_new_deposit_log->get_one($where,'total_money,id');
        if (empty($info)){
            $info['total_money']=0;
            $info['id']=0;
        }
        if ($info['total_money']<0&& $info['id']>0){
            $info['total_money']=0;
            $db_house_new_deposit_log->save_one($where,['total_money'=>0]);
        }
        $info['pay_money']=$data['money']-(float)$info['total_money'];
         if ($info['pay_money']<=0){
             $info['pay_money']=0;
         }
        $info['pay_money']=get_number_format($info['pay_money'],2);
        return $info;
    }


    /**
     * 根据楼栋查单元列表
     * @author:zhubaodi
     * @date_time: 2022/5/27 10:12
     */
    public function getFloorList($data){
        $db_house_village_single= new HouseVillageSingle();
        $db_house_village_floor= new HouseVillageFloor();
        $db_house_village_user_vacancy= new HouseVillageUserVacancy();
        $db_house_new_pay_order= new HouseNewPayOrder();
        $where_single=[
            'village_id'=>$data['village_id'],
            'id'=>$data['single_id'],
            'status'=>1,
        ];
        $single_info=$db_house_village_single->getOne($where_single,'single_name,id');
        if (empty($single_info)){
            throw new \think\Exception("楼栋信息不存在！");
        }
        $field='floor_id,village_id,floor_name,single_id';
        $where_floor=[
            'village_id'=>$data['village_id'],
            'single_id'=>$data['single_id'],
            'status'=>1,
        ];
        $list = $db_house_village_floor->getList($where_floor,$field,'floor_id ASC');
        if (!$list || $list->isEmpty()) {
            throw new \think\Exception("当前楼栋无单元信息！");
        }
        $floor_count=$db_house_village_floor->getCount($where_floor);
        $where_room=[
            'village_id'=>$data['village_id'],
            'single_id'=>$data['single_id'],
            'status'=>[1,2,3],
        ];
        $room_count = $db_house_village_user_vacancy->getCount($where_room);
        $room_arr = $db_house_village_user_vacancy->getColumn($where_room,'pigcms_id');
        $room_area_count = $db_house_village_user_vacancy->getSum($where_room,'housesize');
        $where_room_null=[
            'village_id'=>$data['village_id'],
            'single_id'=>$data['single_id'],
            'status'=>[1,2,3],
            'user_status'=>2
        ];
        $room_null_count = $db_house_village_user_vacancy->getCount($where_room_null);
        if(!empty($room_arr)){
            $where_money['village_id']=$data['village_id'];
            $where_money['room_id']=$room_arr;
            $where_money['is_paid']=2;
            $where_money['is_discard']=1;
            $pay_money_sum=$db_house_new_pay_order->getSum($where_money);
        }else{
            $pay_money_sum=0;
        }
        $data_arr=[];
        $data_arr['list']= $list;
        $data_arr['pay_money_sum']= $pay_money_sum;
        $data_arr['room_count']= $room_count;
        $data_arr['room_in_count']=$room_count-$room_null_count ;
        $data_arr['room_null_count']=$room_null_count ;
        $data_arr['room_area_count']=$room_area_count ;
        $data_arr['floor_count']=$floor_count ;
        $data_arr['single_name']=$single_info['single_name'] ;
        return $list;
    }

    /**
     * 根据楼栋查单元列表
     * @author:zhubaodi
     * @date_time: 2022/5/27 10:46
     */
    public function getVacancyList($data){
        // 初始化 数据层
        $db_house_village_user_vacancy= new HouseVillageUserVacancy();
        $db_house_village_user_bind= new HouseVillageUserBind();
        $db_house_village_layer= new HouseVillageLayer();
        $db_house_new_pay_order= new HouseNewPayOrder();

        $where_layer=[
            'village_id'=>$data['village_id'],
            'single_id'=>$data['single_id'],
            'floor_id'=>$data['floor_id'],
            'status'=>1,
        ];
        $layer_list=$db_house_village_layer->getList($where_layer,'id,layer_name');
        if (!empty($layer_list)){
            $layer_list=$layer_list->toArray();
        }
        $db_house_property_digit_service = new HousePropertyDigitService();
        $db_house_village = new HouseVillage();
        $db_house_village_service = new HouseVillageService();
        $property_info=$db_house_village->getOne($data['village_id'],'property_id');
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$property_info['property_id']]);
        $singleArr=[];
        if (!empty($layer_list)){
            $singleName = ( new HouseVillageSingle())->getOne(['id'=>$data['single_id']],'single_name')['single_name'];
            $floorName = (new HouseVillageFloor())->getOne(['floor_id'=>$data['floor_id']],'floor_name')['floor_name'];
            $layerIds=array_column($layer_list,'id');
            $where=[
                ['village_id','=',$data['village_id']],
                ['single_id','=',$data['single_id']],
                ['floor_id','=',$data['floor_id']],
                ['layer_id','in',$layerIds],
                ['is_del','=',0],
                ['status','in',[1,2,3]],
            ];
            $vacancyList = $db_house_village_user_vacancy->getList1($where);
            
            if($vacancyList){
                $vacancyList=$vacancyList->toArray();
                $vacancyIds=array_column($vacancyList,'pigcms_id');
                $whereUser=[
                    ['village_id','=',$data['village_id']],
                    ['vacancy_id','in',$vacancyIds],
                    ['status','=',1],
                    ['type','in',[0,3]],
                ];
                $userList=$db_house_village_user_bind->getList($whereUser,'pigcms_id,village_id,vacancy_id,uid,name,phone');
            }
            foreach ($layer_list as $vv){
                $layer_data=[];
                $layer_data['level']=$vv['layer_name'];
                $roomList=[];
                if (!empty($vacancyList)){
                    foreach ($vacancyList as $v){
                        if($v['layer_id'] != $vv['id']){
                            continue;
                        }
                        $where_user=array();
                        $where_money=array();
                        $where_user['village_id']=$data['village_id'];
                        $where_user['vacancy_id']=$v['pigcms_id'];
                        $where_user['status']=1;
                        $user_count=$db_house_village_user_bind->getVillageUserNum($where_user);
                        $where_user['type']=[0,3];
                        $user_info=[];
                        if($userList){
                            foreach ($userList as $userVal){
                                if($userVal['village_id'] == $data['village_id'] && $userVal['vacancy_id'] == $v['pigcms_id']){
                                    $user_info=$userVal;
                                    break;
                                }
                            }
                        }
                        $where_money['village_id']=$data['village_id'];
                        $where_money['room_id']=$v['pigcms_id'];
                        $where_money['is_paid']=2;
                        $where_money['is_discard']=1;
                        $pay_money_sum=$db_house_new_pay_order->getSum($where_money);
                        $room=[];
                        $room['title']=$db_house_village_service->word_replce_msg(array('single_name'=>$singleName,'floor_name'=>$floorName,'layer'=>$vv['layer_name'],'room'=>$v['room']),$data['village_id']);
                        $room['bind_name']=isset($user_info['name'])?$user_info['name']:'';
                        if (isset($user_info['pigcms_id'])&&!empty($user_info['pigcms_id'])){
                            $room['pigcms_id']=$user_info['pigcms_id'];
                        }
                        $room['housesize']=$v['housesize'];
                        $room['key']=[$v['single_id'],$v['floor_id'],$v['layer_id'],$v['pigcms_id']];
                        if ($v['user_status']==1){
                            $room['status_txt']='自住';
                        }elseif ($v['user_status']==3){
                            $room['status_txt']='出租';
                        }else{
                            $room['status_txt']='空置';
                        }
                        if ($v['sell_status']==1){
                            $room['arrears_status']='居住';
                        }elseif ($v['sell_status']==3){
                            $room['arrears_status']='租赁';
                        }else{
                            $room['arrears_status']='出售';
                        }
                        if ($v['user_status']==1){
                            $room['pay_status_txt']='业主入住';
                            $room['pay_status']=1;
                        }elseif ($v['user_status']==2){
                            $room['pay_status_txt']='空置';
                            $room['pay_status']=2;
                        }elseif($v['user_status']==3){
                            $room['pay_status_txt']='租客入住';
                            $room['pay_status']=3;
                        }else{
                            $room['pay_status_txt']='无';
                            $room['pay_status']=3;
                        }

                        $room['roomProps']=[
                            ['key'=>'户主','value'=>isset($user_info['name'])?$user_info['name']:''],
                            ['key'=>'面积','value'=>$v['housesize'].'㎡'],
                            ['key'=>'人数','value'=>$user_count],
                            ['key'=>'用途','value'=>$room['arrears_status']],


                        ];
                        if ($pay_money_sum>0){
                            if(empty($digit_info)){
                                $pay_money_sum = formatNumber($pay_money_sum,2,1);
                            }else{
                                $pay_money_sum = formatNumber($pay_money_sum,$digit_info['other_digit'],$digit_info['type']);
                            }
                            $room['roomProps'][]=['key'=>'欠费金额','value'=>$pay_money_sum.'元'];
                        }
                        $roomList[]= $room;
                    }
                }
                $layer_data['roomList']=$roomList;
                $singleArr[]=$layer_data;
            }
        }

        return $singleArr;

    }



    /**
     *家属/租客绑定列表
     * @author:zhubaodi
     * @date_time: 2022/5/30 11:13
     */
    public function bind_list($data){
        $db_house_village_user_bind=new HouseVillageUserBind();
        $db_user=new User();
        $db_house_village_floor=new HouseVillageFloor();
        $db_house_village_user_attribute=new HouseVillageUserAttribute();
        $service_door=new DoorService();
        $pigcms_id = $data['pigcms_id'] ;
        $where=[
            ['parent_id','=',$pigcms_id],
            ['status','not in',[3,4]]
        ];
        $user_list =$db_house_village_user_bind->getLimitUserList($where);
        $parent_info=$db_house_village_user_bind->getSumBills(['pigcms_id'=>$pigcms_id]);
        $parent_info1=$db_user->getOne(['uid'=>$parent_info['uid']],'openid');
        if (!empty($parent_info1)){
            $parent_info['openid']=$parent_info1['openid'];
        }
        $door_control = $db_house_village_floor->getOne(['floor_id'=>$parent_info['floor_id']],'door_control');
         if (empty($door_control)) {
            $door_control_str = $parent_info['door_control'];
        }elseif ($parent_info['door_control'] == null) {
            $door_control_str = $door_control;
        }else{
            $door_control_str = $parent_info['door_control'].','.$door_control;
        }
        // 门禁卡到期时间
        if($data['owe_property_open_door'] == 1){
            if ($data['owe_property_open_door_day']) {
                $time = $parent_info['property_endtime']+$data['owe_property_open_door_day']*86400;
            }else{
                $time = $parent_info['property_endtime']+1576800000;
            }
        }else{
            $time = $parent_info['property_endtime'];
        }

        $parent_info['door_str'] = $service_door->convert($time,$door_control_str);
        // 业主属性
        $return =$db_house_village_user_attribute->getList(['village_id'=>$data['village_id']]);
        $attribute_list = array();
        if (!empty($return)){
            $return=$return->toArray();
        }
        if (!empty($return)){
            foreach ($return as $key => $value) {
                $attribute_list[$value['pigcms_id']] = $value['name'];
            }
        }
        if (!empty($user_list)){
            $user_list=$user_list->toArray();
        }
        $db_house_face_img=new HouseFaceImg();
        if (!empty($user_list)) {
            foreach ($user_list as &$row) {
                $row['attribute_name'] = isset($attribute_list[$row['attribute']]) ? $attribute_list[$row['attribute']] : '';
                if ($row['uid'] > 0) {
                    $where_img = [
                        ['uid', '=', $row['uid']],
                        ['status', 'in', [0, 3]],
                        ['img_url', '<>', ''],
                    ];
                    $row['face_num'] = $db_house_face_img->getCount($where_img);
                    if ($row['face_num'] > 0) {
                        $row['is_bind_face'] = true;
                    } else {
                        $row['is_bind_face'] = false;
                    }
                } else {
                    $row['is_bind_face'] = false;
                }
            }
        }
        $res=[];

        if (!empty($data['door_pwd'])){
            $res['door_pwd']=$service_door->pwd_convert($data['door_pwd']);
        }else{
            $res['door_pwd']='';
        }
        $res['door_sector']=$data['door_sector'];
        $res['user_list']=$user_list;
        $res['parent_info']=$parent_info;
       return $res;
    }


    public function material_list($data){
        $db_plugin_material_diy_value =new PluginMaterialDiyValue();
        $where['pigcms_id']=$data['pigcms_id'];
        $field='id, template_id, title, template_img, add_time, from, from_id, from_type, from_name, diy_tatus, diy_reason, check_time, write_time, uid';
        $list=$db_plugin_material_diy_value->getList($where,$field);
        if (!empty($list)){
            $list=$list->toArray();
        }
        if (!empty($list)){
            foreach ($list as &$val){
                if ($val['add_time']>0) {
                    $val['add_time_txt'] = date('Y-m-d H:i:s',$val['add_time']);
                }
                if ($val['last_time']>0) {
                    $val['last_time_txt'] = date('Y-m-d H:i:s',$val['last_time']);
                }
                if ($val['write_time']>0) {
                    $val['write_time_txt'] = date('Y-m-d H:i:s',$val['write_time']);
                }
                if ($val['check_time']>0) {
                    $val['check_time_txt'] = date('Y-m-d H:i:s',$val['check_time']);
                }
                if (isset($val['diy_tatus'])) {
                    $val['diy_tatus_txt'] = $this->diy_tatus_txt[$val['diy_tatus']];
                }
                if ($val['template_img']) {
                    $val['template_img_path'] = replace_file_domain($val['template_img']);
                }
            }
        }
        return $list;
    }


    public function write_file_list($data) {
        $db_plugin_material_diy_value =new PluginMaterialDiyValue();
        $db_plugin_material_diy_file =new PluginMaterialDiyFile();
        $where = array();
        $where['diy_id'] = $data['diy_id'];
        if ($where['diy_id']>0) {
            $diy_value_info = $db_plugin_material_diy_value->getOne(['id' => $where['diy_id']]);
        }

        $count = $db_plugin_material_diy_file->getCount($where);
        if (empty($order)) {
            $order = 'add_time DESC';
        }
        $list =$db_plugin_material_diy_file->getList($where,'*',$data['page'],$data['limit'],$data['order']);
        // 图片文件的后缀
        $image_exts = $this->image_exts;
        // 图片文件的所有类型
        $image_type = $this->image_type;
        if (empty($list)) {
            $list = array();
        } else {
            foreach ($list as &$val) {
                $val['is_image'] = false;
                if ($val['add_time']>0) {
                    $val['add_time_txt'] = date('Y-m-d H:i:s',$val['add_time']);
                }
                if ($val['last_time']>0) {
                    $val['last_time_txt'] = date('Y-m-d H:i:s',$val['last_time']);
                }
                if ($val['diy_value']) {
                    $val['diy_value'] = unserialize($val['diy_value']);
                }
                if ($val['file_url']) {
                    $val['file_url_path'] = replace_file_domain($val['file_url']);
                }
                if (in_array($val['file_type'], $image_type)) {
                    $val['is_image'] = true;
                }
                if (in_array($val['file_suffix'], $image_exts)) {
                    $val['is_image'] = true;
                }
                if ($diy_value_info && $diy_value_info['title']) {
                    $val['title'] = $diy_value_info['title'];
                }
            }
        }

        $data = array();
        $data['count'] = $count;
        $data['total_limit'] = $data['limit'];
        $data['list'] = $list;
        return $data;
    }

    public function write_remark_list($data) {
        $db_plugin_material_diy_remark =new PluginMaterialDiyRemark();
        $where = array();
        $where['diy_id'] = $data['diy_id'];
        $count =$db_plugin_material_diy_remark->getRemarkCount($where);
        if (empty($order)) {
            $order = 'add_time DESC';
        }
        $list =$db_plugin_material_diy_remark->getRemarkList($where,$data['page'],$data['limit'],'*',$data['order']);
        if (empty($list)) {
            $list = array();
        } else {
            foreach ($list as &$val) {
                if ($val['add_time']>0) {
                    $val['add_time_txt'] = date('Y-m-d H:i:s',$val['add_time']);
                }
            }
        }

        $data = array();
        $data['count'] = $count;
        $data['total_limit'] = $data['limit'];
        $data['list'] = $list;
        return $data;
    }

    public function template_write_detail($diy_id, $is_write=false, $is_api=false) {
        $db_plugin_material_diy_value =new PluginMaterialDiyValue();
        $where_diy = array(
            'id' => $diy_id
        );
        $diy_value_info =$db_plugin_material_diy_value->getOne($where_diy);
        if (empty($diy_value_info)) {
            throw new \think\Exception("获取对象不存在！");
        }

        // 解析下时间
        if ($diy_value_info['add_time']>0) {
            $diy_value_info['add_time_txt'] = date('Y-m-d H:i:s',$diy_value_info['add_time']);
        }
        if ($diy_value_info['last_time']>0) {
            $diy_value_info['last_time_txt'] = date('Y-m-d H:i:s',$diy_value_info['last_time']);
        }
        if ($diy_value_info['write_time']>0) {
            $diy_value_info['write_time_txt'] = date('Y-m-d H:i:s',$diy_value_info['write_time']);
        }
        if ($diy_value_info['check_time']>0) {
            $diy_value_info['check_time_txt'] = date('Y-m-d H:i:s',$diy_value_info['check_time']);
        }
        if (isset($diy_value_info['diy_tatus'])) {
            $diy_value_info['diy_tatus_txt'] = $this->diy_tatus_txt[$diy_value_info['diy_tatus']];
        }
        if ($diy_value_info['diy_value']) {
            $diy_value_info['diy_value'] = unserialize($diy_value_info['diy_value']);
            $zIndex_arr = [];
            foreach ($diy_value_info['diy_value'] as $key=>&$item) {
                $item['width'] = intval($item['width']);
                $item['height'] = intval($item['height']);
                $item['top'] = intval($item['top']);
                $item['left'] = intval($item['left']);
                $item['minw'] = intval($item['minw']);
                $item['minh'] = intval($item['minh']);
                if ($item['zIndex']>1000) {
                    $item['zIndex'] = ceil($item['zIndex']/10);
                } else {
                    $item['zIndex'] = intval($item['zIndex']);
                }
                $zIndex_arr[] = intval($item['zIndex']);
                if ($is_api) {
                    unset($diy_value_info['diy_value'][$key]['draggable']);
                    unset($diy_value_info['diy_value'][$key]['resizable']);
                    unset($diy_value_info['diy_value'][$key]['minw']);
                    unset($diy_value_info['diy_value'][$key]['minh']);
                    unset($diy_value_info['diy_value'][$key]['parentLim']);
                    unset($diy_value_info['diy_value'][$key]['backgroundColor']);
                    unset($diy_value_info['diy_value'][$key]['color']);
                    unset($diy_value_info['diy_value'][$key]['active']);
                    unset($diy_value_info['diy_value'][$key]['is_close']);
                    unset($diy_value_info['diy_value'][$key]['key_num']);
                    if (!in_array($item['type'],['mul_txt', 'txt', 'date_choose','time_choose'])) {
                        // 用户前端 不是单行文本、多行文本、日期选择的全部替换为单行文本
                        $item['type'] = 'txt';
                        $item['type_text'] = $this->template_type_arr[$item['type']];
                    }
                }
            }
            $zIndex_min = min($zIndex_arr);
            $diy_value_info['zIndex_min'] = $zIndex_min;
        }
        if ($diy_value_info['template_img'] && strpos($diy_value_info['template_img'],'/static/material_diy/img/') !== false) {
            $diy_value_info['template_img_path'] = C('config.site_url') . $diy_value_info['template_img'];
        } elseif ($diy_value_info['template_img']) {
            $diy_value_info['template_img_path'] = replace_file_domain($diy_value_info['template_img']);
        }

        if ($is_write && $diy_value_info['from'] == 'house' && $diy_value_info['from_id']>0) {
            $diy_value_info['template_type_arr'] = $this->template_type_arr;
        }
        if ($is_api) {
            $diy_value_info['is_write'] = false;
        } else {
            $diy_value_info['is_write'] = true;
        }

        return $diy_value_info;
    }


    public function setVacancyPayStatus($data){
        $db_house_village_user_vacancy= new HouseVillageUserVacancy();
        $room_info=$db_house_village_user_vacancy->getOne(['village_id'=>$data['village_id'],'pigcms_id'=>$data['room_id']],'pigcms_id');
        $res=0;
        if (!empty($room_info)){
            $res=$db_house_village_user_vacancy->saveOne(['village_id'=>$data['village_id'],'pigcms_id'=>$data['room_id']],['user_status'=>$data['pay_status']]);
        }
        return $res;
    }

    /**
     *查询自动生成账单结果列表
     * @author:zhubaodi
     * @date_time: 2022/7/21 18:10
     */
    public function getAutoOrderLogList($data){
        $db_house_new_auto_order_log=new HouseNewAutoOrderLog();
        $db_house_village_user_vacancy=new HouseVillageUserVacancy();
        $db_house_village_parking_position=new HouseVillageParkingPosition();
        $where=[];
        $where['village_id']=$data['village_id'];
        $where['rule_id']=$data['rule_id'];
        $count=$db_house_new_auto_order_log->getCount($where);
        $list=$db_house_new_auto_order_log->getList($where,'*',$data['page'],$data['limit']);
        if (!empty($list)){
            $list=$list->toArray();
        }
        if (!empty($list)){
            foreach ($list as &$v){
                $number = '';
                if (!empty($v['position_id'])) {
                    $position_num = $db_house_village_parking_position->getLists(['position_id' => $v['position_id']], 'pp.position_num,pg.garage_num', 0);
                    if (!empty($position_num)) {
                        $position_num = $position_num->toArray();
                        if (!empty($position_num)) {
                            $position_num1 = $position_num[0];
                            if (empty($position_num1['garage_num'])) {
                                $position_num1['garage_num'] = '临时车库';
                            }
                            $number = $position_num1['garage_num'] . $position_num1['position_num'];
                        }
                    }
                } elseif (!empty($v['room_id'])) {
                    $room = $db_house_village_user_vacancy->getLists(['pigcms_id' => $v['room_id']]);
                    if (!empty($room)) {
                        $room = $room->toArray();
                        if (!empty($room)) {
                            $room1 = $room[0];
                            $house_village_service=new HouseVillageService();
                            $number =$house_village_service->word_replce_msg(array('single_name'=>$room1['single_name'],'floor_name'=>$room1['floor_name'],'layer'=>$room1['layer_name'],'room'=>$room1['room']),$v['village_id']);
                            // $number = $room1['single_name'] . '栋' . $room1['floor_name'] . '单元' . $room1['layer_name'] . '层' . $room1['room'];
                        }
                    }
                }
                $v['numbers'] = $number;
                $v['time']=date('Y-m-d H:i:s',$v['add_time']);
                $v['status']=$v['status']==0?'正在操作中':($v['status']==1?'操作成功':'操作失败');
            }
        }
        $data1=[];
        $data1['count']=$count;
        $data1['list']=$list;
        $data1['total_limit']=$data['limit'];

        return $data1;
    }



    /**
     * 更新订单信息中业主信息
     * @author:zhubaodi
     * @date_time: 2022/10/8 10:48
     */
    public function updateOrderInfo($order_id){
        $db_house_new_pay_order=new HouseNewPayOrder();
        $db_house_village_user_bind=new HouseVillageUserBind();
        $where[]=[
            ['order_id','=',$order_id],
            ['pigcms_id','=',0],
            ['room_id','>',0],
            ['is_paid','=',2],
            ['is_discard','=',1],
        ];
        $order_info=$db_house_new_pay_order->get_one($where);
        if (empty($order_info)){
            return false;
        }
        $user_info=$db_house_village_user_bind->getOne(['vacancy_id'=>$order_info['room_id'],'type'=>[0,3],'status'=>1],'pigcms_id,name,phone');
        if (empty($user_info)){
            return false;
        }
        $res=$db_house_new_pay_order->saveOne($where,['pigcms_id'=>$user_info['pigcms_id'],'name'=>$user_info['name'],'phone'=>$user_info['phone']]);
        if ($res>0){
            return true;
        }
        return false;
    }

    /*
    * 不连表查询
    */
    public function getNewPayOrderList($whereArr,$fieldStr='*',$page=1,$limit=10,$orderBy='order_id DESC'){
        $db_house_new_pay_order=new HouseNewPayOrder();
        $rets=$db_house_new_pay_order->getNewPayOrderList($whereArr,$fieldStr,$page,$limit,$orderBy);
        return $rets;
    }
    
    public function getRoomUserBindByPosition($position_id=0,$village_id=0){
        $db_house_village_bind_position=new HouseVillageBindPosition();
        $roomUserBind=array();
        if($position_id>0 && $village_id>0){
            $bind_where=array();
            $bind_where[]=['bp.position_id','=',$position_id];
            $bind_where[]=['bp.village_id','=',$village_id];
            $bind_where[]=['ub.village_id','=',$village_id];
            $bind_where[]=['ub.status','=',1];
            $bind_where[]=['ub.vacancy_id','>',0];
            $field='ub.*';
            $user_bind_obj=$db_house_village_bind_position->getRoomUserBindByPosition($bind_where,$field);
            if($user_bind_obj && !$user_bind_obj->isEmpty()){
                $roomUserBind=$user_bind_obj->toArray();
            }
        }
        return $roomUserBind;
    }


    /**
     * 查询账单周期为年的账单列表
     * @author:zhubaodi
     * @date_time: 2023/2/14 17:40
     */
    public function getYearsOrderList($order_id){
        $house_new_pay_order=new HouseNewPayOrder();
        $order_info=$house_new_pay_order->getOne(['o.order_id'=>$order_id],'o.order_id,o.order_name,o.modify_money,o.service_month_num,o.service_give_month_num,o.service_start_time,o.service_end_time,r.id,r.charge_valid_type,r.bill_create_set');
        if (empty($order_info)){
            throw new \think\Exception("订单信息不存在");
        }
        if ($order_info['charge_valid_type']==1){
            throw new \think\Exception("账单周期是日模式，无法拆分账单");  
        }
        if($order_info['charge_valid_type']==3){
            //按年
            $order_info['service_month_num']=$order_info['service_month_num']*12;
        }
        if ($order_info['service_month_num']+$order_info['service_give_month_num']<=1){
            throw new \think\Exception("账单周期小于2，无法拆分账单");
        }
        $year=date('Y',$order_info['service_start_time']);
        $month=date('m',$order_info['service_start_time'])-1;
        $list=[];
        if ($order_info['service_month_num']+$order_info['service_give_month_num']>1){
            $list_money=round_number($order_info['modify_money']/($order_info['service_month_num']+$order_info['service_give_month_num']),2);
            for ($i=0;$i<($order_info['service_month_num']+$order_info['service_give_month_num']);$i++){
                $month=$month+1;
                if ($month>12){
                    $month=1;
                    $year=$year+1;
                }
                if (strlen($month)<2){
                    $month='0'.$month;
                }
                $list[$i]['title']=$year.'-'.$month;
                if (($i+1)==($order_info['service_month_num']+$order_info['service_give_month_num'])){
                    $list[$i]['money']=round_number(($order_info['modify_money']-($list_money*$i)),2);
                }else{
                    $list[$i]['money']=$list_money;
                }
            }
        }
        return ['list'=>$list,'title'=>$order_info['order_name']];
    }


    /**
     * 获取待缴账单的类别
     * @author:zhubaodi
     * @date_time: 2023/2/15 10:28
     */
    public function getOrderChargeTypeList($pigcms_id=0,$extra_data=array()){

        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_charge = new HouseNewChargeService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village = new HouseVillageService();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $bind_info=array();
        $village_id=0;
        if($extra_data && isset($extra_data['village_id']) && !empty($extra_data['village_id'])){
            $village_id=intval($extra_data['village_id']);
        }
        $uid=0;
        if($extra_data && isset($extra_data['uid']) && !empty($extra_data['summary_id'])){
            $uid=intval($extra_data['uid']);
        }
        $summary_id=0;
        if($extra_data && isset($extra_data['summary_id']) && !empty($extra_data['summary_id'])){
            $summary_id= intval($extra_data['summary_id']);
        }
        $vacancy_id=0;
        if($pigcms_id>1){
            $bind_info = $service_house_village_user_bind->getBindInfo(['pigcms_id'=>$pigcms_id],'vacancy_id,village_id');
            if (!empty($bind_info) && !$bind_info->isEmpty()){
                $bind_info=$bind_info->toArray();
                $village_id=$bind_info['village_id'];
                $vacancy_id=$bind_info['vacancy_id'];
            }else{
                $bind_info=array();
            }
        }
        if(empty($bind_info) && ($village_id<1 || $summary_id<1)){
            throw new \think\Exception("订单信息不存在！");
        }
        $address = '';
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'village_name');
        if($vacancy_id>0){
            $user_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$vacancy_id],'usernum,name,phone,single_id,floor_id,layer_id,pigcms_id,village_id');
            if($user_info) {
                $address = $service_house_village->getSingleFloorRoom($user_info['single_id'], $user_info['floor_id'], $user_info['layer_id'], $user_info['pigcms_id'], $user_info['village_id']);
            }
        }
        $res=[];
        $res['address'] = $village_info['village_name'].$address;
        $res['vacancy_id'] = $vacancy_id;
        $res['village_id'] = $village_id;
        $where = [];

        if($summary_id>0){
            $where[] = ['o.summary_id','=',$summary_id];
        }else{
            $where[] = ['o.room_id','=',$vacancy_id];
        }
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.order_type','<>','non_motor_vehicle'];
        $where[] = ['o.village_id','=',$village_id];
        $where[]=  ['o.check_status','<>',1];
        $field='o.order_id,o.position_id,o.summary_id,o.uid,n.id,n.charge_type';
        $data = $db_house_new_pay_order->getList($where, $field, 0);
        $charge_type=[];
        $charge_type_arr=[];
        if (!empty($data)){
           foreach ($data as $v){
               if (isset($charge_type[$v['charge_type']])){
                   $charge_type[$v['charge_type']][]=$v['order_id'];
                   continue ;
               }
               $charge_type[$v['charge_type']][]=$v['order_id'];
               $charge_type_arr[]=['key'=>$v['charge_type'],'value'=>$db_house_new_charge->charge_type[$v['charge_type']]];
           } 
        }
        $res['charge_type']=$charge_type_arr;
        $res['order_id']=$charge_type;
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $res['is_grapefruit_prepaid']=$is_grapefruit_prepaid;
        return $res;
    }




    /**
     * 获取待缴账单的项目列表
     * @author:zhubaodi
     * @date_time: 2023/2/15 10:28
     */
    public function getOrderProjectList($data){

        $db_house_new_pay_order = new HouseNewPayOrder();
        $vacancy_id=0;
        if(isset($data['vacancy_id']) && $data['vacancy_id']>0){
            $vacancy_id=$data['vacancy_id'];
        }
        $where = [];
       
        if(isset($data['summary_id']) && $data['summary_id']>0){
            $where[] = ['o.summary_id','=',$data['summary_id']];
        }else{
            $where[] = ['o.room_id','=',$vacancy_id];
        }
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.order_type','<>','non_motor_vehicle'];
        $where[] = ['o.village_id','=',$data['village_id']];
        $where[]=  ['o.check_status','<>',1];
        $where[]=  ['n.charge_type','=',$data['charge_type']];
        $field='o.order_id,o.summary_id,p.id,p.name';
        $list = $db_house_new_pay_order->getList($where, $field, 0);
        $project=[];
        $project_list=[];
        if (!empty($list)){
            foreach ($list as $v){
                if (isset($project[$v['id']])){
                    continue ;
                }
                $project[$v['id']]=$v['name'];
                $project_list[]=['key'=>$v['id'],'value'=>$v['name']];
            }
        }
        return $project_list;
    }


    /**
     * 获取待缴账单的收费标准列表
     * @author:zhubaodi
     * @date_time: 2023/2/15 10:28
     */
    public function getOrderRuleList($data){

        $db_house_new_pay_order = new HouseNewPayOrder();
        $vacancy_id=0;
        if(isset($data['vacancy_id']) && $data['vacancy_id']>0){
            $vacancy_id=$data['vacancy_id'];
        }
        $where = [];
        if(isset($data['summary_id']) && $data['summary_id']>0){
            $where[] = ['o.summary_id','=',$data['summary_id']];
        }else{
            $where[] = ['o.room_id','=',$vacancy_id];
        }
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.order_type','<>','non_motor_vehicle'];
        $where[] = ['o.village_id','=',$data['village_id']];
        $where[]=  ['o.check_status','<>',1];
        $where[]=  ['o.project_id','=',$data['project_id']];
        $field='o.order_id,o.summary_id,o.modify_money,o.project_id,r.id,r.charge_name';
        $data = $db_house_new_pay_order->getList($where, $field, 0,100,'o.order_id ASC');
        $rule=[];
        $rule_list=[];
        if (!empty($data)){
            foreach ($data as $v){
                if (isset($rule[$v['id']])){
                    $rule[$v['id']]=$rule[$v['id']]+$v['modify_money'];
                    continue ;
                }
                $rule[$v['id']]=$v['modify_money'];
                $rule_list[]=['key'=>$v['id'],'value'=>$v['charge_name']];
            }
            if (!empty($rule_list)){
                foreach ($rule_list as &$vv){
                    if (isset($rule[$vv['key']])){
                        $vv['money']= round_number($rule[$vv['key']],2);
                    }
                }
            }
        }
        return $rule_list;
    }

    /**
     * 根据收费标准获取待缴账单列表
     * @author:zhubaodi
     * @date_time: 2023/2/15 10:28
     */
    public function getChargeOrderList($data){

        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_charge_rule = new HouseNewChargeRule();
        $houseNewChargeProjectDb =new HouseNewChargeProject();
        $vacancy_id=0;
        if(isset($data['vacancy_id']) && $data['vacancy_id']>0){
            $vacancy_id=$data['vacancy_id'];
        }
        $where = [];
       
        if(isset($data['summary_id']) && $data['summary_id']>0){
            $where[] = ['summary_id','=',$data['summary_id']];
        }else{
            $where[] = ['room_id','=',$vacancy_id];
        }
        $where[] = ['is_discard','=',1];
        $where[] = ['is_paid','=',2];
        $where[] = ['order_type','<>','non_motor_vehicle'];
        $where[] = ['village_id','=',$data['village_id']];
        $where[]=  ['check_status','<>',1];
        $where[]=  ['project_id','=',$data['project_id']];
        //$where[]=  ['rule_id','=',$data['rule_id']];
        $field='order_id,pigcms_id,room_id,position_id,modify_money,rule_id,project_id,service_start_time,add_time,service_month_num,service_give_month_num';
        /**
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        if($is_grapefruit_prepaid==1){
            $field.=',unify_flage_id';
        }
        */
        $field.=',unify_flage_id';
        $list = $db_house_new_pay_order->getPayLists($where, $field, 0,100,'order_id ASC');
        $index=0;
        $order_index=0;
        $ruleOrder=array();
        if (!empty($list)){
            foreach ($list as &$v){
                $v['modify_money']=round_number($v['modify_money'],2);
                $v['order_index']=$order_index;
                $order_index++;
                if ($v['service_start_time']>100){
                    $v['title']=date('Y-m',$v['service_start_time']);
                }else{
                    $v['title']=date('Y-m',$v['add_time']);
                }
                $v['is_cycle']=2;
                $whereProjectWhere=array('id'=>$data['project_id']);
                $newChargeProject=$houseNewChargeProjectDb->getOne($whereProjectWhere,'id,type');
                if($newChargeProject && isset($newChargeProject['type'])){
                    $v['is_cycle']=intval($newChargeProject['type']);
                }
                /* 
                *之前功能不要了，先注释掉
                if($v['service_month_num']+$v['service_give_month_num']<=1){
                    $v['is_detail']=1; 
                }else{
                    $v['is_detail']=0;  
                }
                $charge_rule_obj=$db_house_new_charge_rule->getOne(['id'=>$v['rule_id']],'id,charge_valid_type,bill_create_set');
                if($charge_rule_obj && !$charge_rule_obj->isEmpty()){
                    if($charge_rule_obj['charge_valid_type']==3){
                        $v['is_detail']=0;
                    }else if($charge_rule_obj['charge_valid_type']==1){
                        $v['is_detail']=1;
                    }
                    if(isset($v['unify_flage_id']) && !empty($v['unify_flage_id'])){
                        $v['is_detail']=1;
                    }
                }
                */
                $v['is_detail']=1;
                if($data['rule_id']==$v['rule_id']){
                    $v['index']=$index;
                    $index++;
                    $ruleOrder[]=$v;
                }
               
            }
        }
        return $ruleOrder;
    }

    /**
     * 计算勾选的订单金额
     * @author:zhubaodi
     * @date_time: 2023/2/15 18:55
     */
    public function CalculateOrderTotal($data){
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_new_select_project_record=new HouseNewSelectProjectRecord();
        $vacancy_id=0;
        if(isset($data['vacancy_id']) && $data['vacancy_id']>0){
            $vacancy_id=$data['vacancy_id'];
        }
        $uid=0;
        if(isset($data['uid']) && $data['uid']>0){
            $uid=$data['uid'];
        }
        $where = [];
        if(isset($data['summary_id']) && $data['summary_id']>0){
            $where[] = ['o.summary_id','=',$data['summary_id']];
        }else{
            $where[] = ['o.room_id','=',$vacancy_id];
        }
        $where[] = ['o.is_discard','=',1];
        $where[] = ['o.is_paid','=',2];
        $where[] = ['o.order_type','<>','non_motor_vehicle'];
        $where[] = ['o.village_id','=',$data['village_id']];
        $where[]=  ['o.check_status','<>',1];
        $field='o.add_time,o.order_id,o.project_id,o.rate,o.total_money,o.order_type,o.modify_money,o.rule_id,o.service_month_num,o.service_give_month_num,r.charge_valid_type';
        
        $configCustomizationService=new ConfigCustomizationService();
        $is_grapefruit_prepaid=$configCustomizationService->getHzhouGrapefruitOrderJudge();
        $field.=',o.unify_flage_id';
        $charge=[];
        $charge1=[];
        //查询全部待缴账单
        $list1 = $db_house_new_pay_order->getList($where, $field, 0);
        $all_order_count=0;
        if (!empty($list1) && !$list1->isEmpty()){
            $list1=$list1->toArray();
            $all_order_count=count($list1);
            foreach ($list1 as $vv){
                $charge[$vv['order_type']][]=$vv['order_id'];
            }
        }
        $whereOr='';
        if (empty($data['all_checked'])){
            if (!empty($data['charge_type'])){
                if (is_array($data['charge_type'])){
                    $data['charge_type']=implode('","',$data['charge_type']);
                }
                $whereOr.= '`n`.`charge_type` in ("'.$data['charge_type'].'")';
            }
            if (!empty($data['order_id'])){
                if (is_array($data['order_id'])){
                    $data['order_id']=array_unique($data['order_id']);
                    $data['order_id']=implode(',',$data['order_id']);
                }
                if (!empty($whereOr)){
                    $whereOr.=' or ';
                }
                $whereOr.='`o`.`order_id` in ('.$data['order_id'].')';
            }
        }
        //根据条件查询待缴账单
        $list = $db_house_new_pay_order->getListOr($where,$whereOr, $field, 0);
        $discount_money=0;
        $total_money=0;
        $pay_money=0;
        $order_ids=[];
        $rule_month_num=[];
        $select_order_count=0;
        if (!empty($list)&& !$list->isEmpty()){
            $list= $list->toArray();
            $select_order_count=count($list);
            $where_record=[
                ['village_id','=',$data['village_id']],
                ['pigcms_id','=',$data['pigcms_id']],
                ['order_id','>',0],
            ];
            if(isset($data['summary_id']) && $data['summary_id']>0){
                $where_record[]=array('uid','=',$uid);
            }
            $record_list=$db_house_new_select_project_record->getList($where_record,'record_id');
            if (!empty($record_list) && !$record_list->isEmpty()){
                $db_house_new_select_project_record->del($where_record);
            }
            foreach ($list as $v){
                $order_ids[]=$v['order_id'];
                $charge1[$v['order_type']][]=$v['order_id'];
                if ($v['charge_valid_type']!=1 && $is_grapefruit_prepaid==1){
                    $month_num=$v['service_month_num']+$v['service_give_month_num'];
                    if(isset($v['unify_flage_id']) && !empty($v['unify_flage_id']) && $v['charge_valid_type']==3){
                        $month_num=$month_num/12;
                    }
                    if (isset($rule_month_num[$v['rule_id']])){
                        $rule_month_num[$v['rule_id']]['num']=$rule_month_num[$v['rule_id']]['num']+$month_num;
                        $rule_month_num[$v['rule_id']]['money']=$rule_month_num[$v['rule_id']]['money']+$v['modify_money'];
                    }else{
                        $rule_month_num[$v['rule_id']]['num']=$month_num;
                        $rule_month_num[$v['rule_id']]['money']=$v['modify_money'];
                    }
                }else{
                    $pay_money=$pay_money+$v['modify_money'];
                    $total_money=$total_money+$v['modify_money'];
                }
               $data_record=[
                   'village_id'=>$data['village_id'],
                   'pigcms_id'=>$data['pigcms_id'],
                   'project_id'=>$v['project_id'],
                   'year'=>date('Y',$v['add_time']),
                   'order_id'=>$v['order_id'],
                   'uid'=>$uid,
                   'add_time'=>time()
               ];
                $db_house_new_select_project_record->addOne($data_record);
            }
        }
        if(!empty($rule_month_num) && $is_grapefruit_prepaid==1){
            foreach ($rule_month_num as $key=>$rv){
                $rv['num']=round($rv['num'],2);
                $rv['num']=floor($rv['num']);
                $rv['num']=$rv['num']*1;
                $money_arr=$this->getChargePrepaidDiscount($key,$rv);
                $discount_money=$discount_money+$money_arr['discount_money'];
                $pay_money=$pay_money+$money_arr['pay_money'];
                $total_money=$total_money+$rv['money'];
            }
        }
        if ($all_order_count>0 && $all_order_count==$select_order_count){
           $all_checked=true; 
        }else{
            $all_checked=false;
        }
        $charge_type=[];
        if (!empty($charge)&&!empty($charge1)){
            foreach ($charge as $k=>$vc){
                if (isset($charge1[$k])&&count($vc)==count($charge1[$k])){
                    $charge_type[]= $k;
                }
            }
        }
        $pay_money=round_number($pay_money,2);
        $discount_money=round_number($discount_money,2);
        $total_money=round_number($total_money,2);
        return ['count'=>$select_order_count,'all_order_count'=>$all_order_count,'total_money'=>$total_money,'pay_money'=>$pay_money,'Discount_money'=>$discount_money,'all_checked'=>$all_checked,'charge_type'=>$charge_type,'order_id'=>$order_ids];
    }
    public function getOneChargeRule($whereArr=array(),$field='*'){
        $houseNewChargeRule=new HouseNewChargeRule();
        $oneInfoObj=$houseNewChargeRule->getOne($whereArr,$field);
        $oneChargeRule=array();
        if($oneInfoObj && !$oneInfoObj->isEmpty()){
            $oneChargeRule=$oneInfoObj->toArray();
        }
        return $oneChargeRule;
    }
    
    public function getChargePrepaidDiscount($rule_id,$data){
        $db_charge_prepaid_discount=new HouseNewChargePrepaidDiscount();
        $where=[];
        $where[]=['charge_rule_id','=',$rule_id];
        $where[]=['status','=',1];
        $where[]=['fid','>',0];
        $nowtime=time();
        $where[]=['expire_time','>',$nowtime];
        $listObj=$db_charge_prepaid_discount->getList($where,'*','num asc');
        $pay_money=$data['money'];
        $optimum='';
        if (!empty($listObj) && !$listObj->isEmpty()){
            $list=$listObj->toArray();
           // fdump_api(['data'=>$data,'list'=>$list],'000getChargePrepaidDiscount',1);
            //找最优 优惠
            $tcount=count($list);
            if($tcount==1 && $data['num']>=$list['0']['num']){
                $optimum=$list['0'];
            }else{
                foreach ($list as $k=>$v){
                    $nkey=$k+1;
                    if($data['num']>=$v['num'] && isset($list[$nkey]) && $data['num']<$list[$nkey]['num']){
                        $optimum=$v;
                    }elseif(!isset($list[$nkey]) && $data['num']>=$v['num']){
                        $optimum=$v;
                    }
                }
            }
            if(!empty($optimum)){
                $pay_money=round_number($optimum['rate']*$data['money']/100,2);
            }
        }
        $discount_money=$data['money']-$pay_money;
        $discount_money=$discount_money>0 ? $discount_money:0;
        $discount_money=round_number($discount_money,2);
        if(!empty($optimum) && is_array($optimum)){
            $optimum['discount_money']=$discount_money;  //折扣掉的钱
            $optimum['pre_pay_money']=$data['money'];  //原来的钱
            $optimum['pay_money']=$pay_money;  //折扣后要付的钱 
        }
        return ['total_money'=>$data['money'],'pay_money'=>$pay_money,'discount_money'=>$discount_money,'optimum'=>$optimum];
    }
    public function getVacancyUserInfo($village_id=0,$room_id=0){
        $service_house_village_user_vacancy=new HouseVillageUserVacancyService();
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
        $houseVillageService = new HouseVillageService();
        $user_info['room'] = $houseVillageService->getSingleFloorRoom($user_info['single_id'],$user_info['floor_id'],$user_info['layer_id'],$user_info['pigcms_id'],$user_info['village_id']);
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $bind_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$room_id],['type','in',[0,3]],['status','=',1],['name|phone|uid','<>','']],'pigcms_id,name,phone');
        if(empty($bind_info)){
            $bind_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$room_id],['type','in',[1,2]],['status','=',1],['name|phone|uid','<>','']],'pigcms_id,name,phone');
        }
        if($bind_info){
            $user_info['pigcms_id'] = $bind_info['pigcms_id'];
            $user_info['name'] = $bind_info['name'];
            $user_info['phone'] = $bind_info['phone'];
        }else{
            $user_info['pigcms_id']=0;
            $user_info['name'] = '';
            $user_info['phone'] = '';
        }
        return $user_info;
    }
}