<?php


namespace app\community\model\db;

use think\Model;

class WisdomQrcodePerson extends Model
{
    /**
     * 获取巡检人员
     * @author lijie
     * @date_time 2020/08/04 16:28
     * @param $where
     * @param bool $field
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList($where,$field=true)
    {
        $dataObj = $this->where($where)->field($field)->select();
        $data=array();
        if($dataObj && !$dataObj->isEmpty()){
            $data=$dataObj->toArray();
        }
        return $data;
    }
    
    public function getRawList($whereRaw='',$field=true)
    {
        $dataObj = $this->whereRaw($whereRaw)->field($field)->select();
        $data=array();
        if($dataObj && !$dataObj->isEmpty()){
            $data=$dataObj->toArray();
        }
        return $data;
    }
    /**
     * Notes: 获取单个数据
     * @param $where
     * @param bool $field
     * @param string $order
     * @return array|Model|null
     * @author: weili
     * @datetime: 2020/11/3 14:06
     */
    public function getFind($where,$field=true,$order='id desc')
    {
        $info = $this->where($where)->field($field)->order($order)->find();
        return $info;
    }

    public function getWisdomQrcodeCate($where,$field,$order,$page=1,$page_size=10){
        $data=$this->alias('a')
            ->leftJoin('wisdom_qrcode_cate b','b.id = a.cate_id')
            ->field($field)->where($where)->order($order)->page($page,$page_size)->select();
        return $data;
    }
}