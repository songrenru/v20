(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dd9458a","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7");function n(t,e,a,n,i,r,s){try{var o=t[r](s),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(i,r){var s=t.apply(e,a);function o(t){n(s,i,r,o,c,"next",t)}function c(t){n(s,i,r,o,c,"throw",t)}o(void 0)}))}}},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||r(t)||Object(s["a"])(t)||o()}},"3f37":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fee-summary-list-box"},[a("a-collapse",{staticStyle:{display:"none"},attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"相关说明"}},[a("div",{staticClass:"fee-summary-list-tip-box"},[a("a-alert",{staticStyle:{display:"none"},attrs:{message:"",type:"info"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("div",[t._v("1、【合计应收费用】：已经付款和还没有付款的总的应收费用；")]),a("div",[t._v("2、【免收费用】：是指在给房间/业主生成欠费账单时，所有优惠的金额 "),a("div",{staticStyle:{"margin-left":"77px"}},[t._v("场景："),a("br"),t._v(" 1、对房间生成的账单未进行修改；"),a("br"),t._v(" 2、对房间生成的账单进行修改（且修改的费用小于应收费用）；"),a("br"),t._v(" 3、对房间生成的账单进行修改（且修改的费用大于应收费用）；"),a("br")])]),a("div",[t._v("3、【已收费用】：已收费用是统计用户实际支付的金额费用 "),a("div",{staticStyle:{"margin-left":"77px"}},[t._v("场景"),a("br"),t._v(" 1、对房间生成的账单未进行修改；"),a("br"),t._v(" 2、对房间生成的账单进行修改（且修改的费用小于应收费用）；"),a("br"),t._v(" 3、对房间生成的账单进行修改（且修改的费用大于应收费用）；")])]),a("div",[t._v("4、【应收费用】：还没有付款的待缴账单金额；")]),a("div",[t._v(" 5、【缴费率】：【已收费用】除以【应收费用-免收费用】的物业费，再乘以100%，就是物业费缴费率，不考虑退款；")])])])],1)])],1),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{staticStyle:{"padding-right":"0px"},attrs:{md:4,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("收费类别：")]),a("a-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择收费类别"},on:{change:t.handleChargeTypeChange},model:{value:t.search.charge_type,callback:function(e){t.$set(t.search,"charge_type",e)},expression:"search.charge_type"}},t._l(t.chargeType,(function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.value))])})),1)],1),a("a-col",{staticStyle:{"padding-right":"1px"},attrs:{md:5,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("收费项目：")]),a("a-select",{staticStyle:{width:"210px"},attrs:{placeholder:"请选择收费项目"},model:{value:t.search.charge_project_id,callback:function(e){t.$set(t.search,"charge_project_id",e)},expression:"search.charge_project_id"}},t._l(t.chargeProject,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1),a("a-col",{staticStyle:{"padding-left":"12px","padding-right":"10px"},attrs:{md:4,sm:12}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("收费标准：")]),a("a-input",{staticStyle:{width:"170px"},attrs:{placeholder:"请输入收费标准名称"},model:{value:t.search.rule_name,callback:function(e){t.$set(t.search,"rule_name",e)},expression:"search.rule_name"}})],1),a("a-col",{staticStyle:{"padding-left":"5px","padding-right":"1px",width:"430px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("计费时间：")]),a("a-range-picker",{staticStyle:{width:"325px"},attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(e){t.search_data=e},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-col",{staticStyle:{"padding-left":"25px","padding-right":"1px",width:"90px"},attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{staticStyle:{"padding-left":"25px","padding-right":"1px",width:"90px"},attrs:{md:6,sm:24}},[a("a-button",{staticClass:"ml-20",attrs:{icon:"refresh"},on:{click:t.resetList}},[t._v(" 重置")])],1)],1)],1),a("div",{staticClass:"fee-summary-page-summary-box"},[a("a-row",{attrs:{type:"flex",justify:"start"}},[a("a-col",{attrs:{span:4}},[a("span",{staticClass:"page-title-box"},[t._v(" 总收应收费用： ")]),a("span",{staticClass:"page-number-box"},[a("span",{staticClass:"pageRmbSymbol"},[t._v("¥")]),t._v(t._s(t.pageSummaryInfo["summaryTotalMoney"])+" ")])]),a("a-col",{attrs:{span:4}},[a("span",{staticClass:"page-title-box"},[t._v(" 免收费用： ")]),a("span",{staticClass:"page-number-box"},[a("span",{staticClass:"pageRmbSymbol"},[t._v("¥")]),t._v(t._s(t.pageSummaryInfo["discountTotalMoney"])+" ")])]),a("a-col",{attrs:{span:4}},[a("span",{staticClass:"page-title-box"},[t._v(" 已收费用： ")]),a("span",{staticClass:"page-number-box"},[a("span",{staticClass:"pageRmbSymbol"},[t._v("¥")]),t._v(t._s(t.pageSummaryInfo["summaryPayMoney"])+" ")])]),a("a-col",{attrs:{span:4}},[a("span",{staticClass:"page-title-box"},[t._v(" 应收费用： ")]),a("span",{staticClass:"page-number-box"},[t._v(" "+t._s(t.pageSummaryInfo["noPayTotalMoney"])+" ")])]),a("a-col",{attrs:{span:4}},[a("span",{staticClass:"page-title-box"},[t._v(" 缴费率： ")]),a("span",{staticClass:"page-number-box"},[t._v(" "+t._s(t.pageSummaryInfo["moneyTotalRate"])+" ")])])],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,bordered:""},on:{change:t.table_change}})],1)},i=[],r=a("2909"),s=a("1da1"),o=(a("96cf"),a("ac1f"),a("841c"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),c=[{title:"收费类别",dataIndex:"order_name",key:"order_name"},{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"收费标准",dataIndex:"rule_name",key:"rule_name"},{title:"总收应收费用",dataIndex:"summaryTotalMoney",key:"summaryTotalMoney"},{title:"免收费用",dataIndex:"discountTotalMoney",key:"discountTotalMoney"},{title:"已收费用",dataIndex:"summaryPayMoney",key:"summaryPayMoney"},{title:"应收费用",dataIndex:"noPayTotalMoney",key:"noPayTotalMoney"},{title:"缴费率",dataIndex:"summaryMoneyRate",key:"summaryMoneyRate"}],l=[],u={name:"HousePropertyFeeSummary",data:function(){var t=this;return{pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},search:{charge_type:"",charge_project_id:"",rule_name:""},form:this.$form.createForm(this),visible:!1,loading:!1,data:l,columns:c,page:1,chargeType:[],chargeProject:[],search_data:"",summaryInfo:{},pageSummaryInfo:{}}},activated:function(){this.getList(),this.getChargeTypeList()},methods:{onTableChange:function(t,e){this.page=t,this.pagination.current=t,this.pagination.pageSize=e,this.getList(),console.log("onTableChange==>",t,e)},getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.request(o["a"].getSummaryByRuleList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.summaryInfo=e.summaryInfo,t.pageSummaryInfo=e.pageSummaryInfo,t.loading=!1}))},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1};this.table_change(t)},getChargeTypeList:function(){var t=this;this.request(o["a"].getChargeTypeList).then((function(e){e&&(t.chargeType=e)}))},handleChargeTypeChange:function(t){var e=this;this.search.charge_project_id="请选择收费项目",this.request(o["a"].getChargeProjectByTypeList,{charge_type_key:t}).then((function(t){t&&(e.chargeProject=t)}))},getSingleListByVillage:function(){var t=this;this.request(o["a"].getSingleListByVillage).then((function(e){if(console.log("+++++++Single",e),e){var a=[];e.map((function(t){a.push({label:t.name,value:t.id,isLeaf:!1})})),t.options=a}}))},getFloorList:function(t){var e=this;return new Promise((function(a){e.request(o["a"].getFloorList,{pid:t}).then((function(t){console.log("+++++++Single",t),console.log("resolve",a),a(t)}))}))},getLayerList:function(t){var e=this;return new Promise((function(a){e.request(o["a"].getLayerList,{pid:t}).then((function(t){console.log("+++++++Single",t),t&&a(t)}))}))},getVacancyList:function(t){var e=this;return new Promise((function(a){e.request(o["a"].getVacancyList,{pid:t}).then((function(t){console.log("+++++++Single",t),t&&a(t)}))}))},loadDataFunc:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t[t.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return e.stop()}}),e)})))()},setVisionsFunc:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i,s,o,c,l,u,p,h,d,g,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(1!==t.length){a.next=12;break}return n=Object(r["a"])(e.options),a.next=4,e.getFloorList(t[0]);case 4:i=a.sent,console.log("res",i),s=[],i.map((function(t){return s.push({label:t.name,value:t.id,isLeaf:!1}),n["children"]=s,!0})),n.find((function(e){return e.value===t[0]}))["children"]=s,e.options=n,a.next=36;break;case 12:if(2!==t.length){a.next=24;break}return a.next=15,e.getLayerList(t[1]);case 15:o=a.sent,c=Object(r["a"])(e.options),l=[],o.map((function(t){return l.push({label:t.name,value:t.id,isLeaf:!1}),!0})),u=c.find((function(e){return e.value===t[0]})),u.children.find((function(e){return e.value===t[1]}))["children"]=l,e.options=c,a.next=36;break;case 24:if(3!==t.length){a.next=36;break}return a.next=27,e.getVacancyList(t[2]);case 27:p=a.sent,h=Object(r["a"])(e.options),d=[],p.map((function(t){return d.push({label:t.name,value:t.id,isLeaf:!0}),!0})),g=h.find((function(e){return e.value===t[0]})),m=g.children.find((function(e){return e.value===t[1]})),m.children.find((function(e){return e.value===t[2]}))["children"]=d,e.options=h,console.log("_this.options",e.options);case 36:case"end":return a.stop()}}),a)})))()},resetList:function(){this.search={charge_type:"",charge_project_id:"",rule_name:""},this.search_data="",this.getList()}}},p=u,h=(a("cf85"),a("2877")),d=Object(h["a"])(p,n,i,!1,null,"da889244",null);e["default"]=d.exports},cf85:function(t,e,a){"use strict";a("f749")},f749:function(t,e,a){}}]);