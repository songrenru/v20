(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7b92898","chunk-1c8aff91"],{"2cdd":function(t,e,o){},"4b77":function(t,e,o){"use strict";var a,i=o("ade3"),n=(a={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(i["a"])(a,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(i["a"])(a,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(i["a"])(a,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(i["a"])(a,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(i["a"])(a,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(i["a"])(a,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(i["a"])(a,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(i["a"])(a,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(i["a"])(a,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(i["a"])(a,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(i["a"])(a,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(i["a"])(a,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(i["a"])(a,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(i["a"])(a,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(i["a"])(a,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(i["a"])(a,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(i["a"])(a,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(i["a"])(a,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(i["a"])(a,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(i["a"])(a,"noteInfo","/group/merchant.goods/noteInfo"),Object(i["a"])(a,"orderDetail","/group/merchant.goods/orderDetail"),Object(i["a"])(a,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(i["a"])(a,"getRatioList","/group/merchant.goods/getRatioList"),Object(i["a"])(a,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(i["a"])(a,"couponDetail","/group/merchant.goods/couponDetail"),Object(i["a"])(a,"couponVerify","/group/merchant.goods/couponVerify"),Object(i["a"])(a,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(i["a"])(a,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(i["a"])(a,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(i["a"])(a,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(i["a"])(a,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(i["a"])(a,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),a);e["a"]=n},a1a7:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-table",{attrs:{rowKey:"group_id",pagination:t.pagination,columns:t.bindGroupColumns,"data-source":t.bindGroupLists},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"status_str",fn:function(t,e){return o("span",{},[o("a-badge",{attrs:{status:1==e.status?"success":"default",text:t}})],1)}},{key:"is_running_str",fn:function(t,e){return o("span",{},[o("a-badge",{attrs:{status:1==e.is_running?"success":"default",text:t}})],1)}},{key:"action",fn:function(e){return o("span",{},[o("a-popconfirm",{attrs:{title:"确定删除，无法恢复?"},on:{confirm:function(){return t.removeBind(e)}}},[o("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)}}])})},i=[],n=(o("a9e3"),o("4b77")),s=[{title:"ID",dataIndex:"group_id"},{title:"名称",dataIndex:"s_name"},{title:"价格",dataIndex:"price"},{title:"运行状态",dataIndex:"is_running_str",scopedSlots:{customRender:"is_running_str"}},{title:"团购状态",dataIndex:"status_str",scopedSlots:{customRender:"status_str"}},{title:"操作",dataIndex:"group_id",scopedSlots:{customRender:"action"}}],r={name:"BindGroupLists",props:{packageid:{type:[String,Number],default:"0"}},mounted:function(){console.log("mounted bind-group-lists"),this.getBindGroup()},data:function(){return{bindGroupColumns:s,dialogVisible:!0,bindGroupLists:[],pagination:{current:1,pageSize:10,total:0}}},methods:{getBindGroup:function(){var t=this;this.request(n["a"].getGoodsList,{packageid:this.packageid,page:this.pagination.current,page_size:this.pagination.pageSize}).then((function(e){t.bindGroupLists=e.list,t.pagination.total=e.total}))},handleTableChange:function(t){this.$set(this.pagination,"current",t.current),this.getBindGroup()},removeBind:function(t){var e=this;this.request(n["a"].delPackageBindGroup,{packageid:this.packageid,group_id:t}).then((function(t){e.$message.success("删除成功！"),e.getBindGroup()}))}}},c=r,d=o("2877"),u=Object(d["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},b374:function(t,e,o){"use strict";o("2cdd")},bd7e:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"package-list"},[o("a-card",{staticClass:"content",attrs:{bordered:!1}},[o("div",{staticClass:"oprate"},[o("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.editPackage()}}},[t._v(" 新建 ")]),o("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",icon:"close"},on:{click:function(e){return t.removePackage()}}},[t._v(" 删除 ")])],1),o("div",{staticClass:"title-con"},[o("div",{staticClass:"desc"},[t._v("在这里建立一个套餐标识，然后将某几个团购加入到同一个套餐里标示里，他们就属于一个套餐了")])]),o("a-table",{attrs:{rowKey:"id",pagination:t.pagination,columns:t.columns,"data-source":t.packageList,"row-selection":t.rowSelection},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"show_bind_group",fn:function(e){return o("span",{},[o("a",{on:{click:function(o){return t.showBindGroup(e)}}},[t._v("查看")])])}},{key:"action",fn:function(e){return o("span",{},[o("a",{on:{click:function(o){return t.editPackage(e)}}},[t._v("编辑")]),o("a-divider",{attrs:{type:"vertical"}}),o("a",{on:{click:function(o){return t.removePackage(e)}}},[t._v("删除")])],1)}}])})],1),o("a-modal",{attrs:{title:t.title,width:565,visible:t.visible,confirmLoading:t.confirmLoading},on:{cancel:function(e){return t.closeModal()},ok:t.handleSubmit}},[o("a-spin",{attrs:{spinning:t.confirmLoading}},[o("a-form",t._b({},"a-form",{labelCol:{span:6},wrapperCol:{span:14}},!1),[o("a-form-item",{attrs:{label:"套餐名称"}},[o("a-input",{attrs:{placeholder:"请输入套餐名称(必填)"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),o("a-form-item",{attrs:{label:"简短描述"}},[o("a-textarea",{attrs:{rows:5},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1)],1)],1),o("a-drawer",{attrs:{title:"已关联团购列表",width:"50%",visible:t.bindGroupVisible,"body-style":{paddingBottom:"80px"}},on:{close:t.notShowDetail}},[t.bindGroupVisible?o("bind-group-lists",{attrs:{packageid:t.packageid}}):t._e()],1)],1)},i=[],n=(o("a4d3"),o("e01a"),o("4b77")),s=o("a1a7"),r=[{dataIndex:"id",key:"id",title:"编号"},{dataIndex:"title",key:"title",title:"套餐名称"},{dataIndex:"description",key:"description",title:"简短描述"},{dataIndex:"id",key:"show_bind_group",title:"已关联团购",scopedSlots:{customRender:"show_bind_group"}},{dataIndex:"id",key:"action",title:"操作",scopedSlots:{customRender:"action"}}],c={name:"GroupPackageList",components:{BindGroupLists:s["default"]},data:function(){return{columns:r,packageList:[],pagination:{current:1,pageSize:10,total:0},selectedRowKeys:[],detail:{},visible:!1,confirmLoading:!1,title:"",formData:{id:0,title:"",description:""},bindGroupVisible:!1,packageid:0}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},activated:function(){this.getPackageList()},created:function(){this.getPackageList()},mounted:function(){},methods:{initFormData:function(){this.formData={id:0,title:"",description:""}},getPackageList:function(){var t=this;this.request(n["a"].groupPackageLists,{page:this.pagination.current,page_size:this.pagination.pageSize}).then((function(e){t.packageList=e.list,t.$set(t.pagination,"total",e.total)}))},handleTableChange:function(t){this.$set(this.pagination,"current",t.current),this.getPackageList()},handleRowSelectChange:function(t){this.selectedRowKeys=t},editPackage:function(t){var e=this;this.initFormData(),t>0?(this.title="编辑套餐",this.request(n["a"].showGroupPackage,{id:t}).then((function(t){e.formData.title=t.title,e.formData.description=t.description,e.formData.id=t.id,e.visible=!0}))):(this.title="新建套餐",this.visible=!0)},closeModal:function(){this.visible=!1},handleSubmit:function(t){var e=this;t.preventDefault(),this.formData.title?this.request(n["a"].saveGroupPackage,this.formData).then((function(t){e.getPackageList(),e.visible=!1,e.formData.id=""})):this.$message.warning("请输入套餐名称")},removePackage:function(t){var e=this,o=[];if(o=t?[t]:this.selectedRowKeys,o.length){var a=this.$confirm({title:"删除后绑定该套餐的团购商品则自动解绑，确定是否要删除?",centered:!0,onOk:function(){e.request(n["a"].delGroupPackage,{ids:o}).then((function(t){e.$message.success("删除成功！"),e.getPackageList(),a.destroy()}))}});console.log(o)}else this.$message.warning("请先选择要删除的套餐~")},showBindGroup:function(t){this.bindGroupVisible=!0,console.log("id ==== ",t),this.packageid=t},notShowDetail:function(){this.bindGroupVisible=!1,this.getPackageList()}}},d=c,u=(o("b374"),o("2877")),g=Object(u["a"])(d,a,i,!1,null,"6d5954bd",null);e["default"]=g.exports}}]);