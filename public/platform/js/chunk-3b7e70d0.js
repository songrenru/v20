(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7e70d0","chunk-2d0a310a"],{"011d":function(t,l,a){"use strict";var e={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply"};l["a"]=e},"62df":function(t,l,a){"use strict";a("a111")},a111:function(t,l,a){},e7d6:function(t,l,a){"use strict";a.r(l);var e=function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("a-modal",{attrs:{title:t.title,width:900,height:640,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[a("div",[a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 商家名称: "),a("span",[t._v(" "+t._s(t.detail.mer_name))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 店铺名称: "),a("span",[t._v(" "+t._s(t.detail.store_name))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 商品名称: "),a("span",[t._v(" "+t._s(t.detail.goods_name))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 商品规格: "),a("span",[t._v(" "+t._s(t.detail.goods_sku_dec))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 评论时间： "),a("span",[t._v(" "+t._s(t.detail.reply_time))])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 商品评价: "),[a("a-rate",{attrs:{disabled:""},model:{value:t.detail.goods_score,callback:function(l){t.$set(t.detail,"goods_score",l)},expression:"detail.goods_score"}})]],2)],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 物流服务: "),[a("a-rate",{attrs:{disabled:""},model:{value:t.detail.logistics_score,callback:function(l){t.$set(t.detail,"logistics_score",l)},expression:"detail.logistics_score"}})]],2),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:10}},[t._v(" 服务态度: "),[a("a-rate",{attrs:{disabled:""},model:{value:t.detail.service_score,callback:function(l){t.$set(t.detail,"service_score",l)},expression:"detail.service_score"}})]],2)],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:21}},[t._v(" 评论内容: "),a("span",[t._v(" "+t._s(t.detail.comment))])])],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),1==t.detail.reply_mv_nums?a("div",[a("a-col",{attrs:{span:10}},[a("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.detail.playerOption}})],1),a("a-col",{attrs:{span:11}},[a("viewer",{attrs:{images:t.detail.reply_pic}},t._l(t.detail.reply_pic,(function(t,l){return a("img",{key:l,attrs:{src:t}})})),0)],1)],1):t._e(),2==t.detail.reply_mv_nums?a("div",[a("a-col",{attrs:{span:21}},[a("viewer",{attrs:{images:t.detail.reply_pic}},t._l(t.detail.reply_pic,(function(t,l){return a("img",{key:l,attrs:{src:t}})})),0)],1)],1):t._e()],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:19}},[t._v(" 回复内容: "),a("a-textarea",{attrs:{placeholder:"请输入内容","auto-size":{minRows:6,maxRows:10},disabled:!0},model:{value:t.detail.merchant_reply_content,callback:function(l){t.$set(t.detail,"merchant_reply_content",l)},expression:"detail.merchant_reply_content"}})],1),a("a-col",{attrs:{span:2}})],1),a("a-row",{staticClass:"mb-20"},[a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:19}},[t._v(" 回复时间:"),a("span",[t._v(" "+t._s(t.detail.merchant_reply_time))])]),a("a-col",{attrs:{span:2}})],1)],1)])},o=[],r=a("011d"),m=(a("0808"),a("6944")),s=a.n(m),i=a("8bbf"),d=a.n(i),c=a("d6d3");a("fda2");d.a.use(s.a);var n={components:{videoPlayer:c["videoPlayer"]},data:function(){return{title:"查看详情",visible:!1,rpl_id:0,detail:{mer_name:"",store_name:"",reply_time:"",goods_name:"",goods_sku_dec:"",service_score:0,goods_score:0,logistics_score:0,comment:"",reply_pic:[],reply_mv_nums:2,playerOption:{},merchant_reply_content:"",merchant_reply_time:""}}},methods:{showReply:function(t){var l=this;this.visible=!0,this.rpl_id=t,this.request(r["a"].getReplyDetails,{rpl_id:this.rpl_id}).then((function(t){l.detail=t,console.log(l.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},p=n,f=(a("62df"),a("2877")),g=Object(f["a"])(p,e,o,!1,null,"feb46550",null);l["default"]=g.exports}}]);