<?php

namespace app\community\model\service;

use app\community\model\db\HouseNewChargePrepaidDiscount;
use app\community\model\db\HouseNewChargeRule;
use think\Exception;
class HouseNewChargePrepaidDiscountService{
    public $discount_type=array(0=>'未知',1=>'按月预缴',2=>'按季度预缴',3=>'按年预缴');
    public function __construct()
    {

    }
    public function addOneData($datas=array()){
        $houseNewChargePrepaidDiscount=new HouseNewChargePrepaidDiscount();
        $id=$houseNewChargePrepaidDiscount->addFind($datas);
        return $id;
    }

    public function addAllDatas($dataArr=array(),$prepayment=array()){
        $houseNewChargePrepaidDiscount=new HouseNewChargePrepaidDiscount();
        $fdataArr=$dataArr;
        $fid=$houseNewChargePrepaidDiscount->addFind($fdataArr);
        if($fid>0){
            foreach ($prepayment as $vv){
                $dataArr['fid']=$fid;
                $dataArr['num']=$vv['num'];
                $dataArr['rate']=round($vv['rate'],2);
                $dataArr['quarter']=0;
                if($dataArr['discount_type']==2){
                    //季度
                    $dataArr['num']=$vv['num']*3;
                    $dataArr['quarter']=$vv['num'];
                }
                $id=$houseNewChargePrepaidDiscount->addFind($dataArr);
            }
        }
        return $fid;
    }
    /***
    **只用于编辑保存
     **/
    public function saveAllDatas($fid = 0,$village_id=0, $dataArr = array(), $prepayment = array())
    {
        $houseNewChargePrepaidDiscount = new HouseNewChargePrepaidDiscount();
        $whereArr=array('id'=>$fid,'village_id'=>$village_id,'fid'=>0);
        $foneData= $houseNewChargePrepaidDiscount->getOne($whereArr);
        if($foneData && !$foneData->isEmpty()){
            $foneData=$foneData->toArray();
        }
        $nowtime=time();
        if(empty($foneData)){
            throw new \think\Exception("优惠数据不存在！");
        }
        $dataArr['charge_project_id']=$foneData['charge_project_id'];
        $fdataArr=array();
        $fdataArr['update_time']=$nowtime;
        $fdataArr['expire_time']=$dataArr['expire_time'];
        $houseNewChargePrepaidDiscount->editFind($whereArr,$fdataArr);
        //删掉原来的
        $whereArr=array('fid'=>$fid,'village_id'=>$village_id);
        $houseNewChargePrepaidDiscount->editFind($whereArr,['status'=>4,'update_time'=>$nowtime]);
        
        foreach ($prepayment as $vv) {
            $dataArr['fid'] = $fid;
            $dataArr['village_id'] = $village_id;
            $dataArr['num'] = $vv['num'];
            $dataArr['rate'] = round($vv['rate'], 2);
            $dataArr['quarter'] = 0;
            if ($dataArr['discount_type'] == 2) {
                //季度
                $dataArr['num'] = $vv['num'] * 3;
                $dataArr['quarter'] = $vv['num'];
            }
            $id = $houseNewChargePrepaidDiscount->addFind($dataArr);
        }
        return $fid;
    }

    public function saveOne($whereArr=array(),$updateArr=array()){
        if(empty($whereArr)||empty($updateArr)){
            return false;
        }
        $houseNewChargePrepaidDiscount = new HouseNewChargePrepaidDiscount();
        return $houseNewChargePrepaidDiscount->editFind($whereArr,$updateArr);
    }
    /***
     ***列表 父数据
     **/
    public function getAllList($whereArr=array()){
        $ret=array('count'=>0,'list'=>array(),'total_limit'=>20);
        if(empty($whereArr)){
            return $ret;
        }
        $houseNewChargePrepaidDiscount = new HouseNewChargePrepaidDiscount();
        $listObj=$houseNewChargePrepaidDiscount->getList($whereArr);
        $listData=array();
        if($listObj && !$listObj->isEmpty()){
            $listData=$listObj->toArray();
        }
        if($listData){
            $ret['count']=count($listData);
            foreach ($listData as $kk=>$vv){
                $listData[$kk]['discount_type_str']=$this->discount_type[$vv['discount_type']];
                $listData[$kk]['expire_time_str']=date('Y-m-d',$vv['expire_time']);
                $listData[$kk]['update_time_str']=date('Y-m-d H:i:s',$vv['update_time']);
                $listData[$kk]['xcontent']='';
                $discount_type_arr=array(1=>'月',2=>'季度',3=>'年');
                $whereArr=array(['fid','=',$vv['id']]);
                $whereArr[]=array(['discount_type','>',0]);
                $whereArr[]=array(['status','=',1]);
                $subdata=$houseNewChargePrepaidDiscount->getList($whereArr,'*','num asc');
                if($subdata && !$subdata->isEmpty()){
                    $subdata=$subdata->toArray();
                    $xcontent=[];
                    foreach ($subdata as $svv){
                        if($vv['discount_type']==2){
                            $xcontent[]= $svv['quarter'].'个季度'.'（'.$svv['rate'].'%）';
                        }else{
                            $xcontent[]= $svv['num'].'个'.$discount_type_arr[$vv['discount_type']].'（'.$svv['rate'].'%）';
                        }
                    }
                    $listData[$kk]['xcontent']=implode('、',$xcontent);
                }
            }
            $ret['list']=$listData;
        }
        return $ret;
    }
    /***
     ***编辑是获取子数据
     **/
    public function getEditData($whereArr = array())
    {
        if (empty($whereArr)) {
            throw new \think\Exception("查询错误！");
        }
        $houseNewChargePrepaidDiscount = new HouseNewChargePrepaidDiscount();
        $foneData = $houseNewChargePrepaidDiscount->getOne($whereArr);
        if ($foneData && !$foneData->isEmpty()) {
            $foneData = $foneData->toArray();
        }
        if ($foneData) {
            $foneData['sublist'] = array();
            $foneData['expire_time_str'] = date('Y-m-d', $foneData['expire_time']);
            $foneData['discount_type'] = intval($foneData['discount_type']);
            $whereArr = array(['fid', '=', $foneData['id']]);
            $whereArr[] = array(['discount_type', '>', 0]);
            $whereArr[] = array(['status', '=', 1]);
            $subdata = $houseNewChargePrepaidDiscount->getList($whereArr, '*', 'num asc');
            if ($subdata && !$subdata->isEmpty()) {
                $subdata = $subdata->toArray();
                foreach ($subdata as $svv){
                    $tmpData=array('id'=>$svv['id'],'num'=>$svv['num'],'rate'=>$svv['rate']);
                    if($foneData['discount_type']==2){
                        $tmpData['num']=$svv['quarter'];
                    }
                    $foneData['sublist'][]=$tmpData;
                }
            }
            return $foneData;
        } else {
            throw new \think\Exception("编辑数据不存在！");
        }
    }
    
    public function delChargePrepaidDiscount($fid=0,$village_id=0){
        $houseNewChargePrepaidDiscount = new HouseNewChargePrepaidDiscount();
        $delSave=array('status'=>4,'update_time'=>time());
        $houseNewChargePrepaidDiscount->editFind(['id'=>$fid,'village_id'=>$village_id],$delSave);
        $ret=$houseNewChargePrepaidDiscount->editFind(['fid'=>$fid,'village_id'=>$village_id],$delSave);
        return $ret;
    } 
}