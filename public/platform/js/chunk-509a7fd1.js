(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-509a7fd1"],{"5d70":function(o,t,a){"use strict";a.r(t);var e=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("a-modal",{attrs:{title:o.title,width:900,visible:o.visible,maskClosable:!1,confirmLoading:o.confirmLoading},on:{ok:o.handleSubmit,cancel:o.handleCancel}},[a("a-spin",{attrs:{spinning:o.confirmLoading,height:800}},[a("a-form",{attrs:{form:o.form}},[a("a-form-item",{attrs:{label:"类目名称",labelCol:o.labelCol,wrapperCol:o.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{placeholder:"请输入类目名称",disabled:o.disabled},model:{value:o.group.name,callback:function(t){o.$set(o.group,"name",t)},expression:"group.name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"背景色",labelCol:o.labelCol,wrapperCol:o.wrapperCol}},[a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输入背景色"},model:{value:o.group.color,callback:function(t){o.$set(o.group,"color",t)},expression:"group.color"}})],1),a("a-col",{attrs:{span:2}}),a("a-col",{attrs:{span:6}},[a("colorPicker",{on:{change:o.headleChangeColor},model:{value:o.color,callback:function(t){o.color=t},expression:"color"}})],1)],1),a("a-form-item",{attrs:{label:"状态",labelCol:o.labelCol,wrapperCol:o.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{model:{value:o.group.status,callback:function(t){o.$set(o.group,"status",t)},expression:"group.status"}},[a("a-radio",{attrs:{value:1}},[o._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[o._v(" 关闭 ")])],1)],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},s=[],i=(a("b0c0"),a("a0e0")),l=a("a9f5"),r=a.n(l),n=a("8bbf"),c=a.n(n);c.a.use(r.a);var u={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},disabled:!1,value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",color:"",status:1},id:0}},methods:{add:function(){this.title="添加",this.visible=!0,this.disabled=!1,this.group={id:0,name:"",color:"",status:1}},edit:function(o){this.visible=!0,this.id=o,this.getSubjectInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getSubjectInfo:function(){var o=this;this.request(i["a"].getSubjectInfo,{id:this.id}).then((function(t){o.group.id=t.id,o.group.status=t.status,o.group.name=t.subject_name,o.group.color=t.color,o.color=t.color,1==t.flag?o.disabled=!0:o.disabled=!1,console.log("group",o.group)}))},headleChangeColor:function(o){console.log("color",o),this.group.color=o},handleSubmit:function(){var o=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(i["a"].editSubject,this.group).then((function(t){t?o.$message.success("编辑成功"):o.$message.success("编辑失败"),setTimeout((function(){o.form=o.$form.createForm(o),o.visible=!1,o.confirmLoading=!1,o.$emit("ok")}),1500)})).catch((function(t){o.confirmLoading=!1}))):this.request(i["a"].addSubject,this.group).then((function(t){t?o.$message.success("添加成功"):o.$message.success("添加失败"),setTimeout((function(){o.form=o.$form.createForm(o),o.visible=!1,o.confirmLoading=!1,o.$emit("ok")}),1500)})).catch((function(t){o.confirmLoading=!1}))},handleCancel:function(){var o=this;this.visible=!1,setTimeout((function(){o.id="0",o.form=o.$form.createForm(o)}),500)}}},d=u,p=(a("7127"),a("2877")),m=Object(p["a"])(d,e,s,!1,null,"82dfa078",null);t["default"]=m.exports},7127:function(o,t,a){"use strict";a("be6b")},be6b:function(o,t,a){}}]);