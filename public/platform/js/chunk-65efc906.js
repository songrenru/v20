(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65efc906"],{9423:function(t,e,n){},"953a":function(t,e,n){"use strict";n("9423")},eb78:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-ff homePage"},t._l(t.list,(function(n){return e("div",{key:n.id,staticClass:"item",class:[t.current==n.id?"active":""],on:{click:function(e){return t.componentChangeOpt(n)}}},[t._v(" "+t._s(n.label)+" ")])})),0)},s=[],o=(n("cd5d"),n("c5cb"),{props:{source:{type:String,default:""}},data:function(){return{current:"index",list:[{label:this.L("首页装修"),id:"index",page_title:this.L("首页"),showList:["merchant","store"]},{label:this.L("个人中心"),id:"my",page_title:this.L("个人中心"),showList:["merchant","store"]},{label:this.L("底部导航"),id:"footerTabbar",page_title:"",showList:["merchant","store"]},{label:this.L("悬浮窗"),id:"floatBtn",page_title:"",showList:["merchant","store"]}]}},created:function(){this.$emit("getComponentInfo",this.getComponentInfo()),this.$store.dispatch("updateComponentId",this.current)},mounted:function(){},methods:{componentChangeOpt:function(t){this.current!=t.id&&(this.current=t.id,this.$store.dispatch("updatePageInfo",""),this.$store.dispatch("updateComponentId",this.current),this.$emit("getComponentInfo",this.getComponentInfo()))},getComponentInfo:function(){var t=this,e=this.list.filter((function(e){return e.id==t.current}))[0]||"";return e}}}),r=o,c=(n("953a"),n("0b56")),a=Object(c["a"])(r,i,s,!1,null,"d802c25c",null);e["default"]=a.exports}}]);