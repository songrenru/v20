(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-798d76b0","chunk-2d0b3786"],{2247:function(t,e,a){"use strict";a("85c2")},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var s=a("6b75");function i(t){if(Array.isArray(t))return Object(s["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=a("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||o(t)||Object(r["a"])(t)||n()}},"2f03":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-ff homePage"},[a("a-form-model",{attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[a("a-card",{attrs:{title:t.L("头部配置"),bordered:!1}},[a("a-form-model-item",{attrs:{label:t.L("头部风格")}},[a("a-radio-group",{on:{change:t.headStyleChange},model:{value:t.formData.head_style,callback:function(e){t.$set(t.formData,"head_style",e)},expression:"formData.head_style"}},t._l(t.headStyleOptions,(function(e,s){return a("a-radio",{key:s,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1),t.formData.head_style&&"1"==t.formData.head_style?a("div",{staticClass:"flex align-center flex-wrap"},t._l(t.headStyleColorOptions,(function(e){return a("span",{key:e,staticClass:"headColorItem pointer",class:t.formData.head_style_value==e?"active":"",style:[{background:e}],on:{click:function(a){t.formData.head_style_value=e}}})})),0):t._e(),t.formData.head_style&&"2"==t.formData.head_style?a("div",[a("a-upload",{attrs:{name:"reply_pic",action:t.$store.state.customPage.uploadAction,data:t.uploadData,"file-list":t.headStyleFileList},on:{change:function(e){return t.handleUploadChange(e,"headStyleFileList")}}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" "+t._s(t.L("上传图片"))+" ")],1)],1),a("div",{staticClass:"desc"},[t._v(t._s(t.L("建议尺寸：750px * 600px，小于300k")))]),a("div",{staticClass:"desc"},[t._v(" "+t._s("（"+t.L("图片重要信息尽量靠上，未配置会员卡时底部将被截取")+"）")+" ")])],1):t._e()],1),a("a-form-model-item",{attrs:{label:t.L("字体颜色")}},[a("a-radio-group",{model:{value:t.formData.font_color,callback:function(e){t.$set(t.formData,"font_color",e)},expression:"formData.font_color"}},t._l(t.fontColorOptions,(function(e,s){return a("a-radio",{key:s,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1)],1),a("a-form-model-item",{attrs:{label:t.L("会员模块"),help:t.L("模块隐藏：为开通会员不展示开卡提醒；领卡后不展示会员卡折扣")}},[a("a-radio-group",{model:{value:t.formData.vip_display,callback:function(e){t.$set(t.formData,"vip_display",e)},expression:"formData.vip_display"}},t._l(t.vipDisplayOptions,(function(e,s){return a("a-radio",{key:s,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1)],1)],1),a("a-card",{attrs:{title:t.L("会员储值"),bordered:!1}},[a("a-form-model-item",{attrs:{label:""}},[a("a-checkbox",{attrs:{checked:!(!t.formData.vip_stored_value_display||"1"!=t.formData.vip_stored_value_display)},on:{change:t.vipStoredChange}},[t._v(" "+t._s(t.L("会员储值"))+" ")])],1),t.formData.vip_stored_value_display&&"1"==t.formData.vip_stored_value_display?a("a-form-model-item",{attrs:{label:t.L("副标题")}},[a("a-input",{attrs:{placeholder:t.L("请输入")},model:{value:t.formData.vip_store_value_subname,callback:function(e){t.$set(t.formData,"vip_store_value_subname",e)},expression:"formData.vip_store_value_subname"}})],1):t._e()],1),a("a-card",{attrs:{title:t.L("广告位配置"),bordered:!1}},[a("span",{attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.L("最多可上传3张")))]),a("div",{staticClass:"adverWrap"},[t.formData.adver&&t.formData.adver.length?a("div",t._l(t.formData.adver,(function(e,s){return a("div",{key:s,staticClass:"adverItem pointer",on:{click:function(a){return t.adverEdit(e,s)},mouseenter:function(e){return t.adverHover(s)},mouseleave:function(e){return t.adverLeave()}}},[a("div",{staticClass:"adverImgWrap"},[a("img",{attrs:{src:e.image_url,alt:""}})]),t.currentAdverIndex===s?a("a-icon",{staticClass:"closeIcon",attrs:{type:"close-circle"},on:{click:function(e){return e.stopPropagation(),t.adverDel(s)}}}):t._e()],1)})),0):t._e(),t.formData.adver&&t.formData.adver.length<3?a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{block:""},on:{click:function(e){return t.adverAdd()}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加广告位"))+" ")],1)],1):t._e()])]),a("a-card",{attrs:{title:t.L("活动中心"),bordered:!1}},[a("span",{attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.L("长按可拖动调整顺序")))]),a("draggable",{on:{change:function(e){return t.draggableChange("activity")}},model:{value:t.menuList.activity,callback:function(e){t.$set(t.menuList,"activity",e)},expression:"menuList.activity"}},[a("transition-group",t._l(t.menuList.activity,(function(e,s){return a("div",{key:s,staticClass:"flex align-center justify-between mb-10 move"},[a("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.menuChange(e,s,"activity")}}},[t._v(" "+t._s(e.name))]),a("div",{staticClass:"pointer"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.menuEdit(e,s,"activity")}}},[a("a-icon",{attrs:{type:"edit"}})],1),a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.menuDel(s,"activity")}}},[e.type?t._e():a("a-icon",{staticClass:"ml-10",attrs:{type:"delete"}})],1)])],1)})),0)],1),a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{block:""},on:{click:function(e){return t.menuAdd("activity")}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加菜单"))+" ")],1)],1)],1),a("a-card",{attrs:{title:t.L("业务配置"),bordered:!1}},[a("span",{attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.L("长按可拖动调整顺序")))]),a("draggable",{on:{change:function(e){return t.draggableChange("business")}},model:{value:t.menuList.business,callback:function(e){t.$set(t.menuList,"business",e)},expression:"menuList.business"}},[a("transition-group",t._l(t.menuList.business,(function(e,s){return a("div",{key:s,staticClass:"flex align-center justify-between mb-10 move"},[a("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.menuChange(e,s,"business")}}},[t._v(" "+t._s(e.name))]),a("div",{staticClass:"pointer"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.menuEdit(e,s,"business")}}},[a("a-icon",{attrs:{type:"edit"}})],1),a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.menuDel(s,"business")}}},[e.type?t._e():a("a-icon",{staticClass:"ml-10",attrs:{type:"delete"}})],1)])],1)})),0)],1),a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{block:""},on:{click:function(e){return t.menuAdd("business")}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加菜单"))+" ")],1)],1)],1)],1),a("a-modal",{attrs:{title:t.modalTitle,visible:t.visible,destroyOnClose:!0,width:"50%",cancelText:t.L("取消"),okText:t.L("确定")},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-form-model",{attrs:{model:t.subFormData,"label-col":t.labelColModal,"wrapper-col":t.wrapperColModal,labelAlign:"left"}},["adver"==t.modalType?a("div",[a("a-form-model-item",{attrs:{label:t.L("图片展示"),help:t.L("建议尺寸：720px*210px，大小不超过1M"),rules:{required:!0}}},[a("a-upload",{staticClass:"upload-loading",attrs:{name:"reply_pic",action:t.$store.state.customPage.uploadAction,showUploadList:!1,data:t.uploadData,disabled:t.loading},on:{change:function(e){return t.handleUploadChange(e,"adverFileList")}}},[t.subFormData.image_url?a("div",{staticClass:"adverItemImgWrap pointer"},[a("img",{staticClass:"adverItemImg",attrs:{src:t.subFormData.image_url,alt:""}})]):a("div",{staticClass:"emptyAdver flex align-center justify-center mb-10 pointer"},[a("a-icon",{attrs:{type:"plus"}})],1),t.loading?a("div",{staticClass:"loading"},[a("a-icon",{staticClass:"mr-20",attrs:{type:"loading"}}),a("div",{staticClass:"ant-upload-text"},[t._v(t._s(t.L("上传中")))])],1):t._e()])],1)],1):t._e(),"activity"==t.modalType||"business"==t.modalType?a("div",[a("a-form-model-item",{attrs:{label:t.L("菜单名称"),rules:{required:!0}}},[a("a-input",{attrs:{maxLength:"activity"==t.modalType?10:5,placeholder:t.L("请输入")},model:{value:t.subFormData.name,callback:function(e){t.$set(t.subFormData,"name",e)},expression:"subFormData.name"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v(" "+t._s(t.subFormData.name.length)+"/"+t._s("activity"==t.modalType?10:5)+" ")])])],1),a("a-form-model-item",{attrs:{label:t.L("菜单图标"),rules:{required:!0}}},[t.current[t.menuType+"Type"]?a("a-radio-group",{model:{value:t.subFormData.icon_type,callback:function(e){t.$set(t.subFormData,"icon_type",e)},expression:"subFormData.icon_type"}},t._l(t.iconTypeOptions,(function(e,s){return a("a-radio",{key:s,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1):t._e(),"2"==t.subFormData.icon_type?a("div",{staticClass:"flex"},[a("div",{staticClass:"iconImgWrap mr-20"},[t.subFormData.icon_url?a("img",{attrs:{src:t.subFormData.icon_url,alt:""}}):a("img",{staticClass:"emptyImg",attrs:{src:t.$store.state.customPage.defaultImg,alt:""}}),t.loading?a("div",{staticClass:"loading"},[a("a-icon",{attrs:{type:"loading"}})],1):t._e()]),a("a-upload",{attrs:{name:"reply_pic",action:t.$store.state.customPage.uploadAction,showUploadList:!1,data:t.uploadData,disabled:t.loading},on:{change:function(e){return t.handleUploadChange(e,"iconUrl")}}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" "+t._s(t.L("上传图片"))+" ")],1),a("div",{staticClass:"ant-form-explain pt-10"},[t._v(" "+t._s(t.L("建议尺寸"))+"："+t._s("activity"==t.modalType?"25*25":"20*20")+" ")])],1)],1):t._e()],1)],1):t._e(),t.subFormData.type?t._e():a("a-form-model-item",{attrs:{label:t.L("配置链接"),rules:{required:!0}}},[a("div",{staticClass:"flex"},[a("a-textarea",{staticStyle:{"max-height":"100px","overflow-y":"auto",resize:"none"},attrs:{placeholder:t.L("请输入链接/功能库选择"),autoSize:""},model:{value:t.subFormData.link_url,callback:function(e){t.$set(t.subFormData,"link_url",e)},expression:"subFormData.link_url"}}),a("a-button",{staticClass:"ml-20",on:{click:function(e){return t.getLinkUrl()}}},[t._v(t._s(t.L("从功能库选择")))])],1)])],1)],1)],1)},i=[],o=a("2909"),r=(a("d3b7"),a("25f0"),a("fb6a"),a("d81d"),a("b0c0"),a("a434"),a("498a"),a("9686")),n=a("b76a"),l=a.n(n),c={components:{draggable:l.a},data:function(){return{loading:!1,emptyData:["",null,void 0,"null","undefined"],isValidate:!1,formData:{id:"",source:"",source_id:"",type:"",head_style:"1",head_style_value:"#000000",head_style_img:"",font_color:"2",vip_display:"1",vip_stored_value_display:"1",vip_store_value_subname:"",adver:[],activity:[],business:[]},labelCol:{span:4},wrapperCol:{span:20},labelColModal:{span:4},wrapperColModal:{span:18},headStyleOptions:[{label:this.L("系统风格"),value:"1"},{label:this.L("自定义风格"),value:"2"}],headStyleColorOptions:["#000000","#fa4b28","#c71d2b","#f0f0f0","#ffc406","#fedcdc","#0c92fd","#09c0a2"],headStyleFileList:[],fontColorOptions:[{label:this.L("黑色"),value:"1"},{label:this.L("白色"),value:"2"}],vipDisplayOptions:[{label:this.L("展示"),value:"1"},{label:this.L("隐藏"),value:"2"}],iconTypeOptions:[{label:this.L("默认图标"),value:"1"},{label:this.L("自定义图标"),value:"2"}],currentAdverIndex:-1,visible:!1,modalType:"",subFormData:{image_url:"",link_url:"",name:"",icon_type:"2",icon_url:""},current:{activityIndex:-1,activityType:"",businessIndex:-1,businessType:""},menuList:{activity:[{name:this.L("领券中心"),icon_type:"1",icon_url:"",checked:!0,link_url:"https://hf.pigcms.com/packapp/plat/pages/coupon/storeCoupon?mer_id=1",type:"coupon"}],business:[{name:this.L("我的订单"),icon_type:"1",icon_url:"",checked:!0,link_url:"https://hf.pigcms.com/packapp/plat/pages/my/my_order?state=0",type:"order"},{name:this.L("商家客服"),icon_type:"1",icon_url:"",checked:!0,link_url:"https://hf.pigcms.com/packapp/im/index.html#/chatInterfacefrom_user=user_39353&to_user=store_2_51&relation=user2store&from=meal",type:"customerService"}]},menuType:"",head_style_img:""}},computed:{modalTitle:function(){var t="";if("adver"==this.modalType)t=-1!=this.currentAdverIndex?this.L("编辑广告图"):this.L("添加广告图");else if("activity"==this.modalType||"business"==this.modalType){var e=this.current[this.menuType+"Index"];t=-1!=e?this.L("编辑菜单"):this.L("添加菜单")}return t},componentId:function(){return this.$store.state.customPage.componentId},sourceInfo:function(){return this.$store.state.customPage.sourceInfo},uploadData:function(){return{upload_dir:"/decorate/images",source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,is_decorate:1}}},watch:{formData:{deep:!0,handler:function(t){this.updatePageInfo()}}},mounted:function(){this.getpersonalDec()},methods:{getpersonalDec:function(){var t=this,e={id:"",source:this.sourceInfo.source,source_id:this.sourceInfo.source_id};this.request(r["a"].getpersonalDec,e).then((function(e){e&&"[]"!=JSON.stringify(e)&&"{}"!=JSON.stringify(e)&&(t.formData=e,t.formData.head_style_value&&2==t.formData.head_style&&(t.head_style_img=t.formData.head_style_value)),t.formData&&t.initFormData(),t.initMenu(),t.updatePageInfo()}))},initFormData:function(){this.$set(this.formData,"font_color",this.formData.font_color.toString()),this.$set(this.formData,"head_style",this.formData.head_style.toString()),this.$set(this.formData,"vip_display",this.formData.vip_display.toString()),"2"==this.formData.head_style&&this.$set(this.formData,"head_style_img",this.formData.head_style_value)},updateFormData:function(){var t=this.menuList[this.menuType]||[];this.$set(this.formData,this.menuType,t)},handleOk:function(){"adver"==this.modalType?this.adverSubmit():"activity"!=this.modalType&&"business"!=this.modalType||this.menuSubmit(),this.isValidate&&this.handleCancel()},handleCancel:function(){this.visible=!1,this.modalType="",this.currentAdverIndex=-1,this.$set(this.current,"activityIndex",-1),this.$set(this.current,"activityType",""),this.$set(this.current,"businessIndex",-1),this.$set(this.current,"businessType",""),this.menuType="",this.isValidate=!1,this.subFormData={image_url:"",link_url:"",name:"",icon_type:"2",icon_url:""},this.updatePageInfo(),this.loading=!1},updatePageInfo:function(){this.$store.dispatch("updatePageInfo",this.formData)},headStyleChange:function(t){"1"==t.target.value&&this.$set(this.formData,"head_style_value",this.headStyleColorOptions[0])},handleUploadChange:function(t,e){var a=this;this.loading=!0;var s=Object(o["a"])(t.fileList);s=s.slice(-1),s=s.map((function(t){if("done"===t.status&&"1000"==t.response.status){var s=t.response.data;"headStyleFileList"==e?(console.log("imageUrl",s),a.$set(a.formData,"head_style_img",s)):"adverFileList"==e?a.$set(a.subFormData,"image_url",s):"iconUrl"==e&&a.$set(a.subFormData,"icon_url",s),a.loading=!1}return t})),"headStyleFileList"==e&&(s.length||this.$set(this.formData,"head_style_img",this.head_style_img),this[e]=s),"done"===t.file.status?this.loading=!1:"error"===t.file.status&&(this.$message.error(this.L("X1上传失败。",{X1:t.file.name})),this.loading=!1)},vipStoredChange:function(t){this.$set(this.formData,"vip_stored_value_display",t.target.checked?"1":"0")},adverAdd:function(){this.currentAdverIndex=-1,this.$set(this.subFormData,"image_url",""),this.$set(this.subFormData,"link_url",""),this.visible=!0,this.modalType="adver",this.loading=!1},adverEdit:function(t,e){this.currentAdverIndex=e,this.$set(this.subFormData,"image_url",t.image_url),this.$set(this.subFormData,"link_url",t.link_url),this.visible=!0,this.modalType="adver",this.loading=!1},adverHover:function(t){this.currentAdverIndex=t},adverLeave:function(){this.visible||(this.currentAdverIndex=-1)},adverDel:function(t){var e=this.formData.adver;e.splice(t,1),this.$set(this.formData,"adver",e),this.currentAdverIndex=-1},adverSubmit:function(){var t=this;if(-1==this.emptyData.indexOf(this.subFormData.image_url))if(-1==this.emptyData.indexOf(this.subFormData.link_url)){var e=this.formData.adver||[],a={image_url:this.subFormData.image_url,link_url:this.subFormData.link_url};e.length&&-1!=this.currentAdverIndex?e=e.map((function(e,a){return a==t.currentAdverIndex&&(e.image_url=t.subFormData.image_url,e.link_url=t.subFormData.link_url),e})):e.push(a),this.$set(this.formData,"adver",e),this.isValidate=!0}else this.$message.error(this.L("请配置广告位链接"));else this.$message.error(this.L("请上传广告图片"))},menuChange:function(t,e,a){this.menuType=a;var s=this.menuList[a]||[];s.length&&(this.menuList[a]=this.menuList[a].map((function(a,s){return s===e&&(a.checked=t.target.checked),a}))),this.$set(this.menuList,a,s),this.updateFormData()},initMenu:function(){var t=this.formData&&this.formData.id?this.formData.activity:this.menuList["activity"];this.$set(this.menuList,"activity",t),this.$set(this.formData,"activity",t);var e=this.formData&&this.formData.id?this.formData.business:this.menuList["business"];this.$set(this.menuList,"business",e),this.$set(this.formData,"business",e)},menuAdd:function(t){this.visible=!0,this.$set(this.subFormData,"icon_type","2"),this.$set(this.subFormData,"name",""),this.$set(this.subFormData,"icon_url",""),this.$set(this.subFormData,"link_url",""),this.modalType=t,this.menuType=t,this.loading=!1},menuEdit:function(t,e,a){for(var s in this.menuType=a,this.$set(this.current,a+"Index",e),this.$set(this.current,a+"Type",t.type||""),t)this.$set(this.subFormData,s,t[s]);this.visible=!0,this.modalType=a,this.loading=!1},menuDel:function(t,e){this.menuType=e;var a=this.formData[e];a.splice(t,1),this.$set(this.menuList,e,a),this.$set(this.formData,e,a),this.$set(this.current,e+"Index",-1)},menuSubmit:function(){var t=this;if(-1==this.emptyData.indexOf(this.subFormData.name.trim()))if("2"!=this.subFormData.icon_type||-1==this.emptyData.indexOf(this.subFormData.icon_url))if(-1==this.emptyData.indexOf(this.subFormData.link_url)){var e=this.menuList[this.menuType]||[],a=this.current[this.menuType+"Index"];e.length&&-1!=a?e=e.map((function(e,s){return s==a&&(e=t.subFormData),e})):e.push(this.subFormData),this.menuList[this.menuType].length&&(e=e.map((function(t){return t.checked=void 0==t.checked||t.checked,t}))),this.$set(this.menuList,this.menuType,JSON.parse(JSON.stringify(e))),this.updateFormData(),this.isValidate=!0}else this.$message.error(this.L("请配置菜单链接"));else this.$message.error(this.L("请上传菜单图标"));else this.$message.error(this.L("请输入菜单名称"))},draggableChange:function(t){this.menuType=t,this.updateFormData()},getLinkUrl:function(){var t=this;this.$LinkBases({source:this.sourceInfo.source,type:"h5",source_id:this.sourceInfo.source_id,handleOkBtn:function(e){t.$nextTick((function(){t.$set(t.subFormData,"link_url",e.url)}))}})}}},u=c,d=(a("2247"),a("2877")),m=Object(d["a"])(u,s,i,!1,null,"31962f8b",null);e["default"]=m.exports},"85c2":function(t,e,a){},9686:function(t,e,a){"use strict";var s={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList"};e["a"]=s}}]);