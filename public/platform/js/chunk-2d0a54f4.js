(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a54f4"],{"09c8":function(t,e,a){"use strict";a.r(e);a("3849");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[e("div",{staticStyle:{float:"left","font-size":"26px","line-height":"30px"}},[t._v("话题管理")]),e("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.add(t.category_id)}}},[e("a-icon",{attrs:{type:"plus"}}),t._v("添加话题")],1),e("a-form-model",{staticStyle:{float:"right","margin-bottom":"30px"},attrs:{layout:"inline",model:t.searchForm}},[e("a-form-model-item",[e("a-select",{staticStyle:{width:"115px"},model:{value:t.searchForm.cat_id,callback:function(e){t.$set(t.searchForm,"cat_id",e)},expression:"searchForm.cat_id"}},t._l(t.catList,(function(a){return e("a-select-option",{key:a.cat_id,attrs:{cat_id:a.cat_id}},[t._v(t._s(a.cat_name)+" ")])})),1)],1),e("a-form-model-item",[e("a-select",{staticStyle:{width:"115px"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[e("a-select-option",{attrs:{value:-1}},[t._v(" 话题状态")]),e("a-select-option",{attrs:{value:0}},[t._v(" 关闭")]),e("a-select-option",{attrs:{value:1}},[t._v(" 正常")])],1)],1),e("a-form-model-item",{attrs:{label:""}},[e("a-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入话题名称"},model:{value:t.searchForm.content,callback:function(e){t.$set(t.searchForm,"content",e)},expression:"searchForm.content"}})],1),e("a-form-model-item",[e("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.submitForm(!0)}}},[t._v(" 查询")])],1)],1),e("div",{staticStyle:{height:"30px"}}),e("a-card",{attrs:{bordered:!1}},[e("a-table",{staticStyle:{"min-height":"700px"},attrs:{columns:t.columns,"data-source":t.data,rowKey:"category_id",pagination:t.pagination},scopedSlots:t._u([{key:"sort",fn:function(a,i){return e("span",{},[e("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0,step:"1"},on:{blur:function(e){return t.handleSortChange(a,i.category_id)}},model:{value:i.sort,callback:function(e){t.$set(i,"sort",e)},expression:"record.sort"}})],1)}},{key:"status",fn:function(a){return e("span",{},[0==a?e("a-badge",{attrs:{status:"default",text:"关闭"}}):t._e(),1==a?e("a-badge",{attrs:{status:"success",text:"正常"}}):t._e()],1)}},{key:"action",fn:function(a,i){return e("span",{},[[e("a",{on:{click:function(e){return t.$refs.createModal.edit(i.category_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}})],e("a",{on:{click:function(e){return t.delOne(i.category_id)}}},[t._v("删除")])],2)}}])}),e("category-manage-edit",{ref:"createModal",on:{loaddata:t.getList}})],1)],1)},n=[],s=a("8ee2"),o=a("7a28"),r=a("07ca"),c={name:"GroupSearchHotList",components:{CategoryManageEdit:o["default"]},data:function(){return{catList:[],searchForm:{name:"",cat_id:"-1",status:-1},columns:[{title:"话题名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"排序",dataIndex:"sort",key:"sort",scopedSlots:{customRender:"sort"}},{title:"发布数",dataIndex:"article_num",key:"article_num"},{title:"查看数",dataIndex:"views_num",scopedSlots:{customRender:"views_num"}},{title:"评论数",dataIndex:"reply_num",key:"reply_num"},{title:"关联分类",dataIndex:"cat_name",scopedSlots:{customRender:"cat_name"}},{title:"最后修改时间",dataIndex:"last_time",key:"last_time"},{title:"话题状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"action",key:"action",scopedSlots:{customRender:"action"}}],data:[],category_id:"",pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},created:function(){this.getList({is_search:!1})},activated:function(){this.category_id=this.$route.query.category_id,this.getList({is_search:!1})},mounted:function(){},watch:{"$route.query.category_id":function(){this.category_id=this.$route.query.category_id,this.getList(this.category_id)}},methods:{getList:function(t){var e=this,a=Object(s["a"])({},this.searchForm);delete a.time,1==t.is_search?(a.page=1,this.$set(this.pagination,"current",1)):(a.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),this.pagination.total>0&&Math.ceil(this.pagination.total/this.pagination.pageSize)<a.page&&(this.pagination.current=0,a.page=1),1==t.is_page&&(a.page=1),a.pageSize=this.pagination.pageSize,this.request(r["a"].getCategoryList,a).then((function(a){e.data=a.list,e.catList=a.catList,1==t.is_del&&0==a.list_count&&(e.getList({is_search:!1,is_page:!0}),e.pagination.current=1),e.$set(e.pagination,"total",a.count)}))},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(s["a"])({},this.searchForm);delete e.time,e.is_search=t,e.tablekey=1,this.getList(e)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},handleSortChange:function(t,e){var a=this;this.request(r["a"].getCategorySort,{id:e,sort:t}).then((function(t){a.getList({is_search:!1})}))},add:function(t){this.$refs.createModal.add(t)},btnClick:function(){alert(2)},delOne:function(t){var e=this;this.$confirm({title:"提示",content:"确定删除吗？",onOk:function(){e.request(r["a"].getCategoryDel,{id:t}).then((function(t){e.getList({is_search:!1,is_del:!0})}))},onCancel:function(){}})}}},l=c,u=a("0b56"),d=Object(u["a"])(l,i,n,!1,null,"753b03d2",null);e["default"]=d.exports}}]);