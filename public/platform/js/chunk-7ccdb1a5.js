(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ccdb1a5","chunk-138cfc90"],{"1a3e":function(e,t,a){"use strict";a("4732")},"1bb5":function(e,t,a){"use strict";a("5d7d")},"2dfe":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[a("div",{staticClass:"content"},[a("div",{staticClass:"code-box"},[a("div",{staticClass:"code"},[e.wxQrcode?a("img",{attrs:{src:e.wxQrcode}}):e._e(),e.wxErrorMsg?a("div",{staticClass:"error-msg"},[e._v(e._s(e.wxErrorMsg))]):e._e(),a("div",[e._v("公众号二维码")])]),a("div",{staticClass:"code"},[e.h5Qrcode?a("img",{attrs:{src:e.h5Qrcode}}):e._e(),a("div",[e._v("网页二维码")])]),a("div",{staticClass:"code"},[e.wxappQrcode?a("img",{attrs:{src:e.wxappQrcode}}):e._e(),a("div",[e._v("小程序二维码")])])])])])},r=[],o=a("ea1d"),n={components:{},data:function(){return{title:"店铺综合二维码",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,type:"mallstore",image:"",visible:!1,wxErrorMsg:"",wxQrcode:"",wxappErrorMsg:"",wxappQrcode:"",h5ErrorMsg:"",h5Qrcode:""}},mounted:function(){console.log(this.catFid),this.getWxCode()},methods:{showModal:function(e){this.visible=!0,this.id=e,this.getWxCode(),this.getH5Code(),this.getWxappCode()},getWxCode:function(){var e=this;this.request(o["a"].seeWxQrcode,{type:this.type,id:this.id}).then((function(t){0!=t.error_code?(e.wxErrorMsg=t.msg,e.wxQrcode=""):(e.wxQrcode=t.qrcode,e.wxErrorMsg="")}))},getH5Code:function(){var e=encodeURIComponent(location.origin+"/packapp/plat/pages/shopmall_third/store_home/index?store_id="+this.id);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+e},getWxappCode:function(){var e=encodeURIComponent("pages/shopmall_third/store_home/index?store_id="+this.id);this.wxappQrcode="/index.php?g=Index&c=Recognition_wxapp&a=create_page_qrcode&page="+e},handleCancel:function(){this.visible=!1}}},i=n,s=(a("1bb5"),a("2877")),c=Object(s["a"])(i,l,r,!1,null,"a20155ec",null);t["default"]=c.exports},4031:function(e,t,a){"use strict";var l={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics",orderPrintTicket:"/mall/merchant.MallOrder/printOrder"};t["a"]=l},4732:function(e,t,a){},"5d7d":function(e,t,a){},"783f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[a("a-table",{staticStyle:{background:"#FFFFFF"},attrs:{columns:e.columns,"row-key":function(e){return e.store_id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"show_qrcode",fn:function(t,l){return l.sid>0?a("span",{},[a("a",{on:{click:function(t){return e.$refs.seeMallStoreQrcodeModal.showModal(l.store_id)}}},[e._v("查看二维码")])]):e._e()}},{key:"create_decorate",fn:function(t,l){return l.sid>0?a("router-link",{attrs:{to:{path:"/merchant/merchant.iframe/MallDiypage",query:{store_id:l.store_id}}}},[a("a",[e._v("进入店铺装修")])]):e._e()}},{key:"shop_edit",fn:function(t,l){return a("router-link",{attrs:{to:{path:"/merchant/merchant.mall/perfectedStore",query:{store_id:l.store_id}}}},[l.sid>0?a("label",{staticClass:"label-sm green"},[e._v("编辑店铺信息")]):a("label",{staticClass:"label-sm purplish-red"},[e._v("去完善")])])}},{key:"order_list",fn:function(t,l){return l.sid>0?a("router-link",{attrs:{to:{path:"/merchant/merchant.mall/orderList",query:{store_id:l.store_id}}}},[a("label",{staticClass:"label-sm yellow"},[e._v("订单查看")])]):e._e()}},{key:"goods_list",fn:function(t,l){return l.sid>0?a("router-link",{attrs:{to:{path:"/merchant/merchant.mall/goodsList",query:{store_id:l.store_id}}}},[a("label",{staticClass:"label-sm purple"},[e._v("商品管理")])]):e._e()}},{key:"active_list",fn:function(t,l){return l.sid>0?a("router-link",{attrs:{to:{path:"/merchant/merchant.mall/activeList",query:{store_id:l.store_id}}}},[a("label",{staticClass:"label-sm green"},[e._v("营销活动")])]):e._e()}}],null,!0)}),a("see-mall-store-qrcode",{ref:"seeMallStoreQrcodeModal"})],1)},r=[],o=a("4031"),n=a("2dfe"),i=[{title:"店铺名称",dataIndex:"name"},{title:"店铺电话",dataIndex:"phone"},{title:"查看二维码",dataIndex:"show_qrcode",scopedSlots:{customRender:"show_qrcode"}},{title:"完善店铺信息",dataIndex:"shop_edit",scopedSlots:{customRender:"shop_edit"}},{title:"查看店铺订单",dataIndex:"order_list",scopedSlots:{customRender:"order_list"}},{title:"商品管理",dataIndex:"goods_list",scopedSlots:{customRender:"goods_list"}},{title:"营销活动",dataIndex:"active_list",scopedSlots:{customRender:"active_list"}}],s={components:{SeeMallStoreQrcode:n["default"]},data:function(){return{data:[],pagination:{current:1,total:0,pageSize:15},loading:!1,queryParam:{page:1,pageSize:15},columns:i}},mounted:function(){this.getLists()},activated:function(){this.getLists()},methods:{getLists:function(){var e=this;this.request(o["a"].getLists,this.queryParam).then((function(t){e.data=t.list,e.pagination.total=t.total}))},handleTableChange:function(e){e.current&&e.current>0&&(this.queryParam["page"]=e.current,this.pagination.current=e.current,this.getLists())},onPageChange:function(e,t){},onPageSizeChange:function(e,t){},showQrcode:function(e){alert(e)}}},c=s,d=(a("1a3e"),a("2877")),m=Object(d["a"])(c,l,r,!1,null,null,null);t["default"]=m.exports},ea1d:function(e,t,a){"use strict";var l={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit",merAccountList:"/merchant/merchant.system.MerchantMenu/userAccountList",merAccountDel:"/merchant/merchant.system.MerchantMenu/userAccountDelete",merAccountEdit:"/merchant/merchant.system.MerchantMenu/userAccountAddOrEdit",importMerAccount:"/merchant/merchant.system.MerchantMenu/importAccount",merchantMenu:"/merchant/merchant.system.MerchantMenu/merchantMenu",merStationsList:"/merchant/merchant.system.MerchantMenu/stations",merStationsSave:"/merchant/merchant.system.MerchantMenu/saveStation",merStationsDel:"/merchant/merchant.system.MerchantMenu/delStation"};t["a"]=l}}]);