(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c0ea21a"],{"4fa1":function(t,e,a){"use strict";var n={getLists:"/common/platform.DiypageFeedCategory/diypageFeedCategoryList",diypageFeedCategoryEdit:"/common/platform.DiypageFeedCategory/diypageFeedCategoryEdit",diypageFeedCategorySave:"/common/platform.DiypageFeedCategory/diypageFeedCategorySave",diypageFeedCategoryDel:"/common/platform.DiypageFeedCategory/diypageFeedCategoryDel",diypageFeedCategoryStoreList:"/common/platform.DiypageFeedCategory/diypageFeedCategoryStoreList",diypageFeedCategoryStoreSortEdit:"/common/platform.DiypageFeedCategory/diypageFeedCategoryStoreSortEdit"};e["a"]=n},b3dd:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[a("a-layout",[a("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"phone",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"mer_name",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"last_time",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"group_num",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"sort",fn:function(e,n){return[a("a-input-number",{staticClass:"sort-input",attrs:{"default-value":e||0,precision:0,min:0},on:{blur:function(a){return t.handleSortChange(a,e,n)}},model:{value:n.sort,callback:function(e){t.$set(n,"sort",e)},expression:"record.sort"}})]}},{key:"title",fn:function(e){return[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{staticStyle:{"padding-top":"5px"},attrs:{span:3}},[t._v("手动搜索:")]),a("a-col",{staticClass:"text-left",attrs:{span:8}},[a("a-row",[a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输入商家名称"},model:{value:t.queryParam.mer_name,callback:function(e){t.$set(t.queryParam,"mer_name",e)},expression:"queryParam.mer_name"}})],1)],1)],1),a("a-col",{attrs:{span:8}}),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.findMer()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{span:1}}),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-button",{attrs:{type:"warning"},on:{click:function(e){return t.showParenrModel()}}},[t._v(" 返回 ")])],1)],1)]}}])})],1)],1)],1)],1)},i=[],r=(a("a9e3"),a("4e82"),a("4fa1")),o=a("da05"),s=[{title:"店铺名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"店铺电话",dataIndex:"phone",scopedSlots:{customRender:"phone"}},{title:"所属商家",dataIndex:"mer_name",scopedSlots:{customRender:"mer_name"}},{title:"创建时间",dataIndex:"last_time",scopedSlots:{customRender:"last_time"}},{title:"团购商品数量",dataIndex:"group_num",scopedSlots:{customRender:"group_num"}},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"}}],d={name:"DiypageFeedCategoryStore",components:{ACol:o["b"]},props:{cat_id:{type:[String,Number],default:"0"},ids:{type:[String,Number],default:"0"}},data:function(){return{spinning:!1,pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},queryParam:{page:1,ids:"",mer_name:"",category_id:"",pageSize:10},data:[],columns:s}},mounted:function(){this.queryParam.ids=this.ids,this.queryParam.category_id=this.cat_id,this.getLists()},activated:function(){this.queryParam.ids=this.ids,this.queryParam.category_id=this.cat_id,this.getLists()},created:function(){this.queryParam.ids=this.ids,this.queryParam.category_id=this.cat_id},methods:{getLists:function(){var t=this;this.queryParam.page=this.pagination.current,this.queryParam.pageSize=this.pagination.pageSize,this.data=[],this.request(r["a"].diypageFeedCategoryStoreList,this.queryParam).then((function(e){e.count>0&&(t.data=e.list,t.$set(t,"data",e.list),t.$set(t.pagination,"total",e.count))}))},showParenrModel:function(){this.$emit("getShowModel")},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},findMer:function(){var t=this;this.queryParam.page=1,this.data=[],this.request(r["a"].diypageFeedCategoryStoreList,this.queryParam).then((function(e){t.$set(t.pagination,"total",e.count),e.count>0&&(t.data=e.list,t.$set(t,"data",e.list))}))},handleSortChange:function(t,e,a){var n=this;this.queryParam.store_id=a.store_id,this.queryParam.mer_id=a.mer_id,this.queryParam.sort=e,this.request(r["a"].diypageFeedCategoryStoreSortEdit,this.queryParam).then((function(t){n.queryParam["page"]=1,n.getLists()}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getLists()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.getLists()}}},u=d,c=a("2877"),g=Object(c["a"])(u,n,i,!1,null,"5630caaf",null);e["default"]=g.exports}}]);