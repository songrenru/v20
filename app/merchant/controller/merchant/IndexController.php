<?php
/**
 * 后台首页
 * author by hengtingmei
 */
namespace app\merchant\controller\merchant;

use app\common\controller\CommonBaseController;
class IndexController extends CommonBaseController{
    public function initialize()
    {
        parent::initialize();
    }


    /**
     * desc: 返回网站基本信息
     * return :array
     */
    public function config(){
        // 网站名称
        $returnArr['site_name'] = $this->config['site_name'];
        // 网站logo
        $returnArr['site_logo'] = replace_file_domain($this->config['site_logo']);
        // 系统后台LOGO
        $returnArr['system_admin_logo'] = $this->config['system_admin_logo'] ? replace_file_domain($this->config['system_admin_logo']) : cfg('site_url')."/tpl/System/Static/images/pigcms_logo.png";
        // 网站描述
        $returnArr['site_desc'] = isset($this->config['site_desc']) ? $this->config['site_desc'] : '';
        return api_output(0, $returnArr);
    }


}