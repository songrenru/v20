(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f940b738","chunk-2d0a310a"],{"011d":function(l,t,e){"use strict";var a={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",getMallBrowse:"/mall/platform.MallBrowse/getMallBrowse",MallBrowseExport:"/mall/platform.MallBrowse/export",exportBrowseTotalExport:"/mall/platform.MallBrowse/exportBrowseTotal",getAuditGoodsList:"/mall/platform.MallPlatformGoods/getAuditGoodsList",auditGoods:"/mall/platform.MallPlatformGoods/auditGoods",loginMerchant:"/mall/platform.MallPlatformGoods/loginMerchant",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};t["a"]=a},"49f3":function(l,t,e){"use strict";e("92b2")},"92b2":function(l,t,e){},fc8f:function(l,t,e){"use strict";e.r(t);var a=function(){var l=this,t=l.$createElement,e=l._self._c||t;return e("div",[e("a-modal",{attrs:{title:l.title,visible:l.visible,maskClosable:!1,footer:null},on:{cancel:l.handleCancel}},[e("a-list",{staticStyle:{"max-height":"500px","overflow-y":"auto"},attrs:{bordered:"","data-source":l.periodicList.deliver_msg,"item-layout":"vertical"},scopedSlots:l._u([{key:"renderItem",fn:function(t){return e("a-list-item",{},[e("div",{staticClass:"text-center width-auto mb-20 fs-16"},[l._v(" "+l._s(l.moment(t.deliver_date).format("YYYY年MM月"))+" ")]),t.deliver_list&&t.deliver_list.length?e("div",{staticClass:"flex align-center flex-wrap width-auto"},l._l(t.deliver_list,(function(t,a){return e("div",{key:a,staticClass:"flex flex-column align-center mb-20 deliver-item"},[e("span",{staticClass:"date-num",class:4==t.deliver_status?"active":""},[l._v(" "+l._s(t.date_num)+" ")]),e("span",[l._v(l._s(l._f("deliverStatusOpt")(t.deliver_status)))])])})),0):l._e()])}}])})],1)],1)},o=[],r=(e("d3b7"),e("99af"),e("011d")),m=e("c1df"),i=e.n(m),d=[{status:0,label:"待发货"},{status:1,label:"备货中"},{status:2,label:"待收货"},{status:3,label:"已顺延"},{status:4,label:"已收货"}],s={props:{visible:Boolean,order:Object},data:function(){return{title:"配送周期",periodicList:""}},filters:{deliverStatusOpt:function(l){var t="";return d.forEach((function(e){e.status==l&&(t=e.label)})),t}},created:function(){this.getPeriodicList()},methods:{moment:i.a,getPeriodicList:function(){var l=this;this.request(r["a"].getPeriodicList,{order_id:this.order.order_id}).then((function(t){if(l.periodicList=t||"",t){var e=t.nums,a=void 0===e?0:e,o=t.complete_num,r=void 0===o?0:o;l.title="".concat(l.title,"（共").concat(a,"期，已送").concat(r,"期）")}}))},handleCancel:function(){this.$emit("handleCancel")}}},c=s,n=(e("49f3"),e("0c7c")),f=Object(n["a"])(c,a,o,!1,null,"6f51ed59",null);t["default"]=f.exports}}]);