(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f645828"],{"1bb2":function(t,o,a){"use strict";a("8779")},8779:function(t,o,a){},b38bd:function(t,o,a){"use strict";a.r(o);var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"字段名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{placeholder:"请输入字段名称"},model:{value:t.group.name,callback:function(o){t.$set(t.group,"name",o)},expression:"group.name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{placeholder:"请输入排序值"},model:{value:t.group.sort,callback:function(o){t.$set(t.group,"sort",o)},expression:"group.sort"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{model:{value:t.group.status,callback:function(o){t.$set(t.group,"status",o)},expression:"group.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},e=[],i=(a("b0c0"),a("a0e0")),r={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",cate_id:0,sort:"",status:1},id:0}},methods:{add:function(t){this.title="添加",this.visible=!0,this.group={id:0,name:"",sort:"",cate_id:t,status:1}},edit:function(t){this.visible=!0,this.id=t,this.getCateCustomInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getCateCustomInfo:function(){var t=this;this.request(i["a"].getCateCustomInfo,{id:this.id}).then((function(o){t.group.id=o.id,t.group.status=o.status,t.group.name=o.name,t.group.sort=o.sort,console.log("group",t.group)}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(i["a"].editSubject,this.group).then((function(o){o?t.$message.success("编辑成功"):t.$message.success("编辑失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(o){t.confirmLoading=!1}))):this.request(i["a"].addCateCustom,this.group).then((function(o){o?t.$message.success("添加成功"):t.$message.success("添加失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(o){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},n=r,l=(a("1bb2"),a("2877")),u=Object(l["a"])(n,s,e,!1,null,"3289f497",null);o["default"]=u.exports}}]);