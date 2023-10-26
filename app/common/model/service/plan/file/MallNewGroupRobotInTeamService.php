<?php


namespace app\common\model\service\plan\file;


use app\mall\model\db\MallNewGroupAct;
use app\mall\model\db\MallNewGroupOrder;
use app\mall\model\db\MallNewGroupTeam;
use app\mall\model\db\MallNewGroupTeamUser;
use app\mall\model\db\MallOrder;
use app\mall\model\db\MallRobotList;
use app\mall\model\service\MallOrderService;

class MallNewGroupRobotInTeamService
{
    /**
     * 计划任务执行
     * @param  string  $param 参数
     */

    public function runTask()
    {
        $where1[]=['s.is_open_group','=',1];
        $where1[]=['m.start_time','<',time()];
        $where1[]=['m.end_time','>=',time()];
        $where1[]=['t.status','=',0];
        $where1[]=['t.start_time','<',time()];
        $where1[]=['t.end_time','>=',time()];
        $list=(new MallNewGroupAct())->getGroupTeamMasg($where1,$field="*");
        if(empty($list)){//没有符合的团队
            exit;
        }
        else{
            foreach ($list as $key=>$val){
                $where2=[['mer_id','=',$val['mer_id']]];
                $count=(new MallRobotList())->getRobotCount($where2);//机器数量
                if($count<($val['complete_num']-$val['num'])){//机器人数量少
                    continue;
                }
                $over_num=$val['complete_num']-$val['num'];//暂时缺几人
                $where=[
                    ['s.tid','=',$val['team_id']],
                    ['s.status','=',1],
                    ['s.act_id','=',$val['group_act_id']]
                ];
                $pay_time_msg=(new MallNewGroupOrder())->getOrderList($where,"od.pay_time","od.pay_time desc");
                if($val['simulate_group_num']==0 || empty($val['simulate_group_num'])){//机器人参与人数大于等于几人的团；若为空，机器人则参与所有未拼成的团
                    if(($val['machine_into_time']+$pay_time_msg['pay_time'])>time()){//不满足跳过
                        continue;
                    }
                }else{
                    if($val['num']<$val['simulate_group_num']){//机器人参与人数大于等于几人的团；不够跳过
                        continue;
                    }else{
                        if(($val['machine_into_time']+$pay_time_msg['pay_time'])>time()){//不满足跳过
                            continue;
                        }
                    }
                }
                $data['tid']=$val['team_id'];
                $data['order_id']=0;
                $data['type']=1;
                $where1=[['mer_id','=',$val['mer_id']]];
                $rob_list=(new MallRobotList())->getRobotList($over_num,$where1);//随机几个机器人
                foreach($rob_list as $k=>$v){
                    $data['user_id']=$v['id'];
                    (new MallNewGroupTeamUser())->addTeamUser($data);//机器人加入拼团队伍
                }
                $wheres=[['id','=',$val['team_id']]];
                $data1['status']=1;
                $data1['num']=$val['complete_num'];
                (new MallNewGroupTeam())->updateGroupStatus($wheres,$data1);
                $where_order=[['tid','=',$val['team_id']]];
                $orderList=(new MallNewGroupOrder())->getList($where_order,$field="order_id");
                foreach($orderList as $keys=>$vals){
                    (new MallOrderService())->changeOrderStatus($vals['order_id'],10,'拼团机器人自动加入拼团完成后改变订单状态(计划任务)');
                }
            }
        }
        return true;
    }
}