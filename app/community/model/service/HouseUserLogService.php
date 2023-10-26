<?php
/**
 * 开门记录
 * @author weili
 * @datetime 2020/8/3
 */

namespace app\community\model\service;
use app\community\model\db\HouseFaceDevice;
use app\community\model\db\HouseUserLog;
use app\community\model\db\HouseVillageDoor;
use app\community\model\db\HouseVillageOpenDoor;
use app\community\model\service\HouseVillageService;
use app\community\model\db\HouseVillage;

class HouseUserLogService
{
    public $userType = [
        '0'=>'房主',
        '1'=>'家人',
        '2'=>'租客',
        '3'=>'房主',
        '4'=>'亲朋好友'
    ];
    /**
     * Notes:获取开门记录列表
     * @param $where
     * @param $field
     * @param $village_id
     * @return mixed
     * @author: weili
     * @datetime: 2020/8/3 13:39
     */
    public function getOpenDoorLogList($where,$field,$village_id)
    {
        $dbHouseUserLog = new HouseUserLog();
        $serviceHouseVillage = new HouseVillageService();
        $dbHouseVillageOpenDoor = new HouseVillageOpenDoor();
        $newArr = [];
        $count=0;
        //套餐过滤
        $house_village_user_bind_service = new HouseVillageUserBindService();
        $package_content = $this->getOrderPackage($village_id);
        $hardware_intersect = array_intersect([7,8],$package_content);
        if($hardware_intersect && count($hardware_intersect)>0) {
            $list = $dbHouseUserLog->getList($where, $field);
            if ($list) {
                foreach ($list as $key => &$val) {
                    $newArr[$key]['title'] = '人脸开门';
                    $log_detail = [];
                    if (isset($val['log_detail']) && $val['log_detail']) {
                        try {
                            $log_detail = unserialize($val['log_detail']);
                        } catch (\Exception $e) {
                            $log_detail = [];
                        }
                    }
                    if (!$log_detail && isset($val['log_detail']) && $val['log_detail']) {
                        $log_detail = json_decode($val['log_detail'], true);
                    }
                    if (!empty($log_detail) && count($log_detail) > 0) {
                        if (array_key_exists('face_img', $log_detail)) {
                            $newArr[$key]['face_img'] = replace_file_domain($log_detail['face_img']);
                        } elseif (array_key_exists('imgUrl', $log_detail)) {
                            $newArr[$key]['face_img'] = replace_file_domain($log_detail['imgUrl']);
                        } elseif (array_key_exists('mediaUrls', $log_detail)) {
                            $newArr[$key]['face_img'] = replace_file_domain($log_detail['mediaUrls']);
                        } elseif (array_key_exists('face_img_url', $log_detail)) {
                            $newArr[$key]['face_img'] = replace_file_domain($log_detail['face_img_url']);
                        } elseif (array_key_exists('imgUrl', $log_detail)) {
                            $newArr[$key]['face_img'] = replace_file_domain($log_detail['imgUrl']);
                        } elseif (array_key_exists('capture_img_url', $log_detail)) {
                            $newArr[$key]['face_img'] = replace_file_domain($log_detail['capture_img_url']);
                        } elseif (array_key_exists('pictureURL', $log_detail)) {//A5设备
                            $newArr[$key]['face_img'] = replace_file_domain($log_detail['pictureURL']);
                        } else {
                            $newArr[$key]['face_img'] = cfg('site_url') . '/static/default_img.png';
                        }
                        if ($val['log_from'] == 2)//手动开门
                        {
                            $newArr[$key]['title'] = '远程开门';
                            $newArr[$key]['face_img'] = cfg('site_url') . '/static/default_img.png';
                        }
                        if (!$newArr[$key]['face_img']) {
                            $newArr[$key]['face_img'] = cfg('site_url') . '/static/default_img.png';
                        }
                        if (!$val['phone']) {
                            $newArr[$key]['phone'] = '';
                        } else {
                            $newArr[$key]['phone'] = $val['phone'];
                        }
                        if (isset($val['single_id']) && $val['single_id'] && isset($val['floor_id']) && $val['floor_id'] && isset($val['layer_id']) && $val['layer_id'] && isset($val['vacancy_id']) && $val['vacancy_id']){
                            $newArr[$key]['address'] = $serviceHouseVillage->getSingleFloorRoom($val['single_id'], $val['floor_id'], $val['layer_id'], $val['vacancy_id'], $village_id);
                        } elseif ($val['log_name']) {
                            $newArr[$key]['address'] = $val['log_name'];
                        }
                        if ($val['log_time']) {
                            $newArr[$key]['log_time_old'] = $val['log_time'];
                            $newArr[$key]['log_time'] = date('H:i:s', $val['log_time']);
                        }
                        if (isset($val['type'])) {
                            $newArr[$key]['type'] = $this->userType[$val['type']];
                        } else {
                            $newArr[$key]['type'] = '暂无';
                        }
                        if ($val['device_name']) {
                            $newArr[$key]['device_name'] = $val['device_name'];
                        } else {
                            $newArr[$key]['device_name'] = '';
                        }
                        if (!$val['phone'] && (isset($log_detail['info']) && !empty($log_detail['info']))) {
                            $info = $log_detail['info'];
                            $info_arr = json_decode($info, true);
                            // 用户信息数组
                            $target_info = $info_arr['Target'];
                            if($target_info){
                                $target_msg = reset($target_info);
                                $person = $target_msg['person'];
                            }else{
                                $person = [];
                            }
                            if ($person) {
                                $name = (isset($person['name']) && $person['name'])?$person['name']:'';
                                $ID = (isset($person['ID']) && $person['ID'])?$person['ID']:'';
                                $where_bind = [];
                                $is_where_bind = false;
                                if (is_idcard($ID)) {
                                    $is_where_bind = true;
                                    $where_bind[] = ['id_card','=',$ID];
                                } elseif ($name) {
                                    $is_where_bind = true;
                                    $where_bind[] = ['name','=',$name];
                                }
                                if ($is_where_bind) {
                                    $users = $house_village_user_bind_service->getBindInfo($where_bind,'pigcms_id,type,phone,single_id,floor_id,layer_id,vacancy_id,address');
                                    if ($users) {
                                        $users = $users->toArray();
                                        if (isset($users['type'])) {
                                            $newArr[$key]['type'] = $this->userType[$users['type']];
                                        } else {
                                            $newArr[$key]['type'] = '暂无';
                                        }
                                        if (isset($users['phone']) && $users['phone']) {
                                            $newArr[$key]['phone'] = $users['phone'];
                                        } else {
                                            $newArr[$key]['phone'] = '';
                                        }
                                        if (isset($users['single_id']) && $users['single_id'] && isset($users['floor_id']) && $users['floor_id'] && isset($users['layer_id']) && $users['layer_id'] && isset($users['vacancy_id']) && $users['vacancy_id']) {
                                            $newArr[$key]['address'] = $serviceHouseVillage->getSingleFloorRoom($users['single_id'], $users['floor_id'], $users['layer_id'], $users['vacancy_id'], $village_id);
                                        } elseif ($users['address']) {
                                            $newArr[$key]['address'] = $users['address'];
                                        } elseif ($person['address']) {
                                            $newArr[$key]['address'] = $person['address'];
                                        }
                                    }
                                }
                                if (!$newArr[$key]['address']) {
                                    $newArr[$key]['address'] = $person['address']?$person['address']:'';
                                }
                            }
                        } elseif (!$newArr[$key]['address'] && (isset($log_detail['info']) && !empty($log_detail['info']))) {
                            $info = $log_detail['info'];
                            $info_arr = json_decode($info, true);
                            // 用户信息数组
                            $target_info = $info_arr['Target'];
                            if($target_info) {
                                $target_msg = reset($target_info);
                                $person = $target_msg['person'];
                                $newArr[$key]['address'] = $person['address'] ? $person['address'] : '';
                            }
                        }
                    } else {
                        $newArr[$key]['face_img'] = cfg('site_url') . '/static/default_img.png';
                    }
                    $count = count($list);
                }
            }
        }
        //套餐过滤
        if(in_array(6,$package_content)) {
            //蓝牙门禁
            $map[] = ['o.village_id', '=', $village_id];
            $fields = 'o.add_time,u.phone,d.door_name';
            $bluetooth = $dbHouseVillageOpenDoor->getList($map, $fields);
            if ($bluetooth) {
                foreach ($bluetooth as $key => $val) {
                    $newArr[$count + $key]['title'] = '蓝牙开门';
                    $newArr[$count + $key]['type'] = '户主';
                    if ($val['add_time']) {
                        $newArr[$count + $key]['log_time_old'] = $val['add_time'];
                        $newArr[$count + $key]['log_time'] = date('H:i:s', $val['add_time']);
                    } else {
                        $newArr[$count + $key]['log_time'] = '';
                    }
                    $newArr[$count + $key]['device_name'] = $val['door_name'];
                    $newArr[$count + $key]['face_img'] = 'https://o2o-demo-img.oss-cn-hangzhou.aliyuncs.com/upload/houseface/000/002/699/5f2a230125804777.png';
                    if ($val['phone']) {
                        $newArr[$count + $key]['phone'] = $val['phone'];
                    } else {
                        $newArr[$count + $key]['phone'] = '';
                    }
                    $newArr[$count + $key]['address'] = '--';
                }
            }
        }
        //$newList['list'] = $this->getRsort($newArr,'log_time');
        $list = $this->getRsort($newArr,'log_time_old');
        $arr = [
            ['title'=>'拍照图片','type'=>0],
            ['title'=>'开门方式','type'=>0],
            ['title'=>'抓拍时间','type'=>0],
            ['title'=>'联系方式','type'=>0],
            ['title'=>'用户类型','type'=>0],
            ['title'=>'设备名称','type'=>0],
            ['title'=>'地址','type'=>0],
        ];
        $list_arr = [];
        $list_arr[0] = $arr;
        $open_log_msg_hide = cfg('open_log_msg_hide');
        foreach ($list as $key=>$val)
        {
            if ($open_log_msg_hide && 1==$open_log_msg_hide) {
                if(strlen($val['phone']) == 11){
                    $val['phone'] = substr($val['phone'],0,3).'****'.substr($val['phone'],7,4);
                }else if(strlen($val['phone']) == 10){
                    $val['phone'] = substr($val['phone'],0,2).'****'.substr($val['phone'],7,4);
                }else if(strlen($val['phone']) == 9){
                    $val['phone'] = substr($val['phone'],0,2).'****'.substr($val['phone'],7,3);
                }else if(strlen($val['phone']) == 8){
                    $val['phone'] = substr($val['phone'],0,2).'***'.substr($val['phone'],7,3);
                }else if(strlen($val['phone']) == 7){
                    $val['phone'] = substr($val['phone'],0,2).'***'.substr($val['phone'],7,2);
                } else {
                    $val['phone'] = substr($val['phone'],0,3).'****'.substr($val['phone'],7,4);
                }
                $val['address'] = '***';
            }
            $list_arr[$key+1] = [
                ['title'=>$val['face_img'],'type'=>1],
                ['title'=>$val['title'],'type'=>0],
                ['title'=>$val['log_time'],'type'=>0],
                ['title'=>isset($val['phone'])?$val['phone']:'','type'=>0],
                ['title'=>$val['type'],'type'=>0],
                ['title'=>$val['device_name'],'type'=>0],
                ['title'=>$val['address'],'type'=>0],
            ];
        }
        $newList['list'] = $list_arr;
        $dbHouseVillageDoor = new HouseVillageDoor();//蓝牙门禁
        $dbHouseFaceDevice = new HouseFaceDevice();  //人脸设备
        $doorWhere[] = ['village_id','=',$village_id];
        $doorCount = $dbHouseVillageDoor->getCount($doorWhere);

        $wheres[] = ['village_id','=',$village_id];
        $wheres[] = ['is_del','=',0];
        $faceCount = $dbHouseFaceDevice->getCount($wheres);
        //开门设备 显示状态
        if($doorCount || $faceCount){
            $status = 1;
        }else{
            $status = 0;
        }
        $newList['status'] = $status;
        $hardware_intersect = array_intersect([6,7,8],$package_content);
        if($hardware_intersect && count($hardware_intersect)>0) {
            $newList['machine_show'] = true;
        }else{
            $newList['machine_show'] = false;
        }
        return $newList;
    }

    /**
     * Notes: 获取开门坐标
     * @param $where
     * @param $field
     * @param $village_id
     * @return mixed
     * @author: weili
     * @datetime: 2020/8/5 9:44
     */
    public function getOpenAddress($where,$field,$village_id,$sTime)
    {
        $dbHouseUserLog = new HouseUserLog();
        $serviceHouseVillage = new HouseVillageService();
        $dbHouseVillage = new HouseVillage();
        $dbHouseVillageOpenDoor = new HouseVillageOpenDoor();
        $newArr = [];

        //套餐过滤
        $package_content = $this->getOrderPackage($village_id);
        $hardware_intersect = array_intersect([7,8],$package_content);
        if($hardware_intersect && count($hardware_intersect)>0) {
            //人脸门禁坐标
            $where[] = ['l.log_time', '>=', $sTime];
            $where[] = ['l.log_time', '<=', time()];
            $list = $dbHouseUserLog->getAddressList($where, $field);
            if ($list) {
                foreach ($list as $key => $val) {
                    if ($val['long'] && $val['lat']) {
                        $newArr[$key]['lng'] = $val['long'];
                        $newArr[$key]['lat'] = $val['lat'];
                        $newArr[$key]['log_id'] = $val['log_id'];
                        $newArr[$key]['log_time'] = date('Y-m-d H:i:s', $val['log_time']);
                    } elseif ($val['lng'] && $val['lats']) {
                        $newArr[$key]['lng'] = $val['lng'];
                        $newArr[$key]['lat'] = $val['lats'];
                        $newArr[$key]['log_id'] = $val['log_id'];
                        $newArr[$key]['log_time'] = date('Y-m-d H:i:s', $val['log_time']);
                    }
                }
            }
        }
        $count = count($newArr);
        //套餐过滤
        if(in_array(6,$package_content)) {
            //蓝牙门禁坐标
            $map[] = ['o.village_id', '=', $village_id];
            $map[] = ['o.add_time', '>=', $sTime];
            $map[] = ['o.add_time', '<=', time()];
            $fields = 'o.id,o.add_time,d.lng,d.lat,f.long as lngf,f.lat as latf,a.lng as lnga,a.lat as lata';
            $bluetooth = $dbHouseVillageOpenDoor->getAddressList($map, $fields);
            if ($bluetooth) {
                foreach ($bluetooth as $key => $val) {
                    if ($val['lng'] && $val['lat']) {
                        $newArr[$count + $key]['lng'] = $val['lng'];
                        $newArr[$count + $key]['lat'] = $val['lat'];
                        $newArr[$count + $key]['log_time'] = date('Y-m-d H:i:s', $val['add_time']);
                        $newArr[$count + $key]['log_id'] = $val['id'];
                    } elseif ($val['lngf'] && $val['latf']) {
                        $newArr[$count + $key]['lng'] = $val['lngf'];
                        $newArr[$count + $key]['lat'] = $val['latf'];
                        $newArr[$count + $key]['log_time'] = date('Y-m-d H:i:s', $val['add_time']);
                        $newArr[$count + $key]['log_id'] = $val['id'];
                    } elseif ($val['lnga'] && $val['lata']) {
                        $newArr[$count + $key]['lng'] = $val['lnga'];
                        $newArr[$count + $key]['lat'] = $val['lata'];
                        $newArr[$count + $key]['log_time'] = date('Y-m-d H:i:s', $val['add_time']);
                        $newArr[$count + $key]['log_id'] = $val['id'];
                    }
                }
            }
        }
        $village_field = 'village_id,long,lat';
        $village_info = $dbHouseVillage->getOne($village_id,$village_field);
        $newList = $this->getRsort($newArr,'log_time');
        $data['list'] = $newList;
        $data['info'] = $village_info;
        return $data;
    }
    /**
     * Notes: 获取开门总数量
     * @author: weili
     * @datetime: 2020/8/3 14:34
     */
    public function getOpenDoorNum($where)
    {
        $dbHouseUserLog = new HouseUserLog();
        $count = $dbHouseUserLog->getCount($where);
        return $count;
    }
    /**
     * Notes: 排序倒叙
     * @param $list
     * @param $field
     * @return mixed
     * @author: weili
     * @datetime: 2020/8/3 17:02
     */
    public function getRsort($list,$field){
        $finishTime = [];
        foreach ($list as $val) {
            $finishTime[] = $val[$field];
        }
        array_multisort($finishTime,SORT_DESC,$list);
        return $list;
    }

    public function getDoorLogList($where,$field,$village_id,$page,$limit,$floor_id)
    {
        $dbHouseUserLog = new HouseUserLog();
        $dbHouseVillageOpenDoor = new HouseVillageOpenDoor();
        $list = $dbHouseUserLog->getList($where,$field,$page,$limit,'l.log_id desc',1);
        $where_count[] = ['f.village_id','=',$village_id];
        $where_count[] = ['f.is_del','=',0];
        $where_count[] = ['l.log_from','in',[1,2,6]];
        if($floor_id)
            $where_count[] = ['l.log_more_id','=',$floor_id];
        $door_open_count = $dbHouseUserLog->getVillageFloorCount($where_count);
        $newArr = [];
        if($list) {
            foreach ($list as $key => &$val) {
                $newArr[$key]['title'] = '开门方式-人脸开门';
                $newArr[$key]['log_time_str'] = date('Y-m-d H:i:s',$val['log_time']);
                $newArr[$key]['log_time'] = $val['log_time'];
                $newArr[$key]['log_name'] = $val['log_name'];
                $newArr[$key]['name'] = $val['name'];
                switch ($val['log_status']){
                    case 0:
                        $newArr[$key]['log_status'] = '比对通过';
                        break;
                    case 1:
                        $newArr[$key]['log_status'] = '比对失败';
                        break;
                    case 2:
                        $newArr[$key]['log_status'] = '无模板';
                        break;
                    case 3:
                        $newArr[$key]['log_status'] = '无效卡';
                        break;
                    case 4:
                        $newArr[$key]['log_status'] = '无现场照';
                        break;
                    case 5:
                        $newArr[$key]['log_status'] = '非活体';
                        break;
                    case 6:
                        $newArr[$key]['log_status'] = '证件过期';
                        break;
                    case 7:
                        $newArr[$key]['log_status'] = '超过时间限制';
                        break;
                    case 8:
                        $newArr[$key]['log_status'] = '超过次数限制';
                        break;
                    default:
                        $newArr[$key]['log_status'] = '位置错误';
                }
            }
        }
        $count = count($newArr);
        //蓝牙门禁
        $map[] = ['o.village_id','=',$village_id];
        //$map[] = ['o.add_time','<',$start_time];
        if($floor_id){
            $map[] = ['o.floor_id','=',$floor_id];
        }
        $fields='o.add_time,u.phone,d.door_name,u.nickname as name,o.open_status';
        $bluetooth = $dbHouseVillageOpenDoor->getList($map,$fields,$page,$limit,'o.id desc',1);
        $blue_where['village_id'] = $village_id;
        if($floor_id){
            $blue_where['floor_id'] = $floor_id;
        }
        $bluetooth_open_count = $dbHouseVillageOpenDoor->getCount($blue_where);
        if($bluetooth) {
            foreach ($bluetooth as $key => $val) {
                $newArr[$count + $key]['title'] = '开门方式-蓝牙开门';
                if ($val['add_time']) {
                    $newArr[$count + $key]['log_time_str'] = date('H:i:s', $val['add_time']);
                    $newArr[$count + $key]['log_time'] = $val['add_time'];
                } else {
                    $newArr[$count + $key]['log_time_str'] = '';
                    $newArr[$count + $key]['log_time'] = 1;
                }
                $newArr[$count + $key]['log_name'] = $val['door_name'];
                $newArr[$count + $key]['phone'] = $val['phone'];
                $newArr[$count + $key]['name'] = $val['name'];
                switch ($val['open_status']){
                    case 1:
                        $newArr[$count + $key]['log_status'] = '扫描失败';
                        break;
                    case 2:
                        $newArr[$count + $key]['log_status'] = '连接失败';
                        break;
                    case 3:
                        $newArr[$count + $key]['log_status'] = '重连失败';
                        break;
                    case 4:
                        $newArr[$count + $key]['log_status'] = '获取不到蓝牙关键字';
                        break;
                    default:
                        $newArr[$count + $key]['log_status'] = '开门成功';
                }
            }
        }
        $list = $this->getRsort($newArr,'log_time');
        $list = array_slice($list, $page, 5, true);
        $list = array_values($list);
        $return['count'] = $door_open_count+$bluetooth_open_count;
        $return['list'] = $list;
        return $return;
    }
    //过滤套餐 2020/11/11 start
    public function getOrderPackage($village_id)
    {
        $servicePackageOrder = new PackageOrderService();
        $dataPackage = $servicePackageOrder->getPropertyOrderPackage('',$village_id);
        if($dataPackage) {
            $dataPackage = $dataPackage->toArray();
            $package_content = $dataPackage['content'];
        }else{
            $package_content =[];
        }
        return $package_content;
    }
    //过滤套餐 2020/11/11 end
}