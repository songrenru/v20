(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3213a9ce"],{"16d1":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t.pageLoading?o("div",{staticClass:"loading",staticStyle:{width:"100%",height:"500px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[o("a-icon",{staticStyle:{"font-size":"26px"},attrs:{type:"loading"}}),o("div",{staticStyle:{color:"#666666","font-size":"20px","margin-top":"10px"}},[t._v("加载中...")])],1):o("a-form-model",{ref:"ruleForm",attrs:{rules:t.rules,model:t.roomForm,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[o("div",{staticClass:"form_title",staticStyle:{"font-weight":"600"}},[t._v("基本信息")]),o("div",{staticClass:"form_con",staticStyle:{"margin-top":"10px"}},[o("a-form-model-item",{staticClass:"form_item",attrs:{label:"物业编号",extra:"由楼栋编号、单元编号、楼层编号和房屋编号依次拼接而成"}},[o("a-input",{attrs:{placeholder:"请输入物业编号"},model:{value:t.roomForm.property_number,callback:function(e){t.$set(t.roomForm,"property_number",e)},expression:"roomForm.property_number"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"楼栋/单元/楼层"}},[o("a-input",{attrs:{placeholder:"请输入楼栋/单元/楼层",disabled:!0},model:{value:t.roomForm.address,callback:function(e){t.$set(t.roomForm,"address",e)},expression:"roomForm.address"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间号"}},[o("a-input",{attrs:{placeholder:"请输入房间号"},model:{value:t.roomForm.room,callback:function(e){t.$set(t.roomForm,"room",e)},expression:"roomForm.room"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{extra:"设置房间时间范围，设置后物业只能收取合同时间内收费项目，未到合同开始时间或结束时间不能收费；未设置物业服务小区时间范围，则不影响。"}},[o("span",{attrs:{slot:"label"},slot:"label"},[o("a-tooltip",{attrs:{title:"设置房间时间范围，设置后物业只能收取合同时间内收费项目，未到合同开始时间或结束时间不能收费；未设置物业服务小区时间范围，则不影响。"}},[o("a-icon",{attrs:{type:"question-circle-o"}}),t._v(" 合同时间 ")],1)],1),t.roomForm.contract_time_start&&t.roomForm.contract_time_end?o("a-range-picker",{attrs:{"disabled-date":t.disabledDate,value:[t.moment(t.roomForm.contract_time_start,t.dateFormat),t.moment(t.roomForm.contract_time_end,t.dateFormat)]},on:{change:t.onDateChange}}):o("a-range-picker",{attrs:{"disabled-date":t.disabledDate},on:{change:t.onDateChange}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋类型"}},[o("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":t.filterOption,value:t.roomForm.house_type},on:{change:function(e){return t.handleSelectChange(e,"house_type")}}},t._l(t.roomParams.room_type_list,(function(e,a){return o("a-select-option",{attrs:{value:e.key}},[t._v(" "+t._s(e.value)+" ")])})),1)],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"使用状态",extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[o("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":t.filterOption,value:t.roomForm.user_status},on:{change:function(e){return t.handleSelectChange(e,"user_status")}}},t._l(t.roomParams.user_status_list,(function(e,a){return o("a-select-option",{attrs:{value:e.key}},[t._v(" "+t._s(e.value)+" ")])})),1)],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"出售状态",extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[o("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":t.filterOption,value:t.roomForm.sell_status},on:{change:function(e){return t.handleSelectChange(e,"sell_status")}}},t._l(t.roomParams.sell_status_list,(function(e,a){return o("a-select-option",{attrs:{value:e.key}},[t._v(" "+t._s(e.value)+" ")])})),1)],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋面积"}},[o("a-input",{attrs:{placeholder:"请输入房屋面积"},model:{value:t.roomForm.housesize,callback:function(e){t.$set(t.roomForm,"housesize",e)},expression:"roomForm.housesize"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"排序",extra:"数字越大越靠前"}},[o("a-input",{attrs:{placeholder:"请输入排序"},model:{value:t.roomForm.sort,callback:function(e){t.$set(t.roomForm,"sort",e)},expression:"roomForm.sort"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间状态"}},[o("a-radio-group",{model:{value:t.roomForm.status,callback:function(e){t.$set(t.roomForm,"status",e)},expression:"roomForm.status"}},[o("a-radio",{attrs:{value:1}},[t._v("开启")]),o("a-radio",{attrs:{value:0}},[t._v("禁用")])],1)],1)],1),t.a185_indoor_module.status?o("div",{staticClass:"form_title",staticStyle:{"font-weight":"600","margin-top":"10px",diplay:"flex","align-items":"center"}},[t._v(" 室内机管理 "),o("span",{staticStyle:{"font-weight":"500",color:"green","margin-left":"20px","font-size":"14px"}},[t._v("注意：室内机编号仅限于 A185智能门禁配合使用")])]):t._e(),t.a185_indoor_module.status?o("div",{staticClass:"form_con",staticStyle:{"margin-top":"10px"}},[o("a-form-model-item",{staticClass:"form_item",attrs:{label:"室内机设备号"}},[o("a-input",{attrs:{placeholder:"请输入室内机设备号"},model:{value:t.roomForm.indoor_device_sn,callback:function(e){t.$set(t.roomForm,"indoor_device_sn",e)},expression:"roomForm.indoor_device_sn"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"状态"}},[o("a-radio-group",{model:{value:t.roomForm.indoor_status,callback:function(e){t.$set(t.roomForm,"indoor_status",e)},expression:"roomForm.indoor_status"}},[o("a-radio",{attrs:{value:1}},[t._v("开启")]),o("a-radio",{attrs:{value:0}},[t._v("禁用")])],1)],1)],1):t._e(),t.water_electric_gas_module.status?o("div",{staticClass:"form_title",staticStyle:{"font-weight":"600","margin-top":"10px",diplay:"flex","align-items":"center"}},[t._v(" 设备管理 "),o("span",{staticStyle:{"font-weight":"500",color:"green","margin-left":"20px","font-size":"14px"}},[t._v("注意：对接水电燃仪表设备，由设备方提供水电燃设备接口")]),o("span",{staticStyle:{"font-weight":"500",color:"red","margin-left":"20px","font-size":"14px"}},[t._v("冷/热水表表号具有唯一性，不可重复")])]):t._e(),t.water_electric_gas_module.status?o("div",{staticClass:"form_con",staticStyle:{"margin-top":"10px"}},[o("a-form-model-item",{staticClass:"form_item",attrs:{label:"冷水表编号"}},[o("a-input",{attrs:{placeholder:"请输入冷水表编号"},model:{value:t.roomForm.water_number,callback:function(e){t.$set(t.roomForm,"water_number",e)},expression:"roomForm.water_number"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"热水表编号"}},[o("a-input",{attrs:{placeholder:"请输入热水表编号"},model:{value:t.roomForm.heat_water_number,callback:function(e){t.$set(t.roomForm,"heat_water_number",e)},expression:"roomForm.heat_water_number"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"电表编号"}},[o("a-input",{attrs:{placeholder:"请输入电表编号"},model:{value:t.roomForm.ele_number,callback:function(e){t.$set(t.roomForm,"ele_number",e)},expression:"roomForm.ele_number"}})],1),o("a-form-model-item",{staticClass:"form_item",attrs:{label:"燃气表编号"}},[o("a-input",{attrs:{placeholder:"请输入燃气表编号"},model:{value:t.roomForm.gas_number,callback:function(e){t.$set(t.roomForm,"gas_number",e)},expression:"roomForm.gas_number"}})],1)],1):t._e(),o("a-form-model-item",{staticStyle:{width:"100%"},attrs:{"wrapper-col":{span:14,offset:2}}},[o("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)},r=[],l=o("5530"),s=(o("a9e3"),o("8bbf")),i=o.n(s),m=o("c1df"),n=o.n(m),c=o("ed09"),u=Object(c["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(t,e){var o=Object(c["h"])({}),a=Object(c["h"])(!0),r=Object(c["h"])({vacancy_id:"",property_number:"",address:"",room:"",house_type:"",user_status:"",sell_status:"",status:"",indoor_device_sn:"",indoor_status:"",water_number:"",heat_water_number:"",ele_number:"",gas_number:""}),s=Object(c["h"])(!1),m=function(){s.value?i.a.prototype.$message.warn("正在提交中，请稍等..."):(s.value=!0,i.a.prototype.request("/community/village_api.Building/subRoomAttribute",r.value).then((function(t){s.value=!1,i.a.prototype.$message.success("编辑成功！")})).catch((function(t){s.value=!1})))},u=function(){},_=Object(c["h"])({span:4}),d=Object(c["h"])({span:14}),p=Object(c["h"])("YYYY/MM/DD"),f=Object(c["h"])({}),v=Object(c["h"])({}),b=function(t){r.value.contract_time_start=n()(t[0]).format(p.value),r.value.contract_time_end=n()(t[1]).format(p.value)};Object(c["f"])((function(){console.log("pageLoading===>",a.value),y()}));var h=function(t,e){r.value[e]=t,Object(c["d"])()},g=function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},F=function(t){return t&&!(t>n()(r.value.village_contract_time_start)&&t<n()(r.value.village_contract_time_end))},y=function(){r.value={},i.a.prototype.request("/community/village_api.Building/getRoomDetails",{vacancy_id:t.roomId}).then((function(t){f.value=t.a185_indoor_module,v.value=t.water_electric_gas_module,r.value=Object(l["a"])(Object(l["a"])(Object(l["a"])({},t.room_info),t.a185_indoor_module.data),t.water_electric_gas_module.data),r.value.village_contract_time_start&&r.value.village_contract_time_end&&F(),a.value=!1})).catch((function(t){a.value=!1}))};return{rules:o,roomForm:r,labelCol:_,wrapperCol:d,onSubmit:m,resetForm:u,handleSelectChange:h,filterOption:g,moment:n.a,dateFormat:p,onDateChange:b,a185_indoor_module:f,water_electric_gas_module:v,pageLoading:a,disabledDate:F}}}),_=u,d=(o("fe7f"),o("2877")),p=Object(d["a"])(_,a,r,!1,null,"96377b4e",null);e["default"]=p.exports},fe7f:function(t,e,o){"use strict";o("ff5e")},ff5e:function(t,e,o){}}]);