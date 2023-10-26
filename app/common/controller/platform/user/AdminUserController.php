<?php
/**
 * 后台用户管理
 * Created by subline.
 * Author: hengtingmei
 * Date Time: 2020/5/7 09:01
 */
namespace app\common\controller\platform\user;
use app\common\model\service\admin_user\AdminUserService as AdminUserService;
use app\common\controller\platform\AuthBaseController;
class AdminUserController extends AuthBaseController{
    public $adminUserServiceObj = null;
    public function initialize()
    {
        parent::initialize();
        $this->adminUserServiceObj = new AdminUserService();
    }

   
    /**
     * desc: 返回用户信息
     * return :array
     */
    public function userInfo(){
    	$returnArr = $this->adminUserServiceObj->formatUserData($this->systemUser);
    	if (!$returnArr) {
           	return api_output_error(1002, "用户不存在或未登录");
    	}
        return api_output(0, $returnArr);
    }
}