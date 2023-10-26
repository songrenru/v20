<?php
/**
 * +----------------------------------------------------------------------
 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
 * +----------------------------------------------------------------------
 * @author    合肥快鲸科技有限公司
 * @copyright 合肥快鲸科技有限公司
 * @link      https://www.kuaijing.com.cn
 * @Desc      移动管理端 共用的 监控 控制器
 */
namespace app\community\controller\manage_api\common;

use app\community\controller\manage_api\BaseController;
use app\community\model\service\HouseFaceDeviceService;
use app\community\model\service\HouseVillageService;

class CameraDeviceController extends BaseController
{
    /**
     * 移动管理端公共获取监控 没有控制
     * @return \json
     */
    public function cameraDeviceLinks() {
        $service_house_face_device = new HouseFaceDeviceService();
        $arr = $this->getLoginInfo();
        if (isset($arr['status']) && $arr['status']!=1000) {
            return api_output($arr['status'],[],$arr['msg']);
        }
        if (isset($this->login_info['village_id'])) {
            $village_id = $this->login_info['village_id'];
        } else {
            $village_id = 0;
        }
        if (isset($this->login_info['property_id'])) {
            $property_id = $this->login_info['property_id'];
        } else {
            $property_id = 0;
        }
        $page  = $this->request->post('page',1);
        $limit = $this->request->post('limit',20);
        if (!$page || $page <=0) {
            $page  = 0;
            $limit = 0;
        }
        $res = [];
        if (!$village_id && !$property_id) {
            $res['list']         = [];
            $res['count']        = 0;
            $res['limit']        = $limit;
        }
        if (!$village_id || $village_id <= 0) {
            $whereVillageColumn = [];
            $whereVillageColumn[] = ['property_id', '=', $property_id];
            $whereVillageColumn[] = ['status', '=', 1];
            $village_id_arr = (new HouseVillageService())->getVillageColumn($whereVillageColumn, 'village_id');
        }
        $name = $this->request->post('name','','trim');
        $where = [];
        if ($name) {
            $where[] = ['camera_name','like',"%$name%"];
        }
        $where[] = ['camera_status', 'in', [0,1]];
        if(isset($village_id_arr)) {
            $where[] = ['village_id', 'in', $village_id_arr];
        } elseif ($village_id > 0) {
            $where[] = ['village_id', '=', $village_id];
        }
        $where[] = ['look_url', '<>', ''];
        $order = 'sort DESC,camera_id DESC';
        $param = [
            'isFlv' => 1
        ];
        try{
            $field = 'camera_id,camera_name,camera_sn,village_id,floor_id,look_url,lookUrlType,thirdProtocol,camera_status';
            $data  = $service_house_face_device->cameraLinkList($where,$field,$page,$limit,$order,$param);
            $count = $service_house_face_device->getCameraCount($where);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['list']         = $data;
        $res['count']        = $count;
        $res['limit']        = $limit;
        return api_output(0,$res);
    }
}