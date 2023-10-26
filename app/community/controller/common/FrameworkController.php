<?php
/**
 * @author : liukezhu
 * @date : 2022/2/18
 */

namespace app\community\controller\common;
use app\community\controller\CommunityBaseController;
use app\community\model\service\PropertyFrameworkService;
use app\community\model\service\HousePropertyService;
use app\community\model\service\HouseVillageCheckauthSetService;
use app\community\model\service\HouseVillageService;
use think\App;

class FrameworkController  extends CommunityBaseController
{

    /**
     * @int $this->login_role
     *  8：系统登录物业
     *  6：系统登录小区
     *  3：物业总管理员
     *  4：物业普通管理员
     *  5: 小区物业管理人员 即工作人员
     * 12：物业后台普通管理员身份登录的小区超级管理员账号
     *  7：物业后台登录的小区超级管理员账号
     *  9：街道、社区
     *
     * 物业：3,4,8
     * 小区：5,6,7,12
     * 街道、社区：9
     */

    protected $PropertyFrameworkService;
    protected $propertyId = 0;
    protected $villageId = 0;
    protected $loginType=0;
    protected $menus;

    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->PropertyFrameworkService=new PropertyFrameworkService();
        $this->propertyId=isset($this->adminUser['property_id']) ? $this->adminUser['property_id'] : 0;
        $this->villageId=isset($this->adminUser['village_id']) ? $this->adminUser['village_id'] : 0;
        if(in_array($this->login_role,$this->propertyRole)){ //物业
            $this->loginType=1;
        }
        elseif (in_array($this->login_role,$this->villageRole)){ //小区
            $this->loginType=2;
        }
        elseif (in_array($this->login_role,$this->streetCommunity)){ //街道、社区
            $this->loginType=3;
        }
        $this->menus=(isset($this->adminUser['menus']) && !empty($this->adminUser['menus'])) ? (is_array($this->adminUser['menus']) ? $this->adminUser['menus'] : explode(',',$this->adminUser['menus']))  : [];
    }

    /**
     * 组织架构
     * @author: liukezhu
     * @date : 2022/2/18
     * @return \json
     */
    public function getTissueNav(){
        $request_xfrom = $this->request->param('request_xfrom', '','trim');
        try{
            $whererArr=array('property_id'=>$this->propertyId,'is_del'=>0,'type'=>99);
            $rets=$this->PropertyFrameworkService->getOnePropertyGroup($whererArr);
            $params = [];
            $housePropertyService=new HousePropertyService();
            $whererArr=array('id'=>$this->propertyId);
            $houseProperty=$housePropertyService->getFind($whererArr);
            if(!empty($houseProperty) && !$houseProperty->isEmpty()){
                $params['property_name'] = $houseProperty['property_name'];
            }
            if(empty($rets)){
                //添加一条数据
                $addData=array('fid'=>0,'name'=>'','type'=>99,'property_id'=>$this->propertyId,'status'=>1);
                if(!empty($houseProperty) && !$houseProperty->isEmpty()){
                    $addData['name'] = $houseProperty['property_name'];
                }
                $propertyGroup_id=$this->PropertyFrameworkService->addOnePropertyGroup($addData);
            }else{
                $propertyGroup_id=$rets['id'];
            }
            $houseVillage=array();
            if($this->villageId>0){
                $houseVillageService=new HouseVillageService();
                $houseVillageObj=$houseVillageService->getHouseVillageInfo(['village_id'=>$this->villageId],'village_id,village_name,write_iccard');
                if($houseVillageObj && !$houseVillageObj->isEmpty()){
                    $houseVillage=$houseVillageObj->toArray();
                } 
            }
            if($this->loginType==2){
                $whererArr=array('property_id'=>$this->propertyId,'is_del'=>0,'type'=>0,'village_id'=>$this->villageId);
                $villagerets=$this->PropertyFrameworkService->getOnePropertyGroup($whererArr);
                if(empty($villagerets)){
                    $addData=array('name'=>$houseVillage['village_name'],'type'=>0,'property_id'=>$this->propertyId,'status'=>1,'village_id'=>$this->villageId);
                    $group_id=$this->PropertyFrameworkService->addOnePropertyGroup($addData);
                }
            }
            $res=$this->PropertyFrameworkService->businessNav($this->loginType,$this->propertyId,$this->villageId,$this->menus, [],$params);
            if($request_xfrom=='organization_edit' && (empty($res['menu_list']) || !isset($res['menu_list']['0'])||empty($res['menu_list']['0']) || empty($res['menu_list']['0']['children'])) ){
                return api_output(1001,[],'您还未创建部门，请先去创建部门数据！');
            }
            $res['role_type']=$this->loginType;
            $res['write_iccard']=0;
            if(!empty($houseVillage)){
                $res['write_iccard']= intval($houseVillage['write_iccard']);
            }
            $res['write_iccard_exe_url']=cfg('site_url').'/tpl/House/default/static/file/RFIDReaderCloudForWebClient.exe';
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 获取组织架构下面的人员或账号
     * @author: liukezhu
     * @date : 2022/1/29
     * @return \json
     */
    public function getTissueUser(){
        $group_id = $this->request->param('group_id',0,'int');
        $keywords = $this->request->param('keywords','','trim');
        $page = $this->request->param('page',0,'int');
        try{
            $param=[
                'role_type'=>$this->loginType,
                'property_id'=>$this->propertyId,
                'village_id'=>$this->villageId,
                'group_id'=>$group_id,
                'keywords'=>$keywords,
                'page'=>$page,
                'menus'=>$this->menus
            ];
            $res=$this->PropertyFrameworkService->businessTissueUser($param);
            $res['role_type']=$this->loginType;
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 获取类型参数
     * @author: liukezhu
     * @date : 2022/2/18
     * @return \json
     */
    public function getGroupParam(){
        $group_id = $this->request->param('group_id',0,'int');
        $type = $this->request->param('type',0,'int');
        if (empty($group_id)){
            return api_output(1001,[],'缺少必要参数！');
        }
        try{
            $res=$this->PropertyFrameworkService->businessGroupParam($this->loginType,$this->propertyId,$group_id,$type);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 获取物业下小区
     * @author: liukezhu
     * @date : 2022/2/21
     * @return \json
     */
    public function getPropertyVillage(){
        $type = $this->request->param('type',1,'int');
        if($type != 0){
            return api_output(0,['status'=>0,'data'=>[]]);
        }
        try{
            $rel=$this->PropertyFrameworkService->dbPropertyUnboundVillage($this->propertyId);
            $res=[
                'status'=>1,
                'data'=>$rel
            ];
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 添加子组织
     * @author: liukezhu
     * @date : 2022/2/21
     * @return \json
     */
    public function organizationAdd(){
        $sort = $this->request->param('sort','0','trim'); //排序
        $fid = $this->request->param('fid',0,'int'); //上级id
        $group_type = $this->request->param('group_type',0,'int'); //类型
        $department_type = $this->request->param('department_type',0,'int');//部门类型
        $name = $this->request->param('name','','trim'); //部门名称
        $village_id = $this->request->param('village_id',0,'int');//小区
        $qy_id = $this->request->param('qy_id','','trim');//小区
        if (!in_array($group_type,[0,1,2])){
            return api_output(1001,[],'类型不存在！');
        }
        if($this->loginType == 2){
            $village_id = $this->villageId;
        }
        try{
            $param=[
                'property_id'     => $this->propertyId,
                'fid'             => $fid,
                'sort'            => $sort,
                'group_type'      => $group_type,
                'department_type' => $department_type,
                'name'            => $name,
                'village_id'      => $village_id,
                'qy_id'           => $qy_id
            ];
            $res=$this->PropertyFrameworkService->businessOrganizationAdd($param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 返回子组织数据
     * @author: liukezhu
     * @date : 2022/2/21
     * @return \json
     */
    public function organizationQuery(){
        $id = $this->request->param('id',0,'int');
        if (!$id){
            return api_output(1001,[],'缺少必要参数！');
        }
        try{
            $param=[
                'property_id' => $this->propertyId,
                'id'          => $id
            ];
            $res=$this->PropertyFrameworkService->businessOrganizationQuery($param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 编辑提交子组织
     * @author: liukezhu
     * @date : 2022/2/21
     * @return \json
     */
    public function organizationSub(){
        $sort = $this->request->param('sort','0','trim'); //排序
        $id = $this->request->param('id',0,'int'); //id
        $fid = $this->request->param('fid',0,'int'); //上级id
        $group_type = $this->request->param('group_type',0,'int'); //类型
        $department_type = $this->request->param('department_type',0,'int');//部门类型
        $name = $this->request->param('name','','trim'); //部门名称
        $village_id = $this->request->param('village_id',0,'int');//小区
        $qy_id = $this->request->param('qy_id', '','trim');// 企微用户账号
        if (!$id){
            return api_output(1001,[],'缺少必要参数！');
        }
        if (!in_array($group_type,[0,1,2])){
            return api_output(1001,[],'类型不存在！');
        }
        if($this->loginType == 2){
            $village_id = $this->villageId;
        }
        try{
            $param=[
                'property_id'     => $this->propertyId,
                'id'              => $id,
                'fid'             => $fid,
                'sort'            => $sort,
                'group_type'      => $group_type,
                'department_type' => $department_type,
                'name'            => $name,
                'village_id'      => $village_id,
                'qy_id'           => $qy_id
            ];
            $res=$this->PropertyFrameworkService->businessOrganizationSub($param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 删除组织
     * @author: liukezhu
     * @date : 2022/2/22
     * @return \json
     */
    public function organizationDel(){
        $id = $this->request->param('id',0,'int');
        if (!$id){
            return api_output(1001,[],'缺少必要参数！');
        }
        try{
            $param=[
                'property_id' => $this->propertyId,
                'id'          => $id,
                'login_role'   => $this->login_role,
                'role_type'   => $this->loginType,
                'user_admin'  => $this->adminUser,
            ];
            $res=$this->PropertyFrameworkService->businessOrganizationDel($param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 添加工作人员
     * @author: liukezhu
     * @date : 2022/2/23
     * @return \json
     */
    public function workerAdd(){
        $group_id = $this->request->param('group_id',0,'int');//部门id
        $job_number = $this->request->param('job_number','','trim'); //编号
        $work_name = $this->request->param('work_name','','trim'); //姓名
        $gender = $this->request->param('gender',1,'int'); //性别
        $phone = $this->request->param('phone','','trim'); //手机号
        $id_card = $this->request->param('id_card','','trim'); //身份证号
        $ic_card = $this->request->param('ic_card','','trim'); //IC卡
        $job_create_time = $this->request->param('job_create_time','','trim'); //入职时间
        $open_door = $this->request->param('open_door',1,'int'); //是否可以开门
        $remarks = $this->request->param('remarks','','trim'); //备注
        $account = $this->request->param('account','','trim'); //账号
        $password = $this->request->param('password','','trim'); //密码
        $is_worker_admin = $this->request->param('is_worker_admin',0,'int'); //1管理员身份
        if (!$group_id){
            return api_output(1001,[],'缺少必要参数！');
        }
        if(empty($work_name)){
            return api_output(1001,[],'请输入姓名！');
        }
        if(empty($phone)){
            return api_output(1001,[],'请输入手机号！');
        }
        if(empty($password)){
            return api_output(1001,[],'请输入密码！');
        }
        try{
            $param=[
                'property_id'=>$this->propertyId,
                'village_id'=>$this->villageId,
                'department_id' => $group_id,
                'job_number' => $job_number,
                'name' => $work_name,
                'gender' => $gender,
                'phone' => $phone,
                'id_card' => $id_card,
                'ic_card' => $ic_card,
                'job_create_time' => empty($job_create_time) ? '' : strtotime($job_create_time),
                'open_door' => $open_door,
                'note' => $remarks,
                'account' => $account,
                'password' => $password,
                'is_worker_admin'=>$is_worker_admin,
            ];
            $res=$this->PropertyFrameworkService->businessWorkerAdd($this->loginType,$param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 工作人员数据查询
     * @author: liukezhu
     * @date : 2022/2/24
     * @return \json
     */
    public function workerQuery(){
        $wid = $this->request->param('wid',0,'int');
        $source_type = $this->request->param('source_type',1,'int'); //1:查询 2：编辑获取
        $group_id = $this->request->param('group_id',0,'int');//部门id
        if (!$wid){
            return api_output(1001,[],'缺少必要参数！');
        }
        if (!$group_id){
            return api_output(1001,[],'缺少部门ID！');
        }
        try{
            $param=[
                'village_id'  => $this->villageId,
                'property_id' => $this->propertyId,
                'wid'         => $wid,
                'login_role'  => $this->login_role,
                'login_type'  => $this->loginType,
                'group_id'    => $group_id,
                'source_type' => $source_type
            ];
            $res=$this->PropertyFrameworkService->businessWorkerQuery($param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 编辑工作人员
     * @author: liukezhu
     * @date : 2022/2/23
     * @return \json
     */
    public function workerSub(){
        $wid = $this->request->param('wid',0,'int');
        $group_id = $this->request->param('group_id',0,'int');//部门id
        $job_number = $this->request->param('job_number','','trim'); //编号
        $work_name = $this->request->param('work_name','','trim'); //姓名
        $gender = $this->request->param('gender',1,'int'); //性别
        $phone = $this->request->param('phone','','trim'); //手机号
        $id_card = $this->request->param('id_card','','trim'); //身份证号
        $ic_card = $this->request->param('ic_card','','trim'); //IC卡
        $job_create_time = $this->request->param('job_create_time','','trim'); //入职时间
        $open_door = $this->request->param('open_door',1,'int'); //是否可以开门
        $remarks = $this->request->param('remarks','','trim'); //备注
        $account = $this->request->param('account','','trim'); //账号
        $password = $this->request->param('password','','trim'); //密码
        $is_worker_admin = $this->request->param('is_worker_admin',0,'int'); //1管理员身份
        $department_id = $this->request->param('department_id',0,'int');  //部门id
        $qy_id = $this->request->param('qy_id','','trim');  //部门id
        if (!$wid){
            return api_output(1001,[],'缺少必要参数！');
        }
        /*
        if (!$group_id){
            return api_output(1001,[],'缺少部门ID！');
        }
        */
        if(empty($work_name)){
            return api_output(1001,[],'请输入姓名！');
        }
        if(empty($phone)){
            return api_output(1001,[],'请输入手机号！');
        }
        try{
            $param=[
                'property_id'=>$this->propertyId,
                'village_id'=>$this->villageId,
                'job_number' => $job_number,
                'name' => $work_name,
                'gender' => $gender,
                'phone' => $phone,
                'id_card' => $id_card,
                'ic_card' => $ic_card,
                'job_create_time' => empty($job_create_time) ? '' : strtotime($job_create_time),
                'open_door' => $open_door,
                'note' => $remarks,
                'account' => $account,
                'password' => $password,
                'is_worker_admin'=>$is_worker_admin,
                '_login'=>[
                    'login_role'   => $this->login_role,
                    'user_admin'  => $this->adminUser
                ],
                'qy_id' => $qy_id
            ];
            if($this->request->has('department_id')){
                $param['department_id']=$department_id;
            }
            $res=$this->PropertyFrameworkService->businessWorkerSub($this->loginType,$wid,$param);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }

    /**
     * 删除工作人员
     * @author: liukezhu
     * @date : 2022/2/24
     * @return \json
     */
    public function workerDel(){
        $wid = $this->request->param('wid',[]);
        $group_id = $this->request->param('group_id',0,'int');//分组id
        $department_id = $this->request->param('department_id',0,'int');//部门id

        if(empty($wid) || !is_array($wid)){
            return api_output(1001,[],'wid字段请以数组或对象形式传递！');
        }
        try{

            $houseVillageCheckauthSetService =new HouseVillageCheckauthSetService();
            $orderRefundCheckWhere=array('village_id'=>$this->adminUser['village_id'],'xtype'=>'order_refund_check');
            $userAuthLevel=$houseVillageCheckauthSetService->getOneCheckauthSet($orderRefundCheckWhere);
            if(!empty($userAuthLevel) && !empty($userAuthLevel['check_level'])){
                $check_wid=0;
                foreach ($userAuthLevel['check_level'] as $clv){
                    if($clv['level_wid']>0 && in_array($clv['level_wid'],$wid)){
                        $check_wid=$clv['level_wid'];
                        break;
                    }
                }
                if($check_wid>0){
                    return api_output(1001,[],'删除的人员中有绑定了订单退款（作废）审核设置人员，请先去解绑，再删除！');
                }
            }
            $this->PropertyFrameworkService->checkWorkDel([
                'property_id' => $this->propertyId,
                'login_role'   => $this->login_role,
                'role_type'   => $this->loginType,
                'user_admin'  => $this->adminUser
            ],$wid,2);
            $where=array();
            $where[] = ['wid','in',$wid];
            //$where[] = ['department_id','=',$group_id];
            $where[] = ['is_del','=',0];
            if($department_id>0){
                $where[] = ['department_id','=',$department_id];
            }
            $res=$this->PropertyFrameworkService->businessWorkerDel($this->propertyId,$where,1);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }


    /**
     * 同步信息至企业微信
     * @author: liukezhu
     * @date : 2022/2/25
     * @return \json
     */
    public function organizationSynQw(){
        try{
            $res=$this->PropertyFrameworkService->businessSynQw($this->propertyId);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);
    }




}