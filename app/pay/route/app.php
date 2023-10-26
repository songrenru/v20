<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\facade\Route;

//支付异步通知
Route::rule('wechat_notify', 'notify/wechat')
	->name('wechat_notify');//微信官方支付

Route::rule('alipay_notify', 'notify/alipay')
	->name('alipay_notify');//支付宝官方支付

Route::rule('tianque_notify', 'notify/tianque')
	->name('tianque_notify');//支付宝官方支付

Route::rule('wftpay_notify', 'notify/wftpay')
	->name('wftpay_notify');//支付宝官方支付

Route::rule('chinaums_notify', 'notify/chinaums')
	->name('chinaums_notify');//银联服务商

Route::rule('scrcu_notify', 'notify/scrcu')
	->name('scrcu_notify');//四川农银服务商

Route::rule('ebankpay_notify', 'notify/ebankpay')
    ->name('ebankpay_notify');//日照银行支付
    
Route::rule('hqpay_notify', 'notify/hqpay')
    ->name('hqpay_notify');//环球汇通聚合支付

Route::rule('hqpay_refund', 'notify/hqpay_refund')
    ->name('hqpay_refund');//环球汇通聚合支付退款异步通知


Route::rule('farmersbankpay_notify', 'notify/farmersBankPay')
    ->name('farmersbankpay_notify');//仪征农商行支付

Route::rule('douyin_notify', 'notify/douyinNotify')
    ->name('douyinNotify');//抖音异步通知
Route::rule('douyin_refund_notify', 'notify/douyinRefundNotify')
    ->name('douyinRefundNotify');//抖音退款异步通知


Route::rule('wenzhouBank_notify', 'notify/wenzhouBankNotify')
    ->name('wenzhouBank_notify');//温州银行异步通知

