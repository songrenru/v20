(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1933b143"],{"4f2c":function(e,r,o){"use strict";var a={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyGetPackageRoomList:"/community/property_api.PrivilagePackage/getPackageRoomList",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertygetRoomOrderPrice:"/community/property_api.PrivilagePackage/getRoomOrderPrice",propertyCreateRoomOrderNew:"/community/property_api.PrivilagePackage/createRoomOrderNew",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyCreateRoomQrCode:"/community/property_api.PrivilagePackage/createRoomQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel"};r["a"]=a},"5dd3":function(e,r,o){},a763:function(e,r,o){"use strict";o.r(r);var a=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"account-community-config-info-view"},[o("a-row",{attrs:{gutter:16}},[o("a-col",{attrs:{md:24,lg:16}},[o("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[o("a-form-item",{attrs:{label:"启用新版收费管理时间设置"}},[o("a-date-picker",{attrs:{format:"YYYY-MM-DD",allowClear:!1,placeholder:"请选择日期",value:e.moment(e.set.take_effect_time,"YYYY-MM-DD"),"disabled-date":e.disabledDate},on:{change:e.dayOnChange}}),o("div",[e._v(" 若不设置，则还是使用老版收费，新版的收费管理可以添加各类费用设置，但是无法生成费用；如果设置了启用新版收费的时间，到达时间后会直接按照新版的收费规则进行账单生成、收费，老版数据仅做展示使用，无法继续生成费用。")])],1),o("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[o("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.loginBtn}},[e._v(" 确定 ")])],1)],1)],1)],1)],1)},t=[],i=o("4f2c"),m=o("c1df"),n=o.n(m),p={name:"chargeTimeSet",data:function(){return{form:this.$form.createForm(this),set:{take_effect_time:" "},show:!0,dateDayFormat:"YYYY-MM-DD",loginBtn:!1}},mounted:function(){this.chargeTimeInfo()},methods:{moment:n.a,dayOnChange:function(e,r){console.log("date",e),console.log("dateString",r),null==e&&(this.set.take_effect_time="0"),this.set.take_effect_time=r,this.$forceUpdate()},disabledDate:function(e){return e&&e<n()().endOf("day")},handleSubmit:function(e){var r=this;e.preventDefault();var o={};o.take_effect_time=this.set.take_effect_time,this.request(i["a"].setChargeTime,o).then((function(e){console.log("res",e),e&&(r.$message.success("更新成功！"),r.chargeTimeInfo()),r.loginBtn=!1})).catch((function(e){r.loginBtn=!1}))},chargeTimeInfo:function(){var e=this;this.request(i["a"].chargeTimeInfo).then((function(r){e.set=r,console.log(r)}))}}},c=p,y=(o("cd00"),o("2877")),g=Object(y["a"])(c,a,t,!1,null,"33aa3e8e",null);r["default"]=g.exports},cd00:function(e,r,o){"use strict";o("5dd3")}}]);