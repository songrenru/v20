(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1edfb0a8","chunk-b3cef5c8","chunk-b3cef5c8"],{"06c7":function(t,e,r){},b168c:function(t,e,r){"use strict";r("06c7")},b460:function(t,e,r){"use strict";r.r(e);r("3849");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"add-volunteer-activity-box"},[e("a-form",{attrs:{form:t.form},on:{submit:t.addVolunteerActivity}},[e("a-form-item",t._b({attrs:{label:"活动名称"}},"a-form-item",t.formItemLayout,!1),[e("a-input",{attrs:{placeholder:"请填写活动名称"},model:{value:t.detail.active_name,callback:function(e){t.$set(t.detail,"active_name",e)},expression:"detail.active_name"}})],1),e("a-form-item",t._b({attrs:{label:"上传图片"}},"a-form-item",t.formItemLayout,!1),[e("div",{staticClass:"clearfix"},[e("a-upload",{attrs:{name:"active_img",action:t.uploadImgUrl,"list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<5?e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1):t._e()]),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]),e("a-form-item",t._b({attrs:{label:"活动内容"}},"a-form-item",t.formItemLayout,!1),[e("rich-text",{attrs:{info:t.detail.richText},on:{"update:info":function(e){return t.$set(t.detail,"richText",e)}}})],1),e("a-form-item",t._b({attrs:{label:"活动时间"}},"a-form-item",t.formItemLayout,!1),[e("a-date-picker",{attrs:{format:t.dateFormat,placeholder:"开始时间",value:t.date_moment(t.detail.start_time,t.dateFormat)},on:{change:t.startOnChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1),e("a-date-picker",{attrs:{format:t.dateFormat,placeholder:"结束时间",value:t.date_moment(t.detail.end_time,t.dateFormat)},on:{change:t.endOnChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-form-item",t._b({attrs:{label:"报名截止时间"}},"a-form-item",t.formItemLayout,!1),[e("a-date-picker",{attrs:{format:t.dateFormat,placeholder:"报名截止时间",value:t.date_moment(t.detail.close_time,t.dateFormat)},on:{change:t.onChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-form-item",t._b({attrs:{label:"活动报名人数"}},"a-form-item",t.formItemLayout,!1),[e("a-input",{attrs:{placeholder:"请填写活动报名人数"},model:{value:t.detail.max_num,callback:function(e){t.$set(t.detail,"max_num",e)},expression:"detail.max_num"}})],1),e("a-form-item",t._b({attrs:{label:"是否需要添加身份证"}},"a-form-item",t.formItemLayout,!1),[e("a-radio-group",{attrs:{name:"is_need"},model:{value:t.detail.is_need,callback:function(e){t.$set(t.detail,"is_need",e)},expression:"detail.is_need"}},[e("a-radio",{attrs:{value:1}},[t._v(" 需要 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 不需要 ")])],1)],1),e("a-form-item",t._b({attrs:{label:"活动状态"}},"a-form-item",t.formItemLayout,!1),[e("a-radio-group",{attrs:{name:"status"},model:{value:t.detail.status,callback:function(e){t.$set(t.detail,"status",e)},expression:"detail.status"}},[e("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),e("a-radio",{attrs:{value:0}},[t._v(" 关闭 ")])],1)],1),e("a-form-item",t._b({attrs:{label:"排序"}},"a-form-item",t.formItemLayout,!1),[e("a-input",{attrs:{placeholder:"请填写排序值"},model:{value:t.detail.sort,callback:function(e){t.$set(t.detail,"sort",e)},expression:"detail.sort"}})],1),e("a-form-item",t._b({},"a-form-item",t.tailFormItemLayout,!1),[e("a-button",{attrs:{type:"primary",htmlType:"submit",loading:t.submitBtn,disabled:t.submitBtn}},[t._v(" 保存 ")])],1)],1)],1)},i=[],a=r("8ee2"),o=r("dff4"),c=r("d34b"),s=(r("c5cb"),r("08c7"),r("aa48"),r("3446"),r("075f"),r("6e84"),r("2f42")),l=r.n(s),u=r("7a6b"),f=r("6ec16"),d=r("3683"),m=(r("0f28"),r("567c"));function h(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var v={name:"addVolunteerActivitiesInfo",components:{CustomTooltip:u["a"],RichText:f["a"],Editor:d["a"]},data:function(){return{uploadImgUrl:"/v20/public/index.php/"+m["a"].uploadImgApi,form:this.$form.createForm(this),detail:{active_name:"",add_time_txt:"",img_arr:[],start_time:"",end_time:"",max_num:"",status:1,is_need:2,sort:"",richText:"",activity_id:0,close_time:""},isClear:!1,dateFormat:"YYYY-MM-DD",confirmDirty:!1,autoCompleteResult:[],formItemLayout:{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},submitBtn:!1,previewVisible:!1,previewImage:"",fileList:[]}},mounted:function(){console.log("router",this.$route.query.aa),console.log("router",this.$route.query.activity_id);var t=this.$route.query.activity_id;"add"!==this.$route.query.aa?t&&t>0&&(this.detail.activity_id=t,this.getVolunteerDetail(t)):(this.detail={active_name:"",add_time_txt:"",img_arr:[],start_time:"",end_time:"",max_num:"",status:1,is_need:2,sort:"",richText:"",activity_id:0,close_time:""},this.fileList=[])},methods:{change:function(t){console.log(t)},handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(c["a"])(Object(o["a"])().mark((function r(){return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.url||t.preview){r.next=4;break}return r.next=3,h(t.originFileObj);case 3:t.preview=r.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},handleChange:function(t){var e=t.fileList;this.fileList=e,console.log("th",this.fileList)},getVolunteerDetail:function(t){var e=this;this.request(m["a"].getVolunteerDetail,{activity_id:t}).then((function(t){t&&t.info&&(e.detail=t.info,t.info.imgList?e.fileList=t.info.imgList:e.fileList=[],console.log("detail",e.detail))}))},moment:l.a,date_moment:function(t,e){return t?l()(t,e):""},startOnChange:function(t,e){console.log("date",t),console.log("dateString",e),this.detail.start_time=e},endOnChange:function(t,e){console.log("date",t),console.log("dateString",e),this.detail.end_time=e},onChange:function(t,e){console.log("date",t),console.log("dateString",e),this.detail.close_time=e},add_img_info:function(){console.log("添加图片",1)},addVolunteerActivity:function(t){var e=this;console.log("提交",1),this.submitBtn=!0,t.preventDefault(),this.form.validateFieldsAndScroll((function(t,r){if(!t){var n=Object(a["a"])({},r);if(console.log("Received values of form: ",n),e.detail.activity_id&&(n.activity_id=e.detail.activity_id),n.active_name=e.detail.active_name,!n.active_name)return e.$message.warning("请填写活动名称!"),!1;if(console.log("Received values of form: ",n),n.start_time=e.detail.start_time,!n.start_time)return e.$message.warning("请填写活动开始时间!"),!1;if(n.end_time=e.detail.end_time,!n.end_time)return e.$message.warning("请填写活动结束时间!"),!1;if(n.close_time=e.detail.close_time,!n.close_time)return e.$message.warning("请填写活动报名截止时间!"),!1;n.max_num=e.detail.max_num,n.status=e.detail.status,n.is_need=e.detail.is_need,n.sort=e.detail.sort,n.richText=e.detail.richText,console.log("indexParams ",n);var i=e.fileList,o=[];i.forEach((function(t){t.response?o.push(t.response):o.push(t.url_path)})),o.length>0&&(n.img_arr=o),console.log("img",o);var c=e;e.request(m["a"].addVolunteerActivity,n).then((function(t){console.log("res",t),t&&(e.$message.success("操作成功！"),setTimeout((function(){var t=c.getRouterPath("volunteerActivitiesList");console.log("addVolunteerActivity",t),c.$router.replace({path:t})}),1e3)),e.submitBtn=!1}))}}))},handleConfirmBlur:function(t){var e=t.target.value;this.confirmDirty=this.confirmDirty||!!e},handleWebsiteChange:function(t){var e;e=t?[".com",".org",".net"].map((function(e){return"".concat(t).concat(e)})):[],this.autoCompleteResult=e}}},p=v,g=(r("b168c"),r("0b56")),y=Object(g["a"])(p,n,i,!1,null,null,null);e["default"]=y.exports},d34b:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("c5cb");function n(t,e,r,n,i,a,o){try{var c=t[a](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function c(t){n(o,i,a,c,s,"next",t)}function s(t){n(o,i,a,c,s,"throw",t)}c(void 0)}))}}},dff4:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("6073"),r("2c5c"),r("c5cb"),r("36fa"),r("02bf"),r("a617"),r("70b9"),r("25b2"),r("0245"),r("2e24"),r("1485"),r("08c7"),r("54f8"),r("7177"),r("9ae4");var n=r("2396");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(C){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),o=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return O()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=x(o,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,o),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var d={};function m(){}function h(){}function v(){}var p={};l(p,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==e&&r.call(y,o)&&(p=y);var _=v.prototype=m.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function i(a,o,c,s){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==Object(n["a"])(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):e.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return i("throw",t,c,s)}))}s(l.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=v,l(_,"constructor",v),l(v,"constructor",h),h.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new w(u(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(_),l(_,s,"Generator"),l(_,o,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);