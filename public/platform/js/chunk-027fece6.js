(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-027fece6"],{"0a95":function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAACFUlEQVQ4T42TMWhUQRCG/3nv4UGw0YPEIMYmGIUDfTugopVtkkITC7VQ0UpEUAvBNGKKCDY5sBCLFDYGMYYUxl5QgsjskQsYVCzUQEDlLFTw5N3+soJyhJO41Rb7zfz/zL8CAM65SRG5GO//c0hWvfeXJD5W1VckZ0IIc2maLpA8LyIrAB4BGA4h9CVJciuEsF9EjojIqJntlEql0lMqlVZbrZYj+SnLspWiKAayLPsB4B2A7QC6ACyHELaS7E7T1DebzV7J83w0SZIpM9uc5/k+EXnWaDS6yuVydxv8GcC3EMLBWq32XFUbIYSzoqpVkju894N5nh9LkqRqZltUte8PbGbvVfUjyQve+/vOucci8jrCBmDGzG44564AOOq937sWds69APDAe3/TOTcWfUe4CWDEzOZV9TaAbWY27JzrF5E3APrN7K2qxuF9MLNzqjpEclacc08AZADmAMSKG0hOiMgBAIMA5kkuiMgYyZ8AJgAcBlDEzr0AFgF8ITkF4DuAEwBWAdwFcFpEekhOk9yYJMkZAJsA7P67ZwDXzWxaVcdJLhVFsViv16Ps0B4cVY2Fr5nZQHtIxkXkEMkREXkI4FQIYU+tVnu5LgzgDsmTIhItHI9yzeze2rh27Bxlk/wa1xE9e+9nO+W8E7wMIA7kKYAYjqV/fRARGYrKzGzXb895nl8Wkbie0nq/imTMxVXv/eQv9woSxx7L/TYAAAAASUVORK5CYII="},8261:function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"enter-store-wrap flex justify-between align-center bg-ff"},[a("div",{staticClass:"flex align-center store-name no-wrap"},[a("img",{staticClass:"store-name-img",attrs:{src:t("0a95"),alt:""}}),a("span",{staticClass:"flex-1 no-wrap"},[e._v(e._s(e.storeName||e.L("小猪O2O店铺")))])]),a("div",{staticClass:"flex align-center store-enter no-wrap flex-1 justify-end"},[a("span",{staticClass:"flex-1 no-wrap text-right"},[e._v(e._s(e.content.txt))]),a("a-icon",{staticClass:"store-enter-icon",attrs:{type:"right"}})],1)])},c=[],n=(t("b0c0"),t("9686")),r={props:{content:{type:[String,Object],default:""}},data:function(){return{source:this.$route.query.source||"",storeName:""}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo}},mounted:function(){this.source&&"store"==this.source&&this.getStoreInfo()},methods:{getStoreInfo:function(){var e=this,o={source_id:this.sourceInfo.source_id};this.request(n["a"].getMerchantStoreMsg,o).then((function(o){e.storeName=o.store.name||""}))}}},m=r,s=(t("c3e3"),t("0c7c")),g=Object(s["a"])(m,a,c,!1,null,"20a50112",null);o["default"]=g.exports},"8e78":function(e,o,t){},9686:function(e,o,t){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};o["a"]=a},c3e3:function(e,o,t){"use strict";t("8e78")}}]);