(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6ae3bc"],{"26bd":function(t,e,a){},c55e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box"},[a("div",{staticClass:"search-box",staticStyle:{"padding-bottom":"20px"}},[a("a-row",[a("a-col",{staticClass:"suggestions_col",attrs:{md:6,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("关键词名称：")]),t._v(" "),a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入关键词名称"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1),a("a-col",{staticClass:"suggestions_col",attrs:{md:7,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),a("a-range-picker",{staticStyle:{width:"300px"},attrs:{allowClear:!0},on:{change:t.dateOnChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-col",{staticClass:"suggestions_col_btn",attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1)],1)],1),a("a-row",[a("a-col",{staticStyle:{width:"400px","margin-left":"50px","padding-top":"15px"},attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.hotWordAddOrEdit.editword(0)}}},[t._v("新建关键词")])],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.id}},on:{change:t.table_change},scopedSlots:t._u([{key:"actionstatus",fn:function(e,o,s){return a("span",{},[1==o.status?a("span",{staticClass:"statusopen"},[t._v("已启用")]):t._e(),o.status<1?a("span",{staticClass:"statusclose"},[t._v("已禁用")]):t._e()])}},{key:"action",fn:function(e,o,s){return a("span",{},[1*o.status==1?a("a-popconfirm",{attrs:{title:"您确定将此条关键词禁用？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.setWordStatus(o,0)}}},[a("a",{attrs:{href:"#"}},[t._v(" 设为禁用 ")])]):a("a-popconfirm",{attrs:{title:"您确定将此条关键词设置为启用？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.setWordStatus(o,1)}}},[a("a",{attrs:{href:"#"}},[t._v(" 设为启用 ")])]),1==t.role_editword?a("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_editword?a("a",{on:{click:function(e){return t.$refs.hotWordAddOrEdit.editword(o.id)}}},[t._v(" 编辑关键词 ")]):t._e(),1==t.role_delword?a("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_delword?a("a",{on:{click:function(e){return t.delHotWord(o)}}},[t._v(" 删 除 ")]):t._e()],1)}}])}),a("hot-word-add-or-edit",{ref:"hotWordAddOrEdit",on:{ok:t.bindOk}})],1)},s=[],n=(a("7d24"),a("dfae")),i=(a("ac1f"),a("841c"),a("43bb")),r=a("f8bf"),c=[{title:"关键词名称",dataIndex:"wordname",key:"wordname",width:310},{title:"关键词类型",dataIndex:"xtype_str",key:"xtype_str",width:310},{title:"更新时间",dataIndex:"update_time_str",key:"update_time_str",width:200},{title:"状态",dataIndex:"status",key:"status",align:"center",width:200,scopedSlots:{customRender:"actionstatus"}},{title:"操作",dataIndex:"",key:"",align:"center",scopedSlots:{customRender:"action"}}],d=[],l={name:"hotWordManageList",filters:{},components:{hotWordAddOrEdit:r["default"],"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:""},loading:!1,data:d,columns:c,page:1,confirmLoading:!1,role_addword:0,role_copyword:0,role_delword:0,role_editword:0}},created:function(){this.getList()},beforeRouteLeave:function(t,e,a){this.$destroy(),a()},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.request(i["a"].getHouseHotWordLists,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.role_addword=e.role_addword,t.role_copyword=e.role_copyword,t.role_delword=e.role_delword,t.role_editword=e.role_editword,t.loading=!1}))},bindOk:function(){this.getList()},setWordStatus:function(t,e){var a=this,o={word_id:t.id,status:e};this.request(i["a"].setHouseHotWordStatus,o).then((function(t){a.$message.success("操作成功！"),a.getList()}))},delHotWord:function(t){var e=this,a={word_id:t.id,village_id:t.village_id};this.$confirm({title:"确认删除",content:"您确认要删除此条关键字为【"+t.wordname+"】的数据吗？",onOk:function(){e.request(i["a"].deleteHouseHotWord,a).then((function(t){e.$message.success("删除成功"),setTimeout((function(){e.confirmLoading=!1,e.getList()}),1500)}))},onCancel:function(){}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.page=1,this.getList()}}},u=l,p=(a("ceba"),a("0c7c")),h=Object(p["a"])(u,o,s,!1,null,"52ef3dbe",null);e["default"]=h.exports},ceba:function(t,e,a){"use strict";a("26bd")}}]);