(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c283c5a"],{"3c12":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAjklEQVQoU52RsQlCQRBE3wSWIOYGBqbLNWEkWIRNmFmBjVjMNzbQSL6ZqJiNCPo5PqjcbTrz2J1ZRcQJGFEwts+KCBcwnVUppXEVGBH3WrDu1CzjGrj1ti+BBtgBq1zryrG9lXT9iLYlaQYcgCMw/wYubF9eoqSNpOmv7Pk79sDjbZ4Ag39gCwxLmrXdPgF3+i7qpKOYUAAAAABJRU5ErkJggg=="},"4f9b":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"store-header-box relative",style:{height:e.content&&e.content.style_type&&"7"==e.content.style_type?"171px":"204px"}},[o("div",{staticClass:"store-header-bg"},[e.content&&e.content.bg_color&&!e.content.bg_img?o("div",{staticClass:"store-header-bg",style:{"background-color":e.content&&e.content.bg_color?e.content.bg_color:""}}):o("img",{staticClass:"store-header-bg",attrs:{src:e.content.bg_img,alt:""}})]),e.content&&e.content.style_type&&"7"==e.content.style_type?o("div",{staticClass:"first-type-info flex align-center bg-ff"},[e.storeLogo?o("div",{staticClass:"first-type-logo flex justify-center align-center"},[o("img",{attrs:{src:e.storeLogo,alt:""}})]):e._e(),o("div",{staticClass:"flex-1 flex flex-wrap align-center first-info-right justify-between"},[o("div",{staticClass:"first-type-title fw-bold"},[o("span",[e._v(e._s(e.storeName||e.L("老乡鸡（蜀山店）")))])]),o("div",{staticClass:"flex first-info-bottom"},[o("div",{staticClass:"flex-1 flex flex-wrap align-center flex-column justify-center"},[o("span",[e._v("0")]),o("span",[e._v(e._s(e.L("全部商品")))])]),o("div",{staticClass:"flex-1 flex flex-wrap align-center flex-column justify-center"},[e._m(0),o("span",[e._v(e._s(e.L("会员卡")))])]),o("div",{staticClass:"flex-1 flex flex-wrap align-center flex-column justify-center pointer"},[o("span",[e._v("0")]),o("span",[e._v(e._s(e.L("我的订单")))])])])])]):o("div",{staticClass:"second-type-info bg-ff"},[e.storeLogo?o("div",{staticClass:"second-type-logo bg-ff flex align-center justify-center"},[o("img",{attrs:{src:e.storeLogo,alt:""}})]):e._e(),o("div",{staticClass:"flex align-center flex-column justify-center second-type-content"},[o("div",[o("span",{staticClass:"fw-bold",staticStyle:{color:"#333333"}},[e._v(e._s(e.storeName||e.L("老乡鸡（蜀山店）")))])]),o("div",{staticClass:"flex justify-between second-type-content-txt"},[o("span",[e._v(e._s(e.L("全部商品999")))]),o("span",{staticClass:"pl-10 pr-10"},[e._v("|")]),o("span",[e._v(e._s(e.L("上新30")))])])])])])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("img",{attrs:{src:o("3c12"),alt:""}})])}],n=(o("b0c0"),o("9686")),s={props:{content:{type:[String,Object],default:""}},data:function(){return{source:this.$route.query.source||"",storeName:"",storeLogo:""}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo}},mounted:function(){this.source&&"store"==this.source&&this.getStoreInfo()},methods:{getStoreInfo:function(){var e=this,t={source_id:this.sourceInfo.source_id};this.request(n["a"].getMerchantStoreMsg,t).then((function(t){t&&t.store?(e.storeName=t.store.name||"",e.storeLogo=t.store.logo):e.storeLogo=o("fe3d")}))}}},r=s,i=(o("c9dc"),o("0c7c")),g=Object(i["a"])(r,a,c,!1,null,"aec75332",null);t["default"]=g.exports},"664e":function(e,t,o){},9686:function(e,t,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};t["a"]=a},c9dc:function(e,t,o){"use strict";o("664e")},fe3d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAC9ElEQVRIS72XSWgUURCG/3rT44JxgRzEQ2R6jVGJCwEhiHpRvCkRNUSjeNCT6MWA6CUnRVBQxEM8qYjiCgp6MAdBiAf34DbzeplBoyCiSJAYNfNKeiRxnEwmHZP23bpr+d7fr6q7mjJBsAgK5wTRQmYWiHERkVLML5ICrST94BkYi2LkDU9N6CbXz+Z/K6XHIBxTigfi2IQQpEFxGwhLACiSXsAhSDE2z7ONy3FAB3Om3WCTIFwKr4fAILHBMVPX4wRLP9cEVtcmFNze3i5aWnakkkn1Xtf1/nICJhz8Kpebo/3Md4JoAUCfILjJMYx7pfAJB0svOAFgTxHoqWMZS+MHu/55EG35A+K3jmXOjR3sZrOrOM93ACRDGDMO1trGoXGDZS5XRwNqqyLuqjXN22ULR2YXUwJrGeq5Y5q3xl1cUgYrIBAmqiokYzri2Pr+f2m7yMXV09NT3df/4yWA2SWgNscyjo4VHhnsesFpBnaWAph5IEGJlZaVul/GFn5omIgKb8TiFQkspTQgtAwArbwy9qZOnlRfU1PzbdDu+sEppXgXAX0g6uj98vlgQ0PDz0F7JLDrBScZ2F3pcRLRYdvUD4Q+6XRQLzR0/+VPdMEx9aE2GxX8yPdnzgC9A2PaKOf4nVhbYNtzfc/LblfgM6X+xFhn28bN8P6oYOlldwHcEal4GFcd29joutlVTHx3WAzjgWMbyyKBM57fRaDGSGCABzjfWGdZD10/9wHg6mFxmpjvpFKvKyr2PK+GKZEb0xhE6HRMY43rBecYaC2z4UL7VQSnpb9XCDoeUe2Qm0BiOXN+DhOuDGsx4EatZayvCJZucAeE1WMFg3Br1vSq5i+9Xz8CmFISHziWYVYEv/Z9R1PaCL078nY4yRyeo+u+MQGeXOypaUrpup4etarHrDZiQFmwADVbll4YxOJamYzXTAlxMcxfNN7yExCOKkUxjbesgcU+gMPJRFHGC7oJqI9LZdm8jG6SUi6G0M7Sf/yFgcC2X0Ri+0RWSiIZAAAAAElFTkSuQmCC"}}]);