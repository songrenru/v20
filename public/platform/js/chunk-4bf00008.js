(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bf00008","chunk-2d0a310a"],{"011d":function(l,e,t){"use strict";var a={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",getMallBrowse:"/mall/platform.MallBrowse/getMallBrowse",MallBrowseExport:"/mall/platform.MallBrowse/export",exportBrowseTotalExport:"/mall/platform.MallBrowse/exportBrowseTotal",getAuditGoodsList:"/mall/platform.MallPlatformGoods/getAuditGoodsList",auditGoods:"/mall/platform.MallPlatformGoods/auditGoods",loginMerchant:"/mall/platform.MallPlatformGoods/loginMerchant",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};e["a"]=a},"386c1":function(l,e,t){"use strict";t("c6a8")},b168:function(l,e,t){"use strict";t.r(e);var a=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",[t("a-modal",{attrs:{title:l.title,visible:l.visible,maskClosable:!1,footer:null},on:{ok:l.handleCancel,cancel:l.handleCancel}},[l.rider_name?t("span",[t("span",[l._v("骑手："+l._s(l.rider_name))]),t("a-divider",{attrs:{type:"virticle"}}),t("span",[l._v("骑手号码："+l._s(l.rider_phone))]),t("a-divider")],1):l._e(),l.logistics.length?t("a-timeline",{attrs:{pending:l.pending,reverse:!0}},l._l(l.logistics,(function(e,a){return t("a-timeline-item",{key:a},[t("p",{staticClass:"mb-0"},[l._v(l._s(l.moment(e.time).format("YYYY-MM-DD HH:mm")))]),t("span",[l._v(l._s(e.context))])])})),1):t("a-empty",{attrs:{image:l.simpleImage}},[t("span",{attrs:{slot:"description"},slot:"description"},[l._v("暂无物流信息")])])],1)],1)},o=[],r=(t("06f4"),t("fc25")),m=(t("16c9"),t("387a")),i=t("8bbf"),d=t.n(i),s=t("011d"),c=t("c1df"),n=t.n(c);d.a.use(m["a"]),d.a.use(r["a"]);var p={props:{visible:Boolean,title:String,order:Object},data:function(){return{logistics:[],pending:!1,simpleImage:"",rider_name:"",rider_phone:""}},beforeCreate:function(){this.simpleImage=r["a"].PRESENTED_IMAGE_SIMPLE},mounted:function(){20==this.order.status&&(this.pending="正在配送中..."),this.viewLogistics()},methods:{moment:n.a,viewLogistics:function(){var l=this,e=this.order,t=e.order_id,a=e.order_type,o=e.periodic_order_id,r=e.express_style;console.log("luaminagwe"),this.request(s["a"].viewLogistics,{order_id:t,periodic_order_id:o&&"periodic"==a?o:"",order_type:a,express_style:r}).then((function(e){e?(l.logistics=e.list||[],l.rider_name=e.rider_name,l.rider_phone=e.rider_phone):1===e.errCode&&l.$message.warn(e.errMsg)}))},handleCancel:function(){this.$emit("handleCancel")}}},f=p,g=(t("386c1"),t("0c7c")),M=Object(g["a"])(f,a,o,!1,null,"57b9b484",null);e["default"]=M.exports},c6a8:function(l,e,t){}}]);