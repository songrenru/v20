(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ebd3118","chunk-3dc75558","chunk-31f7d7a8","chunk-2d0b3786"],{"03cf":function(t,e,a){},"0a86":function(t,e,a){"use strict";a("f420")},"26ff":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"LoginForm"}},[a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:t.L("请输入账号或者手机号码")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"}]}],expression:"[\n          'account',\n          {\n            rules: [\n              { required: true, message: L('请输入账号或者手机号码') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n            ],\n          },\n        ]"}],attrs:{size:"large",placeholder:t.L("账号/手机号")}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["pwd",{rules:[{required:!0,message:t.L("请输入密码")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"},{pattern:/^[^\u4e00-\u9fa5]{0,}$/,message:t.L("密码不能输入汉字")+"~"}]}],expression:"[\n          'pwd',\n          {\n            rules: [\n              { required: true, message: L('请输入密码') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n              { pattern: /^[^\\u4e00-\\u9fa5]{0,}$/, message: L('密码不能输入汉字') + '~' },\n            ],\n          },\n        ]"}],attrs:{size:"large",type:"password",placeholder:"密码"}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["verify",{rules:[{required:!0,message:t.L("请输入4位验证码")+"~"},{len:4,message:t.L("请输入4位验证码")+"~"}]}],expression:"[\n              'verify',\n              {\n                rules: [\n                  { required: true, message: L('请输入4位验证码') + '~' },\n                  { len: 4, message: L('请输入4位验证码') + '~' },\n                ],\n              },\n            ]"}],attrs:{size:"large"}})],1),a("a-col",{attrs:{span:8}},[a("img",{staticStyle:{width:"100%",height:"40px",cursor:"pointer"},attrs:{src:t.src},on:{click:t.getNewCode}})]),a("a-col",{attrs:{span:4}},[a("div",{staticStyle:{cursor:"pointer",height:"40px","line-height":"20px","vertical-aligin":"middle","font-size":"12px","text-align":"center"},on:{click:t.getNewCode}},[a("span",[t._v(t._s(t.L("看不清")))]),a("br"),a("span",[t._v(t._s(t.L("换一张")))])])])],1)],1),a("a-form-item",[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary",size:"large","html-type":"submit",loading:t.loginBtn,disabled:t.loginBtn}},[t._v(t._s(t.L("登录")))])],1)],1)],1)},n=[],r=a("5530"),s=a("cdc9"),o={name:"LoginForm",components:{},data:function(){return{form:this.$form.createForm(this),loginBtn:!1,src:s["a"].imgCode}},created:function(){},methods:{getNewCode:function(){var t=1e3*Math.random();this.src=s["a"].imgCode+"?t="+t},handleSubmit:function(t){var e=this;t.preventDefault();var a=this.form.validateFields,i=["account","pwd","verify"];a(i,{force:!0},(function(t,a){if(!t){e.loginBtn=!0,console.log("login form",a);var i=Object(r["a"])({},a);e.$emit("handleLogin",i)}}))}}},c=o,l=(a("0a86"),a("0c7c")),d=Object(l["a"])(c,i,n,!1,null,"5bfd6756",null);e["default"]=d.exports},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("6b75");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||r(t)||Object(s["a"])(t)||o()}},"7b3f":function(t,e,a){"use strict";var i={uploadImg:"/common/common.UploadFile/uploadImg"};e["a"]=i},"99f3":function(t,e,a){"use strict";a("f4ce")},"9eb4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"merchantLogin"}},[a("section",{attrs:{id:"header"}},[a("div",{staticClass:"left item"},[a("div",{staticClass:"logo",style:"background-image:url("+t.config.site_logo+")",attrs:{"data-url":t.config.site_url},on:{click:t.openUrl}},[a("div",{staticClass:"title",on:{click:function(t){t.stopPropagation()}}},[t._v(t._s("login"==t.type?t.L("商家登录"):t.L("商家注册")))])])]),a("div",{staticClass:"right item"},[t.config.is_demo_domain?a("div",[t._v(" "+t._s(t.L("小猪O2O致力于为快速构建本地生活服务平台提供专业的解决方案"))+" ")]):t._e(),1==t.config.open_multilingual&&t.config.lang_config?a("div",[a("a-dropdown",{attrs:{trigger:["click"]}},[t.config.lang_config.lang_list&&t.config.lang_config.lang_list.length?a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},t._l(t.config.lang_config.lang_list,(function(e){return a("a-menu-item",{key:e.val,style:t.now_lang==e.val?"color:#1890FF":"",on:{click:t.changeLang}},[t._v(" "+t._s(e.display)+" ")])})),1):t._e(),a("a-button",{staticStyle:{"margin-left":"8px"}},[t._v(" "+t._s(t.lang_txt)+" "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1):t._e()])]),a("section",{attrs:{id:"content"}},[a("a-card",{directives:[{name:"show",rawName:"v-show",value:"login"==t.type,expression:"type == 'login'"}],key:"login-card",staticClass:"form-card"},[a("a-tabs",{attrs:{"default-active-key":t.loginType,size:"large",tabBarStyle:{textAlign:"center",fontSize:"16px"}},on:{change:t.handleTabChange}},[a("a-tab-pane",{key:"code",attrs:{tab:t.L("扫码登录")}},[a("div",{staticClass:"code-container"},[t.codeInfo.qrcode?a("img",{staticClass:"code-img",attrs:{src:t.codeInfo.qrcode}}):a("div",{staticClass:"code-img"},[a("a-spin")],1)]),a("div",{staticClass:"tip"},[t._v(" "+t._s(t.L("打开"))+" "),a("span",{staticStyle:{color:"red","margin-right":"10px"}},[t._v(t._s(t.L("手机微信")))]),a("span",[t._v(t._s(t.L("扫描二维码")))])]),a("div",{staticClass:"characteristic"},[a("div",{key:"noinput",staticClass:"item"},[a("a-icon",{staticClass:"item-icon",attrs:{type:"edit"}}),t._v(t._s(t.L("免输入"))+" ")],1),a("div",{key:"faster",staticClass:"item"},[a("a-icon",{staticClass:"item-icon",attrs:{type:"rocket"}}),t._v(t._s(t.L("更快"))+" ")],1),a("div",{key:"safer",staticClass:"item"},[a("a-icon",{staticClass:"item-icon",attrs:{type:"safety"}}),t._v(t._s(t.L("更安全"))+" ")],1)])]),a("a-tab-pane",{key:"account",attrs:{tab:t.L("账户登录")}},["login"==t.type?a("login-form",{ref:"loginForm",on:{handleLogin:t.handleAccountLogin}}):t._e()],1)],1),a("div",{staticClass:"ant-card-actions",attrs:{slot:"actions"},on:{click:t.switchCard},slot:"actions"},[a("span",[a("a-icon",{key:"right-circle",staticStyle:{"margin-right":"10px"},attrs:{type:"right-circle"}}),t._v(t._s(t.L("立即注册"))+" ")],1)])],1),a("a-card",{directives:[{name:"show",rawName:"v-show",value:"register"==t.type,expression:"type == 'register'"}],key:"register-card",staticClass:"form-card"},[a("a-tabs",{attrs:{"default-active-key":"register",size:"large",tabBarStyle:{textAlign:"center",fontSize:"16px"}},on:{change:t.handleTabChange}},[a("a-tab-pane",{key:"register",attrs:{tab:t.L("账户注册")}},["register"==t.type?a("register-form",{ref:"registerForm",attrs:{config:t.config},on:{handleRegister:t.handleRegister}}):t._e(),a("div",{staticClass:"tip"},[t._v(" "+t._s(t.L("注册即表示同意"))+" "),a("router-link",{attrs:{tag:"a",target:"_blank",to:{name:"merchantAgreement"}}},[t._v("《"+t._s(t.L("商家注册协议"))+"》")])],1)],1)],1),a("div",{staticClass:"ant-card-actions",attrs:{slot:"actions"},on:{click:t.switchCard},slot:"actions"},[a("span",{staticStyle:{color:"#b61d1d"}},[a("a-icon",{key:"right-circle",staticStyle:{"margin-right":"10px"},attrs:{type:"right-circle"}}),t._v(t._s(t.L("有账号，去登录"))+" ")],1)])],1)],1),a("section",{attrs:{id:"btns"}},[a("div",{staticClass:"item active",attrs:{"data-url":"https://shang.qq.com/email/stop/email_stop.html?qq="+t.config.site_qq},on:{click:t.openUrl}},[a("a-icon",{staticClass:"tip-icon",attrs:{type:"qq"}}),a("div",{staticClass:"tip"},[t._v(t._s(t.L("在线咨询")))])],1),a("a-popover",{attrs:{placement:"left"}},[t.config?a("template",{staticClass:"popover-content",staticStyle:{padding:"20px"},slot:"content"},[a("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.config.wechat_qrcode}}),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[t._v(t._s(t.L("关注我们")))])]):t._e(),a("div",{staticClass:"item"},[a("a-icon",{staticClass:"tip-icon",attrs:{type:"qrcode"}}),a("div",{staticClass:"tip"},[t._v(t._s(t.L("关注我们")))])],1)],2),a("a-popover",{attrs:{placement:"left"}},[t.config?a("template",{staticStyle:{padding:"20px"},slot:"content"},[t._v(t._s(t.config.site_phone))]):t._e(),a("div",{staticClass:"item"},[a("a-icon",{staticClass:"tip-icon",attrs:{type:"phone"}}),a("div",{staticClass:"tip"},[t._v(t._s(t.L("联系电话")))])],1)],2),a("a-popover",{attrs:{placement:"left"}},[t.config?a("template",{staticStyle:{padding:"20px"},slot:"content"},[t._v(t._s(t.config.site_email))]):t._e(),a("div",{staticClass:"item"},[a("a-icon",{staticClass:"tip-icon",attrs:{type:"mail"}}),a("div",{staticClass:"tip"},[t._v(t._s(t.L("联系邮箱")))])],1)],2)],1),a("section",{staticClass:"footer"},[t.config&&t.config.copyright_txt?a("div",{staticClass:"copyright"},[t._v(t._s(t.config.copyright_txt))]):t._e()])])},n=[],r=a("5530"),s=(a("d3b7"),a("8bbf")),o=a.n(s),c=a("ca00"),l=a("5880"),d=a("e37c"),g=a("cdc9"),u=a("26ff"),m=a("eabb"),h={components:{LoginForm:u["default"],RegisterForm:m["default"]},data:function(){return{type:"login",loginType:"code",codeInfo:{},interval:null,config:null,now_lang:"",lang_txt:""}},watch:{"$store.getters.config":function(t){this.config=t},"$store.getters.nowLang":function(t){this.now_lang=t,this.lang_txt=Object(c["e"])(t)}},created:function(){this.config=this.$store.getters.config,this.now_lang=this.$store.getters.nowLang,this.lang_txt=Object(c["e"])(this.now_lang),this.getLoginCode()},beforeDestroy:function(){this.clearInterval()},methods:Object(r["a"])(Object(r["a"])({},Object(l["mapActions"])(["Login","SetLang"])),{},{changeLang:function(t){var e=this;this.SetLang({lang:t.key}).then((function(a){e.now_lang=t.key,e.lang_txt=Object(c["e"])(e.now_lang)}))},handleTabChange:function(t){"code"==t?(this.interval&&this.clearInterval(),this.setInterval()):this.clearInterval(),this.loginType=t},switchCard:function(){this.type="login"==this.type?"register":"login","login"==this.type&&"code"==this.loginType?(this.interval&&this.clearInterval(),this.setInterval()):this.clearInterval()},getLoginCode:function(){var t=this;this.request(g["a"].qrcode,{mer_id:1}).then((function(e){t.codeInfo=e,t.setInterval()}))},setInterval:function(){var t=this;if(this.codeInfo&&this.codeInfo.qrcode_id){var e=this.codeInfo.qrcode_id;this.interval=window.setInterval((function(){t.request(g["a"].codeLoginResult,{qrcode_id:e}).then((function(e){if(e.ticket){var a=Object(c["k"])("merchant");o.a.ls.set(a,e.ticket,null),Object(c["m"])(a,e.ticket,null),t.loginSuccess(e)}})).catch((function(e){t.clearInterval()}))}),3e3)}},handleAccountLogin:function(t){var e=this,a=this.Login;a({userInfo:t,url:g["a"].login}).then((function(t){return e.loginSuccess(t)})).catch((function(t){return e.requestFailed(t)})).finally((function(){setTimeout((function(){e.$refs.loginForm.loginBtn=!1}),1e3)}))},loginSuccess:function(t){t&&(this.clearInterval(),this.$message.success(this.L("登录成功！正在跳转~")),this.$router.push({path:d["a"].merchantIndex}))},requestFailed:function(t){this.$refs.loginForm.getNewCode()},handleRegister:function(t){var e=this;this.request(g["a"].register,t,"post",(function(t){e.$message.success(t),e.type="login",e.$refs.registerForm.registerBtn=!1})).then((function(t){})).finally((function(){e.$refs.registerForm.registerBtn=!1}))},openUrl:function(t){window.open(t.target.dataset.url,"_blank")},clearInterval:function(){window.clearInterval(this.interval),this.interval=null}})},f=h,p=(a("99f3"),a("0c7c")),v=Object(p["a"])(f,i,n,!1,null,"34a551f4",null);e["default"]=v.exports},a27a:function(t,e,a){"use strict";a("03cf")},eabb:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"RegisterForm"}},[a("a-form",{staticClass:"register-form",attrs:{id:"components-form-demo-normal-login",form:t.form,"label-col":{span:5},"wrapper-col":{span:19},labelAlign:"left",hideRequiredMark:""},on:{submit:t.handleSubmit}},[a("div",{staticClass:"form-style"},[1==t.international_phone?a("a-form-item",{attrs:{label:t.L("手机区号")}},[a("a-select",{on:{change:t.handleCountryChange},model:{value:t.countryId,callback:function(e){t.countryId=e},expression:"countryId"}},t._l(t.nationalData,(function(e){return a("a-select-option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.show))])})),1)],1):t._e(),a("a-form-item",{attrs:{label:t.L("手机号码")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:t.L("请输入手机号码")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"}]}],expression:"[\n          'phone',\n          {\n            rules: [\n              { required: true, message: L('请输入手机号码') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:t.L("以后可以使用手机号登录")}})],1),1==t.config.open_merchant_reg_sms?a("a-form-item",{attrs:{label:t.L("短信验证码")}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:15}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["smscode",{rules:[{required:!0,message:t.L("请填写短信验证码")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"}]}],expression:"[\n              'smscode',\n              {\n                rules: [\n                  { required: true, message: L('请填写短信验证码') + '~' },\n                  { whitespace: true, message: L('输入值不能为空') + '~' },\n                ],\n              },\n            ]"}],attrs:{placeholder:t.L("请填写短信验证码")}})],1),a("a-col",{attrs:{span:9}},[0==t.time?a("a-button",{key:"get-code",attrs:{type:"link"},on:{click:t.getImgCode}},[t._v(t._s(t.L("获取验证码")))]):a("a-button",{key:"code-count",attrs:{type:"link"}},[t._v(t._s(t.time)+" s")])],1)],1)],1):t._e(),a("a-form-item",{attrs:{label:t.L("设置密码")}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["pwd",{rules:[{required:!0,message:t.L("请设置您的密码")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"},{pattern:/^[0-9a-zA-Z_]{6,}$/,message:t.L("密码最少为6位，且不能输入汉字")+"~"}]}],expression:"[\n          'pwd',\n          {\n            rules: [\n              { required: true, message: L('请设置您的密码') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n              { pattern: /^[0-9a-zA-Z_]{6,}$/, message: L('密码最少为6位，且不能输入汉字') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:t.L("长度大于6位字符")}})],1),a("a-form-item",{attrs:{label:t.L("商家名称")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:t.L("请输入您店铺的品牌名称")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"}]}],expression:"[\n          'name',\n          {\n            rules: [\n              { required: true, message: L('请输入您店铺的品牌名称') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:t.L("您店铺的品牌名称")}})],1),1==t.$store.getters.config.open_bd_spread?a("a-form-item",{attrs:{label:t.L("邀请码")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["invit_code"],expression:"['invit_code']"}],attrs:{placeholder:t.L("请联系业务员或业务经理获取邀请码")}})],1):t._e(),a("a-form-item",{attrs:{label:t.L("营业执照")}},[a("a-upload",{attrs:{name:"reply_pic","file-list":t.tradingCertificateImageList,action:t.uploadImg,headers:t.headers},on:{change:t.tradingCertificateImageChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" 上传营业执照")],1)],1)],1),a("a-form-item",{attrs:{label:t.L("身份证正面")}},[a("a-upload",{attrs:{name:"reply_pic","file-list":t.idCardFrontList,action:t.uploadImg,headers:t.headers},on:{change:t.idCardFrontChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" 上传身份证正面")],1)],1)],1),a("a-form-item",{attrs:{label:t.L("身份证反面")}},[a("a-upload",{attrs:{name:"reply_pic","file-list":t.idCardReverseList,action:t.uploadImg,headers:t.headers},on:{change:t.idCardReverseChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" 上传身份证反面")],1)],1)],1),a("a-form-item",{attrs:{label:t.L("地区")}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:t.provinceId,dropdownMatchSelectWidth:!1},on:{change:t.handleProvinceChange}},t._l(t.provinceData,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:t.cityId,dropdownMatchSelectWidth:!1},on:{change:t.handleCityChange}},t._l(t.cityData,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:t.areaId,dropdownMatchSelectWidth:!1},on:{change:t.handleAreaChange}},t._l(t.areaData,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:t.streetId,dropdownMatchSelectWidth:!1},on:{change:t.handleStreetChange}},t._l(t.streetData,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1)],1)],1),a("a-form-item",{attrs:{label:t.L("详细地址")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{rules:[{required:!0,message:t.L("请输入详细地址")+"~"},{whitespace:!0,message:t.L("输入值不能为空")+"~"}]}],expression:"[\n          'address',\n          {\n            rules: [\n              { required: true, message: L('请输入详细地址') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:t.L("您店铺的详细位置")}})],1)],1),a("a-form-item",{staticStyle:{"text-align":"center"},attrs:{"wrapper-col":{span:24}}},[a("a-button",{staticClass:"login-form-button",staticStyle:{width:"60%","margin-top":"10px"},attrs:{type:"primary",size:"large","html-type":"submit",loading:t.registerBtn,disabled:t.registerBtn}},[t._v(t._s(t.L("注册")))])],1)],1),a("a-modal",{attrs:{title:t.L("获取验证码"),visible:t.visible},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:8}},[a("img",{staticStyle:{width:"100%",height:"40px",cursor:"pointer"},attrs:{src:t.src},on:{click:t.changeImage}})]),a("a-col",{attrs:{span:16}},[a("a-input",{attrs:{size:"large",placeholder:t.L("请输入4位验证码~")},model:{value:t.imgCode,callback:function(e){t.imgCode=e},expression:"imgCode"}})],1)],1)],1)],1)},n=[],r=a("2909"),s=(a("b0c0"),a("d3b7"),a("159b"),a("fb6a"),a("d81d"),a("cdc9")),o=a("7b3f"),c={name:"RegisterForm",components:{},props:{config:{type:Object,default:function(){return{}}}},data:function(){return{headers:{authorization:"authorization-text"},form:this.$form.createForm(this),registerBtn:!1,visible:!1,phone:"",imgCode:"",time:0,provinceData:[],cityData:[],areaData:[],streetData:[],nationalData:[],provinceId:"",cityId:"",areaId:"",streetId:"",provinceName:"",cityName:"",src:s["a"].imgCode,countryId:86,international_phone:0,uploadImg:"/v20/public/index.php"+o["a"].uploadImg+"?upload_dir=/merchant",tradingCertificateImageList:[],tradingCertificateImage:"",idCardFrontList:[],idCardFront:"",idCardReverseList:[],idCardReverse:""}},created:function(){this.getProvinceData(),this.getNationalData(),this.getConfig()},methods:{changeImage:function(){var t=1e3*Math.random();this.src=s["a"].imgCode+"?t="+t},getLocation:function(){var t=this;this.request(s["a"].getCurrentLocation).then((function(e){console.log(e),e&&(t.provinceId=e.province_id,t.cityId=e.city_id,t.provinceName=e.province_name,t.cityName=e.city_name,t.getCityData())}))},getProvinceData:function(){var t=this;this.request(s["a"].getProvinceData).then((function(e){console.log(e),0==e.error?e.list&&e.list.length&&(t.provinceData=e.list,t.getLocation()):2==e.error&&(t.provinceData=[{id:e.id,name:e.name}],t.provinceId=e.id,t.provinceName=e.name,t.getCityData())}))},getNationalData:function(){var t=this;this.request(s["a"].getNationalData).then((function(e){console.log(e),t.nationalData=e,console.log(t.nationalData)}))},getConfig:function(){var t=this;this.request(s["a"].getConfig).then((function(e){t.international_phone=e.international_phone}))},getCityData:function(){var t=this;this.cityData=[];var e={id:this.provinceId,name:this.provinceName};this.request(s["a"].getCityeData,e).then((function(e){e.list&&e.list.length?(t.cityData=e.list,""==t.cityId&&""==t.cityName&&(t.cityId=e.list[0].id,t.cityName=e.list[0].name)):e.id&&e.name&&(t.cityData.push({id:e.id,name:e.name}),t.cityId=e.id,t.cityName=e.name),e.info?(t.$message.warning(e.info),t.areaData=[],t.streetData=[]):t.getAreaData()}))},getAreaData:function(){var t=this;this.areaData=[],this.areaId="";var e={id:this.cityId,name:this.cityName};this.request(s["a"].getAreaData,e).then((function(e){e.list&&e.list.length?(t.areaData=e.list,t.areaId=e.list[0].id):e.id&&e.name&&(t.areaData.push({id:e.id,name:e.name}),t.areaId=e.id),e.info?(t.$message.warning(e.info),t.areaData=[],t.streetData=[]):t.getStreetData()}))},getStreetData:function(){var t=this;this.streetData=[],this.streetId="";var e={id:this.areaId};this.request(s["a"].getStreetData,e).then((function(e){e.list&&e.list.length?(t.streetData=e.list,t.streetId=e.list[0].id):e.id&&e.name&&(t.streetData.push({id:e.id,name:e.name}),t.streetId=e.id),e.info&&(t.$message.warning(e.info),t.streetData=[])}))},handleProvinceChange:function(t){var e=this;this.provinceData.forEach((function(a){a.id==t&&(e.provinceId=a.id,e.provinceName=a.name,e.cityId="",e.cityName="",e.areaId="",e.streetId="",e.getCityData())}))},handleCountryChange:function(t){var e=this;this.nationalData.forEach((function(a){a.code==t&&(e.countryId=a.code)}))},handleCityChange:function(t){var e=this;this.cityData.forEach((function(a){a.id==t&&(e.cityId=a.id,e.cityName=a.name,e.getAreaData())}))},handleAreaChange:function(t){var e=this;this.areaData.forEach((function(a){a.id==t&&(e.areaId=a.id,e.getStreetData())}))},handleStreetChange:function(t){var e=this;this.streetData.forEach((function(a){a.id==t&&(e.streetId=a.id)}))},getImgCode:function(){var t=this,e=this.form.validateFields,a=["phone"];e(a,{force:!0},(function(e,a){e||(t.changeImage(),t.phone=a.phone,t.visible=!0)}))},tradingCertificateImageChange:function(t){var e=this,a=Object(r["a"])(t.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,e.tradingCertificateImage=t.file.response.data.image),a})),this.tradingCertificateImageList=a,"done"===t.file.status?console.log("done"):"error"===t.file.status&&(console.log("error"),this.$message.error("".concat(t.file.name," 上传失败.")))},idCardFrontChange:function(t){var e=this,a=Object(r["a"])(t.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,e.idCardFront=t.file.response.data.image),a})),this.idCardFrontList=a,"done"===t.file.status?console.log("done"):"error"===t.file.status&&(console.log("error"),this.$message.error("".concat(t.file.name," 上传失败.")))},idCardReverseChange:function(t){var e=this,a=Object(r["a"])(t.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,e.idCardReverse=t.file.response.data.image),a})),this.idCardReverseList=a,"done"===t.file.status?console.log("done"):"error"===t.file.status&&(console.log("error"),this.$message.error("".concat(t.file.name," 上传失败.")))},handleOk:function(){this.imgCode&&4==this.imgCode.length?this.getSmsCode():this.$message.error(this.L("请输入4位验证码")+"~")},handleCancel:function(){this.visible=!1},getSmsCode:function(){var t=this,e={phone:this.phone,verify:this.imgCode};this.request(s["a"].getSmsCode,e).then((function(e){if(e){t.visible=!1,t.time=60;var a=window.setInterval((function(){0==t.time?window.clearInterval(a):t.time--}),1e3)}}))},handleSubmit:function(t){var e=this;t.preventDefault();var a=this.form.validateFields,i=["phone","pwd","smscode","name","invit_code","address"];a(i,{force:!0},(function(t,a){if(t)setTimeout((function(){e.registerBtn=!1}),600);else{if(console.log("login form",a),a.verify=e.imgCode,!e.provinceId||!e.cityId||!e.areaId)return e.$message.error(e.L("请选择省份/城市/区域信息")),void(e.registerBtn=!1);a.province_id=e.provinceId,a.city_id=e.cityId,a.area_id=e.areaId,a.street_id=e.streetId,a.phone_country_type=e.countryId,a.trading_certificate_image=e.tradingCertificateImage,a.id_card_front=e.idCardFront,a.id_card_reverse=e.idCardReverse,e.registerBtn=!0,e.$emit("handleRegister",a)}}))}}},l=c,d=(a("a27a"),a("0c7c")),g=Object(d["a"])(l,i,n,!1,null,"61056cfa",null);e["default"]=g.exports},f420:function(t,e,a){},f4ce:function(t,e,a){}}]);