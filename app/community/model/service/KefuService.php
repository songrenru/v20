<?php


namespace app\community\model\service;

use app\community\model\db\MerchantStoreKefu;
use app\community\model\db\HouseServicesHousekeeper;
use app\community\model\db\HouseVillageSingle;
use app\community\model\db\HouseWorker;

class KefuService
{
    public function getKefu($where=[],$field=true)
    {
        $db_merchant_store_kefu = new MerchantStoreKefu();
        $db_services_housekeeper = new HouseServicesHousekeeper();
        $db_house_village_single = new HouseVillageSingle();
        $data = $db_merchant_store_kefu->getOne($where,$field);
        $info = [];
        if($data){
            $keeper_list = $db_services_housekeeper->getList([['village_id','=',$data['store_id'],['single_id','<>',0]]]);
            $single_id = [];
            if($keeper_list){
                foreach ($keeper_list as $v){
                    $work_arr = explode(',',$v['work_arr']);
                    if(in_array($data['bind_uid'],$work_arr)){
                        $single_id[] = $v['single_id'];
                    }
                }
            }
            if($single_id){
                $single_info = $db_house_village_single->getList([['id','in',$single_id]],'single_name');
                $info['single_name'] = '';
                foreach ($single_info as $v){
                    $info['single_name'] .= isset($v['single_name'])?$v['single_name'].';':'';
                }
                $info['single_name'] = rtrim($info['single_name'],';');
            }else{
                $info['single_name'] = '无';
            }
            $db_house_worker = new HouseWorker();
            $worker_info = $db_house_worker->get_one(['wid'=>$data['bind_uid']],'name,phone,avatar,job_number');
            $info['name'] = isset($worker_info['name'])?$worker_info['name']:'';
            $info['phone'] = isset($worker_info['phone'])?$worker_info['phone']:'';
            $info['avatar'] = isset($worker_info['avatar'])?$worker_info['avatar']:'';
            $info['job_number'] = isset($worker_info['job_number'])?$worker_info['job_number']:'';
        }
        return $info;
    }

	/**
	 * 获取楼栋管家信息
	 * @param      $where
	 * @param bool $field
	 *
	 * @return array|\think\Model|null
	 * @throws \think\db\exception\DataNotFoundException
	 * @throws \think\db\exception\DbException
	 * @throws \think\db\exception\ModelNotFoundException
	 */
	public function getBuildingButlerInfo($where , $field=true)
	{
		return (new HouseServicesHousekeeper())->where($where)->field($field)->find();
	}

	public function saveBuildingButlerInfo($where , $data)
	{
		return (new HouseServicesHousekeeper())->where($where)->data($data)->save();
	}

	public function addBuildingButlerInfo($data)
	{
		return (new HouseServicesHousekeeper())->save($data);
	}

}