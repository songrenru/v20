(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5223b0bf","chunk-b3cef5c8","chunk-b3cef5c8"],{"148c":function(e,t,i){"use strict";var r={getActivityList:"/employee/platform.EmployeeActivity/getActivityList",delActivity:"/employee/platform.EmployeeActivity/delActivity",getActivityEdit:"/employee/platform.EmployeeActivity/getActivityEdit",employActivityAddOrEdit:"/employee/platform.EmployeeActivity/employActivityAddOrEdit",getActivityGoods:"/employee/platform.EmployeeActivity/getActivityGoods",getActivityAdverList:"/employee/platform.EmployeeActivity/getActivityAdverList",activityAdverDel:"/employee/platform.EmployeeActivity/activityAdverDel",getAllArea:"/employee/platform.EmployeeActivity/getAllArea",addOrEditActivityAdver:"/employee/platform.EmployeeActivity/addOrEditActivityAdver",getActivityAdver:"/employee/platform.EmployeeActivity/getActivityAdver",getShopGoodsList:"/employee/platform.EmployeeActivity/getShopGoodsList",addActivityShopGoods:"/employee/platform.EmployeeActivity/addActivityShopGoods",setActivityGoodsSort:"/employee/platform.EmployeeActivity/setActivityGoodsSort",delActivityGoods:"/employee/platform.EmployeeActivity/delActivityGoods",getlableAll:"/employee/platform.EmployeeActivity/getlableAll",getPickTimeSetting:"/employee/platform.EmployeeActivity/getPickTimeSetting",pickTimeSetting:"/employee/platform.EmployeeActivity/pickTimeSetting"};t["a"]=r},"269b":function(e,t,i){"use strict";i.r(t);i("54f8"),i("3849");var r=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{visible:e.visible,width:"750px",height:e.height,closable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[t("div",{style:[{height:e.height},{"overflow-y":"scroll"}]},[t("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),"wap_life_tools_ticket_slider"!==this.cat_key?t("a-form-item",{attrs:{label:"通用广告"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1):e._e(),0==e.detail.now_adver.currency?t("a-form-item",{attrs:{label:"所在区域"}},[t("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区",defaultValue:[e.detail.now_adver.province_id,e.detail.now_adver.city_id]}})],1):e._e(),t("a-form-item",{attrs:{label:"图片",extra:""}},[t("div",{staticClass:"clearfix"},[e.pic_show?t("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?t("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),t("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"employee/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),t("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),t("a-form-item",{attrs:{label:"链接地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url}],expression:"['url', {initialValue:detail.now_adver.url}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?t("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1),t("a-form-item",{attrs:{label:"设置仅为员工可见"}},[t("a-button",{attrs:{type:"primary"},on:{click:e.onAddInput}},[e._v(" 添加 ")]),e._l(e.selectedLable,(function(i,r){return t("div",{key:r,staticClass:"goods-container"},[t("div",{staticClass:"goods-content"},[t("div",{staticClass:"goods-content-box"},[t("div",{staticClass:"goods-content-left"},[t("a-form",{attrs:{"label-col":{span:3},"wrapper-col":{span:20}}},[t("a-form-item",{attrs:{label:"商家"}},[t("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择商家",value:i.mer_id},on:{change:function(t){return e.selecteMerChangge(t,r)}}},e._l(e.lableList,(function(i){return t("a-select-option",{key:i.mer_id,attrs:{value:i.mer_id}},[e._v(e._s(i.name))])})),1)],1),e._l(e.lableList,(function(a){return t("div",{key:a.mer_id},[a.mer_id==i.mer_id?t("a-form-item",{attrs:{label:"标签"}},[t("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择标签",mode:"multiple",value:i.lables},on:{change:function(t){return e.selecteLableChangge(t,r)}}},e._l(a.lables,(function(i){return t("a-select-option",{key:i.lable_id,attrs:{value:i.lable_id}},[e._v(e._s(i.name))])})),1)],1):e._e()],1)}))],2)],1),t("div",{staticClass:"goods-content-right"},[t("a-button",{attrs:{type:"danger"},on:{click:function(t){return e.delPrivateSpec(r)}}},[e._v("删除")])],1)])])])}))],2),t("a-form-item",{attrs:{label:"排序"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),t("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),t("a-form-item",{attrs:{label:"状态"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),t("link-bases",{ref:"linkModel"})],1)},a=[],n=i("dff4"),o=i("d34b"),l=(i("4868"),i("c5cb"),i("4afa"),i("148c")),c=i("c2d1"),s={name:"decorateAdverEdit",components:{LinkBases:c["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",height:"600px",edited:!0,cat_key:"",title:"",areaList:"",activity_id:0,detail:{now_adver:{name:"",pic:"",status:0}},previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},selectedLable:[],lableList:[]}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(e,t,i,r,a){var n=this;this.visible=!0,this.edited=t,this.type=i,this.id=e,this.activity_id=r,this.title=a,this.getAllArea(),this.getlableAll(),e>0?this.request(l["a"].getActivityAdver,{id:e}).then((function(e){n.removeImage(),n.detail=e,n.selectedLable=e.lable_arr||[],n.detail.now_adver.pic&&(n.fileList=[{uid:"-1",name:"当前图片",status:"done",url:n.detail.now_adver.pic}],n.length=n.fileList.length,n.pic=n.detail.now_adver.pic,n.pic_show=!0)})):(this.detail.now_adver={name:"",pic:"",status:0},this.selectedLable=[],this.removeImage())},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(l["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},getlableAll:function(){var e=this;this.request(l["a"].getlableAll,{}).then((function(t){e.lableList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,i){if(console.log(44444,t.activity_id),!e){if(i.id=t.id,i.activity_id=t.activity_id,i.currency=1==i.currency?1:0,i.pic=t.pic,i.areaList||(i.areaList=[]),i.lable_arr=t.selectedLable,i.lable_arr.length>0){var r=i.lable_arr.find((function(e){return e.mer_id<=0||e.lables.length<=0}));if(r)return t.$message.error("未选择商家或者标签"),!1}console.log(i),t.request(l["a"].addOrEditActivityAdver,i).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),t.$emit("update",t.activity_id),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",i)}),1500)}))}}))},switchComplete:function(e){this.detail.now_adver.currency=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(o["a"])(Object(n["a"])().mark((function i(){return Object(n["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.url||e.preview){i.next=4;break}return i.next=3,getBase64(e.originFileObj);case 3:e.preview=i.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},removeImage:function(){console.log(1111,this.fileList),void 0!=this.fileList?this.fileList.splice(0,this.fileList.length):this.fileList=[],this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})},onAddInput:function(){this.selectedLable.push({lables:[]})},delPrivateSpec:function(e){this.selectedLable.splice(e,1)},selecteMerChangge:function(e,t){var i=this.selectedLable.find((function(t){return t.mer_id==e}));if(i)return this.$message.error("该商家已添加过"),!1;var r=this.selectedLable[t];r["mer_id"]=e,r["lables"]=[],this.$set(this.selectedLable,t,r)},selecteLableChangge:function(e,t){console.log(e,"val2");var i=this.selectedLable[t];i["lables"]=e,this.$set(this.selectedLable,t,i)}}},d=s,u=(i("40eb"),i("0b56")),h=Object(u["a"])(d,r,a,!1,null,"9cda09bc",null);t["default"]=h.exports},"40eb":function(e,t,i){"use strict";i("db4f")},d34b:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("c5cb");function r(e,t,i,r,a,n,o){try{var l=e[n](o),c=l.value}catch(s){return void i(s)}l.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,i=arguments;return new Promise((function(a,n){var o=e.apply(t,i);function l(e){r(o,a,n,l,c,"next",e)}function c(e){r(o,a,n,l,c,"throw",e)}l(void 0)}))}}},db4f:function(e,t,i){},dff4:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("6073"),i("2c5c"),i("c5cb"),i("36fa"),i("02bf"),i("a617"),i("70b9"),i("25b2"),i("0245"),i("2e24"),i("1485"),i("08c7"),i("54f8"),i("7177"),i("9ae4");var r=i("2396");function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return e};var e={},t=Object.prototype,i=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function s(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(C){s=function(e,t,i){return e[t]=i}}function d(e,t,i,r){var a=t&&t.prototype instanceof f?t:f,n=Object.create(a.prototype),o=new k(r||[]);return n._invoke=function(e,t,i){var r="suspendedStart";return function(a,n){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw n;return O()}for(i.method=a,i.arg=n;;){var o=i.delegate;if(o){var l=L(o,i);if(l){if(l===h)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===r)throw r="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r="executing";var c=u(e,t,i);if("normal"===c.type){if(r=i.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r="completed",i.method="throw",i.arg=c.arg)}}}(e,i,o),n}function u(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(C){return{type:"throw",arg:C}}}e.wrap=d;var h={};function f(){}function p(){}function v(){}var m={};s(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(E([])));g&&g!==t&&i.call(g,o)&&(m=g);var b=v.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function a(n,o,l,c){var s=u(e[n],e,o);if("throw"!==s.type){var d=s.arg,h=d.value;return h&&"object"==Object(r["a"])(h)&&i.call(h,"__await")?t.resolve(h.__await).then((function(e){a("next",e,l,c)}),(function(e){a("throw",e,l,c)})):t.resolve(h).then((function(e){d.value=e,l(d)}),(function(e){return a("throw",e,l,c)}))}c(s.arg)}var n;this._invoke=function(e,i){function r(){return new t((function(t,r){a(e,i,t,r)}))}return n=n?n.then(r,r):r()}}function L(e,t){var i=e.iterator[t.method];if(void 0===i){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=u(i,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,s(b,"constructor",v),s(v,"constructor",p),p.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(_.prototype),s(_.prototype,l,(function(){return this})),e.AsyncIterator=_,e.async=function(t,i,r,a,n){void 0===n&&(n=Promise);var o=new _(d(t,i,r,a),n);return e.isGeneratorFunction(i)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(b),s(b,c,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var i in e)t.push(i);return t.reverse(),function i(){for(;t.length;){var r=t.pop();if(r in e)return i.value=r,i.done=!1,i}return i.done=!0,i}},e.values=E,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(i,r){return o.type="throw",o.arg=e,t.next=i,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a],o=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=i.call(n,"catchLoc"),c=i.call(n,"finallyLoc");if(l&&c){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var o=n?n.completion:{};return o.type=e,o.arg=t,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),x(i),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var r=i.completion;if("throw"===r.type){var a=r.arg;x(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:E(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),h}},e}}}]);