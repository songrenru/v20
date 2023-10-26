<?php
/**
 * 小区和用户之间关系表
 * @datetime 2020/07/14 14:23
**/

namespace app\community\model\service;

use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageUserLabel;

class HouseVillageUserBindService
{
    public $houseVillageUserBindModel  = '';
    public function __construct()
    {
        $this->houseVillageUserBindModel = new HouseVillageUserBind();
    }

    public function getFind()
    {
        $dbHouseVillageUserBind = new HouseVillageUserBind();

    }

    /**
     * 获取小区用户数量
     * @author lijie
     * @date_time 2020/08/03 13:20
     * @param $where
     * @return array|\think\Model|null
     */
    public function getUserCount($where)
    {
        $count = $this->houseVillageUserBindModel->getVillageUserNum($where);
        return $count;
    }

    public function getUserCountByBirth($where=[],$field=true)
    {
        $db_house_village_user_bind = new HouseVillageUserBind();
        $data = $db_house_village_user_bind->getList($where,$field);
        $level1 = $level2 = $level3 = $level4 = 0;
        if($data){
            foreach ($data as $v){
                if(empty($v['birth']))
                    continue;
                $age = $this->birthday($v['birth']);
                if($age < 18){
                    $level1+=1;
                }
                if(18 <= $age && $age <= 40){
                    $level2 += 1;
                }
                if($age >= 41 && $age <= 60){
                    $level3 += 1;
                }
                if($age > 60){
                    $level4 += 1;
                }
            }
        }
        return ['level1'=>$level1,'level2'=>$level2,'level3'=>$level3,'level4'=>$level4];
    }

    public function birthday($mydate){
        $birth=$mydate;
        list($by,$bm,$bd)=explode('-',$birth);
        $cm=date('n');
        $cd=date('j');
        $age=date('Y')-$by-1;
        if ($cm>$bm || $cm==$bm && $cd>$bd) $age++;
        return $age;
    }

    public function getVillageUserBindNum($where)
    {
        $count = $this->houseVillageUserBindModel->getVillageUserBindNum($where);
        return $count;
    }

    /**
     *
     * @param $where
     * @param string $field
     * @return float
     */
    public function getSumBill($where,$field)
    {
        $house_village_user_bind = new HouseVillageUserBind();
        $data = $house_village_user_bind->getSumBill($where,$field);
        return $data;
    }

    /**
     * 用户信息
     * @author lijie
     * @date_time 2020/10/23
     * @param $where
     * @param bool $field
     * @return mixed
     */
    public function getUserBindInfo($where,$field=true)
    {
        $house_village_user_bind = new HouseVillageUserBind();
        $service_house_village = new HouseVillageService();
        $data = $house_village_user_bind->getUserBindInfo($where,$field);
        if(!empty($data)){
            $data['address']=$service_house_village->getSingleFloorRoom($data['single_id'],$data['floor_id'],$data['layer_id'],$data['vacancy_id'],$data['village_id']);
            $data['authentication_field'] = unserialize($data['authentication_field']);
            $data['sex'] = isset($data['authentication_field']['sex'])?$data['authentication_field']['sex']['value']:'';
            $data['birthday'] = isset($data['authentication_field']['birthday'])?$data['authentication_field']['birthday']['value']:'';
            $data['nation'] = isset($data['authentication_field']['nation'])?$data['authentication_field']['nation']['value']:'';
        }
        return $data;
    }

    /**
     * 获取user_bind信息
     * @author lijie
     * @date_time 2020/11/03
     * @param $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getBindInfo($where,$field=true)
    {
        $house_village_user_bind = new HouseVillageUserBind();
        $data = $house_village_user_bind->getOne($where,$field);
        return $data;
    }

    /**
     * 街道用户user_bind列表
     * @author lijie
     * @date_time 2020/10/24
     * @param $where
     * @param bool $field
     * @param $page
     * @param $limit
     * @param string $order
     * @return mixed
     */
    public function getUserBindList($where,$field=true,$page,$limit,$order='hvb.pigcms_id DESC')
    {

        $service_house_village = new HouseVillageService();
        $data = $this->houseVillageUserBindModel->getStreetUserBind($where,$field,$page,$limit,$order);

        if($data){
            foreach ($data as $k=>$v){
                $data[$k]['address']=$service_house_village->getSingleFloorRoom($v['single_id'],$v['floor_id'],$v['layer_id'],$v['vacancy_id'],$v['village_id']);
                if ($data[$k]['address']!='暂无房间(数据异常)'){
                    $data[$k]['address']=$v['village_name'].$data[$k]['address'];
                }
                $data[$k]['authentication_field'] = unserialize($v['authentication_field']);
                $data[$k]['sex'] = isset($v['authentication_field']['sex'])?$v['authentication_field']['sex']['value']:'';
                $data[$k]['birthday'] = isset($v['authentication_field']['birthday'])?$v['authentication_field']['birthday']['value']:'';
                $data[$k]['nation'] = isset($v['authentication_field']['nation'])?$v['authentication_field']['nation']['value']:'';
                if($page>0 && isset($v['phone']) && !empty($v['phone'])){
                    $data[$k]['phone']=phone_desensitization($v['phone']);
                }
            }
        }
        $count = $this->houseVillageUserBindModel->getStreetUserBindCount($where);
        $res['list'] = $data;
        $res['count'] = $count;
        return $res;
    }

    /**
     * 获取街道用户数量
     * @author lijie
     * @date_time 2020/01/06
     * @param $where
     * @return mixed
     */
    public function getStreetUserBindCount($where)
    {
        $count = $this->houseVillageUserBindModel->getStreetUserBindCount($where);
        return $count;
    }


    /**
     * 修改user_bind用户信息
     * @author lijie
     * @date_time 2020/11/02
     * @param $where
     * @param $data
     * @return bool
     */
    public function saveUserBind($where,$data)
    {
        $res = $this->houseVillageUserBindModel->saveOne($where,$data);
        return $res;
    }

    /**
     * Notes: 获取小区列表
     * @author lijie
     * @date_time 2020/11/21
     * @param $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return array|\think\Model|null
     * @date_time: 2020/11/23 11:12
     */
    public function getHouseUserBindList($where,$field=true,$page=1,$limit=20,$order='pigcms_id DESC')
    {
        $db_house_village_user_bind  = new HouseVillageUserBind();
        $data = $db_house_village_user_bind->getLimitUserList($where,$page,$field,$order,$limit);
        return $data;
    }

    /**
     * 获取房间下住户信息
     * @author lijie
     * @date_time 2020/01/12
     * @param $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param int $vacancy_id
     * @return array|\think\Model|null
     */
    public function getRoomUserBindList($where,$field=true,$page=1,$limit=20,$order='pigcms_id DESC',$vacancy_id)
    {
        $db_house_village_user_bind  = new HouseVillageUserBind();
        $service_house_village = new HouseVillageService();
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $HouseVillage = new HouseVillage();
        $room_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$vacancy_id]);
        $street_id=0;
        $community_id=0;
        if(isset($room_info['village_id'])){
            $house_village_info=$HouseVillage->getOne($room_info['village_id'],'street_id,community_id');
            if ($house_village_info && !$house_village_info->isEmpty()){
                $street_id=$house_village_info['street_id'];
                $community_id=$house_village_info['community_id'];
            }
        }
        $data = $db_house_village_user_bind->getLimitUserList($where,$page,$field,$order,$limit);
        $a = $b =  $c = $d = $e =  $f = $g = $h =  0;
        if($data){
            foreach ($data as $k=>$v){
                $data[$k]['street_id'] =$street_id;
                $data[$k]['community_id'] =$community_id;
                $data[$k]['address'] = $service_house_village->getSingleFloorRoom($v['single_id'],$v['floor_id'],$v['layer_id'],$v['vacancy_id'],$v['village_id']);
                if($v['type'] == 0 || $v['type'] == 3){
                    $data[$k]['relation'] = '业主';
                    $a += 1;
                }elseif($v['type'] == 2){
                    if($room_info['house_type'] == 1)
                        $data[$k]['relation'] = '租客';
                    else
                        $data[$k]['relation'] = '租客/员工';
                    $h += 1;
                }else{
                    switch ($v['relatives_type']){
                        case 1:
                            $data[$k]['relation'] = '配偶';
                            $b += 1;
                            break;
                        case 3:
                            $data[$k]['relation'] = '子女';
                            $c += 1;
                            break;
                        case 4:
                            $data[$k]['relation'] = '亲朋好友';
                            $d += 1;
                            break;
                        case 5:
                            $data[$k]['relation'] = '负责人';
                            $e += 1;
                            break;
                        case 6:
                            $data[$k]['relation'] = '人事';
                            $f += 1;
                            break;
                        case 7:
                            $data[$k]['relation'] = '财务';
                            $g += 1;
                            break;
                        default:
                            $a += 1;
                            $data[$k]['relation'] = '业主';
                    }
                }
            }
        }
        $res['list'] = $data;
        $res['house_type'] = $room_info['house_type'];
        $res['count'] = array($a,$b,$c,$d,$e,$f,$g,$h);
        return $res;
    }

    /**
     * 更新用户费用
     * @author lijie
     * @date_time 2020/11/30
     * @param $where
     * @param $field
     * @param $money
     * @return mixed
     */
    public function updateUserFee($where,$field,$money)
    {
        $db_house_village_user_bind  = new HouseVillageUserBind();
        $res = $db_house_village_user_bind->updateFee($where,$field,$money);
        return $res;
    }

    /**
     * 获取用户列表不分页
     * @param $where
     * @param bool $field
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList($where,$field=true)
    {
        $db_house_village_user_bind  = new HouseVillageUserBind();
        $data = $db_house_village_user_bind->getList($where,$field);
        return $data;
    }

    public function getVillageBindInfo($where=[],$field=true)
    {
        $db_house_village_user_bind = new HouseVillageUserBind();
        $data = $db_house_village_user_bind->getInfo($where, $field);
        return $data;
    }

    /**
     * 查询街道业主
     * @author: liukezhu
     * @date : 2021/11/8
     * @param $where
     * @param bool $field
     * @param $order
     * @param $page
     * @param $limit
     * @return array
     */
    public function getStreetUserBindList($where, $field = true, $order, $page, $limit)
    {
        $db_house_village_user_bind = new HouseVillageUserBind();
        $list = $db_house_village_user_bind->getUserBindList($where, $field, $order, $page, $limit);
        if ($list && !$list->isEmpty()) {
            $user_identity = [
                0 => '业主',
                1 => '家属',
                2 => '租客',
                3 => '业主',
            ];
            $list = $list->toArray();
            foreach ($list as &$v) {
                $v['user_identity'] = isset($user_identity[$v['type']]) ? $user_identity[$v['type']] : '';
            }
        }
        $count = $db_house_village_user_bind->getUserBindCount($where);
        return ['list' => $list, 'count' => $count];
    }

    // 添加虚拟业主 如果存在返回当前存在业主
    public function addVirtualHomeowner($roomId,$roomInfo=[]) {
        // 查询下该房间的房主
        $whereHomeowner = [];
        $whereHomeowner[] = ['type','in',[0,3]];
        $whereHomeowner[] = ['status','=',1];
        $whereHomeowner[] = ['vacancy_id','=',$roomId];
        $homeowner = $this->getBindInfo($whereHomeowner);
        if(!empty($homeowner)||(isset($homeowner['pigcms_id'])&&$homeowner['pigcms_id'])) {
            return $homeowner['pigcms_id'];
        } else {
            if (!$roomInfo || !isset($roomInfo['village_id']) || !isset($roomInfo['single_id']) || !isset($roomInfo['floor_id']) || !isset($roomInfo['layer_id'])) {
                $whereRooms = [];
                $whereRooms[] = ['pigcms_id','=', $roomId];
                $roomFields = "pigcms_id,uid,name,phone,floor_id,village_id,layer,room,housesize,single_id,layer_id,usernum,property_number,room,room_number";
                $houseVillageUserVacancyService = new HouseVillageUserVacancyService();
                $roomInfo = $houseVillageUserVacancyService->getUserVacancyInfo($whereRooms, $roomFields);
            }
            // 如果没有业主 添加虚拟业主
            $dataVirtualHomeowner = [
                'village_id' => $roomInfo['village_id'],
                'name' => '',
                'phone' => '',
                'uid' => 0,
                'vacancy_id' => $roomId,
                'single_id' => $roomInfo['single_id'],
                'floor_id' => $roomInfo['floor_id'],
                'layer_id' => $roomInfo['layer_id'],
                'status' => 1,
                'add_time' => time(),
            ];
            $pigcms_id = $this->addUserBindOne($dataVirtualHomeowner);
            return $pigcms_id;
        }
    }


    public function addUserBindOne($data) {
        // 初始化 数据层
        $pigcms_id = $this->houseVillageUserBindModel->addOne($data);
        return $pigcms_id;
    }

    public function getUserBindRawInfo($whereRaw,$field=true)
    {
        $data = $this->houseVillageUserBindModel->getRawOne($whereRaw,$field);
        return $data;
    }

    //查询用户手机号
    public function getUserBindInfos($value,$type){
        $data=[];
        $where[] = ['status','=',1];
        $where[] = ['type','in',[0,3]];
        if($type == 'owner'){
            $where[] = ['pigcms_id','=',$value];
        }elseif ($type == 'room'){
            $where[] = ['vacancy_id','=',$value];
        }
        if(empty($where)){
            throw new \think\Exception("缺少必要条件");
        }
        $field='pigcms_id,name,phone';
        $userBind = (new HouseVillageUserBind())->getOne($where,$field,'type asc,pigcms_id asc');
        if($userBind && !$userBind->isEmpty()){
            $data=$userBind->toArray();
        }
        return ['status'=>($data ? 1 : 0),'data'=>$data];
    }

    public function getCheckUserBindInfo($whereArr, $pigcms_id = 0)
    {
        $field = 'pigcms_id,name,phone,type';
        $isGetNew = true;
        $houseVillageUserBind = new HouseVillageUserBind();
        if ($pigcms_id > 0) {
            $whereTmpArr[] = array('pigcms_id', '=', $pigcms_id);
            $userBindObj = $houseVillageUserBind->getOne($whereTmpArr, $field);
            if (empty($userBindObj) || $userBindObj->isEmpty()) {
                $isGetNew = false;
            }
        } else {
            $pigcms_id = 0;
        }
        if ($isGetNew) {
            $userBindObj = $houseVillageUserBind->getLimitUserList($whereArr, 0, $field, 'vacancy_id desc,type asc');
            if ($userBindObj && !$userBindObj->isEmpty()) {
                $userBinds = $userBindObj->toArray();
                $pigcms_idArr = array();
                foreach ($userBinds as $ub) {
                    $pigcms_idArr[$ub['type']] = $ub['pigcms_id'];
                }
                arsort($pigcms_idArr);
                if (isset($pigcms_idArr['0'])) {
                    $pigcms_id = $pigcms_idArr['0'];
                } elseif (isset($pigcms_idArr['3'])) {
                    $pigcms_id = $pigcms_idArr['3'];
                } elseif (isset($pigcms_idArr['1'])) {
                    $pigcms_id = $pigcms_idArr['1'];
                } else {
                    foreach ($userBinds as $key => $uv) {
                        $pigcms_id = $uv;
                        break;
                    }
                }
            }
        }
        return $pigcms_id;
    }
}
