(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-931ddb38","chunk-112c6452","chunk-ef425160","chunk-112c6452","chunk-2d0b3786"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,c,"next",t)}function c(t){n(i,a,o,s,c,"throw",t)}s(void 0)}))}}},2900:function(t,e,r){},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=r("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||o(t)||Object(i["a"])(t)||s()}},"6a33":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("a-page-header",{staticClass:"page-header",attrs:{title:"完善公司招聘类信息，更有利于展示您的企业"}}),r("a-form-model",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{model:t.form,"label-col":{span:2},"wrapper-col":{span:8},rules:t.rules}},[r("a-form-model-item",{attrs:{label:"公司照片",colon:!1,help:"限上传10张，建议尺寸900*500",rules:{required:!0}}},[r("div",{staticClass:"clearfix"},[r("a-upload",{attrs:{name:"pic",action:t.uploadImg,"list-type":"picture-card","file-list":t.imgUploadList,multiple:!0},on:{preview:t.handlePreview,change:t.handleImgChange}},[t.imgUploadList.length<10?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1):t._e()]),r("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleImgCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]),r("a-form-model-item",{ref:"name",attrs:{colon:!1,prop:"name",label:"公司名称"}},[r("a-input",{attrs:{placeholder:"请输入公司名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("a-form-model-item",{ref:"short_name",attrs:{colon:!1,prop:"short_name",label:"公司简称"}},[r("a-input",{attrs:{placeholder:"限5个字"},model:{value:t.form.short_name,callback:function(e){t.$set(t.form,"short_name",e)},expression:"form.short_name"}})],1),r("a-form-model-item",{attrs:{label:"公司经纬度"}},[r("a-row",[r("a-col",[r("a-button",{on:{click:function(e){return t.$refs.MapModal.showMap({lng:t.form.long,lat:t.form.lat})}}},[t._v(" 点击选取经纬度 ")])],1),r("a-col",[t._v(" "+t._s(t.form.long)+","+t._s(t.form.lat)+" ")])],1)],1),r("a-form-model-item",{attrs:{label:"公司规模",colon:!1}},[r("a-select",{model:{value:t.form.people_scale,callback:function(e){t.$set(t.form,"people_scale",e)},expression:"form.people_scale"}},[r("a-select-option",{attrs:{value:"1"}},[t._v("小于50人")]),r("a-select-option",{attrs:{value:"2"}},[t._v("50~100人")]),r("a-select-option",{attrs:{value:"3"}},[t._v("101-200人")]),r("a-select-option",{attrs:{value:"4"}},[t._v("201~500人")]),r("a-select-option",{attrs:{value:"5"}},[t._v("500人~1000人以上")])],1)],1),r("a-form-model-item",{attrs:{label:"融资状态",colon:!1}},[r("a-select",{model:{value:t.form.financing_status,callback:function(e){t.$set(t.form,"financing_status",e)},expression:"form.financing_status"}},[r("a-select-option",{attrs:{value:"1"}},[t._v("未融资")]),r("a-select-option",{attrs:{value:"2"}},[t._v("天使轮")]),r("a-select-option",{attrs:{value:"3"}},[t._v("A轮")]),r("a-select-option",{attrs:{value:"4"}},[t._v("B轮")]),r("a-select-option",{attrs:{value:"5"}},[t._v("C轮")]),r("a-select-option",{attrs:{value:"6"}},[t._v("D轮及以上")]),r("a-select-option",{attrs:{value:"7"}},[t._v("已上市")]),r("a-select-option",{attrs:{value:"8"}},[t._v("不需要融资")])],1)],1),r("a-form-model-item",{attrs:{label:"公司性质",colon:!1}},[r("a-select",{model:{value:t.form.nature,callback:function(e){t.$set(t.form,"nature",e)},expression:"form.nature"}},[r("a-select-option",{attrs:{value:"1"}},[t._v("民营")]),r("a-select-option",{attrs:{value:"2"}},[t._v("国企")]),r("a-select-option",{attrs:{value:"3"}},[t._v("外企")]),r("a-select-option",{attrs:{value:"4"}},[t._v("合资")]),r("a-select-option",{attrs:{value:"5"}},[t._v("股份制企业")]),r("a-select-option",{attrs:{value:"6"}},[t._v("事业单位")]),r("a-select-option",{attrs:{value:"7"}},[t._v("个体")]),r("a-select-option",{attrs:{value:"8"}},[t._v("其他")])],1)],1),r("a-form-model-item",{attrs:{label:"公司行业",colon:!1}},[r("a-cascader",{attrs:{placeholder:"未选择",options:t.industryLists,"expand-trigger":"hover"},model:{value:t.form.defaultIndustry,callback:function(e){t.$set(t.form,"defaultIndustry",e)},expression:"form.defaultIndustry"}})],1),r("a-form-model-item",{ref:"intro",attrs:{label:"公司介绍",colon:!1,prop:"intro"}},[r("a-input",{attrs:{type:"textarea",rows:4},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{offset:2}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" 保存 ")])],1)],1),r("choose-point",{ref:"MapModal",on:{updatePosition:t.updatePosition}})],1)},a=[],o=r("2909"),i=r("c7eb"),s=r("1da1"),c=(r("d3b7"),r("b0c0"),r("25f0"),r("d81d"),r("dcd5")),l=(r("7b3f"),r("7304"));function u(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var f={name:"Company",components:{ChoosePoint:l["default"]},data:function(){return{form:{name:"",short_name:"",long:"",lat:"",people_scale:"1",financing_status:"1",nature:"1",intro:"",images:[],defaultIndustry:[]},previewVisible:!1,previewImage:"",imgUploadList:[],uploadImg:"/v20/public/index.php/common/common.UploadFile/uploadPic?type=company",industryLists:[],rules:{name:[{required:!0,message:"公司名称不能为空",trigger:"blur"}],intro:[{required:!0,message:"公司介绍不能为空",trigger:"blur"}],short_name:[{max:5,message:"公司简称限5个字",trigger:"blur"}]}}},mounted:function(){this.syncIndustrySelect(),this.getCompanyInfo()},methods:{syncIndustrySelect:function(){var t=this;this.request(c["a"].industryTree,{}).then((function(e){t.industryLists=e})).catch((function(t){}))},getCompanyInfo:function(){var t=this;this.request(c["a"].getInfo,{}).then((function(e){t.form.name=e.name,t.form.short_name=e.short_name,t.form.long=e.long,t.form.lat=e.lat,t.form.people_scale=e.people_scale.toString(),t.form.financing_status=e.financing_status.toString(),t.form.nature=e.nature.toString(),t.form.intro=e.intro,t.form.defaultIndustry=[e.industry_id1,e.industry_id2],t.form.images=e.images_arr;for(var r=[],n=e.show_images_arr.length,a=0;a<n;a++)r.push({uid:-1*a,name:e.show_images_arr[a].path,status:"done",response:{status:"1000",data:e.show_images_arr[a]},url:e.show_images_arr[a].url});t.imgUploadList=r})).catch((function(t){}))},handleImgCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(s["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.url||t.preview){r.next=4;break}return r.next=3,u(t.originFileObj);case 3:t.preview=r.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},handleImgChange:function(t){var e=this,r=Object(o["a"])(t.fileList);this.imgUploadList=r;var n=[];this.imgUploadList.map((function(r){if("done"===r.status&&"1000"==r.response.status){var a=r.response.data;n.push(a.path),e.$set(e.form,"images",n)}else"error"===t.file.status&&e.$message.error("".concat(t.file.name," 上传失败！"))})),0==r.length&&this.$set(this.form,"images",[])},onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){return!!e&&(0==t.form.images.length?(t.$message.error("请上传公司照片"),!1):void t.request(c["a"].saveInfo,t.form).then((function(e){t.$message.success("保存成功")})).catch((function(t){})))}))},updatePosition:function(t){this.form.long=t.lng,this.form.lat=t.lat,console.log("更新坐标点",t)}}},h=f,p=(r("b8ad0"),r("0c7c")),m=Object(p["a"])(h,n,a,!1,null,"0ff43642",null);e["default"]=m.exports},7304:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-modal",{attrs:{title:t.title,visible:t.visible,width:1e3,footer:null},on:{cancel:t.handleCancelMap}},[r("div",{staticClass:"flex flex-wrap justify-between"},[r("div",{staticClass:"flex",staticStyle:{width:"260px"}},[r("a-input",{attrs:{placeholder:"请输入关键字"},on:{change:t.showPanelInput},model:{value:t.addressKeyword,callback:function(e){t.addressKeyword=e},expression:"addressKeyword"}})],1),r("div",{staticClass:"flex-1 ml-40"},[r("baidu-map",{staticClass:"bm-view",attrs:{zoom:t.zoom,center:t.postionMap,"scroll-wheel-zoom":!0},on:{click:t.getLocationPoint}},[r("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),r("bm-map-type",{attrs:{"map-types":["BMAP_NORMAL_MAP","BMAP_SATELLITE_MAP"],anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),r("bm-local-search",{staticClass:"searchRes",attrs:{keyword:t.addressKeyword,zoom:t.zoom,"auto-viewport":!0,panel:t.showPanel},on:{infohtmlset:t.infohtmlset}}),r("bm-marker",{attrs:{position:t.postionMap,dragging:!0}})],1)],1)])])},a=[],o={name:"ChoosePoint",data:function(){return{title:"地图",showPanel:!0,visible:!1,zoom:12.8,addressKeyword:"",postionMap:{lng:117.217433,lat:31.838546}}},methods:{handleOk:function(){this.visible=!1,this.$emit("updatePosition",this.postionMap)},handleCancelMap:function(){this.visible=!1},infohtmlset:function(t){t&&(this.postionMap.lng=t.point.lng,this.postionMap.lat=t.point.lat)},getLocationPoint:function(t){this.postionMap.lng=t.point.lng,this.postionMap.lat=t.point.lat,this.handleOk()},showMap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0!=t.lat&&(this.postionMap=t),this.visible=!0},showPanelInput:function(){this.showPanel=!this.showPanel}}},i=o,s=(r("eaa7d"),r("0c7c")),c=Object(s["a"])(i,n,a,!1,null,"4c2249b6",null);e["default"]=c.exports},"7b3f":function(t,e,r){"use strict";var n={uploadImg:"/common/common.UploadFile/uploadImg"};e["a"]=n},ad53:function(t,e,r){},b8ad0:function(t,e,r){"use strict";r("ad53")},c7eb:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var n=r("53ca");function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,o=Object.create(a.prototype),s=new j(n||[]);return i(o,"_invoke",{value:k(t,r,s)}),o}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var m="suspendedStart",d="suspendedYield",v="executing",g="completed",y={};function b(){}function w(){}function _(){}var L={};f(L,c,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(S([])));I&&I!==r&&o.call(I,c)&&(L=I);var M=_.prototype=b.prototype=Object.create(L);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(a,i,s,c){var l=p(t[a],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==Object(n["a"])(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var a=m;return function(o,i){if(a===v)throw new Error("Generator is already running");if(a===g){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var c=O(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===m)throw a=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var l=p(e,r,n);if("normal"===l.type){if(a=n.done?g:d,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=g,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator["return"]&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=p(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function S(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(o.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(Object(n["a"])(e)+" is not iterable")}return w.prototype=_,i(M,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:w,configurable:!0}),w.displayName=f(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,u,"GeneratorFunction")),t.prototype=Object.create(M),t},e.awrap=function(t){return{__await:t}},P(C.prototype),f(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new C(h(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(M),f(M,u,"Generator"),f(M,c,(function(){return this})),f(M,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}},dcd5:function(t,e,r){"use strict";var n={getRecruitHrList:"/recruit/merchant.NewRecruitHr/getRecruitHrList",getRecruitHrCreate:"/recruit/merchant.NewRecruitHr/getRecruitHrCreate",getRecruitHrInfo:"/recruit/merchant.NewRecruitHr/getRecruitHrInfo",getRecruitHrDel:"/recruit/merchant.NewRecruitHr/getRecruitHrDel",getJobList:"/recruit/merchant.RecruitMerchant/getJobList",updateJob:"/recruit/merchant.RecruitMerchant/updateJob",delJob:"/recruit/merchant.RecruitMerchant/delJob",getJobSearch:"/recruit/merchant.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/merchant.RecruitMerchant/getJobDetail",industryTree:"/recruit/merchant.Company/industryTree",getInfo:"/recruit/merchant.Company/getInfo",saveInfo:"/recruit/merchant.Company/saveInfo",getRecruitWelfareLabelList:"/recruit/merchant.Company/getRecruitWelfareLabelList",getRecruitWelfareLabelCreate:"/recruit/merchant.Company/getRecruitWelfareLabelCreate",getRecruitWelfareLabelInfo:"/recruit/merchant.Company/getRecruitWelfareLabelInfo",getList:"/recruit/merchant.TalentManagement/getList",getLibMsgLIst:"/recruit/merchant.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/merchant.TalentManagement/getResumeMsg"};e["a"]=n},eaa7d:function(t,e,r){"use strict";r("2900")}}]);