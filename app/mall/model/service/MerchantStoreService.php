<?php
/**
 * MerchantStoreService.php
 * 店铺
 * Create on 2020/9/11 11:18
 * Created by zhumengqun
 */

namespace app\mall\model\service;

use app\mall\model\db\MerchantStore;

class MerchantStoreService
{
    public function __construct()
    {
        $this->storeModel = new MerchantStore();
    }

    /**
     * 根据商家id获得店铺
     * @param $mer_id
     * @return array
     */
    public function getStoreByMerId($mer_id)
    {
        $where = ['mer_id' => $mer_id, 'status' => 1];
        $arr = $this->storeModel->getStoreByCondition($where);
        if (!empty($arr)) {
            return $arr;
        } else {
            return [];
        }
    }

    /**
     * 通过店铺id获得店铺信息
     * @param $store_id
     * @return array
     */
    public function getStoreByStoreId($store_id)
    {
        $where = ['store_id' => $store_id, 'status' => 1];
        $arr = $this->storeModel->getStoreByCondition($where);
        if (!empty($arr)) {
            return $arr;
        } else {
            return [];
        }
    }
    public function getOne($store_id)
    {
        $where = ['store_id' => $store_id, 'status' => 1];
        $arr = $this->storeModel->getOne($where);
        if (!empty($arr)) {
            return $arr;
        } else {
            return [];
        }
    }
    public function getStoreList($where,$page,$pageSize)
    {
        $field = 'name,store_id';
        $arr = $this->storeModel->getStoreList($where,$field,$page,$pageSize);
        if (!empty($arr)) {
            return $arr;
        } else {
            return [];
        }
    }
    public function getStoreList1($where)
    {
        $field = 'name,store_id';
        $arr = $this->storeModel->getStoreList1($where,$field);
        if (!empty($arr)) {
            return $arr;
        } else {
            return [];
        }
    }
}