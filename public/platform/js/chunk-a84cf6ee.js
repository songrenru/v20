(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a84cf6ee","chunk-112c6452","chunk-112c6452"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function r(t,e,a,r,n,o,i){try{var s=t[o](i),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,o){var i=t.apply(e,a);function s(t){r(i,n,o,s,l,"next",t)}function l(t){r(i,n,o,s,l,"throw",t)}s(void 0)}))}}},"1f38":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"推送内容查看"}},[a("a-form",t._b({},"a-form",{labelCol:{span:2},wrapperCol:{span:5}},!1),[a("a-row",[a("a-col",{staticClass:"label-font-size text-center",attrs:{span:2}},[a("a-button",{attrs:{type:"default"},on:{click:function(e){return t.returnBack()}}},[a("a-icon",{attrs:{type:"left"}})],1)],1)],1),a("br"),a("a-row",[a("a-col",{staticClass:"label-font-size text-right",attrs:{span:2}},[t._v(" 基本信息 ")])],1),a("br"),a("a-form-item",{attrs:{label:"所属分类"}},[a("a-select",{attrs:{disabled:""},model:{value:t.formData.category_type,callback:function(e){t.$set(t.formData,"category_type",e)},expression:"formData.category_type"}},[t._l(t.cat_sel,(function(e,r){return a("a-select-option",{key:r,attrs:{value:e.cat_id}},[t._v(" "+t._s(e.cat_name)+" ")])})),a("a-select-option",{attrs:{value:t.mall}},[t._v(" 商城 ")]),a("a-select-option",{attrs:{value:t.maidan}},[t._v(" 买单 ")]),a("a-select-option",{attrs:{value:t.group}},[t._v(" 团购 ")]),a("a-select-option",{attrs:{value:t.foodshop}},[t._v(" 外卖 ")])],2)],1),a("a-form-item",{attrs:{label:"渠道展示","wrapper-col":{span:10},disabled:"true"}},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 仅手机系统推送 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 仅消息中心推送 ")])],1)],1)],1)],1),a("a-form-item",{attrs:{label:"推送人群",disabled:"true"}},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.users,callback:function(e){t.$set(t.formData,"users",e)},expression:"formData.users"}},[a("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 指定人群 ")])],1)],1)],1),t.formData.users?[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-col",{attrs:{span:3}},[a("a-checkbox",{attrs:{checked:t.formData.user.area_sel,disabled:""},on:{change:t.onChange}})],1),a("a-col",{attrs:{span:5}},[t._v("地区:")]),a("a-col",{attrs:{span:16}},[a("a-cascader",{attrs:{options:t.options,placeholder:"选择",value:t.formData.user.sel_areas,disabled:""},on:{change:t.onChangeArea}})],1)],1)],1),a("a-row",[a("a-col",{attrs:{span:24}},[a("a-col",{attrs:{span:3}},[a("a-checkbox",{attrs:{checked:t.formData.user.level_sel,disabled:""},on:{change:t.onChange1}})],1),a("a-col",{attrs:{span:5}},[t._v("用户等级:")]),a("a-col",{attrs:{span:16}},[a("a-select",{attrs:{disabled:""},model:{value:t.formData.user.level,callback:function(e){t.$set(t.formData.user,"level",e)},expression:"formData.user.level"}},t._l(t.level_sel,(function(e,r){return a("a-select-option",{key:r,attrs:{value:e.id}},[t._v(" "+t._s(e.lname)+" ")])})),1)],1)],1)],1),a("a-row",[a("a-col",{attrs:{span:24}},[a("a-col",{attrs:{span:3}},[a("a-checkbox",{attrs:{checked:t.formData.user.label_sel,disabled:""},on:{change:t.onChange2}})],1),a("a-col",{attrs:{span:5}},[t._v("用户标签:")]),a("a-col",{attrs:{span:16}},[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择店铺分类",value:t.formData.user.label,disabled:""},on:{change:t.handleChange}},t._l(t.label_sel,(function(e){return a("a-select-option",{key:e,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1)],1)]:t._e()],2),a("a-form-item",{attrs:{label:"推送端口","wrapper-col":{span:17}}},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.send_port,callback:function(e){t.$set(t.formData,"send_port",e)},expression:"formData.send_port"}},[a("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 小程序 ")]),a("a-radio",{attrs:{value:2}},[t._v(" App ")])],1)],1)],1)],1),a("a-form-item",{attrs:{label:"定时推送","wrapper-col":{span:16}}},[a("a-row",[a("a-col",{staticClass:"text-center",attrs:{span:1}},[a("a-checkbox",{attrs:{checked:t.is_set_send_time,disabled:""},on:{change:t.onChange3},model:{value:t.is_set_send_time,callback:function(e){t.is_set_send_time=e},expression:"is_set_send_time"}})],1),a("a-col",{staticClass:"text-left",attrs:{span:2}},[t._v(" 选择推送时间 ")]),t.is_set_send_time?[a("a-col",{attrs:{span:4}},[a("a-date-picker",{attrs:{format:"YYYY-MM-DD","disabled-date":t.disabledStartDate,placeholder:"请选择日期","default-value":t.moment(t.formData.set_send_time_date,"YYYY-MM-DD"),getCalendarContainer:function(t){return t.parentNode},disabled:""},on:{change:t.onDateStartChange}})],1),a("a-col",{attrs:{span:4}},[a("a-time-picker",{attrs:{format:"HH:mm","default-value":t.moment(t.formData.set_send_time_min,"HH:mm"),placeholder:"选择时间",disabled:""},on:{change:t.onChangeTime}})],1)]:t._e(),a("a-col",{staticClass:"font-color",attrs:{span:24}},[t._v("勾选后可设置预约推送时间;否则点击发布按钮立即发布成功")])],2)],1),a("a-row",[a("a-col",{staticClass:"label-font-size text-right",attrs:{span:2}},[t._v(" 内容信息 ")])],1),a("br"),a("a-form-item",{attrs:{label:"主标题:","wrapper-col":{span:7}}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{placeholder:"请输入消息标题",disabled:""},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("a-col",{staticClass:"text-left font-color",attrs:{span:4}},[t._v(" 1-15个字符 ")])],1)],1),a("a-form-item",{attrs:{label:"描述","wrapper-col":{span:7},disabled:"true"}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{placeholder:"请输入消息描述",disabled:""},model:{value:t.formData.desc,callback:function(e){t.$set(t.formData,"desc",e)},expression:"formData.desc"}})],1),a("a-col",{staticClass:"text-left font-color",attrs:{span:4}},[t._v(" 1-50个字符 ")])],1)],1),t.formData.img?a("a-form-item",{attrs:{label:"标题图片"}},[a("a-row",[a("a-input",{attrs:{hidden:""},model:{value:t.formData.img,callback:function(e){t.$set(t.formData,"img",e)},expression:"formData.img"}}),[a("div",{staticClass:"clearfix"},[a("a-upload",{attrs:{disabled:"","list-type":"picture-card","file-list":t.fileList1},on:{preview:t.handlePreview1}}),a("a-modal",{attrs:{visible:t.previewVisible1,footer:null},on:{cancel:t.handleCancel1}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]],2)],1):t._e(),a("a-form-item",{attrs:{label:"信息链接类型:",disabled:"true"}},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.content_type,callback:function(e){t.$set(t.formData,"content_type",e)},expression:"formData.content_type"}},[a("a-radio",{attrs:{value:0}},[t._v(" 富文本 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 自定义链接 ")])],1)],1)],1)],1),t.formData.content_type?[a("a-form-item",{attrs:{label:"自定义链接","wrapper-col":{span:8}}},[a("a-row",[a("a-col",{attrs:{span:10}},[a("div",{staticClass:"flex"},[a("a-input",{staticStyle:{"max-height":"100px","overflow-y":"auto",resize:"none"},attrs:{placeholder:t.L("功能库选择"),autoSize:"",disabled:""},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1)]),a("a-col",{attrs:{span:5}})],1)],1)]:[a("a-form-item",{attrs:{label:"富文本","wrapper-col":{span:20}}},[a("a-row",[a("a-col",{attrs:{span:13}},[a("div",{staticClass:"flex"},[a("rich-text",{attrs:{info:t.formData.content,disabled:""},on:{"update:info":function(e){return t.$set(t.formData,"content",e)}}})],1)])],1)],1)]],2)],1)],1)],1)],1)},n=[],o=a("c7eb"),i=a("1da1"),s=(a("d3b7"),a("a9e3"),a("b0c0"),a("a434"),a("290c")),l=a("da05"),c=a("de0b"),u=a("c1df"),f=a.n(u),d=a("2d3d"),p=a("6ec16");function h(t){return new Promise((function(e,a){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return a(t)}}))}var m={name:"MailEdit",components:{TemplateEdit:d["default"],ACol:l["b"],ARow:s["a"],RichText:p["a"]},props:{mail_id:{type:[String,Number],default:"0"},upload_dir:{type:String,default:""}},data:function(){return{mall:"1-2",maidan:"1-3",group:"1-4",foodshop:"1-5",visible_staff:!0,open2:!1,cat_sel:[],options:[],level_sel:[],label_sel:[],fileList1:[],is_set_send_time:!1,previewVisible1:!1,set_send_time_min:"00:00:00",previewImage:"",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",queryParam:{id:this.mail_id},formData:{category_type:"",category_id:0,type:0,users:0,send_port:0,set_send_time_date:0,set_send_time_min:"00:00:00",title:"",desc:"",img:"",content_type:0,content:"",user:{area_sel:!1,sel_areas:[],level_sel:!1,level:"",label_sel:!1,label:[]}}}},activated:function(){this.queryParam.id=this.mail_id,this.getLists()},created:function(){this.queryParam.id=this.mail_id,this.getLists()},methods:{moment:f.a,handleChange:function(t){this.formData.user.label=t},onChangeArea:function(t){this.formData.province_id=t[0],this.formData.city_id=t[1],this.formData.user.sel_areas=[t[0],t[1]]},onChange:function(t){this.formData.user.area_sel=t.target.checked},onChange1:function(t){this.formData.user.level_sel=t.target.checked},onChange2:function(t){this.formData.user.label_sel=t.target.checked},onChange3:function(t){this.is_set_send_time=t.target.checked},getLists:function(){var t=this;this.request(c["a"].mailEdit,this.queryParam).then((function(e){if(t.fileList1=[],e.list.img){var a={uid:"logo",name:"logo_1",status:"done",url:e.list.img};t.fileList1.push(a)}t.$set(t,"formData",e.list),t.formData=e.list,e.list.set_send_time>0&&(t.is_set_send_time=!0),t.formData.user=e.list.users_label,t.cat_sel=e.cat_sel,t.options=e.options,t.level_sel=e.level_sel,t.label_sel=e.label_sel}))},disabledStartDate:function(t){},onDateStartChange:function(t,e){this.$set(this.formData,"set_send_time_date",e)},handleClose:function(){this.open2=!1},handlePreview1:function(t){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,h(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible1=!0;case 6:case"end":return a.stop()}}),a)})))()},handleChange1:function(t){var e=t.fileList;if(e.length>0){var a=e.length-1;this.fileList1=e,"done"==this.fileList1[a].status&&(this.formData.img=this.fileList1[a].response.data,this.fileList1[0].uid="logo_2",this.fileList1[0].name="logo_2",this.fileList1[0].status="done",this.fileList1[0].url=this.fileList1[a].response.data,e.length>1&&this.fileList1.splice(0,a))}},handleCancel1:function(){this.previewVisible1=!1},getLinkUrl:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",source_id:"",handleOkBtn:function(e){console.log("handleOk",e),t.$nextTick((function(){t.$set(t.formData,"content",e.url)}))}})},returnBack:function(){this.$emit("getShow",{})},handleSubmit:function(){var t=this;this.request(c["a"].addData,this.formData).then((function(e){t.$message.success("新增成功"),t.$emit("getShow",{})}))},onChangeTime:function(t,e){this.formData.set_send_time_min=e,this.$set(this.formData,"set_send_time_min",e)}}},v=m,_=(a("610e"),a("0c7c")),g=Object(_["a"])(v,r,n,!1,null,"5f838a0e",null);e["default"]=g.exports},"610e":function(t,e,a){"use strict";a("f3bc")},c7eb:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("b636"),a("944a"),a("0c47"),a("23dc"),a("3410"),a("159b"),a("b0c0"),a("131a"),a("fb6a");var r=a("53ca");function n(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
n=function(){return e};var t,e={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,a){t[e]=a.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function f(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,a){return t[e]=a}}function d(t,e,a,r){var n=e&&e.prototype instanceof b?e:b,o=Object.create(n.prototype),s=new P(r||[]);return i(o,"_invoke",{value:O(t,a,s)}),o}function p(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",m="suspendedYield",v="executing",_="completed",g={};function b(){}function y(){}function w(){}var D={};f(D,l,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(T([])));L&&L!==a&&o.call(L,l)&&(D=L);var k=w.prototype=b.prototype=Object.create(D);function C(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function a(n,i,s,l){var c=p(t[n],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==Object(r["a"])(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,s,l)}),(function(t){a("throw",t,s,l)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,l)}))}l(c.arg)}var n;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,n){a(t,r,e,n)}))}return n=n?n.then(o,o):o()}})}function O(e,a,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===_){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var l=S(s,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=_,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var c=p(e,a,r);if("normal"===c.type){if(n=r.done?_:m,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=_,r.method="throw",r.arg=c.arg)}}}function S(e,a){var r=a.method,n=e.iterator[r];if(n===t)return a.delegate=null,"throw"===r&&e.iterator["return"]&&(a.method="return",a.arg=t,S(e,a),"throw"===a.method)||"return"!==r&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(n,e.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,g;var i=o.arg;return i?i.done?(a[e.resultName]=i.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,g):i:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,g)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function T(e){if(e||""===e){var a=e[l];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function a(){for(;++n<e.length;)if(o.call(e,n))return a.value=e[n],a.done=!1,a;return a.value=t,a.done=!0,a};return i.next=i}}throw new TypeError(Object(r["a"])(e)+" is not iterable")}return y.prototype=w,i(k,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:y,configurable:!0}),y.displayName=f(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},C(E.prototype),f(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new E(d(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(k),f(k,u,"Generator"),f(k,l,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),a=[];for(var r in e)a.push(r);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var a in this)"t"===a.charAt(0)&&o.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function r(r,n){return s.type="throw",s.arg=e,a.next=r,n&&(a.method="next",a.arg=t),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var n=r;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),j(a),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;j(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,r){return this.delegate={iterator:T(e),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}},de0b:function(t,e,a){"use strict";var r={mailList:"/common/platform.user.Mail/mailList",mailEdit:"/common/platform.user.Mail/editMail",delData:"/common/platform.user.Mail/delData",addData:"/common/platform.user.Mail/addData",getComplaintList:"/complaint/platform.Complaint/getList",getComplaintTypeList:"complaint/platform.Complaint/getTypeList",changeComplaintStatus:"/complaint/platform.Complaint/changeStatus",deleteComplaint:"/complaint/platform.Complaint/delete"};e["a"]=r},f3bc:function(t,e,a){}}]);