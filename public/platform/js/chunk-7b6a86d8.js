(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b6a86d8"],{"1bb5":function(e,t,o){"use strict";o("3c3c")},"2dfe":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",{staticClass:"content"},[t("div",{staticClass:"code-box"},[t("div",{staticClass:"code"},[e.wxQrcode?t("img",{attrs:{src:e.wxQrcode}}):e._e(),e.wxErrorMsg?t("div",{staticClass:"error-msg"},[e._v(e._s(e.wxErrorMsg))]):e._e(),t("div",[e._v("公众号二维码")])]),t("div",{staticClass:"code"},[e.h5Qrcode?t("img",{attrs:{src:e.h5Qrcode}}):e._e(),t("div",[e._v("网页二维码")])]),t("div",{staticClass:"code"},[e.wxappQrcode?t("img",{attrs:{src:e.wxappQrcode}}):e._e(),t("div",[e._v("小程序二维码")])])])])])},i=[],r=o("ea1d"),n={components:{},data:function(){return{title:"店铺综合二维码",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,type:"mallstore",image:"",visible:!1,wxErrorMsg:"",wxQrcode:"",wxappErrorMsg:"",wxappQrcode:"",h5ErrorMsg:"",h5Qrcode:""}},mounted:function(){console.log(this.catFid),this.getWxCode()},methods:{showModal:function(e){this.visible=!0,this.id=e,this.getWxCode(),this.getH5Code(),this.getWxappCode()},getWxCode:function(){var e=this;this.request(r["a"].seeWxQrcode,{type:this.type,id:this.id}).then((function(t){0!=t.error_code?(e.wxErrorMsg=t.msg,e.wxQrcode=""):(e.wxQrcode=t.qrcode,e.wxErrorMsg="")}))},getH5Code:function(){var e=encodeURIComponent(location.origin+"/packapp/plat/pages/shopmall_third/store_home/index?store_id="+this.id);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+e},getWxappCode:function(){var e=encodeURIComponent("pages/shopmall_third/store_home/index?store_id="+this.id);this.wxappQrcode="/index.php?g=Index&c=Recognition_wxapp&a=create_page_qrcode&page="+e},handleCancel:function(){this.visible=!1}}},a=n,c=(o("1bb5"),o("0b56")),d=Object(c["a"])(a,s,i,!1,null,"a20155ec",null);t["default"]=d.exports},"3c3c":function(e,t,o){},ea1d:function(e,t,o){"use strict";var s={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit"};t["a"]=s}}]);