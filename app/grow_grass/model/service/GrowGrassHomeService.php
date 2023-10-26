<?php


namespace app\grow_grass\model\service;


use app\common\model\db\Config;
use app\grow_grass\model\db\GrowGrassArticleLike;

class GrowGrassHomeService
{
    /**
     * @return mixed
     * 分类栏
     */
    public function categoryList()
    {
        $where = [['mc.cat_fid', '=', 0], ['g.is_del', '=', 0], ['g.status', '=', 1]];
        $field = "g.name,g.category_id";
        $order = "g.sort desc";
        $assign = (new GrowGrassCategoryService())->indexCategoryList($where, $field, $order);//分类
        array_unshift($assign, ['name' => '附近', 'category_id' => 0]);
        return $assign;
    }

    /**
     * @param $param
     * @return mixed
     * 首页文章列表
     */
    public function articleList($param)
    {
        $list = (new GrowGrassArticleService())->getArticleByCategoryList($param);
        return $list;
    }

    /**
     * 获取种草首页分享信息
     * @return array|null
     */
    public function shareInfo(){
        $list = (new Config())->field('name,value')->where(['gid'=>120,'status'=>1])->select();
        $share_info = [];
        foreach ($list as $item){
            if(in_array($item['name'],array('grow_grass_share_title','grow_grass_share_desc','grow_grass_share_img'))){
                $share_info[$item['name']] = $item['value']?:'';
                if($item['name']=='grow_grass_share_img'){
                    $share_info[$item['name']] = $item['value']?replace_file_domain($item['value']):'';
                }
            }
        }
        $share_info = $share_info?:null;
        return $share_info;
    }

}