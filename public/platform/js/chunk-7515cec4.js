(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7515cec4","chunk-728a276b"],{"4f2c":function(e,t,a){"use strict";var o={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyGetPackageRoomList:"/community/property_api.PrivilagePackage/getPackageRoomList",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertygetRoomOrderPrice:"/community/property_api.PrivilagePackage/getRoomOrderPrice",propertyCreateRoomOrderNew:"/community/property_api.PrivilagePackage/createRoomOrderNew",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyCreateRoomQrCode:"/community/property_api.PrivilagePackage/createRoomQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",chargeWaterType:"/community/property_api.ChargeTime/chargeWaterType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel",propertyConfigSetApi:"/community/property_api.Property/config",passwordChangeApi:"/community/property_api.Property/passwordChange",digitApi:"/community/property_api.Property/digit",saveDigitApi:"/community/property_api.Property/saveDigit",ajaxProvince:"/community/property_api.Property/ajaxProvince",ajaxCity:"/community/property_api.Property/ajaxCity",ajaxArea:"/community/property_api.Property/ajaxArea",saveConfig:"/community/property_api.Property/saveConfig",loginLogList:"/community/property_api.Security/loginLog",loginLogDetail:"/community/property_api.Security/loginLogDetail",commonLog:"/community/property_api.Security/commonLog",commonLogDetail:"/community/property_api.Security/commonLogDetail"};t["a"]=o},"7e32":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{width:1e3,visible:e.visible},on:{close:e.handleSubCancel}},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"alert"}}),e._v(" 详细日志 ")],1),a("div",[a("p",[e._v("注意：这套识别程序的数据库是免费IP数据库、IP离线地址库，因此有误差、获取不到一些数据在所难免。仅供参考作用。")])]),a("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"main"},[a("a-descriptions",{attrs:{size:"small",column:2}},[a("a-descriptions-item",{attrs:{label:"操作时间"}},[e._v(" "+e._s(e.logExtend.add_time)+" ")]),a("a-descriptions-item",{attrs:{label:"操作来源"}},[e._v(" "+e._s(e.logExtend.country)+" ")]),a("a-descriptions-item",{attrs:{label:"操作账号"}},[e._v(" "+e._s(e.logExtend.account)+" ")]),a("a-descriptions-item",{attrs:{label:"账号名称"}},[e._v(" "+e._s(e.logExtend.realname)+" ")]),a("a-descriptions-item",{attrs:{label:"省份"}},[e._v(" "+e._s(e.logExtend.province)+" ")]),a("a-descriptions-item",{attrs:{label:"城市"}},[e._v(" "+e._s(e.logExtend.city)+" ")]),a("a-descriptions-item",{attrs:{label:"浏览器"}},[e._v(" "+e._s(e.logExtend.browser_name)+" ")]),a("a-descriptions-item",{attrs:{label:"浏览器版本"}},[e._v(" "+e._s(e.logExtend.browser_version)+" ")]),a("a-descriptions-item",{attrs:{label:"操作系统"}},[e._v(" "+e._s(e.logExtend.os)+" ")]),a("a-descriptions-item",{attrs:{label:"操作系统版本"}},[e._v(" "+e._s(e.logExtend.os_version)+" ")]),a("a-descriptions-item",{attrs:{label:"ISP"}},[e._v(" "+e._s(e.logExtend.isp)+" ")]),a("a-descriptions-item",{attrs:{label:"model"}},[e._v(" "+e._s(e.logExtend.model)+" ")]),a("a-descriptions-item",{attrs:{label:"制造商"}},[e._v(" "+e._s(e.logExtend.manufacturer)+" ")]),a("a-descriptions-item",{attrs:{label:"备注"}},[e._v(" "+e._s(e.logExtend.reson)+" ")])],1)],1)])])],1)],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.handleSubCancel}},[e._v("关闭页面")])],1)],1)])},r=[],i=(a("a9e3"),a("4f2c")),n={name:"propertyLoginLogDetail",props:{visible:{type:Boolean,default:!1},log_fid:{type:Number,default:0}},watch:{visible:{handler:function(e){this.getDetailInfo()}}},data:function(){return{logExtend:[]}},methods:{countChange:function(){},getDetailInfo:function(){var e=this;e.log_fid&&e.request(i["a"].loginLogDetail,{log_fid:e.log_fid}).then((function(t){e.logExtend=t.logInfo}))},handleSubCancel:function(e){this.$emit("closeDrawer",!1)},handleCodeCancel:function(){}}},p=n,c=(a("99553"),a("0c7c")),m=Object(c["a"])(p,o,r,!1,null,"8f310868",null);t["default"]=m.exports},"976b":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.pagination,rowKey:"id"},on:{change:e.tableChange},scopedSlots:e._u([{key:"action",fn:function(t,o){return a("span",{},[a("a",{on:{click:function(t){return e.detail(o.id)}}},[e._v("变更详细")])])}}])}),a("property-login-log-detail",{attrs:{log_fid:e.log_fid,visible:e.drawerVisible},on:{closeDrawer:e.closeDrawer}})],1)],1)},r=[],i=a("4f2c"),n=a("7e32"),p=[{title:"操作时间",dataIndex:"add_time",key:"add_time"},{title:"操作账号",dataIndex:"account",key:"account"},{title:"账号名称",dataIndex:"realname",key:"realname"},{title:"登录IP",dataIndex:"ip",key:"ip"},{title:"登录来源",dataIndex:"country",key:"country"},{title:"登录方式",dataIndex:"login_type",key:"login_type"},{title:"操作系统",dataIndex:"os",key:"os"},{title:"操作系统版本",dataIndex:"os_version",key:"os_version"},{title:"浏览器",dataIndex:"browser_name",key:"browser_name"},,{title:"浏览器版本",dataIndex:"browser_version",key:"browser_version"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],c={name:"propertyLoginLog",components:{propertyLoginLogDetail:n["default"]},data:function(){var e=this;return{list:[],drawerVisible:!1,sortedInfo:null,pagination:{current:1,pageSize:20,total:20,showSizeChanger:!1,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},search:{page:1},page:1,search_data:[],id:0,columns:p,log_fid:0}},mounted:function(){this.getLogDataList()},created:function(){},methods:{getLogDataList:function(){var e=this;this.page=this.pagination.current,this.request(i["a"].loginLogList,{page:this.page,parent_id:0}).then((function(t){console.log("res",t),e.list=t.list,e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10}))},tableChange:function(e){e.current&&e.current>0&&(this.pagination.current=e.current,this.getLogDataList())},onTableChange:function(e,t){this.pagination.current=e,this.pagination.pageSize=t},cancel:function(){},handleOks:function(){},closeCharge:function(){this.showCharge=!1},detail:function(e){this.drawerVisible=!0,this.log_fid=e},closeDrawer:function(e){this.log_fid=0,this.drawerVisible=!1}}},m=c,s=a("0c7c"),l=Object(s["a"])(m,o,r,!1,null,"af47b178",null);t["default"]=l.exports},99553:function(e,t,a){"use strict";a("b5de")},b5de:function(e,t,a){}}]);