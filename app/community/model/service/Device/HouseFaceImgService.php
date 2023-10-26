<?php

declare(strict_types=1);
/**
 * This file is part of Kuaijing Bailing.
 *
 * @link     https://www.kuaijingai.com
 * @document https://help.kuaijingai.com
 * @contact  www.kuaijingai.com 7*12 9:00-21:00
 */

namespace app\community\model\service\Device;

use app\common\model\db\ProcessSubPlan;
use app\community\model\service\FaceDeviceService;

class HouseFaceImgService
{
    /**
     * 同步人员触发盒子.
     */
    public function commonUserToBox($uid, $pigcms_id = 0, $otherParam = [], $synOut = true) {
        try {
            $this->commonUserToDevice($uid, $pigcms_id, $otherParam, $synOut);
        } catch (\Exception $e){
            fdump_api($e->getMessage(),'$commonUserToBox');
        }
        return true;
    }
    
    public function commonUserToDevice($uid, $pigcms_id = 0, $otherParam = [], $synOut = true)
    {
        $planParam = [
            'synOut' => $synOut,
        ];
        $unique_id = 'subUserToDevice';
        if ($uid) {
            $planParam['uid'] = $uid;
            $unique_id .= '_uid' . $uid;
        }
        if ($pigcms_id) {
            $planParam['pigcms_id'] = $pigcms_id;
            if (!$uid) {
                $unique_id .= '_pigcmsId' . $pigcms_id;
            }
        }
        $orderGroupId = isset($otherParam['orderGroupId']) && $otherParam['orderGroupId'] ? trim($otherParam['orderGroupId']) : md5(uniqid() . $_SERVER['REQUEST_TIME']);// 标记统一执行命令
        if ($orderGroupId) {
            $planParam['orderGroupId'] = $orderGroupId;
        }
        $now_time = time();
        $arr = [];
        $arr['param'] = serialize($planParam);
        $arr['plan_time'] = -9999;
        // 优先级暂定为高
        $arr['space_time'] = 0;
        $arr['add_time'] = $now_time;
        $arr['file'] = 'sub_user_to_face_device';
        $arr['time_type'] = 1;
        $arr['unique_id'] = $unique_id;
        $sub_process_num = cfg('sub_process_num');
        $sub_process_num=intval($sub_process_num);
        if ($sub_process_num<1) {
            $sub_process_num = 1;
        }
        $maxArr=array($sub_process_num,3);
        $maxV=max($maxArr);
        $arr['rand_number'] = mt_rand(1,$maxV);
        (new ProcessSubPlan())->add($arr);
        $house_a5_client_id = cfg('house_a5_client_id');
        $HikCloudClientId   = cfg('HikCloudClientId');
        if ($house_a5_client_id || $HikCloudClientId) {
            // 暂时只是支持 海康内部+大华云睿 存在配置即调用 避免无用调用
            try {
                (new FaceDeviceService())->userSynDevice($pigcms_id, 0);
            } catch (\Exception $e){
                fdump_api($e->getMessage(),'$commonUserToDevice');
            }
        }
        return true;
    }
}