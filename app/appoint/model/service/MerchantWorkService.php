<?php
namespace app\appoint\model\service;

use app\appoint\model\db\MerchantWorkers;

class MerchantWorkService
{
    /**
     * 技师主页详情
     * @param $params
     * @return mixed
     * @throws \think\Exception
     */
    public function getWorkInfo($params){
        $id = $params['work_id'];
        if(!$id){
            throw new \think\Exception(L_('参数错误！'));
        }
        $work_info = (new MerchantWorkers())->field('merchant_worker_id,name,info,desc,avatar_path,mobile')->where(['merchant_worker_id'=>$id])->findOrEmpty()->toArray();
        if(!$work_info){
            throw new \think\Exception(L_(cfg('appoint_worker_name').'不存在！'));
        }
        $work_info['avatar_path'] = $work_info['avatar_path']?replace_file_domain('/upload/appoint/' .str_replace(',','/',$work_info['avatar_path'])):'';
        $work_info['info'] = $work_info['info']?:'';
        $work_info['desc'] = $work_info['desc']?replace_file_domain_content(htmlspecialchars_decode($work_info['desc'])):'';
        return $work_info;
    }
}