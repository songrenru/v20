(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fc5d2d9"],{17324:function(t,e,i){"use strict";i("4108")},4108:function(t,e,i){},f954:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bind_wx"},[e("div",{staticClass:"container"},[e("div",{staticClass:"label"},[t._v("扫描二维码：")]),e("a-button",{attrs:{type:"link"},on:{click:t.viewCode}},[t._v("查看二维码")])],1),e("a-modal",{attrs:{title:"查看二维码",width:360,visible:t.codeVisible,footer:null},on:{cancel:t.handleCancel}},[e("div",{staticClass:"img_view",staticStyle:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.codeUrl}})])])],1)},c=[],s=i("8bbf"),a=Object(s["defineComponent"])({name:"bindWx",setup:function(t,e){Object(s["onMounted"])((function(){}));var i=Object(s["ref"])("https://hf.pigcms.com/static/wxapp/images/bill_msg_image_1.png"),n=Object(s["ref"])(!1),c=function(){n.value=!0},a=function(){n.value=!1};return{codeVisible:n,viewCode:c,handleCancel:a,codeUrl:i}}}),l=a,o=(i("17324"),i("2877")),d=Object(o["a"])(l,n,c,!1,null,"3d666254",null);e["default"]=d.exports}}]);