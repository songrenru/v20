(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70478d34","chunk-707ad430"],{"08f7":function(e,a,t){"use strict";t("e6cd2")},"2b69":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-modal",{attrs:{visible:e.dialogVisible,title:"选择店铺",centered:"",maskClosable:!1,width:600},on:{ok:e.chooseStoreOk,cancel:e.chooseStoreCancel}},[[t("a-form-model",{attrs:{layout:"inline",model:e.modalSearchForm,"label-col":{span:2},"wrapper-col":{span:22}}},[t("a-row",[t("a-col",{staticClass:"mr-10",attrs:{span:10}},[t("a-cascader",{attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区"},on:{change:e.onAreaChange},model:{value:e.searchForm.areaList,callback:function(a){e.$set(e.searchForm,"areaList",a)},expression:"searchForm.areaList"}})],1),t("a-col",{staticClass:"mr-20",attrs:{span:10}},[t("a-input",{attrs:{placeholder:"输入店铺名称"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.selectStoreList()}},model:{value:e.modalSearchForm.keyword,callback:function(a){e.$set(e.modalSearchForm,"keyword",a)},expression:"modalSearchForm.keyword"}})],1),t("a-col",{attrs:{span:2}},[t("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.selectStoreList()}}},[e._v(" 查询 ")])],1)],1)],1),e.modalTableData?[t("a-checkbox",{staticStyle:{"padding-left":"7px",margin:"10px 0 5px"},attrs:{indeterminate:e.indeterminate,checked:e.checkAll},on:{change:function(a){return e.onCheckAllChange(a)}}},[e._v("全选")]),t("a-row",[t("a-col",{staticStyle:{"font-size":"20px","padding-left":"7px"},attrs:{span:24}},e._l(e.modalTableData,(function(a,o){return t("a-col",{key:a.store_id,staticStyle:{"line-height":"40px"},attrs:{span:24}},[a.showRow?t("div",[t("a-checkbox",{key:o,attrs:{value:a.store_id,checked:-1!=e.grouplList1.indexOf(a.store_id)},on:{change:function(t){return e.getStoreId(t,a)}}},[e._v(" "+e._s(a.name)+" ")]),a.package_list&&a.package_list.length?[t("a-col",{attrs:{span:24}},[t("a-radio-group",{attrs:{name:"radioGroup"},on:{change:function(t){return e.onExpandedRowChange(t,a)}},model:{value:e.radio_check,callback:function(a){e.radio_check=a},expression:"radio_check"}},e._l(a.package_list,(function(a){return t("a-radio",{key:a.id,attrs:{value:a.id}},[e._v(" "+e._s(a.name)+" ")])})),1)],1)]:e._e()],2):e._e()])})),1)],1),t("a-row",{staticClass:"text-right"},[[t("a-pagination",{attrs:{total:e.total,"show-less-items":"",hideOnSinglePage:""},on:{change:e.pageChange},model:{value:e.modalSearchForm.page,callback:function(a){e.$set(e.modalSearchForm,"page",a)},expression:"modalSearchForm.page"}})]],2)]:e._e()]],2)],1)},r=[],i=(t("d3b7"),t("159b"),t("b0c0"),t("a434"),t("a9e3"),t("4de4"),t("d81d"),t("c740"),t("a15b"),t("4b77")),s=t("da05"),n=t("290c"),l={components:{ARow:n["a"],ACol:s["b"]},props:{visible:{type:Boolean,default:!1},storeIdArr:{type:[Array,Object],default:function(){}}},watch:{visible:function(e,a){this.checkAll=!1,this.indeterminate=!1,this.grouplList1=[],this.storeIds=[],this.dialogVisible=e,this.getAllArea(),this.selectStoreList()}},mounted:function(){this.dialogVisible=this.visible,this.getAllArea(),this.selectStoreList()},data:function(){return{checkAll:!0,indeterminate:!0,radio_check:[],total:0,grouplList1:[],showHeader:!1,dialogVisible:!1,areaList:[],searchForm:{storeIdArray:[],areaList:[]},storeIds:[],modalSearchForm:{province_id:"",city_id:"",area_id:"",keyword:"",page:1},columns:[{dataIndex:"name",slots:{title:"name"},align:"center"}],modalTableData:[],curStoreList:[],modalSelectedRowKeys:[],expandedRowKeys:[]}},methods:{onCheckAllChange:function(e){var a=this;e.target.checked?(this.checkAll=!0,this.indeterminate=!0,this.modalTableData.forEach((function(e){e.show=!0,-1==a.grouplList1.indexOf(e.store_id)&&(a.grouplList1.push(e.store_id),a.storeIds.push({store_id:e.store_id,package_id:"",name:e.name}))}))):(this.modalTableData.forEach((function(e){e.show=!1;var t=a.grouplList1.indexOf(e.store_id);t>-1&&(a.grouplList1.splice(t,1),a.storeIds.splice(t,1))})),this.checkAll=!1,this.indeterminate=!1)},pageChange:function(e,a){this.modalSearchForm.page=e,this.modalTableData=this.modalTableDataGet(this.modalTableData,this.modalSearchForm.page)},getStoreId:function(e,a){if(e.target.checked)this.grouplList1.push(e.target.value),this.storeIds.push({store_id:a.store_id,package_id:"",name:a.name}),a.show=!0;else{var t=this.grouplList1.indexOf(e.target.value);t>-1&&(this.grouplList1.splice(t,1),this.storeIds.splice(t,1)),a.show=!1}this.grouplList1.length==this.modalTableData.length?(this.indeterminate=!0,this.checkAll=!0):(this.indeterminate=!1,this.checkAll=!1)},modalTableDataGet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=[];if(e&&e.length){var r=(Number(a)-1)*t,i=Number(a)*t-1>this.total?this.total:Number(a)*t-1;o=e.filter((function(e,a){return e.showRow=!1,a>=r&&a<=i&&(e.showRow=!0),e}))}return o},selectStoreList:function(){var e=this,a={province_id:this.modalSearchForm.province_id,city_id:this.modalSearchForm.city_id,area_id:this.modalSearchForm.area_id,keyword:this.modalSearchForm.keyword,page:0};this.request(i["a"].getMerchantStoreList,a).then((function(a){if(a.list&&a.list.length?e.modalTableData=e.modalTableDataGet(a.list,e.modalSearchForm.page):e.modalTableData=[],e.total=a.total,0==e.storeIdArr.length)e.modalTableData.forEach((function(a){var t=e.grouplList1.indexOf(a.store_id);-1==t&&(e.grouplList1.push(a.store_id),e.storeIds.push({store_id:a.store_id,package_id:"",name:a.name}))})),e.checkAll=!0,e.indeterminate=!0;else{var t=0;e.storeIdArr.forEach((function(a){var o=e.grouplList1.indexOf(a.store_id);-1==o&&(e.grouplList1.push(a.store_id),e.storeIds.push({store_id:a.store_id,package_id:a.package_id,name:a.name})),e.modalTableData=e.modalTableData.map((function(e){return a.store_id==e.store_id&&(e.show=!0,t+=1),e}))})),t!=e.modalTableData.length?(e.checkAll=!1,e.indeterminate=!1):(e.checkAll=!0,e.indeterminate=!0)}}))},getAllArea:function(){var e=this;this.request(i["a"].getAllArea).then((function(a){e.areaList=a}))},onAreaChange:function(e){this.modalSearchForm.province_id=e[0],this.modalSearchForm.city_id=e[1],this.modalSearchForm.area_id=e[2],this.selectStoreList()},onExpandedRowChange:function(e,a){var t=a.store_id,o=e.target.value,r=this.storeIds.findIndex((function(e){return e.store_id==t}));r>-1?this.storeIds[r].package_id=o:(this.storeIds.push({store_id:t,package_id:o||"",name:a.name}),this.radio_check.push(o))},chooseStoreOk:function(){this.$set(this.searchForm,"storeIdArray",this.grouplList1);var e=[],a="";this.modalTableData&&this.modalTableData.length?this.storeIds.forEach((function(t){e.push(t.name),a=e.filter((function(e){return e})).join(",")})):this.storeIds=[],this.$emit("submit",{storeName:a,storeIds:this.storeIds}),this.chooseStoreCancel()},chooseStoreCancel:function(){this.modalTableData=[],this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible),this.$set(this.modalSearchForm,"keyword",""),this.$set(this.modalSearchForm,"page",1),this.$set(this.modalSearchForm,"province_id",""),this.$set(this.modalSearchForm,"city_id",""),this.$set(this.modalSearchForm,"area_id",""),this.$set(this.searchForm,"areaList",[])},onModalSelectChange:function(e){var a=this;this.expandedRowKeys=e,this.storeIds=[],this.modalSelectedRowKeys=e,this.modalSelectedRowKeys.forEach((function(e){a.storeIds.push({store_id:e,package_id:""})}))}}},c=l,m=(t("9469"),t("0c7c")),d=Object(m["a"])(c,o,r,!1,null,"6e2d32d5",null);a["default"]=d.exports},"4b77":function(e,a,t){"use strict";var o,r=t("ade3"),i=(o={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(r["a"])(o,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(r["a"])(o,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(r["a"])(o,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(r["a"])(o,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(r["a"])(o,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(r["a"])(o,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(r["a"])(o,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(r["a"])(o,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(r["a"])(o,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(r["a"])(o,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(r["a"])(o,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(r["a"])(o,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(r["a"])(o,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(r["a"])(o,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(r["a"])(o,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(r["a"])(o,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(r["a"])(o,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(r["a"])(o,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(r["a"])(o,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(r["a"])(o,"noteInfo","/group/merchant.goods/noteInfo"),Object(r["a"])(o,"orderDetail","/group/merchant.goods/orderDetail"),Object(r["a"])(o,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(r["a"])(o,"getRatioList","/group/merchant.goods/getRatioList"),Object(r["a"])(o,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(r["a"])(o,"couponDetail","/group/merchant.goods/couponDetail"),Object(r["a"])(o,"couponVerify","/group/merchant.goods/couponVerify"),Object(r["a"])(o,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(r["a"])(o,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(r["a"])(o,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(r["a"])(o,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(r["a"])(o,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(r["a"])(o,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),o);a["a"]=i},"7b3f":function(e,a,t){"use strict";var o={uploadImg:"/common/common.UploadFile/uploadImg"};a["a"]=o},9469:function(e,a,t){"use strict";t("9ae0")},"9ae0":function(e,a,t){},e6cd2:function(e,a,t){},fab1:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page"},[t("a-page-header",{staticClass:"page-header",attrs:{title:e.goodTitle}}),t("a-tabs",{attrs:{"default-active-key":"1"},on:{change:e.callback}},[t("a-tab-pane",{key:"1",attrs:{tab:"基本信息"}},[t("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol,rules:e.rules}},[t("a-card",{attrs:{bordered:!1}},[t("a-form-model-item",{attrs:{label:"商品类型",colon:!1}},[t("span",[e._v("代金券")])]),t("a-form-model-item",{attrs:{label:"代金券面额",colon:!1,wrapperCol:{span:6},rules:{required:!0}}},[t("a-input",{attrs:{placeholder:"请输入价值面额"},model:{value:e.formData.face_value,callback:function(a){e.$set(e.formData,"face_value",a)},expression:"formData.face_value"}})],1),t("a-form-model-item",{attrs:{label:"原价",colon:!1,wrapperCol:{span:6},rules:{required:!0}}},[t("a-input",{attrs:{placeholder:"请输入商品原价"},model:{value:e.formData.old_price,callback:function(a){e.$set(e.formData,"old_price",a)},expression:"formData.old_price"}})],1),t("a-form-model-item",{attrs:{label:"团购价",colon:!1,wrapperCol:{span:18},rules:{required:!0}}},[t("a-row",[t("a-col",{attrs:{span:8}},[t("a-input",{attrs:{placeholder:"请输入商品团购价"},model:{value:e.formData.price,callback:function(a){e.$set(e.formData,"price",a)},expression:"formData.price"}})],1),t("a-col",{attrs:{span:10}},[t("a-radio-group",{staticStyle:{"margin-left":"20px"},attrs:{"default-value":1},model:{value:e.formData.is_invoice,callback:function(a){e.$set(e.formData,"is_invoice",a)},expression:"formData.is_invoice"}},e._l(e.isInvoiceList,(function(a){return t("a-radio",{key:a.value,attrs:{value:a.value}},[e._v(" "+e._s(a.label)+" ")])})),1)],1)],1)],1),t("a-form-model-item",{attrs:{label:"团购开始时间",colon:!1,help:"到了团购开始时间，商品才会显示！",prop:"begin_time",rules:{required:!0,message:"请选择团购开始时间",trigger:["blur","change"]}}},[t("a-date-picker",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择时间","show-time":"",format:"YYYY-MM-DD HH:mm:ss",value:e.date_moment(e.formData.begin_time,e.dateFormat),allowClear:!0,"disabled-date":e.disabledStartDate,getCalendarContainer:function(e){return e.parentNode}},on:{change:e.beginTimeChange}})],1),t("a-form-model-item",{attrs:{label:"团购结束时间",colon:!1,help:"超过团购结束时间，商品不再显示售卖！",prop:"end_time",rules:{required:!0,message:"请选择团购结束时间",trigger:["blur","change"]}}},[t("a-date-picker",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择时间","show-time":"",format:"YYYY-MM-DD HH:mm:ss",value:e.date_moment(e.formData.end_time,e.dateFormat),"disabled-date":e.disabledEndDate,allowClear:!0,getCalendarContainer:function(e){return e.parentNode}},on:{change:e.endTimeChange}})],1),t("a-form-model-item",{attrs:{label:"团购券有效期",colon:!1,prop:"deadline_time",rules:{required:!0,message:"请设置团购券有效期",trigger:["blur","change"]}}},[t("a-radio-group",{attrs:{defaultValue:e.formData.effective_type},on:{change:function(){e.formData.deadline_time=0}},model:{value:e.formData.effective_type,callback:function(a){e.$set(e.formData,"effective_type",a)},expression:"formData.effective_type"}},[t("a-radio",{staticStyle:{"margin-right":"0"},attrs:{value:0}},[e._v(" 固定时间 ")]),0==e.formData.effective_type?t("a-date-picker",{attrs:{placeholder:"请选择时间","show-time":"",allowClear:!0,format:"YYYY-MM-DD HH:mm:ss",value:0==e.formData.effective_type?e.date_moment(e.formData.deadline_time,e.dateFormat):null,getCalendarContainer:function(e){return e.parentNode}},on:{change:e.deadlineTimeChange}}):e._e(),t("a-radio",{staticStyle:{"margin-left":"30px"},attrs:{value:1},on:{change:e.deadlineEdTimeChange}},[t("span",[e._v("购买后")]),1==e.formData.effective_type?t("a-input-number",{attrs:{min:1,max:999},model:{value:e.formData.deadline_time,callback:function(a){e.$set(e.formData,"deadline_time",a)},expression:"formData.deadline_time"}}):e._e(),t("span",[e._v("天后到期")])],1)],1)],1),t("a-form-model-item",{attrs:{label:"提前取消设置",colon:!1}},[t("a-radio-group",{model:{value:e.formData.cancel_type,callback:function(a){e.$set(e.formData,"cancel_type",a)},expression:"formData.cancel_type"}},[t("a-radio",{attrs:{value:"0"}},[e._v(" 不可取消 ")]),t("a-radio",{attrs:{value:"1"}},[t("span",[e._v("支持取消，到期前")]),t("a-input-number",{attrs:{min:1},model:{value:e.formData.cancel_hours,callback:function(a){e.$set(e.formData,"cancel_hours",a)},expression:"formData.cancel_hours"}}),t("span",[e._v("小时")])],1),t("a-radio",{attrs:{value:"2"}},[e._v(" 随时取消 ")])],1)],1),t("a-form-model-item",{attrs:{label:"使用时间限制",colon:!1}},[t("a-select",{staticStyle:{width:"300px"},model:{value:e.formData.is_general,callback:function(a){e.$set(e.formData,"is_general",a)},expression:"formData.is_general"}},e._l(e.generalList,(function(a){return t("a-select-option",{key:a.value},[e._v(" "+e._s(a.label)+" ")])})),1),t("a-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:function(a){return e.handleRadioChange(a.target.value,"appoint_time_radio")}},model:{value:e.formData.appoint_time_radio,callback:function(a){e.$set(e.formData,"appoint_time_radio",a)},expression:"formData.appoint_time_radio"}},[t("a-radio",{attrs:{value:0}},[e._v(" 无需预约 ")]),t("a-radio",{attrs:{value:1}},[t("span",[e._v("提前预约")]),t("a-input-number",{attrs:{min:1,max:99},model:{value:e.formData.appoint_time,callback:function(a){e.$set(e.formData,"appoint_time",a)},expression:"formData.appoint_time"}}),t("a-select",{staticStyle:{width:"100px"},model:{value:e.formData.appoint_time_type,callback:function(a){e.$set(e.formData,"appoint_time_type",a)},expression:"formData.appoint_time_type"}},e._l(e.appointTimeTypelist,(function(a){return t("a-select-option",{key:a.value},[e._v(" "+e._s(a.label)+" ")])})),1)],1)],1)],1),t("a-form-model-item",{attrs:{label:"适用店铺",colon:!1}},[t("span",[e._v(e._s(e.storeNames?e.storeNames:"未选择店铺"))]),t("span",{staticClass:"cr-primary ml-20 pointer",on:{click:e.selectStore}},[e._v("设置")])]),t("choose-store",{attrs:{visible:e.selectStoreVisible,storeIdArr:e.formData.store_ids},on:{"update:visible":function(a){e.selectStoreVisible=a},submit:e.onStoreSelect}}),t("a-card",{attrs:{bordered:!1}},[t("span",{staticClass:"fs-16 pb-10 pr-20",staticStyle:{height:"24px"}},[e._v("补充信息")]),t("a-divider",{staticStyle:{margin:"10px 0"}}),t("a-form-model-item",{attrs:{label:"商品标题",colon:!1,labelCol:{span:3},rules:{required:!0}}},[t("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入商品标题"},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}}),t("span",{staticClass:"ml-20"},[e._v("限100字")])],1),t("a-form-model-item",{attrs:{label:"商品名称",colon:!1,labelCol:{span:3},rules:{required:!0}}},[t("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入商品名称"},model:{value:e.formData.s_name,callback:function(a){e.$set(e.formData,"s_name",a)},expression:"formData.s_name"}}),t("span",{staticClass:"ml-20"},[e._v("限100字")])],1),t("a-form-model-item",{attrs:{label:"商品简介",colon:!1,labelCol:{span:3}}},[t("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入商品简介"},model:{value:e.formData.intro,callback:function(a){e.$set(e.formData,"intro",a)},expression:"formData.intro"}}),t("span",{staticClass:"ml-20"},[e._v("限100字")])],1),t("a-form-model-item",{attrs:{label:"团购专页分类",colon:!1,labelCol:{span:3}}},[t("a-select",{staticStyle:{width:"160px"},attrs:{placeholder:"一级分类"},on:{change:function(a){return e.handleGroupCategoryChange(a)}},model:{value:e.formData.cat_fid,callback:function(a){e.$set(e.formData,"cat_fid",a)},expression:"formData.cat_fid"}},e._l(e.groupCategoryList,(function(a){return t("a-select-option",{key:a.sort_id},[e._v(" "+e._s(a.sort_name)+" ")])})),1),t("a-select",{staticStyle:{width:"160px","margin-left":"10px"},attrs:{placeholder:"二级分类"},model:{value:e.formData.cat_id,callback:function(a){e.$set(e.formData,"cat_id",a)},expression:"formData.cat_id"}},e._l(e.currentGroupCat.children,(function(a){return t("a-select-option",{key:a.sort_id},[e._v(" "+e._s(a.sort_name)+" ")])})),1)],1),t("a-form-model-item",{attrs:{label:"是否支持自动核销",colon:!1,labelCol:{span:3},"wrapper-col":{span:18}}},[t("a-radio-group",{attrs:{defaultValue:0},model:{value:e.formData.auto_check,callback:function(a){e.$set(e.formData,"auto_check",a)},expression:"formData.auto_check"}},[t("a-radio",{attrs:{value:0}},[e._v(" 不支持 ")]),t("a-radio",{attrs:{value:1}},[e._v(" 支持 ")]),t("span",{staticStyle:{"font-size":"10px"}},[e._v("选择支持，则用户付款该团购商品后该订单自动核销，无需店员操作核销动作；自动核销只支持团购商品归属为一个店铺，如果归属为多个店铺，则默认核销第一个店铺。")])],1)],1)],1),t("a-card",{attrs:{bordered:!1}},[t("span",{staticClass:"fs-16 pb-10 pr-20",staticStyle:{height:"24px"}},[e._v("数量设置")]),t("a-divider",{staticStyle:{margin:"10px 0"}}),t("a-form-model-item",{attrs:{label:"商品总数量",colon:!1,labelCol:{span:3}}},[t("a-radio-group",{on:{change:function(a){return e.handleRadioChange(a.target.value,"count_num_type")}},model:{value:e.formData.count_num_type,callback:function(a){e.$set(e.formData,"count_num_type",a)},expression:"formData.count_num_type"}},[t("a-radio",{attrs:{value:"0"}},[e._v(" 不限 ")]),t("a-radio",{attrs:{value:"1"}},[t("span",[e._v("有限")]),1==e.formData.count_num_type?t("a-input-number",{staticStyle:{"margin-left":"20px",width:"100px"},attrs:{min:0,placeholder:"请输入"},model:{value:e.formData.count_num,callback:function(a){e.$set(e.formData,"count_num",a)},expression:"formData.count_num"}}):e._e()],1)],1)],1),t("a-form-model-item",{attrs:{label:"ID最多购买数量",colon:!1,labelCol:{span:3},rules:{required:!0}}},[t("a-radio-group",{on:{change:function(a){return e.handleRadioChange(a.target.value,"once_max_type")}},model:{value:e.formData.once_max_type,callback:function(a){e.$set(e.formData,"once_max_type",a)},expression:"formData.once_max_type"}},[t("a-radio",{attrs:{value:"0"}},[e._v(" 不限 ")]),t("a-radio",{attrs:{value:"1"}},[t("span",[e._v("有限")]),1==e.formData.once_max_type?t("a-input-number",{staticStyle:{"margin-left":"20px",width:"100px"},attrs:{min:0,placeholder:"请输入"},model:{value:e.formData.once_max,callback:function(a){e.$set(e.formData,"once_max",a)},expression:"formData.once_max"}}):e._e()],1)],1)],1),t("a-form-model-item",{attrs:{label:"ID每天最多购买数量",colon:!1,labelCol:{span:3},rules:{required:!0}}},[t("a-radio-group",{on:{change:function(a){return e.handleRadioChange(a.target.value,"once_max_day_type")}},model:{value:e.formData.once_max_day_type,callback:function(a){e.$set(e.formData,"once_max_day_type",a)},expression:"formData.once_max_day_type"}},[t("a-radio",{attrs:{value:"0"}},[e._v(" 不限 ")]),t("a-radio",{attrs:{value:"1"}},[t("span",[e._v("有限")]),1==e.formData.once_max_day_type?t("a-input-number",{staticStyle:{"margin-left":"20px",width:"100px"},attrs:{min:0,placeholder:"请输入"},model:{value:e.formData.once_max_day,callback:function(a){e.$set(e.formData,"once_max_day",a)},expression:"formData.once_max_day"}}):e._e(),t("span",{staticClass:"ml-10",staticStyle:{"font-size":"10px"}},[e._v("一个ID每天最多购买数量，会受“ID最多购买数量”配置项限制")])],1)],1)],1),t("a-form-model-item",{attrs:{label:"一次最少购买数量",colon:!1,labelCol:{span:3},rules:{required:!0}}},[t("a-radio-group",{on:{change:function(a){return e.handleRadioChange(a.target.value,"once_min_type")}},model:{value:e.formData.once_min_type,callback:function(a){e.$set(e.formData,"once_min_type",a)},expression:"formData.once_min_type"}},[t("a-radio",{attrs:{value:"0"}},[e._v(" 不限 ")]),t("a-radio",{attrs:{value:"1"}},[t("span",[e._v("有限")]),1==e.formData.once_min_type?t("a-input-number",{staticStyle:{"margin-left":"20px",width:"100px"},attrs:{min:0,placeholder:"请输入"},model:{value:e.formData.once_min,callback:function(a){e.$set(e.formData,"once_min",a)},expression:"formData.once_min"}}):e._e(),t("span",{staticClass:"ml-10",staticStyle:{"font-size":"10px"}},[e._v("购买数量低于此设定的不允许参团")])],1)],1)],1),t("a-form-model-item",{attrs:{label:"单次使用数量",colon:!1,labelCol:{span:3}}},[t("a-radio-group",{on:{change:function(a){return e.handleRadioChange(a.target.value,"once_use_max_type")}},model:{value:e.formData.once_use_max_type,callback:function(a){e.$set(e.formData,"once_use_max_type",a)},expression:"formData.once_use_max_type"}},[t("a-radio",{attrs:{value:"0"}},[e._v(" 不限 ")]),t("a-radio",{attrs:{value:"1"}},[t("span",[e._v("有限")]),1==e.formData.once_use_max_type?t("a-input-number",{staticStyle:{"margin-left":"20px",width:"100px"},attrs:{min:0,placeholder:"请输入"},model:{value:e.formData.once_use_max,callback:function(a){e.$set(e.formData,"once_use_max",a)},expression:"formData.once_use_max"}}):e._e()],1)],1)],1)],1),t("a-card",{attrs:{bordered:!1}},[t("p",{staticClass:"fs-16"},[e._v("库存扣减方式")]),t("a-divider",{staticStyle:{margin:"10px 0"}}),t("a-form-model-item",{attrs:{label:" ",colon:!1,labelCol:{span:3}}},[t("a-radio-group",{attrs:{defaultValue:0},model:{value:e.formData.stock_reduce_method,callback:function(a){e.$set(e.formData,"stock_reduce_method",a)},expression:"formData.stock_reduce_method"}},[t("a-radio",{staticStyle:{margin:"10px 20px 20px 0"},attrs:{value:0}},[e._v(" 支付成功后减库存 ")]),t("span",{staticStyle:{"font-size":"10px"}},[e._v("可能会出现售出的数量大于商品数量")]),t("br"),t("a-radio",{attrs:{value:1}},[e._v(" 下单成功后减库存 ")]),t("span",{staticStyle:{"font-size":"10px"}},[e._v("可能会出现大量下单但是没有支付时库存已经没有了，但是如果20分钟后还是没有买单的话系统自动回滚库存")])],1)],1)],1)],1)],1),t("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[t("a-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(" 保存 ")])],1)],1),t("a-tab-pane",{key:"3",attrs:{tab:"其他设置","force-render":""}},[t("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-divider",{staticStyle:{height:"10px","background-color":"#eef0f3",margin:"0"}}),t("a-card",{attrs:{bordered:!1}},[t("p",{staticClass:"fs-16"},[e._v("会员优惠")]),t("a-divider",{staticStyle:{margin:"10px 0"}}),t("p",{staticClass:"fs-12"},[e._v(" 说明：必须设置一个会员等级优惠类型和优惠类型对应的数值，我们将结合优惠类型和所填的数量来计算该商品会员等级的优惠幅度！ ")]),e._l(e.levelInfoList,(function(a,o){return t("div",{key:a.lid},[t("a-form-model-item",{attrs:{label:a.lname,colon:!1,labelCol:{span:3}}},[t("span",{staticClass:"mr-10"},[e._v("优惠类型")]),t("a-select",{staticClass:"mr-20",staticStyle:{width:"150px"},attrs:{"default-value":String(a.type),disabled:e.discount_sync_status},on:{change:function(t){return e.onDiscountTypeChange(t,o,a)}}},e._l(e.discountType,(function(a){return t("a-select-option",{key:a.value},[e._v(" "+e._s(a.label)+" ")])})),1),t("a-input",{staticStyle:{"margin-left":"20px",width:"200px"},attrs:{placeholder:"请输入对应优惠金额",disabled:e.discount_sync_status},on:{change:function(t){return e.onDisPriceChange(a.vv)}},model:{value:a.vv,callback:function(t){e.$set(a,"vv",t)},expression:"curLevel.vv"}})],1)],1)}))],2),t("a-divider",{staticStyle:{height:"10px","background-color":"#eef0f3"}}),t("a-card",{attrs:{bordered:!1}},[t("p",{staticClass:"fs-16"},[e._v("其他设置")]),t("a-divider",{staticStyle:{margin:"10px 0"}}),t("a-card",{attrs:{bordered:!1}},[t("span",{staticStyle:{"margin-left":"60px"}},[t("strong",[e._v("套餐设置")])]),t("a-form-model-item",{attrs:{label:"本团购套餐标签",colon:!1,labelCol:{span:3}}},[t("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入标签名称"},model:{value:e.formData.tagname,callback:function(a){e.$set(e.formData,"tagname",a)},expression:"formData.tagname"}})],1),t("a-form-model-item",{attrs:{label:"选择加入套餐",colon:!1,labelCol:{span:3}}},[t("a-select",{staticStyle:{width:"300px"},attrs:{"default-value":e.packagesList[0].title},on:{change:e.onPackagesChange},model:{value:e.formData.packageid,callback:function(a){e.$set(e.formData,"packageid",a)},expression:"formData.packageid"}},e._l(e.packagesList,(function(a){return t("a-select-option",{key:a.id},[e._v(" "+e._s(a.title)+" ")])})),1)],1)],1),t("a-card",{attrs:{bordered:!1}},[t("span",{staticStyle:{"margin-left":"60px"}},[t("strong",[e._v("状态设置")])]),t("a-form-model-item",{attrs:{label:"团购状态",colon:!1,labelCol:{span:3}}},[t("a-radio-group",{attrs:{defaultValue:1},on:{change:function(a){return e.onStatusChange(e.formData.status)}},model:{value:e.formData.status,callback:function(a){e.$set(e.formData,"status",a)},expression:"formData.status"}},[t("a-radio",{attrs:{value:1}},[e._v(" 开启 ")]),t("a-radio",{staticStyle:{"margin-right":"10px"},attrs:{value:0}},[e._v(" 关闭 ")]),t("span",{staticStyle:{"font-size":"10px"}},[e._v("为了方便用户能查找到以前的订单，团购无法删除！")])],1)],1)],1)],1)],1),t("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[t("a-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(" 保存 ")])],1)],1)],1)],1)},r=[],i=(t("d3b7"),t("159b"),t("c740"),t("b0c0"),t("a15b"),t("99af"),t("7b3f"),t("2b69")),s=t("4b77"),n=t("c1df"),l=t.n(n);var c={components:{ChooseStore:i["default"]},data:function(){return{discount_sync_status:!1,goodTitle:"",labelCol:{span:4},wrapperCol:{span:14},chooseStoreVisible:!1,storeNames:"",selectStoreVisible:!1,dateFormat:"YYYY-MM-DD HH:mm:ss",formData:{group_id:"",is_mail:"0",face_value:"",old_price:"",price:"",is_invoice:"1",begin_time:"",end_time:"",effective_type:0,deadline_time:"",cancel_type:"0",cancel_hours:"",is_general:"0",appoint_time_radio:0,appoint_time:"",appoint_time_type:"0",store_ids:[],content:"",count_num_type:"0",count_num:"",once_max_type:"0",once_use_max:"0",once_use_max_type:"0",once_max_day_type:"0",once_max:"",once_max_day:"",once_min_type:"0",once_min:"",auto_check:0,stock_reduce_method:0,pin_num:"0",start_discount:"0",start_max_num:"1",group_refund_fee:"0",pin_effective_time:"0",s_name:"",name:"",intro:"",tagname:"",packageid:"",express_template_id:"",express_fee:"",pick_in_store:"1",trade_type:"",trade_info:"",status:1,cat_fid:"",cat_id:""},rules:{},currentIndex:0,checked:!1,showTags:!1,isInvoiceList:[{value:"1",label:"提供发票"},{value:"0",label:"不提供发票"}],generalList:[{value:"0",label:"周末、法定节假日通用"},{value:"1",label:"周末不能使用"},{value:"2",label:"法定节假日不能使用"},{value:"3",label:"周末、法定节假日不能通用"}],appointTimeTypelist:[{value:"0",label:"天"},{value:"1",label:"小时"}],modalVisible:!1,areaList:[],searchForm:{storeIdArray:[],areaList:[]},modalSearchForm:{province_id:"",city_id:"",area_id:"",keyword:"",page:1},columns:[{dataIndex:"name",slots:{title:"name"},align:"center"}],modalTableData:[],curStoreList:[],modalSelectedRowKeys:[],storeStrName:"",firGroupCategoryList:[],secGroupCategoryList:[],leveloff:[],groupCategoryList:[],currentGroupCat:{children:[]},levelInfoList:[],discountType:[{value:"0",label:"无优惠"},{value:"1",label:"百分比（%）"},{value:"2",label:"立减"}],packagesList:[{id:-1,title:"不加入任何套餐"}],canSave:!0}},watch:{$route:function(e){"/merchant/merchant.group/goodsCashingEdit"==e.path&&(e.query.group_id?(this.formData.group_id=e.query.group_id,this.getCashingInfo(this.formData.group_id)):Object.assign(this.$data,this.$options.data()))}},mounted:function(){this.$route.query.group_id?(this.formData.group_id=this.$route.query.group_id,this.getCashingInfo(this.formData.group_id),this.goodTitle="编辑代金券"):(Object.assign(this.$data,this.$options.data()),this.goodTitle="添加代金券"),this.getGroupEditInfo()},methods:{moment:l.a,handleRadioChange:function(e,a){this.$set(this.formData,a,e),this.$forceUpdate()},beginTimeChange:function(e,a){this.formData.begin_time=a},endTimeChange:function(e,a){var t=l()(this.formData.begin_time).valueOf(),o=l()(a).valueOf();o<t?this.$message.error("活动结束时间必须大于活动开始时间！"):this.formData.end_time=a},deadlineTimeChange:function(e,a){var t=l()(this.formData.end_time).valueOf(),o=l()(a).valueOf();o<t&&0==this.formData.effective_type?this.$message.error("团购券有效期必须大于活动结束时间！"):this.formData.deadline_time=a},deadlineEdTimeChange:function(e){var a=this;this.$nextTick((function(){a.formData.deadline_time=1}))},selectStore:function(){this.selectStoreVisible=!0},onStoreSelect:function(e){this.selectStoreVisible=!1;var a=e.storeName,t=e.storeIds;this.storeNames=a,this.formData.store_ids=t},selectStoreList:function(){var e=this;this.modalTableData=[],this.request(s["a"].getMerchantStoreList,this.modalSearchForm).then((function(a){e.modalTableData=a.list||[],console.log(e.modalTableData,"获取店铺信息列表")}))},getAllArea:function(){var e=this;this.request(s["a"].getAllArea).then((function(a){e.areaList=a}))},onAreaChange:function(e){this.modalSearchForm.province_id=e[0],this.modalSearchForm.city_id=e[1],this.modalSearchForm.area_id=e[2],this.selectStoreList()},onModalSelectChange:function(e){var a=this;this.formData.store_ids=[],this.modalSelectedRowKeys=e,console.log(this.modalSelectedRowKeys,"选择的店铺id"),this.modalSelectedRowKeys.forEach((function(e){a.formData.store_ids.push({store_id:e,package_id:""})})),console.log(this.formData.store_ids,"传给后台的store_ids11111")},chooseStore:function(){this.chooseStoreVisible=!0},getChooseStore:function(e){this.formData.store_ids=e.storeIds,this.storeNames=e.storeName,this.chooseStoreVisible=!1},onExpandedRowChange:function(e,a){var t=a.store_id,o=e.target.value,r=this.formData.store_ids.findIndex((function(e){return e.store_id==t}));r>-1?this.formData.store_ids[r].package_id=o:this.formData.store_ids.push({store_id:t,package_id:o||""}),console.log(this.formData.store_ids,"传给后台的store_ids2222")},chooseStoreOk:function(){var e=this;this.$set(this.searchForm,"storeIdArray",this.modalSelectedRowKeys),this.curStoreList=[],this.modalSelectedRowKeys.forEach((function(a){e.modalTableData.forEach((function(t){a==t.store_id&&e.curStoreList.push(t)}))}));var a=[];this.storeStrName="",this.curStoreList.forEach((function(t){a.push(t.name),e.storeStrName=a.join(",")})),this.modalVisible=!1},chooseStoreCancel:function(){this.modalTableData=[],this.modalVisible=!1},callback:function(e){console.log(e)},getCashingInfo:function(e){var a=this;this.request(s["a"].getGoodsCashingDetail,{group_id:e}).then((function(e){if(a.formData=e,e.store.ids){var t=e.store.ids?e.store.ids:[],o=e.store.detail?e.store.detail:[],r=[];t.forEach((function(e){o.forEach((function(t){e.store_id==t.store_id&&(r.push(t.name),e.name=t.name,a.storeNames=r.join(","))}))})),a.$set(a.formData,"store_ids",t)}a.formData.once_max_type=a.formData.once_max>0?"1":"0",a.formData.once_max=a.formData.once_max>0?a.formData.once_max:"",a.formData.once_max_day_type=a.formData.once_max_day>0?"1":"0",a.formData.once_max_day=a.formData.once_max_day>0?a.formData.once_max_day:"",a.formData.once_min_type=a.formData.once_min>0?"1":"0",a.formData.once_min=a.formData.once_min>0?a.formData.once_min:"",a.formData.count_num_type=a.formData.count_num>0?"1":"0",a.formData.count_num=a.formData.count_num>0?a.formData.count_num:"",a.formData.once_use_max_type=a.formData.once_use_max>0?"1":"0",a.formData.once_use_max=a.formData.once_use_max>0?a.formData.once_use_max:"",a.formData.stock_reduce_method=e.stock_reduce_method,a.formData.effective_type=e.effective_type,a.formData.cancel_type=e.cancel_type,a.formData.appoint_time_radio=e.appoint_time>0?1:0,a.levelInfoList=e.leveloff_list}))},getGroupEditInfo:function(){var e=this;this.request(s["a"].getGroupEditInfo,{}).then((function(a){a.packages_list.length&&(e.packagesList=e.packagesList.concat(a.packages_list)),a.group_category_list.length&&(e.groupCategoryList=a.group_category_list,e.formData.group_id?e.handleGroupCategoryChange(e.formData.cat_fid,e.formData.cat_id):(e.$set(e.formData,"cat_fid",e.groupCategoryList[0].sort_id),e.handleGroupCategoryChange(e.groupCategoryList[0].sort_id))),!a.user_level.length||e.$route.query.group_id>0||(e.levelInfoList=a.user_level),e.discount_sync_status=a.discount_sync_status}))},date_moment:function(e,a){return e?l()(e,a):null},disabledStartDate:function(e){var a=this.formData.end_time;return e&&a?e.valueOf()>a.valueOf():e&&e<l()().subtract(1,"days")},disabledEndDate:function(e){var a=this.formData.begin_time;return a?a.valueOf()>=e.valueOf():e&&e<l()().subtract(1,"days")},onFirCategoryChange:function(e){var a=this.firGroupCategoryList[e-1];this.$set(this.formData,"cat_fid",e),this.secGroupCategoryList=a.children},onSecCategoryChange:function(e){this.$set(this.formData,"cat_id",e)},onDiscountTypeChange:function(e,a,t){var o=this.levelInfoList[a];o.type=e,o.vv=t.vv,this.$set(this.levelInfoList,a,o)},onPackagesChange:function(e){this.formData.packageid=e},onStatusChange:function(e){this.formData.status=e},handleGroupCategoryChange:function(e,a){for(var t in this.groupCategoryList){var o=this.groupCategoryList[t];if(o.sort_id==e)return this.$set(this,"currentGroupCat",o),void(o.children&&o.children.length&&(a||this.$set(this.formData,"cat_id",o.children[0].sort_id)))}},submitForm:function(){var e=this;if(this.canSave&&this.validateForm()){this.canSave=!1;var a=this.formData;this.request(s["a"].saveCashingGoods,a).then((function(a){e.$route.query.group_id||Object.assign(e.$data,e.$options.data()),e.$message.success("提交成功！",2,(function(){e.$message.destroy(),e.$router.push({path:"/merchant/merchant.group/groupList"}),e.canSave=!0}))})).catch((function(a){e.canSave=!0}))}},validateForm:function(){if(!this.formData.face_value)return this.$message.error("请输入代金券面额！"),!1;if(!this.formData.old_price)return this.$message.error("请输入原价！"),!1;if(!this.formData.price)return this.$message.error("请输入团购价！"),!1;if(!this.formData.begin_time)return this.$message.error("请输入团购开始时间！"),!1;if(!this.formData.end_time)return this.$message.error("请输入团购结束时间！"),!1;if(!this.formData.deadline_time){this.$message.error("请输入有效期！");var e=[{required:!0,message:"请输入团购券有效期",trigger:"change"}];return this.$set(this.rules,"deadline_time",e),!1}return this.formData.store_ids.length?1==this.formData.once_max_type&&m(this.formData.once_max)?(this.$message.error("请输入ID最多购买限购数量"),!1):1==this.formData.once_max_day_type&&m(this.formData.once_max_day)?(this.$message.error("请输入ID每天最多购买限购数量"),!1):1==this.formData.once_min_type&&m(this.formData.once_min)?(this.$message.error("请输入ID每次最少购买数量"),!1):this.formData.s_name?!!this.formData.name||(this.$message.error("请输入商品标题！"),!1):(this.$message.error("请输入商品名称！"),!1):(this.$message.error("请选择适用店铺！"),!1)}}};function m(e){return"undefined"===typeof e||null===e||""===e}var d=c,u=(t("08f7"),t("0c7c")),p=Object(u["a"])(d,o,r,!1,null,"b2a04400",null);a["default"]=p.exports}}]);