(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-102eee02","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));e("d3b7");function n(t,a,e,n,s,i,r){try{var o=t[i](r),c=o.value}catch(l){return void e(l)}o.done?a(c):Promise.resolve(c).then(n,s)}function s(t){return function(){var a=this,e=arguments;return new Promise((function(s,i){var r=t.apply(a,e);function o(t){n(r,s,i,o,c,"next",t)}function c(t){n(r,s,i,o,c,"throw",t)}o(void 0)}))}}},2909:function(t,a,e){"use strict";e.d(a,"a",(function(){return c}));var n=e("6b75");function s(t){if(Array.isArray(t))return Object(n["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=e("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||i(t)||Object(r["a"])(t)||o()}},"7d5a8":function(t,a,e){"use strict";e("a1d9")},a1d9:function(t,a,e){},fdbe:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fee-summary-list-box"},[e("a-collapse",{attrs:{accordion:""}},[e("a-collapse-panel",{key:"1",attrs:{header:"相关说明"}},[e("div",{staticClass:"fee-summary-list-tip-box"},[e("a-alert",{attrs:{message:"",type:"info"}},[e("div",{attrs:{slot:"description"},slot:"description"},[e("div",[t._v("以下所有统计数据均只统计已经支付过的账单（包含退款，不包含作废的账单）；")]),e("div",[t._v("1、【应收费用】：已经支付的账单应收金额统计（包含已经退款的，不包含作废的账单）；")]),e("div",[t._v("2、【实收费用】：已经支付的账单实际用户支付金额统计（包含已经退款的，不包含作废的账单）；")]),e("div",[t._v("3、【退款费用】：已经支付的账单退款金额统计；")]),e("div",[t._v("4、【缴费率】：【实收费用】除以【应收费用】的物业费，再乘以100%，就是物业费缴费率，不考虑退款；")]),e("div",[t._v("5、日期筛选：按已支付的时间计算；")]),e("div",[t._v("6、搜索条件上的统计是包含所有已经支付的且未作废的账单，不受搜索条件影响；")]),e("div",[t._v("7、搜索条件下的统计是按照房屋进行整合显示,展示的姓名和手机号是以取到的缴费记录中的姓名手机号为准；")]),e("div",[t._v("8、搜索条件下的统计可按条件筛选，根据查询变更；")])])])],1)])],1),e("div",{staticClass:"fee-summary-list-summary-box"},[e("a-row",{attrs:{type:"flex",justify:"space-between",align:"bottom"}},[e("a-col",{staticStyle:{"background-color":"#3399cc"},attrs:{span:4}},[e("div",{staticClass:"title-box"},[t._v(" 应收费用 ")]),e("div",{staticClass:"summary_number-box"},[e("span",{staticClass:"rmbSymbol"},[t._v("¥")]),t._v(t._s(t.summaryInfo["summaryTotalMoney"])+" ")])]),e("a-col",{staticStyle:{"background-color":"#1890ff"},attrs:{span:4}},[e("div",{staticClass:"title-box"},[t._v(" 实收费用 ")]),e("div",{staticClass:"summary_number-box"},[e("span",{staticClass:"rmbSymbol"},[t._v("¥")]),t._v(t._s(t.summaryInfo["summaryPayMoney"])+" ")])]),e("a-col",{staticStyle:{"background-color":"#ff9900"},attrs:{span:4}},[e("div",{staticClass:"title-box"},[t._v(" 退款费用 ")]),e("div",{staticClass:"summary_number-box"},[e("span",{staticClass:"rmbSymbol"},[t._v("¥")]),t._v(t._s(t.summaryInfo["summaryRefundMoney"])+" ")])]),e("a-col",{staticStyle:{"background-color":"#975fe4"},attrs:{span:4}},[e("div",{staticClass:"title-box"},[t._v(" 缴费率 ")]),e("div",{staticClass:"summary_number-box"},[t._v(" "+t._s(t.summaryInfo["summaryMoneyRate"])+" ")])]),e("a-col",{attrs:{span:4}})],1)],1),e("div",{staticClass:"search-box"},[e("a-row",{attrs:{gutter:48}},[e("a-col",{staticStyle:{"padding-right":"0px",width:"16.7%"},attrs:{md:8,sm:24}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("房间：")]),e("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:t.options,"load-data":t.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:t.setVisionsFunc},model:{value:t.search.vacancy,callback:function(a){t.$set(t.search,"vacancy",a)},expression:"search.vacancy"}})],1),e("a-col",{staticStyle:{width:"250px","padding-right":"1px"},attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("业主：")]),t._v(" "),e("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入业主姓名"},model:{value:t.search.name,callback:function(a){t.$set(t.search,"name",a)},expression:"search.name"}})],1)],1),e("a-col",{staticStyle:{width:"250px","padding-right":"1px"},attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("手机号：")]),t._v(" "),e("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入手机号"},model:{value:t.search.phone,callback:function(a){t.$set(t.search,"phone",a)},expression:"search.phone"}})],1)],1),e("a-col",{staticStyle:{"padding-left":"0px","padding-right":"1px",width:"420px"},attrs:{md:8,sm:24}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),e("a-range-picker",{staticStyle:{width:"325px"},attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(a){t.search_data=a},expression:"search_data"}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-col",{staticStyle:{"padding-left":"25px","padding-right":"1px",width:"90px"},attrs:{md:8,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(a){return t.searchList()}}},[t._v(" 查询 ")])],1),e("a-col",{staticStyle:{"padding-left":"25px","padding-right":"1px",width:"90px"},attrs:{md:8,sm:24}},[e("a-button",{staticClass:"ml-20",attrs:{icon:"refresh"},on:{click:t.resetList}},[t._v(" 重置")])],1)],1)],1),e("div",{staticClass:"fee-summary-page-summary-box"},[e("a-row",{attrs:{type:"flex",justify:"start"}},[e("a-col",{attrs:{span:4}},[e("span",{staticClass:"page-title-box"},[t._v(" 应收费用： ")]),e("span",{staticClass:"page-number-box"},[e("span",{staticClass:"pageRmbSymbol"},[t._v("¥")]),t._v(t._s(t.pageSummaryInfo["summaryTotalMoney"])+" ")])]),e("a-col",{attrs:{span:4}},[e("span",{staticClass:"page-title-box"},[t._v(" 实收费用： ")]),e("span",{staticClass:"page-number-box"},[e("span",{staticClass:"pageRmbSymbol"},[t._v("¥")]),t._v(t._s(t.pageSummaryInfo["summaryPayMoney"])+" ")])]),e("a-col",{attrs:{span:4}},[e("span",{staticClass:"page-title-box"},[t._v(" 退款费用： ")]),e("span",{staticClass:"page-number-box"},[e("span",{staticClass:"pageRmbSymbol"},[t._v("¥")]),t._v(t._s(t.pageSummaryInfo["summaryRefundMoney"])+" ")])]),e("a-col",{attrs:{span:4}},[e("span",{staticClass:"page-title-box"},[t._v(" 缴费率： ")]),e("span",{staticClass:"page-number-box"},[t._v(" "+t._s(t.pageSummaryInfo["summaryMoneyRate"])+" ")])])],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,bordered:""},on:{change:t.table_change}})],1)},s=[],i=e("2909"),r=e("1da1"),o=(e("96cf"),e("ac1f"),e("841c"),e("d81d"),e("b0c0"),e("d3b7"),e("7db0"),e("a0e0")),c=[{title:"房间号",dataIndex:"address",key:"address"},{title:"业主",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"应收费用",dataIndex:"summaryTotalMoney",key:"summaryTotalMoney"},{title:"实收费用",dataIndex:"summaryPayMoney",key:"summaryPayMoney"},{title:"退款费用",dataIndex:"summaryRefundMoney",key:"summaryRefundMoney"},{title:"缴费率",dataIndex:"summaryMoneyRate",key:"summaryMoneyRate"}],l=[],u={name:"feeSummaryList",data:function(){return{reply_content:"",pagination:{pageSize:10,total:10,current:1},search:{name:"",phone:""},form:this.$form.createForm(this),visible:!1,loading:!1,data:l,columns:c,key_name:"请输入姓名",page:1,options:[],garage_list:[],project_list:[],search_data:"",summaryInfo:{},pageSummaryInfo:{}}},activated:function(){this.getList(),this.getSingleListByVillage()},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.request(o["a"].feeSummaryList,this.search).then((function(a){t.pagination.total=a.count?a.count:0,t.pagination.pageSize=a.total_limit?a.total_limit:10,t.data=a.list,t.summaryInfo=a.summaryInfo,t.pageSummaryInfo=a.pageSummaryInfo,t.loading=!1}))},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,a){this.search.date=a,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1};console.log("searchList"),this.table_change(t)},getSingleListByVillage:function(){var t=this;this.request(o["a"].getSingleListByVillage).then((function(a){if(console.log("+++++++Single",a),a){var e=[];a.map((function(t){e.push({label:t.name,value:t.id,isLeaf:!1})})),t.options=e}}))},getFloorList:function(t){var a=this;return new Promise((function(e){a.request(o["a"].getFloorList,{pid:t}).then((function(t){console.log("+++++++Single",t),console.log("resolve",e),e(t)}))}))},getLayerList:function(t){var a=this;return new Promise((function(e){a.request(o["a"].getLayerList,{pid:t}).then((function(t){console.log("+++++++Single",t),t&&e(t)}))}))},getVacancyList:function(t){var a=this;return new Promise((function(e){a.request(o["a"].getVacancyList,{pid:t}).then((function(t){console.log("+++++++Single",t),t&&e(t)}))}))},loadDataFunc:function(t){return Object(r["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t[t.length-1],e.loading=!0,setTimeout((function(){e.loading=!1}),100);case 3:case"end":return a.stop()}}),a)})))()},setVisionsFunc:function(t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s,r,o,c,l,u,d,m,p,h,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!==t.length){e.next=12;break}return n=Object(i["a"])(a.options),e.next=4,a.getFloorList(t[0]);case 4:s=e.sent,console.log("res",s),r=[],s.map((function(t){return r.push({label:t.name,value:t.id,isLeaf:!1}),n["children"]=r,!0})),n.find((function(a){return a.value===t[0]}))["children"]=r,a.options=n,e.next=36;break;case 12:if(2!==t.length){e.next=24;break}return e.next=15,a.getLayerList(t[1]);case 15:o=e.sent,c=Object(i["a"])(a.options),l=[],o.map((function(t){return l.push({label:t.name,value:t.id,isLeaf:!1}),!0})),u=c.find((function(a){return a.value===t[0]})),u.children.find((function(a){return a.value===t[1]}))["children"]=l,a.options=c,e.next=36;break;case 24:if(3!==t.length){e.next=36;break}return e.next=27,a.getVacancyList(t[2]);case 27:d=e.sent,m=Object(i["a"])(a.options),p=[],d.map((function(t){return p.push({label:t.name,value:t.id,isLeaf:!0}),!0})),h=m.find((function(a){return a.value===t[0]})),f=h.children.find((function(a){return a.value===t[1]})),f.children.find((function(a){return a.value===t[2]}))["children"]=p,a.options=m,console.log("_this.options",a.options);case 36:case"end":return e.stop()}}),e)})))()},resetList:function(){this.search={name:"",phone:""},this.search_data="",this.getList()}}},d=u,m=(e("7d5a8"),e("2877")),p=Object(m["a"])(d,n,s,!1,null,"45f14b0c",null);a["default"]=p.exports}}]);