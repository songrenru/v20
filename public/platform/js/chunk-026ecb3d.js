(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-026ecb3d","chunk-4aacadca","chunk-6c0ea21a"],{"10d0":function(t,e,a){"use strict";a("371bd")},"2c43":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-modal",{attrs:{title:"编辑导航分类",footer:null},on:{cancel:function(e){return t.hidelModel()}},model:{value:t.visible_staff,callback:function(e){t.visible_staff=e},expression:"visible_staff"}},[a("a-form",t._b({on:{submit:t.handleSubmit}},"a-form",{labelCol:{span:7},wrapperCol:{span:16}},!1),[a("a-form-item",{attrs:{label:"推荐标题",required:!0}},[a("a-row",[a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输推荐标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1)],1)],1),a("a-form-item",{attrs:{label:"副标题"}},[a("a-row",[a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输副标题"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1)],1),a("a-form-item",{attrs:{label:"导航内容","wrapper-col":{span:17}}},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-radio-group",{on:{change:t.typeChange},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("a-radio",{attrs:{value:1}},[t._v(" 子分类店铺 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 种草话题 ")])],1)],1)],1)],1),1==t.formData.type?a("a-form-item",{attrs:{label:"店铺分类","wrapper-col":{span:17}}},[a("a-row",[a("a-col",{attrs:{span:13}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{value:t.formData.ids,dropdownStyle:{height:"200px"},"tree-data":t.cat_sel,"tree-checkable":"","search-placeholder":"全部",replaceFields:{title:"cat_name",value:"cat_id",key:"key",children:"children"}},on:{change:t.handleChange}})],1),a("a-col",{staticClass:"text-right",attrs:{span:9}},[t._v(" 不选择则为全部 ")])],1)],1):t._e(),2==t.formData.type?a("a-form-item",{attrs:{label:"选择话题","wrapper-col":{span:17}}},[a("a-row",[a("a-col",{attrs:{span:13}},[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"全部",value:t.formData.ids},on:{change:t.handleChange}},t._l(t.huati,(function(e){return a("a-select-option",{key:e,attrs:{value:e.cat_id}},[t._v(" "+t._s(e.cat_name)+" ")])})),1)],1),a("a-col",{staticClass:"text-right",attrs:{span:9}},[t._v(" 不选择则为全部 ")])],1)],1):t._e(),2==t.formData.type?a("a-form-item",{attrs:{label:"话题展示规则",required:!0}},[a("a-select",{model:{value:t.formData.show_sort_type,callback:function(e){t.$set(t.formData,"show_sort_type",e)},expression:"formData.show_sort_type"}},[a("a-select-option",{attrs:{value:1}},[t._v(" 按动态点赞数 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 按动态浏览量 ")]),a("a-select-option",{attrs:{value:3}},[t._v(" 按动态评论数 ")])],1)],1):t._e(),1==t.formData.type?a("a-form-item",{attrs:{label:"店铺展示规则",required:!0}},[a("a-select",{model:{value:t.formData.show_sort_type,callback:function(e){t.$set(t.formData,"show_sort_type",e)},expression:"formData.show_sort_type"}},[a("a-select-option",{attrs:{value:1}},[t._v(" 按销量 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 按距离 ")]),a("a-select-option",{attrs:{value:3}},[t._v(" 按评分 ")]),a("a-select-option",{attrs:{value:4}},[t._v(" 按店铺上架时间排序 ")])],1)],1):t._e(),1==t.formData.type?a("a-form-item",{attrs:{label:"内容展示样式"}},[a("a-select",{model:{value:t.formData.show_type,callback:function(e){t.$set(t.formData,"show_type",e)},expression:"formData.show_type"}},[a("a-select-option",{attrs:{value:2}},[t._v(" 列表样式一 ")]),a("a-select-option",{attrs:{value:1}},[t._v(" 列表样式二 ")]),a("a-select-option",{attrs:{value:3}},[t._v(" 瀑布流 ")])],1)],1):t._e(),a("a-form-item",{attrs:{label:"排序"}},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-input",{model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}})],1)],1)],1),a("a-form-item",{attrs:{"wrapper-col":{span:20,offset:6}}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{staticClass:"text-left",attrs:{span:4}},[a("a-button",{attrs:{type:"default"},on:{click:function(e){return t.hidelModel()}}},[t._v(" 取消 ")])],1),a("a-col",{staticClass:"text-center",attrs:{span:6}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 确定 ")])],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)],1)},s=[],n=(a("a9e3"),a("4fa1")),o={name:"DiypageFeedCategoryEdit",props:{category_id:{type:[String,Number],default:"0"},cat_id:{type:[String,Number],default:"0"}},data:function(){return{visible_staff:!0,spinning:!1,size:"default",queryParam:{cat_id:this.cat_id,category_id:""},huati:[],cat_sel:[],formData:{cat_id:this.cat_id,title:"",description:"",type:1,ids:[],show_sort_type:1,show_type:1,sort:0}}},mounted:function(){this.queryParam.cat_id=this.cat_id,this.queryParam.category_id=this.category_id,this.formData.cat_id=this.cat_id,this.getLists()},activated:function(){this.queryParam.cat_id=this.cat_id,this.queryParam.category_id=this.category_id,this.formData.cat_id=this.cat_id,this.getLists()},created:function(){this.queryParam.cat_id=this.cat_id,this.queryParam.category_id=this.category_id,this.formData.cat_id=this.cat_id},methods:{handleChange:function(t){console.log(t,"selectedItems"),this.formData.ids=t,console.log(this.formData.ids,"this.formData.ids===this.formData.ids")},typeChange:function(){this.formData.ids=[]},popupScroll:function(){console.log("popupScroll")},getLists:function(){var t=this;this.request(n["a"].diypageFeedCategoryEdit,this.queryParam).then((function(e){t.queryParam.category_id>0&&(t.formData=e),t.cat_sel=e.cat_sel,t.huati=e.huati}))},handleSubmit:function(){var t=this;this.request(n["a"].diypageFeedCategorySave,this.formData).then((function(e){if(e){t.$message.success("保存成功！");var a={id:1};t.$emit("changeEditModel",a)}}))},hidelModel:function(){var t={id:0};this.$emit("changeEditModel",t)}}},r=o,c=a("0c7c"),l=Object(c["a"])(r,i,s,!1,null,"1e6905cd",null);e["default"]=l.exports},"371bd":function(t,e,a){},"4fa1":function(t,e,a){"use strict";var i={getLists:"/common/platform.DiypageFeedCategory/diypageFeedCategoryList",diypageFeedCategoryEdit:"/common/platform.DiypageFeedCategory/diypageFeedCategoryEdit",diypageFeedCategorySave:"/common/platform.DiypageFeedCategory/diypageFeedCategorySave",diypageFeedCategoryDel:"/common/platform.DiypageFeedCategory/diypageFeedCategoryDel",diypageFeedCategoryStoreList:"/common/platform.DiypageFeedCategory/diypageFeedCategoryStoreList",diypageFeedCategoryStoreSortEdit:"/common/platform.DiypageFeedCategory/diypageFeedCategoryStoreSortEdit"};e["a"]=i},"600f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:920,visible:t.visible},on:{ok:t.handleOk,cancel:t.handleCancel}},[t.show_model?t._e():a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[a("a-layout",[a("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"sort",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"title_content",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"description",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"type",fn:function(e){return a("span",{},[a("span",{staticClass:"height-30"},1==e?[t._v(" 子分类店铺 ")]:[t._v(" 种草话题 ")])])}},{key:"cat_name",fn:function(e){return a("span",{},[t._v(" "+t._s(e.length>0?e:"全部")+" ")])}},{key:"manage",fn:function(e,i){return a("span",{staticClass:"text-center"},[1==i.type?a("a",{staticClass:"label-sm-1 label-sm-1-blue",on:{click:function(e){return t.goTo(i.ids,i.category_id)}}},[t._v("去管理")]):a("a",{staticClass:"label-sm-1 label-sm-1-blue",staticStyle:{color:"lightgrey"}},[t._v("去管理")])])}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{staticClass:"label-sm blue",on:{click:function(e){return t.diyEdit(i.category_id)}}},[t._v("编辑")]),a("a",{staticClass:"btn label-sm blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.diyDel(i.category_id)}}},[t._v("删除")])])}},{key:"title",fn:function(e){return[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:8}}),a("a-col",{attrs:{span:11}}),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addFeedCategory()}}},[t._v(" 新建频道分类")])],1)],1)]}}],null,!1,3628359003)})],1)],1)],1)],1),t.show_model?a("diypage-feed-category-store",{attrs:{cat_id:t.cat_ids,ids:t.ids1},on:{getShowModel:t.getShowModel}}):t._e(),t.show_model1?a("diypage-feed-category-edit",{attrs:{cat_id:t.cat_ids,category_id:t.ids1},on:{changeEditModel:t.changeEditModel}}):t._e()],1)},s=[],n=(a("a9e3"),a("4fa1")),o=a("b3dd"),r=a("2c43"),c=[{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"}},{title:"推荐标题",dataIndex:"title_content",scopedSlots:{customRender:"title_content"}},{title:"副标题",dataIndex:"description",scopedSlots:{customRender:"description"}},{title:"导航展示",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"内容分类",dataIndex:"cat_name",scopedSlots:{customRender:"cat_name"},width:140},{title:"内容管理",dataIndex:"manage",scopedSlots:{customRender:"manage"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],l={name:"DiypageFeedCategory",components:{DiypageFeedCategoryEdit:r["default"],DiypageFeedCategoryStore:o["default"]},props:{cat_id:{type:[String,Number],default:"0"}},data:function(){return{title:"分类导航",visible:!0,spinning:!1,ids1:"",cat_ids:this.cat_id,show_model:!1,show_model1:!1,pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},queryParam:{cat_id:"",page:1,category_id:""},data:[],columns:c}},mounted:function(){this.getLists()},activated:function(){this.getLists()},methods:{getLists:function(){var t=this;this.queryParam.cat_id=this.cat_id,this.queryParam.page=this.pagination.current,this.queryParam.pageSize=this.pagination.pageSize,this.request(n["a"].getLists,this.queryParam).then((function(e){t.data=e.list,t.$set(t,"data",e.list),t.pagination.total=e.count,t.queryParam["page"]+=1}))},changeEditModel:function(t){1*t.id?(this.show_model1=!1,this.getLists()):this.show_model1=!1},hidModel:function(){this.show_model1=!1},addFeedCategory:function(){this.category_id=0,this.ids1="",this.cat_ids=this.cat_id,this.show_model1=!0},diyEdit:function(t){this.category_id=t,this.ids1=t,this.cat_ids=this.cat_id,this.show_model1=!0},diyDel:function(t){var e=this;this.$confirm({title:"您确定删除此分类导航吗?",centered:!0,onOk:function(){var a={category_id:t};e.request(n["a"].diypageFeedCategoryDel,a).then((function(t){t&&e.getLists()}))},onCancel:function(){}})},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},handleCancel:function(){this.visible=!1,this.$emit("handleCancel")},handleOk:function(){this.visible=!1,this.$emit("handleOk")},goTo:function(t,e){this.category_id=e,this.ids1=t,this.cat_ids=e,this.show_model=!0},getShowModel:function(){this.show_model=!1},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getLists()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.getLists()}}},d=l,u=(a("10d0"),a("0c7c")),p=Object(u["a"])(d,i,s,!1,null,"5dd1e612",null);e["default"]=p.exports},b3dd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[a("a-layout",[a("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"phone",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"mer_name",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"last_time",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"group_num",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"sort",fn:function(e,i){return[a("a-input-number",{staticClass:"sort-input",attrs:{"default-value":e||0,precision:0,min:0},on:{blur:function(a){return t.handleSortChange(a,e,i)}},model:{value:i.sort,callback:function(e){t.$set(i,"sort",e)},expression:"record.sort"}})]}},{key:"title",fn:function(e){return[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{staticStyle:{"padding-top":"5px"},attrs:{span:3}},[t._v("手动搜索:")]),a("a-col",{staticClass:"text-left",attrs:{span:8}},[a("a-row",[a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输入商家名称"},model:{value:t.queryParam.mer_name,callback:function(e){t.$set(t.queryParam,"mer_name",e)},expression:"queryParam.mer_name"}})],1)],1)],1),a("a-col",{attrs:{span:8}}),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.findMer()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{span:1}}),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-button",{attrs:{type:"warning"},on:{click:function(e){return t.showParenrModel()}}},[t._v(" 返回 ")])],1)],1)]}}])})],1)],1)],1)],1)},s=[],n=(a("a9e3"),a("4e82"),a("4fa1")),o=a("da05"),r=[{title:"店铺名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"店铺电话",dataIndex:"phone",scopedSlots:{customRender:"phone"}},{title:"所属商家",dataIndex:"mer_name",scopedSlots:{customRender:"mer_name"}},{title:"创建时间",dataIndex:"last_time",scopedSlots:{customRender:"last_time"}},{title:"团购商品数量",dataIndex:"group_num",scopedSlots:{customRender:"group_num"}},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"}}],c={name:"DiypageFeedCategoryStore",components:{ACol:o["b"]},props:{cat_id:{type:[String,Number],default:"0"},ids:{type:[String,Number],default:"0"}},data:function(){return{spinning:!1,pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},queryParam:{page:1,ids:"",mer_name:"",category_id:"",pageSize:10},data:[],columns:r}},mounted:function(){this.queryParam.ids=this.ids,this.queryParam.category_id=this.cat_id,this.getLists()},activated:function(){this.queryParam.ids=this.ids,this.queryParam.category_id=this.cat_id,this.getLists()},created:function(){this.queryParam.ids=this.ids,this.queryParam.category_id=this.cat_id},methods:{getLists:function(){var t=this;this.queryParam.page=this.pagination.current,this.queryParam.pageSize=this.pagination.pageSize,this.data=[],this.request(n["a"].diypageFeedCategoryStoreList,this.queryParam).then((function(e){e.count>0&&(t.data=e.list,t.$set(t,"data",e.list),t.$set(t.pagination,"total",e.count))}))},showParenrModel:function(){this.$emit("getShowModel")},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},findMer:function(){var t=this;this.queryParam.page=1,this.data=[],this.request(n["a"].diypageFeedCategoryStoreList,this.queryParam).then((function(e){t.$set(t.pagination,"total",e.count),e.count>0&&(t.data=e.list,t.$set(t,"data",e.list))}))},handleSortChange:function(t,e,a){var i=this;this.queryParam.store_id=a.store_id,this.queryParam.mer_id=a.mer_id,this.queryParam.sort=e,this.request(n["a"].diypageFeedCategoryStoreSortEdit,this.queryParam).then((function(t){i.queryParam["page"]=1,i.getLists()}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getLists()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.getLists()}}},l=c,d=a("0c7c"),u=Object(d["a"])(l,i,s,!1,null,"5630caaf",null);e["default"]=u.exports}}]);