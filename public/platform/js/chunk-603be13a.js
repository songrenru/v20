(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-603be13a","chunk-b3cef5c8","chunk-b3cef5c8","chunk-748b470d"],{"49a2":function(e,t,a){"use strict";a("e2e7")},"4bb5d":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("ea87");function i(e){if(Array.isArray(e))return Object(r["a"])(e)}a("6073"),a("2c5c"),a("c5cb"),a("36fa"),a("02bf"),a("a617"),a("17c8");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=a("9877");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return i(e)||n(e)||Object(o["a"])(e)||l()}},"7b3f":function(e,t,a){"use strict";var r={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=r},"7d4c":function(e,t,a){"use strict";a.r(t);a("54f8"),a("3849");var r=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{visible:e.visible,width:"650px",height:"600px",closable:!1,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[t("div",{staticStyle:{"overflow-y":"scroll",height:"600px"}},[t("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),t("a-form-item",{attrs:{label:"图片",extra:""}},[t("a-upload",{attrs:{name:"reply_pic","file-list":e.fileListCover,action:e.uploadImg,headers:e.headers,"list-type":"picture-card"},on:{preview:e.handlePreviewCover,change:function(t){return e.upLoadChangeCover(t)}}},[e.fileListCover.length<1?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),t("a-modal",{attrs:{visible:e.previewVisibleCover,footer:null},on:{cancel:e.handleCancelCover}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImageCover}})]),t("font",{staticStyle:{color:"red"}},[e._v("建议750*270px")])],1),t("a-form-item",{attrs:{label:"链接地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url}],expression:"['url', {initialValue:detail.now_adver.url}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?t("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1),e.isPlat?t("a-form-item",{attrs:{label:"小程序中想要打开"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_open_type",{initialValue:e.detail.now_adver.wxapp_open_type}],expression:"['wxapp_open_type', {initialValue:detail.now_adver.wxapp_open_type}]"}],attrs:{disabled:this.edited}},[t("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")])],1)],1):e._e(),e.isPlat?t("a-form-item",{attrs:{label:"打开其他小程序"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_id",{initialValue:e.detail.now_adver.wxapp_id}],expression:"['wxapp_id', {initialValue:detail.now_adver.wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"请选择小程序"}},e._l(e.detail.wxapp_list,(function(a,r){return t("a-select-option",{attrs:{value:a.appid}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),e.isPlat?t("a-form-item",{attrs:{label:"小程序页面"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_page",{initialValue:e.detail.now_adver.wxapp_page}],expression:"['wxapp_page', {initialValue:detail.now_adver.wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),t("a-tooltip",{attrs:{trigger:"“hover"}},[t("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),t("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),e.isPlat?t("a-divider",[e._v("打开其他APP")]):e._e(),e.isPlat?t("a-form-item",{attrs:{label:"APP中想要打开"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_open_type",{initialValue:e.detail.now_adver.app_open_type}],expression:"['app_open_type', {initialValue:detail.now_adver.app_open_type}]"}],attrs:{disabled:this.edited},on:{change:e.changeAppType}},[t("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")]),t("a-select-option",{attrs:{value:2}},[e._v(" 打开其他APP ")])],1)],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?t("a-form-item",{attrs:{label:"选择苹果APP"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_name",{initialValue:e.detail.now_adver.ios_app_name}],expression:"['ios_app_name', {initialValue:detail.now_adver.ios_app_name}]"}],attrs:{disabled:this.edited,placeholder:"选择苹果APP"}},e._l(e.detail.app_list,(function(a,r){return t("a-select-option",{key:r,attrs:{value:a.url_scheme}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?t("a-form-item",{attrs:{label:"苹果APP下载地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_url",{initialValue:e.detail.now_adver.ios_app_url}],expression:"['ios_app_url', {initialValue:detail.now_adver.ios_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入苹果APP下载地址"}})],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?t("a-form-item",{attrs:{label:"安卓APP包名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_name",{initialValue:e.detail.now_adver.android_app_name}],expression:"['android_app_name', {initialValue:detail.now_adver.android_app_name}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP包名"}})],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?t("a-form-item",{attrs:{label:"安卓APP下载地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_url",{initialValue:e.detail.now_adver.android_app_url}],expression:"['android_app_url', {initialValue:detail.now_adver.android_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP下载地址"}})],1):e._e(),1==e.detail.now_adver.app_open_type&&e.isPlat?t("a-form-item",{attrs:{label:"打开其他小程序"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_id",{initialValue:e.detail.now_adver.app_wxapp_id}],expression:"['app_wxapp_id', {initialValue:detail.now_adver.app_wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"选择小程序"}},e._l(e.detail.wxapp_list,(function(a,r){return t("a-select-option",{key:r,attrs:{value:a.appid}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),1==e.detail.now_adver.app_open_type&&e.isPlat?t("a-form-item",{attrs:{label:"小程序页面"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_page",{initialValue:e.detail.now_adver.app_wxapp_page}],expression:"['app_wxapp_page', {initialValue:detail.now_adver.app_wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),t("a-tooltip",{attrs:{trigger:"“hover"}},[t("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),t("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),t("a-form-item",{attrs:{label:"排序"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),t("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),t("a-form-item",{attrs:{label:"状态"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),t("link-bases",{ref:"linkModel"})],1)},i=[],n=a("4bb5d"),o=a("dff4"),l=a("d34b"),s=(a("9ae4"),a("075f"),a("beed")),c=a("c2d1"),d=a("7b3f"),p={name:"decorateAdverEdit",components:{LinkBases:c["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",edited:!0,cat_key:"",title:"",areaList:"",detail:{now_adver:{}},previewVisible:!1,previewImage:"",length:0,pic:"",headers:{authorization:"authorization-text"},uploadImg:"/v20/public/index.php"+d["a"].uploadImg+"?upload_dir=/adver/images",fileList:[],fileListCover:[],previewVisibleCover:!1,previewImageCover:null,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},isPlat:!0,confirmLoading:!1}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){console.log(this.cat_key,"cat_key111"),this.form=this.$form.createForm(this,{name:"validate_other"}),this.getAllArea()},methods:{editOne:function(e,t,a,r,i){var n=this;this.visible=!0,this.edited=t,this.type=a,this.id=e,this.cat_key=r,this.title=i,this.getAllArea(),console.log(r,"cat_key"),this.isPlat="banking_index_adver"!=r&&"banking_electronic_adver"!=r,this.request(s["a"].getEdit,{id:e}).then((function(e){n.detail=e,n.detail.now_adver.pic&&(n.fileListCover[0]={uid:1,name:"image.png",status:"done",url:n.detail.now_adver.pic,data:n.detail.now_adver.pic},n.length=n.fileList.length,n.pic=n.detail.now_adver.pic)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(s["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(a.id=t.id,a.cat_key=t.cat_key,a.pic=t.pic,a.areaList||(a.areaList=[]),console.log(a),t.confirmLoading=!0,t.request(s["a"].addOrEditDecorate,a).then((function(e){t.id>0?(t.$message.success("编辑成功"),t.$emit("update",{cat_key:t.cat_key,title:t.title})):t.$message.success("添加成功"),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",a),t.confirmLoading=!1}),1500)})))}))},switchComplete:function(e){},changeAppType:function(e){this.detail.now_adver.app_open_type=e},handlePreviewCover:function(e){var t=this;return Object(l["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImageCover=e.url||e.preview,t.previewVisibleCover=!0;case 6:case"end":return a.stop()}}),a)})))()},upLoadChangeCover:function(e){var t=this,a=Object(n["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.pic=e.file.response.data.image),a})),this.fileListCover=a,"done"===e.file.status||"error"===e.file.status&&this.$message.error("".concat(e.file.name," 上传失败."))},handleCancelCover:function(){this.previewVisibleCover=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},u=p,f=(a("49a2"),a("0b56")),v=Object(f["a"])(u,r,i,!1,null,null,null);t["default"]=v.exports},beed:function(e,t,a){"use strict";var r={getList:"/common/common.DecoratePage/getHomeDecorateList",getDel:"/common/common.DecoratePage/getHomeDecorateDel",getEdit:"/common/common.DecoratePage/getHomeDecorateEdit",getAllArea:"/common/common.DecoratePage/getAllArea",addOrEditDecorate:"/common/common.DecoratePage/homeDecorateaddOrEdit"};t["a"]=r},d34b:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("c5cb");function r(e,t,a,r,i,n,o){try{var l=e[n](o),s=l.value}catch(c){return void a(c)}l.done?t(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(i,n){var o=e.apply(t,a);function l(e){r(o,i,n,l,s,"next",e)}function s(e){r(o,i,n,l,s,"throw",e)}l(void 0)}))}}},dff4:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("6073"),a("2c5c"),a("c5cb"),a("36fa"),a("02bf"),a("a617"),a("70b9"),a("25b2"),a("0245"),a("2e24"),a("1485"),a("08c7"),a("54f8"),a("7177"),a("9ae4");var r=a("2396");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,a){return e[t]=a}}function d(e,t,a,r){var i=t&&t.prototype instanceof f?t:f,n=Object.create(i.prototype),o=new k(r||[]);return n._invoke=function(e,t,a){var r="suspendedStart";return function(i,n){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw n;return C()}for(a.method=i,a.arg=n;;){var o=a.delegate;if(o){var l=x(o,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=p(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,o),n}function p(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(A){return{type:"throw",arg:A}}}e.wrap=d;var u={};function f(){}function v(){}function h(){}var m={};c(m,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(V([])));w&&w!==t&&a.call(w,o)&&(m=w);var y=h.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function i(n,o,l,s){var c=p(e[n],e,o);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==Object(r["a"])(u)&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){i("next",e,l,s)}),(function(e){i("throw",e,l,s)})):t.resolve(u).then((function(e){d.value=e,l(d)}),(function(e){return i("throw",e,l,s)}))}s(c.arg)}var n;this._invoke=function(e,a){function r(){return new t((function(t,r){i(e,a,t,r)}))}return n=n?n.then(r,r):r()}}function x(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=p(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function V(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=h,c(y,"constructor",h),c(h,"constructor",v),v.displayName=c(h,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,l,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,r,i,n){void 0===n&&(n=Promise);var o=new b(d(t,a,r,i),n);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(y),c(y,s,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=V,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],o=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=a.call(n,"catchLoc"),s=a.call(n,"finallyLoc");if(l&&s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var o=n?n.completion:{};return o.type=e,o.arg=t,n?(this.method="next",this.next=n.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),P(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var i=r.arg;P(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:V(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}},e2e7:function(e,t,a){}}]);