(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6f760c6","chunk-2d0b6a79","chunk-7ce90280","chunk-d20649e8","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d3b7");function o(e,t,a,o,r,i,s){try{var n=e[i](s),l=n.value}catch(c){return void a(c)}n.done?t(l):Promise.resolve(l).then(o,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,i){var s=e.apply(t,a);function n(e){o(s,r,i,n,l,"next",e)}function l(e){o(s,r,i,n,l,"throw",e)}n(void 0)}))}}},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a("6b75");function r(e){if(Array.isArray(e))return Object(o["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=a("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return r(e)||i(e)||Object(s["a"])(e)||n()}},"2b69":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{visible:e.dialogVisible,title:"选择店铺",centered:"",maskClosable:!1,width:600},on:{ok:e.chooseStoreOk,cancel:e.chooseStoreCancel}},[[a("a-form-model",{attrs:{layout:"inline",model:e.modalSearchForm,"label-col":{span:2},"wrapper-col":{span:22}}},[a("a-row",[a("a-col",{staticClass:"mr-10",attrs:{span:10}},[a("a-cascader",{attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区"},on:{change:e.onAreaChange},model:{value:e.searchForm.areaList,callback:function(t){e.$set(e.searchForm,"areaList",t)},expression:"searchForm.areaList"}})],1),a("a-col",{staticClass:"mr-20",attrs:{span:10}},[a("a-input",{attrs:{placeholder:"输入店铺名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectStoreList()}},model:{value:e.modalSearchForm.keyword,callback:function(t){e.$set(e.modalSearchForm,"keyword",t)},expression:"modalSearchForm.keyword"}})],1),a("a-col",{attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.selectStoreList()}}},[e._v(" 查询 ")])],1)],1)],1),e.modalTableData?[a("a-checkbox",{staticStyle:{"padding-left":"7px",margin:"10px 0 5px"},attrs:{indeterminate:e.indeterminate,checked:e.checkAll},on:{change:function(t){return e.onCheckAllChange(t)}}},[e._v("全选")]),a("a-row",[a("a-col",{staticStyle:{"font-size":"20px","padding-left":"7px"},attrs:{span:24}},e._l(e.modalTableData,(function(t,o){return a("a-col",{key:t.store_id,staticStyle:{"line-height":"40px"},attrs:{span:24}},[t.showRow?a("div",[a("a-checkbox",{key:o,attrs:{value:t.store_id,checked:-1!=e.grouplList1.indexOf(t.store_id)},on:{change:function(a){return e.getStoreId(a,t)}}},[e._v(" "+e._s(t.name)+" ")]),t.package_list&&t.package_list.length?[a("a-col",{attrs:{span:24}},[a("a-radio-group",{attrs:{name:"radioGroup"},on:{change:function(a){return e.onExpandedRowChange(a,t)}},model:{value:e.radio_check,callback:function(t){e.radio_check=t},expression:"radio_check"}},e._l(t.package_list,(function(t){return a("a-radio",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)]:e._e()],2):e._e()])})),1)],1),a("a-row",{staticClass:"text-right"},[[a("a-pagination",{attrs:{total:e.total,"show-less-items":"",hideOnSinglePage:""},on:{change:e.pageChange},model:{value:e.modalSearchForm.page,callback:function(t){e.$set(e.modalSearchForm,"page",t)},expression:"modalSearchForm.page"}})]],2)]:e._e()]],2)],1)},r=[],i=(a("d3b7"),a("159b"),a("b0c0"),a("a434"),a("a9e3"),a("4de4"),a("d81d"),a("c740"),a("a15b"),a("4b77")),s=a("da05"),n=a("290c"),l={components:{ARow:n["a"],ACol:s["b"]},props:{visible:{type:Boolean,default:!1},storeIdArr:{type:[Array,Object],default:function(){}}},watch:{visible:function(e,t){this.checkAll=!1,this.indeterminate=!1,this.grouplList1=[],this.storeIds=[],this.dialogVisible=e,this.getAllArea(),this.selectStoreList()}},mounted:function(){this.dialogVisible=this.visible,this.getAllArea(),this.selectStoreList()},data:function(){return{checkAll:!0,indeterminate:!0,radio_check:[],total:0,grouplList1:[],showHeader:!1,dialogVisible:!1,areaList:[],searchForm:{storeIdArray:[],areaList:[]},storeIds:[],modalSearchForm:{province_id:"",city_id:"",area_id:"",keyword:"",page:1},columns:[{dataIndex:"name",slots:{title:"name"},align:"center"}],modalTableData:[],curStoreList:[],modalSelectedRowKeys:[],expandedRowKeys:[]}},methods:{onCheckAllChange:function(e){var t=this;e.target.checked?(this.checkAll=!0,this.indeterminate=!0,this.modalTableData.forEach((function(e){e.show=!0,-1==t.grouplList1.indexOf(e.store_id)&&(t.grouplList1.push(e.store_id),t.storeIds.push({store_id:e.store_id,package_id:"",name:e.name}))}))):(this.modalTableData.forEach((function(e){e.show=!1;var a=t.grouplList1.indexOf(e.store_id);a>-1&&(t.grouplList1.splice(a,1),t.storeIds.splice(a,1))})),this.checkAll=!1,this.indeterminate=!1)},pageChange:function(e,t){this.modalSearchForm.page=e,this.modalTableData=this.modalTableDataGet(this.modalTableData,this.modalSearchForm.page)},getStoreId:function(e,t){if(e.target.checked)this.grouplList1.push(e.target.value),this.storeIds.push({store_id:t.store_id,package_id:"",name:t.name}),t.show=!0;else{var a=this.grouplList1.indexOf(e.target.value);a>-1&&(this.grouplList1.splice(a,1),this.storeIds.splice(a,1)),t.show=!1}this.grouplList1.length==this.modalTableData.length?(this.indeterminate=!0,this.checkAll=!0):(this.indeterminate=!1,this.checkAll=!1)},modalTableDataGet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=[];if(e&&e.length){var r=(Number(t)-1)*a,i=Number(t)*a-1>this.total?this.total:Number(t)*a-1;o=e.filter((function(e,t){return e.showRow=!1,t>=r&&t<=i&&(e.showRow=!0),e}))}return o},selectStoreList:function(){var e=this,t={province_id:this.modalSearchForm.province_id,city_id:this.modalSearchForm.city_id,area_id:this.modalSearchForm.area_id,keyword:this.modalSearchForm.keyword,page:0};this.request(i["a"].getMerchantStoreList,t).then((function(t){if(t.list&&t.list.length?e.modalTableData=e.modalTableDataGet(t.list,e.modalSearchForm.page):e.modalTableData=[],e.total=t.total,0==e.storeIdArr.length)e.modalTableData.forEach((function(t){var a=e.grouplList1.indexOf(t.store_id);-1==a&&(e.grouplList1.push(t.store_id),e.storeIds.push({store_id:t.store_id,package_id:"",name:t.name}))})),e.checkAll=!0,e.indeterminate=!0;else{var a=0;e.storeIdArr.forEach((function(t){var o=e.grouplList1.indexOf(t.store_id);-1==o&&(e.grouplList1.push(t.store_id),e.storeIds.push({store_id:t.store_id,package_id:t.package_id,name:t.name})),e.modalTableData=e.modalTableData.map((function(e){return t.store_id==e.store_id&&(e.show=!0,a+=1),e}))})),a!=e.modalTableData.length?(e.checkAll=!1,e.indeterminate=!1):(e.checkAll=!0,e.indeterminate=!0)}}))},getAllArea:function(){var e=this;this.request(i["a"].getAllArea).then((function(t){e.areaList=t}))},onAreaChange:function(e){this.modalSearchForm.province_id=e[0],this.modalSearchForm.city_id=e[1],this.modalSearchForm.area_id=e[2],this.selectStoreList()},onExpandedRowChange:function(e,t){var a=t.store_id,o=e.target.value,r=this.storeIds.findIndex((function(e){return e.store_id==a}));r>-1?this.storeIds[r].package_id=o:(this.storeIds.push({store_id:a,package_id:o||"",name:t.name}),this.radio_check.push(o))},chooseStoreOk:function(){this.$set(this.searchForm,"storeIdArray",this.grouplList1);var e=[],t="";this.modalTableData&&this.modalTableData.length?this.storeIds.forEach((function(a){e.push(a.name),t=e.filter((function(e){return e})).join(",")})):this.storeIds=[],this.$emit("submit",{storeName:t,storeIds:this.storeIds}),this.chooseStoreCancel()},chooseStoreCancel:function(){this.modalTableData=[],this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible),this.$set(this.modalSearchForm,"keyword",""),this.$set(this.modalSearchForm,"page",1),this.$set(this.modalSearchForm,"province_id",""),this.$set(this.modalSearchForm,"city_id",""),this.$set(this.modalSearchForm,"area_id",""),this.$set(this.searchForm,"areaList",[])},onModalSelectChange:function(e){var t=this;this.expandedRowKeys=e,this.storeIds=[],this.modalSelectedRowKeys=e,this.modalSelectedRowKeys.forEach((function(e){t.storeIds.push({store_id:e,package_id:""})}))}}},c=l,d=(a("9469"),a("2877")),u=Object(d["a"])(c,o,r,!1,null,"6e2d32d5",null);t["default"]=u.exports},4928:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form-model-item",{staticClass:"mb-10",attrs:{label:"标签组",labelCol:{span:3}}},[a("a-radio-group",{on:{change:e.goodsTagGroupChange},model:{value:e.labelGroup,callback:function(t){e.labelGroup=t},expression:"labelGroup"}},e._l(e.goodsTagGroupList,(function(t,o){return a("a-radio",{key:o,staticStyle:{"margin-bottom":"20px"},attrs:{value:t.id,disabled:!t.id}},[a("a-input",{staticStyle:{width:"100px"},attrs:{placeholder:"标签名"},on:{blur:function(a){return e.addLabelOpt(a,"1",t)},change:function(t){return e.addLabelChange()}},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"groupItem.name"}})],1)})),1),a("a-button",{staticClass:"cr-primary",staticStyle:{padding:"0 10px","border-color":"#1890ff"},attrs:{icon:"plus"},on:{click:e.addTagGroup}},[e._v(" 新增 ")])],1),e.showTags?a("a-form-model-item",{attrs:{label:"标签",labelCol:{span:3}}},[a("a-checkbox-group",{on:{change:e.goodsTagChange},model:{value:e.labelIds,callback:function(t){e.labelIds=t},expression:"labelIds"}},e._l(e.goodsTagList,(function(t,o){return a("a-checkbox",{key:o,staticStyle:{"margin-bottom":"20px"},attrs:{value:t.id}},[a("a-input",{staticStyle:{width:"100px"},attrs:{placeholder:"标签名"},on:{blur:function(a){return e.addLabelOpt(a,"2",t)},change:function(t){return e.addLabelChange()}},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1)})),1),a("a-button",{staticClass:"cr-primary",staticStyle:{padding:"0 10px","border-color":"#1890ff"},attrs:{icon:"plus"},on:{click:e.addTag}},[e._v(" 新增 ")])],1):e._e()],1)},r=[],i=(a("d3b7"),a("159b"),a("498a"),a("4b77")),s={props:{labelInfo:{type:[String,Object],default:""}},data:function(){return{labelGroup:this.labelInfo&&this.labelInfo.labelGroup?this.labelInfo.labelGroup:"",labelIds:this.labelInfo&&this.labelInfo.labelIds?this.labelInfo.labelIds:[],goodsTagGroupList:[],currentTagGroupIndex:0,showTags:!(!this.labelInfo||!this.labelInfo.labelGroup),goodsTagList:[],labelInfoForm:[],checkAddLabelChange:!1}},watch:{labelInfo:{immediate:!0,handler:function(e){e&&(e.labelGroup&&(this.showTags=!0,this.getGoodsTagList()),this.$set(this,"labelGroup",e.labelGroup||""),this.$set(this,"labelIds",e.labelIds||[]))}},labelGroup:{immediate:!0,handler:function(e){e&&this.getGoodsTagList()}}},mounted:function(){this.getLabelList()},methods:{addTagGroup:function(){this.goodsTagGroupList.push({id:"",name:"",child:[]})},addTag:function(){var e=this;this.goodsTagGroupList.length&&this.goodsTagGroupList.forEach((function(t,a){t.id==e.labelGroup&&(t.child||(t.child=[]),t.child.push({id:"",name:""}),e.$set(e.goodsTagGroupList,a,t),e.getGoodsTagList())}))},goodsTagGroupChange:function(e){this.showTags=!0;var t=e.target.value;this.currentTagGroupIndex=t,this.labelInfoForm=this.labelInfoForm?this.labelInfoForm:{},this.$set(this.labelInfoForm,"labelGroup",e.target.value),this.$emit("getLabelGroup",this.labelInfoForm),this.getGoodsTagList()},getGoodsTagList:function(){var e=this;this.goodsTagGroupList.length&&this.goodsTagGroupList.forEach((function(t){t.id==e.labelGroup&&(e.goodsTagList=t.child)}))},goodsTagChange:function(e){console.log(e,"labelIds==labelIds==labelIds"),this.$set(this.labelInfoForm,"labelIds",e),this.$emit("getLabelGroup",this.labelInfoForm)},getLabelList:function(){var e=this;this.request(i["a"].getLabelList).then((function(t){e.goodsTagGroupList=t.list,!e.labelGroup&&e.goodsTagGroupList&&e.goodsTagGroupList.length&&(e.labelGroup=e.goodsTagGroupList[0]["id"],e.getGoodsTagList())}))},addLabelOpt:function(e,t,a){var o=this;if(a.id&&""==e.target.value.trim())return this.$message.error("请输入标签名称"),void this.$emit("checkLabelReslut");if(""!=e.target.value.trim()&&this.checkAddLabelChange){var r={name:e.target.value,fid:"2"==t?this.labelGroup:"",id:a.id};this.request(i["a"].addLabel,r).then((function(e){o.checkAddLabelChange=!1,a.id||o.getLabelList()})).catch((function(e){o.checkAddLabelChange=!1}))}},addLabelChange:function(){this.checkAddLabelChange=!0}}},n=s,l=a("2877"),c=Object(l["a"])(n,o,r,!1,null,"48b66c74",null);t["default"]=c.exports},4964:function(e,t,a){},"4b77":function(e,t,a){"use strict";var o,r=a("ade3"),i=(o={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(r["a"])(o,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(r["a"])(o,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(r["a"])(o,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(r["a"])(o,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(r["a"])(o,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(r["a"])(o,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(r["a"])(o,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(r["a"])(o,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(r["a"])(o,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(r["a"])(o,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(r["a"])(o,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(r["a"])(o,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(r["a"])(o,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(r["a"])(o,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(r["a"])(o,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(r["a"])(o,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(r["a"])(o,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(r["a"])(o,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(r["a"])(o,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(r["a"])(o,"noteInfo","/group/merchant.goods/noteInfo"),Object(r["a"])(o,"orderDetail","/group/merchant.goods/orderDetail"),Object(r["a"])(o,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(r["a"])(o,"getRatioList","/group/merchant.goods/getRatioList"),Object(r["a"])(o,"getGoodsCouponList","/group/merchant.goods/getGoodsCouponList"),Object(r["a"])(o,"couponDetail","/group/merchant.goods/couponDetail"),Object(r["a"])(o,"couponVerify","/group/merchant.goods/couponVerify"),Object(r["a"])(o,"exportGoodsCouponList","/group/merchant.goods/exportGoodsCouponList"),Object(r["a"])(o,"groupPackageLists","/group/merchant.goods/groupPackageLists"),Object(r["a"])(o,"showGroupPackage","/group/merchant.goods/showGroupPackage"),Object(r["a"])(o,"saveGroupPackage","/group/merchant.goods/saveGroupPackage"),Object(r["a"])(o,"delGroupPackage","/group/merchant.goods/delGroupPackage"),Object(r["a"])(o,"delPackageBindGroup","/group/merchant.goods/delPackageBindGroup"),o);t["a"]=i},"6b5c":function(e,t,a){},"7b3f":function(e,t,a){"use strict";var o={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=o},"81cb":function(e,t,a){"use strict";a("6b5c")},9469:function(e,t,a){"use strict";a("4964")},a301:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("a-page-header",{staticClass:"page-header",attrs:{title:e.goodTitle}}),a("a-form-model",{ref:"ruleForm",attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-tabs",{attrs:{activeKey:e.activeKey},on:{change:e.onTabChange}},[a("a-tab-pane",{key:1,attrs:{tab:"基本信息"}},[a("a-card",{attrs:{bordered:!1}},[a("a-form-model-item",{attrs:{label:"商品类型",colon:!1}},[a("span",[e._v("课程预约")])]),a("a-form-model-item",{attrs:{label:"商品名称",colon:!1,wrapperCol:{span:6},prop:"s_name",rules:{required:!0,message:"商品名称不能为空",trigger:""}}},[a("a-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.formData.s_name,callback:function(t){e.$set(e.formData,"s_name",t)},expression:"formData.s_name"}})],1),a("a-form-model-item",{attrs:{label:"商品标签",colon:!1,help:"店铺主页中用于切换查看不同商品标签"}},[a("add-goods-tags",{attrs:{labelInfo:{labelGroup:e.formData.label_group||"",labelIds:e.formData.label_ids||[]}},on:{getLabelGroup:e.getLabelId}})],1),a("a-form-model-item",{attrs:{label:"原价",colon:!1,wrapperCol:{span:6},prop:"old_price",rules:{required:!0,message:"请输入商品原价",trigger:""}}},[a("a-input-number",{staticStyle:{width:"260px"},attrs:{min:0,placeholder:"请输入商品原价"},model:{value:e.formData.old_price,callback:function(t){e.$set(e.formData,"old_price",t)},expression:"formData.old_price"}})],1),a("a-form-model-item",{attrs:{label:"团购价",colon:!1,wrapperCol:{span:18},prop:"price",rules:{required:!0,message:"请输入商品团购价",trigger:""}}},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-input-number",{staticStyle:{width:"260px"},attrs:{min:0,placeholder:"请输入商品团购价"},model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}})],1),a("a-col",{attrs:{span:10}},[a("a-radio-group",{staticStyle:{"margin-left":"20px"},attrs:{"default-value":1},model:{value:e.formData.is_invoice,callback:function(t){e.$set(e.formData,"is_invoice",t)},expression:"formData.is_invoice"}},e._l(e.isInvoiceList,(function(t){return a("a-radio",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1)],1)],1),a("a-form-model-item",{attrs:{label:"图片",colon:!1,help:"第一张将做为主图片！最多上传5张图片！图片建议为900*500"}},[a("div",{staticClass:"clearfix"},[a("a-upload",{attrs:{name:"reply_pic",action:e.uploadImg,"list-type":"picture-card","file-list":e.imgUploadList,multiple:!0},on:{preview:e.handlePreview,change:e.handleImgChange}},[e.imgUploadList.length<5?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleImgCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),a("a-form-model-item",{attrs:{label:"课程开始时间",colon:!1,help:"到了团购开始时间，商品才会显示！",prop:"begin_time",rules:{required:!0,message:"请选择团购开始时间",trigger:["blur","change"]}}},[a("a-date-picker",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择时间","show-time":"",format:"YYYY-MM-DD HH:mm:ss",value:e.date_moment(e.formData.begin_time,e.dateFormat),"disabled-date":e.disabledStartDate,allowClear:!0,getCalendarContainer:function(e){return e.parentNode}},on:{change:e.beginTimeChange}})],1),a("a-form-model-item",{attrs:{label:"课程结束时间",colon:!1,help:"超过团购结束时间，商品不再显示售卖！",prop:"end_time",rules:{required:!0,message:"请选择团购结束时间",trigger:["blur","change"]}}},[a("a-date-picker",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择时间","show-time":"",format:"YYYY-MM-DD HH:mm:ss",value:e.date_moment(e.formData.end_time,e.dateFormat),"disabled-date":e.disabledEndDate,allowClear:!0,getCalendarContainer:function(e){return e.parentNode}},on:{change:e.endTimeChange}})],1),a("a-form-model-item",{attrs:{label:"适用店铺",colon:!1,rules:{required:!0}}},[a("span",[e._v(e._s(e.storeStrName||"未选择店铺"))]),a("span",{staticClass:"cr-primary ml-20 pointer",on:{click:e.selectStore}},[e._v("设置")])]),a("choose-store",{attrs:{visible:e.selectStoreVisible,storeIdArr:e.formData.store_ids},on:{"update:visible":function(t){e.selectStoreVisible=t},submit:e.onStoreSelect}}),a("a-form-model-item",{attrs:{label:"商品详情",colon:!1}},[a("span",{staticClass:"cr-primary pointer",on:{click:e.insertTab}},[e._v("插入套餐表格")]),a("rich-text",{attrs:{info:e.formData.content},on:{"update:info":function(t){return e.$set(e.formData,"content",t)}}})],1),a("a-modal",{attrs:{title:"输入插入表格行数",width:400,maskClosable:!1},on:{ok:e.onTableOk,cancel:e.onTableCancel},model:{value:e.modalTable,callback:function(t){e.modalTable=t},expression:"modalTable"}},[a("a-input",{model:{value:e.tableLineNum,callback:function(t){e.tableLineNum=t},expression:"tableLineNum"}})],1)],1)],1),a("a-tab-pane",{key:2,attrs:{tab:"其他设置","force-render":""}},[a("a-divider",{staticStyle:{height:"10px","background-color":"#eef0f3",margin:"0"}}),a("a-card",{attrs:{bordered:!1}},[a("span",{staticClass:"fs-16 pb-10 pr-20",staticStyle:{height:"24px"}},[e._v("补充信息")]),a("a-divider",{staticStyle:{margin:"10px 0"}}),a("a-form-model-item",{attrs:{label:"人群年龄",colon:!1,labelCol:{span:3}}},[a("a-input-number",{attrs:{placeholder:"请输入"},model:{value:e.formData.age_start,callback:function(t){e.$set(e.formData,"age_start",t)},expression:"formData.age_start"}}),a("span",[e._v("至")]),a("a-input-number",{attrs:{placeholder:"请输入"},model:{value:e.formData.age_end,callback:function(t){e.$set(e.formData,"age_end",t)},expression:"formData.age_end"}}),a("span",[e._v("岁")]),a("a-checkbox",{staticStyle:{"margin-left":"20px"},attrs:{checked:1==e.formData.is_full_age},on:{change:e.onFullAgeChange}},[e._v(" 全龄段")])],1),a("a-form-model-item",{attrs:{label:"学习基础",colon:!1,labelCol:{span:3}}},[a("a-checkbox-group",{on:{change:e.onStudyBasicChange},model:{value:e.formData.study_basic,callback:function(t){e.$set(e.formData,"study_basic",t)},expression:"formData.study_basic"}},e._l(e.studyBasicList,(function(t){return a("a-checkbox",{key:t.id,attrs:{value:Number(t.id)}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"上课人数",colon:!1,labelCol:{span:3}}},[a("a-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.formData.study_person_start,callback:function(t){e.$set(e.formData,"study_person_start",t)},expression:"formData.study_person_start"}}),a("span",[e._v("至")]),a("a-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.formData.study_person_end,callback:function(t){e.$set(e.formData,"study_person_end",t)},expression:"formData.study_person_end"}}),a("span",[e._v("人")])],1),a("a-form-model-item",{attrs:{label:"课时节数",colon:!1,labelCol:{span:3}}},[a("a-input-number",{staticStyle:{width:"200px"},attrs:{min:0,placeholder:"请输入节数"},model:{value:e.formData.course_nums,callback:function(t){e.$set(e.formData,"course_nums",t)},expression:"formData.course_nums"}})],1)],1),a("a-divider",{staticStyle:{height:"10px","background-color":"#eef0f3"}}),a("a-card",{attrs:{bordered:!1}},[a("p",{staticClass:"fs-16"},[e._v("会员优惠")]),a("a-divider",{staticStyle:{margin:"10px 0"}}),a("p",{staticClass:"fs-12"},[e._v(" 说明：必须设置一个会员等级优惠类型和优惠类型对应的数值，我们将结合优惠类型和所填的数量来计算该商品会员等级的优惠幅度！ ")]),e._l(e.levelInfoList,(function(t,o){return a("div",{key:t.lid},[a("a-form-model-item",{attrs:{label:t.lname,colon:!1,labelCol:{span:3}}},[a("span",{staticClass:"mr-10"},[e._v("优惠类型")]),a("a-select",{staticClass:"mr-20",staticStyle:{width:"150px"},attrs:{disabled:e.discount_sync_status},on:{change:function(a){return e.onDiscountTypeChange(a,o,t)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"curLevel.type"}},e._l(e.discountType,(function(t){return a("a-select-option",{key:t.value},[e._v(" "+e._s(t.label)+" ")])})),1),a("a-input",{staticStyle:{"margin-left":"20px",width:"200px"},attrs:{placeholder:"请输入对应优惠金额",disabled:e.discount_sync_status},model:{value:t.vv,callback:function(a){e.$set(t,"vv",a)},expression:"curLevel.vv"}})],1)],1)}))],2),a("a-divider",{staticStyle:{height:"10px","background-color":"#eef0f3"}}),a("a-card",{attrs:{bordered:!1}},[a("span",{staticClass:"fs-16 pb-10 pr-20",staticStyle:{height:"24px"}},[e._v("状态设置")]),a("a-divider",{staticStyle:{margin:"10px 0"}}),a("a-form-model-item",{attrs:{label:"团购状态",colon:!1,labelCol:{span:3},help:"为了方便用户能查找到以前的订单，团购无法删除！"}},[a("a-radio-group",{attrs:{defaultValue:1},on:{change:function(t){return e.onStatusChange(e.formData.status)}},model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},[a("a-radio",{attrs:{value:1}},[e._v(" 开启")]),a("a-radio",{staticStyle:{"margin-right":"10px"},attrs:{value:0}},[e._v(" 关闭")])],1)],1)],1)],1)],1)],1),a("div",{staticClass:"page-header"},[a("a-button",{staticClass:"ml-20 mt-20 mb-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v(" 保存")])],1)],1)},r=[],i=a("2909"),s=a("1da1"),n=(a("96cf"),a("d3b7"),a("d81d"),a("b0c0"),a("ac1f"),a("1276"),a("a9e3"),a("159b"),a("a15b"),a("7b3f")),l=a("4b77"),c=a("6ec16"),d=a("2b69"),u=a("4928"),p=a("c1df"),m=a.n(p);function h(e){return new Promise((function(t,a){var o=new FileReader;o.readAsDataURL(e),o.onload=function(){return t(o.result)},o.onerror=function(e){return a(e)}}))}var g={components:{RichText:c["a"],ChooseStore:d["default"],AddGoodsTags:u["default"]},data:function(){return{discount_sync_status:!1,goodTitle:"",labelCol:{span:4},wrapperCol:{span:14},selectStoreVisible:!1,activeKey:1,formData:{group_id:0,s_name:"",label_group:"",label_ids:[],old_price:"",price:"",is_invoice:0,pic:[],begin_time:"",end_time:"",appoint_time_type:0,appoint_time:0,store_ids:[],age_start:1,age_end:1,is_full_age:"",study_basic:[],study_person_start:"",study_person_end:"",leveloff:[],status:1,content:""},currentIndex:0,previewVisible:!1,previewImage:"",imgUploadList:[],uploadImg:"/v20/public/index.php"+n["a"].uploadImg+"?upload_dir=/group",isInvoiceList:[{value:1,label:"提供发票"},{value:0,label:"不提供发票"}],appointTimeTypelist:[{value:0,label:"天"},{value:1,label:"小时"}],appoint_type:0,storeStrName:"",studyBasicList:[{id:1,name:"零基础"},{id:2,name:"初级"},{id:3,name:"中级"},{id:4,name:"高级"}],levelInfoList:[],discountType:[{value:0,label:"无优惠"},{value:1,label:"百分比（%）"},{value:2,label:"立减"}],dateFormat:"YYYY-MM-DD HH:mm:ss",modalTable:!1,tableLineNum:"",canSave:!0}},watch:{$route:function(e){"/merchant/merchant.group/courseAppoint"==e.path&&(e.query.group_id?this.getCourseAppointDetail():Object.assign(this.$data,this.$options.data()))}},mounted:function(){this.activeKey=1,this.getGroupEditInfo(),this.$route.query.group_id?(this.getCourseAppointDetail(),this.goodTitle="编辑商品"):(Object.assign(this.$data,this.$options.data()),this.goodTitle="添加商品")},activated:function(){this.activeKey=1,this.getGroupEditInfo(),this.$route.query.group_id?this.getCourseAppointDetail():Object.assign(this.$data,this.$options.data())},methods:{moment:m.a,date_moment:function(e,t){if(e)return m()(e,t)},disabledStartDate:function(e){var t=this.formData.end_time;return e&&t?e.valueOf()>t.valueOf():e&&e<m()().subtract(1,"days")},disabledEndDate:function(e){var t=this.formData.begin_time;return t?t.valueOf()>=e.valueOf():e&&e<m()().subtract(1,"days")},onTabChange:function(e){this.activeKey=e},handleImgCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,h(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},handleImgChange:function(e){var t=this,a=Object(i["a"])(e.fileList);this.imgUploadList=a;var o=[];this.imgUploadList.map((function(a){if("done"===a.status&&"1000"==a.response.status){var r=a.response.data;o.push(r.full_url),t.$set(t.formData,"pic",o)}else"error"===e.file.status&&t.$message.error("".concat(e.file.name," 上传失败！"))}))},beginTimeChange:function(e,t){this.formData.begin_time=t},endTimeChange:function(e,t){this.formData.end_time=t},getLabelId:function(e){var t=e.labelGroup,a=e.labelIds;this.formData.label_group=t,this.formData.label_ids=a},appointTypeChange:function(e){0==e.target.value&&(this.formData.appoint_time=0)},onPackagesChange:function(e){this.formData.packageid=e},selectStore:function(){this.selectStoreVisible=!0},insertTab:function(){this.modalTable=!0},onTableOk:function(){for(var e='<tr class="firstRow">\n                    <td width="102" valign="top" style="word-break: break-all;">套餐内容<br /></td>\n                    <td width="102" valign="top" style="word-break: break-all;">单价<br /></td>\n                    <td width="102" valign="top" style="word-break: break-all;">数量/规格</td>\n                    <td width="102" valign="top" style="word-break: break-all;">小计</td>\n                  </tr>',t='<tr>\n                    <td width="102" valign="top" style="word-break: break-all;">内容1</td>\n                    <td width="102" valign="top" style="word-break: break-all;">￥</td>\n                    <td width="102" valign="top" style="word-break: break-all;">1份</td>\n                    <td width="102" valign="top" style="word-break: break-all;">￥</td>\n                  </tr>',a='<td width="102" valign="top" style="word-break: break-all;" rowspan="1" colspan="4">\n                      <p style="text-align: right;">价值：￥&nbsp; &nbsp;&nbsp; &nbsp;团购价：￥</p>\n                     </td>',o=0;o<this.tableLineNum;o++)e+=t;var r=e+a;this.formData.content&&(r=this.formData.content+e+a),this.$set(this.formData,"content",r),this.modalTable=!1},onTableCancel:function(){this.modalTable=!1},onStoreSelect:function(e){this.selectStoreVisible=!1;var t=e.storeName,a=e.storeIds;this.storeStrName=t,this.formData.store_ids=a},onFullAgeChange:function(e){var t=e.target.checked;this.formData.is_full_age=t?1:0},onStudyBasicChange:function(e){this.formData.study_basic=e},getGroupEditInfo:function(){var e=this;this.request(l["a"].getGroupEditInfo,"").then((function(t){t.user_level.length&&(e.levelInfoList=t.user_level),e.discount_sync_status=t.discount_sync_status}))},onDiscountTypeChange:function(e,t,a){var o=this.levelInfoList[t];o.type=e,o.vv=a.vv,this.$set(this.levelInfoList,t,o)},onStatusChange:function(e){this.formData.status=e},getCourseAppointDetail:function(){var e=this,t={group_id:this.$route.query.group_id};1*this.$route.query.group_id>0&&this.request(l["a"].getCourseAppointDetail,t).then((function(t){if(t.label_ids=t.label_ids&&t.label_ids.length?t.label_ids.split(","):[],e.formData.s_name=t.s_name,e.formData.label_group=t.label_group||"",e.formData.label_ids=t.label_ids&&t.label_ids.length?t.label_ids.map((function(e){return Number(e)})):[],e.formData.old_price=Number(t.old_price),e.formData.price=Number(t.price),e.formData.is_invoice=t.is_invoice,e.formData.pic=t.image||[],t.image){e.imgUploadList=[];for(var a=0;a<t.image.length;a++){var o={uid:a,name:"image_"+a,status:"done",url:t.image[a]};e.imgUploadList.push(o)}}if(e.formData.begin_time=t.begin_time,e.formData.end_time=t.end_time,0==t.appoint_time?(e.appoint_type=0,e.formData.appoint_time=0):(e.appoint_type=1,e.formData.appoint_time_type=t.appoint_time_type),t.store.ids){var r=t.store.ids?t.store.ids:[],i=t.store.detail?t.store.detail:[],s=[];r.forEach((function(t){i.forEach((function(a){t.store_id==a.store_id&&(s.push(a.name),t.name=a.name,e.storeStrName=s.join(","))}))})),e.$set(e.formData,"store_ids",r)}e.formData.content=t.content,e.formData.is_full_age=t.is_full_age,e.formData.age_start=t.age_start,e.formData.age_end=t.age_end,t.study_basic&&t.study_basic.length&&(e.formData.study_basic=t.study_basic.map((function(e){return Number(e)}))),e.formData.study_person_start=t.study_person_start,e.formData.study_person_end=t.study_person_end,e.formData.course_nums=t.course_nums,e.levelInfoList=t.leveloff_list||[],e.formData.status=t.status}))},submitForm:function(){var e=this;if(this.canSave){if(!this.formData.s_name)return this.$message.error("商品名称不能为空！"),this.activeKey=1,!1;if(f(this.formData.old_price))return this.$message.error("请输入商品原价！"),this.activeKey=1,!1;if(f(this.formData.price))return this.$message.error("请输入商品团购价！"),this.activeKey=1,!1;if(!this.formData.pic||this.formData.pic&&!this.formData.pic.length)return this.$message.error("请上传图片！"),this.activeKey=1,!1;if(f(this.formData.begin_time))return this.$message.error("请选择课程开始时间！"),this.activeKey=1,!1;if(f(this.formData.end_time))return this.$message.error("请选择课程结束时间！"),this.activeKey=1,!1;if(1==this.appoint_type&&f(this.formData.appoint_time))return this.$message.error("请输入可提前预约时长！"),this.activeKey=1,!1;if(!this.formData.store_ids.length)return this.$message.error("请选择适用店铺！"),this.activeKey=1,!1;this.formData.leveloff=this.levelInfoList,this.$refs.ruleForm.validate((function(t){if(!t)return!1;e.canSave=!1;var a={};for(var o in e.formData)a[o]=e.formData[o];a["group_id"]=e.$route.query.group_id||"",e.request(l["a"].courseAppoint,a).then((function(t){e.activeKey="1",e.$route.query.group_id||Object.assign(e.$data,e.$options.data()),e.$message.success("提交成功！",2,(function(){e.$router.push({path:"/merchant/merchant.group/groupList"}),e.$message.destroy(),e.canSave=!0}))})).catch((function(t){e.canSave=!0}))}))}}}};function f(e){return"undefined"===typeof e||null===e||""===e}var b=g,_=(a("81cb"),a("2877")),v=Object(_["a"])(b,o,r,!1,null,"6d7d147c",null);t["default"]=v.exports}}]);