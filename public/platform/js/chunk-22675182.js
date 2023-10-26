(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22675182"],{3971:function(e,o,r){"use strict";r.r(o);var a=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-col",{attrs:{span:18}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.sort",{initialValue:e.post.sort}],expression:"['post.sort', {initialValue:post.sort}]"}],attrs:{maxLength:10,placeholder:"0，越大越靠前"}})],1),r("a-col",{attrs:{span:6}})],1),r("a-form-item",{attrs:{label:"类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-col",{attrs:{span:18}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.group_type",{initialValue:e.post.group_type,rules:[{required:!0,message:e.L("请选择类型！")}]}],expression:"['post.group_type',{ initialValue: post.group_type, rules: [{ required: true, message: L('请选择类型！') }] }]"}],staticStyle:{width:"345px"},attrs:{placeholder:"请选择类型"},on:{change:e.handleGroupType}},e._l(e.group_type,(function(o,a){return r("a-select-option",{key:a,attrs:{value:o.key}},[e._v(" "+e._s(o.value)+" ")])})),1)],1),r("a-col",{attrs:{span:6}})],1),e.is_show_village?r("a-form-item",{attrs:{label:"选择小区",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-col",{attrs:{span:18}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.village_id",{initialValue:e.post.village_id,rules:[{required:!0,message:e.L("请选择小区！")}]}],expression:"['post.village_id',{ initialValue: post.village_id, rules: [{ required: true, message: L('请选择小区！') }] }]"}],staticStyle:{width:"345px"},attrs:{placeholder:"请选择小区"},on:{change:e.handleVillage}},e._l(e.village_all,(function(o,a){return r("a-select-option",{key:a,attrs:{value:o.village_id}},[e._v(" "+e._s(o.village_name)+" ")])})),1)],1),r("a-col",{attrs:{span:6}})],1):e._e(),e.is_show?r("a-form-item",{attrs:{label:"部门类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-col",{attrs:{span:18}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.department_type",{initialValue:e.post.department_type,rules:[{required:!0,message:e.L("请选择部门类型！")}]}],expression:"['post.department_type',{ initialValue: post.department_type, rules: [{ required: true, message: L('请选择部门类型！') }] }]"}],staticStyle:{width:"345px"},attrs:{placeholder:"请选择部门类型"},on:{change:e.handleDepartment}},e._l(e.department_type,(function(o,a){return r("a-select-option",{key:a,attrs:{value:o.key}},[e._v(" "+e._s(o.value)+" ")])})),1)],1),r("a-col",{attrs:{span:6}})],1):e._e(),e.is_show?r("a-form-item",{attrs:{label:"部门名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-col",{attrs:{span:18}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.name",{initialValue:e.post.name,rules:[{required:!0,message:"请输入部门名称，长度最多8位！"}]}],expression:"['post.name', {initialValue:post.name,rules: [{required: true, message: '请输入部门名称，长度最多8位！'}]}]"}],attrs:{placeholder:"请输入部门名称，长度最多8位",maxLength:8}})],1),r("a-col",{attrs:{span:6}})],1):e._e()],1)],1)],1)},t=[],i=r("47c8"),n=r("4f2c"),m=r("ca00"),p={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),post:{id:0,fid:0,group_type:void 0,department_type:void 0,sort:0,name:"",village_id:void 0},id:0,fid:0,group_type:[],department_type:[],village_all:[],is_show:!1,is_show_village:!1,tokenName:"",sysName:""}},mounted:function(){var e=Object(m["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{add:function(e,o){this.title="【"+o+"】添加子组织",this.visible=!0,this.is_show_village=!1,this.post={id:0,fid:e,group_type:void 0,department_type:void 0,sort:0,name:""},this.getGroupParam(e)},getGroupParam:function(e){var o=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.request(n["a"].frameworkGroupParam,{group_id:e,type:r,tokenName:this.tokenName}).then((function(e){o.group_type=e.group_type,o.department_type=e.department_type,e.is_show&&(o.post.group_type=e.key),o.is_show=e.is_show}))},handleGroupType:function(e){var o=this;this.request(n["a"].frameworkPropertyVillage,{type:e,tokenName:this.tokenName}).then((function(e){1==e.status?(o.village_all=e.data,o.is_show=!1,o.is_show_village=!0):(o.village_all=[],o.is_show=!0,o.is_show_village=!1)}))},handleDepartment:function(e){},handleVillage:function(e){},edit:function(e,o){this.title="【"+o+"】编辑子组织",this.visible=!0,this.is_show_village=!1,this.post={id:e,fid:e,group_type:void 0,department_type:void 0,sort:0,name:""},this.getGroupParam(e,1),this.getEditInfo()},getEditInfo:function(){var e=this;this.request(n["a"].frameworkOrganizationQuery,{id:this.post.id,tokenName:this.tokenName}).then((function(o){e.post=o.data}))},handleSubmit:function(){var e=this,o=this.form.validateFields;this.confirmLoading=!0,o((function(o,r){if(o)e.confirmLoading=!1;else{r.post.fid=e.post.fid;var a=i["a"].organizationAdd;e.post.id>0&&(r.post.id=e.post.id,a=i["a"].organizationSub),r.post.tokenName=e.tokenName,e.request(a,r.post).then((function(o){e.post.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",r)})).catch((function(o){e.confirmLoading=!1}))}}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)}}},s=p,l=(r("4ee5"),r("2877")),c=Object(l["a"])(s,a,t,!1,null,null,null);o["default"]=c.exports},"47c8":function(e,o,r){"use strict";var a={config:"/community/login.login/config",login:"/community/login.login/check",sendCode:"/community/login.PropertyGuide/sendCode",addInformation:"/community/login.PropertyGuide/addInformation",propertyGuide:"/community/login.PropertyGuide/propertyGuide",completePropertyGuide:"/community/login.PropertyGuide/completePropertyGuide",workerAdd:"/community/common.Framework/workerAdd",workerSub:"/community/common.Framework/workerSub",workerDel:"/community/common.Framework/workerDel",workerQuery:"/community/common.Framework/workerQuery",organizationDel:"/community/common.Framework/organizationDel",organizationAdd:"/community/common.Framework/organizationAdd",organizationSub:"/community/common.Framework/organizationSub",organizationSynQw:"/community/common.Framework/organizationSynQw"};o["a"]=a},"4ee5":function(e,o,r){"use strict";r("ac2d")},"4f2c":function(e,o,r){"use strict";var a={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyGetPackageRoomList:"/community/property_api.PrivilagePackage/getPackageRoomList",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertygetRoomOrderPrice:"/community/property_api.PrivilagePackage/getRoomOrderPrice",propertyCreateRoomOrderNew:"/community/property_api.PrivilagePackage/createRoomOrderNew",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyCreateRoomQrCode:"/community/property_api.PrivilagePackage/createRoomQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel",propertyConfigSetApi:"/community/property_api.Property/config",passwordChangeApi:"/community/property_api.Property/passwordChange",digitApi:"/community/property_api.Property/digit",saveDigitApi:"/community/property_api.Property/saveDigit",ajaxProvince:"/community/property_api.Property/ajaxProvince",ajaxCity:"/community/property_api.Property/ajaxCity",ajaxArea:"/community/property_api.Property/ajaxArea",saveConfig:"/community/property_api.Property/saveConfig"};o["a"]=a},ac2d:function(e,o,r){}}]);