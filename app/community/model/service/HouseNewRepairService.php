<?php
/**
 * 物业工单
 * Created by PhpStorm.
 * User: lijie
 * DateTime: 2021/8/12 13:00
 */

namespace app\community\model\service;

use app\community\model\db\HouseNewChargeProject;
use app\community\model\db\HouseNewChargeRule;
use app\community\model\db\HouseNewOfflinePay;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseNewRepairCate;
use app\community\model\db\HouseNewRepairCateCustom;
use app\community\model\db\HouseNewRepairGraborderNoticeRecord;
use app\community\model\db\HouseNewRepairSubject;
use app\community\model\db\HouseNewRepairWorksOrder;
use app\community\model\db\HouseNewRepairWorksOrderTimely;
use app\community\model\db\HouseVillageInfo;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseWorker;
use app\community\model\db\HouseNewRepairWorksOrderLog;
use app\community\model\db\HouseNewRepairDirectorScheduling;
use app\community\model\db\HouseAdmin;
use app\community\model\db\ProcessSubPlan;
use app\community\model\db\PropertyAdmin;
use app\community\model\db\HouseVillagePublicArea;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\db\HouseVillage;
use app\community\model\db\PropertyGroup;
use app\community\model\db\HouseNewRepairCateGroupRelation;
use app\community\model\service\HouseVillageService;
use think\facade\Db;
use app\common\model\service\weixin\TemplateNewsService;
use app\community\model\db\User;
use app\common\model\service\UserService as commonUserService;
use app\traits\WorksOrderAutoEvaluateTraits;
use app\common\model\service\export\ExportService as BaseExportService;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use token\Token;

class HouseNewRepairService
{
    use WorksOrderAutoEvaluateTraits;
    //工单状态值对应中文
    public $order_status_txt = [
        '10'=> '待处理',
        '11'=> '待指派',// 工作人员 驳回给处理中心
        '14'=> '待指派',// 工作人员 拒绝
        '15'=> '待指派',// 工作人员 抢单中

        '20' => '已指派',
        '21' => '已指派',// 物业管理员指派
        '22' => '已指派',// 物业工作人员指派
        '23' => '已指派',// 小区管理员指派
        '24' => '已指派',// 工作人员转单指派
        '25' => '已指派',// 工作人员拒绝转单指派

        '30' => '处理中',
        '34' => '处理中', // 工作人员拒绝
        '35' => '处理中', // 工作人员添加收费项
        '36' => '处理中', // 用户同意收取工单费用

        '40' => '已办结',// 工作人员办结
        '41' => '已办结',// 物业管理员回复 办结
        '42' => '已办结',// 物业工作人员回复 办结
        '43' => '已办结',// 小区管理员回复 办结
        '44' => '已办结',// 线上支付 办结
        '45' => '已办结',// 线下已支付 办结

        '50' => '已撤回',
        '60' => '已关闭',
        '70' => '已评价'
    ];
    // 工作人员工单状态对应中文
    public $order_work_status_txt = [
        '10' => '待指派',
        '11' => '待指派(驳回)',// 工作人员 驳回给处理中心
        '14' => '待指派(拒绝)',// 工作人员 拒绝
        '15'=> '抢单中',// 工作人员 抢单中

        '20' => '已指派',
        '21' => '已指派',// 物业管理员指派
        '22' => '已指派',// 物业工作人员指派
        '23' => '已指派',// 小区管理员指派
        '24' => '转单',// 工作人员转单指派
        '25' => '已指派',// 工作人员拒绝转单指派

        '30' => '处理中',
        '34' => '处理中', // 工作人员拒绝
        '35' => '处理中', // 工作人员添加收费项
        '36' => '处理中', // 用户同意收取工单费用

        '40' => '已办结',// 工作人员办结
        '41' => '已办结',// 物业管理员回复 办结
        '42' => '已办结',// 物业工作人员回复 办结
        '43' => '已办结',// 小区管理员回复 办结
        '44' => '已办结',// 线上支付 办结
        '45' => '已办结',// 线下已支付 办结

        '50' => '已撤回',
        '60' => '已关闭',
        '70' => '已评价'
    ];

    // 用户端工单状态值对应中文
    public $order_user_status_txt = [
        '10'=> '处理中',
        '11'=> '处理中',// 工作人员 驳回给处理中心
        '14'=> '处理中',// 工作人员 拒绝
        '15'=> '处理中',// 工作人员 抢单中

        '20' => '处理中',
        '21' => '处理中',// 物业管理员指派
        '22' => '处理中',// 物业工作人员指派
        '23' => '处理中',// 小区管理员指派
        '24' => '处理中',// 工作人员转单指派
        '25' => '处理中',// 工作人员拒绝转单指派

        '30' => '处理中',
        '34' => '处理中', // 工作人员拒绝
        '35' => '处理中', // 工作人员添加收费项
        '36' => '处理中', // 用户同意收取工单费用

        '40' => '已办结',// 工作人员办结
        '41' => '已办结',// 物业管理员回复 办结
        '42' => '已办结',// 物业工作人员回复 办结
        '43' => '已办结',// 小区管理员回复 办结
        '44' => '已办结',// 线上支付 办结
        '45' => '已办结',// 线下已支付 办结

        '50' => '已撤回',
        '60' => '已关闭',
        '70' => '已评价'
    ];

    // 工单状态对应颜色
    public $order_status_color = [
        '10'=>'#FE3950',
        '11'=>'#FE3950',
        '14'=>'#FE3950',
        '15'=> '#26A6FF',

        '20' => '#00CC00',
        '21' => '#00CC00',
        '22' => '#00CC00',
        '23' => '#00CC00',
        '24' => '#00CC00',
        '25' => '#00CC00',

        '30' => '#26A6FF',
        '34' => '#26A6FF',
        '35' => '#26A6FF',
        '36' => '#26A6FF',

        '40' => '#787ADF',
        '41' => '#787ADF',
        '42' => '#787ADF',
        '43' => '#787ADF',
        '44' => '#787ADF',
        '45' => '#787ADF',

        '50' => '#06C1AE',
        '60' => '#CCCCCC',
        '70' => '#FFA112'
    ];
    // 对应操作动作
    public $log_name = [
        'user_submit' => '用户提交成功',
        'property_admin_submit' => '物业管理员提交成功',// 物业管理员提交成功
        'property_work_submit' => '物业工作人员提交成功',// 物业工作人员提交成功
        'house_admin_submit' => '小区管理员提交成功',// 小区管理员提交成功
        'house_work_submit' => '小区工作人员提交成功',// 小区工作人员提交成功
        'property_admin_assign' => '物业管理员指派',// 物业管理员指派
        'property_work_assign' => '物业工作人员指派',// 物业工作人员指派
        'house_admin_assign' => '小区管理员指派',// 小区管理员指派
        'house_auto_assign' => '自动指派',// 自动指派
        'property_admin_reply' => '物业管理员回复',// 物业管理员回复
        'property_work_reply' => '物业工作人员回复',// 物业工作人员回复
        'house_admin_reply' => '小区管理员回复',// 小区管理员回复
        'reopen' => '重新打开','agree' => '同意', 'recall' => '撤回', 'closed' => '关闭', 'evaluate' => '业主已评价',
        'work_reject_center' => '驳回给处理中心', 'work_follow_up' => '处理人员跟进', 'work_completed' => '处理人员结单',
        'work_change' => '处理人员转单', 'work_reject_change' => '被转单人员拒绝',
        'center_assign_work' => '处理中心指派', 'center_reply_submit' => '处理中心回复',
        'work_reject' => '拒绝',
        'work_assign' => '指派工作人员',
        'work_grab' => '工作人员抢单',
        'backstage_work_submit' => '后台添加工单',
    ];
    // 单独针对工作人员操作
    public $work_log = [
        'house_work_submit', 'work_reject_center', 'work_follow_up',
        'work_completed', 'work_change', 'work_reject_change',
        'work_reject',
        'backstage_work_submit'
    ];

    /**
     * 工单类目列表
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return \think\Collection
     * @author lijie
     * @date_time 2021/08/12
     */
    public function getRepairSubject($where = [], $field = true, $page = 1, $limit = 10, $order = 'id DESC')
    {
        $db_house_new_repair_subject = new HouseNewRepairSubject();
        $data = $db_house_new_repair_subject->getList($where,$field,$page,$limit,$order);
        if($data){
            foreach ($data as $k=>$v){
                if($v['subject_name'] == '在线报修'){
                    $data[$k]['type'] = 'online_repair';
                } else {
                    $data[$k]['type'] = '';
                }
            }
        }
        return $data;
    }

    /**
     * 工单处理数据
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return array
     * @author lijie
     * @date_time 2021/08/19
     */
    public function orderTongji($where = [], $field = true, $page = 1, $limit = 10, $order = 'id DESC')
    {
//        $db_house_new_repair_subject = new HouseNewRepairSubject();
//        $cat_list = $db_house_new_repair_subject->getList($where,$field,$page,$limit,$order)->toArray();
        $cat_list = (new HouseNewRepairCate())->getList($where,$field,$page,$limit,$order)->toArray();
        $todo_arr = [];
        $processing_arr = [];
        $processed_arr = [];
        $series = [];
        $legend = [];
        if ($cat_list) {
            if (count($cat_list) > 5) {
                //$cat_list = array_slice($cat_list, 0, 5);
            }
            $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
            foreach ($cat_list as $k=>$v){
                $todo_count = $db_house_new_repair_works_order->getCount(['o.village_id'=>$v['village_id'],'o.cat_fid'=>$v['category_id'],'o.event_status'=>10]);
                $processing_count = $db_house_new_repair_works_order->getCount([['o.village_id','=',$v['village_id']],['o.cat_fid','=',$v['category_id']],['o.event_status','in',[20,30]]]);
                $processed_count = $db_house_new_repair_works_order->getCount([['o.village_id','=',$v['village_id']],['o.cat_fid','=',$v['category_id']],['o.event_status','in',[40,60,70]]]);

                /*$todo_arr[$k]['cate_name'] = $v['subject_name'];
                $todo_arr[$k]['color'] = $v['color'];
                $todo_arr[$k]['count'] = $todo_count;
                $processing_arr[$k]['cate_name'] = $v['subject_name'];
                $processing_arr[$k]['color'] = $v['color'];
                $processing_arr[$k]['count'] = $processing_count;
                $processed_arr[$k]['cate_name'] = $v['subject_name'];
                $processed_arr[$k]['color'] = $v['color'];
                $processed_arr[$k]['count'] = $processed_count;*/
                $series[$k]['name'] = $v['subject_name'];
                $series[$k]['type'] = 'bar';
                $series[$k]['data'] = [$todo_count, $processing_count, $processed_count];
                $series[$k]['label'] = ["show" => true, "position" => "top", "distance" => 10, "fontSize" => 10, "color" => "#FFFFFF"];
                $series[$k]['itemStyle'] = ["color" => $v['color']];
                $legend[] = $v['subject_name'];
            }
        }
        return ['series' => $series, 'legend' => $legend, 'xAxis' => ['待处理', '处理中', '已处理']];
    }

    /**
     * 工单列表
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return mixed
     * @author lijie
     * @date_time 2021/08/12
     */
    public function getOrderList($where=[],$field=true,$page=1,$limit=10,$order='o.order_id DESC',$pigcms_id = 0,$roomIds = [],$source_type='')
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $db_house_new_repair_subject = new HouseNewRepairSubject();
        $db_repair_cate = new RepairCateService();
        $data = $db_house_new_repair_works_order->getList($where,$field,$page,$limit,$order,$pigcms_id,$roomIds);
        if($data){
            foreach ($data as $k=>$v){
                $data[$k]['add_time_txt'] = date('Y-m-d',$v['add_time']);
                if($source_type == 'village'){
                    $data[$k]['status_txt'] = $this->order_status_txt[$v['event_status']];
                }else{
                    $data[$k]['status_txt'] = $this->order_user_status_txt[$v['event_status']];
                }

                $data[$k]['color'] = $this->order_status_color[$v['event_status']];
                if (isset($v['address_type']) && $v['address_type'] == 'room') {
                    $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                    $service_house_village = new HouseVillageService();
                    $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $v['room_id']], 'village_id,single_id,floor_id,layer_id,pigcms_id');
                    $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $vacancy_info['pigcms_id'], $vacancy_info['village_id']);
                    $data[$k]['address_txt'] = $address;
                }
                if (isset($v['address_type']) && $v['address_type'] == 'public') {
                    $db_house_village_public_area = new HouseVillagePublicArea();
                    $public_info = $db_house_village_public_area->getOne(['public_area_id' => $v['public_id']], 'public_area_name');
                    $address = $public_info['public_area_name'];
                    $data[$k]['address_txt'] = $address;
                }
                $cate_name = '';
                /*if(isset($v['type_id'])){
                    $cate_info = $db_house_new_repair_cate->getOne(['id'=>$v['type_id'],'status'=>1],'cate_name');
                    $cate_name = $cate_info['cate_name'];
                }
                if (isset($v['cat_fid'])) {
                    $cate_info = $db_house_new_repair_cate->getOne(['id' => $v['cat_fid'], 'status' => 1], 'cate_name');
                    if (!empty($cate_name)) {
                        $cate_name = $cate_name . '/' . $cate_info['cate_name'];
                    } else {
                        $cate_name = $cate_info['cate_name'];
                    }
                }
                if (isset($v['cat_id'])) {
                    $cate_info = $db_house_new_repair_cate->getOne(['id' => $v['cat_id'], 'status' => 1], 'cate_name');
                    if (!empty($cate_name)) {
                        $cate_name = $cate_name . '/' . $cate_info['cate_name'];
                    } else {
                        $cate_name = $cate_info['cate_name'];
                    }
                }
                if ($cate_name) {
                    $data[$k]['cate_name'] = $cate_name;
                }*/
                if(isset($v['cat_id'])){
                    $subject_info=$db_house_new_repair_cate->getOne(['id'=>$v['cat_id']],'cate_name');
                    $cate_name=isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                $data[$k]['cate_name'] = $cate_name;
                if(isset($v['cat_fid'])){
                    $subject_info=$db_house_new_repair_cate->getOne(['id'=>$v['cat_fid']],'cate_name');
//                    $subject_info = $db_house_new_repair_subject->getOne(['id'=>$v['category_id'],'status'=>1],'subject_name');
                    $data[$k]['subject_name'] = isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                if($v['label_txt']){
                    $data[$k]['order_content'] = '';
                    $label_txt_arr = explode(',', $v['label_txt']);
                    foreach ($label_txt_arr as $v) {
                        $label_info = $db_repair_cate->getCustomInfo(['id' => $v]);
                        $data[$k]['order_content'] .= $label_info['name'] . ';';
                    }
                    $data[$k]['order_content'] = rtrim($data[$k]['order_content'], ';');
                }
                if (empty($data[$k]['order_content'])) {
                    $data[$k]['order_content'] = '无';
                }
                if ($page > 0 && isset($v['phone']) && !empty($v['phone'])) {
                    $data[$k]['phone'] = phone_desensitization($v['phone']);
                }
            }
        }
        return $data;
    }
    //导出处理
    public function getExportOrderList($where=[],$field=true,$order='order_id DESC',$source_type=''){
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $db_repair_cate = new RepairCateService();
        $dataObj = $db_house_new_repair_works_order->getAllList($where,$field,$order);
        $data=array();
        if($dataObj && !$dataObj->isEmpty()){
            $data=$dataObj->toArray();
        }
        if($data){
            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $sheet->getDefaultColumnDimension()->setWidth(24);
            $sheet->getDefaultRowDimension()->setRowHeight(24);//设置行高
            $sheet->getRowDimension('1')->setRowHeight(26);//设置行高
            $sheet->getRowDimension('2')->setRowHeight(25);
            $sheet->getStyle('A1:Q1')->getFont()->setBold(true)->setSize(15);
            $sheet->mergeCells('A1:Q1'); //合并单元格
            $sheet->getColumnDimension('A')->setWidth(21);
            $sheet->getColumnDimension('M')->setWidth(160);
            $sheet->setCellValue('A1', '工单列表数据');
            //设置单元格内容
            $titleArr=array('序号','上报人员','手机号码','上报时间','上报位置','工单类目','上报分类','上门时间','工单详情','工单状态','处理人员','处理人员手机号码','跟进内容','回复内容','回复时间','评论内容','评论时间');
            $titCol = 'A';
            foreach ($titleArr as $key => $value) {
                //单元格内容写入
                $sheet->setCellValue($titCol . '2', $value);
                $titCol++;
            }
            $sheet->getStyle('A2:Q2')->getFont()->setBold(true);
            //设置单元格内容
            $row = 3;
            foreach ($data as $k=>$v){
                $dataCol = 'A';
                $itemD=array('order_id'=>$v['order_id'],'name'=>$v['name'],'phone'=>$v['phone']);
                $v['add_time_txt'] = date('Y-m-d H:i',$v['add_time']);
                if($source_type == 'village'){
                    $v['status_txt'] = $this->order_status_txt[$v['event_status']];
                }else{
                    $v['status_txt'] = $this->order_user_status_txt[$v['event_status']];
                }
                $itemD['add_time_txt']=$v['add_time_txt'];
                $v['color'] = $this->order_status_color[$v['event_status']];
                if (isset($v['address_type']) && $v['address_type'] == 'room') {
                    $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                    $service_house_village = new HouseVillageService();
                    $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $v['room_id']], 'village_id,single_id,floor_id,layer_id,pigcms_id');
                    $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $vacancy_info['pigcms_id'], $vacancy_info['village_id']);
                    $v['address_txt'] = $address;
                }
                if (isset($v['address_type']) && $v['address_type'] == 'public') {
                    $db_house_village_public_area = new HouseVillagePublicArea();
                    $public_info = $db_house_village_public_area->getOne(['public_area_id' => $v['public_id']], 'public_area_name');
                    $address = $public_info['public_area_name'];
                    $v['address_txt'] = $address;
                }
                $itemD['address_txt']=$v['address_txt'];
                $cate_name = '';
                if(isset($v['cat_id'])){
                    $subject_info=$db_house_new_repair_cate->getOne(['id'=>$v['cat_id']],'cate_name');
                    $cate_name=isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                $v['cate_name'] = $cate_name;
                $v['subject_name']='';
                if(isset($v['cat_fid'])){
                    $subject_info=$db_house_new_repair_cate->getOne(['id'=>$v['cat_fid']],'cate_name');
                    $v['subject_name'] = isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                $itemD['subject_name']=$v['subject_name'];
                $itemD['cate_name']=$v['cate_name'];
                $itemD['go_time_txt']='';
                if($v['go_time']>10000){
                    $itemD['go_time_txt']=date('Y-m-d H:i',$v['go_time']);
                }
                $itemD['order_content']=$v['order_content'];
                $itemD['status_txt']=$v['status_txt'];
                $itemD['handle_name']='';
                $itemD['handle_phone']='';
                $recordObj = $db_house_new_repair_works_order_log->getOne(['order_id' => $v['order_id']], 'log_id,log_operator,log_phone,log_name,add_time,log_imgs,log_content');
                if ($recordObj && !$recordObj->isEmpty()) {
                    $handle_name=$recordObj['log_operator'];
                    if($v['order_type'] == 5 && empty($recordObj['log_operator'])){
                        $handle_name='处理中心管理员';
                    }
                    $itemD['handle_name']=$handle_name;
                    $itemD['handle_phone']=$recordObj['log_phone'];;
                }
                $itemD['log_content']='';
                $itemD['reply_content']='';
                $itemD['reply_time']='';
                $itemD['evaluate_content']='';
                $itemD['evaluate_time']='';
                $where_log = [];
                $where_log[] = ['order_id','=',$v['order_id']];
                $log_list_obj = $db_house_new_repair_works_order_log->getList($where_log,true,0,0,'log_id ASC');
                if($log_list_obj && !$log_list_obj->isEmpty()){
                    $log_list=$log_list_obj->toArray();
                    if($log_list){
                        $log_arr = $this->log_name;
                        $logContent='';
                        foreach ($log_list as $val){
                            if (isset($val['log_name']) && $val['log_name']) {
                                if (isset($val['log_num']) && $val['log_num'] > 1) {
                                    $title = "第{$val['log_num']}次" . $log_arr[$val['log_name']];
                                } else {
                                    $title = $log_arr[$val['log_name']];
                                }
                                $add_time_txt='';
                                if (isset($val['add_time']) && $val['add_time']) {
                                    $add_time_txt = date('Y-m-d H:i', $val['add_time']);
                                    $logContent .='  时间【'.$add_time_txt.'】';
                                }else{
                                    $logContent .='  ';
                                }
                                $logContent .='类型【'.$title.'】';
                                if($val['log_name'] == 'evaluate'){
                                    $logContent .='评分【'.$val['evaluate'].'】分';
                                    $itemD['evaluate_content']=$val['log_content'].' 评分：'.$val['evaluate'].'分';
                                    $itemD['evaluate_time']=$add_time_txt;
                                }
                                if (isset($val['log_content']) && $val['log_content'] && $val['log_name'] == 'evaluate') {
                                    $logContent .='评论详情【'.$val['log_content'].'】';
                                }
                                if (isset($val['log_operator']) && $val['log_operator']) {
                                    $logContent .='操作人员【'.$val['log_operator'].'】';
                                }
                                if(in_array($val['log_name'],array('property_admin_reply','property_work_reply','house_admin_reply','center_reply_submit'))){
                                    $itemD['reply_content']=$val['log_content'];
                                    $itemD['reply_time']=$add_time_txt;
                                }
                                if (isset($val['log_phone']) && $val['log_phone']) {
                                    $logContent .='手机号码【'.$val['log_phone'].'】';
                                }
                                if (isset($val['log_content']) && $val['log_content'] && $val['log_name'] != 'evaluate') {
                                    $logContent .='内容【'.$val['log_content'].'】';
                                }
                                if (isset($val['log_info']) && $val['log_info'] && @unserialize($val['log_info'])) {
                                    $log_info = unserialize($val['log_info']);
                                    if($log_info && $log_info['name']){
                                        $logContent .='处理人员【'.$log_info['name'].'-'.$log_info['phone'].'】';
                                    }
                                    
                                }
                                $logContent .= "\r\n";
                            }
                        }
                        $itemD['log_content']=$logContent;
                    }
                }
                foreach ($itemD as $kk=>$cvalue) {
                    //单元格内容写入
                    //$sheet->setCellValue($dataCol . $row, $cvalue);
                    $sheet->getStyle('M'.$row)->getAlignment()->setWrapText(true);
                    $sheet->setCellValueExplicit($dataCol . $row, $cvalue,\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING2);
                    $dataCol++;
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
            $sheet->getStyle('A1:L' . $total_rows)->applyFromArray($styleArrayBody);
            
            $styleMArrayBody = [
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                    'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP
                ],
            ];
            
            $sheet->getStyle('M1:M' . $total_rows)->applyFromArray($styleMArrayBody);

            $sheet->getStyle('N1:Q' . $total_rows)->applyFromArray($styleArrayBody);
            //下载
            $filename = '工单数据明细'.date('YmdHis') . '.xlsx';
            (new BaseExportService())->phpSpreadsheet($filename, $spreadsheet);
            return $this->downloadExportFile($filename);
        }
        throw new \think\Exception("没有数据可以导出！");
    }
    /**
     * 下载表格
     */
    public function downloadExportFile($param)
    {
        $returnArr = [];
        if (!file_exists(request()->server('DOCUMENT_ROOT') . '/v20/runtime/' . $param)) {
            $returnArr['error'] = 1;
            $returnArr['url'] = '';
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
    
    public function getOrderEvaluateList($where=[],$field=true,$page=1,$limit=10,$order='o.order_id DESC',$evaluate_star=1)
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $db_repair_cate = new RepairCateService();
        $dataObj = $db_house_new_repair_works_order->getListByEvaluate($where,$field,$page,$limit,$order);
        if($dataObj && !$dataObj->isEmpty()){
            $houseNewRepairWorksOrderLog= new HouseNewRepairWorksOrderLog();
            $data=$dataObj->toArray();
            foreach ($data as $k=>$v){
                $data[$k]['add_time_txt'] = date('Y-m-d',$v['add_time']);
                $data[$k]['status_txt'] = $this->order_status_txt[$v['event_status']];
                $data[$k]['color'] = $this->order_status_color[$v['event_status']];
                
                $evaluateWhere=array();
                $evaluateWhere[]=array('village_id','=',$v['village_id']);
                $evaluateWhere[]=array('log_name','=','evaluate');
                $evaluateWhere[]=array('order_id','=',$v['order_id']);
                $evaluateWhere[]=array('evaluate	 ','=',$evaluate_star);
                $data[$k]['evaluate_star']=$houseNewRepairWorksOrderLog->getCount($evaluateWhere);
                
                if (isset($v['address_type']) && $v['address_type'] == 'room') {
                    $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                    $service_house_village = new HouseVillageService();
                    $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $v['room_id']], 'village_id,single_id,floor_id,layer_id,pigcms_id');
                    $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $vacancy_info['pigcms_id'], $vacancy_info['village_id']);
                    $data[$k]['address_txt'] = $address;
                }
                if (isset($v['address_type']) && $v['address_type'] == 'public') {
                    $db_house_village_public_area = new HouseVillagePublicArea();
                    $public_info = $db_house_village_public_area->getOne(['public_area_id' => $v['public_id']], 'public_area_name');
                    $address = $public_info['public_area_name'];
                    $data[$k]['address_txt'] = $address;
                }
                $cate_name = '';
                if(isset($v['cat_id'])){
                    $subject_info=$db_house_new_repair_cate->getOne(['id'=>$v['cat_id']],'cate_name');
                    $cate_name=isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                $data[$k]['cate_name'] = $cate_name;
                if(isset($v['cat_fid'])){
                    $subject_info=$db_house_new_repair_cate->getOne(['id'=>$v['cat_fid']],'cate_name');
                    $data[$k]['subject_name'] = isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
                }
                if($v['label_txt']){
                    $data[$k]['order_content'] = '';
                    $label_txt_arr = explode(',', $v['label_txt']);
                    foreach ($label_txt_arr as $v) {
                        $label_info = $db_repair_cate->getCustomInfo(['id' => $v]);
                        $data[$k]['order_content'] .= $label_info['name'] . ';';
                    }
                    $data[$k]['order_content'] = rtrim($data[$k]['order_content'], ';');
                }
                if (empty($data[$k]['order_content'])) {
                    $data[$k]['order_content'] = '无';
                }
                if (isset($v['phone']) && !empty($v['phone'])) {
                    $data[$k]['phone'] = phone_desensitization($v['phone']);
                }
            }
            return $data;
        }
        return array();
    }

    /**
     * 单数量
     * @param array $where
     * @return int
     * @author lijie
     * @date_time 2021/08/18
     */
    public function getOrderCount($where = [])
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $count = $db_house_new_repair_works_order->getCount($where);
        return $count;
    }

    public function getCountByEvaluate($where = [])
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $count = $db_house_new_repair_works_order->getCountByEvaluate($where);
        return $count;
    }

    /**
     * 分类选择页
     * @param array $where
     * @param bool $field
     * @return \think\Collection
     * @author lijie
     * @date_time 2021/08/12
     */
    public function getCateList($where = [], $field = true)
    {
        $db_house_new_repair_subject = new HouseNewRepairSubject();
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $data = $db_house_new_repair_subject->getList($where,$field,0,0,'id DESC');
        if($data){
            foreach ($data as $k=>$v){
                if($v['subject_name'] == '个人报修'){
                    $data[$k]['type'] = 'personal_repair';
                } elseif ($v['subject_name'] == '公共报修') {
                    $data[$k]['type'] = 'public_repair';
                } else {
                    $data[$k]['type'] = '';
                }
                $list = $db_house_new_repair_cate->getList(['subject_id'=>$v['type_id'],'status'=>1,'parent_id'=>0],'id as cat_fid,cate_name',0,0,'cat_fid DESC');

                $data[$k]['list'] = $list;
            }
        }
        return $data;
    }

    /**
     * 工单分类
     * @param array $where
     * @param bool $field
     * @param string $order
     * @param string $appType
     * @return array
     */
    public function getFidCateList($where = [], $field = true, $order = 'sort DESC,id desc', $appType = '')
    {
        $where_parent = $where;
        if($appType == 'packapp'){
            $field='id as value,cate_name as label';
        }
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $data = $db_house_new_repair_cate->getList($where_parent,$field,0,0,$order)->toArray();
        return $data;
    }

    /**
     * 描述标签列表
     * @param array $where
     * @param bool $field
     * @param string $order
     * @return \think\Collection
     * @author lijie
     * @date_time 2021/08/12
     */
    public function getLabel($where = [], $field = true, $order = 'id DESC')
    {
        $db_house_new_repair_cate_custom = new HouseNewRepairCateCustom();
        $data = $db_house_new_repair_cate_custom->getList($where, $field, 0, 0, $order);
        return $data;
    }

    /**
     * Notes: 获取工单列表
     * @param int $worker_id 当前登录角色id
     * @param int $login_role 登录角色
     * @param string $status 查找状态
     * @param string $search 查询信息
     * @param int $page 分页
     * @param int $page_size 分页大小
     * @param string $order 排序
     * @return array
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author: wanzy
     * @date_time: 2021/8/16 14:52
     */
    public function workGetWorksOrderLists($worker_id, $login_role, $status = 'todo', $search = '', $page = 1, $page_size = 10, $is_count = false,$village_id=0)
    {
        if ($search) {
            $search = str_replace("'", "\'", $search);
        }
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $dbHouseWorker = new HouseWorker();
        $where_work_str = '';
        $where_submit_str = '';
        $where_submit_change = '';
        $where_house_admin = '';
        $where_property_admin = '';
        $whereRaw = '';
        $property_id=0;
        $work_info = [];
        $house_admin_info = [];
        $is_status=(new HouseVillageService())->checkVillageField($village_id,'is_grab_order');
        fdump_api(['line:'.__LINE__,$worker_id,$login_role, $status, $search,$page,$page_size,$is_count],'workGetWorksOrderLists',1);
        // 工单类型 0 业主上报工单 1 物业总管理员 2 物业普通管理员  3 小区物业管理员 4小区物业工作人员
        $wid=0;
        if (6==$login_role) {
            // 小区物业工作人员
            $where_work = [];
            $where_work[] = ['wid', '=', $worker_id];
            $work_info = $dbHouseWorker->getOne($where_work);
            // 曾经处理过的订单
            $order_ids = $this->getWorkerDealOrderId($worker_id);
            $order_type = 4;
            $wid=$worker_id;
        }
        elseif (5==$login_role) {
            // 小区物业管理人员
            $db_house_admin = new HouseAdmin();
            $where_admin = [];
            $where_admin[] = ['id', '=', $worker_id];
            $house_admin_info = $db_house_admin->getOne($where_admin);
            $order_type = 3;
            $wid=$house_admin_info['wid'];
        }
        elseif (4==$login_role) {

            // 物业普通管理员
            $db_property_admin = new PropertyAdmin();
            $where_admin = [];
            $where_admin[] = ['id', '=', $worker_id];
            $property_admin_info = $db_property_admin->get_one($where_admin);
            $wid=0;
            if(!empty($property_admin_info)){
                $wid=$property_admin_info['wid'];
                $property_id=$property_admin_info['property_id'];
            }
            $order_type = 2;

        }
        elseif (3==$login_role) {

            // 物业总管理员
            $service_house_village = new HouseVillageService();
            $property_admin_info = $service_house_village->get_house_property($worker_id);
            $order_type = 1;
            $wid=0;
            $property_id=$worker_id;
        }
        else {
            throw new \think\Exception("当前身份无权限");
        }
        $property_id=$property_id>0 ? $property_id:0;
        if (!empty($work_info)) {
            $where_work_str = !empty($order_ids) ? "((a.order_id in (" . implode(',', $order_ids) . ")  OR a.worker_id={$worker_id})" : "(a.worker_id={$worker_id}";
        }
        if ('todo'==$status) {
            // 待处理
            if ($search) {
                $search_str = "(a.name LIKE '%{$search}%' OR a.phone LIKE '%{$search}%')";
            } else {
                $search_str = '';
            }

            if (!empty($work_info)) {
                // 处理人员 已指派和处理中和被转单
                // 待处理的不包含 经过的 只能是当前工作人员处理的需要处于待指派
                $where_work_str = "(a.worker_id={$worker_id} AND a.worker_type=0 AND a.event_status>=20 AND a.event_status<40)";

            }
            elseif ($house_admin_info) {
                // 处理待指派工单
                $where_house_admin = '(a.event_status>=10 AND a.event_status<20)';
            }
            elseif ($property_admin_info) {
                // 处理待指派工单
                $where_property_admin = '(a.event_status>=10 AND a.event_status<20)';
            }
            // 提交人员 已办结和已评价
            $where_submit_str = "(a.uid={$worker_id} AND a.order_type={$order_type} AND ((a.event_status>=40 AND a.event_status<50) OR (a.event_status>=70 AND a.event_status<80)))";
        }
        elseif ('processing'==$status) {

            // 处理中
            if ($search) {
                $search_str = "(a.name LIKE '%{$search}%' OR a.phone LIKE '%{$search}%')";
            } else {
                $search_str = '';
            }
            if (!empty($work_info)) {
                // 处理人员 已办结
                // 已经转给其他人员， 待指派，处理中，已结单 都显示在处理中
                $where_work_str .= " AND a.worker_type=0 AND ((a.event_status>=40 AND a.event_status<50) OR (a.worker_id<>{$worker_id} AND a.uid<>{$worker_id} AND a.order_type={$order_type} AND a.event_status<>24 AND a.event_status<40)))";
            } elseif ($house_admin_info) {
                // 处理中
                $where_house_admin = '(a.event_status>=20 AND a.event_status<50)';
            } elseif ($property_admin_info) {
                // 处理中
                $where_property_admin = '(a.event_status>=20 AND a.event_status<50)';
            }
            // 提交人员 待指派 已指派 处理中
            $where_submit_str = "(a.uid={$worker_id} AND a.order_type={$order_type} AND ((a.event_status<40)))";
        }
        elseif ('processed'==$status) {
            // 已处理
            if ($search) {
                $search_str = "(a.name LIKE '%{$search}%' OR a.phone LIKE '%{$search}%')";
            } else {
                $search_str = '';
            }
            if (!empty($work_info)) {
                // 处理人员 已转单已评价已撤回已关闭【被转单  放在待处理中】
                $where_work_str .= " AND a.worker_type=0 AND ((a.event_status>=50 AND a.event_status<80) OR (a.worker_id<>{$worker_id} AND a.event_status=24)))";
                // 处理过的非提交处理过人员
//                $where_submit_change = "(b.operator_id={$worker_id} AND b.operator_type=30 AND b.log_name='work_change')";
            } elseif ($house_admin_info) {
                // 已处理
                $where_house_admin = '(a.event_status>=50 AND a.event_status<70)';
            } elseif ($property_admin_info) {
                // 已处理
                $where_property_admin = '(a.event_status>=50 AND a.event_status<70)';
            }
            // 提交人员 已撤回 已关闭
            $where_submit_str = "(a.uid={$worker_id} AND a.order_type={$order_type} AND ((a.event_status>=50 AND a.event_status<70)))";

        }
        elseif ('all' == $status) {
            // 已处理
            if ($search) {
                $search_str = "(a.name LIKE '%{$search}%' OR a.phone LIKE '%{$search}%')";
            } else {
                $search_str = '';
            }
            if (!empty($work_info)) {
                // 处理人员 已评价已撤回已关闭
                $where_work_str .= " AND a.worker_type=0)";
                // 提交人员 已办结和已评价
                $where_submit_str = "(a.uid={$worker_id} AND a.order_type=4)";
                // 处理过的非提交处理过人员
//                $where_submit_change = "(b.operator_id={$worker_id} AND b.operator_type=30)";
            } elseif ($house_admin_info) {
                // 全部
                $where_house_admin = '(a.event_status>=10)';
            } elseif ($property_admin_info) {
                // 全部
                $where_property_admin = '(a.event_status>=10)';
            }
        }
        if ($where_house_admin) {
            // 小区物业管理人员
            if ($where_submit_str) {
                $whereRaw = "({$where_house_admin} OR {$where_submit_str})";
            }
            else {
                $whereRaw = $where_house_admin;
            }
            if (isset($house_admin_info['village_id']) && $house_admin_info['village_id']) {
                $whereRaw .= " AND a.village_id={$house_admin_info['village_id']}";
            }
        }
        elseif ($where_property_admin) {
            // 物业普通管理员
            if ($where_submit_str) {
                $whereRaw = "({$where_property_admin} OR {$where_submit_str})";
            } else {
                $whereRaw = $where_property_admin;
            }
            if (isset($property_admin_info['menus']) && $property_admin_info['menus']) {
                $whereRaw .= " AND a.village_id in ({$property_admin_info['menus']})";
            } elseif($order_type!=1) {
                $whereRaw .= " AND a.village_id=0";
            }
            if($order_type==1 || $order_type==2) {
                $whereRaw .=" AND a.property_id=".$property_id;
            }
        }
        elseif ($where_work_str && $where_submit_str) {
            // 小区物业工作人员 提交和处理者
            $whereRaw = "({$where_work_str} OR {$where_submit_str})";
        }
        elseif ($where_work_str && $where_submit_str && $where_submit_change) {
            // 小区物业工作人员 提交和处理者和转单
            $whereRaw = "({$where_work_str} OR {$where_submit_str} OR {$where_submit_change})";
        }
        if ($search_str) {
            $whereRaw = "{$search_str} AND " . $whereRaw;
        }
        if(in_array($status,['todo','all']) && $is_status){
            //todo 获取当前账号所在的部门关联工单分类
            $cate_id=$this->getRepairCateId($village_id,$wid);
            if(!empty($cate_id)){
                $whereRaw .= ' OR (a.village_id ='.$village_id.' AND a.event_status = 15 AND a.cat_fid in ('.(implode(',',$cate_id)).'))';
            }
        }
        if ($is_count) {
            $work_count = $db_house_new_repair_works_order->getWorkHandleCount([], $whereRaw);
            if (!$work_count) {
                $work_count = 0;
            }
            return $work_count;
        } else {
            $field = 'a.*';
            $order = 'a.add_time DESC';
            $work_list = $db_house_new_repair_works_order->getWorkHandleList([],$whereRaw,$field,$page,$page_size,$order);
        }
        if (!empty($work_list)) {
            $work_list = $work_list->toArray();
            if ($work_list) {
            //    print_r($work_list);exit;
                foreach ($work_list as &$val) {
                    // 兼容非工作人员不可抢单 只可指派
                    if($login_role != 6 && $val['event_status'] == 15){
                        $val['event_status']=10;
                    }
                    if (isset($val['add_time']) && $val['add_time']) {
                        $val['add_time_txt'] = date('Y-m-d H:i:s', $val['add_time']);
                    }
                    if (isset($val['last_time']) && $val['last_time']) {
                        $val['last_time_txt'] = date('Y-m-d H:i:s', $val['last_time']);
                    }
                    if (isset($val['event_status']) && $val['event_status']) {
                        if (24==$val['event_status'] && $val['worker_type']==0 && $val['worker_id']==$worker_id) {
                            // 当前人员处于被转单
                            $val['order_status_txt'] = '被转单';
                        } elseif (24 == $val['event_status']) {
                            $val['order_status_txt'] = '已转单';
                        } else {
                            $val['order_status_txt'] = $this->order_work_status_txt[$val['event_status']];
                        }
                        $val['order_status_color'] = $this->order_status_color[$val['event_status']];
                    }
                    if (6 == $login_role && isset($val['operator_id']) && $val['operator_id'] = $worker_id && isset($val['operator_type']) && $val['operator_type'] = 30 && isset($val['log_name']) && $val['log_name'] = 'work_change' && isset($val['worker_id'])) {
                        $val['order_status_txt'] = '已转单';
                        $val['order_status_color'] = '#336600';
                    }
                    if (isset($val['label_txt']) && trim($val['label_txt'],',')) {

                        $db_house_new_repair_cate_custom = new HouseNewRepairCateCustom();
                        $label_txt = trim($val['label_txt'], ',');
                        $whereLabel = [];
                        $whereLabel[] = ['id', 'in', $label_txt];
                        $labelData = $db_house_new_repair_cate_custom->getList($whereLabel, 'id,name', 0, 0, '');
                        if (!empty($labelData)) {
                            $labelArr = [];
                            foreach ($labelData as $LVal) {
                                if ($LVal && isset($LVal['name'])) {
                                    $labelArr[] = $LVal['name'];
                                }
                            }
                            $label_txt = implode("；", $labelArr);
                        }
                        $val['order_content'] = $label_txt;
                    }
                    if (empty($val['order_content'])) {
                        $val['order_content'] = '无';
                    }
                }
            }
        } else {
            $work_list = [];
        }
        $arr = [];
        $arr['list'] = $work_list;
        return $arr;
    }

    /**
     * Notes: 移动管理端添加工单
     * @param $data
     * @return array
     * @throws \think\Exception
     * @author: wanzy
     * @date_time: 2021/8/18 11:56
     */
    public function addWorksOrder($data)
    {
        if (!isset($data['village_id']) || !$data['village_id']) {
            throw new \think\Exception('缺少必传参数');
        }
        $village_id = intval($data['village_id']);
        $db_house_village = new HouseVillage();
        $village_info = $db_house_village->getOne($village_id, 'village_id,village_name,property_id');
        if (empty($village_info)) {
            throw new \think\Exception('对应小区不存在');
        }
        $db_house_village_info = new HouseVillageInfo();
        $village_info_data = $db_house_village_info->getOne(['village_id'=>$village_id], 'village_id,is_timely');
        if (empty($village_info_data)) {
            throw new \think\Exception('对应小区不存在');
        }
        if ($village_info_data['is_timely']==1){
            if (empty($data['go_time'])){
                throw new \think\Exception('上门时间不能为空');
            }
            $data['go_time']=strtotime($data['go_time']);
            if (empty($data['go_time'])){
                throw new \think\Exception('上门时间不能为空');
            }
            if ($data['go_time']<time()){
                throw new \think\Exception('上门时间不能小于当前时间');
            }
        }else{
            if (!empty($data['go_time'])){
                $data['go_time']=strtotime($data['go_time']);
                if (!empty($data['go_time'])&&$data['go_time']<time()){
                    throw new \think\Exception('上门时间不能小于当前时间');
                } elseif(empty($data['go_time'])){
                    $data['go_time']=0;
                }
            }

        }
        $property_id = isset($village_info['property_id']) ? intval($village_info['property_id']) : 0;
        if (!isset($data['cat_id']) || !$data['cat_id']) {
            throw new \think\Exception('缺少必传参数');
        }
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $cat_id = $data['cat_id'];
        $cate_info = $db_house_new_repair_cate->getOne(['id' => $cat_id,'village_id'=>$village_id], 'id,subject_id,cate_name,parent_id,type,uid');
        if (empty($cate_info) || $cate_info->isEmpty()) {
            throw new \think\Exception('对应分类信息不存在');
        }
        if (isset($cate_info['parent_id']) && $cate_info['parent_id']) {
            $cat_fid = intval($cate_info['parent_id']);
        }else if (isset($data['cat_fid']) && $data['cat_fid']) {
            $cat_fid = intval($data['cat_fid']);
        }  else {
            throw new \think\Exception('缺少主分类');
        }
//        if (isset($data['type_id']) && $data['type_id']) {
//            $type_id = intval($data['type_id']);
//        } elseif(isset($cate_info['subject_id']) && $cate_info['subject_id']) {
//            $type_id = intval($cate_info['subject_id']);
//        } else {
//            throw new \think\Exception('缺少类别');
//        }
//        if (isset($data['category_id']) && $data['category_id']) {
//            $category_id = intval($data['category_id']);
//        } else {
//            $db_repair_subject = new HouseNewRepairSubject();
//            $subject_info = $db_repair_subject->getOne(['id' => $type_id,'type' => 2],'id, subject_name, parent_id');
//            if (empty($subject_info)) {
//                throw new \think\Exception('对应类目信息不存在');
//            }
//            if(isset($subject_info['parent_id']) && $subject_info['parent_id']) {
//                $category_id = intval($subject_info['parent_id']);
//            } else {
//                throw new \think\Exception('缺少类目');
//            };
//        }
        $address_type = isset($data['address_type'])?trim($data['address_type']):'';
        if($address_type){
            if (!in_array($address_type,['public', 'room'])) {
                throw new \think\Exception('缺少必传参数');
            }
            if (!isset($data['address_id']) || !$data['address_id']) {
                throw new \think\Exception('缺少必传参数');
            }
        }
        $address_id = intval($data['address_id']);
        $public_id = 0;
        $room_id = 0;
        $single_id = 0;
        $floor_id = 0;
        $layer_id = 0;
        $address_txt = '';
        if ('public'==$address_type) {
            $public_id = intval($data['address_id']);
            // 获取下公共区域
            $db_house_village_public_area = new HouseVillagePublicArea();
            $wherePublicArea = [];
            $wherePublicArea[] = ['public_area_id', '=', $public_id];
            $publicAreaInfo = $db_house_village_public_area->getOne($wherePublicArea, 'public_area_id, public_area_name');
            if (empty($publicAreaInfo)) {
                throw new \think\Exception('所选公共区域不存在');
            }
            $address_txt = $publicAreaInfo['public_area_name'];
        } elseif ('room'==$address_type) {

            $room_id = intval($data['address_id']);
            $db_house_village_user_vacancy = new HouseVillageUserVacancy();
            $where_room = [];
            $where_room[] = ['pigcms_id', '=', $room_id];
            $field_room = 'pigcms_id, room, village_id, single_id, floor_id, layer_id';
            $room_info = $db_house_village_user_vacancy->getOne($where_room, $field_room);
            if (empty($room_info)) {
                throw new \think\Exception('所选房屋不存在');
            }
            if (isset($data['single_id']) && $data['single_id']) {
                $single_id = intval($data['single_id']);
            } elseif (isset($room_info['single_id']) && $room_info['single_id']) {
                $single_id = intval($room_info['single_id']);
            } else {
                throw new \think\Exception('缺少楼栋');
            }
            if (isset($data['floor_id']) && $data['floor_id']) {
                $floor_id = intval($data['floor_id']);
            } elseif (isset($room_info['floor_id']) && $room_info['floor_id']) {
                $floor_id = intval($room_info['floor_id']);
            } else {
                throw new \think\Exception('缺少单元');
            }
            if (isset($data['layer_id']) && $data['layer_id']) {
                $layer_id = intval($data['layer_id']);
            } elseif (isset($room_info['layer_id']) && $room_info['layer_id']) {
                $layer_id = intval($room_info['layer_id']);
            } else {
                throw new \think\Exception('缺少楼层');
            }
            $room_village_id = isset($room_info['village_id']) && $room_info['village_id'] ? intval($room_info['village_id']) : $village_id;
            $service_house_village = new HouseVillageService();
            $address_txt = $service_house_village->getSingleFloorRoom($single_id, $floor_id, $layer_id, $room_id, $room_village_id);
        }
        if ($address_txt && isset($village_info['village_name']) && $village_info['village_name']) {
            $address_txt = $village_info['village_name'] . ' ' . $address_txt;
        } elseif (!$address_txt) {
            $address_txt = '';
        }
        $worker_ids = $this->getWorkerByTime($cat_id);
        if(!empty($worker_ids)){
            $worker_id = $worker_ids[array_rand($worker_ids)];
        }else{
            $worker_id = 0;
        }
        if ($worker_id) {
            // 如果存在接手工作人员
            $event_status = 20;
            $now_role = 3;
        } else {
            $now_role = 2;
            $event_status = 10;
        }
        if (isset($data['login_role']) && $data['login_role']) {
            // 工单类型 0 业主上报工单 1 物业总管理员 2 物业普通管理员  3 小区物业管理员 4小区物业工作人员
            switch ($data['login_role']) {
                case '3':
                    $log_name = 'property_admin_submit';
                    $order_type = 1;
                    $uid = isset($data['worker_id']) ? intval($data['worker_id']) : 0;
                    break;
                case '4':
                    $log_name = 'property_work_submit';
                    $order_type = 2;
                    $uid = isset($data['worker_id']) ? intval($data['worker_id']) : 0;
                    break;
                case '5':
                    $log_name = 'house_admin_submit';
                    $order_type = 3;
                    $uid = isset($data['worker_id']) ? intval($data['worker_id']) : 0;
                    break;
                case '6':
                    $log_name = 'house_work_submit';
                    $order_type = 4;
                    $uid = isset($data['worker_id']) ? intval($data['worker_id']) : 0;
                    break;
                default:
                    throw new \think\Exception("请传正确参数");
                    break;
            }
        } else {
            throw new \think\Exception('缺少登录参数');
        }
        $order_imgs = isset($data['order_imgs']) && $data['order_imgs'] ? $data['order_imgs'] : '';
        if ($order_imgs && is_array($order_imgs)) {
            $order_imgs = implode(';', $order_imgs);
        } elseif ($order_imgs && is_string($order_imgs)) {
            $order_imgs = trim($order_imgs);
        }
        $order_content = isset($data['order_content']) && $data['order_content'] ? $data['order_content'] : '';
        $label_txt = isset($data['label_txt']) ? $data['label_txt'] : '';
        if (is_array($label_txt)) {
            $label_txt = implode(',', $label_txt);
        } elseif (is_string($label_txt)) {
            $label_txt = trim($label_txt);
        }
        if (empty($order_imgs) && !$order_content && empty($label_txt)) {
            throw new \think\Exception('缺少必传参数');
        }
        $now_time = time();
        $order = [
            'village_id' => $village_id,
            'property_id' => $property_id,
            'category_id' => 0,
            'type_id' => 0,
            'cat_fid' => $cat_fid,
            'cat_id' => $cat_id,
            'label_txt' => $label_txt,
            'order_content' => $order_content,
            'order_imgs' => $order_imgs,
            'order_type' => $order_type,
            'uid' => $uid,
            'phone' => isset($data['phone']) && $data['phone'] ? $data['phone'] : '',
            'name' => isset($data['name']) && $data['name'] ? $data['name'] : '',
            'now_role' => $now_role,
            'worker_type' => 0,
            'worker_id' => $worker_id,
            'event_status' => $event_status,
            'address_type' => $address_type,
            'address_id' => $address_id,
            'public_id' => $public_id,
            'single_id' => $single_id,
            'floor_id' => $floor_id,
            'layer_id' => $layer_id,
            'room_id' => $room_id,
            'address_txt' => $address_txt,
            'add_time' => $now_time,
        ];
        $order['group_id']=$this->getGroupId($worker_id);
        $order_id = $this->addRepairOrder($order);
        if ($order_id) {
            $logData['order_id'] = $order_id;
            $logData['log_name'] = $log_name;
            $logData['village_id'] = $village_id;
            $logData['property_id'] = $property_id;
            $logData['log_operator'] = $order['name'] ? $order['name'] : '';
            $logData['log_phone'] = $order['phone'] ? $order['phone'] : '';
            $logData['operator_type'] = 10;
            $logData['operator_id'] = $order['uid'] ? $order['uid'] : 0;
            $logData['log_uid'] = 0;
            $logData['log_content'] = $order_content;
            $logData['log_imgs'] = $order['order_imgs'];
            $logData['add_time'] = $now_time;
            $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
            $where_count = [];
            $where_count[] = ['order_id', '=', $order_id];
            $where_count[] = ['log_name', '=', strval($log_name)];
            $log_num = $db_house_new_repair_works_order_log->getCount($where_count);
            if (!$log_num) {
                $log_num = 1;
            } else {
                $log_num = intval($log_num) + 1;
            }
            $logData['log_num'] = $log_num;
            $this->addRepairLog($logData);
            if($worker_id){
                // 查询处理人信息
                $db_house_worker = new HouseWorker();
                $where_house_work = [];
                $where_house_work[] = ['wid', '=', $worker_id];
                $house_work = $db_house_worker->get_one($where_house_work, 'wid,name,phone');
                $logData = [];
                $logData['order_id'] = $order_id;
                $logData['log_name'] = 'house_auto_assign';
                $logData['log_operator'] = $house_work['name'] ? $house_work['name'] : '';
                $logData['log_phone'] = $house_work['phone'] ? $house_work['phone'] : '';
                $logData['operator_type'] = 10;
                $logData['operator_id'] = 0;
                $logData['log_uid'] = $house_work['wid'] ? $house_work['wid'] : 0;
                $logData['log_content'] = '';
                $logData['log_imgs'] = '';
                $logData['add_time'] = $now_time;
                $logData['village_id'] = $village_id;
                $logData['property_id'] = $property_id;
                $this->addRepairLog($logData);
            }
        }
        //todo 开启抢单模式
        $this->grabOrder($village_id,$order_id,$cat_id);
        //当提交的工单有指派时
        if($order['worker_id'] > 0){
            //针对工作人员提交的工单有指派时 给提交人发送通知
            if($order['order_type'] == 4){
                $this->newRepairSendMsg(11,$order_id,$uid,$property_id);
            }
            //给工作人员发送通知
            $this->newRepairSendMsg(12,$order_id,0,$property_id);
        }
        $add_msg = [];
        $add_msg['order_id'] = $order_id;
        $add_msg['status'] = 'todo';
        return $add_msg;
    }


    /**
     * Notes: 移动管理端获取工单详情
     * @param $order_id
     * @param $worker_id
     * @param $login_role
     * @param bool $is_arr
     * @param bool $is_word
     * @return array|\think\Model|null
     * @throws \think\Exception
     * @author: wanzy
     * @date_time: 2021/8/18 11:57
     */
    public function workGetOrder($order_id, $worker_id, $login_role, $is_arr = false, $is_word = false)
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
        $where_order = [];
        $where_order[] = ['order_id', '=', $order_id];
        $order_detail = $db_house_new_repair_works_order->getOne($where_order);
        if (empty($order_detail)) {
            throw new \think\Exception('对应工单不存在');
        }else{
            $order_detail = $order_detail->toArray();
        }
        if($login_role != 6 && $order_detail['event_status'] == 15){
            $order_detail['event_status']=10;
        }
        $db_house_new_repair_subject = new HouseNewRepairSubject();
        $db_house_new_repair_cate = new HouseNewRepairCate();
        if (isset($order_detail['cat_id']) && $order_detail['cat_id']) {
            // 二级分类
            $whereCat = [];
            $whereCat[] = ['id', '=', $order_detail['cat_id']];
            $cat_info = $db_house_new_repair_cate->getOne($whereCat, 'id, subject_id, cate_name, parent_id');
            if ($cat_info && isset($cat_info['cate_name'])) {
                $order_detail['cat_id_txt'] = $cat_info['cate_name'];
            }
            // 一级分类
            if (isset($order_detail['cat_fid']) && $order_detail['cat_fid']) {
                $whereCatFid = [];
                $whereCatFid[] = ['id', '=', $order_detail['cat_fid']];
                $cat_parent_info = $db_house_new_repair_cate->getOne($whereCatFid, 'id, subject_id, cate_name');
            } elseif (isset($cat_info['parent_id']) && $cat_info['parent_id']) {
                $whereCatFid = [];
                $whereCatFid[] = ['id', '=', $cat_info['parent_id']];
                $cat_parent_info = $db_house_new_repair_cate->getOne($whereCatFid, 'id, subject_id, cate_name');
            }
            if ($cat_parent_info && isset($cat_parent_info['cate_name'])) {
                $order_detail['cat_fid_txt'] = $cat_parent_info['cate_name'];
            }
            // 工单类别
            $type_info=[];
            if (isset($order_detail['type_id']) && $order_detail['type_id']) {
                $whereType = [];
                $whereType[] = ['id', '=', $order_detail['type_id']];
                $type_info = $db_house_new_repair_subject->getOne($whereType, 'id, subject_name, parent_id');
            } elseif (isset($cat_parent_info['subject_id']) && $cat_parent_info['subject_id']) {
                $whereType = [];
                $whereType[] = ['id', '=', $cat_parent_info['subject_id']];
                $type_info = $db_house_new_repair_subject->getOne($whereType, 'id, subject_name, parent_id');
            }
            if ($type_info && isset($type_info['subject_name'])) {
                $order_detail['type_id_txt'] = $type_info['subject_name'];
            }
            // 工单类目
            $category_info=[];
            if (isset($order_detail['category_id']) && $order_detail['category_id']) {
                $whereCategory = [];
                $whereCategory[] = ['id', '=', $order_detail['category_id']];
                $category_info = $db_house_new_repair_subject->getOne($whereCategory, 'id, subject_name');
            } elseif (isset($type_info['parent_id']) && $type_info['parent_id']) {
                $whereCategory = [];
                $whereCategory[] = ['id', '=', $type_info['parent_id']];
                $category_info = $db_house_new_repair_subject->getOne($whereCategory, 'id, subject_name');
            }
            if ($category_info && isset($category_info['subject_name'])) {
                $order_detail['category_id_txt'] = $category_info['subject_name'];
            }
        }
        $dbHouseWorker = new HouseWorker();
        $is_post = false;// 是否是提交工单人员
        $is_worker = false; // 是否是工单当前处理人员
        $is_through = false; //是否经过
        $is_admin = false; //管理身份
        $is_house_admin = false; //小区物业管理人员身份
        $assign_type = ''; //指派类型
        $reply_type = ''; //回复类型
        $where_log_through = [];
        $where_log_through[] = ['order_id', '=', $order_id];
        // 最后一次非本人操作记录
        $log_last = [];
        switch ($login_role) {
            case '6':
                $order_type = 4;
                // 小区物业工作人员
                $where_log_through[] = ['operator_type','>=',30];
                $where_log_through[] = ['operator_id','=',$worker_id];
                if (isset($order_detail['order_type']) && $order_detail['order_type']==$order_type && isset($order_detail['uid']) && $worker_id==$order_detail['uid']) {
                    $is_post = true;
                    $is_through = true;
                }
                if (isset($order_detail['worker_type']) && $order_detail['worker_type'] == 0 && isset($order_detail['worker_id']) && $worker_id == $order_detail['worker_id']) {
                    $is_worker = true;
                }
                if ($is_worker) {
                    // 如果是工作人员 查询下 上次操作记录
                    // 查询下 最后一次非本人操作
                    $where_log_last = [];
                    $where_log_last[] = ['order_id','=',$order_id];
                    $where_log_last[] = ['operator_id','<>',$worker_id];
                    $where_log_last[] = ['operator_type','>=',30];
                    $where_log_last[] = ['operator_type','<',40];

                    $log_last = $db_house_new_repair_works_order_log->getOne($where_log_last, true);
                    if (empty($log_last)) {
                        $log_last = [];
                    } else {
                        $log_last = $log_last->toArray();
                    }
                }
                break;
            case '5':
                $order_type = 3;
                // 小区物业管理人员
                // 这个身份只能是提交者了 暂时
                if (isset($order_detail['order_type']) && $order_detail['order_type'] == $order_type && isset($order_detail['uid']) && $worker_id == $order_detail['uid']) {
                    $is_post = true;
                    $is_through = true;
                }
                $where_log_through[] = ['operator_type','>=',20];
                $where_log_through[] = ['operator_type','<',30];
                $where_log_through[] = ['operator_id','=',$worker_id];

                $is_admin = true; //管理身份
                $is_house_admin = true; //小区物业管理人员身份
                $assign_type = 'house_admin_assign'; //指派类型
                $reply_type = 'house_admin_reply'; //回复类型
                break;
            case '4':
                $order_type = 2;
                // 物业普通管理员
                // 这个身份只能是提交者了 暂时
                if (isset($order_detail['order_type']) && $order_detail['order_type'] == $order_type && isset($order_detail['uid']) && $worker_id == $order_detail['uid']) {
                    $is_post = true;
                    $is_through = true;
                }
                $where_log_through[] = ['operator_type','>=',20];
                $where_log_through[] = ['operator_type','<',30];
                $where_log_through[] = ['operator_id','=',$worker_id];
                $is_admin = true; //管理身份
                $assign_type = 'property_work_assign'; //指派类型
                $reply_type = 'property_work_reply'; //回复类型
                break;
            case '3':
                $order_type = 1;
                // 物业总管理员
                // 这个身份只能是提交者了 暂时
                if (isset($order_detail['order_type']) && $order_detail['order_type'] == $order_type && isset($order_detail['uid']) && $worker_id == $order_detail['uid']) {
                    $is_post = true;
                    $is_through = true;
                }
                $where_log_through[] = ['operator_type','>=',20];
                $where_log_through[] = ['operator_type','<',30];
                $where_log_through[] = ['operator_id','=',$worker_id];
                $is_admin = true; //管理身份
                $assign_type = 'property_admin_assign'; //指派类型
                $reply_type = 'property_admin_reply'; //回复类型
                break;
            default:
                throw new \think\Exception("您当前账号不能查看该工单信息");
                break;
        }
        if (!$is_through) {
            $log_through = $db_house_new_repair_works_order_log->getOne($where_log_through, 'log_id');
            if ($log_through && isset($log_through['log_id']) && $log_through['log_id']) {
                $is_through = true;
            }
        }
        if (!$is_post && !$is_worker && !$is_through && !$is_admin && !($order_detail['event_status'] == 15)) {
            throw new \think\Exception('您当前账号不能查看该工单信息');
        }

        if($order_detail['event_status'] == 15){
            $this->checkGrabOrder(1,$order_detail['village_id'],$worker_id,$order_detail);
        }

        if (isset($order_detail['event_status']) && isset($this->order_work_status_txt[$order_detail['event_status']])) {
            $order_detail['event_status_txt'] = $this->order_work_status_txt[$order_detail['event_status']];
        } else {
            $order_detail['event_status_txt'] = '';
        }
        if (isset($order_detail['event_status']) && isset($this->order_status_color[$order_detail['event_status']])) {
            $order_detail['event_status_color'] = $this->order_status_color[$order_detail['event_status']];
        } else {
            $order_detail['event_status_color'] = '';
        }
        $order_detail['is_post'] = $is_post;
        $order_detail['is_worker'] = $is_worker;
        $order_detail['is_through'] = $is_through;
        $order_detail['is_house_admin'] = $is_house_admin;
        $order_detail['is_admin'] = $is_admin;
        // 获取工单对应处理记录 按照时间顺序倒叙
        $log = [];
        $order_log = 'add_time DESC';
        $where_log = [];
        $where_log[] = ['order_id','=',$order_id];
        $log_new = $db_house_new_repair_works_order_log->getOne($where_log, true);
        if (!empty($log_new)) {
            $children = [];
            if (isset($log_new['log_operator']) && $log_new['log_operator']) {
                $children[] = [
                    'title' => '当前处理人员',
                    'content' => $log_new['log_operator'],
                    'content_color' => '',
                ];
            }
            if (isset($log_new['log_phone']) && $log_new['log_phone']) {
                $children[] = [
                    'title' => '手机号码',
                    'content' => $log_new['log_phone'],
                    'content_color' => '',
                ];
            }
            $log = [
                'title' => '处理记录',
                'type' => 2,
                'content' => '',
                'content_color' => '',
                'children' => $children,
                'imgs' => [],
            ];
        }
        $title_status = '工单状态';
        if (isset($order_detail['event_status']) && $order_detail['event_status']) {
            // 10 未指派 20 已指派 30 处理中 40已办结 50 已撤回 60已关闭 70已评价
            if ($order_detail['event_status'] >= 10 && $order_detail['event_status'] < 20) {
                // 工单待处理
                $order_detail['change_status'] = [];
                if ($is_word) {
                    $order_detail['change_status_word'] = [];
                }
                if ($is_house_admin) {
                    // 小区物业管理人员
                    $order_detail['change_status'] = [
                        ['log' => $assign_type, 'type' => 'choose_work', 'name' => '指派'],
                        ['log' => $reply_type, 'type' => '', 'name' => '回复']
                    ];
                    if ($is_word) {
                        $order_detail['change_status_word'] = [$assign_type, $reply_type];
                    }
                } elseif ($is_admin && !$is_house_admin) {
                    //  物业总管理人员及物业普通管理员
                    $order_detail['change_status'] = [
                        ['log' => $assign_type,'type'=>'choose_work', 'name' => '指派'],
                        ['log' => $reply_type,'type'=>'', 'name' => '回复'],
                    ];
                    if ($is_word) {
                        $order_detail['change_status_word'] = [$assign_type, $reply_type];
                    }
                }
                if ($is_post) {
                    // 也是上报人员
                    $order_detail['change_status'][] = ['log' => 'recall', 'type' => '', 'name' => '撤回'];
                    $order_detail['change_status'][] = ['log' => 'closed', 'type' => '', 'name' => '关闭'];
                    if ($is_word) {
                        $order_detail['change_status_word'][] = 'recall';
                        $order_detail['change_status_word'][] = 'closed';
                    }
                }
            } elseif ($order_detail['event_status'] >= 20 && $order_detail['event_status'] < 40) {
                // 已指派 处理中
                $order_detail['change_status'] = [];
                if ($is_word) {
                    $order_detail['change_status_word'] = [];
                }
                if  ($is_worker) {
                    $order_detail['change_status'] = [
                        ['log' => 'work_follow_up','type'=>'', 'name' => '跟进'],
                        ['log' => 'work_completed','type'=>'', 'name' => '结单'],
                        ['log' => 'work_reject','type'=>'', 'name' => '拒绝'],
                        ['log' => 'work_change','type'=>'choose_work', 'name' => '转单'],
                    ];
                    if ($is_word) {
                        $order_detail['change_status_word'] = ['work_follow_up', 'work_completed','work_reject','work_change'];
                    }
                    if ($log_last && isset($log_last['log_name']) && $log_last['log_name'] == 'work_change') {
                        // 被人转单可以拒绝回转单人员
                        $order_detail['change_status'][] = [
                            'log' => 'work_reject_change',
                            'name' => '驳回给转单人员',
                            'type' => '',
                        ];
                        if ($is_word) {
                            $order_detail['change_status_word'][] = 'work_reject_change';
                        }
                    } elseif ($log_last && isset($log_last['log_name']) && $log_last['log_name'] == 'center_assign_work') {
                        // 被人转单可以拒绝回转单人员
                        $order_detail['work_reject_center'][] = [
                            'log' => 'work_reject_center',
                            'name' => '驳回给处理中心',
                            'type' => '',
                        ];
                        if ($is_word) {
                            $order_detail['change_status_word'][] = 'work_reject_center';
                        }
                    }
                }
                if ($is_post) {
                    // 也是上报人员
                    $order_detail['change_status'][] = ['log' => 'recall', 'type' => '', 'name' => '撤回'];
                    $order_detail['change_status'][] = ['log' => 'closed', 'type' => '', 'name' => '关闭'];
                    if ($is_word) {
                        $order_detail['change_status_word'][] = 'recall';
                        $order_detail['change_status_word'][] = 'closed';
                    }
                }
                if (!empty($order_detail['rule_id'])){
                    $db_house_new_charge_rule=new HouseNewChargeRule();
                    $field='r.charge_name,p.name';
                    $rule_info=$db_house_new_charge_rule->getFind(['r.id'=>$order_detail['rule_id']],$field);
                    $rule_info['pay_type']=  $order_detail['pay_type'];
                    if ($order_detail['pay_type']==2){
                        $rule_info['offline_pay_type']=  $order_detail['offline_pay_type'];
                    }else{
                        $rule_info['offline_pay_type']=0;
                    }
                    $order_detail['rule_info'] = $rule_info;
                }
            } elseif ($order_detail['event_status'] >= 40 && $order_detail['event_status'] < 50) {
                // 已办结
                $order_detail['change_status'] = [];
                if ($is_word) {
                    $order_detail['change_status_word'] = [];
                }
                if ($is_worker) {
                    $order_detail['change_status'] = [
                        ['log' => 'work_completed', 'type' => '', 'name' => '再次结单']
                    ];
                    if ($is_word) {
                        $order_detail['change_status_word'] = ['work_completed'];
                    }
                }
                if ($is_post) {
                    // 也是上报人员
//                    $order_detail['change_status'][] = ['log' => 'evaluate','type'=>'evaluate', 'name' => '评价'];
                    $order_detail['change_status'][] = ['log' => 'reopen', 'type' => '', 'name' => '重新打开'];
                    $order_detail['change_status'][] = ['log' => 'recall', 'type' => '', 'name' => '撤回'];
                    $order_detail['change_status'][] = ['log' => 'closed', 'type' => '', 'name' => '关闭'];
                    if ($is_word) {
                        $order_detail['change_status_word'][] = 'evaluate';
                        $order_detail['change_status_word'][] = 'reopen';
                        $order_detail['change_status_word'][] = 'recall';
                        $order_detail['change_status_word'][] = 'closed';
                    }
                }
            } elseif ($order_detail['event_status'] >= 50 && $order_detail['event_status'] < 70) {
                // 已撤回 已关闭
                if($is_post){
                    // 也是上报人员
                    $order_detail['change_status'][] = ['log' => 'reopen', 'type' => '', 'name' => '重新打开'];
                    if ($is_word) {
                        $order_detail['change_status_word'][] = 'reopen';
                    }
                } else {
                    $order_detail['change_status'] = [];
                    if ($is_word) {
                        $order_detail['change_status_word'] = [];
                    }
                }
            } elseif ($order_detail['event_status'] >= 70 && $order_detail['event_status'] < 80) {
                // 已评价
                if ($is_post) {
                    $order_detail['change_status'] = [
                        ['log' => 'reopen', 'type' => '', 'name' => '重新打开'],
                        ['log' => 'recall', 'type' => '', 'name' => '撤回'],
                        ['log' => 'closed', 'type' => '', 'name' => '关闭'],
                    ];
                    if ($is_word) {
                        $order_detail['change_status_word'] = ['reopen', 'recall', 'closed'];
                    }
                } else {
                    $order_detail['change_status'] = [];
                    if ($is_word) {
                        $order_detail['change_status_word'] = [];
                    }
                }
            }
        }
        if (!$order_detail['change_status']) {
            $order_detail['change_status'] = [];
            if ($is_word) {
                $order_detail['change_status_word'] = [];
            }
        }
        if (isset($order_detail['add_time']) && $order_detail['add_time']) {
            $order_detail['add_time_txt'] = date('Y-m-d H:i:s', $order_detail['add_time']);
        }
        if (isset($order_detail['go_time']) && $order_detail['go_time']) {
            $order_detail['go_time_txt'] = date('Y-m-d H:i:s', $order_detail['go_time']);
        }
        if ($order_detail['bind_id']==0){
            $order_detail['pay_type']=[['key'=>'2','type'=>'线下缴费']];
        }else{
            $order_detail['pay_type']=[['key'=>'1','type'=>'线上缴费'],['key'=>'2','type'=>'线下缴费']];
        }
        if ($is_arr && $order_detail) {
            $order_arr = [];
            // type 为1 展示 content 为字符串  type为2  展示 children 为数组 type为3时候 展示imgs 为数组
            if (isset($order_detail['name']) && $order_detail['name']) {
                $order_arr[] = [
                    'title' => '上报人员',
                    'type' => 1,
                    'content' => $order_detail['name'],
                    'content_color' => '',
                    'children' => [],
                    'imgs' => [],
                ];
            }
            $address_txt = '无';
            $village_id = intval($order_detail['village_id']);
            $db_house_village = new HouseVillage();
            if ($village_id) {
                $village_info = $db_house_village->getOne($village_id, 'village_id,village_name,property_id');
            } else {
                $village_info = [];
            }
            if (isset($order_detail['address_txt']) && $order_detail['address_txt']) {
                $address_txt = $order_detail['address_txt'];
            } elseif (isset($order_detail['public_id']) && $order_detail['public_id']) {
                $public_id = intval($order_detail['public_id']);
                // 获取下公共区域
                $db_house_village_public_area = new HouseVillagePublicArea();
                $wherePublicArea = [];
                $wherePublicArea[] = ['public_area_id', '=', $public_id];
                $publicAreaInfo = $db_house_village_public_area->getOne($wherePublicArea, 'public_area_id, public_area_name');
                if ($publicAreaInfo && isset($publicAreaInfo['public_area_name']) && $publicAreaInfo['public_area_name']) {
                    $address_txt = $publicAreaInfo['public_area_name'];
                    if ($village_info && isset($village_info['village_name']) && $village_info['village_name']) {
                        $address_txt = $village_info['village_name'] . ' ' . $address_txt;
                    }
                }
            } elseif (isset($order_detail['room_id']) && $order_detail['room_id']) {
                $room_id = intval($order_detail['room_id']);
                $db_house_village_user_vacancy = new HouseVillageUserVacancy();
                $where_room = [];
                $where_room[] = ['pigcms_id','=', $room_id];
                $field_room = 'pigcms_id, room, village_id, single_id, floor_id, layer_id';
                $room_info = $db_house_village_user_vacancy->getOne($where_room, $field_room);
                if (isset($order_detail['single_id']) && $order_detail['single_id']) {
                    $single_id = intval($order_detail['single_id']);
                } elseif (isset($room_info['single_id']) && $room_info['single_id']) {
                    $single_id = intval($room_info['single_id']);
                }
                if (isset($order_detail['floor_id']) && $order_detail['floor_id']) {
                    $floor_id = intval($order_detail['floor_id']);
                } elseif (isset($room_info['floor_id']) && $room_info['floor_id']) {
                    $floor_id = intval($room_info['floor_id']);
                }
                if (isset($order_detail['layer_id']) && $order_detail['layer_id']) {
                    $layer_id = intval($order_detail['layer_id']);
                } elseif (isset($room_info['layer_id']) && $room_info['layer_id']) {
                    $layer_id = intval($room_info['layer_id']);
                }
                $room_village_id = isset($room_info['village_id']) && $room_info['village_id'] ? intval($room_info['village_id']) : $village_id;
                if ($single_id && $floor_id && $layer_id && $room_id && $room_village_id) {
                    $service_house_village = new HouseVillageService();
                    $address_txt = $service_house_village->getSingleFloorRoom($single_id, $floor_id, $layer_id, $room_id, $room_village_id);
                    if ($address_txt && $village_info && isset($village_info['village_name']) && $village_info['village_name']) {
                        $address_txt = $village_info['village_name'] . ' ' . $address_txt;
                    }
                }
            }
            if ($address_txt) {
                $order_arr[] = [
                    'title' => '上报位置',
                    'type' => 1,
                    'content' => $address_txt,
                    'content_color' => '',
                    'children' => [],
                    'imgs' => [],
                ];
            }
            if (isset($order_detail['add_time_txt']) && $order_detail['add_time_txt']) {
                $order_arr[] = [
                    'title' => '上报时间',
                    'type' => 1,
                    'content' => $order_detail['add_time_txt'],
                    'content_color' => '',
                    'children' => [],
                    'imgs' => [],
                ];
            }
            if (isset($order_detail['phone']) && $order_detail['phone']) {
                $order_arr[] = [
                    'title' => '手机号码',
                    'type' => 1,
                    'content' => $order_detail['phone'],
                    'content_color' => '',
                    'children' => [],
                    'imgs' => [],
                ];
            }
            if (isset($order_detail['go_time_txt']) && $order_detail['go_time_txt']) {
                $go_time_txt = $order_detail['go_time_txt'];
            } else {
                $go_time_txt = '无';
            }
            $order_arr[] = [
                'title' => '上门时间',
                'type' => 1,
                'content' => $go_time_txt,
                'content_color' => '',
                'children' => [],
                'imgs' => [],
            ];
            $category_txt = '无';
            if (isset($order_detail['category_id_txt']) && $order_detail['category_id_txt']) {
                $category_txt = $order_detail['category_id_txt'];
            }
            $type_id_txt = '无';
            if (isset($order_detail['type_id_txt']) && $order_detail['type_id_txt']) {
                $type_id_txt = $order_detail['type_id_txt'];
            }
            $order_arr[] = [
                'title' => '工单类目',
                'type' => 1,
                'content' => $order_detail['cat_fid_txt'],
                'content_color' => '',
                'children' => [],
                'imgs' => [],
            ];

            $cat_txt = '无';
            if (isset($order_detail['cat_id_txt']) && $order_detail['cat_id_txt']) {
                $cat_txt = $order_detail['cat_id_txt'];
            }
            $order_arr[] = [
                'title' => '工单分类',
                'type' => 1,
                'content' => $cat_txt,
                'content_color' => '',
                'children' => [],
                'imgs' => [],
            ];
            $label_txt = '无';
            if (isset($order_detail['label_txt']) && trim($order_detail['label_txt'], ',')) {
                $db_house_new_repair_cate_custom = new HouseNewRepairCateCustom();
                $label_txt = trim($order_detail['label_txt'], ',');
                $whereLabel = [];
                $whereLabel[] = ['id', 'in', $label_txt];
                $labelData = $db_house_new_repair_cate_custom->getList($whereLabel, 'id,name', 0, 0, '');
                if (!empty($labelData)) {
                    $labelArr = [];
                    foreach ($labelData as $LVal) {
                        if ($LVal && isset($LVal['name'])) {
                            $labelArr[] = $LVal['name'];
                        }
                    }
                    $label_txt = implode("；", $labelArr);
                }
            }
            $order_arr[] = [
                'title' => '自定义字段',
                'type' => 1,
                'content' => $label_txt,
                'content_color' => '',
                'children' => [],
                'imgs' => [],
            ];
            $order_arr[] = [
                'title' => '补充内容',
                'type' => 1,
                'content' => isset($order_detail['order_content']) && $order_detail['order_content'] ? $order_detail['order_content'] : '无',
                'content_color' => '',
                'children' => [],
                'imgs' => [],
            ];
            if (isset($order_detail['order_imgs']) && $order_detail['order_imgs']) {
                $order_imgs = $order_detail['order_imgs'];
                if (strpos($order_imgs,';') !== false) {
                    $order_imgs = explode(';',$order_imgs);
                } elseif($order_imgs) {
                    $order_imgs = explode(',',$order_imgs);
                }
                if ($order_imgs) {
                    $order_imgs_arr = [];
                    foreach ($order_imgs as $val) {
                        $order_imgs_arr[] = replace_file_domain($val);
                    }
                    $order_detail['order_imgs_arr'] = $order_imgs_arr;
                }
            }
            $order_image = [
                'title' => '上报图例',
                'type' => 1,
                'content' => '无',
                'content_color' => '',
                'children' => [],
                'imgs' => [],
            ];
            if (isset($order_detail['order_imgs_arr']) && $order_detail['order_imgs_arr']) {
                $order_image['type'] = 3;
                $order_image['content'] = '';
                $order_image['imgs'] = $order_detail['order_imgs_arr'];
            }
            $order_arr[] = $order_image;
            if (isset($order_detail['event_status_txt']) && $order_detail['event_status_txt']) {
                $order_arr[] = [
                    'title' => $title_status,
                    'type' => 1,
                    'content' => $order_detail['event_status_txt'],
                    'content_color' => $order_detail['event_status_color'],
                    'children' => [],
                    'imgs' => [],
                ];
            }
            if (empty($log)) {
                $log = (object)[];
            }
            $order_detail['log'] = $log;

            $order_detail['order_arr'] = $order_arr;
        }
//        $order_detail['event_status'] = floor($order_detail['event_status']/10)*10;
        if ($order_detail['event_status'] < 20 && $order_detail['event_status'] != 15) {
            $order_detail['event_status'] = 10;
        } elseif ($order_detail['event_status'] >= 20 && $order_detail['event_status'] < 40) {
            $order_detail['event_status'] = 20;
        } elseif ($order_detail['event_status'] >= 40 && $order_detail['event_status'] < 49) {
            $order_detail['event_status'] = 40;
        }
        $order_detail['is_grab_order']=($order_detail['event_status'] == 15) ? true: false;
        return $order_detail;
    }

    /**
     * Notes: 获取企业通讯录
     * @param $group_id
     * @param $login_role
     * @param $worker_id
     * @param $property_id
     * @param string $search
     * @param $order_id
     * @param $type_name
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function repairWorkList($group_id,$login_role,$worker_id,$property_id,$search='',$order_id,$type_name,$village_id=0) {
        $work_arr = [];
        $site_url = cfg('site_url');
        $static_resources = static_resources(true);
        $dbHouseWorker = new HouseWorker();
        $db_property_group = new PropertyGroup();
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $common_works = [];
        $common_wids = [];
        if ($search) {
            // 搜索查询该物业下所有符合条件的工作人员
            $where_enterprise_works = [];
            $where_enterprise_works[] = ['property_id', '=', $property_id];
            $where_enterprise_works[] = ['status', '=', 1];
            $where_enterprise_works[] = ['is_del', '=', 0];
            $where_enterprise_works[] = ['name|phone', 'like', "%$search%"];
            if (!empty($common_wids)) {
                $where_enterprise_works[] = ['wid', 'not in', $common_wids];
            }
            if($village_id){
                $where_enterprise_works[] = ['village_id', '=', $village_id];
            }
            $enterprise_works = $dbHouseWorker->getSome($where_enterprise_works, 'wid, name, avatar');
            if (!empty($enterprise_works)) {
                foreach ($enterprise_works as $item1) {
                    if (empty($item1['avatar'])) {
                        $item1['avatar'] = $site_url . $static_resources . 'images/avatar.png';
                    }
                    $enterprise_works_arr[] = [
                        'work_id' => $item1['wid'],
                        'name' => $item1['name'],
                        'avatar' => $item1['avatar'],
                        'type' => 'work'
                    ];
                }
            }
            // 查询对应 通讯录 组织部门
            $where_enterprise_group = [];
            $where_enterprise_group[] = ['fid', '=', $group_id];
            $where_enterprise_group[] = ['property_id', '=', $property_id];
            $where_enterprise_group[] = ['status', '=', 1];
            $where_enterprise_group[] = ['is_del', '=', 0];
            if($village_id){
                $where_enterprise_group[] = ['village_id', '=', $village_id];
            }
            $property_group_info = $db_property_group->getList($where_enterprise_group, 'id,name,sort', 0, 0, 'sort DESC,id ASC');
            if (!empty($property_group_info)) {
                foreach ($property_group_info as $item2) {
                    $item2['avatar'] = $site_url . $static_resources . 'images/Structural.png';
                    $enterprise_works_arr[] = [
                        'group_id' => $item2['id'],
                        'name' => $item2['name'],
                        'avatar' => $item2['avatar'],
                        'type' => 'group'
                    ];
                }
            }
            if (!empty($enterprise_works_arr)) {
                $block = [
                    'title' => '联系人',
                    'children' => $enterprise_works_arr
                ];
                $work_arr[] = $block;
            }
        } elseif (!$group_id) {
            $where_order = [];
            $where_order[] = ['order_id', '=', $order_id];
            $order_detail = $db_house_new_repair_works_order->getOne($where_order, 'village_id,event_status');
            $assign = 1;
            if ($order_detail['event_status'] < 20 && $order_detail['event_status'] >= 10 && $type_name == 'choose_work') {
                $assign = 0;
            }
            $order_village_id=0;
            if($order_detail && isset($order_detail['village_id'])){
                $order_village_id=$order_detail['village_id'];
                $village_id=$order_village_id;
            }
            // 查询下同部门的
            if (6==$login_role && $assign) {
                $where[] = ['wid','=',$worker_id];
                $work_info = $dbHouseWorker->getOne($where,'wid, village_id, property_id, name, department_id, status');
                if (!$property_id && $work_info && isset($work_info['property_id'])) {
                    $property_id = $work_info['property_id'];
                }
                if($order_village_id>0 && $order_village_id!=$work_info['village_id']){
                    $work_info=array();
                }
                if ($work_info && isset($work_info['department_id'])) {
                    $department_id = intval($work_info['department_id']);
                    $where_common_group = [];
                    $where_common_group[] = ['department_id', '=', $department_id];
                    $where_common_group[] = ['property_id', '=', $property_id];
                    $where_common_group[] = ['status', '=', 1];
                    $where_common_group[] = ['is_del', '=', 0];
                    if($village_id){
                        $where_common_group[] = ['village_id', '=', $village_id];
                    }
                    $commons = $dbHouseWorker->getSome($where_common_group, 'wid, name, avatar');
                    if (!empty($commons)) {
                        foreach ($commons as $item) {
                            if (empty($item['avatar'])) {
                                $item['avatar'] = $site_url . $static_resources . 'images/avatar.png';
                            }
                            $common_works[] = [
                                'work_id' => $item['wid'],
                                'name' => $item['name'],
                                'avatar' => $item['avatar'],
                                'type' => 'work'
                            ];
                            $common_wids[] = $item['wid'];
                        }
                        if (!empty($common_works)) {
                            $block = [
                                'title' => '同部门',
                                'children' => $common_works
                            ];
                            $work_arr[] = $block;
                        }
                    }
                }
            }
            $where_paren_group = [];

            $where_paren_group[] = ['property_id', '=', $property_id];
            $where_paren_group[] = ['status', '=', 1];
            $where_paren_group[] = ['is_del', '=', 0];
            if($village_id){
                $where_paren_group[] = ['type', '=', 0];
                $where_paren_group[] = ['village_id', '=', $village_id];
            }else{
                $where_paren_group[] = ['fid', '=', 0];
                $where_paren_group[] = ['type', '=', 99];
            }
            $property_paren_group = $db_property_group->getOne($where_paren_group, 'id,name');
            $enterprise_works_arr = [];
            if (!empty($property_paren_group) && isset($property_paren_group['id'])) {
                $group_id = $property_paren_group['id'];
                // 查询对应企业通讯录 对应工作人员
                $where_enterprise_works = [];
                $where_enterprise_works[] = ['department_id', '=', $group_id];
                $where_enterprise_works[] = ['property_id', '=', $property_id];
                $where_enterprise_works[] = ['status', '=', 1];
                $where_enterprise_works[] = ['is_del', '=', 0];
                if (!empty($common_wids)) {
                    $where_enterprise_works[] = ['wid', 'not in', $common_wids];
                }
                if($village_id){
                    $where_enterprise_works[] = ['village_id', '=', $village_id];
                }
                $enterprise_works = $dbHouseWorker->getSome($where_enterprise_works, 'wid, name, avatar');
                if (!empty($enterprise_works)) {
                    foreach ($enterprise_works as $item1) {
                        if (empty($item1['avatar'])) {
                            $item1['avatar'] = $site_url . $static_resources . 'images/avatar.png';
                        }
                        $enterprise_works_arr[] = [
                            'work_id' => $item1['wid'],
                            'name' => $item1['name'],
                            'avatar' => $item1['avatar'],
                            'type' => 'work'
                        ];
                    }
                }
                // 查询对应 通讯录 组织部门
                $where_enterprise_group = [];
                $where_enterprise_group[] = ['fid', '=', $group_id];
                $where_enterprise_group[] = ['property_id', '=', $property_id];
                $where_enterprise_group[] = ['status', '=', 1];
                $where_enterprise_group[] = ['is_del', '=', 0];
                if($village_id){
                    $where_enterprise_group[] = ['village_id', '=', $village_id];
                }
                $property_group_info = $db_property_group->getList($where_enterprise_group, 'id,name,sort', 0, 0, 'sort DESC,id ASC');
                if (!empty($property_group_info)) {
                    foreach ($property_group_info as $item2) {
                        $item2['avatar'] = $site_url . $static_resources . 'images/Structural.png';
                        $enterprise_works_arr[] = [
                            'group_id' => $item2['id'],
                            'name' => $item2['name'],
                            'avatar' => $item2['avatar'],
                            'type' => 'group'
                        ];
                    }
                }
                if (!empty($enterprise_works_arr)) {
                    $block = [
                        'title' => '组织架构',
                        'children' => $enterprise_works_arr
                    ];
                    $work_arr[] = $block;
                }
            }
        } else {
            // 查询对应企业通讯录 对应工作人员
            $where_enterprise_works = [];
            $where_enterprise_works[] = ['department_id', '=', $group_id];
            $where_enterprise_works[] = ['property_id', '=', $property_id];
            $where_enterprise_works[] = ['status', '=', 1];
            $where_enterprise_works[] = ['is_del', '=', 0];
            if ($search) {
                $where_enterprise_works[] = ['name|phone', 'like', "%$search%"];
            }
            if (!empty($common_wids)) {
                $where_enterprise_works[] = ['wid', 'not in', $common_wids];
            }
            if($village_id){
                $where_enterprise_works[] = ['village_id', '=', $village_id];
            }
            $enterprise_works = $dbHouseWorker->getSome($where_enterprise_works, 'wid, name, avatar');
            if (!empty($enterprise_works)) {
                foreach ($enterprise_works as $item1) {
                    if (empty($item1['avatar'])) {
                        $item1['avatar'] = $site_url . $static_resources . 'images/avatar.png';
                    }
                    $enterprise_works_arr[] = [
                        'work_id' => $item1['wid'],
                        'name' => $item1['name'],
                        'avatar' => $item1['avatar'],
                        'type' => 'work'
                    ];
                }
            }
            // 查询对应 通讯录 组织部门
            $where_enterprise_group = [];
            $where_enterprise_group[] = ['fid', '=', $group_id];
            $where_enterprise_group[] = ['property_id', '=', $property_id];
            $where_enterprise_group[] = ['status', '=', 1];
            $where_enterprise_group[] = ['is_del', '=', 0];
            if($village_id){
                $where_enterprise_group[] = ['village_id', '=', $village_id];
            }
            $property_group_info = $db_property_group->getList($where_enterprise_group, 'id,name,sort,village_id ', 0, 0, 'sort DESC,id ASC');
            if (!empty($property_group_info)) {
                foreach ($property_group_info as $item2) {
                    $item2['avatar'] = $site_url . $static_resources . 'images/Structural.png';
                    $enterprise_works_arr[] = [
                        'group_id' => $item2['id'],
                        'village_id'=> $item2['village_id'],
                        'name' => $item2['name'],
                        'avatar' => $item2['avatar'],
                        'type' => 'group'
                    ];
                }
            }
            if (!empty($enterprise_works_arr)) {
                $block = [
                    'title' => '组织架构',
                    'children' => $enterprise_works_arr
                ];
                $work_arr[] = $block;
            }
        }
        return $work_arr;
    }

    /**
     * Notes: 变更工单状态
     * @param int $login_role
     * @param $data
     * @return array
     * @throws \think\Exception
     * @author: wanzy
     * @date_time: 2021/8/18 19:15
     */
    public function filterAddWorkOrderLog($login_role = 6, $data)
    {
        $log_name = $data['log_name'];
        if (!$log_name) {
            throw new \think\Exception('缺少必传参数');
        }
        if (!isset($data['order_id']) || !$data['order_id']) {
            throw new \think\Exception('缺少必传参数');
        }
        if (!isset($data['worker_id']) || !$data['worker_id']) {
            throw new \think\Exception('缺少必传参数');
        }
        $order_id = $data['order_id'];
        $log_arr = [];
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
        $db_house_worker = new HouseWorker();
        $where_order = [];
        $where_order[] = ['order_id', '=', $order_id];
        $order_detail_info = $db_house_new_repair_works_order->getOne($where_order);
        if (empty($order_detail_info)) {
            throw new \think\Exception('对应工单不存在');
        }
        $property_id=$order_detail_info['property_id'];
        $db_house_new_repair_subject = new HouseNewRepairCate();
        $subject_info=$db_house_new_repair_subject->getOne(['id'=>$order_detail_info['cat_id']]);
        if (empty($subject_info)){
            throw new \think\Exception('工单分类不存在');
        }
        if ($subject_info['charge_type']==1){
            if (!empty($order_detail_info['project_id'])){
                $data['project_id']=$order_detail_info['project_id'];
            }
            if (!empty($order_detail_info['rule_id'])){
                $data['rule_id']=$order_detail_info['rule_id'];
            }

            if ($order_detail_info['event_status']<30&&'work_follow_up' == $log_name){
                if (empty($data['project_id'])){
                    throw new \think\Exception('请先选择工单收费项目');
                }
                if (empty($data['rule_id'])){
                    throw new \think\Exception('请先选择工单收费标准');
                }
                $db_house_new_charge_rule = new HouseNewChargeRule();
                $db_house_new_charge_project = new HouseNewChargeProject();
                $project_info=$db_house_new_charge_project->getOne(['id'=>$data['project_id']]);
                if (empty($project_info)){
                    throw new \think\Exception('工单收费项目不存在');
                }
                $rule_info=$db_house_new_charge_rule->getOne(['id'=>$data['rule_id']]);
                if (empty($rule_info)){
                    throw new \think\Exception('工单收费标准不存在');
                }
            }
            if ($order_detail_info['event_status']<30&&'work_completed' == $log_name){
                if (empty($data['rule_id'])){
                    throw new \think\Exception('请先选择跟进操作');
                }
            }

        }
        $worker_id = $data['worker_id'];
        $order_detail = $this->workGetOrder($order_id, $worker_id, $login_role, false, true);
        $change_status_word = isset($order_detail['change_status_word']) ? $order_detail['change_status_word'] : [];
        if (empty($change_status_word)) {
            throw new \think\Exception('当前状态用户无法进行修改');
        }
        if (!in_array($log_name, $change_status_word)) {
            throw new \think\Exception('请上报正确处理类型');
        }
        if($property_id<=0 && $order_detail && $order_detail['property_id']>0){
            $property_id=$order_detail['property_id'];
        }
        $order_imgs = $data['order_imgs'];
        if (is_array($order_imgs)) {
            $order_imgs = implode(';', $order_imgs);
        } elseif (is_string($order_imgs)) {
            $order_imgs = trim($order_imgs);
        }
        $order_content = isset($data['order_content']) && $data['order_content'] ? $data['order_content'] : '';

        $log_operator = $order_detail['name'] ? $order_detail['name'] : '';
        $log_phone = $order_detail['phone'] ? $order_detail['phone'] : '';
        $operator_id = $worker_id;
        $evaluate = isset($order_detail['evaluate']) ? intval($order_detail['evaluate']) : 0;
        $assign_worker_id=0;
        // 添加记录前先行修改订单状态
        if ('property_admin_assign' == $log_name) {
            // 物业管理员指派
            if (!isset($data['choose_worker_id']) || !$data['choose_worker_id']) {
                throw new \think\Exception('缺少必传参数');
            }
            $choose_worker_id = intval($data['choose_worker_id']);
            $order_set = [
                'now_role' => 3,
                'event_status' => 21,
                'worker_type' => 0,
                'worker_id' => $choose_worker_id,
            ];
            $status = 'processing'; // 处理中
            $operator_type = 41;
            $assign_worker_id=$choose_worker_id;
        }
        elseif ('property_work_assign' == $log_name) {
            // 物业工作人员指派
            if (!isset($data['choose_worker_id']) || !$data['choose_worker_id']) {
                throw new \think\Exception('缺少必传参数');
            }
            $choose_worker_id = intval($data['choose_worker_id']);
            $order_set = [
                'now_role' => 3,
                'event_status' => 22,
                'worker_type' => 0,
                'worker_id' => $choose_worker_id,
            ];
            $status = 'processing'; // 处理中
            $operator_type = 42;
            $assign_worker_id=$choose_worker_id;
        }
        elseif ('house_admin_assign' == $log_name) {
            // 小区管理员指派
            if (!isset($data['choose_worker_id']) || !$data['choose_worker_id']) {
                throw new \think\Exception('缺少必传参数');
            }
            $choose_worker_id = intval($data['choose_worker_id']);
            $order_set = [
                'now_role' => 3,
                'event_status' => 23,
                'worker_type' => 0,
                'worker_id' => $choose_worker_id,
            ];
            $status = 'processing'; // 处理中
            $operator_type = 43;
            $assign_worker_id=$choose_worker_id;
        }
        elseif ('property_admin_reply' == $log_name) {
            // 物业管理员回复
            $order_set = [
                'now_role' => 1,
                'event_status' => 41,
            ];
            $status = 'processed'; // 已处理
            $operator_type = 41;
        }
        elseif ('property_work_reply' == $log_name) {
            // 物业工作人员回复
            $order_set = [
                'now_role' => 1,
                'event_status' => 42,
            ];
            $status = 'processed'; // 已处理
            $operator_type = 42;
        }
        elseif ('house_admin_reply' == $log_name) {
            // 小区管理员回复
            $order_set = [
                'now_role' => 1,
                'event_status' => 43,
            ];
            $status = 'processed'; // 已处理
            $operator_type = 43;
        }
        elseif ('reopen' == $log_name) {
            //重新打开
            if (isset($order_detail['worker_id']) && $order_detail['worker_id']) {
                // 已经有工作人员了  应该是 已指派 且下个操作人员类型是工作人员
                $now_role = 3;
                $event_status = 20;
            } else {
                // 无工作人员了  应该是 待指派 且下个操作人员类型是处理中心
                $now_role = 2;
                $event_status = 10;
            }
            $order_set = [
                'now_role' => $now_role,
                'event_status' => $event_status,
            ];
            $status = 'processing'; // 处理中
            $operator_type = 10;
        }
        elseif ('recall' == $log_name || 'closed' == $log_name) {
            //撤回
            if ('recall' == $log_name) {
                $event_status = 50;
            } else {
                $event_status = 60;
            }
            $order_set = [
                'now_role' => 1,
                'event_status' => $event_status,
            ];
            $status = 'processed'; // 已处理
            $operator_type = 10;
        }
        elseif ('evaluate' == $log_name) {
            //评分
            if (!isset($order_detail['evaluate'])) {
                throw new \think\Exception('缺少评分');
            }
            if ($evaluate < 0 || $evaluate > 5) {
                throw new \think\Exception('评分只支持0-5');
            }
            $order_set = [
                'now_role' => 1,
                'event_status' => 70,
                'evaluate' => $evaluate,
            ];
            $status = 'processed'; // 已处理
            $operator_type = 10;
        }
        elseif ('work_reject_center' == $log_name) {
            //驳回给处理中心
            $order_set = [
                'now_role' => 2,
                'event_status' => 11,
                'worker_id' => 0,
            ];
            $status = 'processing'; // 处理中
            $operator_type = 30;
        }
        elseif ('work_follow_up' == $log_name) {
            if ($subject_info['charge_type']==1){
                if (empty($data['project_id'])){
                    throw new \think\Exception('请先选择工单收费项目');
                }
                if (empty($data['rule_id'])){
                    throw new \think\Exception('请先选择工单收费标准');
                }
                $db_house_new_charge_rule = new HouseNewChargeRule();
                $db_house_new_charge_project = new HouseNewChargeProject();
                $db_house_new_offline_pay = new HouseNewOfflinePay();
                $project_info=$db_house_new_charge_project->getOne(['id'=>$data['project_id']]);
                if (empty($project_info)){
                    throw new \think\Exception('工单收费项目不存在');
                }
                $rule_info=$db_house_new_charge_rule->getOne(['id'=>$data['rule_id']]);
                if (empty($rule_info)){
                    throw new \think\Exception('工单收费标准不存在');
                }
                if ($order_detail_info['bind_id']==0){
                    $offline_pay=$db_house_new_offline_pay->get_one(['property_id'=>$order_detail_info['property_id'],'status'=>1]);
                   if (!empty($offline_pay)){
                       $offline_pay_id=$offline_pay['id'];
                   }else{
                       $offline_pay_id=0;
                   }
                    //处理人员跟进
                    $order_set = [
                        'now_role' => 1,
                        'event_status' => 36,
                        'rule_id' =>$data['rule_id'],
                        'project_id' =>$data['project_id'],
                        'charge_price' =>$rule_info['charge_price'],
                        'pay_type' =>2,
                        'offline_pay_type' =>$offline_pay_id,
                    ];
                }else{
                    if ($order_detail_info['event_status']==36){
                        //处理人员跟进
                        $order_set = [
                            'now_role' => 1,
                            'event_status' => 36,
                            'rule_id' =>$data['rule_id'],
                            'project_id' =>$data['project_id'],
                            'charge_price' =>$rule_info['charge_price'],
                        ];
                    }else{
                        //处理人员跟进
                        $order_set = [
                            'now_role' => 1,
                            'event_status' => 35,
                            'rule_id' =>$data['rule_id'],
                            'project_id' =>$data['project_id'],
                            'charge_price' =>$rule_info['charge_price'],
                        ];
                    }
                }

            }else{
                //处理人员跟进
                $order_set = [
                    'now_role' => 3,
                    'event_status' => 30,
                ];
            }

            $status = 'todo'; // 待处理
            $operator_type = 30;
        }
        elseif ('work_completed' == $log_name) {
            if ($subject_info['charge_type']==1){
                if (empty($data['charge_price'])){
                    $data['charge_price']= $order_detail_info['charge_price'];
                }
                if (empty($data['pay_type'])){
                    $data['pay_type']= $order_detail_info['pay_type'];
                    if (empty($data['pay_type'])){
                        throw new \think\Exception('请先选择工单缴费方式');
                    }
                }
                if ($data['pay_type']==1){
                   $event_status=44;
                }elseif ($data['pay_type']==2){
                    $event_status=45;
                }else{
                    $event_status=40;
                }
                //处理人员跟进
                $order_set = [
                    'now_role' => 1,
                    'event_status' => $event_status,
                    'charge_price' =>$data['charge_price'],
                    'pay_type' =>$data['pay_type'],
                    'offline_pay_type' =>$data['offline_pay_type'],
                    'change_reason' =>$data['change_reason'],
                ];
            }else{
                //处理人员结单
                $order_set = [
                    'now_role' => 1,
                    'event_status' => 40,
                ];
            }
            $status = 'processed'; // 已处理
            $operator_type = 30;
            $rr=$this->getTimelyStatus($order_detail);
            if($rr['error']){
                $order_set=array_merge($order_set,$rr['data']);
            }
        }
        elseif ('work_change' == $log_name) {
            //处理人员转单
            if (!isset($data['choose_worker_id']) || !$data['choose_worker_id']) {
                throw new \think\Exception('缺少必传参数');
            }
            $choose_worker_id = intval($data['choose_worker_id']);
            $order_set = [
                'now_role' => 3,
                'event_status' => 24,
                'worker_type' => 0,
                'worker_id' => $choose_worker_id,
            ];
            $status = 'processed'; // 已处理
            $operator_type = 30;
        }
        elseif ('work_reject_change' == $log_name) {
            // 被转单人员拒绝
            // 查询下 最后一次非本人操作
            $where_log_last = [];
            $where_log_last[] = ['order_id', '=', $order_id];
            $where_log_last[] = ['operator_id', '<>', $worker_id];
            $where_log_last[] = ['operator_type', '>=', 30];
            $where_log_last[] = ['operator_type', '<', 40];
            $log_last = $db_house_new_repair_works_order_log->getOne($where_log_last, true, 'add_time DESC');
            if (empty($log_last)) {
                $log_last = [];
            }
            if ($log_last && isset($log_last['log_name']) && $log_last['log_name'] == 'work_change') {
                $choose_worker_id = intval($log_last['operator_id']);
            }
            $order_set = [
                'now_role' => 3,
                'event_status' => 25,
                'worker_type' => 0,
                'worker_id' => $choose_worker_id,
            ];
            $status = 'processing'; // 处理中
            $operator_type = 30;
        }
        elseif ('work_reject' == $log_name){

            //处理人员拒绝
            $order_set = [
                'now_role' => 2,
                'event_status' => 14,
                'worker_id' => 0,
            ];
            $status = 'todo'; // 待处理
            $operator_type = 30;
        }
        else {
            throw new \think\Exception('请上报正确处理类型');
        }
        $order_set['update_time'] = time();
        $where_update = [];
        $where_update[] = ['order_id', '=', $order_id];
        if(isset($order_set['worker_id']) && !empty($order_set['worker_id'])){
            $order_set['group_id']=$this->getGroupId($order_set['worker_id']);
        }

        $order_update = $db_house_new_repair_works_order->saveOne($where_update, $order_set);
        fdump_api([$order_update,$where_update,$order_set],'addPayOrder_0414',1);
        if ($order_update) {
            // 事件处理人员 处理
            if ($operator_type >= 30 && $operator_type < 40) {
                // 查询处理人信息
                $where_house_work = [];
                $where_house_work[] = ['wid', '=', $operator_id];
                $house_work = $db_house_worker->get_one($where_house_work, 'name,phone');
                $log_operator = $house_work['name'];
                $log_phone = $house_work['phone'];
            }
            // 更新工单成功 记录操作
            $log_data = [
                'order_id' => $order_id,
                'log_name' => $log_name,
                'village_id' => isset($order_detail['village_id']) ? intval($order_detail['village_id']) : '',
                'property_id' => isset($order_detail['property_id']) ? intval($order_detail['property_id']) : '',
                'log_operator' => $log_operator,
                'log_phone' => $log_phone,
                'operator_type' => $operator_type,
                'operator_id' => $operator_id,
                'log_uid' => $order_detail['uid'] ? $order_detail['uid'] : 0,
                'log_content' => $order_content ? $order_content : '',
                'log_imgs' => $order_imgs ? $order_imgs : '',
                'evaluate' => $evaluate,
                'add_time' => time(),
            ];
            $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
            $where_count = [];
            $where_count[] = ['order_id', '=', $order_id];
            $where_count[] = ['log_name', '=', strval($data['log_name'])];
            $log_num = $db_house_new_repair_works_order_log->getCount($where_count);
            if (!$log_num) {
                $log_num = 1;
            } else {
                $log_num = intval($log_num) + 1;
            }
            //收费工单生成缴费账单
            fdump_api([$log_name,$subject_info['charge_type'],$order_set['event_status']],'addPayOrder_0414',1);
            if ('work_completed' == $log_name&&$subject_info['charge_type']==1&&in_array($order_set['event_status'],[44,45])&&$log_num==1){
                $this->addPayOrder($order_id);
            }
            $log_data['log_num'] = $log_num;
            $log_data['project_id'] = $data['project_id'];
            $log_data['rule_id'] = $data['rule_id'];
            $log_data['charge_price'] = $data['charge_price'];
            $log_data['pay_type'] = $data['pay_type'];
            $log_data['change_reason'] = $data['change_reason'];
            $log_id = $this->addRepairLog($log_data);
            $log_arr['log_id'] = $log_id;
            $log_arr['status'] = $status;
            $charge_type=$this->getCateInfo(['id'=>$order_detail_info['cat_id']],'charge_type');
            if($log_name == 'work_follow_up' && ($charge_type && intval($charge_type['charge_type']) == 1) && $order_detail_info['event_status'] < 30 ){
                if($order_detail_info['order_type'] == 5){
                    //todo 后台创建的工单给工作人员发送已确认工单
                    $this->newRepairSendMsg(51,$order_id,0,$property_id);
                }else{
                    //todo 工作人员跟进
                    $this->newRepairSendMsg(50,$order_id,0,$property_id);
                }
            }
            elseif ($log_name == 'work_completed'){
                //todo 工作人员结单
                if($order_detail_info['order_type'] == 0){
                    //todo 用户提交的工单
                    if($order_detail_info['event_status'] >= 40){
                        $this->newRepairSendMsg(32,$order_id,0,$property_id);
                    }else{
                        $this->newRepairSendMsg(30,$order_id,0,$property_id);
                    }
                }elseif ($order_detail_info['order_type'] == 4){
                    //todo 工作人员提交的工单
                    if($order_detail_info['event_status'] >= 40){
                        $this->newRepairSendMsg(33,$order_id,$order_detail_info['uid'],$property_id);
                    }else{
                        $this->newRepairSendMsg(31,$order_id,$order_detail_info['uid'],$property_id);
                    }
                }
            }
            elseif ($log_name == 'reopen'){
                //todo 工作人员重新打开
                $this->newRepairSendMsg(10,$order_id,0,$property_id);
            }
            elseif ($log_name == 'work_reject'){
                if($order_detail_info['order_type'] == 0){
                    //todo 工作人员拒绝用户工单
                    $this->newRepairSendMsg(40,$order_id,0,$property_id);
                }elseif ($order_detail_info['order_type'] == 4){
                    //todo 工作人员拒绝工作人员工单
                    $this->newRepairSendMsg(42,$order_id,$order_detail_info['uid'],$property_id);
                }
            }
            elseif ($log_name == 'closed'){
                //todo 工作人员关闭工单
                $this->newRepairSendMsg(13,$order_id,0,$property_id);
            }
            elseif ($log_name == 'recall'){
                //todo 工作人员撤回工单
                $this->newRepairSendMsg(14,$order_id,0,$property_id);
            }
            elseif ($log_name == 'work_change'){
                //todo 工作人员转单
                $this->newRepairSendMsg(12,$order_id,0,$property_id);
                //todo 转单记录当前转单人信息
                $this->workOrderLogSave($log_id,$order_set['worker_id']);
            }
            elseif ($log_name == 'work_reject_change'){
                //todo 工作人员拒绝被转单 驳回给转单人
                $this->newRepairSendMsg(41,$order_id,$order_set['worker_id'],$property_id);
            }
            elseif (in_array($log_name,['property_admin_assign','property_work_assign','house_admin_assign'])){
                //todo 物业管理员指派、物业工作人员指派、小区管理员指派
                $this->newRepairSendMsg(15,$order_id,0,$property_id);
            }
            if($assign_worker_id){
                //todo 转单记录当前转单人信息
                $this->workOrderLogSave($log_id,$assign_worker_id);
            }
        } else {
            throw new \think\Exception('处理失败');
        }
        return $log_arr;
    }


    public function workGetOrderLog($order_id, $login_role, $worker_id)
    {
        $order_detail = $this->workGetOrder($order_id, $worker_id, $login_role, false, true);
        if (!$order_detail) {
            throw new \think\Exception('对应工单不存在');
        }
        $is_post = isset($order_detail['is_post']) ? $order_detail['is_post'] : false;
        $is_worker = isset($order_detail['is_worker']) ? $order_detail['is_worker'] : false;
        $is_through = isset($order_detail['is_through']) ? $order_detail['is_through'] : false;
        $is_admin = isset($order_detail['is_admin']) ? $order_detail['is_admin'] : false;
        if (!$is_post && !$is_worker && !$is_through && !$is_admin && !($order_detail['event_status'] == 15)) {
            throw new \think\Exception('您当前账号不能查看该工单信息');
        }

        $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();

        $where_log = [];
        $where_log[] = ['order_id','=',$order_id];
        $log_list = $db_house_new_repair_works_order_log->getList($where_log,true,0,0);
        $log = [];
        if ($log_list) {
            $log_list = $log_list->toArray();
            $info = [];
            $log_arr = $this->log_name;
            foreach ($log_list as $val) {
                if (isset($val['log_name']) && $val['log_name']) {
                    if (isset($val['log_num']) && $val['log_num'] > 1) {
                        $title = "第{$val['log_num']}次" . $log_arr[$val['log_name']];
                    } else {
                        $title = $log_arr[$val['log_name']];
                    }
                    if (isset($val['add_time']) && $val['add_time']) {
                        $val['add_time_txt'] = date('Y-m-d H:i:s', $val['add_time']);
                    }
                    $tip = [];
                    if (isset($val['log_operator']) && $val['log_operator']) {
                        $tip[] = [
                            'title' => '操作人员',
                            'content' => $val['log_operator'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_phone']) && $val['log_phone']) {
                        $tip[] = [
                            'title' => '手机号码',
                            'content' => $val['log_phone'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_content']) && $val['log_content']) {
                        $tip[] = [
                            'title' => '内容',
                            'content' => $val['log_content'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_info']) && $val['log_info'] && @unserialize($val['log_info'])) {
                        $log_info = unserialize($val['log_info']);
                        $tip[] = [
                            'title' => '处理人员',
                            'content' => $log_info['name'].'-'.$log_info['phone'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_imgs']) && $val['log_imgs']) {
                        $log_imgs = $val['log_imgs'];
                        if ($log_imgs && strpos($log_imgs, ';') !== false) {
                            $log_imgs = explode(';', $log_imgs);
                        } elseif ($log_imgs) {
                            $log_imgs = explode(',', $log_imgs);
                        }
                        if ($log_imgs) {
                            $val['log_imgs_arr'] = [];
                            foreach ($log_imgs as $val1) {
                                $val['log_imgs_arr'][] = replace_file_domain($val1);
                            }
                        }
                        $tip[] = [
                            'title' => '',
                            'content' => '',
                            'content_color' => '',
                            'type' => 2,
                            'imgs' => $val['log_imgs_arr'],
                        ];
                    }
                    $info[] = [
                        'title' => $title,
                        'log_time' => isset($val['add_time_txt']) ? $val['add_time_txt'] : '',
                        'tip' => $tip
                    ];
                }
            }
            $log['info'] = $info;
        } else {
            $log_list = [];
        }
        $log['list'] = $log_list;
        return $log;
    }


    public function getRepairOrderNum($login_role, $worker_id)
    {
        // 初始化 小区车辆 数据层
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $whereRaw = '';
        if (5 == $login_role) {
            $whereRaw = "(event_status<10) OR (order_type=3 AND uid={$worker_id} AND event_status>=40 AND event_status<70)";
        } elseif (6 == $login_role) {
            $whereRaw = "(event_status<=20 AND event_status<40 AND worker_type=0 AND worker_id={$worker_id})";
        }
        $count = $db_house_new_repair_works_order->getCount($whereRaw);
        if (!$count) {
            $count = 0;
        }
        return $count;
    }

    /**
     * 工单操作日志列表
     * @param int $order_id
     * @return array
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/08/13
     */
    public function getRepairLog($order_id = 0)
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $order_detail = $db_house_new_repair_works_order->getOne(['order_id' => $order_id]);
        if (!$order_detail) {
            throw new \think\Exception('对应工单不存在');
        }
        $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();

        $where_log = [];
        $where_log[] = ['order_id','=',$order_id];
        $log_list = $db_house_new_repair_works_order_log->getList($where_log,true,0,0,'log_id DESC');
        $log = [];
        if ($log_list) {
            $log_list = $log_list->toArray();
            $info = [];
            $log_arr = $this->log_name;
            foreach ($log_list as $val) {
                if (isset($val['log_name']) && $val['log_name']) {
                    if (isset($val['log_num']) && $val['log_num'] > 1) {
                        $title = "第{$val['log_num']}次" . $log_arr[$val['log_name']];
                    } else {
                        $title = $log_arr[$val['log_name']];
                    }
                    if (isset($val['add_time']) && $val['add_time']) {
                        $val['add_time_txt'] = date('Y-m-d H:i:s', $val['add_time']);
                    }
                    $tip = [];
                    if($val['log_name'] == 'evaluate'){
                        $tip[] = [
                            'title' => '评分',
                            'content' => $val['evaluate'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_content']) && $val['log_content'] && $val['log_name'] == 'evaluate') {
                        $tip[] = [
                            'title' => '评论详情',
                            'content' => $val['log_content'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_operator']) && $val['log_operator']) {
                        $tip[] = [
                            'title' => '操作人员',
                            'content' => $val['log_operator'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_phone']) && $val['log_phone']) {
                        $tip[] = [
                            'title' => '手机号码',
                            'content' => phone_desensitization($val['log_phone']),
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_content']) && $val['log_content'] && $val['log_name'] != 'evaluate') {
                        $tip[] = [
                            'title' => '内容',
                            'content' => $val['log_content'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_info']) && $val['log_info'] && @unserialize($val['log_info'])) {
                        $log_info = unserialize($val['log_info']);
                        $tip[] = [
                            'title' => '处理人员',
                            'content' => $log_info['name'].'-'.$log_info['phone'],
                            'content_color' => '',
                            'type' => 1,
                            'imgs' => [],
                        ];
                    }
                    if (isset($val['log_imgs']) && $val['log_imgs']) {
                        $log_imgs = $val['log_imgs'];
                        if ($log_imgs && strpos($log_imgs, ';') !== false) {
                            $log_imgs = explode(';', $log_imgs);
                        } elseif ($log_imgs) {
                            $log_imgs = explode(',', $log_imgs);
                        }
                        if ($log_imgs) {
                            $val['log_imgs_arr'] = [];
                            foreach ($log_imgs as $val1) {
                                $val['log_imgs_arr'][] = replace_file_domain($val1);
                            }
                        }
                        $tip[] = [
                            'title' => '',
                            'content' => '',
                            'content_color' => '',
                            'type' => 2,
                            'imgs' => $val['log_imgs_arr'],
                        ];
                    }
                    $info[] = [
                        'title' => $title,
                        'log_time' => isset($val['add_time_txt']) ? $val['add_time_txt'] : '',
                        'tip' => $tip
                    ];
                }
            }
            $log['info'] = $info;
        } else {
            $log_list = [];
        }
        $log['list'] = $log_list;
        return $log;
    }

    /**
     * 添加工单操作日志
     * @param array $data
     * @return int|string
     * @author lijie
     * @date_time 2021/08/13
     */
    public function addRepairLog($data = [])
    {
        if (empty($data))
            return false;
        $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
        $id = $db_house_new_repair_works_order_log->addOne($data);
        return $id;
    }

    /**
     * 根据工单分类获取符合条件的工作人员
     * @param int $cate_id
     * @return array|bool
     * @author lijie
     * @date_time 2021/08/13
     */
    public function getWorkerByTime($cate_id = 0)
    {
        $worker_ids = [];
        if (!$cate_id)
            return false;
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $cate_info = $db_house_new_repair_cate->getOne(['id' => $cate_id], true);
        if (empty($cate_info))
            return $worker_ids;
        if($cate_info['type'] == 1){
            $worker_ids[] = $cate_info['uid'];
            return $worker_ids;
        }
        $w = date("w");
        $h = date("H");
        $where[] = ['cate_id', '=', $cate_id];
        $where[] = ['date_type', '=', $w];
        $where[] = ['start_time', '<=', $h];
        $where[] = ['end_time', '>', $h];
        $db_house_new_repair_director_scheduling = new HouseNewRepairDirectorScheduling();
        $data = $db_house_new_repair_director_scheduling->getList($where, true, 0, 0, 'id DESC');
        if (empty($data) && $cate_info['parent_id']) {
            $where[] = ['cate_id', '=', $cate_info['parent_id']];
            $data = $db_house_new_repair_director_scheduling->getList($where, true, 0, 0, 'id DESC');
        }
        if ($data) {
            foreach ($data as $v) {
                $director_uid = $v['director_uid'];
                if($director_uid){
                    $director_uid = array_filter(explode(',',$director_uid));
                    $worker_ids = array_merge($worker_ids,$director_uid);
                }
            }
        }
        return $worker_ids;
    }

    /**
     * 添加工单
     * @param array $data
     * @return int|string
     * @author lijie
     * @date_time 2021/08/13
     */
    public function addRepairOrder($data = [])
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $id = $db_house_new_repair_works_order->addOne($data);
        return $id;
    }

    /**
     * 工单详情
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/08/17
     */
    public function getWorkOrderDetail($where = [], $field = true,$source_type='')
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $db_house_new_repair_subject = new HouseNewRepairSubject();
        $orderInfo = $db_house_new_repair_works_order->getOne($where, $field);
        $order_arr = [];
        $order_detail_arr = [];
        if ($orderInfo) {
            $orderInfo['add_time_txt'] = date('Y-m-d H:i:s', $orderInfo['add_time']);
            $order_imgs = '';
            if ($orderInfo['order_imgs'] && strpos($orderInfo['order_imgs'],';') !== false) {
                $order_imgs = explode(';',$orderInfo['order_imgs']);
            } elseif($orderInfo['order_imgs']) {
                $order_imgs = explode(',',$orderInfo['order_imgs']);
            }
            if($order_imgs){
                $order_imgs_arr = [];
                foreach ($order_imgs as $v) {
                    $order_imgs_arr[] = replace_file_domain($v);
                }
            }
            $orderInfo['order_imgs'] = isset($order_imgs_arr) ? $order_imgs_arr : $order_imgs;
            $orderInfo['go_time_txt'] = !empty($orderInfo['go_time']) ? date('Y-m-d H:i:s', $orderInfo['go_time']) : '无';
            $db_house_new_repair_cate_custom = new HouseNewRepairCateCustom();
            if ($orderInfo['label_txt'])
                $tag_list = $db_house_new_repair_cate_custom->getList([['id', 'in', $orderInfo['label_txt']]], 'name')->toArray();
            else
                $tag_list = [];
            $tags = '';
            if ($tag_list) {
                foreach ($tag_list as $value) {
                    $tags .= $value['name'] . ';';
                }
                $tags = rtrim($tags,';');
            }
            $orderInfo['pigcms_id']=$orderInfo['bind_id'];
            $orderInfo['tags'] = $tags;
            if($source_type == 'village'){
                $orderInfo['event_status_txt'] = $orderInfo['event_status'] ? $this->order_status_txt[$orderInfo['event_status']] : '';
            }else{
                $orderInfo['event_status_txt'] = $orderInfo['event_status'] ? $this->order_user_status_txt[$orderInfo['event_status']] : '';
            }

            $orderInfo['event_status_color'] = $orderInfo['event_status'] ? $this->order_status_color[$orderInfo['event_status']] : '';
            $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
            $record = $db_house_new_repair_works_order_log->getOne(['order_id' => $orderInfo['order_id']], 'log_id,log_operator,log_phone,log_name,add_time,log_imgs,log_content');
            if ($record) {
                $record = $record->toArray();
                if ($record['log_imgs']) {
                    if(strpos($record['log_imgs'],';')>0){
                        $record['log_imgs'] = explode(';', $record['log_imgs']);
                    }else{
                        $record['log_imgs'] = explode(',', $record['log_imgs']);
                    }
                    foreach ($record['log_imgs'] as $k => $v) {
                        $record['log_imgs'][$k] = dispose_url($v);
                    }
                }
                $content0628=$record['log_operator'] . ',' . $record['log_phone'];
                if(intval($orderInfo['order_type']) == 5 && empty($record['log_operator'])){
                    $content0628='处理中心管理员';
                }
                $orderInfo['log_info'] = [
                    "title" => "处理记录",
                    "type" => 2,
                    "content" => "",
                    "content_color" => "",
                    "children" => [
                        [
                            "title" => "类型",
                            "content" => $this->log_name[$record['log_name']],
                            "content_color" => ""
                        ],
                        [
                            "title" => "时间",
                            "content" => date('Y-m-d H:i:s', $record['add_time']),
                            "content_color" => ""
                        ],
                        [
                            "title" => "当前处理人员",
                            "content" => $content0628,
                            "content_color" => ""
                        ],
                        [
                            "title" => "内容",
                            "content" => $record['log_content'],
                            "content_color" => ""
                        ],
                    ],
                    "imgs" => $record['log_imgs']
                ];
            } else {
                $orderInfo['log_info'] = [];
            }
            $orderInfo['log'] = [
                "title" => "处理记录",
                "type" => 2,
                "content" => "",
                "content_color" => "",
                "children" => [
                    [
                        "title" => "当前处理人员",
                        "content" => $record['log_operator'],
                        "content_color" => ""
                    ],
                    [
                        "title" => "手机号码",
                        "content" => phone_desensitization($record['log_phone']),
                        "content_color" => ""
                    ]
                ],
                "imgs" => []
            ];
            $address = '无';
            if ($orderInfo['address_type'] == 'room') {
                $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
                $service_house_village = new HouseVillageService();
                $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $orderInfo['room_id']], 'village_id,single_id,floor_id,layer_id,pigcms_id');
                $address = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'], $vacancy_info['floor_id'], $vacancy_info['layer_id'], $vacancy_info['pigcms_id'], $vacancy_info['village_id']);
            }
            if ($orderInfo['address_type'] == 'public') {
                $db_house_village_public_area = new HouseVillagePublicArea();
                $public_info = $db_house_village_public_area->getOne(['public_area_id' => $orderInfo['public_id']], 'public_area_name');
                $address = $public_info['public_area_name'];
            }
            if ($address != '无' || !$orderInfo['address_txt']) {
                $orderInfo['address_txt'] = $address;
            }
            $subject_name = '';
          /*  if(isset($orderInfo['category_id'])){
                $subject_info = $db_house_new_repair_subject->getOne(['id'=>$orderInfo['category_id']],'subject_name');
                if($subject_info){
                    $subject_name = $subject_info['subject_name'];
                }
            }*/

            if($orderInfo['cat_fid']){
                $subject_info=$db_house_new_repair_cate->getOne(['id'=>$orderInfo['cat_fid']],'cate_name');
                $subject_name=isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
            }

            $cate_name = '';
         /*   if($orderInfo['cat_fid']){
                $cate_info = $db_house_new_repair_cate->getOne(['id'=>$orderInfo['cat_fid'],'status'=>1],'cate_name');
                $cate_name = $cate_info['cate_name'];
            }
            if ($orderInfo['cat_id']) {
                $cate_info = $db_house_new_repair_cate->getOne(['id' => $orderInfo['cat_id'], 'status' => 1], 'cate_name');
                if (!empty($cate_name)) {
                    $cate_name = $cate_name . '/' . $cate_info['cate_name'];
                } else {
                    $cate_name = $cate_info['cate_name'];
                }
            }*/

            if($orderInfo['cat_id']){
                $subject_info=$db_house_new_repair_cate->getOne(['id'=>$orderInfo['cat_id']],'cate_name');
                $cate_name=isset($subject_info['cate_name']) ? $subject_info['cate_name'] : '';
            }
            $orderInfo['cate_name'] = $cate_name;
            if($orderInfo['event_status'] >=40 && $orderInfo['event_status'] < 50){
                $orderInfo['event_status_type'] = [['name'=>'重新打开','type'=>'reopen'],['name'=>'撤回','type'=>'recall'],['name'=>'关闭','type'=>'closed'],['name'=>'评价','type'=>'evaluate']];
            }
            if($orderInfo['event_status']>9 && $orderInfo['event_status']<40){
                $orderInfo['event_status_type'] = [['name'=>'撤回','type'=>'recall'],['name'=>'关闭','type'=>'closed']];
            }
            if ($orderInfo['event_status'] == 70) {
                $orderInfo['event_status_type'] = [['name' => '重新打开', 'type' => 'reopen'], ['name' => '撤回', 'type' => 'recall'], ['name' => '关闭', 'type' => 'closed']];
            }
            if ($orderInfo['event_status'] == 50 || $orderInfo['event_status'] == 60) {
                $orderInfo['event_status_type'] = [['name' => '重新打开', 'type' => 'reopen']];
            }
            if ($orderInfo['event_status'] == 35){
                $orderInfo['event_status_type'] = [['name'=>'同意','type'=>'agree'],['name'=>'关闭','type'=>'closed']];
            }
            $order_arr[] = [
                "title"=>"上报位置",
                "type"=>1,
                "content"=> $address,
                "content_color"=> "",
                "children"=> [],
                "imgs"=> []
            ];
            $order_arr[] = [
                "title" => "上报时间",
                "type" => 1,
                "content" => $orderInfo['add_time_txt'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_arr[] = [
                "title" => "工单分类",
                "type" => 1,
                "content" => $orderInfo['cate_name'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_arr[] = [
                "title" => "上门时间",
                "type" => 1,
                "content" => $orderInfo['go_time_txt'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_arr[] = [
                "title" => "自定义字段",
                "type" => 1,
                "content" => $orderInfo['tags'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            if(empty($orderInfo['order_content'])){
                $orderInfo['order_content'] = '无';
            }
            $order_arr[] = [
                "title" => "补充内容",
                "type" => 1,
                "content" => $orderInfo['order_content'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            if(!empty($orderInfo['order_imgs'])){
                $order_arr[] = [
                    "title"=>"上报图例",
                    "type"=>3,
                    "content"=> "",
                    "content_color"=> "",
                    "children"=> [],
                    "imgs"=> $orderInfo['order_imgs']
                ];
            }else{
                $order_arr[] = [
                    "title" => "上报图例",
                    "type" => 1,
                    "content" => "无",
                    "content_color" => "",
                    "children" => [],
                    "imgs" => []
                ];
            }
            $order_arr[] = [
                "title" => "工单状态",
                "type" => 1,
                "content" => $orderInfo['event_status_txt'],
                "content_color" => $orderInfo['event_status_color'],
                "children" => [],
                "imgs" => []
            ];
            $orderInfo['charge_type']=false;
            if ($orderInfo['event_status'] == 35){
            $orderInfo['charge_type']=true;
            $order_arr[] = [
                "title" => "应收金额",
                "type" => 1,
                "content" => $orderInfo['charge_price'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $orderInfo['pay_type']=[['key'=>'1','type'=>'线上缴费'],['key'=>'2','type'=>'线下缴费']];
            }
            //=====工单中心使用=======
            $order_detail_arr[] = [
                "title" => "上报人员",
                "type" => 1,
                "content" => $orderInfo['name'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "手机号码",
                "type" => 1,
                "content" => phone_desensitization($orderInfo['phone']),
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "上报时间",
                "type" => 1,
                "content" => $orderInfo['add_time_txt'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "上门时间",
                "type" => 1,
                "content" => $orderInfo['go_time_txt'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "上报位置",
                "type" => 1,
                "content" => $orderInfo['address_txt'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "工单类目",
                "type" => 1,
                "content" => $subject_name,
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "上报分类",
                "type" => 3,
                "content" => $orderInfo['cate_name'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "自定义字段",
                "type" => 1,
                "content" => $orderInfo['tags'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];
            $order_detail_arr[] = [
                "title" => "补充内容",
                "type" => 1,
                "content" => $orderInfo['order_content'],
                "content_color" => "",
                "children" => [],
                "imgs" => []
            ];

        }
        return ['order_detail' => $orderInfo, 'order_arr' => $order_arr, 'order_detail_arr' => $order_detail_arr];
    }

    /**
     * 修改订单
     * @param int $order_id
     * @param string $event_status_type
     * @param string $log_content
     * @param array $log_imgs
     * @param int $evaluate
     * @param array $bind_info
     * @return bool
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/08/17
     */
    public function updateWorkOrder($order_id = 0, $event_status_type = '', $log_content = '', $log_imgs = [], $evaluate = 0, $bind_info = [],$pay_type=0,$offline_pay_type=0)
    {
        if (!$order_id || empty($event_status_type))
            throw new \think\Exception('请上报处理类型');
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
        $orderInfo = $db_house_new_repair_works_order->getOne(['order_id' => $order_id], 'village_id,property_id,event_status,worker_id,cat_id');
        $event_status_arr = [];
        if ($orderInfo['event_status'] >= 40 && $orderInfo['event_status'] < 50) {
            $event_status_arr = ['reopen' => '重新打开', 'recall' => '撤回', 'closed' => '关闭', 'evaluate' => '评价'];
        }
        if($orderInfo['event_status']>9 &&  $orderInfo['event_status']< 40){
            $event_status_arr = ['recall' => '撤回','closed' => '关闭'];
        }
        if ($orderInfo['event_status'] == 70) {
            $event_status_arr = ['reopen' => '重新打开', 'recall' => '撤回', 'closed' => '关闭'];
        }
        if ($orderInfo['event_status'] == 50 || $orderInfo['event_status'] == 60) {
            $event_status_arr = ['reopen' => '重新打开'];
        }
        if ($orderInfo['event_status'] ==35) {
            $event_status_arr = [ 'agree' => '同意', 'closed' => '关闭'];
        }
        if (!isset($event_status_arr[$event_status_type])) {
            throw new \think\Exception('请上报正确处理类型');
        }
        $property_id=$orderInfo['property_id'];
        $rule_id=0;
        $project_id=0;
        $charge_price=0;
        $where_log=array('order_id'=>$order_id,'operator_type'=>10,'log_name'=>'work_follow_up');
        $work_follow_up=$db_house_new_repair_works_order_log->getOne($where_log);
        if (!empty($work_follow_up)){
            $rule_id=$work_follow_up['rule_id'];
            $project_id=$work_follow_up['project_id'];
            $charge_price=$work_follow_up['charge_price'];
        }
        $integral = 0; //获得的积分
        if ($event_status_type == 'evaluate') {
            $houseVillageService = new HouseVillageService();
            $whereArrTmp = ['village_id' => $orderInfo['village_id']];
            $villageInfoExtend = $houseVillageService->getHouseVillageInfoExtend($whereArrTmp);
            if (!empty($villageInfoExtend) && isset($villageInfoExtend['work_order_extra'])) {
                $work_order_extra = json_decode($villageInfoExtend['work_order_extra'], 1);
                if ($work_order_extra && isset($work_order_extra['per_works_order_integral']) && ($work_order_extra['per_works_order_integral'] > 0)) {
                    //查询此工单可获取过积分了
                    $logWhere = array();
                    $logWhere[] = array('order_id', '=', $order_id);
                    $logWhere[] = array('get_integral', '>', 0);
                    $repair_works_order_log = $db_house_new_repair_works_order_log->getOne($logWhere);
                    if ($repair_works_order_log && !$repair_works_order_log->isEmpty()) {
                        //此工单获得过积分 不可再获得
                    } else {
                        if (!empty($bind_info) && $bind_info['uid'] && $bind_info['uid'] > 0) {
                            //查询此uid今天已经获取过的总积分
                            $logWhere = array();
                            $logWhere[] = array('village_id', '=', $orderInfo['village_id']);
                            $logWhere[] = array('log_uid', '=', $bind_info['uid']);
                            $logWhere[] = array('get_integral', '>', 0);
                            $tmpdate = date('Y-m-d') . " 00:00:00";
                            $strattime = strtotime($tmpdate);
                            $logWhere[] = array('add_time', '>=', $strattime);
                            $tmpdate = date('Y-m-d') . " 23:59:59";
                            $endtime = strtotime($tmpdate);
                            $logWhere[] = array('add_time', '<=', $endtime);
                            $all_get_integral = $db_house_new_repair_works_order_log->getSum($logWhere, 'get_integral');
                            $tmpintegral = $all_get_integral + $work_order_extra['per_works_order_integral'];
                            if ($work_order_extra['day_works_order_integral'] == 0 || ($work_order_extra['day_works_order_integral'] >= $tmpintegral)) {
                                //没超过总积分 还可以获得积分
                                $integral = $work_order_extra['per_works_order_integral'];
                                $commonUserService = new commonUserService();
                                //加积分
                                $ret = $commonUserService->addScore($bind_info['uid'], $integral, '社区工单评价加积分');
                                fdump_api(['uid' => $bind_info['uid'], 'integral' => $integral, 'ret' => $ret], '00updateWorkOrderAddintegral', 1);
                            }
                        }
                  }
                }
            }
        }
        $addRepairLogArr=[
            'order_id' => $order_id,
            'log_name' => $event_status_type,
            'operator_type' => 10,
            'log_content' => $log_content,
            'log_imgs' => !empty($log_imgs) ? implode(',', $log_imgs) : '',
            'add_time' => time(),
            'log_operator' => isset($bind_info['name']) ? $bind_info['name'] : '',
            'log_phone' => isset($bind_info['phone']) ? $bind_info['phone'] : '',
            'operator_id' => isset($bind_info['pigcms_id']) ? $bind_info['pigcms_id'] : 0,
            'log_uid' => isset($bind_info['uid']) ? $bind_info['uid'] : 0,
            'evaluate' => $evaluate,
            'rule_id' => $rule_id,
            'project_id' => $project_id,
            'charge_price' => $charge_price,
            'pay_type' => $pay_type,
            'offline_pay_type' => $offline_pay_type,
            'village_id' => $orderInfo['village_id'],
            'property_id' => $orderInfo['property_id'],
        ];
        if($integral>0){
            $addRepairLogArr['get_integral']=$integral;
        }
        $id = $this->addRepairLog($addRepairLogArr);

        $whereArr=array('order_id'=>$order_id,'operator_type'=>10,'log_name'=>'house_auto_assign');
        $house_auto_assign=$db_house_new_repair_works_order_log->getOne($whereArr);
        $is_auto_assign=false;
        if($event_status_type=='reopen' && $orderInfo['worker_id']>0 && $house_auto_assign && !$house_auto_assign->isEmpty()){
            $tmpData = $house_auto_assign->toArray();
            unset($tmpData['log_id']);
            $tmpData['add_time']=time();
            $this->addRepairLog($tmpData);
            $is_auto_assign=true;
        }
        if ($id) {
            switch ($event_status_type) {
                case 'reopen':
                    if($is_auto_assign){
                        $event_status = 20;
                    }else{
                        $event_status = 10;
                    }
                    $type = 'processing';
                    break;
                case 'recall':
                    $event_status = 50;
                    $type = 'processed';
                    break;
                case 'closed':
                    $event_status = 60;
                    $type = 'processed';
                    break;
                case 'evaluate':
                    $event_status = 70;
                    $type = 'todo';
                    break;
                case 'agree':
                    $event_status = 36;
                    $type = 'todo';
                    $now_role = 3;
                    break;
                default:
                    $event_status = 60;
                    $type = 'processed';
            }
            $updateArr=[
                'event_status' => $event_status,
                'update_time' => time(),
                'evaluate' => $evaluate,
            ];
            if($event_status==10){
                $updateArr['worker_id']=0;
            }
            $res = $db_house_new_repair_works_order->saveOne(['order_id' => $order_id], $updateArr);
            if ($res){
                if ($event_status_type == 'recall'){
                    //todo 用户撤回 发送模板消息
                    $this->newRepairSendMsg(22,$order_id,0,$property_id);
                }
                elseif ($event_status_type == 'closed'){
                    $charge_type=$this->getCateInfo(['id'=>$orderInfo['cat_id']],'charge_type');
                    if($charge_type && ($charge_type && intval($charge_type['charge_type']) == 1) && $orderInfo['event_status'] > 30){
                        //todo 用户关闭 不同意此收费金额，发送模板消息
                        $this->newRepairSendMsg(52,$order_id,0,$property_id);
                    }else{
                        //todo 用户关闭 发送模板消息
                        $this->newRepairSendMsg(21,$order_id,0,$property_id);
                    }
                }
                elseif ($event_status_type == 'reopen'){
                    //todo 用户重新打开 发送模板消息
                    $this->newRepairSendMsg(10,$order_id,0,$property_id);
                }
                elseif ($event_status_type == 'agree'){
                    //todo 用户同意缴费
                    $this->newRepairSendMsg(51,$order_id,0,$property_id);
                }
                elseif ($event_status_type == 'evaluate'){
                    //todo 用户评价
                    $this->newRepairSendMsg(20,$order_id,0,$property_id);
                }
                return $type;
            }
        }
        throw new \think\Exception('操作异常');
    }

    /**
     * 工单处理中心回复
     * @param int $order_id
     * @param string $event_status_type
     * @param string $log_content
     * @param int $village_id
     * @param int $property_id
     * @param int $uid
     * @param int $worker_id
     * @return bool
     * @throws \think\Exception
     * @author lijie
     * @date_time  2021/08/23
     */
    public function workOrderSave($order_id = 0, $event_status_type = '', $log_content = '', $village_id = 0, $property_id = 0, $uid = 0, $worker_id = 0)
    {
        if (!$order_id || empty($event_status_type))
            throw new \think\Exception('请上报处理类型');
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $orderInfo = $db_house_new_repair_works_order->getOne(['order_id' => $order_id], 'event_status,order_type,uid');
        if (empty($orderInfo)) {
            throw new \think\Exception('请上报正确处理类型');
        }
        $log_data = [
            'order_id' => $order_id,
            'log_name' => $event_status_type,
            'operator_type' => 20,
            'log_content' => $log_content,
            'log_imgs' => '',
            'add_time' => time(),
            'log_operator' => '处理中心管理员',
            'log_phone' => '',
            'operator_id' => 0,
            'log_uid' => $uid,
            'evaluate' => 0,
            'village_id' => $village_id,
            'property_id' => $property_id
        ];
        $id = $this->addRepairLog($log_data);
        if ($id) {
            if ($worker_id) {
                $data['update_time'] = time();
                $data['event_status'] = 20;
                $data['worker_id'] = $worker_id;
                $data['group_id']=$this->getGroupId($worker_id);
                //todo 转单记录当前转单人信息
                $this->workOrderLogSave($id,$worker_id);
            } else {
                $data['update_time'] = time();
                $data['event_status'] = 40;
            }
            $res = $db_house_new_repair_works_order->saveOne(['order_id' => $order_id], $data);
            if ($res){
                if($worker_id){
                    //针对工作人员提交的工单有指派时 给提交人发送通知
                    if($orderInfo['order_type'] == 4){
                        $this->newRepairSendMsg(11,$order_id,$orderInfo['uid'],$property_id);
                        //给工作人员发送通知
                        $this->newRepairSendMsg(12,$order_id,0,$property_id);
                    }else{
                        $this->newRepairSendMsg(10,$order_id,0,$property_id);
                    }
                }else{
                    //已办结
                    $this->newRepairSendMsg(70,$order_id,0,$property_id);
                }
                return true;
            }
        }
        throw new \think\Exception('操作异常');
    }

    /**
     * 分类详情
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getCateInfo($where = [], $field = true)
    {
        $db_house_new_repair_cate = new HouseNewRepairCate();
        $data = $db_house_new_repair_cate->getOne($where, $field);
        return $data;
    }

    /**
     * 公共区域信息
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @author lijie
     * @date_time 2021/08/17
     */
    public function getPublicAreaInfo($where = [], $field = true)
    {
        $db_house_village_public_area = new HouseVillagePublicArea();
        $data = $db_house_village_public_area->getOne($where, $field);
        return $data;
    }

    /**
     * 日志数量
     * @param array $where
     * @return int
     * @author lijie
     * @date_time 2021/08/18
     */
    public function getLogCount($where = [])
    {
        $db_house_new_repair_work_order_log = new HouseNewRepairWorksOrderLog();
        $count = $db_house_new_repair_work_order_log->getCount($where);
        return $count;
    }
    
    public function getLogCountByOrderId($where = [])
    {
        $db_house_new_repair_work_order_log = new HouseNewRepairWorksOrderLog();
        $count = $db_house_new_repair_work_order_log->getCountGroupBy($where,'order_id');
        return $count;
    }
    /**
     * 计算平均分
     * @param array $where
     * @param bool $field
     * @return mixed
     */
    public function getAvg($where = [], $field = true)
    {
        $db_house_new_repair_work_order_log = new HouseNewRepairWorksOrderLog();
        $data = $db_house_new_repair_work_order_log->getAvg($where, $field);
        if ($data) {
            foreach ($data as &$v) {
                $v['avg_evaluate'] = intval($v['avg_evaluate']);
            }
        }
        return $data;
    }

    /**
     * 获取工作人员id
     * @param array $where
     * @param bool $field
     * @return array
     */
    public function getWorkers($where = [], $field = true)
    {
        $db_house_new_repair_work_order_log = new HouseNewRepairWorksOrderLog();
        $data = $db_house_new_repair_work_order_log->getLists($where, $field);
        $worker_ids = [];
        if ($data) {
            foreach ($data as $v) {
                $worker_ids[] = $v['worker_id'];
            }
        }
        return $worker_ids;
    }

    /**
     * 根据工作人员获取符合条件的工单ID
     * @param int $worker_id
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getWorkerDealOrderId($worker_id = 0)
    {
        $house_new_repair_works_order_log = new HouseNewRepairWorksOrderLog();
        $work_log = $this->work_log;
        $whereOperator = [
            ['operator_id', '=', $worker_id],
            ['log_name', 'in', $work_log],
        ];
        $order_log = $house_new_repair_works_order_log->getList($whereOperator, 'order_id');
        if (!$order_log->isEmpty()) {
            $data = $order_log->toArray();
            return array_unique(array_column($data, 'order_id'));
        } else {
            return [];
        }
    }

    public function getFinshOrder($village_id)
    {
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_subject = new HouseNewRepairCate();
        $where_subject = [
            'village_id' => $village_id,
            'parent_id' => 0,
            'status' => 1
        ];
        $count_list = [];
        $subject_list = $db_house_new_repair_subject->getList($where_subject);
        if (!empty($subject_list)) {
            $subject_list = $subject_list->toArray();
            if (!empty($subject_list)) {
                foreach ($subject_list as $k => $value) {
                    $where_works_order_total = [
                        ['o.village_id', '=', $village_id],
                        ['o.cat_fid', '=', $value['id']],
                        ['o.add_time', '>=', strtotime(date('Y-m-01 00:00:00', time()))],
                        ['o.add_time', '<=', strtotime(date('Y-m-t 23:23:59', time()))],
                    ];
                    $count_total = $db_house_new_repair_works_order->getCount($where_works_order_total);
                    $where_works_order_finsh = [
                        ['o.village_id', '=', $village_id],
                        ['o.cat_fid', '=', $value['id']],
                        ['o.event_status', '=', 60],
                        ['o.add_time', '>=', strtotime(date('Y-m-01 00:00:00', time()))],
                        ['o.add_time', '<=', strtotime(date('Y-m-t 23:23:59', time()))],
                    ];
                    $count_finsh = $db_house_new_repair_works_order->getCount($where_works_order_finsh);
                    $count_list[$k]['subject_id'] = $value['id'];
                    $count_list[$k]['subject_name'] = $value['cate_name'];
                    $count_list[$k]['count_total'] = $count_total;
                    $count_list[$k]['count_finsh'] = $count_finsh;
                    if (empty($count_total)||empty($count_finsh)) {
                        $count_list[$k]['rate'] = 0;
                    } else {
                        $count_list[$k]['rate'] = round_number($count_finsh / $count_total, 2);
                    }

                }
            }
        }
        return $count_list;
    }

    //获取工作人员对应的部门id
    public function getGroupId($worker_id){
        $group_id=0;
        $worker=(new HouseWorker())->getOne(['wid'=>intval($worker_id)],'department_id');
        if($worker && !$worker->isEmpty()){
            $group_id=$worker['department_id'];
        }
        return $group_id;
    }



    /**
     * 校验白晚班是否可提交工单
     * @author: liukezhu
     * @date : 2022/3/31
     * @param $village_id
     * @return array
     */
    public function checkWorkOrder($village_id){
        $village_info=(new HouseVillageInfo())->getOne(['village_id'=>$village_id],'help_info,is_timely');
        $time=time();
        $day_start='08:00:00'; //白班开始时间
        $day_end='18:00:00';  //白班结束时间
        $night_start='18:00:01';//晚班开始时间
        $night_end='07:59:59'; //晚班结束时间
        $phone='';
        $is_close_help_info=0;
        $is_go_time=0;
        if($village_info && !$village_info->isEmpty()){
            $info=unserialize($village_info['help_info']);
            if($info){
                if(isset($info['is_close'])){
                    $is_close_help_info=intval($info['is_close']);
                }
                if(isset($info['start'][0]) && isset($info['end'][0])){
                    $day_start=$info['start'][0].':00';
                    $day_end=$info['end'][0].':00';
                }
                if(isset($info['start'][1]) && isset($info['end'][1])){
                    $night_start=$info['start'][1].':00';
                    $night_end=$info['end'][1].':00';
                }
                if(isset($info['phone'][1]) && !empty($info['phone'][1])){
                    $phone=$info['phone'][1];
                }
            }
            if(!empty($village_info['is_timely'])){
                $is_go_time=$village_info['is_timely'];
            }
        }
        $day_start_replace=(int)str_replace(":","",$day_start);
        $day_end_replace=(int)str_replace(":","",$day_end);
        $night_start_replace=(int)str_replace(":","",$night_start);
        $night_end_replace=(int)str_replace(":","",$night_end);

        //白班开始时间
        $day_start_time=strtotime(date('Y-m-d '.$day_start,$time));
        //晚班开始时间
        $night_start_time=strtotime(date('Y-m-d '.$night_start,$time));

        //获取白班结束时间
        if($day_start_replace >= $day_end_replace){
            $day_end_time=strtotime(date("Y-m-d ".$day_end,strtotime("+1 day")));
        }else{
            $day_end_time=strtotime(date('Y-m-d '.$day_end,$time));
        }
        //获取晚班结束时间
        if($night_start_replace >= $night_end_replace){
            $night_end_time=strtotime(date("Y-m-d ".$night_end,strtotime("+1 day")));
        }else{
            $night_end_time=strtotime(date('Y-m-d '.$night_end,$time));
        }
        //当前时间是否在白班范围内
        if($time >= $day_start_time && $time <= $day_end_time){
            return ['code'=>1,'msg'=>'ok','is_night'=>0,'data'=>['is_go_time'=>$is_go_time]];
        }
        else{
            if($is_close_help_info<1 && ($time >= $night_start_time && $time <= $night_end_time)){ //当前时间在晚班范围内
                if(empty($phone)){
                    return ['code'=>-1,'is_night'=>1,'msg'=>'该晚班电话暂未配置，请联系工作人员','data'=>['is_go_time'=>$is_go_time]];
                }else{
                    return ['code'=>0,'is_night'=>1,'msg'=>'请用该电话联系','data'=>['phone'=>$phone,'is_go_time'=>$is_go_time]];
                }
            }
            else{
                return ['code'=>1,'is_night'=>0,'msg'=>'ok','data'=>['is_go_time'=>$is_go_time]];
            }
        }

    }

    public function getChargeSetOrder($data){
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_repair_subject = new HouseNewRepairCate();
        $db_house_new_charge_rule = new HouseNewChargeRule();
        $work_info=$db_house_new_repair_works_order->getOne(['order_id'=>$data['order_id']]);
        if (!empty($work_info)){
            $work_info=$work_info->toArray();
        }
        if (empty($work_info)){
            throw new \think\Exception('当前工单信息不存在');
        }

        $charge_set=$db_house_new_repair_subject->getOne(['id'=>$work_info['cat_id']]);
        if (!empty($charge_set)){
            $charge_set=$charge_set->toArray();
        }
        if (empty($charge_set)){
            throw new \think\Exception('当前工单的分类信息不存在');
        }
        $charge_data=[];
        if (in_array($work_info['event_status'],[35,36])&&$data['change_status']['log']=='work_follow_up'){
            $work_type=1;
            $charge_type=false;
        }elseif (in_array($work_info['event_status'],[44,45])&&$data['change_status']['log']=='work_completed'){
            $work_type=2;
            $charge_type=false;
        }elseif ($work_info['event_status']==35&&$data['change_status']['log']=='work_completed'){
            throw new \think\Exception('用户没有对工单处理操作');
        }
        else{
            if ($charge_set['charge_type']==1&&$data['change_status']['log']=='work_follow_up'){
                $work_type=1;
                $charge_type=true;
            }elseif($charge_set['charge_type']!=1&&$data['change_status']['log']=='work_follow_up'){
                $work_type=1;
                $charge_type=false;
            }elseif($charge_set['charge_type']==1&&$data['change_status']['log']=='work_completed'){
                $work_type=2;
                $charge_type=true;
                $charge_data['charge_price']=$work_info['charge_price'];
                $charge_data['pay_type']=$work_info['pay_type'];
                $rule_info=$db_house_new_charge_rule->getFind(['r.id'=>$work_info['rule_id']],'r.charge_name,p.name');
                if (!empty($rule_info)){
                    $charge_data['rule_name']=$rule_info['charge_name'];
                    $charge_data['project_name']=$rule_info['name'];
                }
            } else{
                $work_type=2;
                $charge_type=false;
            }
        }

        if (empty($charge_data)){
            $charge_data=null;
        }
        $list=[];
        $list['type']=$work_type;
        $list['res']=$charge_type;
        $list['data']=$charge_data;
        return $list;
    }


    public function getWorkChargeProject($data){
        $db_house_new_charge_project=new HouseNewChargeProject();
        $where=[
            'village_id'=>$data['village_id'],
            'type'=>1,
            'status'=>1,
        ];
        $project_list=$db_house_new_charge_project->getLists($where,'id,name');
        if (!empty($project_list)){
            $project_list=$project_list->toArray();
        }

        return $project_list;
    }

    //结单完成
    public function getTimelyStatus($order){
        $param=[
            'order_id'=>$order['order_id'],//订单id
            'village_id'=>$order['village_id'],//小区id
            'go_time'=>$order['go_time'], //上门时间
            'cat_fid'=>$order['cat_fid'],//一级分类id
            'cat_id'=>$order['cat_id'], //二级分类id
            'timely_time'=>$order['timely_time'],//结单时间
            'group_id'=>$this->getGroupId($order['worker_id']),//部门id
            'worker_id'=>$order['worker_id'],//工作人员id
        ];
        if(!empty($param['timely_time'])){
            return ['error'=>false,'data'=>'已完成结单，无须操作'];
        }
        $time=time();
        $is_timely=(new HouseVillageService())->checkVillageField($param['village_id'],'is_timely');
        $cate=(new HouseNewRepairCate())->getOne(['id'=>$param['cat_id']],'timely_time');
        $data=[
            'timely_time'=>$time
        ];
        if (!$cate || $cate->isEmpty()){
            return ['error'=>false,'data'=>'该分类不存在'];
        }
        if(empty($is_timely)){ //未开启新版工单及时率
            $data['is_status']=0;
        }else{
            $timely_time=intval($cate['timely_time']) * 60;
            $diff_time=$time-$order['go_time'];
            if($timely_time <= 0){
                $data['is_status']=0;
            }
            if($diff_time <= 0){
                $data['is_status']=2;
            }
            //实际用了50s  配置项60s
            if($diff_time <= $timely_time){
                $data['is_status']=2;
            }else{
                $data['is_status']=1;
            }
        }
       
        $this->addOrderTimely([
            'village_id'=>$param['village_id'],
            'type'=>1,
            'order_id'=>$param['order_id'],
            'cat_fid'=>$param['cat_fid'],
            'cat_id'=>$param['cat_id'],
            'group_id'=>$param['group_id'],
            'worker_id'=>$param['worker_id'],
            'is_status'=>$data['is_status'],
            'add_time'=>$time
        ]);
        return ['error'=>true,'data'=>$data];
    }

    //todo 同步写入工单及时率
    public function addOrderTimely($data){
        return (new HouseNewRepairWorksOrderTimely())->addOne($data);
    }

    public function getOrderTimelyOne($where,$field=true){
        return (new HouseNewRepairWorksOrderTimely())->get_one($where,$field);
    }


    public function getWorkChargeRule($data){
        $db_house_new_charge_project=new HouseNewChargeProject();
        $db_house_new_charge_rule=new HouseNewChargeRule();
        $where=[
            'village_id'=>$data['village_id'],
            'id'=>$data['project_id'],
            'status'=>1,
        ];
        $project_info=$db_house_new_charge_project->getOne($where);
        if (empty($project_info)){
            throw new \think\Exception('当前收费项目信息不存在');
        }
        $where_rule=[
            'village_id'=>$data['village_id'],
            'charge_project_id'=>$data['project_id'],
            'status'=>1,
        ];
        $rule_list=$db_house_new_charge_rule->getList($where_rule,'id,charge_name,charge_project_id,charge_price');
        if (!empty($rule_list) && !$rule_list->isEmpty()){
            $rule_list=$rule_list->toArray();
            foreach ($rule_list as $kk=>$vv){
                $rule_list[$kk]['charge_price']=$vv['charge_price']+0;
            }
        }
        if (empty($rule_list)){
            throw new \think\Exception('当前收费项目没有对应的收费标准');
        }

        return ['list'=>$rule_list];
    }


    /**
     * 办结工单生成缴费账单
     * @author:zhubaodi
     * @date_time: 2022/3/29 18:19
     */
    public function addPayOrder($order_id){
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $db_house_new_charge_rule=new HouseNewChargeRule();
        $service_house_new_charge = new HouseNewChargeService();
        $db_house_admin=new HouseAdmin();
        $work_order_info=$db_house_new_repair_works_order->getOne(['order_id'=>$order_id]);
        fdump_api([$work_order_info,$order_id],'addPayOrder_0414',1);
        $id=0;
        if (!empty($work_order_info)){
            $field='r.*,c.charge_type,c.charge_number_name,c.property_id,p.name,p.subject_id,p.type';
            $rule_info=$db_house_new_charge_rule->getFind(['r.id'=>$work_order_info['rule_id']],$field);
            fdump_api([$work_order_info,$rule_info],'addPayOrder_0414',1);
            if (!empty($rule_info)){
                if (!empty($work_order_info['worker_id'])){
                    $role_info=$db_house_admin->getOne(['wid'=>$work_order_info['worker_id']],'id');
                }
                $postData['order_type'] = $rule_info['charge_type'];
                $postData['order_name'] = $service_house_new_charge->charge_type[$rule_info['charge_type']];
                $postData['village_id'] = $rule_info['village_id'];
                $postData['property_id'] = $rule_info['property_id'];
                $postData['total_money'] = $work_order_info['charge_price'];
                $postData['modify_money'] = $postData['total_money'];
                $postData['role_id'] =isset($role_info['id'])&&!empty($role_info['id'])?$role_info['id']:$work_order_info['worker_id'];
                $postData['is_prepare'] = 2;
                $postData['rule_id'] = $rule_info['id'];
                $postData['project_id'] = $rule_info['charge_project_id'];
                $postData['order_no'] = '';
                $postData['add_time'] = time();
                $postData['from'] = 1;
                $postData['service_start_time'] = time();
                $postData['service_end_time'] = time();
                $postData['unit_price'] = $rule_info['charge_price'];
                $postData['room_id'] = $work_order_info['room_id'];
                $postData['pigcms_id'] = $work_order_info['bind_id']?$work_order_info['bind_id']:0;
                $postData['name'] = $work_order_info['name']?$work_order_info['name']:'';
                $postData['phone'] = $work_order_info['phone']?$work_order_info['phone']:'';
                $db_house_new_pay_order = new HouseNewPayOrder();
                $postData['is_paid'] = 2;
                fdump_api([$postData],'addPayOrder_0414',1);
                $id = $db_house_new_pay_order->addOne($postData);
                fdump_api([$id,$postData],'addPayOrder_0414',1);
                if ($work_order_info['pay_type']==2){
                    $order_info=$db_house_new_pay_order->get_one(['order_id'=>$id]);
                    if($order_info && !$order_info->isEmpty()){
                        $order_info=$order_info->toArray();
                        $order_info['is_only_pay_this']=1;  //只支付当前订单
                    }
                    $order_list[]=$order_info;
                    $service_new_pay = new NewPayService();
                    $remark='工单线下支付账单';
                    $service_new_pay->goPay($order_list,$rule_info['village_id'],2,$work_order_info['offline_pay_type'],'',$remark);
                }

            }
        }
        return $id;
    }


    //todo 开启抢单模式，订单状态同步修改 event_status：15
    public function grabOrder($village_id,$order_id,$cat_id=0){
        $time=time();
        if($cat_id <= 0){
            return true;
        }
        $is_status=(new HouseVillageService())->checkVillageField($village_id,'is_grab_order');
        if(!$is_status){
            return true;
        }
        $cate=(new HouseNewRepairCate())->getOne(['id'=>$cat_id],'id,type,uid,parent_id');
        if (!$cate || $cate->isEmpty()){
            return true;
        }
        if($cate['type'] == 1){ //工单二级分类负责人为单人
            if(!empty($cate['uid'])){
                return true;
            }
        }else{  //工单二级分类负责人为多人
            $info = (new HouseNewRepairDirectorScheduling())->getOne(
                [
                    ['cate_id', '=', $cate['id']],
                    ['date_type', '=', date('w')],
                ],'start_time,end_time');
            if($info && !$info->isEmpty()){
                $start=strtotime(date('Y-m-d ').$info['start_time'].':00:00');
                $end=strtotime(date('Y-m-d ').$info['end_time'].':59:59');
                if($time >= $start && $time <= $end){
                    return true;
                }
            }
        }
        $updateArr=[
            'event_status' => 15,
            'update_time' => $time,
        ];
        $res= (new HouseNewRepairWorksOrder())->saveOne([
            ['order_id', '=', $order_id],
            ['event_status', '=', 10]
        ], $updateArr);
        $this->triggerGrabOrderNoticeWork($village_id,$cate['parent_id']);
        return $res;
    }


    //todo 获取分类id 包含有无设置的关联部门
    public function getRepairCateId($village_id,$wid){
        $dbRelation=new HouseNewRepairCateGroupRelation();
        $group_id=$this->getGroupId($wid);
        $cate_id=$dbRelation->getColumn([
            ['village_id','=',$village_id],
            ['group_id','=',$group_id]
        ],'cate_id');
        return $cate_id ? array_values(array_unique($cate_id)) : [];
    }

    //todo 工作人员抢单
    public function grabRepairOrder($village_id,$login_role, $worker_id,$order_id){
        $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
        $is_status=(new HouseVillageService())->checkVillageField($village_id,'is_grab_order');
        if(!$is_status){
            throw new \think\Exception('该小区暂未开启抢单,不可操作');
        }
        $time=time();
        $where_order = [];
        $where_order[] = ['village_id', '=', $village_id];
        $where_order[] = ['order_id', '=', $order_id];
        $where_order[] = ['event_status', '=', 15];
        $order_detail = $db_house_new_repair_works_order->getOne($where_order);
        if (empty($order_detail)) {
            throw new \think\Exception('该工单不存在或已被抢单');
        }
        $property_id=$order_detail['property_id'];
        $this->checkGrabOrder(2,$village_id,$worker_id,$order_detail);
        if (6==$login_role) {
            // 小区物业工作人员
            $info['wid']=$worker_id;
        }
        elseif (5==$login_role) {
            // 小区物业管理人员
            $info = (new HouseAdmin())->getOne([['id', '=', $worker_id]]);
        }
        elseif (4==$login_role) {
            // 物业普通管理员
            $info = (new PropertyAdmin())->get_one([['id', '=', $worker_id]]);
        }
        elseif (3==$login_role) {
            // 物业总管理员
            $info = (new PropertyAdmin())->get_one([['id', '=', $worker_id]]);
        }
        else {
            throw new \think\Exception("当前身份无权限");
        }
        if(empty($info)){
            throw new \think\Exception("当前身份不存在");
        }
        $wid=$info['wid'];
        $worker=(new HouseWorker())->getOne(['wid'=>$wid],'wid,name,department_id');
        if(empty($worker)){
            throw new \think\Exception("当前用户不存在");
        }
        $log_data = [
            'order_id' => $order_id,
            'log_name' => 'work_grab',
            'operator_type' => 20,
            'log_content' => '',
            'log_imgs' => '',
            'add_time' => $time,
            'log_operator' => $worker['name'],
            'log_phone' => '',
            'operator_id' => 0,
            'log_uid' => 0,
            'evaluate' => 0,
            'village_id' => $village_id,
            'property_id' => $order_detail['property_id']
        ];
        Db::startTrans();
        try {
            $id = $this->addRepairLog($log_data);
            if ($id) {
                $data['update_time'] = $time;
                if ($wid) {
                    $data['event_status'] = 20;
                    $data['worker_id'] = $wid;
                    $data['group_id']=$worker['department_id'];
                } else {
                    $data['event_status'] = 40;
                }
                $db_house_new_repair_works_order->saveOne(['order_id' => $order_id], $data);

                //当提交的工单有指派时
                if($wid > 0){
                    if($order_detail['order_type'] == 4){
                        //针对工作人员提交的工单有指派时 给提交人发送通知
                        $this->newRepairSendMsg(11,$order_id,$order_detail['uid'],$property_id);
                        //给工作人员发送通知
                        $this->newRepairSendMsg(12,$order_id,0,$property_id);
                    }else{
                        //给用户和工作人员发通知
                        $this->newRepairSendMsg(10,$order_id,0,$property_id);
                    }
                }
            }
            Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            throw new \think\Exception($e->getMessage());
        }
        return true;
    }

    //查询工作人员
    public function getWorker($worker_id,$field='wid,name,openid,nickname,village_id'){
        $worker=(new HouseWorker())->getOne(['wid'=>$worker_id],$field);
        $data=[];
        if($worker && !$worker->isEmpty()){
            $data=$worker->toArray();
        }
        return $data;
    }

    //todo 返回提示文字
    public function getMsgTips($type){
        $t1=$t2=$t3='';
        switch ($type) {
            case 10: //todo [工作人员]+[用户] 当有工单指派给自己时  针对用户提交的工单
                $t1='您有新的工单待处理。';
                $t2='您提交的工单已被指派。';
                break;
            case 11://todo [工作人员]当自己提交的工单被指派处理人员时    针对工作人员提交的工单
                $t3='您提交的工单已被指派。';
                break;
            case 12://todo [工作人员]当有工单转单给自己时 给自己发送
                $t1='您有新的工单待处理。';
                break;
            case 13://todo [工作人员]当工作人员关闭指派给自己的工单时
                $t1='您负责的工单已被业主关闭。';
                break;
            case 14://todo [工作人员]当工作人员撤回指派给自己的工单时
                $t1='您负责的工单已被业主撤回。';
                break;
            case 15://todo [工作人员]管理指派给工作人员
                $t1='您有新的工单待处理。';
                break;
            case 20://todo [工作人员]当业主评价自己结单的工单时
                $t1='业主评价了您负责的工单。';
                break;
            case 21://todo [工作人员]当业主关闭指派给自己的工单时
                $t1='您负责的工单已被业主关闭。';
                break;
            case 22://todo [工作人员]当业主撤回指派给自己的工单时
                $t1='您负责的工单已被业主撤回。';
                break;
            case 30://todo [用户]当用户提交的工单已结单时 此操作只有工作人员结单
                $t2='您提交的工单已结单。';
                break;
            case 31://todo [工作人员]当工作人员提交的工单已结单时 此操作只有工作人员结单
                $t3='您提交的工单已结单。';
                break;
            case 32://todo [用户]当用户提交的工单已结单时 此操作只有工作人员结单
                $t2='您提交的工单已再一次结单。';
                break;
            case 33://todo [工作人员]当工作人员提交的工单已结单时 此操作只有工作人员结单
                $t3='您提交的工单已再一次结单。';
                break;
            case 40://todo [用户]当自己提交的工单拒绝时 工作人员拒绝用户的工单给用户通知
                $t2='您提交的工单已拒绝。';
                break;
            case 41://todo [工作人员]当工作人员A给工作人员B转单，工作人员B驳回时 发给A
                $t3='您的转单已被驳回，请去处理。';
                break;
            case 42://todo [工作人员]当自己提交的工单拒绝时 工作人员拒绝工作人员的工单给工作人员通知
                $t3='您提交的工单已拒绝。';
                break;
            case 50://todo [用户]当工作人员跟进工作时，发送给业主 只有收费才有该项 且只发送一次
                $t2='您提交的收费工单需要确认。';
                break;
            case 51://todo [工作人员]当业主同意收费工单时，发送给工作人员
                $t1='业主已同意该笔费用，请去处理。';
                break;
            case 52://todo [工作人员]当业主拒绝收费工单时，发送给工作人员
                $t1='业主已拒绝该笔费用，请去处理。';
                break;
            case 60://todo [工作人员]订单超时给指定工作人员发送
                $t1='您负责的工单已超时，请去处理';
                break;
            case 70://todo [工作人员or用户]后台工单中心操作已办结 
                $t2='您提交的工单已办结，请去查看。';
                break;
        }
        return ['worker'=>$t1,'user'=>$t2,'worker2'=>$t3];
    }

    /**
     * 发送模板消息
     * @author: liukezhu
     * @date : 2022/4/18
     * @param $type
     * @param $order_id 工单id
     * @param int $wid  上次工作人员id
     * @return bool
     */
    public function newRepairSendMsg($type,$order_id,$wid=0,$property_id=0){
        $TemplateNewsService=new TemplateNewsService();
        $order=(new HouseNewRepairWorksOrder())->getOrderCate([['o.order_id', '=', $order_id]],'o.order_id,o.uid,o.bind_id,o.event_status,o.worker_id,o.order_type,c1.cate_name as t1,c2.cate_name as t2,o.address_txt,o.room_id,o.single_id,o.floor_id,o.layer_id,o.village_id');
        if (!$order || $order->isEmpty()){
            fdump_api(['$cate不存在=='.__LINE__,$type,$order_id,$wid,$order],'newRepair/sendMsg',1);
            return true;
        }
        $order=$order->toArray();
        $arr=[];
        $title=$order['t1'].'/'.$order['t2'];
        if (mb_strlen($title)>15) {
            $title=msubstr($title,0,15);
        }
        $msgTips=$this->getMsgTips($type);
        //通知工单处理的工作人员
        $href=cfg('site_url').'/packapp/community/pages/CommunityPages/workOrder/eventdetails?order_id='.$order_id.'&gotoIndex=tem_msg';
        $event_status = $order['event_status'] ? $this->order_work_status_txt[$order['event_status']] : '无';
        if($order['single_id'] && $order['floor_id'] && $order['layer_id'] && $order['pigcms_id'] && $order['village_id']){
            $service_house_village=new HouseVillageService();
            $address = $service_house_village->getSingleFloorRoom($order['single_id'], $order['floor_id'], $order['layer_id'], $order['pigcms_id'], $order['village_id']);
            $address = $address ? $address : '无';
        }else{
            $address = $order['address_txt'] ?: '无';
        }
        if(!empty($msgTips['worker']) && $order['worker_id']){
            $worker=$this->getWorker($order['worker_id']);
            if(empty($worker)){
                fdump_api(['通知工作人员openid不存在=='.__LINE__,$type,$order_id,$order['worker_id'],$worker],'newRepair/sendMsg',1);
            }else{
                $ticket = Token::createToken($worker['wid'],6);
                $href=$href.'&ticket='.$ticket.'&village_id='.$worker['village_id'];
                $arr[]=[
                    'href' => $href,
                    'wecha_id' => $worker['openid'],
                    'first' => $msgTips['worker'],
                    'keyword1' => $title,
                    'keyword2' => '已发送',
                    'keyword3' => date('H时i分', $_SERVER['REQUEST_TIME']),
                    'remark' => '请点击查看详细信息！',
                    'new_info' => [//新版本发送需要的信息
                        'tempKey'=>'44716',//新模板号
                        'thing12'=>$title,//服务项目
                        'phrase2'=>$event_status,//订单类型
                        'time13'=>date('H:i', $_SERVER['REQUEST_TIME']),//服务时间
                        'thing11'=>$address,//服务地址
                    ],
                ];
            }
        }
        //通知上次操作的工作人员或工作人员自己提交的工单
        if(!empty($msgTips['worker2']) && $wid > 0){
            $worker=$this->getWorker($wid);
            if(empty($worker)){
                fdump_api(['通知上次操作的工作人员或工作人员自己提交的工单openid不存在2=='.__LINE__,$type,$order_id,$order['worker_id'],$worker,$arr],'newRepair/sendMsg',1);
            }else{
                $ticket = Token::createToken($worker['wid'],6);
                $href=$href.'&ticket='.$ticket.'&village_id='.$worker['village_id'];
                $arr[]=[
                    'href' => $href,
                    'wecha_id' => $worker['openid'],
                    'first' => $msgTips['worker2'],
                    'keyword1' => $title,
                    'keyword2' => '已发送',
                    'keyword3' => date('H时i分', $_SERVER['REQUEST_TIME']),
                    'remark' => '请点击查看详细信息！',
                    'new_info' => [//新版本发送需要的信息
                        'tempKey'=>'44716',//新模板号
                        'thing12'=>$title,//服务项目
                        'phrase2'=>$event_status,//订单类型
                        'time13'=>date('H:i', $_SERVER['REQUEST_TIME']),//服务时间
                        'thing11'=>$address,//服务地址
                    ],
                ];
            }
        }
        //针对已完结 判断给工作人员发送通知
        if($type == 70 && intval($order['order_type']) == 4 && $order['uid']){
            $worker=$this->getWorker($order['uid']);
            if(empty($worker)){
                fdump_api(['针对已完结，工作人员openid不存在2=='.__LINE__,$type,$order_id,$worker,$arr],'newRepair/sendMsg',1);
            }else{
                $ticket = Token::createToken($worker['wid'],6);
                $href=$href.'&ticket='.$ticket.'&village_id='.$worker['village_id'];
                $arr[]=[
                    'href' => $href,
                    'wecha_id' => $worker['openid'],
                    'first' => $msgTips['worker2'],
                    'keyword1' => $title,
                    'keyword2' => '已发送',
                    'keyword3' => date('H时i分', $_SERVER['REQUEST_TIME']),
                    'remark' => '请点击查看详细信息！',
                    'new_info' => [//新版本发送需要的信息
                        'tempKey'=>'44716',//新模板号
                        'thing12'=>$title,//服务项目
                        'phrase2'=>$event_status,//订单类型
                        'time13'=>date('H:i', $_SERVER['REQUEST_TIME']),//服务时间
                        'thing11'=>$address,//服务地址
                    ],
                ];
            }
        }
        //通知用户
        if(!empty($msgTips['user']) && intval($order['order_type']) == 0 && $order['uid']){
            if($type == 10 && empty($order['worker_id'])){
                fdump_api(['no worker_id=='.__LINE__,$type,$order_id,$wid,$order,$msgTips,$arr],'newRepair/sendMsg',1);
            }else{
                $user = (new User())->getOne(['uid' => $order['uid']],'openid');
                if($user && !$user->isEmpty()){
                    if(empty($user['openid'])){
                        fdump_api(['用户openid不存在=='.__LINE__,$type,$order_id,$wid,$user,$arr],'newRepair/sendMsg',1);
                    }else{
                        $arr[]= [
                            'href' => get_base_url('pages/houseMeter/workOrder/eventdetails?order_id='.$order_id),
                            'wecha_id' => $user['openid'],
                            'first' => $msgTips['user'],
                            'keyword1' => $title,
                            'keyword2' => '已发送',
                            'keyword3' => date('H时i分', $_SERVER['REQUEST_TIME']),
                            'remark' => '请点击查看详细信息！',
                            'new_info' => [//新版本发送需要的信息
                                'tempKey'=>'44716',//新模板号
                                'thing12'=>$title,//服务项目
                                'phrase2'=>$event_status,//订单类型
                                'time13'=>date('H:i', $_SERVER['REQUEST_TIME']),//服务时间
                                'thing11'=>$address,//服务地址
                            ],
                        ];
                    }
                }
            }
        }
        fdump_api(['$arr=='.__LINE__,$type,$order_id,$wid,$order,$msgTips,$arr],'newRepair/sendMsg',1);
        if($arr){
            $xtype=0;
            if($property_id>0){
                $xtype=1;
            }else{
                $property_id=0;
            }
            foreach ($arr as $v){
                $TemplateNewsService->sendTempMsg('OPENTM400166399', $v,0,$property_id,$xtype);//todo 类目模板OPENTM400166399
            }
        }
        return true;
    }

    /**
     * 工单记录指派人信息
     * @author: liukezhu
     * @date : 2022/6/24
     * @param $log_id
     * @param $wid
     * @return bool
     */
    public function workOrderLogSave($log_id,$wid){
        $worker=$this->getWorker($wid,'wid,name,phone');
        if(!$worker){
            return true;
        }
        $where[] = ['log_id', '=', $log_id];
        $log_info=[
            'wid'=>$worker['wid'],
            'name'=>$worker['name'],
            'phone'=>$worker['phone']
        ];
        return (new HouseNewRepairWorksOrderLog())->saveOne($where,['log_info'=>serialize($log_info)]);
    }


    public function getUserAddress($village_id,$pigcms_id){
        $db_house_village_user_bind=new HouseVillageUserBind();
        $service_house_village=new HouseVillageService();
        $address['address']='';
        $address['id_arr']=0;
        $address['type']='room';
        $user_info=$db_house_village_user_bind->getOne(['pigcms_id'=>$pigcms_id,'village_id'=>$village_id],'pigcms_id,village_id,uid,floor_id,vacancy_id,single_id,layer_id');
        if (!empty($user_info)){
            if (!empty($user_info['village_id'])&&!empty($user_info['floor_id'])&&!empty($user_info['vacancy_id'])&&!empty($user_info['single_id'])&&!empty($user_info['layer_id'])){
                $address['address']=$service_house_village->getSingleFloorRoom($user_info['single_id'],$user_info['floor_id'],$user_info['layer_id'],$user_info['vacancy_id'],$user_info['village_id']);
                $address['id_arr']=$user_info['vacancy_id'];
                $address['type']='room';
            }

        }
        return $address;
    }

    //todo 抢单模式 设置非工单分类部门人员不可操作
    public function checkGrabOrder($type=1,$village_id,$wid,$order){
        if($type == 1){
            $is_status=(new HouseVillageService())->checkVillageField($village_id,'is_grab_order');
            if(!$is_status){
                return true;
            }
        }
        $group_id=$this->getGroupId($wid);
        $relation_id=(new HouseNewRepairCateGroupRelation())->getOne([
            ['village_id','=',$village_id],
            ['group_id','=',$group_id],
            ['cate_id','=',$order['cat_fid']]
        ],'id');
        if (!$relation_id || $relation_id->isEmpty()){
            throw new \think\Exception('当前工单您无权查看');
        }
        return true;
    }

    //todo 触发抢单通知工作人员
    public function triggerGrabOrderNoticeWork($village_id,$cate_id=0){
        $ProcessSubPlan=new ProcessSubPlan();
        $arr= array();
        $arr['param'] = serialize(array(
            'type'       => 'grab_order_notice',
            'village_id' => $village_id,
            'cate_id' => $cate_id,
        ));
        $arr['plan_time'] = -100;
        $arr['space_time'] = 0;
        $arr['add_time'] = time();
        $arr['file'] = 'sub_house_village';
        $arr['time_type'] = 1;
        $arr['unique_id'] = 'grab_order_notice_'.$village_id.'_'.$cate_id;
        $arr['rand_number'] = mt_rand(1, max(cfg('sub_process_num'), 3));
        $result=$ProcessSubPlan->get_one([
            ['unique_id', '=', $arr['unique_id']]
        ],'id');
        fdump_api(['触发抢单通知工作人员=='.__LINE__,$village_id,$cate_id,$result],'grab_order/trigger_log',1);
        if($result && !$result->isEmpty()){
            return true;
        }
        $ProcessSubPlan->add($arr);
        return true;
    }

    //todo 发送模板消息通知工作人员
    public function sendGrabOrderNoticeWork($village_id,$cate_id=0){
        fdump_api(['发送模板消息通知工作人员=='.__LINE__,$village_id,$cate_id],'grab_order/send_log',1);
        $TemplateNewsService=new TemplateNewsService();
        $where[]=['o.village_id', '=', $village_id];
        $where[]=['o.is_send_grab', '=', 0];
        $where[]=['o.event_status', '=', 15];
        $where[]=['r.id', 'exp', Db::raw('IS NOT NULL')];
        $where[]=['w.is_del', '=', 0];
        $where[]=['w.status', '<>', 4];
        $where[]=['w.openid', '<>', ''];
//        $where[]=['g.id', 'exp', Db::raw('IS NULL')];
        if($cate_id){
            $where[]=['o.cat_fid', '=', $cate_id];
        }
        $where['_string']='isNotTime';
        $field='o.order_id,o.village_id,o.property_id,o.cat_fid,c1.cate_name as t1,c2.cate_name as t2,w.wid,w.name,w.phone,w.openid';
        $list=(new HouseNewRepairWorksOrder())->getBindCateOrder($where,$field);
        if($list && !$list->isEmpty()){
            $list= $list->toArray();
            $record=[];
            $orderIdAll=[];
            fdump_api(['$list=='.__LINE__,$village_id,$cate_id,$list],'grab_order/send_log',1);
            foreach ($list as $v){
                $title=$v['t1'].'/'.$v['t2'];
                if (mb_strlen($title)>15) {
                    $title=msubstr($title,0,15);
                }
                $href=cfg('site_url').'/packapp/community/pages/CommunityPages/workOrder/eventdetails?order_id='.$v['order_id'].'&gotoIndex=tem_msg';
                $ticket = Token::createToken($v['wid'],6);
                $href=$href.'&ticket='.$ticket.'&village_id='.$v['village_id'];
                
                $param=[
                    'href' =>$href,
                    'wecha_id' => $v['openid'],
                    'first' => '您有新的工单待抢单，请去处理。',
                    'keyword1' => $title,
                    'keyword2' => '已发送',
                    'keyword3' => date('H时i分', $_SERVER['REQUEST_TIME']),
                    'remark' => '请点击查看详细信息！',
                    'is_repeat'=>1
                ];
                $record[]=[
                    'vllage_id'=>$v['village_id'],
                    'cate_id'=>$v['cat_fid'],
                    'wid'=>$v['wid'],
                    'order_id'=>$v['order_id'],
                    'add_time'=>date('Y-m-d H:i:s',time())
                ];
                $orderIdAll[$v['order_id']]=$v['order_id'];

                fdump_api(['$param=='.__LINE__,$v,$param,$record],'grab_order/send_log',1);

                $TemplateNewsService->sendTempMsg('OPENTM400166399', $param,0,$v['property_id'],1);
            }
            if($orderIdAll){
                //已经发生通知的订单 不可再发送
                (new HouseNewRepairWorksOrder())->saveOne([
                    ['order_id', 'in', (array_values($orderIdAll))]
                ], ['is_send_grab'=>1]);
            }
            if($record){
                (new HouseNewRepairGraborderNoticeRecord())->addAll($record);
            }
        }
        return true;
    }

 

    /**
     * 可视化工单数据统计
     * @author:zhubaodi
     * @date_time: 2022/8/26 16:45
     */
    public function getWorkorder($village_id)
    {
	    $db_house_new_repair_works_order    = new HouseNewRepairWorksOrder();
	    $db_house_new_repair_work_order_log = new HouseNewRepairWorksOrderLog();
	    $start_time                         = date('Y-m-d H:i:s', mktime(0, 0, 0, 1, 1, date("Y")));
	    $all_count                          = $db_house_new_repair_works_order->getCount([['add_time', '>=', strtotime($start_time)], ['village_id', '=', $village_id]]);//总共单数
	    $processing_count                   = $db_house_new_repair_works_order->getCount([['add_time', '>=', strtotime($start_time)], ['event_status', '>=', '30'], ['event_status', '<', '40'], ['village_id', '=', $village_id]]);//处理中数
	    $untreated_count                    = $db_house_new_repair_works_order->getCount([['add_time', '>=', strtotime($start_time)], ['event_status', '<', '30'], ['village_id', '=', $village_id]]);//未处理数
	    $processed_count                    = $db_house_new_repair_works_order->getCount([['add_time', '>=', strtotime($start_time)], ['event_status', '>=', '40'], ['village_id', '=', $village_id]]);//已处理数
	    $favorable_comments_count           = $db_house_new_repair_work_order_log->getCount([['add_time', '>=', strtotime($start_time)], ['evaluate', '=', 5], ['village_id', '=', $village_id]]);//好评数
	    $favorable_comments_rate            = $all_count ? intval(round_number(($favorable_comments_count / $all_count), 2) * 100) : 100;
	    $data['all_count']                  = $all_count;
	    $data['favorable_comments_rate']    = $favorable_comments_rate;
	    $data['favorable_comments_count']   = $favorable_comments_count;
	    $data['processing_count']           = $processing_count;
	    $data['untreated_count']            = $untreated_count;
	    $data['processed_count']            = $processed_count;

	    return $data;
    }
 
    public function getNewRepairWorksOrderLog($whereArr,$field='*',$page=1,$limit=20,$groupBy=''){

        $dataArr = ['list' => array(), 'total_limit' => $limit, 'count' => 0];
        if(empty($whereArr)){
            return $dataArr;
        }
        $houseNewRepairWorksOrderLog= new HouseNewRepairWorksOrderLog();
        $listObj=$houseNewRepairWorksOrderLog->getGroupByList($whereArr,$field,$page,$limit,$groupBy);
        if($listObj && !$listObj->isEmpty()){
            $list=$listObj->toArray();
            $count=$houseNewRepairWorksOrderLog->getCountGroupBy($whereArr,$groupBy);
            $dataArr['count']=$count>0 ?$count:0;
            foreach ($list as $kk=>$vv){
                $list[$kk]['evaluate1']=0;
                $list[$kk]['evaluate2']=0;
                $list[$kk]['evaluate3']=0;
                $list[$kk]['evaluate4']=0;
                $list[$kk]['evaluate5']=0;
                $roomArr=$this->getUserAddress($vv['village_id'],$vv['operator_id']);
                $list[$kk]['roomaddr']='';
                if($roomArr && $roomArr['address']){
                    $list[$kk]['roomaddr']=$roomArr['address'];
                }
                $evaluateWhere=array();
                $evaluateWhere[]=array('village_id','=',$vv['village_id']);
                $evaluateWhere[]=array('log_name','=','evaluate');
                $evaluateWhere[]=array('log_operator','=',$vv['log_operator']);
                $evaluateWhere[]=array('log_phone','=',$vv['log_phone']);
                $evaluateWhere[]=array('operator_id	 ','=',$vv['operator_id']);
                $evaluateWhere[]=array('log_uid','=',$vv['log_uid']);
                $evaluate1Where=$evaluateWhere;
                $evaluate1Where[]=array('evaluate','=',1);
                $list[$kk]['evaluate1']=$houseNewRepairWorksOrderLog->getCount($evaluate1Where);
                
                $evaluate2Where=$evaluateWhere;
                $evaluate2Where[]=array('evaluate','=',2);
                $list[$kk]['evaluate2']=$houseNewRepairWorksOrderLog->getCount($evaluate2Where);
                
                $evaluate3Where=$evaluateWhere;
                $evaluate3Where[]=array('evaluate','=',3);
                $list[$kk]['evaluate3']=$houseNewRepairWorksOrderLog->getCount($evaluate3Where);
                
                $evaluate4Where=$evaluateWhere;
                $evaluate4Where[]=array('evaluate','=',4);
                $list[$kk]['evaluate4']=$houseNewRepairWorksOrderLog->getCount($evaluate4Where);
                
                $evaluate5Where=$evaluateWhere;
                $evaluate5Where[]=array('evaluate','=',5);
                $list[$kk]['evaluate5']=$houseNewRepairWorksOrderLog->getCount($evaluate5Where);
                if ($vv['log_phone']) {
                    $list[$kk]['log_phone'] = phone_desensitization($vv['log_phone']);
                }
            }
            $dataArr['list']=$list;
        }
        return $dataArr;
    }
    
    /**
     * 工单自动评价 小区
     * 查那些小区开启了 工单自动评价
    **/

    public function worksOrderAutoEvaluateVillage(){
        $houseVillageInfo=new HouseVillageInfo();
        $whereArr=array();
        $whereArr[]=array('hvi.village_id','>',0);
        $whereArr[]=array('hv.status','=',1);
        $whereArr[]=array('hvi.is_auto_work_order_evaluate','=',1);
        $whereArr[]=array('hvi.work_order_auto_evaluate_time','>',0);
        $field='hvi.info_id,hvi.village_id,hvi.property_id';
        $villageInfoObj=$houseVillageInfo->getVillageInfoList($whereArr,$field);
        if($villageInfoObj && !$villageInfoObj->isEmpty()){
            $villageInfo=$villageInfoObj->toArray();
            fdump_api(['villageInfo'=>$villageInfo],'00worksOrderAutoEvaluateVillage',1);
            foreach ($villageInfo as $vv){
                $param=array();
                $param['info_id']=$vv['info_id'];
                $param['village_id']=$vv['village_id'];
                $this->worksOrderAutoEvaluateVillageQueuePushToJob($param);
            }
        }
        return true;
    }
    
    /**
     * 工单自动评价 工单
     * 处理每个小区的 工单自动评价
     **/
    public function worksOrderAutoEvaluate($param=array()){
        if(empty($param) || empty($param['info_id']) && empty($param['village_id'])){
            return true;
        }
        fdump_api(['param'=>$param],'00worksOrderAutoEvaluate',1);
        $whereArr=array('info_id'=>$param['info_id'],'village_id'=>$param['village_id']);
        $houseVillageInfo=new HouseVillageInfo();
        $field='village_id,property_id,is_auto_work_order_evaluate,work_order_auto_evaluate_time,work_order_extra';
        $villageInfoObj=$houseVillageInfo->getOne($whereArr,$field);
        if($villageInfoObj && !$villageInfoObj->isEmpty()) {
            $villageInfo = $villageInfoObj->toArray();
            fdump_api(['villageInfo'=>$villageInfo],'00worksOrderAutoEvaluate',1);
            $nowtime=time();
            $work_order_extra=$villageInfo['work_order_extra'] ? json_decode($villageInfo['work_order_extra'],1):'';
            $auto_evaluate=array();
            if($work_order_extra && isset($work_order_extra['auto_evaluate']) && !empty($work_order_extra['auto_evaluate'])){
                $auto_evaluate=$work_order_extra['auto_evaluate'];
            }
            if($auto_evaluate && $villageInfo['work_order_auto_evaluate_time']>0){
                $query_time=0;
                $stime_type=$auto_evaluate['stime_type'];  //hour 小时 day 天
                $evaluate=$auto_evaluate['star'];
                if($stime_type=='hour'){
                    $query_time=$nowtime-$villageInfo['work_order_auto_evaluate_time']*3600;
                }elseif ($stime_type=='day'){
                    $query_time=$nowtime-($villageInfo['work_order_auto_evaluate_time']*24*3600);
                }
                if($query_time<1){
                    return true;
                }
                $whereArr=array();
                $whereArr[]=array('village_id','=',$param['village_id']);
                $whereArr[]=array('event_status','>=',40);
                $whereArr[]=array('event_status','<',50);
                $whereArr[]=array('update_time','<',$query_time);
                $db_house_new_repair_works_order = new HouseNewRepairWorksOrder();
                $field='order_id,village_id,property_id,uid,bind_id,phone,name,worker_id,event_status,project_id,rule_id';
                $works_order_obj=$db_house_new_repair_works_order->getAllList($whereArr,$field);
                if($works_order_obj && !$works_order_obj->isEmpty()){
                    $works_orders=$works_order_obj->toArray();
                    foreach ($works_orders as $ovv){
                        $updateArr=[
                            'event_status' => 70,
                            'update_time' => $nowtime,
                            'evaluate' => $evaluate,
                        ];
                        $db_house_new_repair_works_order->saveOne(['order_id' => $ovv['order_id']], $updateArr);
                        $id = $this->addRepairLog([
                            'order_id' => $ovv['order_id'],
                            'log_name' => 'evaluate',
                            'operator_type' => 10,
                            'log_content' => '系统自动评价',
                            'log_imgs' =>  '',
                            'add_time' => $nowtime,
                            'log_operator' =>  '系统',
                            'log_phone' =>  '',
                            'operator_id' =>  0,
                            'log_uid' =>  0,
                            'evaluate' => $evaluate,
                            'rule_id' => $ovv['rule_id'],
                            'project_id' => $ovv['project_id'],
                            'charge_price' => 0,
                            'pay_type' => 0,
                            'offline_pay_type' => 0,
                            'village_id' => $ovv['village_id'],
                            'property_id' => $ovv['property_id'],
                            
                        ]);
                         //发模板消息
                        $this->newRepairSendMsg(20,$ovv['order_id'],0,$ovv['property_id']);
                    }
                }
            }
        }
    }
}