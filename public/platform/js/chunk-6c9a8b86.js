(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c9a8b86"],{"0c4c":function(t,o,a){"use strict";a("a082")},"5d70":function(t,o,a){"use strict";a.r(o);a("b0c0");var e=function(){var t=this,o=t._self._c;return o("a-modal",{attrs:{title:t.title,width:600,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[o("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[o("a-form",{staticStyle:{"padding-left":"35px"},attrs:{form:t.form}},[o("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[o("a-col",{attrs:{span:10}},[o("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("类目名称:")])]),o("a-col",{attrs:{span:14}},[o("a-input",{attrs:{placeholder:"请输入类目名称",disabled:t.disabled},model:{value:t.group.name,callback:function(o){t.$set(t.group,"name",o)},expression:"group.name"}})],1)],1),o("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[o("a-col",{attrs:{span:10}},[o("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("背景色:")])]),o("a-col",{attrs:{span:11}},[o("a-input",{attrs:{placeholder:"请输入背景色"},model:{value:t.group.color,callback:function(o){t.$set(t.group,"color",o)},expression:"group.color"}})],1),o("a-col",{attrs:{span:1}}),o("a-col",{attrs:{span:2}},[o("colorPicker",{on:{change:t.headleChangeColor},model:{value:t.color,callback:function(o){t.color=o},expression:"color"}})],1)],1),o("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[o("a-col",{attrs:{span:10}},[o("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("状态:")])]),o("a-col",{attrs:{span:14}},[o("a-radio-group",{model:{value:t.group.status,callback:function(o){t.$set(t.group,"status",o)},expression:"group.status"}},[o("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),o("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1)],1)},i=[],s=a("a0e0"),r=a("a9f5"),n=a.n(r),l=a("8bbf"),c=a.n(l);c.a.use(n.a);var u={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},disabled:!1,value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",color:"",status:1},id:0}},methods:{add:function(){this.title="添加",this.visible=!0,this.disabled=!1,this.group={id:0,name:"",color:"",status:1}},edit:function(t){this.visible=!0,this.id=t,this.getSubjectInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getSubjectInfo:function(){var t=this;this.request(s["a"].getSubjectInfo,{id:this.id}).then((function(o){t.group.id=o.id,t.group.status=o.status,t.group.name=o.subject_name,t.group.color=o.color,t.color=o.color,1==o.flag?t.disabled=!0:t.disabled=!1,console.log("group",t.group)}))},headleChangeColor:function(t){console.log("color",t),this.group.color=t},handleSubmit1:function(){var t=this,o=this.form.validateFields;this.confirmLoading=!0,o((function(o,a){if(o)t.confirmLoading=!1;else{var e=s["a"].addSubject;t.group.id=t.id,t.group.id>0&&(e=s["a"].editSubject),t.group.name=a.group.name,t.group.status=a.group.status,t.group.color=a.group.color,t.request(e,t.group).then((function(o){t.group.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(o){t.confirmLoading=!1}))}}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(s["a"].editSubject,this.group).then((function(o){o?t.$message.success("编辑成功"):t.$message.success("编辑失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(o){t.confirmLoading=!1}))):this.request(s["a"].addSubject,this.group).then((function(o){o?t.$message.success("添加成功"):t.$message.success("添加失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(o){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},p=u,d=(a("0c4c"),a("2877")),m=Object(d["a"])(p,e,i,!1,null,"056edb24",null);o["default"]=m.exports},a082:function(t,o,a){}}]);