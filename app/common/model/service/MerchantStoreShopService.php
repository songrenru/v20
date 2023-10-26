<?php
/**
 * 商家 店铺快店配置
 * Created by PhpStorm.
 * User: chenxiang
 * Date: 2020/6/1 14:48
 */

namespace app\common\model\service;

use app\common\model\db\MerchantStoreShop;

class MerchantStoreShopService
{
    public $merchantStoreShopObj = null;

    public function __construct()
    {
        $this->merchantStoreShopObj = new MerchantStoreShop();
    }

    /**
     * 获取快店配置
     * User: chenxiang
     * Date: 2020/6/1 15:01
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getOne($where = [], $field = true)
    {
        $result = $this->merchantStoreShopObj->getOne($where, $field);
        return $result;
    }

    /**
     * @param $where
     * @param $data
     * 朱梦群
     * 更新店铺评分
     */
    public function updateOne($where, $data)
    {
        if(empty($where) || empty($data)){
            throw new \think\Exception('参数缺失');
        }
        $result = $this->merchantStoreShopObj->updateOne($where, $data);
        return $result;
    }
}