(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60429fa7","chunk-2d0c8a63"],{"3ac1":function(t,e,i){"use strict";i.r(e);i("aa48"),i("8f7e");for(var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-suggestions-list-box"},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"党支部名称"}},[e("a-input",{attrs:{placeholder:"请输入党支部名称"},model:{value:t.search.key_val,callback:function(e){t.$set(t.search,"key_val",e)},expression:"search.key_val"}})],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"党员手机号"}},[e("a-input",{attrs:{placeholder:"请输入党员手机号"},model:{value:t.search.key_val,callback:function(e){t.$set(t.search,"key_val",e)},expression:"search.key_val"}})],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"党支部名称"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["select",{rules:[{required:!0,message:"Please select your country!"}]}],expression:"[\n                      'select',\n                      { rules: [{ required: true, message: 'Please select your country!' }] },\n                    ]"}],attrs:{placeholder:"请输入党支部名称"}},t._l(t.options_data,(function(i,m){return e("a-select-option",{attrs:{value:i.value}},[t._v(" "+t._s(i.text)+" ")])})),1)],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.searchList()}}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1)],1),e("div",{staticClass:"add-box"},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.addActive()}}},[t._v(" 新建 ")])],1)],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.table_change},scopedSlots:t._u([{key:"status",fn:function(i,m){return e("span",{},[e("a-badge",{attrs:{status:t._f("statusFilter")(m.status),text:i}})],1)}},{key:"action",fn:function(i,m){return e("span",{},[e("a",{on:{click:function(e){return t.lookEdit(m)}}},[t._v("编辑")])])}}])}),e("a-modal",{attrs:{title:"",visible:t.visible,"confirm-loading":t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[e("a-tabs",{staticClass:"tabs",attrs:{type:"card"},on:{change:t.callback}},[e("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[e("a-form",{attrs:{layout:""}},[e("a-form-item",{attrs:{label:"党支部名称","label-col":{span:4},"wrapper-col":{span:18}}},[e("a-input",{attrs:{placeholder:"请输入党支部名称"}})],1),e("a-form-item",{attrs:{label:"党支部介绍","label-col":{span:4},"wrapper-col":{span:18}}},[e("a-input",{attrs:{type:"textarea",placeholder:"请输入党支部介绍"}})],1)],1)],1),e("a-tab-pane",{key:"2",attrs:{tab:"Tab 2"}},[t._v(" Content of Tab Pane 2 ")]),e("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[t._v(" Content of Tab Pane 3 ")])],1)],1)],1)},n=[],o=i("bcc3"),s=i("567c"),a=[{title:"姓名",dataIndex:"active_name",key:"active_name"},{title:"性别",dataIndex:"sex_1",key:"sex_1"},{title:"联系方式",dataIndex:"phone",key:"phone"},{title:"身份证号",dataIndex:"IDcard",key:"IDcard"},{title:"住址",dataIndex:"address",key:"address"},{title:"所属党支部",dataIndex:"sex_1",key:"sex_1"},{title:"状态",dataIndex:"status_txt",key:"status_txt",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],r=[],c=0;c<10;c++)r.push({activity_id:c,active_name:"active_name ".concat(c),num_txt:"30/".concat(c),phone:"18895319138",sex_1:"男",address:"安徽省安庆市潜山市哈哈镇".concat(c),IDcard:"340824155632542147".concat(c),start_end_time_txt:"2020/1/1 10:00 ~ 2020/5/20 10:00",status:0,status_txt:"正常 ".concat(c),sort:100-c,add_time_txt:"2020/5/28 10:".concat(c)});var u={name:"volunteerActivitiesList",filters:{statusFilter:function(t){var e=["error","success"];return e[t]}},data:function(){var t;return t={reply_content:"",pagination:{pageSize:10,total:10},search_data:[],search:{key_val:"",value:"",page:1,desc:""},form:this.$form.createForm(this),visible:!1,data:r,columns:a,page:1},Object(o["a"])(t,"visible",!1),Object(o["a"])(t,"confirmLoading",!1),Object(o["a"])(t,"options_data",[{value:"zhengchang",text:"正常"},{value:"zhuangchu",text:"转出"},{value:"shilian",text:"失联"},{value:"siwang",text:"死亡"},{value:"qingtui",text:"清退"}]),t},mounted:function(){},watch:{checkedKeys:function(t){console.log("onCheck",t)}},methods:{callback:function(t){console.log(t)},addActive:function(){this.visible=!0},handleOk:function(t){var e=this;this.confirmLoading=!0,setTimeout((function(){e.visible=!1,e.confirmLoading=!1}),2e3)},handleCancel:function(t){console.log("Clicked cancel button"),this.visible=!1},getVolunteerActivityList:function(){var t=this;this.search["page"]=this.page,this.request(s["a"].volunteerActivityList,this.search).then((function(e){console.log("res",e),t.pagination.total=e.count?e.count:0,t.data=e.list}))},delInfo:function(t){var e=this;this.$confirm({title:"你确定要删除该活动信息?",content:"该活动一旦删除不可恢复，且相关报名信息将失效",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){e.request(s["a"].delVolunteerActivity,{activity_id:t.activity_id}).then((function(t){e.$message.success("删除成功！"),e.getVolunteerActivityList()}))},onCancel:function(){console.log("Cancel")}})},sign_list:function(t){var e=this.getRouterPath("signVolunteerActivitiesList");console.log("pathInfo",e),this.$router.push({path:e,query:{activity_id:t.activity_id}})},lookEdit:function(t){console.log("record",t);var e=this.getRouterPath("addVolunteerActivitiesInfo");console.log("lookEdit",e),this.$router.push({path:e,query:{activity_id:t.activity_id}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.page=t.current,this.getVolunteerActivityList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.getVolunteerActivityList()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={key_val:"active_name",value:"",page:1},this.search_data=[],this.getVolunteerActivityList()}}},y=u,l=(i("845d"),i("0b56")),g=Object(l["a"])(y,m,n,!1,null,"66f4315f",null);e["default"]=g.exports},"567c":function(t,e,i){"use strict";var m={config:"/community/street_community.config/index",addIndex:"/community/street_community.config/addIndex",streetUpload:"/community/street_community.config/upload",messageSuggestionsList:"/community/street_community.MessageSuggestionsList/getList",messageSuggestionsDetail:"/community/street_community.MessageSuggestionsList/detail",saveMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/saveMessageSuggestionsReplyInfo",deleteMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/deleteMessageSuggestionsReplyInfo",volunteerActivityList:"/community/street_community.VolunteerActivity/getList",volunteerActivityInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinDetail",uploadImgApi:"/community/street_community.volunteerActivity/uploadImgApi",subActiveJoin:"/community/street_community.volunteerActivity/subActiveJoin",addVolunteerActivity:"/community/street_community.VolunteerActivity/addVolunteerActivity",getVolunteerDetail:"/community/street_community.VolunteerActivity/getVolunteerDetail",delVolunteerActivity:"/community/street_community.VolunteerActivity/delVolunteerActivity",getActiveJoinList:"/community/street_community.VolunteerActivity/getActiveJoinList",delActivityJoin:"/community/street_community.VolunteerActivity/delActivityJoin",getVolunteerActiveJoinInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinInfo",getStreetShowUrl:"/community/street_community.Visualization/getStreetShowUrl",getBannerList:"/community/street_community.Visualization/bannerList",getBannerInfo:"/community/street_community.Visualization/getBannerInfo",addBanner:"/community/street_community.Visualization/addBanner",getApplication:"/community/street_community.Visualization/getApplication",bannerDel:"/community/street_community.Visualization/del",upload:"/community/street_community.Visualization/upload",getStreetNavList:"/community/street_community.StreetNav/getStreetNavList",addStreetNav:"/community/street_community.StreetNav/addStreetNav",getStreetNavInfo:"/community/street_community.StreetNav/getStreetNavInfo",streetNavDel:"/community/street_community.StreetNav/del",getPartyBranch:"/community/street_community.PartyBranch/getList",getCommunity:"/community/street_community.PartyBranch/getCommunity",addPartyBranch:"/community/street_community.PartyBranch/addPartyBranch",getPartyInfo:"/community/street_community.PartyBranch/getPartyInfo",getPartyBranchType:"/community/street_community.PartyBranch/getPartyType",delPartyBranch:"/community/street_community.PartyBranch/delPartyBranch",getPartyLocation:"/community/street_community.PartyBranch/getPartyLocation",getPartyBranchAll:"/community/street_community.PartyMember/getPartyBranchAll",getPartyMember:"/community/street_community.PartyMember/getList",getPartyMemberInfo:"/community/street_community.PartyMember/getPartyMemberInfo",getPartyUpload:"/community/street_community.PartyMember/upload",subPartyMember:"/community/street_community.PartyMember/editPartyMember",getProvinceList:"/merchant/merchant.system.area/getProvinceList",getCity:"/merchant/merchant.system.area/getCityList",getPartyMemberRoomInfo:"/community/street_community.PartyMember/getPartyMemberRoomInfo",getLessonsClassList:"/community/street_community.MeetingLesson/getLessonClassList",getLessonsClassInfo:"/community/street_community.MeetingLesson/getClassInfo",subLessonsClass:"/community/street_community.MeetingLesson/subLessonClass",delLessonsClass:"/community/street_community.MeetingLesson/delLessonClass",getMeetingList:"/community/street_community.MeetingLesson/getMeetingList",getMeetingInfo:"/community/street_community.MeetingLesson/getMeetingInfo",subMeeting:"/community/street_community.MeetingLesson/subMeeting",uploadMeeting:"/community/street_community.MeetingLesson/upload",delMeeting:"/community/street_community.MeetingLesson/delMeeting",subWeChatNotice:"/community/street_community.MeetingLesson/weChatNotice",getReplyList:"/community/street_community.MeetingLesson/getReplyList",actionReply:"/community/street_community.MeetingLesson/actionReply",openReplySwitch:"/community/street_community.MeetingLesson/isOpenReplySwitch",getMeetingBranchType:"/community/street_community.MeetingLesson/getPartyType",getPartyActivityList:"/community/street_community.PartyActivities/getPartyActivityList",getPartyActivityInfo:"/community/street_community.PartyActivities/getPartyActivityInfo",activityUpload:"/community/street_community.PartyActivities/upload",subPartyActivity:"/community/street_community.PartyActivities/subPartyActivity",delPartyActivity:"/community/street_community.PartyActivities/delPartyActivity",getApplyList:"/community/street_community.PartyActivities/getApplyList",getApplyInfo:"/community/street_community.PartyActivities/getApplyInfo",subApply:"/community/street_community.PartyActivities/subApply",delApply:"/community/street_community.PartyActivities/delApply",getPartyBuildList:"/community/street_community.PartyBuild/getPartyBuildLists",getPartyBuildInfo:"/community/street_community.PartyBuild/PartyBuildDetail",getPartyBuildCategoryInfo:"/community/street_community.PartyBuild/PartyBuildCategoryDetail",getPartyBuildCategoryList:"/community/street_community.PartyBuild/getPartyBuildCategoryLists",getPartyBuildReply:"/community/street_community.PartyBuild/getPartyBuildReplyLists",delPartyBuildCategory:"/community/street_community.PartyBuild/delPartyBuildCategory",addPartyBuildCategory:"/community/street_community.PartyBuild/addPartyBuildCategory",savePartyBuildCategory:"/community/street_community.PartyBuild/savePartyBuildCategory",addPartyBuild:"/community/street_community.PartyBuild/addPartyBuild",savePartyBuild:"/community/street_community.PartyBuild/savePartyBuild",delPartyBuild:"/community/street_community.PartyBuild/delPartyBuild",changeReplyStatus:"/community/street_community.PartyBuild/changeReplyStatus",isSwitch:"/community/street_community.PartyBuild/isSwitch",partyWeChatNotice:"/community/street_community.PartyBuild/weChatNotice",userVulnerableGroupsLists:"/community/street_community.SpecialGroupManage/getUserVulnerableGroupsList",getSpecialGroupsRecordList:"/community/street_community.SpecialGroupManage/getSpecialGroupsRecordList",addSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/addSpecialGroupsRecord",delSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/delSpecialGroupsRecord",getRecordDetail:"/community/street_community.SpecialGroupManage/getRecordDetail",getGroupDetail:"/community/street_community.SpecialGroupManage/getGroupDetail",getUserLabel:"/community/street_community.SpecialGroupManage/getUserLabel",gridCustomList:"/community/street_community.GridCustom/getGridCustomList",addGridCustom:"/community/street_community.GridCustom/addGridCustom",saveGridCustom:"/community/street_community.GridCustom/saveGridCustom",getGridCustomDetail:"/community/street_community.GridCustom/getGridCustomDetail",getStreetAreaInfo:"/community/street_community.GridCustom/getStreetDetail",addGridRange:"/community/street_community.GridCustom/addGridRange",getGridRange:"/community/street_community.GridCustom/getGridRange",delGridRange:"/community/street_community.GridCustom/delGridRange",getAreaList:"/community/street_community.GridCustom/getAreaList",getVillageList:"/community/street_community.GridCustom/getVillageList",getSingleList:"/community/street_community.GridCustom/getSingleList",getGridMember:"/community/street_community.GridCustom/getGridMember",getBindType:"/community/street_community.GridCustom/getBindType",getZoomLastGrid:"/community/street_community.GridCustom/getZoomLastGrid",getNowType:"/community/street_community.GridCustom/getNowType",showInfo:"/community/street_community.GridCustom/showInfo",getFloorInfo:"/community/street_community.GridCustom/getFloorInfo",getOpenDoorList:"/community/street_community.GridCustom/getOpenDoorList",getSingleInfo:"/community/street_community.GridCustom/getSingleInfo",getLayerInfo:"/community/street_community.GridCustom/getLayerInfo",getRoomUserList:"/community/street_community.GridCustom/getRoomUserList",getInOutRecord:"/community/street_community.GridCustom/getInOutRecord",getUserInfo:"/community/street_community.GridCustom/getUserInfo",saveRange:"/community/street_community.GridCustom/saveRange",delGridCustom:"/community/street_community.GridCustom/delGridCustom",getWorkers:"/community/street_community.GridEvent/getWorkers",getMemberList:"/community/street_community.OrganizationStreet/getMemberList",delWorker:"/community/street_community.OrganizationStreet/delWorker",saveStreetWorker:"/community/street_community.OrganizationStreet/saveStreetWorker",getGridRangeInfo:"/community/street_community.GridCustom/getGridRangeInfo",getMatterCategoryList:"/community/street_community.Matter/getCategoryList",getMatterCategoryDetail:"/community/street_community.Matter/getCategoryDetail",handleCategory:"/community/street_community.Matter/handleCategory",delCategory:"/community/street_community.Matter/delCategory",getMatterList:"/community/street_community.Matter/getMatterList",getMatterInfo:"/community/street_community.Matter/getMatterInfo",subMatter:"/community/street_community.Matter/subMatter",delMatter:"/community/street_community.Matter/delMatter",getClassifyNav:"/community/street_community.FixedAssets/getClassifyNav",operateClassifyNav:"/community/street_community.FixedAssets/operateClassifyNav",getClassifyNavInfo:"/community/street_community.FixedAssets/getClassifyNavInfo",delClassifyNav:"/community/street_community.FixedAssets/delClassifyNav",getClassifyList:"/community/street_community.FixedAssets/getClassifyList",subAssets:"/community/street_community.FixedAssets/subAssets",delAssets:"/community/street_community.FixedAssets/delAssets",getAssetsInfo:"/community/street_community.FixedAssets/getAssetsInfo",getAssetsList:"/community/street_community.FixedAssets/getAssetsList",subLedRent:"/community/street_community.FixedAssets/subLedRent",subTakeBack:"/community/street_community.FixedAssets/subTakeBack",getRecordList:"/community/street_community.FixedAssets/getRecordList",getMaintainList:"/community/street_community.FixedAssets/getMaintainList",getMaintainInfo:"/community/street_community.FixedAssets/getMaintainInfo",subMaintain:"/community/street_community.FixedAssets/subMaintain",uploadStreet:"/community/street_community.FixedAssets/uploadStreet",weditorUpload:"/community/street_community.config/weditorUpload",getTissueNav:"/community/street_community.OrganizationStreet/getTissueNav",getBranchInfo:"/community/street_community.OrganizationStreet/getBranchInfo",subBranch:"/community/street_community.OrganizationStreet/addOrganization",delBranch:"/community/street_community.OrganizationStreet/delBranch",getMemberInfo:"/community/street_community.OrganizationStreet/getMemberInfo",subMemberBranch:"/community/street_community.OrganizationStreet/subMemberBranch",getTissueNavList:"/community/street_community.OrganizationStreet/getTissueNavList",getEventCategoryList:"/community/street_community.GridEvent/getEventCategoryList",addEventCategory:"/community/street_community.GridEvent/addEventCategory",editEventCategory:"/community/street_community.GridEvent/editEventCategory",todayEventCount:"/community/street_community.GridEvent/todayEventCount",eventData:"/community/street_community.GridEvent/eventData",getCategoryList:"/community/street_community.GridEvent/getCategoryList",getWorkerOrderLists:"/community/street_community.GridEvent/getWorkerOrderLists",getWorkerEventDetail:"/community/street_community.GridEvent/getWorkerEventDetail",allocationWorker:"/community/street_community.GridEvent/allocationWorker",getWorkersPage:"/community/street_community.GridEvent/getWorkersPage",delWorkerOrder:"/community/street_community.GridEvent/delWorkerOrder",getGridEventOrg:"/community/street_community.GridEvent/getGridEventOrg",getStreetCommunityUserList:"/community/street_community.User/getUerList",getStreetCommunityAll:"/community/street_community.User/getCommunityAll",getStreetVillageAll:"/community/street_community.User/getVillageAll",getStreetSingleAll:"/community/street_community.User/getSingleAll",addCoordinatefloor:"/community/village_api.Aockpit/addCoordinatefloor",addAreaSingle:"/community/village_api.Aockpit/addAreaSingle",getAreaCoordinate:"/community/village_api.Aockpit/getAreaCoordinate",getSingleAreaCoordinate:"/community/village_api.Aockpit/getSingleAreaCoordinate",delArea:"/community/village_api.Aockpit/delArea",getTaskReleaseListColumns:"/community/street_community.TaskRelease/getTaskReleaseListColumns",getTaskReleaseList:"/community/street_community.TaskRelease/getTaskReleaseList",getTaskReleaseOne:"/community/street_community.TaskRelease/getTaskReleaseOne",taskReleaseAdd:"/community/street_community.TaskRelease/taskReleaseAdd",taskReleaseSub:"/community/street_community.TaskRelease/taskReleaseSub",taskReleaseDel:"/community/street_community.TaskRelease/taskReleaseDel",getTaskReleaseRecord:"/community/street_community.TaskRelease/getTaskReleaseRecord",getTaskReleaseType:"/community/street_community.TaskRelease/getTaskReleaseType",getCommunityCareType:"/community/street_community.TaskRelease/getCommunityCareType",getCommunityCareList:"/community/street_community.TaskRelease/getCommunityCareList",communityCareAdd:"/community/street_community.TaskRelease/communityCareAdd",communityCareOne:"/community/street_community.TaskRelease/communityCareOne",communityCareSub:"/community/street_community.TaskRelease/communityCareSub",communityCareDel:"/community/street_community.TaskRelease/communityCareDel",getEpidemicPreventSeriesList:"/community/street_community.TaskRelease/getEpidemicPreventSeriesList",epidemicPreventSeriesAdd:"/community/street_community.TaskRelease/epidemicPreventSeriesAdd",epidemicPreventSeriesOne:"/community/street_community.TaskRelease/epidemicPreventSeriesOne",epidemicPreventSeriesSub:"/community/street_community.TaskRelease/epidemicPreventSeriesSub",epidemicPreventSeriesDel:"/community/street_community.TaskRelease/epidemicPreventSeriesDel",getEpidemicPreventTypeList:"/community/street_community.TaskRelease/getEpidemicPreventTypeList",epidemicPreventTypeAdd:"/community/street_community.TaskRelease/epidemicPreventTypeAdd",epidemicPreventTypeOne:"/community/street_community.TaskRelease/epidemicPreventTypeOne",epidemicPreventTypeSub:"/community/street_community.TaskRelease/epidemicPreventTypeSub",epidemicPreventTypeDel:"/community/street_community.TaskRelease/epidemicPreventTypeDel",getEpidemicPreventParamAll:"/community/street_community.TaskRelease/getEpidemicPreventParamAll",getEpidemicPreventRecordList:"/community/street_community.TaskRelease/getEpidemicPreventRecordList",epidemicPreventRecordAdd:"/community/street_community.TaskRelease/epidemicPreventRecordAdd",epidemicPreventRecordOne:"/community/street_community.TaskRelease/epidemicPreventRecordOne",epidemicPreventRecordSub:"/community/street_community.TaskRelease/epidemicPreventRecordSub",epidemicPreventRecordDel:"/community/street_community.TaskRelease/epidemicPreventRecordDel",getStreetCommunityTissueNav:"/community/street_community.TaskRelease/getTissueNav",getTaskReleaseTissueNav:"/community/street_community.TaskRelease/getTaskReleaseTissueNav",getIndex:"/community/street_community.CommunityCommittee/getIndex",getAreaStreetWorkersOrder:"/community/street_community.CommunityCommittee/getAreaStreetWorkersOrder",getPartyBuilding:"/community/street_community.CommunityCommittee/getPartyBuilding",getStreetPartyActivity:"/community/street_community.CommunityCommittee/getPartyActivity",getEventAnaly:"/community/street_community.CommunityCommittee/getEventAnaly",getPopulationAnaly:"/community/street_community.CommunityCommittee/getPopulationAnaly",getPartyMemberStatistics:"/community/street_community.CommunityCommittee/getPartyMemberStatistics",getEpidemicPrevent:"/community/street_community.CommunityCommittee/getEpidemicPrevent",getPartyOrgStatistics:"/community/street_community.CommunityCommittee/getPartyOrgStatistics",getPartyMeetingStatistics:"/community/street_community.CommunityCommittee/getPartyMeetingStatistics",getPartySeekStatistics:"/community/street_community.CommunityCommittee/getPartySeekStatistics",getPartyNewsStatistics:"/community/street_community.CommunityCommittee/getPartyNewsStatistics",getPopulationPersonStatistics:"/community/street_community.CommunityCommittee/getPopulationPersonStatistics",getPopulationSexStatistics:"/community/street_community.CommunityCommittee/getPopulationSexStatistics",getPopulationAgeStatistics:"/community/street_community.CommunityCommittee/getPopulationAgeStatistics",getPopulationUserLabelStatistics:"/community/street_community.CommunityCommittee/getPopulationUserLabelStatistics",getPopulationEducateStatistics:"/community/street_community.CommunityCommittee/getPopulationEducateStatistics",getPopulationMarriageStatistics:"/community/street_community.CommunityCommittee/getPopulationMarriageStatistics",getEventReportStatistics:"/community/street_community.CommunityCommittee/getEventReportStatistics",getEventCareStatistics:"/community/street_community.CommunityCommittee/getEventCareStatistics",getEventVirtualStatistics:"/community/street_community.CommunityCommittee/getEventVirtualStatistics",getEventVideo1Statistics:"/community/street_community.CommunityCommittee/getEventVideo1Statistics",getEventVideo2Statistics:"/community/street_community.CommunityCommittee/getEventVideo2Statistics",getStreetVillages:"/community/street_community.OrganizationStreet/getStreetXillages",getProvinceCityAreas:"/community/street_community.OrganizationStreet/getProvinceCityAreas",getStreetRolePermission:"/community/street_community.OrganizationStreet/getStreetRolePermission",saveStreetRolePermission:"/community/street_community.OrganizationStreet/saveStreetRolePermission",getPartyBranchPosition:"/community/street_community.CommunityCommittee/getPartyBranchPosition",getStreetLibraryClass:"/community/street_community.Visualization/getStreetLibraryClass",getStreetWorkRecognition:"/community/street_community.OrganizationStreet/getRecognition",checkStreetWorkRecognition:"/community/street_community.OrganizationStreet/checkWorker",cancelStreetWorkRecognition:"/community/street_community.OrganizationStreet/cancelWorkerBind"};e["a"]=m},"845d":function(t,e,i){"use strict";i("cb5c")},cb5c:function(t,e,i){}}]);