<?php
/**
 *======================================================
 * Created by : PhpStorm
 * User: zhanghan
 * Date: 2022/2/9
 * Time: 20:09
 *======================================================
 */

namespace app\community\controller\manage_api\v1;


use app\community\controller\manage_api\BaseController;
use app\community\model\db\HouseAdmin;
use app\community\model\db\HouseVillageCheckauthDetail;
use app\community\model\db\HouseWorker;
use app\community\model\service\HouseNewCashierService;
use app\community\model\service\HouseVillageCheckauthApplyService;
use app\community\model\service\HouseVillageCheckauthDetailService;
use app\community\model\service\HouseVillageCheckauthSetService;

class MyCheckController extends BaseController
{
    /**
     * 获取搜索条件列表
     * User: zhanghan
     * Date: 2022/2/10
     * Time: 14:03
     * @return \json
     */
    public function getSearchList(){
        $checkauth_detail = new HouseVillageCheckauthDetailService();
        try {
            $list = $checkauth_detail->getSearchList();
            $list['uid'] = $this->_uid;
            $list['role'] = $this->login_role;
        }catch (\Exception $e){
            return api_output_error(1003, $e->getMessage());
        }
        return api_output(1000,$list,'搜索条件列表');
    }

    /**
     * 获取我的审批列表
     * User: zhanghan
     * Date: 2022/2/9
     * Time: 20:55
     * @return \json
     */
    public function myCheckList(){
        $info = $this->getLoginInfo();
        if (isset($info['status']) && $info['status']!=1000) {
            return api_output($info['status'],[],$info['msg']);
        }

        $param['village_id']  = $this->login_info['village_id'];
        $param['uid'] = $this->_uid;
        $param['role'] = $this->login_role;
        $param['page'] = $this->request->post('page',0);
        $param['status'] = $this->request->post('status',999);
        $param['xtype'] = $this->request->post('xtype','');

        if(empty($this->login_info['village_id']) || empty($this->_uid) || empty($this->login_role)){
            return api_output_error(1001,'缺少小区用户参数');
        }

        if(!in_array($this->login_role,[5,6])){
            return api_output(1001,[],'暂未开放功能');
        }

        $field = 'o.order_name,o.is_discard,o.discard_reason,a.add_time,a.xtype,a.apply_reason,w.name,d.status,d.apply_id';
        $order = 'a.id DESC';

        $checkauth_detail = new HouseVillageCheckauthDetailService();
        try {
            $list = $checkauth_detail->myCheckList($param,$field,$order,10);
            $list['uid'] = $this->_uid;
            $list['role'] = $this->login_role;
        }catch (\Exception $e){
            return api_output_error(1003, $e->getMessage());
        }
        return api_output(1000,$list,'我的审批列表');
    }

    /**
     * 获取审批详情
     * User: zhanghan
     * Date: 2022/2/10
     * Time: 9:19
     * @return \json
     */
    public function myCheckDetail(){
        $info = $this->getLoginInfo();
        if (isset($info['status']) && $info['status']!=1000) {
            return api_output($info['status'],[],$info['msg']);
        }
        $apply_id = $this->request->post('apply_id',0);
        if(empty($apply_id)){
            return api_output_error(1001,'申请信息错误');
        }

        if(empty($this->login_info['village_id']) || empty($this->_uid) || empty($this->login_role)){
            return api_output_error(1001,'缺少小区用户参数');
        }

        if(!in_array($this->login_role,[5,6])){
            return api_output(1001,[],'暂未开放功能');
        }

        $checkauth_detail = new HouseVillageCheckauthDetailService();
        try {
            $list = $checkauth_detail->myCheckDetail($apply_id,$this->_uid,$this->login_role);
        }catch (\Exception $e){
            return api_output_error(1003, $e->getMessage());
        }
        return api_output(1000,$list,'我的审批列表');
    }

    /**
     * 审核
     * User: zhanghan
     * Date: 2022/2/10
     * Time: 10:23
     * @return \json
     */
    public function verifyCheckauthApply(){
        $info = $this->getLoginInfo();
        if (isset($info['status']) && $info['status']!=1000) {
            return api_output($info['status'],[],$info['msg']);
        }

        $xtype = $this->request->post('xtype',1,'trim');
        $apply_id = $this->request->post('apply_id',1,'trim');
        $status = $this->request->post('status',1,'int');
        $bak = $this->request->post('bak',1,'trim');
        $village_id = $this->login_info['village_id'];
        $order_id = $this->request->post('order_id',0,'int');

        $wid = $this->_uid;
        if($this->login_role == 5){ // 物业管理人员
            $where_house_admin = [];
            $where_house_admin[] = ['id','=',$this->_uid];
            $db_house_admin = new HouseAdmin();
            $db_house_worker = new HouseWorker();
            // 查询物业管理人员表与工作人员的关系
            $info = $db_house_admin->getOne($where_house_admin,'wid,phone,village_id');
            if($info && !$info->isEmpty()){
                $info = $info->toArray();
                if(!empty($info['wid'])){
                    $wid = $info['wid'];
                }else{
                    $where_house_worker = [];
                    $where_house_worker[] = ['phone','=',$info['phone']];
                    $where_house_worker[] = ['village_id','=',$info['village_id']];
                    // 查询物业管理人员表与工作人员的关系
                    $infoWorker = $db_house_worker->getOne($where_house_worker,'wid');
                    if($infoWorker && !$infoWorker->isEmpty()){
                        $infoWorker = $infoWorker->toArray();
                        $wid = $infoWorker['wid'];
                    }else{
                        throw new Exception('参数错误，未查询到相关物业管理人员');
                    }
                }
            }else{
                return api_output_error(1003,'参数错误，未查询到相关物业管理人员！');
            }
        }

        $houseVillageCheckauthApplyService=new HouseVillageCheckauthApplyService();

        // 物业服务时间审核
        if($xtype == 'service_time_check'){
            try {
                $tmp_data = $houseVillageCheckauthApplyService->verifyCheckauthApplyService($apply_id,$status,$bak,$village_id,$wid);
                return api_output(0,$tmp_data,'审核成功');
            }catch (\Exception $e){
                return api_output_error(1003, $e->getMessage());
            }
        }else{
            $houseNewCashierService = new HouseNewCashierService();
            $whereArr=array('order_id'=>$order_id,'village_id'=>$village_id);
            $order=$houseNewCashierService->getInfo($whereArr);
            if(!$order || $order->isEmpty()){
                return api_output_error(1003,'订单不存在！');
            }
            $order=$order->toArray();
            if($order['check_status']!=1 && $order['check_status']!=2){
                return api_output_error(1003,'订单审核状态不正确！');
            }
            $check_level_info=array();
            if(in_array($this->login_role,[5,6])){
                $check_level_info['wid'] = $wid;
                $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
                $orderRefundCheckWhere=array('village_id'=>$village_id,'xtype'=>'order_refund_check');
                $userAuthLevel=$houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
                if(!empty($userAuthLevel)){
                    $check_level_info['check_level']=$userAuthLevel['check_level'];
                }
            }else{
                return api_output_error(1003,'您没有权限审核！');
            }
            try {
                $verifyData=array('xtype'=>$xtype,'bak'=>$bak,'status'=>$status);
                $tmp_data = $houseVillageCheckauthApplyService->verifyCheckauthApply($order,$verifyData, $check_level_info);
                return api_output(0,$tmp_data,'审核成功');
            }catch (\Exception $e){
                return api_output_error(1003, $e->getMessage());
            }
        }
    }


}