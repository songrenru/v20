(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20e88783"],{"25a0":function(o,t,a){"use strict";a("4b15")},"4b15":function(o,t,a){},"4b77":function(o,t,a){"use strict";var e,s=a("ade3"),r=(e={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(s["a"])(e,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(s["a"])(e,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(s["a"])(e,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(s["a"])(e,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(s["a"])(e,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(s["a"])(e,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(s["a"])(e,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(s["a"])(e,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(s["a"])(e,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(s["a"])(e,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(s["a"])(e,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(s["a"])(e,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(s["a"])(e,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(s["a"])(e,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(s["a"])(e,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(s["a"])(e,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(s["a"])(e,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(s["a"])(e,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(s["a"])(e,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(s["a"])(e,"noteInfo","/group/merchant.goods/noteInfo"),Object(s["a"])(e,"orderDetail","/group/merchant.goods/orderDetail"),Object(s["a"])(e,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(s["a"])(e,"getRatioList","/group/merchant.goods/getRatioList"),Object(s["a"])(e,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(s["a"])(e,"couponDetail","/group/merchant.goods/couponDetail"),Object(s["a"])(e,"couponVerify","/group/merchant.goods/couponVerify"),Object(s["a"])(e,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(s["a"])(e,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(s["a"])(e,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(s["a"])(e,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(s["a"])(e,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(s["a"])(e,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),e);t["a"]=r},"6c54":function(o,t,a){"use strict";var e,s=a("ade3"),r=(e={getGoodsSortList:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortList",getGoodsSortEdit:"/merchant/merchant.deposit.DepositGoodsSort/handleGoodsSort",getGoodsSortInfo:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortInfo",delGoodsSort:"/merchant/merchant.deposit.DepositGoodsSort/delGoodsSort",goodsEdit:"/merchant/merchant.deposit.DepositGoods/goodsEdit",getGoodsSortSelect:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortSelect",getGoodsList:"/merchant/merchant.deposit.DepositGoods/getGoodsList",getGoodsDetail:"/merchant/merchant.deposit.DepositGoods/getGoodsDetail",delGoods:"/merchant/merchant.deposit.DepositGoods/delGoods",getVerificationList:"/merchant/merchant.deposit.DepositGoodsVerification/getVerificationList",getCashBackList:"/merchant/merchant.Store/getCashBackList",exportCashBackList:"/merchant/merchant.Store/exportCashBackList",goodsTypeList:"/merchant/merchant.CardGoods/goodsTypeList",goodsTypeAdd:"/merchant/merchant.CardGoods/goodsTypeAdd",goodsTypeEdit:"/merchant/merchant.CardGoods/goodsTypeEdit",goodsTypeDel:"/merchant/merchant.CardGoods/goodsTypeDel",goodsList:"/merchant/merchant.CardGoods/goodsList",goodsAdd:"/merchant/merchant.CardGoods/goodsAdd"},Object(s["a"])(e,"goodsEdit","/merchant/merchant.CardGoods/goodsEdit"),Object(s["a"])(e,"goodsDel","/merchant/merchant.CardGoods/goodsDel"),Object(s["a"])(e,"goodsDetail","/merchant/merchant.CardGoods/goodsDetail"),Object(s["a"])(e,"couponList","/merchant/merchant.CardGoods/couponList"),Object(s["a"])(e,"goodsExchangeList","/merchant/merchant.CardGoods/goodsExchangeList"),e);t["a"]=r},9937:function(o,t,a){"use strict";a.r(t);var e=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",[a("a-modal",{attrs:{visible:o.dialogVisible,title:"操作券码",centered:"",maskClosable:!1,width:800,okText:"确定核销"},on:{ok:o.chooseStoreOk,cancel:o.chooseStoreCancel}},[[a("a-form",{attrs:{layout:"inline","label-col":{span:2},"wrapper-col":{span:22}}},[a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 券序列码: "),a("span",[o._v(o._s(o.formData.group_pass))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 过期时间: "),a("span",[o._v(o._s(o.formData.deadline))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 订单编号: "),a("span",[o._v(o._s(o.formData.real_orderid))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 商品名称: "),a("span",[o._v(" "+o._s(o.formData.s_name)+" "),1==o.formData.is_marketing_goods?a("a",[o._v("(分销商品)")]):o._e()])])],1),a("a-row",[a("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[o._v(" 订单信息 ")])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 订单类型: "),0==o.formData.tuan_type?a("span",[o._v("团购券")]):o._e(),1==o.formData.tuan_type?a("span",[o._v("代金券")]):o._e(),2==o.formData.tuan_type?a("span",[o._v("实物")]):o._e()]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 订单状态: "),a("span",[o._v(o._s(o.formData.pay_msg))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 数量: "),a("span",[o._v(o._s(o.formData.num))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 总价: "),a("span",[o._v(o._s(o.formData.total_money))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 下单时间: "),a("span",[o._v(o._s(o.formData.add_time))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 买家留言: "),a("span",[o._v(o._s(o.formData.delivery_comment))])])],1),o.formData.pay_type?a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 支付方式: "),"offline"==o.formData.pay_type?a("span",[o._v("线下支付")]):o._e(),"wechat"==o.formData.pay_type?a("span",[o._v("微信支付")]):o._e(),"alipay"==o.formData.pay_type?a("span",[o._v("支付宝支付")]):o._e()])],1):o._e(),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 总核销码数: "),a("span",[o._v(o._s(o.formData.total_pass_num))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[o._v(" 未使用核销码数: "),a("span",[o._v(o._s(o.formData.unconsume_pass_num))])])],1)],1)]],2)],1)},s=[],r=(a("a9e3"),a("4b77")),n=(a("6c54"),{name:"CouponDetail",props:{order_id:{type:[String,Number],default:"0"},group_pass_id:{type:[String],default:"0"}},mounted:function(){this.orderDetailList()},data:function(){return{dialogVisible:!0,orderId:this.order_id,id:this.group_pass_id,formData:{order_id:0,real_orderid:"",s_name:"",tuan_type:0,num:0,total_money:0,add_time:0,delivery_comment:"",pay_type:"",total_pass_num:0,unconsume_pass_num:0,pay_msg:"",group_pass:"",deadline:"",can_verify:"",status_msg:"",group_pass_id:""}}},methods:{orderDetailList:function(){var o=this;this.request(r["a"].couponDetail,{order_id:this.order_id,group_pass_id:this.group_pass_id}).then((function(t){o.formData=t.list}))},chooseStoreOk:function(){var o=this;this.$confirm({title:"是否确定核销选择的券码?",centered:!0,onOk:function(){o.request(r["a"].couponVerify,{order_id:o.order_id,group_pass_id:o.group_pass_id}).then((function(t){o.$message.success("核销成功"),o.$emit("notShowDetail")}))}})},chooseStoreCancel:function(){this.$emit("notShowDetail")}}}),c=n,d=(a("25a0"),a("2877")),i=Object(d["a"])(c,e,s,!1,null,"1518f73e",null);t["default"]=i.exports}}]);