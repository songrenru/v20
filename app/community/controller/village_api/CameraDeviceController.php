<?php


namespace app\community\controller\village_api;


use app\community\controller\CommunityBaseController;
use app\community\model\service\Device\DeviceHkNeiBuHandleService;
use app\community\model\service\Device\FaceDHYunRuiCloudDeviceService;
use app\community\model\service\Device\FaceHikCloudNeiBuDeviceService;
use app\community\model\service\Device\Hik6000CCameraService;
use app\community\model\service\HouseFaceDeviceService;
use app\community\model\service\HouseVillageService;
use app\community\model\service\iSecureCameraService;
use app\community\model\service\FaceDeviceService;
use app\community\model\service\HouseCameraDeviceVtypeService;
use app\consts\DeviceConst;
use app\consts\HikConst;
use app\consts\DahuaConst;
use think\Exception;
use app\traits\FaceDeviceHikCloudTraits;

class CameraDeviceController extends CommunityBaseController
{
    use FaceDeviceHikCloudTraits;
    
    /**
     * 视频监控列表
     * @author lijie
     * @date_time 2022/01/12
     * @return \json
     */
    public function getCameraList()
    {
        $village_id = $this->adminUser['village_id'];
        $service_house_face_device = new HouseFaceDeviceService();
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',15);
        $device_type = $this->request->post('device_type',0);
        $is_online = $this->request->post('is_online',0);
        $is_support_look = $this->request->post('is_support_look',0);
        $camera_sn = $this->request->post('camera_sn','');
        $camera_name = $this->request->post('camera_name','');
        $thirdProtocol = $this->request->post('thirdProtocol',0);
        if($device_type) {
            $where['device_type'] = $device_type;
        }
        $whereRaw = '';
        if($camera_name) {
            $whereRaw ='camera_name like "%'.$camera_name.'%"';
        }
        if($camera_sn) {
            if ($whereRaw) {
                $whereRaw .= ' AND camera_sn like "%'.$camera_sn.'%"';
            } else {
                $whereRaw = 'camera_sn like "%'.$camera_sn.'%"';
            }
        }
        if ($is_online&&$is_online==1) {
            $where['camera_status'] = 0;
        } elseif ($is_online&&$is_online==2) {
            $where['camera_status'] = 1;
        } else {
            $where['camera_status'] = [0,1];
        }
        if ($is_support_look&&$is_support_look==1) {
            $where['is_support_look'] = 1;
        } elseif ($is_support_look&&$is_support_look==2) {
            $where['is_support_look'] = 0;
        } else {
            $where['is_support_look'] = [0,1];
        }
        if (intval($thirdProtocol) > 0) {
            $where['thirdProtocol'] = $thirdProtocol;
        }
        $where['village_id'] = $village_id;
//        $where['device_brand'] = 'iSecureCenter';
        $field = true;
        $order = 'sort DESC,camera_id DESC';
        try{
            $data = $service_house_face_device->getCameraList($where,$field,$page,$limit,$order,$whereRaw);
            $count = $service_house_face_device->getCameraCount($where,$whereRaw);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['list']         = $data;
        $res['count']        = $count;
        $res['total_limit']  = $limit;
        $hikCloudInfo = (new Hik6000CCameraService())->getVillageJudgeConfig($village_id);
        $res['hikCloudInfo'] = $hikCloudInfo;
        return api_output(0,$res);
    }
    
    public function cameraDeviceLinks() {
        $village_id = $this->adminUser['village_id'];
        $service_house_face_device = new HouseFaceDeviceService();
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page  = $this->request->post('page',1);
        $limit = $this->request->post('limit',9);
        $name  = $this->request->post('name','','trim');
        $where = [];
        if ($name) {
            $where[] = ['camera_name','like',"%$name%"];
        }
        if ($page <= 0) {
            $page  = 0;
            $limit = 0;
        }
        $where[] = ['camera_status', 'in', [0,1]];
        $where[] = ['village_id', '=', $village_id];
        $where[] = ['look_url', '<>', ''];
        $order = 'sort DESC,camera_id DESC';
        try{
            $field = 'camera_id,camera_name,camera_sn,village_id,floor_id,look_url,lookUrlType,thirdProtocol,camera_status';
            $data  = $service_house_face_device->cameraLinkList($where,$field,$page,$limit,$order);
            $count = $service_house_face_device->getCameraCount($where);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['list']         = $data;
        $res['count']        = $count;
        $res['limit']        = $limit;
        return api_output(0,$res);
    }

    public function videoV2CamerasPreviewURLs() {
        $village_id = $this->adminUser['village_id'];
        $service_house_face_device = new HouseFaceDeviceService();
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $camera_id = $this->request->post('camera_id',0);
        if(!$camera_id){
            return api_output_error(1001,'缺少必传参数');
        }
        try{
            $data = $service_house_face_device->videoV2CamerasPreviewURLs($camera_id,$village_id);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 删除视频监控
     * @author lijie
     * @date_time 2022/01/12
     * @return \json
     */
    public function delCamera()
    {
        $camera_id = $this->request->post('camera_id',0);
        if(!$camera_id){
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_face_device = new HouseFaceDeviceService();
        $where['camera_id'] = $camera_id;
        try{
            $data = $service_house_face_device->getCameraInfo(['camera_id'=>$camera_id]);
            if ($data && !is_array($data)) {
                $data = $data->toArray();
            }
            if (isset($data['thirdProtocol']) && $data['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_6000C) {
                // todo 只删除本地不同步删除云端
            }
            if (isset($data['thirdProtocol']) && $data['thirdProtocol'] == DahuaConst::DH_YUNRUI) {
                // todo 大华云睿 同步删除云端设备
                $orderGroupId = md5(uniqid().$_SERVER['REQUEST_TIME']);
                $param = [
                    'village_id'      => $data['village_id'],
                    'device_id'       => $data['camera_id'],
                    'operation'       => 'deleteDevice',
                    'device_sn'       => $data['camera_sn'],
                    'orderGroupId'    => $orderGroupId,
                    'cloud_device_id' => $data['cloud_device_id'],
                    'thirdProtocol'   => $data['thirdProtocol'],
                    'deviceType'      => DeviceConst::DEVICE_TYPE_CAMERA,
                ];
                $delInfo = (new FaceDeviceService())->deleteDevice($param);
                if (isset($delInfo['code']) && $delInfo['code'] > 0) {
                     return api_output_error(1001,$delInfo['msg']);
                }
            }
            $res = $service_house_face_device->saveCamera(['camera_id'=>$camera_id],['camera_status'=>4]);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        if($res) {
            return api_output(0,'');
        }
        return api_output_error(1001,'服务异常');
    }

    /**
     * 预览视频监控
     * @author lijie
     * @date_time 2022/01/12
     * @return \json
     */
    public function previewURLs()
    {
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $camera_id = $this->request->post('camera_id',0);
        if(!$village_id || !$camera_id){
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_face_device = new HouseFaceDeviceService();
        $service_i_secure_camera = new iSecureCameraService();
        $where['camera_id'] = $camera_id;
        $field = 'camera_sn';
        try{
            $camera_info = $service_house_face_device->getCameraInfo(['camera_id'=>$camera_id],$field);
            if(empty($camera_info)){
                return api_output_error(1001,'参数错误');
            }
            $data = $service_i_secure_camera->previewURLs($camera_info['camera_sn']);
            if(!$data){
                return api_output_error(1001,'视频获取异常');
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 回放视频监控
     * @author lijie
     * @date_time 2022/01/12
     * @return \json
     */
    public function playbackURLs()
    {
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $village_id = $this->request->post('village_id',0);
        $camera_id = $this->request->post('camera_id',0);
        $start_time = '';
        $end_time = '';
        if(!$village_id || !$camera_id){
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_face_device = new HouseFaceDeviceService();
        $service_i_secure_camera = new iSecureCameraService();
        $where['camera_id'] = $camera_id;
        $field = 'camera_sn';
        try{
            $camera_info = $service_house_face_device->getCameraInfo(['camera_id'=>$camera_id],$field);
            if(empty($camera_info)){
                return api_output_error(1001,'参数错误');
            }
            $data = $service_i_secure_camera->playbackURLs($camera_info['camera_sn'],$start_time,$end_time);
            if(!$data){
                return api_output_error(1001,'视频获取异常');
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 设备品牌
     * @author lijie
     * @date_time 2022/01/13
     * @return \json
     */
    public function getBrandList()
    {
        $service_house_face_device = new HouseFaceDeviceService();
        try{
            $data = $service_house_face_device->getBrandList();
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }
    
    public function getThirdProtocol() {
        $brand_id =  $this->request->post('brand_id');
        $brand_key =  $this->request->post('brand_key');
        $service_face_device = new FaceDeviceService();
        $data = [];
        try{
            if ($brand_id) {
                $brand_list = (new HouseFaceDeviceService())->getBrandList();
                if ($brand_list) {
                    foreach ($brand_list as $item) {
                        if (isset($item['brand_id']) && $brand_id == $item['brand_id']) {
                            $brand_key = $item['brand_key'];
                            break;
                        }
                    }
                }
            }
            if (isset($service_face_device->thirdProtocolArr[$brand_key])) {
                $data['thirdProtocol'] = $service_face_device->thirdProtocolArr[$brand_key];
                if (isset($data['thirdProtocol'][HikConst::HIK_ISC_V151])) {
                    /** todo 目前海康综合安防平台 监控部分不支持手动添加 只能获取海康安防平台的设备数据 所以添加的时候去除这个协议 */
                    unset($data['thirdProtocol'][HikConst::HIK_ISC_V151]);
                }
            } elseif (!$brand_key) {
                $data['thirdProtocol'] = [];
            }
            $data['tips'] = (new HouseFaceDeviceService())->getBrandHaikangCodeTip($brand_key);
            $data['brand_key'] = $brand_key;
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 设备类型
     * @return \json
     */
    public function getDeviceTypeList()
    {
        $service_house_face_device = new HouseFaceDeviceService();
        try{
            $village_id = $this->adminUser['village_id'];
            $data = $service_house_face_device->getDeviceTypeList($village_id);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 添加/编辑视频监控
     * @author lijie
     * @date_time 2022/01/13
     * @return \json
     */
    public function addCameraDevice()
    {
        $village_id      = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $camera_name        = $this->request->post('camera_name',0);
        $camera_sn          = $this->request->post('camera_sn',0);
        $open_time          = $this->request->post('open_time','');
        $floor_id           = $this->request->post('floor_id',0);
        $public_area_id     = $this->request->post('public_area_id',0);
        $is_support_look    = $this->request->post('is_support_look',0);
        $brand_id           = $this->request->post('brand_id',0);
        $product_model      = $this->request->post('product_model','');
        $device_type        = $this->request->post('device_type',1);
        $param              = $this->request->post('param','');
        $remark             = $this->request->post('remark','');
        $camera_id          = $this->request->post('camera_id',0);
        $thirdProtocol      = $this->request->post('thirdProtocol',0);
        $device_code        = $this->request->post('device_code','');
        $thirdLoginName     = $this->request->post('thirdLoginName','');
        $thirdLoginPassword = $this->request->post('thirdLoginPassword','');
        $sort               = $this->request->post('sort',0);
        if (empty($camera_sn) || empty($camera_name) || !$device_type || !$brand_id) {
            return api_output_error(1001, '缺少必传参数');
        }
        $service_house_face_device = new HouseFaceDeviceService();
        $brand_name = $service_house_face_device->getBrandName($brand_id);
        $paramPosts['brand_id']            = $brand_id;
        $paramPosts['village_id']          = $village_id;
        $paramPosts['camera_name']         = $camera_name;
        $paramPosts['camera_sn']           = $camera_sn;
        $paramPosts['camera_status']       = 0;
        $paramPosts['add_time']            = time();
        $paramPosts['last_time']           = time();
        $paramPosts['open_time']           = !empty($open_time) ? strtotime($open_time) : 0;
        $paramPosts['public_area_id']      = !$public_area_id   ? $public_area_id       : 0;
        $paramPosts['floor_id']            = !$floor_id         ? $floor_id             : 0;
        $paramPosts['is_support_look']     = $is_support_look;
        $paramPosts['brand_name']          = $brand_name;
        $paramPosts['product_model']       = $product_model;
        $paramPosts['device_type']         = $device_type;
        $paramPosts['param']               = !empty($param)  ? $param  : '';
        $paramPosts['remark']              = !empty($remark) ? $remark : '';
        $paramPosts['sort']               = (int)$sort;
        if ($thirdProtocol) {
            $paramPosts['thirdProtocol']       = $thirdProtocol;
        }
        $paramPosts['device_code']         = $device_code;
        $faceDeviceService = new FaceDeviceService();
        if ($thirdProtocol == DahuaConst::DH_YUNRUI && (!$thirdLoginName || !$thirdLoginPassword)) {
            $thirdLoginName     = 'admin';
            $thirdLoginPassword = 'admin123';
        }
        $paramPosts['thirdLoginName']      = $thirdLoginName;
        $paramPosts['thirdLoginPassword']  = $thirdLoginPassword;
        try{
            if($camera_id){
                unset($paramPosts['add_time']);
                $operation = 'updateDevice';
                $res = $service_house_face_device->saveCamera(['camera_id'=>$camera_id],$paramPosts);
            }else{
                $whereCamera    = [];
                $whereCamera[]  = ['camera_status', '<>', 4];
                $whereCamera[]  = ['camera_sn', '=', $camera_sn];
                if ($thirdProtocol) {
                    $whereCamera[] = ['thirdProtocol', '=', $thirdProtocol];
                }
                $camera_info = $service_house_face_device->getCameraInfo($whereCamera,'camera_id');
                if ($camera_info && isset($camera_info['camera_id'])) {
                    return api_output_error(1001,'该设备已经添加');
                } else {
                    $res = $service_house_face_device->addCamera($paramPosts);
                    if ($res) {
                        $camera_id = $res;
                        $operation = 'addDevice';
                    }
                }
            }
            if ($camera_id && isset($paramPosts['thirdProtocol']) && $paramPosts['thirdProtocol']) {
                $param = [
                    'village_id'    => $village_id,
                    'device_id'     => $camera_id,
                    'operation'     => $operation,
                    'deviceType'    => DeviceConst::DEVICE_TYPE_CAMERA,
                    'thirdProtocol' => $paramPosts['thirdProtocol'],
                ];
                $handleDevice = $faceDeviceService->handleDevice($camera_sn, $param);
                if (isset($handleDevice['code']) && $handleDevice['code']>0) {
                    return api_output_error(-1, $handleDevice['msg']);
                }
                fdump_api($handleDevice,'$handleDevice');
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        if($res)
            return api_output(0,[]);
        return api_output_error(1001,'服务异常');
    }

    /**
     * 视频监控详情
     * @author lijie
     * @date_time 2022/01/13
     * @return \json
     */
    public function getCameraInfo()
    {
        $camera_id = $this->request->post('camera_id',0);
        $service_house_face_device = new HouseFaceDeviceService();
        try{
            $data = $service_house_face_device->getCameraInfo(['camera_id'=>$camera_id]);
            if ($data && !is_array($data)) {
                $data = $data->toArray();
            }
            if (isset($data['sort']) && !$data['sort']) {
                $data['sort'] = 0;
            }
            /**
             * 去除前缀$edit_ 就是对应字段对应是否可编辑权限
             */
            $is_edit = false;
            $edit_brand_id           = $is_edit;
            $edit_thirdProtocol      = $is_edit;
            $edit_device_type        = $is_edit;
            $edit_camera_name        = $is_edit;
            $edit_camera_sn          = $is_edit;
            $edit_device_code        = $is_edit;
            $edit_product_model      = $is_edit;
            $edit_thirdLoginName     = $is_edit;
            $edit_thirdLoginPassword = $is_edit;
            $edit_open_time          = $is_edit;
            $edit_remark             = $is_edit;
            $edit_edit_param         = $is_edit;
            $edit_is_support_look    = $is_edit;
            if (isset($data['thirdProtocol']) && $data['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_6000C) {
                $no_edit = true;
                $edit_brand_id           = $no_edit;
                $edit_thirdProtocol      = $no_edit;
                $edit_device_type        = $no_edit;
                $edit_camera_sn          = $no_edit;
                $edit_device_code        = $no_edit;
                $edit_product_model      = $no_edit;
                $edit_thirdLoginName     = $no_edit;
                $edit_thirdLoginPassword = $no_edit;
                $edit_open_time          = $no_edit;
                $edit_remark             = $no_edit;
                $edit_edit_param         = $no_edit;
            }
            if (isset($data['thirdProtocol'])) {
                switch ($data['thirdProtocol']) {
                    case DahuaConst::DH_YUNRUI:
                        $brand_key = DahuaConst::DH_BRAND_KEY;
                        break;
                    case HikConst::HIK_YUNMO_WAIBU:
                    case HikConst::HIK_YUNMO_NEIBU_SHEQU:
                    case HikConst::HIK_YUNMO_NEIBU_6000C:
                        $brand_key = HikConst::HIK_BRAND_KEY;
                        break;
                }
                $serviceFaceDevice = new FaceDeviceService();
                if (isset($brand_key) && isset($serviceFaceDevice->thirdProtocolShowArr[$brand_key])) {
                    $thirdProtocol = $serviceFaceDevice->thirdProtocolShowArr[$brand_key];
                    $thirdProtocolInfo  = $thirdProtocol[HikConst::HIK_YUNMO_NEIBU_6000C];
                    $protocolTitle      = $thirdProtocolInfo['thirdTitle'];
                    $data['protocolTitle'] = $protocolTitle;
                } else {
                    $data['protocolTitle'] = '无';
                }
            }
            
            // 控制编辑权限
            $editAuth = [
                'edit_brand_id'           => $edit_brand_id,
                'edit_thirdProtocol'      => $edit_thirdProtocol,
                'edit_device_type'        => $edit_device_type,
                'edit_camera_name'        => $edit_camera_name,
                'edit_camera_sn'          => $edit_camera_sn,
                'edit_device_code'        => $edit_device_code,
                'edit_product_model'      => $edit_product_model,
                'edit_thirdLoginName'     => $edit_thirdLoginName,
                'edit_thirdLoginPassword' => $edit_thirdLoginPassword,
                'edit_open_time'          => $edit_open_time,
                'edit_remark'             => $edit_remark,
                'edit_edit_param'         => $edit_edit_param,
                'edit_is_support_look'    => $edit_is_support_look,
            ];
            $data['editAuth'] = $editAuth;
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 查询公共区域和楼栋列表
     * @return \json
     */
    public function getHousePosition()
    {
        $village_id = 50;
        if(!$village_id) {
            return api_output_error(1001,'必传参数缺失');
        }
        // 查询楼栋
        $village_service = new HouseVillageService();
        try {
            $list = $village_service->getHousePosition($village_id);
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 视频权限申请列表
     * @author lijie
     * @date_time 2022/01/14
     * @return \json
     */
    public function getReplyList()
    {
        $village_id = $this->adminUser['village_id'];
        $service_house_face_device = new HouseFaceDeviceService();
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',15);
        $date = $this->request->post('date');
        $start_time = $this->request->post('start_time',0);
        $end_time = $this->request->post('end_time',0);
        $camera_sn = $this->request->post('camera_sn','');
        $camera_name = $this->request->post('camera_name','');
        if ($date&&isset($date[0])&&$date[0]&&isset($date[1])&&$date[1]) {
            $start_time = strtotime($date[0]);
            $end_time = strtotime($date[1] . ' 23:59:59');
        }
        $reply_status = $this->request->post('reply_status','');
        $name = $this->request->post('name','');
        $phone = $this->request->post('phone','');
        if($reply_status){
            $where[] = ['reply_status','=',$reply_status];
        }
        if($name) {
            $where[] = ['name','=',$name];
        }
        if($phone) {
            $where[] = ['phone','=',$phone];
        }
        if($start_time) {
            $where[] = ['start_time','>=',$start_time];
        }
        if($end_time) {
            $where[] = ['end_time','<=',$end_time];
        }
        $where[] = ['village_id','=',$village_id];
        $field = true;
        $order = 'id DESC';
        $param = [
            'camera_sn' => $camera_sn,
            'camera_name' => $camera_name,
        ];
        try{
            $data = $service_house_face_device->getCameraReplyList($where,$field,$page,$limit,$order,$param);
            $count = $service_house_face_device->getCameraReplyCount($where);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['list'] = $data;
        $res['count'] = $count;
        $res['total_limit'] = 15;
        return api_output(0,$res);
    }
	
    //获取视频类型
    public function getVmonitorTypeList(){
        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page',0,'int');
        $page = $page>0 ? $page:0;
        $limit = $this->request->post('limit',20,'int');
        $limit = $limit>0 ? $limit:20;
        try{
            $houseCameraDeviceVtypeService=new HouseCameraDeviceVtypeService();
            $whereArr=array();
            $whereArr[]=array('village_id','=',$village_id);
            $whereArr[]=array('xtype','in',array(1,2));
            $vtypeTmp=$houseCameraDeviceVtypeService->getOneData($whereArr);
            if(empty($vtypeTmp)){
                $insertData=array('village_id'=>$village_id);
                $insertData['vname']='普通视频监控';
                $insertData['xsort']=100;
                $insertData['status']=1;
                $insertData['xtype']=1;
                $insertData['add_time']=time();
                $houseCameraDeviceVtypeService->addOneData($insertData);
                $insertData['xtype']=2;
                $insertData['vname']='高空抛物视频监控';
                $houseCameraDeviceVtypeService->addOneData($insertData);
            }
            $whereArr=array();
            $whereArr[]=array('village_id','=',$village_id);
            $whereArr[]=array('del_time','=',0);
            $data = $houseCameraDeviceVtypeService->getDataLists($whereArr,'*','xsort desc,id desc',$page,$limit);
            return api_output(0,$data);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }

    //添加一个视频类型
    public function addVmonitorType(){
        $village_id = $this->adminUser['village_id'];
        $vname = $this->request->post('vname',0,'trim');
        $vname= !empty($vname) ? htmlspecialchars($vname,ENT_QUOTES) :'';
        $xsort = $this->request->post('xsort',0,'int');
        $xsort = $xsort>0 ? $xsort:0;
        $status = $this->request->post('status',0,'int');
        $status = $status>0 ? $status:0;
        $id = $this->request->post('id',0,'int');
        $id = $id>0 ? $id:0;
        try{
            $houseCameraDeviceVtypeService=new HouseCameraDeviceVtypeService();
            if($id>0){
                $whereArr=array();
                $whereArr[]=array('village_id','=',$village_id);
                $whereArr[]=array('id','=',$id);
                $saveData=array();
                $saveData['vname']=$vname;
                $saveData['xsort']=$xsort;
                $saveData['status']=$status;
                $saveData['update_time']=time();
                $ret=$houseCameraDeviceVtypeService->updateOneData($whereArr,$saveData);
                return api_output(0,$id);
            }else{
                $insertData=array('village_id'=>$village_id);
                $insertData['vname']=$vname;
                $insertData['xsort']=$xsort;
                $insertData['status']=$status;
                $insertData['xtype']=0;
                $insertData['add_time']=time();
                $insert_id=$houseCameraDeviceVtypeService->addOneData($insertData);
                return api_output(0,$insert_id);
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }

    }

    public function delVmonitorType()
    {
        $village_id = $this->adminUser['village_id'];
        $idd = $this->request->post('idd', 0, 'int');
        $idd = $idd > 0 ? $idd : 0;
        $whereArr = array();
        $whereArr[] = array('village_id', '=', $village_id);
        $whereArr[] = array('id', '=', $idd);
        try {
            $houseCameraDeviceVtypeService = new HouseCameraDeviceVtypeService();
            $vtypeTmp = $houseCameraDeviceVtypeService->getOneData($whereArr);
            if (empty($vtypeTmp)) {
                return api_output(1002, [], '删除的数据不存在！');
            }
            $ret = $houseCameraDeviceVtypeService->updateOneData($whereArr, ['del_time' => time()]);
            return api_output(0, $idd);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
    }
    /**
     * 视频权限申请列表
     * @author lijie
     * @date_time 2022/01/14
     * @return \json
     */
    public function getReplyInfo()
    {
        $village_id = $this->adminUser['village_id'];
        $service_house_face_device = new HouseFaceDeviceService();
        $id = $this->request->post('id',0);
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $where[] = ['village_id','=',$village_id];
        $where[] = ['id','=',$id];
        $field = true;
        try{
            $data = $service_house_face_device->getCameraReplyDetail($where,$field);
            if($data && isset($data['phone']) && !empty($data['phone'])){
                $data['phone']= phone_desensitization($data['phone']);
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['info'] = $data;
        return api_output(0,$res);
    }


    /**
     * 视频权限申请列表
     * @author lijie
     * @date_time 2022/01/14
     * @return \json
     */
    public function checkReplyInfo()
    {
        $village_id = $this->adminUser['village_id'];
        $service_house_face_device = new HouseFaceDeviceService();
        $id = $this->request->post('id',0);
        $reply_status = $this->request->post('reply_status',0);
        $reason = $this->request->post('reason');
        $reason = trim($reason);
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        if (!$reply_status){
            return api_output(1002, [], '缺少审核状态！');
        }
        if($reply_status==3&&empty($reason)) {
            return api_output(1002, [], '审核拒绝请填写理由！');
        }
        $where[] = ['village_id','=',$village_id];
        $where[] = ['id','=',$id];
        $param = [
            'reply_status' => $reply_status,
            'reason' => $reason?$reason:'',
            'reply_time' => time(),
        ];
        try{
            $data = $service_house_face_device->saveCameraReply($where,$param);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['info'] = $data;
        return api_output(0,$res);
    }


    /**
     * 查询视频类型
     * @author: liukezhu
     * @date : 2022/7/23
     * @return \json
     */
    public function getCameraType(){
        $village_id = $this->adminUser['village_id'];
        try{
            $data = (new HouseFaceDeviceService())->getCameraDeviceType($village_id);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }
    
    public function getCameraThirdProtocols() {
        $village_id = $this->adminUser['village_id'];
        try{
            $data = (new HouseFaceDeviceService())->getCameraThirdProtocols($village_id);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,['list' => $data]);
    }

	/**
	 * 获取监控设备的信息（如果有云，则获取云）
	 * @return \json
	 * @throws \think\db\exception\DataNotFoundException
	 * @throws \think\db\exception\DbException
	 * @throws \think\db\exception\ModelNotFoundException
	 */
	public function getDeviceInfo()
	{
		$village_id = $this->adminUser['village_id'];
		$serviceHouseFaceDevice = new HouseFaceDeviceService();
		if (empty($village_id)){
			return api_output(1002, [], '请先登录到小区后台！');
		}
		$camera_id = $this->request->post('camera_id',0);
		if(!$camera_id){
			return api_output_error(1001,'缺少必传参数');
		}
		$field = 'camera_id,camera_name,camera_sn,lng,lat,add_time,last_time,thirdProtocol,cloud_is_encrypt,cloud_device_id';
		$cameraInfo = $serviceHouseFaceDevice->getCameraInfo(['camera_id'=>$camera_id,'village_id'=>$village_id],$field);
	 
		$cameraDeviceInfo = [];
		$protocol         = ''; //协议，目前仅支持大华云睿 、 海康云牟内部协议
		$protocolTitle    = ''; //协议，目前仅支持大华云睿 、 海康云牟内部协议
        $cameraVideo      = [];
		if ($cameraInfo){
			$serviceFaceDevice = new FaceDeviceService();
			$cameraInfo = is_array($cameraInfo) ? $cameraInfo : $cameraInfo->toArray();
			
			
			if ($cameraInfo['thirdProtocol'] == DahuaConst::DH_YUNRUI){ //大华云睿
				$brand_key = DahuaConst::DH_BRAND_KEY;
				if (isset($serviceFaceDevice->thirdProtocolShowArr[$brand_key])) {
					$thirdProtocol = $serviceFaceDevice->thirdProtocolShowArr[$brand_key];
					$thirdProtocolInfo  = $thirdProtocol[DahuaConst::DH_YUNRUI];
					$protocol           = $thirdProtocolInfo['thirdProtocol'];
					$protocolTitle      = $thirdProtocolInfo['thirdTitle'];;
				}else{
					$protocol      = DahuaConst::DH_YUNRUI;
					$protocolTitle = DahuaConst::DH_YUNRUI_TITLE;
				}
				try {
					$deviceInfo = (new FaceDHYunRuiCloudDeviceService())->getDeviceInfo($cameraInfo['camera_sn']);
					$cameraVideo = $serviceFaceDevice->getCameraUrl($cameraInfo['camera_id']);
					if ($deviceInfo['code'] == 0 && $deviceInfo['success']){
						$cameraDeviceInfo = $deviceInfo['data'];
					}else{
						return api_output_error(1001,'云睿反馈：'.$deviceInfo['errMsg']);
					}
				}catch (\RuntimeException $e){
					return api_output_error(1001,$e->getMessage());
				}
			}else if($cameraInfo['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_SHEQU) { //海康云牟内部社区协议
				$brand_key = HikConst::HIK_BRAND_KEY;
				if (isset($serviceFaceDevice->thirdProtocolShowArr[$brand_key])) {
					$thirdProtocol = $serviceFaceDevice->thirdProtocolShowArr[$brand_key];
					$thirdProtocolInfo  = $thirdProtocol[HikConst::HIK_YUNMO_NEIBU_SHEQU];
					$protocol           = $thirdProtocolInfo['thirdProtocol'];
					$protocolTitle      = $thirdProtocolInfo['thirdTitle'];;
				}else{
					$protocol      = HikConst::HIK_YUNMO_NEIBU_SHEQU;
					$protocolTitle = HikConst::HIK_YUNMO_NEIBU_SHEQU_TITLE;
				}
				try {
					$deviceInfo = (new FaceHikCloudNeiBuDeviceService())->getDeviceDetail($cameraInfo['cloud_device_id']);
					$cameraVideo = $serviceFaceDevice->getCameraUrl($cameraInfo['camera_id']);
					if ($deviceInfo['code'] == 200){
						$cameraDeviceInfo = $deviceInfo['data'];
					}else{
						return api_output_error(1001,'海康云牟反馈：'.$deviceInfo['message']);
					}
				}catch (\RuntimeException $e){
					return api_output_error(1001,$e->getMessage());
				}
			}else if($cameraInfo['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_6000C) { //6000C社区边缘
                $brand_key = HikConst::HIK_BRAND_KEY;
                if (isset($serviceFaceDevice->thirdProtocolShowArr[$brand_key])) {
                    $thirdProtocol = $serviceFaceDevice->thirdProtocolShowArr[$brand_key];
                    $thirdProtocolInfo  = $thirdProtocol[HikConst::HIK_YUNMO_NEIBU_6000C];
                    $protocol           = $thirdProtocolInfo['thirdProtocol'];
                    $protocolTitle      = $thirdProtocolInfo['thirdTitle'];;
                }else{
                    $protocol      = HikConst::HIK_YUNMO_NEIBU_6000C;
                    $protocolTitle = HikConst::HIK_YUNMO_NEIBU_6000C_TITLE;
                }
                try {
                    $deviceInfo = (new FaceHikCloudNeiBuDeviceService())->getDeviceDetail($cameraInfo['cloud_device_id']);
                    $cameraVideo = (new Hik6000CCameraService())->getDeviceDetail($cameraInfo['camera_id']);
                    if ($deviceInfo['code'] == 200){
                        $cameraDeviceInfo = $deviceInfo['data'];
                    }else{
                        return api_output_error(1001,'海康云牟反馈：'.$deviceInfo['message']);
                    }
                }catch (\RuntimeException $e){
                    return api_output_error(1001,$e->getMessage());
                }
            }
		}
		
		$data = [
			'protocol'          => $protocol,
			'protocolTitle'     => $protocolTitle,
			'cameraDeviceInfo'  => $cameraDeviceInfo,
			'cameraVideo'       => $cameraVideo,
		];
		return api_output(0,$data);
	}

    /**
     * 获取监控地址
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
	public function getLiveAddress() {
        $village_id = $this->adminUser['village_id'];
        $serviceHouseFaceDevice = new HouseFaceDeviceService();
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $camera_id = $this->request->post('camera_id',0);
        if(!$camera_id){
            return api_output_error(1001,'缺少必传参数');
        }
        $look_url    = '';
        $lookUrlType = '';
        $field = 'camera_id,camera_name,camera_sn,lng,lat,add_time,last_time,thirdProtocol,cloud_is_encrypt,cloud_device_id';
        $cameraInfo = $serviceHouseFaceDevice->getCameraInfo(['camera_id'=>$camera_id,'village_id'=>$village_id],$field);
        if ($cameraInfo){
            $cameraInfo = is_array($cameraInfo) ? $cameraInfo : $cameraInfo->toArray();
            if($cameraInfo['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_6000C) {
                try {
                    $cameraVideo = (new Hik6000CCameraService())->getDeviceDetail($cameraInfo['camera_id']);
                    if (isset($cameraVideo['liveResult']['flv']) && $cameraVideo['liveResult']['flv']) {
                        $look_url    = $cameraVideo['liveResult']['flv'];
                        $lookUrlType = 'flv';
                    }
                }catch (\RuntimeException $e){
                    return api_output_error(1001,$e->getMessage());
                }
            }
        }
        $data = [
            'look_url'          => $look_url,
            'lookUrlType'       => $lookUrlType,
        ];
        return api_output(0,$data);
    }

    /**
     * 查询社区下的设备列表
     * @return \json
     * @throws Exception
     */
    public function getDeviceByCommunityId() {
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        try {
            $queueData = [
                'jobType'       => 'hik6000CGetDeviceByCommunityId',
                'thirdProtocol' => HikConst::HIK_YUNMO_NEIBU_6000C,
                'village_id'    => $village_id,
            ];
            $job_id = $this->traitCommonHikCloud($queueData);
            $data = [
                'job_id' => $job_id
            ];
//            $data = (new Hik6000CCameraService())->getDeviceByCommunityId($village_id);
        }catch (\RuntimeException $e){
            return api_output_error(1001,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 获取对应设备告警事件.
     * @return \think\response\Json|void
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDeviceAlarmEventList() {
        $village_id = $this->adminUser['village_id'];
        $serviceHouseFaceDevice = new HouseFaceDeviceService();
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $camera_id = $this->request->post('camera_id',0);
        $page = $this->request->post('page',1);
        $pageSize = $this->request->post('pageSize',15);
        if(!$camera_id){
            return api_output_error(1001,'缺少必传参数');
        }
        $field = 'camera_id,camera_name,camera_sn,lng,lat,add_time,last_time,thirdProtocol,cloud_is_encrypt,cloud_device_id';
        $cameraInfo = $serviceHouseFaceDevice->getCameraInfo(['camera_id'=>$camera_id,'village_id'=>$village_id],$field);
        if ($cameraInfo && !is_array($cameraInfo)) {
            $cameraInfo = $cameraInfo->toArray();
        }
        if(empty($cameraInfo)){
            return api_output_error(1001,'对应监控不存在');
        }
        $thirdProtocolArr = [HikConst::HIK_YUNMO_NEIBU_SHEQU]; // 支持协议类型
        $alarm_list = [];
        $alarm_count = 0;
        if (!empty($cameraInfo)) {
            $thirdProtocol = isset($cameraInfo['thirdProtocol']) ? intval($cameraInfo['thirdProtocol']) : 0;
            if (!in_array($thirdProtocol, $thirdProtocolArr)){
                return api_output_error(1001,'当前类型设备不支持查看告警消息');
            }
            // todo 注意适配了大华其他的 这里要改
            $business_type = $thirdProtocol == HikConst::HIK_YUNMO_NEIBU_SHEQU ? 1 : 2;
            $cloud_device_id = isset($cameraInfo['cloud_device_id']) ? trim($cameraInfo['cloud_device_id']) : 0;
            if (!$cloud_device_id){
                return api_output_error(1001,'设备未同步添加至对应平台无法获取告警信息');
            }
            $whereAlarm = [];
            $whereAlarm[] = ['business_type', '=', $business_type];
            $whereAlarm[] = ['device_id', '=', $cloud_device_id];
            // todo 目前仅支持高空抛物
//            $whereAlarm[] = ['event_code', '=', 10213];
            $alarm_list = (new DeviceHkNeiBuHandleService())->getCameraAlarmEventList($whereAlarm, true, 'event_time DESC, id DESC', $page, $pageSize);
            if ($alarm_list && !is_array($alarm_list)) {
                $alarm_list = $alarm_list->toArray();
            }
            foreach ($alarm_list as &$alarm) {
                $local_url = isset($alarm['local_url']) ? trim($alarm['local_url']) : '';
                $local_url && $local_url = replace_file_domain($local_url);
                $alarm['local_url'] = $local_url;
                $local_url && $alarm['picture_url'] = $local_url;
                if (isset($alarm['event_time']) && intval($alarm['event_time']) > 1) {
                    $alarm['event_time_txt'] = date('Y-m-d', $alarm['event_time']);
                }
            }
            $alarm_count = (new DeviceHkNeiBuHandleService())->getCameraAlarmEventCount($whereAlarm);
        }
        $data = [
            'alarm_list' => $alarm_list,
            'count' => $alarm_count,
            'cameraInfo' => $cameraInfo,
        ];
        return api_output(0,$data);
    }

    /**
     * 获取对应设备告警事件详情.
     */
    public function getDeviceAlarmInfo() {
        $village_id = $this->adminUser['village_id'];
        if (empty($village_id)){
            return api_output(1002, [], '请先登录到小区后台！');
        }
        $id = $this->request->post('id',0);
        if(!$id){
            return api_output_error(1001,'缺少必传参数');
        }
        $whereAlarm = [];
        $whereAlarm[] = ['id', '=', $id];
        // todo 目前仅支持高空抛物
//        $whereAlarm[] = ['event_code', '=', 10213];
        $alarm = (new DeviceHkNeiBuHandleService())->getCameraAlarmEventInfo($whereAlarm);
        if ($alarm && !is_array($alarm)) {
            $alarm = $alarm->toArray();
        }
        $local_url = isset($alarm['local_url']) ? trim($alarm['local_url']) : '';
        $local_url && $local_url = replace_file_domain($local_url);
        $alarm['local_url'] = $local_url;
        if (isset($alarm['event_time']) && intval($alarm['event_time']) > 1) {
            $alarm['event_time_txt'] = date('Y-m-d', $alarm['event_time']);
        }
        $alarmShow = [];
        if (isset($alarm['event_id']) && $alarm['event_id']) {
            $alarmShow[] = [
                'label' => '事件ID',
                'type' => 'text',
                'value' => $alarm['event_id'],
            ];
        }
        if (isset($alarm['event_time_txt']) && $alarm['event_time_txt']) {
            $alarmShow[] = [
                'label' => '事件时间',
                'type' => 'text',
                'value' => $alarm['event_time_txt'],
            ];
        } elseif (isset($alarm['date_time']) && $alarm['date_time']) {
            $alarmShow[] = [
                'label' => '事件时间（UTC+08:00）',
                'type' => 'text',
                'value' => $alarm['date_time'],
            ];
        }
        if (isset($alarm['device_id']) && $alarm['device_id']) {
            $alarmShow[] = [
                'label' => '设备ID',
                'type' => 'text',
                'value' => $alarm['device_id'],
            ];
        }
        if (isset($alarm['device_name']) && $alarm['device_name']) {
            $alarmShow[] = [
                'label' => '设备名称',
                'type' => 'text',
                'value' => $alarm['device_name'],
            ];
        }
        if (isset($alarm['channel_id']) && $alarm['channel_id']) {
            $alarmShow[] = [
                'label' => '触发报警的设备通道号',
                'type' => 'text',
                'value' => $alarm['channel_id'],
            ];
        }
        if (isset($alarm['channel_name']) && $alarm['channel_name']) {
            $alarmShow[] = [
                'label' => '触发报警的设备通道名称',
                'type' => 'text',
                'value' => $alarm['channel_name'],
            ];
        }
        if (isset($alarm['device_model']) && $alarm['device_model']) {
            $alarmShow[] = [
                'label' => '设备型号',
                'type' => 'text',
                'value' => $alarm['device_model'],
            ];
        }
        if (isset($alarm['device_type']) && $alarm['device_type']) {
            $alarmShow[] = [
                'label' => '设备类型',
                'type' => 'text',
                'value' => $alarm['device_type'],
            ];
        }
        if (isset($alarm['event_description']) && $alarm['event_description']) {
            $alarmShow[] = [
                'label' => '事件描述',
                'type' => 'text',
                'value' => $alarm['event_description'],
            ];
        }
        if ($local_url) {
            $alarmShow[] = [
                'label' => '图片URL',
                'type' => 'image',
                'value' => $local_url,
            ];
        } elseif (isset($alarm['picture_url']) && $alarm['picture_url']) {
            $alarmShow[] = [
                'label' => '图片URL',
                'type' => 'image',
                'value' => $alarm['picture_url'],
            ];
        }
        if (isset($alarm['event_remark']) && $alarm['event_remark']) {
            $alarmShow[] = [
                'label' => '备注',
                'type' => 'text',
                'value' => $alarm['event_remark'],
            ];
        }
        $data = [
            'alarm' => $alarm,
            'alarmShow' => $alarmShow,
        ];
        return api_output(0,$data);
    }
}