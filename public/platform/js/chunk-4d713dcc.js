(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d713dcc","chunk-7477f697","chunk-7477f697"],{1450:function(t,e,n){},"18de":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cashier"},[n("div",{staticClass:"nav_container"},[n("div",{staticClass:"navcontent"},t._l(t.navList,(function(e,a){return n("div",{key:a,staticClass:"nav_items_wrapper",class:t.currentindex==a?"item_active":"",on:{click:function(n){return t.goroute(a,e.path)}}},[n("div",{staticClass:"icon iconfont",domProps:{innerHTML:t._s(e.icon)}}),n("div",{staticClass:"items_name"},[t._v(t._s(e.name))])])})),0),n("div",{staticClass:"dateinfo_container"},[n("div",{staticClass:"backbtn iconfont",on:{click:function(e){return t.backfnc()}}},[t._v("返回")])])]),n("div",{staticClass:"content_wrapper"},[n("router-view",{attrs:{refresh:t.refresh},on:{getcurrent:t.changecurrent}})],1)])},i=[],c=(n("6ba6"),n("5efb")),s=(n("ac1f"),n("5319"),n("99af"),n("49420")),r=n.n(s),o=n("8bbf"),f=n.n(o);f.a.use(c["a"]),r.a.getrem();var u={props:{},data:function(){return{currentindex:0,navList:[{icon:"&#xe6e5;",name:"订单处理",path:"order"}],refresh:0,routePath:"/storestaff/storestaff.mall/mall/"}},created:function(){this.staffname=f.a.ls.get("storestaff_page_info"),f.a.ls.get("storestaff_page_info")||this.$router.replace({name:"storestaffLogin"})},mounted:function(){},methods:{goroute:function(t,e){this.refresh++,this.currentindex=t,this.$router.replace({path:"".concat(this.routePath).concat(e)})},changecurrent:function(t){this.currentindex=t},backfnc:function(){this.$router.replace("/storestaff/storestaff.index/index")}}},d=u,l=(n("c989"),n("0c7c")),h=Object(l["a"])(d,a,i,!1,null,"f449cdbe",null);e["default"]=h.exports},49420:function(t,e){var n={getrem:function(){var t=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+t+",minimum-scale="+t+",maximum-scale="+t+'" />');var e=document.getElementsByTagName("html")[0],n=e.getBoundingClientRect().width;e.style.fontSize=n/10+"px"}};t.exports=n},c989:function(t,e,n){"use strict";n("1450")}}]);