(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75c748fa"],{8615:function(e,t,a){},"8b00":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{staticClass:"project_info",attrs:{form:e.form}},[0==e.post.id?a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("span",{staticClass:"label_col ant-form-item-required"},[e._v("标签类型")]),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.label_type",{rules:[{required:!0,message:e.L("请选择标签类型！")}]}],expression:"['post.label_type',{rules: [{ required: true, message: L('请选择标签类型！') }] }]"}],staticStyle:{width:"300px !important"},attrs:{placeholder:"请选择标签类型"}},e._l(e.sensitive_info,(function(t,s){return a("a-select-option",{key:s,attrs:{value:s}},[e._v(" "+e._s(t)+" ")])})),1)],1):a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("span",{staticClass:"label_col"},[e._v("标签类型")]),a("span",[e._v(" "+e._s(e.post.label_type))])]),a("a-form-item",{attrs:{label:"",required:!0,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[e._v("标签名称")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.label_name",{initialValue:e.post.label_name,rules:[{required:!0,message:e.L("请输入名称！")}]}],expression:"['post.label_name',{initialValue:post.label_name, rules: [{ required: true, message: L('请输入名称！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入名称"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("span",{staticClass:"label_col"},[e._v("状态")]),a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.status",{initialValue:e.post.status}],expression:"['post.status', {initialValue:post.status}]"}]},[a("a-radio",{attrs:{value:0}},[e._v(" 开启 ")]),a("a-radio",{attrs:{value:1}},[e._v(" 关闭 ")])],1)],1)],1)],1)],1)},i=[],l=(a("498a"),a("a0e0")),o={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,post:{id:0,status:0,label_type:"",label_name:""}}},methods:{add:function(){var e=this;this.title="添加",this.visible=!0,this.post={id:0,status:0,label_type:"",label_name:""},this.request(l["a"].getLabelType).then((function(t){e.sensitive_info=t}))},edit:function(e){var t=this;this.title="编辑",this.visible=!0,this.post.id=e,this.getEditInfo(),this.request(l["a"].getLabelType).then((function(e){t.sensitive_info=e}))},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){if(t)e.confirmLoading=!1;else{var s=l["a"].changeUserLabel;if(e.post.id>0?(a.post.id=e.post.id,a.post.type="update"):a.post.type="add",a.post.label_name=a.post.label_name.trim(),console.log("label_name",a.post.label_name),!a.post.label_name||a.post.label_name.length<1)return e.confirmLoading=!1,e.$message.error("标签名称不能为空！"),!1;console.log(a.post),e.request(s,a.post).then((function(t){e.post.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)}))}}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.post.id=0,e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this;this.request(l["a"].getUserLabelInfo,{id:this.post.id}).then((function(t){e.post={id:t.id,status:t.status,label_type:t.label_type,label_name:t.label_name}}))}}},r=o,n=(a("d4db"),a("2877")),p=Object(n["a"])(r,s,i,!1,null,"7434a717",null);t["default"]=p.exports},d4db:function(e,t,a){"use strict";a("8615")}}]);