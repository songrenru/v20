<?php
	/**
	 * +----------------------------------------------------------------------
	 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
	 * +----------------------------------------------------------------------
	 * @author    合肥快鲸科技有限公司
	 * @copyright 合肥快鲸科技有限公司
	 * @link      https://www.kuaijing.com.cn
	 * @Desc      普通操作日志队列 ，本队列不允许塞业务日志，
	 *            另外，注意队列重复消费的问题
	 */

	namespace app\job;

	use app\common\model\service\CommonSystemLogService;
    use app\community\model\service\HouseNewCashierService;
    use think\Exception;
	use think\queue\Job as DoJob;

	class AddPayOrderHouseJob
	{
		/**
		 * @param DoJob $job
		 * @param     $data  eg.
		 *                       $data = [
									'logData' => [ //当前要记录的信息
										'tbname' => '物业新版收费科目管理设置表',
										'table'  => 'house_new_charge',
										'client' => '物业后台',
										'trigger_path' => '缴费管理->收费科目管理',
										'trigger_type' => $this->getAddLogName(),
										'addtime'      => time(),
		                                //其他的依赖项，请具体看 v20/app/common/model/db/CommonSystemLog.php $schema 定义
									],
									'newData' => [], //当前要更新的数据
									'oldData' => []  //表更新之前的数据
									];
		 *
		 *  可以参考：v20/app/community/model/service/HouseNewPorpertyService.php 的 addChargeNumber() 、editChargeNumber() 方法
		 */
		public function fire(DoJob $job , $data)
		{
           //  fdump_api([$data],'AddPayOrderHouseJob_0720',1);
			if ($job->attempts() >= 1){ //
				$job->delete();
			}
			try {
				(new HouseNewCashierService())->call1($data);
			}catch (Exception $e){
			    fdump_api([$data,$e->getMessage()],'AddPayOrderHouseJob_0720',1);
            }

		}

		public function failed($data)
		{
		}
	}