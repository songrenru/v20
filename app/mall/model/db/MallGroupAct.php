<?php


namespace app\mall\model\db;
use think\facade\Db;
use think\Model;
class MallGroupAct extends Model
{
    public function getOne($goods_id,$store_id){
        $where[] = ['','exp',Db::raw("FIND_IN_SET($goods_id,good_id)")];
        $result1=[];
        $arr= $this->where($where)->find();
        if($arr){
            $result1['act_type']=0;
            $result1['name']="活动";
            $result1['msg']="满".round($arr['goods_money'])."送".round($arr['nums'])."件";
        }
        return $result1;
    }
}