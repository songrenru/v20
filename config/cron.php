<?php

	use app\task\EveryFiveMinuteSysTask;
	use app\task\NoticeWxHouseTask;
	use app\task\EveryTenMinutesSysTask;
use app\task\GiftOrderAutoConfirmO2OTask;
use app\task\WorksOrderAutoEvaluateTask;
    use app\task\HandleUserWaterElectricUseTask;
    use app\task\HandleUserWaterElectricToSmsTask;
    use app\task\PileNoticeTask;
    use app\task\RepairSubPlanTask;
    use app\task\WorkWeiXinHourlyTask;
    use app\task\HikGetEventMsgTask;

	return [
	    'tasks' => [
			NoticeWxHouseTask::class,
	        EveryFiveMinuteSysTask::class,
	        EveryTenMinutesSysTask::class,
            WorksOrderAutoEvaluateTask::class,
            \app\task\MeterDirectorNoticeHouseTask::class,
            HandleUserWaterElectricUseTask::class,
            HandleUserWaterElectricToSmsTask::class,
            PileNoticeTask::class,
            RepairSubPlanTask::class,
            WorkWeiXinHourlyTask::class,
            HikGetEventMsgTask::class,
            GiftOrderAutoConfirmO2OTask::class,
	    ]
];