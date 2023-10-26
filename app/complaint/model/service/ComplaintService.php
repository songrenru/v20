<?php
namespace app\complaint\model\service;

use app\common\model\db\Merchant;
use app\common\model\db\MerchantStore;
use app\common\model\db\User;
use app\complaint\model\db\Complaint;

class ComplaintService
{
    /**
     * 获取投诉类型
     * @param $param
     * @return array[]
     */
    public function getType($param){
        if($param['type']==1){
            //聊天投诉类型
            $data = [
                ['key' => 10, 'value' => '辱骂诋毁'],
                ['key' => 20, 'value' => '政治敏感'],
                ['key' => 30, 'value' => '色情淫秽'],
                ['key' => 40, 'value' => '其他'],
            ];
        }elseif($param['type']==2){
            //商家投诉类型
            $data = [
                ['key' => 50, 'value' => '品牌侵权'],
                ['key' => 60, 'value' => '虚假门店'],
                ['key' => 70, 'value' => '一店多开'],
                ['key' => 80, 'value' => '虚假宣传'],
                ['key' => 90, 'value' => '刷销量'],
            ];
        }elseif($param['type']==3){
            $data = [
                ['key' => 50, 'value' => '品牌侵权'],
                ['key' => 80, 'value' => '虚假宣传'],
                ['key' => 90, 'value' => '刷销量'],
                ['key' => 100, 'value' => '其他'],
            ];
        }else{
            $data = [
                ['key' => 10, 'value' => '辱骂诋毁'],
                ['key' => 20, 'value' => '政治敏感'],
                ['key' => 30, 'value' => '色情淫秽'],
                ['key' => 40, 'value' => '其他'],
                ['key' => 50, 'value' => '品牌侵权'],
                ['key' => 60, 'value' => '虚假门店'],
                ['key' => 70, 'value' => '一店多开'],
                ['key' => 80, 'value' => '虚假宣传'],
                ['key' => 90, 'value' => '刷销量'],
                ['key' => 100, 'value' => '其他'],
            ];
        }
        return $data;
    }

    /**
     * 添加投诉信息
     * @param $param
     * @return bool
     * @throws \think\Exception
     */
    public function complainSave($param){
        $data = [
            'uid' => $param['uid'],
            'type' => $param['type'],
            'other_type' => $param['other_type'],
            'body' => $param['body'],
            'img' => $param['img'],
            'phone' => $param['phone'],
            'create_time' => time(),
            'status' => 0
        ];
        if(($data['type']!='grow_grass'&&$data['type']!='plat')&&!$param['store_id']){
            throw new \think\Exception('店铺不能为空！');
        }
        if(($data['type']!='grow_grass'&&$data['type']!='plat')&&!$param['mer_id']){
            throw new \think\Exception('商家不能为空！');
        }
        if($data['type']!='grow_grass'&&$data['type']!='plat'){
            $data['mer_id'] = $param['mer_id'];
            $data['store_id'] = $param['store_id'];
        }
        if(!in_array($data['type'],array('mall','mall1','mall2','mall3','shop','group','appointment','grow_grass','meal','plat'))){
            throw new \think\Exception('未知的类型！');
        }
        if(!in_array($data['other_type'],array(10,20,30,40,50,60,70,80,90,100))){
            throw new \think\Exception('未知的投诉类型！');
        }
        if(!$data['body']){
            throw new \think\Exception('投诉内容不能为空！');
        }
        if(is_array($data['img'])){
            $data['img'] = implode(',',$data['img']);
        }
        $phone_preg = '/1[3-9]{1}[0-9]{9}/';
        if(!preg_match($phone_preg,$data['phone'])){
            throw new \think\Exception('手机号格式错误！');
        }
        try {
            (new Complaint())->save($data);
            return true;
        }catch (\Exception $exception){
            throw new \think\Exception($exception->getMessage());
        }
    }

    /**
     * 获取投诉列表
     * @param $param
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList($param){
        $type = $param['type']?:'';
        $keywords = $param['keywords']?:'';
        $page = $param['page']?:1;
        $page_size = $param['page_size']?:10;
        $status = $param['status'];
        $where = [];
        if($keywords){
            $where[] = ['a.phone|a.body|b.nickname','like','%'.$keywords.'%'];
        }
        if($type){
            $where[] = ['a.type','=',$type];
        }
        if(!in_array($status,array(-1,0,1))){
            throw new \think\Exception('参数错误');
        }
        if($status!=-1){
            $where[] = ['a.status','=',$status];
        }
        $list = (new Complaint())->getList($where,$page,$page_size);
        $list = $list->toArray();
        //获取商家id，店铺id
        $mer_ids = $store_ids = $mer_name = $store_name = [];
        foreach ($list['data'] as $val){
            if($val['mer_id']){
                $mer_ids[] = $val['mer_id'];
            }
            if($val['store_id']){
                $store_ids[] = $val['store_id'];
            }
        }
        if($mer_ids){
            $mer_arr = (new Merchant())->field('mer_id,name')->where([['mer_id','in',$mer_ids]])->select();
            foreach ($mer_arr as $v){
                $mer_name[$v['mer_id']] = $v['name'];
            }
        }
        if($mer_ids){
            $store_arr = (new MerchantStore())->field('store_id,name')->where([['store_id','in',$store_ids]])->select();
            foreach ($store_arr as $v){
                $store_name[$v['mer_id']] = $v['name'];
            }
        }
        $type_name = ['shop'=>'商城','mall'=>'商城','mall1'=>'商城','mall2'=>'商城','mall3'=>'商城','group'=>'团购','appointment'=>'预约','grow_grass'=>'种草','meal'=>'外卖','plat'=>'平台'];
        $other_type_name = [10=>'辱骂诋毁',20=>'政治敏感',30=>'色情淫秽',40=>'其他',50=>'品牌侵权',60=>'虚假门店',70=>'一店多开',80=>'虚假宣传',90=>'刷销量',100=>'其他'];
        foreach ($list['data'] as $key=>$value){
            $list['data'][$key]['company'] = '';
            if($value['mer_id']&&isset($mer_name[$value['mer_id']])){
                $list['data'][$key]['company'] = $mer_name[$value['mer_id']];
            }
            if($value['store_id']&&isset($store_name[$value['store_id']])){
                $list['data'][$key]['company'] = $list['data'][$key]['company']?$list['data'][$key]['company'].'/'.$store_name[$value['store_id']]:$store_name[$value['store_id']];
            }
            $list['data'][$key]['create_time'] = date('Y-m-d H:i:s',$value['create_time']);
            $list['data'][$key]['type'] = $type_name[$value['type']]??'';
            $list['data'][$key]['other_type'] = $other_type_name[$value['other_type']]??'';
            $list['data'][$key]['img_arr'] = [];
            if($value['img']){
                $img_arr = explode(',',$value['img']);
                foreach ($img_arr as $vv){
                    $list['data'][$key]['img_arr'][] = replace_file_domain($vv);
                }
            }
            $list['data'][$key]['user_name'] = $value['nickname'].'('.$value['phone'].')';
        }
        return $list;
    }

    /**
     * 获取投诉信息详情
     * @param $param
     * @return array|\think\Model|null
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDetail($param){
        $id = $param['id'];
        $info = (new Complaint())->find($id);
        if(!$info){
            throw new \think\Exception('信息不存在');
        }
        $info = $info->toArray();
        //获取用户信息
        $user_info = (new User())->field('nickname')->where(['uid'=>$info['uid']])->find();
        $info['nickname'] = $user_info['nickname'];
        $type_name = ['shop'=>'商城','mall'=>'商城','mall1'=>'商城','mall2'=>'商城','mall3'=>'商城','group'=>'团购','appointment'=>'预约','grow_grass'=>'种草','meal'=>'外卖','plat'=>'平台'];
        $other_type_name = [10=>'辱骂诋毁',20=>'政治敏感',30=>'色情淫秽',40=>'其他',50=>'品牌侵权',60=>'虚假门店',70=>'一店多开',80=>'虚假宣传',90=>'刷销量',100=>'其他'];
        $info['img_arr'] = [];
        if($info['img']){
            $img_arr = explode(',',$info['img']);
            foreach ($img_arr as $vv){
                $info['img_arr'][] = replace_file_domain($vv);
            }
        }
        $info['create_time'] = date('Y-m-d H:i:s',$info['create_time']);
        $info['type'] = $type_name[$info['type']]??'';
        $info['other_type'] = $other_type_name[$info['other_type']]??'';
        $info['company'] = '';
        if($info['mer_id']){
            $mer_info = (new Merchant())->field('mer_id,name')->where([['mer_id','=',$info['mer_id']]])->find();
            $info['company'] = $mer_info?$mer_info['name']:'';
        }
        if($info['store_id']){
            $store_info = (new MerchantStore())->field('store_id,name')->where([['store_id','=',$info['store_id']]])->find();
            $info['company'] = $info['company']?($store_info?$info['company'].'/'.$store_info['name']:$store_info['name']):'';
        }
        return $info;
    }

    /**
     * 获取投诉类型
     * @param $param
     * @return array[]
     */
    public function getTypeList(){
        $data = [
            ['key' => 'shop', 'value' => '商城'],
            ['key' => 'meal', 'value' => '外卖'],
            ['key' => 'group', 'value' => '团购'],
            ['key' => 'appointment', 'value' => '预约'],
            ['key' => 'grow_grass', 'value' => '种草'],
            ['key' => 'plat', 'value' => '平台']
        ];
        return $data;
    }

    /**
     * 投诉信息修改状态
     * @param $param
     * @return bool
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function changeStatus($param){
        $id = $param['id'];
        if(!in_array($param['status'],array(0,1))){
            throw new \think\Exception('参数错误！');
        }
        $info = (new Complaint())->find($id);
        if(!$info){
            throw new \think\Exception('要修改信息不存在！');
        }
        $res = (new Complaint())->where(['id'=>$param['id']])->save(['status'=>$param['status']]);
        if($res||$res===0){
            return true;
        }else{
            throw new \think\Exception('修改信息失败！');
        }
    }

    /**
     * 删除信息
     * @param $param
     * @return bool
     * @throws \think\Exception
     */
    public function delete($param){
        $id = $param['id'];
        if(!$id){
            throw new \think\Exception('参数错误！');
        }
        $res = (new Complaint())->where(['id'=>$param['id']])->delete();
        if($res){
            return true;
        }else{
            throw new \think\Exception('删除失败！');
        }
    }
}