(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61960734","chunk-2d0c20b9","chunk-2d0c20b9"],{4942:function(t,e){var a={getrem:function(){var t=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+t+",minimum-scale="+t+",maximum-scale="+t+'" />');var e=document.getElementsByTagName("html")[0],a=e.getBoundingClientRect().width;e.style.fontSize=a/10+"px"}};t.exports=a},aa87:function(t,e,a){"use strict";a.r(e);a("9ae4");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagehelper"},[e("div",{staticClass:"left_nav",on:{click:function(e){return t.navClick("left")}}}),e("div",{staticClass:"first_page",class:1==t.page?"":"page_active",on:{click:function(e){return t.navClick("first")}}},[t._v("首页")]),t.total.length<=6?e("div",{staticClass:"page_list"},t._l(t.total,(function(a,i){return e("div",{key:i,staticClass:"page_list_number",class:t.page==a?"page_list_number_active":"",on:{click:function(e){return t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])})),0):t._e(),t.total.length>6&&t.page<=6?e("div",{staticClass:"page_list"},[t._l(t.total.slice(0,6),(function(a,i){return e("div",{key:i,staticClass:"page_list_number",class:t.page==a?"page_list_number_active":"",on:{click:function(e){return t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])})),t.page<=6?e("div",{staticClass:"page_list_more"},[t._v(" ... ")]):t._e()],2):t._e(),t.total.length>6&&t.page>6&&t.page<=t.total.length-6?e("div",{staticClass:"page_list"},[t.page>=6?e("div",{staticClass:"page_list_more"},[t._v(" ... ")]):t._e(),t._l(t.total.slice(t.page-3,t.page+3),(function(a,i){return e("div",{key:i,staticClass:"page_list_number",class:t.page==a?"page_list_number_active":"",on:{click:function(e){return t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])})),t.page<=t.total.length-6?e("div",{staticClass:"page_list_more"},[t._v(" ... ")]):t._e()],2):t._e(),t.total.length>6&&t.page>t.total.length-6&&t.page>6?e("div",{staticClass:"page_list"},[t.page>6?e("div",{staticClass:"page_list_more"},[t._v(" ... ")]):t._e(),t._l(t.total.slice(t.total.length-6,t.total.length),(function(a,i){return e("div",{key:i,staticClass:"page_list_number",class:t.page==a?"page_list_number_active":"",on:{click:function(e){return t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])}))],2):t._e(),e("div",{staticClass:"last_page",class:t.page==t.total.length?"":"page_active",on:{click:function(e){return t.navClick("last")}}},[t._v("尾页")]),e("div",{staticClass:"right_nav",on:{click:function(e){return t.navClick("right")}}})])},s=[],n=(a("19f1"),a("4942")),l=a.n(n);a("8bbf");l.a.getrem();var c={name:"PageHelper",props:{totalP:{type:Number,default:0},pageP:{type:Number,default:1},sizeP:{type:Number,default:1}},watch:{totalP:function(t,e){var a=0,i=0;this.total=[],a=t||e,i=a%this.sizeP==0?parseInt(a/this.sizeP):parseInt(a/this.sizeP)+1,console.log("totalPage======>",i);for(var s=1;s<=i;s++)this.total.push(s);console.log("watch======>",this.total)},sizeP:function(t,e){t&&console.log("cur===>",t)},pageP:function(t,e){this.page=t||e}},data:function(){return{total:[],page:this.pageP,size:this.sizeP}},created:function(){var t=0;t=this.totalP%this.sizeP==0?parseInt(this.totalP/this.sizeP):parseInt(this.totalP/this.sizeP)+1;for(var e=1;e<=t;e++)this.total.push(e)},methods:{navClick:function(t){if("left"==t){if(!(this.page>1))return;this.page--}else if("right"==t){if(!(this.page<this.total.length))return;this.page++}else"first"==t?this.page=1:"last"==t&&(this.page=this.total.length);this.$emit("changePage",this.page)},changePage:function(t){this.page=t,this.$emit("changePage",this.page)}}},g=c,o=(a("ad58"),a("0b56")),r=Object(o["a"])(g,i,s,!1,null,"793f9bc3",null);e["default"]=r.exports},ad58:function(t,e,a){"use strict";a("e25b")},e25b:function(t,e,a){}}]);