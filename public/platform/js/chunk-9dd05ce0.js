(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9dd05ce0","chunk-c8685130"],{1678:function(t,e,a){},7989:function(t,e,a){"use strict";a("1678")},"884e":function(t,e,a){},c131:function(t,e,a){"use strict";a.r(e);a("b0c0");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[[e("div",{staticClass:"mb-10"},[e("a-form",{attrs:{layout:"inline"}},[e("div",{staticClass:"flex search-content"},[e("div",{staticClass:"left"},[e("span",{staticClass:"goods-title"},[t._v("问答管理")])]),e("div",{staticClass:"right flex"},[e("div",[e("a-form-item",[e("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"问答类型"},model:{value:t.queryParam.ask_type,callback:function(e){t.$set(t.queryParam,"ask_type",e)},expression:"queryParam.ask_type"}},[e("a-select-option",{attrs:{value:"0"}},[t._v(" 全部 ")]),e("a-select-option",{attrs:{value:"1"}},[t._v(" 问题 ")]),e("a-select-option",{attrs:{value:"2"}},[t._v(" 回答 ")])],1)],1)],1),e("div",[e("a-form-item",[e("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"全部商家","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null},on:{search:t.handleSearch,change:t.handleChange},model:{value:t.queryParam.mer_id,callback:function(e){t.$set(t.queryParam,"mer_id",e)},expression:"queryParam.mer_id"}},[e("a-select-option",{attrs:{value:"0"}},[t._v("全部商家")]),t._l(t.mer_data,(function(a){return e("a-select-option",{key:a.mer_id},[t._v(" "+t._s(a.name)+" ")])}))],2)],1)],1),e("div",[e("a-form-item",[e("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"输入检索关键词"},model:{value:t.queryParam.keyword,callback:function(e){t.$set(t.queryParam,"keyword",e)},expression:"queryParam.keyword"}})],1)],1),e("div",[e("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.searchBtn()}}},[t._v("查询")])],1)])])])],1)],e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"message-suggestions-list-box"},[e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,rowKey:"id"},on:{change:t.tableChange},scopedSlots:t._u([{key:"fid",fn:function(a,s){return e("span",{},[0==s.fid?e("span",[t._v("问题")]):e("span",[t._v("回答")])])}},{key:"id",fn:function(a,s){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.askDetailModal.detail(s.fid>0?s.fid:s.id)}}},[t._v("查看")])])}},{key:"action",fn:function(a,s){return e("span",{},[e("a",{on:{click:function(e){return t.deleteAsk(s.id,s.fid)}}},[t._v(" 删除 ")])])}}])})],1),e("ask-detail",{ref:"askDetailModal"})],1)],2)},i=[],n=a("5530"),r=(a("d81d"),a("f91a")),c=a("d778"),o=[],l={name:"allAskLists",components:{AskDetail:c["default"]},data:function(){return this.cacheData=o.map((function(t){return Object(n["a"])({},t)})),{form:this.$form.createForm(this),mer_data:[],search_data:[],search_mer_keyword:void 0,queryParam:{ask_type:"0",mer_id:"0",keyword:"",page_size:10},pagination:{current:1,page_size:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")}},columns:[{title:"问答类型",width:10,dataIndex:"fid",scopedSlots:{customRender:"fid"}},{title:"问答内容",width:200,dataIndex:"content"},{title:"完整回答",width:10,dataIndex:"id",scopedSlots:{customRender:"id"}},{title:"时间",width:10,dataIndex:"create_date"},{title:"商家名称",width:20,dataIndex:"mer_name"},{title:"店铺名称",width:20,dataIndex:"store_name"},{title:"用户名",width:20,dataIndex:"nickname"},{title:"用户电话",width:20,dataIndex:"phone"},{title:"操作",dataIndex:"action",width:10,scopedSlots:{customRender:"action"}}],data:o}},watch:{$route:function(){this.initList()}},mounted:function(){this.initList()},methods:{handleSearch:function(t){var e=this;this.request(r["a"].searchMerchant,{keyword:t}).then((function(t){e.mer_data=t}))},handleChange:function(t){console.log("change",t),this.queryParam["mer_id"]=t},deleteAsk:function(t,e){var a="",s="";0==e?(a="您确定要删除这条问题吗？",s="连同这条问题下所有的回答将会一起删除"):a="您确定要删除这条回答吗？";var i=this;this.$confirm({title:a,content:s,okText:"确定",okType:"primary",cancelText:"取消",onOk:function(){i.request(r["a"].delete,{id:t}).then((function(t){i.$message.success(i.L("删除成功")),i.getLists()}))},onCancel:function(){}})},searchBtn:function(){this.page=1,this.pagination.current=this.page,this.getLists()},initList:function(){this.getLists()},getLists:function(){var t=this;this.queryParam["page"]=this.page,this.request(r["a"].getAll,this.queryParam).then((function(e){t.data=e.list,t.pagination.total=e.total}))},tableChange:function(t){this.queryParam["page_size"]=t.pageSize,t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getLists())}}},d=l,u=(a("ecdc"),a("2877")),h=Object(u["a"])(d,s,i,!1,null,"8e639812",null);e["default"]=h.exports},d778:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:600,visible:t.visible,footer:""},on:{cancel:t.handleCancel}},t._l(t.records,(function(a){return e("div",{key:a.id,staticClass:"main"},[e("div",{staticClass:"font_bold",staticStyle:{"flex-basis":"30px"}},[1==a.is_ask?e("span",{staticClass:"red"},[t._v("问")]):e("span",{staticClass:"blue"},[t._v("答")])]),e("div",{staticStyle:{"flex-grow":"10",display:"flex"}},[e("div",{staticStyle:{"flex-basis":"50px"}},[e("img",{staticClass:"avatar",attrs:{src:a.avatar}})]),e("div",{staticStyle:{"flex-grow":"10"}},[e("div",{staticClass:"font_bold div-margin"},[t._v(t._s(a.nickname))]),e("div",{staticClass:"div-margin"},[t._v(t._s(a.create_time))]),e("div",{staticClass:"div-margin"},[t._v(t._s(a.content))]),e("div",{staticClass:"div-margin"},t._l(a.images,(function(t){return e("a-popover",{attrs:{placement:"right"}},[e("template",{slot:"content"},[e("img",{staticClass:"goods-image-big",attrs:{src:t}})]),e("img",{staticClass:"goods-image",attrs:{src:t}})],2)})),1)])])])})),0)},i=[],n=a("f91a"),r={name:"askDetail",data:function(){return{title:"详情",visible:!1,records:[]}},methods:{detail:function(t){var e=this;this.visible=!0,this.request(n["a"].askDetail,{id:t}).then((function(t){e.records=t}))},handleCancel:function(){this.visible=!1}}},c=r,o=(a("7989"),a("2877")),l=Object(o["a"])(c,s,i,!1,null,"d814e850",null);e["default"]=l.exports},ecdc:function(t,e,a){"use strict";a("884e")},f91a:function(t,e,a){"use strict";var s={searchMerchant:"/qa/platform.Ask/searchMerchant",storeLists:"/merchant/merchant.Store/getStoreList",askLists:"/qa/merchant.Ask/lists",setIndexShow:"/qa/merchant.Ask/setIndexShow",saveLabels:"/qa/merchant.Ask/saveLabels",getLabels:"/qa/merchant.Ask/getLabels",saveAskLabel:"/qa/merchant.Ask/saveAskLabel",askDetail:"/qa/merchant.Ask/askDetail",getAll:"/qa/platform.Ask/getAll",delete:"/qa/platform.Ask/delete"};e["a"]=s}}]);