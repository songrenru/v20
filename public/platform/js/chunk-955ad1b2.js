(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-955ad1b2"],{"0054":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"充值明细",visible:e.visible,width:900,footer:null},on:{cancel:e.handleCancel}},[n("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.id},loading:e.tableLoadding,"data-source":e.logList},on:{change:e.handleTableChange}})],1)},i=[],o=(n("a9e3"),[{title:"订单编号",dataIndex:"order_id",key:"order_id"},{title:"预存时间",dataIndex:"add_time",key:"add_time"},{title:"金额变更前（元）",dataIndex:"current_money",key:"current_money"},{title:"缴费金额（元）",dataIndex:"money",key:"money"},{title:"金额变更后（元）",dataIndex:"after_price",key:"after_price"},{title:"备注",dataIndex:"remarks",key:"remarks"}]),l={props:{visible:{type:Boolean,default:!1},id:{type:[String,Number],default:0}},watch:{visible:{handler:function(e){e&&this.getUserMoneyLog(this.id)},immediate:!0}},data:function(){return{columns:o,pageInfo:{current:1,page:1,limit:10,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},tableLoadding:!1,logList:[]}},methods:{handleTableChange:function(e,t,n){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.getUserMoneyLog()},getUserMoneyLog:function(){var e=this;e.tableLoadding=!0,e.pageInfo.id=e.id,e.request("/community/village_api.Pile/getUserMoneyLog",e.pageInfo).then((function(t){e.logList=t.list,e.pageInfo.total=t.count,e.tableLoadding=!1})).catch((function(t){e.tableLoadding=!1}))},handleCancel:function(){this.$emit("close")}}},d=l,r=(n("5eaf"),n("0c7c")),c=Object(r["a"])(d,a,i,!1,null,"384b8fe8",null);t["default"]=c.exports},"5eaf":function(e,t,n){"use strict";n("e519")},e519:function(e,t,n){}}]);