(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a489564"],{6176:function(e,r,t){"use strict";t("72ad")},"72ad":function(e,r,t){},8502:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e._self._c;return r("a-modal",{attrs:{title:e.modelTitle,width:1e3,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[r("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{message:"添加免费车时，车牌开头包含、车牌结尾包含、完整车牌任意填写一项即可保存成功，如果都填写，会依次查询车辆信息支持免费进出",type:"info","show-icon":""}}),r("a-form-model",{ref:"ruleForm",attrs:{model:e.freeForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("div",{staticClass:"add_black"},[r("a-form-model-item",{attrs:{label:"车牌类型",prop:"park_type"}},[r("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.freeForm.park_type},on:{change:function(r){return e.handleSelectChange(r,"park_type")}}},e._l(e.parkTypeList,(function(t,a){return r("a-select-option",{attrs:{value:1*t.park_type}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"车牌开头包含",prop:"first_name"}},[r("a-input",{attrs:{placeholder:"请输入车牌开头包含"},model:{value:e.freeForm.first_name,callback:function(r){e.$set(e.freeForm,"first_name",r)},expression:"freeForm.first_name"}})],1),r("a-form-model-item",{attrs:{label:"车牌结尾包含",prop:"last_name"}},[r("a-input",{attrs:{placeholder:"请输入车牌结尾包含"},model:{value:e.freeForm.last_name,callback:function(r){e.$set(e.freeForm,"last_name",r)},expression:"freeForm.last_name"}})],1),r("a-form-model-item",{attrs:{label:"完整车牌",prop:"free_park"}},[r("a-input",{attrs:{placeholder:"请输入完整车牌"},model:{value:e.freeForm.free_park,callback:function(r){e.$set(e.freeForm,"free_park",r)},expression:"freeForm.free_park"}})],1)],1)])],1)},o=[],n=t("a0e0"),i={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},free_type:{type:String,default:""},free_id:{type:String,default:""}},watch:{free_id:{immediate:!0,handler:function(e){"edit"==this.free_type&&this.getFreeInfo()}}},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:14},freeForm:{park_type:""},rules:{park_type:[{required:!0,message:"请选择车牌类型",trigger:"blur"}]},parkTypeList:[]}},mounted:function(){this.getParkType()},methods:{clearForm:function(){this.freeForm={park_type:""}},getFreeInfo:function(){var e=this;e.free_id&&e.request(n["a"].getFreeCarInfo,{free_id:e.free_id}).then((function(r){e.freeForm=r,e.freeForm.free_id=r.id}))},getParkType:function(){var e=this;e.request(n["a"].getParkType,{}).then((function(r){for(var t in r)e.parkTypeList.push({park_type:t,label:r[t]})}))},handleSubmit:function(e){var r=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),r.confirmLoading=!1,!1;var t=r;if(!t.freeForm.first_name&&!t.freeForm.last_name&&!t.freeForm.free_park)return t.$message.warning("开头、结尾、完整车牌至少填写一个！"),void(t.confirmLoading=!1);var a=n["a"].addFreeCar;"edit"==r.free_type&&(a=n["a"].editFreeCar),t.request(a,t.freeForm).then((function(e){"edit"==r.free_type?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),r.$emit("closeFree",!0),r.clearForm(),r.confirmLoading=!1})).catch((function(e){r.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeFree",!1),this.clearForm()},handleSelectChange:function(e,r){this.freeForm[r]=e,this.$forceUpdate()},filterOption:function(e,r){return r.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},l=i,s=(t("6176"),t("0b56")),f=Object(s["a"])(l,a,o,!1,null,"4273e4ba",null);r["default"]=f.exports}}]);