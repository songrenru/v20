(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0deaba"],{8749:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("a-modal",{attrs:{title:t.title,width:800,height:600,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[n("a-table",{attrs:{columns:t.columns,"data-source":t.navigationList,pagination:t.pagination,loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(i,e){return n("span",{},[n("a",{on:{click:function(i){return t.selected_url(e.url)}}},[t._v("选中")])])}}])})],1)},a=[],o=(n("ac1f"),n("841c"),n("a0e0")),l=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"title",key:"title"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],c={name:"FunctionDetails",data:function(){return{title:"",visible:!1,confirmLoading:!1,navigationList:[],pagination:{current:1,pageSize:10,total:10},search:{page:1},page:1,xtype:"",loading:!1,cfromModel:""}},computed:{columns:function(){return l}},methods:{navigations:function(t,i,n){this.title="【"+t+"】详细",this.visible=!0,this.xtype=i,this.cfromModel=n||"",this.getList()},getList:function(){var t=this;t.loading=!0,t.search["xtype"]=t.xtype,t.search["page"]=t.pagination.current;var i=o["a"].getHotWordFuncApplicationDetails;"HouseHotWordManage"==this.cfromModel&&(i=o["a"].getHotWordFuncApplicationDetails),this.request(i,this.search).then((function(i){t.loading=!1,t.navigationList=i.list,t.pagination.total=i.count?i.count:0,t.pagination.pageSize=i.total_limit?i.total_limit:10}))},tableChange:function(t){var i=this;t.current&&t.current>0&&(i.pagination.current=t.current,i.getList())},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1}}},s=c,r=n("2877"),u=Object(r["a"])(s,e,a,!1,null,null,null);i["default"]=u.exports}}]);