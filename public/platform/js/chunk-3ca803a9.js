(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ca803a9"],{"2943c":function(e,t,n){},bf57:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:e.title,width:700,visible:e.visible,maskClosable:!1,footer:null,confirmLoading:e.loading},on:{cancel:e.handleCancel}},[n("div",{staticClass:"message-suggestions-list-box"},[n("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change}})],1)])},i=[],o=n("a0e0"),s=[{title:"退款金额",dataIndex:"refund_money",key:"refund_money"},{title:"线上退款金额",dataIndex:"refund_online_money",key:"refund_online_money"},{title:"余额退款金额",dataIndex:"refund_balance_money",key:"refund_balance_money"},{title:"积分抵扣退款金额",dataIndex:"refund_score_money",key:"refund_score_money"},{title:"积分抵扣退款积分数量",dataIndex:"refund_score_count",key:"refund_score_count"},{title:"退款时间",dataIndex:"add_time",key:"add_time"},{title:"退款原因",dataIndex:"refund_reason",key:"refund_reason"},{title:"操作人",dataIndex:"role_name",key:"role_name"}],l=[],r={name:"refundList",filters:{},data:function(){var e=this;return{title:"退款纪录",reply_content:"",pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,n){return e.onTableChange(t,n)},onChange:function(t,n){return e.onTableChange(t,n)}},form:this.$form.createForm(this),visible:!1,loading:!1,data:l,columns:s,page:1}},methods:{add:function(e){this.title="退款纪录",this.visible=!0,this.id=e,console.log("id",e),this.getList()},getList:function(){var e=this;this.loading=!0,this.request(o["a"].refundList,{order_id:this.id,page:this.page,limit:this.pagination.pageSize}).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.post={},e.form=e.$form.createForm(e)}),500)},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getList(),console.log("onTableChange==>",e,t)},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.page=e.current,this.getList())}}},d=r,c=(n("d229"),n("2877")),u=Object(c["a"])(d,a,i,!1,null,"091b0bc0",null);t["default"]=u.exports},d229:function(e,t,n){"use strict";n("2943c")}}]);