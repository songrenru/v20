<?php
/**
 * 街道导航相关
 * @author weili
 * @date 2020/9//9
 */

namespace app\community\controller\street_community;


use app\community\controller\CommunityBaseController;
use app\community\model\service\StreetNavService;
class StreetNavController extends CommunityBaseController
{
    /**
     * Notes: 获取街道列表
     * @return \json
     * @author: weili
     * @datetime: 2020/9/9 18:29
     */
    public function getStreetNavList()
    {
        $street_id = $this->adminUser['area_id'];
        if(!$street_id){
            return api_output_error(1001,'必传参数缺失');
        }
        $page = $this->request->param('page',0,'intval');
        $limit = 10;
        $serviceStreetNav = new StreetNavService();
        try {
            $list = $serviceStreetNav->getList($street_id,$page,$limit,true);
        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        $list['total_limit'] = $limit;
        return api_output(0, $list, "成功");
    }

    /**
     * Notes: 添加编辑街道导航
     * @return \json
     * @author: weili
     * @datetime: 2020/9/9 19:05
     */
    public function addStreetNav()
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
        $img = $this->request->param('img','','trim');
        if ($status) {
            $status = 1;
        } else {
            $status = 0;
        }
        if(!$url || !$name)
        {
            return api_output_error(1001,'必传参数缺失');
        }
        $url = htmlspecialchars_decode($url);
        $data = [
            'street_id'=>$street_id,
            'name'=>$name,
            'sort'=>$sort,
            'status'=>$status,
            'url'=>$url,
            'add_time' => time(),
        ];
        if($img){
            $data['img'] = $img;
        }
        $serviceStreetNav = new StreetNavService();
        try {
            $res = $serviceStreetNav->saveNav($data,$id);
        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data, "成功");
    }

    /**
     * Notes:获取街道导航详情
     * @return \json
     * @author: weili
     * @datetime: 2020/9/9 19:06
     */
    public function getStreetNavInfo()
    {
        $id = $this->request->param('id',0,'intval');
        if(!$id)
        {
            return api_output_error(1001,'必传参数缺失');
        }
        $serviceStreetNav = new StreetNavService();
        try {
            $data = $serviceStreetNav->getStreetNav($id);
        }catch (\Exception  $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data, "成功");
    }

    /**
     * Notes: 删除街道导航
     * @return \json
     * @author: weili
     * @datetime: 2020/9/9 19:06
     */
    public function del()
    {
        $id = $this->request->param('id',0,'intval');
        if(!$id){
            return api_output_error(1001,'必传参数缺失');
        }
        $serviceStreetNav = new StreetNavService();
        try {
            $res = $serviceStreetNav->del($id);
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
}