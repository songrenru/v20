(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2765af3d","chunk-457945df","chunk-df6c8874"],{"16ee":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[i("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[i("a-form-model-item",{attrs:{label:"搜索"}},[i("a-select",{staticStyle:{width:"115px"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[i("a-select-option",{attrs:{value:0}},[e._v(" 全部")]),i("a-select-option",{attrs:{value:2}},[e._v(" 体育馆")]),i("a-select-option",{attrs:{value:3}},[e._v(" 体育课程")])],1),i("a-input",{staticStyle:{width:"215px"},attrs:{placeholder:"请输入名称"},model:{value:e.searchForm.content,callback:function(t){e.$set(e.searchForm,"content",t)},expression:"searchForm.content"}})],1),i("a-form-model-item",{attrs:{label:"评论时间"}},[i("a-range-picker",{attrs:{ranges:{"过去30天":[e.moment().subtract(30,"days"),e.moment()],"过去15天":[e.moment().subtract(15,"days"),e.moment()],"过去7天":[e.moment().subtract(7,"days"),e.moment()],"今日":[e.moment(),e.moment()]},value:e.searchForm.time,format:"YYYY-MM-DD"},on:{change:e.onDateRangeChange}})],1),i("a-form-model-item",[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.submitForm(!0)}}},[e._v(" 查询")])],1)],1),i("a-table",{staticClass:"mt-20",attrs:{rowKey:"rpl_id",columns:e.columns,"data-source":e.dataList,pagination:e.pagination},scopedSlots:e._u([{key:"type",fn:function(t){return i("span",{},["course"==t?i("a-badge",{attrs:{status:"default",text:"体育课程"}}):e._e(),"stadium"==t?i("a-badge",{attrs:{status:"default",text:"体育馆"}}):e._e(),"scenic"==t?i("a-badge",{attrs:{status:"default",text:"景区"}}):e._e()],1)}},{key:"comment",fn:function(t,o){return i("span",{},[i("div",[i("span",[e._v(" "+e._s(o.showCommentText&&!o.show?o.showCommentText:t)+" ")]),o.show?e._e():i("a-button",{attrs:{type:"link"},on:{click:function(t){return e.foldOpt(o,"unfold")}}},[e._v("展开")])],1),o.show&&(1==o.reply_mv_nums||o.reply_pic.length||o.showCommentText)?i("div",{staticClass:"showMore"},[1==o.reply_mv_nums?i("div",[i("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:o.playerOption}})],1):e._e(),i("viewer",{attrs:{images:o.reply_pic}},e._l(o.reply_pic,(function(e,t){return i("img",{key:t,attrs:{src:e,width:"80px",height:"80px"}})})),0),o.status?i("a-button",{staticClass:"fold",attrs:{type:"link"},on:{click:function(t){return e.foldOpt(o,"fold")}}},[e._v("收起")]):e._e()],1):e._e()])}},{key:"goods_name",fn:function(t,o){return i("span",{},[i("div",{staticClass:"product-info"},[i("div",[i("img",{attrs:{src:o.goods_image}})]),i("div",[i("div",[e._v(e._s(t))]),i("div",[e._v(e._s(o.goods_sku_dec))])])])])}},{key:"goodsScore",fn:function(t){return i("span",{},[[i("a-rate",{attrs:{"default-value":t,disabled:""}})],e._v(" "+e._s(t)+"星 ")],2)}},{key:"replys_time",fn:function(t){return i("span",{},[0==t?i("a-badge",{attrs:{status:"default",text:"未回复"}}):e._e(),t>0?i("a-badge",{attrs:{status:"success",text:"已回复"}}):e._e()],1)}},{key:"status",fn:function(t,o){return i("span",{},[0==t?i("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.displaySwitch(o.rpl_id)}}},[e._v("展示")]):e._e(),1==t?i("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.displaySwitch(o.rpl_id)}}},[e._v("不展示")]):e._e()])}},{key:"action",fn:function(t){return i("span",{},[i("a",{staticClass:"ml-10 inline-block",on:{click:function(i){return e.$refs.replyUser.reply(t)}}},[e._v("回复评价")]),i("a",{staticClass:"ml-10 inline-block",on:{click:function(i){return e.$refs.replyModel.showReply(t)}}},[e._v("查看")]),i("a",{staticClass:"ml-10 inline-block",on:{click:function(i){return e.removeComment(t)}}},[e._v("删除")])])}}])},[i("span",{attrs:{slot:"goodsScoreTitle"},slot:"goodsScoreTitle"},[e._v(" 评价等级 "),i("a-tooltip",{attrs:{trigger:"hover"}},[i("template",{slot:"title"},[e._v("商品评星1-2星为差;3星为一般;4星为好;5星为非常好 ")]),i("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1)]),i("reply-detail",{ref:"replyModel",on:{loadRefresh:e.getDataList}}),i("reply-user",{ref:"replyUser",on:{loadRefresh:e.getDataList,getDataListReset:e.getDataListReset}}),i("reply-user")],1)},s=[],a=i("5530"),n=(i("4de4"),i("d3b7"),i("159b"),i("c1df")),l=i.n(n),r=i("9200"),c=i("4d95"),d=(i("0808"),i("6944")),f=i.n(d),p=i("8bbf"),u=i.n(p),m=i("d6d3"),h=(i("fda2"),i("451f"),i("ddf5"));u.a.use(f.a);var _={name:"ReplyList",components:{ReplyUser:h["default"],ReplyDetail:r["default"],videoPlayer:m["videoPlayer"]},data:function(){return{searchForm:{content:"",type:0,time:[],begin_time:"",end_time:"",status:2},store_list:[],columns:[{title:"商品类型",dataIndex:"type",scopedSlots:{customRender:"type"},width:"100",align:"center"},{title:"评论内容",dataIndex:"comment",scopedSlots:{customRender:"comment"},width:"350",align:"center"},{title:"商品信息",dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"},width:"300",align:"center"},{title:"商家名称",dataIndex:"mer_name",key:"mer_name"},{title:"评价时间",dataIndex:"create_time",key:"create_time",width:"160",align:"center"},{dataIndex:"goods_score",key:"goods_score",slots:{title:"goodsScoreTitle"},scopedSlots:{customRender:"goodsScore"},align:"center"},{title:"是否回复",dataIndex:"replys_time",key:"replys_time",scopedSlots:{customRender:"replys_time"},width:"100"},{title:"是否展示",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"},width:"100"},{title:"操作",dataIndex:"rpl_id",key:"rpl_id",scopedSlots:{customRender:"action"},align:"center"}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},created:function(){this.getDataList({is_search:!1})},methods:{moment:l.a,getDataList:function(e){var t=this,i=Object(a["a"])({},this.searchForm);delete i.time,1==e.is_search?(i.page=1,this.$set(this.pagination,"current",1)):(i.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),i.pageSize=this.pagination.pageSize,this.request(c["a"].getReplyList,i).then((function(e){t.dataList=e.list,t.$set(t.pagination,"total",e.count),t.dataList&&t.dataList.length&&(t.dataList=t.dataList.filter((function(e){return e.comment&&e.comment.length>32&&(e.showCommentText=e.comment.substring(0,32)+"..."),1==e.reply_mv_nums||e.reply_pic.length||e.showCommentText?e.show=!1:e.show=!0,e})))}))},getDataListReset:function(){var e=this;this.dataList=[];var t=Object(a["a"])({},this.searchForm);delete t.time,t.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current),t.pageSize=this.pagination.pageSize,this.request(c["a"].getReplyList,t).then((function(t){e.dataList=t.list,e.$set(e.pagination,"total",t.count),e.dataList&&e.dataList.length&&(e.dataList=e.dataList.filter((function(e){return e.comment&&e.comment.length>32&&(e.showCommentText=e.comment.substring(0,32)+"..."),1==e.reply_mv_nums||e.reply_pic.length||e.showCommentText?e.show=!1:e.show=!0,e})))}))},onDateRangeChange:function(e,t){this.$set(this.searchForm,"time",[e[0],e[1]]),this.$set(this.searchForm,"begin_time",t[0]),this.$set(this.searchForm,"end_time",t[1])},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a["a"])({},this.searchForm);delete t.time,t.is_search=e,console.log(t),this.getDataList(t)},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{content:"",begin_time:"",end_time:"",type:1,status:2}),this.$set(this.pagination,"current",1),this.getDataList({store_id:this.store_id,is_search:!1})},removeComment:function(e){var t=this;this.$confirm({title:"是否确定删除该评论?",centered:!0,onOk:function(){t.request(c["a"].delReply,{rpl_id:e}).then((function(e){t.$message.success("操作成功！"),t.getDataListReset()}))},onCancel:function(){}})},foldOpt:function(e,t){var i=this;this.dataList.forEach((function(o,s){o.rpl_id==e.rpl_id&&(o.show="unfold"==t,i.$set(i.dataList,s,o))}))},displaySwitch:function(e){var t=this;this.request(c["a"].isShowReply,{rpl_id:e}).then((function(e){t.$message.success("操作成功！"),t.getDataList({is_search:!1})}))}}},g=_,L=(i("5e307"),i("2877")),y=Object(L["a"])(g,o,s,!1,null,"1182d7fe",null);t["default"]=y.exports},"451f":function(e,t,i){},"4d95":function(e,t,i){"use strict";var o={getTicketList:"life_tools/merchant.LifeToolsTicket/getList",getTicketDetail:"life_tools/merchant.LifeToolsTicket/getDetail",ticketDel:"life_tools/merchant.LifeToolsTicket/del",TicketEdit:"life_tools/merchant.LifeToolsTicket/addOrEdit",getLifeToolsList:"life_tools/merchant.LifeTools/getInformationList",setLifeToolsAttrs:"life_tools/merchant.LifeTools/setLifeToolsAttrs",getSportsOrderList:"/life_tools/merchant.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/merchant.SportsOrder/exportToolsOrder",getSportsOrderDetail:"/life_tools/merchant.SportsOrder/getOrderDetail",agreeSportsOrderRefund:"/life_tools/merchant.SportsOrder/agreeRefund",refuseSportsOrderRefund:"/life_tools/merchant.SportsOrder/refuseRefund",getEditInfo:"life_tools/merchant.LifeToolsTicket/getEditInfo",getCategoryList:"life_tools/merchant.LifeToolsCategory/getCategoryList",getMapConfig:"life_tools/merchant.LifeTools/getMapConfig",getAddressList:"life_tools/merchant.LifeTools/getAddressList",addEditLifeTools:"life_tools/merchant.LifeTools/addEditLifeTools",getLifeToolsDetail:"life_tools/merchant.LifeTools/getLifeToolsDetail",delLifeTools:"life_tools/merchant.LifeTools/delLifeTools",getReplyList:"/life_tools/merchant.LifeToolsReply/searchReply",isShowReply:"/life_tools/merchant.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/merchant.LifeToolsReply/getReplyDetails",delReply:"/life_tools/merchant.LifeToolsReply/delReply",subReply:"/life_tools/merchant.LifeToolsReply/subReply",getReplyContent:"/life_tools/merchant.LifeToolsReply/getReplyContent",getCardList:"/life_tools/merchant.EmployeeCard/getCardList",editCard:"/life_tools/merchant.EmployeeCard/editCard",saveCard:"/life_tools/merchant.EmployeeCard/saveCard",delCard:"/life_tools/merchant.EmployeeCard/delCard",getSportsVerifyList:"/life_tools/merchant.SportsOrder/getVerifyList",exportVerifyRecord:"/life_tools/merchant.SportsOrder/exportVerifyRecord",getLimitedList:"/life_tools/merchant.LifeScenicLimitedAct/getLimitedList",updateLimited:"/life_tools/merchant.LifeScenicLimitedAct/addLimited",limitedChangeState:"/life_tools/merchant.LifeScenicLimitedAct/changeState",removeLimited:"/life_tools/merchant.LifeScenicLimitedAct/del",getLimitedInfo:"/life_tools/merchant.LifeScenicLimitedAct/edit",getMerchantSort:"/life_tools/merchant.LifeToolsTicket/getMerchantSort",getLifeToolsTicket:"/life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",getToolsCardList:"/life_tools/merchant.LifeTools/getToolsCardList",AddOrEditToolsCard:"/life_tools/merchant.LifeTools/AddOrEditToolsCard",getToolsCardEdit:"/life_tools/merchant.LifeTools/getToolsCardEdit",delToolsCard:"/life_tools/merchant.LifeTools/delToolsCard",getAllToolsList:"/life_tools/merchant.LifeTools/getAllToolsList",getToolsCardRecord:"/life_tools/merchant.LifeTools/getToolsCardRecord",getCardOrderList:"/life_tools/merchant.LifeTools/getCardOrderList",getCardOrderDetail:"/life_tools/merchant.LifeTools/getCardOrderDetail",agreeCardOrderRefund:"/life_tools/merchant.LifeTools/agreeCardOrderRefund",refuseCardOrderRefund:"/life_tools/merchant.LifeTools/refuseCardOrderRefund",getSportsActivityList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityList",updateSportsActivityStatus:"/life_tools/merchant.LifeToolsSportsActivity/updateSportsActivityStatus",getSportsActivityOrderList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityOrderList",addSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/addSportsActivity",editSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/editSportsActivity",getTravelList:"/life_tools/merchant.LifeToolsGroupTravelAgency/getTravelList",agencyAudit:"/life_tools/merchant.LifeToolsGroupTravelAgency/audit",getStaffList:"/life_tools/merchant.LifeToolsTicket/getStaffList",getAppointList:"life_tools/merchant.LifeToolsAppoint/getList",getAppointMsg:"life_tools/merchant.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/merchant.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/merchant.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/merchant.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/merchant.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/merchant.LifeToolsAppoint/delAppoint",getSeatMap:"/life_tools/merchant.LifeToolsAppoint/getSeatMap",getAppointOrderDetail:"life_tools/merchant.LifeToolsAppoint/getAppointOrderDetail",auditRefund:"life_tools/merchant.LifeToolsAppoint/auditRefund",suspend:"life_tools/merchant.LifeToolsAppoint/suspend",getSportsSecondsKillList:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillList",saveSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/saveSecondsKill",ChangeSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/ChangeSportsSecondsKill",delSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/delSecondsKill",getSportsSecondsKillDetail:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillDetail",getGroupTicketList:"life_tools/merchant.group/getGroupTicketList",getGroupLifeToolsTicket:"life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",addGroupTicket:"life_tools/merchant.group/addGroupTicket",delGroupTicket:"life_tools/merchant.group/delGroupTicket",editSettingData:"life_tools/merchant.group/editSettingData",editGroupTicket:"life_tools/merchant.group/editGroupTicket",getSettingDataDetail:"life_tools/merchant.group/getSettingDataDetail",getStatisticsData:"life_tools/merchant.LifeToolsGroupOrder/getStatisticsData",getOrderList:"life_tools/merchant.LifeToolsGroupOrder/getOrderList",getOrderAuditList:"/life_tools/merchant.LifeToolsGroupOrder/getAuditGroupOrderList",orderAudit:"/life_tools/merchant.LifeToolsGroupOrder/audit",groupOrderRefand:"life_tools/merchant.LifeToolsGroupOrder/groupOrderRefand",editDistributionPrice:"life_tools/merchant.LifeToolsDistribution/editDistributionPrice",getDistributionSettingDataDetail:"/life_tools/merchant.LifeToolsDistribution/getSettingDataDetail",getDistributionSettingeditSetting:"/life_tools/merchant.LifeToolsDistribution/editSetting",getAtatisticsInfo:"/life_tools/merchant.LifeToolsDistribution/getAtatisticsInfo",getDistributorList:"/life_tools/merchant.LifeToolsDistribution/getDistributorList",getLowerLevel:"/life_tools/merchant.LifeToolsDistribution/getLowerLevel",audit:"/life_tools/merchant.LifeToolsDistribution/audit",getDistributionOrderList:"/life_tools/merchant.LifeToolsDistribution/getDistributionOrderList",editDistributionOrderNote:"/life_tools/merchant.LifeToolsDistribution/editDistributionOrderNote",delDistributor:"/life_tools/merchant.LifeToolsDistribution/delDistributor",addStatement:"/life_tools/merchant.LifeToolsDistribution/addStatement",getStatementList:"/life_tools/merchant.LifeToolsDistribution/getStatement",getStatementDetail:"/life_tools/merchant.LifeToolsDistribution/getStatementDetail",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getMapCity:"/g=Index&c=Map&a=suggestion",getCarParkList:"/life_tools/merchant.LifeToolsCarPark/getCarParkList",addCarPark:"/life_tools/merchant.LifeToolsCarPark/addCarPark",showCarPark:"/life_tools/merchant.LifeToolsCarPark/showCarPark",getToolsList:"/life_tools/merchant.LifeToolsCarPark/getToolsList",deleteCarPark:"/life_tools/merchant.LifeToolsCarPark/deleteCarPark",statusCarPark:"/life_tools/merchant.LifeToolsCarPark/statusCarPark",wifiList:"life_tools/merchant.LifeToolsWifi/wifiList",wifiAdd:"life_tools/merchant.LifeToolsWifi/wifiAdd",wifiShow:"life_tools/merchant.LifeToolsWifi/wifiShow",wifiStatusChange:"life_tools/merchant.LifeToolsWifi/wifiStatusChange",wifiDelete:"life_tools/merchant.LifeToolsWifi/wifiDelete",scenicMapSave:"/life_tools/merchant.LifeToolsScenicMap/saveMap",scenicMapPlaceList:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceList",scenicMapPlaceSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapPlace",scenicMapPlaceDel:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceDel",scenicMapLineList:"/life_tools/merchant.LifeToolsScenicMap/mapLineList",scenicMapLineSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapLine",scenicMapLineDel:"/life_tools/merchant.LifeToolsScenicMap/mapLineDel",scenicMapScenicList:"/life_tools/merchant.LifeToolsScenicMap/scenicList",scenicMapPlaceCatList:"/life_tools/merchant.LifeToolsScenicMap/categoryList",scenicMapPlaceCategoryDel:"/life_tools/merchant.LifeToolsScenicMap/categoryDel",scenicMapPlaceCategorySave:"/life_tools/merchant.LifeToolsScenicMap/saveCategory",scenicMapList:"/life_tools/merchant.LifeToolsScenicMap/mapList",scenicMapDel:"/life_tools/merchant.LifeToolsScenicMap/mapDel",scenicMapStatusSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapStatus",changeCloseStatus:"life_tools/merchant.LifeTools/changeCloseStatus",getAddEditCardMerchantInfo:"/life_tools/merchant.LifeTools/getAddEditCardMerchantInfo"};t["a"]=o},"5e307":function(e,t,i){"use strict";i("9f37")},"5e45":function(e,t,i){"use strict";i("859c")},"859c":function(e,t,i){},9200:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:900,height:640,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[i("div",[i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:10}},[e._v(" 商家名称: "),i("span",[e._v(" "+e._s(e.detail.mer_name))])]),i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:10}},[e._v(" 商品名称: "),i("span",[e._v(" "+e._s(e.detail.goods_name))])])],1),i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:10}},[e._v(" 评论时间： "),i("span",[e._v(" "+e._s(e.detail.reply_time))])]),i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:10}},[e._v(" 商品评价: "),[i("a-rate",{attrs:{disabled:""},model:{value:e.detail.goods_score,callback:function(t){e.$set(e.detail,"goods_score",t)},expression:"detail.goods_score"}})]],2)],1),i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:21}},[e._v(" 评论内容: "),i("span",[e._v(" "+e._s(e.detail.comment))])])],1),i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),1==e.detail.reply_mv_nums?i("div",[i("a-col",{attrs:{span:10}},[i("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.detail.playerOption}})],1),i("a-col",{attrs:{span:11}},[i("viewer",{attrs:{images:e.detail.reply_pic}},e._l(e.detail.reply_pic,(function(e,t){return i("img",{key:t,attrs:{src:e}})})),0)],1)],1):e._e(),2==e.detail.reply_mv_nums?i("div",[i("a-col",{attrs:{span:21}},[i("viewer",{attrs:{images:e.detail.reply_pic}},e._l(e.detail.reply_pic,(function(e,t){return i("img",{key:t,attrs:{src:e}})})),0)],1)],1):e._e()],1),i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:19}},[e._v(" 回复内容: "),i("a-textarea",{attrs:{placeholder:"请输入内容","auto-size":{minRows:6,maxRows:10},disabled:!0},model:{value:e.detail.merchant_reply_content,callback:function(t){e.$set(e.detail,"merchant_reply_content",t)},expression:"detail.merchant_reply_content"}})],1),i("a-col",{attrs:{span:2}})],1),i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:19}},[e._v(" 回复时间:"),i("span",[e._v(" "+e._s(e.detail.merchant_reply_time))])]),i("a-col",{attrs:{span:2}})],1)],1)])},s=[],a=i("4d95"),n=(i("0808"),i("6944")),l=i.n(n),r=i("8bbf"),c=i.n(r),d=i("d6d3");i("fda2");c.a.use(l.a);var f={components:{videoPlayer:d["videoPlayer"]},data:function(){return{title:"查看详情",visible:!1,rpl_id:0,detail:{mer_name:"",store_name:"",reply_time:"",goods_name:"",goods_sku_dec:"",service_score:0,goods_score:0,logistics_score:0,comment:"",reply_pic:[],reply_mv_nums:2,playerOption:{},merchant_reply_content:"",merchant_reply_time:""}}},methods:{showReply:function(e){var t=this;this.visible=!0,this.rpl_id=e,this.request(a["a"].getReplyDetails,{rpl_id:this.rpl_id}).then((function(e){t.detail=e,console.log(t.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},p=f,u=(i("5e45"),i("2877")),m=Object(u["a"])(p,o,s,!1,null,"5dd4847a",null);t["default"]=m.exports},"9f37":function(e,t,i){},d6d3:function(e,t,i){!function(t,o){e.exports=o(i("3d337"))}(0,(function(e){return function(e){function t(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(t,i){t.exports=e},function(e,t,i){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),a=function(e){return e&&e.__esModule?e:{default:e}}(s),n=window.videojs||a.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),o=1;o<arguments.length;o++){var s=arguments[o];if(null!=s)for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(i[a]=s[a])}return i},writable:!0,configurable:!0});var l=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];t.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this,t=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var i=function(t,i){t&&e.$emit(t,e.player),i&&e.$emit(e.customEventName,o({},t,i))};t.plugins&&delete t.plugins.__ob__;var s=this;this.player=n(this.$refs.video,t,(function(){for(var e=this,t=l.concat(s.events).concat(s.globalEvents),o={},a=0;a<t.length;a++)"string"==typeof t[a]&&void 0===o[t[a]]&&function(t){o[t]=null,e.on(t,(function(){i(t,!0)}))}(t[a]);this.on("timeupdate",(function(){i("timeupdate",this.currentTime())})),s.$emit("ready",this)}))},dispose:function(e){var t=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){t.reseted=!1,t.$nextTick((function(){t.reseted=!0,t.$nextTick((function(){e&&e()}))}))})))}},watch:{options:{deep:!0,handler:function(e,t){var i=this;this.dispose((function(){e&&e.sources&&e.sources.length&&i.initialize()}))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1),s=i.n(o);for(var a in o)["default","default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);var n=i(5),l=i(4),r=l(s.a,n.a,!1,null,null,null);t.default=r.exports},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.videoPlayer=t.videojs=void 0;var s=i(0),a=o(s),n=i(2),l=o(n),r=window.videojs||a.default,c=function(e,t){t&&(t.options&&(l.default.props.globalOptions.default=function(){return t.options}),t.events&&(l.default.props.globalEvents.default=function(){return t.events})),e.component(l.default.name,l.default)},d={videojs:r,videoPlayer:l.default,install:c};t.default=d,t.videojs=r,t.videoPlayer=l.default,t.install=c},function(e,t){e.exports=function(e,t,i,o,s,a){var n,l=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(n=e,l=e.default);var c,d="function"==typeof l?l.options:l;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId=s),a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):o&&(c=o),c){var f=d.functional,p=f?d.render:d.beforeCreate;f?(d._injectStyles=c,d.render=function(e,t){return c.call(t),p(e,t)}):d.beforeCreate=p?[].concat(p,c):[c]}return{esModule:n,exports:l,options:d}}},function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.reseted?i("div",{staticClass:"video-player"},[i("video",{ref:"video",staticClass:"video-js"})]):e._e()},s=[],a={render:o,staticRenderFns:s};t.a=a}])}))},ddf5:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,visible:e.visible,width:"350px"},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[i("a-form",[i("a-form-item",{attrs:{label:"回复"}},[i("a-textarea",{attrs:{placeholder:"请输入回复内容","auto-size":{minRows:6,maxRows:10}},model:{value:e.detail.reply_content,callback:function(t){e.$set(e.detail,"reply_content",t)},expression:"detail.reply_content"}})],1)],1)],1)},s=[],a=i("4d95"),n={name:"replyUser",data:function(){return{visible:!1,title:"回复评价",detail:{id:0,reply_content:""}}},methods:{handleCancle:function(){this.visible=!1},handleSubmit:function(e){var t=this;this.request(a["a"].subReply,this.detail).then((function(e){t.visible=!1,t.$emit("getDataListReset")}))},reply:function(e){var t=this;this.detail.id=e,this.request(a["a"].getReplyContent,{id:e}).then((function(e){t.visible=!0,t.detail.reply_content=e.reply_content}))}}},l=n,r=i("2877"),c=Object(r["a"])(l,o,s,!1,null,"b85481f2",null);t["default"]=c.exports}}]);