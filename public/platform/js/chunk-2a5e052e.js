(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a5e052e"],{"781e":function(t,a,o){},"8e0a":function(t,a,o){"use strict";o("781e")},9484:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",{staticClass:"fuction_set"},[a("a-form-model",{ref:"ruleForm",attrs:{model:t.functionForm,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("div",{staticStyle:{"background-color":"#ececec"}},[a("a-row",{attrs:{gutter:[8,8]}},[a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{bordered:!1}},[a("template",{slot:"title"},[a("a-icon",{attrs:{type:"pay-circle"}}),t._v(" 费用相关配置 ")],1),a("a-tooltip",{attrs:{placement:"top",title:"设置物业服务小区时间范围，设置后物业只能收取合同时间内收费项目，未到合同开始时间或结束时间不能收费；未设置物业服务小区时间范围，则不影响。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"合同时间",prop:"contract_time"}},[a("a-range-picker",{on:{change:t.onChange}})],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"选择预存时，用户端展示预存入口；选择预缴时，用户端展示预缴入口；选择预存、预缴时，用户端展示预存、预缴入口","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"收费预存配置项",prop:"design_parking_area",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.is_set_public_num,callback:function(a){t.$set(t.functionForm,"is_set_public_num",a)},expression:"functionForm.is_set_public_num"}},[a("a-radio",{attrs:{value:1}},[t._v("预存")]),a("a-radio",{attrs:{value:2}},[t._v("预缴")]),a("a-radio",{attrs:{value:3}},[t._v("预存、预缴")])],1)],1)],1)],2)],1),a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{bordered:!1}},[a("template",{slot:"title"},[a("a-icon",{attrs:{type:"tool"}}),t._v(" 硬件相关配置 ")],1),a("a-tooltip",{attrs:{placement:"top",title:"开启后业主管理页面将会开启IC卡读写的功能。需要另外购买读IC卡硬件进行支持。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"IC卡云读写",extra:"",prop:"remark"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.functionForm.write_iccard,callback:function(a){t.$set(t.functionForm,"write_iccard",a)},expression:"functionForm.write_iccard"}},[a("a-radio",{attrs:{value:1}},[t._v("开启")]),a("a-radio",{attrs:{value:2}},[t._v("关闭")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"开启后业主管理页面将会开启身份证信息读取的功能。需要另外购买身份证阅读硬件进行支持。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"身份证云读取",extra:"",prop:"remark"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.functionForm.read_idcard,callback:function(a){t.$set(t.functionForm,"read_idcard",a)},expression:"functionForm.read_idcard"}},[a("a-radio",{attrs:{value:1}},[t._v("开启")]),a("a-radio",{attrs:{value:0}},[t._v("关闭")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"目前在人脸门禁部分型号及对接公安政务系统时需要使用到身份证号码，未来也会有更多的场景需要使用。若身份证号码未录入会导致这些功能无法正常使用。届时需要时需要自行进行二次收集，加大困难。请谨慎开启可选。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"身份证号填写设置",prop:"set_id_code",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.set_id_code,callback:function(a){t.$set(t.functionForm,"set_id_code",a)},expression:"functionForm.set_id_code"}},[a("a-radio",{attrs:{value:1}},[t._v("强制填写")]),a("a-radio",{attrs:{value:2}},[t._v("可选填写")])],1)],1)],1)],2)],1)],1),a("a-row",{attrs:{gutter:[8,8]}},[a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{bordered:!1}},[a("template",{slot:"title"},[a("a-icon",{attrs:{type:"team"}}),t._v(" 小区安全配置 ")],1),a("a-tooltip",{attrs:{placement:"top",title:"作用于装修申请单提交受理时间。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"办公时间",prop:"work_time"}},[a("a-time-picker",{attrs:{value:t.moment(t.functionForm.start_time,"HH:mm:ss")},on:{change:t.onChange}}),t._v(" ~ "),a("a-time-picker",{attrs:{value:t.moment(t.functionForm.end_time,"HH:mm:ss")},on:{change:t.onChange}})],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"业主寻求帮助时联系物业的电话，只能填写一个联系方式。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"寻求帮助",prop:"design_parking_area",extra:""}},[a("a-input",{staticClass:"input_style_240",model:{value:t.functionForm.design_parking_area,callback:function(a){t.$set(t.functionForm,"design_parking_area",a)},expression:"functionForm.design_parking_area"}})],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"业主一键报警时联系社区物业的电话，只能填写一个联系方式。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"业主一键报警",prop:"touch_alarm_phone",extra:""}},[a("a-input",{staticClass:"input_style_240",model:{value:t.functionForm.touch_alarm_phone,callback:function(a){t.$set(t.functionForm,"touch_alarm_phone",a)},expression:"functionForm.touch_alarm_phone"}})],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"不是业主，是否能进入平台中小区的页面。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"允许游客访问",prop:"tourist",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.tourist,callback:function(a){t.$set(t.functionForm,"tourist",a)},expression:"functionForm.tourist"}},[a("a-radio",{attrs:{value:1}},[t._v("允许")]),a("a-radio",{attrs:{value:0}},[t._v("禁止")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"限制时间即表示用户在查看小区视频监控时限制日期、时间，不限制时间即表示用户在查看小区视频监控时限制日期、时间。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"视频监控设置",prop:"is_limit_date",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.is_limit_date,callback:function(a){t.$set(t.functionForm,"is_limit_date",a)},expression:"functionForm.is_limit_date"}},[a("a-radio",{attrs:{value:1}},[t._v("限制时间")]),a("a-radio",{attrs:{value:0}},[t._v("不限制时间")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"开启定位功能，在巡检任务的时候显示定位功能图标。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"智慧巡检码设置",prop:"is_xunjian_position",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.is_xunjian_position,callback:function(a){t.$set(t.functionForm,"is_xunjian_position",a)},expression:"functionForm.is_xunjian_position"}},[a("a-radio",{attrs:{value:1}},[t._v("开启自动定位功能")]),a("a-radio",{attrs:{value:0}},[t._v("关闭自动定位功能")])],1)],1)],1)],2)],1),a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{bordered:!1}},[a("template",{slot:"title"},[a("a-icon",{attrs:{type:"notification"}}),t._v(" 工单报修、通知配置 ")],1),a("a-tooltip",{attrs:{placement:"top",title:"自行抢单：业主发布了投诉或报修时，工作人员自行抢接这个任务；分配指定：业主发布了投诉或报修时，由平台直接分发给某个特定的工作人员。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"接任务类型",prop:"handle_type",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.handle_type,callback:function(a){t.$set(t.functionForm,"handle_type",a)},expression:"functionForm.handle_type"}},[a("a-radio",{attrs:{value:1}},[t._v("自动抢单")]),a("a-radio",{attrs:{value:0}},[t._v("分配指定")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"业主发布了投诉或报修后多少小时内没有工作人员接任务，则由平台指定给特定的工作人员。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"超时指定的时间",prop:"hour",extra:""}},[a("a-input-number",{attrs:{id:"inputNumber",min:1,max:24},on:{change:t.onChange},model:{value:t.functionForm.hour,callback:function(a){t.$set(t.functionForm,"hour",a)},expression:"functionForm.hour"}}),t._v("小时 ")],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"及时率是计算工作人员接单到结单的时间，工单类目设置时间为30分钟，在该时间内结单算正常，超过时间算问题工单。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"新版工单及时率",prop:"is_timely",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.is_timely,callback:function(a){t.$set(t.functionForm,"is_timely",a)},expression:"functionForm.is_timely"}},[a("a-radio",{attrs:{value:1}},[t._v("启用")]),a("a-radio",{attrs:{value:0}},[t._v("禁用")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"自动抢单功能，是指对工单类别，没有绑定负责人或不在负责人处理时间的情况下，业主发布工单时工作人员自行抢接这个任务;例:投诉工单或报修工单。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"新版工单自动抢单",prop:"is_grab_order",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.is_grab_order,callback:function(a){t.$set(t.functionForm,"is_grab_order",a)},expression:"functionForm.is_grab_order"}},[a("a-radio",{attrs:{value:1}},[t._v("启用")]),a("a-radio",{attrs:{value:0}},[t._v("禁用")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"业主发布工单多少小时内没有工作人员接任务，则由平台指定给特定的工作人员;例:投诉工单或报修工单。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"超时指定的时间",prop:"hour",extra:""}},[a("a-input-number",{attrs:{id:"inputNumber",min:1,max:24},on:{change:t.onChange},model:{value:t.functionForm.hour,callback:function(a){t.$set(t.functionForm,"hour",a)},expression:"functionForm.hour"}}),t._v("小时 ")],1)],1)],2)],1)],1),a("a-row",{attrs:{gutter:[8,8]}},[a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{bordered:!1}},[a("template",{slot:"title"},[a("a-icon",{attrs:{type:"windows"}}),t._v(" 功能启用配置 ")],1),a("a-tooltip",{attrs:{placement:"top",title:"开通后，请重新配置可视化页面。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"可视化页面类型",prop:"visualization_page_type",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.visualization_page_type,callback:function(a){t.$set(t.functionForm,"visualization_page_type",a)},expression:"functionForm.visualization_page_type"}},[a("a-radio",{attrs:{value:1}},[t._v("新版可视化页面")]),a("a-radio",{attrs:{value:0}},[t._v("老版可视化页面")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"允许则已缴账单支持多种打印方式，打印编号为多个；不允许则已缴账单打印后，不支持其他打印方式，列表上打印按钮不可操作，打印编号是唯一值，且不会变。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"已缴账单打印多次",prop:"print_number_times",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.print_number_times,callback:function(a){t.$set(t.functionForm,"print_number_times",a)},expression:"functionForm.print_number_times"}},[a("a-radio",{attrs:{value:1}},[t._v("允许")]),a("a-radio",{attrs:{value:0}},[t._v("不允许")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"催缴通知方式",prop:"urge_notice_type"}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.urge_notice_type,callback:function(a){t.$set(t.functionForm,"urge_notice_type",a)},expression:"functionForm.urge_notice_type"}},[a("a-radio",{attrs:{value:1}},[t._v("短信通知")]),a("a-radio",{attrs:{value:2}},[t._v("微信模板通知")]),a("a-radio",{attrs:{value:3}},[t._v("短信和微信模板通知")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"开通后，功能库中的 社区活动 功能可正常使用","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"社区活动",prop:"has_activity",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.has_activity,callback:function(a){t.$set(t.functionForm,"has_activity",a)},expression:"functionForm.has_activity"}},[a("a-radio",{attrs:{value:1}},[t._v("开启")]),a("a-radio",{attrs:{value:0}},[t._v("关闭")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"为业主可及时收到重要通知，提高新闻群发的送达率，可设置业主申请入住时是否需要关注公众号","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"公众号关注设置",prop:"is_set_public_num",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.is_set_public_num,callback:function(a){t.$set(t.functionForm,"is_set_public_num",a)},expression:"functionForm.is_set_public_num"}},[a("a-radio",{attrs:{value:1}},[t._v("强制关注")]),a("a-radio",{attrs:{value:2}},[t._v("可选关注")]),a("a-radio",{attrs:{value:3}},[t._v("无需关注")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"【新/老版工单】：默认为启用当前配置，启用后，后台新/老版工单的入口都展示，管理端也展示新/老版工单入口，老版工单后台支持创建工单；【新版工单】：启用当前配置时，老版工单的后台/管理端入口不展示。只展示新版工单；【新/版工单清晰版】：启用当前配置时，展示后台的新/老版工单入口（老版工单不能创建工单，只允许查看已有的工单数据），管理端只展示新版工单入口，老版不展示。","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"新/老版工单启用",prop:"works_order_switch",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.works_order_switch,callback:function(a){t.$set(t.functionForm,"works_order_switch",a)},expression:"functionForm.works_order_switch"}},[a("a-radio",{attrs:{value:0}},[t._v("新/老版工单")]),a("a-radio",{attrs:{value:1}},[t._v("新版工单")]),a("a-radio",{attrs:{value:2}},[t._v("新/版工单清晰版")])],1)],1)],1),a("a-tooltip",{attrs:{placement:"top",title:"默认启用新/老版停车，启用新/老版停车时，新/老版的智慧停车模块都显示；启用新版停车时，老版智慧停车入口隐藏（车位管理、车辆管理、“智能硬件-智慧停车“功能）","get-popup-container":t.getPopupContainer}},[a("a-form-model-item",{attrs:{label:"新/老版停车配置",prop:"park_new_switch",extra:""}},[a("a-radio-group",{on:{change:t.onChange},model:{value:t.functionForm.park_new_switch,callback:function(a){t.$set(t.functionForm,"park_new_switch",a)},expression:"functionForm.park_new_switch"}},[a("a-radio",{attrs:{value:1}},[t._v("启用新版停车")]),a("a-radio",{attrs:{value:2}},[t._v("启用新/老版停车")])],1)],1)],1)],2)],1),a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{bordered:!1}},[a("template",{slot:"title"},[a("a-icon",{attrs:{type:"unlock"}}),t._v(" 其他配置 ")],1)],2)],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),a("a-button",{staticStyle:{"margin-left":"10px"},on:{click:t.resetForm}},[t._v("重置")])],1)],1)],1)},r=[],n=o("8bbf"),i=o.n(n),p=o("f91f"),l=o("2f42"),u=o.n(l),c=Object(p["c"])({name:"functionSet",setup:function(t,a){var o=Object(p["h"])({}),e=Object(p["h"])({span:4}),r=Object(p["h"])({span:14}),n=Object(p["h"])(null),l=Object(p["g"])({}),c=function(){i.a.prototype.$confirm({title:"提示",content:"确定要保存此表单内容吗？",onOk:function(){n.value.validate((function(t){t&&m()}))},onCancel:function(){}})},s=function(){baseSetForm.value={},n.value.resetFields()},m=function(){i.a.prototype.request("/community/village_api.VillageConfig/villageInfoUpdate",baseSetForm.value).then((function(t){i.a.prototype.$message.success("保存成功！")}))},_=function(t){console.log(t)};return Object(p["f"])((function(){})),{functionForm:o,labelCol:e,wrapperCol:r,ruleForm:n,rules:l,onSubmit:c,resetForm:s,saveForm:m,onChange:_,moment:u.a}}}),s=c,m=(o("8e0a"),o("0b56")),_=Object(m["a"])(s,e,r,!1,null,"2a20d0c4",null);a["default"]=_.exports}}]);