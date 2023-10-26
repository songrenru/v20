<?php
/**
 * 街道社区物业小区公共基础资源接口
 * Created by PhpStorm.
 * User: wanzy
 * DateTime: 2021/6/11 9:36
 */

namespace app\community\controller\common;


use app\community\controller\CommunityBaseController;


use app\community\model\service\Device\AlarmDeviceService;
use app\community\model\service\Device\DeviceBindUserService;
use app\community\model\service\Device\DeviceHkNeiBuHandleService;
use app\community\model\service\FaceDeviceService;
use app\community\model\service\HouseVillageService;
use app\community\model\service\HouseMeterService;
use app\community\model\service\Device\FaceDHYunRuiCloudDeviceService;
use app\community\model\service\CommunityLoginService;
use app\community\model\service\Device\Hik6000CCameraService;
use app\community\model\service\PileUserService;
use app\community\model\service\workweixin\WorkWeiXinNewService;
use app\community\model\service\workweixin\WorkWeiXinSuiteService;
use app\community\model\service\workweixin\WorkWeiXinTaskService;
use app\consts\DahuaConst;


class BasicResourcesController extends CommunityBaseController
{
    /**
     * 查询省市区
     * @param integer $type
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getAreaList(){
        $type=$this->request->param('type', '', 'intval');
        $pid=$this->request->param('pid', '', 'intval');
        $serviceHouseMeter = new HouseMeterService();
        $measure_id = $serviceHouseMeter->getAreasList($type, $pid);
        return api_output(0, $measure_id);
    }

    /**
     * 查询街道社区
     * @param integer $type
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getCommunityList(){
        $type=$this->request->param('type', '', 'intval');
        $pid=$this->request->param('pid', '', 'intval');
        $serviceHouseMeter = new HouseMeterService();
        $measure_id = $serviceHouseMeter->getCommunityList($type, $pid);
        return api_output(0, $measure_id);
    }

    /**
     * 查询小区
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getVillageList(){
        $pid=$this->request->param('pid', '', 'intval');
        $serviceHouseMeter = new HouseMeterService();
        $measure_id = $serviceHouseMeter->getVillageList($pid);
        return api_output(0, $measure_id);
    }

    /**
     * 查询楼栋
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getSingleList(){
        $pid=$this->request->param('pid', '', 'intval');
        $serviceHouseMeter = new HouseMeterService();
        $measure_id = $serviceHouseMeter->getSingleList($pid);
        return api_output(0, $measure_id);
    }

    public  function getSingleListByVillage(){
        $charge_type = $this->request->param('charge_type');
        $project_id = $this->request->param('project_id');
        $rule_id = $this->request->param('rule_id');
        $village_id = $this->adminUser['village_id'];
        $xtype = $this->request->param('xtype','','trim');
        $is_public_rental = $this->request->param('is_public_rental',0,'int');
        $serviceHouseMeter = new HouseMeterService();
        if($xtype=='public_area'){
            $whereArr=array(array('village_id','=',$village_id),array('status','=',1));
            $fieldStr='public_area_id,public_area_name,village_id';
            $publicAreaList=$serviceHouseMeter->getHouseVillagePublicAreaList($whereArr,$fieldStr);
            return api_output(0, $publicAreaList);
        }
        $param = [
            'charge_type' => $charge_type,
            'project_id' => $project_id,
            'rule_id' => $rule_id,
            'is_public_rental'=>$is_public_rental
        ];
        $single_type=''; //unitRental 公租楼栋 normal正常楼栋 不传是所有楼栋
        if($xtype=='unitRental'){
            //公租房
            $single_type='unitRental';
        }
        $measure_id = $serviceHouseMeter->getSingleList($village_id,$param,$single_type);
        return api_output(0, $measure_id);
    }

    /**
     * 查询单元
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getFloorList(){
        $charge_type = $this->request->param('charge_type','','trim');
        $project_id = $this->request->param('project_id',0,'intval');
        $rule_id = $this->request->param('rule_id',0,'intval');
        $pid=$this->request->param('pid', 0, 'intval');
        $is_public_rental = $this->request->param('is_public_rental',0,'int');
        $serviceHouseMeter = new HouseMeterService();
        $param = [
            'charge_type' => $charge_type,
            'project_id' => $project_id,
            'rule_id' => $rule_id,
            'is_public_rental'=>$is_public_rental
        ];
        $measure_id = $serviceHouseMeter->getFloorList($pid,$param);
        return api_output(0, $measure_id);
    }
    /**
     * 查询楼层
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getLayerList(){
        $charge_type = $this->request->param('charge_type');
        $project_id = $this->request->param('project_id');
        $rule_id = $this->request->param('rule_id');
        $pid=$this->request->param('pid', '', 'intval');
        $is_public_rental = $this->request->param('is_public_rental',0,'int');
        $serviceHouseMeter = new HouseMeterService();
        $param = [
            'charge_type' => $charge_type,
            'project_id' => $project_id,
            'rule_id' => $rule_id,
            'is_public_rental'=>$is_public_rental
        ];
        $measure_id = $serviceHouseMeter->getLayerList($pid,$param);
        return api_output(0, $measure_id);
    }

    /**
     * 查询楼层
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getLayerSingleList(){
        $pid=$this->request->param('pid', '', 'intval');
        $floor_id=$this->request->param('floor_id', 0, 'intval');
        $serviceHouseMeter = new HouseMeterService();
        $measure_id = $serviceHouseMeter->getLayerSingleList($pid,$floor_id);
        return api_output(0, $measure_id);
    }
    /**
     * 查询房间
     * @param integer $pid
     * @author:zhubaodi
     * @date_time: 2021/4/25 16:40
     */
    public  function getVacancyList(){
        $charge_type = $this->request->param('charge_type');
        $project_id = $this->request->param('project_id');
        $rule_id = $this->request->param('rule_id');
        $pid=$this->request->param('pid', '', 'intval');
        $is_public_rental = $this->request->param('is_public_rental',0,'int');
        $serviceHouseMeter = new HouseMeterService();
        $param = [
            'charge_type' => $charge_type,
            'project_id' => $project_id,
            'rule_id' => $rule_id,
            'is_public_rental'=>$is_public_rental
        ];
        $measure_id = $serviceHouseMeter->getVacancyList($pid,$param);
        return api_output(0, $measure_id);
    }

    /**
     * 获取是否显示整合左侧导航
     * @return \json
     */
    public function tabList() {
        $houseVillageService = new HouseVillageService();
        try {
            $arr = $houseVillageService->tabList($this->login_role,$this->adminUser);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $arr);
    }

    public function changeVillage() {
        $houseVillageService = new HouseVillageService();
        try {
            $arr = $houseVillageService->changeVillage($this->login_role,$this->adminUser);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $arr);
    }

    public function test() {
        $hik6000CCameraService = new Hik6000CCameraService();
//        $param = $hik6000CCameraService->getHouseBindCommunity('50');
//        $param = $hik6000CCameraService->getDeviceByCommunityId(50);
        $param = $hik6000CCameraService->getDeviceChannelByCommunityId(50);
        return api_output(0, $param);
    }
    
    public function getEventMsg()
    {
        $result = (new DeviceHkNeiBuHandleService())->getEventMsg();
        return api_output(0, $result);

    }
    public function getSuiteAccessToken() {
        $param = [
            'property_id'       => 19,
            'operation_type'    => 'update',
            'userid'            => 9,
            'delete_department' => 20,
            'position'          => '客服',
            'mobile'            => '18356093565',
            'name'              => '测试18356093565',
            'tagid'             => 2,
            'tagname'           => '党员',
        ];
        $qyLoginByMobileInfo = (new  CommunityLoginService())->qyLoginByMobile(18356093564, 0);
        return api_output(0, $qyLoginByMobileInfo);
    }
    
    public function DeviceBindUserService() {
        $time = date("c", 1666022400);
        return api_output(0, $time);
    }
    
    public function dHYrNotice() {
        $village_id = 0;
        $input = array (
            'devType' => 8,
            'roomNumber' => '0201',
            'msgType' => 'card.record',
            'enterOrExit' => 3,
            'typeName' => '人脸开门',
            'facePhotoPath' => 'https://retailcloud-oss-bucket.oss-cn-hangzhou.aliyuncs.com/20221128/20221128104012_63841f8cbe0cc_newChange_newChange.jpg?Expires=1673852742&OSSAccessKeyId=LTAI5tJw3rLMG3qjhWqCz26J&Signature=rrmH2y7d%2BPJpc5zFF21Vh9c9Qkg%3D',
            'type' => 10015,
            'checkResult' => '2',
            'deviceId' => '8E095A4RAJ75D08',
            'deviceName' => '正门',
            'personCode' => '778094',
            'cutImageDataVal' => 'https://retailcloud-oss-bucket.oss-cn-hangzhou.aliyuncs.com/20230109/76bdc09e-ef9a-4ae5-a5d5-e24e30539daf.jpg?Expires=1673251542&OSSAccessKeyId=LTAI5tJw3rLMG3qjhWqCz26J&Signature=mwIKQTyPyaj7pZmbwDy8dLsDXWY%3D',
            'personStoreName' => '印刷厂小区',
            'dataVal' => 'https://retailcloud-oss-bucket.oss-cn-hangzhou.aliyuncs.com/20230109/5e837d63-374e-4c4d-b5a7-0107f441d843.jpg?Expires=1673251542&OSSAccessKeyId=LTAI5tJw3rLMG3qjhWqCz26J&Signature=U51oXmFezsKdpoGDOYMvjnFi6G8%3D',
            'personStoreId' => 803199617539727360,
            'eventTime' => 1673247921000,
            'communityName' => '印刷厂小区',
            'storeName' => '印刷厂小区',
            'id' => 'AYWVWWijXMsoas3Pe5na',
            'channelId' => '0',
            'vaccineStatus' => '2',
            'recordType' => 0,
            'telephone' => '13398895871',
            'deviceCode' => '8E095A4RAJ75D08',
            'storeId' => 803199617539727360,
            'blockId' => 0,
            'personName' => '蒋秀如',
            'companyId' => 642932,
            'channelSeq' => '0',
            'openResult' => 1,
            'wearMask' => '0',
            'channelName' => '正门-1',
            'personId' => 803937142948483072,
            'cardNumber' => '',
            'communityCode' => '3cff7be0cfe24aefa020c39b8576b825',
        );
        $msg = (new FaceDeviceService())->recordUserLog([$input], DahuaConst::DH_YUNRUI, $village_id);
        return api_output(0, $msg);
    }


    public function notification()
    {
        $data = array (
            'powerCount' => '0',
            'cardNum' => 'null',
            'portNum' => '3',
            'endType' => '5',
            'payPrice' => '0',
            'orderNum' => '230818093303851135428',
            'startTime' => '1692365601000',
            'endTime' => '1692365606000',
            'deviceId' => '869465054252254',
        );
        $pileService = new PileUserService();
        try {
            $cardList = $pileService->notification($data);
        } catch (\Exception $e) {
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $cardList);
    }

    public function getCorpTagList1() {
        $property_id = 28;
        $tagIds = [];
//        $tagIds = ['etFzHjDwAA0uNh4EB3nGa8iPZptpqf4w', 'etFzHjDwAAtAjWf7EGXr7q_0s8bQsdhQ'];
        $groupIds = ['etFzHjDwAAXra-AG37QFdQLBCnnpxOJg'];
        try {
            $result = (new WorkWeiXinTaskService())->contactWayUserJob();
        } catch (\Exception $e) {
            dump($e->getMessage());
        }
        dump($result);
    }
    
    public function getDepartmentDetail() {
        $param = [
            'property_id' => 71,
        ];
        $result = (new WorkWeiXinSuiteService())->getDepartmentDetail(539, $param);
        dump($result);
    }
    
    public function alarmToWorkOrder() {
        $imgurl = "https://i.ys7.com/streamer/alarm/url/get?fileId=20230901150854-Q26063151-1-12122-2-1&deviceSerialNo=Q26063151&cn=1&isEncrypted=0&isCloudStored=0&ct=4&lc=7&bn=4_hikalarm&isDevVideo=0";
        $pathinfo = getimagesize($imgurl);
        dump($pathinfo);
    }
}