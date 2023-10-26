<?php

/**
 * ======================================================

 */
namespace app\task;

use app\pay\controller\NotifyController;
use yunwuxin\cron\Task;

class ScrcuOrderPayInfoQueryTask extends Task
{
    public function configure ()
    {
        /*
        *$this->daily();  //按天执行
        $this->dailyAt();
        */
        $this->everyMinute();  //每分钟
        
    }

    public function execute ()
    {
        $notifyController = new NotifyController();
        $notifyController->scrcu(true); 
    }
}