(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f378e2"],{5051:function(t,e,a){"use strict";var s={getCatList:"/new_marketing/merchant.MarketingPackage/getCatList",getCatStoreList:"/new_marketing/merchant.MarketingPackage/getCatSearchList",getMealList:"/new_marketing/merchant.MarketingPackage/getSearchList",getClassifyDetail:"/new_marketing/merchant.MarketingPackage/getCatDetail",getMealDetail:"/new_marketing/merchant.MarketingPackage/getpackageDetail",getPrice:"/new_marketing/merchant.MarketingPackage/getDiscountPayPrice",getPayType:"/new_marketing/merchant.Order/pay_check",checkOrder:"/new_marketing/merchant.Order/pay",checkOrderPayOk:"/new_marketing/merchant.Order/searchPayStatus",getOrderList:"/new_marketing/merchant.order/getOrderList",getStoreUserdDetail:"/new_marketing/merchant.store/getStoreUserdDetail",getOrderDetail:"/new_marketing/merchant.order/getOrderDetail",getCategoryStoreDetail:"/new_marketing/merchant.store/getCategoryStoreDetail",getCategoryStoreList:"/new_marketing/merchant.store/getCategoryStoreList",getRenewPayInfo:"/new_marketing/merchant.order/getPayInfo",savePayInfo:"/new_marketing/merchant.order/savePayInfo",goPay:"/merchant/merchant.pay/goPay"};e["a"]=s},8519:function(t,e,a){"use strict";a("a0e66")},8633:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"bread-crumb bg-ff mb-10"},[a("a-breadcrumb",[a("a-breadcrumb-item",[a("span",{staticClass:"pointer",on:{click:function(e){return t.$router.replace({path:"/merchant/merchant.iframe/menu_999999"})}}},[t._v("首页")])]),a("a-breadcrumb-item",[a("span",{staticClass:"pointer",on:{click:function(e){return t.$router.replace({path:"/new_marketing/merchant/storeUseDetail"})}}},[t._v("店铺使用情况")])]),a("a-breadcrumb-item",[a("span",{staticClass:"cr-primary"},[t._v("分类店铺详情")])])],1)],1),a("a-card",{attrs:{title:t.detail.type_name,bordered:!1,headStyle:{fontWeight:"bold"},bodyStyle:{backgroundColor:"#f0f2f5",padding:0,borderTop:"1px solid #e8e8e8"}}},[t.noUseList.length?a("div",{staticClass:"mb-10 bg-ff pl-24"},[a("div",{staticClass:"fs-18 flex align-center"},[a("span",{staticClass:"fw-bold"},[t._v("未使用")]),a("span",{staticClass:"fs-16"},[t._v("（数量 x"+t._s(t.noUseList.length)+"）")])]),a("a-list",{attrs:{"item-layout":"horizontal","data-source":t.noUseList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("div",{staticClass:"flex align-center justify-between",staticStyle:{width:"100%"}},[a("span",[t._v(" 店铺周期："),a("span",{staticClass:"cr-primary"},[t._v("周期"+t._s(e.years_num)+"年 x"+t._s(e.store_count))])]),a("a-button",{attrs:{type:"primary",size:"small",ghost:""},on:{click:function(a){return t.openStore(e)}}},[t._v("去开店")])],1)])}}],null,!1,1267746730)})],1):t._e(),t.storeList.length?a("div",{staticClass:"bg-ff pl-24"},[a("div",{staticClass:"fs-18 flex align-center"},[a("span",{staticClass:"fw-bold"},[t._v("已使用")])]),t._l(t.storeList,(function(e,s){return a("div",{key:s,staticClass:"store"},[a("div",{staticClass:"fw-bold fs-16 mb-20"},[t._v(" "+t._s(e.name)+"店 "),a("span",{staticClass:"cr-primary",class:0==e.store_status?"cr-red":""},[t._v("（"+t._s(e.store_status_str)+"）")])]),a("a-row",{staticClass:"mt-10"},[a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("店铺名称：")]),a("span",{staticClass:"text-wrap flex-1"},[t._v(t._s(e.name||"-"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("店铺类型：")]),a("span",{staticClass:"text-wrap flex-1"},[t._v(t._s(e.type_name||"-"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("创建时间：")]),a("span",{staticClass:"text-wrap flex-1"},[t._v(t._s(e.add_time||"-"))])])])],1),a("a-row",{staticClass:"mt-10"},[a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("有效时间：")]),a("span",{staticClass:"text-wrap flex-1"},[t._v(" "+t._s(e.end_time||"-"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("店铺电话：")]),a("span",{staticClass:"text-wrap flex-1"},[t._v(t._s(e.phone||"-"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("店铺地址：")]),a("span",{staticClass:"text-wrap flex-1"},[t._v(t._s(e.address||"-"))])])])],1)],1)}))],2):t._e()])],1)},r=[],n=a("5051"),i={data:function(){return{noUseList:[],storeList:[],detail:""}},watch:{"$route.query.cat_id":{immediate:!0,handler:function(t){this.getDetail(t)}}},mounted:function(){},methods:{getDetail:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var a={cat_id:e};this.request(n["a"].getCategoryStoreDetail,a).then((function(e){t.detail=e||"",t.noUseList=e.unused_list||[],t.storeList=e.used_list||[]}))}},openStore:function(t){this.$router.push({path:"/merchant/store.merchant/StoreEdit",query:{cat_id:t.cat_id,cat_fid:t.cat_fid,buy_id:t.buy_id}})}}},c=i,l=(a("8519"),a("0c7c")),o=Object(l["a"])(c,s,r,!1,null,"6a27854a",null);e["default"]=o.exports},a0e66:function(t,e,a){}}]);