(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eca7bf6"],{"81c9":function(e,t,a){},a456:function(e,t,a){"use strict";a("81c9")},b728:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-row",{staticStyle:{"margin-top":"40px"},attrs:{gutter:24,type:"flex"}},[a("a-col",{staticClass:"card-item",staticStyle:{border:"1px solid #f0f0f0"},attrs:{xl:4,offset:1}},[a("chart-card",{attrs:{title:"核销总收入",total:e.total_price}},[a("div",[a("mini-area",{attrs:{data:e.price_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日收入： "+e._s(e.today_price))])])],2)],1),a("a-col",{staticClass:"card-item",staticStyle:{border:"1px solid #f0f0f0"},attrs:{xl:4,offset:1}},[a("chart-card",{attrs:{title:"核销总补贴",total:e.total_grant}},[a("div",[a("mini-area",{attrs:{data:e.grant_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日补贴： "+e._s(e.today_grant))])])],2)],1),a("a-col",{staticClass:"card-item",staticStyle:{border:"1px solid #f0f0f0"},attrs:{xl:4,offset:1}},[a("chart-card",{attrs:{title:"员工余额消费",total:e.total_money}},[a("div",[a("mini-area",{attrs:{data:e.money_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日余额消费： "+e._s(e.today_money))])])],2)],1),a("a-col",{staticClass:"card-item",staticStyle:{border:"1px solid #f0f0f0"},attrs:{xl:4,offset:1}},[a("chart-card",{attrs:{title:"员工积分消费",total:e.total_score}},[a("div",[a("mini-area",{attrs:{data:e.score_list}})],1),a("template",{slot:"footer"},[a("span",{attrs:{slot:"term"},slot:"term"},[e._v("今日积分消费 ： "+e._s(e.today_score))])])],2)],1)],1),a("a-row",{staticStyle:{"margin-top":"40px"}},[a("a-col",{attrs:{span:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"line-height":"30px","margin-left":"15px"}},[e._v("搜索：")]),a("a-select",{staticStyle:{width:"100px"},attrs:{value:e.queryParams.search_by},on:{change:e.selectSearchBy}},e._l(e.searchBy,(function(t,r){return a("a-select-option",{key:t.key},[e._v(" "+e._s(t.value)+" ")])})),1),a("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入"+e.searchByMap[e.queryParams.search_by],value:e.queryParams.keywords},on:{change:e.keywordsChange}}),a("label",{staticStyle:{"line-height":"30px","margin-left":"15px"}},[e._v("选择日期：")]),a("a-range-picker",{on:{change:e.selectDate}}),a("a-button",{staticStyle:{width:"80px","margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchBtn}},[e._v("搜索")])],1)],1)],1),a("a-row",{staticStyle:{"margin-top":"15px"}},[a("a-tabs",{attrs:{"active-key":e.queryParams.type},on:{change:e.changeTabs}},e._l(e.typeList,(function(t){return a("a-tab-pane",{key:t.key,attrs:{tab:t.title}},[a("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.columns,rowKey:"pigcms_id","data-source":e.dataList,pagination:e.pagination},on:{change:e.changePage},scopedSlots:e._u([{key:"num",fn:function(t,r){return a("span",{},[a("span",[e._v(e._s("coupon"==r.type?r.num:""))])])}},{key:"score",fn:function(t,r){return a("span",{},[a("span",[e._v(e._s("score"==r.type?r.num:""))])])}},{key:"action",fn:function(t,r){return a("span",{},[0==r.is_refund?a("a",{staticClass:"inline-block",on:{click:function(t){return e.refund(r.pigcms_id)}}},[e._v(e._s(e.L("退款")))]):[a("a-popover",{attrs:{title:"退款原因",placement:"topLeft"}},[a("template",{slot:"content"},[a("p",[e._v(e._s(r.refund_remark))])]),a("a",{staticClass:"inline-block"},[e._v(e._s(e.L("退款原因")))])],2)]],2)}}],null,!0)})],1)})),1)],1),a("a-modal",{attrs:{title:"退款"},on:{ok:e.handleRefund},model:{value:e.refund_visible,callback:function(t){e.refund_visible=t},expression:"refund_visible"}},[a("a-textarea",{attrs:{value:e.refundParams.refund_remark,placeholder:"请输入退款备注","auto-size":{minRows:3,maxRows:5}},on:{change:e.refundRemark}})],1)],1)},s=[],o=a("c5bf"),i=a("2af9"),n={components:{ChartCard:i["d"],MiniArea:i["i"],MiniBar:i["j"],RankList:i["m"],Bar:i["c"],Trend:i["r"],NumberInfo:i["l"],MiniSmoothArea:i["k"]},data:function(){return{total_price:0,today_price:0,total_grant:0,today_grant:0,total_money:0,today_money:0,total_score:0,today_score:0,price_list:[],grant_list:[],money_list:[],score_list:[],queryParams:{search_by:2,keywords:"",start_date:"",end_date:"",type:"coupon"},refundParams:{refund_remark:"",pigcms_id:0},refund_visible:!1,searchBy:[{key:2,value:"员工姓名"},{key:3,value:"员工电话"},{key:4,value:"消费券名称"}],searchByMap:{2:"员工姓名",3:"员工电话",4:"消费券名称"},typeList:[{title:"消费券核销",key:"coupon"},{title:"余额消费",key:"money"},{title:"积分消费",key:"score"}],dataList:[],pagination:{pageSize:10,total:0,current:1,page:1},columns:[{title:this.L("会员名称"),dataIndex:"card_user.name"},{title:this.L("会员卡号"),dataIndex:"card_user.card_number"},{title:this.L("会员身份"),dataIndex:"card_user.identity"},{title:this.L("会员部门"),dataIndex:"card_user.department"},{title:this.L("会员手机号"),dataIndex:"user.phone"},{title:this.L("店员名称"),dataIndex:"staff.name"},{title:this.L("消费券名称"),dataIndex:"coupon_name"},{title:this.L("补助"),dataIndex:"grant_price"},{title:this.L("个人消费"),dataIndex:"num"},{title:this.L("总计消费"),dataIndex:"coupon_price"},{title:this.L("核销时间"),dataIndex:"create_time"},{title:this.L("操作"),dataIndex:"pigcms_id",scopedSlots:{customRender:"action"}}]}},created:function(){this.getData(),this.getStatistics()},methods:{keywordsChange:function(e){this.queryParams.keywords=e.target.value},getData:function(){var e=this;this.refund_visible=!1,this.queryParams.pageSize=this.pagination.pageSize,this.queryParams.page=this.pagination.current,this.request(o["a"].cardLogStorestaffList,this.queryParams).then((function(t){e.pagination.total=t.total,e.dataList=t.data}))},getStatistics:function(){var e=this;this.request(o["a"].getStaffDataStatistics,this.queryParams).then((function(t){e.total_price=t.total_price,e.today_price=t.today_price,e.price_list=t.price_list,e.total_grant=t.total_grant,e.today_grant=t.today_grant,e.grant_list=t.grant_list,e.total_money=t.total_money,e.today_money=t.today_money,e.money_list=t.money_list,e.total_score=t.total_score,e.today_score=t.today_score,e.score_list=t.score_list}))},changePage:function(e,t){this.pagination.current=e.current,this.getData()},selectDate:function(e,t){this.queryParams.start_date=t[0],this.queryParams.end_date=t[1]},searchBtn:function(){this.getData()},selectSearchBy:function(e){this.queryParams.search_by=e},refund:function(e){this.refund_visible=!0,this.refundParams.pigcms_id=e},handleRefund:function(){var e=this;return""==this.refundParams.refund_remark?(this.$message.error("请输入退款备注"),!1):""==this.refundParams.pigcms_id?(this.$message.error("退款id不存在"),!1):(this.request(o["a"].staffRefundMoney,this.refundParams).then((function(t){e.refundParams.refund_remark="",e.refundParams.pigcms_id=0,e.$message.success("操作成功"),e.getData()})),void(this.refund_visible=!1))},refundRemark:function(e){this.refundParams.refund_remark=e.target.value},changeTabs:function(e){"coupon"==e?(this.searchBy=[{key:2,value:"员工姓名"},{key:3,value:"员工电话"},{key:4,value:"消费券名称"}],this.columns=[{title:this.L("会员名称"),dataIndex:"card_user.name"},{title:this.L("会员卡号"),dataIndex:"card_user.card_number"},{title:this.L("会员身份"),dataIndex:"card_user.identity"},{title:this.L("会员部门"),dataIndex:"card_user.department"},{title:this.L("会员手机号"),dataIndex:"user.phone"},{title:this.L("店员名称"),dataIndex:"staff.name"},{title:this.L("消费券名称"),dataIndex:"coupon_name"},{title:this.L("补助"),dataIndex:"grant_price"},{title:this.L("个人消费"),dataIndex:"num"},{title:this.L("总计消费"),dataIndex:"coupon_price"},{title:this.L("核销时间"),dataIndex:"create_time"},{title:this.L("操作"),dataIndex:"pigcms_id",scopedSlots:{customRender:"action"}}]):(4==this.queryParams.search_by&&(this.queryParams.search_by=2),this.searchBy=[{key:2,value:"员工姓名"},{key:3,value:"员工电话"}],this.columns=[{title:this.L("会员名称"),dataIndex:"card_user.name"},{title:this.L("会员卡号"),dataIndex:"card_user.card_number"},{title:this.L("会员身份"),dataIndex:"card_user.identity"},{title:this.L("会员部门"),dataIndex:"card_user.department"},{title:this.L("会员手机号"),dataIndex:"user.phone"},{title:this.L("店员名称"),dataIndex:"staff.name"},{title:this.L("个人消费"),dataIndex:"num"},{title:this.L("核销时间"),dataIndex:"create_time"},{title:this.L("备注"),dataIndex:"remark"},{title:this.L("操作"),dataIndex:"pigcms_id",scopedSlots:{customRender:"action"}}]),this.queryParams.type=e,this.getData()}}},l=n,d=(a("a456"),a("0c7c")),c=Object(d["a"])(l,r,s,!1,null,null,null);t["default"]=c.exports},c5bf:function(e,t,a){"use strict";var r={getCardList:"/employee/merchant.EmployeeCard/getCardList",editCard:"/employee/merchant.EmployeeCard/editCard",saveCard:"/employee/merchant.EmployeeCard/saveCard",getCouponList:"/employee/merchant.EmployeeCard/getCouponList",editCoupon:"/employee/merchant.EmployeeCard/editCoupon",saveCoupon:"/employee/merchant.EmployeeCard/saveCoupon",delCoupon:"/employee/merchant.EmployeeCard/delCoupon",getUserCardList:"/employee/merchant.EmployeeCardUser/getUserCardList",exportUserCardList:"/employee/merchant.EmployeeCardUser/exportUserCardList",editCardUser:"/employee/merchant.EmployeeCardUser/editCardUser",saveCardUser:"/employee/merchant.EmployeeCardUser/saveCardUser",delData:"/employee/merchant.EmployeeCardUser/delData",findUser:"/employee/merchant.EmployeeCardUser/findUser",loadExcel:"/employee/merchant.EmployeeCardUser/loadExcel",orderList:"/employee/merchant.EmployeeCardUser/orderList",cardLogList:"/employee/merchant.EmployeeCard/cardLogList",cardLogStorestaffList:"/employee/storestaff.EmployeeCardOrder/cardLogList",paymentScan:"/employee/storestaff.EmployeePayCode/deductions",cardLogExport:"/employee/merchant.EmployeeCard/export",employLableList:"/employee/merchant.EmployeeCardUser/employLableList",employLableAddOrEdit:"/employee/merchant.EmployeeCardUser/employLableAddOrEdit",employLableDel:"/employee/merchant.EmployeeCardUser/employLableDel",dataStatistics:"/employee/merchant.EmployeeCardLog/dataStatistics",getStoreConsumerList:"/employee/merchant.EmployeeCardLog/getStoreConsumerList",dataRechargeStatistics:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatistics",dataRechargeStatisticsExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatisticsExport",dataRechargeOrderExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderExport",paymentMode:"/employee/merchant.EmployeeCardOrder/getPayType",getOrderList:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderList",refundMoney:"/employee/merchant.EmployeeCardOrder/employeeOrderRefund",employeeCouponRefund:"/employee/merchant.EmployeeCardLog/employeeCouponRefund",isOpenUseMoney:"/employee/merchant.EmployeeCard/isOpenUseMoney",getLabelList:"/employee/merchant.EmployeeCardUser/getLabelList",getSendCouponDateList:"/employee/merchant.EmployeeCard/getSendCouponDateList",getCalcDateList:"/employee/merchant.EmployeeCard/getCalcDateList",getStaffDataStatistics:"/employee/storestaff.EmployeeCardLog/dataStatistics",delUserCard:"/employee/merchant.EmployeeCardUser/delUserCard",openUserCard:"/employee/merchant.EmployeeCardUser/openUserCard",closeUserCard:"/employee/merchant.EmployeeCardUser/closeUserCard",getClearScoreList:"/employee/merchant.EmployeeCard/getClearScoreList",staffRefundMoney:"/employee/storestaff.EmployeeCardOrder/employeeOrderRefund",openOrCloseUserCard:"/employee/merchant.EmployeeCardUser/openOrCloseUserCard",getStoreList:"/employee/merchant.EmployeeCardUser/getStoreList",lableBindStore:"/employee/merchant.EmployeeCardUser/lableBindStore"};t["a"]=r}}]);