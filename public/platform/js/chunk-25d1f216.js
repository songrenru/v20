(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25d1f216"],{3386:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{staticClass:"project_info",attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!e.editAuth.edit_brand_id}},[a("span",{class:e.editAuth.edit_brand_id?"label_col":"label_col ant-form-item-required"},[e._v("设备厂商")]),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.brand_id",{initialValue:e.post.brand_id,rules:[{required:!e.editAuth.edit_brand_id,message:e.L("请选择设备厂商！")}]}],expression:"['post.brand_id',{initialValue: post.brand_id,rules: [{ required: !editAuth.edit_brand_id, message: L('请选择设备厂商！') }] }]"}],staticStyle:{width:"300px !important"},attrs:{placeholder:"请选择设备厂商",disabled:e.editAuth.edit_brand_id},on:{change:e.handleChange}},e._l(e.brand_list,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),e.editAuth.edit_thirdProtocol?e._e():a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("span",{staticClass:"label_col ant-form-item-required"},[e._v("设备协议")]),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.thirdProtocol",{initialValue:e.post.thirdProtocol,rules:[{required:!0,message:e.L("请选择设备协议")}]}],expression:"['post.thirdProtocol',{initialValue: post.thirdProtocol,rules: [{ required: true, message: L('请选择设备协议') }] }]"}],staticStyle:{width:"300px !important"},attrs:{placeholder:"请选择设备协议"}},e._l(e.thirdProtocolArr,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.thirdProtocol}},[e._v(" "+e._s(t.thirdTitle)+" ")])})),1)],1),e.editAuth.edit_thirdProtocol?a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("span",{staticClass:"label_col"},[e._v("设备协议")]),e._v(" "+e._s(e.post.protocolTitle)+" ")]):e._e(),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!e.editAuth.edit_device_type}},[a("span",{class:e.editAuth.edit_device_type?"label_col":"label_col ant-form-item-required"},[e._v("设备类型")]),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.device_type",{initialValue:e.post.device_type,rules:[{required:!e.editAuth.edit_device_type,message:e.L("请选择设备类型！")}]}],expression:"['post.device_type',{initialValue: post.device_type,rules: [{ required: !editAuth.edit_device_type, message: L('请选择设备类型！') }] }]"}],staticStyle:{width:"300px !important"},attrs:{placeholder:"请选择设备类型",disabled:e.editAuth.edit_device_type},on:{change:e.handleChange1}},e._l(e.device_type_list,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1),e.tips["device_type"]&&e.tips["device_type"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["device_type"]["href"]}},[e._v(e._s(e.tips.device_type.title))]):e._e(),e.tips["device_type"]&&!e.tips["device_type"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.device_type.title))]):e._e()],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!e.editAuth.edit_camera_name}},[a("a-col",{attrs:{span:30}},[a("span",{class:e.editAuth.edit_camera_name?"label_col":"label_col ant-form-item-required"},[e._v("设备名称")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.camera_name",{initialValue:e.post.camera_name,rules:[{required:!e.editAuth.edit_camera_name,message:e.L("请输入名称！")}]}],expression:"['post.camera_name',{ initialValue: post.camera_name, rules: [{ required: !editAuth.edit_camera_name, message: L('请输入名称！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入名称",disabled:e.editAuth.edit_camera_name}}),e.tips["name"]&&e.tips["name"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["name"]["href"]}},[e._v(e._s(e.tips.name.title))]):e._e(),e.tips["name"]&&!e.tips["name"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.name.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!e.editAuth.edit_camera_sn}},[a("a-col",{attrs:{span:30}},[a("span",{class:e.editAuth.edit_camera_sn?"label_col":"label_col ant-form-item-required"},[e._v("设备编号")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.camera_sn",{initialValue:e.post.camera_sn,rules:[{required:!e.editAuth.edit_camera_sn,message:e.L("请输入设备编号！")}]}],expression:"['post.camera_sn',{ initialValue: post.camera_sn, rules: [{ required: !editAuth.edit_camera_sn, message: L('请输入设备编号！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入设备编号",disabled:e.editAuth.edit_camera_sn}}),e.tips["sn"]&&e.tips["sn"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["sn"]["href"]}},[e._v(e._s(e.tips.sn.title))]):e._e(),e.tips["sn"]&&!e.tips["sn"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.sn.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1),"1"==e.post.brand_id?a("a-form-item",{attrs:{label:"",required:!e.editAuth.edit_device_code,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:24}},[a("span",{class:e.editAuth.edit_device_code?"label_col":"label_col ant-form-item-required"},[e._v("设备验证码")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.device_code",{initialValue:e.post.device_code,rules:[{required:!e.editAuth.edit_device_code,message:e.L("请输入设备验证码！")}]}],expression:"['post.device_code',{ initialValue: post.device_code, rules: [{ required: !editAuth.edit_device_code, message: L('请输入设备验证码！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入设备验证码",disabled:e.editAuth.edit_device_code}}),e.tips["code"]&&e.tips["code"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["code"]["href"]}},[e._v(e._s(e.tips.code.title))]):e._e(),e.tips["code"]&&!e.tips["code"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.code.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1):e._e(),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("出厂编号")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.product_model",{initialValue:e.post.product_model,rules:[{message:e.L("请输入出厂编号！")}]}],expression:"['post.product_model',{ initialValue: post.product_model, rules: [{message: L('请输入出厂编号！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入出厂编号",disabled:e.editAuth.edit_product_model}}),e.tips["product_model"]&&e.tips["product_model"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["product_model"]["href"]}},[e._v(e._s(e.tips.product_model.title))]):e._e(),e.tips["product_model"]&&!e.tips["product_model"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.product_model.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("设备用户名")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.thirdLoginName",{initialValue:e.post.thirdLoginName,rules:[{message:e.L("请输入请输入设备用户名！")}]}],expression:"['post.thirdLoginName',{ initialValue: post.thirdLoginName, rules: [{message: L('请输入请输入设备用户名！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入设备用户名",disabled:e.editAuth.edit_thirdLoginName}}),e.tips["login_name"]&&e.tips["login_name"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["login_name"]["href"]}},[e._v(e._s(e.tips.login_name.title))]):e._e(),e.tips["login_name"]&&!e.tips["login_name"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.login_name.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("设备密码")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.thirdLoginPassword",{initialValue:e.post.thirdLoginPassword,rules:[{message:e.L("请输入设备密码！")}]}],expression:"['post.thirdLoginPassword',{ initialValue: post.thirdLoginPassword, rules: [{message: L('请输入设备密码！') }] }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入设备密码",disabled:e.editAuth.edit_thirdLoginPassword}}),e.tips["login_password"]&&e.tips["login_password"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["login_password"]["href"]}},[e._v(e._s(e.tips.login_password.title))]):e._e(),e.tips["login_password"]&&!e.tips["login_password"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.login_password.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("启用时间")]),a("a-date-picker",{attrs:{value:e.moment(e.post.open_time,e.dateFormat),disabled:e.editAuth.edit_open_time},on:{change:e.onChange}}),e.tips["open_time"]&&e.tips["open_time"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["open_time"]["href"]}},[e._v(e._s(e.tips.open_time.title))]):e._e(),e.tips["open_time"]&&!e.tips["open_time"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.open_time.title))]):e._e()],1)],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("设备相关参数")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.param",{initialValue:e.post.param}],expression:"['post.param',{ initialValue: post.param }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入设备相关参数",disabled:e.editAuth.edit_param}}),e.tips["param"]&&e.tips["param"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["param"]["href"]}},[e._v(e._s(e.tips.param.title))]):e._e(),e.tips["param"]&&!e.tips["param"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.param.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("备注")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.remark",{initialValue:e.post.remark}],expression:"['post.remark',{ initialValue: post.remark }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入名称",disabled:e.editAuth.edit_remark}}),e.tips["remark"]&&e.tips["remark"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["remark"]["href"]}},[e._v(e._s(e.tips.remark.title))]):e._e(),e.tips["remark"]&&!e.tips["remark"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.remark.title))]):e._e()],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("排序")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.sort",{initialValue:e.post.sort}],expression:"['post.sort',{ initialValue: post.sort }]"}],staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"数值越大，越靠前"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col"},[e._v("业主查看视频监控")]),a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.is_support_look",{initialValue:e.post.is_support_look}],expression:"['post.is_support_look',{ initialValue: post.is_support_look}]"}],attrs:{disabled:e.editAuth.edit_is_support_look}},[a("a-radio",{attrs:{value:0}},[e._v("不支持")]),a("a-radio",{attrs:{value:1}},[e._v("支持")])],1),e.tips["look"]&&e.tips["look"]["href"]?a("a",{staticStyle:{color:"blue","padding-left":"15px"},attrs:{target:"_blank",href:e.tips["look"]["href"]}},[e._v(e._s(e.tips.look.title))]):e._e(),e.tips["look"]&&!e.tips["look"]["href"]?a("a",{staticStyle:{color:"rgba(0, 0, 0, 0.65)","padding-left":"15px"}},[e._v(e._s(e.tips.look.title))]):e._e()],1)],1)],1)],1)],1)},r=[],o=a("ade3"),s=(a("4e82"),a("a0e0")),l=a("c1df"),d=a.n(l),p={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,post:{camera_id:0,camera_name:"",camera_sn:"",product_name:"",param:"",remark:"",is_support_look:1,open_time:"",thirdLoginName:"",thirdLoginPassword:"",protocolTitle:"",thirdProtocol:"",sort:0},brand_list:[],device_type_list:[],dateFormat:"YYYY-MM-DD",date:"",thirdProtocolArr:[],editAuth:{edit_brand_id:!1,edit_thirdProtocol:!1,edit_device_type:!1,edit_camera_name:!1,edit_camera_sn:!1,edit_device_code:!1,edit_product_model:!1,edit_thirdLoginName:!1,edit_thirdLoginPassword:!1,edit_open_time:!1,edit_remark:!1,edit_edit_param:!1,edit_is_support_look:!1},tips:[]}},mounted:function(){},methods:{moment:d.a,onChange:function(e,t){console.log(e,t),this.post.open_time=t},handleChange:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.post.brand_id=""+e,this.thirdProtocolArr=[],this.request(s["a"].getThirdProtocol,{brand_id:e}).then((function(e){e.thirdProtocol&&(t.thirdProtocolArr=e.thirdProtocol,t.post.thirdProtocol=a,console.log("this.post.thirdProtocol",t.post.thirdProtocol),t.form.setFieldsValue({"post.thirdProtocol":a}),t.$forceUpdate()),e.tips&&(t.tips=e.tips),console.log("选择品牌",t.thirdProtocolArr)}))},handleChange1:function(e){console.log(e),this.post.device_type=e},add:function(){var e;this.tips=[],this.post=(e={camera_id:0,camera_name:"",camera_sn:"",product_name:"",param:"",remark:"",is_support_look:1,open_time:"",thirdProtocol:"",device_code:"",thirdLoginName:"",thirdLoginPassword:""},Object(o["a"])(e,"thirdLoginPassword",""),Object(o["a"])(e,"protocolTitle",""),Object(o["a"])(e,"sort",0),e),this.editAuth={edit_brand_id:!1,edit_thirdProtocol:!1,edit_device_type:!1,edit_camera_name:!1,edit_camera_sn:!1,edit_device_code:!1,edit_product_model:!1,edit_thirdLoginName:!1,edit_thirdLoginPassword:!1,edit_open_time:!1,edit_remark:!1,edit_edit_param:!1,edit_is_support_look:!1},this.editAuth={},this.title="添加",this.visible=!0,this.get_brand_list(),this.get_device_type_list(),this.getCurrentTime()},edit:function(e){var t;this.post=(t={camera_id:0,camera_name:"",camera_sn:"",product_name:"",param:"",remark:"",is_support_look:0,open_time:"",thirdProtocol:"",device_code:"",thirdLoginName:"",thirdLoginPassword:""},Object(o["a"])(t,"thirdLoginPassword",""),Object(o["a"])(t,"protocolTitle",""),Object(o["a"])(t,"sort",0),t),this.editAuth={edit_brand_id:!1,edit_thirdProtocol:!1,edit_device_type:!1,edit_camera_name:!1,edit_camera_sn:!1,edit_device_code:!1,edit_product_model:!1,edit_thirdLoginName:!1,edit_thirdLoginPassword:!1,edit_open_time:!1,edit_remark:!1,edit_edit_param:!1,edit_is_support_look:!1},this.confirmLoading=!0,this.title="编辑",this.visible=!0,this.post.camera_id=e,this.get_brand_list(),this.get_device_type_list();var a=this;setTimeout((function(){a.getCameraInfo(e)}),800)},get_brand_list:function(){var e=this;this.request(s["a"].getBrandList).then((function(t){e.brand_list=t,console.log("this.brand_list",e.brand_list)}))},get_device_type_list:function(){var e=this;this.request(s["a"].getDeviceTypeList).then((function(t){e.device_type_list=t}))},getCameraInfo:function(e){var t=this;this.request(s["a"].getCameraInfo,{camera_id:e}).then((function(e){t.handleChange(e.brand_id,e.thirdProtocol),t.post.camera_id=e.camera_id,t.post.camera_name=e.camera_name,t.post.camera_sn=e.camera_sn,t.post.device_type=e.device_type,t.post.product_model=e.product_model,t.post.remark=e.remark,t.post.param=e.param,t.post.is_support_look=e.is_support_look,t.post.open_time=e.open_time_txt,t.post.device_code=e.device_code,t.post.thirdLoginName=e.thirdLoginName,t.post.thirdLoginPassword=e.thirdLoginPassword,t.post.protocolTitle=e.protocolTitle,parseInt(e.sort)>0?t.post.sort=e.sort:t.post.sort=0,t.editAuth=e.editAuth,t.confirmLoading=!1}))},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){if(t)e.confirmLoading=!1;else{var i=s["a"].addCameraDevice;a.post.open_time=e.post.open_time,a.post.camera_id=e.post.camera_id,e.request(i,a.post).then((function(t){e.post.camera_id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)})).catch((function(t){e.confirmLoading=!1}))}}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.post.id=0,e.form=e.$form.createForm(e)}),500)},getCurrentTime:function(){var e=(new Date).getFullYear(),t=(new Date).getMonth()+1,a=(new Date).getDate();(new Date).getHours(),(new Date).getMinutes(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getSeconds();this.post.open_time=e+"-"+t+"-"+a}}},n=p,c=(a("add0"),a("2877")),_=Object(c["a"])(n,i,r,!1,null,"24d41c2a",null);t["default"]=_.exports},5734:function(e,t,a){},add0:function(e,t,a){"use strict";a("5734")}}]);