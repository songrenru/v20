(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6790378c"],{"1fb5":function(t,e,a){"use strict";a("91c3")},2945:function(t,e,a){"use strict";a("41a1")},"41a1":function(t,e,a){},"575c":function(t,e,a){"use strict";a("e5a9")},"708a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"top_tab"},[e("div",{staticClass:"tab_list"},[e("a-tabs",{attrs:{"default-active-key":"text_resources",size:"large"},on:{change:t.callback}},t._l(t.tabList,(function(a,o){return e("a-tab-pane",{key:a.value,attrs:{tab:a.label}},[a.value==t.currentKey?e(a.component,{tag:"component",attrs:{params:t.params}}):t._e()],1)})),1)],1)])},i=[],n=a("60fa"),r=a("7ea3"),s=a("e342"),c={name:"hotWordMaterialManageList",filters:{},components:{text_material:n["default"],img_material:r["default"],audio_material:s["default"]},data:function(){return{tabList:[{label:"文字素材",value:"text_resources",component:"text_material"},{label:"图片素材",value:"img_resources",component:"img_material"},{label:"音频素材",value:"audio_resources",component:"audio_material"}],currentKey:"text_resources",params:{test:"123"}}},methods:{callback:function(t){this.currentKey=t}}},l=c,g=(a("575c"),a("2877")),d=Object(g["a"])(l,o,i,!1,null,"7f70b913",null);e["default"]=d.exports},"7ea3":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c"),a("498a");var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-suggestions-list-box"},[e("div",{staticClass:"search-box",staticStyle:{"padding-bottom":"20px"}},[e("a-row",[e("a-col",{staticClass:"suggestions_col",attrs:{md:6,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("分类名称：")]),e("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入分类名称"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1),e("a-col",{staticClass:"suggestions_col",attrs:{md:7,sm:24}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),e("a-range-picker",{staticStyle:{width:"300px"},attrs:{allowClear:!0},on:{change:t.dateOnChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-col",{staticClass:"suggestions_col_btn",attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1)],1)],1),e("a-row",[e("a-col",{staticStyle:{"margin-bottom":"18px"}},[1==t.role_addcategory?e("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:t.addCategory}},[t._v("新建分类")]):t._e(),1==t.role_delcategory?e("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delCategoryMany()}}},[t._v("批量删除")]):t._e()],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.cate_id},"row-selection":t.rowSelection},on:{change:t.table_change},scopedSlots:t._u([{key:"manageaction",fn:function(a,o,i){return e("span",{},[1==t.role_managecategory?e("a-button",{attrs:{type:"default"},on:{click:function(e){return t.$refs.materialModel.xList(o,3)}}},[t._v(" 管 理 ")]):t._e()],1)}},{key:"action",fn:function(a,o,i){return e("span",{},[1==t.role_editcategory?e("a",{on:{click:function(e){return t.editCategory(o)}}},[t._v(" 编辑 ")]):t._e(),1==t.role_delcategory&&1==t.role_editcategory?e("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_delcategory?e("a-popconfirm",{attrs:{title:"您确定将此条分类数据删除吗？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.delCategory(o,0)}}},[e("a",{attrs:{href:"#"}},[t._v(" 删 除 ")])]):t._e()],1)}}])}),e("a-modal",{attrs:{title:t.titleCategory,width:600,visible:t.visibleCategory,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleCategorySubmit,cancel:t.handleCategoryCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:500}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"分类名称",required:""}},[e("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入分类名称，最多20个字",maxLength:20},model:{value:t.categoryname,callback:function(e){t.categoryname="string"===typeof e?e.trim():e},expression:"categoryname"}})],1)],1)],1)],1),e("material-list-page",{ref:"materialModel",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},i=[],n=(a("7d24"),a("dfae")),r=(a("a15b"),a("a0e0")),s=a("b771"),c=[{title:"分类名称",dataIndex:"categoryname",key:"categoryname",width:310},{title:"更新时间",dataIndex:"update_time_str",key:"update_time_str",width:200},{title:"回复图片管理",dataIndex:"cate_id",key:"cate_id",align:"center",scopedSlots:{customRender:"manageaction"}},{title:"操作",dataIndex:"",key:"",align:"center",scopedSlots:{customRender:"action"}}],l=[],g={name:"hotWordManageListText",filters:{},props:{params:{type:Object,default:function(){return{}}}},watch:{params:{immediate:!0,handler:function(t){console.log("val===>",t),this.getList()}}},components:{materialListPage:s["default"],"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:""},form:this.$form.createForm(this),loading:!1,data:l,columns:c,page:1,confirmLoading:!1,titleCategory:"新建分类",visibleCategory:!1,categoryname:"",cate_id:0,selectedRowKeys:[],role_addcategory:0,role_editcategory:0,role_delcategory:0,role_managecategory:0}},activated:function(){},computed:{rowSelection:function(){var t=this;return{onChange:function(e,a){console.log("selectedRowKeys",e),t.selectedRowKeys=e},onSelect:function(t,e,a,o){}}}},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.search["xtype"]=3,this.request(r["a"].getHouseHotWordMaterialCategoryLists,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.role_addcategory=e.role_addcategory,t.role_editcategory=e.role_editcategory,t.role_delcategory=e.role_delcategory,t.role_managecategory=e.role_managecategory,t.loading=!1}))},handleOk:function(){this.getList()},delCategory:function(t){var e=this,a={cate_ids:t.cate_id,village_id:t.village_id,xtype:3};this.request(r["a"].deleteHouseHotWordMaterialCategory,a).then((function(t){e.$message.success("删除成功"),setTimeout((function(){e.confirmLoading=!1,e.getList()}),1e3)}))},delCategoryMany:function(){if(this.selectedRowKeys.length<1)return this.$message.error("请至少选择一项要删除的数据！"),!1;console.log("cate_ids",this.selectedRowKeys);var t=this,e={cate_ids:this.selectedRowKeys.join(","),xtype:3};this.$confirm({title:"确认删除",content:"您确认要删除您选中的这些数据吗",onOk:function(){t.request(r["a"].deleteHouseHotWordMaterialCategory,e).then((function(e){t.$message.success("删除成功"),setTimeout((function(){t.confirmLoading=!1,t.getList()}),1e3)}))},onCancel:function(){}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.page=1,this.getList()},handleCategorySubmit:function(){var t=this;if(this.categoryname.length<1)return that.$message.error("分类名称不能为空！"),!1;var e={};e.categoryname=this.categoryname,e.cate_id=this.cate_id,e.xtype=3,this.confirmLoading=!0,this.request(r["a"].saveMaterialCategoryData,e).then((function(e){if(t.confirmLoading=!1,void 0!=e.is_have_err&&1==e.is_have_err)return t.$message.error(e.errmsg),!1;t.cate_id>0?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),t.handleCategoryCancel(),t.getList()}))},handleCategoryCancel:function(){this.categoryname="",this.cate_id=0,this.visibleCategory=!1},addCategory:function(){this.titleCategory="新建分类",this.cate_id=0,this.visibleCategory=!0},editCategory:function(t){this.cate_id=t.cate_id,this.categoryname=t.categoryname,this.titleCategory="编辑分类",this.visibleCategory=!0}}},d=g,u=(a("1fb5"),a("2877")),h=Object(u["a"])(d,o,i,!1,null,"39cca40d",null);e["default"]=h.exports},"91c3":function(t,e,a){},e342:function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c"),a("498a");var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-suggestions-list-box"},[e("div",{staticClass:"search-box",staticStyle:{"padding-bottom":"20px"}},[e("a-row",[e("a-col",{staticClass:"suggestions_col",attrs:{md:6,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("分类名称：")]),e("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入分类名称"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1),e("a-col",{staticClass:"suggestions_col",attrs:{md:7,sm:24}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),e("a-range-picker",{staticStyle:{width:"300px"},attrs:{allowClear:!0},on:{change:t.dateOnChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-col",{staticClass:"suggestions_col_btn",attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1)],1)],1),e("a-row",[e("a-col",{staticStyle:{"margin-bottom":"18px"}},[1==t.role_addcategory?e("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:t.addCategory}},[t._v("新建分类")]):t._e(),1==t.role_delcategory?e("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delCategoryMany()}}},[t._v("批量删除")]):t._e()],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.cate_id},"row-selection":t.rowSelection},on:{change:t.table_change},scopedSlots:t._u([{key:"manageaction",fn:function(a,o,i){return e("span",{},[1==t.role_managecategory?e("a-button",{attrs:{type:"default"},on:{click:function(e){return t.$refs.materialModel.xList(o,2)}}},[t._v(" 管 理 ")]):t._e()],1)}},{key:"action",fn:function(a,o,i){return e("span",{},[1==t.role_editcategory?e("a",{on:{click:function(e){return t.editCategory(o)}}},[t._v(" 编辑 ")]):t._e(),1==t.role_delcategory&&1==t.role_editcategory?e("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_delcategory?e("a-popconfirm",{attrs:{title:"您确定将此条分类数据删除吗？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.delCategory(o,0)}}},[e("a",{attrs:{href:"#"}},[t._v(" 删 除 ")])]):t._e()],1)}}])}),e("a-modal",{attrs:{title:t.titleCategory,width:600,visible:t.visibleCategory,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleCategorySubmit,cancel:t.handleCategoryCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:500}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"分类名称",required:""}},[e("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入分类名称，最多20个字",maxLength:20},model:{value:t.categoryname,callback:function(e){t.categoryname="string"===typeof e?e.trim():e},expression:"categoryname"}})],1)],1)],1)],1),e("material-list-page",{ref:"materialModel",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},i=[],n=(a("7d24"),a("dfae")),r=(a("a15b"),a("a0e0")),s=a("b771"),c=[{title:"分类名称",dataIndex:"categoryname",key:"categoryname",width:310},{title:"更新时间",dataIndex:"update_time_str",key:"update_time_str",width:200},{title:"回复音频管理",dataIndex:"cate_id",key:"cate_id",align:"center",scopedSlots:{customRender:"manageaction"}},{title:"操作",dataIndex:"",key:"",align:"center",scopedSlots:{customRender:"action"}}],l=[],g={name:"hotWordManageListText",filters:{},props:{params:{type:Object,default:function(){return{}}}},watch:{params:{immediate:!0,handler:function(t){console.log("val===>",t),this.getList()}}},components:{materialListPage:s["default"],"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:""},form:this.$form.createForm(this),loading:!1,data:l,columns:c,page:1,confirmLoading:!1,titleCategory:"新建分类",visibleCategory:!1,categoryname:"",cate_id:0,selectedRowKeys:[],role_addcategory:0,role_editcategory:0,role_delcategory:0,role_managecategory:0}},activated:function(){},computed:{rowSelection:function(){var t=this;return{onChange:function(e,a){console.log("selectedRowKeys",e),t.selectedRowKeys=e},onSelect:function(t,e,a,o){}}}},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.search["xtype"]=2,this.request(r["a"].getHouseHotWordMaterialCategoryLists,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.role_addcategory=e.role_addcategory,t.role_editcategory=e.role_editcategory,t.role_delcategory=e.role_delcategory,t.role_managecategory=e.role_managecategory,t.loading=!1}))},handleOk:function(){this.getList()},delCategory:function(t){var e=this,a={cate_ids:t.cate_id,village_id:t.village_id,xtype:2};this.request(r["a"].deleteHouseHotWordMaterialCategory,a).then((function(t){e.$message.success("删除成功"),setTimeout((function(){e.confirmLoading=!1,e.getList()}),1e3)}))},delCategoryMany:function(){if(this.selectedRowKeys.length<1)return this.$message.error("请至少选择一项要删除的数据！"),!1;console.log("cate_ids",this.selectedRowKeys);var t=this,e={cate_ids:this.selectedRowKeys.join(","),xtype:2};this.$confirm({title:"确认删除",content:"您确认要删除您选中的这些数据吗",onOk:function(){t.request(r["a"].deleteHouseHotWordMaterialCategory,e).then((function(e){t.$message.success("删除成功"),setTimeout((function(){t.confirmLoading=!1,t.getList()}),1e3)}))},onCancel:function(){}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.page=1,this.getList()},handleCategorySubmit:function(){var t=this;if(this.categoryname.length<1)return that.$message.error("分类名称不能为空！"),!1;var e={};e.categoryname=this.categoryname,e.cate_id=this.cate_id,e.xtype=2,this.confirmLoading=!0,this.request(r["a"].saveMaterialCategoryData,e).then((function(e){if(t.confirmLoading=!1,void 0!=e.is_have_err&&1==e.is_have_err)return t.$message.error(e.errmsg),!1;t.cate_id>0?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),t.handleCategoryCancel(),t.getList()}))},handleCategoryCancel:function(){this.categoryname="",this.cate_id=0,this.visibleCategory=!1},addCategory:function(){this.titleCategory="新建分类",this.cate_id=0,this.visibleCategory=!0},editCategory:function(t){this.cate_id=t.cate_id,this.categoryname=t.categoryname,this.titleCategory="编辑分类",this.visibleCategory=!0}}},d=g,u=(a("2945"),a("2877")),h=Object(u["a"])(d,o,i,!1,null,"e69f4356",null);e["default"]=h.exports},e5a9:function(t,e,a){}}]);