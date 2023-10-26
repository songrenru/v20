(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3481eeb6","chunk-35814db0","chunk-5f8a6476","chunk-2d22db1e","chunk-2d0c0303","chunk-2d22c16e","chunk-2d212fb1","chunk-2d0e4d18","chunk-2d0c9ae7","chunk-2d230c77"],{"16d1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e.pageLoading?a("div",{staticClass:"loading",staticStyle:{width:"100%",height:"500px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[a("a-icon",{staticStyle:{"font-size":"26px"},attrs:{type:"loading"}}),a("div",{staticStyle:{color:"#666666","font-size":"20px","margin-top":"10px"}},[e._v("加载中...")])],1):a("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,model:e.roomForm,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"form_title",staticStyle:{"font-weight":"600"}},[e._v("基本信息")]),a("div",{staticClass:"form_con",staticStyle:{"margin-top":"10px"}},[a("a-form-model-item",{staticClass:"form_item",attrs:{label:"物业编号",extra:"由楼栋编号、单元编号、楼层编号和房屋编号依次拼接而成"}},[a("a-input",{attrs:{placeholder:"请输入物业编号"},model:{value:e.roomForm.property_number,callback:function(t){e.$set(e.roomForm,"property_number",t)},expression:"roomForm.property_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"楼栋/单元/楼层"}},[a("a-input",{attrs:{placeholder:"请输入楼栋/单元/楼层",disabled:!0},model:{value:e.roomForm.address,callback:function(t){e.$set(e.roomForm,"address",t)},expression:"roomForm.address"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间号"}},[a("a-input",{attrs:{placeholder:"请输入房间号"},model:{value:e.roomForm.room,callback:function(t){e.$set(e.roomForm,"room",t)},expression:"roomForm.room"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{extra:"设置房间时间范围，设置后物业只能收取合同时间内收费项目，未到合同开始时间或结束时间不能收费；未设置物业服务小区时间范围，则不影响。"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("a-tooltip",{attrs:{title:"设置房间时间范围，设置后物业只能收取合同时间内收费项目，未到合同开始时间或结束时间不能收费；未设置物业服务小区时间范围，则不影响。"}},[a("a-icon",{attrs:{type:"question-circle-o"}}),e._v(" 合同时间 ")],1)],1),e.roomForm.contract_time_start&&e.roomForm.contract_time_end?a("a-range-picker",{attrs:{"disabled-date":e.disabledDate,value:[e.moment(e.roomForm.contract_time_start,e.dateFormat),e.moment(e.roomForm.contract_time_end,e.dateFormat)]},on:{change:e.onDateChange}}):a("a-range-picker",{attrs:{"disabled-date":e.disabledDate},on:{change:e.onDateChange}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋类型"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.roomForm.house_type},on:{change:function(t){return e.handleSelectChange(t,"house_type")}}},e._l(e.roomParams.room_type_list,(function(t,n){return a("a-select-option",{attrs:{value:t.key}},[e._v(" "+e._s(t.value)+" ")])})),1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"使用状态",extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.roomForm.user_status},on:{change:function(t){return e.handleSelectChange(t,"user_status")}}},e._l(e.roomParams.user_status_list,(function(t,n){return a("a-select-option",{attrs:{value:t.key}},[e._v(" "+e._s(t.value)+" ")])})),1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"出售状态",extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.roomForm.sell_status},on:{change:function(t){return e.handleSelectChange(t,"sell_status")}}},e._l(e.roomParams.sell_status_list,(function(t,n){return a("a-select-option",{attrs:{value:t.key}},[e._v(" "+e._s(t.value)+" ")])})),1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋面积"}},[a("a-input",{attrs:{placeholder:"请输入房屋面积"},model:{value:e.roomForm.housesize,callback:function(t){e.$set(e.roomForm,"housesize",t)},expression:"roomForm.housesize"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"排序",extra:"数字越大越靠前"}},[a("a-input",{attrs:{placeholder:"请输入排序"},model:{value:e.roomForm.sort,callback:function(t){e.$set(e.roomForm,"sort",t)},expression:"roomForm.sort"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间状态"}},[a("a-radio-group",{model:{value:e.roomForm.status,callback:function(t){e.$set(e.roomForm,"status",t)},expression:"roomForm.status"}},[a("a-radio",{attrs:{value:1}},[e._v("开启")]),a("a-radio",{attrs:{value:0}},[e._v("禁用")])],1)],1)],1),e.a185_indoor_module.status?a("div",{staticClass:"form_title",staticStyle:{"font-weight":"600","margin-top":"10px",diplay:"flex","align-items":"center"}},[e._v(" 室内机管理 "),a("span",{staticStyle:{"font-weight":"500",color:"green","margin-left":"20px","font-size":"14px"}},[e._v("注意：室内机编号仅限于 A185智能门禁配合使用")])]):e._e(),e.a185_indoor_module.status?a("div",{staticClass:"form_con",staticStyle:{"margin-top":"10px"}},[a("a-form-model-item",{staticClass:"form_item",attrs:{label:"室内机设备号"}},[a("a-input",{attrs:{placeholder:"请输入室内机设备号"},model:{value:e.roomForm.indoor_device_sn,callback:function(t){e.$set(e.roomForm,"indoor_device_sn",t)},expression:"roomForm.indoor_device_sn"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"状态"}},[a("a-radio-group",{model:{value:e.roomForm.indoor_status,callback:function(t){e.$set(e.roomForm,"indoor_status",t)},expression:"roomForm.indoor_status"}},[a("a-radio",{attrs:{value:1}},[e._v("开启")]),a("a-radio",{attrs:{value:0}},[e._v("禁用")])],1)],1)],1):e._e(),e.water_electric_gas_module.status?a("div",{staticClass:"form_title",staticStyle:{"font-weight":"600","margin-top":"10px",diplay:"flex","align-items":"center"}},[e._v(" 设备管理 "),a("span",{staticStyle:{"font-weight":"500",color:"green","margin-left":"20px","font-size":"14px"}},[e._v("注意：对接水电燃仪表设备，由设备方提供水电燃设备接口")]),a("span",{staticStyle:{"font-weight":"500",color:"red","margin-left":"20px","font-size":"14px"}},[e._v("冷/热水表表号具有唯一性，不可重复")])]):e._e(),e.water_electric_gas_module.status?a("div",{staticClass:"form_con",staticStyle:{"margin-top":"10px"}},[a("a-form-model-item",{staticClass:"form_item",attrs:{label:"冷水表编号"}},[a("a-input",{attrs:{placeholder:"请输入冷水表编号"},model:{value:e.roomForm.water_number,callback:function(t){e.$set(e.roomForm,"water_number",t)},expression:"roomForm.water_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"热水表编号"}},[a("a-input",{attrs:{placeholder:"请输入热水表编号"},model:{value:e.roomForm.heat_water_number,callback:function(t){e.$set(e.roomForm,"heat_water_number",t)},expression:"roomForm.heat_water_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"电表编号"}},[a("a-input",{attrs:{placeholder:"请输入电表编号"},model:{value:e.roomForm.ele_number,callback:function(t){e.$set(e.roomForm,"ele_number",t)},expression:"roomForm.ele_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"燃气表编号"}},[a("a-input",{attrs:{placeholder:"请输入燃气表编号"},model:{value:e.roomForm.gas_number,callback:function(t){e.$set(e.roomForm,"gas_number",t)},expression:"roomForm.gas_number"}})],1)],1):e._e(),a("a-form-model-item",{staticStyle:{width:"100%"},attrs:{"wrapper-col":{span:14,offset:2}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)],1)},o=[],r=a("5530"),l=(a("a9e3"),a("8bbf")),i=a.n(l),s=a("c1df"),c=a.n(s),u=a("ed09"),d=Object(u["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(u["h"])({}),n=Object(u["h"])(!0),o=Object(u["h"])({vacancy_id:"",property_number:"",address:"",room:"",house_type:"",user_status:"",sell_status:"",status:"",indoor_device_sn:"",indoor_status:"",water_number:"",heat_water_number:"",ele_number:"",gas_number:""}),l=Object(u["h"])(!1),s=function(){l.value?i.a.prototype.$message.warn("正在提交中，请稍等..."):(l.value=!0,i.a.prototype.request("/community/village_api.Building/subRoomAttribute",o.value).then((function(e){l.value=!1,i.a.prototype.$message.success("编辑成功！")})).catch((function(e){l.value=!1})))},d=function(){},m=Object(u["h"])({span:4}),p=Object(u["h"])({span:14}),f=Object(u["h"])("YYYY/MM/DD"),_=Object(u["h"])({}),b=Object(u["h"])({}),v=function(e){o.value.contract_time_start=c()(e[0]).format(f.value),o.value.contract_time_end=c()(e[1]).format(f.value)};Object(u["f"])((function(){console.log("pageLoading===>",n.value),x()}));var g=function(e,t){o.value[t]=e,Object(u["d"])()},y=function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},h=function(e){return e&&!(e>c()(o.value.village_contract_time_start)&&e<c()(o.value.village_contract_time_end))},x=function(){o.value={},i.a.prototype.request("/community/village_api.Building/getRoomDetails",{vacancy_id:e.roomId}).then((function(e){_.value=e.a185_indoor_module,b.value=e.water_electric_gas_module,o.value=Object(r["a"])(Object(r["a"])(Object(r["a"])({},e.room_info),e.a185_indoor_module.data),e.water_electric_gas_module.data),o.value.village_contract_time_start&&o.value.village_contract_time_end&&h(),n.value=!1})).catch((function(e){n.value=!1}))};return{rules:a,roomForm:o,labelCol:m,wrapperCol:p,onSubmit:s,resetForm:d,handleSelectChange:g,filterOption:y,moment:c.a,dateFormat:f,onDateChange:v,a185_indoor_module:_,water_electric_gas_module:b,pageLoading:n,disabledDate:h}}}),m=d,p=(a("fe7f"),a("0c7c")),f=Object(p["a"])(m,n,o,!1,null,"96377b4e",null);t["default"]=f.exports},"2f05":function(e,t,a){"use strict";a("d329")},"415e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"associated_work_order"},[a("a-table",{attrs:{pagination:e.pageInfo,columns:e.orderColumns,loading:e.tableLoading,"data-source":e.tableList},on:{change:e.tableChange},scopedSlots:e._u([{key:"status_arr",fn:function(t,n){return a("span",{},[a("a-tag",{attrs:{color:n.status_arr.status_color}},[e._v(e._s(n.status_arr.status_txt))])],1)}}])})],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=a("ed09"),s=Object(i["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(i["h"])([]),n=Object(i["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0}),o=Object(i["h"])([]),r=Object(i["h"])(!1);Object(i["f"])((function(){u()}));var s=function(e){var t=e.pageSize,a=e.current;n.value.current=a,n.value.pageSize=t,u()},c=function(e){l.a.prototype.$confirm({title:"提示",content:"确定要删除此项吗？",onOk:function(){l.a.prototype.request("/community/village_api.cashier/delChargeStandardBind",{charge_standard_bind_id:e.bind_id}).then((function(e){l.a.prototype.$message.success("删除成功！"),n.value.current=1,n.value.pageSize=10,u()}))},onCancel:function(){}})},u=function(){r.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindWorksOrderList",{vacancy_id:e.roomId,page:n.value.current,limit:n.value.pageSize}).then((function(e){o.value=e.list,n.value.total=e.count,r.value=!1})).catch((function(e){r.value=!1}))};return a.value=[{title:"上报人",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"上报时间",dataIndex:"add_time",key:"add_time"},{title:"工单详情",dataIndex:"order_content",key:"order_content"},{title:"上报状态",dataIndex:"status_arr",key:"status_arr",scopedSlots:{customRender:"status_arr"}},{title:"上报位置",dataIndex:"address_txt",key:"address_txt"},{title:"上报分类",dataIndex:"cate_name",key:"cate_name"},{title:"工单类目",dataIndex:"subject_name",key:"subject_name"}],{orderColumns:a,pageInfo:n,tableList:o,tableLoading:r,getOrderList:u,tableChange:s,deleteOrder:c}}}),c=s,u=a("0c7c"),d=Object(u["a"])(c,n,o,!1,null,"0c6a4820",null);t["default"]=d.exports},"59d1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"online_file"},[e._v(" 显示所有该房间下所有用户参与的在线文件管理 ")])},o=[],r=(a("a9e3"),a("8bbf"),a("ed09")),l=Object(r["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){return{}}}),i=l,s=a("0c7c"),c=Object(s["a"])(i,n,o,!1,null,"da00d5fe",null);t["default"]=c.exports},6811:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"form_con",staticStyle:{display:"flex","flex-wrap":"wrap"}},e._l(e.baseForm,(function(t,n){return a("a-form-model-item",{key:n,staticStyle:{width:"33.3%"},attrs:{label:t.title}},[1==t.type?a("div",{staticClass:"form_item"},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请输入"+t.title},model:{value:e.baseForm[n].value,callback:function(t){e.$set(e.baseForm[n],"value",t)},expression:"baseForm[index].value"}})],1):e._e(),2==t.type?a("div",{staticClass:"form_item"},[a("a-select",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title},model:{value:e.baseForm[n].value,callback:function(t){e.$set(e.baseForm[n],"value",t)},expression:"baseForm[index].value"}},e._l(t.use_field,(function(t,n){return a("a-select-option",{attrs:{value:t}},[e._v(e._s(t))])})),1)],1):e._e(),3==t.type?a("div",{staticClass:"form_item"},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请输入"+t.title},model:{value:e.baseForm[n].value,callback:function(t){e.$set(e.baseForm[n],"value",t)},expression:"baseForm[index].value"}})],1):e._e(),4==t.type?a("div",{staticClass:"form_item"},[e.baseForm[n].value?a("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,"default-value":e.moment(e.baseForm[n].value,"YYYY-MM-DD"),placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}}):a("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}})],1):e._e()])})),1),e.baseForm?a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1):e._e()],1)},o=[],r=(a("d81d"),a("c1df")),l=a.n(r),i=(a("8bbf"),a("ed09")),s=(a("3990"),Object(i["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(i["h"])({span:6}),n=Object(i["h"])({span:14}),o=Object(i["h"])([]);o.value=e.formParams.field_list;var r=Object(i["h"])({}),s=Object(i["h"])();Object(i["i"])((function(){return e.formParams}),(function(e){o.value=e.field_list}));var c=function(){var e=!1,t=[];o.value.map((function(a){a.is_must&&!a.value&&(e=!0),t.push({key:a.key,value:a.value})})),console.log("resultParams===>",t),e&&console.log("val===>")},u=function(){s.value.resetFields()};return{labelCol:a,wrapperCol:n,baseForm:o,rules:r,onSubmit:c,resetForm:u,moment:l.a}}})),c=s,u=(a("e376"),a("0c7c")),d=Object(u["a"])(c,n,o,!1,null,"425560b8",null);t["default"]=d.exports},"6fd0":function(e,t,a){},7852:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:e.drawerTitle?e.drawerTitle:e.title,placement:"right",width:"1400",visible:e.visible},on:{close:e.onRoomClose}},[e.visible?a("a-tabs",{attrs:{"active-key":e.currentKey},on:{change:e.tabChange}},e._l(e.tabList,(function(t,n){return a("a-tab-pane",{key:t.key},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:t.icon_type}}),e._v(" "+e._s(t.tab_name)+" ")],1),e.currentKey==t.key?a(t.component,{tag:"component",attrs:{roomId:e.roomId,roomParams:e.roomParams},on:{hideUserTab:e.hideUserTab,getRoomAddress:e.getAddress}}):e._e()],1)})),1):e._e()],1)},o=[],r=(a("a9e3"),a("c740"),a("a434"),a("8bbf")),l=a.n(r),i=a("ed09"),s=a("a55e"),c=a("16d1"),u=a("929b"),d=a("ee78"),m=a("dd47"),p=a("415e"),f=a("59d1"),_=a("0457"),b=a("f91f"),v=(a("3990"),Object(i["c"])({props:{title:{type:String,defalut:"房间信息"},visible:{type:Boolean,defalut:!1},roomId:{type:[String,Number],defalut:""},type:{type:String,defalut:""}},components:{personnelInformation:s["default"],roomInformation:c["default"],chargingStandard:u["default"],propertyBill:m["default"],associatedWorkOrder:p["default"],onlineFile:f["default"],userInformation:_["default"],parkingSpace:d["default"],associatedCardNo:b["default"]},setup:function(e,t){var a=Object(i["h"])(""),n=function(){t.emit("closeRoom")},o=Object(i["h"])(""),r=function(e){o.value=e},s=function(e){a.value=e};Object(i["i"])((function(){return e.visible}),(function(e){e&&d()}),{deep:!0});var c=Object(i["h"])([]),u=Object(i["h"])({}),d=function(){l.a.prototype.request("/community/village_api.Building/getRoomOptionType",{vacancy_id:e.roomId}).then((function(e){c.value=e.option_list,a.value=e.option_list[0].key,u.value=e}))},m=function(){var e=c.value.findIndex((function(e){return"userInformation"==e.component}));c.value.splice(e,1),a.value=c.value[0].key};return{onRoomClose:n,tabList:c,getRoomTab:d,roomParams:u,tabChange:s,currentKey:a,getAddress:r,drawerTitle:o,hideUserTab:m}}})),g=v,y=a("0c7c"),h=Object(y["a"])(g,n,o,!1,null,"07c608b6",null);t["default"]=h.exports},"89f3":function(e,t,a){},"929b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"charging_standard"},[a("a-table",{attrs:{pagination:e.pageInfo,columns:e.chargeColumns,loading:e.tableLoading,"data-source":e.tableList},on:{change:e.tableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a-popconfirm",{attrs:{title:"是否删除当前项？",placement:"topLeft","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleteStandard(n)}}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)}}])})],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=a("ed09"),s=Object(i["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(i["h"])([]),n=Object(i["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0}),o=Object(i["h"])([]),r=Object(i["h"])(!1);Object(i["f"])((function(){u()}));var s=function(e){var t=e.pageSize,a=e.current;n.value.current=a,n.value.pageSize=t,u()},c=function(e){l.a.prototype.request("/community/village_api.cashier/delChargeStandardBind",{charge_standard_bind_id:e.bind_id}).then((function(e){l.a.prototype.$message.success("删除成功！"),n.value.current=1,n.value.pageSize=10,u()}))},u=function(){r.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindChargeRuleList",{vacancy_id:e.roomId,page:n.value.current,limit:n.value.pageSize}).then((function(e){o.value=e.list,n.value.total=e.count,r.value=!1})).catch((function(e){r.value=!1}))};return a.value=[{title:"所属收费科目",dataIndex:"subject_name",key:"subject_name"},{title:"收费项目名称",dataIndex:"project_name",key:"project_name"},{title:"收费标准名称",dataIndex:"charge_name",key:"charge_name"},{title:"收费标准生效时间",dataIndex:"charge_valid_time",key:"charge_valid_time"},{title:"计费模式",dataIndex:"fees_type",key:"fees_type"},{title:"账单生成周期设置",dataIndex:"bill_create_set",key:"bill_create_set"},{title:"账单欠费模式",dataIndex:"bill_arrears_set",key:"bill_arrears_set"},{title:"生成账单模式",dataIndex:"bill_type",key:"bill_type"},{title:"是否支持预缴",dataIndex:"is_prepaid",key:"is_prepaid"},{title:"未入住房屋折扣",dataIndex:"not_house_rate",key:"not_house_rate"},{title:"操作",dataIndex:"operation",key:"operation",width:"120px",scopedSlots:{customRender:"action"}}],{chargeColumns:a,pageInfo:n,tableList:o,tableLoading:r,getChargeList:u,tableChange:s,deleteStandard:c}}}),c=s,u=a("0c7c"),d=Object(u["a"])(c,n,o,!1,null,"3483500e",null);t["default"]=d.exports},9556:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_label"},[e._l(e.labelForm.list,(function(t,n){return a("div",{key:n,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.name)+"：")]),a("div",{staticClass:"radio_con"},[a("a-radio-group",{on:{change:e.radioChange},model:{value:e.valueGroup[n],callback:function(t){e.$set(e.valueGroup,n,t)},expression:"valueGroup[index]"}},e._l(t.children,(function(n,o){return a("a-radio",{key:t.value,attrs:{value:n.id}},[e._v(e._s(n.name))])})),1)],1)])})),a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},o=[],r=(a("8bbf"),a("ed09")),l=(a("3990"),Object(r["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(r["h"])({}),n=Object(r["h"])([]);a.value=e.formParams.label_list,n.value=e.formParams.label_list.value;var o=function(e){console.log("value===>",e)},l=function(){console.log("labelForm===>",a.value.value)};return{labelForm:a,onSubmit:l,valueGroup:n,radioChange:o}}})),i=l,s=(a("dbd3"),a("0c7c")),c=Object(s["a"])(i,n,o,!1,null,"dbb68476",null);t["default"]=c.exports},"9e6e":function(e,t,a){"use strict";a("abd0")},a55e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"personnel_information"},[a("a-tooltip",[a("a-button",{attrs:{type:"primary"},on:{click:e.addInfo}},[e._v(" 添加人员 ")]),a("a-divider",{attrs:{type:"vertical"}}),e._v(" 类型颜色： "),e._l(e.roomParams.person_type_list,(function(e,t){return a("a-badge",{staticStyle:{"margin-left":"7px"},attrs:{color:e.color,text:e.value}})}))],2),a("a-table",{attrs:{pagination:e.pageInfo,columns:e.peopleColumns,loading:e.tableLoading,"data-source":e.tableList},on:{change:e.tableChange},scopedSlots:e._u([{key:"name",fn:function(t){return a("a",{},[e._v(e._s(t))])}},{key:"user_status",fn:function(t){return a("span",{},[a("a-tag",{attrs:{color:t.color}},[e._v(" "+e._s(t.value)+" ")])],1)}},{key:"user_type",fn:function(t){return a("span",{},[a("a-tag",{attrs:{color:t.color}},[e._v(" "+e._s(t.value)+" ")])],1)}},{key:"action",fn:function(t,n){return a("span",{},[a("a",[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",[e._v("删除")])],1)}}])},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[a("a-icon",{attrs:{type:"user"}}),e._v(" 姓名 ")],1)]),a("personModal",{attrs:{visible:e.personVisible,roomId:e.roomId,personId:e.personId},on:{close:e.closePerson}})],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=a("cc19"),s=a("ed09"),c=Object(s["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},components:{personModal:i["default"]},setup:function(e,t){var a=Object(s["h"])(!1),n=Object(s["h"])(""),o=Object(s["h"])([]),r=Object(s["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0}),i=Object(s["h"])([]),c=Object(s["h"])(!1);Object(s["f"])((function(){p()}));var u=function(){a.value=!0},d=function(){n.value="",a.value=!1},m=function(e){var t=e.pageSize,a=e.current;r.value.current=a,r.value.pageSize=t,p()},p=function(){c.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindUserList",{vacancy_id:e.roomId,page:r.value.current,limit:r.value.pageSize}).then((function(e){i.value=e.list,r.value.total=e.count,c.value=!1})).catch((function(e){c.value=!1}))};return o.value=[{dataIndex:"name",key:"name",slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"添加时间",dataIndex:"add_time",key:"add_time"},{title:"类型",key:"user_status",dataIndex:"user_status",scopedSlots:{customRender:"user_status"}},{title:"与业主关系",key:"user_type",dataIndex:"user_type",scopedSlots:{customRender:"user_type"}},{title:"身份证卡号",key:"id_card",dataIndex:"id_card"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],{peopleColumns:o,pageInfo:r,tableChange:m,tableList:i,tableLoading:c,personVisible:a,personId:n,addInfo:u,closePerson:d}}}),u=c,d=a("0c7c"),m=Object(d["a"])(u,n,o,!1,null,"77f7112f",null);t["default"]=m.exports},ab71:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"parking_space"},[a("a-table",{attrs:{pagination:e.pageInfo,columns:e.paymentTitle,loading:e.tableLoading,"data-source":e.paymentData},on:{change:e.tableChange}})],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=a("ed09"),s=Object(i["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(i["h"])([]),n=Object(i["h"])([]),o=Object(i["h"])(!1);a.value=[{title:"收费标准",dataIndex:"charge_name",key:"charge_name"},{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"所属收费科目",dataIndex:"subject_name",key:"subject_name"},{title:"应收费用",dataIndex:"total_money",key:"total_money"},{title:"账单生成时间",dataIndex:"add_time",key:"add_time"},{title:"上次止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"本次度数",dataIndex:"now_ammeter",key:"now_ammeter"},{title:"审核状态",dataIndex:"check_status",key:"check_status"},{title:"计费开始时间",dataIndex:"service_start_time",key:"service_start_time"},{title:"计费结束时间",dataIndex:"service_end_time",key:"service_end_time"}];var r=Object(i["h"])({pageSize:10,current:1,type:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0});Object(i["f"])((function(){u()}));var s=function(e){var t=e.pageSize,a=e.current;r.value.current=a,r.value.pageSize=t,u()},c=function(e){l.a.prototype.$confirm({title:"提示",content:"确定要删除此项吗？",onOk:function(){l.a.prototype.request("/community/village_api.cashier/delChargeStandardBind",{charge_standard_bind_id:e.bind_id}).then((function(e){l.a.prototype.$message.success("删除成功！"),r.value.current=1,r.value.pageSize=10,u()}))},onCancel:function(){}})},u=function(){o.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindBillList",{vacancy_id:e.roomId,page:r.value.current,limit:r.value.pageSize,type:1}).then((function(e){n.value=e.list,r.value.total=e.count,o.value=!1})).catch((function(e){o.value=!1}))};return{paymentTitle:a,paymentData:n,getPaymentBill:u,deleteBill:c,tableLoading:o,tableChange:s,pageInfo:r}}}),c=s,u=a("0c7c"),d=Object(u["a"])(c,n,o,!1,null,"3fa16e85",null);t["default"]=d.exports},abd0:function(e,t,a){},b6cf:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(t,n){return a("div",{key:n,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.label)+"：")]),1==t.type?a("div",{staticClass:"choose_con",staticStyle:{display:"flex","align-items":"center"}},[a("a-radio-group",{model:{value:e.ownerForm[n].data.value,callback:function(t){e.$set(e.ownerForm[n].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,n){return a("a-radio",{attrs:{value:t.label}},[e._v(e._s(t.value))])})),1),1==e.ownerForm[n].data.value?a("a-select",{staticStyle:{width:"200px","margin-left":"5px"},attrs:{placeholder:"请选择党支部"},on:{change:e.selectChange},model:{value:e.partyId,callback:function(t){e.partyId=t},expression:"partyId"}},e._l(t.data.street_party_branch,(function(t,n){return a("a-select-option",{attrs:{value:t.id}},[e._v(e._s(t.name))])})),1):e._e()],1):e._e(),0==t.type?a("div",{staticClass:"choose_con"},[a("a-checkbox-group",{model:{value:e.ownerForm[n].data.value,callback:function(t){e.$set(e.ownerForm[n].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,n){return a("a-checkbox",{attrs:{value:t.label+""}},[e._v(e._s(t.value))])})),1)],1):e._e()])})),a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},o=[],r=(a("d81d"),a("8bbf"),a("ed09")),l=(a("3990"),Object(r["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(r["h"])({}),n=Object(r["h"])("");a.value=e.formParams.mark_list;var o=function(e){console.log("value===>",e),console.log("partyId===>",n.value)},l=function(){console.log("ownerForm===>",a.value);var e=[];a.value.map((function(t,a){1==t.type&&1==t.data.value?e.push({partyId:n.value,key:t.field,value:t.data.value}):e.push({key:t.field,value:t.data.value})})),console.log("resultParams===>",e)};return{ownerForm:a,onSubmit:l,partyId:n,selectChange:o}}})),i=l,s=(a("2f05"),a("0c7c")),c=Object(s["a"])(i,n,o,!1,null,"701394f0",null);t["default"]=c.exports},cc19:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"添加人员",visible:e.visible,width:950,"confirm-loading":e.confirmLoading,footer:null},on:{cancel:e.handleCancel}},[a("a-tabs",{attrs:{"default-active-key":e.currentIndex},on:{change:e.tabChange}},e._l(e.tabList,(function(t,n){return a("a-tab-pane",{key:t.key},[a("span",{attrs:{slot:"tab"},slot:"tab"},[e._v(e._s(t.label))]),e.currentIndex==t.key?a(t.component,{tag:"component",attrs:{formParams:e.formParams}}):e._e()],1)})),1)],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=(a("c1df"),a("ed09")),s=(a("3990"),a("6811")),c=a("b6cf"),u=a("d79e"),d=a("9556"),m=Object(i["c"])({props:{visible:{type:Boolean,default:!1},personId:{type:[String,Number],default:0},roomId:{type:[String,Number],default:""}},components:{baseMsg:s["default"],msgMarker:c["default"],ownerMsg:u["default"],userLabel:d["default"]},setup:function(e,t){var a=Object(i["h"])(!1),n=Object(i["h"])({}),o=(Object(i["h"])(),Object(i["h"])(1)),r=function(e){o.value=e},s=function(){t.emit("close")},c=Object(i["h"])([{key:1,value:"baseMsg",label:"基本信息",component:"baseMsg"},{key:2,value:"ownerMsg",label:"业主资料",component:"ownerMsg"},{key:3,value:"msgMarker",label:"信息标注",component:"msgMarker"},{key:4,value:"userLabel",label:"用户标签",component:"userLabel"}]),u=Object(i["h"])({}),d=Object(i["h"])(!1),m=function(){console.log("context.roomId===>",e.roomId),l.a.prototype.request("/community/village_api.Building/getRoomBindUserData",{vacancy_id:e.roomId}).then((function(e){n.value=e}))};return Object(i["i"])((function(){return e.visible}),(function(e){e&&m()}),{deep:!0}),{confirmLoading:a,personForm:n,personStatus:d,getPersonInfo:m,tabList:c,tabChange:r,handleCancel:s,currentIndex:o,formParams:u}}}),p=m,f=a("0c7c"),_=Object(f["a"])(p,n,o,!1,null,null,null);t["default"]=_.exports},d329:function(e,t,a){},d79e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(t,n){return a("div",{key:n,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.label)+"：")]),a("div",{staticClass:"checkbox_con"},[a("a-checkbox-group",e._l(t.value,(function(t,n){return a("a-checkbox",[e._v(e._s(t.value))])})),1)],1)])})),a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},o=[],r=(a("8bbf"),a("ed09")),l=(a("3990"),Object(r["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(r["h"])({});a.value=e.formParams.mark_list;var n=function(){console.log("ownerForm===>",a.value)};return{ownerForm:a,onSubmit:n}}})),i=l,s=(a("9e6e"),a("0c7c")),c=Object(s["a"])(i,n,o,!1,null,"69d727fe",null);t["default"]=c.exports},dbd3:function(e,t,a){"use strict";a("89f3")},dd47:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tabs",{attrs:{"default-active-key":1},on:{change:e.tabChange}},e._l(e.tabList,(function(t,n){return a("a-tab-pane",{key:t.key,attrs:{tab:t.label}},[e.currentKey==t.key?a(t.value,{tag:"component",attrs:{roomId:e.roomId}}):e._e()],1)})),1)},o=[],r=(a("a9e3"),a("8bbf"),a("ed09")),l=a("f26b"),i=a("ab71"),s=Object(r["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},components:{billPaid:l["default"],paymentBill:i["default"]},setup:function(e,t){var a=Object(r["h"])([{key:1,label:"待缴账单",value:"paymentBill"},{key:2,label:"已缴账单",value:"billPaid"}]),n=Object(r["h"])(1),o=function(e){n.value=e};return{tabList:a,tabChange:o,currentKey:n}}}),c=s,u=a("0c7c"),d=Object(u["a"])(c,n,o,!1,null,"a57ae8b0",null);t["default"]=d.exports},e376:function(e,t,a){"use strict";a("6fd0")},ee78:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"parking_space"},[a("a-table",{attrs:{pagination:e.pageInfo,columns:e.carportColumns,loading:e.tableLoading,"data-source":e.carportData},on:{change:e.tableChange}})],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=a("ed09"),s=Object(i["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(i["h"])([]),n=Object(i["h"])([]),o=Object(i["h"])(!1);a.value=[{title:"所属车库",dataIndex:"garage_num",key:"garage_num"},{title:"所属车位号",dataIndex:"position_num",key:"position_num"},{title:"车牌号",dataIndex:"car_number",key:"car_number"},{title:"车主姓名",dataIndex:"name",key:"name"},{title:"车主手机号",dataIndex:"phone",key:"phone"},{title:"车辆到期时间",dataIndex:"end_time",key:"end_time"},{title:"审核状态",dataIndex:"examine_status",key:"examine_status"},{title:"审核说明",dataIndex:"examine_response",key:"examine_response"}];var r=Object(i["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0});Object(i["f"])((function(){u()}));var s=function(e){var t=e.pageSize,a=e.current;r.value.current=a,r.value.pageSize=t,u()},c=function(e){l.a.prototype.$confirm({title:"提示",content:"确定要删除此项吗？",onOk:function(){l.a.prototype.request("/community/village_api.cashier/delChargeStandardBind",{charge_standard_bind_id:e.bind_id}).then((function(e){l.a.prototype.$message.success("删除成功！"),r.value.current=1,r.value.pageSize=10,u()}))},onCancel:function(){}})},u=function(){o.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindVehicleList",{vacancy_id:e.roomId,page:r.value.current,limit:r.value.pageSize}).then((function(e){n.value=e.list,pagination.value.total=e.count,o.value=!1})).catch((function(e){o.value=!1}))};return{carportColumns:a,carportData:n,getCarList:u,deleteStandard:c,tableLoading:o,tableChange:s,pageInfo:r}}}),c=s,u=a("0c7c"),d=Object(u["a"])(c,n,o,!1,null,"7d523052",null);t["default"]=d.exports},f26b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"parking_space"},[a("a-table",{attrs:{pagination:e.pageInfo,columns:e.paymentTitle,loading:e.tableLoading,"data-source":e.paymentData},on:{change:e.tableChange}})],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=a("ed09"),s=Object(i["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(i["h"])([]),n=Object(i["h"])([]),o=Object(i["h"])(!1);a.value=[{title:"收费标准",dataIndex:"charge_name",key:"charge_name"},{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"收费科目",dataIndex:"subject_name",key:"subject_name"},{title:"实付金额",dataIndex:"pay_money",key:"pay_money"},{title:"支付时间",dataIndex:"pay_time",key:"pay_time"},{title:"账单生成时间",dataIndex:"add_time",key:"add_time"},{title:"上次止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"本次度数",dataIndex:"now_ammeter",key:"now_ammeter"},{title:"审核状态",dataIndex:"check_status",key:"check_status"},{title:"支付方式",dataIndex:"pay_type",key:"pay_type"},{title:"开票状态",dataIndex:"invoicing_status",key:"invoicing_status"},{title:"账单状态",dataIndex:"order_status",key:"order_status"},{title:"计费开始时间",dataIndex:"service_start_time",key:"service_start_time"},{title:"计费结束时间",dataIndex:"service_end_time",key:"service_end_time"}];var r=Object(i["h"])({pageSize:10,current:1,type:2,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0});Object(i["f"])((function(){u()}));var s=function(e){var t=e.pageSize,a=e.current;r.value.current=a,r.value.pageSize=t,u()},c=function(e){l.a.prototype.$confirm({title:"提示",content:"确定要删除此项吗？",onOk:function(){l.a.prototype.request("/community/village_api.cashier/delChargeStandardBind",{charge_standard_bind_id:e.bind_id}).then((function(e){l.a.prototype.$message.success("删除成功！"),r.value.current=1,r.value.pageSize=10,u()}))},onCancel:function(){}})},u=function(){o.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindBillList",{vacancy_id:e.roomId,page:r.value.current,limit:r.value.pageSize,type:2}).then((function(e){n.value=e.list,r.value.total=e.count,o.value=!1})).catch((function(e){o.value=!1}))};return{paymentTitle:a,paymentData:n,getPaymentBill:u,deleteBill:c,tableLoading:o,tableChange:s,pageInfo:r}}}),c=s,u=a("0c7c"),d=Object(u["a"])(c,n,o,!1,null,"2bbab483",null);t["default"]=d.exports},f91f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"associated_card_no"},[a("a-table",{attrs:{pagination:e.pageInfo,columns:e.cardColumns,loading:e.tableLoading,"data-source":e.tableList},on:{change:e.tableChange}},[a("a-popconfirm",{attrs:{title:"是否删除当前项？",placement:"topLeft","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.deleteCard(e.record)}}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)],1)},o=[],r=(a("a9e3"),a("8bbf")),l=a.n(r),i=a("ed09"),s=Object(i["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(i["h"])([]),n=Object(i["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0}),o=Object(i["h"])([]),r=Object(i["h"])(!1);Object(i["f"])((function(){u()}));var s=function(e){var t=e.pageSize,a=e.current;n.value.current=a,n.value.pageSize=t,u()},c=function(e){l.a.prototype.request("/community/village_api.Building/delVacancyIcCard",{bind_id:e.bind_id}).then((function(e){l.a.prototype.$message.success("删除成功！"),n.value.current=1,n.value.pageSize=10,u()}))},u=function(){r.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindIcCardList",{vacancy_id:e.roomId,page:n.value.current,limit:n.value.pageSize}).then((function(e){o.value=e.list,n.value.total=e.count,r.value=!1})).catch((function(e){r.value=!1}))};return a.value=[{title:"设备品牌",dataIndex:"device_brand",key:"device_brand"},{title:"设备类型",dataIndex:"device_type",key:"device_type"},{title:"IC卡号",dataIndex:"ic_card",key:"ic_card"},{title:"添加时间",dataIndex:"add_time",key:"add_time"}],{cardColumns:a,pageInfo:n,tableList:o,tableLoading:r,getCardList:u,tableChange:s,deleteCard:c}}}),c=s,u=a("0c7c"),d=Object(u["a"])(c,n,o,!1,null,"abec2fb4",null);t["default"]=d.exports},fd32:function(e,t,a){},fe7f:function(e,t,a){"use strict";a("fd32")}}]);