(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d871df52","chunk-2d0e87ff"],{"464c":function(t,o,e){},"8a11":function(t,o,e){"use strict";var r={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};o["a"]=r},9130:function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t._self._c;return o("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[o("a-form-model",{attrs:{layout:"inline",model:t.searchForm}},[o("a-form-model-item",{attrs:{label:"搜索"}},[o("a-select",{staticStyle:{width:"115px"},model:{value:t.searchForm.type,callback:function(o){t.$set(t.searchForm,"type",o)},expression:"searchForm.type"}},[o("a-select-option",{attrs:{value:1}},[t._v(" 分享人")]),o("a-select-option",{attrs:{value:2}},[t._v(" 购买人")]),o("a-select-option",{attrs:{value:3}},[t._v(" 商品名称")])],1),o("a-input",{staticStyle:{width:"215px"},attrs:{placeholder:"请输入搜索关键字"},model:{value:t.searchForm.keyword,callback:function(o){t.$set(t.searchForm,"keyword",o)},expression:"searchForm.keyword"}})],1),o("a-form-model-item",{attrs:{label:"订单状态"}},[o("a-select",{staticStyle:{width:"150px"},model:{value:t.searchForm.status,callback:function(o){t.$set(t.searchForm,"status",o)},expression:"searchForm.status"}},t._l(t.statusList,(function(e){return o("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label))])})),1)],1),o("a-form-model-item",{attrs:{label:"下单时间"}},[o("a-range-picker",{attrs:{ranges:{"过去30天":[t.moment().subtract(30,"days"),t.moment()],"过去15天":[t.moment().subtract(15,"days"),t.moment()],"过去7天":[t.moment().subtract(7,"days"),t.moment()],"今日":[t.moment(),t.moment()]},value:t.searchForm.time,format:"YYYY-MM-DD"},on:{change:t.onDateRangeChange}})],1),o("a-form-model-item",[o("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"search"},on:{click:function(o){return t.submitForm(!0)}}},[t._v(" 查询")])],1)],1),o("a-table",{staticClass:"mt-20",attrs:{rowKey:"order_id",columns:t.columns,"data-source":t.dataList,pagination:t.pagination},scopedSlots:t._u([{key:"goods_name",fn:function(e,r){return o("span",{},[o("div",{staticClass:"product-info"},[o("div",[o("img",{attrs:{src:r.goods_image}})]),o("div",[o("div",[t._v(t._s(e))]),o("div",[t._v(t._s(r.goods_sku_dec))])])])])}}])},[t.value_sum?o("span",{attrs:{slot:"goods_count1"},slot:"goods_count1"},[t._v(" 商品数量 "),o("a-tooltip",{attrs:{placement:"right"}},[o("template",{slot:"title"},[o("span",[t._v(t._s(t.value_sum.goods_num_sum))])]),o("a-icon",{attrs:{type:"question-circle"}})],2)],1):t._e(),t.value_sum?o("span",{attrs:{slot:"discount_price1"},slot:"discount_price1"},[t._v(" 销售额 "),o("a-tooltip",{attrs:{placement:"right"}},[o("template",{slot:"title"},[o("span",[t._v(t._s(t.value_sum.discount_price_sum))])]),o("a-icon",{attrs:{type:"question-circle"}})],2)],1):t._e(),t.value_sum?o("span",{attrs:{slot:"share_user_commission1"},slot:"share_user_commission1"},[t._v(" 佣金 "),o("a-tooltip",{attrs:{placement:"right"}},[o("template",{slot:"title"},[o("span",[t._v(t._s(t.value_sum.share_user_commission_sum))])]),o("a-icon",{attrs:{type:"question-circle"}})],2)],1):t._e()])],1)},a=[],i=e("5530"),s=e("c1df"),u=e.n(s),p=e("8a11"),n={name:"ReplyList",data:function(){return{searchForm:{keywords:"",type:1,time:[],start_time:"",end_time:"",status:0},store_list:[],columns:[{title:"分享人",dataIndex:"share_user_name",scopedSlots:{customRender:"share_user_name"}},{title:"购买人",dataIndex:"user_name",scopedSlots:{customRender:"user_name"}},{title:"订单状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"商品名称",dataIndex:"goods_name"},{dataIndex:"goods_count",key:"goods_count",scopedSlots:{customRender:"goods_count"},slots:{title:"goods_count1"}},{dataIndex:"discount_price",key:"discount_price",slots:{title:"discount_price1"},scopedSlots:{customRender:"discount_price"}},{dataIndex:"share_user_commission",key:"share_user_commission",width:"160px",slots:{title:"share_user_commission1"}},{title:"下单时间",dataIndex:"add_time",key:"add_time"}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},statusList:[{value:0,label:"全部"},{value:1,label:"已支付"},{value:2,label:"已消费"},{value:3,label:"部分消费"},{value:4,label:"退款"},{value:5,label:"已发货"},{value:6,label:"团长收货待自提"},{value:7,label:"部分商品发货"},{value:8,label:"部分商品收货待自提"},{value:10,label:"超时支付"},{value:11,label:"已取消"},{value:12,label:"已退款"},{value:13,label:"已评价"}],value_sum:null}},created:function(){this.getDataList({is_search:!1})},beforeRouteLeave:function(t,o,e){this.$destroy(),e()},methods:{moment:u.a,getDataList:function(t){var o=this,e=Object(i["a"])({},this.searchForm);delete e.time,1==t.is_search?(e.page=1,this.$set(this.pagination,"current",1)):(e.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),e.page_size=this.pagination.pageSize,this.request(p["a"].groupOrderShareList,e).then((function(t){o.dataList=t.data,o.value_sum=t.value_sum,o.$set(o.pagination,"total",t.total)}))},onDateRangeChange:function(t,o){this.$set(this.searchForm,"time",[t[0],t[1]]),this.$set(this.searchForm,"start_time",o[0]),this.$set(this.searchForm,"end_time",o[1])},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=Object(i["a"])({},this.searchForm);delete o.time,o.is_search=t,console.log(o),this.getDataList(o)},onPageChange:function(t,o){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,o){this.$set(this.pagination,"pageSize",o),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{content:"",begin_time:"",end_time:"",type:1,status:2}),this.$set(this.pagination,"current",1),this.getDataList({store_id:this.store_id,is_search:!1})}}},g=n,l=(e("f7a4"),e("2877")),m=Object(l["a"])(g,r,a,!1,null,"59354daa",null);o["default"]=m.exports},f7a4:function(t,o,e){"use strict";e("464c")}}]);