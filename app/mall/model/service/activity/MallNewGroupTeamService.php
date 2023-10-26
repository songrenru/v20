<?php


namespace app\mall\model\service\activity;


use app\mall\model\db\MallNewGroupTeam;
use app\mall\model\db\MallNewGroupTeamUser;

class MallNewGroupTeamService
{
    /**
     * @param $uid
     * @param $tid
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * 获取用户的在团队的信息
     */
  public function getIsInTeamStatus($uid,$tid){
      $where=[['user_id','=',$uid],['id','=',$tid]];
      $field="*";
      $list=(new MallNewGroupTeam())->getTeamList($where,$field);
      return $list;
  }

    /**
     * @param $tid
     * @return array|\think\Model|null
     * 获取团队新新
     */
  public function getOne($tid){
      if(empty($tid)){
          throw new \think\Exception(L_('团队id参数缺失'), 1003);
      }
      $list=(new MallNewGroupTeam())->getOne($tid);
      $where=[['r.tid','=',$tid],['s.tid','=',$tid],['t.status','=',0],['r.status','<',2]];
      $user_list=(new MallNewGroupTeamUser())->getTeamUserList($where,$field="*");
      $return['status']=0;//默认未占满位置
      $return['pay_mans']=0;
      if($list['complete_num']<=$user_list){
          $return['status']=1;//已占满位置
      }
      $where1=[['r.tid','=',$tid],['s.tid','=',$tid],['r.act_id','=',$list['act_id']],['t.status','=',0],['r.status','=',0]];
      $user_list1=(new MallNewGroupTeamUser())->getTeamUserList($where1,$field="*");
      $return['pay_mans']=$user_list1;//正在支付人数
      $return['user_id']=$list['user_id'];//拼主id
      return $return;
  }
}