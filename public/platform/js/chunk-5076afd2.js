(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5076afd2","chunk-16b59220"],{"36c1":function(t,e,n){},"3b72":function(t,e,n){"use strict";n("36c1")},9086:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"merchantLogin"}},[n("section",{attrs:{id:"header"}},[t.config?n("div",{staticClass:"left item"},[n("div",{staticClass:"logo",style:"background-image:url("+t.config.site_logo+")",attrs:{"data-url":t.config.site_url},on:{click:t.openUrl}},[n("div",{staticClass:"title",on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.L("店员登录")))])])]):t._e(),n("div",{staticClass:"right item"},[t.config.is_demo_domain?n("div",[t._v(t._s(t.L("小猪O2O致力于为快速构建本地生活服务平台提供专业的解决方案")))]):t._e(),1==t.config.open_multilingual&&t.config.lang_config?n("div",[n("a-dropdown",{attrs:{trigger:["click"]}},[t.config.lang_config.lang_list&&t.config.lang_config.lang_list.length?n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},t._l(t.config.lang_config.lang_list,(function(e){return n("a-menu-item",{key:e.val,style:t.now_lang==e.val?"color:#1890FF":"",on:{click:t.changeLang}},[t._v(" "+t._s(e.display)+" ")])})),1):t._e(),n("a-button",{staticStyle:{"margin-left":"8px"}},[t._v(" "+t._s(t.lang_txt)+" "),n("a-icon",{attrs:{type:"down"}})],1)],1)],1):t._e()])]),n("section",{attrs:{id:"content"}},[n("a-card",{key:"login-card",staticClass:"form-card"},[n("a-tabs",{attrs:{"active-key":t.loginType,size:"large",tabBarStyle:{textAlign:"center",fontSize:"16px"}},on:{change:t.handleTabChange}},[n("a-tab-pane",{key:"code",attrs:{tab:t.L("扫码登录")}},[n("div",{staticClass:"code-container"},[t.codeInfo.qrcode?n("img",{staticClass:"code-img",attrs:{src:t.codeInfo.qrcode}}):n("div",{staticClass:"code-img"},[n("a-spin")],1)]),n("div",{staticClass:"tip"},[t._v(" "+t._s(t.L("打开"))+" "),n("span",{staticStyle:{color:"red","margin-right":"10px"}},[t._v(t._s(t.L("手机微信")))]),n("span",[t._v(t._s(t.L("扫描二维码")))])]),n("div",{staticClass:"characteristic"},[n("div",{key:"noinput",staticClass:"item"},[n("a-icon",{staticClass:"item-icon",attrs:{type:"edit"}}),t._v(t._s(t.L("免输入")))],1),n("div",{key:"faster",staticClass:"item"},[n("a-icon",{staticClass:"item-icon",attrs:{type:"rocket"}}),t._v(t._s(t.L("更快")))],1),n("div",{key:"safer",staticClass:"item"},[n("a-icon",{staticClass:"item-icon",attrs:{type:"safety"}}),t._v(t._s(t.L("更安全")))],1)])]),n("a-tab-pane",{key:"account",attrs:{tab:t.L("账户登录")}},[n("login-form",{ref:"loginForm",on:{handleLogin:t.handleAccountLogin}})],1)],1)],1)],1),n("section",{staticClass:"footer"},[t.config&&t.config.copyright_txt?n("div",{staticClass:"copyright"},[t._v(t._s(t.config.copyright_txt))]):t._e()])])},a=[],s=n("5530"),o=(n("d3b7"),n("8bbf")),r=n.n(o),c=n("ca00"),l=n("5880"),g=n("e37c"),f=n("a8dc"),d=n("fb9f"),u={components:{LoginForm:d["default"]},data:function(){return{loginType:"code",codeInfo:{},interval:null,config:null,now_lang:"",lang_txt:""}},watch:{"$store.getters.config":function(t){this.config=t},"$store.getters.nowLang":function(t){this.now_lang=t,this.lang_txt=Object(c["e"])(t)}},created:function(){this.config=this.$store.getters.config,this.now_lang=this.$store.getters.nowLang,this.lang_txt=Object(c["e"])(this.now_lang),this.getLoginCode()},beforeDestroy:function(){this.clearInterval()},methods:Object(s["a"])(Object(s["a"])({},Object(l["mapActions"])(["Login","SetLang"])),{},{handleTabChange:function(t){"code"==t?(this.interval&&this.clearInterval(),this.setInterval()):this.clearInterval(),this.loginType=t},changeLang:function(t){var e=this;this.SetLang({lang:t.key}).then((function(n){e.now_lang=t.key,e.lang_txt=Object(c["e"])(e.now_lang)}))},getLoginCode:function(){var t=this;this.request(f["a"].qrcode,{mer_id:1}).then((function(e){t.codeInfo=e,t.setInterval()}))},setInterval:function(){var t=this;this.codeInfo&&this.codeInfo.qrcode_id&&(this.interval=window.setInterval((function(){t.request(f["a"].codeLoginResult,{qrcode_id:t.codeInfo.qrcode_id}).then((function(e){if(e.ticket){var n=Object(c["k"])("storestaff");r.a.ls.set(n,e.ticket,null),Object(c["m"])(n,e.ticket,null),t.loginSuccess(e)}})).catch((function(e){t.clearInterval()}))}),3e3))},handleAccountLogin:function(t){var e=this,n=this.Login;n({userInfo:t,url:f["a"].login}).then((function(t){return e.loginSuccess(t)})).catch((function(t){return e.requestFailed(t)})).finally((function(){e.$refs.loginForm.loginBtn=!1}))},loginSuccess:function(t){var e=this;t&&(console.log(t),this.clearInterval(),this.$message.success(this.L("登录成功！正在跳转~")),window.setTimeout((function(){e.$router.push({path:g["a"].storestaffIndex})}),600))},requestFailed:function(t){this.$refs.loginForm.getNewCode()},openUrl:function(t){console.log(t.target.dataset.url),window.open(t.target.dataset.url,"_blank")},clearInterval:function(){window.clearInterval(this.interval),this.interval=null}})},m=u,h=(n("d4ef"),n("2877")),v=Object(h["a"])(m,i,a,!1,null,"61d8e37c",null);e["default"]=v.exports},a8dc:function(t,e,n){"use strict";var i={login:"/storestaff/storestaff.user.login/index",qrcode:"/storestaff/storestaff.user.login/seeQrcode",codeLoginResult:"/storestaff/storestaff.user.login/scanLogin",imgCode:"/v20/public/index.php/storestaff/storestaff.user.login/verify",getIndexPageInfo:"/storestaff/storestaff.index/index",orderNotice:"/storestaff/storestaff.index/orderNotice",getPrintHas:"/storestaff/storestaff.PrintDevice/getPrintHas",getOwnPrinter:"/storestaff/storestaff.PrintDevice/getOwnPrinter"};e["a"]=i},d4ef:function(t,e,n){"use strict";n("f831")},f831:function(t,e,n){},fb9f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"LoginForm"}},[n("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:t.handleSubmit}},[n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:t.L("请输入账号")+"~"},{whitespace:!0,message:t.L("输入值不能为空~")}]}],expression:"[\n          'account',\n          {\n            rules: [\n              { required: true, message: L('请输入账号') + '~' },\n              { whitespace: true, message: L('输入值不能为空' + '~') },\n            ],\n          },\n        ]"}],attrs:{size:"large",placeholder:t.L("账号")}},[n("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["pwd",{rules:[{required:!0,message:t.L("请输入账号密码")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"},{pattern:/^[0-9a-zA-Z_]{1,}$/,message:t.L("密码不能输入汉字")+"~"}]}],expression:"[\n          'pwd',\n          {\n            rules: [\n              { required: true, message: L('请输入账号密码') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n              { pattern: /^[0-9a-zA-Z_]{1,}$/, message: L('密码不能输入汉字') + '~' },\n            ],\n          },\n        ]"}],attrs:{size:"large",type:"password",placeholder:t.L("密码")}},[n("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-row",{attrs:{gutter:8}},[n("a-col",{attrs:{span:12}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["verify",{rules:[{required:!0,message:t.L("请输入4位验证码")+"~"},{len:4,message:t.L("请输入4位验证码")+"~"}]}],expression:"[\n              'verify',\n              {\n                rules: [\n                  { required: true, message: L('请输入4位验证码') + '~' },\n                  { len: 4, message: L('请输入4位验证码') + '~' },\n                ],\n              },\n            ]"}],attrs:{size:"large"}})],1),n("a-col",{attrs:{span:8}},[n("img",{staticStyle:{width:"100%",height:"40px",cursor:"pointer"},attrs:{src:t.src},on:{click:t.getNewCode}})]),n("a-col",{attrs:{span:4}},[n("div",{staticStyle:{height:"40px","line-height":"20px","vertical-aligin":"middle","font-size":"12px","text-align":"center",cursor:"pointer"},on:{click:t.getNewCode}},[n("span",[t._v(t._s(t.L("看不清")))]),n("br"),n("span",[t._v(t._s(t.L("换一张")))])])])],1)],1),n("a-form-item",[n("a-button",{staticClass:"login-form-button",attrs:{type:"primary",size:"large","html-type":"submit",loading:t.loginBtn,disabled:t.loginBtn}},[t._v(t._s(t.L("登录")))])],1)],1)],1)},a=[],s=n("a8dc"),o={name:"LoginFormStaff",components:{},data:function(){return{form:this.$form.createForm(this),loginBtn:!1,src:""}},created:function(){this.getNewCode()},methods:{getNewCode:function(){var t=1e3*Math.random();this.src=s["a"].imgCode+"?t="+t},handleSubmit:function(t){var e=this;t.preventDefault();var n=this.form.validateFields,i=["account","pwd","verify"];n(i,{force:!0},(function(t,n){t||(e.loginBtn=!0,e.$emit("handleLogin",n))}))}}},r=o,c=(n("3b72"),n("2877")),l=Object(c["a"])(r,i,a,!1,null,"58b49324",null);e["default"]=l.exports}}]);