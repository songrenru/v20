<?php
	/**
	 * 支付异步通知地址
	 */
	declare (strict_types = 1);

	namespace app\pay\controller;


use app\pay\model\db\PayOrderInfo;
use app\pay\model\service\channel\FarmersbankpayService;
use app\pay\model\service\PayService;
use think\facade\Db;


	class NotifyController
	{
		/**
		 * 微信官方接口 异步通知
		 * @return [type] [description]
		 */
		public function wechat()
		{
			//1、获取order_no（本系统的支付单号）
			$input = file_get_contents("php://input");
			$array_data = json_decode(json_encode(simplexml_load_string($input, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
            fdump_sql([$input,$array_data],'notify_wechat');
			if($array_data && $array_data['out_trade_no']){
				try {
					$pay_service = new PayService;
					$notice = $pay_service->notice($array_data['out_trade_no']);
				} catch (\Exception $e) {
                    fdump_sql(['array_data'=>$array_data,'msg'=>$e->getMessage()],'wechat_notify_error');
					exit('<xml><return_code><![CDATA[FAIL]]></return_code><return_msg><![CDATA['.$e->getMessage().']]></return_msg></xml>');
				}
				//调用业务方service  after_pay
				if($notice['after_pay']){
					$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
				}

				exit('<xml><return_code><![CDATA[SUCCESS]]></return_code></xml>');
			}
			else{
				exit('<xml><return_code><![CDATA[FAIL]]></return_code><return_msg><![CDATA[未获取到支付单号]]></return_msg></xml>');
			}
		}

		/**
		 * 支付宝官方接口 异步通知
		 * @return [type] [description]
		 */
		public function alipay()
		{
			//1、获取order_no（本系统的支付单号）
			$out_trade_no = request()->param('out_trade_no');
            fdump_sql(request()->param(),'notify_alipay');
			if($out_trade_no){
				try {
					$pay_service = new PayService;
					$notice = $pay_service->notice($out_trade_no);
				} catch (\Exception $e) {
					exit($e->getMessage());
				}
				//调用业务方service  after_pay
				if($notice['after_pay']){
					$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
				}

				exit('success');
			}
		}

		/**
		 * 随行付 异步通知
		 * @return [type] [description]
		 */
		public function tianque()
		{
			//1、获取order_no（本系统的支付单号）
			$data = file_get_contents("php://input");
			$param = $data ? json_decode($data, true) : [];
			$out_trade_no = $param['ordNo'] ?? '';
			if($out_trade_no){
				try {
					$pay_service = new PayService;
					$notice = $pay_service->notice($out_trade_no);
				} catch (\Exception $e) {
					exit($e->getMessage());
				}
				//调用业务方service  after_pay
				if($notice['after_pay']){
					$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
				}

				echo json_encode(['code' => "success", 'msg' => '成功']);
				exit;
			}
		}

		/**
		 * 银联 异步通知
		 * @return [type] [description]
		 */
		public function chinaums()
		{
			//1、获取order_no（本系统的支付单号）
			$out_trade_no = request()->param('merOrderId');
			$out_trade_no = str_replace(cfg('chinaums_msgsrcid'), '', $out_trade_no);
			fdump_sql(request()->param(), 'chinaums_notice');
			if($out_trade_no){
				try {
					$pay_service = new PayService;
					$notice = $pay_service->notice($out_trade_no);
				} catch (\Exception $e) {
					exit($e->getMessage());
				}
				//调用业务方service  after_pay
				if($notice['after_pay']){
					$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
				}

				echo json_encode(['code' => "success", 'msg' => '成功']);
				exit;
			}
		}

		/**
		 * 平台低费率异步通知
		 * @return [type] [description]
		 */
		public function wftpay(){
			//1、获取order_no（本系统的支付单号）
			$notice_data = file_get_contents("php://input");
			$array_data = json_decode(json_encode(simplexml_load_string($notice_data, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
			$out_trade_no = $array_data['out_trade_no'] ?? '';
			if($out_trade_no){
				try {
					$pay_service = new PayService;
					$notice = $pay_service->notice($out_trade_no);
				} catch (\Exception $e) {
					exit($e->getMessage());
				}
				//调用业务方service  after_pay
				if($notice['after_pay']){
					$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
				}

				echo json_encode(['code' => "success", 'msg' => '成功']);
				exit;
			}
		}

		/**
		 * 四川农银 异步通知
		 * @return [type] [description]
		 */
        public function scrcu($iscron=false)
        {
            //1、获取order_no（本系统的支付单号）
            $limit=30;
            if($iscron){
                $limit=60;
                $data = Db::name('Scrcu_record')->order("limit asc,id asc")->where([['add_time', '>=',  time()-1000], ['over', '=', 0], ['limit', '<', 160],['order_type', '=', 'pay_order_info']])->limit($limit)->select();
            }else{
                $data = Db::name('Scrcu_record')->order("id asc")->where([['add_time', '>=',  time()-300], ['over', '=', 0], ['limit', '<', 127],['order_type', '=', 'pay_order_info']])->limit($limit)->select();
            }
            if ($data && !is_array($data)) {
                $data = $data->toArray();
            } else {
                $data = [];
            }
            if (count($data)<$limit) {
                // 首先查询再时间范围内的一次没有查询过的订单不足20条， 查询没有查询过的订单补足20条
                $limit1 = $limit - count($data);
                $data1 = Db::name('Scrcu_record')->order("limit asc,id asc")->where([['limit', '<', 127], ['over', '=', 0],['order_type', '=', 'pay_order_info']])->limit($limit1)->select();
                if ($data1 && !is_array($data1)) {
                    $data1 = $data1->toArray();
                    fdump_api(['msg' => '1订单查询','iscron'=>$iscron, '$data' => $data, '$limit1' => $limit1, '$data1' => $data1],'$scrcu_log_0728',1);
                    $data = array_merge($data, $data1);
                } else {
                    $data1 = [];
                }
            }
            if(!empty($data)){
                $noticeArr = [];
                foreach ($data as $key => $value) {
                    if (isset($noticeArr[$value['id']]) && $noticeArr[$value['id']]) {
                        continue;
                    }
                    try {
                        $pay_service = new PayService;
                        request()->orderid = $value['order_number'];
                        $notice = $pay_service->notice($value['order_number']);
                        fdump_api(['iscron'=>$iscron,$notice,$value['order_number']],'scrcu_log_0728',1);
                    } catch (\Exception $e) {
                        $code=$e->getCode();
                        fdump_api(['iscron'=>$iscron,'value'=>$value,$notice,'ee'=>$e->getMessage(),'code'=>$code],'scrcu_log_0728',1);
                        Db::name('Scrcu_record')->where(['id'=>$value['id']])->data(['limit'=>$value['limit']+1])->save();
                        if($code==22204){
                            //交易关闭了 不要再查了
                            Db::name('Scrcu_record')->where(['id'=>$value['id']])->delete();
                        }
                        continue;
                    }
                    fdump_api(['iscron'=>$iscron,$notice,$value['order_number']],'scrcu_log_0728',1);
                    //调用业务方service  after_pay
                    if($notice['after_pay']){
                        fdump_api(['iscron'=>$iscron,$notice,$value['order_number']],'scrcu_log_0728',1);
                        $pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
                    }
                    // 已经拿到了支付结果并记录 删除轮询记录
                    Db::name('Scrcu_record')->where(['id'=>$value['id']])->delete();
                    $noticeArr[$value['id']] = $value['order_number'];
                }
            }
            $limit=3;
            if($iscron){
                $limit=15;
            }
            $otherData = Db::name('Scrcu_record')->order("id asc")->where([['limit', '=', 0], ['over', '=', 0],['order_type', '=', 'pay_order_info']])->limit($limit)->select();
            if(!empty($otherData)){
                foreach ($otherData as $key => $value) {
                    try {
                        $pay_service = new PayService;
                        request()->orderid = $value['order_number'];
                        $notice = $pay_service->notice($value['order_number']);
                        fdump_api(['iscron'=>$iscron,$notice,$value['order_number']],'scrcu_log_0728',1);
                        Db::name('Scrcu_record')->where(['id'=>$value['id']])->data(['over'=>1,'over_time' => time()])->save();
                    } catch (\Exception $e) {
                        $code=$e->getCode();
                        fdump_api(['iscron'=>$iscron,'value'=>$value,$notice,'ee'=>$e->getMessage(),'code'=>$code],'scrcu_log_0728',1);
                        Db::name('Scrcu_record')->where(['id'=>$value['id']])->data(['limit'=>$value['limit']+1])->save();
                        if($code==22204){
                            //交易关闭了 不要再查了
                            Db::name('Scrcu_record')->where(['id'=>$value['id']])->delete();
                        }
                    }
                    fdump_api(['iscron'=>$iscron,$notice,$value['order_number']],'scrcu_log_0728',1);
                    //调用业务方service  after_pay
                    if($notice['after_pay']){
                        fdump_api(['iscron'=>$iscron,$notice,$value['order_number']],'scrcu_log_0728',1);
                        $pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
                    }
                }
            }

            echo json_encode(['code' => "success", 'msg' => '成功']);

        }

		/**
		 * 环球汇通聚合支付 异步通知
		 * @return [type] [description]
		 */
		public function hqpay()
		{
			//1、获取order_no（本系统的支付单号）
			$data  = file_get_contents("php://input");
			$param = $data ? json_decode($data, true) : [];
			$out_trade_no = $param['outTradeNo'] ?? '';
			if ($out_trade_no) {
				try {
					$pay_service = new PayService;
					request()->orderid = $out_trade_no;
					$notice = $pay_service->notice($out_trade_no);
				} catch (\Exception $e) {
					exit($e->getMessage());
				}
				//调用业务方service  after_pay
				if ($notice['after_pay']) {
					$notice['extra']['fundBills'] = !empty($param['fundBills']) ? $param['fundBills'] : 'hqpay';
					$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
				}
				echo json_encode(['code' => "success", 'msg' => '成功']);
				exit;
			}
		}

		/**
		 * 环球汇通聚合支付 退款异步通知
		 * @return [type] [description]
		 */
		public function hqpay_refund()
		{
			$data  = file_get_contents("php://input");
			$param = $data ? json_decode($data, true) : [];
			fdump($param, 'hqpay_refund', 1);
		}

/**
     * @return bool|string|\think\response\Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function farmersBankPay()
    {
        $params = request()->post();
        fdump_sql($params, 'farmersBankPayCallBack');
        //1、获取order_no（本系统的支付单号）
        if(empty($params['tpOrderId'])){
            return json([
                'code' => 400,
                'msg' => '平台订单号缺失！'
            ]);
        }
        if($params['status'] != '00'){
            return json([
                'code' => 400,
                'msg' => '未支付成功！'
            ]);
        }
        
        $order = PayOrderInfo::where('orderid', $params['tpOrderId'])->field('id')->find();
        if(!empty($order)){
            try {
                $pay_service = new PayService;
                $notice = $pay_service->notice($params['tpOrderId']);
            } catch (\Exception $e) {
                return json([
                    'code' => 400,
                    'msg' => $e->getMessage()
                ]);
            }
            //调用业务方service  after_pay
            if($notice['after_pay']){
                $pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
            }
            return json([
                'code' => 200,
                'msg' => '支付成功！'
            ]);
        }
        
        $url = request()->domain().'/source/web_farmersbankpay_return.php';
        
        return curlPost($url,json_encode($params, JSON_UNESCAPED_UNICODE));
    }
    
		public function douyinNotify()
		{
			fdump_sql([file_get_contents("php://input"), $_REQUEST], 'douyinNotify');
			$data = file_get_contents("php://input");
			$data = json_decode($data, true);
			$notifyData = json_decode($data['msg'], true);
			$out_trade_no = $notifyData['cp_orderno'] ?? '';
			if ($out_trade_no) {
				try {
					request()->douyin_notify_data = $notifyData;
					$pay_service = new PayService;
					$notice = $pay_service->notice($out_trade_no);
				} catch (\Exception $e) {
					exit($e->getMessage());
				}
				//调用业务方service  after_pay
				if ($notice['after_pay']) {
					$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);

					(new \app\common\model\service\order\SystemOrderService)->douyinOrderPush($out_trade_no, '已支付');
				}
				echo json_encode(['err_no' => 0, 'err_tips' => 'success']);
				exit;
			}
		}

		public function douyinRefundNotify(){
			fdump_sql([file_get_contents("php://input"), $_REQUEST], 'douyinRefundNotify');
			echo json_encode(['err_no' => 0, 'err_tips' => 'success']);
			exit;
		}

		public function icbc_apply_notify()
		{
			$input = file_get_contents("php://input");
			fdump_sql([$_REQUEST, $_POST, $_GET, $input], 'icbc_apply_notify');
			$return = [
				'return_code' => 0,
				'return_msg' => 'success',
				'megId' => date('YmdHis')
			];
			echo json_encode($return);
			exit;
		}

		public function icbc_refund_notify()
		{
			$input = file_get_contents("php://input");
			fdump_sql([$_REQUEST, $_POST, $_GET, $input], 'icbc_refund_notify');
			$return = [
				'return_code' => 0,
				'return_msg' => 'success',
				'megId' => date('YmdHis')
			];
			echo json_encode($return);
			exit;
		}


	/**
     * 日照银行支付 异步通知
     * @return [type] [description]
     */
    public function ebankpay()
    {
        //1、获取order_no（本系统的支付单号）
        $data = (new PayOrderInfo())->order("id desc")->where([['add_time', '>=',  time() - 600], ['pay_type', '=', 'ebankpay'], ['paid', '=', 0]])->limit(10)->select();
        if(!empty($data)){
            $data = $data->toArray();
            foreach ($data as $key => $value) {
                try {
                    $pay_service = new PayService;
                    request()->orderid = $value['orderid'];
                    $notice = $pay_service->notice($value['orderid']);
                } catch (\Exception $e) {
                    exit($e->getMessage());
                }

                //调用业务方service  after_pay
                if ($notice['after_pay']) {
                    $pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
                }
            }
        }

        echo json_encode(['uop_code' => "UC000000", 'code' => "success", 'uop_msg' => '成功']);
    }

	/**
	 * 温州银行异步通知
	 *
	 * @return void
	 * @author: zt
	 * @date: 2023/07/04
	 */
	public function wenzhouBankNotify()
	{
		$prefix = request()->param('prefix','');
		$out_trade_no = request()->param('merOrderId');
		$out_trade_no = str_replace($prefix, '', $out_trade_no);
		fdump_sql(request()->param(), 'wenzhouBankNotify');
		if ($out_trade_no) {
			try {
				$pay_service = new PayService;
				$notice = $pay_service->notice($out_trade_no);
			} catch (\Exception $e) {
				exit($e->getMessage());
			}
			//调用业务方service  after_pay
			if ($notice['after_pay']) {
				$pay_service->afterPay($notice['business'], $notice['business_order_id'], $notice['extra']);
			}

			echo json_encode(['code' => "success", 'msg' => '成功']);
			exit;
		}
	}


}

