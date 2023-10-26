<?php

/**
 * Date: 2023/5/27
 */

namespace app\job;

use app\community\model\service\ParkPassageService;
use think\Exception;
use think\queue\Job as DoJob;

class ParkPassageHouseJob
{

    public function fire(DoJob $job , $data)
    {
        if ($job->attempts() >= 1){
            $job->delete();
        }
        try {
            (new ParkPassageService())->syncDeviceVolume($data['id']);

        }catch (Exception $e){}
    }

    public function failed($data)
    {
    }
}