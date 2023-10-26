<?php
/**
 * 设备相关
 * @author weili
 * @datetime 2020/8/3
 */

namespace app\community\model\service;

use app\common\model\service\ConfigService;
use app\community\model\db\HouseFaceDevice;   //人脸门禁
use app\community\model\db\HouseCameraDevice; //人脸识别摄像机
use app\community\model\db\HouseUserLog;
use app\community\model\db\HouseVillageDoor; //蓝牙门禁
use app\community\model\db\HouseVillageFloor;
use app\community\model\db\HouseVillageInfo;
use app\community\model\db\HouseVillagePileEquipment;
use app\community\model\db\HouseVillagePublicArea;
use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageUserVacancy;
use app\community\model\db\IntelligenceExpress; //智能快递柜
use app\community\model\db\ParkPassage; //智慧停车场
use app\community\model\db\HouseVillageParkConfig; //智慧停车场配置
use app\community\model\db\HouseSmartCharging;//智能充电桩
use app\community\model\db\HouseElectricDevice;//智能电瓶车
use app\community\model\db\ParkSystem;
use app\community\model\db\HouseCameraReply;
use app\community\model\db\FaceA185Indoor;
use app\consts\DahuaConst;
use app\consts\HikConst;
use face\hikvision\iSecureCenter;
use app\community\model\db\HouseCameraDeviceVtype;
use app\traits\FaceDevicePassRecordTraits;
use think\facade\Queue;

class HouseFaceDeviceService
{
    use FaceDevicePassRecordTraits;

    public $brand_list = [
        ['id'=>1,'name'=>'海康'],
        ['id'=>2,'name'=>'大华']
    ];
    public $device_type_list = [
        ['id'=>1,'name'=>'普通视频监控'],
        ['id'=>2,'name'=>'高空抛物视频监控']
    ];

    /**
     * @param int $brand_id
     * @return mixed|string
     */
    public function getBrandName($brand_id=0)
    {
        $brand_name = '';
        foreach ($this->brand_list as $v){
            if($v['id'] == $brand_id){
                $brand_name = $v['name'];
            }
        }
        return $brand_name;
    }

    /**
     * 设备品牌
     * @author lijie
     * @date_time 2022/01/13
     * @return string[]
     */
    public function getBrandList()
    {
        $brand_list = (new HardwareBrandService())->getBrand(5);
        return $brand_list;
    }
    
    public function getCameraThirdProtocols($village_id) {
        return [
            ['label' => HikConst::HIK_YUNMO_NEIBU_SHEQU_TITLE, 'value' => HikConst::HIK_YUNMO_NEIBU_SHEQU, 'name' => 'thirdProtocol'],
            ['label' => HikConst::HIK_YUNMO_NEIBU_6000C_TITLE, 'value' => HikConst::HIK_YUNMO_NEIBU_6000C, 'name' => 'thirdProtocol'],
            ['label' => DahuaConst::DH_YUNRUI_TITLE, 'value' => DahuaConst::DH_YUNRUI, 'name' => 'thirdProtocol'],
            ['label' => HikConst::HIK_ISC_V151_TITLE, 'value' => HikConst::HIK_ISC_V151, 'name' => 'thirdProtocol'],
            ['label' => DahuaConst::DH_H8900_TITLE, 'value' => DahuaConst::DH_H8900, 'name' => 'thirdProtocol'],
        ];
    }

    public function getBrandHaikangCodeTip($brand_key) 
    {
        if ('brand_haikang' === $brand_key) {
            return [
                'device_type' => [
                    'title' => '按照实际设备类型选择',
                    'href' => '',
                ],
                'name' => [
                    'title' => '建议直接对应地点进行命名,例如：5栋8单元门禁',
                    'href' => '',
                ],
                'sn' => [
                    'title' => '使用设备标签上【序列号】',
                    'href' => '',
                ],
                'code' => [
                    'title' => '设备验证码如何查看/修改？',
                    'href' => 'https://hkrobot.hikvision.com/servlet/WXShow?action=sac&wxcId=121&sysNum=145716889796196&FromUserName=oNNCAjgtBqx25nruMCrRDWLgXdRA&sId=321219&subId=128817',
                ],
                'product_model' => [
                    'title' => '设备型号，可不填',
                    'href' => '',
                ],
                'login_name' => [
                    'title' => 'ip访问设备登录的账号，可不填',
                    'href' => '',
                ],
                'login_password' => [
                    'title' => 'ip访问设备登录的密码，可不填',
                    'href' => '',
                ],
                'open_time' => [
                    'title' => '仅用于记录设备启用时间，可不填',
                    'href' => '',
                ],
                'param' => [
                    'title' => '设备的一些额外参数，可不填',
                    'href' => '',
                ],
                'remark' => [
                    'title' => '用于记录设备额外的信息，例如：物联网卡号',
                    'href' => '',
                ],
                'look' => [
                    'title' => '用于控制业主是否可以查看对应设备监控',
                    'href' => '',
                ],
            ];
        } elseif ('brand_dahua' === $brand_key) {
            return [
                'device_type' => [
                    'title' => '按照实际设备类型选择',
                    'href' => '',
                ],
                'name' => [
                    'title' => '建议直接对应地点进行命名,例如：5栋8单元门禁',
                    'href' => '',
                ],
                'sn' => [
                    'title' => '使用设备标签上【序列号】',
                    'href' => '',
                ],
                'code' => [
                    'title' => '设备验证码如何查看/修改？',
                    'href' => 'https://hkrobot.hikvision.com/servlet/WXShow?action=sac&wxcId=121&sysNum=145716889796196&FromUserName=oNNCAjgtBqx25nruMCrRDWLgXdRA&sId=321219&subId=128817',
                ],
                'product_model' => [
                    'title' => '设备型号，可不填',
                    'href' => '',
                ],
                'login_name' => [
                    'title' => 'ip访问设备登录的账号，必填（默认admin）',
                    'href' => '',
                ],
                'login_password' => [
                    'title' => 'ip访问设备登录的密码，必填（默认admin123）',
                    'href' => '',
                ],
                'open_time' => [
                    'title' => '仅用于记录设备启用时间，可不填',
                    'href' => '',
                ],
                'param' => [
                    'title' => '设备的一些额外参数，可不填',
                    'href' => '',
                ],
                'remark' => [
                    'title' => '用于记录设备额外的信息，例如：物联网卡号',
                    'href' => '',
                ],
                'look' => [
                    'title' => '用于控制业主是否可以查看对应设备监控',
                    'href' => '',
                ],
            ];
        } else {
            return [];
        }
    }

    /**
     * 设备类型
     * @return array[]
     */
    public function getDeviceTypeList($village_id=0)
    {
        if($village_id>0){
            $db_houseCameraDeviceVtype = new HouseCameraDeviceVtype();
            $whereArr=array();
            $whereArr[]=array('village_id','=',$village_id);
            $whereArr[]=array('xtype','in',array(1,2));
            $vtypeTmp=$db_houseCameraDeviceVtype->getOne($whereArr);
            if(empty($vtypeTmp)){
                $insertData=array('village_id'=>$village_id);
                $insertData['vname']='普通视频监控';
                $insertData['xsort']=100;
                $insertData['status']=1;
                $insertData['xtype']=1;
                $insertData['add_time']=time();
                $db_houseCameraDeviceVtype->addOneData($insertData);
                $insertData['xtype']=2;
                $insertData['vname']='高空抛物视频监控';
                $db_houseCameraDeviceVtype->addOneData($insertData);
            }
            $whereArr=array();
            $whereArr[]=array('village_id','=',$village_id);
            $whereArr[]=array('del_time','=',0);
            $whereArr[]=array('status','=',1);
            $list = $db_houseCameraDeviceVtype->getDataLists($whereArr, 'id,vname as name,xsort,xtype', 'xsort desc,id desc', 0, 100);
            if (empty($list)) {
                $list=array();
            }
            return $list;
        }else{
            //老的
            return $this->device_type_list;
        }

    }

    //todo 处理A7人脸设备在线状态
    public function handleA7DeviceStatus($village_id){
        $dbHouseFaceDevice = new HouseFaceDevice();
        $notify_time=time() - 300; //超时五分钟未反馈 记为离线
        $where=[
            ['device_type', '=', 7],
            ['device_status', '=', 1],
            ['notify_time','<=',$notify_time]
        ];
        if(!is_array($village_id)){
            $where[] = ['village_id', '=', $village_id];
        }else{
            $where[] = ['village_id', 'in', $village_id];
        }
        $device_id=$dbHouseFaceDevice->getColumn($where,'device_id');
        if(!$device_id){
            return true;
        }
        $rr=$dbHouseFaceDevice->saveData([
            ['device_id', 'in', $device_id]
        ],['device_status'=>2]);
        fdump_api(['处理A7人脸设备离线=='.__LINE__,$where,$device_id,$rr],'a7/a7_device_status',1);
        return true;
    }

    /**
     * Notes: 设备管理
     * @author: weili
     * @datetime: 2020/8/3 13:39
     */
    public function getDeviceList($village_id)
    {
        $dbHouseFaceDevice = new HouseFaceDevice();
        $dbHouseCameraDevice = new HouseCameraDevice();
        $dbHouseVillageDoor = new HouseVillageDoor();
        $dbIntelligenceExpress = new IntelligenceExpress();
        $dbParkPassage = new ParkPassage();
        $dbHouseVillageParkConfig = new HouseVillageParkConfig();
        $dbHouseSmartCharging = new HouseSmartCharging();
        $dbHouseElectricDevice = new HouseElectricDevice();
        $dbHouseVillagePileEquipment = new HouseVillagePileEquipment();
        $dbParkSystem = new ParkSystem();
        $data['list'] = [];
        $doorCount = 0;
        $doorOffCount = 0;
        //套餐过滤
        $package_content = $this->getOrderPackage($village_id);
        if(in_array(6,$package_content)) {
            //蓝牙门禁
            if(!is_array($village_id)) {
                $doorWhere[] = ['village_id', '=', $village_id];
            }
            else {
                $doorWhere[] = ['village_id', 'in', $village_id];
            }
            $doorCount = $dbHouseVillageDoor->getCount($doorWhere);
            $doorWhere[] = ['door_status', '=', 0];
            $doorOffCount = $dbHouseVillageDoor->getCount($doorWhere);
            $data['list'][] = [
                'title' => '蓝牙门禁',
                'total' => $doorCount,
                'offCount' => $doorOffCount,
                'faultCount' => 0,
            ];
        }
        $faceCount = 0;
        $faceOffCount = 0;
        //套餐过滤
        if(in_array(7,$package_content)) {
            //人脸门禁
            $this->handleA7DeviceStatus($village_id);
            if(!is_array($village_id))
                $where[] = ['village_id', '=', $village_id];
            else
                $where[] = ['village_id', 'in', $village_id];
            $where[] = ['is_del', '=', 0];
            $faceCount = $dbHouseFaceDevice->getCount($where);
            $where[] = ['device_status', '=', 2];
            $faceOffCount = $dbHouseFaceDevice->getCount($where);
            $data['list'][] = [
                'title' => '人脸识别门禁',
                'total' => $faceCount, //总数量
                'offCount' => $faceOffCount, //离线数量
                'faultCount' => 0,      //故障数量（暂定0）
            ];
        }
        $cameraCount = 0;
        $cameraOffCount=0;
        //套餐过滤
        if(in_array(8,$package_content)) {
            //人脸识别摄像机
            if(!is_array($village_id))
                $map[] = ['village_id', '=', $village_id];
            else
                $map[] = ['village_id', 'in', $village_id];
            $cameraCount = $dbHouseCameraDevice->getCount($map);
            $map[] = ['camera_status', '<>', 0];
            $cameraOffCount = $dbHouseCameraDevice->getCount($map);
            $data['list'][] = [
                'title' => '人脸识别摄像机',
                'total' => $cameraCount,
                'offCount' => $cameraOffCount,
                'faultCount' => 0,
            ];
        }
        $arkCount = 0;
        $arkOffCount=0;
        //套餐过滤
        if(in_array(9,$package_content)) {
            //智能快递柜
            if(!is_array($village_id))
                $arkWhere[] = ['village_id', '=', $village_id];
            else
                $arkWhere[] = ['village_id', 'in', $village_id];
            $arkCount = $dbIntelligenceExpress->getCount($arkWhere);
            $arkWhere[] = ['status', '=', 0];
            $arkOffCount = $dbIntelligenceExpress->getCount($arkWhere);
            $data['list'][] = [
                'title' => '智能快递柜',
                'total' => $arkCount,
                'offCount' => $arkOffCount,
                'faultCount' => 0,
            ];
        }
        $parkCount = 0;
        $parkOffCount = 0;
        //套餐过滤
        if(in_array(10,$package_content)) {
            //智慧停车场
            $deviceCount=array();
            if(!is_array($village_id)){
                $parkWhere[] = ['village_id', '=', $village_id];
                $deviceCount[] = ['p.park_id', '=', $village_id];
            }
            else{
                $parkWhere[] = ['village_id', 'in', $village_id];
                $deviceCount[] = ['p.park_id', 'in', $village_id];
            }
            $deviceCount[] = ['b.status', '=', 1];
            $deviceCount[] = ['c.park_versions', '<>', 1];
            $parkCount = $dbParkSystem->getCountByCondition($deviceCount);
            $parkCount=$parkCount;
            $parkCount=$parkCount>0 ?$parkCount:0;
            $deviceCount[] = ['p.last_upload_time', '<', time()-600];
            $parkOffCount = $dbParkSystem->getCountByCondition($deviceCount);
            $parkOffCount=$parkOffCount;
            $parkOffCount=$parkOffCount>0 ?$parkOffCount:0;
            $data['list'][] = [
                'title' => '智慧停车',
                'total' => $parkCount,
                'offCount' => $parkOffCount,
                'faultCount' => 0,
            ];
        }
        $smartCount = 0;
        //套餐过滤
        if(in_array(11,$package_content)) {
            //智能充电桩 (暂无)
            if(!is_array($village_id))
                $smart_where[] = ['village_id', '=', $village_id];
            else
                $smart_where[] = ['village_id', 'in', $village_id];
            $smartCount = $dbHouseSmartCharging->getCount($smart_where);
            $smart_where[] = ['is_del','=',1];
            $pileCount = $dbHouseVillagePileEquipment->getCount($smart_where);
            $data['list'][] = [
                'title' => '智能充电桩',
                'total' => $smartCount+$pileCount,
                'offCount' => 0,
                'faultCount' => 0,
            ];
        }
		
		$electricCarCount = 0;
		$electricCarOffCount = 0;	//下线数量，3分钟没心跳
        //套餐过滤
        if(in_array(39,$package_content)) {
            //智能电瓶车
            if(!is_array($village_id)){
				$electricCarWhere[] = ['village_id', '=', $village_id];
			}else{
                $electricCarWhere[] = ['village_id', 'in', $village_id];
			}
            $electricCarCount = $dbHouseElectricDevice->getCount($electricCarWhere);
			$electricCarWhere[] = ['notify_time', '<=', time() - 180];
            $electricCarOffCount = $dbHouseElectricDevice->getCount($electricCarWhere);
            $data['list'][] = [
                'title' => '智能电瓶车',
                'total' => $electricCarCount,
                'offCount' => $electricCarOffCount,
                'faultCount' => 0,
            ];
        }
		
        $total = $doorCount+$faceCount+$cameraCount+$arkCount+$parkCount+$smartCount+$electricCarCount+$pileCount;
        $off = $doorOffCount+$faceOffCount+$cameraOffCount+$arkOffCount+$parkOffCount+$electricCarOffCount;
        $data['device_total'] = $total;
        $data['ratio']['normal'] = $total?sprintf("%.1f",( ($total-$off)/$total )*100):0;//正常总占比
        $data['ratio']['fault'] = 0; //故障总占比
        $data['ratio']['off'] = $total?sprintf("%.1f",( $off/$total )*100):0;//离线总占比
        $list = $data['list'];
        unset($data['list']);
        $arr = [
            ['title'=>'设备类型'],
            ['title'=>'总数'],
            ['title'=>'故障'],
            ['title'=>'离线']
        ];
        $list_arr = [];
		$list_arr[0] = $arr;
        foreach ($list as $key=>$val)
        {
			//如果有添加过智能硬件，则没数量的设备隐藏掉。
			if($total == 0 || $val['total'] > 0){
				$list_arr[$key+1] = [
					['title'=>$val['title']],
					['title'=>$val['total']],
					['title'=>$val['faultCount']],
					['title'=>$val['offCount']],
				];
			}
        }
        $data['list'] = array_values($list_arr);
        //开门设备 显示状态
        if($doorCount || $faceCount){
            $data['status'] = 1;
        }else{
            $data['status'] = 0;
        }
        return $data;
    }
    public function getDevice($village_id)
    {
        $dbHouseVillageDoor = new HouseVillageDoor();//蓝牙门禁
        $dbHouseFaceDevice = new HouseFaceDevice();  //人脸设备
        $dbParkPassage = new ParkPassage();          //智慧停车场
        $doorWhere[] = ['village_id','=',$village_id];
        $doorCount = $dbHouseVillageDoor->getCount($doorWhere);

        $where[] = ['village_id','=',$village_id];
        $where[] = ['is_del','=',0];
        $faceCount = $dbHouseFaceDevice->getCount($where);

        $parkWhere[] = ['village_id','=',$village_id];
        $parkCount = $dbParkPassage->getCount($parkWhere);
    }

    /**
     * 人脸识别门禁列表
     * @author lijie
     * @date_time 2020/08/18 14:31getList
     * @param $where
     * @param $field
     * @param int $group
     * @param string $order
     * @return \think\Collection
     */
    public function getDeviceLists($where,$field,$group=1,$order='device_id desc')
    {
        $house_face_device = new HouseFaceDevice();
        $data = $house_face_device->getList($where,$field,$group,$order);
        $house_village_public_area = new HouseVillagePublicArea();
        $house_village_floor = new HouseVillageFloor();
        if($data){
            foreach ($data as $k=>$v) {
                if($v['public_area_id']){
                    $position = $house_village_public_area->getOne(['public_area_id'=>$v['public_area_id']],'public_area_name');
                    $data[$k]['position'] = [$position['public_area_name']];
                }else{
                    $floor_id_lists = explode(',',$v['floor_id']);
                    $con[] = ['f.floor_id','in',$floor_id_lists];
                    $field = 's.single_name,f.floor_name';
                    $position = $house_village_floor->floorSingleName($con,$field);
                    $name = array();
                    foreach ($position as $key=>$val){
                        $name[$key] = $val['single_name'].$val['floor_name'];
                    }
                    $data[$k]['position'] = $name;
                }
            }
        }
        return $data;
    }

    /**
     * 获取人脸识别开门记录
     * @author lijie
     * @date_time 2020/08/18 15:07
     * @param $where
     * @param $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return mixed
     */
    public function faceDeviceOpenDoorRecord($where,$field,$page=0,$limit=10,$order='l.log_id desc')
    {
        $house_user_log = new HouseUserLog();
        $data = $house_user_log->getList($where,$field,$page,$limit,$order);
        foreach ($data as $k=>$v){
            $data[$k]['log_time'] = date('Y-m-d H:i:s',$v['log_time']);
            if($v['log_status'] == 0)
                $data[$k]['log_status'] = 1;
            else
                $data[$k]['log_status'] = 0;
        }
        return $data;
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


    // 判断海康内部应用是否配置了
    public function judgeiSecureCenterConfig() {
        $iSecureCenterIp         = cfg('iSecureCenterIp');
        $iSecureCenterPreUrlPort = cfg('iSecureCenterPreUrlPort');
        $iSecureCenterAppKey     = cfg('iSecureCenterAppKey');
        $iSecureCenterAppSecret  = cfg('iSecureCenterAppSecret');
        if (!$iSecureCenterIp || !$iSecureCenterPreUrlPort || !$iSecureCenterAppKey || !$iSecureCenterAppSecret) {
            return false;
        } else {
            return true;
        }
    }
    
    /**
     * 视频监控列表
     * @author lijie
     * @date_time 2021/01/08
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param string $whereRaw
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCameraList($where=[],$field=true,$page=1,$limit=15,$order='camera_id DESC',$whereRaw='')
    {
        $house_camera_device = new HouseCameraDevice();
        $nowTime = time();
        if (isset($where['village_id']) && isset($where['device_brand'])&&$where['device_brand']=='iSecureCenter'&&$this->judgeiSecureCenterConfig()) {
            $iSecureCenter = new iSecureCenter();
            $configService = new ConfigService();
            $whereConfigData = [];
            $whereConfigData[] = ['name','=','againSynPages'];
            $againSynPagesData = $configService->getDataFromConfigData($whereConfigData);
            $whereConfigData = [];
            $whereConfigData[] = ['name','=','againSynTimes'];
            $againSynTimesData = $configService->getDataFromConfigData($whereConfigData);
            $devices = [];
            $response = [];
            $iSecureCenterPageSize = 50;
            $pageNo = 1;
            if (isset($againSynPagesData['value'])&&intval($againSynPagesData['value'])>0) {
                $pageNo = intval($againSynPagesData['value']);
                $response = [
                    'pageNo' => $pageNo,
                    'pageSize' => $iSecureCenterPageSize
                ];
                $devices = $iSecureCenter->resourceV1Cameras($response);
            } elseif (isset($againSynTimesData['value'])&&intval($againSynTimesData['value'])>0&&intval($againSynTimesData['value'])<=$nowTime) {
                $response = [
                    'pageNo' => $pageNo,
                    'pageSize' => $iSecureCenterPageSize
                ];
                $devices = $iSecureCenter->resourceV1Cameras($response);
            } elseif(empty($againSynPagesData)&&empty($againSynTimesData)) {
                $response = [
                    'pageNo' => $pageNo,
                    'pageSize' => $iSecureCenterPageSize
                ];
                $devices = $iSecureCenter->resourceV1Cameras($response);
            }
            if (isset($devices['data']) && isset($devices['data']['list']) && !empty($devices['data']['list'])) {
                foreach ($devices['data']['list'] as $camera) {
                    $where_repeat = [];
                    $where_repeat[] = ['device_brand','=','iSecureCenter'];
                    $where_repeat[] = ['village_id','=',$where['village_id']];
                    $where_repeat[] = ['camera_status','<>',4];
                    $where_repeat[] = ['camera_sn','=',$camera['cameraIndexCode']];
                    $repeat = $house_camera_device->getOne($where_repeat);
                    $paramJson = [
                        'cameraType'            => isset($camera['cameraType'])         ? trim($camera['cameraType'])        : '',  //监控点类型
                        'cameraTypeName'        => isset($camera['cameraTypeName'])     ? trim($camera['cameraTypeName'])    : '',  // 监控点类型说明
                        'capabilitySet'         => isset($camera['capabilitySet'])      ? trim($camera['capabilitySet'])     : '',  // 设备能力集
                        'capabilitySetName'     => isset($camera['capabilitySetName'])  ? trim($camera['capabilitySetName']) : '',  // 能力集说明
                        'channelNo'             => isset($camera['channelNo'])          ? trim($camera['channelNo'])         : '',  // 通道编号
                        'channelType'           => isset($camera['channelType'])        ? trim($camera['channelType'])       : '',  // 通道类型
                        'channelTypeName'       => isset($camera['channelTypeName'])    ? trim($camera['channelTypeName'])   : '',  // 通道类型说明
                        'encodeDevIndexCode'    => isset($camera['encodeDevIndexCode']) ? trim($camera['encodeDevIndexCode']): '',  // 所属编码设备唯一标识
                        'gbIndexCode'           => isset($camera['gbIndexCode'])        ? trim($camera['gbIndexCode'])       : '',  // 监控点国标编号，即外码编号externalIndexCode
                        'recordLocation'        => isset($camera['recordLocation'])     ? trim($camera['recordLocation'])    : '',  // 录像存储位置
                        'recordLocationName'    => isset($camera['recordLocationName']) ? trim($camera['recordLocationName']): '',  // 录像存储位置说明
                        'regionIndexCode'       => isset($camera['regionIndexCode'])    ? trim($camera['regionIndexCode'])   : '',  // 所属区域唯一标识
                        'transType'             => isset($camera['transType'])          ? trim($camera['transType'])         : '',  // 传输协议
                        'transTypeName'         => isset($camera['transTypeName'])      ? trim($camera['transTypeName'])     : '',  // 传输协议类型说明
                    ];
                    $cloud_txt = array_diff($camera, $paramJson);
                    $params = [
                        'camera_name' => isset($camera['cameraName'])?trim($camera['cameraName']):'',//监控点名称
                        'camera_sn' => isset($camera['cameraIndexCode'])?trim($camera['cameraIndexCode']):'',//监控点唯一标识
                        'village_id' => $where['village_id'],
                        'lng' => isset($camera['longitude'])?trim($camera['longitude']):'',
                        'lat' => isset($camera['latitude'])?trim($camera['latitude']):'',
                        'camera_status' => isset($camera['status'])&&($camera['status']==2)?1:0,// 在线状态（0-未知，1-在线，2-离线）
                        'brand_id' => 1,
                        'brand_name' => '海康',
                        'product_name' => isset($camera['cameraTypeName'])?trim($camera['cameraTypeName']):'',
                        'device_brand' => 'iSecureCenter',
                        'device_model' => isset($camera['encodeDevIndexCode'])?trim($camera['encodeDevIndexCode']):'',
                        'cloud_device_id' => isset($camera['gbIndexCode'])?trim($camera['gbIndexCode']):'',
                        'cloud_group_id' => isset($camera['regionIndexCode'])?trim($camera['regionIndexCode']):'',
                        'cloud_device_name' => isset($camera['recordLocationName'])?trim($camera['recordLocationName']):'',
                        'cloud_txt' => json_encode($cloud_txt,JSON_UNESCAPED_UNICODE),
                    ];
                    if ($repeat && isset($repeat['camera_id'])) {
                        // 更新
                        unset($params['device_type']);
                        $params['last_time'] = isset($camera['updateTime'])?strtotime($camera['updateTime']):time();
                        $house_camera_device->saveOne($where_repeat,$params);
                    } else {
                        $params['camera_name'] = isset($camera['cameraName'])?trim($camera['cameraName']):'';
                        $params['brand_id'] = 1;
                        $params['brand_name'] = '海康';
                        $params['add_time'] = isset($camera['createTime'])?strtotime($camera['createTime']):time();
                        $params['open_time'] = isset($camera['createTime'])?strtotime($camera['createTime']):0;
                        $params['product_name'] = isset($camera['cameraTypeName'])?trim($camera['cameraTypeName']):'';
                        $params['param'] = json_encode($paramJson,JSON_UNESCAPED_UNICODE);
                        $params['remark'] = isset($camera['capabilitySetName'])?trim($camera['capabilitySetName']):'';
                        $params['device_type'] = isset($camera['capabilitySet'])&&(strpos($camera['capabilitySet'],'event_rule')!== false)?2:1;
                        $house_camera_device->addOne($params);
                    }
                }
                $iSecureCenter->eventServiceV1EventSubscriptionByEventTypes([]);
                if (isset($devices['data']['total'])) {
                    $getTotal = $pageNo * $iSecureCenterPageSize;
                    $total = intval($devices['data']['total']);
                    if ($total>$getTotal) {
                        $againSynPages = $pageNo + 1;
                        if (isset($againSynPagesData['value'])) {
                            $whereConfigData = [];
                            $whereConfigData[] = ['name','=','againSynPages'];
                            $updateParam = [
                                'value' => $againSynPages,
                            ];
                            $configService->saveDataFromConfigData($whereConfigData,$updateParam);
                        } else {
                            $addParam = [
                                'name' => 'againSynPages',
                                'value' => $againSynPages,
                                'config_desc' => '用于同步海康威视[综合安防管理平台]监控点数据页数',
                                'info' => '待同步页数',
                            ];
                            $configService->addDataFromConfigData($addParam);
                        }
                    } else {
                        if (isset($againSynPagesData['value'])) {
                            $whereConfigData = [];
                            $whereConfigData[] = ['name','=','againSynPages'];
                            $updateParam = [
                                'value' => 0,
                            ];
                            $configService->saveDataFromConfigData($whereConfigData,$updateParam);
                        }
                        $againSynTimes = $nowTime + 3600; // 一小时内不进行重新同步
                        if (isset($againSynTimesData['value'])) {
                            $whereConfigData = [];
                            $whereConfigData[] = ['name','=','againSynTimes'];
                            $updateParam = [
                                'value' => $againSynTimes,
                            ];
                            $configService->saveDataFromConfigData($whereConfigData,$updateParam);
                        } else {
                            $addParam = [
                                'name' => 'againSynTimes',
                                'value' => $againSynTimes,
                                'config_desc' => '用于下次同步海康威视[综合安防管理平台]时间点',
                                'info' => '待同步时间点',
                            ];
                            $configService->addDataFromConfigData($addParam);
                        }
                    }
                }
            }
        }
        $cameraWhere = [];
        if (!empty($where)) {
            foreach ($where as $keyWhere=>$itemWhere) {
                if (is_array($itemWhere)) {
                    $cameraWhere[] = [$keyWhere,'in',$itemWhere];
                } else {
                    $cameraWhere[] = [$keyWhere,'=',$itemWhere];
                }
            }
        }
        $data = $house_camera_device->getList($cameraWhere,$field,$page,$limit,$order,$whereRaw);
        if($data){
            if (!is_array($data)) {
                $data = $data->toArray();
            }
            $house_village_public_area = new HouseVillagePublicArea();
            $house_village_floor = new HouseVillageFloor();
            $db_houseCameraDeviceVtype = new HouseCameraDeviceVtype();
            $whereArr=array();
            $whereArr[]=array('village_id','=',$where['village_id']);
            $whereArr[]=array('del_time','=',0);
            $whereArr[]=array('status','=',1);
            $deviceVtypelist = $db_houseCameraDeviceVtype->getDataLists($whereArr, 'id,vname,xtype', 'xsort desc,id desc', 0, 100);
            $deviceVtypeArr=array();
            if(!empty($deviceVtypelist)){
                foreach ($deviceVtypelist as $tvv){
                    if($tvv['xtype']>0){
                        $deviceVtypeArr[$tvv['xtype']]=$tvv['vname'];
                    }else{
                        $deviceVtypeArr[$tvv['id']]=$tvv['vname'];
                    }
                }
            }
            $httpSiteUrl = str_replace('https', 'http', cfg('site_url'));
            $siteUrl = cfg('site_url');
            $thirdProtocolShowArr = (new FaceDeviceService())->getThirdProtocolArr(true);
            foreach ($data as &$v){
                if($v['public_area_id'] > 0){
                    $public_area_info = $house_village_public_area->getOne(['public_area_id'=>$v['public_area_id']],'public_area_name');
                    $v['address'] = isset($public_area_info['public_area_name'])?$public_area_info['public_area_name']:'';
                }elseif($v['floor_id'] > 0){
                    $house_village_floor_info = $house_village_floor->getOne(['floor_id'=>$v['floor_id']],'floor_name');
                    $v['address'] = isset($house_village_floor_info['floor_name'])?$house_village_floor_info['floor_name']:'';
                }else{
                    $v['address'] = '无位置';
                }
                if ($v['brand_name'] == '海康' || $v['brand_id'] == 1) {
                    $brand_key = 'brand_haikang';
                } elseif ($v['brand_name'] == '大华' || $v['brand_id'] == 2) {
                    $brand_key = 'brand_dahua';
                } else {
                    $brand_key = '';
                }
                $v['isAlarmEvent'] = false;
                if ($brand_key && isset($v['thirdProtocol']) && $v['thirdProtocol']) {
                    if (intval($v['thirdProtocol']) == HikConst::HIK_YUNMO_NEIBU_SHEQU) {
                        $v['isAlarmEvent'] = true;
                    }
                    $v['thirdProtocol_txt'] = isset($thirdProtocolShowArr[$brand_key][$v['thirdProtocol']]['thirdTitle']) ? $thirdProtocolShowArr[$brand_key][$v['thirdProtocol']]['thirdTitle'] : '-';
                } else {
                    $v['thirdProtocol_txt'] = '-';
                }

                if($deviceVtypeArr){
                    if(isset($deviceVtypeArr[$v['device_type']])){
                        $v['device_type']=$deviceVtypeArr[$v['device_type']];
                    }else{
                        $deviceVtypeArr[$v['device_type']]='';
                    }
                }else{
                    if($v['device_type'] == 1){
                        $v['device_type'] = '普通视频监控';
                    }else{
                        $v['device_type'] = '高空抛物视频';
                    }
                }
                if (isset($v['open_time']) && $v['open_time'] > 1) {
                    $v['open_time_txt'] = date('Y-m-d',$v['open_time']);
                } else {
                    $v['open_time_txt'] = '';
                }
                if (isset($v['last_time']) && $v['last_time'] > 1) {
                    $v['last_time_txt'] = date('Y-m-d',$v['last_time']);
                } else {
                    $v['last_time_txt'] = '';
                }
                if (isset($v['is_support_look'])&&$v['is_support_look']==1) {
                    $v['is_support_look_txt'] = '可以查看';
                } else {
                    $v['is_support_look_txt'] = '不可查看';
                }
                if (isset($v['camera_status'])&&$v['camera_status']==0) {
                    $v['camera_status'] = '在线';
                } else {
                    $v['camera_status'] = '离线';
                }
                if ($v['device_brand'] == 'iSecureCenter' && $v['camera_sn']) {
                    $v['videoPreviewUrl'] = $httpSiteUrl.'/shequ.php?g=House&c=iSecureCenter&a=videoPreview&camera_id='.$v['camera_sn'];
                } elseif (isset($v['lookUrlType']) && $v['lookUrlType'] == 'flv' && $v['look_url']) {
                    $v['videoPreviewUrl'] = $siteUrl.'/shequ.php?g=House&c=CameraDevice&a=videoH5FlvFullScreen&camera_id='.$v['camera_sn'];
                } else {
                    $v['videoPreviewUrl'] = '';
                }
                // 处理目前可以删除的设备
                $is_del = false;
                if (isset($v['thirdProtocol']) && $v['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_6000C) {
                    $is_del = true;
                }
                if (isset($v['thirdProtocol']) && $v['thirdProtocol'] == DahuaConst::DH_YUNRUI) {
                    $is_del = true;
                }
                if (isset($v['thirdProtocol']) && $v['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_SHEQU) {
                   if (isset($v['lookUrlType']) && $v['lookUrlType'] && isset($v['look_url']) && $v['look_url']) {
                       $v['look_url'] = str_replace('http://', 'https://', $v['look_url']);
                   }
                }
                $v['is_del'] = $is_del;
            }
        }
        return $data;
    }

    /**
     * 获取监控
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param array $param
     * @return \think\Collection
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function cameraLinkList($where = [], $field = true, $page = 1, $limit = 15, $order = 'camera_id DESC', $param = [])
    {
        $whereRaw = isset($param['whereRaw']) && $param['whereRaw'] ? $param['whereRaw'] : '';
        $isFlv    = isset($param['isFlv'])    && $param['isFlv']    ? $param['isFlv']    : 0;
        $house_camera_device = new HouseCameraDevice();
        $list = $house_camera_device->getList($where, $field, $page, $limit, $order, $whereRaw);
        if ($list) {
            $house_village_public_area = new HouseVillagePublicArea();
            $house_village_floor = new HouseVillageFloor();
            $faceDeviceService = new FaceDeviceService();
            $protocolDevice = $faceDeviceService->protocolDevice;
            $baseUrl = cfg('site_url');
            foreach ($list as &$v) {
                if (isset($v['public_area_id']) && $v['public_area_id'] > 0) {
                    $public_area_info = $house_village_public_area->getOne(['public_area_id' => $v['public_area_id']], 'public_area_name');
                    $v['address'] = isset($public_area_info['public_area_name']) ? $public_area_info['public_area_name'] : '';
                } elseif (isset($v['floor_id']) && $v['floor_id'] > 0) {
                    $house_village_floor_info = $house_village_floor->getOne(['floor_id' => $v['floor_id']], 'floor_name');
                    $v['address'] = isset($house_village_floor_info['floor_name']) ? $house_village_floor_info['floor_name'] : '';
                } elseif(isset($v['camera_name']) && $v['camera_name']) {
                    $v['address'] = $v['camera_name'];
                } else {
                    $v['address'] = '无位置';
                }
                if (isset($v['open_time'])) {
                    $v['open_time_txt'] = date('Y-m-d', $v['open_time']);
                } else {
                    $v['open_time_txt'] = '';
                }
                if (isset($v['last_time'])) {
                    $v['last_time_txt'] = date('Y-m-d', $v['last_time']);
                } else {
                    $v['last_time_txt'] = '';
                }
                if (isset($v['camera_status']) && $v['camera_status'] == 0) {
                    $v['camera_status_txt'] = '在线';
                } else {
                    $v['camera_status_txt'] = '离线';
                }
                if (isset($v['look_url']) && isset($v['thirdProtocol']) && !$v['look_url'] && in_array($v['thirdProtocol'], $protocolDevice)) {
                    $liveData = $faceDeviceService->getCameraUrl($v['camera_id']);
                    if (isset($liveData['look_url'])) {
                        $v['look_url']    = $liveData['look_url'];
                        $v['lookUrlType'] = $liveData['lookUrlType'];
                    }
                }
                if (isset($v['thirdProtocol']) && $v['thirdProtocol'] == HikConst::HIK_YUNMO_NEIBU_SHEQU) {
                    if (isset($v['lookUrlType']) && $v['lookUrlType'] && isset($v['look_url']) && $v['look_url']) {
                        $v['look_url'] = str_replace('http://', 'https://', $v['look_url']);
                    }
                }
                if ($isFlv==1 && isset($v['look_url']) && isset($v['lookUrlType']) && $v['look_url'] && $v['lookUrlType'] == 'flv') {
                    // 新开页面看flv
                    $v['open_url'] = $baseUrl."/wap.php?g=Wap&c=DeviceMonitor&a=lookVideo&camera_id={$v['camera_id']}&isFlv=1";
                }
            }
        }
        return $list;
    }
    
    
    public function videoV2CamerasPreviewURLs($camera_id,$village_id,$streamType=1) {
        $house_camera_device = new HouseCameraDevice();
        $where_repeat = [];
        $where_repeat[] = ['device_brand','=','iSecureCenter'];
        $where_repeat[] = ['village_id','=',$village_id];
        $where_repeat[] = ['camera_status','<>',4];
        $where_repeat[] = ['camera_id','=',$camera_id];
        $repeat = $house_camera_device->getOne($where_repeat);
        $params = [];
        $nowTime = time();
        if (isset($repeat['look_url'])&&isset($repeat['lookEffectiveTime'])&&$repeat['look_url']&&intval($repeat['lookEffectiveTime'])>$nowTime) {
            $params['look_url'] = $repeat['look_url'];
            $params['lookEffectiveTime'] = $repeat['lookEffectiveTime'];
        } elseif (isset($repeat['camera_sn'])) {
            $iSecureCenter = new iSecureCenter();
            $response = [
                'cameraIndexCode' => $repeat['camera_sn'],
                'streamType' => $streamType
            ];
            $previewURLs = $iSecureCenter->videoV2CamerasPreviewURLs($response);
            if (isset($previewURLs['data']) && isset($previewURLs['data']['url']) && !empty($previewURLs['data']['url'])) {
                $params['look_url'] = $previewURLs['data']['url'];
                // .为保证数据的安全性，取流URL设有有效时间，有效时间为5分钟。
                $params['lookEffectiveTime'] = $nowTime + 290;
                // 更新
                $house_camera_device->saveOne($where_repeat,$params);
            } elseif(isset($repeat['look_url'])&&isset($repeat['lookEffectiveTime'])) {
                $params['look_url'] = $repeat['look_url'];
                $params['lookEffectiveTime'] = $repeat['lookEffectiveTime'];
            } else {
                $params['look_url'] = '';
                $params['lookEffectiveTime'] = 0;
            }
        } else {
            $params['look_url'] = '';
            $params['lookEffectiveTime'] = 0;
        }
        return $params;
    }

    /**
     * 获取视频监控信息
     * @author lijie
     * @date_time 2022/01/12
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCameraInfo($where=[],$field=true)
    {
        $db_house_camera_device = new HouseCameraDevice();
        $data = $db_house_camera_device->getOne($where,$field);
        if (isset($data['open_time']) && $data['open_time'] > 1) {
            $data['open_time_txt'] = date('Y-m-d',$data['open_time']);
        } else {
            $data['open_time_txt'] = '';
        }
        if (isset($data['device_brand']) && $data['device_brand']='iSecureCenter' && $data['camera_sn']) {
            $httpSiteUrl = str_replace('https', 'http', cfg('site_url'));
            $data['videoPreviewUrl'] = $httpSiteUrl.'/shequ.php?g=House&c=iSecureCenter&a=videoPreviewFullScreen&camera_id='.$data['camera_sn']."&village_id={$data['village_id']}";
        } else {
            $data['videoPreviewUrl'] = '';
        }
        return $data;
    }

    /**
     * 添加视频监控
     * @author lijie
     * @date_time 2021/01/08
     * @param array $data
     * @return int|string
     */
    public function addCamera($data=[])
    {
        $db_house_camera_device = new HouseCameraDevice();
        return $db_house_camera_device->addOne($data);
    }

    /**
     * 修改监控视频
     * @author lijie
     * @date_time 2021/01/08
     * @param array $where
     * @param array $data
     * @return bool
     */
    public function saveCamera($where=[],$data=[])
    {
        $db_house_camera_device = new HouseCameraDevice();
        return $db_house_camera_device->saveOne($where,$data);
    }

    /**
     * 获取视频监控申请信息
     * @author lijie
     * @date_time 2022/01/11
     * @param array $where
     * @param bool $field
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCameraReplyInfo($where=[],$field=true)
    {
        $db_house_camera_reply = new HouseCameraReply();
        $data = $db_house_camera_reply->getOne($where,$field);
        if(empty($data)){
            return ['status'=>0,'tip'=>'您没有相应的权限'];
        }
        if($data['reply_status'] == 1){
            return ['status'=>1,'tip'=>'申请中'];
        }
        if($data['reply_status'] == 2){
            if($data['start_time'] && $data['end_time']){
                if(time() < $data['start_time'] || time() > $data['end_time']){
                    return ['status'=>4,'tip'=>'您当前不在允许观看的时间内'];
                }
            }
            return ['status'=>2,'tip'=>'申请成功'];
        }
        if($data['reply_status'] == 3){
            return ['status'=>3,'tip'=>'申请失败'];
        }
    }

    public function getCameraReplyDetail($where=[],$field=true)
    {
        $db_house_camera_reply = new HouseCameraReply();
        $detail = $db_house_camera_reply->getOne($where,$field);
        if ($detail && isset($detail['start_time']) && $detail['start_time']) {
            $detail['start_time_txt'] = date('Y-m-d H:i', $detail['start_time']);
        }
        if ($detail && isset($detail['end_time']) && $detail['end_time']) {
            $detail['end_time_txt'] = date('Y-m-d H:i', $detail['end_time']);
        }
        if ($detail && isset($detail['reply_time']) && $detail['reply_time']) {
            $detail['reply_time_txt'] = date('Y-m-d H:i', $detail['reply_time']);
        }
        if ($detail && isset($detail['camera_id']) && $detail['camera_id']) {
            $cameraInfo = $this->getCameraInfo(['camera_id'=>$detail['camera_id']],'camera_name,camera_sn');
            if ($cameraInfo && isset($cameraInfo['camera_name']) && $cameraInfo['camera_name']) {
                $detail['camera_name'] = $cameraInfo['camera_name'];
            }
            if ($cameraInfo && isset($cameraInfo['camera_sn']) && $cameraInfo['camera_sn']) {
                $detail['camera_sn'] = $cameraInfo['camera_sn'];
            }
        }
        if($detail && isset($detail['reply_status']) && $detail['reply_status'] == 1){
            $detail['reply_status_txt'] = '申请中';
        }elseif ($detail && isset($detail['reply_status']) && $detail['reply_status'] == 2){
            $detail['reply_status_txt'] = '审核通过';
        }elseif($detail && isset($detail['reply_status'])){
            $detail['reply_status_txt'] = '审核拒绝';
        }
        if ($detail && isset($detail['pigcms_id']) && $detail['pigcms_id']) {
            $db_house_village_user_bind = new HouseVillageUserBind();
            $service_house_village = new HouseVillageService();
            $whereBind = [];
            $whereBind['pigcms_id'] = $detail['pigcms_id'];
            $whereBind['village_id'] = $detail['village_id'];
            $bind_info = $db_house_village_user_bind->getOne($whereBind,$field);
            if ($bind_info && isset($bind_info['pigcms_id'])) {
                $address = $service_house_village->getSingleFloorRoom($bind_info['single_id'],$bind_info['floor_id'],$bind_info['layer_id'],$bind_info['vacancy_id'],$bind_info['village_id']);
                $detail['address'] = $address;
            }
        }
        return $detail;
    }

    public function saveCameraReply($where=[],$data=[]) {
        $db_house_camera_reply = new HouseCameraReply();
        return $db_house_camera_reply->saveOne($where,$data);
    }

    /**
     * 视频权限申请列表
     * @author lijie
     * @date_time 2022/01/14
     * @param array $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @param array $param
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCameraReplyList($where=[],$field=true,$page=1,$limit=15,$order='id DESC',$param=[])
    {
        $whereCameraRaw = '';
        if (isset($param['camera_sn'])&&trim($param['camera_sn'])) {
            $whereCameraRaw = 'camera_sn like "%'.trim($param['camera_sn']).'%"';
        }
        if (isset($param['camera_name'])&&trim($param['camera_name'])) {
            if ($whereCameraRaw) {
                $whereCameraRaw .= ' AND camera_name like "%'.trim($param['camera_name']).'%"';
            } else {
                $whereCameraRaw = 'camera_name like "%'.trim($param['camera_name']).'%"';
            }
        }
        $db_house_camera_device = new HouseCameraDevice();
        $db_house_camera_reply = new HouseCameraReply();
        $db_house_village_user_bind = new HouseVillageUserBind();
        $db_house_village_user_vacancy = new HouseVillageUserVacancy();
        $service_house_village = new HouseVillageService();

        if (!empty($whereCameraRaw)) {
            $cameraIds = $db_house_camera_device->getColumnByRaw($whereCameraRaw,'camera_id');
            $where[] = ['camera_id', 'in', $cameraIds];
        }
        $data = $db_house_camera_reply->getList($where,$field,$page,$limit,$order);
        if($data){
            foreach ($data as &$v) {
                $bind_info = $db_house_village_user_bind->getOne(['pigcms_id'=>$v['pigcms_id']],'type,vacancy_id');
                if($bind_info['type'] == 0 || $bind_info['type'] == 4){
                    $v['relation'] = '业主';
                }elseif ($data['type'] == 1){
                    $v['relation'] = '家人';
                }elseif ($data['type'] == 2){
                    $v['relation'] = '租客';
                }elseif ($data['type'] == 4){
                    $v['relation'] = '工作人员';
                }elseif ($data['type'] == 5){
                    $v['relation'] = '访客';
                }else{
                    $v['relation'] = '出入证';
                }
                $vacancy_info = $db_house_village_user_vacancy->getOne(['pigcms_id'=>$bind_info['vacancy_id']],'single_id,floor_id,layer_id');
                $v['address'] = $service_house_village->getSingleFloorRoom($vacancy_info['single_id'],$vacancy_info['floor_id'],$vacancy_info['layer_id'],$bind_info['vacancy_id'],$v['village_id']);
                $v['add_time_txt'] = date('Y-m-d H:i:s',$v['add_time']);
                if (isset($v['start_time'])&&$v['start_time']>0) {
                    $v['start_time_txt'] = date('Y-m-d H:i',$v['start_time']);
                } else {
                    $v['start_time_txt'] = '-';
                }
                if (isset($v['end_time'])&&$v['end_time']>0) {
                    $v['end_time_txt'] = date('Y-m-d H:i',$v['end_time']);
                } else {
                    $v['end_time_txt'] = '-';
                }
                $v['reply_time_txt'] = $v['reply_time']?date('Y-m-d H:i:s',$v['reply_time']):'--';
                if($v['reply_status'] == 1){
                    $v['reply_status_txt'] = '申请中';
                }elseif ($v['reply_status'] == 2){
                    $v['reply_status_txt'] = '审核通过';
                }else{
                    $v['reply_status_txt'] = '审核拒绝';
                }
                if (isset($v['camera_id'])&&$v['camera_id']) {
                    $cameraData = $db_house_camera_device->getOne(['camera_id' => $v['camera_id']],'camera_name,camera_sn');
                    if (isset($cameraData['camera_name'])) {
                        $v['camera_name'] = $cameraData['camera_name'];
                    }
                    if (isset($cameraData['camera_sn'])) {
                        $v['camera_sn'] = $cameraData['camera_sn'];
                    }
                }
                if (!isset($v['camera_name'])||!$v['camera_name']) {
                    $v['camera_name'] = '';
                }
                if (!isset($v['camera_sn'])||!$v['camera_sn']) {
                    $v['camera_sn'] = '';
                }
                if($page>0 && isset($v['phone']) && !empty($v['phone'])){
                    $v['phone']=phone_desensitization($v['phone']);
                }
            }
        }
        return $data;
    }

    /**
     * 视频权限申请数量
     * @author lijie
     * @date_time 2022/01/14
     * @param array $where
     * @return int
     */
    public function getCameraReplyCount($where=[])
    {
        $db_house_camera_reply = new HouseCameraReply();
        return $db_house_camera_reply->getCount($where);
    }

    /**
     * 住户信息
     * @author lijie
     * @date_time 2022/01/11
     * @param array $where
     * @param bool $field
     * @return array
     * @throws \think\Exception
     */
    public function getUserInfo($where=[],$field=true)
    {
        $service_house_village = new HouseVillageService();
        $db_house_village_user_bind = new HouseVillageUserBind();
        $bind_info = $db_house_village_user_bind->getOne($where,$field);
        if(empty($bind_info)){
            throw new \think\Exception('用户不存在');
        }
        $data = [];
        $data['name'] = $bind_info['name'];
        $data['phone'] = $bind_info['phone'];
        $address = $service_house_village->getSingleFloorRoom($bind_info['single_id'],$bind_info['floor_id'],$bind_info['layer_id'],$bind_info['vacancy_id'],$bind_info['village_id']);
        $data['address'] = $address;
        if($bind_info['type'] == 0 || $bind_info['type'] == 4){
            $data['relation'] = '业主';
        }elseif ($data['type'] == 1){
            $data['relation'] = '家人';
        }elseif ($data['type'] == 2){
            $data['relation'] = '租客';
        }elseif ($data['type'] == 4){
            $data['relation'] = '工作人员';
        }elseif ($data['type'] == 5){
            $data['relation'] = '访客';
        }else{
            $data['relation'] = '出入证';
        }
        $village_info = $this->getVillageInfo(['village_id'=>$bind_info['village_id']],'is_limit_date');
        if(isset($village_info['is_limit_date']))
            $data['is_limit_date'] = $village_info['is_limit_date'];
        else
            $data['is_limit_date'] = 0;
        return $data;
    }

    /**
     * 小区信息
     * @author lijie
     * @date_time 2022/01/11
     * @param array $where
     * @param bool $field
     * @return array|\think\Model|null
     */
    public function getVillageInfo($where=[],$field=true)
    {
        $db_house_village_info = new HouseVillageInfo();
        return $db_house_village_info->getOne($where,$field);
    }

    /**
     * 添加视频监控申请
     * @author lijie
     * @date_time 2022/01/11
     * @param array $data
     * @return int|string
     */
    public function addCaremaReply($data=[])
    {
        $db_house_camera_reply = new HouseCameraReply();
        return $db_house_camera_reply->addOne($data);
    }

    /**
     * 视频监控数量
     * @author lijie
     * @date_time 2022/01/12
     * @param array $where
     * @return int
     */
    public function getCameraCount($where=[],$whereRaw='')
    {
        $db_house_camera_device = new HouseCameraDevice();
        return $db_house_camera_device->getCount($where,$whereRaw);
    }

    /**
     * 查询视频类型
     * @author: liukezhu
     * @date : 2022/7/23
     * @param $village_id
     * @return array
     */
    public function getCameraDeviceType($village_id){
        $where[]=['village_id','=',$village_id];
        $where[]=['del_time','=',0];
        $field='id,vname as title';
        $list=(new HouseCameraDeviceVtype())->getDataLists($where,$field,'xsort desc,id desc');
        return $list;
    }

    public function a4GetDoorOpenRecordTask() {
        $where_a4 = [];
        $where_a4[] = ['device_type','=',4];
        $where_a4[] = ['is_del','=',0];
        $db_house_face_device=new HouseFaceDevice();//人脸门禁表
        $face_list = $db_house_face_device->getList($where_a4,'device_id,device_name,device_type,device_sn,village_id','village_id');
        if (!empty($face_list)) {
            $face_list = $face_list->toArray();
            $now_time = time();
            $log_time_min = $now_time - 1800;
            $db_house_user_log = new HouseUserLog();
            foreach ($face_list as $item) {
                $village_id = $item['village_id'];
                $device_id = $item['device_id'];
                $log_from = 1;
                $whereUserLog = [];
                $whereUserLog[] = ['log_business_id','=',$village_id];
                $whereUserLog[] = ['device_id','=',$device_id];
                $whereUserLog[] = ['log_from','=',$log_from];
                $field = 'MAX(log_time+0) as log_time_max';
                $userLog = $db_house_user_log->getFind($whereUserLog, $field);
                if ($userLog && isset($userLog['log_time_max'])) {
                    $log_time_max = $userLog['log_time_max'];
                } else {
                    $log_time_max = 0;
                }
                if (!$log_time_max) {
                    $log_time_max = $log_time_min;
                } elseif ($log_time_max>$log_time_min) {
                    $log_time_max = $log_time_min;
                }
                if ($village_id) {
                    // 下发队列执行
                    $param = array();
                    $arr= array();
                    $param['deviceType'] = 4;
                    $param['village_id'] = $item['village_id'];
                    $param['log_time_max'] = $log_time_max;
                    $this->laterGetPassRecordQueue($param);
                }
            }
        }
    }

    public function a4GetDoorOpenRecordJob($param=[]) {
        $startTime = isset($param['startTime'])?$param['startTime']:0;
        if (isset($param['log_time_max'])&&$param['log_time_max']) {
            $startTime = $param['log_time_max'];
        }
        $invokeParam = [
            'village_id' => isset($param['village_id'])?$param['village_id']:0,
            'communityId' => isset($param['communityId'])?$param['communityId']:0,
            'startTime' => $startTime,
            'is_plan' => 0,
        ];
        try {
            $houseUserLog = invoke_cms_model('Face_door_a4_service/getA4SearchUnlockRecordCount', $invokeParam);
        } catch (\Exception $e) {
            throw new \think\Exception($e->getMessage());
        }
        return $houseUserLog;
    }

    /**
     * 获取设备数量
     * @param $where
     * @return int
     */
    public function getFaceCount($where) {
        $db_house_face_device = new HouseFaceDevice();
        return $db_house_face_device->getCount($where);
    }

    /**
     * A185室内机 信息获取
     * @param $where
     * @param bool $field
     * @param string $order
     * @return array|\think\Model|null
     */
    public function getFaceA185Indoor($where,$field = true,$order = 'id DESC') {
        return (new FaceA185Indoor)->getOne($where, $field, $order);
    }

    /**
     * 获取人脸设备信息
     * @param array $face_where 人脸查询条件
     * @param bool|string $field 查询具体字段 默认查询所有
     * @return mixed
     */
    public function getHouseFaceDeviceInfo($face_where,$field=true) {
        return (new HouseFaceDevice())->getOne($face_where,$field);
    }

    /**
     * 获取人脸设备信息 兼容写错名字的方法
     * @param array $face_where 人脸查询条件
     * @param bool|string $field 查询具体字段 默认查询所有
     * @return mixed
     */
    public function getHouseFaceDeivceInfo($face_where,$field=true) {
        return $this->getHouseFaceDeviceInfo($face_where,$field);
    }
}