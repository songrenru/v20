(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ace7f62","chunk-278db2de","chunk-57c8c772","chunk-1b82d72b"],{"0dbb":function(e,t,s){},"10b7":function(e,t,s){},4604:function(e,t,s){"use strict";s("0dbb")},"5f66":function(e,t,s){"use strict";var r={getOrderList:"/mall/storestaff.MallOrder/getOrderList",exportOrder:"/mall/storestaff.MallOrder/exportOrder",orderTaking:"/mall/storestaff.MallOrder/orderTaking",deliverGoodsByHouseman:"/mall/storestaff.MallOrder/deliverGoodsByHouseman",staffVerify:"/mall/storestaff.MallOrder/staffVerify",postponeDelivery:"/mall/storestaff.MallOrder/postponeDelivery",agreeRefund:"/mall/storestaff.MallOrder/AgreeRefund",getExpress:"/mall/storestaff.MallOrder/getExpress",deliverGoodsByExpress:"/mall/storestaff.MallOrder/deliverGoodsByExpress",viewLogistics:"/mall/storestaff.MallOrder/viewLogistics",refuseRefund:"/mall/storestaff.MallOrder/RefuseRefund",clerkDiscount:"/mall/storestaff.MallOrder/clerkDiscount",getOrderDetails:"/mall/storestaff.MallOrder/getOrderDetails",clerkNotes:"/mall/storestaff.MallOrder/clerkNotes",getPeriodicList:"/mall/storestaff.MallOrder/getPeriodicList",downExcel:"/mall/storestaff.MallOrder/downExcel",downFailExcel:"/mall/storestaff.MallOrder/downFailExcel",uploadUrl:"/common/common.UploadFile/uploadFile",uploadExcel:"/mall/storestaff.MallOrder/uploadFile",getList:"/mall/storestaff.MallOrder/shopGoodsBatchLogList",getOrderListCopy:"/mall/storestaff.MallOrder/getOrderListCopy",getOrderDetailsCopy:"/mall/storestaff.MallOrder/getOrderDetailsCopy"};t["a"]=r},"67b4":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1,destroyOnClose:!0},on:{cancel:e.handleCancel}},[s("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[s("a-form-model-item",{attrs:{label:"快递"}},[s("a-select",{attrs:{placeholder:"请选择"},on:{change:e.hanleChange},model:{value:e.formData.express_id,callback:function(t){e.$set(e.formData,"express_id",t)},expression:"formData.express_id"}},e._l(e.expressOptions,(function(t){return s("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+e._s(t.is_singface&&"1"==t.is_singface?"（电子面单）":"")+" ")])})),1)],1),s("a-form-model-item",{attrs:{label:"快递单号"}},[s("a-input",{attrs:{placeholder:"请输入快递单号"},model:{value:e.formData.express_no,callback:function(t){e.$set(e.formData,"express_no",t)},expression:"formData.express_no"}})],1)],1),s("template",{slot:"footer"},[s("div",{staticClass:"flex justify-center align-center"},[s("a-button",{key:"back",staticClass:"mr-20",on:{click:function(t){return e.btnOpt(2)}}},[e._v(" 普通发货 ")]),s("a-button",{key:"submit",attrs:{type:"primary",disabled:"2"==e.fh_type||"1"==e.fh_type&&0==e.is_singface},on:{click:function(t){return e.btnOpt(1)}}},[e._v(" 电子面单发货 ")])],1)])],2)],1)},o=[],i=(s("a9e3"),s("d3b7"),s("159b"),s("b0c0"),s("ac1f"),s("5f66")),a={props:{visible:Boolean,title:String,order:Object,nowPeriodicItem:Object,fh_type:[String,Number]},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},formData:{order_id:"",activity_type:"",periodic_order_id:"",current_periodic:"",periodic_count:"",express_type:"",express_no:"",express_id:"",express_name:"",fh_type:"1"},expressOptions:[],is_singface:1}},created:function(){this.getExpress()},methods:{getExpress:function(){var e=this;this.request(i["a"].getExpress,{}).then((function(t){e.expressOptions=t||[],e.order&&e.order.express_id&&e.$set(e.formData,"express_id",e.order.express_id)}))},hanleChange:function(e){var t=this;this.$set(this.formData,"express_id",e),this.expressOptions.forEach((function(s){s.id==e&&(t.$set(t.formData,"express_name",s.name),t.is_singface=s.is_singface)}))},btnOpt:function(e){var t=this;if(this.$set(this.formData,"express_type",e),this.formData.express_id){if(2==e){if(!this.formData.express_no)return void this.$message.error("请输入快递单号");var s=/[\u4e00-\u9fa5]/;if(s.test(this.formData.express_no))return void this.$message.error("不能输入中文")}var r=this.order,o=r.order_id,a=r.goods_activity_type,n=r.order_type,l=r.current_periodic,c=r.periodic_count,d=this.nowPeriodicItem.purchase_order_id;this.$set(this.formData,"order_id",o),this.$set(this.formData,"activity_type",a),"periodic"==n&&(this.$set(this.formData,"periodic_order_id",d),this.$set(this.formData,"current_periodic",l),this.$set(this.formData,"periodic_count",c)),this.$set(this.formData,"fh_type",this.fh_type),this.request(i["a"].deliverGoodsByExpress,this.formData).then((function(e){var s="1"==t.fh_type?"订单发货成功":"快递更改成功";t.$message.success(s),Object.assign(t.$data,t.$options.data()),t.handleCancel(),t.$emit("updateList")}))}else this.$message.error("请选择快递")},handleCancel:function(){this.$emit("handleCancel"),Object.assign(this.$data,this.$options.data())}}},n=a,l=s("2877"),c=Object(l["a"])(n,r,o,!1,null,"46b05dd1",null);t["default"]=c.exports},"96db":function(e,t,s){"use strict";s("10b7")},"99a5":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"order-item-wrap"},[s("a-row",{staticClass:"order-item-header",attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("a-col",{attrs:{span:10}},[s("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("a-col",[e._v("订单编号："+e._s(e.order.order_no))]),s("a-col",[e._v("下单时间："+e._s(e.order.create_time))]),s("a-col",[e._v("订单类型："+e._s(e.order.order_type_txt))])],1)],1),s("a-col",{attrs:{span:14}},[s("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("a-col",{staticClass:"text-center",attrs:{span:16}},[e._v("付款方式："+e._s(e.order.pay_type))]),s("a-col",{staticClass:"text-center",attrs:{span:4,offset:4}},[s("a-button",{attrs:{type:"link"},on:{click:e.orderDetail}},[e._v(" 查看详情")])],1)],1)],1)],1),s("a-row",{staticClass:"order-item-content",attrs:{type:"flex",justify:"space-between"}},[s("a-col",{attrs:{span:10}},["periodic"==e.order.order_type?s("div",{staticClass:"goods-wrap"},[e._l(e.goods,(function(t,r){return s("div",{key:r,staticClass:"goods-item"},[s("a-row",{staticClass:"pt-20 pb-20 order-item-content-goods",attrs:{type:"flex",justify:"space-between",align:"middle"}},[e.order.periodic_info&&e.order.periodic_info.length?s("a-col",{attrs:{span:9}},[s("div",{staticClass:"flex align-center"},[s("a-avatar",{attrs:{shape:"square",size:64,src:t.image}}),s("div",{staticClass:"flex flex-column pl-10 pr-10 flex-1 sx-hidden"},[s("span",{staticClass:"goods-name flex-1"},[e._v(e._s(t.goods_name))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.sku_info,expression:"goodsItem.sku_info"}]},[e._v(e._s(t.sku_info))])])],1)]):s("a-col",{attrs:{span:12}},[s("div",{staticClass:"flex align-center"},[s("a-avatar",{attrs:{shape:"square",size:64,src:t.image}}),s("div",{staticClass:"flex flex-column pl-10 pr-10 flex-1 sx-hidden"},[s("span",{staticClass:"goods-name flex-1"},[e._v(e._s(t.goods_name))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.sku_info,expression:"goodsItem.sku_info"}]},[e._v(e._s(t.sku_info))])])],1)]),s("a-col",{staticClass:"text-center",attrs:{span:6}},[e._v(e._s(e.currency)+e._s(t.price))]),e.order.periodic_info&&e.order.periodic_info.length?s("a-col",{staticClass:"text-center goods-num",attrs:{span:6}},[s("span",[e._v("共"+e._s(e.order.periodic_info[0].periodic_count)+"期")]),s("a-divider",{attrs:{type:"vertical"}}),s("span",[e._v("共"+e._s(e.order.periodic_info[0].periodic_count*e.order.total_num)+"件")])],1):e.order.status>=60&&e.order.status<80?s("a-col",{staticClass:"text-center goods-num",attrs:{span:6}},[e._v(" "+e._s(t.num)+" ")]):s("a-col",{attrs:{span:6}},[s("a-row",[s("span",[e._v("共"+e._s(e.order.periodic_num)+"期")]),s("a-divider",{attrs:{type:"vertical"}}),s("span",[e._v("共"+e._s(e.order.periodic_num*e.order.total_num)+"件")])],1),s("a-row",[e._v(" 暂未到下期发货时间 ")])],1),s("a-col",{staticClass:"text-center goods-num",attrs:{span:3},on:{click:e.changeIcon}},[s("a-icon",{attrs:{type:e.icon_type,hidden:!e.order.periodic_info}})],1)],1)],1)})),e._l(e.order.periodic_info,(function(t,r){return e.order.periodic_info.length&&"down-circle"==e.icon_type?s("div",{key:r,staticClass:"goods-item"},[s("a-row",{staticClass:"pt-20 pb-20 order-item-content-goods_periodic",attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("a-col",{attrs:{span:6}},[s("a-tag",{attrs:{color:"#f50"}},[e._v("第"+e._s(t.current_periodic)+"期")])],1),s("a-col",{attrs:{span:3}},[s("span",[e._v("数量X"+e._s(e.order.total_num))])]),s("a-col",{attrs:{span:10}},[s("span",[e._v(e._s(t.is_complete_txt))]),s("a-divider",{attrs:{type:"vriticle"}}),s("span",[e._v("期望送达时间："+e._s(t.periodic_date))])],1),s("a-col",{attrs:{span:5}},[s("div",{staticClass:"content-item"},e._l(e.periodicBtnListArr[r],(function(r){return s("span",{key:r.props},[1==r.show?s("a-button",{style:{color:r.color},attrs:{type:"link"},on:{click:function(s){return e.btnOpt(r,t)}}},[e._v(" "+e._s(r.label)+" ")]):e._e()],1)})),0)])],1)],1):e._e()}))],2):s("div",{staticClass:"goods-wrap"},e._l(e.goods,(function(t,r){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"goodsItem.show"}],key:r,staticClass:"goods-item"},[s("a-row",{staticClass:"pt-20 pb-20 order-item-content-goods",class:1!=r&&e.fold&&e.goods.length>1||r!=e.goods.length-1&&!e.fold?"border-bottom":"",attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("a-col",{attrs:{span:12}},[s("div",{staticClass:"flex align-center"},[s("a-avatar",{attrs:{shape:"square",size:64,src:t.image}}),s("div",{staticClass:"flex flex-column pl-10 pr-10 flex-1 sx-hidden"},[s("span",{staticClass:"goods-name flex-1"},[e._v(e._s(t.goods_name))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.sku_info,expression:"goodsItem.sku_info"}]},[e._v(e._s(t.sku_info))]),1==t.is_gift?s("span",[s("a-tag",{attrs:{color:"#108ee9"}},[e._v("赠品")])],1):e._e(),t.refund_desc?s("span",e._l(t.refund_desc,(function(t,r){return s("a-tag",{key:r,attrs:{color:"red"}},[e._v(e._s(t))])})),1):e._e()])],1)]),s("a-col",{staticClass:"text-center",attrs:{span:6}},[e._v(e._s(e.currency)+e._s(t.price))]),s("a-col",{staticClass:"text-center goods-num",attrs:{span:6}},[s("span",[e._v(e._s(t.num))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.goods.length>2&&1==r&&e.fold,expression:"goods.length > 2 && goodsIndex == 1 && fold"}],staticClass:"fold-btn"},[s("a-button",{key:"unfold",attrs:{type:"link"},on:{click:function(t){return e.foldMenu("unfold")}}},[e._v(" 展开"),s("a-icon",{attrs:{type:"down"}})],1)],1),s("span",{directives:[{name:"show",rawName:"v-show",value:r==e.goods.length-1&&!e.fold,expression:"goodsIndex == goods.length - 1 && !fold"}],staticClass:"fold-btn"},[s("a-button",{key:"fold",attrs:{type:"link"},on:{click:function(t){return e.foldMenu("fold")}}},[e._v(" 收起"),s("a-icon",{attrs:{type:"up"}})],1)],1)])],1)],1)})),0)]),s("a-col",{attrs:{span:14}},[s("a-row",{staticClass:"height-inherit",attrs:{type:"flex",justify:"space-between"}},[s("a-col",{attrs:{span:4}},[s("div",{staticClass:"content-item"},[s("span",[e._v(e._s(e.order.username))]),s("span",[e._v(e._s(e.order.phone))])])]),s("a-col",{attrs:{span:4}},[s("div",{staticClass:"content-item"},[s("span",[e._v(e._s(e.order.address))])])]),s("a-col",{attrs:{span:4}},[s("div",{staticClass:"content-item"},[e.order.periodic_count&&"periodic"==e.order.order_type?s("span",[s("span",[e._v(" 共计 "+e._s(e.order.periodic_count)+" 期 ")]),e.order.refund_count_periodic?s("span",[e._v(" 退款 "),s("span",{staticClass:"cr-red"},[e._v(" "+e._s(e.order.refund_count_periodic)+" ")]),e._v(" 期 ")]):e._e()]):e._e(),s("span",[e._v("商品总价："+e._s(e.currency)+e._s(e.order.money_total))]),e.order.discount_total?s("span",{staticClass:"popover"},[s("a-popover",{attrs:{title:"",trigger:"click",getPopupContainer:function(e){return e.parentNode}},model:{value:e.discountTotalVisible,callback:function(t){e.discountTotalVisible=t},expression:"discountTotalVisible"}},[s("span",{attrs:{slot:"content"},slot:"content"},[s("a-list",{attrs:{"item-layout":"horizontal","data-source":e.discountList},scopedSlots:e._u([{key:"renderItem",fn:function(t){return t.value&&0!=t.value?s("a-list-item",{staticClass:"flex"},[s("a-badge",{attrs:{color:"red",text:t.label+"：-"+e.currency+t.value}})],1):e._e()}}],null,!0)})],1),e.order.discount_total&&0!=e.order.discount_total?s("span",{staticClass:"pointer",on:{click:function(t){e.discountTotalVisible=!e.discountTotalVisible}}},[e._v(" 总优惠 "),s("a-icon",{attrs:{type:"exclamation-circle"}}),e._v(" ： "),s("span",[e._v("-"+e._s(e.currency)+e._s(e.order.discount_total))])],1):e._e()])],1):e._e(),e.order.money_freight&&0!=e.order.money_freight?s("span",[e._v(" 运费：+"+e._s(e.currency)+e._s(e.order.money_freight)+" ")]):e._e(),e.order.bargain_price&&0!=e.order.bargain_price&&"prepare"==e.order.order_type?s("span",[e._v(" 定金"+e._s(e.currency)+e._s(e.order.bargain_price)+" "),e.order.deduct_price&&0!=e.order.deduct_price?s("span",[e._v(" 抵"+e._s(e.currency)+e._s(e.order.deduct_price)+" ")]):e._e()]):e._e(),e.order.status&&e.order.bargain_price&&0!=e.order.bargain_price&&"prepare"==e.order.order_type?s("span",{staticClass:"cr-red"},[e._v(" 已支付定金："+e._s(e.currency)+e._s(e.order.real_bargain_price)+" ")]):e._e(),s("span",{staticClass:"fw-bold popconfirm"},[0==e.order.status?s("span",{staticClass:"cr-black"},[e._v("待付款："),s("span",{staticClass:"cr-red"},[e._v(e._s(e.currency)+e._s(e.order.real_bargain_price))])]):e._e(),1==e.order.status?s("span",{staticClass:"cr-black"},[e._v("尾款待付款："),s("span",{staticClass:"cr-red"},[e._v(e._s(e.currency)+e._s(e.order.rest_price))])]):e._e(),e.order.status>=10?s("span",{staticClass:"cr-black"},[e._v("实付款："),s("span",{staticClass:"cr-red"},[e._v(e._s(e.currency)+e._s(e.order.money_real))])]):e._e(),s("a-popconfirm",{attrs:{"ok-text":"确认","cancel-text":"取消",visible:e.moneyRealVisible,getPopupContainer:function(e){return e.parentNode}},on:{confirm:e.clerkDiscountConfoirm,cancel:function(t){e.after_money="",e.moneyRealVisible=!1}}},[s("template",{slot:"title"},[s("p",[e._v("确认修改待付款金额？")]),s("p",[s("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入",min:0},model:{value:e.after_money,callback:function(t){e.after_money=t},expression:"after_money"}})],1)]),0==e.order.status&&1==e.order.clerk_modify?s("a-icon",{staticClass:"ml-5",attrs:{type:"form"},on:{click:function(t){e.moneyRealVisible=!e.moneyRealVisible}}}):e._e()],2)],1),e.order.status>=60&&e.order.status<80&&(e.order.refund_money_periodic&&0!=e.order.refund_money_periodic||e.order.refund_money&&0!=e.order.refund_money)&&1==e.order.is_all?s("span",{staticClass:"cr-red"},[e._v(" 退款金额："+e._s(e.currency)+e._s("periodic"==e.order.order_type?e.order.refund_money_periodic:e.order.refund_money)+" ")]):e._e(),e.order.status>=60&&e.order.status<80&&(e.order.refund_money_periodic&&0!=e.order.refund_money_periodic||e.order.refund_money&&0!=e.order.refund_money)&&0==e.order.is_all?s("span",{staticClass:"cr-red"},[e._v(" 部分退款金额："+e._s(e.currency)+e._s("periodic"==e.order.order_type?e.order.refund_money_periodic:e.order.refund_money)+" ")]):e._e()])]),s("a-col",{attrs:{span:4}},[s("div",{staticClass:"content-item"},[s("span",[e._v(e._s(e.order.express_style_txt))]),1==e.order.express_style&&"periodic"!=e.order.order_type?s("span",[e._v("期望送达时间："+e._s(e.order.current_time))]):e._e()])]),s("a-col",{attrs:{span:4}},[s("div",{staticClass:"content-item"},[s("span",[s("span",[e._v(e._s(e.order.status_txt||"---"))])]),e.order.express_current_time?s("span",{staticClass:"cr-red"},[e._v(" "+e._s(e.moment(e.order.express_current_time).format("YYYY.MM.DD"))+"送达 ")]):e._e(),10==e.order.status&&e.order.send_time&&"prepare"==e.order.order_type?s("span",{staticClass:"cr-red"},[e._v(" 发货时间："+e._s(e.moment(e.order.send_time).format("YYYY.MM.DD"))+" ")]):e._e()])]),s("a-col",{attrs:{span:4}},[s("div",{staticClass:"content-item"},[e._v(" "+e._s(e.order.clerk_remark?e.order.clerk_remark:"---")+" ")])]),s("a-col",{attrs:{span:4}},[s("div",{staticClass:"content-item"},[s("span",[e._v(e._s(e.order.store_name))])])]),s("a-col",{attrs:{span:4}},[e.isHasBtn||"periodic"==e.order.goods_activity_type&&e.order.status>=60&&e.order.status<80?s("div",{staticClass:"content-item"},e._l(e.btnList,(function(t){return s("span",{key:t.props},[1==t.show?s("a-button",{style:{color:t.color},attrs:{type:"link"},on:{click:function(s){return e.btnOpt(t)}}},[e._v(" "+e._s(t.label)+" ")]):e._e()],1)})),0):s("div",{staticClass:"content-item"},[e._v("---")])])],1)],1)],1),"express_btn"==e.currentBtn.props?s("deliverGoodsCopy",{attrs:{visible:e.deliverGoodsVisible,title:e.currentBtn.title,order:e.order,nowPeriodicItem:e.nowPeriodicItem,fh_type:1},on:{handleCancel:function(t){e.deliverGoodsVisible=!1},updateList:e.updateList}}):e._e(),"trajectory_btn"==e.currentBtn.props||"logistics_btn"==e.currentBtn.props?s("logisticsCopy",{attrs:{visible:e.logisticsVisible,title:e.currentBtn.title,order:e.order,nowPeriodicItem:e.nowPeriodicItem},on:{handleCancel:function(t){e.logisticsVisible=!1}}}):e._e(),"refuse_refund_btn"==e.currentBtn.props?s("refuseRefundCopy",{attrs:{visible:e.refuseRefundVisible,title:e.currentBtn.title,order:e.order,nowPeriodicItem:e.nowPeriodicItem},on:{handleCancel:function(t){e.refuseRefundVisible=!1},updateList:e.updateList}}):e._e()],1)},o=[],i=(s("a9e3"),s("d81d"),s("4de4"),s("d3b7"),s("c1df")),a=s.n(i),n=s("5f66"),l=s("67b4"),c=s("b38b4"),d=s("ec449"),p={props:{order:Object,tabStatus:[Number,String]},components:{deliverGoodsCopy:l["default"],logisticsCopy:c["default"],refuseRefundCopy:d["default"]},data:function(){return{fold:!0,discountTotalVisible:!1,goods:[],discountList:[{label:"平台优惠券优惠金额",value:"",props:"discount_system_coupon"},{label:"商家优惠券优惠金额",value:"",props:"discount_merchant_coupon"},{label:"商家会员卡优惠金额",value:"",props:"discount_merchant_card"},{label:"平台会员等级优惠金额",value:"",props:"discount_system_level"},{label:"店员优惠金额",value:"",props:"discount_clerk_money"},{label:"参加活动优惠金额",value:"",props:"discount_act_money"}],btnList:[{label:"接单",props:"take_btn",show:"0",action:"",tips:"是否确定接单？",success:"接单成功",api:"orderTaking",color:"#1890ff"},{label:"骑手配送",props:"hoseman_btn",show:"0",action:"",tips:"是否确定骑手配送？",success:"订单已转至骑手配送！",api:"deliverGoodsByHouseman",color:"#1890ff"},{label:"店员核销",props:"clerk_btn",show:"0",action:"confirm",tips:"是否确定核销？",success:"该订单已核销",api:"staffVerify",color:"#1890ff"},{label:"快递发货",props:"express_btn",show:"0",action:"modal",title:"发货",color:"#1890ff"},{label:"查看物流",props:"logistics_btn",show:"0",action:"modal",title:"查看物流",color:"#1890ff"},{label:"顺延配送",props:"postpone_btn",show:"0",action:"confirm",tips:"是否确定顺延配送？",success:"该订单已顺延配送",api:"postponeDelivery",color:"rgb(250, 173, 20)"},{label:"骑手轨迹",props:"trajectory_btn",show:"0",action:"modal",title:"骑手轨迹",color:"#1890ff"},{label:"同意退款",props:"agree_refund_btn",show:"0",action:"confirm",tips:"是否确定同意退款？",success:"同意退款成功",api:"agreeRefund",color:"#1890ff"},{label:"拒绝退款",props:"refuse_refund_btn",show:"0",action:"modal",title:"拒绝退款",color:"rgb(250, 173, 20)"}],currentBtn:"",deliverGoodsVisible:!1,logisticsVisible:!1,refuseRefundVisible:!1,moneyRealVisible:!1,after_money:"",isHasBtn:0,isHasPeriodicBtn:[],periodicBtnListArr:[],currency:"￥",icon_type:"right-circle",nowPeriodicItem:[]}},watch:{order:function(){this.initGoods(),this.initDiscountList(),this.initBtnList(),this.initPeriodicBtnList()}},mounted:function(){this.initGoods(),this.initDiscountList(),this.initBtnList(),this.initPeriodicBtnList()},methods:{moment:a.a,foldMenu:function(e){"unfold"==e?(this.fold=!1,this.goods=this.goods.map((function(e,t){return e.show=!0,e}))):(this.fold=!0,this.initGoods())},initGoods:function(){this.goods=this.order&&this.order.children?this.order.children:[],this.goods.length&&(this.goods=this.goods.map((function(e,t){return e.show=!(t>1),e}))),console.log(this.goods)},initDiscountList:function(){var e=this;this.discountList=this.discountList.map((function(t){return e.order&&(t.value=e.order[t.props]),t}))},initBtnList:function(){var e=this;this.btnList=this.btnList.map((function(t){return t.show=e.order.button[t.props],(70==e.order.status&&("logistics_btn"==t.props||"trajectory_btn"==t.props)||e.order.status<60&&"periodic"==e.order.goods_activity_type)&&(t.show=0),t})),this.isHasBtn=this.btnList.filter((function(e){return 1==e.show})).length},initPeriodicBtnList:function(){var e=this;if(this.order.periodic_info)for(var t=function(t){var s=[{label:"接单",props:"take_btn",show:"0",action:"",tips:"是否确定接单？",success:"接单成功",api:"orderTaking",color:"#1890ff"},{label:"骑手配送",props:"hoseman_btn",show:"0",action:"",tips:"是否确定骑手配送？",success:"订单已转至骑手配送！",api:"deliverGoodsByHouseman",color:"#1890ff"},{label:"店员核销",props:"clerk_btn",show:"0",action:"confirm",tips:"是否确定核销？",success:"该订单已核销",api:"staffVerify",color:"#1890ff"},{label:"快递发货",props:"express_btn",show:"0",action:"modal",title:"发货",color:"#1890ff"},{label:"查看物流",props:"logistics_btn",show:"0",action:"modal",title:"查看物流",color:"#1890ff"},{label:"顺延配送",props:"postpone_btn",show:"0",action:"confirm",tips:"是否确定顺延配送？",success:"该订单已顺延配送",api:"postponeDelivery",color:"rgb(250, 173, 20)"},{label:"骑手轨迹",props:"trajectory_btn",show:"0",action:"modal",title:"骑手轨迹",color:"#1890ff"},{label:"同意退款",props:"agree_refund_btn",show:"0",action:"confirm",tips:"是否确定同意退款？",success:"同意退款成功",api:"agreeRefund",color:"#1890ff"},{label:"拒绝退款",props:"refuse_refund_btn",show:"0",action:"modal",title:"拒绝退款",color:"rgb(250, 173, 20)"}];e.periodicBtnListArr[t]=s.map((function(s){return s.show=e.order.periodic_info[t].button[s.props],s}))},s=0;s<this.order.periodic_info.length;s++)t(s)},btnOpt:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.currentBtn=e,console.log(this.currentBtn,"this.currentBtn");var r=this.currentBtn,o=r.api,i=void 0===o?"":o,a=(r.success,r.tips),n=void 0===a?"":a,l=r.action,c=void 0===l?"":l,d=r.props,p=void 0===d?"":d;c||i&&this.btnRequest(this.order,this.currentBtn,s),"confirm"==c&&this.$confirm({title:n||"提醒",content:"",okText:"确认",cancelText:"取消",onOk:function(){i&&t.btnRequest(t.order,t.currentBtn,s)},onCancel:function(){console.log("Cancel"),t.currentBtn=""},class:"test"}),"modal"==c&&("express_btn"==p?this.deliverGoodsVisible=!0:"trajectory_btn"==p||"logistics_btn"==p?this.logisticsVisible=!0:"refuse_refund_btn"==p&&(this.refuseRefundVisible=!0),this.nowPeriodicItem=s)},btnRequest:function(e,t){var s=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=this.currentBtn,i=o.api,a=void 0===i?"":i,l=o.success,c=void 0===l?"":l,d=(o.tips,o.action,o.props),p=void 0===d?"":d,_=e.order_id,u=e.refund_id,f=e.is_all,m=e.order_type,h=e.status,v={order_id:_},b=["postpone_btn","take_btn","agree_refund_btn","hoseman_btn"];"periodic"==m&&-1!=b.indexOf(p)&&(v.periodic_order_id=r.purchase_order_id,v.current_periodic=r.current_periodic,v.periodic_count=r.periodic_count),h>=60&&h<70&&-1!=b.indexOf(p)&&(v.refund_id=u,v.is_all=f),this.request(n["a"][a],v).then((function(e){s.$message.success(c),s.updateList()}))},clerkDiscountConfoirm:function(){var e=this,t=["",null,void 0,"null","undefined"];if(-1==t.indexOf(this.after_money)){var s={order_id:this.order.order_id,before_money:this.order.money_real,after_money:this.after_money};this.request(n["a"].clerkDiscount,s).then((function(t){e.$message.success("修改成功"),e.after_money="",e.moneyRealVisible=!1,e.updateItem(e.order.order_id)}))}else this.$message.error("请输入修改后的金额")},updateList:function(){this.$emit("getOrderList")},updateItem:function(e){this.$emit("updateItem",{order_id:e})},orderDetail:function(){var e=this.order,t=e.order_id,s=void 0===t?"":t,r=e.periodic_order_id,o=void 0===r?"":r,i=e.order_type,a=e.refund_id,n=void 0===a?"":a,l={order_id:s,tabStatus:this.tabStatus};o&&"periodic"==i&&(l.periodic_order_id=o),n&&(l.refund_id=n);var c=this.$router.resolve({path:"/storestaff/storestaff.mall/mall/orderDetailCopy",query:l});window.open(c.href,"_blank")},changeIcon:function(){this.icon_type="down-circle"==this.icon_type?"right-circle":"down-circle"}}},_=p,u=(s("4604"),s("2877")),f=Object(u["a"])(_,r,o,!1,null,"c8e26d62",null);t["default"]=f.exports},b38b4:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1,footer:null},on:{ok:e.handleCancel,cancel:e.handleCancel}},[e.rider_name?s("span",[s("span",[e._v("骑手："+e._s(e.rider_name))]),s("a-divider",{attrs:{type:"virticle"}}),s("span",[e._v("骑手号码："+e._s(e.rider_phone))]),s("a-divider")],1):e._e(),e.logistics.length?s("a-timeline",{attrs:{pending:e.pending,reverse:!1}},e._l(e.logistics,(function(t,r){return s("a-timeline-item",{key:r},[s("p",{staticClass:"mb-0"},[e._v(e._s(t.time))]),s("span",[e._v(e._s(t.context))])])})),1):s("a-empty",{attrs:{image:e.simpleImage}},[s("span",{attrs:{slot:"description"},slot:"description"},[e._v("暂无物流信息")])])],1)],1)},o=[],i=(s("06f4"),s("fc25")),a=(s("16c9"),s("387a")),n=s("8bbf"),l=s.n(n),c=s("5f66"),d=s("c1df"),p=s.n(d);l.a.use(a["a"]),l.a.use(i["a"]);var _={props:{visible:Boolean,title:String,nowPeriodicItem:Object,order:Object},data:function(){return{logistics:[],pending:!1,simpleImage:"",rider_name:"",rider_phone:""}},watch:{visible:{deep:!0,handler:function(e){e&&this.viewLogistics()}}},beforeCreate:function(){this.simpleImage=i["a"].PRESENTED_IMAGE_SIMPLE},mounted:function(){20!=this.order.status&&20!=this.nowPeriodicItem.is_complete||(this.pending="正在配送中..."),this.viewLogistics()},methods:{moment:p.a,viewLogistics:function(){var e=this,t=this.order,s=t.order_id,r=t.order_type,o=t.express_style,i=this.nowPeriodicItem.purchase_order_id;this.request(c["a"].viewLogistics,{order_id:s,periodic_order_id:i&&"periodic"==r?i:"",order_type:r,express_style:o}).then((function(t){t?(e.logistics=t.list||[],e.rider_name=t.rider_name,e.rider_phone=t.rider_phone):1===t.errCode&&e.$message.warn(t.errMsg)}))},handleCancel:function(){this.$emit("handleCancel")}}},u=_,f=(s("96db"),s("2877")),m=Object(f["a"])(u,r,o,!1,null,"d096130e",null);t["default"]=m.exports},ec449:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[s("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[s("a-form-model-item",{attrs:{label:""}},[s("a-input",{staticStyle:{height:"200px",resize:"none"},attrs:{type:"textarea",autosize:"",placeholder:"请输入拒绝理由"},model:{value:e.formData.reason,callback:function(t){e.$set(e.formData,"reason",t)},expression:"formData.reason"}})],1)],1)],1)],1)},o=[],i=s("5f66"),a={props:{visible:Boolean,title:String,nowPeriodicItem:Object,order:Object},data:function(){return{labelCol:{span:0},wrapperCol:{span:24},formData:{order_id:"",reason:"",status:""},expressOptions:[]}},created:function(){},methods:{handleOk:function(){var e=this;this.formData.reason?(this.$set(this.formData,"order_id",this.order.order_id),this.$set(this.formData,"status",this.order.status),this.$set(this.formData,"refund_id",this.order.refund_id),this.request(i["a"].refuseRefund,this.formData).then((function(t){e.$message.success("操作成功"),e.$emit("handleCancel"),e.$emit("updateList")}))):this.$message.error("请输入拒绝理由")},handleCancel:function(){this.$emit("handleCancel"),Object.assign(this.$data,this.$options.data())}}},n=a,l=s("2877"),c=Object(l["a"])(n,r,o,!1,null,"4be55bde",null);t["default"]=c.exports}}]);