(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508125b1","chunk-5895d27a"],{"0ebe":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"pl-20 pr-20 pt-20 pb-20"},[e("a-row",{staticClass:"text-right"},["category"==t.type?e("a-button",{attrs:{type:"primary"},on:{click:function(o){return t.addCategory()}}},[t._v("添加主分类")]):e("a-button",{attrs:{type:"primary"},on:{click:function(o){return t.addSubCategory()}}},[t._v("添加子分类")])],1)],1),e("div",{staticClass:"pl-20 pr-20 pb-20"},[e("a-table",{staticStyle:{"min-height":"700px"},attrs:{columns:t.columns,"data-source":t.data,rowKey:"cat_id",pagination:t.pagination},scopedSlots:t._u([{key:"cat_fid",fn:function(o,r){return e("span",{},[e("a-button",{attrs:{type:"link"},on:{click:function(o){return t.viewCatOpt(r)}}},[t._v("查看")])],1)}},{key:"cat_sort",fn:function(o,r){return e("span",{},[e("a-input-number",{attrs:{value:o,min:0},on:{change:function(o){return t.sortChange(o,r)}}})],1)}},{key:"cat_status",fn:function(o){return e("span",{},[e("a-button",{staticStyle:{cursor:"default"},attrs:{type:"link"}},[t._v(t._s(1==o?"启用":"关闭"))])],1)}},{key:"action",fn:function(o,r){return e("span",{},[e("a-button",{attrs:{type:"link"},on:{click:function(o){return t.editOpt(r)}}},[t._v("编辑")]),e("a-button",{attrs:{type:"link"},on:{click:function(o){return t.delOpt(r)}}},[t._v("删除")])],1)}}])})],1)])},a=[],i=(e("a9e3"),e("4de4"),e("d3b7"),e("159b"),e("8a11")),n={props:{type:{type:String,default:"category"},cat_id:{type:[String,Number],default:0},refresh:{type:Boolean,default:!1}},data:function(){var t=this;return{columnsData:[{title:"编号",dataIndex:"cat_id",width:"8%",align:"center"},{title:"名称",dataIndex:"cat_name",align:"center"},{title:"短标记",dataIndex:"cat_url",align:"center"},{title:"子分类",dataIndex:"cat_fid",scopedSlots:{customRender:"cat_fid"},align:"center"},{title:"排序",dataIndex:"cat_sort",scopedSlots:{customRender:"cat_sort"},align:"center"},{title:"团购状态",dataIndex:"cat_status",scopedSlots:{customRender:"cat_status"},align:"center"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center"}],data:[],pagination:{pageSize:10,total:0,current:1,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-quick-jumper":!0,"show-size-changer":!0,onChange:function(o,e){t.pagination.current=o,t.getList()},onShowSizeChange:function(o,e){t.pagination.pageSize=e,t.getList()}},columns:[]}},watch:{refresh:function(t){console.log(t,"val---groupCategoryTableList"),console.log(this.cat_id,"cat_id---groupCategoryTableList"),t&&("subCategory"==this.type&&(this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10)),this.getList())}},created:function(){"subCategory"==this.type?this.columns=this.columnsData.filter((function(t){return"cat_fid"!=t.dataIndex})):this.columns=this.columnsData},mounted:function(){this.getList()},methods:{getList:function(){var t=this,o={page:this.pagination.current,pageSize:this.pagination.pageSize,cat_id:this.cat_id};this.pagination.total>0&&Math.ceil(this.pagination.total/this.pagination.pageSize)<o.page&&(this.pagination.current=0,o.page=1),this.request(i["a"].getGroupCategorylist,o).then((function(o){t.data=o.list||[],t.pagination.total=o.count||0}))},viewCatOpt:function(t){console.log(t,"current"),this.$router.push({path:"/group/platform.groupSubCategoryList/index",query:{cat_fid:t.cat_id}})},sortChange:function(t,o){var e=this,r={cat_sort:t,cat_id:o.cat_id};console.log(t,"cat_sort"),console.log(o,"current"),this.request(i["a"].groupCategorySaveSort,r).then((function(r){console.log("修改排序成功"),e.$message.success("操作成功",1,(function(){e.data.forEach((function(r,a){r.cat_id==o.cat_id&&e.$set(e.data[a],"cat_sort",t)}))}))})).catch((function(t){e.getList()}))},editOpt:function(t){"category"==this.type&&this.$router.push({path:"/group/platform.groupCategory/edit",query:{cat_id:t.cat_id,cat_fid:t.cat_fid}}),"subCategory"==this.type&&this.$emit("showModal",{visible:!0,cat_id:t.cat_id,cat_fid:this.cat_id})},delOpt:function(t){var o=this,e={cat_id:t.cat_id};this.$confirm({title:"提示",content:"确定删除该分类？",onOk:function(){o.request(i["a"].delGroupCategory,e).then((function(t){o.$message.success("操作成功",1,(function(){o.getList()}))}))},onCancel:function(){}})},addCategory:function(){this.$router.push({path:"/group/platform.groupCategory/edit",query:{cat_id:0,cat_fid:0}})},addSubCategory:function(){this.$emit("showModal",{visible:!0,cat_id:0,cat_fid:this.cat_id})}}},u=n,p=e("2877"),g=Object(p["a"])(u,r,a,!1,null,"af9e214e",null);o["default"]=g.exports},5640:function(t,o,e){"use strict";e("a536")},"8a11":function(t,o,e){"use strict";var r={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};o["a"]=r},a536:function(t,o,e){},ed06:function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page mt-20 ml-10 mr-10 mb-20"},[e("a-page-header",{staticClass:"page-header",attrs:{title:"分类列表"}}),e("groupCategoryTableList",{attrs:{refresh:t.refresh,cat_id:t.cat_id,type:"category"}})],1)},a=[],i=(e("8a11"),e("0ebe")),n={components:{groupCategoryTableList:i["default"]},data:function(){return{cat_id:0,refresh:!1}},mounted:function(){},activated:function(){this.refresh=!0},deactivated:function(){this.refresh=!1},methods:{}},u=n,p=(e("5640"),e("2877")),g=Object(p["a"])(u,r,a,!1,null,"f6e65964",null);o["default"]=g.exports}}]);