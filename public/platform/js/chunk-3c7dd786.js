(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c7dd786"],{a7c6:function(e,t,a){},bcf2:function(e,t,a){"use strict";a("a7c6")},c5bf:function(e,t,a){"use strict";var r={getCardList:"/employee/merchant.EmployeeCard/getCardList",editCard:"/employee/merchant.EmployeeCard/editCard",saveCard:"/employee/merchant.EmployeeCard/saveCard",getCouponList:"/employee/merchant.EmployeeCard/getCouponList",editCoupon:"/employee/merchant.EmployeeCard/editCoupon",saveCoupon:"/employee/merchant.EmployeeCard/saveCoupon",delCoupon:"/employee/merchant.EmployeeCard/delCoupon",getUserCardList:"/employee/merchant.EmployeeCardUser/getUserCardList",exportUserCardList:"/employee/merchant.EmployeeCardUser/exportUserCardList",editCardUser:"/employee/merchant.EmployeeCardUser/editCardUser",saveCardUser:"/employee/merchant.EmployeeCardUser/saveCardUser",delData:"/employee/merchant.EmployeeCardUser/delData",findUser:"/employee/merchant.EmployeeCardUser/findUser",loadExcel:"/employee/merchant.EmployeeCardUser/loadExcel",orderList:"/employee/merchant.EmployeeCardUser/orderList",cardLogList:"/employee/merchant.EmployeeCard/cardLogList",cardLogStorestaffList:"/employee/storestaff.EmployeeCardOrder/cardLogList",paymentScan:"/employee/storestaff.EmployeePayCode/deductions",cardLogExport:"/employee/merchant.EmployeeCard/export",employLableList:"/employee/merchant.EmployeeCardUser/employLableList",employLableAddOrEdit:"/employee/merchant.EmployeeCardUser/employLableAddOrEdit",employLableDel:"/employee/merchant.EmployeeCardUser/employLableDel",dataStatistics:"/employee/merchant.EmployeeCardLog/dataStatistics",getStoreConsumerList:"/employee/merchant.EmployeeCardLog/getStoreConsumerList",dataRechargeStatistics:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatistics",dataRechargeStatisticsExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatisticsExport",dataRechargeOrderExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderExport",paymentMode:"/employee/merchant.EmployeeCardOrder/getPayType",getOrderList:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderList",refundMoney:"/employee/merchant.EmployeeCardOrder/employeeOrderRefund",employeeCouponRefund:"/employee/merchant.EmployeeCardLog/employeeCouponRefund",isOpenUseMoney:"/employee/merchant.EmployeeCard/isOpenUseMoney",getLabelList:"/employee/merchant.EmployeeCardUser/getLabelList",getSendCouponDateList:"/employee/merchant.EmployeeCard/getSendCouponDateList",getCalcDateList:"/employee/merchant.EmployeeCard/getCalcDateList",getStaffDataStatistics:"/employee/storestaff.EmployeeCardLog/dataStatistics",delUserCard:"/employee/merchant.EmployeeCardUser/delUserCard",openUserCard:"/employee/merchant.EmployeeCardUser/openUserCard",closeUserCard:"/employee/merchant.EmployeeCardUser/closeUserCard",getClearScoreList:"/employee/merchant.EmployeeCard/getClearScoreList",staffRefundMoney:"/employee/storestaff.EmployeeCardOrder/employeeOrderRefund",openOrCloseUserCard:"/employee/merchant.EmployeeCardUser/openOrCloseUserCard",getStoreList:"/employee/merchant.EmployeeCardUser/getStoreList",lableBindStore:"/employee/merchant.EmployeeCardUser/lableBindStore"};t["a"]=r},ccab:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-row",[a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employee_card"}},[a("span",[e._v("商家员工卡列表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeCardConsume"}},[a("span",[e._v("核销列表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeCardRechargeList"}},[a("span",[e._v("充值记录")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeBillList"}},[a("span",[e._v("财务报表")])])],1),a("div",{staticClass:"card_tab"},[a("span",{staticClass:"on"},[e._v("积分清零记录")])])]),a("a-row",{staticStyle:{"margin-top":"20px"}},[a("a-col",{attrs:{span:20}},[e._v(" 选择日期： "),a("a-range-picker",{on:{change:e.selectDate2}}),a("a-button",{staticStyle:{height:"30px","margin-left":"20px"},attrs:{type:"primary"},on:{click:e.onSearch}},[e._v(" 搜索 ")])],1)],1),a("a-row",{staticStyle:{"margin-top":"20px"}},[a("a-col",{attrs:{span:10}},[a("a-alert",{attrs:{message:"此时间段内清除总积分："+e.clearScore,type:"info","show-icon":""}})],1)],1),a("a-row",[a("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.columns,rowKey:"id","data-source":e.dataList,pagination:e.pagination},on:{change:e.changePage}})],1)],1)},o=[],s=a("c5bf"),n=a("2af9"),l={components:{ChartCard:n["d"],MiniArea:n["i"],MiniBar:n["j"],RankList:n["m"],Bar:n["c"],Trend:n["r"],NumberInfo:n["l"],MiniSmoothArea:n["k"]},data:function(){return{clearScore:0,columns:[{title:this.L("员工名称"),dataIndex:"user_name"},{title:this.L("手机号"),dataIndex:"user.phone"},{title:this.L("清除积分"),dataIndex:"clear_score"},{title:this.L("剩余积分"),dataIndex:"now_score"},{title:this.L("清零时间"),dataIndex:"create_time"}],dataList:[],pagination:{pageSize:10,total:0,current:1,page:10},StoreConsumerParams:{start_date:"",end_date:"",keywords:"",page:1,page_size:10}}},mounted:function(){this.getStoreConsumerList()},methods:{getStoreConsumerList:function(){var e=this;this.StoreConsumerParams.page_size=this.pagination.pageSize,this.StoreConsumerParams.page=this.pagination.current,this.request(s["a"].getClearScoreList,this.StoreConsumerParams).then((function(t){e.pagination.total=t.total,e.dataList=t.data,e.clearScore=t.total_score}))},selectDate2:function(e,t){this.StoreConsumerParams.start_date=t[0],this.StoreConsumerParams.end_date=t[1]},changePage:function(e,t){this.pagination.current=e.current,this.getStoreConsumerList()},keywordsSearch:function(e){this.StoreConsumerParams.keywords=e.target.value},onSearch:function(){this.getStoreConsumerList()}}},m=l,d=(a("bcf2"),a("0c7c")),p=Object(d["a"])(m,r,o,!1,null,"93881a6a",null);t["default"]=p.exports}}]);