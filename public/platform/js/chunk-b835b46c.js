(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b835b46c","chunk-8acf61ec"],{"2b69":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-modal",{attrs:{visible:t.dialogVisible,title:"选择店铺",centered:"",maskClosable:!1,width:600},on:{ok:t.chooseStoreOk,cancel:t.chooseStoreCancel}},[[a("a-form-model",{attrs:{layout:"inline",model:t.modalSearchForm,"label-col":{span:2},"wrapper-col":{span:22}}},[a("a-row",[a("a-col",{staticClass:"mr-10",attrs:{span:10}},[a("a-cascader",{attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:t.areaList,placeholder:"请选择省市区"},on:{change:t.onAreaChange},model:{value:t.searchForm.areaList,callback:function(e){t.$set(t.searchForm,"areaList",e)},expression:"searchForm.areaList"}})],1),a("a-col",{staticClass:"mr-20",attrs:{span:10}},[a("a-input",{attrs:{placeholder:"输入店铺名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectStoreList()}},model:{value:t.modalSearchForm.keyword,callback:function(e){t.$set(t.modalSearchForm,"keyword",e)},expression:"modalSearchForm.keyword"}})],1),a("a-col",{attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.selectStoreList()}}},[t._v(" 查询 ")])],1)],1)],1),t.modalTableData?[a("a-checkbox",{staticStyle:{"padding-left":"7px",margin:"10px 0 5px"},attrs:{indeterminate:t.indeterminate,checked:t.checkAll},on:{change:function(e){return t.onCheckAllChange(e)}}},[t._v("全选")]),a("a-row",[a("a-col",{staticStyle:{"font-size":"20px","padding-left":"7px"},attrs:{span:24}},t._l(t.modalTableData,(function(e,o){return a("a-col",{key:e.store_id,staticStyle:{"line-height":"40px"},attrs:{span:24}},[e.showRow?a("div",[a("a-checkbox",{key:o,attrs:{value:e.store_id,checked:-1!=t.grouplList1.indexOf(e.store_id)},on:{change:function(a){return t.getStoreId(a,e)}}},[t._v(" "+t._s(e.name)+" ")]),e.package_list&&e.package_list.length?[a("a-col",{attrs:{span:24}},[a("a-radio-group",{attrs:{name:"radioGroup"},on:{change:function(a){return t.onExpandedRowChange(a,e)}},model:{value:t.radio_check,callback:function(e){t.radio_check=e},expression:"radio_check"}},t._l(e.package_list,(function(e){return a("a-radio",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)]:t._e()],2):t._e()])})),1)],1),a("a-row",{staticClass:"text-right"},[[a("a-pagination",{attrs:{total:t.total,"show-less-items":"",hideOnSinglePage:""},on:{change:t.pageChange},model:{value:t.modalSearchForm.page,callback:function(e){t.$set(t.modalSearchForm,"page",e)},expression:"modalSearchForm.page"}})]],2)]:t._e()]],2)],1)},s=[],i=(a("d3b7"),a("159b"),a("b0c0"),a("a434"),a("a9e3"),a("4de4"),a("d81d"),a("c740"),a("a15b"),a("4b77")),r=a("da05"),n=a("290c"),c={components:{ARow:n["a"],ACol:r["b"]},props:{visible:{type:Boolean,default:!1},storeIdArr:{type:[Array,Object],default:function(){}}},watch:{visible:function(t,e){this.checkAll=!1,this.indeterminate=!1,this.grouplList1=[],this.storeIds=[],this.dialogVisible=t,this.getAllArea(),this.selectStoreList()}},mounted:function(){this.dialogVisible=this.visible,this.getAllArea(),this.selectStoreList()},data:function(){return{checkAll:!0,indeterminate:!0,radio_check:[],total:0,grouplList1:[],showHeader:!1,dialogVisible:!1,areaList:[],searchForm:{storeIdArray:[],areaList:[]},storeIds:[],modalSearchForm:{province_id:"",city_id:"",area_id:"",keyword:"",page:1},columns:[{dataIndex:"name",slots:{title:"name"},align:"center"}],modalTableData:[],curStoreList:[],modalSelectedRowKeys:[],expandedRowKeys:[]}},methods:{onCheckAllChange:function(t){var e=this;t.target.checked?(this.checkAll=!0,this.indeterminate=!0,this.modalTableData.forEach((function(t){t.show=!0,-1==e.grouplList1.indexOf(t.store_id)&&(e.grouplList1.push(t.store_id),e.storeIds.push({store_id:t.store_id,package_id:"",name:t.name}))}))):(this.modalTableData.forEach((function(t){t.show=!1;var a=e.grouplList1.indexOf(t.store_id);a>-1&&(e.grouplList1.splice(a,1),e.storeIds.splice(a,1))})),this.checkAll=!1,this.indeterminate=!1)},pageChange:function(t,e){this.modalSearchForm.page=t,this.modalTableData=this.modalTableDataGet(this.modalTableData,this.modalSearchForm.page)},getStoreId:function(t,e){if(t.target.checked)this.grouplList1.push(t.target.value),this.storeIds.push({store_id:e.store_id,package_id:"",name:e.name}),e.show=!0;else{var a=this.grouplList1.indexOf(t.target.value);a>-1&&(this.grouplList1.splice(a,1),this.storeIds.splice(a,1)),e.show=!1}this.grouplList1.length==this.modalTableData.length?(this.indeterminate=!0,this.checkAll=!0):(this.indeterminate=!1,this.checkAll=!1)},modalTableDataGet:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=[];if(t&&t.length){var s=(Number(e)-1)*a,i=Number(e)*a-1>this.total?this.total:Number(e)*a-1;o=t.filter((function(t,e){return t.showRow=!1,e>=s&&e<=i&&(t.showRow=!0),t}))}return o},selectStoreList:function(){var t=this,e={province_id:this.modalSearchForm.province_id,city_id:this.modalSearchForm.city_id,area_id:this.modalSearchForm.area_id,keyword:this.modalSearchForm.keyword,page:0};this.request(i["a"].getMerchantStoreList,e).then((function(e){if(e.list&&e.list.length?t.modalTableData=t.modalTableDataGet(e.list,t.modalSearchForm.page):t.modalTableData=[],t.total=e.total,0==t.storeIdArr.length)t.modalTableData.forEach((function(e){var a=t.grouplList1.indexOf(e.store_id);-1==a&&(t.grouplList1.push(e.store_id),t.storeIds.push({store_id:e.store_id,package_id:"",name:e.name}))})),t.checkAll=!0,t.indeterminate=!0;else{var a=0;t.storeIdArr.forEach((function(e){var o=t.grouplList1.indexOf(e.store_id);-1==o&&(t.grouplList1.push(e.store_id),t.storeIds.push({store_id:e.store_id,package_id:e.package_id,name:e.name})),t.modalTableData=t.modalTableData.map((function(t){return e.store_id==t.store_id&&(t.show=!0,a+=1),t}))})),a!=t.modalTableData.length?(t.checkAll=!1,t.indeterminate=!1):(t.checkAll=!0,t.indeterminate=!0)}}))},getAllArea:function(){var t=this;this.request(i["a"].getAllArea).then((function(e){t.areaList=e}))},onAreaChange:function(t){this.modalSearchForm.province_id=t[0],this.modalSearchForm.city_id=t[1],this.modalSearchForm.area_id=t[2],this.selectStoreList()},onExpandedRowChange:function(t,e){var a=e.store_id,o=t.target.value,s=this.storeIds.findIndex((function(t){return t.store_id==a}));s>-1?this.storeIds[s].package_id=o:(this.storeIds.push({store_id:a,package_id:o||"",name:e.name}),this.radio_check.push(o))},chooseStoreOk:function(){this.$set(this.searchForm,"storeIdArray",this.grouplList1);var t=[],e="";this.modalTableData&&this.modalTableData.length?this.storeIds.forEach((function(a){t.push(a.name),e=t.filter((function(t){return t})).join(",")})):this.storeIds=[],this.$emit("submit",{storeName:e,storeIds:this.storeIds}),this.chooseStoreCancel()},chooseStoreCancel:function(){this.modalTableData=[],this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible),this.$set(this.modalSearchForm,"keyword",""),this.$set(this.modalSearchForm,"page",1),this.$set(this.modalSearchForm,"province_id",""),this.$set(this.modalSearchForm,"city_id",""),this.$set(this.modalSearchForm,"area_id",""),this.$set(this.searchForm,"areaList",[])},onModalSelectChange:function(t){var e=this;this.expandedRowKeys=t,this.storeIds=[],this.modalSelectedRowKeys=t,this.modalSelectedRowKeys.forEach((function(t){e.storeIds.push({store_id:t,package_id:""})}))}}},l=c,u=(a("9469"),a("0c7c")),d=Object(u["a"])(l,o,s,!1,null,"6e2d32d5",null);e["default"]=d.exports},"4b77":function(t,e,a){"use strict";var o,s=a("ade3"),i=(o={addLabel:"/group/merchant.goods/addLabel",getLabelList:"/group/merchant.goods/getLabelList",getMerchantStoreList:"/group/merchant.goods/getMerchantStoreList",getAllArea:"/common/common.area/getAllArea",getGoodsCashingDetail:"/group/merchant.goods/getGoodsCashingDetail",getGroupEditInfo:"/group/merchant.goods/getGroupEditInfo"},Object(s["a"])(o,"getGoodsCashingDetail","/group/merchant.goods/getGoodsCashingDetail"),Object(s["a"])(o,"saveCashingGoods","/group/merchant.goods/submitCashing"),Object(s["a"])(o,"saveNomalGoods","/group/merchant.goods/saveNomalGoods"),Object(s["a"])(o,"getGoodsNormalDetail","/group/merchant.goods/getGoodsNormalDetail"),Object(s["a"])(o,"getGoodsList","/group/merchant.goods/getGoodsList"),Object(s["a"])(o,"courseAppoint","/group/merchant.Goods/courseAppoint"),Object(s["a"])(o,"getCourseAppointDetail","/group/merchant.Goods/getCourseAppointDetail"),Object(s["a"])(o,"setStoreRecommend","/group/merchant.goods/setStoreRecommend"),Object(s["a"])(o,"getStoreRecommend","/group/merchant.goods/getStoreRecommend"),Object(s["a"])(o,"getGoodsOrderList","/group/merchant.goods/getGoodsOrderList"),Object(s["a"])(o,"saveBookingAppoint","/group/merchant.Goods/saveBookingAppoint"),Object(s["a"])(o,"showBookingAppoint","/group/merchant.Goods/showBookingAppoint"),Object(s["a"])(o,"getStoreList","/group/merchant.AppointManage/getStoreList"),Object(s["a"])(o,"getGiftMsg","/group/merchant.AppointManage/getGiftMsg"),Object(s["a"])(o,"updateAppointGift","/group/merchant.AppointManage/updateAppointGift"),Object(s["a"])(o,"getAppointArriveList","/group/merchant.AppointManage/getAppointArriveList"),Object(s["a"])(o,"updateAppointArriveStatus","/group/merchant.AppointManage/updateAppointArriveStatus"),Object(s["a"])(o,"getGoodsOrderDetail","/group/merchant.goods/getGoodsOrderDetail"),Object(s["a"])(o,"orderExportUrl","/group/merchant.goods/exportOrder"),Object(s["a"])(o,"noteInfo","/group/merchant.goods/noteInfo"),Object(s["a"])(o,"orderDetail","/group/merchant.goods/orderDetail"),Object(s["a"])(o,"updateOrderNote","/group/merchant.goods/updateOrderNote"),Object(s["a"])(o,"getRatioList","/group/merchant.goods/getRatioList"),o);e["a"]=i},"7e7c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"booking-appoint"},[a("a-page-header",{attrs:{title:"场次预约"}}),a("a-card",{attrs:{bordered:!1}},[a("a-tabs",{attrs:{activeKey:t.activeKey},on:{change:t.onTabChange}},[a("a-tab-pane",{key:1,attrs:{tab:"基本信息"}},[a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[t._v(" 商品类型：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[t._v(" 场次预约 ")])],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" 场次名称：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入场次名称"},model:{value:t.formData.s_name,callback:function(e){t.$set(t.formData,"s_name",e)},expression:"formData.s_name"}})],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" 场次设置：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[t._l(t.rules,(function(e,o){return a("div",{key:e.rule_index,staticClass:"rule-card"},[a("div",{staticClass:"left"},[a("div",{staticClass:"col"},[a("span",{staticClass:"title"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("时间：")]),a("div",{staticClass:"row-content"},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("a-select",{staticStyle:{width:"80px"},on:{select:function(e){return t.ruleTimeSelectChange("start",o)}},model:{value:e.start_time,callback:function(a){t.$set(e,"start_time",a)},expression:"item.start_time"}},t._l(24,(function(e,o){return a("a-select-option",{key:e,attrs:{value:o}},[t._v(t._s(o>9?o:"0"+o))])})),1),a("span",{staticClass:"unit"},[t._v("时")]),a("span",{staticClass:"unit"},[t._v("至")]),a("a-select",{staticStyle:{width:"80px",margin:"0 10px"},on:{select:function(e){return t.ruleTimeSelectChange("day",o)}},model:{value:e.day,callback:function(a){t.$set(e,"day",a)},expression:"item.day"}},[a("a-select-option",{attrs:{value:1}},[t._v(" 当日 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 次日 ")])],1),a("a-select",{staticStyle:{width:"80px"},on:{select:function(e){return t.ruleTimeSelectChange("end",o)}},model:{value:e.end_time,callback:function(a){t.$set(e,"end_time",a)},expression:"item.end_time"}},t._l(24,(function(e,o){return a("a-select-option",{key:e,attrs:{value:o}},[t._v(t._s(o>9?o:"0"+o))])})),1),a("span",{staticClass:"unit"},[t._v("时")])],1),a("div",[a("a-radio-group",{model:{value:e.use_hours_type,callback:function(a){t.$set(e,"use_hours_type",a)},expression:"item.use_hours_type"}},[a("a-radio",{attrs:{value:0}},[t._v(" 全部时间 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 任选 "),a("a-input-number",{staticStyle:{width:"80px","margin-left":"10px"},attrs:{precision:0,min:0},model:{value:e.use_hours,callback:function(a){t.$set(e,"use_hours",a)},expression:"item.use_hours"}}),a("span",{staticClass:"unit"},[t._v("小时")])],1)],1)],1)])]),a("div",{staticClass:"col"},[a("span",{staticClass:"title"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("数量：")]),a("div",{staticClass:"row-content"},[a("a-input-number",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入数量",precision:0,min:0},model:{value:e.count,callback:function(a){t.$set(e,"count",a)},expression:"item.count"}})],1)]),a("div",{staticClass:"col"},[a("span",{staticClass:"title"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("价格：")]),a("div",{staticClass:"row-content"},[a("a-input-number",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入价格",min:0},model:{value:e.default_price,callback:function(a){t.$set(e,"default_price",a)},expression:"item.default_price"}}),a("a-button",{attrs:{type:"link",disabled:t.calendarDisable(e)},on:{click:function(a){return t.setPriceCalendar(e)}}},[t._v(" 价格日历 ")]),a("div",{staticClass:"help"},[t._v(" 默认价格为该场次的基础价格，设置时间和价格后可在价格日历中设置指定时间的特殊价格 ")])],1)])]),a("div",{staticClass:"right"},[a("a-button",{attrs:{type:"danger",ghost:"",size:"small"},on:{click:function(e){return t.removeRule(o)}}},[t._v(" 删除场次 ")])],1)])})),a("a-button",{attrs:{type:"primary",ghost:"",icon:"plus"},on:{click:t.addRules}},[t._v("新增")])],2)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" 可提前预约时长：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-input-number",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入天数",precision:0,min:0},model:{value:t.formData.appoint_time,callback:function(e){t.$set(t.formData,"appoint_time",e)},expression:"formData.appoint_time"}}),a("span",{staticClass:"unit"},[t._v("天")])],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[a("span",{staticClass:"required"},[t._v("*")]),t._v("可提前取消时长：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-radio-group",{model:{value:t.formData.cancel_type,callback:function(e){t.$set(t.formData,"cancel_type",e)},expression:"formData.cancel_type"}},[a("a-radio",{attrs:{value:0}},[t._v(" 不可取消 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 支持取消 "),a("a-select",{staticStyle:{width:"100px","margin-left":"10px"},model:{value:t.formData.cancel_hours_type,callback:function(e){t.$set(t.formData,"cancel_hours_type",e)},expression:"formData.cancel_hours_type"}},[a("a-select-option",{attrs:{value:3}},[t._v(" 开场前 ")]),a("a-select-option",{attrs:{value:1}},[t._v(" 结束前 ")])],1),a("a-input-number",{staticStyle:{width:"80px","margin-left":"10px"},attrs:{precision:0,min:0},model:{value:t.formData.cancel_hours,callback:function(e){t.$set(t.formData,"cancel_hours",e)},expression:"formData.cancel_hours"}}),a("span",{staticClass:"unit"},[t._v("小时")])],1),a("a-radio",{attrs:{value:2}},[t._v(" 随时取消 ")])],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[a("span",{staticClass:"required"},[t._v("*")]),t._v("适用店铺：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[t._v(" "+t._s(t.storeNames?t.storeNames:"未选择店铺")+" "),a("a-button",{attrs:{type:"link"},on:{click:t.chooseStore}},[t._v(" 设置 ")])],1)],1)],1),a("a-tab-pane",{key:2,attrs:{tab:"规格/数量"}},[a("a-card",{attrs:{title:"套餐设置",bordered:!1}},[a("p",[t._v(" 说明：可为团购商品的规格设置一个价格、库存、同一ID最多购买数量、同一ID每天最多购买数量、同一ID每次最少购买数量。团购规格适用于普通团购，但是当团购类型为其他的时候规格失效。 ")]),t._l(t.combineList,(function(e,o){return a("div",{key:e.combine_index,staticClass:"rule-card"},[a("div",{staticClass:"left"},[a("span",[a("span",{staticClass:"required"},[t._v("*")]),t._v(" 套餐名：")]),a("a-input",{staticClass:"w-200",attrs:{placeholder:"请输入套餐名称"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}}),a("span",{staticClass:"ml-10"},[t._v(" 套餐介绍：")]),a("a-input",{staticClass:"w-200",attrs:{placeholder:"请输入套餐介绍"},model:{value:e.intro,callback:function(a){t.$set(e,"intro",a)},expression:"item.intro"}}),a("span",{staticClass:"ml-10"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("套餐价格：")]),a("a-input",{staticClass:"w-200",attrs:{placeholder:"请输入套餐价格"},model:{value:e.price,callback:function(a){t.$set(e,"price",a)},expression:"item.price"}})],1),a("div",{staticClass:"right"},[a("a-button",{attrs:{type:"danger",ghost:"",size:"small"},on:{click:function(e){return t.removeCombine(o)}}},[t._v(" 删除规格 ")])],1)])})),a("a-button",{attrs:{type:"primary",ghost:"",icon:"plus"},on:{click:t.addCombines}},[t._v("添加套餐")]),a("div",{staticClass:"mt-20"},[t.combineList.length?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.addRuleCombine}},[t._v("生成套餐关系")]):t._e()],1),t.ruleCombineList.length?a("a-table",{staticClass:"mt-20",attrs:{columns:t.columns,"data-source":t.ruleCombineList,"row-key":"id",bordered:"",pagination:!1},scopedSlots:t._u([t._l(["stock_num_col","once_max_col","once_max_day_col","once_min_col"],(function(e){return{key:e,fn:function(o,s,i){return[a("div",{key:e},[a("a-input-number",{staticStyle:{margin:"-5px 0"},attrs:{precision:0,placeholder:"请输入",value:o,min:"once_min_col"==e?1:0},on:{change:function(a){return t.handleRCInput(a,i,e)}}})],1)]}}})),{key:"operation",fn:function(e,o,s){return[a("a-button",{attrs:{type:"danger",ghost:""},on:{click:function(e){return t.removeRuleCombine(s)}}},[t._v("删除")])]}}],null,!0)},[t._l(t.titleSlot,(function(e){return a("template",{slot:e.slot},[a("div",{key:e.slot},[a("a-tooltip",[t._v(" "+t._s(e.title)+" "),a("template",{slot:"title"},[t._v(" "+t._s(e.tip))]),a("a-icon",{attrs:{type:"question-circle"}})],2)],1)])}))],2):t._e()],2),a("a-card",{attrs:{title:"数量设置",bordered:!1}},[a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[t._v(" ID最多购买数量：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-radio-group",{on:{change:function(e){return t.handleRadioChange(e.target.value,"once_max_type")}},model:{value:t.formData.once_max_type,callback:function(e){t.$set(t.formData,"once_max_type",e)},expression:"formData.once_max_type"}},[a("a-radio",{attrs:{value:0}},[t._v(" 不限 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 有限 "),1==t.formData.once_max_type?a("a-input-number",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{precision:0,placeholder:"请输入数量",min:0},model:{value:t.formData.once_max,callback:function(e){t.$set(t.formData,"once_max",e)},expression:"formData.once_max"}}):t._e()],1)],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[t._v(" ID每天最多购买数量：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-radio-group",{on:{change:function(e){return t.handleRadioChange(e.target.value,"once_max_day_type")}},model:{value:t.formData.once_max_day_type,callback:function(e){t.$set(t.formData,"once_max_day_type",e)},expression:"formData.once_max_day_type"}},[a("a-radio",{attrs:{value:0}},[t._v(" 不限 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 有限 "),1==t.formData.once_max_day_type?a("a-input-number",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{precision:0,placeholder:"请输入数量",min:0},model:{value:t.formData.once_max_day,callback:function(e){t.$set(t.formData,"once_max_day",e)},expression:"formData.once_max_day"}}):t._e()],1)],1),a("div",{staticClass:"help"},[t._v("一个ID每天最多购买数量，会受“ID最多购买数量”配置项限制")])],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[t._v(" ID每次最少购买数量：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-radio-group",{on:{change:function(e){return t.handleRadioChange(e.target.value,"once_min_type")}},model:{value:t.formData.once_min_type,callback:function(e){t.$set(t.formData,"once_min_type",e)},expression:"formData.once_min_type"}},[a("a-radio",{attrs:{value:0}},[t._v(" 不限 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 有限 "),1==t.formData.once_min_type?a("a-input-number",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{precision:0,placeholder:"请输入数量",min:0},model:{value:t.formData.once_min,callback:function(e){t.$set(t.formData,"once_min",e)},expression:"formData.once_min"}}):t._e()],1)],1),a("div",{staticClass:"help"},[t._v("购买数量低于此设定的不允许参团")])],1)],1)],1),a("a-card",{attrs:{title:"库存扣减方式",bordered:!1}},[a("a-radio-group",{model:{value:t.formData.stock_reduce_method,callback:function(e){t.$set(t.formData,"stock_reduce_method",e)},expression:"formData.stock_reduce_method"}},[a("a-radio",{style:t.radioStyle,attrs:{value:0}},[t._v(" 支付成功后减库存（可能会出现售出的数量大于商品总数） ")]),a("a-radio",{style:t.radioStyle,attrs:{value:1}},[t._v(" 下单成功后减库存（可能会出现大量下单但是没有支付时库存已经没有了，但是如果20分钟后还是没有买单的话系统自动回滚库存） ")])],1)],1)],1),a("a-tab-pane",{key:3,attrs:{tab:"其他设置"}},[a("a-card",{attrs:{title:"补充信息",bordered:!1}},[a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[t._v(" 团购专页分类：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-select",{staticStyle:{width:"160px"},attrs:{placeholder:"一级分类"},on:{change:function(e){return t.handleGroupCategoryChange(e)}},model:{value:t.formData.cat_fid,callback:function(e){t.$set(t.formData,"cat_fid",e)},expression:"formData.cat_fid"}},t._l(t.groupCategoryList,(function(e){return a("a-select-option",{key:e.sort_id},[t._v(" "+t._s(e.sort_name)+" ")])})),1),a("a-select",{staticStyle:{width:"160px","margin-left":"10px"},attrs:{placeholder:"二级分类"},model:{value:t.formData.cat_id,callback:function(e){t.$set(t.formData,"cat_id",e)},expression:"formData.cat_id"}},t._l(t.currentGroupCat.children,(function(e){return a("a-select-option",{key:e.sort_id},[t._v(" "+t._s(e.sort_name)+" ")])})),1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[t._v("是否支持自动核销：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-radio-group",{model:{value:t.formData.auto_check,callback:function(e){t.$set(t.formData,"auto_check",e)},expression:"formData.auto_check"}},[a("a-radio",{attrs:{value:0}},[t._v(" 不支持 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 支持 ")])],1),a("div",{staticClass:"help"},[t._v(" 选择支持，则用户付款该团购商品后该订单自动核销，无需店员操作核销动作；自动核销只支持团购商品归属为一个店铺，如果归属为多个店铺，则默认核销第一个店铺 ")])],1)],1)],1),a("a-card",{attrs:{title:"会员优惠",bordered:!1}},[a("p",[t._v(" 说明：必须设置一个会员等级优惠类型和优惠类型对应的数值，我们将结合优惠类型和所填的数值来计算该商品会员等级的优惠的幅度！ ")]),t._l(t.leveloff,(function(e){return a("div",{key:e.lid,staticClass:"leveloff"},[a("span",{staticClass:"lname"},[t._v(t._s(e.lname))]),a("span",[t._v("优惠类型")]),a("a-select",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{placeholder:"请选择优惠类型",disabled:t.discount_sync_status},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"item.type"}},t._l(t.levelList,(function(e){return a("a-select-option",{key:e.type},[t._v(" "+t._s(e.title)+" ")])})),1),a("a-input-number",{staticStyle:{width:"180px","margin-left":"10px"},attrs:{placeholder:"请输入对应优惠金额",min:0,disabled:t.discount_sync_status},model:{value:e.vv,callback:function(a){t.$set(e,"vv",a)},expression:"item.vv"}})],1)}))],2),a("a-card",{attrs:{title:"其他设置",bordered:!1}},[a("a-row",{staticClass:"form-row",attrs:{gutter:t.gutter}},[a("a-col",{staticClass:"form-title",attrs:{span:t.titleSpan}},[t._v("团购状态：")]),a("a-col",{staticClass:"form-content",attrs:{span:t.contentSpan}},[a("a-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:0}},[t._v(" 关闭（为了方便用户能查找到以前的订单，团购无法删除） ")])],1)],1)],1)],1)],1)],1)],1),a("a-button",{staticClass:"submit",attrs:{type:"primary",size:"large"},on:{click:t.submitForm}},[t._v(" 保存 ")]),a("price-calendar",{ref:"priceCalendar",on:{getPriceList:t.getPriceList}}),a("choose-store",{attrs:{visible:t.chooseStoreVisible,storeIdArr:t.formData.store_ids},on:{submit:t.getChooseStore}})],1)},s=[],i=a("b85c"),r=a("5530"),n=(a("a434"),a("a9e3"),a("c740"),a("d3b7"),a("159b"),a("99af"),a("b0c0"),a("ac1f"),a("1276"),a("d81d"),a("a15b"),a("c1df")),c=a.n(n),l=a("38f1"),u=a("2b69"),d=a("4b77"),m=1,_={rule_id:0,start_time:0,day:1,end_time:23,use_hours_type:0,use_hours:"",count:"",default_price:"",price_calendar:[]},p=1,h={combine_id:0,name:"",intro:"",price:""},f=[{title:"场次名称",dataIndex:"rule_name"},{title:"规格名称",dataIndex:"combine_name"},{dataIndex:"stock_num",slots:{title:"stock_num_title"},scopedSlots:{customRender:"stock_num_col"}},{dataIndex:"once_max",slots:{title:"once_max_title"},scopedSlots:{customRender:"once_max_col"}},{dataIndex:"once_max_day",slots:{title:"once_max_day_title"},scopedSlots:{customRender:"once_max_day_col"}},{dataIndex:"once_min",slots:{title:"once_min_title"},scopedSlots:{customRender:"once_min_col"}},{title:"操作",dataIndex:"id",scopedSlots:{customRender:"operation"}}],g=[{slot:"stock_num_title",title:"库存",tip:"0表示不限制，否则产品会出现“已卖光”状态！"},{slot:"once_max_title",title:"同一ID最多购买数量",tip:"同一个ID最多购买数量，0表示不限制！请填写大于等于零的值！"},{slot:"once_max_day_title",title:"同一ID每天最多购买数量",tip:"同一ID每天最多购买数量，0表示不限制！请填写大于等于零的值！"},{slot:"once_min_title",title:"同一ID每次最少购买数量",tip:"同一ID每次最少购买数量，购买数量低于此设定的不允许参团！请填写大于等于1的值！"}],v=!0,y={name:"GroupBookingAppoint",components:{PriceCalendar:l["default"],ChooseStore:u["default"]},data:function(){return{discount_sync_status:!1,titleSpan:4,contentSpan:18,gutter:[16,30],radioStyle:{display:"block",height:"30px",lineHeight:"30px"},levelList:[{type:0,title:"无优惠"},{type:1,title:"百分比"},{type:2,title:"立减"}],activeKey:1,formData:{s_name:"",appoint_time:"",cancel_type:0,cancel_hours_type:3,cancel_hours:"",once_max_type:0,once_max:"",once_max_day_type:0,once_max_day:"",once_min_type:0,once_min:"",stock_reduce_method:0,cat_fid:"",cat_id:"",auto_check:0,status:1,store_ids:[]},rules:[],leveloff:[],groupCategoryList:[],currentGroupCat:{children:[]},combineList:[],ruleCombineList:[],columns:f,titleSlot:g,chooseStoreVisible:!1,storeNames:"",group_id:0,canSave:!0}},watch:{$route:function(t){"/merchant/merchant.group/bookingAppoint"==t.path&&(t.query.group_id?(this.group_id=t.query.group_id,this.getEditInfo()):this.resetForm())}},mounted:function(){this.$route.query.group_id?(this.group_id=this.$route.query.group_id,this.getEditInfo()):this.getLeveloff()},methods:{moment:c.a,onTabChange:function(t){this.activeKey=t},addRules:function(){var t=Object(r["a"])({rule_index:m},_);this.rules.push(t),m++,this.ruleCombineList.length&&(v=!1,this.$message.warning("修改完场次信息需要重新生成套餐组合哦~"))},ruleTimeSelectChange:function(t,e){var a=this.rules[e];a.end_time<=a.start_time&&1==a.day&&(this.$message.warning("结束时间应该大于开始时间"),23==a.start_time?(a.day=2,a.end_time=0):a.end_time=a.start_time+1,this.$set(this.rules,e,a)),this.ruleCombineList.length&&(v=!1,this.$message.warning("修改完场次信息需要重新生成套餐组合哦~"))},removeRule:function(t){this.rules.splice(t,1),this.ruleCombineList.length&&(v=!1,this.$message.warning("修改完场次信息需要重新生成套餐组合哦~"))},calendarDisable:function(t){return!(Number(t.default_price)>0&&(0==t.use_hours_type||1==t.use_hours_type&&Number(t.use_hours)>0))},setPriceCalendar:function(t){this.$refs.priceCalendar.openModal({rule:t})},getPriceList:function(t){var e=t.priceList,a=t.rule_index,o=this.rules.findIndex((function(t){return t.rule_index==a})),s=this.rules[o],i=[];for(var r in e)i.push(e[r]);s.price_calendar=i,this.$set(this.rules,o,s),console.log(this.rules)},addCombines:function(){var t=Object(r["a"])({combine_index:p},h);this.combineList.push(t),p++,this.ruleCombineList.length&&(v=!1,this.$message.warning("修改完套餐信息需要重新生成套餐组合哦~"))},removeCombine:function(t){this.combineList.splice(t,1),this.combineList.length||(this.ruleCombineList=[]),this.ruleCombineList.length&&(v=!1,this.$message.warning("修改完套餐信息需要重新生成套餐组合哦~"))},addRuleCombine:function(){var t=this;if(v=!0,this.rules.length){var e,a=Object(i["a"])(this.combineList);try{for(a.s();!(e=a.n()).done;){var o=e.value;if(!o.name)return void this.$message.warning("请完善套餐名称等信息!")}}catch(s){a.e(s)}finally{a.f()}this.ruleCombineList=[],this.rules.forEach((function(e){var a=e.start_time>9?e.start_time+":00":"0"+e.start_time+":00",o=e.end_time>9?e.end_time+":00":"0"+e.end_time+":00",s="".concat(a,"至").concat(2==e.day?"次日":"").concat(o).concat(0==e.use_hours_type?"":"内，任选"+e.use_hours+"小时");t.combineList.forEach((function(a){t.ruleCombineList.push({id:a.combine_index+"_"+e.rule_index,combine_index:a.combine_index,combine_name:a.name,rule_index:e.rule_index,rule_name:s,stock_num:0,once_max:0,once_max_day:0,once_min:0})}))}))}else this.$message.warning("请先设置至少一个场次!")},removeRuleCombine:function(t){this.ruleCombineList.splice(t,1)},handleRCInput:function(t,e,a){if(console.log(t,e,a),t){var o=this.ruleCombineList[e];o[a]=t;var s=a.split("_col");o[s[0]]=t,this.$set(this.ruleCombineList,e,o),console.log("9999999999999",this.ruleCombineList)}},handleRadioChange:function(t,e){this.$set(this.formData,e,t),this.$forceUpdate()},chooseStore:function(){this.chooseStoreVisible=!this.chooseStoreVisible},getChooseStore:function(t){this.formData.store_ids=t.storeIds,this.storeNames=t.storeName,this.chooseStoreVisible=!1},getLeveloff:function(){var t=this;this.request(d["a"].getGroupEditInfo).then((function(e){e.group_category_list.length&&(t.groupCategoryList=e.group_category_list,t.group_id?t.handleGroupCategoryChange(t.formData.cat_fid,t.formData.cat_id):(t.$set(t.formData,"cat_fid",t.groupCategoryList[0].sort_id),t.handleGroupCategoryChange(t.groupCategoryList[0].sort_id))),e.user_level.length&&!t.group_id&&(t.leveloff=e.user_level),t.discount_sync_status=e.discount_sync_status}))},handleGroupCategoryChange:function(t,e){for(var a in this.groupCategoryList){var o=this.groupCategoryList[a];if(o.sort_id==t)return this.$set(this,"currentGroupCat",o),void(o.children&&o.children.length&&(e||this.$set(this.formData,"cat_id",o.children[0].sort_id)))}},submitForm:function(){var t=this;if(console.log(this.formData),v){if(this.canSave&&this.validateForm()){this.canSave=!1;var e=this.formData,a={s_name:e.s_name,appoint_time:e.appoint_time,cancel_type:1==e.cancel_type?e.cancel_hours_type:e.cancel_type,cancel_hours:e.cancel_hours,once_max:1==e.once_max_type?e.once_max:e.once_max_type,once_max_day:1==e.once_max_day_type?e.once_max_day:e.once_max_day_type,once_min:1==e.once_min_type?e.once_min:e.once_min_type,stock_reduce_method:e.stock_reduce_method,cat_fid:e.cat_fid,cat_id:e.cat_id,auto_check:e.auto_check,status:e.status,store_ids:e.store_ids,leveloff_list:this.leveloff};a.rules=this.rules.map((function(t){return{rule_index:t.rule_index,rule_id:t.rule_id,start_time:3600*t.start_time,end_time:2==t.day?3600*t.end_time+86400:3600*t.end_time,use_hours:1==t.use_hours_type?t.use_hours:0,count:t.count,default_price:t.default_price,price_calendar:t.price_calendar}})),a.combine=this.combineList,a.rule_combine=this.ruleCombineList,a.group_id=this.group_id,console.log("----------params",a),this.request(d["a"].saveBookingAppoint,a).then((function(e){t.activeKey=1,t.$route.query.group_id||t.resetForm(),t.$message.success("提交成功！",2,(function(){t.$message.destroy(),t.$router.push({path:"/merchant/merchant.group/groupList"}),t.canSave=!0}))})).catch((function(){t.canSave=!0}))}}else this.$message.error("您修改完场次或套餐信息后未重新生成套餐组合消息，请点击”生成套餐关系“重新生成哦~")},getEditInfo:function(){var t=this;this.request(d["a"].showBookingAppoint,{group_id:this.group_id}).then((function(e){if(t.formData=JSON.parse(JSON.stringify(e)),t.getLeveloff(),t.rules=e.rules.map((function(t){return{rule_index:t.rule_id,rule_id:t.rule_id,start_time:t.start_time/3600,day:t.end_time>=86400?2:1,end_time:t.end_time>=86400?(t.end_time-86400)/3600:t.end_time/3600,use_hours_type:t.use_hours>0?1:0,use_hours:t.use_hours>0?t.use_hours:"",count:t.count,default_price:t.default_price,price_calendar:t.price_calendar}})),t.$set(t.formData,"cancel_type",3==e.cancel_type||1==e.cancel_type?1:e.cancel_type),t.$set(t.formData,"cancel_hours_type",1==e.cancel_type?1:3),t.$set(t.formData,"cancel_hours",1==e.cancel_type||3==e.cancel_type?e.cancel_hours:""),e.store.ids){var a=e.store.ids?e.store.ids:[],o=e.store.detail?e.store.detail:[],s=[];a.forEach((function(e){o.forEach((function(a){e.store_id==a.store_id&&(s.push(a.name),e.name=a.name,t.storeNames=s.join(","))}))})),t.$set(t.formData,"store_ids",a)}t.formData.once_max_type=t.formData.once_max>0?1:0,t.formData.once_max=t.formData.once_max>0?t.formData.once_max:"",t.formData.once_max_day_type=t.formData.once_max_day>0?1:0,t.formData.once_max_day=t.formData.once_max_day>0?t.formData.once_max_day:"",t.formData.once_min_type=t.formData.once_min>0?1:0,t.formData.once_min=t.formData.once_min>0?t.formData.once_min:"",t.combineList=e.combine.map((function(t){return Object(r["a"])({combine_index:t.combine_id},t)})),t.ruleCombineList=e.rule_combine.map((function(t){return Object(r["a"])({combine_index:t.combine_id,rule_index:t.rule_id},t)})),t.leveloff=e.leveloff_list,t.formData=JSON.parse(JSON.stringify(t.formData)),console.log("--------this.formData",t.formData)}))},resetForm:function(){Object.assign(this.$data,this.$options.data()),this.getLeveloff()},validateForm:function(){if(!this.formData.s_name)return this.$message.error("请输入场次名称！"),this.activeKey=1,!1;if(!this.rules.length)return this.$message.error("请设置至少一个场次！"),this.activeKey=1,!1;var t,e=Object(i["a"])(this.rules);try{for(e.s();!(t=e.n()).done;){var a=t.value;if(!a.count||!a.default_price||1==a.use_hours_type&&!a.use_hours)return this.$message.error("请完善场次设置信息"),this.activeKey=1,!1}}catch(u){e.e(u)}finally{e.f()}if(b(this.formData.appoint_time))return this.$message.error("请输入可提前预约时长！"),this.activeKey=1,!1;if(1==this.formData.cancel_type&&b(this.formData.cancel_hours))return this.$message.error("请输入可提前取消时长！"),this.activeKey=1,!1;if(!this.formData.store_ids.length)return this.$message.error("请选择适用店铺！"),this.activeKey=1,!1;if(this.combineList.length){var o,s=Object(i["a"])(this.combineList);try{for(s.s();!(o=s.n()).done;){var r=o.value;if(!r.name||!r.price)return this.$message.error("请完善套餐的名称和价格信息"),this.activeKey=2,!1}}catch(u){s.e(u)}finally{s.f()}}if(this.ruleCombineList.length){var n,c=Object(i["a"])(this.ruleCombineList);try{for(c.s();!(n=c.n()).done;){var l=n.value;if(b(l.stock_num)||b(l.once_max)||b(l.once_max_day)||b(l.once_min))return this.$message.error("请完善套餐组合关系信息"),this.activeKey=2,!1}}catch(u){c.e(u)}finally{c.f()}}return 1==this.formData.once_max_type&&b(this.formData.once_max)?(this.$message.error("请输入ID最多购买限购数量"),this.activeKey=2,!1):1==this.formData.once_max_day_type&&b(this.formData.once_max_day)?(this.$message.error("请输入ID每天最多购买限购数量"),this.activeKey=2,!1):1!=this.formData.once_min_type||!b(this.formData.once_min)||(this.$message.error("请输入ID每次最少购买数量"),this.activeKey=2,!1)}}};function b(t){return"undefined"===typeof t||null===t||""===t}var C=y,x=(a("d057"),a("0c7c")),D=Object(x["a"])(C,o,s,!1,null,"4a054658",null);e["default"]=D.exports},9469:function(t,e,a){"use strict";a("c4ea")},c4ea:function(t,e,a){},d057:function(t,e,a){"use strict";a("e12b")},e12b:function(t,e,a){}}]);