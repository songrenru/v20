(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8348bba"],{5031:function(e,t,l){"use strict";l("9661")},"5f66":function(e,t,l){"use strict";var r={getOrderList:"/mall/storestaff.MallOrder/getOrderList",exportOrder:"/mall/storestaff.MallOrder/exportOrder",orderTaking:"/mall/storestaff.MallOrder/orderTaking",deliverGoodsByHouseman:"/mall/storestaff.MallOrder/deliverGoodsByHouseman",staffVerify:"/mall/storestaff.MallOrder/staffVerify",postponeDelivery:"/mall/storestaff.MallOrder/postponeDelivery",agreeRefund:"/mall/storestaff.MallOrder/AgreeRefund",getExpress:"/mall/storestaff.MallOrder/getExpress",deliverGoodsByExpress:"/mall/storestaff.MallOrder/deliverGoodsByExpress",viewLogistics:"/mall/storestaff.MallOrder/viewLogistics",refuseRefund:"/mall/storestaff.MallOrder/RefuseRefund",clerkDiscount:"/mall/storestaff.MallOrder/clerkDiscount",getOrderDetails:"/mall/storestaff.MallOrder/getOrderDetails",clerkNotes:"/mall/storestaff.MallOrder/clerkNotes",getPeriodicList:"/mall/storestaff.MallOrder/getPeriodicList",downExcel:"/mall/storestaff.MallOrder/downExcel",downFailExcel:"/mall/storestaff.MallOrder/downFailExcel",uploadUrl:"/common/common.UploadFile/uploadFile",uploadExcel:"/mall/storestaff.MallOrder/uploadFile",getList:"/mall/storestaff.MallOrder/shopGoodsBatchLogList",getOrderListCopy:"/mall/storestaff.MallOrder/getOrderListCopy",getOrderDetailsCopy:"/mall/storestaff.MallOrder/getOrderDetailsCopy",orderPrintTicket:"/mall/storestaff.MallOrder/printOrder"};t["a"]=r},9661:function(e,t,l){},9716:function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1,footer:null},on:{cancel:e.handleCancel}},[t("a-list",{staticStyle:{"max-height":"500px","overflow-y":"auto"},attrs:{bordered:"","data-source":e.periodicList.deliver_msg,"item-layout":"vertical"},scopedSlots:e._u([{key:"renderItem",fn:function(l){return t("a-list-item",{},[t("div",{staticClass:"text-center width-auto mb-20 fs-16"},[e._v(" "+e._s(e.moment(l.deliver_date).format("YYYY年MM月"))+" ")]),l.deliver_list&&l.deliver_list.length?t("div",{staticClass:"flex align-center flex-wrap width-auto"},e._l(l.deliver_list,(function(l,r){return t("div",{key:r,staticClass:"flex flex-column align-center mb-20 deliver-item"},[t("span",{staticClass:"date-num",class:4==l.deliver_status?"active":""},[e._v(" "+e._s(l.date_num)+" ")]),t("span",[e._v(e._s(e._f("deliverStatusOpt")(l.deliver_status)))])])})),0):e._e()])}}])})],1)],1)},s=[],a=(l("d3b7"),l("99af"),l("5f66")),i=l("c1df"),o=l.n(i),d=[{status:0,label:"待发货"},{status:1,label:"备货中"},{status:2,label:"已顺延"},{status:3,label:"已发货"},{status:4,label:"已收货"},{status:5,label:"待支付"},{status:6,label:"已退款"}],n={props:{visible:Boolean,order:Object},data:function(){return{title:"配送周期",periodicList:""}},filters:{deliverStatusOpt:function(e){var t="";return d.forEach((function(l){l.status==e&&(t=l.label)})),t}},created:function(){this.getPeriodicList()},methods:{moment:o.a,getPeriodicList:function(){var e=this;this.request(a["a"].getPeriodicList,{order_id:this.order.order_id}).then((function(t){if(e.periodicList=t||"",t){var l=t.nums,r=void 0===l?0:l,s=t.complete_num,a=void 0===s?0:s;e.title="".concat(e.title,"（共").concat(r,"期，已送").concat(a,"期）")}}))},handleCancel:function(){this.$emit("handleCancel")}}},f=n,c=(l("5031"),l("2877")),u=Object(c["a"])(f,r,s,!1,null,"c9b61c8a",null);t["default"]=u.exports}}]);