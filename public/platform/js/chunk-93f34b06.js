(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93f34b06"],{1735:function(t,e,i){"use strict";i.r(e);var m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:850,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{staticClass:"prepaid_info",attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("span",{staticClass:"box_width label_col ant-form-item-required"},[t._v("系列")]),i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["series_id",{initialValue:t.post.series_id,rules:[{required:!0,message:t.L("请选择系列！")}]}],expression:"['series_id',{ initialValue: post.series_id,rules: [{ required: true, message: L('请选择系列！') }] }]"}],staticStyle:{width:"300px"},attrs:{"show-search":"","option-filter-prop":"children",placeholder:"请选择系列"}},t._l(t.series_all,(function(e){return i("a-select-option",{key:e.id},[t._v(" "+t._s(e.title)+" ")])})),1)],1),i("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("span",{staticClass:"box_width label_col ant-form-item-required"},[t._v("类型")]),i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type_id",{initialValue:t.post.type_id,rules:[{required:!0,message:t.L("请选择类型！")}]}],expression:"['type_id',{ initialValue: post.type_id,rules: [{ required: true, message: L('请选择类型！') }] }]"}],staticStyle:{width:"300px"},attrs:{"show-search":"","option-filter-prop":"children",placeholder:"请选择类型"}},t._l(t.type_all,(function(e){return i("a-select-option",{key:e.id},[t._v(" "+t._s(e.title)+" ")])})),1)],1),i("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("span",{staticClass:"box_width label_col ant-form-item-required"},[t._v("数量")]),i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["num",{initialValue:t.post.num,rules:[{required:!0,message:t.L("请输入完成数量！")}]}],expression:"['num',{ initialValue: post.num,rules: [{ required: true, message: L('请输入完成数量！') }] }]"}],staticStyle:{width:"175px"},attrs:{min:0,max:999999999,placeholder:"请输入数量"}})],1),i("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("span",{staticClass:"box_width label_col",staticStyle:{float:"left"}},[t._v("备注")]),i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks",{initialValue:t.post.remarks}],expression:"['remarks',{ initialValue: post.remarks }]"}],staticStyle:{width:"300px"},attrs:{maxLength:200,placeholder:"请输入备注内容",rows:4}})],1)],1)],1)],1)},o=[],n=i("567c"),s={components:{},data:function(){return{title:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,post:{id:0,series_id:void 0,type_id:void 0,num:"",remarks:""},series_all:[],type_all:[]}},mounted:function(){},methods:{getParamAll:function(){var t=this;this.request(n["a"].getEpidemicPreventParamAll).then((function(e){t.series_all=e.series_list,t.type_all=e.type_list})).catch((function(t){}))},add:function(){this.title="添加",this.visible=!0,this.post={id:0,series_id:void 0,type_id:void 0,num:"",remarks:""},this.getParamAll()},edit:function(t){this.title="编辑ID："+t,this.post.id=t,this.getParamAll(),this.getEditInfo()},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){if(e)t.confirmLoading=!1;else{var m=n["a"].epidemicPreventRecordAdd;t.post.id>0&&(m=n["a"].epidemicPreventRecordSub),i.complete_time=t.post.complete_time,i.wid_all=t.post.wid_all,i.id=t.post.id,t.request(m,i).then((function(e){t.post.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,console.log(123),t.$emit("ok")}),1500),console.log(345)})).catch((function(e){t.confirmLoading=!1}))}}))},handleFunc:function(t){console.log("vvvvvv",t,this.series_all,this.type_all)},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.confirmLoading=!0,this.request(n["a"].epidemicPreventRecordOne,{id:this.post.id}).then((function(e){t.post=e,0==e.type_id&&(t.post.type_id=void 0),0==e.series_id&&(t.post.series_id=void 0),t.handleFunc(e),t.confirmLoading=!1,t.visible=!0}))}}},r=s,a=(i("2afa"),i("0c7c")),c=Object(a["a"])(r,m,o,!1,null,"b900c99e",null);e["default"]=c.exports},"197e":function(t,e,i){},"2afa":function(t,e,i){"use strict";i("197e")},"567c":function(t,e,i){"use strict";var m={config:"/community/street_community.config/index",addIndex:"/community/street_community.config/addIndex",streetUpload:"/community/street_community.config/upload",messageSuggestionsList:"/community/street_community.MessageSuggestionsList/getList",messageSuggestionsDetail:"/community/street_community.MessageSuggestionsList/detail",saveMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/saveMessageSuggestionsReplyInfo",deleteMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/deleteMessageSuggestionsReplyInfo",volunteerActivityList:"/community/street_community.VolunteerActivity/getList",volunteerActivityInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinDetail",uploadImgApi:"/community/street_community.volunteerActivity/uploadImgApi",subActiveJoin:"/community/street_community.volunteerActivity/subActiveJoin",addVolunteerActivity:"/community/street_community.VolunteerActivity/addVolunteerActivity",getVolunteerDetail:"/community/street_community.VolunteerActivity/getVolunteerDetail",delVolunteerActivity:"/community/street_community.VolunteerActivity/delVolunteerActivity",getActiveJoinList:"/community/street_community.VolunteerActivity/getActiveJoinList",delActivityJoin:"/community/street_community.VolunteerActivity/delActivityJoin",getVolunteerActiveJoinInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinInfo",getStreetShowUrl:"/community/street_community.Visualization/getStreetShowUrl",getBannerList:"/community/street_community.Visualization/bannerList",getBannerInfo:"/community/street_community.Visualization/getBannerInfo",addBanner:"/community/street_community.Visualization/addBanner",getApplication:"/community/street_community.Visualization/getApplication",bannerDel:"/community/street_community.Visualization/del",upload:"/community/street_community.Visualization/upload",getStreetNavList:"/community/street_community.StreetNav/getStreetNavList",addStreetNav:"/community/street_community.StreetNav/addStreetNav",getStreetNavInfo:"/community/street_community.StreetNav/getStreetNavInfo",streetNavDel:"/community/street_community.StreetNav/del",getPartyBranch:"/community/street_community.PartyBranch/getList",getCommunity:"/community/street_community.PartyBranch/getCommunity",addPartyBranch:"/community/street_community.PartyBranch/addPartyBranch",getPartyInfo:"/community/street_community.PartyBranch/getPartyInfo",getPartyBranchType:"/community/street_community.PartyBranch/getPartyType",delPartyBranch:"/community/street_community.PartyBranch/delPartyBranch",getPartyLocation:"/community/street_community.PartyBranch/getPartyLocation",getPartyBranchAll:"/community/street_community.PartyMember/getPartyBranchAll",getPartyMember:"/community/street_community.PartyMember/getList",getPartyMemberInfo:"/community/street_community.PartyMember/getPartyMemberInfo",getPartyUpload:"/community/street_community.PartyMember/upload",subPartyMember:"/community/street_community.PartyMember/editPartyMember",getProvinceList:"/merchant/merchant.system.area/getProvinceList",getCity:"/merchant/merchant.system.area/getCityList",getPartyMemberRoomInfo:"/community/street_community.PartyMember/getPartyMemberRoomInfo",getLessonsClassList:"/community/street_community.MeetingLesson/getLessonClassList",getLessonsClassInfo:"/community/street_community.MeetingLesson/getClassInfo",subLessonsClass:"/community/street_community.MeetingLesson/subLessonClass",delLessonsClass:"/community/street_community.MeetingLesson/delLessonClass",getMeetingList:"/community/street_community.MeetingLesson/getMeetingList",getMeetingInfo:"/community/street_community.MeetingLesson/getMeetingInfo",subMeeting:"/community/street_community.MeetingLesson/subMeeting",uploadMeeting:"/community/street_community.MeetingLesson/upload",delMeeting:"/community/street_community.MeetingLesson/delMeeting",subWeChatNotice:"/community/street_community.MeetingLesson/weChatNotice",getReplyList:"/community/street_community.MeetingLesson/getReplyList",actionReply:"/community/street_community.MeetingLesson/actionReply",openReplySwitch:"/community/street_community.MeetingLesson/isOpenReplySwitch",getMeetingBranchType:"/community/street_community.MeetingLesson/getPartyType",getPartyActivityList:"/community/street_community.PartyActivities/getPartyActivityList",getPartyActivityInfo:"/community/street_community.PartyActivities/getPartyActivityInfo",activityUpload:"/community/street_community.PartyActivities/upload",subPartyActivity:"/community/street_community.PartyActivities/subPartyActivity",delPartyActivity:"/community/street_community.PartyActivities/delPartyActivity",getApplyList:"/community/street_community.PartyActivities/getApplyList",getApplyInfo:"/community/street_community.PartyActivities/getApplyInfo",subApply:"/community/street_community.PartyActivities/subApply",delApply:"/community/street_community.PartyActivities/delApply",getPartyBuildList:"/community/street_community.PartyBuild/getPartyBuildLists",getPartyBuildInfo:"/community/street_community.PartyBuild/PartyBuildDetail",getPartyBuildCategoryInfo:"/community/street_community.PartyBuild/PartyBuildCategoryDetail",getPartyBuildCategoryList:"/community/street_community.PartyBuild/getPartyBuildCategoryLists",getPartyBuildReply:"/community/street_community.PartyBuild/getPartyBuildReplyLists",delPartyBuildCategory:"/community/street_community.PartyBuild/delPartyBuildCategory",addPartyBuildCategory:"/community/street_community.PartyBuild/addPartyBuildCategory",savePartyBuildCategory:"/community/street_community.PartyBuild/savePartyBuildCategory",addPartyBuild:"/community/street_community.PartyBuild/addPartyBuild",savePartyBuild:"/community/street_community.PartyBuild/savePartyBuild",delPartyBuild:"/community/street_community.PartyBuild/delPartyBuild",changeReplyStatus:"/community/street_community.PartyBuild/changeReplyStatus",isSwitch:"/community/street_community.PartyBuild/isSwitch",partyWeChatNotice:"/community/street_community.PartyBuild/weChatNotice",userVulnerableGroupsLists:"/community/street_community.SpecialGroupManage/getUserVulnerableGroupsList",getSpecialGroupsRecordList:"/community/street_community.SpecialGroupManage/getSpecialGroupsRecordList",addSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/addSpecialGroupsRecord",delSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/delSpecialGroupsRecord",getRecordDetail:"/community/street_community.SpecialGroupManage/getRecordDetail",getGroupDetail:"/community/street_community.SpecialGroupManage/getGroupDetail",getUserLabel:"/community/street_community.SpecialGroupManage/getUserLabel",gridCustomList:"/community/street_community.GridCustom/getGridCustomList",addGridCustom:"/community/street_community.GridCustom/addGridCustom",saveGridCustom:"/community/street_community.GridCustom/saveGridCustom",getGridCustomDetail:"/community/street_community.GridCustom/getGridCustomDetail",getStreetAreaInfo:"/community/street_community.GridCustom/getStreetDetail",addGridRange:"/community/street_community.GridCustom/addGridRange",getGridRange:"/community/street_community.GridCustom/getGridRange",delGridRange:"/community/street_community.GridCustom/delGridRange",getAreaList:"/community/street_community.GridCustom/getAreaList",getVillageList:"/community/street_community.GridCustom/getVillageList",getSingleList:"/community/street_community.GridCustom/getSingleList",getGridMember:"/community/street_community.GridCustom/getGridMember",getBindType:"/community/street_community.GridCustom/getBindType",getZoomLastGrid:"/community/street_community.GridCustom/getZoomLastGrid",getNowType:"/community/street_community.GridCustom/getNowType",showInfo:"/community/street_community.GridCustom/showInfo",getFloorInfo:"/community/street_community.GridCustom/getFloorInfo",getOpenDoorList:"/community/street_community.GridCustom/getOpenDoorList",getSingleInfo:"/community/street_community.GridCustom/getSingleInfo",getLayerInfo:"/community/street_community.GridCustom/getLayerInfo",getRoomUserList:"/community/street_community.GridCustom/getRoomUserList",getInOutRecord:"/community/street_community.GridCustom/getInOutRecord",getUserInfo:"/community/street_community.GridCustom/getUserInfo",saveRange:"/community/street_community.GridCustom/saveRange",delGridCustom:"/community/street_community.GridCustom/delGridCustom",getWorkers:"/community/street_community.GridEvent/getWorkers",getMemberList:"/community/street_community.OrganizationStreet/getMemberList",delWorker:"/community/street_community.OrganizationStreet/delWorker",saveStreetWorker:"/community/street_community.OrganizationStreet/saveStreetWorker",getGridRangeInfo:"/community/street_community.GridCustom/getGridRangeInfo",getMatterCategoryList:"/community/street_community.Matter/getCategoryList",getMatterCategoryDetail:"/community/street_community.Matter/getCategoryDetail",handleCategory:"/community/street_community.Matter/handleCategory",delCategory:"/community/street_community.Matter/delCategory",getMatterList:"/community/street_community.Matter/getMatterList",getMatterInfo:"/community/street_community.Matter/getMatterInfo",subMatter:"/community/street_community.Matter/subMatter",delMatter:"/community/street_community.Matter/delMatter",getClassifyNav:"/community/street_community.FixedAssets/getClassifyNav",operateClassifyNav:"/community/street_community.FixedAssets/operateClassifyNav",getClassifyNavInfo:"/community/street_community.FixedAssets/getClassifyNavInfo",delClassifyNav:"/community/street_community.FixedAssets/delClassifyNav",getClassifyList:"/community/street_community.FixedAssets/getClassifyList",subAssets:"/community/street_community.FixedAssets/subAssets",delAssets:"/community/street_community.FixedAssets/delAssets",getAssetsInfo:"/community/street_community.FixedAssets/getAssetsInfo",getAssetsList:"/community/street_community.FixedAssets/getAssetsList",subLedRent:"/community/street_community.FixedAssets/subLedRent",subTakeBack:"/community/street_community.FixedAssets/subTakeBack",getRecordList:"/community/street_community.FixedAssets/getRecordList",getMaintainList:"/community/street_community.FixedAssets/getMaintainList",getMaintainInfo:"/community/street_community.FixedAssets/getMaintainInfo",subMaintain:"/community/street_community.FixedAssets/subMaintain",uploadStreet:"/community/street_community.FixedAssets/uploadStreet",weditorUpload:"/community/street_community.config/weditorUpload",getTissueNav:"/community/street_community.OrganizationStreet/getTissueNav",getBranchInfo:"/community/street_community.OrganizationStreet/getBranchInfo",subBranch:"/community/street_community.OrganizationStreet/addOrganization",delBranch:"/community/street_community.OrganizationStreet/delBranch",getMemberInfo:"/community/street_community.OrganizationStreet/getMemberInfo",subMemberBranch:"/community/street_community.OrganizationStreet/subMemberBranch",getTissueNavList:"/community/street_community.OrganizationStreet/getTissueNavList",getEventCategoryList:"/community/street_community.GridEvent/getEventCategoryList",addEventCategory:"/community/street_community.GridEvent/addEventCategory",editEventCategory:"/community/street_community.GridEvent/editEventCategory",todayEventCount:"/community/street_community.GridEvent/todayEventCount",eventData:"/community/street_community.GridEvent/eventData",getCategoryList:"/community/street_community.GridEvent/getCategoryList",getWorkerOrderLists:"/community/street_community.GridEvent/getWorkerOrderLists",getWorkerEventDetail:"/community/street_community.GridEvent/getWorkerEventDetail",allocationWorker:"/community/street_community.GridEvent/allocationWorker",getWorkersPage:"/community/street_community.GridEvent/getWorkersPage",delWorkerOrder:"/community/street_community.GridEvent/delWorkerOrder",getGridEventOrg:"/community/street_community.GridEvent/getGridEventOrg",getStreetCommunityUserList:"/community/street_community.User/getUerList",getStreetCommunityAll:"/community/street_community.User/getCommunityAll",getStreetVillageAll:"/community/street_community.User/getVillageAll",getStreetSingleAll:"/community/street_community.User/getSingleAll",addCoordinatefloor:"/community/village_api.Aockpit/addCoordinatefloor",addAreaSingle:"/community/village_api.Aockpit/addAreaSingle",getAreaCoordinate:"/community/village_api.Aockpit/getAreaCoordinate",getSingleAreaCoordinate:"/community/village_api.Aockpit/getSingleAreaCoordinate",delArea:"/community/village_api.Aockpit/delArea",getTaskReleaseListColumns:"/community/street_community.TaskRelease/getTaskReleaseListColumns",getTaskReleaseList:"/community/street_community.TaskRelease/getTaskReleaseList",getTaskReleaseOne:"/community/street_community.TaskRelease/getTaskReleaseOne",taskReleaseAdd:"/community/street_community.TaskRelease/taskReleaseAdd",taskReleaseSub:"/community/street_community.TaskRelease/taskReleaseSub",taskReleaseDel:"/community/street_community.TaskRelease/taskReleaseDel",getTaskReleaseRecord:"/community/street_community.TaskRelease/getTaskReleaseRecord",getTaskReleaseType:"/community/street_community.TaskRelease/getTaskReleaseType",getCommunityCareType:"/community/street_community.TaskRelease/getCommunityCareType",getCommunityCareList:"/community/street_community.TaskRelease/getCommunityCareList",communityCareAdd:"/community/street_community.TaskRelease/communityCareAdd",communityCareOne:"/community/street_community.TaskRelease/communityCareOne",communityCareSub:"/community/street_community.TaskRelease/communityCareSub",communityCareDel:"/community/street_community.TaskRelease/communityCareDel",getEpidemicPreventSeriesList:"/community/street_community.TaskRelease/getEpidemicPreventSeriesList",epidemicPreventSeriesAdd:"/community/street_community.TaskRelease/epidemicPreventSeriesAdd",epidemicPreventSeriesOne:"/community/street_community.TaskRelease/epidemicPreventSeriesOne",epidemicPreventSeriesSub:"/community/street_community.TaskRelease/epidemicPreventSeriesSub",epidemicPreventSeriesDel:"/community/street_community.TaskRelease/epidemicPreventSeriesDel",getEpidemicPreventTypeList:"/community/street_community.TaskRelease/getEpidemicPreventTypeList",epidemicPreventTypeAdd:"/community/street_community.TaskRelease/epidemicPreventTypeAdd",epidemicPreventTypeOne:"/community/street_community.TaskRelease/epidemicPreventTypeOne",epidemicPreventTypeSub:"/community/street_community.TaskRelease/epidemicPreventTypeSub",epidemicPreventTypeDel:"/community/street_community.TaskRelease/epidemicPreventTypeDel",getEpidemicPreventParamAll:"/community/street_community.TaskRelease/getEpidemicPreventParamAll",getEpidemicPreventRecordList:"/community/street_community.TaskRelease/getEpidemicPreventRecordList",epidemicPreventRecordAdd:"/community/street_community.TaskRelease/epidemicPreventRecordAdd",epidemicPreventRecordOne:"/community/street_community.TaskRelease/epidemicPreventRecordOne",epidemicPreventRecordSub:"/community/street_community.TaskRelease/epidemicPreventRecordSub",epidemicPreventRecordDel:"/community/street_community.TaskRelease/epidemicPreventRecordDel",getStreetCommunityTissueNav:"/community/street_community.TaskRelease/getTissueNav",getTaskReleaseTissueNav:"/community/street_community.TaskRelease/getTaskReleaseTissueNav",getIndex:"/community/street_community.CommunityCommittee/getIndex",getAreaStreetWorkersOrder:"/community/street_community.CommunityCommittee/getAreaStreetWorkersOrder",getPartyBuilding:"/community/street_community.CommunityCommittee/getPartyBuilding",getStreetPartyActivity:"/community/street_community.CommunityCommittee/getPartyActivity",getEventAnaly:"/community/street_community.CommunityCommittee/getEventAnaly",getPopulationAnaly:"/community/street_community.CommunityCommittee/getPopulationAnaly",getPartyMemberStatistics:"/community/street_community.CommunityCommittee/getPartyMemberStatistics",getEpidemicPrevent:"/community/street_community.CommunityCommittee/getEpidemicPrevent",getPartyOrgStatistics:"/community/street_community.CommunityCommittee/getPartyOrgStatistics",getPartyMeetingStatistics:"/community/street_community.CommunityCommittee/getPartyMeetingStatistics",getPartySeekStatistics:"/community/street_community.CommunityCommittee/getPartySeekStatistics",getPartyNewsStatistics:"/community/street_community.CommunityCommittee/getPartyNewsStatistics",getPopulationPersonStatistics:"/community/street_community.CommunityCommittee/getPopulationPersonStatistics",getPopulationSexStatistics:"/community/street_community.CommunityCommittee/getPopulationSexStatistics",getPopulationAgeStatistics:"/community/street_community.CommunityCommittee/getPopulationAgeStatistics",getPopulationUserLabelStatistics:"/community/street_community.CommunityCommittee/getPopulationUserLabelStatistics",getPopulationEducateStatistics:"/community/street_community.CommunityCommittee/getPopulationEducateStatistics",getPopulationMarriageStatistics:"/community/street_community.CommunityCommittee/getPopulationMarriageStatistics",getEventReportStatistics:"/community/street_community.CommunityCommittee/getEventReportStatistics",getEventCareStatistics:"/community/street_community.CommunityCommittee/getEventCareStatistics",getEventVirtualStatistics:"/community/street_community.CommunityCommittee/getEventVirtualStatistics",getEventVideo1Statistics:"/community/street_community.CommunityCommittee/getEventVideo1Statistics",getEventVideo2Statistics:"/community/street_community.CommunityCommittee/getEventVideo2Statistics",getStreetVillages:"/community/street_community.OrganizationStreet/getStreetXillages",getProvinceCityAreas:"/community/street_community.OrganizationStreet/getProvinceCityAreas",getStreetRolePermission:"/community/street_community.OrganizationStreet/getStreetRolePermission",saveStreetRolePermission:"/community/street_community.OrganizationStreet/saveStreetRolePermission",getPartyBranchPosition:"/community/street_community.CommunityCommittee/getPartyBranchPosition",getStreetLibraryClass:"/community/street_community.Visualization/getStreetLibraryClass",getStreetWorkRecognition:"/community/street_community.OrganizationStreet/getRecognition",checkStreetWorkRecognition:"/community/street_community.OrganizationStreet/checkWorker",cancelStreetWorkRecognition:"/community/street_community.OrganizationStreet/cancelWorkerBind"};e["a"]=m}}]);