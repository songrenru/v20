<?php
/**
 * 购物车接口
 * Created by subline.
 * Author: lumin
 * Date Time: 2020/9/09 10:46
 */

namespace app\mall\controller\api;
use app\mall\model\db\MerchantStore;
use app\mall\model\service\MallGoodsService as MallGoodsService;
use app\mall\model\service\MallGoodsSkuService as MallGoodsSkuService;
use app\mall\model\service\CartService;
use app\mall\model\service\MallOrderService;
use app\merchant\model\service\MerchantStoreService;
use app\store_marketing\model\db\StoreMarketingPerson;
use app\store_marketing\model\db\StoreMarketingPersonSetprice;
use map\longLat;
use think\facade\Db;

class CartController extends ApiBaseController
{
	//加入购物车
	public function addCart(){
		$CartService = new CartService;
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}
		$sku_id = $this->request->param("sku_id", "", "intval");
        if(empty($sku_id)){
        	return api_output_error(1001, 'sku_id必传!');
        }
        $share_id = $this->request->param("share_id", 0, "intval");//分享id，分享商品直接购买时必传
        $num = $this->request->param("num", 1, "intval");
        $note = $this->request->param("note");
        $form = $this->request->param("form");

        $sku = (new MallGoodsSkuService)->getSkuById($sku_id);//sku信息
        if(empty($sku) || empty($sku['goods_id'])){
        	return api_output_error(1001, '当前商品未找到或已被删除');	
        }
        $goods = (new MallGoodsService)->getOne($sku['goods_id']);//商品信息
        Db::startTrans();
        try{
	        if($CartService->addCart($this->request->log_uid, $sku, $goods, $num, $note, $form, $share_id)){
	        	$compute = $CartService->computeCart($this->request->log_uid);
	        	Db::commit();
	        	return api_output(0, $compute);
	        }
	        else{
	        	return api_output_error(1003, '加入购物车失败!');
	        }
	    }
	    catch(\Exception $e){
			Db::rollback();
	    	return api_output_error(1005, $e->getMessage());
	    }
	}

	//修改购物车
	public function updateCart(){
		$CartService = new CartService;
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}
		$cart_id = $this->request->param("cart_id", "", "intval");
        if(empty($cart_id)){
        	return api_output_error(1001, 'cart_id必传!');
        }
        $sku_id = $this->request->param("sku_id", "", "intval");
        $num = $this->request->param("num", '', "intval");//修改为几
        $note = $this->request->param("note");
        $form = $this->request->param("form");
        if($num <= 0){
        	return api_output_error(1001, 'num参数必须为一个正整数!');
        }

        try{
	        if($CartService->updateCart($this->request->log_uid, $cart_id, $num, $sku_id, $note, $form) !== false){
	        	return api_output(0, $CartService->computeCart($this->request->log_uid));
	        }
	        else{
	        	return api_output_error(1003, '修改购物车失败!');
	        }
	    }
	    catch(\Exception $e){
	    	return api_output_error(1005, $e->getMessage());
	    }
	}

	//删除购物车
	public function delCart(){
		$CartService = new CartService;
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}
		$cart_ids = $this->request->param("cart_ids");
        if(empty($cart_ids)){
        	return api_output_error(1001, 'cart_ids必传!');
        }

        try{
        	$cart_ids = explode(',', $cart_ids);
	        if($CartService->delCart($this->request->log_uid, $cart_ids)){
	        	return api_output(0, $CartService->computeCart($this->request->log_uid));
	        }
	        else{
	        	return api_output_error(1003, '删除购物车失败!');
	        }
	    }
	    catch(\Exception $e){
	    	return api_output_error(1005, $e->getMessage());
	    }
	}

	//选中|非选中购物车
	public function selectCart(){
		$CartService = new CartService;
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}
		$cart_id = $this->request->param("cart_id", 0, "intval");//为0时=全选/全不选
        $select = $this->request->param("select", 1, "intval"); // 1=选中 0=不选中
        $store_id = $this->request->param("store_id", 0, "intval"); // 全选/全不选某个店铺的购物车数据
        
        try{
	        if($cart_id > 0 && $CartService->selectCart($this->request->log_uid, $cart_id, $select)){
	        	return api_output(0, $CartService->computeCart($this->request->log_uid));
	        }
	        elseif($cart_id == 0){
	        	$cart = $CartService->computeCart($this->request->log_uid);
	        	$cart_ids = [];
	        	foreach ($cart['normal_list'] as $key => $value) {
	        		if($store_id > 0 && $value['store_id'] != $store_id) continue;
	        		foreach ($value['goods_list'] as $goods) {
	        			$cart_ids[] = $goods['cart_id'];
	        		}
	        	}
	        	if(!empty($cart_ids) && $CartService->selectCart($this->request->log_uid, $cart_ids, $select)){
	        		return api_output(0, $CartService->computeCart($this->request->log_uid));
	        	}
	        	else{
	        		return api_output_error(1003, '选中购物车失败（购物车无有效数据）!');
	        	}
	        }
	        else{
	        	return api_output_error(1003, '选中购物车失败!');
	        }
	    }
	    catch(\Exception $e){
	    	return api_output_error(1005, $e->getMessage());
	    }
	}

	//我的购物车
	public function lists(){
		$CartService = new CartService;
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}	
		$ret_discount_money = 0;
		$output = $CartService->computeCart($this->request->log_uid, false, $ret_discount_money, 1);
		return api_output(0, $output);
	}

	//清空失效宝贝
	public function clearCart(){
		$CartService = new CartService;
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}	
		$output = $CartService->computeCart($this->request->log_uid);
		if(empty($output['no_effective_list'])){
			return api_output(0, $output);
		}
		$cart_ids = [];
		foreach ($output['no_effective_list'] as $key => $value) {
			$cart_ids = array_merge($cart_ids, array_column($value['goods_list'], 'cart_id'));
		}
		if($CartService->delCart($this->request->log_uid, $cart_ids)){
        	return api_output(0, $CartService->computeCart($this->request->log_uid));
        }
        else{
        	return api_output_error(1003, '清除无效购物车数据失败!');
        }
	}

	//购物车结算（包含直接购买某个单品功能---商品详情页）
	public function confirm(){
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}
		$address_id = $this->request->param("address_id", "0", "intval");
		$coupon_id = $this->request->param("coupon_id", "0", "intval");
		$store = $this->request->param("store", "");
		//直接购买功能
		$type = $this->request->param("type", "0", "intval");//0=购物车结算  1=直接购买单品
		$sku_id = $this->request->param("sku_id", "", "intval");
        if($type == '1' && empty($sku_id)){
        	return api_output_error(1001, '请选择商品规格');
        }
        $share_id = $this->request->param("share_id", 0, "intval");//分享id，分享商品直接购买时必传
        $num = $this->request->param("num", 1, "intval");
        $activity_type = $this->request->param("activity_type", 'normal');//商品级活动
        $activity_field = $this->request->param("activity_field", '');//活动附属字段
        $note = $this->request->param("note");
        $form = $this->request->param("form");

		$CartService = new CartService;
		$discount_money = 0;
		$from = 'cart';
        if($type == '1'){
	        $cart = $CartService->createCartData($sku_id, $num, $activity_type, $activity_field, $note, $form, $this->request->log_uid, $share_id);
            if(isset($cart['error'])){
                return api_output_error(1001, $cart['msg']);
            }
	        $normal_list = $cart;
	        $from = 'detail';//来源（详情页）
	    }
	    else{
	    	$cart = $CartService->computeCart($this->request->log_uid, true, $discount_money);
	    	$normal_list = $cart;
	    }
		
		if(empty($cart)){
			return api_output_error(1003, '未检测到选中商品');
		}
		//查询店铺状态
        $storeIdInfo = [];
        foreach ($cart as $vC){
            $storeIdInfo[] = $vC['store_id'];
        }
        $merchantStoreInfo = (new MerchantStore())->where([['store_id','IN',$storeIdInfo]])->field('status,have_mall')->select()->toArray();
        foreach ($merchantStoreInfo as $vM){
            if($vM['status'] == 0){
                return api_output_error(1001, '店铺已关闭!');
            }
            if($vM['have_mall'] == 0){
                return api_output_error(1001, '店铺（商城）已关闭!');
            }
        }
		try{
			$confirm = $CartService->confirmCartData($this->request->log_uid, $normal_list, $address_id, $coupon_id, $store, $discount_money, $from);
		} catch (\Exception $e) {
			return api_output_error(1003, $e->getMessage());
		}
	
//		foreach($confirm['order'] as $key => $val){
//			$location2 = (new longLat())->baiduToGcj02($val['lat'], $val['lng']);//转换百度坐标到腾讯坐标
//			$confirm['order'][$key]['lng'] = $location2['lng'] ?? $val['lng'];
//			$confirm['order'][$key]['lat'] =$location2['lat'] ?? $val['lat'];
//		}

		return api_output(0, $confirm);
	}

	//提交订单
	public function saveOrder(){
		$address_id = $this->request->param("address_id", "0", "intval");
		$coupon_id = $this->request->param("coupon_id", "0", "intval");
		$current_liveshow_id = $this->request->param("current_liveshow_id", "0", "intval");
		$current_livevideo_id = $this->request->param("current_livevideo_id", "0", "intval");
		$store = $this->request->param("store", "");

		//直接购买功能
		$type = $this->request->param("type", "0", "intval");//0=购物车结算  1=直接购买单品
		$sku_id = $this->request->param("sku_id", "", "intval");
        if($type == '1' && empty($sku_id)){
        	return api_output_error(1001, 'sku_id必传!');
        }
        $share_id = $this->request->param("share_id", 0, "intval");//分享id，分享商品直接购买时必传
        $num = $this->request->param("num", 1, "intval");
        $activity_type = $this->request->param("activity_type", 'normal');//商品级活动
        $activity_field = $this->request->param("activity_field", '');//活动附属字段
        $note = $this->request->param("note");
        $form = $this->request->param("form");

		$CartService = new CartService;
		if(empty($this->request->log_uid)){
			return api_output_error(1002, '当前接口需要登录');
		}
		$from = 'cart';
		$discount_money = 0;
		if($type == '1'){
	        $cart = $CartService->createCartData($sku_id, $num, $activity_type, $activity_field, $note, $form, $this->request->log_uid, $share_id);
            if(isset($cart['error'])){
                return api_output_error(1001, $cart['msg']);
            }
	        $from = 'detail';//来源（详情页）
	    }
	    else{
			$cart = $CartService->computeCart($this->request->log_uid, true);
		}
		if(empty($cart)){
			return api_output_error(1003, '未检测到选中商品');
		}
        $wxNickname = $this->userInfo['nickname'] ?: $this->userInfo['truename'];
        $wxPhone = $this->userInfo['phone'];

		try{
			$confirm = $CartService->confirmCartData($this->request->log_uid, $cart, $address_id, $coupon_id, $store, $discount_money, $from);
			if($confirm){
                $confirm['address']['phone'] = $confirm['address']['phone'] ?: $wxPhone;
                $confirm['address']['name'] = $confirm['address']['name'] ?: $wxNickname;
            }
		} catch (\Exception $e) {
			return api_output_error(1003, $e->getMessage());
		}

		//写入订单表
		Db::startTrans();
		try{
			$order_id = (new MallOrderService)->saveOrder($this->request->log_uid, $confirm, $store, $current_liveshow_id, $current_livevideo_id,$activity_type);
			Db::commit();
		}
		catch(\Exception $e){
			Db::rollback();
			return api_output_error(1005, $e->getMessage());
		}
		
		if($order_id){
			//清空购物车里面的数据
			if($type == '0'){
				foreach($cart as $c){
					$CartService->delCart($this->request->log_uid, array_column($c['goods_list'], 'cart_id'));
				}
			}
			return api_output(0, ['order_type' => 'mall', 'order_id' => $order_id, 'use_merchant_balance'=>0, 'use_qiye_balance'=>0, 'use_system_balance'=>1, 'use_user_score'=>1]);
		}
		else{
			return api_output_error(1003, '提交失败！');
		}
	}
}



