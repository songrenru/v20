(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b98f5fe","chunk-0a35ad06","chunk-145a92e4","chunk-422a583b","chunk-2d0a310a"],{"011d":function(e,t,r){"use strict";var o={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply"};t["a"]=o},"0e43":function(e,t,r){},"35a5":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1},on:{cancel:e.handleCancel}},[r("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{attrs:{label:"快递"}},[r("a-select",{attrs:{placeholder:"请选择"},on:{change:e.hanleChange}},e._l(e.expressOptions,(function(t){return r("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+e._s(t.is_singface&&"1"==t.is_singface?"（电子面单）":"")+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"快递单号"}},[r("a-input",{attrs:{placeholder:"请输入快递单号"},model:{value:e.formData.express_no,callback:function(t){e.$set(e.formData,"express_no",t)},expression:"formData.express_no"}})],1)],1),r("template",{slot:"footer"},[r("div",{staticClass:"flex justify-center align-center"},[r("a-button",{key:"back",staticClass:"mr-20",on:{click:function(t){return e.btnOpt(2)}}},[e._v(" 普通发货 ")]),r("a-button",{key:"submit",attrs:{type:"primary",disabled:"2"==e.fh_type||"1"==e.fh_type&&0==e.is_singface},on:{click:function(t){return e.btnOpt(1)}}},[e._v(" 电子面单发货 ")])],1)])],2)],1)},a=[],s=(r("a9e3"),r("159b"),r("b0c0"),r("5f66")),l={props:{visible:Boolean,title:String,order:Object,fh_type:[String,Number]},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},formData:{order_id:"",activity_type:"",periodic_order_id:"",current_periodic:"",express_type:"",express_no:"",express_id:"",express_name:"",fh_type:"1"},expressOptions:[],is_singface:1}},created:function(){this.getExpress()},methods:{getExpress:function(){var e=this;this.request(s["a"].getExpress,"").then((function(t){e.expressOptions=t||[]}))},hanleChange:function(e){var t=this;this.$set(this.formData,"express_id",e),this.expressOptions.forEach((function(r){r.id==e&&(t.$set(t.formData,"express_name",r.name),t.is_singface=r.is_singface)}))},btnOpt:function(e){var t=this;if(this.$set(this.formData,"express_type",e),this.formData.express_id)if(2!=e||this.formData.express_no){var r=this.order,o=r.order_id,a=r.goods_activity_type,l=r.order_type,i=r.periodic_order_id,n=r.current_periodic;this.$set(this.formData,"order_id",o),this.$set(this.formData,"activity_type",a),"periodic"==l&&(this.$set(this.formData,"periodic_order_id",i),this.$set(this.formData,"current_periodic",n)),this.$set(this.formData,"fh_type",this.fh_type),this.request(s["a"].deliverGoodsByExpress,this.formData).then((function(e){var r="1"==t.fh_type?"订单发货成功":"快递更改成功";t.$message.success(r),Object.assign(t.$data,t.$options.data()),t.handleCancel(),t.$emit("updateList")}))}else this.$message.error("请输入快递单号");else this.$message.error("请选择快递")},handleCancel:function(){this.$emit("handleCancel"),Object.assign(this.$data,this.$options.data())}}},i=l,n=r("2877"),d=Object(n["a"])(i,o,a,!1,null,"4d0ffef8",null);t["default"]=d.exports},"53ee":function(e,t,r){},"5c41":function(e,t,r){"use strict";r("53ee")},"5f66":function(e,t,r){"use strict";var o={getOrderList:"/mall/storestaff.MallOrder/getOrderList",exportOrder:"/mall/storestaff.MallOrder/exportOrder",orderTaking:"/mall/storestaff.MallOrder/orderTaking",deliverGoodsByHouseman:"/mall/storestaff.MallOrder/deliverGoodsByHouseman",staffVerify:"/mall/storestaff.MallOrder/staffVerify",postponeDelivery:"/mall/storestaff.MallOrder/postponeDelivery",agreeRefund:"/mall/storestaff.MallOrder/AgreeRefund",getExpress:"/mall/storestaff.MallOrder/getExpress",deliverGoodsByExpress:"/mall/storestaff.MallOrder/deliverGoodsByExpress",viewLogistics:"/mall/storestaff.MallOrder/viewLogistics",refuseRefund:"/mall/storestaff.MallOrder/RefuseRefund",clerkDiscount:"/mall/storestaff.MallOrder/clerkDiscount",getOrderDetails:"/mall/storestaff.MallOrder/getOrderDetails",clerkNotes:"/mall/storestaff.MallOrder/clerkNotes",getPeriodicList:"/mall/storestaff.MallOrder/getPeriodicList",downExcel:"/mall/storestaff.MallOrder/downExcel",downFailExcel:"/mall/storestaff.MallOrder/downFailExcel",uploadUrl:"/common/common.UploadFile/uploadFile",uploadExcel:"/mall/storestaff.MallOrder/uploadFile",getList:"/mall/storestaff.MallOrder/shopGoodsBatchLogList",getOrderListCopy:"/mall/storestaff.MallOrder/getOrderListCopy",getOrderDetailsCopy:"/mall/storestaff.MallOrder/getOrderDetailsCopy"};t["a"]=o},"6b0c":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{attrs:{label:""}},[r("a-input",{staticStyle:{height:"200px",resize:"none"},attrs:{type:"textarea",autosize:"",placeholder:"请输入拒绝理由"},model:{value:e.formData.reason,callback:function(t){e.$set(e.formData,"reason",t)},expression:"formData.reason"}})],1)],1)],1)],1)},a=[],s=r("5f66"),l={props:{visible:Boolean,title:String,order:Object},data:function(){return{labelCol:{span:0},wrapperCol:{span:24},formData:{order_id:"",reason:"",status:""},expressOptions:[]}},created:function(){},methods:{handleOk:function(){var e=this;this.formData.reason?(this.$set(this.formData,"order_id",this.order.order_id),this.$set(this.formData,"status",this.order.status),this.request(s["a"].refuseRefund,this.formData).then((function(t){e.$message.success("操作成功"),e.$emit("handleCancel"),e.$emit("updateList")}))):this.$message.error("请输入拒绝理由")},handleCancel:function(){this.$emit("handleCancel"),Object.assign(this.$data,this.$options.data())}}},i=l,n=r("2877"),d=Object(n["a"])(i,o,a,!1,null,"3d933dd8",null);t["default"]=d.exports},"6cde":function(e,t,r){"use strict";r("0e43")},b168:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1,footer:null},on:{ok:e.handleCancel,cancel:e.handleCancel}},[e.logistics.length?r("a-timeline",{attrs:{pending:e.pending,reverse:!0}},e._l(e.logistics,(function(t,o){return r("a-timeline-item",{key:o},[r("p",{staticClass:"mb-0"},[e._v(e._s(e.moment(t.time).format("YYYY-MM-DD HH:mm")))]),r("span",[e._v(e._s(t.context))])])})),1):r("a-empty",{attrs:{image:e.simpleImage}},[r("span",{attrs:{slot:"description"},slot:"description"},[e._v("暂无物流信息")])])],1)],1)},a=[],s=(r("06f4"),r("fc25")),l=(r("16c9"),r("387a")),i=r("8bbf"),n=r.n(i),d=r("011d"),c=r("c1df"),m=r.n(c);n.a.use(l["a"]),n.a.use(s["a"]);var p={props:{visible:Boolean,title:String,order:Object},data:function(){return{logistics:[],pending:!1,simpleImage:""}},beforeCreate:function(){this.simpleImage=s["a"].PRESENTED_IMAGE_SIMPLE},mounted:function(){20==this.order.status&&(this.pending="正在配送中..."),this.viewLogistics()},methods:{moment:m.a,viewLogistics:function(){var e=this,t=this.order,r=t.order_id,o=t.order_type,a=t.periodic_order_id,s=t.express_style;console.log("luaminagwe"),this.request(d["a"].viewLogistics,{order_id:r,periodic_order_id:a&&"periodic"==o?a:"",order_type:o,express_style:s}).then((function(t){console.log("1111"),console.log(t),e.logistics=t.list||[]}))},handleCancel:function(){this.$emit("handleCancel")}}},f=p,u=(r("5c41"),r("2877")),_=Object(u["a"])(f,o,a,!1,null,"4320de32",null);t["default"]=_.exports},dafd:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-item-wrap"},[r("a-row",{staticClass:"order-item-header",attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("a-col",{attrs:{span:16}},[r("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("a-col",{attrs:{span:8}},[e._v("订单编号："+e._s(e.order.order_no))]),r("a-col",{attrs:{span:8}},[e._v("下单时间："+e._s(e.order.create_time))]),r("a-col",{attrs:{span:8}},[e._v("订单类型："+e._s(e.order.order_type_txt))])],1)],1),r("a-col",{attrs:{span:8}},[r("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("a-col",{staticClass:"text-center",attrs:{span:16}},["待付款"!=e.order.pay_type?r("span",[e._v("付款方式："+e._s(e.order.pay_type))]):e._e()]),r("a-col",{staticClass:"text-center",attrs:{span:8}},[r("a-button",{attrs:{type:"link"},on:{click:e.orderDetail}},[e._v(" 查看详情")])],1)],1)],1)],1),r("a-row",{staticClass:"order-item-content",attrs:{type:"flex",justify:"space-between"}},[r("a-col",{attrs:{span:8}},[r("div",{staticClass:"goods-wrap"},e._l(e.goods,(function(t,o){return r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"goodsItem.show"}],key:o,staticClass:"goods-item"},[r("a-row",{staticClass:"pt-20 pb-20 order-item-content-goods",class:1!=o&&e.fold&&e.goods.length>1||o!=e.goods.length-1&&!e.fold?"border-bottom":"",attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("a-col",{attrs:{span:12}},[r("div",{staticClass:"flex align-center"},[r("a-avatar",{attrs:{shape:"square",size:64,src:t.image}}),r("div",{staticClass:"flex flex-column pl-10 pr-10 flex-1 sx-hidden"},[r("span",{staticClass:"goods-name flex-1"},[e._v(e._s(t.goods_name))]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.sku_info,expression:"goodsItem.sku_info"}]},[e._v(e._s(t.sku_info))]),1==t.is_gift?r("span",[r("a-tag",{attrs:{color:"#108ee9"}},[e._v("赠品")])],1):e._e(),t.refund_desc?r("span",e._l(t.refund_desc,(function(t,o){return r("a-tag",{key:o,attrs:{color:"red"}},[e._v(e._s(t))])})),1):e._e()])],1)]),r("a-col",{staticClass:"text-center",attrs:{span:6}},[e._v(e._s(e.currency)+e._s(t.price))]),r("a-col",{staticClass:"text-center goods-num",attrs:{span:6}},[r("span",[e._v(e._s(t.num))]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.goods.length>2&&1==o&&e.fold,expression:"goods.length > 2 && goodsIndex == 1 && fold"}],staticClass:"fold-btn"},[r("a-button",{key:"unfold",attrs:{type:"link"},on:{click:function(t){return e.foldMenu("unfold")}}},[e._v(" 展开"),r("a-icon",{attrs:{type:"down"}})],1)],1),r("span",{directives:[{name:"show",rawName:"v-show",value:o==e.goods.length-1&&!e.fold,expression:"goodsIndex == goods.length - 1 && !fold"}],staticClass:"fold-btn"},[r("a-button",{key:"fold",attrs:{type:"link"},on:{click:function(t){return e.foldMenu("fold")}}},[e._v(" 收起"),r("a-icon",{attrs:{type:"up"}})],1)],1)])],1)],1)})),0)]),r("a-col",{attrs:{span:16}},[r("a-row",{staticClass:"height-inherit",attrs:{type:"flex",justify:"space-between"}},[r("a-col",{attrs:{span:4}},[r("div",{staticClass:"content-item"},[r("span",[e._v(e._s(e.order.username))]),r("span",[e._v(e._s(e.order.phone))]),r("span",{staticClass:"text-center"},[e._v(e._s(e.order.address))])])]),r("a-col",{attrs:{span:4}},[r("div",{staticClass:"content-item"},[e.order.periodic_count&&"periodic"==e.order.order_type?r("span",[r("span",[e._v(" 共计 "+e._s(e.order.periodic_count)+" 期 ")]),e.order.refund_count_periodic?r("span",[e._v(" 退款 "),r("span",{staticClass:"cr-red"},[e._v(" "+e._s(e.order.refund_count_periodic)+" ")]),e._v(" 期 ")]):e._e()]):e._e(),r("span",[e._v("商品总价："+e._s(e.currency)+e._s(e.order.money_total))]),e.order.discount_total?r("span",[r("a-popover",{attrs:{title:"",trigger:"click"},model:{value:e.discountTotalVisible,callback:function(t){e.discountTotalVisible=t},expression:"discountTotalVisible"}},[r("span",{attrs:{slot:"content"},slot:"content"},[r("a-list",{attrs:{"item-layout":"horizontal","data-source":e.discountList},scopedSlots:e._u([{key:"renderItem",fn:function(t){return t.value&&0!=t.value?r("a-list-item",{staticClass:"flex"},[r("a-badge",{attrs:{color:"red",text:t.label+"：-"+e.currency+t.value}})],1):e._e()}}],null,!0)})],1),e.order.discount_total&&0!=e.order.discount_total?r("span",{staticClass:"pointer",on:{click:function(t){e.discountTotalVisible=!e.discountTotalVisible}}},[e._v(" 总优惠 "),r("a-icon",{attrs:{type:"exclamation-circle"}}),e._v(" ： "),r("span",[e._v("-"+e._s(e.currency)+e._s(e.order.discount_total))])],1):e._e()])],1):e._e(),e.order.money_freight&&0!=e.order.money_freight?r("span",[e._v(" 运费：+"+e._s(e.currency)+e._s(e.order.money_freight)+" ")]):e._e(),e.order.bargain_price&&0!=e.order.bargain_price&&"prepare"==e.order.order_type?r("span",[e._v(" 定金"+e._s(e.currency)+e._s(e.order.bargain_price)+" "),e.order.deduct_price&&0!=e.order.deduct_price?r("span",[e._v(" 抵"+e._s(e.currency)+e._s(e.order.deduct_price)+" ")]):e._e()]):e._e(),e.order.bargain_price&&0!=e.order.bargain_price&&"prepare"==e.order.order_type?r("span",{staticClass:"cr-red"},[e._v(" 已支付定金："+e._s(e.currency)+e._s(e.order.real_bargain_price)+" ")]):e._e(),r("span",{staticClass:"fw-bold"},[0==e.order.status?r("span",{staticClass:"cr-black"},[e._v("待付款：")]):e._e(),1==e.order.status?r("span",{staticClass:"cr-black"},[e._v("尾款待付款：")]):e._e(),e.order.status>=10?r("span",{staticClass:"cr-black"},[e._v("实付款：")]):e._e(),r("span",{staticClass:"cr-red"},[e._v(e._s(e.currency)+e._s(e.order.money_real))])]),e.order.status>=60&&e.order.status<80&&(e.order.refund_money_periodic&&0!=e.order.refund_money_periodic||e.order.refund_money&&0!=e.order.refund_money)&&1==e.order.is_all?r("span",{staticClass:"cr-red"},[e._v(" 退款金额："+e._s(e.currency)+e._s("periodic"==e.order.order_type?e.order.refund_money_periodic:e.order.refund_money)+" ")]):e._e(),e.order.status>=60&&e.order.status<80&&(e.order.refund_money_periodic&&0!=e.order.refund_money_periodic||e.order.refund_money&&0!=e.order.refund_money)&&0==e.order.is_all?r("span",{staticClass:"cr-red"},[e._v(" 部分退款金额："+e._s(e.currency)+e._s("periodic"==e.order.order_type?e.order.refund_money_periodic:e.order.refund_money)+" ")]):e._e()])]),r("a-col",{attrs:{span:4}},[r("div",{staticClass:"content-item"},[r("span",[e._v(e._s(e.order.express_style_txt))]),1==e.order.express_style?r("span",[e._v("期望送达时间："+e._s(e.order.express_current_time))]):e._e()])]),r("a-col",{attrs:{span:4}},[r("div",{staticClass:"content-item"},[r("span",["periodic"==e.order.order_type&&e.order.current_periodic?r("span",{staticClass:"cr-red"},[e._v(" 第"+e._s(e.order.current_periodic)+"期 ")]):e._e(),r("span",[e._v(e._s(e.order.status_txt||"---"))])]),e.order.current_time?r("span",{staticClass:"cr-red"},[e._v(" "+e._s(e.moment(e.order.current_time).format("YYYY.MM.DD"))+"送达 ")]):e._e(),10==e.order.status&&e.order.send_time&&"prepare"==e.order.order_type?r("span",{staticClass:"cr-red"},[e._v(" 发货时间："+e._s(e.moment(e.order.send_time).format("YYYY.MM.DD"))+" ")]):e._e()])]),r("a-col",{attrs:{span:4}},[r("div",{staticClass:"content-item"},[r("span",[e._v(e._s(e.order.store_name))])])]),r("a-col",{attrs:{span:4}},[e.isHasBtn?r("div",{staticClass:"content-item"},e._l(e.btnList,(function(t){return r("span",{key:t.props},[1==t.show?r("a-button",{style:{color:t.color},attrs:{type:"link"},on:{click:function(r){return e.btnOpt(t)}}},[e._v(" "+e._s(t.label)+" ")]):e._e()],1)})),0):r("div",{staticClass:"content-item"},[e._v("---")])])],1)],1)],1),e.order.remark&&""!=e.order.remark?r("a-row",{staticClass:"remark"},[e._v(" 买家备注："+e._s(e.order.remark)+" ")]):e._e(),e.order.clerk_remark&&""!=e.order.clerk_remark?r("a-row",{staticClass:"clerk_remark"},[e._v(" 店员备注："+e._s(e.order.clerk_remark)+" ")]):e._e(),"express_btn"==e.currentBtn.props?r("deliverGoods",{attrs:{visible:e.deliverGoodsVisible,title:e.currentBtn.title,order:e.order},on:{handleCancel:function(t){e.deliverGoodsVisible=!1},updateList:e.updateList}}):e._e(),"trajectory_btn"==e.currentBtn.props||"logistics_btn"==e.currentBtn.props?r("logistics",{attrs:{visible:e.logisticsVisible,title:e.currentBtn.title,order:e.order},on:{handleCancel:function(t){e.logisticsVisible=!1}}}):e._e(),"refuse_refund_btn"==e.currentBtn.props?r("refuseRefund",{attrs:{visible:e.refuseRefundVisible,title:e.currentBtn.title,order:e.order},on:{handleCancel:function(t){e.refuseRefundVisible=!1},updateList:e.updateList}}):e._e()],1)},a=[],s=(r("a9e3"),r("d81d"),r("4de4"),r("c1df")),l=r.n(s),i=r("011d"),n=r("35a5"),d=r("b168"),c=r("6b0c"),m={props:{order:Object,tabStatus:[Number,String]},components:{deliverGoods:n["default"],logistics:d["default"],refuseRefund:c["default"]},data:function(){return{fold:!0,discountTotalVisible:!1,goods:[],discountList:[{label:"平台优惠券优惠金额",value:"",props:"discount_system_coupon"},{label:"商家优惠券优惠金额",value:"",props:"discount_merchant_coupon"},{label:"商家会员卡优惠金额",value:"",props:"discount_merchant_card"},{label:"平台会员等级优惠金额",value:"",props:"discount_system_level"},{label:"店员优惠金额",value:"",props:"discount_clerk_money"},{label:"参加活动优惠金额",value:"",props:"discount_act_money"}],btnList:[{label:"接单",props:"take_btn",show:"0",action:"confirm",tips:"是否确定接单？",success:"接单成功",api:"orderTaking",color:"#1890ff"},{label:"骑手配送",props:"hoseman_btn",show:"0",action:"confirm",tips:"是否确定骑手配送？",success:"订单已转至平台配送！",api:"deliverGoodsByHouseman",color:"#1890ff"},{label:"店员核销",props:"clerk_btn",show:"0",action:"confirm",tips:"是否确定核销？",success:"该订单已核销",api:"staffVerify",color:"#1890ff"},{label:"快递发货",props:"express_btn",show:"0",action:"modal",title:"发货",color:"#1890ff"},{label:"查看物流",props:"logistics_btn",show:"0",action:"modal",title:"查看物流",color:"#1890ff"},{label:"顺延配送",props:"postpone_btn",show:"0",action:"confirm",tips:"是否确定顺延配送？",success:"该订单已顺延配送",api:"postponeDelivery",color:"rgb(250, 173, 20)"},{label:"骑手轨迹",props:"trajectory_btn",show:"0",action:"modal",title:"骑手轨迹",color:"#1890ff"},{label:"同意退款",props:"agree_refund_btn",show:"0",action:"confirm",tips:"是否确定同意退款？",success:"同意退款成功",api:"agreeRefund",color:"#1890ff"},{label:"拒绝退款",props:"refuse_refund_btn",show:"0",action:"modal",title:"拒绝退款",color:"rgb(250, 173, 20)"}],currentBtn:"",deliverGoodsVisible:!1,logisticsVisible:!1,refuseRefundVisible:!1,moneyRealVisible:!1,after_money:"",isHasBtn:0,currency:"￥"}},watch:{order:{immediate:!0,handler:function(e){e&&(this.initGoods(),this.initDiscountList(),this.initBtnList())}}},mounted:function(){this.initGoods(),this.initDiscountList(),this.initBtnList()},methods:{moment:l.a,foldMenu:function(e){"unfold"==e?(this.fold=!1,this.goods=this.goods.map((function(e,t){return e.show=!0,e}))):(this.fold=!0,this.initGoods())},initGoods:function(){this.goods=this.order&&this.order.children?this.order.children:[],this.goods.length&&(this.goods=this.goods.map((function(e,t){return e.show=!(t>1),e})))},initDiscountList:function(){var e=this;this.discountList=this.discountList.map((function(t){return e.order&&(t.value=e.order[t.props]),t}))},initBtnList:function(){var e=this;this.btnList=this.btnList.map((function(t){return t.show=e.order.button[t.props],70==e.order.status&&"logistics_btn"==t.props&&(t.show=0),t})),this.isHasBtn=this.btnList.filter((function(e){return 1==e.show})).length},btnOpt:function(e){var t=this;this.currentBtn=e,console.log(this.currentBtn,"this.currentBtn");var r=this.currentBtn,o=r.api,a=void 0===o?"":o,s=r.success,l=void 0===s?"":s,n=r.tips,d=void 0===n?"":n,c=r.action,m=void 0===c?"":c,p=r.props,f=void 0===p?"":p,u=this.order,_=u.order_id,g=u.periodic_order_id,h=u.order_type;"confirm"==m&&this.$confirm({title:d||"提醒",content:"",okText:"确认",cancelText:"取消",onOk:function(){if(a){var e={order_id:_},r=["take_btn","hoseman_btn"];"periodic"==h&&-1!=r.indexOf(f)&&(e.periodic_order_id=g),t.request(i["a"][a],e).then((function(e){t.$message.success(l),t.updateList()}))}},onCancel:function(){console.log("Cancel"),t.currentBtn=""},class:"test"}),"modal"==m&&("express_btn"==f?this.deliverGoodsVisible=!0:"trajectory_btn"==f||"logistics_btn"==f?this.logisticsVisible=!0:"refuse_refund_btn"==f&&(this.refuseRefundVisible=!0))},updateList:function(){this.$emit("getOrderList")},orderDetail:function(){var e=this.order,t=e.order_id,r=void 0===t?"":t,o=e.periodic_order_id,a=void 0===o?"":o,s=e.order_type,l=e.refund_id,i=void 0===l?"":l,n={order_id:r};a&&"periodic"==s&&(n.periodic_order_id=a),i&&this.order.status>=60&&this.order.status<80&&(n.refund_id=i);var d=this.$router.resolve({path:"/mall/platform.orderMange/orderDetail",query:n});window.open(d.href,"_blank")}}},p=m,f=(r("6cde"),r("2877")),u=Object(f["a"])(p,o,a,!1,null,"7c20510e",null);t["default"]=u.exports}}]);