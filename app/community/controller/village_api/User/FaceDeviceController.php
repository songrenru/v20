<?php


namespace app\community\controller\village_api\User;


use app\community\controller\UserBaseController;
use app\community\model\service\FaceDeviceService;
use app\community\model\service\Device\FaceDHYunRuiCloudDeviceService;

class FaceDeviceController extends UserBaseController
{
    /**
     * 获取设置乐橙服务地址, 开发者默认填写openapi.lechange.cn:443即可
     * @return \json
     */
    public function getDhYunRuiLcOpenSDKApi() {
        if (!$this->_uid || !isset($this->userInfo['uid'])){
            return api_output_error(1002, "用户不存在或未登录");
        }
        $result = (new FaceDHYunRuiCloudDeviceService())->getLcOpenSDKApi($this->userInfo);
        return api_output(0,$result);
    }

    /**
     *  获取接下来云睿相关请求所需携带的token
     * @return \json
     */
    public function getDhYunRuiCloudAccessToken() {
        if (!$this->_uid || !isset($this->userInfo['uid'])){
            return api_output_error(1002, "用户不存在或未登录");
        }
        $result = (new FaceDHYunRuiCloudDeviceService())->getCloudAccessToken();
        return api_output(0,$result);
    }

    /**
     *  获取乐橙播放token
     * @return \json
     */
    public function getDhYunRuiLeChengUserToken() {
        if (!$this->_uid || !isset($this->userInfo['uid'])){
            return api_output_error(1002, "用户不存在或未登录");
        }
        $result = (new FaceDHYunRuiCloudDeviceService())->getLeChengUserToken();
        return api_output(0,$result);
    }

    /**
     *  纯云app注册sip
     * @return \json
     */
    public function registerDhYunRuiChunYunSip() {

        if (!$this->_uid || !isset($this->userInfo['uid'])){
            return api_output_error(1002, "用户不存在或未登录");
        }
        $phone = $this->request->post('phone');
        if (!$phone && isset($this->userInfo['phone']) && $this->userInfo['phone']) {
            $phone = $this->userInfo['phone'];
        }
        if (!$phone) {
            return api_output_error(1001, "缺少手机号");
        }
        $result = (new FaceDHYunRuiCloudDeviceService())->registerChunYunSip($phone);
        return api_output(0,$result);
    }

    /**
     *  获取云睿平台配置
     * @return \json
     */
    public function getDhYunLechangeConfig() {

        if (!$this->_uid || !isset($this->userInfo['uid'])){
            return api_output_error(1002, "用户不存在或未登录");
        }
        $result = (new FaceDHYunRuiCloudDeviceService())->getLechangeConfig();
        return api_output(0,$result);
    }


    /**
     *  获取开门身份id
     * @return \json
     */
    public function getDhYunPersonFile() {
        if (!$this->_uid || !isset($this->userInfo['uid'])){
            return api_output_error(1002, "用户不存在或未登录");
        }
        $result = (new FaceDeviceService())->filterUserToDataFromUid($this->userInfo['uid']);
        $arr = [];
        if (isset($result['person_id']) && $result['person_id']) {
            $arr['type']         = 1;
            $arr['personFileId'] = $result['person_id'];
        } else {
            $arr['type']         = -1;
            $arr['personFileId'] = "";
        }
        return api_output(0,$arr);
    }
}