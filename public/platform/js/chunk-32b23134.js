(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b23134","chunk-0731176e"],{"33b6f":function(e,t,o){},"3ea1":function(e,t,o){"use strict";o("33b6f")},"7fe1":function(e,t,o){},9686:function(e,t,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};t["a"]=a},a2f8:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return e.content?t("div",{staticClass:"wrap",class:{borderNone:e.borderNone}},[t("div",{staticClass:"title"},[e._v(e._s(e.L(e.content.title)))]),t("div",{staticClass:"desc"},[e._v(e._s(e.L(e.content.desc)))])]):e._e()},c=[],n={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},i=n,r=(o("f0ca"),o("2877")),s=Object(r["a"])(i,a,c,!1,null,"9947987e",null);t["default"]=s.exports},f0ca:function(e,t,o){"use strict";o("7fe1")},fedd:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("componentDesc",{attrs:{content:e.desc}}),e.formDataDecorate?t("div",{staticClass:"content"},[t("div",{staticClass:"flex justify-between align-center"},[t("div",{staticClass:"flex flex-column"},[t("span",{staticClass:"fs-16 cr-black"},[e._v(" "+e._s(e.L("分类导航列表"))+" ")]),t("span",{staticClass:"cr-66"},[e._v(" "+e._s(e.L("管理频道分类列表信息"))+" ")])]),t("div",[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.setOpt()}}},[e._v("设置")])],1)])]):e._e(),e.visibleModal?t("div",[t("diypageFeedCategory",{attrs:{cat_id:e.cat_id},on:{handleOk:e.handleOk,handleCancel:function(t){e.visibleModal=!1}}})],1):e._e()],1)},c=[],n=o("a2f8"),i=o("9686"),r=o("600f"),s={components:{componentDesc:n["default"],diypageFeedCategory:r["default"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:"店铺feed流配置",desc:"店铺流列表模块为分类页面为固定模块"},formDataDecorate:"",cat_id:"0",visibleModal:!1}},watch:{formContent:{deep:!0,handler:function(e,t){if(e)for(var o in this.formDataDecorate={},e)this.$set(this.formDataDecorate,o,e[o]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(e){this.$emit("updatePageInfo",e)}}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo}},mounted:function(){if(this.formContent)for(var e in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,e,this.formContent[e])},methods:{getOpt:function(){var e=this,t={cat_id:this.cat_id};this.request(i["a"].getFeedCategoryList,t).then((function(t){e.$set(e.formDataDecorate,"list",t.list||[]),e.visibleModal=!1}))},setOpt:function(){this.cat_id=this.sourceInfo.source_id||"0",this.visibleModal=!0},handleOk:function(){this.visibleModal=!1,this.getOpt()}}},m=s,d=(o("3ea1"),o("2877")),g=Object(d["a"])(m,a,c,!1,null,"4aca0ba7",null);t["default"]=g.exports}}]);