<?php
/**
 * 社区小区物业费积分设置表
 * Created by PhpStorm.
 * Author: wanziyang
 * Date Time: 2020/4/23 15:44
 */

namespace app\community\model\db;

use think\Model;
use think\facade\Db;

class VillageUserMoneyLog extends Model{
    
    /**
     * 获取单个小区物业费积分设置
     * @author:zhubaodi
     * @date_time: 2022/6/6 14:30
     * @param array $where 查询条件
     * @param bool $field 需要查询的字段 默认查询所有
     * @return array
     */
    public function getOne($where,$field =true){
        $info = $this->field($field)->where($where)->find();
        return $info;
    }

    /**
     * 修改信息
     * @author:zhubaodi
     * @date_time: 2022/6/6 14:30
     * @param array $where 改写内容的条件
     * @param array $save 修改内容
     * @return bool
     */
    public function saveOne($where, $save) {
        $set_info = $this->where($where)->save($save);
        return $set_info;
    }
    /**
     * 插入数据并获取插入id
     * @author:zhubaodi
     * @date_time: 2022/6/6 14:30
     * @param array $data
     * @return int
    **/
    public function addOne($data)
    {
        $insert = $this->insertGetId($data);
        return $insert;
    }

    /**
     * 查询街道业主列表
     * @author: zhubaodi
     * @date : 2022/06/07
     * @param $where
     * @param bool $field
     * @param string $order
     * @param int $page
     * @param int $page_size
     * @return mixed
     */
    public function getList($where,$field =true,$order='id ASC',$page=0,$page_size=10) {
        $db_list = $this->field($field)->order($order);
        if ($page) {
            $db_list->page($page,$page_size);
        }
        $list = $db_list->where($where)->select();
        return $list;
    }
    
    public function getLogList($where,$field =true,$order='id ASC',$page=0,$page_size=10) {
        $db_list = $this->alias('ml')->leftJoin('user u','ml.uid = u.uid')->field($field)->order($order);
        if ($page) {
            $db_list->page($page,$page_size);
        }
        $list = $db_list->where($where)->select();
        return $list;
    }

    public function getLogCount($where) {
        $list = $this->alias('ml')->leftJoin('user u','ml.uid = u.uid')->where($where)->count();
        return $list;
    }
    /**
     *统计分组数量
     * @author: zhubaodi
     * @date : 2022/06/07
     * @param $where
     * @param $group
     * @return mixed
     */
    public function getCount($where) {
        $list = $this->where($where)->count();
        return $list;
    }
}
