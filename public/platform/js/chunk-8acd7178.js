(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8acd7178","chunk-112c6452","chunk-112c6452","chunk-2d0b3786"],{"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("d3b7");function a(t,e,i,a,r,n,s){try{var o=t[n](s),l=o.value}catch(c){return void i(c)}o.done?e(l):Promise.resolve(l).then(a,r)}function r(t){return function(){var e=this,i=arguments;return new Promise((function(r,n){var s=t.apply(e,i);function o(t){a(s,r,n,o,l,"next",t)}function l(t){a(s,r,n,o,l,"throw",t)}o(void 0)}))}}},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var a=i("6b75");function r(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return r(t)||n(t)||Object(s["a"])(t)||o()}},"804f":function(t,e,i){},"9c5a":function(t,e,i){"use strict";i("804f")},c7eb:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("b636"),i("944a"),i("0c47"),i("23dc"),i("3410"),i("159b"),i("b0c0"),i("131a"),i("fb6a");var a=i("53ca");function r(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
r=function(){return e};var t,e={},i=Object.prototype,n=i.hasOwnProperty,s=Object.defineProperty||function(t,e,i){t[e]=i.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function u(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,i){return t[e]=i}}function h(t,e,i,a){var r=e&&e.prototype instanceof _?e:_,n=Object.create(r.prototype),o=new T(a||[]);return s(n,"_invoke",{value:O(t,i,o)}),n}function p(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",m="suspendedYield",g="executing",v="completed",y={};function _(){}function b(){}function w(){}var x={};u(x,l,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(P([])));S&&S!==i&&n.call(S,l)&&(x=S);var C=w.prototype=_.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function V(t,e){function i(r,s,o,l){var c=p(t[r],t,s);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==Object(a["a"])(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,o,l)}),(function(t){i("throw",t,o,l)})):e.resolve(u).then((function(t){d.value=t,o(d)}),(function(t){return i("throw",t,o,l)}))}l(c.arg)}var r;s(this,"_invoke",{value:function(t,a){function n(){return new e((function(e,r){i(t,a,e,r)}))}return r=r?r.then(n,n):n()}})}function O(e,i,a){var r=f;return function(n,s){if(r===g)throw new Error("Generator is already running");if(r===v){if("throw"===n)throw s;return{value:t,done:!0}}for(a.method=n,a.arg=s;;){var o=a.delegate;if(o){var l=E(o,a);if(l){if(l===y)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===f)throw r=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=g;var c=p(e,i,a);if("normal"===c.type){if(r=a.done?v:m,c.arg===y)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=v,a.method="throw",a.arg=c.arg)}}}function E(e,i){var a=i.method,r=e.iterator[a];if(r===t)return i.delegate=null,"throw"===a&&e.iterator["return"]&&(i.method="return",i.arg=t,E(e,i),"throw"===i.method)||"return"!==a&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+a+"' method")),y;var n=p(r,e.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,y;var s=n.arg;return s?s.done?(i[e.resultName]=s.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=t),i.delegate=null,y):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var i=e[l];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function i(){for(;++r<e.length;)if(n.call(e,r))return i.value=e[r],i.done=!1,i;return i.value=t,i.done=!0,i};return s.next=s}}throw new TypeError(Object(a["a"])(e)+" is not iterable")}return b.prototype=w,s(C,"constructor",{value:w,configurable:!0}),s(w,"constructor",{value:b,configurable:!0}),b.displayName=u(w,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,d,"GeneratorFunction")),t.prototype=Object.create(C),t},e.awrap=function(t){return{__await:t}},k(V.prototype),u(V.prototype,c,(function(){return this})),e.AsyncIterator=V,e.async=function(t,i,a,r,n){void 0===n&&(n=Promise);var s=new V(h(t,i,a,r),n);return e.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},k(C),u(C,d,"Generator"),u(C,l,(function(){return this})),u(C,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),i=[];for(var a in e)i.push(a);return i.reverse(),function t(){for(;i.length;){var a=i.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function a(a,r){return o.type="throw",o.arg=e,i.next=a,r&&(i.method="next",i.arg=t),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var l=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,y):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),D(i),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var r=a.arg;D(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,i,a){return this.delegate={iterator:P(e),resultName:i,nextLoc:a},"next"===this.method&&(this.arg=t),y}},e}},e2b1:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[i("a-form",{attrs:{form:t.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:t.handleSubmit}},[i("a-form-item",{attrs:{label:"标题"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入标题!"}]}],expression:"[\n                    'title',\n                    { initialValue: detail.title, rules: [{ required: true, message: '请输入标题!' }] },\n                ]"}],attrs:{"field-names":"title",disabled:t.disabled,placeholder:"请输入标题"}})],1),i("a-row",{staticStyle:{"margin-bottom":"20px"}},[i("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:5}},[i("span",[i("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"35px"}},[t._v("*")]),t._v("封面图:")])]),i("a-col",{attrs:{span:15}},[i("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",name:"reply_pic",data:t.updateDataCover,"list-type":"picture-card","file-list":t.fileListCover,disabled:t.disabled},on:{preview:t.handlePreviewCover,change:function(e){return t.upLoadChangeCover(e)}}},[0==t.fileListCover.length?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1):t._e()]),i("div",{staticClass:"ant-form-explain"},[t._v("推荐尺寸: 1 : 1")]),i("a-modal",{attrs:{visible:t.previewVisibleCover,footer:null},on:{cancel:t.handleCancelCover}},[t.previewImageCover?i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImageCover}}):t._e()])],1)],1),i("a-row",{staticStyle:{"margin-bottom":"20px"}},[i("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:5}},[i("span",[i("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"35px"}},[t._v("*")]),t._v("图片:")])]),i("a-col",{attrs:{span:15}},[i("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",name:"reply_pic",disabled:t.disabled,data:t.updateData,"list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:function(e){return t.upLoadChange(e)}}},[t.fileList.length<5?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1):t._e()]),i("div",{staticClass:"ant-form-explain"},[t._v("推荐尺寸: 750px * 490px")]),i("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[t.previewImage?i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}}):t._e()])],1)],1),i("a-row",{staticStyle:{"margin-bottom":"20px"}},[i("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:5}},[i("span",[i("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"30px"}},[t._v("*")]),t._v("分类:")])]),i("a-col",{attrs:{span:12}},[i("a-select",{staticStyle:{width:"200px"},attrs:{disabled:t.disabled,value:t.detail.cat_id},on:{change:t.categorySelectChange}},t._l(t.categoryList,(function(e){return i("a-select-option",{key:e.cat_id},[t._v(" "+t._s(e.cat_name)+" ")])})),1)],1)],1),i("a-row",{staticStyle:{"margin-bottom":"20px"}},[i("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:5}},[i("span",[i("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"30px"}},[t._v("*")]),t._v("地址:")])]),i("a-col",{attrs:{span:12}},[i("a-select",{staticStyle:{width:"32%"},attrs:{"field-names":"province_id",value:t.detail.province_id,disabled:t.disabled},on:{change:t.changeProvince}},t._l(t.provinceData,(function(e){return i("a-select-option",{key:e.area_id,attrs:{"allow-clear":!0}},[t._v(" "+t._s(e.area_name)+" ")])})),1),i("a-select",{staticStyle:{width:"32%","margin-left":"2%"},attrs:{"field-names":"city_id",value:t.detail.city_id,disabled:t.disabled},on:{change:t.changeCity}},t._l(t.cityData,(function(e){return i("a-select-option",{key:e.area_id,attrs:{"allow-clear":!0}},[t._v(" "+t._s(e.area_name)+" ")])})),1),i("a-select",{staticStyle:{width:"32%","margin-left":"2%"},attrs:{value:t.detail.area_id,disabled:t.disabled},on:{change:t.changeArea}},t._l(t.areaData,(function(e){return i("a-select-option",{key:e.area_id,attrs:{"allowc-lear":!0}},[t._v(" "+t._s(e.area_name)+" ")])})),1)],1)],1),i("a-form-item",{attrs:{label:"详细地址"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{initialValue:t.detail.address,rules:[{required:!0,message:"请输入详细地址!"}]}],expression:"[\n                    'address',\n                    { initialValue: detail.address, rules: [{ required: true, message: '请输入详细地址!' }] },\n                ]"}],attrs:{"field-names":"address",placeholder:"请输入详细地址",disabled:t.disabled}})],1),i("a-row",{staticStyle:{"margin-bottom":"20px"}},[i("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:5}},[i("span",[i("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"30px"}},[t._v("*")]),t._v("经纬度:")])]),i("a-col",{attrs:{span:15}},[i("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.disabled,value:t.detail.longlat,placeholder:"请选择位置"}}),t.disabled?t._e():i("a",{staticStyle:{"margin-left":"5px"},on:{click:function(e){return t.$refs.mapPointModel.selectPoint(t.detail.longlat)}}},[t._v("地图选点")])],1)],1),i("a-form-item",{attrs:{label:"联系电话"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{initialValue:t.detail.phone,rules:[{required:!0,message:"请输入联系电话!"}]}],expression:"[\n                    'phone',\n                    { initialValue: detail.phone, rules: [{ required: true, message: '请输入联系电话!' }] },\n                ]"}],staticStyle:{width:"200px"},attrs:{"field-names":"phone",disabled:t.disabled,placeholder:"请输入联系电话"}})],1),i("a-form-item",{attrs:{label:"大约金额",help:"填写0时,用户端显示免费"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["money",{initialValue:t.detail.money,rules:[{required:!0,message:"请输入大约金额!"}]}],expression:"[\n                    'money',\n                    { initialValue: detail.money, rules: [{ required: true, message: '请输入大约金额!' }] },\n                ]"}],staticStyle:{width:"200px"},attrs:{"field-names":"money",disabled:t.disabled,placeholder:"请输入大约金额"}})],1),i("a-row",{staticStyle:{"margin-bottom":"20px"}},[i("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:5}},[i("span",[i("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif","line-height":"25px"}}),t._v(" 标签:")])]),i("a-col",{attrs:{span:15}},[t._l(t.label.tags,(function(e){return[i("a-tooltip",{key:e,attrs:{title:e}},[i("a-tag",{key:e,attrs:{closable:!t.disabled},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e)+" ")])],1)]})),t.label.inputVisible?i("a-input",{ref:"input",style:{width:"78px"},attrs:{disabled:t.disabled,type:"text",size:"small",value:t.label.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}}}):t._e(),t.disabled?t._e():i("a-tag",{staticStyle:{background:"#fff",borderstyle:"dashed"},on:{click:t.showAddTagInput}},[i("a-icon",{attrs:{type:"plus"}}),t._v("添加标签 ")],1)],2)],1),i("a-form-item",{attrs:{label:"营业时间"}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["time_txt",{initialValue:t.detail.time_txt,rules:[{required:!0,message:"请输入营业时间"}]}],expression:"[\n                    'time_txt',\n                    { initialValue: detail.time_txt, rules: [{ required: true, message: '请输入营业时间' }] },\n                ]"}],attrs:{disabled:t.disabled,"field-names":"time_txt",placeholder:"请输入营业时间","auto-size":{minRows:3,maxRows:6}}})],1),i("a-form-item",{attrs:{label:"是否暂停",help:"开启暂停的时候，不可以买票"}},[i("a-switch",{attrs:{disabled:t.disabled,"checked-children":"是","un-checked-children":"否",checked:1==t.detail.is_close},on:{change:t.isClose}})],1),1==t.detail.is_close?i("a-form-item",{attrs:{label:"自定义文案"}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_close_body",{initialValue:t.detail.is_close_body,rules:[{required:!0,message:"请输入文案"}]}],expression:"[\n                    'is_close_body',\n                    { initialValue: detail.is_close_body, rules: [{ required: true, message: '请输入文案' }] },\n                ]"}],attrs:{disabled:t.disabled,"field-names":"is_close_body",placeholder:"请输入文案","auto-size":{minRows:3,maxRows:6}}})],1):t._e(),i("a-form-item",{attrs:{label:"是否启用",help:"关闭后客户端不显示"}},[i("a-switch",{attrs:{disabled:t.disabled,"checked-children":"是","un-checked-children":"否",checked:1==t.detail.status},on:{change:t.isStatus}})],1),i("a-row",{staticStyle:{"margin-bottom":"20px"}},[i("a-col",{staticStyle:{color:"#000000","text-align":"right","padding-right":"8px"},attrs:{span:5}},[i("span",[i("span",{staticStyle:{color:"#f5222d","margin-right":"4px","font-size":"14px","font-family":"SimSun, sans-serif"}},[t._v("*")]),t._v("详细描述:")])]),i("a-col",{staticStyle:{position:"relative"},attrs:{span:15}},[i("rich-text",{attrs:{info:t.detail.description,disabled:t.disabled},on:{"update:info":function(e){return t.$set(t.detail,"description",e)}}})],1)],1),t.disabled?t._e():i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 提交 ")])],1),t.disabled?i("a-form-item",{attrs:{label:"审核："}},[i("a-radio-group",{model:{value:t.auditValue,callback:function(e){t.auditValue=e},expression:"auditValue"}},[i("a-radio",{attrs:{value:"1"}},[t._v(" 成功 ")]),i("a-radio",{attrs:{value:"2"}},[t._v(" 失败 ")])],1)],1):t._e(),t.disabled?i("a-form-item",{attrs:{label:"备注："}},[i("a-textarea",{attrs:{placeholder:"请输入备注","allow-clear":""},model:{value:t.audit_msg,callback:function(e){t.audit_msg=e},expression:"audit_msg"}})],1):t._e(),t.disabled?i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[i("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" 提交审核 ")])],1):t._e()],1),i("map-point",{ref:"mapPointModel",on:{loadRefresh:t.setLongLat}})],1)},r=[],n=i("c7eb"),s=i("1da1"),o=i("2909"),l=(i("a4d3"),i("e01a"),i("b0c0"),i("4e82"),i("4de4"),i("d3b7"),i("99af"),i("d81d"),i("fb6a"),i("4d95")),c=i("70e4"),d=i("c1df"),u=i.n(d),h=i("884f"),p={components:{mapPoint:c["default"],RichText:h["a"]},data:function(){return{disabled:!1,auditValue:0,audit_msg:"",title:"添加景区",sort_id:0,queryParam:{sort_id:0,name:"",describe:"",sort:0},categoryList:[],detail:{tools_id:0,type:"scenic",cat_id:"",title:"",introduce:"",time_txt:"",images:"",cover_image:"",phone:"",address:"",longlat:"",province_id:"",city_id:"",area_id:"",money:"",description:"",is_appoint:0,status:0,start_time:"09:00:00",end_time:"18:00:00",label:[],tickets_description:"",coach:"",is_close:0,is_close_body:""},type_select:[{key:"stadium",value:"场馆"},{key:"course",value:"课程"},{key:"scenic",value:"景区"}],provinceData:[],cityData:[],areaData:[],startTime:null,endTime:null,label:{tags:[],inputVisible:!1,inputValue:""},updateData:{upload_dir:"merchant/life_tools/tools"},updateDataCover:{upload_dir:"merchant/life_tools/tools"},fileList:[],fileListCover:[],previewVisible:!1,previewVisibleCover:!1,previewImage:null,previewImageCover:null,ueConfig:{enableAutoSave:!1,autoSyncData:!1,autoHeightEnabled:!1,initialFrameHeight:350,initialFrameWidth:"100%",serverUrl:"/v20/public/static/UEditor/php/controller.php",UEDITOR_HOME_URL:"/v20/public/static/UEditor/"},form:this.$form.createForm(this,{name:"coordinated"})}},mounted:function(){this.resetForm(),this.$route.query.tools_id?(this.title="编辑景区",this.detail.tools_id=this.$route.query.tools_id,this.getLifeToolsDetail()):(this.title="添加景区",this.getProvinceData()),this.$route.query.disabled?this.disabled=!0:this.disabled=!1},beforeRouteLeave:function(t,e,i){this.$destroy(),i()},watch:{$route:{handler:function(t,e){var i=t?t.path:"";e&&e.path;if("/merchant/merchant.life_tools/ScenicEdit"==i){var a=t.query;a.tools_id?(this.resetForm(),this.detail.tools_id=a.tools_id,this.title="编辑景区",this.getLifeToolsDetail()):(this.resetForm(),this.title="添加景区",this.getProvinceData())}},immediate:!0}},methods:{resetForm:function(){this.form.resetFields(),this.detail.tools_id=0,this.detail.type="scenic",this.detail.cat_id="",this.detail.title="",this.detail.introduce="",this.detail.time_txt="",this.detail.images="",this.detail.cover_image="",this.detail.phone="",this.detail.address="",this.detail.longlat="",this.detail.province_id="",this.detail.city_id="",this.detail.area_id="",this.detail.money="",this.detail.description="",this.detail.tickets_description="",this.detail.is_appoint=0,this.detail.status=0,this.detail.start_time="",this.detail.end_time="",this.detail.label=[],this.label.tags=[],this.fileList=[],this.fileListCover=[],this.startTime=u()("09:00:00","HH:mm:ss"),this.endTime=u()("18:00:00","HH:mm:ss"),this.detail.is_close=0,this.detail.is_close_body="",this.getCategoryList()},getLifeToolsDetail:function(){var t=this;this.request(l["a"].getLifeToolsDetail,{tools_id:this.detail.tools_id}).then((function(e){t.detail.type=e.type,t.detail.cat_id=e.cat_id,t.detail.title=e.title,t.detail.introduce=e.introduce,t.detail.time_txt=e.time_txt,t.detail.phone=e.phone,t.detail.address=e.address,t.detail.longlat=e.longlat,t.detail.money=e.money,t.detail.is_appoint=e.is_appoint,t.detail.status=e.status,t.getAddressList(0,1,!0),t.getAddressList(e.province_id,2,!0),t.getAddressList(e.city_id,3,!0),t.detail.province_id=e.province_id,t.detail.city_id=e.city_id,t.detail.area_id=e.area_id,t.longlat=e.longlat;var i=[];if(e.images_arr.length>0)for(var a in e.images_arr)i.push({uid:a+1,name:"image.png",status:"done",url:e.images_arr[a].url,data:e.images_arr[a].data});t.fileList=i,t.fileListCover[0]={uid:1,name:"image.png",status:"done",url:e.cover_image,data:e.cover_image},t.detail.images=e.images,t.detail.cover_image=e.cover_image,t.detail.start_time=e.start_time,t.detail.end_time=e.end_time,t.startTime=u()(e.start_time,"HH:mm:ss"),t.endTime=u()(e.end_time,"HH:mm:ss"),t.detail.label=e.label,t.label.tags=e.label_arr,t.detail.description=e.description,t.detail.tickets_description=e.tickets_description,t.detail.is_close=e.is_close,t.detail.is_close_body=e.is_close_body,t.detail.coach=e.course.coach,t.getCategoryList()}))},getAddressList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.request(l["a"].getAddressList,{pid:e,type:i}).then((function(e){switch(i){case 1:t.provinceData=e,a||(t.detail.province_id=e[0].area_id?e[0].area_id:0,t.getCityData());break;case 2:t.cityData=e,a||(t.detail.city_id=e[0].area_id?e[0].area_id:0,t.getAreaData());break;case 3:t.areaData=e,a||(t.detail.area_id=e[0].area_id?e[0].area_id:0);break}}))},getCategoryList:function(){var t=this;this.request(l["a"].getCategoryList,{type:this.detail.type}).then((function(e){t.categoryList=e}))},getData:function(){this.form.resetFields(),this.detail={name:res.name,describe:res.describe,sort:res.sort}},typeSelectChange:function(t){this.detail.cat_id="",this.detail.type=t,this.getCategoryList()},categorySelectChange:function(t){this.detail.cat_id=t},getProvinceData:function(){this.getAddressList(0,1)},getCityData:function(){var t=this.detail.province_id;this.getAddressList(t,2)},getAreaData:function(){var t=this.detail.city_id;this.getAddressList(t,3)},changeProvince:function(t){this.detail.province_id=t,this.getCityData()},changeCity:function(t){this.detail.city_id=t,this.getAreaData()},changeArea:function(t){this.detail.area_id=t},startTimeChange:function(t,e){this.startTime=t,this.detail.start_time=e},endTimeChange:function(t,e){this.endTime=t,this.detail.end_time=e},handleClose:function(t){var e=this.label.tags.filter((function(e){return e!==t}));this.label.tags=e},handleInputChange:function(t){this.label.inputValue=t.target.value},handleInputConfirm:function(){var t=this.label.inputValue,e=this.label.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(o["a"])(e),[t])),this.label.tags=e,this.label.inputVisible=!1,this.label.inputValue=""},showAddTagInput:function(){this.label.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handlePreview:function(t){var e=this;return Object(s["a"])(Object(n["a"])().mark((function i(){return Object(n["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,getBase64(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},handlePreviewCover:function(t){var e=this;return Object(s["a"])(Object(n["a"])().mark((function i(){return Object(n["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,getBase64(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImageCover=t.url||t.preview,e.previewVisibleCover=!0;case 6:case"end":return i.stop()}}),i)})))()},upLoadChange:function(t){var e=this,i=Object(o["a"])(t.fileList);i.length?(this.detail.images="",i=i.map((function(t){return t.response?e.detail.images+=t.response.data+",":t.data&&(e.detail.images+=t.data+","),t})),this.fileList=i):this.fileList=[]},upLoadChangeCover:function(t){var e=this,i=Object(o["a"])(t.fileList);i.length?(i=i.slice(-1),i=i.map((function(t){return t.response&&(e.detail.cover_image=t.response.data),t})),this.fileListCover=i):(this.fileListCover=[],this.detail.cover_image="")},handleCancel:function(){this.previewVisible=!1},handleCancelCover:function(){this.previewVisibleCover=!1},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,i){if(!t){if(e.detail.title=i.title,e.detail.time_txt=i.time_txt,e.detail.address=i.address,e.detail.money=i.money,e.detail.phone=i.phone,e.detail.label=e.label.tags,e.detail.is_close_body=i.is_close_body,!e.detail.cover_image)return e.$message.error("请上传封面图！"),!1;if(!e.detail.images)return e.$message.error("请上传图片！"),!1;if(!e.detail.cat_id)return e.$message.error("请输入选择分类！"),!1;if(!e.detail.description)return e.$message.error("请输入详细描述！"),!1;if(!e.detail.longlat)return e.$message.error("请选择经纬度！"),!1;e.request(l["a"].addEditLifeTools,e.detail).then((function(t){e.resetForm(),e.$message.success(e.L("操作成功！")),e.$router.push({path:"/merchant/merchant.life_tools/ScenicList"})}))}}))},infoWindowClose:function(){this.show=!1},infoWindowOpen:function(){this.show=!0},setLongLat:function(t){this.detail.longlat=t},isAppointChange:function(t){this.detail.is_appoint=t?1:0},isStatus:function(t){console.log(t),this.detail.status=t?1:0},isClose:function(t){this.detail.is_close=t?1:0},onSubmit:function(){var t=this;if(!this.auditValue)return this.$message.warning("请选择审核成功或失败"),!1;if(2==this.auditValue&&!this.audit_msg)return this.$message.error("请填写审核失败备注"),!1;var e=[this.detail.tools_id];this.request(l["a"].lifeToolsAudit,{tools_ids:e,audit_status:this.auditValue,audit_msg:this.audit_msg}).then((function(e){var i=t;t.$message.success({duration:2,content:"审核成功",onClose:function(){i.$router.push({path:"/life_tools/platform.scenic/audit/type=scenic"})}})}))}}},f=p,m=(i("9c5a"),i("0c7c")),g=Object(m["a"])(f,a,r,!1,null,null,null);e["default"]=g.exports}}]);