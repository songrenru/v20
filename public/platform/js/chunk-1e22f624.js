(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e22f624"],{"32dd":function(e,t,o){"use strict";o("9453")},3971:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[o("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[o("a-form",{attrs:{form:e.form}},[o("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.sort",{initialValue:e.post.sort}],expression:"['post.sort', {initialValue:post.sort}]"}],attrs:{maxLength:10,placeholder:"0，越大越靠前"}})],1),o("a-col",{attrs:{span:6}})],1),o("a-form-item",{attrs:{label:"类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.group_type",{initialValue:e.post.group_type,rules:[{required:!0,message:e.L("请选择类型！")}]}],expression:"['post.group_type',{ initialValue: post.group_type, rules: [{ required: true, message: L('请选择类型！') }] }]"}],staticStyle:{width:"345px"},attrs:{placeholder:"请选择类型"},on:{change:e.handleGroupType}},e._l(e.group_type,(function(t,r){return o("a-select-option",{key:r,attrs:{value:t.key}},[e._v(" "+e._s(t.value)+" ")])})),1)],1),o("a-col",{attrs:{span:6}})],1),e.is_show_village?o("a-form-item",{attrs:{label:"选择小区",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.village_id",{initialValue:e.post.village_id,rules:[{required:!0,message:e.L("请选择小区！")}]}],expression:"['post.village_id',{ initialValue: post.village_id, rules: [{ required: true, message: L('请选择小区！') }] }]"}],staticStyle:{width:"345px"},attrs:{placeholder:"请选择小区"},on:{change:e.handleVillage}},e._l(e.village_all,(function(t,r){return o("a-select-option",{key:r,attrs:{value:t.village_id}},[e._v(" "+e._s(t.village_name)+" ")])})),1)],1),o("a-col",{attrs:{span:6}})],1):e._e(),e.is_show?o("a-form-item",{attrs:{label:"部门类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.department_type",{initialValue:e.post.department_type,rules:[{required:!0,message:e.L("请选择部门类型！")}]}],expression:"['post.department_type',{ initialValue: post.department_type, rules: [{ required: true, message: L('请选择部门类型！') }] }]"}],staticStyle:{width:"345px"},attrs:{placeholder:"请选择部门类型"},on:{change:e.handleDepartment}},e._l(e.department_type,(function(t,r){return o("a-select-option",{key:r,attrs:{value:t.key}},[e._v(" "+e._s(t.value)+" ")])})),1)],1),o("a-col",{attrs:{span:6}})],1):e._e(),e.is_show?o("a-form-item",{attrs:{label:"部门名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.name",{initialValue:e.post.name,rules:[{required:!0,message:"请输入部门名称，长度最多8位！"}]}],expression:"['post.name', {initialValue:post.name,rules: [{required: true, message: '请输入部门名称，长度最多8位！'}]}]"}],attrs:{placeholder:"请输入部门名称，长度最多8位",maxLength:8}})],1),o("a-col",{attrs:{span:6}})],1):e._e(),e.post.qy_txt?o("a-form-item",{attrs:{label:"企业微信同步状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[e._v(" "+e._s(e.post.qy_txt)+" ")]),o("a-col",{attrs:{span:6}})],1):e._e(),e.post.qy_reasons?o("a-form-item",{attrs:{label:"企微同步失败原因",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[e._v(" "+e._s(e.post.qy_reasons)+" ")]),o("a-col",{attrs:{span:6}})],1):e._e(),e.post.qy_time?o("a-form-item",{attrs:{label:"企微同步时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:18}},[e._v(" "+e._s(e.post.qy_time)+" ")]),o("a-col",{attrs:{span:6}})],1):e._e(),e.qy_id?o("a-form-item",{attrs:{label:"企微部门ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-col",{attrs:{span:5}},[e.editTrue?e._e():o("span",[e._v(e._s(e.post.qy_id))]),e.editTrue?o("a-input",{attrs:{maxLength:10},model:{value:e.post.qy_id,callback:function(t){e.$set(e.post,"qy_id",t)},expression:"post.qy_id"}}):e._e(),e.post.editQy&&!e.editTrue?o("span",{staticClass:"icon-wrap",staticStyle:{"margin-left":"10px"}},[o("a",{on:{click:function(t){return e.allowEidt(e.post.editQy)}}},[o("a-icon",{attrs:{type:"form"}})],1)]):e._e()],1),o("a-col",{attrs:{span:19}},[o("span",{staticStyle:{"font-size":"12px"}},[e._v("  "),o("span",{staticStyle:{color:"red"}},[e._v("注意")]),e._v("：对应授权企微中【通讯录】中对应部门【部门ID】")])])],1):e._e()],1)],1)],1)},a=[],i=o("47c8"),p=o("4f2c"),n=o("ca00"),m={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),post:{id:0,fid:0,group_type:void 0,department_type:void 0,sort:0,name:"",village_id:void 0,editQy:!1},qy_id:"",id:0,fid:0,group_type:[],department_type:[],village_all:[],is_show:!1,is_show_village:!1,tokenName:"",sysName:"",editTrue:!1}},mounted:function(){var e=Object(n["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{allowEidt:function(e){if(e){var t=this;this.$confirm({title:"是否确认修改,如果相关组织已有企微数据请谨慎修改（可能会导致无法正常使用）?",okType:"danger",cancelText:"取消",okText:"确定",onOk:function(){"暂无"==t.post.qy_id&&(t.post.qy_id=""),t.editTrue=!0}})}else this.editTrue=!1},add:function(e,t){this.title="【"+t+"】添加子组织",this.visible=!0,this.is_show_village=!1,this.editTrue=!1,this.post={id:0,fid:e,group_type:void 0,department_type:void 0,sort:0,name:"",editQy:!1},this.getGroupParam(e)},getGroupParam:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.request(p["a"].frameworkGroupParam,{group_id:e,type:o,tokenName:this.tokenName}).then((function(e){t.group_type=e.group_type,t.department_type=e.department_type,e.is_show&&(t.post.group_type=e.key),t.is_show=e.is_show}))},handleGroupType:function(e){var t=this;this.request(p["a"].frameworkPropertyVillage,{type:e,tokenName:this.tokenName}).then((function(e){1==e.status?(t.village_all=e.data,t.is_show=!1,t.is_show_village=!0):(t.village_all=[],t.is_show=!0,t.is_show_village=!1)}))},handleDepartment:function(e){},handleVillage:function(e){},edit:function(e,t){this.title="【"+t+"】编辑子组织",this.visible=!0,this.is_show_village=!1,this.editTrue=!1,this.post={id:e,fid:e,group_type:void 0,department_type:void 0,sort:0,name:"",editQy:!1},this.getGroupParam(e,1),this.getEditInfo()},getEditInfo:function(){var e=this;this.request(p["a"].frameworkOrganizationQuery,{id:this.post.id,tokenName:this.tokenName}).then((function(t){e.post=t.data,e.qy_id=t.data.qy_id}))},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,o){if(t)e.confirmLoading=!1;else{o.post.fid=e.post.fid;var r=i["a"].organizationAdd;e.post.id>0&&(o.post.id=e.post.id,r=i["a"].organizationSub),e.post.qy_id&&(o.post.qy_id=e.post.qy_id),o.post.tokenName=e.tokenName,e.request(r,o.post).then((function(t){e.post.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",o)})).catch((function(t){e.confirmLoading=!1}))}}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)}}},s=m,l=(o("32dd"),o("0c7c")),c=Object(l["a"])(s,r,a,!1,null,"f44ec0fa",null);t["default"]=c.exports},"47c8":function(e,t,o){"use strict";var r={config:"/community/login.login/config",login:"/community/login.login/check",sendCode:"/community/login.PropertyGuide/sendCode",addInformation:"/community/login.PropertyGuide/addInformation",propertyGuide:"/community/login.PropertyGuide/propertyGuide",completePropertyGuide:"/community/login.PropertyGuide/completePropertyGuide",workerAdd:"/community/common.Framework/workerAdd",workerSub:"/community/common.Framework/workerSub",workerDel:"/community/common.Framework/workerDel",workerQuery:"/community/common.Framework/workerQuery",organizationDel:"/community/common.Framework/organizationDel",organizationAdd:"/community/common.Framework/organizationAdd",organizationSub:"/community/common.Framework/organizationSub",organizationSynQw:"/community/common.Framework/organizationSynQw"};t["a"]=r},"4f2c":function(e,t,o){"use strict";var r={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyGetPackageRoomList:"/community/property_api.PrivilagePackage/getPackageRoomList",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertygetRoomOrderPrice:"/community/property_api.PrivilagePackage/getRoomOrderPrice",propertyCreateRoomOrderNew:"/community/property_api.PrivilagePackage/createRoomOrderNew",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyCreateRoomQrCode:"/community/property_api.PrivilagePackage/createRoomQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",chargeWaterType:"/community/property_api.ChargeTime/chargeWaterType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel",propertyConfigSetApi:"/community/property_api.Property/config",passwordChangeApi:"/community/property_api.Property/passwordChange",digitApi:"/community/property_api.Property/digit",saveDigitApi:"/community/property_api.Property/saveDigit",ajaxProvince:"/community/property_api.Property/ajaxProvince",ajaxCity:"/community/property_api.Property/ajaxCity",ajaxArea:"/community/property_api.Property/ajaxArea",saveConfig:"/community/property_api.Property/saveConfig",loginLogList:"/community/property_api.Security/loginLog",loginLogDetail:"/community/property_api.Security/loginLogDetail",commonLog:"/community/property_api.Security/commonLog",commonLogDetail:"/community/property_api.Security/commonLogDetail"};t["a"]=r},9453:function(e,t,o){}}]);