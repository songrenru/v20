(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0425393e","chunk-d70206fa"],{"3d4e":function(e,t,a){},"41e7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:840,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancelModel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{staticStyle:{"max-height":"600px","overflow-y":"scroll"},attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"券名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入券名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("a-form-item",{attrs:{label:"消费券金额",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入券金额"},model:{value:e.formData.coupon_price,callback:function(t){e.$set(e.formData,"coupon_price",t)},expression:"formData.coupon_price"}})],1),a("a-form-model-item",{attrs:{label:"可核销时间段",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-time-picker",{staticStyle:{width:"180px"},attrs:{allowClear:e.checkStatus,value:e.moment(e.start_time,"HH:mm:ss")},on:{change:e.onCycleStimeeRangeChange}}),a("span",[e._v("-")]),a("a-time-picker",{staticStyle:{width:"180px"},attrs:{allowClear:e.checkStatus,value:e.moment(e.end_time,"HH:mm:ss"),getPopupContainer:function(e){return e.parentNode}},on:{change:e.onCycleEtimeeRangeChange}})],1),a("a-form-item",{attrs:{label:"可核销的数量",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入可核销的数量"},model:{value:e.formData.send_num,callback:function(t){e.$set(e.formData,"send_num",t)},expression:"formData.send_num"}})],1),a("a-form-item",{attrs:{label:"核销的时扣除的余额",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入核销的时扣除的余额"},model:{value:e.formData.money,callback:function(t){e.$set(e.formData,"money",t)},expression:"formData.money"}})],1),a("a-form-item",{attrs:{label:"优惠券金额(未核销转积分数量)",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入优惠券金额(未核销转积分数量)"},model:{value:e.formData.add_score_num,callback:function(t){e.$set(e.formData,"add_score_num",t)},expression:"formData.add_score_num"}})],1),a("a-form-item",{attrs:{label:"转换积分时需扣除的金额",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入转换积分时需扣除的金额"},model:{value:e.formData.deduct_money,callback:function(t){e.$set(e.formData,"deduct_money",t)},expression:"formData.deduct_money"}})],1),a("a-form-model-item",{attrs:{label:"自动转积分时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-time-picker",{attrs:{value:e.moment(e.overdue_time,"HH:mm:ss")},on:{change:e.onOverdueChange}})],1),a("a-form-item",{attrs:{label:"选择发券员工身份标签",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{attrs:{mode:"multiple"},model:{value:e.formData.label_ids,callback:function(t){e.$set(e.formData,"label_ids",t)},expression:"formData.label_ids"}},e._l(e.label_list,(function(t,r){return a("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"选择发券时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.$refs.setCalendarModel.setCalendar(e.formData.pigcms_id)}}},[e._v(" 日历设置 ")])],1),a("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",checked:1==e.formData.status},on:{change:e.isStatusChange}})],1),a("a-form-item",{attrs:{label:"是否开启自动转积分",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",checked:1==e.formData.is_auto_turn_score},on:{change:e.isAutoChange}})],1)],1)],1),a("set-calendar",{ref:"setCalendarModel",on:{setCalendarData:e.setCalendarData}})],1)},s=[],o=(a("b0c0"),a("c5bf")),i=a("c1df"),n=a.n(i),l=a("d279"),m={name:"editCoupon",components:{SetCalendar:l["default"]},data:function(){return{checkStatus:!1,title:"添加优惠券",start_time:null,end_time:null,overdue_time:null,formData:{pigcms_id:0,card_id:0,name:"",start_time:"00:00:00",end_time:"00:00:00",send_num:0,money:0,add_score_num:0,deduct_money:0,status:0,coupon_price:0,label_ids:[],overdue_time:"00:00:00",is_auto_turn_score:0},visible:!1,labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,label_list:[],form:this.$form.createForm(this,{name:"coordinated"})}},methods:{moment:n.a,edit:function(e,t){var a=this;0==e?(this.title="添加优惠券",this.formData={pigcms_id:0,card_id:t,name:"",start_time:"00:00:00",end_time:"00:00:00",send_num:0,money:0,add_score_num:0,deduct_money:0,status:0,coupon_price:0,label_ids:[],overdue_time:"00:00:00",is_auto_turn_score:0},this.start_time="00:00:00",this.end_time="00:00:00",this.overdue_time="00:00:00",this.$set(this,"end_time",this.end_time),this.$set(this,"start_time",this.start_time),this.$set(this,"overdue_time",this.overdue_time),this.$set(this,"formData",this.formData),this.getLabelList(),this.visible=!0):this.request(o["a"].editCoupon,{pigcms_id:e}).then((function(e){a.getLabelList(),Object.assign(a.$data,a.$options.data.call(a)),a.confirmLoading=!1,e.pigcms_id&&(a.title="编辑优惠券",a.start_time=e.start_time,a.end_time=e.end_time,a.overdue_time=n()(e.overdue_time,"HH:ii:ss"),a.$set(a,"end_time",a.end_time),a.$set(a,"start_time",a.start_time),a.$set(a,"overdue_time",a.overdue_time),a.$set(a,"formData",e)),a.visible=!0}))},isStatusChange:function(e){this.formData.status=e?1:0},isAutoChange:function(e){this.formData.is_auto_turn_score=e?1:0},onCycleStimeeRangeChange:function(e,t){this.$set(this,"start_time",t),this.$set(this.formData,"start_time",t)},onOverdueChange:function(e,t){this.$set(this,"overdue_time",t),this.$set(this.formData,"overdue_time",t)},onCycleEtimeeRangeChange:function(e,t){this.$set(this,"end_time",t),this.$set(this.formData,"end_time",t)},handleSubmit:function(){var e=this;if(""==this.formData.name)return this.$message.error("券名称必填"),!1;this.request(o["a"].saveCoupon,this.formData).then((function(t){e.formData.start_time=e.formData.end_time=n()("00:00:00"),e.$message.success("成功"),e.visible=!1,e.$emit("getSportList")}))},handleCancelModel:function(){this.visible=!1,this.formData.start_time=this.formData.end_time="00:00:00",this.$emit("getSportList")},handleSelectLabel:function(e){console.log(e),this.formData.labels=e,console.log(this.formData.labels)},getLabelList:function(){var e=this;this.request(o["a"].getLabelList).then((function(t){e.label_list=t}))},setCalendarData:function(e){this.formData.send_by=e.send_by,this.formData.send_dates=e.send_dates,this.formData.send_week=e.send_week,this.formData.clickDates=e.clickDateList}}},d=m,c=a("0c7c"),p=Object(c["a"])(d,r,s,!1,null,"68d2c6b3",null);t["default"]=p.exports},c5bf:function(e,t,a){"use strict";var r={getCardList:"/employee/merchant.EmployeeCard/getCardList",editCard:"/employee/merchant.EmployeeCard/editCard",saveCard:"/employee/merchant.EmployeeCard/saveCard",getCouponList:"/employee/merchant.EmployeeCard/getCouponList",editCoupon:"/employee/merchant.EmployeeCard/editCoupon",saveCoupon:"/employee/merchant.EmployeeCard/saveCoupon",delCoupon:"/employee/merchant.EmployeeCard/delCoupon",getUserCardList:"/employee/merchant.EmployeeCardUser/getUserCardList",exportUserCardList:"/employee/merchant.EmployeeCardUser/exportUserCardList",editCardUser:"/employee/merchant.EmployeeCardUser/editCardUser",saveCardUser:"/employee/merchant.EmployeeCardUser/saveCardUser",delData:"/employee/merchant.EmployeeCardUser/delData",findUser:"/employee/merchant.EmployeeCardUser/findUser",loadExcel:"/employee/merchant.EmployeeCardUser/loadExcel",orderList:"/employee/merchant.EmployeeCardUser/orderList",cardLogList:"/employee/merchant.EmployeeCard/cardLogList",cardLogStorestaffList:"/employee/storestaff.EmployeeCardOrder/cardLogList",paymentScan:"/employee/storestaff.EmployeePayCode/deductions",cardLogExport:"/employee/merchant.EmployeeCard/export",employLableList:"/employee/merchant.EmployeeCardUser/employLableList",employLableAddOrEdit:"/employee/merchant.EmployeeCardUser/employLableAddOrEdit",employLableDel:"/employee/merchant.EmployeeCardUser/employLableDel",dataStatistics:"/employee/merchant.EmployeeCardLog/dataStatistics",getStoreConsumerList:"/employee/merchant.EmployeeCardLog/getStoreConsumerList",dataRechargeStatistics:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatistics",dataRechargeStatisticsExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatisticsExport",dataRechargeOrderExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderExport",paymentMode:"/employee/merchant.EmployeeCardOrder/getPayType",getOrderList:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderList",refundMoney:"/employee/merchant.EmployeeCardOrder/employeeOrderRefund",employeeCouponRefund:"/employee/merchant.EmployeeCardLog/employeeCouponRefund",isOpenUseMoney:"/employee/merchant.EmployeeCard/isOpenUseMoney",getLabelList:"/employee/merchant.EmployeeCardUser/getLabelList",getSendCouponDateList:"/employee/merchant.EmployeeCard/getSendCouponDateList",getCalcDateList:"/employee/merchant.EmployeeCard/getCalcDateList",getStaffDataStatistics:"/employee/storestaff.EmployeeCardLog/dataStatistics",delUserCard:"/employee/merchant.EmployeeCardUser/delUserCard",openUserCard:"/employee/merchant.EmployeeCardUser/openUserCard",closeUserCard:"/employee/merchant.EmployeeCardUser/closeUserCard",getClearScoreList:"/employee/merchant.EmployeeCard/getClearScoreList",staffRefundMoney:"/employee/storestaff.EmployeeCardOrder/employeeOrderRefund",openOrCloseUserCard:"/employee/merchant.EmployeeCardUser/openOrCloseUserCard",getStoreList:"/employee/merchant.EmployeeCardUser/getStoreList",lableBindStore:"/employee/merchant.EmployeeCardUser/lableBindStore"};t["a"]=r},cb4d:function(e,t,a){"use strict";a("3d4e")},d279:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,height:300,visible:e.visible,"ok-text":"确认","cancel-text":"取消"},on:{cancel:e.closeWindow,ok:e.returnClick}},[a("a-row",[a("span",[e._v("发券类型： ")]),a("a-radio-group",{on:{change:e.sendBySelect},model:{value:e.returnParams.send_by,callback:function(t){e.$set(e.returnParams,"send_by",t)},expression:"returnParams.send_by"}},[a("a-radio",{attrs:{value:0}},[e._v(" 每天 ")]),a("a-radio",{attrs:{value:1}},[e._v(" 按周 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 按时间段 ")])],1)],1),0==e.returnParams.send_by?a("a-row",{staticStyle:{width:"100%",height:"40px","padding-top":"20px"}}):e._e(),1==e.returnParams.send_by?a("a-row",{staticStyle:{width:"100%",height:"40px","padding-top":"20px"}},[a("a-checkbox-group",{on:{change:e.selectWeek},model:{value:e.returnParams.send_week,callback:function(t){e.$set(e.returnParams,"send_week",t)},expression:"returnParams.send_week"}},e._l(e.weekMap,(function(t,r){return a("a-checkbox",{attrs:{value:t.key}},[e._v(" 周"+e._s(t.value)+" ")])})),1)],1):e._e(),2==e.returnParams.send_by?a("a-row",{staticStyle:{width:"100%",height:"40px","padding-top":"20px"}},[a("a-range-picker",{attrs:{value:e.send_dates},on:{change:e.handleChange}})],1):e._e(),a("a-row",{staticStyle:{"margin-top":"0px"}},[a("calendar",{attrs:{fullscreen:!1},on:{panelChange:e.onPanelChange,select:e.selectDate},scopedSlots:e._u([{key:"dateCellRender",fn:function(t){return[e.isSendCoupon(t)?a("span",{staticStyle:{"font-size":"12px","line-height":"21px",color:"#0FB70F"}},[e._v("发券")]):a("span",{staticStyle:{"font-size":"12px","line-height":"21px",color:"red"}})]}}])})],1)],1)},s=[],o=a("b85c"),i=(a("420d"),a("3d8c")),n=a("c1df"),l=a.n(n),m=a("c5bf"),d=[],c=[],p={components:{Calendar:i["a"]},data:function(){return{title:"设置发券日期",visible:!1,pigcms_id:0,dateList:{},send_dates:null,returnParams:{send_by:0,send_week:[],send_dates:[],clickDateList:{}},plainOptions:d,checkedList:c,indeterminate:!0,checkAll:!1,weekMap:[{key:1,value:"一"},{key:2,value:"二"},{key:3,value:"三"},{key:4,value:"四"},{key:5,value:"五"},{key:6,value:"六"},{key:0,value:"日"}],time:0,is_edit:!1}},methods:{moment:l.a,closeWindow:function(){this.visible=!1},init:function(){var e={send_by:0,send_week:[],send_dates:[],clickDateList:{}};this.send_dates=null,this.returnParams=e,this.time=0,this.is_edit=!1},setCalendar:function(e){this.init(),this.pigcms_id=e;var t=0;e&&this.getData(e),this.submitRequest(t),this.visible=!0},getData:function(e){var t=this;this.request(m["a"].editCoupon,{pigcms_id:e}).then((function(e){if(t.returnParams.send_by=e.send_by,t.returnParams.clickDateList=e.other_date,1==e.send_by&&(t.returnParams.send_week=e.send_rule),2==e.send_by){var a="YYYY/MM/DD";t.send_dates=[l()(e.send_rule[0],a),l()(e.send_rule[1],a)]}}))},submitRequest:function(e){var t=this;this.request(m["a"].getSendCouponDateList,{time:e,pigcms_id:this.pigcms_id}).then((function(e){var a,r={},s=Object(o["a"])(e);try{for(s.s();!(a=s.n()).done;){var i=a.value;r[i]=1}}catch(n){s.e(n)}finally{s.f()}t.dateList=r}))},onPanelChange:function(e,t){var a=l()(e.format("YYYY-MM-DD")).unix();this.time=a,this.is_edit?this.getCalcDateList():this.submitRequest(a)},selectDate:function(e){var t=l()(e.format("YYYY-MM-DD")).unix();this.time=t,this.returnParams.clickDateList[t]||0==this.returnParams.clickDateList[t]?this.returnParams.clickDateList[t]=this.returnParams.clickDateList[t]?0:1:this.returnParams.clickDateList[t]=this.dateList[t]?0:1,console.log(this.returnParams.clickDateList)},isSendCoupon:function(e){var t=l()(e.format("YYYY-MM-DD")).unix(),a=Object.assign(this.dateList,this.returnParams.clickDateList);return!(!a[t]||1!=a[t])},sendBySelect:function(){this.returnParams.clickDateList={},this.getCalcDateList()},selectWeek:function(){this.getCalcDateList()},handleChange:function(e,t){this.returnParams.send_dates=[t[0],t[1]],this.send_dates=e,this.getCalcDateList()},getCalcDateList:function(){var e=this;this.is_edit=!0;var t=2==this.returnParams.send_by?this.returnParams.send_dates:this.returnParams.send_week;this.request(m["a"].getCalcDateList,{time:this.time,send_by:this.returnParams.send_by,send_rule:t}).then((function(t){var a,r={},s=Object(o["a"])(t);try{for(s.s();!(a=s.n()).done;){var i=a.value;r[i]=1}}catch(n){s.e(n)}finally{s.f()}e.dateList=r}))},returnClick:function(){this.$emit("setCalendarData",this.returnParams),this.visible=!1}}},u=p,h=(a("cb4d"),a("0c7c")),C=Object(h["a"])(u,r,s,!1,null,null,null);t["default"]=C.exports}}]);