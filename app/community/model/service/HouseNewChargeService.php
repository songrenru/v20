<?php

/**
 * Created by PhpStorm.
 * Author: zhubaodi
 * Date Time: 2021/6/11 11:19
 */

namespace app\community\model\service;
use customization\customization;

class HouseNewChargeService
{
    use customization;
    //物业收费类别
    public $charge_type = [
        'property' => '物业费',
        'water' => '水费',
        'electric' => '电费',
        'gas' => '燃气费',
        'parking_management' => '车位管理费',
        'park' => '停车费',
        'park_new' => '新版停车费',
        'elevator' => '电梯能耗费',
        'heating' => '暖气费',
        'deposit' => '租金押金',
        'waste_collection' => '垃圾清运费',
        'ground' => '场地费',
        'card_cost' => '证卡工本费',
        'renovation_assure' => '装修保证金',
        'aircondition' => '空调费',
        'paid_serve' => '有偿服务费',
        'public_lighting' => '公共照明能耗费',
        'overhead_rent' => '架空层租金',
        'ic_card' => 'IC卡费',
        'septic_tank' => '化粪池清理费',
        'non_motor_vehicle' => '非机动车停车费',
        'other' => '其他',
        'qrcode' => '二维码收款',
        'deposit_new' => '押金',
        'pile' => '汽车充电收费',
    ];
    public $charge_type_arr = [
        ['key' => 'property','value' => '物业费'],
        ['key' => 'water','value' => '水费'],
        ['key' => 'electric','value' => '电费'],
        ['key' => 'gas','value' => '燃气费'],
        ['key' => 'parking_management','value' => '车位管理费'],
        ['key' => 'park','value' => '停车费'],
        ['key' => 'park_new','value' => '新版停车费'],
        ['key' => 'elevator','value' => '电梯能耗费'],
        ['key' => 'heating','value' => '暖气费'],
        ['key' => 'deposit','value' => '租金押金'],
        ['key' => 'waste_collection','value' => '垃圾清运费'],
        ['key' => 'ground','value' => '场地费'],
        ['key' => 'card_cost','value' => '证卡工本费'],
        ['key' => 'renovation_assure','value' => '装修保证金'],
        ['key' => 'aircondition','value' => '空调费'],
        ['key' => 'paid_serve','value' => '有偿服务费'],
        ['key' => 'public_lighting','value' => '公共照明能耗费'],
        ['key' => 'overhead_rent','value' => '架空层租金'],
        ['key' => 'ic_card','value' => 'IC卡费'],
        ['key' => 'septic_tank','value' => '化粪池清理费'],
        ['key' => 'non_motor_vehicle','value' => '非机动车停车费'],
        ['key' => 'other','value' => '其他'],
        ['key' => 'qrcode','value' => '二维码收款'],
        ['key' => 'deposit_new','value' => '押金'],
        ['key' => 'pile','value' => '汽车充电收费'],
    ];

    public $charge_img = [
        'property' => '/static/community/house_new/wuyefei.png',
        'water' => '/static/community/house_new/shufei.png',
        'electric' => '/static/community/house_new/dianfei.png',
        'gas' => '/static/community/house_new/rangqifei.png',
        'parking_management' => '/static/community/house_new/cheweiguanlifei.png',
        'park' => '/static/community/house_new/tingchefei.png',
        'park_new' => '/static/community/house_new/tingchefei.png',
        'elevator' => '/static/community/house_new/diantinenghaofei.png',
        'heating' => '/static/community/house_new/nuanqifei.png',
        'deposit' => '/static/community/house_new/zujin.png',
        'waste_collection' => '/static/community/house_new/lajiqingyufei.png',
        'ground' => '/static/community/house_new/changdi.png',
        'card_cost' => '/static/community/house_new/zhengshu.png',
        'renovation_assure' => '/static/community/house_new/zhuangxiubaozhengjin.png',
        'aircondition' => '/static/community/house_new/kongtiaofei.png',
        'paid_serve' => '/static/community/house_new/fuwufei.png',
        'public_lighting' => '/static/community/house_new/gonggongzhaoming.png',
        'overhead_rent' => '/static/community/house_new/jiakongceng.png',
        'ic_card' => '/static/community/house_new/ic.png',
        'septic_tank' => '/static/community/house_new/huafenchi.png',
        'non_motor_vehicle' => '/static/community/house_new/huafenchi.png',
        'other' => '/static/community/house_new/qita.png',
        'qrcode' => '/static/community/house_new/qrcode.png',
        'deposit_new' => '/static/community/house_new/depositNew.png',
        'pile' => '/static/community/house_new/newpile.png',

    ];

    public function __construct()
    {
        $this->customerFuncCustomized();
    }

    private function customerFuncCustomized(){
        if($this->hasMeijuWuyeCustomized()){
            $this->charge_type['public_electric']='公摊电费';
            $this->charge_type['public_water']='公摊水费';
            $this->charge_type_arr[]=['key' => 'public_electric','value' => '公摊电费'];
            $this->charge_type_arr[]=['key' => 'public_water','value' => '公摊水费'];
            $this->charge_img['public_electric']='/static/community/house_new/dianfei.png';
            $this->charge_img['public_water']='/static/community/house_new/shufei.png';
        }
    }
    
    public function getType($type)
    {
        return $this->charge_type[$type]??'';
    }    
}