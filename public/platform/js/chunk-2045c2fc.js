(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2045c2fc","chunk-2d0e87ff"],{1807:function(t,o,e){},"3e11":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t._self._c;return o("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[o("a-card",{attrs:{bordered:!1}},[o("a-card",{attrs:{bordered:!1}},[o("a-form",{staticClass:"form-content",attrs:{layout:"inline"}},[o("a-row",{attrs:{gutter:2}},[o("a-col",{attrs:{md:4,sm:10}},[o("a-form-item",{attrs:{label:"组合类型："}},[o("a-select",{staticStyle:{width:"110px"},attrs:{"default-value":"queryParam.cat_id"},model:{value:t.queryParam.cat_id,callback:function(o){t.$set(t.queryParam,"cat_id",o)},expression:"queryParam.cat_id"}},t._l(t.catArr,(function(e){return o("a-select-option",{key:e.cat_id,attrs:{value:e.cat_id}},[t._v(t._s(e.cat_name))])})),1)],1)],1),o("a-col",{attrs:{md:9,sm:20}},[o("a-form-item",[o("a-select",{staticStyle:{width:"110px"},attrs:{"default-value":"queryParam.time_type"},model:{value:t.queryParam.time_type,callback:function(o){t.$set(t.queryParam,"time_type",o)},expression:"queryParam.time_type"}},[o("a-select-option",{attrs:{value:"start_time"}},[t._v("开始时间")]),o("a-select-option",{attrs:{value:"end_time"}},[t._v("结束时间")])],1),o("a-range-picker",{attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(o){t.search_data=o},expression:"search_data"}},[o("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),o("a-col",{attrs:{md:6,sm:12}},[o("a-form-item",{attrs:{label:"手动搜索："}},[o("a-input",{staticStyle:{width:"235px"},attrs:{"allow-clear":"","aria-placeholder":"请输入优惠组合名称"},model:{value:t.queryParam.keyword,callback:function(o){t.$set(t.queryParam,"keyword",o)},expression:"queryParam.keyword"}})],1)],1),o("a-col",{attrs:{md:4,sm:12}},[o("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(o){return t.searchBtn()}}},[t._v("查询")])],1)],1)],1),o("div",{staticClass:"message-suggestions-list-box"},[o("div",{staticClass:"button-content"},[o("router-link",{attrs:{slot:"groupCombine",to:{path:"/group/platform.groupCombine/edit"}},slot:"groupCombine"},[o("a-button",{attrs:{type:"primary"}},[t._v("添加优惠组合")])],1)],1),o("a-table",{staticClass:"components-table-demo-nested",staticStyle:{"min-height":"700px"},attrs:{columns:t.columns,"data-source":t.data,rowKey:"combine_id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"start_time",fn:function(e,r){return o("span",{},[t._v(" "+t._s(e)+"至"+t._s(r.end_time)+" ")])}},{key:"can_use_day",fn:function(e,r){return o("span",{},[t._v(" "+t._s(e)+"天 ")])}},{key:"action",fn:function(e,r){return o("span",{},[o("router-link",{attrs:{slot:"groupCombine",to:{path:"/group/platform.groupCombine/edit",query:{id:r.combine_id}}},slot:"groupCombine"},[o("a-button",{attrs:{type:"primary"}},[t._v("编辑")])],1)],1)}}])})],1)],1)],1)],1)},a=[],i=e("8ee2"),u=(e("075f"),e("8a11")),p=(e("e37c"),e("2f42"),e("8bbf"),[]),n={name:"StoreList",components:{},data:function(){return this.cacheData=p.map((function(t){return Object(i["a"])({},t)})),{catArr:[],treeData:[],baseUrl:"/v20/public/platform/#",queryParam:{time_type:"start_time",cat_id:"-1"},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:"",page:1,columns:[{title:"订单编号",dataIndex:"order_id",width:"8%"},{title:"优惠组合信息",dataIndex:"title",width:"15%",scopedSlots:{customRender:"title"}},{title:"订单信息",dataIndex:"order_info",width:"15%"},{title:"订单状态",dataIndex:"status",width:"15%"},{title:"创建时间",dataIndex:"start_time",width:"15%",scopedSlots:{customRender:"start_time"}},{title:"订单用户",dataIndex:"can_use_day",width:"15%",scopedSlots:{customRender:"can_use_day"}},{title:"订单有效期",dataIndex:"can_use_day",width:"15%",scopedSlots:{customRender:"can_use_day"}},{title:"操作",dataIndex:"action",width:"8%",scopedSlots:{customRender:"action"}}],data:p,search_data:[]}},created:function(){this.search_data=["",""],this.queryParam.start_time="",this.queryParam.end_time=""},activated:function(){this.getList()},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.queryParam["page"]=this.page,this.request(u["a"].getGroupCombineOrderList,this.queryParam).then((function(o){t.data=o.list,t.pagination.total=o.count}))},searchBtn:function(){this.page=1,this.getList()},tableChange:function(t,o,e){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.page=t.current),this.getList()},dateOnChange:function(t,o){this.queryParam.start_time=o[0],this.queryParam.end_time=o[1]},callback:function(t){console.log(t,"callback"),"1"==t&&this.list()}}},g=n,s=(e("5aba"),e("0b56")),d=Object(s["a"])(g,r,a,!1,null,"d42ae672",null);o["default"]=d.exports},"5aba":function(t,o,e){"use strict";e("1807")},"8a11":function(t,o,e){"use strict";var r={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};o["a"]=r}}]);