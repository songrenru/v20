(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-138cfc90"],{"1bb5":function(e,t,n){"use strict";n("5d7d")},"2dfe":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[n("div",{staticClass:"content"},[n("div",{staticClass:"code-box"},[n("div",{staticClass:"code"},[e.wxQrcode?n("img",{attrs:{src:e.wxQrcode}}):e._e(),e.wxErrorMsg?n("div",{staticClass:"error-msg"},[e._v(e._s(e.wxErrorMsg))]):e._e(),n("div",[e._v("公众号二维码")])]),n("div",{staticClass:"code"},[e.h5Qrcode?n("img",{attrs:{src:e.h5Qrcode}}):e._e(),n("div",[e._v("网页二维码")])]),n("div",{staticClass:"code"},[e.wxappQrcode?n("img",{attrs:{src:e.wxappQrcode}}):e._e(),n("div",[e._v("小程序二维码")])])])])])},c=[],s=n("ea1d"),a={components:{},data:function(){return{title:"店铺综合二维码",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,type:"mallstore",image:"",visible:!1,wxErrorMsg:"",wxQrcode:"",wxappErrorMsg:"",wxappQrcode:"",h5ErrorMsg:"",h5Qrcode:""}},mounted:function(){console.log(this.catFid),this.getWxCode()},methods:{showModal:function(e){this.visible=!0,this.id=e,this.getWxCode(),this.getH5Code(),this.getWxappCode()},getWxCode:function(){var e=this;this.request(s["a"].seeWxQrcode,{type:this.type,id:this.id}).then((function(t){0!=t.error_code?(e.wxErrorMsg=t.msg,e.wxQrcode=""):(e.wxQrcode=t.qrcode,e.wxErrorMsg="")}))},getH5Code:function(){var e=encodeURIComponent(location.origin+"/packapp/plat/pages/shopmall_third/store_home/index?store_id="+this.id);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+e},getWxappCode:function(){var e=encodeURIComponent("pages/shopmall_third/store_home/index?store_id="+this.id);this.wxappQrcode="/index.php?g=Index&c=Recognition_wxapp&a=create_page_qrcode&page="+e},handleCancel:function(){this.visible=!1}}},o=a,i=(n("1bb5"),n("2877")),d=Object(i["a"])(o,r,c,!1,null,"a20155ec",null);t["default"]=d.exports},"5d7d":function(e,t,n){},ea1d:function(e,t,n){"use strict";var r={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit",merAccountList:"/merchant/merchant.system.MerchantMenu/userAccountList",merAccountDel:"/merchant/merchant.system.MerchantMenu/userAccountDelete",merAccountEdit:"/merchant/merchant.system.MerchantMenu/userAccountAddOrEdit",importMerAccount:"/merchant/merchant.system.MerchantMenu/importAccount",merchantMenu:"/merchant/merchant.system.MerchantMenu/merchantMenu",merStationsList:"/merchant/merchant.system.MerchantMenu/stations",merStationsSave:"/merchant/merchant.system.MerchantMenu/saveStation",merStationsDel:"/merchant/merchant.system.MerchantMenu/delStation"};t["a"]=r}}]);