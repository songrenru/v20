(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30577e89","chunk-f16ef31a","chunk-2d0a310a"],{"011d":function(t,e,o){"use strict";var s={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",getMallBrowse:"/mall/platform.MallBrowse/getMallBrowse",MallBrowseExport:"/mall/platform.MallBrowse/export",exportBrowseTotalExport:"/mall/platform.MallBrowse/exportBrowseTotal",getAuditGoodsList:"/mall/platform.MallPlatformGoods/getAuditGoodsList",auditGoods:"/mall/platform.MallPlatformGoods/auditGoods",loginMerchant:"/mall/platform.MallPlatformGoods/loginMerchant",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};e["a"]=s},"2ac6":function(t,e,o){"use strict";o("433c")},"433c":function(t,e,o){},bbbf:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;return e("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:t.dialogVisible,destroyOnClose:!0},on:{ok:t.handleOk,cancel:t.handleCancel}},[e("div",{staticClass:"select-goods"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.keywords,expression:"!keywords"}],staticClass:"left scroll_content"},[e("a-menu",{attrs:{mode:"inline","open-keys":t.openKeys,selectedKeys:t.selectedSort},on:{openChange:t.onOpenChange,select:t.onSelect}},[t._l(t.sortList,(function(o){return[o.children&&o.children.length?e("a-sub-menu",{key:o.cat_id},[e("span",{attrs:{slot:"title"},slot:"title"},[e("span",[t._v(t._s(o.cat_name))])]),o.children&&o.children.length?[t._l(o.children,(function(o){return[o.children&&o.children.length?[e("a-sub-menu",{key:o.cat_id,attrs:{title:o.cat_name}},t._l(o.children,(function(o){return e("a-menu-item",{key:o.cat_id},[t._v(t._s(o.cat_name)+" ")])})),1)]:[e("a-menu-item",{key:o.cat_id},[t._v(t._s(o.cat_name))])]]}))]:t._e()],2):e("a-menu-item",{key:o.cat_id},[t._v(t._s(o.cat_name))])]}))],2)],1),e("div",{staticClass:"right"},[e("div",{staticClass:"top"},[t.keywords?e("a-icon",{staticClass:"fs-16 pointer",attrs:{type:"left"},on:{click:function(e){return t.backToSort()}}}):t._e(),e("a-input-search",{staticClass:"search",attrs:{placeholder:"商品名称","allow-clear":""},on:{change:t.getGoodsList,search:t.getGoodsList},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),e("div",{staticClass:"bottom"},[t.isSku?e("a-table",{key:"sku_table",attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.tableList,rowKey:"goods_id",scroll:{y:500},pagination:!!t.tableList.length},scopedSlots:t._u([{key:"goods_name",fn:function(o,s){return e("span",{},[e("div",{staticClass:"product-info"},[e("div",[e("img",{attrs:{src:s.image}})]),e("div",[t._v(t._s(o))])])])}},{key:"price",fn:function(o,s){return e("span",{},[e("span",[t._v("￥"+t._s(s.min_price)+" ~ ￥"+t._s(s.max_price))])])}},{key:"expandedRowRender",fn:function(o){return t.isSku&&o.sku_info&&o.sku_info.length?e("p",{staticStyle:{margin:"0"}},t._l(o.sku_info,(function(s){return e("span",{key:s.sku_id,staticClass:"flex align-center mb-20 cr-99"},[e("a-checkbox",{attrs:{"default-checked":s.selected,disabled:0==s.can_be_choose||0==s.can_be_choose_2},on:{change:function(e){return t.onSkuGoodsSelect(s.sku_id,o,e)}}}),e("span",{staticClass:"ml-20 mr-20",staticStyle:{width:"245px"}},[t._v(t._s(s.sku_str||"--"))]),e("span",{staticStyle:{width:"200px"}},[t._v("￥"+t._s(s.price))]),e("span",{staticClass:"flex-1"},[t._v(t._s(s.stock_num))])],1)})),0):t._e()}}],null,!0)}):e("a-table",{key:"spu_table",attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.tableList,rowKey:"goods_id",scroll:{y:500},pagination:!!t.tableList.length},scopedSlots:t._u([{key:"goods_name",fn:function(o,s){return e("span",{},[e("div",{staticClass:"product-info"},[e("div",[e("img",{attrs:{src:s.image}})]),e("div",[t._v(t._s(o))])])])}},{key:"price",fn:function(o,s){return e("span",{},["sku"==s.goods_type?e("span",{key:"sku_goods"},[t._v("￥"+t._s(s.min_price)+" ~ ￥"+t._s(s.max_price))]):e("span",{key:"spu_goods"},[t._v("￥"+t._s(s.price))])])}}])})],1)])])])},l=[],i=(o("a9e3"),o("d3b7"),o("159b"),o("a434"),o("7db0"),o("d81d"),o("011d")),a={name:"SelectShopGoods",props:{type:{type:String,default:"checkbox"},recordId:{type:[String,Number],default:""},source:{type:String,default:"platform_six"},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"商品信息",dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"},width:"300px"},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"},width:"200px"},{title:"当前库存",dataIndex:"stock_num"}],menuId:0,hasSelected:[],selectedRowKeys:[],selectedSort:[],sortList:[],keywords:"",tableList:[],oldMenuId:"",sList:[],isSku:!1}},computed:{rowSelection:function(){return this.isSku?null:{selectedRowKeys:this.selectedRowKeys,type:this.type,onSelect:this.onRowSelect,onSelectAll:this.onSelectAll,getCheckboxProps:function(t){return{props:{disabled:0==t.can_be_choose||0==t.can_be_choose_2}}}}}},watch:{selectedList:function(t){this.sList=JSON.parse(JSON.stringify(t))}},methods:{openDialog:function(t,e,o){var s=this;this.rid=t,this.title=e,this.cat_key=o,this.dialogVisible=!0,this.selectedList&&this.selectedList.forEach((function(e){e.id===t&&(s.sList=JSON.parse(JSON.stringify(e.related_goods)))})),this.getSortList()},init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.selectedSort=[],this.tableList=[],this.keywords="",this.currentPage=1},getSortList:function(){var t=this;this.request(i["a"].goodsCategoryList).then((function(e){e.list&&e.list.length&&(t.sortList=e.list,t.handleDefaultSelect())}))},handleDefaultSelect:function(){var t=this;this.init(),this.sortList.forEach((function(e,o){if(t.rootSubmenuKeys.push(e.cat_id),e.children&&e.children.length){0==o&&t.openKeys.push(e.cat_id);var s=e.children;s.forEach((function(e,s){if(e.children&&e.children.length){0==s&&t.openKeys.push(e.cat_id);var l=e.children;l.forEach((function(e,l){0==o&&0==s&&0==l&&(t.menuId=e.cat_id)}))}else 0==o&&0==s&&(t.menuId=e.cat_id)}))}else 0==o&&(t.menuId=e.cat_id)})),this.selectedSort.push(this.menuId),this.getGoodsList()},onSelect:function(t){var e=t.key;this.selectedSort=[e],this.menuId=e,this.currentPage=1,this.getGoodsList()},getGoodsList:function(){var t=this;this.tableList=[];var e={keyword:this.keywords,source:this.source,record_id:this.rid};this.isSkuGoods(),this.keywords||(e.cat_id=this.menuId),this.request(i["a"].getActGoods,e).then((function(e){e.list&&e.list.length&&(t.tableList=e.list,t.handleList())}))},handleList:function(){var t=this;this.isSku?this.sList.length&&("radio"==this.type&&this.sList.length>1&&(this.sList=this.sList.splice(1),this.$message.warning("只能选择一个商品哦，已自动为您选择已选择列表中的第一个商品")),this.tableList.forEach((function(e){t.sList.forEach((function(o){o.goods_id==e.goods_id?e.sku_info.length==o.sku_info.length?e.sku_info=o.sku_info:e.sku_info.forEach((function(s){o.sku_info.forEach((function(o){o.sku_id==s.sku_id&&(s.selected=!0,"radio"==t.type&&(e.defaultValue=s.sku_id))}))})):"radio"==t.type&&e.sku_info.forEach((function(t){t.can_be_choose_2=0}))}))}))):(this.selectedRowKeys=[],this.sList.length&&("radio"==this.type?(this.sList.length>1&&(this.sList=[this.sList[0]]),this.selectedRowKeys=[this.sList[0].goods_id]):this.sList.forEach((function(e){t.selectedRowKeys.push(e.goods_id)}))),this.selectedRows=this.sList)},handleOk:function(){var t=this,e=this.selectedRowKeys,o=this.sList;this.isSku||(o.length?(this.request(i["a"].addRelatedGoods,{goods_ids:e,id:this.rid,source:this.source}).then((function(e){t.$message.success("添加成功"),t.$emit("backDeal",t.cat_key,t.title)})),this.handleCancel()):this.$message.error("请选择商品"))},handleCancel:function(){this.dialogVisible=!1},onOpenChange:function(t){var e=this,o=t.find((function(t){return-1===e.openKeys.indexOf(t)}));-1===this.rootSubmenuKeys.indexOf(o)?this.openKeys=t:this.openKeys.push(o)},backToSort:function(){this.keywords="",this.getGoodsList()},onRowSelect:function(t,e,o){"radio"==this.type?(this.sList=[t],this.selectedRowKeys=[t.goods_id]):e?(this.sList.push(t),this.selectedRowKeys.push(t.goods_id)):(this.sList.remove(t),this.selectedRowKeys.remove(t.goods_id))},onSelectAll:function(t,e,o){var s=this;t?o.map((function(t){s.selectedRowKeys.push(t.goods_id),s.sList.push(t)})):o.map((function(t){s.sList.remove(t),s.selectedRowKeys.remove(t.goods_id)}))},isSkuGoods:function(){this.isSku=!1},onSkuGoodsSelect:function(t,e,o){var s=o.target.checked;if(console.log("------------this.sList",this.sList),s){var l=!1;this.sList.length&&this.sList.forEach((function(o){o.goods_id==e.goods_id&&(e.sku_info.forEach((function(e){e.sku_id==t&&(e.selected=!0)})),o.sku_info=e.sku_info,l=!0)})),l||(e.sku_info.forEach((function(e){e.sku_id==t&&(e.selected=!0)})),this.sList.push(e),"radio"==this.type&&1==this.sList.length&&(this.tableList.forEach((function(t){t.goods_id!=e.goods_id&&t.sku_info.forEach((function(t){t.can_be_choose_2=0}))})),this.$set(this,"tableList",this.tableList)))}else{var i=!0;e.sku_info.forEach((function(e){e.sku_id==t&&(e.selected=!1),e.selected&&(i=!1)})),i&&(this.sList.remove(e),"radio"!=this.type||this.sList.length||(this.tableList.forEach((function(t){t.goods_id!=e.goods_id&&t.sku_info.forEach((function(t){t.can_be_choose_2=1}))})),this.$set(this,"tableList",this.tableList)))}this.$forceUpdate()},onRadioChange:function(t,e){console.log("----------------",e.target.value);var o=!1;this.sList.length&&this.sList.forEach((function(s){s.goods_id==t.goods_id&&(s.sku_info.forEach((function(t){t.sku_id==e.target.value?(console.log("----------------add sku_id ",t.sku_id),t.selected=!0):t.selected=!1})),o=!0)})),console.log("----------------add",o),o||(t.sku_info.forEach((function(t){t.sku_id==e.target.value?t.selected=!0:t.selected=!1})),this.sList.push(t))}}};Array.prototype.remove=function(t){var e=this.indexOf(t),o=-1;e>-1?this.splice(e,1):(this.map((function(e,s){e.goods_id==t.goods_id&&(o=s)})),o>-1&&this.splice(o,1))};var r=a,n=(o("2ac6"),o("2877")),d=Object(n["a"])(r,s,l,!1,null,"3051b40e",null);e["default"]=d.exports},cd39:function(t,e,o){"use strict";o.r(e);o("b0c0"),o("4e82");var s=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{width:1e3,height:640,title:"关联商品列表",visible:t.dialogVisible},on:{cancel:t.handleCancel,ok:t.handleOk}},[e("div",[e("a-button",{staticStyle:{"margin-bottom":"14px"},attrs:{type:"primary"},on:{click:t.getGoods}},[t._v("添加商品")]),e("a-table",{attrs:{columns:t.columns,dataSource:t.data,scroll:{y:440},pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"goodsName",fn:function(o,s){return e("span",{},[e("a-avatar",{attrs:{src:s.image,shape:"square",size:64}}),e("a-divider",{attrs:{type:"virticle"}}),e("span",[t._v(" "+t._s(s.name)+" ")])],1)}},{key:"price",fn:function(o,s){return e("span",{},["spu"==s.goods_type?e("span",[t._v(" "+t._s(s.price)+" ")]):e("span",[t._v(" "+t._s(s.min_price)+"-"+t._s(s.max_price)+" ")])])}},{key:"stock_num",fn:function(o,s){return e("span",{},[-1==s.stock_num?e("span",[t._v(" 无限量 ")]):e("span",[t._v(" "+t._s(s.stock_num)+" ")])])}},{key:"sort",fn:function(o,s){return e("span",{},[e("a-input-number",{staticClass:"sort-input",attrs:{"default-value":o||0,precision:0,min:0},on:{blur:function(e){return t.handleSortChange(e,o,s)}},model:{value:s.sort,callback:function(e){t.$set(s,"sort",e)},expression:"record.sort"}})],1)}},{key:"action",fn:function(o,s){return e("span",{},[e("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.delOne(s.id)}}},[e("a",[t._v("删除")])])],1)}}])}),e("select-goods",{ref:"selectGoods",attrs:{source:t.source,selectedList:t.data},on:{backDeal:function(e){return t.getList(t.dec_id,t.type,1,10)}}})],1)])},l=[],i=(o("a9e3"),o("011d")),a=o("bbbf"),r=[{title:"商品信息",dataIndex:"goodsName",key:"goodsName",width:300,scopedSlots:{customRender:"goodsName"}},{title:"价格",dataIndex:"price",key:"price",scopedSlots:{customRender:"price"}},{title:"库存",dataIndex:"stock_num",key:"stock_num",scopedSlots:{customRender:"stock_num"}},{title:"排序",dataIndex:"sort",width:"20%",scopedSlots:{customRender:"sort"},sorter:function(t,e){return t.sort-e.sort}},{title:"操作",dataIndex:"action",key:"action",scopedSlots:{customRender:"action"}}],n={name:"relatedGoods",components:{SelectGoods:a["default"]},props:{type:{type:String,default:"checkbox"},recordId:{type:[String,Number],default:""},source:{type:String,default:"platform_six"},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{data:[],columns:r,dialogVisible:!1,dec_id:"",type:"",title:"",page:1,pageSize:10,pagination:{pageSize:10,total:0,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0}}},methods:{openDialog:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.dec_id=t,this.type=e,this.title=o,this.dialogVisible=!0,this.getList(t,e,1,10)},getList:function(t,e,o,s){var l=this;this.request(i["a"].getRelatedList,{dec_id:t,type:e,page:o,pageSize:s}).then((function(t){console.log(t),l.data=t.list,l.pagination.total=t.total}))},onSelectChange:function(){console.log("selectedRowKeys changed: ",selectedRowKeys)},handleCancel:function(){this.dialogVisible=!1},handleOk:function(){this.dialogVisible=!1},getGoods:function(){1==this.type?this.$refs.selectGoods.openDialog(this.dec_id,this.title,1):this.$refs.selectGoods.openDialog(this.dec_id)},handleSortChange:function(t,e,o){var s=this,l={id:o.id,sort:e,type:this.type};this.request(i["a"].saveRelatedSort,l).then((function(t){s.getList(s.dec_id,s.type,1,10)}))},delOne:function(t){var e=this,o={id:t,type:this.type};this.request(i["a"].delOne,o).then((function(t){e.getList(e.dec_id,e.type,1,10)}))},tableChange:function(t){this.pageSize=t.pageSize,t.current&&t.current>0&&(this.page=t.current)}}},d=n,c=o("2877"),m=Object(c["a"])(d,s,l,!1,null,"73bfbc7e",null);e["default"]=m.exports}}]);