(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac1c100","chunk-498225e8","chunk-e7e2d78a"],{"0cd2":function(e,t,o){},"133f8":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",{staticClass:"content"},[t("div",{staticClass:"code-box"},[t("div",{staticClass:"code"},[t("img",{attrs:{src:o("47e8")}}),t("div",{staticClass:"title_code"},[t("b",[e._v(e._s(e.L("已装修的通用码(示例)")))])])]),t("div",{staticClass:"qr_code"},[t("img",{attrs:{src:o("6936")}}),t("div",{staticClass:"title_qr_code"},[t("b",[e._v(e._s(e.L("普通通用码(示例)")))])])])]),t("a-radio-group",{staticClass:"code-box",attrs:{value:e.radioValue},on:{change:e.radioChange}},[t("a-radio",{staticClass:"code radio-style",attrs:{value:2}}),t("a-radio",{staticClass:"code radio-style",attrs:{value:1}})],1),t("div",{staticClass:"footer-box"},[t("a-button",{attrs:{type:"primary",icon:"download"},on:{click:e.storeQrcode}},[e._v(e._s(e.L("点击下载")))]),t("a-button",{on:{click:e.handleCancel}},[e._v(e._s(e.L("取消")))])],1)],1)])},a=[],r=o("6ea1"),i={data:function(){return{title:this.L("查看店铺二维码"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},store_id:0,image:"",visible:!1,storeId:0,radioValue:2}},mounted:function(){console.log(this.catFid)},methods:{showModal:function(e){this.storeId=e,this.visible=!0},radioChange:function(e){this.radioValue=e.target.value},seeQrcode:function(e){this.visible=!0,this.store_id=e,this.getCode()},storeQrcode:function(){var e=this;this.title=this.L("选择您需要下载的通用码类型"),this.request(r["a"].downloadQrcodeStore,{store_id:this.storeId,is_common:this.radioValue}).then((function(t){e.url=t.download_url,e.img_name=t.img_name,d(e.url,e.img_name)}))},getCode:function(){var e=this;this.request(r["a"].seeQrcode,{store_id:this.store_id}).then((function(t){e.image=t.qrcode}))},handleCancel:function(){this.visible=!1}}};function d(e,t){var o=document.createElement("a");o.href=e,o.download=t,o.click()}var n=i,c=(o("17c4"),o("0b56")),l=Object(c["a"])(n,s,a,!1,null,"e91915c6",null);t["default"]=l.exports},"17c4":function(e,t,o){"use strict";o("0cd2")},"333e":function(e,t,o){},"47e8":function(e,t,o){e.exports=o.p+"img/store_qr.41e04fea.png"},"641a":function(e,t,o){},6936:function(e,t,o){e.exports=o.p+"img/store_normal_qr.ee00c62d.png"},"6ea1":function(e,t,o){"use strict";var s={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};t["a"]=s},"84bc":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",{staticClass:"content"},[t("div",{staticClass:"code-box"},[t("div",{staticClass:"code"},[e.wxQrcode?t("img",{attrs:{src:e.wxQrcode}}):e._e(),e.wxErrorMsg?t("div",{staticClass:"error-msg"},[e._v(e._s(e.wxErrorMsg))]):e._e(),t("div",[e._v(e._s(e.L("公众号二维码")))])]),t("div",{staticClass:"code"},[e.h5Qrcode?t("img",{attrs:{src:e.h5Qrcode}}):e._e(),t("div",[e._v(e._s(e.L("网页二维码")))])]),t("div",{staticClass:"code"},[e.wxappQrcode?t("img",{attrs:{src:e.wxappQrcode}}):e._e(),t("div",[e._v(e._s(e.L("小程序二维码")))])])])])])},a=[],r=o("ea1d"),i={components:{},data:function(){return{title:this.L("店铺综合二维码"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,type:"merchantstore",image:"",visible:!1,wxErrorMsg:"",wxQrcode:"",wxappErrorMsg:"",wxappQrcode:"",h5ErrorMsg:"",h5Qrcode:""}},mounted:function(){console.log(this.catFid)},methods:{showModal:function(e){this.visible=!0,this.id=e,this.getWxCode(),this.getH5Code(),this.getWxappCode()},getWxCode:function(){var e=this;this.request(r["a"].seeWxQrcode,{type:this.type,id:this.id}).then((function(t){0!=t.error_code?(e.wxErrorMsg=t.msg,e.wxQrcode=""):(e.wxQrcode=t.qrcode,e.wxErrorMsg="")}))},getH5Code:function(){var e=encodeURIComponent(location.origin+"/packapp/platn/pages/store/v1/home/index?store_id="+this.id);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+e},getWxappCode:function(){var e=encodeURIComponent("platn/pages/store/v1/home/index?page_from=store_qr_code&store_id="+this.id);this.wxappQrcode="/index.php?g=Index&c=Recognition_wxapp&a=create_page_qrcode&page="+e},handleCancel:function(){this.visible=!1}}},d=i,n=(o("a408"),o("0b56")),c=Object(n["a"])(d,s,a,!1,null,"2688b9f4",null);t["default"]=c.exports},a408:function(e,t,o){"use strict";o("333e")},ac75:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[t("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.columns,"row-key":function(e){return e.store_id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"show_qrcode",fn:function(o,s){return s.sid>0?t("span",{},[t("a",{on:{click:function(t){return e.$refs.seeStoreQrcodeModal.showModal(s.store_id)}}},[e._v(e._s(e.L("查看二维码")))])]):e._e()}},{key:"foodshop_fitment",fn:function(o,s){return s.sid>0?t("router-link",{attrs:{to:{path:"/merchant/merchant.iframe/foodshopFitment",query:{store_id:s.store_id}}}},[t("label",{staticStyle:{cursor:"pointer"}},[e._v(e._s(e.L("进入店铺装修")))])]):e._e()}},{key:"download_qrcode",fn:function(o,s){return s.sid>0?t("span",{},[t("a",{on:{click:function(t){return e.$refs.showStoreQrcodeModal.showModal(s.store_id)}}},[e._v(e._s(e.L("下载通用码")))])]):e._e()}},{key:"shop_edit",fn:function(o,s){return t("router-link",{attrs:{to:{path:"/merchant/merchant.foodshop/shopEdit",query:{store_id:s.store_id}}}},[s.sid>0?t("label",{staticClass:"label-sm green"},[e._v(e._s(e.L("编辑店铺信息")))]):t("label",{staticClass:"label-sm purplish-red"},[e._v(e._s(e.L("去完善")))])])}},{key:"order_list",fn:function(o,s){return s.sid>0?t("router-link",{attrs:{to:{path:"/merchant/merchant.foodshop/orderList",query:{store_id:s.store_id}}}},[t("label",{staticClass:"label-sm yellow"},[e._v(e._s(e.L("订单查看")))])]):e._e()}},{key:"goods_list",fn:function(o,s){return s.sid>0?t("router-link",{attrs:{to:{path:"/merchant/merchant.foodshop/goodsList",query:{store_id:s.store_id}}}},[t("label",{staticClass:"label-sm purple"},[e._v(e._s(e.L("商品管理")))])]):e._e()}},{key:"table_list",fn:function(o,s){return s.sid>0?t("router-link",{attrs:{to:{path:"/merchant/merchant.foodshop/tableList",query:{store_id:s.store_id}}}},[t("label",{staticClass:"label-sm blue"},[e._v(e._s(e.L("店铺桌台")))])]):e._e()}},{key:"print",fn:function(o,s){return s.sid>0?t("router-link",{attrs:{to:{path:"/merchant/merchant.foodshop/printRule",query:{store_id:s.store_id}}}},[t("label",{staticClass:"label-sm blue"},[e._v(e._s(e.L("打印设置")))])]):e._e()}},{key:"package_list",fn:function(o,s){return s.sid>0?t("router-link",{attrs:{to:{path:"/merchant/merchant.foodshop/packageList",query:{store_id:s.store_id}}}},[t("label",{staticClass:"label-sm purple"},[e._v(e._s(e.L("套餐管理")))])]):e._e()}}],null,!0)}),t("show-store-qrcode",{ref:"showStoreQrcodeModal"}),t("see-store-qrcode",{ref:"seeStoreQrcodeModal"})],1)},a=[],r=o("6ea1"),i=o("133f8"),d=o("84bc"),n=[],c={components:{ShowStoreQrcode:i["default"],SeeStoreQrcode:d["default"]},data:function(){return{data:[],pagination:{current:1,total:0,pageSize:15},loading:!1,queryParam:{page:1},columns:n}},created:function(){this.columns=[{title:this.L("店铺名称"),dataIndex:"name"},{title:this.L("店铺电话"),dataIndex:"phone"},{title:this.L("综合店铺二维码"),dataIndex:"show_qrcode",scopedSlots:{customRender:"show_qrcode"}},{title:this.L("店铺装修"),dataIndex:"store_id",scopedSlots:{customRender:"foodshop_fitment"}},{title:this.L("通用点餐码"),dataIndex:"download_qrcode",scopedSlots:{customRender:"download_qrcode"}},{title:this.L("完善店铺信息"),dataIndex:"shop_edit",scopedSlots:{customRender:"shop_edit"}},{title:this.L("查看店铺订单"),dataIndex:"order_list",scopedSlots:{customRender:"order_list"}},{title:this.L("商品管理"),dataIndex:"goods_list",scopedSlots:{customRender:"goods_list"}},{title:this.L("店铺桌台"),dataIndex:"table_list",scopedSlots:{customRender:"table_list"}},{title:this.L("打印配置"),dataIndex:"print",scopedSlots:{customRender:"print"}},{title:this.L("套餐管理"),dataIndex:"package_list",scopedSlots:{customRender:"package_list"}}]},mounted:function(){this.getLists()},activated:function(){this.getLists()},methods:{getLists:function(){var e=this;this.request(r["a"].getLists,this.queryParam).then((function(t){e.data=t.list,e.pagination.total=t.total}))},handleTableChange:function(e){e.current&&e.current>0&&(this.queryParam["page"]=e.current,this.pagination.current=e.current,this.getLists())},showQrcode:function(e){alert(e)}}},l=c,h=(o("c22a"),o("0b56")),p=Object(h["a"])(l,s,a,!1,null,null,null);t["default"]=p.exports},c22a:function(e,t,o){"use strict";o("641a")},ea1d:function(e,t,o){"use strict";var s={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit"};t["a"]=s}}]);