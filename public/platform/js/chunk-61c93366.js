(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61c93366"],{"14aa":function(e,o,t){"use strict";t.r(o);var l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("a-modal",{staticClass:"dialog",attrs:{title:e.titleName,width:"65%",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("div",{staticStyle:{"margin-top":"5px",padding:"10px","background-color":"#fff"}},[t("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[t("a-form-model-item",{attrs:{label:"标题"}},[t("a-input",{attrs:{placeholder:"标题"},model:{value:e.searchForm.title,callback:function(o){e.$set(e.searchForm,"title",o)},expression:"searchForm.title"}})],1),t("a-form-model-item",[t("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(o){return e.submitForm(!0)}}},[e._v("搜索")])],1)],1),t("a-table",{attrs:{rowKey:"goods_id",columns:e.columns,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"data-source":e.datalist,pagination:e.pagination,bordered:""}})],1)])},i=[],s=t("5530"),a=t("f9e9"),r=[{title:"ID",dataIndex:"goods_id",key:"goods_id"},{title:"名称",dataIndex:"goods_name",key:"goods_name"},{title:"商家名称",dataIndex:"name",key:"name"},{title:"售价",dataIndex:"goods_price",key:"goods_price"}],f={onChange:function(e,o){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",o)}},m={name:"SelectRecGoods",data:function(){return{titleName:"选择景区",dialogVisible:!1,rowSelection:f,labelCol:{span:4},wrapperCol:{span:14},datalist:[],columns:r,addVisible:!1,editVisible:!1,recordVisible:!1,currentBtn:"",ewmVisible:!1,setVisible:!1,ewm:"",ewmName:"",configForm:{scan_money_desc:"",scan_score_desc:"",scan_timeout:"3"},searchForm:{goods_type:"",title:"",recommend_id:0},selectedRowKeys:[],selectedRows:[],cat_id:"",pagination:{current:1,total:0,pageSize:5,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},methods:{onSelectChange:function(e,o){this.selectedRowKeys=e,this.selectedRows=o,console.log(e,"selectedRowKeys==selectedRowKeys"),console.log(o,"selectedRows==selectedRows")},openDialog:function(e,o){this.dialogVisible=!0,this.searchForm.goods_type=e,this.titleName="ticket"==e?"选择景区":"sport"==e?"选择体育":"shop"==e?"选择快店商品":"选择商城商品",this.searchForm.recommend_id=o,this.getDataList()},getDataList:function(e){var o=this,t=Object(s["a"])({},this.searchForm);!0===e?(t.page=1,t.keyWords=this.searchForm.title,this.$set(this.pagination,"current",1)):(t.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),t.pageSize=this.pagination.pageSize,this.request(a["a"].getGoodsList,t).then((function(e){o.datalist=e.list,o.$set(o.pagination,"total",e.total)}))},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.getDataList(e)},resetForm:function(){this.$set(this,"searchForm",{name:"",status:-1}),this.$set(this.pagination,"current",1),this.getDataList()},onPageChange:function(e,o){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,o){this.$set(this.pagination,"pageSize",o),this.submitForm()},confirm:function(e,o){this.onChange(e,o)},setCancel:function(){this.setVisible=!1},handleOk:function(){var e=this;this.selectedRowKeys.length?(this.request(a["a"].addRecGoods,{selectedRowKeys:this.selectedRowKeys,goods_type:this.searchForm.goods_type,recommend_id:this.searchForm.recommend_id}).then((function(o){e.$message.success("添加成功"),"ticket"==e.searchForm.goods_type||"sport"==e.searchForm.goods_type||e.searchForm.goods_type,e.$emit("getTable")})),this.handleCancel()):this.$message.error("请选择")},handleCancel:function(){this.searchForm={title:""},this.selectedRowKeys=[],this.selectedRows=[],this.dialogVisible=!1}}},d=m,n=t("2877"),c=Object(n["a"])(d,l,i,!1,null,"424dd12c",null);o["default"]=c.exports},f9e9:function(e,o,t){"use strict";var l={recDisplay:"life_tools/platform.HomeDecorate/recDisplay",getUrlAndRecSwitch:"life_tools/platform.HomeDecorate/getUrlAndRecSwitch",getUrlAndRecSwitchSport:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchSport",getUrlAndRecSwitchTicket:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchTicket",getList:"life_tools/platform.HomeDecorate/getList",getDel:"life_tools/platform.HomeDecorate/getDel",getEdit:"life_tools/platform.HomeDecorate/getEdit",getAllArea:"/life_tools/platform.HomeDecorate/getAllArea",addOrEditDecorate:"life_tools/platform.HomeDecorate/addOrEdit",getRecEdit:"life_tools/platform.HomeDecorate/getRecEdit",getRecList:"life_tools/platform.HomeDecorate/getRecList",delRecAdver:"life_tools/platform.HomeDecorate/delRecAdver",addOrEditRec:"life_tools/platform.HomeDecorate/addOrEditRec",delOne:"/life_tools/platform.HomeDecorate/delOne",getRelatedList:"life_tools/platform.HomeDecorate/getRelatedList",saveRelatedSort:"/life_tools/platform.HomeDecorate/saveRelatedSort",addRelatedCate:"life_tools/platform.HomeDecorate/addRelatedCate",getCateList:"life_tools/platform.HomeDecorate/getCateList",getRelatedInfoList:"life_tools/platform.HomeDecorate/getRelatedInfoList",getInfoList:"life_tools/platform.HomeDecorate/getInfoList",addRelatedInfo:"life_tools/platform.HomeDecorate/addRelatedInfo",delInfo:"/life_tools/platform.HomeDecorate/delInfo",saveRelatedInfoSort:"/life_tools/platform.HomeDecorate/saveRelatedInfoSort",getRelatedCourseList:"life_tools/platform.HomeDecorate/getRelatedCourseList",getCourseList:"life_tools/platform.HomeDecorate/getCourseList",getScenicList:"life_tools/platform.HomeDecorate/getScenicList",addRelatedCourse:"life_tools/platform.HomeDecorate/addRelatedCourse",addRelatedScenic:"life_tools/platform.HomeDecorate/addRelatedScenic",delCourse:"/life_tools/platform.HomeDecorate/delCourse",saveRelatedCourseSort:"/life_tools/platform.HomeDecorate/saveRelatedCourseSort",saveRelatedScenicSort:"/life_tools/platform.HomeDecorate/saveRelatedScenicSort",delScenic:"/life_tools/platform.HomeDecorate/delScenic",getRelatedToolsList:"life_tools/platform.HomeDecorate/getRelatedToolsList",getRelatedScenicList:"life_tools/platform.HomeDecorate/getRelatedScenicList",getToolsList:"life_tools/platform.HomeDecorate/getToolsList",addRelatedTools:"life_tools/platform.HomeDecorate/addRelatedTools",delTools:"/life_tools/platform.HomeDecorate/delTools",saveRelatedToolsSort:"/life_tools/platform.HomeDecorate/saveRelatedToolsSort",setToolsName:"/life_tools/platform.HomeDecorate/setToolsName",getRelatedCompetitionList:"life_tools/platform.HomeDecorate/getRelatedCompetitionList",getCompetitionList:"life_tools/platform.HomeDecorate/getCompetitionList",addRelatedCompetition:"life_tools/platform.HomeDecorate/addRelatedCompetition",delCompetition:"/life_tools/platform.HomeDecorate/delCompetition",saveRelatedCompetitionSort:"/life_tools/platform.HomeDecorate/saveRelatedCompetitionSort",getReplyList:"/life_tools/platform.LifeToolsReply/searchReply",isShowReply:"/life_tools/platform.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/platform.LifeToolsReply/getReplyDetails",delReply:"/life_tools/platform.LifeToolsReply/delReply",subReply:"/life_tools/platform.LifeToolsReply/subReply",getReplyContent:"/life_tools/platform.LifeToolsReply/getReplyContent",getSportsOrderList:"/life_tools/platform.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/platform.SportsOrder/exportToolsOrder",getSportList:"life_tools/platform.LifeToolsCompetition/getList",getToolCompetitionMsg:"life_tools/platform.LifeToolsCompetition/getToolCompetitionMsg",saveToolCompetition:"life_tools/platform.LifeToolsCompetition/saveToolCompetition",lookCompetitionUser:"life_tools/platform.LifeToolsCompetition/lookCompetitionUser",closeCompetition:"life_tools/platform.LifeToolsCompetition/closeCompetition",exportUserOrder:"life_tools/platform.LifeToolsCompetition/exportUserOrder",delSport:"life_tools/platform.LifeToolsCompetition/delSport",getSportsOrderDetail:"/life_tools/platform.SportsOrder/getOrderDetail",getInformationList:"life_tools/platform.LifeToolsInformation/getInformationList",addEditInformation:"life_tools/platform.LifeToolsInformation/addEditInformation",getInformationDetail:"life_tools/platform.LifeToolsInformation/getInformationDetail",getAllScenic:"life_tools/platform.LifeTools/getAllScenic",delInformation:"life_tools/platform.LifeToolsInformation/delInformation",loginMer:"/life_tools/platform.SportsOrder/loginMer",getCategoryList:"life_tools/platform.LifeToolsCategory/getList",getCategoryDetail:"life_tools/platform.LifeToolsCategory/getDetail",categoryDel:"life_tools/platform.LifeToolsCategory/del",categoryEdit:"life_tools/platform.LifeToolsCategory/addOrEdit",categorySortEdit:"life_tools/platform.LifeToolsCategory/editSort",getLifeToolsList:"life_tools/platform.LifeTools/getList",setLifeToolsAttrs:"life_tools/platform.LifeTools/setLifeToolsAttrs",getHelpNoticeList:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeList",delHelpNotice:"life_tools/platform.LifeToolsHelpNotice/delHelpNotice",getHelpNoticeDetail:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeDetail",getComplaintAdviceList:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceList",changeComplaintAdviceStatus:"life_tools/platform.LifeToolsComplaintAdvice/changeComplaintAdviceStatus",delComplaintAdvice:"life_tools/platform.LifeToolsComplaintAdvice/delComplaintAdvice",getComplaintAdviceDetail:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceDetail",changeHelpNoticeStatus:"life_tools/platform.LifeToolsHelpNotice/changeHelpNoticeStatus",getRecGoodsList:"life_tools/platform.IndexRecommend/getRecList",delRecGoods:"life_tools/platform.IndexRecommend/delRecGoods",updateRec:"life_tools/platform.IndexRecommend/updateRec",getGoodsList:"life_tools/platform.IndexRecommend/getGoodsList",addRecGoods:"life_tools/platform.IndexRecommend/addRecGoods",updateRecGoods:"life_tools/platform.IndexRecommend/updateRecGoods",addEditKefu:"life_tools/platform.LifeToolsKefu/addEditKefu",getKefuList:"life_tools/platform.LifeToolsKefu/getKefuList",getKefuDetail:"life_tools/platform.LifeToolsKefu/getKefuDetail",delKefu:"life_tools/platform.LifeToolsKefu/delKefu",getMapConfig:"life_tools/platform.LifeTools/getMapConfig",getAppointList:"life_tools/platform.LifeToolsAppoint/getList",getAppointMsg:"life_tools/platform.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/platform.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/platform.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/platform.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/platform.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/platform.LifeToolsAppoint/delAppoint",getHousesFloorList:"life_tools/platform.LifeToolsHousesList/getHousesFloorList",updateHousesFloorStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorStatus",getHousesFloorMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorMsg",editHouseFloor:"life_tools/platform.LifeToolsHousesList/editHouseFloor",getChildList:"life_tools/platform.LifeToolsHousesList/getChildList",getHousesFloorPlanMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorPlanMsg",editHouseFloorPlan:"life_tools/platform.LifeToolsHousesList/editHouseFloorPlan",updateHousesFloorPlanStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorPlanStatus",getSportsIndexHotRecommond:"/life_tools/platform.HomeDecorate/getSportsIndexHotRecommond",getSportsHotRecommendList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendList",addSportsHotRecommendList:"/life_tools/platform.HomeDecorate/addSportsHotRecommendList",getSportsHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendSelectedList",delSportsHotRecommendList:"/life_tools/platform.HomeDecorate/delSportsHotRecommendList",saveSportsHotRecommendSort:"/life_tools/platform.HomeDecorate/saveSportsHotRecommendSort",getScenicIndexHotRecommond:"/life_tools/platform.HomeDecorate/getScenicIndexHotRecommond",getScenicHotRecommendList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendList",addScenicHotRecommendList:"/life_tools/platform.HomeDecorate/addScenicHotRecommendList",getScenicHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendSelectedList",delScenicHotRecommendList:"/life_tools/platform.HomeDecorate/delScenicHotRecommendList",saveScenicHotRecommendSort:"/life_tools/platform.HomeDecorate/saveScenicHotRecommendSort",getAtatisticsInfo:"/life_tools/platform.LifeToolsTicketSystem/getAtatisticsInfo",ticketSystemExport:"/life_tools/platform.LifeToolsTicketSystem/ticketSystemExport",orderList:"/life_tools/platform.LifeToolsTicketSystem/orderList",getOrderDetail:"/life_tools/platform.LifeToolsTicketSystem/getOrderDetail",orderVerification:"/life_tools/platform.LifeToolsTicketSystem/orderVerification",orderBack:"/life_tools/platform.LifeToolsTicketSystem/orderBack",getCardOrderList:"/life_tools/platform.CardSystem/getCardOrderList",getCardOrderDetail:"/life_tools/platform.CardSystem/getCardOrderDetail",CardOrderBack:"/life_tools/platform.CardSystem/CardOrderBack",cardSystemExport:"/life_tools/platform.CardSystem/cardSystemExport",lifeToolsAuditList:"/life_tools/platform.LifeTools/lifeToolsAuditList",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",getAuditTicketList:"/life_tools/platform.LifeToolsTicket/getAuditTicketList",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getNotAuditNum:"/life_tools/platform.LifeToolsTicket/getNotAuditNum",getAuditAdminList:"/life_tools/platform.LifeToolsCompetition/getAuditAdminList",getMyAuditList:"/life_tools/platform.LifeToolsCompetition/getMyAuditList",getMyAuditCount:"/life_tools/platform.LifeToolsCompetition/getMyAuditCount",getMyAuditInfo:"/life_tools/platform.LifeToolsCompetition/getMyAuditInfo",audit:"/life_tools/platform.LifeToolsCompetition/audit"};o["a"]=l}}]);