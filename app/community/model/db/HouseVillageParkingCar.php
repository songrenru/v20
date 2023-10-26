<?php
/**
 * 车辆信息
 * Created by PhpStorm.
 * Author: wanziyang
 * Date Time: 2020/4/25 15:27
 */

namespace app\community\model\db;

use think\Model;
use think\facade\Db;

class HouseVillageParkingCar extends Model{

    /**
     * 查询对应条件下车辆数量
     * @author: wanziyang
     * @date_time: 2020/4/25 15:01
     * @param array $where
     * @return int
     */
    public function get_village_car_num($where) {
        $count = $this->where($where)->count();
        return $count;
    }

    /**
     * 查询对应条件下车辆数量
     * @author: wanziyang
     * @date_time: 2020/4/25 15:01
     * @param array $where
     * @return int
     */
    public function get_column($where,$field) {
        $count = $this->where($where)->column($field);
        return $count;
    }

    public function getColumn($where,$column, $key = '')
    {
        $data = $this->where($where)->column($column,$key);
        return $data;
    }
    
    /**
     * 获取车辆列表
     * @author lijie
     * @date_time 2020/07/17 14:09
     * @param $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getHouseVillageParkingCarLists($where,$field=true,$page=1,$limit=15,$order='car_id DESC')
    {
        if($page == 0){
            $data = $this->where($where)->field($field)->order($order)->select();
        }else{
            $data = $this->where($where)->field($field)->page($page,$limit)->order($order)->select();
        }
        return $data;
    }

    /**
     * 根据id获取车辆详情
     * @author lijie
     * @date_time 2020/07/17 14:11
     * @param $where
     * @param $field
     * @return array|Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getHouseVillageParkingCarById($where,$field)
    {
        $data = $this->alias('pc')
            ->leftJoin('house_village_parking_position pp','pp.position_id = pc.car_position_id')
            ->where($where)
            ->field($field)
            ->find();
        return $data ;
    }

    /**
     * 添加车辆
     * @author lijie
     * @date_time 2020/07/17 14:15
     * @param $data
     * @return int|string
     */
    public function addHouseVillageParkingCar($data)
    {
        $res = $this->insert($data,true);
        return $res;
    }

    /**
     * 编辑车辆信息
     * @author lijie
     * @date_time 2020/07/17 14:16
     * @param $where
     * @param $data
     * @return bool
     */
    public function editHouseVillageParkingCar($where,$data)
    {
        fdump_api(['编辑车辆信息' => $where, 'data' => $data],'park_temp/editHouseVillageParkingCar_log',1);
        $res = $this->where($where)->save($data);
        return $res;
    }

    /**
     * 删除车辆
     * @author lijie
     * @date_time 2020/07/17 14:18
     * @param $where
     * @return bool
     * @throws \Exception
     */
    public function delHouseVillageParkingCar($where)
    {
        $res = $this->where($where)->delete();
        return $res;
    }
    public function getCarNum($where) {
        $count = $this->alias('c')->leftJoin('house_village_parking_position p','c.car_position_id=p.position_id')->where($where)->count();
        return $count;
    }


    /**
     * Notes: 获取一条
     * @param $where
     * @param $field
     * @return mixed
     * @author: zhubaodi
     * @datetime: 2021/11/3 13:37
     */
    public function getFind($where,$field=true,$order='car_id DESC')
    {
        $info = $this->where($where)->field($field)->order($order)->find();
        return $info;
}
    /**
     * 车辆详情
     * @author lijie
     * @date_time 2021/07/06
     * @param array $where
     * @param bool $field
     * @return array|Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException]
     */
    public function getOne($where=[],$field=true)
    {
        $data = $this->where($where)->field($field)->find();
        return $data;

    }


    /**
     *查询车辆关联用户
     * @author: liukezhu
     * @date : 2022/1/13
     * @param $where
     * @param bool $field
     * @return mixed
     */
    public function getLists($where,$field=true)
    {
        $data = $this->alias('c')
            ->leftJoin('house_village_bind_car b', 'b.car_id=c.car_id and b.village_id=c.village_id')
            ->leftJoin('house_village_user_bind u', 'u.pigcms_id=b.user_id')
            ->where($where)->field($field)->find();
        return $data;
    }

    /**
     *查询车辆集合
     * @author: liukezhu
     * @date : 2022/3/15
     * @param $where
     * @param bool $field
     * @return mixed
     */
    public function get_list($where,$field=true) {
        $list = $this->alias('c')
            ->leftJoin('house_village_parking_position p', 'p.position_id=c.car_position_id')
            ->leftJoin('house_village_bind_car b', 'b.car_id=c.car_id and b.village_id=c.village_id')
            ->leftJoin('house_village_user_bind u', 'u.pigcms_id=b.user_id')
            ->field($field)->where($where)->group('c.car_number')->select();
        return $list;
    }

    public function getList($where,$field=true,$page=1,$limit=15,$order='a.car_id DESC')
    {
        $data = $this->alias('a')
            ->leftJoin('house_village_parking_position b', 'a.car_position_id=b.position_id')
            ->leftJoin('house_village_parking_garage g', 'b.garage_id=g.garage_id');
        if($page == 0){
            $data = $data->where($where)->field($field)->select();
        }else{
            $data = $data->where($where)->field($field)->page($page,$limit)->order($order)->select();
        }
        return $data;
    }

    public function getCount($where) {
        $count = $this->alias('a')
            ->leftJoin('house_village_parking_position b', 'a.car_position_id=b.position_id')
            ->leftJoin('house_village_parking_garage g', 'b.garage_id=g.garage_id')
            ->where($where)->count();
        return $count;
    }


    public function getHouseBindPositionCar($where,$order='pc.car_id DESC',$field=true)
    {
        $data = $this->alias('pc')
            ->leftJoin('house_village_parking_position pp','pp.position_id = pc.car_position_id')
            ->where($where)
            ->field($field)
            ->order($order)
            ->select();
        return $data ;
    }

}