(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64b93574"],{"355c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("div",{staticClass:"table-operator",staticStyle:{"margin-bottom":"5px"}},[i("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.seriesInfoModel.add()}}},[t._v("添加")])],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"status",fn:function(e,n){return i("span",{},[0==n.status?i("div",{staticStyle:{color:"red"}},[t._v("关闭")]):t._e(),1==n.status?i("div",{staticStyle:{color:"#1890ff"}},[t._v("开启")]):t._e()])}},{key:"action",fn:function(e,n){return i("span",{},[i("a",{on:{click:function(e){return t.$refs.seriesInfoModel.edit(n.id)}}},[t._v("编辑")]),i("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?(操作后可能不能恢复！)","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.id)}}},[t._v(" | "),i("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}])}),i("SeriesInfo",{ref:"seriesInfoModel",on:{ok:t.info}})],1)},a=[],o=(i("ac1f"),i("841c"),i("567c")),s=i("8dab"),c=[{title:"ID",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"title",key:"title"},{title:"排序值",dataIndex:"sort",key:"sort"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"},width:"10%"}],r=[],l={name:"seriesList",filters:{},components:{SeriesInfo:s["default"]},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:r,columns:c,title:"",confirmLoading:!1,id:""}},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;1==e&&this.$set(this.pagination,"current",1),this.loading=!0,this.title="添加系列",this.search["page"]=this.pagination.current,this.request(o["a"].getEpidemicPreventSeriesList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},info:function(t){this.getList()},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},deleteConfirm:function(t){var e=this;this.request(o["a"].epidemicPreventSeriesDel,{id:t}).then((function(t){e.getList(),e.$message.success("删除成功")}))},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},d=l,u=(i("a1ef"),i("0c7c")),f=Object(u["a"])(d,n,a,!1,null,"70ba7642",null);e["default"]=f.exports},"3cbf":function(t,e,i){},a1ef:function(t,e,i){"use strict";i("3cbf")}}]);