(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76d8b238"],{"075a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[a("a-layout-content",{style:{margin:"0px",padding:"0px",background:"#fff",minHeight:"100px"}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"user_name",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"phone",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"appoint_content",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"appoint_time",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"arrive_time",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"store_name",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"status",fn:function(e){return a("span",{},[0==e?a("span",{staticClass:"height-30"},[t._v(" 待处理 ")]):t._e(),1==e?a("span",{staticClass:"height-30"},[t._v(" 约来店 ")]):t._e(),2==e?a("span",{staticClass:"height-30"},[t._v(" 已到店 ")]):t._e(),3==e?a("span",{staticClass:"height-30"},[t._v(" 关闭 ")]):t._e()])}},{key:"action",fn:function(e,n){return a("span",{},[0==n.status?a("div",[a("a-row",[a("a-col",{attrs:{span:8}},[a("a",{staticClass:"label-sm green",on:{click:function(e){return t.editStatus(n.id,1)}}},[t._v(" 约来店")])]),a("a-col",{attrs:{span:8}},[a("a",{staticClass:"label-sm yellow",on:{click:function(e){return t.editStatus(n.id,2)}}},[t._v(" 已到店")])]),a("a-col",{attrs:{span:8}},[a("a",{staticClass:"label-sm blue",on:{click:function(e){return t.editStatus(n.id,3)}}},[t._v(" 关闭")])])],1)],1):t._e(),1==n.status?a("div",[a("a-row",[a("a-col",{attrs:{span:8}},[a("a",{staticClass:"label-sm yellow",on:{click:function(e){return t.editStatus(n.id,2)}}},[t._v(" 已到店")])]),a("a-col",{attrs:{span:8}},[a("a",{staticClass:"label-sm blue",on:{click:function(e){return t.editStatus(n.id,3)}}},[t._v(" 关闭")])])],1)],1):t._e()])}},{key:"title",fn:function(e){return[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:8}}),a("a-col",{attrs:{span:3}},[a("a-form-item",[a("a-select",{staticStyle:{width:"150px"},attrs:{placeholder:"预约店铺"},on:{change:t.handleStoreChange}},t._l(t.store_list,(function(e){return a("a-select-option",{key:e.store_id,attrs:{value:e.store_id}},[t._v(t._s(e.name)+" ")])})),1)],1)],1),a("a-col",{attrs:{span:3}},[a("a-form-item",[a("a-select",{staticStyle:{width:"150px"},attrs:{placeholder:"状态"},on:{change:t.handleStatusChange}},t._l(t.status_list,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name)+" ")])})),1)],1)],1),a("a-col",{attrs:{span:3}},[a("a-form-item",[a("a-input",{attrs:{placeholder:"输入客户姓名/手机号"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)],1),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.appointFind()}}},[t._v(" 查询 ")])],1)],1)],1)]}}])})],1)],1)],1)},o=[],s=a("4b77"),i=a("290c"),r=a("da05"),c=[{title:"姓名",dataIndex:"user_name",scopedSlots:{customRender:"user_name"}},{title:"手机号",dataIndex:"phone",scopedSlots:{customRender:"phone"}},{title:"预约内容",dataIndex:"appoint_content",scopedSlots:{customRender:"appoint_content"}},{title:"预定时间",dataIndex:"appoint_time",scopedSlots:{customRender:"appoint_time"}},{title:"来店时间",dataIndex:"arrive_time",scopedSlots:{customRender:"arrive_time"}},{title:"预约店铺",dataIndex:"store_name",scopedSlots:{customRender:"store_name"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],p={name:"AppointArriveStoreList",components:{ACol:r["b"],ARow:i["a"]},activated:function(){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.$set(this.pagination,"total",0),this.getAppointList()},created:function(){this.getAppointList()},data:function(){var t=this;return{spinning:!1,columns:c,data:[],store_list:[],status_list:[{id:0,name:"待处理"},{id:1,name:"约来店"},{id:2,name:"已到店"},{id:3,name:"关闭"}],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:function(e,a){return t.onPageChange(e,a)},onShowSizeChange:function(e,a){return t.onPageSizeChange(e,a)},showTotal:function(t){return"共 ".concat(t," 个商品")}},formData:{store_id:"",status:"",phone:""}}},methods:{getAppointList:function(){var t=this;this.request(s["a"].getAppointArriveList,{}).then((function(e){t.data=e.list,t.store_list=e.store_list,t.$set(t.pagination,"total",e.count)}))},handleTableChange:function(t){t.current&&t.current>0&&this.getAppointList()},editStatus:function(t,e){var a=this;this.$confirm({title:"是否确定修改该状态?",centered:!0,onOk:function(){a.request(s["a"].updateAppointArriveStatus,{id:t,status:e}).then((function(t){a.getAppointList(),a.$message.success("操作成功！")}))},onCancel:function(){}})},handleStoreChange:function(t){this.formData.store_id=t},handleStatusChange:function(t){this.formData.status=t},appointFind:function(){var t=this;this.request(s["a"].getAppointArriveList,this.formData).then((function(e){t.data=e.list,t.store_list=e.store_list,t.$set(t.pagination,"total",e.count)}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getAppointList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.getAppointList()}}},u=p,d=(a("c055"),a("0c7c")),g=Object(d["a"])(u,n,o,!1,null,"204bd38a",null);e["default"]=g.exports},"4b77":function(t,e,a){"use strict";var n,o=a("ade3"),s=(n={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(o["a"])(n,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(o["a"])(n,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(o["a"])(n,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(o["a"])(n,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(o["a"])(n,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(o["a"])(n,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(o["a"])(n,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(o["a"])(n,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(o["a"])(n,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(o["a"])(n,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(o["a"])(n,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(o["a"])(n,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(o["a"])(n,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(o["a"])(n,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(o["a"])(n,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(o["a"])(n,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(o["a"])(n,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(o["a"])(n,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(o["a"])(n,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(o["a"])(n,"noteInfo","/group/merchant.goods/noteInfo"),Object(o["a"])(n,"orderDetail","/group/merchant.goods/orderDetail"),Object(o["a"])(n,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(o["a"])(n,"getRatioList","/group/merchant.goods/getRatioList"),n);e["a"]=s},c055:function(t,e,a){"use strict";a("f81e")},f81e:function(t,e,a){}}]);