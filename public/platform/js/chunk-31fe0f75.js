(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31fe0f75"],{"37fd":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[s("div",{staticClass:"select-goods"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.keywords,expression:"!keywords"}],staticClass:"left scroll_content"},[s("a-menu",{attrs:{mode:"inline","open-keys":e.openKeys,selectedKeys:e.selectedSort},on:{openChange:e.onOpenChange,select:e.onSelect}},[e._l(e.sortList,(function(t){return[t.children&&t.children.length?s("a-sub-menu",{key:t.id},[s("span",{attrs:{slot:"title"},slot:"title"},[s("span",[e._v(e._s(t.name))])]),t.children&&t.children.length?[e._l(t.children,(function(t){return[t.children&&t.children.length?[s("a-sub-menu",{key:t.id,attrs:{title:t.name}},e._l(t.children,(function(t){return s("a-menu-item",{key:t.id},[e._v(e._s(t.name))])})),1)]:[s("a-menu-item",{key:t.id},[e._v(e._s(t.name))])]]}))]:e._e()],2):s("a-menu-item",{key:t.id},[e._v(e._s(t.name))])]}))],2)],1),s("div",{staticClass:"right"},[s("div",{staticClass:"top"},[e.keywords?s("a-icon",{staticClass:"fs-16 pointer",attrs:{type:"left"},on:{click:function(t){return e.backToSort()}}}):e._e(),s("a-input-search",{staticClass:"search",attrs:{placeholder:"商品名称","allow-clear":""},on:{change:e.getGoodsList,search:e.getGoodsList},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),s("div",{staticClass:"bottom"},[e.isSku?s("a-table",{key:"sku_table",attrs:{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.tableList,rowKey:"goods_id",scroll:{y:500},pagination:!!e.tableList.length&&e.pagination},scopedSlots:e._u([{key:"name",fn:function(t,a){return s("span",{},[s("div",{staticClass:"product-info"},[s("div",[s("img",{attrs:{src:a.image}})]),s("div",[e._v(e._s(t))])])])}},{key:"price",fn:function(t,a){return s("span",{},["sku"==a.goods_type?s("span",{key:"sku_goods"},[e._v("￥"+e._s(a.min_price)+" ~ ￥"+e._s(a.max_price))]):s("span",{key:"spu_goods"},[e._v("￥"+e._s(a.price))])])}},{key:"current_stock",fn:function(t){return s("span",{},[e._v(" "+e._s(-1==t?"无限量":t)+" ")])}},{key:"expandedRowRender",fn:function(t){return e.isSku&&t.sku_info&&t.sku_info.length?s("p",{staticStyle:{margin:"0"}},e._l(t.sku_info,(function(a){return s("span",{key:a.sku_id,staticClass:"flex align-center mb-20 cr-99"},[s("a-checkbox",{attrs:{"default-checked":a.selected,disabled:0==a.can_be_choose||0==a.can_be_choose_2},on:{change:function(s){return e.onSkuGoodsSelect(a.sku_id,t,s)}}}),s("span",{staticClass:"ml-20 mr-20",staticStyle:{width:"245px"}},[e._v(e._s(a.sku_str||"--"))]),s("span",{staticStyle:{width:"200px"}},[e._v("￥"+e._s(a.price))]),s("span",{staticClass:"flex-1"},[e._v(e._s(-1==a.stock_num?"无限量":a.stock_num))])],1)})),0):e._e()}}],null,!0)}):s("a-table",{key:"spu_table",attrs:{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.tableList,rowKey:"goods_id",scroll:{y:500},pagination:!!e.tableList.length&&e.pagination},scopedSlots:e._u([{key:"name",fn:function(t,a){return s("span",{},[s("div",{staticClass:"product-info"},[s("div",[s("img",{attrs:{src:a.image}})]),s("div",[e._v(e._s(t))])])])}},{key:"price",fn:function(t,a){return s("span",{},["sku"==a.goods_type?s("span",{key:"sku_goods"},[e._v("￥"+e._s(a.min_price)+" ~ ￥"+e._s(a.max_price))]):s("span",{key:"spu_goods"},[e._v("￥"+e._s(a.price))])])}},{key:"current_stock",fn:function(t){return s("span",{},[e._v(" "+e._s(-1==t?"无限量":t)+" ")])}}])})],1)])])])},i=[],l=(s("a9e3"),s("d3b7"),s("159b"),s("a434"),s("7db0"),s("d81d"),s("4031")),o=null,n={name:"SelectShopGoods",props:{storeId:{type:[String,Number],default:""},source:{type:String,default:"shipping"},type:{type:String,default:"checkbox"},startTime:String,endTime:String,selectedList:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,start_time:0,end_time:0,rootSubmenuKeys:[],openKeys:[],columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"},width:"300px"},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"},width:"200px"},{title:"当前库存",dataIndex:"stock_num",scopedSlots:{customRender:"current_stock"}}],menuId:0,hasSelected:[],selectedRowKeys:[],selectedSort:[],sortList:[],keywords:"",tableList:[],oldMenuId:"",sList:[],isSku:!1,pagination:{current:1,total:0,pageSize:10,onChange:function(e,t){return o.onPageChange(e,t)}}}},computed:{rowSelection:function(){return this.isSku?null:{selectedRowKeys:this.selectedRowKeys,type:this.type,onSelect:this.onRowSelect,onSelectAll:this.onSelectAll,getCheckboxProps:function(e){return{props:{disabled:0==e.can_be_choose||0==e.can_be_choose_2}}}}}},created:function(){o=this},watch:{selectedList:function(e){this.sList=JSON.parse(JSON.stringify(e))}},methods:{openDialog:function(){this.dialogVisible=!0,this.sList=JSON.parse(JSON.stringify(this.selectedList)),this.getSortList(),this.isSkuGoods()},init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.selectedSort=[],this.tableList=[],this.keywords="",this.start_time=new Date(this.startTime).getTime()/1e3,this.end_time=new Date(this.endTime).getTime()/1e3,this.pagination=this.$options.data().pagination},getSortList:function(){var e=this;this.request(l["a"].getMerchantSort,{store_id:this.storeId}).then((function(t){t.list&&t.list.length&&(e.sortList=t.list,e.handleDefaultSelect())}))},handleDefaultSelect:function(){var e=this;this.init(),this.sortList.forEach((function(t,s){if(e.rootSubmenuKeys.push(t.id),t.children&&t.children.length){0==s&&e.openKeys.push(t.id);var a=t.children;a.forEach((function(t,a){if(t.children&&t.children.length){0==a&&e.openKeys.push(t.id);var i=t.children;i.forEach((function(t,i){0==s&&0==a&&0==i&&(e.menuId=t.id)}))}else 0==s&&0==a&&(e.menuId=t.id)}))}else 0==s&&(e.menuId=t.id)})),this.selectedSort.push(this.menuId),this.getGoodsList()},onSelect:function(e){var t=e.key;this.selectedSort=[t],this.menuId=t,this.$set(this.pagination,"current",1),this.getGoodsList()},getGoodsList:function(){var e=this;this.tableList=[];var t={keyword:this.keywords,type:this.source,start_time:this.start_time,end_time:this.end_time,store_id:this.storeId,page:this.pagination.current,pageSize:this.pagination.pageSize};this.keywords||(t.sort_id=this.menuId),this.request(l["a"].getMallGoods,t).then((function(t){t.list&&t.list.length&&(e.tableList=t.list,e.$set(e.pagination,"total",t.count),e.handleList())}))},handleList:function(){var e=this;this.isSku?this.sList.length&&("radio"==this.type&&this.sList.length>1&&(this.sList=this.sList.splice(1),this.$message.warning("只能选择一个商品哦，已自动为您选择已选择列表中的第一个商品")),this.tableList.forEach((function(t){e.sList.forEach((function(s){s.goods_id==t.goods_id?t.sku_info.length==s.sku_info.length?t.sku_info=s.sku_info:t.sku_info.forEach((function(e){s.sku_info.forEach((function(t){t.sku_id==e.sku_id&&(e.selected=!0)}))})):"radio"==e.type&&t.sku_info.forEach((function(e){e.can_be_choose_2=0}))}))}))):(this.selectedRowKeys=[],this.sList.length&&("radio"==this.type?(this.sList.length>1&&(this.sList=[this.sList[0]]),this.selectedRowKeys=[this.sList[0].goods_id]):this.sList.forEach((function(t){e.selectedRowKeys.push(t.goods_id)}))),this.selectedRows=this.sList)},handleOk:function(){var e=this.selectedRowKeys,t=this.sList;if(this.isSku)if(t.length){var s=[],a=[];this.sList.forEach((function(e){a=[],e.sku_info&&e.sku_info.length&&e.sku_info.forEach((function(e){e.selected&&a.push(e)})),e.sku_info=a,a.length&&s.push(e)})),console.log("--------list",s),this.$emit("submit",{ids:"",goods:s}),this.handleCancel()}else this.$message.error("请选择商品");else t.length?(this.$emit("submit",{ids:e,goods:t}),this.handleCancel()):this.$message.error("请选择商品")},handleCancel:function(){this.dialogVisible=!1},onOpenChange:function(e){var t=this,s=e.find((function(e){return-1===t.openKeys.indexOf(e)}));-1===this.rootSubmenuKeys.indexOf(s)?this.openKeys=e:this.openKeys.push(s)},backToSort:function(){this.keywords="",this.getGoodsList()},onRowSelect:function(e,t,s){"radio"==this.type?(this.sList=[e],this.selectedRowKeys=[e.goods_id]):t?(this.sList.push(e),this.selectedRowKeys.push(e.goods_id)):(this.sList.remove(e),this.selectedRowKeys.remove(e.goods_id))},onSelectAll:function(e,t,s){var a=this;e?s.map((function(e){a.selectedRowKeys.push(e.goods_id),a.sList.push(e)})):s.map((function(e){a.sList.remove(e),a.selectedRowKeys.remove(e.goods_id)}))},isSkuGoods:function(){"periodic"==this.source||"reached"==this.source||"shipping"==this.source||"minus_discount"==this.source||"give"==this.source||"spec"==this.source||"prepare"==this.source||"group"==this.source||"limited"==this.source?this.isSku=!1:this.isSku=!0},onSkuGoodsSelect:function(e,t,s){var a=s.target.checked;if(console.log("------------this.sList",this.sList),a){var i=!1;this.sList.length&&this.sList.forEach((function(s){s.goods_id==t.goods_id&&(t.sku_info.forEach((function(t){t.sku_id==e&&(t.selected=!0)})),s.sku_info=t.sku_info,i=!0)})),i||(t.sku_info.forEach((function(t){t.sku_id==e&&(t.selected=!0)})),this.sList.push(t),"radio"==this.type&&1==this.sList.length&&(this.tableList.forEach((function(t){t.sku_info.forEach((function(t){t.can_be_choose_2=0,t.sku_id==e&&(t.can_be_choose_2=1)}))})),this.$set(this,"tableList",this.tableList)))}else{var l=!0;t.sku_info.forEach((function(t){t.sku_id==e&&(t.selected=!1),t.selected&&(l=!1)})),l&&(this.sList.remove(t),"radio"!=this.type||this.sList.length||(this.tableList.forEach((function(e){e.goods_id!=t.goods_id&&e.sku_info.forEach((function(e){e.can_be_choose_2=1}))})),this.$set(this,"tableList",this.tableList)))}this.$forceUpdate()},onRadioChange:function(e,t){console.log("----------------",t.target.value);var s=!1;this.sList.length&&this.sList.forEach((function(a){a.goods_id==e.goods_id&&(a.sku_info.forEach((function(e){e.sku_id==t.target.value?(console.log("----------------add sku_id ",e.sku_id),e.selected=!0):e.selected=!1})),s=!0)})),console.log("----------------add",s),s||(e.sku_info.forEach((function(e){e.sku_id==t.target.value?e.selected=!0:e.selected=!1})),this.sList.push(e))},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getGoodsList()}}};Array.prototype.remove=function(e){var t=this.indexOf(e),s=-1;t>-1?this.splice(t,1):(this.map((function(t,a){t.goods_id==e.goods_id&&(s=a)})),s>-1&&this.splice(s,1))};var r=n,c=(s("d2e1"),s("2877")),d=Object(c["a"])(r,a,i,!1,null,"35065123",null);t["default"]=d.exports},4031:function(e,t,s){"use strict";var a={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics",orderPrintTicket:"/mall/merchant.MallOrder/printOrder",getExpress:"/mall/merchant.MallOrder/getExpress",deliverGoodsByExpress:"/mall/merchant.MallOrder/deliverGoodsByExpress"};t["a"]=a},cdee:function(e,t,s){},d2e1:function(e,t,s){"use strict";s("cdee")}}]);