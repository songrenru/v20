(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40dc2b9e","chunk-2d21b23c"],{"30e2":function(e,t,o){},9686:function(e,t,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};t["a"]=a},bf02:function(e,t,o){"use strict";o.r(t);var a=[{type:"categoryHeader",content:{page_title:"",bg_color:"#ffffff",page_title_color:"#000000",main_color:"#000000",is_fixed:"1",share_title:"",share_desc:"",share_image_wechat:"",share_image_h5:""},rules:[{name:"page_title",type:"required",errmsg:"请输入页面标题"}]},{type:"titleText",content:{title_txt:"",desc_txt:"",text_align:"left",title_font_size:"16",desc_font_size:"12",title_font_weight:"bold",desc_font_weight:"normal",title_color:"#323233",desc_color:"#969799",bg_color:"",show_bottom_line:0},rules:[{name:"title_txt",type:"callBack",errmsg:"标题和描述不能同时为空",callBack:"titleTextValidate"},{name:"desc_txt",type:"callBack",errmsg:"标题和描述不能同时为空",callBack:"titleTextValidate"}]},{type:"hotWords",content:{is_show_title:"2",list:[]}},{type:"swiperNav",content:{style_type:"1",show_column:"1",list:[]},rules:[{name:"list",type:"requiredArray",errmsg:"请添加轮播导航"},{name:"image",type:"requiredArrayEle",errmsg:"请上传轮播导航图片"},{name:"title",type:"requiredArrayEle",errmsg:"请输入轮播导航标题"},{name:"badge_val",type:"callBack",errmsg:"请输入轮播导航角标",callBack:"badgeValValidate"}]},{type:"porcelainArea",content:{style_type:"1",list:[{title:"",sub_title:"",link_url:"",image:"",show_badge:"1",badge_val:""},{title:"",sub_title:"",link_url:"",image:"",show_badge:"1",badge_val:""}]},rules:[{name:"list",type:"requiredArray",errmsg:"请添加瓷片区"},{name:"image",type:"requiredArrayEle",errmsg:"请上传瓷片区图片"},{name:"title",type:"requiredArrayEle",errmsg:"请输入瓷片区标题"},{name:"badge_val",type:"callBack",errmsg:"请输入瓷片区角标",callBack:"badgeValValidate"}]},{type:"swiperPic",content:{list:[{title:"",image:"",link_url:""},{title:"",image:"",link_url:""}],show_distance:"1",duration:0,page_distance:20},rules:[{name:"list",type:"requiredArray",errmsg:"请添加轮播图"},{name:"image",type:"requiredArrayEle",errmsg:"请上传轮播图片"}]},{type:"magicSquare",content:{img_distance:0,show_distance:"1",page_distance:0,density:"2",list:[]},rules:[{name:"list",type:"requiredArray",errmsg:"请选择魔方"},{name:"image",type:"requiredArrayEle",errmsg:"请上传魔方图片"}]},{type:"freeModule",content:{border_radius:"1",show_distance:"1",style_type:"2",bg_type:"1",bg_val:"#ffffff",page_distance:20},rules:[{name:"list",type:"requiredArray",errmsg:"请装修自由区块"},{name:"bg_val",type:"callBack",errmsg:"请上传自由区块背景图",callBack:"bgValValidate"}]},{type:"feedModule",content:{list:[]}}];t["default"]=a},bf9a:function(e,t,o){"use strict";o("30e2")},f7f7:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"customPageComponentsWrap"},[o("div",{staticClass:"flex flex-wrap width-100"},[o("draggable",{staticClass:"width-100",attrs:{options:e.draggableOptions,move:e.draggableMove},on:{end:e.draggableEnd},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}},[o("transition-group",{staticClass:"width-100"},e._l(e.list,(function(t,a){return o("div",{key:a,staticClass:"subItem",attrs:{id:t.type},on:{mouseup:function(o){return e.componentsSelectOpt(t,a)}}},[o("div",{staticClass:"subItemContent flex align-center justify-between pointer text-wrap",class:{active:e.componentId==t.type}},[o("IconFont",{staticClass:"subItemIcon",attrs:{type:t.icon}}),o("span",{staticClass:"subItemLabel text-wrap"},[e._v(e._s(t.label))])],1)])})),0)],1)],1)])},n=[],s=(o("7d24"),o("dfae")),r=(o("d81d"),o("d3b7"),o("159b"),o("c7cd"),o("a434"),o("8bbf")),i=o.n(r),c=o("5bb2"),d=o("b76a"),m=o.n(d),l=o("9686"),g=o("bf02");i.a.use(s["a"]);var p={components:{IconFont:c["a"],draggable:m.a},data:function(){return{list:[],draggableOptions:{group:{name:"customPage",pull:"clone"},sort:!1},draggedElement:"",relatedIndex:-1}},computed:{componentId:function(){return this.$store.state.customPage.componentId},customIndex:function(){return this.$store.state.customPage.customIndex},componentsList:function(){return this.$store.state.customPage.componentsList},sourceInfo:function(){return this.$store.state.customPage.sourceInfo},catInfo:function(){var e=this.$store.state.customPage.pageInfo,t={cat_id:e.source_id||"",cat_name:e.cat_name||"",cat_fid:e.cat_fid||"0"};return t}},mounted:function(){this.getComponentsList()},methods:{getComponentsList:function(){var e=this,t={source:this.sourceInfo.source||"",source_id:this.sourceInfo.source_id||""};this.request(l["a"].getDiypageModel,t).then((function(t){e.list=t.list||[],e.list.length&&e.initComponentsList()}))},initComponentsList:function(){var e=this,t=!1;g["default"]&&g["default"].length&&this.list.length&&(this.list=this.list.map((function(o,a){return g["default"].forEach((function(n){o.type&&n.type&&o.type==n.type&&(n.content&&e.$set(o,"content",n.content),n.rules&&e.$set(o,"rules",n.rules),"categoryHeader"==o.type&&(t=!0,e.$store.dispatch("updateComponentId","categoryHeader"),e.$store.dispatch("updateCustomIndex",a)),0!=e.catInfo.cat_fid&&(t=!1))})),o})),this.$store.dispatch("updateComponentsList",this.list),t||(this.$store.dispatch("updateComponentId",this.list[0].type),this.$store.dispatch("updateCustomIndex",0)))},componentsSelectOpt:function(e,t){var o=this.$store.state.customPage.pageInfo,a=o&&o.custom?JSON.parse(JSON.stringify(o.custom)):[],n=this.customIndex+1,s=!0;if(("categoryHeader"==e.type||"feedModule"==e.type||"hotWords"==e.type&&this.checkDecorateComponents(e.type))&&(s=!1),s){if("hotWords"==e.type)n=1;else if(-1==this.customIndex)n=a.length-1;else{!this.checkDecorateComponents("hotWords")||0!=this.customIndex&&1!=this.customIndex||(n=0==this.customIndex?this.customIndex+2:this.customIndex+1);var r=this.getComponentInfo(this.componentId);r&&"bottom"==r.fixed&&(n=a.length-1)}a.splice(n,0,e)}else a.forEach((function(t,o){t.type==e.type&&(n=o)}));this.$set(o,"custom",a),this.$store.dispatch("updateComponentId",e.type),this.$store.dispatch("updateCustomIndex",n),this.$store.dispatch("updatePageInfo",o),this.$store.dispatch("updateSubCustomIndex",-1)},draggableMove:function(e,t){var o=e.relatedContext.element,a=e.draggedContext.element;if(o&&(o.fixed||"hotWords"==o.type))return!1;if(a&&a.fixed)return!1;if("hotWords"==a.type&&this.checkDecorateComponents(a.type))return!1;if("hotWords"==a.type&&!this.checkDecorateComponents(a.type)){if(1!=e.relatedContext.index)return!1;var n=this.$store.state.customPage.pageInfo,s=n.custom||[];return s&&s.length&&s.splice(1,0,a),this.$set(n,"custom",s),this.$store.dispatch("updatePageInfo",n),!1}return"freeModule"==o.type?("hotWords"==a.type||"freeModule"==a.type||a.fixed||(this.draggedElement=a,this.relatedIndex=e.relatedContext.index),!1):(this.$store.dispatch("updateCustomIndex",e.relatedContext.index+1),this.$store.dispatch("updateComponentId",a.type),!0)},draggableEnd:function(e){var t=this;if(this.draggedElement&&-1!=this.relatedIndex){var o=this.$store.state.customPage.pageInfo,a=o.custom||[];a&&a.length&&(a=a.map((function(e,o){return"freeModule"==e.type&&o==t.relatedIndex&&e.content&&(e.content.list||(e.content.list=[]),e.content.list.push(t.draggedElement)),e})),this.$set(o,"custom",a),o=JSON.parse(JSON.stringify(o)),this.$store.dispatch("updatePageInfo",o),this.draggedElement="",this.relatedIndex=-1)}},checkDecorateComponents:function(e){var t=!1,o=this.$store.state.customPage.pageInfo,a=o&&o.custom?JSON.parse(JSON.stringify(o.custom)):[];return a.length&&e&&a.forEach((function(o,a){o.type==e&&(t=!0)})),t},getComponentInfo:function(e){var t="";return this.componentsList.length&&this.componentsList.forEach((function(o){o.type==e&&(t=o)})),t}}},u=p,h=(o("bf9a"),o("0c7c")),f=Object(h["a"])(u,a,n,!1,null,"653b245d",null);t["default"]=f.exports}}]);