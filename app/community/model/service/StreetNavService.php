<?php
/**
 * 街道导航相关
 * @author weili
 * @date 2020/9/9
 */

namespace app\community\model\service;

use app\community\model\db\AreaStreetNav;
class StreetNavService
{
    /**
     * Notes: 获取街道导航列表
     * @author: weili
     * @datetime: 2020/9/9 18:24
     * @param $street_id
     * @param int $page
     * @param int $limit
     * @return mixed
     */
    public function getList($street_id,$page=1,$limit=20,$changeStatus=false)
    {
        $dbStreetNav = new AreaStreetNav();
        $where[] = ['street_id','=',$street_id];
        if($changeStatus){
            $where[] = ['status','<>',4];
        }else{
            $where[] = ['status','=',1];
        }
        $count = $dbStreetNav->getCount($where);
        $street_nav_list = $dbStreetNav->getList($where,true,'sort desc,id desc',$page,$limit);
        foreach($street_nav_list as $k=>&$v){
            $v['add_time'] = date('Y-m-d H:i:s',$v['add_time']);
            $v['img']  = dispose_url($v['img']);
            if ($changeStatus && isset($v['status']) && !$v['status']) {
                $v['status'] = 2;
            }
        }
        $data['list'] = $street_nav_list;
        $data['count'] = $count;
        return $data;
    }

    /**
     * Notes: 添加、编辑街道导航
     * @param $data
     * @param $id
     * @return mixed
     * @throws \think\Exception
     * @author: weili
     * @datetime: 2020/9/9 19:06
     */
    public function saveNav($data,$id)
    {
        $dbStreetNav = new AreaStreetNav();
        if($id) {
            $where[] = ['id', '=', $id];
            $info = $dbStreetNav->getFind($where);
            $res = $dbStreetNav->updateFind($where, $data);
            if ($res) {
                if (array_key_exists('pic',$data) && $data['pic'] && $info['pic']) {
                    unlink('./upload/adver/' . $info['pic']);
                }
                return $data;
            } else {
                throw new \think\Exception('编辑失败');
            }
        }else{
            $res = $dbStreetNav->insertFind($data);
            if($res){
                return $data;
            }else{
                throw new \think\Exception('添加失败');
            }
        }
    }

    /**
     * Notes: 获取街道导航详情
     * @param $id
     * @return mixed
     * @throws \think\Exception
     * @author: weili
     * @datetime: 2020/9/9 19:07
     */
    public function getStreetNav($id)
    {
        $dbStreetNav = new AreaStreetNav();
        $where[] = ['id','=',$id];
        $info = $dbStreetNav->getFind($where);
        if(!$info){
            throw new \think\Exception('该广告不存在');
        }
        $info['img'] = dispose_url($info['img']);
        $data['info'] = $info;
        return $data;
    }

    /**
     * Notes: 删除街道导航
     * @param $id
     * @return bool
     * @author: weili
     * @datetime: 2020/9/9 19:07
     */
    public function del($id)
    {
        $dbStreetNav = new AreaStreetNav();
        $where[] = ['id','=',$id];
        $info = $dbStreetNav->getFind($where);
        $data['status'] = 4;
        $res = $dbStreetNav->updateFind($where,$data);
        return $res;
    }
}