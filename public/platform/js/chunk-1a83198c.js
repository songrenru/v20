(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a83198c"],{"230ab":function(t,e,i){"use strict";i.r(e);for(var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"message-suggestions-list-box"},[i("div",{staticClass:"search-box"},[i("a-row",{attrs:{gutter:48}},[i("a-col",{attrs:{md:8,sm:24}},[i("a-input-group",{attrs:{compact:""}},[i("p",{staticStyle:{"margin-top":"5px"}},[t._v("活动名称:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.search.key_val,expression:"search.key_val"}],attrs:{type:"hidden"},domProps:{value:t.search.key_val},on:{input:function(e){e.target.composing||t.$set(t.search,"key_val",e.target.value)}}}),i("a-input",{staticStyle:{width:"70%"},model:{value:t.search.value,callback:function(e){t.$set(t.search,"value",e)},expression:"search.value"}})],1)],1),i("a-col",{attrs:{md:2,sm:24}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),i("a-col",{attrs:{md:2,sm:24}},[i("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),i("div",{staticClass:"add-box"},[i("a-row",{attrs:{gutter:48}},[i("a-col",{attrs:{md:8,sm:24}},[i("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.addActive()}}},[t._v(" 新建 ")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.table_change},scopedSlots:t._u([{key:"status",fn:function(e,n){return i("span",{},[i("a-badge",{attrs:{status:t._f("statusFilter")(n.status),text:e}})],1)}},{key:"action",fn:function(e,n){return i("span",{},[i("a",{on:{click:function(e){return t.lookEdit(n)}}},[t._v("编辑")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(e){return t.sign_list(n)}}},[t._v("报名列表")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(e){return t.delInfo(n)}}},[t._v("删除")])],1)}}])})],1)},o=[],s=(i("ac1f"),i("841c"),i("567c")),m=[{title:"标题",dataIndex:"active_name",key:"active_name"},{title:"总名额/剩余名额",dataIndex:"num_txt",key:"num_txt"},{title:"活动时间",dataIndex:"start_end_time_txt",key:"start_end_time_txt"},{title:"状态",dataIndex:"status_txt",key:"status_txt",scopedSlots:{customRender:"status"}},{title:"排序",dataIndex:"sort",key:"sort"},{title:"添加时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],r=[],a=0;a<1;a++)r.push({activity_id:a,title:"active_name ".concat(a),num_txt:"30/".concat(a),start_end_time_txt:"2020/1/1 10:00 ~ 2020/5/20 10:00",status:0,status_txt:"禁止 ".concat(a),sort:100-a,add_time_txt:"2020/5/28 10:".concat(a)});var u={name:"volunteerActivitiesList",filters:{statusFilter:function(t){var e=["error","success"];return e[t]}},data:function(){return{reply_content:"",pagination:{pageSize:10,total:10},search_data:[],search:{key_val:"active_name",value:"",page:1},form:this.$form.createForm(this),visible:!1,data:r,columns:m,page:1}},activated:function(){this.getVolunteerActivityList()},methods:{getVolunteerActivityList:function(){var t=this;this.search["page"]=this.page,this.request(s["a"].volunteerActivityList,this.search).then((function(e){console.log("res",e),t.pagination.total=e.count?e.count:0,t.data=e.list}))},addActive:function(){console.log("添加活动",1);var t=this.getRouterPath("addVolunteerActivitiesInfo");console.log("addActive",t),this.$router.push({path:t,query:{activity_id:0,aa:"add"}})},delInfo:function(t){var e=this;this.$confirm({title:"你确定要删除该活动信息?",content:"该活动一旦删除不可恢复，且相关报名信息将失效",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){e.request(s["a"].delVolunteerActivity,{activity_id:t.activity_id}).then((function(t){e.$message.success("删除成功！"),e.getVolunteerActivityList()}))},onCancel:function(){console.log("Cancel")}})},sign_list:function(t){var e=this.getRouterPath("signVolunteerActivitiesList");console.log("pathInfo",e),this.$router.push({path:e,query:{activity_id:t.activity_id}})},lookEdit:function(t){console.log("record",t);var e=this.getRouterPath("addVolunteerActivitiesInfo");console.log("lookEdit",e),this.$router.push({path:e,query:{activity_id:t.activity_id}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.page=t.current,this.getVolunteerActivityList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.getVolunteerActivityList()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={key_val:"active_name",value:"",page:1},this.search_data=[],this.getVolunteerActivityList()}}},c=u,y=(i("5794"),i("2877")),l=Object(y["a"])(c,n,o,!1,null,"e827e34a",null);e["default"]=l.exports},"29c8":function(t,e,i){},"567c":function(t,e,i){"use strict";var n={config:"/community/street_community.config/index",addIndex:"/community/street_community.config/addIndex",streetUpload:"/community/street_community.config/upload",messageSuggestionsList:"/community/street_community.MessageSuggestionsList/getList",messageSuggestionsDetail:"/community/street_community.MessageSuggestionsList/detail",saveMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/saveMessageSuggestionsReplyInfo",volunteerActivityList:"/community/street_community.VolunteerActivity/getList",volunteerActivityInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinDetail",uploadImgApi:"/community/street_community.volunteerActivity/uploadImgApi",subActiveJoin:"/community/street_community.volunteerActivity/subActiveJoin",addVolunteerActivity:"/community/street_community.VolunteerActivity/addVolunteerActivity",getVolunteerDetail:"/community/street_community.VolunteerActivity/getVolunteerDetail",delVolunteerActivity:"/community/street_community.VolunteerActivity/delVolunteerActivity",getActiveJoinList:"/community/street_community.VolunteerActivity/getActiveJoinList",getStreetShowUrl:"/community/street_community.Visualization/getStreetShowUrl",getBannerList:"/community/street_community.Visualization/bannerList",getBannerInfo:"/community/street_community.Visualization/getBannerInfo",addBanner:"/community/street_community.Visualization/addBanner",getApplication:"/community/street_community.Visualization/getApplication",bannerDel:"/community/street_community.Visualization/del",upload:"/community/street_community.Visualization/upload",getStreetNavList:"/community/street_community.StreetNav/getStreetNavList",addStreetNav:"/community/street_community.StreetNav/addStreetNav",getStreetNavInfo:"/community/street_community.StreetNav/getStreetNavInfo",streetNavDel:"/community/street_community.StreetNav/del",getPartyBranch:"/community/street_community.PartyBranch/getList",getCommunity:"/community/street_community.PartyBranch/getCommunity",addPartyBranch:"/community/street_community.PartyBranch/addPartyBranch",getPartyInfo:"/community/street_community.PartyBranch/getPartyInfo",getPartyMember:"/community/street_community.PartyMember/getList",getPartyMemberInfo:"/community/street_community.PartyMember/getPartyMemberInfo",getPartyUpload:"/community/street_community.PartyMember/upload",subPartyMember:"/community/street_community.PartyMember/editPartyMember",getProvinceList:"/merchant/merchant.system.area/getProvinceList",getCity:"/merchant/merchant.system.area/getCityList",getLessonsClassList:"/community/street_community.MeetingLesson/getLessonClassList",getLessonsClassInfo:"/community/street_community.MeetingLesson/getClassInfo",subLessonsClass:"/community/street_community.MeetingLesson/subLessonClass",delLessonsClass:"/community/street_community.MeetingLesson/delLessonClass",getMeetingList:"/community/street_community.MeetingLesson/getMeetingList",getMeetingInfo:"/community/street_community.MeetingLesson/getMeetingInfo",subMeeting:"/community/street_community.MeetingLesson/subMeeting",uploadMeeting:"/community/street_community.MeetingLesson/upload",delMeeting:"/community/street_community.MeetingLesson/delMeeting",subWeChatNotice:"/community/street_community.MeetingLesson/weChatNotice",getReplyList:"/community/street_community.MeetingLesson/getReplyList",actionReply:"/community/street_community.MeetingLesson/actionReply",openReplySwitch:"/community/street_community.MeetingLesson/isOpenReplySwitch",getPartyActivityList:"/community/street_community.PartyActivities/getPartyActivityList",getPartyActivityInfo:"/community/street_community.PartyActivities/getPartyActivityInfo",activityUpload:"/community/street_community.PartyActivities/upload",subPartyActivity:"/community/street_community.PartyActivities/subPartyActivity",delPartyActivity:"/community/street_community.PartyActivities/delPartyActivity",getApplyList:"/community/street_community.PartyActivities/getApplyList",getApplyInfo:"/community/street_community.PartyActivities/getApplyInfo",subApply:"/community/street_community.PartyActivities/subApply",delApply:"/community/street_community.PartyActivities/delApply",getPartyBuildList:"/community/street_community.PartyBuild/getPartyBuildLists",getPartyBuildInfo:"/community/street_community.PartyBuild/PartyBuildDetail",getPartyBuildCategoryInfo:"/community/street_community.PartyBuild/PartyBuildCategoryDetail",getPartyBuildCategoryList:"/community/street_community.PartyBuild/getPartyBuildCategoryLists",getPartyBuildReply:"/community/street_community.PartyBuild/getPartyBuildReplyLists",delPartyBuildCategory:"/community/street_community.PartyBuild/delPartyBuildCategory",addPartyBuildCategory:"/community/street_community.PartyBuild/addPartyBuildCategory",savePartyBuildCategory:"/community/street_community.PartyBuild/savePartyBuildCategory",addPartyBuild:"/community/street_community.PartyBuild/addPartyBuild",savePartyBuild:"/community/street_community.PartyBuild/savePartyBuild",delPartyBuild:"/community/street_community.PartyBuild/delPartyBuild",changeReplyStatus:"/community/street_community.PartyBuild/changeReplyStatus",isSwitch:"/community/street_community.PartyBuild/isSwitch",partyWeChatNotice:"/community/street_community.PartyBuild/weChatNotice",userVulnerableGroupsLists:"/community/street_community.SpecialGroupManage/getUserVulnerableGroupsList",getSpecialGroupsRecordList:"/community/street_community.SpecialGroupManage/getSpecialGroupsRecordList",addSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/addSpecialGroupsRecord",delSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/delSpecialGroupsRecord",getRecordDetail:"/community/street_community.SpecialGroupManage/getRecordDetail",getGroupDetail:"/community/street_community.SpecialGroupManage/getGroupDetail",gridCustomList:"/community/street_community.GridCustom/getGridCustomList",addGridCustom:"/community/street_community.GridCustom/addGridCustom",saveGridCustom:"/community/street_community.GridCustom/saveGridCustom",getGridCustomDetail:"/community/street_community.GridCustom/getGridCustomDetail",getStreetAreaInfo:"/community/street_community.GridCustom/getStreetDetail",addGridRange:"/community/street_community.GridCustom/addGridRange",getGridRange:"/community/street_community.GridCustom/getGridRange",delGridRange:"/community/street_community.GridCustom/delGridRange",getAreaList:"/community/street_community.GridCustom/getAreaList",getVillageList:"/community/street_community.GridCustom/getVillageList",getSingleList:"/community/street_community.GridCustom/getSingleList",getGridMember:"/community/street_community.GridCustom/getGridMember",getZoomLastGrid:"/community/street_community.GridCustom/getZoomLastGrid",getNowType:"/community/street_community.GridCustom/getNowType",showInfo:"/community/street_community.GridCustom/showInfo",getFloorInfo:"/community/street_community.GridCustom/getFloorInfo",getOpenDoorList:"/community/street_community.GridCustom/getOpenDoorList",getSingleInfo:"/community/street_community.GridCustom/getSingleInfo",getLayerInfo:"/community/street_community.GridCustom/getLayerInfo",getRoomUserList:"/community/street_community.GridCustom/getRoomUserList",getInOutRecord:"/community/street_community.GridCustom/getInOutRecord",getUserInfo:"/community/street_community.GridCustom/getUserInfo",saveRange:"/community/street_community.GridCustom/saveRange",delGridCustom:"/community/street_community.GridCustom/delGridCustom",getWorkers:"/community/street_community.GridEvent/getWorkers",getMemberList:"/community/street_community.OrganizationStreet/getMemberList",delWorker:"/community/street_community.OrganizationStreet/delWorker",saveStreetWorker:"/community/street_community.OrganizationStreet/saveStreetWorker",getGridRangeInfo:"/community/street_community.GridCustom/getGridRangeInfo",getMatterCategoryList:"/community/street_community.Matter/getCategoryList",getMatterCategoryDetail:"/community/street_community.Matter/getCategoryDetail",handleCategory:"/community/street_community.Matter/handleCategory",delCategory:"/community/street_community.Matter/delCategory",getMatterList:"/community/street_community.Matter/getMatterList",getMatterInfo:"/community/street_community.Matter/getMatterInfo",subMatter:"/community/street_community.Matter/subMatter",delMatter:"/community/street_community.Matter/delMatter",getClassifyNav:"/community/street_community.FixedAssets/getClassifyNav",operateClassifyNav:"/community/street_community.FixedAssets/operateClassifyNav",getClassifyNavInfo:"/community/street_community.FixedAssets/getClassifyNavInfo",delClassifyNav:"/community/street_community.FixedAssets/delClassifyNav",getClassifyList:"/community/street_community.FixedAssets/getClassifyList",subAssets:"/community/street_community.FixedAssets/subAssets",delAssets:"/community/street_community.FixedAssets/delAssets",getAssetsInfo:"/community/street_community.FixedAssets/getAssetsInfo",getAssetsList:"/community/street_community.FixedAssets/getAssetsList",subLedRent:"/community/street_community.FixedAssets/subLedRent",subTakeBack:"/community/street_community.FixedAssets/subTakeBack",getRecordList:"/community/street_community.FixedAssets/getRecordList",getMaintainList:"/community/street_community.FixedAssets/getMaintainList",getMaintainInfo:"/community/street_community.FixedAssets/getMaintainInfo",subMaintain:"/community/street_community.FixedAssets/subMaintain",uploadStreet:"/community/street_community.FixedAssets/uploadStreet",weditorUpload:"/community/street_community.config/weditorUpload",getTissueNav:"/community/street_community.OrganizationStreet/getTissueNav",getBranchInfo:"/community/street_community.OrganizationStreet/getBranchInfo",subBranch:"/community/street_community.OrganizationStreet/addOrganization",delBranch:"/community/street_community.OrganizationStreet/delBranch",getMemberInfo:"/community/street_community.OrganizationStreet/getMemberInfo",subMemberBranch:"/community/street_community.OrganizationStreet/subMemberBranch",getTissueNavList:"/community/street_community.OrganizationStreet/getTissueNavList",getEventCategoryList:"/community/street_community.GridEvent/getEventCategoryList",addEventCategory:"/community/street_community.GridEvent/addEventCategory",editEventCategory:"/community/street_community.GridEvent/editEventCategory",todayEventCount:"/community/street_community.GridEvent/todayEventCount",eventData:"/community/street_community.GridEvent/eventData",getCategoryList:"/community/street_community.GridEvent/getCategoryList",getWorkerOrderLists:"/community/street_community.GridEvent/getWorkerOrderLists",getWorkerEventDetail:"/community/street_community.GridEvent/getWorkerEventDetail",allocationWorker:"/community/street_community.GridEvent/allocationWorker",getWorkersPage:"/community/street_community.GridEvent/getWorkersPage",getStreetCommunityUserList:"/community/street_community.User/getUerList",getStreetCommunityAll:"/community/street_community.User/getCommunityAll",getStreetVillageAll:"/community/street_community.User/getVillageAll"};e["a"]=n},5794:function(t,e,i){"use strict";i("29c8")}}]);