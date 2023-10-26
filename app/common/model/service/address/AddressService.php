<?php
/**
 * 地址改版service
 * Author: zhumengqun
 * Date Time: 2020/08/27
 */

namespace app\common\model\service\address;


use app\common\model\service\address\NationalPhoneService;
use app\common\model\db\UserAdress;
use app\common\model\service\AreaService;

class AddressService
{
    /**
     * 展示地址列表
     * @param $uid
     * @return array
     */
    public function getAllList($log_uid)
    {
        //验证登录
        if (empty($log_uid)) {
            throw new \think\Exception("请传递用户UID参数", 1002);
        }
        //获取省市区名称
        $area = new AreaService();
        //获取当前登录的用户地址信息
        $userAddress = new UserAdress();
        $addrList = $userAddress->getAdress(true, ['uid' => $log_uid]);
        if (!empty($addrList)) {
            foreach ($addrList as $key => $val) {
                //通过区域id 获取区域名称
                $province_name = $area->getAreaByAreaId($val['province'])['area_name'] ?? '';
                $city_name = $area->getAreaByAreaId($val['city'])['area_name'] ?? '';
                $area_name = $area->getAreaByAreaId($val['area'])['area_name'] ?? '';
                //判断地址显示格式
                if (!cfg('open_multilingual')) {
                    $val['address_txt'] = $province_name . $city_name . $area_name . $val['adress'] . $val['detail'];
                } else if (cfg('country_code') == 'au') {
                    $val['address_txt'] = trim(($val['detail'] ? $val['detail'] : '') . $val['adress'] . $area_name . $province_name . $val['zip_code']);
                } else {
                    $val['address_txt'] = trim(($val['detail'] ? $val['detail'] : '') . $val['adress'] . $area_name . $city_name);
                }
                $arr[] = array(
                    'name' => $val['name'],
                    'address_id' => $val['adress_id'],
                    'address_txt' => $val['address_txt'],
                    'defaults' => $val['default'],
                    'tag' => $val['tag'] ?: '',
                    'lng' => $val['longitude'],
                    'lat' => $val['latitude'],
                    'phone' => $val['phone'],
                    'phone_country_type' => $val['phone_country_type'] ? $val['phone_country_type'] : '',
                    'phone_txt' => $val['phone_country_type'] ? '+' . $val['phone_country_type'] . ' ' . $val['phone'] : $val['phone'],
                    'sex' => $val['sex'],
                );
            }
            if (!empty($arr)) {
                return $arr;
            } else {
                return array();
            }
        } else {
            return array();
        }
    }


    /**
     * 编辑地址
     * @param $address_id
     * @return array
     */
    public function getEditAddr($log_uid, $address_id = '')
    {
        //验证登录
        if (empty($log_uid)) {
            throw new \think\Exception("请传递用户UID参数", 1002);
        }
        if (!empty($address_id)) {
            $userAddress = new UserAdress();
            $addrNow = $userAddress->getAdress(true, ['uid' => $log_uid, 'adress_id' => $address_id]);
            if (!empty($addrNow)) {
                $arr = [
                    'name' => $addrNow[0]['name'],
                    'address_id' => $addrNow[0]['adress_id'],
                    'detail' => $addrNow[0]['detail'],
                    'address' => $addrNow[0]['adress'],
                    'defaults' => $addrNow[0]['default'],
                    'tag' => $addrNow[0]['tag'] ?: '',
                    'lng' => $addrNow[0]['longitude'],
                    'lat' => $addrNow[0]['latitude'],
                    'phone' => $addrNow[0]['phone'],
                    'phone_country_type' => $addrNow[0]['phone_country_type'] ? $addrNow[0]['phone_country_type'] : '',
                    'sex' => $addrNow[0]['sex'],
                ];
                if (!empty($arr)) {
                    return $arr;
                } else {
                    throw new \think\Exception("未查到相关信息", 1003);
                }
            } else {
                throw new \think\Exception("未查到相关信息", 1003);
            }

        } else {
            throw new \think\Exception("参数 address_id 有误", 1003);
        }
    }

    /**
     * 获取手机区号
     * @param
     * @return array
     */
    public function getAreaCode()
    {
        $areaCode = new NationalPhoneService();
        $code = $areaCode->getAreaCode();
        return $code;

    }

    /**
     * 获取搜索地址
     * @param uid
     * @return array
     */
    /* public function getMapAddr()
    {

    }*/


    /**
     * 编辑保存或新增保存地址
     * @param
     * @return array
     */
    public function addOrEditAddr($arr)
    {
        //验证登录
        if (empty($arr['uid'])) {
            throw new \think\Exception("请传递用户UID参数", 1002);
        }

        $addOredit = new UserAdress();
        if ($arr['name'] || $arr['adress'] || $arr['latitude'] || $arr['longitude'] || $arr['phone'] || $arr['sex']) {
            //根据经纬度解析出省市区id
            $autoAddr = new AutoAddressService();
            $now_city = $autoAddr->cityMatching($arr['latitude'], $arr['longitude']);
            fdump_api(['addOrEditAddr' => $now_city],'address/cityMatching',true);
            if (!cfg('open_multilingual')) {
                if (empty($now_city['area_info']['city_id'])) {
                    throw new \think\Exception('城市未查找到');
                }
                if (empty($now_city['area_info']['province_id'])) {
                    throw new \think\Exception('省/州未查找到');
                }
            }
            $arr['province'] = $now_city['area_info']['province_id'];
            $arr['city'] = $now_city['area_info']['city_id'];
            $arr['area'] = $now_city['area_info']['area_id'];
            $arr['last_time'] = time();
            if ($arr['default'] == 1) {
                //当前设为默认时取消用户其他默认
                $res = $addOredit->updateDefault($arr['uid']);
                if ($res === false) {
                    throw new \think\Exception('操作失败，请重试');
                }
            }
            
            $arr['province'] = $arr['province'] ?? 0;
            $arr['city'] = $arr['city'] ?? 0;
            $arr['area'] = $arr['area'] ?? 0;

            if (!empty($arr['adress_id'])) {
                //编辑
                $where = [
                    'adress_id' => $arr['adress_id']
                ];
                $result = $addOredit->edit1($where, $arr);
            } else {
                //保存
                $result = $addOredit->add1($arr);
            }
            if ($result !== false) {
                return ['address_id' => $addOredit->adress_id];
            } else {
                throw new \think\Exception('操作失败，请重试');
            }
        } else {
            throw new \think\Exception("参数缺失", 1003);
        }

    }

    /**
     * 删除地址
     * @param $address_id
     * @return array
     */
    public function delAddr($log_uid, $address_id)
    {
        //验证登录
        if (empty($log_uid)) {
            throw new \think\Exception("请传递用户UID参数", 1002);
        }
        if (!empty($address_id)) {
            $where = ['adress_id' => $address_id, 'uid' => $log_uid];
            $del = new UserAdress();
            $result = $del->del1($where);
            if ($result !== false) {
                return true;
            } else {
                throw new \think\Exception('操作失败，请重试');
            }
        } else {
            throw new \think\Exception('参数缺失', 1002);
        }

    }
}
