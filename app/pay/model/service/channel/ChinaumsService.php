<?php
/**
 * 
 * 银联分账
 */

namespace app\pay\model\service\channel;
use app\merchant\model\service\MerchantService;
use app\community\model\service\PayService as communityPayService;
use app\pay\model\service\PayService;

class ChinaumsService{
	private $agent = '';
	private $config = [];//配置参数

	public function __construct($agent = '', $config = []){
		$this->agent = $agent;
		$this->config = $config;
	}

	public function pay($order_no, $money){
		if(empty($order_no) || empty($money)){
			throw new \think\Exception("订单ID或支付金额必填！");	
		}
		switch ($this->agent) {
			case 'wechat_h5'://微信端
			case 'h5':
				if($this->config['pay_type'] == 'wechat'){
					return $this->Wechatpay($order_no, $money);
				}
				break;
			case 'wechat_mini':
				return $this->Wechatmini($order_no, $money);
				break;
			case 'iosapp':
			case 'androidapp':
				if($this->config['pay_type'] == 'wechat'){
					return $this->Wechatapp($order_no, $money);
				}
				if($this->config['pay_type'] == 'alipay'){
					return $this->Alipayapp($order_no, $money);
				}
				break;
			default:
				throw new \think\Exception("当前端口未对接，不能使用");
				break;
		}
	}

	/**
	 * 获取当前通道支持的（已对接）支付方式
	 * @return [type] [description]
	 */
	public function getPayTypes($return = [], $pay_types = []){
		if(cfg('open_chinaums') != '1') return $return;

		$temp = [
			'wechat' => [
				'name' => $pay_types['wechat']['code'],
				'text' => $pay_types['wechat']['text'],
				'icon' => $pay_types['wechat']['icon'],
				'discount_tips' => '',
				'service_charge' => '',
				'rate' => ''
			],
			'alipay' => [
				'name' => $pay_types['alipay']['code'],
				'text' => $pay_types['alipay']['text'],
				'icon' => $pay_types['alipay']['icon'],
				'discount_tips' => '',
				'service_charge' => '',
				'rate' => ''
			]
		];
		if(request()->agent == 'wechat_mini' || request()->agent == 'wechat_h5'){//先屏蔽
			unset($temp['alipay']);
		}
		if(request()->agent == 'alipay' || request()->agent == 'alipay_mini'){//先屏蔽
			unset($temp['wechat']);
		}
		if(request()->agent == 'h5'){//先屏蔽
			unset($temp['wechat']);
		}
		return array_merge($return, $temp);
	}

	/**
	 * 获取当前通道的支付参数
	 */
	public function getParams($mer_id = 0,$village_id=0){
		if(cfg('open_chinaums') != '1') return false;
        $sub_mer_no = '';
        $is_own = 0;
        if($mer_id){
            $now_merchant = (new MerchantService)->getMerchantByMerId($mer_id);
            $sub_mer_no = $now_merchant['chinaums_merno'] ?? '';
            if($sub_mer_no){
                $is_own = 1;
            }
        }elseif ($village_id){
            $community = (new communityPayService)->getConfig($village_id);
            $sub_mer_no = $community['mid'] ?? '';
            if($sub_mer_no){
                $is_own = 5;
            }
        }
		//如果商家没配置子商户则不走银联
		if(empty($sub_mer_no)){
			return [];
		}

		return [
			'channel' => 'chinaums',
			'is_own' => $is_own,
			'config' => [//目前先写死（然后对本脚本加密）
				'chinaums_mid' => cfg('chinaums_mid'),
				'chinaums_appid' => cfg('chinaums_appid'),
				'chinaums_appkey' => cfg('chinaums_appkey'),
				'chinaums_tid' => cfg('chinaums_tid'),
				'chinaums_msgsrcid' => cfg('chinaums_msgsrcid'),
				'chinaums_md5key' => cfg('chinaums_md5key'),
				'gateway' => 'https://api-mop.chinaums.com',
				'chinaums_mid_wx' => cfg('chinaums_mid_wx'),
				'chinaums_mid_wxapp' => cfg('chinaums_mid_wxapp'),
				'chinaums_mid_app' => cfg('chinaums_mid_app'),
				'sub_mer_no' => $sub_mer_no
			]
		];
	}

	//生成银联账单编号（因为他们有特别的要求，必须用他们的）
	public function createOrderNo($order_no, $ret = false){
		if(!$ret){
			$ori_order_no = $this->config['chinaums_msgsrcid'].$order_no;
		}
		else{
			$ori_order_no = str_replace($this->config['chinaums_msgsrcid'], '', $order_no);
		}
		return $ori_order_no;
	}

	//公众号微信支付
	public function Wechatpay($order_no, $money){
		if(empty($order_no) || empty($money)){
			throw new \think\Exception("订单ID或支付金额必填！");	
		}
		if(empty($this->config['openid'])){
			throw new \think\Exception("未获取到openid，无法调起支付");
		}

		$url = $this->config['gateway'].'/v1/netpay/wx/unified-order';
		$merOrderId = $this->createOrderNo($order_no);
		$post = [
			'requestTimestamp' => date('Y-m-d H:i:s'),
			'merOrderId' => $merOrderId,
			'mid' => $this->config['chinaums_mid_wx'] ? $this->config['chinaums_mid_wx']:$this->config['chinaums_mid'] ,
			'tid' => $this->config['chinaums_tid'],
			'instMid' => 'YUEDANDEFAULT',
			'totalAmount' => get_format_number($money * 100),
			'notifyUrl' => (String) url('chinaums_notify', [], false, true),
			'subOpenId' => $this->config['openid'],
			'tradeType' => 'JSAPI',			
		];
		if(!empty($this->config['sub_mer_no'])){
			if(cfg('chinaums_platform_sub_mchid')){
				$post['divisionFlag'] = true;
				$post['platformAmount'] = 0;
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					],
					[
						'mid' => cfg('chinaums_platform_sub_mchid'),
						'totalAmount' => $this->config['platform_get'],
					],
				];
			}else{
				$post['divisionFlag'] = true;
				$post['platformAmount'] = $this->config['platform_get'];
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					]
				];
			}
		}
		$result = $this->postReq($url, $post);
		if($result['errCode'] != 'SUCCESS'){
			throw new \think\Exception($result['errMsg']);	
		}
		return [
				'type' => 'jssdk',
				'merchant_get' => $this->config['merchant_get'],
				'platform_get' => $this->config['platform_get'],
				'info' => $result['jsPayRequest']
			];
	}

	//小程序微信支付
	public function Wechatmini($order_no, $money){
		if(empty($order_no) || empty($money)){
			throw new \think\Exception("订单ID或支付金额必填！");	
		}
		if(empty($this->config['openid'])){
			throw new \think\Exception("未获取到openid，无法调起支付");
		}
		$url = $this->config['gateway'].'/v1/netpay/wx/unified-order';
		$merOrderId = $this->createOrderNo($order_no);
		$post = [
			'requestTimestamp' => date('Y-m-d H:i:s'),
			'merOrderId' => $merOrderId,
			'mid' => $this->config['chinaums_mid_wxapp'] ? $this->config['chinaums_mid_wxapp']:$this->config['chinaums_mid'] ,
			'tid' => $this->config['chinaums_tid'],
			'instMid' => 'MINIDEFAULT',
			'subAppId' => cfg("pay_wxapp_appid"),
			'totalAmount' => get_format_number($money * 100),
			'notifyUrl' => (String) url('chinaums_notify', [], false, true),
			'subOpenId' => $this->config['wxapp_openid'],
			'tradeType' => 'MINI',			
		];
		if(!empty($this->config['sub_mer_no'])){
			if(cfg('chinaums_platform_sub_mchid')){
				$post['divisionFlag'] = true;
				$post['platformAmount'] = 0;
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					],
					[
						'mid' => cfg('chinaums_platform_sub_mchid'),
						'totalAmount' => $this->config['platform_get'],
					],
				];
			}else{
				$post['divisionFlag'] = true;
				$post['platformAmount'] = $this->config['platform_get'];
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					]
				];
			}
		}
		$result = $this->postReq($url, $post);
		if($result['errCode'] != 'SUCCESS'){
			throw new \think\Exception($result['errMsg']);	
		}
		return [
			'type' => 'jssdk',
            'merchant_get' => $this->config['merchant_get'],
			'platform_get' => $this->config['platform_get'],
			'info' => json_encode($result['miniPayRequest']),
		];
	}

	//APP微信支付
	public function Wechatapp($order_no, $money){
		if(empty($order_no) || empty($money)){
			throw new \think\Exception("订单ID或支付金额必填！");	
		}
		$url = $this->config['gateway'].'/v1/netpay/wx/app-pre-order';
		$merOrderId = $this->createOrderNo($order_no);
		$post = [
			'requestTimestamp' => date('Y-m-d H:i:s'),
			'merOrderId' => $merOrderId,
			'mid' => $this->config['chinaums_mid_app'] ? $this->config['chinaums_mid_app']:$this->config['chinaums_mid'],
			'tid' => $this->config['chinaums_tid'],
			'subAppId' => cfg("pay_weixinapp_appid"),
			'instMid' => 'APPDEFAULT',
			'totalAmount' => get_format_number($money * 100),
			'notifyUrl' => (String) url('chinaums_notify', [], false, true),
			'tradeType' => 'APP',//微信必传APP			
		];
		if(!empty($this->config['sub_mer_no'])){
			if(cfg('chinaums_platform_sub_mchid')){
				$post['divisionFlag'] = true;
				$post['platformAmount'] = 0;
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					],
					[
						'mid' => cfg('chinaums_platform_sub_mchid'),
						'totalAmount' => $this->config['platform_get'],
					],
				];
			}else{
				$post['divisionFlag'] = true;
				$post['platformAmount'] = $this->config['platform_get'];
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					]
				];
			}
		}
		$result = $this->postReq($url, $post);
		if($result['errCode'] != 'SUCCESS'){
			throw new \think\Exception($result['errMsg']);	
		}
		return [
			'type' => 'sdk',
            'merchant_get' => $this->config['merchant_get'],
			'platform_get' => $this->config['platform_get'],
			'info' => $result['appPayRequest']
		];
	}

	//APP支付宝支付
	public function Alipayapp($order_no, $money){
		if(empty($order_no) || empty($money)){
			throw new \think\Exception("订单ID或支付金额必填！");	
		}
		$url = $this->config['gateway'].'/v1/netpay/trade/app-pre-order';
		$merOrderId = $this->createOrderNo($order_no);
		$post = [
			'requestTimestamp' => date('Y-m-d H:i:s'),
			'merOrderId' => $merOrderId,
			'mid' => $this->config['chinaums_mid_app'] ? $this->config['chinaums_mid_app']:$this->config['chinaums_mid'] ,
			'tid' => $this->config['chinaums_tid'],
			'instMid' => 'APPDEFAULT',
			'totalAmount' => get_format_number($money * 100),	
			'notifyUrl' => (String) url('chinaums_notify', [], false, true),	
		];
		if(!empty($this->config['sub_mer_no'])){
			if(cfg('chinaums_platform_sub_mchid')){
				$post['divisionFlag'] = true;
				$post['platformAmount'] = 0;
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					],
					[
						'mid' => cfg('chinaums_platform_sub_mchid'),
						'totalAmount' => $this->config['platform_get'],
					],
				];
			}else{
				$post['divisionFlag'] = true;
				$post['platformAmount'] = $this->config['platform_get'];
				$post['subOrders'] = [
					[
						'mid' => $this->config['sub_mer_no'],
						'totalAmount' => $this->config['merchant_get'],
					]
				];
			}
		}
		$result = $this->postReq($url, $post);
		if($result['errCode'] != 'SUCCESS'){
			throw new \think\Exception($result['errMsg']);	
		}
		return [
			'type' => 'sdk',
            'merchant_get' => $this->config['merchant_get'],
			'platform_get' => $this->config['platform_get'],
			'info' => $result['appPayRequest']
		];
	}

	//post请求
	public function postReq($url, $post_data){
		if(empty($url) || empty($post_data)){
			throw new \think\Exception("调用异常!");	
		}
		$json_post_data = json_encode($post_data);

		$timestamp = date("YmdHis",time());
		$nonce = md5(uniqid(microtime(true),true));
		$str = bin2hex(hash('sha256', $json_post_data, true));
		$appid = $this->config['chinaums_appid'];
		$appkey = $this->config['chinaums_appkey'];
		$signature = base64_encode(hash_hmac('sha256', "$appid$timestamp$nonce$str", $appkey, true));
		$authorization = "OPEN-BODY-SIG AppId=\"".$appid."\", Timestamp=\"".$timestamp."\", Nonce=\"".$nonce."\", Signature=\"".$signature."\"";


		$curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,1); 
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); 
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        $header = ['Content-type: application/json', 'Authorization:'.$authorization];
        // exit;
        if(!empty($header)){
            curl_setopt ( $curl, CURLOPT_HTTPHEADER, $header );
        }
        //请求时间
        $timeout = 30;
        curl_setopt ($curl, CURLOPT_CONNECTTIMEOUT, $timeout);
        if(is_array($post_data)){
            $params = json_encode($post_data);
        }
       
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($curl, CURLOPT_POSTFIELDS,$params);
        $data = curl_exec($curl);
        curl_close($curl);//关闭cURL会话
        fdump_sql([$url,$post_data,$data],'chinaums_req');
        if(empty($data)){
        	throw new \think\Exception("调用银联接口发生异常!");
        }
    	$return = json_decode($data,true);
    	if($return['errCode'] == 'SUCCESS'){
    		return $return;
    	}
    	else{
    		throw new \think\Exception(($return['errMsg'] ?? '').($return['errInfo'] ?? ''));
    	}
	}

	/**
	 * 异步通知
	 * @return [type] [description]
	 */
	public function notice(){
		return [
			'paid_money' => $_POST["totalAmount"],
			'paid_time' => time(),
			'transaction_no' => $_POST['targetOrderId']
		];
	}

	//查询
	public function query($order_no){
		if(empty($order_no)){
			throw new \think\Exception("订单ID或支付金额必填！");	
		}
		$url = $this->config['gateway'].'/v1/netpay/query';
		$merOrderId = $this->createOrderNo($order_no);
		$mid = '';
		switch ($this->agent) {
			case 'wechat_h5'://微信端
			case 'h5':
				if($this->config['pay_type'] == 'wechat'){
					$mid = $this->config['chinaums_mid_wx'] ? $this->config['chinaums_mid_wx']:$this->config['chinaums_mid'];
				}
				break;
			case 'wechat_mini':
				$mid = $this->config['chinaums_mid_wxapp'] ? $this->config['chinaums_mid_wxapp']:$this->config['chinaums_mid'] ;
				
				break;
			case 'iosapp':
			case 'androidapp':
				$mid = $this->config['chinaums_mid_app'] ? $this->config['chinaums_mid_app']:$this->config['chinaums_mid'] ;
				break;
		}
		$post = [
			'requestTimestamp' => date('Y-m-d H:i:s'),
			'merOrderId' => $merOrderId,
			'mid' => $mid,
			'tid' => $this->config['chinaums_tid'],
			'instMid' => 'YUEDANDEFAULT',
		];
		$result = $this->postReq($url, $post);
		if($result['errCode'] != 'SUCCESS'){
			throw new \think\Exception($result['errMsg']);	
		}
		if($result['status'] != 'TRADE_SUCCESS'){
			return [
				'paid_money' => $result['totalAmount'],
				'paid_time' => time(),
				'transaction_no' => $result['targetOrderId'],
				'status' => 2,
			];
		}
		return [
			'paid_money' => $result['totalAmount'],
			'paid_time' => time(),
			'transaction_no' => $result['targetOrderId'],
			'status' => 1,
		];
	}

	public function createRefundNo(){
		$ori_order_no = $this->config['chinaums_msgsrcid'].date('YmdHis').rand(1000000,9999999);
		return $ori_order_no;
	}


    public function refund($order_no, $total_fee, $refund_money, $transaction_no = '')
    {
        $url = $this->config['gateway'] . '/v1/netpay/refund';
        $sub_mer_no = $this->config['sub_mer_no'];
        $merOrderId = $this->createOrderNo($order_no);
        $refundOrderId = $this->createRefundNo();
        $merAmount = get_format_number($refund_money);

		$payService = new PayService();
		$payOrderInfo = $payService->getPayOrderInfo($order_no);
		if (empty($payOrderInfo)) {
			throw new \think\Exception("订单查询失败！没有找到支付信息！");
		}
		$refundTotal = intval($refund_money * 100);
		if ($payOrderInfo['chinaums_merchant_already_get'] >= $refundTotal) {
			$merRefundAmount = $refundTotal;
			$platRefundAmount = 0;
		} else {
			$merRefundAmount = $payOrderInfo['chinaums_merchant_already_get'];
			$platRefundAmount = $refundTotal - $merRefundAmount;
		}

        $mid = '';
        switch ($this->agent) {
            case 'wechat_h5'://微信端
            case 'h5':
                if($this->config['pay_type'] == 'wechat'){
                    $mid = $this->config['chinaums_mid_wx'] ? $this->config['chinaums_mid_wx']:$this->config['chinaums_mid'];
                }
                break;
            case 'wechat_mini':

                $mid = $this->config['chinaums_mid_wxapp'] ? $this->config['chinaums_mid_wxapp']:$this->config['chinaums_mid'] ;

                break;
            case 'iosapp':
            case 'androidapp':
                $mid = $this->config['chinaums_mid_app'] ? $this->config['chinaums_mid_app']:$this->config['chinaums_mid'] ;
                break;
        }

        $post = [
            'requestTimestamp' => date('Y-m-d H:i:s'),
            'merOrderId' => $merOrderId,
           // 'mid' => $this->config['chinaums_mid'],
            'mid' => $mid,
            'tid' => $this->config['chinaums_tid'],
            'instMid' => 'YUEDANDEFAULT',
            'targetOrderId' => $transaction_no,
            'refundAmount' => get_format_number($refund_money),
            'refundOrderId' => $refundOrderId,
            'platformAmount' => get_format_number(0),
        ];
        fdump_api([$this->config,$sub_mer_no],'refund_0124',1);
        if (!empty($sub_mer_no)) {
			$post['subOrders'] = [
				[
					'totalAmount' => get_format_number($merRefundAmount),
					'mid' => $sub_mer_no
				],
			];
			if (C('config.chinaums_platform_sub_mchid')) {
				$post['subOrders'][] = [
					'mid' => C('config.chinaums_platform_sub_mchid'),
					'totalAmount' => get_format_number($platRefundAmount),
				];
			}
			
        }
        try {
            $result = $this->postReq($url, $post);
            if ($result['status'] == 'REFUND' || $result['status'] == 'TRADE_SUCCESS') {


				if (cfg('chinaums_platform_sub_mchid') && $sub_mer_no) {
					//有结算记录，当退款的时候才记录退款记录。
					$fenzhangMod = \think\facade\Db::name('chinaums_fenzhang_record');
					if ($fenzhangMod->where(['pay_orderid' => $order_no, 'type' => 'settlement'])->find()) {
						$merId = (new \app\common\model\db\Merchant())->where('chinaums_merno', $sub_mer_no)->value('mer_id');
						$chinaums_data = [
							'mer_id' => $merId,
							'create_time' => time(),
							'merchant_money' => get_format_number($merRefundAmount) * -1,
							'platform_money' => get_format_number($platRefundAmount) * -1,
							'is_withdraw' => 0,
							'plat_is_withdraw' => 0,
							'pay_orderid' => $payOrderInfo['orderid'],
							'type' => 'refund'
						];
						$fenzhangMod->insert($chinaums_data);
					}
				}

                $refund_param['refund_id'] = $result['refundTargetOrderId'];
                $refund_param['refund_time'] = strtotime($result['responseTimestamp']);
                return ['refund_no' => $refundOrderId, 'refund_param' => $refund_param];
            } else {
                throw new \think\Exception('状态:' . $result['refundStatus']);
            }
        } catch (\Exception $e) {
            throw new \think\Exception('状态:' . $e->getMessage());
        }
    }
}