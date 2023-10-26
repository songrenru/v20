<?php
/**
 * 店铺订单
 * Created by PhpStorm.
 * User: chenxiang
 * Date: 2020/6/1 11:32
 */

namespace app\common\model\service;

use app\common\model\db\StoreOrder;

class StoreOrderService
{
    public $storeOrderObj = null;
    public function __construct()
    {
        $this->storeOrderObj = new StoreOrder();
    }

    /**
     * 获取店铺订单信息
     * User: chenxiang
     * Date: 2020/6/1 11:40
     * @param string $field
     * @param array $where
     * @param string $group
     * @return mixed
     */
    public function getList($field = true, $where = [], $group = '') {
        $result = $this->storeOrderObj->getList($field, $where, $group);
        return $result;
    }

    /**
     * 更新某个字段的值
     * User: chenxiang
     * Date: 2020/6/1 16:22
     * @param array $where
     * @param string $field
     * @param string $value
     * @return bool|mixed
     */
    public function setField($where = [], $field = '', $value = '') {
        if(empty($field)) {
            return false;
        }
        $result = $this->storeOrderObj->setField($where, $field, $value);
        return $result;
    }
}