(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ae4dd5c","chunk-2d0b3786"],{"00ba5":function(e,t,i){},"19bb":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",["text"==e.type?i("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[e.number?i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,staticStyle:{width:"100%"},attrs:{precision:e.digits?0:e.precision,min:e.min,max:e.max,name:e.name,disabled:e.disabled,placeholder:e.placeholder}}):e.url?i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{type:"url",message:"请输入正确的url地址"},{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value,\n              rules: [\n                {\n                  type: 'url',\n                  message: '请输入正确的url地址',\n                },\n                { required: required, message: requiredMessage },\n              ],\n            },\n          ]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}}):i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{disabled:e.disabled,"max-length":e.maxlength,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"textarea"===e.type?i("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{rows:e.rows,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"switch"===e.type?i("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:22}},[i("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:"1"==e.value,valuePropName:"checked"}],expression:"[name, { initialValue: value == '1' ? true : false, valuePropName: 'checked' }]"}],key:e.name,attrs:{"checked-children":e.switchCheckedText,"un-checked-children":e.switchUncheckedText}})],1)],1)],1):e._e(),"radio"===e.type?i("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,options:e.selectArray}})],1)],1)],1):e._e(),"select"===e.type?i("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(t){return i("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1):e._e(),"selectAll"===e.type?i("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{mode:"multiple",name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(t){return i("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1):e._e(),"time"===e.type?i("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.timeFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, timeFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name,format:e.timeFormat}})],1)],1)],1):e._e(),"date"===e.type?i("a-form-item",{attrs:{format:e.dateFormat,label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.dateFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, dateFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name}})],1)],1)],1):e._e(),"file"===e.type?i("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/common/common.UploadFile/uploadFile?upload_dir=file&fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange,preview:e.handlePreview}},[i("a-button",[i("a-icon",{attrs:{type:"upload"}}),e._v("上传文件 ")],1)],1)],1)],1)],1):e._e(),"image"===e.type?i("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[i("a-row",{attrs:{gutter:8}},[i("a-col",{attrs:{span:12}},[i("a-upload",{attrs:{name:"img",action:"/v20/public/index.php/common/platform.system.config/upload?fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[i("a-button",[i("a-icon",{attrs:{type:"upload"}}),e._v("上传图片 ")],1)],1)],1)],1)],1):e._e()],1)},r=[],n=i("2909"),o=(i("a9e3"),i("b0c0"),i("fb6a"),i("d81d"),i("ac1f"),i("1276"),i("caad"),i("2532"),i("c1df")),s=i.n(o),m=i("7a6b");function u(e,t){var i=new FileReader;i.addEventListener("load",(function(){return t(i.result)})),i.readAsDataURL(e)}var l={name:"FormItem",components:{CustomTooltip:m["a"]},props:{labelCol:{type:Object,default:function(){return{lg:{span:6},sm:{span:7}}}},wrapperCol:{type:Object,default:function(){return{lg:{span:14},sm:{span:17}}}},title:{type:String,default:"标题"},name:{type:String,default:"name"},required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"此项必填"},tips:{type:String,default:""},type:{type:String,default:"text"},number:{type:Boolean,default:!1},digits:{type:Boolean,default:!1},precision:{type:Number,default:2},url:{type:Boolean,default:!1},max:{type:[Number,String]},min:{type:[Number,String]},maxlength:{type:[Number,String],default:21e3},selectArray:{type:Array,default:function(){return[]}},rows:{type:Number,default:4},placeholder:{type:String,default:""},value:{type:[Object,String,Array,Boolean,Number],default:null},tipsSize:{type:String,default:"18px"},tipsColor:{type:String,default:"#c5c5c5"},disabled:{type:Boolean,default:!1},fileUploadUrl:{type:String,default:""},imgUploadUrl:{type:String,default:""},switchCheckedText:{type:String,default:"开启"},switchUncheckedText:{type:String,default:"关闭"},filetype:{type:String,default:""},fsize:{type:[Number,String],default:0}},data:function(){return{timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD",headers:{authorization:"authorization-text"},loading:!1,imageUrl:"",fileList:[],uploadFileRet:!0}},mounted:function(){this.uploadFileRet=!0,"image"!=this.type&&"file"!=this.type||this.value&&(this.fileList=[{uid:"1",name:this.value,status:"done",url:this.value}])},watch:{fileList:function(e){this.$emit("uploadChange",{name:this.name,type:this.type,value:e})}},methods:{moment:s.a,handleChange:function(e){var t=this,i=Object(n["a"])(e.fileList);i=i.slice(-1);i=i.map((function(e){return e.response&&(t.uploadFileRet=!0,1e3==e.response.status?(e.url=e.response.data,!0):(e.name=t.value,e.url=t.value,t.$message.error(e.response.msg))),e})),this.uploadFileRet?this.fileList=i:this.fileList=[]},handlePreview:function(e){return!1},beforeUploadFile:function(e){var t=e.type.toLowerCase(),i=t.split("/");this.uploadFileRet=!0;var a=["mpeg","x-mpeg","mp3","x-mpeg-3","mpg","x-mp3","mpeg3","x-mpeg3","x-mpg","x-mpegaudio"];if(this.filetype&&this.filetype.length>0){if("mp3"==this.filetype&&!a.includes(i["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1;if("mp3"!=this.filetype&&!this.filetype.includes(i["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1}var r=e.size/1024/1024,n=0;return this.fsize&&(n=1*this.fsize),!(n>0&&r>n)||(this.uploadFileRet=!1,this.$message.error("上传图片最大支持"+n+"MB!"),!1)},normFile:function(e){return Array.isArray(e)?e:"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?e.file.response.data:void this.$message.error("上传失败！")},imgFile:function(e){var t=this;return u(e.file.originFileObj,(function(e){t.imageUrl=e})),"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?(this.fileList=[e.file.response.data],this.fileList):void this.$message.error("上传失败！")}}},c=l,y=(i("d991"),i("0c7c")),d=Object(y["a"])(c,a,r,!1,null,"3b079c27",null);t["a"]=d.exports},2909:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var a=i("6b75");function r(e){if(Array.isArray(e))return Object(a["a"])(e)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=i("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e){return r(e)||n(e)||Object(o["a"])(e)||s()}},4178:function(e,t,i){},"567c":function(e,t,i){"use strict";var a={config:"/community/street_community.config/index",addIndex:"/community/street_community.config/addIndex",streetUpload:"/community/street_community.config/upload",messageSuggestionsList:"/community/street_community.MessageSuggestionsList/getList",messageSuggestionsDetail:"/community/street_community.MessageSuggestionsList/detail",saveMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/saveMessageSuggestionsReplyInfo",deleteMessageSuggestionsReplyInfo:"/community/street_community.MessageSuggestionsList/deleteMessageSuggestionsReplyInfo",volunteerActivityList:"/community/street_community.VolunteerActivity/getList",volunteerActivityInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinDetail",uploadImgApi:"/community/street_community.volunteerActivity/uploadImgApi",subActiveJoin:"/community/street_community.volunteerActivity/subActiveJoin",addVolunteerActivity:"/community/street_community.VolunteerActivity/addVolunteerActivity",getVolunteerDetail:"/community/street_community.VolunteerActivity/getVolunteerDetail",delVolunteerActivity:"/community/street_community.VolunteerActivity/delVolunteerActivity",getActiveJoinList:"/community/street_community.VolunteerActivity/getActiveJoinList",delActivityJoin:"/community/street_community.VolunteerActivity/delActivityJoin",getVolunteerActiveJoinInfo:"/community/street_community.VolunteerActivity/getVolunteerActiveJoinInfo",getStreetShowUrl:"/community/street_community.Visualization/getStreetShowUrl",getBannerList:"/community/street_community.Visualization/bannerList",getBannerInfo:"/community/street_community.Visualization/getBannerInfo",addBanner:"/community/street_community.Visualization/addBanner",getApplication:"/community/street_community.Visualization/getApplication",bannerDel:"/community/street_community.Visualization/del",upload:"/community/street_community.Visualization/upload",getStreetNavList:"/community/street_community.StreetNav/getStreetNavList",addStreetNav:"/community/street_community.StreetNav/addStreetNav",getStreetNavInfo:"/community/street_community.StreetNav/getStreetNavInfo",streetNavDel:"/community/street_community.StreetNav/del",getPartyBranch:"/community/street_community.PartyBranch/getList",getCommunity:"/community/street_community.PartyBranch/getCommunity",addPartyBranch:"/community/street_community.PartyBranch/addPartyBranch",getPartyInfo:"/community/street_community.PartyBranch/getPartyInfo",getPartyBranchType:"/community/street_community.PartyBranch/getPartyType",delPartyBranch:"/community/street_community.PartyBranch/delPartyBranch",getPartyLocation:"/community/street_community.PartyBranch/getPartyLocation",getPartyBranchAll:"/community/street_community.PartyMember/getPartyBranchAll",getPartyMember:"/community/street_community.PartyMember/getList",getPartyMemberInfo:"/community/street_community.PartyMember/getPartyMemberInfo",getPartyUpload:"/community/street_community.PartyMember/upload",subPartyMember:"/community/street_community.PartyMember/editPartyMember",getProvinceList:"/merchant/merchant.system.area/getProvinceList",getCity:"/merchant/merchant.system.area/getCityList",getPartyMemberRoomInfo:"/community/street_community.PartyMember/getPartyMemberRoomInfo",getLessonsClassList:"/community/street_community.MeetingLesson/getLessonClassList",getLessonsClassInfo:"/community/street_community.MeetingLesson/getClassInfo",subLessonsClass:"/community/street_community.MeetingLesson/subLessonClass",delLessonsClass:"/community/street_community.MeetingLesson/delLessonClass",getMeetingList:"/community/street_community.MeetingLesson/getMeetingList",getMeetingInfo:"/community/street_community.MeetingLesson/getMeetingInfo",subMeeting:"/community/street_community.MeetingLesson/subMeeting",uploadMeeting:"/community/street_community.MeetingLesson/upload",delMeeting:"/community/street_community.MeetingLesson/delMeeting",subWeChatNotice:"/community/street_community.MeetingLesson/weChatNotice",getReplyList:"/community/street_community.MeetingLesson/getReplyList",actionReply:"/community/street_community.MeetingLesson/actionReply",openReplySwitch:"/community/street_community.MeetingLesson/isOpenReplySwitch",getMeetingBranchType:"/community/street_community.MeetingLesson/getPartyType",getPartyActivityList:"/community/street_community.PartyActivities/getPartyActivityList",getPartyActivityInfo:"/community/street_community.PartyActivities/getPartyActivityInfo",activityUpload:"/community/street_community.PartyActivities/upload",subPartyActivity:"/community/street_community.PartyActivities/subPartyActivity",delPartyActivity:"/community/street_community.PartyActivities/delPartyActivity",getApplyList:"/community/street_community.PartyActivities/getApplyList",getApplyInfo:"/community/street_community.PartyActivities/getApplyInfo",subApply:"/community/street_community.PartyActivities/subApply",delApply:"/community/street_community.PartyActivities/delApply",getPartyBuildList:"/community/street_community.PartyBuild/getPartyBuildLists",getPartyBuildInfo:"/community/street_community.PartyBuild/PartyBuildDetail",getPartyBuildCategoryInfo:"/community/street_community.PartyBuild/PartyBuildCategoryDetail",getPartyBuildCategoryList:"/community/street_community.PartyBuild/getPartyBuildCategoryLists",getPartyBuildReply:"/community/street_community.PartyBuild/getPartyBuildReplyLists",delPartyBuildCategory:"/community/street_community.PartyBuild/delPartyBuildCategory",addPartyBuildCategory:"/community/street_community.PartyBuild/addPartyBuildCategory",savePartyBuildCategory:"/community/street_community.PartyBuild/savePartyBuildCategory",addPartyBuild:"/community/street_community.PartyBuild/addPartyBuild",savePartyBuild:"/community/street_community.PartyBuild/savePartyBuild",delPartyBuild:"/community/street_community.PartyBuild/delPartyBuild",changeReplyStatus:"/community/street_community.PartyBuild/changeReplyStatus",isSwitch:"/community/street_community.PartyBuild/isSwitch",partyWeChatNotice:"/community/street_community.PartyBuild/weChatNotice",userVulnerableGroupsLists:"/community/street_community.SpecialGroupManage/getUserVulnerableGroupsList",getSpecialGroupsRecordList:"/community/street_community.SpecialGroupManage/getSpecialGroupsRecordList",addSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/addSpecialGroupsRecord",delSpecialGroupsRecord:"/community/street_community.SpecialGroupManage/delSpecialGroupsRecord",getRecordDetail:"/community/street_community.SpecialGroupManage/getRecordDetail",getGroupDetail:"/community/street_community.SpecialGroupManage/getGroupDetail",getUserLabel:"/community/street_community.SpecialGroupManage/getUserLabel",gridCustomList:"/community/street_community.GridCustom/getGridCustomList",addGridCustom:"/community/street_community.GridCustom/addGridCustom",saveGridCustom:"/community/street_community.GridCustom/saveGridCustom",getGridCustomDetail:"/community/street_community.GridCustom/getGridCustomDetail",getStreetAreaInfo:"/community/street_community.GridCustom/getStreetDetail",addGridRange:"/community/street_community.GridCustom/addGridRange",getGridRange:"/community/street_community.GridCustom/getGridRange",delGridRange:"/community/street_community.GridCustom/delGridRange",getAreaList:"/community/street_community.GridCustom/getAreaList",getVillageList:"/community/street_community.GridCustom/getVillageList",getSingleList:"/community/street_community.GridCustom/getSingleList",getGridMember:"/community/street_community.GridCustom/getGridMember",getBindType:"/community/street_community.GridCustom/getBindType",getZoomLastGrid:"/community/street_community.GridCustom/getZoomLastGrid",getNowType:"/community/street_community.GridCustom/getNowType",showInfo:"/community/street_community.GridCustom/showInfo",getFloorInfo:"/community/street_community.GridCustom/getFloorInfo",getOpenDoorList:"/community/street_community.GridCustom/getOpenDoorList",getSingleInfo:"/community/street_community.GridCustom/getSingleInfo",getLayerInfo:"/community/street_community.GridCustom/getLayerInfo",getRoomUserList:"/community/street_community.GridCustom/getRoomUserList",getInOutRecord:"/community/street_community.GridCustom/getInOutRecord",getUserInfo:"/community/street_community.GridCustom/getUserInfo",saveRange:"/community/street_community.GridCustom/saveRange",delGridCustom:"/community/street_community.GridCustom/delGridCustom",getWorkers:"/community/street_community.GridEvent/getWorkers",getMemberList:"/community/street_community.OrganizationStreet/getMemberList",delWorker:"/community/street_community.OrganizationStreet/delWorker",saveStreetWorker:"/community/street_community.OrganizationStreet/saveStreetWorker",getGridRangeInfo:"/community/street_community.GridCustom/getGridRangeInfo",getMatterCategoryList:"/community/street_community.Matter/getCategoryList",getMatterCategoryDetail:"/community/street_community.Matter/getCategoryDetail",handleCategory:"/community/street_community.Matter/handleCategory",delCategory:"/community/street_community.Matter/delCategory",getMatterList:"/community/street_community.Matter/getMatterList",getMatterInfo:"/community/street_community.Matter/getMatterInfo",subMatter:"/community/street_community.Matter/subMatter",delMatter:"/community/street_community.Matter/delMatter",getClassifyNav:"/community/street_community.FixedAssets/getClassifyNav",operateClassifyNav:"/community/street_community.FixedAssets/operateClassifyNav",getClassifyNavInfo:"/community/street_community.FixedAssets/getClassifyNavInfo",delClassifyNav:"/community/street_community.FixedAssets/delClassifyNav",getClassifyList:"/community/street_community.FixedAssets/getClassifyList",subAssets:"/community/street_community.FixedAssets/subAssets",delAssets:"/community/street_community.FixedAssets/delAssets",getAssetsInfo:"/community/street_community.FixedAssets/getAssetsInfo",getAssetsList:"/community/street_community.FixedAssets/getAssetsList",subLedRent:"/community/street_community.FixedAssets/subLedRent",subTakeBack:"/community/street_community.FixedAssets/subTakeBack",getRecordList:"/community/street_community.FixedAssets/getRecordList",getMaintainList:"/community/street_community.FixedAssets/getMaintainList",getMaintainInfo:"/community/street_community.FixedAssets/getMaintainInfo",subMaintain:"/community/street_community.FixedAssets/subMaintain",uploadStreet:"/community/street_community.FixedAssets/uploadStreet",weditorUpload:"/community/street_community.config/weditorUpload",getTissueNav:"/community/street_community.OrganizationStreet/getTissueNav",getBranchInfo:"/community/street_community.OrganizationStreet/getBranchInfo",subBranch:"/community/street_community.OrganizationStreet/addOrganization",delBranch:"/community/street_community.OrganizationStreet/delBranch",getMemberInfo:"/community/street_community.OrganizationStreet/getMemberInfo",subMemberBranch:"/community/street_community.OrganizationStreet/subMemberBranch",getTissueNavList:"/community/street_community.OrganizationStreet/getTissueNavList",getEventCategoryList:"/community/street_community.GridEvent/getEventCategoryList",addEventCategory:"/community/street_community.GridEvent/addEventCategory",editEventCategory:"/community/street_community.GridEvent/editEventCategory",todayEventCount:"/community/street_community.GridEvent/todayEventCount",eventData:"/community/street_community.GridEvent/eventData",getCategoryList:"/community/street_community.GridEvent/getCategoryList",getWorkerOrderLists:"/community/street_community.GridEvent/getWorkerOrderLists",getWorkerEventDetail:"/community/street_community.GridEvent/getWorkerEventDetail",allocationWorker:"/community/street_community.GridEvent/allocationWorker",getWorkersPage:"/community/street_community.GridEvent/getWorkersPage",delWorkerOrder:"/community/street_community.GridEvent/delWorkerOrder",getGridEventOrg:"/community/street_community.GridEvent/getGridEventOrg",getStreetCommunityUserList:"/community/street_community.User/getUerList",getStreetCommunityAll:"/community/street_community.User/getCommunityAll",getStreetVillageAll:"/community/street_community.User/getVillageAll",getStreetSingleAll:"/community/street_community.User/getSingleAll",addCoordinatefloor:"/community/village_api.Aockpit/addCoordinatefloor",addAreaSingle:"/community/village_api.Aockpit/addAreaSingle",getAreaCoordinate:"/community/village_api.Aockpit/getAreaCoordinate",getSingleAreaCoordinate:"/community/village_api.Aockpit/getSingleAreaCoordinate",delArea:"/community/village_api.Aockpit/delArea",getTaskReleaseListColumns:"/community/street_community.TaskRelease/getTaskReleaseListColumns",getTaskReleaseList:"/community/street_community.TaskRelease/getTaskReleaseList",getTaskReleaseOne:"/community/street_community.TaskRelease/getTaskReleaseOne",taskReleaseAdd:"/community/street_community.TaskRelease/taskReleaseAdd",taskReleaseSub:"/community/street_community.TaskRelease/taskReleaseSub",taskReleaseDel:"/community/street_community.TaskRelease/taskReleaseDel",getTaskReleaseRecord:"/community/street_community.TaskRelease/getTaskReleaseRecord",getTaskReleaseType:"/community/street_community.TaskRelease/getTaskReleaseType",getCommunityCareType:"/community/street_community.TaskRelease/getCommunityCareType",getCommunityCareList:"/community/street_community.TaskRelease/getCommunityCareList",communityCareAdd:"/community/street_community.TaskRelease/communityCareAdd",communityCareOne:"/community/street_community.TaskRelease/communityCareOne",communityCareSub:"/community/street_community.TaskRelease/communityCareSub",communityCareDel:"/community/street_community.TaskRelease/communityCareDel",getEpidemicPreventSeriesList:"/community/street_community.TaskRelease/getEpidemicPreventSeriesList",epidemicPreventSeriesAdd:"/community/street_community.TaskRelease/epidemicPreventSeriesAdd",epidemicPreventSeriesOne:"/community/street_community.TaskRelease/epidemicPreventSeriesOne",epidemicPreventSeriesSub:"/community/street_community.TaskRelease/epidemicPreventSeriesSub",epidemicPreventSeriesDel:"/community/street_community.TaskRelease/epidemicPreventSeriesDel",getEpidemicPreventTypeList:"/community/street_community.TaskRelease/getEpidemicPreventTypeList",epidemicPreventTypeAdd:"/community/street_community.TaskRelease/epidemicPreventTypeAdd",epidemicPreventTypeOne:"/community/street_community.TaskRelease/epidemicPreventTypeOne",epidemicPreventTypeSub:"/community/street_community.TaskRelease/epidemicPreventTypeSub",epidemicPreventTypeDel:"/community/street_community.TaskRelease/epidemicPreventTypeDel",getEpidemicPreventParamAll:"/community/street_community.TaskRelease/getEpidemicPreventParamAll",getEpidemicPreventRecordList:"/community/street_community.TaskRelease/getEpidemicPreventRecordList",epidemicPreventRecordAdd:"/community/street_community.TaskRelease/epidemicPreventRecordAdd",epidemicPreventRecordOne:"/community/street_community.TaskRelease/epidemicPreventRecordOne",epidemicPreventRecordSub:"/community/street_community.TaskRelease/epidemicPreventRecordSub",epidemicPreventRecordDel:"/community/street_community.TaskRelease/epidemicPreventRecordDel",getStreetCommunityTissueNav:"/community/street_community.TaskRelease/getTissueNav",getTaskReleaseTissueNav:"/community/street_community.TaskRelease/getTaskReleaseTissueNav",getIndex:"/community/street_community.CommunityCommittee/getIndex",getAreaStreetWorkersOrder:"/community/street_community.CommunityCommittee/getAreaStreetWorkersOrder",getPartyBuilding:"/community/street_community.CommunityCommittee/getPartyBuilding",getStreetPartyActivity:"/community/street_community.CommunityCommittee/getPartyActivity",getEventAnaly:"/community/street_community.CommunityCommittee/getEventAnaly",getPopulationAnaly:"/community/street_community.CommunityCommittee/getPopulationAnaly",getPartyMemberStatistics:"/community/street_community.CommunityCommittee/getPartyMemberStatistics",getEpidemicPrevent:"/community/street_community.CommunityCommittee/getEpidemicPrevent",getPartyOrgStatistics:"/community/street_community.CommunityCommittee/getPartyOrgStatistics",getPartyMeetingStatistics:"/community/street_community.CommunityCommittee/getPartyMeetingStatistics",getPartySeekStatistics:"/community/street_community.CommunityCommittee/getPartySeekStatistics",getPartyNewsStatistics:"/community/street_community.CommunityCommittee/getPartyNewsStatistics",getPopulationPersonStatistics:"/community/street_community.CommunityCommittee/getPopulationPersonStatistics",getPopulationSexStatistics:"/community/street_community.CommunityCommittee/getPopulationSexStatistics",getPopulationAgeStatistics:"/community/street_community.CommunityCommittee/getPopulationAgeStatistics",getPopulationUserLabelStatistics:"/community/street_community.CommunityCommittee/getPopulationUserLabelStatistics",getPopulationEducateStatistics:"/community/street_community.CommunityCommittee/getPopulationEducateStatistics",getPopulationMarriageStatistics:"/community/street_community.CommunityCommittee/getPopulationMarriageStatistics",getEventReportStatistics:"/community/street_community.CommunityCommittee/getEventReportStatistics",getEventCareStatistics:"/community/street_community.CommunityCommittee/getEventCareStatistics",getEventVirtualStatistics:"/community/street_community.CommunityCommittee/getEventVirtualStatistics",getEventVideo1Statistics:"/community/street_community.CommunityCommittee/getEventVideo1Statistics",getEventVideo2Statistics:"/community/street_community.CommunityCommittee/getEventVideo2Statistics",getStreetVillages:"/community/street_community.OrganizationStreet/getStreetXillages",getProvinceCityAreas:"/community/street_community.OrganizationStreet/getProvinceCityAreas",getStreetRolePermission:"/community/street_community.OrganizationStreet/getStreetRolePermission",saveStreetRolePermission:"/community/street_community.OrganizationStreet/saveStreetRolePermission",getPartyBranchPosition:"/community/street_community.CommunityCommittee/getPartyBranchPosition",getStreetLibraryClass:"/community/street_community.Visualization/getStreetLibraryClass",getStreetWorkRecognition:"/community/street_community.OrganizationStreet/getRecognition",checkStreetWorkRecognition:"/community/street_community.OrganizationStreet/checkWorker",cancelStreetWorkRecognition:"/community/street_community.OrganizationStreet/cancelWorkerBind"};t["a"]=a},"588f":function(e,t,i){"use strict";i("00ba5")},d991:function(e,t,i){"use strict";i("4178")},ffe3:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"account-community-config-info-view"},[i("a-row",{attrs:{gutter:16}},[i("a-col",{attrs:{md:24,lg:16}},[i("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[i("a-tabs",{attrs:{"default-active-key":"1"}},[i("a-tab-pane",{key:"1"},[i("span",{attrs:{slot:"tab"},slot:"tab"},[i("a-icon",{attrs:{type:"基本设置"}}),e._v("基本设置")],1),i("div",{staticClass:"message-suggestions-list-box"},[i("a-form-item",{attrs:{label:"名称"}},[i("a-input",{staticStyle:{color:"#333333"},attrs:{disabled:!0},model:{value:e.area_info.name,callback:function(t){e.$set(e.area_info,"name",t)},expression:"area_info.name"}})],1),i("a-form-item",{attrs:{label:"所属区域"}},[i("a-cascader",{staticStyle:{color:"#333333"},attrs:{disabled:!0,options:e.area_options,value:e.choose_area},on:{change:e.onChange}})],1),i("a-form-item",{attrs:{label:"地址"}},[i("a-input",{staticStyle:{color:"#333333"},model:{value:e.area_info.address,callback:function(t){e.$set(e.area_info,"address",t)},expression:"area_info.address"}})],1),i("a-form-item",{attrs:{label:"面积 (单位：平方米)"}},[i("a-input",{staticStyle:{color:"#333333"},model:{value:e.area_info.area_covered,callback:function(t){e.$set(e.area_info,"area_covered",t)},expression:"area_info.area_covered"}})],1),i("a-form-item",{attrs:{label:"人口"}},[i("a-row",[i("a-col",{attrs:{span:23}},[i("a-input",{staticStyle:{color:"#000000"},attrs:{disabled:!0},model:{value:e.area_info.population,callback:function(t){e.$set(e.area_info,"population",t)},expression:"area_info.population"}})],1),i("a-col",{attrs:{span:1}},[i("custom-tooltip",{key:"2",attrs:{size:"16px",text:"该数量根据其下归属的小区人口总数变化而变化"}})],1)],1)],1),i("a-form-item",{attrs:{label:"联系电话"}},[i("a-input",{staticStyle:{color:"#333333"},model:{value:e.area_info.phone,callback:function(t){e.$set(e.area_info,"phone",t)},expression:"area_info.phone"}})],1),i("a-form-item",{attrs:{label:"老年人年龄标准"}},[i("a-col",{attrs:{span:23}},[i("a-input",{staticStyle:{color:"#333333"},model:{value:e.area_info.age,callback:function(t){e.$set(e.area_info,"age",t)},expression:"area_info.age"}})],1),i("a-col",{attrs:{span:1}},[i("custom-tooltip",{key:"2",attrs:{size:"16px",text:"该标准用于判断符合智慧养老的条件限制，以身份证号获取的年龄为准"}})],1)],1),i("a-form-item",{attrs:{label:"logo"}},[i("div",[i("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:e.upload_url,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[e.imageUrl?i("img",{staticClass:"imgname imageUrl",attrs:{src:e.imageUrl,alt:"img"}}):i("div",[i("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(" 上传 ")])],1)])],1)])],1)]),i("a-tab-pane",{key:"2"},[i("span",{attrs:{slot:"tab"},slot:"tab"},[i("a-icon",{attrs:{type:"导航配置"}}),e._v("导航配置")],1),i("div",{staticClass:"message-suggestions-list-box"},[i("a-form-item",{attrs:{label:"标题配置"}},[i("a-input",{attrs:{disabled:e.area_info.visualize_nav_status,maxLength:15,placeholder:"请输入15个字以内"},model:{value:e.area_info.visualize_nav.visualize_title,callback:function(t){e.$set(e.area_info.visualize_nav,"visualize_title",t)},expression:"area_info.visualize_nav.visualize_title"}})],1),i("a-form-item",{attrs:{label:"导航一"}},[i("a-input",{attrs:{disabled:e.area_info.visualize_nav_status,maxLength:4,placeholder:"请输入4个字以内"},model:{value:e.area_info.visualize_nav.visualize_nav1,callback:function(t){e.$set(e.area_info.visualize_nav,"visualize_nav1",t)},expression:"area_info.visualize_nav.visualize_nav1"}})],1),i("a-form-item",{attrs:{label:"导航二"}},[i("a-input",{attrs:{disabled:e.area_info.visualize_nav_status,maxLength:4,placeholder:"请输入4个字以内"},model:{value:e.area_info.visualize_nav.visualize_nav2,callback:function(t){e.$set(e.area_info.visualize_nav,"visualize_nav2",t)},expression:"area_info.visualize_nav.visualize_nav2"}})],1),i("a-form-item",{attrs:{label:"导航三"}},[i("a-input",{attrs:{disabled:e.area_info.visualize_nav_status,maxLength:4,placeholder:"请输入4个字以内"},model:{value:e.area_info.visualize_nav.visualize_nav3,callback:function(t){e.$set(e.area_info.visualize_nav,"visualize_nav3",t)},expression:"area_info.visualize_nav.visualize_nav3"}})],1),i("a-form-item",{attrs:{label:"导航四"}},[i("a-input",{attrs:{disabled:e.area_info.visualize_nav_status,maxLength:10,placeholder:"请输入10个字以内"},model:{value:e.area_info.visualize_nav.visualize_nav4,callback:function(t){e.$set(e.area_info.visualize_nav,"visualize_nav4",t)},expression:"area_info.visualize_nav.visualize_nav4"}})],1)],1)])],1),i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[i("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.loginBtn,disabled:e.loginBtn}},[e._v(" 更新信息 ")])],1)],1)],1)],1)],1)},r=[],n=i("5530"),o=i("7a6b"),s=i("567c"),m=i("19bb");function u(e,t){var i=new FileReader;i.addEventListener("load",(function(){return t(i.result)})),i.readAsDataURL(e)}var l={name:"streetCommunityConfigIndex",components:{CustomTooltip:o["a"],FormItem:m["a"]},data:function(){return{area_options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]}],choose_area:[],form:this.$form.createForm(this),area_info:{area_name:"街道哟",address:"步行街",area_covered:"1000",population:10086,phone:"0564-5741092",visualize_nav:[],visualize_nav_status:!1},loginBtn:!1,upload_url:"/v20/public/index.php/"+s["a"].streetUpload,imageUrl:"",logo_img:"",img:"",loading:!1}},mounted:function(){this.getStreetCommunityConfig()},methods:{getStreetCommunityConfig:function(){var e=this;this.request(s["a"].config).then((function(t){console.log("res",t),e.area_info=t.info,e.area_options=t.area_options,e.choose_area=t.choose_area,e.imageUrl=t.info.logo,e.logo_img=t.info.logo_img}))},handleSubmit:function(e){var t=this;e.preventDefault();var i=this.form.validateFields;this.loginBtn=!0;var a=this.area_info,r=["address"];i(r,{force:!0},(function(e,i){if(e)t.loginBtn=!1;else{console.log("login form",i);var r=Object(n["a"])({},i);console.log(i),r.address=a.address,r.area_covered=a.area_covered,r.phone=a.phone,r.age=a.age,r.visualize_nav=a.visualize_nav,t.img?r.logo=t.img:t.logo_img?r.logo=t.logo_img:t.imageUrl&&(r.logo=t.imageUrl),t.request(s["a"].addIndex,r).then((function(e){console.log("res",e),e&&t.$message.success("更新成功！"),t.loginBtn=!1})).catch((function(e){t.loginBtn=!1}))}}))},onChange:function(e){console.log(e)},getPopupContainer:function(e){return e.parentElement},handleAreaClick:function(e,t,i){e.stopPropagation(),console.log("clicked",t,i)},handleChange:function(e){var t=this;"uploading"!==e.file.status?"done"===e.file.status&&(u(e.file.originFileObj,(function(e){t.imageUrl=e,t.loading=!1})),1e3===e.file.response.status&&(this.img=e.file.response.data)):this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var i=e.size/1024/1024<2;return i||this.$message.error("Image must smaller than 2MB!"),t&&i}}},c=l,y=(i("588f"),i("0c7c")),d=Object(y["a"])(c,a,r,!1,null,"4836e2d9",null);t["default"]=d.exports}}]);