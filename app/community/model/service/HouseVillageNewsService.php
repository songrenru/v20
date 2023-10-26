<?php


namespace app\community\model\service;

use app\community\model\db\HouseVillageNews;
use app\community\model\db\HouseVillageNewsReply;
use app\community\model\db\HouseVillageNewsCategory;

class HouseVillageNewsService
{
    private $houseVillageNewsModel = '';
    private $houseVillageNewReplyModel = '';
    private $houseVillageNewsCategoryModel = '';

    /**
     * 初始化
     * HouseVillageNewsService constructor.
     */
    public function __construct()
    {
        $this->houseVillageNewReplyModel = new HouseVillageNewsReply();
        $this->houseVillageNewsCategoryModel = new HouseVillageNewsCategory();
        $this->houseVillageNewsModel = new HouseVillageNews();
    }

    /**
     * 获取新闻列表
     * @author lijie
     * @date_time 2020/08/17 17:43
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
    public function getNewsLists($where,$field=true,$page=1,$limit=10,$order='news_id DESC')
    {
        $data = $this->houseVillageNewsModel->getLists($where,$field,$page,$limit,$order);
        if($data && !$data->isEmpty()){
            $data=$data->toArray();
            foreach ($data as $k=>$v){
                $data[$k]['add_time'] = date('Y-m-d H:i:s',$v['add_time']);
                $data[$k]['content'] = htmlspecialchars_decode(replace_file_domain_content($v['content']));
            }
        }else{
            $data=array();
        }
        return $data;
    }

    /**
     * 获取新闻分类列表
     * @author lijie
     * @date_time 2020/08/17 17:43
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
    public function getNewsCategoryLists($where,$field=true,$page=1,$limit=10,$order='cat_sort DESC')
    {
        $data = $this->houseVillageNewsCategoryModel->getLists($where,$field,$page,$limit,$order);
        return $data;
    }

    /**
     * 新闻详情
     * @author lijie
     * @date_time 2020/08/18 10:00
     * @param $where
     * @param $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getNewsDetail($where,$field,$order='news_id ASC')
    {
        $data = $this->houseVillageNewsModel->getOne($where,$field,$order);
        if($data){
            $data['content'] = htmlspecialchars_decode(replace_file_domain_content($data['content']));
            if($data['add_time'])
                $data['add_time'] = date('Y-m-d H:i:s',$data['add_time']);
        }
        return $data;
    }

    /**
     * 获取新闻评论列表
     * @author lijie
     * @date_time 2020/08/17 17:46
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
    public function getNewsReplyLists($where,$field=true,$page=1,$limit=10,$order='r.pigcms_id DESC')
    {
        $data = $this->houseVillageNewReplyModel->getLists($where,$field,$page,$limit,$order);
        foreach ($data as $k=>$v){
            $data[$k]['add_time'] = date('Y-m-d H:i:s',$v['add_time']);
            if(empty($v['avatar']))
                $data[$k]['avatar'] = cfg('site_url').'/v20/public/static/community/images/avatar_reply.png';
        }
        return $data;
    }

    /**
     * 删除新闻评论
     * @author lijie
     * @date_time 2020/08/18 10:06
     * @param $where
     * @return bool
     * @throws \Exception
     */
    public function delReply($where)
    {
        $res = $this->houseVillageNewReplyModel->delOne($where);
        return $res;
    }

    /**
     * 评论前台是否展示
     * @author lijie
     * @date_time 2020/08/20 15:42
     * @param $where
     * @param $data
     * @return bool
     */
    public function isShowReply($where,$data)
    {
        $res = $this->houseVillageNewReplyModel->saveOne($where,$data);
        return $res;
    }

    public function getNewsCount($where=[])
    {
        return $this->houseVillageNewsModel->where($where)->count();
    }
}