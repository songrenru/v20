(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca0d5cc","chunk-2d0db2a2"],{"5e0a":function(t,e,n){"use strict";n("bf76")},"61d3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-suggestions-list-box"},[e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,rowKey:"id",loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"status_txt",fn:function(n,a){return e("span",{},[e("span",{style:"color:"+a.color},[t._v(t._s(a.status_txt))])])}},{key:"action",fn:function(n,a){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.PopupEditModel.info(a.order_id)}}},[t._v("详情")])])}}])}),e("workOrderInfo",{ref:"PopupEditModel"})],1)},i=[],o=(n("a9e3"),n("ac1f"),n("841c"),n("a0e0")),s=n("6f62"),r=[{title:"序号",dataIndex:"order_id"},{title:"工单详情",dataIndex:"order_content"},{title:"工单类目",dataIndex:"subject_name"},{title:"上报分类",dataIndex:"cate_name"},{title:"上报位置",dataIndex:"address_txt"},{title:"上报人员",dataIndex:"name"},{title:"手机号码",dataIndex:"phone"},{title:"上报时间",dataIndex:"add_time_txt"},{title:"状态  ",dataIndex:"status_txt",scopedSlots:{customRender:"status_txt"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"action"}}],l=[],c={name:"workOrder",components:{workOrderInfo:s["default"]},data:function(){return{pagination:{current:1,pageSize:10,total:10},search:{page:1},loading:!1,data:l,columns:r}},props:{pigcmsId:{type:Number,default:0},usernum:{type:String,default:""}},created:function(){this.getList(1)},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===e&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.search["pigcms_id"]=this.pigcmsId,this.request(o["a"].getWorkOrderList,this.search).then((function(e){console.log(e),t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1}))},table_change:function(t){var e=this;t.current&&t.current>0&&(e.$set(e.pagination,"current",t.current),e.getList())}}},d=c,u=(n("5e0a"),n("2877")),p=Object(u["a"])(d,a,i,!1,null,null,null);e["default"]=p.exports},"6f62":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-descriptions",{attrs:{title:""}},t._l(t.workOrderInfo,(function(n,a){return e("a-descriptions-item",{key:a,attrs:{label:n.title}},["text"===n.type?e("span",[t._v(t._s(n.value))]):"img"===n.type&&n.value?e("img",{attrs:{src:n.value}}):t._e()])})),1)],1)},i=[],o=n("a0e0"),s={components:{},data:function(){return{title:"工单详情",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,workOrderInfo:[],visible:!1}},methods:{info:function(t){var e=this;this.title="工单详情",this.visible=!0;var n={order_id:t};this.request(o["a"].getWorkOrderInfo,n).then((function(t){console.log(t),e.workOrderInfo=t}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},r=s,l=n("2877"),c=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=c.exports},bf76:function(t,e,n){}}]);