(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05a6d9cd"],{"84bc":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[o("div",{staticClass:"content"},[o("div",{staticClass:"code-box"},[o("div",{staticClass:"code"},[e.wxQrcode?o("img",{attrs:{src:e.wxQrcode}}):e._e(),e.wxErrorMsg?o("div",{staticClass:"error-msg"},[e._v(e._s(e.wxErrorMsg))]):e._e(),o("div",[e._v(e._s(e.L("公众号二维码")))])]),o("div",{staticClass:"code"},[e.h5Qrcode?o("img",{attrs:{src:e.h5Qrcode}}):e._e(),o("div",[e._v(e._s(e.L("网页二维码")))])]),o("div",{staticClass:"code"},[e.wxappQrcode?o("img",{attrs:{src:e.wxappQrcode}}):e._e(),o("div",[e._v(e._s(e.L("小程序二维码")))])])])])])},r=[],i=o("ea1d"),n={components:{},data:function(){return{title:this.L("店铺综合二维码"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,type:"merchantstore",image:"",visible:!1,wxErrorMsg:"",wxQrcode:"",wxappErrorMsg:"",wxappQrcode:"",h5ErrorMsg:"",h5Qrcode:""}},mounted:function(){console.log(this.catFid)},methods:{showModal:function(e){this.visible=!0,this.id=e,this.getWxCode(),this.getH5Code(),this.getWxappCode()},getWxCode:function(){var e=this;this.request(i["a"].seeWxQrcode,{type:this.type,id:this.id}).then((function(t){0!=t.error_code?(e.wxErrorMsg=t.msg,e.wxQrcode=""):(e.wxQrcode=t.qrcode,e.wxErrorMsg="")}))},getH5Code:function(){var e=encodeURIComponent(location.origin+"/packapp/platn/pages/store/v1/home/index?store_id="+this.id);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+e},getWxappCode:function(){var e=encodeURIComponent("platn/pages/store/v1/home/index?page_from=store_qr_code&store_id="+this.id);this.wxappQrcode="/index.php?g=Index&c=Recognition_wxapp&a=create_page_qrcode&page="+e},handleCancel:function(){this.visible=!1}}},a=n,c=(o("a408"),o("0c7c")),d=Object(c["a"])(a,s,r,!1,null,"2688b9f4",null);t["default"]=d.exports},9717:function(e,t,o){},a408:function(e,t,o){"use strict";o("9717")},ea1d:function(e,t,o){"use strict";var s={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit"};t["a"]=s}}]);