(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b9eb04e"],{"2d83":function(e,a,t){"use strict";t("d0a0")},3386:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[t("a-form",{staticClass:"project_info",attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[t("span",{staticClass:"label_col ant-form-item-required"},[e._v("设备厂商")]),t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.brand_id",{initialValue:e.post.brand_id,rules:[{required:!0,message:e.L("请选择设备厂商！")}]}],expression:"['post.brand_id',{initialValue: post.brand_id,rules: [{ required: true, message: L('请选择设备厂商！') }] }]"}],staticStyle:{width:"300px !important"},attrs:{placeholder:"请选择设备厂商"},on:{change:e.handleChange}},e._l(e.brand_list,(function(a,r){return t("a-select-option",{key:r,attrs:{value:a.id}},[e._v(" "+e._s(a.name)+" ")])})),1)],1),t("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[t("span",{staticClass:"label_col ant-form-item-required"},[e._v("设备类型")]),t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.device_type",{initialValue:e.post.device_type,rules:[{required:!0,message:e.L("请选择设备类型！")}]}],expression:"['post.device_type',{initialValue: post.device_type,rules: [{ required: true, message: L('请选择设备类型！') }] }]"}],staticStyle:{width:"300px !important"},attrs:{placeholder:"请选择设备类型"},on:{change:e.handleChange1}},e._l(e.device_type_list,(function(a,r){return t("a-select-option",{key:r,attrs:{value:a.id}},[e._v(" "+e._s(a.name)+" ")])})),1)],1),t("a-form-item",{attrs:{label:"",required:!0,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:30}},[t("span",{staticClass:"label_col ant-form-item-required"},[e._v("设备名称")]),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.camera_name",{initialValue:e.post.camera_name,rules:[{required:!0,message:e.L("请输入名称！")}]}],expression:"['post.camera_name',{ initialValue: post.camera_name, rules: [{ required: true, message: L('请输入名称！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入名称"}})],1),t("a-col",{attrs:{span:6}})],1),t("a-form-item",{attrs:{label:"",required:!0,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:30}},[t("span",{staticClass:"label_col ant-form-item-required"},[e._v("设备编号")]),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.camera_sn",{initialValue:e.post.camera_sn,rules:[{required:!0,message:e.L("请输入设备编号！")}]}],expression:"['post.camera_sn',{ initialValue: post.camera_sn, rules: [{ required: true, message: L('请输入设备编号！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入名称"}})],1),t("a-col",{attrs:{span:6}})],1),t("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:30}},[t("span",{staticClass:"label_col"},[e._v("出厂编号")]),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.product_model",{initialValue:e.post.product_model,rules:[{message:e.L("请输入出厂编号！")}]}],expression:"['post.product_model',{ initialValue: post.product_model, rules: [{message: L('请输入出厂编号！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入出厂编号"}})],1),t("a-col",{attrs:{span:6}})],1),t("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:30}},[t("span",{staticClass:"label_col"},[e._v("启用时间")]),t("a-date-picker",{attrs:{value:e.moment(e.post.open_time,e.dateFormat)},on:{change:e.onChange}})],1)],1),t("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:30}},[t("span",{staticClass:"label_col"},[e._v("设备相关参数")]),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.param",{initialValue:e.post.param,rules:[{message:e.L("请输入设备相关参数！")}]}],expression:"['post.param',{ initialValue: post.param, rules: [{  message: L('请输入设备相关参数！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入设备相关参数"}})],1),t("a-col",{attrs:{span:6}})],1),t("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:30}},[t("span",{staticClass:"label_col"},[e._v("备注")]),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.remark",{initialValue:e.post.remark,rules:[{message:e.L("请输入备注！")}]}],expression:"['post.remark',{ initialValue: post.remark, rules: [{  message: L('请输入备注！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入名称"}})],1),t("a-col",{attrs:{span:6}})],1),t("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:30}},[t("span",{staticClass:"label_col"},[e._v("业主查看视频监控")]),t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.is_support_look",{initialValue:e.post.is_support_look}],expression:"['post.is_support_look',{ initialValue: post.is_support_look}]"}]},[t("a-radio",{attrs:{value:0}},[e._v("不支持")]),t("a-radio",{attrs:{value:1}},[e._v("支持")])],1)],1)],1)],1)],1)],1)},s=[],o=t("a0e0"),i=t("c1df"),l=t.n(i),n={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,post:{camera_id:0,camera_name:"",camera_sn:"",product_name:"",param:"",remark:"",is_support_look:1,open_time:""},brand_list:[],device_type_list:[],dateFormat:"YYYY-MM-DD",date:""}},mounted:function(){},methods:{moment:l.a,onChange:function(e,a){console.log(e,a),this.post.open_time=a},handleChange:function(e){this.post.brand_id=e},handleChange1:function(e){console.log(e),this.post.device_type=e},add:function(){this.post={camera_id:0,camera_name:"",camera_sn:"",product_name:"",param:"",remark:"",is_support_look:1,open_time:""},this.title="添加",this.visible=!0,this.get_brand_list(),this.get_device_type_list(),this.getCurrentTime()},edit:function(e){this.title="编辑",this.visible=!0,this.post.camera_id=e,this.getCameraInfo(e),this.get_brand_list(),this.get_device_type_list()},get_brand_list:function(){var e=this;this.request(o["a"].getBrandList).then((function(a){e.brand_list=a}))},get_device_type_list:function(){var e=this;this.request(o["a"].getDeviceTypeList).then((function(a){e.device_type_list=a}))},getCameraInfo:function(e){var a=this;this.request(o["a"].getCameraInfo,{camera_id:e}).then((function(e){a.post.camera_id=e.camera_id,a.post.camera_name=e.camera_name,a.post.camera_sn=e.camera_sn,a.post.device_type=e.device_type,a.post.brand_id=e.brand_id,a.post.product_model=e.product_model,a.post.remark=e.remark,a.post.param=e.param,a.post.is_support_look=e.is_support_look,a.post.open_time=e.open_time_txt}))},handleSubmit:function(){var e=this,a=this.form.validateFields;this.confirmLoading=!0,a((function(a,t){if(a)e.confirmLoading=!1;else{var r=o["a"].addCameraDevice;t.post.open_time=e.post.open_time,t.post.camera_id=e.post.camera_id,e.request(r,t.post).then((function(a){e.post.camera_id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)})).catch((function(a){e.confirmLoading=!1}))}}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.post.id=0,e.form=e.$form.createForm(e)}),500)},getCurrentTime:function(){var e=(new Date).getFullYear(),a=(new Date).getMonth()+1,t=(new Date).getDate();(new Date).getHours(),(new Date).getMinutes(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getSeconds();this.post.open_time=e+"-"+a+"-"+t}}},p=n,c=(t("2d83"),t("2877")),m=Object(c["a"])(p,r,s,!1,null,"7cd17608",null);a["default"]=m.exports},d0a0:function(e,a,t){}}]);