(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c760b7c"],{"3a36":function(t,e,a){},bdc80:function(t,e,a){"use strict";a("3a36")},c251:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"},attrs:{form:t.form}},[a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{closable:!0,message:"确认转账后，资金将直接打入对方账户，无法退回。"}}),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"付款账户",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" ant-design@alipay.com ")]),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款账户",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" test@example.com ")]),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款人姓名",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" Alex ")]),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"转账金额",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" ￥ 5,000.00 ")]),a("a-divider"),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"支付密码",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["paymentPassword",{initialValue:"123456",rules:[{required:!0,message:"请输入支付密码"}]}],expression:"['paymentPassword', { initialValue: '123456', rules: [{required: true, message: '请输入支付密码'}] }]"}],staticStyle:{width:"80%"},attrs:{type:"password"}})],1),a("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("a-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.nextStep}},[t._v("提交")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prevStep}},[t._v("上一步")])],1)],1)],1)},r=[],o={name:"Step2",data:function(){return{labelCol:{lg:{span:5},sm:{span:5}},wrapperCol:{lg:{span:19},sm:{span:19}},form:this.$form.createForm(this),loading:!1,timer:0}},methods:{nextStep:function(){var t=this,e=this.form.validateFields;t.loading=!0,e((function(e,a){e?t.loading=!1:(console.log("表单 values",a),t.timer=setTimeout((function(){t.loading=!1,t.$emit("nextStep")}),1500))}))},prevStep:function(){this.$emit("prevStep")}},beforeDestroy:function(){clearTimeout(this.timer)}},s=o,i=(a("bdc80"),a("2877")),p=Object(i["a"])(s,l,r,!1,null,"55a850a6",null);e["default"]=p.exports}}]);