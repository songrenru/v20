(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89172614"],{"28d4":function(t,a,e){"use strict";e.r(a);e("b0c0");var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-ff wrap"},[a("div",{staticClass:"page-title"},[t._v(t._s(t.detail.name||"")+"商家信息及订单")]),a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"mt-20"},[a("a-row",{staticClass:"mb-10 mt-10"},[a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("商家名称：")]),a("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.name||"-"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("商家编号：")]),a("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.mer_id||"-"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("商家注册时间：")]),a("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.reg_time||"-"))])])])],1),a("a-row",{staticClass:"mt-10"},[a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("商家手机号：")]),a("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.phone||"-"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("营业店铺数：")]),a("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.store_num||"0"))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"text-nowrap"},[t._v("商家地址：")]),a("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.address||"-"))])])])],1)],1),a("a-divider",{staticStyle:{"margin-top":"50px"}}),a("a-table",{staticClass:"mt-20",attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination,rowKey:"order_id"},scopedSlots:t._u([{key:"store_name",fn:function(e,s){return a("span",{},[a("span",e?[t._v(t._s(e)),"1"==s.order_type?a("span",{staticClass:"cr-primary"},[t._v("(续费)")]):t._e()]:[t._v("-")])])}},{key:"action",fn:function(e,s){return a("span",{},[a("a-button",{attrs:{type:"link"},on:{click:function(a){return t.actionBtn(s)}}},[t._v("查看详情")])],1)}}])})],1),a("a-drawer",{attrs:{width:"60%",title:"订单详情",placement:"right",closable:!1,visible:t.drawerVisible},on:{close:function(a){t.drawerVisible=!1}}},[a("OrderDetail",{attrs:{orderId:t.orderId,type:"mer"}})],1)],1)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"fw-bold fs-16"},[a("span",[t._v("商家基本信息")])])}],n=e("c1df"),r=e.n(n),o=e("126e"),c=e("aa80"),l={components:{OrderDetail:c["default"]},data:function(){return{id:"",detail:"",columns:[{title:"订单编号",dataIndex:"orderid",align:"center"},{title:"下单店铺",dataIndex:"store_name",scopedSlots:{customRender:"store_name"},align:"center",width:"12%"},{title:"订购数量",dataIndex:"buy_num",align:"center"},{title:"店铺数量",dataIndex:"store_num",align:"center"},{title:"订单总金额",dataIndex:"total_price",align:"center"},{title:"支付时间",dataIndex:"pay_time",align:"center",sortDirections:["descend","ascend"],sorter:function(t,a){return r()(t.add_time).unix()-r()(a.add_time).unix()}},{title:"订单类型",dataIndex:"order_type_status",align:"center"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center"}],list:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},drawerVisible:!1,orderId:""}},activated:function(){this.id=this.$route.query.id||"",this.getDetail()},methods:{moment:r.a,getDetail:function(){var t=this,a={mer_id:this.id,page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(o["a"].teamMerchantOrderList,a).then((function(a){t.detail=a.basic||"",t.list=a.list||[],t.$set(t.pagination,"total",a.count||0)}))},onPageChange:function(t,a){this.$set(this.pagination,"current",t),this.getDetail()},onPageSizeChange:function(t,a){this.$set(this.pagination,"pageSize",a),this.getDetail()},actionBtn:function(t){this.drawerVisible=!0,this.orderId=t.order_id}}},d=l,p=(e("eca3"),e("2877")),u=Object(p["a"])(d,s,i,!1,null,"53439920",null);a["default"]=u.exports},4580:function(t,a,e){},eca3:function(t,a,e){"use strict";e("4580")}}]);