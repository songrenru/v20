(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37d9aec4","chunk-743c91c4","chunk-51f25028"],{"3f68":function(t,e,a){"use strict";a("c783")},"4ed9":function(t,e,a){},5189:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("类别名称:")]),a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{placeholder:"请输入类别名称",disabled:t.disabled},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticStyle:{float:"left","margin-left":"74px","margin-right":"10px"}},[t._v("状态:")]),a("a-col",{attrs:{span:18}},[a("a-radio-group",{model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},n=[],s=(a("b0c0"),a("a0e0")),o={data:function(){return{text:"",title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},disabled:!1,value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",status:1,subject_id:0},id:0}},methods:{add:function(t){this.title="添加",this.visible=!0,this.group={id:0,name:"",status:1,subject_id:t}},edit:function(t){this.visible=!0,this.id=t,this.getSubjectInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getSubjectInfo:function(){var t=this;this.request(s["a"].getCategoryInfo,{id:this.id}).then((function(e){t.group.id=e.id,t.group.status=e.status,t.group.name=e.subject_name,t.group.subject_id=e.parent_id,console.log("group",t.group),1==e.flag1?t.disabled=!0:t.disabled=!1}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(s["a"].editCategory,this.group).then((function(e){e?t.$message.success("编辑成功"):t.$message.success("编辑失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))):this.request(s["a"].addCategory,this.group).then((function(e){e?t.$message.success("添加成功"):t.$message.success("添加失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},c=o,r=(a("f54c"),a("0c7c")),l=Object(r["a"])(c,i,n,!1,null,"67210463",null);e["default"]=l.exports},b78f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{width:"1000px",title:"分类管理",footer:null,maskClosable:!1},on:{cancel:t.handleCandel},model:{value:t.bindVisible,callback:function(e){t.bindVisible=e},expression:"bindVisible"}},[a("div",{staticClass:"package-list"},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{"margin-bottom":"10px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModalsss.add(0,t.subject_id)}}},[t._v("添加分类")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,rowKey:"id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModalGet.add(i.id)}}},[t._v("查看")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.$refs.createModalsss.edit(i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"cate",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.childList(i)}}},[t._v("查看子分类")])])}},{key:"status",fn:function(e,i){return a("span",{},[a("div",{class:"开启"===e?"txt-green":"txt-red"},[t._v(" "+t._s(e)+" ")])])}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last))]}}])})],1),a("cate-list",{ref:"createModal",attrs:{height:800,width:1500}}),a("cate-get",{ref:"createModalGet",attrs:{height:800,width:1500}}),a("repair-cate",{ref:"createModalsss",attrs:{height:800,width:1500},on:{ok:t.handleOks}})],1)])},n=[],s=a("a0e0"),o=a("48a8"),c=a("059f"),r=a("33f0"),l=[{title:"分类名称",dataIndex:"cate_name",key:"cate_name"},{title:"子分类管理",dataIndex:"cate",key:"",scopedSlots:{customRender:"cate"}},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"排序值",dataIndex:"sort",key:"sort"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],u={name:"repairCateList",components:{cateList:o["default"],repairCate:c["default"],cateGet:r["default"]},data:function(){return{list:[],pagination:{pageSize:10,total:10},page:1,id:0,columns:l,bindVisible:!1,confirmLoading:!1,subject_id:0}},methods:{handleOks:function(){this.getCateList()},addlist:function(t){this.subject_id=t,this.bindVisible=!0,this.getCateList()},deleteConfirm:function(t){var e=this;this.request(s["a"].delCate,{id:t}).then((function(t){e.getCateList(),e.$message.success("删除成功")}))},handleCandel:function(){this.bindVisible=!1},cancel:function(){},getCateList:function(){var t=this;this.request(s["a"].getCateList,{page:this.page,subject_id:this.subject_id,parent_id:0}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getCateList())},bind:function(t){},bindAll:function(){}}},d=u,f=(a("3f68"),a("0c7c")),p=Object(f["a"])(d,i,n,!1,null,"5a6be421",null);e["default"]=p.exports},c783:function(t,e,a){},d51d:function(t,e,a){"use strict";a("f0ff")},f0ff:function(t,e,a){},f54c:function(t,e,a){"use strict";a("4ed9")},fb78:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-tabs",{attrs:{"default-active-key":"1"},on:{change:t.tabChange}},[a("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}}),a("a-tab-pane",{key:"2",attrs:{tab:"Tab 2","force-render":""}}),a("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}})],1),a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"10px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModalsss.add(t.subject_id)}}},[t._v("添加工单类别")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination,rowKey:"id"},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModalsss.edit(i.id)}}},[t._v("编辑")]),1!=i.flag1?a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.id)},cancel:t.cancel}},[a("a-divider",{attrs:{type:"vertical"}}),a("a",{attrs:{href:"#"}},[t._v("删除")])],1):t._e()],1)}},{key:"cate",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.addlist(i.id)}}},[t._v("查看分类")])])}},{key:"status",fn:function(e,i){return a("span",{},[a("div",{class:"开启"===e?"txt-green":"txt-red"},[t._v(" "+t._s(e)+" ")])])}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last))]}}])})],1),a("group-info",{ref:"createModalsss",attrs:{height:800,width:1500},on:{ok:t.handleOks}}),a("cate-list",{ref:"createModal",attrs:{height:800,width:1500}})],1)},n=[],s=(a("b0c0"),a("a0e0")),o=a("5189"),c=a("b78f"),r=[{title:"类别名称",dataIndex:"subject_name",key:"subject_name"},{title:"分类管理",dataIndex:"cate",key:"",scopedSlots:{customRender:"cate"}},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"repairSubjectList",components:{groupInfo:o["default"],cateList:c["default"]},data:function(){return{list:[],sortedInfo:null,pagination:{pageSize:10,total:10},search:{page:1},page:1,search_data:[],id:0,subject_id:0,columns:r}},beforeRouteEnter:function(t,e,a){a((function(e){var a=t.name;e.list=[],e.subject_id=a.substr(25),console.log("subject_id",t,e.subject_id),e.getSubjectList()}))},methods:{tabChange:function(t){console.log(t)},getSubjectList:function(){var t=this;this.request(s["a"].getCategoryList,{page:this.page,subject_id:this.subject_id}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getSubjectList())},cancel:function(){},deleteConfirm:function(t){var e=this;this.request(s["a"].delCategory,{id:t}).then((function(t){e.getSubjectList(),e.$message.success("删除成功")}))},handleOks:function(){this.getSubjectList()}}},u=l,d=(a("d51d"),a("0c7c")),f=Object(d["a"])(u,i,n,!1,null,"3705dde1",null);e["default"]=f.exports}}]);