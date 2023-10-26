<?php


namespace app\community\model\service;


use app\common\model\service\ConfigDataService;
use app\community\model\db\Area;
use app\community\model\db\BrandCars;
use app\community\model\db\HouseNewChargeStandardBind;
use app\community\model\db\HouseNewPayOrder;
use app\community\model\db\HouseVillage;
use app\community\model\db\HouseVillageBindCar;
use app\community\model\db\HouseVillageCarAccessRecord;
use app\community\model\db\HouseVillagePark;
use app\community\model\db\HouseVillageParkBlack;
use app\community\model\db\HouseVillageParkCharge;
use app\community\model\db\HouseVillageParkConfig;
use app\community\model\db\HouseVillageParkCoupon;
use app\community\model\db\HouseVillageParkFree;

use app\community\model\db\HouseNewChargeRule;

use app\community\model\db\HouseVillageParkingCar;
use app\community\model\db\HouseVillageParkingGarage;
use app\community\model\db\HouseVillageParkingPosition;
use app\community\model\db\HouseVillageBindPosition;

use app\community\model\db\HouseVillageParkingTemp;
use app\community\model\db\HouseVillageParkShowscreenConfig;
use app\community\model\db\HouseVillagePayOrder;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageVisitor;
use app\community\model\db\InPark;
use app\community\model\db\NolicenceInPark;
use app\community\model\db\OutPark;
use app\community\model\db\ParkOpenLog;
use app\community\model\db\ParkPassage;
use app\community\model\db\ParkPlateresultLog;
use app\community\model\db\ParkScrcuRecord;
use app\community\model\db\ParkSerialLog;
use app\community\model\db\ParkShowscreenLog;
use app\community\model\db\ParkTotalRecord;
use app\community\model\db\ParkWhiteRecord;
use app\community\model\db\PlatOrder;
use app\community\model\db\User;
use app\community\model\service\Park\A11Service;
use app\community\model\service\Park\D3ShowScreenService;
use app\community\model\service\Park\D5Service;
use app\community\model\service\HouseVillageService;
use app\community\model\service\HouseVillageSingleService;
use app\community\model\service\Park\D6Service;
use app\community\model\service\Park\QinLinCloudService;
use app\foodshop\model\service\message\SmsSendService;
use app\community\model\service\HouseNewParkingService;
use app\pay\model\db\PayOrderInfo;
use app\pay\model\service\channel\ScrcuService;
use app\pay\model\service\PayService;
use error_msg\GetErrorMsg;
use think\Exception;
use think\facade\Cache;

class HouseVillageParkingService
{
    public $parkingGarageModel = '';
    public $parkingPositionModel = '';
    public $parkingCarModel = '';
    public $bindPositionModel = '';

    //D3定制停车参数
    public $AppID = '平台测试';
    public $AppSecret = '12345678';
    public $url = 'http://admin.scxhwtkj.com/parking/api';
    public $url_v2 = 'http://admin.scxhwtkj.com/parking/api/v2';
    public $province_car = ["京", "津", "冀", "晋", "蒙", "辽", "吉", "黑", "沪", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "桂", "琼", "渝", "川", "贵", "云", "藏", "陕", "甘", "青", "宁", "新"];
    public $relationship = ['1' => '车主', '2' => '父母', '3' => '配偶', '4' => '子女', '5' => '亲戚', '6' => '朋友', '7' => '其他'];
    public $examine_status = ['0' => ['text' => '待审核', 'color' => '#46ecc4'], '1' => ['text' => '通过', 'color' => '#1890ff'], '2' => ['text' => '拒绝', 'color' => '#f72682']];

    public $webhookurl = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=edf0375a-5029-4fe9-a398-06c871208106';

    public $register_day = 15;
    public $pay_time = 900;
    public $car_logo = '/static/images/car_logo/default.png';
    public $car_color = array(
        array(
            'id' => 'A',
            'car_color' => '白色'
        ),
        array(
            'id' => 'B',
            'car_color' => '灰色'
        ),
        array(
            'id' => 'C',
            'car_color' => '黄色'
        ),
        array(
            'id' => 'D',
            'car_color' => '粉色'
        ),
        array(
            'id' => 'E',
            'car_color' => '红色'
        ),
        array(
            'id' => 'F',
            'car_color' => '紫色'
        ),
        array(
            'id' => 'G',
            'car_color' => '绿色'
        ),
        array(
            'id' => 'H',
            'car_color' => '蓝色'
        ),
        array(
            'id' => 'I',
            'car_color' => '棕色'
        ),
        array(
            'id' => 'J',
            'car_color' => '黑色'
        ),
        array(
            'id' => 'Z',
            'car_color' => '其他'
        ),

    );

    // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
    // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
    //交易流水号(pay_type为wallet、scancode、sweepcode必传)
    public $pay_type=[0=>'cash',1=>'wallet',2=>'sweepcode',3=>'escape',4=>'monthuser',5=>'free',6=>'scancode'];


    public function __construct()
    {
        $this->parkingGarageModel = new HouseVillageParkingGarage();
        $this->parkingPositionModel = new HouseVillageParkingPosition();
        $this->parkingCarModel = new HouseVillageParkingCar();
        $this->bindPositionModel = new HouseVillageBindPosition();
    }

    protected function setCacheTag($village_id)
    {
        $this->cacheTagKey = 'village:cache:'.$village_id;
    }

    protected function getCacheTagKey()
    {
        return $this->cacheTagKey;
    }

    /**
     * 获取车库列表
     * @param $where
     * @param bool $field
     * @param $page
     * @param $limit
     * @param string $order
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2020/07/16 13:42
     */

    public function getParkingGarageLists($where, $field = true, $page = 0, $limit = 0, $order = 'garage_id DESC')
    {
        $data = $this->parkingGarageModel->getLists($where, $field, $page, $limit, $order)->toArray();
        $count = count($data);
//        $data[$count]['garage_id'] = 9999;
//        $data[$count]['garage_num'] = '临时车库';
        return $data;
    }

    /**
     * 根据条件获取车库信息
     * @param $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2020/07/17 14:02
     */
    public function getParkingGarageByCondition($where, $field = true)
    {
        $data = $this->parkingGarageModel->getOne($where, $field);
        $return_data = array();
        if ($data['garage_num']) {
            $return_data[] = array(
                'name' => '名称',
                'value' => $data['garage_num']
            );
        }
        if ($data['garage_position']) {
            $return_data[] = array(
                'name' => '地址',
                'value' => $data['garage_position']
            );
        }
        $return_data[] = array(
            'name' => '备注',
            'value' => $data['garage_remark'] ? $data['garage_remark'] : '无'
        );
        $res['remark'] = $data['garage_remark'];
        $res['data'] = $return_data;
        $res['detail'] = $data;
        return $res;
    }

    /**
     *编辑车库
     * @param $where
     * @param $data
     * @return bool
     * @author lijie
     * @date_time 2020/07/16 13:53
     */
    public function editParkingGarage($where, $data)
    {
        $res = $this->parkingGarageModel->saveOne($where, $data);
        return $res;
    }

    /**
     * 添加车库
     * @param $data
     * @return int|string
     * @author lijie
     * @date_time 2020/07/16 14:39
     */
    public function addParkingGarage($data)
    {
        $res = $this->parkingGarageModel->addOne($data);
        return $res;
    }

    /**
     * 删除车库
     * @param $where
     * @return bool
     * @throws \Exception
     * @author lijie
     * @date_time 2020/07/16 14:00
     */
    public function delParkingGarage($where)
    {
        $res = $this->parkingGarageModel->delOne($where);
        return $res;
    }

    /**
     * 获取车位列表
     * @param $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2020/07/17 9:29
     */
    public function getParkingPositionLists($where, $field = true, $page = 1, $limit = 15, $order = 'pp.position_id DESC')
    {
        $db_house_village_park_config=new HouseVillageParkConfig();
        $db_house_village_parking_garage=new HouseVillageParkingPosition();
        $village_id=0;
        if (!empty($where)){
            foreach ($where as $v){
                if ($v[0]=='pp.village_id'){
                    $village_id=$v[2];
                }
            }
        }
        if (empty($village_id)){
            return [];
        }
        $house_village_park_config=$db_house_village_park_config->getFind(['village_id' => $village_id]);
        $data = $this->parkingPositionModel->getLists($where, $field, $page, $limit, $order);
        if ($data) {
            foreach ($data as &$val) {
                if ($val['garage_id'] == 9999) {
                    $carInfo = $this->parkingCarModel->getOne(['car_position_id' => $val['position_id']], 'province');
                    $val['position_num'] = $carInfo['province'] . $val['position_num'];
                }
                if ($val['position_area']) {
                    $val['position_area'] = $val['position_area'] . 'm²';
                }else{
                    $val['position_area'] = '0.00m²';
                }
                $val['parent_position_num']='--';
                if ($house_village_park_config['children_position_type']==1){
                    if (!empty($vv['parent_position_id'])&&$val['children_type']==2){
                        $parent_position_info=$db_house_village_parking_garage->getFind(['position_id'=>$val['parent_position_id'],'garage_id'=>$val['garage_id']]);
                        if (!empty($parent_position_info)){
                            $val['parent_position_num']=$parent_position_info['position_num'];
                        }
                    }
                    $val['children_type_txt']=$val['children_type']==1?'母车位':($val['children_type']==2?'子车位':'--');
                }else{
                    $val['children_type_txt']='--';
                }
            }
        }
        return $data;
    }

    /**
     * 车辆信息
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2021/09/24
     */
    public function getCar($where = [], $field = true)
    {
        $data = $this->parkingCarModel->getOne($where, $field);
        return $data;
    }


    /**
     * 获取车位列表
     * @param $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author zhubaodi
     * @date_time 2021/06/18 17:29
     */
    public function getParkingPositionList($id, $where, $field = true, $page = 1, $limit = 15, $order = 'pp.position_id DESC',$nobinded=false)
    {
        // 车位ID
        $position_id = [];
        // 根据收费标准获取所有已绑定的房间对应的业主信息
        $userBind = $this->getVacancyToPosition($id,'position_id');

        if($userBind && !empty($userBind)){
            $position_id = array_column($userBind,'position_id');
        }
        //不需要已绑定的
        if($nobinded){
            $ruleBindPosition=$this->getRuleBindToPosition($id,'position_id');
            if(!empty($ruleBindPosition)){
                $positionArr = array_column($ruleBindPosition,'position_id');
                $position_id=array_merge($position_id,$positionArr);
            }
        }
        // 同一收费标准不能绑定同一业主的房产和车位  过滤已绑定房间的车位
        if(!empty($position_id)){
            $where[] = ['pp.position_id','not in',$position_id];
        }
        if (empty($id)) {
            throw new \think\Exception("收费标准id不能为空");
        }
        $db_rule = new HouseNewChargeRuleService();
        $ruleInfo = $db_rule->getRuleInfo($id);
        if (empty($ruleInfo)) {
            throw new \think\Exception("收费标准信息不存在");
        }

        $count = $this->parkingPositionModel->getCountss($where);
        $data1 = $this->parkingPositionModel->getListss($where, $field, $page, $limit, $order);

        if ($ruleInfo['charge_type']==2){
            $is_show = 1;
        }else {
            if (empty($ruleInfo['fees_type'])||in_array($ruleInfo['fees_type'],[3,4]) || ($ruleInfo['bill_type'] == 1 && empty($ruleInfo['unit_gage'])) || ($ruleInfo['charge_type'] == 1 && empty($ruleInfo['unit_gage']))) {
                $is_show = 2;
            } else {
                $is_show = 1;
            }
        }
        if (!empty($data1)) {
            $data1 = $data1->toArray();
            if (!empty($data1)) {
                foreach ($data1 as $k => $v) {
                    $data1[$k] = $v;
                    $data1[$k]['show'] = true;
                    if (empty($ruleInfo['fees_type']) ||in_array($ruleInfo['fees_type'],[3,4]) || ($ruleInfo['bill_type'] == 1 && empty($ruleInfo['unit_gage'])) || ($ruleInfo['charge_type'] == 1 && empty($ruleInfo['unit_gage']))) {

                        $data1[$k]['is_show'] = 2;
                    } else {
                        $data1[$k]['is_show'] = 1;
                    }

                }
            }
        }
        $data = [];
        $data['count'] = $count;
        $data['list'] = $data1;
        $data['is_show'] = $is_show;
        $data['total_limit'] = $limit;

        return $data;
    }

    /**
     * 获取车位列表
     * @param $where
     * @param bool $field
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author zhubaodi
     * @date_time 2021/06/18 17:29
     */
    public function getPositionList($where, $field = true)
    {
        $data = $this->parkingPositionModel->getLists($where, $field, 0);
        $id_arr = [];
        if (!empty($data)) {
            foreach ($data as $k => $v) {
                $id_arr[$k] = $v['position_id'];
            }
        }

        $datas['list'] = $data;
        $datas['ids'] = $id_arr;

        return $datas;
    }

    /**
     * 获取车位详情
     * @param $where
     * @param bool $field
     * @return mixed
     * @throws Exception
     * @author lijie
     * @date_time 2020/07/17 10:32
     */
    public function getParkingPositionDetail($where, $field = true,$source=0)
    {
        $data = $this->parkingPositionModel->getOne($where, $field);
        if (empty($data)){
            if($source == 0){
                throw new Exception('参数错误');
            }else{
                return [];
            }
        }

        $return_data = array();

        if (isset($data['position_num'])) {
            $return_data[] = array(
                'name' => '车位号',
                'value' => $data['position_num']
            );
        }

        if (isset($data['position_area'])) {
            $return_data[] = array(
                'name' => '产权面积',
                'value' => $data['position_area'] . 'm³'
            );
        }
        if (isset($data['garage_num'])) {
            $return_data[] = array(
                'name' => '车库',
                'value' => $data['garage_num']
            );
        }
        if (isset($data['name'])) {
            $return_data[] = array(
                'name' => '绑定业主',
                'value' => $data['name'] . '，' . $data['phone']
            );
        }
        $return_data[] = array(
            'name' => '备注',
            'value' => isset($data['position_note']) ? $data['position_note'] : '无'
        );
        $res['remark'] = isset($data['position_note']) ? $data['position_note'] : '无';
        $res['data'] = $return_data;
        $res['detail'] = $data;
        return $res;
    }

    /**
     * 添加车位
     * @param $data
     * @return int|string
     * @author lijie
     * @date_time 2020/07/17 9:32
     */
    public function addParkingPosition($data)
    {
        $res = $this->parkingPositionModel->addOne($data);
        return $res;
    }

    /**
     * 编辑车位
     * @param $where
     * @param $data
     * @return mixed
     * @author lijie
     * @date_time 2020/07/17 13:39
     */
    public function editParkingPosition($where, $data)
    {
        $db_house_village_park_config=new HouseVillageParkConfig();
        $db_house_new_pay_order=new HouseNewPayOrder();
        $db_house_new_charge_standard_bind=new HouseNewChargeStandardBind();
        if (!isset($data['village_id'])||empty($data['village_id'])){
            $position_info11=$this->parkingPositionModel->getFind($where);
            if (!empty($position_info11)){
                $data['village_id']=$position_info11['village_id'];
                $data['position_id']=$position_info11['position_id'];
                $data['garage_id']=$position_info11['garage_id'];
                $data['children_type']=$position_info11['children_type'];
            }else{
                throw new \think\Exception("车位信息不存在，无法编辑车位");
            }
        }
        $house_village_park_config=$db_house_village_park_config->getFind(['village_id' => $data['village_id']]);
        $where11=[
            ['village_id','=',$data['village_id']],
            ['position_id','=',$data['position_id']],
        ];
        $position_info=$this->parkingPositionModel->getFind($where11);
        if (empty($position_info)){
            throw new \think\Exception("车位信息不存在，无法编辑车位");
        }
        if ($house_village_park_config['children_position_type']==1){
            if ($position_info['children_type']==2&&!empty($position_info['parent_position_id'])){
                if ($data['garage_id']!=$position_info['garage_id']){
                    throw new \think\Exception("当前子车位已绑定母车位，请解除绑定关系后在修改所属车库");
                }
            }
            if ($position_info['children_type']==1){
                $where_parent=[];
                $where_parent['village_id']=$data['village_id'];
                $where_parent['parent_position_id']=$data['position_id'];
                $parent_position_count=$this->parkingPositionModel->getCounts($where_parent);
                if ($parent_position_count>0&&$data['garage_id']!=$position_info['garage_id']){
                    throw new \think\Exception("当前母车位已绑定子车位，请解除绑定关系后在修改所属车库");
                }
            }
            if ($data['children_type']==1&&$position_info['children_type']==2&&!empty($position_info['parent_position_id'])){
                $where_parent1=[];
                $where_parent1['village_id']=$data['village_id'];
                $where_parent1['garage_id']=$data['garage_id'];
                $where_parent1['parent_position_id']=$position_info['parent_position_id'];
                $position_info1=$this->parkingPositionModel->getFind($where11);
                if (empty($position_info1)){
                    $this->parkingPositionModel->saveOne(['position_id'=>$data['position_id']],['parent_position_id'=>0]);
                }else{
                    throw new \think\Exception("当前车位有绑定母车位，请先解除绑定");
                }
            }
            if ($data['children_type']==2&&$position_info['children_type']==1){
                $where_order=[];
                $where_order['village_id']=$data['village_id'];
                $where_order['position_id']=$data['position_id'];
                $where_order['is_paid']=2;
                $where_order['is_discard']=1;
                $count_order=$db_house_new_pay_order->getCount($where_order);
                if ($count_order>0){
                    throw new \think\Exception("当前车位有待缴账单或作废账单审核中时，无法修改");
                }
                $where_bind=[];
                $where_bind['b.village_id']=$data['village_id'];
                $where_bind['b.position_id']=$data['position_id'];
                $where_bind['b.is_del']=1;
                $count_bind=$db_house_new_charge_standard_bind->getCount($where_bind);
                if ($count_bind>0){
                    throw new \think\Exception("当前车位有收费标准未解绑，无法修改");
                }
                if ($parent_position_count>0){
                    throw new \think\Exception("当前车位有绑定子车位，请先解除绑定");
                }

            }
        }
        $res = $this->parkingPositionModel->saveOne($where, $data);
        return $res;
    }

    /**
     * 删除车位
     * @param $where
     * @return bool
     * @throws \Exception
     * @author lijie
     * @date_time 2020/07/17 9:35
     */
    public function delParkingPosition($where)
    {
        $positionInfo=$this->parkingPositionModel->getFind($where);
        if (empty($positionInfo)){
            throw new Exception('车位信息不存在');
        }
        $cacheTagKey = 'village:'.$positionInfo['village_id'];
        Cache::tag($cacheTagKey)->clear();
        $res = $this->parkingPositionModel->delOne($where);
        return $res;
    }

    /**
     * 根据条件获取车位信息
     * @param $where
     * @param bool $field
     * @return mixed
     * @author lijie
     * @date_time 2020/07/17 13:54
     */
    public function getParkingPositionByCondition($where, $field = true)
    {
        $data = $this->parkingPositionModel->getOne($where, $field);
        if (isset($data['end_time']) && !empty($data['end_time'])){
            $data['end_time'] = date('Y-m-d H:i:s', $data['end_time']);
        }
        return $data;
    }

    /**
     * 获取车辆列表
     * @param $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2020/07/18 9:22
     */
    public function getParkingCarLists($where, $field = true, $page = 1, $limit = 15, $order = 'car_id DESC')
    {
        $data = $this->parkingCarModel->getHouseVillageParkingCarLists($where, $field, $page, $limit, $order);
        return $data;
    }

    /**
     * 获取车辆详情
     * @param $where
     * @param bool $field
     * @return array|bool
     * @throws Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2020/07/18 9:25
     */
    public function getParkingCarDetail($where, $field = true)
    {
        $data = $this->parkingCarModel->getHouseVillageParkingCarById($where, $field);
        if (empty($data)) {
            return false;
        }
        $return_data = array();
        if ($data['position_num']) {
            $return_data[] = array(
                'name' => '车位号',
                'value' => $data['position_num']
            );
        } else {
            $data['car_position_id'] = 0;
            $return_data[] = array(
                'name' => '车位号',
                'value' => '无'
            );
        }
        if ($data['car_number']) {
            $return_data[] = array(
                'name' => '车牌号',
                'value' => $data['car_number']
            );
        }
        if ($data['car_stop_num']) {
            $return_data[] = array(
                'name' => '停车卡号',
                'value' => $data['car_stop_num']
            );
        }
        $data['binding_type']=2;  //2业主
        $data['single_name']='';
        $data['floor_name']='';
        $data['layer_name']='';
        $data['room']='';
        $data['room_address']='';
        $data['garage_num']='';
        $data['parking_car_type_str']='';
        if(isset($data['parking_car_type'])){
            $db_house_village_park_config=new HouseVillageParkConfig();
            $house_village_park_config=$db_house_village_park_config->getFind(['village_id' => $data['village_id']]);
            $houseNewParkingService= new HouseNewParkingService();
            if ($house_village_park_config['park_sys_type'] == 'D3') {
                $parking_car_type_arr =$houseNewParkingService->parking_d3_car_type_arr;
            } elseif ($house_village_park_config['park_sys_type'] == 'D7') {
                $parking_car_type_arr =$houseNewParkingService->parking_d7_car_type_arr;
            } else {
                $parking_car_type_arr =$houseNewParkingService->parking_car_type_arr;
            }
            $data['parking_car_type_str']=isset($parking_car_type_arr[$data['parking_car_type']]) ? $parking_car_type_arr[$data['parking_car_type']]:'';
        }
        if(isset($data['garage_id']) && $data['garage_id']>0){
            $db_house_village_ParkIng_garage=new HouseVillageParkingGarage();
            $garage_info=$db_house_village_ParkIng_garage->getOne(['garage_id'=>$data['garage_id'],'status'=>1]);
            if($garage_info && !$garage_info->isEmpty()){
                $data['garage_num']=$garage_info['garage_num'];
            }
        }
        if(isset($data['room_id']) && $data['room_id']>0){
            $data['binding_type']=1;  //2房间
            $service_house_village = new HouseVillageService();
            $service_house_village_single = new HouseVillageSingleService();
            $where_room = [];
            $where_room[] = ['pigcms_id', '=', $data['room_id']];
            $info = $service_house_village->getRoomInfoWhere($where_room,'pigcms_id,usernum,property_number,layer,room,housesize,house_type,user_status,sell_status,name,phone,single_id,layer_id,floor_id');
            $data['room']=$info['room'];
            if($info['single_id']>0){
                $house_single=$service_house_village_single->getSingleInfo(['id'=>$info['single_id']],'single_name');
                if(!empty($house_single)){
                    $data['single_name']=$house_single['single_name'];
                    if(is_numeric($house_single['single_name'])){
                        $data['single_name']=$house_single['single_name'].'栋';
                    }
                }
            }

            if($info['floor_id']>0){
                $house_single=$service_house_village_single->getFloorInfo(['floor_id'=>$info['floor_id']],'floor_name');
                if(!empty($house_single)){
                    $data['floor_name']=$house_single['floor_name'];
                    if(is_numeric($house_single['floor_name'])){
                        $data['floor_name']=$house_single['floor_name'].'单元';
                    }
                }
            }

            if($info['layer_id']>0){
                $house_single=$service_house_village_single->getLayerInfo(['id'=>$info['layer_id']],'layer_name');
                if(!empty($house_single)){
                    $data['layer_name']=$house_single['layer_name'];
                    if(is_numeric($house_single['layer_name'])){
                        $data['layer_name']=$house_single['layer_name'].'层';
                    }
                }
            }
            $data['room_address']=$data['single_name'].$data['floor_name'].$data['layer_name'].$info['room'];
            $return_data[] = array(
                'name' => '绑定房间',
                'value' => $data['room_address']
            );
        }
        if ($data['car_user_name']) {
            $return_data[] = array(
                'name' => '车主姓名',
                'value' => $data['car_user_name']
            );
        }
        if ($data['car_user_phone']) {
            $return_data[] = array(
                'name' => '车主手机号',
                'value' => $data['car_user_phone'],
                'is_phone' => 1
            );
        }

        $data['end_time_str'] = $data['end_time']>1 ? date('Y-m-d', $data['end_time']) : '';
        if ($data['end_time_str']) {
            $return_data[] = array(
                'name' => '停车到期时间',
                'value' => $data['end_time_str']
            );
        }
        if ($data['equipment_no']) {
            $return_data[] = array(
                'name' => '车辆识别代码',
                'value' => $data['equipment_no']
            );
        }
        if ($data['car_color']) {
            foreach ($this->car_color as $k => $v) {
                if ($v['id'] == $data['car_color']) {
                    $data['color_id'] = $data['car_color'];
                    $data['car_color'] = $v['car_color'];
                    break;
                }
            }
            $return_data[] = array(
                'name' => '车辆颜色',
                'value' => $data['car_color']
            );
        }
        if (!empty($data['car_brands'])){
            $arr_brans=explode('-',$data['car_brands']);
            $data['brands_type']=$arr_brans[0];
            $data['brands']=$arr_brans[1];

        }else{
            $data['brands_type']='';
            $data['brands']='';
        }
        $res['data'] = $return_data;
        $res['detail'] = $data;
        return $res;
    }

    /**
     * 添加车辆
     * @param $data
     * @return int|string
     * @author lijie
     * @date_time 2020/07/18 9:26
     */
    public function addParkingCar($data)
    {
        $park_config_info = (new HouseVillageParkConfig())->getFind(['village_id' => $data['village_id']]);
        if (!empty($park_config_info)&&$park_config_info['park_sys_type']=='D7'){
            $data['parking_car_type'] =9;
        }
        $res = $this->parkingCarModel->addHouseVillageParkingCar($data);
        return $res;
    }

    /**
     * 编辑车辆
     * @param $where
     * @param $data
     * @return bool
     * @author lijie
     * @date_time 2020/07/18 9:28
     */
    public function editParkingCar($where, $data)
    {
        $res = $this->parkingCarModel->editHouseVillageParkingCar($where, $data);
        return $res;
    }


    /**
     * 删除车辆
     * @param $where
     * @return bool
     * @throws \Exception
     * @author lijie
     * @date_time 2020/07/18 9:30
     */
    public function delParkingCar($where)
    {
        $res = $this->parkingCarModel->delHouseVillageParkingCar($where);
        return $res;
    }

    /**
     * 车位数量
     * @param $where
     * @return int
     * @author lijie
     * @date_time 2020/12/04
     */
    public function get_village_park_position_num($where)
    {
        $count = $this->parkingPositionModel->get_village_park_position_num($where);
        return $count;
    }

    /**
     * 查询对应条件下车辆数量
     * @param $where
     * @return int
     * @author: lijie
     * @date_time: 2020/12/07
     */
    public function getCarNum($where)
    {
        $count = $this->parkingCarModel->get_village_car_num($where);
        return $count;
    }

    /**
     * 添加用户绑定车位
     * @param $data
     * @return int|string
     * @author lijie
     * @date_time 2020/02/02
     */
    public function addBindPosition($data)
    {
        $res = $this->bindPositionModel->addOne($data);
        return $res;
    }

    /**
     * 业主绑定车位列表
     * @param array $where
     * @param bool $field
     * @return mixed
     * @author lijie
     * @date_time 2021/09/17
     */
    public function getBindPositionList($where = [], $field = true)
    {
        $data = $this->bindPositionModel->getList($where, $field);
        return $data;
    }

    /**
     * 查询用户绑定车位
     * @param $where
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author lijie
     * @date_time 2020/02/02
     */
    public function getBindPosition($where)
    {
        $data = $this->bindPositionModel->getOne($where);
        return $data;
    }

    /**
     * 主解绑车位
     * @param $where
     * @return bool
     * @throws \Exception
     * @author lijie
     * @date_time 2020/02/02
     */
    public function delBindPosition($where)
    {
        $data = $this->bindPositionModel->delOne($where);
        return $data;
    }


    public function getNav($where = [], $field = true,$select=1)
    {
        $cacheKey = 'village:'.$where['village_id'].':Car:getNav:'.md5(\json_encode($where).\json_encode($field).\json_encode($select));
        $data = Cache::get($cacheKey);
        if (!empty($data)){
            return $data;
        }
        $this->setCacheTag($where['village_id']);
        $garage_list = $this->parkingGarageModel->getLists($where, $field)->toArray();
        $items = [];
        foreach ($garage_list as $key => $value) {
            $list['permission_id'] = $value['garage_id'];
            $list['title'] = $value['garage_num'];
            if ($select==1){
                $list['disabled'] = true;
            }else{
                $list['disabled'] = false;
            }
            $list['scopedSlots'] = ['icon' => 'cluster','switcherIcon' => 'garage'];
            $list['village_id'] = $where['village_id'];
            $list['key'] = $value['garage_id'] . '|' . $value['garage_num'] . '|' . 'garage';
            $items[] = $list;
        }
        $db_house_village_park_config=new HouseVillageParkConfig();
        $where1=[];
        $where1['village_id']=$where['village_id'];
        $info=$db_house_village_park_config->getFind($where1);
        $count = count($items);
        $items[$count]['permission_id'] = 9999;
        $items[$count]['title'] = '临时车位';
        $items[$count]['disabled'] = false;
        $items[$count]['scopedSlots'] = ['icon' => 'cluster','switcherIcon' => 'temgarage'];
        $items[$count]['key'] = '100000|临时车位|garage';
        $items[$count]['type'] = '临时车位';
        $items[$count]['village_id'] = $where['village_id'];
        $data[0]['scopedSlots'] = ['icon' => 'cluster','switcherIcon' => 'car'];
        if ($select==1){
            $data[0]['disabled'] = true;
        }else{
            $data[0]['disabled'] = false;
        }
        if ($items){
            $res = $this->getTree($items, 'garage',$select,$info);
        }else{
            $res = [];
            $data[0]['disabled'] = true;
            $data[0]['scopedSlots'] = ['icon' => 'cluster','switcherIcon' => 'car_empty'];
        }
        $data[0]['children_position_type'] = $info['children_position_type'];
        $data[0]['park_sys_type'] = $info['park_sys_type'];
        $data[0]['permission_id'] = 0;
        $data[0]['title'] = '车场';
        $data[0]['key'] = '0|车场|car';
        $data[0]['children'] = $res;
        Cache::tag($this->getCacheTagKey())->set($cacheKey,$data);
        return $data;
    }

    public function getTree($arr = [], $type = '',$select=0,$info=[])
    {

        foreach ($arr as $k => $v) {
            if ($type == 'garage') {
                $where['pp.garage_id'] = $v['permission_id'];
                if (!empty($info)&&$info['children_position_type']==1){
                    $where['pp.children_type'] = 1;
                }
                if(isset($v['village_id'])){
                    $where['pp.village_id'] = $v['village_id'];
                }
                $position_list = $this->getPosition($where, 'pp.position_id,pp.position_num,pp.garage_id');
                $list = [];
                foreach ($position_list as $k1 => $v1) {
                    $list[$k1]['title'] = $v1['title'];
                    $list[$k1]['disabled'] = false;
                    $list[$k1]['scopedSlots'] = $v1['scopedSlots'];
                    $list[$k1]['parent_permission_id'] = $v['permission_id'];
                    $list[$k1]['permission_id'] = $v1['position_id'];
                    $list[$k1]['key'] = $v1['key'];
                }
                if(empty($list) && ($v['key']=='100000|临时车位|garage')){
                    $arr[$k]['scopedSlots']=['icon' => 'cluster','switcherIcon' => 'temgarage_empty'];
                }elseif(empty($list) && ($v['key']!='100000|临时车位|garage')){
                    $arr[$k]['scopedSlots']=['icon' => 'cluster','switcherIcon' => 'garage_empty'];
                }
                if(empty($list)){
                    $arr[$k]['disabled'] = true;
                }
                $arr[$k]['children'] = $list;
            }
        }
        return $arr;
    }

    public function getPosition($where = [], $field = true)
    {
        $position_list = $this->parkingPositionModel->getListss($where, $field, 0, 0);
        if ($position_list) {
            foreach ($position_list as $k => $v) {
                $carInfo = $this->parkingCarModel->getOne(['car_position_id'=>$v['position_id']],'province');
                $position_list[$k]['title'] = $carInfo['province'].$v['position_num'];
                $position_list[$k]['disabled'] = false;
                if($v['garage_id'] == 9999)
                    $position_list[$k]['scopedSlots'] = ['icon' => 'user','title'=>'edit_out','switcherIcon' => 'position'];
                else
                    $position_list[$k]['scopedSlots'] = ['icon' => 'user','switcherIcon' => 'position'];
                $position_list[$k]['key'] = $v['position_id'] . '|' . $v['position_num'] . '|' . 'position';
            }
        }
        return $position_list;
    }

    /**
     * 车辆详情
     * @author lijie
     * @date_time 2021/07/06
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCarDetail($where=[],$field=true)
    {
        $data = $this->parkingCarModel->getOne($where,$field);
        if($data['room_id']){
            $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
            $room_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$data['room_id']],'room');
            if($room_info){
                $data['room_address'] = $room_info['room'];
            }else{
                $data['room_address'] = '';
            }
        }
        return $data;
    }

    /**
     *定制停车-获取停车场列表
     * @author:zhubaodi
     * @date_time: 2021/8/21 13:54
     */
    public function getParkingList($data)
    {
        //  $list = $this->parkingList();
        $db_house_village_park_config = new HouseVillageParkConfig();
        $park_config_info = $db_house_village_park_config->getFind(['village_id' => $data['village_id']]);
        $parkLst = [];
        // if ($park_config_info['park_versions'] == 2 && in_array($park_config_info['park_sys_type'],['D3','D5'])) {
        if ($park_config_info['park_versions'] == 2) {
            $db_house_village = new HouseVillage();
            //  $village_info = $db_house_village->getOne($data['village_id'], 'village_name,village_id,long,lat,village_address');
            $village_info=[];
            $where_list=[
                'c.park_show'=>1,
                'c.park_versions'=>2,
                'b.status'=>1,
            ];
            $field='b.village_name,b.village_id,b.long,lat,b.village_address,c.id';
            $list = $db_house_village_park_config->getVillagelist($where_list, $field);
            if (!empty($list)) {
                $list=$list->toArray();
            }
            $parkLst = [];
            if (!empty($list)) {
                foreach ($list as $k => $v) {
                    $parkLst[$k]['id'] = $v['village_id'];
                    $parkLst[$k]['name'] = $v['village_name'];
                    $parkLst[$k]['address'] = $v['village_address'];
                    $parkLst[$k]['lng'] = $v['long'];
                    $parkLst[$k]['lat'] = $v['lat'];
                    $distance = getDistance($data['lat'], $data['lng'], $v['lat'],  $v['long']);
                    $parkLst[$k]['distance_sort']=$distance;
                    if ($distance >= 1000) {
                        $parkLst[$k]['distance']= round_number($distance / 1000, 2) . 'km';
                    } else {
                        $parkLst[$k]['distance'] = $distance . 'm';
                    }
                }
                if (count($parkLst) > 1) {
                    $distance1 = array_column($parkLst, 'distance_sort');
                    array_multisort($distance1, SORT_ASC,SORT_NUMERIC, $parkLst);
                }
            }

            if (!empty($village_info)) {
                $parkLst[0]['id'] = $village_info['village_id'];
                $parkLst[0]['name'] = $village_info['village_name'];
                $parkLst[0]['address'] = $village_info['village_address'];
                $parkLst[0]['lng'] = $village_info['long'];
                $parkLst[0]['lat'] = $village_info['lat'];
                $parkLst[0]['distance'] = getDistance($data['lat'], $data['lng'], $village_info['lat'], $village_info['long']);
                if ($parkLst[0]['distance'] >= 1000) {
                    $parkLst[0]['distance'] = round_number($parkLst[0]['distance'] / 1000, 2) . 'km';
                } else {
                    $parkLst[0]['distance'] = $parkLst[0]['distance'] . 'm';
                }
            }
        }
        $is_temporary_park=1;
        if(!empty($park_config_info) && $park_config_info['park_sys_type'] == 'D5' && $park_config_info['park_versions'] == '2'){
            $is_temporary_park=0;
        }
        $tips=[
            'title'=> '温馨提示',
            'info' => '请点击停车场列表，进行临时停车登记。',
            'icon'  => cfg('site_url') . '/static/images/house/park/notice.gif'
        ];
        if ($data['village_id'] > 0) {
            $houseVillageParkConfig = new HouseVillageParkConfig();
            $info = $houseVillageParkConfig->getFind(['village_id' => $data['village_id']]);
            if ($info && !$info->isEmpty()) {
                $info = $info->toArray();
            }
            if (!empty($info) && $info['park_sys_type'] == 'D5' && $info['park_versions'] == '2') {
                $tips = '';
            }
        }
        return [
            'list'=>$parkLst,
            'skiptype'=>$is_temporary_park,
            'tips'=>$tips
        ];
    }

    /**
     *定制停车-获取停车纪录
     * @author:zhubaodi
     * @date_time: 2021/8/21 13:54
     */
    public function getInParkingList($uid, $village_id, $page)
    {
        $db_house_village_pay_order = new HouseVillagePayOrder();
        $db_in_park = new InPark();
        $db_out_park = new OutPark();
        $db_house_village = new HouseVillage();
        $wherePark = [];
        $wherePark[] = ['village_id', '=', $village_id];
        $wherePark[] = ['uid', '=', $uid];
        $wherePark[] = ['order_type', '=', 'park'];
        $wherePark[] = ['paid', '=', '1'];
        $pay_order_list = $db_house_village_pay_order->get_list($wherePark);

        $order_id_arr = $db_house_village_pay_order->getColumn($wherePark, 'order_id');
        $whereParkCar = $wherePark;
        $whereParkCar[] = ['car_id', '>', 0];
        $car_id_arr   = $db_house_village_pay_order->getColumn($whereParkCar, 'car_id');
//        $village_id_arr = $db_house_village_pay_order->getColumn($wherePark, 'village_id');
        $village_id_arr = [$village_id];
        if (!empty($order_id_arr)) {
            $whereInPark = [];
            $whereInPark[] = ['pay_order_id', 'in', $order_id_arr];
            $whereInPark[] = ['park_id',      '=', $village_id];
            $in_park_arr = $db_in_park->getColumn($whereInPark, 'in_time, out_time, car_number, order_id', 'pay_order_id');
            $park_order_id_arr = $db_in_park->getColumn($whereInPark, 'order_id');
            $whereOutPark = [];
            $whereOutPark[] = ['order_id', 'in', $park_order_id_arr];
            $whereOutPark[] = ['out_time', '>', 0];
            $out_park_arr = $db_out_park->getColumn($whereOutPark, 'in_time, out_time, car_number, order_id', 'order_id');
        } else {
            $in_park_arr = [];
            $out_park_arr = [];
        }

        // 查询新版停车收费
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_car_access_record = new HouseVillageCarAccessRecord();
        $whereParkNew = [];
        $whereParkNew[] = ['village_id', '=', $village_id];
        $whereParkNew[] = ['uid',        '=', $uid];
        $whereParkNew[] = ['order_type', '=', 'park_new'];
        $whereParkNew[] = ['is_paid',    '=', '1'];
        $whereParkCarNew = $whereParkNew;
        $new_pay_order_list = $db_house_new_pay_order->getPayLists($whereParkNew, true, 0, 0, 'pay_time DESC, order_id DESC');
        $whereParkNew[] = ['car_type',   '=', 'temporary_type'];
        $summary_id_arr = $db_house_new_pay_order->getColumn($whereParkNew, 'summary_id');

        $whereParkCarNew[] = ['car_id', '>', 0];
        $car_id_new_arr   = $db_house_new_pay_order->getColumn($whereParkCarNew, 'car_id');
        if (!empty($car_id_new_arr)) {
            $car_id_arr = array_merge($car_id_arr, $car_id_new_arr);
        }
        $car_id_arr = array_unique($car_id_arr);

        if (!empty($summary_id_arr)) {
            $whereNewInPark = [];
            $whereNewInPark[] = ['pay_order_id', 'in', $summary_id_arr];
            $whereNewInPark[] = ['park_id',      '=', $village_id];
            $new_in_park_arr       = $db_in_park->getColumn($whereNewInPark, 'id, in_time, out_time, car_number, order_id', 'pay_order_id');
            $new_park_order_id_arr = $db_in_park->getColumn($whereNewInPark, 'order_id');
            $new_from_id_arr       = $db_in_park->getColumn($whereNewInPark, 'id');
            $whereNewOutPark = [];
            $whereNewOutPark[] = ['order_id', 'in', $new_park_order_id_arr];
            $whereNewOutPark[] = ['out_time', '>', 0];
            $new_out_park_arr = $db_out_park->getColumn($whereNewOutPark, 'id, in_time, out_time, car_number, order_id', 'order_id');

            if (!empty($new_from_id_arr)) {
                $whereInAccessRecord = [];
                $whereInAccessRecord[] = ['business_type', '=', 0];
                $whereInAccessRecord[] = ['business_id',   '=', $village_id];
                $whereInAccessRecord[] = ['accessType',    '=', 1];
                $whereInAccessRecord[] = ['from_id',       'in', $new_from_id_arr];
                $accessOrderIdArr = $db_house_village_car_access_record->getColumn($whereInAccessRecord, 'order_id');
                $accessInInfoArr  = $db_house_village_car_access_record->getColumn($whereInAccessRecord, 'record_id, order_id, car_number,accessTime, from_id','from_id');
                $whereOutAccessRecord = [];
                $whereOutAccessRecord[] = ['business_type', '=', 0];
                $whereOutAccessRecord[] = ['business_id',   '=', $village_id];
                $whereOutAccessRecord[] = ['accessType',    '=', 2];
                $whereOutAccessRecord[] = ['order_id',      'in', $accessOrderIdArr];
                $accessOutInfoArr = $db_house_village_car_access_record->getColumn($whereOutAccessRecord, 'record_id, order_id, car_number,accessTime, from_id', 'order_id');
            } else {
                $accessInInfoArr  = [];
                $accessOutInfoArr = [];
            }
        } else {
            $accessInInfoArr  = [];
            $accessOutInfoArr = [];
            $new_in_park_arr  = [];
            $new_out_park_arr = [];
        }

        if (!empty($car_id_arr)) {
            $whereCar = [];
            $whereCar[] = ['village_id', '=', $village_id];
            $whereCar[] = ['car_id',     'in', $car_id_arr];
            $db_house_village_parking_car = new HouseVillageParkingCar();
            $car_info_arr = $db_house_village_parking_car->getColumn($whereCar, 'car_id, village_id, province, car_number', 'car_id');
        } else {
            $car_info_arr = [];
        }
        if (!empty($village_id_arr)) {
            $whereVillage = [];
            $whereVillage[] = ['village_id', 'in', $village_id_arr];
            $village_info_arr = $db_house_village->getColumn($whereVillage, 'village_id, village_name', 'village_id');
        } else {
            $village_info_arr = [];
        }
        $carList1 = [];
        $carKey = 0;
        if (!empty($new_pay_order_list)) {
            if (!is_array($new_pay_order_list)) {
                $new_pay_order_list = $new_pay_order_list->toArray();
            }
            foreach ($new_pay_order_list as $item) {
                if ($item['pay_time']) {
                    $item['pay_time'] = date('Y-m-d H:i:s', $item['pay_time']);
                } else {
                    $item['pay_time'] = '--';
                }
                $in_park  = isset($new_in_park_arr[$item['summary_id']]) && $new_in_park_arr[$item['summary_id']] ? $new_in_park_arr[$item['summary_id']] : [];
                $out_park = isset($new_out_park_arr[$in_park['order_id']]) && $new_out_park_arr[$in_park['order_id']] ? $new_out_park_arr[$in_park['order_id']] : [];
                if (!empty($in_park) && empty($out_park)) {
                    $accessIn  = isset($accessInInfoArr[$in_park['id']]) && $accessInInfoArr[$in_park['id']] ? $accessInInfoArr[$in_park['id']] : [];
                    $accessOut = isset($accessIn['order_id']) && isset($accessOutInfoArr[$accessIn['order_id']]) && $accessOutInfoArr[$accessIn['order_id']] ? $accessOutInfoArr[$accessIn['order_id']] : [];
                } else {
                    $accessIn  = [];
                    $accessOut = [];
                }
                $in_time  = isset($in_park['in_time'])   && $in_park['in_time']   ? $in_park['in_time']   : 0;
                $out_time = isset($out_park['out_time']) && $out_park['out_time'] ? $out_park['out_time'] : 0;
                if (!$in_time && isset($out_park['in_time']) && $out_park['in_time']) {
                    $in_time = $out_park['in_time'];
                }
                if (!$in_time && isset($accessIn['accessTime']) && $accessIn['accessTime']) {
                    $in_time = $accessIn['accessTime'];
                }
                if (!$out_time && isset($in_time['out_time']) && $in_time['out_time']) {
                    $out_time = $in_time['out_time'];
                }
                if (!$out_time && isset($accessOut['accessTime']) && $accessOut['accessTime']) {
                    $out_time = $accessOut['accessTime'];
                }
                $standing_time = $out_time - $in_time;
                if ($standing_time > 0) {
                    $item['standing_time'] = $standing_time ? round_number(($standing_time) / 3600, 1) . '小时' : '无';
                } else {
                    $item['standing_time'] = '无';
                }
                $village_name = isset($village_info_arr[$item['village_id']]) && $village_info_arr[$item['village_id']] ? $village_info_arr[$item['village_id']]['village_name'] : '';

                switch ($item['pay_type']){
                    case 0:
                        $item['pay_type'] = '余额支付';
                        break;
                    case 1:
                        $item['pay_type'] = '扫码支付';
                        break;
                    case 2:
                        $item['pay_type'] = '线下支付';
                        break;
                    case 3:
                        $item['pay_type'] = '收款码支付';
                        break;
                    case 4:
                        $item['pay_type'] = '线上支付';
                        break;
                }
                $item['park_name']  = $village_name;
                $item['pay_type']   = empty($item['pay_type']) ? '线上支付' : $item['pay_type'];
                $item['pay_status'] = '支付成功';
                $item['color']      = 'red';
                switch ($item['car_type']) {
                    case 'temporary_type':
                        $item['car_type_text'] = '临时车缴费';
                        break;
                    case 'month_type':
                        $item['car_type_text'] = '月租车充值';
                        break;
                    case 'stored_type':
                        $item['car_type_text'] = '停车卡储值';
                        break;
                    default:
                        $item['car_type_text'] = '无';
                        break;
                }
                if (!$item['car_number'] && $item['car_id'] && isset($car_info_arr[$item['car_id']])) {
                    $item['car_number'] = $car_info_arr[$item['car_id']]['province'] . $car_info_arr[$item['car_id']]['car_number'];
                }
                $carList1[$carKey] = [];
                $carList1[$carKey][]  = [
                    'key'   => '停车场名称',
                    'value' => $item['park_name'],
                ];
                $carList1[$carKey][]  = [
                    'key'   => '支付状态',
                    'value' => $item['pay_status'],
                ];
                $carList1[$carKey][]  = [
                    'key'   => '车牌号',
                    'value' => $item['car_number'],
                ];
                $carList1[$carKey][]  = [
                    'key'   => '停车时长',
                    'value' => $item['standing_time'],
                ];
                $carList1[$carKey][]  = [
                    'key'   => '支付金额',
                    'value' => $item['total_money'],
                ];
                $carList1[$carKey][]  = [
                    'key'   => '支付时间',
                    'value' => $item['pay_time'],
                ];
                $carList1[$carKey][]  = [
                    'key'   => '支付方式',
                    'value' => $item['pay_type'],
                ];
                $carList1[$carKey][]  = [
                    'key'   => '缴费类型',
                    'value' => $item['car_type_text'],
                ];
                $carKey++;
            }
        }
        if (!empty($pay_order_list)) {
            if (!is_array($pay_order_list)) {
                $pay_order_list = $pay_order_list->toArray();
            }
            if (!empty($pay_order_list)) {
                foreach ($pay_order_list as $k => $val) {
                    if ($val['pay_time']) {
                        $val['pay_time'] = date('Y-m-d H:i:s', $val['pay_time']);
                    } else {
                        $val['pay_time'] = '--';
                    }
                    $in_park  = isset($in_park_arr[$val['order_id']])      && $in_park_arr[$val['order_id']]      ? $in_park_arr[$val['order_id']]      : [];
                    $out_park = isset($out_park_arr[$in_park['order_id']]) && $out_park_arr[$in_park['order_id']] ? $out_park_arr[$in_park['order_id']] : [];
                    if (!empty($in_park)) {
                        $in_time  = isset($in_park['in_time'])   && $in_park['in_time']   ? $in_park['in_time']   : $out_park['in_time'];
                        $out_time = isset($out_park['out_time']) && $out_park['out_time'] ? $out_park['out_time'] : $in_park['out_time'];
                        $standing_time = $out_time - $in_time;
                        $val['standing_time'] = $standing_time ? round_number(($standing_time) / 3600, 1) . '小时' : '无';
                        $val['car_number']    = $in_park['car_number'];
                    } else {
                        $val['standing_time'] = 0;
                        $val['number'] = '';
                    }
                    $village_name = isset($village_info_arr[$val['village_id']]) && $village_info_arr[$val['village_id']] ? $village_info_arr[$val['village_id']]['village_name'] : '';

                    $val['park_name'] = $village_name;
                    $val['pay_type'] = empty($val['pay_type']) ? '线上支付' : $val['pay_type'];
                    $val['pay_status'] = '支付成功';
                    $val['color'] = 'red';
                    switch ($val['car_type']) {
                        case 'temporary_type':
                            $val['car_type_text'] = '临时车缴费';
                            break;
                        case 'month_type':
                            $val['car_type_text'] = '月租车充值';
                            break;
                        case 'stored_type':
                            $val['car_type_text'] = '停车卡储值';
                            break;
                        default:
                            $val['car_type_text'] = '无';
                            break;
                    }
                    if (!$val['car_number'] && $val['car_id'] && isset($car_info_arr[$val['car_id']])) {
                        $val['car_number'] = $car_info_arr[$val['car_id']]['province'] . $car_info_arr[$val['car_id']]['car_number'];
                    }
                    $carList1[$carKey] = [];
                    $carList1[$carKey][]  = [
                        'key'   => '停车场名称',
                        'value' => $val['park_name'],
                    ];
                    $carList1[$carKey][]  = [
                        'key'   => '支付状态',
                        'value' => $val['pay_status'],
                    ];
                    $carList1[$carKey][]  = [
                        'key'   => '车牌号',
                        'value' => $val['car_number'],
                    ];
                    $carList1[$carKey][]  = [
                        'key'   => '停车时长',
                        'value' => $val['standing_time'],
                    ];
                    $carList1[$carKey][]  = [
                        'key'   => '支付金额',
                        'value' => $val['money'],
                    ];
                    $carList1[$carKey][]  = [
                        'key'   => '支付时间',
                        'value' => $val['pay_time'],
                    ];
                    $carList1[$carKey][]  = [
                        'key'   => '支付方式',
                        'value' => $val['pay_type'],
                    ];
                    $carList1[$carKey][]  = [
                        'key'   => '缴费类型',
                        'value' => $val['car_type_text'],
                    ];
                    $carKey++;
                }
            }
        }
        return $carList1;
    }

    /**
     * 定制停车-添加访客登记纪录
     * @author:zhubaodi
     * @date_time: 2021/8/21 15:37
     */
    public function add_visitor_list($data)
    {
        if (isset($data['phone'])) {
            $phone = $data['phone'];
        } else {
            throw new Exception('请输入手机号');
        }
        /* if (isset($data['code'])) {
             $code = $data['code'];
         } else {
             throw new Exception('请输入验证码');
         }
         $smsWhere = [
             ['phone', '=', $phone],
             ['type', '=', 52],
             ['status', '=', 0],
             ['extra', '=', $data['code']],
             ['expire_time', '>', time()],
         ];
         $smsRecord = \think\facade\Db::name('app_sms_record')->where($smsWhere)->find();
         if (empty($smsRecord)) {
             throw new Exception('验证码错误');
         }*/
        $db_house_visitor = new HouseVillageVisitor();
        // print_r(strtotime($data['time']));exit;
        $add_data = [
            'uid' => $data['uid'],
            'village_id' => $data['village_id'],
            'visitor_name' => $data['username'],
            'visitor_phone' => $data['phone'],
            'is_car' => 1,
            'car_id' => $data['car_id'],
            'pass_time' => time(),
            'add_time' => time(),
            'owner_uid' => 0,
            'owner_name' => '',
            'owner_phone' => '',
            'owner_address' => '',
            'memo' => '',
            'owner_bind_id' => 0,
            'single_id' => 0,
            'floor_id' => 0,
            'layer_id' => 0,
            'vacancy_id' => 0,
            'visitor_bind_id' => 0,
        ];
        $id = $db_house_visitor->addOne($add_data);
        if ($id > 0) {
            $this->addParkOpenLog($data);
        }
        $res['id']=$id;
        $res['url']=get_base_url('pages/village_menu/index');
        return $res;

    }


    public function addParkOpenLog($data){
        fdump_api([$data],'addParkOpenLog_0217',1);
        $db_park_open_log = new ParkOpenLog();
        $db_park_total_record = new ParkTotalRecord();
        $db_park_config = new HouseVillageParkConfig();
        $db_park_passage = new ParkPassage();
        $park_config_info=$db_park_config->getFind(['village_id'=>$data['village_id']]);
        $province = mb_substr($data['car_id'], 0, 1);
        if ($province!='L'&&$province!='临'&&$province!='无'){
            if ($park_config_info['park_sys_type']=='D7'){
                $visitor_data=[];
                $visitor_data['parkId']=$park_config_info['d7_park_id'];
                $visitor_data['mobileNumber']=$data['phone'];
                $visitor_data['appointmentVehicle']=$data['car_id'];
                $visitor_data['receptionist']=$data['username'];
                $visitor_data['visitorName']=$data['username'];
                $visitor_data['appointmentReason']='登记入场';
                $visitor_data['appointmentDate']=time();
                $visitor_data['source']=2;
                (new QinLinCloudService())->visitor($visitor_data);
            }else{
                $where = [
                    ['car_number', '=', $data['car_id']],
                    ['park_type', '=', 1],
                    ['add_time', '>=', time() - 300],
                    ['add_time', '<=', time() + 100],
                ];
                $db_park_plateresult_log = new ParkPlateresultLog();
                $log_info = $db_park_plateresult_log->get_one($where);
                fdump_api([$data,$log_info],'addParkOpenLog_0217',1);
                if (!empty($log_info)) {
                    if (in_array($park_config_info['park_sys_type'],['D3','A11'])&&$park_config_info['temp_in_park_type']==1){
                        $park_log_data = [];
                        $park_log_data['car_number'] = $log_info['car_number'];
                        $park_log_data['channel_id'] = $log_info['channel_id'];
                        $park_log_data['park_type'] = $log_info['park_type'];
                        $park_log_data['add_time'] = time();
                        $park_log_data['open_type'] = 3;
                        $id=$db_park_open_log->add($park_log_data);
                        if (!empty($data['channel_id'])) {
                            $passage_info = $db_park_passage->getFind(['channel_number' => $data['channel_id'], 'village_id' => $data['village_id'], 'status' => 1]);
                            fdump_api(['passage_info'=>$passage_info], 'addParkOpenLog_0217', 1);
                            if ($passage_info['passage_direction'] == 0) {
                                $park_type = 2;
                            } else {
                                $park_type = 1;
                            }
                            $data_screen = [
                                'passage' => $passage_info,
                                'car_type' => 'temporary_type',
                                'village_id' => $data['village_id'],
                                'car_number' => $data['car_id'],
                                'channel_id' => $passage_info['device_number'],
                                'content' => '欢迎光临',
                                'voice_content' => 1
                            ];
                            $this->addParkShowScreenLog($data_screen);
                        }
                        fdump_api([$data,$log_info,$id],'addParkOpenLog_0217',1);
                    }elseif($park_config_info['park_sys_type']=='A1'){
                        $json_data['service_name'] = 'operate_gate';
                        $json_data['park_id'] = $data['village_id'];
                        $json_data['channel_id'] = $log_info['channel_id'];
                        $json_data['msg_id'] = createRandomStr(8, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(12, true, true);//是
                        $json_data['command'] = 1;
                        $post_data['unserialize_desc'] = serialize($json_data);
                        $post_data['park_id'] = $data['village_id'];
                        $post_data['service_name'] = 'operate_gate';
                        $post_data['car_number'] = $log_info['car_number'];
                        $post_data['create_time'] = time();
                        $post_data['village_id'] = $data['village_id'];
                        $post_data['msg_id'] =  $json_data['msg_id'];
                        $id=$db_park_total_record->add($post_data);//临时车C登记完成后, 平台发送远程开闸命令给设备
                        fdump_api([$data,$log_info,$id],'addParkOpenLog_0217',1);
                    }
                }
            }

        }else{
            if (!empty($data['channel_id'])){
                //查询设备
                $passage_info = $db_park_passage->getFind(['channel_number' => $data['channel_id'], 'village_id'=>$data['village_id'],'status' => 1]);
                fdump_api([$data,$passage_info],'addParkOpenLog_0217',1);
                if ($passage_info['passage_direction']==0){
                    $park_type=2;
                }else{
                    $park_type=1;
                }
                if (in_array($passage_info['park_sys_type'],['D3','A11'])&&$park_config_info['temp_in_park_type']==1){
                    $park_log_data = [];
                    $park_log_data['car_number'] = $data['car_id'];
                    $park_log_data['channel_id'] = $passage_info['device_number'];
                    $park_log_data['park_type'] = $park_type;
                    $park_log_data['add_time'] = time();
                    $park_log_data['open_type'] = 3;
                    $id=$db_park_open_log->add($park_log_data);
                    $data_screen=[
                        'passage'=>$passage_info,
                        'car_type'=>'temporary_type',
                        'village_id'=>$data['village_id'],
                        'car_number'=>$data['car_id'],
                        'channel_id'=>$passage_info['device_number'],
                        'content'=>'欢迎光临',
                        'voice_content'=>1
                    ];
                    $this->addParkShowScreenLog($data_screen);
                    fdump_api([$data,$park_log_data,$id],'addParkOpenLog_0217',1);
                }
                elseif($passage_info['park_sys_type']=='A1'){
                    $park_system = M('Park_system')->where(array('park_id'=>$data['village_id']))->find();
                    if(!empty($park_system)){
                        $nolicence_data=[];
                        $nolicence_data['uid'] = $data['uid'];
                        $nolicence_data['car_number'] = $data['car_id'];
                        $nolicence_data['is_out_park'] = 0;
                        $nolicence_data['token'] = '';
                        $nolicence_data['village_id'] =$data['village_id'];
                        $nolicence_data['park_id'] = $data['village_id'];
                        $nolicence_data['channel_id'] = $data['channel_id'];
                        $nolicence_data['is_in_park'] = 0;
                        $db_nolicence_in_park=new NolicenceInPark();
                        $db_nolicence_in_park->insertOne($nolicence_data);

                        $json_data['service_name'] = 'nolicence_in_park';
                        $json_data['car_number'] = $data['car_id'];//车牌
                        $json_data['park_id'] = $data['village_id'];
                        $json_data['channel_id'] = $data['channel_id'];
                        $json_data['timetemp'] = time();

                        $post_data['unserialize_desc'] = serialize($json_data);
                        $post_data['park_id'] = $data['village_id'];
                        $post_data['token'] = $park_system['token'];
                        $post_data['service_name'] = 'nolicence_in_park';
                        $post_data['create_time'] = time();
                        $post_data['village_id'] = $data['village_id'];
                        $post_data['car_number'] = $data['car_id'];
                        $id=$db_park_total_record->add($post_data);//无牌车入场
                        /* $json_data['service_name'] = 'operate_gate';
                         $json_data['park_id'] = $data['village_id'];
                         $json_data['channel_id'] = $data['channel_id'];
                         $json_data['msg_id'] = createRandomStr(8, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(12, true, true);//是
                         $json_data['command'] = 1;
                         $post_data['unserialize_desc'] = serialize($json_data);
                         $post_data['park_id'] = $data['village_id'];
                         $post_data['service_name'] = 'operate_gate';
                         $post_data['car_number'] = $data['car_id'];
                         $post_data['create_time'] = time();
                         $post_data['village_id'] = $data['village_id'];
                         $post_data['msg_id'] =  $json_data['msg_id'];
                         $id=$db_park_total_record->add($post_data);//临时车C登记完成后, 平台发送远程开闸命令给设备*/
                        fdump_api([$data,$post_data,$id],'addParkOpenLog_0217',1);
                    }

                }
                elseif($passage_info['park_sys_type']=='D7'){
                    $nolicence_data=[];
                    $nolicence_data['uid'] = $data['uid'];
                    $nolicence_data['car_number'] = $data['car_id'];
                    $nolicence_data['is_out_park'] = 0;
                    $nolicence_data['token'] = '';
                    $nolicence_data['village_id'] =$data['village_id'];
                    $nolicence_data['park_id'] = $data['village_id'];
                    $nolicence_data['channel_id'] = $data['channel_id'];
                    $nolicence_data['is_in_park'] = 1;
                    $nolicence_data['park_sys_type'] = 'D7';
                    $db_nolicence_in_park=new NolicenceInPark();
                    $res= $db_nolicence_in_park->insertOne($nolicence_data);
                    if ($res>0){
                        $res1=(new QinLinCloudService())->noLicenseIn($park_config_info['d7_park_id'],$data['phone'],$passage_info['d7_channelId']);
                        fdump_api([$res1,$park_config_info['d7_park_id'],$data['phone'],$passage_info['d7_channelId']],'D7/noLicenseIn',1);
                    }

                }

            }
        }
        return true;
    }

    /**
     * 定制停车-添加访客登记纪录根据id
     * @author:zhubaodi
     * @date_time: 2021/8/21 15:37
     */
    public function add_visitor_id($data)
    {
        $db_park_passage = new ParkPassage();
        $db_park_config = new HouseVillageParkConfig();
        $db_house_visitor = new HouseVillageVisitor();
        $db_park_total_record = new ParkTotalRecord();
        $visitor_info = $db_house_visitor->get_one(['id' => $data['id']]);
        if (empty($visitor_info)) {
            throw new Exception('登记信息不存在');
        }
        $add_data = [
            'uid' => $visitor_info['uid'],
            'village_id' => $visitor_info['village_id'],
            'visitor_name' => $visitor_info['visitor_name'],
            'visitor_phone' => $visitor_info['visitor_phone'],
            'is_car' => 1,
            'car_id' => $visitor_info['car_id'],
            'pass_time' => time(),
            'add_time' => time(),
            'owner_uid' => 0,
            'owner_name' => '',
            'owner_phone' => '',
            'owner_address' => '',
            'memo' => '',
            'owner_bind_id' => 0,
            'single_id' => 0,
            'floor_id' => 0,
            'layer_id' => 0,
            'vacancy_id' => 0,
            'visitor_bind_id' => 0,
        ];
        $id = $db_house_visitor->addOne($add_data);
        if ($id > 0) {
            $where = [
                ['car_number', '=', $visitor_info['car_id']],
                ['park_type', '=', 1],
                ['add_time', '>=', time() - 150],
                ['add_time', '<=', time() + 100],
            ];
            $db_park_plateresult_log = new ParkPlateresultLog();
            $log_info = $db_park_plateresult_log->get_one($where);
            $db_park_open_log = new ParkOpenLog();
            $db_house_village_park_config=new HouseVillageParkConfig();
            $park_config_info=$db_house_village_park_config->getFind(['village_id'=>$visitor_info['village_id']]);
            if (!empty($log_info)) {

                //查询设备
                $passage_info = $db_park_passage->getFind(['channel_number' => $log_info['channel_id'], 'village_id'=>$data['village_id'],'status' => 1]);
                $park_config_info=$db_park_config->getFind(['village_id'=>$visitor_info['village_id']]);
                if ($log_info['park_sys_type']=='D3' &&$park_config_info['temp_in_park_type']==1){
                    $park_log_data = [];
                    $park_log_data['car_number'] = $log_info['car_number'];
                    $park_log_data['channel_id'] = $log_info['channel_id'];
                    $park_log_data['park_type'] = $log_info['park_type'];
                    $park_log_data['add_time'] = time();
                    $db_park_open_log->add($park_log_data);
                    $data_screen=[
                        'passage'=>$passage_info,
                        'car_type'=>'temporary_type',
                        'village_id'=>$visitor_info['village_id'],
                        'car_number'=>$log_info['car_number'],
                        'channel_id'=>$log_info['channel_id'],
                        'content'=>'欢迎光临',
                        'voice_content'=>1
                    ];
                    $this->addParkShowScreenLog($data_screen);
                }elseif($log_info['park_sys_type']=='A1'){
                    $json_data['service_name'] = 'operate_gate';
                    $json_data['park_id'] = $log_info['village_id'];
                    $json_data['channel_id'] = $log_info['channel_id'];
                    $json_data['msg_id'] = createRandomStr(8, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(4, true, true) . '-' . createRandomStr(12, true, true);//是
                    $json_data['command'] = 1;
                    $post_data['unserialize_desc'] = serialize($json_data);
                    $post_data['park_id'] = $log_info['village_id'];
                    $post_data['service_name'] = 'operate_gate';
                    $post_data['car_number'] = $log_info['car_number'];
                    $post_data['create_time'] = time();
                    $post_data['village_id'] = $log_info['village_id'];
                    $post_data['msg_id'] = $json_data['msg_id'];
                    $db_park_total_record->add($post_data);//临时车C登记完成后, 平台发送远程开闸命令给设备
                }
            }
        }
        return $id;
    }

    /**
     * api-获取token
     * @author:zhubaodi
     * @date_time: 2021/8/21 14:36
     */
    public function getToken()
    {
        $url = $this->url;
        $data = [
            'method' => 'auth',
            'AppID' => $this->AppID,
            'AppSecret' => $this->AppSecret,
        ];
        /*$headers = [
            "cache-control: no-cache",
            "content-type: multipart/form-data; boundary=---011000010111000001101001",
        ];*/
        $headers = [];
        $token = [];
        $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
        fdump_api(['获取token' . __LINE__, $res_arr, $url, $data, $headers], 'getTemporaryCarInfo', 1);
        if ($res_arr[0] == 200) {
            $res = json_decode($res_arr[1], true);
            if ($res['code'] == 200) {
                $token = $res['data']['token'];
            }
        }
        fdump_api(['获取token' . __LINE__, $token], 'getTemporaryCarInfo', 1);
        return $token;
    }

    /**
     * api-获取停车场列表
     * @author:zhubaodi
     * @date_time: 2021/8/21 14:38
     */
    public function parkingList()
    {
        $token = $this->getToken();
        $list = [];
        if (!empty($token)) {
            $url = $this->url;
            $data = [
                'method' => 'ParkingList',
                'page' => '',
                'size' => '',
            ];
            /*$headers = [
                "cache-control: no-cache",
                "content-type: multipart/form-data; boundary=---011000010111000001101001",
                "token:".$token
            ];*/
            $headers = [
                "token:" . $token
            ];
            $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
            // print_r($res_arr);exit;
            if ($res_arr[0] == 200) {
                $res = json_decode($res_arr[1], true);
                if ($res['code'] == 200) {
                    $list = $res['data'];
                }
            }
        }
        return $list;

    }

    /**
     * api-获取停车场列表
     * @author:zhubaodi
     * @date_time: 2021/8/21 14:38
     */
    public function CarParkLog($car_no)
    {
        $token = $this->getToken();
        $list = [];
        if (!empty($token)) {
            $url = $this->url;
            $data = [
                'method' => 'CarParkLog',
                'car_no' => '',
            ];
            $headers = [
                "token:" . $token
            ];
            $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
            if ($res_arr[0] == 200) {
                $res = json_decode($res_arr[1], true);
                if ($res['code'] == 200) {
                    $list = $res['data'];
                }
            }
        }
        return $list;

    }

    /**
     * api-临时车放行操作
     * @author:zhubaodi
     * @date_time: 2021/8/21 14:38
     */
    public function temporaryCarAllow($park_id, $car_no)
    {
        $token = $this->getToken();
        fdump_api(['临时车进场放行' . __LINE__, $token], 'getTemporaryCarInfo', 1);
        $list = '操作失败';
        if (!empty($token)) {
            $url = $this->url_v2;
            $data = [
                'method' => 'temporaryCarAllow',
                'park_id' => $park_id,
                'id' => $car_no,
            ];
            /* $headers = [
                "cache-control: no-cache",
                "content-type: multipart/form-data; boundary=---011000010111000001101001",
                "token:".$token
            ];*/
            $headers = [
                "token:" . $token
            ];
            fdump_api(['临时车进场放行' . __LINE__, $url, $data, $headers], 'getTemporaryCarInfo', 1);
            $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
            fdump_api(['临时车进场放行' . __LINE__, $res_arr], 'getTemporaryCarInfo', 1);
            if ($res_arr[0] == 200) {
                $res = json_decode($res_arr[1], true);
                if ($res['code'] == 200) {
                    $list = '操作成功';
                    fdump_api(['临时车进场放行' . __LINE__, $list, $res], 'getTemporaryCarInfo', 1);
                }
            }
        }
        fdump_api(['临时车进场放行' . __LINE__, $list], 'getTemporaryCarInfo', 1);
        return $list;

    }

    /**
     * api-临时车不放行操作
     * @author:zhubaodi
     * @date_time: 2021/8/21 14:38
     */
    public function temporaryCarProhibit($park_id, $car_no)
    {
        $token = $this->getToken();
        fdump_api(['临时车进场不放行' . __LINE__, $token], 'getTemporaryCarInfo', 1);
        $list = '操作失败';
        if (!empty($token)) {
            $url = $this->url_v2;
            $data = [
                'method' => 'temporaryCarProhibit',
                'park_id' => $park_id,
                'id' => $car_no,
            ];
            /* $headers = [
                "cache-control: no-cache",
                "content-type: multipart/form-data; boundary=---011000010111000001101001",
                "token:".$token
            ];*/
            $headers = [
                "token:" . $token
            ];
            fdump_api(['临时车进场不放行' . __LINE__, $url, $data, $headers], 'getTemporaryCarInfo', 1);
            $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
            fdump_api(['临时车进场不放行' . __LINE__, $res_arr], 'getTemporaryCarInfo', 1);
            if ($res_arr[0] == 200) {
                $res = json_decode($res_arr[1], true);
                if ($res['code'] == 200) {
                    $list = '操作成功';
                    fdump_api(['临时车进场不放行' . __LINE__, $res, $list], 'getTemporaryCarInfo', 1);
                }
            }
        }
        fdump_api(['临时车进场不放行' . __LINE__, $list], 'getTemporaryCarInfo', 1);
        return $list;

    }

    /**
     * api-获取进场临时车信息
     * @author:zhubaodi
     * @date_time: 2021/8/21 14:38
     */
    public function getTempCarInfo($park_id, $deviceID)
    {
        $token = $this->getToken();
        fdump_api(['临时车进场获取信息' . __LINE__, $token], 'getTemporaryCarInfo', 1);
        $list = [];
        if (!empty($token)) {
            $url = $this->url_v2;
            $data = [
                'method' => 'getTemporaryCarInfo',
                'park_id' => $park_id,
                'deviceID' => $deviceID,
            ];
            /* $headers = [
                 "cache-control: no-cache",
                 "content-type: multipart/form-data; boundary=---011000010111000001101001",
                 "token:".$token
             ];*/
            $headers = [
                "token:" . $token
            ];
            fdump_api(['临时车进场获取信息' . __LINE__, $url, $data, $headers], 'getTemporaryCarInfo', 1);
            $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
            fdump_api(['临时车进场获取信息' . __LINE__, $res_arr], 'getTemporaryCarInfo', 1);
            if ($res_arr[0] == 200) {
                $res = json_decode($res_arr[1], true);
                if ($res['code'] == 200) {
                    $list = $res['data'];
                    fdump_api(['临时车进场获取信息' . __LINE__, $res, $list, $res_arr], 'getTemporaryCarInfo', 1);
                }
            }
        }
        fdump_api(['临时车进场获取信息' . __LINE__, $list], 'getTemporaryCarInfo', 1);
        return $list;

    }

    public function getTemporaryCarInfo($data)
    {
        fdump_api(['临时车进场' . __LINE__, $data], 'getTemporaryCarInfo', 1);
        if (!empty($data['car_no']) && !empty($data['park_id'])) {
            $db_park_config = new HouseVillageParkConfig();
            $db_house_visitor = new HouseVillageVisitor();
            //$carInfo=$this->getTempCarInfo($data['park_id'],$data['deviceCodeIn']);
            // fdump_api(['临时车进场'.__LINE__,$carInfo],'getTemporaryCarInfo',1);
            $parkConfig = $db_park_config->getFind(['comid' => $data['park_id'], 'park_sys_type' => 'D3']);
            fdump_api(['临时车进场' . __LINE__, $parkConfig], 'getTemporaryCarInfo', 1);
            if (!empty($parkConfig)) {
                $time = strtotime(date('Y-m-d 00:00:00', time()));
                $end_time = strtotime(date('Y-m-d 23:59:59', time()));
                fdump_api(['临时车进场' . __LINE__, $parkConfig], 'getTemporaryCarInfo', 1);
                $parkInfo = $db_house_visitor->get_one([['car_id', '=', $data['car_no']], ['village_id', '=', $parkConfig['village_id']], ['pass_time', '>=', $time], ['pass_time', '<=', $end_time]]);
                fdump_api(['临时车进场' . __LINE__, $parkInfo], 'getTemporaryCarInfo', 1);
                if (!empty($parkInfo)) {
                    fdump_api(['临时车进场' . __LINE__, $data], 'getTemporaryCarInfo', 1);
                    $res = $this->temporaryCarAllow($data['park_id'], $data['temporaryCarID']);
                    fdump_api(['临时车进场' . __LINE__, $res], 'getTemporaryCarInfo', 1);
                    return $res;
                }
            }
            fdump_api(['临时车进场' . __LINE__, $data], 'getTemporaryCarInfo', 1);
            $res = $this->temporaryCarProhibit($data['park_id'], $data['temporaryCarID']);
            fdump_api(['临时车进场' . __LINE__, $res], 'getTemporaryCarInfo', 1);
            return $res;
        }
        return '操作失败';
    }


    public function SetPushAddress()
    {
        $token = $this->getToken();
        $list = [];
        if (!empty($token)) {
            $url = $this->url_v2;
            $data = [
                'method' => 'SetTemporaryCarPushAddress',
                'url' => 'https://hz.huizhisq.com/index.php?g=Index&c=Index&a=getTemporaryCarInfo',
            ];
            /* $headers = [
                 "cache-control: no-cache",
                 "content-type: multipart/form-data; boundary=---011000010111000001101001",
                 "token:".$token
             ];*/
            $headers = [
                "token:" . $token
            ];
            $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
            if ($res_arr[0] == 200) {
                $res = json_decode($res_arr[1], true);
                if ($res['code'] == 200) {
                    $list = $res;
                }
            }
        }
        return $list;
    }


    public function getParkChargeRule()
    {
        $token = $this->getToken();
        $list = [];
        if (!empty($token)) {
            $url = $this->url_v2;
            $data = [
                'method' => 'getParkChargeRule',
                'park_id' => 108,
            ];
            $headers = [
                "token:" . $token
            ];
            $res_arr = http_request($url, 'POST', http_build_query($data), $headers);
            if ($res_arr[0] == 200) {
                $res = json_decode($res_arr[1], true);
                if ($res['code'] == 200) {
                    $list = $res;
                }
            }
        }
        return $list;

    }

    /**
     * D3-计算停车费
     * @author:zhubaodi
     * @date_time: 2021/11/3 16:15
     */
    public function get_temp_pay($data)
    {
        fdump_api(['计算停车费',$data],'D3Park/get_temp_pay_log',1);
        $db_in_park = new InPark();
        $db_house_village_park_charge = new HouseVillageParkCharge();
        $db_house_new_charge_rule = new HouseNewChargeRule();
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_village_park_config = new HouseVillageParkConfig();
        $park_config=$db_house_village_park_config->getFind(['village_id'=>$data['village_id']]);
        $where = [];
        $park_sys_type='D3';
        $where['car_number'] = $data['car_number'];
        $where['park_id'] = $data['village_id'];
        $where['park_sys_type'] = $park_sys_type;
        $where['is_paid'] = 0;
        $where['is_out'] = 0;
        $where['del_time'] = 0;
        $park_info = $db_in_park->getOne1($where);
        $park_count=$db_in_park->getCount(['car_number'=>$data['car_number'],'park_id'=>$data['village_id'], 'del_time' => 0]);
        fdump_api([$park_info,$where,$park_count],'get_temp_pay_01',1);
        //   print_r($park_info);exit;
        if (empty($park_info)) {
            throw new Exception('没有停车纪录');
        }
        $where_rule=[
            ['village_id','=',$data['village_id'] ],
            ['status','=',1],
            ['charge_valid_time','<=',time()],
            ['fees_type','=',3],
        ];
        $rule_info=$db_house_new_charge_rule->getOne($where_rule,'*','charge_valid_time DESC');
        if (empty($rule_info)) {
            throw new Exception('该停车场未绑定收费规则');
        }
        $where_out = [];
        $where_out['car_number'] = $data['car_number'];
        $where_out['park_id'] = $data['village_id'];
        $where_out['park_sys_type'] = $park_sys_type;
        $where_out['is_out'] = 1;
        $where_out['del_time'] = 0;
        $park_info1 = $db_in_park->getOne1($where_out);
        if (!empty($park_info1)&&$park_info1['out_time']>$park_info['in_time']&&$park_info1['out_time']<time()){
            $park_info['in_time']=$park_info1['out_time'];
        }
        $where_charge = [];
        $where_charge['village_id'] = $data['village_id'];
        $where_charge['park_sys_type'] = $park_sys_type;
        $where_charge['status'] = 1;
        $where_charge['id'] = $rule_info['park_charge_id'];
        $park_charge = $db_house_village_park_charge->getFind($where_charge);
        fdump_api([$park_charge,$where_charge,$park_info['in_time']],'get_temp_pay_01',1);
        // print_r($park_charge);exit;
        if (empty($park_charge)) {
            throw new Exception('该停车场未绑定收费规则');
        }
        $db_house_village_park_temp = new HouseVillageParkingTemp();
        $province = mb_substr($data['car_number'], 0, 1);
        $car_no = mb_substr($data['car_number'], 1);
        $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no,'village_id'=>$data['village_id']]);
        fdump_api([$car_info],'get_temp_pay_01',1);
        if (!empty($car_info)&&$car_info['end_time']>1&&$park_info['in_time']<$car_info['end_time']){
            $park_time = time() - $car_info['end_time'];
        }else{
            $park_time = time() - $park_info['in_time'];
        }

        $whereTemp = [];
        $whereTemp[] = ['car_number', '=', $data['car_number']];
        $whereTemp[] = ['village_id', '=', $data['village_id']];
        $parkTemp = $db_house_village_park_temp->getOne($whereTemp,true,'pay_time DESC,id DESC');
        $park_time_total=$park_time;
        $is_advance_pay=0;  //付过了，识别比心跳过来的快
        fdump_api([$parkTemp,$park_info['in_time'],$park_time],'get_temp_pay_01',1);
        if ($parkTemp && isset($parkTemp['pay_time']) && $parkTemp['pay_time']>$park_info['in_time']) {
            $parkTemp_money=$parkTemp['price'];
            $next_last_park_time=time()-$parkTemp['pay_time'];
            if($next_last_park_time<600 && $parkTemp['order_id']==$park_info['order_id']){
                //10分钟中内相同 入场记录如果有 支付记录 记下钱
                $is_advance_pay=1;
            }
            if (empty($park_config['free_park_time'])){
                if (time() - $parkTemp['pay_time']<900){
                    $park_time=0;
                }
            }else{
                if (time() - $parkTemp['pay_time']<($park_config['free_park_time']*60)){
                    $park_time=0;
                }
            }
        }else{
            $parkTemp_money=0;
        }
        $park_charge_info = unserialize($park_charge['charge_set']);
        $last_ages = array_column($park_charge_info, 'time');
        array_multisort($last_ages ,SORT_DESC,$park_charge_info);
        fdump_api([$park_charge_info,$park_time],'get_temp_pay_01',1);
        $park_money=0;
        $pay_money = 0;
        $coupon_id=0;
        if ($park_time > 0) {
            $parkTime = ceil($park_time / 60);
            if($parkTime <= $park_charge['free_time']) {
                $pay_money = 0;
            }elseif($park_count==1 &&!empty($park_charge['first_free_time'])&&$parkTime<=$park_charge['first_free_time']){
                $pay_money = $park_charge['first_charge_money'];
            } else {
                if($park_charge['charge_type']==1) {
                    if (!empty($park_charge_info)) {
                        $parkTime1 = ceil($park_time / 3600);
                        if ($park_charge['max_charge_money'] > 0 && $parkTime1 > 24) {
                            $level = intval($park_time / 86400);
                            $park_money = $level * $park_charge['max_charge_money'];
                            $park_time = $park_time - $level * 86400;
                            $parkTime1 = $parkTime1 - 24 * $level;
                        }
                        if ($park_charge_info[0]['time'] < $parkTime1) {
                            $pay_money = $park_charge_info[0]['money'];
                            $parkTime2 = $park_time - $park_charge_info[0]['time'] * 3600;
                            //  print_r([$parkTime1,$park_time,$park_charge_info[0]['time'],$parkTime2]);die;
                            if ($park_charge['max_charge_money'] > 0) {
                                /* if($parkTime1>24){
                                     $level=intval($park_time / 86400);
                                     $park_money=$level*$park_charge['max_charge_money'];
                                     $parkTime2=$park_time-$level*86400;
                                 }*/
                                $parkTime3 = ceil($parkTime2 / ($park_charge['charge_time'] * 60));
                                $park_money1 = $parkTime3 * $park_charge['charge_money'];
                                if ($parkTime1 > 24 && ($pay_money + $park_money1) > $park_charge['max_charge_money']) {
                                    $park_money += $park_charge['max_charge_money'];
                                } elseif ($parkTime1 <= 24 && ($pay_money + $park_money1) > $park_charge['max_charge_money']) {
                                    $pay_money = $park_charge['max_charge_money'];
                                } else {
                                    $park_money += $park_money1;
                                }

                            } else {
                                $parkTime3 = ceil($parkTime2 / ($park_charge['charge_time'] * 60));
                                $park_money1 = $parkTime3 * $park_charge['charge_money'];
                                $park_money += $park_money1;
                                //  print_r([$parkTime3,$parkTime2,$park_charge['charge_time'],$park_charge['charge_money'],$park_money1]);die;
                            }
                        } else {
                            foreach ($park_charge_info as $k => $v) {
                                if ($v['time'] == $parkTime1) {
                                    $pay_money = $v['money'];
                                    break;
                                } elseif ($v['time'] < $parkTime1) {
                                    $pay_money = $park_charge_info[$k - 1]['money'];
                                    break;
                                } elseif (!isset($park_charge_info[$k + 1]) && $v['time'] > $parkTime1) {
                                    $pay_money = $park_charge_info[$k]['money'];
                                    break;
                                }
                            }
                        }
                    }
                }elseif($park_charge['charge_type']==2){
                    $parkTime_charge2 = ceil($park_time / 86400);
                    $pay_money=$park_charge['max_charge_money']*$parkTime_charge2;
                }else{
                    $parkTime_charge3= $park_info['in_time']+$park_time;
                    $time_charge=strtotime(date('Y_m-d 00:00:00',$park_info['in_time']))+86400;
                    if ($time_charge<$parkTime_charge3){
                        $parkTime_charge2 = ceil($park_time / 86400);
                        $pay_money=$park_charge['max_charge_money']*$parkTime_charge2;
                    }else{
                        $pay_money=$park_charge['max_charge_money'];
                    }
                }
            }
            $pay_money=$pay_money+$park_money-$parkTemp_money;
            $total_money = $pay_money;
            if ($pay_money > 0) {
                $this->checkCouponUseStatus($data['village_id'],$data['car_number'],$park_sys_type);
                $db_house_village_park_coupon = new HouseVillageParkCoupon();
                $where_coupon = [];
                $where_coupon['village_id'] = $data['village_id'];
                $where_coupon['car_number'] = $data['car_number'];
                /*$where_coupon['user_id'] = $data['uid'];*/
                $where_coupon['park_sys_type'] = $park_sys_type;
                $where_coupon['is_use'] = 0;
                $coupon_info = $db_house_village_park_coupon->getFind($where_coupon);
                //  print_r($coupon_info);exit;
                if (!empty($coupon_info)) {
                    $coupon_info = $coupon_info->toArray();
                    if (!empty($coupon_info)) {
                        $coupon_id=$coupon_info['id'];
                        $pay_money = $pay_money - $coupon_info['money'];
                        if ($pay_money <= 0) {
                            $pay_money = 0;
                        }
                        $db_house_village_park_coupon->saveOne($where_coupon,['is_use'=>1]);

                    } else {
                        $coupon_info['money'] = 0;
                    }

                } else {
                    $coupon_info['money'] = 0;
                }
            }
        } elseif($park_time_total<=0) {
            throw new Exception('没有停车时长');
        }
        $data_temp = [];
        $data_temp['village_id'] = $data['village_id'];
        $data_temp['add_time'] = time();
        $data_temp['free_out_time'] = $park_charge['free_time'];
        $data_temp['duration'] = round_number($park_time_total / 60, 2);
        $data_temp['derate_money'] = isset($coupon_info['money']) ? $coupon_info['money'] : 0;
        $data_temp['derate_duration'] = 0;
        $data_temp['order_id'] = $park_info['order_id'];
        $data_temp['query_order_no'] = build_real_orderid($data['uid']);
        $data_temp['errmsg'] = '';
        $data_temp['price'] = $pay_money;
        $data_temp['total'] = $total_money;
        $data_temp['in_time'] = $park_info['in_time'];
        $data_temp['car_number'] = $data['car_number'];
        $data_temp['out_channel_id'] = isset($data['device_number'])?$data['device_number']:'';
        $data_temp['is_pay_scene']=0;
        $data_temp['park_sys_type'] =$park_sys_type;
        $data_temp['coupon_id'] = $coupon_id;

        if ($pay_money==0){
            $data_temp['is_paid']=1;
            $data_temp['pay_time'] = time();
        }
        if (isset($data['in_record_id']) && $data['in_record_id']) {
            $data_temp['in_record_id'] = $data['in_record_id'];
        }
        $db_house_village_park_temp->addOne($data_temp);
        fdump_api(['计算后记录临时表中',$data_temp],'D3Park/get_temp_pay_log',1);

        $hours = intval($park_time_total / 3600);
        $mins = intval(($park_time_total - $hours * 3600) / 60);
        $second = $park_time_total - $hours * 3600 - $mins * 60;
        $list = [];
        $list['time'] = $hours . '小时' . $mins . '分钟' . $second . '秒';
        $list['park_time'] = $park_time_total;
        $list['pay_money'] = $pay_money;
        $list['order_id'] = $park_info['order_id'];
        $list['park_name'] = $park_info['park_name'];
        $list['in_time'] = date('Y-m-d H:i:s', $park_info['in_time']);
        $list['pay_time'] = time();
        $list['total_money'] = $total_money;
        $list['coupon_money'] = $coupon_info['money'];
        $list['coupon_id'] = $coupon_id;
        $list['parkTemp_money']=$parkTemp_money;
        $list['is_advance_pay']=$is_advance_pay;
        fdump_api(['返回',$list],'D3Park/get_temp_pay_log',1);
        return $list;
    }
    public function checkCouponUseStatus($village_id=0,$car_number='',$park_sys_type=''){
        $db_house_village_park_temp = new HouseVillageParkingTemp();
        $whereTemp = [];
        $whereTemp[] = ['village_id', '=', $village_id];
        $whereTemp[] = ['car_number', '=', $car_number];
        $whereTemp[] = ['is_paid', '=', 0];
        if($park_sys_type){
            $whereTemp[] = ['park_sys_type', '=', $park_sys_type];
        }
        $whereTemp[] = ['coupon_id', '>', 0];
        $parkTemp = $db_house_village_park_temp->getOne($whereTemp,'coupon_id','id DESC');
        if($parkTemp && !$parkTemp->isEmpty()){
            $db_house_village_park_coupon = new HouseVillageParkCoupon();
            $where_coupon = [];
            $where_coupon['village_id'] =$village_id;
            $where_coupon['car_number'] = $car_number;
            if($park_sys_type) {
                $where_coupon['park_sys_type'] = $park_sys_type;
            }
            $where_coupon['id'] = $parkTemp['coupon_id'];
            $saveArr=array('is_use'=>0,'use_time'=>0,'use_txt'=>'');
            $db_house_village_park_coupon->saveOne($where_coupon,$saveArr);
            return $parkTemp['coupon_id'];
        }
        return true;
    }
    public function get_temp_pay_1($data)
    {
        $db_in_park = new InPark();
        $db_house_village_park_charge = new HouseVillageParkCharge();
        $db_house_new_charge_rule = new HouseNewChargeRule();
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $where = [];
        $where['car_number'] = $data['car_number'];
        $where['park_id'] = $data['village_id'];
        $where['park_sys_type'] = 'D3';
        $where['is_paid'] = 0;
        $where['is_out'] = 0;
        $where['del_time'] = 0;
        $park_info = $db_in_park->getOne1($where);
        //   print_r($park_info);exit;
        if (empty($park_info)) {
            throw new Exception('没有停车纪录');
        }

        $where_rule=[
            ['village_id','=',$data['village_id'] ],
            ['status','=',1],
            ['charge_valid_time','<=',time()],

        ];
        $rule_info=$db_house_new_charge_rule->getOne($where_rule,'*','charge_valid_time DESC');
        if (empty($park_charge)) {
            throw new Exception('该停车场未绑定收费规则');
        }
        $where_charge = [];
        $where_charge['village_id'] = $data['village_id'];
        $where_charge['park_sys_type'] = 'D3';
        $where_charge['status'] = 1;
        $where_charge['id'] = $rule_info['park_charge_id'];
        $park_charge = $db_house_village_park_charge->getFind($where_charge);
        // print_r($park_charge);exit;
        if (empty($park_charge)) {
            throw new Exception('该停车场未绑定收费规则');
        }
        $province = mb_substr($data['car_number'], 0, 1);
        $car_no = mb_substr($data['car_number'], 1);
        $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no,'village_id'=>$data['village_id']]);
        if (!empty($car_info)&&$car_info['end_time']>1&&$park_info['in_time']<$car_info['end_time']){
            $park_time = time() - $car_info['end_time'];
        }else{
            $park_time = time() - $park_info['in_time'];
        }
        $park_charge_info = unserialize($park_charge['charge_set']);
        $last_ages=
        $last_ages = array_column($park_charge_info, 'time');
        array_multisort($last_ages ,SORT_DESC,$park_charge_info);
        $park_money=0;
        $pay_money = 0;
        if ($park_time > 0) {
            $parkTime = ceil($park_time / 60);
            if ($parkTime <= $park_charge['free_time']) {
                $pay_money = 0;
            } else {
                if (!empty($park_charge_info)) {
                    $parkTime1 = ceil($park_time / 3600);
                    if ($park_charge_info[0]['time']<$parkTime1){
                        $pay_money = $park_charge_info[0]['money'];
                        $parkTime2=$park_time-$park_charge_info[0]['time']*3600;
                        if ($park_charge['max_charge_money']>0){
                            if($parkTime1>24){
                                $level=intval($park_time / 86400);
                                $park_money=$level*$park_charge['max_charge_money'];
                                $parkTime2=$park_time-$level*86400;
                            }
                            $parkTime3=$parkTime2/$park_charge['charge_time']*60;
                            $park_money1=$parkTime3*$park_charge['charge_money'];
                            if (($pay_money+$park_money1)>$park_charge['max_charge_money']){
                                $park_money+=$park_charge['max_charge_money'];
                            }else{
                                $park_money+=$park_money1;
                            }

                        }else{
                            $parkTime3=$parkTime2/$park_charge['charge_time']*60;
                            $park_money1=$parkTime3*$park_charge['charge_money'];
                            $park_money+=$park_money1;
                        }
                    }else{
                        foreach ($park_charge_info as $k=>$v) {
                            if ($v['time'] == $parkTime1) {
                                $pay_money = $v['money'];
                                break;
                            }
                        }
                    }
                }
            }
            $pay_money=round_number($pay_money+$park_money,2);
            $total_money = $pay_money;
            if ($pay_money > 0) {
                $db_house_village_park_coupon = new HouseVillageParkCoupon();
                $where_coupon = [];
                $where_coupon['village_id'] = $data['village_id'];
                $where_coupon['car_number'] = $data['car_number'];
                /*$where_coupon['user_id'] = $data['uid'];*/
                $where_coupon['park_sys_type'] = 'D3';
                $where_coupon['is_use'] = 0;
                $coupon_info = $db_house_village_park_coupon->getFind($where_coupon);
                if (!empty($coupon_info)) {
                    $coupon_info = $coupon_info->toArray();
                    if (!empty($coupon_info)) {
                        $pay_money = $pay_money - $coupon_info['money'];
                        if ($pay_money < 0) {
                            $pay_money = 0;
                        }
                        $db_house_village_park_coupon->saveOne($where_coupon,['is_use'=>1]);

                    } else {
                        $coupon_info['money'] = 0;
                    }

                } else {
                    $coupon_info['money'] = 0;
                }
            }
        } else {
            throw new Exception('没有停车时长');
        }
        $data_temp = [];
        $data_temp['village_id'] = $data['village_id'];
        $data_temp['add_time'] = time();
        $data_temp['free_out_time'] = $park_charge['free_time'];
        $data_temp['duration'] = round_number($park_time / 60, 2);
        $data_temp['derate_money'] = isset($coupon_info['money']) ? $coupon_info['money'] : 0;
        $data_temp['derate_duration'] = 0;
        $data_temp['order_id'] = $park_info['order_id'];
        $data_temp['query_order_no'] = build_real_orderid($data['uid']);
        $data_temp['errmsg'] = '';
        $data_temp['price'] = $pay_money;
        $data_temp['total'] = $total_money;
        $data_temp['in_time'] = $park_info['in_time'];
        $data_temp['car_number'] = $data['car_number'];
        $data_temp['out_channel_id'] = $park_info['id'];
        $data_temp['park_sys_type'] = 'D3';
        $db_house_village_park_temp = new HouseVillageParkingTemp();
        $db_house_village_park_temp->addOne($data_temp);

        $hours = intval($park_time / 3600);
        $mins = intval(($park_time - $hours * 3600) / 60);
        $second = $park_time - $hours * 3600 - $mins * 60;
        $list = [];
        $list['time'] = $hours . '小时' . $mins . '分钟' . $second . '秒';
        $list['park_time'] = $park_time;
        $list['pay_money'] = $pay_money;
        $list['order_id'] = $park_info['order_id'];
        $list['park_name'] = $park_info['park_name'];
        $list['in_time'] = date('Y-m-d H:i:s', $park_info['in_time']);
        $list['pay_time'] = time();
        $list['total_money'] = $total_money;
        $list['coupon_money'] = $coupon_info['money'];
        fdump_api([$list],'get_temp_pay_01',1);
        return $list;
    }

    /**
     * 计算停车需交费用
     * @author:zhubaodi
     * @date_time: 2021/11/11 14:49
     */
    public function get_park_money($data)
    {
        $db_house_village_park_config = new HouseVillageParkConfig();
        $park_config_info = $db_house_village_park_config->getFind(['village_id' => $data['village_id']]);
        $payment_info = [];
        $park_info=[
            'is_async'=>false,
            'temp_id'=>0
        ];
        if ($park_config_info['park_versions'] == 2 && $park_config_info['park_sys_type'] == 'D3') {
            $payment_info = $this->get_temp_pay($data);
        }elseif ($park_config_info['park_versions'] == 2 && $park_config_info['park_sys_type'] == 'D6'){
            $park_info =$this->getVillageParkType($park_config_info,$data['car_number']);
            $paramArr=array('village_id'=>$data['village_id'],'car_number'=>$data['car_number'],'query_order_no'=>$park_info['temp_id']);
            $list=$this->timingQuery($paramArr);
            $list['park_info']=$park_info;
            return $list;
        }elseif ($park_config_info['park_versions'] == 2 && $park_config_info['park_sys_type'] == 'D7'){
            $payment_info=$this->queryOrderPriceD7($data);

        }else if($park_config_info['park_versions'] == 2 && $park_config_info['park_sys_type'] == 'A11'){
            $service_a11 = new A11Service();
            $data['car_number_type']=0;
            $payment_info =$service_a11->get_temp_pay($data);
        }
        $list['park_info']=$park_info;
        $pay_list2 = [];
        $pay_list1 = [];
        $pay_list3 = [];
        $pay_list4 = [];
        if (!empty($payment_info)) {
            $pay_list1[0]['title'] = '车牌号';
            $pay_list1[0]['val'] = $data['car_number'];
            $pay_list1[1]['title'] = '应付金额';
            $pay_list1[1]['val'] = $payment_info['total_money'];
            $pay_list1[2]['title'] = '停车时间';
            $pay_list1[2]['val'] = $payment_info['time'];
            $pay_list2[0]['title'] = '入场时间';
            $pay_list2[0]['val'] = $payment_info['in_time'];
            $pay_list3[0]['title'] = '订单编号';
            $pay_list3[0]['val'] = $payment_info['order_id'];
            $pay_list3[1]['title'] = '车场名称';
            $pay_list3[1]['val'] = $payment_info['park_name'];
            $pay_list3[2]['title'] = '缴费时间';
            $pay_list3[2]['val'] = $payment_info['pay_time'];
            $pay_list4[0]['title'] = '应付金额';
            $pay_list4[0]['val'] = $payment_info['total_money'];
            $pay_list4[1]['title'] = '停车抵扣券';
            $pay_list4[1]['val'] = $payment_info['coupon_money'];
            $pay_list4[2]['title'] = '实付金额';
            $pay_list4[2]['val'] = $payment_info['pay_money'];
        }

        if(!empty($payment_info)){
            $data=[
                'car_number'=>$data['car_number'],
                'total_money'=>$payment_info['total_money'],
                'parking_duration'=>$payment_info['time'],
                'in_time'=>$payment_info['in_time'],
                'order_no'=>$payment_info['order_id'],
                'park_name'=>$payment_info['park_name'],
                'pay_time'=>$payment_info['pay_time'],
                'coupon_money'=>$payment_info['coupon_money'],
                'pay_money'=>$payment_info['total_money']
            ];
            $list['pay_money']=$data['pay_money'];
            $listtmp=$this->assembleOrderData($data);
            $list['list']=array();
            $list['list']['top']=$listtmp['top'];
            $list['list']['middle']=$listtmp['middle'];
            $list['list']['bottom']=$listtmp['bottom'];
            $list['pay_list1']=$listtmp['pay_list1'];
            $list['pay_list2']=$listtmp['pay_list2'];
            $list['pay_list3']=$listtmp['pay_list3'];
            $list['pay_list4']=$listtmp['pay_list4'];

        }
        return $list;
    }


    /**
     * D7查询车辆的需缴费信息
     * @author:zhubaodi
     * @date_time: 2021/10/8 17:05
     */
    public function queryOrderPriceD7($data)
    {
        $db_house_village_park_config=new HouseVillageParkConfig();
        $db_house_village_park_temp = new HouseVillageParkingTemp();

        $park_config=$db_house_village_park_config->getFind(['village_id'=>$data['village_id'],'park_sys_type'=>'D7']);
        if (empty($park_config)||empty($park_config['d7_park_id'])){
            throw new Exception('停车场信息不存在');
        }

        if (empty($data['car_number'])){
            throw new Exception('车牌号不能为空');
        }
        $query=(new QinLinCloudService())->queryParkingBill($park_config['d7_park_id'],1,'',$data['car_number']);
        if(empty($query) || empty($query['data'])||$query['state']!=200){
            throw new Exception($query['msg']);
        }
        $price_data=$query['data'];
        $data_temp=[];
        $data_temp['village_id']=$data['village_id'];
        $data_temp['add_time']=time();
        $data_temp['query_time']=time();
        $data_temp['duration']=$price_data['parkingTime'];
        $data_temp['derate_money']=isset($price_data['discountMoney'])?round_number($price_data['discountMoney']/100,2):0;
        $data_temp['derate_duration']=isset($price_data['discountTime'])?$price_data['discountTime']:0;
        $data_temp['order_id']=$price_data['orderNo'];
        $data_temp['query_order_no']=$price_data['parkingId'];
        $data_temp['price']=round_number($price_data['paymentAmount']/100,2);
        $data_temp['total']=round_number($price_data['orderMoney']/100,2);
        $data_temp['in_time']=$price_data['inTime'];
        $data_temp['car_number']=empty($car_number)?$price_data['carnumber']:$car_number;
        $data_temp['park_sys_type']='D7';
        $data_temp['is_pay_scene']=0;
        $data_temp['errmsg']=serialize($price_data['orderDetails']);
        $db_house_village_park_temp->addOne($data_temp);
        fdump_api(['计算后记录临时表中',$data_temp],'D7park/get_temp_pay_log',1);

        $list = [];
        $list['time'] = $price_data['parkingTimes'];
        $list['park_time'] = $price_data['parkingTime']*60;
        $list['pay_money'] = round_number($price_data['paymentAmount']/100,2);
        $list['order_id'] = $price_data['parkingId'];
        $list['park_name'] = $price_data['parkName'];
        $list['in_time'] = date('Y-m-d H:i:s', $price_data['inTime']);
        $list['pay_time'] = time();
        $list['total_money'] = round_number($price_data['orderMoney']/100,2);
        $list['coupon_money'] =isset($price_data['discountMoney'])?round_number($price_data['discountMoney']/100,2):0;

        fdump_api(['返回',$list],'D7park/get_temp_pay_log',1);
        return $list;

    }



    /**
     * 设备获取车牌后回调接口
     * @author:zhubaodi
     * @date_time: 2021/11/11 13:23
     */
    public function add_park_info($data,$parkTime=0)
    {
        $res=false;
        $car_number = '';
        if (isset($data['AlarmInfoPlate']['result']['PlateResult']['license'])) {
            $car_number = $data['AlarmInfoPlate']['result']['PlateResult']['license'];
        }
        $db_park_passage = new ParkPassage();
        //查询设备
        if (isset($data['AlarmInfoPlate']['serialno'])) {
            $serialno = $data['AlarmInfoPlate']['serialno'];
            if (!empty(cache($serialno))) {
                $passage_info = cache($serialno);
            } else {
                $passage_info = $db_park_passage->getFind(['device_number' => $serialno, 'status' => 1]);
                if($passage_info && !$passage_info->isEmpty()){
                    $passage_info=$passage_info->toArray();
                }
                cache($serialno, $passage_info, 86400);
            }
        } else {
            $serialno = '';
            $passage_info = [];
        }
        if (!empty($passage_info) && !empty($car_number) && $passage_info['park_sys_type'] == 'A11') {
            $service_a11 = new A11Service();
            $res = $service_a11->add_park_info($data, $passage_info, $car_number, $serialno, $parkTime);
            return $res;
        }

        if (!empty(cache($passage_info['village_id']))) {
            $village_info = cache($passage_info['village_id']);
        } else {
            $db_house_village = new HouseVillage();
            $village_info = $db_house_village->getOne($passage_info['village_id'], 'village_name');
            cache($passage_info['village_id'], $village_info, 86400);
        }
        if ($parkTime) {
            fdump_api(['设备获取车牌后回调接口'=>$car_number,'passage_info'=>$passage_info,'village_info'=>$village_info],'D3Park/plateresult'.$parkTime,true);
        }
        if (empty($passage_info)) {
            //TODO:屏显和语音提示错误信息
            //企业微信群提醒
            $webhookurl = $this->webhookurl;
            $data = [
                "msgtype" => "markdown",
                "markdown" => [
                    "content" => "<font color='info'>**停车设备不存在**</font>
                                 >小区名称: <font color='info'>**无**</font>
                                 >车牌号码: <font color='info'>**无**</font>
                                 >设备名称: <font color='info'>**无**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**无**</font> 
                                 >行为原因: <font color='info'>**停车设备不存在**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                ],
            ];
            http_request($webhookurl, 'POST', json_encode($data));

            if ($parkTime) {
                fdump_api(['停车设备不存在'=>$car_number],'D3Park/plateresult'.$parkTime,true);
            }
            //停车设备不存在
            return false;
        }
        if ($passage_info['passage_direction'] == 1) {
            $passage_direction = '入口';
        } else {
            $passage_direction = '出口';
        }
        $park_sys_type = isset($passage_info['park_sys_type']) && $passage_info['park_sys_type'] ? trim($passage_info['park_sys_type']) : 'D3';

        //未识别到车牌
        if (!$car_number || strpos($car_number, '无') !== false) {
            //TODO:屏显和语音提示错误信息

            //企业微信群提醒
            $webhookurl = $this->webhookurl;
            $data = [
                "msgtype" => "markdown",
                "markdown" => [
                    "content" => "<font color='info'>**" . $passage_info['passage_name'] . "**</font>设备未识别到车牌。
                                 >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                                 >车牌号码: <font color='info'>**" . $car_number . "**</font>
                                 >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**" . $passage_direction . "**</font> 
                                 >行为原因: <font color='info'>**未识别到车牌**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                ],
            ];
            http_request($webhookurl, 'POST', json_decode($data));
            //未识别到车牌号
            if ($parkTime) {
                fdump_api(['未识别到车牌'=>$car_number,'data' => $data],'D3Park/plateresult'.$parkTime,true);
            }
            return false;
        }
        $service_config_data = new ConfigDataService();
        $config_data =$service_config_data->getConfigData();
        //黑名单查询
        if (!empty(cache('backList_'.$passage_info['village_id']))) {
            $black_list= cache('backList_'.$passage_info['village_id']);
        }else {
            $db_house_village_park_black = new HouseVillageParkBlack();
            $whereBlackList = [];
            $whereBlackList[] = ['park_sys_type', '=', $park_sys_type];
            $whereBlackList[] = ['village_id', '=', $passage_info['village_id']];
            // $whereBlackList[] = ['car_number', '=', $car_number];
            $black_list = $db_house_village_park_black->getList($whereBlackList);
            cache('backList_'.$passage_info['village_id'],$black_list);
        }
        if (!empty($black_list)) {
            $black_list = $black_list->toArray();
            if ($parkTime) {
                fdump_api(['黑名单'=>$car_number,'black_list' => $black_list],'D3Park/plateresult'.$parkTime,true);
            }
            if (!empty($black_list)) {
                foreach ($black_list as $va) {
                    if ($car_number == $va['car_number']) {
                        //TODO:屏显和语音提示错误信息
                        //企业微信群提醒
                        $webhookurl = $this->webhookurl;
                        $data = [
                            "msgtype" => "markdown",
                            "markdown" => [
                                "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆是黑名单车辆，<font color='info'>**" . $passage_info['passage_name'] . "**</font>设备不允许通行。
                                 >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                                 >车牌号码: <font color='info'>**" . $car_number . "**</font>
                                 >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**" . $passage_direction . "**</font> 
                                 >行为原因: <font color='info'>**黑名单车辆禁止通行**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                            ],
                        ];
                        http_request($webhookurl, 'POST', json_encode($data));
                        //黑名单车辆不允许通行
                        if ($parkTime) {
                            fdump_api(['黑名单车辆不允许通行'=>$car_number,'black_list' => $black_list],'D3Park/plateresult'.$parkTime,true);
                        }
                        return false;
                    }
                }
            }
        }
        $showscreen_data=[];
        $showscreen_data['passage']=$passage_info;
        $showscreen_data['village_id']=$passage_info['village_id'];
        $showscreen_data['car_number']= $car_number;
        $showscreen_data['channel_id']= $serialno;
        $showscreen_data['car_type']= '';
        $showscreen_data['content']= '';
        //车辆入场
        if ($passage_info['passage_direction'] == 1){
            $param = [
                'parkTime' => $parkTime,
                'car_number' => $car_number,
                'serialno' => $serialno,
            ];
            if ($car_number) {
                fdump_api(['车辆入场'=>$car_number,'param'=>$param],'park_temp/log_'.$car_number,1);
            }
            $res =$this->in_park($car_number,$data,$config_data,$village_info,$passage_info,$param);
        }
        //车辆出场
        if ($passage_info['passage_direction'] == 0){
            $param = [
                'parkTime' => $parkTime,
                'car_number' => $car_number,
                'serialno' => $serialno,
            ];
            if ($car_number) {
                fdump_api(['车辆出场'=>$car_number,'param'=>$param],'park_temp/log_'.$car_number,1);
            }
            $res =$this->out_park($car_number,$data,$config_data,$village_info,$passage_info,$param);
        }
        return $res;
    }

    /**
     * 车辆入场
     * @author:zhubaodi
     * @date_time: 2022/3/17 11:52
     */
    public function in_park($car_number,$data,$config_data,$village_info,$passage_info,$param=[]){
        if (isset($param['parkTime'])&&$param['parkTime']) {
            $parkTime = $param['parkTime'];
        } else {
            $parkTime = 0;
        }
        if (isset($param['car_number'])&&$param['car_number']) {
            $car_number = trim($param['car_number']);
        } elseif (isset($data['AlarmInfoPlate']['result']['PlateResult']['license'])) {
            $car_number = $data['AlarmInfoPlate']['result']['PlateResult']['license'];
        }
        if (isset($param['serialno'])&&$param['serialno']) {
            $serialno = trim($param['serialno']);
        } elseif (isset($data['AlarmInfoPlate']['serialno'])) {
            $serialno = $data['AlarmInfoPlate']['serialno'];
        } else {
            $serialno = '';
        }
        $park_sys_type = isset($passage_info['park_sys_type']) && $passage_info['park_sys_type'] ? trim($passage_info['park_sys_type']) : 'D3';
        $db_in_park = new InPark();
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_village_park_free = new HouseVillageParkFree();
        $db_house_village_park_config = new HouseVillageParkConfig();
        $db_house_village_visitor = new HouseVillageVisitor();
        $db_park_plateresult_log = new ParkPlateresultLog();
        $db_house_village_car_access_record=new HouseVillageCarAccessRecord();
        $showscreen_data=[];
        $showscreen_data['passage']=$passage_info;
        $showscreen_data['village_id']=$passage_info['village_id'];
        $showscreen_data['car_number']= $car_number;
        $showscreen_data['channel_id']= $serialno;
        $showscreen_data['car_type']= '';
        $showscreen_data['voice_content']= 1;
        $showscreen_data['content']= '欢迎光临';
        $park_log_data = [];
        $park_log_data['car_number'] = $car_number;
        $park_log_data['channel_id'] = $serialno;
        $park_log_data['park_type'] = 1;
        $park_log_data['add_time'] = time();
        $logId = $db_park_plateresult_log->add($park_log_data);
        if ($parkTime) {
            fdump_api(['添加识别记录' => $car_number, 'park_log_data' => $park_log_data, 'showscreen_data' => $showscreen_data, 'logId' => $logId], 'D3Park/plateresult' . $parkTime, true);
        }
        $rand_num = date('Ymd');// 换成日期存储
        // $up_dir = './upload/park_log/' . $rand_num . '/'.$serialno.'/';
        $path='/upload/park_log/' . $rand_num . '/'.$serialno.'/';
        $up_dir =$_SERVER['DOCUMENT_ROOT'].$path;
        $now_time=time();
        $park_data = [];
        // 记录车辆进入信息
        $car_access_record = [];
        $park_data['car_number'] = $car_number;
        $park_data['in_time'] = $now_time;
        $park_data['order_id'] = uniqid();
        $park_data['in_channel_id'] = $passage_info['id'];
        $park_data['is_paid'] = 0;
        $park_data['park_id'] = $passage_info['village_id'];
        $park_data['park_sys_type'] = $park_sys_type;
        $park_data['park_name'] = $village_info['village_name'];
        if (isset($data['AlarmInfoPlate']['result']['PlateResult']['imageFile']) && !empty($data['AlarmInfoPlate']['result']['PlateResult']['imageFile'])) {
            $park_data['in_image_big'] = base64_to_img($up_dir, date('Ymdhis').'_image_big_'.$park_log_data['car_number'], $data['AlarmInfoPlate']['result']['PlateResult']['imageFile'], 'jpg');
            $car_access_record['accessBigImage'] =  base64_to_img($up_dir, date('Ymdhis').'_image_big_'.$park_log_data['car_number'],$data['AlarmInfoPlate']['result']['PlateResult']['imageFile'], 'jpg');
        }
        if (isset($data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile']) && !empty($data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile'])) {
            $park_data['in_image_small'] = base64_to_img($up_dir, date('Ymdhis').'_image_small_'.$park_log_data['car_number'], $data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile'], 'jpg');
            $car_access_record['accessImage'] = base64_to_img($up_dir, date('Ymdhis').'_image_small_'.$park_log_data['car_number'], $data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile'], 'jpg');
        }
        if ($parkTime) {
            fdump_api(['车辆相关信息' => $car_number, 'park_data' => $park_data], 'D3Park/plateresult' . $parkTime, true);
        }
        $car_access_record['channel_id']=$passage_info['id'];
        $car_access_record['channel_number']=$passage_info['channel_number'];
        $car_access_record['channel_name']=$passage_info['passage_name'];
        //查询免费车
        if (!empty(cache('freeList_'.$passage_info['village_id']))) {
            $free_list= cache('freeList_'.$passage_info['village_id']);
        }else {
            $free_list = $db_house_village_park_free->getList(['park_sys_type' => $park_sys_type, 'village_id' => $passage_info['village_id']]);
            cache('freeList_'.$passage_info['village_id'],$free_list);
        }
        $province = mb_substr($car_number, 0, 1);
        $car_no = mb_substr($car_number, 1);
        if ($parkTime) {
            fdump_api(['查询条件'=>$car_number,'province' => $province,'car_no' => $car_no],'D3Park/plateresult'.$parkTime,true);
        }
        if (!empty(cache($car_number . '_' . $passage_info['village_id']))) {
            $car_info = cache($car_number . '_' . $passage_info['village_id']);
            if (!isset($car_info['end_time']) || $car_info['end_time'] <= $now_time) {
                // 缓存中取不出来车辆信息或者截止时间过期了 避免出现问题 及时查询下最新的信息并缓存
                $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no, 'village_id' => $passage_info['village_id']]);
                cache($car_number . '_' . $passage_info['village_id'], $car_info);
            }
        } else {
            $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no, 'village_id' => $passage_info['village_id']]);
            cache($car_number . '_' . $passage_info['village_id'], $car_info);
        }
        $user_name  = isset($car_info['car_user_name']) && $car_info['car_user_name'] ? $car_info['car_user_name'] : '';
        $user_phone  = isset($car_info['car_user_phone']) && $car_info['car_user_phone'] ? $car_info['car_user_phone'] : '';

        if ($parkTime) {
            fdump_api(['车辆信息'=>$car_number,'car_info' => isset($car_info) ? $car_info : []],'D3Park/plateresult'.$parkTime,true);
        }
        if (!$user_name && !$user_phone && !empty(cache('car_visitor_' . $car_number . '_' . $passage_info['village_id']))) {
            $visitor_info = cache('car_visitor_' . $car_number . '_' . $passage_info['village_id']);
            $user_name  = empty($visitor_info['visitor_name']) ? '' : $visitor_info['visitor_name'];
            $user_phone = empty($visitor_info['visitor_phone']) ? '' : $visitor_info['visitor_phone'];
            $uid        = empty($visitor_info['uid']) ? '' : $visitor_info['uid'];
        } elseif (!$user_name && !$user_phone) {
            $visitor_info = $db_house_village_visitor->get_one(['village_id' => $passage_info['village_id'], 'car_id' => $car_number], 'visitor_name, visitor_phone, uid');
            cache('car_visitor_' . $car_number . '_' . $passage_info['village_id'], $visitor_info);
            $user_name  = empty($visitor_info['visitor_name']) ? '' : $visitor_info['visitor_name'];
            $user_phone = empty($visitor_info['visitor_phone']) ? '' : $visitor_info['visitor_phone'];
            $uid        = empty($visitor_info['uid']) ? '' : $visitor_info['uid'];
        } else {
            $visitor_info = [];
        }
        if ($user_name) {
            $car_access_record['user_name'] = $user_name;
        }
        if ($user_phone) {
            $car_access_record['user_phone'] = $user_phone;
        }
        if (isset($uid) && $uid) {
            $car_access_record['uid'] = $uid;
        }
        $starttime = time() - 30;
        $endtime = time() + 30;
        // 查询in_park
        $park_where = [
            ['car_number', '=', $car_number],
            ['park_id', '=', $passage_info['village_id']],
            ['in_time', '>=', $starttime],
            ['in_time', '<=', $endtime],
            ['del_time', '=', 0],
        ];
        // 查询house_village_car_access_record
        $whereAccessRecord = [
            ['car_number', '=', $car_number],
            ['park_id', '=', $passage_info['village_id']],
            ['accessType', '=',1],
            ['park_sys_type', '=',$park_sys_type],
            ['accessTime', '>=', $starttime],
            ['accessTime', '<=', $endtime],
            ['del_time', '=', 0],
        ];
        if ($free_list && !is_array($free_list)) {
            $free_list = $free_list->toArray();
        }
        if (!empty($free_list)) {
            if ($parkTime) {
                fdump_api(['免费车'=>$car_number,'free_list' => $free_list],'D3Park/plateresult'.$parkTime,true);
            }
            if (!empty($free_list)) {
                foreach ($free_list as $v) {
                    $first_number=substr($car_number,0,strlen($v['first_name']));
                    $last_name=substr($car_number,'-'.strlen($v['last_name']));
                    if ($parkTime) {
                        fdump_api(['免费车'=>$car_number,'first_number' => $first_number,'last_name' => $last_name],'D3Park/plateresult'.$parkTime,true);
                    }
                    $isFreePark = false;
                    if (!empty($v['first_name']) && $first_number==$v['first_name']) {
                        $isFreePark = true;
                    }elseif (!empty($v['last_name']) && $last_name==$v['last_name']) {
                        $isFreePark = true;
                    }elseif ($car_number == $v['free_park']) {
                        $isFreePark = true;
                    }
                    if($isFreePark) {
                        if ($parkTime) {
                            fdump_api(['符合免费车条件'=>$car_number,'first_name' => $v['first_name']],'D3Park/plateresult'.$parkTime,true);
                        }
                        $park_info_car = $db_in_park->getOne1($park_where);
                        if (!$park_info_car || !isset($park_info_car['id'])) {
                            //写入车辆入场表
                            $insert_id = $db_in_park->insertOne($park_data);
                        } else {
                            $insert_id = $park_info_car['id'];
                        }
                        $in_record_info = $db_house_village_car_access_record->getOne($whereAccessRecord);
                        if (!$in_record_info || !isset($in_record_info['record_id'])) {
                            //写入车辆入场表
                            $car_access_record['business_type'] = 0;
                            $car_access_record['business_id'] = $passage_info['village_id'];
                            $car_access_record['car_number'] = $car_number;
                            $car_access_record['accessType'] = 1;
                            $car_access_record['accessTime'] = $now_time;
                            $car_access_record['accessMode'] = 8;
                            $car_access_record['park_sys_type'] = $park_sys_type;
                            $car_access_record['is_out'] = 0;
                            $car_access_record['park_id'] = $passage_info['village_id'];
                            $car_access_record['park_name'] = $village_info['village_name'] ? $village_info['village_name'] : '';
                            $car_access_record['order_id'] = date('YmdHis') . rand(100, 999);
                            $car_access_record['update_time'] = $now_time;
                            if (isset($insert_id) && !empty($insert_id)) {
                                $car_access_record['from_id'] = $insert_id;
                            }
                            if ($car_number) {
                                fdump_api(['记录通行记录'=>$car_number,'car_access_record' => $car_access_record], 'park_temp/log_' . $car_number, 1);
                            }
                            if ($parkTime) {
                                fdump_api(['记录通行记录'=>$car_number,'car_access_record' => $car_access_record],'D3Park/plateresult'.$parkTime,true);
                            }
                            $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                            if ($car_number) {
                                fdump_api(['记录通行记录'=>$car_number,'record_id' => $record_id], 'park_temp/log_' . $car_number, 1);
                            } elseif (!$record_id && $parkTime) {
                                fdump_api(['记录通行记录失败' => $car_number, 'record_id' => $record_id], 'D3Park/errPlateresult' . $parkTime, true);
                            }
                        }
                        //TODO:屏显和语音提示特殊车辆通行
                        $showscreen_data['content']='免费车通行';
                        if ($parkTime) {
                            fdump_api(['记录通行记录'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                        }
                        $this->addParkShowScreenLog($showscreen_data);
                        //特殊车辆通行
                        return true;
                    }
                }
            }
        }
        //查询车辆到期时间
        if (!empty($car_info) && $car_info['end_time'] > $now_time) {
            if ($parkTime) {
                fdump_api(['查询下1分钟内入场时间'=>$car_number,'park_where' => $park_where],'D3Park/plateresult'.$parkTime,true);
            }
            $park_info_car = $db_in_park->getOne1($park_where);
            if ($parkTime) {
                fdump_api(['条件查询结果'=>$car_number,'park_info_car' => $park_info_car],'D3Park/plateresult'.$parkTime,true);
            }
            if (!$park_info_car || !isset($park_info_car['id'])) {
                //写入车辆入场表
                $insert_id = $db_in_park->insertOne($park_data);
            } else {
                $insert_id = $park_info_car['id'];
            }
            //写入车辆入场表
            $in_record_info = $db_house_village_car_access_record->getOne($whereAccessRecord);
            if (!$in_record_info || !isset($in_record_info['record_id'])) {
                //写入车辆入场表
                $car_access_record['business_type'] = 0;
                $car_access_record['business_id'] = $passage_info['village_id'];
                $car_access_record['car_number'] = $car_number;
                $car_access_record['accessType'] = 1;
                $car_access_record['accessTime'] = $now_time;
                $car_access_record['accessMode'] = 5;
                $car_access_record['park_sys_type'] = $park_sys_type;
                $car_access_record['is_out'] = 0;
                $car_access_record['park_id'] = $passage_info['village_id'];
                $car_access_record['park_name'] = $village_info['village_name'] ? $village_info['village_name'] : '';
                $car_access_record['order_id'] = date('YmdHis') . rand(100, 999);
                $car_access_record['update_time'] = $now_time;
                if (isset($insert_id) && !empty($insert_id)) {
                    $car_access_record['from_id'] = $insert_id;
                }
                if ($parkTime) {
                    fdump_api(['入车辆入场表'=>$car_number,'car_access_record' => $car_access_record],'D3Park/plateresult'.$parkTime,true);
                }
                $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                if ($car_number) {
                    fdump_api(['入车辆入场表id'=>$car_number,'record_id' => $record_id], 'park_temp/log_' . $car_number, 1);
                } elseif (!$record_id && $parkTime) {
                    fdump_api(['入车辆入场表' => $car_number, 'record_id' => $record_id], 'D3Park/errPlateresult' . $parkTime, true);
                }
            }
            //TODO:屏显和语音提示特殊车辆通行
            $showscreen_data['car_type']= 'month_type';
            $showscreen_data['end_time']= $car_info['end_time'];
            $showscreen_data['end_time_txt']= date('Y-m-d',$car_info['end_time']);
            if ($parkTime) {
                fdump_api(['屏显和语音提示特殊车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
            }
            $this->addParkShowScreenLog($showscreen_data);
            //特殊车辆通行
            return true;
        } else {
            $park_config=$db_house_village_park_config->getFind(['village_id'=>$passage_info['village_id']]);
            //开启禁止临时车入场配置，禁止临时车入场

            if (!empty($park_config)&&empty($park_config['temp_in_park_type'])){
                $showscreen_data['car_type']= 'temporary_type';
                $showscreen_data['content']= '临时车禁止通行';
                $showscreen_data['voice_content']= 7;
                //TODO:屏显和语音提示错误信息
                $this->addParkShowScreenLog($showscreen_data);
                //企业微信群提醒
                $webhookurl = $this->webhookurl;
                $data = [
                    "msgtype" => "markdown",
                    "markdown" => [
                        "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆未登记,<font color='info'>**" . $passage_info['passage_name'] . "**</font>设备不允许通行，请先登记。
                                 >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                                 >车牌号码: <font color='info'>**" . $car_number . "**</font>
                                 >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**入口**</font> 
                                 >行为原因: <font color='info'>**临时车未登记，禁止入场**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                    ],
                ];
                http_request($webhookurl, 'POST', json_encode($data));
                //停车设备不存在

                if ($parkTime) {
                    fdump_api(['停车设备不存在'=>$car_number,'data' => $data,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                }
                return false;
            }
            //获取配置的免登记时长
            elseif (!empty($park_config)&&!empty($park_config['register_day'])){
                $addTime=strtotime(date('Y-m-d 00:00:00'))-$park_config['register_day']*86400;
            }
            else{
                $addTime=strtotime(date('Y-m-d 00:00:00'))-$this->register_day*86400;
            }
            //查询临时车
            $where_temp = [
                ['car_id', '=', $car_number],
                ['village_id', '=', $passage_info['village_id']],
                ['add_time', '>',$addTime],
                ['add_time', '<', strtotime(date('Y-m-d 23:59:59'))],
            ];
            $temp_info = $db_house_village_visitor->get_one($where_temp);
            if ($parkTime) {
                fdump_api(['查询临时车结果'=>$car_number,'park_config' => $park_config,'temp_info' => $temp_info,'where_temp' => $where_temp],'D3Park/plateresult'.$parkTime,true);
            }
            $showscreen_data['car_type']= 'temporary_type';

            $showscreen_data['content']= '临时车未登记，请扫码入场';
            $showscreen_data['voice_content']= 3;

            //开启临时车登记配置项，查询登记信息
            if (empty($temp_info)&&$park_config['register_type']==1) {
                //TODO:屏显和语音提示错误信息
                $this->addParkShowScreenLog($showscreen_data);
                //企业微信群提醒
                $webhookurl = $this->webhookurl;
                $data = [
                    "msgtype" => "markdown",
                    "markdown" => [
                        "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆未登记,<font color='info'>**" . $passage_info['passage_name'] . "**</font>设备不允许通行，请先登记。

                                 >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                                 >车牌号码: <font color='info'>**" . $car_number . "**</font>
                                 >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**入口**</font> 
                                 >行为原因: <font color='info'>**临时车未登记，禁止入场**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                    ],
                ];
                http_request($webhookurl, 'POST', json_encode($data));
                //停车设备不存在
                if ($parkTime) {
                    fdump_api(['屏显和语音提示错误信息'=>$car_number,'data' => $data],'D3Park/plateresult'.$parkTime,true);
                }
                return false;
            } //获取配置的免登记时长
            elseif (!empty($park_config) && !empty($park_config['register_day'])) {
                $addTime = strtotime(date('Y-m-d 00:00:00')) - $park_config['register_day'] * 86400;
            } else {
                $addTime = strtotime(date('Y-m-d 00:00:00')) - $this->register_day * 86400;
            }
            //查询临时车登记数据
            $where_temp = [
                ['car_id', '=', $car_number],
                ['village_id', '=', $passage_info['village_id']],
                ['add_time', '>', $addTime],
                ['add_time', '<', strtotime(date('Y-m-d 23:59:59'))],
            ];
            $temp_info = $db_house_village_visitor->get_one($where_temp);
            if ($parkTime) {
                fdump_api(['查询临时车结果'=>$car_number,'$temp_info' => $temp_info,'$park_config' => $park_config],'D3Park/plateresult'.$parkTime,true);
            }
            $showscreen_data['car_type'] = 'temporary_type';
            $showscreen_data['content'] = '临时车未登记，禁止入场';
            if (empty($temp_info) && $park_config['register_type'] == 1) {
                //TODO:屏显和语音提示错误信息
                $this->addParkShowScreenLog($showscreen_data);
                //企业微信群提醒
                $webhookurl = $this->webhookurl;
                $data = [
                    "msgtype" => "markdown",
                    "markdown" => [
                        "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆未登记,<font color='info'>**" . $passage_info['passage_name'] . "**</font>设备不允许通行，请先登记。
                             >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                             >车牌号码: <font color='info'>**" . $car_number . "**</font>
                             >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                             >通行状态: <font color='info'>**拒绝通行**</font> 
                             >通行方向: <font color='info'>**入口**</font> 
                             >行为原因: <font color='info'>**临时车未登记，禁止入场**</font> 
                             >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                    ],
                ];
                http_request($webhookurl, 'POST', json_encode($data));
                //停车设备不存在
                if ($parkTime) {
                    fdump_api(['屏显和语音提示错误信息'=>$car_number,'data' => $data],'D3Park/plateresult'.$parkTime,true);
                }
                return false;
            } else {
                $park_info_car = $db_in_park->getOne1($park_where);
                if ($parkTime) {
                    fdump_api(['查询车辆'=>$car_number,'park_info_car' => $park_info_car,'park_data' => $park_data],'D3Park/plateresult'.$parkTime,true);
                }
                if (!$park_info_car || !isset($park_info_car['id'])) {
                    //写入车辆入场表
                    $insert_id = $db_in_park->insertOne($park_data);
                } else {
                    $insert_id = $park_info_car['id'];
                }
                $in_record_info = $db_house_village_car_access_record->getOne($whereAccessRecord);
                if (!$in_record_info || !isset($in_record_info['record_id'])) {
                    //写入车辆入场表
                    $car_access_record['business_type'] = 0;
                    $car_access_record['business_id'] = $passage_info['village_id'];
                    $car_access_record['car_number'] = $car_number;
                    $car_access_record['accessType'] = 1;
                    $car_access_record['accessTime'] = $now_time;
                    $car_access_record['accessMode'] = 9;
                    $car_access_record['park_sys_type'] = $park_sys_type;
                    if (!isset($car_access_record['user_name']) || !$car_access_record['user_name']) {
                        $car_access_record['user_name'] = empty($temp_info['visitor_name']) ? '' : $temp_info['visitor_name'];
                    }
                    if (!isset($car_access_record['user_phone']) || !$car_access_record['user_phone']) {
                        $car_access_record['user_phone'] = empty($temp_info['visitor_phone']) ? '' : $temp_info['visitor_phone'];
                    }
                    $car_access_record['is_out'] = 0;
                    $car_access_record['park_id'] = $passage_info['village_id'];
                    $car_access_record['park_name'] = $village_info['village_name'] ? $village_info['village_name'] : '';
                    $car_access_record['order_id'] = date('YmdHis') . rand(100, 999);
                    $car_access_record['update_time'] = $now_time;
                    if (isset($insert_id) && !empty($insert_id)) {
                        $car_access_record['from_id'] = $insert_id;
                    }
                    if ($car_number) {
                        fdump_api(['写入车辆'=>$car_number,'car_access_record' => $car_access_record,'in_park_id' => $insert_id], 'park_temp/log_' . $car_number, 1);
                    }
                    $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                    if ($car_number) {
                        fdump_api(['写入车辆结果'=>$car_number, 'record_id' => $record_id], 'park_temp/log_' . $car_number, 1);
                    } elseif (! $record_id && $parkTime) {
                        fdump_api(['写入车辆' => $car_number, 'car_access_record' => $car_access_record, 'record_id' => $record_id], 'D3Park/errPlateresult' . $parkTime, true);
                    }
                }
                //TODO:屏显和语音提示特殊车辆通行
                $showscreen_data['content'] = '欢迎光临';
                $showscreen_data['voice_content'] = 1;
                if ($parkTime) {
                    fdump_api(['写入车辆'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                }
                $this->addParkShowScreenLog($showscreen_data);
                //特殊车辆通行
                return true;
            }
        }
        return false;
    }


    /**
     * 车辆出场
     * @author:zhubaodi
     * @date_time: 2022/3/17 11:52
     */
    public function out_park($car_number,$data,$config_data,$village_info,$passage_info,$param=[]){
        //  fdump_api([$car_number,$data,$config_data,$village_info,$passage_info,$param],'out_park_0906',1);
        if (isset($param['parkTime'])&&$param['parkTime']) {
            $parkTime = $param['parkTime'];
        } else {
            $parkTime = 0;
        }
        if (isset($param['car_number'])&&$param['car_number']) {
            $car_number = trim($param['car_number']);
        } elseif (isset($data['AlarmInfoPlate']['result']['PlateResult']['license'])) {
            $car_number = $data['AlarmInfoPlate']['result']['PlateResult']['license'];
        }
        if (isset($param['serialno'])&&$param['serialno']) {
            $serialno = trim($param['serialno']);
        } elseif (isset($data['AlarmInfoPlate']['serialno'])) {
            $serialno = $data['AlarmInfoPlate']['serialno'];
        } else {
            $serialno = '';
        }
        $db_in_park = new InPark();
        $db_out_park = new OutPark();
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_village_park_free = new HouseVillageParkFree();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_park_plateresult_log = new ParkPlateresultLog();
        $db_house_village_car_access_record=new HouseVillageCarAccessRecord();
        $db_house_village_park_config = new HouseVillageParkConfig();
        $db_park_passage = new ParkPassage();
        $db_house_village_visitor = new HouseVillageVisitor();
        if (!empty(cache('config_'.$passage_info['village_id']))) {
            $park_config = cache('config_'.$passage_info['village_id']);
        }else {
            $park_config = $db_house_village_park_config->getFind(['village_id' => $passage_info['village_id']]);
            cache('config_'.$passage_info['village_id'],$park_config);
        }
        $park_sys_type = isset($passage_info['park_sys_type']) && $passage_info['park_sys_type'] ? trim($passage_info['park_sys_type']) : 'D3';
        $showscreen_data=[];
        $showscreen_data['passage']=$passage_info;
        $showscreen_data['village_id']=$passage_info['village_id'];
        $showscreen_data['car_number']= $data['AlarmInfoPlate']['result']['PlateResult']['license'];
        $showscreen_data['channel_id']= $data['AlarmInfoPlate']['serialno'];
        $showscreen_data['car_type']= '';
        $showscreen_data['voice_content']= 2;
        $showscreen_data['content']= '一路平安';
        $now_time=time();
        $park_log_data = [];
        $park_log_data['car_number'] = $data['AlarmInfoPlate']['result']['PlateResult']['license'];
        $park_log_data['channel_id'] = $data['AlarmInfoPlate']['serialno'];
        $park_log_data['park_type'] = 2;
        $park_log_data['add_time'] = time();
        $logId = $db_park_plateresult_log->add($park_log_data);
        $whereInRecord = ['car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0, 'del_time' => 0];
        $in_park_info = $db_in_park->getOne1($whereInRecord);

        if ($parkTime) {
            fdump_api(['添加识别记录' => $car_number, 'park_log_data' => $park_log_data, 'showscreen_data' => $showscreen_data, 'in_park_info' => $in_park_info], 'D3Park/plateresult' . $parkTime, true);
        }
        $rand_num = date('Ymd');// 换成日期存储
        //   $up_dir = './upload/park_log/' . $rand_num . '/'.$data['AlarmInfoPlate']['serialno'].'/';
        $path='/upload/park_log/' . $rand_num . '/'.$serialno.'/';
        $up_dir =$_SERVER['DOCUMENT_ROOT'].$path;
        $park_data = [];
        $park_data['out_time'] = $now_time;
        $park_data['is_out'] = 1;
        $park_data['is_paid'] = 1;
        // 记录车辆进入信息
        $car_access_record = [];
        if (isset($data['AlarmInfoPlate']['result']['PlateResult']['imageFile']) && !empty($data['AlarmInfoPlate']['result']['PlateResult']['imageFile'])) {
            $park_data['out_image_big'] = base64_to_img($up_dir, date('Ymdhis').'_image_big_'.$park_log_data['car_number'], $data['AlarmInfoPlate']['result']['PlateResult']['imageFile'], 'jpg');
            $car_access_record['accessBigImage'] =  base64_to_img($up_dir, date('Ymdhis').'_image_big_'.$park_log_data['car_number'],$data['AlarmInfoPlate']['result']['PlateResult']['imageFile'], 'jpg');
        }
        if (isset($data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile']) && !empty($data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile'])) {
            $park_data['out_image_small'] = base64_to_img($up_dir, date('Ymdhis').'_image_small_'.$park_log_data['car_number'], $data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile'], 'jpg');
            $car_access_record['accessImage'] = base64_to_img($up_dir, date('Ymdhis').'_image_small_'.$park_log_data['car_number'], $data['AlarmInfoPlate']['result']['PlateResult']['imageFragmentFile'], 'jpg');
        }
        $car_access_record['channel_id']=$passage_info['id'];
        $car_access_record['channel_number']=$passage_info['channel_number'];
        $car_access_record['channel_name']=$passage_info['passage_name'];
        $out_data = [];
        $out_data['car_number'] = $car_number;
        $out_park_info=[];
        $out_time=$now_time;
        if (!empty($in_park_info)) {
            if ($in_park_info['in_time']>($now_time-60)){
                // 如果进入记录在一分钟内  避免由于识别到车辆尾部导致的意外开闸 直接反馈不允许开闸
                return false;
            }
            $out_data['in_time'] = $in_park_info['in_time'];
            $out_data['order_id'] = isset($in_park_info['order_id']) && $in_park_info['order_id'] ? $in_park_info['order_id'] : '';
        }else{
            $whereInOut = ['car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 1, 'del_time' => 0];
            $out_park_info = $db_in_park->getOne1($whereInOut);
            $out_time=$now_time-$park_config['out_park_time']*60;
        }
        $out_data['out_time'] = $now_time;
        $out_data['park_id'] = $passage_info['village_id'];
        $out_data['park_sys_type'] = $park_sys_type;

        //查询免费车
        if (!empty(cache('freeList_'.$passage_info['village_id']))) {
            $free_list= cache('freeList_'.$passage_info['village_id']);
        }else {
            $free_list = $db_house_village_park_free->getList(['park_sys_type' => $park_sys_type, 'village_id' => $passage_info['village_id']]);
            cache('freeList_'.$passage_info['village_id'],$free_list);
        }
        $province = mb_substr($car_number, 0, 1);
        $car_no = mb_substr($car_number, 1);
        if (!empty(cache($car_number.'_'.$passage_info['village_id']))) {
            $car_info = cache($car_number.'_'.$passage_info['village_id']);
            if (!isset($car_info['end_time']) || $car_info['end_time'] <= $now_time) {
                // 缓存中取不出来车辆信息或者截止时间过期了 避免出现问题 及时查询下最新的信息并缓存
                $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no, 'village_id' => $passage_info['village_id']]);
                cache($car_number.'_'.$passage_info['village_id'],$car_info);
            }
        }else {
            $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no, 'village_id' => $passage_info['village_id']]);
            cache($car_number.'_'.$passage_info['village_id'],$car_info);
        }
        $user_name  = empty($car_info['car_user_name']) ? '' : $car_info['car_user_name'];
        $user_phone = empty($car_info['car_user_phone'])? '' : $car_info['car_user_phone'];
        if ($parkTime) {
            fdump_api(['查询车辆到期时间'=>$car_number,'province' => $province,'car_no' => $car_no,'car_info' => $car_info,'in_park_info' => $in_park_info],'D3Park/plateresult'.$parkTime,true);
        }
        if (!$user_name && !$user_phone && !empty(cache('car_visitor_' . $car_number . '_' . $passage_info['village_id']))) {
            $visitor_info = cache('car_visitor_' . $car_number . '_' . $passage_info['village_id']);
            $user_name  = empty($visitor_info['visitor_name']) ? '' : $visitor_info['visitor_name'];
            $user_phone = empty($visitor_info['visitor_phone']) ? '' : $visitor_info['visitor_phone'];
            $uid        = empty($visitor_info['uid']) ? '' : $visitor_info['uid'];
        } elseif (!$user_name && !$user_phone) {
            $visitor_info = $db_house_village_visitor->get_one(['village_id' => $passage_info['village_id'], 'car_id' => $car_number], 'visitor_name, visitor_phone, uid');
            cache('car_visitor_' . $car_number . '_' . $passage_info['village_id'], $visitor_info);
            $user_name  = empty($visitor_info['visitor_name']) ? '' : $visitor_info['visitor_name'];
            $user_phone = empty($visitor_info['visitor_phone']) ? '' : $visitor_info['visitor_phone'];
            $uid        = empty($visitor_info['uid']) ? '' : $visitor_info['uid'];
        } else {
            $visitor_info = [];
        }
        if ($user_name) {
            $car_access_record['user_name'] = $user_name;
        }
        if ($user_phone) {
            $car_access_record['user_phone'] = $user_phone;
        }
        if (isset($uid) && $uid) {
            $car_access_record['uid'] = $uid;
        }
        $starttime = time() - 30;
        $endtime = time() + 30;
        $park_out_where = [
            ['car_number', '=', $car_number],
            ['park_id', '=', $passage_info['village_id']],
            ['out_time', '>=', $starttime],
            ['out_time', '<=', $endtime],
            ['del_time', '=', 0],
        ];
        $access_record_where = [
            ['car_number', '=', $car_number],
            ['park_id', '=', $passage_info['village_id']],
            ['accessType', '=',2],
            ['accessTime', '>=', $starttime],
            ['accessTime', '<=', $endtime],
            ['del_time', '=', 0],
        ];
        if (!empty($free_list)) {
            $free_list = $free_list->toArray();
            if ($parkTime) {
                fdump_api(['免费车信息'=>$car_number,'free_list' => $free_list],'D3Park/plateresult'.$parkTime,true);
            }
            if (!empty($free_list)) {
                foreach ($free_list as $v) {
                    $first_number = substr($car_number, 0, strlen($v['first_name']));
                    $last_name = substr($car_number, '-' . strlen($v['last_name']));
                    $isFreePark = false;
                    if (!empty($v['first_name']) && $first_number==$v['first_name']) {
                        $isFreePark = true;
                    }elseif (!empty($v['last_name']) && $last_name==$v['last_name']) {
                        $isFreePark = true;
                    }elseif ($car_number == $v['free_park']) {
                        $isFreePark = true;
                    }
                    if ($isFreePark) {
                        if ($parkTime) {
                            fdump_api(['免费车信息条件' => $car_number, 'first_number' => $first_number, 'last_name' => $last_name, 'first_name' => $v['first_name'], 'last_name_v' => $v['last_name'], 'free_park' => $v['free_park']], 'D3Park/plateresult' . $parkTime, true);
                        }
                        $db_in_park->saveOne(['car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0], $park_data);
                        $out_data['total'] = 0;
                        $out_data['pay_type'] = 'free';
                        $out_park_info_car = $db_out_park->getOne($park_out_where);
                        if ($parkTime) {
                            fdump_api(['出场车辆信息'=>$car_number,'park_out_where' => $park_out_where,'park_info_car' => $out_park_info_car && !is_array($out_park_info_car) ? $out_park_info_car->toArray() : $out_park_info_car,'out_data' => $out_data],'D3Park/plateresult'.$parkTime,true);
                        }
                        //写入车辆出场表
                        if (! $out_park_info_car || ! isset($out_park_info_car['id'])) {
                            $out_data['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                            $insert_id = $db_out_park->insertOne($out_data);
                        } else {
                            $insert_id = $out_park_info_car['id'];
                        }
                        $access_record_info = $db_house_village_car_access_record->getOne($access_record_where);
                        //写入车辆出场表
                        if (!$access_record_info || !isset($access_record_info['record_id'])) {
                            $access_record_where_near = [
                                ['car_number', '=', $car_number],
                                ['park_id', '=', $passage_info['village_id']],
                                ['accessType', '=',1],
                                ['is_out', '=', 0],
                                ['del_time', '=', 0],
                                ['accessTime', '<', $now_time],
                            ];
                            // 通行时间小于出场时间的最近的一条入场时间的记录
                            $park_info_car111 = $db_house_village_car_access_record->getOne($access_record_where_near);
                            if ($park_info_car111 && isset($park_info_car111['record_id'])) {
                                $park_where_save = $access_record_where_near;
                                $park_where_save[] = ['exception_type', '=', 0];
                                $db_house_village_car_access_record->saveOne($park_where_save,['is_out'=>1]);
                            } else {
                                $park_info_car111['accessTime'] = 0;
                            }
                            $car_access_record['business_type'] = 0;
                            $car_access_record['business_id'] = $passage_info['village_id'];
                            $car_access_record['car_number'] = $car_number;
                            $car_access_record['accessType'] = 2;
                            $car_access_record['accessTime'] = $now_time;
                            $car_access_record['park_time'] = $now_time - $park_info_car111['accessTime'];
                            $car_access_record['accessMode'] = '3';
                            $car_access_record['park_sys_type'] = $park_sys_type;
                            $car_access_record['is_out'] = 1;
                            $car_access_record['park_id'] = $passage_info['village_id'];
                            $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                            $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                            $car_access_record['total'] = 0;
                            // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                            // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                            //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                            $car_access_record['pay_type'] = $this->pay_type[5];
                            $car_access_record['update_time'] = $now_time;
                            $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                            if (isset($insert_id)) {
                                $car_access_record['from_id'] = $insert_id;
                            }
                            $car_access_record['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                            $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                            if ($car_number) {
                                fdump_api(['记录出场'=>$car_number,'car_access_record' => $car_access_record,'record_id' => $record_id], 'park_temp/log_' . $car_number, 1);
                            } elseif (! $record_id && $parkTime) {
                                fdump_api(['记录出场'=>$car_number,'car_access_record' => $car_access_record,'record_id' => $record_id],'D3Park/errPlateresult'.$parkTime,true);
                            }
                        }
                        //TODO:屏显和语音提示特殊车辆通行
                        $showscreen_data['content']='免费车通行';
                        if ($parkTime) {
                            fdump_api(['显屏'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                        }
                        $this->addParkShowScreenLog($showscreen_data);
                        //特殊车辆通行
                        return true;
                    }
                }
            }
        }
        //查询车辆到期时间
        if ($parkTime) {
            fdump_api([$car_info,$in_park_info,$out_park_info],'out_park_0906',1);
        }
        if (!empty($car_info) && $car_info['end_time'] > time()) {
            if (empty($in_park_info)&&!empty($out_park_info)&&$out_park_info['out_time']>$out_time){
                // 重复离场-判断下是否需要新增记录
                //TODO:屏显和语音提示车辆通行
                $showscreen_data['car_type']     = 'month_type';
                $showscreen_data['end_time']     = $car_info['end_time'];
                $showscreen_data['end_time_txt'] = date('Y-m-d',$car_info['end_time']);
                if ($parkTime) {
                    fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                }
                $this->addParkShowScreenLog($showscreen_data);
                //车辆通行
                return true;
            }
            if ($in_park_info&&isset($in_park_info['id'])&&$in_park_info['id']) {
                $db_in_park->saveOne(['id'=>$in_park_info['id'],'car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0], $park_data);
            }
            $out_data['total'] = 0;
            $out_data['pay_type'] = 'monthuser';
            //  $out_data['is_paid'] = 1;
            $out_park_info_car = $db_out_park->getOne($park_out_where);
            //写入车辆出场表
            if (! $out_park_info_car || ! isset($out_park_info_car['id'])) {
                $out_data['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                $insert_id = $db_out_park->insertOne($out_data);
            } else {
                $insert_id = $out_park_info_car['id'];
            }

            $access_record_info = $db_house_village_car_access_record->getOne($access_record_where);
            if ($parkTime) {
                fdump_api(['查询是否有对应出场车辆'=>$car_number,'access_record_where' => $access_record_where,'out_park_info_car' => $out_park_info_car],'D3Park/plateresult'.$parkTime,true);
            }
            //写入车辆出场表
            if (!$access_record_info || !isset($access_record_info['record_id'])) {
                $access_record_where_near = [
                    ['car_number', '=', $car_number],
                    ['park_id', '=', $passage_info['village_id']],
                    ['accessType', '=',1],
                    ['is_out', '=', 0],
                    ['accessTime', '<', $now_time],
                ];// 通行时间小于出场时间的最近的一条入场时间的记录
                $park_info_car111 = $db_house_village_car_access_record->getOne($access_record_where_near);
                if ($park_info_car111 && isset($park_info_car111['record_id'])){
                    $park_where_save = $access_record_where_near;
                    $park_where_save[] = ['exception_type', '=', 0];
                    $db_house_village_car_access_record->saveOne($park_where_save,['is_out'=>1]);
                }else{
                    $park_info_car111['accessTime']=0;
                    $park_info_car111['order_id']='';
                }
                $car_access_record['business_type'] = 0;
                $car_access_record['business_id'] = $passage_info['village_id'];
                $car_access_record['car_number'] = $car_number;
                $car_access_record['accessType'] = 2;
                $car_access_record['accessTime'] = $now_time;
                $car_access_record['park_time'] = $now_time-$park_info_car111['accessTime'];
                $car_access_record['accessMode'] = 5;
                $car_access_record['park_sys_type'] = $park_sys_type;
                $car_access_record['is_out'] = 1;
                $car_access_record['park_id'] = $passage_info['village_id'];
                $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                $car_access_record['order_id'] = $park_info_car111['order_id'];
                $car_access_record['total'] = 0;
                // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                $car_access_record['pay_type'] = $this->pay_type[4];
                $car_access_record['update_time'] = $now_time;
                $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                if (isset($insert_id)) {
                    $car_access_record['from_id'] = $insert_id;
                }
                $car_access_record['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                if (! $record_id && $parkTime) {
                    fdump_api(['记录入场记录错误'=>$car_number, 'car_access_record' => $car_access_record,'record_id' => $record_id],'D3Park/errPlateresult'.$parkTime,true);
                }
            }

            //TODO:屏显和语音提示车辆通行
            $showscreen_data['voice_content']= 4;
            $showscreen_data['content']= '';
            $showscreen_data['car_type']= 'month_type';
            $showscreen_data['end_time']= $car_info['end_time'];
            $showscreen_data['end_time_txt']= date('Y-m-d',$car_info['end_time']);
            if ($parkTime) {
                fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
            }
            $this->addParkShowScreenLog($showscreen_data);
            //车辆通行
            return true;
        } else {
            if (empty($in_park_info)&&!empty($out_park_info)&&$out_park_info['out_time']>$out_time){
                // 无入场记录-重复离场
                //车辆通行
                $showscreen_data['car_type']= 'temporary_type';
                $showscreen_data['duration_txt']= 0;
                $showscreen_data['duration']= 0;
                $showscreen_data['price']= 0;
                if ($parkTime) {
                    fdump_api(['车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                }
                $this->addParkShowScreenLog($showscreen_data);
                return true;
            }
            elseif(empty($in_park_info)){
                //   fdump_api([$car_number,$village_info,$passage_info],'out_park_0906',1);
                //无入场纪录，根据车牌推送信息计算停车费用
                $in_park_plateresult_info = $db_park_plateresult_log->get_one(['car_number'=>$car_number,'park_type'=>1]);
                if ($parkTime) {
                    fdump_api(['无入场纪录，根据车牌推送信息计算停车费用'=>$car_number,'in_park_plateresult_info' => $in_park_plateresult_info],'D3Park/plateresult'.$parkTime,true);
                }
                if (empty($in_park_plateresult_info)){
                    // 无识别记录 以当前时间为准加一条入场记录
                    $in_passage_conut = $db_park_passage->getCount(['village_id'=>$passage_info['village_id'], 'status' => 1,'passage_direction'=>1]);
                    $in_car_access_record=[];
                    $in_park_data = [];
                    $in_park_data['out_time'] = $now_time;
                    $in_park_data['is_out'] = 1;
                    $in_park_data['is_paid'] = 1;
                    $in_park_data['car_number'] = $car_number;
                    $in_park_data['in_time'] = time();
                    $in_park_data['order_id'] = uniqid();
                    if ($in_passage_conut==1){
                        $in_passage_info = $db_park_passage->getFind(['village_id'=>$passage_info['village_id'], 'status' => 1,'passage_direction'=>1]);
                        $in_park_data['in_channel_id'] = $in_passage_info['id'];
                        $in_car_access_record['channel_id']=$in_passage_info['id'];
                        $in_car_access_record['channel_number']=$in_passage_info['channel_number'];
                        $in_car_access_record['channel_name']=$in_passage_info['passage_name'];
                    }
                    $in_park_data['park_id'] = $passage_info['village_id'];
                    $in_park_data['park_sys_type'] = $park_sys_type;
                    $in_park_data['park_name'] = $village_info['village_name'];
                    $insert_id = $db_in_park->insertOne($in_park_data);

                    $in_car_access_record['business_type'] = 0;
                    $in_car_access_record['business_id'] = $passage_info['village_id'];
                    $in_car_access_record['car_number'] = $car_number;
                    $in_car_access_record['accessType'] = 1;
                    $in_car_access_record['accessTime'] = $now_time;
                    $in_car_access_record['accessMode'] = 9;
                    $in_car_access_record['park_sys_type'] = $park_sys_type;
                    $in_car_access_record['exception_type']=1;
                    $in_car_access_record['is_out'] = 0;
                    $in_car_access_record['park_id'] = $passage_info['village_id'];
                    $in_car_access_record['park_name'] = $village_info['village_name'] ? $village_info['village_name'] : '';
                    $in_car_access_record['order_id'] = date('YmdHis') . rand(100, 999);
                    $in_car_access_record['update_time'] = $now_time;
                    if (isset($insert_id) && !empty($insert_id)) {
                        $in_car_access_record['from_id'] = $insert_id;
                    }
                    if (isset($car_access_record['user_name'])) {
                        $in_car_access_record['user_name'] = $car_access_record['user_name'];
                    }
                    if (isset($car_access_record['user_phone'])) {
                        $in_car_access_record['user_phone'] = $car_access_record['user_phone'];
                    }
                    $db_house_village_car_access_record->addOne($in_car_access_record);
                    $out_data['total'] = 0;
                    $out_data['pay_type'] = 'scancode';
                    $out_data['in_time'] = $in_park_data['in_time'];
                    $out_data['order_id'] = isset($in_park_data['order_id']) && $in_park_data['order_id'] ? $in_park_data['order_id'] : '';

                    $out_park_info_car = $db_out_park->getOne($park_out_where);
                    //写入车辆出场表
                    if (! $out_park_info_car || ! isset($out_park_info_car['id'])) {
                        $out_data['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                        $insert_id = $db_out_park->insertOne($out_data);
                    } else {
                        $insert_id = $out_park_info_car['id'];
                    }

                    $access_record_info = $db_house_village_car_access_record->getOne($access_record_where);
                    //写入车辆出场表
                    if (!$access_record_info || !isset($access_record_info['record_id'])) {
                        $access_record_where_near = [
                            ['car_number', '=', $car_number],
                            ['park_id', '=', $passage_info['village_id']],
                            ['accessType', '=',1],
                            ['is_out', '=', 0],
                            ['del_time', '=', 0],
                            ['accessTime', '<=', $now_time],
                        ];
                        $park_info_car111 = $db_house_village_car_access_record->getOne($access_record_where_near);
                        if ($park_info_car111 && isset($park_info_car111['record_id'])){
                            $park_where_save = $access_record_where_near;
                            $park_where_save[] = ['exception_type', '=', 0];
                            $db_house_village_car_access_record->saveOne($park_where_save,['is_out'=>1]);
                        }else{
                            $park_info_car111['accessTime']=0;
                            $park_info_car111['order_id']='';
                        }

                        $car_access_record['business_type'] = 0;
                        $car_access_record['business_id'] = $passage_info['village_id'];
                        $car_access_record['car_number'] = $car_number;
                        $car_access_record['accessType'] = 2;
                        $car_access_record['accessTime'] = $now_time;
                        $car_access_record['accessMode'] = 4;
                        $car_access_record['park_sys_type'] = $park_sys_type;
                        $car_access_record['is_out'] = 1;
                        $car_access_record['park_id'] = $passage_info['village_id'];
                        $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                        $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                        $car_access_record['total'] = 0;
                        // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                        // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                        //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                        $car_access_record['pay_type'] = $this->pay_type[6];
                        $car_access_record['update_time'] = $now_time;
                        $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                        if (isset($insert_id)) {
                            $car_access_record['from_id'] = $insert_id;
                        }
                        $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                        if (! $record_id && $parkTime) {
                            fdump_api(['车辆通行记录'=>$car_number, 'car_access_record' => $car_access_record,'record_id' => $record_id],'D3Park/errPlateresult'.$parkTime,true);
                        }
                    }
                    //TODO:屏显和语音提示车辆通行
                    //车辆通行
                    $showscreen_data['car_type']= 'temporary_type';
                    $showscreen_data['duration_txt']= '';
                    $showscreen_data['duration']= 0;
                    $showscreen_data['price']= 0;
                    if ($parkTime) {
                        fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                    }
                    $this->addParkShowScreenLog($showscreen_data);
                    return true;
                }
                else{
                    // 取车辆识别入场通道信息
                    $in_passage_info = $db_park_passage->getFind(['village_id'=>$passage_info['village_id'], 'device_number' => $in_park_plateresult_info['channel_id']]);
                    if(empty($in_passage_info)){
                        $in_passage_conut = $db_park_passage->getCount(['village_id'=>$passage_info['village_id'], 'status' => 1,'passage_direction'=>1]);
                        $in_car_access_record=[];
                        $in_park_data = [];
                        $in_park_data['out_time'] = $now_time;
                        $in_park_data['is_out'] = 1;
                        $in_park_data['is_paid'] = 1;
                        $in_park_data['car_number'] = $car_number;
                        $in_park_data['in_time'] = time();
                        $in_park_data['order_id'] = uniqid();
                        if ($in_passage_conut==1){
                            $in_passage_info = $db_park_passage->getFind(['village_id'=>$passage_info['village_id'], 'status' => 1,'passage_direction'=>1]);
                            $in_park_data['in_channel_id'] = $in_passage_info['id'];
                            $in_car_access_record['channel_id']=$in_passage_info['id'];
                            $in_car_access_record['channel_number']=$in_passage_info['channel_number'];
                            $in_car_access_record['channel_name']=$in_passage_info['passage_name'];
                        }
                        $in_park_data['park_id'] = $passage_info['village_id'];
                        $in_park_data['park_sys_type'] = $park_sys_type;
                        $in_park_data['park_name'] = $village_info['village_name'];
                        $insert_id = $db_in_park->insertOne($in_park_data);

                        $in_car_access_record['business_type'] = 0;
                        $in_car_access_record['business_id'] = $passage_info['village_id'];
                        $in_car_access_record['car_number'] = $car_number;
                        $in_car_access_record['accessType'] = 1;
                        $in_car_access_record['accessTime'] = $now_time;
                        $in_car_access_record['accessMode'] = 9;
                        $in_car_access_record['park_sys_type'] = 'D3';
                        $in_car_access_record['exception_type']=1;
                        $in_car_access_record['is_out'] = 0;
                        $in_car_access_record['park_id'] = $passage_info['village_id'];
                        $in_car_access_record['park_name'] = $village_info['village_name'] ? $village_info['village_name'] : '';
                        $in_car_access_record['order_id'] = date('YmdHis') . rand(100, 999);
                        $in_car_access_record['update_time'] = $now_time;
                        if (isset($insert_id) && !empty($insert_id)) {
                            $in_car_access_record['from_id'] = $insert_id;
                        }
                        if (isset($car_access_record['user_name'])) {
                            $in_car_access_record['user_name'] = $car_access_record['user_name'];
                        }
                        if (isset($car_access_record['user_phone'])) {
                            $in_car_access_record['user_phone'] = $car_access_record['user_phone'];
                        }
                        $db_house_village_car_access_record->addOne($in_car_access_record);
                        $out_data['total'] = 0;
                        $out_data['pay_type'] = 'scancode';
                        $out_data['in_time'] = $in_park_data['in_time'];
                        $out_data['order_id'] = isset($in_park_data['order_id']) && $in_park_data['order_id'] ? $in_park_data['order_id'] : '';

                        $out_park_info_car = $db_out_park->getOne($park_out_where);
                        //写入车辆出场表
                        if (! $out_park_info_car || ! isset($out_park_info_car['id'])) {
                            $out_data['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                            $insert_id = $db_out_park->insertOne($out_data);
                        } else {
                            $insert_id = $out_park_info_car['id'];
                        }

                        $access_record_info = $db_house_village_car_access_record->getOne($access_record_where);
                        //写入车辆出场表
                        if (!$access_record_info || !isset($access_record_info['record_id'])) {
                            $access_record_where_near = [
                                ['car_number', '=', $car_number],
                                ['park_id', '=', $passage_info['village_id']],
                                ['accessType', '=',1],
                                ['is_out', '=', 0],
                                ['del_time', '=', 0],
                                ['accessTime', '<=', $now_time],
                            ];
                            $park_info_car111 = $db_house_village_car_access_record->getOne($access_record_where_near);
                            if ($park_info_car111 && isset($park_info_car111['record_id'])){
                                $park_where_save = $access_record_where_near;
                                $park_where_save[] = ['exception_type', '=', 0];
                                $db_house_village_car_access_record->saveOne($park_where_save,['is_out'=>1]);
                            }else{
                                $park_info_car111['accessTime']=0;
                                $park_info_car111['order_id']='';
                            }

                            $car_access_record['business_type'] = 0;
                            $car_access_record['business_id'] = $passage_info['village_id'];
                            $car_access_record['car_number'] = $car_number;
                            $car_access_record['accessType'] = 2;
                            $car_access_record['accessTime'] = $now_time;
                            $car_access_record['accessMode'] = 4;
                            $car_access_record['park_sys_type'] = $park_sys_type;
                            $car_access_record['is_out'] = 1;
                            $car_access_record['park_id'] = $passage_info['village_id'];
                            $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                            $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                            $car_access_record['total'] = 0;
                            // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                            // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                            //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                            $car_access_record['pay_type'] = $this->pay_type[6];
                            $car_access_record['update_time'] = $now_time;
                            $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                            if (isset($insert_id)) {
                                $car_access_record['from_id'] = $insert_id;
                            }
                            $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                            if (! $record_id && $parkTime) {
                                fdump_api(['车辆通行记录错误'=>$car_number, 'car_access_record' => $car_access_record,'record_id' => $record_id],'D3Park/errPlateresult'.$parkTime,true);
                            }
                        }
                        //TODO:屏显和语音提示车辆通行
                        //车辆通行
                        $showscreen_data['car_type']= 'temporary_type';
                        $showscreen_data['duration_txt']= '';
                        $showscreen_data['duration']= 0;
                        $showscreen_data['price']= 0;
                        if ($car_number) {
                            fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data], 'park_temp/log_' . $car_number, 1);
                        }
                        if ($parkTime) {
                            fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                        }
                        $this->addParkShowScreenLog($showscreen_data);
                        return true;
                    }
                    else{
                        $whereInOut = ['car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 1, 'del_time' => 0];
                        $out_park_info = $db_in_park->getOne1($whereInOut);
                        if (empty($out_park_info)||$out_park_info['out_time']<$in_park_plateresult_info['add_time']){
                            $in_car_access_record=[];
                            $in_park_data = [];
                            $in_park_data['is_paid'] = 0;
                            $in_park_data['car_number'] = $car_number;
                            $in_park_data['in_time'] = $in_park_plateresult_info['add_time'];
                            $in_park_data['order_id'] = uniqid();
                            $in_passage_info = $db_park_passage->getFind(['village_id'=>$passage_info['village_id'], 'device_number' => $in_park_plateresult_info['channel_id']]);
                            $in_park_data['in_channel_id'] = $in_passage_info['id'];
                            $in_car_access_record['channel_id']=$in_passage_info['id'];
                            $in_car_access_record['channel_number']=$in_passage_info['channel_number'];
                            $in_car_access_record['channel_name']=$in_passage_info['passage_name'];

                            $in_park_data['park_id'] = $passage_info['village_id'];
                            $in_park_data['park_sys_type'] = $park_sys_type;
                            $in_park_data['park_name'] = $village_info['village_name'];
                            $insert_id = $db_in_park->insertOne($in_park_data);

                            $in_car_access_record['business_type'] = 0;
                            $in_car_access_record['business_id'] = $passage_info['village_id'];
                            $in_car_access_record['car_number'] = $car_number;
                            $in_car_access_record['accessType'] = 1;
                            $in_car_access_record['accessTime'] = $in_park_plateresult_info['add_time'];
                            $in_car_access_record['accessMode'] = 9;
                            $in_car_access_record['park_sys_type'] = $park_sys_type;
                            $in_car_access_record['is_out'] = 0;
                            $in_car_access_record['park_id'] = $passage_info['village_id'];
                            $in_car_access_record['park_name'] = $village_info['village_name'] ? $village_info['village_name'] : '';
                            $in_car_access_record['order_id'] = date('YmdHis') . rand(100, 999);
                            $in_car_access_record['update_time'] = $now_time;
                            $in_car_access_record['exception_type']=1;
                            if (isset($insert_id) && !empty($insert_id)) {
                                $in_car_access_record['from_id'] = $insert_id;
                            }
                            if (isset($car_access_record['user_name'])) {
                                $in_car_access_record['user_name'] = $car_access_record['user_name'];
                            }
                            if (isset($car_access_record['user_phone'])) {
                                $in_car_access_record['user_phone'] = $car_access_record['user_phone'];
                            }
                            if ($parkTime) {
                                fdump_api(['车辆通行记录前'=>$car_number, 'in_car_access_record' => $in_car_access_record],'D3Park/plateresult'.$parkTime,true);
                            }
                            $in_record_id = $db_house_village_car_access_record->addOne($in_car_access_record);
                            if (! $in_record_id && $parkTime) {
                                fdump_api(['车辆通行记录错误'=>$car_number, 'in_car_access_record' => $in_car_access_record,'in_record_id' => $in_record_id],'D3Park/errPlateresult'.$parkTime,true);
                            }
                        }
                    }

                }
            }
            $pay_data = [
                'car_number' => $car_number,
                'village_id' => $passage_info['village_id'],
                'device_number' => $passage_info['device_number']
            ];
            $pay_money = $this->get_temp_pay($pay_data);
            $whereInRecord = ['car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => 'D3', 'is_out' => 0, 'del_time' => 0];
            $in_park_pay_info = $db_in_park->getOne1($whereInRecord);

            if ($parkTime) {
                fdump_api(['车辆通行'=>$car_number,'in_park_pay_info' => $in_park_pay_info],'D3Park/plateresult'.$parkTime,true);
            }
            if (!empty($in_park_pay_info)) {
                $car_access_record['park_time'] = $pay_money['park_time'];
                $car_access_record['coupon_id'] = $pay_money['coupon_id'];
                fdump_api([$car_info,$pay_money],'out_park_0906',1);
                if ($car_number) {
                    fdump_api(['车辆通行支付信息'=>$car_number,'pay_money' => $pay_money], 'park_temp/log_' . $car_number, 1);
                }
                if ($pay_money['pay_money']==0){
                    $db_in_park->saveOne(['id'=>$in_park_pay_info['id'],'car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0], $park_data);
                    $out_data['total'] = $pay_money['pay_money'];
                    $out_data['pay_type'] = 'free';

                    $out_park_info_car = $db_out_park->getOne($park_out_where);
                    //写入车辆出场表
                    if (! $out_park_info_car || ! isset($out_park_info_car['id'])) {
                        $out_data['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                        $insert_id = $db_out_park->insertOne($out_data);
                    } else {
                        $insert_id = $out_park_info_car['id'];
                    }
                    if ($parkTime) {
                        fdump_api(['车辆通行'=>$car_number,'park_data' => $park_data],'D3Park/plateresult'.$parkTime,true);
                    }
                    $access_record_info = $db_house_village_car_access_record->getOne($access_record_where);
                    if ($parkTime) {
                        fdump_api(['查询是否有对应出场车辆'=>$car_number,'access_record_where' => $access_record_where,'out_park_info_car' => $out_park_info_car],'D3Park/plateresult'.$parkTime,true);
                    }
                    //写入车辆出场表
                    if (!$access_record_info || !isset($access_record_info['record_id'])) {
                        $access_record_where_near = [
                            ['car_number', '=', $car_number],
                            ['park_id', '=', $passage_info['village_id']],
                            ['accessType', '=',1],
                            ['is_out', '=', 0],
                            ['del_time', '=', 0],
                            ['accessTime', '<', $now_time],
                        ];// 通行时间小于出场时间的最近的一条入场时间的记录
                        $park_info_car111 = $db_house_village_car_access_record->getOne($access_record_where_near);
                        if ($park_info_car111 && isset($park_info_car111['record_id'])){
                            $park_where_save = $access_record_where_near;
                            $park_where_save[] = ['exception_type', '=', 0];
                            $db_house_village_car_access_record->saveOne($park_where_save,['is_out'=>1]);
                        }else{
                            $park_info_car111['accessTime']=0;
                            $park_info_car111['order_id']='';
                        }

                        $car_access_record['business_type'] = 0;
                        $car_access_record['business_id'] = $passage_info['village_id'];
                        $car_access_record['car_number'] = $car_number;
                        $car_access_record['accessType'] = 2;
                        $car_access_record['accessTime'] = $now_time;
                        $car_access_record['accessMode'] = 3;
                        $car_access_record['park_sys_type'] = $park_sys_type;
                        $car_access_record['coupon_id'] = $pay_money['coupon_id'];
                        $car_access_record['park_id'] = $passage_info['village_id'];
                        $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                        $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                        $car_access_record['total'] = $pay_money['pay_money'];
                        // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                        // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                        //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                        $car_access_record['pay_type'] = $this->pay_type[5];
                        if(isset($pay_money['is_advance_pay']) && $pay_money['is_advance_pay']>0 && isset($pay_money['parkTemp_money']) && $pay_money['parkTemp_money']>0){
                            $car_access_record['total']=$pay_money['parkTemp_money'];
                            $car_access_record['pay_type'] = $this->pay_type[6];
                        }
                        $car_access_record['update_time'] = $now_time;
                        $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                        if (isset($insert_id)) {
                            $car_access_record['from_id'] = $insert_id;
                        }
                        $car_access_record['pay_order_id'] = isset($in_park_pay_info['pay_order_id']) && $in_park_pay_info['pay_order_id'] ? $in_park_pay_info['pay_order_id'] : '';
                        $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                        if (! $record_id && $parkTime) {
                            fdump_api(['车辆通行记录错误'=>$car_number, 'car_access_record' => $car_access_record,'record_id' => $record_id],'D3Park/errPlateresult'.$parkTime,true);
                        }
                    }
                    //TODO:屏显和语音提示车辆通行
                    $showscreen_data['car_type']= 'temporary_type';
                    $showscreen_data['duration_txt']= $pay_money['time'];
                    $showscreen_data['duration']= $pay_money['park_time'];
                    $showscreen_data['price']= 0;
                    if ($car_number) {
                        fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data], 'park_temp/log_' . $car_number, 1);
                    }
                    if ($parkTime) {
                        fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                    }
                    $this->addParkShowScreenLog($showscreen_data);
                    //车辆通行
                    return true;
                }
                elseif ($pay_money['pay_money']>0&&!empty($car_info)&&$car_info['stored_balance']>$pay_money['pay_money']){
                    $db_in_park->saveOne(['id'=>$in_park_pay_info['id'],'car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => 'D3', 'is_out' => 0], $park_data);
                    $out_data['total'] = $pay_money['pay_money'];
                    $out_data['pay_type'] = 'wallet';

                    $out_park_info_car = $db_out_park->getOne($park_out_where);
                    //写入车辆出场表
                    if (! $out_park_info_car || ! isset($out_park_info_car['id'])) {
                        $out_data['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                        $insert_id = $db_out_park->insertOne($out_data);
                    } else {
                        $insert_id = $out_park_info_car['id'];
                    }

                    if ($parkTime) {
                        fdump_api(['车辆通行'=>$car_number,'park_data' => $park_data],'D3Park/plateresult'.$parkTime,true);
                    }

                    $access_record_info = $db_house_village_car_access_record->getOne($access_record_where);
                    if ($parkTime) {
                        fdump_api(['查询是否有对应出场车辆'=>$car_number,'access_record_where' => $access_record_where,'out_park_info_car' => $out_park_info_car],'D3Park/plateresult'.$parkTime,true);
                    }
                    //写入车辆出场表
                    if (!$access_record_info || !isset($access_record_info['record_id'])) {
                        $access_record_where_near = [
                            ['car_number', '=', $car_number],
                            ['park_id', '=', $passage_info['village_id']],
                            ['accessType', '=',1],
                            ['is_out', '=', 0],
                            ['del_time', '=', 0],
                            ['accessTime', '<', $now_time],
                        ];// 通行时间小于出场时间的最近的一条入场时间的记录
                        $park_info_car111 = $db_house_village_car_access_record->getOne($access_record_where_near);
                        if ($park_info_car111 && isset($park_info_car111['record_id'])){
                            $park_where_save = $access_record_where_near;
                            $park_where_save[] = ['exception_type', '=', 0];
                            $db_house_village_car_access_record->saveOne($park_where_save,['is_out'=>1]);
                        }else{
                            $park_info_car111['accessTime']=0;
                            $park_info_car111['order_id']='';
                        }

                        $car_access_record['business_type'] = 0;
                        $car_access_record['business_id'] = $passage_info['village_id'];
                        $car_access_record['car_number'] = $car_number;
                        $car_access_record['accessType'] = 2;
                        $car_access_record['accessTime'] = $now_time;
                        $car_access_record['car_type'] = 'storedCar';
                        if (!isset($car_access_record['user_name']) || !$car_access_record['user_name']) {
                            $car_access_record['user_name'] = $car_info['car_user_name'];
                        }
                        if (!isset($car_access_record['user_phone']) || !$car_access_record['user_phone']) {
                            $car_access_record['user_phone'] = $car_info['car_user_phone'];
                        }
                        $car_access_record['park_sys_type'] = $park_sys_type;
                        $car_access_record['coupon_id'] = $pay_money['coupon_id'];
                        $car_access_record['park_id'] = $passage_info['village_id'];
                        $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                        $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                        $car_access_record['total'] = $pay_money['pay_money'];
                        $car_access_record['is_paid'] = 1;
                        $car_access_record['pay_time'] = time();
                        $car_access_record['stored_balance']=$car_info['stored_balance']-$pay_money['pay_money'];
                        // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                        // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                        //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                        $car_access_record['pay_type'] = $this->pay_type[1];
                        $car_access_record['update_time'] = $now_time;
                        $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                        if (isset($insert_id)) {
                            $car_access_record['from_id'] = $insert_id;
                        }
                        $car_access_record['pay_order_id'] = isset($in_park_pay_info['pay_order_id']) && $in_park_pay_info['pay_order_id'] ? $in_park_pay_info['pay_order_id'] : '';
                        $car_access_record['prepayTotal']  = isset($pay_money['parkTemp_money']) && $pay_money['parkTemp_money'] > 0 ? $pay_money['parkTemp_money'] : 0;
                        $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                        if ($record_id>0){
                            $db_house_village_parking_car->editHouseVillageParkingCar(['province' => $province, 'car_number' => $car_no,'village_id'=>$passage_info['village_id']],['stored_balance'=>$car_access_record['stored_balance']]);
                        }

                        fdump_api(['对应车辆储值余额变动'=>$car_number,'stored_balance' => $car_info['stored_balance'],'pay_money' => $pay_money['pay_money'],'stored_balance1' => $car_access_record['stored_balance']], 'park_temp/stored_balance_' . $car_number, 1);
                        if (! $record_id && $parkTime) {
                            fdump_api(['车辆通行记录失败'=>$car_number, 'car_access_record' => $car_access_record,'record_id' => $record_id],'D3Park/errPlateresult'.$parkTime,true);
                        }
                    }
                    //TODO:屏显和语音提示车辆通行
                    $showscreen_data['car_type']= 'temporary_type';
                    $showscreen_data['duration_txt']= $pay_money['time'];
                    $showscreen_data['duration']= $pay_money['park_time'];
                    $showscreen_data['price']= $pay_money['pay_money'];
                    $showscreen_data['voice_content']= 9;
                    $showscreen_data['content']= '';
                    if ($parkTime) {
                        fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                    }
                    $this->addParkShowScreenLog($showscreen_data);
                    //车辆通行
                    return true;
                }
                elseif (!empty($in_park_pay_info['pay_order_id'])) {
                    $pay_info = $db_house_new_pay_order->get_one(['summary_id' => $in_park_pay_info['pay_order_id'], 'is_paid' => 1]);
                    if ($parkTime) {
                        fdump_api(['支付订单'=>$car_number,'pay_info' => $pay_info],'D3Park/plateresult'.$parkTime,true);
                    }
                    if (!empty($pay_info)&&$pay_info['pay_time']>$in_park_pay_info['in_time']) {
                        if ($pay_info['pay_money'] >= $pay_money['pay_money'] || $pay_money['pay_money'] == 0) {
                            $db_in_park->saveOne(['id'=>$in_park_pay_info['id'],'car_number' => $car_number, 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0], $park_data);

                            $out_park_info_car = $db_out_park->getOne($park_out_where);
                            //写入车辆出场表
                            if (! $out_park_info_car || ! isset($out_park_info_car['id'])) {
                                $out_data['pay_order_id'] = isset($in_park_info['pay_order_id']) && $in_park_info['pay_order_id'] ? $in_park_info['pay_order_id'] : '';
                                $insert_id = $db_out_park->insertOne($out_data);
                            } else {
                                $insert_id = $out_park_info_car['id'];
                            }

                            $access_record_info = $db_house_village_car_access_record->getOne($access_record_where);
                            if ($parkTime) {
                                fdump_api(['查询是否有对应出场车辆'=>$car_number,'access_record_where' => $access_record_where,'out_park_info_car' => $out_park_info_car],'D3Park/plateresult'.$parkTime,true);
                            }
                            //写入车辆出场表
                            if (!$access_record_info || !isset($access_record_info['record_id'])) {
                                $access_record_where_near = [
                                    ['car_number', '=', $car_number],
                                    ['park_id', '=', $passage_info['village_id']],
                                    ['accessType', '=',1],
                                    ['is_out', '=', 0],
                                    ['del_time', '=', 0],
                                    ['accessTime', '<', $now_time],
                                ];// 通行时间小于出场时间的最近的一条入场时间的记录
                                $park_info_car111 = $db_house_village_car_access_record->getOne($access_record_where_near);
                                if ($park_info_car111 && isset($park_info_car111['record_id'])){
                                    $park_where_save = $access_record_where_near;
                                    $park_where_save[] = ['exception_type', '=', 0];
                                    $db_house_village_car_access_record->saveOne($park_where_save,['is_out'=>1]);
                                }else{
                                    $park_info_car111['accessTime']=0;
                                    $park_info_car111['order_id']='';
                                }

                                $car_access_record['business_type'] = 0;
                                $car_access_record['business_id'] = $passage_info['village_id'];
                                $car_access_record['car_number'] = $car_number;
                                $car_access_record['accessType'] = 2;
                                $car_access_record['accessTime'] = $now_time;
                                $car_access_record['accessMode'] = 4;
                                $car_access_record['park_sys_type'] = $park_sys_type;
                                $car_access_record['is_out'] = 1;
                                $car_access_record['park_id'] = $passage_info['village_id'];
                                $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                                $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                                $car_access_record['total'] = $pay_money['pay_money'];
                                $car_access_record['pay_time'] = $pay_info['pay_time'];
                                $car_access_record['is_paid'] = 1;
                                // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                                // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                                //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                                $car_access_record['pay_type'] = $this->pay_type[6];
                                $car_access_record['update_time'] = $now_time;
                                $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                                if (isset($insert_id)) {
                                    $car_access_record['from_id'] = $insert_id;
                                }
                                $car_access_record['pay_order_id'] = $in_park_pay_info['pay_order_id'];
                                $car_access_record['prepayTotal']  = isset($pay_money['parkTemp_money']) && $pay_money['parkTemp_money'] > 0 ? $pay_money['parkTemp_money'] : 0;
                                $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                                if (! $record_id && $parkTime) {
                                    fdump_api(['车辆通行记录错误'=>$car_number, 'car_access_record' => $car_access_record,'record_id' => $record_id],'D3Park/errPlateresult'.$parkTime,true);
                                }
                            }
                            //TODO:屏显和语音提示车辆通行
                            //车辆通行
                            $showscreen_data['car_type']= 'temporary_type';
                            $showscreen_data['duration_txt']= $pay_money['time'];
                            $showscreen_data['duration']= $pay_money['park_time'];
                            $showscreen_data['price']= 0;
                            if ($parkTime) {
                                fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                            }
                            $this->addParkShowScreenLog($showscreen_data);
                            return true;
                        } else {
                            //TODO:屏显和语音提示错误信息
                            $showscreen_data['car_type']= 'temporary_type';
                            $showscreen_data['duration_txt']= $pay_money['time'];
                            $showscreen_data['duration']= $pay_money['park_time'];
                            $showscreen_data['price']= $pay_money['pay_money'];

                            $showscreen_data['voice_content']= 5;
                            $showscreen_data['content']= '';
                            if ($parkTime) {
                                fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                            }
                            $this->addParkShowScreenLog($showscreen_data);

                            //企业微信群提醒
                            if (isset($pay_money['pay_money'])) {
                                $payMoney = $pay_money['pay_money'] - $pay_info['pay_money'];
                            } else {
                                $payMoney = $pay_money['pay_money'];
                            }
                            $webhookurl = $this->webhookurl;
                            $data = [
                                "msgtype" => "markdown",
                                "markdown" => [
                                    "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆停车时长<font color='info'>**" . $pay_money['time'] . "**</font>需缴费<font color='info'>**" . $payMoney . "**</font>元
                             >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                             >车牌号码: <font color='info'>**" . $car_number . "**</font>
                             >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                             >通行状态: <font color='info'>**拒绝通行**</font> 
                             >通行方向: <font color='info'>**入口**</font> 
                             >行为原因: <font color='info'>**临时车需缴费通行**</font> 
                             >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                                ],
                            ];
                            http_request($webhookurl, 'POST', json_encode($data));
                            //需缴费通行
                            if ($parkTime) {
                                fdump_api(['屏显和语音提示车辆通行'=>$car_number,'data' => $data],'D3Park/plateresult'.$parkTime,true);
                            }
                            return false;
                        }
                    } else {
                        //TODO:屏显和语音提示错误信息
                        $showscreen_data['voice_content']= 5;
                        $showscreen_data['content']= '';
                        $showscreen_data['car_type']= 'temporary_type';
                        $showscreen_data['duration_txt']= $pay_money['time'];
                        $showscreen_data['duration']= $pay_money['park_time'];
                        $showscreen_data['price']= $pay_money['pay_money'];
                        if ($parkTime) {
                            fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                        }
                        $this->addParkShowScreenLog($showscreen_data);
                        //企业微信群提醒
                        $payMoney = $pay_money['pay_money'];
                        $webhookurl = $this->webhookurl;
                        $data = [
                            "msgtype" => "markdown",
                            "markdown" => [
                                "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆停车时长<font color='info'>**" . $pay_money['time'] . "**</font>需缴费<font color='info'>**" . $payMoney . "**</font>元
                                 >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                                 >车牌号码: <font color='info'>**" . $car_number . "**</font>
                                 >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**入口**</font> 
                                 >行为原因: <font color='info'>**临时车需缴费通行**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                            ],
                        ];
                        http_request($webhookurl, 'POST', json_encode($data));
                        //需缴费通行
                        if ($parkTime) {
                            fdump_api(['屏显和语音提示车辆通行'=>$car_number,'data' => $data],'D3Park/plateresult'.$parkTime,true);
                        }
                        return false;
                    }
                }
                else {
                    //TODO:屏显和语音提示错误信息
                    $showscreen_data['voice_content']= 5;
                    $showscreen_data['content']= '';
                    $showscreen_data['car_type']= 'temporary_type';
                    $showscreen_data['duration_txt']= $pay_money['time'];
                    $showscreen_data['duration']= $pay_money['park_time'];
                    $showscreen_data['price']= $pay_money['pay_money'];
                    if ($parkTime) {
                        fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                    }
                    $this->addParkShowScreenLog($showscreen_data);
                    //企业微信群提醒
                    $payMoney = $pay_money['pay_money'];
                    $webhookurl = $this->webhookurl;
                    $data = [
                        "msgtype" => "markdown",
                        "markdown" => [
                            "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆停车时长<font color='info'>**" . $pay_money['time'] . "**</font>需缴费<font color='info'>**" . $payMoney . "**</font>元
                                 >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                                 >车牌号码: <font color='info'>**" . $car_number . "**</font>
                                 >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**入口**</font> 
                                 >行为原因: <font color='info'>**临时车需缴费通行**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                        ],
                    ];
                    http_request($webhookurl, 'POST', json_encode($data));
                    //需缴费通行
                    if ($parkTime) {
                        fdump_api(['屏显和语音提示车辆通行'=>$car_number,'data' => $data],'D3Park/plateresult'.$parkTime,true);
                    }
                    return false;
                }
            }else{
                //TODO:屏显和语音提示错误信息
                $showscreen_data['voice_content']= 8;
                $showscreen_data['content']= '未入场';
                $showscreen_data['car_type']= 'temporary_type';
                $showscreen_data['duration_txt']= '';
                $showscreen_data['duration']= 0;
                $showscreen_data['price']= 0;
                if ($parkTime) {
                    fdump_api(['屏显和语音提示车辆通行'=>$car_number,'showscreen_data' => $showscreen_data],'D3Park/plateresult'.$parkTime,true);
                }
                $this->addParkShowScreenLog($showscreen_data);
                //企业微信群提醒
                $payMoney = $pay_money['pay_money'];
                $webhookurl = $this->webhookurl;
                $data = [
                    "msgtype" => "markdown",
                    "markdown" => [
                        "content" => "车牌为<font color='info'>**" . $car_number . "**</font>的车辆停车时长<font color='info'>**" . $pay_money['time'] . "**</font>需缴费<font color='info'>**" . $payMoney . "**</font>元
                                 >小区名称: <font color='info'>**" . $village_info['village_name'] . "**</font>
                                 >车牌号码: <font color='info'>**" . $car_number . "**</font>
                                 >设备名称: <font color='info'>**" . $passage_info['passage_name'] . "**</font> 
                                 >通行状态: <font color='info'>**拒绝通行**</font> 
                                 >通行方向: <font color='info'>**入口**</font> 
                                 >行为原因: <font color='info'>**临时车需缴费通行**</font> 
                                 >通知时间: <font color='info' >" . date('Y-m-d H:i:s', time()) . "</font>"
                    ],
                ];
                http_request($webhookurl, 'POST', json_encode($data));
                //需缴费通行
                if ($parkTime) {
                    fdump_api(['需缴费通行'=>$car_number,'data' => $data],'D3Park/plateresult'.$parkTime,true);
                }
                return false;
            }
        }
        return false;
    }


    /**
     * 获取临时车缴费信息
     * @author:zhubaodi
     * @date_time: 2021/11/11 15:22
     */
    public function get_temp_payment_info($data)
    {
        $db_house_village = new HouseVillage();
        $village_info = $db_house_village->getOne($data['village_id'], 'province_id');
        if (!empty($village_info)) {
            $db_area = new Area();
            $province_id = $db_area->getOne(['area_id' => $village_info['province_id']]);
        }
        if (!empty($province_id)) {
            $list['province_text'] = $province_id['area_name'];
        } else {
            $list['province_text'] = '';
        }
        $park_config=$this->getVillageParkConfig($data['village_id'],'park_sys_type,park_versions');
        $list['skiptype'] = self::getD5ParkConfig($park_config);
        $list['province'] = $this->province_car;
        $list['list'] = $this->get_bind_car_list($data);
        if(strpos($_SERVER['SERVER_NAME'],'hz.huizhisq.com') !== false){
            $list['bingtext']='去绑定月租车辆';
        }
        else{
            $list['bingtext']='去绑定车辆';
        }
        return $list;
    }

    /**
     * 获取用户绑定的车辆列表
     * @author:zhubaodi
     * @date_time: 2021/11/11 13:14
     */
    public function get_bind_car_list($data)
    {
        $db_house_village_bind_car = new HouseVillageBindCar();
        $db_brand_cars = new BrandCars();
        $car_list = $db_house_village_bind_car->getLists(['a.village_id' => $data['village_id'], 'a.user_id' => $data['pigcms_id']], 'a.id,a.uid,a.user_id,a.relationship,a.is_default,b.*');
        // print_r($car_list);exit;
        $carList = [];
        $db_house_village_park_config=new HouseVillageParkConfig();
        $village_park_config=$db_house_village_park_config->getFind(['village_id'=>$data['village_id']]);
        $houseNewParkingService=new HouseNewParkingService();
        $parking_a11_car_type_arr=$houseNewParkingService->parking_a11_car_type_arr;
        if (!empty($car_list)) {
            $car_list = $car_list->toArray();
            if (!empty($car_list)) {
                $i=0;
                foreach ($car_list as $k => $v) {
                    if ($i>0&&$carList[$i-1]['car_id']==$v['car_id']){
                        continue;
                    }
                    $carList[$i]['is_default'] = $v['is_default'];
                    $carList[$i]['id'] = $v['id'];
                    $carList[$i]['car_id'] = $v['car_id'];
                    $carList[$i]['uid'] = $v['uid'];
                    $carList[$i]['village_id'] = $v['village_id'];
                    $carList[$i]['car_number'] = $v['province'] . substr($v['car_number'], 0, 1) . '-' . substr($v['car_number'], 1);
                    $carList[$i]['car_brands'] = $v['car_brands'];
                    $carList[$i]['car_brands_logo'] = cfg('site_url') . $this->car_logo;
                    $carList[$i]['parking_car_type']=$v['parking_car_type'];
                    $carList[$i]['parking_car_type_str']='';
                    $carList[$i]['parking_car_type_group']='';
                    if (!empty($v['parking_car_type'])&&$village_park_config['park_sys_type']=='A11'&&$v['parking_car_type']<=20){
                        $parking_car_type_str=isset($parking_a11_car_type_arr[$v['parking_car_type']]) ? $parking_a11_car_type_arr[$v['parking_car_type']]:'';
                        $carList[$i]['parking_car_type_str']=$parking_car_type_str;
                        if($parking_car_type_str && strpos($parking_car_type_str,'月租车')!==false){
                            $carList[$i]['parking_car_type_group']='is_month_car';
                        }elseif ($parking_car_type_str && strpos($parking_car_type_str,'储值车')!==false){
                            $carList[$i]['parking_car_type_group']='is_stored_car';
                        }
                    }
                    if (!empty($v['car_brands'])) {
                        $brand_cars = explode('-', $v['car_brands']);
                        $logo = $db_brand_cars->getFind(['brand_name' => $brand_cars[0]]);
                        $carList[$i]['car_brands_logo'] = cfg('site_url') . $logo['brand_logo'];
                    }
                    $carList[$i]['relationship'] = isset($this->relationship[$v['relationship']]) ? $this->relationship[$v['relationship']]:'其他';
                    $v['examine_status']=$v['examine_status']>0 ? $v['examine_status']:0;
                    $carList[$i]['status'] = $v['examine_status'];
                    $carList[$i]['status_text'] = $this->examine_status[$v['examine_status']]['text'];
                    $carList[$i]['status_color'] = $this->examine_status[$v['examine_status']]['color'];
                    $i++;
                }
            }
        }
        return $carList;
    }

    /**
     * 获取业主绑定的车辆信息
     * @author:lihongshun
     * @date_time: 2021/11/11 13:14
     */
    public function getUserBindCarList($whereArr=array(),$field='*')
    {
        $db_house_village_bind_car = new HouseVillageBindCar();
        $car_list = $db_house_village_bind_car->getLists($whereArr, $field);
        $carList = [];
        if (!empty($car_list) && !$car_list->isEmpty()) {
            $houseVillageParkingPosition= new HouseVillageParkingPosition();
            $houseVillageParkingGarage= new HouseVillageParkingGarage();
            $carList = $car_list->toArray();
            if (!empty($carList)) {
                foreach ($carList as $k => $v) {
                    $carList[$k]['car_number']=$v['province'].$v['car_number'];
                    $carList[$k]['position_num']='';
                    $carList[$k]['garage_num']='';
                    if($v['position_id']>0){
                        $whereArr=array('position_id'=>$v['position_id'],'village_id'=>$v['village_id']);
                        $parkingPosition=$houseVillageParkingPosition->getFind($whereArr,'garage_id,position_num');
                        if($parkingPosition && !$parkingPosition->isEmpty()){
                            $carList[$k]['position_num']=$parkingPosition['position_num'];
                            if($parkingPosition['garage_id']>0 && $parkingPosition['garage_id']!=9999){
                                $parkingGarage=$houseVillageParkingGarage->getOne(['garage_id'=>$parkingPosition['garage_id'],'village_id'=>$v['village_id']],'garage_num');
                                if($parkingGarage && !$parkingGarage->isEmpty()){
                                    $carList[$k]['garage_num']=$parkingGarage['garage_num'];
                                }
                            }else if($parkingPosition['garage_id']>0 && $parkingPosition['garage_id']==9999){
                                $carList[$k]['garage_num']='虚拟车库';
                            }
                        }
                    }
                }
            }
        }
        return $carList;
    }
    /**
     * 获取业主绑定的车位信息
     * @author:lihongshun
     * @date_time: 2021/11/11 13:14
     */
    public function  getUserBindPositionList($whereArr=array(),$field='*'){
        $houseVillageBindPosition= new HouseVillageBindPosition();
        $bindPosition = $houseVillageBindPosition->getUserBindPositionList($whereArr, $field);
        if($bindPosition && !$bindPosition->isEmpty()){
            $position_list = $bindPosition->toArray();
            $houseVillageParkingGarage= new HouseVillageParkingGarage();
            foreach ($position_list as $kk => $vv ){
                if($vv['garage_id']>0 && $vv['garage_id']!=9999){
                    $parkingGarage=$houseVillageParkingGarage->getOne(['garage_id'=>$vv['garage_id'],'village_id'=>$vv['village_id']],'garage_num');
                    if($parkingGarage && !$parkingGarage->isEmpty()){
                        $position_list[$kk]['garage_num']=$parkingGarage['garage_num'];
                    }
                }else if($vv['garage_id']>0 && $vv['garage_id']==9999){
                    $position_list[$kk]['garage_num']='虚拟车库';
                }
            }
            return $position_list;
        }
        return array();
    }

    public function handleBindCarAndPosition($bindCars=array(),$bindPosition=array()){
        $positionIDs=array();
        if($bindCars){
            foreach ($bindCars as $vv){
                $positionIDs[]=$vv['position_id'];
            }
        }else{
            $bindCars=array();
        }
        if($bindPosition){
            foreach ($bindPosition as $vv){
                if(!in_array($vv['position_id'],$positionIDs)){
                    $vv['car_id']=0;
                    $vv['car_number']='';
                    $bindCars[]=$vv;
                }
            }
        }
        return $bindCars;
    }
    /**
     * 获取车标列表
     * @author:zhubaodi
     * @date_time: 2021/11/11 13:14
     */
    public function get_car_logo_list()
    {
        $db_brand_cars = new BrandCars();
        $car_list = $db_brand_cars->getList([]);
        if (!empty($car_list)) {
            $car_list = $car_list->toArray();
        }
        return $car_list;
    }

    /**
     * 获取用户历史登记记录
     * @author:zhubaodi
     * @date_time: 2021/11/12 11:34
     */
    public function get_visitor_list($data)
    {
        $db_house_visitor = new HouseVillageVisitor();
        $res = $db_house_visitor->getLists(['village_id' => $data['village_id'], 'uid' => $data['uid']], '*');
        $list = [];
        if (!empty($res)) {
            $res = $res->toArray();
            if (!empty($res)) {
                foreach ($res as $k => $v) {
                    $list[$k][0]['value'] = $v['id'];
                    $list[$k][0]['key'] = 'id';
                    $list[$k][1]['value'] = $v['visitor_name'];
                    $list[$k][1]['key'] = '姓名';
                    $list[$k][2]['value'] = $v['visitor_phone'];
                    $list[$k][2]['key'] = '联系方式';
                    $list[$k][3]['value'] = $v['car_id'];
                    $list[$k][3]['key'] = '车牌号';
                    $list[$k][4]['value'] = date('Y-m-d H:i', $v['add_time']);
                    $list[$k][4]['key'] = '添加时间';
                }
            }
        }
        return $list;
    }


    /**
     * 车辆绑定页面
     * @author:zhubaodi
     * @date_time: 2021/11/12 11:34
     */
    public function get_bind_car($data)
    {
        $db_house_village = new HouseVillage();
        $village_info = $db_house_village->getOne($data['village_id'], 'province_id');
        if (!empty($village_info)) {
            $db_area = new Area();
            $province_id = $db_area->getOne(['area_id' => $village_info['province_id']]);
        }
        if (!empty($province_id)) {
            $list['province_text'] = $province_id['area_name'];
        } else {
            $list['province_text'] = '';
        }

        $list['province'] = $this->province_car;
        $list['color'] = $this->car_color;
        $relationship = $this->relationship;
        $list['relationship'] = [];
        if (!empty($relationship)) {
            foreach ($relationship as $k => $v) {
                $list['relationship'][$k - 1]['id'] = $k;
                $list['relationship'][$k - 1]['name'] = $v;
            }
        }
        $db_brand_cars = new BrandCars();
        $brand_list = $db_brand_cars->getList([]);
        $brand = [];
        if (!empty($brand_list)) {
            $brand_list = $brand_list->toArray();
            $brand_list1 = $brand_list;
            $brand = [];
            $i = 0;
            $brand2 = [];
            foreach ($brand_list as $k => $v) {
                $brand1 = [];
                foreach ($brand_list1 as $kk => $vv) {
                    if ($vv['first_name'] == $v['first_name']) {
                        $brand2 ['value'] = $vv['brand_id'];
                        $brand2['label'] = $vv['brand_name'];
                        $brand1['children'][] = $brand2;
                        unset($brand_list1[$kk]);
                    }
                }

                if (!empty($brand1)) {
                    $brand1['value'] = $i;
                    $brand1['label'] = $v['first_name'];
                    unset($brand_list[$k]);
                    $brand[] = $brand1;
                    $i++;
                }

            }
        }
        $park_config=$this->getVillageParkConfig($data['village_id'],'park_sys_type,park_versions');
        $list['skiptype'] = self::getD5ParkConfig($park_config);
        $list['brand'] = $brand;
        return $list;
    }

    /**
     * 获取车牌品牌
     * @author:zhubaodi
     * @date_time: 2022/7/20 14:02
     */
    public function getCarBrands(){
        $db_brand_cars = new BrandCars();
        $brand_list = $db_brand_cars->getList([]);
        $brand = [];
        if (!empty($brand_list)) {
            $brand_list = $brand_list->toArray();
            $brand_list1 = $brand_list;
            $brand = [];
            $i = 0;
            $brand2 = [];
            foreach ($brand_list as $k => $v) {
                $brand1 = [];
                foreach ($brand_list1 as $kk => $vv) {
                    if ($vv['first_name'] == $v['first_name']) {
                        $brand2 ['value'] = $vv['brand_id'];
                        $brand2['label'] = $vv['brand_name'];
                        $brand1['children'][] = $brand2;
                        unset($brand_list1[$kk]);
                    }
                }

                if (!empty($brand1)) {
                    $brand1['value'] = $i;
                    $brand1['label'] = $v['first_name'];
                    unset($brand_list[$k]);
                    $brand[] = $brand1;
                    $i++;
                }

            }
        }
        return $brand;
    }

    public function add_bind_car($data)
    {
        $park_config_info = (new HouseVillageParkConfig())->getFind(['village_id' => $data['village_id']]);
        $car_data = [];
        $car_data['village_id'] = $data['village_id'];
        $car_data['car_position_id'] = 0;
        $car_data['car_type'] = 0;
        $car_data['province'] = mb_substr($data['car_number'], 0, 1);
        $car_data['car_number'] = mb_substr($data['car_number'], 1);
        $car_data['car_stop_num'] = 0;
        $car_data['car_user_name'] =$data['car_user_name'];
        $car_data['car_user_phone'] = $data['car_user_phone'];
        $car_data['car_displacement'] = 0;
        $car_data['car_addtime'] = time();
        $car_data['car_color'] = $data['car_color'];
        $car_data['equipment_no'] = $data['equipment_no'];
        $car_data['car_position_id_path'] = 0;
        $car_data['examine_status'] = 0;
        $car_data['car_brands'] = $data['brands'] . '-' . $data['car_type'];
        if (!empty($park_config_info)&&$park_config_info['park_sys_type']=='D7'){
            $car_data['parking_car_type'] =9;
        }
        if ($data['relationship']==1){
            $db_house_village_user_bind = new HouseVillageUserBind();
            $bing_info=$db_house_village_user_bind->getOne(['pigcms_id'=>$data['pigcms_id'],'village_id'=>$data['village_id'],'status'=>1],'name,phone,pigcms_id');
            if (!empty($bing_info)){
                $car_data['car_user_name'] =$bing_info['name'];
                $car_data['car_user_phone'] = $bing_info['phone'];
            }else{
                $db_user = new User();
                $user_info=$db_user->getOne(['uid'=>$data['uid'],'status'=>1],'nickname,phone,uid');
                $car_data['car_user_name'] =$user_info['nickname'];
                $car_data['car_user_phone'] = $user_info['phone'];
            }
        }
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $id = $db_house_village_parking_car->addHouseVillageParkingCar($car_data);
        $ids = 0;
        if ($id) {
            $db_house_village_bind_car = new HouseVillageBindCar();
            $bind_car = [];
            $bind_car['car_id'] = $id;
            $bind_car['village_id'] = $data['village_id'];
            $bind_car['user_id'] = $data['pigcms_id'];
            $bind_car['uid'] = $data['uid'];
            $bind_car['relationship'] = $data['relationship'];
            $bind_car['is_default'] = 0;
            $ids = $db_house_village_bind_car->add($bind_car);
        }
        return $ids;
    }

    public function edit_bind_car($data)
    {
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_village_bind_car = new HouseVillageBindCar();
        $bind_car = [];
        $bind_car['relationship'] = $data['relationship'];
        $id = $db_house_village_bind_car->saveOne(['car_id' => $data['car_id']], $bind_car);
        $ids = 0;

        $car_info = $db_house_village_bind_car->getFind(['car_id' => $data['car_id']]);
        $car_data = [];
        $car_data['examine_status']=0;
        $car_data['province'] = mb_substr($data['car_number'], 0, 1);
        $car_data['car_number'] = mb_substr($data['car_number'], 1);
        $car_data['car_color'] = $data['car_color'];
        $car_data['equipment_no'] = $data['equipment_no'];
        $car_data['car_brands'] = $data['brands'] . '-' . $data['car_type'];
        $car_data['car_user_name'] =$data['car_user_name'];
        $car_data['car_user_phone'] = $data['car_user_phone'];
        $ids = $db_house_village_parking_car->editHouseVillageParkingCar(['car_id' => $car_info['car_id']], $car_data);

        return $ids;
    }

    public function get_parking_car_info($whereArr=array(),$field='*')
    {
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $car_info = $db_house_village_parking_car->getFind($whereArr, $field);
        if($car_info && !$car_info->isEmpty()){
            $car_info=$car_info->toArray();
        }else{
            $car_info=array();
        }
        return $car_info;
    }

    public function set_car_default($data)
    {

        $db_house_village_bind_car = new HouseVillageBindCar();
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $car_info = $db_house_village_parking_car->getFind(['village_id' => $data['village_id'], 'car_id' => $data['car_id']]);
        $bind_car_info = $db_house_village_bind_car->getFind(['village_id' => $data['village_id'], 'car_id' => $car_info['car_id']]);
        if (!empty($car_info)&&!empty($bind_car_info)) {
            $bind_car = $db_house_village_bind_car->getFind(['village_id' => $data['village_id'], 'uid' => $bind_car_info['uid'], 'is_default' => 1]);

            if (empty($bind_car)) {
                $res = $db_house_village_bind_car->saveOne(['village_id' => $data['village_id'], 'uid' => $bind_car_info['uid'], 'car_id' => $data['car_id']], ['is_default' => 1]);
            } else {
                $db_house_village_bind_car->saveOne(['village_id' => $data['village_id'], 'uid' => $bind_car_info['uid'], 'is_default' => 1], ['is_default' => 0]);
                $res = $db_house_village_bind_car->saveOne(['village_id' => $data['village_id'], 'uid' => $bind_car_info['uid'], 'car_id' => $car_info['car_id']], ['is_default' => 1]);
            }
            if ($res) {
                return '修改成功';
            } else {
                return '修改失败';
            }
        }
        return '修改失败';

    }

    //D5停车设备月租车删除
    public function del_d5($village_id,$car_id){
        $park_config_info = (new HouseVillageParkConfig())->getFind(['village_id' => $village_id]);
        if(empty($park_config_info)){
            return ['error'=>true,'msg'=>'请您开启D5停车设备'];
        }
        if($park_config_info['park_versions'] == 2 && $park_config_info['park_sys_type'] == 'D5'){
            $config=[
                'base_url'=>$park_config_info['d5_url'],
                'userName'=>$park_config_info['d5_name'],
                'passWord'=>$park_config_info['d5_pass']
            ];
            $rel=(new D5Service())->parkCarDel($config,$car_id);
            if (!isset($rel['success'])){
                return ['error'=>false,'msg'=>'删除失败'];
            }
            if(!$rel['success']){
                return ['error'=>false,'msg'=>$rel['errMsg']];
            }
        }
        return ['error'=>true,'msg'=>''];
    }

    public function del_bind_car($data)
    {
        $db_house_village_bind_car = new HouseVillageBindCar();
        $bind_car = $db_house_village_bind_car->getFind(['id' => $data['id']]);
        if (!empty($bind_car)) {
            $car_info = (new HouseVillageParkingCar())->getFind([
                'village_id' => $bind_car['village_id'],
                'car_id' => $bind_car['car_id']
            ],'examine_status');
            if($car_info && $car_info['examine_status'] == 1){
                $result=$this->del_d5($data['village_id'],$bind_car['car_id']);
                if(!$result['error']){
                    throw new \think\Exception($result['msg']);
                }
            }
            $res = $db_house_village_bind_car->delOne(['id' => $data['id']]);
        } else {
            throw new \think\Exception('绑定信息不存在');
        }

        return $res;
    }


    public function get_mouth_list($data)
    {
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village = new HouseVillage();

        $village_info = $db_house_village->getOne($data['village_id'], 'village_name');

        $car_info = $db_house_village_parking_car->getFind(['village_id' => $data['village_id'], 'car_number' => mb_substr($data['car_number'], 1), 'province' => mb_substr($data['car_number'], 0, 1)]);

        $position_info = $db_house_village_parking_position->getLists(['pp.position_id' => $car_info['car_position_id']]);
        $db_house_village_park = new HouseVillagePark();
        $list = $db_house_village_park->getList(['village_id' => $data['village_id'], 'status' => 1]);

        $mouth_list = [];
        if (!empty($list)) {
            $list = $list->toArray();
            foreach ($list as $k => $v) {
                $mouth_list[$k]['name'] = $v['park_month_num'] . '个月';
                $mouth_list[$k]['coupon'] = '送' . $v['presented_park_month_num'] . '个月';
                $mouth_list[$k]['money'] = '￥' . $v['park_month_price'];
                $aa = $v['park_month_num'] + $v['presented_park_month_num'];
                $mouth_list[$k]['time'] = date('Y-m-d', strtotime($aa . ' mouth', $car_info['end_time']));
            }
        }
        $carInfo = [];
        $carInfo['village_name'] = $village_info['village_name'];
        $carInfo['position_num'] = $position_info['position_num'];
        $carInfo['garage_name'] = $village_info['garage_num'];
        $carInfo['villcar_numberage_name'] = $data['car_number'];
        $carInfo['end_time'] = date('Y-m-d', $car_info['end_time']);

        $list = [];
        $list['mouth'] = $mouth_list;
        $list['carInfo'] = $carInfo;
        return $list;
    }


    public function payment_car($data)
    {
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_village_parking_position = new HouseVillageParkingPosition();
        $db_house_village = new HouseVillage();

        $village_info = $db_house_village->getOne($data['village_id'], 'village_name');

        $car_info = $db_house_village_parking_car->getFind(['village_id' => $data['village_id'], 'car_number' => mb_substr($data['car_number'], 1), 'province' => mb_substr($data['car_number'], 0, 1)]);

        $position_info = $db_house_village_parking_position->getLists(['pp.position_id' => $car_info['car_position_id']]);


        $carInfo = [];
        $carInfo['village_name'] = $village_info['village_name'];
        $carInfo['position_num'] = $position_info['position_num'];
        $carInfo['garage_name'] = $village_info['garage_num'];
        $carInfo['villcar_numberage_name'] = $data['car_number'];

        return $carInfo;
    }


    public function get_bind_car_info($data)
    {
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $db_house_village_bind_car = new HouseVillageBindCar();
        $car_info = $db_house_village_parking_car->getFind(['village_id' => $data['village_id'], 'car_id' => $data['car_id']]);
        $bind_car_info = [];
        if (!empty($car_info)) {
            $bind_car = $db_house_village_bind_car->getFind(['village_id' => $data['village_id'], 'car_id' => $data['car_id']]);
            if (!empty($bind_car)) {
                $car_brands = explode('-', $car_info['car_brands']);

                $bind_car_info['car_number'] = $car_info['province'] . $car_info['car_number'];
                $bind_car_info['car_color'] = $car_info['car_color'];
                $bind_car_info['relationship'] = $this->relationship[$bind_car['relationship']];
                $bind_car_info['relationship_id'] = $bind_car['relationship'];
                $bind_car_info['car_brands'] = empty($car_info['car_brands']) ? '' : $car_brands[0];
                $bind_car_info['car_brands1'] = empty($car_info['car_brands']) ? '' : $car_brands[1];
                $bind_car_info['equipment_no'] = $car_info['equipment_no'];
                $bind_car_info['car_color'] = $car_info['car_color'];
                $bind_car_info['car_user_name'] = $car_info['car_user_name'];
                $bind_car_info['car_user_phone'] = $car_info['car_user_phone'];
            }
        }
        return $bind_car_info;
    }


    /**
     * 查询抬竿指令
     * @author:zhubaodi
     * @date_time: 2021/12/8 13:36
     */
    public function open_gate($data){
        $db_park_open_log=new ParkOpenLog();
        $db_in_park = new InPark();
        $db_out_park = new OutPark();
        $db_park_passage = new ParkPassage();
        $db_house_village = new HouseVillage();
        $db_house_village_pay_order = new HouseVillagePayOrder();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_park_showscreen_log = new ParkShowscreenLog();
        $db_house_village_car_access_record = new HouseVillageCarAccessRecord();
        $db_house_visitor = new HouseVillageVisitor();
        $db_house_village_parking_temp=new HouseVillageParkingTemp();
        $db_house_village_parking_car = new HouseVillageParkingCar();
        $now_time=time();
        $res=[];
        $res['data']=false;
        $res['showscreen']=[];
        $serialno = isset($data['serialno']) && $data['serialno'] ? $data['serialno'] : '';
        if (!empty($serialno)){
            //查询设备
            if (!empty(cache($serialno))) {
                $passage_info= cache($serialno);
            }else {
                $passage_info = $db_park_passage->getFind(['device_number' => $data['serialno'], 'status' => 1]);
                cache($serialno,$passage_info,86400);
            }
            $passage_info_arr =  $passage_info;
            fdump_api(['通道信息' => $serialno,'passage_info' => $passage_info_arr],'park_temp/heartbeat_'.$serialno.'_log',1);
            if (!empty($passage_info)){
                $db_park_passage->save_one(['device_number' => $data['serialno'], 'status' => 1],['last_heart_time'=>$now_time]);
            }
            $park_sys_type = isset($passage_info['park_sys_type']) && $passage_info['park_sys_type'] ? trim($passage_info['park_sys_type']) : 'D3';
            if ($passage_info['park_sys_type']=='A11'){
                //查询待同步的白名单月租车
                $white = [];
                $white['device_number'] = $data['serialno'];
                $white_list = $this->getWhitelist($white);
                if (!empty($white_list)) {
                    $res['white_list'] = $white_list;
                }
                $where = [
                    'channel_id' => $data['serialno']
                ];
                $showscreen_info = $db_park_showscreen_log->getFind($where);
                $white_list_arr      = $white_list && !is_array($white_list) ? $white_list->toArray() : $white_list;
                $showscreen_info_arr = $showscreen_info && !is_array($showscreen_info) ? $showscreen_info->toArray() : $showscreen_info;
                fdump_api(['通道信息' => $serialno,'white_list' => $white_list_arr,'showscreen_info' => $showscreen_info_arr],'park_temp/heartbeat_'.$serialno.'_log',1);
                if (!empty($showscreen_info) && isset($showscreen_info['id'])) {
                    $showscreen_info=$showscreen_info->toArray();
                    $db_park_showscreen_log->delOne(['id' => $showscreen_info['id']]);
                    $res['showscreen'] = $showscreen_info;
                    if ($passage_info['passage_type'] == 2 && $passage_info['passage_direction'] == 1) {
                        $res['showscreen']['passage_type'] = 2;
                    } else {
                        $res['showscreen']['passage_type'] = 1;
                    }
                }
                $log_info = $db_park_open_log->get_one($where);
                $log_info_arr      = $log_info && !is_array($log_info) ? $log_info->toArray() : $log_info;
                fdump_api(['通道信息' => $serialno, 'log_info' => $log_info_arr],'park_temp/heartbeat_'.$serialno.'_log',1);
                if (!empty($log_info) && isset($log_info['id'])) {
                    if($log_info['car_number']=='_无_'){
                        $db_park_open_log->delOne(['id' => $log_info['id']]);
                    }else{
                        $result = $this->addA11Park($data, $log_info, $now_time);
                        fdump_api(['通道信息' => $serialno, 'result' => $result, 'now_time' => $now_time],'park_temp/heartbeat_'.$serialno.'_log',1);
                        $db_park_open_log->delOne(['id' => $log_info['id']]);
                        $res['data'] = $result;
                    }
                }
                return $res;
            }
            //查询待同步的白名单月租车
            $white=[];
            $white['device_number']=$data['serialno'];
            $white_list=$this->getWhitelist($white);
            if (!empty($white_list)){
                $res['white_list']=$white_list;
            }
            $where=[
                'channel_id'=>$data['serialno']
            ];
            $showscreen_info=$db_park_showscreen_log->getFind($where);
            if (!empty($showscreen_info)&&isset($showscreen_info['id'])){
                //   fdump_api([$showscreen_info],'showscreen_info_11',1);
                $showscreen_info=$showscreen_info->toArray();
                $db_park_showscreen_log->delOne(['id'=>$showscreen_info['id']]);
                $res['showscreen']=$showscreen_info;
                if ($passage_info['passage_type'] == 2 && $passage_info['passage_direction'] == 1) {
                    $res['showscreen']['passage_type'] = 2;
                } else {
                    $res['showscreen']['passage_type'] = 1;
                }
            }
            $log_info=$db_park_open_log->get_one($where);
            if (!empty($log_info)&&isset($log_info['id'])){
                //  fdump_api([$log_info,$where],'open_gate_0519_11',1);
                if (!empty($log_info['car_number'])){
                    //查询设备
                    //  $passage_info = $db_park_passage->getFind(['device_number' => $data['serialno'], 'status' => 1]);
                    // 记录车辆进入信息
                    $car_access_record = [];
                    $car_access_record['channel_id']     = $passage_info['id'];
                    $car_access_record['channel_number'] = $passage_info['channel_number'];
                    $car_access_record['channel_name']   = $passage_info['passage_name'];
                    $car_number = $log_info['car_number'];
                    $province = mb_substr($car_number, 0, 1);
                    $car_no = mb_substr($car_number, 1);
                    if (!empty(cache($car_number.'_'.$passage_info['village_id']))) {
                        $car_info = cache($car_number.'_'.$passage_info['village_id']);
                        if (!isset($car_info['end_time']) || $car_info['end_time'] <= $now_time) {
                            // 缓存中取不出来车辆信息或者截止时间过期了 避免出现问题 及时查询下最新的信息并缓存
                            $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no, 'village_id' => $passage_info['village_id']]);
                            cache($car_number.'_'.$passage_info['village_id'],$car_info);
                        }
                    }else {
                        $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no, 'village_id' => $passage_info['village_id']]);
                        cache($car_number.'_'.$passage_info['village_id'],$car_info);
                    }
                    $user_name  = empty($car_info['car_user_name']) ? '' : $car_info['car_user_name'];
                    $user_phone = empty($car_info['car_user_phone'])? '' : $car_info['car_user_phone'];
                    if (!$user_name && !$user_phone && !empty(cache('car_visitor_' . $car_number . '_' . $passage_info['village_id']))) {
                        $visitor_info = cache('car_visitor_' . $car_number . '_' . $passage_info['village_id']);
                        $user_name  = empty($visitor_info['visitor_name']) ? '' : $visitor_info['visitor_name'];
                        $user_phone = empty($visitor_info['visitor_phone']) ? '' : $visitor_info['visitor_phone'];
                        $uid        = empty($visitor_info['uid']) ? '' : $visitor_info['uid'];
                    } elseif (!$user_name && !$user_phone) {
                        $visitor_info = $db_house_visitor->get_one(['village_id' => $passage_info['village_id'], 'car_id' => $car_number], 'visitor_name, visitor_phone, uid');
                        cache('car_visitor_' . $car_number . '_' . $passage_info['village_id'], $visitor_info);
                        $user_name  = empty($visitor_info['visitor_name']) ? '' : $visitor_info['visitor_name'];
                        $user_phone = empty($visitor_info['visitor_phone']) ? '' : $visitor_info['visitor_phone'];
                        $uid        = empty($visitor_info['uid']) ? '' : $visitor_info['uid'];
                    } else {
                        $visitor_info = [];
                    }
                    if ($user_name) {
                        $car_access_record['user_name'] = $user_name;
                    }
                    if ($user_phone) {
                        $car_access_record['user_phone'] = $user_phone;
                    }
                    if (isset($uid) && $uid) {
                        $car_access_record['uid'] = $uid;
                    }

                    if ($passage_info['passage_direction'] == 1) {
                        if (!empty(cache($passage_info['village_id']))) {
                            $village_info= cache($passage_info['village_id']);
                        }else{
                            $village_info = $db_house_village->getOne($passage_info['village_id'], 'village_name');
                            cache($passage_info['village_id'],$village_info,86400);
                        }
                        $park_data = [];
                        $park_data['car_number'] = $log_info['car_number'];
                        $park_data['in_time'] = $now_time;
                        $park_data['order_id'] = uniqid();
                        $park_data['in_channel_id'] = $passage_info['id'];
                        $park_data['is_paid'] = 0;
                        $park_data['park_id'] = $passage_info['village_id'];
                        $park_data['park_sys_type'] = $park_sys_type;
                        $park_data['park_name'] = $village_info['village_name'];
                        $starttime = time() - 30;
                        $endtime = time() + 30;
                        $park_where = [
                            ['car_number', '=', $log_info['car_number']],
                            ['park_id', '=', $passage_info['village_id']],
                            ['in_time', '>=', $starttime],
                            ['in_time', '<=', $endtime],
                            ['del_time', '=', 0],
                        ];
                        $park_info_car = $db_in_park->getOne1($park_where);
                        if (!$park_info_car || !isset($park_info_car['id'])) {
                            $insert_id=$db_in_park->insertOne($park_data);
                        } else {
                            $insert_id = $park_info_car['id'];
                        }
                        $car_access_record['business_type'] = 0;
                        $car_access_record['business_id'] = $passage_info['village_id'];
                        $car_access_record['car_number'] = $log_info['car_number'];
                        $car_access_record['accessType'] = 1;
                        $car_access_record['accessTime'] = $now_time;
                        if ($log_info['open_type']==1){
                            $car_access_record['accessMode'] = 9;
                        }elseif ($log_info['open_type']==3){
                            $car_access_record['accessMode'] = 7;
                        }
                        $car_access_record['park_sys_type'] = $park_sys_type;
                        $car_access_record['is_out'] = 0;
                        $car_access_record['park_id'] = $passage_info['village_id'];
                        $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                        $car_access_record['order_id'] = date('YmdHis').rand(100,999);
                        $car_access_record['update_time'] = $now_time;
                        if (isset($insert_id)&&!empty($insert_id)) {
                            $car_access_record['from_id'] = $insert_id;
                        }
                        //fdump_api(['回调接口' . __LINE__,$car_access_record], 'add_park_info_2', 1);
                        $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                    }
                    if ($passage_info['passage_direction'] == 0) {
                        if (!empty(cache($passage_info['village_id']))) {
                            $village_info= cache($passage_info['village_id']);
                        }else{
                            $village_info = $db_house_village->getOne($passage_info['village_id'], 'village_name');
                            cache($passage_info['village_id'],$village_info,86400);
                        }
                        $whereInRecord = ['car_number' => $log_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0, 'del_time' => 0];
                        $in_park_pay_info = $db_in_park->getOne1($whereInRecord);
                        //  fdump_api([$passage_info,$in_park_pay_info],'open_gate_0519',1);
                        if (!empty($in_park_pay_info)) {
                            if (!empty($in_park_pay_info['pay_order_id'])) {
                                //  fdump_api([$in_park_pay_info['pay_order_id']],'open_gate_0519',1);
                                $park_temp_info = $db_house_village_parking_temp->getOne(['car_number' => $log_info['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1]);
                                $pay_info = $db_house_new_pay_order->get_one(['summary_id' => $in_park_pay_info['pay_order_id'], 'is_paid' => 1]);
                                //  fdump_api([$pay_info,$in_park_pay_info['pay_order_id']],'open_gate_0519',1);
                                $in_record_id = isset($park_temp_info['in_record_id']) && $park_temp_info['in_record_id'] ? $park_temp_info['in_record_id'] : 0;
                                $pay_time = isset($park_temp_info['pay_time']) && $park_temp_info['pay_time'] ? $park_temp_info['pay_time'] : 0;
                                ! $pay_time && $pay_time = isset($pay_info['pay_time']) && $pay_info['pay_time'] ? $pay_info['pay_time'] : time();
                                $is_paid = isset($park_temp_info['in_record_id']) && intval($park_temp_info['is_pay_scene']) === 0 ? 2 : 1;
                                if (!empty($pay_info)) {
                                    //写入车辆入场表
                                    $park_data = [];
                                    $park_data['out_time'] = $now_time;
                                    $park_data['is_out'] = 1;
                                    $park_data['is_paid'] = 1;
                                    $res_in=$db_in_park->saveOne(['car_number' => $log_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0], $park_data);
                                    fdump_api([$res_in,$log_info['car_number'],$passage_info['village_id']],'open_gate_0519',1);
                                    $out_data = [];
                                    $out_data['car_number'] = $log_info['car_number'];
                                    $out_data['park_sys_type'] = $park_sys_type;
                                    if (!empty($in_park_pay_info)) {
                                        $out_data['in_time'] = $in_park_pay_info['in_time'];
                                        $out_data['order_id'] = isset($in_park_pay_info['order_id']) && $in_park_pay_info['order_id'] ? $in_park_pay_info['order_id'] : '';
                                        $out_data['in_park_id'] = $in_park_pay_info['id'];
                                    }
                                    $out_data['out_time'] = $now_time;
                                    $out_data['park_id'] = $passage_info['village_id'];
                                    $out_data['total'] = $park_temp_info['price'];
                                    $out_data['pay_type'] = 'scancode';
                                    $starttime = time() - 30;
                                    $endtime = time() + 30;
                                    $park_where = [
                                        ['car_number', '=', $log_info['car_number']],
                                        ['park_id', '=', $passage_info['village_id']],
                                        ['out_time', '>=', $starttime],
                                        ['out_time', '<=', $endtime],
                                    ];
                                    //fdump_api([$park_where,$out_data],'open_gate_0519',1);
                                    $park_info_car = $db_out_park->getOne($park_where);
                                    //写入车辆出场表
                                    if (!$park_info_car || !isset($park_info_car['id'])) {
                                        $out_data['pay_order_id'] = $in_park_pay_info['pay_order_id'];
                                        $insert_id= $db_out_park->insertOne($out_data);
                                    } else {
                                        $insert_id = $park_info_car['id'];
                                    }

                                    $park_where = [
                                        ['car_number', '=', $log_info['car_number']],
                                        ['park_id', '=', $passage_info['village_id']],
                                        ['accessType', '=',1],
                                        ['is_out', '=', 0],
                                        ['del_time', '=', 0],
                                    ];
                                    $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                                    // fdump_api([$park_info_car111,$park_where],'open_gate_0519',1);
                                    $car_access_record['business_type'] = 0;
                                    $car_access_record['business_id'] = $passage_info['village_id'];
                                    $car_access_record['car_number'] = $log_info['car_number'];
                                    $car_access_record['accessType'] = 2;
                                    $car_access_record['coupon_id'] = isset($park_temp_info['coupon_id'])?$park_temp_info['coupon_id']:0;
                                    $car_access_record['park_time'] =$pay_info['pay_time']-$in_park_pay_info['in_time'] ;
                                    $car_access_record['total'] =$park_temp_info['price'];
                                    $car_access_record['accessTime'] = $now_time;
                                    if ($log_info['open_type']==2){
                                        $car_access_record['accessMode'] = 4;
                                    }elseif ($log_info['open_type']==3){
                                        if (empty($park_info_car111)){
                                            $car_access_record['exception_type'] = 2;
                                        }else{
                                            $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                                        }
                                        $car_access_record['accessMode'] = 7;
                                    }
                                    $car_access_record['park_sys_type'] = $park_sys_type;
                                    $car_access_record['is_out'] = 1;
                                    $car_access_record['park_id'] = $passage_info['village_id'];
                                    $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                                    $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                                    //  $car_access_record['total'] = 0;
                                    // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                                    // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                                    //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                                    $car_access_record['pay_type'] = $this->pay_type[6];
                                    $car_access_record['update_time'] = $now_time;
                                    $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                                    if (isset($insert_id)) {
                                        $car_access_record['from_id'] = $insert_id;
                                    }
                                    if (isset($in_park_pay_info['pay_order_id']) && $in_park_pay_info['pay_order_id']) {
                                        $car_access_record['pay_order_id'] = $in_park_pay_info['pay_order_id'];
                                    } elseif ($in_record_id) {
                                        $in_record_info = $db_house_village_car_access_record->getOne(['record_id' => $in_record_id], 'pay_order_id');
                                        $pay_order_id = isset($in_record_info['pay_order_id']) && $in_record_info['pay_order_id'] ? intval($in_record_info['pay_order_id']) : 0;
                                        $car_access_record['pay_order_id'] = $pay_order_id;
                                    }
                                    if (isset($pay_time) && $pay_time > 1) {
                                        $car_access_record['pay_time'] = $pay_time;
                                        $car_access_record['is_paid'] = $is_paid;
                                    }
                                    //fdump_api([$car_access_record],'open_gate_0519',1);
                                    $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                                    //fdump_api([$record_id,$car_access_record],'open_gate_0519',1);
                                }
                            }else{
                                $park_temp_info = $db_house_village_parking_temp->getOne(['car_number' => $log_info['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1]);
                                $pay_time = isset($park_temp_info['pay_time']) && $park_temp_info['pay_time'] ? $park_temp_info['pay_time'] : time();
                                $is_paid = isset($park_temp_info['in_record_id']) && intval($park_temp_info['is_pay_scene']) === 0 ? 2 : 1;
                                if (!empty($park_temp_info)) {
                                    $in_record_id = isset($park_temp_info['in_record_id']) && $park_temp_info['in_record_id'] ? $park_temp_info['in_record_id'] : 0;
                                    //写入车辆入场表
                                    $park_data = [];
                                    $park_data['out_time'] = $now_time;
                                    $park_data['is_out'] = 1;
                                    $park_data['is_paid'] = 1;
                                    $res_in=$db_in_park->saveOne(['car_number' => $log_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0], $park_data);
                                    //fdump_api([$res_in,$res_in,$log_info['car_number'],$passage_info['village_id']],'open_gate_0519',1);
                                    $out_data = [];
                                    $out_data['car_number'] = $log_info['car_number'];
                                    $out_data['park_sys_type'] = $park_sys_type;
                                    if (!empty($in_park_pay_info)) {
                                        $out_data['in_time'] = $in_park_pay_info['in_time'];
                                        $out_data['order_id'] = isset($in_park_pay_info['order_id']) && $in_park_pay_info['order_id'] ? $in_park_pay_info['order_id'] : '';
                                        $out_data['in_park_id'] = $in_park_pay_info['id'];
                                    }
                                    $out_data['out_time'] = $now_time;
                                    $out_data['park_id'] = $passage_info['village_id'];
                                    $out_data['total'] = $park_temp_info['price'];
                                    $out_data['pay_type'] = 'scancode';
                                    $starttime = time() - 30;
                                    $endtime = time() + 30;
                                    $park_where = [
                                        ['car_number', '=', $log_info['car_number']],
                                        ['park_id', '=', $passage_info['village_id']],
                                        ['out_time', '>=', $starttime],
                                        ['out_time', '<=', $endtime],
                                    ];
                                    fdump_api([$park_where,$out_data],'open_gate_0519',1);
                                    $park_info_car = $db_out_park->getOne($park_where);
                                    //写入车辆入场表
                                    if (!$park_info_car || !isset($park_info_car['id'])) {
                                        $insert_id= $db_out_park->insertOne($out_data);
                                    } else {
                                        $insert_id = $park_info_car['id'];
                                    }

                                    $park_where = [
                                        ['car_number', '=', $log_info['car_number']],
                                        ['park_id', '=', $passage_info['village_id']],
                                        ['accessType', '=',1],
                                        ['is_out', '=', 0],
                                        ['del_time', '=', 0],
                                    ];
                                    $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                                    // fdump_api([$park_info_car111,$park_where],'open_gate_0519',1);
                                    $car_access_record['business_type'] = 0;
                                    $car_access_record['business_id'] = $passage_info['village_id'];
                                    $car_access_record['car_number'] = $log_info['car_number'];
                                    $car_access_record['accessType'] = 2;
                                    $car_access_record['coupon_id'] = isset($park_temp_info['coupon_id'])?$park_temp_info['coupon_id']:0;
                                    $car_access_record['park_time'] =$park_temp_info['pay_time']-$in_park_pay_info['in_time'] ;
                                    $car_access_record['total'] =$park_temp_info['price'];
                                    $car_access_record['accessTime'] = $now_time;
                                    if ($log_info['open_type']==2){
                                        $car_access_record['accessMode'] = 4;
                                    }elseif ($log_info['open_type']==3){
                                        if (empty($park_info_car111)){
                                            $car_access_record['exception_type'] = 2;
                                        }else{
                                            $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                                        }
                                        $car_access_record['accessMode'] = 7;
                                    }
                                    $car_access_record['park_sys_type'] = $park_sys_type;
                                    $car_access_record['is_out'] = 1;
                                    $car_access_record['park_id'] = $passage_info['village_id'];
                                    $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                                    $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                                    //  $car_access_record['total'] = 0;
                                    // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                                    // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                                    //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                                    $car_access_record['pay_type'] = $this->pay_type[6];
                                    $car_access_record['update_time'] = $now_time;
                                    $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                                    if (isset($insert_id)) {
                                        $car_access_record['from_id'] = $insert_id;
                                    }
                                    if ($in_record_id) {
                                        $in_record_info = $db_house_village_car_access_record->getOne(['record_id' => $in_record_id], 'pay_order_id');
                                        $pay_order_id = isset($in_record_info['pay_order_id']) && $in_record_info['pay_order_id'] ? intval($in_record_info['pay_order_id']) : 0;
                                        $car_access_record['pay_order_id'] = $pay_order_id;
                                    }
                                    if ($pay_time > 1) {
                                        $car_access_record['pay_time'] = $pay_time;
                                        $car_access_record['is_paid'] = $is_paid;
                                    }
                                    // fdump_api([$car_access_record],'open_gate_0519',1);
                                    $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                                    fdump_api([$record_id,$car_access_record],'open_gate_0519',1);
                                }
                            }
                        }else{
                            $out_data = [];
                            $out_data['car_number'] = $log_info['car_number'];
                            $out_data['park_sys_type'] = $park_sys_type;
                            $out_data['out_time'] = $now_time;
                            $out_data['park_id'] = $passage_info['village_id'];
                            //  $out_data['is_paid'] = 1;
                            $out_data['total'] = 0;
                            $out_data['pay_type'] = 'scancode';
                            $starttime = time() - 30;
                            $endtime = time() + 30;
                            $park_where = [
                                ['car_number', '=', $log_info['car_number']],
                                ['park_id', '=', $passage_info['village_id']],
                                ['out_time', '>=', $starttime],
                                ['out_time', '<=', $endtime],
                            ];
                            $park_info_car = $db_out_park->getOne($park_where);
                            fdump_api([$park_info_car,$park_where],'open_gate_0519',1);
                            //写入车辆出场表
                            if (!$park_info_car || !isset($park_info_car['id'])) {
                                $insert_id= $db_out_park->insertOne($out_data);
                            } else {
                                $insert_id = $park_info_car['id'];
                            }
                            $park_where = [
                                ['car_number', '=', $log_info['car_number']],
                                ['park_id', '=', $passage_info['village_id']],
                                ['accessType', '=',1],
                                ['is_out', '=', 0],
                                ['del_time', '=', 0],
                            ];
                            $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                            fdump_api([$park_info_car111,$park_where],'open_gate_0519',1);
                            $car_access_record['business_type'] = 0;
                            $car_access_record['business_id'] = $passage_info['village_id'];
                            $car_access_record['car_number'] = $log_info['car_number'];
                            $car_access_record['accessType'] = 2;
                            $car_access_record['accessTime'] = $now_time;
                            if ($log_info['open_type']==2){
                                $car_access_record['accessMode'] = 4;
                            }elseif ($log_info['open_type']==3){
                                if (empty($park_info_car111)){
                                    $car_access_record['exception_type'] = 2;
                                }else{
                                    $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                                }
                                $car_access_record['accessMode'] = 7;
                            }
                            $car_access_record['park_sys_type'] = $park_sys_type;
                            $car_access_record['is_out'] = 1;
                            $car_access_record['park_id'] = $passage_info['village_id'];
                            $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                            if (isset($park_info_car111['order_id'])&&!empty($park_info_car111['order_id'])){
                                $car_access_record['order_id'] = $park_info_car111['order_id'];
                            }
                            $car_access_record['total'] = 0;
                            // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                            // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                            //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                            $car_access_record['pay_type'] = $this->pay_type[5];
                            $car_access_record['update_time'] = $now_time;
                            $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                            if (isset($insert_id)) {
                                $car_access_record['from_id'] = $insert_id;
                            }
                            // fdump_api([$car_access_record],'open_gate_0519',1);
                            $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                            // fdump_api([$record_id,$car_access_record],'open_gate_0519',1);
                        }
                    }
                }
                $db_park_open_log->delOne(['id'=>$log_info['id']]);
                $res['data']=true;
            }
            fdump_api([$res],'showscreen_info_'.date('H'),1);
            //查询支付结果
            $res['pay_info']=$this->getParkPayRecord($data['serialno']);
            fdump_api([$res,$res['pay_info']],'showscreen_info_'.date('H'),1);
        }
        return $res;
    }

    public function addA11Park($data,$log_info,$now_time){
        $db_park_open_log=new ParkOpenLog();
        $db_in_park = new InPark();
        $db_out_park = new OutPark();
        $db_park_passage = new ParkPassage();
        $db_house_village = new HouseVillage();
        $db_house_village_car_access_record = new HouseVillageCarAccessRecord();
        $db_house_visitor = new HouseVillageVisitor();
        $db_house_new_pay_order = new HouseNewPayOrder();
        $db_house_village_parking_temp=new HouseVillageParkingTemp();
        $serialno = isset($data['serialno']) && $data['serialno'] ? $data['serialno'] : '';
        if (!empty($log_info['car_number'])){
            $car_number = $log_info['car_number'];
            //查询设备
            $passage_info = $db_park_passage->getFind(['device_number' => $serialno, 'status' => 1]);
            // 记录车辆进入信息
            $car_access_record = [];
            $car_access_record['channel_id']=$passage_info['id'];
            $car_access_record['channel_number']=$passage_info['channel_number'];
            $car_access_record['channel_name']=$passage_info['passage_name'];
            if(isset($data['park_car_type']) && !empty($data['park_car_type'])) {
                $car_access_record['park_car_type'] = $data['park_car_type'];
            }else{
                $car_access_record['park_car_type'] = '临时车A';
            }
            $db_house_village_parking_garage=new HouseVillageParkingGarage();
            $garage_id=0;
            if (!empty($passage_info['passage_area'])&&$passage_info['area_type']==2){
                $garage_id=$passage_info['passage_area'];
            }
            if(isset($passage_info['garage_id']) && $passage_info['garage_id']>0){
                $garage_id=$passage_info['garage_id'];
            }
            $garage_info=array();
            $is_real_garage=1;
            if($garage_id>0){
                $garage_info=$db_house_village_parking_garage->getOne(['garage_id'=>$garage_id]);
                if($garage_info && !$garage_info->isEmpty()){
                    $garage_info=$garage_info->toArray();
                    if($garage_info['fid']>0 && $garage_info['fid']==$garage_info['garage_id']){
                        $garage_info['fid']=0;
                    }

                    if($garage_info['fid']>0 && $garage_info['fid']!=$garage_info['garage_id'] ){
                        $is_real_garage=0;
                    }
                }
            }
            
            if ($passage_info['passage_direction'] == 1) {
                $village_info = $db_house_village->getOne($passage_info['village_id'], 'village_name');
                $park_data = [];
                $park_data['car_number'] = $log_info['car_number'];
                $park_data['in_time'] = $now_time;
                $park_data['order_id'] = uniqid();
                $park_data['in_channel_id'] = $passage_info['id'];
                $park_data['is_paid'] = 0;
                $park_data['park_id'] = $passage_info['village_id'];
                $park_data['park_sys_type'] = 'A11';
                $park_data['park_name'] = $village_info['village_name'];
                $starttime = time() - 30;
                $endtime = time() + 30;
                $park_where = [
                    ['car_number', '=', $log_info['car_number']],
                    ['park_id', '=', $passage_info['village_id']],
                    ['in_time', '>=', $starttime],
                    ['in_time', '<=', $endtime],
                    ['del_time', '=', 0],
                ];
                $park_info_car = $db_in_park->getOne1($park_where);
                $park_info_car_arr = $park_info_car && !is_array($park_info_car) ? $park_info_car->toArray() : $park_info_car;
                if ($serialno) {
                    fdump_api(['入场信息[入口通道]' => $serialno, 'park_info_car' => $park_info_car_arr],'park_temp/heartbeat_'.$serialno.'_log',1);
                }
                fdump_api(['入场信息[入口通道]'=>$car_number,'serialno'=>$serialno,'park_sys_type'=>'A11', 'park_info_car'=>$park_info_car_arr],'park_temp/log_'.$car_number,1);
                if (empty($park_info_car)) {
                    $insert_id=$db_in_park->insertOne($park_data);
                }
                $res = $db_house_visitor->get_one(['village_id' => $passage_info['village_id'], 'car_id' => $log_info['car_number']], '*');
                $car_access_record['uid']=0;
                if (!empty($res)){
                    $car_access_record['user_name'] =isset($res['visitor_name']) && !empty($res['visitor_name']) ? $res['visitor_name']:'';
                    $car_access_record['user_phone'] =isset($res['visitor_phone']) && !empty($res['visitor_phone']) ? $res['visitor_phone']:'';
                    $car_access_record['uid'] =isset($res['uid']) && !empty($res['uid']) ? $res['uid']:0;
                }
                $car_access_record['business_type'] = 0;
                $car_access_record['business_id'] = $passage_info['village_id'];
                $car_access_record['car_number'] = $log_info['car_number'];
                $car_access_record['accessType'] = 1;
                $car_access_record['accessTime'] = $now_time;
                if ($log_info['open_type']==1){
                    $car_access_record['accessMode'] = 9;
                }elseif ($log_info['open_type']==3){
                    $car_access_record['accessMode'] = 7;
                }
                $car_access_record['park_sys_type'] = 'A11';
                $car_access_record['is_out'] = 0;
                $car_access_record['park_id'] = $passage_info['village_id'];
                $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                $car_access_record['order_id'] = date('YmdHis').rand(100,999);
                $car_access_record['update_time'] = $now_time;
                if (isset($insert_id)&&!empty($insert_id)) {
                    $car_access_record['from_id'] = $insert_id;
                }
                $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                //将此条之前的 都改掉
                if($record_id>0 && $is_real_garage>0) {
                    $wherexArr = [];
                    $wherexArr[]=['record_id','<',$record_id];
                    $wherexArr[] = ['car_number', '=', $car_number];
                    $wherexArr[] = ['is_out', '=', 0];
                    $wherexArr[] = ['business_id', '=', $passage_info['village_id']];
                    $db_house_village_car_access_record->saveOne($wherexArr, ['is_out' => 1, 'update_time' => $now_time]);
                }
                if ($serialno) {
                    fdump_api(['记录入场信息' => $serialno, 'car_access_record' => $car_access_record, 'record_id' => $record_id],'park_temp/heartbeat_'.$serialno.'_log',1);
                }
                fdump_api(['记录入场信息[入口通道]'=>$car_number,'serialno'=>$serialno,'park_sys_type'=>'A11', 'car_access_record' => $car_access_record, 'record_id' => $record_id],'park_temp/log_'.$car_number,1);
            }
            if ($passage_info['passage_direction'] == 0) {
                $village_info = $db_house_village->getOne($passage_info['village_id'], 'village_name');
                $whereInRecord = ['car_number' => $log_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => 'A11', 'is_out' => 0, 'del_time' => 0];
                $in_park_pay_info = $db_in_park->getOne1($whereInRecord);

                $in_park_pay_info_arr = $in_park_pay_info && !is_array($in_park_pay_info) ? $in_park_pay_info->toArray() : $in_park_pay_info;
                $log_info_arr = $log_info && !is_array($log_info) ? $log_info->toArray() : $log_info;
                if ($serialno) {
                    fdump_api(['入场信息[出口通道]' => $serialno, 'log_info' => $log_info_arr, 'in_park_pay_info' => $in_park_pay_info_arr],'park_temp/heartbeat_'.$serialno.'_log',1);
                }
                fdump_api(['入场信息[出口通道]' => $car_number, 'serialno' => $serialno, 'park_sys_type' => 'A11', 'log_info' => $log_info_arr, 'in_park_pay_info' => $in_park_pay_info_arr], 'park_temp/log_' . $car_number, 1);
                $car_access_record_where = [
                    ['car_number', '=', $car_number],
                    ['park_id', '=', $passage_info['village_id']],
                    ['accessType', '=', 1],
                    ['del_time', '=', 0],
                    ['user_phone', '<>', ''],
                ];
                $car_user_phone = '';
                $car_user_name = '';
                $uid = 0;
                $tmp_car_access_record = $db_house_village_car_access_record->getOne($car_access_record_where);
                if ($tmp_car_access_record && !is_array($tmp_car_access_record) && !$tmp_car_access_record->isEmpty()) {
                    $tmp_car_access_record = $tmp_car_access_record->toArray();
                    $car_user_phone = $tmp_car_access_record['user_phone'];
                    $car_user_name = $tmp_car_access_record['user_name'];
                    $uid = $tmp_car_access_record['uid'] ? $tmp_car_access_record['uid'] : 0;
                    $car_access_record['park_car_type'] = $tmp_car_access_record['park_car_type'];
                }
                if(empty($car_user_phone)){
                    $res_visitor = $db_house_visitor->get_one(['village_id' => $passage_info['village_id'], 'car_id' => $car_number], '*');
                    if (!empty($res_visitor)){
                        $car_user_phone =isset($res_visitor['visitor_phone']) && !empty($res_visitor['visitor_phone']) ? $res_visitor['visitor_phone']:'';
                        if($uid<1 && isset($res_visitor['uid']) && !empty($res_visitor['uid'])){
                            $uid=$res_visitor['uid'];
                        }
                        if(empty($car_user_name) && isset($res_visitor['visitor_name']) && !empty($res_visitor['visitor_name'])){
                            $car_user_name=$res_visitor['visitor_name'];
                        }
                    }
                }
                $car_access_record['user_phone'] = $car_user_phone;
                $car_access_record['user_name'] = $car_user_name;
                $car_access_record['uid'] = $uid;
                if (!empty($in_park_pay_info)) {
                    if (!empty($in_park_pay_info['pay_order_id'])) {

                        $park_temp_info = $db_house_village_parking_temp->getOne(['car_number' => $log_info['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1]);
                        $pay_info = $db_house_new_pay_order->get_one(['summary_id' => $in_park_pay_info['pay_order_id'], 'is_paid' => 1]);

                        $park_temp_info_arr = $park_temp_info && !is_array($park_temp_info) ? $park_temp_info->toArray() : $park_temp_info;
                        $pay_info_arr = $pay_info && !is_array($pay_info) ? $pay_info->toArray() : $pay_info;
                        if ($serialno) {
                            fdump_api(['临时信息和支付信息[出口通道]' => $serialno, 'park_temp_info' => $park_temp_info_arr, 'pay_info' => $pay_info_arr],'park_temp/heartbeat_'.$serialno.'_log',1);
                        }
                        fdump_api(['临时信息和支付信息[出口通道]'=>$car_number,'serialno'=>$serialno,'park_sys_type'=>'A11', 'park_temp_info' => $park_temp_info_arr, 'pay_info' => $pay_info_arr],'park_temp/log_'.$car_number,1);


                        if (!empty($pay_info)) {
                            //写入车辆入场表
                            $park_data = [];
                            $park_data['out_time'] = $now_time;
                            $park_data['is_out'] = 1;
                            $park_data['is_paid'] = 1;
                            $res_in=$db_in_park->saveOne(['car_number' => $log_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => 'A11', 'is_out' => 0], $park_data);
                            fdump_api([$res_in,$res_in,$log_info['car_number'],$passage_info['village_id']],'open_gate_0519',1);
                            $out_data = [];
                            $out_data['car_number'] = $log_info['car_number'];
                            if (!empty($in_park_pay_info)) {
                                $out_data['in_time'] = $in_park_pay_info['in_time'];
                                $out_data['order_id'] = $in_park_pay_info['order_id'];
                            }
                            $out_data['out_time'] = $now_time;
                            $out_data['park_id'] = $passage_info['village_id'];
                            $out_data['total'] = $park_temp_info['price'];
                            $out_data['pay_type'] = 'scancode';
                            $starttime = time() - 30;
                            $endtime = time() + 30;
                            $park_where = [
                                ['car_number', '=', $log_info['car_number']],
                                ['park_id', '=', $passage_info['village_id']],
                                ['out_time', '>=', $starttime],
                                ['out_time', '<=', $endtime],
                            ];
                            $park_info_car = $db_out_park->getOne($park_where);
                            //写入车辆入场表
                            if (empty($park_info_car)) {
                                $insert_id= $db_out_park->insertOne($out_data);
                            }

                            $park_where = [
                                ['car_number', '=', $log_info['car_number']],
                                ['park_id', '=', $passage_info['village_id']],
                                ['accessType', '=',1],
                                ['is_out', '=', 0],
                                ['del_time', '=', 0],
                            ];
                            $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                            // fdump_api([$park_info_car111,$park_where],'open_gate_0519',1);
                            $car_access_record['business_type'] = 0;
                            $car_access_record['business_id'] = $passage_info['village_id'];
                            $car_access_record['car_number'] = $log_info['car_number'];
                            $car_access_record['accessType'] = 2;
                            $car_access_record['coupon_id'] = isset($park_temp_info['coupon_id'])?$park_temp_info['coupon_id']:0;
                            $car_access_record['park_time'] =$pay_info['pay_time']-$in_park_pay_info['in_time'] ;
                            $car_access_record['total'] =$park_temp_info['price'];
                            $car_access_record['accessTime'] = $now_time;
                            if ($log_info['open_type']==2){
                                $car_access_record['accessMode'] = 4;
                            }elseif ($log_info['open_type']==3){
                                if (empty($park_info_car111)){
                                    $car_access_record['exception_type'] = 2;
                                }else{
                                    $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                                }
                                $car_access_record['accessMode'] = 7;
                            }
                            $car_access_record['park_sys_type'] = 'A11';
                            $car_access_record['is_out'] = 1;
                            $car_access_record['park_id'] = $passage_info['village_id'];
                            $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                            $car_access_record['order_id'] = $park_info_car111['order_id'];
                            //  $car_access_record['total'] = 0;
                            // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                            // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                            //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                            $car_access_record['pay_type'] = $this->pay_type[6];
                            $car_access_record['update_time'] = $now_time;
                            $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                            if (isset($insert_id)) {
                                $car_access_record['from_id'] = $insert_id;
                            }
                            //fdump_api([$car_access_record],'open_gate_0519',1);
                            $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                            //将此条之前的 都改掉
                            if($record_id>0 && $is_real_garage>0) {
                                $wherexArr = [];
                                $wherexArr[]=['record_id','<',$record_id];
                                $wherexArr[] = ['car_number', '=', $car_number];
                                $wherexArr[] = ['is_out', '=', 0];
                                $wherexArr[] = ['business_id', '=', $passage_info['village_id']];
                                $db_house_village_car_access_record->saveOne($wherexArr, ['is_out' => 1, 'update_time' => $now_time]);
                            }
                            //fdump_api([$record_id,$car_access_record],'open_gate_0519',1);
                        }
                    }else{
                        $park_temp_info = $db_house_village_parking_temp->getOne(['car_number' => $log_info['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1]);

                        $park_temp_info_arr = $park_temp_info && !is_array($park_temp_info) ? $park_temp_info->toArray() : $park_temp_info;
                        if ($serialno) {
                            fdump_api(['临时信息[出口通道]' => $serialno, 'park_temp_info' => $park_temp_info_arr],'park_temp/heartbeat_'.$serialno.'_log',1);
                        }
                        fdump_api(['临时信息[出口通道]'=>$car_number,'serialno'=>$serialno,'park_sys_type'=>'A11', 'park_temp_info' => $park_temp_info_arr],'park_temp/log_'.$car_number,1);

                        if (!empty($park_temp_info)) {
                            //写入车辆入场表
                            $park_data = [];
                            $park_data['out_time'] = $now_time;
                            $park_data['is_out'] = 1;
                            $park_data['is_paid'] = 1;
                            $res_in=$db_in_park->saveOne(['car_number' => $log_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => 'A11', 'is_out' => 0], $park_data);
                            //fdump_api([$res_in,$res_in,$log_info['car_number'],$passage_info['village_id']],'open_gate_0519',1);
                            $out_data = [];
                            $out_data['car_number'] = $log_info['car_number'];
                            if (!empty($in_park_pay_info)) {
                                $out_data['in_time'] = $in_park_pay_info['in_time'];
                                $out_data['order_id'] = $in_park_pay_info['order_id'];
                            }
                            $out_data['out_time'] = $now_time;
                            $out_data['park_id'] = $passage_info['village_id'];
                            $out_data['pay_type'] = 'scancode';
                            $out_data['total'] = $park_temp_info['price'];
                            $out_data['pay_type'] = 'scancode';
                            $starttime = time() - 30;
                            $endtime = time() + 30;
                            $park_where = [
                                ['car_number', '=', $log_info['car_number']],
                                ['park_id', '=', $passage_info['village_id']],
                                ['out_time', '>=', $starttime],
                                ['out_time', '<=', $endtime],
                            ];
                            fdump_api([$park_where,$out_data],'open_gate_0519',1);
                            $park_info_car = $db_out_park->getOne($park_where);
                            //写入车辆入场表
                            if (empty($park_info_car)) {
                                $insert_id= $db_out_park->insertOne($out_data);
                            }

                            $park_where = [
                                ['car_number', '=', $log_info['car_number']],
                                ['park_id', '=', $passage_info['village_id']],
                                ['accessType', '=',1],
                                ['is_out', '=', 0],
                                ['del_time', '=', 0],
                            ];
                            $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                            // fdump_api([$park_info_car111,$park_where],'open_gate_0519',1);
                            $car_access_record['business_type'] = 0;
                            $car_access_record['business_id'] = $passage_info['village_id'];
                            $car_access_record['car_number'] = $log_info['car_number'];
                            $car_access_record['accessType'] = 2;
                            $car_access_record['coupon_id'] = isset($park_temp_info['coupon_id'])?$park_temp_info['coupon_id']:0;
                            $car_access_record['park_time'] =$park_temp_info['pay_time']-$in_park_pay_info['in_time'] ;
                            $car_access_record['total'] =$park_temp_info['price'];
                            $car_access_record['accessTime'] = $now_time;
                            if ($log_info['open_type']==2){
                                $car_access_record['accessMode'] = 4;
                            }elseif ($log_info['open_type']==3){
                                if (empty($park_info_car111)){
                                    $car_access_record['exception_type'] = 2;
                                }else{
                                    $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                                }
                                $car_access_record['accessMode'] = 7;
                            }
                            $car_access_record['park_sys_type'] = 'A11';
                            $car_access_record['is_out'] = 1;
                            $car_access_record['park_id'] = $passage_info['village_id'];
                            $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                            $car_access_record['order_id'] = $park_info_car111['order_id'];
                            //  $car_access_record['total'] = 0;
                            // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                            // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                            //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                            $car_access_record['pay_type'] = $this->pay_type[6];
                            $car_access_record['update_time'] = $now_time;
                            $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                            if (isset($insert_id)) {
                                $car_access_record['from_id'] = $insert_id;
                            }
                            // fdump_api([$car_access_record],'open_gate_0519',1);
                            $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                            //将此条之前的 都改掉
                            if($record_id>0 && $is_real_garage>0) {
                                $wherexArr = [];
                                $wherexArr[]=['record_id','<',$record_id];
                                $wherexArr[] = ['car_number', '=', $car_number];
                                $wherexArr[] = ['is_out', '=', 0];
                                $wherexArr[] = ['business_id', '=', $passage_info['village_id']];
                                $db_house_village_car_access_record->saveOne($wherexArr, ['is_out' => 1, 'update_time' => $now_time]);
                            }
                            fdump_api([$record_id,$car_access_record],'open_gate_0519',1);
                        }
                    }
                }else{
                    if ($serialno) {
                        fdump_api(['无入场记录[出口通道]' => $serialno],'park_temp/heartbeat_'.$serialno.'_log',1);
                    }
                    fdump_api(['无入场记录[出口通道]'=>$car_number,'serialno'=>$serialno,'park_sys_type'=>'A11'],'park_temp/log_'.$car_number,1);

                    $out_data = [];
                    $out_data['car_number'] = $log_info['car_number'];
                    $out_data['out_time'] = $now_time;
                    $out_data['park_id'] = $passage_info['village_id'];
                    $out_data['total'] = 0;
                    $out_data['pay_type'] = 'scancode';
                    //  $out_data['is_paid'] = 1;
                    $out_data['total'] = 0;
                    $out_data['pay_type'] = 'scancode';
                    $starttime = time() - 30;
                    $endtime = time() + 30;
                    $park_where = [
                        ['car_number', '=', $log_info['car_number']],
                        ['park_id', '=', $passage_info['village_id']],
                        ['out_time', '>=', $starttime],
                        ['out_time', '<=', $endtime],
                    ];
                    $park_info_car = $db_out_park->getOne($park_where);
                    fdump_api([$park_info_car,$park_where],'open_gate_0519',1);
                    //写入车辆入场表
                    if (empty($park_info_car)) {
                        $db_out_park->insertOne($out_data);
                    }
                    $park_where = [
                        ['car_number', '=', $log_info['car_number']],
                        ['park_id', '=', $passage_info['village_id']],
                        ['accessType', '=',1],
                        ['is_out', '=', 0],
                        ['del_time', '=', 0],
                    ];
                    $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                    fdump_api([$park_info_car111,$park_where],'open_gate_0519',1);
                    $car_access_record['business_type'] = 0;
                    $car_access_record['business_id'] = $passage_info['village_id'];
                    $car_access_record['car_number'] = $log_info['car_number'];
                    $car_access_record['accessType'] = 2;
                    $car_access_record['accessTime'] = $now_time;
                    if ($log_info['open_type']==2){
                        $car_access_record['accessMode'] = 4;
                    }elseif ($log_info['open_type']==3){
                        if (empty($park_info_car111)){
                            $car_access_record['exception_type'] = 2;
                        }else{
                            $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                        }
                        $car_access_record['accessMode'] = 7;
                    }
                    $car_access_record['park_sys_type'] = 'A11';
                    $car_access_record['is_out'] = 1;
                    $car_access_record['park_id'] = $passage_info['village_id'];
                    $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                    if (isset($park_info_car111['order_id'])&&!empty($park_info_car111['order_id'])){
                        $car_access_record['order_id'] = $park_info_car111['order_id'];
                    }
                    $car_access_record['total'] = 0;
                    // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                    // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                    //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                    $car_access_record['pay_type'] = $this->pay_type[5];
                    $car_access_record['update_time'] = $now_time;
                    $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                    if (isset($insert_id)) {
                        $car_access_record['from_id'] = $insert_id;
                    }
                    // fdump_api([$car_access_record],'open_gate_0519',1);
                    $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                    //将此条之前的 都改掉
                    if($record_id>0 && $is_real_garage>0) {
                        $wherexArr = [];
                        $wherexArr[]=['record_id','<',$record_id];
                        $wherexArr[] = ['car_number', '=', $car_number];
                        $wherexArr[] = ['is_out', '=', 0];
                        $wherexArr[] = ['business_id', '=', $passage_info['village_id']];
                        $db_house_village_car_access_record->saveOne($wherexArr, ['is_out' => 1, 'update_time' => $now_time]);
                    }
                    // fdump_api([$record_id,$car_access_record],'open_gate_0519',1);
                }
            }
        }

        $res=true;
        return $res;
    }

    /**
     * 收银台车场车位号/车牌号模糊搜索
     * User: zhanghan
     * Date: 2022/1/5
     * Time: 14:19
     * @param $param
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getVillageParkingSearchList($param){
        $where = [];
        if($param['option_type'] == 1){ // 车位号
            $where[] = ['pp.village_id','=',$param['village_id']];
            $where[] = ['pp.position_num','like','%'.$param['search_keyword'].'%'];
            $data = $this->parkingPositionModel->getLists($where,'distinct position_num as text',0);
        }else if ($param['option_type'] == 2){ // 车牌号
            $where[] = ['village_id','=',$param['village_id']];
            $where[] = ['car_number','like','%'.$param['search_keyword'].'%'];
            $data = $this->parkingCarModel->getHouseVillageParkingCarLists($where,'distinct car_number as text',0);
        }
        return $data;
    }

    //todo  获取小区停车配置项
    public function getVillageParkConfig($village_id,$field=true){
        $info = (new HouseVillageParkConfig())->getFind(['village_id' => $village_id],$field);
        if ($info && !$info->isEmpty()) {
            $info = $info->toArray();
        }else{
            $info=[];
        }
        return $info;
    }

    //todo 针对异步交互停车设备处理
    public function getVillageParkType($info,$car_number){
        if(empty($car_number)){
            throw new Exception('缺少车牌号');
        }
        $result=(new D6Service())->addQueryCarCost($info['village_id'],$car_number);
        if(!$result['error']){
            throw new Exception($result['msg']);
        }
        $data['is_async']=true;
        $data['temp_id']=$result['data']['temp_id'];
        $data['duration']=5;
        $data['interval']=1;
        return $data;
    }

    //todo 异步 定时查询
    public function timingQuery($param){
        $HouseVillageParkingTemp=new HouseVillageParkingTemp();
        $HouseVillage=new HouseVillage();
        $village_park_config=$this->getVillageParkConfig($param['village_id'],'park_sys_type,park_versions');
        if(!$village_park_config){
            throw new Exception('该小区暂未配置');
        }
        if(intval($village_park_config['park_versions']) != 2){
            throw new Exception('请在小区后台开启智慧停车');
        }
        $village_info=$HouseVillage->getOne($param['village_id'],'village_name');
        if (!$village_info || $village_info->isEmpty()) {
            throw new Exception('该数据异常，请返回/刷新页面');
        }
        $where[]=['is_out_park', '=', 0];
        $where[]=['status', '=', 0];
        if ($param['car_number']) {
            $where[]=['car_number', '=', $param['car_number']];
        }
        if(strpos($param['query_order_no'],'query_price_') !== false){
            $query_order_no = str_replace('query_price_','',$param['query_order_no']);
            $where[]=['id', '=', $query_order_no];
        }
        if($village_park_config['park_sys_type'] == 'D6'){
            $where[]=['id', '=', $param['query_order_no']];
        }
        $parking_temp=$HouseVillageParkingTemp->getFind($where,'duration,price,in_time,state,errmsg,order_id');
        $status=false;
        $data=[];
        $pay_money=0;
        if ($parking_temp && !$parking_temp->isEmpty()) {
            $parking_temp = $parking_temp->toArray();
            $hour = $day = 0;
            $duration = $parking_temp['duration'] ? $parking_temp['duration'] : 0;
            if ($duration>=1440) {
                $day = intval($duration/1440);
                $duration = $duration - $day*1440;
            }
            if ($duration>60) {
                $hour = intval($duration/60);
                $duration = $duration - $hour*60;
            }
            $minute = $duration;
            $duration_msg = '';
            if ($day) {
                $duration_msg .=$day.'天 ';
            }
            if ($hour) {
                $duration_msg .=$hour.'小时';
            }
            if ($minute) {
                $duration_msg .=$minute.'分钟';
            }
            $price=floatval($parking_temp['price'])>0 ? $parking_temp['price']:0;
            $in_time=$parking_temp['in_time'] ? date('Y-m-d H:i:s',$parking_temp['in_time']) : '';
            if($village_park_config['park_sys_type'] == 'D6'){
                if($parking_temp['state'] == 1 && !empty($parking_temp['errmsg'])){
                    throw new Exception($parking_temp['errmsg']);
                }
                $data=[
                    'car_number'=>$param['car_number'],
                    'total_money'=>$price,
                    'parking_duration'=>$duration_msg,
                    'in_time'=>$in_time,
                    'order_no'=>$parking_temp['order_id'],
                    'park_name'=>$village_info['village_name'],
                    'pay_time'=>date('Y-m-d H:i:s',time()),
                    'pay_money'=>$price
                ];
                if(!empty($duration_msg)){
                    $status=true;
                    $pay_money=$price;
                }
            }
        }
        $listtmp=$this->assembleOrderData($data);
        $list=array();
        $list['top']=$listtmp['top'];
        $list['middle']=$listtmp['middle'];
        $list['bottom']=$listtmp['bottom'];
        $pay_list1=$listtmp['pay_list1'];
        $pay_list2=$listtmp['pay_list2'];
        $pay_list3=$listtmp['pay_list3'];
        $pay_list4=$listtmp['pay_list4'];
        return ['status'=>$status,'list'=>$list,'pay_list1'=>$pay_list1,'pay_list2'=>$pay_list2,'pay_list3'=>$pay_list3,'pay_list4'=>$pay_list4,'pay_money'=>$pay_money];
    }

    //todo 组装停车订单数据
    public function assembleOrderData($param=[]){
        $top=$middle=$bottom=[];
        $pay_list1 = [];
        $pay_list2 = [];
        $pay_list3 = [];
        $pay_list4 = [];
        if(isset($param['car_number'])){
            $top[]=['title'=>'车牌号','val'=>$param['car_number'],'color'=>''];
            $pay_list1[]=['title'=>'车牌号','val'=>$param['car_number'],'color'=>''];
        }
        if(isset($param['total_money'])){
            $top[]=['title'=>'应付金额','val'=>'￥'.$param['total_money'],'color'=>''];
            $pay_list1[]=['title'=>'应付金额','val'=>$param['total_money'],'color'=>''];
        }
        if(isset($param['parking_duration'])){
            $top[]=['title'=>'停车时间','val'=>$param['parking_duration'],'color'=>''];
            $pay_list1[]=['title'=>'停车时间','val'=>$param['parking_duration'],'color'=>''];
        }

        if(isset($param['in_time'])){
            $middle[]=['title'=>'入场时间','val'=>$param['in_time'],'color'=>''];
            $pay_list2[]=['title'=>'入场时间','val'=>$param['in_time'],'color'=>''];
        }

        if(isset($param['order_no'])){
            $bottom[]=['title'=>'订单编号','val'=>$param['order_no'],'color'=>''];
            $pay_list3[]=['title'=>'订单编号','val'=>$param['order_no'],'color'=>''];
        }
        if(isset($param['park_name'])){
            $bottom[]=['title'=>'车场名称','val'=>$param['park_name'],'color'=>''];
            $pay_list3[]=['title'=>'车场名称','val'=>$param['park_name'],'color'=>''];
        }
        if(isset($param['pay_time'])){
            $bottom[]=['title'=>'缴费时间','val'=>$param['pay_time'],'color'=>''];
            $pay_list3[]=['title'=>'缴费时间','val'=>$param['pay_time'],'color'=>''];
        }
        if(isset($param['total_money'])){
            $bottom[]=['title'=>'应付金额','val'=>'￥'.$param['total_money'],'color'=>''];
            $pay_list4[]=['title'=>'应付金额','val'=>$param['total_money'],'color'=>''];
        }
        if(isset($param['coupon_money'])){
            $bottom[]=['title'=>'停车抵扣券','val'=>'￥'.$param['coupon_money'],'color'=>''];
            $pay_list4[]=['title'=>'停车抵扣券','val'=>$param['coupon_money'],'color'=>''];
        }else{
            $pay_list4[]=['title'=>'停车抵扣券','val'=>'0','color'=>''];
        }
        if(isset($param['pay_money'])){
            $bottom[]=['title'=>'实付金额','val'=>'￥'.$param['pay_money'],'color'=>'red'];
            $pay_list4[]=['title'=>'实付金额','val'=>$param['pay_money'],'color'=>'red'];
        }
        $data=[
            'top'=>$top,
            'middle'=>$middle,
            'bottom'=>$bottom
        ];
        $data['pay_list1']=$pay_list1;
        $data['pay_list2']=$pay_list2;
        $data['pay_list3']=$pay_list3;
        $data['pay_list4']=$pay_list4;
        return $data;
    }


    /**
     * D5智慧停车 隐藏临时车
     * @author: liukezhu
     * @date : 2022/1/15
     * @param $village_id
     * @return int
     */
    public function getD5ParkConfig($info){
        $is_temporary_park=1;
        if($info && $info['park_versions'] == '2' && in_array($info['park_sys_type'],['D5'])){
            $is_temporary_park=0;
        }
        return $is_temporary_park;
    }

    /**
     *返回移动端停车模块底部导航
     * @author: liukezhu
     * @date : 2022/1/15
     * @return array
     */
    public function getParkNav($village_id = 0)
    {
        if (strpos($_SERVER['SERVER_NAME'], 'hz.huizhisq.com') !== false) {
            $park_pay = '临时停车缴费';
            $park_manage = '月租车管理';
        } else {
            $park_pay = '停车缴费';
            $park_manage = '车辆管理';
        }
        $is_new_ver_d5 = false;

        if ($village_id > 0) {
            $houseVillageParkConfig = new HouseVillageParkConfig();
            $info = $houseVillageParkConfig->getFind(['village_id' => $village_id]);
            if ($info && $info->isEmpty()) {
                $info = $info->toArray();
            }
            if (!empty($info) && $info['park_sys_type'] == 'D5' && $info['park_versions'] == '2') {
                $is_new_ver_d5 = true;
            }
        }
        $data = [];
        if (!$is_new_ver_d5) {
            $data[] =[
                'name' => '停车场',
                'icon' => cfg('site_url') . '/static/images/house/park/tab1_nomal.png',
                'icon_active' => cfg('site_url') . '/static/images/house/park/tab1_active.png',
                'show' => true,
                'keytype'=>'car_park_market'
            ];
            $data[] = [
                'name' => $park_pay,
                'icon' => cfg('site_url') . '/static/images/house/park/tab2_nomal.png',
                'icon_active' => cfg('site_url') . '/static/images/house/park/tab2_active.png',
                'show' => true,
                'keytype'=>'car_pay_fee'
            ];
            $data[] = [
                'name' => '扫一扫',
                'icon' => cfg('site_url') . '/static/images/house/park/scan_code.png',
                'icon_active' => cfg('site_url') . '/static/images/house/park/scan_code.png',
                'show' => true,
                'keytype'=>'car_scan'
            ];
        }

        $data[] = [
            'name' => $park_manage,
            'icon' => cfg('site_url') . '/static/images/house/park/tab3_nomal.png',
            'icon_active' => cfg('site_url') . '/static/images/house/park/tab3_active.png',
            'show' => true,
            'keytype'=>'car_manage'
        ];
        $data[] = [
            'name' => '缴费记录',
            'icon' => cfg('site_url') . '/static/images/house/park/tab4_nomal.png',
            'icon_active' => cfg('site_url') . '/static/images/house/park/tab4_active.png',
            'show' => true,
            'keytype'=>'car_fee_record'
        ];
        return $data;

    }

    public function  getVisitorTmpParkingLists($whereArr,$field='*',$page=1,$limit=20)
    {

        $dataArr = ['list' => array(), 'total_limit' => $limit, 'count' => 0];
        $db_house_visitor = new HouseVillageVisitor();
        $count = $db_house_visitor->getCount($whereArr);
        if ($count > 0) {
            $dataArr['count'] = $count;
            $res = $db_house_visitor->getLists($whereArr, $field, $page, $limit);
            if (!empty($res)) {
                foreach ($res as $kk => $vv) {
                    $res[$kk]['add_time_str'] = '';
                    if ($vv['add_time'] > 0) {
                        $res[$kk]['add_time_str'] = date('Y-m-d H:i:s', $vv['add_time']);
                    }
                }
                $dataArr['list'] = $res;
            } else {
                $dataArr['list'] = array();
            }
        }
        return $dataArr;
    }

    /**
     * 根据收费标准获取所有已绑定的房间对应的业主信息
     * User: zhanghan
     * Date: 2022/1/12
     * Time: 14:21
     * @param $id
     * @param string $field
     * @return array
     */
    public function getVacancyToPosition($id,$field = 'position_id'){
        $standard_bind = new HouseNewChargeStandardBind();
        $user_bind = new HouseVillageUserBind();
        $position_bind = new HouseVillageBindPosition();

        $where_vacancy = [];
        $where_vacancy[] = ['rule_id','=',$id];
        $where_vacancy[] = ['bind_type','=',1];
        $where_vacancy[] = ['is_del','=',1];
        // 获取该收费规则下的所有绑定的房间id
        $vacancy_id = [];
        $vacancyList = $standard_bind->getLists1($where_vacancy,'vacancy_id');
        if($vacancyList && !$vacancyList->isEmpty()){
            $vacancy_id = array_column($vacancyList->toArray(),'vacancy_id');
        }
        // 根据房间id查询绑定房间的业主对应的小区用户ID
        $userBindList = [];
        if(!empty($vacancy_id)){
            $where_bind = [];
            $where_bind[] = ['vacancy_id','in',$vacancy_id];
            // 获取车位对应的用户信息房间信息
            $userList = $user_bind->getLimitUserList($where_bind,0,'pigcms_id');
            if($userList && !$userList->isEmpty()){
                $userBindList = array_column($userList->toArray(),'pigcms_id');
            }
        }
        $positionList = [];
        // 根据小区用户ID查询绑定车辆ID
        if(!empty($userBindList)){
            $where_position = [];
            $where_position[] = ['user_id','in',$userBindList];
            // 获取小区用户对应的车辆信息
            $position_list = $position_bind->getList($where_position,$field);
            if($position_list && !$position_list->isEmpty()){
                $positionList = $position_list->toArray();
            }
        }
        return $positionList;
    }

    //获取已绑定的车位
    public function  getRuleBindToPosition($rule_id,$field = 'position_id'){
        $standard_bind = new HouseNewChargeStandardBind();
        $whereArr = [];
        $whereArr[] = ['rule_id','=',$rule_id];
        $whereArr[] = ['bind_type','=',2];
        $whereArr[] = ['is_del','=',1];
        // 获取该收费规则下的所有绑定的车位id
        $tmpList = $standard_bind->getLists1($whereArr,$field);
        $tmpdatas=array();
        if($tmpList && !$tmpList->isEmpty()){
            $tmpdatas=$tmpList->toArray();
        }
        return $tmpdatas;
    }

    public function add_nolicence($village_id,$uid=''){
        $info = (new HouseVillageParkConfig())->getFind(['village_id' => $village_id]);
        if (!empty($info)&&$info['park_sys_type']=='D7'){
            $car_number='';
            $db_user=new User();
            $userInfo=$db_user->getOne(['uid'=>$uid],'uid,phone,nickname');
            if (empty($userBindInfo['phone'])&&!empty($userInfo['phone'])){
                $phone=$userInfo['phone'];
            }elseif(!empty($userBindInfo['phone'])){
                $phone=$userInfo['phone'];
            }else{
                $phone='';
            }
            $service_d7=new QinLinCloudService();
            $nolicence_info=$service_d7->noLicenseQuery($info['d7_park_id'],$phone);
            if (!empty($nolicence_info)&&$nolicence_info['state']=='200'&&!empty($nolicence_info['data'])){
                $nolicence_info['data']=json_decode($nolicence_info['data'],true);
                fdump_api([$nolicence_info['data'],],'D7/addCar_0819',1);
                if (!empty($nolicence_info['data']['carnumber'])){
                    $car_number= $nolicence_info['data']['carnumber'];
                }
            }
        }else{
            // 随机八位数 数字和大写字母组合
            $car_number = '临'.createRandomStr(7,false,false,true);
            $where_replace = [
                'car_number' => $car_number,
                'is_out_park' => 0,
                'village_id' => $village_id,
            ];
            $db_nolicence_in_park=new NolicenceInPark();
            $replace_car =$db_nolicence_in_park->getOne($where_replace);
            // $replace_car = M('nolicence_in_park')->where($where_replace)->find();
            while($replace_car)
            {
                // 去除和在停车存在重复问题
                $car_number = '临'.createRandomStr(7,false,false,true);
                $where_replace['car_number'] = $car_number;
                $replace_car =$db_nolicence_in_park->getOne($where_replace);
            }
        }

        return  $car_number;
    }

    public function getParkSet($village_id){
        $info = (new HouseVillageParkConfig())->getFind(['village_id' => $village_id]);
        $data=[];
        $data['is_park_month_type']=1;//是否开启月租车管理功能 1开启 0否
        $data['is_temporary_park_type']=1;//是否开启储值车收费  1是 0否
        if(!empty($info) && $info['park_versions'] == '2'){
            $data['is_park_month_type']=$info['is_park_month_type'];
            $data['is_temporary_park_type']=$info['is_temporary_park_type'];
            if(!empty($info) && $info['park_sys_type'] == 'D5' && $info['park_versions'] == '2'){
                $data['is_temporary_park_type']=0;
            }
        }
        return $data;
    }


    //针对D3和A11 仅支持部分功能
    public function checkVillageParkConfig($village_id){
        $village_park_config=$this->getVillageParkConfig($village_id,'park_sys_type,park_versions');
        if(!$village_park_config){
            throw new Exception('请先开启智慧停车');
        }
        if(!in_array($village_park_config['park_sys_type'],['D3','A11'])){
            throw new Exception('仅D3/A11智慧停车支持此类型配置');
        }
        return $village_park_config['park_sys_type'];
    }

    /**
     * 添加显屏指令
     * @author:zhubaodi
     * @date_time: 2022/4/6 17:45
     */
    public function addParkShowScreenLog($data){
        $db_house_village_park_showScreen_config=new HouseVillageParkShowscreenConfig();
        $db_park_showscreen_log=new ParkShowscreenLog();
        /*----------添加显屏指令start-----------*/
        //临时车入场
        $temp_in_content='欢迎光临';
        //临时车出场
        $temp_out_content1='停车';
        $temp_out_content2='请缴费';
        $temp_out_content3='一路顺风';
        //月租车入场
        $mouth_in_content='欢迎光临';
        //月租车出场
        $mouth_out_content1='停车有效期';
        $config_info = [];
        //  $config_info=$db_house_village_park_showScreen_config->getFind(['village_id'=>$data['village_id'],'screen_type'=>1,'passage_id'=>$data['passage']['id']]);
        // fdump_api([$config_info,$data],'showscreen_log_1',1);

        //车辆类型
        $carType= isset($data['car_type']) ? $data['car_type'] : '';
        //通道方向
        $passageDirection= isset($data['passage']['passage_direction']) ? $data['passage']['passage_direction'] : 0;
        //设备类型
        $deviceType= isset($data['passage']['device_type']) ? $data['passage']['device_type'] : 0;
        //设备类型 下发显屏指令类型（27 临显 25广告）
        $orderType=27;
        //通道类型
        if ((isset($data['passage']['passage_type']) && $data['passage']['passage_type'] == 2) && $passageDirection == 1){
            $passageType = 2;
        }else{
            $passageType = 1;
        }
        $showContentArr=[];
        //todo 进出场 显屏
        switch ($carType) {
            case 'temporary_type':
                if($passageDirection == 1){
                    //todo 车辆入场
                    if($deviceType == 1){
                        //todo 横屏
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 1,
                            'serial' => '01',
                            'content' => $data['car_number']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '02',
                            'content' => empty($data['content']) ? $temp_in_content : $data['content']
                        ];
                    }
                    elseif ($deviceType == 2){
                        //todo 竖屏
                        if (empty($data['content'])){
                            $content=$temp_in_content;
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $content=mb_substr($data['content'],0,6);
                            }else{
                                $content=$data['content'];
                            }
                        }
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '01',
                            'content' => $data['car_number']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 3,
                            'serial' => '02',
                            'content' => $content
                        ];
                    }
                }
                elseif ($passageDirection == 0){
                    //todo 车辆出场
                    if($deviceType == 1){
                        //todo 横屏
                        if (!isset($data['price'])||empty($data['price'])){
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 1,
                                'serial' => '01',
                                'content' => $data['car_number'],
                                'duration' => $data['duration'],
                                'price' => 0
                            ];
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 2,
                                'serial' => '02',
                                'content' => empty($data['content']) ? $temp_out_content3 : $data['content'],
                                'duration' => $data['duration'],
                                'price' => 0,
                            ];
                        }
                        else{
                            if (empty($data['content'])){
                                if (isset($data['voice_content'])&&$data['voice_content']==9){
                                    $content = '扣款'.$data['price'].'元,请通行';
                                }else{
                                    $content = $temp_out_content2.$data['price'].'元';
                                }

                            }else{
                                $content = $data['content'];
                            }
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 1,
                                'serial' => '01',
                                'content' => $data['car_number'],
                                'duration' => $data['duration'],
                                'price' => $data['price']
                            ];

                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 2,
                                'serial' => '02',
                                'content' => empty($data['content']) ? $temp_out_content1.$data['duration_txt'] : $data['content'],
                                'duration' => $data['duration'],
                                'price' => $data['price']
                            ];

                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 1,
                                'serial' => '03',
                                'content' => $content,
                                'duration' => $data['duration'],
                                'price' => $data['price']
                            ];
                        }
                    }
                    elseif ($deviceType == 2){
                        //todo 竖屏
                        if (empty($data['price'])){
                            if (empty($data['content'])){
                                $content=$temp_out_content3;
                            }
                            else{
                                if (mb_strlen($data['content'])>6){
                                    $content=mb_substr($data['content'],0,6);
                                }else{
                                    $content=$data['content'];
                                }
                            }
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 2,
                                'serial' => '01',
                                'content' => $data['car_number'],
                                'duration' => $data['duration'],
                                'price' => 0
                            ];
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 3,
                                'serial' => '02',
                                'content' => $content,
                                'duration' => $data['duration'],
                                'price' => 0
                            ];
                        }
                        else{
                            if (empty($data['content'])){
                                $content=$temp_out_content1.$data['duration_txt'];
                            }
                            else{
                                if (mb_strlen($data['content'])>6){
                                    $content=mb_substr($data['content'],0,6);
                                }else{
                                    $content=$data['content'];
                                }
                            }
                            if (empty($data['content'])){
                                if (isset($data['voice_content'])&&$data['voice_content']==9){
                                    $content2='扣款'.$data['price'].'元,请通行';
                                    if (mb_strlen($content2)>6){
                                        $content2=mb_substr($content2,0,6);
                                    }
                                }else{
                                    $content2=$temp_out_content2.$data['price'].'元';
                                }
                            }
                            else{
                                if (mb_strlen($data['content'])>6){
                                    $content2=mb_substr($data['content'],0,6);
                                }else{
                                    $content2=$data['content'];
                                }
                            }
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 2,
                                'serial' => '01',
                                'content' => $data['car_number'],
                                'duration' => $data['duration'],
                                'price' => $data['price']
                            ];
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 3,
                                'serial' => '02',
                                'content' => $content,
                                'duration' => $data['duration'],
                                'price' => $data['price']
                            ];
                            $showContentArr[]=[
                                'content_type' => 1,
                                'screen_row' => 2,
                                'serial' => '03',
                                'content' => $content2,
                                'duration' => $data['duration'],
                                'price' => $data['price']
                            ];
                        }
                    }
                }
                break;
            case 'month_type':
                if($passageDirection == 1){
                    //todo 车辆入场
                    if($deviceType == 1){
                        //todo 横屏
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '02',
                            'content' => empty($data['content']) ? $mouth_in_content : $data['content'],
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 1,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                    elseif ($deviceType == 2){
                        //todo 竖屏
                        if (empty($data['content'])){
                            $content=$mouth_in_content;
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $content=mb_substr($data['content'],0,6);
                            }else{
                                $content=$data['content'];
                            }
                        }
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 3,
                            'serial' => '02',
                            'content' => $content,
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                }
                elseif ($passageDirection == 0){
                    //todo 车辆出场
                    if($deviceType == 1){
                        //todo 横屏
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '02',
                            'content' => empty($data['content']) ? $mouth_out_content1.$data['end_time_txt'] : $data['content'],
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 1,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                    elseif ($deviceType == 2){
                        //todo 竖屏
                        if (empty($data['content'])){
                            $content = $mouth_out_content1.$data['end_time_txt'];
                        }
                        else{
                            if (mb_strlen($data['content'])>6){
                                $content = mb_substr($data['content'],0,6);
                            }else{
                                $content = $data['content'];
                            }
                        }
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 3,
                            'serial' => '02',
                            'content' => $content,
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                }
                break;
            default:
                if($passageDirection == 1){
                    //todo 车辆入场
                    if($deviceType == 1){
                        //todo 横屏
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '02',
                            'content' => empty($data['content']) ? $mouth_in_content : $data['content'],
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 1,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                    elseif ($deviceType == 2){
                        //todo 竖屏

                        if (empty($data['content'])){
                            $content = $mouth_in_content;
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $content = mb_substr($data['content'],0,6);
                            }else{
                                $content = $data['content'];
                            }
                        }
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 3,
                            'serial' => '02',
                            'content' => $content,
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                }
                elseif ($passageDirection == 0){
                    //todo 车辆出场
                    if($deviceType == 1){
                        //todo 横屏
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '02',
                            'content' => empty($data['content']) ? $temp_out_content3 : $data['content'],
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 1,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                    elseif ($deviceType == 2){
                        //todo 竖屏

                        if (empty($data['content'])){
                            $content= $temp_out_content3;
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $content=mb_substr($data['content'],0,6);
                            }else{
                                $content=$data['content'];
                            }
                        }
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 3,
                            'serial' => '02',
                            'content' => $content,
                            'end_time' => $data['end_time']
                        ];
                        $showContentArr[]=[
                            'content_type' => 1,
                            'screen_row' => 2,
                            'serial' => '01',
                            'content' => $data['car_number'],
                            'end_time' => $data['end_time']
                        ];
                    }
                }
        }

        //todo 进场 语音
        if($passageDirection == 1){
            $showContentArr[]=[
                'content_type' => 2,
                'screen_row' => 2,
                'serial' => '01',
                'car_number' => $data['car_number'],
                'content' => (!isset($data['voice_content'])||empty($data['voice_content'])) ? 1: $data['voice_content'],
                'end_time' => isset($data['end_time']) ? $data['end_time'] : 0,
                'duration' => isset($data['duration']) ? $data['duration'] : 0,
                'price' => isset($data['price']) ? $data['price'] : 0
            ];
        }

        //todo 出场 语音
        if($passageDirection == 0){
            switch ($carType) {
                case 'temporary_type':
                    if (!empty($data['duration'])){
                        $content=(!isset($data['voice_content'])||empty($data['voice_content'])) ? 5: $data['voice_content'];
                    }
                    else{
                        $content=(!isset($data['voice_content'])||empty($data['voice_content'])) ? 2: $data['voice_content'];
                    }
                    $showContentArr[]=[
                        'content_type' => 2,
                        'screen_row' => 2,
                        'serial' => '01',
                        'car_number' => $data['car_number'],
                        'content' => $content,
                        'end_time' => isset($data['end_time']) ? $data['end_time'] : 0,
                        'duration' => isset($data['duration']) ? $data['duration'] : 0,
                        'price' => isset($data['price']) ? $data['price'] : 0
                    ];
                    break;
                case 'month_type':
                    if ($data['end_time']>1){
                        if (!isset($data['voice_content'])||empty($data['voice_content'])){
                            $content = 4;
                        }
                        else{
                            $content = $data['voice_content'];
                        }
                    }else{
                        if (!isset($data['voice_content'])||empty($data['voice_content'])){
                            $content = 2;
                        }
                        else{
                            $content = $data['voice_content'];
                        }
                    }
                    $showContentArr[]=[
                        'content_type' => 2,
                        'screen_row' => 2,
                        'serial' => '01',
                        'car_number' => $data['car_number'],
                        'content' => $content,
                        'end_time' => isset($data['end_time']) ? $data['end_time'] : 0,
                        'duration' => isset($data['duration']) ? $data['duration'] : 0,
                        'price' => isset($data['price']) ? $data['price'] : 0
                    ];
                    break;
                default:
                    if (!isset($data['voice_content'])||empty($data['voice_content'])){
                        $content=2;
                    }else{
                        $content=$data['voice_content'];
                    }
                    $showContentArr[]=[
                        'content_type' => 2,
                        'screen_row' => 2,
                        'serial' => '01',
                        'car_number' => $data['car_number'],
                        'content' => $content,
                        'end_time' => isset($data['end_time']) ? $data['end_time'] : 0,
                        'duration' => isset($data['duration']) ? $data['duration'] : 0,
                        'price' => isset($data['price']) ? $data['price'] : 0
                    ];
            }
        }

        $parkShowScreen=new D3ShowScreenService();
        $serialData=[];
        if($showContentArr){
            foreach ($showContentArr as $showKey=>$item){
                if($item['content_type'] == 1){ //显屏
                    $showVoiceTxt = $parkShowScreen->showVoiceTxt($item['content'], $item['screen_row'], $item['serial'], $orderType);
                }else{ //语音
                    $showVoiceTxt = $parkShowScreen->showVoice($item, '01');
                }
                $base64DataText = $parkShowScreen->translation($showVoiceTxt);
                $base64DataTextLength = strlen($base64DataText);
                $serialData[] = [
                    'serialChannel' => 0,
                    'data' => $base64DataText,
                    'dataLen' => $base64DataTextLength,
                ];
            }
        }
        $showscreen_log=[
            'village_id' => $data['village_id'],
            'park_sys_type' => 'D3',
            'content' => $data['car_number'],
            'content_type' => 1,
            'screen_row' => 1,
            'serial' => '01',
            'car_number' => $data['car_number'],
            'channel_id' => $data['channel_id'],
            'park_type' => 1,
            'add_time' => time(),
            'showcontent' => json_encode($serialData,JSON_UNESCAPED_UNICODE)
        ];
        $logId = $db_park_showscreen_log->add($showscreen_log);
        fdump_api(['参数进来了=='.__LINE__,[
            'car_number'=>$data['car_number'],
            '$showContentArr'=>$showContentArr,
            '$logId'=>$logId,
            '$showscreen_log'=>$showscreen_log
        ]],'park/d3/addShowScreenLog',1);
        return $logId;

        if (empty($config_info)){
            //车辆入场
            if ($data['passage']['passage_direction'] == 1){
                //横屏
                if ($data['passage']['device_type']==1){
                    if ($data['car_type']=='temporary_type'){
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['content_type']=1;
                        $log_data['screen_row']=1;
                        $log_data['serial']='01';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();
                        // fdump_api([$log_data,$data],'showscreen_log_1',1);
                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']=$temp_in_content;
                        }else{
                            $log_data['content']=$data['content'];
                        }
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='02';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();
                        // fdump_api([$log_data,$data],'showscreen_log_1',1);
                        $db_park_showscreen_log->add($log_data);
                    }
                    elseif ($data['car_type']=='month_type'){
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']=$mouth_in_content;
                        }else{
                            $log_data['content']=$data['content'];
                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='02';
                        $log_data['add_time']=time();
                        //  fdump_api([$log_data,$data],'showscreen_log_1',1);
                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=1;
                        $log_data['serial']='01';
                        $log_data['add_time']=time();

                        //  fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                    else{
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']= $mouth_in_content;
                        }else{
                            $log_data['content']=$data['content'];
                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='02';
                        //  fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=1;
                        $log_data['serial']='01';

                        //   fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                }
                //竖屏
                elseif($data['passage']['device_type']==2){
                    if ($data['car_type']=='temporary_type'){
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();
                        // fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']=$temp_in_content;
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $log_data['content']=mb_substr($data['content'],0,6);
                            }else{
                                $log_data['content']=$data['content'];
                            }
                        }
                        $log_data['content_type']=1;
                        $log_data['screen_row']=3;
                        $log_data['serial']='02';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();

                        // fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                    elseif ($data['car_type']=='month_type'){
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']=$mouth_in_content;
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $log_data['content']=mb_substr($data['content'],0,6);
                            }else{
                                $log_data['content']=$data['content'];
                            }

                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=3;
                        $log_data['serial']='02';
                        $log_data['add_time']=time();

                        // fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';
                        $log_data['add_time']=time();

                        //  fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                    else{
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']= $mouth_in_content;
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $log_data['content']=mb_substr($data['content'],0,6);
                            }else{
                                $log_data['content']=$data['content'];
                            }
                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=3;
                        $log_data['serial']='02';

                        //  fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=1;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';

                        //  fdump_api([$log_data,$data],'showscreen_log_1',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                }

            }
            //车辆出场
            if ($data['passage']['passage_direction'] == 0){
                //横屏
                if ($data['passage']['device_type']==1){
                    if ($data['car_type']=='temporary_type'){
                        if (!isset($data['price'])||empty($data['price'])){
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$data['car_number'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=1;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=0;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_2',1);

                            $db_park_showscreen_log->add($log_data);
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (empty($data['content'])){
                                $log_data['content']=$temp_out_content3;
                            }else{
                                $log_data['content']=$data['content'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=0;

                            fdump_api([$log_data,$data],'showscreen_log_2',1);

                            $db_park_showscreen_log->add($log_data);
                        }else{
                            $log_data['content']=$data['car_number'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=1;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=$data['price'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_stored_0907',1);

                            $db_park_showscreen_log->add($log_data);
                            if (empty($data['content'])){
                                $log_data['content']=$temp_out_content1.$data['duration_txt'];
                            }else{
                                $log_data['content']=$data['content'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=$data['price'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_stored_0907',1);
                            $db_park_showscreen_log->add($log_data);
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (empty($data['content'])){
                                if (isset($data['voice_content'])&&$data['voice_content']==9){
                                    $log_data['content']='扣款'.$data['price'].'元,请通行';
                                }else{
                                    $log_data['content']=$temp_out_content2.$data['price'].'元';
                                }

                            }else{
                                $log_data['content']=$data['content'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=1;
                            $log_data['serial']='03';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=$data['price'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_stored_0907',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                    elseif ($data['car_type']=='month_type'){
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']=$mouth_out_content1.$data['end_time_txt'];
                        }else{
                            $log_data['content']=$data['content'];
                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='02';
                        $log_data['add_time']=time();

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=1;
                        $log_data['serial']='01';
                        $log_data['add_time']=time();

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                    else{
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']= '一路顺风';
                        }else{
                            $log_data['content']=$data['content'];
                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='02';

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=1;
                        $log_data['serial']='01';

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                }
                //竖屏
                elseif($data['passage']['device_type']==2){
                    if ($data['car_type']=='temporary_type'){
                        if (empty($data['price'])){
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$data['car_number'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=0;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_2',1);

                            $db_park_showscreen_log->add($log_data);
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (empty($data['content'])){
                                $log_data['content']=$temp_out_content3;
                            }else{
                                if (mb_strlen($data['content'])>6){
                                    $log_data['content']=mb_substr($data['content'],0,6);
                                }else{
                                    $log_data['content']=$data['content'];
                                }
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=3;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=0;

                            fdump_api([$log_data,$data],'showscreen_log_2',1);

                            $db_park_showscreen_log->add($log_data);
                        }else{
                            $log_data['content']=$data['car_number'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=$data['price'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_stored_0907',1);

                            $db_park_showscreen_log->add($log_data);
                            if (empty($data['content'])){
                                $log_data['content']=$temp_out_content1.$data['duration_txt'];
                            }else{
                                if (mb_strlen($data['content'])>6){
                                    $log_data['content']=mb_substr($data['content'],0,6);
                                }else{
                                    $log_data['content']=$data['content'];
                                }
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=3;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=$data['price'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_stored_0907',1);

                            $db_park_showscreen_log->add($log_data);
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (empty($data['content'])){
                                if (isset($data['voice_content'])&&$data['voice_content']==9){
                                    $log_data['content']='扣款'.$data['price'].'元,请通行';
                                    if (mb_strlen($log_data['content'])>6){
                                        $log_data['content']=mb_substr($log_data['content'],0,6);
                                    }
                                }else{
                                    $log_data['content']=$temp_out_content2.$data['price'].'元';
                                }
                            }else{
                                if (mb_strlen($data['content'])>6){
                                    $log_data['content']=mb_substr($data['content'],0,6);
                                }else{
                                    $log_data['content']=$data['content'];
                                }
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='03';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['duration']=$data['duration'];
                            $log_data['price']=$data['price'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            fdump_api([$log_data,$data],'showscreen_log_stored_0907',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                    elseif ($data['car_type']=='month_type'){
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']=$mouth_out_content1.$data['end_time_txt'];
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $log_data['content']=mb_substr($data['content'],0,6);
                            }else{
                                $log_data['content']=$data['content'];
                            }
                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=3;
                        $log_data['serial']='02';
                        $log_data['add_time']=time();

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';
                        $log_data['add_time']=time();

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                    else{
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        if (empty($data['content'])){
                            $log_data['content']= '一路顺风';
                        }else{
                            if (mb_strlen($data['content'])>6){
                                $log_data['content']=mb_substr($data['content'],0,6);
                            }else{
                                $log_data['content']=$data['content'];
                            }
                        }
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=3;
                        $log_data['serial']='02';

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                        $log_data=[];
                        $log_data['village_id']=$data['village_id'];
                        $log_data['park_sys_type']='D3';
                        $log_data['content']=$data['car_number'];
                        $log_data['car_number']=$data['car_number'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                        $log_data['content_type']=1;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';

                        fdump_api([$log_data,$data],'showscreen_log_2',1);

                        $db_park_showscreen_log->add($log_data);
                    }
                }
            }
        }
        else{
            //车辆入场
            if ($data['passage']['passage_direction'] == 1){
                //横屏
                if ($data['passage']['device_type']==1){
                    if ($data['car_type']=='temporary_type'){
                        if (!empty($config_info['temp_line_1'])){
                            if (strpos($config_info['temp_line_1'],'{车牌号}')){
                                $config_info['temp_line_1']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停留时长}')){
                                $config_info['temp_line_1']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车费}')){
                                $config_info['temp_line_1']=str_replace('{停车费}',$data['price'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车期时间}')){
                                $config_info['temp_line_1']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_1']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_1'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=1;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_2'])){
                            if (strpos($config_info['temp_line_2'],'{车牌号}')){
                                $config_info['temp_line_2']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停留时长}')){
                                $config_info['temp_line_2']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车费}')){
                                $config_info['temp_line_2']=str_replace('{停车费}',$data['price'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车期时间}')){
                                $config_info['temp_line_2']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_2']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_2'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_3'])){
                            if (strpos($config_info['temp_line_3'],'{车牌号}')){
                                $config_info['temp_line_3']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停留时长}')){
                                $config_info['temp_line_3']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车费}')){
                                $config_info['temp_line_3']=str_replace('{停车费}',$data['price'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车期时间}')){
                                $config_info['temp_line_3']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_3']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_3'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=3;
                            $log_data['serial']='03';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_4'])){
                            if (strpos($config_info['temp_line_4'],'{车牌号}')){
                                $config_info['temp_line_4']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停留时长}')){
                                $config_info['temp_line_4']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车费}')){
                                $config_info['temp_line_4']=str_replace('{停车费}',$data['price'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车期时间}')){
                                $config_info['temp_line_4']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_4']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_4'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=4;
                            $log_data['serial']='04';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //   fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                    elseif ($data['car_type']=='month_type') {
                        if (!empty($config_info['mouth_line_1'])) {
                            if (strpos($config_info['mouth_line_1'], '{车牌号}')) {
                                $config_info['mouth_line_1'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停留时长}')) {
                                $config_info['mouth_line_1'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车费}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车费}', $data['price'], $config_info['temp_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车期时间}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_1'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 1;
                            $log_data['serial'] = '01';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_2'])) {
                            if (strpos($config_info['mouth_line_2'], '{车牌号}')) {
                                $config_info['mouth_line_2'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停留时长}')) {
                                $config_info['mouth_line_2'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车费}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车期时间}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_2'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 2;
                            $log_data['serial'] = '02';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_3'])) {
                            if (strpos($config_info['mouth_line_3'], '{车牌号}')) {
                                $config_info['mouth_line_3'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'], '{停留时长}')) {
                                $config_info['mouth_line_3'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车费}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车期时间}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_3']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_3'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 3;
                            $log_data['serial'] = '03';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_4'])) {
                            if (strpos($config_info['mouth_line_4'], '{车牌号}')) {
                                $config_info['mouth_line_4'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停留时长}')) {
                                $config_info['mouth_line_4'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车费}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车期时间}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_4']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_4'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 4;
                            $log_data['serial'] = '04';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            // fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                }
                //竖屏
                elseif($data['passage']['device_type']==2){
                    if ($data['car_type']=='temporary_type'){
                        if (!empty($config_info['temp_line_1'])){
                            if (strpos($config_info['temp_line_1'],'{车牌号}')){
                                $config_info['temp_line_1']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停留时长}')){
                                $config_info['temp_line_1']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车费}')){
                                $config_info['temp_line_1']=str_replace('{停车费}',$data['price'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车期时间}')){
                                $config_info['temp_line_1']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_1']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_1'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_1'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_1'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=1;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_2'])){
                            if (strpos($config_info['temp_line_2'],'{车牌号}')){
                                $config_info['temp_line_2']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停留时长}')){
                                $config_info['temp_line_2']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车费}')){
                                $config_info['temp_line_2']=str_replace('{停车费}',$data['price'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车期时间}')){
                                $config_info['temp_line_2']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_2']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_2'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_2'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_2'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //    fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_3'])){
                            if (strpos($config_info['temp_line_3'],'{车牌号}')){
                                $config_info['temp_line_3']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停留时长}')){
                                $config_info['temp_line_3']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车费}')){
                                $config_info['temp_line_3']=str_replace('{停车费}',$data['price'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车期时间}')){
                                $config_info['temp_line_3']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_3']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_3'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_3'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_3'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=3;
                            $log_data['serial']='03';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_4'])){
                            if (strpos($config_info['temp_line_4'],'{车牌号}')){
                                $config_info['temp_line_4']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停留时长}')){
                                $config_info['temp_line_4']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车费}')){
                                $config_info['temp_line_4']=str_replace('{停车费}',$data['price'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车期时间}')){
                                $config_info['temp_line_4']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_4']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_4'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_4'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_4'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=4;
                            $log_data['serial']='04';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=1;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                    elseif ($data['car_type']=='month_type') {
                        if (!empty($config_info['mouth_line_1'])) {
                            if (strpos($config_info['mouth_line_1'], '{车牌号}')) {
                                $config_info['mouth_line_1'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停留时长}')) {
                                $config_info['mouth_line_1'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车费}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车费}', $data['price'], $config_info['temp_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车期时间}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_1'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_1'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_1'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 1;
                            $log_data['serial'] = '01';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            //   fdump_api([$log_data,$data],'showscreen_log_11',1);
                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_2'])) {
                            if (strpos($config_info['mouth_line_2'], '{车牌号}')) {
                                $config_info['mouth_line_2'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停留时长}')) {
                                $config_info['mouth_line_2'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车费}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车期时间}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_2'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_2'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_2'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 2;
                            $log_data['serial'] = '02';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            //      fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_3'])) {
                            if (strpos($config_info['mouth_line_3'], '{车牌号}')) {
                                $config_info['mouth_line_3'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'], '{停留时长}')) {
                                $config_info['mouth_line_3'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车费}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车期时间}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_3']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_3'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_3'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_3'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 3;
                            $log_data['serial'] = '03';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            //  fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_4'])) {
                            if (strpos($config_info['mouth_line_4'], '{车牌号}')) {
                                $config_info['mouth_line_4'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停留时长}')) {
                                $config_info['mouth_line_4'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车费}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车期时间}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_4']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_4'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_4'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_4'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 4;
                            $log_data['serial'] = '04';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 1;
                            $log_data['add_time'] = time();

                            // fdump_api([$log_data,$data],'showscreen_log_11',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                }
            }
            //车辆出场
            if ($data['passage']['passage_direction'] == 0){
                //横屏
                if ($data['passage']['device_type']==1){
                    if ($data['car_type']=='temporary_type'){
                        if (!empty($config_info['temp_line_1'])){
                            if (strpos($config_info['temp_line_1'],'{车牌号}')){
                                $config_info['temp_line_1']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停留时长}')){
                                $config_info['temp_line_1']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车费}')){
                                $config_info['temp_line_1']=str_replace('{停车费}',$data['price'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车期时间}')){
                                $config_info['temp_line_1']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_1']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_1'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=1;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //   fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_2'])){
                            if (strpos($config_info['temp_line_2'],'{车牌号}')){
                                $config_info['temp_line_2']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停留时长}')){
                                $config_info['temp_line_2']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车费}')){
                                $config_info['temp_line_2']=str_replace('{停车费}',$data['price'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车期时间}')){
                                $config_info['temp_line_2']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_2']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_2'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //    fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_3'])){
                            if (strpos($config_info['temp_line_3'],'{车牌号}')){
                                $config_info['temp_line_3']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停留时长}')){
                                $config_info['temp_line_3']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车费}')){
                                $config_info['temp_line_3']=str_replace('{停车费}',$data['price'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车期时间}')){
                                $config_info['temp_line_3']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_3']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_3'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=3;
                            $log_data['serial']='03';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_4'])){
                            if (strpos($config_info['temp_line_4'],'{车牌号}')){
                                $config_info['temp_line_4']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停留时长}')){
                                $config_info['temp_line_4']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车费}')){
                                $config_info['temp_line_4']=str_replace('{停车费}',$data['price'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车期时间}')){
                                $config_info['temp_line_4']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_4']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            $log_data['content']=$config_info['temp_line_4'];
                            $log_data['content_type']=1;
                            $log_data['screen_row']=4;
                            $log_data['serial']='04';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //  fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                    elseif ($data['car_type']=='month_type') {
                        if (!empty($config_info['mouth_line_1'])) {
                            if (strpos($config_info['mouth_line_1'], '{车牌号}')) {
                                $config_info['mouth_line_1'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停留时长}')) {
                                $config_info['mouth_line_1'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车费}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车费}', $data['price'], $config_info['temp_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车期时间}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_1'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 1;
                            $log_data['serial'] = '01';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //    fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_2'])) {
                            if (strpos($config_info['mouth_line_2'], '{车牌号}')) {
                                $config_info['mouth_line_2'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停留时长}')) {
                                $config_info['mouth_line_2'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车费}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车期时间}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_2'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 2;
                            $log_data['serial'] = '02';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //   fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_3'])) {
                            if (strpos($config_info['mouth_line_3'], '{车牌号}')) {
                                $config_info['mouth_line_3'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'], '{停留时长}')) {
                                $config_info['mouth_line_3'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车费}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车期时间}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_3']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_3'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 3;
                            $log_data['serial'] = '03';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //      fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_4'])) {
                            if (strpos($config_info['mouth_line_4'], '{车牌号}')) {
                                $config_info['mouth_line_4'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停留时长}')) {
                                $config_info['mouth_line_4'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车费}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车期时间}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_4']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            $log_data['content'] = $config_info['mouth_line_4'];
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 4;
                            $log_data['serial'] = '04';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //     fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                }
                //竖屏
                elseif($data['passage']['device_type']==2){
                    if ($data['car_type']=='temporary_type'){
                        if (!empty($config_info['temp_line_1'])){
                            if (strpos($config_info['temp_line_1'],'{车牌号}')){
                                $config_info['temp_line_1']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停留时长}')){
                                $config_info['temp_line_1']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车费}')){
                                $config_info['temp_line_1']=str_replace('{停车费}',$data['price'],$config_info['temp_line_1']);
                            }
                            if (strpos($config_info['temp_line_1'],'{停车期时间}')){
                                $config_info['temp_line_1']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_1']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_1'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_1'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_1'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=1;
                            $log_data['serial']='01';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //     fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_2'])){
                            if (strpos($config_info['temp_line_2'],'{车牌号}')){
                                $config_info['temp_line_2']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停留时长}')){
                                $config_info['temp_line_2']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车费}')){
                                $config_info['temp_line_2']=str_replace('{停车费}',$data['price'],$config_info['temp_line_2']);
                            }
                            if (strpos($config_info['temp_line_2'],'{停车期时间}')){
                                $config_info['temp_line_2']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_2']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_2'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_2'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_2'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=2;
                            $log_data['serial']='02';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //      fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_3'])){
                            if (strpos($config_info['temp_line_3'],'{车牌号}')){
                                $config_info['temp_line_3']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停留时长}')){
                                $config_info['temp_line_3']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车费}')){
                                $config_info['temp_line_3']=str_replace('{停车费}',$data['price'],$config_info['temp_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'],'{停车期时间}')){
                                $config_info['temp_line_3']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_3']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_3'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_3'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_3'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=3;
                            $log_data['serial']='03';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //   fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['temp_line_4'])){
                            if (strpos($config_info['temp_line_4'],'{车牌号}')){
                                $config_info['temp_line_4']=str_replace('{车牌号}',$data['car_number'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停留时长}')){
                                $config_info['temp_line_4']=str_replace('{停留时长}',$data['duration_txt'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车费}')){
                                $config_info['temp_line_4']=str_replace('{停车费}',$data['price'],$config_info['temp_line_4']);
                            }
                            if (strpos($config_info['temp_line_4'],'{停车期时间}')){
                                $config_info['temp_line_4']=str_replace('{停车期时间}',$data['end_time_txt'],$config_info['temp_line_4']);
                            }
                            $log_data=[];
                            $log_data['village_id']=$data['village_id'];
                            $log_data['park_sys_type']='D3';
                            if (mb_strlen($config_info['temp_line_4'])>6){
                                $log_data['content']=mb_substr($config_info['temp_line_4'],0,6);
                            }else{
                                $log_data['content']=$config_info['temp_line_4'];
                            }
                            $log_data['content_type']=1;
                            $log_data['screen_row']=4;
                            $log_data['serial']='04';
                            $log_data['car_number']=$data['car_number'];
                            $log_data['channel_id']=$data['channel_id'];
                            $log_data['park_type']=2;
                            $log_data['add_time']=time();

                            //    fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                    elseif ($data['car_type']=='month_type') {
                        if (!empty($config_info['mouth_line_1'])) {
                            if (strpos($config_info['mouth_line_1'], '{车牌号}')) {
                                $config_info['mouth_line_1'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停留时长}')) {
                                $config_info['mouth_line_1'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车费}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车费}', $data['price'], $config_info['temp_line_1']);
                            }
                            if (strpos($config_info['mouth_line_1'], '{停车期时间}')) {
                                $config_info['mouth_line_1'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_1'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_1'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_1'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 1;
                            $log_data['serial'] = '01';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //     fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_2'])) {
                            if (strpos($config_info['mouth_line_2'], '{车牌号}')) {
                                $config_info['mouth_line_2'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停留时长}')) {
                                $config_info['mouth_line_2'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车费}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_2']);
                            }
                            if (strpos($config_info['mouth_line_2'], '{停车期时间}')) {
                                $config_info['mouth_line_2'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_1']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_2'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_2'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_2'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 2;
                            $log_data['serial'] = '02';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //      fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_3'])) {
                            if (strpos($config_info['mouth_line_3'], '{车牌号}')) {
                                $config_info['mouth_line_3'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['temp_line_3'], '{停留时长}')) {
                                $config_info['mouth_line_3'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车费}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_3']);
                            }
                            if (strpos($config_info['mouth_line_3'], '{停车期时间}')) {
                                $config_info['mouth_line_3'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_3']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_3'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_3'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_3'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 3;
                            $log_data['serial'] = '03';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //     fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                        if (!empty($config_info['mouth_line_4'])) {
                            if (strpos($config_info['mouth_line_4'], '{车牌号}')) {
                                $config_info['mouth_line_4'] = str_replace('{车牌号}', $data['car_number'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停留时长}')) {
                                $config_info['mouth_line_4'] = str_replace('{停留时长}', $data['duration_txt'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车费}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车费}', $data['price'], $config_info['mouth_line_4']);
                            }
                            if (strpos($config_info['mouth_line_4'], '{停车期时间}')) {
                                $config_info['mouth_line_4'] = str_replace('{停车期时间}', $data['end_time_txt'], $config_info['mouth_line_4']);
                            }
                            $log_data = [];
                            $log_data['village_id'] = $data['village_id'];
                            $log_data['park_sys_type'] = 'D3';
                            if (mb_strlen($config_info['mouth_line_4'])>6){
                                $log_data['content']=mb_substr($config_info['mouth_line_4'],0,6);
                            }else{
                                $log_data['content']=$config_info['mouth_line_4'];
                            }
                            $log_data['content_type'] = 1;
                            $log_data['screen_row'] = 4;
                            $log_data['serial'] = '04';
                            $log_data['car_number'] = $data['car_number'];
                            $log_data['channel_id'] = $data['channel_id'];
                            $log_data['park_type'] = 2;
                            $log_data['add_time'] = time();

                            //      fdump_api([$log_data,$data],'showscreen_log_12',1);

                            $db_park_showscreen_log->add($log_data);
                        }
                    }
                }
            }
        }
        /*----------添加显屏指令end-----------*/

        /*----------添加语音指令start-----------*/
        // $config_info=$db_house_village_park_showScreen_config->getFind(['village_id'=>$data['village_id'],'screen_type'=>2,'passage_id'=>$data['passage']['id']]);
        fdump_api([$config_info,$data],'showVoice_log_1',1);
        if (empty($config_info)){
            //入场
            if ($data['passage']['passage_direction'] == 1){
                if (!isset($data['voice_content'])||empty($data['voice_content'])){
                    $log_data['content']=1;
                }else{
                    $log_data['content']=$data['voice_content'];
                }
                $log_data['content_type']=2;
                $log_data['screen_row']=2;
                $log_data['serial']='01';
                $log_data['car_number']=$data['car_number'];
                $log_data['channel_id']=$data['channel_id'];
                $log_data['park_type']=1;
                $log_data['add_time']=time();
                fdump_api([$log_data,$data],'showVoice_log_1',1);
                $db_park_showscreen_log->add($log_data);
            }
            //出场
            if ($data['passage']['passage_direction'] == 0){
                if ($data['car_type']=='temporary_type'){
                    if (!empty($data['duration'])){
                        if (!isset($data['voice_content'])||empty($data['voice_content'])){
                            $log_data['content']=5;
                        }else{
                            $log_data['content']=$data['voice_content'];
                        }
                        $log_data['content_type']= 2;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['duration']=$data['duration'];
                        $log_data['price']=$data['price'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                    }else{
                        if (!isset($data['voice_content'])||empty($data['voice_content'])){
                            $log_data['content']=2;
                        }else{
                            $log_data['content']=$data['voice_content'];
                        }
                        $log_data['content_type']=2;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['duration']=$data['duration'];
                        $log_data['price']=$data['price'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                    }
                    fdump_api([$log_data,$data],'showVoice_log_1',1);

                    $db_park_showscreen_log->add($log_data);
                }elseif($data['car_type']=='month_type'){
                    if ($data['end_time']>1){
                        if (!isset($data['voice_content'])||empty($data['voice_content'])){
                            $log_data['content']=4;
                        }else{
                            $log_data['content']=$data['voice_content'];
                        }
                        $log_data['content_type']= 2;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['end_time']=$data['end_time'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                    }else{
                        if (!isset($data['voice_content'])||empty($data['voice_content'])){
                            $log_data['content']=2;
                        }else{
                            $log_data['content']=$data['voice_content'];
                        }
                        $log_data['content_type']=2;
                        $log_data['screen_row']=2;
                        $log_data['serial']='01';
                        $log_data['car_number']=$data['car_number'];
                        $log_data['duration']=$data['duration'];
                        $log_data['price']=$data['price'];
                        $log_data['channel_id']=$data['channel_id'];
                        $log_data['park_type']=2;
                        $log_data['add_time']=time();
                    }
                    fdump_api([$log_data,$data],'showVoice_log_1',1);

                    $db_park_showscreen_log->add($log_data);
                }else{
                    if (!isset($data['voice_content'])||empty($data['voice_content'])){
                        $log_data['content']=2;
                    }else{
                        $log_data['content']=$data['voice_content'];
                    }
                    $log_data['content_type']=2;
                    $log_data['screen_row']=2;
                    $log_data['serial']='01';
                    $log_data['car_number']=$data['car_number'];
                    $log_data['duration']=$data['duration'];
                    $log_data['price']=$data['price'];
                    $log_data['channel_id']=$data['channel_id'];
                    $log_data['park_type']=2;
                    $log_data['add_time']=time();
                    fdump_api([$log_data,$data],'showVoice_log_1',1);
                    $db_park_showscreen_log->add($log_data);
                }
            }

        }
        else{
            //入场
            if ($data['passage']['passage_direction'] == 1){
                if ($data['car_type']=='temporary_type'){
                    $log_data['content']=$config_info['temp_line_1'];
                    $log_data['content_type']= 2;
                    $log_data['screen_row']=2;
                    $log_data['serial']='01';
                    $log_data['car_number']=$data['car_number'];
                    $log_data['duration']=$data['duration'];
                    $log_data['price']=$data['price'];
                    $log_data['channel_id']=$data['channel_id'];
                    $log_data['park_type']=1;
                    $log_data['add_time']=time();

                    fdump_api([$log_data,$data],'showVoice_log_1',1);

                    $db_park_showscreen_log->add($log_data);
                }elseif($data['car_type']=='month_type'){
                    $log_data['content']=$config_info['mouth_line_1'];
                    $log_data['content_type']= 2;
                    $log_data['screen_row']=2;
                    $log_data['serial']='01';
                    $log_data['car_number']=$data['car_number'];
                    $log_data['duration']=$data['duration'];
                    $log_data['price']=$data['price'];
                    $log_data['channel_id']=$data['channel_id'];
                    $log_data['park_type']=1;
                    $log_data['add_time']=time();
                    fdump_api([$log_data,$data],'showVoice_log_1',1);
                    $db_park_showscreen_log->add($log_data);
                }
            }
            //出场

            if ($data['passage']['passage_direction'] == 0){
                if ($data['car_type']=='temporary_type'){
                    $log_data['content']=$config_info['temp_line_1'];
                    $log_data['content_type']= 2;
                    $log_data['screen_row']=2;
                    $log_data['serial']='01';
                    $log_data['car_number']=$data['car_number'];
                    $log_data['duration']=$data['duration'];
                    $log_data['price']=$data['price'];
                    $log_data['channel_id']=$data['channel_id'];
                    $log_data['park_type']=2;
                    $log_data['add_time']=time();
                    fdump_api([$log_data,$data],'showVoice_log_1',1);
                    $db_park_showscreen_log->add($log_data);
                }elseif($data['car_type']=='month_type'){
                    $log_data['content']=$config_info['mouth_line_1'];
                    $log_data['content_type']= 2;
                    $log_data['screen_row']=2;
                    $log_data['serial']='01';
                    $log_data['car_number']=$data['car_number'];
                    $log_data['end_time']=$data['end_time'];
                    $log_data['channel_id']=$data['channel_id'];
                    $log_data['park_type']=2;
                    $log_data['add_time']=time();

                    fdump_api([$log_data,$data],'showVoice_log_1',1);

                    $db_park_showscreen_log->add($log_data);
                }
            }
        }
        /*----------添加语音指令end-----------*/
    }

    /**
     * 获取语音配置
     * @author:zhubaodi
     * @date_time: 2022/4/15 13:12
     */
    public function getVoiceSet($village_id,$passage_id){
        $db_park_passage=new ParkPassage();
        $db_house_village_park_showscreen_config=new HouseVillageParkShowscreenConfig();
        $service_D3_show_screen=new D3ShowScreenService();
        $passage_info=$db_park_passage->getFind(['village_id'=>$village_id,'id'=>$passage_id]);
        $voiceTempData=[];
        $voiceMouthData=[];
        $voice=[];
        if (!empty($passage_info)){
            $voiceArr=$service_D3_show_screen->getVoiceArr();
            $where=[
                'village_id'=>$village_id,
                'passage_id'=>$passage_id,
                'screen_type'=>2,
            ];
            $voice=$db_house_village_park_showscreen_config->getFind($where);
            if (!empty($voice)){
                $voice['temp_line_1']=(int)$voice['temp_line_1'];
                $voice['mouth_line_1']=(int)$voice['mouth_line_1'];
            }
            if (!empty($voiceArr)){
                foreach ($voiceArr as $v){
                    if (in_array($passage_info['passage_direction'],$v['passage_type'])){
                        if (in_array(1,$v['car_type'])){
                            $voiceTempData1['key']=$v['key'];
                            $voiceTempData1['txt']=$v['txt'];
                            $voiceTempData[]=$voiceTempData1;
                        }
                        if (in_array(2,$v['car_type'])){
                            $voiceMouthData1['key']=$v['key'];
                            $voiceMouthData1['txt']=$v['txt'];
                            $voiceMouthData[]=$voiceMouthData1;
                        }
                    }
                }
            }
        }
        $list=[];
        $list['setData']=$voice;
        $list['mouthList']=$voiceMouthData;
        $list['tempList']=$voiceTempData;
        return $list;
    }

    /**
     * 获取显屏配置
     * @author:zhubaodi
     * @date_time: 2022/4/15 14:45
     */
    public function getScreenSet($village_id,$passage_id){
        $db_park_passage=new ParkPassage();
        $db_house_village_park_showscreen_config=new HouseVillageParkShowscreenConfig();
        $park_sys_type=$this->checkVillageParkConfig($village_id);
        $passage_info=$db_park_passage->getFind(['village_id'=>$village_id,'id'=>$passage_id]);
        $voice=[];
        if (!empty($passage_info)) {
            $where = [
                'village_id' => $village_id,
                'passage_id' => $passage_id,
                'screen_type' => 1,
                'park_sys_type'=>$park_sys_type
            ];
            $voice = $db_house_village_park_showscreen_config->getFind($where,'temp_line_1,temp_line_2,temp_line_3,temp_line_4,mouth_line_1,mouth_line_2,mouth_line_3,mouth_line_4');
        }
        return $voice;
    }


    /**
     * 设置语音配置项
     * @author:zhubaodi
     * @date_time: 2022/4/15 13:12
     */
    public function setVoiceSet($village_id,$passage_id,$temp_id,$mouth_id){
        $db_park_passage=new ParkPassage();
        $db_park_showscreen_log=new ParkShowscreenLog();
        $db_house_village_park_showscreen_config=new HouseVillageParkShowscreenConfig();
        $park_sys_type=$this->checkVillageParkConfig($village_id);
        $passage_info=$db_park_passage->getFind(['village_id'=>$village_id,'id'=>$passage_id]);
        $res=0;
        if (!empty($passage_info)){
            $where=[
                'village_id'=>$village_id,
                'passage_id'=>$passage_id,
                'screen_type'=>2,
                'park_sys_type'=>$park_sys_type
            ];
            $voice=$db_house_village_park_showscreen_config->getFind($where);
            $set_data=[];
            $set_data['village_id']=$village_id;
            $set_data['passage_id']=$passage_id;
            $set_data['screen_type']=2;
            $set_data['park_sys_type']=$park_sys_type;
            $set_data['add_time']=time();
            if (!empty($temp_id)){
                $set_data['temp_line_1']=$temp_id;
            }
            if (!empty($mouth_id)){
                $set_data['mouth_line_1']=$mouth_id;
            }
            //   print_r([$where,$set_data,$voice]);die;
            if (!empty($voice)){
                $res=$db_house_village_park_showscreen_config->save_one($where,$set_data);
            }else{
                $res=$db_house_village_park_showscreen_config->addOne($set_data);
            }
        }
        return $res;
    }

    /**
     * 设置显屏配置项
     * @author:zhubaodi
     * @date_time: 2022/4/15 14:45
     */
    public function setScreenSet($village_id,$passage_id,$content){
        $db_park_passage=new ParkPassage();
        $db_park_showscreen_log=new ParkShowscreenLog();
        $db_house_village_park_showscreen_config=new HouseVillageParkShowscreenConfig();
        $park_sys_type=$this->checkVillageParkConfig($village_id);
        $passage_info=$db_park_passage->getFind(['village_id'=>$village_id,'id'=>$passage_id]);
        $res=0;
        if (!empty($passage_info)){
            $where=[
                'village_id'=>$village_id,
                'passage_id'=>$passage_id,
                'screen_type'=>1,
                'park_sys_type'=>$park_sys_type
            ];
            $voice=$db_house_village_park_showscreen_config->getFind($where);
            $set_data=[];
            $set_data['village_id']=$village_id;
            $set_data['passage_id']=$passage_id;
            $set_data['screen_type']=1;
            $set_data['park_sys_type']=$park_sys_type;
            $set_data['add_time']=time();
            if (!empty($content['temp_line_1'])){
                $set_data['temp_line_1']=trim($content['temp_line_1']);
            }
            if (!empty($content['temp_line_2'])){
                $set_data['temp_line_2']=trim($content['temp_line_2']);
            }
            if (!empty($content['temp_line_3'])){
                $set_data['temp_line_3']=trim($content['temp_line_3']);
            }
            if (!empty($content['temp_line_4'])){
                $set_data['temp_line_4']=trim($content['temp_line_4']);
            }
            if (!empty($content['mouth_line_1'])){
                $set_data['mouth_line_1']=trim($content['mouth_line_1']);
            }
            if (!empty($content['mouth_line_2'])){
                $set_data['mouth_line_2']=trim($content['mouth_line_2']);
            }
            if (!empty($content['mouth_line_3'])){
                $set_data['mouth_line_3']=trim($content['mouth_line_3']);
            }
            if (!empty($content['mouth_line_4'])){
                $set_data['mouth_line_4']=trim($content['mouth_line_4']);
            }
            if (!empty($voice)){
                $res=$db_house_village_park_showscreen_config->save_one($where,$set_data);
            }else{
                $res=$db_house_village_park_showscreen_config->addOne($set_data);
            }
            if ($res>0){
                $log_data=[];
                $log_data['village_id']=$village_id;
                $log_data['park_sys_type']=$park_sys_type;
                $log_data['content_type']=1;
                $log_data['channel_id']=$passage_info['device_number'];
                $log_data['add_time']=time();
                $log_data['orderType']=25;
                //车辆入场
                if ($passage_info['passage_direction'] == 1){
                    $log_data['park_type']=1;
                }
                //车辆出场
                if ($passage_info['passage_direction'] == 0){
                    $log_data['park_type']=2;
                }
                if (!empty($set_data['temp_line_1'])){
                    $log_data['content']=$set_data['temp_line_1'];
                    //竖屏
                    if($passage_info['device_type']==2){
                        if (mb_strlen($set_data['temp_line_1'])>6){
                            $log_data['content']=mb_substr($set_data['temp_line_1'],0,6);
                        }
                    }
                    $log_data['screen_row']=1;
                    $log_data['serial']='01';
                    $db_park_showscreen_log->add($log_data);
                }
                if (!empty($set_data['temp_line_2'])){
                    $log_data['content']=$set_data['temp_line_2'];
                    //竖屏
                    if($passage_info['device_type']==2){
                        if (mb_strlen($set_data['temp_line_2'])>6){
                            $log_data['content']=mb_substr($set_data['temp_line_2'],0,6);
                        }
                    }
                    $log_data['screen_row']=2;
                    $log_data['serial']='02';
                    $db_park_showscreen_log->add($log_data);
                }
                if (!empty($set_data['temp_line_3'])){
                    $log_data['content']=$set_data['temp_line_3'];
                    //竖屏
                    if($passage_info['device_type']==2){
                        if (mb_strlen($set_data['temp_line_2'])>6){
                            $log_data['content']=mb_substr($set_data['temp_line_2'],0,6);
                        }
                    }
                    $log_data['screen_row']=3;
                    $log_data['serial']='03';
                    $db_park_showscreen_log->add($log_data);
                }
                if (!empty($set_data['temp_line_4'])){
                    $log_data['content']=$set_data['temp_line_4'];
                    //竖屏
                    if($passage_info['device_type']==2){
                        if (mb_strlen($set_data['temp_line_4'])>6){
                            $log_data['content']=mb_substr($set_data['temp_line_4'],0,6);
                        }
                    }
                    $log_data['screen_row']=4;
                    $log_data['serial']='04';
                    $db_park_showscreen_log->add($log_data);
                }
            }
        }
        return $res;
    }


    public function getCarInfo($data){
        $db_house_village_user_bind=new HouseVillageUserBind();
        $db_user=new User();
        $arr=[];
        $userBindInfo=$db_house_village_user_bind->getSumBills(['pigcms_id'=>$data['pigcms_id'],'village_id'=>$data['village_id']],'pigcms_id,village_id,uid,name,phone');
        if (empty($userBindInfo)||empty($userBindInfo['name'])||empty($userBindInfo['phone'])){
            $userInfo=$db_user->getOne(['uid'=>$data['uid']],'uid,phone,nickname');
            if (empty($userBindInfo['name'])&&!empty($userInfo['nickname'])){
                $arr['name']=$userInfo['nickname'];
            }elseif(!empty($userBindInfo['name'])){
                $arr['name']=$userInfo['name'];
            }else{
                $arr['name']='';
            }
            if (empty($userBindInfo['phone'])&&!empty($userInfo['phone'])){
                $arr['phone']=$userInfo['phone'];
            }elseif(!empty($userBindInfo['phone'])){
                $arr['phone']=$userInfo['phone'];
            }else{
                $arr['phone']='';
            }
        }else{
            $arr['name']=$userBindInfo['name'];
            $arr['phone']=$userBindInfo['phone'];
        }
        $arr['car_number']='';
        $info = (new HouseVillageParkConfig())->getFind(['village_id' => $data['village_id']]);
        if (!empty($data['channel_id'])&&in_array($info['park_sys_type'],['D3','A11'])){
            $db_park_passage = new ParkPassage();
            //查询设备
            $passage_info = $db_park_passage->getFind(['channel_number' => $data['channel_id'], 'village_id'=>$data['village_id'],'status' => 1]);
            $where = [
                ['channel_id', '=', $passage_info['device_number']],
                ['park_type', '=', 1],
                ['add_time', '>=', (time() - 600)],
                ['add_time', '<=', (time() + 180)],
            ];
            $db_park_plateresult_log = new ParkPlateresultLog();
            $log_info = $db_park_plateresult_log->get_one($where);
            if (!empty($log_info)){
                $arr['car_number']= $log_info['car_number'];
            }
            $arr['nolicence']=true;
        }else{
            $arr['nolicence']=true;
        }

        if (!empty($info)&&$info['temp_in_park_type']==0&&in_array($info['park_sys_type'],['D3','A11'])){
            $village_info = (new HouseVillage())->getOne($data['village_id'],'village_name');
            $arr['tips']=$village_info['village_name'].'小区禁止临时车入场';
        }else{
            $arr['tips']='';
        }
        return $arr;
    }


    /**
     * 添加白名单
     * @author:zhubaodi
     * @date_time: 2022/6/24 17:37
     */
    public function addWhitelist($data){
        $db_house_village_parking_car=new HouseVillageParkingCar();
        $db_park_white_record=new ParkWhiteRecord();
        $db_park_passage=new ParkPassage();
        $passage_info=$db_park_passage->getList(['village_id'=>$data['village_id'],'park_sys_type'=>'D3'],'id,village_id,channel_number,device_number,passage_direction,park_sys_type');
        if (!empty($passage_info)){
            $passage_info=$passage_info->toArray();
        }
        fdump_api([$passage_info,$data],'addWhitelist_0629',1);
        $province = mb_substr($data['car_number'], 0, 1);
        $car_no = mb_substr($data['car_number'], 1);
        $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no,'village_id'=>$data['village_id']]);
        fdump_api([$car_info,$province,$car_no,$data['village_id'],$car_info['end_time']],'addWhitelist_0629',1);
        if (!empty($passage_info)&&!empty($car_info)&&$car_info['end_time']>100){
            foreach ($passage_info as $value){
                $white_arr=[
                    'village_id'=>$data['village_id'],
                    'park_sys_type'=>'D3',
                    'channel_id'=>$value['id'],
                    'car_number'=>$data['car_number'],
                    'enable'=>1,
                    'need_alarm'=>0,
                    'operate_type'=>0,
                    'start_time'=>isset($car_info['start_time'])&&!empty($car_info['start_time'])?$car_info['start_time']:time(),
                    'end_time'=>isset($car_info['end_time'])&&!empty($car_info['end_time'])?$car_info['end_time']:time(),
                    'add_time'=>time(),
                ];
                $id=$db_park_white_record->add($white_arr);
                fdump_api([$id,$white_arr],'addWhitelist_0629',1);
            }
            return true;
        }
        return false;
    }

    /**
     * 添加删除白名单指令
     * @author:zhubaodi
     * @date_time: 2022/6/24 17:37
     */
    public function delWhitelist($data){
        $db_house_village_parking_car=new HouseVillageParkingCar();
        $db_park_white_record=new ParkWhiteRecord();
        $db_park_passage=new ParkPassage();
        $passage_info=$db_park_passage->getList(['village_id'=>$data['village_id'],'park_sys_type'=>'D3'],'id,village_id,channel_number,device_number,passage_direction,park_sys_type');
        if (!empty($passage_info)){
            $passage_info=$passage_info->toArray();
        }
        if (!empty($passage_info)){
            foreach ($passage_info as $value){
                $white_arr=[
                    'village_id'=>$data['village_id'],
                    'park_sys_type'=>'D3',
                    'channel_id'=>$value['id'],
                    'car_number'=>$data['car_number'],
                    'enable'=>1,
                    'need_alarm'=>0,
                    'operate_type'=>1,
                    'start_time'=>time(),
                    'end_time'=>time(),
                    'add_time'=>time(),
                ];
                $id=$db_park_white_record->add($white_arr);
                fdump_api([$data,$id,$white_arr],'delWhitelist_0629',1);
            }
        }
    }

    /**
     * 查询白名单列表
     * @author:zhubaodi
     * @date_time: 2022/6/24 17:37
     */
    public function getWhitelist($data){
        $db_park_white_record=new ParkWhiteRecord();
        $db_park_passage=new ParkPassage();
        $record_info=[];
        if (!empty($data['device_number'])){
            $passage_info=$db_park_passage->getFind(['device_number'=>$data['device_number']],'id,village_id,channel_number,device_number,passage_direction,park_sys_type');
            if (!empty($passage_info)){
                $record_info=$db_park_white_record->getFind(['village_id'=>$passage_info['village_id'],'channel_id'=>$passage_info['id']],'*');
                if (!empty($record_info)){
                    $db_park_white_record->delOne(['id'=>$record_info['id']]);
                }
            }
        }
        return $record_info;
    }


    /**
     * 添加停车支付结果查询指令
     * @author:zhubaodi
     * @date_time: 2022/7/9 13:53
     */
    public function addParkPayRecord($order_no){
        fdump_api([$order_no],'addParkPayRecord_0728',1);
        $db_pay_order_info = new PayOrderInfo();
        $db_plat_order = new PlatOrder();
        $db_house_new_pay_order=new HouseNewPayOrder();
        $db_park_plateresult_log=new ParkPlateresultLog();
        $db_park_scrcu_record=new ParkScrcuRecord();
        if (empty($order_no)) {
            return false;
        }
        $payOrderInfo=$db_pay_order_info->getByOrderNo($order_no);
        fdump_api([$order_no,$payOrderInfo],'addParkPayRecord_0728',1);
        if (empty($payOrderInfo)||empty($payOrderInfo['business_order_id'])) {
            return false;
        }
        $platOrder=$db_plat_order->get_one(['order_id'=>$payOrderInfo['business_order_id']]);
        fdump_api([$payOrderInfo['business_order_id'],$platOrder],'addParkPayRecord_0728',1);
        if (!empty($payOrderInfo)&&$payOrderInfo['paid']==1){
            if (!empty($platOrder)&&$platOrder['paid']==1){
                return false;
            }
        }
        $house_new_pay_order=$db_house_new_pay_order->get_one(['summary_id'=>$platOrder['business_id'],'order_type'=>'park_new','car_type'=>'temporary_type'],'car_number,order_id,summary_id,village_id');
        fdump_api([$house_new_pay_order,$platOrder['business_id']],'addParkPayRecord_0728',1);
        if (empty($house_new_pay_order)||empty($house_new_pay_order['car_number'])||empty($house_new_pay_order['village_id'])){
            return false;
        }
        $park_info=$db_park_plateresult_log->get_one(['car_number'=>$house_new_pay_order['car_number'],'park_type'=>2]);
        fdump_api([$park_info,$house_new_pay_order['car_number']],'addParkPayRecord_0728',1);
        if (empty($park_info)||empty($park_info['channel_id'])||($park_info['add_time']+300)<time()){
            return false;
        }
        $arr=[
            'car_number'=>$house_new_pay_order['car_number'],
            'channel_id'=>$park_info['channel_id'],
            'order_number'=>$order_no,
            'add_time'=>time(),
        ];
        $res=$db_park_scrcu_record->add($arr);
        fdump_api([$res,$arr],'addParkPayRecord_0728',1);
        return true;
    }

    /**
     * 处理停车支付结果查询指令
     * @author:zhubaodi
     * @date_time: 2022/7/9 15:45
     */
    public function getParkPayRecord($channel_id){

        $db_pay_order_info = new PayOrderInfo();
        $db_plat_order= new PlatOrder();
        $db_park_scrcu_record=new ParkScrcuRecord();
        //  $service_scrcu=new ScrcuService();
        $service_scrcu=new PayService();
        if (empty($channel_id)) {
            return false;
        }
        $notime=time();
        $add_time=$notime-7200;
        $whereArr=array();
        $whereArr[]=array('channel_id','=',$channel_id);
        $whereArr[]=array('over','=',0);
        $whereArr[]=array('add_time','>=',$add_time);
        $record_info= $db_park_scrcu_record->get_one($whereArr);
        if (empty($record_info)||empty($record_info['order_number'])){
            return false;
        }

        $payOrderInfo=$db_pay_order_info->getByOrderNo($record_info['order_number']);
        $platOrderInfo=$db_plat_order->get_one(['order_id'=>$payOrderInfo['business_order_id']]);

        if (!empty($platOrderInfo)&&$platOrderInfo['paid']==1) {
            $db_park_scrcu_record->delOne(['id'=>$record_info['id']]);
            return false;
        }
        $pay_order_id = isset($platOrderInfo['business_id']) ? intval($platOrderInfo['business_id']) : 0;
        $pay_time = isset($platOrderInfo['pay_time']) ? $platOrderInfo['pay_time'] : $payOrderInfo['paid_time'];
        $park_sys_type = 'D3';
        $db_house_village_parking_temp=new HouseVillageParkingTemp();
        fdump_api([$channel_id,$platOrderInfo],'getParkPayRecord_0906',1);
        if ((!empty($payOrderInfo)&&$payOrderInfo['channel']=='scrcu'&&$payOrderInfo['paid']==1)) {
            $db_in_park = new InPark();
            $db_out_park = new OutPark();
            $db_park_passage = new ParkPassage();
            $db_house_village = new HouseVillage();
            $db_house_village_car_access_record = new HouseVillageCarAccessRecord();
            $now_time=time();
            //查询设备
            $passage_info = $db_park_passage->getFind(['device_number' => $channel_id, 'status' => 1, 'park_sys_type' => $park_sys_type]);
            // 记录车辆进入信息
            $car_access_record = [];
            $car_access_record['channel_id']=$passage_info['id'];
            $car_access_record['channel_number']=$passage_info['channel_number'];
            $car_access_record['channel_name']=$passage_info['passage_name'];
            $village_info = $db_house_village->getOne($passage_info['village_id'], 'village_name');
            $whereInRecord = ['car_number' => $record_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0, 'del_time' => 0];
            $in_park_pay_info = $db_in_park->getOne1($whereInRecord);
            if (!empty($in_park_pay_info)) {
                $park_temp_info = $db_house_village_parking_temp->getOne(['car_number' => $record_info['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1]);
                //写入车辆入场表
                $park_data = [];
                $park_data['out_time'] = $now_time;
                $park_data['is_out'] = 1;
                $park_data['is_paid'] = 1;
                $res_in=$db_in_park->saveOne(['car_number' => $record_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0], $park_data);
                $out_data = [];
                $out_data['car_number'] = $record_info['car_number'];
                $out_data['park_sys_type'] = $park_sys_type;
                if (!empty($in_park_pay_info)) {
                    $out_data['in_time'] = $in_park_pay_info['in_time'];
                    $out_data['order_id'] = isset($in_park_pay_info['order_id']) && $in_park_pay_info['order_id'] ? $in_park_pay_info['order_id'] : '';
                }
                $out_data['out_time'] = $now_time;
                $out_data['park_id'] = $passage_info['village_id'];
                $out_data['pay_type'] = 'scancode';
                $out_data['total'] = round_number($payOrderInfo['money']/100,2);
                $starttime = time() - 30;
                $endtime = time() + 30;
                $park_where = [
                    ['car_number', '=', $record_info['car_number']],
                    ['park_id', '=', $passage_info['village_id']],
                    ['out_time', '>=', $starttime],
                    ['out_time', '<=', $endtime],
                ];
                $park_info_car = $db_out_park->getOne($park_where);
                //写入车辆入场表
                if (! $park_info_car || !isset($park_info_car['id'])) {
                    $insert_id = $db_out_park->insertOne($out_data);
                } else {
                    $insert_id = $park_info_car['id'];
                }
                $park_where = [
                    ['car_number', '=', $record_info['car_number']],
                    ['park_id', '=', $passage_info['village_id']],
                    ['accessType', '=',1],
                    ['is_out', '=', 0],
                    ['del_time', '=', 0],
                ];
                $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                $car_access_record['business_type'] = 0;
                $car_access_record['business_id'] = $passage_info['village_id'];
                $car_access_record['car_number'] = $record_info['car_number'];
                $car_access_record['accessType'] = 2;
                $car_access_record['coupon_id'] = isset($park_temp_info['coupon_id'])?$park_temp_info['coupon_id']:0;
                $car_access_record['park_time'] =$now_time-$in_park_pay_info['in_time'] ;
                $car_access_record['total'] =round_number($payOrderInfo['money']/100,2);
                $car_access_record['accessTime'] = $now_time;
                $car_access_record['accessMode'] = 4;
                if (empty($park_info_car111)){
                    $car_access_record['exception_type'] = 2;
                }else{
                    $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                }
                $car_access_record['park_sys_type'] = 'D3';
                $car_access_record['is_out'] = 1;
                $car_access_record['park_id'] = $passage_info['village_id'];
                $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                //  $car_access_record['total'] = 0;
                // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                $car_access_record['pay_type'] = $this->pay_type[6];
                $car_access_record['update_time'] = $now_time;
                $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                if (isset($insert_id)) {
                    $car_access_record['from_id'] = $insert_id;
                }
                $car_access_record['pay_order_id'] = $pay_order_id;
                $car_access_record['pay_time'] = $pay_time;
                if ($park_temp_info && isset($park_temp_info['is_pay_scene']) && intval($park_temp_info['is_pay_scene']) === 0) {
                    $car_access_record['is_paid'] = 2;
                } else {
                    $car_access_record['is_paid'] = 1;
                }
                $record_id = $db_house_village_car_access_record->addOne($car_access_record);
            }
            $res_edit=$db_park_scrcu_record->saveOne(['id'=>$record_info['id']],['over'=>1,'over_time'=>time()]);
            return true;
        }
        try {
            $pay=$service_scrcu->query($record_info['order_number']);
        }catch (\Exception $e){
            return false;
        }
        fdump_api([$pay],'getParkPayRecord_0906',1);
        if (!isset($pay)||empty($pay)||$pay['error']!=0){
            if($pay && ((isset($pay['msg']) && (strpos($pay['msg'],'无此交易')||strpos($pay['msg'],'订单不存在')))||(isset($pay['orderStat'])&&($pay['orderStat']=='04')))){
                $db_park_scrcu_record->delOne(['id'=>$record_info['id']]);
            }
            return false;
        }else{
            $db_in_park = new InPark();
            $db_out_park = new OutPark();
            $db_park_passage = new ParkPassage();
            $db_house_village = new HouseVillage();
            $db_house_village_car_access_record = new HouseVillageCarAccessRecord();
            $now_time=time();
            //查询设备
            $passage_info = $db_park_passage->getFind(['device_number' => $channel_id, 'status' => 1, 'park_sys_type' => $park_sys_type]);
            // 记录车辆进入信息
            $car_access_record = [];
            $car_access_record['channel_id']=$passage_info['id'];
            $car_access_record['channel_number']=$passage_info['channel_number'];
            $car_access_record['channel_name']=$passage_info['passage_name'];
            $village_info = $db_house_village->getOne($passage_info['village_id'], 'village_name');
            $whereInRecord = ['car_number' => $record_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => 'D3', 'is_out' => 0, 'del_time' => 0];
            $in_park_pay_info = $db_in_park->getOne1($whereInRecord);
            if (!empty($in_park_pay_info)) {
                $park_temp_info = $db_house_village_parking_temp->getOne(['car_number' => $record_info['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1]);
                //写入车辆入场表
                $park_data = [];
                $park_data['out_time'] = $now_time;
                $park_data['is_out'] = 1;
                $park_data['is_paid'] = 1;
                $res_in=$db_in_park->saveOne(['car_number' => $record_info['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => 'D3', 'is_out' => 0], $park_data);
                $out_data = [];
                $out_data['car_number'] = $record_info['car_number'];
                $out_data['park_sys_type'] = $park_sys_type;
                if (!empty($in_park_pay_info)) {
                    $out_data['in_time'] = $in_park_pay_info['in_time'];
                    $out_data['order_id'] = isset($in_park_pay_info['order_id']) && $in_park_pay_info['order_id'] ? $in_park_pay_info['order_id'] : '';
                }
                $out_data['out_time'] = $now_time;
                $out_data['park_id'] = $passage_info['village_id'];
                $out_data['pay_type'] = 'scancode';
                $out_data['total'] = round_number($payOrderInfo['money']/100,2);
                $starttime = time() - 30;
                $endtime = time() + 30;
                $park_where = [
                    ['car_number', '=', $record_info['car_number']],
                    ['park_id', '=', $passage_info['village_id']],
                    ['out_time', '>=', $starttime],
                    ['out_time', '<=', $endtime],
                ];
                $park_info_car = $db_out_park->getOne($park_where);
                //写入车辆入场表
                if (! $park_info_car || !isset($park_info_car['id'])) {
                    $insert_id = $db_out_park->insertOne($out_data);
                } else {
                    $insert_id = $park_info_car['id'];
                }
                $park_where = [
                    ['car_number', '=', $record_info['car_number']],
                    ['park_id', '=', $passage_info['village_id']],
                    ['accessType', '=',1],
                    ['is_out', '=', 0],
                    ['del_time', '=', 0],
                ];
                $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                $car_access_record['business_type'] = 0;
                $car_access_record['business_id'] = $passage_info['village_id'];
                $car_access_record['car_number'] = $record_info['car_number'];
                $car_access_record['accessType'] = 2;
                $car_access_record['coupon_id'] = isset($park_temp_info['coupon_id'])?$park_temp_info['coupon_id']:0;
                $car_access_record['park_time'] =$now_time-$in_park_pay_info['in_time'] ;
                $car_access_record['total'] =round_number($payOrderInfo['money']/100,2);
                $car_access_record['accessTime'] = $now_time;
                $car_access_record['accessMode'] = 4;
                if (empty($park_info_car111)){
                    $car_access_record['exception_type'] = 2;
                }else{
                    $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                }
                $car_access_record['park_sys_type'] = 'D3';
                $car_access_record['is_out'] = 1;
                $car_access_record['park_id'] = $passage_info['village_id'];
                $car_access_record['park_name'] = $village_info['village_name']?$village_info['village_name']:'';
                $car_access_record['order_id'] = isset($park_info_car111['order_id']) && $park_info_car111['order_id'] ? $park_info_car111['order_id'] : '';
                //  $car_access_record['total'] = 0;
                // 支付类型,cash:现金支付，wallet:余额支付,sweepcode:扫码支付,escape:逃单出场
                // cash 现金支付  wallet 电子钱包、免密支付  sweepcode 扫码枪支付微信，或支付宝等 monthuser 月卡支付 free 免费放行 scancode 通道扫码支付微信，或支付宝 escape 逃单出场
                //交易流水号(pay_type为wallet、scancode、sweepcode必传)
                $car_access_record['pay_type'] = $this->pay_type[6];
                $car_access_record['update_time'] = $now_time;
                $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                if (isset($insert_id)) {
                    $car_access_record['from_id'] = $insert_id;
                }
                $car_access_record['pay_order_id'] = $pay_order_id;
                $car_access_record['pay_time'] = $pay_time;
                if ($park_temp_info && isset($park_temp_info['is_pay_scene']) && intval($park_temp_info['is_pay_scene']) === 0) {
                    $car_access_record['is_paid'] = 2;
                } else {
                    $car_access_record['is_paid'] = 1;
                }
                $record_id = $db_house_village_car_access_record->addOne($car_access_record);
            }
            $res_edit=$db_park_scrcu_record->saveOne(['id'=>$record_info['id']],['over'=>1,'over_time'=>time()]);
            return true;
        }
    }

    public function addParkInfo($data){
        $serialTime = isset($data['serialTime']) ? $data['serialTime'] : date('YmdH');
        $db_park_passage=new ParkPassage();
        $db_house_village_parking_car=new HouseVillageParkingCar();
        $db_house_village_car_access_record=new HouseVillageCarAccessRecord();
        $db_house_village_parking_temp=new HouseVillageParkingTemp();
        $db_house_new_pay_order=new HouseNewPayOrder();
        $db_in_park=new InPark();
        $db_out_park=new OutPark();
        $park_sys_type=$this->checkVillageParkConfig($data['village_id']);
        $passage_info=$db_park_passage->getFind(['id'=>$data['id'],'status'=>1,'village_id'=>$data['village_id']],'id,village_id,channel_number,device_number,passage_direction,park_sys_type,passage_name');
        if (empty($passage_info) || $passage_info->isEmpty()){
            fdump_api(['line' => __LINE__, 'data' => $data, 'errMsg' => "当前通道设备不存在"],'A11/serial'.$serialTime,true);
            throw new \think\Exception("当前通道设备不存在");
        }
        $passage_info=$passage_info->toArray();
        $db_house_village_parking_garage=new HouseVillageParkingGarage();
        $garage_id=0;
        if (!empty($passage_info['passage_area'])&&$passage_info['area_type']==2){
            $garage_id=$passage_info['passage_area'];
        }
        if(isset($passage_info['garage_id']) && $passage_info['garage_id']>0){
            $garage_id=$passage_info['garage_id'];
        }
        $garage_info=array();
        $is_real_garage=1;
        if($garage_id>0){
            $garage_info=$db_house_village_parking_garage->getOne(['garage_id'=>$garage_id]);
            if($garage_info && !$garage_info->isEmpty()){
                $garage_info=$garage_info->toArray();
                if($garage_info['fid']>0 && $garage_info['fid']==$garage_info['garage_id']){
                    $garage_info['fid']=0;
                }
                
                if($garage_info['fid']>0 && $garage_info['fid']!=$garage_info['garage_id'] ){
                    $is_real_garage=0;
                }
            }
        }
        $now_time=time();
        $record_id=0;
        //查询车辆到期时间
        if (!empty($data['car_number'])&&$data['car_number']!='无'){
            $province = mb_substr($data['car_number'], 0, 1);
            $car_no = mb_substr($data['car_number'], 1);
            $car_info = $db_house_village_parking_car->getFind(['province' => $province, 'car_number' => $car_no,'village_id'=>$passage_info['village_id']]);
        }else{
            $car_info=[];
        }
        //月卡车通行
        if (!empty($car_info)&&$car_info['end_time']>0){
            $accessMode=5;
        }else{
            $accessMode=7;
        }
        // 记录车辆进入信息
        $car_access_record = [];
        $car_access_record['channel_id']=$passage_info['id'];
        $car_access_record['channel_number']=$passage_info['channel_number'];
        $car_access_record['channel_name']=$passage_info['passage_name'];
        $car_access_record['user_name'] = empty($data['user_name'])?'':$data['user_name'];
        $car_access_record['user_phone'] =empty($data['user_phone'])?'':$data['user_phone'];
        $car_access_record['business_type'] = 0;
        $car_access_record['business_id'] = $passage_info['village_id'];
        $car_access_record['car_number'] = $data['car_number'];
        $car_access_record['accessTime'] = strtotime($data['accessTime']);
        $car_access_record['park_id'] = $passage_info['village_id'];
        $car_access_record['park_name'] = $data['village_name']?$data['village_name']:'';
        $car_access_record['park_sys_type'] = $passage_info['park_sys_type'];
        $car_access_record['accessImage'] = $data['img'];
        if (isset($data['optcode'])){
            $car_access_record['optname'] = $data['optcode'];
        }
        fdump_api(['line' => __LINE__, 'car_access_record' => $car_access_record, 'passage_direction' => $passage_info['passage_direction']],'A11/serial'.$serialTime,true);
        //入场
        if ($passage_info['passage_direction']==1){
            $park_data = [];
            $park_data['car_number'] = $data['car_number'];
            $park_data['in_time'] = strtotime($data['accessTime']);
            $park_data['order_id'] = uniqid();
            $park_data['in_channel_id'] = $passage_info['id'];
            $park_data['is_paid'] = 0;
            $park_data['park_id'] = $passage_info['village_id'];
            $park_data['park_sys_type'] = $passage_info['park_sys_type'];
            $park_data['park_name'] = $data['village_name'];
            $starttime = time() - 30;
            $endtime = time() + 30;
            $park_where = [
                ['car_number', '=', $data['car_number']],
                ['park_id', '=', $passage_info['village_id']],
                ['in_time', '>=', $starttime],
                ['in_time', '<=', $endtime],
                ['del_time', '=', 0],
            ];
            $park_info_car = $db_in_park->getOne1($park_where);
            fdump_api(['line' => __LINE__, 'park_data' => $park_data, 'park_where' => $park_where],'A11/serial'.$serialTime,true);
            if (empty($park_info_car)) {
                $insert_id=$db_in_park->insertOne($park_data);
                fdump_api(['line' => __LINE__, 'insert_id' => $insert_id],'A11/serial'.$serialTime,true);
            }

            $car_access_record['accessType'] = 1;
            $car_access_record['accessMode'] =$accessMode;
            $car_access_record['exception_type']=1;
            $car_access_record['is_out'] = 0;
            $car_access_record['order_id'] = date('YmdHis').rand(100,999);
            $car_access_record['update_time'] = $now_time;
            if (isset($insert_id)&&!empty($insert_id)) {
                $car_access_record['from_id'] = $insert_id;
            }
            fdump_api(['line' => __LINE__, 'car_access_record' => $car_access_record],'A11/serial'.$serialTime,true);
            $record_id = $db_house_village_car_access_record->addOne($car_access_record);
            if($record_id>0 && $is_real_garage>0){
                //将此条之前的 都改掉
                $wherexArr=[];
                $wherexArr[]=['record_id','<',$record_id];
                $wherexArr[]=['car_number','=',$data['car_number']];
                $wherexArr[]=['is_out','=',0];
                $wherexArr[]=['business_id','=',$passage_info['village_id']];
                $db_house_village_car_access_record->saveOne($wherexArr,['is_out'=>1,'update_time'=>$now_time]);
                fdump_api(['line' => __LINE__,'msg' => '更改出场', 'wherexArr' => $wherexArr, 'now_time' => $now_time],'A11/serial'.$serialTime,true);
            }
            
        }
        //出场
        if ($passage_info['passage_direction']==0){
            $whereInRecord = ['car_number' => $data['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0, 'del_time' => 0];
            $in_park_pay_info = $db_in_park->getOne1($whereInRecord);

            fdump_api(['line' => __LINE__,'msg' => '出场', 'in_park_pay_info' => ($in_park_pay_info && !is_array($in_park_pay_info)) ? $in_park_pay_info->toArray() : $in_park_pay_info],'A11/serial'.$serialTime,true);
            $park_time = 0;
            if (!empty($in_park_pay_info)) {
                $in_time = isset($in_park_pay_info['in_time']) ? intval($in_park_pay_info['in_time']) : 0;
                $in_time > 0 && $in_time < $now_time && $park_time = $now_time - $in_time;
                if (!empty($in_park_pay_info['pay_order_id'])) {
                    fdump_api(['line' => __LINE__,'msg' => '存在支付订单记录', 'pay_order_id' => $in_park_pay_info['pay_order_id']],'A11/serial'.$serialTime,true);
//                    $park_temp_info = $db_house_village_parking_temp->getOne(['car_number' => $data['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1]);
                    $pay_info = $db_house_new_pay_order->get_one(['summary_id' => $in_park_pay_info['pay_order_id'], 'is_paid' => 1]);
                    fdump_api(['line' => __LINE__,'msg' => '支付订单', 'pay_info' => ($pay_info && !is_array($pay_info)) ? $pay_info->toArray() : $pay_info],'A11/serial'.$serialTime,true);
                    if (!empty($pay_info)) {
                        //写入车辆入场表
                        $park_data = [];
                        $park_data['out_time'] = strtotime($data['accessTime']);
                        $park_data['is_out'] = 1;
                        $park_data['is_paid'] = 1;
                        $park_time > 0 && $park_data['park_time'] = $park_time;
                        $whereInOut = ['car_number' => $data['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0];
                        $res_in = $db_in_park->saveOne($whereInOut, $park_data);
                        fdump_api(['line' => __LINE__,'msg' => '写入车辆入场表', 'whereInOut' => $whereInOut, 'park_data' => $park_data, 'res_in' => $res_in],'A11/serial'.$serialTime,true);
                        $out_data = [];
                        $out_data['car_number'] = $data['car_number'];
                        if (!empty($in_park_pay_info)) {
                            $out_data['in_time'] = $in_park_pay_info['in_time'];
                            $out_data['order_id'] = $in_park_pay_info['order_id'];
                        }
                        $out_data['out_time'] = strtotime($data['accessTime']);
                        $out_data['park_id'] = $passage_info['village_id'];
                        $out_data['pay_type'] = 'cash';
                        $out_data['total'] = $data['price'];
                        $starttime = time() - 30;
                        $endtime = time() + 30;
                        $park_where = [
                            ['car_number', '=', $data['car_number']],
                            ['business_id','=',$passage_info['village_id']],
                            ['out_time', '>=', $starttime],
                            ['out_time', '<=', $endtime],
                        ];
                        $park_info_car = $db_out_park->getOne($park_where);
                        fdump_api(['line' => __LINE__,'msg' => '写入车辆入场表', 'park_where' => $park_where],'A11/serial'.$serialTime,true);
                        //写入车辆入场表
                        if (empty($park_info_car)) {
                            $park_time > 0 && $out_data['park_time'] = $park_time;
                            $insert_id= $db_out_park->insertOne($out_data);
                            fdump_api(['line' => __LINE__,'msg' => '添加出场表', 'insert_id' => $insert_id],'A11/serial'.$serialTime,true);
                        }
                        $park_where = [
                            ['car_number', '=', $data['car_number']],
                            ['park_id', '=', $passage_info['village_id']],
                            ['accessType', '=',1],
                            ['is_out', '=', 0],
                            ['del_time', '=', 0],
                        ];
                        $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                        $car_access_record['accessType'] = 2;
                        $car_access_record['park_time'] =$data['park_time'];
                        $car_access_record['total'] =$data['price'];
                        $car_access_record['accessMode'] = $accessMode;
                        if (empty($park_info_car111)){
                            $car_access_record['exception_type'] = 2;
                        }else{
                            fdump_api(['line' => __LINE__,'msg' => '查询对应出场记录', 'record_id' => $park_info_car111['record_id']],'A11/serial'.$serialTime,true);
                            $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                        }
                        $car_access_record['is_out'] = 1;
                        $car_access_record['is_paid'] = 1;
                        $car_access_record['order_id'] = $park_info_car111['order_id'];
                        $car_access_record['pay_type'] = $this->pay_type[0];
                        $car_access_record['update_time'] = $now_time;
                        $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                        if (isset($insert_id)) {
                            $car_access_record['from_id'] = $insert_id;
                        }
                        $park_time > 0 && $car_access_record['park_time'] = $park_time;
                        fdump_api(['line' => __LINE__,'msg' => '记录出场', 'car_access_record' => $car_access_record],'A11/serial'.$serialTime,true);
                        $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                        if($record_id>0 && $is_real_garage>0){
                            //将此条之前的 都改掉
                            $wherexArr=[];
                            $wherexArr[]=['record_id','<',$record_id];
                            $wherexArr[]=['car_number','=',$data['car_number']];
                            $wherexArr[]=['is_out','=',0];
                            $wherexArr[]=['business_id','=',$passage_info['village_id']];
                            $db_house_village_car_access_record->saveOne($wherexArr,['is_out'=>1,'update_time'=>$now_time]);
                            fdump_api(['line' => __LINE__,'msg' => '更改之前记录为已出场', 'record_id' => $record_id, 'wherexArr' => $wherexArr, 'whenow_timerexArr' => $now_time],'A11/serial'.$serialTime,true);
                        }
                    }
                }
                else{
                    $where_park_temp = ['car_number' => $data['car_number'], 'village_id' => $passage_info['village_id'], 'order_id' => $in_park_pay_info['order_id'],'is_paid' => 1];
                    $park_temp_info = $db_house_village_parking_temp->getOne($where_park_temp);
                    fdump_api(['line' => __LINE__,'msg' => '临时中间表数据', 'where_park_temp' => $where_park_temp, 'park_temp_info' => ($park_temp_info && !is_array($park_temp_info)) ? $park_temp_info->toArray() : $park_temp_info],'A11/serial'.$serialTime,true);
                    if (!empty($park_temp_info)) {
                        //写入车辆入场表
                        $duration = isset($park_temp_info['duration']) ? intval($park_temp_info['duration']) : 0;
                        $park_data = [];
                        $park_data['out_time'] = strtotime($data['accessTime']);
                        $park_data['is_out'] = 1;
                        $park_data['is_paid'] = 1;
                        $duration > 0 && $park_time = $duration * 60;
                        $park_time > 0 && $park_data['park_time'] = $park_time;
                        $whereInOut = ['car_number' => $data['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0];
                        $res_in=$db_in_park->saveOne($whereInOut, $park_data);
                        fdump_api(['line' => __LINE__,'msg' => '写入车辆入场表', 'whereInOut' => $whereInOut, 'park_data' => $park_data, 'res_in' => $res_in],'A11/serial'.$serialTime,true);
                        $out_data = [];
                        $out_data['car_number'] = $data['car_number'];
                        if (!empty($in_park_pay_info)) {
                            $out_data['in_time'] = $in_park_pay_info['in_time'];
                            $out_data['order_id'] = $in_park_pay_info['order_id'];
                        }
                        $out_data['out_time'] = strtotime($data['accessTime']);
                        $out_data['park_id'] = $passage_info['village_id'];
                        $out_data['pay_type'] = 'cash';
                        $out_data['total'] = $data['price'];
                        $starttime = time() - 30;
                        $endtime = time() + 30;
                        $park_where = [
                            ['car_number', '=', $data['car_number']],
                            ['park_id', '=', $passage_info['village_id']],
                            ['out_time', '>=', $starttime],
                            ['out_time', '<=', $endtime],
                        ];
                        fdump_api(['line' => __LINE__,'msg' => '写入车辆出场表', 'park_where' => $park_where, 'out_data' => $out_data],'A11/serial'.$serialTime,true);
                        $park_info_car = $db_out_park->getOne($park_where);
                        //写入车辆入场表
                        if (empty($park_info_car)) {
                            $park_time > 0 && $out_data['park_time'] = $park_time;
                            $insert_id= $db_out_park->insertOne($out_data);
                            fdump_api(['line' => __LINE__,'msg' => '添加车辆出场表', 'insert_id' => $insert_id],'A11/serial'.$serialTime,true);
                        }
                        $park_where = [
                            ['car_number', '=', $data['car_number']],
                            ['park_id', '=', $passage_info['village_id']],
                            ['accessType', '=',1],
                            ['is_out', '=', 0],
                            ['del_time', '=', 0],
                        ];
                        $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                        $car_access_record['accessType'] = 2;
                        $car_access_record['coupon_id'] = isset($park_temp_info['coupon_id'])?$park_temp_info['coupon_id']:0;
                        $car_access_record['park_time'] =$data['park_time'];
                        $car_access_record['total'] =$data['price'];
                        if (empty($park_info_car111)){
                            $car_access_record['exception_type'] = 2;
                        }else{
                            fdump_api(['line' => __LINE__,'msg' => '查询对应出场记录', 'record_id' => $park_info_car111['record_id']],'A11/serial'.$serialTime,true);
                            $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                        }
                        $car_access_record['accessMode'] = $accessMode;
                        $car_access_record['is_out'] = 1;
                        $car_access_record['is_paid'] = 1;
                        $car_access_record['order_id'] = $park_info_car111['order_id'];
                        $car_access_record['pay_type'] = $this->pay_type[0];
                        $car_access_record['update_time'] = $now_time;
                        $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                        if (isset($insert_id)) {
                            $car_access_record['from_id'] = $insert_id;
                        }
                        $park_time > 0 && $car_access_record['park_time'] = $park_time;
                        fdump_api(['line' => __LINE__,'msg' => '添加出场记录', 'car_access_record' => $car_access_record],'A11/serial'.$serialTime,true);
                        $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                        if($record_id>0 && $is_real_garage>0){
                            //将此条之前的 都改掉
                            $wherexArr=[];
                            $wherexArr[]=['record_id','<',$record_id];
                            $wherexArr[]=['car_number','=',$data['car_number']];
                            $wherexArr[]=['is_out','=',0];
                            $wherexArr[]=['business_id','=',$passage_info['village_id']];
                            $db_house_village_car_access_record->saveOne($wherexArr,['is_out'=>1,'update_time'=>$now_time]);
                        }
                        fdump_api([$record_id,$car_access_record],'open_gate_0519',1);
                    } else{
                        //写入车辆入场表
                        $park_data = [];
                        $park_data['out_time'] = strtotime($data['accessTime']);
                        $park_data['is_out'] = 1;
                        $park_data['is_paid'] = 1;
                        $park_time > 0 && $park_data['park_time'] = $park_time;
                        $whereInOut = ['car_number' => $data['car_number'], 'park_id' => $passage_info['village_id'], 'park_sys_type' => $park_sys_type, 'is_out' => 0];
                        $res_in=$db_in_park->saveOne($whereInOut, $park_data);
                        fdump_api(['line' => __LINE__,'msg' => '写入车辆入场表', 'whereInOut' => $whereInOut, 'park_data' => $park_data, 'res_in' => $res_in],'A11/serial'.$serialTime,true);
                        $out_data = [];
                        $out_data['car_number'] = $data['car_number'];
                        $out_data['out_time'] = strtotime($data['accessTime']);
                        $out_data['park_id'] = $passage_info['village_id'];
                        $out_data['total'] =$data['price'];
                        $out_data['pay_type'] = 'cash';
                        $starttime = time() - 30;
                        $endtime = time() + 30;
                        $park_where = [
                            ['car_number', '=', $data['car_number']],
                            ['park_id', '=', $passage_info['village_id']],
                            ['out_time', '>=', $starttime],
                            ['out_time', '<=', $endtime],
                        ];
                        fdump_api(['line' => __LINE__,'msg' => '写入车辆出场表', 'park_where' => $park_where, 'out_data' => $out_data],'A11/serial'.$serialTime,true);
                        $park_info_car = $db_out_park->getOne($park_where);
                        //写入车辆入场表
                        if (empty($park_info_car)) {
                            $park_time > 0 && $out_data['park_time'] = $park_time;
                            $insert_id=$db_out_park->insertOne($out_data);
                            fdump_api(['line' => __LINE__,'msg' => '添加车辆出场表', 'insert_id' => $insert_id],'A11/serial'.$serialTime,true);
                        }
                        $park_where = [
                            ['car_number', '=', $data['car_number']],
                            ['park_id', '=', $passage_info['village_id']],
                            ['accessType', '=',1],
                            ['is_out', '=', 0],
                            ['del_time', '=', 0],
                        ];
                        $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);
                        $car_access_record['accessType'] = 2;
                        $car_access_record['accessMode'] = $accessMode;
                        $car_access_record['is_out'] = 1;
                        $car_access_record['is_paid'] = 1;
                        if (isset($park_info_car111['order_id'])&&!empty($park_info_car111['order_id'])){
                            $car_access_record['order_id'] = $park_info_car111['order_id'];
                        }
                        if (empty($park_info_car111)){
                            $car_access_record['exception_type'] = 2;
                        }else{
                            fdump_api(['line' => __LINE__,'msg' => '查询对应出场记录', 'record_id' => $park_info_car111['record_id']],'A11/serial'.$serialTime,true);
                            $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                        }
                        $car_access_record['total'] = $data['price'];
                        $car_access_record['park_time'] = $data['park_time'];
                        $car_access_record['pay_type'] = $this->pay_type[0];
                        $car_access_record['update_time'] = $now_time;
                        $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                        if (isset($insert_id)) {
                            $car_access_record['from_id'] = $insert_id;
                        }
                        $park_time > 0 && $car_access_record['park_time'] = $park_time;
                        fdump_api(['line' => __LINE__,'msg' => '添加出场记录', 'car_access_record' => $car_access_record],'A11/serial'.$serialTime,true);
                        $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                        if($record_id>0  && $is_real_garage>0){
                            //将此条之前的 都改掉
                            $wherexArr=[];
                            $wherexArr[]=['record_id','<',$record_id];
                            $wherexArr[]=['car_number','=',$data['car_number']];
                            $wherexArr[]=['is_out','=',0];
                            $wherexArr[]=['business_id','=',$passage_info['village_id']];
                            $db_house_village_car_access_record->saveOne($wherexArr,['is_out'=>1,'update_time'=>$now_time]);
                            fdump_api(['line' => __LINE__,'msg' => '更改之前记录为已出场', 'record_id' => $record_id, 'wherexArr' => $wherexArr, 'whenow_timerexArr' => $now_time],'A11/serial'.$serialTime,true);
                        }
                    }
                }
            }
            else{
                $out_data = [];
                $out_data['car_number'] = $data['car_number'];
                $out_data['out_time'] = strtotime($data['accessTime']);
                $out_data['park_id'] = $passage_info['village_id'];
                $out_data['total'] =$data['price'];
                $out_data['pay_type'] = 'cash';
                $starttime = time() - 30;
                $endtime = time() + 30;
                $park_where = [
                    ['car_number', '=', $data['car_number']],
                    ['park_id', '=', $passage_info['village_id']],
                    ['out_time', '>=', $starttime],
                    ['out_time', '<=', $endtime],
                ];
                fdump_api(['line' => __LINE__,'msg' => '查询最近1分钟出场记录', 'park_where' => $park_where, 'out_data' => $out_data],'A11/serial'.$serialTime,true);
                $park_info_car = $db_out_park->getOne($park_where);
                //写入车辆入场表
                if (empty($park_info_car)) {
                    $park_time > 0 && $out_data['park_time'] = $park_time;
                    $insert_id=$db_out_park->insertOne($out_data);
                    fdump_api(['line' => __LINE__,'msg' => '添加车辆出场表', 'insert_id' => $insert_id],'A11/serial'.$serialTime,true);
                }
                $park_where = [
                    ['car_number', '=', $data['car_number']],
                    ['park_id', '=', $passage_info['village_id']],
                    ['accessType', '=',1],
                    ['is_out', '=', 0],
                    ['del_time', '=', 0],
                ];
                $park_info_car111 = $db_house_village_car_access_record->getOne($park_where);

                $car_access_record['accessType'] = 2;
                $car_access_record['accessMode'] = $accessMode;
                $car_access_record['exception_type'] = 2;
                $car_access_record['is_out'] = 1;
                $car_access_record['is_paid'] = 1;
                if (isset($park_info_car111['order_id'])&&!empty($park_info_car111['order_id'])){
                    $car_access_record['order_id'] = $park_info_car111['order_id'];
                }
                if (empty($park_info_car111)){
                    $car_access_record['exception_type'] = 2;
                }else{
                    fdump_api(['line' => __LINE__,'msg' => '查询对应出场记录', 'record_id' => $park_info_car111['record_id']],'A11/serial'.$serialTime,true);
                    $db_house_village_car_access_record->saveOne(['record_id'=>$park_info_car111['record_id']],['is_out'=>1]);
                }
                $car_access_record['total'] = $data['price'];
                $car_access_record['park_time'] = $data['park_time'];
                $car_access_record['pay_type'] = $this->pay_type[0];
                $car_access_record['update_time'] = $now_time;
                $car_access_record['trade_no'] = time() . rand(10, 99) . sprintf("%08d", $passage_info['village_id']);
                if (isset($insert_id)) {
                    $car_access_record['from_id'] = $insert_id;
                }
                $park_time > 0 && $car_access_record['park_time'] = $park_time;
                fdump_api(['line' => __LINE__,'msg' => '添加出场记录', 'car_access_record' => $car_access_record],'A11/serial'.$serialTime,true);
                $record_id = $db_house_village_car_access_record->addOne($car_access_record);
                if($record_id>0  && $is_real_garage>0){
                    //将此条之前的 都改掉
                    $wherexArr=[];
                    $wherexArr[]=['record_id','<',$record_id];
                    $wherexArr[]=['car_number','=',$data['car_number']];
                    $wherexArr[]=['is_out','=',0];
                    $wherexArr[]=['business_id','=',$passage_info['village_id']];
                    $db_house_village_car_access_record->saveOne($wherexArr,['is_out'=>1,'update_time'=>$now_time]);
                    fdump_api(['line' => __LINE__,'msg' => '更改之前记录为已出场', 'record_id' => $record_id, 'wherexArr' => $wherexArr, 'whenow_timerexArr' => $now_time],'A11/serial'.$serialTime,true);
                }
            }
        }
        return $record_id;
    }


    /**
     * 查询母车位下对应子车位信息列表
     * @author:zhubaodi
     * @date_time: 2022/7/29 9:08
     */
    public function getChildrenPositionList($data){
        $db_house_village_parking_position=new HouseVillageParkingPosition();
        $db_house_village_park_config=new HouseVillageParkConfig();
        $house_village_park_config=$db_house_village_park_config->getFind(['village_id' => $data['village_id']]);
        $data1=[];
        $data1['list'] =[];
        $data1['total_limit'] = 0;
        $data1['count'] =0;
        $data1['children_arr_info'] ='';
        if ($house_village_park_config['children_position_type']!=1){
            return $data1;
        }
        $where=[];
        $where['village_id']=$data['village_id'];
        $where['position_id']=$data['position_id'];
        $position_info=$db_house_village_parking_position->getFind($where);
        if (empty($position_info)||$position_info['children_type']==2){
            return $data1;
        }
        $children_where=[];
        $children_where['pp.parent_position_id']=$position_info['position_id'];
        $children_where['pp.garage_id']=$position_info['garage_id'];
        $children_where['pp.children_type']=2;
        if (!isset($data['page'])){
            $data['page']=0;
        }
        if (!isset($data['limit'])){
            $data['limit']=0;
        }
        $list=$db_house_village_parking_position->getLists($children_where,'*',$data['page'],$data['limit']);
        if (!empty($list)){
            $list=$list->toArray();
            if (!empty($list)){
                foreach ($list as &$vv){
                    if (empty($vv['position_area'])){
                        $vv['position_area']='0.00';
                    }
                    if ($vv['position_status']==1){
                        $vv['position_status_txt']='空置';
                    }
                    if ($vv['position_status']==2){
                        $vv['position_status_txt']='已使用';
                    }
                    if ($vv['position_pattern']==1){
                        $vv['position_pattern_txt']='真实车位';
                    }else{
                        $vv['position_pattern_txt']='虚拟车位';
                    }
                }
            }
        }
        $count = $db_house_village_parking_position->getCount($children_where);

        $children_arr_where=[];
        $children_arr_where['parent_position_id']=$position_info['position_id'];
        $children_arr_where['garage_id']=$position_info['garage_id'];
        $children_arr_where['children_type']=2;
        $children_arr = $db_house_village_parking_position->getColumn($children_arr_where,'position_num');
        $children_arr_info='';
        if (!empty($children_arr)){
            $children_arr_info=implode(',',$children_arr);
        }
        $data1=[];
        $data1['list'] = $list;
        $data1['total_limit'] = $data['limit'];
        $data1['count'] = $count;
        $data1['children_arr_info'] =$children_arr_info;
        return  $data1;
    }

    /**
     * 纪录遥控上报信息
     * @author:zhubaodi
     * @date_time: 2022/12/5 9:33
     */
    public function addSerialData($data){
        $db_park_passage = new ParkPassage();
        $db_house_village_park_config=new HouseVillageParkConfig();
        $db_park_plateresult_log=new ParkPlateresultLog();
        $db_park_serial_log=new ParkSerialLog();
        $db_house_village=new HouseVillage();
        if (empty($data['serialno'])){
            return false;
        }
        $passage_info=$db_park_passage->getFind(['device_number'=>$data['serialno'],'status'=>1]);
        if (empty($passage_info) || $passage_info->isEmpty()){
            return false;
        }
        $passage_info=$passage_info->toArray();

        $device_numberArr=array();
        $serialnoArr=array();
        if($passage_info['passage_type']==2){
            $passage_info_list=$db_park_passage->getList(['village_id'=>$passage_info['village_id'],'status'=>1,'park_sys_type'=>$passage_info['park_sys_type'],'passage_type'=>2]);
            if($passage_info_list && !$passage_info_list->isEmpty()){
                $passage_info_list=$passage_info_list->toArray();
                foreach ($passage_info_list as $kk=>$vv){
                    $device_numberArr[$vv['device_number']]=$vv;
                    $serialnoArr[]=$vv['device_number'];
                }
            }
        }
        $no_code=$data_code=$operation_code=$function_code=[];
        $house_village_park_config=$db_house_village_park_config->getFind(['village_id' => $passage_info['village_id']]);
        if (empty($house_village_park_config)){
            return false;
        }

        $whereArr=array();
        $timeTmp=time()-7200;  //2小时前数据
        $whereArr[]=['channel_id','=',$data['serialno']];
        $whereArr[]=['village_id','=',$passage_info['village_id']];
        $whereArr[]=['add_time','<=',$timeTmp];
        $db_park_serial_log->del_datas($whereArr); //删掉2小时前数据

        $whereArr=array();
        $timeTmp=time()-3600;  //1小时内
        $whereArr[]=['channel_id','=',$data['serialno']];
        $whereArr[]=['village_id','=',$passage_info['village_id']];
        $whereArr[]=['content_de','=',$data['msg']];
        $whereArr[]=['add_time','>',$timeTmp];
        $haveResObj=$db_park_serial_log->get_one($whereArr);
        $ishaveExist=false;
        $timeTmp=time()-10;
        if($haveResObj && !$haveResObj->isEmpty()){
            $haveRes= $haveResObj->toArray();
            if(!empty($haveRes) && $haveRes['add_time']>=$timeTmp){
                //10秒内多次提交同样的数据过滤掉
                fdump_api(['msg' => '5秒内多次提交同样的数据过滤掉', 'haveRes' => $haveRes], 'A11/addSerialData'.$data['serialno'], 1);
                $ishaveExist=true;
            }
        }
        $village_info=$db_house_village->getOne($passage_info['village_id'],'village_name');
        $arr=[
            'channel_id'=>$data['serialno'],
            'content'=>$data['content'],
            'content_de'=>$data['msg'],
            'village_id'=>$passage_info['village_id'],
            'park_sys_type'=>$house_village_park_config['park_sys_type'],
            'add_time'=>time()
        ];
        $res=$db_park_serial_log->add($arr);
        if (stripos($data['msg'],'AFAB')!==false){
            $msg=str_replace('AFAB','AF,AB',$data['msg']);
            $arr_msg=explode(',',$msg);
            if (!empty($arr_msg)){
                foreach ($arr_msg as $v){
                    $function_code[]=substr($v,6,2);
                    $operation_code[]=substr($v,8,2);
                    $data_code[]=substr($v,10,2);
                    $no_code[]=substr($v,12,8);
                }
            }
        }else{
            $function_code[]=substr($data['msg'],6,2);
            $operation_code[]=substr($data['msg'],8,2);
            $data_code[]=substr($data['msg'],10,2);
            $no_code[]=substr($data['msg'],12,8);
        }
        if (!in_array('78',$function_code)||!in_array('01',$operation_code)||!in_array('06',$data_code)){
            return false;
        }
        if($ishaveExist){
            //10秒内多次提交同样的数据过滤掉
            return false;
        }
        if (empty($no_code)){
            $optcode='';
        }else{
            foreach ($no_code as $v){
                if ($v!='00000000'){
                    $optcode=base_convert($v,16,10);
                    break;
                }
            }
        }

        $where=[
            ['channel_id','=',$data['serialno']],
            ['village_id','=',$passage_info['village_id']],
            ['park_sys_type','=',$house_village_park_config['park_sys_type']],
            ['car_number','<>','_无_'],
        ];
        if(!empty($serialnoArr)){
            $where=[
                ['channel_id','in',$serialnoArr],
                ['village_id','=',$passage_info['village_id']],
                ['park_sys_type','=',$house_village_park_config['park_sys_type']],
                ['car_number','<>','_无_'],
            ];
        }

        $plateresult=$db_park_plateresult_log->get_one($where);
        if (!isset($plateresult['car_number']) || !$plateresult['car_number']) {
            return false;
        }

        if($device_numberArr && isset($device_numberArr[$plateresult['channel_id']])){
            $passage_info=$device_numberArr[$plateresult['channel_id']];
        }
        $data_add=[
            'id'=>$passage_info['id'],
            'village_id'=>$passage_info['village_id'],
            'car_number'=> '无',
            'accessTime'=>date('Y-m-d H:i:s'),
            'user_phone'=>'',
            'user_name'=>'',
            'village_name'=>$village_info['village_name'],
            'img'=>'',
            'price'=>0,
            'park_time'=>0,
            'optcode'=>$optcode,
        ];
        if (!empty($plateresult)&&($plateresult['add_time']+300)>time()){
            if ($passage_info['passage_direction']==0){
                $service_a11=new A11Service();
                $temp=[
                    'car_number'=>$plateresult['car_number'],
                    'village_id'=>$passage_info['village_id'],
                    'device_number'=> $data['serialno'],
                    'uid'=>'',
                ];
                try {
                    $pay=$service_a11->get_temp_pay($temp);
                }catch (\Exception $e) {
                    $txt = $e->getMessage();
                    fdump_api(['msg' => '错误', '$txt' => $txt ], 'A11/addSerialData'.$data['serialno'], 1);
                    $pay=[];
                }
            }else{
                $pay=[];
            }
            if (empty($pay)){
                $price=0;
                $park_time=0;
            }else{
                $price=$pay['pay_money'];
                $park_time=$pay['park_time'];
            }
            $data_add['price']=$price;
            $data_add['park_time']=$park_time;
            $data_add['car_number']=$plateresult['car_number'];
        }
        if (!$data_add['price'] || $data_add['price'] <= 0) {
            $db_in_park = new InPark();
            $db_house_village_parking_temp = new HouseVillageParkingTemp();
            $park_sys_type = $this->checkVillageParkConfig($passage_info['village_id']);
            $whereInPark = [
                'car_number' => $plateresult['car_number'],
                'park_id' => $passage_info['village_id'],
                'park_sys_type' => $park_sys_type,
                'is_out' => 0,
                'del_time' => 0
            ];
            $in_park_pay_info = $db_in_park->getOne1($whereInPark, 'order_id');
            if (!empty($in_park_pay_info)) {
                $order_id = isset($in_park_pay_info['order_id']) && $in_park_pay_info['order_id'] ? $in_park_pay_info['order_id'] : 0;
                $park_temp_id = isset($pay) && isset($pay['park_temp_id']) && $pay['park_temp_id'] ? $pay['park_temp_id'] : 0;
                $whereTemp = [];
                $whereTemp[] = ['car_number', '=', $plateresult['car_number']];
                $whereTemp[] = ['village_id', '=', $passage_info['village_id']];
                $whereTemp[] = ['order_id', '=', $order_id];
                $whereTemp[] = ['is_paid',  '=', 0];
                if ($park_temp_id) {
                    $whereTemp[] = ['id', '<>', $park_temp_id];
                }
                $park_temp_info = $db_house_village_parking_temp->getOne($whereTemp);
                $total = isset($park_temp_info['total']) && $park_temp_info['total'] ? $park_temp_info['total'] : 0;
                $data_add['price'] = $total;
            }
        }
        fdump_api(['msg' => '相关信息', '$data_add' => $data_add], 'A11/addSerialData'.$data['serialno'], 1);
        try {
            $res1 = $this->addParkInfo($data_add);
        }catch (\Exception $e) {
            $txt  = $e->getMessage();
            $res1 = 0;
            fdump_api(['msg' => '错误2', '$txt' => $txt ], 'A11/addSerialData'.$data['serialno'], 1);
        }
        if ($res1){
            $showscreen_data=[];
            $showscreen_data['passage']=$passage_info;
            $showscreen_data['village_id']=$passage_info['village_id'];
            $showscreen_data['car_number']= $plateresult['car_number'];
            $showscreen_data['channel_id']= $data['serialno'];
            $showscreen_data['voice_content']= 11;
            $showscreen_data['content']= '岗亭人工确认，请通行';
            $showscreen_data['car_type']= 'temporary_type';
            $service_A11=new A11Service();
            fdump_api(['showscreen_data' => $showscreen_data], 'A11/addSerialData'.$data['serialno'], 1);
            $service_A11->addParkShowScreenLog($showscreen_data);
        }
        return  true;
    }

    /**
     * 纪录遥控上报信息
     * *端口触发信息推送
     * @author:Li
     * @date_time: 2023/03/09 9:33
     */
    public function addPortData($data){
        $db_park_passage = new ParkPassage();
        $db_house_village_park_config=new HouseVillageParkConfig();
        $db_park_plateresult_log=new ParkPlateresultLog();
        $db_house_village=new HouseVillage();
        $datahour=date('mdH');
        fdump_api(['data' => $data], 'A11/00addPortData'.$datahour, 1);
        if (empty($data['serialno']) || $data['opt_source']!==0){
            /***opt_source 0表示开闸***/
            return false;
        }
        $passage_info=$db_park_passage->getFind(['device_number'=>$data['serialno'],'status'=>1]);
        if (empty($passage_info) || $passage_info->isEmpty()){
            return false;
        }
        $passage_info=$passage_info->toArray();
        $device_numberArr=array();
        $serialnoArr=array();
        if($passage_info['passage_type']==2){
            $passage_info_list=$db_park_passage->getList(['village_id'=>$passage_info['village_id'],'status'=>1,'park_sys_type'=>$passage_info['park_sys_type'],'passage_type'=>2]);
            if($passage_info_list && !$passage_info_list->isEmpty()){
                $passage_info_list=$passage_info_list->toArray();
                foreach ($passage_info_list as $kk=>$vv){
                    $device_numberArr[$vv['device_number']]=$vv;
                    $serialnoArr[]=$vv['device_number'];
                }
            }
        }
        fdump_api(['passage_info' => $passage_info,'device_numberArr'=>$device_numberArr], 'A11/00addPortData'.$datahour, 1);
        $house_village_park_config=$db_house_village_park_config->getFind(['village_id' => $passage_info['village_id']]);
        if (empty($house_village_park_config) || $house_village_park_config->isEmpty()){
            return false;
        }
        $house_village_park_config=$house_village_park_config->toArray();
        fdump_api(['house_village_park_config' => $house_village_park_config], 'A11/00addPortData'.$datahour, 1);
        $village_info=$db_house_village->getOne($passage_info['village_id'],'village_name');
        $where=[
            ['channel_id','=',$data['serialno']],
            ['village_id','=',$passage_info['village_id']],
            ['park_sys_type','=',$house_village_park_config['park_sys_type']],
            ['car_number','<>','_无_'],
        ];
        if(!empty($serialnoArr)){
            $where=[
                ['channel_id','in',$serialnoArr],
                ['village_id','=',$passage_info['village_id']],
                ['park_sys_type','=',$house_village_park_config['park_sys_type']],
                ['car_number','<>','_无_'],
            ];
        }
        $plateresult=$db_park_plateresult_log->get_one($where);
        if($plateresult && !$plateresult->isEmpty()){
            $plateresult= $plateresult->toArray();
        }
        fdump_api(['where'=>$where,'plateresult' => $plateresult], 'A11/00addPortData'.$datahour, 1);
        if (!isset($plateresult['car_number']) || !$plateresult['car_number']) {
            return false;
        }
        if($device_numberArr && isset($device_numberArr[$plateresult['channel_id']])){
            $passage_info=$device_numberArr[$plateresult['channel_id']];
        }
        fdump_api(['new_passage_info' => $passage_info], 'A11/00addPortData'.$datahour, 1);
        $data_add=[
            'id'=>$passage_info['id'],
            'village_id'=>$passage_info['village_id'],
            'car_number'=> '无',
            'accessTime'=>date('Y-m-d H:i:s'),
            'user_phone'=>'',
            'user_name'=>'',
            'village_name'=>$village_info['village_name'],
            'img'=>'',
            'price'=>0,
            'park_time'=>0,
            'optcode'=>'',
        ];
        $nowtime=time();
        if (!empty($plateresult)&&($plateresult['add_time']+300)>$nowtime){
            if ($passage_info['passage_direction']==0){
                $service_a11=new A11Service();
                $temp=[
                    'car_number'=>$plateresult['car_number'],
                    'village_id'=>$passage_info['village_id'],
                    'device_number'=> $data['serialno'],
                    'uid'=>'',
                ];
                try {
                    $pay=$service_a11->get_temp_pay($temp);
                    fdump_api(['temp'=>$temp,'pay' => $pay ], 'A11/00addPortData'.$datahour, 1);
                }catch (\Exception $e) {
                    $txt = $e->getMessage();
                    fdump_api(['msg' => '错误', '$txt' => $txt ], 'A11/00addPortData'.$datahour, 1);
                    $pay=[];
                }
            }else{
                $pay=[];
            }
            if (empty($pay)){
                $price=0;
                $park_time=0;
            }else{
                $price=$pay['pay_money'];
                $park_time=$pay['park_time'];
            }
            $data_add['price']=$price;
            $data_add['park_time']=$park_time;
            $data_add['car_number']=$plateresult['car_number'];
        }
        if (!$data_add['price'] || $data_add['price'] <= 0) {
            $db_in_park = new InPark();
            $db_house_village_parking_temp = new HouseVillageParkingTemp();
            $park_sys_type = $this->checkVillageParkConfig($passage_info['village_id']);
            $whereInPark = [
                'car_number' => $plateresult['car_number'],
                'park_id' => $passage_info['village_id'],
                'park_sys_type' => $park_sys_type,
                'is_out' => 0,
                'del_time' => 0
            ];
            $in_park_pay_info = $db_in_park->getOne1($whereInPark, 'order_id');
            if (!empty($in_park_pay_info)) {
                $order_id = isset($in_park_pay_info['order_id']) && $in_park_pay_info['order_id'] ? $in_park_pay_info['order_id'] : 0;
                $park_temp_id = isset($pay) && isset($pay['park_temp_id']) && $pay['park_temp_id'] ? $pay['park_temp_id'] : 0;
                $whereTemp = [];
                $whereTemp[] = ['car_number', '=', $plateresult['car_number']];
                $whereTemp[] = ['village_id', '=', $passage_info['village_id']];
                $whereTemp[] = ['order_id', '=', $order_id];
                $whereTemp[] = ['is_paid',  '=', 0];
                if ($park_temp_id) {
                    $whereTemp[] = ['id', '<>', $park_temp_id];
                }
                $park_temp_info = $db_house_village_parking_temp->getOne($whereTemp);
                $total = isset($park_temp_info['total']) && $park_temp_info['total'] ? $park_temp_info['total'] : 0;
                $data_add['price'] = $total;
            }
        }
        fdump_api(['msg' => '相关信息', 'data_add' => $data_add], 'A11/00addPortData'.$datahour, 1);
        try {
            $res1 = $this->addParkInfo($data_add);
        }catch (\Exception $e) {
            $txt  = $e->getMessage();
            $res1 = 0;
            fdump_api(['msg' => '错误2', '$txt' => $txt ], 'A11/00addPortData'.$datahour, 1);
        }
        if ($res1){
            $showscreen_data=[];
            $showscreen_data['passage']=$passage_info;
            $showscreen_data['village_id']=$passage_info['village_id'];
            $showscreen_data['car_number']= $plateresult['car_number'];
            $showscreen_data['channel_id']= $passage_info['device_number'];
            $showscreen_data['voice_content']= 11;
            $showscreen_data['content']= '岗亭人工确认，请通行';
            $showscreen_data['car_type']= 'temporary_type';
            $service_A11=new A11Service();
            fdump_api(['showscreen_data' => $showscreen_data], 'A11/00addPortData'.$datahour, 1);
            $service_A11->addParkShowScreenLog($showscreen_data);
        }
        return  true;
    }
}