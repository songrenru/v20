(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-784bba4d","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0a310a"],{"011d":function(e,a,t){"use strict";var l={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",getMallBrowse:"/mall/platform.MallBrowse/getMallBrowse",MallBrowseExport:"/mall/platform.MallBrowse/export",exportBrowseTotalExport:"/mall/platform.MallBrowse/exportBrowseTotal",getAuditGoodsList:"/mall/platform.MallPlatformGoods/getAuditGoodsList",auditGoods:"/mall/platform.MallPlatformGoods/auditGoods",loginMerchant:"/mall/platform.MallPlatformGoods/loginMerchant",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};a["a"]=l},"1da1":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("d3b7");function l(e,a,t,l,i,r,o){try{var d=e[r](o),s=d.value}catch(n){return void t(n)}d.done?a(s):Promise.resolve(s).then(l,i)}function i(e){return function(){var a=this,t=arguments;return new Promise((function(i,r){var o=e.apply(a,t);function d(e){l(o,i,r,d,s,"next",e)}function s(e){l(o,i,r,d,s,"throw",e)}d(void 0)}))}}},"4a23":function(e,a,t){"use strict";t.r(a);t("b0c0"),t("4e82");var l=function(){var e=this,a=e._self._c;return a("a-modal",{attrs:{visible:e.visible,width:"780px",height:"600px",closable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"600px"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),a("a-form-item",{attrs:{label:"通用广告"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1),0==e.detail.now_adver.currency?a("a-form-item",{attrs:{label:"所在区域"}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区",defaultValue:[e.detail.now_adver.province_id,e.detail.now_adver.city_id]}})],1):e._e(),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[e.pic_show?a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"mall/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url,rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url', {initialValue:detail.now_adver.url,rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?a("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1),a("a-form-item",{attrs:{label:"小程序中想要打开"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_open_type",{initialValue:e.detail.now_adver.wxapp_open_type}],expression:"['wxapp_open_type', {initialValue:detail.now_adver.wxapp_open_type}]"}],attrs:{disabled:this.edited}},[a("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")])],1)],1),a("a-form-item",{attrs:{label:"打开其他小程序"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_id",{initialValue:e.detail.now_adver.wxapp_id}],expression:"['wxapp_id', {initialValue:detail.now_adver.wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"请选择小程序"}},e._l(e.detail.wxapp_list,(function(t,l){return a("a-select-option",{attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"小程序页面"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_page",{initialValue:e.detail.now_adver.wxapp_page}],expression:"['wxapp_page', {initialValue:detail.now_adver.wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),a("a-divider",[e._v("打开其他APP")]),a("a-form-item",{attrs:{label:"APP中想要打开"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_open_type",{initialValue:e.detail.now_adver.app_open_type}],expression:"['app_open_type', {initialValue:detail.now_adver.app_open_type}]"}],attrs:{disabled:this.edited},on:{change:e.changeAppType}},[a("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")]),a("a-select-option",{attrs:{value:2}},[e._v(" 打开其他APP ")])],1)],1),2==e.detail.now_adver.app_open_type?a("a-form-item",{attrs:{label:"选择苹果APP"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_name",{initialValue:e.detail.now_adver.ios_app_name}],expression:"['ios_app_name', {initialValue:detail.now_adver.ios_app_name}]"}],attrs:{disabled:this.edited,placeholder:"选择苹果APP"}},e._l(e.detail.app_list,(function(t,l){return a("a-select-option",{key:l,attrs:{value:t.url_scheme}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),2==e.detail.now_adver.app_open_type?a("a-form-item",{attrs:{label:"苹果APP下载地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_url",{initialValue:e.detail.now_adver.ios_app_url}],expression:"['ios_app_url', {initialValue:detail.now_adver.ios_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入苹果APP下载地址"}})],1):e._e(),2==e.detail.now_adver.app_open_type?a("a-form-item",{attrs:{label:"安卓APP包名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_name",{initialValue:e.detail.now_adver.android_app_name}],expression:"['android_app_name', {initialValue:detail.now_adver.android_app_name}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP包名"}})],1):e._e(),2==e.detail.now_adver.app_open_type?a("a-form-item",{attrs:{label:"安卓APP下载地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_url",{initialValue:e.detail.now_adver.android_app_url}],expression:"['android_app_url', {initialValue:detail.now_adver.android_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP下载地址"}})],1):e._e(),1==e.detail.now_adver.app_open_type?a("a-form-item",{attrs:{label:"打开其他小程序"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_id",{initialValue:e.detail.now_adver.app_wxapp_id}],expression:"['app_wxapp_id', {initialValue:detail.now_adver.app_wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"选择小程序"}},e._l(e.detail.wxapp_list,(function(t,l){return a("a-select-option",{key:l,attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),1==e.detail.now_adver.app_open_type?a("a-form-item",{attrs:{label:"小程序页面"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_page",{initialValue:e.detail.now_adver.app_wxapp_page}],expression:"['app_wxapp_page', {initialValue:detail.now_adver.app_wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),a("link-bases",{ref:"linkModel"})],1)},i=[],r=t("1da1"),o=(t("a434"),t("96cf"),t("011d")),d=t("c2d1"),s={name:"decorateAdverEdit",components:{LinkBases:d["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",edited:!0,cat_key:"",title:title,areaList:"",detail:"",previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(e,a,t,l,i){var r=this;this.visible=!0,this.edited=a,this.type=t,this.id=e,this.cat_key=l,this.title=i,this.getAllArea(),this.request(o["a"].getEdit,{id:e}).then((function(e){r.removeImage(),r.detail=e,r.detail.now_adver.pic&&(r.fileList=[{uid:"-1",name:"当前图片",status:"done",url:r.detail.now_adver.pic}],r.length=r.fileList.length,r.pic=r.detail.now_adver.pic,r.pic_show=!0)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(o["a"].getAllArea,{type:1}).then((function(a){console.log(a),e.areaList=a}))},handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFields((function(e,t){e||(t.id=a.id,t.cat_key=a.cat_key,t.currency=1==t.currency?1:0,t.pic=a.pic,t.areaList||(t.areaList=[]),console.log(t),a.request(o["a"].addOrEditDecorate,t).then((function(e){a.id>0?(a.$message.success("编辑成功"),a.$emit("update",{cat_key:a.cat_key,title:a.title})):a.$message.success("添加成功"),setTimeout((function(){a.pic="",a.form=a.$form.createForm(a),a.visible=!1,a.$emit("ok",t)}),1500)})))}))},switchComplete:function(e){this.detail.now_adver.currency=e},changeAppType:function(e){this.detail.now_adver.app_open_type=e},handleUploadChange:function(e){var a=e.fileList;this.fileList=a,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.url||e.preview){t.next=4;break}return t.next=3,getBase64(e.originFileObj);case 3:e.preview=t.sent;case 4:a.previewImage=e.url||e.preview,a.previewVisible=!0;case 6:case"end":return t.stop()}}),t)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(a){console.log("handleOk",a),e.url=a.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},n=s,m=(t("67a3"),t("2877")),p=Object(m["a"])(n,l,i,!1,null,null,null);a["default"]=p.exports},"67a3":function(e,a,t){"use strict";t("7d50")},"7d50":function(e,a,t){}}]);