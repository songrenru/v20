(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a99d5d3e"],{2209:function(e,t,a){"use strict";a("cbff")},c5bf:function(e,t,a){"use strict";var r={getCardList:"/employee/merchant.EmployeeCard/getCardList",editCard:"/employee/merchant.EmployeeCard/editCard",saveCard:"/employee/merchant.EmployeeCard/saveCard",getCouponList:"/employee/merchant.EmployeeCard/getCouponList",editCoupon:"/employee/merchant.EmployeeCard/editCoupon",saveCoupon:"/employee/merchant.EmployeeCard/saveCoupon",delCoupon:"/employee/merchant.EmployeeCard/delCoupon",getUserCardList:"/employee/merchant.EmployeeCardUser/getUserCardList",exportUserCardList:"/employee/merchant.EmployeeCardUser/exportUserCardList",editCardUser:"/employee/merchant.EmployeeCardUser/editCardUser",saveCardUser:"/employee/merchant.EmployeeCardUser/saveCardUser",delData:"/employee/merchant.EmployeeCardUser/delData",findUser:"/employee/merchant.EmployeeCardUser/findUser",loadExcel:"/employee/merchant.EmployeeCardUser/loadExcel",orderList:"/employee/merchant.EmployeeCardUser/orderList",cardLogList:"/employee/merchant.EmployeeCard/cardLogList",cardLogStorestaffList:"/employee/storestaff.EmployeeCardOrder/cardLogList",paymentScan:"/employee/storestaff.EmployeePayCode/deductions",cardLogExport:"/employee/merchant.EmployeeCard/export",employLableList:"/employee/merchant.EmployeeCardUser/employLableList",employLableAddOrEdit:"/employee/merchant.EmployeeCardUser/employLableAddOrEdit",employLableDel:"/employee/merchant.EmployeeCardUser/employLableDel",dataStatistics:"/employee/merchant.EmployeeCardLog/dataStatistics",getStoreConsumerList:"/employee/merchant.EmployeeCardLog/getStoreConsumerList",dataRechargeStatistics:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatistics",dataRechargeStatisticsExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatisticsExport",dataRechargeOrderExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderExport",paymentMode:"/employee/merchant.EmployeeCardOrder/getPayType",getOrderList:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderList",refundMoney:"/employee/merchant.EmployeeCardOrder/employeeOrderRefund",employeeCouponRefund:"/employee/merchant.EmployeeCardLog/employeeCouponRefund",isOpenUseMoney:"/employee/merchant.EmployeeCard/isOpenUseMoney",getLabelList:"/employee/merchant.EmployeeCardUser/getLabelList",getSendCouponDateList:"/employee/merchant.EmployeeCard/getSendCouponDateList",getCalcDateList:"/employee/merchant.EmployeeCard/getCalcDateList",getStaffDataStatistics:"/employee/storestaff.EmployeeCardLog/dataStatistics",delUserCard:"/employee/merchant.EmployeeCardUser/delUserCard",openUserCard:"/employee/merchant.EmployeeCardUser/openUserCard",closeUserCard:"/employee/merchant.EmployeeCardUser/closeUserCard",getClearScoreList:"/employee/merchant.EmployeeCard/getClearScoreList",staffRefundMoney:"/employee/storestaff.EmployeeCardOrder/employeeOrderRefund",openOrCloseUserCard:"/employee/merchant.EmployeeCardUser/openOrCloseUserCard",getStoreList:"/employee/merchant.EmployeeCardUser/getStoreList",lableBindStore:"/employee/merchant.EmployeeCardUser/lableBindStore"};t["a"]=r},cbff:function(e,t,a){},db36:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-row",[a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employee_card"}},[a("span",[e._v("商家员工卡列表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeCardConsume"}},[a("span",[e._v("核销列表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeCardRechargeList"}},[a("span",[e._v("充值记录")])])],1),a("div",{staticClass:"card_tab"},[a("span",{staticClass:"on"},[e._v("财务报表")])]),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeClearScoreList"}},[a("span",[e._v("积分清零记录")])])],1)]),a("a-row",{staticStyle:{"margin-top":"20px"}},[a("a-col",{attrs:{span:10}},[e._v(" 选择日期： "),a("a-range-picker",{on:{change:e.selectDate}})],1),a("a-col",{attrs:{span:6,offset:8,align:"right"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{value:e.exportParams.exportType},on:{change:e.selectExportType}},e._l(e.exportType,(function(t,r){return a("a-select-option",{key:r},[e._v(" "+e._s(t)+" ")])})),1),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable(e.exportUrl,e.exportParams)}}},[e._v(" 导出 ")])],1)],1),a("a-row",{staticStyle:{"margin-top":"40px"},attrs:{gutter:24}},[a("a-col",{staticClass:"card-item",attrs:{sm:24,md:12,xl:4}},[a("chart-card",{attrs:{title:"食堂总收入",total:e.total_price}},[a("div",[a("mini-area",{attrs:{data:e.price_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日收入： "+e._s(e.today_price))])])],2)],1),a("a-col",{staticClass:"card-item",attrs:{sm:24,md:12,xl:4}},[a("chart-card",{attrs:{title:"食堂总补贴",total:e.total_grant}},[a("div",[a("mini-area",{attrs:{data:e.grant_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日补贴： "+e._s(e.today_grant))])])],2)],1),a("a-col",{staticClass:"card-item",attrs:{sm:24,md:12,xl:4}},[a("chart-card",{attrs:{title:"员工余额消费",total:e.total_money}},[a("div",[a("mini-area",{attrs:{data:e.money_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日余额消费： "+e._s(e.today_money))])])],2)],1),a("a-col",{staticClass:"card-item",attrs:{sm:24,md:12,xl:4}},[a("chart-card",{attrs:{title:"员工积分消费",total:e.total_score}},[a("div",[a("mini-area",{attrs:{data:e.score_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日积分消费 ： "+e._s(e.today_score))])])],2)],1)],1),a("a-row",{staticStyle:{"margin-top":"50px"}},[a("a-col",{attrs:{span:20}},[e._v(" 食堂名称： "),a("a-input",{staticStyle:{width:"300px","margin-right":"20px"},attrs:{placeholder:"请输入食堂名称"},on:{change:e.keywordsSearch}}),e._v(" 选择日期： "),a("a-range-picker",{on:{change:e.selectDate2}}),a("a-button",{staticStyle:{height:"30px","margin-left":"20px"},attrs:{type:"primary"},on:{click:e.onSearch}},[e._v(" 搜索 ")])],1),a("a-col",{attrs:{span:4,align:"right"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable(e.exportUrl2,e.StoreConsumerParams)}}},[e._v(" 导出 ")])],1)],1),a("a-row",{staticStyle:{"margin-top":"20px"}},[a("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.columns,rowKey:"id","data-source":e.dataList,pagination:e.pagination},on:{change:e.changePage}})],1)],1)},o=[],s=a("c5bf"),l=a("2af9"),n={components:{ChartCard:l["d"],MiniArea:l["i"],MiniBar:l["j"],RankList:l["m"],Bar:l["c"],Trend:l["r"],NumberInfo:l["l"],MiniSmoothArea:l["k"]},data:function(){return{exportType:["按日导出","按月导出","按年导出"],exportUrl:"/employee/merchant.EmployeeCardLog/exportBillData",exportUrl2:"/employee/merchant.EmployeeCardLog/exportStoreList",exportParams:{exportType:0},columns:[{title:this.L("食堂名称"),dataIndex:"name"},{title:this.L("食堂收入"),dataIndex:"total_money"},{title:this.L("食堂总补贴"),dataIndex:"grant_price"},{title:this.L("员工现金总支付"),dataIndex:"money"},{title:this.L("员工积分总支付"),dataIndex:"score"}],dataList:[],pagination:{pageSize:10,total:0,current:1,page:10},DataCountParams:{start_date:"",end_date:""},StoreConsumerParams:{start_date:"",end_date:"",keywords:"",page:1,page_size:10},total_price:0,today_price:0,price_list:[],total_grant:0,today_grant:0,grant_list:[],total_money:0,today_money:0,money_list:[],total_score:0,today_score:0,score_list:[]}},mounted:function(){this.getDataStatistics(),this.getStoreConsumerList()},methods:{getDataStatistics:function(){var e=this;this.request(s["a"].dataStatistics,this.DataCountParams).then((function(t){e.total_price=t.total_price,e.today_price=t.today_price,e.price_list=t.price_list,e.total_grant=t.total_grant,e.today_grant=t.today_grant,e.grant_list=t.grant_list,e.total_money=t.total_money,e.today_money=t.today_money,e.money_list=t.money_list,e.total_score=t.total_score,e.today_score=t.today_score,e.score_list=t.score_list}))},getStoreConsumerList:function(){var e=this;this.StoreConsumerParams.page_size=this.pagination.pageSize,this.StoreConsumerParams.page=this.pagination.current,this.request(s["a"].getStoreConsumerList,this.StoreConsumerParams).then((function(t){e.pagination.total=t.total,e.dataList=t.data}))},selectDate:function(e,t){this.DataCountParams.start_date=this.exportParams.start_date=t[0],this.DataCountParams.end_date=this.exportParams.end_date=t[1],this.getDataStatistics()},selectDate2:function(e,t){this.StoreConsumerParams.start_date=t[0],this.StoreConsumerParams.end_date=t[1]},selectExportType:function(e){this.exportParams.exportType=e},changePage:function(e,t){this.pagination.current=e.current,this.getStoreConsumerList()},keywordsSearch:function(e){this.StoreConsumerParams.keywords=e.target.value},onSearch:function(){this.getStoreConsumerList()},exportTable:function(e,t){this.request(e,t).then((function(e){var t=e.file_url;t&&window.open(t)}))}}},i=n,m=(a("2209"),a("2877")),p=Object(m["a"])(i,r,o,!1,null,"4fae56a2",null);t["default"]=p.exports}}]);