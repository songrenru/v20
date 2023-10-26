<?php
	/**
	 * +----------------------------------------------------------------------
	 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
	 * +----------------------------------------------------------------------
	 * @author    合肥快鲸科技有限公司
	 * @copyright 合肥快鲸科技有限公司
	 * @link      https://www.kuaijing.com.cn
	 * @Desc      房间管理控制器
	 */

	namespace app\community\controller\village_api;

	use app\community\controller\CommunityBaseController;
    use app\community\model\db\HouseFaceDevice;
    use app\community\model\service\HouseFaceDeviceService;
    use app\community\model\service\HouseVillageSingleService;
    use app\community\model\service\HouseVillageUserVacancyService;
    use app\traits\house\HouseTraits;

	class RoomController extends CommunityBaseController
	{
		use HouseTraits;

        /**
         * 小区房间列表
         * param {
         *     'page' => '分页时候的页数 取第2页数据传2即可',
         *     'limit' => '每页条数 默认20条',
         *     'status' => '查询不同装填房屋 不建议传4（已删除）',
         *     'is_del' => '查询是否删除状态房屋  默认未删除 0',
         * }
         * @return \json
         */
		public function index() {
            $village_id = $this->adminUser['village_id'];
            if (empty($village_id)){
                return api_output(1002, [], '请先登录到小区后台！');
            }
            $property_id    = $this->adminUser['property_id'];
            $page           = $this->request->post('page',0,'intval');
            $limit          = $this->request->post('limit',20,'intval');
            $status         = $this->request->post('status',-1);
            $is_del         = $this->request->post('is_del',0);

            $houseVillageUserVacancyService = new HouseVillageUserVacancyService();
            $param = [
                'village_id' => $village_id,
                'property_id' => $property_id,
                'page' => $page,
                'limit' => $limit,
                'status' => $status,
                'is_del' => $is_del,
            ];
            try{
                $data = $houseVillageUserVacancyService->getRoomList($param);
            }catch (\Exception $e){
                return api_output_error(-1, $e->getMessage());
            }
            return api_output(0,$data);
        }

        public function roomInfo() {
            $village_id = $this->adminUser['village_id'];
            if (empty($village_id)){
                return api_output(1002, [], '请先登录到小区后台！');
            }
            $pigcms_id = $this->request->post('pigcms_id',0);
            $houseVillageUserVacancyService = new HouseVillageUserVacancyService();


            $whereRoom = [
                'village_id' => $village_id,
                'pigcms_id'  => $pigcms_id
            ];
            $paramRoom = [
                'getAddress' => true
            ];
            $fieldRoom = 'pigcms_id,usernum,floor_id,room,status,village_id,housesize,park_flag,house_type,user_status,sell_status,single_id,layer_id,room_number,property_number,contract_time_start,contract_time_end';
            $info = $houseVillageUserVacancyService->getUserVacancyInfo($whereRoom,$fieldRoom,$paramRoom);
            $room = [];
            if ($info){
                $room = $info->toArray();
                $whereA185 = [];
                $whereA185[] = ['village_id','=',$village_id];
                $whereA185[] = ['device_type','=',61];
                $whereA185[] = ['is_del','=',0];
                $deviceCount = (new HouseFaceDeviceService())->getFaceCount($whereA185);
                $room['a185_num'] = $deviceCount;
                $whereIndoor = [];
                $whereIndoor[] = ['village_id','=',$village_id];
                $whereIndoor[] = ['device_type','=',2];
                $whereIndoor[] = ['room_id','=',$pigcms_id];
                $a185Indoor = (new HouseFaceDeviceService())->getFaceA185Indoor($whereIndoor,'id,device_sn,status');
                if (!$a185Indoor || isset($a185Indoor['status'])) {
                    $a185Indoor = [
                        'device_sn' => '',
                        'status' => 1,
                    ];
                }
                $room['a185Indoor'] = $a185Indoor;


                return api_output(0,$room);
            }
            return api_output(1001, [], '异常访问！');
        }
	}