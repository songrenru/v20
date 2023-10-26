<?php
/**
 * 缓存
 * User: 衡婷妹
 * Date: 2020/09/26 11:30
 */

namespace app\common\model\service;

use app\common\model\db\FdumpSql;
//use think\facade\Db;

class FdumpSqlService
{
    public $fdumpSqlModel = null;
    public function __construct()
    {
        $this->fdumpSqlModel = new FdumpSql();
    }


    /**
     * 添加记录
     * @author: 衡婷妹
     * @date: 2020/09/26
     */
    public function add($data)
    {
        $id = $this->fdumpSqlModel->insertGetId($data);
        if(!$id) {
            return false;
        }

        return $id;
    }
}