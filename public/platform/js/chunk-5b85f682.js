(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b85f682","chunk-39762f8c","chunk-2d0c06af"],{"25a0":function(t,e,a){"use strict";a("cfc30")},4261:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[t._v(" Open the message box ")])},s=[],r={downloadExportFile:"/common/common.export/downloadExportFile"},n=r,i="updatable",c={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(a){t.$message.loading({content:e,key:i,duration:0}),console.log("添加导出计划任务成功"),t.file_url=n.downloadExportFile+"?id="+a.export_id,t.file_date=a,t.CheckStatus()}))},CheckStatus:function(){var t=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(e){0==e.error?(t.$message.success({content:"下载成功!",key:i,duration:2}),location.href=e.url):setTimeout((function(){t.CheckStatus(),console.log("重复请求")}),1e3)}))}}},d=c,p=a("2877"),l=Object(p["a"])(d,o,s,!1,null,"dd2f8128",null);e["default"]=l.exports},"4b77":function(t,e,a){"use strict";var o,s=a("ade3"),r=(o={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(s["a"])(o,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(s["a"])(o,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(s["a"])(o,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(s["a"])(o,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(s["a"])(o,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(s["a"])(o,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(s["a"])(o,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(s["a"])(o,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(s["a"])(o,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(s["a"])(o,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(s["a"])(o,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(s["a"])(o,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(s["a"])(o,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(s["a"])(o,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(s["a"])(o,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(s["a"])(o,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(s["a"])(o,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(s["a"])(o,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(s["a"])(o,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(s["a"])(o,"noteInfo","/group/merchant.goods/noteInfo"),Object(s["a"])(o,"orderDetail","/group/merchant.goods/orderDetail"),Object(s["a"])(o,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(s["a"])(o,"getRatioList","/group/merchant.goods/getRatioList"),Object(s["a"])(o,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(s["a"])(o,"couponDetail","/group/merchant.goods/couponDetail"),Object(s["a"])(o,"couponVerify","/group/merchant.goods/couponVerify"),Object(s["a"])(o,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(s["a"])(o,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(s["a"])(o,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(s["a"])(o,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(s["a"])(o,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(s["a"])(o,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),o);e["a"]=r},"54f2":function(t,e,a){},"6c54":function(t,e,a){"use strict";var o,s=a("ade3"),r=(o={getGoodsSortList:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortList",getGoodsSortEdit:"/merchant/merchant.deposit.DepositGoodsSort/handleGoodsSort",getGoodsSortInfo:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortInfo",delGoodsSort:"/merchant/merchant.deposit.DepositGoodsSort/delGoodsSort",goodsEdit:"/merchant/merchant.deposit.DepositGoods/goodsEdit",getGoodsSortSelect:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortSelect",getGoodsList:"/merchant/merchant.deposit.DepositGoods/getGoodsList",getGoodsDetail:"/merchant/merchant.deposit.DepositGoods/getGoodsDetail",delGoods:"/merchant/merchant.deposit.DepositGoods/delGoods",getVerificationList:"/merchant/merchant.deposit.DepositGoodsVerification/getVerificationList",getCashBackList:"/merchant/merchant.Store/getCashBackList",exportCashBackList:"/merchant/merchant.Store/exportCashBackList",goodsTypeList:"/merchant/merchant.CardGoods/goodsTypeList",goodsTypeAdd:"/merchant/merchant.CardGoods/goodsTypeAdd",goodsTypeEdit:"/merchant/merchant.CardGoods/goodsTypeEdit",goodsTypeDel:"/merchant/merchant.CardGoods/goodsTypeDel",goodsList:"/merchant/merchant.CardGoods/goodsList",goodsAdd:"/merchant/merchant.CardGoods/goodsAdd"},Object(s["a"])(o,"goodsEdit","/merchant/merchant.CardGoods/goodsEdit"),Object(s["a"])(o,"goodsDel","/merchant/merchant.CardGoods/goodsDel"),Object(s["a"])(o,"goodsDetail","/merchant/merchant.CardGoods/goodsDetail"),Object(s["a"])(o,"couponList","/merchant/merchant.CardGoods/couponList"),Object(s["a"])(o,"goodsExchangeList","/merchant/merchant.CardGoods/goodsExchangeList"),o);e["a"]=r},9937:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("a-modal",{attrs:{visible:t.dialogVisible,title:"操作券码",centered:"",maskClosable:!1,width:800,okText:"确定核销"},on:{ok:t.chooseStoreOk,cancel:t.chooseStoreCancel}},[[e("a-form",{attrs:{layout:"inline","label-col":{span:2},"wrapper-col":{span:22}}},[e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 券序列码: "),e("span",[t._v(t._s(t.formData.group_pass))])])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 过期时间: "),e("span",[t._v(t._s(t.formData.deadline))])])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 订单编号: "),e("span",[t._v(t._s(t.formData.real_orderid))])])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 商品名称: "),e("span",[t._v(" "+t._s(t.formData.s_name)+" "),1==t.formData.is_marketing_goods?e("a",[t._v("(分销商品)")]):t._e()])])],1),e("a-row",[e("a-col",{staticClass:"mr-10",staticStyle:{"margin-bottom":"15px","font-weight":"bold"},attrs:{span:10}},[t._v(" 订单信息 ")])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 订单类型: "),0==t.formData.tuan_type?e("span",[t._v("团购券")]):t._e(),1==t.formData.tuan_type?e("span",[t._v("代金券")]):t._e(),2==t.formData.tuan_type?e("span",[t._v("实物")]):t._e()]),e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 订单状态: "),e("span",[t._v(t._s(t.formData.pay_msg))])])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 数量: "),e("span",[t._v(t._s(t.formData.num))])]),e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 总价: "),e("span",[t._v(t._s(t.formData.total_money))])])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 下单时间: "),e("span",[t._v(t._s(t.formData.add_time))])])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 买家留言: "),e("span",[t._v(t._s(t.formData.delivery_comment))])])],1),t.formData.pay_type?e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 支付方式: "),"offline"==t.formData.pay_type?e("span",[t._v("线下支付")]):t._e(),"wechat"==t.formData.pay_type?e("span",[t._v("微信支付")]):t._e(),"alipay"==t.formData.pay_type?e("span",[t._v("支付宝支付")]):t._e()])],1):t._e(),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 总核销码数: "),e("span",[t._v(t._s(t.formData.total_pass_num))])]),e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:10}},[t._v(" 未使用核销码数: "),e("span",[t._v(t._s(t.formData.unconsume_pass_num))])])],1)],1)]],2)],1)},s=[],r=(a("a9e3"),a("4b77")),n=(a("6c54"),{name:"CouponDetail",props:{order_id:{type:[String,Number],default:"0"},group_pass_id:{type:[String],default:"0"}},mounted:function(){this.orderDetailList()},data:function(){return{dialogVisible:!0,orderId:this.order_id,id:this.group_pass_id,formData:{order_id:0,real_orderid:"",s_name:"",tuan_type:0,num:0,total_money:0,add_time:0,delivery_comment:"",pay_type:"",total_pass_num:0,unconsume_pass_num:0,pay_msg:"",group_pass:"",deadline:"",can_verify:"",status_msg:"",group_pass_id:""}}},methods:{orderDetailList:function(){var t=this;this.request(r["a"].couponDetail,{order_id:this.order_id,group_pass_id:this.group_pass_id}).then((function(e){t.formData=e.list}))},chooseStoreOk:function(){var t=this;this.$confirm({title:"是否确定核销选择的券码?",centered:!0,onOk:function(){t.request(r["a"].couponVerify,{order_id:t.order_id,group_pass_id:t.group_pass_id}).then((function(e){t.$message.success("核销成功"),t.$emit("notShowDetail")}))}})},chooseStoreCancel:function(){this.$emit("notShowDetail")}}}),i=n,c=(a("25a0"),a("2877")),d=Object(c["a"])(i,o,s,!1,null,"1518f73e",null);e["default"]=d.exports},bac2:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[[e("div",{staticClass:"mb-10"},[e("a-form",{attrs:{layout:"inline"}},[e("div",{staticClass:"flex search-content"},[e("div",{staticClass:"right flex"},[e("div",[e("a-form-item",{attrs:{label:"核销人"}},[e("a-input",{staticStyle:{width:"100px"},model:{value:t.queryParam.staff_name,callback:function(e){t.$set(t.queryParam,"staff_name",e)},expression:"queryParam.staff_name"}})],1)],1),e("div",[e("a-form-item",{attrs:{label:"店铺"}},[e("a-input",{staticStyle:{width:"100px"},model:{value:t.queryParam.store_name,callback:function(e){t.$set(t.queryParam,"store_name",e)},expression:"queryParam.store_name"}})],1)],1),e("div",[e("a-form-item",{attrs:{label:"核销时间"}},[e("a-range-picker",{staticStyle:{width:"260px"},attrs:{ranges:{"过去30天":[t.moment().subtract(30,"days"),t.moment()],"过去15天":[t.moment().subtract(15,"days"),t.moment()],"过去7天":[t.moment().subtract(7,"days"),t.moment()],"今日":[t.moment(),t.moment()]},format:"YYYY-MM-DD"},on:{change:t.onDateRangeChange},model:{value:t.queryParam.time,callback:function(e){t.$set(t.queryParam,"time",e)},expression:"queryParam.time"}})],1)],1),e("div",[e("a-form-item",{attrs:{label:"核销方式"}},[e("a-select",{staticStyle:{width:"102px"},attrs:{placeholder:"核销方式"},on:{change:t.handleChange},model:{value:t.queryParam.verify_type,callback:function(e){t.$set(t.queryParam,"verify_type",e)},expression:"queryParam.verify_type"}},[e("a-select-option",{attrs:{value:"0"}},[t._v(" 全部 ")]),e("a-select-option",{attrs:{value:"1"}},[t._v(" 移动端核销 ")]),e("a-select-option",{attrs:{value:"2"}},[t._v(" pc端核销 ")])],1)],1)],1),e("div",[e("a-form-item",{attrs:{label:""}},[e("a-select",{staticStyle:{width:"102px"},attrs:{placeholder:"状态"},on:{change:t.handleChange},model:{value:t.queryParam.status,callback:function(e){t.$set(t.queryParam,"status",e)},expression:"queryParam.status"}},[e("a-select-option",{attrs:{value:"0"}},[t._v(" 全部状态 ")]),e("a-select-option",{attrs:{value:"1"}},[t._v(" 待核销 ")]),e("a-select-option",{attrs:{value:"2"}},[t._v(" 已核销 ")]),e("a-select-option",{attrs:{value:"3"}},[t._v(" 已过期 ")]),e("a-select-option",{attrs:{value:"4"}},[t._v(" 已退款 ")])],1)],1)],1),e("div",[e("a-form-item",[e("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"综合搜索"},on:{change:t.handleChange},model:{value:t.queryParam.select_type,callback:function(e){t.$set(t.queryParam,"select_type",e)},expression:"queryParam.select_type"}},[e("a-select-option",{attrs:{value:"group_pass"}},[t._v(" 卡券序列号 ")]),e("a-select-option",{attrs:{value:"phone"}},[t._v(" 手机号 ")]),e("a-select-option",{attrs:{value:"nickname"}},[t._v(" 用户呢称 ")]),e("a-select-option",{attrs:{value:"real_orderid"}},[t._v(" 卡券订单号 ")])],1)],1)],1),e("div",[e("a-form-item",[e("a-input",{staticStyle:{width:"100px"},model:{value:t.queryParam.keyword,callback:function(e){t.$set(t.queryParam,"keyword",e)},expression:"queryParam.keyword"}})],1)],1),e("div",[e("a-button",{staticClass:"ml-10 mr-10",on:{click:function(e){return t.resetForm()}}},[t._v(" 重置")])],1),e("div",[e("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchBtn()}}},[t._v(" 查询 ")])],1),e("div",[e("a-button",{staticStyle:{"margin-right":"15px"},attrs:{icon:"download"},on:{click:t.exportOrder}},[t._v("导出订单 ")])],1)])])])],1)],e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"message-suggestions-list-box"},[e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,rowKey:"id",loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"status",fn:function(a,o){return e("span",{},[e("div",{style:"color:"+o.status_color},[t._v(t._s(o.status))])])}},{key:"sale_set",fn:function(a,o){return e("span",{},[e("div",[t._v("数量："+t._s(o.num))]),e("div",[t._v("总价："+t._s(o.total_money))])])}},{key:"is_group_combine",fn:function(a,o){return e("span",{},[1==o.is_group_combine?e("div",[t._v("优惠组合")]):t._e(),0==o.is_group_combine?e("div",[0==o.tuan_type?e("div",[t._v("团购券")]):t._e(),1==o.tuan_type?e("div",[t._v("代金券")]):t._e(),2==o.tuan_type?e("div",[t._v("实物")]):t._e()]):t._e()])}},{key:"sale_count",fn:function(a,o){return e("span",{},[e("div",[t._v("用户ID："+t._s(o.uid))]),e("div",[t._v("用户名："+t._s(o.user_name))]),e("div",[t._v("订单手机号："+t._s(o.user_phone))])])}}])})],1),t.CouponDetailVisible?e("order-detail",{attrs:{order_id:t.order_id,group_pass_id:t.group_pass_id},on:{notShowDetail:t.notShowDetail}}):t._e(),e("export-add",{ref:"ExportAddModal",attrs:{exportUrl:t.exportUrl,queryParam:t.queryParam}})],1)],2)},s=[],r=a("5530"),n=(a("d81d"),a("c1df")),i=a.n(n),c=a("4b77"),d=a("9937"),p=a("4261"),l=[],u={name:"OrderList",components:{OrderDetail:d["default"],ExportAdd:p["default"]},data:function(){return this.cacheData=l.map((function(t){return Object(r["a"])({},t)})),{order_id:0,group_pass_id:0,form:this.$form.createForm(this),mdl:{},CouponDetailVisible:!1,loading:!0,id:1,search_data:[],exportUrl:c["a"].orderExportUrl,queryParam:{verify_type:"0",select_type:"group_pass",status:"0"},pagination:{current:1,pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},columns:[{title:"券名称",dataIndex:"name"},{title:"券序列码",dataIndex:"group_pass"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"店铺名称",dataIndex:"store_name"},{title:"卡券订单号",dataIndex:"real_orderid"},{title:"券类型",dataIndex:"coupon_type"},{title:"用户昵称",dataIndex:"nickname"},{title:"手机号",dataIndex:"phone"},{title:"核销时间",dataIndex:"verify_time"},{title:"核销方式",dataIndex:"verify_type"},{title:"核销人",dataIndex:"staff_name"}],data:l}},watch:{$route:function(){this.initList()}},mounted:function(){this.initList()},methods:{moment:i.a,searchBtn:function(){this.page=1,this.pagination.current=this.page,this.getGoodsList()},getClick:function(t,e){this.$refs.specialModel.getGoodsOrderList(t)},onDateRangeChange:function(t,e){this.$set(this.queryParam,"time",[t[0],t[1]]),this.$set(this.queryParam,"begin_time",e[0]),this.$set(this.queryParam,"end_time",e[1])},initList:function(){this.getGoodsList()},getGoodsList:function(){var t=this;this.queryParam["page"]=this.page,this.loading=!0,c["a"].getGoodsCouponList&&this.request(c["a"].getGoodsCouponList,this.queryParam).then((function(e){t.loading=!1,t.data=e.list,t.pagination.total=e.total}))},addGoods:function(){this.$refs.selectGoupCate.open()},handleChange:function(){},tableChange:function(t){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getGoodsList())},exportOrder:function(){var t=this;this.data.length?this.request(c["a"].exportGoodsCouponList,this.queryParam).then((function(e){t.$message.loading({content:"加载中,请耐心等待,数量越多时间越长。",key:"updatable",duration:0});var a=e.file_url;a&&window.open(a),t.$message.success({content:"下载成功!",key:"updatable",duration:2})})):this.$message.warn("当前没有可以导出的内容")},resetForm:function(){this.$set(this,"queryParam",{verify_type:"0",select_type:"group_pass",status:"0"}),this.$set(this.pagination,"current",1),this.getDataList({store_id:this.store_id})},selectStore:function(t,e){this.CouponDetailVisible=!0,this.order_id=t,this.group_pass_id=e},onStoreSelect:function(t){this.selectStoreVisible=!1;t.storeName;var e=t.storeIds;console.log(e,"storeIds")},notShowDetail:function(){this.CouponDetailVisible=!1,this.getGoodsList()}}},m=u,g=(a("c5de"),a("2877")),h=Object(g["a"])(m,o,s,!1,null,"3c97ff82",null);e["default"]=h.exports},c5de:function(t,e,a){"use strict";a("54f2")},cfc30:function(t,e,a){}}]);