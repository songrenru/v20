<?php
/**
 * 团购商品购买和浏览数及用户记录
 * Author: 衡婷妹
 * Date Time: 2021/05/28 11:58
 */

namespace app\group\model\service;

use app\group\model\db\GroupRecord;
use think\facade\Db;

class GroupRecordService
{
    public $groupRecordModel = null;

    public function __construct()
    {
        $this->groupRecordModel = new GroupRecord();
    }

    /**
     * 添加团购商品购买和浏览数及用户记录
     * @param $groupId
     * @param int $uid
     * @param int $merId
     * @param int $type 1浏览 2购买 3分享
     * @return bool
     */
    public function groupRecord($groupId, $uid, $merId=0, $type=1) {
        if ($uid && $groupId) {
            // 同一用户不重复记入次数
            $where = [
                'group_id' => $groupId,
                'mer_id' => $merId,
                'uid' => $uid,
                'type' => $type,
            ];
            $info = $this->getOne($where);
            if (!$info) {
                $record = array(
                    'group_id' => $groupId,
                    'mer_id' => $merId,
                    'uid' => $uid,
                    'type' => $type,
                    'add_time' => time(),
                );
                $this->add($record);
            }
        }
        return true;
    }

    /**
     * 添加一条记录
     * @param $data array 数据
     * @return array
     */
    public function add($data)
    {
        $id = $this->groupRecordModel->insertGetId($data);
        if (!$id) {
            return false;
        }

        return $id;
    }

    /**
     *批量插入数据
     * @param $data array
     * @return array
     */
    public function addAll($data)
    {
        if (empty($data)) {
            return false;
        }

        try {
            // insertAll方法添加数据成功返回添加成功的条数
            $result = $this->groupRecordModel->insertAll($data);
        } catch (\Exception $e) {
            return false;
        }

        return $result;
    }

    /**
     * 更新数据
     * @param $data array
     * @return array
     */
    public function updateThis($where, $data)
    {
        if (empty($data) || empty($where)) {
            return false;
        }

        $result = $this->groupRecordModel->where($where)->update($data);
        return $result;
    }

    /**
     *获取一条数据
     * @param $where array
     * @return array
     */
    public function getOne($where, $order = [])
    {
        if (empty($where)) {
            return false;
        }

        $result = $this->groupRecordModel->getOne($where, $order);
        if (empty($result)) {
            return [];
        }

        return $result->toArray();
    }

    /**
     *获取多条数据
     * @param $where array
     * @return array
     */
    public function getSome($where, $field = true, $order = true, $page = 0, $limit = 0)
    {
        $start = ($page-1)*$limit;
        $result = $this->groupRecordModel->getSome($where, $field, $order, $start, $limit);
        if(empty($result)){
            return [];
        }

        return $result->toArray();
    }

    /**
     * 根据条件返回
     * @param $where array 条件
     * @return array
     */
    public function getCount($where){
        $count = $this->groupRecordModel->getCount($where);
        if(!$count) {
            return 0;
        }
        return $count;
    }
}