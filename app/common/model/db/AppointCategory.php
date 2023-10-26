<?php
/**
 * AppointCategory.php
 * 文件描述
 * Create on 2020/11/18 15:33
 * Created by zhumengqun
 */

namespace app\common\model\db;

use \think\Model;

class AppointCategory extends Model
{
    /**
     * @return array
     * 获取全部分类
     */
    public function getCategory()
    {
        $arr = $this->field(true)->where(['cat_status' => 1])->order('cat_sort DESC')->select();
        if (!empty($arr)) {
            return $arr->toArray();
        } else {
            return [];
        }
    }

    /**
     * @param $where
     * @return array
     * 根据条件获取一个
     */
    public function getOne($where)
    {
        $arr = $this->field(true)->where($where)->find();
        if (!empty($arr)) {
            return $arr->toArray();
        } else {
            return [];
        }
    }
}