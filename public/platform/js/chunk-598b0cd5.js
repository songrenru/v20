(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-598b0cd5","chunk-2d0b6a79","chunk-2d0b6a79"],{"1da1":function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));o("d3b7");function i(e,t,o,i,l,a,s){try{var r=e[a](s),d=r.value}catch(p){return void o(p)}r.done?t(d):Promise.resolve(d).then(i,l)}function l(e){return function(){var t=this,o=arguments;return new Promise((function(l,a){var s=e.apply(t,o);function r(e){i(s,l,a,r,d,"next",e)}function d(e){i(s,l,a,r,d,"throw",e)}r(void 0)}))}}},9824:function(e,t,o){"use strict";o("f7f9")},e6df:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{visible:e.visible,width:"650px",height:e.height,closable:!1,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[o("div",{style:[{height:e.height},{"overflow-y":"scroll"}]},[o("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[o("a-form-item",{attrs:{label:"名称"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),"wap_life_tools_ticket_slider"!==this.cat_key?o("a-form-item",{attrs:{label:"通用广告"}},[o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1):e._e(),0==e.detail.now_adver.currency?o("a-form-item",{attrs:{label:"所在区域"}},[o("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区",defaultValue:[e.detail.now_adver.province_id,e.detail.now_adver.city_id]}})],1):e._e(),"wap_life_tools_ticket_slider"!==this.cat_key?o("a-form-item",{attrs:{label:"图片",extra:""}},[o("div",{staticClass:"clearfix"},[e.pic_show?o("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?o("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),o("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"mall/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?o("div",[o("a-icon",{attrs:{type:"plus"}}),o("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),o("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[o("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]):e._e(),"wap_life_tools_ticket_slider"!==this.cat_key?o("a-form-item",{attrs:{label:"链接地址"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url,rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url', {initialValue:detail.now_adver.url,rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?o("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1):e._e(),"wap_life_tools_ticket_slider"!=this.cat_key?o("span",[o("a-form-item",{attrs:{label:"小程序中想要打开"}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_open_type",{initialValue:e.detail.now_adver.wxapp_open_type}],expression:"['wxapp_open_type', {initialValue:detail.now_adver.wxapp_open_type}]"}],attrs:{disabled:this.edited}},[o("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")])],1)],1),o("a-form-item",{attrs:{label:"打开其他小程序"}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_id",{initialValue:e.detail.now_adver.wxapp_id}],expression:"['wxapp_id', {initialValue:detail.now_adver.wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"请选择小程序"}},e._l(e.detail.wxapp_list,(function(t,i){return o("a-select-option",{attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),o("a-form-item",{attrs:{label:"小程序页面"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_page",{initialValue:e.detail.now_adver.wxapp_page}],expression:"['wxapp_page', {initialValue:detail.now_adver.wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),o("a-tooltip",{attrs:{trigger:"“hover"}},[o("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),o("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),o("a-divider",[e._v("打开其他APP")]),o("a-form-item",{attrs:{label:"APP中想要打开"}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_open_type",{initialValue:e.detail.now_adver.app_open_type}],expression:"['app_open_type', {initialValue:detail.now_adver.app_open_type}]"}],attrs:{disabled:this.edited},on:{change:e.changeAppType}},[o("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")]),o("a-select-option",{attrs:{value:2}},[e._v(" 打开其他APP ")])],1)],1),2==e.detail.now_adver.app_open_type?o("a-form-item",{attrs:{label:"选择苹果APP"}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_name",{initialValue:e.detail.now_adver.ios_app_name}],expression:"['ios_app_name', {initialValue:detail.now_adver.ios_app_name}]"}],attrs:{disabled:this.edited,placeholder:"选择苹果APP"}},e._l(e.detail.app_list,(function(t,i){return o("a-select-option",{key:i,attrs:{value:t.url_scheme}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),2==e.detail.now_adver.app_open_type?o("a-form-item",{attrs:{label:"苹果APP下载地址"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_url",{initialValue:e.detail.now_adver.ios_app_url}],expression:"['ios_app_url', {initialValue:detail.now_adver.ios_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入苹果APP下载地址"}})],1):e._e(),2==e.detail.now_adver.app_open_type?o("a-form-item",{attrs:{label:"安卓APP包名"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_name",{initialValue:e.detail.now_adver.android_app_name}],expression:"['android_app_name', {initialValue:detail.now_adver.android_app_name}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP包名"}})],1):e._e(),2==e.detail.now_adver.app_open_type?o("a-form-item",{attrs:{label:"安卓APP下载地址"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_url",{initialValue:e.detail.now_adver.android_app_url}],expression:"['android_app_url', {initialValue:detail.now_adver.android_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP下载地址"}})],1):e._e(),1==e.detail.now_adver.app_open_type?o("a-form-item",{attrs:{label:"打开其他小程序"}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_id",{initialValue:e.detail.now_adver.app_wxapp_id}],expression:"['app_wxapp_id', {initialValue:detail.now_adver.app_wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"选择小程序"}},e._l(e.detail.wxapp_list,(function(t,i){return o("a-select-option",{key:i,attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),1==e.detail.now_adver.app_open_type?o("a-form-item",{attrs:{label:"小程序页面"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_page",{initialValue:e.detail.now_adver.app_wxapp_page}],expression:"['app_wxapp_page', {initialValue:detail.now_adver.app_wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),o("a-tooltip",{attrs:{trigger:"“hover"}},[o("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),o("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e()],1):e._e(),o("a-form-item",{attrs:{label:"排序"}},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),o("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),o("a-form-item",{attrs:{label:"状态"}},[o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),o("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),o("link-bases",{ref:"linkModel"})],1)},l=[],a=o("1da1"),s=(o("a434"),o("96cf"),o("f9e9")),r=o("c2d1"),d={name:"decorateAdverEdit",components:{LinkBases:r["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",height:"600px",edited:!0,cat_key:"",title:title,areaList:"",detail:"",previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},confirmLoading:!1}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea(),"wap_life_tools_ticket_slider"==this.cat_key&&(this.height="300px")},methods:{editOne:function(e,t,o,i,l){var a=this;this.visible=!0,this.edited=t,this.type=o,this.id=e,this.cat_key=i,this.title=l,this.getAllArea(),this.request(s["a"].getEdit,{id:e}).then((function(e){"wap_life_tools_ticket_slider"==i&&(a.height="300px"),a.removeImage(),a.detail=e,a.detail.now_adver.pic&&(a.fileList=[{uid:"-1",name:"当前图片",status:"done",url:a.detail.now_adver.pic}],a.length=a.fileList.length,a.pic=a.detail.now_adver.pic,a.pic_show=!0)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(s["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,o){e||(t.confirmLoading=!0,o.id=t.id,o.cat_key=t.cat_key,o.currency=1==o.currency?1:0,o.pic=t.pic,o.areaList||(o.areaList=[]),console.log(o),t.request(s["a"].addOrEditDecorate,o).then((function(e){t.id>0?(t.$message.success("编辑成功"),t.$emit("update",{cat_key:t.cat_key,title:t.title})):t.$message.success("添加成功"),setTimeout((function(){t.pic="",t.confirmLoading=!1,t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",o)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},switchComplete:function(e){this.detail.now_adver.currency=e},changeAppType:function(e){this.detail.now_adver.app_open_type=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(e.url||e.preview){o.next=4;break}return o.next=3,getBase64(e.originFileObj);case 3:e.preview=o.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return o.stop()}}),o)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},p=d,n=(o("9824"),o("2877")),c=Object(n["a"])(p,i,l,!1,null,null,null);t["default"]=c.exports},f7f9:function(e,t,o){},f9e9:function(e,t,o){"use strict";var i={recDisplay:"life_tools/platform.HomeDecorate/recDisplay",getUrlAndRecSwitch:"life_tools/platform.HomeDecorate/getUrlAndRecSwitch",getUrlAndRecSwitchSport:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchSport",getUrlAndRecSwitchTicket:"life_tools/platform.HomeDecorate/getUrlAndRecSwitchTicket",getList:"life_tools/platform.HomeDecorate/getList",getDel:"life_tools/platform.HomeDecorate/getDel",getEdit:"life_tools/platform.HomeDecorate/getEdit",getAllArea:"/life_tools/platform.HomeDecorate/getAllArea",addOrEditDecorate:"life_tools/platform.HomeDecorate/addOrEdit",getRecEdit:"life_tools/platform.HomeDecorate/getRecEdit",getRecList:"life_tools/platform.HomeDecorate/getRecList",delRecAdver:"life_tools/platform.HomeDecorate/delRecAdver",addOrEditRec:"life_tools/platform.HomeDecorate/addOrEditRec",delOne:"/life_tools/platform.HomeDecorate/delOne",getRelatedList:"life_tools/platform.HomeDecorate/getRelatedList",saveRelatedSort:"/life_tools/platform.HomeDecorate/saveRelatedSort",addRelatedCate:"life_tools/platform.HomeDecorate/addRelatedCate",getCateList:"life_tools/platform.HomeDecorate/getCateList",getRelatedInfoList:"life_tools/platform.HomeDecorate/getRelatedInfoList",getInfoList:"life_tools/platform.HomeDecorate/getInfoList",addRelatedInfo:"life_tools/platform.HomeDecorate/addRelatedInfo",delInfo:"/life_tools/platform.HomeDecorate/delInfo",saveRelatedInfoSort:"/life_tools/platform.HomeDecorate/saveRelatedInfoSort",getRelatedCourseList:"life_tools/platform.HomeDecorate/getRelatedCourseList",getCourseList:"life_tools/platform.HomeDecorate/getCourseList",getScenicList:"life_tools/platform.HomeDecorate/getScenicList",addRelatedCourse:"life_tools/platform.HomeDecorate/addRelatedCourse",addRelatedScenic:"life_tools/platform.HomeDecorate/addRelatedScenic",delCourse:"/life_tools/platform.HomeDecorate/delCourse",saveRelatedCourseSort:"/life_tools/platform.HomeDecorate/saveRelatedCourseSort",saveRelatedScenicSort:"/life_tools/platform.HomeDecorate/saveRelatedScenicSort",delScenic:"/life_tools/platform.HomeDecorate/delScenic",getRelatedToolsList:"life_tools/platform.HomeDecorate/getRelatedToolsList",getRelatedScenicList:"life_tools/platform.HomeDecorate/getRelatedScenicList",getToolsList:"life_tools/platform.HomeDecorate/getToolsList",addRelatedTools:"life_tools/platform.HomeDecorate/addRelatedTools",delTools:"/life_tools/platform.HomeDecorate/delTools",saveRelatedToolsSort:"/life_tools/platform.HomeDecorate/saveRelatedToolsSort",setToolsName:"/life_tools/platform.HomeDecorate/setToolsName",getRelatedCompetitionList:"life_tools/platform.HomeDecorate/getRelatedCompetitionList",getCompetitionList:"life_tools/platform.HomeDecorate/getCompetitionList",addRelatedCompetition:"life_tools/platform.HomeDecorate/addRelatedCompetition",delCompetition:"/life_tools/platform.HomeDecorate/delCompetition",saveRelatedCompetitionSort:"/life_tools/platform.HomeDecorate/saveRelatedCompetitionSort",getReplyList:"/life_tools/platform.LifeToolsReply/searchReply",isShowReply:"/life_tools/platform.LifeToolsReply/isShowReply",getReplyDetails:"/life_tools/platform.LifeToolsReply/getReplyDetails",delReply:"/life_tools/platform.LifeToolsReply/delReply",subReply:"/life_tools/platform.LifeToolsReply/subReply",getReplyContent:"/life_tools/platform.LifeToolsReply/getReplyContent",getSportsOrderList:"/life_tools/platform.SportsOrder/getOrderList",exportToolsOrder:"/life_tools/platform.SportsOrder/exportToolsOrder",getSportList:"life_tools/platform.LifeToolsCompetition/getList",getToolCompetitionMsg:"life_tools/platform.LifeToolsCompetition/getToolCompetitionMsg",saveToolCompetition:"life_tools/platform.LifeToolsCompetition/saveToolCompetition",lookCompetitionUser:"life_tools/platform.LifeToolsCompetition/lookCompetitionUser",closeCompetition:"life_tools/platform.LifeToolsCompetition/closeCompetition",exportUserOrder:"life_tools/platform.LifeToolsCompetition/exportUserOrder",delSport:"life_tools/platform.LifeToolsCompetition/delSport",getSportsOrderDetail:"/life_tools/platform.SportsOrder/getOrderDetail",getInformationList:"life_tools/platform.LifeToolsInformation/getInformationList",addEditInformation:"life_tools/platform.LifeToolsInformation/addEditInformation",getInformationDetail:"life_tools/platform.LifeToolsInformation/getInformationDetail",getAllScenic:"life_tools/platform.LifeTools/getAllScenic",delInformation:"life_tools/platform.LifeToolsInformation/delInformation",loginMer:"/life_tools/platform.SportsOrder/loginMer",getCategoryList:"life_tools/platform.LifeToolsCategory/getList",getCategoryDetail:"life_tools/platform.LifeToolsCategory/getDetail",categoryDel:"life_tools/platform.LifeToolsCategory/del",categoryEdit:"life_tools/platform.LifeToolsCategory/addOrEdit",categorySortEdit:"life_tools/platform.LifeToolsCategory/editSort",getLifeToolsList:"life_tools/platform.LifeTools/getList",setLifeToolsAttrs:"life_tools/platform.LifeTools/setLifeToolsAttrs",getHelpNoticeList:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeList",delHelpNotice:"life_tools/platform.LifeToolsHelpNotice/delHelpNotice",getHelpNoticeDetail:"life_tools/platform.LifeToolsHelpNotice/getHelpNoticeDetail",getComplaintAdviceList:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceList",changeComplaintAdviceStatus:"life_tools/platform.LifeToolsComplaintAdvice/changeComplaintAdviceStatus",delComplaintAdvice:"life_tools/platform.LifeToolsComplaintAdvice/delComplaintAdvice",getComplaintAdviceDetail:"life_tools/platform.LifeToolsComplaintAdvice/getComplaintAdviceDetail",changeHelpNoticeStatus:"life_tools/platform.LifeToolsHelpNotice/changeHelpNoticeStatus",getRecGoodsList:"life_tools/platform.IndexRecommend/getRecList",delRecGoods:"life_tools/platform.IndexRecommend/delRecGoods",updateRec:"life_tools/platform.IndexRecommend/updateRec",getGoodsList:"life_tools/platform.IndexRecommend/getGoodsList",addRecGoods:"life_tools/platform.IndexRecommend/addRecGoods",updateRecGoods:"life_tools/platform.IndexRecommend/updateRecGoods",addEditKefu:"life_tools/platform.LifeToolsKefu/addEditKefu",getKefuList:"life_tools/platform.LifeToolsKefu/getKefuList",getKefuDetail:"life_tools/platform.LifeToolsKefu/getKefuDetail",delKefu:"life_tools/platform.LifeToolsKefu/delKefu",getMapConfig:"life_tools/platform.LifeTools/getMapConfig",getAppointList:"life_tools/platform.LifeToolsAppoint/getList",getAppointMsg:"life_tools/platform.LifeToolsAppoint/getToolAppointMsg",saveAppoint:"life_tools/platform.LifeToolsAppoint/saveToolAppoint",lookAppointUser:"life_tools/platform.LifeToolsAppoint/lookAppointUser",closeAppoint:"life_tools/platform.LifeToolsAppoint/closeAppoint",exportAppointUserOrder:"life_tools/platform.LifeToolsAppoint/exportUserOrder",delAppoint:"life_tools/platform.LifeToolsAppoint/delAppoint",getHousesFloorList:"life_tools/platform.LifeToolsHousesList/getHousesFloorList",updateHousesFloorStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorStatus",getHousesFloorMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorMsg",editHouseFloor:"life_tools/platform.LifeToolsHousesList/editHouseFloor",getChildList:"life_tools/platform.LifeToolsHousesList/getChildList",getHousesFloorPlanMsg:"life_tools/platform.LifeToolsHousesList/getHousesFloorPlanMsg",editHouseFloorPlan:"life_tools/platform.LifeToolsHousesList/editHouseFloorPlan",updateHousesFloorPlanStatus:"life_tools/platform.LifeToolsHousesList/updateHousesFloorPlanStatus",getSportsIndexHotRecommond:"/life_tools/platform.HomeDecorate/getSportsIndexHotRecommond",getSportsHotRecommendList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendList",addSportsHotRecommendList:"/life_tools/platform.HomeDecorate/addSportsHotRecommendList",getSportsHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getSportsHotRecommendSelectedList",delSportsHotRecommendList:"/life_tools/platform.HomeDecorate/delSportsHotRecommendList",saveSportsHotRecommendSort:"/life_tools/platform.HomeDecorate/saveSportsHotRecommendSort",getScenicIndexHotRecommond:"/life_tools/platform.HomeDecorate/getScenicIndexHotRecommond",getScenicHotRecommendList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendList",addScenicHotRecommendList:"/life_tools/platform.HomeDecorate/addScenicHotRecommendList",getScenicHotRecommendSelectedList:"/life_tools/platform.HomeDecorate/getScenicHotRecommendSelectedList",delScenicHotRecommendList:"/life_tools/platform.HomeDecorate/delScenicHotRecommendList",saveScenicHotRecommendSort:"/life_tools/platform.HomeDecorate/saveScenicHotRecommendSort",getAtatisticsInfo:"/life_tools/platform.LifeToolsTicketSystem/getAtatisticsInfo",ticketSystemExport:"/life_tools/platform.LifeToolsTicketSystem/ticketSystemExport",orderList:"/life_tools/platform.LifeToolsTicketSystem/orderList",getOrderDetail:"/life_tools/platform.LifeToolsTicketSystem/getOrderDetail",orderVerification:"/life_tools/platform.LifeToolsTicketSystem/orderVerification",orderBack:"/life_tools/platform.LifeToolsTicketSystem/orderBack",getCardOrderList:"/life_tools/platform.CardSystem/getCardOrderList",getCardOrderDetail:"/life_tools/platform.CardSystem/getCardOrderDetail",CardOrderBack:"/life_tools/platform.CardSystem/CardOrderBack",cardSystemExport:"/life_tools/platform.CardSystem/cardSystemExport",lifeToolsAuditList:"/life_tools/platform.LifeTools/lifeToolsAuditList",lifeToolsAudit:"/life_tools/platform.LifeTools/lifeToolsAudit",getAuditTicketList:"/life_tools/platform.LifeToolsTicket/getAuditTicketList",auditTicket:"/life_tools/platform.LifeToolsTicket/auditTicket",getNotAuditNum:"/life_tools/platform.LifeToolsTicket/getNotAuditNum",getAuditAdminList:"/life_tools/platform.LifeToolsCompetition/getAuditAdminList",getMyAuditList:"/life_tools/platform.LifeToolsCompetition/getMyAuditList",getMyAuditCount:"/life_tools/platform.LifeToolsCompetition/getMyAuditCount",getMyAuditInfo:"/life_tools/platform.LifeToolsCompetition/getMyAuditInfo",audit:"/life_tools/platform.LifeToolsCompetition/audit"};t["a"]=i}}]);