(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-772f1104","chunk-2d0b3786"],{2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var i=a("6b75");function r(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return r(e)||n(e)||Object(s["a"])(e)||o()}},"7b3f":function(e,t,a){"use strict";var i={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=i},"80bf":function(e,t,a){},a27a:function(e,t,a){"use strict";a("80bf")},eabb:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"RegisterForm"}},[a("a-form",{staticClass:"register-form",attrs:{id:"components-form-demo-normal-login",form:e.form,"label-col":{span:5},"wrapper-col":{span:19},labelAlign:"left",hideRequiredMark:""},on:{submit:e.handleSubmit}},[a("div",{staticClass:"form-style"},[1==e.international_phone?a("a-form-item",{attrs:{label:e.L("手机区号")}},[a("a-select",{on:{change:e.handleCountryChange},model:{value:e.countryId,callback:function(t){e.countryId=t},expression:"countryId"}},e._l(e.nationalData,(function(t){return a("a-select-option",{key:t.code,attrs:{value:t.code}},[e._v(e._s(t.show))])})),1)],1):e._e(),a("a-form-item",{attrs:{label:e.L("手机号码")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:e.L("请输入手机号码")+"~"},{whitespace:!0,message:e.L("输入值不能为空")+"~"}]}],expression:"[\n          'phone',\n          {\n            rules: [\n              { required: true, message: L('请输入手机号码') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:e.L("以后可以使用手机号登录")}})],1),1==e.config.open_merchant_reg_sms?a("a-form-item",{attrs:{label:e.L("短信验证码")}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:15}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["smscode",{rules:[{required:!0,message:e.L("请填写短信验证码")+"~"},{whitespace:!0,message:e.L("输入值不能为空")+"~"}]}],expression:"[\n              'smscode',\n              {\n                rules: [\n                  { required: true, message: L('请填写短信验证码') + '~' },\n                  { whitespace: true, message: L('输入值不能为空') + '~' },\n                ],\n              },\n            ]"}],attrs:{placeholder:e.L("请填写短信验证码")}})],1),a("a-col",{attrs:{span:9}},[0==e.time?a("a-button",{key:"get-code",attrs:{type:"link"},on:{click:e.getImgCode}},[e._v(e._s(e.L("获取验证码")))]):a("a-button",{key:"code-count",attrs:{type:"link"}},[e._v(e._s(e.time)+" s")])],1)],1)],1):e._e(),a("a-form-item",{attrs:{label:e.L("设置密码")}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["pwd",{rules:[{required:!0,message:e.L("请设置您的密码")+"~"},{whitespace:!0,message:e.L("输入值不能为空")+"~"},{pattern:/^[0-9a-zA-Z_]{6,}$/,message:e.L("密码最少为6位，且不能输入汉字")+"~"}]}],expression:"[\n          'pwd',\n          {\n            rules: [\n              { required: true, message: L('请设置您的密码') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n              { pattern: /^[0-9a-zA-Z_]{6,}$/, message: L('密码最少为6位，且不能输入汉字') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:e.L("长度大于6位字符")}})],1),a("a-form-item",{attrs:{label:e.L("商家名称")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:e.L("请输入您店铺的品牌名称")+"~"},{whitespace:!0,message:e.L("输入值不能为空")+"~"}]}],expression:"[\n          'name',\n          {\n            rules: [\n              { required: true, message: L('请输入您店铺的品牌名称') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:e.L("您店铺的品牌名称")}})],1),1==e.$store.getters.config.open_bd_spread?a("a-form-item",{attrs:{label:e.L("邀请码")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["invit_code"],expression:"['invit_code']"}],attrs:{placeholder:e.L("请联系业务员或业务经理获取邀请码")}})],1):e._e(),a("a-form-item",{attrs:{label:e.L("营业执照")}},[a("a-upload",{attrs:{name:"reply_pic","file-list":e.tradingCertificateImageList,action:e.uploadImg,headers:e.headers},on:{change:e.tradingCertificateImageChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传营业执照")],1)],1)],1),a("a-form-item",{attrs:{label:e.L("身份证正面")}},[a("a-upload",{attrs:{name:"reply_pic","file-list":e.idCardFrontList,action:e.uploadImg,headers:e.headers},on:{change:e.idCardFrontChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传身份证正面")],1)],1)],1),a("a-form-item",{attrs:{label:e.L("身份证反面")}},[a("a-upload",{attrs:{name:"reply_pic","file-list":e.idCardReverseList,action:e.uploadImg,headers:e.headers},on:{change:e.idCardReverseChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传身份证反面")],1)],1)],1),a("a-form-item",{attrs:{label:e.L("地区")}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:e.provinceId,dropdownMatchSelectWidth:!1},on:{change:e.handleProvinceChange}},e._l(e.provinceData,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:e.cityId,dropdownMatchSelectWidth:!1},on:{change:e.handleCityChange}},e._l(e.cityData,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:e.areaId,dropdownMatchSelectWidth:!1},on:{change:e.handleAreaChange}},e._l(e.areaData,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{value:e.streetId,dropdownMatchSelectWidth:!1},on:{change:e.handleStreetChange}},e._l(e.streetData,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1)],1)],1),a("a-form-item",{attrs:{label:e.L("详细地址")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{rules:[{required:!0,message:e.L("请输入详细地址")+"~"},{whitespace:!0,message:e.L("输入值不能为空")+"~"}]}],expression:"[\n          'address',\n          {\n            rules: [\n              { required: true, message: L('请输入详细地址') + '~' },\n              { whitespace: true, message: L('输入值不能为空') + '~' },\n            ],\n          },\n        ]"}],attrs:{placeholder:e.L("您店铺的详细位置")}})],1)],1),a("a-form-item",{staticStyle:{"text-align":"center"},attrs:{"wrapper-col":{span:24}}},[a("a-button",{staticClass:"login-form-button",staticStyle:{width:"60%","margin-top":"10px"},attrs:{type:"primary",size:"large","html-type":"submit",loading:e.registerBtn,disabled:e.registerBtn}},[e._v(e._s(e.L("注册")))])],1)],1),a("a-modal",{attrs:{title:e.L("获取验证码"),visible:e.visible},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:8}},[a("img",{staticStyle:{width:"100%",height:"40px",cursor:"pointer"},attrs:{src:e.src},on:{click:e.changeImage}})]),a("a-col",{attrs:{span:16}},[a("a-input",{attrs:{size:"large",placeholder:e.L("请输入4位验证码~")},model:{value:e.imgCode,callback:function(t){e.imgCode=t},expression:"imgCode"}})],1)],1)],1)],1)},r=[],n=a("2909"),s=(a("b0c0"),a("d3b7"),a("159b"),a("fb6a"),a("d81d"),a("cdc9")),o=a("7b3f"),c={name:"RegisterForm",components:{},props:{config:{type:Object,default:function(){return{}}}},data:function(){return{headers:{authorization:"authorization-text"},form:this.$form.createForm(this),registerBtn:!1,visible:!1,phone:"",imgCode:"",time:0,provinceData:[],cityData:[],areaData:[],streetData:[],nationalData:[],provinceId:"",cityId:"",areaId:"",streetId:"",provinceName:"",cityName:"",src:s["a"].imgCode,countryId:86,international_phone:0,uploadImg:"/v20/public/index.php"+o["a"].uploadImg+"?upload_dir=/merchant",tradingCertificateImageList:[],tradingCertificateImage:"",idCardFrontList:[],idCardFront:"",idCardReverseList:[],idCardReverse:""}},created:function(){this.getProvinceData(),this.getNationalData(),this.getConfig()},methods:{changeImage:function(){var e=1e3*Math.random();this.src=s["a"].imgCode+"?t="+e},getLocation:function(){var e=this;this.request(s["a"].getCurrentLocation).then((function(t){console.log(t),t&&(e.provinceId=t.province_id,e.cityId=t.city_id,e.provinceName=t.province_name,e.cityName=t.city_name,e.getCityData())}))},getProvinceData:function(){var e=this;this.request(s["a"].getProvinceData).then((function(t){console.log(t),0==t.error?t.list&&t.list.length&&(e.provinceData=t.list,e.getLocation()):2==t.error&&(e.provinceData=[{id:t.id,name:t.name}],e.provinceId=t.id,e.provinceName=t.name,e.getCityData())}))},getNationalData:function(){var e=this;this.request(s["a"].getNationalData).then((function(t){console.log(t),e.nationalData=t,console.log(e.nationalData)}))},getConfig:function(){var e=this;this.request(s["a"].getConfig).then((function(t){e.international_phone=t.international_phone}))},getCityData:function(){var e=this;this.cityData=[];var t={id:this.provinceId,name:this.provinceName};this.request(s["a"].getCityeData,t).then((function(t){t.list&&t.list.length?(e.cityData=t.list,""==e.cityId&&""==e.cityName&&(e.cityId=t.list[0].id,e.cityName=t.list[0].name)):t.id&&t.name&&(e.cityData.push({id:t.id,name:t.name}),e.cityId=t.id,e.cityName=t.name),t.info?(e.$message.warning(t.info),e.areaData=[],e.streetData=[]):e.getAreaData()}))},getAreaData:function(){var e=this;this.areaData=[],this.areaId="";var t={id:this.cityId,name:this.cityName};this.request(s["a"].getAreaData,t).then((function(t){t.list&&t.list.length?(e.areaData=t.list,e.areaId=t.list[0].id):t.id&&t.name&&(e.areaData.push({id:t.id,name:t.name}),e.areaId=t.id),t.info?(e.$message.warning(t.info),e.areaData=[],e.streetData=[]):e.getStreetData()}))},getStreetData:function(){var e=this;this.streetData=[],this.streetId="";var t={id:this.areaId};this.request(s["a"].getStreetData,t).then((function(t){t.list&&t.list.length?(e.streetData=t.list,e.streetId=t.list[0].id):t.id&&t.name&&(e.streetData.push({id:t.id,name:t.name}),e.streetId=t.id),t.info&&(e.$message.warning(t.info),e.streetData=[])}))},handleProvinceChange:function(e){var t=this;this.provinceData.forEach((function(a){a.id==e&&(t.provinceId=a.id,t.provinceName=a.name,t.cityId="",t.cityName="",t.areaId="",t.streetId="",t.getCityData())}))},handleCountryChange:function(e){var t=this;this.nationalData.forEach((function(a){a.code==e&&(t.countryId=a.code)}))},handleCityChange:function(e){var t=this;this.cityData.forEach((function(a){a.id==e&&(t.cityId=a.id,t.cityName=a.name,t.getAreaData())}))},handleAreaChange:function(e){var t=this;this.areaData.forEach((function(a){a.id==e&&(t.areaId=a.id,t.getStreetData())}))},handleStreetChange:function(e){var t=this;this.streetData.forEach((function(a){a.id==e&&(t.streetId=a.id)}))},getImgCode:function(){var e=this,t=this.form.validateFields,a=["phone"];t(a,{force:!0},(function(t,a){t||(e.changeImage(),e.phone=a.phone,e.visible=!0)}))},tradingCertificateImageChange:function(e){var t=this,a=Object(n["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.tradingCertificateImage=e.file.response.data.image),a})),this.tradingCertificateImageList=a,"done"===e.file.status?console.log("done"):"error"===e.file.status&&(console.log("error"),this.$message.error("".concat(e.file.name," 上传失败.")))},idCardFrontChange:function(e){var t=this,a=Object(n["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.idCardFront=e.file.response.data.image),a})),this.idCardFrontList=a,"done"===e.file.status?console.log("done"):"error"===e.file.status&&(console.log("error"),this.$message.error("".concat(e.file.name," 上传失败.")))},idCardReverseChange:function(e){var t=this,a=Object(n["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.idCardReverse=e.file.response.data.image),a})),this.idCardReverseList=a,"done"===e.file.status?console.log("done"):"error"===e.file.status&&(console.log("error"),this.$message.error("".concat(e.file.name," 上传失败.")))},handleOk:function(){this.imgCode&&4==this.imgCode.length?this.getSmsCode():this.$message.error(this.L("请输入4位验证码")+"~")},handleCancel:function(){this.visible=!1},getSmsCode:function(){var e=this,t={phone:this.phone,verify:this.imgCode};this.request(s["a"].getSmsCode,t).then((function(t){if(t){e.visible=!1,e.time=60;var a=window.setInterval((function(){0==e.time?window.clearInterval(a):e.time--}),1e3)}}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,i=["phone","pwd","smscode","name","invit_code","address"];a(i,{force:!0},(function(e,a){if(e)setTimeout((function(){t.registerBtn=!1}),600);else{if(console.log("login form",a),a.verify=t.imgCode,!t.provinceId||!t.cityId||!t.areaId)return t.$message.error(t.L("请选择省份/城市/区域信息")),void(t.registerBtn=!1);a.province_id=t.provinceId,a.city_id=t.cityId,a.area_id=t.areaId,a.street_id=t.streetId,a.phone_country_type=t.countryId,a.trading_certificate_image=t.tradingCertificateImage,a.id_card_front=t.idCardFront,a.id_card_reverse=t.idCardReverse,t.registerBtn=!0,t.$emit("handleRegister",a)}}))}}},d=c,l=(a("a27a"),a("0c7c")),u=Object(l["a"])(d,i,r,!1,null,"61056cfa",null);t["default"]=u.exports}}]);