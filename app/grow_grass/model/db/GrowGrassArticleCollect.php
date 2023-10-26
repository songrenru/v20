<?php
/**
 * 种草文章收藏表model
 * Author: hengtingmei
 * Date Time: 2021/5/15 11:11
 */

namespace app\grow_grass\model\db;
use think\Model;
class GrowGrassArticleCollect extends Model {

    use \app\common\model\db\db_trait\CommonFunc;

    /**
     * 获得用户收藏的列表
     * User: hengtingmei
     * Date: 2021/05/18 
     * @param array $where
     * @param string $field
     * @param array $order
     * @param int $page
     * @param int $pageSize
     * @return Model
     */
    public function getCollectList($where, $field='c.*,s.*,u.*', $order=[], $page=1, $pageSize=10){
        $prefix = config('database.connections.mysql.prefix');
        $res = $this->alias('c')
            ->field($field)
            ->join($prefix.'grow_grass_article a','`a`.`article_id`=`c`.`article_id`')
            ->join($prefix.'user u','`u`.`uid`=`a`.`uid`')
            ->where($where)
            ->where(['a.status' => 20])
            ->where(['a.is_del'=> 0])
            ->where(['a.is_system_del'=> 0])
            ->order($order)
            ->page($page,$pageSize)
            ->select();
        return $res;
    }

    /**
     * 获得用户收藏的总数
     * User: hengtingmei
     * Date: 2021/08/02
     * @param array $where
     * @return Model
     */
    public function getCount($where){
        $prefix = config('database.connections.mysql.prefix');
        $res = $this->alias('c')
            ->join($prefix.'grow_grass_article a','`a`.`article_id`=`c`.`article_id`')
            ->where($where)
            ->where(['a.status' => 20])
            ->where(['a.is_del'=> 0])
            ->where(['a.is_system_del'=> 0])
            ->count();
        return $res;
    }
}