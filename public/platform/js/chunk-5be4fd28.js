(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5be4fd28","chunk-75c748fa"],{"420e":function(t,e,a){},7567:function(t,e,a){"use strict";a("420e")},"85c1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box"},[a("div",{staticClass:"add-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.PopupAddModel.add()}}},[t._v(" 添加 ")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,rowKey:"id",loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"status",fn:function(e,s){return a("span",{},[1==s.status?a("div",{staticStyle:{color:"red"}},[t._v("关闭")]):t._e(),0==s.status?a("div",{staticStyle:{color:"#1890ff"}},[t._v("开启")]):t._e()])}},{key:"action",fn:function(e,s){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.PopupEditModel.edit(s.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.delUserLabel(s.id)}}},[t._v("删除")])],1)}}])}),a("userLabelInfo",{ref:"PopupAddModel",on:{ok:t.addActive}}),a("userLabelInfo",{ref:"PopupEditModel",on:{ok:t.editActive}})],1)},i=[],n=(a("ac1f"),a("841c"),a("a0e0")),o=a("8b00"),l=[{title:"ID",dataIndex:"id",key:"id"},{title:"标签类型",dataIndex:"label_type",key:"label_type"},{title:"标签名称",dataIndex:"label_name",key:"label_name"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"添加时间",dataIndex:"create_at",key:"create_at"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],r=[],c={name:"userLabelList",filters:{},components:{userLabelInfo:o["default"]},data:function(){return{pagination:{current:1,pageSize:10,total:10},search:{page:1},loading:!1,data:r,columns:l}},activated:function(){this.getList(1)},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===e&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.request(n["a"].getUserLabelList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1}))},addActive:function(t){this.getList(1)},editActive:function(t){this.getList()},delUserLabel:function(t){var e=this;console.log("标签ID---"+t),this.request(n["a"].changeUserLabel,{id:t,type:"del"}).then((function(t){e.$message.success("删除成功"),e.getList()}))},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.$set(e.pagination,"current",t.current),e.getList())}}},d=c,u=(a("7567"),a("2877")),p=Object(u["a"])(d,s,i,!1,null,"372ba5f5",null);e["default"]=p.exports},8615:function(t,e,a){},"8b00":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticClass:"project_info",attrs:{form:t.form}},[0==t.post.id?a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol,required:!0}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("标签类型")]),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.label_type",{rules:[{required:!0,message:t.L("请选择标签类型！")}]}],expression:"['post.label_type',{rules: [{ required: true, message: L('请选择标签类型！') }] }]"}],staticStyle:{width:"300px !important"},attrs:{placeholder:"请选择标签类型"}},t._l(t.sensitive_info,(function(e,s){return a("a-select-option",{key:s,attrs:{value:s}},[t._v(" "+t._s(e)+" ")])})),1)],1):a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"label_col"},[t._v("标签类型")]),a("span",[t._v(" "+t._s(t.post.label_type))])]),a("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("标签名称")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.label_name",{initialValue:t.post.label_name,rules:[{required:!0,message:t.L("请输入名称！")}]}],expression:"['post.label_name',{initialValue:post.label_name, rules: [{ required: true, message: L('请输入名称！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入名称"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"label_col"},[t._v("状态")]),a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.status",{initialValue:t.post.status}],expression:"['post.status', {initialValue:post.status}]"}]},[a("a-radio",{attrs:{value:0}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1)},i=[],n=(a("498a"),a("a0e0")),o={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,post:{id:0,status:0,label_type:"",label_name:""}}},methods:{add:function(){var t=this;this.title="添加",this.visible=!0,this.post={id:0,status:0,label_type:"",label_name:""},this.request(n["a"].getLabelType).then((function(e){t.sensitive_info=e}))},edit:function(t){var e=this;this.title="编辑",this.visible=!0,this.post.id=t,this.getEditInfo(),this.request(n["a"].getLabelType).then((function(t){e.sensitive_info=t}))},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{var s=n["a"].changeUserLabel;if(t.post.id>0?(a.post.id=t.post.id,a.post.type="update"):a.post.type="add",a.post.label_name=a.post.label_name.trim(),console.log("label_name",a.post.label_name),!a.post.label_name||a.post.label_name.length<1)return t.confirmLoading=!1,t.$message.error("标签名称不能为空！"),!1;console.log(a.post),t.request(s,a.post).then((function(e){t.post.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(n["a"].getUserLabelInfo,{id:this.post.id}).then((function(e){t.post={id:e.id,status:e.status,label_type:e.label_type,label_name:e.label_name}}))}}},l=o,r=(a("d4db"),a("2877")),c=Object(r["a"])(l,s,i,!1,null,"7434a717",null);e["default"]=c.exports},d4db:function(t,e,a){"use strict";a("8615")}}]);