(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f22ee686","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("d3b7");function n(e,t,a,n,i,r,s){try{var c=e[r](s),o=c.value}catch(l){return void a(l)}c.done?t(o):Promise.resolve(o).then(n,i)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(i,r){var s=e.apply(t,a);function c(e){n(s,i,r,c,o,"next",e)}function o(e){n(s,i,r,c,o,"throw",e)}c(void 0)}))}}},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("6b75");function i(e){if(Array.isArray(e))return Object(n["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=a("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return i(e)||r(e)||Object(s["a"])(e)||c()}},3710:function(e,t,a){},e093:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-suggestions-list-box"},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[a("p",[e._v(" 针对账单生成错误或计算错误的【应收账单】，物业可一键作废掉账单，重新按照调整过的收费标准生成账单，所有的【作废账单】都可在对应的作废账单汇总中查询，方便物业统计查看。 ")])])],1),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{staticStyle:{"padding-right":"0px",width:"16.7%"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("房间：")]),a("a-cascader",{staticClass:"cascader_style margin_left_10",staticStyle:{width:"80%"},attrs:{options:e.options,"load-data":e.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:e.setVisionsFunc},model:{value:e.search.vacancy,callback:function(t){e.$set(e.search,"vacancy",t)},expression:"search.vacancy"}})],1),a("a-col",{staticStyle:{width:"250px","padding-right":"1px"},attrs:{md:8,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("车位号：")]),e._v(" "),a("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入车位号"},model:{value:e.search.position_num,callback:function(t){e.$set(e.search,"position_num",t)},expression:"search.position_num"}})],1)],1),a("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("所属车库：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":"0",placeholder:"请选择车库"},model:{value:e.search.garage_id,callback:function(t){e.$set(e.search,"garage_id",t)},expression:"search.garage_id"}},[a("a-select-option",{attrs:{value:"0"}},[e._v(" 全部 ")]),e._l(e.garage_list,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t.garage_id}},[e._v(" "+e._s(t.garage_num)+" ")])}))],2)],1),a("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("收费项目：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":"0",placeholder:"请选择项目"},on:{change:e.projectItemChange},model:{value:e.search.project_id,callback:function(t){e.$set(e.search,"project_id",t)},expression:"search.project_id"}},[a("a-select-option",{attrs:{value:"0"}},[e._v(" 全部 ")]),e._l(e.project_list,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),a("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("收费标准：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":"0",placeholder:"请选择收费标准"},model:{value:e.search.rule_id,callback:function(t){e.$set(e.search,"rule_id",t)},expression:"search.rule_id"}},[a("a-select-option",{attrs:{value:"0"}},[e._v(" 全部 ")]),e._l(e.project_rule_list,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t.id}},[e._v(" "+e._s(t.charge_name)+" ")])}))],2)],1),a("a-col",{staticStyle:{width:"250px","padding-right":"5px","padding-left":"5px"},attrs:{md:8,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"80px"},attrs:{placeholder:"请选择筛选项","default-value":"name"},on:{change:e.keyChange},model:{value:e.search.key_val,callback:function(t){e.$set(e.search,"key_val",t)},expression:"search.key_val"}},[a("a-select-option",{attrs:{value:"name"}},[e._v(" 姓名 ")]),a("a-select-option",{attrs:{value:"phone"}},[e._v(" 电话 ")])],1),a("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:e.key_name},model:{value:e.search.value,callback:function(t){e.$set(e.search,"value",t)},expression:"search.value"}})],1)],1)],1),a("a-row",[a("a-col",{staticStyle:{"padding-left":"0","padding-right":"5px",width:"420px","margin-top":"15px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("作废时间筛选：")]),a("a-range-picker",{staticStyle:{width:"310px"},attrs:{allowClear:!0},on:{change:e.dateOnChange},model:{value:e.search_data,callback:function(t){e.search_data=t},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-col",{staticStyle:{width:"530px","padding-left":"20px","margin-top":"15px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("计费时间筛选：")]),a("span",[a("a-date-picker",{attrs:{"disabled-date":e.disabledServiceStartDate,format:"YYYY-MM-DD",placeholder:"计费开始时间"},on:{change:e.serviceStartTimeChange,openChange:e.handleServiceStartOpenChange}}),e._v(" ~ "),a("a-date-picker",{attrs:{"disabled-date":e.disabledServiceEndDate,format:"YYYY-MM-DD",placeholder:"计费结束时间",open:e.endServiceOpen},on:{change:e.serviceEndTimeChange,openChange:e.handleServiceEndOpenChange}})],1)]),a("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"25px","padding-right":"1px",width:"90px"},attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change}}),a("span",{staticStyle:{"margin-left":"35px",position:"relative",top:"-65px",color:"red","font-size":"18px"}},[e._v("合计金额："+e._s(e.cancel_total_money))])],1)},i=[],r=a("2909"),s=a("1da1"),c=(a("7d24"),a("dfae")),o=(a("96cf"),a("ac1f"),a("841c"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),l=[{title:"房间号/车位号",dataIndex:"numbers",key:"numbers"},{title:"收费项目名称",dataIndex:"project_name",key:"project_name"},{title:"所属收费科目",dataIndex:"charge_number_name",key:"charge_number_name"},{title:"应收金额",dataIndex:"total_money",key:"total_money"},{title:"业主名",dataIndex:"user_name",key:"user_name"},{title:"电话",dataIndex:"user_phone",key:"user_phone"},{title:"计费开始时间",dataIndex:"service_start_time",key:"service_start_time"},{title:"计费结束时间",dataIndex:"service_end_time",key:"service_end_time"},{title:"上次读数",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"本次读数",dataIndex:"now_ammeter",key:"now_ammeter"},{title:"账单作废时间",dataIndex:"updateTime",key:"updateTime"},{title:"作废原因",dataIndex:"discard_reason",key:"discard_reason"},{title:"操作人",dataIndex:"account",key:"account"}],d=[],u={name:"CancelOrderList",filters:{},components:{"a-collapse":c["a"],"a-collapse-panel":c["a"].Panel},data:function(){var e=this;return{reply_content:"",pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},search:{keyword:"",key_val:"name",key_val1:"paytime",garage_id:"0",pay_type:"0",project_id:"0",page:1,service_start_time:"",service_end_time:"",rule_id:"0"},form:this.$form.createForm(this),visible:!1,loading:!1,data:d,columns:l,key_name:"请输入姓名",page:1,options:[],garage_list:[],project_list:[],project_rule_list:[],search_data:null,endServiceOpen:!1,cancel_total_money:0}},activated:function(){this.getList(),this.getSingleListByVillage(),this.getGarageList(),this.getProjectList(),this.getProjectRuleList()},methods:{getList:function(){var e=this;this.loading=!0,this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.request(o["a"].CancelOrderList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1,void 0!=t.cancel_total_money&&(e.cancel_total_money=t.cancel_total_money)}))},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getList(),console.log("onTableChange==>",e,t)},keyChange:function(e){"name"==e&&(this.key_name="请输入姓名"),"phone"==e&&(this.key_name="请输入电话")},addActive:function(e){this.getList()},editActive:function(e){this.getList()},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current,this.getList())},getGarageList:function(){var e=this;this.request(o["a"].garageList).then((function(t){console.log("garage_list",t),e.garage_list=t})).catch((function(t){e.loading=!1}))},getProjectList:function(){var e=this;this.request(o["a"].ChargeProjectList).then((function(t){e.project_list=t.list})).catch((function(t){e.loading=!1}))},projectItemChange:function(e){this.getProjectRuleList()},getProjectRuleList:function(){var e=this;this.project_rule_list=[],this.search.rule_id="0";var t={charge_project_id:this.search.project_id,type:"selectdata"};this.request(o["a"].ChargeRuleList,t).then((function(t){e.project_rule_list=t.list,console.log(e.project_rule_list)})).catch((function(t){e.loading=!1}))},dateOnChange:function(e,t){this.search.date=t,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var e={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(e)},getSingleListByVillage:function(){var e=this;this.request(o["a"].getSingleListByVillage).then((function(t){if(console.log("+++++++Single",t),t){var a=[];t.map((function(e){a.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=a}}))},getFloorList:function(e){var t=this;return new Promise((function(a){t.request(o["a"].getFloorList,{pid:e}).then((function(e){console.log("+++++++Single",e),console.log("resolve",a),a(e)}))}))},getLayerList:function(e){var t=this;return new Promise((function(a){t.request(o["a"].getLayerList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&a(e)}))}))},getVacancyList:function(e){var t=this;return new Promise((function(a){t.request(o["a"].getVacancyList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&a(e)}))}))},loadDataFunc:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e[e.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i,s,c,o,l,d,u,h,p,g,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(1!==e.length){a.next=12;break}return n=Object(r["a"])(t.options),a.next=4,t.getFloorList(e[0]);case 4:i=a.sent,console.log("res",i),s=[],i.map((function(e){return s.push({label:e.name,value:e.id,isLeaf:!1}),n["children"]=s,!0})),n.find((function(t){return t.value===e[0]}))["children"]=s,t.options=n,a.next=36;break;case 12:if(2!==e.length){a.next=24;break}return a.next=15,t.getLayerList(e[1]);case 15:c=a.sent,o=Object(r["a"])(t.options),l=[],c.map((function(e){return l.push({label:e.name,value:e.id,isLeaf:!1}),!0})),d=o.find((function(t){return t.value===e[0]})),d.children.find((function(t){return t.value===e[1]}))["children"]=l,t.options=o,a.next=36;break;case 24:if(3!==e.length){a.next=36;break}return a.next=27,t.getVacancyList(e[2]);case 27:u=a.sent,h=Object(r["a"])(t.options),p=[],u.map((function(e){return p.push({label:e.name,value:e.id,isLeaf:!0}),!0})),g=h.find((function(t){return t.value===e[0]})),m=g.children.find((function(t){return t.value===e[1]})),m.children.find((function(t){return t.value===e[2]}))["children"]=p,t.options=h,console.log("_this.options",t.options);case 36:case"end":return a.stop()}}),a)})))()},disabledServiceStartDate:function(e){var t=this.search.service_end_time;return!(!e||!t)&&e.valueOf()>t.valueOf()},serviceStartTimeChange:function(e,t){console.log("serviceStartTime",t),this.search.service_start_time=t},disabledServiceEndDate:function(e){var t=this.search.service_start_time;return!(!e||!t)&&t.valueOf()>=e.valueOf()},serviceEndTimeChange:function(e,t){console.log("serviceEndTime",t),this.search.service_end_time=t},handleServiceStartOpenChange:function(e){e||(this.endServiceOpen=!0)},handleServiceEndOpenChange:function(e){this.endServiceOpen=e},resetList:function(){this.search={keyword:"",page:1},this.getList()}}},h=u,p=(a("e1e6"),a("2877")),g=Object(p["a"])(h,n,i,!1,null,"1130077c",null);t["default"]=g.exports},e1e6:function(e,t,a){"use strict";a("3710")}}]);