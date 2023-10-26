<?php


namespace app\community\controller\village_api;


use app\common\model\service\plan\PlanService;
use app\community\controller\CommunityBaseController;
use app\community\model\db\HouseVillageMeterReading;
use app\community\model\service\HouseNewCashierService;
use app\community\model\service\HouseNewChargeRuleService;
use app\community\model\service\HouseNewMeterService;
use app\community\model\service\HousePropertyDigitService;
use app\community\model\service\HouseVillageService;
use app\community\model\service\HouseVillageSingleService;
use app\community\model\service\HouseVillageUserBindService;
use app\community\model\service\HouseVillageUserVacancyService;
use app\community\model\service\HouseWorkerService;
use app\community\model\service\StorageService;

class HouseMeterController extends CommunityBaseController
{
    /**
     * 抄表列表
     * @author lijie
     * @date_time 2021/07/09
     * @return \json
     */
    public function getMeterProject()
    {
        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $service_house_new_meter = new HouseNewMeterService();
        $where[] = ['p.village_id','=',$village_id];
        $where[] = ['p.status','=',1];
        $where[] = ['c.charge_type','in',['water','electric','gas']];
        try{
            $data = $service_house_new_meter->getMeterProject($where,'p.name as project_name,c.charge_number_name as subject_name,charge_type,p.id as project_id,p.subject_id,p.mday',$page,$limit,'p.id DESC')->toArray();
            if($data){
                $service_house_new_charge_rule = new HouseNewChargeRuleService();
                foreach ($data as $k=>$v){
                    $rule_id = $service_house_new_charge_rule->getValidChargeRule($v['project_id']);
                    if(!$rule_id){
                        unset($data[$k]);
                        continue;
                    }
                    $rule_info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$rule_id],'r.charge_name,r.unit_price,r.rate,r.id as rule_id');
                    $data[$k]['charge_name'] = $v['project_name'];//注意这个字段转成了项目名称
                    $data[$k]['rule_name'] = $rule_info['charge_name'];// 这个字段才是标准名称
                    $data[$k]['unit_price'] = $rule_info['unit_price'];
                    $data[$k]['rate'] = $rule_info['rate'];
                    $data[$k]['rule_id'] = $rule_info['rule_id'];
                }
                $data = array_values($data);
            }
            $count = $service_house_new_meter->getMeterProjectCount($where);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['total_limit'] = $limit;
        $res['list'] = $data;
        $res['count'] = $count;
        $res['is_show'] = cfg('meter_reading_price')==1?true:false;

        $res['is_revise_btn']=0;
        //todo 针对定制水电表设备 不支持修改起止度参数
        if((int)cfg('customized_meter_reading')){
            $res['is_revise_btn']=1;
        }
        $houseVillageService=new HouseVillageService();
        $res['role_addmeter']=$houseVillageService->checkPermissionMenu(112104,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_meterset']=$houseVillageService->checkPermissionMenu(112105,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_managebe']=$houseVillageService->checkPermissionMenu(112106,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_recordmeter']=$houseVillageService->checkPermissionMenu(112107,$this->adminUser,$this->login_role,$this->dismissPermissionRole);

        return api_output(0,$res);
    }

    /**
     * 负责人列表
     * @author lijie
     * @date_time 2021/07/09
     * @return \json
     */
    public function getMeterDirectorList()
    {
        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $project_id = $this->request->post('project_id',0);
        $service_house_new_meter = new HouseNewMeterService();
        if($project_id){
            $where[] = ['project_id','=',$project_id];
        }
        $where[] = ['village_id','=',$village_id];
        $where[] = ['status','in',[1,2]];
        try{
            $data = $service_house_new_meter->getMeterDirectorList($where,true,$page,$limit,'id DESC');
            $count = $service_house_new_meter->getMeterDirectorCount($where);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['list'] = $data;
        $res['count'] = $count;
        $res['total_limit'] = $limit;
        $houseVillageService=new HouseVillageService();
        $res['role_addmanage']=$houseVillageService->checkPermissionMenu(112108,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_editmanage']=$houseVillageService->checkPermissionMenu(112109,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_delmanage']=$houseVillageService->checkPermissionMenu(112110,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        return api_output(0,$res);
    }

    /**
     * 添加负责人
     * @author lijie
     * @date_time 2021/07/09
     * @return \json
     */
    public function addMeterDirector()
    {
        $village_id = $this->adminUser['village_id'];
        $name = $this->request->post('name','');
        $phone = $this->request->post('phone','');
        $status = $this->request->post('status',1);
        $worker_id = $this->request->post('worker_id',0);
        $day = $this->request->post('day',1);
        $dateDay = $this->request->post('dateDay','09:00');
        $project_id = $this->request->post('project_id',0);
        if(!$project_id || !$worker_id || !$status)
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_meter = new HouseNewMeterService();
        $data['name'] = $name;
        $data['phone'] = $phone;
        $data['status'] = $status;
        $data['worker_id'] = $worker_id;
        $data['project_id'] = $project_id;
        $data['village_id'] = $village_id;
        $data['add_time'] = time();
        $data['notice_time'] =$day.','.$dateDay;
        try{
            $id = $service_house_new_meter->addMeterDirector($data);
            if($id){
                if(date('d') > $day){
                    $time = strtotime(date('Y-m',strtotime('+1 month')).'-'.$day.' '.$dateDay);
                }else{
                    $time = strtotime(date('Y-m').'-'.$day.' '.$dateDay);
                }
                /*
                $service_plan = new PlanService();
                $param['plan_time'] = $time;
                $param['space_time'] = 0;
                $param['add_time'] = time();
                $param['file'] = 'sub_village_send_meter_message';
                $param['time_type'] = 1;
                $param['unique_id'] = 'worker_meter_message_'.$id;
                $param['param'] = ['director_id'=>$id];
                $service_plan->addTask($param,1);
                */
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        if($id)
            return api_output(0,[],'添加成功');
        return api_output_error(1001,'服务异常');
    }

    /**
     * 修改负责人信息
     * @author lijie
     * @date_time 2021/07/09
     * @return \json
     */
    public function saveMeterDirector()
    {
        $id = $this->request->post('id',0);
        $name = $this->request->post('name','');
        $phone = $this->request->post('phone','');
        $status = $this->request->post('status',1);
        $worker_id = $this->request->post('worker_id',0);
        $day = $this->request->post('day',1);
        $dateDay = $this->request->post('dateDay','09:00');
        if(!$worker_id || !$status || !$id)
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_meter = new HouseNewMeterService();
        $data['name'] = $name;
        $data['phone'] = $phone;
        $data['status'] = $status;
        $data['worker_id'] = $worker_id;
        $data['update_time'] = time();
        $data['notice_time'] =$day.','.$dateDay;
        try{
            $res = $service_house_new_meter->saveMeterDirector(['id'=>$id],$data);
            if($res){
                $service_plan = new PlanService();
                //$process_info = $service_plan->getOne(['unique_id'=>'worker_meter_message_'.$id]);
                if(date('d') > $day){
                    $time = strtotime(date('Y-m',strtotime('+1 month')).'-'.$day.' '.$dateDay);
                }else{
                    $time = strtotime(date('Y-m').'-'.$day.' '.$dateDay);
                }
                /*
                $service_plan = new PlanService();
                $param['plan_time'] = $time;
                $param['space_time'] = 0;
                $param['add_time'] = time();
                $param['file'] = 'sub_village_send_meter_message';
                $param['time_type'] = 1;
                $param['unique_id'] = 'worker_meter_message_'.$id.time();
                $param['param'] = ['director_id'=>$id];
                $service_plan->addTask($param,1);
                */
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        if($res)
            return api_output(0,[],'编辑成功');
        return api_output_error(1001,'服务异常');
    }

    /**
     * 删除负责人
     * @author lijie
     * @date_time 2021/07/09
     * @return \json
     */
    public function delMeterDirector()
    {
        $id = $this->request->post('id',0);
        if(!$id)
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_meter = new HouseNewMeterService();
        try{
            $res = $service_house_new_meter->saveMeterDirector(['id'=>$id],['status'=>4]);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,[],'删除成功');
    }

    /**
     * 工作人员列表
     * @author lijie
     * @date_time 2021/07/09
     * @return \json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getWorkers()
    {
        $village_id = $this->adminUser['village_id'];
        $service_house_workers = new HouseWorkerService();
        $where[] = ['village_id','=',$village_id];
        $where[] = ['status','=',1];
        $where[] = ['is_del','=',0];
        $data = $service_house_workers->getWorker($where,'wid,name,type,phone');
        return api_output(0,$data);
    }

    /**
     * 负责人详情
     * @author lijie
     * @date_time 2021/07/10
     * @return \json
     */
    public function getWorkerInfo()
    {
        $id = $this->request->post('id',0);
        if(!$id)
            return api_output_error(1001,'缺少必传参数');
        $service_house_new_meter = new HouseNewMeterService();
        try{
            $data = $service_house_new_meter->getMeterDirectorInfo(['id'=>$id],true);
            $notice_time = explode(',',$data['notice_time']);
            $data['day'] = $notice_time[0];
            $data['dateDay'] = $notice_time[1];
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 抄表录入
     * @author lijie
     * @date_time 2021/07/10
     * @return \json
     */
    public function meterReadingAdd()
    {
        $village_id = $this->adminUser['village_id'];
        $uid=$this->login_role== 5?$this->_uid:0;
        $single_id = $this->request->post('single_id',0);
        $floor_id = $this->request->post('floor_id',0);
        $layer_id = $this->request->post('layer_id',0);
        $vacancy_id = $this->request->post('vacancy_id',0);
        $start_ammeter = $this->request->post('start_ammeter',0);
        $last_ammeter = $this->request->post('last_ammeter',0);
        $charge_name = $this->request->post('charge_name','');
        $unit_price = $this->request->post('unit_price',0);
        $charge_type = $this->request->post('charge_type','');
        $rule_id = $this->request->post('rule_id',0);
        $project_id = $this->request->post('project_id',0);
        $rate = $this->request->post('rate',1);
        $note = $this->request->post('note','');
        $opt_meter_time = $this->request->post('opt_meter_time','');
        $opt_xtype = $this->request->post('opt_xtype','','trim');  //revise_data 矫正数据记录
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $service_house_new_meter = new HouseNewMeterService();
        $service_house_village = new HouseVillageService();
        $service_house_new_cashier = new HouseNewCashierService();
        if(!$single_id || !$floor_id || !$layer_id || !$vacancy_id || !$last_ammeter || !$rate || empty($charge_name) || empty($charge_type))
            return api_output_error(1001,'缺少必传参数');
        if($last_ammeter < 0 || $start_ammeter < 0)
            return api_output_error(1001,'抄表起始度不能小于0');
        $res = $service_house_new_meter->getIsBind(['project_id'=>$project_id,'vacancy_id'=>$vacancy_id,'is_del'=>1]);
        if(empty($res)){
            return api_output_error(1001,'当前房间没有绑定该收费项目');
        }
        $info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$rule_id],'n.charge_type,r.*,p.type');
        /*
        $condition1 = [];
        $condition1[] = ['vacancy_id','=',$vacancy_id];
        $condition1[] = ['status','=',1];
        $condition1[] = ['type','in',[0,3,1,2]];
        $bind_list = $service_house_village_user_bind->getList($condition1,true);
        */
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $whereArrTmp=array();
        $whereArrTmp[]=array('pigcms_id','=',$vacancy_id);
        $whereArrTmp[]=array('user_status','=',2);  // 2未入住
        $whereArrTmp[]=array('status','in',[1,2,3]);
        $whereArrTmp[]=array('is_del','=',0);
        $room_vacancy=$service_house_village_user_vacancy->getUserVacancyInfo($whereArrTmp);
        $not_house_rate = 100;
        if($room_vacancy && !$room_vacancy->isEmpty()){
            $room_vacancy = $room_vacancy->toArray();
            if(!empty($room_vacancy)){
                $not_house_rate = $info['not_house_rate'];
            }
        }
        $projectBindInfo = $service_house_new_charge_rule->getBindDetail(['project_id'=>$info['charge_project_id'],'rule_id'=>$info['id'],'vacancy_id'=>$vacancy_id]);
        if(isset($projectBindInfo) && !empty($projectBindInfo)){
            if($projectBindInfo['custom_value']){
                $custom_value = $projectBindInfo['custom_value'];
                $custom_number=$custom_value;
            }else{
                $custom_value = 1;
            }
        }else{
            $custom_value = 1;
        }

        $rule_digit=-1;
        if(isset($info['rule_digit']) && $info['rule_digit']>-1 && $info['rule_digit']<5){
            $rule_digit=$info['rule_digit'];
        }
        $digit_type=1;
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);
        if(!empty($digit_info)){
            $digit_type=$digit_info['type']==2 ? 2:1;
            if($rule_digit<=-1 || $rule_digit>=5){
                $rule_digit=intval($digit_info['meter_digit']);
            }
        }
        $rule_digit=$rule_digit>-1 ? $rule_digit:2;

        $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$vacancy_id],['status','=',1],['type','in',[0,3]]],'uid,name,phone,pigcms_id,village_id');

        $system_remarks=(new StorageService())->getRoleData($this->_uid,$this->login_role,$this->adminUser);
        $insertData=array();
        $insertData['village_id'] = $village_id;
        $insertData['single_id'] = $single_id;
        $insertData['floor_id'] = $floor_id;
        $insertData['layer_id'] = $layer_id;
        $insertData['layer_num'] = $vacancy_id;
        $insertData['charge_name'] = $charge_name;
        $insertData['unit_price'] = $unit_price;
        $insertData['start_ammeter'] = $start_ammeter;
        $insertData['last_ammeter'] = $last_ammeter;
        $insertData['rate'] = $rate;
        $insertData['note'] = $note;
        $insertData['cost_num'] = $last_ammeter-$start_ammeter;
        $cost_money=$insertData['cost_num']*$unit_price*$rate*($not_house_rate/100)*$custom_value;
        $cost_money=formatNumber($cost_money, $rule_digit, $digit_type);
        $cost_money=formatNumber($cost_money, 2, 1);
        $insertData['cost_money'] = $cost_money;
        $insertData['add_time'] = time();
        $insertData['project_id'] = $project_id;
        $insertData['role_id'] = $uid?$uid:0;

        //todo 同步写入关联数据
        $insertData['user_name'] = $user_info['name'];
        $insertData['user_bind_id'] = $user_info['pigcms_id'];
        $insertData['user_bind_phone'] = $user_info['phone'];
        $insertData['work_name'] = $system_remarks['account'];
        if(!empty($opt_meter_time)){
            $opt_meter_time=strtotime($opt_meter_time);
            if($opt_meter_time>0){
                $insertData['opt_meter_time']=$opt_meter_time;
            }else{
                $insertData['opt_meter_time']=time();
            }
        }
        if(!empty($opt_xtype)){
            $insertData['source_type']=$opt_xtype;
            if($opt_xtype=='revise_data') {
                $insertData['opt_meter_time'] = time();
                $insertData['cost_money']=0;
            }
        }
        try{
            $whereArr=['project_id'=>$project_id,'village_id'=>$village_id,'layer_num'=>$vacancy_id];
            $meter_reading=$service_house_new_meter->getMeterRecordInfo($whereArr,'*','id DESC');
            $id = $service_house_new_meter->addMeterReading($insertData);
            if($id){
                $orderData=array();
                if($opt_xtype=='revise_data'){
                    return api_output(0,[],'矫正录入成功');
                }
                if($user_info){
                    $orderData['uid'] = $user_info['uid'];
                    $orderData['name'] = $user_info['name'];
                    $orderData['phone'] = $user_info['phone'];
                    $orderData['pigcms_id'] = $user_info['pigcms_id'];
                }

                $orderData['meter_reading_id'] = $id;
                $orderData['property_id'] = $village_info['property_id'];
                $orderData['village_id'] = $village_id;
                $orderData['order_type'] = $charge_type;
                $orderData['order_name'] = $charge_name;
                $orderData['room_id'] = $vacancy_id;
                $orderData['total_money'] = $insertData['cost_money'];
                $orderData['modify_money'] = $orderData['total_money'];
                $orderData['project_id'] = $project_id;
                $orderData['rule_id'] = $rule_id;
                $orderData['unit_price'] = $unit_price;
                $orderData['last_ammeter'] = $start_ammeter;
                $orderData['now_ammeter'] = $last_ammeter;
                $orderData['add_time'] = time();
                if($not_house_rate>0 && $not_house_rate<100){
                    $orderData['not_house_rate'] = $not_house_rate;
                }
                if(isset($custom_number)){
                    $orderData['number'] = $custom_number;
                }
                $service_start_time=time();
                if($meter_reading && !$meter_reading->isEmpty()){
                    $service_start_time=$meter_reading['add_time'];
                }
                $orderData['service_start_time']=$service_start_time;
                $service_end_time=time();
                $orderData['service_end_time']=$service_end_time;
                
                $res = $service_house_new_cashier->addOrder($orderData);
                if($res){
                    $charge_all=['water' => '水费', 'electric' => '电费', 'gas' => '燃气费'];
                    if(isset($charge_all[$charge_type]) && !empty($charge_all[$charge_type])){
                        $user_remarks = '后台'.$charge_all[$charge_type].'缴费操作';
                       (new StorageService())->userBalanceChange($user_info['uid'],2,$insertData['cost_money'],$system_remarks['remarks'],$user_remarks,$res,$village_id);
                    }
                    return api_output(0,[],'抄表成功');
                }else{
                    return api_output_error(1001,'服务异常');
                }


            }else{
                return api_output_error(1001,'服务异常');
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }


    /**
     * 录入费用
     * @author:zhubaodi
     * @date_time: 2022/8/2 9:35
     */
    public function meterReadingPriceAdd()
    {

        $data['village_id'] = $this->adminUser['village_id'];
        $data['uid']=$this->login_role== 5?$this->_uid:0;
        $data['login_role']=$this->login_role;
        $data['adminUser']=$this->adminUser;
        $data['single_id'] = $this->request->post('single_id',0);
        $data['floor_id'] = $this->request->post('floor_id',0);
        $data['layer_id'] = $this->request->post('layer_id',0);
        $data['vacancy_id'] = $this->request->post('vacancy_id',0);
        $data['total'] = $this->request->post('total','','trim');
        $data['offline_pay_type'] = $this->request->post('offline_pay_type',0);
        $data['charge_name'] = $this->request->post('charge_name','');
        $data['unit_price'] = $this->request->post('unit_price',0);
        $data['charge_type'] = $this->request->post('charge_type','');
        $data['rule_id'] = $this->request->post('rule_id',0);
        $data['project_id'] = $this->request->post('project_id',0);
        $data['rate'] = $this->request->post('rate',1);
        $data['note'] = $this->request->post('note','');
        $data['opt_meter_time'] = $this->request->post('opt_meter_time','');
        if(!$data['single_id'] || !$data['floor_id'] || !$data['layer_id'] || !$data['vacancy_id'] || !$data['rate'] || empty($data['charge_name']) || empty($data['charge_type']))
        {
            return api_output_error(1001,'房间不能为空');
        }
        if (empty($data['total'])){
            return api_output_error(1001,'总价不能为空');
        }else{
            if ($data['total'] <= 0) {
                return api_output_error(1001, '总价需要大于0');
            }
            if(!is_numeric($data['total'])){
                return api_output_error(1001,'总价需要是数字');
            }
        }
        if (empty($data['offline_pay_type'])){
            return api_output_error(1001, '线下支付方式不能为空');
        }
        if (empty($data['opt_meter_time'])){
            return api_output_error(1001, '抄表时间不能为空');
        }
        $service_house_new_meter = new HouseNewMeterService();
        try {
            $ret=$service_house_new_meter->meterReadingPriceAdd($data);
            return api_output(0,$ret);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }


    /*
     * 生成修改止度增加的费用账单
    */
    public function addMdyMeterReadingOrder(){
        $village_id = $this->adminUser['village_id'];
        $idd = $this->request->post('idd',0,'int');
        if($idd<1){
            return api_output_error(1001,'抄表记录ID错误');
        }
        $service_house_new_meter = new HouseNewMeterService();
        try {
            $system_remarks=(new StorageService())->getRoleData($this->_uid,$this->login_role,$this->adminUser);
            $ret=$service_house_new_meter->addMdyMeterReadingOrder($idd,$village_id,$this->_uid,$system_remarks);
            return api_output(0,$ret,'订单生成成功!');
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }

    public function meterReadingEdit(){
        $village_id = $this->adminUser['village_id'];
        $id = $this->request->post('id',0,'int');
        $start_ammeter = $this->request->post('start_ammeter',0);
        $start_ammeter=$start_ammeter>0 ? floatval($start_ammeter):0;
        $last_ammeter = $this->request->post('last_ammeter',0);
        $last_ammeter=$last_ammeter>0 ? floatval($last_ammeter):0;
        $note = $this->request->post('note','');
        $note=$note ? htmlspecialchars($note,ENT_QUOTES) :'';
        $rule_id = $this->request->post('rule_id',0);
        $rule_id=$rule_id>0 ? $rule_id:0;
        if($id<1){
            return api_output_error(1001,'修改抄表止度参数ID错误');
        }
        if($start_ammeter<0 || $last_ammeter<0){
            return api_output_error(1001,'抄表起始度不能小于0');
        }
        if($start_ammeter>$last_ammeter){
            return api_output_error(1001,'抄表止度需要大于起度');
        }
        $service_house_new_meter = new HouseNewMeterService();
        try {
            $editData=array('adminUser'=>$this->adminUser,'uid'=>$this->_uid);
            $editData['login_role']=$this->login_role;
            $editData['id']=$id;
            $editData['start_ammeter']=$start_ammeter;
            $editData['last_ammeter']=$last_ammeter;
            $editData['note']=$note;
            $editData['rule_id']=$rule_id;
            $ret=$service_house_new_meter->meterReadingModifyEdit($editData,$village_id);
            $ret=!empty($ret) ? $ret:array();
            return api_output(0,$ret,'抄表修改成功');
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }

    public function getMeterReadingMdylog(){
        $village_id = $this->adminUser['village_id'];
        $meter_reading_id = $this->request->post('meter_reading_id',0,'int');
        if($meter_reading_id<1){
            return api_output(0,['list'=>array()]);
        }
        $service_house_new_meter = new HouseNewMeterService();
        try {
            $ret=$service_house_new_meter->getMeterReadingMdylog($meter_reading_id,$village_id);
            return api_output(0,$ret);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }
    /**
     * 判断房间是否绑定项目
     * @return \json
     */
    public function getIsBind()
    {
        $room_id = $this->request->post('vacancy_id',0);
        $project_id = $this->request->post('project_id',0);
        if(!$room_id || !$project_id){
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_new_meter = new HouseNewMeterService();
        try{
            $data = $service_house_new_meter->getIsBind(['project_id'=>$project_id,'vacancy_id'=>$room_id,'is_del'=>1]);
            if($data){
                $res['status'] = 1;
            }else{
                $res['status'] = 0;
            }
            return api_output(0,$res);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }

    /**
     * 抄表记录
     * @author lijie
     * @date_time 2021/07/10
     * @return \json
     */
    public function getMeterReadingRecord()
    {
        $village_id = $this->adminUser['village_id'];
        $page = $this->request->post('page',1);
        $limit = $this->request->post('limit',10);
        $charge_name = $this->request->post('charge_name');
        $project_id = $this->request->post('project_id',0);
        $single_id = $this->request->post('single_id',0);
        $floor_id = $this->request->post('floor_id',0);
        $layer_id = $this->request->post('layer_id',0);
        $room_id = $this->request->post('room_id',0);
        $date_time = $this->request->post('date_time',[]);
        $transaction_type = $this->request->post('transaction_type',0);
        $service_house_new_meter = new HouseNewMeterService();
        $where[] = ['m.village_id','=',$village_id];
        if($project_id){
            $where[] = ['m.project_id','=',$project_id];
        }else{
            if($charge_name)
                $where[] = ['m.charge_name','=',$charge_name];
        }
        if (!empty($transaction_type)){
            $where[] = ['m.transaction_type','=',$transaction_type];
        }
        if(!empty($room_id) && is_array($room_id)){
            if (isset($room_id[3])){
                $where[]=['m.layer_num','=',$room_id[3]];
            }elseif (isset($room_id[2])){
                $where[]=['m.layer_id','=',$room_id[2]];
            }elseif (isset($room_id[1])){
                $where[]=['m.floor_id','=',$room_id[1]];
            } else{
                $where[]=['m.single_id','=',$room_id[0]];
            }
        }
        if($date_time)
            $where[] = ['m.add_time','between',[strtotime($date_time[0]),strtotime($date_time[1].' 23:23:59')]];
        try{
            $data = $service_house_new_meter->getMeterReadingRecord($where,'m.*,a.realname',$page,$limit,'m.id DESC');
            $count = $service_house_new_meter->getMeterReadingRecordCount($where);
            $total_info = $service_house_new_meter->meterReadingStatistics($where);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['total_info'] = $total_info;
        $res['list'] = $data;
        $res['count'] = $count;
        $res['total_limit'] = $limit;
        $res['is_show'] = cfg('meter_reading_price')==1?true:false;
        $houseVillageService=new HouseVillageService();
        $res['role_export']=$houseVillageService->checkPermissionMenu(112111,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_import']=$houseVillageService->checkPermissionMenu(112112,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        $res['role_mfymeter']=$houseVillageService->checkPermissionMenu(112113,$this->adminUser,$this->login_role,$this->dismissPermissionRole);
        
        return api_output(0,$res);
    }

    /**
     * 获取上一次抄表止度
     * @author lijie
     * @date_time 2021/07/15
     * @return \json
     */
    public function getLastMeter()
    {
        $project_id = $this->request->post('project_id',0);
        $vacancy_id = $this->request->post('vacancy_id',0);
        $service_house_new_meter = new HouseNewMeterService();
        try{
            $data = $service_house_new_meter->getMeterRecordInfo(['project_id'=>$project_id,'layer_num'=>$vacancy_id],'last_ammeter','id DESC');
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 导出抄表记录
     * @author lijie
     * @date_time 2021/07/15
     * @return \json
     */
    public function printRecordList()
    {
        $village_id = $this->adminUser['village_id'];
        $charge_name = $this->request->post('charge_name');
        $room_id = $this->request->post('room_id',0);
        $date_time = $this->request->post('date_time',[]);
        $project_id = $this->request->post('project_id',0);
        $service_house_new_meter = new HouseNewMeterService();
        $where[] = ['m.village_id','=',$village_id];

        if($project_id){
            $where[] = ['m.project_id','=',$project_id];
        }elseif($charge_name){
            $where[] = ['m.charge_name','=',$charge_name];
        }
        if($charge_name)
            $where[] = ['m.charge_name','=',$charge_name];
        if(!empty($room_id) && is_array($room_id)){
            if (isset($room_id[3])){
                $where[]=['m.layer_num','=',$room_id[3]];
            }elseif (isset($room_id[2])){
                $where[]=['m.layer_id','=',$room_id[2]];
            }elseif (isset($room_id[1])){
                $where[]=['m.floor_id','=',$room_id[1]];
            } else{
                $where[]=['m.single_id','=',$room_id[0]];
            }
        }
        if($date_time)
            $where[] = ['m.add_time','between',[strtotime($date_time[0].' 00:00:00'),strtotime($date_time[1].' 23:59:59')]];
        try{
            $data = $service_house_new_meter->getMeterReadingRecord($where,'m.*,a.realname',0,15,'m.id DESC')->toArray();
            $file_name = '抄表记录'.'.xlsx';

            if (cfg('meter_reading_price')==1){
                $title = ['楼栋','单元','楼层','房间号', '业主名', '电话', '单价（元）', '倍率', '抄表时间', '起度', '止度','交易类型', '操作人', '备注'];
                $res = $service_house_new_meter->saveExcel_price($data,$title,$file_name);
            }else{
                $title = ['楼栋','单元','楼层','房间号', '业主名', '电话', '单价（元）', '倍率', '抄表时间', '起度', '止度', '操作人', '备注'];
                $res = $service_house_new_meter->saveExcel($data,$title,$file_name);
            }



        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$res);
    }

    //===============================移动端抄表================================
    public function getFrontMeterProject()
    {
        $room_id = $this->request->post('room_id', 0);
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $service_house_new_meter = new HouseNewMeterService();
        $service_house_village = new HouseVillageService();
        $service_house_village_single = new HouseVillageSingleService();
        try{
            $room_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id' => $room_id], 'usernum,name,phone,single_id,floor_id,layer_id,pigcms_id,village_id');
            $village_id = $room_info['village_id'];
            $room_address = $service_house_village->getSingleFloorRoom($room_info['single_id'],$room_info['floor_id'],$room_info['layer_id'],$room_info['pigcms_id'],$room_info['village_id']);
            $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'village_address,long,lat,village_name');
            $where[] = ['p.village_id','=',$village_id];
            $where[] = ['p.status','=',1];
            $where[] = ['c.charge_type','in',['water','electric','gas']];
            $data = $service_house_new_meter->getMeterProject($where,'p.name as project_name,c.charge_number_name as subject_name,charge_type,p.id as project_id,r.charge_name,r.unit_price,r.rate,r.id as rule_id',0,0,'p.id DESC');
            $next_room = $service_house_village_user_vacancy->getUserVacancyInfo([['pigcms_id','>',$room_id]],'room,single_id,pigcms_id');
            $single_info = $service_house_village_single->getSingleInfo(['id'=>$next_room['single_id']],'single_name');
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['list'] = $data;
        $res['room_info'] = ['name'=>$room_info['name'],'phone'=>$room_info['phone'],'room_address'=>$village_info['village_name'].$room_address];
        $res['village_info'] = $village_info;
        $res['next_room'] = ['next_room'=>$single_info['single_name'].'#'.$next_room['room'],'room_id'=>$next_room['pigcms_id']];
        return api_output(0,$res);
    }

    /**
     * 移动抄表录入
     * @author lijie
     * @date_time 2021/07/16
     * @return \json
     */
    public function frontMeterReadingAdd()
    {
        $uid = $this->_uid;
        $vacancy_id = $this->request->post('room_id', 0);
        $start_ammeter = $this->request->post('start_ammeter',0);
        $last_ammeter = $this->request->post('last_ammeter',0);
        $charge_name = $this->request->post('charge_name','');
        $unit_price = $this->request->post('unit_price',0,'intval');
        $charge_type = $this->request->post('charge_type','');
        $rule_id = $this->request->post('rule_id',0);
        $project_id = $this->request->post('project_id',0);
        $rate = $this->request->post('rate',1);
        $note = $this->request->post('note','');
        $service_house_village_user_vacancy = new HouseVillageUserVacancyService();
        $vacancy_info = $service_house_village_user_vacancy->getUserVacancyInfo(['pigcms_id'=>$vacancy_id],'single_id,floor_id,layer_id,village_id');
        $single_id = $vacancy_info['single_id'];
        $floor_id = $vacancy_info['floor_id'];
        $layer_id = $vacancy_info['layer_id'];
        $village_id = $vacancy_info['village_id'];
        if(!$single_id || !$floor_id || !$layer_id || !$vacancy_id || !$last_ammeter || !$rate || empty($charge_name) || empty($charge_type)){
            return api_output_error(1001,'缺少必传参数');
        }
        $service_house_new_charge_rule = new HouseNewChargeRuleService();
        $rule_info = $service_house_new_charge_rule->getCallInfo(['r.id'=>$rule_id],'n.charge_type,r.*,p.type');
        $rule_digit=-1;
        if(isset($rule_info['rule_digit']) && $rule_info['rule_digit']>-1 && $rule_info['rule_digit']<5){
            $rule_digit=$rule_info['rule_digit'];
        }
        $digit_type=1;
        $service_house_village = new HouseVillageService();
        $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$village_id],'property_id');
        $db_house_property_digit_service = new HousePropertyDigitService();
        $digit_info =$db_house_property_digit_service->get_one_digit(['property_id'=>$village_info['property_id']]);
        if(!empty($digit_info)){
            $digit_type=$digit_info['type']==2 ? 2:1;
            if($rule_digit<=-1 || $rule_digit>=5){
                $rule_digit=intval($digit_info['meter_digit']);
            }
        }
        $rule_digit=$rule_digit>-1 ? $rule_digit:2;
        $insertData=array();
        $insertData['village_id'] = $village_id;
        $insertData['single_id'] = $single_id;
        $insertData['floor_id'] = $floor_id;
        $insertData['layer_id'] = $layer_id;
        $insertData['layer_num'] = $vacancy_id;
        $insertData['charge_name'] = $charge_name;
        $insertData['unit_price'] = $unit_price;
        $insertData['start_ammeter'] = $start_ammeter;
        $insertData['last_ammeter'] = $last_ammeter;
        $insertData['rate'] = $rate;
        $insertData['note'] = $note;
        $insertData['cost_num'] = $last_ammeter-$start_ammeter;
        $cost_money = $insertData['cost_num']*$unit_price*$rate;
        $cost_money=formatNumber($cost_money, $rule_digit, $digit_type);
        $cost_money=formatNumber($cost_money, 2, 1);
        $insertData['cost_money']=$cost_money;
        $insertData['add_time'] = time();
        $insertData['project_id'] = $project_id;
        $insertData['role_id'] = $uid?$uid:0;
        $service_house_new_meter = new HouseNewMeterService();
        $service_house_village_user_bind = new HouseVillageUserBindService();
        $service_house_village = new HouseVillageService();
        $service_house_new_cashier = new HouseNewCashierService();
        try{
            $whereArr=['project_id'=>$project_id,'village_id'=>$village_id,'layer_num'=>$vacancy_id];
            $meter_reading=$service_house_new_meter->getMeterRecordInfo($whereArr,'*','id DESC');
            $id = $service_house_new_meter->addMeterReading($insertData);
            if($id){
                $user_info = $service_house_village_user_bind->getBindInfo([['vacancy_id','=',$vacancy_id],['status','=',1],['type','in',[0,3]]],'uid,name,phone,pigcms_id,village_id');
                $orderData=array();
                if($user_info){
                    $orderData['uid'] = $user_info['uid'];
                    $orderData['name'] = $user_info['name'];
                    $orderData['phone'] = $user_info['phone'];
                    $orderData['pigcms_id'] = $user_info['pigcms_id'];
                    $village_info = $service_house_village->getHouseVillageInfo(['village_id'=>$user_info['village_id']],'property_id');
                    $orderData['village_id'] = $village_id;
                    $orderData['property_id'] = $village_info['property_id'];
                }
                $orderData['order_type'] = $charge_type;
                $orderData['order_name'] = $charge_name;
                $orderData['room_id'] = $vacancy_id;
                $orderData['total_money'] = $insertData['cost_money'];
                $orderData['modify_money'] = $orderData['total_money'];
                $orderData['project_id'] = $project_id;
                $orderData['rule_id'] = $rule_id;
                $orderData['unit_price'] = $unit_price;
                $orderData['last_ammeter'] = $start_ammeter;
                $orderData['now_ammeter'] = $last_ammeter;
                $orderData['add_time'] = time();
                $orderData['meter_reading_id'] = $id;
                $service_start_time=time();
                if($meter_reading && !$meter_reading->isEmpty()){
                    $service_start_time=$meter_reading['add_time'];
                }
                $orderData['service_start_time']=$service_start_time;
                $service_end_time=time();
                $orderData['service_end_time']=$service_end_time;
                $res = $service_house_new_cashier->addOrder($orderData);
                if($res)
                    return api_output(0,[],'抄表成功');
                return api_output_error(1001,'服务异常');
            }else{
                return api_output_error(1001,'服务异常');
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
    }

    /**
     * 移动抄表抄表记录
     * @author lijie
     * @date_time 2021/07/10
     * @return \json
     */
    public function getFrontMeterReadingRecord()
    {
        $village_id = $this->request->post('village_id',0);
        $page = $this->request->post('page',1);
        $project_name = $this->request->post('project_name','');
        $date_time = $this->request->post('date_time',[]);
        $service_house_new_meter = new HouseNewMeterService();
        $where[] = ['m.village_id','=',$village_id];
        if($project_name)
            $where[] = ['p.name','=',$project_name];
        if($date_time)
            $where[] = ['m.add_time','between',[strtotime($date_time[0]),strtotime($date_time[1])]];
        try{
            $data = $service_house_new_meter->getMeterReadingRecord($where,'m.*,a.realname,p.name as project_name',$page,15,'m.id DESC');
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        $res['list'] = $data;
        return api_output(0,$res);
    }

    /**
     * 收费项目列表
     * @author lijie
     * @date_time 2021/07/16
     * @return \json
     */
    public function getMeterProjectList()
    {
        $village_id = $this->request->post('village_id',0);
        if(!$village_id)
            return api_output_error(1001,'缺少必传参数village_id');
        $service_house_new_meter = new HouseNewMeterService();
        $where[] = ['p.village_id','=',$village_id];
        $where[] = ['p.status','=',1];
        $where[] = ['c.charge_type','in',['water','electric','gas']];
        try{
            $data = $service_house_new_meter->getMeterProject($where,'p.name as project_name',0,0,'p.id DESC');
            $list[0]['project_name_show'] = '全部';
            $list[0]['project_name'] = '';
            if($data){
                foreach ($data as $k=>$v){
                    $list[$k+1]['project_name'] = $v['project_name'];
                    $list[$k+1]['project_name_show'] = $v['project_name'];
                }
            }
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$list);
    }

    /**
     * 导入抄表
     * @return \json
     */
    public function uploadFiles()
    {
        $file = $this->request->file('file');
        if(!$file){
            return api_output_error(1001,'请上传文件');
        }
        try {
            validate(['file' => [
                'fileSize' => 1024 * 1024 * 20,
                'fileExt' => 'xls,xlsx',
            ]])->check(['file' => $file]);

            $fileName = $file->getOriginalName();

            $file_arr = explode(('.'.$file->extension()),$fileName);
            if(count($file_arr)==2)
            {
//                $file_type = $file_arr[1];
                $file_type=$file->extension();
            }else{
                return api_output_error(1001,'请上传有效文件');
            }
            $upload_path=$this->request->get('upload_path','','trim');
            if(empty($upload_path)){
                $upload_path='meter/file';
            }
            $savename = \think\facade\Filesystem::disk('public_upload')->putFile( $upload_path,$file);
            if(strpos($savename,"\\") !== false){
                $savename = str_replace('\\','/',$savename);
            }
            $data['url'] = '/upload/'.$savename;
            $data['name'] = $fileName;
            $data['file_type'] = $file_type;
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0, $data, "成功");

    }

    /**
     * 提交抄表表格
     * @return \json
     */
    public function exportMeter()
    {
        $village_id = $this->adminUser['village_id'];
        $uid = $this->_uid;
        $service = new HouseNewMeterService();
        $file = $this->request->post('file');
        $charge_name = $this->request->post('charge_name','');
        if(empty($charge_name)){
            return api_output_error(1001,'缺少必传参数');
        }
        try {
            $savenum = $service->upload($file,$village_id,$uid,$charge_name);
            return api_output(0, $savenum, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }
    //设置每月多少号 抄表
    public function setMeterReadingDay(){
        $village_id = $this->adminUser['village_id'];
        $mday = $this->request->post('mday',0,'int');
        $project_id = $this->request->post('project_id',0,'int');
        $subject_id = $this->request->post('subject_id',0,'int');
        if($project_id<1){
            return api_output_error(1000,'项目参数错误！');
        }
        try {
            $service_house_new_meter = new HouseNewMeterService();
            $dataArr = array('mday' => $mday);
            $whereArr = array('id' => $project_id, 'village_id' => $village_id);
            $service_house_new_meter->updateNewChargeProject($whereArr, $dataArr);
            return api_output(0,[], '保存成功！');
        }catch (\Exception $e) {
                return api_output_error(1003, $e->getMessage());
            }
    }

    /**
     * 获取一条抄表记录
     * @return
     */
    public function getOneMeterReading()
    {
        $idd = $this->request->post('id',0,'int');
        $village_id = $this->adminUser['village_id'];
        if($idd<1){
            return api_output_error(1000,'修改记录参数错误！');
        }
        $service_house_new_meter = new HouseNewMeterService();
        try{
            $whereArr=array('id'=>$idd,'village_id'=>$village_id);
            $data = $service_house_new_meter->getOneMeterReading($whereArr);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }
}