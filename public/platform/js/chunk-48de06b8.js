(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48de06b8"],{"4b77":function(a,t,o){"use strict";var s,e=o("ade3"),r=(s={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(e["a"])(s,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(e["a"])(s,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(e["a"])(s,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(e["a"])(s,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(e["a"])(s,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(e["a"])(s,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(e["a"])(s,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(e["a"])(s,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(e["a"])(s,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(e["a"])(s,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(e["a"])(s,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(e["a"])(s,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(e["a"])(s,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(e["a"])(s,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(e["a"])(s,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(e["a"])(s,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(e["a"])(s,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(e["a"])(s,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(e["a"])(s,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(e["a"])(s,"noteInfo","/group/merchant.goods/noteInfo"),Object(e["a"])(s,"orderDetail","/group/merchant.goods/orderDetail"),Object(e["a"])(s,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(e["a"])(s,"getRatioList","/group/merchant.goods/getRatioList"),Object(e["a"])(s,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(e["a"])(s,"couponDetail","/group/merchant.goods/couponDetail"),Object(e["a"])(s,"couponVerify","/group/merchant.goods/couponVerify"),Object(e["a"])(s,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(e["a"])(s,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(e["a"])(s,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(e["a"])(s,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(e["a"])(s,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(e["a"])(s,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),s);t["a"]=r},"65d6":function(a,t,o){},6789:function(a,t,o){"use strict";o.r(t);var s=function(){var a=this,t=a._self._c;return t("div",[[t("a-form",{attrs:{layout:"inline","label-col":{span:2},"wrapper-col":{span:22}}},[t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 订单编号: "),t("span",[a._v(a._s(a.formData.real_orderid))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 商品名称: "),t("span",[a._v(" "+a._s(a.formData.s_name)+" "),1==a.formData.is_marketing_goods?t("a",[a._v("(分销商品)")]):a._e()])])],1),t("a-row",[t("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[a._v(" 订单信息 ")])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 订单类型: "),0==a.formData.tuan_type?t("span",[a._v("团购券")]):a._e(),1==a.formData.tuan_type?t("span",[a._v("代金券")]):a._e(),2==a.formData.tuan_type?t("span",[a._v("实物")]):a._e()]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 订单状态: "),t("span",[a._v(a._s(a.formData.pay_msg))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 数量: "),t("span",[a._v(a._s(a.formData.num))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 总价: "),t("span",[a._v(a._s(a.formData.total_money))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 下单时间: "),t("span",[a._v(a._s(a.formData.add_time))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 买家留言: "),t("span",[a._v(a._s(a.formData.delivery_comment))])])],1),a.formData.pay_type?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 支付方式: "),"offline"==a.formData.pay_type?t("span",[a._v("线下支付")]):a._e(),"wechat"==a.formData.pay_type?t("span",[a._v("微信支付")]):a._e(),"alipay"==a.formData.pay_type?t("span",[a._v("支付宝支付")]):a._e()])],1):a._e(),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 总核销码数: "),t("span",[a._v(a._s(a.formData.total_pass_num))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 未使用核销码数: "),t("span",[a._v(a._s(a.formData.unconsume_pass_num))])])],1),a.formData.adress?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 收货地址: "),t("span",[a._v(a._s(a.formData.adress))])])],1):a._e(),a.formData.trade_hotel&&1==a.formData.is_hotel?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 房间类型: "),t("span",[a._v(a._s(a.formData.trade_hotel.retval.cat_name))])])],1):a._e(),a.formData.trade_hotel&&1==a.formData.is_hotel?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 预定天数: "),t("span",[a._v(a._s(a.formData.trade_hotel.retval.book_day))])])],1):a._e(),a.formData.trade_hotel&&1==a.formData.is_hotel?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 开始预定时间: "),t("span",[a._v(a._s(a.formData.trade_hotel.retval.dep_time_txt))])])],1):a._e(),a.formData.trade_hotel&&1==a.formData.is_hotel?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 结束预定时间: "),t("span",[a._v(a._s(a.formData.trade_hotel.retval.end_time_txt))])])],1):a._e(),a.formData.paid?t("div",[t("a-row",[t("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[a._v(" 用户信息 ")])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 用户ID: "),t("span",[a._v(a._s(a.formData.uid))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 用户名: "),t("span",[a._v(a._s(a.formData.nickname))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 订单手机号: "),t("span",[a._v(a._s(a.formData.phone))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 用户手机号: "),t("span",[a._v(a._s(a.formData.user_phone))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 支付: "),t("span",[a._v(a._s(a.formData.payment_money)+" ")])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 使用商家会员卡余额: "),t("span",[a._v(a._s(a.formData.merchant_balance))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 余额支付金额: "),t("span",[a._v(a._s(a.formData.balance_pay))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 在线支付金额: "),t("span",[a._v(a._s(a.formData.payment_money))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 余额: "),t("span",[a._v(a._s(a.formData.now_money))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 折扣: "),t("span",[a._v(a._s(a.formData.card_discount))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 赠送余额: "),t("span",[a._v(a._s(a.formData.card_give_money))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 微信优惠: "),t("span",[a._v(a._s(a.formData.wx_cheap))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 平台优惠券: "),t("span",[a._v(a._s(a.formData.coupon_price))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 商家优惠券: "),t("span",[a._v(a._s(a.formData.card_price))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 积分抵扣金额: "),t("span",[a._v(a._s(a.formData.score_deducte))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[a._v(" 积分使用数量: "),t("span",[a._v(a._s(a.formData.score_used_count))])])],1),t("a-row",[t("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[a._v(" 额外信息 ")])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:2}},[a._v(" 备注: "),t("span")]),t("a-col",{staticClass:"mr-20",attrs:{span:10}},[t("a-input",{model:{value:a.formData.note_info,callback:function(t){a.$set(a.formData,"note_info",t)},expression:"formData.note_info"}})],1),t("a-col",{attrs:{span:2}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return a.updateOrderNote()}}},[a._v(" 修改 ")])],1)],1),a._l(a.formData.group_pass_list,(function(o,s){return t("a-row",{key:s,staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:23}},[a._v(" 消费密码: "),t("span",[a._v(" "+a._s(o.group_pass)+"     （ "),0==o.status?t("span",[a._v("未核销")]):1==o.status?t("span",[a._v("已核销")]):2==o.status?t("span",[a._v("已退款")]):t("span"),o.staff_name?t("span",[a._v("，店员名称："+a._s(o.staff_name))]):a._e(),o.verify_time_txt?t("span",[a._v("，操作时间："+a._s(o.verify_time_txt))]):a._e(),a._v(" ） ")])])],1)}))],2):a._e()],1)]],2)},e=[],r=(o("a9e3"),o("4b77")),n={name:"DrawerOrderDetail",props:{order_id:{type:[String,Number],default:"0"}},mounted:function(){this.orderDetailList()},data:function(){return{dialogVisible:!0,orderId:this.order_id,formData:{order_id:0,real_orderid:"",s_name:"",tuan_type:0,paid:0,num:0,total_money:0,add_time:0,delivery_comment:"",pay_type:"",total_pass_num:0,unconsume_pass_num:0,uid:0,nickname:"",phone:"",pay_msg:"",user_phone:"",paymoney:0,payment_money:0,balance_pay:0,merchant_balance:0,card_discount:0,card_give_money:0,now_money:0,wx_cheap:0,coupon_price:0,card_price:0,score_deducte:0,score_used_count:0,note_info:"",group_pass_txt:"",group_pass_list:[]}}},methods:{orderDetailList:function(){var a=this;this.request(r["a"].orderDetail,{order_id:this.order_id}).then((function(t){a.formData=t.list}))},chooseStoreOk:function(){this.$emit("notShowDetail")},chooseStoreCancel:function(){this.$emit("notShowDetail")},updateOrderNote:function(){var a=this;this.request(r["a"].updateOrderNote,{order_id:this.order_id,note_info:this.formData.note_info}).then((function(t){t&&a.$message.success("修改成功！")}))}}},p=n,c=(o("89d2"),o("2877")),_=Object(c["a"])(p,s,e,!1,null,"0b9f5e52",null);t["default"]=_.exports},"89d2":function(a,t,o){"use strict";o("65d6")}}]);