(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d6d13c6","chunk-426f539e","chunk-067a3538","chunk-206ba885"],{"4b77":function(t,e,a){"use strict";var o,s=a("ade3"),i=(o={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(s["a"])(o,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(s["a"])(o,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(s["a"])(o,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(s["a"])(o,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(s["a"])(o,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(s["a"])(o,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(s["a"])(o,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(s["a"])(o,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(s["a"])(o,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(s["a"])(o,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(s["a"])(o,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(s["a"])(o,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(s["a"])(o,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(s["a"])(o,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(s["a"])(o,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(s["a"])(o,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(s["a"])(o,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(s["a"])(o,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(s["a"])(o,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(s["a"])(o,"noteInfo","/group/merchant.goods/noteInfo"),Object(s["a"])(o,"orderDetail","/group/merchant.goods/orderDetail"),Object(s["a"])(o,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(s["a"])(o,"getRatioList","/group/merchant.goods/getRatioList"),o);e["a"]=i},"4e5f":function(t,e,a){},"4fb0":function(t,e,a){},"555b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[[a("div",{staticClass:"mb-10"},[a("a-form",{attrs:{layout:"inline"}},[a("div",{staticClass:"flex search-content"},[a("div",{staticClass:"left"},[a("span",{staticClass:"goods-title"},[t._v("商品列表")]),a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addGoods()}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" 添加商品 ")],1)],1),a("div",{staticClass:"right flex"},[a("div",[a("a-form-item",{attrs:{label:"商品类型:"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"商品类型"},model:{value:t.queryParam.group_cate,callback:function(e){t.$set(t.queryParam,"group_cate",e)},expression:"queryParam.group_cate"}},[a("a-select-option",{attrs:{value:""}},[t._v("全部")]),a("a-select-option",{attrs:{value:"normal"}},[t._v("团购商品")]),a("a-select-option",{attrs:{value:"booking_appoint"}},[t._v("场次预约")]),a("a-select-option",{attrs:{value:"cashing"}},[t._v("代金券")]),a("a-select-option",{attrs:{value:"course_appoint"}},[t._v("课程预约")])],1)],1)],1),a("div",[a("a-form-item",{attrs:{label:"运行状态:"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"运行状态"},model:{value:t.queryParam.is_running,callback:function(e){t.$set(t.queryParam,"is_running",e)},expression:"queryParam.is_running"}},[a("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 进行中 ")]),a("a-select-option",{attrs:{value:"0"}},[t._v(" 已结束 ")])],1)],1)],1),a("div",[a("a-form-item",{attrs:{label:"团购状态:"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"团购状态"},model:{value:t.queryParam.status,callback:function(e){t.$set(t.queryParam,"status",e)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 开启 ")]),a("a-select-option",{attrs:{value:"0"}},[t._v(" 关闭 ")]),a("a-select-option",{attrs:{value:"2"}},[t._v(" 审核中 ")])],1)],1)],1),a("div",[a("a-form-item",[a("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"输入商品名称/标题"},model:{value:t.queryParam.keyword,callback:function(e){t.$set(t.queryParam,"keyword",e)},expression:"queryParam.keyword"}})],1)],1),a("div",[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchBtn()}}},[t._v(" 查询 ")])],1)])])])],1)],a("a-card",{staticClass:"card-wrap",attrs:{bordered:!1}},[a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,rowKey:"group_id",loading:t.loading},scopedSlots:t._u([{key:"status_str",fn:function(t,e){return a("span",{},[a("a-badge",{attrs:{status:1==e.status?"success":"default",text:t}})],1)}},{key:"is_running_str",fn:function(t,e){return a("span",{},[a("a-badge",{attrs:{status:1==e.is_running?"success":"default",text:t}})],1)}},{key:"begin_time",fn:function(e,o){return a("span",{},[a("div",[t._v("开始时间："+t._s(o.begin_time))]),a("div",[t._v("结束时间："+t._s(o.end_time))]),0==o.effective_type?a("div",[t._v("团购券有效期："+t._s(o.deadline_time))]):t._e(),0!=o.effective_type?a("div",[t._v("领取后"+t._s(o.deadline_time)+"天内有效")]):t._e()])}},{key:"sale_count",fn:function(e,o){return a("span",{},[a("div",[t._v("售出："+t._s(o.sale_count))]),a("div",[t._v("商品总数："+t._s(-1==o.count_num||0==o.count_num?"无限制":o.count_num))]),a("div",[t._v("虚拟："+t._s(o.virtual_num))])])}},{key:"detail_url",fn:function(e){return a("span",{},[""!==e?a("a",{staticClass:"ant-btn-link pointer",on:{click:function(a){return t.$refs.SeeH5QrcodeModal.showModal(e)}}},[t._v("查看二维码")]):a("a",{staticClass:"ant-btn-link pointer"},[t._v("无二维码")])])}},{key:"action",fn:function(e,o){return a("span",{},[a("a",{on:{click:function(e){return t.edit(o.group_cate,o.group_id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{attrs:{href:t.replyUrl+o.group_id,target:"_blank"}},[t._v("评论列表")]),a("a-divider",{attrs:{type:"vertical"}}),a("router-link",{attrs:{slot:"groupOrderList",to:{path:"/merchant/merchant.group/orderList"}},slot:"groupOrderList"},[a("a",[t._v("订单列表")])]),"normal"==o.group_cate?a("a-divider",{attrs:{type:"vertical"}}):t._e(),"normal"==o.group_cate?a("a",{staticClass:"ant-btn-link pointer",on:{click:function(e){return t.selectStore(o.group_id)}}},[t._v("设置推荐")]):t._e()],1)}}])})],1),a("select-group-cate",{ref:"selectGoupCate"}),a("see-h5-qrcode",{ref:"SeeH5QrcodeModal"}),a("choose-store-by-group",{attrs:{visible:t.selectStoreVisible,storeIdArr:t.storeIds,groupId:t.groupId},on:{"update:visible":function(e){t.selectStoreVisible=e},submit:t.onStoreSelect}})],1)],2)},s=[],i=a("5530"),r=(a("d81d"),a("4b77")),n=a("9c6d"),c=a("9e17"),d=a("721e"),l=[],u={name:"OrderList",components:{SelectGroupCate:n["default"],SeeH5Qrcode:d["default"],ChooseStoreByGroup:c["default"]},data:function(){return this.cacheData=l.map((function(t){return Object(i["a"])({},t)})),{form:this.$form.createForm(this),mdl:{},selectStoreVisible:!1,loading:!0,id:1,search_data:[],queryParam:{status:"-1",is_running:"-1",group_cate:""},pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},columns:[{title:"类型",width:90,dataIndex:"group_cate_name"},{title:"名称",width:120,dataIndex:"s_name"},{title:"价格",width:70,dataIndex:"price"},{title:"销售概况",width:150,dataIndex:"sale_count",scopedSlots:{customRender:"sale_count"}},{title:"时间",width:280,dataIndex:"begin_time",scopedSlots:{customRender:"begin_time"}},{title:"查看数",width:90,dataIndex:"hits"},{title:"评论数",width:90,dataIndex:"reply_count"},{title:"二维码",width:110,dataIndex:"detail_url",scopedSlots:{customRender:"detail_url"}},{title:"运行状态",width:100,dataIndex:"is_running_str",scopedSlots:{customRender:"is_running_str"}},{title:"团购状态",width:100,dataIndex:"status_str",scopedSlots:{customRender:"status_str"}},{title:"操作",dataIndex:"action",width:"250px",scopedSlots:{customRender:"action"}}],data:l,groupId:0,storeIds:[],replyUrl:"/merchant.php?c=Message&a=group_reply&group_id="}},watch:{$route:function(){this.queryParam={status:"-1",is_running:"-1",group_cate:"",keyword:""},this.initList()}},mounted:function(){this.initList()},methods:{searchBtn:function(){this.page=1,this.pagination.current=this.page,this.getGoodsList()},initList:function(){this.getGoodsList()},getGoodsList:function(){var t=this;this.queryParam["page"]=this.page,this.loading=!0,r["a"].getGoodsList&&this.request(r["a"].getGoodsList,this.queryParam).then((function(e){t.loading=!1,t.data=e.list,t.pagination.total=e.total}))},addGoods:function(){this.$refs.selectGoupCate.open()},edit:function(t,e){switch(t){case"normal":this.$router.push({path:"/merchant/merchant.group/goodsEdit",query:{group_id:e}});break;case"booking_appoint":this.$router.push({path:"/merchant/merchant.group/bookingAppoint",query:{group_id:e}});break;case"cashing":this.$router.push({path:"/merchant/merchant.group/goodsCashingEdit",query:{group_id:e}});break;case"course_appoint":this.$router.push({path:"/merchant/merchant.group/courseAppoint",query:{group_id:e}});break}},tableChange:function(t){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getGoodsList())},selectStore:function(t){this.groupId=t,this.getStoreRecommend(t)},onStoreSelect:function(t){this.selectStoreVisible=!1;var e=t.storeIds;this.setStoreRecommend(this.groupId,e),this.storeIds=e},setStoreRecommend:function(t,e){var a=this,o={group_id:t,store_id_arr:e};this.request(r["a"].setStoreRecommend,o).then((function(t){a.$message.success(a.L("设置成功"))}))},getStoreRecommend:function(t){var e=this,a={group_id:t};this.request(r["a"].getStoreRecommend,a).then((function(t){e.storeIds=t,e.selectStoreVisible=!0}))},onPageChange:function(t,e){this.page=t,this.$set(this.pagination,"current",t),this.getGoodsList()},onPageSizeChange:function(t,e){this.page=1,this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",e),this.$set(this.queryParam,"pageSize",e),this.queryParam["pageSize"]=e,this.getGoodsList()}}},h=u,p=(a("78a7"),a("0c7c")),g=Object(p["a"])(h,o,s,!1,null,"a0787cfa",null);e["default"]=g.exports},"721e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:350,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[a("div",{staticClass:"content"},[a("div",{staticClass:"code-box"},[a("div",{staticClass:"code"},[t.h5Qrcode?a("img",{attrs:{src:t.h5Qrcode}}):t._e()])])])])},s=[],i=(a("ea1d"),{components:{},data:function(){return{title:"查看网址二维码",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,image:"",visible:!1,h5Qrcode:""}},mounted:function(){},methods:{showModal:function(t){this.visible=!0,this.id=IDBCursor,this.qrcodeUrl=t,this.getH5Code()},getH5Code:function(){var t=encodeURIComponent(this.qrcodeUrl);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+t},handleCancel:function(){this.visible=!1}}}),r=i,n=(a("8dd0"),a("0c7c")),c=Object(n["a"])(r,o,s,!1,null,"7310db8a",null);e["default"]=c.exports},7709:function(t,e,a){"use strict";a("4e5f")},"78a7":function(t,e,a){"use strict";a("82d12")},"82d12":function(t,e,a){},"8dd0":function(t,e,a){"use strict";a("4fb0")},"9c6d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"添加商品-选择商品类型",visible:t.visible,width:600,footer:null},on:{cancel:t.handleCancel}},[a("div",{staticClass:"select-cate-content"},[a("a-card",{staticClass:"select-cate-item",on:{click:function(e){return t.goAdd("normal")}}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(" 团购商品 ")]),a("div",{staticClass:"description"},[t._v(" 可用于添加服务商品、次卡、实物商品 ")])]),a("div",{staticClass:"right icon"},[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])]),a("a-card",{staticClass:"select-cate-item",on:{click:function(e){return t.goAdd("booking_appoint")}}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(" 场次预约 ")]),a("div",{staticClass:"description"},[t._v(" 区分全天不同时段，也可每天一价 ")])]),a("div",{staticClass:"right icon"},[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])]),a("a-card",{staticClass:"select-cate-item",on:{click:function(e){return t.goAdd("cashing")}}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(" 代金券 ")]),a("div",{staticClass:"description"},[t._v(" 消费可抵扣现金，利用优惠吸引到店 ")])]),a("div",{staticClass:"right icon"},[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])]),a("a-card",{staticClass:"select-cate-item",on:{click:function(e){return t.goAdd("course_appoint")}}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(" 课程预约 ")]),a("div",{staticClass:"description"},[t._v(" 针对教育类商家展示本店可学课程 ")])]),a("div",{staticClass:"right icon"},[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"right-circle",theme:"twoTone"}})],1)])])],1)])},s=[],i={data:function(){return{visible:!1}},mounted:function(){},methods:{open:function(){this.visible=!0},goAdd:function(t){switch(t){case"normal":this.$router.push({path:"/merchant/merchant.group/goodsEdit"});break;case"booking_appoint":this.$router.push({path:"/merchant/merchant.group/bookingAppoint"});break;case"cashing":this.$router.push({path:"/merchant/merchant.group/goodsCashingEdit"});break;case"course_appoint":this.$router.push({path:"/merchant/merchant.group/courseAppoint"});break}this.visible=!1},handleCancel:function(){this.visible=!1}}},r=i,n=(a("7709"),a("0c7c")),c=Object(n["a"])(r,o,s,!1,null,"4a210db6",null);e["default"]=c.exports},"9e17":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-modal",{attrs:{visible:t.dialogVisible,title:"选择店铺",centered:"",maskClosable:!1,width:600},on:{ok:t.chooseStoreOk,cancel:t.chooseStoreCancel}},[[a("a-form-model",{attrs:{layout:"inline",model:t.modalSearchForm,"label-col":{span:2},"wrapper-col":{span:22}}},[a("a-row",[a("a-col",{staticClass:"mr-10",attrs:{span:10}},[a("a-cascader",{attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:t.areaList,placeholder:"请选择省市区"},on:{change:t.onAreaChange},model:{value:t.searchForm.areaList,callback:function(e){t.$set(t.searchForm,"areaList",e)},expression:"searchForm.areaList"}})],1),a("a-col",{staticClass:"mr-20",attrs:{span:10}},[a("a-input",{attrs:{placeholder:"输入店铺名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectStoreList()}},model:{value:t.modalSearchForm.keyword,callback:function(e){t.$set(t.modalSearchForm,"keyword",e)},expression:"modalSearchForm.keyword"}})],1),a("a-col",{attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.selectStoreList()}}},[t._v(" 查询 ")])],1)],1)],1),a("a-table",{staticClass:"mt-20",attrs:{"row-selection":{selectedRowKeys:t.modalSelectedRowKeys,onChange:t.onModalSelectChange},columns:t.columns,scroll:{y:400},"data-source":t.modalTableData,"row-key":"store_id"}},[a("template",{slot:"name"},[a("span",[t._v("店铺名称")])])],2)]],2)],1)},s=[],i=(a("a9e3"),a("c740"),a("d3b7"),a("159b"),a("4b77")),r={props:{visible:{type:Boolean,default:!1},storeIdArr:{type:[Array,Object],default:function(){}},groupId:{type:Number,default:0}},watch:{visible:function(t,e){this.dialogVisible=t,this.modalSearchForm.group_id=this.groupId,this.modalSelectedRowKeys=this.storeIdArr,this.storeIds=this.storeIdArr,this.modalSearchForm.keyword="",this.modalSearchForm.city_id="",this.modalSearchForm.area_id="",this.modalSearchForm.province_id="",this.modalSearchForm.page=1,this.getAllArea(),this.selectStoreList()}},mounted:function(){this.dialogVisible=this.visible,this.modalSelectedRowKeys=this.storeIds,this.getAllArea(),this.selectStoreList()},data:function(){return{dialogVisible:!1,areaList:[],searchForm:{storeIdArray:[],areaList:[]},storeIds:this.storeIdArr||[],modalSearchForm:{province_id:"",city_id:"",area_id:"",keyword:"",page:1},columns:[{dataIndex:"name",slots:{title:"name"},align:"center"}],modalTableData:[],curStoreList:[],modalSelectedRowKeys:[]}},methods:{selectStoreList:function(){var t=this;this.modalTableData=[],this.request(i["a"].getMerchantStoreList,this.modalSearchForm).then((function(e){t.modalTableData=e.list||[]}))},getAllArea:function(){var t=this;this.request(i["a"].getAllArea).then((function(e){t.areaList=e}))},onAreaChange:function(t){this.modalSearchForm.province_id=t[0],this.modalSearchForm.city_id=t[1],this.modalSearchForm.area_id=t[2],this.selectStoreList()},onExpandedRowChange:function(t,e){var a=e.store_id,o=this.storeIds.findIndex((function(t){return t.store_id==a}));o>-1?this.storeIds[o].package_id=curPackageId:this.storeIds.push({curStoreId:a})},chooseStoreOk:function(){var t=this;this.$set(this.searchForm,"storeIdArray",this.modalSelectedRowKeys),this.curStoreList=[],this.modalSelectedRowKeys.forEach((function(e){t.modalTableData.forEach((function(a){e==a.store_id&&t.curStoreList.push(a)}))})),this.$emit("submit",{storeIds:this.storeIds})},chooseStoreCancel:function(){this.modalTableData=[],this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onModalSelectChange:function(t){var e=this;this.storeIds=[],this.modalSelectedRowKeys=t,this.modalSelectedRowKeys.forEach((function(t){e.storeIds.push(t)}))}}},n=r,c=a("0c7c"),d=Object(c["a"])(n,o,s,!1,null,"feb2e9ae",null);e["default"]=d.exports},ea1d:function(t,e,a){"use strict";var o={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit"};e["a"]=o}}]);