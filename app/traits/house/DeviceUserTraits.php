<?php
/**
 * +----------------------------------------------------------------------
 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
 * +----------------------------------------------------------------------
 * @author    合肥快鲸科技有限公司
 * @copyright 合肥快鲸科技有限公司
 * @link      https://www.kuaijing.com.cn
 * @Desc      小区住户关联设备方时候的一些公用方法
 */


namespace app\traits\house;

use app\community\model\service\HouseVillageUserBindService;
use app\consts\DeviceConst;


trait DeviceUserTraits
{
    public function getDeviceBindUser($pigcms_id, $village_id = 0, $save = true)
    {
        $whereUserBind = [];
        $whereUserBind[] = ['status', '=', 1];
        if (intval($village_id)>0) {
            $whereUserBind[] = ['village_id', '=', $village_id];
        }
        $whereUserBind[] = ['pigcms_id', '=', $pigcms_id];
        $houseVillageUserBindService = new HouseVillageUserBindService();
        $field = true;
        $userBinds = $houseVillageUserBindService->getBindInfo($whereUserBind,$field);
        if ($userBinds && !is_array($userBinds)) {
            $userBinds = $userBinds->toArray();
        }
        if (empty($userBinds) && $save) {
            $updateBindParam = [
                'face_img_status' => 2,
                'face_img_reason' => '住户状态不正常',
            ];
            $houseVillageUserBindService->saveUserBind(['pigcms_id' => $pigcms_id], $updateBindParam);
            $this->syn_status     = DeviceConst::BIND_USER_ALL_SYN_ERR;
            $this->syn_status_txt = '住户同步失败(住户状态不正常)';
            $this->err_reason     = "同步的住户状态不正常";
            return false;
        }
        return $userBinds;
    }
}