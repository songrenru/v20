<?php
// +----------------------------------------------------------------------
// | 控制台配置
// +----------------------------------------------------------------------
return [
    // 指令定义
    'commands' => [
		'buildingImport' => 'app\command\BuildingImport',
        'unitImport' => 'app\command\UnitImport',
        'floorImport' => 'app\command\FloorImport',
        'roomImport' => 'app\command\RoomImport',
        'threeTableImport' => 'app\command\ThreeTableImport',
        'billExcelImport' => 'app\command\BillExcelImport'
    ],
];
