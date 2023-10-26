<?php
/**
 * Created by PhpStorm.
 * Author: zhubaodi
 * Date Time: 2021/8/12 15:26
 */
namespace app\community\controller\village_api;

use app\common\model\service\CacheSqlService;
use app\community\controller\CommunityBaseController;
use app\community\controller\manage_api\BaseController;
use app\community\model\db\HouseWorker;
use app\community\model\service\HouseNewRepairService;
use app\community\model\service\HouseVillageService;
use app\community\model\service\HouseVillageUserBindService;
use app\community\model\service\HouseVillageUserVacancyService;
use app\community\model\service\RepairCateService;
use app\community\model\service\HouseProgrammeService;

class RepairCateController extends CommunityBaseController
{

    /**
     * 查询类目列表
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getSubjectList(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['page'] = $this->request->param('page', 0, 'intval');
        $data['limit'] = 20;
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getSubjectList($data);
            $res['total_limit'] = $data['limit'];
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }



    /**
     * 查询类目详情
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getSubjectInfo(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id', 0, 'intval');
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getSubjectInfo($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }

    /**
     * 添加类目
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function addSubject(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['subject_name'] = $this->request->param('name', '', 'trim');
        $data['color'] = $this->request->param('color', '', 'trim');
        $data['status'] = $this->request->param('status', 0, 'intval');
        if (empty($data['subject_name'])) {
            return api_output_error(1001, '类目名称不能为空');
        }
        if (empty($data['color'])) {
            return api_output_error(1001, '背景色不能为空');
        }
        if (empty($data['status'])) {
            return api_output_error(1001, '状态不能为空');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $id = $serviceRepairCate->addSubject($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($id){
            return api_output(0,['id' => $id],'添加成功');
        }else{
            return api_output(1003,[],'添加失败！');
        }

    }

    /**
     * 编辑类目
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function editSubject(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['subject_name'] = $this->request->param('name', '', 'trim');
        $data['color'] = $this->request->param('color', '', 'trim');
        $data['status'] = $this->request->param('status', 0, 'intval');
        $data['id'] = $this->request->param('id', 0, 'intval');
        if (empty($data['subject_name'])) {
            return api_output_error(1001, '类目名称不能为空');
        }
        if (empty($data['color'])) {
            return api_output_error(1001, '背景色不能为空');
        }
        if (empty($data['status'])) {
            return api_output_error(1001, '状态不能为空');
        }
        if (empty($data['id'])) {
            return api_output_error(1001, 'id不能为空');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->editSubject($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res){
            return api_output(0,['res' => $res],'编辑成功');
        }else{
            return api_output(1003,[],'编辑失败！');
        }

    }



    /**
     * 查询类别列表
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getCategoryList(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['parent_id'] = $this->request->param('subject_id', 0, 'intval');
        $data['page'] = $this->request->param('page', 0, 'intval');
        $data['limit'] = 20;
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getCategoryList($data);
            $res['total_limit'] = $data['limit'];
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }



    /**
     * 查询类别详情
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getCategoryInfo(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id', 0, 'intval');
        if (empty($data['id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getSubjectInfo($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }

    /**
     * 添加类别
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function addCategory(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['subject_name'] = $this->request->param('name', '', 'trim');
        $data['status'] = $this->request->param('status', 0, 'intval');
        $data['parent_id'] = $this->request->param('subject_id', '', 'intval');
        if (empty($data['subject_name'])) {
            return api_output_error(1001, '类别名称不能为空');
        }
        if (empty($data['status'])) {
            return api_output_error(1001, '状态不能为空');
        }
        if (empty($data['parent_id'])) {
            return api_output_error(1001, '父级id不能为空');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $id = $serviceRepairCate->addCategory($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($id){
            return api_output(0,['id' => $id],'添加成功');
        }else{
            return api_output(1003,[],'添加失败！');
        }


    }

    /**
     * 编辑类别
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function editCategory(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['subject_name'] = $this->request->param('name', '', 'trim');
        $data['parent_id'] = $this->request->param('subject_id', '', 'intval');
        $data['status'] = $this->request->param('status', 0, 'intval');
        $data['id'] = $this->request->param('id', 0, 'intval');
        if (empty($data['subject_name'])) {
            return api_output_error(1001, '类别名称不能为空');
        }
        if (empty($data['status'])) {
            return api_output_error(1001, '状态不能为空');
        }
        if (empty($data['parent_id'])) {
            return api_output_error(1001, '父级id不能为空');
        }
        if (empty($data['id'])) {
            return api_output_error(1001, 'id不能为空');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->editCategory($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res){
            return api_output(0,['res' => $res],'编辑成功');
        }else{
            return api_output(1003,[],'编辑失败！');
        }
    }


    /**
     * 删除类别
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function delCategory(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id', 0, 'intval');
        if (empty($data['id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->delCategory($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res){
            return api_output(0,['res' => $res],'删除成功');
        }else{
            return api_output(1003,[],'删除失败！');
        }

    }





    //============================= todo 工单优化

    //todo 查询分类列表
    public function getCateList(){
        $parent_id = $this->request->param('parent_id', 0, 'intval');
        $data['page'] = $this->request->param('page', 0, 'intval');
        $data['limit'] = 10;
        $where[] = ['village_id','=',$this->adminUser['village_id']];
        $where[] = ['parent_id','=',$parent_id];
        $where[] = ['status','in',[1,2]];
        $serviceRepairCate = new RepairCateService();
        try{
            $serviceRepairCate->checkRepairCate($this->adminUser['property_id'],$this->adminUser['village_id']);
            $res = $serviceRepairCate->getCateList($where,$data);
            $res['total_limit'] = $data['limit'];
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }

    //todo 一级分类添加
    public function newRepairCateAdd(){
        $name = $this->request->param('name', '', 'trim');
        $color = $this->request->param('color', '', 'trim');
        $status = $this->request->param('status', 1, 'intval');
        $parent_id = $this->request->param('parent_id', 0, 'intval');
        $group_id_all = $this->request->param('group_id_all', []);
        if(empty($name)){
            return api_output_error(1001, '请输入类目名称');
        }
        if(empty($color)){
            return api_output_error(1001, '请选择背景色');
        }
        $data=[
            'cate_name'=>$name,
            'parent_id'=>$parent_id,
            'status'=>$status,
            'village_id'=>$this->adminUser['village_id'],
            'property_id'=>$this->adminUser['property_id'],
            'color'=>$color
        ];
        $serviceRepairCate = new RepairCateService();
        try{
            $serviceRepairCate->checkRepairCateOnly($this->adminUser['village_id'],$name);
            $id = $serviceRepairCate->addRepairCate($data);
            $serviceRepairCate->addCateGroup(1,$this->adminUser['village_id'],$id,$group_id_all);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($id){
            (new CacheSqlService())->clearCache();
            return api_output(0,['res' => $id],'添加成功');
        }else{
            return api_output(1003,[],'添加失败！');
        }
    }

    //todo 一级分类编辑
    public function newRepairCateEdit(){
        $serviceRepairCate = new RepairCateService();
        $type = $this->request->param('type', 0, 'intval');
        $id = $this->request->param('id', 0, 'intval');
        $name = $this->request->param('name', '', 'trim');
        $color = $this->request->param('color', '', 'trim');
        $status = $this->request->param('status', 1, 'intval');
        $group_id_all = $this->request->param('group_id_all', []);
        $where[] = ['village_id','=',$this->adminUser['village_id']];
        $where[] = ['id','=',$id];
        $where[] = ["status",'<>',4];
        $cate = $serviceRepairCate->queryRepairCate($where,'id,cate_name,status,color');
        if(!$cate){
            return api_output_error(1001, '数据不存在');
        }
        if($type == 1){
            $cate['group_id_all']=$serviceRepairCate->getCateGroup($this->adminUser['village_id'],$id);
            return api_output(0,$cate);
        }
        else{
            if(empty($name)){
                return api_output_error(1001, '请输入类目名称');
            }
            if(empty($color)){
                return api_output_error(1001, '请选择背景色');
            }
            $data=[
                'cate_name'=>$name,
                'status'=>$status,
                'color'=>$color
            ];
            $where=[];
            $where[] = ['id','=',$id];
            try{
                $serviceRepairCate->checkRepairCateOnly($this->adminUser['village_id'],$name,$id);
                $serviceRepairCate->addCateGroup(2,$this->adminUser['village_id'],$id,$group_id_all);
                $id = $serviceRepairCate->editRepairCate($where,$data);
                return api_output(0,['res' => $id],'编辑成功');
            }catch (\Exception $e){
                return api_output_error(-1, $e->getMessage());
            }
        }
    }


    /**
     * 查询分类详情
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getCateInfo(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id', 0, 'intval');
        if (empty($data['id']) ) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getCateInfo($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }


    /**
     * 添加分类
     * @author:zhubaodi
     * @date_time: 2021/8/16 10:48
     */
    public function addCate(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['cate_name'] = $this->request->param('name', 0, 'trim');
        $data['parent_id'] = $this->request->param('parent_id', 0, 'intval');
        $data['sort'] = $this->request->param('sort', 0, 'intval');
        $data['status'] = $this->request->param('status', 0, 'intval');
        $data['type'] = $this->request->param('type', 0, 'intval');
        $data['timely_time'] = $this->request->param('timely_time', '');
        if (empty($data['cate_name'])) {
            return api_output_error(1001, '分类名称不能为空');
        }
        if (empty($data['status'])) {
            return api_output_error(1001, '状态不能为空');
        }
        if ($data['sort']<0){
            return api_output_error(1001, '排序值不能小于0');
        }
        if ($data['type']==1){
            $data['uid']=$this->request->param('uid', 0, 'intval');
        }
        if ($data['type']==2){
            $data['director_id']=$this->request->param('director_id', 0, 'trim');
            $data['scheduling']=$this->request->param('scheduling', 0, 'trim');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $id = $serviceRepairCate->addCate($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($id){
            return api_output(0,['res' => $id],'添加成功');
        }else{
            return api_output(1003,[],'添加失败！');
        }
    }

    /**
     * 修改分类
     * @author:zhubaodi
     * @date_time: 2021/8/16 10:48
     */
    public function editCate(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['cate_name'] = $this->request->param('name', 0, 'trim');
        $data['id'] = $this->request->param('id', 0, 'intval');
        $data['parent_id'] = $this->request->param('parent_id', 0, 'intval');
        $data['sort'] = $this->request->param('sort', 0, 'intval');
        $data['status'] = $this->request->param('status', 0, 'intval');
        $data['type'] = $this->request->param('type', 0, 'intval');
        $data['timely_time'] = $this->request->param('timely_time', '');
        if (empty($data['cate_name'])) {
            return api_output_error(1001, '分类名称不能为空');
        }
        if (empty($data['status'])) {
            return api_output_error(1001, '状态不能为空');
        }
        if (empty($data['cate_name'])||empty($data['status'])||empty($data['type'])||empty($data['id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        if ($data['sort']<0){
            return api_output_error(1001, '排序值不能小于0');
        }
        if ($data['type']==1){
            $data['uid']=$this->request->param('uid', 0, 'intval');
        }
        if ($data['type']==2){
            $data['director_id']=$this->request->param('director_id');
            $data['scheduling']=$this->request->param('scheduling');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $id = $serviceRepairCate->editCate($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($id){
            return api_output(0,['res' => $id],'编辑成功');
        }else{
            return api_output(1003,[],'编辑 失败！');
        }
    }


    /**
     * 删除分类
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function delCate(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id', 0, 'intval');
        if (empty($data['id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->delCate($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res){
            return api_output(0,['res' => $res],'删除成功');
        }else{
            return api_output(1003,[],'删除失败！');
        }

    }


    /**
     * 查询负责人列表
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getDirectorList(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['cate_id'] = $this->request->param('cate_id', 0, 'intval');
        if (empty($data['cate_id']) ) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getDirectorList($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }

    /**
     * 根据id查询负责人列表
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getDirectorLists(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id');
        if (empty($data['id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getDirectorLists($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }

    /**
     * 查询指定日期的负责人列表
     * @author:zhubaodi
     * @date_time: 2021/9/25 13:47
     */
    public function getScheduling(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['cate_id'] = $this->request->param('cate_id', '', 'intval');
        $data['date_type'] = $this->request->param('key', '', 'intval');
        $data['id'] = $this->request->param('director_id');
       /* if (empty($data['cate_id'])) {
            return api_output_error(1001, '分类id不能为空');
        }*/
        if (empty($data['date_type'])) {
            return api_output_error(1001, '日期类型不能为空');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getScheduling($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }

    /**
     * 查询负责人详情
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getDirectorInfo(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['cate_id'] = $this->request->param('cate_id', 0, 'intval');
        $data['date_type'] = $this->request->param('date_type', 0, 'intval');
        if (empty($data['cate_id'])||empty( $data['date_type']) ) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getDirectorInfo($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }


    /**
     * 添加负责人纪录
     * @author:zhubaodi
     * @date_time: 2021/8/16 10:48
     */
    public function addDirector(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['date_type'] = $this->request->param('date_type', '', 'trim');
        $data['item'] = $this->request->param('item', '', 'trim');
        $data['defult'] = $this->request->param('defult', '', 'trim');
        $allitem=array();
        if ((!isset($data['defult']['id']) || ($data['defult']['id']<1)) && empty($data['defult']['uid'])){
           // return api_output_error(1001, '24小时负责人不能为空');
        }else{
            $allitem[]=$data['defult'];
            //$data['item'][]= $data['defult'];
        }
        if (empty($data['item'])||empty($data['date_type'])) {
            //return api_output_error(1001, '必填参数缺失');
        }
        if(!empty($data['item']) && is_array($data['item'])){
            foreach ($data['item'] as $item){
                $allitem[]=$item;
            }
        }
        $data['item']=$allitem;
        // print_r($data);exit;
        $serviceRepairCate = new RepairCateService();
        try{
            $id = $serviceRepairCate->addDirector($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,['res' => $id],'操作成功');
        /*
        if ($id){
            return api_output(0,['res' => $id],'添加成功');
        }else{
            return api_output(1003,[],'添加失败！');
        }*/
    }

    /**
     * 修改负责人纪录
     * @author:zhubaodi
     * @date_time: 2021/8/16 10:48
     */
    public function editDirector(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['cate_name'] = $this->request->param('name', 0, 'trim');
        $data['id'] = $this->request->param('id', 0, 'intval');
        $data['parent_id'] = $this->request->param('parent_id', 0, 'intval');
        $data['subject_id'] = $this->request->param('subject_id', 0, 'intval');
        $data['sort'] = $this->request->param('sort', 0, 'intval');
        $data['status'] = $this->request->param('status', 0, 'intval');
        $data['type'] = $this->request->param('type', 0, 'intval');
        if (empty($data['cate_name'])||empty($data['subject_id'])||empty($data['sort'])||empty($data['status'])||empty($data['type'])||empty($data['id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        if ($data['type']==1){
            $data['uid']=$this->request->param('uid', 0, 'intval');
        }
        if ($data['type']==2){
            $data['director_id']=$this->request->param('director_id', 0, 'trim');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $id = $serviceRepairCate->editCate($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($id){
            return api_output(0,['res' => $id],'编辑成功');
        }else{
            return api_output(1003,[],'编辑 失败！');
        }
    }



    /**
     * 查询自定义字段列表
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getCateCustomList(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['cate_id'] = $this->request->param('cate_id', 0, 'intval');
        $data['page'] = $this->request->param('page', 0, 'intval');
        $data['limit'] = 20;
        if (empty($data['cate_id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getCateCustomList($data);
            $res['total_limit'] = $data['limit'];
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }



    /**
     * 查询自定义字段详情
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function getCateCustomInfo(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id', 0, 'intval');
        $data['cate_id'] = $this->request->param('cate_id', 0, 'intval');
        if (empty($data['id']) ) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getCateCustomInfo($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }


    /**
     * 添加自定义字段
     * @author:zhubaodi
     * @date_time: 2021/8/16 10:48
     */
    public function addCateCustom(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['name'] = $this->request->param('name', 0, 'trim');
        $data['cate_id'] = $this->request->param('cate_id', 0, 'intval');
        $data['sort'] = $this->request->param('sort', 0, 'intval');
        $data['status'] = $this->request->param('status', 0, 'intval');
        $data['id'] = $this->request->param('id', 0, 'intval');
        if (empty($data['name'])||empty($data['cate_id'])||empty($data['status'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        if ($data['sort']<0){
            return api_output_error(1001, '排序值不能小于0');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $id = $serviceRepairCate->addCateCustom($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($id){
            return api_output(0,['res' => $id],'添加成功');
        }else{
            return api_output(1003,[],'添加失败！');
        }
    }



    /**
     * 删除自定义字段
     * @author:zhubaodi
     * @date_time: 2021/8/12 18:40
     */
    public function delCateCustom(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['id'] = $this->request->param('id', 0, 'intval');
        $data['cate_id'] = $this->request->param('cate_id', 0, 'intval');
        if (empty($data['id'])) {
            return api_output_error(1001, '必填参数缺失');
        }
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->delCateCustom($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res){
            return api_output(0,['res' => $res],'删除成功');
        }else{
            return api_output(1003,[],'删除失败！');
        }

    }

    public function getDirectortree(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_name'] = $this->adminUser['property_name'];
        $data['property_id']=$this->adminUser['property_id'];
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getDirectortree($this->adminUser);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res){
            return api_output(0,['res' => $res]);
        }else{
            return api_output(1003,[],'暂无数据！');
        }
    }

    /**
     * 配置类别的收费设置
     * @author:zhubaodi
     * @date_time: 2022/3/28 11:14
     */
    public function setRepairCharge(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
        $data['charge_type'] = $this->request->param('charge_type', 0, 'intval');
        $data['subject_id'] = $this->request->param('subject_id', '', 'trim');
        /*if (empty($data['subject_id'])) {
            return api_output_error(1001, '类别名称不能为空');
        }*/
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->setRepairCharge($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res['code']){
            return api_output(0,['res' => $res],'设置成功');
        }else{
            return api_output(1003,[],$res['msg']);
        }

    }

    /**
     * 查询类别的收费设置
     * @author:zhubaodi
     * @date_time: 2022/3/28 11:14
     */
    public function getRepairCharge(){
        $data['village_id'] = $this->adminUser['village_id'];
        $data['property_id']=$this->adminUser['property_id'];
      //  $data['village_id']=50;
        $serviceRepairCate = new RepairCateService();
        try{
            $res = $serviceRepairCate->getRepairCharge($data);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        if ($res){
            return api_output(0, $res,'设置成功');
        }else{
            return api_output(1003,[],'设置失败！');
        }
    }


    /**
     * Notes: 提交工单
     * @return \json
     * @author: wanzy
     * @date_time: 2021/8/17 10:27
     */
    public function repairOrderAdd() {
        $village_id = $this->adminUser['village_id'];
        if(!$village_id) {
            return api_output_error(1001,'必传参数缺失');
        }
        $cat_fid = $this->request->post('cat_fid',0,'intval');
        $cat_id = $this->request->post('cat_id',0,'intval');
        if(!$cat_fid) {
            return api_output_error(1001,'请选择工单类目');
        }
        if(!$cat_id) {
            return api_output_error(1001,'请选择工单分类');
        }
        $address_type = $this->request->post('address_type',0);

        $address_id = $this->request->post('address_id',0);
        if($address_type){
            if(!in_array($address_type,['public', 'room'])) {
                return api_output_error(1001,'请选择对应位置');
            }
            if(!$address_id) {
                return api_output_error(1001,'请选择对应位置');
            }
        }
        $label_txt = $this->request->post('label_txt');
        $order_imgs = $this->request->post('order_imgs');
        $order_content = $this->request->post('order_content');
        $go_time = $this->request->post('go_time',0);
        $order_content = htmlspecialchars(trim($order_content));
        if (empty($order_imgs) && !$order_content && empty($label_txt)) {
            return api_output_error(1001,'缺少必传参数');
        }

        $repair_cate_service = new RepairCateService();
        $worker_id = $this->_uid;
        $login_role = $this->login_role;
        $data = [
            'village_id' => $village_id,
            'category_id' => 0,
            'type_id' => 0,
            'cat_fid' => $cat_fid?$cat_fid:0,
            'cat_id' => $cat_id,
            'address_type' => $address_type,
            'address_id' => $address_id,
            'label_txt' => $label_txt?$label_txt:'',
            'order_imgs' => $order_imgs?$order_imgs:'',
            'order_content' => $order_content?$order_content:'',
            'worker_id' => $worker_id,
            'login_role' => $login_role,
            'event_status' => 10,
            'go_time' => $go_time,
        ];
        try{
            $info = $repair_cate_service->addWorksOrder($data);
            $arr = [];
            $arr['info'] = $info;
            return api_output(0, $arr);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
    }

    //todo 校验新版工单及时率
    public function checkIsTimely(){
        $village_id = $this->adminUser['village_id'];
        try{
            $rr=(new HouseVillageService())->checkVillageField($village_id,'is_timely');
            $res = ['is_timely'=>$rr];
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$res);

    }

    /**
     * 查询公共区域和楼栋列表
     * @author:zhubaodi
     * @date_time: 2021/4/25 13:27
     */
    public function getHousePosition()
    {
        $village_id = $this->adminUser['village_id'];
        if(!$village_id) {
            return api_output_error(1001,'必传参数缺失');
        }
        // 查询楼栋
        $village_service = new HouseVillageService();
        try {
            $list = $village_service->getHousePosition($village_id);
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
        return api_output(0,$list);
    }
    /**
     * Notes: 获取对应子集信息
     * @return array|\json
     * @author: wanzy
     * @date_time: 2021/8/13 17:01
     */
    public function getHousePositionChidren() {
        $village_id = $this->adminUser['village_id'];
        if(!$village_id) {
            return api_output_error(1001,'必传参数缺失');
        }
        $id = $this->request->post('id',0);
        if(!$id) {
            return api_output_error(1001,'必传参数缺失');
        }
        $type = $this->request->post('type',0);
        if(!$type) {
            return api_output_error(1001,'必传参数缺失');
        }
        // 查询楼栋
        $village_service = new HouseVillageService();
        try {
            $list = $village_service->getHousePositionChildren($village_id,$id,$type);
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
        $arr = [];
        $arr['list'] = $list;
        return api_output(0,$list);
    }

    /**
     * 工单类目-类别列表
     * @author wanzy
     * @date_time 2021/08/13 17:07
     * @return \json
     */
    public function getSubject()
    {
        $village_id = $this->adminUser['village_id'];
        if(!$village_id) {
            return api_output_error(1001,'必传参数缺失');
        }
        $parent_id = $this->request->post('subject_id',0);
        if (!$parent_id) {
            $parent_id = 0;
        }
        $where[] = ['village_id','=',$village_id];
        $where[] = ['status','=',1];
        $where[] = ['parent_id','=',$parent_id];
        $field = 'subject_name,id as category_id,color';
        $field = 'cate_name as subject_name,id as category_id,color';
        try{

            $data = (new RepairCateService())->getNewRepairCate($where,$field,0,0,'id DESC');
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * Notes:分类 一级分类-二级分类
     * @return \json
     * @author: wanzy
     * @date_time: 2021/8/13 17:15
     */
    public function getRepairCate()
    {
        $cat_fid = $this->request->post('cat_fid',0);
        $village_id = $this->adminUser['village_id'];
        if(!$village_id) {
            return api_output_error(1001,'必传参数缺失');
        }
        $subject_id = $this->request->post('subject_id',0);
        if(!$subject_id) {
            return api_output_error(1001,'必传参数缺失');
        }
        $appType = $this->request->post('app_type','');
        if (!$cat_fid) {
            $cat_fid = 0;
        }
        $where = [];
        // H5 一次性将一级二级分类拼好返给前端
        if($appType != 'packapp'){
//            $where[] = ['parent_id','=',$cat_fid];
        }
        $where[] = ['parent_id','=',$subject_id];
        $where[] = ['village_id','=',$village_id];
//      $where[] = ['subject_id','=',$subject_id];

        $where[] = ['status','=',1];
        $field='id as cat_id,cate_name';
        $service_house_new_repair = new HouseNewRepairService();
        try{
            $data = $service_house_new_repair->getFidCateList($where,$field,'id DESC',$appType);
        }catch (\Exception $e){
            return api_output_error(-1,$e->getMessage());
        }
        return api_output(0,$data);
    }

    /**
     * 获取部门数据
     * @author: liukezhu
     * @date : 2022/4/6
     * @return \json
     */
    public function getTissueNav(){
        $village_id = $this->adminUser['village_id'];
        try{
            $status=(new HouseVillageService())->checkVillageField($village_id,'is_grab_order');
            if($status){
                $data = (new HouseProgrammeService())->businessNav($village_id,0);
            }else{
                $data=[];
            }
            $list=['status'=>$status,'list'=>$data];
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
        return api_output(0,$list);
    }

    public function getVillageRepairConfig(){
        $village_id = $this->adminUser['village_id'];
        try{
            $houseVillageService=new HouseVillageService();
            $whereArr=array();
            $whereArr[]=array('village_id','=',$village_id);
            $fieldStr='village_id,property_id,is_timely,works_order_switch,grab_order_time,is_grab_order,work_order_extra';
            $villageInfoExtend=$houseVillageService->getHouseVillageInfoExtend($whereArr,$fieldStr);
            $bindWorkerUrl=cfg('site_url').'/shequ.php?g=House&c=Index&a=new_repair_bind_worker&cfromfun=v20';
            $bindWorkerUrl=str_replace('//shequ.php','/shequ.php',$bindWorkerUrl);
            if(empty($villageInfoExtend)){
                $villageInfoExtend='';
            }else{
                $villageInfoExtend['day_works_order_integral']=0;
                $villageInfoExtend['per_works_order_integral']=0;
                $villageInfoExtend['auto_evaluate']=array("is_open"=>false,"stime"=>0,"stime_type"=>"hour","star"=>"5");
                $work_order_extra=!empty($villageInfoExtend['work_order_extra']) ? json_decode($villageInfoExtend['work_order_extra'],1):array();
                if($work_order_extra){
                    $villageInfoExtend=array_merge($villageInfoExtend,$work_order_extra);
                }
            }
            $is_comment_point=cfg('works_order_comment_get_point');
            $is_comment_point=$is_comment_point>0 ? 1:0;
            return api_output(0,['bindWorkerUrl'=>$bindWorkerUrl,'repairConfig'=>$villageInfoExtend,'is_comment_point'=>$is_comment_point]);
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
    }

    public function saveVillageRepairConfig(){
        $village_id = $this->adminUser['village_id'];
        $property_id=$this->adminUser['property_id'];
        $xtype=$this->request->post('xtype','','trim');
        $is_timely=$this->request->post('is_timely',0,'intval');
        $grab_order_time=$this->request->post('grab_order_time',0,'intval');
        $is_grab_order=$this->request->post('is_grab_order',0,'intval');
        $day_works_order_integral=$this->request->post('day_works_order_integral',0,'intval');
        $per_works_order_integral=$this->request->post('per_works_order_integral',0,'intval');
        $works_order_switch=$this->request->post('works_order_switch',0,'intval');
        $saveArr=array('is_timely'=>$is_timely,'grab_order_time'=>$grab_order_time);
        $saveArr['is_grab_order']=$is_grab_order;
        $saveArr['works_order_switch']=$works_order_switch;
        $auto_evaluate=$this->request->post('auto_evaluate');
        $work_order_extra=array();
        if($xtype=='other_set'){
            $work_order_extra['day_works_order_integral']=$day_works_order_integral;
            $work_order_extra['per_works_order_integral']=$per_works_order_integral;
        }else if($xtype=='auto_evaluate_set'){
            $work_order_extra['auto_evaluate']=$auto_evaluate;
        }
        try{
            $houseVillageService=new HouseVillageService();
            $whereArr=array('village_id'=>$village_id,'property_id'=>$property_id);
            if($xtype=='other_set' || $xtype=='auto_evaluate_set'){
                $tmpSaveArr=array();
                if($xtype=='auto_evaluate_set'){
                    $tmpSaveArr['is_auto_work_order_evaluate']=!empty($auto_evaluate['is_open']) ? 1:0;
                    $tmpSaveArr['work_order_auto_evaluate_time']=!empty($auto_evaluate['stime']) ? intval($auto_evaluate['stime']):0;
                }
                $houseVillageService->saveHouseVillageInfoExtendWorkOrderExtra($whereArr,$work_order_extra,$tmpSaveArr);
            }else{
                $houseVillageService->saveHouseVillageInfoExtend($whereArr,$saveArr);
            }
            return api_output(0,'操作成功！');
        }catch (\Exception $e){
            return api_output_error(-1, $e->getMessage());
        }
    }
}