<?php


namespace app\task;

use app\community\model\service\Device\DeviceHkNeiBuHandleService;
use think\Exception;
use yunwuxin\cron\Task;


class HikGetEventMsgTask extends Task
{

    public function configure ()
    {
        $this->everyTenMinutes();
    }

    public function execute ()
    {
        try {
            (new DeviceHkNeiBuHandleService())->getEventMsg();
        }catch (Exception $e){
            
        }

    }
}