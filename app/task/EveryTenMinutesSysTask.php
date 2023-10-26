<?php
	/**
	 * ======================================================
	 * Author: cc
	 * Created by PhpStorm.
	 * Copyright (c)  cc Inc. All rights reserved.
	 * Desc: 每10分钟执行一次的任务
	 * old:cms/Lib/ORG/plan/plan_a4_door_open_record.class.php
	 *  ======================================================
	 */

	namespace app\task;

	use app\community\model\service\FaceDeviceService;
    use app\community\model\service\HouseFaceDeviceService;
    use think\Exception;
	use yunwuxin\cron\Task;

	class EveryTenMinutesSysTask extends Task
	{
		public function configure ()
		{
		    // 10分钟执行一次
			$this->everyTenMinutes();
		}

		public function execute ()
		{
			try {
                $faceDeviceService = new FaceDeviceService();
                $faceDeviceService->getDhVillageFaceOpenRecord();
			    $houseFaceDeviceService = new HouseFaceDeviceService();
                $houseFaceDeviceService->a4GetDoorOpenRecordTask();
			}catch (Exception $e){}
		}
	}