(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e93b6d26","chunk-2d21b23c"],{"3de70":function(e,t,o){},"65de":function(e,t,o){},"7d24":function(e,t,o){"use strict";o("b2a3"),o("3de70")},9686:function(e,t,o){"use strict";var n={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList"};t["a"]=n},"9fa9":function(e,t,o){"use strict";o("65de")},bf02:function(e,t,o){"use strict";o.r(t);var n=[{type:"categoryHeader",content:{page_title:"",bg_color:"#ffffff",page_title_color:"#000000",main_color:"#000000",is_fixed:"1",share_title:"",share_desc:"",share_image_wechat:"",share_image_h5:""},rules:[{name:"page_title",type:"required",errmsg:"请输入页面标题"}]},{type:"titleText",content:{title_txt:"",desc_txt:"",text_align:"left",title_font_size:"16",desc_font_size:"12",title_font_weight:"bold",desc_font_weight:"normal",title_color:"#323233",desc_color:"#969799",bg_color:"",show_bottom_line:0},rules:[{name:"title_txt",type:"callBack",errmsg:"标题和描述不能同时为空",callBack:"titleTextValidate"},{name:"desc_txt",type:"callBack",errmsg:"标题和描述不能同时为空",callBack:"titleTextValidate"}]},{type:"hotWords",content:{is_show_title:"2",list:[]}},{type:"swiperNav",content:{style_type:"1",show_column:"1",list:[]},rules:[{name:"list",type:"requiredArray",errmsg:"请添加轮播导航"},{name:"image",type:"requiredArrayEle",errmsg:"请上传轮播导航图片"},{name:"title",type:"requiredArrayEle",errmsg:"请输入轮播导航标题"},{name:"badge_val",type:"callBack",errmsg:"请输入轮播导航角标",callBack:"badgeValValidate"}]},{type:"porcelainArea",content:{style_type:"1",list:[{title:"",sub_title:"",link_url:"",image:"",show_badge:"1",badge_val:""},{title:"",sub_title:"",link_url:"",image:"",show_badge:"1",badge_val:""}]},rules:[{name:"list",type:"requiredArray",errmsg:"请添加瓷片区"},{name:"image",type:"requiredArrayEle",errmsg:"请上传瓷片区图片"},{name:"title",type:"requiredArrayEle",errmsg:"请输入瓷片区标题"},{name:"badge_val",type:"callBack",errmsg:"请输入瓷片区角标",callBack:"badgeValValidate"}]},{type:"swiperPic",content:{list:[{title:"",image:"",link_url:""},{title:"",image:"",link_url:""}],show_distance:"1",duration:0,page_distance:20},rules:[{name:"list",type:"requiredArray",errmsg:"请添加轮播图"},{name:"image",type:"requiredArrayEle",errmsg:"请上传轮播图片"}]},{type:"magicSquare",content:{img_distance:0,show_distance:"1",page_distance:0,density:"2",list:[]},rules:[{name:"list",type:"requiredArray",errmsg:"请选择魔方"},{name:"image",type:"requiredArrayEle",errmsg:"请上传魔方图片"}]},{type:"freeModule",content:{border_radius:"1",show_distance:"1",style_type:"2",bg_type:"1",bg_val:"#ffffff",page_distance:20},rules:[{name:"list",type:"requiredArray",errmsg:"请装修自由区块"},{name:"bg_val",type:"callBack",errmsg:"请上传自由区块背景图",callBack:"bgValValidate"}]},{type:"feedModule",content:{list:[]}}];t["default"]=n},dfae:function(e,t,o){"use strict";var n=o("41b2"),a=o.n(n),s=o("6042"),i=o.n(s),r=o("3593"),c=o("daa3"),d=o("7b05"),l=o("4d91"),p=function(){return{prefixCls:l["a"].string,activeKey:l["a"].oneOfType([l["a"].string,l["a"].number,l["a"].arrayOf(l["a"].oneOfType([l["a"].string,l["a"].number]))]),defaultActiveKey:l["a"].oneOfType([l["a"].string,l["a"].number,l["a"].arrayOf(l["a"].oneOfType([l["a"].string,l["a"].number]))]),accordion:l["a"].bool,destroyInactivePanel:l["a"].bool,bordered:l["a"].bool,expandIcon:l["a"].func,openAnimation:l["a"].object,expandIconPosition:l["a"].oneOf(["left","right"])}},m=function(){return{openAnimation:l["a"].object,prefixCls:l["a"].string,header:l["a"].oneOfType([l["a"].string,l["a"].number,l["a"].node]),headerClass:l["a"].string,showArrow:l["a"].bool,isActive:l["a"].bool,destroyInactivePanel:l["a"].bool,disabled:l["a"].bool,accordion:l["a"].bool,forceRender:l["a"].bool,expandIcon:l["a"].func,extra:l["a"].any,panelKey:l["a"].any}},u={name:"PanelContent",props:{prefixCls:l["a"].string,isActive:l["a"].bool,destroyInactivePanel:l["a"].bool,forceRender:l["a"].bool,role:l["a"].any},data:function(){return{_isActive:void 0}},render:function(){var e,t=arguments[0];if(this._isActive=this.forceRender||this._isActive||this.isActive,!this._isActive)return null;var o=this.$props,n=o.prefixCls,a=o.isActive,s=o.destroyInactivePanel,r=o.forceRender,c=o.role,d=this.$slots,l=(e={},i()(e,n+"-content",!0),i()(e,n+"-content-active",a),e),p=r||a||!s?t("div",{class:n+"-content-box"},[d["default"]]):null;return t("div",{class:l,attrs:{role:c}},[p])}},g={name:"Panel",props:Object(c["s"])(m(),{showArrow:!0,isActive:!1,destroyInactivePanel:!1,headerClass:"",forceRender:!1}),methods:{handleItemClick:function(){this.$emit("itemClick",this.panelKey)},handleKeyPress:function(e){"Enter"!==e.key&&13!==e.keyCode&&13!==e.which||this.handleItemClick()}},render:function(){var e,t,o=arguments[0],n=this.$props,s=n.prefixCls,r=n.headerClass,d=n.isActive,l=n.showArrow,p=n.destroyInactivePanel,m=n.disabled,g=n.openAnimation,h=n.accordion,f=n.forceRender,y=n.expandIcon,v=n.extra,b=this.$slots,x={props:a()({appear:!0,css:!1}),on:a()({},g)},I=(e={},i()(e,s+"-header",!0),i()(e,r,r),e),C=Object(c["g"])(this,"header"),_=(t={},i()(t,s+"-item",!0),i()(t,s+"-item-active",d),i()(t,s+"-item-disabled",m),t),P=o("i",{class:"arrow"});return l&&"function"===typeof y&&(P=y(this.$props)),o("div",{class:_,attrs:{role:"tablist"}},[o("div",{class:I,on:{click:this.handleItemClick.bind(this),keypress:this.handleKeyPress},attrs:{role:h?"tab":"button",tabIndex:m?-1:0,"aria-expanded":d}},[l&&P,C,v&&o("div",{class:s+"-extra"},[v])]),o("transition",x,[o(u,{directives:[{name:"show",value:d}],attrs:{prefixCls:s,isActive:d,destroyInactivePanel:p,forceRender:f,role:h?"tabpanel":null}},[b["default"]])])])}},h=o("9b57"),f=o.n(h),y=o("b488"),v=o("18ce");function b(e,t,o,n){var a=void 0;return Object(v["a"])(e,o,{start:function(){t?(a=e.offsetHeight,e.style.height=0):e.style.height=e.offsetHeight+"px"},active:function(){e.style.height=(t?a:0)+"px"},end:function(){e.style.height="",n()}})}function x(e){return{enter:function(t,o){return b(t,!0,e+"-anim",o)},leave:function(t,o){return b(t,!1,e+"-anim",o)}}}var I=x;function C(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t.map((function(e){return String(e)}))}var _={name:"Collapse",mixins:[y["a"]],model:{prop:"activeKey",event:"change"},props:Object(c["s"])(p(),{prefixCls:"rc-collapse",accordion:!1,destroyInactivePanel:!1}),data:function(){var e=this.$props,t=e.activeKey,o=e.defaultActiveKey,n=e.openAnimation,a=e.prefixCls,s=o;Object(c["r"])(this,"activeKey")&&(s=t);var i=n||I(a);return{currentOpenAnimations:i,stateActiveKey:C(s)}},watch:{activeKey:function(e){this.setState({stateActiveKey:C(e)})},openAnimation:function(e){this.setState({currentOpenAnimations:e})}},methods:{onClickItem:function(e){var t=this.stateActiveKey;if(this.accordion)t=t[0]===e?[]:[e];else{t=[].concat(f()(t));var o=t.indexOf(e),n=o>-1;n?t.splice(o,1):t.push(e)}this.setActiveKey(t)},getNewChild:function(e,t){if(!Object(c["t"])(e)){var o=this.stateActiveKey,n=this.$props,a=n.prefixCls,s=n.accordion,i=n.destroyInactivePanel,r=n.expandIcon,l=e.key||String(t),p=Object(c["l"])(e),m=p.header,u=p.headerClass,g=p.disabled,h=!1;h=s?o[0]===l:o.indexOf(l)>-1;var f={};g||""===g||(f={itemClick:this.onClickItem});var y={key:l,props:{panelKey:l,header:m,headerClass:u,isActive:h,prefixCls:a,destroyInactivePanel:i,openAnimation:this.currentOpenAnimations,accordion:s,expandIcon:r},on:f};return Object(d["a"])(e,y)}},getItems:function(){var e=this,t=[];return this.$slots["default"]&&this.$slots["default"].forEach((function(o,n){t.push(e.getNewChild(o,n))})),t},setActiveKey:function(e){this.setState({stateActiveKey:e}),this.$emit("change",this.accordion?e[0]:e)}},render:function(){var e=arguments[0],t=this.$props,o=t.prefixCls,n=t.accordion,a=i()({},o,!0);return e("div",{class:a,attrs:{role:n?"tablist":null}},[this.getItems()])}};_.Panel=g;var P=_,A=o("0c63"),O=o("4df5"),w={name:"ACollapse",model:{prop:"activeKey",event:"change"},props:Object(c["s"])(p(),{bordered:!0,openAnimation:r["a"],expandIconPosition:"left"}),inject:{configProvider:{default:function(){return O["a"]}}},methods:{renderExpandIcon:function(e,t){var o=this.$createElement,n=Object(c["g"])(this,"expandIcon",e),a=n||o(A["a"],{attrs:{type:"right",rotate:e.isActive?90:void 0}});return Object(c["v"])(Array.isArray(n)?a[0]:a)?Object(d["a"])(a,{class:t+"-arrow"}):a}},render:function(){var e,t=this,o=arguments[0],n=this.prefixCls,s=this.bordered,r=this.expandIconPosition,d=this.configProvider.getPrefixCls,l=d("collapse",n),p=(e={},i()(e,l+"-borderless",!s),i()(e,l+"-icon-position-"+r,!0),e),m={props:a()({},Object(c["k"])(this),{prefixCls:l,expandIcon:function(e){return t.renderExpandIcon(e,l)}}),class:p,on:Object(c["j"])(this)};return o(P,m,[this.$slots["default"]])}},$={name:"ACollapsePanel",props:a()({},m()),inject:{configProvider:{default:function(){return O["a"]}}},render:function(){var e=arguments[0],t=this.prefixCls,o=this.showArrow,n=void 0===o||o,s=this.configProvider.getPrefixCls,r=s("collapse",t),d=i()({},r+"-no-arrow",!n),l={props:a()({},Object(c["k"])(this),{prefixCls:r,extra:Object(c["g"])(this,"extra")}),class:d,on:Object(c["j"])(this)},p=Object(c["g"])(this,"header");return e(P.Panel,l,[this.$slots["default"],p?e("template",{slot:"header"},[p]):null])}},k=o("db14");w.Panel=$,w.install=function(e){e.use(k["a"]),e.component(w.name,w),e.component($.name,$)};t["a"]=w},f7f7:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"customPageComponentsWrap"},[o("div",{staticClass:"flex flex-wrap width-100"},[o("draggable",{staticClass:"width-100",attrs:{options:e.draggableOptions,move:e.draggableMove},on:{end:e.draggableEnd},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}},[o("transition-group",{staticClass:"width-100"},e._l(e.list,(function(t,n){return o("div",{key:n,staticClass:"subItem",attrs:{id:t.type},on:{mouseup:function(o){return e.componentsSelectOpt(t,n)}}},[o("div",{staticClass:"subItemContent flex align-center justify-between pointer text-wrap",class:{active:e.componentId==t.type}},[o("IconFont",{staticClass:"subItemIcon",attrs:{type:t.icon}}),o("span",{staticClass:"subItemLabel text-wrap"},[e._v(e._s(t.label))])],1)])})),0)],1)],1)])},a=[],s=(o("7d24"),o("dfae")),i=(o("d81d"),o("159b"),o("c7cd"),o("a434"),o("8bbf")),r=o.n(i),c=o("5bb2"),d=o("b76a"),l=o.n(d),p=o("9686"),m=o("bf02");r.a.use(s["a"]);var u={components:{IconFont:c["a"],draggable:l.a},data:function(){return{list:[],draggableOptions:{group:{name:"customPage",pull:"clone"},sort:!1},draggedElement:"",relatedIndex:-1}},computed:{componentId:function(){return this.$store.state.customPage.componentId},customIndex:function(){return this.$store.state.customPage.customIndex},componentsList:function(){return this.$store.state.customPage.componentsList},sourceInfo:function(){return this.$store.state.customPage.sourceInfo},catInfo:function(){var e=this.$store.state.customPage.pageInfo,t={cat_id:e.source_id||"",cat_name:e.cat_name||"",cat_fid:e.cat_fid||"0"};return t}},mounted:function(){this.getComponentsList()},methods:{getComponentsList:function(){var e=this,t={source:this.sourceInfo.source||"",source_id:this.sourceInfo.source_id||""};this.request(p["a"].getDiypageModel,t).then((function(t){e.list=t.list||[],e.list.length&&e.initComponentsList()}))},initComponentsList:function(){var e=this,t=!1;m["default"]&&m["default"].length&&this.list.length&&(this.list=this.list.map((function(o,n){return m["default"].forEach((function(a){o.type&&a.type&&o.type==a.type&&(a.content&&e.$set(o,"content",a.content),a.rules&&e.$set(o,"rules",a.rules),"categoryHeader"==o.type&&(t=!0,e.$store.dispatch("updateComponentId","categoryHeader"),e.$store.dispatch("updateCustomIndex",n)),0!=e.catInfo.cat_fid&&(t=!1))})),o})),this.$store.dispatch("updateComponentsList",this.list),t||(this.$store.dispatch("updateComponentId",this.list[0].type),this.$store.dispatch("updateCustomIndex",0)))},componentsSelectOpt:function(e,t){var o=this.$store.state.customPage.pageInfo,n=o&&o.custom?JSON.parse(JSON.stringify(o.custom)):[],a=this.customIndex+1,s=!0;if(("categoryHeader"==e.type||"feedModule"==e.type||"hotWords"==e.type&&this.checkDecorateComponents(e.type))&&(s=!1),s){if("hotWords"==e.type)a=1;else if(-1==this.customIndex)a=n.length-1;else{!this.checkDecorateComponents("hotWords")||0!=this.customIndex&&1!=this.customIndex||(a=0==this.customIndex?this.customIndex+2:this.customIndex+1);var i=this.getComponentInfo(this.componentId);i&&"bottom"==i.fixed&&(a=n.length-1)}n.splice(a,0,e)}else n.forEach((function(t,o){t.type==e.type&&(a=o)}));this.$set(o,"custom",n),this.$store.dispatch("updateComponentId",e.type),this.$store.dispatch("updateCustomIndex",a),this.$store.dispatch("updatePageInfo",o),this.$store.dispatch("updateSubCustomIndex",-1)},draggableMove:function(e,t){var o=e.relatedContext.element,n=e.draggedContext.element;if(o&&(o.fixed||"hotWords"==o.type))return!1;if(n&&n.fixed)return!1;if("hotWords"==n.type&&this.checkDecorateComponents(n.type))return!1;if("hotWords"==n.type&&!this.checkDecorateComponents(n.type)){if(1!=e.relatedContext.index)return!1;var a=this.$store.state.customPage.pageInfo,s=a.custom||[];return s&&s.length&&s.splice(1,0,n),this.$set(a,"custom",s),this.$store.dispatch("updatePageInfo",a),!1}return"freeModule"==o.type?("hotWords"==n.type||"freeModule"==n.type||n.fixed||(this.draggedElement=n,this.relatedIndex=e.relatedContext.index),!1):(this.$store.dispatch("updateCustomIndex",e.relatedContext.index+1),this.$store.dispatch("updateComponentId",n.type),!0)},draggableEnd:function(e){var t=this;if(this.draggedElement&&-1!=this.relatedIndex){var o=this.$store.state.customPage.pageInfo,n=o.custom||[];n&&n.length&&(n=n.map((function(e,o){return"freeModule"==e.type&&o==t.relatedIndex&&e.content&&(e.content.list||(e.content.list=[]),e.content.list.push(t.draggedElement)),e})),this.$set(o,"custom",n),o=JSON.parse(JSON.stringify(o)),this.$store.dispatch("updatePageInfo",o),this.draggedElement="",this.relatedIndex=-1)}},checkDecorateComponents:function(e){var t=!1,o=this.$store.state.customPage.pageInfo,n=o&&o.custom?JSON.parse(JSON.stringify(o.custom)):[];return n.length&&e&&n.forEach((function(o,n){o.type==e&&(t=!0)})),t},getComponentInfo:function(e){var t="";return this.componentsList.length&&this.componentsList.forEach((function(o){o.type==e&&(t=o)})),t}}},g=u,h=(o("9fa9"),o("2877")),f=Object(h["a"])(g,n,a,!1,null,"653b245d",null);t["default"]=f.exports}}]);