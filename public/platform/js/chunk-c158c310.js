(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c158c310"],{"0b8f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.modelTitle,width:900,visible:t.visible,"confirm-loading":t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:t.groupForm,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("div",{staticClass:"add_black"},[a("a-form-model-item",{attrs:{label:"关联功能",prop:"cat_function"}},[a("a-select",{attrs:{"show-search":"",placeholder:"请选择","filter-option":t.filterOption,value:t.groupForm.cat_function},on:{change:function(e){return t.handleSelectChange(e,"cat_function")}}},t._l(t.labelFunction,(function(e,n){return a("a-select-option",{attrs:{value:e.key}},[t._v(" "+t._s(e.value)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"分组名称",prop:"cat_name"}},[a("a-input",{attrs:{placeholder:"请输入分组名称"},model:{value:t.groupForm.cat_name,callback:function(e){t.$set(t.groupForm,"cat_name",e)},expression:"groupForm.cat_name"}})],1)],1)])],1)},o=[],i=a("a0e0"),r={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},cat_type:{type:String,default:""},cat_id:{type:String,default:""}},watch:{cat_id:{immediate:!0,handler:function(t){"edit"==this.cat_type&&this.getCatInfo()}}},mounted:function(){this.getLabelFunction()},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:14},groupForm:{cat_function:""},rules:{cat_function:[{required:!0,message:"请选择关联功能",trigger:"blur"}],cat_name:[{required:!0,message:"请输入分组名称",trigger:"blur"}]},labelFunction:[]}},methods:{clearForm:function(){this.groupForm={cat_function:""}},getLabelFunction:function(){var t=this;t.request(i["a"].getLabelFunction,{}).then((function(e){t.labelFunction=e}))},getCatInfo:function(){var t=this;t.cat_id&&t.request(i["a"].getLabelCatInfo,{cat_id:t.cat_id}).then((function(e){t.groupForm=e,t.groupForm.cat_id=e.id}))},getLabelCatList:function(){var t=this;t.request(i["a"].getLabelCatList,{}).then((function(e){t.cateList=e}))},handleSubmit:function(t){var e=this;e.confirmLoading=!0,e.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),e.confirmLoading=!1,!1;e.groupForm.cat_id=e.cat_id;var a=i["a"].addLabelCat;"edit"==e.cat_type&&(a=i["a"].editLabelCat),e.request(a,e.groupForm).then((function(t){"edit"==e.cat_type?e.$message.success("编辑成功！"):e.$message.success("添加成功！"),e.$emit("closeGroup",!0),e.clearForm(),e.confirmLoading=!1})).catch((function(t){e.confirmLoading=!1}))}))},handleSubCancel:function(t){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeGroup",!1),this.clearForm()},handleSelectChange:function(t,e){this.groupForm[e]=t,this.$forceUpdate()},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0}}},c=r,l=(a("378e"),a("0c7c")),u=Object(l["a"])(c,n,o,!1,null,"8f1d52d4",null);e["default"]=u.exports},"378e":function(t,e,a){"use strict";a("4ab5")},"4ab5":function(t,e,a){}}]);