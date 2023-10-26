<?php
	/**
	 * +----------------------------------------------------------------------
	 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
	 * +----------------------------------------------------------------------
	 * @author    合肥快鲸科技有限公司
	 * @copyright 合肥快鲸科技有限公司
	 * @link      https://www.kuaijing.com.cn
	 * @Desc      代码功能描述
	 */

	namespace app\common\model\service;

	use app\common\model\db\CommonSystemLog;
	use app\common\model\db\CommonSystemLogExtend;
	use app\common\model\db\CommonSystemLogInfo;
	use app\community\model\db\UserLogExtend;
	use think\Exception;

	class CommonSystemLogService
	{
		private static $logDb;
		private static $logInfoDb;
		private static $logExtend;

		public function __construct ()
		{
			if (self::$logDb == NULL){
				self::$logDb = new CommonSystemLog();
			}
			if (self::$logInfoDb == NULL){
				self::$logInfoDb = new CommonSystemLogInfo();
			}
			if (self::$logExtend == NULL){
				self::$logExtend = new CommonSystemLogExtend();
			}
		}

		/**
		 * @param array $data 原数据
		 * @param array $diff 差集数据
		 */
		public function addComonLlog(array $data = [],array $diff =[])
		{
			$logId = self::$logDb->addNewLog($data['logData']);
			$inserList = [];

			foreach ($diff as $key => $value)
			{
				$temp = [];
				$temp['fid'] = $logId;
				$temp['field'] = $key;
				$temp['new_val'] = $value;
				$temp['old_val'] = $data['oldData'][$key];
				$inserList[] = $temp;
			}

			self::$logInfoDb->insertAll($inserList);

			$data['ipData']['fid'] = $logId;
			self::$logExtend->insert($data['ipData']);

		}

		/**
		 * 获取某小区的设置操作日志
		 * @param     $villageId
		 * @param int $offset
		 * @param int $length
		 *
		 * @return \think\Collection
		 * @throws \think\db\exception\DataNotFoundException
		 * @throws \think\db\exception\DbException
		 * @throws \think\db\exception\ModelNotFoundException
		 */
		public function getVillageSettingLogByVillageId($villageId,$offset=0,$length=20)
		{
			$field = "id,village_id,tbname,table,client,trigger_path,trigger_type,addtime,op_id,op_type,op_name";
			return self::$logDb->field($field)->where(['village_id'=>$villageId])->page($offset,$length)->order('id', 'DESC')->select();
		}
		
		public function getVillageSettingLogCountByVillageId($villageId)
		{
			return self::$logDb->where(['village_id'=>$villageId])->count();
		}

		
		public function getCommonSystemLog($where)
		{
			return self::$logDb->where($where)->find();
		}
		
		/** 
		 * 获取变更字段的详细信息
		 * @param int $fid
		 */
		public function getCommonSystemLogInfoByFid(int $fid)
		{
			return self::$logInfoDb->where(['fid'=>$fid])->select();
		}

		/**
		 * 获取变更日志的操作的详细信息
		 * @param int $fid
		 *
		 * @return array|\think\Model|null
		 * @throws \think\db\exception\DataNotFoundException
		 * @throws \think\db\exception\DbException
		 * @throws \think\db\exception\ModelNotFoundException
		 */
		public function getCommonSystemLogExtendByFid(int $fid)
		{
			$data = self::$logExtend->where(['fid'=>$fid])->find();
			if ($data){
				$data = $data->toArray();
				$data['add_time'] = date('Y-m-d H:i:s',$data['add_time']);
			}
			return $data;
		}

		/**
		 * 获取某小区的设置操作日志
		 * @param     $propertyID
		 * @param int $offset
		 * @param int $length
		 *
		 * @return \think\Collection
		 * @throws \think\db\exception\DataNotFoundException
		 * @throws \think\db\exception\DbException
		 * @throws \think\db\exception\ModelNotFoundException
		 */
		public function getPropertySettingLogByPropertyId($propertyID,$offset=0,$length=20)
		{
			$field = "id,property_id,tbname,table,client,trigger_path,trigger_type,addtime,op_id,op_type,op_name";
			return self::$logDb->field($field)->where(['property_id'=>$propertyID])->page($offset,$length)->order('id', 'DESC')->select();
		}

		public function getPropertySettingLogCountByPropertyId($propertyID)
		{
			return self::$logDb->where(['property_id'=>$propertyID])->count();
		}
		
	}