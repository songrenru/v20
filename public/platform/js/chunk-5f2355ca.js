(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f2355ca"],{"1e7a":function(e,a,t){},"47c8":function(e,a,t){"use strict";var i={config:"/community/login.login/config",login:"/community/login.login/check",sendCode:"/community/login.PropertyGuide/sendCode",addInformation:"/community/login.PropertyGuide/addInformation",propertyGuide:"/community/login.PropertyGuide/propertyGuide",completePropertyGuide:"/community/login.PropertyGuide/completePropertyGuide",workerAdd:"/community/common.Framework/workerAdd",workerSub:"/community/common.Framework/workerSub",workerDel:"/community/common.Framework/workerDel",workerQuery:"/community/common.Framework/workerQuery",organizationDel:"/community/common.Framework/organizationDel",organizationAdd:"/community/common.Framework/organizationAdd",organizationSub:"/community/common.Framework/organizationSub",organizationSynQw:"/community/common.Framework/organizationSynQw"};a["a"]=i},a20d:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal_container"},[t("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[t("a-form-model",{ref:"ruleForm",staticClass:"div_box",attrs:{model:e.detail,labelCol:e.labelCol,wrapperCol:e.wrapperCol,rules:e.rules}},[t("a-form-model-item",{attrs:{label:"编号",prop:"job_number"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入工号"},model:{value:e.detail.job_number,callback:function(a){e.$set(e.detail,"job_number",a)},expression:"detail.job_number"}})],1),t("a-form-model-item",{attrs:{label:"姓名",prop:"work_name"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入姓名"},model:{value:e.detail.work_name,callback:function(a){e.$set(e.detail,"work_name",a)},expression:"detail.work_name"}})],1),t("a-form-model-item",{attrs:{label:"性别",prop:"gender"}},[t("a-radio-group",{model:{value:e.detail.gender,callback:function(a){e.$set(e.detail,"gender",a)},expression:"detail.gender"}},[t("a-radio",{attrs:{value:1}},[e._v("男")]),t("a-radio",{attrs:{value:2}},[e._v("女")])],1)],1),t("a-form-model-item",{attrs:{label:"手机号码",prop:"phone",extra:"此手机号需与注册的手机号一致,才能开门成功"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入手机号码"},on:{change:e.phoneBlur},model:{value:e.detail.phone,callback:function(a){e.$set(e.detail,"phone",a)},expression:"detail.phone"}})],1),t("a-form-model-item",{attrs:{label:"身份证号",prop:"id_card",extra:"填写后该用户可通过身份证进入门禁"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入身份证号"},model:{value:e.detail.id_card,callback:function(a){e.$set(e.detail,"id_card",a)},expression:"detail.id_card"}})],1),t("a-form-model-item",{attrs:{label:"IC卡",prop:"ic_card",extra:"填写后该用户可通过IC卡进入门禁"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入IC卡"},model:{value:e.detail.ic_card,callback:function(a){e.$set(e.detail,"ic_card",a)},expression:"detail.ic_card"}})],1),2==e.role_type?t("a-form-model-item",{attrs:{label:"小区管理人员身份",prop:"is_worker_admin",extra:"选择“否”时，有小区工作人员身份可登录；选择“是”时，有小区工作人员和小区管理人员身份可登录"}},[t("a-radio-group",{staticStyle:{"margin-left":"10px"},model:{value:e.detail.is_worker_admin,callback:function(a){e.$set(e.detail,"is_worker_admin",a)},expression:"detail.is_worker_admin"}},[t("a-radio",{attrs:{value:1}},[e._v("是")]),t("a-radio",{attrs:{value:0}},[e._v("否")])],1)],1):e._e(),t("a-form-model-item",{attrs:{label:"是否可以开门",prop:"open_door"}},[t("a-radio-group",{model:{value:e.detail.open_door,callback:function(a){e.$set(e.detail,"open_door",a)},expression:"detail.open_door"}},[t("a-radio",{attrs:{value:1}},[e._v("是")]),t("a-radio",{attrs:{value:0}},[e._v("否")])],1)],1),t("a-form-model-item",{attrs:{label:"入职时间",prop:"job_create_time"}},[e.detail.job_create_time?t("a-date-picker",{attrs:{disabled:e.is_edit,placeholder:"请选择入职时间",value:e.moment(e.detail.job_create_time,e.dateFormat),format:e.dateFormat},on:{change:e.onChange}}):t("a-date-picker",{attrs:{disabled:e.is_edit,placeholder:"请选择入职时间"},on:{change:e.onChange}})],1),t("a-form-model-item",{attrs:{label:"账号",prop:"account"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入登录账号"},on:{change:e.accountFoucs},model:{value:e.detail.account,callback:function(a){e.$set(e.detail,"account",a)},expression:"detail.account"}})],1),"人员添加"==e.title?t("a-form-model-item",{attrs:{label:"密码",prop:"password",extra:"如果不填写密码或为空，则默认密码 123abc"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入登录密码"},model:{value:e.detail.password,callback:function(a){e.$set(e.detail,"password",a)},expression:"detail.password"}})],1):t("a-form-model-item",{attrs:{label:"密码",prop:"password",extra:"如果不填写密码或为空，则密码不做修改"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入登录密码"},model:{value:e.detail.password,callback:function(a){e.$set(e.detail,"password",a)},expression:"detail.password"}})],1),t("a-form-model-item",{attrs:{label:"备注",prop:"remarks"}},[t("a-input",{attrs:{disabled:e.is_edit,placeholder:"请输入内容"},model:{value:e.detail.remarks,callback:function(a){e.$set(e.detail,"remarks",a)},expression:"detail.remarks"}})],1),"人员添加"!=e.title?t("a-form-model-item",{attrs:{label:"是否同步企微"}},[t("a-input",{attrs:{disabled:!0},model:{value:e.detail.qy_txt,callback:function(a){e.$set(e.detail,"qy_txt",a)},expression:"detail.qy_txt"}})],1):e._e(),"人员添加"!=e.title?t("a-form-model-item",{attrs:{label:"企微同步时间"}},[t("a-input",{attrs:{disabled:!0},model:{value:e.detail.qy_time,callback:function(a){e.$set(e.detail,"qy_time",a)},expression:"detail.qy_time"}})],1):e._e(),1*e.uploadFace.status==1?t("a-form-model-item",{attrs:{label:"上传人脸"}},[t("a-button",{attrs:{type:"primary"},on:{click:e.uploadPeopleface}},[e._v("上传人脸")])],1):e._e()],1)],1)],1),t("a-modal",{attrs:{title:e.title,width:800,visible:e.lookVisiable,maskClosable:!1,footer:null},on:{cancel:e.handleLookCancel}},[t("div",{staticClass:"look_content"},e._l(e.propsList,(function(a,i){return t("div",{key:i,staticClass:"look_item"},[t("div",{staticClass:"item_title"},[e._v(e._s(a.name)+":")]),1==a.type&&a.value?t("div",e._l(a.value,(function(a){return t("a-tag",{staticStyle:{"margin-bottom":"5px"},attrs:{color:"#FCBE79"}},[e._v(" "+e._s(a))])})),1):t("div",{staticClass:"item_value"},[e._v(e._s(a.value?a.value:"暂无"))])])})),0)]),t("a-drawer",{attrs:{title:"人脸上传",width:800,visible:e.showUploadface},on:{close:e.handleUploadCancel}},[t("iframe",{attrs:{src:e.uploadFace.url,width:"100%",height:"800px"}})])],1)},o=[],r=(t("ac1f"),t("47c8")),l=(t("0f28"),t("c1df")),n=t.n(l),d=t("ca00"),s={data:function(){return{title:"新建",labelCol:{span:6},wrapperCol:{span:16},lookVisiable:!1,visible:!1,is_edit:!1,confirmLoading:!1,loading:!1,detail:{group_id:null,job_number:"",work_name:"",gender:1,phone:"",id_card:"",ic_card:"",job_create_time:null,open_door:1,account:"",password:"",remarks:"",is_worker_admin:0},dateFormat:"YYYY-MM-DD",is_footer:!0,propsList:[],rules:{work_name:[{required:!0,message:"请输入姓名",trigger:"blur"}],account:[{required:!0,message:"请输入账号",trigger:"blur"}],id_card:[{required:!0,message:"请输入身份证号",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:this.phoneConfirm}]},tokenName:"",uploadFace:{},showUploadface:!1,isBianhua:!0,role_type:0}},mounted:function(){var e=Object(d["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{moment:n.a,phoneConfirm:function(e,a,t){var i=/^1[3456789]\d{9}$/;i.test(a)?t():t("请输入正确的手机号码")},onChange:function(e,a){this.detail.job_create_time=a},addMember:function(e,a,t){this.role_type=t,this.detail.group_id=e,this.is_edit=!1,this.title="人员添加",this.visible=!0},phoneBlur:function(){"人员添加"==this.title&&this.isBianhua&&(this.detail.account=this.detail.phone)},handleSubmit:function(){var e=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(a){if(!a)return e.confirmLoading=!1,!1;e.detail.tokenName=e.tokenName,""==e.detail.password&&(e.detail.password="123abc");var t=r["a"].workerAdd;1*e.detail.wid>0&&(t=r["a"].workerSub),e.request(t,e.detail).then((function(a){e.detail.wid,a.error?e.$message.success(a.msg):e.$message.error(a.msg),e.confirmLoading=!1,a.error&&(e.visible=!1,e.$emit("ok",e.detail),e.clearForm(),e.$refs.ruleForm.resetFields())})).catch((function(a){e.confirmLoading=!1}))}))},clearForm:function(){this.detail={group_id:null,job_number:"",work_name:"",gender:1,phone:"",id_card:"",ic_card:"",job_create_time:null,open_door:1,account:"",password:"",remarks:"",is_worker_admin:0},this.uploadFace={},this.isBianhua=!0},accountFoucs:function(){""==this.detail.account?this.isBianhua=!0:this.isBianhua=!1},handleCancel:function(){this.visible=!1,this.clearForm(),this.$refs.ruleForm.resetFields()},editMember:function(e,a,t,i,o){var l=this;this.role_type=o,this.request(r["a"].workerQuery,{wid:e,group_id:a,source_type:t,tokenName:this.tokenName}).then((function(e){1==t?(l.propsList=e,l.detail.group_id=a,l.is_edit=!0,l.title="【"+l.propsList[1].value+"】查看",l.lookVisiable=!0):(l.detail=e,""!=l.detail.account&&null!=l.detail.account&&0!=l.detail.account.length||(l.detail.account=l.detail.phone),l.uploadFace=e.upload_face,l.detail.group_id=a,l.is_edit=!1,l.title="【"+l.detail.work_name+"】编辑",l.visible=!0)}))},uploadPeopleface:function(){this.showUploadface=!0},handleLookCancel:function(){this.lookVisiable=!1,this.propsList=[]},handleUploadCancel:function(){this.showUploadface=!1}}},c=s,m=(t("e7c7"),t("2877")),u=Object(m["a"])(c,i,o,!1,null,null,null);a["default"]=u.exports},e7c7:function(e,a,t){"use strict";t("1e7a")}}]);