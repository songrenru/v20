(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68adf3b9"],{4031:function(e,a,t){"use strict";var l={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics"};a["a"]=l},abba:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{title:e.title,width:900,height:640,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",[t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[e._v(" 店铺名称: "),t("span",[e._v(" "+e._s(e.detail.store_name))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[e._v(" 评论时间： "),t("span",[e._v(" "+e._s(e.detail.reply_time))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[e._v(" 商品名称: "),t("span",[e._v(" "+e._s(e.detail.goods_name))])]),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[e._v(" 商品规格: "),t("span",[e._v(" "+e._s(e.detail.goods_sku_dec))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[e._v(" 商品评价: "),[t("a-rate",{attrs:{disabled:""},model:{value:e.detail.goods_score,callback:function(a){e.$set(e.detail,"goods_score",a)},expression:"detail.goods_score"}})]],2),t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:10}},[e._v(" 服务态度: "),[t("a-rate",{attrs:{disabled:""},model:{value:e.detail.service_score,callback:function(a){e.$set(e.detail,"service_score",a)},expression:"detail.service_score"}})]],2)],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:21}},[e._v(" 物流服务: "),[t("a-rate",{attrs:{disabled:""},model:{value:e.detail.logistics_score,callback:function(a){e.$set(e.detail,"logistics_score",a)},expression:"detail.logistics_score"}})]],2)],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:21}},[e._v(" 评论内容: "),t("span",[e._v(" "+e._s(e.detail.comment))])])],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),1==e.detail.reply_mv_nums?t("div",[t("a-col",{attrs:{span:10}},[t("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.detail.playerOption}})],1),t("a-col",{attrs:{span:11}},[t("viewer",{attrs:{images:e.detail.reply_pic}},e._l(e.detail.reply_pic,(function(e,a){return t("img",{key:a,attrs:{src:e}})})),0)],1)],1):e._e(),2==e.detail.reply_mv_nums?t("div",[t("a-col",{attrs:{span:21}},[t("viewer",{attrs:{images:e.detail.reply_pic}},e._l(e.detail.reply_pic,(function(e,a){return t("img",{key:a,attrs:{src:e}})})),0)],1)],1):e._e()],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:19}},[e._v(" 回复内容: "),t("a-textarea",{attrs:{placeholder:"请输入内容","auto-size":{minRows:6,maxRows:10}},model:{value:e.merchant_reply_content,callback:function(a){e.merchant_reply_content=a},expression:"merchant_reply_content"}})],1),t("a-col",{attrs:{span:2}})],1),""==e.detail.merchant_reply_content?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:20}}),t("a-col",{attrs:{span:2}},[t("a-button",{on:{click:function(a){return e.handleCancel()}}},[e._v(" 取消 ")])],1),t("a-col",{attrs:{span:2}},[t("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.handleSubmit()}}},[e._v(" 确定 ")])],1)],1):e._e()],1)])},r=[],o=t("4031"),s=(t("0808"),t("6944")),n=t.n(s),i=t("8bbf"),c=t.n(i),m=t("d6d3");t("fda2");c.a.use(n.a);var d={components:{videoPlayer:m["videoPlayer"]},data:function(){return{title:"查看详情",visible:!1,rpl_id:0,merchant_reply_content:"",detail:{store_name:"",reply_time:"",goods_name:"",goods_sku_dec:"",service_score:0,goods_score:0,logistics_score:0,comment:"",reply_pic:[],reply_mv_nums:2,playerOption:{},merchant_reply_content:"",merchant_reply_time:""}}},methods:{showReply:function(e){var a=this;this.visible=!0,this.rpl_id=e,this.request(o["a"].getReplyDetails,{rpl_id:this.rpl_id}).then((function(e){a.detail=e,e.merchant_reply_content&&(a.merchant_reply_content=e.merchant_reply_content),console.log(a.detail)}))},handleSubmit:function(){var e=this;if(""!=this.merchant_reply_content){var a={rpl_id:this.rpl_id,merchant_reply_content:this.merchant_reply_content};this.request(o["a"].addComment,a).then((function(a){e.$message.success("提交成功！"),e.visible=!1,e.$emit("loadRefresh")}))}else this.$message.error("评论内容不能为空")},handleCancel:function(){this.merchant_reply_content,this.detail.reply_mv_nums=2,this.visible=!1}}},h=d,p=(t("b572"),t("0c7c")),g=Object(p["a"])(h,l,r,!1,null,"7be11af7",null);a["default"]=g.exports},b572:function(e,a,t){"use strict";t("f083")},f083:function(e,a,t){}}]);