(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0960ec9b"],{"2ba2":function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("a-modal",{attrs:{title:"应收明细",width:1200,visible:e.visible,confirmLoading:e.confirmLoading,footer:null,centered:!0,maskClosable:!1},on:{cancel:e.handleCancel}},[t("a-table",{attrs:{columns:e.columns,"data-source":e.data,loading:e.loading},scopedSlots:e._u([{key:"action",fn:function(i,a){return t("span",{},[t("a",{on:{click:function(i){return e.invalidShow(a.order_id)}}},[e._v("作废账单")])])}}])})],1),t("a-modal",{attrs:{width:500,title:"作废账单",visible:e.visible_invalid,"confirm-loading":e.confirmLoading,maskClosable:!1},on:{ok:e.confirm_invalid,cancel:e.handleCancel1}},[t("div",{staticClass:"modal_box"},[t("div",{staticClass:"flex_text_box margin_top_10"},[t("div",{staticClass:"text_1"},[e._v("作废原因：")]),t("a-textarea",{staticStyle:{width:"200px",height:"100px"},attrs:{placeholder:"请输入作废原因","auto-size":""},model:{value:e.invalidReasons,callback:function(i){e.invalidReasons=i},expression:"invalidReasons"}})],1),t("br"),t("br"),t("br")])])],1)},n=[],s=t("a0e0"),o=[{title:"收费标准名称",dataIndex:"charge_name",key:"charge_name"},{title:"收费项目名称",dataIndex:"name",key:"name"},{title:"所属收费科目",dataIndex:"charge_number_name",key:"charge_number_name"},{title:"应收费用",dataIndex:"total_money",key:"total_money"},{title:"计费开始时间",dataIndex:"service_start_time_txt",key:"service_start_time_txt"},{title:"计费结束时间",dataIndex:"service_end_time_txt",key:"service_end_time_txt"},{title:"上次度数",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"本次度数",dataIndex:"now_ammeter",key:"now_ammeter"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],d={data:function(){return{visible:!1,confirmLoading:!1,data:[],loading:!1,columns:o,room_id:0,position_id:0,type:"room",key_id:0,visible_invalid:!1,invalidReasons:"",order_id:0}},methods:{confirm_invalid:function(){""!=this.invalidReasons?this.discardOrder(this.order_id):this.$message.warning("请填写作废原因")},discardOrder:function(e){var i=this;this.request(s["a"].discardOrder,{discard_reason:this.invalidReasons,order_id:this.order_id}).then((function(e){console.log("+++++++Single",e),e&&(i.$message.success("作废成功"),i.invalidReasons="",i.order_id=0,i.visible_invalid=!1,i.receivableOrderInfo())}))},invalidShow:function(e){this.visible_invalid=!0,this.order_id=e},info:function(e,i){this.room_id=e,this.position_id=i,this.order_id=0,i>0?(this.type="position",this.key_id=i):(this.type="room",this.key_id=e),this.receivableOrderInfo(),this.visible=!0},handleCancel:function(){this.visible=!1},handleCancel1:function(){this.visible_invalid=!1},receivableOrderInfo:function(){var e=this;this.request(s["a"].receivableOrderInfo,{key_id:this.key_id,type:this.type}).then((function(i){e.data=i}))}}},r=d,l=(t("f589"),t("0c7c")),c=Object(l["a"])(r,a,n,!1,null,"1e203be6",null);i["default"]=c.exports},e3304:function(e,i,t){},f589:function(e,i,t){"use strict";t("e3304")}}]);