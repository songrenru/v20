(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e8d888c","chunk-6b219d7c","chunk-2d0b3786"],{1811:function(e,t,a){"use strict";a("33e4")},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a("6b75");function o(e){if(Array.isArray(e))return Object(l["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var n=a("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e){return o(e)||i(e)||Object(n["a"])(e)||s()}},"2e5d":function(e,t,a){},"33e4":function(e,t,a){},4031:function(e,t,a){"use strict";var l={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics",orderPrintTicket:"/mall/merchant.MallOrder/printOrder"};t["a"]=l},"6cf3":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-modal",{staticClass:"dialog",attrs:{title:"请选择素材",width:"800px",centered:"",visible:e.visible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("a-tabs",{attrs:{type:"card",defaultActiveKey:"1"},on:{change:e.onTabChange}},[l("a-tab-pane",{key:"1",attrs:{tab:"从素材库选择"}},[l("div",{staticClass:"content scroll_content1"},[e.imageList.length?e._l(e.imageList,(function(t,o){return l("div",{key:"img_"+o,staticClass:"img-list",style:t.selected?"border: 1px solid rgb(24,144,255)":"",on:{click:function(a){return e.chooseImage(t,o)}}},["image"==e.type?l("img",{staticClass:"goods-img",attrs:{src:t.img}}):e._e(),"video"==e.type?l("video",{staticClass:"goods-img",attrs:{src:t.img.url,poster:t.img.image}}):e._e(),l("img",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"item.selected"}],staticClass:"selected",attrs:{src:a("c660")}})])})):[l("div",{staticClass:"no-data"},[e._v("暂无素材")])]],2)]),l("a-tab-pane",{key:"2",attrs:{tab:"上传新素材"}},[l("div",{staticClass:"content scroll_content"},[e.checkedList.length<this.max?[l("a-upload",{attrs:{action:e.action,name:e.uploadName,data:{upload_dir:e.upload_dir,store_id:e.store_id},"list-type":"picture-card","file-list":e.uploadList,multiple:e.multiple,showUploadList:e.showUploadList,accept:e.accept,"before-upload":e.beforeUpload},on:{change:e.handleUploadChange}},[e.showUpload?l("div",[l("a-icon",{staticStyle:{"font-size":"32px",color:"#999"},attrs:{type:e.loading?"loading":"plus"}})],1):e._e()])]:[l("div",{staticClass:"no-data"},[e._v("您最多可选择"+e._s(e.max)+"个"+e._s(e.typeTxt))])]],2)])],1)],1)},o=[],i=a("2909"),n=(a("a9e3"),a("d81d"),a("d3b7"),a("159b"),a("b0c0"),a("fb6a"),a("a434"),a("3ca3"),a("ddb0"),a("4031")),s={name:"ChooseImage",props:{name:{type:String,default:""},max:{type:Number,default:0},upload_dir:{type:String,default:""},store_id:{type:[String,Number],default:""},type:{type:String,default:"image"}},data:function(){return{visible:!1,uploadList:[],imageList:[],checkedList:[],typeTxt:"图片",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",showUploadList:!0,loading:!1}},computed:{showUpload:function(){return 0==this.max||this.uploadList.length+this.checkedList.length<this.max||!this.showUploadList},multiple:function(){return 1!=this.max&&this.checkedList.length!=this.max-1},accept:function(){return"image"==this.type?"image/*":"video/*"}},watch:{type:function(){this.initData()}},mounted:function(){var e=this;this.$nextTick((function(){e.initData()}))},methods:{initData:function(){this.typeTxt="image"==this.type?"图片":"视频",this.action="image"==this.type?"/v20/public/index.php/common/common.UploadFile/uploadPictures":"/v20/public/index.php/common/common.UploadFile/uploadVideo",this.uploadName="image"==this.type?"reply_pic":"reply_mv",this.showUploadList="image"==this.type},openDialog:function(){this.visible=!0,this.init()},getImageList:function(){var e=this,t={type:this.type,dir:this.upload_dir};""!=this.store_id&&(t.store_id=this.store_id),this.request(n["a"].getUploadImages,t).then((function(t){t.length&&(e.imageList=t.map((function(t){return"image"==e.type?{img:t,selected:!1}:{img:{url:t.url,image:t.image,vtime:t.vtime},selected:!1}})))}))},init:function(){var e=this;this.$set(this,"uploadList",[]),this.$set(this,"checkedList",[]),this.$set(this,"imageList",[]),this.$nextTick((function(){e.getImageList()}))},handleOk:function(){var e=this;console.log(this.checkedList);var t=[],a=location.origin;this.checkedList.length&&("image"==this.type?t=Object(i["a"])(this.checkedList):(t.push(this.checkedList[0].url),t.push(this.checkedList[0].image),t.push(this.checkedList[0].vtime))),this.uploadList.length&&this.showUploadList&&this.uploadList.forEach((function(l){l.response&&l.response.data&&("image"==e.type?t.push(a+l.response.data):"video"==e.type&&(t.push(a+l.response.data.url),t.push(l.response.data.image),t.push(l.response.data.vtime)))})),console.log(111111111,t),0!=t.length?(this.$emit("callback",{list:t,name:this.name}),this.handleCancel()):this.$message.error("至少得选择一个素材")},handleCancel:function(){this.visible=!1},onTabChange:function(e){},handleUploadChange:function(e){var t=e.file,a=e.fileList;console.log("----------file",t),console.log("----------fileList",a);var l=t.status,o=t.response;if("uploading"==l&&(this.loading=!0),"done"===l){if(1e3==o.status){var n=this.max-this.checkedList.length;a=a.slice(-n),"video"==this.type&&(this.showUploadList={showPreviewIcon:!1,showRemoveIcon:!0})}else o.msg&&this.$message.error(o.msg),"video"==this.type&&(this.showUploadList=!1);this.loading=!1}"error"==l&&(this.loading=!1,this.$message.error("上传失败")),this.uploadList=Object(i["a"])(a)},chooseImage:function(e,t){if(e.selected){for(var a in e.selected=!1,this.$set(this.imageList,t,e),this.checkedList)if(this.checkedList[a]==e.img)return void this.checkedList.splice(a,1)}else this.checkedList.length==this.max-this.uploadList.length?this.$message.warning("您最多可选择（包含上传）"+this.max+"个"+this.typeTxt):(e.selected=!0,this.checkedList.push(e.img),this.$set(this.imageList,t,e))},beforeUpload:function(e){return Promise.all([this.checkType(e)])},checkType:function(e){var t=this;return new Promise((function(a,l){-1==e.type.indexOf(t.type)?(t.$message.error(t.L("image"==t.type?"您上传的图片文件格式不正确！请重新选择":"您上传的视频文件格式不正确！请重新选择")),l()):(console.log("类型正确"),a())}))}}};var r=s,c=(a("b196"),a("0c7c")),m=Object(c["a"])(r,l,o,!1,null,"7619522d",null);t["a"]=m.exports},9686:function(e,t,a){"use strict";var l={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};t["a"]=l},a2f8:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.content?a("div",{staticClass:"wrap",class:{borderNone:e.borderNone}},[a("div",{staticClass:"title"},[e._v(e._s(e.L(e.content.title)))]),a("div",{staticClass:"desc"},[e._v(e._s(e.L(e.content.desc)))])]):e._e()},o=[],i={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},n=i,s=(a("f0ca"),a("0c7c")),r=Object(s["a"])(n,l,o,!1,null,"9947987e",null);t["default"]=r.exports},b196:function(e,t,a){"use strict";a("2e5d")},c649:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("componentDesc",{attrs:{content:e.desc}}),e.formDataDecorate?a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:e.formDataDecorate,"label-col":e.labelCol,"wrapper-col":e.wrapperCol,labelAlign:"left"}},[a("a-form-model-item",{staticClass:"form-model",attrs:{label:e.L("频道导航样式")}},[a("div",{staticClass:"flex align-center"},[a("span",{staticClass:"ml-20"},[e._v(e._s(e.getLabel(e.styleTypeOptions,e.formDataDecorate.style_type)))]),a("span",{staticClass:"ml-20"},[e._v(e._s("1"==e.formDataDecorate.style_type?e.L("建议尺寸X1 X X2px",{X1:100,X2:100}):e.L("建议尺寸X1 X X2px",{X1:48,X2:48})))])])]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},on:{change:function(t){return e.radioChange(t,"style_type")}},model:{value:e.formDataDecorate.style_type,callback:function(t){e.$set(e.formDataDecorate,"style_type",t)},expression:"formDataDecorate.style_type"}},e._l(e.styleTypeOptions,(function(e){return a("a-radio-button",{key:e.value,attrs:{value:e.value}},[a("IconFont",{attrs:{type:e.icon}})],1)})),1)],1),a("a-form-model-item",{staticClass:"mt-20 form-model",attrs:{label:e.L("频道展示行数")}},[a("div",{staticClass:"flex align-center"},[a("span",{staticClass:"ml-20"},[e._v(e._s(e.getLabel(e.showColumnOptions,e.formDataDecorate.show_column)))])])]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:e.formDataDecorate.show_column,callback:function(t){e.$set(e.formDataDecorate,"show_column",t)},expression:"formDataDecorate.show_column"}},e._l(e.showColumnOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),e._l(e.formDataDecorate.list,(function(t,l){return a("div",{key:l,staticClass:"group-menu-wrap mt-20"},[a("a-icon",{staticClass:"delIcon",attrs:{type:"close-circle"},on:{click:function(t){return e.delOpt(l)}}}),a("div",{staticClass:"flex"},[a("div",{staticClass:"uploadImgWrap",on:{click:function(a){return e.chooseImage(t,l)}}},[e.formDataDecorate.list&&e.formDataDecorate.list[l].image?a("div",{staticClass:"pointer img-wrap"},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.image,alt:""}}),a("span",{staticClass:"img-update"},[e._v(e._s(e.L("更换图片")))])]):a("div",[a("div",{staticClass:"flex align-center justify-center flex-column pointer img-wrap"},[a("a-icon",{attrs:{type:"plus"}}),a("span",[e._v(e._s(e.L("添加图片")))])],1),a("span",{staticClass:"cr-red"},[e._v(e._s(e.L("请选择一张图片")))])])]),a("div",{staticClass:"flex-1 linkUrl"},[a("a-form-model-item",{attrs:{label:e.L("标题"),rules:{required:!0},wrapperCol:{span:19}}},[a("a-input",{attrs:{placeholder:e.L("请输入导航标题"),maxLength:4},model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}})],1),a("a-form-model-item",{attrs:{label:e.L("链接"),wrapperCol:{span:19}}},[a("a-dropdown",{attrs:{getPopupContainer:function(e){return e.parentNode}}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:function(t){return e.handleMenuClick(t,l)}},slot:"overlay"},[e._l(e.linkUrlOptions,(function(t){return["1"!=t.value?a("a-menu-item",{key:t.value},[e._v(" "+e._s(t.label)+" ")]):a("a-sub-menu",{key:t.value,attrs:{title:t.label}},e._l(t.children,(function(t,l){return a("a-menu-item",{key:l},[e._v(e._s(t.label))])})),1)]}))],2),a("a-button",{staticClass:"text-nowrap text-els flex justify-between align-center",staticStyle:{width:"242px"}},[a("span",{staticClass:"text-nowrap text-els flex-1 text-left"},[e._v(e._s("1"==t.link_type?t.link_url_label?t.link_url_label:e.L("跳转页面方式"):t.link_url?t.link_url:e.L("跳转页面方式"))+" ")]),a("a-icon",{attrs:{type:"down"}})],1)],1)],1)],1)]),a("div",[a("a-form-model-item",{attrs:{label:e.L("角标"),labelCol:{span:3},wrapperCol:{span:21}}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[e._v(e._s(1==t.show_badge?e.L("显示"):e.L("不显示")))]),a("a-checkbox",{attrs:{checked:1==t.show_badge},on:{change:function(t){return e.isChange(t,l)}}})],1)]),1==t.show_badge?a("a-form-model-item",{attrs:{label:""}},[a("a-input",{staticStyle:{width:"100px"},attrs:{maxLength:3},model:{value:t.badge_val,callback:function(a){e.$set(t,"badge_val",a)},expression:"item.badge_val"}})],1):e._e()],1)],1)})),a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{block:""},on:{click:function(t){return e.addOpt()}}},[a("a-icon",{attrs:{type:"plus"}}),e._v(e._s(e.L("添加导航")))],1)],1)],2)],1):e._e(),a("choose-image",{ref:"chooseImage",attrs:{max:1,upload_dir:"/decorate/images",type:"image"},on:{callback:e.callback}}),a("a-modal",{attrs:{title:e.L("自定义链接"),visible:e.visible,destroyOnClose:!0,width:"60%",cancelText:e.L("取消"),okText:e.L("确定")},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-row",{staticClass:"mb-20",attrs:{type:"flex",justify:"space-between"}},[a("a-col",{attrs:{span:"4"}},[e._v(" "+e._s(e.L("链接地址"))+"： ")]),a("a-col",{attrs:{span:"20"}},[a("a-input",{attrs:{placeholder:e.L("请输入")},model:{value:e.inputLinkUrl,callback:function(t){e.inputLinkUrl=t},expression:"inputLinkUrl"}})],1)],1)],1)],1)},o=[],i=(a("d3b7"),a("159b"),a("a434"),a("99af"),a("a2f8")),n=a("5bb2"),s=a("6cf3"),r=a("9686"),c={components:{componentDesc:i["default"],IconFont:n["a"],ChooseImage:s["a"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:"频道导航栏列表"},labelCol:{span:5},wrapperCol:{span:18},formDataDecorate:"",styleTypeOptions:[{value:"1",label:this.L("大图"),icon:"iconcatCustomPageBigImg"},{value:"2",label:this.L("小图"),icon:"iconcatCustomPageSmallImg"}],showColumnOptions:[{value:"1",label:this.L("X1行轮播",{X1:1}),icon:"iconCustomPageStyleType8"},{value:"2",label:this.L("X1行轮播",{X1:2}),icon:"iconCustomPageStyleType8"},{value:"3",label:this.L("X1行轮播",{X1:3}),icon:"iconCustomPageStyleType8"},{value:"4",label:this.L("X1行轮播",{X1:4}),icon:"iconCustomPageStyleType8"}],currentIndex:-1,linkUrlOptions:[{value:"1",label:this.L("绑定子分类店铺数据"),children:[]},{value:"2",label:this.L("功能库链接")},{value:"3",label:this.L("自定义链接")}],visible:!1,inputLinkUrl:""}},watch:{formDataDecorate:{deep:!0,handler:function(e){this.$emit("updatePageInfo",e)}}},mounted:function(){if(this.formContent)for(var e in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,e,this.formContent[e]);this.getMerchantCategoryChildList()},methods:{getLabel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="";return e.length&&e.forEach((function(e){e.value==t&&(a=e.label)})),a},addOpt:function(){var e=this.formDataDecorate.list||[];e.push({title:this.L("标题X1",{X1:e.length+1}),link_url:"",image:"",show_badge:"1",badge_val:""}),this.$set(this.formDataDecorate,"list",e)},delOpt:function(e){var t=this.formDataDecorate.list||[];t.length&&t.splice(e,1),this.$set(this.formDataDecorate,"list",t)},chooseImage:function(e,t){this.currentIndex=t,this.$refs.chooseImage.openDialog()},callback:function(e){var t=e.list,a=t.length?t[0]:"",l=this.formDataDecorate.list||[],o=l[this.currentIndex];this.$set(o,"image",a),this.$set(l,this.currentIndex,o),this.$set(this.formDataDecorate,"list",l)},isChange:function(e,t){var a=this.formDataDecorate.list||[],l=a[t];this.$set(l,"show_badge",e.target.checked?"1":"2"),this.$set(a,t,l),this.$set(this.formDataDecorate,"list",a)},getMerchantCategoryChildList:function(){var e=this,t={cat_id:this.$store.state.customPage.sourceInfo.source_id};this.request(r["a"].getMerchantCategoryChildList,t).then((function(t){var a=t.list||[];a.length&&(a.forEach((function(e){e.value=e.cat_url,e.label=e.cat_name})),e.linkUrlOptions.forEach((function(e){"1"==e.value&&(e.children=e.children.concat(a))})))}))},getLinkUrl:function(){var e=this;this.$LinkBases({source:this.$store.state.customPage.sourceInfo.source,type:"h5",source_id:this.$store.state.customPage.sourceInfo.source_id,handleOkBtn:function(t){e.$nextTick((function(){var a=e.formDataDecorate.list||[],l=a[e.currentIndex];e.$set(l,"link_url",t.url),e.$set(a,e.currentIndex,l),e.$set(e.formDataDecorate,"list",a)}))}})},handleOk:function(){var e=this.formDataDecorate.list||[],t=e[this.currentIndex];console.log("this.currentIndex",this.currentIndex),this.$set(t,"link_url",this.inputLinkUrl),this.$set(e,this.currentIndex,t),this.$set(this.formDataDecorate,"list",e),this.handleCancel()},handleCancel:function(){this.visible=!1,this.inputLinkUrl=""},handleMenuClick:function(e,t){this.currentIndex=t;var a=e.keyPath[e.keyPath.length-1],l=this.formDataDecorate.list||[],o=l[this.currentIndex];if("1"==a){var i=e.key,n="".concat(this.linkUrlOptions[0].label,"/").concat(this.linkUrlOptions[0]["children"][i]["label"]),s="".concat(this.linkUrlOptions[0]["children"][i]["value"]);this.$set(o,"link_url",s),this.$set(o,"link_url_label",n)}else"2"==a?this.getLinkUrl():"3"==a&&(this.visible=!0);this.$set(o,"link_type",a),this.$set(l,this.currentIndex,o),this.$set(this.formDataDecorate,"list",l)},radioChange:function(e,t){this.$set(this.formDataDecorate,t,e.target.value)}}},m=c,d=(a("1811"),a("0c7c")),h=Object(d["a"])(m,l,o,!1,null,"0cbfe55d",null);t["default"]=h.exports},c660:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMTg5NkE3M0VBMTExRUI4NUFDODgzODc3Q0QyMDMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkxMTg5NkE4M0VBMTExRUI4NUFDODgzODc3Q0QyMDMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTExODk2QTUzRUExMTFFQjg1QUM4ODM4NzdDRDIwMzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTExODk2QTYzRUExMTFFQjg1QUM4ODM4NzdDRDIwMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BTNpWAAAEdklEQVR42uybXUgUURTH7272EIXSU4Gt4ENFBUmkD0X0Ke2mCEJpPQRFSgXRh0JFVGRRvRQqRi+ZYB9UJhRpDxqaJlJRD0Fg9VLBbg9G9JAEQkH1P+tZma6zu7PNx96Z6cDhjuPsnfv7zz33a+YGhAM2t/n3WiQheAGn2mOyGDzK6eTx6KHAoN1lC9gEXIgkAg/DN8Bn/WNW3+H98F54DwT5qKwAgM5FUs/Aq2x6YMMsSCPEGFNGAMDXIKmDLxHO2Ai8CSK0ZVUAgIcZPCyyY70sRK+jAgB8BpJL8BqhhlFN2A8hxm0XAPDz+IYbhVr2iB4IRPhkmwCAX8o3miPUtM/0YCDCa8sFADy17n3CHVYKEfqNXBg0CN/gIniyPi6z+RrAXdxV4U6rTddVBgx0cz3C3RZJ1U0GUsAvRvIMnutyAWjEuAIivDHcBvCwtt0D8IIZ2pnJcCPYCC8R3rESZkofAh6Je8PtgV4NqBPetbqUIcBdXtjDAoSZcWoIcCPx1MEpbbaMptIrE+sJ2hpQ7wN4wYx1eiGwWvjH1vwVAqj+tDgZdUnhv8A74bTuuMlEPgUIg1hQVkRxe0VlRcH3wctwXG22FiQEiLgA/jl8C8Dfas6Nm8gvohWgQnH4QfhmwH9InFjR+mMakr0m8owzB/ilxYDC8DQq3Q74r5ouOw/JLXiZybzXUQ0IKQz/AF4lwecj6bIAnixEAhQoCt9ROPMnxfx3DfxChreqyy7IUbQGXAP4ztG/h+nLudovsPA+IRVD4ArBS3OUNRwOCyy+lyUhcJtaaPhRHmebsRbA75Hgyxk+3waxLQmBbhT6Hhe2i6vpsn/I5wLyOSLBb0VyE55jU20LBS3IZHJgAoB31GrDX2SYx1kdeJq23rERfnIyFDOZxxntHwB5zyIMG/z9CfzmpAR/UDizFB+fC5idBFWgwHclEaIsQroB1mFce06CP46k2aEGN2pFDSCr0hFhlEVItiZ/ANdclODPUzg42OPErBIgmQhfecb2ULp2N/53SYJvQXLM4S7XkhBIJ8IYi3CfT+3AuVYJPv5+PwtjjqiVNSCVCOMswjYcX0+cn3/513Rc24HDXVkadMUSK0LfhPVvgToBm3TBAvecjeQGvDxL8GMoX15iHNBtww2m1AQNfIhDIlvwk8xBzZxbOCEC/l6EhEaO2V6GizMnRllPbLxRlfSxwilFJl1xZu2Lkce0QiL8YQOI//XaECAbEv6xIe1cIGGNFkxn3WAjQvOqPCgNWJp8IECT9jtjve8DqHX06hviXsBH5OnwFIW8/PT11gOENGyl2VubB+Hb9L4WS7YiRK/KX3oI/iUzTbH/n8kl+xX/oNoDT786GXxKATTtQa2L4WvTbaZIuyrM39o2uBD+tJEtNf8/lzeaI2dYJCY2JahqVLYio/AZCcAi0E6MYjGxa0Q1ozIVZ7JbJGMBWATak1Op2GCJylKZ6X6hjNqAJO2CP7fN6Qjhz42Tkgi5LEKp8NvWWR0x/Ld5Oo0ga4Wi2+f/CDAAp9WWHrao0YwAAAAASUVORK5CYII="},e063:function(e,t,a){},f0ca:function(e,t,a){"use strict";a("e063")}}]);