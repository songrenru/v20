(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0583db96","chunk-6c34b30f","chunk-1e332651","chunk-f8a496aa","chunk-2d0b3786"],{"1a83":function(e,t,i){"use strict";var a={passwordEdit:"/community/house_meter.AdminUser/passwordEdit",adminUserList:"/community/house_meter.AdminUser/adminUserList",adminUserAdd:"/community/house_meter.AdminUser/adminUserAdd ",adminUserEdit:"/community/house_meter.AdminUser/adminUserEdit",adminUserInfo:"/community/house_meter.AdminUser/adminUserInfo",adminUserDelete:"/community/house_meter.AdminUser/adminUserDelete",areaList:"/community/house_meter.AdminUser/areaList",villageBindList:"/community/house_meter.Power/villageBindList",meterVillageAdd:"/community/house_meter.Power/meterVillageAdd",meterVillageAddll:"/community/house_meter.Power/meterVillageAddll",meterVillageDelete:"/community/house_meter.Power/meterVillageDelete",getVillageInfo:"/community/house_meter.Power/getVillageInfo",meterElectricList:"/community/house_meter.MeterElectric/meterElectricList",meterElectricInfo:"/community/house_meter.MeterElectric/meterElectricInfo",meterElectricAdd:"/community/house_meter.MeterElectric/meterElectricAdd",meterElectricEdit:"/community/house_meter.MeterElectric/meterElectricEdit",meterElectricDelete:"/community/house_meter.MeterElectric/meterElectricDelete",getMeasureList:"/community/house_meter.MeterElectric/getMeasureList",switch:"/community/house_meter.MeterElectric/switch",meterReading:"/community/house_meter.MeterElectric/now_reading_electric",meterElectricGroupList:"/community/house_meter.MeterElectricGroup/meterElectricGroupList",meterElectricGroupAdd:"/community/house_meter.MeterElectricGroup/meterElectricGroupAdd",meterElectricGroupEdit:"/community/house_meter.MeterElectricGroup/meterElectricGroupEdit",meterElectricGroupInfo:"/community/house_meter.MeterElectricGroup/meterElectricGroupInfo",meterElectricSetInfo:"/community/house_meter.MeterElectric/meterElectricSetInfo",meterElectricSetEdit:"/community/house_meter.MeterElectric/meterElectricSetEdit",MeterReadingList:"/community/house_meter.MeterElectric/getMeterReadingList",getAreaList:"/community/house_meter.MeterElectricPrice/getAreaList",getAreaPriceList:"/community/house_meter.MeterElectricPrice/getAreaPriceList",meterElectricPriceAdd:"/community/house_meter.MeterElectricPrice/meterElectricPriceAdd",meterElectricPriceEdit:"/community/house_meter.MeterElectricPrice/meterElectricPriceEdit",payorderList:"/community/house_meter.MeterUserPayorder/payorderList",payorderPrint:"/community/house_meter.MeterUserPayorder/payorderPrint",getAreasList:"/community/house_meter.MeterElectric/getAreaList",getCommunityList:"/community/house_meter.MeterElectric/getCommunityList",getVillageList:"/community/house_meter.MeterElectric/getVillageList",getSingleList:"/community/house_meter.MeterElectric/getSingleList",getFloorList:"/community/house_meter.MeterElectric/getFloorList",getLayerList:"/community/house_meter.MeterElectric/getLayerList",getVacancyList:"/community/house_meter.MeterElectric/getVacancyList",uploadFile:"/community/house_meter.MeterElectric/uploadFile",getTongjiCount:"/community/house_meter.DataStatistics/getTongjiCount",getEleWarnList:"/community/house_meter.DataStatistics/getEleWarnList",powerConsumptionAnalysis:"/community/house_meter.DataStatistics/powerConsumptionAnalysis",deviceManage:"/community/house_meter.DataStatistics/deviceManage",powerConsumptionFeeAnalysis:"/community/house_meter.DataStatistics/powerConsumptionFeeAnalysis",getTongjiCountByCity:"/community/house_meter.DataStatistics/getTongjiCountByCity"};t["a"]=a},"22ea":function(e,t,i){},2909:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var a=i("6b75");function s(e){if(Array.isArray(e))return Object(a["a"])(e)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var n=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return s(e)||r(e)||Object(n["a"])(e)||o()}},3134:function(e,t,i){},3946:function(e,t,i){},5313:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{title:e.title,placement:"right",width:e.widthDrawer,closable:!0,visible:e.drawer_visible},on:{close:e.onClose}},[i("div",{staticClass:"top_box"},[i("div",{staticClass:"flex_text_box"},[i("div",{staticClass:"text_1"},[e._v("物业编号：")]),i("div",{staticClass:"text_2"},[e._v(e._s(e.user_info.usernum?e.user_info.usernum:"暂无"))])]),i("div",{staticClass:"flex_text_box"},[i("div",{staticClass:"text_1"},[e._v("业主：")]),i("div",{staticClass:"text_2"},[e._v(e._s(e.user_info.name?e.user_info.name:"暂无"))])]),i("div",{staticClass:"flex_text_box"},[i("div",{staticClass:"text_1"},[e._v("电话：")]),i("div",{staticClass:"text_2"},[e._v(e._s(e.user_info.phone?e.user_info.phone:"暂无"))])]),i("div",{staticClass:"flex_text_box"},[e.user_info.is_car_position?i("div",{staticClass:"text_1"},[e._v("车库号：")]):e._e(),e.user_info.is_houses_room?i("div",{staticClass:"text_1"},[e._v("房间号：")]):e._e(),i("div",{staticClass:"text_2"},[e._v(e._s(e.user_info.room?e.user_info.room:"暂无"))])]),e.user_info.is_houses_room?i("div",{staticClass:"flex_text_box"},[i("div",{staticClass:"text_1"},[e._v("房屋面积：")]),i("div",{staticClass:"text_2"},[e._v(e._s(e.user_info.housesize?e.user_info.housesize:"暂无"))])]):e._e(),e.user_info.is_car_position?i("div",{staticClass:"flex_text_box"},[i("div",{staticClass:"text_1"},[e._v("车场面积：")]),i("div",{staticClass:"text_2"},[e._v(e._s(e.user_info.position_area?e.user_info.position_area:"暂无"))])]):e._e()]),i("div",{staticClass:"message-suggestions-box-1"},[i("a-collapse",{attrs:{accordion:""}},[i("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[i("p",[e._v(" 1、可按房屋、车位查看所有的已缴账单明细，并且可以操作退款及打印账单，每笔已缴账单详细记录展示各个信息，并且支持导出。 ")]),i("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("2、"),i("strong",[e._v("退款且还原账单举例：")]),e._v("某个房间分别缴纳了1月、2月、3月的物业费，物业服务到期时间为2022年3月31号，然后退了2月的那笔物业费，退款模式选择【退款且还原账单】"),i("br"),e._v(" 退款后，物业服务到期时间变更为2022年2月28号，同时会生成一笔应交账单，账单信息与退掉的那笔账单一致，若生成的应交账单不符合当前的缴费情况，可以修改账单金额或作废账单 ")]),i("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(" 3、"),i("strong",[e._v("仅退款，不还原账单举例：")]),e._v("某个房间分别缴纳了1月、2月、3月的物业费，物业服务到期时间为2022年3月31号，然后3月开始物业费价格下调，退款模式选择【仅退款，不还原账单】，退款金额改为对应差价金额"),i("br"),e._v(" 退款后，物业服务服务时间不变，账单依旧显示在已缴账单，状态显示为部分退款 ")]),i("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(" 4、一次性收费规则账单不没有计费开始时间和计费结束时间 ")]),i("div",[e._v(" 5、点击【设置打印模板】按钮=>选择打印模板后；会联动收银台打印模板功能，已缴账单列表点击打印按钮直接打印 ")])])],1),i("div",{staticClass:"search-box"},[i("a-row",{attrs:{md:24,type:"flex"}},[i("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"1px","padding-right":"1px"},attrs:{md:6,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("支付方式：")]),i("a-select",{staticStyle:{width:"177px"},attrs:{placeholder:"请选择支付方式"},model:{value:e.search.pay_type,callback:function(t){e.$set(e.search,"pay_type",t)},expression:"search.pay_type"}},[i("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),e._l(e.pay_type_list,(function(t,a){return i("a-select-option",{key:a,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),i("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-right":"1px"},attrs:{md:6,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("开票状态：")]),i("a-select",{staticStyle:{width:"158px"},attrs:{placeholder:"请选择开票状态"},model:{value:e.search.invoice_type,callback:function(t){e.$set(e.search,"invoice_type",t)},expression:"search.invoice_type"}},[i("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),i("a-select-option",{attrs:{value:"1"}},[e._v("已开票")]),i("a-select-option",{attrs:{value:"2"}},[e._v("未开票")])],1)],1),i("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-right":"1px"},attrs:{md:6,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("账单状态：")]),i("a-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择账单状态"},model:{value:e.search.order_type,callback:function(t){e.$set(e.search,"order_type",t)},expression:"search.order_type"}},[i("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),i("a-select-option",{attrs:{value:"2"}},[e._v("部分退款")]),i("a-select-option",{attrs:{value:"1"}},[e._v("正常")])],1)],1),i("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"0px","padding-right":"1px"},attrs:{md:6,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("时间筛选：")]),i("a-range-picker",{staticStyle:{width:"260px"},attrs:{allowClear:!0},on:{change:e.dateOnChange},model:{value:e.search.data,callback:function(t){e.$set(e.search,"data",t)},expression:"search.data"}},[i("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),i("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"0px","padding-right":"1px",width:"90px"},attrs:{md:2,sm:24}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")])],1),i("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"0 !important",width:"90px"},attrs:{md:2,sm:24}},[i("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.printList()}}},[e._v("Excel导出")])],1),i("a-col",{staticClass:"padding-tp10 mg5_box",staticStyle:{display:"table !important"},attrs:{md:2,sm:24}},[i("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.checkSetParint(2,0,0,e.choice_ids)}}},[e._v("同一缴费人批量打印")])],1),i("a-col",{staticClass:"padding-tp10 mg5_box",attrs:{md:2,sm:24}},[i("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.PrintModel.add(0,0,2)}}},[e._v("设置打印模板")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,a){return i("span",{},[i("a",{on:{click:function(t){return e.$refs.OrderModel.add(a.order_id,a.check_apply_id)}}},[e._v("详情")]),i("a-divider",{attrs:{type:"vertical"}}),a.my_check_status&&0!=a.my_check_status?e._e():i("a",{on:{click:function(t){return e.$refs.RefundModel.add(a.order_id,a.pay_money,a.pay_type_way,[{title:"房间号/车位号",value:a.numbers},{title:"缴费人",value:a.pay_bind_name},{title:"电话",value:a.pay_bind_phone},{title:"收费项目名称",value:a.project_name}],a.order_type)}}},[e._v("退款")]),3==a.my_check_status?i("a",{staticStyle:{color:"#808080"}},[e._v("已审核")]):e._e(),2==a.my_check_status?i("a",{on:{click:function(t){return e.$refs.checkRefundModel.add(a.order_id,a.order_apply_info,"order_refund")}}},[e._v("需审核")]):e._e(),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(t){return e.checkSetParint(1,a.order_id,a.pigcms_id)}}},[e._v("打印")])],1)}}])}),i("payable-order-info",{ref:"OrderModel"}),i("add-refund-info",{ref:"RefundModel",on:{ok:e.bindOk}}),i("check-refund-info",{ref:"checkRefundModel",on:{ok:e.bindOk}}),i("get-print-template",{ref:"PrintModel",on:{ok:e.printBut}}),i("print-order",{ref:"PrintOrderModel"}),e.visible?i("a-modal",{attrs:{title:e.modalTitle,width:600,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.excelExport,cancel:e.handleCancel}},[i("label",{staticStyle:{"margin-right":"10px"}},[e._v("导出模式：")]),i("a-radio-group",{model:{value:e.exportPattern,callback:function(t){e.exportPattern=t},expression:"exportPattern"}},[i("a-radio",{attrs:{value:1}},[e._v("多行显示模式")]),i("a-radio",{attrs:{value:2}},[e._v("合并显示模式")])],1)],1):e._e()],1)])},s=[],r=i("2909"),n=i("1da1"),o=(i("7d24"),i("dfae")),l=(i("96cf"),i("ac1f"),i("841c"),i("d81d"),i("b0c0"),i("d3b7"),i("7db0"),i("a0e0")),c=i("bf3f"),d=i("858e"),u=i("ce95"),p=i("a635"),m=i("f7e3"),_=[{title:"收费项目名称",dataIndex:"project_name",key:"project_name"},{title:"实际缴费金额",dataIndex:"pay_money",key:"pay_money"},{title:"支付方式",dataIndex:"pay_type",key:"pay_type"},{title:"支付时间",dataIndex:"pay_time",key:"pay_time"},{title:"开票状态",dataIndex:"record_status",key:"record_status"},{title:"账单状态",dataIndex:"order_status",key:"order_status"},{title:"计费开始时间",dataIndex:"service_start_time",key:"service_start_time"},{title:"计费结束时间",dataIndex:"service_end_time",key:"service_end_time"},{title:"账单生成时间",dataIndex:"add_time",key:"add_time"},{title:"审核状态",dataIndex:"check_status_str",key:"check_status_str"},{title:"操作",key:"action",width:"170px",dataIndex:"",scopedSlots:{customRender:"action"}}],h=[],f={name:"PayableOrderList",filters:{},components:{GetPrintTemplate:u["default"],AddRefundInfo:d["default"],PayableOrderInfo:c["default"],PrintOrder:m["default"],checkRefundInfo:p["default"],"a-collapse":o["a"],"a-collapse-panel":o["a"].Panel},data:function(){var e=this;return{reply_content:"",title:"已缴账单列表",pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,i){return e.onTableChange(t,i)},onChange:function(t,i){return e.onTableChange(t,i)}},search:{keyword:"",key_val:"name",key_val1:"paytime",garage_id:"0",pay_type:"0",project_id:"0",page:1,pigcms_id:0},form:this.$form.createForm(this),drawer_visible:!1,visible:!1,loading:!1,key_name:"请输入姓名",data:h,user_info:{},columns:_,options:[],garage_list:[],project_list:[],pay_type_list:[],search_data:"",page:1,widthDrawer:1500,selectedRowKeys:[],choice_ids:[],confirmLoading:!1,exportPattern:2,modalTitle:"Excel导出"}},created:function(){window.screen.width<1400?this.widthDrawer=900:window.screen.width<1600&&(this.widthDrawer=1250)},activated:function(){this.getSingleListByVillage(),this.getProjectList(),this.getGarageList(),this.payTypeList()},methods:{onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getList(),console.log("onTableChange==>",e,t)},onClose:function(){this.drawer_visible=!1},getList:function(){var e=this;this.loading=!0,this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.request(l["a"].payableOrderList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,console.log("list",t.list),e.loading=!1}))},keyChange:function(e){"name"==e&&(this.key_name="请输入姓名"),"phone"==e&&(this.key_name="请输入电话")},bindOk:function(){this.getList()},getProjectList:function(){var e=this;this.request(l["a"].ChargeProjectList).then((function(t){e.project_list=t.list})).catch((function(t){e.loading=!1}))},getGarageList:function(){var e=this;this.request(l["a"].garageList).then((function(t){console.log("garage_list",t),e.garage_list=t})).catch((function(t){e.loading=!1}))},payTypeList:function(){var e=this;this.request(l["a"].payTypeList).then((function(t){console.log("pay_type_list",t),e.pay_type_list=t})).catch((function(t){e.loading=!1}))},getSingleListByVillage:function(){var e=this;this.request(l["a"].getSingleListByVillage).then((function(t){if(console.log("+++++++Single",t),t){var i=[];t.map((function(e){i.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=i}}))},getFloorList:function(e){var t=this;return new Promise((function(i){t.request(l["a"].getFloorList,{pid:e}).then((function(e){console.log("+++++++Single",e),console.log("resolve",i),i(e)}))}))},getLayerList:function(e){var t=this;return new Promise((function(i){t.request(l["a"].getLayerList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&i(e)}))}))},getVacancyList:function(e){var t=this;return new Promise((function(i){t.request(l["a"].getVacancyList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&i(e)}))}))},loadDataFunc:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e[e.length-1],i.loading=!0,setTimeout((function(){i.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,s,n,o,l,c,d,u,p,m,_,h;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(1!==e.length){i.next=12;break}return a=Object(r["a"])(t.options),i.next=4,t.getFloorList(e[0]);case 4:s=i.sent,console.log("res",s),n=[],s.map((function(e){return n.push({label:e.name,value:e.id,isLeaf:!1}),a["children"]=n,!0})),a.find((function(t){return t.value===e[0]}))["children"]=n,t.options=a,i.next=36;break;case 12:if(2!==e.length){i.next=24;break}return i.next=15,t.getLayerList(e[1]);case 15:o=i.sent,l=Object(r["a"])(t.options),c=[],o.map((function(e){return c.push({label:e.name,value:e.id,isLeaf:!1}),!0})),d=l.find((function(t){return t.value===e[0]})),d.children.find((function(t){return t.value===e[1]}))["children"]=c,t.options=l,i.next=36;break;case 24:if(3!==e.length){i.next=36;break}return i.next=27,t.getVacancyList(e[2]);case 27:u=i.sent,p=Object(r["a"])(t.options),m=[],u.map((function(e){return m.push({label:e.name,value:e.id,isLeaf:!0}),!0})),_=p.find((function(t){return t.value===e[0]})),h=_.children.find((function(t){return t.value===e[1]})),h.children.find((function(t){return t.value===e[2]}))["children"]=m,t.options=p,console.log("_this.options",t.options);case 36:case"end":return i.stop()}}),i)})))()},dateOnChange:function(e,t){this.search.date=t,console.log("search1111",this.search)},table_change:function(e){console.log("table_change",e),e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current,this.getList(),this.selectedRowKeys=[],this.choice_ids=[])},search_btn:function(e){this.drawer_visible=!0,this.user_info=e,this.search={keyword:"",key_val:"name",key_val1:"paytime",garage_id:"0",pay_type:"0",project_id:"0",page:1,pigcms_id:e.pigcms_id},this.search.vacancy_id=0,void 0!=e.vacancy_id&&e.vacancy_id>0&&(this.search.vacancy_id=e.vacancy_id),void 0!=e.position_id&&e.position_id?this.search.position_id=e.position_id:this.search.position_id=0,this.searchList()},searchList:function(){console.log("search",this.search),this.page=1;var e={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(e)},printList:function(){this.visible=!0},printBut:function(){this.table_change({current:1,pageSize:10,total:10})},onSelectChange:function(e,t){if(console.log("selectedRowKeys changed: ",e,t),t){for(var i=[],a=0;a<t.length;a++)i.push({orderid:t[a]["order_id"],pigcms_id:t[a]["pigcms_id"],room_id:t[a]["room_id"]});this.choice_ids=i,console.log("choice_ids: ",this.choice_ids),this.selectedRowKeys=e}},handleCancel:function(){this.visible=!1,this.exportType=1},excelExport:function(){var e=this;this.loading=!0,this.search["exportPattern"]=this.exportPattern,console.log(this.search),this.request(l["a"].printPayOrderList,this.search).then((function(t){console.log("list",t.list),window.location.href=t.url,e.loading=!1,e.handleCancel()})).catch((function(t){e.loading=!1}))},arrUnique:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pigcms_id",i=[],a=0,s=e.length;a<s;a++)-1===i.indexOf(e[a][t])&&i.push(e[a][t]);return i},checkSetParint:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=this;if(2==e){if(s.length<1)return r.$message.error("请勾选账单"),!1;if(this.arrUnique(s,"pigcms_id").length>1)return r.$message.error("当前仅支持同一个缴费人进行批量打印已缴账单"),!1;if(this.arrUnique(s,"room_id").length>1)return r.$message.error("当前仅支持同一个房间进行批量打印已缴账单"),!1;if(s.length>8)return r.$message.error("最多可选择8个账单打印，您当前选中"+s.length+"个"),!1}this.request(l["a"].checkSetPrint).then((function(r){r.template_id&&r.template_id>0?t.$refs.PrintOrderModel.add(i,r.template_id,a,s):1==e?t.$refs.PrintModel.add(i,a):t.$refs.PrintModel.batchPrint(s)}))}}},g=f,y=(i("cd69"),i("0c7c")),v=Object(y["a"])(g,a,s,!1,null,"181749ca",null);t["default"]=v.exports},"5cc3":function(e,t,i){},"6f6f":function(e,t,i){"use strict";i("3946")},"858e":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:700,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"退款模式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},["deposit_new"==e.order_type?i("a-select",{staticStyle:{width:"177px"},attrs:{placeholder:"请选择支付方式","default-value":"0",disabled:e.is_show},on:{change:e.handleChange},model:{value:e.post.refund_type,callback:function(t){e.$set(e.post,"refund_type",t)},expression:"post.refund_type"}},[i("a-select-option",{attrs:{value:0}},[e._v("请选择")]),i("a-select-option",{attrs:{value:2}},[e._v("退还押金抵扣费用")]),i("a-select-option",{attrs:{value:1}},[e._v("原路退款")])],1):i("a-select",{staticStyle:{width:"177px"},attrs:{placeholder:"请选择支付方式","default-value":"0",disabled:e.is_show},on:{change:e.handleChange},model:{value:e.post.refund_type,callback:function(t){e.$set(e.post,"refund_type",t)},expression:"post.refund_type"}},[i("a-select-option",{attrs:{value:0}},[e._v("请选择")]),i("a-select-option",{attrs:{value:2}},[e._v("退款且还原账单")]),i("a-select-option",{attrs:{value:1}},[e._v("仅退款，不还原账单")])],1)],1)],1),i("a-form-item",{attrs:{label:"退款金额",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入退款金额",disabled:e.is_input},model:{value:e.post.refund_money,callback:function(t){e.$set(e.post,"refund_money",t)},expression:"post.refund_money"}})],1),i("a-col",{attrs:{span:6}})],1),i("a-form-item",{attrs:{label:"退款原因",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-textarea",{ref:"textareax",staticStyle:{width:"180px"},attrs:{placeholder:"请输入退款原因"},model:{value:e.post.refund_reason,callback:function(t){e.$set(e.post,"refund_reason",t)},expression:"post.refund_reason"}})],1),i("a-col",{attrs:{span:6}})],1)],1)],1),i("div",{staticClass:"refund_type_desc"},["deposit_new"==e.order_type?i("a-descriptions",{attrs:{title:"退款模式说明",column:2,bordered:!0}},[i("a-descriptions-item",{attrs:{span:2,label:"原路退款"}},[e._v("将当前已缴账单的费用进行退款变更账单状态且将对应产生的服务时间进行退回还原；")]),i("a-descriptions-item",{attrs:{span:2,label:"退还押金抵扣费用"}},[e._v("只是将已缴的费用对应进行退款操作并变更账单状态，所收费用不退费，生成押金抵扣券,可用于在缴费时进行抵扣。")])],1):i("a-descriptions",{attrs:{title:"退款模式说明",column:2,bordered:!0}},[i("a-descriptions-item",{attrs:{span:2,label:"退款且还原账单"}},[e._v("将当前已缴账单的费用进行退款变更账单状态且将对应产生的服务时间进行退回还原，自动生成一个相同的未缴账单；")]),i("a-descriptions-item",{attrs:{span:2,label:"仅退款，不还原账单"}},[e._v("只是将已缴的费用对应进行退款并变更账单状态，关联变更信息不做任何还原操作；主要应用于线上支付，例如：价格波动导致差价，退还差价，但是服务不变；")])],1)],1),i("div",{staticClass:"rule_detail",staticStyle:{"margin-top":"10px"}},[i("a-descriptions",{attrs:{title:"基本信息",column:4}},e._l(e.retrunDetail,(function(t,a){return i("a-descriptions-item",{attrs:{span:2,label:t.title}},[e._v(" "+e._s(t.value)+" ")])})),1)],1)],1)},s=[],r=(i("b680"),i("a0e0")),n=(i("1a83"),{components:{},data:function(){return{title:"退款",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,is_show:!1,is_input:!1,form:this.$form.createForm(this),visible:!1,order_id:0,pay_money:0,pay_type_way:0,retrunDetail:[],post:{id:0,refund_money:"",refund_type:0,refund_reason:""},order_type:""}},mounted:function(){},methods:{add:function(e,t,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";console.log("order_type====>",s),this.order_type=s,this.$forceUpdate(),this.title="退款",this.visible=!0,this.retrunDetail=a,this.post={order_id:0,id:0,refund_money:t,refund_type:0,refund_reason:""},this.order_id=e,this.pay_money=t,void 0!=i&&(this.pay_type_way=i),this.pay_type_way,this.getRefundType()},handleChange:function(e){this.is_input=!1,2==e&&(this.post.refund_money=this.pay_money,this.is_input=!0)},getRefundType:function(){var e=this;this.request(r["a"].getRefundtype,{order_id:this.order_id}).then((function(t){""==t?e.is_show=!1:(t.refund_money>0&&(e.post.refund_money=e.pay_money-t.refund_money,e.post.refund_money<=0&&(e.post.refund_money=0),e.post.refund_money=e.post.refund_money.toFixed(2)),2==t.refund_type?e.post.refund_type=2:e.post.refund_type=1,e.is_show=!0)}))},handleSubmit:function(){if(this.post.order_id=this.order_id,this.post.refund_type<1)return this.$message.warning("请选择退款模式！"),!1;if(2==this.pay_type_way&&this.post.refund_reason.length<1)return this.$refs.textareax.focus(),this.$message.warning("线下支付的订单，退款时请写上退款原因！"),!1;var e="",t="";1==this.post.refund_type?(t="退款确认（仅退款，不还原账单）",e="只是将已缴的费用对应进行退款并变更账单状态，关联变更信息不做任何还原操作；主要应用于线上支付，例如：价格波动导致差价，退还差价，但是服务不变；"):2==this.post.refund_type&&(t="退款确认（退款且还原账单）",e="将当前已缴账单的费用进行退款变更账单状态且将对应产生的服务时间进行退回还原，自动生成一个相同的未缴账单；");var i=this;this.$confirm({title:t,content:e,onOk:function(){i.request(r["a"].addRefundInfo,i.post).then((function(e){console.log("res",e),i.$message.success("操作成功"),setTimeout((function(){i.form=i.$form.createForm(i),i.visible=!1,i.confirmLoading=!1,i.is_show=!1,i.is_input=!1,i.$emit("ok")}),1500)}))},onCancel:function(){}})},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.post.id=0,e.form=e.$form.createForm(e)}),500)}}}),o=n,l=(i("6f6f"),i("0c7c")),c=Object(l["a"])(o,a,s,!1,null,null,null);t["default"]=c.exports},"87c5":function(e,t,i){"use strict";i("5cc3")},a635:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:700,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"审核状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[i("a-col",{attrs:{span:20}},[i("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.post.status,callback:function(t){e.$set(e.post,"status",t)},expression:"post.status"}},[i("a-radio",{attrs:{value:1,name:"status"}},[e._v(" 审核通过 ")]),i("a-radio",{attrs:{value:2,name:"status"}},[e._v(" 审核不通过 ")])],1)],1),i("a-col",{attrs:{span:6}})],1),i("a-form-item",{attrs:{label:"审核说明",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:20}},[i("a-textarea",{ref:"textareax",staticStyle:{width:"250px",height:"120px"},attrs:{placeholder:"请输入审核说明"},model:{value:e.post.bak,callback:function(t){e.$set(e.post,"bak",t)},expression:"post.bak"}})],1),i("a-col",{attrs:{span:6}})],1)],1)],1),i("div",{staticClass:"rule_detail",staticStyle:{"margin-top":"10px"}},[i("a-descriptions",{attrs:{title:e.apply_title,column:4}},e._l(e.retrunDetail,(function(t,a){return i("a-descriptions-item",{attrs:{span:2,label:t.title}},[e._v(" "+e._s(t.value)+" ")])})),1)],1)],1)},s=[],r=i("a0e0"),n={components:{},data:function(){return{title:"退款审核",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,order_id:0,apply_title:"申请退款信息",retrunDetail:[],post:{order_id:0,xtype:"order_refund",bak:"",status:1}}},mounted:function(){},methods:{add:function(e,t,i){this.title="退款审核",this.visible=!0,this.post={order_id:e,xtype:i,bak:"",status:1},"order_discard"==i&&(this.title="作废审核",this.apply_title="申请作废信息"),this.order_id=e;var a=[];if(t&&"order_refund"==i){a.push({title:"申请时间",value:t.opt_time_str});var s="";1==t.refund_type?s="仅退款，不还原账单":2==t.refund_type&&(s="退款且还原账单"),a.push({title:"退款模式",value:s}),a.push({title:"申请退款金额",value:t.refund_money+"元"}),a.push({title:"退款原因",value:t.refund_reason})}else t&&"order_discard"==i&&(a.push({title:"申请时间",value:t.opt_time_str}),a.push({title:"作废账单金额",value:t.total_money+"元"}),a.push({title:"作废原因",value:t.discard_reason}));this.retrunDetail=a},handleSubmit:function(){this.post.order_id=this.order_id;var e="您确认审核 通过 退款申请吗？";2==this.post.status&&(e="您确认审核 不通过 退款申请吗？");var t="退款审核确认";"order_discard"==this.post.xtype&&(t="作废审核确认",e="您确认审核 通过 作废申请吗？",2==this.post.status&&(e="您确认审核 不通过 作废申请吗？"));var i=this;this.$confirm({title:t,content:e,onOk:function(){i.request(r["a"].verifyCheckauthApply,i.post).then((function(e){console.log("res",e),i.$message.success("操作成功"),setTimeout((function(){i.form=i.$form.createForm(i),i.visible=!1,i.confirmLoading=!1,i.$emit("ok")}),1500)}))},onCancel:function(){}})},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.form=e.$form.createForm(e)}),500)}}},o=n,l=(i("87c5"),i("0c7c")),c=Object(l["a"])(o,a,s,!1,null,null,null);t["default"]=c.exports},cd69:function(e,t,i){"use strict";i("22ea")},ce95:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:500,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[e.is_set?i("div",{staticStyle:{"margin-bottom":"20px"},domProps:{innerHTML:e._s(e.set_msg)}}):e._e(),i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"选择打印模板",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择打印模板"},model:{value:e.template_id,callback:function(t){e.template_id=t},expression:"template_id"}},e._l(e.template_list,(function(t,a){return i("a-select-option",{key:a,attrs:{value:t.template_id}},[e._v(" "+e._s(t.title)+" ")])})),1)],1)],1)],1)],1),i("print-order",{ref:"PrintModel"})],1)},s=[],r=i("a0e0"),n=i("f7e3"),o={components:{PrintOrder:n["default"]},data:function(){return{title:"选择打印模板",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,order_id:0,template_id:void 0,template_list:[],pigcms_id:0,choice_ids:[],is_set:!1,set_msg:"",set_type:0,source_type:0}},mounted:function(){},methods:{add:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.source_type=0,0==i?(this.title="选择打印模板",this.is_set=!1,this.set_msg=""):(this.is_set=!0,this.title="设置打印模板",1==i?(this.source_type=1,this.set_msg="1、在收银台设置打印模板，收银台支持打印功能。打印功能；不设置打印模板，则不支持。<br/>2、设置打印模板后，在收银台显示已缴账单按钮，进入查看所有已缴账单数据。"):2==i&&(this.set_msg='1、设置打印模板后，联动收银台打印模板功能。<br/>2、设置打印模板后，<span style="color: #1890ff">已缴账单</span>列表点击<span style="color: #1890ff">打印</span>按钮直接打印')),this.set_type=i,this.template_id=void 0,this.visible=!0,this.pigcms_id=t,this.template_list=[],this.order_id=e,this.choice_ids=[],this.getTemplate()},batchPrint:function(e){var t=this;if(e.length<1)return t.$message.error("请勾选账单"),!1;t.title="选择打印模板",t.visible=!0,t.template_id=void 0,t.template_list=[],t.order_id=0,t.pigcms_id=0,t.choice_ids=e,this.set_type=0,this.source_type=0,t.getTemplate()},getTemplate:function(){var e=this;this.request(r["a"].getTemplate).then((function(t){e.template_list=t.list,t&&t.template_id>0&&(e.template_id=t.template_id)}))},handleSubmit:function(){var e=this;if(!this.template_id)return this.$message.error("选择打印模板"),!1;this.set_type>0?(this.confirmLoading=!0,this.request(r["a"].editSetPrint,{template_id:this.template_id}).then((function(t){e.$message.success("编辑成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",{type:e.source_type,template_id:e.template_id})}),1e3)})).catch((function(e){}))):this.$refs.PrintModel.add(this.order_id,this.template_id,this.pigcms_id,this.choice_ids)},handleCancel:function(){this.visible=!1}}},l=o,c=(i("d3b0"),i("0c7c")),d=Object(c["a"])(l,a,s,!1,null,null,null);t["default"]=d.exports},d3b0:function(e,t,i){"use strict";i("3134")}}]);