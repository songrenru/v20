(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78dce622","chunk-34bd23f8"],{"0c25":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"search-box",staticStyle:{"margin-bottom":"10px"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("事项名称：")]),a("a-input",{staticStyle:{width:"70%"},model:{value:t.search.title,callback:function(e){t.$set(t.search,"title",e)},expression:"search.title"}})],1)],1),a("a-col",{attrs:{md:2,sm:2}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:2}},[a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add(t.cat_id)}}},[t._v("新建")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.matter_id,t.cat_id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.matter_id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])}),a("matter-info",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)],1)},s=[],n=(a("ac1f"),a("841c"),a("567c")),o=a("63bc"),r={0:{status:"default",text:"禁止"},1:{status:"success",text:"开启"}},c={name:"MatterList",components:{MatterInfo:o["default"]},data:function(){return{list:[],visible:!1,confirmLoading:!1,sortedInfo:null,pagination:{pageSize:10,total:10},search:{page:1},page:1,search_data:[],cat_id:"",loadPost:!1}},mounted:function(){this.cat_id=this.$route.params.cat_id,this.cat_id?sessionStorage.setItem("matter_cat_id",this.cat_id):this.cat_id=sessionStorage.getItem("matter_cat_id"),this.getMatter()},filters:{statusFilter:function(t){return r[t].text},statusTypeFilter:function(t){return r[t].status}},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"事项名称",dataIndex:"title",key:"title"},{title:"添加时间",dataIndex:"add_time",key:"add_time"},{title:"排序",dataIndex:"sort",key:"sort"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},activated:function(){this.cat_id=this.$route.params.cat_id,this.cat_id?sessionStorage.setItem("matter_cat_id",this.cat_id):this.cat_id=sessionStorage.getItem("matter_cat_id"),this.getMatter()},methods:{callback:function(t){console.log(t)},getMatter:function(){var t=this;if(this.loadPost)return!1;this.loadPost=!0,this.search["page"]=this.page,this.search["cat_id"]=this.cat_id,this.request(n["a"].getMatterList,this.search).then((function(e){t.loadPost=!1,console.log("res",e),t.list=e.list,t.cat_id=e.cat_id,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getMatter())},cancel:function(){},handleOks:function(){this.getMatter()},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.getMatter()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={key_val:"title",value:"",status:"",date:[],page:1},this.search_data=[],this.getMatter()},deleteConfirm:function(t){var e=this;this.request(n["a"].delMatter,{matter_id:t}).then((function(t){e.getMatter(),e.$message.success("删除成功")}))}}},l=c,d=(a("3641"),a("0c7c")),u=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=u.exports},3641:function(t,e,a){"use strict";a("8d68")},"63bc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:"",title:t.title,width:1200,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"事项名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入事项名称！"}]}],expression:"['title', {initialValue:detail.title,rules: [{required: true, message: '请输入事项名称！'}]}]"}]})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:20}},[a("rich-text",{attrs:{info:t.content},on:{"update:info":function(e){t.content=e}}})],1)],1),a("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort', {initialValue:detail.sort}]"}]})],1)],1),a("a-form-item",{attrs:{label:"会议状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:t.detail.status}],expression:"['status',{initialValue:detail.status}]"}]},[a("a-radio",{attrs:{value:1}},[t._v("开启")]),a("a-radio",{attrs:{value:0}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)},s=[],n=a("53ca"),o=a("567c"),r=a("3683"),c=a("6ec16"),l={data:function(){return{title:"新建",labelCol:{xs:{span:20},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{matter_id:0,title:"",content:"",status:1,cat_id:0,area_id:0},matter_id:0,cat_id:0,isClear:!1,loading:!1,content:""}},watch:{content:function(t){console.log(111111111,t),this.$set(this.detail,"content",t)}},components:{Editor:r["a"],RichText:c["a"]},mounted:function(){},methods:{change:function(t){console.log(t)},add:function(t){this.title="新建",this.visible=!0,this.cat_id=t,this.matter_id=0,this.detail={meeting_id:0,title:"",content:" ",status:1,cat_id:0,area_id:0}},edit:function(t,e){this.visible=!0,this.cat_id=e,this.matter_id=t,this.getEditInfo(),this.matter_id>0?this.title="编辑":this.title="新建",console.log(this.title)},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.cat_id=t.cat_id?t.cat_id:0,a.matter_id=t.matter_id,a.content=t.detail.content,console.log(a),t.request(o["a"].subMatter,a).then((function(e){t.detail.matter_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,this.content="",setTimeout((function(){t.cat_id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(o["a"].getMatterInfo,{matter_id:this.matter_id}).then((function(e){console.log(e),t.detail={matter_id:0,title:"",content:"",status:0,cat_id:0,area_id:0},t.checkedKeys=[],"object"==Object(n["a"])(e.info)&&(t.detail=e.info,t.content=e.info.content,t.cat_id=e.info.cat_id,t.matter_id=e.info.matter_id)}))}}},d=l,u=(a("718a"),a("0c7c")),h=Object(u["a"])(d,i,s,!1,null,null,null);e["default"]=h.exports},"718a":function(t,e,a){"use strict";a("8d97")},"8d68":function(t,e,a){},"8d97":function(t,e,a){}}]);