(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66f63ec6"],{7709:function(t,i,s){"use strict";s("b334")},"9c6d":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("a-modal",{attrs:{title:"添加商品-选择商品类型",visible:t.visible,width:600,footer:null},on:{cancel:t.handleCancel}},[s("div",{staticClass:"select-cate-content"},[s("a-card",{staticClass:"select-cate-item",on:{click:function(i){return t.goAdd("normal")}}},[s("div",{staticClass:"flex"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[t._v(" 团购商品 ")]),s("div",{staticClass:"description"},[t._v(" 可用于添加服务商品、次卡、实物商品 ")])]),s("div",{staticClass:"right icon"},[s("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])]),s("a-card",{staticClass:"select-cate-item",on:{click:function(i){return t.goAdd("booking_appoint")}}},[s("div",{staticClass:"flex"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[t._v(" 场次预约 ")]),s("div",{staticClass:"description"},[t._v(" 区分全天不同时段，也可每天一价 ")])]),s("div",{staticClass:"right icon"},[s("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])]),s("a-card",{staticClass:"select-cate-item",on:{click:function(i){return t.goAdd("cashing")}}},[s("div",{staticClass:"flex"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[t._v(" 代金券 ")]),s("div",{staticClass:"description"},[t._v(" 消费可抵扣现金，利用优惠吸引到店 ")])]),s("div",{staticClass:"right icon"},[s("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])]),s("a-card",{staticClass:"select-cate-item",on:{click:function(i){return t.goAdd("course_appoint")}}},[s("div",{staticClass:"flex"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[t._v(" 课程预约 ")]),s("div",{staticClass:"description"},[t._v(" 针对教育类商家展示本店可学课程 ")])]),s("div",{staticClass:"right icon"},[s("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])])],1)])},e=[],c={data:function(){return{visible:!1}},mounted:function(){},methods:{open:function(){this.visible=!0},goAdd:function(t){switch(t){case"normal":this.$router.push({path:"/merchant/merchant.group/goodsEdit"});break;case"booking_appoint":this.$router.push({path:"/merchant/merchant.group/bookingAppoint"});break;case"cashing":this.$router.push({path:"/merchant/merchant.group/goodsCashingEdit"});break;case"course_appoint":this.$router.push({path:"/merchant/merchant.group/courseAppoint"});break}this.visible=!1},handleCancel:function(){this.visible=!1}}},n=c,o=(s("7709"),s("2877")),l=Object(o["a"])(n,a,e,!1,null,"4a210db6",null);i["default"]=l.exports},b334:function(t,i,s){}}]);