(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e4b66d3","chunk-112c6452","chunk-112c6452"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7");function n(e,t,r,n,o,i,a){try{var s=e[i](a),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,l,"next",e)}function l(e){n(a,o,i,s,l,"throw",e)}s(void 0)}))}}},3193:function(e,t,r){"use strict";r("bf4f")},bf4f:function(e,t,r){},c7eb:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var n=r("53ca");function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var e,t={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof w?t:w,i=Object.create(o.prototype),s=new $(n||[]);return a(i,"_invoke",{value:S(e,r,s)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var f="suspendedStart",m="suspendedYield",g="executing",y="completed",v={};function w(){}function b(){}function _(){}var C={};h(C,l,(function(){return this}));var k=Object.getPrototypeOf,F=k&&k(k(q([])));F&&F!==r&&i.call(F,l)&&(C=F);var L=_.prototype=w.prototype=Object.create(C);function x(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,a,s,l){var c=p(e[o],e,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==Object(n["a"])(h)&&i.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,s,l)}),(function(e){r("throw",e,s,l)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function S(t,r,n){var o=f;return function(i,a){if(o===g)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var l=j(s,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var c=p(t,r,n);if("normal"===c.type){if(o=n.done?y:m,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=y,n.method="throw",n.arg=c.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function q(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(Object(n["a"])(t)+" is not iterable")}return b.prototype=_,a(L,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:b,configurable:!0}),b.displayName=h(_,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,h(e,u,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},x(P.prototype),h(P.prototype,c,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(d(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(L),h(L,u,"Generator"),h(L,l,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=q,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:q(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}},e087:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{title:"添加工单",placement:"right",closable:!1,visible:e.workVisible,width:900},on:{close:e.onClose}},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.workerForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[e.workVisible?r("a-form-model-item",{attrs:{label:"对应位置",prop:"address_id"}},[r("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,0)}}},e._l(e.housePositionList,(function(t,n){return r("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1),0!=e.positionChild1.length?r("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,1)}}},e._l(e.positionChild1,(function(t,n){return r("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e(),0!=e.positionChild2.length?r("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,2)}}},e._l(e.positionChild2,(function(t,n){return r("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e(),0!=e.positionChild3.length?r("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,3)}}},e._l(e.positionChild3,(function(t,n){return r("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1):e._e(),r("a-form-model-item",{attrs:{label:"工单类目",prop:"cat_fid"}},[r("a-select",{attrs:{value:e.workerForm.cat_fid,placeholder:"请选择工单类目"},on:{change:function(t){return e.handleSelectChange(t,"cat_fid")}}},e._l(e.orderCategory,(function(t,n){return r("a-select-option",{attrs:{value:t.category_id}},[e._v(" "+e._s(t.subject_name)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"工单分类",prop:"cat_id"}},[r("a-select",{attrs:{value:e.workerForm.cat_id,placeholder:"请选择工单分类"},on:{change:function(t){return e.handleSelectChange(t,"cat_id")}}},e._l(e.orderClassification,(function(t,n){return r("a-select-option",{attrs:{value:t.cat_id}},[e._v(" "+e._s(t.cate_name)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"标签",prop:"label_txt"}},[r("a-transfer",{attrs:{locale:{itemUnit:"【已选】",itemsUnit:"【全部】",notFoundContent:"列表为空",searchPlaceholder:"请输入搜索内容"},"show-search":"",rowKey:function(e){return e.key},"data-source":e.labelList,"list-style":{width:"200px",height:"270px"},render:e.renderItem,"show-select-all":!0,"target-keys":e.targetKeys},on:{change:e.handleTransferChange}})],1),r("a-form-model-item",{attrs:{label:"补充内容",prop:"order_content"}},[r("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.workerForm.order_content,callback:function(t){e.$set(e.workerForm,"order_content",t)},expression:"workerForm.order_content"}})],1),e.workVisible?r("a-form-model-item",{attrs:{label:"",prop:"order_imgs"}},[r("a-upload",{staticStyle:{transform:"translateX(140px)"},attrs:{action:"/v20/public/index.php/community/village_api.ContentEngine/uploadFile","list-type":"picture-card","file-list":e.fileList,"before-upload":e.beforeUpload},on:{preview:e.handlePreview,change:e.handleUploadChange}},[e.fileList.length<8?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v(" Upload ")])],1):e._e()]),r("div",{staticClass:"desc",staticStyle:{transform:"translateX(140px)"}},[e._v(" 已上传"+e._s(e.fileList.length)+"张, 最多可上传8张 ")]),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1):e._e(),e.workVisible?r("a-form-model-item",{attrs:{label:"上门时间",prop:"go_time"}},[r("a-date-picker",{on:{change:e.onDateChange}}),r("a-time-picker",{staticStyle:{"margin-left":"10px"},attrs:{format:"HH:mm"},on:{change:e.onTimeChange}})],1):e._e(),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 提交 ")])],1)],1)],1)},o=[],i=r("c7eb"),a=r("1da1"),s=(r("5cad"),r("7b2d")),l=(r("d3b7"),r("a630"),r("3ca3"),r("6062"),r("ddb0"),r("d81d"),r("b0c0"),r("8bbf"),r("a0e0"));function c(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))}var u={props:{workVisible:{type:Boolean,default:!1}},components:{"a-transfer":s["a"]},data:function(){return{workerForm:{address_id:"",cat_id:"",cat_fid:"",go_time:""},labelCol:{span:4},wrapperCol:{span:14},rules:{cat_fid:[{required:!0,message:"请选择工单类目",trigger:"blur"}],cat_id:[{required:!0,message:"请选择工单类目",trigger:"blur"}],order_content:[{required:!0,message:"请输入补充内容",trigger:"blur"}],address_id:[{required:!1,message:"请选择位置",trigger:"blur"}],go_time:[{required:!1,message:"请选择上门时间",trigger:"blur"}]},previewVisible:!1,previewImage:"",fileList:[],options:[],targetKeys:[],labelList:[],orderCategory:[],orderClassification:[],housePositionList:[],positionChild1:[],positionChild2:[],positionChild3:[],timeStr:""}},mounted:function(){this.getHousePosition(),this.getSubject()},methods:{onTimeChange:function(e,t){this.timeStr=t,console.log("timeString===>",t)},onSubmit:function(){var e=this,t=this;""==t.timeStr||""==t.workerForm.go_time?t.workerForm.go_time="":t.workerForm.go_time=t.workerForm.go_time+" "+t.timeStr,t.$refs.ruleForm.validate((function(r){if(!r)return console.log("error submit!!"),!1;t.request(l["a"].repairOrderAdd,t.workerForm).then((function(r){t.$message.success("添加成功！"),e.clearForm(),e.$refs.ruleForm.resetFields(),e.$emit("closeWorker",!0)}))}))},resetForm:function(){this.clearForm(),this.$refs.ruleForm.resetFields(),this.$emit("closeWorker",!1)},onClose:function(){this.clearForm(),this.$refs.ruleForm.resetFields(),this.$emit("closeWorker",!1)},uniqueKey:function(e){return Array.from(new Set(e))},handleCancel:function(){this.previewVisible=!1},housePositionChange1:function(e,t){var r=this;console.log(e,t),0==t?(r.positionChild1=[],r.positionChild2=[],r.positionChild3=[],r.housePositionList.map((function(n){n.name==e&&"public"!=n.type?(r.workerForm.address_type=n.type,r.workerForm.address_id=n.id,r.getHousePositionChidren(n.id,n.type,t)):n.name==e&&"public"==n.type&&(r.workerForm.address_type=n.type,r.workerForm.address_id=n.id)}))):1==t?(r.positionChild2=[],r.positionChild3=[],r.positionChild1.map((function(n){n.name==e&&"public"!=n.type?(r.workerForm.address_type=n.type,r.workerForm.address_id=n.id,r.getHousePositionChidren(n.id,n.type,t)):n.name==e&&"public"==n.type&&(r.workerForm.address_type=n.type,r.workerForm.address_id=n.id)}))):2==t?(r.positionChild3=[],r.positionChild2.map((function(n){n.name==e&&"public"!=n.type?(r.workerForm.address_type=n.type,r.workerForm.address_id=n.id,r.getHousePositionChidren(n.id,n.type,t)):n.name==e&&"public"==n.type&&(r.workerForm.address_type=n.type,r.workerForm.address_id=n.id)}))):3==t&&r.positionChild3.map((function(t){t.name==e&&(r.workerForm.address_type=t.type,r.workerForm.address_id=t.id)}))},handlePreview:function(e){var t=this;return Object(a["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,c(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var r=e.size/1024/1024<2;return r||this.$message.error("Image must smaller than 2MB!"),t&&r},handleUploadChange:function(e){var t=e.fileList,r=this;r.fileList=t,r.workerForm.order_imgs=[],r.fileList.map((function(e){e.response&&e.response.data&&e.response.data.url&&r.workerForm.order_imgs.push(e.response.data.url)}))},handleSelectChange:function(e,t){this.workerForm[t]=e,this.$forceUpdate(),"cat_fid"==t?(this.workerForm.cat_id="",this.getRepairCate(e)):"cat_id"==t&&(this.labelList=[],this.targetKeys=[],this.getLabel(e))},renderItem:function(e){var t=this.$createElement,r=t("span",{class:"custom-item"},[e.title]);return{label:r,value:e.title}},handleTransferChange:function(e,t,r){this.targetKeys=e,this.workerForm.label_txt=e},clearForm:function(){this.positionChild1=[],this.positionChild2=[],this.positionChild3=[],this.labelList=[],this.workerForm={cat_id:"",cat_fid:"",go_time:""},this.targetKeys=[],this.fileList=[],this.timeStr=""},getLabelList:function(){var e=this;e.request(l["a"].getLabelList,{}).then((function(t){e.labelList=[],t.list.map((function(t){e.labelList.push({key:t.id+"",title:t.label_name})}))}))},getHousePosition:function(){var e=this;e.request(l["a"].getHousePosition,{}).then((function(t){e.housePositionList=t}))},getHousePositionChidren:function(e,t,r){var n=this;n.request(l["a"].getHousePositionChidren,{id:e,type:t}).then((function(e){0==r?n.positionChild1=e:1==r?n.positionChild2=e:2==r&&(n.positionChild3=e)}))},getSubject:function(){var e=this;this.request(l["a"].getSubjectOrders,{}).then((function(t){e.orderCategory=t}))},getRepairCate:function(e){var t=this;this.request(l["a"].getRepairCate,{subject_id:e}).then((function(e){t.orderClassification=e}))},getLabel:function(e){var t=this;this.request(l["a"].getLabel,{cat_id:e}).then((function(e){e.map((function(e){t.labelList.push({key:e.id+"",title:e.name})}))}))},onDateChange:function(e,t){this.workerForm.go_time=t}}},h=u,d=(r("3193"),r("0c7c")),p=Object(d["a"])(h,n,o,!1,null,"7de8267d",null);t["default"]=p.exports}}]);