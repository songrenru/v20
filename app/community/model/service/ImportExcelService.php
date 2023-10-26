<?php

/**
 * Author lkz
 * Date: 2023/1/10
 * Time: 13:17
 */

namespace app\community\model\service;
use app\common\model\service\export\ExportService as BaseExportService;
use app\common\model\service\UploadFileService;
use app\traits\CacheTypeTraits;
use app\traits\house\HouseTraits;
use app\traits\ImportExcelTraits;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\RichText\RichText;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class ImportExcelService
{
    use HouseTraits,ImportExcelTraits,CacheTypeTraits;

    const upload_building = 'uploadBuilding'; //上传楼栋
    const upload_unit = 'uploadUnit'; //上传单元
    const upload_floor = 'uploadFloor'; //上传楼层
    const upload_room = 'uploadRoom'; //上传房间
    const upload_three_table = 'uploadThreeTable'; //定制三表 水电燃
    const UPLOAD_BILL_EXCEL = 'billExcel'; // 定制 欠费账单导入
    
    const replace_field_skip='skip';//跳过
    const replace_field_cover='cover';//覆盖
    
    //自定义命令 
    public $command=[
        self::upload_building=>'buildingImport',
        self::upload_unit=>'unitImport',
        self::upload_floor=>'floorImport',
        self::upload_room=>'roomImport',
        self::upload_three_table=>'threeTableImport',
        self::UPLOAD_BILL_EXCEL =>'billExcelImport',
    ];

    //导入模板示例
    public $importTemplateUrl=[
        self::upload_building=>'/static/file/single_import_sample.xls',
        self::upload_unit=>'/static/file/unit_import_samples.xls',
        self::upload_floor=>'/static/file/layer_import_sample.xls',
        self::upload_room=>'/static/file/room_import_sample.xls',
        self::upload_three_table=>'/static/file/three_table_import_sample.xls',
    ];
    
    //楼栋可覆盖字段
    public $buildingReplaceField=[
        ['option'=> 'single_name','title' => '楼栋名称','msg'=>''],
    ];

    //单元可覆盖字段
    public $unitReplaceField=[
        ['option'=> 'floor_name','title' => '单元名称','msg'=>''],
    ];

    //楼层可覆盖字段
    public $floorReplaceField=[
        ['option'=> 'layer_name','title' => '楼层名称','msg'=>''],
    ];

    //房间可覆盖字段
    public $roomReplaceField=[
        ['option'=> 'housesize','title' => '面积(m²)','msg'=>''],
        ['option'=> 'house_type','title' => '使用类型(填住宅/商铺/办公)','msg'=>''],
        ['option'=> 'sort','title' => '排序','msg'=>''],
        ['option'=> 'room_alias_id','title' => '房间别名编号','msg'=>''],
        ['option'=> 'property_starttime','title' => '物业开始时间','msg'=>''],
        ['option'=> 'property_endtime','title' => '物业结束时间','msg'=>''],
    ];

    //====================================todo 共用方法 start======================================
    
    /**
     * 获取当前毫秒.
     * @return float
     */
    public function getMillisecondMethod(){
        [$msec, $sec] = explode(' ', microtime());
        return (float) sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
    }
    
    //todo 组装指定类型标识
    public function getProcessCacheKeyMethod($village_id,$bussiness){
        return 'fastwhale:'.$bussiness.':process:'.$village_id;
    }
    
    //todo 根据来源类型 返回对应配置 针对数据重复时
    public function getReplaceFieldSelectMethod($type){
        $data=[];
        switch ($type) {
            case self::upload_building:
                $data[]= ['key'=>self::replace_field_skip,'value'=>'跳过','children'=>[]];
                $data[]= ['key'=>self::replace_field_cover,'value'=>'覆盖','children'=>$this->buildingReplaceField];
                break;
            case self::upload_unit:
                $data[]= ['key'=>self::replace_field_skip,'value'=>'跳过','children'=>[]];
                $data[]= ['key'=>self::replace_field_cover,'value'=>'覆盖','children'=>$this->unitReplaceField];
                break;
            case self::upload_floor:
                $data[]= ['key'=>self::replace_field_skip,'value'=>'跳过','children'=>[]];
                $data[]= ['key'=>self::replace_field_cover,'value'=>'覆盖','children'=>$this->floorReplaceField];
                break;
            case self::upload_room:
                $data[]= ['key'=>self::replace_field_skip,'value'=>'跳过','children'=>[]];
                $data[]= ['key'=>self::replace_field_cover,'value'=>'覆盖','children'=>$this->roomReplaceField];
                break;
            case self::upload_three_table:
                $data=[];
                break;
            case self::UPLOAD_BILL_EXCEL:
                $data=[];
                break;
            default:
                throw new \think\Exception('暂无该类型参数');
        }
        return $data;
    }

    //todo 根据来源类型 返回对应映射字段结构
    public function getSourceMapFieldsMethod($type){
        $data=[];
        switch ($type) {
            case self::upload_building:
                $data = [
                    ['key' => '楼栋名称','val' => [
                            'field'     => 'single_name',
                            'isMust'    => false,
                            'fieldType' => 'string'
                        ],'selected'  => false],
                    ['key' => '楼栋编号','val' => [
                            'field'     => 'single_number',
                            'isMust'    => true,
                            'fieldType' => 'string'
                        ],'selected'  => false],
                    ['key' => '楼栋面积','val' => [
                            'field'     => 'measure_area',
                            'isMust'    => false,
                            'fieldType' => 'number'
                        ],'selected'  => false],
                    ['key' => '所含单元数','val' => [
                            'field'     => 'floor_num',
                            'isMust'    => false,
                            'fieldType' => 'number'
                        ],'selected'  => false],
                    ['key' => '所含房屋数','val' => [
                            'field'     => 'vacancy_num',
                            'isMust'    => false,
                            'fieldType' => 'number'
                        ],'selected'  => false],
                    ['key' => '排序(倒序)','val' => [
                            'field'     => 'sort',
                            'isMust'    => false,
                            'fieldType' => 'number'
                        ],'selected'  => false],
                    ['key' => '合同开始时间','val' => [
                            'field'     => 'contract_time_start',
                            'isMust'    => false,
                            'fieldType' => 'date'
                        ],'selected'  => false],
                    ['key' => '合同结束时间','val' => [
                            'field'     => 'contract_time_end',
                            'isMust'    => false,
                            'fieldType' => 'date'
                        ],'selected'  => false]
                ];
                break;
            case self::upload_unit:
                $data = [
                    ['key' => '单元名称','val' => [
                        'field'     => 'floor_name',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '单元编号','val' => [
                        'field'     => 'floor_number',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '所属楼栋','val' => [
                        'field'     => 'single_name',
                        'isMust'    => false,
                        'fieldType' => 'number'
                    ],'selected'  => false],
                    ['key' => '单元面积','val' => [
                        'field'     => 'floor_area',
                        'isMust'    => false,
                        'fieldType' => 'number'
                    ],'selected'  => false],
                    ['key' => '排序','val' => [
                        'field'     => 'sort',
                        'isMust'    => false,
                        'fieldType' => 'number'
                    ],'selected'  => false],
                ];
                break;
            case self::upload_floor:
                $data = [
                    ['key' => '楼层名称','val' => [
                        'field'     => 'layer_name',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '楼层编号','val' => [
                        'field'     => 'layer_number',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '所属楼栋','val' => [
                        'field'     => 'single_name',
                        'isMust'    => false,
                        'fieldType' => 'number'
                    ],'selected'  => false],
                    ['key' => '所属单元','val' => [
                        'field'     => 'floor_name',
                        'isMust'    => false,
                        'fieldType' => 'number'
                    ],'selected'  => false],
                    ['key' => '排序','val' => [
                        'field'     => 'sort',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                ];
                break;
            case self::upload_room:
                $data = [
                    ['key' => '物业编码','val' => [
                        'field'     => 'usernum',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '楼栋名称','val' => [
                        'field'     => 'single_name',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '楼栋编号','val' => [
                        'field'     => 'single_number',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '单元名称','val' => [
                        'field'     => 'floor_name',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '单元编号','val' => [
                        'field'     => 'floor_number',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '楼层名称','val' => [
                        'field'     => 'layer_name',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '楼层编号','val' => [
                        'field'     => 'layer_number',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '房间号','val' => [
                        'field'     => 'room_name',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '房间编号','val' => [
                        'field'     => 'room_number',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '面积(m²)','val' => [
                        'field'     => 'housesize',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '使用类型(填住宅/商铺/办公)','val' => [
                        'field'     => 'house_type',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '物业开始时间','val' => [
                        'field'     => 'property_starttime',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '物业结束时间','val' => [
                        'field'     => 'property_endtime',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '房间别名编号','val' => [
                        'field'     => 'room_alias_id',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '排序','val' => [
                        'field'     => 'sort',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                ];
                break;
            case self::upload_three_table:
                $data = [
                    ['key' => '楼栋名称','val' => [
                        'field'     => 'single_name',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '单元名称','val' => [
                        'field'     => 'floor_name',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '楼层名称','val' => [
                        'field'     => 'layer_name',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '房间号','val' => [
                        'field'     => 'room',
                        'isMust'    => true,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '电表编号','val' => [
                        'field'     => 'ele_number',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '冷水表编号','val' => [
                        'field'     => 'water_number',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '热水表编号','val' => [
                        'field'     => 'heat_water_number',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                    ['key' => '燃气表编号','val' => [
                        'field'     => 'gas_number',
                        'isMust'    => false,
                        'fieldType' => 'string'
                    ],'selected'  => false],
                ];
                break;
            case self::UPLOAD_BILL_EXCEL:
                $data=[];
                break;
            default:
                throw new \think\Exception('暂无该类型参数');
        }
        return $data;
    }
    
    //todo 读取文件
    public function getFileReaderMethod($fileName,$is_read=true){
        $fileArr = explode('.',$fileName);
        $fileExt = strtolower(end($fileArr));
        if ($fileExt === 'xls'){
            $inputFileType = "Xls";
        }else if($fileExt === 'xlsx'){
            $inputFileType = "Xlsx";
        }
        try {
            $reader = IOFactory::createReader($inputFileType);
            if($is_read){
                $reader->setReadDataOnly(true); //只读
            }
        } catch (\Exception $e) {
            $this->importQueueFdump(['读取文件失败=='.__LINE__,$fileName,$is_read,$e->getMessage()],'import_excel/getFileReaderMethodError',1);
            if($is_read){
                throw new \think\Exception($e->getMessage());
            }else{
                return [];
            }
        }
        return $reader;
    }
    
    //todo 校验数据重复时，是否跳过 true:跳过
    public function checkReplaceFieldSkipMethod($find_type){
        $status=false;
        if($find_type == self::replace_field_skip){ //跳过
            $status=true;
        }
        return $status;
    }
    
    //todo 生成错误导出文件
    public function exportExcelMethod($village_id,$title, $data, $fileName)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getDefaultColumnDimension()->setWidth(25);
        $sheet->getDefaultRowDimension()->setRowHeight(40);//设置行高
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
        $path='upload/villageExport/'.$village_id.'/';
        $filename = $fileName . '.xlsx';
        $basePath=dirname(root_path()) . '/'.$path;
        if (!is_dir($basePath)) {
            mkdir($basePath, 0777, true);
        }
        (new BaseExportService())->phpSpreadsheet($filename, $spreadsheet,$basePath);
        return  $path.$filename;
    }
    
    //todo 覆盖模式下 楼栋更新对应指定数据
    public function updateBuildingReplaceFieldMethod($village_id,$replaceField,$single_name,$single_number){
        $where=[
            ['village_id','=',$village_id],
            ['status','=',1],
        ];
        $value='';
        $title='';
        if($replaceField == 'single_name'){ //更新楼栋名称
            $value=$single_name;
            $title='楼栋名称';
        }elseif ($replaceField == 'single_number'){//更新楼栋编号
            $value=$single_number;
            $title='楼栋编号';
        }
        if(!$value){
            return ['error'=>false,'msg'=>'类型不存在','date'=>[]];
        }
        $where[]=[$replaceField,'=',$value];
        $field='id';
        $info=(new NewBuildingService())->getHouseVillageSingleFindMethod($where,$field);
        if(!$info){
            return ['error'=>false,'msg'=>'覆盖模式下,该['.$title.']对应的楼栋不存在','date'=>[]];
        }
        return ['error'=>true,'msg'=>'ok','data'=>$info['id']];
    }

    //todo 覆盖模式下 单元更新对应指定数据
    public function updateUnitReplaceFieldMethod($village_id,$single_id,$replaceField,$floor_name,$floor_number){
        $where=[
            ['village_id','=',$village_id],
            ['single_id','=',$single_id],
            ['status','<>' ,4]
        ];
        $value='';
        $title='';
        if($replaceField == 'floor_name'){ //更新单元名称
            $value=$floor_name;
            $title='单元名称';
        }elseif ($replaceField == 'floor_number'){//更新单元编号
            $value=$floor_number;
            $title='单元编号';
        }
        if(!$value){
            return ['error'=>false,'msg'=>'类型不存在','date'=>[]];
        }
        $where[]=[$replaceField,'=',$value];
        $field='floor_id as id';
        $info=(new NewBuildingService())->getHouseVillageFloorFindMethod($where,$field);
        if(!$info){
            return ['error'=>false,'msg'=>'覆盖模式下,该['.$title.']对应的单元不存在!','date'=>[]];
        }
        return ['error'=>true,'msg'=>'ok','data'=>$info['id']];
    }


    //todo 覆盖模式下 楼层更新对应指定数据
    public function updateFloorReplaceFieldMethod($village_id,$floor_id,$replaceField,$layer_name,$layer_number){
        $where=[
            ['village_id','=',$village_id],
            ['floor_id','=',$floor_id],
            ['status','<>' ,4]
        ];
        $value='';
        $title='';
        if($replaceField == 'layer_name'){ //更新楼层名称
            $value=$layer_name;
            $title='楼层名称';
        }elseif ($replaceField == 'layer_number'){//更新楼层编号
            $value=$layer_number;
            $title='楼层编号';
        }
        if(!$value){
            return ['error'=>false,'msg'=>'类型不存在','date'=>[]];
        }
        $where[]=[$replaceField,'=',$value];
        $field='id';
        $info=(new NewBuildingService())->getHouseVillageLayerFindMethod($where,$field);
        if(!$info){
            return ['error'=>false,'msg'=>'覆盖模式下,该['.$title.']对应的楼层不存在!','date'=>[]];
        }
        return ['error'=>true,'msg'=>'ok','data'=>$info['id']];
    }
    

    //====================================todo 业务方法 start======================================
    
    //todo 上传文件 接收和返回类型
    public function uploadFile($type,$param, $upload_dir = 'villageImport'){
        $service = new UploadFileService();
        $processCacheKey = $this->getProcessCacheKeyMethod($param['village_id'],$type);
        try {
            $processInfo = $this->queueReids()->get($processCacheKey);
        } catch (\Exception $e) {
            throw new \think\Exception('请先配置Redis');
        }
        $process = $processInfo['process'];
        if (!is_null($process)){
            if (in_array(intval($process),[0,100])){
                $this->queueReids()->delete($processCacheKey);
            }else{
                throw new \think\Exception('当前已有数据在执行中，当前执行进度【'.$process.'%】请耐心等待执行完，再导入！');
            }
        }
        $valdate = [
            'fileSize' => 1024 * 1024 * 10, // 10M 
            'fileExt' => 'xls,xlsx'
        ];
        $upload_dir = $upload_dir .DIRECTORY_SEPARATOR.$param['village_id'];
        try {
            $savepath = $service->uploadFile($param['file'], $upload_dir,$valdate);
        } catch (\Exception $e) {
            throw new \think\Exception($e->getMessage());
        }
        return  ['path'=>$savepath,'type'=>$type,'file_name'=>basename($savepath)];
    }
    
    //todo 文件读取 返回对应类型数据格式
    public function readImportFile($type,$param){
        try {
            $reader=$this->getFileReaderMethod($param['inputFileName']);
            $worksheetData = $reader->listWorksheetInfo($param['inputFileName']);
        } catch (\Exception $e) {
            throw new \think\Exception($e->getMessage());
        }
        $replaceField=$this->getReplaceFieldSelectMethod($type);
        return  ['worksheet'=>$worksheetData,'replaceFieldSelect'=>$replaceField,'type'=>$type];
    }

    //todo 文件解析 返回对应类型数据
    public function analysisImportFile($type,$param){
        try {
            $reader=$this->getFileReaderMethod($param['inputFileName']);
            $spreadsheet = $reader->load($param['inputFileName']);
        } catch (\Exception $e) {
            throw new \think\Exception('该文件不存在，请重新上传');
        }
        $sheet = $spreadsheet->getSheet($param['selectWorkSheetIndex']);//获取定制 sheet index 的工作表的内容
        $highestRow = $sheet->getHighestRow(); // 总行数
        $highestColumn = $sheet->getHighestColumn();// 最后有数据的一列，比如 S 列
        $highestColumnIndex = Coordinate::columnIndexFromString($highestColumn);//把列字母转为数字,比如可以得到有 10 列
        //获取列 （字母）
        $columnNames = [];        //列数 初始化,
        for ($j = 1 ; $j <= $highestColumnIndex ; $j++){
            $columnNames[] = Coordinate::stringFromColumnIndex($j);//得到列的首字母
        }
        //获取第一行（表头）
        $excelCloumns = [];
        $colTitle = [];
        $rowNum=1;
        $A1text = $sheet->getCell('A1')->getValue();
        $B1text = $sheet->getCell('B1')->getValue();
        $C1text = $sheet->getCell('C1')->getValue();
        if($type=='uploadRoom' && (strpos($A1text,'意：楼栋编号/单元编号/楼层编号/房间编号必须填写阿拉伯数字') || ( empty($A1text) && empty($B1text) && empty($C1text)))){
            $rowNum=2;
        }
        foreach ($columnNames as $col){
            $temp = [];
            $text = $sheet->getCell($col.$rowNum)->getValue();
            if (empty($text)){
                continue;
            }
            $text = ($text instanceof RichText) ? trim($text->getPlainText()) : trim($text);
            $temp['key']    = $col;
            $temp['val']    = $text;
            $excelCloumns[] = $temp;
            $colTitle[] =  $text;
        }
        $sourceMapFields=$this->getSourceMapFieldsMethod($type);
        foreach ($sourceMapFields as &$source){
            foreach ($colTitle as $title){
                $title=trim($title);
                if ($source['key'] ==$title ){
                    $source['selected'] = true;
                }
            }
        }
        return ['excelCloumns'=>$excelCloumns,'sourceMapFields'=>$sourceMapFields,'type'=>$type];
    }
    
    //todo 触发导入 走队列执行
    public function triggerImportFile($type,$param){
        if(!isset($this->command[$type])){
            throw new \think\Exception('暂无该类型参数');
        }
        $param['command']=$this->command[$type];
        $param['type']=$type;
        $queueId = $this->buildingImportQueue($param);
        return ['queueId'=>$queueId,'type'=>$type];
    }
    
    //todo 获取当前导入的进度条
    public function refreshProcess($type,$param){
        $processCacheKey = $this->getProcessCacheKeyMethod($param['village_id'],$type);
        try {
            $processInfo = $this->queueReids()->get($processCacheKey);
        }catch (\Exception $e) {
            throw new \think\Exception('请先配置Redis');
        }
        $process = intval($processInfo['process']);
        if ($process == 100){
            $this->queueReids()->delete($processCacheKey);
        }
        return ['process'=>$process,'processCacheKey'=>$processCacheKey,'processInfo'=>$processInfo,'type'=>$type];
    }
    
    //todo 查询导入记录
    public function getVillageImportRecord($param){
        $where=[
            ['village_id','=',$param['village_id']],
            ['type','=',$param['type']],
        ];
        $field = 'file_name,file_url,duration,import_msg,status,add_time';
        $order='id DESC';
        $result= (new NewBuildingService())->getHouseVillageImportRecordMethod($where,$field,$order,$param['page'],$param['limit']);
        if($result['list']){
            foreach ($result['list'] as &$v){
                $v['add_time']=date('Y-m-d H:i:s',$v['add_time']);
                $v['file_url']=$v['file_url'] ?  cfg('site_url').'/'.$v['file_url'] : '';
            }
        }
        $data['list'] = $result['list'];
        $data['total_limit'] = $param['limit'];
        $data['count'] = $result['count'];
        return $data;
    }

    //todo 获取对应导入模板示例
    public function getImportTemplateUrl($type,$param){
        if(!isset($this->importTemplateUrl[$type])){
            throw new \think\Exception('该类型不存在');
        }
        $url=cfg('site_url').$this->importTemplateUrl[$type];
        return ['url'=>$url];
    }
    
}