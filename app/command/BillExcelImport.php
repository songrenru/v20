<?php

namespace app\command;

use app\common\ChunkReadFilter;
use app\community\model\db\HouseNewChargeNumber;
use app\community\model\db\HouseNewChargeRule;
use app\community\model\db\HouseNewChargeStandardBind;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillageFloor;
use app\community\model\db\HouseVillageLayer;
use app\community\model\db\HouseVillageSingle;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\service\HouseNewCashierService;
use app\community\model\service\HouseNewChargeRuleService;
use app\community\model\service\HouseNewChargeService;
use app\community\model\service\HouseVillageConfigService;
use app\community\model\service\HouseVillageSingleService;
use app\community\model\service\HouseVillageUserBindService;
use app\community\model\service\ImportExcelService;
use app\community\model\service\NewBuildingService;
use app\traits\CacheTypeTraits;
use app\traits\CommonTraits;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\IOFactory;
use think\console\Command;
use think\console\Input;
use think\console\input\Argument;
use think\console\Output;

class BillExcelImport extends Command
{

    use CacheTypeTraits,CommonTraits;

    protected function configure()
    {
        // 指令配置
        $this->setName('billExcelImport')
            ->addArgument('json',Argument::IS_ARRAY)
            ->setDescription('欠费账单命令行导入指令');
    }

    protected function execute(Input $input, Output $output)
    {
        set_time_limit(0);
        ini_set("memory_limit","512M");
        $ImportExcelService=new ImportExcelService();
        $NewBuildingService=new NewBuildingService();
        $begin_time=$ImportExcelService->getMillisecondMethod(); //开始时间
        /**
         * 1、接收参数 、绑定参数
         * 2、按照映射关系写入库
         * 3、然后使用 Redis 反馈实时导入进度
         * 4、记录一下导入数据变更记录和 整理导入错误的文件
         */
        $json   = $input->getArgument('json');
        $params = \json_decode($json[0],true);
        fdump_api(['接收参数=='.__LINE__,$json,$params],'import_excel/billExcelImportExecute',1);

        $inputFileName             = $params['inputFileName']; //文件路径
        $selectWorkSheetIndex      = $params['selectWorkSheetIndex']; //选择的选择的Sheet索引
        $worksheetName             = $params['worksheetName']; //选择的选择的Sheet表
        $nowVillageInfo            = $params['nowVillageInfo']; //小区信息
        $subjectId                 = $params['subjectId']; //收费科目id
        $projectId                 = $params['projectId']; //收费项目id
        $village_id                = $nowVillageInfo['village_id'];
        $village_info = (new HouseVillage())->getOne($village_id,'property_id');
        $property_id = isset($village_info['property_id']) ? intval($village_info['property_id']) : 0;
        //使用Redis缓存 进度 
        $processCacheKey=$ImportExcelService->getProcessCacheKeyMethod($village_id,$params['type']);
        $processInfo = [
            'process'            => 0, //进度
            'readRowTotal'       => 0, //总共有数据行数
            'successInsterTotal' => 0, //总共插入表成功条数
            'errorTotal'         => 0, //总共插入表失败条数
        ];
        try {
            $this->queueReids()->set($processCacheKey,$processInfo,3600);
        }catch (\RedisException $e){
            //TODO 应该直接通过 队列 压入对应的业务日志里
            fdump_api(['$processCacheKey设置失败=='.__LINE__,$processCacheKey,$processInfo,$params,$e->getMessage()],'import_excel/billExcelImportExecuteError',1);
        }
        $inputFileName = root_path() . '/../'.$inputFileName;
        $check_number = "/^[0-9]+$/";
        $max_num = 99;
        $reader=$ImportExcelService->getFileReaderMethod($inputFileName,false);
        $spreadsheet = $reader->load($inputFileName);
        $sheet = $spreadsheet->getSheet($selectWorkSheetIndex);
        $highestRow = $sheet->getHighestRow(); // 总行数（不准确）)
        $highestColumn = $sheet->getHighestColumn();// 最后有数据的一列，比如 S 列
        $highestColumnIndex = Coordinate::columnIndexFromString($highestColumn);//把列字母转为数字,比如可以得到有 10 列
        $chunkSize = 500; //一次读取多少条
        $chunkFilter = new ChunkReadFilter();
        $reader->setReadFilter($chunkFilter);
        $j = 1;
        $allErrorData = [];
        $allInsertData = []; //校验一下数据，用完可以删除
        $readRowTotal       = $highestRow - 1; //插件读取的总行数（不准确，如果Excel格式有问题的情况）
        $successInsertTotal = 0; //总共更新条数
        $errorTotal         = 0; //总失败行数（不包含空行）
        if ($readRowTotal <= 0){
            return $this->queueReids()->set($processCacheKey,100,3); //进度
        }
        $excelTitle=[];
//        $nextIndex=Coordinate::stringFromColumnIndex($highestColumnIndex+1);
        $nextIndex = 'G';
        //↓↓↓表格读取数据开始↓↓↓
        $dbHouseNewChargeNumber = new HouseNewChargeNumber();
        $whereChargeNumber = [];
        $whereChargeNumber[] = ['id', '=', $subjectId];
        $chargeNumberInfo = $dbHouseNewChargeNumber->get_one($whereChargeNumber, 'id, charge_type');
        $charge_type = isset($chargeNumberInfo['charge_type']) && $chargeNumberInfo['charge_type'] ? $chargeNumberInfo['charge_type'] : '';
        
        $dbHouseVillageSingle = new HouseVillageSingle();
        $dbHouseVillageFloor = new HouseVillageFloor();
        $dbHouseVillageLayer = new HouseVillageLayer();
        $dbHouseVillageUserVacancy = new HouseVillageUserVacancy();
        $dbHouseNewChargeRule = new HouseNewChargeRule();
        $dbHouseNewChargeStandardBind = new HouseNewChargeStandardBind();
        $dbHouseNewPayOrder = new HouseNewPayOrder();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_new_charge = new HouseNewChargeService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $charge_type_arr = $service_house_new_charge->charge_type;
        $nowTime = time();
        // 计费模式 1:固定费用 2：单价计量单位 3 临时车  4 月租车  5 车位数量
        $fees_type           = 1;
        // 计量单位
        $unit_gage           = '';
        // 周期性设置 周期数 0:不限周期
        $cyclicity_set       = 0;
        // 账单生成周期设置 1：按日生成2：按月生成3：按年生成
        $bill_create_set     = 0;
        // 账单欠费模式  1:预生成  2：后生成
        $bill_arrears_set    = 0;
        // 生成账单模式 1:手动生成 2：自动生成
        $bill_type           = 1;
        // 是否支持预缴 1:支持 2：不支持
        $is_prepaid          = 2;
        // 1:年月日 2：年月 3：年
        $charge_valid_type   = 2;
        // 收费标准生效时间
        $charge_valid_time = $nowTime;
        fdump_api(['时间=='.__LINE__,'nowTime' => $nowTime],'import_excel/errBillExcelImportExecute');
        /*
        for ($startRow = 2; $startRow <= $highestRow; $startRow += $chunkSize) {
            $chunkFilter->setRows($startRow, $chunkSize);
            $spreadsheet = $reader->load($inputFileName);
            */
            $sheetData = $spreadsheet->getSheetByName($worksheetName)->toArray(NULL, true, true, true);
            $excelTitle = $sheetData[1];
            unset($sheetData[1]); //去掉表头
            fdump_api(['时间=='.__LINE__,'sheetData' => $sheetData,'nextIndex' => $nextIndex],'import_excel/errBillExcelImportExecute', 1);
            //开始业务逻辑
            try {
                $rowTrueNum=1;
                $rowNum=1;
                foreach ($sheetData as $dk => $data) {
                    //本次读取处理完毕
                    $process =  sprintf('%.2f',$rowNum / $highestRow);
                    $process=$process*100;
                    if($process>0 && $process<1){
                        $process=1;
                    }else{
                        $process=floor($process);
                    }
                    if ($rowNum >=$highestRow ){
                        $readRowTotal=$rowTrueNum;
                        $process = 100;
                    }
                    $rowNum++;
                    $processInfo = [
                        'process'            =>$process, //进度
                        'readRowTotal'       => $readRowTotal, //总共有数据行数
                        'successInsterTotal' => $successInsertTotal, //总共插入表成功条数
                        'errorTotal'         => $errorTotal, //总共插入表失败条数
                    ];
                    $insert_rets=$this->queueReids()->set($processCacheKey,$processInfo,3600); //进度（理论上暂时还不会有超过一个小时的数据要执行）
                    
                    $single       = isset($data['A']) && $data['A'] ? $data['A'] : '';
                    $floor        = isset($data['B']) && $data['B'] ? trim($data['B']) : '';
                    $layer        = isset($data['C']) && $data['C'] ? trim($data['C']) : '';
                    $room         = isset($data['D']) && $data['D'] ? trim($data['D']) : '';
                    $charge_name  = isset($data['E']) && $data['E'] ? trim($data['E']) : '';
                    $charge_price = isset($data['F']) && $data['F'] ? trim($data['F']) : '';
                    if(empty($single) && empty($floor) && empty($layer) && empty($room) && empty($charge_name)){
                        continue;
                    }
                    $rowTrueNum++;
                    if (!$single) {
                        $data[$nextIndex]= "缺少【楼栋】";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        continue;
                    }
                    if (!$floor) {
                        $data[$nextIndex] = "缺少【单元】";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api([__LINE__,'data' => $data],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    fdump_api([__LINE__,'layer' => $layer],'import_excel/errBillExcelImportExecute', 1);
                    if (!$layer) {
                        $data[$nextIndex]= "缺少【楼层】";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api([__LINE__,'data' => $data],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    if (!$room) {
                        $data[$nextIndex]= "缺少【房间号】";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api([__LINE__,'data' => $data],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    if (!$charge_name) {
                        $data[$nextIndex]= "缺少【欠缴费用名称】";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api([__LINE__,'data' => $data],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    if (!$charge_price) {
                        $data[$nextIndex]= "缺少【欠缴金额】";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api([__LINE__,'data' => $data],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    if (floatval($charge_price) <= 0) {
                        $data[$nextIndex]= "【欠缴金额】必须大于0";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api([__LINE__,'data' => $data],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }

                
                    // 先匹配对应房间 不做新增 匹配不上直接报错
                    $whereSingle = [];
                    $whereSingle[] = ['village_id', '=', $village_id];
                    $whereSingle[] = ['status', '=', 1];
                    $whereSingle[] = ['single_name|single_number', '=', $single];
                    $singleInfo = $dbHouseVillageSingle->getOne($whereSingle, 'id, single_name');
                    if ($singleInfo && ! is_array($singleInfo)) {
                        $singleInfo = $singleInfo->toArray();
                    }
                    if (! isset($singleInfo['id']) || ! $singleInfo['id']) {
                        $data[$nextIndex]= "对应【楼栋】不存在";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api(['对应【楼栋】不存在=='.__LINE__,'whereSingle' => $whereSingle,'singleInfo' => $singleInfo],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    $single_id = $singleInfo['id'];

                    $whereFloor = [];
                    $whereFloor[] = ['village_id', '=', $village_id];
                    $whereFloor[] = ['single_id', '=', $single_id];
                    $whereFloor[] = ['status', '=', 1];
                    $whereFloor[] = ['floor_name', '=', $floor];
                    $floorInfo = $dbHouseVillageFloor->getOne($whereFloor, 'floor_id, floor_name, single_id');
                    if ($floorInfo && !$floorInfo->isEmpty()) {
                        $floorInfo = $floorInfo->toArray();
                    }else{
                        $whereFloor = [];
                        $whereFloor[] = ['village_id', '=', $village_id];
                        $whereFloor[] = ['single_id', '=', $single_id];
                        $whereFloor[] = ['status', '=', 1];
                        $whereFloor[] = ['floor_number', '=', $floor];
                        $floorInfo = $dbHouseVillageFloor->getOne($whereFloor, 'floor_id, floor_name, single_id');
                        if($floorInfo && !$floorInfo->isEmpty()){
                            $floorInfo = $floorInfo->toArray();
                        }
                    }
                    if (! isset($floorInfo['floor_id']) || ! $floorInfo['floor_id']) {
                        $data[$nextIndex]= "对应【单元】不存在";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api(['对应【单元】不存在=='.__LINE__,'whereFloor' => $whereFloor,'floorInfo' => $floorInfo],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    $floor_id = $floorInfo['floor_id'];

                    $whereLayer = [];
                    $whereLayer[] = ['village_id', '=', $village_id];
                    $whereLayer[] = ['floor_id', '=', $floor_id];
                    $whereLayer[] = ['status', '=', 1];
                    $whereLayer[] = ['layer_name', '=', $layer];
                    $layerInfo = $dbHouseVillageLayer->getOne($whereLayer, 'id, layer_name, single_id, floor_id');
                    if ($layerInfo &&  !$layerInfo->isEmpty()) {
                        $layerInfo = $layerInfo->toArray();
                    }else{
                        $whereLayer = [];
                        $whereLayer[] = ['village_id', '=', $village_id];
                        $whereLayer[] = ['floor_id', '=', $floor_id];
                        $whereLayer[] = ['status', '=', 1];
                        $whereLayer[] = ['layer_number', '=', $layer];
                        $layerInfo = $dbHouseVillageLayer->getOne($whereLayer, 'id, layer_name, single_id, floor_id');
                        if($layerInfo && !$layerInfo->isEmpty()){
                            $layerInfo = $layerInfo->toArray();
                        }
                    }
                    if (! isset($layerInfo['id']) || ! $layerInfo['id']) {
                        $data[$nextIndex]= "对应【楼层】不存在";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api(['对应【楼层】不存在=='.__LINE__,'whereLayer' => $whereLayer,'layerInfo' => $layerInfo],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    $layer_id = $layerInfo['id'];

                    $whereVacancy = [];
                    $whereVacancy[] = ['village_id', '=', $village_id];
                    $whereVacancy[] = ['single_id', '=', $single_id];
                    $whereVacancy[] = ['floor_id', '=', $floor_id];
                    $whereVacancy[] = ['layer_id', '=', $layer_id];
                    $whereVacancy[] = ['status', '<>', 0];
                    $whereVacancy[] = ['is_del', '=', 0];
                    $whereVacancy[] = ['room|room_number', '=', $room];
                    $roomInfo = $dbHouseVillageUserVacancy->getOne($whereVacancy, 'pigcms_id, room, village_id, single_id, floor_id, layer_id');
                    if ($roomInfo && ! is_array($roomInfo)) {
                        $roomInfo = $roomInfo->toArray();
                    }
                    if (! isset($roomInfo['pigcms_id']) || ! $roomInfo['pigcms_id']) {
                        $data[$nextIndex]= "对应【房间号】不存在";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api(['对应【房间号】不存在=='.__LINE__,'whereVacancy' => $whereVacancy,'roomInfo' => $roomInfo],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    $room_id = $roomInfo['pigcms_id'];

                    $whereRepeatRule = [];
                    $status = 1;//状态 1:开启 2：关闭 4：删除
                    $whereRepeatRule[] = ['village_id', '=', $village_id];
                    $whereRepeatRule[] = ['subject_id', '=', $subjectId];
                    $whereRepeatRule[] = ['charge_project_id', '=', $projectId];
                    $whereRepeatRule[] = ['charge_name', '=', $charge_name];
                    $whereRepeatRule[] = ['unit_price', '=', $charge_price];
                    $whereRepeatRule[] = ['charge_price', '=', $charge_price];
                    $whereRepeatRule[] = ['fees_type', '=', $fees_type];
                    $whereRepeatRule[] = ['cyclicity_set', '=', $cyclicity_set];
                    $whereRepeatRule[] = ['bill_create_set', '=', $bill_create_set];
                    $whereRepeatRule[] = ['bill_arrears_set', '=', $bill_arrears_set];
                    $whereRepeatRule[] = ['bill_type', '=', $bill_type];
                    $whereRepeatRule[] = ['is_prepaid', '=', $is_prepaid];
                    $whereRepeatRule[] = ['status', '=', $status];
                    $whereRepeatRule[] = ['from_type', '=', 'bill_excel'];
                    $ruleInfo = $dbHouseNewChargeRule->getOne($whereRepeatRule, 'id');
                    if (isset($ruleInfo['id']) && $ruleInfo['id']) {
                        $ruleId = $ruleInfo['id'];
                    } else {
                        $ruleData = [
                            'village_id' => $village_id,
                            'subject_id' => $subjectId,
                            'charge_project_id' => $projectId,
                            'charge_name' => $charge_name,
                            'unit_price' => $charge_price,
                            'charge_price' => $charge_price,
                            'fees_type' => $fees_type,
                            'cyclicity_set' => $cyclicity_set,
                            'bill_create_set' => $bill_create_set,
                            'bill_arrears_set' => $bill_arrears_set,
                            'bill_type' => $bill_type,
                            'is_prepaid' => $is_prepaid,
                            'status' => $status,
                            'from_type' => 'bill_excel',
                            'charge_valid_type' => $charge_valid_type,
                            'charge_valid_time' => $charge_valid_time,
                            'not_house_rate' => 100,
                            'unit_gage' => $unit_gage,
                            'add_time' => $nowTime,
                        ];
                        $ruleId = $dbHouseNewChargeRule->addFind($ruleData);
                        if (! $ruleId) {
                            $data[$nextIndex]= "收费标准新增失败";
                            $allErrorData[] =  $data;
                            $errorTotal += 1;
                            fdump_api(['收费标准新增失败=='.__LINE__,'ruleData' => $ruleData],'import_excel/errBillExcelImportExecute', 1);
                            continue;
                        }
                    }
                    $bind_type = 1;
                    $cycle = 1;
                    $whereChargeBind = [];
                    $whereChargeBind[] = ['rule_id', '=', $ruleId];
                    $whereChargeBind[] = ['project_id', '=', $projectId];
                    $whereChargeBind[] = ['village_id', '=', $village_id];
                    $whereChargeBind[] = ['single_id', '=', $single_id];
                    $whereChargeBind[] = ['floor_id', '=', $floor_id];
                    $whereChargeBind[] = ['layer_id', '=', $layer_id];
                    $whereChargeBind[] = ['vacancy_id', '=', $room_id];
                    $whereChargeBind[] = ['bind_type', '=', $bind_type];
                    $whereChargeBind[] = ['cycle', '=', $cycle];
                    $whereChargeBind[] = ['is_del', '=', 1];
                    $chargeStandardBindInfo = $dbHouseNewChargeStandardBind->getOne($whereChargeBind, 'id');
                    $charge_standard_bind_id = isset($chargeStandardBindInfo['id']) ? intval($chargeStandardBindInfo['id']) : 0;
                    if (! $charge_standard_bind_id) {
                        $bindData = [];
                        $bindData['cycle'] = $cycle;
                        $bindData['village_id'] = $village_id;
                        $bindData['rule_id'] = $ruleId;
                        $bindData['order_add_time'] = $nowTime - 10;
                        $bindData['bind_type'] = $bind_type;
                        $bindData['single_id'] = $single_id;
                        $bindData['floor_id'] = $floor_id;
                        $bindData['layer_id'] = $layer_id;
                        $bindData['vacancy_id'] = $room_id;
                        $bindData['custom_value'] = '';
                        try{
                            $res = $service_house_new_charge_rule->addStandardBind($bindData);
                            if (isset($res['id']) && $res['id']) {
                                $charge_standard_bind_id = $res['id'];
                            }
                        }catch (\Exception $e){
                            $data[$nextIndex]= $e->getMessage();
                            $allErrorData[] =  $data;
                            $errorTotal += 1;
                            fdump_api(['绑定错误=='.__LINE__,'bindData' => $bindData,'getMessage' => $e->getMessage()],'import_excel/errBillExcelImportExecute',1);
                            continue;
                        }
                    }
                    if (! $charge_standard_bind_id) {
                        $data[$nextIndex]= "收费标准绑定房间失败";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api(['收费标准绑定房间失败=='.__LINE__,'whereChargeBind' => isset($whereChargeBind) ? $whereChargeBind : [], 'res' => $res],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    $whereRepeatOrder = [];
                    $whereRepeatOrder[] = ['rule_id', '=', $ruleId];
                    $whereRepeatOrder[] = ['project_id', '=', $projectId];
                    $whereRepeatOrder[] = ['room_id', '=', $room_id];
                    $whereRepeatOrder[] = ['is_discard', '=', 1];

                    $orderInfo = $dbHouseNewPayOrder->get_one($whereRepeatOrder, 'order_id');
                    if (isset($orderInfo['order_id']) && $orderInfo['order_id']) {
                        $data[$nextIndex]= "订单已经导入过了";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api(['订单已经导入=='.__LINE__,'whereRepeatOrder' => $whereRepeatOrder, 'orderInfo' => $orderInfo],'import_excel/errBillExcelImportExecute', 1);
                        continue;
                    }
                    $payOrderData = [];
                    $payOrderData['order_type'] = $charge_type;
                    $payOrderData['order_name'] = isset($charge_type_arr[$charge_type]) ? $charge_type_arr[$charge_type] : $charge_name;
                    $payOrderData['village_id'] = $village_id;
                    $payOrderData['property_id'] = $property_id;
                    $payOrderData['total_money'] = $charge_price;
                    $payOrderData['modify_money'] = $payOrderData['total_money'];
                    $payOrderData['is_paid'] = 2;
                    $payOrderData['is_prepare'] = 2;
                    $payOrderData['rule_id'] = $ruleId;
                    $payOrderData['project_id'] = $projectId;
                    $payOrderData['order_no'] = '';
                    $payOrderData['add_time'] = $nowTime;
                    $payOrderData['from'] = 2;
                    $payOrderData['unit_price'] = $charge_price;
                    $payOrderData['room_id'] = $room_id;
                    $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id', '=', $room_id], ['type', 'in', '0,3'], ['status', '=', 1]], 'uid,pigcms_id,name,phone');
                    if ($user_info) {
                        $payOrderData['pigcms_id'] = $user_info['pigcms_id'] ? $user_info['pigcms_id'] : 0;
                        $payOrderData['name'] = $user_info['name'] ? $user_info['name'] : '';
                        $payOrderData['uid'] = $user_info['uid'] ? $user_info['uid'] : 0;
                        $payOrderData['phone'] = $user_info['phone'] ? $user_info['phone'] : '';
                    }
                    $id = $dbHouseNewPayOrder->addOne($payOrderData);
                    if (! $id) {
                        $data[$nextIndex]= "订单新增失败";
                        $allErrorData[] =  $data;
                        $errorTotal += 1;
                        fdump_api(['订单新增失败=='.__LINE__,'payOrderData' => $payOrderData],'import_excel/errBillExcelImportExecute',1);
                        continue;
                    }
                    $successInsertTotal += 1;
                }
            }catch (\Exception $exception){
                fdump_api(['调用命令行异常了=='.__LINE__,'err' => $exception->getMessage(), 'line' => $exception->getLine()],'import_excel/errBillExcelImportExecute', 1);
            }
            /*
            //业务逻辑处理完毕
            $process =  sprintf('%.2f',$startRow / $highestRow);
            if ($startRow + $chunkSize >=$highestRow ){
                $process = 1;
            }
            fdump_api(['结果=='.__LINE__,'process' => $process],'import_excel/errBillExcelImportExecute', 1);
            $processInfo = [
                'process'            => floor($process * 100), //进度
                'readRowTotal'       => $readRowTotal, //总共有数据行数
                'successInsterTotal' => $successInsertTotal, //总共插入表成功条数
                'errorTotal'         => $errorTotal, //总共插入表失败条数
            ];
            $this->queueReids()->set($processCacheKey,$processInfo,3600); //进度（理论上暂时还不会有超过一个小时的数据要执行）
            */
            //本次读取处理完毕
            $processInfo = [
                'process'            => 100, //进度
                'readRowTotal'       => $rowTrueNum, //总共有数据行数
                'successInsterTotal' => $successInsertTotal, //总共插入表成功条数
                'errorTotal'         => $errorTotal, //总共插入表失败条数
            ];
            $insert_rets=$this->queueReids()->set($processCacheKey,$processInfo,3600); //进度（理论上暂时还不会有超过一个小时的数据要执行）
            $spreadsheet->disconnectWorksheets();
            
        //}
        //↑↑↑表格读取处理完成↑↑↑
        $excelTitle[$nextIndex]='失败原因';
        $record=[
            'village_id'=>$village_id,
            'type'=>$params['type'],
            'file_name'=>basename($inputFileName),
            'import_msg'=>'总行数:'.$rowTrueNum.'条,成功:'.$successInsertTotal.'条,失败:'.$errorTotal.'条',
            'add_time'=> $nowTime
        ];
        if (!empty($allErrorData)){
            $record['status']=0;
            //生成错误表格文件路径
            $record['file_url']=$ImportExcelService->exportExcelMethod($village_id,$excelTitle,$allErrorData,$params['type'].'_'.$nowTime.'_'.uniqid());
        }
        else{
            $record['status']=1;
            $record['file_url']='';
        }
        $end_time=$ImportExcelService->getMillisecondMethod();//结束时间
        $second=sprintf('%.2f',intval($end_time - $begin_time)/1000);
        $record['duration']=$second;
        //写入导入数据
        $res=$NewBuildingService->addHouseVillageImportRecordMethod($record);
        if($allInsertData){ //写入单元数据
            $NewBuildingService->addAllHouseVillageFloorMethod($allInsertData);
        }
        fdump_api(['处理完成=='.__LINE__,'总花费时间:'.$second.'s',$record,$res,$allErrorData,$allInsertData],'import_excel/billExcelImportExecute',1);
        return  true;
    }

}