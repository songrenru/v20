(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd09ad9","chunk-2438ce08","chunk-6f8c7c44"],{"2c8e":function(t,e,a){},"5ebc":function(t,e,a){},"8c69":function(t,e,a){"use strict";a("2c8e")},9105:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-operator",staticStyle:{"margin-top":"10px","margin-left":"10px"}},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.createModalsss.add(e.parent_id)}}},[e._v("添加")])],1),n("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.pagination,rowKey:"id",expandIcon:function(e){return t.customExpandIcon(e)}},on:{change:e.tableChange},scopedSlots:e._u([{key:"action",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.$refs.createModalsss.edit(a.id)}}},[e._v("编辑")]),1!=a.flag1?n("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleteConfirm(a.id)},cancel:e.cancel}},[n("a-divider",{attrs:{type:"vertical"}}),n("a",{attrs:{href:"#"}},[e._v("删除")])],1):e._e()],1)}},{key:"cate",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.$refs.createModal.customList(a.id)}}},[e._v("查看标签")])])}},{key:"type_txt",fn:function(t,a){return n("span",{},[n("div",{class:1==a.type?"txt-danren":"txt-duoren"},[e._v(" "+e._s(t)+" ")])])}},{key:"status",fn:function(t,a){return n("span",{},[n("div",{class:"开启"===t?"txt-green":"txt-red"},[e._v(" "+e._s(t)+" ")])])}},{key:"name",fn:function(t){return[e._v(" "+e._s(t.first)+" "+e._s(t.last))]}}])})],1),n("group-info",{ref:"createModalsss",attrs:{height:800,width:1500},on:{ok:e.handleOks}}),n("custom-list",{ref:"createModal",attrs:{height:800,width:1500}})],1)},i=[],s=(a("b0c0"),a("a0e0")),o=a("58c8"),r=a("aa8e8"),c=[{title:"类别名称",dataIndex:"cate_name",key:"cate_name"},{title:"标签管理",dataIndex:"cate",key:"",scopedSlots:{customRender:"cate"}},{title:"责任人类型",dataIndex:"type_txt",key:"type_txt",scopedSlots:{customRender:"type_txt"}},{title:"排序值",dataIndex:"sort",key:"sort"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"newRepairCateChildList",components:{groupInfo:o["default"],customList:r["default"]},data:function(){return{list:[],sortedInfo:null,pagination:{current:1,pageSize:10,total:10},search:{page:1},page:1,search_data:[],id:0,parent_id:0,columns:c}},beforeRouteEnter:function(t,e,a){a((function(e){var a=t.name;e.list=[],e.parent_id=a.substr(25),console.log("name",a),e.getCateList()}))},methods:{getCateList:function(){var t=this;this.page=this.pagination.current,this.request(s["a"].getCateList,{page:this.page,parent_id:this.parent_id}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.getCateList())},cancel:function(){},deleteConfirm:function(t){var e=this;this.request(s["a"].delCate,{id:t}).then((function(t){e.getCateList(),e.$message.success("删除成功")}))},handleOks:function(){this.getCateList()}}},u=l,d=(a("9499"),a("2877")),p=Object(d["a"])(u,n,i,!1,null,"9a02df72",null);e["default"]=p.exports},9499:function(t,e,a){"use strict";a("e589")},9685:function(t,e,a){"use strict";a("5ebc")},aa8e8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("a-drawer",{attrs:{width:"1000px",title:"自定义字段",visible:e.bindVisible},on:{close:e.handleCandel}},[n("div",{staticClass:"package-list"},[n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-operator",staticStyle:{"margin-bottom":"10px"}},[n("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"添加字段后，业主提交工单时可根据以下字段选择自己的问题，方便物业快速定位问题，避免多次确认",type:"info"}}),n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.createModal.add(e.cate_id)}}},[e._v("添加字段")])],1),n("a-table",{attrs:{columns:e.columns,"data-source":e.list,rowKey:"id",pagination:e.pagination,expandIcon:function(e){return t.customExpandIcon(e)}},on:{change:e.tableChange},scopedSlots:e._u([{key:"action",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.$refs.createModal.edit(e.cate_id,a.id)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleteConfirm(a)},cancel:e.cancel}},[n("a",{attrs:{href:"#"}},[e._v("删除")])])],1)}},{key:"status",fn:function(t,a){return n("span",{},[n("div",{class:"开启"===t?"txt-green":"txt-red"},[e._v(" "+e._s(t)+" ")])])}},{key:"name",fn:function(t){return[e._v(" "+e._s(t.first)+" "+e._s(t.last))]}}])})],1),n("custom-info",{ref:"createModal",attrs:{height:800,width:1500},on:{ok:e.handleOks}})],1)])},i=[],s=a("ade3"),o=a("a0e0"),r=a("b38b"),c=[{title:"标签名称",dataIndex:"name",key:"name",width:"680px"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"排序值",dataIndex:"sort",key:"sort"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"repairCateCustomList",components:{customInfo:r["default"]},data:function(){return{list:[],pagination:{current:1,pageSize:10,total:10},page:1,id:0,columns:c,bindVisible:!1,confirmLoading:!1,cate_id:0}},methods:Object(s["a"])({handleOks:function(){this.getCateList()},customList:function(t){this.pagination.current=1,this.cate_id=t,this.bindVisible=!0,this.getCateList()},deleteConfirm:function(t){var e=this;this.request(o["a"].delCateCustom,{id:t.id,cate_id:t.cate_id}).then((function(t){e.getCateList(),e.$message.success("删除成功")}))},handleCandel:function(){this.bindVisible=!1},cancel:function(){},getCateList:function(){var t=this;this.page=this.pagination.current,this.request(o["a"].getCateCustomList,{page:this.page,cate_id:this.cate_id}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.getCateList())}},"handleOks",(function(){this.getCateList()}))},u=l,d=(a("9685"),a("2877")),p=Object(d["a"])(u,n,i,!1,null,"bc2383bc",null);e["default"]=p.exports},b38b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:600,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticStyle:{"padding-left":"35px"},attrs:{form:t.form}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("字段名称:")])]),a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输入字段名称"},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}})],1)],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("排序值:")])]),a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"不填则默认为0"},model:{value:t.group.sort,callback:function(e){t.$set(t.group,"sort",e)},expression:"group.sort"}})],1)],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("状态:")])]),a("a-col",{attrs:{span:14}},[a("a-radio-group",{model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1)],1)},i=[],s=(a("b0c0"),a("a0e0")),o={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",cate_id:0,sort:"",status:1},id:0}},methods:{add:function(t){this.title="添加",this.visible=!0,this.id=0,this.group={id:0,name:"",sort:"",cate_id:t,status:1}},edit:function(t,e){this.visible=!0,this.id=e,this.group={id:e,name:"",sort:"",cate_id:t,status:1},this.getCateCustomInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getCateCustomInfo:function(){var t=this;this.request(s["a"].getCateCustomInfo,{id:this.id,cate_id:this.group.cate_id}).then((function(e){t.group.id=e.id,t.group.status=e.status,t.group.name=e.name,t.group.sort=e.sort,console.log("group",t.group)}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(s["a"].addCateCustom,this.group).then((function(e){e?t.$message.success("编辑成功"):t.$message.success("编辑失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))):this.request(s["a"].addCateCustom,this.group).then((function(e){e?t.$message.success("添加成功"):t.$message.success("添加失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},r=o,c=(a("8c69"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,"246dc643",null);e["default"]=l.exports},e589:function(t,e,a){}}]);