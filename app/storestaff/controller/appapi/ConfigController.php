<?php

namespace app\storestaff\controller\appapi;

/**
 * 配置参数
 *
 * @author: 张涛
 * @date: 2020/11/04
 */
class ConfigController
{
	public function index()
	{
		// 网站名称
		$returnArr['site_name'] = cfg('site_name');
		// 网站logo
		$returnArr['site_logo'] = replace_file_domain(cfg('site_logo'));
		// 系统后台LOGO
		$returnArr['system_admin_logo'] = cfg('system_admin_logo') ? replace_file_domain(cfg('system_admin_logo')) : "./tpl/System/Static/images/pigcms_logo.png";
		// 网站描述
		$returnArr['site_desc'] = cfg('site_desc');

		//货币符号
		$returnArr['currency_symbol'] = cfg('Currency_symbol') ? cfg('Currency_symbol') : '￥';

		$returnArr['dining_rules'] = '出餐时间=客户期望送达时间-骑手配送时间 （系统自动算出）用于您的出餐排序';
		return api_output(0, $returnArr);
	}
}
