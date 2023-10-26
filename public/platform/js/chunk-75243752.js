(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75243752"],{"00bd":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10 mh-full"},[a("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[a("a-form-model-item",{attrs:{label:"活动名称"}},[a("a-input",{attrs:{placeholder:"请输入活动名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),a("a-form-model-item",{attrs:{label:"活动状态"}},[a("a-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择活动状态"},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},[a("a-select-option",{attrs:{value:3}},[e._v(" 全部活动 ")]),a("a-select-option",{attrs:{value:"0"}},[e._v(" 未开始 ")]),a("a-select-option",{attrs:{value:"1"}},[e._v(" 进行中 ")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" 已失效 ")])],1)],1),a("a-form-model-item",{attrs:{label:"活动时间"}},[a("a-range-picker",{attrs:{ranges:{"今日":[e.moment(),e.moment()],"近7天":[e.moment(),e.moment().add(7,"days")],"近15天":[e.moment(),e.moment().add(15,"days")],"近30天":[e.moment(),e.moment().add(30,"days")]},value:e.searchForm.time,format:"YYYY-MM-DD",getCalendarContainer:function(e){return e.parentNode}},on:{change:e.onDateRangeChange}})],1)],1),a("div",{staticClass:"mt-20"},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.createActivity()}}},[e._v(" 新建活动 ")]),a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v(" 查询 ")]),a("a-button",{staticClass:"ml-20",on:{click:function(t){return e.resetForm()}}},[e._v(" 重置 ")])],1),a("a-table",{staticClass:"mt-20",attrs:{rowKey:"id",columns:e.columns,"data-source":e.dataList,pagination:e.pagination},scopedSlots:e._u([{key:"level_detail_desc",fn:function(t,l){return a("span",{},[a("a-popover",{attrs:{placement:"topLeft"}},[a("template",{slot:"content"},[a("div",{staticClass:"level-detail"},e._l(l.level_detail,(function(t,o){return a("div",{key:t.level_sort},[a("p",{staticClass:"fw-bold"},[a("a-badge",{attrs:{status:"success"}}),e._v(e._s("满 "+t.level_money+(1==l.full_type?"元":"件")+" 赠")+" ")],1),e._l(t.goods,(function(t){return a("p",{key:t.sku_id,staticClass:"pl-10 pr-10"},[a("span",[e._v(e._s(t.name))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.sku_str,expression:"itemSub.sku_str"}],staticClass:"ml-10"},[e._v(e._s(t.sku_str))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.gift_num,expression:"itemSub.gift_num"}],staticClass:"ml-10"},[e._v("x"+e._s(t.gift_num))])])})),a("a-divider",{directives:[{name:"show",rawName:"v-show",value:o!=l.level_detail.length-1,expression:"index != record.level_detail.length - 1"}]})],2)})),0)]),a("span",[e._v(e._s(t))])],2)],1)}},{key:"activityTime",fn:function(t,l){return a("span",{},[e._v(" "+e._s(t)+" ~ "+e._s(l.end_time)+" ")])}},{key:"status",fn:function(t){return a("span",{},[1==t?a("a-badge",{attrs:{status:"success",text:"进行中"}}):e._e(),2==t?a("a-badge",{attrs:{status:"default",text:"已失效"}}):e._e(),0==t?a("a-badge",{attrs:{status:"warning",text:"未开始"}}):e._e()],1)}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{staticClass:"inline-block",on:{click:function(a){return e.editActivity(t,l.status)}}},[e._v(e._s(2!=l.status?"编辑":"查看"))]),2!=l.status?a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return e.changeActivityState(t)}}},[e._v("失效")]):e._e(),2==l.status?a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return e.removeActivity(t,l.status)}}},[e._v("删除")]):e._e()])}}])},[a("span",{attrs:{slot:"payPeopleTitle"},slot:"payPeopleTitle"},[e._v(" 支付人数 "),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v("该活动支付人数，若一个用户支付多次，支付人数依然算作一次 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),a("span",{attrs:{slot:"payNumTitle"},slot:"payNumTitle"},[e._v(" 支付单数 "),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v("该活动支付单数，若一个用户支付多次，支付人数依然算多次 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1)])],1)},o=[],i=a("5530"),r=(a("d3b7"),a("159b"),a("b0c0"),a("99af"),a("c1df")),s=a.n(r),n=a("4031"),m={name:"GiveList",data:function(){return{store_id:"",searchForm:{name:"",time:[],start_time:"",end_time:"",status:3},pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 个活动")}},columns:[{title:"活动名称",dataIndex:"name",key:"name"},{title:"活动时间",dataIndex:"start_time",key:"start_time",scopedSlots:{customRender:"activityTime"}},{title:"活动详情",dataIndex:"level_detail_desc",key:"level_detail_desc",scopedSlots:{customRender:"level_detail_desc"},ellipsis:!0},{dataIndex:"pay_order_people",key:"pay_order_people",slots:{title:"payPeopleTitle"},width:"120px"},{dataIndex:"pay_order_num",key:"pay_order_num",slots:{title:"payNumTitle"},width:"120px"},{title:"实收金额",dataIndex:"real_income",key:"real_income"},{title:"活动状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"},width:"120px"},{title:"操作",dataIndex:"id",key:"id",scopedSlots:{customRender:"action"}}],dataList:[{id:1,name:"满赠活动",start_time:"2020-11-11 00:00:00",end_time:"2020-11-11 23:59:59",pay_order_people:10,pay_order_num:10,real_income:100,status:2,level_detail:[{id:1,level_sort:1,level_money:"50.00",googs:[{goods_id:1,name:"华为P40"}]},{id:2,level_sort:2,level_money:"100.00",googs:[{goods_id:1,name:"华为P40"}]},{id:3,level_sort:3,level_money:"150.00",googs:[{goods_id:1,name:"华为P40"}]},{id:4,level_sort:4,level_money:"200.00",googs:[{goods_id:1,name:"华为P40"}]},{id:5,level_sort:5,level_money:"250.00",googs:[{goods_id:1,name:"华为P40"}]}]}]}},watch:{"$route.query.store_id":function(e){console.log(this.$route.path),"/merchant/merchant.mall/giveList"==this.$route.path&&e&&(this.store_id=e,this.getDataList({store_id:e}))}},created:function(){this.store_id=this.$route.query.store_id,this.getDataList({store_id:this.store_id})},activated:function(){var e=sessionStorage.getItem("giveEdit")||"";e&&1==e&&(this.store_id=this.$route.query.store_id,this.getDataList({store_id:this.store_id}),sessionStorage.removeItem("giveEdit"))},methods:{moment:s.a,getDataList:function(e){var t=this;this.request(n["a"].getGiveList,e).then((function(e){e.list.length&&(t.$set(t.pagination,"total",e.count),e.list.forEach((function(e){if(e.level_detail_desc="",e.level_detail&&e.level_detail.length&&e.level_detail[0].goods&&e.level_detail[0].goods.length){var t=e.level_detail[0].level_money||"",a=e.level_detail[0].goods[0]||"",l=a.name,o=void 0===l?"":l,i=a.gift_num,r=void 0===i?0:i,s=1==e.full_type?"元":"件";t&&o&&r&&(e.level_detail_desc="满 ".concat(t).concat(s," 赠").concat(o,"  数量x").concat(r))}}))),t.dataList=e.list||[]}))},onDateRangeChange:function(e,t){this.$set(this.searchForm,"time",[e[0],e[1]]),this.$set(this.searchForm,"start_time",t[0]),this.$set(this.searchForm,"end_time",t[1])},submitForm:function(){var e=Object(i["a"])({store_id:this.store_id},this.searchForm);delete e.time,console.log(e),this.getDataList(e)},resetForm:function(){this.searchForm=this.$options.data().searchForm,this.getDataList({store_id:this.store_id})},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},createActivity:function(){this.$router.push({path:"/merchant/merchant.mall/EditGive",query:{store_id:this.store_id}})},editActivity:function(e,t){2==t?this.$router.push({path:"/merchant/merchant.mall/EditGiveLook",query:{store_id:this.store_id,id:e}}):this.$router.push({path:"/merchant/merchant.mall/EditGive",query:{store_id:this.store_id,id:e}})},changeActivityState:function(e){var t=this;this.$confirm({title:"是否将活动失效，失效的活动将无法恢复！",centered:!0,onOk:function(){t.request(n["a"].giveChangeState,{id:e}).then((function(e){t.$message.success("操作成功！"),t.submitForm()}))},onCancel:function(){}})},removeActivity:function(e,t){var a=this;this.$confirm({title:"是否确定删除该活动?",centered:!0,onOk:function(){var t={id:e,is_del:1};a.request(n["a"].giveDel,t).then((function(e){a.$message.success("操作成功！"),a.submitForm()}))},onCancel:function(){}})}}},c=m,d=(a("d4b19"),a("2877")),h=Object(d["a"])(c,l,o,!1,null,"10da7957",null);t["default"]=h.exports},4031:function(e,t,a){"use strict";var l={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics",orderPrintTicket:"/mall/merchant.MallOrder/printOrder",getExpress:"/mall/merchant.MallOrder/getExpress",deliverGoodsByExpress:"/mall/merchant.MallOrder/deliverGoodsByExpress"};t["a"]=l},4789:function(e,t,a){},d4b19:function(e,t,a){"use strict";a("4789")}}]);