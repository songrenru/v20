(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b9a7ecd"],{"00b5":function(t,i,e){},"557d":function(t,i,e){"use strict";e("00b5")},"8b71":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-card",{attrs:{title:"街道功能库"}},[e("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),e("div",{staticClass:"header-title"},[t._v(" 请选择模块： ")]),t._l(t.appList,(function(i,s){return e("div",{key:s,staticClass:"body-item"},[e("div",{staticClass:"son_items"},[e("div",{staticClass:"items-left"},[t._v(t._s(i.name))]),e("a",{on:{click:function(e){return t.selected_url(i.linkcode)}}},[e("div",{staticClass:"items-right"},[t._v("选中")])])])])}))],2)],1)},n=[],a=e("a0e0"),l=e("ca00"),o={name:"functionLibrary",data:function(){return{title:"插入连接或者关键词",visible:!1,confirmLoading:!1,appList:{title:"",url:""},id:0,type:"",tokenName:"",sysName:""}},methods:{FunctionLibrary:function(t,i){var e=Object(l["j"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.title="插入连接或者关键词",this.visible=!0,this.id=i,this.type=t,this.AppLists()},AppLists:function(){var t=this;console.log("id",this.id),console.log("type",this.type);var i={id:this.id,type:this.type};this.tokenName&&(i["tokenName"]=this.tokenName),this.request(a["a"].childLibrary,i).then((function(i){console.log("res",i),t.appList=i.list}))},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1}}},c=o,r=(e("557d"),e("2877")),d=Object(r["a"])(c,s,n,!1,null,null,null);i["default"]=d.exports}}]);