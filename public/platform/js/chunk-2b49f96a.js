(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b49f96a"],{"14b0":function(t,i,e){},5189:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"类别名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{attrs:{placeholder:"请输入类别名称",disabled:!1},model:{value:t.group.name,callback:function(i){t.$set(t.group,"name",i)},expression:"group.name"}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-radio-group",{model:{value:t.group.status,callback:function(i){t.$set(t.group,"status",i)},expression:"group.status"}},[e("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1),e("a-col",{attrs:{span:6}})],1)],1)],1)],1)},s=[],o=(e("b0c0"),e("a0e0")),n={data:function(){return{text:"",title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",status:1,subject_id:0},id:0}},methods:{add:function(t){this.title="添加",this.visible=!0,this.group={id:0,name:"",status:1,subject_id:t}},edit:function(t){this.visible=!0,this.id=t,this.getSubjectInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getSubjectInfo:function(){var t=this;this.request(o["a"].getCategoryInfo,{id:this.id}).then((function(i){t.group.id=i.id,t.group.status=i.status,t.group.name=i.subject_name,t.group.subject_id=i.parent_id,console.log("group",t.group)}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(o["a"].editCategory,this.group).then((function(i){i?t.$message.success("编辑成功"):t.$message.success("编辑失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(i){t.confirmLoading=!1}))):this.request(o["a"].addCategory,this.group).then((function(i){i?t.$message.success("添加成功"):t.$message.success("添加失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(i){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},r=n,l=(e("f899"),e("2877")),u=Object(l["a"])(r,a,s,!1,null,"d028213a",null);i["default"]=u.exports},f899:function(t,i,e){"use strict";e("14b0")}}]);