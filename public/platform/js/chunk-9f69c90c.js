(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f69c90c"],{1804:function(e,r,t){},"5f66":function(e,r,t){"use strict";var s={getOrderList:"/mall/storestaff.MallOrder/getOrderList",exportOrder:"/mall/storestaff.MallOrder/exportOrder",orderTaking:"/mall/storestaff.MallOrder/orderTaking",deliverGoodsByHouseman:"/mall/storestaff.MallOrder/deliverGoodsByHouseman",staffVerify:"/mall/storestaff.MallOrder/staffVerify",postponeDelivery:"/mall/storestaff.MallOrder/postponeDelivery",agreeRefund:"/mall/storestaff.MallOrder/AgreeRefund",getExpress:"/mall/storestaff.MallOrder/getExpress",deliverGoodsByExpress:"/mall/storestaff.MallOrder/deliverGoodsByExpress",viewLogistics:"/mall/storestaff.MallOrder/viewLogistics",refuseRefund:"/mall/storestaff.MallOrder/RefuseRefund",clerkDiscount:"/mall/storestaff.MallOrder/clerkDiscount",getOrderDetails:"/mall/storestaff.MallOrder/getOrderDetails",clerkNotes:"/mall/storestaff.MallOrder/clerkNotes",getPeriodicList:"/mall/storestaff.MallOrder/getPeriodicList",downExcel:"/mall/storestaff.MallOrder/downExcel",downFailExcel:"/mall/storestaff.MallOrder/downFailExcel",uploadUrl:"/common/common.UploadFile/uploadFile",uploadExcel:"/mall/storestaff.MallOrder/uploadFile",getList:"/mall/storestaff.MallOrder/shopGoodsBatchLogList",getOrderListCopy:"/mall/storestaff.MallOrder/getOrderListCopy",getOrderDetailsCopy:"/mall/storestaff.MallOrder/getOrderDetailsCopy",orderPrintTicket:"/mall/storestaff.MallOrder/printOrder"};r["a"]=s},"96db":function(e,r,t){"use strict";t("1804")},b38b4:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e._self._c;return r("div",[r("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1,footer:null},on:{ok:e.handleCancel,cancel:e.handleCancel}},[e.rider_name?r("span",[r("span",[e._v("骑手："+e._s(e.rider_name))]),r("a-divider",{attrs:{type:"virticle"}}),r("span",[e._v("骑手号码："+e._s(e.rider_phone))]),r("a-divider")],1):e._e(),e.logistics.length?r("a-timeline",{attrs:{pending:e.pending,reverse:!1}},e._l(e.logistics,(function(t,s){return r("a-timeline-item",{key:s},[r("p",{staticClass:"mb-0"},[e._v(e._s(t.time))]),r("span",[e._v(e._s(t.context))])])})),1):r("a-empty",{attrs:{image:e.simpleImage}},[r("span",{attrs:{slot:"description"},slot:"description"},[e._v("暂无物流信息")])])],1)],1)},l=[],i=(t("06f4"),t("fc25")),a=(t("16c9"),t("387a")),o=t("8bbf"),d=t.n(o),n=t("5f66"),f=t("c1df"),c=t.n(f);d.a.use(a["a"]),d.a.use(i["a"]);var p={props:{visible:Boolean,title:String,nowPeriodicItem:Object,order:Object},data:function(){return{logistics:[],pending:!1,simpleImage:"",rider_name:"",rider_phone:""}},watch:{visible:{deep:!0,handler:function(e){e&&this.viewLogistics()}}},beforeCreate:function(){this.simpleImage=i["a"].PRESENTED_IMAGE_SIMPLE},mounted:function(){20!=this.order.status&&20!=this.nowPeriodicItem.is_complete||(this.pending="正在配送中..."),this.viewLogistics()},methods:{moment:c.a,viewLogistics:function(){var e=this,r=this.order,t=r.order_id,s=r.order_type,l=r.express_style,i=this.nowPeriodicItem.purchase_order_id;this.request(n["a"].viewLogistics,{order_id:t,periodic_order_id:i&&"periodic"==s?i:"",order_type:s,express_style:l}).then((function(r){r?(e.logistics=r.list||[],e.rider_name=r.rider_name,e.rider_phone=r.rider_phone):1===r.errCode&&e.$message.warn(r.errMsg)}))},handleCancel:function(){this.$emit("handleCancel")}}},m=p,u=(t("96db"),t("2877")),g=Object(u["a"])(m,s,l,!1,null,"d096130e",null);r["default"]=g.exports}}]);