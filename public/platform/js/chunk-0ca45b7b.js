(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ca45b7b"],{"00d87":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],i=0;i<4;i++)8*r+6*i<=8*t.length?n.push(e.charAt(o>>>6*(3-i)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(r))>>>6-2*o);return n}};t.exports=n})()},"044b":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},"11cc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main",staticStyle:{"margin-top":"70px"}},[n("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:t.form},on:{submit:t.handleSubmit}},[t.isLoginError?n("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:"账户或密码错误"}}):t._e(),n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名或邮箱地址"},{validator:t.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n          'username',\n          {\n            rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }],\n            validateTrigger: 'change',\n          },\n        ]"}],attrs:{size:"large",type:"text",placeholder:"账户名"}},[n("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"['password', { rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur' }]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"密码"}},[n("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),n("a-form-item",{staticStyle:{"margin-top":"24px"}},[n("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:t.state.loginBtn,disabled:t.state.loginBtn}},[t._v("登 录")])],1)],1)],1)},o=[],i=n("5530"),a=(n("ac1f"),n("d3b7"),n("6821"),n("5880")),s=n("ca00"),c=n("e37c"),u=n("7244"),l=null,f={components:{},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1},wxQrcode:"",wxLoginModalVisiable:!1,qrcodeId:""}},created:function(){},beforeDestroy:function(){l=null,window.clearInterval(l)},methods:Object(i["a"])(Object(i["a"])({},Object(a["mapActions"])(["Login","Logout"])),{},{handleUsernameOrEmail:function(t,e,n){var r=this.state,o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;o.test(e)?r.loginType=0:r.loginType=1,n()},handleSubmit:function(t){var e=this;t.preventDefault();var n=this.form.validateFields,r=this.state,o=(this.customActiveKey,this.Login);r.loginBtn=!0;var a=["username","password"];n(a,{force:!0},(function(t,n){if(t)setTimeout((function(){r.loginBtn=!1}),600);else{console.log("login form",n);var a=Object(i["a"])({},n);delete a.username,a[r.loginType?"username":"email"]=n.username,a.password=n.password,o({userInfo:a,url:u["a"].login}).then((function(t){return e.loginSuccess(t)})).finally((function(){r.loginBtn=!1}))}}))},getCaptcha:function(t){var e=this;t.preventDefault();var n=this.form.validateFields,r=this.state;n(["mobile"],{force:!0},(function(t,n){if(!t){r.smsSendBtn=!0;var o=window.setInterval((function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(o))}),1e3),i=e.$message.loading("验证码发送中..",0);getSmsCaptcha({mobile:n.mobile}).then((function(t){setTimeout(i,2500),e.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+t.result.captcha,duration:8})})).catch((function(t){setTimeout(i,1),clearInterval(o),r.time=60,r.smsSendBtn=!1,e.requestFailed(t)}))}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var t=this;this.Logout().then((function(){t.loginBtn=!1,t.stepCaptchaVisible=!1}))},loginSuccess:function(t){var e=this;console.log("loginSucess",t),window.clearInterval(l),this.$router.push({path:c["a"].meterIndex}),setTimeout((function(){e.$notification.success({message:"欢迎",description:"".concat(Object(s["o"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(t){this.isLoginError=!0},handleWxModalClose:function(){this.wxLoginModalVisiable=!1,window.clearInterval(l)}})},g=f,d=(n("4271"),n("0c7c")),p=Object(d["a"])(g,r,o,!1,null,"4cbb3d37",null);e["default"]=p.exports},"2c08":function(t,e,n){},4271:function(t,e,n){"use strict";n("2c08")},6821:function(t,e,n){(function(){var e=n("00d87"),r=n("9a634").utf8,o=n("044b"),i=n("9a634").bin,a=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?i.stringToBytes(t):r.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var s=e.bytesToWords(t),c=8*t.length,u=1732584193,l=-271733879,f=-1732584194,g=271733878,d=0;d<s.length;d++)s[d]=16711935&(s[d]<<8|s[d]>>>24)|4278255360&(s[d]<<24|s[d]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;var p=a._ff,h=a._gg,m=a._hh,v=a._ii;for(d=0;d<s.length;d+=16){var b=u,y=l,w=f,T=g;u=p(u,l,f,g,s[d+0],7,-680876936),g=p(g,u,l,f,s[d+1],12,-389564586),f=p(f,g,u,l,s[d+2],17,606105819),l=p(l,f,g,u,s[d+3],22,-1044525330),u=p(u,l,f,g,s[d+4],7,-176418897),g=p(g,u,l,f,s[d+5],12,1200080426),f=p(f,g,u,l,s[d+6],17,-1473231341),l=p(l,f,g,u,s[d+7],22,-45705983),u=p(u,l,f,g,s[d+8],7,1770035416),g=p(g,u,l,f,s[d+9],12,-1958414417),f=p(f,g,u,l,s[d+10],17,-42063),l=p(l,f,g,u,s[d+11],22,-1990404162),u=p(u,l,f,g,s[d+12],7,1804603682),g=p(g,u,l,f,s[d+13],12,-40341101),f=p(f,g,u,l,s[d+14],17,-1502002290),l=p(l,f,g,u,s[d+15],22,1236535329),u=h(u,l,f,g,s[d+1],5,-165796510),g=h(g,u,l,f,s[d+6],9,-1069501632),f=h(f,g,u,l,s[d+11],14,643717713),l=h(l,f,g,u,s[d+0],20,-373897302),u=h(u,l,f,g,s[d+5],5,-701558691),g=h(g,u,l,f,s[d+10],9,38016083),f=h(f,g,u,l,s[d+15],14,-660478335),l=h(l,f,g,u,s[d+4],20,-405537848),u=h(u,l,f,g,s[d+9],5,568446438),g=h(g,u,l,f,s[d+14],9,-1019803690),f=h(f,g,u,l,s[d+3],14,-187363961),l=h(l,f,g,u,s[d+8],20,1163531501),u=h(u,l,f,g,s[d+13],5,-1444681467),g=h(g,u,l,f,s[d+2],9,-51403784),f=h(f,g,u,l,s[d+7],14,1735328473),l=h(l,f,g,u,s[d+12],20,-1926607734),u=m(u,l,f,g,s[d+5],4,-378558),g=m(g,u,l,f,s[d+8],11,-2022574463),f=m(f,g,u,l,s[d+11],16,1839030562),l=m(l,f,g,u,s[d+14],23,-35309556),u=m(u,l,f,g,s[d+1],4,-1530992060),g=m(g,u,l,f,s[d+4],11,1272893353),f=m(f,g,u,l,s[d+7],16,-155497632),l=m(l,f,g,u,s[d+10],23,-1094730640),u=m(u,l,f,g,s[d+13],4,681279174),g=m(g,u,l,f,s[d+0],11,-358537222),f=m(f,g,u,l,s[d+3],16,-722521979),l=m(l,f,g,u,s[d+6],23,76029189),u=m(u,l,f,g,s[d+9],4,-640364487),g=m(g,u,l,f,s[d+12],11,-421815835),f=m(f,g,u,l,s[d+15],16,530742520),l=m(l,f,g,u,s[d+2],23,-995338651),u=v(u,l,f,g,s[d+0],6,-198630844),g=v(g,u,l,f,s[d+7],10,1126891415),f=v(f,g,u,l,s[d+14],15,-1416354905),l=v(l,f,g,u,s[d+5],21,-57434055),u=v(u,l,f,g,s[d+12],6,1700485571),g=v(g,u,l,f,s[d+3],10,-1894986606),f=v(f,g,u,l,s[d+10],15,-1051523),l=v(l,f,g,u,s[d+1],21,-2054922799),u=v(u,l,f,g,s[d+8],6,1873313359),g=v(g,u,l,f,s[d+15],10,-30611744),f=v(f,g,u,l,s[d+6],15,-1560198380),l=v(l,f,g,u,s[d+13],21,1309151649),u=v(u,l,f,g,s[d+4],6,-145523070),g=v(g,u,l,f,s[d+11],10,-1120210379),f=v(f,g,u,l,s[d+2],15,718787259),l=v(l,f,g,u,s[d+9],21,-343485551),u=u+b>>>0,l=l+y>>>0,f=f+w>>>0,g=g+T>>>0}return e.endian([u,l,f,g])};a._ff=function(t,e,n,r,o,i,a){var s=t+(e&n|~e&r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._gg=function(t,e,n,r,o,i,a){var s=t+(e&r|n&~r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._hh=function(t,e,n,r,o,i,a){var s=t+(e^n^r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._ii=function(t,e,n,r,o,i,a){var s=t+(n^(e|~r))+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._blocksize=16,a._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(a(t,n));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):e.bytesToHex(r)}})()},"9a634":function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n}}]);