(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c83634a","chunk-112c6452","chunk-112c6452","chunk-2d0b3786"],{"072f":function(t,e,r){"use strict";var n={getRebateList:"/shop/merchant.Rebate/getList",changeRebateStatus:"/shop/merchant.Rebate/changeStatus",rebateShowDetail:"/shop/merchant.Rebate/showDetail",addRebate:"/shop/merchant.Rebate/add",editRebate:"/shop/merchant.Rebate/edit",getGoodsList:"/shop/merchant.Rebate/getGoodsList",deleteRebate:"/shop/merchant.Rebate/delete",getRebateCouponList:"/shop/merchant.Rebate/getCouponList",shopEditSliderList:"/merchant/merchant.ShopSlider/getSlider",shopEditAddSlider:"/merchant/merchant.ShopSlider/addSlider",shopEditEditSlider:"/merchant/merchant.ShopSlider/editSlider",shopEditDelSlider:"/merchant/merchant.ShopSlider/delSlider"};e["a"]=n},"13a0":function(t,e,r){"use strict";r("174d")},"174d":function(t,e,r){},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=r("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||Object(a["a"])(t)||s()}},"8a87":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-row",[r("a-col",[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.edit()}}},[t._v(t._s(t.L("新建")))])],1)],1),r("a-table",{staticClass:"mt-20",attrs:{columns:t.columns,rowKey:"id","data-source":t.list,pagination:t.pagination,scroll:{y:418.5}},scopedSlots:t._u([{key:"pic",fn:function(t,e){return r("span",{},[r("beautiful-image",{attrs:{src:e.pic,width:"60px",height:"60px",hover:"",radius:"6px"}})],1)}},{key:"status",fn:function(e){return r("span",{},[r("a-badge",{attrs:{color:1==e?"green":"red",text:1==e?t.L("开启"):t.L("关闭")}})],1)}},{key:"action",fn:function(e,n){return r("span",{},[r("span",{staticClass:"cr-primary pointer mr-10",on:{click:function(e){return t.edit(n)}}},[t._v(t._s(t.L("编辑")))]),r("span",{staticClass:"cr-primary pointer",on:{click:function(e){return t.del(n)}}},[t._v(t._s(t.L("删除")))])])}}])}),r("a-modal",{attrs:{title:t.modalTitle,destroyOnClose:"",width:"60%",centered:!0,getContainer:t.getContainer},on:{ok:t.handleOk,cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-form-model-item",{attrs:{label:t.L("名称"),prop:"name"}},[r("a-input",{attrs:{placeholder:t.L("请输入")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("a-form-model-item",{attrs:{label:t.L("图片"),help:t.L("建议尺寸80*80")}},[r("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",accept:"image/*","list-type":"picture-card","file-list":t.fileList,name:"reply_pic",data:{upload_dir:"merchant/shop_new"}},on:{preview:t.handlePreviewImg,change:function(e){return t.handleUploadImg(e)}}},[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1)],1),r("a-form-model-item",{attrs:{label:t.L("链接地址"),prop:"url"}},[r("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:t.L("请输入")},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}}),r("a-button",{attrs:{type:"link"},on:{click:function(e){return t.changeUrl()}}},[t._v(t._s(t.L("从功能库选择")))])],1),r("a-form-model-item",{attrs:{label:t.L("排序"),help:t.L("值越大越靠前")}},[r("a-input-number",{attrs:{min:0},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),r("a-form-model-item",{attrs:{label:"状态"}},[r("a-switch",{attrs:{"checked-children":t.L("开"),"un-checked-children":t.L("关"),checked:1==t.form.status},on:{change:t.onModelStatusChange}})],1)],1)],1),r("a-modal",{attrs:{visible:t.previewVisible,footer:null,getContainer:t.getContainer},on:{cancel:function(e){t.previewVisible=!1,t.previewImage=""}}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)},i=[],o=r("2909"),a=r("c7eb"),s=r("1da1"),c=r("5530"),l=(r("a434"),r("d81d"),r("498a"),r("b0c0"),r("4e82"),r("d3b7"),r("072f")),u=r("bc11"),h={components:{BeautifulImage:u["a"]},data:function(){var t=this;return{store_id:"",mer_id:"",list:[],columns:[{title:this.L("排序"),dataIndex:"sort"},{title:this.L("名称"),dataIndex:"name"},{title:this.L("图片"),dataIndex:"pic",scopedSlots:{customRender:"pic"}},{title:this.L("操作时间"),dataIndex:"last_time"},{title:this.L("状态"),dataIndex:"status",scopedSlots:{customRender:"status"}},{title:this.L("操作"),scopedSlots:{customRender:"action"}}],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return t.L("共 X1 条记录",{X1:e})}},visible:!1,modalTitle:"",labelCol:{span:4},wrapperCol:{span:14},rules:{name:[{required:!0,message:this.L("请输入名称"),trigger:"blur"}],url:[{required:!0,message:this.L("请选择链接地址"),trigger:"blur"}]},form:{name:"",pic:"",status:1,sort:"",url:""},fileList:[],previewVisible:!1,previewImage:""}},mounted:function(){this.store_id=this.$route.query.store_id||"",this.mer_id=this.$route.query.mer_id||"",this.shopEditSliderList(),this.$message.config({getContainer:this.getContainer}),this.$notification.config({getContainer:this.getContainer})},beforeRouteLeave:function(t,e,r){this.$destroy(),r()},methods:{shopEditSliderList:function(){var t=this,e={page:this.pagination.current,pageSize:this.pagination.pageSize,store_id:this.store_id};this.request(l["a"].shopEditSliderList,e).then((function(e){t.list=e.data||[],!t.list.length&&t.pagination.current>1&&(t.pagination.current=t.pagination.current-1,t.shopEditSliderList()),t.pagination.total=e.total||0}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.shopEditSliderList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.shopEditSliderList()},edit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?(this.form=Object(c["a"])({},t),this.modalTitle=this.L("导航编辑"),this.fileList=[{uid:"image",name:"image_1",status:"done",url:t.pic}]):(this.form={name:"",pic:"",status:1,sort:"",url:""},this.fileList=[],this.modalTitle=this.L("导航添加")),this.visible=!0},del:function(t){var e=this;this.$confirm({title:this.L("是否确定删除该条数据?"),centered:!0,getContainer:this.getContainer,onOk:function(){var r={id:t.id,store_id:e.store_id};e.request(l["a"].shopEditDelSlider,r).then((function(t){e.$message.success(e.L("操作成功！")),e.shopEditSliderList()}))},onCancel:function(){}})},getContainer:function(){return window.parent&&window.parent.document.body?window.parent.document.body:document.body},onModelStatusChange:function(t){this.$set(this.form,"status",t?1:0)},handlePreviewImg:function(t){var e=this;return Object(s["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.url||t.preview){r.next=4;break}return r.next=3,d(t.originFileObj);case 3:t.preview=r.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},handleUploadImg:function(t){var e=Object(o["a"])(t.fileList);if(e.length){e=e.splice(-1);var r=[];e=e.map((function(t){if(t.response&&"done"==t.status&&1e3==t.response.status){var e=t.response.data;r.push(e)}return t})),this.$set(this.form,"pic",r[0]),this.fileList=e}else this.$set(this.form,"pic",""),this.fileList=[]},changeUrl:function(){var t=this;this.$LinkBases({source:"merchant",type:"h5",modalGetContainer:this.getContainer,source_id:this.mer_id,handleOkBtn:function(e){t.$set(t.form,"url",e.url)}})},handleOk:function(){var t=this;if(this.form.name.trim())if(this.form.url.trim()){var e={store_id:this.store_id,name:this.form.name.trim(),pic:this.form.pic,url:this.form.url,status:this.form.status,sort:this.form.sort},r=l["a"].shopEditAddSlider;this.form.id&&(r=l["a"].shopEditEditSlider,e["id"]=this.form.id),this.request(r,e).then((function(e){t.$message.success(t.L("操作成功！")),t.shopEditSliderList(),t.handleCancel()}))}else this.$message.error(this.L("请选择链接地址"));else this.$message.error(this.L("请输入名称"))},handleCancel:function(){this.visible=!1}}};function d(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var f=h,p=r("0c7c"),m=Object(p["a"])(f,n,i,!1,null,"b06d82ae",null);e["default"]=m.exports},bc11:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content",style:[{width:t.width,height:t.height,borderRadius:t.radius}]},[t.is_Loading?r("div",{staticClass:"status-1",class:[t.shape?"img-border-radius":""],style:[{width:"100%",height:"100%"}]},[t.is_error?r("a-icon",{attrs:{type:"exclamation-circle"}}):t.is_Loading?r("a-icon",{attrs:{type:"loading"}}):t._e(),t.is_error?r("div",{staticClass:"trip"},[t._v("加载失败")]):t._e()],1):t._e(),t.is_error?t._e():r("img",{staticClass:"imgs",class:[t.shape?"img-border-radius":"",t.mode,t.hover?"is-hover":""],style:[{width:"100%",height:"100%"}],attrs:{src:t.src,alt:"暂无图片",title:t.visible?"点击查看图片":""},on:{click:t.viewImg,error:t.imgOnRrror,load:t.imgOnLoad}}),r("a-modal",{attrs:{title:"查看图片",footer:null,width:t.modalWidth,centered:""},model:{value:t.visibleImg,callback:function(e){t.visibleImg=e},expression:"visibleImg"}},[r("img",{style:[{width:"100%",height:"100%"}],attrs:{src:t.src,alt:"暂无图片"},on:{error:t.imgOnRrror}})])],1)},i=[],o={name:"BeautifulImage",props:{src:{type:String,default:function(){return""}},width:{type:String,default:function(){return"100%"}},height:{type:String,default:function(){return"100%"}},shape:{type:Boolean,default:function(){return!1}},radius:{type:String,default:function(){return"0px"}},mode:{type:String,default:function(){return""}},visible:{type:Boolean,default:function(){return!1}},hover:{type:Boolean,default:function(){return!1}},modalWidth:{type:String,default:function(){return"50%"}}},data:function(){return{visibleImg:!1,defaultImg:"",is_error:!1,is_Loading:!0}},created:function(){},methods:{viewImg:function(){this.visible&&(this.visibleImg=!0)},imgOnLoad:function(t){this.is_error=!1,this.is_Loading=!1},imgOnRrror:function(t){this.is_error=!0}}},a=o,s=(r("13a0"),r("0c7c")),c=Object(s["a"])(a,n,i,!1,null,"7135f060",null);e["a"]=c.exports},c7eb:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var n=r("53ca");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),s=new $(n||[]);return a(o,"_invoke",{value:O(t,r,s)}),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p="suspendedStart",m="suspendedYield",g="executing",v="completed",b={};function y(){}function w(){}function L(){}var _={};h(_,c,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(P([])));x&&x!==r&&o.call(x,c)&&(_=x);var E=L.prototype=y.prototype=Object.create(_);function C(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(i,a,s,c){var l=f(t[i],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==Object(n["a"])(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var i=p;return function(o,a){if(i===g)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=I(s,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=g;var l=f(e,r,n);if("normal"===l.type){if(i=n.done?v:m,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=v,n.method="throw",n.arg=l.arg)}}}function I(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator["return"]&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(o.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(Object(n["a"])(e)+" is not iterable")}return w.prototype=L,a(E,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:w,configurable:!0}),w.displayName=h(L,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,h(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},C(k.prototype),h(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new k(d(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(E),h(E,u,"Generator"),h(E,c,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;R(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}}}]);