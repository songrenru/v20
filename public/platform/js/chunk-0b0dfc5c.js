(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b0dfc5c"],{"04c9":function(e,t,r){},"8fbc":function(e,t,r){"use strict";r("04c9")},df1a:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order_wrapper pt-20 pb-20"},[e.loading?r("div",{staticClass:"loading"},[r("a-spin",{attrs:{size:"large"}})],1):r("div",{staticClass:"order"},[r("a-tabs",{attrs:{activeKey:e.orderType},on:{change:e.tabChange}},[e._l(e.orderTypes,(function(t){return r("a-tab-pane",{key:t.key,attrs:{tab:t.value}},[1==t.key?r("div",[r("div",{staticClass:"flex align-center"},[r("div",{staticClass:"w-100 mr-20"},[e._v(e._s(e.L("预约到店时间"))+"：")]),r("div",{staticClass:"flex-1"},e._l(e.orderTimes,(function(t){return r("a-checkable-tag",{key:t.key,staticStyle:{cursor:"pointer"},attrs:{checked:t.checked},on:{change:function(r){return e.setChecked(e.orderTimes,"orderTime",t.key)}}},[e._v(" "+e._s(t.value)+" ")])})),1)])]):e._e(),2==t.key?r("div",[r("div",{staticClass:"flex align-center"},[r("div",{staticClass:"w-100 mr-20"},[e._v(e._s(e.L("订单状态"))+"：")]),r("div",{staticClass:"flex-1"},e._l(e.orderStatuss,(function(t){return r("a-checkable-tag",{key:t.key,staticStyle:{cursor:"pointer"},attrs:{checked:t.checked},on:{change:function(r){return e.setChecked(e.orderStatuss,"orderStatus",t.key)}}},[e._v(" "+e._s(t.value)+" ")])})),1)]),r("div",{staticClass:"flex align-center"},[r("div",{staticClass:"w-100 mr-20 mt-10"},[e._v(e._s(e.L("订单来源"))+"：")]),r("div",{staticClass:"flex-1"},e._l(e.orderFroms,(function(t){return r("a-checkable-tag",{key:t.key,staticStyle:{cursor:"pointer"},attrs:{checked:t.checked},on:{change:function(r){return e.setChecked(e.orderFroms,"orderFrom",t.key)}}},[e._v(" "+e._s(t.value)+" ")])})),1)])]):e._e(),e.orderList.length?r("div",[r("div",{staticClass:"order-list scroll_content mt-20",style:"height:"+e.listHeight+"px"},e._l(e.orderList,(function(t,s){return r("order-item",{key:t.order_id,attrs:{order:t,index:s},on:{change:e.handleOrderItemChange}})})),1),r("div",{staticClass:"mt-10 text-right"},[r("a-pagination",{attrs:{"page-size":e.pageSize,total:e.total},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},change:e.pageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)]):r("div",{staticClass:"mt-50 text-center cr-99 fs-16"},[e._v(e._s(e.dataTips))])])})),r("div",{staticClass:"w-400 search-order",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[r("a-input-search",{attrs:{placeholder:e.L("请输入订单号、手机号、桌号、昵称"),"allow-clear":"","enter-button":""},on:{search:e.onSearch}})],1)],2)],1)])},i=[],o=(r("a9e3"),r("d3b7"),r("159b"),r("ea21")),a={components:{OrderItem:o["default"]},props:{refresh:{type:Number,default:0}},data:function(){return{orderTypes:[],orderType:null,orderTimes:[],orderTime:null,orderStatuss:[],orderStatus:null,orderFroms:[],orderFrom:null,keywords:"",orderList:[],orderListHeight:0,dataTips:"",page:1,pageSize:10,total:0,loading:!0}},watch:{refresh:function(e){this.orderType=null,this.orderTime=null,this.orderStatus=null,this.orderFrom=null,this.getFilterData()}},mounted:function(){var e=this;this.$emit("getcurrent","order"),this.$nextTick((function(){e.init(),window.onresize=function(){e.timer=setTimeout((function(){e.init()}),600)}})),"nomarlCode"==this.$store.state.storestaff.orderPageState&&(this.orderType=2,this.orderFrom=3,this.$store.commit("changeorderPageState","")),this.getFilterData()},computed:{listHeight:function(){return 1==this.orderType?this.orderListHeight:2==this.orderType?this.orderListHeight-30:void 0}},methods:{init:function(){this.orderListHeight=document.body.clientHeight-200},getFilterData:function(){var e=this;this.loading=!0,this.request("/foodshop/storestaff.order/searchCondition").then((function(t){console.log("筛选数组：",t),t.type&&t.type.length&&(e.orderTypes=t.type,null==e.orderType&&(e.orderType=t.type[0].key)),e.setChecked(t.order_time,"orderTime",e.orderTime),e.setChecked(t.order_status,"orderStatus",e.orderStatus),e.setChecked(t.order_source,"orderFrom",e.orderFrom),e.getOrderList(),e.loading=!1}))},setChecked:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;if(e&&e.length){var s=r;switch(e.forEach((function(e,t){e.checked=!1,r==e.key&&(e.checked=!0)})),e.length&&null==s&&(s=e[0].key,e[0].checked=!0),t){case"orderTime":this.orderTimes=e,this.orderTime=s;break;case"orderFrom":this.orderFroms=e,this.orderFrom=s;break;case"orderStatus":this.orderStatuss=e,this.orderStatus=s;break}null!=r&&(this.page=1,this.getOrderList())}},getOrderList:function(){var e=this;this.dataTips="正在加载...";var t={type:this.orderType,keywords:this.keywords,page:this.page,pageSize:this.pageSize};1==this.orderType?t.order_time=this.orderTime:2==this.orderType&&(t.order_status=this.orderStatus,t.order_source=this.orderFrom),this.orderList=[],this.request("/foodshop/storestaff.order/operateOrderList",t).then((function(t){console.log("订单列表:",t),t.list&&t.list.length?(e.dataTips="",e.orderList=t.list,e.total=t.total):e.dataTips=e.L("暂无数据")}))},tabChange:function(e){this.orderType=e,this.page=1,this.getOrderList()},onSearch:function(e){this.keywords=e,this.page=1,this.getOrderList()},pageChange:function(e,t){this.page=e,this.getOrderList(),console.log(e,t)},handleOrderItemChange:function(e){"refresh"==e.type&&this.getFilterData()}}},n=a,d=(r("8fbc"),r("0c7c")),c=Object(d["a"])(n,s,i,!1,null,"c95f2b12",null);t["default"]=c.exports}}]);