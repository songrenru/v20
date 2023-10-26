<?php
/**
 * 环境service的基类
 * add by lumin
 * 2020-05-25
 */

namespace app\pay\model\service\env;

use app\community\model\service\HouseVillageService;
use app\pay\model\db\PayType;
use app\pay\model\db\PayChannel;
use app\pay\model\db\PayChannelParam;
use app\merchant\model\service\MerchantService;
use app\merchant\model\service\MerchantStoreService;
use app\pay\model\service\channel\ScrcuService;
use app\pay\model\service\channel\TianqueService;
use app\pay\model\service\channel\ChinaumsService;
use Exception;

class EnvService{
	private $city_id;//城市自有支付
	private $mer_id;//商家自有支付
	private $store_id;//门店自有支付（堂扫业务具备，
	private $village_id;// 社区id
    private $wxapp_own_village_id;// 物业自由小程序
	public function __construct($city_id = 0, $mer_id = 0, $store_id = 0, $village_id = 0, $wxapp_own_village_id = 0){
		$this->city_id 		        = $city_id;
		$this->mer_id 		        = $mer_id;
		$this->store_id		        = $store_id;
        $this->village_id	        = $village_id;
        $this->wxapp_own_village_id	= $wxapp_own_village_id;
	}

	/**
	 * 获取环境service
	 * @return Object 环境service
	 */
	public function getEnvService($point_agent = ''){
		$_agent = $point_agent ? $point_agent : request()->agent;
		switch ($_agent) {
			case 'h5'://普通手机浏览器
				return new H5Service($this->city_id, $this->mer_id, $this->store_id, $this->village_id);
				break;
			case 'wechat_h5'://微信端（网页）
				return new WechatService($this->city_id, $this->mer_id, $this->store_id, $this->village_id);
				break;
			case 'wechat_mini'://微信小程序端
				return new WechatMiniService($this->city_id, $this->mer_id, $this->store_id, $this->village_id, $this->wxapp_own_village_id);
				break;
			case 'alipay'://支付宝端（网页）
				return new AlipayService($this->city_id, $this->mer_id, $this->store_id, $this->village_id);
				break;
			case 'alipay_mini'://支付宝小程序
				return new AlipayMiniService($this->city_id, $this->mer_id, $this->store_id, $this->village_id);
				break;
			case 'iosapp'://app端（ios ）
			case 'androidapp'://app端（ 安卓）
				return new AppService($this->city_id, $this->mer_id, $this->store_id, $this->village_id);
				break;
            case 'douyin_mini'://抖音小程序
                return new DouyinService($this->city_id, $this->mer_id, $this->store_id, $this->village_id);
                break;
			default:
				return null;
		}
	}

	/**
	 * 获取所有支持的支付方式
	 * @param int $city_id 城市ID
	 * @param int $mer_id 商家ID
	 * @param int $store_id 城市ID
	 * @return Array [
	 *         name: 'alipay',//支付方式标识
	 *         text: '支付宝支付',//显示文字
	 *         icon: '',显示的图标地址
	 * ]
	 */
	public function payTypeList(){
		//获取所有支付方式
		$type_db = new PayType;
		// $where = [
		// 	'switch' => 1
		// ];
		$all_pay_type = $type_db->getList()->toArray();
		//获取所有通道
		$channel_db = new PayChannel;
		$where1 = [
			['pay_type', 'in', ["wechat","alipay","douyin"]],
			['env', '=', $this->env],
			['switch', '=', 1],
		];

		// 其他支付方式不需要区别哪个环境
		$where2 = [
			['pay_type', 'not in', ["wechat","alipay","douyin"]],
			['switch', '=', 1],
		];
		$all_pay_channel = $channel_db->whereOr([$where1, $where2])->select()->toArray();

		//合并数据集合中的所有支付方式 
		$pay_types = [];
		$is_find_alipay=false;
		foreach ($all_pay_channel as $key => $value) {

			if($value['pay_type'] == 'scrcuCash' && in_array($this->env,['app','iosapp','androidapp'])){// 农信支付暂不支持app
				continue;
			}
			if ($this->wxapp_own_village_id && $this->env == $value['env'] && $value['property_id'] != $this->wxapp_own_village_id) {
                continue;
            }
            if($value['pay_type'] == 'farmersbankpay' && !in_array($this->env,['wechat_mini'])){// 仪征农商行支付只支持小程序支付
                continue;
            }
            $pay_types[$value['pay_type']] = $value;
			if($value['pay_type']=='alipay'){
                $is_find_alipay=true;
            }
		}
        fdump_api($pay_types, '$pay_types');
		if($this->env=='wechat' && !$is_find_alipay){
		    $whereArr=[
                ['pay_type', '=', "alipay"],
                ['env', '=', 'h5'],
                ['channel', '=', 'alipay'],
                ['switch', '=', 1],
            ];
            $tmpChannel=$channel_db->getOne($whereArr);
            if($tmpChannel && !$tmpChannel->isEmpty()){
                $alipayChannel=$tmpChannel->toArray();
                $pay_types['alipay']=$alipayChannel;
            }
        }
		$return = [];
		//获取返回数据
		foreach ($all_pay_type as $key => $value) {

			//工商银行支付目前仅支持社区业务
			if ($value['code'] == 'icbc') {
				if (empty($this->village_id)) {
					continue;
				}
				$icbcSubMerLists = (new \app\community\model\service\HouseIcbcMerchantService())->getByVillageId($this->village_id);
				if (empty($icbcSubMerLists)) {
					continue;
				}
			}

			if(isset($pay_types[$value['code']]) && $value['switch'] == '1'){
				$temp = [
					'name' => $value['code'],
					'text' => $value['text'],
					'icon' => $value['icon'],
					'discount_tips' => $pay_types[$value['code']]['discount_tips'],
					'service_charge' => $pay_types[$value['code']]['service_charge'],
					'rate' => $pay_types[$value['code']]['rate'],
				];
				if ($value['code'] == 'ebankpay') {
                    $temp['payBankID'] = '810';
                    $temp['SDKEnv'] = 'ST'; //IT ST SIT SIT2 UAT PROD
                }
				$return[$value['code']] = $temp;
                //hqpay环球汇通聚合支付
                if ($value['code'] == 'hqpay') {
                    switch ($this->env) {
                        case 'app':
                        case 'h5':
                            $return['hqpay_wx'] = [
                                'name' => 'hqpay_wx',
                                'text' => '环球汇通-微信支付',
                                'icon' => str_replace('hqpay.png', 'hqpay_wx.png', $value['icon']),
                                'discount_tips' => '',
                                'service_charge' => '',
                                'rate' => '',
                            ];
                            $return['hqpay_al'] = [
                                'name' => 'hqpay_al',
                                'text' => '环球汇通-支付宝支付',
                                'icon' => str_replace('hqpay.png', 'hqpay_al.png', $value['icon']),
                                'discount_tips' => '',
                                'service_charge' => '',
                                'rate' => '',
                            ];
                            break;
                        case 'wechat_mini':
                        case 'wechat':
                            $return['hqpay_wx'] = [
                                'name' => 'hqpay_wx',
                                'text' => '环球汇通-微信支付',
                                'icon' => str_replace('hqpay.png', 'hqpay_wx.png', $value['icon']),
                                'discount_tips' => '',
                                'service_charge' => '',
                                'rate' => '',
                            ];
                            break;
                        case 'alipay_mini':
                        case 'alipay':
                            $return['hqpay_al'] = [
                                'name' => 'hqpay_al',
                                'text' => '环球汇通-支付宝支付',
                                'icon' => str_replace('hqpay.png', 'hqpay_al.png', $value['icon']),
                                'discount_tips' => '',
                                'service_charge' => '',
                                'rate' => '',
                            ];
                            break;
                    }
                    unset($return['hqpay']);
                }
			}
			$all_types[$value['code']] = $value;
		}
		//随行付分账服务商（该服务商对接了微信支付和支付宝支付，所以要都展示出来）
		$return = (new TianqueService)->getPayTypes($return, $all_types);

		// 四川农信支付 必须设置商户号
		$sxf = (new ScrcuService())->getParams($this->mer_id, $this->village_id);
		if(empty($sxf)){
			unset($return['scrcuCash']);
		}
        if (isset($return['hqpay'])) {
            unset($return['alipay'], $return['wechat']);
        }
		return array_values($return);
	}

	/**
	 * 获取支付通道所需的支付参数
     * @param  $pay_type 支付方式  如：alipay、wechat...
     * @param  $business 支付的业务
	 * @return Array [
	 *         channel: 'superpay',//通道名称
	 *         config: [//通道对应的支付参数
	 *         		mch_id:'1232135555',
	 *         		secret_key:'4676431311131312233'
	 *         ]
	 * ]
	 */
	public function getChannel($pay_type, $business=''){
		if(empty($pay_type)) return [];
		
		//获取通道
		$channel_db = new PayChannel;
		$where = [
			'switch' => 1,
			'pay_type' => $pay_type
		];
        if($pay_type=='alipay' && $this->env=='wechat'){
            $where['env'] = 'h5';
        }else if(in_array($pay_type,["wechat","alipay"])){ // 其他支付方式不需要区别哪个环境
			$where['env'] = $this->env;
		}

		$pay_channels = $channel_db->getList($where)->toArray();
		if(empty($pay_channels)) return [];

		$pay_channel = [];
		$is_own = 0;
		if($this->store_id > 0){//门店自有支付
			foreach ($pay_channels as $key => $value) {
				if($value['store_id'] == $this->store_id){
					$pay_channel = $value;
					$is_own = 2;
					break;
				}
			}
		}
		if($this->mer_id > 0 && cfg('merchant_ownpay') > 0){//商户自有支付
			foreach ($pay_channels as $key => $value) {
				if($value['mer_id'] == $this->mer_id){
					$pay_channel = $value;
					$is_own = 1;
					break;
				}
			}
		}
        if($this->city_id > 0 && cfg('city_ownpay') > 0){//城市自有支付
            foreach ($pay_channels as $key => $value) {
                if($value['city_id'] == $this->city_id){
                    $pay_channel = $value;
                    $is_own = 3;
                    break;
                }
            }
        }
        if($this->wxapp_own_village_id > 0){//物业自有支付
            foreach ($pay_channels as $key => $value) {
                if($value['property_id'] == $this->wxapp_own_village_id){
                    $pay_channel = $value;
                    $is_own = 6;
                    break;
                }
            }
        }

		foreach ($pay_channels as $key => $value) {
			if($value['channel'] == 'scrcu' || $value['channel'] == 'scrcuCash'){// 微信支付四川农信通道 自有支付
				
				if($value['channel'] == 'scrcu' && $pay_type == 'alipay' && $business != 'scanpay'){// 支付宝只支持扫码付
					unset($pay_channels[$key]);
					continue;
				}

				if($value['channel'] == 'scrcu' && in_array($this->env,['app','iosapp','androidapp'])){// 四川农信通道不支持app
					unset($pay_channels[$key]);
					continue;
				}			

				
				$sxf = (new ScrcuService())->getParams($this->mer_id, $this->village_id);
				if($sxf){
					$is_own = 1;
					$pay_channel = $value;
				}else{
					$pay_channel = $value;
					//unset($pay_channels[$key]);
				}
				break;
			} else if($value['channel'] == 'hqpay') {// 微信支付环球汇通通道 自有支付
                if(($pay_type == 'alipay' || $pay_type == 'wechat') && $business != 'scanpay'){// 支付宝只支持扫码付
                    unset($pay_channels[$key]);
                    continue;
                }
                $pay_channel = $value;
                break;
            }else if($value['channel'] == 'wenzhouBank' && $this->env == 'wechat_mini') {// 温州银行只支持小程序端口
                $pay_channel = $value;
                break;
            }
		}

		if(empty($pay_channel)){
			$pay_channel = $pay_channels[0];//都没有配置的话，就默认第一个
		}
			
		if($pay_channel['channel'] == 'scrcuCash'){// 四川农信收银台支付方式
			$sxf = (new ScrcuService())->getParams($this->mer_id, $this->village_id);
            fdump_api(['四川农信收银台支付方式', $sxf],'$sxf');
			if(empty($sxf)){
				throw new \think\Exception("商家未配置商户号！");	
			}
		}

		//随行付分账服务商
        if ($this->judgeOpenTianquetech($business)) {
            $sxf = (new TianqueService)->getParams($this->mer_id);
            fdump_api(['随行付分账服务商', $sxf],'$sxf');
            if($sxf){
                return $sxf;
            }
        }

		//银联分账服务商
        if ($this->judgeOpenChinaums()) {
            $sxf = (new ChinaumsService)->getParams($this->mer_id,$this->village_id);
            fdump_api(['银联分账服务商', $sxf],'$sxf');
            if($sxf){
                return $sxf;
            }
        }

		//获取通道对应参数
		$pay_channel_param = new PayChannelParam;
		$where = [
			'channel_id' => $pay_channel['id']
		];
		$param = $pay_channel_param->getList($where)->toArray();
		$config = [];
		foreach ($param as $key => $value) {
			$config[$value['name']] = $value['value'];
		}
		//配置服务商子商户支付
		if (!$this->wxapp_own_village_id && cfg('open_sub_mchid') && $pay_channel['channel'] == 'wechat') {
			$is_sub_mchid = false;
			$nowStore = (new MerchantStoreService)->getStoreByStoreId($this->store_id);
			$nowMerchant = (new MerchantService)->getMerchantByMerId($this->mer_id);
			if ($this->env != 'app' && $this->store_id != 0 && isset($nowStore['open_sub_mchid']) && $nowStore['open_sub_mchid'] && $nowStore['sub_mch_id'] > 0) {
				$config['sub_mch_id'] = $nowStore['sub_mch_id'];//服务商子商户号
				$config['sub_appid'] = $nowStore['sub_appid'];//特约商户在微信开放平台上申请的APPID
				$config['can_refund'] = $nowStore['sub_mch_refund'];// 是否开启子商户支付退款
				$config['sub_mch_discount'] = $nowStore['sub_mch_discount'];// 是否开启使用平台优惠
				$config['sub_mch_sys_pay'] = $nowStore['sub_mch_sys_pay']; // 是否开启使用平台支付
				$config['open_weixin_profit_sharing'] = cfg('open_weixin_profit_sharing') && $nowStore['open_weixin_profit_sharing'] ? 1 : 0;// 是否开启分账功能

				$is_own = 3;
				$is_sub_mchid = true;

			} else if ($this->env != 'app' && isset($nowMerchant['open_sub_mchid']) && $nowMerchant['open_sub_mchid'] && $nowMerchant['sub_mch_id'] > 0) {
				$config['sub_mch_id'] = $nowMerchant['sub_mch_id'];
				$config['sub_appid'] = $nowMerchant['sub_appid'];
				$config['can_refund'] = $nowMerchant['sub_mch_refund'];// 是否开启子商户支付退款
				$config['sub_mch_discount'] = $nowMerchant['sub_mch_discount'];// 是否开启使用平台优惠
				$config['sub_mch_sys_pay'] = $nowMerchant['sub_mch_sys_pay']; // 是否开启使用平台支付		
				$config['open_weixin_profit_sharing'] = cfg('open_weixin_profit_sharing') && $nowMerchant['open_weixin_profit_sharing'] ? 1 : 0;// 是否开启分账功能

				$is_own = 2;
				$is_sub_mchid = true;
			} else if ($this->env != 'app' && $this->village_id) {// 社区
				$nowVillage = (new HouseVillageService)->getHouseVillageByVillageId($this->village_id);
				if ($nowVillage['sub_mch_id'] > 0) {
					$is_own = 5;
					$config['sub_mch_id'] = $nowVillage['sub_mch_id'];
					$config['can_refund'] = $nowVillage['sub_mch_refund'];// 是否开启子商户支付退款
					$config['sub_mch_discount'] = $nowVillage['sub_mch_discount'];// 是否开启使用平台优惠
					$config['sub_mch_sys_pay'] = $nowVillage['sub_mch_sys_pay']; // 是否开启使用平台支付
					$is_sub_mchid = true;
				}
			} 

			if ($is_sub_mchid) {
				switch (request()->agent) {
					case 'wechat_h5'://微信端
						$config['pay_weixin_mchid'] = cfg('pay_weixin_sp_mchid');
						$config['pay_weixin_key'] = cfg('pay_weixin_sp_key');
						$config['pay_weixin_client_cert'] = cfg('pay_weixin_sp_client_cert');
						$config['pay_weixin_client_key'] = cfg('pay_weixin_sp_client_key');
						$config['pay_weixin_mch_name'] = cfg('pay_weixin_sp_mch_name');
						break;
					case 'iosapp':
					case 'androidapp':
						$config['pay_weixinapp_mchid'] = cfg('pay_weixin_sp_mchid');
						$config['pay_weixinapp_key'] = cfg('pay_weixin_sp_key');
						$config['pay_weixinapp_client_cert'] = cfg('pay_weixin_sp_client_cert');
						$config['pay_weixinapp_client_key'] = cfg('pay_weixin_sp_client_key');
						$config['pay_weixinapp_mch_name'] = cfg('pay_weixin_sp_mch_name');
						break;
					case 'wechat_mini':
						$config['pay_wxapp_mchid'] = cfg('pay_weixin_sp_mchid');
						$config['pay_wxapp_key'] = cfg('pay_weixin_sp_key');
						$config['pay_wxapp_cert'] = cfg('pay_weixin_sp_client_cert');
						$config['pay_wxapp_cert_key'] = cfg('pay_weixin_sp_client_key');
						$config['pay_wxapp_mch_name'] = cfg('pay_weixin_sp_mch_name');
						break;
					case 'h5':
						$config['pay_weixinh5_mchid'] = cfg('pay_weixin_sp_mchid');
						$config['pay_weixinh5_key'] = cfg('pay_weixin_sp_key');
						$config['pay_weixinh5_client_cert'] = cfg('pay_weixin_sp_client_cert');
						$config['pay_weixinh5_client_key'] = cfg('pay_weixin_sp_client_key');
						$config['pay_weixinh5_mch_name'] = cfg('pay_weixin_sp_mch_name');
						break;
				}
				if($business == 'scanpay'){
					$config['pay_weixin_mchid'] = cfg('pay_weixin_sp_mchid');
					$config['pay_weixin_key'] = cfg('pay_weixin_sp_key');
					$config['pay_weixin_client_cert'] = cfg('pay_weixin_sp_client_cert');
					$config['pay_weixin_client_key'] = cfg('pay_weixin_sp_client_key');
					$config['pay_weixin_mch_name'] = cfg('pay_weixin_sp_mch_name');
				}
			}
		}

		if(isset($sxf) && $sxf){
			$config = array_merge($sxf['config'], $config);
		}
        fdump_api([$pay_channel, $config],'$pay_channel1');


		if ($pay_channel['channel'] == 'ebankpay' && $this->mer_id) {
			$nowMerchant = (new MerchantService)->getMerchantByMerId($this->mer_id);
			if (empty($nowMerchant['ebankpay_smchid'])) {
				throw new \think\Exception("商家未配置子商户号！");
			}
			$config['pay_ebankpay_smchid'] = $nowMerchant['ebankpay_smchid'];
		}
		
		//工商银行支付目前仅支持社区业务
		if ($pay_channel['channel'] == 'icbc') {
			if (empty($this->village_id)) {
				throw new \think\Exception("业务不支持工行支付");
			}
			$icbcSubMerLists = (new \app\community\model\service\HouseIcbcMerchantService())->getByVillageId($this->village_id);
			if (empty($icbcSubMerLists)) {
				throw new \think\Exception("未配置子商户号！");
			}
			$config['sub_merid'] = $icbcSubMerLists[0]['mer_no'];
		}

		return [
			'channel' => $pay_channel['channel'],
			'is_own' => $is_own,
			'config' => $config
		];
	}

	public function judgeOpenTianquetech($business) {
        $judge = false;
        if(!in_array($business,['package']) && in_array($this->env, ['alipay', 'wechat', 'wechat_mini']) && cfg('open_tianquetech') == '1'){//目前只对接这几个通道
            if ($this->wxapp_own_village_id > 0 && in_array($this->env, ['wechat_mini'])) {
                // todo 目前物业自由小程序不走分账相关
                $judge = false;
            } else {
                $judge = true;
            }
        }
        return $judge;
    }
	
    /**
     * 判断银联分账服务商
     * @return bool
     */
	public function judgeOpenChinaums() {
	    $judge = false;
        if(in_array($this->env, ['app', 'wechat', 'wechat_mini']) && cfg('open_chinaums') == '1') {//目前只对接这几个通道
            fdump_api($judge,'$judge1');
            if ($this->wxapp_own_village_id > 0 && in_array($this->env, ['wechat_mini'])) {
                fdump_api($judge,'$judge2');
                // todo 目前物业自由小程序不走分账相关
                $judge = false;
            } else {
                fdump_api($judge,'$judge3');
                $judge = true;
            }
        }
        fdump_api($judge,'$judge4');
        return $judge;
    }
}