<?php
/**
 * Created by PhpStorm.
 * 交易汇总
 * User: wanzy
 * DateTime: 2021/11/16 14:56
 */

namespace app\community\model\service;

use app\common\model\service\export\ExportService as BaseExportService;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseVillageParkingPosition;
use app\community\model\service\HousePropertyDigitService;
use app\community\model\service\HouseNewChargeService;
use app\community\model\db\HouseNewChargeProject;
use app\community\model\db\HouseNewChargeRule;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\db\ExportLog;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use app\traits\HouseListDatasExportOutTraits;
use think\Exception;

class HouseNewTransactionSummaryService
{
    use HouseListDatasExportOutTraits;
    public function HouseFeeSummaryList($where = [], $village_id = 0, $property_id = 0, $page = 1, $limit = 10, $group = 'room_id')
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $whereAll = [];
        if ($village_id) {
            $where[] = ['village_id', '=', $village_id];
            $whereAll[] = ['village_id', '=', $village_id];
        } elseif ($property_id) {
            $where[] = ['property_id', '=', $property_id];
            $whereAll[] = ['property_id', '=', $property_id];
        }
        $db_house_property_digit_service = new HousePropertyDigitService();
        /*
        $digit_info = $db_house_property_digit_service->get_one_digit(['property_id'=>$property_id]);
        if (isset($digit_info['other_digit']) && isset($digit_info['type'])) {
            $other_digit = $digit_info['other_digit'];
            $type = $digit_info['type'];
        } else {
            $other_digit = 2;
            $type = 1;
        }*/
        $other_digit = 2;
        $type = 1;
        if ($group == 'room_id') {
            $where[] = ['is_paid', '=', 1];
            $where[] = ['is_discard', '=', 1];
        }
        $other_whereArr = $where;
        $whereAll[] = ['is_paid', '=', 1];
        $whereAll[] = ['is_discard', '=', 1];
        $field = "order_id,uid,name,phone,order_type,order_name,sum(ROUND(total_money,{$other_digit})) as summaryTotalMoney,sum(ROUND(pay_money,{$other_digit})) as summaryPayMoney,sum(ROUND(refund_money,{$other_digit})) as summaryRefundMoney,property_id,village_id,room_id,rule_id,project_id";

        $listCount = $db_house_new_pay_order->HouseFeeSummaryList($where, 'uid,name', $group, 0);
        $count = count($listCount);
        $list = $db_house_new_pay_order->HouseFeeSummaryList($where, $field, $group, $page, $limit);
        if ($village_id) {
            $summaryInfo = $db_house_new_pay_order->HouseFeeSummaryList($whereAll, $field, 'village_id', 0);
            $searchSummaryInfo = $db_house_new_pay_order->HouseFeeSummaryList($where, $field, 'village_id', 0);
        } elseif ($property_id) {
            $summaryInfo = $db_house_new_pay_order->HouseFeeSummaryList($whereAll, $field, 'property_id', 0);
            $searchSummaryInfo = $db_house_new_pay_order->HouseFeeSummaryList($where, $field, 'village_id', 0);
        } else {
            $summaryInfo = [];
            $searchSummaryInfo = [];
        }
        if (!empty($summaryInfo)) {
            $summaryInfo = $summaryInfo->toArray();
            $summaryInfo = reset($summaryInfo);
        }
        if (!empty($searchSummaryInfo)) {
            $searchSummaryInfo = $searchSummaryInfo->toArray();
            $searchSummaryInfo = reset($searchSummaryInfo);
        }
        if (!empty($list)) {
            $list = $list->toArray();
        }
        if (!empty($list)) {
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $service_house_village = new HouseVillageService();
            $serviceHouseNewPorperty = new HouseNewChargeService();
            $charge_type_arr = $serviceHouseNewPorperty->charge_type;
            $houseNewChargeProject = new HouseNewChargeProject();
            $houseNewChargeRule = new HouseNewChargeRule();
            foreach ($list as &$item) {
                if (isset($charge_type_arr[$item['order_type']])) {
                    $item['order_name'] = $charge_type_arr[$item['order_type']];
                }
                $item['project_name'] = '';
                if ($item['project_id'] > 0) {
                    $projectWhere = array();
                    $projectWhere[] = ['id', '=', $item['project_id']];
                    $projectWhere[] = ['village_id', '=', $village_id];
                    $oneProject = $houseNewChargeProject->getOne($projectWhere, 'name');
                    if ($oneProject && !$oneProject->isEmpty()) {
                        $item['project_name'] = $oneProject['name'];
                    }
                }
                $item['rule_name'] = '';
                if ($item['rule_id'] > 0) {
                    $projectWhere = array();
                    $projectWhere[] = ['id', '=', $item['rule_id']];
                    $projectWhere[] = ['village_id', '=', $village_id];
                    $oneProject = $houseNewChargeRule->getOne($projectWhere, 'charge_name');
                    if ($oneProject && !$oneProject->isEmpty()) {
                        $item['rule_name'] = $oneProject['charge_name'];
                    }
                }


                if (isset($item['summaryTotalMoney'])) {
                    $item['summaryTotalMoney'] = $this->formatNumberFunction($item['summaryTotalMoney'], $other_digit, $type);
                }
                if (isset($item['summaryPayMoney'])) {
                    $item['summaryPayMoney'] = $this->formatNumberFunction($item['summaryPayMoney'], $other_digit, $type);
                }
                if (isset($item['summaryRefundMoney'])) {
                    $item['summaryRefundMoney'] = $this->formatNumberFunction($item['summaryRefundMoney'], $other_digit, $type);
                }
                $summaryActualMoney = 0;
                if (isset($item['summaryPayMoney']) && isset($item['summaryRefundMoney'])) {
                    $summaryActualMoney = $this->formatNumberFunction(((float)$item['summaryPayMoney'] - (float)$item['summaryRefundMoney']), $other_digit, $type);
                }
                $item['summaryActualMoney'] = $summaryActualMoney;

                if (isset($item['summaryTotalMoney']) && $item['summaryTotalMoney'] > 0) {
                    $item['summaryMoneyRate'] = ($item['summaryActualMoney'] / $item['summaryTotalMoney']) * 100;
                    $item['summaryMoneyRate'] = $this->formatNumberFunction($item['summaryMoneyRate'], $other_digit, $type) . '%';
                }
                $item['noPayTotalMoney'] = 0;
                $item['discountTotalMoney'] = 0; //折扣掉的钱
                if ($group == 'rule_id') {
                    $tmp_other_whereArr = $other_whereArr;
                    $tmp_other_whereArr[] = ['rule_id', '=', $item['rule_id']];
                    $tmp_other_whereArr[] = ['is_paid', '=', 2];
                    $item['noPayTotalMoney'] = $db_house_new_pay_order->getSum($tmp_other_whereArr, 'total_money');
                    $modify_money = $db_house_new_pay_order->getSum($tmp_other_whereArr, 'modify_money');
                    $tmp_other_whereArr = $other_whereArr;
                    $tmp_other_whereArr[] = ['rule_id', '=', $item['rule_id']];
                    $tmp_other_whereArr[] = ['is_paid', '=', 1];
                    $item['summaryPayMoney'] = $db_house_new_pay_order->getSum($tmp_other_whereArr, 'pay_money');
                    $item['summaryPayMoney'] = $this->formatNumberFunction($item['summaryPayMoney'], $other_digit, $type);
                    $item['noPayTotalMoney'] = $item['noPayTotalMoney'] > 0 ? $this->formatNumberFunction($item['noPayTotalMoney'], $other_digit, $type) : 0;
                    $item['discountTotalMoney'] = $item['summaryTotalMoney'] - $modify_money - $item['summaryPayMoney'];
                    $item['discountTotalMoney'] = $item['discountTotalMoney'] > 0 ? $item['discountTotalMoney'] : 0;
                    $item['discountTotalMoney'] = $this->formatNumberFunction($item['discountTotalMoney'], $other_digit, $type);
                    $item['totalAllMoney'] = $modify_money + $item['summaryPayMoney'];
                    if ($item['totalAllMoney'] > 0) {
                        $item['summaryMoneyRate'] = ($item['summaryPayMoney'] / $item['totalAllMoney']) * 100;
                        $item['summaryMoneyRate'] = $this->formatNumberFunction($item['summaryMoneyRate'], $other_digit, $type) . '%';
                    } else {
                        $item['summaryMoneyRate'] = '';
                    }
                }
                $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $item['room_id']], 'single_id,floor_id,layer_id,village_id');
                if ($vacancy_info) {
                    $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $item['room_id'], $vacancy_info['village_id']);
                } else {
                    $address = '';
                }
                if (!$item['name']) {
                    $item['name'] = '-';
                }
                if (!$item['phone']) {
                    $item['phone'] = '-';
                }
                $item['address'] = $address;
                $item['vacancy_info'] = $vacancy_info;
                if (!empty($item['phone'])) {
                    $item['phone'] = phone_desensitization($item['phone']);
                }
            }
            if (isset($searchSummaryInfo['summaryTotalMoney'])) {
                $searchSummaryInfo['summaryTotalMoney'] = $this->formatNumberFunction($searchSummaryInfo['summaryTotalMoney'], $other_digit, $type);
            }
            if (isset($searchSummaryInfo['summaryPayMoney'])) {
                $searchSummaryInfo['summaryPayMoney'] = $this->formatNumberFunction($searchSummaryInfo['summaryPayMoney'], $other_digit, $type);
            }
            if (isset($searchSummaryInfo['summaryRefundMoney'])) {
                $searchSummaryInfo['summaryRefundMoney'] = $this->formatNumberFunction($searchSummaryInfo['summaryRefundMoney'], $other_digit, $type);
            }
            if (isset($searchSummaryInfo['summaryTotalMoney']) && $searchSummaryInfo['summaryTotalMoney'] > 0) {
                $searchSummaryInfo['summaryMoneyRate'] = ($searchSummaryInfo['summaryPayMoney'] / $searchSummaryInfo['summaryTotalMoney']) * 100;
                $searchSummaryInfo['summaryMoneyRate'] = $this->formatNumberFunction($searchSummaryInfo['summaryMoneyRate'], $other_digit, $type) . '%';
            } else {
                $searchSummaryInfo['summaryMoneyRate'] = '0%';
            }

        } else {
            $summaryInfo['summaryTotalMoney'] = $searchSummaryInfo['summaryTotalMoney'] = 0;
            $summaryInfo['summaryPayMoney'] = $searchSummaryInfo['summaryPayMoney'] = 0;
            $summaryInfo['summaryRefundMoney'] = $searchSummaryInfo['summaryRefundMoney'] = 0;
            $summaryInfo['summaryMoneyRate'] = $searchSummaryInfo['summaryMoneyRate'] = '0%';
        }
        if (!empty($summaryInfo)) {
            if (isset($summaryInfo['summaryTotalMoney'])) {
                $summaryInfo['summaryTotalMoney'] = $this->formatNumberFunction($summaryInfo['summaryTotalMoney'], $other_digit, $type);
            }
            if (isset($summaryInfo['summaryPayMoney'])) {
                $summaryInfo['summaryPayMoney'] = $this->formatNumberFunction($summaryInfo['summaryPayMoney'], $other_digit, $type);
            }
            if (isset($summaryInfo['summaryRefundMoney'])) {
                $summaryInfo['summaryRefundMoney'] = $this->formatNumberFunction($summaryInfo['summaryRefundMoney'], $other_digit, $type);
            }
            if (isset($summaryInfo['summaryTotalMoney']) && $summaryInfo['summaryTotalMoney'] > 0) {
                $summaryInfo['summaryMoneyRate'] = ($summaryInfo['summaryPayMoney'] / $summaryInfo['summaryTotalMoney']) * 100;
                $summaryInfo['summaryMoneyRate'] = $this->formatNumberFunction($summaryInfo['summaryMoneyRate'], $other_digit, $type) . '%';
            } else {
                $summaryInfo['summaryMoneyRate'] = '0%';
            }
        }
        if ($group == 'rule_id') {
            $searchSummaryInfo['summaryTotalMoney'] = $db_house_new_pay_order->getSum($other_whereArr, 'total_money');
            $searchSummaryInfo['summaryTotalMoney'] = $this->formatNumberFunction($searchSummaryInfo['summaryTotalMoney'], $other_digit, $type);
            $tmp_other_whereArr = $other_whereArr;
            $tmp_other_whereArr[] = ['is_paid', '=', 1];
            $searchSummaryInfo['summaryPayMoney'] = $db_house_new_pay_order->getSum($tmp_other_whereArr, 'pay_money');
            $searchSummaryInfo['summaryPayMoney'] = $this->formatNumberFunction($searchSummaryInfo['summaryPayMoney'], $other_digit, $type);
            $tmp_other_whereArr = $other_whereArr;
            $tmp_other_whereArr[] = ['is_paid', '=', 2];
            $searchSummaryInfo['noPayTotalMoney'] = $db_house_new_pay_order->getSum($tmp_other_whereArr, 'total_money');
            $searchSummaryInfo['noPayTotalMoney'] = $this->formatNumberFunction($searchSummaryInfo['noPayTotalMoney'], $other_digit, $type);
            $modify_money = $db_house_new_pay_order->getSum($tmp_other_whereArr, 'modify_money');

            $searchSummaryInfo['discountTotalMoney'] = $searchSummaryInfo['summaryTotalMoney'] - $searchSummaryInfo['summaryPayMoney'] - $modify_money;
            $searchSummaryInfo['discountTotalMoney'] = $searchSummaryInfo['discountTotalMoney'] > 0 ? $searchSummaryInfo['discountTotalMoney'] : 0;
            $searchSummaryInfo['discountTotalMoney'] = $this->formatNumberFunction($searchSummaryInfo['discountTotalMoney'], $other_digit, $type);
            $searchSummaryInfo['moneyTotalRate'] = 0;
            if ($searchSummaryInfo['summaryTotalMoney'] && $searchSummaryInfo['summaryTotalMoney'] > 0) {
                $searchSummaryInfo['moneyTotalRate'] = ($searchSummaryInfo['summaryPayMoney'] / $searchSummaryInfo['summaryTotalMoney']) * 100;
                $searchSummaryInfo['moneyTotalRate'] = $this->formatNumberFunction($searchSummaryInfo['moneyTotalRate'], $other_digit, $type) . '%';
            }

        }
        $data = [];
        $data['summaryInfo'] = $summaryInfo;
        $data['pageSummaryInfo'] = $searchSummaryInfo;
        $data['total_limit'] = $limit;
        $data['list'] = $list;
        $data['count'] = $count ? $count : 0;
        return $data;
    }

    public function formatNumberFunction($number, $other_digit = 2, $type = 1)
    {
        if (function_exists('formatNumber')) {
            return formatNumber($number, $other_digit, $type);
        } else {
            return round_number($number);
        }
    }

    public function exportHouseVillageFeeRate($village_id = 0, $monthstart = 0, $monthend = 0)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $houseVillageUserBind = new HouseVillageUserBind();
        $houseVillageUserVacancy = new HouseVillageUserVacancy();
        $whereArr = array();
        $whereArr[] = array('ub.village_id', '=', $village_id);
        $whereArr[] = array('ub.vacancy_id', '>', 0);
        $whereArr[] = array('ub.type', 'in', array(0, 3));
        $whereArr[] = array('ub.status', '=', 1);
        $whereArr[] = array('uv.status', 'in', array(1, 3));
        $whereArr[] = array('uv.is_del', '=', 0);
        $whereArr[] = array('uv.village_id', '=', $village_id);
        $fieldStr = 'ub.vacancy_id,ub.name,ub.uid,ub.phone,ub.usernum as user_num,uv.usernum,uv.housesize';
        $uerBindVacancy = $houseVillageUserBind->getUserBindVacancyList($whereArr, $fieldStr);
        if ($uerBindVacancy && !$uerBindVacancy->isEmpty()) {
            $uerBindVacancyList = $uerBindVacancy->toArray();
            if ($uerBindVacancyList) {
                $excelData = array();
                $titleArr = ['物业编号', '姓名', '手机号', '面积', '应收金额', '实收金额', '欠费金额', '收缴率'];
                $all_modify_money = 0;
                $all_pay_money = 0;
                foreach ($uerBindVacancyList as $vv) {
                    $whereOrderArr = array();
                    $whereOrderArr[] = array('village_id', '=', $village_id);
                    $whereOrderArr[] = array('order_type', '=', 'property');
                    $whereOrderArr[] = array('room_id', '=', $vv['vacancy_id']);
                    $whereOrderArr[] = array('is_discard', '=', 1);
                    if ($monthstart > 0) {
                        $whereOrderArr[] = array('service_start_time', '>=', $monthstart);
                    }
                    if ($monthend > 0) {
                        $whereOrderArr[] = array('service_end_time', '<=', $monthend);
                    }
                    $modify_money = $db_house_new_pay_order->getSum($whereOrderArr, 'modify_money');
                    $modify_money = round($modify_money, 2);
                    $all_modify_money += $modify_money;
                    $whereOrderArr[] = array('pay_time', '>', 100);
                    $pay_money = $db_house_new_pay_order->getSum($whereOrderArr, 'pay_money');
                    $pay_money = round($pay_money, 2);
                    $all_pay_money += $pay_money;
                    $no_pay = $modify_money - $pay_money;
                    $no_pay = $no_pay > 0 ? round($no_pay, 2) : 0;
                    $rate = 0;
                    if ($modify_money > 0) {
                        $rate = $pay_money / $modify_money;
                    }
                    $rate = round($rate, 2);
                    $tmpArr = array('usernum' => $vv['usernum'] ? $vv['usernum'] : $vv['user_num']);
                    $tmpArr['name'] = $vv['name'];
                    $tmpArr['phone'] = $vv['phone'];
                    $tmpArr['housesize'] = $vv['housesize'];
                    $tmpArr['modify_money'] = $modify_money;
                    $tmpArr['pay_money'] = $pay_money;
                    $tmpArr['no_pay'] = $no_pay;
                    $tmpArr['rate'] = $rate;
                    $excelData[] = $tmpArr;
                }
                $filename = '物业费收缴率统计' . date('YmdHis');
                $tips = '2022-12至物业费收缴率统计';
                if ($monthstart > 0) {
                    $tips = date('Y-m');
                }
                $tips .= '至';
                if ($monthend > 0) {
                    $tips .= date('Y-m');
                } else {
                    $tips .= '今';
                }
                $tips .= '物业费收缴率统计';
                $datas = array('list' => $excelData);
                $datas['all_modify_money'] = $all_modify_money;
                $datas['all_pay_money'] = $all_pay_money;
                return $this->saveExcel($titleArr, $datas, $filename, $tips, 'feeRate');
            }
        }
        throw new \think\Exception("没有查找到数据！");
    }

    public function getOrderTableRuleList($village_id = 0, $pay_status = '')
    {
        $whereArr = array();
        $whereArr[] = array('village_id', '=', $village_id);
        $whereArr[] = array('rule_id', '>', 0);
        $whereArr[] = array('order_type', '<>', 'non_motor_vehicle');
        if ($pay_status == 'no_pay') {
            $whereArr[] = array('is_paid', '=', 2);
            $whereArr[] = array('is_discard', '=', 1);
        } else if ($pay_status == 'is_pay') {
            $whereArr[] = array('is_paid', '=', 1);
        }
        $returnArr = array('lists' => array(), 'count' => 0);
        $db_house_new_pay_order = new HouseNewPayOrder();
        $order_rules = $db_house_new_pay_order->getOrderByGroup($whereArr, 'rule_id,project_id', 'rule_id');
        if ($order_rules && !$order_rules->isEmpty()) {
            $order_rules = $order_rules->toArray();
            $ruleIds = array();
            foreach ($order_rules as $rvv) {
                $ruleIds[] = $rvv['rule_id'];
            }
            $ruleIds = array_unique($ruleIds);
            $houseNewChargeRuleDb = new HouseNewChargeRule();
            $ruleWhere = array();
            $ruleWhere[] = array('village_id', '=', $village_id);
            $ruleWhere[] = array('id', 'in', $ruleIds);
            $chargeRule = $houseNewChargeRuleDb->getList($ruleWhere, 'id,subject_id,charge_project_id,charge_name,status', 'id desc');
            if ($chargeRule && !$chargeRule->isEmpty()) {
                $chargeRule = $chargeRule->toArray();
                foreach ($chargeRule as $kkk => $crvv) {
                    if ($crvv['status'] == 4) {
                        $chargeRule[$kkk]['charge_name'] = $crvv['charge_name'] . '(已删除)';
                    }
                }
                $returnArr['count'] = count($chargeRule);
                $returnArr['lists'] = $chargeRule;
            }
            $returnArr['lists'][] = array('id' => 'qita', 'charge_name' => '其他');
        }
        return $returnArr;
    }

    public function getCarParkingById($position_id = 0, $village_id = 0)
    {
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $park_number = '';
        if ($position_id < 1) {
            return $park_number;
        }
        $whereArr = array('pp.position_id' => $position_id);
        if ($village_id > 0) {
            $whereArr['pp.village_id'] = $village_id;
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

    public function getSummaryByRoomAndRuleList($village_id = 0, $whereArr = array(), $pay_status = '', $page = 1, $limit = 10,$is_export=false)
    {
        $db_house_new_pay_order = new HouseNewPayOrder();
        $returnArr = array('lists' => array(), 'count' => 0, 'total_limit' => $limit + 1, 'rule_count' => 0);
        $field = 'order_id,uid,pigcms_id,name,phone,pay_bind_id,pay_bind_name,pay_bind_phone,room_id,position_id,modify_money,sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,pay_money,sum(ROUND(pay_money,2)) as all_pay_money,pay_amount_points,project_id,rule_id,car_type,car_number,service_start_time,service_end_time';
        if ($pay_status == 'no_pay') {
            $field = 'order_id,uid,pigcms_id,name,phone,pay_bind_id,pay_bind_name,pay_bind_phone,room_id,position_id,total_money,sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,late_payment_money,modify_money,pay_money,pay_amount_points,project_id,rule_id,car_type,car_number,service_start_time,service_end_time';
        } else if ($pay_status == 'is_pay') {
            $field = 'order_id,uid,pigcms_id,name,phone,pay_bind_id,pay_bind_name,pay_bind_phone,room_id,position_id,total_money,sum(ROUND(pay_money,2)) as all_pay_money,late_payment_money,modify_money,pay_money,refund_money,sum(ROUND(refund_money,2)) as all_refund_money,pay_amount_points,project_id,rule_id,car_type,car_number,service_start_time,service_end_time';
        }
        $order_rules = $this->getOrderTableRuleList($village_id, $pay_status);
        $order_rules_lists = $order_rules['lists'];
        $rule_order_arr = array();
        $sumOrder = array();
        $where_rule_id = 0;
        foreach ($whereArr as $wk => $wv) {
            if ($wv['0'] == 'rule_id') {
                $where_rule_id = $wv['2'];
            }
        }
        $exportTitle=array();
        if($is_export){
            $exportTitle[]='房间号/车位号';
            $exportTitle[]='业主';
            $exportTitle[]='电话';
            $exportTitle[]='计费开始时间';
            $exportTitle[]='计费结束时间';
        }
        if (!empty($order_rules_lists)) {
            $returnArr['rule_count'] = count($order_rules_lists);
            foreach ($order_rules_lists as $rvv) {
                $ruleWhereArr = $whereArr;
                $order_key = 'rule_' . $rvv['id'];
                $rule_order_arr[$order_key] = '0.00';
                $sumOrder[$order_key] = '0.00';
                if($is_export){
                    $exportTitle[]=$rvv['charge_name'];
                }
                if ($where_rule_id > 0 && $rvv['id'] == $where_rule_id) {
                    $tmpSumField = 'sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,sum(ROUND(pay_money,2)) as all_pay_money,sum(ROUND(refund_money,2)) as all_refund_money';
                    $sumOrderMoney = $db_house_new_pay_order->get_one($ruleWhereArr, $tmpSumField);
                    if ($sumOrderMoney && isset($sumOrderMoney['all_modify_money'])) {
                        $all_total_money = $sumOrderMoney['all_modify_money'] + $sumOrderMoney['all_late_payment_money'];
                        if ($pay_status == 'is_pay') {
                            $all_total_money = $sumOrderMoney['all_pay_money'] - $sumOrderMoney['all_refund_money'];;
                        }
                        $all_total_money = round_number($all_total_money);
                        $sumOrder[$order_key] = $all_total_money;
                    }
                } else if ($where_rule_id < 1 && !empty($rvv['id'])) {
                    if ($rvv['id'] == 'qita') {
                        $ruleWhereArr[] = array('rule_id', '<', 1);
                    } else {
                        $ruleWhereArr[] = array('rule_id', '=', $rvv['id']);
                    }
                    $tmpSumField = 'sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,sum(ROUND(pay_money,2)) as all_pay_money,sum(ROUND(refund_money,2)) as all_refund_money';
                    $sumOrderMoney = $db_house_new_pay_order->get_one($ruleWhereArr, $tmpSumField);
                    if ($sumOrderMoney && isset($sumOrderMoney['all_modify_money'])) {
                        $all_total_money = $sumOrderMoney['all_modify_money'] + $sumOrderMoney['all_late_payment_money'];
                        if ($pay_status == 'is_pay') {
                            $all_total_money = $sumOrderMoney['all_pay_money'] - $sumOrderMoney['all_refund_money'];
                        }
                        $all_total_money = round_number($all_total_money);
                        $sumOrder[$order_key] = $all_total_money;
                    }
                }
            }
        }
        if($is_export){
            $exportTitle[]='合计';
        }
        unset($order_rules_lists);
        $orders = $db_house_new_pay_order->getOrderByGroup($whereArr, $field, 'room_id,position_id,car_type,car_number', 'order_id DESC', $page, $limit);
        $exportData=array();
        if ($orders && !$orders->isEmpty()) {
            $orders = $orders->toArray();
            $count = $db_house_new_pay_order->getCount2ByGroup($whereArr, 'room_id,position_id,car_type,car_number');
            $returnArr['count'] = $count;
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $service_house_village = new HouseVillageService();
            foreach ($orders as $kk => $vv) {
                $tmpWhereArr = $whereArr;
                $vv = array_merge($vv, $rule_order_arr);
                $tmp_rule_order_arr=$rule_order_arr;
                $orders[$kk] = $vv;
                $address = '';
                if ($vv['position_id'] > 0) {
                    $address = $this->getCarParkingById($vv['position_id']);
                } elseif ($vv['room_id'] > 0) {
                    $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $vv['room_id']], 'single_id,floor_id,layer_id,village_id');
                    if ($vacancy_info) {
                        $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $vv['room_id'], $vacancy_info['village_id']);
                    }
                }
                $tmpWhereArr[] = array('room_id', '=', $vv['room_id']);
                $tmpWhereArr[] = array('position_id', '=', $vv['position_id']);
                if ($vv['car_type'] == 'month_type' && !empty($vv['car_number'])) {
                    $address = '月租车缴费【' . $vv['car_number'] . '】';
                    $tmpWhereArr[] = array('car_number', '=', $vv['car_number']);
                } elseif ($vv['car_type'] == 'stored_type' && !empty($vv['car_number'])) {
                    $address = '储值车缴费【' . $vv['car_number'] . '】';
                    $tmpWhereArr[] = array('car_number', '=', $vv['car_number']);
                } elseif ($vv['car_type'] == 'temporary_type' && !empty($vv['car_number'])) {
                    $address = '临时车缴费【' . $vv['car_number'] . '】';
                    $tmpWhereArr[] = array('car_number', '=', $vv['car_number']);
                }
                $orders[$kk]['address'] = $address;
                $orders[$kk]['service_start_time_str'] = '';
                if ($vv['service_start_time'] > 100) {
                    $orders[$kk]['service_start_time_str'] = date('Y-m-d', $vv['service_start_time']);
                }
                $orders[$kk]['service_end_time_str'] = '';
                if ($vv['service_end_time'] > 100) {
                    $orders[$kk]['service_end_time_str'] = date('Y-m-d', $vv['service_end_time']);
                }
                if ($pay_status == 'no_pay') {
                    $all_total_money = $vv['all_modify_money'] + $vv['all_late_payment_money'];
                    $orders[$kk]['all_total_money'] = round_number($all_total_money);
                    $rule_order_tmp = $db_house_new_pay_order->getOrderByGroup($tmpWhereArr, 'project_id,rule_id,sum(ROUND(modify_money,2)) as all_total_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,car_type,car_number,service_start_time,service_end_time', 'rule_id,car_type,car_number');
                    if ($rule_order_tmp && !$rule_order_tmp->isEmpty()) {
                        $rule_order_tmp = $rule_order_tmp->toArray();
                        foreach ($rule_order_tmp as $itemR) {
                            $order_key = 'rule_' . $itemR['rule_id'];
                            if ($itemR['rule_id'] < 1) {
                                $order_key = 'rule_qita';
                            }
                            if (!isset($vv[$order_key])) {
                                $order_key = 'rule_qita';
                            }
                            $rule_all_total_money = $itemR['all_total_money'] + $itemR['all_late_payment_money'];
                            $rule_all_total_money = round_number($rule_all_total_money);
                            $orders[$kk][$order_key] = $rule_all_total_money;
                            $tmp_rule_order_arr[$order_key]= $rule_all_total_money;
                        }
                    }
                } else if ($pay_status == 'is_pay') {
                    $all_total_money = $vv['all_pay_money'] - $vv['all_refund_money'];
                    $orders[$kk]['all_total_money'] = round_number($all_total_money);
                    $rule_order_tmp = $db_house_new_pay_order->getOrderByGroup($tmpWhereArr, 'project_id,rule_id,sum(ROUND(pay_money,2)) as all_total_money,sum(ROUND(refund_money,2)) as all_refund_money,car_type,car_number,service_start_time,service_end_time', 'rule_id,car_type,car_number');
                    if ($rule_order_tmp && !$rule_order_tmp->isEmpty()) {
                        $rule_order_tmp = $rule_order_tmp->toArray();
                        foreach ($rule_order_tmp as $itemR) {
                            $order_key = 'rule_' . $itemR['rule_id'];
                            if ($itemR['rule_id'] < 1) {
                                $order_key = 'rule_qita';
                            }
                            if (!isset($vv[$order_key])) {
                                $order_key = 'rule_qita';
                            }
                            $rule_all_total_money = $itemR['all_total_money'] - $itemR['all_refund_money'];
                            $rule_all_total_money = round_number($rule_all_total_money);
                            $orders[$kk][$order_key] = $rule_all_total_money;
                            $tmp_rule_order_arr[$order_key]= $rule_all_total_money;
                        }
                    }
                }
                $tmpstartWhereArr=$tmpWhereArr;
                $tmpstartWhereArr[] = array('service_start_time', '>', 100);
                $tmp_pay_order = $db_house_new_pay_order->get_one($tmpstartWhereArr, 'service_start_time,service_end_time', 'service_start_time ASC');
                if ($tmp_pay_order && !$tmp_pay_order->isEmpty() && isset($tmp_pay_order['service_start_time'])) {
                    $orders[$kk]['service_start_time_str'] = date('Y-m-d', $tmp_pay_order['service_start_time']);
                }
                $tmpEndWhereArr=$tmpWhereArr;
                $tmpEndWhereArr[] = array('service_end_time', '>', 100);
                $tmp_pay_order = $db_house_new_pay_order->get_one($tmpEndWhereArr, 'service_start_time,service_end_time', 'service_end_time desc');
                if ($tmp_pay_order && !$tmp_pay_order->isEmpty() && isset($tmp_pay_order['service_end_time'])) {
                    $orders[$kk]['service_end_time_str'] = date('Y-m-d', $tmp_pay_order['service_end_time']);
                }else{
                    $orders[$kk]['service_end_time_str']=$orders[$kk]['service_start_time_str'];
                }
                if($is_export){
                    $tmpArr=array();
                    $tmpArr['address']=$orders[$kk]['address'];
                    $tmpArr['name']=$orders[$kk]['name'];
                    $tmpArr['phone']=$orders[$kk]['phone'];
                    $tmpArr['service_start_time_str']=$orders[$kk]['service_start_time_str'];
                    $tmpArr['service_end_time_str']=$orders[$kk]['service_end_time_str'];
                    $tmpArr=array_merge($tmpArr,$tmp_rule_order_arr);
                    $tmpArr['all_total_money']= $orders[$kk]['all_total_money'];
                    $exportData[]=$tmpArr;
                }
            }
            $returnArr['lists'] = $orders;
            if($is_export){
                $returnArr['lists'] = $exportData;
            }
            unset($orders);
            unset($exportData);

            $tmpSumField = 'sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,sum(ROUND(pay_money,2)) as all_pay_money,sum(ROUND(refund_money,2)) as all_refund_money';
            $sumOrderMoney = $db_house_new_pay_order->get_one($whereArr, $tmpSumField);
            $all_total_money = 0;
            if ($sumOrderMoney && isset($sumOrderMoney['all_modify_money'])) {
                $all_total_money = $sumOrderMoney['all_modify_money'] + $sumOrderMoney['all_late_payment_money'];
                if ($pay_status == 'is_pay') {
                    $all_total_money = $sumOrderMoney['all_pay_money'] - $sumOrderMoney['all_refund_money'];;
                }
                $all_total_money = round_number($all_total_money);
            }
            
            if($is_export){
                $tmpAumOrder=array();
                $tmpAumOrder['address']='总条数：' . $count;
                $tmpAumOrder['name']='';
                $tmpAumOrder['phone']='';
                $tmpAumOrder['service_start_time_str']='';
                $tmpAumOrder['service_end_time_str']='';
                $tmpAumOrder=array_merge($tmpAumOrder,$sumOrder);
                $tmpAumOrder['all_total_money']= $all_total_money;
                $returnArr['lists'][] = $tmpAumOrder;
                unset($tmpAumOrder);
                $returnArr['export_title'] = $exportTitle;
            }else{
                $sumOrder['order_id'] = 0;
                $sumOrder['address'] = '总条数：' . $count;
                $sumOrder['name'] = '';
                $sumOrder['phone'] = '';
                $sumOrder['service_start_time_str'] = '';
                $sumOrder['service_end_time_str'] = '';
                $sumOrder['all_total_money'] = $all_total_money;
                $returnArr['lists'][] = $sumOrder;
            }
        }
        return $returnArr;
    }

    public function getSummaryByYearAndRuleList($village_id = 0, $whereArr = array(), $pay_status = '', $extraArr = array(), $page = 1, $limit = 10,$is_export=false)
    {
        $year_v = date('Y');
        $order_service_type = 0;
        if (isset($extraArr['year_v']) && $extraArr['year_v'] > 1970) {
            $year_v = $extraArr['year_v'];
        }
        if (isset($extraArr['order_service_type']) && $extraArr['order_service_type'] > 0) {
            $order_service_type = $extraArr['order_service_type'];
        }
        $returnArr = array('lists' => array(), 'count' => 0, 'total_limit' => $limit + 1);
        $db_house_new_pay_order = new HouseNewPayOrder();
        $order_rules = $db_house_new_pay_order->getOrderByGroup($whereArr, 'rule_id,project_id', 'rule_id');
        $ruleIds = array();
        $sumOrder = array();
        $where_rule_id = 0;
        foreach ($whereArr as $wk => $wv) {
            if ($wv['0'] == 'rule_id') {
                $where_rule_id = $wv['2'];
            }
        }
        if ($order_rules && !$order_rules->isEmpty()) {
            $order_rules = $order_rules->toArray();
            foreach ($order_rules as $rvv) {
                $ruleIds[] = $rvv['rule_id'];
            }
            $ruleIds = array_unique($ruleIds);
        }
        $exportTitle=array();
        $monthArr = array();
        if ($pay_status == 'no_pay') {
            $monthArr = array('month01_no_pay' => '0.00', 'month02_no_pay' => '0.00', 'month03_no_pay' => '0.00', 'month04_no_pay' => '0.00', 'month05_no_pay' => '0.00');
            $monthArr['month06_no_pay'] = '0.00';
            $monthArr['month07_no_pay'] = '0.00';
            $monthArr['month08_no_pay'] = '0.00';
            $monthArr['month09_no_pay'] = '0.00';
            $monthArr['month10_no_pay'] = '0.00';
            $monthArr['month11_no_pay'] = '0.00';
            $monthArr['month12_no_pay'] = '0.00';
            $exportTitle[]='收费标准名称';
            $exportTitle[]='一月欠费';
            $exportTitle[]='二月欠费';
            $exportTitle[]='三月欠费';
            $exportTitle[]='四月欠费';
            $exportTitle[]='五月欠费';
            $exportTitle[]='六月欠费';
            $exportTitle[]='七月欠费';
            $exportTitle[]='八月欠费';
            $exportTitle[]='九月欠费';
            $exportTitle[]='十月欠费';
            $exportTitle[]='十一月欠费';
            $exportTitle[]='十二月欠费';
            $exportTitle[]='合计';
            $sumOrder['charge_name'] = '合计';
            $sumOrder = array_merge($sumOrder, $monthArr);
        } else if ($pay_status == 'is_pay') {
            $monthArr = array('month01_is_pay' => '0.00','month01_refund'=>'0.00' ,'month02_is_pay' => '0.00','month02_refund'=>'0.00', 'month03_is_pay' => '0.00','month03_refund'=>'0.00');
            $monthArr['month04_is_pay'] = '0.00';
            $monthArr['month04_refund'] = '0.00';
            $monthArr['month05_is_pay'] = '0.00';
            $monthArr['month05_refund'] = '0.00';
            $monthArr['month06_is_pay'] = '0.00';
            $monthArr['month06_refund'] = '0.00';
            $monthArr['month07_is_pay'] = '0.00';
            $monthArr['month07_refund'] = '0.00';
            $monthArr['month08_is_pay'] = '0.00';
            $monthArr['month08_refund'] = '0.00';
            $monthArr['month09_is_pay'] = '0.00';
            $monthArr['month09_refund'] = '0.00';
            $monthArr['month10_is_pay'] = '0.00';
            $monthArr['month10_refund'] = '0.00';
            $monthArr['month11_is_pay'] = '0.00';
            $monthArr['month11_refund'] = '0.00';
            $monthArr['month12_is_pay'] = '0.00';
            $monthArr['month12_refund'] = '0.00';
            $exportTitle[]='收费标准名称';
            $exportTitle[]='一月收入';
            $exportTitle[]='一月退款';
            $exportTitle[]='二月收入';
            $exportTitle[]='二月退款';
            $exportTitle[]='三月收入';
            $exportTitle[]='三月退款';
            $exportTitle[]='四月收入';
            $exportTitle[]='四月退款';
            $exportTitle[]='五月收入';
            $exportTitle[]='五月退款';
            $exportTitle[]='六月收入';
            $exportTitle[]='六月退款';
            $exportTitle[]='七月收入';
            $exportTitle[]='七月退款';
            $exportTitle[]='八月收入';
            $exportTitle[]='八月退款';
            $exportTitle[]='九月收入';
            $exportTitle[]='九月退款';
            $exportTitle[]='十月收入';
            $exportTitle[]='十月退款';
            $exportTitle[]='十一月收入';
            $exportTitle[]='十一月退款';
            $exportTitle[]='十二月收入';
            $exportTitle[]='十二月退款';
            $exportTitle[]='合计收入';
            $exportTitle[]='合计退款';
            $sumOrder['charge_name'] = '合计';
            $sumOrder = array_merge($sumOrder, $monthArr);
        }
        $monthDataArr = array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12');
        $exportData=array();
        if ($ruleIds) {
            $houseNewChargeRuleDb = new HouseNewChargeRule();
            $ruleWhere = array();
            $ruleWhere[] = array('village_id', '=', $village_id);
            $ruleWhere[] = array('id', 'in', $ruleIds);
            $chargeRule = $houseNewChargeRuleDb->getList($ruleWhere, 'id,subject_id,charge_project_id,charge_name,status', 'id desc', $page, $limit);
            if ($chargeRule && !$chargeRule->isEmpty()) {
                $chargeRule = $chargeRule->toArray();
                foreach ($chargeRule as $kkk => $crvv) {

                    $crvv = array_merge($crvv, $monthArr);
                    $chargeRule[$kkk] = $crvv;
                    if ($crvv['status'] == 4) {
                        $chargeRule[$kkk]['charge_name'] = $crvv['charge_name'] . '(已删除)';
                    }
                    $year_all_total_money = 0;
                    $year_all_total_refund_money=0;
                    $tmpArr=array();
                    if($is_export){
                        $tmpArr['charge_name']=$chargeRule[$kkk]['charge_name'];
                        $tmpArr=array_merge($tmpArr, $monthArr);
                    }
                    foreach ($monthDataArr as $mvv) {
                        $tmpWhereArr = $whereArr;
                        $_start_time = strtotime($year_v . '-' . $mvv . '-01 00:00:00');
                        $tmp_time = strtotime($year_v . '-' . $mvv . '-01 10:10:00');
                        $last_day = date('t', $tmp_time);
                        $_end_time = strtotime($year_v . '-' . $mvv . '-' . $last_day . ' 23:59:59');
                        if($order_service_type == 0){
                            if ($pay_status == 'no_pay') {
                                $tmpWhereArr[] = ['add_time', '>=', $_start_time];
                                $tmpWhereArr[] = ['add_time', '<=', $_end_time];
                            }else{
                                $tmpWhereArr[] = ['pay_time', '>=', $_start_time];
                                $tmpWhereArr[] = ['pay_time', '<=', $_end_time];
                            }
                        }else if ($order_service_type == 1) {
                            //按开始时间
                            $tmpWhereArr[] = ['service_start_time', '>=', $_start_time];
                            $tmpWhereArr[] = ['service_start_time', '<=', $_end_time];

                        } elseif ($order_service_type == 2) {
                            //按结束时间
                            $tmpWhereArr[] = ['service_end_time', '>=', $_start_time];
                            $tmpWhereArr[] = ['service_end_time', '<=', $_end_time];
                        }

                        if ($where_rule_id > 0 && $crvv['id'] == $where_rule_id) {
                            $tmpSumField = 'sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,sum(ROUND(pay_money,2)) as all_pay_money,sum(ROUND(refund_money,2)) as all_refund_money';
                            $sumOrderMoney = $db_house_new_pay_order->get_one($tmpWhereArr, $tmpSumField);
                            if ($sumOrderMoney && isset($sumOrderMoney['all_modify_money'])) {
                                $all_total_money = $sumOrderMoney['all_modify_money'] + $sumOrderMoney['all_late_payment_money'];
                                $order_key = 'month' . $mvv . '_no_pay';
                                if ($pay_status == 'is_pay') {
                                    $order_key = 'month' . $mvv . '_is_pay';
                                    $order_refund_key ='month' . $mvv . '_refund';
                                    $all_total_money = $sumOrderMoney['all_pay_money'];
                                    $all_total_refund_money=$sumOrderMoney['all_refund_money'];
                                    $all_total_refund_money = round_number($all_total_refund_money);
                                    $chargeRule[$kkk][$order_refund_key] = $all_total_refund_money;
                                    if($is_export){
                                        $tmpArr[$order_refund_key]=$all_total_refund_money;
                                    }
                                    $year_all_total_refund_money += $all_total_refund_money;
                                }
                                $all_total_money = round_number($all_total_money);
                                $year_all_total_money += $all_total_money;
                                $chargeRule[$kkk][$order_key] = $all_total_money;
                                if($is_export){
                                    $tmpArr[$order_key]=$all_total_money;
                                }
                            }
                        } else if ($where_rule_id < 1 && !empty($crvv['id'])) {
                            $tmpWhereArr[] = array('rule_id', '=', $crvv['id']);
                            $tmpSumField = 'sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,sum(ROUND(pay_money,2)) as all_pay_money,sum(ROUND(refund_money,2)) as all_refund_money';
                            $sumOrderMoney = $db_house_new_pay_order->get_one($tmpWhereArr, $tmpSumField);
                            if ($sumOrderMoney && isset($sumOrderMoney['all_modify_money'])) {
                                $all_total_money = $sumOrderMoney['all_modify_money'] + $sumOrderMoney['all_late_payment_money'];
                                $order_key = 'month' . $mvv . '_no_pay';
                                if ($pay_status == 'is_pay') {
                                    $order_key = 'month' . $mvv . '_is_pay';
                                    $order_refund_key ='month' . $mvv . '_refund';
                                    $all_total_money = $sumOrderMoney['all_pay_money'];
                                    $all_total_refund_money=$sumOrderMoney['all_refund_money'];
                                    $all_total_refund_money = round_number($all_total_refund_money);
                                    $chargeRule[$kkk][$order_refund_key] = $all_total_refund_money;
                                    if($is_export){
                                        $tmpArr[$order_refund_key]=$all_total_refund_money;
                                    }
                                    $year_all_total_refund_money += $all_total_refund_money;
                                }
                                $all_total_money = round_number($all_total_money);
                                $year_all_total_money += $all_total_money;
                                $chargeRule[$kkk][$order_key] = $all_total_money;
                                if($is_export){
                                    $tmpArr[$order_key]=$all_total_money;
                                }
                            }
                        }
                    }
                    $year_all_total_money = round_number($year_all_total_money);
                    $chargeRule[$kkk]['all_total_money'] = $year_all_total_money;
                    $year_all_total_refund_money = round_number($year_all_total_refund_money);
                    $chargeRule[$kkk]['all_total_refund_money'] = $year_all_total_refund_money;
                    if($is_export){
                        $tmpArr['all_total_money']=$year_all_total_money;
                        if ($pay_status == 'is_pay') {
                            $tmpArr['all_total_refund_money']=$year_all_total_refund_money;
                        }
                        $exportData[]=$tmpArr;
                    }
                }
                $year_all_total_money = 0;
                $year_all_total_refund_money=0;
                if($where_rule_id < 1){
                    $whereArr[] = array('rule_id', 'in', $ruleIds);
                }
                foreach ($monthDataArr as $mvv) {
                    $tmpWhereArr = $whereArr;
                    $_start_time = strtotime($year_v . '-' . $mvv . '-01 00:00:00');
                    $tmp_time = strtotime($year_v . '-' . $mvv . '-01 10:10:00');
                    $last_day = date('t', $tmp_time);
                    $_end_time = strtotime($year_v . '-' . $mvv . '-' . $last_day . ' 23:59:59');
                    if($order_service_type == 0){
                        if ($pay_status == 'no_pay') {
                            $tmpWhereArr[] = ['add_time', '>=', $_start_time];
                            $tmpWhereArr[] = ['add_time', '<=', $_end_time];
                        }else{
                            $tmpWhereArr[] = ['pay_time', '>=', $_start_time];
                            $tmpWhereArr[] = ['pay_time', '<=', $_end_time];
                        }
                    }else if ($order_service_type == 1) {
                        //按开始时间
                        $tmpWhereArr[] = ['service_start_time', '>=', $_start_time];
                        $tmpWhereArr[] = ['service_start_time', '<=', $_end_time];

                    } elseif ($order_service_type == 2) {
                        //按结束时间
                        $tmpWhereArr[] = ['service_end_time', '>=', $_start_time];
                        $tmpWhereArr[] = ['service_end_time', '<=', $_end_time];
                    }

                    $tmpSumField = 'sum(ROUND(modify_money,2)) as all_modify_money,sum(ROUND(late_payment_money,2)) as all_late_payment_money,sum(ROUND(pay_money,2)) as all_pay_money,sum(ROUND(refund_money,2)) as all_refund_money';
                    $sumOrderMoney = $db_house_new_pay_order->get_one($tmpWhereArr, $tmpSumField);
                    if ($sumOrderMoney && isset($sumOrderMoney['all_modify_money'])) {
                        $all_total_money = $sumOrderMoney['all_modify_money'] + $sumOrderMoney['all_late_payment_money'];
                        $order_key = 'month' . $mvv . '_no_pay';
                        if ($pay_status == 'is_pay') {
                            $order_key = 'month' . $mvv . '_is_pay';
                            $order_refund_key ='month' . $mvv . '_refund';
                            $all_total_money = $sumOrderMoney['all_pay_money'];
                            $all_total_refund_money=$sumOrderMoney['all_refund_money'];
                            $all_total_refund_money = round_number($all_total_refund_money);
                            $sumOrder[$order_refund_key] = $all_total_refund_money;
                            $year_all_total_refund_money += $all_total_refund_money;
                        }
                        $all_total_money = round_number($all_total_money);
                        $year_all_total_money += $all_total_money;
                        $sumOrder[$order_key] = $all_total_money;
                    }

                }
                
                $year_all_total_money = round_number($year_all_total_money);
                $sumOrder['all_total_money'] = $year_all_total_money;
                $year_all_total_refund_money = round_number($year_all_total_refund_money);
                $sumOrder['all_total_refund_money'] = $year_all_total_refund_money;
                $chargeRule[] = $sumOrder;
                if($is_export){
                    if ($pay_status == 'no_pay') {
                        unset($sumOrder['all_total_refund_money']);
                    }
                    $exportData[]=$sumOrder;
                }
                $returnArr['count'] = $houseNewChargeRuleDb->getCount($ruleWhere);
                $returnArr['lists'] = $chargeRule;
            }
        }
        $returnArr['year_v'] = $year_v;
        if($is_export){
            $returnArr['lists'] = $exportData;
            $returnArr['export_title'] = $exportTitle;
        }
        return $returnArr;
    }
    
    public function addExportLog($village_id=0,$param=array()){
        $exportLogDb=new ExportLog();
        $type='house_financial_statement';
        $title='小区财务报表统计数据导出';
        if(isset($param['export_type']) && !empty($param['export_type'])){
            $type=$param['export_type'];
        }
        if(isset($param['export_title']) && !empty($param['export_title'])){
            $title=$param['export_title'];
        }
        $paramStr=json_encode($param,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
        $addArr=array('type'=>$type,'param'=>$paramStr,'status'=>0,'dateline'=>time());
        $addArr['title']=$title;
        $export_id=$exportLogDb->addOneData($addArr);
        $retArr=array('export_id'=>$export_id);
        $queueData=$param;
        $queueData['export_id']=$export_id;
        $queueData['export_type']=$type;
        $this->exportExcelOutJob($queueData);
        return $retArr;
    }
    /**
     * 导出文件
     * @author:zhubaodi
     * @date_time: 2021/5/21 14:44
     */
    public function saveExcel($title, $data, $fileName, $tips = '', $exporttype = '')
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getDefaultColumnDimension()->setWidth(24);
        $sheet->getDefaultRowDimension()->setRowHeight(22);//设置行高
        $sheet->getRowDimension('1')->setRowHeight(25);//设置行高
        $mergeCellCoordinate = 'A1:Q1';
        if ($exporttype == 'feeRate') {
            $mergeCellCoordinate = 'A1:H1';
        }
        $sheet->getStyle($mergeCellCoordinate)->getFont()->setBold(true)->setSize(14);
        $sheet->mergeCells($mergeCellCoordinate); //合并单元格
        $sheet->getColumnDimension('A')->setWidth(32);
        $sheet->setCellValue('A1', $tips);

        //设置单元格内容
        $titCol = 'A';
        foreach ($title as $key => $value) {
            //单元格内容写入
            $sheet->setCellValue($titCol . '2', $value);
            $sheet->getStyle('A2:Ak2')->getFont()->setBold(true);
            $titCol++;
        }
        //设置单元格内容
        $row = 3;
        foreach ($data['list'] as $k => $item) {
            $dataCol = 'A';
            foreach ($item as $value) {
                //单元格内容写入
                $sheet->setCellValue($dataCol . $row, $value);
                $dataCol++;
            }
            $row++;
        }

        if ($exporttype == 'feeRate') {
            $mergeCellCoordinate = 'A' . $row . ':C' . $row;
            $sheet->mergeCells($mergeCellCoordinate); //合并单元格
            $sheet->setCellValue('A' . $row, '合计=>');
            $sheet->setCellValue('E' . $row, $data['all_modify_money']);
            $sheet->setCellValue('F' . $row, $data['all_pay_money']);
            $no_pay = $data['all_modify_money'] - $data['all_pay_money'];
            $no_pay = round($no_pay, 2);
            $sheet->setCellValue('G' . $row, $no_pay);
            $rate = $data['all_pay_money'] / $data['all_modify_money'];
            $rate = round($rate, 2);
            $sheet->setCellValue('H' . $row, $rate);
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

        if ($exporttype == 'feeRate') {
            $sheet->getStyle('A1:H' . $total_rows)->applyFromArray($styleArrayBody);
        } else {
            $sheet->getStyle('A1:AA' . $total_rows)->applyFromArray($styleArrayBody);
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
}