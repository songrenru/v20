(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ba8f47"],{"0ec9":function(e,a,t){},bc54:function(e,a,t){"use strict";t("0ec9")},e064:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"},attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"付款账户",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["paymentUser",{rules:[{required:!0,message:"付款账户必须填写"}]}],expression:"['paymentUser', { rules: [{required: true, message: '付款账户必须填写'}] }]"}],attrs:{placeholder:"ant-design@alipay.com"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("ant-design@alipay.com")])],1)],1),a("a-form-item",{attrs:{label:"收款账户",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-group",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{compact:!0}},[a("a-select",{staticStyle:{width:"100px"},attrs:{defaultValue:"alipay"}},[a("a-select-option",{attrs:{value:"alipay"}},[e._v("支付宝")]),a("a-select-option",{attrs:{value:"wexinpay"}},[e._v("微信")])],1),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["payType",{initialValue:"test@example.com",rules:[{required:!0,message:"收款账户必须填写"}]}],expression:"['payType', { initialValue: 'test@example.com', rules: [{required: true, message: '收款账户必须填写'}]}]"}],style:{width:"calc(100% - 100px)"}})],1)],1),a("a-form-item",{attrs:{label:"收款人姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:"Alex",rules:[{required:!0,message:"收款人名称必须核对"}]}],expression:"['name', { initialValue: 'Alex', rules: [{required: true, message: '收款人名称必须核对'}] }]"}]})],1),a("a-form-item",{attrs:{label:"转账金额",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["momey",{initialValue:"5000",rules:[{required:!0,message:"转账金额必须填写"}]}],expression:"['momey', { initialValue: '5000', rules: [{required: true, message: '转账金额必须填写'}] }]"}],attrs:{prefix:"￥"}})],1),a("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.nextStep}},[e._v("下一步")])],1)],1),a("a-divider"),e._m(0)],1)},l=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"step-form-style-desc"},[a("h3",[e._v("说明")]),a("h4",[e._v("转账到支付宝账户")]),a("p",[e._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")]),a("h4",[e._v("转账到银行卡")]),a("p",[e._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")])])}],i={name:"Step1",data:function(){return{labelCol:{lg:{span:5},sm:{span:5}},wrapperCol:{lg:{span:19},sm:{span:19}},form:this.$form.createForm(this)}},methods:{nextStep:function(){var e=this,a=this.form.validateFields;a((function(a,t){a||e.$emit("nextStep")}))}}},s=i,o=(t("bc54"),t("2877")),p=Object(o["a"])(s,r,l,!1,null,"6e214ae4",null);a["default"]=p.exports}}]);