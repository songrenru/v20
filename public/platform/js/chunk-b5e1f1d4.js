(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5e1f1d4","chunk-112c6452","chunk-112c6452","chunk-2d0b3786"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("d3b7");function n(e,t,r,n,i,a,o){try{var l=e[a](o),s=l.value}catch(u){return void r(u)}l.done?t(s):Promise.resolve(s).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function l(e){n(o,i,a,l,s,"next",e)}function s(e){n(o,i,a,l,s,"throw",e)}l(void 0)}))}}},2909:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("6b75");function i(e){if(Array.isArray(e))return Object(n["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=r("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return i(e)||a(e)||Object(o["a"])(e)||l()}},"37a5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-tabs",{attrs:{"default-active-key":"1"}},[r("a-tab-pane",{key:"1",attrs:{tab:e.title}})],1),r("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[r("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"信用卡名称",help:"建议不要超过10个字"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:e.detail.title,rules:[{required:!0,message:"请输入信用卡名称!"}]}],expression:"['title', { initialValue: detail.title,rules: [{ required: true, message: '请输入信用卡名称!' }] }]"}],attrs:{"field-names":"title",placeholder:"请输入信用卡名称"}})],1),r("a-form-item",{attrs:{label:"信用卡简介"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["introduce",{initialValue:e.detail.introduce,rules:[{required:!0,message:"请输入信用卡简介!"}]}],expression:"['introduce', { initialValue: detail.introduce,rules: [{ required: true, message: '请输入信用卡简介!' }] }]"}],attrs:{"field-names":"introduce",placeholder:"请输入信用卡简介",help:"请用一句话描述信用卡的优势"}})],1),r("a-form-item",{attrs:{label:"信用卡权益"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["credit_card_equities",{initialValue:e.detail.credit_card_equities,rules:[{required:!0,message:"请输入信用卡权益!"}]}],expression:"['credit_card_equities', { initialValue: detail.credit_card_equities,rules: [{ required: true, message: '请输入信用卡权益!' }] }]"}],attrs:{placeholder:"请输入信用卡权益"}})],1),r("a-form-item",{attrs:{label:"联系电话"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{initialValue:e.detail.phone,rules:[{required:!0,message:"请输入联系电话!"}]}],expression:"['phone', { initialValue: detail.phone,rules: [{ required: true, message: '请输入联系电话!' }] }]"}],attrs:{"field-names":"phone",placeholder:"请输入联系电话"}})],1),r("a-form-item",{attrs:{label:"发布人"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["release_people",{initialValue:e.detail.release_people,rules:[{required:!0,message:"请输入发布人!"}]}],expression:"['release_people', { initialValue: detail.release_people,rules: [{ required: true, message: '请输入发布人!' }] }]"}],attrs:{"field-names":"release_people",placeholder:"请输入发布人"}})],1),e.detail.banking_id?r("a-form-item",{attrs:{label:"修改人"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["edit_people",{initialValue:e.detail.edit_people,rules:[{required:!0,message:"请输入修改人!"}]}],expression:"['edit_people', { initialValue: detail.edit_people,rules: [{ required: true, message: '请输入修改人!' }] }]"}],attrs:{"field-names":"edit_people",placeholder:"请输入修改人"}})],1):e._e(),r("a-form-item",{attrs:{label:"上传产品图片",help:"建议536*336px"}},[r("a-upload",{attrs:{name:"reply_pic","file-list":e.fileListCover,action:e.uploadImg,headers:e.headers,"list-type":"picture-card"},on:{preview:e.handlePreviewCover,change:function(t){return e.upLoadChangeCover(t)}}},[e.fileListCover.length<1?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),r("a-modal",{attrs:{visible:e.previewVisibleCover,footer:null},on:{cancel:e.handleCancelCover}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImageCover}})])],1),r("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" 提交 ")])],1)],1)],1)],1)},i=[],a=r("2909"),o=r("c7eb"),l=r("1da1"),s=(r("fb6a"),r("d81d"),r("b0c0"),r("b706")),u=r("7b3f"),c={components:{},data:function(){return{type:"credit_card",headers:{authorization:"authorization-text"},uploadImg:"/v20/public/index.php"+u["a"].uploadImg+"?upload_dir=/banking/credit_card",baseData:{banking_id:0,type:"credit_card",title:"",introduce:"",images:"",cover_image:"",phone:"",release_people:"",credit_card_equities:""},title:"新建信用卡",detail:{},fileList:[],fileListCover:[],previewVisible:!1,previewVisibleCover:!1,previewImage:null,previewImageCover:null,form:this.$form.createForm(this,{name:"coordinated"})}},mounted:function(){console.log("mounted"),this.resetForm(),this.$route.query.banking_id&&(this.detail.banking_id=this.$route.query.banking_id,this.getBankingDetail())},watch:{$route:function(e,t){var r=e.query;r.banking_id?(this.detail.banking_id=r.banking_id,this.getBankingDetail()):this.resetForm()}},methods:{resetForm:function(){this.title="新建信用卡",this.form.resetFields(),this.detail=this.baseData},getBankingDetail:function(){var e=this;this.title="编辑信用卡",this.request(s["a"].getBankingDetail,{banking_id:this.detail.banking_id}).then((function(t){e.detail=t,e.fileListCover[0]={uid:1,name:"image.png",status:"done",url:t.cover_image,data:t.cover_image}}))},handlePreviewCover:function(e){var t=this;return Object(l["a"])(Object(o["a"])().mark((function r(){return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,getBase64(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImageCover=e.url||e.preview,t.previewVisibleCover=!0;case 6:case"end":return r.stop()}}),r)})))()},upLoadChangeCover:function(e){var t=this,r=Object(a["a"])(e.fileList);r=r.slice(-1),r=r.map((function(r){return r.response&&(r.url=r.response.data.full_url,t.detail.cover_image=e.file.response.data.image),r})),this.fileListCover=r,"done"===e.file.status||"error"===e.file.status&&this.$message.error("".concat(e.file.name," 上传失败."))},handleCancelCover:function(){this.previewVisibleCover=!1},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){if(!e){if(console.log(r,"values"),console.log(t.detail,"detail"),r.banking_id=t.detail.banking_id,r.cover_image=t.detail.cover_image,r.images=t.detail.cover_image,r.type=t.detail.type,!t.detail.cover_image)return t.$message.error("请上传产品图片！"),!1;t.request(s["a"].saveBanking,r).then((function(e){t.resetForm(),t.$message.success(t.L("操作成功！")),localStorage.setItem("refresh",1),t.$router.push({path:"/banking/platform.banking/BankingList"})}))}}))}}},d=c,f=r("0c7c"),p=Object(f["a"])(d,n,i,!1,null,null,null);t["default"]=p.exports},"7b3f":function(e,t,r){"use strict";var n={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=n},b706:function(e,t,r){"use strict";var n={getBankingList:"/banking/platform.Banking/getList",getBankingDetail:"/banking/platform.Banking/getDetail",saveBanking:"/banking/platform.Banking/saveBanking",getBankingLogList:"/banking/platform.Banking/getLogList",delBanking:"/banking/platform.Banking/delBanking",getApplyList:"/banking/platform.BankingApply/getList",changeStatus:"/banking/platform.BankingApply/changeStatus",exportUrl:"/banking/platform.BankingApply/export",getVillageList:"/banking/platform.BankingApply/getVillageList",getBankingConfigList:"/banking/platform.Banking/getConfigDataList",editSeting:"/banking/platform.Banking/editSeting",getInformationList:"/banking/platform.Banking/getInformationList",delInformation:"/banking/platform.Banking/delInformation",getInformationData:"/banking/platform.Banking/getInformationData",editOrAddInformation:"/banking/platform.Banking/editOrAddInformation"};t["a"]=n},c7eb:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var n=r("53ca");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),l=new V(n||[]);return o(a,"_invoke",{value:E(e,r,l)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var h="suspendedStart",g="suspendedYield",m="executing",v="completed",b={};function y(){}function w(){}function k(){}var _={};d(_,s,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(S([])));x&&x!==r&&a.call(x,s)&&(_=x);var B=k.prototype=y.prototype=Object.create(_);function C(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(i,o,l,s){var u=p(e[i],e,o);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==Object(n["a"])(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):t.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return r("throw",e,l,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}})}function E(t,r,n){var i=h;return function(a,o){if(i===m)throw new Error("Generator is already running");if(i===v){if("throw"===a)throw o;return{value:e,done:!0}}for(n.method=a,n.arg=o;;){var l=n.delegate;if(l){var s=j(l,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=m;var u=p(t,r,n);if("normal"===u.type){if(i=n.done?v:g,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=v,n.method="throw",n.arg=u.arg)}}}function j(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=p(i,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function V(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function S(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(a.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(Object(n["a"])(t)+" is not iterable")}return w.prototype=k,o(B,"constructor",{value:k,configurable:!0}),o(k,"constructor",{value:w,configurable:!0}),w.displayName=d(k,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,d(e,c,"GeneratorFunction")),e.prototype=Object.create(B),e},t.awrap=function(e){return{__await:e}},C(O.prototype),d(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new O(f(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(B),d(B,c,"Generator"),d(B,s,(function(){return this})),d(B,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,V.prototype={constructor:V,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,i){return l.type="throw",l.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),q(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;q(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}}}]);