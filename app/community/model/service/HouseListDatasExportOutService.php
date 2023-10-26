<?php
/**
 * Created by PhpStorm.
 * 交易汇总
 * User: wanzy
 * DateTime: 2021/11/16 14:56
 */

namespace app\community\model\service;

use app\common\model\service\export\ExportService as BaseExportService;
use app\community\model\db\ExportLog;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use app\community\model\service\HouseNewTransactionSummaryService;
use app\traits\HouseListDatasExportOutTraits;
use app\community\model\service\HousePaidOrderRecordService;
use think\Exception;

class HouseListDatasExportOutService
{
    use HouseListDatasExportOutTraits;

    public function startExecExportOut($data = array())
    {
        $root=dirname(dirname(dirname(__DIR__)));
        $root=dirname(dirname($root));
        $basePath =  rtrim($root,'/');
        $_SERVER['DOCUMENT_ROOT']=$basePath;
        fdump_api(['data' => $data], '000startExecExportOut', 1);
        $export_type = '';  //导出类型
        $export_id = 0;
        if (empty($data) || !isset($data['export_type'])) {
            return true;
        }
        $export_type = $data['export_type'];
        if (isset($data['export_id'])) {
            $export_id = $data['export_id'];
        }
        if ($export_id < 1) {
            return true;
        }
        $exportLogDb = new ExportLog();
        $whereArr = array('export_id' => $export_id);
        $exportLog = $exportLogDb->getOneData($whereArr);
        if ($exportLog && !$exportLog->isEmpty()) {
            $exportLog = $exportLog->toArray();
            if ($exportLog['status'] == 1 && !empty($exportLog['file_name'])) {
                return true;
            }
            $param = $exportLog['param'] ? json_decode($exportLog['param'], 1) : array();
            $param = $param && is_array($param) ? $param : array();
            $param = array_merge($data, $param);
            switch ($export_type){
                case 'house_financial_statement':
                    $xtype='';
                    $pay_status='';
                    if(isset($param['xtype'])){
                        $xtype=trim($param['xtype']);
                    }
                    if(isset($param['pay_status'])){
                        $pay_status=trim($param['pay_status']);
                    }
                    if(!in_array($pay_status,['no_pay','is_pay'])){
                        $pay_status='no_pay';
                    }
                    $village_id=0;
                    if(isset($param['village_id'])){
                        $village_id=trim($param['village_id']);
                    }
                    if($village_id>0 && ($xtype=='daily' || $xtype=='monthly')){
                        $whereArr=array();
                        $whereArr[]=array('village_id','=',$village_id);
                        $whereArr[] = array('order_type','<>','non_motor_vehicle');
                        if($pay_status=='no_pay'){
                            $whereArr[]=array('is_paid','=',2);
                            $whereArr[]=array('is_discard','=',1);
                        }else if($pay_status=='is_pay'){
                            $whereArr[]=array('is_paid','=',1);
                            $whereArr[] = array('is_discard','=',1);
                        }
                        if(isset($param['charge_project_id']) && $param['charge_project_id']>0){
                            $whereArr[]=array('project_id','=',$param['charge_project_id']);
                        }
                        if(isset($param['rule_id']) && $param['rule_id']>0){
                            $whereArr[]=array('rule_id','=',$param['rule_id']);
                        }
                        $date='';
                        if(isset($param['date']) && $param['date']){
                            $date=$param['date'];
                        }
                        if($xtype=='daily' && !empty($date)){
                            if(isset($param['order_service_type']) && $param['order_service_type']==0){
                                if($pay_status=='no_pay'){
                                    //按账单生成时间
                                    if (!empty($date[0])) {
                                        $whereArr[] = ['add_time', '>=', strtotime($date[0] . ' 00:00:00')];
                                    }
                                    if (!empty($date[1])) {
                                        $whereArr[] = ['add_time', '<=', strtotime($date[1] . ' 23:59:59')];
                                    }
                                }else{
                                    //按账单支付时间
                                    if (!empty($date[0])) {
                                        $whereArr[] = ['pay_time', '>=', strtotime($date[0] . ' 00:00:00')];
                                    }
                                    if (!empty($date[1])) {
                                        $whereArr[] = ['pay_time', '<=', strtotime($date[1] . ' 23:59:59')];
                                    }
                                }
                            }else if(isset($param['order_service_type']) && $param['order_service_type']==1){
                                //按开始时间
                                if (!empty($date[0])) {
                                    $whereArr[] = ['service_start_time', '>=', strtotime($date[0] . ' 00:00:00')];
                                }
                                if (!empty($date[1])) {
                                    $whereArr[] = ['service_start_time', '<=', strtotime($date[1] . ' 23:59:59')];
                                }
                            }elseif(isset($param['order_service_type']) && $param['order_service_type']==2){
                                //按结束时间
                                if (!empty($date[0])) {
                                    $whereArr[] = ['service_end_time', '>=', strtotime($date[0] . ' 00:00:00')];
                                }
                                if (!empty($date[1])) {
                                    $whereArr[] = ['service_end_time', '<=', strtotime($date[1] . ' 23:59:59')];
                                }
                            }
                        }else  if($xtype=='monthly' && !empty($date)){
                            $date=trim($date);
                            $tmp_time=strtotime($date . '-10 10:00:00');
                            $last_day=date('t',$tmp_time);
                            if(isset($param['order_service_type']) && $param['order_service_type']==0){
                                if($pay_status=='no_pay'){
                                    //按账单生成时间
                                    $whereArr[] = ['add_time', '>=', strtotime($date . '-01 00:00:00')];
                                    $whereArr[] = ['add_time', '<=', strtotime($date . '-'.$last_day.' 23:59:59')];
                                }else{
                                    //按账单支付时间
                                    $whereArr[] = ['pay_time', '>=', strtotime($date . '-01 00:00:00')];
                                    $whereArr[] = ['pay_time', '<=', strtotime($date . '-'.$last_day.' 23:59:59')];
                                }
                            }else if(isset($param['order_service_type']) && $param['order_service_type']==1){
                                //按开始时间
                                $whereArr[] = ['service_start_time', '>=', strtotime($date . '-01 00:00:00')];
                                $whereArr[] = ['service_start_time', '<=', strtotime($date . '-'.$last_day.' 23:59:59')];

                            }elseif(isset($param['order_service_type']) && $param['order_service_type']==2){
                                //按结束时间
                                $whereArr[] = ['service_end_time', '>=', strtotime($date . '-01 00:00:00')];
                                $whereArr[] = ['service_end_time', '<=', strtotime($date . '-'.$last_day.' 23:59:59')];
                            }
                        }
                        $houseNewTransactionSummaryService = new HouseNewTransactionSummaryService();
                        $exportArr = $houseNewTransactionSummaryService->getSummaryByRoomAndRuleList($village_id,$whereArr,$pay_status, 0, 0,true);
                        $filename = date("YmdHis") . '-' .rand(1000000,9999999).'.xlsx' ;
                        $tips='';
                        if($pay_status=='no_pay'){
                            $tips='应收账单';
                        }elseif ($pay_status=='is_pay'){
                            $tips='已缴账单';
                        }
                        if($xtype=='daily'){
                            $tips.='日报表';
                        }else if($xtype=='monthly'){
                            $tips.='月报表';
                        }
                        $this->saveExcel($exportArr['export_title'], $exportArr, $filename, $tips,'orderByRule');
                        $whereArr = array('export_id' => $export_id);
                        $saveArr=array('status'=>1,'file_name'=>$filename);
                        $exportLogDb->saveOneData($whereArr,$saveArr);
                    }elseif ($village_id>0 && $xtype=='yearly'){
                        $whereArr=array();
                        $whereArr[]=array('village_id','=',$village_id);
                        $whereArr[] = array('order_type','<>','non_motor_vehicle');
                        if($pay_status=='no_pay'){
                            $whereArr[]=array('is_paid','=',2);
                            $whereArr[]=array('is_discard','=',1);
                        }else if($pay_status=='is_pay'){
                            $whereArr[]=array('is_paid','=',1);
                            $whereArr[] = array('is_discard','=',1);
                        }
                        if(isset($param['charge_project_id']) && $param['charge_project_id']>0){
                            $whereArr[]=array('project_id','=',$param['charge_project_id']);
                        }
                        if(isset($param['rule_id']) && $param['rule_id']>0){
                            $whereArr[]=array('rule_id','=',$param['rule_id']);
                        }
                        $year_v=0;
                        if(isset($param['year_v']) && $param['year_v']>0){
                            $year_v=$param['year_v'];
                        }
                        $order_service_type=0;
                        if(isset($param['order_service_type'])){
                            $order_service_type=$param['order_service_type'] ? intval($param['order_service_type']):0;
                        }
                        $year_v=$year_v>1971 ? $year_v:date('Y');
                        $extraArr=array('year_v'=>$year_v,'order_service_type'=>$order_service_type);
                        $houseNewTransactionSummaryService = new HouseNewTransactionSummaryService();
                        $exportArr = $houseNewTransactionSummaryService->getSummaryByYearAndRuleList($village_id,$whereArr,$pay_status,$extraArr, 0, 0,true);
                        $filename = date("YmdHis") . '-' .rand(1000000,9999999).'.xlsx' ;
                        $tips='';
                        if($pay_status=='no_pay'){
                            $tips='应收账单年报表';
                        }elseif ($pay_status=='is_pay'){
                            $tips='已缴账单年报表';
                        }
                        $this->saveExcel($exportArr['export_title'], $exportArr, $filename, $tips,'orderByYear');
                        $whereArr = array('export_id' => $export_id);
                        $saveArr=array('status'=>1,'file_name'=>$filename);
                        $exportLogDb->saveOneData($whereArr,$saveArr);
                    }
                    break;
                case 'house_paid_order_record':
                    $village_id=0;
                    if(isset($param['village_id'])){
                        $village_id=trim($param['village_id']);
                    }
                    $order_type=1;
                    $order_no='';
                    if(isset($param['order_type'])){
                        $order_type=intval($param['order_type']);
                    }
                    if(isset($param['order_no'])){
                        $order_no=trim($param['order_no']);
                    }
                    $order_status=0;
                    if(isset($param['order_status'])){
                        $order_status=intval($param['order_status']);
                    }
                    $whereArr=array();
                    $whereArr[]=array('village_id','=',$village_id);
                    $whereArr[] = array('source_from','=','1');
                    if($order_type==1 && !empty($order_no)){
                        $whereArr[]=array('order_no','=',$order_no);
                    }else if($order_type==2){
                        $whereArr[]=array('pay_order_no','=',$order_no);
                    }else if($order_type==3){
                        $whereArr[]=array('third_transaction_no','=',$order_no);
                    }
                    if($order_status==1){
                        $whereArr[]=array('refund_status','=',0);
                    }elseif ($order_status==2){
                        $whereArr[]=array('refund_status','=',1);
                    }elseif ($order_status==3){
                        $whereArr[]=array('refund_status','=',2);
                    }
                    if(isset($param['business_type']) && !empty($param['business_type'])){
                        $whereArr[]=array('house_type','like','%'.$param['business_type'].'%');
                        //$whereArr[] = array('house_type','find in set',$param['business_type']);
                    }
                    $date='';
                    if(isset($param['date'])){
                        $date=$param['date'];
                    }
                    if(!empty($date) && is_array($date)){
                        if (!empty($date[0])) {
                            $whereArr[] = ['pay_time', '>=', strtotime($date[0] . ' 00:00:00')];
                        }
                        if (!empty($date[1])) {
                            $whereArr[] = ['pay_time', '<=', strtotime($date[1] . ' 23:59:59')];
                        }
                    }
                    $housePaidOrderRecordService = new HousePaidOrderRecordService();
                    $fieldStr='*';
                    $exportArr = $housePaidOrderRecordService->getPaidOrderRecordList($village_id,$whereArr,$fieldStr, 0, 0,true);
                    $filename = date("YmdHis") . '-' .rand(1000000,9999999).'.xlsx' ;
                    $tips='小区已支付订单流水导出';
                    $this->saveExcel($exportArr['export_title'], $exportArr, $filename, $tips,'paidOrderRecord');
                    $whereArr = array('export_id' => $export_id);
                    $saveArr=array('status'=>1,'file_name'=>$filename);
                    $exportLogDb->saveOneData($whereArr,$saveArr);
                    break;
                default:
                    return true;
            }
        }
        return true;
    }
    public function addExportLog($village_id=0,$param=array()){
        $exportLogDb=new ExportLog();
        $type='';
        $retArr=array('export_id'=>0,'msg'=>'');
        if(isset($param['export_type']) && !empty($param['export_type'])){
            $type=$param['export_type'];
        }
        if(empty($type)){
            $retArr['msg']='缺少导出类型标识！';
            return $retArr;
        }
        $title='';
        if(isset($param['export_title']) && !empty($param['export_title'])){
            $title=$param['export_title'];
        }
        $paramStr=json_encode($param,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
        $addArr=array('type'=>$type,'param'=>$paramStr,'status'=>0,'dateline'=>time());
        $addArr['title']=$title;
        $export_id=$exportLogDb->addOneData($addArr);
        $retArr['export_id']=$export_id;
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
    public function saveExcel($title, $data, $filename, $tips = '', $exporttype = '')
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getDefaultColumnDimension()->setWidth(24);
        $sheet->getDefaultRowDimension()->setRowHeight(22);//设置行高
        $sheet->getRowDimension('1')->setRowHeight(25);//设置行高
        $mergeCellCoordinate = 'A1:Q1';
        $sheet->getStyle($mergeCellCoordinate)->getFont()->setBold(true)->setSize(14);
        $sheet->mergeCells($mergeCellCoordinate); //合并单元格
        $sheet->getColumnDimension('A')->setWidth(32);
        $sheet->setCellValue('A1', $tips);

        //设置单元格内容
        $titCol = 'A';
        foreach ($title as $key => $value) {
            //单元格内容写入
            $sheet->setCellValue($titCol . '2', $value);
            $titCol++;
        }
        $titleCellCoordinate='A2:'.$titCol.'2';
        $cellStyle='A1:'.$titCol;
        $sheet->getStyle($titleCellCoordinate)->getFont()->setBold(true);
        //设置单元格内容
        $row = 3;
        foreach ($data['lists'] as $k => $item) {
            $dataCol = 'A';
            foreach ($item as $value) {
                //单元格内容写入
                // $sheet->setCellValue($dataCol . $row, $value);
                $value=$value ? strval($value):'';
                $sheet->setCellValueExplicit($dataCol . $row, $value,\PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_STRING);
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
        $sheet->getStyle($cellStyle . $total_rows)->applyFromArray($styleArrayBody);
        //下载
        $basePath='';
        $root=dirname(dirname(dirname(__DIR__)));
        $root=dirname(dirname($root));
        $basePath =  rtrim($root,'/') . '/v20/runtime/';
        (new BaseExportService())->phpSpreadsheet($filename, $spreadsheet,$basePath);
        return true;
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