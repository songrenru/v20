(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10e582a4"],{"3a23":function(a,t,s){},"4b77":function(a,t,s){"use strict";var o,e=s("ade3"),r=(o={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(e["a"])(o,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(e["a"])(o,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(e["a"])(o,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(e["a"])(o,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(e["a"])(o,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(e["a"])(o,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(e["a"])(o,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(e["a"])(o,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(e["a"])(o,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(e["a"])(o,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(e["a"])(o,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(e["a"])(o,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(e["a"])(o,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(e["a"])(o,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(e["a"])(o,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(e["a"])(o,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(e["a"])(o,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(e["a"])(o,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(e["a"])(o,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(e["a"])(o,"noteInfo","/group/merchant.goods/noteInfo"),Object(e["a"])(o,"orderDetail","/group/merchant.goods/orderDetail"),Object(e["a"])(o,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(e["a"])(o,"getRatioList","/group/merchant.goods/getRatioList"),o);t["a"]=r},a914e:function(a,t,s){"use strict";s("3a23")},b584:function(a,t,s){"use strict";s.r(t);var o=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("a-modal",{attrs:{visible:a.dialogVisible,title:"操作订单",centered:"",maskClosable:!1,width:800},on:{ok:a.chooseStoreOk,cancel:a.chooseStoreCancel}},[[s("a-form",{attrs:{layout:"inline","label-col":{span:2},"wrapper-col":{span:22}}},[s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 订单编号: "),s("span",[a._v(a._s(a.formData.real_orderid))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 商品名称: "),s("span",[a._v(" "+a._s(a.formData.s_name)+" "),1==a.formData.is_marketing_goods?s("a",[a._v("(分销商品)")]):a._e()])])],1),s("a-row",[s("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[a._v(" 订单信息 ")])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 订单类型: "),0==a.formData.tuan_type?s("span",[a._v("团购券")]):a._e(),1==a.formData.tuan_type?s("span",[a._v("代金券")]):a._e(),2==a.formData.tuan_type?s("span",[a._v("实物")]):a._e()]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 订单状态: "),s("span",[a._v(a._s(a.formData.pay_msg))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 数量: "),s("span",[a._v(a._s(a.formData.num))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 总价: "),s("span",[a._v(a._s(a.formData.total_money))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 下单时间: "),s("span",[a._v(a._s(a.formData.add_time))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 买家留言: "),s("span",[a._v(a._s(a.formData.delivery_comment))])])],1),a.formData.pay_type?s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 支付方式: "),"offline"==a.formData.pay_type?s("span",[a._v("线下支付")]):a._e(),"wechat"==a.formData.pay_type?s("span",[a._v("微信支付")]):a._e(),"alipay"==a.formData.pay_type?s("span",[a._v("支付宝支付")]):a._e()])],1):a._e(),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 总核销码数: "),s("span",[a._v(a._s(a.formData.total_pass_num))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 未使用核销码数: "),s("span",[a._v(a._s(a.formData.unconsume_pass_num))])])],1),a.formData.adress?s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 收货地址: "),s("span",[a._v(a._s(a.formData.adress))])])],1):a._e(),a.formData.paid?s("div",[s("a-row",[s("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[a._v(" 用户信息 ")])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 用户ID: "),s("span",[a._v(a._s(a.formData.uid))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 用户名: "),s("span",[a._v(a._s(a.formData.nickname))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 订单手机号: "),s("span",[a._v(a._s(a.formData.phone))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 用户手机号: "),s("span",[a._v(a._s(a.formData.user_phone))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 支付: "),s("span",[a._v(a._s(a.formData.payment_money)+" ")])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 使用商家会员卡余额: "),s("span",[a._v(a._s(a.formData.merchant_balance))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 余额支付金额: "),s("span",[a._v(a._s(a.formData.balance_pay))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 在线支付金额: "),s("span",[a._v(a._s(a.formData.payment_money))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 余额: "),s("span",[a._v(a._s(a.formData.now_money))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 折扣: "),s("span",[a._v(a._s(a.formData.card_discount))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 赠送余额: "),s("span",[a._v(a._s(a.formData.card_give_money))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 微信优惠: "),s("span",[a._v(a._s(a.formData.wx_cheap))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 平台优惠券: "),s("span",[a._v(a._s(a.formData.coupon_price))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 商家优惠券: "),s("span",[a._v(a._s(a.formData.card_price))])])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 积分抵扣金额: "),s("span",[a._v(a._s(a.formData.score_deducte))])]),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:10}},[a._v(" 积分使用数量: "),s("span",[a._v(a._s(a.formData.score_used_count))])])],1),s("a-row",[s("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[a._v(" 额外信息 ")])],1),s("a-row",{staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:2}},[a._v(" 订单标记: "),s("span")]),s("a-col",{staticClass:"mr-20",attrs:{span:10}},[s("a-input",{model:{value:a.formData.note_info,callback:function(t){a.$set(a.formData,"note_info",t)},expression:"formData.note_info"}})],1),s("a-col",{attrs:{span:2}},[s("a-button",{attrs:{type:"primary"},on:{click:function(t){return a.updateOrderNote()}}},[a._v(" 修改 ")])],1)],1),a._l(a.formData.group_pass_list,(function(t,o){return s("a-row",{key:o,staticClass:"mb-20"},[s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:23}},[a._v(" 消费密码: "),s("span",[a._v(" "+a._s(t.group_pass)+"     （ "),0==t.status?s("span",[a._v("未核销")]):1==t.status?s("span",[a._v("已核销")]):2==t.status?s("span",[a._v("已退款")]):s("span"),t.staff_name?s("span",[a._v("，店员名称："+a._s(t.staff_name))]):a._e(),t.verify_time_txt?s("span",[a._v("，操作时间："+a._s(t.verify_time_txt))]):a._e(),a._v(" ） ")])])],1)}))],2):a._e()],1)]],2)],1)},e=[],r=(s("a9e3"),s("4b77")),n={name:"OrderDetail",props:{order_id:{type:[String,Number],default:"0"}},mounted:function(){this.orderDetailList()},data:function(){return{dialogVisible:!0,orderId:this.order_id,formData:{order_id:0,real_orderid:"",s_name:"",tuan_type:0,paid:0,num:0,total_money:0,add_time:0,delivery_comment:"",pay_type:"",total_pass_num:0,unconsume_pass_num:0,uid:0,nickname:"",phone:"",pay_msg:"",user_phone:"",paymoney:0,payment_money:0,balance_pay:0,merchant_balance:0,card_discount:0,card_give_money:0,now_money:0,wx_cheap:0,coupon_price:0,card_price:0,score_deducte:0,score_used_count:0,note_info:"",group_pass_txt:"",group_pass_list:[]}}},methods:{orderDetailList:function(){var a=this;this.request(r["a"].orderDetail,{order_id:this.order_id}).then((function(t){a.formData=t.list}))},chooseStoreOk:function(){this.$emit("notShowDetail")},chooseStoreCancel:function(){this.$emit("notShowDetail")},updateOrderNote:function(){var a=this;this.request(r["a"].updateOrderNote,{order_id:this.order_id,note_info:this.formData.note_info}).then((function(t){t&&a.$message.success("修改成功！")}))}}},p=n,c=(s("a914e"),s("0c7c")),i=Object(c["a"])(p,o,e,!1,null,"3b38f643",null);t["default"]=i.exports}}]);