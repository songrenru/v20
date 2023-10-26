<?php


namespace app\group\model\service;


use app\common\model\db\Config;

class GroupHomeMenuService
{
    /**
     * 附近好点是否团购首页展示
     * @param $is_show
     * @return bool
     * @throws \think\Exception
     */
    public function changeShow($is_show){
        $is_show = $is_show?1:0;
        $res = (new Config())->where(['name'=>'group_good_store_nearby'])->save(['value' => $is_show]);
        if ($res) {
            return true;
        }else{
            throw new \think\Exception('操作失败，请重试');
        }
    }

    /**
     * 获取装修渲染的信息
     * @return array|int[]
     */
    public function getShow(){
        $res = (new Config())->where(['name'=> 'group_good_store_nearby'])->find();

        $is_show = $res?intval($res['value']):0;

        $url = cfg('site_url') . '/packapp/plat/pages/group/index/home?currentPage=index';
        return ['is_show' => $is_show, 'url' => $url];
    }
}