<?php
/**
 * 支付接口
 */
declare (strict_types = 1);

namespace app\pay\controller;

use app\community\model\service\StorageService;
use app\pay\model\service\PayService;
use app\common\model\service\UserService;
use app\common\model\service\merchant_card\MerchantCardService;
use app\common\model\service\percent_rate\PercentRateService;
use app\common\model\service\qiye\QiyeService;
use app\pay\model\service\channel\TianqueService;
use app\pay\model\service\env\EnvService;
use think\facade\Db;
use app\community\model\service\PayService as communityPayService;
use app\employee\model\db\EmployeeCard;
use app\employee\model\db\EmployeeCardUser;

class PayController
{
	/**
	 * 收银台界面接口
	 */
	public function check(){	
		try {
			$compute = $this->compute('check');
		} catch (\Exception $e) {
            fdump_api(['param' => $_POST,'msg' => $e->getMessage()],'errPay/checkLog',1);
			return api_output_error(1005, $e->getMessage());
		}
		// fdump_api([$compute],)
		if(gettype($compute) == 'object'){
			return $compute;
		}
		return api_output(0, $compute);
	}

	/**
	 * 去支付
	 */
	public function go_pay(){
	    $s       = microtime(true);
        $compute = $this->compute('go_pay');
        $n       = microtime(true);
        fdump_api(['$this->compute()花费时长',$n-$s,$s,$n],'microtime_0706',1);
        if(gettype($compute) == 'object'){
            return $compute;
        }
        $order_info = $compute['order_info'];
        $pay_info   = $compute['pay_info'];

        fdump_api([$order_info,$pay_info,$compute],'go_pay_0224',1);
		$villageId = $order_info['village_id'] ?? 0;// 社区id
        $wxapp_own_village_id	    = request()->param('wxapp_own_village_id', 0, 'intval');// 物业自有小程序的物业ID
        $pay_service = new PayService($order_info['city_id'], $order_info['mer_id'], $order_info['store_id'], $villageId, $wxapp_own_village_id);
        $extra_cfg = [];
        // if($pay_info['select_pay_type'] == 'wechat'){
            $extra_cfg = ['openid'=> $compute['user_info']['openid'], 'wxapp_openid'=> $compute['user_info']['wxapp_openid']];
        // }
        if($pay_info['select_pay_type'] == 'alipay'){
            $extra_cfg = ['alipay_uid'=> $compute['user_info']['alipay_uid']];
        }
        $extra_cfg['uid'] = $compute['user_info']['uid'];
        $extra_cfg['appPackName'] = $compute['user_info']['appPackName'] ?? '';
        $extra_cfg['appPackSign'] = $compute['user_info']['appPackSign'] ?? '';
        $extra_cfg['appBundleId'] = $compute['user_info']['appBundleId'] ?? '';
       	if($villageId > 0){
       		$extra_cfg['village_id'] = $villageId;
       	}

        $env = new EnvService($order_info['city_id'], $order_info['mer_id'], $order_info['store_id'], $villageId, $wxapp_own_village_id);
        $envService = $env->getEnvService();
        if($envService !== null){
            $judge = $envService->judgeOpenChinaums();
        } else {
            $judge = false;
        }
		//  银联分账
		if($judge){
			//如果是社区业务，就拿到社区的sub_mer_no和社区的抽成
			if($villageId > 0){
				$community = (new communityPayService)->getConfig($villageId);
				$percent = $community['percent'] ?? 0;
				$extra_cfg['platform_get'] = ceil($pay_info['online_pay_money']*$percent);
				$extra_cfg['merchant_get'] = get_format_number($pay_info['online_pay_money']*100 - $extra_cfg['platform_get']);
			}
			//如果是O2O，则拿到O2O的抽成
			else{
				$percent = (new PercentRateService)->getPercentRate($order_info['mer_id'], $order_info['order_type'], $pay_info['online_pay_money'], '', $order_info['store_id']);
				if (empty($percent)){
                    $percent=0;
                }
				$extra_cfg['platform_get'] = ceil($pay_info['online_pay_money']*$percent);
				$extra_cfg['merchant_get'] = get_format_number($pay_info['online_pay_money']*100 - $extra_cfg['platform_get']);
			}
		}
        if(empty($pay_info['current_village_hot_water_balance'])&& empty($pay_info['current_village_cold_water_balance'])&& empty($pay_info['current_village_electric_balance']) && empty($pay_info['current_village_balance'])&& empty($pay_info['select_pay_type']) && empty($pay_info['current_score_use']) && empty($pay_info['current_system_balance']) && empty($pay_info['current_merchant_balance']) && empty($pay_info['current_merchant_give_balance']) && empty($pay_info['current_qiye_balance']) && empty($pay_info['current_employee_balance']) && empty($pay_info['current_employee_score_deducte']) && $order_info['order_money'] > 0){

            fdump_api(['param' => $_POST,'compute' => $compute,'pay_info' => $pay_info,'order_info' => $order_info,'msg' => '当前未选择合适的支付方式'],'errPay/goPayLog',1);
            return api_output_error(1001, '当前未选择合适的支付方式！');
        }
        $rate = 1;
        if(!empty($pay_info['select_pay_type'])){
	        foreach ($compute['pay_types'] as $paytype) {
	        	if($paytype['name'] == $pay_info['select_pay_type'] && $paytype['rate'] > 0){
	        		$rate = $paytype['rate'];
	        	}
	        }
		}
		$extra_cfg['title'] = $order_info['title'];
		$extra_cfg['business_order_sn'] = $order_info['business_order_sn'] ?? '';
        $extra_cfg['goods_desc'] = $order_info['goods_desc'] ?? '';
        $extra_cfg['old_order_no'] = $order_info['order_no'] ?? '';
        Db::startTrans();
        try {
            $s1=microtime(true);
        	$return = $pay_service->pay($order_info['order_type'], $order_info['order_id'], $pay_info['select_pay_type'], $pay_info['online_pay_money'], $pay_info, $extra_cfg, get_format_number($rate));
            $n1=microtime(true);
            fdump_api(['$pay_service->pay花费时长',$n1-$s1,$s1,$n1],'microtime_0706',1);
        	Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            fdump_api(['param' => $_POST,'compute' => $compute,'pay_info' => $pay_info,'order_info' => $order_info,'order_type' => $order_info['order_type'],'order_id' => $order_info['order_id'],'select_pay_type' => $pay_info['select_pay_type'],'online_pay_money' => $pay_info['online_pay_money'],'extra_cfg' => $extra_cfg,'rate' => $rate,'errormsg'=>$e->getMessage(),'msg' => $e->getTraceAsString()],'errPay/goPayLog',1);
            return api_output_error(1005, $e->getMessage());
        }
        if (!empty($return['orderid'])) {
            $houseVillageParkingService = new \app\community\model\service\HouseVillageParkingService();
            $houseVillageParkingService->addParkPayRecord($return['orderid']);
        }
        if (!empty($return['url'])) {
            return api_output_redirect($return['url']);
        }

		$payType = request()->param('pay_type','');
		$orderType = request()->param('order_type','');
		//抖音推送订单
		if ($payType == 'douyin' && $orderType == 'group') {
			(new \app\common\model\service\order\SystemOrderService)->douyinOrderPush($return['orderid'], '待支付');
		}
		return api_output(0, $return);
	}

	/**
	 * 公共计算
	 */
	private function compute($cfrom=''){
		$now_uid = request()->log_uid;
		if(empty($now_uid)){
            fdump_api(['param' => $_POST,'now_uid' => $now_uid,'msg' => '当前未登录'],'errPay/computeLog',1);
			return api_output_error(1002, '当前未登录');
		}
		$order_type 	= request()->param('order_type');//业务标识 shop:外卖|mall:商城|village_group:社区拼团|...
		$order_id 		= request()->param('order_id', null, 'intval');//业务订单ID（主键哦） 
		if(empty($order_type) || empty($order_id)){
            fdump_api(['param' => $_POST,'msg' => '必填参数未传递'],'errPay/computeLog',1);
			return api_output_error(1001, '必填参数未传递');		
		}
        
        $use_village_balance	    = request()->param('use_village_balance', 0, 'intval');//是否使用用户余额支付
        $use_village_hot_water_balance	    = request()->param('use_village_hot_water_balance', 0, 'intval');//是否使用用户热水余额支付
        $use_village_cold_water_balance	    = request()->param('use_village_cold_water_balance', 0, 'intval');//是否使用用户冷水余额支付
        $use_village_electric_balance	    = request()->param('use_village_electric_balance', 0, 'intval');//是否使用用户电费余额支付
		$use_system_balance			= request()->param('use_system_balance', 0, 'intval');//是否使用用户余额支付 
		$use_merchant_balance		= request()->param('use_merchant_balance', 0, 'intval');//是否使用用户商家会员卡余额
		$use_qiye_balance			= request()->param('use_qiye_balance', 0, 'intval');//是否使用企业预存款余额
		$pay_type					= request()->param('pay_type', '');

		$open_user_score			= request()->param('open_user_score', 1, 'intval');//是否开启积分功能
		$use_user_score				= request()->param('use_user_score', 0, 'intval');//是否使用积分抵扣

		$use_employee_balance		= request()->param('use_employee_balance', 0, 'intval');//是否使用员工卡余额支付
		$use_employee_score			= request()->param('use_employee_score', 0, 'intval');//是否使用员工卡积分抵扣

        $appPackName = request()->param('appPackName', '', 'trim'); //安卓包名
        $appPackSign = request()->param('appPackSign', '', 'trim'); //安卓包签名
        $appBundleId = request()->param('appBundleId', '', 'trim'); //IOS bundleId


        $wxapp_own_village_id	    = request()->param('wxapp_own_village_id', 0, 'intval');// 物业自有小程序的物业ID
        

		//获取业务订单信息  getOrderPayInfo(order_id)   paid,is_cancel(1=已取消),time_remaining(剩余时间，单位：秒),mer_id,city_id,store_id,order_money（需支付的金额）,	uid, order_no(用户看到的长订单号), title（订单标题）
		//判断订单是否已经支付过？如果已经支付，则跳转到业务订单对应的url  getPayResultUrl(order_id);
		$now_order = [];
		switch ($order_type) {
			case 'dining':
				$business = new \app\foodshop\model\service\order\DiningOrderPayService;
				break;
			case 'group':
				$business = new \app\group\model\service\order\GroupOrderService;
				break;
			case 'package_room':
				$business = new \app\community\model\service\PackageRoomOrderService;
				break;
			case 'package':
				$business = new \app\community\model\service\PackageOrderService;
				break;
			case 'village_pay':
				$business = new \app\community\model\service\VillagePayOrderService;
				break;
			case 'mall':
				$business = new \app\mall\model\service\MallOrderCombineService;
				break;
			case 'shop':
				$business = new \app\shop\model\service\order\ShopOrderPayService;
				break;


			case 'house_meter':
				$business = new \app\community\model\service\HouseMeterPayService;
                break;
			case 'reward':
				$business = new \app\reward\model\service\order\RewardOrderPayService;

				break;

            case 'pile':
                $business = new \app\community\model\service\PileOrderPayService;
                break;

            case 'village_new_pay':
                $business = new \app\community\model\service\NewPayService();
                break;
			case 'employee_card':// 员工卡充值
				$business = new \app\employee\model\service\EmployeeCardOrderService();
				break;
			case 'life_tools_competition_join':// 赛事报名
				$business = new \app\life_tools\model\service\LifeToolsCompetitionJoinOrderService();
				break;
			case 'life_tools_appoint_join':// 门票预约报名
				$business = new \app\life_tools\model\service\appoint\LifeToolsAppointJoinOrderService();
				break;
			case 'lifetools': //体育健身
				$business = new \app\life_tools\model\service\LifeToolsOrderService();
				break;
			case 'lifetoolscard'://景区次卡
				$business = new \app\life_tools\model\service\LifeToolsCardOrderService();
				break;
			default:
				return api_output_error(1001, '当前业务（'.$order_type.'）未对接');
				break;
		}
		try{
			$now_order = $business->getOrderPayInfo($order_id);
            if($order_type == 'mall' && $now_order['uid'] != $now_uid){
                fdump_api(['param' => $_POST,'now_order' => $now_order,'msg' => '您不是当前订单的发起者，无法支付！'],'errPay/computeLog',1);
                return api_output_error(1003, '您不是当前订单的发起者，无法支付！');
            }
            if($order_type == 'mall' && $now_order['goods_status'] ==0){
                return api_output_error(1003, '订单包含已下架的商品！');
            }
			$now_order['uid'] = $now_uid;
			if($now_order['paid'] == '1'){
				//跳转到支付中心的支付完成页
                fdump_api(['param' => $_POST,'now_order' => $now_order, 'msg' => '当前订单已经支付'],'errPay/computeLog',1);
				return api_output(1003, ['pay_status' => 1, 'redirect_url' => ''], '当前订单已经支付');
			}
			elseif($now_order['is_cancel'] == '1' || $now_order['time_remaining'] <= 0){
				$redirect_url = $business->getPayResultUrl($order_id, ($now_order['is_cancel'] == '1' || $now_order['time_remaining'] <= 0 ? 1 : 0));
				$redirect_url = is_array($redirect_url) ? $redirect_url['redirect_url'] : $redirect_url;
                fdump_api(['param' => $_POST,'now_order' => $now_order,'redirect_url' => $redirect_url,'msg' => '当前订单已取消/超时'],'errPay/computeLog',1);
				return api_output(1003, ['pay_status' => 0, 'redirect_url' => $redirect_url], '当前订单已'.($now_order['is_cancel'] == '1' ? '取消' : '超时'));
			}
		} catch (\Exception $e) {
            fdump_api(['param' => $_POST,'now_order' => $now_order,'msg' => $e->getMessage()],'errPay/computeLog',1);
			return api_output_error(1005, $e->getMessage());
		}	
        $village_order_type_flag='';
        if(isset($now_order['village_order_type_flag']) && !empty($now_order['village_order_type_flag'])){
            $village_order_type_flag=$now_order['village_order_type_flag'];
        }
		//================================调出支付方式（默认选中第一个支付方式）================================
		$villageId = $now_order['village_id'] ?? 0; // 社区id
		$pay = new PayService($now_order['city_id'], $now_order['mer_id'], $now_order['store_id'], $villageId, $wxapp_own_village_id);
		$pay_types = $pay->payTypeList();
        $get_alipay			= request()->param('get_alipay', 0, 'intval');//微信环境下 是否获取支付支付
        if($cfrom=='check' && request()->agent == 'wechat'){
            foreach ($pay_types as $pkk=>$pvv){
                if($pvv['name']=='alipay'  && $get_alipay!=1){
                    unset($pay_types[$pkk]);
                }
            }
            $pay_types=array_values($pay_types);
        }
		$select_pay_type = '';//选中的支付方式
		if($pay_type){
			if(!in_array($pay_type, array_column($pay_types, 'name'))){
                fdump_api(['param' => $_POST,'pay_type' => $pay_type,'pay_types' => $pay_types,'msg' => 'pay_type传递有误！'],'errPay/computeLog',1);
				return api_output_error(1001, 'pay_type传递有误！');
			}
			$select_pay_type = $pay_type;
		}
		elseif(isset($pay_types[0])){
			$select_pay_type = $pay_types[0]['name'];
		}
		
		//如果是商家自有支付（微信端）
		if($select_pay_type == 'wechat' && $now_order['mer_id'] > 0 && request()->agent == 'wechat_h5'){
 			//需要做一个授权的跳转（新版暂时没做）
		}

		// 获得支付参数
		$env = new EnvService($now_order['city_id'], $now_order['mer_id'], $now_order['store_id'], $villageId, $wxapp_own_village_id);
		$envService = $env->getEnvService();
		$channel = $envService->getChannel($select_pay_type,$order_type);
		

		// 服务商子商户不允许使用积分抵扣
		$can_use_score = true;
		if(isset($channel['config']['sub_mch_discount']) && !$channel['config']['sub_mch_discount'] && !in_array($order_type, ['lifetoolscard'])){ //景区次卡订单不能使用积分
			$can_use_score = false;
		}

		// 服务商子商户不允许使用平台余额
		$can_use_system_balance = true;
		if(isset($channel['config']['sub_mch_sys_pay']) && !$channel['config']['sub_mch_sys_pay']){
			$can_use_system_balance = false;
		}
		
		//获取当前的用户信息（openid、余额、剩余积分）
		$now_user = [];
		$user = new UserService;
		if($now_order['uid']){
			$now_user = $user->getUser($now_order['uid']);
		}
		// 如果是物业自由小程序 取对应openid
        if ($wxapp_own_village_id > 0 && !empty($now_user) && isset($now_user['uid'])) {
            // todo 处理获取物业自有小程序
            $whereBind = [];
            $whereBind[] = ['uid',      '=', $now_user['uid']];
            $whereBind[] = ['property_id', '=', $wxapp_own_village_id];
            $orderby='id desc';
            if(request()->agent == 'wechat_mini'){
                $orderby='wxapp_openid desc';
            }else{
                $orderby='openid desc';
            }
            $bindUser = $user->getWeixinBindUser($whereBind,'*',$orderby);
            $now_user['openid']       = isset($bindUser['openid'])       && $bindUser['openid']       ? $bindUser['openid']       : '';
            $now_user['wxapp_openid'] = isset($bindUser['wxapp_openid']) && $bindUser['wxapp_openid'] ? $bindUser['wxapp_openid'] : '';
        }
        
        //获取当前的用户信息（openid、余额、剩余积分）
        $now_village_user = [];
        $village_user = new StorageService();
        if(!empty($now_order['uid'])&&!empty($villageId)){
            $now_village_user = $village_user->getVillageUser($now_order['uid'],$villageId);
        }
        // 不允许使用小区余额
        $can_use_village_balance = true;
        if(isset($now_village_user['can_use_village_balance']) && !$now_village_user['can_use_village_balance']){
            $can_use_village_balance = false;
        }
		//================================计算需要支付的金额================================
		$order_money 					= $now_order['order_money'];
		$show_pay_money 				= $order_money;//按钮上展示的需支付金额
		$online_pay_money 				= $order_money;//在线支付金额
		$current_score_use				= 0;//当前可以使用多少积分
		$current_score_deducte  		= 0;//当前积分可以抵扣多少钱

		$current_score_use_ed			= 0;//当前使用了多少积分
		$current_score_deducte_ed  		= 0;//当前积分抵扣了多少钱
		$current_system_balance 		= 0;//当前余额付了多少钱
        $current_village_balance 		= 0;//当前小区住户余额付了多少钱
		$current_merchant_balance 		= 0;//当前商家会员卡余额付了多少钱
		$current_merchant_give_balance 	= 0;//当前商家会员卡赠送余额付了多少钱
		$current_qiye_balance 			= 0;//当前企业预存款余额付了多少钱
		$current_employee_balance		= 0;//当前员工卡付了多少钱
		$current_employee_score_deducte = 0;//当前员工卡使用了多少积分

		//================================先使用积分抵扣，再用余额================================
		$score_display = false;//显示积分抵扣功能
		$user_score_use_condition = cfg('user_score_use_condition');//积分使用条件（必须设置）
		$user_score_use_percent = cfg('user_score_use_percent');//抵扣1元所需积分量（必须设置）
        fdump_api([$user_score_use_condition,$order_money,$user_score_use_condition,$user_score_use_percent,$now_user,$open_user_score,$now_order,$can_use_score],'pay_0224',1);
		if($user_score_use_condition > 0 && $order_money >= $user_score_use_condition && $user_score_use_percent > 0 && $now_user && $now_user['score_count'] > 0 && $open_user_score == '1' && (!isset($now_order['use_score']) || $now_order['use_score'] == true) && $can_use_score){
			$score_display = true;
			$group_id = $order_type == 'group' ? ($now_order['group_id'] ?? 0) : 0;
			switch ($order_type) {
				case 'mall'://新版商城业务支持合单支付，所以这个积分有点难算。独立写一个吧
					$user_score_max_use = $business->getScoreMaxUse($order_id);
					break;
                case 'village_new_pay'://社区新版收费业务
                    $user_score_info = $business->get_score($order_id,$now_user);
                    $user_score_max_use=$user_score_info['score_can_use'];
                    fdump_api([$user_score_info],'pay_0224',1);
                    break;
				default:
					$user_score_max_use = $user->checkScoreCanUse($now_order['uid'], $order_money, $order_type, $group_id, $now_order['mer_id'])['score'];//获取设置的积分最大使用量
					break;
			}

			$score_use = min($user_score_max_use, $now_user['score_count']);
			$score_deducte_money = sprintf('%.2f',$score_use/$user_score_use_percent);
			
			if($score_deducte_money >= $order_money){
				if($open_user_score == 1 && $use_user_score == 1){
					$current_score_use_ed = ceil($order_money*$user_score_use_percent);
					$current_score_deducte_ed = $order_money;
					$show_pay_money = 0;
					$online_pay_money = 0;
					$use_employee_score = 0;
				}
				$real_score_use = ceil($order_money*$user_score_use_percent);
				$current_score_use = $real_score_use;
				$current_score_deducte = $order_money;

			}
			else{
				if($open_user_score == 1 && $use_user_score == 1){
					$current_score_use_ed = $score_use;
					$current_score_deducte_ed = $score_deducte_money;
					$show_pay_money -= $score_deducte_money;
					$online_pay_money -= $score_deducte_money;
					$use_employee_score = 0;
				}
				$current_score_use = $score_use;
				$current_score_deducte = $score_deducte_money;
			}
		}



		############################### 使用员工卡支付begin ###########################
		$employee_balance = 0;
		$employee_score = 0;
		$employee_card_user_id = 0;
		if(customization('life_tools') && !empty($now_user) && $now_order['mer_id'] > 0 && in_array($order_type, ['mall', 'shop'])){
			$employeeCardModel = new EmployeeCard();
			$employeeCardUserModel = new EmployeeCardUser();
			$condition = [];
			$condition[] = ['mer_id', '=', $now_order['mer_id']];
			$condition[] = ['status', '=', 1];
			$employeeCard = $employeeCardModel->where($condition)->find();
			//商家存在员工卡
			if($employeeCard){
				$condition = [];
				$condition[] = ['uid', '=', $now_user['uid']];
				$condition[] = ['card_id', '=', $employeeCard->card_id];
				$condition[] = ['status', '=', 1];
				$employeeCardUser = $employeeCardUserModel->where($condition)->find();
				if($employeeCardUser){

					if($employeeCard->is_balance_pay == 1 && isset($employeeCardUser['card_money']) && $employeeCardUser['card_money'] > 0){
						$employee_balance = $employeeCardUser['card_money'];
					}

					if($employeeCard->is_score_pay == 1 && isset($employeeCardUser['card_score']) && $employeeCardUser['card_score'] > 0){
						$employee_score = $employeeCardUser['card_score'];
					}

					//使用积分
					if($use_employee_score && $employee_score > 0 && $online_pay_money > 0){

						if($employee_score > $online_pay_money){
							$show_pay_money = $online_pay_money;
							$current_employee_score_deducte = $online_pay_money;
							$online_pay_money = 0;
						}else{
							$show_pay_money = $online_pay_money - $employee_score;
							$online_pay_money = $online_pay_money - $employee_score;
							$current_employee_score_deducte = $employee_score;
						}
					}else{
						$use_employee_score = 0;
					} 

					//使用余额
					if($use_employee_balance && $employee_balance > 0 && $online_pay_money > 0){

						if($employee_balance > $online_pay_money){
							$show_pay_money = $online_pay_money;
							$current_employee_balance = $online_pay_money;
							$online_pay_money = 0;
						}else{
							$show_pay_money = $online_pay_money - $employee_balance;
							$online_pay_money = $online_pay_money - $employee_balance;
							$current_employee_balance = $employee_balance;
						}
						$use_merchant_balance = 0;
						$use_system_balance = 0;
					}else{
						$use_employee_balance = 0;
					}
					
					//使用积分或余额，记录员工卡ID
					if($current_employee_balance > 0 || $current_employee_score_deducte > 0){
						$employee_card_user_id = $employeeCardUser->user_id;
					}

				}
			}

		}
		
		################################# 使用员工卡支付end ###########################

        

		//================================使用商家会员卡余额================================
		$merchant_balance = 0;
		if(!empty($now_user) && $now_order['mer_id'] > 0 && (!isset($now_order['merchant_balance_open']) || (isset($now_order['merchant_balance_open']) && $now_order['merchant_balance_open'] === true)) && (!isset($now_order['use_merchant_balance']) || $now_order['use_merchant_balance'] == true)){
			$user_card = (new MerchantCardService)->getUserCard($now_user['uid'], $now_order['mer_id']);
			if($user_card){
				$merchant_balance = $user_card['card_money'] + $user_card['card_money_give'];
			}
			if($use_merchant_balance && $merchant_balance > 0 && $online_pay_money > 0){
				if($merchant_balance > $online_pay_money){
					$show_pay_money = $online_pay_money;
					if($online_pay_money >= $user_card['card_money_give']){
						$current_merchant_give_balance = $user_card['card_money_give'];
						$current_merchant_balance = $online_pay_money - $user_card['card_money_give'];
					}
					else{
						$current_merchant_give_balance = $online_pay_money;
					}
					$online_pay_money = 0;
				}
				else{
					$show_pay_money = $online_pay_money - $merchant_balance;
					$online_pay_money = $online_pay_money - $merchant_balance;
					$current_merchant_balance = $user_card['card_money'];
					$current_merchant_give_balance = $user_card['card_money_give'];
				}
			}
			elseif($online_pay_money == '0'){
				$use_merchant_balance = 0;
			}
		}
		//================================使用企业预存款余额================================
		$qiye_balance = 0;
		if(cfg('open_company_advance_deposit') == '1' && !empty($now_user) && $now_order['mer_id'] > 0 && (!isset($now_order['use_merchant_balance']) || $now_order['use_merchant_balance'] == true)){
			$qiye = new QiyeService;
			if($qiye->checkTheSameQiye($now_user['uid'], $now_order['mer_id'])){
				$qiye_staff = $qiye->getStaff($now_user['uid']);
				if($qiye_staff['status'] == '1'){
					$qiye_balance = $qiye_staff['money'];
				}
			}
			if($use_qiye_balance && $qiye_balance > 0 && $online_pay_money > 0){
				if($qiye_balance > $online_pay_money){
					$show_pay_money = $online_pay_money;
					$current_qiye_balance = $online_pay_money;
					$online_pay_money = 0;
				}
				else{
					$show_pay_money = $online_pay_money - $qiye_balance;
					$online_pay_money = $online_pay_money - $qiye_balance;
					$current_qiye_balance = $qiye_balance;
				}
			}
			elseif($online_pay_money == '0'){
				$use_qiye_balance = 0;
			}
		}

        //================================使用小区住户余额================================
        $is_use_village_balance=true;
        $is_use_village_hot_water_balance=false;
        $is_use_village_cold_water_balance=false;
        $is_use_village_electric_balance=false;
        if($can_use_village_balance && $use_village_balance && $now_village_user['current_money'] > 0 && $online_pay_money > 0){
            if($now_village_user['current_money'] >= $online_pay_money){
                $show_pay_money = $online_pay_money;
                $current_village_balance = $online_pay_money;
                $online_pay_money = 0;
            }
            else{
                $show_pay_money = $online_pay_money - $now_village_user['current_money'];
                $online_pay_money = $online_pay_money - $now_village_user['current_money'];
                $current_village_balance = $now_village_user['current_money'];
            }
        }
        elseif($online_pay_money == '0'){
            $use_village_balance = 0;
        }
        $village_water_electric_balance=0;
        if($can_use_village_balance && !empty($village_order_type_flag) && isset($now_village_user[$village_order_type_flag]) && $now_village_user[$village_order_type_flag]>0 && $online_pay_money > 0){
            if($now_village_user[$village_order_type_flag]>= $online_pay_money){
                $show_pay_money = $online_pay_money;
                $village_water_electric_balance=$online_pay_money;
                $online_pay_money = 0;
            }else{
                $show_pay_money = $online_pay_money - $now_village_user[$village_order_type_flag];
                $village_water_electric_balance = $online_pay_money - $now_village_user[$village_order_type_flag];
                $current_village_balance = $now_village_user[$village_order_type_flag];
            }
        }
        $current_village_hot_water_balance=0;
        $current_village_cold_water_balance=0;
        $current_village_electric_balance=0;
        if($can_use_village_balance && !empty($village_order_type_flag) && isset($now_village_user[$village_order_type_flag])){
            $can_use_system_balance=false;
            $use_system_balance=0;
            $use_village_balance = 0;
            $is_use_village_balance=false;
            if($village_order_type_flag=='hot_water_balance'){
                $current_village_hot_water_balance=$village_water_electric_balance;
                $is_use_village_hot_water_balance=true;
            }elseif ($village_order_type_flag=='cold_water_balance'){
                $current_village_cold_water_balance=$village_water_electric_balance;
                $is_use_village_cold_water_balance=true;
            }elseif ($village_order_type_flag=='electric_balance'){
                $current_village_electric_balance=$village_water_electric_balance;
                $is_use_village_electric_balance=true;
            }
        }
		//================================使用平台余额================================
		if($can_use_system_balance && $use_system_balance && isset($now_user['now_money']) && $now_user['now_money'] > 0 && $online_pay_money > 0 && (!isset($now_order['use_platform_balance']) || $now_order['use_platform_balance'] == true)){
			if($now_user['now_money'] >= $online_pay_money){
				$show_pay_money = $online_pay_money;
				$current_system_balance = $online_pay_money;
				$online_pay_money = 0;
			}
			else{
				$show_pay_money = $online_pay_money - $now_user['now_money'];
				$online_pay_money = $online_pay_money - $now_user['now_money'];
				$current_system_balance = $now_user['now_money'];
			}
		}
		elseif($online_pay_money == '0'){
			$use_system_balance = 0;
		}
		
		//================================输出================================
		$symbol = cfg('Currency_symbol') ?? '￥';
		$output = [
			'order_info' => [
				'order_type' => $order_type,
				'order_id' => $order_id,
				'order_no' => $now_order['order_no'],
				'order_money' => $order_money,
				'show_pay_money' => get_format_number($show_pay_money),
				'symbol' => $symbol,
				'title' => $now_order['title'],
				'city_id' => $now_order['city_id'],
				'mer_id' => $now_order['mer_id'],
				'village_id' => $now_order['village_id'] ?? 0,
				'store_id' => $now_order['store_id'],
				'business_order_sn' => $now_order['business_order_sn'] ?? '',
                'goods_desc' => $now_order['goods_desc'] ?? '',
                'uid'   => $now_order['uid'],
			],
			'time_remaining' => $now_order['time_remaining'],
			'user_info' => [
				'uid' => $now_user ? $now_user['uid'] : '',
				'openid' => $now_user ? $now_user['openid'] : '',
				'wxapp_openid' => $now_user ? $now_user['wxapp_openid'] : '',
				'alipay_uid' => $now_user ? $now_user['alipay_uid'] : '',
				'appPackName' => $appPackName ?? '',
                'appPackSign' => $appPackSign ?? '',
                'appBundleId' => $appBundleId ?? '',
			],
			'merchant_balance' => [
				'display' => $now_user && $merchant_balance > 0 && $order_money > 0 ? true : false,
				'money' => $merchant_balance ?? 0,
				'symbol' => $symbol,
				'switch' => $use_merchant_balance == 1 ? true : false
			],
			'system_balance' => [
				'display' => $now_user && $now_user['now_money'] > 0 && $order_money > 0 && $can_use_system_balance ? true : false,
				'money' => $now_user['now_money'] ?? 0,
				'symbol' => $symbol,
				'switch' => $use_system_balance == 1 ? true : false
			],
            'village_balance' => [
                'display' => $is_use_village_balance && $now_village_user && $now_village_user['current_money'] > 0 && $order_money > 0 && $now_village_user['can_use_village_balance'] ? true : false,
                'money' => $now_village_user['current_money'] ?? 0,
                'symbol' => $symbol,
                'switch' => $use_village_balance == 1 ? true : false
            ],
            'village_hot_water_balance' => [
                'display' => $is_use_village_hot_water_balance && $now_village_user && $now_village_user['hot_water_balance'] > 0 && $order_money > 0  ? true : false,
                'money' => $now_village_user['hot_water_balance'] ?? 0,
                'symbol' => $symbol,
                'switch' => $use_village_hot_water_balance == 1 ? true : false
            ],
            'village_cold_water_balance' => [
                'display' =>$is_use_village_cold_water_balance && $now_village_user && $now_village_user['cold_water_balance'] > 0 && $order_money > 0  ? true : false,
                'money' => $now_village_user['cold_water_balance'] ?? 0,
                'symbol' => $symbol,
                'switch' => $use_village_cold_water_balance == 1 ? true : false
            ],
            'village_electric_balance' => [
                'display' => $is_use_village_electric_balance && $now_village_user && $now_village_user['electric_balance'] > 0 && $order_money > 0  ? true : false,
                'money' => $now_village_user['electric_balance'] ?? 0,
                'symbol' => $symbol,
                'switch' => $use_village_electric_balance == 1 ? true : false
            ],
			'qiye_balance' => [
				'display' => $now_user && $qiye_balance > 0 && $order_money > 0 ? true : false,
				'money' => $qiye_balance ?? 0,
				'symbol' => $symbol,
				'switch' => $use_qiye_balance == 1 ? true : false
			],
			'user_score' => [
				'display' => $score_display && $current_score_use > 0 && $order_money > 0 ? true : false,
				'score' => $now_user['score_count'] ?? 0,
				'order_score' => $current_score_use,
				'order_deduct' => $current_score_deducte,
				'symbol' => $symbol,
				'score_alias' => cfg('score_name'),
				'switch' => $use_user_score == 1 ? true : false
			],
			'employee_balance' => [
				'display' => $now_user && $employee_balance > 0 && $order_money > 0 ? true : false,
				'money' => $employee_balance ?? 0,
				'symbol' => $symbol,
				'switch' => $use_employee_balance == 1 ? true : false
			],
			'employee_score' => [
				'display' => $now_user && $employee_score > 0 && $order_money > 0 ? true : false,
				'money' => $employee_score ?? 0,
				'symbol' => $symbol,
				'switch' => $use_employee_score == 1 ? true : false
			],
			'pay_types' => $online_pay_money > 0 ? $pay_types : [],
			'pay_info' => [
				'online_pay_money' 			=> get_format_number($online_pay_money),
				'current_score_use' 		=> $current_score_use,
				'current_score_deducte' 	=> get_format_number($current_score_deducte),
				'current_score_use_ed' 		=> (float)$current_score_use_ed,
				'current_score_deducte_ed' 	=> get_format_number($current_score_deducte_ed),
				'current_system_balance' 	=> get_format_number($current_system_balance),
                'current_village_balance' 	=> get_format_number($current_village_balance),
				'current_merchant_balance' 	=> get_format_number($current_merchant_balance),
				'current_merchant_give_balance' => get_format_number($current_merchant_give_balance),
				'current_qiye_balance' 		=> get_format_number($current_qiye_balance),
				'current_employee_balance' 	=> get_format_number($current_employee_balance),
				'current_employee_score_deducte' 	=> get_format_number($current_employee_score_deducte),
				'select_pay_type'			=> $online_pay_money > 0 ? $select_pay_type : '',
				'employee_card_user_id'		=> $employee_card_user_id ?: 0,
                'current_village_hot_water_balance' => get_format_number($current_village_hot_water_balance),
                'current_village_cold_water_balance' => get_format_number($current_village_cold_water_balance),
                'current_village_electric_balance' => get_format_number($current_village_electric_balance),
			]
		];
		//当业务端指定不使用余额（平台余额，商家余额）时，支付中心不展示此模块
		if(isset($now_order['use_platform_balance']) && $now_order['use_platform_balance'] == false){
			$output['system_balance']['display'] = false;
		}
		if(isset($now_order['use_merchant_balance']) && $now_order['use_merchant_balance'] == false){
			$output['merchant_balance']['display'] = false;
			$output['qiye_balance']['display'] = false;
		}
		if(isset($now_order['use_score']) && $now_order['use_score'] == false){
			$output['user_score']['display'] = false;
		}
		foreach ($output['pay_types'] as $key => $value) {
			$output['pay_types'][$key]['select'] = false;
			if($value['name'] == $select_pay_type){
				$output['pay_types'][$key]['select'] = true;
			}
		}
		fdump_api([$output],'pay_0224',1);
		return $output;
	}

	public function getTianqueUrl(){
		$mno 	= request()->param('mno');
		if(empty($mno)) die('no mno');
		$TianqueService = new TianqueService;
		$res = $TianqueService->getUrl($mno);
		if(isset($res['retUrl']) && $res['retUrl'] != ''){
			echo json_encode(['url'=>$res['retUrl']]);
		}
		elseif ($res['bizMsg'] == '该商户已签约, 请勿重复签约') {
			echo json_encode(['url'=>'', 'already' =>1]);
		}
		else{
			echo json_encode(['url'=>'']);	
		}
			exit;
	}

	public function getTianqueInfo(){
		$out_trade_no 	= request()->param('out_trade_no');
		if(empty($out_trade_no)){
			return api_output(0, ['money' => 0, 'url' => '']);
		}
		$pay = new PayService();
		$order = $pay->getByExtendsField([['extends_field_tianque', '=', $out_trade_no]]);
		if(empty($order)){
			return api_output(0, ['money' => 0, 'url' => '']);
		}
		$money = get_format_number($order['money']/100);
		switch ($order['business']) {
            case 'shop':
                #  这里调用外卖的service
                break;
            case 'dining':
                #  这里调用餐饮的service
            	$business = new \app\foodshop\model\service\order\DiningOrderPayService;
                break;
            case 'package_room':
				$business = new \app\community\model\service\PackageRoomOrderService;
				break;
			case 'package':
				$business = new \app\community\model\service\PackageOrderService;
				break;
			case 'village_pay':
				$business = new \app\community\model\service\VillagePayOrderService;
				break;
			case 'mall':
				$business = new \app\mall\model\service\MallOrderCombineService;
				break;
			case 'shop':
				$business = new \app\shop\model\service\order\ShopOrderPayService;
				break;

			case 'house_meter':
				$business = new \app\community\model\service\HouseMeterPayService;
                break;
			case 'reward':
				$business = new \app\reward\model\service\order\RewardOrderPayService;
				break;

            case 'pile':
                $business = new \app\community\model\service\PileOrderPayService;
                break;
			case 'village_new_pay':
				$business = new \app\community\model\service\NewPayService();
				break;
			case 'employee_card':// 员工卡充值
				$business = new \app\employee\model\service\EmployeeCardOrderService();
				break;
			case 'lifetools'://体育健身
				$business = new \app\life_tools\model\service\LifeToolsOrderService();
				break;
			case 'lifetoolscard'://景区次卡
				$business = new \app\life_tools\model\service\LifeToolsCardOrderService();
				break;
            default:
                break;
        }
        $url = $business->getPayResultUrl($order['business_order_id']);
        return api_output(0, ['money' => $money, 'url' => is_array($url) ? $url['redirect_url'] : $url]);
	}


	/**
	 * 工行支付中转支付页面
	 *
	 * @author: zt
	 * @date: 2022/08/25
	 */
	public function icbc()
	{
		$orderNo = request()->get('order_no');
		if (empty($orderNo)) {
			return "非法请求";
		}
		return \think\facade\Cache::get($orderNo);
	}
}