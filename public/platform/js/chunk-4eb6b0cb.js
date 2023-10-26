(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eb6b0cb"],{"1d71":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"paramiter_set"},[t("a-alert",{attrs:{message:"提示信息",type:"info"}},[t("template",{slot:"description"},[t("div",{staticClass:"desc_item"},[e._v("1、四舍五入：在设置保留的小数位基础上进行四舍五入的方法统计费用。")]),t("div",{staticClass:"desc_item"},[e._v("2、全舍：保留了设置的小数位后，其余的小数全舍。")]),t("div",{staticClass:"desc_item"},[e._v("3、当后台设置保留四位小数、三位小数、两位小数时，用户端，只展示两个数;当后台设置保留一位小数时，按照设置的值展示一个数")]),t("div",{staticClass:"desc_item"},[e._v("4、预缴账单支付30分钟不缴费自动作废，和始终不作废两种模式")])])],2),t("a-form-model",{ref:"ruleForm",attrs:{model:e.parameterSetForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-form-model-item",{attrs:{label:"保留方式",prop:"type"}},[t("a-radio-group",{model:{value:e.parameterSetForm.type,callback:function(r){e.$set(e.parameterSetForm,"type",r)},expression:"parameterSetForm.type"}},[t("a-radio",{attrs:{value:1}},[e._v("四舍五入")]),t("a-radio",{attrs:{value:2}},[e._v("全舍")])],1)],1),t("a-form-model-item",{attrs:{label:"其他小数位数",prop:"other_digit",extra:"最多保留四位"}},[t("a-input-number",{staticClass:"form_width",attrs:{min:0,max:4},model:{value:e.parameterSetForm.other_digit,callback:function(r){e.$set(e.parameterSetForm,"other_digit",r)},expression:"parameterSetForm.other_digit"}})],1),t("a-form-model-item",{attrs:{label:"水电燃小数位数",prop:"meter_digit",extra:"最多保留四位"}},[t("a-input-number",{staticClass:"form_width",attrs:{min:0,max:4},model:{value:e.parameterSetForm.meter_digit,callback:function(r){e.$set(e.parameterSetForm,"meter_digit",r)},expression:"parameterSetForm.meter_digit"}})],1),t("a-form-model-item",{attrs:{label:"预缴账单作废",prop:"deleteBillMin"}},[t("a-radio-group",{model:{value:e.parameterSetForm.deleteBillMin,callback:function(r){e.$set(e.parameterSetForm,"deleteBillMin",r)},expression:"parameterSetForm.deleteBillMin"}},[t("a-radio",{attrs:{value:0}},[e._v("不作废")]),t("a-radio",{attrs:{value:30}},[e._v("30分钟作废")])],1)],1),t("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:2}}},[t("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),t("a-button",{staticStyle:{"margin-left":"10px"},on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1)},o=[],i=t("4f2c"),m={name:"parameterSet",data:function(){return{labelCol:{span:2},wrapperCol:{span:14},rules:{type:[{required:!0,message:"请选择保留方式",trigger:"blur"}],other_digit:[{required:!0,message:"请输入其他小数位数",trigger:"blur"}],meter_digit:[{required:!0,message:"请输入水电燃小数位数",trigger:"blur"}],deleteBillMin:[{required:!0,message:"请选择预缴账单作废",trigger:"blur"}]},parameterSetForm:{}}},mounted:function(){this.getParameterConfig()},methods:{getParameterConfig:function(){var e=this;this.request(i["a"].digitApi).then((function(r){e.parameterSetForm=r,0!=r.deleteBillMin?r.deleteBillMin||(e.parameterSetForm.deleteBillMin=30):e.parameterSetForm.deleteBillMin=0}))},onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(r){r&&e.request(i["a"].saveDigitApi,e.parameterSetForm).then((function(r){e.$message.success("保存成功！"),e.getParameterConfig()}))}))},resetForm:function(){this.parameterSetForm={},this.$refs.ruleForm.resetFields()}}},p=m,n=(t("ead2"),t("2877")),c=Object(n["a"])(p,a,o,!1,null,"48a61962",null);r["default"]=c.exports},"4f2c":function(e,r,t){"use strict";var a={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyGetPackageRoomList:"/community/property_api.PrivilagePackage/getPackageRoomList",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertygetRoomOrderPrice:"/community/property_api.PrivilagePackage/getRoomOrderPrice",propertyCreateRoomOrderNew:"/community/property_api.PrivilagePackage/createRoomOrderNew",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyCreateRoomQrCode:"/community/property_api.PrivilagePackage/createRoomQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",chargeWaterType:"/community/property_api.ChargeTime/chargeWaterType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel",propertyConfigSetApi:"/community/property_api.Property/config",passwordChangeApi:"/community/property_api.Property/passwordChange",digitApi:"/community/property_api.Property/digit",saveDigitApi:"/community/property_api.Property/saveDigit",ajaxProvince:"/community/property_api.Property/ajaxProvince",ajaxCity:"/community/property_api.Property/ajaxCity",ajaxArea:"/community/property_api.Property/ajaxArea",saveConfig:"/community/property_api.Property/saveConfig",loginLogList:"/community/property_api.Security/loginLog",loginLogDetail:"/community/property_api.Security/loginLogDetail",commonLog:"/community/property_api.Security/commonLog",commonLogDetail:"/community/property_api.Security/commonLogDetail"};r["a"]=a},c084:function(e,r,t){},ead2:function(e,r,t){"use strict";t("c084")}}]);