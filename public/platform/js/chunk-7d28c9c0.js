(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d28c9c0"],{"0696":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("div",{staticClass:"mt-20"},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){e.visibleAddRobot=!0}}},[e._v(" 添加机器人 ")])],1),a("a-table",{staticClass:"mt-20",attrs:{rowKey:"id",columns:e.columns,"data-source":e.dataList,pagination:!1,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},scopedSlots:e._u([{key:"avatar",fn:function(e){return a("span",{},[a("a-avatar",{attrs:{shape:"square",size:"large",src:e}})],1)}},{key:"add_time",fn:function(t){return a("span",{},[e._v(" "+e._s(e.moment(t).format("YYYY-MM-DD hh:mm:ss"))+" ")])}},{key:"action",fn:function(t){return a("span",{},[a("a",{staticClass:"inline-block",on:{click:function(a){return e.removeOpt(t)}}},[e._v("删除")])])}}])}),a("a-row",{staticClass:"mt-20",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("a-col",{staticClass:"ml-20",attrs:{span:4}},[a("a-checkbox",{attrs:{checked:!(e.selectedRowKeys.length!=e.dataList.length||!e.dataList.length),disabled:!e.dataList.length},on:{change:e.allCheck}},[e._v("当页全选")]),a("span",[e._v("已选机器人 "+e._s(e.selectedRowKeys.length))]),a("a-button",{staticClass:"ml-10",attrs:{size:"small"},on:{click:function(t){return e.removeOpt()}}},[e._v(" 删除 ")])],1),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:18}},[a("a-pagination",{attrs:{total:e.total,"show-size-changer":"","show-quick-jumper":"","show-total":function(e){return"共 "+e+" 条记录"}},on:{change:e.onPageChange,showSizeChange:e.onPageSizeChange}})],1)],1),a("a-modal",{attrs:{title:"添加机器人",centered:"",maskClosable:!1},on:{ok:function(t){e.visibleAddRobot=!1},cancel:e.addRobotCancel},model:{value:e.visibleAddRobot,callback:function(t){e.visibleAddRobot=t},expression:"visibleAddRobot"}},[a("a-form-model",e._b({attrs:{model:e.formData}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[a("a-form-model-item",{attrs:{label:"机器人名称"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{span:20}},[a("a-input",{attrs:{placeholder:"请输入机器人名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("a-col",{attrs:{span:4}},[a("a-button",{on:{click:e.getRobotName}},[e._v(" 随机名称 ")])],1)],1)],1),a("a-form-model-item",{attrs:{label:"上传图片"}},[a("a-upload",{staticClass:"avatar-uploader",attrs:{name:"reply_pic","list-type":"picture-card",data:{upload_dir:"robot"},"show-upload-list":!1,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange}},[e.avatar?a("img",{staticStyle:{width:"340px",height:"340px"},attrs:{src:e.avatar,alt:"avatar"}}):a("div",[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("上传")])],1)]),a("p",[e._v("建议上传 40 *40 ")])],1)],1),a("template",{slot:"footer"},[a("div",{staticStyle:{"text-align":"center"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.addRobot}},[e._v(" 保存 ")])],1)])],2)],1)},o=[],r=(a("d81d"),a("a15b"),a("b0c0"),a("c1df")),n=a.n(r),i=a("4031");function s(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}var m={name:"RobotList",data:function(){return{visibleAddRobot:!1,loading:!1,formData:{name:"",avatar:""},avatar:"",selectedRowKeys:[],total:0,page:1,pageSize:10,columns:[{title:"机器人信息",dataIndex:"robot_name",key:"robot_name"},{title:"机器人头像",dataIndex:"avatar",key:"avatar",scopedSlots:{customRender:"avatar"}},{title:"添加时间",dataIndex:"add_time",key:"add_time",scopedSlots:{customRender:"add_time"}},{title:"操作",dataIndex:"id",key:"id",scopedSlots:{customRender:"action"}}],dataList:[]}},created:function(){this.getDataList()},methods:{moment:n.a,getDataList:function(){var e=this,t={page:this.page,pageSize:this.pageSize};this.request(i["a"].getRobotList,t).then((function(t){e.dataList=t.list,e.total=t.total}))},onPageChange:function(e,t){this.page=e,this.getDataList()},onPageSizeChange:function(e,t){this.pageSize=t,this.getDataList()},onSelectChange:function(e){console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e},allCheck:function(e){console.log(e,"e"),e.target.checked?this.selectedRowKeys=this.dataList.map((function(e){return e.id})):this.selectedRowKeys=[]},removeOpt:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a="是否确定删除该机器人?";if(t||(t=this.selectedRowKeys.length?this.selectedRowKeys.join(","):"",a="是否确定删除所选机器人"),t||!this.dataList.length){if(this.dataList.length){var l={ids:t};this.$confirm({title:a,centered:!0,onOk:function(){e.request(i["a"].delRobot,l).then((function(t){e.$message.success("操作成功！"),e.getDataList(),e.selectedRowKeys=[]}))},onCancel:function(){}})}}else this.$message.error("请选择需要删除的机器人")},getRobotName:function(){var e=this;this.request(i["a"].getRobotName).then((function(t){e.$set(e.formData,"name",t.name)}))},handleUploadChange:function(e){var t=this;if(console.log("上传图片-info",e),"uploading"!==e.file.status){if("done"===e.file.status&&"1000"==e.file.response.status){var a=e.file.response.data;this.$set(this.formData,"avatar",a),s(e.file.originFileObj,(function(e){t.avatar=e,t.loading=!1}))}}else this.loading=!0},addRobot:function(){var e=this;this.request(i["a"].addRobot,this.formData).then((function(t){e.visibleAddRobot=!1,e.formData=e.$options.data().formData,e.avatar="",e.getDataList()}))},addRobotCancel:function(){this.formData=this.$options.data().formData,this.avatar=""}}},c=m,d=a("2877"),h=Object(d["a"])(c,l,o,!1,null,"44649380",null);t["default"]=h.exports},4031:function(e,t,a){"use strict";var l={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics",orderPrintTicket:"/mall/merchant.MallOrder/printOrder",getExpress:"/mall/merchant.MallOrder/getExpress",deliverGoodsByExpress:"/mall/merchant.MallOrder/deliverGoodsByExpress"};t["a"]=l}}]);