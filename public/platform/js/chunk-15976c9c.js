(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15976c9c"],{7477:function(t,e,a){},"803a":function(t,e,a){},cb40:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"search-box",staticStyle:{"margin-bottom":"10px"}},[a("a-row",{attrs:{gutter:48}},[a("span",{staticClass:"span_box"},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("类型：")]),a("a-select",{staticClass:"input1",attrs:{placeholder:"请选择类型"},model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}},t._l(t.care_type,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.key}},[t._v(" "+t._s(e.value)+" ")])})),1)],1),a("span",{staticClass:"span_box"},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间：")]),a("a-range-picker",{attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(e){t.search_data=e},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("span",{staticClass:"span_box",staticStyle:{width:"210px","margin-left":"20px",padding:"0 !important"}},[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v("查询")]),a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)])],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.EditModel.add()}}},[t._v("添加")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination,loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"tags",fn:function(e){return a("span",{},t._l(e,(function(e){return a("a-tag",{staticStyle:{"margin-bottom":"5px"},attrs:{color:"#FCBE79"}},[t._v(" "+t._s(e)+" ")])})),1)}},{key:"complete_qk",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.RecordModel.getList(n.title,n.id)}}},[t._v("查看")])])}},{key:"action",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.EditModel.edit(n.id)}}},[t._v("编辑")]),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?(操作后可能不能恢复！)","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.delCancel}},[t._v(" | "),a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])}),a("Info",{ref:"EditModel",on:{ok:t.info}}),a("Record",{ref:"RecordModel",on:{ok:t.info}})],1)],1)},i=[],o=(a("ac1f"),a("841c"),a("567c")),s=a("fde6"),c=a("d9c7"),r=[{title:"ID",dataIndex:"id",key:"id"},{title:"类型",dataIndex:"type",key:"type"},{title:"数量",dataIndex:"num",key:"num"},{title:"备注",dataIndex:"remarks",key:"remarks"},{title:"添加人",dataIndex:"operator",key:"operator"},{title:"添加时间",dataIndex:"add_time",key:"add_time"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"},width:"10%"}],l={name:"communityCare",components:{Info:s["default"],Record:c["default"]},data:function(){return{list:[],visible:!1,loading:!1,sortedInfo:null,pagination:{current:1,pageSize:10,total:10},search:{type:"",date:[],page:1},page:1,area_type:1,search_data:[],care_type:[]}},mounted:function(){this.getList(),this.getCareType()},computed:{columns:function(){var t=this.sortedInfo;return t=t||{},r}},created:function(){},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.pagination.current,this.request(o["a"].getCommunityCareList,this.search).then((function(e){t.loading=!1,console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.area_type=e.area_type}))},tableChange:function(t){var e=this;t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},getCareType:function(){var t=this;this.request(o["a"].getCommunityCareType).then((function(e){t.care_type=e})).catch((function(t){}))},info:function(t){this.getList()},handleOks:function(){this.getList()},dateOnChange:function(t,e){this.search.date=e,console.log("search",e,this.search.date)},searchList:function(){this.tableChange({current:1,pageSize:10,total:10})},resetList:function(){this.search={type:"",date:[],page:1},this.search_data=[],this.tableChange({current:1,pageSize:10,total:10})},deleteConfirm:function(t){var e=this;this.request(o["a"].communityCareDel,{id:t}).then((function(t){e.getList(),e.$message.success("删除成功")}))},delCancel:function(){}}},u=l,d=(a("e3c8"),a("0c7c")),p=Object(d["a"])(u,n,i,!1,null,"5a5d0b2c",null);e["default"]=p.exports},d9c7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change}})],1)},i=[],o=(a("ac1f"),a("841c"),a("567c")),s=[{title:"上报人",dataIndex:"work_name",key:"work_name"},{title:"上报时间",dataIndex:"add_time",key:"add_time"},{title:"任务数量",dataIndex:"complete_num",key:"complete_num"},{title:"完成数量",dataIndex:"complete_num_u",key:"complete_num_u"},{title:"上报内容",dataIndex:"complete_num",key:"complete_num"},{title:"状态",dataIndex:"status",key:"status"}],c=[],r={name:"balanceList",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:c,columns:s,title:"",confirmLoading:!1,id:""}},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.loading=!0,e&&(this.title="查看【"+e+"】"),a>0&&(this.$set(this.pagination,"current",1),this.id=a,this.search["id"]=this.id),this.search["page"]=this.pagination.current,this.request(o["a"].getTaskReleaseRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},l=r,u=(a("dfe8"),a("0c7c")),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},dfe8:function(t,e,a){"use strict";a("803a")},e3c8:function(t,e,a){"use strict";a("7477")}}]);