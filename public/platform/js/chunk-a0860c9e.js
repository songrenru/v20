(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0860c9e","chunk-edca3480"],{"12be":function(t,e,i){},2297:function(t,e,i){"use strict";i("8ee04")},"242c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:1400,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("div",{staticClass:"content-p1"},[i("p",[t._v("1、消费记录展示的是，水费、电费、燃气费三种费用，缴费记录")])]),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"operation",fn:function(e,a){return i("span",{},[1==a.is_paid?i("div",[i("a",{on:{click:function(e){return t.$refs.PrintModel.add(a.order_id,a.pigcms_id)}}},[t._v("打印")])]):i("div",[i("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认催缴?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.send_message(a.order_id)}}},[i("a",[t._v("一键催缴")])])],1)])}}])}),i("get-print-template",{ref:"PrintModel"})],1)},n=[],s=(i("ac1f"),i("841c"),i("a0e0")),o=i("ce95"),r=[{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"收费所属类别",dataIndex:"order_type",key:"order_type"},{title:"单价（元）",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"add_time",key:"add_time"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"余额（元）",dataIndex:"now_money",key:"now_money"},{title:"应收费用（元）",dataIndex:"total_money",key:"total_money"},{title:"实缴费用（元）",dataIndex:"pay_money",key:"pay_money"},{title:"操作人",dataIndex:"realname",key:"realname"},{title:"备注",dataIndex:"note",key:"note"},{title:"操作",dataIndex:"operation",width:"100px",key:"operation",scopedSlots:{customRender:"operation"}}],l=[],c={name:"orderList",filters:{},components:{GetPrintTemplate:o["default"]},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:l,columns:r,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="消费记录",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(s["a"].storageUserOrderRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},send_message:function(t){var e=this;this.request(s["a"].storageUserSendMessage,{order_id:t}).then((function(t){e.$message.success("发送成功")}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},searchList:function(){this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.$set(this.pagination,"current",1),this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},d=c,m=(i("2297"),i("2877")),p=Object(m["a"])(d,a,n,!1,null,null,null);e["default"]=p.exports},"73a4":function(t,e,i){"use strict";i("12be")},"8ee04":function(t,e,i){},ce95:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[t.is_set?i("div",{staticStyle:{"margin-bottom":"20px"},domProps:{innerHTML:t._s(t.set_msg)}}):t._e(),i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"选择打印模板",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择打印模板"},model:{value:t.template_id,callback:function(e){t.template_id=e},expression:"template_id"}},t._l(t.template_list,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.template_id}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)],1)],1)],1),i("print-order",{ref:"PrintModel"})],1)},n=[],s=i("a0e0"),o=i("f7e3"),r={components:{PrintOrder:o["default"]},data:function(){return{title:"选择打印模板",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,order_id:0,template_id:void 0,template_list:[],pigcms_id:0,choice_ids:[],is_set:!1,set_msg:"",set_type:0,source_type:0}},mounted:function(){},methods:{add:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.source_type=0,0==i?(this.title="选择打印模板",this.is_set=!1,this.set_msg=""):(this.is_set=!0,this.title="设置打印模板",1==i?(this.source_type=1,this.set_msg="1、在收银台设置打印模板，收银台支持打印功能。打印功能；不设置打印模板，则不支持。<br/>2、设置打印模板后，在收银台显示已缴账单按钮，进入查看所有已缴账单数据。"):2==i&&(this.set_msg='1、设置打印模板后，联动收银台打印模板功能。<br/>2、设置打印模板后，<span style="color: #1890ff">已缴账单</span>列表点击<span style="color: #1890ff">打印</span>按钮直接打印')),this.set_type=i,this.template_id=void 0,this.visible=!0,this.pigcms_id=e,this.template_list=[],this.order_id=t,this.choice_ids=[],this.getTemplate()},batchPrint:function(t){var e=this;if(t.length<1)return e.$message.error("请勾选账单"),!1;e.title="选择打印模板",e.visible=!0,e.template_id=void 0,e.template_list=[],e.order_id=0,e.pigcms_id=0,e.choice_ids=t,this.set_type=0,this.source_type=0,e.getTemplate()},getTemplate:function(){var t=this;this.request(s["a"].getTemplate).then((function(e){t.template_list=e.list,e&&e.template_id>0&&(t.template_id=e.template_id)}))},handleSubmit:function(){var t=this;if(!this.template_id)return this.$message.error("选择打印模板"),!1;this.set_type>0?(this.confirmLoading=!0,this.request(s["a"].editSetPrint,{template_id:this.template_id}).then((function(e){t.$message.success("编辑成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",{type:t.source_type,template_id:t.template_id})}),1e3)})).catch((function(t){}))):this.$refs.PrintModel.add(this.order_id,this.template_id,this.pigcms_id,this.choice_ids)},handleCancel:function(){this.visible=!1}}},l=r,c=(i("73a4"),i("2877")),d=Object(c["a"])(l,a,n,!1,null,null,null);e["default"]=d.exports}}]);