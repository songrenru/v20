<?php
/**
 * 商户店铺
 * Created by PhpStorm.
 * User: wangchen
 * Date: 2021/9/1
 */

namespace app\common\model\service;

use app\common\model\db\MerchantStore;

class MerchantStoreService
{
    public $merchantObj = null;

    /**
     * User: wangchen
     * Date: 2021/9/1
     */
    public function getCount($mer_id) {
        if(empty($mer_id)){
            return [];
        }
        $result = (new MerchantStore())->where(['mer_id'=>$mer_id])->count();
        return $result;
    }
}