(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a36ba906"],{"0e03":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[e._m(0),i("a-divider",{staticStyle:{"margin-top":"10px"}}),i("a-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",align:"middle"}},[i("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"搜索标题/描述/电话/地址/标签"},on:{search:e.onSearch}}),i("a-select",{staticStyle:{width:"150px"},attrs:{options:e.auditOptions,placeholder:e.L("请选择")},on:{change:e.handleSelectChange},model:{value:e.queryParams.audit_status,callback:function(t){e.$set(e.queryParams,"audit_status",t)},expression:"queryParams.audit_status"}}),i("router-link",{attrs:{to:"/merchant/merchant.life_tools/ScenicEdit"}},[i("a-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"primary"}},[e._v(" "+e._s(e.L("添加景区"))+" ")])],1)],1),i("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.columns,rowKey:"tools_id","data-source":e.dataList,pagination:e.pagination},on:{change:e.changePage},scopedSlots:e._u([{key:"type",fn:function(t){return i("span",{},[e._v(" "+e._s(e.typeMap[t])+" ")])}},{key:"money",fn:function(t){return i("span",{},[e._v(" ￥"+e._s(t)+" ")])}},{key:"audit_status_text",fn:function(t,o){return i("span",{style:[{color:"1"==o.audit_status?"green":"2"==o.audit_status?"red":"rgb(250, 173, 20)"}]},[e._v(e._s(t))])}},{key:"scenic_close",fn:function(t,o){return i("a",{on:{click:function(t){return e.scenicCloseClick(o)}}},[e._v(e._s(o.is_close_name))])}},{key:"label_arr",fn:function(t){return i("span",{},e._l(t,(function(t,o){return i("a-tag",[e._v(" "+e._s(t)+" ")])})),1)}},{key:"ticket",fn:function(t,o){return i("span",{},[i("router-link",{attrs:{to:"/merchant/merchant.life_tools/ScenicTicketList?tools_id="+t}},[e._v(" 门票套餐 ")])],1)}},{key:"sort",fn:function(t,o){return i("span",{},[i("a-input-number",{staticStyle:{width:"60px"},attrs:{min:0,max:1e4,"default-value":t},on:{blur:function(t){return e.changeSort(t,o.tools_id)}}})],1)}},{key:"is_hot",fn:function(t,o){return i("span",{},[i("a-switch",{attrs:{"checked-children":"启用","un-checked-children":"关闭","default-checked":1==o.is_hot},on:{change:function(t){return e.isHotSwitchChange(o.tools_id,t)}}})],1)}},{key:"audit_msg",fn:function(t){return i("span",{},[e._v(e._s(t||"无"))])}},{key:"status",fn:function(t,o){return i("span",{},[i("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否",checked:1==o.status},on:{change:function(t){return e.switchChange(o.tools_id,t)}}})],1)}},{key:"action",fn:function(t){return i("span",{},[i("a",{staticClass:"inline-block",staticStyle:{"margin-right":"10px"},on:{click:function(i){return e.addEditLifeTools(t)}}},[e._v(e._s(e.L("编辑")))]),i("a",{staticClass:"inline-block",on:{click:function(i){return e.delLifeTools(t)}}},[e._v(e._s(e.L("删除")))])])}}])}),i("a-modal",{attrs:{destroyOnClose:"",title:"设置活动暂停",visible:e.visible,centered:!0,okText:"提交"},on:{cancel:function(){e.visible=!1},ok:e.handleOk}},[i("div",[i("a-form-model",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[i("a-form-model-item",{attrs:{label:"是否暂停"}},[i("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否"},model:{value:e.examineParams.is_close,callback:function(t){e.$set(e.examineParams,"is_close",t)},expression:"examineParams.is_close"}})],1),i("a-form-model-item",{attrs:{label:"自定义文案"}},[i("a-textarea",{attrs:{placeholder:"请输入文案","auto-size":{minRows:3,maxRows:6}},model:{value:e.examineParams.is_close_body,callback:function(t){e.$set(e.examineParams,"is_close_body",t)},expression:"examineParams.is_close_body"}})],1)],1)],1)])],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h3",[i("a",[e._v("景区列表")])])}],l=i("4d95"),a={components:{},data:function(){return{labelCol:{span:6},wrapperCol:{span:14},examineParams:{tools_id:"",is_close_body:"",is_close:!1},visible:!1,dataList:[],pagination:{pageSize:10,total:0,current:1,page:1},queryParams:{page_size:0,page:1,keywords:"",type:"scenic",audit_status:""},colorMap:["green","cyan","blue","purple","pink","red","orange"],typeMap:{stadium:"场馆",course:"课程",scenic:"景区"},columns:[{title:this.L("标题"),dataIndex:"title"},{title:this.L("类型"),dataIndex:"type",key:"type",scopedSlots:{customRender:"type"}},{title:this.L("联系电话"),dataIndex:"phone",width:120},{title:this.L("金额"),dataIndex:"money",key:"money",scopedSlots:{customRender:"money"}},{title:this.L("点击量"),dataIndex:"view_count"},{title:this.L("状态"),dataIndex:"audit_status_text",key:"audit_status_text",scopedSlots:{customRender:"audit_status_text"}},{title:this.L("审核备注"),dataIndex:"audit_msg",scopedSlots:{customRender:"audit_msg"}},{title:this.L("提交时间"),dataIndex:"add_audit_time"},{title:this.L("标签/教练"),dataIndex:"label_arr",key:"label_arr",scopedSlots:{customRender:"label_arr"}},{title:this.L("景区状态"),dataIndex:"scenic_close",key:"scenic_close",scopedSlots:{customRender:"scenic_close"}},{title:this.L("门票列表"),dataIndex:"tools_id",key:"ticket",scopedSlots:{customRender:"ticket"}},{title:this.L("排序"),dataIndex:"sort",key:"sort",scopedSlots:{customRender:"sort"}},{title:this.L("是否启用"),dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:this.L("操作"),dataIndex:"tools_id",key:"action",width:100,scopedSlots:{customRender:"action"}}],auditOptions:[{value:"",label:this.L("全部状态")},{value:0,label:this.L("待审核")},{value:1,label:this.L("审核成功")},{value:2,label:this.L("审核失败")}]}},watch:{$route:function(){this.getLifeToolsList()}},created:function(){},mounted:function(){this.getLifeToolsList()},methods:{scenicCloseClick:function(e){this.examineParams.is_close=1==e.is_close,this.examineParams.is_close_body=e.is_close_body,this.examineParams.tools_id=e.tools_id,this.visible=!0},handleOk:function(e){var t=this;if(1==this.examineParams.is_close&&""==this.examineParams.is_close_body)return this.$message.warning("自定义文案不能为空！"),!1;this.request(l["a"].changeCloseStatus,this.examineParams).then((function(e){t.$message.success("操作成功！"),t.visible=!1,t.getLifeToolsList()}))},getLifeToolsList:function(){var e=this;this.queryParams.page_size=this.pagination.pageSize,this.queryParams.page=this.pagination.current,this.request(l["a"].getLifeToolsList,this.queryParams).then((function(t){e.dataList=t.data,e.pagination.total=t.total}))},changePage:function(e,t){this.pagination.current=e.current,this.getLifeToolsList()},onSearch:function(e){this.queryParams.keywords=e,this.getLifeToolsList()},delInformation:function(e){var t=this;this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){t.request(l["a"].delInformation,{pigcms_id:e}).then((function(e){t.$message.success(t.L("操作成功！")),t.getLifeToolsList()}))},onCancel:function(){}})},changeSort:function(e,t){var i=this,o=e.currentTarget.value;this.request(l["a"].setLifeToolsAttrs,{tools_id:t,sort:o}).then((function(e){i.getLifeToolsList()}))},switchChange:function(e,t){var i=this;t=t?1:0,this.request(l["a"].setLifeToolsAttrs,{tools_id:e,status:t}).then((function(e){i.getLifeToolsList()}))},isHotSwitchChange:function(e,t){var i=this;t=t?1:0,this.request(l["a"].setLifeToolsAttrs,{tools_id:e,is_hot:t}).then((function(e){i.getLifeToolsList()}))},addEditLifeTools:function(e){this.$router.push({path:"/merchant/merchant.life_tools/ScenicEdit",query:{tools_id:e}})},delLifeTools:function(e){var t=this;this.$confirm({title:"确定删除吗？",centered:!0,onOk:function(){t.request(l["a"].delLifeTools,{tools_id:e}).then((function(e){t.$message.success(t.L("操作成功！")),t.getLifeToolsList()}))},onCancel:function(){}})},handleSelectChange:function(e){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getLifeToolsList()}}},r=a,n=i("2877"),c=Object(n["a"])(r,o,s,!1,null,null,null);t["default"]=c.exports},"4d95":function(e,t,i){"use strict";var o={getTicketList:"life_tools/merchant.LifeToolsTicket/getList",getTicketDetail:"life_tools/merchant.LifeToolsTicket/getDetail",ticketDel:"life_tools/merchant.LifeToolsTicket/del",TicketEdit:"life_tools/merchant.LifeToolsTicket/addOrEdit",getLifeToolsList:"life_tools/merchant.LifeTools/getInformationList",setLifeToolsAttrs:"life_tools/merchant.LifeTools/setLifeToolsAttrs",getSportsOrderList:"/life_tools/merchant.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/merchant.SportsOrder/exportToolsOrder",getSportsOrderDetail:"/life_tools/merchant.SportsOrder/getOrderDetail",agreeSportsOrderRefund:"/life_tools/merchant.SportsOrder/agreeRefund",refuseSportsOrderRefund:"/life_tools/merchant.SportsOrder/refuseRefund",getEditInfo:"life_tools/merchant.LifeToolsTicket/getEditInfo",getCategoryList:"life_tools/merchant.LifeToolsCategory/getCategoryList",getMapConfig:"life_tools/merchant.LifeTools/getMapConfig",getAddressList:"life_tools/merchant.LifeTools/getAddressList",addEditLifeTools:"life_tools/merchant.LifeTools/addEditLifeTools",getLifeToolsDetail:"life_tools/merchant.LifeTools/getLifeToolsDetail",delLifeTools:"life_tools/merchant.LifeTools/delLifeTools",getReplyList:"/life_tools/merchant.LifeToolsReply/searchReply",isShowReply:"/life_tools/merchant.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/merchant.LifeToolsReply/getReplyDetails",delReply:"/life_tools/merchant.LifeToolsReply/delReply",subReply:"/life_tools/merchant.LifeToolsReply/subReply",getReplyContent:"/life_tools/merchant.LifeToolsReply/getReplyContent",getCardList:"/life_tools/merchant.EmployeeCard/getCardList",editCard:"/life_tools/merchant.EmployeeCard/editCard",saveCard:"/life_tools/merchant.EmployeeCard/saveCard",delCard:"/life_tools/merchant.EmployeeCard/delCard",getSportsVerifyList:"/life_tools/merchant.SportsOrder/getVerifyList",exportVerifyRecord:"/life_tools/merchant.SportsOrder/exportVerifyRecord",getLimitedList:"/life_tools/merchant.LifeScenicLimitedAct/getLimitedList",updateLimited:"/life_tools/merchant.LifeScenicLimitedAct/addLimited",limitedChangeState:"/life_tools/merchant.LifeScenicLimitedAct/changeState",removeLimited:"/life_tools/merchant.LifeScenicLimitedAct/del",getLimitedInfo:"/life_tools/merchant.LifeScenicLimitedAct/edit",getMerchantSort:"/life_tools/merchant.LifeToolsTicket/getMerchantSort",getLifeToolsTicket:"/life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",getToolsCardList:"/life_tools/merchant.LifeTools/getToolsCardList",AddOrEditToolsCard:"/life_tools/merchant.LifeTools/AddOrEditToolsCard",getToolsCardEdit:"/life_tools/merchant.LifeTools/getToolsCardEdit",delToolsCard:"/life_tools/merchant.LifeTools/delToolsCard",getAllToolsList:"/life_tools/merchant.LifeTools/getAllToolsList",getToolsCardRecord:"/life_tools/merchant.LifeTools/getToolsCardRecord",getCardOrderList:"/life_tools/merchant.LifeTools/getCardOrderList",getCardOrderDetail:"/life_tools/merchant.LifeTools/getCardOrderDetail",agreeCardOrderRefund:"/life_tools/merchant.LifeTools/agreeCardOrderRefund",refuseCardOrderRefund:"/life_tools/merchant.LifeTools/refuseCardOrderRefund",getSportsActivityList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityList",updateSportsActivityStatus:"/life_tools/merchant.LifeToolsSportsActivity/updateSportsActivityStatus",getSportsActivityOrderList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityOrderList",addSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/addSportsActivity",editSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/editSportsActivity",getTravelList:"/life_tools/merchant.LifeToolsGroupTravelAgency/getTravelList",agencyAudit:"/life_tools/merchant.LifeToolsGroupTravelAgency/audit",getStaffList:"/life_tools/merchant.LifeToolsTicket/getStaffList",getAppointList:"life_tools/merchant.LifeToolsAppoint/getList",getAppointMsg:"life_tools/merchant.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/merchant.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/merchant.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/merchant.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/merchant.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/merchant.LifeToolsAppoint/delAppoint",getSeatMap:"/life_tools/merchant.LifeToolsAppoint/getSeatMap",getAppointOrderDetail:"life_tools/merchant.LifeToolsAppoint/getAppointOrderDetail",auditRefund:"life_tools/merchant.LifeToolsAppoint/auditRefund",suspend:"life_tools/merchant.LifeToolsAppoint/suspend",getSportsSecondsKillList:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillList",saveSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/saveSecondsKill",ChangeSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/ChangeSportsSecondsKill",delSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/delSecondsKill",getSportsSecondsKillDetail:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillDetail",getGroupTicketList:"life_tools/merchant.group/getGroupTicketList",getGroupLifeToolsTicket:"life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",addGroupTicket:"life_tools/merchant.group/addGroupTicket",delGroupTicket:"life_tools/merchant.group/delGroupTicket",editSettingData:"life_tools/merchant.group/editSettingData",editGroupTicket:"life_tools/merchant.group/editGroupTicket",getSettingDataDetail:"life_tools/merchant.group/getSettingDataDetail",getStatisticsData:"life_tools/merchant.LifeToolsGroupOrder/getStatisticsData",getOrderList:"life_tools/merchant.LifeToolsGroupOrder/getOrderList",getOrderAuditList:"/life_tools/merchant.LifeToolsGroupOrder/getAuditGroupOrderList",orderAudit:"/life_tools/merchant.LifeToolsGroupOrder/audit",groupOrderRefand:"life_tools/merchant.LifeToolsGroupOrder/groupOrderRefand",editDistributionPrice:"life_tools/merchant.LifeToolsDistribution/editDistributionPrice",getDistributionSettingDataDetail:"/life_tools/merchant.LifeToolsDistribution/getSettingDataDetail",getDistributionSettingeditSetting:"/life_tools/merchant.LifeToolsDistribution/editSetting",getAtatisticsInfo:"/life_tools/merchant.LifeToolsDistribution/getAtatisticsInfo",getDistributorList:"/life_tools/merchant.LifeToolsDistribution/getDistributorList",getLowerLevel:"/life_tools/merchant.LifeToolsDistribution/getLowerLevel",audit:"/life_tools/merchant.LifeToolsDistribution/audit",getDistributionOrderList:"/life_tools/merchant.LifeToolsDistribution/getDistributionOrderList",editDistributionOrderNote:"/life_tools/merchant.LifeToolsDistribution/editDistributionOrderNote",delDistributor:"/life_tools/merchant.LifeToolsDistribution/delDistributor",addStatement:"/life_tools/merchant.LifeToolsDistribution/addStatement",getStatementList:"/life_tools/merchant.LifeToolsDistribution/getStatement",getStatementDetail:"/life_tools/merchant.LifeToolsDistribution/getStatementDetail",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getMapCity:"/g=Index&c=Map&a=suggestion",getCarParkList:"/life_tools/merchant.LifeToolsCarPark/getCarParkList",addCarPark:"/life_tools/merchant.LifeToolsCarPark/addCarPark",showCarPark:"/life_tools/merchant.LifeToolsCarPark/showCarPark",getToolsList:"/life_tools/merchant.LifeToolsCarPark/getToolsList",deleteCarPark:"/life_tools/merchant.LifeToolsCarPark/deleteCarPark",statusCarPark:"/life_tools/merchant.LifeToolsCarPark/statusCarPark",wifiList:"life_tools/merchant.LifeToolsWifi/wifiList",wifiAdd:"life_tools/merchant.LifeToolsWifi/wifiAdd",wifiShow:"life_tools/merchant.LifeToolsWifi/wifiShow",wifiStatusChange:"life_tools/merchant.LifeToolsWifi/wifiStatusChange",wifiDelete:"life_tools/merchant.LifeToolsWifi/wifiDelete",scenicMapSave:"/life_tools/merchant.LifeToolsScenicMap/saveMap",scenicMapPlaceList:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceList",scenicMapPlaceSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapPlace",scenicMapPlaceDel:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceDel",scenicMapLineList:"/life_tools/merchant.LifeToolsScenicMap/mapLineList",scenicMapLineSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapLine",scenicMapLineDel:"/life_tools/merchant.LifeToolsScenicMap/mapLineDel",scenicMapScenicList:"/life_tools/merchant.LifeToolsScenicMap/scenicList",scenicMapPlaceCatList:"/life_tools/merchant.LifeToolsScenicMap/categoryList",scenicMapPlaceCategoryDel:"/life_tools/merchant.LifeToolsScenicMap/categoryDel",scenicMapPlaceCategorySave:"/life_tools/merchant.LifeToolsScenicMap/saveCategory",scenicMapList:"/life_tools/merchant.LifeToolsScenicMap/mapList",scenicMapDel:"/life_tools/merchant.LifeToolsScenicMap/mapDel",scenicMapStatusSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapStatus",changeCloseStatus:"life_tools/merchant.LifeTools/changeCloseStatus",getAddEditCardMerchantInfo:"/life_tools/merchant.LifeTools/getAddEditCardMerchantInfo"};t["a"]=o}}]);