(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fdb93d0","chunk-7f1c971c"],{"24ac":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-ff wrap"},[e("div",{staticClass:"header-content flex align-center justify-between text-nowrap text-els"},[e("span",{staticClass:"header-title",style:{color:t.content.page_title_color||"#000000"}},[t._v(t._s(t.content.page_title))]),e("div",{staticClass:"search-wrap flex-1 flex align-center",style:{color:0!=t.catInfo.cat_fid?"#8B929B":t.content.bg_color&&"#ffffff"!=t.content.bg_color?t.content.bg_color:"#000000",background:0!=t.catInfo.cat_fid||"#ffffff"==t.content.bg_color?"#F1F2F4":"rgba(255,255,255,0.8)"}},[e("a-icon",{attrs:{type:"search"}}),e("span",{staticClass:"search-txt text-nowrap text-els"},[t._v(t._s(t.L(0!=t.catInfo.cat_fid?"请输入商家名、品类或商圈":"搜索商户名/服务项目")))])],1)])])},a=[],s={props:{content:{type:[String,Object],default:""}},computed:{catInfo:function(){var t=this.$store.state.customPage.pageInfo,e={cat_id:t.source_id||"",cat_name:t.cat_name||"",cat_fid:t.cat_fid||"0"};return e}}},c=s,r=(o("a577"),o("0b56")),i=Object(r["a"])(c,n,a,!1,null,"0df6129d",null);e["default"]=i.exports},4049:function(t,e,o){"use strict";o.r(e);o("19f1"),o("b538");var n=function(){var t=this,e=t._self._c;return t.custom&&t.custom.length?e("div",{staticClass:"customPage-preview-wrap",style:{background:"linear-gradient(180deg, "+t.getPageHeaderColor()+" 30px,#FFFFFF 120px, #FFFFFF 100%)"}},[t.catInfo&&t.catInfo.cat_fid&&Number(t.catInfo.cat_fid)>0?e("categoryHeader"):t._e(),e("draggable",t._b({attrs:{move:t.draggableMove,tag:"div",group:"customPage",filter:".forbid"},on:{change:t.draggableChange},model:{value:t.custom,callback:function(e){t.custom=e},expression:"custom"}},"draggable",t.dragOptions,!1),[e("transition-group",{staticClass:"flex draggable-wrap flex-column",attrs:{type:"transition",name:"flip-list"}},[t._l(t.custom,(function(n,a){return[e("div",{key:a,staticClass:"components-wrap",class:{active:t.componentId==n.type&&t.customIndex==a,"active-dashed":t.currentIndex==a&&t.isCompontentHover,forbid:n.fixed&&0!=t.catInfo.cat_fid,"header-position":t.headerPosition&&1==a&&"hotWords"!=n.type},attrs:{id:t.componentId==n.type&&t.customIndex==a||t.currentIndex==a?"componentId":""},on:{click:function(e){return t.compontentClickOpt(n,a)},mouseenter:function(e){return t.compontentHover(e,n,a)},mouseleave:function(e){return t.compontentLeave()}}},[e(n.type,{tag:"component",attrs:{content:n.content,parentCustomIndex:a}}),t.componentId==n.type&&t.customIndex==a||t.currentIndex==a?e("div",{staticClass:"components-del-wrap"},[e("div",{staticClass:"flex align-center justify-between components-del-content"},[e("span",[t._v(t._s(n.label))]),1==t.getComponentsInfo(n.type).can_del?e("div",{staticClass:"components-del-icon pointer",on:{click:function(e){return e.stopPropagation(),t.delOpt(a)}}},[e("img",{attrs:{src:o("c459"),alt:""}})]):t._e()])]):t._e()],1)]}))],2)],1),t.catInfo&&t.catInfo.cat_fid&&Number(t.catInfo.cat_fid)>0?e("feedModule"):t._e()],1):t._e()},a=[],s=(o("c5cb"),o("08c7"),o("4afa"),o("3335")),c=o.n(s),r=o("8def"),i=o("836f"),d=o("24ac"),u=o("364d"),f=o("d28d"),p=o("0827"),l=o("c32b"),g=o("a8c7"),m=o("5655"),h={draggable:c.a,magicSquare:r["default"],titleText:i["default"],categoryHeader:d["default"],hotWords:u["default"],swiperNav:f["default"],porcelainArea:p["default"],swiperPic:l["default"],feedModule:g["default"],freeModule:m["default"]},v={components:h,data:function(){return{currentIndex:-1,isCompontentHover:!1}},computed:{custom:{get:function(){return this.$store.state.customPage.pageInfo?this.$store.state.customPage.pageInfo.custom:[]},set:function(t){var e=this.$store.state.customPage.pageInfo;this.$set(e,"custom",t),this.$store.dispatch("updatePageInfo",e)}},componentId:function(){return this.getOffsetTop(),this.$store.state.customPage.componentId},customIndex:function(){return this.getOffsetTop(),this.$store.state.customPage.customIndex},dragOptions:function(){return{animation:300,group:"customPage",disabled:!1,ghostClass:"ghost"}},pageType:function(){return this.$store.state.customPage.pageType},showFeedEmpty:function(){var t=!0;return this.custom.forEach((function(e){"feedModule"==e.type&&e.list&&e.list.length&&(t=!1)})),t},catInfo:function(){var t=this.$store.state.customPage.pageInfo,e={cat_id:t.source_id||"",cat_name:t.cat_name||"",cat_fid:t.cat_fid||"0"};return e},headerPosition:function(){var t=0;return this.custom.length&&this.custom.forEach((function(e){"categoryHeader"==e.type&&e.content&&(t=e.content.is_fixed)})),1==t}},methods:{getPageHeaderColor:function(){var t="#ffffff";return this.custom.length&&this.custom.forEach((function(e){"categoryHeader"==e.type&&e.content&&e.content.bg_color&&(t=e.content.bg_color)})),t},compontentClickOpt:function(t,e){var o=this;if(0==this.catInfo.cat_fid||!t.fixed){this.$store.dispatch("updateCustomIndex",e),this.$store.dispatch("updateComponentId",t.type),this.$store.dispatch("updateSubCustomIndex",-1),this.isCompontentHover=!1;var n=this.$store.state.customPage.pageInfo,a=n.custom,s=void 0===a?[]:a;s.length&&(s.forEach((function(t,n){n==e?o.$set(s[e],"isSelected",!0):t.isSelected&&o.$delete(t,"isSelected")})),n.custom=s),this.$store.dispatch("updatePageInfo",n)}},compontentHover:function(t,e,o){0!=this.catInfo.cat_fid&&e.fixed||t&&t.target&&t.target.className&&-1!=t.target.className.indexOf("active")||(this.isCompontentHover=!0,this.currentIndex=o)},compontentLeave:function(){this.isCompontentHover=!1,this.currentIndex=-1},delOpt:function(t){var e=this.custom,o=this.$store.state.customPage.pageInfo;e.splice(t,1),this.$set(o,"custom",e),this.$store.dispatch("updatePageInfo",o),this.$store.dispatch("updateComponentId",""),this.$store.dispatch("updateCustomIndex",-1)},draggableChange:function(t){var e=this,o=this.$store.state.customPage.pageInfo,n=o.custom,a=void 0===n?[]:n;a.length&&a.forEach((function(t,o){t.isSelected&&(e.$store.dispatch("updateCustomIndex",o),e.$store.dispatch("updateComponentId",t.type))}))},draggableMove:function(t,e){console.log("draggableMove-e-预览",t),console.log("draggableMove-originalEvent-预览",e);var o=t.relatedContext.element,n=t.draggedContext.element;return console.log("relatedContext",o.type),console.log("draggedContext",n.type),(!o||!o.fixed&&"hotWords"!=o.type)&&((!n||!n.fixed&&"hotWords"!=n.type)&&(("hotWords"!=n.type||!this.checkDecorateComponents(n.type))&&"freeModule"!=o.type))},getComponentsInfo:function(t){var e=this.$store.state.customPage.componentsList||[],o="";return e.length&&e.forEach((function(e){e.type==t&&(o=e)})),o},checkDecorateComponents:function(t){var e=!1,o=this.$store.state.customPage.pageInfo,n=o&&o.custom?JSON.parse(JSON.stringify(o.custom)):[];return n.length&&t&&n.forEach((function(o,n){o.type==t&&(e=!0)})),e},getOffsetTop:function(){var t=this;this.$nextTick((function(){var e=document.getElementById("componentId");e&&t.$emit("scrollTopOpt",e.offsetTop)}))}}},I=v,_=(o("c127"),o("0b56")),x=Object(_["a"])(I,n,a,!1,null,"3ce76052",null);e["default"]=x.exports},6941:function(t,e,o){},a577:function(t,e,o){"use strict";o("e099")},c127:function(t,e,o){"use strict";o("6941")},e099:function(t,e,o){}}]);