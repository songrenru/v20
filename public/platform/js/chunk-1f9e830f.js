(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f9e830f"],{"8a11":function(o,t,r){"use strict";var e={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};t["a"]=e},c8f4:function(o,t,r){"use strict";r.r(t);var e=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[r("a-card",{attrs:{bordered:!1}},[r("div",[r("a-form",{attrs:{layout:"inline"}},[r("a-col",{attrs:{md:7}},[r("a-form-item",{attrs:{label:"手动搜索："}},[r("a-input",{staticStyle:{width:"235px"},attrs:{placeholder:"请输入商品名称"},model:{value:o.queryParam.keyword,callback:function(t){o.$set(o.queryParam,"keyword",t)},expression:"queryParam.keyword"}})],1)],1),r("a-col",{attrs:{md:3}},[r("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(t){return o.searchBtn()}}},[o._v("查询")])],1)],1)],1)]),r("a-card",{attrs:{bordered:!1}},[r("a-table",{staticStyle:{"min-height":"700px"},attrs:{columns:o.columns,"data-source":o.data,rowKey:"id",pagination:o.pagination},on:{change:o.tableChange},scopedSlots:o._u([{key:"sort",fn:function(t,e){return r("span",{},[r("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0,step:"1"},on:{blur:function(r){return o.handleSortChange(t,e.id)}},model:{value:e.sort,callback:function(t){o.$set(e,"sort",t)},expression:"record.sort"}})],1)}}])})],1)],1)},a=[],u=r("8a11"),p={data:function(){return{queryParam:{custom_id:"0",keyword:""},pagination:{pageSize:10,total:10,"show-total":function(o){return"共 ".concat(o," 条记录")}},page:1,columns:[{title:"所属商家",dataIndex:"merchant_name",width:"8%"},{title:"商品名称",dataIndex:"group_name",width:"15%"},{title:"添加时间",dataIndex:"add_time",width:"8%"},{title:"排序",dataIndex:"sort",width:"15%",scopedSlots:{customRender:"sort"}}],data:[]}},watch:{"$route.query.custom_id":{immediate:!0,handler:function(o){this.queryParam.custom_id=o,this.getList()}}},created:function(){console.log(this.$route.query.custom_id,"val==val=val1"),this.queryParam.custom_id=this.$route.query.custom_id,this.getList()},activated:function(){console.log(this.$route.query.custom_id,"val==val=val2"),this.queryParam.custom_id=this.$route.query.custom_id,this.getList()},mounted:function(){console.log(this.$route.query.custom_id,"val==val=val3"),this.queryParam.custom_id=this.$route.query.custom_id,this.getList()},methods:{getList:function(){var o=this;this.queryParam["page"]=this.page,this.request(u["a"].getRenovationCustomGroupSortList,this.queryParam).then((function(t){o.data=t.list,o.pagination.total=t.count}))},handleSortChange:function(o,t){var r=this;this.request(u["a"].editRenovationCustomGroupSort,{id:t,sort:o}).then((function(o){r.request(u["a"].getRenovationCustomGroupSortList,r.queryParam).then((function(o){r.data=o.list,r.pagination.total=o.count}))}))},tableChange:function(o){this.queryParam["pageSize"]=o.pageSize,this.queryParam["page"]=o.current,o.current&&o.current>0&&(this.page=o.current),this.getList()},searchBtn:function(){this.page=1,this.getList()}}},i=p,g=r("2877"),n=Object(g["a"])(i,e,a,!1,null,"67fe749b",null);t["default"]=n.exports}}]);