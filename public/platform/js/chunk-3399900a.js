(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3399900a","chunk-2d0e55c3"],{"29f4":function(e,t,i){"use strict";i("c3be")},"2ab4":function(e,t,i){"use strict";var o={verification:"life_tools/storestaff.LifeToolsAppoint/verification",verifyList:"life_tools/storestaff.LifeToolsAppoint/verifyList",sportsVerification:"life_tools/storestaff.LifeToolsSports/verification",sportsVerifyList:"life_tools/storestaff.LifeToolsSports/verifyList",scenicVerification:"life_tools/storestaff.LifeToolsScenic/verification",scenicVerifyList:"life_tools/storestaff.LifeToolsScenic/verifyList",getCardOrderDetail:"life_tools/storestaff.LifeToolsScenic/getCardOrderDetail",getScenic:"life_tools/storestaff.LifeToolsScenic/getScenic",getTicket:"life_tools/storestaff.LifeToolsScenic/getTicket",confirmPrice:"life_tools/storestaff.LifeToolsOrder/confirm",saveOrde:"life_tools/storestaff.LifeToolsOrder/saveOrder",goPay:"life_tools/storestaff.LifeToolsOrder/goPay",getScenicOrderList:"/life_tools/storestaff.LifeToolsScenic/getOrderList",exportToolsOrder:"/life_tools/storestaff.LifeToolsScenic/exportToolsOrder",getScenicOrderDetail:"/life_tools/storestaff.LifeToolsScenic/getOrderDetail",agreeScenicOrderRefund:"/life_tools/storestaff.LifeToolsScenic/agreeRefund",refuseScenicOrderRefund:"/life_tools/storestaff.LifeToolsScenic/refuseRefund",sportsTimeCardVerifyOrderDetail:"/life_tools/storestaff.LifeToolsScenic/getCardOrderDetail"};t["a"]=o},"93c6":function(e,t,i){e.exports=i.p+"img/scan_code.384f0d6e.png"},c3be:function(e,t,i){},d8a1:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page"},[o("div",{staticClass:"top"}),o("div",{staticClass:"container"},[o("div",{staticClass:"cancel"},[o("img",{staticClass:"cancel_img",attrs:{src:i("93c6"),alt:""}}),o("p",{staticClass:"cancel_text"},[e._v("请对准扫描机进行核销")]),o("input",{directives:[{name:"focus",rawName:"v-focus.noKeyboard",modifiers:{noKeyboard:!0}},{name:"model",rawName:"v-model",value:e.form.code,expression:"form.code"}],ref:"input_cancel",staticClass:"input_a",attrs:{type:"text",placeholder:"请扫描序列号",allowClear:!0},domProps:{value:e.form.code},on:{click:e.onAutoFocus,input:[function(t){t.target.composing||e.$set(e.form,"code",t.target.value)},e.onCancelFocus],blur:e.onAutoBlur}})]),o("div",{staticClass:"action"},[o("a-button",{attrs:{type:"primary"},on:{click:e.cancelCode}},[e._v("确定")])],1)])])},s=[],r=i("2ab4"),c={name:"OrderManage",data:function(){return{timer:null,timerOut:null,visibleCancel:!0,visibleCoupon:!1,visibleIntegral:!1,confirmLoading:!1,coupon_integral:"",input_code:"",input_score:"",input_remark:"",focusIntegral:"",form:{code:""},input_cancel_code:""}},created:function(){},mounted:function(){this.$refs.codeInput.focus()},watch:{"form.code":{handler:function(e,t){}}},methods:{onCancelFocus:function(){this.form.code.length>=12&&(this.$refs.input_cancel.blur(),this.cancelCode())},onAutoFocus:function(){var e=this;console.log(12312313),this.$refs.input_cancel.setAttribute("readonly","readonly"),this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){e.$refs.input_cancel.removeAttribute("readonly")}),200)},onAutoBlur:function(){var e=this;this.visibleCancel&&(console.log("----------12312----------"),this.$nextTick((function(){e.$refs.input_cancel.focus(),e.onAutoFocus()})))},cancelCode:function(){var e=this,t=this.form;this.form={code:""},this.timerOut&&(clearTimeout(this.timerOut),this.timerOut=null),this.timerOut=setTimeout((function(){e.form.code=""})),this.request(r["a"].scenicVerification,t).then((function(t){e.$message.success("核销成功"),e.form={code:""}})),this.visibleCancel&&this.$nextTick((function(){e.$refs.input_cancel.focus(),e.$refs.input_cancel.setAttribute("readonly","readonly"),e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout((function(){e.$refs.input_cancel.removeAttribute("readonly")}),200)}))},onReturn:function(){this.$router.go(-1)},clearTimer:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.timerOut&&(clearTimeout(this.timerOut),this.timerOut=null)}},beforeDestroy:function(){this.clearTimer()}},n=c,l=(i("29f4"),i("0c7c")),f=Object(l["a"])(n,o,s,!1,null,"f184d386",null);t["default"]=f.exports}}]);