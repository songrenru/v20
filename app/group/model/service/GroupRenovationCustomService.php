<?php

namespace app\group\model\service;

use app\group\model\db\GroupRenovationCustom as GroupRenovationCustomServiceModel;
use app\group\model\db\GroupRenovationCustomStoreSort;
use app\group\model\service\GroupRenovationCustomGroupSortService;

class GroupRenovationCustomService
{
    public $groupRenovationCustomServiceModel = null;

    public function __construct()
    {
        $this->groupRenovationCustomServiceModel = new GroupRenovationCustomServiceModel();
    }

    /**添加/编辑团购自定义活动推荐
     * @param array $param
     * @return string
     */
    public function addCustom($param = [])
    {
        $custom_id = $param['custom_id'] ?? 0;
        $title = $param['title'] ?? '';
        $sub_title = $param['sub_title'] ?? '';
        $cat_id = $param['cat_id'] ?? 0;
        $sort = $param['sort'] ?? 0;
        $type = $param['type'] ?? 0;

        $data = [];
        $data['title'] = $title;
        $data['sub_title'] = $sub_title;
        $data['sort'] = $sort;
        $data['title'] = $title;
        $data['type'] = $type;
        if(is_array($type)){
            $data['type'] = implode(',',$type);
        }

        if ($custom_id > 0) {
            $custom_info = $this->getOne($where = ['title' => $title, 'cat_id' => $cat_id]);
            if (!empty($custom_info) && $custom_info['custom_id'] != $custom_id) {
                throw new \think\Exception('店铺活动推荐标题已存在');
            }
            $custom_info = $this->getOne($where = ['custom_id' => $custom_id]);
            $where = ['custom_id' => $custom_id];
            $data['old_type'] = $custom_info['type'];//编辑前先保存原来的团购类型，用于店铺管理去管理，如果团购类型有编辑，则删除原来的店铺排序
            $rs = $this->updateThis($where, $data);
            if ($rs!==false) {
                $msg = '编辑成功';
            } else {
                $msg = '编辑失败';
            }
        } else {
            $count = $this->groupRenovationCustomServiceModel->getCount($where = ['cat_id' => $cat_id]);
            if ($count > 3) {
                throw new \think\Exception('店铺活动推荐最多允许添加4个');
            }
            $custom_info = $this->getOne($where = ['title' => $title, 'cat_id' => $cat_id]);
            if (!empty($custom_info)) {
                throw new \think\Exception('店铺活动推荐标题已存在');
            }
            //新增
            $data['cat_id'] = $cat_id;
            $data['create_time'] = time();
            $data['old_type'] = $data['type'];
            $rs = $this->add($data);
            if ($rs) {
                $msg = '添加成功';
            } else {
                $msg = '添加失败';
            }
            //获取新增信息id
            $custom_info = $this->getOne($data);
            $custom_id = $custom_info['custom_id'];
        }
        $res = (new GroupRenovationCustomStoreSortService())->getSome($where = ['custom_id' => $custom_id]);
        if (empty($res)|| $custom_info['type'] != $custom_info['old_type']) {
            (new GroupRenovationCustomStoreSort())->del($where = ['custom_id' => $custom_id]);
            (new GroupRenovationCustomStoreSortService())->addCustomStoreSort($custom_id);
        }
        return $msg;
    }

    /**删除团购自定义活动推荐
     * @param array $param
     * @return string
     */
    public function delCustom($param = [])
    {
        $custom_id = $param['custom_id'] ?? 0;
        $cat_id = $param['cat_id'] ?? 0;
        $where = ['custom_id' => $custom_id];
        $this->groupRenovationCustomServiceModel->del($where);
        if ($cat_id == 0) {// 首页 删除店铺
            (new GroupRenovationCustomStoreSort())->del($where);
        } else {// 发现页 删除商品
            (new GroupRenovationCustomGroupSortService())->del($custom_id);
        }

        return true;
    }

    /**团购自定义活动推荐基本信息
     * @param array $param
     * @return string
     */
    public function getRenovationCustomInfo($param = [])
    {
        $custom_id = $param['custom_id'] ?? 0;
        $where = ['custom_id' => $custom_id];
        $info = $this->getOne($where);
        $info['type'] = !empty($info['type']) ? explode(',',$info['type']) : [];
        $returnArr['detail'] = $info;
        return $returnArr;
    }

    /**
     * 获得商品列表
     * @param $where
     * @return array
     */
    public function getList($param = [])
    {
        $page = request()->param('page', '0', 'intval');//页码

        $start = 0;
        $pageSize = 0;
        if ($page) {
            $pageSize = isset($param['pageSize']) ? $param['pageSize'] : 10;//每页显示数量
            $start = ($page - 1) * $pageSize;
        }

        $condition = [];

        // 排序
        $order = [
            'sort' => 'DESC',
        ];
        $condition[] = ['cat_id', '=', $param['cat_id']];

        // 商品列表
        $list = $this->getSome($condition, true, $order, $start, $pageSize);
        $count = $this->groupRenovationCustomServiceModel->getCount($condition);

        // 查看分类相关信息
        $catIdArr = [];
        foreach ($list as $value) {
            if ($value['type'] != 0) {
                $catIdArr[$value['type']] = $value['type'];
//                $typeArr = explode(",", $value['type']);
//                foreach ($typeArr as $item) {
//                    $catIdArr[$item] = $item;
//                }
                $typeArr = explode(",", $value['type']);
                foreach ($typeArr as $item) {
                    $catIdArr[$item] = $item;
                }
            }
        }
        $catIdArr = array_values($catIdArr);
        $catArr = [];
        if (!empty($catIdArr)) {
            $where = [
                ['cat_id', 'in', implode(',', $catIdArr)]
            ];
            $catArr = (new GroupCategoryService())->getSome($where);
            $catArr = array_column($catArr, NULL, 'cat_id');
        }

        foreach ($list as &$_group) {
            if ($_group['type'] != 0) {
//                $typeArr = explode(",", $_group['type']);
//                $category = [];
//                foreach ($typeArr as $value) {
//                    isset($catArr[$value]['cat_name']) ? array_push($category, $catArr[$value]['cat_name']) : '';
//                }
//                $_group['category'] = implode(",", $category);
                $_group['category'] = isset($catArr[$_group['type']]['cat_name']) ? $catArr[$_group['type']]['cat_name'] : '全部';
                $typeArr = explode(",", $_group['type']);
                $category = [];
                foreach ($typeArr as $value) {
                    isset($catArr[$value]['cat_name']) ? array_push($category, $catArr[$value]['cat_name']) : '';
                }
                $_group['category'] = implode(",", $category);
                //$_group['category'] = isset($catArr[$_group['type']]['cat_name']) ? $catArr[$_group['type']]['cat_name'] : '全部';
            } else {
                $_group['category'] = '全部';
            }
        }

        $returnArr['list'] = $list;
        $returnArr['count'] = $count;
        return $returnArr;
    }

    /**
     * 添加一条记录
     * @param $data array 数据
     * @return array
     */
    public function add($data)
    {
        $id = $this->groupRenovationCustomServiceModel->insertGetId($data);
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
            $result = $this->groupRenovationCustomServiceModel->insertAll($data);
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

        try {
            $result = $this->groupRenovationCustomServiceModel->where($where)->update($data);
        } catch (\Exception $e) {
            return false;
        }

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

        $result = $this->groupRenovationCustomServiceModel->getOne($where, $order);
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
        try {
            $result = $this->groupRenovationCustomServiceModel->getSome($where, $field, $order, $page, $limit);
        } catch (\Exception $e) {
            return [];
        }

        return $result->toArray();
    }
}