(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99a7390c"],{"4f2c":function(e,o,r){"use strict";var t={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel"};o["a"]=t},a5bd:function(e,o,r){"use strict";r.r(o);var t=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[r("a-collapse",{attrs:{accordion:""}},[r("a-collapse-panel",{key:"1",attrs:{header:"相关说明"}},[r("div",{staticClass:"count-fee-list-tip-box"},[r("a-alert",{attrs:{message:"",type:"info"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("div",[e._v("以下展示的是物业下对应小区所有相关账单统计（不包含作废的账单）；")]),r("div",[e._v("1、【应收费用】：未支付的账单应收总金额统计（不包含作废的账单）；")]),r("div",[e._v("2、【已收费用】：已经支付的账单实际用户支付金额统计（不包含已经退款的，不包含作废的账单）；")]),r("div",[e._v("3、【查看详情】：点击可直接跳转对应小区查看应收账单相关信息；")])])])],1)])],1),r("a-card",{attrs:{bordered:!1}},[r("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(o,t){return r("span",{},[r("a",{on:{click:function(o){return e.goTo(t.village_id)}}},[e._v("查看详情")])])}}])})],1)],1)},a=[],i=r("4f2c"),m=(r("b8f9"),r("8bbf")),n=r.n(m),c=r("ca00"),p=[{title:"小区名称",dataIndex:"village_name",key:"village_name"},{title:"应收费用",dataIndex:"total_money",key:"total_money"},{title:"已收费用",dataIndex:"pay_money",key:"pay_money"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],y={name:"countFeeList",components:{},data:function(){return{list:[],id:0,columns:p}},mounted:function(){this.getCountFeeList()},methods:{getCountFeeList:function(){var e=this;this.request(i["a"].getCountFeeList).then((function(o){console.log("res",o),e.list=o}))},goTo:function(e){this.request(i["a"].villageLogin,{village_id:e}).then((function(e){console.log("res",e),""!=e.ticket&&(console.log("ticket",e.ticket),n.a.ls.set("village_access_token",e.ticket,null),Object(c["m"])("village_access_token",e.ticket,null),window.open(location.protocol+"//"+location.host+"/v20/public/platform/#/village/village.charge.cashier/receivableOrderList"))}))}}},u=y,l=(r("d1f6"),r("2877")),g=Object(l["a"])(u,t,a,!1,null,"17eb3a40",null);o["default"]=g.exports},b880:function(e,o,r){},d1f6:function(e,o,r){"use strict";r("b880")}}]);