(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b235656c"],{"230ab":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box"},[a("div",{staticClass:"search-box"},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("活动名称: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search.key_val,expression:"search.key_val"}],attrs:{type:"hidden"},domProps:{value:t.search.key_val},on:{input:function(e){e.target.composing||t.$set(t.search,"key_val",e.target.value)}}}),a("a-input",{staticStyle:{width:"200px","margin-left":"5px"},model:{value:t.search.value,callback:function(e){t.$set(t.search,"value",e)},expression:"search.value"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")]),a("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1),a("div",{staticClass:"add-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v(" 新建 ")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loadPost},on:{change:t.table_change},scopedSlots:t._u([{key:"status",fn:function(e,i){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusFilter")(i.status),text:e}})],1)}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.activity_id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.sign_list(i)}}},[t._v("预约活动列表")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.delInfo(i)}}},[t._v("删除")])],1)}}])}),a("addVolunteerActivitiesInfo",{ref:"createModal",on:{ok:t.handleOks}})],1)},n=[],s=(a("ac1f"),a("841c"),a("567c")),o=a("fa4f"),c=[{title:"标题",dataIndex:"active_name",key:"active_name"},{title:"总名额/剩余名额",dataIndex:"num_txt",key:"num_txt"},{title:"活动时间",dataIndex:"start_end_time_txt",key:"start_end_time_txt"},{title:"状态",dataIndex:"status_txt",key:"status_txt",scopedSlots:{customRender:"status"}},{title:"排序",dataIndex:"sort",key:"sort"},{title:"添加时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],r=[],l={name:"volunteerActivitiesList",components:{addVolunteerActivitiesInfo:o["default"]},filters:{statusFilter:function(t){var e=["error","success"];return e[t]}},data:function(){return{reply_content:"",pagination:{pageSize:10,total:10},search_data:[],search:{key_val:"active_name",value:"",page:1},form:this.$form.createForm(this),visible:!1,data:r,columns:c,page:1,loadPost:!1}},mounted:function(){this.getVolunteerActivityList()},activated:function(){this.getVolunteerActivityList()},methods:{getVolunteerActivityList:function(){var t=this;if(this.loadPost)return!1;this.loadPost=!0,this.search["page"]=this.page,this.request(s["a"].volunteerActivityList,this.search).then((function(e){t.loadPost=!1,console.log("res",e),t.pagination.total=e.count?e.count:0,t.data=e.list}))},handleOks:function(){this.getVolunteerActivityList()},addActive:function(){console.log("添加活动",1);var t=this.getRouterPath("addVolunteerActivitiesInfo");console.log("addActive",t),this.$router.push({path:t,query:{activity_id:0,aa:"add"}})},delInfo:function(t){var e=this;this.$confirm({title:"你确定要删除该活动信息?",content:"该活动一旦删除不可恢复，且相关报名信息将失效",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){e.request(s["a"].delVolunteerActivity,{activity_id:t.activity_id}).then((function(t){e.$message.success("删除成功！"),e.getVolunteerActivityList()}))},onCancel:function(){console.log("Cancel")}})},sign_list:function(t){var e=this.getRouterPath("signVolunteerActivitiesList");console.log("pathInfo",e),this.$router.push({path:e,query:{activity_id:t.activity_id}})},lookEdit:function(t){console.log("record",t);var e=this.getRouterPath("addVolunteerActivitiesInfo");console.log("lookEdit",e),this.$router.push({path:e,query:{activity_id:t.activity_id}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.page=t.current,this.getVolunteerActivityList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.getVolunteerActivityList()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={key_val:"active_name",value:"",page:1},this.search_data=[],this.getVolunteerActivityList()}}},u=l,d=(a("81b6"),a("0c7c")),h=Object(d["a"])(u,i,n,!1,null,"1914551e",null);e["default"]=h.exports},"4fbb":function(t,e,a){},"81b6":function(t,e,a){"use strict";a("4fbb")}}]);