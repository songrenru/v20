(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4530ea64","chunk-7477f697","chunk-7477f697"],{49420:function(e,t){var n={getrem:function(){var e=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+e+",minimum-scale="+e+",maximum-scale="+e+'" />');var t=document.getElementsByTagName("html")[0],n=t.getBoundingClientRect().width;t.style.fontSize=n/10+"px"}};e.exports=n},"6bef":function(e,t,n){},a13a:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cashier"},[n("div",{staticClass:"nav_container"},[n("div",{staticClass:"navcontent"},e._l(e.navList,(function(t,s){return n("div",{key:s,staticClass:"nav_items_wrapper",class:e.currentindex==s?"item_active":"",on:{click:function(n){return e.goroute(s,t.path)}}},[n("div",{staticClass:"icon iconfont",domProps:{innerHTML:e._s(t.icon)}}),n("div",{staticClass:"items_name"},[e._v(e._s(t.name))])])})),0),n("div",{staticClass:"dateinfo_container"},[n("div",{staticClass:"backbtn iconfont",on:{click:function(t){return e.backfnc()}}},[e._v("返回")])])]),n("div",{staticClass:"content_wrapper"},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{attrs:{refresh:e.refresh},on:{getcurrent:e.changecurrent}}):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view",{attrs:{refresh:e.refresh},on:{getcurrent:e.changecurrent}})],1)])},a=[],i=(n("6ba6"),n("5efb")),r=(n("ac1f"),n("5319"),n("99af"),n("49420")),o=n.n(r),c=n("8bbf"),u=n.n(c);u.a.use(i["a"]),o.a.getrem();var f={props:{},data:function(){return{currentindex:0,navList:[{icon:"&#xe6e5;",name:"活动核销",path:"verifiy"},{icon:"&#xe6e5;",name:"活动记录",path:"verifiyList"}],refresh:0,routePath:"/storestaff/storestaff.life_tools/appoint/"}},created:function(){this.currentindex=sessionStorage.getItem("dyz25"),""!=sessionStorage.getItem("dyz25")&&null!=sessionStorage.getItem("dyz25")&&void 0!=sessionStorage.getItem("dyz25")&&sessionStorage.getItem("dyz25")||(this.currentindex=0),this.staffname=u.a.ls.get("storestaff_page_info"),u.a.ls.get("storestaff_page_info")||this.$router.replace({name:"storestaffLogin"})},mounted:function(){},methods:{goroute:function(e,t){this.refresh++,this.currentindex=e,this.$router.replace({path:"".concat(this.routePath).concat(t)}),console.log(this.$route,"this.$route"),this.$route.meta.keepAlive=!1,sessionStorage.setItem("dyz25",e),this.removeTabStatus()},changecurrent:function(e){this.currentindex=e},backfnc:function(){sessionStorage.setItem("dyz25",0),this.$router.replace("/storestaff/storestaff.index/index"),this.removeTabStatus()},removeTabStatus:function(){var e=sessionStorage.getItem("tabStatus")||"";e&&sessionStorage.removeItem("tabStatus")}}},d=f,l=(n("e9b2"),n("2877")),m=Object(l["a"])(d,s,a,!1,null,"9f3d5eaa",null);t["default"]=m.exports},e9b2:function(e,t,n){"use strict";n("6bef")}}]);