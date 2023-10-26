<?php
/**
 * 可视化页面相关
 * @author weili
 * @date 2020/9/7
 */

namespace app\community\controller\street_community;

use app\community\controller\CommunityBaseController;
use app\community\model\service\VisualizationService;
use app\community\model\service\HouseVillageService;
use app\community\model\service\AreaStreetService;
class VisualizationController extends CommunityBaseController
{
    /**
     * Notes: 获取轮播图列表
     * @return \json
     * @author: weili
     * @datetime: 2020/9/7 18:02
     */
    public function bannerList()
    {
        $info = $this->adminUser;
        $street_id = $this->adminUser['area_id'];
        if(!$street_id){
            return api_output_error(1001,'必传参数缺失');
        }
        if($this->adminUser['area_type']==1){
            $area_id = $street_id;
            $street_id = 0;
        }else{
            $area_id = 0;
        }
        $cat_key = $this->request->param('cat_key','','trim');
        if(!$cat_key){
            return api_output_error(1001,'必传参数缺失');
        }
        $page = $this->request->param('page',0,'intval');
        $page = $page-1;
        $limit_page = 10;
        if($page)
        {
            $limit = $page*$limit_page;
        }else{
            $limit = $limit_page;
        }
        $serviceVisualization = new VisualizationService();
        try {
            $level = isset($info['level']) ? intval($info['level']) : 0;
            $list = $serviceVisualization->bannerList($cat_key, $street_id, $area_id,$level,$page,$limit);

        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        $list['total_limit'] = $limit_page;
        return api_output(0, $list, "成功");
    }

    /**
     * Notes: 添加/编辑banner
     * @return \json
     * @author: weili
     * @datetime: 2020/9/8 15:21
     */
    public function addBanner()
    {
        $street_id = $this->adminUser['area_id'];
        if(!$street_id){
            return api_output_error(1001,'必传参数缺失');
        }

        $id = $this->request->param('id',0,'intval');
        $url = $this->request->param('url','','trim');
        $name = $this->request->param('name','','trim');
        $status = $this->request->param('status','','trim');
        $sort = $this->request->param('sort',0,'intval');
        $sub_name = $this->request->param('sub_name','','trim');
        $cat_id = $this->request->param('cat_id',0,'intval');
        $pic = $this->request->param('pic','','trim');
        $bg_color = $this->request->param('bg_color','','trim');
        if(!$url || !$name  || !$sub_name)
        {
            return api_output_error(1001,'必传参数缺失');
        }
        $url = htmlspecialchars_decode($url);
        if ($this->adminUser['area_type']==1) {
            $data['community_id'] = $street_id;
        } else {
            $data['street_id'] = $street_id;
        }
        if($status){
            $status=1;
        }else{
            $status=0;
        }
        $data['name'] = $name;
        $data['sub_name'] = $sub_name;
        $data['sort'] = $sort;
        $data['url'] = $url;
        $data['status'] = $status;
        $data['cat_id'] = $cat_id;
        $data['last_time'] = time();
        if($pic){
            $data['pic'] = $pic;
        }
        if($bg_color)
        {
            $data['bg_color'] = $bg_color;
        }
        $serviceVisualization = new VisualizationService();
        try {
            $res = $serviceVisualization->saveAdvert($data,$id);
        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data, "成功");
    }

    /**
     * Notes: 获取banner 详情
     * @return \json
     * @author: weili
     * @datetime: 2020/9/8 15:21
     */
    public function getBannerInfo()
    {
        $id = $this->request->param('id',0,'intval');
        if(!$id)
        {
            return api_output_error(1001,'必传参数缺失');
        }
        $serviceVisualization = new VisualizationService();
        try {
            $data = $serviceVisualization->getAdvert($id);
        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data, "成功");
    }

    /**
     * Notes: 街道功能库
     * @return \json
     * @author: weili
     * @datetime: 2020/9/8 13:21
     */
    public function getApplication()
    {
        return api_output(0, ((new AreaStreetService())->getAreaStreetLibrary($this->adminUser)), "成功");
        $house_village_service = new HouseVillageService();
        $base_url = $house_village_service->base_url;
        $app_arr[] = ['title'=>'小区首页','url'=>cfg('site_url').$base_url.'pages/village_menu/index?area_street_id='.$this->adminUser['area_id']];
        $app_arr[] = ['title'=>'投票表决','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/vote/index?area_street_id='.$this->adminUser['area_id']];
        if($this->adminUser['area_type'] == 1){
            $area_street_service = new AreaStreetService();
            $res = $area_street_service->getAreaStreet(['area_id'=>$this->adminUser['area_id']],'area_pid');
            $app_arr[] = ['title'=>'街道新闻','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/streetNews/streetNews?area_street_id='.$res['area_pid']];
            $app_arr[] = ['title'=>'意见箱','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/tookPictures/tookPicturesList?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'志愿者招募','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/index/volunteersActivityList?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'社区新闻','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/streetNews/streetNews?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'党建首页','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/streetParty_index?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'党员列表','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/index/partyList?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'事项办理材料管理','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/matter/matterList?area_street_id='.$this->adminUser['area_id']];
        }else{
            $app_arr[] = ['title'=>'街道新闻','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/streetNews/streetNews?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'意见箱','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/tookPictures/tookPicturesList?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'志愿者招募','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/index/volunteersActivityList?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'党建首页','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/streetParty_index?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'党员列表','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/index/partyList?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'事项办理材料管理','url'=>cfg('site_url').$house_village_service->base_url.'pages/street/matter/matterList?area_street_id='.$this->adminUser['area_id']];
            $app_arr[] = ['title'=>'网格工单上报','url'=>cfg('site_url').$base_url.'pages/village/grid/eventList?current=0&type=todo&area_street_id='.$this->adminUser['area_id']];
        }
        $data['list'] = $app_arr;
        return api_output(0, $data, "成功");
    }

    /**
     * Notes: 删除banner
     * @return \json
     * @author: weili
     * @datetime: 2020/9/8 15:30
     */
    public function del()
    {
        $id = $this->request->param('id',0,'intval');
        if(!$id){
            return api_output_error(1001,'必传参数缺失');
        }
        $serviceVisualization = new VisualizationService();
        try {
            $res = $serviceVisualization->del($id);
        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        if($res)
        {
            return api_output(0, '', "成功");
        }else{
            return api_output_error(1002,  "失败");
        }

    }

    /**
     * Notes: 获取可视化右侧展示页面url
     * @return mixed
     * @author: weili
     * @datetime: 2020/9/10 14:32
     */
    public function getStreetShowUrl()
    {
        $info = $this->adminUser;
        $menu = [
            [
                'title'=> '轮播图',
                'content'=>'尺寸：750*360',
                'onUrl'=>1,
            ],
            [
                'title'=> '功能导航',
                'content'=>'尺寸：103*103',
                'onUrl'=>2,
            ],
            [
                'title'=> '中间栏轮播广告图',
                'content'=>'尺寸：700*200px，不设置不显示',
                'onUrl'=>3,
            ],
            [
                'title'=> '四图广告位',
                'content'=>'可以设置四图广告位,不设置不展示。',
                'onUrl'=>4,
            ],
        ];

        $street_id = $this->adminUser['area_id'];
        $url = get_base_url('pages/street/street_index');
        $param = '?area_street_id='.$street_id.'&viewpage=true&iframe=true';
        if($this->adminUser['area_type'] == 1){//社区链接
            $path_url = $url.$param;
        }else{//街道链接
            $path_url = $url.$param;
        }
        $data['url'] = $path_url;
        $data['list'] = $menu;
        return api_output(0, $data, "成功");
    }
    /**
     * Notes: 上传图片
     * @return \json
     * @author: weili
     * @datetime: 2020/9/9 11:00
     */
    public function upload(){
        $file = $this->request->file('img');
        // 上传到本地服务器
        $savename = \think\facade\Filesystem::disk('public_upload')->putFile( 'adver',$file);
        if(strpos($savename,"\\") !== false){
            $savename = str_replace('\\','/',$savename);
        }
        $imgurl = '/upload/'.$savename;
        $params = ['savepath'=>'/upload/' . $imgurl];
        invoke_cms_model('Image/oss_upload_image',$params);
        return api_output(0, $imgurl, "成功");
    }

    /**
     * 街道功能库详情分类
     * @author: liukezhu
     * @date : 2022/6/8
     * @return \json
     */
    public function getStreetLibraryClass(){
        $street_id = $this->adminUser['area_id'];
        $type = $this->request->param('type','','trim');
        $page = $this->request->param('page',0,'intval');
        if(!$street_id){
            return api_output_error(1001,'必传参数缺失');
        }
        if($this->adminUser['area_type']==1){
            $area_id = $street_id;
            $street_id = 0;
        }else{
            $area_id = 0;
        }
        if(!$type){
            return api_output_error(1001,'缺少必要参数');
        }
        try {
            $list = (new VisualizationService())->getStreetLibraryClass($street_id, $area_id,$type,$page);

        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $list, "成功");
    }
}