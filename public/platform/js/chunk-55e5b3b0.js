(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e5b3b0","chunk-2d213377","chunk-2d0a3a6b","chunk-2d0cbe74","chunk-2d0c950c","chunk-2d0b2cad"],{"02a4":function(e,t,a){e.exports=a.p+"img/integral.fe2546c1.png"},"262e":function(e,t,a){e.exports=a.p+"img/xitongfanhui.9479607b.png"},"4c3b":function(e,t,a){e.exports=a.p+"img/scan_code.384f0d6e.png"},"592d":function(e,t,a){e.exports=a.p+"img/shuaxin.471c4db3.png"},"91e1":function(e,t,a){"use strict";a("aea4")},"9ceb":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("audio",{ref:"audio",attrs:{src:e.audioVoice}}),t("div",{staticClass:"top"},[t("a",{staticClass:"top_left",on:{click:e.onReturn}},[t("img",{attrs:{src:a("262e"),alt:""}}),e._v("返回以点菜单 ")]),e._m(0)]),t("div",{staticClass:"center"},[t("div",{staticClass:"center_click",on:{click:e.showModal}},[t("img",{staticClass:"center_img",attrs:{src:a("ac76"),alt:""}}),t("p",{staticClass:"center_text"},[e._v("餐券核销")])]),t("div",{staticClass:"center_click",on:{click:e.showModalIntegral}},[t("img",{staticClass:"center_img",attrs:{src:a("02a4"),alt:""}}),t("p",{staticClass:"center_text"},[e._v("积分支付")])]),t("div",{staticClass:"center_click",on:{click:e.showFreePay}},[t("img",{staticClass:"center_img",attrs:{src:a("02a4"),alt:""}}),t("p",{staticClass:"center_text"},[e._v("自由支付")])])]),t("a-modal",{attrs:{title:"输入序列号",visible:e.visibleCancel,closable:!1,maskClosable:!1,okText:"手动输入会员号核销",destroyOnClose:!0},on:{ok:e.handleOkCancel,cancel:e.handleCancelCancel}},[t("template",{slot:"footer"},[t("a-button",{key:"back",attrs:{size:"large"},on:{click:e.handleCancelCancel}},[e._v("取消")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return e.switchPayment(1)}}},[e._v("自由支付")]),t("a-button",{key:"submit",attrs:{size:"large",type:"primary"},on:{click:e.handleOkCancel}},[e._v("手动输入会员号核销")])],1),e.visibleCancel?t("div",{staticClass:"cancel"},[t("img",{staticClass:"cancel_img",attrs:{src:a("4c3b"),alt:""}}),t("p",{staticClass:"cancel_text"},[e._v("请对准扫描机进行核销")]),t("input",{directives:[{name:"focus",rawName:"v-focus.noKeyboard",modifiers:{noKeyboard:!0}},{name:"model",rawName:"v-model",value:e.form.code,expression:"form.code"}],ref:"input_cancel",staticClass:"input_a",attrs:{type:"text",placeholder:"请扫描序列号",allowClear:!0,disabled:""},domProps:{value:e.form.code},on:{click:e.onAutoFocus,input:[function(t){t.target.composing||e.$set(e.form,"code",t.target.value)},e.onCancelFocus],blur:e.onAutoBlur}}),t("input",{directives:[{name:"focus",rawName:"v-focus.noKeyboard",modifiers:{noKeyboard:!0}},{name:"model",rawName:"v-model",value:e.form.code,expression:"form.code"}],ref:"input_cancel",staticClass:"input_a",staticStyle:{position:"absolute",bottom:"25px","z-index":"-1"},attrs:{type:"password",placeholder:"请扫描序列号",allowClear:!0},domProps:{value:e.form.code},on:{click:e.onAutoFocus,input:[function(t){t.target.composing||e.$set(e.form,"code",t.target.value)},e.onCancelFocus],blur:e.onAutoBlur}})]):e._e()],2),t("a-modal",{attrs:{title:"输入序列号",visible:e.visibleCoupon,closable:!1,maskClosable:!1,destroyOnClose:!0},on:{ok:e.handleOkCoupon,cancel:e.handleCancelCpupon}},[t("template",{slot:"footer"},[t("a-button",{key:"back",attrs:{type:"primary",size:"large"},on:{click:e.handleCancelCpupon}},[e._v("取消")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return t.stopPropagation(),e.handleOkCoupon.apply(null,arguments)}}},[e._v("确定")])],1),t("div",{staticClass:"serial_input"},[t("a-input",{ref:"seach_input",staticClass:"input",attrs:{placeholder:"请输入序列号",type:"text",allowClear:!0},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],2),t("a-modal",{attrs:{title:"积分支付核销",visible:e.visibleIntegral,closable:!1,allowClear:!0,maskClosable:!1,destroyOnClose:!0},on:{ok:e.handleOkIntegral,cancel:e.handleCanceIntegral}},[t("template",{slot:"footer"},[t("a-button",{key:"back",attrs:{type:"primary",size:"large"},on:{click:e.handleCanceIntegral}},[e._v("取消")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return t.stopPropagation(),e.handleOkIntegral.apply(null,arguments)}}},[e._v("确定")])],1),t("div",{staticClass:"serial_input"},[t("a-input",{ref:"seach_input",staticClass:"input",attrs:{placeholder:"请输入序列号",type:"text",allowClear:!0},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),t("div",{staticClass:"serial_input"},[t("a-input",{attrs:{placeholder:"请输入核销积分",type:"text",allowClear:!0},on:{focus:e.focusIntegralScore},model:{value:e.form.score,callback:function(t){e.$set(e.form,"score",t)},expression:"form.score"}})],1),t("div",{staticClass:"serial_input"},[t("a-textarea",{staticClass:"input",attrs:{placeholder:"备注内容",type:"text",allowClear:!0},on:{focus:e.focusIntegralRemark},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],2),t("a-modal",{attrs:{title:"自由支付",visible:e.visibleFreePay,closable:!1,allowClear:!0,maskClosable:!1,destroyOnClose:!0},on:{ok:e.handleOkFreePay,cancel:e.handleCanceFreePay}},[t("template",{slot:"footer"},[t("a-button",{key:"back",attrs:{size:"large"},on:{click:e.handleCanceFreePay}},[e._v("取消")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return e.switchPayment(3)}}},[e._v("餐券核销")]),t("a-button",{key:"submit",attrs:{size:"large",type:"primary"},on:{click:e.handleOkFreePay}},[e._v("确定")])],1),t("div",{staticClass:"serial_input"},[t("a-input",{ref:"seach_input",staticClass:"input",attrs:{placeholder:"请输入核销金额",type:"number",allowClear:!0},model:{value:e.form.money,callback:function(t){e.$set(e.form,"money",t)},expression:"form.money"}})],1),t("a-form",e._b({attrs:{id:"components-form-demo-validate-other"}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"扣款方式"}},[t("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.form.pay_sort,callback:function(t){e.$set(e.form,"pay_sort",e._n(t))},expression:"form.pay_sort"}},[t("a-radio",{attrs:{value:0}},[e._v(" 先扣积分再余额 ")]),t("a-radio",{attrs:{value:1}},[e._v(" 先扣余额再积分 ")])],1)],1),t("a-form-item",{attrs:{label:"是否连续扫码"}},[t("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.formFreePay.scanCode,callback:function(t){e.$set(e.formFreePay,"scanCode",t)},expression:"formFreePay.scanCode"}},[t("a-radio",{attrs:{value:0}},[e._v(" 连续 ")]),t("a-radio",{attrs:{value:1}},[e._v(" 不连续 ")])],1)],1)],1)],2),t("a-modal",{attrs:{title:"输入序列号",visible:e.visibleFreePayAuto,closable:!1,maskClosable:!1,destroyOnClose:!0}},[t("div",{staticClass:"cancel"},[t("img",{staticClass:"cancel_img",attrs:{src:a("4c3b"),alt:""}}),t("p",{staticClass:"cancel_text"},[t("span",[e._v("核销金额："+e._s(e.form.money))]),t("span",{staticStyle:{"padding-left":"50px"}},[e._v(e._s(0==e.formFreePay.scanCode?"连续扫码":"不连续扫码"))])]),t("p",{staticClass:"cancel_text"},[e._v("请对准扫描机进行核销")]),t("input",{directives:[{name:"focus",rawName:"v-focus.noKeyboard",modifiers:{noKeyboard:!0}},{name:"model",rawName:"v-model",value:e.form.code,expression:"form.code"}],ref:"input_cancel",staticClass:"input_a",attrs:{type:"text",placeholder:"请扫描序列号",allowClear:!0},domProps:{value:e.form.code},on:{click:e.onAutoFocus,input:[function(t){t.target.composing||e.$set(e.form,"code",t.target.value)},e.onCancelFocus],blur:e.onAutoBlur}}),t("input",{directives:[{name:"focus",rawName:"v-focus.noKeyboard",modifiers:{noKeyboard:!0}},{name:"model",rawName:"v-model",value:e.form.code,expression:"form.code"}],ref:"input_cancel",staticClass:"input_a",staticStyle:{position:"absolute",bottom:"5px","z-index":"-1"},attrs:{type:"password",placeholder:"请扫描序列号",allowClear:!0},domProps:{value:e.form.code},on:{click:e.onAutoFocus,input:[function(t){t.target.composing||e.$set(e.form,"code",t.target.value)},e.onCancelFocus],blur:e.onAutoBlur}})]),t("template",{slot:"footer"},[t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return e.switchPayment(2)}}},[e._v("餐券核销")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return t.stopPropagation(),e.onInputNumber.apply(null,arguments)}}},[e._v("手动输入序列号")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return t.stopPropagation(),e.onReturnAuto.apply(null,arguments)}}},[e._v("修改金额")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return t.stopPropagation(),e.onCloseAuto.apply(null,arguments)}}},[e._v("关闭")])],1)],2),t("a-modal",{attrs:{title:"输入序列号",visible:e.visibleAutoCoupon,closable:!1,maskClosable:!1,destroyOnClose:!0},on:{ok:e.handleOkCoupon,cancel:e.handleCancelCpupon}},[t("template",{slot:"footer"},[t("a-button",{key:"back",attrs:{type:"primary",size:"large"},on:{click:e.handleCancelCpupon}},[e._v("取消")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return t.stopPropagation(),e.handleOkCoupon.apply(null,arguments)}}},[e._v("确定")])],1),t("div",{staticClass:"serial_input"},[t("a-input",{ref:"seach_input",staticClass:"input",attrs:{placeholder:"请输入序列号",type:"text"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],2)],1)},r=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"top_right"},[t("img",{attrs:{src:a("592d"),alt:""}})])}],s=a("c5bf"),n={name:"OrderManage",data:function(){return{formItemLayout:{labelCol:{span:5},wrapperCol:{span:15}},audioVoice:"",timer:null,timerOut:null,visibleCancel:!1,visibleCoupon:!1,visibleIntegral:!1,visibleFreePay:!1,visibleFreePayAuto:!1,visibleAutoCoupon:!1,card_type:"",confirmLoading:!1,coupon_integral:"",input_code:"",input_score:"",input_remark:"",focusIntegral:"",form:{code:"",score:"",remark:"",card_type:"",pay_sort:0,money:""},formFreePay:{scanCode:0}}},beforeDestroy:function(){this.clearTimer()},methods:{showModal:function(){this.visibleCancel=!0,this.card_type="coupon"},onAutoFocus:function(){var e=this;console.log(12312313),this.$refs.input_cancel.setAttribute("readonly","readonly"),this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){e.$refs.input_cancel.removeAttribute("readonly")}),200)},onAutoBlur:function(){var e=this;(this.visibleFreePayAuto||this.visibleCancel)&&(console.log("----------12312----------"),this.$nextTick((function(){e.$refs.input_cancel.focus(),e.onAutoFocus()})))},onCancelFocus:function(){(this.form.code.length>=18||-1!==this.form.code.indexOf("?"))&&(this.$refs.input_cancel.blur(),this.cancelCode(),this.coupon_integral="coupon")},handleOkCancel:function(){var e=this;this.visibleCancel=!1,this.visibleCoupon=!0,this.$nextTick((function(){e.$refs.seach_input.focus()}))},handleCancelCancel:function(){this.visibleCancel=!1,this.form={code:"",score:"",remark:"",card_type:"",pay_sort:0,money:""}},showModalIntegral:function(){var e=this;this.visibleIntegral=!0,this.coupon_integral="integral",this.card_type="score",this.$nextTick((function(){e.$refs.seach_input.focus()}))},showFreePay:function(){var e=this;console.log("点击支付"),this.visibleFreePay=!0,this.card_type="auto",this.$nextTick((function(){e.$refs.seach_input.focus()}))},handleOkFreePay:function(){if(!this.form.money)return this.$message.warning("请输入核销金额"),!1;console.log(this.formFreePay,this.form),this.visibleFreePay=!1,this.visibleFreePayAuto=!0},handleCanceFreePay:function(){this.visibleFreePay=!1,this.form={code:"",score:"",remark:"",card_type:"",pay_sort:0,money:""},this.formFreePay={scanCode:0}},onInputNumber:function(){var e=this;this.visibleFreePayAuto=!1,this.visibleAutoCoupon=!0,this.$nextTick((function(){e.$refs.seach_input.focus()}))},onReturnAuto:function(){var e=this;this.visibleFreePayAuto=!1,this.visibleFreePay=!0,this.$nextTick((function(){e.$refs.seach_input.focus()}))},onCloseAuto:function(){this.visibleFreePayAuto=!1,this.form={code:"",score:"",remark:"",card_type:"",pay_sort:0,money:""}},handleOk:function(e){this.confirmLoading=!1,this.visible=!1,"coupon"===this.coupon_integral?this.visibleCoupon=!0:this.visibleIntegral=!0},handleCancel:function(e){console.log("Clicked cancel button"),this.visible=!1},handleOkCoupon:function(){if(!this.form.code)return this.$message.warning("请输入序列号"),!1;this.cancelCode()},handleCancelCpupon:function(){this.visibleCoupon=!1,this.visibleAutoCoupon=!1,this.form={code:"",score:"",remark:"",card_type:"",pay_sort:0,money:""}},handleOkIntegral:function(){return console.log(this.input_code),this.form.code?this.form.score?void this.cancelCode():(this.$message.warning("请输入核销的积分"),!1):(this.$message.warning("请输入序列号"),!1)},handleCanceIntegral:function(){this.visibleIntegral=!1,this.form={code:"",score:"",remark:"",card_type:"",pay_sort:0,money:""}},cancelCode:function(){var e=this,t=this.form;t.card_type=this.card_type,console.log(t,this.form,"---------打印params-----------"),this.timerOut&&(clearTimeout(this.timerOut),this.timerOut=null),this.timerOut=setTimeout((function(){e.form.code="",e.form.score="",e.form.remark="",0!=e.formFreePay.scanCode&&e.visibleFreePayAuto&&(e.visibleFreePayAuto=!1,e.visibleFreePay=!0)})),this.request(s["a"].paymentScan,t).then((function(t){console.log(t),t&&t.voice_url?(e.audioVoice=t.voice_url,e.$nextTick((function(){e.$refs.audio.play()}))):e.audioVoice="",1==t.status?e.$message.success(t.title):e.$message.warning(t.title),e.form.code="",e.form.score="",e.form.remark=""})),(this.visibleFreePayAuto||this.visibleCancel)&&this.$nextTick((function(){e.$refs.input_cancel.focus(),e.$refs.input_cancel.setAttribute("readonly","readonly"),e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout((function(){e.$refs.input_cancel.removeAttribute("readonly")}),200)}))},focusIntegralScore:function(){console.log("h获取积分焦点"),this.focusIntegral="score"},focusIntegralRemark:function(){this.focusIntegral="remark"},onReturn:function(){this.$router.go(-1)},clearTimer:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.timerOut&&(clearTimeout(this.timerOut),this.timerOut=null)},switchPayment:function(e){1==e?(this.visibleCancel=!1,this.visibleFreePay=!0):2==e?(this.visibleFreePayAuto=!1,this.visibleCancel=!0):3==e&&(this.visibleCancel=!0,this.visibleFreePay=!1)}}},i=n,l=(a("91e1"),a("0b56")),c=Object(l["a"])(i,o,r,!1,null,"0a4c9af0",null);t["default"]=c.exports},ac76:function(e,t,a){e.exports=a.p+"img/coupon.1348e7a4.png"},aea4:function(e,t,a){},c5bf:function(e,t,a){"use strict";var o={getCardList:"/employee/merchant.EmployeeCard/getCardList",editCard:"/employee/merchant.EmployeeCard/editCard",saveCard:"/employee/merchant.EmployeeCard/saveCard",getCouponList:"/employee/merchant.EmployeeCard/getCouponList",editCoupon:"/employee/merchant.EmployeeCard/editCoupon",saveCoupon:"/employee/merchant.EmployeeCard/saveCoupon",delCoupon:"/employee/merchant.EmployeeCard/delCoupon",getUserCardList:"/employee/merchant.EmployeeCardUser/getUserCardList",exportUserCardList:"/employee/merchant.EmployeeCardUser/exportUserCardList",editCardUser:"/employee/merchant.EmployeeCardUser/editCardUser",saveCardUser:"/employee/merchant.EmployeeCardUser/saveCardUser",delData:"/employee/merchant.EmployeeCardUser/delData",findUser:"/employee/merchant.EmployeeCardUser/findUser",loadExcel:"/employee/merchant.EmployeeCardUser/loadExcel",orderList:"/employee/merchant.EmployeeCardUser/orderList",cardLogList:"/employee/merchant.EmployeeCard/cardLogList",cardLogStorestaffList:"/employee/storestaff.EmployeeCardOrder/cardLogList",paymentScan:"/employee/storestaff.EmployeePayCode/deductions",cardLogExport:"/employee/merchant.EmployeeCard/export",employLableList:"/employee/merchant.EmployeeCardUser/employLableList",employLableAddOrEdit:"/employee/merchant.EmployeeCardUser/employLableAddOrEdit",employLableDel:"/employee/merchant.EmployeeCardUser/employLableDel",dataStatistics:"/employee/merchant.EmployeeCardLog/dataStatistics",getStoreConsumerList:"/employee/merchant.EmployeeCardLog/getStoreConsumerList",dataRechargeStatistics:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatistics",dataRechargeStatisticsExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatisticsExport",dataRechargeOrderExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderExport",paymentMode:"/employee/merchant.EmployeeCardOrder/getPayType",getOrderList:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderList",refundMoney:"/employee/merchant.EmployeeCardOrder/employeeOrderRefund",employeeCouponRefund:"/employee/merchant.EmployeeCardLog/employeeCouponRefund",isOpenUseMoney:"/employee/merchant.EmployeeCard/isOpenUseMoney",getLabelList:"/employee/merchant.EmployeeCardUser/getLabelList",getSendCouponDateList:"/employee/merchant.EmployeeCard/getSendCouponDateList",getCalcDateList:"/employee/merchant.EmployeeCard/getCalcDateList",getStaffDataStatistics:"/employee/storestaff.EmployeeCardLog/dataStatistics",delUserCard:"/employee/merchant.EmployeeCardUser/delUserCard",openUserCard:"/employee/merchant.EmployeeCardUser/openUserCard",closeUserCard:"/employee/merchant.EmployeeCardUser/closeUserCard",getClearScoreList:"/employee/merchant.EmployeeCard/getClearScoreList",staffRefundMoney:"/employee/storestaff.EmployeeCardOrder/employeeOrderRefund",openOrCloseUserCard:"/employee/merchant.EmployeeCardUser/openOrCloseUserCard",getStoreList:"/employee/merchant.EmployeeCardUser/getStoreList",lableBindStore:"/employee/merchant.EmployeeCardUser/lableBindStore"};t["a"]=o}}]);