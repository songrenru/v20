(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c2f93f4"],{"133f":function(o,e,t){"use strict";t.r(e);var a=function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("a-modal",{attrs:{title:o.title,width:720,visible:o.visible,footer:null},on:{cancel:o.handleCancel}},[a("div",{staticClass:"content"},[a("div",{staticClass:"code-box"},[a("div",{staticClass:"code"},[a("img",{attrs:{src:t("47e8")}}),a("div",{staticClass:"title_code"},[a("b",[o._v(o._s(o.L("已装修的通用码(示例)")))])])]),a("div",{staticClass:"qr_code"},[a("img",{attrs:{src:t("6936")}}),a("div",{staticClass:"title_qr_code"},[a("b",[o._v(o._s(o.L("普通通用码(示例)")))])])])]),a("a-radio-group",{staticClass:"code-box",attrs:{value:o.radioValue},on:{change:o.radioChange}},[a("a-radio",{staticClass:"code radio-style",attrs:{value:2}}),a("a-radio",{staticClass:"code radio-style",attrs:{value:1}})],1),a("div",{staticClass:"footer-box"},[a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:o.storeQrcode}},[o._v(o._s(o.L("点击下载")))]),a("a-button",{on:{click:o.handleCancel}},[o._v(o._s(o.L("取消")))])],1)],1)])},s=[],d=t("6ea1"),r={data:function(){return{title:this.L("查看店铺二维码"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},store_id:0,image:"",visible:!1,storeId:0,radioValue:2}},mounted:function(){console.log(this.catFid)},methods:{showModal:function(o){this.storeId=o,this.visible=!0},radioChange:function(o){this.radioValue=o.target.value},seeQrcode:function(o){this.visible=!0,this.store_id=o,this.getCode()},storeQrcode:function(){var o=this;this.title=this.L("选择您需要下载的通用码类型"),this.request(d["a"].downloadQrcodeStore,{store_id:this.storeId,is_common:this.radioValue}).then((function(e){o.url=e.download_url,o.img_name=e.img_name,i(o.url,o.img_name)}))},getCode:function(){var o=this;this.request(d["a"].seeQrcode,{store_id:this.store_id}).then((function(e){o.image=e.qrcode}))},handleCancel:function(){this.visible=!1}}};function i(o,e){var t=document.createElement("a");t.href=o,t.download=e,t.click()}var c=r,n=(t("17c4"),t("2877")),h=Object(n["a"])(c,a,s,!1,null,"e91915c6",null);e["default"]=h.exports},"17c4":function(o,e,t){"use strict";t("ddb1")},"47e8":function(o,e,t){o.exports=t.p+"img/store_qr.41e04fea.png"},6936:function(o,e,t){o.exports=t.p+"img/store_normal_qr.ee00c62d.png"},"6ea1":function(o,e,t){"use strict";var a={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};e["a"]=a},ddb1:function(o,e,t){}}]);