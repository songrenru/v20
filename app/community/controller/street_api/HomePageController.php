<?php


namespace app\community\controller\street_api;

use app\community\controller\CommunityBaseController;
use app\community\model\service\HouseAdverCategoryService;
use app\community\model\service\AreaStreetNewsService;
use app\community\model\service\AreaStreetService;
use app\community\model\service\HouseAdverService;
use app\community\model\service\StreetNavService;
use app\community\model\service\HouseVillageUserLabelService;
use app\community\model\service\PartyBranchService;

class HomePageController extends CommunityBaseController
{

    /**
     * 接到首页
     * @author lijie
     * @date_time 2020/09/10
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function index()
    {
        $street_id = $this->request->post('area_street_id',0);
//        $community_id = $this->request->post('area_community_id', 0); // 社区id
//        if (!$street_id && $community_id) {
//            $street_id = $community_id;
//        }
        if(!$street_id) {
            return api_output_error(1001,'缺少必传参数');
        }
        $site_url = cfg('site_url');
        $base_url = '/packapp/street/pages/street';
        $service_area_street = new AreaStreetService();
        $where_street = [];
        $where_street[] = ['area_id', '=', $street_id];
        $tmp_street_id=$street_id;
        $street_info = $service_area_street->getAreaStreet($where_street);
        if ($street_info && $street_info['area_type']==1) {
            $data['title'] = '社区';
            $bind_type = 1;
            $tmp_street_id=$street_info['area_pid'];
        } elseif($street_info) {
            $data['title'] = '街道';
            $bind_type = 0;
        } else {
            return api_output_error(1001,'对应街道/社区不存在');
        }
        if (isset($street_info['long']) &&  $street_info['long']) {
            $data['long'] = $street_info['long'];
        }
        if (isset($street_info['lat']) &&  $street_info['lat']) {
            $data['lat'] = $street_info['lat'];
        }
        if(isset($street_info['logo']) && $street_info['logo'])
            $data['logo'] = dispose_url($street_info['logo']);
        else
            $data['logo'] = '';
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',20);
        //-----------------------------------首页Nav----------------------------------------
        $street_nav_service = new StreetNavService();
        $nav_lists = $street_nav_service->getList($street_id,0);
        if($nav_lists['list'] && $nav_lists['count']>0){
            if(count($nav_lists['list']) > 8){
                $nav = [];
                $list = [];
                foreach ($nav_lists['list'] as $k=>&$v){
                    $v['img'] = dispose_url($v['img']);
                    if (count($nav)==8) {
                        $list[] =  $nav;
                        $nav = [];
                    }
                    $nav[] = $v;

                }
                $list[]  =  $nav;
                $data['nav'] = isset($list)?$list:[];
            }else{
                foreach ($nav_lists['list'] as $k=>&$v){
                    $v['img'] = dispose_url($v['img']);
                }
                $list = $nav_lists['list'];
                $data['nav'][] = isset($list)?$list:[];
            }
        } else {
            $data['nav'] = [];
        }
        $partyBranchService=new PartyBranchService();
        $partyBranch=$partyBranchService->getPartyBranchAll($tmp_street_id);
        $party_ids=array();
        if($partyBranch && !$partyBranch->isEmpty()){
            foreach ($partyBranch as $pvv){
                $party_ids[]=$pvv['id'];
            }
        }
        //-----------------------------------街道统计----------------------------------------
        $service_area_street = new AreaStreetService();
        $house_village_user_bind_count = $service_area_street->getStreetVillageUserNum([['a.area_id','=',$street_id],['c.status','in',[0,1]],['c.type','in',[0,1,3]]],$bind_type);//街道下居民数
        $area_community_count = $service_area_street->getStreetCommunityNum(['area_pid'=>$street_id]);//街道下社区数量
        $house_village_count = $service_area_street->getStreetVillageNum(['a.area_id'=>$street_id,'b.status'=>1],$bind_type);//街道下小区数量
        $service_house_village_user_label = new HouseVillageUserLabelService();
        if($bind_type){
            $whereArr=[['v.community_id','=',$street_id],['l.user_political_affiliation','=',1],['b.status','<>',4]];
            if($party_ids){
                $whereArr[] = ['pbu.party_id','in',$party_ids];
            }
            $house_party_member_count = $service_house_village_user_label->getCount($whereArr);//街道党员数量
        }else{
            $whereArr=[['v.street_id','=',$street_id],['l.user_political_affiliation','=',1],['b.status','<>',4]];
            if($party_ids){
                $whereArr[] = ['pbu.party_id','in',$party_ids];
            }
            $house_party_member_count = $service_house_village_user_label->getCount($whereArr);//街道党员数量
        }
        $datalist = [];
        if ($street_info && $street_info['area_type']!=1) {
            $datalist[] = ['title'=>'社区数','num'=>$area_community_count,'url'=>get_base_url('pages/street/index/communityList?area_street_id='.$street_id)];
        }
        $datalist[] = ['title'=>'小区数','num'=>$house_village_count,'url'=>get_base_url('pages/street/index/villageList?area_street_id='.$street_id)];
        $datalist[] = ['title'=>'居民数','num'=>$house_village_user_bind_count];
        $datalist[] = ['title'=>'党员数','num'=>$house_party_member_count,'url'=>get_base_url('pages/street/index/partyList?area_street_id='.$street_id.'&tab=0')];
        $data['street_Statistics']['datalist'] = $datalist;

        //-----------------------------------新闻----------------------------------------
        $area_street_news_service = new AreaStreetNewsService();
        $field = 'cat_id,cat_name';
        $news_category_lists = $area_street_news_service->getNewsCategoryLists(['area_id'=>$street_id,'cat_status'=>1],$field,'cat_sort DESC')->toArray();
        if ($news_category_lists) {
            array_unshift($news_category_lists,['cat_id'=>0,'cat_name'=>'全部']);
            $data['news_list']['news_tab'] = $news_category_lists;
        } else {
            $data['news_list']['news_tab'] = [];
        }
        /*$cat_id = $this->request->post('cat_id',0);
        $area_street_news_service = new AreaStreetNewsService();
        if($cat_id)
            $where['cat_id'] = $cat_id;
        else
            $where = array();
        $where['status'] = 1;
        $field = 'title,add_time,title_img,news_id';
        $news_list = $area_street_news_service->getNewsLists($where,$field,$page,$limit,'is_hot DESC,news_id DESC');
        $data['news_list']['news_lists'] = $news_list;*/

        //-----------------------------------街道要闻----------------------------------------
        $im_news = $area_street_news_service->getOne(['area_id'=>$street_id,'is_important_notice'=>1,'status'=>1],'news_id,title');
        if (!$im_news) {
            $im_news = (object)[];
        }
        $data['im_news'] = $im_news;

        //-----------------------------------街道社区列表----------------------------------------
        $area_community_lists = $service_area_street->getStreetLists(['area_pid'=>$street_id],'area_name,area_id,logo',$page,$limit);
        $data['street_info'] = $area_community_lists;

        //-----------------------------------优秀党员---------------------------------------------
        $where = [];
        
        if ($street_info && $street_info['area_type']==1) {
            $where[] = ['v.community_id', '=', $street_id];
        } else {
            $where[] = ['v.street_id', '=', $street_id];
        }
        if($party_ids){
            $where[] = ['pbu.party_id','in',$party_ids];
        }
        $where[] = ['l.user_political_affiliation', '=', 1];
        $where[] = ['l.is_excellent', '=', 1];
        $where[] = ['b.status','<>',4];
        $part_member_lists = $service_house_village_user_label->getPartyMemberLists($where,'l.logo,b.name,l.part_time,p.name as party_branch_name',1,2,'l.id DESC');
        $data['partyMember'] = $part_member_lists;

        //-----------------------------------首页中间轮播----------------------------------------
        $service_house_adver = new HouseAdverService();
        $service_house_adver_category = new HouseAdverCategoryService();
        $res = $service_house_adver_category->getOne(['cat_key'=>'street_app_index_center'],'cat_id');
        if(empty($res)){
            $adver_lists = array();
        }else{
            $where_adver = [];
            $where_adver[] = ['status','=',1];
            $where_adver[] = ['cat_id','=',$res['cat_id']];
            if ($street_info && $street_info['area_type']==1) {
                $where_adver[] = ['community_id','=',$street_id];
                $adver_lists = $service_house_adver->getAdverLists($where_adver,'pic,url,bg_color,name','sort DESC');
            } else {
                $where_adver[] = ['street_id','=',$street_id];
                $adver_lists = $service_house_adver->getAdverLists($where_adver,'pic,url,bg_color,name','sort DESC');
            }
            if($adver_lists){
                foreach ($adver_lists as $k=>$v){
                    if ($v['pic']) {
                        $adver_lists[$k]['pic'] = dispose_url($v['pic']);
                    }
                }
            }
        }
        $data['index_center_img'] = $adver_lists;

        //-----------------------------------四图广告----------------------------------------
        $res = $service_house_adver_category->getOne(['cat_key'=>'street_four_adver'],'cat_id');
        if(empty($res)){
            $adver_lists = array();
        }else{
            if ($street_info && $street_info['area_type']==1) {
                $adver_lists = $service_house_adver->getAdverLists([['community_id','=',$street_id],['status','=',1],['cat_id','=',$res['cat_id']]],'pic,url,bg_color,name','sort DESC');
            } else {
                $adver_lists = $service_house_adver->getAdverLists([['street_id','=',$street_id],['status','=',1],['cat_id','=',$res['cat_id']]],'pic,url,bg_color,name','sort DESC');
            }
            if($adver_lists){
                foreach ($adver_lists as $k=>$v){
                    if ($v['pic']) {
                        $adver_lists[$k]['pic'] = dispose_url($v['pic']);
                    }
                }
            }
        }
        $data['four_img'] = $adver_lists;

        //-----------------------------------首页顶部轮播----------------------------------------
        $res = $service_house_adver_category->getOne(['cat_key'=>'street_app_index_top'],'cat_id');
        if(empty($res)){
            $lists = array();
        }else{
            if ($street_info && $street_info['area_type']==1) {
                $lists = $service_house_adver->getAdverLists([['community_id','=',$street_id],['status','=',1],['cat_id','=',$res['cat_id']],['pic','<>','']],'pic,url,bg_color,name','sort DESC');
            } else {
                $lists = $service_house_adver->getAdverLists([['street_id','=',$street_id],['status','=',1],['cat_id','=',$res['cat_id']],['pic','<>','']],'pic,url,bg_color,name','sort DESC');
            }
            if($lists){
                foreach ($lists as $k=>$v){
                    if ($v['pic']) {
                        $lists[$k]['pic'] = dispose_url($v['pic']);
                        $lists[$k]['pic'] = str_replace("\\",'/',$lists[$k]['pic']);
                    }
                }
            }
        }
        $data['top_swiper'] = $lists;
        $data['top_title'] = $street_info['area_name'];
        $data['share_info']=[
            'share_switch'=>intval(cfg('share_switch')),
            'share_img'=>cfg('site_url') . '/static/wxapp/fenxiang/default.png',
            'share_wx'=>cfg('pay_wxapp_important') && cfg('pay_wxapp_username') ? 'wxapp' : 'h5',
            'userName'=>cfg('pay_wxapp_username'),
            'title'=>'欢迎来到【'.$data['top_title'].'】',
            'info'=>'小区演示推出最新智慧社区平台，邀你一起来体验。'
        ];
        return api_output(0,$data);
    }

    /**
     * 街道首页nav
     * @author lijie
     * @date_time 2020/09/10
     * @return \json
     */
    public function getStreetNav()
    {
        $street_id = $this->request->post('area_street_id',0);
        if(!$street_id)
            return api_output_error(1001,'缺少必传参数');
        $street_nav_service = new StreetNavService();
        $data = $street_nav_service->getList($street_id);
        return api_output(0,$data);
    }

    /**
     * 街道新闻分类
     * @author lijie
     * @date_time 2020/09/09
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getNewsCategoryLists()
    {
        $street_id = $this->request->post('area_street_id',0);
        if(!$street_id)
            return api_output_error(1001,'缺少必传参数');
        $area_street_news_service = new AreaStreetNewsService();
        $where['area_id'] = $street_id;
        $where['cat_status'] = 1;
        $field = 'cat_id,cat_name';
        $data = $area_street_news_service->getNewsCategoryLists($where,$field,'cat_sort DESC');
        return api_output(0,$data);
    }

    /**
     * 新闻列表
     * @author lijie
     * @date_time 2020/09/09
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getNewsLists()
    {
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',20);
        $cat_id = $this->request->post('cat_id',0);
        $street_id = $this->request->post('area_street_id',0);
        $area_street_news_service = new AreaStreetNewsService();
        if($cat_id)
            $where['cat_id'] = $cat_id;
        if($street_id)
            $where['area_id'] = $street_id;
        $where['status'] = 1;
        $field = 'title,add_time,cat_id,title_img,news_id,read_sum';
        $data = $area_street_news_service->getNewsLists($where,$field,$page,$limit,'is_hot DESC,news_id DESC');
        return api_output(0,$data);
    }

    /**
     *新闻评论
     * @author lijie
     * @date_time 2020/09/09
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getNewsReply()
    {
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',20);
        $news_id = $this->request->post('news_id',0);
        if(!$news_id)
            return api_output_error(1001,'缺少必传参数');
        $area_street_news_service = new AreaStreetNewsService();
        $where['r.news_id'] = $news_id;
        $field = 'r.content,r.add_time,u.nickname,u.avatar';
        $data = $area_street_news_service->getNewsReplyLists($where,$field,$page,$limit,'r.pigcms_id DESC');
        return api_output(0,$data);
    }
}