<?php
/**
 * Created by PhpStorm.
 * Author: wanziyang
 * Date Time: 2020/6/15 13:23
 */

namespace app\common\model\db;


use think\Model;
use think\facade\Db;
class PercentDetailByType extends Model
{
    /**
     * 获取单个数据信息
     * @author: wanziyang
     * @date_time:  2020/6/15 13:23
     * @param array $where 查询条件
     * @param bool $field 需要查询的字段 默认查询所有
     * @return array|null|Model
     */
    public function getOne($where,$field =true){
        $info = $this->field($field)->where($where)->find();
        return $info;
    }
}