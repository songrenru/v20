(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e5f1c0","chunk-7662669e"],{2890:function(e,t,r){},"3e59":function(e,t,r){},"4f2c":function(e,t,r){"use strict";var a={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyGetPackageRoomList:"/community/property_api.PrivilagePackage/getPackageRoomList",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertygetRoomOrderPrice:"/community/property_api.PrivilagePackage/getRoomOrderPrice",propertyCreateRoomOrderNew:"/community/property_api.PrivilagePackage/createRoomOrderNew",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyCreateRoomQrCode:"/community/property_api.PrivilagePackage/createRoomQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",chargeWaterType:"/community/property_api.ChargeTime/chargeWaterType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel",propertyConfigSetApi:"/community/property_api.Property/config",passwordChangeApi:"/community/property_api.Property/passwordChange",digitApi:"/community/property_api.Property/digit",saveDigitApi:"/community/property_api.Property/saveDigit",ajaxProvince:"/community/property_api.Property/ajaxProvince",ajaxCity:"/community/property_api.Property/ajaxCity",ajaxArea:"/community/property_api.Property/ajaxArea",saveConfig:"/community/property_api.Property/saveConfig",loginLogList:"/community/property_api.Security/loginLog",loginLogDetail:"/community/property_api.Security/loginLogDetail",commonLog:"/community/property_api.Security/commonLog",commonLogDetail:"/community/property_api.Security/commonLogDetail"};t["a"]=a},6289:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.createModalsss.add()}}},[e._v("添加")])],1),t("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.pagination},on:{change:e.tableChange},scopedSlots:e._u([{key:"status",fn:function(r,a){return t("span",{},[t("div",{class:"开启"===r?"txt-green":"txt-red"},[e._v(" "+e._s(r)+" ")])])}},{key:"action",fn:function(r,a){return t("span",{},[t("a",{on:{click:function(t){return e.$refs.createModalsss.edit(a.id)}}},[e._v("编辑")])])}},{key:"name",fn:function(t){return[e._v(" "+e._s(t.first)+" "+e._s(t.last)+" ")]}}])})],1),t("edit-number",{ref:"createModalsss",attrs:{height:800,width:1500},on:{ok:e.handleOks}})],1)},o=[],i=r("4f2c"),n=r("6fff"),m=[{title:"科目名称",dataIndex:"charge_number_name",key:"charge_number_name"},{title:"收费类别",dataIndex:"charge_type_name",key:"charge_type_name"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],p={name:"chargeNumberList11",components:{editNumber:n["default"]},data:function(){return{list:[],pagination:{pageSize:10,total:10},search:{page:1},page:1,search_data:[],id:0,columns:m}},mounted:function(){this.getChargeNumberList()},methods:{getChargeNumberList:function(){var e=this;this.request(i["a"].chargeNumberList,{page:this.page}).then((function(t){console.log("res",t),e.list=t.list,e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10}))},tableChange:function(e){e.current&&e.current>0&&(this.page=e.current,this.getChargeNumberList())},cancel:function(){},handleOks:function(){this.getChargeNumberList()}}},c=p,s=(r("f874"),r("0b56")),u=Object(s["a"])(c,a,o,!1,null,"19522550",null);t["default"]=u.exports},"6fff":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"所属收费类别",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-select",{staticStyle:{width:"348px"},attrs:{placeholder:"请选择收费类别"},on:{change:e.handleChange},model:{value:e.number.charge_type,callback:function(t){e.$set(e.number,"charge_type",t)},expression:"number.charge_type"}},e._l(e.charge_type_list,(function(r,a){return t("a-select-option",{key:a,attrs:{value:r.key}},[e._v(" "+e._s(r.value)+" ")])})),1)],1),t("a-col",{attrs:{span:6}})],1),e.water_type_status?t("a-form-item",{attrs:{label:"水表类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-radio-group",{model:{value:e.number.water_type,callback:function(t){e.$set(e.number,"water_type",t)},expression:"number.water_type"}},e._l(e.water_type_arr,(function(r,a){return t("a-radio",{key:a,staticStyle:{width:"78px"},attrs:{value:r.value}},[e._v(" "+e._s(r.title)+" ")])})),1)],1),t("a-col",{attrs:{span:6}})],1):e._e(),t("a-form-item",{attrs:{label:"收费科目名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-input",{attrs:{placeholder:"请输入收费科目名称"},model:{value:e.number.charge_number_name,callback:function(t){e.$set(e.number,"charge_number_name",t)},expression:"number.charge_number_name"}})],1),t("a-col",{attrs:{span:6}})],1),t("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-radio-group",{model:{value:e.number.status,callback:function(t){e.$set(e.number,"status",t)},expression:"number.status"}},[t("a-radio",{attrs:{value:1}},[e._v(" 正常 ")]),t("a-radio",{attrs:{value:2}},[e._v(" 关闭 ")])],1)],1),t("a-col",{attrs:{span:6}})],1)],1)],1)],1)},o=[],i=r("4f2c"),n={data:function(){return this.dateFormat="YYYY-MM-DD",{title:"领用租借",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},charge_type_list:[],defaultChecked:!0,visible:!1,confirmLoading:!1,form:this.$form.createForm(this),number:{id:0,charge_type:"",charge_number_name:"",status:1,water_type:0},id:0,water_type_status:!1,water_type_arr:[]}},methods:{handleChange:function(e){var t=this;"water"==e?this.request(i["a"].chargeWaterType).then((function(e){t.water_type_status=e.status,t.water_type_arr=e.data})):(this.water_type_status=!1,this.water_type_arr=[])},add:function(){this.title="添加科目",this.visible=!0,this.number={id:0,charge_number_name:"",status:1,water_type:0},this.checkedKeys=[],this.charge_type_list=[],this.id=0,this.water_type_status=!1,this.water_type_arr=[],this.getChargeType()},edit:function(e){this.visible=!0,this.id=e,this.charge_type_list=[],this.getChargeNumberInfo(),this.getChargeType(),console.log(this.id),this.id>0?this.title="编辑科目":this.title="添加科目"},handleChangenumber:function(){},getChargeNumberInfo:function(){var e=this;this.request(i["a"].chargeNumberInfo,{id:this.id}).then((function(t){e.number=t,console.log("number",e.number),e.handleChange(t.charge_type)}))},getChargeType:function(){var e=this;this.request(i["a"].getChargeType).then((function(t){e.charge_type_list=t,console.log("charge_type_list",e.charge_type_list)}))},handleSubmit:function(){var e=this;this.confirmLoading=!0,this.id>0?(this.number.id=this.id,this.request(i["a"].editChargeNumber,this.number).then((function(t){t?e.$message.success("编辑成功"):e.$message.success("编辑失败"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)})).catch((function(t){e.confirmLoading=!1}))):this.request(i["a"].addChargeNumber,this.number).then((function(t){t?e.$message.success("添加成功"):e.$message.success("添加失败"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)})).catch((function(t){e.confirmLoading=!1}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)}}},m=n,p=(r("e98f"),r("0b56")),c=Object(p["a"])(m,a,o,!1,null,"595ef984",null);t["default"]=c.exports},e98f:function(e,t,r){"use strict";r("2890")},f874:function(e,t,r){"use strict";r("3e59")}}]);