(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52174b6a"],{"397d":function(e,t,n){"use strict";n("d2d6")},d2d6:function(e,t,n){},de3f:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-tabs",{attrs:{"default-active-key":"1"},on:{change:e.callback}},[n("a-tab-pane",{key:"1",attrs:{tab:"快递代收"}},[n("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.expressCollection,"data-source":e.expressCollectionList,pagination:e.paginationCollection,rowKey:"id",loading:e.loadingCollection},on:{change:e.table_change_collection},scopedSlots:e._u([{key:"collect_info",fn:function(t,s){return n("span",{},[n("span",[e._v(e._s(s.express_name))]),n("br"),n("span",[e._v(e._s(s.express_no))])])}},{key:"action",fn:function(t,s){return n("span",{},[n("a",{on:{click:function(t){return e.expressInfoFun(s.id)}}},[e._v("详情")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(t){return e.delExpress(s.id)}}},[e._v("删除")])],1)}}])})],1),n("a-tab-pane",{key:"2",attrs:{tab:"快递代发","force-render":""}},[n("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.expressDelivery,"data-source":e.expressDeliveryList,pagination:e.paginationDelivery,rowKey:"id",loading:e.loadingDelivery},on:{change:e.table_change_delivery},scopedSlots:e._u([{key:"sendInfo",fn:function(t,s){return n("span",{},[n("span",[e._v("姓名："+e._s(s.send_uname))]),n("br"),n("span",[e._v("联系方式："+e._s(s.send_phone))]),n("br"),n("span",[e._v("详细地址："+e._s(s.send_adress))])])}},{key:"collectInfo",fn:function(t,s){return n("span",{},[n("span",[e._v("姓名："+e._s(s.collect_uname))]),n("br"),n("span",[e._v("联系方式："+e._s(s.collect_phone))]),n("br"),n("span",[e._v("详细地址："+e._s(s.collect_adress))])])}}])})],1)],1),e.visible?n("a-modal",{attrs:{title:"快递详情",width:900,footer:null,visible:e.visible,maskClosable:!1,confirmLoading:!1},on:{cancel:e.handleCancel}},[n("a-descriptions",{attrs:{title:""}},e._l(e.expressInfo,(function(t,s){return n("a-descriptions-item",{key:s,attrs:{label:t.title}},[n("span",[e._v(e._s(t.value))])])})),1)],1):e._e()],1)},i=[],a=(n("a9e3"),n("a0e0")),o=[{title:"快递信息",dataIndex:"collect_info",key:"collect_info",scopedSlots:{customRender:"collect_info"}},{title:"收件人手机号",dataIndex:"phone",key:"phone"},{title:"收件人地址",dataIndex:"collect_address",key:"collect_address"},{title:"取件码",dataIndex:"fetch_code",key:"fetch_code"},{title:"送件费用",dataIndex:"money",key:"money"},{title:"状态",dataIndex:"express_msg",key:"express_msg"},{title:"预约代送时间",dataIndex:"send_time",key:"send_time"},{title:"添加时间",dataIndex:"add_time",key:"add_time"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],l=[],c=[{title:"ID",dataIndex:"send_id",key:"send_id"},{title:"寄件人信息",dataIndex:"send_phone",key:"send_phone",width:200,scopedSlots:{customRender:"sendInfo"}},{title:"收件人信息",dataIndex:"collect_phone",key:"collect_phone",width:200,scopedSlots:{customRender:"collectInfo"}},{title:"物品重量",dataIndex:"weightDesc",key:"weightDesc"},{title:"文件类型",dataIndex:"goods_type_text",key:"goods_type_text"},{title:"快递公司",dataIndex:"expressDesc",key:"expressDesc"},{title:"代发费用",dataIndex:"send_price",key:"send_price"},{title:"备注",dataIndex:"remarks",key:"remarks"},{title:"提交时间",dataIndex:"add_time",key:"add_time"},{title:"最后导出时间",dataIndex:"export_time",key:"export_time"}],r=[],d={name:"expressManagement",data:function(){return{title:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},expressCollection:o,expressCollectionList:l,expressDelivery:c,expressDeliveryList:r,paginationCollection:{current:1,pageSize:10,total:10},paginationDelivery:{current:1,pageSize:10,total:10},loadingCollection:!1,loadingDelivery:!1,visible:!1,expressInfo:[],type:"collect"}},props:{pigcmsId:{type:Number,default:0},uid:{type:Number,default:0}},created:function(){this.getExpressList(1)},methods:{table_change_collection:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.paginationCollection,"current",e.current),t.getList())},table_change_delivery:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.paginationDelivery,"current",e.current),t.getList())},getExpressList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;"collect"===this.type?this.loadingCollection=!0:this.loadingDelivery=!0;var n={};1===t&&("collect"===this.type?(this.$set(this.paginationCollection,"current",1),n["page"]=this.paginationCollection.current):(this.$set(this.paginationDelivery,"current",1),n["page"]=this.paginationDelivery.current)),n["pigcms_id"]=this.pigcmsId,n["uid"]=this.uid,n["type"]=this.type,console.log(n),this.request(a["a"].getExpressList,n).then((function(t){console.log(t),"collect"===e.type?(e.paginationCollection.total=t.count?t.count:0,e.paginationCollection.pageSize=t.total_limit?t.total_limit:10,e.expressCollectionList=t.list,e.loadingCollection=!1):(e.paginationDelivery.total=t.count?t.count:0,e.paginationDelivery.pageSize=t.total_limit?t.total_limit:10,e.expressDeliveryList=t.list,e.loadingDelivery=!1)}))},callback:function(e){this.type=1===e?"collect":"send",this.getExpressList(1)},expressInfoFun:function(e){var t=this,n={id:e};this.request(a["a"].getExpressInfo,n).then((function(e){t.expressInfo=e,t.visible=!0}))},handleCancel:function(e){this.visible=!1},delExpress:function(e){var t=this,n={id:e};this.request(a["a"].delExpress,n).then((function(e){1===e.status?(t.$message.success(e.msg),t.getExpressList(1)):t.$message.error(e.msg)}))}}},p=d,u=(n("397d"),n("2877")),_=Object(u["a"])(p,s,i,!1,null,null,null);t["default"]=_.exports}}]);