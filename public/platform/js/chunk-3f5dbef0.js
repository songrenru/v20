(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f5dbef0"],{"14c0":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a-list",{attrs:{bordered:!1,grid:{gutter:[24,12],xs:2,sm:2,md:3,lg:3,xl:4,xxl:4},"data-source":t.list},scopedSlots:t._u([{key:"renderItem",fn:function(s){return a("a-list-item",{},[a("a-card",{staticClass:"item",attrs:{bordered:!1}},[a("div",{class:"title-wrap "+("classify"==t.type?"pd10-0":""),attrs:{slot:"title"},slot:"title"},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-col",[a("a-avatar",{staticClass:"img",attrs:{src:s.cat_img?s.cat_img:t.icon}})],1),a("a-col",{staticClass:"title"},[t._v(t._s(s.name))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"meal"==t.type,expression:"type == 'meal'"}],staticClass:"meal"},[a("div",[t._v("套餐内容：")]),a("div",{staticClass:"detail"},t._l(s.store_detail,(function(s,e){return a("span",{key:e,staticClass:"type-name"},[a("span",{staticClass:"cr-primary"},[t._v(t._s(s.num))]),a("span",[t._v("个"+t._s(s.type_name)+"店铺")]),a("span",{staticClass:"plus"},[t._v("+")])])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:3!=s.discount_type,expression:"item.discount_type != 3"}],staticClass:"cr-primary discount-icon"},[a("span",{staticClass:"txt"},[t._v("有优惠")])])],1),a("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("a-col",{staticClass:"cr-primary txt"},[t._v(t._s(t.currency+(s.year_price||0))+"/年")]),a("a-col",[a("a-button",{staticClass:"cr-primary btn",attrs:{size:"large"},on:{click:function(a){return t.goBuy(s.id)}}},[t._v("立即购买")])],1)],1)],1)],1)}}])})},i=[],r={props:["icon","list","currency","type"],data:function(){return{}},methods:{goBuy:function(t){this.$router.push({path:"/new_marketing/merchant/PurchaseDetail",query:{type:this.type,id:t}})}}},c=r,n=(a("9ce7"),a("2877")),l=Object(n["a"])(c,e,i,!1,null,"0fa90114",null);s["default"]=l.exports},"75e2":function(t,s,a){},"9ce7":function(t,s,a){"use strict";a("75e2")}}]);