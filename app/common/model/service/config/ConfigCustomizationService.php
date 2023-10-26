<?php
/**
 * 客户定制开关配置
 * Author: hengtingmei
 * Date Time: 2021/11/04 09:01
 */

namespace app\common\model\service\config;

use app\common\model\db\ConfigCustomization;
use think\facade\Cache;

class ConfigCustomizationService {
    public $configObj = null;
    public function __construct()
    {
        $this->configObj = new ConfigCustomization();
    }

    /**
     * 返回正常显示的菜单
     * @return array
     */
    public function getConfigData() {
        // 获得所有菜单
        $returnArr = Cache::get('o2ocustomization');//这里改名的原因是因为系统其他地方用到了这个config名字，所以跟这里冲突了，但又没查出哪里用到
        if(empty($returnArr)){
            $field = 'name,value';
            $configList = $this->getSome([],$field);
            if(!$configList) {
                return [];
            }

            foreach($configList as $key=>$value){
                $returnArr[$value['name']] = $value['value'];
            }
			
            Cache::set('o2ocustomization', $returnArr);
        }
        return $returnArr;
    }

    /**
     * 返回正常显示的菜单
     * @param $id
     * @return array
     */
    public function getSome($where = [],$field=true) {
        $list = $this->configObj->getSome($where,$field);
        if(!$list) {
            return [];
        }
        return $list->toArray();
    }

    /**
     * 查询一条数据
     * @param array $where
     * @return mixed
     */
    public function getOne($where = []) {
        $data = $this->configObj->getOne($where);
        return $data ? $data->toArray() : [];
    }

    /**
     * 查询一条数据 并返回值
     * @param string $field 获得配置项名称
     * @return mixed
     */
    public function getOneField($field) {
        $return = '';
        $where = [
            'name' => $field
        ];
        $data = $this->getOne($where);
        if($data){
            $return = $data['value'];
        }
        return $return;
    }

    public function getD1ParkJudge() {
        $config = $this->getConfigData();
        /** @var bool device_d1_park_judge D1智慧停车系统  是否支持 1支持  0或者没有这个配置项不支持 */
        $device_d1_park_judge = isset($config['device_d1_park']) && $config['device_d1_park'] == 1 ? true : false;
        return $device_d1_park_judge;
    }

    public function getD3ParkJudge() {
        $config = $this->getConfigData();
        /** @var bool device_d3_park_judge 营山D3智慧停车系统  是否支持 1支持  0或者没有这个配置项不支持 */
        $device_d3_park_judge = isset($config['device_d3_park']) && $config['device_d3_park'] == 1 ? true : false;
        return $device_d3_park_judge;
    }

    public function getAnakeParkJudge() {
        $config = $this->getConfigData();
        /** @var bool device_anake_park_judge 狄耐克智慧停车D5是否支持 1支持  0或者没有这个配置项不支持 */
        $device_anake_park_judge = isset($config['device_anake_park']) && $config['device_anake_park'] == 1 ? true : false;
        return $device_anake_park_judge;
    }

    public function getVoiceRecognitionOpenJudge()
    {
        $config = $this->getConfigData();
        /** 语音定制控制 */
        $voice_recognition_asr_open = isset($config['voice_recognition_asr_open']) && $config['voice_recognition_asr_open'] == 1 ? true : false;
        return $voice_recognition_asr_open;
    }


    public function getCarPileJudge() {
        $config = $this->getConfigData();
        /** @var bool device_car_pile 汽车充电桩是否支持 1支持  0或者没有这个配置项不支持 */
        $device_car_pile = isset($config['device_car_pile']) && $config['device_car_pile'] == 1 ? true : false;
        return $device_car_pile;
    }

    
    /*
     * zairizhao.cn家判断
     */
    

    public function getZairizhaoCnJudge()
    {
	    $config = $this->getConfigData();
	    /** @var bool zairizhao.cn配置 */
	    $is_life_tools = isset($config['life_tools']) && $config['life_tools'] == 1 ? 1 : 0;

	    return $is_life_tools;
    }

    public function getThirdImportDataSwitch() {
        $config = $this->getConfigData();
        /** @var bool third_import_data_switch 是否支持三方导入 */
        $third_import_data_switch_judge = isset($config['third_import_data_switch']) && $config['third_import_data_switch'] == 1 ? true : false;
        return $third_import_data_switch_judge;
    }

    
    public function getchargeRuleFeesTypeByParkNumbers() {
        $config = $this->getConfigData();
        /** @var bool charge_rule_fees_type_by_park_numbers 收费标准支持计费模式(车位数量)  是否支持 1支持  0或者没有这个配置项不支持 */
        $charge_rule_fees_type_by_park_numbers_judge = isset($config['charge_rule_fees_type_by_park_numbers']) && $config['charge_rule_fees_type_by_park_numbers'] == 1 ? true : false;
        return $charge_rule_fees_type_by_park_numbers_judge;
    }
    
    public function getHikFaceDeviceVisitorQRCode() {
        $config = $this->getConfigData();
        /** @var bool hik_face_device_vistor_qr_code 海康人脸访客户二维码是否支持  是否支持 1支持  0或者没有这个配置项不支持 */
        $hik_face_device_vistor_qr_code = isset($config['hik_face_device_vistor_qr_code']) && $config['hik_face_device_vistor_qr_code'] == 1 ? true : false;
        if ($hik_face_device_vistor_qr_code) {
            $house_a5_client_id = cfg('house_a5_client_id');
//            $HikCloudClientId   = cfg('HikCloudClientId');
//            if (!$house_a5_client_id && !$HikCloudClientId) {
//                $hik_face_device_vistor_qr_code = false;
//            }
            if (!$house_a5_client_id) {
                $hik_face_device_vistor_qr_code = false;
            }
        }
        return $hik_face_device_vistor_qr_code;
    }
    
    public function getAreaStreetReservationServiceSwitch() {
        $config = $this->getConfigData();
        /** @var bool area_street_reservation_service 街道/社区后台[预约服务]是否支持  1支持  0或者没有这个配置项不支持 */
        $result = isset($config['area_street_reservation_service']) && $config['area_street_reservation_service'] == 1 ? true : false;
        return $result;
    }


    public function getHzhouGrapefruitOrderJudge($is_force=false)
    {
        $config = $this->getConfigData();
        /** @var int oa.8003.cn杭州西柚记 配置 */
        $hzhou_grapefruit_order = isset($config['hzhou_grapefruit_order']) && $config['hzhou_grapefruit_order'] == 1 ? 1 : 0;
        if($is_force){
            //走队列调用时 强制查询
            $hzhou_grapefruit_order=0;
            $whereArr=array();
            $whereArr[]=['name','=','hzhou_grapefruit_order'];
            $oneTmp= $this->configObj->getOne($whereArr,'value');
            if($oneTmp && !$oneTmp->isEmpty()){
                $hzhou_grapefruit_order = isset($oneTmp['value']) && $oneTmp['value'] == 1 ? 1 : 0;
            }
        }
        return $hzhou_grapefruit_order;
    }
    public function getAnakeFaceJudge() {
        $config = $this->getConfigData();
        /** @var bool device_anake_face_judge 狄耐克人脸是否支持 1支持  0或者没有这个配置项不支持 */
        $device_anake_face_judge = isset($config['device_anake_face']) && $config['device_anake_face'] == 1 ? true : false;
        return $device_anake_face_judge;
    }

    public function getAnakeBrandJudge() {
        $device_anake_face_judge = $this->getAnakeFaceJudge();
        if (!$device_anake_face_judge) {
            return false;
        }
        return true;
    }

    public function getCbztssqCustom() {
        $config = $this->getConfigData();
        /** @var bool is_cbztssq_xcom   1支持  0或者没有这个配置项不支持  */
        $is_cbztssq_xcom = isset($config['is_cbztssq_xcom']) && $config['is_cbztssq_xcom'] == 1 ? 1 : 0;
        return $is_cbztssq_xcom;

    }

    public function getHangLanShequCustom() {
        $config = $this->getConfigData();
        /** @var bool is_cbztssq_xcom   1支持  0或者没有这个配置项不支持  */
        $hanglan_shequ_com = isset($config['hanglan_shequ_com']) && $config['hanglan_shequ_com'] == 1 ? 1 : 0;
        return $hanglan_shequ_com;
    }

    public function getHavePropertyVirtual() {
        $config = $this->getConfigData();
        /** 添加物业时虚拟物业配置项   1支持  0或者没有这个配置项不支持  */
        $have_property_virtual = isset($config['have_property_virtual']) && $config['have_property_virtual'] == 1 ? 1 : 0;
        return $have_property_virtual;
    }
}
