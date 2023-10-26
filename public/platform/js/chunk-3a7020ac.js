(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a7020ac"],{"0e65":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main user-layout-register"},[e._m(0),t("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:"请输入邮箱地址"}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: '请输入邮箱地址' }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:"邮箱"}})],1),t("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[t("template",{slot:"content"},[t("div",{style:{width:"240px"}},[t("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),t("span",[e._v(e._s(e.passwordLevelName))])]),t("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),t("div",{staticStyle:{"margin-top":"10px"}},[t("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick}})],1)],2),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"确认密码"}})],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:"11 位手机号"}},[t("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[t("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),t("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{staticClass:"gutter-row",attrs:{span:16}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),t("a-col",{staticClass:"gutter-row",attrs:{span:8}},[t("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1),t("a-form-item",[t("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v("注册 ")]),t("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)],1)},s=[function(){var e=this,t=e._self._c;return t("h3",[t("span",[e._v("注册")])])}],o=a("5530"),i=(a("ac1f"),a("498a"),a("ac0d")),n={0:"低",1:"低",2:"中",3:"强"},l={0:"error",1:"error",2:"warning",3:"success"},c={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},d={name:"Register",components:{},mixins:[i["c"]],data:function(){return{form:this.$form.createForm(this),state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return l[this.state.passwordLevel]},passwordLevelName:function(){return n[this.state.passwordLevel]},passwordLevelColor:function(){return c[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,a){var r=0;/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,a){var r=this.form.getFieldValue("password");console.log("value",t),void 0===t&&a(new Error("请输入密码")),t&&r&&t.trim()!==r.trim()&&a(new Error("两次密码不一致")),a()},handlePhoneCheck:function(e,t,a){console.log("handlePhoneCheck, rule:",e),console.log("handlePhoneCheck, value",t),console.log("handlePhoneCheck, callback",a),a()},handlePasswordInputClick:function(){this.isMobile()?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.state,a=this.$router;e({force:!0},(function(e,r){e||(t.passwordLevelChecked=!1,a.push({name:"registerResult",params:Object(o["a"])({},r)}))}))},getCaptcha:function(e){e.preventDefault();var t=this.form.validateFields,a=this.state,r=this.$message;this.$notification;t(["mobile"],{force:!0},(function(e,t){if(!e){a.smsSendBtn=!0;var s=window.setInterval((function(){a.time--<=0&&(a.time=60,a.smsSendBtn=!1,window.clearInterval(s))}),1e3);r.loading("验证码发送中..",0)}}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){console.log(e)}}},u=d,p=(a("2cdc"),a("cc75"),a("2877")),h=Object(p["a"])(u,r,s,!1,null,"49c86bda",null);t["default"]=h.exports},"2cdc":function(e,t,a){"use strict";a("e33a")},cc75:function(e,t,a){"use strict";a("f352")},e33a:function(e,t,a){},f352:function(e,t,a){}}]);