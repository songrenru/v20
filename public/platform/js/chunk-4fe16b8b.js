(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fe16b8b"],{"46f5":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-ff wrap"},[e("div",{staticClass:"page-title"},[t._v(t._s(t.detail.name||"")+"物业信息及订单")]),e("div",{staticClass:"content"},[t._m(0),e("div",{staticClass:"mt-20"},[e("a-row",{staticClass:"mb-10 mt-10"},[e("a-col",{attrs:{span:8}},[e("div",{staticClass:"flex"},[e("span",{staticClass:"text-nowrap"},[t._v("物业名称：")]),e("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.property_name||"-"))])])]),e("a-col",{attrs:{span:8}},[e("div",{staticClass:"flex"},[e("span",{staticClass:"text-nowrap"},[t._v("物业编号：")]),e("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.id||"-"))])])]),e("a-col",{attrs:{span:8}},[e("div",{staticClass:"flex"},[e("span",{staticClass:"text-nowrap"},[t._v("物业注册时间：")]),e("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.create_time||"-"))])])])],1),e("a-row",{staticClass:"mt-10"},[e("a-col",{attrs:{span:8}},[e("div",{staticClass:"flex"},[e("span",{staticClass:"text-nowrap"},[t._v("物业手机号：")]),e("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.property_phone||"-"))])])]),e("a-col",{attrs:{span:8}},[e("div",{staticClass:"flex"},[e("span",{staticClass:"text-nowrap"},[t._v("物业地址：")]),e("span",{staticClass:"text-wrap"},[t._v(t._s(t.detail.property_address||"-"))])])])],1)],1),e("a-divider",{staticStyle:{"margin-top":"50px"}}),e("a-table",{staticClass:"mt-20",attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination,rowKey:"order_id"},scopedSlots:t._u([{key:"store_name",fn:function(a,s){return e("span",{},[e("span",a?[t._v(t._s(a)),"2"==s.order_type?e("span",{staticClass:"cr-primary"},[t._v("(续费)")]):t._e()]:[t._v("-")])])}},{key:"action",fn:function(a,s){return e("span",{},[e("a-button",{attrs:{type:"link"},on:{click:function(a){return t.actionBtn(s)}}},[t._v("查看详情")])],1)}}])})],1),e("a-drawer",{attrs:{width:"60%",title:"订单详情",placement:"right",closable:!1,visible:t.drawerVisible},on:{close:function(a){t.drawerVisible=!1}}},[e("OrderDetail",{attrs:{orderId:t.orderId,type:"mer",orderBusiness:1}})],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fw-bold fs-16"},[e("span",[t._v("物业基本信息")])])}],n=e("c1df"),r=e.n(n),o=e("126e"),c=e("aa80"),l={components:{OrderDetail:c["default"]},data:function(){return{id:"",detail:"",columns:[{title:"订单编号",dataIndex:"order_no",align:"center"},{title:"下单套餐",dataIndex:"package_title",scopedSlots:{customRender:"package_title"},align:"center",width:"12%"},{title:"订单总金额",dataIndex:"order_money",align:"center"},{title:"支付时间",dataIndex:"pay_time",align:"center",sortDirections:["descend","ascend"],sorter:function(t,a){return r()(t.add_time).unix()-r()(a.add_time).unix()}},{title:"订单类型",dataIndex:"order_type_status",align:"center"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center"}],list:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},drawerVisible:!1,orderId:""}},activated:function(){this.id=this.$route.query.id||"",this.getDetail()},methods:{moment:r.a,getDetail:function(){var t=this,a={id:this.id,page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(o["a"].getHousePropertyDetail,a).then((function(a){t.detail=a.basic||"",t.list=a.list||[],t.$set(t.pagination,"total",a.count||0)}))},onPageChange:function(t,a){this.$set(this.pagination,"current",t),this.getDetail()},onPageSizeChange:function(t,a){this.$set(this.pagination,"pageSize",a),this.getDetail()},actionBtn:function(t){this.drawerVisible=!0,this.orderId=t.order_id}}},d=l,p=(e("a5e5"),e("0c7c")),u=Object(p["a"])(d,s,i,!1,null,"a0959114",null);a["default"]=u.exports},"59e2":function(t,a,e){},a5e5:function(t,a,e){"use strict";e("59e2")}}]);