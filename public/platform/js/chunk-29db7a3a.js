(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29db7a3a","chunk-71e75291"],{"03fb":function(t,e,a){},"329f":function(t,e,a){},"43a0":function(t,e,a){"use strict";a("03fb")},d14cf:function(t,e,a){"use strict";a("329f")},d4ae:function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-suggestions-list-box userList"},[e("div",{staticClass:"content-p1"},[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("a-collapse",{attrs:{accordion:""}},[e("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[e("span",{staticStyle:{"font-weight":"500"}},[t._v(" 权限方案，批量管理小区工作人员的分组，分组可以设置在小区平台的菜单、功能权限、操作栏按钮权限。 ")])])],1)],1)]),e("div",{staticClass:"search-box"},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("p",{staticStyle:{"margin-top":"5px"}},[t._v("方案名称：")]),e("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入权限名称"},model:{value:t.search.title,callback:function(e){t.$set(t.search,"title",e)},expression:"search.title"}})],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("p",{staticStyle:{"margin-top":"5px"}},[t._v("分组名称：")]),e("a-select",{staticClass:"input1",attrs:{"show-search":"","option-filter-prop":"children",placeholder:"请选择分组名称"},model:{value:t.search.group_id,callback:function(e){t.$set(t.search,"group_id",e)},expression:"search.group_id"}},t._l(t.group_list,(function(a,i){return e("a-select-option",{key:i,attrs:{value:a.id}},[t._v(" "+t._s(a.title)+" ")])})),1)],1)],1),e("a-col",{staticClass:"but-box",attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v("查询")]),e("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),e("div",{staticClass:"add-box"},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.EditModel.add()}}},[t._v("添加")])],1)],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"tags",fn:function(a){return e("span",{},t._l(a,(function(a){return e("a-tag",{staticStyle:{"margin-bottom":"5px"},attrs:{color:"#FCBE79"}},[t._v(" "+t._s(a)+" ")])})),1)}},{key:"action",fn:function(a,i){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.EditModel.edit(i.title,i.id)}}},[t._v("编辑")]),t._v(" | "),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?(操作后可能不能恢复！)","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.id)},cancel:t.delCancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}])}),e("programmeInfo",{ref:"EditModel",on:{ok:t.info}})],1)},o=[],s=(a("7d24"),a("dfae")),r=a("a0e0"),n=a("f9df"),l=[{title:"方案名称",dataIndex:"title",key:"title",width:"12%"},{title:"分组名称",dataIndex:"group_name",key:"group_name",width:"15%"},{title:"选择人员",dataIndex:"worker",key:"worker",scopedSlots:{customRender:"tags"}},{title:"备注",dataIndex:"remarks",key:"remarks",width:"12%"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"},width:"10%"}],c=[],u={name:"programmeList",filters:{},components:{programmeInfo:n["default"],"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{title:"",group_id:void 0,page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:c,columns:l,oldVersion:"",group_list:[]}},activated:function(){this.getList(),this.getGroupAll()},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.pagination.current,this.request(r["a"].houseProgrammeList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.oldVersion=e.oldVersion}))},getGroupAll:function(){var t=this;this.request(r["a"].houseProgrammeGroupAll).then((function(e){t.group_list=e})).catch((function(e){t.loading=!1}))},info:function(t){this.getList()},deleteConfirm:function(t){var e=this;this.request(r["a"].houseProgrammeProgrammeDel,{id:t}).then((function(t){e.getList(),e.$message.success("删除成功")}))},delCancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.getGroupAll(),this.search={title:"",group_id:void 0,page:1},this.table_change({current:1,pageSize:10,total:10})}}},d=u,p=(a("d14cf"),a("2877")),m=Object(p["a"])(d,i,o,!1,null,"15a246c8",null);e["default"]=m.exports},f9df:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{staticClass:"prepaid_info",attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"box_width label_col ant-form-item-required"},[t._v("权限方案名称")]),e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.post.title,rules:[{required:!0,message:t.L("请输入权限方案名称！")}]}],expression:"['title',{ initialValue: post.title,rules: [{ required: true, message: L('请输入权限方案名称！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入权限方案名称"}})],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"box_width label_col ant-form-item-required"},[t._v("分组名称")]),e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["group_id",{initialValue:t.post.group_id,rules:[{required:!0,message:t.L("请选择分组名称！")}]}],expression:"['group_id',{ initialValue: post.group_id,rules: [{ required: true, message: L('请选择分组名称！') }] }]"}],staticStyle:{width:"300px"},attrs:{"show-search":"","option-filter-prop":"children",placeholder:"请选择分组名称"}},t._l(t.group_list,(function(a){return e("a-select-option",{key:a.id},[t._v(" "+t._s(a.title)+" ")])})),1)],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"box_width label_col ant-form-item-required",staticStyle:{float:"left"}},[t._v("选择人员：")]),e("a-col",{attrs:{span:14}},[e("a-tree",{attrs:{"tree-data":t.treeData,"default-expand-all":t.defaultExpandAll,defaultExpandedKeys:[t.treeData[0].key],checkable:""},model:{value:t.post.wid_all,callback:function(e){t.$set(t.post,"wid_all",e)},expression:"post.wid_all"}})],1)],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"box_width label_col float_l"},[t._v("备注")]),e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks",{initialValue:t.post.remarks}],expression:"['remarks', { initialValue: post.remarks}]"}],staticStyle:{width:"300px"},attrs:{maxLength:100,placeholder:"请输入备注",rows:4}})],1)],1)],1)],1)},o=[],s=a("a0e0"),r={components:{},data:function(){return{title:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,post:{id:0,title:"",remarks:"",wid_all:[]},group_list:[],treeData:[],expandedKeys:[],autoExpandParent:!0,selectedKeys:[],defaultExpandAll:!0}},mounted:function(){},methods:{add:function(){this.title="添加权限方案组",this.visible=!0,this.post={id:0,title:"",remarks:"",group_id:void 0,wid_all:[]},this.getGroupAll(),this.getTissue(this.post.id)},edit:function(t,e){this.title="编辑【"+t+"】",this.post.id=e,this.getGroupAll(),this.getTissue(e)},getGroupAll:function(){var t=this;this.request(s["a"].houseProgrammeGroupAll).then((function(e){t.group_list=e})).catch((function(t){}))},getTissue:function(t){var e=this;this.request(s["a"].houseProgrammeTissueNav).then((function(a){e.treeData=a,e.defaultExpandAll=!1,t>0&&e.getEditInfo()})).catch((function(t){}))},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{var i=s["a"].houseProgrammeProgrammeAdd;t.post.id>0&&(i=s["a"].houseProgrammeProgrammeSub),a.wid_all=t.post.wid_all,a.id=t.post.id,t.request(i,a).then((function(e){t.post.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,console.log(123),t.$emit("ok")}),1500),console.log(345)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.confirmLoading=!0,this.request(s["a"].houseProgrammeProgrammeQuery,{id:this.post.id}).then((function(e){t.post=e,t.confirmLoading=!1,t.visible=!0}))}}},n=r,l=(a("43a0"),a("2877")),c=Object(l["a"])(n,i,o,!1,null,"af4fe400",null);e["default"]=c.exports}}]);