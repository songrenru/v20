(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c63e655e","chunk-2d0c20b9","chunk-2d0c20b9"],{"18de":function(t,e,n){"use strict";n.r(e);n("54f8");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cashier"},[e("div",{staticClass:"nav_container"},[e("div",{staticClass:"navcontent"},t._l(t.navList,(function(n,a){return e("div",{key:a,staticClass:"nav_items_wrapper",class:t.currentindex==a?"item_active":"",on:{click:function(e){return t.goroute(a,n.path)}}},[e("div",{staticClass:"icon iconfont",domProps:{innerHTML:t._s(n.icon)}}),e("div",{staticClass:"items_name"},[t._v(t._s(n.name))])])})),0),e("div",{staticClass:"dateinfo_container"},[e("div",{staticClass:"backbtn iconfont",on:{click:function(e){return t.backfnc()}}},[t._v("返回")])])]),e("div",{staticClass:"content_wrapper"},[e("router-view",{attrs:{refresh:t.refresh},on:{getcurrent:t.changecurrent}})],1)])},i=[],c=(n("0973"),n("0886")),s=(n("aa48"),n("3446"),n("6e84"),n("4942")),r=n.n(s),o=n("8bbf"),u=n.n(o);u.a.use(c["a"]),r.a.getrem();var f={props:{},data:function(){return{currentindex:0,navList:[{icon:"&#xe6e5;",name:"订单处理",path:"order"}],refresh:0,routePath:"/storestaff/storestaff.mall/mall/"}},created:function(){this.staffname=u.a.ls.get("storestaff_page_info"),u.a.ls.get("storestaff_page_info")||this.$router.replace({name:"storestaffLogin"})},mounted:function(){},methods:{goroute:function(t,e){this.refresh++,this.currentindex=t,this.$router.replace({path:"".concat(this.routePath).concat(e)})},changecurrent:function(t){this.currentindex=t},backfnc:function(){this.$router.replace("/storestaff/storestaff.index/index")}}},d=f,l=(n("c989"),n("0b56")),h=Object(l["a"])(d,a,i,!1,null,"f449cdbe",null);e["default"]=h.exports},4942:function(t,e){var n={getrem:function(){var t=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+t+",minimum-scale="+t+",maximum-scale="+t+'" />');var e=document.getElementsByTagName("html")[0],n=e.getBoundingClientRect().width;e.style.fontSize=n/10+"px"}};t.exports=n},c989:function(t,e,n){"use strict";n("e53bb")},e53bb:function(t,e,n){}}]);