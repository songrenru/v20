(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05c16a3b"],{5822:function(t,a,s){},"666e":function(t,a,s){"use strict";s("5822")},d778:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a-modal",{attrs:{title:t.title,width:600,visible:t.visible,footer:""},on:{cancel:t.handleCancel}},t._l(t.records,(function(a){return s("div",{key:a.id,staticClass:"main"},[s("div",{staticClass:"font_bold",staticStyle:{"flex-basis":"30px"}},[1==a.is_ask?s("span",{staticClass:"red"},[t._v("问")]):s("span",{staticClass:"blue"},[t._v("答")])]),s("div",{staticStyle:{"flex-grow":"10",display:"flex"}},[s("div",{staticStyle:{"flex-basis":"50px"}},[s("img",{staticClass:"avatar",attrs:{src:a.avatar}})]),s("div",{staticStyle:{"flex-grow":"10"}},[s("div",{staticClass:"font_bold div-margin"},[t._v(t._s(a.nickname))]),s("div",{staticClass:"div-margin"},[t._v(t._s(a.create_time))]),s("div",{staticClass:"div-margin"},[t._v(t._s(a.content))]),s("div",{staticClass:"div-margin"},t._l(a.images,(function(t){return s("a-popover",{attrs:{placement:"right"}},[s("template",{slot:"content"},[s("img",{staticClass:"goods-image-big",attrs:{src:t}})]),s("img",{staticClass:"goods-image",attrs:{src:t}})],2)})),1)])])])})),0)},i=[],l=s("f91a"),n={name:"askDetail",data:function(){return{title:"详情",visible:!1,records:[]}},methods:{detail:function(t){var a=this;this.visible=!0,this.request(l["a"].askDetail,{id:t}).then((function(t){a.records=t}))},handleCancel:function(){this.visible=!1}}},r=n,c=(s("666e"),s("2877")),o=Object(c["a"])(r,e,i,!1,null,"d814e850",null);a["default"]=o.exports},f91a:function(t,a,s){"use strict";var e={searchMerchant:"/qa/platform.Ask/searchMerchant",storeLists:"/merchant/merchant.Store/getStoreList",askLists:"/qa/merchant.Ask/lists",setIndexShow:"/qa/merchant.Ask/setIndexShow",saveLabels:"/qa/merchant.Ask/saveLabels",getLabels:"/qa/merchant.Ask/getLabels",saveAskLabel:"/qa/merchant.Ask/saveAskLabel",askDetail:"/qa/merchant.Ask/askDetail",getAll:"/qa/platform.Ask/getAll",delete:"/qa/platform.Ask/delete"};a["a"]=e}}]);