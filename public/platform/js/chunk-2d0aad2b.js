(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aad2b"],{"133f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1100,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"template_title",fn:function(e,n){return a("span",{},[1==n.contract_status?a("span",{staticStyle:{color:"red"}},[t._v("[当前模板]")]):t._e(),t._v(" "+t._s(n.template_title)+" ")])}},{key:"action",fn:function(e,n){return a("span",{},[1==n.contract_status?a("span",[a("span",[t._v("已选择")])]):a("a",{on:{click:function(e){return t.choiceConfirm(n,n.operation_add_url)}}},[t._v("选择")])])}}])})],1),a("a-modal",{attrs:{title:t.showTitle,width:t.showWidth,visible:t.showData,footer:null},on:{cancel:t.handleUploadCancel}},[t.showData?a("iframe",{attrs:{src:t.showUrl,width:"100%",height:"650px"}}):t._e()])],1)},i=[],o=(a("ac1f"),a("841c"),a("a0e0")),l=[{title:"序号",dataIndex:"template_id",key:"template_id"},{title:"模板标题",dataIndex:"template_title",key:"template_title",scopedSlots:{customRender:"template_title"}},{title:"创建时间",dataIndex:"add_time",key:"add_time"},{title:"操作",dataIndex:"operation",key:"operation",width:"16%",scopedSlots:{customRender:"action"}}],s=[],c={name:"choiceContract",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{id:0,page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:s,columns:l,title:"",confirmLoading:!1,showData:!1,showUrl:"",showTitle:"",showWidth:800,record_id:0,record:[]}},mounted:function(){var t=this;window["goBack"]=function(){t.handleUploadCancel()}},methods:{getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;e.loading=!0,t&&(t.number&&(e.title="[选择合同] 编号："+t.number+"，姓名："+t.nickname,e.$set(e.pagination,"current",1)),e.record_id=t.id),e.search["id"]=e.record_id,e.search["page"]=e.pagination.current,this.request(o["a"].publicRentalGetContractList,e.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1,e.oldVersion=t.oldVersion,e.visible=!0}))},handleCancel:function(){var t=this;t.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},handleUploadCancel:function(){this.showData=!1,this.getList(this.record)},choiceConfirm:function(t,e){this.showTitle="[选择合同] 序号：【"+t.template_id+"】 模板标题：【"+t.template_title+"】",this.showUrl=e,this.showWidth=1300,this.record=t,this.showData=!0},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())}}},r=c,d=a("2877"),h=Object(d["a"])(r,n,i,!1,null,null,null);e["default"]=h.exports}}]);