(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a47dc25"],{"55a4":function(t,e,a){"use strict";a("d347")},aedc:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:t.xtitle,width:1450,visible:t.qvisible,placement:"right"},on:{close:t.handleCancel}},[a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"table_1",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.order_id}},on:{change:t.table_change}})],1)])},s=[],n=(a("7d24"),a("dfae")),r=(a("ac1f"),a("841c"),a("a0e0")),o=[{title:"序号",dataIndex:"order_id"},{title:"工单详情",dataIndex:"order_content",scopedSlots:{customRender:"order_content"}},{title:"工单类目",dataIndex:"subject_name"},{title:"上报分类",dataIndex:"cate_name"},{title:"评价星数",dataIndex:"evaluate_star"},{title:"上报位置",dataIndex:"address_txt"},{title:"上报人员",dataIndex:"name"},{title:"手机号码",dataIndex:"phone"},{title:"上报时间",dataIndex:"add_time_txt"},{title:"状态  ",dataIndex:"status_txt",scopedSlots:{customRender:"status_txt"}}],l=[],d={name:"worksOrderEvaluateList",filters:{},components:{"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){return{pagination:{pageSize:10,total:10,current:1},search:{page:1},qvisible:!1,loading:!1,data:l,columns:o,page:1,star:0,record:{},xtitle:"查看",confirmLoading:!1}},activated:function(){},methods:{qlist:function(t,e){this.record=t,this.star=e,1*this.star==1?this.xtitle="评价 一星 的工单查看":1*this.star==2?this.xtitle="评价 二星 的工单查看":1*this.star==3?this.xtitle="评价 三星 的工单查看":1*this.star==4?this.xtitle="评价 四星 的工单查看":1*this.star==5&&(this.xtitle="评价 五星 的工单查看"),this.qvisible=!0,this.getList()},getList:function(){var t=this;this.loading=!0;var e=this.search;e.page=this.page,e.operator_id=this.record.operator_id,e.evaluate_star=this.star,this.request(r["a"].getRepairOrderEvaluateList,e).then((function(e){t.pagination.total=e.total,t.pagination.pageSize=e.limit,t.loading=!1,t.data=e.list}))},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},handleCancel:function(){this.qvisible=!1,this.star=0,this.record={}}}},c=d,u=(a("55a4"),a("2877")),h=Object(u["a"])(c,i,s,!1,null,"74a0295e",null);e["default"]=h.exports},d347:function(t,e,a){}}]);