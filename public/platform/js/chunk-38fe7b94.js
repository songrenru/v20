(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38fe7b94","chunk-2d0b6a79","chunk-2d0b6a79"],{"1da1":function(e,o,t){"use strict";t.d(o,"a",(function(){return l}));t("d3b7");function i(e,o,t,i,l,s,a){try{var r=e[s](a),f=r.value}catch(m){return void t(m)}r.done?o(f):Promise.resolve(f).then(i,l)}function l(e){return function(){var o=this,t=arguments;return new Promise((function(l,s){var a=e.apply(o,t);function r(e){i(a,l,s,r,f,"next",e)}function f(e){i(a,l,s,r,f,"throw",e)}r(void 0)}))}}},d14c:function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:" pt-20 pl-20 pr-20 pb-20  br-10"},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-tabs",{attrs:{"default-active-key":"loans"}},[t("a-tab-pane",{key:"loans",attrs:{tab:e.tabName}})],1),t("a-form-model",{ref:"ruleForm",attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-card",{attrs:{bordered:!1}},[t("a-form-model-item",{attrs:{label:"户型名称:",colon:!1,prop:"title",rules:[{required:!0,message:"楼盘名称不能为空",trigger:["blur"]}]}},[t("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:100,placeholder:"请输入名称"},model:{value:e.formData.title,callback:function(o){e.$set(e.formData,"title",o)},expression:"formData.title"}})],1),t("a-form-model-item",{attrs:{label:"户型面积:",colon:!1,prop:"acreage",rules:[{required:!0,message:"楼盘面积不能为空",trigger:["blur"]}]}},[t("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:100,placeholder:"请输入楼盘面积"},model:{value:e.formData.acreage,callback:function(o){e.$set(e.formData,"acreage",o)},expression:"formData.acreage"}})],1),t("a-form-model-item",{attrs:{label:"上传标题图片",required:"true",help:"只能上传一张"}},[t("a-row",[t("a-input",{attrs:{hidden:""},model:{value:e.formData.image,callback:function(o){e.$set(e.formData,"image",o)},expression:"formData.image"}}),[t("div",{staticClass:"clearfix"},[t("a-upload",{attrs:{action:e.action,name:e.uploadName,data:{upload_dir:e.upload_dir},"list-type":"picture-card","file-list":e.fileList1},on:{preview:e.handlePreview1,change:e.handleChange}},[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1),t("a-modal",{attrs:{visible:e.previewVisible1,footer:null},on:{cancel:e.handleCancel1}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]],2)],1)],1)],1),t("div",{staticClass:"page-header"},[t("a-button",{staticClass:"ml-20 mt-20 mb-20",attrs:{type:"primary"},on:{click:function(o){return e.handleSubmit()}}},[e._v("提交")])],1)],1)],1)},l=[],s=t("1da1"),a=(t("96cf"),t("d3b7"),t("b0c0"),t("a434"),t("f9e9"));function r(e){return new Promise((function(o,t){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return o(i.result)},i.onerror=function(e){return t(e)}}))}var f={name:"SaleBuildingFloorPlanEdit",props:{upload_dir:{type:String,default:""}},data:function(){return{labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,previewVisible1:!1,previewVisible:!1,previewImage:"",previewImage1:"",sel_areas:[],fileList1:[],fileList:[],tabName:"新建户型",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",formData:{pigcms_id:0,acreage:void 0,houses_id:0,title:"",image:""}}},watch:{"$route.query.pigcms_id":function(e){e>0?(this.formData.pigcms_id=e,this.tabName="编辑户型",this.getEditInfo()):(this.tabName="新增户型",this.getDetail())},"$route.query.houses_id":function(e){e>0&&(this.formData.houses_id=e)}},mounted:function(){this.formData.pigcms_id=this.$route.query.pigcms_id,this.formData.houses_id=this.$route.query.houses_id,this.form=this.$form.createForm(this),this.formData.pigcms_id>0?this.getEditInfo():this.getDetail()},activated:function(){this.formData.pigcms_id=this.$route.query.pigcms_id,this.formData.houses_id=this.$route.query.houses_id,this.form=this.$form.createForm(this),this.formData.pigcms_id>0?this.getEditInfo():this.getDetail()},methods:{handlePreview1:function(e){var o=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.url||e.preview){t.next=4;break}return t.next=3,r(e.originFileObj);case 3:e.preview=t.sent;case 4:o.previewImage=e.url||e.preview,o.previewVisible1=!0;case 6:case"end":return t.stop()}}),t)})))()},handleChange:function(e){var o=e.fileList;if(this.fileList1=o,o.length>0){var t=o.length-1;"done"==this.fileList1[t].status&&(this.formData.image=this.fileList1[t].response.data,this.fileList1[0].uid="logo",this.fileList1[0].name="logo_1",this.fileList1[0].status="done",this.fileList1[0].url=this.fileList1[t].response.data,o.length>1&&this.fileList1.splice(0,t))}else this.formData.image=""},handleCancel1:function(){this.previewVisible1=!1},handleSubmit:function(){var e=this;return this.formData.title?this.formData.image?""==this.formData.acreage||void 0==this.formData.acreage?(this.$message.error("请输入户型面积"),!1):(this.formData.houses_id=this.$route.query.houses_id,void this.request(a["a"].editHouseFloorPlan,this.formData).then((function(o){e.$message.success("保存成功！"),e.formData.pigcms_id=0,setTimeout((function(){e.$message.destroy(),e.confirmLoading=!1,e.$router.push({path:"/life_tools/platform.LifeTools/saleBuildingFloorPlanList",query:{houses_id:e.formData.houses_id}})}),1500)})).catch((function(o){e.confirmLoading=!1}))):(this.$message.error("请输入户型图片"),!1):(this.$message.error("请输入户型名称"),!1)},getEditInfo:function(){var e=this;this.fileList1=[],this.formData.pigcms_id=this.$route.query.pigcms_id,this.request(a["a"].getHousesFloorPlanMsg,{pigcms_id:this.formData.pigcms_id}).then((function(o){if(e.fileList1=[],o.image){var t={uid:"logo",name:"logo_1",status:"done",url:o.image};e.fileList1.push(t)}e.formData=o}))},getDetail:function(){this.formData={acreage:void 0,title:"",image:""}}}},m=f,d=t("2877"),p=Object(d["a"])(m,i,l,!1,null,"3df181da",null);o["default"]=p.exports},f9e9:function(e,o,t){"use strict";var i={recDisplay:"life_tools/platform.HomeDecorate/recDisplay",getUrlAndRecSwitch:"life_tools/platform.HomeDecorate/getUrlAndRecSwitch",getUrlAndRecSwitchSport:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchSport",getUrlAndRecSwitchTicket:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchTicket",getList:"life_tools/platform.HomeDecorate/getList",getDel:"life_tools/platform.HomeDecorate/getDel",getEdit:"life_tools/platform.HomeDecorate/getEdit",getAllArea:"/life_tools/platform.HomeDecorate/getAllArea",addOrEditDecorate:"life_tools/platform.HomeDecorate/addOrEdit",getRecEdit:"life_tools/platform.HomeDecorate/getRecEdit",getRecList:"life_tools/platform.HomeDecorate/getRecList",delRecAdver:"life_tools/platform.HomeDecorate/delRecAdver",addOrEditRec:"life_tools/platform.HomeDecorate/addOrEditRec",delOne:"/life_tools/platform.HomeDecorate/delOne",getRelatedList:"life_tools/platform.HomeDecorate/getRelatedList",saveRelatedSort:"/life_tools/platform.HomeDecorate/saveRelatedSort",addRelatedCate:"life_tools/platform.HomeDecorate/addRelatedCate",getCateList:"life_tools/platform.HomeDecorate/getCateList",getRelatedInfoList:"life_tools/platform.HomeDecorate/getRelatedInfoList",getInfoList:"life_tools/platform.HomeDecorate/getInfoList",addRelatedInfo:"life_tools/platform.HomeDecorate/addRelatedInfo",delInfo:"/life_tools/platform.HomeDecorate/delInfo",saveRelatedInfoSort:"/life_tools/platform.HomeDecorate/saveRelatedInfoSort",getRelatedCourseList:"life_tools/platform.HomeDecorate/getRelatedCourseList",getCourseList:"life_tools/platform.HomeDecorate/getCourseList",getScenicList:"life_tools/platform.HomeDecorate/getScenicList",addRelatedCourse:"life_tools/platform.HomeDecorate/addRelatedCourse",addRelatedScenic:"life_tools/platform.HomeDecorate/addRelatedScenic",delCourse:"/life_tools/platform.HomeDecorate/delCourse",saveRelatedCourseSort:"/life_tools/platform.HomeDecorate/saveRelatedCourseSort",saveRelatedScenicSort:"/life_tools/platform.HomeDecorate/saveRelatedScenicSort",delScenic:"/life_tools/platform.HomeDecorate/delScenic",getRelatedToolsList:"life_tools/platform.HomeDecorate/getRelatedToolsList",getRelatedScenicList:"life_tools/platform.HomeDecorate/getRelatedScenicList",getToolsList:"life_tools/platform.HomeDecorate/getToolsList",addRelatedTools:"life_tools/platform.HomeDecorate/addRelatedTools",delTools:"/life_tools/platform.HomeDecorate/delTools",saveRelatedToolsSort:"/life_tools/platform.HomeDecorate/saveRelatedToolsSort",setToolsName:"/life_tools/platform.HomeDecorate/setToolsName",getRelatedCompetitionList:"life_tools/platform.HomeDecorate/getRelatedCompetitionList",getCompetitionList:"life_tools/platform.HomeDecorate/getCompetitionList",addRelatedCompetition:"life_tools/platform.HomeDecorate/addRelatedCompetition",delCompetition:"/life_tools/platform.HomeDecorate/delCompetition",saveRelatedCompetitionSort:"/life_tools/platform.HomeDecorate/saveRelatedCompetitionSort",getReplyList:"/life_tools/platform.LifeToolsReply/searchReply",isShowReply:"/life_tools/platform.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/platform.LifeToolsReply/getReplyDetails",delReply:"/life_tools/platform.LifeToolsReply/delReply",subReply:"/life_tools/platform.LifeToolsReply/subReply",getReplyContent:"/life_tools/platform.LifeToolsReply/getReplyContent",getSportsOrderList:"/life_tools/platform.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/platform.SportsOrder/exportToolsOrder",getSportList:"life_tools/platform.LifeToolsCompetition/getList",getToolCompetitionMsg:"life_tools/platform.LifeToolsCompetition/getToolCompetitionMsg",saveToolCompetition:"life_tools/platform.LifeToolsCompetition/saveToolCompetition",lookCompetitionUser:"life_tools/platform.LifeToolsCompetition/lookCompetitionUser",closeCompetition:"life_tools/platform.LifeToolsCompetition/closeCompetition",exportUserOrder:"life_tools/platform.LifeToolsCompetition/exportUserOrder",delSport:"life_tools/platform.LifeToolsCompetition/delSport",getSportsOrderDetail:"/life_tools/platform.SportsOrder/getOrderDetail",getInformationList:"life_tools/platform.LifeToolsInformation/getInformationList",addEditInformation:"life_tools/platform.LifeToolsInformation/addEditInformation",getInformationDetail:"life_tools/platform.LifeToolsInformation/getInformationDetail",getAllScenic:"life_tools/platform.LifeTools/getAllScenic",delInformation:"life_tools/platform.LifeToolsInformation/delInformation",loginMer:"/life_tools/platform.SportsOrder/loginMer",getCategoryList:"life_tools/platform.LifeToolsCategory/getList",getCategoryDetail:"life_tools/platform.LifeToolsCategory/getDetail",categoryDel:"life_tools/platform.LifeToolsCategory/del",categoryEdit:"life_tools/platform.LifeToolsCategory/addOrEdit",categorySortEdit:"life_tools/platform.LifeToolsCategory/editSort",getLifeToolsList:"life_tools/platform.LifeTools/getList",setLifeToolsAttrs:"life_tools/platform.LifeTools/setLifeToolsAttrs",getHelpNoticeList:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeList",delHelpNotice:"life_tools/platform.LifeToolsHelpNotice/delHelpNotice",getHelpNoticeDetail:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeDetail",getComplaintAdviceList:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceList",changeComplaintAdviceStatus:"life_tools/platform.LifeToolsComplaintAdvice/changeComplaintAdviceStatus",delComplaintAdvice:"life_tools/platform.LifeToolsComplaintAdvice/delComplaintAdvice",getComplaintAdviceDetail:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceDetail",changeHelpNoticeStatus:"life_tools/platform.LifeToolsHelpNotice/changeHelpNoticeStatus",getRecGoodsList:"life_tools/platform.IndexRecommend/getRecList",delRecGoods:"life_tools/platform.IndexRecommend/delRecGoods",updateRec:"life_tools/platform.IndexRecommend/updateRec",getGoodsList:"life_tools/platform.IndexRecommend/getGoodsList",addRecGoods:"life_tools/platform.IndexRecommend/addRecGoods",updateRecGoods:"life_tools/platform.IndexRecommend/updateRecGoods",addEditKefu:"life_tools/platform.LifeToolsKefu/addEditKefu",getKefuList:"life_tools/platform.LifeToolsKefu/getKefuList",getKefuDetail:"life_tools/platform.LifeToolsKefu/getKefuDetail",delKefu:"life_tools/platform.LifeToolsKefu/delKefu",getMapConfig:"life_tools/platform.LifeTools/getMapConfig",getAppointList:"life_tools/platform.LifeToolsAppoint/getList",getAppointMsg:"life_tools/platform.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/platform.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/platform.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/platform.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/platform.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/platform.LifeToolsAppoint/delAppoint",getHousesFloorList:"life_tools/platform.LifeToolsHousesList/getHousesFloorList",updateHousesFloorStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorStatus",getHousesFloorMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorMsg",editHouseFloor:"life_tools/platform.LifeToolsHousesList/editHouseFloor",getChildList:"life_tools/platform.LifeToolsHousesList/getChildList",getHousesFloorPlanMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorPlanMsg",editHouseFloorPlan:"life_tools/platform.LifeToolsHousesList/editHouseFloorPlan",updateHousesFloorPlanStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorPlanStatus",getSportsIndexHotRecommond:"/life_tools/platform.HomeDecorate/getSportsIndexHotRecommond",getSportsHotRecommendList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendList",addSportsHotRecommendList:"/life_tools/platform.HomeDecorate/addSportsHotRecommendList",getSportsHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendSelectedList",delSportsHotRecommendList:"/life_tools/platform.HomeDecorate/delSportsHotRecommendList",saveSportsHotRecommendSort:"/life_tools/platform.HomeDecorate/saveSportsHotRecommendSort",getScenicIndexHotRecommond:"/life_tools/platform.HomeDecorate/getScenicIndexHotRecommond",getScenicHotRecommendList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendList",addScenicHotRecommendList:"/life_tools/platform.HomeDecorate/addScenicHotRecommendList",getScenicHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendSelectedList",delScenicHotRecommendList:"/life_tools/platform.HomeDecorate/delScenicHotRecommendList",saveScenicHotRecommendSort:"/life_tools/platform.HomeDecorate/saveScenicHotRecommendSort",getAtatisticsInfo:"/life_tools/platform.LifeToolsTicketSystem/getAtatisticsInfo",ticketSystemExport:"/life_tools/platform.LifeToolsTicketSystem/ticketSystemExport",orderList:"/life_tools/platform.LifeToolsTicketSystem/orderList",getOrderDetail:"/life_tools/platform.LifeToolsTicketSystem/getOrderDetail",orderVerification:"/life_tools/platform.LifeToolsTicketSystem/orderVerification",orderBack:"/life_tools/platform.LifeToolsTicketSystem/orderBack",getCardOrderList:"/life_tools/platform.CardSystem/getCardOrderList",getCardOrderDetail:"/life_tools/platform.CardSystem/getCardOrderDetail",CardOrderBack:"/life_tools/platform.CardSystem/CardOrderBack",cardSystemExport:"/life_tools/platform.CardSystem/cardSystemExport",lifeToolsAuditList:"/life_tools/platform.LifeTools/lifeToolsAuditList",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",getAuditTicketList:"/life_tools/platform.LifeToolsTicket/getAuditTicketList",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getNotAuditNum:"/life_tools/platform.LifeToolsTicket/getNotAuditNum",getAuditAdminList:"/life_tools/platform.LifeToolsCompetition/getAuditAdminList",getMyAuditList:"/life_tools/platform.LifeToolsCompetition/getMyAuditList",getMyAuditCount:"/life_tools/platform.LifeToolsCompetition/getMyAuditCount",getMyAuditInfo:"/life_tools/platform.LifeToolsCompetition/getMyAuditInfo",audit:"/life_tools/platform.LifeToolsCompetition/audit"};o["a"]=i}}]);