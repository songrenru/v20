(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b9ff99b","chunk-48de06b8","chunk-2d0c06af"],{"2eea":function(t,a,e){},"37d8":function(t,a,e){"use strict";e("2eea")},4261:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t._self._c;return a("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[t._v(" Open the message box ")])},s=[],r={downloadExportFile:"/common/common.export/downloadExportFile"},n=r,i="updatable",c={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(e){t.$message.loading({content:a,key:i,duration:0}),console.log("添加导出计划任务成功"),t.file_url=n.downloadExportFile+"?id="+e.export_id,t.file_date=e,t.CheckStatus()}))},CheckStatus:function(){var t=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(a){0==a.error?(t.$message.success({content:"下载成功!",key:i,duration:2}),location.href=a.url):setTimeout((function(){t.CheckStatus(),console.log("重复请求")}),1e3)}))}}},l=c,p=e("2877"),d=Object(p["a"])(l,o,s,!1,null,"dd2f8128",null);a["default"]=d.exports},"4b77":function(t,a,e){"use strict";var o,s=e("ade3"),r=(o={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(s["a"])(o,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(s["a"])(o,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(s["a"])(o,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(s["a"])(o,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(s["a"])(o,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(s["a"])(o,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(s["a"])(o,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(s["a"])(o,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(s["a"])(o,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(s["a"])(o,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(s["a"])(o,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(s["a"])(o,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(s["a"])(o,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(s["a"])(o,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(s["a"])(o,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(s["a"])(o,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(s["a"])(o,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(s["a"])(o,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(s["a"])(o,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(s["a"])(o,"noteInfo","/group/merchant.goods/noteInfo"),Object(s["a"])(o,"orderDetail","/group/merchant.goods/orderDetail"),Object(s["a"])(o,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(s["a"])(o,"getRatioList","/group/merchant.goods/getRatioList"),Object(s["a"])(o,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(s["a"])(o,"couponDetail","/group/merchant.goods/couponDetail"),Object(s["a"])(o,"couponVerify","/group/merchant.goods/couponVerify"),Object(s["a"])(o,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(s["a"])(o,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(s["a"])(o,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(s["a"])(o,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(s["a"])(o,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(s["a"])(o,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),o);a["a"]=r},"65d6":function(t,a,e){},6789:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t._self._c;return a("div",[[a("a-form",{attrs:{layout:"inline","label-col":{span:2},"wrapper-col":{span:22}}},[a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 订单编号: "),a("span",[t._v(t._s(t.formData.real_orderid))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 商品名称: "),a("span",[t._v(" "+t._s(t.formData.s_name)+" "),1==t.formData.is_marketing_goods?a("a",[t._v("(分销商品)")]):t._e()])])],1),a("a-row",[a("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[t._v(" 订单信息 ")])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 订单类型: "),0==t.formData.tuan_type?a("span",[t._v("团购券")]):t._e(),1==t.formData.tuan_type?a("span",[t._v("代金券")]):t._e(),2==t.formData.tuan_type?a("span",[t._v("实物")]):t._e()]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 订单状态: "),a("span",[t._v(t._s(t.formData.pay_msg))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 数量: "),a("span",[t._v(t._s(t.formData.num))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 总价: "),a("span",[t._v(t._s(t.formData.total_money))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 下单时间: "),a("span",[t._v(t._s(t.formData.add_time))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 买家留言: "),a("span",[t._v(t._s(t.formData.delivery_comment))])])],1),t.formData.pay_type?a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 支付方式: "),"offline"==t.formData.pay_type?a("span",[t._v("线下支付")]):t._e(),"wechat"==t.formData.pay_type?a("span",[t._v("微信支付")]):t._e(),"alipay"==t.formData.pay_type?a("span",[t._v("支付宝支付")]):t._e()])],1):t._e(),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 总核销码数: "),a("span",[t._v(t._s(t.formData.total_pass_num))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 未使用核销码数: "),a("span",[t._v(t._s(t.formData.unconsume_pass_num))])])],1),t.formData.adress?a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 收货地址: "),a("span",[t._v(t._s(t.formData.adress))])])],1):t._e(),t.formData.trade_hotel&&1==t.formData.is_hotel?a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 房间类型: "),a("span",[t._v(t._s(t.formData.trade_hotel.retval.cat_name))])])],1):t._e(),t.formData.trade_hotel&&1==t.formData.is_hotel?a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 预定天数: "),a("span",[t._v(t._s(t.formData.trade_hotel.retval.book_day))])])],1):t._e(),t.formData.trade_hotel&&1==t.formData.is_hotel?a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 开始预定时间: "),a("span",[t._v(t._s(t.formData.trade_hotel.retval.dep_time_txt))])])],1):t._e(),t.formData.trade_hotel&&1==t.formData.is_hotel?a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 结束预定时间: "),a("span",[t._v(t._s(t.formData.trade_hotel.retval.end_time_txt))])])],1):t._e(),t.formData.paid?a("div",[a("a-row",[a("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[t._v(" 用户信息 ")])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 用户ID: "),a("span",[t._v(t._s(t.formData.uid))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 用户名: "),a("span",[t._v(t._s(t.formData.nickname))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 订单手机号: "),a("span",[t._v(t._s(t.formData.phone))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 用户手机号: "),a("span",[t._v(t._s(t.formData.user_phone))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 支付: "),a("span",[t._v(t._s(t.formData.payment_money)+" ")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 使用商家会员卡余额: "),a("span",[t._v(t._s(t.formData.merchant_balance))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 余额支付金额: "),a("span",[t._v(t._s(t.formData.balance_pay))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 在线支付金额: "),a("span",[t._v(t._s(t.formData.payment_money))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 余额: "),a("span",[t._v(t._s(t.formData.now_money))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 折扣: "),a("span",[t._v(t._s(t.formData.card_discount))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 赠送余额: "),a("span",[t._v(t._s(t.formData.card_give_money))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 微信优惠: "),a("span",[t._v(t._s(t.formData.wx_cheap))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 平台优惠券: "),a("span",[t._v(t._s(t.formData.coupon_price))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 商家优惠券: "),a("span",[t._v(t._s(t.formData.card_price))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 积分抵扣金额: "),a("span",[t._v(t._s(t.formData.score_deducte))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 积分使用数量: "),a("span",[t._v(t._s(t.formData.score_used_count))])])],1),a("a-row",[a("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[t._v(" 额外信息 ")])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:2}},[t._v(" 备注: "),a("span")]),a("a-col",{staticClass:"mr-20",attrs:{span:10}},[a("a-input",{model:{value:t.formData.note_info,callback:function(a){t.$set(t.formData,"note_info",a)},expression:"formData.note_info"}})],1),a("a-col",{attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.updateOrderNote()}}},[t._v(" 修改 ")])],1)],1),t._l(t.formData.group_pass_list,(function(e,o){return a("a-row",{key:o,staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:23}},[t._v(" 消费密码: "),a("span",[t._v(" "+t._s(e.group_pass)+"     （ "),0==e.status?a("span",[t._v("未核销")]):1==e.status?a("span",[t._v("已核销")]):2==e.status?a("span",[t._v("已退款")]):a("span"),e.staff_name?a("span",[t._v("，店员名称："+t._s(e.staff_name))]):t._e(),e.verify_time_txt?a("span",[t._v("，操作时间："+t._s(e.verify_time_txt))]):t._e(),t._v(" ） ")])])],1)}))],2):t._e()],1)]],2)},s=[],r=(e("a9e3"),e("4b77")),n={name:"DrawerOrderDetail",props:{order_id:{type:[String,Number],default:"0"}},mounted:function(){this.orderDetailList()},data:function(){return{dialogVisible:!0,orderId:this.order_id,formData:{order_id:0,real_orderid:"",s_name:"",tuan_type:0,paid:0,num:0,total_money:0,add_time:0,delivery_comment:"",pay_type:"",total_pass_num:0,unconsume_pass_num:0,uid:0,nickname:"",phone:"",pay_msg:"",user_phone:"",paymoney:0,payment_money:0,balance_pay:0,merchant_balance:0,card_discount:0,card_give_money:0,now_money:0,wx_cheap:0,coupon_price:0,card_price:0,score_deducte:0,score_used_count:0,note_info:"",group_pass_txt:"",group_pass_list:[]}}},methods:{orderDetailList:function(){var t=this;this.request(r["a"].orderDetail,{order_id:this.order_id}).then((function(a){t.formData=a.list}))},chooseStoreOk:function(){this.$emit("notShowDetail")},chooseStoreCancel:function(){this.$emit("notShowDetail")},updateOrderNote:function(){var t=this;this.request(r["a"].updateOrderNote,{order_id:this.order_id,note_info:this.formData.note_info}).then((function(a){a&&t.$message.success("修改成功！")}))}}},i=n,c=(e("89d2"),e("2877")),l=Object(c["a"])(i,o,s,!1,null,"0b9f5e52",null);a["default"]=l.exports},"89d2":function(t,a,e){"use strict";e("65d6")},"8f86":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[[a("div",{staticClass:"mb-10"},[a("a-form",{attrs:{layout:"inline"}},[a("div",{staticClass:"flex search-content"},[a("div",{staticClass:"right flex"},[a("div",[a("a-form-item",[a("a-select",{staticStyle:{width:"102px"},attrs:{placeholder:"订单时间"},on:{change:t.handleChange},model:{value:t.queryParam.is_time,callback:function(a){t.$set(t.queryParam,"is_time",a)},expression:"queryParam.is_time"}},[a("a-select-option",{attrs:{value:"0"}},[t._v(" 下单时间 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 付款时间 ")])],1)],1)],1),a("div",[a("a-form-item",{attrs:{label:""}},[a("a-range-picker",{staticStyle:{width:"260px"},attrs:{ranges:{"过去30天":[t.moment().subtract(30,"days"),t.moment()],"过去15天":[t.moment().subtract(15,"days"),t.moment()],"过去7天":[t.moment().subtract(7,"days"),t.moment()],"今日":[t.moment(),t.moment()]},format:"YYYY-MM-DD"},on:{change:t.onDateRangeChange},model:{value:t.queryParam.time,callback:function(a){t.$set(t.queryParam,"time",a)},expression:"queryParam.time"}})],1)],1),a("div",[a("a-form-item",[a("a-select",{staticStyle:{width:"102px"},attrs:{placeholder:"订单类型"},on:{change:t.handleChange},model:{value:t.queryParam.is_type,callback:function(a){t.$set(t.queryParam,"is_type",a)},expression:"queryParam.is_type"}},[a("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部类型 ")]),a("a-select-option",{attrs:{value:"0"}},[t._v(" 团购券 ")]),a("a-select-option",{attrs:{value:"2"}},[t._v(" 实物 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 代金券 ")]),a("a-select-option",{attrs:{value:"3"}},[t._v(" 场次预约 ")])],1)],1)],1),a("div",[a("a-form-item",[a("a-select",{staticStyle:{width:"195px"},attrs:{placeholder:"支付方式"},on:{change:t.handleChange},model:{value:t.queryParam.is_pay,callback:function(a){t.$set(t.queryParam,"is_pay",a)},expression:"queryParam.is_pay"}},[a("a-select-option",{attrs:{value:""}},[t._v(" 全部支付方式 ")]),a("a-select-option",{attrs:{value:"weixin"}},[t._v(" 微信支付 ")]),a("a-select-option",{attrs:{value:"yzfpay"}},[t._v(" 翼支付线上 ")]),a("a-select-option",{attrs:{value:"weixinh5"}},[t._v(" 微信H5支付 ")]),a("a-select-option",{attrs:{value:"weifutong"}},[t._v(" 威富通[微信支付] ")]),a("a-select-option",{attrs:{value:"wirecard"}},[t._v(" Visa/AisaPay卡 ")]),a("a-select-option",{attrs:{value:"merchantwarrior"}},[t._v(" Visa/Master卡 ")]),a("a-select-option",{attrs:{value:"poli"}},[t._v(" Poli支付 ")]),a("a-select-option",{attrs:{value:"alipayh5"}},[t._v(" 支付宝支付(H5) ")]),a("a-select-option",{attrs:{value:"offline"}},[t._v(" 线下支付 ")]),a("a-select-option",{attrs:{value:"nmg"}},[t._v(" 内蒙古智慧城市 ")]),a("a-select-option",{attrs:{value:"yeepay"}},[t._v(" 银行卡支付（易宝支付） ")]),a("a-select-option",{attrs:{value:"allinpay"}},[t._v(" 银行卡支付（通联支付） ")]),a("a-select-option",{attrs:{value:"baidu"}},[t._v(" 百度钱包支付 ")]),a("a-select-option",{attrs:{value:"unionpay"}},[t._v(" 云闪付 ")]),a("a-select-option",{attrs:{value:"ccb"}},[t._v(" 建设银行 ")]),a("a-select-option",{attrs:{value:"unionpay_international"}},[t._v(" 银联支付（澳洲） ")]),a("a-select-option",{attrs:{value:"quickpay"}},[t._v(" 银联支付（hark） ")]),a("a-select-option",{attrs:{value:"weixinapp"}},[t._v(" 微信APP支付 ")]),a("a-select-option",{attrs:{value:"yzfpay_offline"}},[t._v(" 翼支付线下 ")]),a("a-select-option",{attrs:{value:"balance"}},[t._v(" 余额支付 ")])],1)],1)],1),a("div",[a("a-form-item",[a("a-select",{staticStyle:{width:"110px"},attrs:{placeholder:"订单状态"},on:{change:t.handleChange},model:{value:t.queryParam.status,callback:function(a){t.$set(t.queryParam,"status",a)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部 ")]),a("a-select-option",{attrs:{value:"0"}},[t._v(" 未消费 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 已消费 ")]),a("a-select-option",{attrs:{value:"2"}},[t._v(" 已完成 ")]),a("a-select-option",{attrs:{value:"3"}},[t._v(" 已退款 ")]),a("a-select-option",{attrs:{value:"4"}},[t._v(" 已取消 ")]),a("a-select-option",{attrs:{value:"5"}},[t._v(" 部分消费 ")]),a("a-select-option",{attrs:{value:"6"}},[t._v(" 部分退款 ")]),a("a-select-option",{attrs:{value:"9"}},[t._v(" 已过期平台冻结 ")])],1)],1)],1),a("div",[a("a-form-item",[a("a-select",{staticStyle:{width:"140px"},attrs:{placeholder:"综合搜索"},on:{change:t.handleChange},model:{value:t.queryParam.is_compre,callback:function(a){t.$set(t.queryParam,"is_compre",a)},expression:"queryParam.is_compre"}},[a("a-select-option",{attrs:{value:"0"}},[t._v(" 订单编号 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 支付流水号 ")]),a("a-select-option",{attrs:{value:"2"}},[t._v(" 第三方支付流水号 ")]),a("a-select-option",{attrs:{value:"3"}},[t._v(" 团购名称 ")]),a("a-select-option",{attrs:{value:"4"}},[t._v(" 客户名称 ")]),a("a-select-option",{attrs:{value:"5"}},[t._v(" 客户电话 ")])],1)],1)],1),a("div",[a("a-form-item",[a("a-input",{staticStyle:{width:"160px"},model:{value:t.queryParam.text,callback:function(a){t.$set(t.queryParam,"text",a)},expression:"queryParam.text"}})],1)],1),a("div",[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{icon:"search"},on:{click:function(a){return t.searchBtn()}}},[t._v(" 查询 ")])],1),a("div",[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"download"},on:{click:function(a){return t.$refs.ExportAddModal.exports()}}},[t._v("导出订单 ")])],1)])])])],1)],a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,rowKey:"order_id",loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"note_info",fn:function(e,o){return[a("a-input",{staticClass:"sort-input",staticStyle:{width:"130px"},attrs:{"default-value":e||0,precision:0,min:0},on:{blur:function(a){return t.handleSortChange(a,e,o)}},model:{value:o.note_info,callback:function(a){t.$set(o,"note_info",a)},expression:"record.note_info"}})]}},{key:"begin_time",fn:function(e,o){return a("span",{},[0==o.status?a("div",{staticStyle:{color:"red"}},[t._v("未消费")]):t._e(),1==o.status?a("div",{staticStyle:{color:"green"}},[t._v("已消费")]):t._e(),2==o.status?a("div",{staticStyle:{color:"green"}},[t._v("已完成")]):t._e(),3==o.status?a("div",{staticStyle:{color:"red"}},[t._v("已退款")]):t._e(),4==o.status?a("div",{staticStyle:{color:"red"}},[t._v("已取消")]):t._e(),5==o.status?a("div",{staticStyle:{color:"red"}},[t._v("部分消费")]):t._e(),6==o.status?a("div",{staticStyle:{color:"red"}},[t._v("部分退款")]):t._e(),7==o.status?a("div",{staticStyle:{color:"red"}},[t._v("未支付")]):t._e(),9==o.status?a("div",{staticStyle:{color:"red"}},[t._v("已过期平台冻结")]):t._e(),a("div",[t._v("下单时间："+t._s(o.addTime))]),7!=o.status&&o.payTime?a("div",[t._v("付款时间："+t._s(o.payTime))]):t._e()])}},{key:"sale_set",fn:function(e,o){return a("span",{},[a("div",[t._v("数量："+t._s(o.num))]),a("div",[t._v("总价："+t._s(o.total_money))])])}},{key:"is_group_combine",fn:function(e,o){return a("span",{},[1==o.is_group_combine?a("div",[t._v("优惠组合")]):t._e(),0==o.is_group_combine?a("div",[0==o.tuan_type?a("div",[t._v("团购券")]):t._e(),1==o.tuan_type?a("div",[t._v("代金券")]):t._e(),2==o.tuan_type?a("div",[t._v("实物")]):t._e()]):t._e()])}},{key:"sale_count",fn:function(e,o){return a("span",{},[a("div",[t._v("用户ID："+t._s(o.uid))]),a("div",[t._v("用户名："+t._s(o.user_name))]),a("div",[t._v("订单手机号："+t._s(o.user_phone))])])}},{key:"action",fn:function(e,o){return a("span",{},[a("a",{staticClass:"ant-btn-link pointer",on:{click:function(a){return t.selectStore(o.order_id)}}},[t._v("查看")])])}}])})],1),a("a-drawer",{attrs:{title:"查看订单",width:"40%",visible:t.orderDetailVisible,"body-style":{paddingBottom:"80px"}},on:{close:t.notShowDetail}},[t.orderDetailVisible?a("drawer-order-detail",{attrs:{order_id:t.order_id}}):t._e()],1),a("export-add",{ref:"ExportAddModal",attrs:{exportUrl:t.exportUrl,queryParam:t.queryParam}})],1)],2)},s=[],r=e("5530"),n=(e("d81d"),e("c1df")),i=e.n(n),c=e("4b77"),l=e("4261"),p=e("6789"),d=[],u={name:"OrderList",components:{ExportAdd:l["default"],DrawerOrderDetail:p["default"]},data:function(){return this.cacheData=d.map((function(t){return Object(r["a"])({},t)})),{order_id:0,form:this.$form.createForm(this),mdl:{},orderDetailVisible:!1,loading:!0,id:1,search_data:[],exportUrl:c["a"].orderExportUrl,queryParam:{is_time:"0",is_type:"-1",is_pay:"",status:"-1",is_compre:"0",group_id:""},pagination:{current:1,pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},columns:[{title:"订单编号",dataIndex:"real_orderid",width:150},{title:"名称",dataIndex:"s_name",width:150},{title:"订单信息",dataIndex:"sale_set",scopedSlots:{customRender:"sale_set"},width:100},{title:"订单类型",dataIndex:"is_group_combine",scopedSlots:{customRender:"is_group_combine"},width:100},{title:"用户信息",dataIndex:"sale_count",scopedSlots:{customRender:"sale_count"},width:150},{title:"订单状态",dataIndex:"begin_time",scopedSlots:{customRender:"begin_time"},width:200},{title:"订单备注",dataIndex:"note_info",scopedSlots:{customRender:"note_info"},width:150},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},width:90}],data:d}},watch:{$route:function(){this.initList()}},mounted:function(){this.initList()},methods:{moment:i.a,searchBtn:function(){this.page=1,this.pagination.current=this.page,this.getGoodsList()},getClick:function(t,a){this.$refs.specialModel.getGoodsOrderList(t)},onDateRangeChange:function(t,a){this.$set(this.queryParam,"time",[t[0],t[1]]),this.$set(this.queryParam,"begin_time",a[0]),this.$set(this.queryParam,"end_time",a[1])},initList:function(){this.getGoodsList()},getGoodsList:function(){var t=this;this.queryParam["group_id"]=this.$route.query.group_id,console.log(this.$route.query.group_id),this.queryParam["page"]=this.page,this.loading=!0,c["a"].getGoodsOrderList&&this.request(c["a"].getGoodsOrderList,this.queryParam).then((function(a){t.loading=!1,t.data=a.list,t.pagination.total=a.total}))},addGoods:function(){this.$refs.selectGoupCate.open()},handleChange:function(){},tableChange:function(t){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getGoodsList())},exportOrder:function(){},selectStore:function(t){this.orderDetailVisible=!0,this.order_id=t},onStoreSelect:function(t){this.selectStoreVisible=!1;t.storeName;var a=t.storeIds;console.log(a,"storeIds")},handleSortChange:function(t,a,e){var o=this,s={id:e.order_id,note_info:a};this.request(c["a"].noteInfo,s).then((function(t){o.searchHotList&&o.searchHotList.length&&(o.searchHotList=o.searchHotList.map((function(t){return e.id==t.id&&(t.note_info=a),o.getSearchHotList(),t})))}))},notShowDetail:function(){this.orderDetailVisible=!1,this.getGoodsList()}}},_=u,m=(e("37d8"),e("2877")),v=Object(m["a"])(_,o,s,!1,null,"be221858",null);a["default"]=v.exports}}]);