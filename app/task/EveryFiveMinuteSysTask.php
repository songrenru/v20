<?php
	/**
	 * ======================================================
	 * Author: cc
	 * Created by PhpStorm.
	 * Copyright (c)  cc Inc. All rights reserved.
	 * Desc: 每五分钟执行一次的任务
	 * old:cms/Lib/ORG/plan/plan_apDevice_status.class.php
	 *  ======================================================
	 */

	namespace app\task;

	use app\community\model\service\ApDeviceService;
    use app\community\model\service\FaceDeviceService;
    use think\Exception;
	use yunwuxin\cron\Task;

	class EveryFiveMinuteSysTask extends Task
	{
		public function configure ()
		{
			$this->everyFiveMinutes();
		}

		public function execute ()
		{
			try {
			    if (cfg('cockpit')){
                    $apService = new ApDeviceService();
                    $apService->getDeviceStatus(); 
                }
                (new FaceDeviceService())->getDeviceStatusAll();
			}catch (Exception $e){
			}

		}
	}