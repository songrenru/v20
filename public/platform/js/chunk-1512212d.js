(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1512212d","chunk-7ed85db4"],{5232:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{staticClass:"dialog",attrs:{title:"选择公告",width:"50%",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[o("div",{staticStyle:{"margin-top":"5px",padding:"10px","background-color":"#fff"}},[o("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[o("a-form-model-item",{attrs:{label:"公告标题"}},[o("a-input",{attrs:{placeholder:"公告标题"},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1),o("a-form-model-item",[o("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm(!0)}}},[e._v("搜索")])],1)],1),o("a-table",{attrs:{rowKey:"pigcms_id",columns:e.columns,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"data-source":e.datalist,pagination:e.pagination,bordered:""}})],1)])},i=[],s=o("5530"),a=o("f9e9"),r=o("c1df"),n=o.n(r),f=[{title:"ID",dataIndex:"pigcms_id",key:"pigcms_id"},{title:"名称",dataIndex:"title",key:"title"},{title:"显示类型",dataIndex:"show_type",key:"show_type"},{title:"显示开始时间",dataIndex:"start_time",key:"start_time"},{title:"显示结束时间",dataIndex:"end_time",key:"end_time"}],c={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)}},d={data:function(){return{dialogVisible:!1,rowSelection:c,labelCol:{span:4},wrapperCol:{span:14},datalist:[],columns:f,addVisible:!1,editVisible:!1,recordVisible:!1,currentBtn:"",ewmVisible:!1,setVisible:!1,ewm:"",ewmName:"",configForm:{scan_money_desc:"",scan_score_desc:"",scan_timeout:"3"},life_type:"sports",searchForm:{name:"",status:-1},selectedRowKeys:[],selectedRows:[],cat_id:"",pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},created:function(){this.getDataList(!1)},methods:{onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},openDialog:function(e){this.dialogVisible=!0,"scenic"==e&&(this.life_type="scenic"),this.getDataList()},moment:n.a,getDataList:function(e){var t=this,o=Object(s["a"])({},this.searchForm);!0===e?(o.page=1,this.$set(this.pagination,"current",1)):(o.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),o.pageSize=this.pagination.pageSize,o.type=this.life_type,this.request(a["a"].getInfoList,o).then((function(e){t.datalist=e.data,t.$set(t.pagination,"total",e.total)}))},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.getDataList(e)},resetForm:function(){this.$set(this,"searchForm",{name:"",status:-1}),this.$set(this.pagination,"current",1),this.getDataList()},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},confirm:function(e,t){this.onChange(e,t)},setCancel:function(){this.setVisible=!1},handleOk:function(){var e=this;this.selectedRowKeys.length?(this.request(a["a"].addRelatedInfo,{information_id:this.selectedRowKeys}).then((function(t){e.$message.success("添加成功"),e.$emit("backDeal",e.cat_key,e.title)})),this.handleCancel()):this.$message.error("请选择公告")},handleCancel:function(){this.searchForm={title:""},this.selectedRowKeys=[],this.selectedRows=[],this.dialogVisible=!1}}},m=d,p=o("2877"),g=Object(p["a"])(m,l,i,!1,null,null,null);t["default"]=g.exports},"5c75":function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{width:1e3,height:640,title:"推荐公告列表",visible:e.dialogVisible},on:{cancel:e.handleCancel,ok:e.handleOk}},[o("div",[o("a-button",{staticStyle:{"margin-bottom":"14px"},attrs:{type:"primary"},on:{click:e.getGoods}},[e._v("添加公告")]),o("a-table",{attrs:{columns:e.columns,rowKey:"pigcms_id",dataSource:e.data,scroll:{y:440},pagination:e.pagination},on:{change:e.tableChange},scopedSlots:e._u([{key:"sort",fn:function(t,l){return o("span",{},[o("a-input-number",{staticClass:"sort-input",attrs:{"default-value":t||0,precision:0,min:0},on:{blur:function(o){return e.handleSortChange(o,t,l)}},model:{value:l.sort,callback:function(t){e.$set(l,"sort",t)},expression:"record.sort"}})],1)}},{key:"action",fn:function(t,l){return o("span",{},[o("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(l.pigcms_id)}}},[o("a",[e._v("删除")])])],1)}}])}),o("select-info",{ref:"SelectInfo",attrs:{source:e.source,selectedList:e.data},on:{backDeal:function(t){return e.getList(1,10)}}})],1)])},i=[],s=(o("4e82"),o("f9e9")),a=o("5232"),r=[{title:"ID",dataIndex:"pigcms_id",key:"pigcms_id"},{title:"标题",dataIndex:"title",key:"title"},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"},sorter:function(e,t){return e.sort-t.sort}},{title:"操作",dataIndex:"action",key:"action",scopedSlots:{customRender:"action"}}],n={name:"relatedInfo",components:{SelectInfo:a["default"]},props:{source:{type:String,default:"platform_rec"},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{data:[],columns:r,dialogVisible:!1,dec_id:"",type:"",title:"",life_type:"sports",page:1,pageSize:10,pagination:{pageSize:10,total:0,"show-total":function(e){return"共 ".concat(e," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0}}},methods:{openDialog:function(e){console.log(1111111,e),this.dialogVisible=!0,"scenic"==e&&(this.life_type="scenic"),console.log(1111111,e),this.getList(1,10)},getList:function(e,t){var o=this;this.request(s["a"].getRelatedInfoList,{page:e,type:this.life_type}).then((function(e){console.log(e),o.data=e.list,o.pagination.total=e.total}))},onSelectChange:function(){console.log("selectedRowKeys changed: ",selectedRowKeys)},handleCancel:function(){this.dialogVisible=!1},handleOk:function(){this.dialogVisible=!1},getGoods:function(){this.$refs.SelectInfo.openDialog(this.life_type)},handleSortChange:function(e,t,o){var l=this,i={pigcms_id:o.pigcms_id,sort:t};this.request(s["a"].saveRelatedInfoSort,i).then((function(e){l.getList(1,10)}))},delOne:function(e){var t=this,o={pigcms_id:e};this.request(s["a"].delInfo,o).then((function(e){t.getList(1,10)}))},tableChange:function(e){this.pageSize=e.pageSize,e.current&&e.current>0&&(this.page=e.current)}}},f=n,c=o("2877"),d=Object(c["a"])(f,l,i,!1,null,"01489352",null);t["default"]=d.exports},f9e9:function(e,t,o){"use strict";var l={recDisplay:"life_tools/platform.HomeDecorate/recDisplay",getUrlAndRecSwitch:"life_tools/platform.HomeDecorate/getUrlAndRecSwitch",getUrlAndRecSwitchSport:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchSport",getUrlAndRecSwitchTicket:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchTicket",getList:"life_tools/platform.HomeDecorate/getList",getDel:"life_tools/platform.HomeDecorate/getDel",getEdit:"life_tools/platform.HomeDecorate/getEdit",getAllArea:"/life_tools/platform.HomeDecorate/getAllArea",addOrEditDecorate:"life_tools/platform.HomeDecorate/addOrEdit",getRecEdit:"life_tools/platform.HomeDecorate/getRecEdit",getRecList:"life_tools/platform.HomeDecorate/getRecList",delRecAdver:"life_tools/platform.HomeDecorate/delRecAdver",addOrEditRec:"life_tools/platform.HomeDecorate/addOrEditRec",delOne:"/life_tools/platform.HomeDecorate/delOne",getRelatedList:"life_tools/platform.HomeDecorate/getRelatedList",saveRelatedSort:"/life_tools/platform.HomeDecorate/saveRelatedSort",addRelatedCate:"life_tools/platform.HomeDecorate/addRelatedCate",getCateList:"life_tools/platform.HomeDecorate/getCateList",getRelatedInfoList:"life_tools/platform.HomeDecorate/getRelatedInfoList",getInfoList:"life_tools/platform.HomeDecorate/getInfoList",addRelatedInfo:"life_tools/platform.HomeDecorate/addRelatedInfo",delInfo:"/life_tools/platform.HomeDecorate/delInfo",saveRelatedInfoSort:"/life_tools/platform.HomeDecorate/saveRelatedInfoSort",getRelatedCourseList:"life_tools/platform.HomeDecorate/getRelatedCourseList",getCourseList:"life_tools/platform.HomeDecorate/getCourseList",getScenicList:"life_tools/platform.HomeDecorate/getScenicList",addRelatedCourse:"life_tools/platform.HomeDecorate/addRelatedCourse",addRelatedScenic:"life_tools/platform.HomeDecorate/addRelatedScenic",delCourse:"/life_tools/platform.HomeDecorate/delCourse",saveRelatedCourseSort:"/life_tools/platform.HomeDecorate/saveRelatedCourseSort",saveRelatedScenicSort:"/life_tools/platform.HomeDecorate/saveRelatedScenicSort",delScenic:"/life_tools/platform.HomeDecorate/delScenic",getRelatedToolsList:"life_tools/platform.HomeDecorate/getRelatedToolsList",getRelatedScenicList:"life_tools/platform.HomeDecorate/getRelatedScenicList",getToolsList:"life_tools/platform.HomeDecorate/getToolsList",addRelatedTools:"life_tools/platform.HomeDecorate/addRelatedTools",delTools:"/life_tools/platform.HomeDecorate/delTools",saveRelatedToolsSort:"/life_tools/platform.HomeDecorate/saveRelatedToolsSort",setToolsName:"/life_tools/platform.HomeDecorate/setToolsName",getRelatedCompetitionList:"life_tools/platform.HomeDecorate/getRelatedCompetitionList",getCompetitionList:"life_tools/platform.HomeDecorate/getCompetitionList",addRelatedCompetition:"life_tools/platform.HomeDecorate/addRelatedCompetition",delCompetition:"/life_tools/platform.HomeDecorate/delCompetition",saveRelatedCompetitionSort:"/life_tools/platform.HomeDecorate/saveRelatedCompetitionSort",getReplyList:"/life_tools/platform.LifeToolsReply/searchReply",isShowReply:"/life_tools/platform.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/platform.LifeToolsReply/getReplyDetails",delReply:"/life_tools/platform.LifeToolsReply/delReply",subReply:"/life_tools/platform.LifeToolsReply/subReply",getReplyContent:"/life_tools/platform.LifeToolsReply/getReplyContent",getSportsOrderList:"/life_tools/platform.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/platform.SportsOrder/exportToolsOrder",getSportList:"life_tools/platform.LifeToolsCompetition/getList",getToolCompetitionMsg:"life_tools/platform.LifeToolsCompetition/getToolCompetitionMsg",saveToolCompetition:"life_tools/platform.LifeToolsCompetition/saveToolCompetition",lookCompetitionUser:"life_tools/platform.LifeToolsCompetition/lookCompetitionUser",closeCompetition:"life_tools/platform.LifeToolsCompetition/closeCompetition",exportUserOrder:"life_tools/platform.LifeToolsCompetition/exportUserOrder",delSport:"life_tools/platform.LifeToolsCompetition/delSport",getSportsOrderDetail:"/life_tools/platform.SportsOrder/getOrderDetail",getInformationList:"life_tools/platform.LifeToolsInformation/getInformationList",addEditInformation:"life_tools/platform.LifeToolsInformation/addEditInformation",getInformationDetail:"life_tools/platform.LifeToolsInformation/getInformationDetail",getAllScenic:"life_tools/platform.LifeTools/getAllScenic",delInformation:"life_tools/platform.LifeToolsInformation/delInformation",loginMer:"/life_tools/platform.SportsOrder/loginMer",getCategoryList:"life_tools/platform.LifeToolsCategory/getList",getCategoryDetail:"life_tools/platform.LifeToolsCategory/getDetail",categoryDel:"life_tools/platform.LifeToolsCategory/del",categoryEdit:"life_tools/platform.LifeToolsCategory/addOrEdit",categorySortEdit:"life_tools/platform.LifeToolsCategory/editSort",getLifeToolsList:"life_tools/platform.LifeTools/getList",setLifeToolsAttrs:"life_tools/platform.LifeTools/setLifeToolsAttrs",getHelpNoticeList:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeList",delHelpNotice:"life_tools/platform.LifeToolsHelpNotice/delHelpNotice",getHelpNoticeDetail:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeDetail",getComplaintAdviceList:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceList",changeComplaintAdviceStatus:"life_tools/platform.LifeToolsComplaintAdvice/changeComplaintAdviceStatus",delComplaintAdvice:"life_tools/platform.LifeToolsComplaintAdvice/delComplaintAdvice",getComplaintAdviceDetail:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceDetail",changeHelpNoticeStatus:"life_tools/platform.LifeToolsHelpNotice/changeHelpNoticeStatus",getRecGoodsList:"life_tools/platform.IndexRecommend/getRecList",delRecGoods:"life_tools/platform.IndexRecommend/delRecGoods",updateRec:"life_tools/platform.IndexRecommend/updateRec",getGoodsList:"life_tools/platform.IndexRecommend/getGoodsList",addRecGoods:"life_tools/platform.IndexRecommend/addRecGoods",updateRecGoods:"life_tools/platform.IndexRecommend/updateRecGoods",addEditKefu:"life_tools/platform.LifeToolsKefu/addEditKefu",getKefuList:"life_tools/platform.LifeToolsKefu/getKefuList",getKefuDetail:"life_tools/platform.LifeToolsKefu/getKefuDetail",delKefu:"life_tools/platform.LifeToolsKefu/delKefu",getMapConfig:"life_tools/platform.LifeTools/getMapConfig",getAppointList:"life_tools/platform.LifeToolsAppoint/getList",getAppointMsg:"life_tools/platform.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/platform.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/platform.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/platform.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/platform.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/platform.LifeToolsAppoint/delAppoint",getHousesFloorList:"life_tools/platform.LifeToolsHousesList/getHousesFloorList",updateHousesFloorStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorStatus",getHousesFloorMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorMsg",editHouseFloor:"life_tools/platform.LifeToolsHousesList/editHouseFloor",getChildList:"life_tools/platform.LifeToolsHousesList/getChildList",getHousesFloorPlanMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorPlanMsg",editHouseFloorPlan:"life_tools/platform.LifeToolsHousesList/editHouseFloorPlan",updateHousesFloorPlanStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorPlanStatus",getSportsIndexHotRecommond:"/life_tools/platform.HomeDecorate/getSportsIndexHotRecommond",getSportsHotRecommendList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendList",addSportsHotRecommendList:"/life_tools/platform.HomeDecorate/addSportsHotRecommendList",getSportsHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendSelectedList",delSportsHotRecommendList:"/life_tools/platform.HomeDecorate/delSportsHotRecommendList",saveSportsHotRecommendSort:"/life_tools/platform.HomeDecorate/saveSportsHotRecommendSort",getScenicIndexHotRecommond:"/life_tools/platform.HomeDecorate/getScenicIndexHotRecommond",getScenicHotRecommendList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendList",addScenicHotRecommendList:"/life_tools/platform.HomeDecorate/addScenicHotRecommendList",getScenicHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendSelectedList",delScenicHotRecommendList:"/life_tools/platform.HomeDecorate/delScenicHotRecommendList",saveScenicHotRecommendSort:"/life_tools/platform.HomeDecorate/saveScenicHotRecommendSort",getAtatisticsInfo:"/life_tools/platform.LifeToolsTicketSystem/getAtatisticsInfo",ticketSystemExport:"/life_tools/platform.LifeToolsTicketSystem/ticketSystemExport",orderList:"/life_tools/platform.LifeToolsTicketSystem/orderList",getOrderDetail:"/life_tools/platform.LifeToolsTicketSystem/getOrderDetail",orderVerification:"/life_tools/platform.LifeToolsTicketSystem/orderVerification",orderBack:"/life_tools/platform.LifeToolsTicketSystem/orderBack",getCardOrderList:"/life_tools/platform.CardSystem/getCardOrderList",getCardOrderDetail:"/life_tools/platform.CardSystem/getCardOrderDetail",CardOrderBack:"/life_tools/platform.CardSystem/CardOrderBack",cardSystemExport:"/life_tools/platform.CardSystem/cardSystemExport",lifeToolsAuditList:"/life_tools/platform.LifeTools/lifeToolsAuditList",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",getAuditTicketList:"/life_tools/platform.LifeToolsTicket/getAuditTicketList",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getNotAuditNum:"/life_tools/platform.LifeToolsTicket/getNotAuditNum",getAuditAdminList:"/life_tools/platform.LifeToolsCompetition/getAuditAdminList",getMyAuditList:"/life_tools/platform.LifeToolsCompetition/getMyAuditList",getMyAuditCount:"/life_tools/platform.LifeToolsCompetition/getMyAuditCount",getMyAuditInfo:"/life_tools/platform.LifeToolsCompetition/getMyAuditInfo",audit:"/life_tools/platform.LifeToolsCompetition/audit"};t["a"]=l}}]);