(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77d9f846","chunk-2d0b6a79","chunk-0e33876e","chunk-2d0b6a79","chunk-2d0b3786","chunk-2d0bacf4","chunk-2d228e75","chunk-7469f7cf"],{"0d96":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("a-modal",{attrs:{bodyStyle:{background:"#EEEEEE"},width:800,visible:t.showPosterModal,closable:!1,maskClosable:!1}},[o("div",[o("a-row",[o("a-col",{attrs:{span:9}},[o("div",{staticClass:"showPoster"},[o("div",{staticClass:"img_poster"},[o("img",{staticStyle:{width:"220px",height:"220px"},attrs:{src:a("dabd"),alt:""}}),o("div",{directives:[{name:"show",rawName:"v-show",value:2==t.detailData.share_type,expression:"detailData.share_type == 2"}],staticClass:"scan_img_absolute"},[o("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:a("399c5"),alt:""}}),o("div",{staticClass:"scan_img_absolute_intro"},[o("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("打开微信扫一扫")]),o("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("即可快速购票")])])])]),o("div",{staticStyle:{padding:"16px 20px 12px 19px",display:"flex","justify-content":"space-between"}},[o("div",[o("div",{staticClass:"title_price"},[o("p",{staticClass:"title",staticStyle:{"margin-bottom":"0px"}},[t._v("日照海洋公园")]),o("p",{directives:[{name:"show",rawName:"v-show",value:1==t.detailData.status_show_price,expression:"detailData.status_show_price == 1"}],staticClass:"price",staticStyle:{"margin-bottom":"0px"}},[o("span",{staticClass:"symbol"},[t._v("￥")]),o("span",[t._v("299")]),o("span",{staticClass:"unit"},[t._v("起")])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:1==t.detailData.share_type,expression:"detailData.share_type == 1"}],staticClass:"scan_img"},[o("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:a("399c5"),alt:""}}),o("div",{staticClass:"scan_img_intro"},[o("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("打开微信扫一扫")]),o("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("即可快速购票")])])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:1==t.detailData.status_show_avatar,expression:"detailData.status_show_avatar == 1"}],staticClass:"avatar"},[o("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:a("3991"),alt:""}})])])])]),o("a-col",{attrs:{span:15}},[o("a-form-model",{ref:"ruleForm",attrs:{model:t.detailData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[o("a-form-model-item",{attrs:{label:"海报类型：",colon:!1}},[o("a-radio-group",{model:{value:t.detailData.share_type,callback:function(e){t.$set(t.detailData,"share_type",e)},expression:"detailData.share_type"}},[o("a-radio",{attrs:{value:1}},[t._v(" 横式模板 ")]),o("a-radio",{attrs:{value:2}},[t._v(" 二维码内嵌模板")])],1)],1),o("a-form-model-item",{attrs:{label:"是否显示分销者头像：",colon:!1}},[o("a-radio-group",{model:{value:t.detailData.status_show_avatar,callback:function(e){t.$set(t.detailData,"status_show_avatar",e)},expression:"detailData.status_show_avatar"}},[o("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),o("a-radio",{attrs:{value:0}},[t._v(" 否 ")])],1)],1),o("a-form-model-item",{attrs:{label:"是否显示价格：",colon:!1}},[o("a-radio-group",{model:{value:t.detailData.status_show_price,callback:function(e){t.$set(t.detailData,"status_show_price",e)},expression:"detailData.status_show_price"}},[o("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),o("a-radio",{attrs:{value:0}},[t._v(" 否 ")])],1)],1)],1)],1)],1)],1),o("template",{staticStyle:{background:"#EEEEEE"},slot:"footer"},[o("a-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.onSave.apply(null,arguments)}}},[t._v("保存")])],1)],2)],1)},i=[],s=(a("a9e3"),{data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:14}},detailData:{share_type:"",status_show_avatar:"",status_show_price:""}}},props:{showPosterModal:{type:Boolean,default:!1},statusShowPrice:{type:Number,default:0},statusShowAvatar:{type:Number,default:0},shareType:{type:Number,default:2}},watch:{showPosterModal:function(t){t&&(this.detailData={share_type:this.shareType,status_show_avatar:this.statusShowAvatar,status_show_price:this.statusShowPrice})}},methods:{onSave:function(){console.log(this.formData),this.$emit("onClosePosterModal",this.detailData)}}}),r=s,l=(a("dbb8"),a("0c7c")),n=Object(l["a"])(r,o,i,!1,null,"3c0f0673",null);e["default"]=n.exports},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7");function o(t,e,a,o,i,s,r){try{var l=t[s](r),n=l.value}catch(c){return void a(c)}l.done?e(n):Promise.resolve(n).then(o,i)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(i,s){var r=t.apply(e,a);function l(t){o(r,i,s,l,n,"next",t)}function n(t){o(r,i,s,l,n,"throw",t)}l(void 0)}))}}},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("6b75");function i(t){if(Array.isArray(t))return Object(o["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=a("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t){return i(t)||s(t)||Object(r["a"])(t)||l()}},3991:function(t,e,a){t.exports=a.p+"img/avatar_posterSet.66a2cc2d.png"},"399c5":function(t,e,a){t.exports=a.p+"img/scan_posterSet.5e3b9f86.png"},4943:function(t,e,a){},"4d95":function(t,e,a){"use strict";var o={getTicketList:"life_tools/merchant.LifeToolsTicket/getList",getTicketDetail:"life_tools/merchant.LifeToolsTicket/getDetail",ticketDel:"life_tools/merchant.LifeToolsTicket/del",TicketEdit:"life_tools/merchant.LifeToolsTicket/addOrEdit",getLifeToolsList:"life_tools/merchant.LifeTools/getInformationList",setLifeToolsAttrs:"life_tools/merchant.LifeTools/setLifeToolsAttrs",getSportsOrderList:"/life_tools/merchant.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/merchant.SportsOrder/exportToolsOrder",getSportsOrderDetail:"/life_tools/merchant.SportsOrder/getOrderDetail",agreeSportsOrderRefund:"/life_tools/merchant.SportsOrder/agreeRefund",refuseSportsOrderRefund:"/life_tools/merchant.SportsOrder/refuseRefund",getEditInfo:"life_tools/merchant.LifeToolsTicket/getEditInfo",getCategoryList:"life_tools/merchant.LifeToolsCategory/getCategoryList",getMapConfig:"life_tools/merchant.LifeTools/getMapConfig",getAddressList:"life_tools/merchant.LifeTools/getAddressList",addEditLifeTools:"life_tools/merchant.LifeTools/addEditLifeTools",getLifeToolsDetail:"life_tools/merchant.LifeTools/getLifeToolsDetail",delLifeTools:"life_tools/merchant.LifeTools/delLifeTools",getReplyList:"/life_tools/merchant.LifeToolsReply/searchReply",isShowReply:"/life_tools/merchant.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/merchant.LifeToolsReply/getReplyDetails",delReply:"/life_tools/merchant.LifeToolsReply/delReply",subReply:"/life_tools/merchant.LifeToolsReply/subReply",getReplyContent:"/life_tools/merchant.LifeToolsReply/getReplyContent",getCardList:"/life_tools/merchant.EmployeeCard/getCardList",editCard:"/life_tools/merchant.EmployeeCard/editCard",saveCard:"/life_tools/merchant.EmployeeCard/saveCard",delCard:"/life_tools/merchant.EmployeeCard/delCard",getSportsVerifyList:"/life_tools/merchant.SportsOrder/getVerifyList",exportVerifyRecord:"/life_tools/merchant.SportsOrder/exportVerifyRecord",getLimitedList:"/life_tools/merchant.LifeScenicLimitedAct/getLimitedList",updateLimited:"/life_tools/merchant.LifeScenicLimitedAct/addLimited",limitedChangeState:"/life_tools/merchant.LifeScenicLimitedAct/changeState",removeLimited:"/life_tools/merchant.LifeScenicLimitedAct/del",getLimitedInfo:"/life_tools/merchant.LifeScenicLimitedAct/edit",getMerchantSort:"/life_tools/merchant.LifeToolsTicket/getMerchantSort",getLifeToolsTicket:"/life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",getToolsCardList:"/life_tools/merchant.LifeTools/getToolsCardList",AddOrEditToolsCard:"/life_tools/merchant.LifeTools/AddOrEditToolsCard",getToolsCardEdit:"/life_tools/merchant.LifeTools/getToolsCardEdit",delToolsCard:"/life_tools/merchant.LifeTools/delToolsCard",getAllToolsList:"/life_tools/merchant.LifeTools/getAllToolsList",getToolsCardRecord:"/life_tools/merchant.LifeTools/getToolsCardRecord",getCardOrderList:"/life_tools/merchant.LifeTools/getCardOrderList",getCardOrderDetail:"/life_tools/merchant.LifeTools/getCardOrderDetail",agreeCardOrderRefund:"/life_tools/merchant.LifeTools/agreeCardOrderRefund",refuseCardOrderRefund:"/life_tools/merchant.LifeTools/refuseCardOrderRefund",getSportsActivityList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityList",updateSportsActivityStatus:"/life_tools/merchant.LifeToolsSportsActivity/updateSportsActivityStatus",getSportsActivityOrderList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityOrderList",addSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/addSportsActivity",editSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/editSportsActivity",getTravelList:"/life_tools/merchant.LifeToolsGroupTravelAgency/getTravelList",agencyAudit:"/life_tools/merchant.LifeToolsGroupTravelAgency/audit",getStaffList:"/life_tools/merchant.LifeToolsTicket/getStaffList",getAppointList:"life_tools/merchant.LifeToolsAppoint/getList",getAppointMsg:"life_tools/merchant.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/merchant.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/merchant.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/merchant.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/merchant.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/merchant.LifeToolsAppoint/delAppoint",getSeatMap:"/life_tools/merchant.LifeToolsAppoint/getSeatMap",getAppointOrderDetail:"life_tools/merchant.LifeToolsAppoint/getAppointOrderDetail",auditRefund:"life_tools/merchant.LifeToolsAppoint/auditRefund",suspend:"life_tools/merchant.LifeToolsAppoint/suspend",getSportsSecondsKillList:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillList",saveSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/saveSecondsKill",ChangeSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/ChangeSportsSecondsKill",delSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/delSecondsKill",getSportsSecondsKillDetail:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillDetail",getGroupTicketList:"life_tools/merchant.group/getGroupTicketList",getGroupLifeToolsTicket:"life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",addGroupTicket:"life_tools/merchant.group/addGroupTicket",delGroupTicket:"life_tools/merchant.group/delGroupTicket",editSettingData:"life_tools/merchant.group/editSettingData",editGroupTicket:"life_tools/merchant.group/editGroupTicket",getSettingDataDetail:"life_tools/merchant.group/getSettingDataDetail",getStatisticsData:"life_tools/merchant.LifeToolsGroupOrder/getStatisticsData",getOrderList:"life_tools/merchant.LifeToolsGroupOrder/getOrderList",getOrderAuditList:"/life_tools/merchant.LifeToolsGroupOrder/getAuditGroupOrderList",orderAudit:"/life_tools/merchant.LifeToolsGroupOrder/audit",groupOrderRefand:"life_tools/merchant.LifeToolsGroupOrder/groupOrderRefand",editDistributionPrice:"life_tools/merchant.LifeToolsDistribution/editDistributionPrice",getDistributionSettingDataDetail:"/life_tools/merchant.LifeToolsDistribution/getSettingDataDetail",getDistributionSettingeditSetting:"/life_tools/merchant.LifeToolsDistribution/editSetting",getAtatisticsInfo:"/life_tools/merchant.LifeToolsDistribution/getAtatisticsInfo",getDistributorList:"/life_tools/merchant.LifeToolsDistribution/getDistributorList",getLowerLevel:"/life_tools/merchant.LifeToolsDistribution/getLowerLevel",audit:"/life_tools/merchant.LifeToolsDistribution/audit",getDistributionOrderList:"/life_tools/merchant.LifeToolsDistribution/getDistributionOrderList",editDistributionOrderNote:"/life_tools/merchant.LifeToolsDistribution/editDistributionOrderNote",delDistributor:"/life_tools/merchant.LifeToolsDistribution/delDistributor",addStatement:"/life_tools/merchant.LifeToolsDistribution/addStatement",getStatementList:"/life_tools/merchant.LifeToolsDistribution/getStatement",getStatementDetail:"/life_tools/merchant.LifeToolsDistribution/getStatementDetail",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getMapCity:"/g=Index&c=Map&a=suggestion",getCarParkList:"/life_tools/merchant.LifeToolsCarPark/getCarParkList",addCarPark:"/life_tools/merchant.LifeToolsCarPark/addCarPark",showCarPark:"/life_tools/merchant.LifeToolsCarPark/showCarPark",getToolsList:"/life_tools/merchant.LifeToolsCarPark/getToolsList",deleteCarPark:"/life_tools/merchant.LifeToolsCarPark/deleteCarPark",statusCarPark:"/life_tools/merchant.LifeToolsCarPark/statusCarPark",wifiList:"life_tools/merchant.LifeToolsWifi/wifiList",wifiAdd:"life_tools/merchant.LifeToolsWifi/wifiAdd",wifiShow:"life_tools/merchant.LifeToolsWifi/wifiShow",wifiStatusChange:"life_tools/merchant.LifeToolsWifi/wifiStatusChange",wifiDelete:"life_tools/merchant.LifeToolsWifi/wifiDelete",scenicMapSave:"/life_tools/merchant.LifeToolsScenicMap/saveMap",scenicMapPlaceList:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceList",scenicMapPlaceSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapPlace",scenicMapPlaceDel:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceDel",scenicMapLineList:"/life_tools/merchant.LifeToolsScenicMap/mapLineList",scenicMapLineSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapLine",scenicMapLineDel:"/life_tools/merchant.LifeToolsScenicMap/mapLineDel",scenicMapScenicList:"/life_tools/merchant.LifeToolsScenicMap/scenicList",scenicMapPlaceCatList:"/life_tools/merchant.LifeToolsScenicMap/categoryList",scenicMapPlaceCategoryDel:"/life_tools/merchant.LifeToolsScenicMap/categoryDel",scenicMapPlaceCategorySave:"/life_tools/merchant.LifeToolsScenicMap/saveCategory",scenicMapList:"/life_tools/merchant.LifeToolsScenicMap/mapList",scenicMapDel:"/life_tools/merchant.LifeToolsScenicMap/mapDel",scenicMapStatusSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapStatus",changeCloseStatus:"life_tools/merchant.LifeTools/changeCloseStatus",getAddEditCardMerchantInfo:"/life_tools/merchant.LifeTools/getAddEditCardMerchantInfo"};e["a"]=o},5961:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:" pt-20 pl-20 pr-20 pb-20  br-10"},[a("h3",[a("a",[t._v(t._s(t.titleName))])]),a("a-card",{attrs:{bordered:!1}},[a("a-form-model",{ref:"ruleForm",attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"是否开启景区分销：",colon:!1}},[a("a-radio-group",{model:{value:t.formData.status_distribution,callback:function(e){t.$set(t.formData,"status_distribution",e)},expression:"formData.status_distribution"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:0}},[t._v(" 不开启")])],1)],1),a("a-form-model-item",{attrs:{label:"是否邀请奖励：",colon:!1}},[a("a-radio-group",{model:{value:t.formData.status_award,callback:function(e){t.$set(t.formData,"status_award",e)},expression:"formData.status_award"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:0}},[t._v(" 不开启")])],1)],1),a("a-form-model-item",{attrs:{label:"分享二维码有效时间：",colon:!1,help:"设置为0时，永不过期",labelCol:t.labelCol,wrapperCol:t.wrapperCol1}},[a("a-input-number",{attrs:{"addon-after":"分钟"},model:{value:t.formData.effective_time,callback:function(e){t.$set(t.formData,"effective_time",e)},expression:"formData.effective_time"}}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v("分钟")])],1),a("a-form-model-item",{attrs:{label:"申请分销员审核模式",colon:!1}},[a("a-radio-group",{model:{value:t.formData.distributor_audit,callback:function(e){t.$set(t.formData,"distributor_audit",e)},expression:"formData.distributor_audit"}},[a("a-radio",{attrs:{value:1}},[t._v(" 自动同意审核 ")]),a("a-radio",{attrs:{value:0}},[t._v(" 手动审核")])],1)],1),a("a-form-model-item",{attrs:{label:"景区分享海报设置",colon:!1}},[a("a-button",{attrs:{type:"primary"},on:{click:t.setPoster}},[t._v("设置")])],1),a("a-row",{staticStyle:{"margin-bottom":"20px"}},[a("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:7}},[a("span",[a("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"35px"}},[t._v("*")]),t._v("分享入口图标：")])]),a("a-col",{attrs:{span:10}},[a("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",name:"reply_pic",data:t.updateDataCover,"list-type":"picture-card","file-list":t.fileListCover},on:{preview:t.handlePreviewCover,change:function(e){return t.upLoadChangeCover(e)}}},[0==t.fileListCover.length?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v(" 上传图片 ")])],1):t._e()]),a("div",{staticClass:"ant-form-explain"},[t._v("推荐尺寸: 1 : 1 ")]),a("a-modal",{attrs:{visible:t.previewVisibleCover,footer:null},on:{cancel:t.handleCancelCover}},[t.previewImageCover?a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImageCover}}):t._e()])],1)],1),a("a-form-model-item",{attrs:{label:"订单核销或者过期后变成待结算单时间：",colon:!1,help:"核销完或者过期的订单变成待结算单时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol1}},[a("a-input-number",{attrs:{"addon-after":"天"},model:{value:t.formData.update_status_time,callback:function(e){t.$set(t.formData,"update_status_time",e)},expression:"formData.update_status_time"}}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v("天")])],1),a("a-form-model-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"个人分销员申请模板",colon:!1}}),[a("a-row",[a("a-col",{attrs:{span:6}}),a("a-col",{attrs:{span:14}},[a("div",{staticClass:"goods-spec"},[a("a-button",{staticClass:"goods-spec-add",attrs:{type:"primary"},on:{click:function(e){return t.addPrivate("personal_custom_form")}}},[t._v("添加")])],1),t._l(t.formData.personal_custom_form,(function(e,o){return a("div",{key:o,staticClass:"goods-container"},[a("div",{staticClass:"goods-content"},[a("div",{staticClass:"goods-content-box"},[a("div",{staticClass:"goods-content-left"},[a("a-form",{staticStyle:{width:"500px"},attrs:{"label-width":"80px","label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-item",{attrs:{label:"标题名称"}},[a("a-input",{attrs:{placeholder:"请输入标题名称"},model:{value:e.title,callback:function(a){t.$set(e,"title",a)},expression:"attr.title"}})],1),a("a-form-item",{attrs:{label:"排序值"}},[a("a-input",{attrs:{placeholder:"请输入排序值"},model:{value:e.sort,callback:function(a){t.$set(e,"sort",a)},expression:"attr.sort"}})],1),a("a-form-item",{attrs:{label:"选择表单控件："}},[a("a-select",{attrs:{placeholder:"请选择表单控件",options:t.formOptions},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"attr.type"}})],1),"image"==e.type?a("a-form-item",{attrs:{label:"数量限制："}},[a("a-input",{attrs:{placeholder:"图片最大上传数量"},model:{value:e.image_max_num,callback:function(a){t.$set(e,"image_max_num",a)},expression:"attr.image_max_num"}})],1):t._e(),"select"==e.type?a("a-form-item",{attrs:{label:"枚举值："}},[a("a-input",{attrs:{placeholder:"选择值之间用','隔开"},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"attr.content"}})],1):t._e(),a("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"是否为必填"}},[a("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否"},on:{change:function(a){return t.areaHandleChange(a,"is_must",e)}},model:{value:e.is_must,callback:function(a){t.$set(e,"is_must",a)},expression:"attr.is_must"}})],1),a("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"状态"}},[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:function(a){return t.areaHandleChange(a,"status",e)}},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"attr.status"}})],1)],1)],1),a("div",{staticClass:"goods-content-right"},[a("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delPrivate(o,"personal_custom_form")}}},[t._v("删除控件")])],1)])])])}))],2)],1)],a("a-form-model-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"企业分销员申请模板",colon:!1}}),[a("a-row",[a("a-col",{attrs:{span:6}}),a("a-col",{attrs:{span:14}},[a("div",{staticClass:"goods-spec"},[a("a-button",{staticClass:"goods-spec-add",attrs:{type:"primary"},on:{click:function(e){return t.addPrivate("business_custom_form")}}},[t._v("添加")])],1),t._l(t.formData.business_custom_form,(function(e,o){return a("div",{key:o,staticClass:"goods-container"},[a("div",{staticClass:"goods-content"},[a("div",{staticClass:"goods-content-box"},[a("div",{staticClass:"goods-content-left"},[a("a-form",{staticStyle:{width:"500px"},attrs:{"label-width":"80px","label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-item",{attrs:{label:"标题名称"}},[a("a-input",{attrs:{placeholder:"请输入标题名称"},model:{value:e.title,callback:function(a){t.$set(e,"title",a)},expression:"attr.title"}})],1),a("a-form-item",{attrs:{label:"排序值"}},[a("a-input",{attrs:{placeholder:"请输入排序值"},model:{value:e.sort,callback:function(a){t.$set(e,"sort",a)},expression:"attr.sort"}})],1),a("a-form-item",{attrs:{label:"选择表单控件："}},[a("a-select",{attrs:{placeholder:"请选择表单控件"},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"attr.type"}},[a("a-select-option",{attrs:{value:"text"}},[t._v(" 输入框 ")]),a("a-select-option",{attrs:{value:"select"}},[t._v(" 选择框 ")]),a("a-select-option",{attrs:{value:"image"}},[t._v(" 上传图片 ")]),a("a-select-option",{attrs:{value:"idcard"}},[t._v(" 身份证 ")]),a("a-select-option",{attrs:{value:"phone"}},[t._v(" 手机号 ")]),a("a-select-option",{attrs:{value:"email"}},[t._v(" 邮箱 ")])],1)],1),"image"==e.type?a("a-form-item",{attrs:{label:"数量限制："}},[a("a-input",{attrs:{placeholder:"图片最大上传数量"},model:{value:e.image_max_num,callback:function(a){t.$set(e,"image_max_num",a)},expression:"attr.image_max_num"}})],1):t._e(),"select"==e.type?a("a-form-item",{attrs:{label:"枚举值："}},[a("a-input",{attrs:{placeholder:"选择值之间用','隔开"},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"attr.content"}})],1):t._e(),a("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"是否为必填"}},[a("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否"},on:{change:function(a){return t.areaHandleChange(a,"is_must",e)}},model:{value:e.is_must,callback:function(a){t.$set(e,"is_must",a)},expression:"attr.is_must"}})],1),a("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"状态"}},[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:function(a){return t.areaHandleChange(a,"status",e)}},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"attr.status"}})],1)],1)],1),a("div",{staticClass:"goods-content-right"},[a("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delPrivate(o,"business_custom_form")}}},[t._v("删除控件")])],1)])])])}))],2)],1)],a("a-row",{staticStyle:{"margin-bottom":"20px"}},[a("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:6}},[a("span",[t._v("详细描述：")])]),a("a-col",{attrs:{span:15}},[a("rich-text",{attrs:{info:t.formData.description},on:{"update:info":function(e){return t.$set(t.formData,"description",e)}}})],1)],1)],2)],1),a("div",{staticClass:"page-header"},[a("a-button",{staticClass:"ml-20 mt-20 mb-20",attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v(" 保存 ")])],1),a("poster-set",{attrs:{showPosterModal:t.showPosterModal,shareType:t.formData.share_type,statusShowAvatar:t.formData.status_show_avatar,statusShowPrice:t.formData.status_show_price},on:{onClosePosterModal:t.onClosePosterModal}})],1)},i=[],s=a("5530"),r=a("2909"),l=a("1da1"),n=(a("96cf"),a("d3b7"),a("fb6a"),a("d81d"),a("a434"),a("4d95")),c=a("0d96"),d=a("884f");function f(t){return new Promise((function(e,a){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){return e(o.result)},o.onerror=function(t){return a(t)}}))}var p={name:"GroupTicketSetting",components:{posterSet:c["default"],RichText:d["a"]},data:function(){return{updateDataCover:{upload_dir:"merchant/life_tools/tools"},fileList:[],fileListCover:[],previewImageCover:null,previewVisibleCover:!1,showPosterModal:!1,titleName:"分销配置",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:14}},wrapperCol1:{xs:{span:24},sm:{span:4}},formData:{status_distribution:0,status_award:0,distributor_audit:0,update_status_time:"",effective_time:"",share_logo:"",description:"",share_type:1,status_show_avatar:0,status_show_price:0,personal_custom_form:[{title:"个人分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}],business_custom_form:[{title:"企业分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}]},formOptions:[{value:"text",label:"输入框"},{value:"select",label:"选择框"},{value:"image",label:"上传图片"},{value:"idcard",label:"身份证"},{value:"phone",label:"手机号"},{value:"email",label:"邮箱"}]}},mounted:function(){this.getSettingDetail()},watch:{$route:function(){this.getSettingDetail()}},methods:{handlePreviewCover:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,f(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImageCover=t.url||t.preview,e.previewVisibleCover=!0;case 6:case"end":return a.stop()}}),a)})))()},upLoadChangeCover:function(t){var e=this,a=Object(r["a"])(t.fileList);a.length?(a=a.slice(-1),a=a.map((function(t){return t.response&&(e.formData.share_logo=t.response.data),t})),this.fileListCover=a):(this.fileListCover=[],this.formData.share_logo="")},handleCancelCover:function(){this.previewVisibleCover=!1},setPoster:function(){this.showPosterModal=!0},onClosePosterModal:function(t){console.log(t,"------------打印item---------------------"),this.showPosterModal=!1,this.formData.share_type=t.share_type,this.formData.status_show_avatar=t.status_show_avatar,this.formData.status_show_price=t.status_show_price,console.log(this.formData,"-------打印-----------------")},areaHandleChange:function(t,e,a){a[e]=t?1:0},delPrivate:function(t,e){"personal_custom_form"==e?this.formData.personal_custom_form.splice(t,1):"business_custom_form"==e&&this.formData.business_custom_form.splice(t,1)},addPrivate:function(t){"personal_custom_form"==t?this.formData.personal_custom_form.push({title:"个人分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}):"business_custom_form"==t&&this.formData.business_custom_form.push({title:"企业分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1})},handleSubmit:function(){var t=this;console.log(this.formData,"formData=====formData");var e=this.formData;return 0==e.personal_custom_form.length?(this.$message.error(this.L("个人分销员模板配置不能为空！")),!1):0==e.business_custom_form.length?(this.$message.error(this.L("企业分销员模板配置不能为空！")),!1):void this.request(n["a"].getDistributionSettingeditSetting,Object(s["a"])({},this.formData)).then((function(e){t.$message.success(t.L("保存成功！"))}))},getSettingDetail:function(){var t=this;this.request(n["a"].getDistributionSettingDataDetail,{}).then((function(e){console.log(e,"-------------获取三级分销配置------------"),e.id&&(t.formData=Object(s["a"])({},e),0==e.update_status_time&&(e.update_status_time=""),t.fileListCover[0]={uid:1,name:"image.png",status:"done",url:e.share_logo,data:e.share_logo}),e.id&&0==e.personal_custom_form.length&&t.formData.personal_custom_form.push({title:"个人分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}),e.id&&0==e.business_custom_form.length&&t.formData.business_custom_form.push({title:"企业分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:0}),console.log(t.formData,"res.data==res.data===res.data")}))}}},m=p,u=(a("65b3"),a("0c7c")),h=Object(u["a"])(m,o,i,!1,null,"1cec9c7e",null);e["default"]=h.exports},"5cb0":function(t,e,a){},"65b3":function(t,e,a){"use strict";a("4943")},dabd:function(t,e,a){t.exports=a.p+"img/background_posterSet.69583888.png"},dbb8:function(t,e,a){"use strict";a("5cb0")}}]);