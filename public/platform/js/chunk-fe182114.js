(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe182114","chunk-7477f697","chunk-7477f697"],{49420:function(e,t){var n={getrem:function(){var e=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+e+",minimum-scale="+e+",maximum-scale="+e+'" />');var t=document.getElementsByTagName("html")[0],n=t.getBoundingClientRect().width;t.style.fontSize=n/10+"px"}};e.exports=n},"86a8":function(e,t,n){"use strict";n("f7d8")},"9ad1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cashier"},[n("div",{staticClass:"nav_container"},[n("div",{staticClass:"navcontent"},e._l(e.navList,(function(t,a){return n("div",{key:a,staticClass:"nav_items_wrapper",class:e.currentindex==t.path?"item_active":"",on:{click:function(n){return e.goroute(a,t.path)}}},[n("div",{staticClass:"items_icon"},[n("IconFont",{attrs:{type:t.icon}})],1),n("div",{staticClass:"items_name"},[e._v(e._s(t.name))])])})),0),n("div",{staticClass:"dateinfo_container"},[n("div",{staticClass:"timebox"},[n("span",{staticClass:"hour",domProps:{innerHTML:e._s(e.dateshow.hour)}}),n("span",{staticClass:"m"},[e._v(":")]),n("span",{staticClass:"minutes",domProps:{innerHTML:e._s(e.dateshow.minutes)}})]),n("div",{staticClass:"datebox"},[n("span",{domProps:{innerHTML:e._s(e.dateshow.todate)}})]),n("div",{staticClass:"weekendbox",domProps:{innerHTML:e._s(e.dateshow.weekend)}}),n("div",{staticClass:"backbtn iconfont",on:{click:function(t){return e.backfnc()}}},[n("a-icon",{attrs:{type:"rollback"}}),e._v(e._s(e.L("返回")))],1)])]),n("div",{staticClass:"content_wrapper"},[n("router-view",{attrs:{refresh:e.refresh},on:{getcurrent:e.changecurrent}})],1)])},s=[],i=(n("ac1f"),n("5319"),n("8bbf")),o=n.n(i),c=n("49420"),r=n.n(c),h=n("5bb2"),d=n("8511");r.a.getrem();var u={props:{},components:{IconFont:h["a"]},data:function(){return{currentindex:0,navList:[{icon:"icondingdan1",name:this.L("订单处理"),path:"order"},{icon:"iconcanyin1",name:this.L("桌台管理"),path:"diningTable"},{icon:"iconpaiduijiaohao_xianxing",name:this.L("排号列表"),path:"queueList"},{icon:"iconyunicon_qingli",name:this.L("沽清"),path:"clear"},{icon:"iconchaxun",name:this.L("订单查询"),path:"query"},{icon:"iconyudiancan0101",name:this.L("快速点单"),path:"orderQuickly"}],dateshow:{hour:"",minutes:"",todate:"",weekend:""},refresh:0}},created:function(){var e=this;setInterval((function(){e.getdateToday()}),1e3),this.$bus.$on("changecurrent",(function(t){e.changecurrent(t)})),o.a.ls.get("storestaff_page_info")||this.$router.replace({name:"storestaffLogin"}),Object(d["b"])("dining")},mounted:function(){},methods:{goroute:function(e,t){console.log("-----------goroute:",e),this.refresh++,this.currentindex=t,"diningTable"==t&&(this.$store.commit("changeOrder",""),this.$store.commit("changeTable",""),this.$store.commit("changeleftState",""),this.$store.commit("changenowSelectgooodsNum","")),console.log("-----------toPath:",t),"orderQuickly"==t?this.$router.replace({name:t,query:{clean:!0}}):this.$router.replace({name:t})},changecurrent:function(e){console.log(e,"e---changecurrent"),this.currentindex=e},backfnc:function(){this.$router.replace("/storestaff/storestaff.index/index")},getdateToday:function(){var e=this,t=new Date,n=t.getHours(),a=t.getMinutes(),s=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),c=t.getDay();switch(n<10&&(n="0"+n),a<10&&(a="0"+a),c){case 0:this.dateshow.weekend=this.L("星期日");break;case 1:this.dateshow.weekend=this.L("星期一");break;case 2:this.dateshow.weekend=this.L("星期二");break;case 3:this.dateshow.weekend=this.L("星期三");break;case 4:this.dateshow.weekend=this.L("星期四");break;case 5:this.dateshow.weekend=this.L("星期五");break;case 6:this.dateshow.weekend=this.L("星期六");break}this.$nextTick((function(){e.dateshow.hour!=n&&(e.dateshow.hour=n),e.dateshow.minutes!=a&&(e.dateshow.minutes=a),e.dateshow.todate!=s+"/"+i+"/"+o&&(e.dateshow.todate=s+"/"+i+"/"+o)}))}}},l=u,m=(n("86a8"),n("0c7c")),f=Object(m["a"])(l,a,s,!1,null,null,null);t["default"]=f.exports},f7d8:function(e,t,n){}}]);