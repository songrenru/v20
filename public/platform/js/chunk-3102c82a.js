(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3102c82a"],{"1ecd":function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"contact-store-wrap flex justify-between align-center bg-ff flex-wrap"},[a("div",{staticClass:"flex justify-between align-center",staticStyle:{width:"100%"}},[a("div",{staticClass:"store-name no-wrap"},[a("span",[e._v(e._s(e.storeName||e.L("此处显示店铺名称")))])]),e.content&&e.content.show_phone_icon||e.content&&e.content.show_address_icon?a("div",{staticClass:"flex align-center contactStoreIcon justify-between"},[e.content&&1==e.content.show_address_icon?a("span",{staticClass:"address-icon"},[a("img",{attrs:{src:t("b1e5c"),alt:""}})]):e._e(),e.content&&1==e.content.show_phone_icon?a("span",{staticClass:"phone-icon"},[a("img",{attrs:{src:t("92f8"),alt:""}})]):e._e()]):e._e()]),a("div",{staticClass:"no-wrap address-txt"},[a("span",[e._v(e._s(e.storeAddress||e.L("此处显示详细地址")))])])])},c=[],n=(t("b0c0"),t("9686")),s={props:{content:{type:[String,Object],default:""}},data:function(){return{source:this.$route.query.source||"",storeName:"",storeAddress:""}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo}},mounted:function(){this.source&&"store"==this.source&&this.getStoreInfo()},methods:{getStoreInfo:function(){var e=this,o={source_id:this.sourceInfo.source_id};this.request(n["a"].getMerchantStoreMsg,o).then((function(o){e.storeName=o.store.name||"",e.storeAddress=o.store.adress||""}))}}},r=s,g=(t("27c2"),t("0c7c")),m=Object(g["a"])(r,a,c,!1,null,"4c661626",null);o["default"]=m.exports},"27c2":function(e,o,t){"use strict";t("2eaa")},"2eaa":function(e,o,t){},"92f8":function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACUUlEQVRIS7WVS0iUURTHf6eHk2YtWglCkbZJyBahZlROVOJCqU1QJGTYonLsBRFJuuhhm95lQSgUBFlBVE5kmxKphqRNTos2GQbFuKjVlI2vE3c+Zxy/+Wbmm0V3ee7//O455557j5BiaWPlEnJzdiJSA7oaKJiWhlAZBH3B6Fi3dAV+OSHEbtQG7wIWSwuqR4H8VAdP28OoXiYs7XKn72+idhZYfRuXI/IEpDQD0Latg6hulxv9X2MbcbAeWF/E3Hn9CIXZQWNq/cHE5Aa59WbIWKLgaPqL9H32kdoD1yBhKTdlscCHNp1GtTUpUhFYVwcrSsHfCT9DmZMROSPXXrdJ9PbzPMOOF1VdD7WNFuzzB7h5PDMYwvyJLBP1VR1EpMPRY88pWLPZ2poYh2PVbsCg2iTa7H0G1Dl61O2DrbuNEB5cgnd+d2DoEW2uGgZZ6uhRXAqHr1pb5xpgxFTMzdJvJmLT2J6U8hOdUFgMnwJwu8UN1WgimcEla2H/eQvYfdFtOQw4TSli8dWfhPJqmJyAVw9hZRkMBeFxB0xNOWRhSuHz9iDUps1xfg40XYCiVbNlz7vg5b1kV8Wfvt0SXTx5sLcNSipmrG97rG6xr2i7pXsgSR4CZVus3v7+BXrvwviYXWU9EGNN+aTd9sBs3Vm53tc68wnl6wAitiJmSVYNMjJWIY8Co//324zFFf3okafZR65BVLc5fvRx+I7KXAo85okdcTWa4AqhSLtJP7FwSTMvfoDploWeXUxRg6gZVdYwVUZAPjKHXn5H7qcapv8AH5vZtVBtu7kAAAAASUVORK5CYII="},9686:function(e,o,t){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};o["a"]=a},b1e5c:function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACUUlEQVRIS7WVO2iTURTHfycNNBEftQoJBioViXVQF6k6tJvg0PpYpEUcFFysQtPBoVCHtnRsK+JjsuBixSVpFR1URHTwNWhB0aFaBU1QaxtDYzXNkfsl6SvfZ74M3vHec/73f/7nJTic1f1avcJDC8I+lB0oQctUiAOvgNszWYaTHTJpByFFl0PqC07RiRABVjp9nL9PoQzEq+jjmPxabLsEOHBea5kjKrC9BOCSZzURVHAwcVreFx7mgQMDugnhoUCoHNCCrcJnlIZERMZzipkzpL7ANE/KZbqcgCpjiSrqjSwWcHBAuxG67Jge3grhauh97DIOpScekbOSz/6EXaL21sKVJvB6oOcRXHzhCjw1k2WjBAf1JHBhuUv9Bhg+BH5v7kUVInfh+mtX4G0SPKcjKM3LzQ3bNZXQ3Qhr/XDmHqT+wMg7qFsPb79DJuvwiTBqGBsZapx4PD8OoVUQvgQ/f+esTu2E3SE4cQvSGVvPjwbYFHZlKeCGq1C3DnxeMNHsD8OzL3A0BtOzRd6zroHnslDhKf7+wQS0Ru2BXUlhZLjxBibTYBLbWAPjP6AlCp+SRcCWFKNAUykpjsTg/ocFjZs3g7n7lrb1vOlYbgXzQvK2XIZkXss9IRj7Cql8Mm2g2/7ZIMbBripKVHKuQUq1dLnACr2JdulaGEJTPBVhm6u+cjCyhpCyiw5J/+exmWdgDfoMsbKZK2Pq5YDtoJ+Prl/9AQ+dAu1uVpPCYCJLnwl/sULFOy//ao1TodVapmZVFZYpJBBeotyZUa45LdO/+OPhlYAlnQAAAAAASUVORK5CYII="}}]);