<?php
/**
 * +----------------------------------------------------------------------
 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
 * +----------------------------------------------------------------------
 * @author    合肥快鲸科技有限公司
 * @copyright 合肥快鲸科技有限公司
 * @link      https://www.kuaijing.com.cn
 * @Desc      海康云眸 内部设备应用  这一层只是处理接参整合传参设备云 然后组合返回下  不做业务处理
 */

namespace app\community\model\service\Device;

use app\community\model\db\CameraDeviceBind;
use app\community\model\db\HouseDeviceChannel;
use app\community\model\service\HouseFaceDeviceService;
use Imactool\Hikcloud\HikCloud;
use app\consts\DeviceConst;
use app\consts\HikConst;
use think\facade\Cache;

use app\traits\house\HikCodeErrCodeTraits;

class FaceHikCloudNeiBuDeviceService
{
    use HikCodeErrCodeTraits;
    public $config;
    public $hikCloud;
    public function __construct(){
        if (!$this->hikCloud) {
            if (cfg('HikCloudClientId') && cfg('HikCloudClientSecret')) {
                $this->config = [
                    'client_id' => cfg('HikCloudClientId'),
                    'client_secret' => cfg('HikCloudClientSecret')
                ];
                $this->hikCloud = new HikCloud($this->config);
            }
        }
    }
    // 判断海康内部应用是否配置了
    public function judgeConfig() {
        if (!isset($this->config['client_id']) || !isset($this->config['client_secret']) || !$this->config['client_id'] || !$this->config['client_secret']) {
            return false;
        } else {
            return true;
        }
    }
    

    protected function backData(array $result) {
        if (isset($result['code'])) {
            $result['codeMessage'] = $this->traitCodeErrCode($result['code']);
        }
        return $result;
    }

    /**
     * 缓存操作结果
     * @param $param
     * @param array $result
     * @param integer $time
     * @return array|mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     */
    protected function requestResult($param, $result = [], $time = 0) {
        $cacheTag  = HikConst::HIK_JOB_REDIS_TAG;
        $cacheKey  = HikConst::HIK_REQUEST_REDIS_KEY . md5(\json_encode($param));
        if ($time <= 0) {
            $time = HikConst::HIK_REQUEST_REDIS_TIMES;
        }
        if (empty($result)) {
            $resultJson  = Cache::store('redis')->get($cacheKey);
            if ($resultJson) {
                $result  = json_decode($resultJson, true);
                return $result;
            } else {
                return [];   
            }
        } else {
            $resultJson = json_encode($result, JSON_UNESCAPED_UNICODE);
            Cache::store('redis')->tag($cacheTag)->set($cacheKey,$resultJson, $time);
        }
        return $result;
    }
    
    /**
     * 小区同步至社区 自行匹配是新增还是修改
     * @param int $village_id 小区id 必传
     * @param array $village_info 小区信息 必传
     * @param array $param 额外参数 暂时未用
     * [
     *    'communityId' => '海康云眸内部应用社区id 编辑时候必传'
     * ]
     * @return array
     * [
     *    'code'        => 200,
     *    'message'     => '操作成功',
     *    'data'        => [
     *          'communityId'   => '海康云眸-社区id',
     *      ],
     *    'communityId' => '海康云眸-社区id',  // 成功时候返回处理
     *    'bind_name'   => '同步过去的名称',   // 成功返回时候处理
     * ]
     */
    public function villageToDeviceCloud(int $village_id,array $village_info,array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /*** 社区名称*/
        $communityName        = isset($village_info['village_name']) ? $village_info['village_name'] : '小区_' . $village_id;
        /*** 省代号*/
        $provinceCode         = isset($village_info['province_id']) ? $village_info['province_id'] : 0;
        /*** 市代号*/
        $cityCode             = isset($village_info['city_id']) ? $village_info['city_id'] : 0;
        /*** 区代号*/
        $countyCode           = isset($village_info['area_id']) ? $village_info['area_id'] : 0;
        /*** 街道详细地址*/
        $addressDetail        = isset($village_info['village_address']) ? $village_info['village_address'] : $communityName;
        /*** 社区面积(万㎡) 最多8位整数, 2位小数*/
        $communitySquareMeter = isset($village_info['communitySquareMeter']) ? $village_info['communitySquareMeter'] : 0;
        /*** 经度坐标值*/
        $longitude            = isset($village_info['long']) ? $village_info['long'] : 0;
        /*** 维度坐标值*/
        $latitude             = isset($village_info['lat']) ? $village_info['lat'] : 0;
        /*** 负责人ID（该社区的物业负责人） 需要在海康那边存在身份 所以暂时不传*/
        $chargePersonId       = isset($param['chargePersonId']) ? $param['chargePersonId'] : '';
        /*** 联系方式*/
        $phoneNumber          = isset($village_info['property_phone']) ? $village_info['property_phone'] : '';
        /*** 备注*/
        $communityRemark      = isset($village_info['communityRemark']) ? $village_info['communityRemark'] : '';
        if (!$provinceCode) {
            $provinceCode     = 100000 + intval($village_id);
        } elseif (strlen($provinceCode)<6) {
            $provinceCode     = str_pad($provinceCode,6,"0",STR_PAD_LEFT);
        } else {
            $provinceCode     = substr($provinceCode, -6,6);
        }
        $params = [
            'unionId'       => strval($village_id),
            'communityName' => strval($communityName),
            'provinceCode'  => strval($provinceCode),
            'addressDetail' => strval($addressDetail),
        ];
        if ($communityRemark) {
            $params['communityRemark'] = strval($communityRemark);
        }
        if ($cityCode) {
            $params['cityCode'] = strval($cityCode);
        }
        if ($countyCode) {
            $params['countyCode'] = strval($countyCode);
        }
        if ($communitySquareMeter) {
            $params['communitySquareMeter'] = strval($communitySquareMeter);
        }
        if (floatval($longitude)!=0 && floatval($latitude)!=0) {
            $params['longitude'] = strval($longitude);
            $params['latitude']  = strval($latitude);
        }
        if ($chargePersonId) {
            $params['chargePersonId'] = strval($chargePersonId);
        }
//        if ($phoneNumber) {
//            $params['phoneNumber'] = strval($phoneNumber);
//        }
        if (isset($param['communityId']) && $param['communityId']) {
            // 携带了海康的 社区ID 走编辑路线 先去除不更新字段
            unset($params['unionId']);
            $communityId = $param['communityId'];
            $params['communityId'] = strval($communityId);
            $result = $this->hikCloud->Communit->updateCommunity($params);
        } else {
            $result = $this->hikCloud->Communit->communities($params);
        }

        if (isset($result['code']) && 200 == $result['code']) {
            if (!isset($communityId)) {
                $communityId = isset($result['data']['communityId'])?$result['data']['communityId']:'';
            }
            $result['communityId'] = $communityId;
            $result['third_id']    = $communityId;
            $result['bind_name']   = $communityName;
            return $result;
        } else {
           return $this->backData($result);
        }
    }

    /**
     * 同步楼栋到海康内部应用
     * @param int $single_id 楼栋id
     * @param array $single_info 楼栋信息
     * @param array $param 其他参数
     * [
     *    'communityId' => '海康云眸内部应用社区id 必传'
     * ]
     * @return array
     * [
     *    'code'        => 200,
     *    'message'     => '操作成功',
     *    'data'        => [
     *          'buildingId'   => '海康云眸-楼栋id',
     *      ],
     *    'communityId' => '海康云眸-社区id',  // 成功时候返回处理
     *    'buildingId'  => '海康云眸-楼栋id',  // 成功时候返回处理
     *    'bind_name'   => '同步过去的名称',   // 成功返回时候处理
     *    'bind_number' => '同步过去的编号',   // 成功返回时候处理
     * ]
     */
    public function buildingsToDeviceCloud(int $single_id,array $single_info=[],array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        // todo $single_info 可以考虑进行id查询
        /*** 海康云眸-社区ID*/
        $communityId          = isset($param['communityId']) ? $param['communityId'] : '';
        if (!$communityId) {
            // todo 可以对应查询下小区关联的 海康云眸-社区ID
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID,
            ];
        }
        /*** 楼栋名称*/
        $buildingName         = isset($single_info['single_name']) ? $single_info['single_name'] : '楼栋_' . $single_id;
        /*** 楼栋编号（1-999之间的整数）*/
        $buildingNumber       = isset($single_info['single_number']) ? intval($single_info['single_number']) : '';
        if (!$buildingNumber) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_BUILDINGS_NUMBER_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_BUILDINGS_NUMBER,
            ];
        }
        /*** 地上楼层数（最多支持100层）*/
        $floorUpCount         = isset($single_info['upper_layer_num']) ? $single_info['upper_layer_num'] : 100;
        /*** 地下楼层数（最多支持3层）*/
        $floorDownCount       = isset($single_info['lower_layer_num']) ? $single_info['lower_layer_num'] : 0;
        /*** 每层户数（每层最多支持50户）*/
        $floorFamilyCount     = isset($single_info['floorFamilyCount']) ? $single_info['floorFamilyCount'] : 50;
        /*** 楼栋单元数量（每栋最多支持30单元）*/
        $buildingUnitSize     = isset($single_info['buildingUnitSize']) ? $single_info['buildingUnitSize'] : 30;
        /*** 楼栋备注*/
        $buildingRemark     = isset($single_info['buildingRemark']) ? $single_info['buildingRemark'] : '';
        /*** 云接口传参 初始的填充必传参数*/
        $params = [
            'unionId'          => strval($single_id),
            'communityId'      => strval($communityId),
            'buildingName'     => strval($buildingName),
            'buildingNumber'   => strval($buildingNumber),
            'floorUpCount'     => strval($floorUpCount),
            'floorFamilyCount' => strval($floorFamilyCount),
            'buildingUnitSize' => strval($buildingUnitSize),
        ];
        if ($floorDownCount) {
            $params['floorDownCount'] = $floorDownCount;
        }
        if ($buildingRemark) {
            $params['buildingRemark'] = $buildingRemark;
        }
        $result = $this->hikCloud->Building->addBuilding($params);
        if (isset($result['code']) && 200 == $result['code']) {
            $buildingId = isset($result['data']['buildingId'])?$result['data']['buildingId']:'';
            $result['communityId'] = $communityId;
            $result['buildingId']  = $buildingId;
            $result['bind_name']   = strval($buildingName);
            $result['bind_number'] = strval($buildingNumber);
            return $result;
        } else {
            $result['bind_name']   = strval($buildingName);
            $result['bind_number'] = strval($buildingNumber);
            return $this->backData($result);
        }
    }

    /**
     * 同步单元到海康内部应用
     * @param int $floor_id 单元id
     * @param array $floor_info 单元信息
     * @param array $param 其他参数
     * [
     *    'buildingId' => '海康云眸内部应用楼栋id 必传'
     * ]
     * @return array
     * @return array
     * [
     *    'code'        => 200,
     *    'message'     => '操作成功',
     *    'data'        => [
     *          'unitId'   => '海康云眸-单元id',
     *      ],
     *    'buildingId'  => '海康云眸-楼栋id',  // 成功时候返回处理
     *    'unitId'      => '海康云眸-单元id',  // 成功时候返回处理
     *    'bind_name'   => '同步过去的名称',   // 成功返回时候处理
     *    'bind_number' => '同步过去的编号',   // 成功返回时候处理
     * ]
     */
    public function unitsToDeviceCloud(int $floor_id,array $floor_info=[],array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        // todo $floor_info 可以考虑进行id查询
        /*** 海康云眸-楼栋ID*/
        $buildingId           = isset($param['buildingId']) ? $param['buildingId'] : '';
        if (!$buildingId) {
            // todo 可以对应查询下楼栋关联的 海康云眸-楼栋ID
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_BUILDINGS_ID_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_BUILDINGS_ID,
            ];
        }
        /*** 单元名称*/
        $unitName             = isset($floor_info['floor_name']) ? $floor_info['floor_name'] : '单元_' . $floor_id;
        /*** 楼栋编号（1-999之间的整数）*/
        $unitNumber           = isset($floor_info['floor_number']) ? intval($floor_info['floor_number']) : '';
        if (!$unitNumber) {
            return [
                'code'    => HikConst::ERR_MESSAGE_UNIT_NUMBER_CODE,
                'message' => HikConst::ERR_MESSAGE_UNIT_NUMBER,
            ];
        }
        /*** 云接口传参 初始的填充必传参数*/
        $params = [
            'unionId'          => strval($floor_id),
            'buildingId'       => strval($buildingId),
            'unitName'         => strval($unitName),
            'unitNumber'       => strval($unitNumber),
        ];
        $result = $this->hikCloud->Building->addUnit($params);
        if (isset($result['code']) && 200 == $result['code']) {
            $unitId = isset($result['data']['unitId'])?$result['data']['unitId']:'';
            $result['buildingId']  = $buildingId;
            $result['unitId']      = $unitId;
            $result['bind_name']   = $unitName;
            $result['bind_number'] = $unitNumber;
            return $result;
        } else {
            $result['bind_name']   = strval($unitName);
            $result['bind_number'] = strval($unitNumber);
            return $this->backData($result);
        }
    }

    /**
     * 同步房屋到海康内部应用
     * @param int $room_id 房屋id pigcms_house_village_user_vacancy 表中 pigcms_id
     * @param array $room_info 房屋信息
     * @param array $param 其他参数
     * [
     *    'unitId' => '海康云眸内部应用单元id 必传'
     * ]
     * @return array
     * [
     *    'code'        => 200,
     *    'message'     => '操作成功',
     *    'data'        => [
     *          'roomId'   => '海康云眸-房屋id',
     *      ],
     *    'unitId'      => '海康云眸-单元id',  // 成功时候返回处理
     *    'roomId'      => '海康云眸-房屋id',  // 成功时候返回处理
     *    'bind_name'   => '同步过去的名称',   // 成功返回时候处理
     *    'bind_number' => '同步过去的编号',   // 成功返回时候处理
     * ]
     */
    public function roomsToDeviceCloud(int $room_id, array $room_info = [], array $param = [])
    {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        // todo $room_info 可以考虑进行id查询
        /*** 海康云眸-单元ID*/
        $unitId               = isset($param['unitId']) ? $param['unitId'] : '';
        if (!$unitId) {
            // todo 可以对应查询下单元关联的 海康云眸-单元ID
            return [
                'code'    => HikConst::ERR_MESSAGE_UNIT_ID_CODE,
                'message' => HikConst::ERR_MESSAGE_UNIT_ID,
            ];
        }
        /*** 户室名称*/
        $roomName             = isset($room_info['room']) ? strval($room_info['room']) : '户室_' . $room_id;
        /*** 两位户室编号（不带楼层，如7层01室，传值为01，传值范围01-50）*/
        $roomNumber           = isset($room_info['room_number']) ? intval($room_info['room_number']) : '';
        if ($roomNumber && $roomNumber>100) {
            $roomNumber = substr($roomNumber, -2,2);
        }
        if (!$roomNumber) {
            return [
                'code'    => HikConst::ERR_MESSAGE_ROOM_NUMBER_CODE,
                'message' => HikConst::ERR_MESSAGE_ROOM_NUMBER,
            ];
        }
        /*** 所在楼层  01-999 */
        $floorNumber          = isset($room_info['floorNumber']) ? intval($room_info['floorNumber']) : '';
        // todo 可以对应查询下房屋所爱在楼层编号
        if (!$floorNumber) {
            return [
                'code'    => HikConst::ERR_MESSAGE_FLOOR_NUMBER_CODE,
                'message' => HikConst::ERR_MESSAGE_FLOOR_NUMBER,
            ];
        }

        /*** 云接口传参 初始的填充必传参数*/
        if (strlen($roomName) <= 2) {
            $roomName = strval($floorNumber) . $roomName;
        }
        $params = [
            'unionId'      => strval($room_id),
            'unitId'       => strval($unitId),
            'roomName'     => $roomName,
            'floorNumber'  => strval($floorNumber),
            'roomNumber'   => strval($roomNumber),
        ];
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            $result = $this->hikCloud->Building->addRoom($params);
            if (isset($result['code']) && 200 == $result['code']) {
                $roomId = isset($result['data']['roomId'])?$result['data']['roomId']:'';
                $result['unitId']      = $unitId;
                $result['roomId']      = $roomId;
                $result['bind_name']   = strval($roomName);
                $result['bind_number'] = strval($floorNumber);
            } else {
                $result['bind_name']   = strval($roomName);
                $result['bind_number'] = strval($floorNumber);
            }
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        if (isset($result['code']) && 200 == $result['code']) {
            return $result;
        } else {
            return $this->backData($result);
        }
    }

    /**
     * 同步 添加更新设备 目前支持人脸和监控
     * @param string $deviceId    对应设备序列号
     * @param string $deviceType 对应设备类型 目前 face 人脸，camera 监控
     * @param array $param       同步参数 参考方法中具体注释
     * @param array $deviceInfo  设备信息
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function addDeviceToCloud(string $deviceId, string $deviceType, array $param = [], $deviceInfo = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        if (!$deviceId || !$deviceType) {
            return [
                'code'    => HikConst::ERR_HIK_NOT_DEVICE_ID_CODE,
                'message' => HikConst::ERR_HIK_NOT_DEVICE_ID_MESSAGE,
            ];
        }
        switch ($deviceType) {
            case DeviceConst::DEVICE_TYPE_FACE:
                $deviceTitle = '人脸';
                if (empty($deviceInfo)) {
                    $whereFace = [];
                    $whereFace[] = ['is_del', '=', 0];
                    $whereFace[] = ['device_sn', '=', $deviceId];
                    $faceField = 'device_id,device_name,device_type,device_alive,device_score,device_sn,village_id,floor_id,device_status,a3_device_id,public_area_id,thirdProtocol,cloud_code';
                    $deviceInfo = (new HouseFaceDeviceService())->getHouseFaceDeviceInfo($whereFace, $faceField);
                    if (!isset($deviceInfo['device_id'])) {
                        return [
                            'code'    => HikConst::ERR_HIK_NOT_DEVICE_ID_CODE,
                            'message' => HikConst::ERR_HIK_NOT_DEVICE_ID_MESSAGE,
                        ];
                    }
                }
                $device_id = $deviceInfo['device_id'];
                /** @var   string validateCode 设备验证码 */
                $validateCode      = isset($deviceInfo['cloud_code']) ? $deviceInfo['cloud_code'] : '';
                break;
            case DeviceConst::DEVICE_TYPE_ALARM:
                $deviceTitle = '报警';
                if (empty($deviceInfo)) {
                    $alarmDeviceService = new AlarmDeviceService();
                    $whereDevice = [];
                    $whereDevice[] = ['is_del', '=', 0];
                    $whereDevice[] = ['device_serial', '=', $deviceId];
                    $deviceField = true;
                    $deviceInfo = $alarmDeviceService->getAlarmDevice($whereDevice, $deviceField);
                    if (!isset($deviceInfo['device_id'])) {
                        return [
                            'code'    => HikConst::ERR_HIK_NOT_DEVICE_ID_CODE,
                            'message' => HikConst::ERR_HIK_NOT_DEVICE_ID_MESSAGE,
                        ];
                    }
                }
                $device_id = $deviceInfo['device_id'];
                /** @var   string validateCode 设备验证码 */
                $validateCode      = isset($deviceInfo['validate_code']) ? $deviceInfo['validate_code'] : '';
                /** @var   string third_deviceId 海康云眸云设备ID */
                $third_deviceId    = isset($deviceInfo['cloud_device_id']) ? $deviceInfo['cloud_device_id'] : '';
                break;
            case DeviceConst::DEVICE_TYPE_CAMERA:
                $deviceTitle = '监控';
                if (empty($deviceInfo)) {
                    $deviceInfo = $this->cameraDetail($deviceId);
                }
                if (!isset($deviceInfo['camera_id'])) {
                    return [
                        'code'    => HikConst::ERR_HIK_NOT_DEVICE_ID_CODE,
                        'message' => HikConst::ERR_HIK_NOT_DEVICE_ID_MESSAGE,
                    ];
                }
                $device_id = $deviceInfo['camera_id'];
                /** @var   string validateCode 设备验证码 */
                $validateCode      = isset($deviceInfo['device_code']) ? $deviceInfo['device_code'] : '';
                /** @var   string third_deviceId 海康云眸云设备ID */
                $third_deviceId    = isset($deviceInfo['cloud_device_id']) ? $deviceInfo['cloud_device_id'] : '';
                break;
            default:
                return [
                    'code'    => HikConst::ERR_HIK_NOT_DEVICE_TYPE_CODE,
                    'message' => HikConst::ERR_HIK_NOT_DEVICE_TYPE_MESSAGE,
                ];
                break;
        }
        /** @var  int unionId 关联ID,保留字段 */
        $unionId         = isset($device_id)                 ? $device_id                 : $deviceId;
        /** @var   string deviceName 设备名称*/
        $deviceName      = isset($deviceInfo['device_name']) ? $deviceInfo['device_name'] : $deviceTitle . '_' . $deviceId;
        /*** @var string deviceSerial 设备序列号*/
        $deviceSerial    = $deviceId;                        
        /** @var   string communityId 社区ID*/                 
        $communityId     = isset($param['communityId'])      ? $param['communityId']      : '';
        /** @var   string buildingId 楼栋ID*/                                               
        $buildingId      = isset($param['buildingId'])       ? $param['buildingId']       : '';
        /** @var   string unitId 单元ID*/                                                   
        $unitId          = isset($param['unitId'])           ? $param['unitId']           : '';
        if (!$communityId) {                                                              
            // todo 如果没有对应传参 可以自行查询下
            return [
                'code'    => HikConst::ERR_DH_NOT_PARENT_ID_CODE,
                'message' => HikConst::ERR_DH_NOT_PARENT_ID_MESSAGE,
            ];
        }

        $params = [
            'unionId'      => $unionId,
            'deviceSerial' => $deviceSerial,
            'validateCode' => $validateCode,
            'deviceName'   => $deviceName,
            'communityId'  => $communityId,
        ];
        /** @var integer isModify 1 编辑 0添加 */
        $isModify        = isset($param['isModify']) ? intval($param['isModify']) : 0;
        if ($isModify>0 || (isset($third_deviceId) && $third_deviceId)) {
            // 如果编辑设备独立处理传参
            unset($params['unionId'],$params['deviceSerial'], $params['validateCode'], $params['communityId']);
            if (isset($third_deviceId) && $third_deviceId) {
                $params['deviceId'] = $third_deviceId;
            }
            $result = $this->hikCloud->Device->updateDevice($params);
            $result['deviceId']     = $params['deviceId'];
        } else {
            // 如果添加设备独立处理传参
            if ($buildingId) {
                $params['buildingId'] = $buildingId;
            }
            if ($unitId) {
                $params['unitId']     = $unitId;
            }
            $result = $this->hikCloud->Device->addDevice($params);
            if ($communityId) {
                $result['communityId'] = $communityId;
            }
            if ($buildingId) {
                $result['buildingId'] = $buildingId;
            }
            if ($unitId) {
                $result['unitId']     = $unitId;
            }
        }
        $result['validateCode'] = $validateCode;
        $result['third_name']   = $deviceName;
        return $result;
    }
    
    public function cameraDetail($deviceId) {
        $whereCamera = [];
        $whereCamera[] = ['camera_status', '<>', 4];
        $whereCamera[] = ['camera_sn', '=', $deviceId];
        $cameraField = 'camera_id,camera_name as device_name,camera_sn,device_code,cloud_device_id,cloud_device_name,cloud_group_id';
        $deviceInfo = (new HouseFaceDeviceService())->getCameraInfo($whereCamera, $cameraField);
        if ($deviceInfo && !is_array($deviceInfo)) {
            $deviceInfo = $deviceInfo->toArray();
        }
        if ($deviceInfo && isset($deviceInfo['cloud_device_id']) && $deviceInfo['cloud_device_id']) {
            $dbCameraDeviceBind = new CameraDeviceBind();
            $whereDeviceBind = [
                'bind_type'      => DeviceConst::BIND_CAMERA_DEVICE,
                'device_sn'      => $deviceId,
            ];
            $bindInfo = $dbCameraDeviceBind->getOne($whereDeviceBind, 'id,third_name,third_deviceId,third_parent_id');
            if ($bindInfo && isset($bindInfo['id'])) {
                $deviceInfo['cloud_device_id']   = $bindInfo['third_deviceId'];
                $deviceInfo['cloud_device_name'] = $bindInfo['third_name'];
                $deviceInfo['cloud_group_id']    = $bindInfo['third_parent_id'];
            }
        }
        return $deviceInfo;
    }
    
    /**
     * 关闭设备视频加密
     * 提供根据设备验证码关闭设备视频加密开关功能。
     * @param string $deviceId 设备ID(就是对应云眸的设备ID)
     * @param string $validateCode 设备验证码
     * @return array
     */
    public function offDeviceVoideEncrypt(string $deviceId, string $validateCode) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $params = [
            'deviceId'     => $deviceId,
            'validateCode' => $validateCode,
        ];
        $result = $this->hikCloud->Device->offDeviceVoideEncrypt($params);
        return $result;
    }

    /**
     * 开通标准流预览功能
     * 支持根据通道号批量开通标准流预览功能，开通标准流预览功能后可获取标准流预览地址（只支持可观看视频的设备）——hls地址(用于h5和移动端)和rtmp地址(用于web端)。
     * 使用标准流预览功能需先关闭设备视频加密。
     * 特别说明：标准流预览地址的特点是易于分享，但由于是标准协议，无法用于加密设备。为此，我们提供了针对标准流预览地址的防盗方法：通过接口获取到指定有效期的标准流预览地址并定时更新，这样过期后地址将无法打开。
     * @param string $channelIds 通道ID，通过英文逗号间隔
     * @param integer $village_id
     * @param bool $isSave
     * @param integer $nowTime
     * @param string $deviceId
     * @return array
     */
    public function liveVideoOpen(string $channelIds, $village_id = 0, $isSave = false, $nowTime = 0, $deviceId = '') {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Device->liveVideoOpen($channelIds);
        if ($isSave) {
            $liveVideoOpen = $result;
            if (isset($liveVideoOpen['data']['data']) && !empty($liveVideoOpen['data']['data'])) {
                $dbHouseDeviceChannel = new HouseDeviceChannel();
                foreach ($liveVideoOpen['data']['data'] as $item) {
                    $updateParam = [
                        'openReason'  => $item['desc'],
                        'openCode'    => $item['ret'],
                        'update_time' => $nowTime,
                    ];
                    if ($updateParam['ret'] == 200 || $updateParam['ret'] == 60062) {
                        $updateParam['liveVideoOpen'] = 1;
                    } else {
                        $updateParam['liveVideoOpen'] = 2;
                    }
                    $whereChannel = [];
                    $whereChannel['isDel']          = 0;
                    $whereChannel['device_type']    = 'house_camera_device';
                    if ($village_id) {
                        $whereChannel['village_id'] = $village_id;
                    }
                    $itemDeviceSerial = isset($item['deviceSerial']) ? $item['deviceSerial'] : $deviceId;
                    $whereChannel['deviceSerial']   = $itemDeviceSerial;
                    $whereChannel['channelNo']      = $item['channelNo'];
                    $saveJudge = $dbHouseDeviceChannel->updateThis($whereChannel, $updateParam);
                    if (!$saveJudge) {
                        // todo 更新通道错误
                    }
                }
            }
        }
        return $result;
    }

    /**
     * 获取标准流预览地址
     * 根据通道ID获取设备通道的标准流预览地址信息。
     * 该接口获取的标准流预览地址适用于公众号、公共标准流预览等场景，特点是视频信息公开。
     * @param string $channelId
     * @param integer $village_id
     * @param bool $isSave
     * @param integer $nowTime
     * @return array
     */
    public function liveAddress(string $channelId, $village_id = 0, $isSave = false, $nowTime = 0) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Device->liveAddress($channelId);
        if ($isSave) {
            $liveAddress = $result;
            if (isset($liveAddress['data']) && $liveAddress['data']) {
                $dbHouseDeviceChannel = new HouseDeviceChannel();
                /** @var string deviceSerial 设备序列号 */
                $deviceSerial = isset($liveAddress['data']['deviceSerial']) ? $liveAddress['data']['deviceSerial'] : '';
                /** @var string deviceName 设备名称 */
                $deviceName   = isset($liveAddress['data']['deviceName'])   ? $liveAddress['data']['deviceName']   : '';
                /** @var string channelId 通道ID */
                $channelId    = isset($liveAddress['data']['channelId'])    ? $liveAddress['data']['channelId']    : '';
                /** @var string channelName 通道名 */
                $channelName  = isset($liveAddress['data']['channelName'])  ? $liveAddress['data']['channelName']  : '';
                /** @var string channelNo 通道号 */
                $channelNo    = isset($liveAddress['data']['channelNo'])    ? $liveAddress['data']['channelNo']    : '';
                /** @var string hls HLS流畅标准流预览地址 */
                $hls          = isset($liveAddress['data']['hls'])          ? $liveAddress['data']['hls']          : '';
                /** @var string rtmp HLS高清标准流预览地址 */
                $hlsHd        = isset($liveAddress['data']['hlsHd'])        ? $liveAddress['data']['hlsHd']        : '';
                /** @var string rtmp RTMP流畅标准流预览地址 */
                $rtmp         = isset($liveAddress['data']['rtmp'])         ? $liveAddress['data']['rtmp']         : '';
                /** @var string rtmpHd RTMP高清标准流预览地址 */
                $rtmpHd       = isset($liveAddress['data']['rtmpHd'])       ? $liveAddress['data']['rtmpHd']       : '';
                /** @var integer status 地址使用状态：0-未使用或标准流预览已关闭，1-使用中，2-已过期，3-标准流预览已暂停，0状态不返回地址，其他返回。-1表示ret不返回200时的异常情况，参考ret返回错误码。 */
                $status       = isset($liveAddress['data']['status'])       ? $liveAddress['data']['status']       : '';
                /** @var integer exception 地址异常状态：0-正常，1-设备不在线，2-设备开启视频加密，3-设备删除，4-失效，5-未绑定，6-账户下流量已超出，0/1/2/6状态返回地址，其他不返回。-1表示ret不返回200时的异常情况，参考ret返回错误码。 */
                $exception    = isset($liveAddress['data']['exception'])    ? $liveAddress['data']['exception']    : '';
                /** @var string ret 状态码 200:操作成功 60020:不支持该命令 60060:地址未绑定 */
                $ret          = isset($liveAddress['data']['exception'])    ? $liveAddress['data']['exception']    : '';
                /** @var string desc 状态描述 */
                $desc         = isset($liveAddress['data']['desc'])         ? $liveAddress['data']['desc']         : '';
                $updateParam = [
                    'openReason'  => $desc,
                    'openCode'    => $ret,
                    'hls'         => $hls,
                    'hlsHd'       => $hlsHd,
                    'rtmp'        => $rtmp,
                    'rtmpHd'      => $rtmpHd,
                    'update_time' => $nowTime,
                ];
                $whereChannel = [];
                $whereChannel['isDel']            = 0;
                $whereChannel['device_type']      = 'house_camera_device';
                if ($village_id) {
                    $whereChannel['village_id']   = $village_id;
                }
                if ($deviceSerial) {
                    $whereChannel['deviceSerial'] = $deviceSerial;
                }
                if ($channelId) {
                    $whereChannel['channelId']    = $channelId;
                }
                if ($channelNo) {
                    $whereChannel['channelNo']    = $channelNo;
                }
                $saveJudge = $dbHouseDeviceChannel->updateThis($whereChannel, $updateParam);
                if (!$saveJudge) {
                    // todo 更新通道错误
                }
                if ($ret !== 200) {
                    // todo 获取监控流失败
                }
                if ($hlsHd) {
                    $result['liveUrl']  = $hlsHd;
                    $result['liveType'] = 'hls';
                } elseif ($hls) {
                    $result['liveUrl']  = $hls;
                    $result['liveType'] = 'hls';
                } elseif ($rtmpHd) {
                    $result['liveUrl']  = $rtmpHd;
                    $result['liveType'] = 'rtmp';
                } elseif ($rtmp) {
                    $result['liveUrl']  = $rtmp;
                    $result['liveType'] = 'rtmp';
                }
            }
        }
        return $result;
    }

    /**
     * 自动确权
     * @param string $deviceSerial
     * @param array $param
     * @return array
     */
    public function autoConfirm(string $deviceSerial, array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var   string ssid 确权APP所在的网络没错（如：TPLINK-xxx） */
        $ssid      = isset($param['ssid'])     && $param['ssid']     ? $param['ssid']     : '';
        /** @var   string clientIP 确权APP网络出口公网IP */
        $clientIP  = isset($param['clientIP']) && $param['clientIP'] ? $param['clientIP'] : '';
        
        $params = [
            'deviceSerial' => $deviceSerial,
        ];
        if ($ssid) {
            $params['ssid']     = $ssid;
        }
        if ($clientIP) {
            $params['clientIP'] = $clientIP;
        }
        $result = $this->hikCloud->Confirm->autoconfirm($params);
        return $result;
    }

    /**
     * 下线确认
     * @param string $deviceSerial
     * @return array
     */
    public function offLineConfirm(string $deviceSerial) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Confirm->offlineconfirm($deviceSerial);
        return $result;
    }

    /**
     * 上线确认
     * @param string $deviceSerial
     * @return array
     */
    public function onLineConfirm(string $deviceSerial) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Confirm->onlineconfirm($deviceSerial);
        return $result;
    }

    /**
     * 新增人员/修改人员
     * @param array $param
     * @return array
     */
    public function addPersonToCloud(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id 如果是编辑走此逻辑 */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string unionId 关联ID,保留字段 */
        $unionId          = isset($param['unionId'])          && $param['unionId']          ? $param['unionId']          : '';
        /** @var string personName 姓名 */                                                                                 
        $personName       = isset($param['personName'])       && $param['personName']       ? $param['personName']       : '';
        /** @var Integer gender [-1]无[0]女[1]男 */                                                                         
        $gender           = isset($param['gender'])           && $param['gender']           ? intval($param['gender'])   : -1;
        /** @var Integer credentialType [1]身份证[2护照[3]其他 */                                                               
        $credentialType   = isset($param['credentialType'])   && $param['credentialType']   ? $param['credentialType']   : '';
        /** @var string credentialNumber 证件号码 */
        $credentialNumber = isset($param['credentialNumber']) && $param['credentialNumber'] ? $param['credentialNumber'] : '';
        /** @var string mobile 手机 */
        $mobile           = isset($param['mobile'])           && $param['mobile']           ? $param['mobile']           : '';
        /** @var string faceUrl 人脸图片URL  图片要求：大小：200k以内；格式：jpg */
        $faceUrl          = isset($param['faceUrl'])          && $param['faceUrl']          ? $param['faceUrl']          : '';
        /** @var string birthday 出生日期  "2001-02-02" */
        $birthday         = isset($param['birthday'])         && $param['birthday']         ? $param['birthday']         : '';
        /** @var string personRemark 备注 */
        $personRemark     = isset($param['personRemark'])     && $param['personRemark']     ? $param['personRemark']     : '';
        /** @var string nation 民族 */
        $nation           = isset($param['nation'])           && $param['nation']           ? $param['nation']           : '';
        /** @var integer educationalLevel 文化程度 [1]中专;[2]大专;[3]本科;[4]硕士;[5]博士;[6]其他 */
        $educationalLevel = isset($param['educationalLevel']) && $param['educationalLevel'] ? $param['educationalLevel'] : '';
        /** @var string workUnit 工作单位 */
        $workUnit         = isset($param['workUnit'])         && $param['workUnit']         ? $param['workUnit']         : '';
        /** @var string position 职务 */
        $position         = isset($param['position'])         && $param['position']         ? $param['position']         : '';
        /** @var integer religion 宗教信仰 [1]基督教;[2]伊斯兰教;[3]佛教 */
        $religion         = isset($param['religion'])         && $param['religion']         ? $param['religion']         : '';
        /** @var string englishName 英文名称 支持非中文 */
        $englishName      = isset($param['englishName'])      && $param['englishName']      ? $param['englishName']      : '';
        /** @var string email 邮箱 */
        $email            = isset($param['email'])            && $param['email']            ? $param['email']            : '';
        /** @var string addressDetail 详细地址 */
        $addressDetail    = isset($param['addressDetail'])    && $param['addressDetail']    ? $param['addressDetail']    : '';
        /** @var string provinceCode 现户籍地/省编码 */
        $provinceCode     = isset($param['provinceCode'])     && $param['provinceCode']     ? $param['provinceCode']     : '';
        /** @var string cityCode 现户籍地/市编码 */
        $cityCode     = isset($param['cityCode'])             && $param['cityCode']         ? $param['cityCode']         : '';
        /** @var string countyCode 现户籍地/区编码 */
        $countyCode   = isset($param['countyCode'])           && $param['countyCode']       ? $param['countyCode']       : '';
        /** 
         * @var array personCommunityRels 房屋信息 支持添加多个户室 
         * [
         *  {
         *      communityId	  社区ID	    String	32	是
         *      buildingId	  楼栋ID	    String	32	是
         *      unitId	      单元ID	    String	32	是
         *      roomId	      户室ID	    String	32	是
         *      identityType  身份类型	Integer		是	[1]业主[2]租客[3]家属
         *      checkInDate	  入住时间	String	25	是
         *      checkOutDate   离开时间	String	25	否	当身份类型为业主或家属时,无需离开时间
         * }
         * ]
         */
        $personCommunityRels = isset($param['personCommunityRels']) && $param['personCommunityRels'] ? $param['personCommunityRels'] : [];
        /**
         * @var array cardNumbers 卡号列表 同一个住户最多三张卡
         * ['111111','22222'] String 20 卡号 仅支持数字
         */
        $cardNumbers         = isset($param['cardNumbers'])         && $param['cardNumbers']         ? $param['cardNumbers']         : [];
        
        $params = [];
        if ($personId) {
            $params['personId'] = $personId;
        }
        if ($unionId && !$personId) {
            $params['unionId'] = $unionId;
        }
        if ($personName) {
            $params['personName'] = $personName;
        }
        if ($gender && $gender != -1) {
            $params['gender'] = $gender;
        }
        if ($credentialType && $credentialNumber) {
            $params['credentialType']   = $credentialType;
            $params['credentialNumber'] = $credentialNumber;
        }
        if ($mobile) {
            $params['mobile'] = $mobile;
        }
        if ($faceUrl) {
            $params['faceUrl'] = $faceUrl;
        }
        if ($birthday) {
            $params['birthday'] = $birthday;
        }
        if ($personRemark) {
            $params['personRemark'] = $personRemark;
        }
        if ($nation) {
            $params['nation'] = $nation;
        }
        if ($educationalLevel) {
            $params['educationalLevel'] = $educationalLevel;
        }
        if ($workUnit) {
            $params['workUnit'] = $workUnit;
        }
        if ($position) {
            $params['position'] = $position;
        }
        if ($religion) {
            $params['religion'] = $religion;
        }
        if ($englishName) {
            $params['englishName'] = $englishName;
        }
        if ($email) {
            $params['email'] = $email;
        }
        if ($addressDetail) {
            $params['addressDetail'] = $addressDetail;
        }
        if ($provinceCode) {
            $params['provinceCode'] = $provinceCode;
        }
        if ($cityCode) {
            $params['cityCode'] = $cityCode;
        }
        if ($countyCode) {
            $params['countyCode'] = $countyCode;
        }
        if ($personCommunityRels && !$personId) {
            $params['personCommunityRels'] = $personCommunityRels;
        }
        if ($cardNumbers && !$personId) {
            $params['cardNumbers'] = $cardNumbers;
        }
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            if (!$personId) {
                $result = $this->hikCloud->Person->addPerson($params);
            } else {
                $result = $this->hikCloud->Person->updatePerson($params);
            }
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        return $result;
    }

    /**
     * 访客登记（预约）
     * @param array $param
     * @return array|mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     */
    public function addVisitor(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id   如果是编辑走此逻辑 */
        $personId             = isset($param['personId'])             && $param['personId']              ? $param['personId']             : '';
        /** @var integer personType 人员类型 [0]物业;[1]住户;[2]临时访客（6000C使用）*/                                                                    
        $personType           = isset($param['personType'])           && $param['personType']            ? $param['personType']           : '';
        /** @var string communityId 社区id 当人员类型为[2]临时访客时必填 */                                                                              
        $communityId          = isset($param['communityId'])          && $param['communityId']           ? $param['communityId']          : '';
        /** @var string visitorName 访客姓名*/                                                                                                
        $visitorName          = isset($param['visitorName'])          && $param['visitorName']           ? $param['visitorName']          : '';
        /** @var integer gender 访客性别 [0]女[1]男*/                                                                                            
        $gender               = isset($param['gender'])               && $param['gender']                ? $param['gender']               : 1;
        /** @var string phone 访客手机号 */                                                                                                    
        $phone                = isset($param['phone'])                && $param['phone']                 ? $param['phone']                : '';
        /** @var string roomId 访问的户室ID 当人员类型为物业和住户时，此字段和deviceIds不可同时为空 */                                                                
        $roomId               = isset($param['roomId'])               && $param['roomId']                ? $param['roomId']               : '';
        /** @var string visitorEffectiveTime 来访开始时间（UTC+08:00） */
        $visitorEffectiveTime = isset($param['visitorEffectiveTime']) && $param['visitorEffectiveTime']  ? $param['visitorEffectiveTime'] : '';
        /** @var string visitorLeaveTime 离开时间（UTC+08:00）   离开时间和开始时间差不能超过3天 */
        $visitorLeaveTime     = isset($param['visitorLeaveTime'])     && $param['visitorLeaveTime']      ? $param['visitorLeaveTime']     : '';
        /** @var string visitReason 访问原由 */
        $visitReason          = isset($param['visitReason'])          && $param['visitReason']           ? $param['visitReason']          : '';
        /** @var string deviceIds 需要下发访客权限的设备列表 指定需要下发访客权限的设备列表,如有多个以英文逗号分隔，当人员类型为物业和住户时，此字段和roomId不可同时为空 */
        $deviceIds            = isset($param['deviceIds'])            && $param['deviceIds']             ? $param['deviceIds']            : '';
        /** @var integer openTimes 二维码开门次数 最大支持9次，不填默认可使用4次 */
        $openTimes            = isset($param['openTimes'])            && $param['openTimes']             ? $param['openTimes']            : '';
        
        $params = [
            'personId'             => $personId,
            'personType'           => $personType,
            'visitorName'          => $visitorName,
            'gender'               => $gender,
            'visitorEffectiveTime' => $visitorEffectiveTime,
            'visitorLeaveTime'     => $visitorLeaveTime,
        ];
        if ($communityId) {
            $params['communityId'] = $communityId;
        }
        if ($phone) {
            $params['phone'] = $phone;
        }
        if ($roomId) {
            $params['roomId'] = $roomId;
        }
        if ($roomId) {
            $params['roomId'] = $roomId;
        }
        if ($visitReason) {
            $params['visitReason'] = $visitReason;
        }
        if ($deviceIds) {
            $params['deviceIds'] = $deviceIds;
        }
        if ($openTimes) {
            $params['openTimes'] = $openTimes;
        }
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            $result = $this->hikCloud->FaceDB->addVisitor($params);
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        return $result;
    }
    
    /**
     * 设置人员所属社区
     * @param array $param
     * @return array
     */
    public function addCommunityRelation(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string communityId 社区ID */
        $communityId      = isset($param['communityId'])      && $param['communityId']      ? $param['communityId']      : '';

        $params = [
            'personId'    => $personId,
            'communityId' => $communityId,
        ];
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            $result = $this->hikCloud->Person->addCommunityRelation($params);
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        return $result;
    }

    /**
     * 设置人员所属户室
     * 1.设置人员所属户室（人员和房屋关联之后，将自动下发权限到设备）。
     * 2.支持审核流程，如需修改审核方式，请在社区管理页面进行配置。
     * 3.审核结果将通过消息订阅进行通知，消息类型为 community_message_audit_state。
     * 4.业主申请的审核方式仅支持物业审核；
     * 5.家属、租客的审核方式现在支持业主审核、物业审核、业主物业依次审核三种方式，可在社区管理页面进行配置。
     * @param array $param
     * @return array
     */
    public function addRoomRelation(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string roomId 户室ID */
        $roomId           = isset($param['roomId'])           && $param['roomId']           ? $param['roomId']           : '';
        /** @var integer identityType 身份类型 [1]业主[2]租客[3]家属 */
        $identityType     = isset($param['identityType'])     && $param['identityType']     ? $param['identityType']     : '';
        /** @var string checkInDate 入住时间 2019-04-07 */
        $checkInDate      = isset($param['checkInDate'])      && $param['checkInDate']      ? $param['checkInDate']      : date('Y-m-d');
        /** @var string checkOutDate 离开时间 2038-01-01 */
        $checkOutDate     = isset($param['checkOutDate'])     && $param['checkOutDate']     ? $param['checkOutDate']     : '2038-01-01';
        /** @var integer isAudit 是否需要审核 [0]否[1]是不填或者为空默认不需要审核 */
        $isAudit          = isset($param['isAudit'])          && $param['isAudit']          ? $param['isAudit']          : 0;
        
        $params = [
            'personId'      => $personId,
            'roomId'        => $roomId,
            'identityType'  => $identityType,
            'checkInDate'   => $checkInDate,
            'isAudit'       => $isAudit,
        ];
        if ($identityType == 2) {
            $params['checkOutDate'] = $checkOutDate;
        }
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            $result = $this->hikCloud->Person->addRoomRelation($params);
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        return $result;
    }

    /**
     * 重置人员所属户室
     * 1.重置人员所属户室，可删除旧的户室关联关系的同时重新关联新的户室。
     * 2.支持审核流程，如需修改审核方式，请在社区管理页面进行配置。
     * 3.审核结果将通过消息订阅进行通知，消息类型为community_message_audit_state。
     * 4.业主申请的审核方式仅支持物业审核；
     * 5.家属、租客的审核方式现在支持业主审核、物业审核、业主物业依次审核三种方式，可在社区管理页面进行配置。
     * @param array $param
     * @return array
     */
    public function setRoomRelation(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string delRoomId 待删除关联关系的户室id */
        $delRoomId        = isset($param['delRoomId'])        && $param['delRoomId']        ? $param['delRoomId']        : '';
        /** @var string addRoomId 重新关联新户室ID */
        $addRoomId        = isset($param['addRoomId'])        && $param['addRoomId']        ? $param['addRoomId']        : '';
        /** @var integer identityType 身份类型 [1]业主[2]租客[3]家属 */
        $identityType     = isset($param['identityType'])     && $param['identityType']     ? $param['identityType']     : '';
        /** @var string checkInDate 入住时间 2019-04-07 */
        $checkInDate      = isset($param['checkInDate'])      && $param['checkInDate']      ? $param['checkInDate']      : date('Y-m-d');
        /** @var string checkOutDate 离开时间 2038-01-01 */
        $checkOutDate     = isset($param['checkOutDate'])     && $param['checkOutDate']     ? $param['checkOutDate']     : '2038-01-01';
        /** @var integer isAudit 是否需要审核 [0]否[1]是不填或者为空默认不需要审核 */
        $isAudit          = isset($param['isAudit'])          && $param['isAudit']          ? $param['isAudit']          : 0;

        $params = [
            'personId'      => $personId,
            'delRoomId'     => $delRoomId,
            'addRoomId'     => $addRoomId,
            'identityType'  => $identityType,
            'checkInDate'   => $checkInDate,
            'checkOutDate'  => $checkOutDate,
            'isAudit'       => $isAudit,
        ];
        $result = $this->hikCloud->Person->setRoomRelation($params);
        return $result;
    }

    /**
     * 给人员开通卡片。
     * 注：6000C场景，不支持指定边缘子设备
     * @param array $param
     * @return array
     */
    public function openCard(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string unionId 关联ID,保留字段 */
        $unionId          = isset($param['unionId'])          && $param['unionId']          ? $param['unionId']          : '';
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string cardNumber 卡号	长度20 仅支持数字 */
        $cardNumber       = isset($param['cardNumber'])       && $param['cardNumber']       ? $param['cardNumber']       : '';
        /** @var integer personType 人员类型 [0]物业;[1]住户; */
        $personType       = isset($param['personType'])       && $param['personType']       ? $param['personType']       : '';
        /** @var List<String> 需要下发的设备ID列表    若未传设备ID，将对所有有权限的设备进行下发 */
        $dviceIds         = isset($param['dviceIds'])         && $param['dviceIds']         ? $param['dviceIds']         : [];
        $params = [
            'personId'   => $personId,
            'cardNumber' => $cardNumber,
            'personType' => $personType,
        ];
        if ($unionId) {
            $params['unionId'] = $unionId;
        }
        if ($dviceIds) {
            $params['dviceIds'] = $dviceIds;
        }
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            $result = $this->hikCloud->Card->openCard($params);
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        return $result;
    }

    /**
     * 退卡
     * 已开通的卡片进行退卡（卡片将变为空白卡）。
     * @param array $param
     * @return array
     */
    public function refundCard(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string cardId 已开通的卡片进行退卡（卡片将变为空白卡）。 */
        $cardId          = isset($param['cardId'])          && $param['cardId']          ? $param['cardId']          : '';
        
        $params = [
            'cardId'   => $cardId,
        ];

        $result = $this->hikCloud->Card->refundCard($params);
        return $result;
    }

    /**
     * 远程控门
     * 通过手机APP进行远程控门。
     * @param array $param
     * @return array
     */
    public function gateControl(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string deviceId 设备ID */
        $deviceId         = isset($param['deviceId'])         && $param['deviceId']         ? $param['deviceId']         : '';
        /** @var string command 控制类型 cmd 命令:open-开门 */
        $command          = isset($param['command'])          && $param['command']          ? $param['command']          : 'open';
        $params = [
            'personId'   => $personId,
            'deviceId'   => $deviceId,
            'command'    => $command,
        ];
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            $result = $this->hikCloud->Device->gateControl($params);
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        return $result;
    }

    /**
     * 人员权限下发
     * 将人员权限下发到指定设备（包括人脸、指纹、卡号）。
     * 注：6000C场景，不支持指定边缘子设备
     * @param array $param
     * @return array
     */
    public function authorityIssued(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string communityId 社区ID */
        $communityId      = isset($param['communityId'])      && $param['communityId']      ? $param['communityId']      : '';
        /** @var string personType 人员类型 [0]物业;[1]住户; */
        $personType       = isset($param['personType'])       && $param['personType']       ? $param['personType']       : '';
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string deviceId 设备ID */
        $deviceId         = isset($param['deviceId'])         && $param['deviceId']         ? $param['deviceId']         : '';
        $params = [
            'communityId'   => $communityId,
            'personId'      => $personId,
            'personType'    => $personType,
            'deviceId'      => $deviceId,
        ];
        $result = $this->requestResult($params);
        $redis = true;
        if (empty($result)) {
            $redis = false;
            $result = $this->hikCloud->Device->authorityIssued($params);
            $result = $this->requestResult($params, $result);
        }
        if ($result) {
            $result['redis'] = $redis;
        }
        return $result;
    }

    /**
     * 创建消费者
     *   1.该接口用于创建消费者ID，最多同时存在五个消费者ID。
     *   2.消费者如果5分钟未调用拉取消息接口将被删除。
     * @param array $param
     * @return array
     */
    public function createCustomer() {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string consumerName 消费组名称，固定为group1 */
        $consumerName      = 'group1';
        $result = $this->hikCloud->Msg->createCustomer($consumerName);
        return $result;
    }

    /**
     * 提交偏移量
     * 用于手动提交偏移量，提交上次消费到的消息的偏移量。
     * 消费消息和提交偏移量必须使用同一个consumerId，若不使用同一个consumerId进行提交，则会提交失败，消息可能会被重复消费。
     * @param array $param
     * @return array
     */
    public function offsetCustomer(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string consumerId 消费者ID */
        $consumerId      = isset($param['consumerId']) && $param['consumerId'] ? $param['consumerId'] : '';
        $result = $this->hikCloud->Msg->offsetCustomer($consumerId);
        return $result;
    }
    
    /*****************查询区块************************/
    /**
     * 分页查询社区
     * @param array $param
     * @return array
     * 返回结构 参考 https://pic.hik-cloud.com/opencustom/apidoc/online/neptune/ad8f6acacc2243a1a1c749fb7e8a7105.html?timestamp=1660046011453#%E6%9F%A5%E8%AF%A2%E7%A4%BE%E5%8C%BA71JqUO
     */
    public function getVillagesDeviceCloud(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /*** 当前页数*/
        $pageNo    = isset($param['pageNo']) ? $param['pageNo'] : 1;
        /*** 每页条数*/
        $pageSize  = isset($param['pageSize']) ? $param['pageSize'] : 100;
        $params = [
            'pageNo' => $pageNo,
            'pageSize' => $pageSize,
        ];
        $result = $this->hikCloud->Communit->getCommunities($params);
        return $result;
    }

    /**
     * 根据楼栋编号、单元编号、户室编号查询户室信息。
     * @param string $communityId 海康云眸-社区id
     * @param string $buildingNumber 楼栋编号
     * @param string $unitNumber 单元编号
     * @param string $roomNumber 房屋编号
     * @return array
     * [
     *    'code'     => 200,
     *    'message'  => '操作成功',
     *    'data'     => [
     *          'roomId'   => '房屋id',
     *          'path'     => '所属路径',
     *          'address'  => '房屋地址',
     *      ]
     * ]
     */
    public function getRoomByNumber(string $communityId, string $buildingNumber, string $unitNumber, string $roomNumber) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $params = [
            'communityId'    => $communityId,
            'buildingNumber' => $buildingNumber,
            'unitNumber'     => $unitNumber,
            'roomNumber'     => $roomNumber,
        ];
        $result = $this->hikCloud->Building->getRoomByNumber($params);
        return $result;
    }

    /**
     * 根据户室ID查询社区下的户室信息。（当前仅支持根据关联ID查询）
     * @param string $roomId
     * @return array
     * [
     *    'code'     => 200,
     *    'message'  => '操作成功',
     *    'data'     => [
     *          'roomId'   => '房屋id',
     *          'path'     => '所属路径',
     *          'address'  => '房屋地址',
     *      ]
     * ]
     */
    public function getRoomById(string $roomId) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Building->getRoomById($roomId);
        return $result;
    }

    /**
     * 查询指定社区下的所有房间数据
     * @param string $communityId 海康云眸-社区id
     * @param array $param 其他参数
     * [
     *      'pageNo'   => '查询页数 默认取第一页',
     *      'pageSize' => '每页条数 默认100',
     * ]
     * @return array
     * 返回 参考文档https://pic.hik-cloud.com/opencustom/apidoc/online/neptune/4a86edeffa564d48be23939bac872a59.html?timestamp=1660046011528#%E6%9F%A5%E8%AF%A2%E7%A4%BE%E5%8C%BA%E4%B8%8B%E7%9A%84%E6%88%BF%E5%B1%8BMV5iyV
     */
    public function getRoomList(string $communityId, array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        if (!$communityId) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID,
            ];
        }
        /*** 当前页数*/
        $pageNo    = isset($param['pageNo']) ? $param['pageNo'] : 1;
        /*** 每页条数*/
        $pageSize  = isset($param['pageSize']) ? $param['pageSize'] : 100;
        $params = [
            'communityId' => $communityId,
            'pageNo' => $pageNo,
            'pageSize' => $pageSize,
        ];
        $result = $this->hikCloud->Building->getRoomList($params);
        return $result;
    }

    /**
     * 查询社区下的楼栋
     * @param string $communityId 海康云眸-社区id
     * @param array $param 其他参数
     * [
     *      'pageNo'   => '查询页数 默认取第一页',
     *      'pageSize' => '每页条数 默认100',
     * ]
     * @return array
     * 返回 参考文档 https://pic.hik-cloud.com/opencustom/apidoc/online/neptune/4a86edeffa564d48be23939bac872a59.html?timestamp=1660046011938#%E6%9F%A5%E8%AF%A2%E7%A4%BE%E5%8C%BA%E4%B8%8B%E7%9A%84%E6%A5%BC%E6%A0%8BvmZ8q8
     */
    public function getBuildingList(string $communityId, array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        if (!$communityId) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID,
            ];
        }
        /*** 当前页数*/
        $pageNo    = isset($param['pageNo']) ? $param['pageNo'] : 1;
        /*** 每页条数*/
        $pageSize  = isset($param['pageSize']) ? $param['pageSize'] : 100;
        $params = [
            'communityId' => $communityId,
            'pageNo'      => $pageNo,
            'pageSize'    => $pageSize,
        ];
        $result = $this->hikCloud->Building->getRoomList($params);
        return $result;
    }

    /**
     * 查询楼栋下的单元
     * @param string $buildingId 海康云眸-楼栋id
     * @param array $param 其他参数
     * [
     *      'pageNo'   => '查询页数 默认取第一页',
     *      'pageSize' => '每页条数 默认100',
     * ]
     * @return array
     * 返回 参考文档 https://pic.hik-cloud.com/opencustom/apidoc/online/neptune/4a86edeffa564d48be23939bac872a59.html?timestamp=1660046011938#%E6%9F%A5%E8%AF%A2%E6%A5%BC%E6%A0%8B%E4%B8%8B%E7%9A%84%E5%8D%95%E5%85%837XCpgc
     */
    public function getUnitList(string $buildingId, array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        if (!$buildingId) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_BUILDINGS_ID_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_BUILDINGS_ID,
            ];
        }
        /*** 当前页数*/
        $pageNo    = isset($param['pageNo']) ? $param['pageNo'] : 1;
        /*** 每页条数*/
        $pageSize  = isset($param['pageSize']) ? $param['pageSize'] : 100;
        $params = [
            'buildingId' => $buildingId,
            'pageNo' => $pageNo,
            'pageSize' => $pageSize,
        ];
        $result = $this->hikCloud->Building->getUnitList($params);
        return $result;
    }
    
    /**
     * 查询设备详情
     * @param string $deviceId
     * @return array
     *
     *   {
     *   "code": 200,
     *   "message": "操作成功",
     *   "data": {
     *               "deviceId": "8c06808799394814880a706761e35800", // 设备ID
     *               "deviceName": "收银台",  // 设备名称
     *               "deviceModel": "CS-C3S-52WEFR", // 设备型号
     *               "deviceSerial": "123329561", // 设备序列号
     *               "deviceStatus": 0, // 设备状态，0：离线，1：在线
     *               "devicePath": "bb1843db95604a96945722daecd192e0/71a0b0d14ac54c4a9bb6db2da8677c52/8e9614653a52414c9c8debbb6c91b32a", // 设备路径
     *               "deviceIp": "127.0.0.1" // 设备IP
     *           }
     *   }
     */
    public function getDeviceDetail(string $deviceId) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Device->getDeviceInfo($deviceId);
        return $result;
    }

    /**
     * @param string $communityId  社区ID
     * @param array $param 其他参数
     * [
     *      'pageNo'   => '查询页数 默认取第一页',
     *      'pageSize' => '每页条数 默认100',
     * ]
     * @return array
     * {
     *      "code": 200,
     *      "message": "操作成功",
     *      "data": {
     *                  "pageNo": 1,              // 当前页数
     *                  "pageSize": 10,           // 分页量
     *                  "totalPage": 1,           // 总页数
     *                  "total": 2,               // 总条数
     *                  "hasNextPage": false,     // 是否有下一页（true：是）
     *                  "hasPreviousPage": false, // 是否有上一页（true：是）
     *                  "firstPage": true,        // 是否为首页（true：是）
     *                  "lastPage": true,         // 是否为尾页（true：是）
     *                  "rows": [                 // 资源列表（见下方）
     *                          {
     *                              "deviceId": "8c06808799394814880a706761e35800", // 设备ID
     *                              "deviceName": "收银台",                          // 设备名称
     *                              "deviceModel": "CS-C3S-52WEFR",                 // 设备型号
     *                              "deviceSerial": "123329561",                    // 设备序列号
     *                              "channelId": "d7c5a3a0d78c40309415d6e55417a219",// 通道ID
     *                              "channelName": "收银台",                         // 通道名
     *                              "channelNo": 1,                                 // 通道号
     *                              "channelStatus": 1,                             // 状态，0：离线，1：在线 ，-1：未知
     *                              "channelPicUrl": "https://pic.hik-cloud.com/containers/cc_pic/objects/244a8088-6daa-436b-be64-b685f89b5f65", // 通道封面图片URL
     *                              "deviceStatus": 0                               // 设备状态，0：离线，1：在线
     *                          }
     *                  ]
     *              }
     *  }
     */
    public function getDeviceChannellistByCommunityId(string $communityId, array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        if (!$communityId) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_COMMUNITY_ID,
            ];
        }
        /*** 当前页数*/
        $pageNo    = isset($param['pageNo']) ? $param['pageNo'] : 1;
        /*** 每页条数*/
        $pageSize  = isset($param['pageSize']) ? $param['pageSize'] : 100;
        $params = [
            'communityId' => $communityId,
            'pageNo'      => $pageNo,
            'pageSize'    => $pageSize,
        ];
        $result = $this->hikCloud->Device->getDeviceChannelByCommunityId($params);
        return $result;
    }


    /**
     * 人员查询
     * @param array $param
     * @return array
     */
    public function getPersonInfoList(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /*** 当前页数*/
        $pageNo      = isset($param['pageNo'])                               ? $param['pageNo']      : 1;
        /*** 每页条数*/
        $pageSize    = isset($param['pageSize'])                             ? $param['pageSize']    : 100;
        
        /** @var string communityId 社区ID */
        $communityId = isset($param['communityId']) && $param['communityId'] ? $param['communityId'] : '';

        $params = [
            'communityId' => $communityId,
            'pageNo'      => $pageNo,
            'pageSize'    => $pageSize,
        ];
        
        $result = $this->hikCloud->Person->personInfoList($params);
        return $result;
    }

    /**
     * 人员查询
     * 查询云眸社区指定社区下所有的住户信息。
     * 注意：本接口查询内容只包含当前社区的房屋资料，如果住户在其他小区也有房屋，将不会显示。
     * @param array $param
     * @return array
     */
    public function getPersonRoomList(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /*** 当前页数*/
        $pageNo      = isset($param['pageNo'])                               ? $param['pageNo']      : 1;
        /*** 每页条数*/
        $pageSize    = isset($param['pageSize'])                             ? $param['pageSize']    : 100;
        /** @var string personId 人员Id */
        $personId    = isset($param['personId'])    && $param['personId']    ? $param['personId']    : '';
        /** @var string communityId 社区ID */
        $communityId = isset($param['communityId']) && $param['communityId'] ? $param['communityId'] : '';

        $params = [
            'personId'    => $personId,
            'communityId' => $communityId,
            'pageNo'      => $pageNo,
            'pageSize'    => $pageSize,
        ];
        $result = $this->hikCloud->Person->roomList($params);
        return $result;
    }

    /**
     * 查卡
     * 根据社区和人员查询卡列表。
     * @param array $param
     * @return array
     */
    public function getCards(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id */
        $personId    = isset($param['personId'])    && $param['personId']    ? $param['personId']    : '';
        /** @var string communityId 社区ID */
        $communityId = isset($param['communityId']) && $param['communityId'] ? $param['communityId'] : '';

        $params = [
            'personnelId' => $personId,
            'communityId' => $communityId,
        ];
        $result = $this->hikCloud->Card->getCards($params);
        return $result;
    }

    /**
     * 消费消息
     *   1.该接口用于拉取消息，消费消息请在单线程中进行消费，禁止使用多线程进行消费。
     *   2.消费者创建成功之后，循环调用该接口拉取消息，无需每次拉取消息都创建消费者。
     *   3.消费者首次拉取消息时需要与消息通道建立连接，此次调用实际拉到消息列表为空，
     *     再次调用即可拉取到消息，30秒内必须再次调用拉取消息接口，否则将断开与消息通道的连接。
     *     因此拉取间隔需要在30秒以内，否则每次拉到的消息是空的
     *   4.每次拉取到的消息大小上限为1M。
     *   5.若采用手动提交偏移量消费模式，则正确的消费方式是，单线程内拉取一次消息，判断消息列表不为空，则提交一次偏移量，请注意：提交偏移量和消费消息必须使用同一consumerId。
     * @param array $param
     * @return array
     */
    public function getCustomer(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string consumerId 消费者ID */
        $consumerId    = isset($param['consumerId'])    && $param['consumerId']    ? $param['consumerId']    : '';
        /** @var bool autoCommit 是否自动提交偏移量，默认false */
        $autoCommit    = isset($param['autoCommit'])    && $param['autoCommit']    ? $param['autoCommit']    : false;
        $params = [
            'consumerId'   => $consumerId,
            'autoCommit'   => $autoCommit,
        ];
        $result = $this->hikCloud->Msg->getCustomer($params);
        return $result;
    }
    
    /*****************删除区块************************/
    /**
     * 同步删除海康内部应用的社区
     * @param string $communityId
     * @return array
     * [
     *    'code'     => 200,
     *    'message'  => '操作成功',
     * ]
     */
    public function delVillageToDeviceCloud(string $communityId) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Communit->delCommunities($communityId);
        return $result;
    }

    /**
     * 同步删除海康内部应用的楼栋
     * @param string $buildingId 海康云眸-楼栋id
     * @return array
     * [
     *    'code'      => 200,
     *    'message'   => '操作成功',
     * ]
     */
    public function deleteBuildingToDeviceCloud(string $buildingId) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Building->deleteBuilding($buildingId);
        return $result;
    }

    /**
     * 同步删除海康内部应用的单元
     * @param string $unitId 海康云眸-单元id
     * @return array
     * [
     *    'code'     => 200,
     *    'message'  => '操作成功',
     * ]
     */
    public function deleteUnitsToDeviceCloud(string $unitId) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Building->deleteUnit($unitId);
        return $result;
    }

    /**
     * 同步删除海康内部应用的户室
     * @param string $roomId
     * @return array
     * [
     *    'code'     => 200,
     *    'message'  => '操作成功',
     * ]
     */
    public function deleteRoomsToDeviceCloud(string $roomId) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Building->deleteRoom($roomId);
        return $result;
    }

    /**
     * 删除设备
     * @param string $deviceId 设备云id
     * @return array
     * [
     *    'code'     => 200,
     *    'message'  => '操作成功',
     * ]
     */
    public function deleteDeviceToCloud(string $deviceId) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Device->deleteDevice($deviceId);
        return $result;
    }
    
    /**
     * 删除人员
     * @param array $param
     * @return array
     */
    public function deletePersonToCloud(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id 必传 */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        $result = $this->hikCloud->Person->deletePerson($personId);
        return $result;
    }
    
    /**
     * 删除人员所属社区
     * 删除住户人员与社区的关联关系。
     * 若住户在该社区有所属房屋，将同步解除住户与房屋的所属关系。
     * @param array $param
     * @return array
     */
    public function deleteCommunityRelation(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string communityId 社区ID */
        $communityId      = isset($param['communityId'])      && $param['communityId']      ? $param['communityId']      : '';

        $params = [
            'personId'    => $personId,
            'communityId' => $communityId,
        ];
        $result = $this->hikCloud->Person->deleteCommunityRelation($params);
        return $result;
    }

    /**
     * 删除人员所属户室
     * 删除住户人员所属户室（后台将同步删除设备上的权限）。
     * @param array $param
     * @return array
     */
    public function deleteRoomRelation(array $param = []) {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        /** @var string personId 人员Id */
        $personId         = isset($param['personId'])         && $param['personId']         ? $param['personId']         : '';
        /** @var string roomId 户室ID */
        $roomId           = isset($param['roomId'])           && $param['roomId']           ? $param['roomId']           : '';

        $params = [
            'personId'      => $personId,
            'roomId'        => $roomId,
        ];
        $result = $this->hikCloud->Person->deleteRoomRelation($params);
        return $result;
    }

    /**
     * 获取视频取流时需要的认证信息
     * @return array
     */
    public function getEzvizInfo() {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Device->getEzvizInfo();
        return $result;
    }
    
    /**
     * 生成access_token
     * @return array
     */
    public function requestAccessToken() {
        if (!isset($this->config['client_id'])) {
            return [
                'code'    => HikConst::ERR_MESSAGE_NOT_CONFIGURED_CODE,
                'message' => HikConst::ERR_MESSAGE_NOT_CONFIGURED,
            ];
        }
        $result = $this->hikCloud->Auth->requestAccessToken();
        return $result;
    }
}