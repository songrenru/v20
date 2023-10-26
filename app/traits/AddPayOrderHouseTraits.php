<?php
	/**
	 * +----------------------------------------------------------------------
	 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
	 * +----------------------------------------------------------------------
	 * @author    合肥快鲸科技有限公司
	 * @copyright 合肥快鲸科技有限公司
	 * @link      https://www.kuaijing.com.cn
	 * @Desc      普通队列相关属性
	 */

	namespace app\traits;

//v20/app/traits/CommonLogTraits.php

use app\job\AddPayOrderHouseJob;
use app\job\CommonLogSysJob;
use think\facade\Queue;

trait AddPayOrderHouseTraits
	{
		/**
		 * 队列名称
		 * @return string
		 */
		 public function queueNameComonLog()
		 {
			 return 'add-pay-order-house';
		 }

		/**
		 * 把配置日志压入队列，默认延迟5秒执行
		 * @param     $queuData
		 *             eg.
		 *  $data = [
		 *          'logData' => [ //当前要记录的信息
		 *          'tbname' => '物业新版收费科目管理设置表',
		 *          'table'  => 'house_new_charge',
		 *          'client' => '物业后台',
		 *          'trigger_path' => '缴费管理->收费科目管理',
		 *          'trigger_type' => $this->getAddLogName(),
		 *          'addtime'      => time(),
		 *          '*   //其他的依赖项，请具体看 v20/app/common/model/db/CommonSystemLog.php $schema 定义
		 *      ],
		 *      'newData' => [], //当前要更新的数据
		 *      'oldData' => []  //表更新之前的数据
		 *	];
		 *
		 * @param int $time default 5 s
		 */
		 public function laterLogInQueue($queuData,$time=5)
		 {
			 Queue::later($time,AddPayOrderHouseJob::class,$queuData,$this->queueNameComonLog());
		 }


	}