(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1639556"],{"119f":function(t,e,a){"use strict";a("d7dd")},"687a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"任务列表",width:1400,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading,placement:"right","after-visible-change":t.afterVisibleChange},on:{close:t.handleCancel}},[a("div",{staticClass:"search-box"},[a("a-row",{staticStyle:{"margin-bottom":"20px","margin-left":"2px"},attrs:{gutter:48}},[a("a-col",{staticStyle:{"padding-left":"0px","padding-right":"1px",width:"420px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),a("a-range-picker",{staticStyle:{width:"325px"},attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search.data,callback:function(e){t.$set(t.search,"data",e)},expression:"search.data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-col",{staticStyle:{"padding-left":"4px","padding-right":"1px",width:"247px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("状态：")]),a("a-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择状态"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),a("a-select-option",{attrs:{value:"1"}},[t._v("未指派")]),a("a-select-option",{attrs:{value:"2"}},[t._v("已指派")]),a("a-select-option",{attrs:{value:"3"}},[t._v("已受理")]),a("a-select-option",{attrs:{value:"4"}},[t._v("已处理")]),a("a-select-option",{attrs:{value:"5"}},[t._v("已评价")])],1)],1),a("a-col",{staticStyle:{"padding-left":"0px","padding-right":"1px",width:"90px","margin-left":"20px"},attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.pigcms_id}},on:{change:t.table_change},scopedSlots:t._u([{key:"status",fn:function(e,i,s){return a("span",{},[1*e==0?a("a-tag",{attrs:{color:"red"}},[t._v(" 未指派 ")]):1*e==1?a("a-tag",{attrs:{color:"green"}},[t._v(" 已指派 ")]):1*e==2?a("a-tag",{attrs:{color:"green"}},[t._v(" 已受理 ")]):1*e==3?a("a-tag",{attrs:{color:"green"}},[t._v(" 已处理 ")]):1*e==4?a("a-tag",{attrs:{color:"green"}},[t._v(" 业主已评价 ")]):t._e()],1)}},{key:"action",fn:function(e,i,s){return a("span",{},[a("a",{on:{click:function(e){return t.show_details_popup(i)}}},[t._v("详情")])])}}])}),a("a-modal",{staticStyle:{"z-index":"1000"},attrs:{width:1e3,title:"详情",visible:t.visible_details,maskClosable:!1,"confirm-loading":t.confirmLoading,footer:null},on:{cancel:t.handle2Cancel}},[a("div",{staticClass:"modal_box_1"},[a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("业主姓名：")]),a("div",{staticClass:"text_2"},[t._v(t._s(t.repairDetail.name))])]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("业主编号：")]),a("div",{staticClass:"text_2"},[t._v(t._s(t.repairDetail.usernum))])]),a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("上报时间：")]),a("div",{staticClass:"text_2"},[t._v(t._s(t.repairDetail.time_str))])]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("上报地址：")]),a("div",{staticClass:"text_2"},[t._v(t._s(t.repairDetail.address))])]),a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("联系方式：")]),a("div",{staticClass:"text_2"},[t._v(t._s(t.repairDetail.repair_phone))])]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("状态：")]),1*t.repairDetail.status==0?a("div",{staticClass:"text_2",staticStyle:{color:"red"}},[t._v("未指派")]):1*t.repairDetail.status==1?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v("已指派")]):1*t.repairDetail.status==2?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v("已受理")]):1*t.repairDetail.status==3?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v("已处理")]):1*t.repairDetail.status==4?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v("业主已评价")]):t._e()]),a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("上报内容：")]),a("div",{staticClass:"text_2"},[t._v(t._s(t.repairDetail.content))])]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("上报图例：")]),t.repairDetail.pic&&t.repairDetail.pic.length>0?a("div",{staticClass:"text_2"},t._l(t.repairDetail.pic,(function(t,e){return a("img",{staticStyle:{width:"80px"},attrs:{src:t}})})),0):t._e()]),a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("处理人员：")]),t.repairDetail.status>0&&t.repairDetail.worker.is_have_data>0?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v(t._s(t.repairDetail.worker.name)+" , "+t._s(t.repairDetail.worker.phone))]):t._e()]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("处理时间：")]),t.repairDetail.status>2&&t.repairDetail.worker.is_have_data>0&&t.repairDetail.reply_time>0?a("div",{staticClass:"text_2"},[t._v(t._s(t.repairDetail.reply_time_str))]):t._e()]),a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("处理意见：")]),t.repairDetail.status>2?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v(t._s(t.repairDetail.reply_content))]):t._e()]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("处理图例：")]),t.repairDetail.reply_pic&&t.repairDetail.reply_pic.length>0?a("div",{staticClass:"text_2"},t._l(t.repairDetail.reply_pic,(function(t,e){return a("img",{staticStyle:{width:"80px"},attrs:{src:t}})})),0):t._e()]),a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("评论时间：")]),t.repairDetail.status>3?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v(t._s(t.repairDetail.comment_time_str))]):t._e()]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("评分：")]),t.repairDetail.status>3?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v(t._s(t.repairDetail.score))]):t._e()]),a("div",{staticClass:"flex_text_box"},[a("div",{staticClass:"text_1"},[t._v("评论内容：")]),t.repairDetail.status>3?a("div",{staticClass:"text_2",staticStyle:{color:"green"}},[t._v(t._s(t.repairDetail.comment))]):t._e()]),a("div",{staticClass:"flex_text_box margin_top_10"},[a("div",{staticClass:"text_1"},[t._v("评论图例：")]),t.repairDetail.comment_pic&&t.repairDetail.comment_pic.length>0?a("div",{staticClass:"text_2"},t._l(t.repairDetail.comment_pic,(function(t,e){return a("img",{staticStyle:{width:"80px"},attrs:{src:t}})})),0):t._e()])])])],1)},s=[],r=(a("7d24"),a("dfae")),l=(a("ac1f"),a("841c"),a("a0e0")),n=a("c1df"),c=a.n(n),o=[{title:"业主编号",dataIndex:"usernum",key:"usernum"},{title:"报修人",dataIndex:"name",key:"name"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"报修内容",dataIndex:"content",key:"content"},{title:"报修时间",dataIndex:"time_str",key:"time_str"},{title:"报修地址",dataIndex:"address",key:"address"},{title:"评分",dataIndex:"score",key:"score"},{title:"操作人",dataIndex:"",key:"action",width:150,scopedSlots:{customRender:"action"}}],_=[],d={name:"houseWorkerOrder",filters:{},components:{"a-collapse":r["a"],"a-collapse-panel":r["a"].Panel},data:function(){return{pagination:{pageSize:10,total:10,current:1},search:{keyword:"",page:1,date:"",status:"0",begin_time:"",end_time:""},form:this.$form.createForm(this),visible:!1,visible_details:!1,loading:!1,data:_,columns:o,key_name:"",page:1,search_data:"",confirmLoading:!1,wid:0,repairDetail:{},dateFormat:"YYYY-MM-DD HH:mm:ss"}},activated:function(){},methods:{moment:c.a,infoV:function(t){this.visible=!0,this.wid=t.wid,this.getList()},getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.search["wid"]=this.wid,this.request(l["a"].getWorkerOrderList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1}))},show_details_popup:function(t){var e=this;this.visible_details=!0,this.request(l["a"].getRepairInfo,{wid:t.wid,bind_id:t.bind_id,repair_id:t.repair_id}).then((function(t){e.repairDetail=t}))},handleCancel:function(){var t=this;this.visible=!1,this.search.begin_time="",this.search.end_time="",this.search.status="0",this.search.date=[],this.search.data=[],setTimeout((function(){t.form=t.$form.createForm(t)}),500)},date_moment:function(t,e){return t?c()(t,e):""},handle2Cancel:function(){this.visible_details=!1,this.repairDetail={}},afterVisibleChange:function(t){console.log("visible",t)},keyChange:function(t){"name"==t&&(this.key_name="请输入姓名"),"phone"==t&&(this.key_name="请输入电话")},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,this.search.begin_time=e["0"],this.search.end_time=e["1"]},searchList:function(){this.page=1;var t={current:1,pageSize:10,total:10};this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.getList()}}},p=d,v=(a("119f"),a("0c7c")),x=Object(v["a"])(p,i,s,!1,null,"2319905c",null);e["default"]=x.exports},d7dd:function(t,e,a){}}]);