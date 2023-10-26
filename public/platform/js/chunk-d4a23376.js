(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4a23376"],{3870:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-form-model",{attrs:{layout:"inline",model:t.searchForm}},[a("a-form-model-item",{attrs:{label:"商品名称"}},[a("a-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),a("a-form-model-item",{attrs:{label:"活动状态"}},[a("a-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择活动状态"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[a("a-select-option",{attrs:{value:3}},[t._v(" 全部活动 ")]),a("a-select-option",{attrs:{value:"0"}},[t._v(" 未开始 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 进行中 ")]),a("a-select-option",{attrs:{value:"2"}},[t._v(" 已失效 ")])],1)],1),a("a-form-model-item",{attrs:{label:"活动时间"}},[a("a-range-picker",{attrs:{ranges:{"今日":[t.moment(),t.moment()],"近7天":[t.moment(),t.moment().add(7,"days")],"近15天":[t.moment(),t.moment().add(15,"days")],"近30天":[t.moment(),t.moment().add(30,"days")]},value:t.searchForm.time,format:"YYYY-MM-DD",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateRangeChange}})],1)],1),a("div",{staticClass:"mt-20"},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.createActivity()}}},[t._v(" 新建活动 ")]),a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v(" 查询 ")]),a("a-button",{staticClass:"ml-20",on:{click:function(e){return t.resetForm()}}},[t._v(" 重置 ")])],1),a("a-table",{staticClass:"mt-20",attrs:{rowKey:"id",columns:t.columns,"data-source":t.dataList,pagination:t.pagination},scopedSlots:t._u([{key:"goods_name",fn:function(e,l){return a("span",{staticClass:"flex align-center"},[a("a-avatar",{attrs:{shape:"square",size:"large",src:l.goods_image}}),a("span",{staticClass:"ml-10"},[t._v(t._s(e))])],1)}},{key:"activityTime",fn:function(e,l){return a("span",{},[t._v(" "+t._s(e)+" ~ "+t._s(l.end_time)+" ")])}},{key:"qrcode",fn:function(e){return a("span",{},[a("a-popover",{attrs:{trigger:"click"}},[a("img",{attrs:{slot:"content",src:e,alt:"二维码"},slot:"content"}),a("a-button",{attrs:{type:"link"}},[t._v("二维码")])],1)],1)}},{key:"status",fn:function(e){return a("span",{},[1==e?a("a-badge",{attrs:{status:"success",text:"进行中"}}):t._e(),2==e?a("a-badge",{attrs:{status:"default",text:"已失效"}}):t._e(),0==e?a("a-badge",{attrs:{status:"warning",text:"未开始"}}):t._e()],1)}},{key:"action",fn:function(e,l){return a("span",{},[a("a",{staticClass:"inline-block",on:{click:function(a){return t.editActivity(e,l.status)}}},[t._v(t._s(2==l.status?"查看":"编辑"))]),2!=l.status?a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return t.changeActivityState(e)}}},[t._v("失效")]):t._e(),2==l.status?a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return t.removeActivity(e)}}},[t._v("删除")]):t._e()])}}])})],1)},r=[],o=a("5530"),i=a("c1df"),n=a.n(i),s=a("4031"),m={name:"GroupList",data:function(){return{store_id:"",searchForm:{name:"",time:[],start_time:"",end_time:"",status:3},columns:[{title:"商品信息",dataIndex:"goods_name",key:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:"活动时间",dataIndex:"start_time",key:"start_time",scopedSlots:{customRender:"activityTime"}},{title:"二维码",dataIndex:"qrcode",key:"qrcode",scopedSlots:{customRender:"qrcode"}},{title:"成团人数",dataIndex:"complete_num",key:"complete_num"},{title:"支付单数",dataIndex:"pay_num",key:"pay_num"},{title:"实付金额",dataIndex:"real_income",key:"real_income"},{title:"活动状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"id",key:"id",scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},watch:{"$route.query.store_id":function(t){console.log(this.$route.path),"/merchant/merchant.mall/groupList"==this.$route.path&&t&&(this.store_id=t,this.getDataList({store_id:t}))}},created:function(){this.store_id=this.$route.query.store_id,this.getDataList({store_id:this.store_id})},activated:function(){var t=sessionStorage.getItem("groupEdit")||"";t&&1==t&&(this.store_id=this.$route.query.store_id,this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.$set(this.pagination,"total",0),this.getDataList({store_id:this.store_id}),sessionStorage.removeItem("groupEdit"))},methods:{moment:n.a,getDataList:function(t){var e=this;for(var a in this.searchForm)"time"!=a&&(t[a]=this.searchForm[a]);t.page=this.pagination.current,t.pageSize=this.pagination.pageSize,this.request(s["a"].getGroupList,t).then((function(t){e.dataList=t.list,e.$set(e.pagination,"total",t.count)}))},onDateRangeChange:function(t,e){this.$set(this.searchForm,"time",[t[0],t[1]]),this.$set(this.searchForm,"start_time",e[0]),this.$set(this.searchForm,"end_time",e[1])},submitForm:function(){var t=Object(o["a"])({store_id:this.store_id},this.searchForm);delete t.time,this.getDataList(t)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{name:"",start_time:"",end_time:"",status:3,time:[]}),this.$set(this.pagination,"current",1),this.getDataList({store_id:this.store_id})},createActivity:function(){this.$router.push({path:"/merchant/merchant.mall/editGroup",query:{store_id:this.store_id}})},editActivity:function(t,e){2==e?this.$router.push({path:"/merchant/merchant.mall/editGroupLook",query:{store_id:this.store_id,id:t}}):this.$router.push({path:"/merchant/merchant.mall/editGroup",query:{store_id:this.store_id,id:t}})},changeActivityState:function(t){var e=this;this.$confirm({title:"是否将活动失效，失效的活动将无法恢复！",centered:!0,onOk:function(){e.request(s["a"].groupChangeState,{id:t}).then((function(t){e.$message.success("操作成功！"),e.submitForm()}))},onCancel:function(){}})},removeActivity:function(t){var e=this;this.$confirm({title:"是否确定删除该活动?",centered:!0,onOk:function(){e.request(s["a"].groupDel,{id:t}).then((function(t){e.$message.success("操作成功！"),e.submitForm()}))},onCancel:function(){}})}}},c=m,d=a("2877"),h=Object(d["a"])(c,l,r,!1,null,"fa7e9d58",null);e["default"]=h.exports},4031:function(t,e,a){"use strict";var l={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics",orderPrintTicket:"/mall/merchant.MallOrder/printOrder",getExpress:"/mall/merchant.MallOrder/getExpress",deliverGoodsByExpress:"/mall/merchant.MallOrder/deliverGoodsByExpress"};e["a"]=l}}]);