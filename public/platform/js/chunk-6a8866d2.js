(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a8866d2","chunk-34a85e75","chunk-fb5ef270"],{"0b8f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.modelTitle,width:900,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.groupForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"add_black"},[a("a-form-model-item",{attrs:{label:"关联功能",prop:"cat_function"}},[a("a-select",{attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.groupForm.cat_function},on:{change:function(t){return e.handleSelectChange(t,"cat_function")}}},e._l(e.labelFunction,(function(t,n){return a("a-select-option",{attrs:{value:t.key}},[e._v(" "+e._s(t.value)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"分组名称",prop:"cat_name"}},[a("a-input",{attrs:{placeholder:"请输入分组名称"},model:{value:e.groupForm.cat_name,callback:function(t){e.$set(e.groupForm,"cat_name",t)},expression:"groupForm.cat_name"}})],1)],1)])],1)},l=[],i=a("a0e0"),s={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},cat_type:{type:String,default:""},cat_id:{type:String,default:""}},watch:{cat_id:{immediate:!0,handler:function(e){"edit"==this.cat_type&&this.getCatInfo()}}},mounted:function(){this.getLabelFunction()},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:14},groupForm:{cat_function:""},rules:{cat_function:[{required:!0,message:"请选择关联功能",trigger:"blur"}],cat_name:[{required:!0,message:"请输入分组名称",trigger:"blur"}]},labelFunction:[]}},methods:{clearForm:function(){this.groupForm={cat_function:""}},getLabelFunction:function(){var e=this;e.request(i["a"].getLabelFunction,{}).then((function(t){e.labelFunction=t}))},getCatInfo:function(){var e=this;e.cat_id&&e.request(i["a"].getLabelCatInfo,{cat_id:e.cat_id}).then((function(t){e.groupForm=t,e.groupForm.cat_id=t.id}))},getLabelCatList:function(){var e=this;e.request(i["a"].getLabelCatList,{}).then((function(t){e.cateList=t}))},handleSubmit:function(e){var t=this;t.confirmLoading=!0,t.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),t.confirmLoading=!1,!1;t.groupForm.cat_id=t.cat_id;var a=i["a"].addLabelCat;"edit"==t.cat_type&&(a=i["a"].editLabelCat),t.request(a,t.groupForm).then((function(e){"edit"==t.cat_type?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),t.$emit("closeGroup",!0),t.clearForm(),t.confirmLoading=!1})).catch((function(e){t.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeGroup",!1),this.clearForm()},handleSelectChange:function(e,t){this.groupForm[t]=e,this.$forceUpdate()},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},o=s,c=(a("378e"),a("2877")),r=Object(c["a"])(o,n,l,!1,null,"8f1d52d4",null);t["default"]=r.exports},"15b7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"black_list"},[a("div",{staticClass:"left_grouping"},[a("div",{staticClass:"menu_title"},[a("span",{staticStyle:{"margin-left":"75px",color:"#ffffff"}},[e._v("分组管理")]),a("span",{staticStyle:{"margin-right":"27px","font-size":"20px",color:"#ffffff",cursor:"pointer"},on:{click:e.newGroup}},[e._v("+")])]),a("div",{staticClass:"menu_content",attrs:{theme:"light",mode:"vertical","default-selected-keys":[e.defaultKey]}},e._l(e.cateList,(function(t,n){return a("div",{key:t.cat_id,staticClass:"menu_item",class:e.currentIndex==n?"active":"",on:{click:function(a){return e.chooseMenu(t,n)}}},[a("div",{staticClass:"cat_name"},[e._v(e._s(t.cat_name))]),99999!=t.cat_id?a("a-popover",{attrs:{title:"",placement:"right"}},[a("template",{slot:"content"},[a("a-icon",{attrs:{type:"edit"},on:{click:function(a){return a.stopPropagation(),e.editCate(t.cat_id)}}}),a("a-divider",{attrs:{type:"vertical"}}),a("a-icon",{staticStyle:{color:"red"},attrs:{type:"delete"},on:{click:function(a){return a.stopPropagation(),e.deleteCate(t.cat_id)}}})],1),a("a-icon",{attrs:{type:"more"}})],2):e._e()],1)})),0)]),a("div",{staticClass:"right_content"},[a("div",{staticClass:"header_search"},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[e._v(" 1、标签分组名称不能重复。"),a("br"),e._v(" 2、标签总数量不限制。"),a("br"),e._v(" 3、标签分组一旦被删除，归属改分组的标签均将转移到【未分组】。"),a("br"),e._v(" 4、【未分组】为固定存在，不可修改名称，亦不可删除。 ")])],1)],1),a("div",{staticClass:"header_search",staticStyle:{"padding-top":"0"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.addThis("新建标签","add")}}},[e._v("新增标签")]),a("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(t){return e.addThis("移动标签","remove")}}},[e._v("移动标签")]),a("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"danger"},on:{click:e.delLabels}},[e._v("删除标签")])],1),a("div",{staticClass:"table_content"},[a("a-table",{attrs:{columns:e.columns,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"row-key":function(e){return e.id},pagination:e.pageInfo,loading:e.tableLoadding,"data-source":e.labelList},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.editThis(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(n)},cancel:e.delCancel}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)}}])}),a("newgroup-model",{attrs:{cat_id:e.cat_id,cat_type:e.cat_type,visible:e.groupVisible,modelTitle:e.modelTitle},on:{closeGroup:e.closeGroup}}),a("label-model",{attrs:{select_keys:e.selectedRowKeys,select_names_str:e.select_names_str,cat_id:e.pageInfo.cat_id,label_type:e.label_type,label_id:e.label_id,visible:e.labelVisible,modelTitle:e.modelTitle},on:{closeLabel:e.closeLabel}})],1)])])},l=[],i=(a("d81d"),a("0b8f")),s=a("735a"),o=a("a0e0"),c=[{title:"标签名称",dataIndex:"label_name",key:"label_name",width:300},{title:"分组名称",dataIndex:"cat_name",key:"cat_name",width:300},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],r={data:function(){var e=this;return{columns:c,modelTitle:"",openKeys:[],selectedRowKeys:[],groupVisible:!1,labelVisible:!1,pageInfo:{current:1,page:1,pageSize:10,total:10,cat_id:"",showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},tableLoadding:!1,labelList:[],label_type:"add",label_id:"",cateList:[],defaultKey:"",cat_id:"",cat_type:"add",show_cat_id:"",show_cat_name:"",select_names:[],select_names_str:"",currentIndex:-1}},mounted:function(){this.getLabelList(),this.getLabelCatsList()},components:{newgroupModel:i["default"],labelModel:s["default"]},methods:{handleTableChange:function(e,t,a){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.getLabelList()},onTableChange:function(e,t){this.pageInfo.current=e,this.pageInfo.page=e,this.pageInfo.pageSize=t,this.getLabelList(),console.log("onTableChange==>",e,t)},getLabelList:function(){var e=this;e.tableLoadding=!0,e.request(o["a"].getLabelList,e.pageInfo).then((function(t){e.labelList=t.list,e.pageInfo.total=t.count,e.tableLoadding=!1}))},editThis:function(e){this.label_type="edit",this.label_id=e.id+"",this.modelTitle="编辑标签",this.labelVisible=!0},getLabelCatsList:function(){var e=this;e.request(o["a"].getLabelCatsList,{}).then((function(t){t[0]&&t[0].cat_id&&(e.defaultKey=t[0].cat_id),e.cateList=t}))},delConfirm:function(e){var t=this;t.request(o["a"].delLabel,{label_id:e.id}).then((function(e){t.$message.success("删除成功！"),t.getLabelList(),t.select_names_str="",t.selectedRowKeys=[]}))},delCancel:function(){},closeGroup:function(e){this.cat_id="",this.groupVisible=!1,e&&this.getLabelCatsList()},closeLabel:function(e){this.label_id="",this.labelVisible=!1,e&&this.getLabelList()},addThis:function(e,t){console.log("this.select_names_str===>",this.select_names_str,this.selectedRowKeys),"remove"!=t||0!=this.selectedRowKeys.length?(this.label_type=t,this.modelTitle=e,this.labelVisible=!0):this.$message.warn("请选择要移动的标签")},handleClick:function(){},onSelectChange:function(e){var t=this;console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e,this.select_names=[],this.select_names_str="",this.labelList.map((function(a){e.map((function(e,n){e==a.id&&t.select_names.push(a.label_name)}))})),this.select_names.map((function(e,a){a+1<t.select_names.length?t.select_names_str+=e+"、":t.select_names_str+=e})),console.log("this.select_names_str===>",this.select_names_str,this.selectedRowKeys)},newGroup:function(){this.cat_type="add",this.modelTitle="添加标签分类",this.groupVisible=!0},delLabels:function(){var e=this;0!=e.selectedRowKeys.length?e.$confirm({title:"提示",content:"确定要删除【"+e.select_names_str+"】这些数据吗",onOk:function(){e.request(o["a"].delAllLabel,{label_id:e.selectedRowKeys}).then((function(t){e.$message.success("删除成功！"),e.getLabelList(),e.select_names_str="",e.selectedRowKeys=[]}))},onCancel:function(){}}):e.$message.warn("请选择要删除的标签")},chooseMenu:function(e,t){this.currentIndex!=t?(this.currentIndex=t,this.pageInfo={current:1,page:1,pageSize:20,total:0,cat_id:e.cat_id+""},this.selectedRowKeys=[],this.select_names_str="",this.getLabelList()):console.log("重复")},showOperation:function(){},editCate:function(e){this.cat_id=e+"",this.modelTitle="编辑标签分类",this.cat_type="edit",this.groupVisible=!0},deleteCate:function(e){var t=this;t.$confirm({title:"提示",content:"确定要删除此标签分类吗？",onOk:function(){t.request(o["a"].delLabelCat,{cat_id:e}).then((function(e){t.$message.success("删除成功！"),t.getLabelCatsList()}))},onCancel:function(){}})}}},d=r,u=(a("8f5c"),a("2877")),f=Object(u["a"])(d,n,l,!1,null,"82317e5e",null);t["default"]=f.exports},"378e":function(e,t,a){"use strict";a("d8ea")},6995:function(e,t,a){"use strict";a("9c1d")},"735a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.modelTitle,width:900,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.labelForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"add_black"},[a("a-form-model-item",{attrs:{label:"分组名称",prop:"cat_id"}},[a("a-select",{attrs:{"show-search":"",placeholder:"请选择分组名称","filter-option":e.filterOption,value:e.labelForm.cat_id},on:{change:function(t){return e.handleSelectChange(t,"cat_id")}}},e._l(e.cateList,(function(t,n){return a("a-select-option",{attrs:{value:t.cat_id}},[e._v(" "+e._s(t.cat_name)+" ")])})),1)],1),"remove"==e.label_type?a("a-form-model-item",{attrs:{label:"标签名称"}},[a("a-input",{attrs:{disabled:!0},model:{value:e.select_names_str,callback:function(t){e.select_names_str=t},expression:"select_names_str"}})],1):a("a-form-model-item",{attrs:{label:"标签名称",prop:"label_name"}},[a("a-input",{attrs:{placeholder:"请输入标签名称"},model:{value:e.labelForm.label_name,callback:function(t){e.$set(e.labelForm,"label_name",t)},expression:"labelForm.label_name"}})],1)],1)])],1)},l=[],i=a("a0e0"),s={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},label_type:{type:String,default:"add"},label_id:{type:String,default:""},cat_id:{type:String,default:""},select_keys:{type:Array,default:function(){return[]}},select_names:{type:Array,default:function(){return[]}},select_names_str:{type:String,default:""}},watch:{visible:{immediate:!0,handler:function(e){e&&this.getLabelCatList()}},label_id:{immediate:!0,handler:function(e){"edit"==this.label_type&&this.getLabelInfo()}},cat_id:{immediate:!0,handler:function(e){}}},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:14},labelForm:{cat_id:""},rules:{cat_id:[{required:!0,message:"请选择分组",trigger:"blur"}],label_name:[{required:!0,message:"请输入标签名称",trigger:"blur"}]},cateList:[]}},methods:{clearForm:function(){this.labelForm={cat_id:""}},getLabelInfo:function(){var e=this;e.label_id&&e.request(i["a"].getLabelInfo,{label_id:e.label_id}).then((function(t){e.labelForm=t,e.labelForm.label_id=t.id,(t.cat_id=99999)&&(e.labelForm.cat_id="未分组")}))},getLabelCatList:function(){var e=this;e.request(i["a"].getLabelCatList,{}).then((function(t){e.cateList=t}))},handleSubmit:function(e){var t=this;t.confirmLoading=!0,t.$refs.ruleForm.validate((function(e){if(!e)return t.confirmLoading=!1,!1;var a=i["a"].addCarLabel;"edit"==t.label_type&&("未分组"==t.labelForm.cat_id&&(t.labelForm.cat_id=99999),a=i["a"].editLabel),"remove"==t.label_type&&(a=i["a"].moveLabel,t.labelForm.label_id=t.select_keys),t.request(a,t.labelForm).then((function(e){"edit"==t.label_type?t.$message.success("编辑成功！"):"add"==t.label_type?t.$message.success("添加成功！"):"remove"==t.label_type&&t.$message.success("移动成功！"),t.$emit("closeLabel",!0),t.clearForm(),t.confirmLoading=!1})).catch((function(e){t.confirmLoading=!1}))}))},handleSubCancel:function(e){this.confirmLoading=!1,this.$emit("closeLabel"),"remove"!=this.label_type&&(this.clearForm(),this.$refs.ruleForm.resetFields())},handleSelectChange:function(e,t){this.labelForm[t]=e,this.$forceUpdate()},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},o=s,c=(a("6995"),a("2877")),r=Object(c["a"])(o,n,l,!1,null,"82ea25b4",null);t["default"]=r.exports},"8f5c":function(e,t,a){"use strict";a("cf20")},"9c1d":function(e,t,a){},cf20:function(e,t,a){},d8ea:function(e,t,a){}}]);