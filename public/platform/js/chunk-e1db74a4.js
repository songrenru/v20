(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1db74a4"],{"5f66":function(e,t,r){"use strict";var s={getOrderList:"/mall/storestaff.MallOrder/getOrderList",exportOrder:"/mall/storestaff.MallOrder/exportOrder",orderTaking:"/mall/storestaff.MallOrder/orderTaking",deliverGoodsByHouseman:"/mall/storestaff.MallOrder/deliverGoodsByHouseman",staffVerify:"/mall/storestaff.MallOrder/staffVerify",postponeDelivery:"/mall/storestaff.MallOrder/postponeDelivery",agreeRefund:"/mall/storestaff.MallOrder/AgreeRefund",getExpress:"/mall/storestaff.MallOrder/getExpress",deliverGoodsByExpress:"/mall/storestaff.MallOrder/deliverGoodsByExpress",viewLogistics:"/mall/storestaff.MallOrder/viewLogistics",refuseRefund:"/mall/storestaff.MallOrder/RefuseRefund",clerkDiscount:"/mall/storestaff.MallOrder/clerkDiscount",getOrderDetails:"/mall/storestaff.MallOrder/getOrderDetails",clerkNotes:"/mall/storestaff.MallOrder/clerkNotes",getPeriodicList:"/mall/storestaff.MallOrder/getPeriodicList",downExcel:"/mall/storestaff.MallOrder/downExcel",downFailExcel:"/mall/storestaff.MallOrder/downFailExcel",uploadUrl:"/common/common.UploadFile/uploadFile",uploadExcel:"/mall/storestaff.MallOrder/uploadFile",getList:"/mall/storestaff.MallOrder/shopGoodsBatchLogList",getOrderListCopy:"/mall/storestaff.MallOrder/getOrderListCopy",getOrderDetailsCopy:"/mall/storestaff.MallOrder/getOrderDetailsCopy",orderPrintTicket:"/mall/storestaff.MallOrder/printOrder"};t["a"]=s},"81b5":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1},on:{cancel:e.handleCancel}},[r("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{attrs:{label:"快递"}},[r("a-select",{attrs:{placeholder:"请选择"},on:{change:e.hanleChange}},e._l(e.expressOptions,(function(t){return r("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+e._s(t.is_singface&&"1"==t.is_singface?"（电子面单）":"")+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"快递单号"}},[r("a-input",{attrs:{placeholder:"请输入快递单号"},model:{value:e.formData.express_no,callback:function(t){e.$set(e.formData,"express_no",t)},expression:"formData.express_no"}})],1)],1),r("template",{slot:"footer"},[r("div",{staticClass:"flex justify-center align-center"},[r("a-button",{key:"back",staticClass:"mr-20",on:{click:function(t){return e.btnOpt(2)}}},[e._v(" 普通发货 ")]),r("a-button",{key:"submit",attrs:{type:"primary",disabled:"2"==e.fh_type||"1"==e.fh_type&&0==e.is_singface},on:{click:function(t){return e.btnOpt(1)}}},[e._v(" 电子面单发货 ")])],1)])],2)],1)},a=[],l=(r("a9e3"),r("d3b7"),r("159b"),r("b0c0"),r("5f66")),i={props:{visible:Boolean,title:String,order:Object,fh_type:[String,Number]},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},formData:{order_id:"",activity_type:"",periodic_order_id:"",current_periodic:"",express_type:"",express_no:"",express_id:"",express_name:"",fh_type:"1"},expressOptions:[],is_singface:1}},created:function(){this.getExpress()},methods:{getExpress:function(){var e=this;this.request(l["a"].getExpress,"").then((function(t){e.expressOptions=t||[]}))},hanleChange:function(e){var t=this;this.$set(this.formData,"express_id",e),this.expressOptions.forEach((function(r){r.id==e&&(t.$set(t.formData,"express_name",r.name),t.is_singface=r.is_singface)}))},btnOpt:function(e){var t=this;if(this.$set(this.formData,"express_type",e),this.formData.express_id)if(2!=e||this.formData.express_no){var r=this.order,s=r.order_id,a=r.goods_activity_type,i=r.order_type,o=r.periodic_order_id,n=r.current_periodic;this.$set(this.formData,"order_id",s),this.$set(this.formData,"activity_type",a),"periodic"==i&&(this.$set(this.formData,"periodic_order_id",o),this.$set(this.formData,"current_periodic",n)),this.$set(this.formData,"fh_type",this.fh_type),this.request(l["a"].deliverGoodsByExpress,this.formData).then((function(e){var r="1"==t.fh_type?"订单发货成功":"快递更改成功";t.$message.success(r),Object.assign(t.$data,t.$options.data()),t.handleCancel(),t.$emit("updateList")}))}else this.$message.error("请输入快递单号");else this.$message.error("请选择快递")},handleCancel:function(){this.$emit("handleCancel"),Object.assign(this.$data,this.$options.data())}}},o=i,n=r("2877"),d=Object(n["a"])(o,s,a,!1,null,"a6aba266",null);t["default"]=d.exports}}]);