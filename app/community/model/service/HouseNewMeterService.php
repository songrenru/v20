<?php

namespace app\community\model\service;

use app\common\model\service\export\ExportService as BaseExportService;
use app\common\model\service\plan\PlanService;
use app\common\model\service\UploadFileService;
use app\common\model\service\weixin\TemplateNewsService;
use app\community\model\db\Area;
use app\community\model\db\AreaStreet;
use app\community\model\db\HouseMeterAdminElectric;
use app\community\model\db\HouseMeterElectricGroup;
use app\community\model\db\HouseNewChargeNumber;
use app\community\model\db\HouseNewChargeProject;
use app\community\model\db\HouseNewChargeRule;
use app\community\model\db\HouseNewChargeStandardBind;
use app\community\model\db\HouseNewMeterDirector;
use app\community\model\db\HouseNewPayOrderSummary;
use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillageFloor;
use app\community\model\db\HouseVillageLayer;
use app\community\model\db\HouseVillageMeterReading;
use app\community\model\db\HouseVillageSingle;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\db\HouseVillageMeterReadingMdylog;
use app\community\model\db\PlatOrder;
use app\community\model\service\HouseVillageUserVacancyService;
use app\community\model\service\StorageService;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use think\facade\Db;
use app\community\model\db\ProcessSubPlan;
use token\Token;
use app\traits\MeterDirectorNoticeHouseTraits;
use think\Exception;
class HouseNewMeterService
{
    use MeterDirectorNoticeHouseTraits;
    /**
     * 抄表项目列表
     * @author lijie
     * @date_time 2021/07/09
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return mixed
     */
    public function getMeterProject($where=[],$field=true,$page=1,$limit=15,$order='p.id DESC')
    {
        $db_house_new_meter_project = new HouseNewChargeProject();
        $data = $db_house_new_meter_project->getList($where,$field,$order,$page,$limit);
        return $data;
    }

    /**
     * 最后一次抄表录入记录
     * @author lijie
     * @date_time 2021/09/07
     * @param array $where
     * @param bool $field
     * @param string $order
     * @return array|\think\Model|null
     */
    public function getMeterRecordInfo($where=[],$field=true,$order='id DESC')
    {
        $db_house_village_meter_reading = new HouseVillageMeterReading();
        $data = $db_house_village_meter_reading->getOne($where,$field,$order);
        return $data;
    }

    /**
     * 抄表项目列表数量
     * @author lijie
     * @date_time 2021/07/09
     * @param array $where
     * @return mixed
     */
    public function getMeterProjectCount($where=[])
    {
        $db_house_new_meter_project = new HouseNewChargeProject();
        $count = $db_house_new_meter_project->getCount($where);
        return $count;
    }

    public function getMeterProjectInfo($where=[],$field=true)
    {
        $db_house_new_meter_project = new HouseNewChargeProject();
        $count = $db_house_new_meter_project->getFind($where,$field);
        return $count;
    }

    public function updateNewChargeProject($where=[],$datas=array())
    {
        $db_house_new_meter_project = new HouseNewChargeProject();
        $ret = $db_house_new_meter_project->editFind($where,$datas);
        return $ret;
    }

    public function getOneMeterReading($where=[],$order='id DESC',$isMeterReading=false)
    {
        $db_house_village_meter_reading = new HouseVillageMeterReading();
        $dataObj = $db_house_village_meter_reading->getOne($where,'*',$order);
        $data=array();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $db_house_new_meter_project = new HouseNewChargeProject();
        if($dataObj && !$dataObj->isEmpty()){
            $data= $dataObj->toArray();
            if($isMeterReading){
                return $data;
            }
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $service_house_village = new HouseVillageService();
            $room_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$data['layer_num']],'name,phone,single_id,floor_id,layer_id,pigcms_id,village_id,room');
            $address = $service_house_village->getSingleFloorRoom($room_info['single_id'],$room_info['floor_id'],$room_info['layer_id'],$room_info['pigcms_id'],$room_info['village_id']);
            $data['name'] = $room_info['name']?$room_info['name']:$data['user_name'];
            $data['phone'] = $room_info['phone']?$room_info['phone']:$data['user_bind_phone'];
            $data['address'] = $address;
            $data['room_ids']=[$room_info['single_id'],$room_info['floor_id'],$room_info['layer_id'],$data['layer_num']];
            $data['room'] = isset($room_info['room'])?$room_info['room']:'';
            $data['rule_id']=0;
            $data['project_name']='';
            $data['charge_name']='';
            $data['rule_name']='';
            $data['charge_type']='';
            if($data['project_id']>0){
                $meter_project=$db_house_new_meter_project->getOne(['id'=>$data['project_id']]);
                if($meter_project && !$meter_project->isEmpty()){
                    $data['project_name']=$meter_project['name'];
                    $data['charge_name']=$meter_project['name'];
                }
                $rule_id = $service_house_new_charge_rule->getValidChargeRule($data['project_id']);
                $data['rule_id']=$rule_id;
                $rule_info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$rule_id],'r.charge_name,r.unit_price,r.rate,r.id as rule_id,n.charge_type');
                $data['rule_name'] = $rule_info['charge_name'];// 这个字段才是标准名称
                //$data['unit_price'] = $rule_info['unit_price'];
                //$data['rate'] = $rule_info['rate'];
                $data['charge_type']=$rule_info['charge_type'];
            }
        }
        return $data;
    }

    /**
     * 负责人列表
     * @author lijie
     * @date_time 2021/07/09
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getMeterDirectorList($where=[],$field=true,$page=1,$limit=15,$order='id DESC')
    {
        $db_house_new_meter_director = new HouseNewMeterDirector();
        $data = $db_house_new_meter_director->getList($where,$field,$page,$limit,$order);
        if($data){
            foreach ($data as $k=>$v) {
                $data[$k]['add_time_txt'] = date('Y-m-d H:i:s',$v['add_time']);
                $notice_time = explode(',',$v['notice_time']);
                $data[$k]['notice_time_txt'] = "于每月{$notice_time[0]}日 {$notice_time[1]}发送提醒";
            }
        }
        return $data;
    }

    /**
     * 负责人数量
     * @author lijie
     * @date_time 2021/07/09
     * @param array $where
     * @return int
     */
    public function getMeterDirectorCount($where=[])
    {
        $db_house_new_meter_director = new HouseNewMeterDirector();
        $count = $db_house_new_meter_director->getCount($where);
        return $count;
    }

    /**
     * 添加负责人
     * @author lijie
     * @date_time 2021/07/09
     * @param array $data
     * @return int|string
     */
    public function addMeterDirector($data=[])
    {
        $db_house_new_meter_director = new HouseNewMeterDirector();
        $res = $db_house_new_meter_director->addOne($data);
        return $res;
    }

    /**
     * 修改负责人信息
     * @author lijie
     * @date_time 2021/07/09
     * @param array $where
     * @param array $data
     * @return int|string
     */
    public function saveMeterDirector($where=[],$data=[])
    {
        $db_house_new_meter_director = new HouseNewMeterDirector();
        $res = $db_house_new_meter_director->saveOne($where,$data);
        return $res;
    }

    /**
     * 负责人详情
     * @author lijie
     * @date_time 2021/07/10
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getMeterDirectorInfo($where=[],$field=true)
    {
        $db_house_new_meter_director = new HouseNewMeterDirector();
        $data = $db_house_new_meter_director->getOne($where,$field);
        return $data;
    }

    /**
     * 添加抄表记录
     * @author lijie
     * @date_time 2021/07/10
     * @param $data
     * @return int|string
     */
    public function addMeterReading($data)
    {
        $db_house_village_meter_reading = new HouseVillageMeterReading();
        $id = $db_house_village_meter_reading->addOne($data);
        return $id;
    }

    /**
     * 获取绑定信息
     * @author lijie
     * @date_time 2022/02/17
     * @param array $where
     * @return mixed
     */
    public function getIsBind($where=[])
    {
        $db_house_new_charge_standard_bind = new HouseNewChargeStandardBind();
        $data = $db_house_new_charge_standard_bind->getOne($where);
        if($data && !$data->isEmpty()){
            $data = $data->toArray();
        }else{
            $data=array();
        }
        return $data;
    }

    public function getMeterReadingRecordList($where=[],$field=true,$page=1,$limit=15,$order='id DESC')
    {
        $db_house_village_meter_reading = new HouseVillageMeterReading();
        $data = $db_house_village_meter_reading->getLists($where,$field,$page,$limit,$order);
        return $data;
    }

    /**
     * 抄表记录
     * @author lijie
     * @date_time 2021/07/10
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getMeterReadingRecord($where=[],$field=true,$page=1,$limit=15,$order='id DESC')
    {
        $db_house_village_meter_reading = new HouseVillageMeterReading();
        $service_house_village_single = new HouseVillageSingleService();
        $service_house_new_cashier = new HouseNewCashierService();

        $data = $db_house_village_meter_reading->getList($where,$field,$page,$limit,$order);
        if($data){
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $service_house_village = new HouseVillageService();
            foreach ($data as $k=>$v){
                $data[$k]['realname'] = $v['work_name'];
                $data[$k]['add_time_txt'] = date('Y-m-d H:i:s',$v['add_time']);
                $data[$k]['is_edit']=0;
                $whereArr=array('layer_num'=>$v['layer_num'],'village_id'=>$v['village_id']);
                if($v['project_id']>0){
                    $whereArr['project_id']=$v['project_id'];
                }elseif(!empty($v['charge_name'])){
                    $whereArr['charge_name']=$v['charge_name'];
                }

                $last_item=$db_house_village_meter_reading->getOne($whereArr,'id,floor_id,layer_num','id DESC');
                if($last_item && $last_item['id']==$v['id']){
                    $data[$k]['is_edit']=1;
                }
                if (!empty($v['transaction_type'])){
                    if ($v['transaction_type']==1){
                        $data[$k]['is_edit']=0;
                    }
                    $data[$k]['transaction_type_txt']=$v['transaction_type']==1?'购买':'缴费';
                }else{
                    $data[$k]['transaction_type_txt']='--';
                }
                $data[$k]['opt_meter_time_str']=date('Y-m-d H:i');
                if($v['opt_meter_time']>0){
                    $data[$k]['opt_meter_time_str']=date('Y-m-d H:i',$v['opt_meter_time']);
                }elseif($v['add_time']>0){
                    $data[$k]['opt_meter_time_str']=date('Y-m-d H:i',$v['add_time']);
                }
                $room_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$v['layer_num']],'name,phone,single_id,floor_id,layer_id,pigcms_id,village_id,room');
                $address = $service_house_village->getSingleFloorRoom($room_info['single_id'],$room_info['floor_id'],$room_info['layer_id'],$room_info['pigcms_id'],$room_info['village_id']);
                $data[$k]['name'] = $room_info['name']?$room_info['name']:$v['user_name'];
                $data[$k]['phone'] = $room_info['phone']?$room_info['phone']:$v['user_bind_phone'];
                $data[$k]['address'] = $address;
                $single_info = $service_house_village_single->getSingleInfo(['id'=>$room_info['single_id']],'single_name');
                $floor_info = $service_house_village->getHouseVillageFloorWhere(['floor_id'=>$room_info['floor_id']],'floor_name');
                $layer_info = $service_house_village->getHouseVillageLayerWhere(['id'=>$room_info['layer_id']],'layer_name');
                $data[$k]['single_name'] = isset($single_info['single_name'])?$single_info['single_name']:'';
                $data[$k]['floor_name'] = isset($floor_info['floor_name'])?$floor_info['floor_name']:'';
                $data[$k]['layer_name'] = isset($layer_info['layer_name'])?$layer_info['layer_name']:'';
                $data[$k]['room'] = isset($room_info['room'])?$room_info['room']:'';
                $data[$k]['mdy_change_money'] = 0;
                $data[$k]['mdy_change_ammeter'] = 0;

                $whereArr=array('meter_reading_id'=>$v['id'],'village_id' => $v['village_id']);
                $order_info_obj=$service_house_new_cashier->getInfo($whereArr,'order_id,summary_id,is_discard,is_paid,pay_time,extra_data,meter_reading_id','order_id DESC');
                $data[$k]['order_id'] =0;
                $data[$k]['order_is_pay'] =0;
                $data[$k]['mdy_order_is_pay'] =0;
                if($order_info_obj && !$order_info_obj->isEmpty()){
                    $order_info=$order_info_obj->toArray();
                    $data[$k]['order_id'] =$order_info['order_id'];
                    if($order_info['is_paid']==1 && $order_info['pay_time']>100){
                        $data[$k]['order_is_pay'] =1;
                    }
                }
                if(isset($v['extra_data']) && !empty($v['extra_data'])){
                    $extra_data=json_decode($v['extra_data'],1);
                    $data[$k]['extra_data'] =$extra_data;
                    if(isset($extra_data['order_paid_mdy']) && (!isset($extra_data['order_paid_mdy']['new_order_id']) || ($extra_data['order_paid_mdy']['new_order_id']<1))){
                        $data[$k]['mdy_change_money'] = $extra_data['order_paid_mdy']['change_money'];
                        $data[$k]['mdy_change_ammeter'] = $extra_data['order_paid_mdy']['change_ammeter'];
                    }elseif(isset($extra_data['order_paid_mdy']) && (isset($extra_data['order_paid_mdy']['new_order_id']) && ($extra_data['order_paid_mdy']['new_order_id']>0)) && ($extra_data['order_paid_mdy']['new_order_id']==$data[$k]['order_id'])){
                        $data[$k]['mdy_order_is_pay'] =1;
                    }

                }else{
                    $data[$k]['extra_data'] ='';
                }
                //todo 针对定制水电表设备 不支持修改起止度参数
                if((int)cfg('customized_meter_reading')){
                    $data[$k]['is_edit']=0;
                    $data[$k]['order_is_pay']=0;
                }
                if($page>0 && !empty($data[$k]['phone'])){
                    $data[$k]['phone']=phone_desensitization($data[$k]['phone']);
                }
            }
        }
        return $data;
    }

    /**
     * 抄表记录数量
     * @author lijie
     * @date_time 2021/07/12
     * @param array $where
     * @return int
     */
    public function getMeterReadingRecordCount($where=[])
    {
        $db_house_village_meter_reading = new HouseVillageMeterReading();
        $count = $db_house_village_meter_reading->getMeterCount($where);
        return $count;
    }

    /**
     * 给负责人发送抄表模板消息
     * @author lijie
     * @date_time 2021/07/12
     * @param array $param
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function sendMeterMessage($param=[])
    {
        if(empty($param)){
            return false;
        }
        $director_id = $param['director_id'];
        $db_house_new_meter_director = new HouseNewMeterDirector();
        $director_info = $db_house_new_meter_director->getOne(['id'=>$director_id],true);
        if(empty($director_info)){
            return false;
        }
        $notice_time = explode(',',$director_info['notice_time']);
        //发送模板消息
        $service_house_worker = new HouseWorkerService();
        $templateNewsService = new TemplateNewsService();
        $worker_info = $service_house_worker->getOneWorker(['wid'=>$director_info['worker_id']],'openid');
        $href = '';
        $datamsg = array(
            'tempKey' => 'OPENTM405462911',
            'dataArr' => array(
                'href' => $href,
                'wecha_id' => $worker_info['openid'],
                'first' => '您有一项工作需处理',
                'keyword1' => '工作',
                'keyword2' =>'已发送',
                'keyword3' => date('H时i分',$_SERVER['REQUEST_TIME']),
                'keyword4' => '',
                'remark' => '\n请点击查看详细信息！'
            )
        );
        $templateNewsService->sendTempMsg($datamsg['tempKey'], $datamsg['dataArr']);
        //添加子计划任务
        /*
        $service_plan = new PlanService();
        $time = strtotime(date('Y-m',strtotime('+1 month')).'-'.$notice_time[0].' '.$notice_time[1]);
        $param['plan_time'] = $time;
        $param['space_time'] = 0;
        $param['add_time'] = time();
        $param['file'] = 'sub_village_send_meter_message';
        $param['time_type'] = 1;
        $param['unique_id'] = 'worker_meter_message_'.$director_id;
        $param['param'] = serialize(['director_id'=>$director_id]);
        $service_plan->addTask($param,1);
        */
        return true;
    }

    /*public function saveExcel($data=[])
    {
        $service_house_new_cashier = new HouseNewCashierService();
        $title = ['地址', '业主名', '电话', '单价（元）', '倍率', '抄表时间', '起度', '止度', '操作人', '备注'];
        $res = $service_house_new_cashier->saveExcel($title, $data, '已缴账单明细表' . time());
        return $res;
    }*/

    /**
     * 导出抄表记录
     * @author lijie
     * @date_time 2021/07/15
     * @param array $data
     * @param string $title
     * @param string $file_name
     * @throws \think\Exception
     */
    public function saveExcel($data=[],$title='',$file_name='')
    {
        $spreadsheet = new Spreadsheet();
        $worksheet = $spreadsheet->getActiveSheet();
        //设置单元格内容
        $worksheet->setCellValueByColumnAndRow(1, 1, '楼栋');
        $worksheet->setCellValueByColumnAndRow(2, 1, '单元');
        $worksheet->setCellValueByColumnAndRow(3, 1, '楼层');
        $worksheet->setCellValueByColumnAndRow(4, 1, '房间号');
        $worksheet->setCellValueByColumnAndRow(5, 1, '业主名');
        $worksheet->setCellValueByColumnAndRow(6, 1, '电话');
        $worksheet->setCellValueByColumnAndRow(7, 1, '单价（元）');
        $worksheet->setCellValueByColumnAndRow(8, 1, '倍率');
        $worksheet->setCellValueByColumnAndRow(9, 1, '抄表时间');
        $worksheet->setCellValueByColumnAndRow(10, 1, '起度');
        $worksheet->setCellValueByColumnAndRow(11, 1, '止度');
        $worksheet->setCellValueByColumnAndRow(12, 1, '操作人');
        $worksheet->setCellValueByColumnAndRow(13, 1, '备注');
        //设置单元格样式
        $worksheet->getStyle('A1:O1')->getFont()->setName('黑体')->setSize(12);
        $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(40);
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('E')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(30);
        $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('I')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('J')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('K')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('L')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('M')->setWidth(20);
        $len = count($data)-1;
        $row = 0;
        $i = 0;
        $j=0;
        foreach ($data as $key => $val) {
            if ($i < $len+1) {
                $j = $i + 2; //从表格第2行开始
                $worksheet->setCellValueByColumnAndRow(1, $j, $data[$key]['single_name']);
                $worksheet->setCellValueByColumnAndRow(2, $j, $data[$key]['floor_name']);
                $worksheet->setCellValueByColumnAndRow(3, $j, $data[$key]['layer_name']);
                $worksheet->setCellValueByColumnAndRow(4, $j, $data[$key]['room']);
                $worksheet->setCellValueByColumnAndRow(5, $j, $data[$key]['name']);
                $worksheet->setCellValueByColumnAndRow(6, $j, $data[$key]['phone']);
                $worksheet->setCellValueByColumnAndRow(7, $j,  '¥' . $data[$key]['unit_price']);
                $worksheet->setCellValueByColumnAndRow(8, $j, $data[$key]['rate']);
                $worksheet->setCellValueByColumnAndRow(9, $j, $data[$key]['add_time_txt']);
                $worksheet->setCellValueByColumnAndRow(10, $j, $data[$key]['start_ammeter']);
                $worksheet->setCellValueByColumnAndRow(11, $j,$data[$key]['last_ammeter']);
                $worksheet->setCellValueByColumnAndRow(12, $j, $data[$key]['realname']);
                $worksheet->setCellValueByColumnAndRow(13, $j, $data[$key]['note']);
                $i++;
            }
            $row++;
        }
        $styleArrayBody = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
        ];
        $total_rows = $row + 1;
        //添加所有边框/居中
        $worksheet->getStyle('A1:O' . $total_rows)->applyFromArray($styleArrayBody);
        //下载
        (new BaseExportService())->phpSpreadsheet($file_name, $spreadsheet);
        return $this->downloadExportFile($file_name);
    }



    public function saveExcel_price($data=[],$title='',$file_name='')
    {
        $spreadsheet = new Spreadsheet();
        $worksheet = $spreadsheet->getActiveSheet();
        //设置单元格内容
        $worksheet->setCellValueByColumnAndRow(1, 1, '楼栋');
        $worksheet->setCellValueByColumnAndRow(2, 1, '单元');
        $worksheet->setCellValueByColumnAndRow(3, 1, '楼层');
        $worksheet->setCellValueByColumnAndRow(4, 1, '房间号');
        $worksheet->setCellValueByColumnAndRow(5, 1, '业主名');
        $worksheet->setCellValueByColumnAndRow(6, 1, '电话');
        $worksheet->setCellValueByColumnAndRow(7, 1, '单价（元）');
        $worksheet->setCellValueByColumnAndRow(8, 1, '倍率');
        $worksheet->setCellValueByColumnAndRow(9, 1, '抄表时间');
        $worksheet->setCellValueByColumnAndRow(10, 1, '起度');
        $worksheet->setCellValueByColumnAndRow(11, 1, '止度');
        $worksheet->setCellValueByColumnAndRow(12, 1, '交易类型');
        $worksheet->setCellValueByColumnAndRow(13, 1, '操作人');
        $worksheet->setCellValueByColumnAndRow(14, 1, '备注');
        //设置单元格样式
        $worksheet->getStyle('A1:O1')->getFont()->setName('黑体')->setSize(12);
        $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(40);
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('E')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(30);
        $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('I')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('J')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('K')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('L')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('M')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('N')->setWidth(20);
        $len = count($data)-1;
        $row = 0;
        $i = 0;
        $j=0;
        foreach ($data as $key => $val) {
            if ($i < $len+1) {
                $j = $i + 2; //从表格第2行开始
                $worksheet->setCellValueByColumnAndRow(1, $j, $data[$key]['single_name']);
                $worksheet->setCellValueByColumnAndRow(2, $j, $data[$key]['floor_name']);
                $worksheet->setCellValueByColumnAndRow(3, $j, $data[$key]['layer_name']);
                $worksheet->setCellValueByColumnAndRow(4, $j, $data[$key]['room']);
                $worksheet->setCellValueByColumnAndRow(5, $j, $data[$key]['name']);
                $worksheet->setCellValueByColumnAndRow(6, $j, $data[$key]['phone']);
                $worksheet->setCellValueByColumnAndRow(7, $j,  '¥' . $data[$key]['unit_price']);
                $worksheet->setCellValueByColumnAndRow(8, $j, $data[$key]['rate']);
                $worksheet->setCellValueByColumnAndRow(9, $j, $data[$key]['add_time_txt']);
                $worksheet->setCellValueByColumnAndRow(10, $j, $data[$key]['start_ammeter']);
                $worksheet->setCellValueByColumnAndRow(11, $j,$data[$key]['last_ammeter']);
                $worksheet->setCellValueByColumnAndRow(12, $j,$data[$key]['transaction_type_txt']);
                $worksheet->setCellValueByColumnAndRow(13, $j, $data[$key]['realname']);
                $worksheet->setCellValueByColumnAndRow(14, $j, $data[$key]['note']);
                $i++;
            }
            $row++;
        }
        $styleArrayBody = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
        ];
        $total_rows = $row + 1;
        //添加所有边框/居中
        $worksheet->getStyle('A1:O' . $total_rows)->applyFromArray($styleArrayBody);
        //下载
        (new BaseExportService())->phpSpreadsheet($file_name, $spreadsheet);
        return $this->downloadExportFile($file_name);
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
     * 导入抄表
     * @author lijie
     * @date_time 2021/10/22
     * @param $file
     * @param $charge_name
     * @param $village_id
     * @param $uid
     * @return array|string
     * @throws \think\Exception
     */
    public function upload($file,$village_id,$uid,$charge_name)
    {
        $savepath = $file;
        $filed = [
            'A' => 'single_name',
            'B' => 'floor_name',
            'C' => 'layer_name',
            'D' => 'room',
            'E' => 'unit_price',
            'F' => 'start_ammeter',
            'G' => 'last_ammeter',
            'H' => 'note',
        ];
        $data = $this->readFile($_SERVER['DOCUMENT_ROOT'] . $savepath, $filed, 'Xls');
        $data = array_values($data);
        $house_village = new HouseVillage();
        $village_single = new HouseVillageSingle();
        $village_floor = new HouseVillageFloor();
        $village_layer = new HouseVillageLayer();
        $vacancy = new HouseVillageUserVacancy();
        $res = '';
        if (!empty($data)) {
            $data_print = [];
            $is_no_data=1;
            foreach ($data as $value) {
                if (empty($value['single_name']) || empty($value['floor_name']) || empty($value['layer_name']) || empty($value['room']) || empty($value['last_ammeter'])) {
                    continue;
                }
                if($value['start_ammeter']){
                    if($value['last_ammeter'] <= $value['start_ammeter']){
                        $value['failReason'] = '止度需要大于起度';
                        $data_print[] = $value;
                        continue;
                    }
                }
                $village_info = $house_village->getInfo(['village_id'=>$village_id]);
                if (empty($village_info)) {
                    $value['failReason'] = '所属小区不存在，请正确填写参数';
                    $data_print[] = $value;
                    continue;
                }
                $single_info = $village_single->getOne(['single_name' => $value['single_name'], 'status' => 1, 'village_id' => $village_id]);
                if (empty($single_info)) {
                    $value['failReason'] = '所属楼栋不存在，请正确填写参数';
                    $data_print[] = $value;
                    continue;
                }
                $floor_info = $village_floor->getOne(['floor_name' => $value['floor_name'], 'status' => 1, 'single_id' => $single_info['id']]);
                if (empty($floor_info)) {
                    $value['failReason'] = '所属单元不存在，请正确填写参数';
                    $data_print[] = $value;
                    continue;
                }
                $layer_info = $village_layer->getOne(['layer_name' => $value['layer_name'], 'status' => 1, 'floor_id' => $floor_info['floor_id']]);
                if (empty($layer_info)) {
                    $value['failReason'] = '所属楼层不存在，请正确填写参数';
                    $data_print[] = $value;
                    continue;
                }
                $vacancy_info = $vacancy->getOne(['room' => $value['room'], 'status' => [1, 2, 3], 'layer_id' => $layer_info['id']]);
                if (empty($vacancy_info)) {
                    $value['failReason'] = '所属房间号不存在，请正确填写参数';
                    $data_print[] = $value;
                    continue;
                }
                $db_house_new_charge_project = new HouseNewChargeProject();
                $service_house_new_charge_rule = new HouseNewChargeRuleService();
                $db_house_new_charge_number = new HouseNewChargeNumber();
                $db_house_new_charge_rule = new HouseNewChargeRule();
                $project_info = $db_house_new_charge_project->getOne(['name'=>$charge_name,'village_id'=>$village_id,'status'=>1],'id,subject_id');
                if(empty($project_info)){
                    $value['failReason'] = '收费项目不存在';
                    $data_print[] = $value;
                    continue;
                }
//                $rule_id = $service_house_new_charge_rule->getValidChargeRule($project_info['id']);
                $rule_id = $service_house_new_charge_rule->getStandardBind($project_info['id'],$vacancy_info['pigcms_id']);
                if(!$rule_id){
//                    $value['failReason'] = '收费项目未绑定收费标准';
                    $value['failReason'] = '收费项目未绑定费用对象';
                    $data_print[] = $value;
                    continue;
                }
                $number_info = $db_house_new_charge_number->get_one(['id'=>$project_info['subject_id']],'charge_type');
                if(empty($number_info)){
                    $value['failReason'] = '收费项目对应的收费科目不存在';
                    $data_print[] = $value;
                    continue;
                }
                $rule_info = $db_house_new_charge_rule->getOne(['id'=>$rule_id],'unit_price,rate');
                if(empty($rule_info)){
                    $value['failReason'] = '收费标准不存在';
                    $data_print[] = $value;
                    continue;
                }
                if($value['start_ammeter']){
                    $start_ammeter = $value['start_ammeter'];
                }else{
                    $record_info = $this->getMeterRecordInfo(['project_id'=>$project_info['id'],'layer_num'=>$vacancy_info['pigcms_id']],'last_ammeter','id DESC');
                    if($record_info){
                        $start_ammeter = $record_info['last_ammeter'];
                    }else{
                        $start_ammeter = 0;
                    }
                    if($start_ammeter>0 && $value['last_ammeter'] <= $start_ammeter){
                        $value['failReason'] = '查到的已有起度是'.$start_ammeter.'，填写的止度需要大于起度'.$start_ammeter;
                        $data_print[] = $value;
                        continue;
                    }
                }
                $is_no_data=0;
                if($value['unit_price'])
                    $unit_price = $value['unit_price'];
                else
                    $unit_price = $rule_info['unit_price'];
                $res = $this->meterReadingAdd($uid,$village_id,$single_info['id'],$floor_info['floor_id'],$layer_info['id'],$vacancy_info['pigcms_id'],$start_ammeter,$value['last_ammeter'],$charge_name,$unit_price,$number_info['charge_type'],$rule_id,$project_info['id'],$rule_info['rate'],$value['note']);
                if(!$res){
                    $value['failReason'] = '导入失败';
                    $data_print[] = $value;
                    continue;
                }
            }
            if (!empty($data_print)) {
                $title = ['楼号', '单元名称', '层号', '房间号',  '单价', '起度', '止度', '备注', '失败原因'];
                $res = $this->exportExcel($title, $data_print, '批量导入抄表列表' . time());
                return ['error'=>false,'msg'=>'导入失败','data'=>$res['url']];
            }
            if($is_no_data==1){
                throw new \think\Exception("表格数据有误，请检查！");
            }
            return ['error'=>true,'msg'=>'导入成功','data'=>[]];
        }
         throw new \think\Exception("表格数据有误，请检查！");

    }

    /**
     * 读取文件
     * @author:zhubaodi
     * @date_time: 2021/5/21 13:21
     */
    public function readFile($file, $filed, $readerType)
    {
        $uploadfile = $file;
        $reader = IOFactory::createReader($readerType); //设置以Excel5格式(Excel97-2003工作簿)
        $PHPExcel = $reader->load($uploadfile); // 载入excel文件
        $sheet = $PHPExcel->getSheet(0); // 读取第一個工作表
        $highestRow = $sheet->getHighestDataRow(); // 取得总行数
        $highestColumm = $sheet->getHighestColumn(); // 取得总列数
        $data = [];
        for ($row = 2; $row <= $highestRow; $row++) //行号从1开始
        {
            for ($column = 'A'; $column <= $highestColumm; $column++) //列数是以A列开始
            {
                $data[$row][$filed[$column]] = $sheet->getCell($column . $row)->getValue();
            }
        }
        return $data;
    }

    /**
     * 抄表
     * @author lijie
     * @date_time 2021/10/22
     * @param int $uid
     * @param int $village_id
     * @param int $single_id
     * @param int $floor_id
     * @param int $layer_id
     * @param int $vacancy_id
     * @param int $start_ammeter
     * @param int $last_ammeter
     * @param string $charge_name
     * @param int $unit_price
     * @param string $charge_type
     * @param int $rule_id
     * @param int $project_id
     * @param int $rate
     * @param string $note
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function meterReadingAdd($uid=0,$village_id=0,$single_id=0,$floor_id=0,$layer_id=0,$vacancy_id=0,$start_ammeter=0,$last_ammeter=0,$charge_name='',$unit_price=0,$charge_type='',$rule_id=0,$project_id=0,$rate=1,$note='')
    {
        if(!$single_id || !$floor_id || !$layer_id || !$vacancy_id || !$last_ammeter || !$rate || empty($charge_name) || empty($charge_type)){
            return false;
        }
        if($last_ammeter < 0 || $start_ammeter < 0){
            return false;
        }
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$rule_id],'n.charge_type,r.*,p.type');
        $rule_digit=-1;
        if(isset($info['rule_digit']) && $info['rule_digit']>-1 && $info['rule_digit']<5){
            $rule_digit=$info['rule_digit'];
        }
        $digit_type=1;
        $service_house_village = new HouseVillageService();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);
        if(!empty($digit_info)){
            $digit_type=$digit_info['type']==2 ? 2:1;
            if($rule_digit<=-1 || $rule_digit>=5){
                $rule_digit=intval($digit_info['meter_digit']);
            }
        }
        $rule_digit=$rule_digit>-1 ? $rule_digit:2;
        /*
        $condition1 = [];
        $condition1[] = ['vacancy_id','=',$vacancy_id];
        $condition1[] = ['status','=',1];
        $condition1[] = ['type','in',[0,3,1,2]];
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $bind_list = $service_house_village_user_bind->getList($condition1,true);
        */

        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $whereArrTmp=array();
        $whereArrTmp[]=array('pigcms_id','=',$vacancy_id);
        $whereArrTmp[]=array('user_status','=',2);  // 2未入住
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
        $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'vacancy_id'=>$vacancy_id]);
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
        $insertData['village_id'] = $village_id;
        $insertData['single_id'] = $single_id;
        $insertData['floor_id'] = $floor_id;
        $insertData['layer_id'] = $layer_id;
        $insertData['layer_num'] = $vacancy_id;
        $insertData['charge_name'] = $charge_name;
        $insertData['unit_price'] = $unit_price;
        $insertData['start_ammeter'] = $start_ammeter;
        $insertData['last_ammeter'] = $last_ammeter;
        $insertData['rate'] = $rate;
        $insertData['note'] = $note;
        $insertData['cost_num'] = $last_ammeter-$start_ammeter;
        $cost_money = $insertData['cost_num']*$unit_price*$rate*($not_house_rate/100)*$custom_value;
        $cost_money=formatNumber($cost_money, $rule_digit, $digit_type);
        $cost_money=formatNumber($cost_money, 2, 1);
        $insertData['cost_money']=$cost_money;
        $insertData['add_time'] = time();
        $insertData['project_id'] = $project_id;
        $insertData['role_id'] = $uid?$uid:0;
        $service_house_new_meter = new HouseNewMeterService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_new_cashier = new HouseNewCashierService();
        try{
            $id = $service_house_new_meter->addMeterReading($insertData);
            if($id){
                $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$vacancy_id],['status','=',1],['type','in',[0,4]]],'uid,name,phone,pigcms_id,village_id');
                if($user_info){
                    $orderData['uid'] = $user_info['uid'];
                    $orderData['name'] = $user_info['name'];
                    $orderData['phone'] = $user_info['phone'];
                    $orderData['pigcms_id'] = $user_info['pigcms_id'];
                }
                $orderData['property_id'] = $village_info['property_id'];
                $orderData['village_id'] = $village_id;
                $orderData['order_type'] = $charge_type;
                $orderData['order_name'] = $charge_name;
                $orderData['room_id'] = $vacancy_id;
                $orderData['total_money'] = $insertData['cost_money'];
                $orderData['modify_money'] = $orderData['total_money'];
                $orderData['project_id'] = $project_id;
                $orderData['rule_id'] = $rule_id;
                $orderData['unit_price'] = $unit_price;
                $orderData['last_ammeter'] = $start_ammeter;
                $orderData['now_ammeter'] = $last_ammeter;
                $orderData['add_time'] = time();
                $orderData['meter_reading_id'] = $id;
                if($not_house_rate>0 && $not_house_rate<100){
                    $orderData['not_house_rate'] = $not_house_rate;
                }
                if(isset($custom_number)){
                    $orderData['number'] = $custom_number;
                }
                $res = $service_house_new_cashier->addOrder($orderData);
                if($res)
                    return true;
                return false;
            }else{
                return false;
            }
        }catch (\Exception $e){
            return false;
        }
    }

    /**
     * 导出文件
     * @author:zhubaodi
     * @date_time: 2021/5/21 14:44
     */
    public function exportExcel($title, $data, $fileName)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getDefaultColumnDimension()->setWidth(20);
        //  $sheet->getStyle('A')->getNumberFormat()->setFormatCode('@');
        //设置单元格内容
        $titCol = 'A';
        foreach ($title as $key => $value) {
            //单元格内容写入
            $sheet->setCellValue($titCol . '1', $value);
            $titCol++;
        }
        $row = 2;
        foreach ($data as $item) {
            $dataCol = 'A';
            foreach ($item as $value) {
                //单元格内容写入
                $sheet->setCellValue($dataCol . $row, $value);
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
        $sheet->getStyle('A1:O' . $total_rows)->applyFromArray($styleArrayBody);
        //下载
        $filename = $fileName . '.xlsx';
        (new BaseExportService())->phpSpreadsheet($filename, $spreadsheet);
        return $this->downloadExportFile($filename);
    }



    public function meterReadingModifyEdit($editData,$village_id=0){
        $last_ammeter=round($editData['last_ammeter'],2);
        $start_ammeter=round($editData['start_ammeter'],2);
        $whereArr = array('id' => $editData['id'], 'village_id' => $village_id);
        $data_start = $this->getOneMeterReading($whereArr,'id DESC',true);
        if(empty($data_start)){
            throw new \think\Exception("修改抄表止记录不存在！");
        }
        $db_meter_reading = new HouseVillageMeterReading();
        $db_meter_reading_mdylog = new HouseVillageMeterReadingMdylog();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $whereArrTmp=array();
        $vacancy_id=$data_start['layer_num'];
        $whereArrTmp[]=array('pigcms_id','=',$vacancy_id);
        $whereArrTmp[]=array('user_status','=',2);  // 2未入住
        $whereArrTmp[]=array('status','in',[1,2,3]);
        $whereArrTmp[]=array('is_del','=',0);
        $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
        $not_house_rate = 100;
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$editData['rule_id']],'n.charge_type,r.*,p.type');
        if($room_vacancy && !$room_vacancy->isEmpty()){
            $room_vacancy = $room_vacancy->toArray();
            if(!empty($room_vacancy)){
                $not_house_rate = $info['not_house_rate'];
            }
        }
        $rule_digit=-1;
        if(isset($info['rule_digit']) && $info['rule_digit']>-1 && $info['rule_digit']<5){
            $rule_digit=$info['rule_digit'];
        }
        $service_house_village = new HouseVillageService();
        $digit_type=1;
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);
        if(!empty($digit_info)){
            $digit_type=$digit_info['type']==2 ? 2:1;
            if($rule_digit<=-1 || $rule_digit>=5){
                $rule_digit=intval($digit_info['meter_digit']);
            }
        }
        $rule_digit=$rule_digit>-1 ? $rule_digit:2;
        $service_house_new_cashier = new HouseNewCashierService();
        $last_cost_money=0;
        $last_cost_num=$last_ammeter-$start_ammeter;
        $last_cost_num=round($last_cost_num,2);
        $whereArr=array('meter_reading_id'=>$data_start['id'],'village_id' => $village_id);
        $order_info_obj=$service_house_new_cashier->getInfo($whereArr,'*','order_id DESC');
        $order_info='';
        if($order_info_obj && !$order_info_obj->isEmpty()){
            $order_info=$order_info_obj->toArray();
        }else{
            throw new \think\Exception("未找到相关订单数据！");
        }
        $last_cost_money=$last_cost_num*$data_start['unit_price']*$data_start['rate']*($not_house_rate/100);
        $last_cost_money=formatNumber($last_cost_money, $rule_digit, $digit_type);
        $last_cost_money=formatNumber($last_cost_money, 2, 1);

        $last_change_money=$last_cost_money-$data_start['cost_money'];
        $front_last_ammeter=$data_start['last_ammeter']; //上一次支付的止度
        $order_extra_data=array();
        if($order_info['extra_data']){
            $order_extra_data=json_decode($order_info['extra_data'],1);
            if(isset($order_extra_data['front_last_ammeter'])){
                $front_last_ammeter=$order_extra_data['front_last_ammeter'];
            }
        }
        $new_cost_num=$last_ammeter-$front_last_ammeter;
        $new_cost_money=$new_cost_num*$data_start['unit_price']*$data_start['rate']*($not_house_rate/100);
        $new_cost_money=formatNumber($new_cost_money, $rule_digit, $digit_type);
        $new_cost_money=formatNumber($new_cost_money, 2, 1);

        $updateOneData=array('last_ammeter'=>$last_ammeter,'cost_money'=>$last_cost_money,'cost_num'=>$last_cost_num);
        $updateOneData['note']=$editData['note'];
        $returnData=array();
        if($order_info['is_paid']!=1 && $order_info['pay_time']<100){
            //之前的订单未支付
            $saveData=array('total_money'=>$new_cost_money,'modify_money'=>$new_cost_money,'update_time'=>time());
            $saveData['role_id']=$editData['uid'];
            $saveData['last_ammeter']=$front_last_ammeter;
            $saveData['now_ammeter'] = $last_ammeter;
            $old_cost_money=0;   //上次生成账单时 抄表的钱
            $is_again_modify=0;
            if($order_extra_data && isset($order_extra_data['now_last_ammeter'])){
                    $old_cost_money=$order_extra_data['old_cost_money'];
                    $is_again_modify=1;
            }
            if($is_again_modify==1){
                $saveData['total_money']=$new_cost_money;
                $saveData['total_money']=formatNumber($saveData['total_money'], 2, 1);
                $saveData['modify_money']=$saveData['total_money'];
                if(($last_ammeter<=$front_last_ammeter) || $saveData['total_money']<=0){
                    //作废掉
                    $saveData['is_discard']=2;
                    $saveData['discard_reason']='抄表改动止度小于一开始止度';
                    $service_house_new_cashier->saveOrder(['order_id'=>$order_info['order_id']], $saveData);
                    $saveData['order_id']=$order_info['order_id'];
                    $saveData['front_last_ammeter']=$front_last_ammeter;
                }else{
                    $saveData['is_discard']=1;
                    $saveData['discard_reason']='';
                    $service_house_new_cashier->saveOrder(['order_id'=>$order_info['order_id']], $saveData);
                    $saveData['order_id']=$order_info['order_id'];
                    $saveData['front_last_ammeter']=$front_last_ammeter;
                }
            }else{
                $saveData['last_ammeter']=$start_ammeter;
                $saveData['now_ammeter'] = $last_ammeter;
                $saveData['total_money']=$last_cost_money;
                $saveData['modify_money']=$last_cost_money;
                $saveData['is_discard']=1;
                $saveData['discard_reason']='';
                $service_house_new_cashier->saveOrder(['order_id'=>$order_info['order_id']], $saveData);
                $saveData['order_id']=$order_info['order_id'];
            }

            $returnData= $saveData;
            $returnData['is_again_modify']=$is_again_modify;
        }elseif($order_info['is_paid']==1 && $order_info['pay_time']>100){
            //之前的订单已经支付 记录一下信息
            $mdy_extra_data=array('order_paid_mdy'=>array());
            //改过多次
            if(isset($data_start['extra_data']) && !empty($data_start['extra_data'])){
                $mdy_extra_data=json_decode($data_start['extra_data'],1);
            }
            $old_cost_money=$data_start['cost_money'];
            $old_last_ammeter=$data_start['last_ammeter'];
            $front_last_ammeter=$order_info['now_ammeter']; //上次支付的止度
            if(empty($mdy_extra_data['order_paid_mdy'])){
                $mdy_extra_data['order_paid_mdy']['old_start_ammeter']=$data_start['start_ammeter'];
                $mdy_extra_data['order_paid_mdy']['old_last_ammeter']=$data_start['last_ammeter'];
                $mdy_extra_data['order_paid_mdy']['old_cost_money']=$data_start['cost_money'];
                $mdy_extra_data['order_paid_mdy']['front_last_ammeter']=$front_last_ammeter;
            }else{
                $old_cost_money= $mdy_extra_data['order_paid_mdy']['old_cost_money'];
                $old_last_ammeter= $mdy_extra_data['order_paid_mdy']['old_last_ammeter'];
            }

            $new_cost_num=$last_ammeter-$front_last_ammeter;
            $new_cost_money=$new_cost_num*$data_start['unit_price']*$data_start['rate']*($not_house_rate/100);
            $new_cost_money=formatNumber($new_cost_money, $rule_digit, $digit_type);
            $new_cost_money=formatNumber($new_cost_money, 2, 1);

            $mdy_extra_data['order_paid_mdy']['new_order_id']=0;
            $mdy_extra_data['order_paid_mdy']['old_order_id']=$order_info['order_id'];
            $mdy_extra_data['order_paid_mdy']['now_start_ammeter']=$front_last_ammeter;
            $mdy_extra_data['order_paid_mdy']['now_last_ammeter']=$last_ammeter;
            $mdy_extra_data['order_paid_mdy']['front_last_ammeter']=$front_last_ammeter;
            $mdy_extra_data['order_paid_mdy']['last_cost_money']=$last_cost_money;
            $mdy_extra_data['order_paid_mdy']['last_cost_num']=$last_cost_num;
            $mdy_extra_data['order_paid_mdy']['last_change_money']=$last_change_money;

            $mdy_extra_data['order_paid_mdy']['change_ammeter']=$new_cost_num;
            $mdy_extra_data['order_paid_mdy']['change_money']=$new_cost_money;

            $updateOneData['extra_data']=json_encode($mdy_extra_data,JSON_UNESCAPED_UNICODE);
        }
        $data_end=$data_start;
        $data_end['start_ammeter']=$start_ammeter;
        $data_end['last_ammeter']=$last_ammeter;
        $data_end['cost_money']=$last_cost_money;
        $data_end['cost_num']=$last_cost_num;
        $data_end['note']=$editData['note'];
        $data_end['front_last_ammeter']=$front_last_ammeter;
        $db_meter_reading->updateOneData(array('id' => $editData['id'], 'village_id' => $village_id),$updateOneData);
        $mdylogArr=array();
        $mdylogArr['village_id']=$village_id;
        $mdylogArr['meter_reading_id']=$editData['id'];
        $mdylogArr['order_id']=$order_info['order_id'];
        $old_ammeter=array('start_ammeter'=>$data_start['start_ammeter'],'last_ammeter'=>$data_start['last_ammeter']);
        $mdylogArr['old_ammeter']=json_encode($old_ammeter,JSON_UNESCAPED_UNICODE);
        $now_ammeter=array('start_ammeter'=>$start_ammeter,'last_ammeter'=>$last_ammeter,'front_last_ammeter'=>$front_last_ammeter);
        $mdylogArr['now_ammeter']=json_encode($now_ammeter,JSON_UNESCAPED_UNICODE);
        $change_ammeter=$last_ammeter-$front_last_ammeter;
        $mdylogArr['change_ammeter']=$change_ammeter;
        $mdylogArr['change_money']=$new_cost_money;
        $mdylogArr['charge_name']=$data_start['charge_name'];
        $mdylogArr['role_id']=$editData['uid'];
        $mdylogArr['login_role']=$editData['login_role'];
        $mdylogArr['note']=$editData['note'];
        $role_name='';
        if (isset($editData['adminUser']['user_name']) && !empty($editData['adminUser']['user_name'])) {
            $role_name = $editData['adminUser']['user_name'];
        }
        $mdylogArr['role_name']=$role_name;
        $extra_data=array('old_meter_reading'=>$data_start,'mdy_meter_reading'=>$data_end);
        $mdylogArr['extra_data']=json_encode($extra_data,JSON_UNESCAPED_UNICODE);
        $mdylogArr['add_time']=time();
        $db_meter_reading_mdylog->addOne($mdylogArr);
        return $returnData;
    }
    //获取修改日志
    public function getMeterReadingMdylog($meter_reading_id=0,$village_id=0){
        if($meter_reading_id<1){
            return array('list'=>array());
        }
        $db_meter_reading_mdylog = new HouseVillageMeterReadingMdylog();
        $whereArr=array('meter_reading_id'=>$meter_reading_id,'village_id'=>$village_id);
        $mdylog=$db_meter_reading_mdylog->getLists($whereArr,'*');
        $mdyloglist=array();
        if(!empty($mdylog)){
            foreach ($mdylog as $vlog){
                $item=array('role_name'=>$vlog['role_name']);
                $item['add_time_str']=date('Y-m-d H:i:s',$vlog['add_time']);
                $old_ammeter=json_decode($vlog['old_ammeter'],1);
                $item['old_ammeter_str']=$old_ammeter['start_ammeter'].' —— '.$old_ammeter['last_ammeter'];
                $now_ammeter=json_decode($vlog['now_ammeter'],1);
                $item['now_ammeter_str']=sprintf('%.2f',$now_ammeter['start_ammeter']).' —— '.sprintf('%.2f',$now_ammeter['last_ammeter']);
                $item['note']=$vlog['note'];
                $mdyloglist[]=$item;
            }
        }
        if(!empty($mdyloglist)){
            return array('list'=>$mdyloglist);
        }else{
            return array('list'=>array());
        }
    }

    public function addMdyMeterReadingOrder($id=0,$village_id=0,$role_id=0,$system_remarks=array()){
        $whereArr = array('id' => $id, 'village_id' => $village_id);
        $data_start = $this->getOneMeterReading($whereArr,'id DESC');
        if(empty($data_start)){
            throw new \think\Exception("修改抄表止记录不存在！");
        }
        $extra_data=json_decode($data_start['extra_data'],1);
        if(empty($extra_data) || !isset($extra_data['order_paid_mdy']) || $extra_data['order_paid_mdy']['change_money']<=0) {
            throw new \think\Exception("没有生成账单所需数据！");
        }
        $cost_money=round($extra_data['order_paid_mdy']['change_money'],2);
        $vacancy_id=$data_start['layer_num'];
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$vacancy_id],['status','=',1],['type','in',[0,3]]],'uid,name,phone,pigcms_id,village_id');
        $orderData=array();
        if($user_info){
            $orderData['uid'] = $user_info['uid'];
            $orderData['name'] = $user_info['name'];
            $orderData['phone'] = $user_info['phone'];
            $orderData['pigcms_id'] = $user_info['pigcms_id'];
        }
        $service_house_new_cashier = new HouseNewCashierService();
        $service_house_village = new HouseVillageService();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $orderData['meter_reading_id'] = $id;
        $orderData['property_id'] = $village_info['property_id'];
        $orderData['village_id'] = $village_id;
        $orderData['order_type'] = $data_start['charge_type'];
        $orderData['order_name'] = $data_start['rule_name'];;
        $orderData['room_id'] = $vacancy_id;
        $orderData['total_money'] = $cost_money;
        $orderData['modify_money'] = $orderData['total_money'];
        $orderData['project_id'] = $data_start['project_id'];
        $orderData['rule_id'] = isset($data_start['rule_id']) ? $data_start['rule_id']:0;
        $orderData['unit_price'] = $data_start['unit_price'];
        $orderData['last_ammeter'] = $extra_data['order_paid_mdy']['front_last_ammeter'];
        $orderData['now_ammeter'] = $extra_data['order_paid_mdy']['now_last_ammeter'];
        $orderData['add_time'] = time();
        $orderData['number']=1;
        $orderData['role_id']=$role_id;
        $orderData['remark']='止度修改增加收费';
        $orderData['extra_data']=json_encode($extra_data['order_paid_mdy'],JSON_UNESCAPED_UNICODE);
        
        $whereArrTmp=[['project_id','=',$data_start['project_id']],['village_id','=',$village_id],['layer_num','=',$vacancy_id]];
        $whereArrTmp[]=['id','<',$id];
        $meter_reading=$this->getMeterRecordInfo($whereArrTmp,'*','id DESC');
        $service_start_time=time();
        if($meter_reading && !$meter_reading->isEmpty()){
            $service_start_time=$meter_reading['add_time'];
        }
        $orderData['service_start_time']=$service_start_time;
        $service_end_time=time();
        $orderData['service_end_time']=$service_end_time;
        
        $res = $service_house_new_cashier->addOrder($orderData);
        if($res){
            $extra_data['order_paid_mdy']['new_order_id']=$res;
            $whereArr = array('id' => $id, 'village_id' => $village_id);
            $db_meter_reading = new HouseVillageMeterReading();
            $updateOneData=array('extra_data'=>json_encode($extra_data,JSON_UNESCAPED_UNICODE));
            $db_meter_reading->updateOneData($whereArr,$updateOneData);

            $charge_all=['water' => '水费', 'electric' => '电费', 'gas' => '燃气费'];
            if(isset($charge_all[$data_start['charge_type']]) && !empty($charge_all[$data_start['charge_type']])){
                $user_remarks = '后台'.$charge_all[$data_start['charge_type']].'缴费操作';
                (new StorageService())->userBalanceChange($user_info['pigcms_id'],2,$cost_money,$system_remarks['remarks'],$user_remarks,$res);
            }
            return $res;
        }else{
            throw new \think\Exception("账单生成失败了！");
        }


    }

    /**
     * 录入费用
     * @author:zhubaodi
     * @date_time: 2022/8/2 11:37
     */
    public function meterReadingPriceAdd($data)
    {
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_village = new HouseVillageService();
        $service_house_new_cashier = new HouseNewCashierService();
        $res = $this->getIsBind(['project_id' => $data['project_id'], 'vacancy_id' => $data['vacancy_id'], 'is_del' => 1]);
        if (empty($res)) {
            throw new \think\Exception("当前房间没有绑定该收费项目！");;
        }
        $info = $service_house_new_charge_rule->getCallInfo(['r.id' => $data['rule_id']], 'n.charge_type,r.*,p.type');
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $whereArrTmp = array();
        $whereArrTmp[] = array('pigcms_id', '=', $data['vacancy_id']);
        $whereArrTmp[] = array('user_status', '=', 2);  // 2未入住
        $whereArrTmp[] = array('status', 'in', [1, 2, 3]);
        $whereArrTmp[] = array('is_del', '=', 0);
        $room_vacancy = $service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
        $not_house_rate = 100;
        if ($room_vacancy && !$room_vacancy->isEmpty()) {
            $room_vacancy = $room_vacancy->toArray();
            if (!empty($room_vacancy)) {
                $not_house_rate = $info['not_house_rate'];
            }
        }
        $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id' => $info['charge_project_id'], 'rule_id' => $info['id'], 'vacancy_id' => $data['vacancy_id']]);
        if (isset($projectBindInfo) && !empty($projectBindInfo)) {
            if ($projectBindInfo['custom_value']) {
                $custom_value = $projectBindInfo['custom_value'];
                $custom_number = $custom_value;
            } else {
                $custom_value = 1;
            }
        } else {
            $custom_value = 1;
        }

        $rule_digit = -1;
        if (isset($info['rule_digit']) && $info['rule_digit'] > -1 && $info['rule_digit'] < 5) {
            $rule_digit = $info['rule_digit'];
        }
        $digit_type = 1;
        $village_info = $service_house_village->getHouseVillageInfo(['village_id' => $data['village_id']], 'property_id');
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info = $db_house_property_digit_service->get_one_digit(['property_id' => $village_info['property_id']]);
        if (!empty($digit_info)) {
            $digit_type = $digit_info['type'] == 2 ? 2 : 1;
            if ($rule_digit <= -1 || $rule_digit >= 5) {
                $rule_digit = intval($digit_info['meter_digit']);
            }
        }
        $rule_digit = $rule_digit > -1 ? $rule_digit : 2;

        $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id', '=', $data['vacancy_id']], ['status', '=', 1], ['type', 'in', [0, 3]]], 'uid,name,phone,pigcms_id,village_id');

        $system_remarks = (new StorageService())->getRoleData($data['uid'], $data['login_role'], $data['adminUser']);

        $insertData['village_id'] = $data['village_id'];
        $insertData['single_id'] = $data['single_id'];
        $insertData['floor_id'] = $data['floor_id'];
        $insertData['layer_id'] = $data['layer_id'];
        $insertData['layer_num'] = $data['vacancy_id'];
        $insertData['charge_name'] = $data['charge_name'];
        $insertData['unit_price'] = $data['unit_price'];
        $insertData['rate'] = $data['rate'];
        $insertData['note'] = $data['note'];
        $cost_money = $data['total'];
        $cost_money = formatNumber($cost_money, $rule_digit, $digit_type);
        $cost_money = formatNumber($cost_money, 2, 1);
        $insertData['cost_money'] = $cost_money;
        $insertData['add_time'] = time();
        $insertData['project_id'] = $data['project_id'];
        $insertData['role_id'] = $data['uid'] ? $data['uid'] : 0;
        $insertData['transaction_type'] = 1;

        //todo 同步写入关联数据
        $insertData['user_name'] = $user_info['name'];
        $insertData['user_bind_id'] = $user_info['pigcms_id'];
        $insertData['user_bind_phone'] = $user_info['phone'];
        $insertData['work_name'] = $system_remarks['account'];

        if (!empty($data['opt_meter_time'])) {
            $opt_meter_time = strtotime($data['opt_meter_time']);
            if ($opt_meter_time > 0) {
                $insertData['opt_meter_time'] = $opt_meter_time;
            } else {
                $insertData['opt_meter_time'] = time();
            }
        }

        $id = $this->addMeterReading($insertData);
        if ($id) {
            if ($user_info) {
                $orderData['uid'] = $user_info['uid'];
                $orderData['name'] = $user_info['name'];
                $orderData['phone'] = $user_info['phone'];
                $orderData['pigcms_id'] = $user_info['pigcms_id'];
            }
            $orderData['meter_reading_id'] = $id;
            $orderData['property_id'] = $village_info['property_id'];
            $orderData['village_id'] = $data['village_id'];
            $orderData['order_type'] = $data['charge_type'];
            $orderData['order_name'] = $data['charge_name'];
            $orderData['room_id'] = $data['vacancy_id'];
            $orderData['total_money'] = $insertData['cost_money'];
            $orderData['modify_money'] = $orderData['total_money'];
            $orderData['pay_money'] = $orderData['total_money'];
            $orderData['project_id'] = $data['project_id'];
            $orderData['rule_id'] = $data['rule_id'];
            $orderData['is_paid']=1;
            $orderData['pay_time']=time();
            $orderData['pay_type']=2;
            $orderData['offline_pay_type']=$data['offline_pay_type'];
            $orderData['unit_price'] = $data['unit_price'];
            $orderData['add_time'] = time();
            if ($not_house_rate > 0 && $not_house_rate < 100) {
                $orderData['not_house_rate'] = $not_house_rate;
            }
            if (isset($custom_number)) {
                $orderData['number'] = $custom_number;
            }
            $res = $service_house_new_cashier->addOrder($orderData);
            if ($res>0){
                $uid=isset($user_info['uid'])?$user_info['uid']:0;
                $db_houseNewPayOrderSummary=  new HouseNewPayOrderSummary();
                $db_plat_order=new PlatOrder();
                $order_summary=[
                    'uid'=>isset($user_info['uid'])?$user_info['uid']:0,
                    'pay_uid'=>isset($user_info['uid'])?$user_info['uid']:0,
                    'property_id'=>$orderData['property_id'],
                    'pigcms_id'=>isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0,
                    'pay_bind_id'=>isset($user_info['pigcms_id'])?$user_info['pigcms_id']:0,
                    'room_id'=>$data['vacancy_id'],
                    'village_id'=>$data['village_id'],
                    'total_money'=>$insertData['cost_money'],
                    'pay_money'=>$insertData['cost_money'],
                    'is_paid'=>1,
                    'pay_time'=>$orderData['pay_time'],
                    'is_online'=>1,
                    'pay_type'=>$orderData['pay_type'],
                    'offline_pay_type'=>$data['offline_pay_type'],
                    'order_no'=>build_real_orderid($uid),
                ];
                $summary_id=$db_houseNewPayOrderSummary->addOne($order_summary);
                if($summary_id) {
                    $plat_order = [
                        'orderid' => '',
                        'business_type' => 'village_new_pay',
                        'business_id' => $summary_id,
                        'order_name' => $orderData['order_name'],
                        'uid' => $uid,
                        'total_money' => $insertData['cost_money'],
                        'pay_money' => $insertData['cost_money'],
                        'pay_time' => $orderData['pay_time'],
                        'pay_type' => '',
                        'paid' => 1
                    ];
                    $plat_order_id = $db_plat_order->add_order($plat_order);
                    $PayOrder['summary_id'] = $summary_id;
                    $where = [];
                    $where[] = ['order_id', '=', $res];
                    $rr = $service_house_new_cashier->saveOrder($where, $PayOrder);
                }
            }
        }
        return $id;
    }

    /**
     * 统计抄表记录中的用量和金额
     * @author: liukezhu
     * @date : 2022/10/25
     * @param $where
     * @return array
     */
    public function meterReadingStatistics($where){
        $db_house_village_meter_reading = new HouseVillageMeterReading();
        $degrees = $db_house_village_meter_reading->getDegreesSum($where,'sum(m.last_ammeter - m.start_ammeter) as num');
        $money =$db_house_village_meter_reading->getSum($where,'m.cost_money');
        return [
            'cost_degrees'=>($degrees['num'] ? $degrees['num'] : 0),
            'cost_money'=>formatNumber($money, 2, 1)
        ];
    }


    /**
     * 抄表管理 触发提醒通知负责人
     * @author: liukezhu
     * @date : 2022/10/24
     * @return bool
     */
    public function meterDirectorTriggerNotice(){
        $day=intval(date('d'));
        $notice_time=date('H:i');
        $where=[
            ['status', '=', 1],
            ['', 'exp', Db::raw("find_in_set( '".$day."', notice_time ) AND find_in_set( '".$notice_time."', notice_time )")]
        ];
        $list = (new HouseNewMeterDirector())->getMeterDirectorList($where,'id,village_id,project_id,worker_id,name,phone,notice_time');
        $this->meterDirectorNoticeFdump(['触发提醒--'.__LINE__,$day,$notice_time,$where,(!$list || $list->isEmpty())],'meterDirector/trigger',1);
        if (!$list || $list->isEmpty()) {
            return true;
        }
        $list=$list->toArray();
        foreach ($list as $v){
            $queueData=[
                'id'=>$v['id'],
                'village_id'=>$v['village_id']
            ];
            $this->meterDirectorNoticeQueuePushToJob($queueData);
        }
        return true;
    }

    /**
     *抄表管理 发送提醒通知负责人
     * @author: liukezhu
     * @date : 2022/10/24
     * @param $id
     * @return bool
     */
    public function meterDirectorSendNotice($id){
        $where=[
            ['d.id', '=', $id],
            ['d.status', '=', 1],
            ['w.status', '=', 1],
            ['w.is_del', '=', 0],
            ['w.openid','<>','']
        ];
        $meter_info = (new HouseNewMeterDirector())->getMeterDirectorWork($where,'w.wid,w.village_id,w.name,w.phone,w.openid,w.property_id');
        $this->meterDirectorNoticeFdump(['接收参数--'.__LINE__,$id,$where,(!$meter_info || $meter_info->isEmpty())],'meterDirector/notice',1);
        if (!$meter_info || $meter_info->isEmpty()) {
            return true;
        }
        $ticket = Token::createToken($meter_info['wid'],6);
        $meter_info=$meter_info->toArray();
        $property_id=$meter_info['property_id'];
        $href=cfg('site_url').'/packapp/community/pages/Community/mobileMeterReading/selectRoomy'.'?village_id='.$meter_info['village_id'].'&ticket='.$ticket;
        $data=[
            'href' =>$href,
            'wecha_id' => $meter_info['openid'],
            'first' => '您有一项工作需处理',
            'keyword1' => '抄表管理的工作',
            'keyword2' => '已发送',
            'keyword3' => date('H时i分', $_SERVER['REQUEST_TIME']),
            'remark' => '请点击查看详细信息！'
        ];
        $this->meterDirectorNoticeFdump(['组装参数--'.__LINE__,$data,$meter_info],'meterDirector/notice',1);
        (new TemplateNewsService())->sendTempMsg('OPENTM400166399', $data,0,$property_id,($property_id ? 1 : 0));
        return true;
    }

}