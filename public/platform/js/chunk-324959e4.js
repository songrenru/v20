(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-324959e4"],{"3c12":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAjklEQVQoU52RsQlCQRBE3wSWIOYGBqbLNWEkWIRNmFmBjVjMNzbQSL6ZqJiNCPo5PqjcbTrz2J1ZRcQJGFEwts+KCBcwnVUppXEVGBH3WrDu1CzjGrj1ti+BBtgBq1zryrG9lXT9iLYlaQYcgCMw/wYubF9eoqSNpOmv7Pk79sDjbZ4Ag39gCwxLmrXdPgF3+i7qpKOYUAAAAABJRU5ErkJggg=="},"4f9b":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"store-header-box relative",style:{height:e.content&&e.content.style_type&&"7"==e.content.style_type?"171px":"204px"}},[t("div",{staticClass:"store-header-bg"},[e.content&&e.content.bg_color&&!e.content.bg_img?t("div",{staticClass:"store-header-bg",style:{"background-color":e.content&&e.content.bg_color?e.content.bg_color:""}}):t("img",{staticClass:"store-header-bg",attrs:{src:e.content.bg_img,alt:""}})]),e.content&&e.content.style_type&&"7"==e.content.style_type?t("div",{staticClass:"first-type-info flex align-center bg-ff"},[e.storeLogo?t("div",{staticClass:"first-type-logo flex justify-center align-center"},[t("img",{attrs:{src:e.storeLogo,alt:""}})]):e._e(),t("div",{staticClass:"flex-1 flex flex-wrap align-center first-info-right justify-between"},[t("div",{staticClass:"first-type-title fw-bold"},[t("span",[e._v(e._s(e.storeName||e.L("老乡鸡（蜀山店）")))])]),t("div",{staticClass:"flex first-info-bottom"},[t("div",{staticClass:"flex-1 flex flex-wrap align-center flex-column justify-center"},[t("span",[e._v("0")]),t("span",[e._v(e._s(e.L("全部商品")))])]),t("div",{staticClass:"flex-1 flex flex-wrap align-center flex-column justify-center"},[e._m(0),t("span",[e._v(e._s(e.L("会员卡")))])]),t("div",{staticClass:"flex-1 flex flex-wrap align-center flex-column justify-center pointer"},[t("span",[e._v("0")]),t("span",[e._v(e._s(e.L("我的订单")))])])])])]):t("div",{staticClass:"second-type-info bg-ff"},[e.storeLogo?t("div",{staticClass:"second-type-logo bg-ff flex align-center justify-center"},[t("img",{attrs:{src:e.storeLogo,alt:""}})]):e._e(),t("div",{staticClass:"flex align-center flex-column justify-center second-type-content"},[t("div",[t("span",{staticClass:"fw-bold",staticStyle:{color:"#333333"}},[e._v(e._s(e.storeName||e.L("老乡鸡（蜀山店）")))])]),t("div",{staticClass:"flex justify-between second-type-content-txt"},[t("span",[e._v(e._s(e.L("全部商品999")))]),t("span",{staticClass:"pl-10 pr-10"},[e._v("|")]),t("span",[e._v(e._s(e.L("上新30")))])])])])])])},c=[function(){var e=this,t=e._self._c;return t("span",[t("img",{attrs:{src:o("3c12"),alt:""}})])}],n=(o("54f8"),o("9686")),s={props:{content:{type:[String,Object],default:""}},data:function(){return{source:this.$route.query.source||"",storeName:"",storeLogo:""}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo}},mounted:function(){this.source&&"store"==this.source&&this.getStoreInfo()},methods:{getStoreInfo:function(){var e=this,t={source_id:this.sourceInfo.source_id};this.request(n["a"].getMerchantStoreMsg,t).then((function(t){t&&t.store?(e.storeName=t.store.name||"",e.storeLogo=t.store.logo):e.storeLogo=o("fe3d")}))}}},r=s,i=(o("c9dc"),o("0b56")),g=Object(i["a"])(r,a,c,!1,null,"aec75332",null);t["default"]=g.exports},"949d6":function(e,t,o){},9686:function(e,t,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};t["a"]=a},c9dc:function(e,t,o){"use strict";o("949d6")},fe3d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAC9ElEQVRIS72XSWgUURCG/3rT44JxgRzEQ2R6jVGJCwEhiHpRvCkRNUSjeNCT6MWA6CUnRVBQxEM8qYjiCgp6MAdBiAf34DbzeplBoyCiSJAYNfNKeiRxnEwmHZP23bpr+d7fr6q7mjJBsAgK5wTRQmYWiHERkVLML5ICrST94BkYi2LkDU9N6CbXz+Z/K6XHIBxTigfi2IQQpEFxGwhLACiSXsAhSDE2z7ONy3FAB3Om3WCTIFwKr4fAILHBMVPX4wRLP9cEVtcmFNze3i5aWnakkkn1Xtf1/nICJhz8Kpebo/3Md4JoAUCfILjJMYx7pfAJB0svOAFgTxHoqWMZS+MHu/55EG35A+K3jmXOjR3sZrOrOM93ACRDGDMO1trGoXGDZS5XRwNqqyLuqjXN22ULR2YXUwJrGeq5Y5q3xl1cUgYrIBAmqiokYzri2Pr+f2m7yMXV09NT3df/4yWA2SWgNscyjo4VHhnsesFpBnaWAph5IEGJlZaVul/GFn5omIgKb8TiFQkspTQgtAwArbwy9qZOnlRfU1PzbdDu+sEppXgXAX0g6uj98vlgQ0PDz0F7JLDrBScZ2F3pcRLRYdvUD4Q+6XRQLzR0/+VPdMEx9aE2GxX8yPdnzgC9A2PaKOf4nVhbYNtzfc/LblfgM6X+xFhn28bN8P6oYOlldwHcEal4GFcd29joutlVTHx3WAzjgWMbyyKBM57fRaDGSGCABzjfWGdZD10/9wHg6mFxmpjvpFKvKyr2PK+GKZEb0xhE6HRMY43rBecYaC2z4UL7VQSnpb9XCDoeUe2Qm0BiOXN+DhOuDGsx4EatZayvCJZucAeE1WMFg3Br1vSq5i+9Xz8CmFISHziWYVYEv/Z9R1PaCL078nY4yRyeo+u+MQGeXOypaUrpup4etarHrDZiQFmwADVbll4YxOJamYzXTAlxMcxfNN7yExCOKkUxjbesgcU+gMPJRFHGC7oJqI9LZdm8jG6SUi6G0M7Sf/yFgcC2X0Ri+0RWSiIZAAAAAElFTkSuQmCC"}}]);