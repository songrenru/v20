(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77cde88b"],{3425:function(t,e,o){},5398:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("a-row",{staticStyle:{margin:"10px 0",display:"flex","align-items":"center"}},[o("a-select",{staticStyle:{width:"120px"},model:{value:t.queryParmas.search_type,callback:function(e){t.$set(t.queryParmas,"search_type",e)},expression:"queryParmas.search_type"}},t._l(t.option1,(function(e,i){return o("a-select-option",{key:e.key,attrs:{value:e.key}},[t._v(t._s(e.label))])})),1),o("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入"},model:{value:t.queryParmas.keywords,callback:function(e){t.$set(t.queryParmas,"keywords",e)},expression:"queryParmas.keywords"}}),o("div",{staticClass:"flag"},[o("p",[t._v("状态:")]),o("a-select",{staticStyle:{width:"120px"},model:{value:t.queryParmas.status,callback:function(e){t.$set(t.queryParmas,"status",e)},expression:"queryParmas.status"}},t._l(t.option2,(function(e,i){return o("a-select-option",{key:e.key,attrs:{value:e.key}},[t._v(t._s(e.label))])})),1)],1),o("a-button",{staticStyle:{margin:"10px 10px 10px 3%"},attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1),o("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:t.columns,rowKey:"id","data-source":t.dataList,pagination:t.pagination},scopedSlots:t._u([{key:"status",fn:function(e,i){return o("span",{},[0==i.status?o("span",{staticStyle:{color:"#faad14"}},[t._v(t._s(i.status_text))]):1==i.status?o("span",{staticStyle:{color:"#52c41a"}},[t._v(t._s(i.status_text))]):o("span",{staticStyle:{color:"red"}},[t._v(t._s(i.status_text))])])}},{key:"operation",fn:function(e,i){return o("span",{},[o("a",{on:{click:function(e){return t.examine(i)}}},[t._v(t._s(0!=i.status?t.L("重新审核"):t.L("审核")))])])}}])}),o("a-modal",{attrs:{destroyOnClose:"",title:"审核",width:"45%",centered:!0,okText:"提交"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("div",{staticClass:"newBox",staticStyle:{padding:"0 40px"}},[t.detail?o("div",{staticClass:"info-list"},[o("div",[o("div",{staticClass:"info"},[o("span",{staticClass:"h3"},[t._v("订单信息：")])]),o("div",{staticClass:"info"},[o("span",[t._v("订单编号：")]),o("span",[t._v(t._s(t.detail.real_orderid))])]),o("div",{staticClass:"info"},[o("span",[t._v("订单状态：")]),o("span",[t._v(t._s(t.detail.status_text))])]),o("div",{staticClass:"info"},[o("span",[t._v("下单时间：")]),o("span",[t._v(t._s(t.detail.add_time_text))])]),o("div",{staticClass:"info"},[o("span",[t._v("报名费用：")]),o("span",[t._v(t._s(t.detail.price))])]),o("div",{staticClass:"info"},[o("span",[t._v("是否支付：")]),o("span",[t._v(t._s(1==t.detail.paid?"已支付":"未支付"))])]),o("div",{staticClass:"info"},[o("span",[t._v("支付时间：")]),o("span",[t._v(t._s(t.detail.paid_time_text))])]),o("div",{staticClass:"info"},[o("span",[t._v("积分抵扣数：")]),o("span",[t._v(t._s(t.detail.system_score_money))])]),o("div",{staticClass:"info"},[o("span",[t._v("平台优惠券的金额：")]),o("span",[t._v(t._s(t.detail.coupon_price))])]),o("div",{staticClass:"info"},[o("span",{staticClass:"h3"},[t._v("活动信息：")])]),o("div",{staticClass:"info"},[o("span",[t._v("活动名称：")]),o("span",[t._v(t._s(t.detail.competition.title))])]),o("div",{staticClass:"info"},[o("span",[t._v("活动日期：")]),o("span",[t._v(t._s(t.detail.competition.date))])]),o("div",{staticClass:"info"},[o("span",[t._v("活动简介：")]),o("span",{domProps:{innerHTML:t._s(t.detail.competition.content)}})]),o("div",{staticClass:"info"},[o("span",[t._v("活动地址：")]),o("span",[t._v(t._s(t.detail.competition.address))])])]),o("div",{staticClass:"info"},[o("span",{staticClass:"h3"},[t._v("用户提交表单信息：")])])]):t._e(),o("div",{staticClass:"info-list"},[t._l(t.arletItem,(function(e,i){return o("div",{key:i},["image"==e.type?o("div",{},[o("div",{staticClass:"info"},[o("span",[t._v(t._s(e.title)+"：")]),o("div",{staticStyle:{flex:"1"}},t._l(e.show_value,(function(e,i){return o("img",{key:i,attrs:{alt:"暂无图片",src:e},on:{click:function(o){return t.previewImageClick(e)}}})})),0)])]):o("div",{staticClass:"info"},[o("span",[t._v(t._s(e.title)+"：")]),o("span",[t._v(t._s(e.show_value))])])])})),o("div",{staticClass:"info"},[o("span",[t._v("是否审核通过：")]),o("a-radio-group",{attrs:{options:t.plainOptions},model:{value:t.submit.status,callback:function(e){t.$set(t.submit,"status",e)},expression:"submit.status"}})],1),o("div",{staticClass:"info"},[o("span",[t._v("备注：")]),o("a-textarea",{attrs:{"auto-size":{minRows:3,maxRows:6}},model:{value:t.submit.note,callback:function(e){t.$set(t.submit,"note",e)},expression:"submit.note"}})],1)],2)])]),o("a-modal",{attrs:{footer:null},model:{value:t.previewVisible,callback:function(e){t.previewVisible=e},expression:"previewVisible"}},[o("img",{staticStyle:{width:"100%"},attrs:{alt:"暂无图片",src:t.viewImg}})])],1)},l=[],s=o("f9e9"),a={data:function(){return{option1:[{key:1,label:"名称"},{key:2,label:"手机号"},{key:3,label:"赛事名称"}],option2:[{key:null,label:"全部"},{key:0,label:"待审核"},{key:1,label:"审核通过"},{key:2,label:"审核不通过"}],plainOptions:[{value:1,label:"通过"},{value:2,label:"不通过"}],visible:!1,titles:"新建",columns:[{title:this.L("名称"),dataIndex:"nickname",ellipsis:!0},{title:this.L("手机号"),dataIndex:"phone",ellipsis:!0},{title:this.L("审核信息"),dataIndex:"audit_info",ellipsis:!0,scopedSlots:{customRender:"audit_info"}},{title:this.L("赛事名称"),dataIndex:"title",ellipsis:!0},{title:this.L("提交时间"),dataIndex:"submit_time",ellipsis:!0},{title:this.L("审核时间"),dataIndex:"audit_time",ellipsis:!0},{title:this.L("备注"),dataIndex:"remark",ellipsis:!0,scopedSlots:{customRender:"remark"}},{title:this.L("状态"),dataIndex:"status",ellipsis:!0,scopedSlots:{customRender:"status"}},{title:this.L("操作"),width:150,scopedSlots:{customRender:"operation"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange},arletItem:[],viewImg:"",submit:{status:0,note:""},queryParmas:{keywords:"",search_type:1,status:null,page:1},previewVisible:!1,detail:null,userInfo:null}},created:function(){this.getDataList()},beforeRouteLeave:function(t,e,o){this.$destroy(),o()},methods:{search:function(){this.pagination.current=1,this.getDataList()},getDataList:function(){var t=this;this.queryParmas.page=this.pagination.current,this.queryParmas.page_size=this.pagination.pageSize,this.request(s["a"].getMyAuditList,this.queryParmas).then((function(e){t.dataList=e.data,t.$set(t.pagination,"total",e.total),t.$emit("totalNum",e.total)}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getDataList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",e),this.getDataList()},examine:function(t){var e=this;this.userInfo=t,this.request(s["a"].getMyAuditInfo,{id:t.id}).then((function(t){e.detail=t,e.arletItem=t.custom_form,e.submit.note=t.remark,e.submit.status=0==t.audit_status?1:t.audit_status,e.visible=!0}))},handleOk:function(){var t=this,e={status:this.submit.status,remark:this.submit.note,id:this.detail.id};this.request(s["a"].audit,e).then((function(e){t.visible=!1,t.getDataList()}))},previewImageClick:function(t){this.viewImg=t,this.previewVisible=!0}}},r=a,f=(o("a7d3"),o("2877")),n=Object(f["a"])(r,i,l,!1,null,"4119a69c",null);e["default"]=n.exports},a7d3:function(t,e,o){"use strict";o("3425")},f9e9:function(t,e,o){"use strict";var i={recDisplay:"life_tools/platform.HomeDecorate/recDisplay",getUrlAndRecSwitch:"life_tools/platform.HomeDecorate/getUrlAndRecSwitch",getUrlAndRecSwitchSport:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchSport",getUrlAndRecSwitchTicket:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchTicket",getList:"life_tools/platform.HomeDecorate/getList",getDel:"life_tools/platform.HomeDecorate/getDel",getEdit:"life_tools/platform.HomeDecorate/getEdit",getAllArea:"/life_tools/platform.HomeDecorate/getAllArea",addOrEditDecorate:"life_tools/platform.HomeDecorate/addOrEdit",getRecEdit:"life_tools/platform.HomeDecorate/getRecEdit",getRecList:"life_tools/platform.HomeDecorate/getRecList",delRecAdver:"life_tools/platform.HomeDecorate/delRecAdver",addOrEditRec:"life_tools/platform.HomeDecorate/addOrEditRec",delOne:"/life_tools/platform.HomeDecorate/delOne",getRelatedList:"life_tools/platform.HomeDecorate/getRelatedList",saveRelatedSort:"/life_tools/platform.HomeDecorate/saveRelatedSort",addRelatedCate:"life_tools/platform.HomeDecorate/addRelatedCate",getCateList:"life_tools/platform.HomeDecorate/getCateList",getRelatedInfoList:"life_tools/platform.HomeDecorate/getRelatedInfoList",getInfoList:"life_tools/platform.HomeDecorate/getInfoList",addRelatedInfo:"life_tools/platform.HomeDecorate/addRelatedInfo",delInfo:"/life_tools/platform.HomeDecorate/delInfo",saveRelatedInfoSort:"/life_tools/platform.HomeDecorate/saveRelatedInfoSort",getRelatedCourseList:"life_tools/platform.HomeDecorate/getRelatedCourseList",getCourseList:"life_tools/platform.HomeDecorate/getCourseList",getScenicList:"life_tools/platform.HomeDecorate/getScenicList",addRelatedCourse:"life_tools/platform.HomeDecorate/addRelatedCourse",addRelatedScenic:"life_tools/platform.HomeDecorate/addRelatedScenic",delCourse:"/life_tools/platform.HomeDecorate/delCourse",saveRelatedCourseSort:"/life_tools/platform.HomeDecorate/saveRelatedCourseSort",saveRelatedScenicSort:"/life_tools/platform.HomeDecorate/saveRelatedScenicSort",delScenic:"/life_tools/platform.HomeDecorate/delScenic",getRelatedToolsList:"life_tools/platform.HomeDecorate/getRelatedToolsList",getRelatedScenicList:"life_tools/platform.HomeDecorate/getRelatedScenicList",getToolsList:"life_tools/platform.HomeDecorate/getToolsList",addRelatedTools:"life_tools/platform.HomeDecorate/addRelatedTools",delTools:"/life_tools/platform.HomeDecorate/delTools",saveRelatedToolsSort:"/life_tools/platform.HomeDecorate/saveRelatedToolsSort",setToolsName:"/life_tools/platform.HomeDecorate/setToolsName",getRelatedCompetitionList:"life_tools/platform.HomeDecorate/getRelatedCompetitionList",getCompetitionList:"life_tools/platform.HomeDecorate/getCompetitionList",addRelatedCompetition:"life_tools/platform.HomeDecorate/addRelatedCompetition",delCompetition:"/life_tools/platform.HomeDecorate/delCompetition",saveRelatedCompetitionSort:"/life_tools/platform.HomeDecorate/saveRelatedCompetitionSort",getReplyList:"/life_tools/platform.LifeToolsReply/searchReply",isShowReply:"/life_tools/platform.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/platform.LifeToolsReply/getReplyDetails",delReply:"/life_tools/platform.LifeToolsReply/delReply",subReply:"/life_tools/platform.LifeToolsReply/subReply",getReplyContent:"/life_tools/platform.LifeToolsReply/getReplyContent",getSportsOrderList:"/life_tools/platform.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/platform.SportsOrder/exportToolsOrder",getSportList:"life_tools/platform.LifeToolsCompetition/getList",getToolCompetitionMsg:"life_tools/platform.LifeToolsCompetition/getToolCompetitionMsg",saveToolCompetition:"life_tools/platform.LifeToolsCompetition/saveToolCompetition",lookCompetitionUser:"life_tools/platform.LifeToolsCompetition/lookCompetitionUser",closeCompetition:"life_tools/platform.LifeToolsCompetition/closeCompetition",exportUserOrder:"life_tools/platform.LifeToolsCompetition/exportUserOrder",delSport:"life_tools/platform.LifeToolsCompetition/delSport",getSportsOrderDetail:"/life_tools/platform.SportsOrder/getOrderDetail",getInformationList:"life_tools/platform.LifeToolsInformation/getInformationList",addEditInformation:"life_tools/platform.LifeToolsInformation/addEditInformation",getInformationDetail:"life_tools/platform.LifeToolsInformation/getInformationDetail",getAllScenic:"life_tools/platform.LifeTools/getAllScenic",delInformation:"life_tools/platform.LifeToolsInformation/delInformation",loginMer:"/life_tools/platform.SportsOrder/loginMer",getCategoryList:"life_tools/platform.LifeToolsCategory/getList",getCategoryDetail:"life_tools/platform.LifeToolsCategory/getDetail",categoryDel:"life_tools/platform.LifeToolsCategory/del",categoryEdit:"life_tools/platform.LifeToolsCategory/addOrEdit",categorySortEdit:"life_tools/platform.LifeToolsCategory/editSort",getLifeToolsList:"life_tools/platform.LifeTools/getList",setLifeToolsAttrs:"life_tools/platform.LifeTools/setLifeToolsAttrs",getHelpNoticeList:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeList",delHelpNotice:"life_tools/platform.LifeToolsHelpNotice/delHelpNotice",getHelpNoticeDetail:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeDetail",getComplaintAdviceList:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceList",changeComplaintAdviceStatus:"life_tools/platform.LifeToolsComplaintAdvice/changeComplaintAdviceStatus",delComplaintAdvice:"life_tools/platform.LifeToolsComplaintAdvice/delComplaintAdvice",getComplaintAdviceDetail:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceDetail",changeHelpNoticeStatus:"life_tools/platform.LifeToolsHelpNotice/changeHelpNoticeStatus",getRecGoodsList:"life_tools/platform.IndexRecommend/getRecList",delRecGoods:"life_tools/platform.IndexRecommend/delRecGoods",updateRec:"life_tools/platform.IndexRecommend/updateRec",getGoodsList:"life_tools/platform.IndexRecommend/getGoodsList",addRecGoods:"life_tools/platform.IndexRecommend/addRecGoods",updateRecGoods:"life_tools/platform.IndexRecommend/updateRecGoods",addEditKefu:"life_tools/platform.LifeToolsKefu/addEditKefu",getKefuList:"life_tools/platform.LifeToolsKefu/getKefuList",getKefuDetail:"life_tools/platform.LifeToolsKefu/getKefuDetail",delKefu:"life_tools/platform.LifeToolsKefu/delKefu",getMapConfig:"life_tools/platform.LifeTools/getMapConfig",getAppointList:"life_tools/platform.LifeToolsAppoint/getList",getAppointMsg:"life_tools/platform.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/platform.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/platform.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/platform.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/platform.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/platform.LifeToolsAppoint/delAppoint",getHousesFloorList:"life_tools/platform.LifeToolsHousesList/getHousesFloorList",updateHousesFloorStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorStatus",getHousesFloorMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorMsg",editHouseFloor:"life_tools/platform.LifeToolsHousesList/editHouseFloor",getChildList:"life_tools/platform.LifeToolsHousesList/getChildList",getHousesFloorPlanMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorPlanMsg",editHouseFloorPlan:"life_tools/platform.LifeToolsHousesList/editHouseFloorPlan",updateHousesFloorPlanStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorPlanStatus",getSportsIndexHotRecommond:"/life_tools/platform.HomeDecorate/getSportsIndexHotRecommond",getSportsHotRecommendList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendList",addSportsHotRecommendList:"/life_tools/platform.HomeDecorate/addSportsHotRecommendList",getSportsHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendSelectedList",delSportsHotRecommendList:"/life_tools/platform.HomeDecorate/delSportsHotRecommendList",saveSportsHotRecommendSort:"/life_tools/platform.HomeDecorate/saveSportsHotRecommendSort",getScenicIndexHotRecommond:"/life_tools/platform.HomeDecorate/getScenicIndexHotRecommond",getScenicHotRecommendList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendList",addScenicHotRecommendList:"/life_tools/platform.HomeDecorate/addScenicHotRecommendList",getScenicHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendSelectedList",delScenicHotRecommendList:"/life_tools/platform.HomeDecorate/delScenicHotRecommendList",saveScenicHotRecommendSort:"/life_tools/platform.HomeDecorate/saveScenicHotRecommendSort",getAtatisticsInfo:"/life_tools/platform.LifeToolsTicketSystem/getAtatisticsInfo",ticketSystemExport:"/life_tools/platform.LifeToolsTicketSystem/ticketSystemExport",orderList:"/life_tools/platform.LifeToolsTicketSystem/orderList",getOrderDetail:"/life_tools/platform.LifeToolsTicketSystem/getOrderDetail",orderVerification:"/life_tools/platform.LifeToolsTicketSystem/orderVerification",orderBack:"/life_tools/platform.LifeToolsTicketSystem/orderBack",getCardOrderList:"/life_tools/platform.CardSystem/getCardOrderList",getCardOrderDetail:"/life_tools/platform.CardSystem/getCardOrderDetail",CardOrderBack:"/life_tools/platform.CardSystem/CardOrderBack",cardSystemExport:"/life_tools/platform.CardSystem/cardSystemExport",lifeToolsAuditList:"/life_tools/platform.LifeTools/lifeToolsAuditList",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",getAuditTicketList:"/life_tools/platform.LifeToolsTicket/getAuditTicketList",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getNotAuditNum:"/life_tools/platform.LifeToolsTicket/getNotAuditNum",getAuditAdminList:"/life_tools/platform.LifeToolsCompetition/getAuditAdminList",getMyAuditList:"/life_tools/platform.LifeToolsCompetition/getMyAuditList",getMyAuditCount:"/life_tools/platform.LifeToolsCompetition/getMyAuditCount",getMyAuditInfo:"/life_tools/platform.LifeToolsCompetition/getMyAuditInfo",audit:"/life_tools/platform.LifeToolsCompetition/audit"};e["a"]=i}}]);