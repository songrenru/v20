(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58937afe","chunk-2d0a310a"],{"011d":function(e,l,t){"use strict";var a={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};l["a"]=a},"386c":function(e,l,t){"use strict";t("f465")},b168:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("a-modal",{attrs:{title:e.title,visible:e.visible,maskClosable:!1,footer:null},on:{ok:e.handleCancel,cancel:e.handleCancel}},[e.rider_name?t("span",[t("span",[e._v("骑手："+e._s(e.rider_name))]),t("a-divider",{attrs:{type:"virticle"}}),t("span",[e._v("骑手号码："+e._s(e.rider_phone))]),t("a-divider")],1):e._e(),e.logistics.length?t("a-timeline",{attrs:{pending:e.pending,reverse:!0}},e._l(e.logistics,(function(l,a){return t("a-timeline-item",{key:a},[t("p",{staticClass:"mb-0"},[e._v(e._s(e.moment(l.time).format("YYYY-MM-DD HH:mm")))]),t("span",[e._v(e._s(l.context))])])})),1):t("a-empty",{attrs:{image:e.simpleImage}},[t("span",{attrs:{slot:"description"},slot:"description"},[e._v("暂无物流信息")])])],1)],1)},o=[],r=(t("06f4"),t("fc25")),m=(t("16c9"),t("387a")),i=t("8bbf"),d=t.n(i),s=t("011d"),c=t("c1df"),n=t.n(c);d.a.use(m["a"]),d.a.use(r["a"]);var p={props:{visible:Boolean,title:String,order:Object},data:function(){return{logistics:[],pending:!1,simpleImage:"",rider_name:"",rider_phone:""}},beforeCreate:function(){this.simpleImage=r["a"].PRESENTED_IMAGE_SIMPLE},mounted:function(){20==this.order.status&&(this.pending="正在配送中..."),this.viewLogistics()},methods:{moment:n.a,viewLogistics:function(){var e=this,l=this.order,t=l.order_id,a=l.order_type,o=l.periodic_order_id,r=l.express_style;console.log("luaminagwe"),this.request(s["a"].viewLogistics,{order_id:t,periodic_order_id:o&&"periodic"==a?o:"",order_type:a,express_style:r}).then((function(l){l?(e.logistics=l.list||[],e.rider_name=l.rider_name,e.rider_phone=l.rider_phone):1===l.errCode&&e.$message.warn(l.errMsg)}))},handleCancel:function(){this.$emit("handleCancel")}}},f=p,g=(t("386c"),t("0c7c")),M=Object(g["a"])(f,a,o,!1,null,"57b9b484",null);l["default"]=M.exports},f465:function(e,l,t){}}]);