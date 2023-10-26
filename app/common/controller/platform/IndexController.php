<?php

/**
 * 后台首页
 * author by hengtingmei
 */

namespace app\common\controller\platform;

use app\common\controller\CommonBaseController;
use app\common\model\service\IndexService;
use app\common\model\service\LangService;
use app\common\model\service\config\ConfigCustomizationService;
class IndexController extends CommonBaseController
{
	public function initialize()
	{
		parent::initialize();
	}


	/**
	 * desc: 返回网站基本信息
	 * return :array
	 */
	public function config()
	{
		// 网站名称
		$returnArr['site_name'] = cfg('site_name');
		$returnArr['site_short_name'] = cfg('site_short_name');
        // 网站logo
        $returnArr['site_logo'] = cfg('site_logo');
        // 网站白色logo
        $returnArr['site_white_logo'] = cfg('site_white_logo');
		// 网站是否开始https 若开启强制使用
		$returnArr['use_https'] = cfg('use_https') ?? false;
		// 系统后台LOGO
        if (cfg('system_admin_logo')) {
            $system_admin_logo = cfg('system_admin_logo');
            $system_admin_logo = replace_file_domain($system_admin_logo);
        } else {
            $system_admin_logo = cfg('site_url') . "/tpl/System/Static/images/pigcms_logo.png";
        }
		$returnArr['system_admin_logo'] = $system_admin_logo;
		// 网站描述
		$returnArr['site_desc'] = cfg('site_desc') ?? '';
		//网站网址
		$returnArr['site_url'] = cfg('site_url');
		//在线咨询
		$returnArr['site_qq'] = cfg('site_qq');
		//公众号二维码
		$returnArr['wechat_qrcode'] = cfg('wechat_qrcode');
		//联系电话
		$returnArr['site_phone'] = cfg('site_phone');
		//联系邮箱
		$returnArr['site_email'] = cfg('site_email');
		//是否为演示站
		$returnArr['is_demo_domain'] = cfg('is_demo_domain') ? true : false;
		//底部版权信息
		$returnArr['copyright_txt'] = 'Copyright © ' . date('Y') . ' ' . cfg('site_name') . '' . (cfg('top_domain') ?? '') . '版权所有 ' . (cfg('site_icp') ?: '');
		$returnArr['open_bd_spread'] = cfg('open_bd_spread') ?? 0;
		//商家注册协议
		$returnArr['store_register_agreement'] = cfg('store_register_agreement');
		$returnArr['store_privacy_policy'] = cfg('store_privacy_policy');

		// 是否开启商家注册短信验证
		$returnArr['open_merchant_reg_sms'] = cfg('open_merchant_reg_sms');

        //是否开启多语言切换
        $returnArr['open_multilingual'] = cfg('open_multilingual') ? cfg('open_multilingual') : '0';
        //语言配置
        $returnArr['lang_config'] = (new LangService())->langList();
        // 餐饮团购分类 编辑器数量配置
        $returnArr['group_content_switch'] = cfg('group_content_switch');
        // 是否开启国际手机
        $returnArr['international_phone'] = cfg('international_phone');
		// 餐饮团购分类 编辑器数量配置
		$returnArr['group_content_switch'] = cfg('group_content_switch');
        // 是否开启新版业务经理、业务员功能
        $returnArr['open_bd_spread_new'] =cfg('open_bd_spread_new') ?? 0;

		//物业小区使用自己的logo
        $returnArr['property_self_logo'] = cfg('property_self_logo') ? cfg('property_self_logo') : '0';

        //小区驾驶舱
        $returnArr['cockpit'] = cfg('cockpit') ? cfg('cockpit') : 0;

        //顶象验证码安全的appid
        $returnArr['code_captcha_url'] = (cfg('qcloud_captcha_appid') || cfg('dingxiang_captcha_appid')) ?cfg('site_url') . '/wap.php?c=Login&a=app_sms_safe&from=pc_iframe' : '';

        //硬件大数据
        $returnArr['hardware_switch'] = empty(cfg('hardware_switch')) ? false : true;
        $show_sky_cockpit_entrance=cfg('show_sky_cockpit_entrance');
        $returnArr['show_sky_cockpit_entrance'] = empty($show_sky_cockpit_entrance) ? false : true;
        $configCustomizationService=new ConfigCustomizationService();
        $isHangLanShequCustom=$configCustomizationService->getHangLanShequCustom();
        $returnArr['grid_event_center_name']='网格事件中心';
        if($isHangLanShequCustom==1){
            $returnArr['grid_event_center_name']='监控中心';
        }
		return api_output(0, $returnArr);
	}

	//百度浏览器端ak
	public function getWebBaiduKey()
	{
		$returnArr['baidu_map_ak_web'] = cfg('baidu_map_ak_web') ? cfg('baidu_map_ak_web') : cfg('baidu_map_ak');
		return api_output(0, $returnArr);
	}

	/**
	 * author by xiaohei
	 * desc: 系统后台 配置信息、常用功能 两块不会轮询的功能。
	 * return :object
	 */
	public function getMainBasicData()
	{
		$returnArr = [];
		/*
		 * 系统配置信息
		 */
		$returnArr['help_arr'] = [];
		//域名配置
		$domain_help_arr = [
			'cat_name' => '域名配置',
		];
		$domain_help_arr['item_list'][] = [
			'title' => '备案正式域名',
			'level' => 'recommend',
			'info' => '备案后请及时更换正式域名',
			'link_type' => 'doc',
			'link_url' => 'https://www.yuque.com/pigo2o-service/customer/dvtc4z',
		];
		$returnArr['help_arr'][] = $domain_help_arr;

		//基本信息配置
		$basic_help_arr = [
			'cat_name' => '基本信息配置',
		];
		$basic_help_arr['item_list'][] = [
			'title' => '更换初始密码',
			'level' => 'warn',
			'info' => '及时更新保障后台安全',
			'link_type' => 'url',
			'link_url' => '/common/platform.iframe/menu_7',
		];
		$returnArr['help_arr'][] = $basic_help_arr;

		/*
		 * 常用功能
		 */
		$returnArr['plugin_arr'] = [
			[
				'icon' => '',
				'name' => '',
				'url' => '',
			]
		];

		(new IndexService())->getConfigSetSpeedProgress();
		return api_output(0, $returnArr);
	}
}
