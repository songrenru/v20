(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63c1de14"],{"0c50":function(t,e,i){"use strict";i("cf90")},"1cb1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"message-suggestions-list-box"},[i("div",{staticClass:"search-box"},[i("a-row",{attrs:{gutter:48}},[i("a-col",{attrs:{md:8,sm:24}},[i("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[i("a-col",{staticStyle:{"text-align":"center"},attrs:{span:6}},[t._v(" 志愿者姓名： ")]),i("a-col",{attrs:{span:18}},[i("a-input",{attrs:{placeholder:"请输入志愿者姓名"},model:{value:t.search.join_name,callback:function(e){t.$set(t.search,"join_name",e)},expression:"search.join_name"}})],1)],1)],1),i("a-col",{attrs:{md:8,sm:24}},[i("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[i("a-col",{staticStyle:{"text-align":"center"},attrs:{span:6}},[t._v(" 联系方式： ")]),i("a-col",{attrs:{span:18}},[i("a-input",{attrs:{placeholder:"请输入联系方式"},model:{value:t.search.join_phone,callback:function(e){t.$set(t.search,"join_phone",e)},expression:"search.join_phone"}})],1)],1)],1),i("a-col",{attrs:{md:2,sm:24}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),i("a-col",{attrs:{md:2,sm:24}},[i("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.table_change},scopedSlots:t._u([{key:"join_status",fn:function(e,n){return i("span",{},[i("a-badge",{attrs:{status:t._f("statusFilter")(n.join_status),text:e}})],1)}},{key:"action",fn:function(e,n){return i("span",{},[i("a",{on:{click:function(e){return t.lookEdit(n)}}},[t._v("编辑")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(e){return t.delInfo(n)}}},[t._v("删除")])],1)}}])}),i("a-modal",{attrs:{title:"查看编辑"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",[i("a-row",{attrs:{align:"middle"}},[i("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[i("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]),t._v(" 报名姓名 ")]),i("a-col",{attrs:{span:19}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_name",{initialValue:t.detail.join_name,rules:[{required:!0,message:"请填写报名者姓名!"}]}],expression:"[\n                    `join_name`,\n                    {\n                    initialValue: detail.join_name,\n                      rules: [\n                        {\n                          required: true,\n                          message: '请填写报名者姓名!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{placeholder:"请填写报名者姓名"}})],1)],1)],1),i("a-form-item",[i("a-row",{attrs:{align:"middle"}},[i("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[i("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]),t._v(" 报名手机号 ")]),i("a-col",{attrs:{span:19}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_phone",{initialValue:t.detail.join_phone,rules:[{required:!0,message:"请填写报名手机号!"}]}],expression:"[\n                  `join_phone`,\n                  {\n                  initialValue: detail.join_phone,\n                    rules: [\n                      {\n                        required: true,\n                        message: '请填写报名手机号!',\n                      },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请填写报名手机号"}})],1)],1)],1),i("a-form-item",[i("a-row",{attrs:{align:"middle"}},[i("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[1==t.detail.active_is_need?i("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]):t._e(),t._v(" 报名身份证 ")]),i("a-col",{attrs:{span:19}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_id_card",{initialValue:t.detail.join_id_card}],expression:"[\n                  `join_id_card`,\n                  {\n                    initialValue: detail.join_id_card,\n                  },\n                ]"}],attrs:{placeholder:"请填写报名身份证"}})],1)],1)],1),i("a-form-item",[i("a-row",{attrs:{align:"middle"}},[i("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[t._v(" 所属活动 ")]),i("a-col",{attrs:{span:19}},[t._v(" "+t._s(t.detail.active_name)+" ")])],1)],1),i("a-form-item",[i("a-row",{attrs:{align:"middle"}},[i("a-col",{staticClass:"modal_box_title",attrs:{md:5}},[t._v(" 备注 ")]),i("a-col",{attrs:{md:19}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_remark",{initialValue:t.detail.join_remark}],expression:"[\n                  `join_remark`,\n                  {\n                    initialValue: detail.join_remark,\n                  },\n                ]"}],attrs:{placeholder:"请输入备注内容"}})],1)],1)],1),i("a-form-item",[i("a-row",{attrs:{align:"middle"}},[i("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[i("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]),t._v(" 报名状态 ")]),i("a-col",{attrs:{span:19}},[i("a-radio-group",{attrs:{name:"join_status"},model:{value:t.detail.join_status,callback:function(e){t.$set(t.detail,"join_status",e)},expression:"detail.join_status"}},[i("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),i("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1),i("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[i("a-button",{style:{marginRight:"8px"},on:{click:t.onClose}},[t._v(" 取消 ")]),i("a-button",{attrs:{type:"primary"},on:{click:t.onSubmitSave}},[t._v(" 确认 ")])],1)],1)],1)},o=[],s=(i("ac1f"),i("841c"),i("567c")),a=[{title:"姓名",dataIndex:"join_name",key:"join_name"},{title:"联系电话",dataIndex:"join_phone",key:"join_phone"},{title:"身份证明",dataIndex:"join_id_card",key:"join_id_card"},{title:"报名时间",dataIndex:"join_add_time_txt",key:"join_add_time_txt"},{title:"状态",dataIndex:"join_status_txt",key:"join_status_txt",scopedSlots:{customRender:"join_status"}},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],r=[],m={name:"signVolunteerActivitiesList",filters:{statusFilter:function(t){var e=["error","success"];return e[t]}},data:function(){return{reply_content:"",pagination:{pageSize:10,total:10},search_data:[],search:{join_name:"",join_phone:"",page:1},form:this.$form.createForm(this),visible:!1,data:r,columns:a,page:1,detail:{join_name:"",join_phone:"",join_id_card:"",join_remark:"",join_status:1,activity_id:1,active_name:"",active_is_need:0},join_id:0,loadPost:!1}},mounted:function(){console.log("router",1),console.log("router",this.$route.query.activity_id);var t=this.$route.query.activity_id;t&&(this.search.activity_id=t),this.getActiveJoinList()},activated:function(){console.log("router",1),console.log("router",this.$route.query.activity_id);var t=this.$route.query.activity_id;t&&(this.search.activity_id=t),this.getActiveJoinList()},methods:{getActiveJoinList:function(){var t=this;if(this.loadPost)return!1;this.loadPost=!0,this.search["page"]=this.page,this.request(s["a"].getActiveJoinList,this.search).then((function(e){t.loadPost=!1,console.log("res",e),t.pagination.total=e.count?e.count:0,t.data=e.list}))},getMessageSuggestionsDetail:function(t){var e=this;this.request(s["a"].messageSuggestionsDetail,{suggestions_id:t}).then((function(t){console.log("res",t),e.detail=t.info}))},saveMessageSuggestionsReplyInfo:function(){var t=this;this.request(s["a"].saveMessageSuggestionsReplyInfo,{suggestions_id:this.detail.suggestions_id,reply_content:this.reply_content}).then((function(e){console.log("res",e),t.visible=!1,t.reply_content="",t.$notification.success({message:"回复成功"}),t.getMessageSuggestionsList()}))},onSubmitSave:function(){this.handleSubmit()},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(console.log("rerererere",i),i.join_id=t.join_id,t.request(s["a"].subActiveJoin,i).then((function(e){t.$message.success("编辑成功"),t.getActiveJoinList(),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",i)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",i))}))},lookEdit:function(t){console.log("e",t),this.visible=!0,this.detail=t,this.join_id=t.join_id,this.active_is_need=t.active_is_need},delInfo:function(t){this.$confirm({title:"你确定要删除该报名信息?",content:"该报名信息一旦删除不可恢复",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.page=t.current,this.getActiveJoinList())},onClose:function(){this.visible=!1},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.getActiveJoinList()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={join_name:"",join_phone:"",page:1},this.search_data=[],this.getActiveJoinList()}}},c=m,u=(i("0c50"),i("2877")),y=Object(u["a"])(c,n,o,!1,null,"5e816421",null);e["default"]=y.exports},"567c":function(t,e,i){"use strict";var n={config:"/community/street_community.config/index",addIndex:"/community/street_community.config/addIndex",streetUpload:"/community/street_community.config/upload",messageSuggestionsList:"/community/street_community.MessageSuggestionsList/getList",messageSuggestionsDetail:"/community/street_community.MessageSuggestionsList/detail",saveMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/saveMessageSuggestionsReplyInfo",volunteerActivityList:"/community/street_community.VolunteerActivity/getList",volunteerActivityInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinDetail",uploadImgApi:"/community/street_community.volunteerActivity/uploadImgApi",subActiveJoin:"/community/street_community.volunteerActivity/subActiveJoin",addVolunteerActivity:"/community/street_community.VolunteerActivity/addVolunteerActivity",getVolunteerDetail:"/community/street_community.VolunteerActivity/getVolunteerDetail",delVolunteerActivity:"/community/street_community.VolunteerActivity/delVolunteerActivity",getActiveJoinList:"/community/street_community.VolunteerActivity/getActiveJoinList",getStreetShowUrl:"/community/street_community.Visualization/getStreetShowUrl",getBannerList:"/community/street_community.Visualization/bannerList",getBannerInfo:"/community/street_community.Visualization/getBannerInfo",addBanner:"/community/street_community.Visualization/addBanner",getApplication:"/community/street_community.Visualization/getApplication",bannerDel:"/community/street_community.Visualization/del",upload:"/community/street_community.Visualization/upload",getStreetNavList:"/community/street_community.StreetNav/getStreetNavList",addStreetNav:"/community/street_community.StreetNav/addStreetNav",getStreetNavInfo:"/community/street_community.StreetNav/getStreetNavInfo",streetNavDel:"/community/street_community.StreetNav/del",getPartyBranch:"/community/street_community.PartyBranch/getList",getCommunity:"/community/street_community.PartyBranch/getCommunity",addPartyBranch:"/community/street_community.PartyBranch/addPartyBranch",getPartyInfo:"/community/street_community.PartyBranch/getPartyInfo",getPartyMember:"/community/street_community.PartyMember/getList",getPartyMemberInfo:"/community/street_community.PartyMember/getPartyMemberInfo",getPartyUpload:"/community/street_community.PartyMember/upload",subPartyMember:"/community/street_community.PartyMember/editPartyMember",getProvinceList:"/merchant/merchant.system.area/getProvinceList",getCity:"/merchant/merchant.system.area/getCityList",getLessonsClassList:"/community/street_community.MeetingLesson/getLessonClassList",getLessonsClassInfo:"/community/street_community.MeetingLesson/getClassInfo",subLessonsClass:"/community/street_community.MeetingLesson/subLessonClass",delLessonsClass:"/community/street_community.MeetingLesson/delLessonClass",getMeetingList:"/community/street_community.MeetingLesson/getMeetingList",getMeetingInfo:"/community/street_community.MeetingLesson/getMeetingInfo",subMeeting:"/community/street_community.MeetingLesson/subMeeting",uploadMeeting:"/community/street_community.MeetingLesson/upload",delMeeting:"/community/street_community.MeetingLesson/delMeeting",subWeChatNotice:"/community/street_community.MeetingLesson/weChatNotice",getReplyList:"/community/street_community.MeetingLesson/getReplyList",actionReply:"/community/street_community.MeetingLesson/actionReply",openReplySwitch:"/community/street_community.MeetingLesson/isOpenReplySwitch",getPartyActivityList:"/community/street_community.PartyActivities/getPartyActivityList",getPartyActivityInfo:"/community/street_community.PartyActivities/getPartyActivityInfo",activityUpload:"/community/street_community.PartyActivities/upload",subPartyActivity:"/community/street_community.PartyActivities/subPartyActivity",delPartyActivity:"/community/street_community.PartyActivities/delPartyActivity",getApplyList:"/community/street_community.PartyActivities/getApplyList",getApplyInfo:"/community/street_community.PartyActivities/getApplyInfo",subApply:"/community/street_community.PartyActivities/subApply",delApply:"/community/street_community.PartyActivities/delApply",getPartyBuildList:"/community/street_community.PartyBuild/getPartyBuildLists",getPartyBuildInfo:"/community/street_community.PartyBuild/PartyBuildDetail",getPartyBuildCategoryInfo:"/community/street_community.PartyBuild/PartyBuildCategoryDetail",getPartyBuildCategoryList:"/community/street_community.PartyBuild/getPartyBuildCategoryLists",getPartyBuildReply:"/community/street_community.PartyBuild/getPartyBuildReplyLists",delPartyBuildCategory:"/community/street_community.PartyBuild/delPartyBuildCategory",addPartyBuildCategory:"/community/street_community.PartyBuild/addPartyBuildCategory",savePartyBuildCategory:"/community/street_community.PartyBuild/savePartyBuildCategory",addPartyBuild:"/community/street_community.PartyBuild/addPartyBuild",savePartyBuild:"/community/street_community.PartyBuild/savePartyBuild",delPartyBuild:"/community/street_community.PartyBuild/delPartyBuild",changeReplyStatus:"/community/street_community.PartyBuild/changeReplyStatus",isSwitch:"/community/street_community.PartyBuild/isSwitch",partyWeChatNotice:"/community/street_community.PartyBuild/weChatNotice",userVulnerableGroupsLists:"/community/street_community.SpecialGroupManage/getUserVulnerableGroupsList",getSpecialGroupsRecordList:"/community/street_community.SpecialGroupManage/getSpecialGroupsRecordList",addSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/addSpecialGroupsRecord",delSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/delSpecialGroupsRecord",getRecordDetail:"/community/street_community.SpecialGroupManage/getRecordDetail",getGroupDetail:"/community/street_community.SpecialGroupManage/getGroupDetail",gridCustomList:"/community/street_community.GridCustom/getGridCustomList",addGridCustom:"/community/street_community.GridCustom/addGridCustom",saveGridCustom:"/community/street_community.GridCustom/saveGridCustom",getGridCustomDetail:"/community/street_community.GridCustom/getGridCustomDetail",getStreetAreaInfo:"/community/street_community.GridCustom/getStreetDetail",addGridRange:"/community/street_community.GridCustom/addGridRange",getGridRange:"/community/street_community.GridCustom/getGridRange",delGridRange:"/community/street_community.GridCustom/delGridRange",getAreaList:"/community/street_community.GridCustom/getAreaList",getVillageList:"/community/street_community.GridCustom/getVillageList",getSingleList:"/community/street_community.GridCustom/getSingleList",getGridMember:"/community/street_community.GridCustom/getGridMember",getZoomLastGrid:"/community/street_community.GridCustom/getZoomLastGrid",getNowType:"/community/street_community.GridCustom/getNowType",showInfo:"/community/street_community.GridCustom/showInfo",getFloorInfo:"/community/street_community.GridCustom/getFloorInfo",getOpenDoorList:"/community/street_community.GridCustom/getOpenDoorList",getSingleInfo:"/community/street_community.GridCustom/getSingleInfo",getLayerInfo:"/community/street_community.GridCustom/getLayerInfo",getRoomUserList:"/community/street_community.GridCustom/getRoomUserList",getInOutRecord:"/community/street_community.GridCustom/getInOutRecord",getUserInfo:"/community/street_community.GridCustom/getUserInfo",saveRange:"/community/street_community.GridCustom/saveRange",delGridCustom:"/community/street_community.GridCustom/delGridCustom",getWorkers:"/community/street_community.GridEvent/getWorkers",getMemberList:"/community/street_community.OrganizationStreet/getMemberList",delWorker:"/community/street_community.OrganizationStreet/delWorker",saveStreetWorker:"/community/street_community.OrganizationStreet/saveStreetWorker",getGridRangeInfo:"/community/street_community.GridCustom/getGridRangeInfo",getMatterCategoryList:"/community/street_community.Matter/getCategoryList",getMatterCategoryDetail:"/community/street_community.Matter/getCategoryDetail",handleCategory:"/community/street_community.Matter/handleCategory",delCategory:"/community/street_community.Matter/delCategory",getMatterList:"/community/street_community.Matter/getMatterList",getMatterInfo:"/community/street_community.Matter/getMatterInfo",subMatter:"/community/street_community.Matter/subMatter",delMatter:"/community/street_community.Matter/delMatter",getClassifyNav:"/community/street_community.FixedAssets/getClassifyNav",operateClassifyNav:"/community/street_community.FixedAssets/operateClassifyNav",getClassifyNavInfo:"/community/street_community.FixedAssets/getClassifyNavInfo",delClassifyNav:"/community/street_community.FixedAssets/delClassifyNav",getClassifyList:"/community/street_community.FixedAssets/getClassifyList",subAssets:"/community/street_community.FixedAssets/subAssets",delAssets:"/community/street_community.FixedAssets/delAssets",getAssetsInfo:"/community/street_community.FixedAssets/getAssetsInfo",getAssetsList:"/community/street_community.FixedAssets/getAssetsList",subLedRent:"/community/street_community.FixedAssets/subLedRent",subTakeBack:"/community/street_community.FixedAssets/subTakeBack",getRecordList:"/community/street_community.FixedAssets/getRecordList",getMaintainList:"/community/street_community.FixedAssets/getMaintainList",getMaintainInfo:"/community/street_community.FixedAssets/getMaintainInfo",subMaintain:"/community/street_community.FixedAssets/subMaintain",uploadStreet:"/community/street_community.FixedAssets/uploadStreet",weditorUpload:"/community/street_community.config/weditorUpload",getTissueNav:"/community/street_community.OrganizationStreet/getTissueNav",getBranchInfo:"/community/street_community.OrganizationStreet/getBranchInfo",subBranch:"/community/street_community.OrganizationStreet/addOrganization",delBranch:"/community/street_community.OrganizationStreet/delBranch",getMemberInfo:"/community/street_community.OrganizationStreet/getMemberInfo",subMemberBranch:"/community/street_community.OrganizationStreet/subMemberBranch",getTissueNavList:"/community/street_community.OrganizationStreet/getTissueNavList",getEventCategoryList:"/community/street_community.GridEvent/getEventCategoryList",addEventCategory:"/community/street_community.GridEvent/addEventCategory",editEventCategory:"/community/street_community.GridEvent/editEventCategory",todayEventCount:"/community/street_community.GridEvent/todayEventCount",eventData:"/community/street_community.GridEvent/eventData",getCategoryList:"/community/street_community.GridEvent/getCategoryList",getWorkerOrderLists:"/community/street_community.GridEvent/getWorkerOrderLists",getWorkerEventDetail:"/community/street_community.GridEvent/getWorkerEventDetail",allocationWorker:"/community/street_community.GridEvent/allocationWorker",getWorkersPage:"/community/street_community.GridEvent/getWorkersPage",getStreetCommunityUserList:"/community/street_community.User/getUerList",getStreetCommunityAll:"/community/street_community.User/getCommunityAll",getStreetVillageAll:"/community/street_community.User/getVillageAll",getStreetSingleAll:"/community/street_community.User/getSingleAll"};e["a"]=n},cf90:function(t,e,i){}}]);