(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42763524","chunk-7477f697","chunk-7477f697"],{1483:function(e,t,n){},49420:function(e,t){var n={getrem:function(){var e=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+e+",minimum-scale="+e+",maximum-scale="+e+'" />');var t=document.getElementsByTagName("html")[0],n=t.getBoundingClientRect().width;t.style.fontSize=n/10+"px"}};e.exports=n},8511:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return h}));n("d3b7"),n("159b"),n("a9e3");var s=n("a8dc"),o=n("b775"),i=n("56cd"),a=null,r=null,c=0,l=new Audio,u=0;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"index",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a&&(clearInterval(a),a&&window.clearInterval&&window.clearInterval(a),a=null),a=setInterval((function(){Object(o["c"])(s["a"].orderNotice,{app_type:"packapp",now_time:c}).then((function(n){if(n){c=n.now_time,u=n.staff_id;n.count;if(r=sessionStorage.getItem("orderNoticeData"+u),r&&null!=r&&"null"!=r)if(r=JSON.parse(r),r.list.length>0&&n.list.length>0){var s=[];n.list.forEach((function(e){r.list.forEach((function(t){e.business_type==t.business_type&&(e.new_order_count=parseInt(e.new_order_count),e.new_order_count=parseInt(e.new_order_count)+parseInt(t.new_order_count))})),n.business_type==e.business_type&&e.new_order_count,s.push(e)})),n.list=s}else r.list.length>0&&(n.list=r.list);if(sessionStorage.setItem("orderNoticeData"+u,JSON.stringify(n)),n.voice_url){l&&(l.pause(),l=null,console.log("播放前先把之前语音暂停")),l=new Audio;var o=0;l.src=n.voice_url;var a=l.play();console.log(a,"playPromise"),a&&a.then((function(){l.play(),console.log("音频加载成功")})).catch((function(e){console.log("音频加载失败 重新加载"),o=0})),l.addEventListener("ended",(function(e){o++,console.log(o,"音频播放次数"),o>Number(n.voice_time)||o==Number(n.voice_time)?(l&&(l.pause(),l=null),console.log("全部播放完毕关闭语音"),o=0):(l.play(),console.log("音频多次播放成功"))}))}if("index"==e&&t)t(n);else{if(!n.business_type)return!0;i["a"].destroy(),i["a"].open({message:n.title,description:n.s_title,icon:function(e){return e("a-icon",{props:{type:"bell",theme:"twoTone"}})},onClick:function(){"many"!=n.business_type&&h(n.business_type),l&&(l.pause(),l=null),console.log("onClick停止播放"),i["a"].destroy(),n.url==location.href?window.location.reload():window.open(n.url,"_self")},onClose:function(){l&&(l.pause(),l=null),console.log("onClose停止播放")},duration:null,style:{cursor:"pointer"}})}}}))}),3e3)}function h(e){if(l&&(l.pause(),l=null),console.log("clearNotice停止播放"),r=sessionStorage.getItem("orderNoticeData"+u),r&&null!=r&&"null"!=r&&(r=JSON.parse(r),r.list.length>0)){var t=[];r.list.forEach((function(n){n.business_type==e&&(n.new_order_count=0),t.push(n)})),r.list=t,sessionStorage.setItem("orderNoticeData"+u,JSON.stringify(r))}}},"86a8":function(e,t,n){"use strict";n("1483")},"9ad1":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cashier"},[n("div",{staticClass:"nav_container"},[n("div",{staticClass:"navcontent"},e._l(e.navList,(function(t,s){return n("div",{key:s,staticClass:"nav_items_wrapper",class:e.currentindex==t.path?"item_active":"",on:{click:function(n){return e.goroute(s,t.path)}}},[n("div",{staticClass:"items_icon"},[n("IconFont",{attrs:{type:t.icon}})],1),n("div",{staticClass:"items_name"},[e._v(e._s(t.name))])])})),0),n("div",{staticClass:"dateinfo_container"},[n("div",{staticClass:"timebox"},[n("span",{staticClass:"hour",domProps:{innerHTML:e._s(e.dateshow.hour)}}),n("span",{staticClass:"m"},[e._v(":")]),n("span",{staticClass:"minutes",domProps:{innerHTML:e._s(e.dateshow.minutes)}})]),n("div",{staticClass:"datebox"},[n("span",{domProps:{innerHTML:e._s(e.dateshow.todate)}})]),n("div",{staticClass:"weekendbox",domProps:{innerHTML:e._s(e.dateshow.weekend)}}),n("div",{staticClass:"backbtn iconfont",on:{click:function(t){return e.backfnc()}}},[n("a-icon",{attrs:{type:"rollback"}}),e._v(e._s(e.L("返回")))],1)])]),n("div",{staticClass:"content_wrapper"},[n("router-view",{attrs:{refresh:e.refresh},on:{getcurrent:e.changecurrent}})],1)])},o=[],i=(n("ac1f"),n("5319"),n("8bbf")),a=n.n(i),r=n("49420"),c=n.n(r),l=n("5bb2"),u=n("8511");c.a.getrem();var d={props:{},components:{IconFont:l["a"]},data:function(){return{currentindex:0,navList:[{icon:"icondingdan1",name:this.L("订单处理"),path:"order"},{icon:"iconcanyin1",name:this.L("桌台管理"),path:"diningTable"},{icon:"iconpaiduijiaohao_xianxing",name:this.L("排号列表"),path:"queueList"},{icon:"iconyunicon_qingli",name:this.L("沽清"),path:"clear"},{icon:"iconchaxun",name:this.L("订单查询"),path:"query"},{icon:"iconyudiancan0101",name:this.L("快速点单"),path:"orderQuickly"}],dateshow:{hour:"",minutes:"",todate:"",weekend:""},refresh:0}},created:function(){var e=this;setInterval((function(){e.getdateToday()}),1e3),this.$bus.$on("changecurrent",(function(t){e.changecurrent(t)})),a.a.ls.get("storestaff_page_info")||this.$router.replace({name:"storestaffLogin"}),Object(u["b"])("dining")},mounted:function(){},methods:{goroute:function(e,t){console.log("-----------goroute:",e),this.refresh++,this.currentindex=t,"diningTable"==t&&(this.$store.commit("changeOrder",""),this.$store.commit("changeTable",""),this.$store.commit("changeleftState",""),this.$store.commit("changenowSelectgooodsNum","")),console.log("-----------toPath:",t),"orderQuickly"==t?this.$router.replace({name:t,query:{clean:!0}}):this.$router.replace({name:t})},changecurrent:function(e){console.log(e,"e---changecurrent"),this.currentindex=e},backfnc:function(){this.$router.replace("/storestaff/storestaff.index/index")},getdateToday:function(){var e=this,t=new Date,n=t.getHours(),s=t.getMinutes(),o=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),r=t.getDay();switch(n<10&&(n="0"+n),s<10&&(s="0"+s),r){case 0:this.dateshow.weekend=this.L("星期日");break;case 1:this.dateshow.weekend=this.L("星期一");break;case 2:this.dateshow.weekend=this.L("星期二");break;case 3:this.dateshow.weekend=this.L("星期三");break;case 4:this.dateshow.weekend=this.L("星期四");break;case 5:this.dateshow.weekend=this.L("星期五");break;case 6:this.dateshow.weekend=this.L("星期六");break}this.$nextTick((function(){e.dateshow.hour!=n&&(e.dateshow.hour=n),e.dateshow.minutes!=s&&(e.dateshow.minutes=s),e.dateshow.todate!=o+"/"+i+"/"+a&&(e.dateshow.todate=o+"/"+i+"/"+a)}))}}},h=d,f=(n("86a8"),n("0c7c")),p=Object(f["a"])(h,s,o,!1,null,null,null);t["default"]=p.exports},a8dc:function(e,t,n){"use strict";var s={login:"/storestaff/storestaff.user.login/index",qrcode:"/storestaff/storestaff.user.login/seeQrcode",codeLoginResult:"/storestaff/storestaff.user.login/scanLogin",imgCode:"/v20/public/index.php/storestaff/storestaff.user.login/verify",getIndexPageInfo:"/storestaff/storestaff.index/index",orderNotice:"/storestaff/storestaff.index/orderNotice",getPrintHas:"/storestaff/storestaff.PrintDevice/getPrintHas",getOwnPrinter:"/storestaff/storestaff.PrintDevice/getOwnPrinter"};t["a"]=s}}]);