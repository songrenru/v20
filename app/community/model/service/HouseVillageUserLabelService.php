<?php


namespace app\community\model\service;

use app\community\model\db\HouseVillageUserBind;
use app\community\model\db\HouseVillageUserLabel;
use app\community\model\db\StreetPartyBindUser;
use app\community\model\db\User;
use think\Exception;

class HouseVillageUserLabelService
{
    // 政治面貌
    public $political_affiliation_title = '政治面貌';
    public $political_affiliation_arr = array(
        1 => '党员',
        2 => '共青团员',
        3 => '群众',
    );
    // 特殊人群
    public $special_groups_title = '特殊人群';
    public $special_groups_arr = array(
        1 => '刑满释放',
        2 => '社区矫正',
        3 => '重点青少年',
        4 => '吸毒',
        5 => '艾滋病',
        6 => '精神病',
    );
    // 重点人群
    public $focus_groups_title = '重点人群';
    public $focus_groups_arr = array(
        1 => '服刑人员',
        2 => '非法组织',
        3 => '上访人员'
    );
    // 弱势困难群体
    public $vulnerable_groups_title = '关怀群体';
    public $vulnerable_groups_arr = array(
        1 => '低保',
        2 => '残疾人',
        3 => '空巢',
        4 => '失独老人',
        5 => '孤寡老人',
        6 => '退役军人',
        7 => '留守儿童',
    );
    /**
     * 获取党员数量
     * @author lijie
     * @date_time 2020/09/10
     * @param $where
     * @return mixed
     */
    public function getCount($where)
    {
        $db_house_village_user_label = new HouseVillageUserLabel();
        $count = $db_house_village_user_label->getCount($where);
        return $count;
    }

    /**
     * 获取党员列表
     * @author lijie
     * @date_time 2020/09/10
     * @param $where
     * @param bool $field
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return mixed
     */
    public function getPartyMemberLists($where,$field=true,$page=0,$limit=0,$order='l.id DESC')
    {
        $db_house_village_user_label = new HouseVillageUserLabel();
        $data = $db_house_village_user_label->getPartyMemberLists($where,$field,$page,$limit,$order);
        if($data){
            $site_url = cfg('site_url');
            $static_resources = static_resources(true);
            foreach ($data as $k=>$v){
                $data[$k]['part_year']=0;
                if (isset($v['part_time']) && $v['part_time']>100) {
                    $res = $this->diffBetweenTwoDate(time(),$v['part_time']);
                    $data[$k]['part_year'] = $res['year'];
                }
                if (isset($v['logo']) && $v['logo']) {
                    if (strpos($v['logo'],'/v20/') !== false) {
                        $data[$k]['logo'] = cfg('site_url') . $v['logo'];
                    } else {
                        $data[$k]['logo'] = replace_file_domain($v['logo']);
                    }
                } else {
                    $data[$k]['logo'] =  $site_url . $static_resources . 'images/member.png';
                }
            }
        }
        return $data;
    }

    /**
     * 获取两个日期相差多少年，多少月，多少天，多少小时
     * @author lijie
     * @date_time 2020/09/10
     * @param  [type]  $startTime [开始日期，如:2018-02-10 10:00]
     * @param  [type]  $endTime   [结束日期，如:2018-03-01 15:00]
     * @return array
     */
    public function diffBetweenTwoDate($dateOne, $dateTwo)
    {
        $strtoDateOne = $dateOne;
        $strtoDateTwo = $dateTwo;

        if ($strtoDateOne < $strtoDateTwo) {
            $tmp = $strtoDateTwo;
            $strtoDateTwo = $strtoDateOne;
            $strtoDateOne = $tmp;
        }

        $dateMonthOne = explode('-', date('Y-m', $strtoDateOne));
        $dateMonthTwo = explode('-', date('Y-m', $strtoDateTwo));

        $diff = [];
        $diff['hours'] = ($strtoDateOne - $strtoDateTwo) / (60 * 60);
        $diff['day'] = ($strtoDateOne - $strtoDateTwo) / (60 * 60 * 24);
        $diff['month'] = abs($dateMonthOne[0] - $dateMonthTwo[0]) * 12 + abs($dateMonthOne[1] - $dateMonthTwo[1]);
        $diff['year'] = date('Y', $strtoDateOne) - date('Y', $strtoDateTwo);

        return $diff;
    }

    /**
     * 获取街道困难群体
     * @author lijie
     * @date_time 2020/10/16
     * @param $where
     * @param bool $field
     * @param $page
     * @param $limit
     * @param string $order
     * @param int $type
     * @return mixed
     */
    public function getStreetUser($where,$field=true,$page,$limit,$order='l.id DESC',$type=1)
    {
        $db_house_village_user_label = new HouseVillageUserLabel();
        $service_house_village = new HouseVillageService();
        $data = $db_house_village_user_label->getStreetUser($where,$field,$page,$limit,$order);
        $count = $db_house_village_user_label->getCount($where);
        if($data){
            foreach ($data as $key=>$val){
                $data[$key]['address']=$service_house_village->getSingleFloorRoom($val['single_id'],$val['floor_id'],$val['layer_id'],$val['vacancy_id'],$val['village_id']);
                if ($data[$key]['address']!='暂无房间(数据异常)'){
                    $data[$key]['address']=$data[$key]['village_name'].$data[$key]['address'];
                }
                switch ($type){
                    case 1:
                        $user_vulnerable_groups_txt = '';
                        $user_vulnerable_groups_txt_arr = explode(',',$val['user_vulnerable_groups']);
                        foreach ($user_vulnerable_groups_txt_arr as $k=>$v){
                            $user_vulnerable_groups_txt .= $this->vulnerable_groups_arr[$v].',';
                        }
                        $user_vulnerable_groups_txt = rtrim($user_vulnerable_groups_txt,',');
                        $data[$key]['user_vulnerable_groups_txt'] = $user_vulnerable_groups_txt;
                        break;
                    case 3:
                        $user_focus_groups_txt = '';
                        $user_focus_groups_txt_arr = explode(',',$val['user_focus_groups']);
                        foreach ($user_focus_groups_txt_arr as $k1=>$v1){
                            $user_focus_groups_txt .= $this->focus_groups_arr[$v1].',';
                        }
                        $user_focus_groups_txt = rtrim($user_focus_groups_txt,',');
                        $data[$key]['user_focus_groups_txt'] = $user_focus_groups_txt;
                        break;
                    case 4:
                        $user_special_groups_txt = '';
                        $user_special_groups_txt_arr = explode(',',$val['user_special_groups']);
                        foreach ($user_special_groups_txt_arr as $k2=>$v2){
                            $user_special_groups_txt .= $this->special_groups_arr[$v2].',';
                        }
                        $user_special_groups_txt = rtrim($user_special_groups_txt,',');
                        $data[$key]['user_special_groups_txt'] = $user_special_groups_txt;
                        break;
                    default:
                        break;
                }
                if($page>0 && isset($val['phone']) && !empty($val['phone'])){
                    $data[$key]['phone']=phone_desensitization($val['phone']);
                }
            }
        }
        $res['list'] = $data;
        $res['count'] = $count;
        return $res;
    }


    /**
     * 获取党员详情
     * @author: liukezhu
     * @date : 2022/10/31
     * @param $village_id
     * @param $pigcms_id
     * @return array
     * @throws Exception
     */
    public function getPartyMemberInfo($village_id,$pigcms_id){
        $HouseVillageUserBind=new HouseVillageUserBind();
        $HouseVillageService= new HouseVillageService();
        $HouseVillageUserLabel=new HouseVillageUserLabel();
        $StreetPartyBindUser=new StreetPartyBindUser();
        $User=new User();
        $time=time();
        $user_bind_where=[
            ['village_id','=',$village_id],
            ['pigcms_id','=',$pigcms_id],
            ['status','=',1]
        ];
        $field='pigcms_id,village_id,uid,name,phone,single_id,floor_id,layer_id,vacancy_id';
        $user_bind=$HouseVillageUserBind->getOne($user_bind_where,$field);
        if (!$user_bind || $user_bind->isEmpty()) {
            throw new Exception('该用户不存在或被禁用');
        }
        //房间号
        $room_number = $HouseVillageService->getSingleFloorRoom($user_bind['single_id'], $user_bind['floor_id'], $user_bind['layer_id'], $user_bind['vacancy_id'],$user_bind['village_id']);
        //信息标注
        $field='user_political_affiliation,user_special_groups,user_focus_groups,user_vulnerable_groups,part_time,logo';
        $user_label=$HouseVillageUserLabel->getOne([['bind_id','=',$user_bind['pigcms_id']]],$field);
        //党支部
        $field='a.party_id,a.join_party_time,a.party_img,b.name as party_branch_name';
        $party_bind_user=$StreetPartyBindUser->getBindPartyBranch([['a.uid','=',$user_bind['uid']]],$field);
        //头像
        $user_avatar  =   cfg('site_url') . '/static/images/user_avatar.jpg';
        if(isset($user_label['logo']) && $user_label['logo']){
            $user_avatar=$user_label['logo'];
        } else{
            $user=$User->getOne([['uid','=',$user_bind['uid']]],'avatar');
            if ($user && !$user->isEmpty()){
                if(!empty($user['avatar'])){
                    $user_avatar=$user['avatar'];
                }
            }
        }
        $data=[
            'user_name'=>$user_bind['name'],
            'user_avatar'=>replace_file_domain($user_avatar),
            'room_number'=>$room_number,
        ];
        //政治面貌
        if(isset($user_label['user_political_affiliation']) && $user_label['user_political_affiliation']){
            $user_political=$this->political_affiliation_arr[$user_label['user_political_affiliation']];
        }else{
            $user_political='';
        }
        //所属党支部
        if(isset($party_bind_user['party_branch_name']) && $party_bind_user['party_branch_name']){
            $party_branch_name=$party_bind_user['party_branch_name'];
        }
        else{
            $party_branch_name='';
        }
        //入党时间
        if(isset($user_label['part_time']) && $user_label['part_time']){
            $user_part_time= date('Y-m-d',$user_label['part_time']);
        }
        else{
            $user_part_time='';
        }
        //党龄
        if(isset($user_label['part_time']) && $user_label['part_time']){
            $user_part_year= $this->diffBetweenTwoDate($time,$user_label['part_time'])['year'];
        }
        else{
            $user_part_year= '';
        }
        $data['list']=[
            [
                'key'=>'手机号码','value'=>$user_bind['phone']
            ],
            [
                'key'=>'政治面貌','value'=>$user_political
            ],
            [
                'key'=>'所属党支部','value'=>$party_branch_name
            ],
            [
                'key'=>'入党时间','value'=>$user_part_time
            ],
            [
                'key'=>'党龄','value'=>$user_part_year
            ],
        ];
        return $data;
    }
}