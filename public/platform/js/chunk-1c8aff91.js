(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c8aff91"],{"4b77":function(t,o,e){"use strict";var a,n=e("ade3"),r=(a={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(n["a"])(a,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(n["a"])(a,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(n["a"])(a,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(n["a"])(a,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(n["a"])(a,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(n["a"])(a,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(n["a"])(a,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(n["a"])(a,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(n["a"])(a,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(n["a"])(a,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(n["a"])(a,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(n["a"])(a,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(n["a"])(a,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(n["a"])(a,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(n["a"])(a,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(n["a"])(a,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(n["a"])(a,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(n["a"])(a,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(n["a"])(a,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(n["a"])(a,"noteInfo","/group/merchant.goods/noteInfo"),Object(n["a"])(a,"orderDetail","/group/merchant.goods/orderDetail"),Object(n["a"])(a,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(n["a"])(a,"getRatioList","/group/merchant.goods/getRatioList"),Object(n["a"])(a,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(n["a"])(a,"couponDetail","/group/merchant.goods/couponDetail"),Object(n["a"])(a,"couponVerify","/group/merchant.goods/couponVerify"),Object(n["a"])(a,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(n["a"])(a,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(n["a"])(a,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(n["a"])(a,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(n["a"])(a,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(n["a"])(a,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),a);o["a"]=r},a1a7:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("a-table",{attrs:{rowKey:"group_id",pagination:t.pagination,columns:t.bindGroupColumns,"data-source":t.bindGroupLists},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"status_str",fn:function(t,o){return e("span",{},[e("a-badge",{attrs:{status:1==o.status?"success":"default",text:t}})],1)}},{key:"is_running_str",fn:function(t,o){return e("span",{},[e("a-badge",{attrs:{status:1==o.is_running?"success":"default",text:t}})],1)}},{key:"action",fn:function(o){return e("span",{},[e("a-popconfirm",{attrs:{title:"确定删除，无法恢复?"},on:{confirm:function(){return t.removeBind(o)}}},[e("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)}}])})},n=[],r=(e("a9e3"),e("4b77")),s=[{title:"ID",dataIndex:"group_id"},{title:"名称",dataIndex:"s_name"},{title:"价格",dataIndex:"price"},{title:"运行状态",dataIndex:"is_running_str",scopedSlots:{customRender:"is_running_str"}},{title:"团购状态",dataIndex:"status_str",scopedSlots:{customRender:"status_str"}},{title:"操作",dataIndex:"group_id",scopedSlots:{customRender:"action"}}],i={name:"BindGroupLists",props:{packageid:{type:[String,Number],default:"0"}},mounted:function(){console.log("mounted bind-group-lists"),this.getBindGroup()},data:function(){return{bindGroupColumns:s,dialogVisible:!0,bindGroupLists:[],pagination:{current:1,pageSize:10,total:0}}},methods:{getBindGroup:function(){var t=this;this.request(r["a"].getGoodsList,{packageid:this.packageid,page:this.pagination.current,page_size:this.pagination.pageSize}).then((function(o){t.bindGroupLists=o.list,t.pagination.total=o.total}))},handleTableChange:function(t){this.$set(this.pagination,"current",t.current),this.getBindGroup()},removeBind:function(t){var o=this;this.request(r["a"].delPackageBindGroup,{packageid:this.packageid,group_id:t}).then((function(t){o.$message.success("删除成功！"),o.getBindGroup()}))}}},g=i,p=e("2877"),c=Object(p["a"])(g,a,n,!1,null,null,null);o["default"]=c.exports}}]);