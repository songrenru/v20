(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75d7ac47"],{"4b58":function(t,i,e){},"6a63":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"audit_information"},[e("object",{staticStyle:{width:"100%",height:"100%"},attrs:{type:"text/html",data:t.iframeUrl}},[e("p",[t._v("backup content")])])])},r=[],n=(e("a9e3"),{data:function(){return{iframeUrl:""}},props:{pigcmsId:{type:Number,default:0}},watch:{pigcmsId:{immediate:!0,handler:function(t,i){t&&this.getUrl(t)}}},methods:{getUrl:function(t){var i=this;this.request("/community/village_api.cashier/material_list",{pigcms_id:t}).then((function(t){i.iframeUrl="",console.log("this.iframeUrl===>1",i.iframeUrl),i.$nextTick((function(){i.iframeUrl=t.url,console.log("this.iframeUrl===>2",i.iframeUrl)}))}))}}}),c=n,l=(e("83d4"),e("2877")),s=Object(l["a"])(c,a,r,!1,null,"47bbd34a",null);i["default"]=s.exports},"83d4":function(t,i,e){"use strict";e("4b58")}}]);