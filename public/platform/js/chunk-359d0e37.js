(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-359d0e37","chunk-a5ec54be","chunk-a538a192"],{"05cf":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cloudintercom"},[a("div",{staticClass:"search-box"},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:15}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[e._v("姓名：")]),a("a-input",{staticClass:"select_position",attrs:{placeholder:"请输入姓名"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}}),a("p",{staticStyle:{"margin-top":"5px"}},[e._v("非机动车卡：")]),a("a-input",{staticClass:"select_position",attrs:{placeholder:"请输入非机动车卡"},model:{value:e.search.nmvCard,callback:function(t){e.$set(e.search,"nmvCard",t)},expression:"search.nmvCard"}}),a("p",{staticStyle:{"margin-top":"5px"}},[e._v("剩余天数：")]),a("a-input",{staticClass:"select_position",attrs:{placeholder:"请输入剩余天数"},model:{value:e.search.surplusDays,callback:function(t){e.$set(e.search,"surplusDays",t)},expression:"search.surplusDays"}}),a("p",{staticStyle:{"margin-top":"5px"}},[e._v("状态：")]),a("a-select",{staticClass:"select_position",model:{value:e.search.status,callback:function(t){e.$set(e.search,"status",t)},expression:"search.status"}},[a("a-select-option",{attrs:{value:0}},[e._v("请选择状态")]),a("a-select-option",{attrs:{value:1}},[e._v("已到期")]),a("a-select-option",{attrs:{value:2}},[e._v("未到期")]),a("a-select-option",{attrs:{value:3}},[e._v("未缴费")])],1)],1)],1),a("a-col",{staticStyle:{"margin-right":"10px"},attrs:{span:1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.getNmvCardList(1)}}},[e._v("查询")])],1),a("a-col",{attrs:{span:1}},[a("a-button",{on:{click:function(t){return e.resetList()}}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"add-box"},[a("a-row",[a("a-col",{attrs:{span:4}},[a("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px"},attrs:{title:"确认通知?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.payNotice(0,"batch")}}},[a("a-button",{attrs:{type:"primary"}},[e._v("批量通知")])],1)],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,rowKey:"id","row-selection":e.rowSelection,pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.paymentRecordPage(i.id)}}},[e._v("缴费记录")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px"},attrs:{title:"确认通知?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.payNotice(i.id,"single")}}},[a("a",[e._v("一键通知")])])],1)}}])}),e.visible?a("a-modal",{attrs:{title:"缴费记录",width:900,visible:e.visible,footer:null,maskClosable:!1},on:{cancel:e.handleCancel}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columnsOrder,"data-source":e.dataOrder,rowKey:"order_id",pagination:e.paginationOrder,loading:e.loadingOrder},on:{change:e.table_changeOrder}})],1):e._e()],1)},s=[],r=(a("ac1f"),a("841c"),a("a0e0")),n=[{title:"姓名",dataIndex:"name",key:"name"},{title:"非机动车卡",dataIndex:"nmv_card",key:"nmv_card"},{title:"到期时间",dataIndex:"expiration_time",key:"expiration_time"},{title:"剩余天数",dataIndex:"surplus_days",key:"surplus_days"},{title:"状态",dataIndex:"status",key:"status"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],o=[{title:"支付类型",dataIndex:"type_name",key:"type_name"},{title:"支付金额",dataIndex:"pay_money",key:"pay_money"},{title:"支付时间",dataIndex:"pay_time",key:"pay_time"},{title:"支付方式",dataIndex:"pay_type",key:"pay_type"},{title:"支付状态",dataIndex:"is_paid",key:"is_paid"}],l=[],c=[],d={name:"paymentRecord",data:function(){return{labelCol:{span:4},wrapperCol:{span:14},pagination:{current:1,pageSize:10,total:10},paginationOrder:{current:1,pageSize:10,total:10},search:{keyword:"",nmvCard:"",page:1,surplusDays:"",status:0},loading:!1,card_id:0,loadingOrder:!1,columns:n,columnsOrder:o,data:l,dataOrder:c,villageId:"",visible:!1,selectedSendUser:[]}},mounted:function(){this.getNmvCardList()},computed:{rowSelection:function(){var e=this;return{onChange:function(t,a){e.selectedSendUser=t}}}},methods:{getNmvCardList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===t&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.request(r["a"].getNmvCardList,this.search).then((function(t){console.log(t),e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1}))},paymentRecordPage:function(e){this.card_id=e,this.getNmvChargeOrderList(0,e),this.visible=!0},getNmvChargeOrderList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;this.loadingOrder=!0;var i={id:a};1===t&&this.$set(this.paginationOrder,"current",1),i["page"]=this.paginationOrder.current,this.request(r["a"].getNmvChargeOrderList,i).then((function(t){e.paginationOrder.total=t.count?t.count:0,e.paginationOrder.pageSize=t.total_limit?t.total_limit:10,e.dataOrder=t.list,e.loadingOrder=!1}))},resetList:function(){this.$set(this.pagination,"current",1),this.search={keyword:"",nmvCard:"",page:1,surplusDays:"",status:0},this.getNmvCardList()},table_change:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.pagination,"current",e.current),t.getNmvCardList())},table_changeOrder:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.paginationOrder,"current",e.current),t.getNmvChargeOrderList(0,this.card_id))},handleCancel:function(){this.visible=!1,this.$set(this.paginationOrder,"current",1),this.getNmvCardList()},payNotice:function(e,t){var a=this;if("single"===t)this.selectedSendUser=[e];else if(this.selectedSendUser.length<1)return this.$message.error("请先选择需要通知的用户"),!1;var i={send:this.selectedSendUser};this.request(r["a"].sendNmvMessage,i).then((function(e){a.$message.success("操作成功"),a.getNmvCardList()}))}}},u=d,h=(a("286e"),a("0c7c")),p=Object(h["a"])(u,i,s,!1,null,null,null);t["default"]=p.exports},"0c18":function(e,t,a){"use strict";a("6206")},"286e":function(e,t,a){"use strict";a("9fa9")},"3e74":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cloudintercom"},[e._m(0),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:12}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[e._v("收费项目名称：")]),a("a-input",{staticStyle:{width:"160px","margin-right":"10px"},attrs:{placeholder:"请输入收费项目名称"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}}),a("p",{staticStyle:{"margin-top":"5px"}},[e._v("收费类型：")]),a("a-select",{staticStyle:{width:"150px","margin-right":"10px"},model:{value:e.search.type,callback:function(t){e.$set(e.search,"type",t)},expression:"search.type"}},[a("a-select-option",{attrs:{value:0}},[e._v("请选择状态")]),a("a-select-option",{attrs:{value:1}},[e._v("每天")]),a("a-select-option",{attrs:{value:2}},[e._v("每月")]),a("a-select-option",{attrs:{value:3}},[e._v("每年")])],1),a("p",{staticStyle:{"margin-top":"5px"}},[e._v("状态：")]),a("a-select",{staticStyle:{width:"150px","margin-right":"10px"},model:{value:e.search.status,callback:function(t){e.$set(e.search,"status",t)},expression:"search.status"}},[a("a-select-option",{attrs:{value:-1}},[e._v("请选择状态")]),a("a-select-option",{attrs:{value:1}},[e._v("启用")]),a("a-select-option",{attrs:{value:0}},[e._v("禁用")])],1)],1)],1),a("a-col",{staticStyle:{"margin-right":"10px"},attrs:{span:1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.getNmvChargeList(1)}}},[e._v("查询")])],1),a("a-col",{attrs:{span:1}},[a("a-button",{on:{click:function(t){return e.resetList()}}},[e._v("重置")])],1)],1),a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.editNmvChargePage(e.info,"add")}}},[e._v("新增非机动车收费标准")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,rowKey:"id",loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.editNmvChargePage(i,"edit")}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.editNmvCharge(i.id,"del")}}},[e._v("删除")])],1)}}])}),a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1},on:{cancel:e.handleCancel,ok:e.handleSubmit}},[a("a-form",{staticClass:"third_user_info",attrs:{form:e.checkForm,labelAlign:"left"}},[a("a-form-item",{attrs:{label:"收费项目名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,placeholder:"请输入收费项目名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nmvChargeName",{initialValue:e.info.nmvChargeName,rules:[{required:!0,message:"请输入收费项目名称!"}]}],expression:"['nmvChargeName', { initialValue: info.nmvChargeName, rules: [{ required: true, message: '请输入收费项目名称!' }] }]"}]})],1),a("a-form-item",{attrs:{label:"收费类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:e.info.type,rules:[{required:!0}]}],expression:"['type', { initialValue: info.type, rules: [{ required: true }] }]"}]},[a("a-radio",{attrs:{value:1}},[e._v("每天")]),a("a-radio",{attrs:{value:2}},[e._v("每月")]),a("a-radio",{attrs:{value:3}},[e._v("每年")])],1)],1),a("a-form-item",{attrs:{label:"收费标准金额",labelCol:e.labelCol,wrapperCol:e.wrapperCol,placeholder:"请输入收费标准金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["price",{initialValue:e.info.price,rules:[{required:!0,message:"请输入收费标准金额!"}]}],expression:"['price', { initialValue: info.price, rules: [{ required: true, message: '请输入收费标准金额!' }] }]"}],staticStyle:{width:"150px"},attrs:{min:0,precision:2}})],1),a("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:e.info.status,rules:[{required:!0}]}],expression:"['status', { initialValue: info.status, rules: [{ required: true }] }]"}]},[a("a-radio",{attrs:{value:1}},[e._v("启用")]),a("a-radio",{attrs:{value:0}},[e._v("禁用")])],1)],1)],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"page_top"},[e._v(" 1、自然月天数计算：收费的起止时间根据每月的实际天数计算费用。若足月的情兄下按照自然月计算,不足月的情况下按照天数计算;"),a("br"),e._v(" 2、一个月天数计算：收费的起止时间为根据每月的实际天数往后计算一个月费用;"),a("br"),e._v(" 3、收费类型为每天：起始时间为当天的时间。例：2021-12-04 15:20:21至2021-12-04 23:59:59;"),a("br"),e._v(" 4、收费类型为每月：起始时间为一个月的时间。例：2021-12-01至2021-12-31;"),a("br"),e._v(" 5、收费类型为每年：起始时间为一年的时间。例：2021-12-04至2022-12-03;"),a("br"),a("span",{staticClass:"notice"},[e._v('注意：收费的起始时间跟开启的"自然月天数或一个月天数"有关联')])])}],r=(a("ac1f"),a("841c"),a("a0e0")),n=[{title:"收费项目名称",dataIndex:"nmv_charge_name",key:"nmv_charge_name"},{title:"收费类型",dataIndex:"type_text",key:"type_text"},{title:"收费标准金额",dataIndex:"price",key:"price"},{title:"状态",dataIndex:"status_text",key:"status_text"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],o=[],l={name:"nmvChargeRule",data:function(){return{labelCol:{span:4},wrapperCol:{span:14},pagination:{current:1,pageSize:10,total:10},search:{keyword:"",type:0,status:-1,page:1},loading:!1,columns:n,data:o,visible:!1,title:"编辑",type:"edit",checkForm:this.$form.createForm(this),info:{id:"",nmvChargeName:"",type:1,price:"",status:0}}},mounted:function(){this.getNmvChargeList()},methods:{getNmvChargeList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===t&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.request(r["a"].getNmvChargeList,this.search).then((function(t){console.log(t),e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1}))},resetList:function(){this.$set(this.pagination,"current",1),this.search={keyword:"",type:0,status:-1,page:1},this.getNmvChargeList()},table_change:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.pagination,"current",e.current),t.getNmvChargeList())},editNmvChargePage:function(e,t){this.visible=!0,this.type=t,this.title="edit"===t?"编辑":"添加",this.info={id:e["id"],nmvChargeName:e["nmv_charge_name"],type:e["type"],price:e["price"],status:e["status"]}},editNmvCharge:function(e,t){var a=this,i={type:t,id:e,info:this.info};this.request(r["a"].editNmvChargeInfo,i).then((function(e){a.$message.success(e.message),a.handleCancel()}))},handleCancel:function(){var e=this;this.visible=!1,this.info={id:"",nmvChargeName:"",type:1,price:"",status:0},this.type="",this.getNmvChargeList(),setTimeout((function(){e.checkForm=e.$form.createForm(e)}),500)},handleSubmit:function(){var e=this;this.checkForm.validateFields((function(t,a){t||(e.info.nmvChargeName=a["nmvChargeName"],e.info.type=a["type"],e.info.price=a["price"],e.info.status=a["status"])})),this.editNmvCharge(this.info.id,this.type)}}},c=l,d=(a("b217"),a("0c7c")),u=Object(d["a"])(c,i,s,!1,null,null,null);t["default"]=u.exports},"442f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cloudintercom"},[a("a-tabs",{attrs:{"default-active-key":"1"},on:{tabClick:e.refreshInfo}},[a("a-tab-pane",{key:"1",attrs:{tab:"基本配置"}},[a("span",{staticClass:"page_top"},[e._v(" 1、clientId和clientSecret是必填参数，不填则无法使用该功能，该参数来源设备方"),a("br"),e._v(" 2、人脸数据接收接口：提供给设备方，用于推送人脸数据到平台的接口"),a("br"),e._v(" 3、设备信息接收接口：提供给设备方，用于推送设备信息数据到平台的接口"),a("br"),e._v(" 4、设备心跳接收接口：提供给设备方，用于推送设备心跳到平台的接口"),a("br"),e._v(" 5、权限信息反馈接口：提供给设备方，用于推送下发设备人员权限信息反馈信息到平台的接口"),a("br"),e._v(" 6、流水数据接收接口：提供给设备方，用于推送人员开门信息到平台的接口"),a("br")]),"1"===e.tabKsy?a("a-form-model",{attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"clientId",prop:"clientId"}},[a("a-input",{model:{value:e.form.clientId,callback:function(t){e.$set(e.form,"clientId",t)},expression:"form.clientId"}})],1),a("a-form-model-item",{attrs:{label:"clientSecret",prop:"clientSecret"}},[a("a-input",{model:{value:e.form.clientSecret,callback:function(t){e.$set(e.form,"clientSecret",t)},expression:"form.clientSecret"}})],1),a("a-form-model-item",{attrs:{label:"小区唯一标识"}},[a("a-input",{model:{value:e.form.villageCode,callback:function(t){e.$set(e.form,"villageCode",t)},expression:"form.villageCode"}})],1),a("a-form-model-item",{attrs:{label:"人脸数据接收接口"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.receiveUserInfo,callback:function(t){e.$set(e.form,"receiveUserInfo",t)},expression:"form.receiveUserInfo"}})],1),a("a-form-model-item",{attrs:{label:"设备信息接收接口"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.receiveDeviceInfo,callback:function(t){e.$set(e.form,"receiveDeviceInfo",t)},expression:"form.receiveDeviceInfo"}})],1),a("a-form-model-item",{attrs:{label:"设备心跳接收接口"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.receiveDeviceHeartbeat,callback:function(t){e.$set(e.form,"receiveDeviceHeartbeat",t)},expression:"form.receiveDeviceHeartbeat"}})],1),a("a-form-model-item",{attrs:{label:"权限信息反馈接口"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.receiveDeviceAuth,callback:function(t){e.$set(e.form,"receiveDeviceAuth",t)},expression:"form.receiveDeviceAuth"}})],1),a("a-form-model-item",{attrs:{label:"流水数据接收接口"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.receiveFlowData,callback:function(t){e.$set(e.form,"receiveFlowData",t)},expression:"form.receiveFlowData"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:5,offset:10}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.saveCloudIntercomConfig}},[e._v(" 保存 ")])],1)],1):e._e()],1),a("a-tab-pane",{key:"2",attrs:{tab:"数据审核","force-render":""}},["2"===e.tabKsy?a("div",{staticClass:"cloudintercom"},[a("span",{staticClass:"page_top"},[e._v(" 1、显示平台推送的人脸数据信息并进行审核，通过后下发到设备"),a("br"),e._v(" 2、由于人员下发设备是异步的，人脸审核列表会每10秒刷新一次，更新下发状态"),a("br"),e._v(" 3、下发人员至设备会自动下发到所有朵普的人行通道类型的设备上"),a("br"),a("span",{staticClass:"notice"},[e._v(" 注意："),a("br"),e._v(" 1、全选框只能选中当前页的人员，如需选中全部人员，需要每页都点击选中全选框"),a("br"),e._v(" 2、设备通道类型设置一定要与实际设备一致，否则会导致人脸信息下发到错误的设备上，导致无法人脸识别开门"),a("br"),e._v(" 3、人脸数据移除仅移除所有设备中的该人脸信息，并不会真的删除数据，下发状态会重新变为未下发状态，被移除人员可以重新下发，不需要审核 ")])]),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:4}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[e._v("审核状态：")]),a("a-select",{staticStyle:{width:"150px"},model:{value:e.search.check_status,callback:function(t){e.$set(e.search,"check_status",t)},expression:"search.check_status"}},[a("a-select-option",{attrs:{value:"0"}},[e._v("请选择状态")]),a("a-select-option",{attrs:{value:"1"}},[e._v("未审核")]),a("a-select-option",{attrs:{value:"2"}},[e._v("审核通过")]),a("a-select-option",{attrs:{value:"3"}},[e._v("审核拒绝")])],1)],1)],1),a("a-col",{attrs:{span:4}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[e._v("下发状态：")]),a("a-select",{staticStyle:{width:"150px"},model:{value:e.search.device_status,callback:function(t){e.$set(e.search,"device_status",t)},expression:"search.device_status"}},[a("a-select-option",{attrs:{value:"0"}},[e._v("请选择状态")]),a("a-select-option",{attrs:{value:"1"}},[e._v("未下发")]),a("a-select-option",{attrs:{value:"2"}},[e._v("下发成功")]),a("a-select-option",{attrs:{value:"3"}},[e._v("下发失败")])],1)],1)],1),a("a-col",{attrs:{span:3}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[e._v("姓名：")]),a("a-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入姓名"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1)],1),a("a-col",{staticStyle:{"margin-right":"10px"},attrs:{span:1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.getFaceDataList(1)}}},[e._v(" 查询 ")])],1),a("a-col",{attrs:{span:1}},[a("a-button",{on:{click:function(t){return e.resetList()}}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"add-box"},[a("a-row",[a("a-col",{attrs:{span:4}},[a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认下发到所有设备吗?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(t){return e.sendUserToDevice(0,"batch")}}},[a("a-button",{attrs:{type:"primary"}},[e._v(" 批量下发 ")])],1)],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,rowKey:"third_user_id","row-selection":e.rowSelection,pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"image",fn:function(e,t){return a("span",{},[a("img",{staticStyle:{height:"50px"},attrs:{src:t.img_url}})])}},{key:"action",fn:function(t,i){return a("span",{},[0===i.check_status?a("a",{on:{click:function(t){return e.checkThirdUser(i.third_user_id,"check")}}},[e._v("审核")]):e._e(),i.check_status>0?a("a",{on:{click:function(t){return e.checkThirdUser(i.third_user_id,"see")}}},[e._v("查看")]):e._e(),i.check_status>0?a("a",{on:{click:function(t){return e.checkThirdUser(i.third_user_id,"check")}}},[e._v(" | 重新审核")]):e._e(),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认下发到所有设备吗?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(t){return e.sendUserToDevice(i.third_user_id,"single")}}},[1===i.check_status?a("a",[e._v(" | 下发")]):e._e()]),1===i.check_status?a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认移除该人员在所有设备的人脸信息吗?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(t){return e.sendUserToDevice(i.third_user_id,"single","del")}}},[a("a",[e._v(" | 移除")])]):e._e()],1)}}],null,!1,2837969751)}),e.visible?a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1},on:{cancel:e.handleCancel}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("取消")]),e.footerShow?a("a-button",{key:"submit",attrs:{type:"primary",loading:e.type},on:{click:e.handleSubmit}},[e._v("确认")]):e._e()],1),a("div",[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作提示说明"}},[a("p",{staticClass:"page_top"},[e._v(" 1、匹配流程：使用推送数据的姓名和推送数据的房间号进行匹配，如果查询不到，再使用手机号进行匹配。"),a("br"),e._v(" 2、匹配规则："),a("br"),e._v(" ①如果用户在系统中的名称和推送的姓名一致，且房间号推送的也是正确的，则可以匹配上，否则推送姓名和房间号有一个没有匹配上，都不能匹配成功"),a("br"),e._v(" ②如果用户在系统中的名称和推送的姓名一致，但是推送的地址没有房间号（例：四川省南充市营山县复兴路432号），则只进行姓名匹配"),a("br"),e._v(" ③如果以上都未匹配到用户，则使用手机号匹配，防止推送姓名和系统姓名不一致问题"),a("br"),a("span",{staticClass:"notice"},[e._v(" 注意："),a("br"),e._v(" 1、推送信息地址一定要包含房间号，因为用户不一定保存身份证号，大多数情况下都是使用姓名和房间号匹配，如果不推送房间号，容易出现同名占用的情况"),a("br"),e._v(" 2、手机号不确定填写的是否是本人的手机号或者是正确的手机号，所以作为最后的匹配规则"),a("br"),e._v(" 3、由于目前很多业主名称都是家人名字拼接而成，多人公安数据不能只绑定一条业主数据，所以匹配时的姓名是全匹配，不是包含"),a("br"),e._v(" 4、由于现在房间选择放松锁死条件，所以请务必注意业主真实房间是否与推送的房间一致 ")])])])],1)],1),a("a-form",{staticClass:"third_user_info",attrs:{form:e.checkForm}},[a("a-form-item",{attrs:{label:"人员唯一识别UUID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{value:e.info.thirdRyid,disabled:e.checkDisabled}})],1),a("a-form-item",{attrs:{label:"姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{value:e.info.thirdXm,disabled:e.checkDisabled}})],1),a("a-form-item",{attrs:{label:"身份证",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{value:e.info.thirdZjhm,disabled:e.checkDisabled}})],1),a("a-form-item",{attrs:{label:"手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{value:e.info.phone,disabled:e.checkDisabled}})],1),a("a-form-item",{attrs:{label:"地址信息",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{value:e.info.thirdJzdDzxz,disabled:e.checkDisabled}})],1),a("a-form-item",{attrs:{label:"照片",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("img",{staticStyle:{height:"100px"},attrs:{src:e.info.imgUrl}})]),a("a-form-item",{attrs:{label:"审核状态(必选)",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{attrs:{disabled:e.clickType},model:{value:e.info.checkStatus,callback:function(t){e.$set(e.info,"checkStatus",t)},expression:"info.checkStatus"}},[a("a-radio",{attrs:{value:1}},[e._v("通过")]),a("a-radio",{attrs:{value:2}},[e._v("拒绝")])],1)],1),1===e.info.checkStatus?a("a-form-item",{attrs:{label:"选择房间(必选)",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{staticClass:"select_room",attrs:{disabled:e.info.isLockAddress},on:{change:e.handleChangeFloor},model:{value:e.singleName,callback:function(t){e.singleName=t},expression:"singleName"}},e._l(e.singleList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t["single_id"]}},[e._v(e._s(t["single_name"]))])})),1),a("a-select",{staticClass:"select_room",attrs:{disabled:e.info.isLockAddress},on:{change:e.handleChangeLayer},model:{value:e.floorName,callback:function(t){e.floorName=t},expression:"floorName"}},e._l(e.floorList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t["floor_id"]}},[e._v(e._s(t["floor_name"]))])})),1),a("a-select",{staticClass:"select_room",attrs:{disabled:e.info.isLockAddress},on:{change:e.handleChangeRoom},model:{value:e.layerName,callback:function(t){e.layerName=t},expression:"layerName"}},e._l(e.layerList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t["layer_id"]}},[e._v(e._s(t["layer"]))])})),1),a("a-select",{staticClass:"select_room",attrs:{disabled:e.info.isLockAddress},model:{value:e.roomName,callback:function(t){e.roomName=t},expression:"roomName"}},e._l(e.roomList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t["room_id"]}},[e._v(e._s(t["room"]))])})),1)],1):e._e(),1===e.info.checkStatus?a("a-form-item",{attrs:{label:"关系(必选)",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{attrs:{disabled:e.info.isMatching},model:{value:e.info.type,callback:function(t){e.$set(e.info,"type",t)},expression:"info.type"}},[a("a-radio",{attrs:{value:0,disabled:e.info.isOwner}},[e._v("业主")]),a("a-radio",{attrs:{value:1}},[e._v("亲属")]),a("a-select",{staticClass:"select_room",attrs:{disabled:e.info.isMatching},model:{value:e.info.relativesType,callback:function(t){e.$set(e.info,"relativesType",t)},expression:"info.relativesType"}},e._l(e.info.relativesTypeList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t["id"]}},[e._v(e._s(t["name"]))])})),1),a("a-radio",{attrs:{value:2}},[e._v("租客")]),a("a-radio",{attrs:{value:4}},[e._v("工作人员")])],1)],1):e._e(),1===e.info.checkStatus?a("a-form-item",{attrs:{label:"备注",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{type:"textarea",disabled:e.clickType},model:{value:e.memo,callback:function(t){e.memo=t},expression:"memo"}})],1):e._e(),2===e.info.checkStatus?a("a-form-item",{attrs:{label:"拒绝原因(必填)",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{type:"textarea",disabled:e.clickType},model:{value:e.info.checkReason,callback:function(t){e.$set(e.info,"checkReason",t)},expression:"info.checkReason"}})],1):e._e()],1)],2):e._e(),e.visibleSyn?a("a-modal",{attrs:{title:e.titleSyn,width:500,visible:e.visibleSyn,maskClosable:!1},on:{cancel:e.handleCancel,ok:e.handleSubmitSyn}},[a("a-form",{staticClass:"third_user_info"},[a("a-form-item",{attrs:{label:"设备ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{staticStyle:{width:"263px"},attrs:{labelInValue:"",placeholder:"请选择设备"},on:{change:e.handleChangeDevice},model:{value:e.device.deviceSn,callback:function(t){e.$set(e.device,"deviceSn",t)},expression:"device.deviceSn"}},e._l(e.deviceList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t["device_name"]}},[e._v(e._s(t["device_sn"]))])})),1)],1),a("a-form-item",{attrs:{label:"设备名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{staticStyle:{width:"263px"},attrs:{labelInValue:"",disabled:!0,placeholder:"请选择设备"},on:{change:e.handleChangeDevice},model:{value:e.device.deviceName,callback:function(t){e.$set(e.device,"deviceName",t)},expression:"device.deviceName"}},e._l(e.deviceList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t["device_name"]}},[e._v(e._s(t["device_name"]))])})),1)],1)],1)],1):e._e()],1):e._e()]),e.huizhisq?a("a-tab-pane",{key:"3",attrs:{tab:"设备管理"}},["3"===e.tabKsy?a("div",{staticClass:"cloudintercom"},[a("iframe",{staticStyle:{border:"none"},attrs:{src:e.deviceUrl,width:"100%",height:"900px",id:"fram_box"},on:{load:e.loadFrame}})]):e._e()]):e._e(),e.huizhisq?a("a-tab-pane",{key:"4",attrs:{tab:"电动车收费规则"}},["4"===e.tabKsy?a("nmvChargeRule",{ref:"NmvChargeRule"}):e._e()],1):e._e(),e.huizhisq?a("a-tab-pane",{key:"5",attrs:{tab:"缴费记录"}},["5"===e.tabKsy?a("paymentRecord",{ref:"PaymentRecord"}):e._e()],1):e._e()],1)],1)},s=[],r=(a("7d24"),a("dfae")),n=(a("d3b7"),a("25f0"),a("ac1f"),a("841c"),a("07ac"),a("a0e0")),o=a("3e74"),l=a("05cf"),c=[{title:"人员唯一识别UUID",dataIndex:"third_ryid",key:"third_ryid"},{title:"姓名",dataIndex:"third_xm",key:"third_xm"},{title:"性别",dataIndex:"third_xbdm",width:60,key:"third_xbdm"},{title:"身份证",dataIndex:"third_zjhm",key:"third_zjhm"},{title:"手机号",dataIndex:"phone",width:140,key:"phone"},{title:"地址信息",dataIndex:"third_jzd_dzxz",key:"third_jzd_dzxz"},{title:"照片",dataIndex:"img_url",key:"img_url",scopedSlots:{customRender:"image"}},{title:"审核状态",dataIndex:"check_status_text",key:"check_status_text"},{title:"下发状态",dataIndex:"device_status_text",key:"device_status_text"},{title:"操作",dataIndex:"operation",key:"operation",width:210,scopedSlots:{customRender:"action"}}],d=[],u={name:"cloudIntercom",components:{nmvChargeRule:o["default"],paymentRecord:l["default"],"a-collapse":r["a"],"a-collapse-panel":r["a"].Panel},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},pagination:{current:1,pageSize:10,total:10},search:{keyword:"",check_status:"0",device_status:"0",page:1},loading:!1,columns:c,data:d,check_status:"请选择状态",device_status:"请选择状态",huizhisq:!1,form:{isOpen:"2",clientId:"",clientSecret:"",villageCode:"",receiveUserInfo:"",receiveDeviceInfo:"",receiveDeviceHeartbeat:"",receiveDeviceAuth:"",receiveFlowData:""},rules:{clientId:[{required:!0}],clientSecret:[{required:!0}]},villageId:"",title:"审核",titleSyn:"下发",visible:!1,visibleSyn:!1,type:!1,clickType:!1,footerShow:!0,memo:"",thirdUserId:0,checkForm:this.$form.createForm(this),info:{thirdRyid:"",thirdXm:"",thirdXbdm:"",thirdZjhm:"",thirdJzdDzxz:"",phone:"",imgUrl:"",checkStatus:1,isMatching:!1,type:"0",matchingUid:0,relativesType:"",checkReason:"",isOwner:!1,isLockAddress:!1,relativesTypeList:[]},checkDisabled:!0,singleName:"",floorName:"",layerName:"",roomName:"",singleList:[],floorList:[],layerList:[],roomList:[],nmvChargeRule:!1,paymentRecord:!1,deviceUrl:"",selectedThirdUser:[],device:{deviceSn:{},deviceName:{}},deviceList:[],tabKsy:"1",setInterval:null}},mounted:function(){this.getConfig(),this.getFaceDataList()},destroyed:function(){clearInterval(this.setInterval)},computed:{rowSelection:function(){var e=this;return{onChange:function(t,a){console.log(t,a),e.selectedThirdUser=t},getCheckboxProps:function(e){return{props:{disabled:1!==e.check_status,name:e.check_status_text}}}}}},methods:{getConfig:function(){var e=this;this.request(n["a"].getCloudIntercomConfig).then((function(t){e.form.isOpen=t.isOpen.toString(),e.form.clientId=t.clientId,e.form.clientSecret=t.clientSecret,e.form.villageCode=t.villageCode,e.form.receiveUserInfo=t.receiveUserInfo,e.form.receiveDeviceInfo=t.receiveDeviceInfo,e.form.receiveDeviceHeartbeat=t.receiveDeviceHeartbeat,e.form.receiveDeviceAuth=t.receiveDeviceAuth,e.form.receiveFlowData=t.receiveFlowData,e.villageId=t.village_id,e.huizhisq=t.huizhisq}))},refreshInfo:function(e){this.tabKsy=e,console.log("refreshInfo=============",e),"2"!==e?clearInterval(this.setInterval):this.timingTask(),"1"===e?this.getConfig():"2"===e?(this.getFaceDataList(),this.type=!1):"3"===e&&(this.deviceUrl=window.location.origin+"/shequ.php?g=House&c=Face_door&a=door_list&iframe=true&device_type=29&t="+Date.parse(new Date))},saveCloudIntercomConfig:function(){var e=this,t={isOpen:this.form.isOpen,clientId:this.form.clientId,clientSecret:this.form.clientSecret,villageCode:this.form.villageCode};this.request(n["a"].saveCloudIntercomConfig,t).then((function(t){e.$message.success("保存成功"),e.getConfig()}))},table_change:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.pagination,"current",e.current),t.getFaceDataList())},getFaceDataList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===t&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.request(n["a"].getFaceDataList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1}))},resetList:function(){this.$set(this.pagination,"current",1),this.search={keyword:"",check_status:"0",device_status:"0",page:1},this.check_status="请选择状态",this.device_status="请选择状态",this.getFaceDataList()},checkThirdUser:function(e,t){"check"===t?(this.title="编辑",this.clickType=!1,this.footerShow=!0,this.type=!1,this.handleChangeSingle()):(this.title="查看",this.footerShow=!1,this.clickType=!0),this.getThirdUserInfo(e),this.visible=!0,this.thirdUserId=e},getThirdUserInfo:function(e){var t=this,a={third_user_id:e};this.request(n["a"].getThirdUserInfo,a).then((function(e){t.info.thirdRyid=e.third_ryid,t.info.thirdXm=e.third_xm,t.info.thirdXbdm=e.third_xbdm,t.info.thirdZjhm=e.third_zjhm,t.info.thirdJzdDzxz=e.third_jzd_dzxz,t.info.phone=e.phone,t.info.imgUrl=e.img_url,t.info.checkStatus=e.check_status?e.check_status:1,t.info.isMatching=e.is_matching,t.info.matchingUid=e.matching_uid,t.info.relativesType=e.relatives_type,t.info.type=e.type,t.info.relativesTypeList=e.relativesTypeList,t.info.checkReason=e.check_reason,t.info.isOwner=e.is_owner,t.info.isLockAddress=e.is_lock_address,t.memo=e.memo,t.singleName="undefined"!==typeof e.addressInfo.single_name?e.addressInfo.single_name:"请选择楼栋",t.floorName="undefined"!==typeof e.addressInfo.floor_name?e.addressInfo.floor_name:"请选择单元",t.layerName="undefined"!==typeof e.addressInfo.layer_name?e.addressInfo.layer_name:"请选择楼层",t.roomName="undefined"!==typeof e.addressInfo.room?e.addressInfo.room:"请选择房间"}))},handleCancel:function(){var e=this;this.visible=!1,this.visibleSyn=!1,this.getFaceDataList(),this.device.deviceName="",this.device.deviceSn={},this.info.thirdRyid="",this.info.thirdXm="",this.info.thirdXbdm="",this.info.thirdZjhm="",this.info.thirdJzdDzxz="",this.info.phone="",this.info.imgUrl="",this.info.checkStatus=1,this.info.isMatching="",this.info.matchingUid="",this.info.relativesType="",this.info.type="",this.info.relativesTypeList="",this.info.checkReason="",this.info.isOwner="",this.info.isLockAddress=[],this.type=!1,setTimeout((function(){e.checkForm=e.$form.createForm(e)}),500)},handleSubmit:function(){var e=this;this.type=!0;var t={check_status:this.info.checkStatus,third_user_id:this.thirdUserId,isLockAddress:this.info.isLockAddress,isMatching:this.info.isMatching,matching_uid:this.info.matchingUid};if(2===this.info.checkStatus){if(this.info.checkReason.length<1)return this.$message.error("请填写拒绝理由"),this.type=!1,!1;t.check_reason=this.info.checkReason}else if(t.singleName=this.singleName,t.floorName=this.floorName,t.layerName=this.layerName,t.roomName=this.roomName,t.type=this.info.type,t.relatives_type=this.info.relativesType,t.memo=this.memo,"请选择房间"===this.roomName)return this.$message.error("请选择房间"),this.type=!1,!1;this.request(n["a"].editThirdUserInfo,t).then((function(t){e.type=!1,e.$message.success("操作成功"),e.visible=!1,e.getFaceDataList()})).catch((function(t){e.type=!1,console.log(t)}))},handleChangeSingle:function(){var e=this,t={village_id:this.villageId};this.request("/community/manage_api.v1.user/villageSingleList",t).then((function(t){e.singleList=t.list,e.floorList=[],e.roomList=[],e.layerList=[],e.floorName="请选择单元",e.layerName="请选择楼层",e.roomName="请选择房间"}))},handleChangeFloor:function(e){var t=this,a={village_id:this.villageId,single_id:e};this.request("/community/manage_api.v1.user/villageFloorList",a).then((function(e){t.floorList=e.list,t.roomList=[],t.layerList=[],t.floorName="请选择单元",t.layerName="请选择楼层",t.roomName="请选择房间"}))},handleChangeLayer:function(e){var t=this,a={village_id:this.villageId,floor_id:e};this.request("/community/manage_api.v1.user/villageLayerList",a).then((function(e){t.layerList=e.list,t.roomList=[],t.layerName="请选择楼层",t.roomName="请选择房间"}))},handleChangeRoom:function(e){var t=this,a={village_id:this.villageId,layer_id:e};this.request("/community/manage_api.v1.user/villageRoomList",a).then((function(e){t.roomList=e.list,t.roomName="请选择房间"}))},getFaceDeviceList:function(){var e=this;this.request(n["a"].getDeviceDataList).then((function(t){e.deviceList=t.list}))},handleChangeDevice:function(e){console.log(e),this.device.deviceName=e},deviceSyn:function(e,t){if("single"===t)this.titleSyn="下发",this.selectedThirdUser=[e];else if(this.titleSyn="批量下发",this.selectedThirdUser.length<1)return this.$message.error("请先选择下发设备的人员"),!1;this.visibleSyn=!0,this.getFaceDeviceList()},handleSubmitSyn:function(){var e=this,t=[];if("undefined"===typeof this.device.deviceSn.label?t=Object.values(this.device.deviceSn):t.push(this.device.deviceSn),t.length<1)return this.$message.error("请先选择下发设备"),!1;var a={device_sn:t,third_user:this.selectedThirdUser};this.request(n["a"].sendThirdUserToDevice,a).then((function(t){0===t.code?(e.$message.success(t.msg),e.handleCancel()):e.$message.error(t.msg)}))},loadFrame:function(){console.log("iframe============================");var e=document.getElementById("fram_box"),t=e.contentWindow.document,a=t.getElementById("HouseHelpBox");a.setAttribute("style","display:none")},sendUserToDevice:function(e,t){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add";"single"===t&&(this.selectedThirdUser=[e]);var s={third_user:this.selectedThirdUser,operation:i};this.request(n["a"].sendThirdUserToDevice,s).then((function(e){0===e.code?(a.$message.success(e.msg),a.handleCancel()):a.$message.error(e.msg)}))},timingTask:function(){var e=this;this.setInterval=setInterval((function(){e.getFaceDataList()}),1e4)}}},h=u,p=(a("0c18"),a("0c7c")),m=Object(p["a"])(h,i,s,!1,null,null,null);t["default"]=m.exports},6206:function(e,t,a){},"9fa9":function(e,t,a){},b217:function(e,t,a){"use strict";a("b34d")},b34d:function(e,t,a){}}]);