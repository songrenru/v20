(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4aa73fe","chunk-b3cef5c8","chunk-4f9741e0","chunk-b3cef5c8","chunk-748b470d","chunk-2d0bacf4","chunk-2d228e75","chunk-7469f7cf"],{"0d96":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("a-modal",{attrs:{bodyStyle:{background:"#EEEEEE"},width:800,visible:t.showPosterModal,closable:!1,maskClosable:!1}},[e("div",[e("a-row",[e("a-col",{attrs:{span:9}},[e("div",{staticClass:"showPoster"},[e("div",{staticClass:"img_poster"},[e("img",{staticStyle:{width:"220px",height:"220px"},attrs:{src:o("dabd"),alt:""}}),e("div",{directives:[{name:"show",rawName:"v-show",value:2==t.detailData.share_type,expression:"detailData.share_type == 2"}],staticClass:"scan_img_absolute"},[e("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:o("399c5"),alt:""}}),e("div",{staticClass:"scan_img_absolute_intro"},[e("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("打开微信扫一扫")]),e("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("即可快速购票")])])])]),e("div",{staticStyle:{padding:"16px 20px 12px 19px",display:"flex","justify-content":"space-between"}},[e("div",[e("div",{staticClass:"title_price"},[e("p",{staticClass:"title",staticStyle:{"margin-bottom":"0px"}},[t._v("日照海洋公园")]),e("p",{directives:[{name:"show",rawName:"v-show",value:1==t.detailData.status_show_price,expression:"detailData.status_show_price == 1"}],staticClass:"price",staticStyle:{"margin-bottom":"0px"}},[e("span",{staticClass:"symbol"},[t._v("￥")]),e("span",[t._v("299")]),e("span",{staticClass:"unit"},[t._v("起")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.detailData.share_type,expression:"detailData.share_type == 1"}],staticClass:"scan_img"},[e("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:o("399c5"),alt:""}}),e("div",{staticClass:"scan_img_intro"},[e("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("打开微信扫一扫")]),e("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("即可快速购票")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.detailData.status_show_avatar,expression:"detailData.status_show_avatar == 1"}],staticClass:"avatar"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:o("3991"),alt:""}})])])])]),e("a-col",{attrs:{span:15}},[e("a-form-model",{ref:"ruleForm",attrs:{model:t.detailData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-model-item",{attrs:{label:"海报类型：",colon:!1}},[e("a-radio-group",{model:{value:t.detailData.share_type,callback:function(e){t.$set(t.detailData,"share_type",e)},expression:"detailData.share_type"}},[e("a-radio",{attrs:{value:1}},[t._v(" 横式模板 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 二维码内嵌模板")])],1)],1),e("a-form-model-item",{attrs:{label:"是否显示分销者头像：",colon:!1}},[e("a-radio-group",{model:{value:t.detailData.status_show_avatar,callback:function(e){t.$set(t.detailData,"status_show_avatar",e)},expression:"detailData.status_show_avatar"}},[e("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),e("a-radio",{attrs:{value:0}},[t._v(" 否 ")])],1)],1),e("a-form-model-item",{attrs:{label:"是否显示价格：",colon:!1}},[e("a-radio-group",{model:{value:t.detailData.status_show_price,callback:function(e){t.$set(t.detailData,"status_show_price",e)},expression:"detailData.status_show_price"}},[e("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),e("a-radio",{attrs:{value:0}},[t._v(" 否 ")])],1)],1)],1)],1)],1)],1),e("template",{staticStyle:{background:"#EEEEEE"},slot:"footer"},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.onSave.apply(null,arguments)}}},[t._v("保存")])],1)],2)],1)},i=[],r=(o("19f1"),{data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:14}},detailData:{share_type:"",status_show_avatar:"",status_show_price:""}}},props:{showPosterModal:{type:Boolean,default:!1},statusShowPrice:{type:Number,default:0},statusShowAvatar:{type:Number,default:0},shareType:{type:Number,default:2}},watch:{showPosterModal:function(t){t&&(this.detailData={share_type:this.shareType,status_show_avatar:this.statusShowAvatar,status_show_price:this.statusShowPrice})}},methods:{onSave:function(){console.log(this.formData),this.$emit("onClosePosterModal",this.detailData)}}}),s=r,l=(o("dbb8"),o("0b56")),n=Object(l["a"])(s,a,i,!1,null,"3c0f0673",null);e["default"]=n.exports},3991:function(t,e,o){t.exports=o.p+"img/avatar_posterSet.66a2cc2d.png"},"399c5":function(t,e,o){t.exports=o.p+"img/scan_posterSet.5e3b9f86.png"},"4bb5d":function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var a=o("ea87");function i(t){if(Array.isArray(t))return Object(a["a"])(t)}o("6073"),o("2c5c"),o("c5cb"),o("36fa"),o("02bf"),o("a617"),o("17c8");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=o("9877");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t){return i(t)||r(t)||Object(s["a"])(t)||l()}},"4d95":function(t,e,o){"use strict";var a={getTicketList:"life_tools/merchant.LifeToolsTicket/getList",getTicketDetail:"life_tools/merchant.LifeToolsTicket/getDetail",ticketDel:"life_tools/merchant.LifeToolsTicket/del",TicketEdit:"life_tools/merchant.LifeToolsTicket/addOrEdit",getLifeToolsList:"life_tools/merchant.LifeTools/getInformationList",setLifeToolsAttrs:"life_tools/merchant.LifeTools/setLifeToolsAttrs",getSportsOrderList:"/life_tools/merchant.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/merchant.SportsOrder/exportToolsOrder",getSportsOrderDetail:"/life_tools/merchant.SportsOrder/getOrderDetail",agreeSportsOrderRefund:"/life_tools/merchant.SportsOrder/agreeRefund",refuseSportsOrderRefund:"/life_tools/merchant.SportsOrder/refuseRefund",getEditInfo:"life_tools/merchant.LifeToolsTicket/getEditInfo",getCategoryList:"life_tools/merchant.LifeToolsCategory/getCategoryList",getMapConfig:"life_tools/merchant.LifeTools/getMapConfig",getAddressList:"life_tools/merchant.LifeTools/getAddressList",addEditLifeTools:"life_tools/merchant.LifeTools/addEditLifeTools",getLifeToolsDetail:"life_tools/merchant.LifeTools/getLifeToolsDetail",delLifeTools:"life_tools/merchant.LifeTools/delLifeTools",getReplyList:"/life_tools/merchant.LifeToolsReply/searchReply",isShowReply:"/life_tools/merchant.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/merchant.LifeToolsReply/getReplyDetails",delReply:"/life_tools/merchant.LifeToolsReply/delReply",subReply:"/life_tools/merchant.LifeToolsReply/subReply",getReplyContent:"/life_tools/merchant.LifeToolsReply/getReplyContent",getCardList:"/life_tools/merchant.EmployeeCard/getCardList",editCard:"/life_tools/merchant.EmployeeCard/editCard",saveCard:"/life_tools/merchant.EmployeeCard/saveCard",delCard:"/life_tools/merchant.EmployeeCard/delCard",getSportsVerifyList:"/life_tools/merchant.SportsOrder/getVerifyList",exportVerifyRecord:"/life_tools/merchant.SportsOrder/exportVerifyRecord",getLimitedList:"/life_tools/merchant.LifeScenicLimitedAct/getLimitedList",updateLimited:"/life_tools/merchant.LifeScenicLimitedAct/addLimited",limitedChangeState:"/life_tools/merchant.LifeScenicLimitedAct/changeState",removeLimited:"/life_tools/merchant.LifeScenicLimitedAct/del",getLimitedInfo:"/life_tools/merchant.LifeScenicLimitedAct/edit",getMerchantSort:"/life_tools/merchant.LifeToolsTicket/getMerchantSort",getLifeToolsTicket:"/life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",getToolsCardList:"/life_tools/merchant.LifeTools/getToolsCardList",AddOrEditToolsCard:"/life_tools/merchant.LifeTools/AddOrEditToolsCard",getToolsCardEdit:"/life_tools/merchant.LifeTools/getToolsCardEdit",delToolsCard:"/life_tools/merchant.LifeTools/delToolsCard",getAllToolsList:"/life_tools/merchant.LifeTools/getAllToolsList",getToolsCardRecord:"/life_tools/merchant.LifeTools/getToolsCardRecord",getCardOrderList:"/life_tools/merchant.LifeTools/getCardOrderList",getCardOrderDetail:"/life_tools/merchant.LifeTools/getCardOrderDetail",agreeCardOrderRefund:"/life_tools/merchant.LifeTools/agreeCardOrderRefund",refuseCardOrderRefund:"/life_tools/merchant.LifeTools/refuseCardOrderRefund",getSportsActivityList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityList",updateSportsActivityStatus:"/life_tools/merchant.LifeToolsSportsActivity/updateSportsActivityStatus",getSportsActivityOrderList:"/life_tools/merchant.LifeToolsSportsActivity/getSportsActivityOrderList",addSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/addSportsActivity",editSportsActivity:"/life_tools/merchant.LifeToolsSportsActivity/editSportsActivity",getTravelList:"/life_tools/merchant.LifeToolsGroupTravelAgency/getTravelList",agencyAudit:"/life_tools/merchant.LifeToolsGroupTravelAgency/audit",getStaffList:"/life_tools/merchant.LifeToolsTicket/getStaffList",getAppointList:"life_tools/merchant.LifeToolsAppoint/getList",getAppointMsg:"life_tools/merchant.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/merchant.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/merchant.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/merchant.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/merchant.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/merchant.LifeToolsAppoint/delAppoint",getSeatMap:"/life_tools/merchant.LifeToolsAppoint/getSeatMap",getAppointOrderDetail:"life_tools/merchant.LifeToolsAppoint/getAppointOrderDetail",auditRefund:"life_tools/merchant.LifeToolsAppoint/auditRefund",suspend:"life_tools/merchant.LifeToolsAppoint/suspend",getSportsSecondsKillList:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillList",saveSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/saveSecondsKill",ChangeSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/ChangeSportsSecondsKill",delSportsSecondsKill:"/life_tools/merchant.LifeToolsSportsSecondsKill/delSecondsKill",getSportsSecondsKillDetail:"/life_tools/merchant.LifeToolsSportsSecondsKill/getSecondsKillDetail",getGroupTicketList:"life_tools/merchant.group/getGroupTicketList",getGroupLifeToolsTicket:"life_tools/merchant.LifeToolsTicket/getLifeToolsTicket",addGroupTicket:"life_tools/merchant.group/addGroupTicket",delGroupTicket:"life_tools/merchant.group/delGroupTicket",editSettingData:"life_tools/merchant.group/editSettingData",editGroupTicket:"life_tools/merchant.group/editGroupTicket",getSettingDataDetail:"life_tools/merchant.group/getSettingDataDetail",getStatisticsData:"life_tools/merchant.LifeToolsGroupOrder/getStatisticsData",getOrderList:"life_tools/merchant.LifeToolsGroupOrder/getOrderList",getOrderAuditList:"/life_tools/merchant.LifeToolsGroupOrder/getAuditGroupOrderList",orderAudit:"/life_tools/merchant.LifeToolsGroupOrder/audit",groupOrderRefand:"life_tools/merchant.LifeToolsGroupOrder/groupOrderRefand",editDistributionPrice:"life_tools/merchant.LifeToolsDistribution/editDistributionPrice",getDistributionSettingDataDetail:"/life_tools/merchant.LifeToolsDistribution/getSettingDataDetail",getDistributionSettingeditSetting:"/life_tools/merchant.LifeToolsDistribution/editSetting",getAtatisticsInfo:"/life_tools/merchant.LifeToolsDistribution/getAtatisticsInfo",getDistributorList:"/life_tools/merchant.LifeToolsDistribution/getDistributorList",getLowerLevel:"/life_tools/merchant.LifeToolsDistribution/getLowerLevel",audit:"/life_tools/merchant.LifeToolsDistribution/audit",getDistributionOrderList:"/life_tools/merchant.LifeToolsDistribution/getDistributionOrderList",editDistributionOrderNote:"/life_tools/merchant.LifeToolsDistribution/editDistributionOrderNote",delDistributor:"/life_tools/merchant.LifeToolsDistribution/delDistributor",addStatement:"/life_tools/merchant.LifeToolsDistribution/addStatement",getStatementList:"/life_tools/merchant.LifeToolsDistribution/getStatement",getStatementDetail:"/life_tools/merchant.LifeToolsDistribution/getStatementDetail",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getMapCity:"/g=Index&c=Map&a=suggestion",getCarParkList:"/life_tools/merchant.LifeToolsCarPark/getCarParkList",addCarPark:"/life_tools/merchant.LifeToolsCarPark/addCarPark",showCarPark:"/life_tools/merchant.LifeToolsCarPark/showCarPark",getToolsList:"/life_tools/merchant.LifeToolsCarPark/getToolsList",deleteCarPark:"/life_tools/merchant.LifeToolsCarPark/deleteCarPark",statusCarPark:"/life_tools/merchant.LifeToolsCarPark/statusCarPark",wifiList:"life_tools/merchant.LifeToolsWifi/wifiList",wifiAdd:"life_tools/merchant.LifeToolsWifi/wifiAdd",wifiShow:"life_tools/merchant.LifeToolsWifi/wifiShow",wifiStatusChange:"life_tools/merchant.LifeToolsWifi/wifiStatusChange",wifiDelete:"life_tools/merchant.LifeToolsWifi/wifiDelete",scenicMapSave:"/life_tools/merchant.LifeToolsScenicMap/saveMap",scenicMapPlaceList:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceList",scenicMapPlaceSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapPlace",scenicMapPlaceDel:"/life_tools/merchant.LifeToolsScenicMap/mapPlaceDel",scenicMapLineList:"/life_tools/merchant.LifeToolsScenicMap/mapLineList",scenicMapLineSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapLine",scenicMapLineDel:"/life_tools/merchant.LifeToolsScenicMap/mapLineDel",scenicMapScenicList:"/life_tools/merchant.LifeToolsScenicMap/scenicList",scenicMapPlaceCatList:"/life_tools/merchant.LifeToolsScenicMap/categoryList",scenicMapPlaceCategoryDel:"/life_tools/merchant.LifeToolsScenicMap/categoryDel",scenicMapPlaceCategorySave:"/life_tools/merchant.LifeToolsScenicMap/saveCategory",scenicMapList:"/life_tools/merchant.LifeToolsScenicMap/mapList",scenicMapDel:"/life_tools/merchant.LifeToolsScenicMap/mapDel",scenicMapStatusSave:"/life_tools/merchant.LifeToolsScenicMap/saveMapStatus",changeCloseStatus:"life_tools/merchant.LifeTools/changeCloseStatus",getAddEditCardMerchantInfo:"/life_tools/merchant.LifeTools/getAddEditCardMerchantInfo"};e["a"]=a},5961:function(t,e,o){"use strict";o.r(e);o("3849"),o("6073"),o("2c5c");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-20 pl-20 pr-20 pb-20 br-10"},[e("h3",[e("a",[t._v(t._s(t.titleName))])]),e("a-card",{attrs:{bordered:!1}},[e("a-form-model",{ref:"ruleForm",attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-model-item",{attrs:{label:"是否开启景区分销：",colon:!1}},[e("a-radio-group",{model:{value:t.formData.status_distribution,callback:function(e){t.$set(t.formData,"status_distribution",e)},expression:"formData.status_distribution"}},[e("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),e("a-radio",{attrs:{value:0}},[t._v(" 不开启")])],1)],1),e("a-form-model-item",{attrs:{label:"是否邀请奖励：",colon:!1}},[e("a-radio-group",{model:{value:t.formData.status_award,callback:function(e){t.$set(t.formData,"status_award",e)},expression:"formData.status_award"}},[e("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),e("a-radio",{attrs:{value:0}},[t._v(" 不开启")])],1)],1),e("a-form-model-item",{attrs:{label:"分享二维码有效时间：",colon:!1,help:"设置为0时，永不过期",labelCol:t.labelCol,wrapperCol:t.wrapperCol1}},[e("a-input-number",{attrs:{"addon-after":"分钟"},model:{value:t.formData.effective_time,callback:function(e){t.$set(t.formData,"effective_time",e)},expression:"formData.effective_time"}}),e("span",{staticStyle:{"margin-left":"10px"}},[t._v("分钟")])],1),e("a-form-model-item",{attrs:{label:"申请分销员审核模式",colon:!1}},[e("a-radio-group",{model:{value:t.formData.distributor_audit,callback:function(e){t.$set(t.formData,"distributor_audit",e)},expression:"formData.distributor_audit"}},[e("a-radio",{attrs:{value:1}},[t._v(" 自动同意审核 ")]),e("a-radio",{attrs:{value:0}},[t._v(" 手动审核")])],1)],1),e("a-form-model-item",{attrs:{label:"景区分享海报设置",colon:!1}},[e("a-button",{attrs:{type:"primary"},on:{click:t.setPoster}},[t._v("设置")])],1),e("a-row",{staticStyle:{"margin-bottom":"20px"}},[e("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:7}},[e("span",[e("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"35px"}},[t._v("*")]),t._v("分享入口图标：")])]),e("a-col",{attrs:{span:10}},[e("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",name:"reply_pic",data:t.updateDataCover,"list-type":"picture-card","file-list":t.fileListCover},on:{preview:t.handlePreviewCover,change:function(e){return t.upLoadChangeCover(e)}}},[0==t.fileListCover.length?e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传图片 ")])],1):t._e()]),e("div",{staticClass:"ant-form-explain"},[t._v("推荐尺寸: 1 : 1 ")]),e("a-modal",{attrs:{visible:t.previewVisibleCover,footer:null},on:{cancel:t.handleCancelCover}},[t.previewImageCover?e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImageCover}}):t._e()])],1)],1),e("a-form-model-item",{attrs:{label:"订单核销或者过期后变成待结算单时间：",colon:!1,help:"核销完或者过期的订单变成待结算单时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol1}},[e("a-input-number",{attrs:{"addon-after":"天"},model:{value:t.formData.update_status_time,callback:function(e){t.$set(t.formData,"update_status_time",e)},expression:"formData.update_status_time"}}),e("span",{staticStyle:{"margin-left":"10px"}},[t._v("天")])],1),e("a-form-model-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"个人分销员申请模板",colon:!1}}),[e("a-row",[e("a-col",{attrs:{span:6}}),e("a-col",{attrs:{span:14}},[e("div",{staticClass:"goods-spec"},[e("a-button",{staticClass:"goods-spec-add",attrs:{type:"primary"},on:{click:function(e){return t.addPrivate("personal_custom_form")}}},[t._v("添加")])],1),t._l(t.formData.personal_custom_form,(function(o,a){return e("div",{key:a,staticClass:"goods-container"},[e("div",{staticClass:"goods-content"},[e("div",{staticClass:"goods-content-box"},[e("div",{staticClass:"goods-content-left"},[e("a-form",{staticStyle:{width:"500px"},attrs:{"label-width":"80px","label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-item",{attrs:{label:"标题名称"}},[e("a-input",{attrs:{placeholder:"请输入标题名称"},model:{value:o.title,callback:function(e){t.$set(o,"title",e)},expression:"attr.title"}})],1),e("a-form-item",{attrs:{label:"排序值"}},[e("a-input",{attrs:{placeholder:"请输入排序值"},model:{value:o.sort,callback:function(e){t.$set(o,"sort",e)},expression:"attr.sort"}})],1),e("a-form-item",{attrs:{label:"选择表单控件："}},[e("a-select",{attrs:{placeholder:"请选择表单控件",options:t.formOptions},model:{value:o.type,callback:function(e){t.$set(o,"type",e)},expression:"attr.type"}})],1),"image"==o.type?e("a-form-item",{attrs:{label:"数量限制："}},[e("a-input",{attrs:{placeholder:"图片最大上传数量"},model:{value:o.image_max_num,callback:function(e){t.$set(o,"image_max_num",e)},expression:"attr.image_max_num"}})],1):t._e(),"select"==o.type?e("a-form-item",{attrs:{label:"枚举值："}},[e("a-input",{attrs:{placeholder:"选择值之间用','隔开"},model:{value:o.content,callback:function(e){t.$set(o,"content",e)},expression:"attr.content"}})],1):t._e(),e("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"是否为必填"}},[e("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否"},on:{change:function(e){return t.areaHandleChange(e,"is_must",o)}},model:{value:o.is_must,callback:function(e){t.$set(o,"is_must",e)},expression:"attr.is_must"}})],1),e("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"状态"}},[e("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:function(e){return t.areaHandleChange(e,"status",o)}},model:{value:o.status,callback:function(e){t.$set(o,"status",e)},expression:"attr.status"}})],1)],1)],1),e("div",{staticClass:"goods-content-right"},[e("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delPrivate(a,"personal_custom_form")}}},[t._v("删除控件")])],1)])])])}))],2)],1)],e("a-form-model-item",{staticStyle:{"font-weight":"bold"},attrs:{label:"企业分销员申请模板",colon:!1}}),[e("a-row",[e("a-col",{attrs:{span:6}}),e("a-col",{attrs:{span:14}},[e("div",{staticClass:"goods-spec"},[e("a-button",{staticClass:"goods-spec-add",attrs:{type:"primary"},on:{click:function(e){return t.addPrivate("business_custom_form")}}},[t._v("添加")])],1),t._l(t.formData.business_custom_form,(function(o,a){return e("div",{key:a,staticClass:"goods-container"},[e("div",{staticClass:"goods-content"},[e("div",{staticClass:"goods-content-box"},[e("div",{staticClass:"goods-content-left"},[e("a-form",{staticStyle:{width:"500px"},attrs:{"label-width":"80px","label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-item",{attrs:{label:"标题名称"}},[e("a-input",{attrs:{placeholder:"请输入标题名称"},model:{value:o.title,callback:function(e){t.$set(o,"title",e)},expression:"attr.title"}})],1),e("a-form-item",{attrs:{label:"排序值"}},[e("a-input",{attrs:{placeholder:"请输入排序值"},model:{value:o.sort,callback:function(e){t.$set(o,"sort",e)},expression:"attr.sort"}})],1),e("a-form-item",{attrs:{label:"选择表单控件："}},[e("a-select",{attrs:{placeholder:"请选择表单控件"},model:{value:o.type,callback:function(e){t.$set(o,"type",e)},expression:"attr.type"}},[e("a-select-option",{attrs:{value:"text"}},[t._v(" 输入框 ")]),e("a-select-option",{attrs:{value:"select"}},[t._v(" 选择框 ")]),e("a-select-option",{attrs:{value:"image"}},[t._v(" 上传图片 ")]),e("a-select-option",{attrs:{value:"idcard"}},[t._v(" 身份证 ")]),e("a-select-option",{attrs:{value:"phone"}},[t._v(" 手机号 ")]),e("a-select-option",{attrs:{value:"email"}},[t._v(" 邮箱 ")])],1)],1),"image"==o.type?e("a-form-item",{attrs:{label:"数量限制："}},[e("a-input",{attrs:{placeholder:"图片最大上传数量"},model:{value:o.image_max_num,callback:function(e){t.$set(o,"image_max_num",e)},expression:"attr.image_max_num"}})],1):t._e(),"select"==o.type?e("a-form-item",{attrs:{label:"枚举值："}},[e("a-input",{attrs:{placeholder:"选择值之间用','隔开"},model:{value:o.content,callback:function(e){t.$set(o,"content",e)},expression:"attr.content"}})],1):t._e(),e("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"是否为必填"}},[e("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否"},on:{change:function(e){return t.areaHandleChange(e,"is_must",o)}},model:{value:o.is_must,callback:function(e){t.$set(o,"is_must",e)},expression:"attr.is_must"}})],1),e("a-form-model-item",{staticStyle:{"font-size":"18px"},attrs:{label:"状态"}},[e("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:function(e){return t.areaHandleChange(e,"status",o)}},model:{value:o.status,callback:function(e){t.$set(o,"status",e)},expression:"attr.status"}})],1)],1)],1),e("div",{staticClass:"goods-content-right"},[e("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delPrivate(a,"business_custom_form")}}},[t._v("删除控件")])],1)])])])}))],2)],1)],e("a-row",{staticStyle:{"margin-bottom":"20px"}},[e("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:6}},[e("span",[t._v("详细描述：")])]),e("a-col",{attrs:{span:15}},[e("rich-text",{attrs:{info:t.formData.description},on:{"update:info":function(e){return t.$set(t.formData,"description",e)}}})],1)],1)],2)],1),e("div",{staticClass:"page-header"},[e("a-button",{staticClass:"ml-20 mt-20 mb-20",attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v(" 保存 ")])],1),e("poster-set",{attrs:{showPosterModal:t.showPosterModal,shareType:t.formData.share_type,statusShowAvatar:t.formData.status_show_avatar,statusShowPrice:t.formData.status_show_price},on:{onClosePosterModal:t.onClosePosterModal}})],1)},i=[],r=o("8ee2"),s=o("4bb5d"),l=o("dff4"),n=o("d34b"),c=(o("c5cb"),o("9ae4"),o("075f"),o("4afa"),o("4d95")),f=o("0d96"),u=o("884f");function d(t){return new Promise((function(e,o){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return e(a.result)},a.onerror=function(t){return o(t)}}))}var p={name:"GroupTicketSetting",components:{posterSet:f["default"],RichText:u["a"]},data:function(){return{updateDataCover:{upload_dir:"merchant/life_tools/tools"},fileList:[],fileListCover:[],previewImageCover:null,previewVisibleCover:!1,showPosterModal:!1,titleName:"分销配置",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:14}},wrapperCol1:{xs:{span:24},sm:{span:4}},formData:{status_distribution:0,status_award:0,distributor_audit:0,update_status_time:"",effective_time:"",share_logo:"",description:"",share_type:1,status_show_avatar:0,status_show_price:0,personal_custom_form:[{title:"个人分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}],business_custom_form:[{title:"企业分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}]},formOptions:[{value:"text",label:"输入框"},{value:"select",label:"选择框"},{value:"image",label:"上传图片"},{value:"idcard",label:"身份证"},{value:"phone",label:"手机号"},{value:"email",label:"邮箱"}]}},mounted:function(){this.getSettingDetail()},watch:{$route:function(){this.getSettingDetail()}},methods:{handlePreviewCover:function(t){var e=this;return Object(n["a"])(Object(l["a"])().mark((function o(){return Object(l["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.url||t.preview){o.next=4;break}return o.next=3,d(t.originFileObj);case 3:t.preview=o.sent;case 4:e.previewImageCover=t.url||t.preview,e.previewVisibleCover=!0;case 6:case"end":return o.stop()}}),o)})))()},upLoadChangeCover:function(t){var e=this,o=Object(s["a"])(t.fileList);o.length?(o=o.slice(-1),o=o.map((function(t){return t.response&&(e.formData.share_logo=t.response.data),t})),this.fileListCover=o):(this.fileListCover=[],this.formData.share_logo="")},handleCancelCover:function(){this.previewVisibleCover=!1},setPoster:function(){this.showPosterModal=!0},onClosePosterModal:function(t){console.log(t,"------------打印item---------------------"),this.showPosterModal=!1,this.formData.share_type=t.share_type,this.formData.status_show_avatar=t.status_show_avatar,this.formData.status_show_price=t.status_show_price,console.log(this.formData,"-------打印-----------------")},areaHandleChange:function(t,e,o){o[e]=t?1:0},delPrivate:function(t,e){"personal_custom_form"==e?this.formData.personal_custom_form.splice(t,1):"business_custom_form"==e&&this.formData.business_custom_form.splice(t,1)},addPrivate:function(t){"personal_custom_form"==t?this.formData.personal_custom_form.push({title:"个人分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}):"business_custom_form"==t&&this.formData.business_custom_form.push({title:"企业分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1})},handleSubmit:function(){var t=this;console.log(this.formData,"formData=====formData");var e=this.formData;return 0==e.personal_custom_form.length?(this.$message.error(this.L("个人分销员模板配置不能为空！")),!1):0==e.business_custom_form.length?(this.$message.error(this.L("企业分销员模板配置不能为空！")),!1):void this.request(c["a"].getDistributionSettingeditSetting,Object(r["a"])({},this.formData)).then((function(e){t.$message.success(t.L("保存成功！"))}))},getSettingDetail:function(){var t=this;this.request(c["a"].getDistributionSettingDataDetail,{}).then((function(e){console.log(e,"-------------获取三级分销配置------------"),e.id&&(t.formData=Object(r["a"])({},e),0==e.update_status_time&&(e.update_status_time=""),t.fileListCover[0]={uid:1,name:"image.png",status:"done",url:e.share_logo,data:e.share_logo}),e.id&&0==e.personal_custom_form.length&&t.formData.personal_custom_form.push({title:"个人分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:1}),e.id&&0==e.business_custom_form.length&&t.formData.business_custom_form.push({title:"企业分销员申请",type:"text",is_must:1,content:"",image_max_num:"",sort:"",status:0}),console.log(t.formData,"res.data==res.data===res.data")}))}}},m=p,h=(o("65b3"),o("0b56")),_=Object(h["a"])(m,a,i,!1,null,"1cec9c7e",null);e["default"]=_.exports},"65b3":function(t,e,o){"use strict";o("9caa")},"9caa":function(t,e,o){},b7f6:function(t,e,o){},d34b:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));o("c5cb");function a(t,e,o,a,i,r,s){try{var l=t[r](s),n=l.value}catch(c){return void o(c)}l.done?e(n):Promise.resolve(n).then(a,i)}function i(t){return function(){var e=this,o=arguments;return new Promise((function(i,r){var s=t.apply(e,o);function l(t){a(s,i,r,l,n,"next",t)}function n(t){a(s,i,r,l,n,"throw",t)}l(void 0)}))}}},dabd:function(t,e,o){t.exports=o.p+"img/background_posterSet.69583888.png"},dbb8:function(t,e,o){"use strict";o("b7f6")},dff4:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));o("6073"),o("2c5c"),o("c5cb"),o("36fa"),o("02bf"),o("a617"),o("70b9"),o("25b2"),o("0245"),o("2e24"),o("1485"),o("08c7"),o("54f8"),o("7177"),o("9ae4");var a=o("2396");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",n=r.toStringTag||"@@toStringTag";function c(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,o){return t[e]=o}}function f(t,e,o,a){var i=e&&e.prototype instanceof p?e:p,r=Object.create(i.prototype),s=new C(a||[]);return r._invoke=function(t,e,o){var a="suspendedStart";return function(i,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===i)throw r;return D()}for(o.method=i,o.arg=r;;){var s=o.delegate;if(s){var l=w(s,o);if(l){if(l===d)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===a)throw a="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a="executing";var n=u(t,e,o);if("normal"===n.type){if(a=o.done?"completed":"suspendedYield",n.arg===d)continue;return{value:n.arg,done:o.done}}"throw"===n.type&&(a="completed",o.method="throw",o.arg=n.arg)}}}(t,o,s),r}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var d={};function p(){}function m(){}function h(){}var _={};c(_,s,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(x([])));v&&v!==e&&o.call(v,s)&&(_=v);var L=h.prototype=p.prototype=Object.create(_);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){function i(r,s,l,n){var c=u(t[r],t,s);if("throw"!==c.type){var f=c.arg,d=f.value;return d&&"object"==Object(a["a"])(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,l,n)}),(function(t){i("throw",t,l,n)})):e.resolve(d).then((function(t){f.value=t,l(f)}),(function(t){return i("throw",t,l,n)}))}n(c.arg)}var r;this._invoke=function(t,o){function a(){return new e((function(e,a){i(t,o,e,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var o=t.iterator[e.method];if(void 0===o){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=u(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function x(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:D}}function D(){return{value:void 0,done:!0}}return m.prototype=h,c(L,"constructor",h),c(h,"constructor",m),m.displayName=c(h,n,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,n,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(y.prototype),c(y.prototype,l,(function(){return this})),t.AsyncIterator=y,t.async=function(e,o,a,i,r){void 0===r&&(r=Promise);var s=new y(f(e,o,a,i),r);return t.isGeneratorFunction(o)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},b(L),c(L,n,"Generator"),c(L,s,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var a=e.pop();if(a in t)return o.value=a,o.done=!1,o}return o.done=!0,o}},t.values=x,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(o,a){return s.type="throw",s.arg=t,e.next=o,a&&(e.method="next",e.arg=void 0),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],s=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var l=o.call(r,"catchLoc"),n=o.call(r,"finallyLoc");if(l&&n){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!n)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),S(o),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var a=o.completion;if("throw"===a.type){var i=a.arg;S(o)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:x(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),d}},t}}}]);