(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb1a6a2e","chunk-2d0c06af"],{4261:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[e._v(" Open the message box ")])},o=[],s={downloadExportFile:"/common/common.export/downloadExportFile"},l=s,i="updatable",n={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(a){e.$message.loading({content:t,key:i,duration:0}),console.log("添加导出计划任务成功"),e.file_url=l.downloadExportFile+"?id="+a.export_id,e.file_date=a,e.CheckStatus()}))},CheckStatus:function(){var e=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(t){0==t.error?(e.$message.success({content:"下载成功!",key:i,duration:2}),location.href=t.url):setTimeout((function(){e.CheckStatus(),console.log("重复请求")}),1e3)}))}}},c=n,p=a("0c7c"),d=Object(p["a"])(c,r,o,!1,null,"dd2f8128",null);t["default"]=d.exports},"7bba":function(e,t,a){"use strict";a("907f")},"907f":function(e,t,a){},c5bf:function(e,t,a){"use strict";var r={getCardList:"/employee/merchant.EmployeeCard/getCardList",editCard:"/employee/merchant.EmployeeCard/editCard",saveCard:"/employee/merchant.EmployeeCard/saveCard",getCouponList:"/employee/merchant.EmployeeCard/getCouponList",editCoupon:"/employee/merchant.EmployeeCard/editCoupon",saveCoupon:"/employee/merchant.EmployeeCard/saveCoupon",delCoupon:"/employee/merchant.EmployeeCard/delCoupon",getUserCardList:"/employee/merchant.EmployeeCardUser/getUserCardList",exportUserCardList:"/employee/merchant.EmployeeCardUser/exportUserCardList",editCardUser:"/employee/merchant.EmployeeCardUser/editCardUser",saveCardUser:"/employee/merchant.EmployeeCardUser/saveCardUser",delData:"/employee/merchant.EmployeeCardUser/delData",findUser:"/employee/merchant.EmployeeCardUser/findUser",loadExcel:"/employee/merchant.EmployeeCardUser/loadExcel",orderList:"/employee/merchant.EmployeeCardUser/orderList",cardLogList:"/employee/merchant.EmployeeCard/cardLogList",cardLogStorestaffList:"/employee/storestaff.EmployeeCardOrder/cardLogList",paymentScan:"/employee/storestaff.EmployeePayCode/deductions",cardLogExport:"/employee/merchant.EmployeeCard/export",employLableList:"/employee/merchant.EmployeeCardUser/employLableList",employLableAddOrEdit:"/employee/merchant.EmployeeCardUser/employLableAddOrEdit",employLableDel:"/employee/merchant.EmployeeCardUser/employLableDel",dataStatistics:"/employee/merchant.EmployeeCardLog/dataStatistics",getStoreConsumerList:"/employee/merchant.EmployeeCardLog/getStoreConsumerList",dataRechargeStatistics:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatistics",dataRechargeStatisticsExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatisticsExport",dataRechargeOrderExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderExport",paymentMode:"/employee/merchant.EmployeeCardOrder/getPayType",getOrderList:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderList",refundMoney:"/employee/merchant.EmployeeCardOrder/employeeOrderRefund",employeeCouponRefund:"/employee/merchant.EmployeeCardLog/employeeCouponRefund",isOpenUseMoney:"/employee/merchant.EmployeeCard/isOpenUseMoney",getLabelList:"/employee/merchant.EmployeeCardUser/getLabelList",getSendCouponDateList:"/employee/merchant.EmployeeCard/getSendCouponDateList",getCalcDateList:"/employee/merchant.EmployeeCard/getCalcDateList",getStaffDataStatistics:"/employee/storestaff.EmployeeCardLog/dataStatistics",delUserCard:"/employee/merchant.EmployeeCardUser/delUserCard",openUserCard:"/employee/merchant.EmployeeCardUser/openUserCard",closeUserCard:"/employee/merchant.EmployeeCardUser/closeUserCard",getClearScoreList:"/employee/merchant.EmployeeCard/getClearScoreList",staffRefundMoney:"/employee/storestaff.EmployeeCardOrder/employeeOrderRefund",openOrCloseUserCard:"/employee/merchant.EmployeeCardUser/openOrCloseUserCard",getStoreList:"/employee/merchant.EmployeeCardUser/getStoreList",lableBindStore:"/employee/merchant.EmployeeCardUser/lableBindStore"};t["a"]=r},fdc0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-row",[a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employee_card"}},[a("span",[e._v("商家员工卡列表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeCardConsume"}},[a("span",[e._v("核销列表")])])],1),a("div",{staticClass:"card_tab"},[a("span",{staticClass:"on"},[e._v("充值记录")])]),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeBillList"}},[a("span",[e._v("财务报表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeClearScoreList"}},[a("span",[e._v("积分清零记录")])])],1)]),a("a-row",{staticStyle:{"margin-top":"10px"}},[a("a-col",{attrs:{span:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"line-height":"30px","margin-left":"15px"}},[e._v("选择日期：")]),a("a-range-picker",{on:{change:e.selectChartsDate}}),a("a-button",{staticStyle:{width:"80px","margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchChartsBtn}},[e._v("搜索")]),a("a-dropdown",{staticStyle:{width:"80px","margin-left":"10px",float:"right"}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:e.onChartsExport},slot:"overlay"},e._l(e.exportPeriod,(function(t,r){return a("a-menu-item",{key:r},[e._v(e._s(t.value))])})),1),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"}},[e._v(" 导出 ")])],1)],1)],1)],1),a("a-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:24}},[a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{staticStyle:{border:"1px solid #bbb9b9"},attrs:{title:"充值总笔数",total:e.getStatisticsList.all_count}},[a("template",{slot:"action"},[a("a-tooltip",[a("template",{slot:"title"},[e._v(" 充值总笔数=充值笔数-退款笔数 ")]),a("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),a("template",{slot:"footer"},[e._v(" 今日笔数"),a("span",{staticClass:"ml-5"},[e._v(e._s(e.getStatisticsList.today_count))])])],2)],1),a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{staticStyle:{border:"1px solid #bbb9b9"},attrs:{title:"充值总金额",total:e.getStatisticsList.all_money}},[a("template",{slot:"action"},[a("a-tooltip",[a("template",{slot:"title"},[e._v(" 充值总金额=充值金额-退款金额 ")]),a("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),a("template",{slot:"footer"},[e._v(" 今日充值金额"),a("span",{staticClass:"ml-5"},[e._v(e._s(e.getStatisticsList.today_money))])])],2)],1),a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{staticStyle:{border:"1px solid #bbb9b9"},attrs:{title:"充值人数",total:e.getStatisticsList.all_user}},[a("template",{slot:"action"},[a("a-tooltip",[a("template",{slot:"title"},[e._v(" 充值人数 ")]),a("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),a("template",{slot:"footer"},[e._v(" 今日充值人数"),a("span",{staticClass:"ml-5"},[e._v(e._s(e.getStatisticsList.today_user))])])],2)],1),a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{staticStyle:{border:"1px solid #bbb9b9"},attrs:{title:"退款金额",total:e.getStatisticsList.all_refund}},[a("template",{slot:"action"},[a("a-tooltip",[a("template",{slot:"title"},[e._v(" 退款金额 ")]),a("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),a("template",{slot:"footer"},[e._v(" 今日退款金额"),a("span",{staticClass:"ml-5"},[e._v(e._s(e.getStatisticsList.today_refund))])])],2)],1)],1),a("br"),a("a-row",{staticStyle:{"margin-top":"15px"}},[a("a-col",{attrs:{span:24}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"100px"},attrs:{value:e.queryParams.search_type},on:{change:e.selectSearchBy}},e._l(e.searchBy,(function(t,r){return a("a-select-option",{key:t.key},[e._v(" "+e._s(t.value)+" ")])})),1),a("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入"+e.searchTablePla,value:e.queryParams.keyword},on:{change:e.keywordsChange}}),a("label",{staticStyle:{"line-height":"30px","margin-left":"15px"}},[e._v("选择日期：")]),a("a-range-picker",{on:{change:e.selectTableDate}}),a("label",{staticStyle:{"line-height":"30px","margin-left":"15px"}},[e._v("核销类型：")]),a("a-select",{staticStyle:{width:"150px"},attrs:{value:e.queryParams.pay_type},on:{change:e.cancelTypeChange}},e._l(e.typeList,(function(t,r){return a("a-select-option",{key:t.key},[e._v(" "+e._s(t.title)+" ")])})),1),a("label",{staticStyle:{"line-height":"30px","margin-left":"15px"}},[e._v("状态：")]),a("a-select",{staticStyle:{width:"100px"},attrs:{value:e.queryParams.status},on:{change:e.verifyTypeChange}},e._l(e.verifyType,(function(t,r){return a("a-select-option",{key:t.key},[e._v(" "+e._s(t.value)+" ")])})),1),a("a-button",{staticStyle:{width:"80px","margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchTableBtn}},[e._v("搜索")]),a("a-dropdown",{staticStyle:{width:"80px","margin-left":"10px",float:"right"}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:e.onTableExport},slot:"overlay"},e._l(e.exportPeriod,(function(t,r){return a("a-menu-item",{key:r},[e._v(e._s(t.value))])})),1),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"}},[e._v(" 导出")])],1)],1)],1)],1),a("br"),a("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.columns,rowKey:"order_id","data-source":e.dataList,pagination:e.pagination},on:{change:e.changePage},scopedSlots:e._u([{key:"operation",fn:function(t,r){return a("span",{directives:[{name:"show",rawName:"v-show",value:1==r.refund_btn,expression:"record.refund_btn == 1"}]},[a("a-popconfirm",{attrs:{title:"确认退款？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.onRefund(r)}}},[a("a",[e._v("退款")])])],1)}}])}),a("export-add",{ref:"ExportAddModal",attrs:{exportUrl:e.exportUrl,queryParam:e.statisticsExportParams}})],1)},o=[],s=a("5530"),l=(a("d3b7"),a("159b"),a("b64b"),a("d81d"),a("a9e3"),a("c5bf")),i=a("4261"),n=a("2af9"),c={components:{ExportAdd:i["default"],ChartCard:n["d"],MiniArea:n["i"]},data:function(){return{chartsMoney:[{x:"2022-02-05",y:10},{x:"2022-02-06",y:20},{x:"2022-02-07",y:40},{x:"2022-02-08",y:30},{x:"2022-02-09",y:10}],exportPeriod:[{key:"day",value:"按日导出"},{key:"month",value:"按月导出"},{key:"year",value:"按年导出"}],exportUrl:l["a"].dataRechargeStatisticsExport,queryParams:{search_type:1,keyword:"",start_time:"",end_time:"",status:0,pay_type:0},statisticsExportParams:{},chartsParams:{start_time:"",end_time:""},getStatisticsList:{all_count:100,today_count:120,all_money:130,today_money:120,all_user:133,today_user:12,all_refund:34,today_refund:5464},searchBy:[{key:1,value:"订单号"},{key:2,value:"卡号"},{key:3,value:"姓名"},{key:4,value:"手机号"},{key:5,value:"会员身份"},{key:6,value:"部门"},{key:7,value:"标签"}],searchTablePla:"订单号",verifyType:[{key:0,value:"全部"},{key:20,value:"已充值"},{key:40,value:"退款"}],typeList:[],dataList:[],pagination:{pageSize:10,total:0,current:1,page:1},columns:[{title:this.L("订单号"),dataIndex:"real_orderid"},{title:this.L("卡号"),dataIndex:"card_number"},{title:this.L("姓名"),dataIndex:"nickname"},{title:this.L("手机号"),dataIndex:"phone"},{title:this.L("身份部门"),dataIndex:"id_de"},{title:this.L("充值金额"),dataIndex:"total_price"},{title:this.L("账户剩余金额"),dataIndex:"card_money"},{title:this.L("充值方式"),dataIndex:"pay_type_val"},{title:this.L("充值时间"),dataIndex:"pay_time"},{title:this.L("状态"),dataIndex:"order_status_val"},{title:this.L("操作"),dataIndex:"operation",scopedSlots:{customRender:"operation"}}]}},created:function(){this.getData(),this.getStatistics(),this.getpay()},methods:{getStatistics:function(){var e=this,t=this.chartsParams;this.request(l["a"].dataRechargeStatistics,t).then((function(t){console.log(t,"-----------获取数据统计------------"),e.getStatisticsList=t}))},getpay:function(){var e=this;this.request(l["a"].paymentMode).then((function(t){var a=e;e.typeList=[],console.log(t,"-----------获取支付方式------------"),Object.keys(t).forEach((function(e){console.log(e,t[e]),a.typeList.push({title:t[e],key:e})})),e.queryParams.pay_type=e.typeList[0].key}))},keywordsChange:function(e){this.queryParams.keyword=e.target.value},getData:function(){var e=this;this.queryParams.pageSize=this.pagination.pageSize,this.queryParams.page=this.pagination.current,this.request(l["a"].getOrderList,this.queryParams).then((function(t){e.pagination.total=t.total,console.log(t,"------------表格列表数据-----------------"),e.dataList=t.data}))},changePage:function(e,t){this.pagination.current=e.current,this.getData()},selectChartsDate:function(e,t){this.chartsParams.start_time=t[0],this.chartsParams.end_time=t[1]},selectTableDate:function(e,t){console.log(e,t),this.queryParams.start_time=t[0],this.queryParams.end_time=t[1]},searchChartsBtn:function(){console.log("点击图表搜索"),this.getStatistics()},searchTableBtn:function(){console.log("点击表格搜索",this.queryParams),this.getData()},onChartsExport:function(e){var t=this,a=Object(s["a"])(Object(s["a"])({},this.chartsParams),{},{export_type:this.exportPeriod[e.key].key});this.statisticsExportParams=a,this.exportUrl=l["a"].dataRechargeStatisticsExport,console.log(this.statisticsExportParams,this.exportUrl,"12313123"),this.$nextTick((function(){t.$refs.ExportAddModal.exports()}))},onTableExport:function(e){var t=this;console.log("点击图表导出",e,this.queryParams);var a=Object(s["a"])(Object(s["a"])({},this.queryParams),{},{export_type:this.exportPeriod[e.key].key});this.statisticsExportParams=a,this.exportUrl=l["a"].dataRechargeOrderExport,console.log(a),this.$nextTick((function(){t.$refs.ExportAddModal.exports()}))},selectSearchBy:function(e){var t=this;console.log(e),this.queryParams.search_type=e,this.searchBy.map((function(a){e===a.key&&(t.searchTablePla=a.value)}))},cancelTypeChange:function(e){console.log(e),this.queryParams.pay_type=e},verifyTypeChange:function(e){console.log(e),this.queryParams.status=e},onRefund:function(e){var t=this;if(console.log(e),Number(e.card_money>=e.total_price)){var a={order_id:e.order_id};this.request(l["a"].refundMoney,a).then((function(e){t.$message.success("退款成功"),t.getData()}))}else this.$message.error("账户余额不足退款")}}},p=c,d=(a("7bba"),a("0c7c")),m=Object(d["a"])(p,r,o,!1,null,null,null);t["default"]=m.exports}}]);