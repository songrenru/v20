(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dc0de22"],{"114d":function(e,a,t){"use strict";t("611f")},"13b9":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("a-modal",{attrs:{title:e.modelTitle,width:900,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.blackForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"add_black"},[a("a-form-model-item",{attrs:{label:"车牌号码",prop:"city_arr"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.blackForm.city_arr},on:{change:e.handleSelectChange}},e._l(e.provinceList,(function(t,r){return a("a-select-option",{attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1),a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入车牌号码"},model:{value:e.blackForm.car_number,callback:function(a){e.$set(e.blackForm,"car_number",a)},expression:"blackForm.car_number"}})],1),a("a-form-model-item",{attrs:{label:"车主姓名",prop:"user_name"}},[a("a-input",{attrs:{placeholder:"请输入车主姓名"},model:{value:e.blackForm.user_name,callback:function(a){e.$set(e.blackForm,"user_name",a)},expression:"blackForm.user_name"}})],1),a("a-form-model-item",{attrs:{label:"车主手机号",prop:"phone"}},[a("a-input",{attrs:{placeholder:"请输入车主手机号"},model:{value:e.blackForm.phone,callback:function(a){e.$set(e.blackForm,"phone",a)},expression:"blackForm.phone"}})],1),a("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[a("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入备注内容"},model:{value:e.blackForm.remark,callback:function(a){e.$set(e.blackForm,"remark",a)},expression:"blackForm.remark"}})],1)],1)])],1)},l=[],o=t("a0e0"),i={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},black_type:{type:String,default:""},black_id:{type:String,default:""}},watch:{black_id:{immediate:!0,handler:function(e){"edit"==this.black_type&&this.getBlackInfo()}}},mounted:function(){this.getParkProvice()},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:14},blackForm:{city_arr:""},rules:{city_arr:[{required:!0,message:"请输入车牌号码",trigger:"blur"}]},provinceList:[]}},methods:{clearForm:function(){this.blackForm={city_arr:""}},getBlackInfo:function(){var e=this;e.black_id&&e.request(o["a"].getBlackCarInfo,{black_id:e.black_id}).then((function(a){e.blackForm=a,e.blackForm.city_arr=a.province||"",e.blackForm.black_id=a.id}))},getParkProvice:function(){var e=this;e.request(o["a"].getParkProvice,{black_id:e.black_id}).then((function(a){e.provinceList=a}))},handleSubmit:function(e){var a=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),a.confirmLoading=!1,!1;var t=a,r=o["a"].addBlackCar;"edit"==a.black_type&&(r=o["a"].editBlackCar),t.request(r,t.blackForm).then((function(e){"edit"==a.black_type?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),a.$emit("closeBlack",!0),a.clearForm(),a.confirmLoading=!1})).catch((function(e){a.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeBlack",!1),this.clearForm()},handleSelectChange:function(e){this.blackForm.city_arr=e,this.$forceUpdate(),console.log(e,this.blackForm)},filterOption:function(e,a){return a.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},c=i,n=(t("114d"),t("2877")),s=Object(n["a"])(c,r,l,!1,null,"3d044d58",null);a["default"]=s.exports},"611f":function(e,a,t){}}]);