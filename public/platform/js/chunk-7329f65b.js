(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7329f65b"],{"44a2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"search-box",staticStyle:{"margin-bottom":"10px"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("志愿者姓名：")]),a("a-input",{staticStyle:{width:"70%"},model:{value:t.search.user_name,callback:function(e){t.$set(t.search,"user_name",e)},expression:"search.user_name"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("联系方式：")]),a("a-input",{staticStyle:{width:"70%"},model:{value:t.search.user_phone,callback:function(e){t.$set(t.search,"user_phone",e)},expression:"search.user_phone"}})],1)],1),a("a-col",{attrs:{md:2,sm:2}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:2}},[a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"join_status",fn:function(e,i){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])}),a("apply-info",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)],1)},s=[],n=(a("ac1f"),a("841c"),a("567c")),c=a("1401"),o={1:{status:"success",text:"开启"},2:{status:"default",text:"禁止"}},r={name:"ActivityApplyList",components:{applyInfo:c["default"]},data:function(){return{list:[],visible:!1,confirmLoading:!1,sortedInfo:null,pagination:{pageSize:10,total:10},search:{page:1},page:1,search_data:[],activity_id:0,loadPost:!1}},mounted:function(){this.activity_id=this.$route.params.id,this.activity_id?sessionStorage.setItem("party_activity_id",this.activity_id):this.activity_id=sessionStorage.getItem("party_activity_id"),console.log("idddddd",this.$route.params),this.getApply()},filters:{statusFilter:function(t){return o[t].text},statusTypeFilter:function(t){return o[t].status}},activated:function(){this.activity_id=this.$route.params.id,this.activity_id?sessionStorage.setItem("party_activity_id",this.activity_id):this.activity_id=sessionStorage.getItem("party_activity_id"),console.log("idddddd",this.$route.params),this.getApply()},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"姓名",dataIndex:"user_name",key:"user_name"},{title:"联系方式",dataIndex:"user_phone",key:"user_phone"},{title:"身份证号",dataIndex:"id_card",key:"id_card"},{title:"报名时间",dataIndex:"add_time",key:"add_time"},{title:"状态",dataIndex:"",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},created:function(){},methods:{callback:function(t){console.log(t)},getApply:function(){var t=this;if(this.loadPost)return!1;this.loadPost=!0,this.search["page"]=this.page,this.search["party_activity_id"]=this.activity_id,console.log("search",this.search),this.request(n["a"].getApplyList,this.search).then((function(e){t.loadPost=!1,console.log("res",e),t.list=e.list,t.activity_id=e.party_activity_id,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getApply())},cancel:function(){},handleOks:function(){this.getApply()},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.getApply()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={key_val:"user_name",value:"",status:"",date:[],page:1},this.search_data=[],this.getApply()},deleteConfirm:function(t){var e=this;this.request(n["a"].delApply,{id:t}).then((function(t){e.getApply(),e.$message.success("删除成功")}))}}},l=r,d=(a("5cfb"),a("2877")),u=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=u.exports},"5cfb":function(t,e,a){"use strict";a("ca5d")},ca5d:function(t,e,a){}}]);