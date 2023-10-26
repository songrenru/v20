<?php
/**
 * 优惠券发放
 * Created by PhpStorm.
 * User: chenxiang
 * Date: 2020/6/1 19:40
 */

namespace app\common\model\service;

use app\common\model\db\SystemCouponHadpull;

class SystemCouponHadpullService
{
    public $systemCouponHadpullObj = null;
    public function __construct()
    {
        $this->systemCouponHadpullObj = new SystemCouponHadpull();
    }

    /**
     * 优惠券发放计数
     * User: chenxiang
     * Date: 2020/6/1 19:45
     * @param array $where
     * @return mixed
     */
    public function countNum($where = []) {
        $result = $this->systemCouponHadpullObj->countNum($where);
        return $result;
    }

    /**
     * 新增
     * User: chenxiang
     * Date: 2020/6/1 20:06
     * @param $data
     * @return int
     */
    public function addAll($data) {
        $result = $this->systemCouponHadpullObj->addAll($data);
        return $result;
    }
}