(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64460e87","chunk-2d0c06af"],{4261:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[e._v(" Open the message box ")])},s=[],l={downloadExportFile:"/common/common.export/downloadExportFile"},r=l,a="updatable",n={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(o){e.$message.loading({content:t,key:a,duration:0}),console.log("添加导出计划任务成功"),e.file_url=r.downloadExportFile+"?id="+o.export_id,e.file_date=o,e.CheckStatus()}))},CheckStatus:function(){var e=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(t){0==t.error?(e.$message.success({content:"下载成功!",key:a,duration:2}),location.href=t.url):setTimeout((function(){e.CheckStatus(),console.log("重复请求")}),1e3)}))}}},c=n,f=o("2877"),d=Object(f["a"])(c,i,s,!1,null,"dd2f8128",null);t["default"]=d.exports},"4d95":function(e,t,o){"use strict";var i={getTicketList:"life_tools/merchant.LifeToolsTicket/getList",getTicketDetail:"life_tools/merchant.LifeToolsTicket/getDetail",ticketDel:"life_tools/merchant.LifeToolsTicket/del",TicketEdit:"life_tools/merchant.LifeToolsTicket/addOrEdit",getLifeToolsList:"life_tools/merchant.LifeTools/getInformationList",setLifeToolsAttrs:"life_tools/merchant.LifeTools/setLifeToolsAttrs",getSportsOrderList:"/life_tools/merchant.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/merchant.SportsOrder/exportToolsOrder",getSportsOrderDetail:"/life_tools/merchant.SportsOrder/getOrderDetail",agreeSportsOrderRefund:"/life_tools/merchant.SportsOrder/agreeRefund",refuseSportsOrderRefund:"/life_tools/merchant.SportsOrder/refuseRefund",getEditInfo:"life_tools/merchant.LifeToolsTicket/getEditInfo",getCategoryList:"life_tools/merchant.LifeToolsCategory/getCategoryList",getMapConfig:"life_tools/merchant.LifeTools/getMapConfig",getAddressList:"life_tools/merchant.LifeTools/getAddressList",addEditLifeTools:"life_tools/merchant.LifeTools/addEditLifeTools",getLifeToolsDetail:"life_tools/merchant.LifeTools/getLifeToolsDetail",delLifeTools:"life_tools/merchant.LifeTools/delLifeTools",getReplyList:"/life_tools/merchant.LifeToolsReply/searchReply",isShowReply:"/life_tools/merchant.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/merchant.LifeToolsReply/getReplyDetails",delReply:"/life_tools/merchant.LifeToolsReply/delReply",subReply:"/life_tools/merchant.LifeToolsReply/subReply",getReplyContent:"/life_tools/merchant.LifeToolsReply/getReplyContent",getCardList:"/life_tools/merchant.EmployeeCard/getCardList",editCard:"/life_tools/merchant.EmployeeCard/editCard",saveCard:"/life_tools/merchant.EmployeeCard/saveCard",delCard:"/life_tools/merchant.EmployeeCard/delCard",getSportsVerifyList:"/life_tools/merchant.SportsOrder/getVerifyList",exportVerifyRecord:"/life_tools/merchant.SportsOrder/exportVerifyRecord",getLimitedList:"/life_tools/merchant.LifeScenicLimitedAct/getLimitedList",updateLimited:"/life_tools/merchant.LifeScenicLimitedAct/addLimited",limitedChangeState:"/life_tools/merchant.LifeScenicLimitedAct/changeState",removeLimited:"/life_tools/merchant.LifeScenicLimitedAct/del",getLimitedInfo:"/life_tools/merchant.LifeScenicLimitedAct/edit",getMerchantSort:"/life_tools/merchant.LifeToolsTicket/getMerchantSort",getLifeToolsTicket:"/life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",getToolsCardList:"/life_tools/merchant.LifeTools/getToolsCardList",AddOrEditToolsCard:"/life_tools/merchant.LifeTools/AddOrEditToolsCard",getToolsCardEdit:"/life_tools/merchant.LifeTools/getToolsCardEdit",delToolsCard:"/life_tools/merchant.LifeTools/delToolsCard",getAllToolsList:"/life_tools/merchant.LifeTools/getAllToolsList",getToolsCardRecord:"/life_tools/merchant.LifeTools/getToolsCardRecord",getCardOrderList:"/life_tools/merchant.LifeTools/getCardOrderList",getCardOrderDetail:"/life_tools/merchant.LifeTools/getCardOrderDetail",agreeCardOrderRefund:"/life_tools/merchant.LifeTools/agreeCardOrderRefund",refuseCardOrderRefund:"/life_tools/merchant.LifeTools/refuseCardOrderRefund",getSportsActivityList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityList",updateSportsActivityStatus:"/life_tools/merchant.LifeToolsSportsActivity/updateSportsActivityStatus",getSportsActivityOrderList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityOrderList",addSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/addSportsActivity",editSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/editSportsActivity",getTravelList:"/life_tools/merchant.LifeToolsGroupTravelAgency/getTravelList",agencyAudit:"/life_tools/merchant.LifeToolsGroupTravelAgency/audit",getStaffList:"/life_tools/merchant.LifeToolsTicket/getStaffList",getAppointList:"life_tools/merchant.LifeToolsAppoint/getList",getAppointMsg:"life_tools/merchant.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/merchant.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/merchant.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/merchant.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/merchant.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/merchant.LifeToolsAppoint/delAppoint",getSeatMap:"/life_tools/merchant.LifeToolsAppoint/getSeatMap",getAppointOrderDetail:"life_tools/merchant.LifeToolsAppoint/getAppointOrderDetail",auditRefund:"life_tools/merchant.LifeToolsAppoint/auditRefund",suspend:"life_tools/merchant.LifeToolsAppoint/suspend",getSportsSecondsKillList:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillList",saveSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/saveSecondsKill",ChangeSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/ChangeSportsSecondsKill",delSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/delSecondsKill",getSportsSecondsKillDetail:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillDetail",getGroupTicketList:"life_tools/merchant.group/getGroupTicketList",getGroupLifeToolsTicket:"life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",addGroupTicket:"life_tools/merchant.group/addGroupTicket",delGroupTicket:"life_tools/merchant.group/delGroupTicket",editSettingData:"life_tools/merchant.group/editSettingData",editGroupTicket:"life_tools/merchant.group/editGroupTicket",getSettingDataDetail:"life_tools/merchant.group/getSettingDataDetail",getStatisticsData:"life_tools/merchant.LifeToolsGroupOrder/getStatisticsData",getOrderList:"life_tools/merchant.LifeToolsGroupOrder/getOrderList",getOrderAuditList:"/life_tools/merchant.LifeToolsGroupOrder/getAuditGroupOrderList",orderAudit:"/life_tools/merchant.LifeToolsGroupOrder/audit",groupOrderRefand:"life_tools/merchant.LifeToolsGroupOrder/groupOrderRefand",editDistributionPrice:"life_tools/merchant.LifeToolsDistribution/editDistributionPrice",getDistributionSettingDataDetail:"/life_tools/merchant.LifeToolsDistribution/getSettingDataDetail",getDistributionSettingeditSetting:"/life_tools/merchant.LifeToolsDistribution/editSetting",getAtatisticsInfo:"/life_tools/merchant.LifeToolsDistribution/getAtatisticsInfo",getDistributorList:"/life_tools/merchant.LifeToolsDistribution/getDistributorList",getLowerLevel:"/life_tools/merchant.LifeToolsDistribution/getLowerLevel",audit:"/life_tools/merchant.LifeToolsDistribution/audit",getDistributionOrderList:"/life_tools/merchant.LifeToolsDistribution/getDistributionOrderList",editDistributionOrderNote:"/life_tools/merchant.LifeToolsDistribution/editDistributionOrderNote",delDistributor:"/life_tools/merchant.LifeToolsDistribution/delDistributor",addStatement:"/life_tools/merchant.LifeToolsDistribution/addStatement",getStatementList:"/life_tools/merchant.LifeToolsDistribution/getStatement",getStatementDetail:"/life_tools/merchant.LifeToolsDistribution/getStatementDetail",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getMapCity:"/g=Index&c=Map&a=suggestion",getCarParkList:"/life_tools/merchant.LifeToolsCarPark/getCarParkList",addCarPark:"/life_tools/merchant.LifeToolsCarPark/addCarPark",showCarPark:"/life_tools/merchant.LifeToolsCarPark/showCarPark",getToolsList:"/life_tools/merchant.LifeToolsCarPark/getToolsList",deleteCarPark:"/life_tools/merchant.LifeToolsCarPark/deleteCarPark",statusCarPark:"/life_tools/merchant.LifeToolsCarPark/statusCarPark",wifiList:"life_tools/merchant.LifeToolsWifi/wifiList",wifiAdd:"life_tools/merchant.LifeToolsWifi/wifiAdd",wifiShow:"life_tools/merchant.LifeToolsWifi/wifiShow",wifiStatusChange:"life_tools/merchant.LifeToolsWifi/wifiStatusChange",wifiDelete:"life_tools/merchant.LifeToolsWifi/wifiDelete",scenicMapSave:"/life_tools/merchant.LifeToolsScenicMap/saveMap",scenicMapPlaceList:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceList",scenicMapPlaceSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapPlace",scenicMapPlaceDel:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceDel",scenicMapLineList:"/life_tools/merchant.LifeToolsScenicMap/mapLineList",scenicMapLineSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapLine",scenicMapLineDel:"/life_tools/merchant.LifeToolsScenicMap/mapLineDel",scenicMapScenicList:"/life_tools/merchant.LifeToolsScenicMap/scenicList",scenicMapPlaceCatList:"/life_tools/merchant.LifeToolsScenicMap/categoryList",scenicMapPlaceCategoryDel:"/life_tools/merchant.LifeToolsScenicMap/categoryDel",scenicMapPlaceCategorySave:"/life_tools/merchant.LifeToolsScenicMap/saveCategory",scenicMapList:"/life_tools/merchant.LifeToolsScenicMap/mapList",scenicMapDel:"/life_tools/merchant.LifeToolsScenicMap/mapDel",scenicMapStatusSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapStatus",changeCloseStatus:"life_tools/merchant.LifeTools/changeCloseStatus",getAddEditCardMerchantInfo:"/life_tools/merchant.LifeTools/getAddEditCardMerchantInfo"};t["a"]=i},6192:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"margin-top":"20px",padding:"20px","background-color":"#fff"}},[o("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[o("a-form-model-item",{attrs:{label:"订单号/店员名称"}},[o("a-input",{attrs:{placeholder:"订单号/店员名称"},model:{value:e.searchForm.keyword,callback:function(t){e.$set(e.searchForm,"keyword",t)},expression:"searchForm.keyword"}})],1),o("a-form-model-item",{attrs:{label:"订单类型"}},[o("a-select",{staticStyle:{width:"115px"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[o("a-select-option",{attrs:{value:0}},[e._v("全部")]),o("a-select-option",{attrs:{value:1}},[e._v("场馆")]),o("a-select-option",{attrs:{value:2}},[e._v("课程")])],1)],1),o("a-form-model-item",{attrs:{label:"核销时间"}},[o("a-range-picker",{attrs:{ranges:{"过去30天":[e.moment().subtract(30,"days"),e.moment()],"过去15天":[e.moment().subtract(15,"days"),e.moment()],"过去7天":[e.moment().subtract(7,"days"),e.moment()],"今日":[e.moment(),e.moment()]},value:e.searchForm.time,format:"YYYY-MM-DD"},on:{change:e.onDateRangeChange}})],1),o("a-form-model-item",[o("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm(!0)}}},[e._v("搜索")]),o("a-button",{staticClass:"ml-20",on:{click:function(t){return e.resetForm()}}},[e._v("重置")]),o("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.getExport()}}},[e._v("导出")])],1)],1),o("br"),o("a-table",{attrs:{rowKey:"order_id",columns:e.columns,"data-source":e.datalist,pagination:e.pagination,bordered:""}}),o("export-add",{ref:"ExportAddModal",attrs:{exportUrl:e.exportUrl,queryParam:e.searchForm}})],1)},s=[],l=o("5530"),r=o("4d95"),a=o("4261"),n=o("c1df"),c=o.n(n),f=[{title:"订单号",dataIndex:"real_orderid",key:"real_orderid"},{title:"订单类型",dataIndex:"type",key:"type"},{title:"店铺名称",dataIndex:"store_name",key:"store_name"},{title:"店员名称",dataIndex:"staff_name",key:"staff_name"},{title:"单价",dataIndex:"price",key:"price"},{title:"核销时间",dataIndex:"last_time",key:"last_time"}],d={components:{ExportAdd:a["default"]},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},datalist:[],columns:f,addVisible:!1,detailVisible:!1,recordVisible:!1,currentBtn:{},ewmVisible:!1,setVisible:!1,ewm:"",ewmName:"",configForm:{scan_money_desc:"",scan_score_desc:"",scan_timeout:"3"},searchForm:{keyword:"",type:0,status:-1,time:[],begin_time:"",end_time:""},exportUrl:r["a"].exportVerifyRecord,pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},created:function(){this.getDataList(!1)},methods:{moment:c.a,getDataList:function(e){var t=this,o=Object(l["a"])({},this.searchForm);!0===e?(o.page=1,this.$set(this.pagination,"current",1)):(o.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),o.pageSize=this.pagination.pageSize,this.request(r["a"].getSportsVerifyList,o).then((function(e){t.datalist=e.data,t.$set(t.pagination,"total",e.total)}))},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.getDataList(e)},resetForm:function(){this.$set(this,"searchForm",{keyword:"",type:0,status:-1,time:[],begin_time:"",end_time:""}),this.$set(this.pagination,"current",1),this.getDataList()},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},handleDetail:function(e){var t=this;this.request(r["a"].getSportsOrderDetail,{order_id:e},"GET").then((function(e){t.currentBtn={props:"orderDetail",title:"订单详情",data:e},t.detailVisible=!0}))},onDateRangeChange:function(e,t){this.$set(this.searchForm,"time",[e[0],e[1]]),this.$set(this.searchForm,"begin_time",t[0]),this.$set(this.searchForm,"end_time",t[1])},getExport:function(){this.request(this.exportUrl,this.searchForm).then((function(e){e.file_url&&window.open(e.file_url)}))}}},p=d,m=o("2877"),h=Object(m["a"])(p,i,s,!1,null,null,null);t["default"]=h.exports}}]);