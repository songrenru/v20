(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6420cac8","chunk-2d0a310a"],{"011d":function(e,t,l){"use strict";var a={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",getMallBrowse:"/mall/platform.MallBrowse/getMallBrowse",MallBrowseExport:"/mall/platform.MallBrowse/export",exportBrowseTotalExport:"/mall/platform.MallBrowse/exportBrowseTotal",getAuditGoodsList:"/mall/platform.MallPlatformGoods/getAuditGoodsList",auditGoods:"/mall/platform.MallPlatformGoods/auditGoods",loginMerchant:"/mall/platform.MallPlatformGoods/loginMerchant",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};t["a"]=a},d6be:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-modal",{attrs:{title:e.title,width:640,visible:e.visible},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[l("a-form",e._b({attrs:{form:e.detail}},"a-form",{labelCol:{span:4},wrapperCol:{span:10}},!1),[l("a-form-item",{attrs:{label:"是否推荐至首页",labelCol:{span:6}}},[l("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否",checked:1==e.is_recommend},on:{change:e.isRecommendChange}})],1),1==e.is_recommend?l("a-form-model-item",{attrs:{label:"推荐时间",help:"推荐时间应在活动时间之内",prop:"recommend_time"}},[l("a-range-picker",{attrs:{"show-time":"",value:e.recommend_time,format:"YYYY-MM-DD HH:mm:ss"},on:{change:e.onRecommendDateRangeChange}})],1):e._e()],1)],1)},o=[],m=(l("99af"),l("011d")),r=l("c1df"),i=l.n(r),d={data:function(){return{title:"",visible:!1,detail:{},rec_start_time:"",rec_end_time:"",recommend_time:[],activeKey:"",is_recommend:2}},mounted:function(){console.log(this.catFid)},methods:{moment:i.a,onRecommendDateRangeChange:function(e,t){this.recommend_time=[e[0],e[1]],this.rec_start_time=t[0],this.rec_end_time=t[1]},edit:function(e,t,l){for(var a in this.title="首页推荐设置",e)this.$set(this.detail,a,e[a]);this.is_recommend=this.detail.is_recommend,this.visible=!0,this.activeKey=t,this.type=l,this.rec_start_time=this.detail.rec_start_time||this.detail.start_time,this.rec_end_time=this.detail.rec_end_time||this.detail.end_time,""!=e.recommend_start_time&&null!=e.recommend_start_time&&""!=e.recommend_end_time&&null!=e.recommend_end_time&&(this.recommend_time=this.recommend_time.concat([i()(e.recommend_start_time),i()(e.recommend_end_time)]))},handleSubmit:function(){var e=this;if(1!=this.is_recommend||""!=this.recommend_time&&null!=this.recommend_time){var t=[],l=[],a=[],o=[],r=[];if(1==this.type)t={activity_id:this.detail.id,goods_id:this.detail.act_goods_id,is_recommend:this.is_recommend,rec_start_time:this.rec_start_time,rec_end_time:this.rec_end_time};else if(2==this.type){for(var i in this.detail)l=this.detail[i].id,a=this.detail[i].act_goods_id,o.push(l),r.push(a);t={activity_id:o,goods_id:r,is_recommend:this.is_recommend,rec_start_time:this.rec_start_time,rec_end_time:this.rec_end_time}}var d="";"getLimitedRecommendList"==this.activeKey?d="editLimitedRecommend":"getBargainRecommendList"==this.activeKey?d="editBargainRecommend":"getGroupRecommendList"==this.activeKey&&(d="editGroupRecommend"),d&&this.request(m["a"][d],t).then((function(t){e.$message.success("设置成功"),e.$emit("updateList"),e.handleCancel()}))}else this.$message.error("请完善推荐时间")},handleCancel:function(){this.visible=!1,Object.assign(this.$data,this.$options.data())},isRecommendChange:function(e){this.is_recommend=e?1:2,e||(this.rec_start_time="",this.rec_end_time=""),2==this.type&&(this.recommend_time=[])}}},s=d,c=l("2877"),n=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=n.exports}}]);