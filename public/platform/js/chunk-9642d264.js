(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9642d264"],{3392:function(t,o,i){"use strict";i.r(o);var n=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"container"},[i("div",{staticClass:"center_box"},[i("div",{staticClass:"title"},[t._v(t._s(t.info.title))]),i("div",{staticClass:"text_1"},[t._v(t._s(t.info.des))]),i("div",{staticClass:"flex_box_1"},t._l(t.listdata,(function(o,n){return i("div",{staticClass:"item_box"},[i("img",{staticClass:"img_1",attrs:{src:o.img,alt:""}}),i("div",{staticClass:"flex_1"},[i("div",{staticClass:"text_2"},[t._v(t._s(o.title))]),0==n||1==n?i("div",{staticClass:"text_3"},[t._v(t._s(o.des))]):t._e(),t._l(o.children,(function(o,e){return 2==n?i("div",{staticClass:"flex_text_box"},[i("div",{staticClass:"dot"}),i("div",{staticClass:"text_4",on:{click:function(i){return t.gourl_a(o.url)}}},[t._v(t._s(o.title))])]):t._e()})),0==n||1==n?i("div",{staticClass:"btn_a",on:{click:function(i){return t.gourl(o.url)}}},[t._v(t._s(o.btn))]):t._e()],2),i("img",{attrs:{src:o.num_img,alt:""}})])})),0),i("div",{staticClass:"flex_box_2"},[i("div",{staticClass:"text_4"},[t._v(t._s(t.info.tip))]),i("div",{staticClass:"btn_b",on:{click:t.gourl_b}},[t._v("完成配置")])])]),i("img",{staticClass:"logo",attrs:{src:t.info.system_admin_logo,alt:""}}),i("div",{staticClass:"tip"},[t._v(t._s(t.tip))])])},e=[],r=(i("b64b"),i("47c8")),s=i("e37c"),a=null,c={data:function(){return{info:{},listdata:[],tip:""}},created:function(){a=this,a.getConfig(),a.getinitinfo()},mounted:function(){},methods:{getConfig:function(){var t=this.$store.getters.config;Object.keys(t).length?(a.tip=t.copyright_txt,console.log("this.config",t)):setTimeout((function(){a.getConfig()}),300)},getinitinfo:function(){this.request(r["a"].propertyGuide).then((function(t){console.log("+++++++",t),a.info=t,a.listdata=t.block}))},gourl:function(t){window.open(t)},gourl_a:function(t){window.open(t)},gourl_b:function(){var t=this;this.request(r["a"].completePropertyGuide).then((function(o){console.log("+++++++",o),t.$router.push({path:s["a"].propertyIndex})}))}}},l=c,u=(i("5834"),i("2877")),m=Object(u["a"])(l,n,e,!1,null,"4ae4f318",null);o["default"]=m.exports},"47c8":function(t,o,i){"use strict";var n={config:"/community/login.login/config",login:"/community/login.login/check",sendCode:"/community/login.PropertyGuide/sendCode",addInformation:"/community/login.PropertyGuide/addInformation",propertyGuide:"/community/login.PropertyGuide/propertyGuide",completePropertyGuide:"/community/login.PropertyGuide/completePropertyGuide",workerAdd:"/community/common.Framework/workerAdd",workerSub:"/community/common.Framework/workerSub",workerDel:"/community/common.Framework/workerDel",workerQuery:"/community/common.Framework/workerQuery",organizationDel:"/community/common.Framework/organizationDel",organizationAdd:"/community/common.Framework/organizationAdd",organizationSub:"/community/common.Framework/organizationSub",organizationSynQw:"/community/common.Framework/organizationSynQw"};o["a"]=n},5834:function(t,o,i){"use strict";i("fd65")},fd65:function(t,o,i){}}]);