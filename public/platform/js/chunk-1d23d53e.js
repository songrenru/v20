(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d23d53e","chunk-112c6452","chunk-715436fc","chunk-17f00194","chunk-d25f9e3e","chunk-112c6452","chunk-2d0deaba"],{1011:function(t,e,i){},"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("d3b7");function a(t,e,i,a,r,o,n){try{var l=t[o](n),s=l.value}catch(c){return void i(c)}l.done?e(s):Promise.resolve(s).then(a,r)}function r(t){return function(){var e=this,i=arguments;return new Promise((function(r,o){var n=t.apply(e,i);function l(t){a(n,r,o,l,s,"next",t)}function s(t){a(n,r,o,l,s,"throw",t)}l(void 0)}))}}},"2d39":function(t,e,i){},"43bb":function(t,e,i){"use strict";var a={getHouseHotWordLists:"/voice_robot/platform.HotWordManage/hotWordList",setHouseHotWordStatus:"/voice_robot/platform.HotWordManage/editHotWordStatus",saveHotWordData:"/voice_robot/platform.HotWordManage/editHotWord",deleteHouseHotWord:"/voice_robot/platform.HotWordManage/delHotWord",getOneHouseHotWord:"/voice_robot/platform.HotWordManage/hotWordDetail",getHouseHotWordMaterialCategoryLists:"/voice_robot/platform.MaterialCategory/materialCategoryList",deleteHouseHotWordMaterialCategory:"/voice_robot/platform.MaterialCategory/delMaterialCategory",saveMaterialCategoryData:"/voice_robot/platform.MaterialCategory/editMaterialCategory",exportHotWordMaterial:"/voice_robot/platform.MaterialCategory/exportMaterialCategory",getHouseHotWordMaterialLists:"/voice_robot/platform.MaterialCategory/contentList",deleteHouseHotWordMaterialContent:"/voice_robot/platform.MaterialCategory/delContent",saveHouseHotWordMaterialSetData:"/voice_robot/platform.MaterialCategory/saveContent",getHotWordMaterialLibrary:"/voice_robot/platform.MaterialCategory/getHotWordMaterialLibrary",getHotWordMaterialLibraryDetails:"/voice_robot/platform.MaterialCategory/getHotWordMaterialLibraryDetail"};e["a"]=a},"4c94":function(t,e,i){"use strict";i("1011")},"4e96":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-card",{attrs:{title:t.title2}},[i("div",[i("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),i("div",{staticClass:"header-title"},[t._v(" 请选择模块： "),i("a",{on:{click:function(e){return t.selected_url("")}}},[i("div",{staticClass:"items-right"},[t._v("点击这里清除选择")])])])]),t._l(t.appList,(function(e,a){return i("div",{key:a,staticClass:"body-item"},[i("div",{staticClass:"items"},[i("div",{staticClass:"items-left"},[t._v(t._s(e.title))]),e.url?i("a",{on:{click:function(i){return t.selected_url(e.url)}}},[i("div",{staticClass:"items-right"},[t._v("选中")])]):t._e(),e.sub&&""!=e.module?i("a",{on:{click:function(i){return t.$refs.createModal.navigations(e.title,e.module,t.cfromModel)}}},[i("div",{staticClass:"items-right"},[t._v("详细")])]):t._e()])])})),i("function-details",{ref:"createModal",on:{ok:t.handleDetailOk}})],2)],1)},r=[],o=i("a0e0"),n=i("8749"),l={name:"FunctionLibrary",components:{functionDetails:n["default"]},data:function(){return{title:"插入连接或者关键词",title2:"小区功能库",visible:!1,index_str:"",cfromModel:"",confirmLoading:!1,appList:{title:"",url:""}}},methods:{FunctionLibrary:function(t,e){this.title="插入连接或者关键词",this.index_str=t,this.visible=!0,this.cfromModel=e||"",this.AppLists()},AppLists:function(){var t=this,e=o["a"].getHotWordFuncApplication;"HouseHotWordManage"==this.cfromModel&&(e=o["a"].getHotWordFuncApplication),this.request(e).then((function(e){console.log("res",e),t.appList=e.list}))},selected_url:function(t){this.$emit("ok",t,this.index_str,this.cfromModel),this.visible=!1},handleCancel:function(){this.visible=!1},handleDetailOk:function(t){console.log("url",t,"index_str",this.index_str),this.$emit("ok",t,this.index_str,this.cfromModel),this.visible=!1}}},s=l,c=(i("4c94"),i("0c7c")),d=Object(c["a"])(s,a,r,!1,null,null,null);e["default"]=d.exports},"5cf7":function(t,e,i){},7518:function(t,e,i){"use strict";i("5cf7")},8749:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:800,height:600,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-table",{attrs:{columns:t.columns,"data-source":t.navigationList,pagination:t.pagination,loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,a){return i("span",{},[i("a",{on:{click:function(e){return t.selected_url(a.url)}}},[t._v("选中")])])}}])})],1)},r=[],o=(i("ac1f"),i("841c"),i("a0e0")),n=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"title",key:"title"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"FunctionDetails",data:function(){return{title:"",visible:!1,confirmLoading:!1,navigationList:[],pagination:{current:1,pageSize:10,total:10},search:{page:1},page:1,xtype:"",loading:!1,cfromModel:""}},computed:{columns:function(){return n}},methods:{navigations:function(t,e,i){this.title="【"+t+"】详细",this.visible=!0,this.xtype=e,this.cfromModel=i||"",this.getList()},getList:function(){var t=this;t.loading=!0,t.search["xtype"]=t.xtype,t.search["page"]=t.pagination.current;var e=o["a"].getHotWordFuncApplicationDetails;"HouseHotWordManage"==this.cfromModel&&(e=o["a"].getHotWordFuncApplicationDetails),this.request(e,this.search).then((function(e){t.loading=!1,t.navigationList=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){var e=this;t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1}}},s=l,c=i("0c7c"),d=Object(c["a"])(s,a,r,!1,null,null,null);e["default"]=d.exports},"8d18":function(t,e,i){"use strict";i("a26b")},"97bb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-card",{attrs:{title:t.title2}},[i("div",[i("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块数据，或者点击“详细”选择具体的内容数据 ")]),i("div",{staticClass:"header-title"},[t._v(" 请选择模块： "),i("a",{on:{click:function(e){return t.selected_url("")}}},[i("div",{staticClass:"items-right"},[t._v("点击这里清除选择")])])])]),t._l(t.appList,(function(e,a){return i("div",{key:a,staticClass:"body-item"},[i("div",{staticClass:"items"},[i("div",{staticClass:"items-left"},[t._v(t._s(e.categoryname))]),i("a",{on:{click:function(i){return t.selected_url(e)}}},[i("div",{staticClass:"items-right"},[t._v("选中")])]),i("a",{on:{click:function(i){return t.$refs.createModal.navigations(e,t.xtype,t.cfromModel)}}},[i("div",{staticClass:"items-right"},[t._v("详细")])])])])})),i("material-details",{ref:"createModal",on:{ok:t.handleDetailOk}})],2)],1)},r=[],o=i("43bb"),n=i("dc55"),l={name:"HotwordMaterialLibrary",components:{materialDetails:n["default"]},data:function(){return{title:"关键词素材库",title2:"",visible:!1,index_str:"",cfromModel:"",confirmLoading:!1,appList:{title:"",url:""},xtype:1}},methods:{materialLibrary:function(t,e,i){this.title="关键词素材库",this.title2="关键词素材库",this.index_str=e,this.xtype=t,1==this.xtype?this.title2="文字回复素材库":2==this.xtype?this.title2="音频回复素材库":3==this.xtype&&(this.title2="图片回复素材库"),this.visible=!0,this.cfromModel=i||"",this.AppLists()},AppLists:function(){var t=this,e=o["a"].getHotWordMaterialLibrary,i={xtype:this.xtype};this.request(e,i).then((function(e){console.log("res",e),t.appList=e.list}))},selected_url:function(t){this.$emit("ok",t,"material_category",this.index_str),this.visible=!1},handleCancel:function(){this.visible=!1},handleDetailOk:function(t){this.$emit("ok",t,"material_content",this.index_str),this.visible=!1}}},s=l,c=(i("7518"),i("0c7c")),d=Object(c["a"])(s,a,r,!1,null,null,null);e["default"]=d.exports},a26b:function(t,e,i){},a7ce:function(t,e,i){"use strict";i("2d39")},c7eb:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("b636"),i("944a"),i("0c47"),i("23dc"),i("3410"),i("159b"),i("b0c0"),i("131a"),i("fb6a");var a=i("53ca");function r(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
r=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,n=Object.defineProperty||function(t,e,i){t[e]=i.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function u(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,i){return t[e]=i}}function h(t,e,i,a){var r=e&&e.prototype instanceof y?e:y,o=Object.create(r.prototype),l=new $(a||[]);return n(o,"_invoke",{value:H(t,i,l)}),o}function p(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",m="suspendedYield",g="executing",v="completed",_={};function y(){}function b(){}function x(){}var w={};u(w,s,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(E([])));k&&k!==i&&o.call(k,s)&&(w=k);var C=x.prototype=y.prototype=Object.create(w);function M(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function i(r,n,l,s){var c=p(t[r],t,n);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==Object(a["a"])(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,l,s)}),(function(t){i("throw",t,l,s)})):e.resolve(u).then((function(t){d.value=t,l(d)}),(function(t){return i("throw",t,l,s)}))}s(c.arg)}var r;n(this,"_invoke",{value:function(t,a){function o(){return new e((function(e,r){i(t,a,e,r)}))}return r=r?r.then(o,o):o()}})}function H(e,i,a){var r=f;return function(o,n){if(r===g)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw n;return{value:t,done:!0}}for(a.method=o,a.arg=n;;){var l=a.delegate;if(l){var s=j(l,a);if(s){if(s===_)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===f)throw r=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=g;var c=p(e,i,a);if("normal"===c.type){if(r=a.done?v:m,c.arg===_)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=v,a.method="throw",a.arg=c.arg)}}}function j(e,i){var a=i.method,r=e.iterator[a];if(r===t)return i.delegate=null,"throw"===a&&e.iterator["return"]&&(i.method="return",i.arg=t,j(e,i),"throw"===i.method)||"return"!==a&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+a+"' method")),_;var o=p(r,e.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,_;var n=o.arg;return n?n.done?(i[e.resultName]=n.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=t),i.delegate=null,_):n:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,_)}function W(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(W,this),this.reset(!0)}function E(e){if(e||""===e){var i=e[s];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function i(){for(;++r<e.length;)if(o.call(e,r))return i.value=e[r],i.done=!1,i;return i.value=t,i.done=!0,i};return n.next=n}}throw new TypeError(Object(a["a"])(e)+" is not iterable")}return b.prototype=x,n(C,"constructor",{value:x,configurable:!0}),n(x,"constructor",{value:b,configurable:!0}),b.displayName=u(x,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,d,"GeneratorFunction")),t.prototype=Object.create(C),t},e.awrap=function(t){return{__await:t}},M(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,i,a,r,o){void 0===o&&(o=Promise);var n=new S(h(t,i,a,r),o);return e.isGeneratorFunction(i)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},M(C),u(C,d,"Generator"),u(C,s,(function(){return this})),u(C,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),i=[];for(var a in e)i.push(a);return i.reverse(),function t(){for(;i.length;){var a=i.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=E,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var i in this)"t"===i.charAt(0)&&o.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function a(a,r){return l.type="throw",l.arg=e,i.next=a,r&&(i.method="next",i.arg=t),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r],l=n.completion;if("root"===n.tryLoc)return a("end");if(n.tryLoc<=this.prev){var s=o.call(n,"catchLoc"),c=o.call(n,"finallyLoc");if(s&&c){if(this.prev<n.catchLoc)return a(n.catchLoc,!0);if(this.prev<n.finallyLoc)return a(n.finallyLoc)}else if(s){if(this.prev<n.catchLoc)return a(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return a(n.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var n=r?r.completion:{};return n.type=t,n.arg=e,r?(this.method="next",this.next=r.finallyLoc,_):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),O(i),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var r=a.arg;O(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,i,a){return this.delegate={iterator:E(e),resultName:i,nextLoc:a},"next"===this.method&&(this.arg=t),_}},e}},dc55:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:850,height:650,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-table",{attrs:{columns:t.columns,"data-source":t.navigationList,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.material_id}},on:{change:t.tableChange},scopedSlots:t._u([{key:"xcontentaction",fn:function(e,a,r){return i("div",{},[1==a.xtype?i("div",[t._v(" "+t._s(a.xcontent)+" ")]):2==a.xtype?i("div",[i("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v(t._s(a.xname))]),i("a",{attrs:{href:a.audio_url,target:"_blank"}},[t._v(t._s(a.audio_url))])]):3==a.xtype?i("div",{staticClass:"previewimg"},t._l(a.word_imgs,(function(t,e){return i("img",{staticStyle:{height:"80px","margin-right":"10px"},attrs:{src:t,preview:"1"}})})),0):t._e()])}},{key:"action",fn:function(e,a){return i("span",{},[i("a",{on:{click:function(e){return t.selected_url(a)}}},[t._v("选中")])])}}])})],1)},r=[],o=(i("ac1f"),i("841c"),i("43bb")),n=[{title:"编号",dataIndex:"material_id",key:"material_id"},{title:"回复内容",dataIndex:"xcontent",key:"xcontent",width:450,scopedSlots:{customRender:"xcontentaction"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"HotwordMaterialDetails",data:function(){return{title:"",category:{},visible:!1,confirmLoading:!1,navigationList:[],pagination:{current:1,pageSize:20,total:20},search:{page:1},page:1,xtype:"",loading:!1,cfromModel:""}},computed:{columns:function(){return n}},methods:{navigations:function(t,e,i){this.title="【"+t.categoryname+"】详细",this.category=t,this.visible=!0,this.xtype=e,this.cfromModel=i||"",this.getList()},getList:function(){var t=this;t.loading=!0,t.search.cate_id=t.category.cate_id,t.search.xtype=t.xtype,t.search.page=t.pagination.current;var e=o["a"].getHotWordMaterialLibraryDetails;t.request(e,t.search).then((function(e){t.loading=!1,t.navigationList=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:20}))},tableChange:function(t){var e=this;t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.category={},this.visible=!1}}},s=l,c=(i("a7ce"),i("0c7c")),d=Object(c["a"])(s,a,r,!1,null,"2f614eeb",null);e["default"]=d.exports},f8bf:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-drawer",{attrs:{title:t.xtitle,width:900,visible:t.showvisible},on:{close:function(e){return t.handleSubCancel()}}},[i("a-form",{attrs:{form:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[i("div",{staticClass:"editword",staticStyle:{"margin-top":"20px","margin-left":"50px"},attrs:{required:""}},[i("a-form-item",{attrs:{label:"关键词名称"}},[i("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入关键词名称(30字以内)","max-length":30},model:{value:t.postdata.wordname,callback:function(e){t.$set(t.postdata,"wordname","string"===typeof e?e.trim():e)},expression:"postdata.wordname"}})],1),i("a-form-item",{attrs:{label:"关键词类型",required:""}},[i("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择关键类型"},on:{change:t.xtypeChange},model:{value:t.postdata.xtype,callback:function(e){t.$set(t.postdata,"xtype",e)},expression:"postdata.xtype"}},t._l(t.hotWordType,(function(e){return i("a-select-option",{attrs:{value:e.xtype}},[t._v(" "+t._s(e.xtitle)+" ")])})),1)],1),1*t.postdata.xtype>0?i("div",[i("a-form-item",{attrs:{label:"类型",required:""}},[i("a-radio-group",{staticStyle:{"margin-left":"10px"},model:{value:t.postdata.comfrom,callback:function(e){t.$set(t.postdata,"comfrom",e)},expression:"postdata.comfrom"}},[i("a-radio",{attrs:{value:1}},[t._v("素材库")]),i("a-radio",{attrs:{value:0}},[t._v("新增")])],1)],1)],1):t._e(),0===t.postdata.xtype||"0"===t.postdata.xtype?i("div",[i("a-form-item",{attrs:{label:"链接",required:""}},[t._l(t.wordurllist,(function(e,a){return i("div",{key:a},[i("div",[i("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择链接"},model:{value:t.wordurllist[a].jumpurl,callback:function(e){t.$set(t.wordurllist[a],"jumpurl","string"===typeof e?e.trim():e)},expression:"wordurllist[index].jumpurl"}}),i("a-button",{staticClass:"ant-form-text",on:{click:function(e){return t.setLinkBases(a)}}},[t._v(" 功能库选择 ")]),a>0?i("a-button",{staticStyle:{"margin-left":"20px"},on:{click:function(e){return t.duration_reduce(a)}}},[t._v(" 删除 ")]):t._e()],1),i("div",[i("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请填写显示名称(6字以内)","max-length":6},model:{value:t.wordurllist[a].showtitle,callback:function(e){t.$set(t.wordurllist[a],"showtitle","string"===typeof e?e.trim():e)},expression:"wordurllist[index].showtitle"}}),t._v(" "),0==a?i("span",[t._v("  最多可添加10个")]):t._e()],1)])})),i("div",{staticStyle:{"text-align":"center","margin-top":"15px","margin-bottom":"150px"}},[t.show_add_button?i("a-button",{on:{click:t.duration_add}},[t._v(" 添加 ")]):t._e()],1)],2)],1):t._e(),1*t.postdata.xtype>0&&1*t.postdata.comfrom==0?i("div",[1===t.postdata.xtype||"1"===t.postdata.xtype?i("div",[i("a-form-item",{attrs:{label:"回复内容",extra:"回复的内容文字不能超过120个",required:""}},[i("a-textarea",{staticStyle:{width:"360px",height:"160px"},attrs:{"max-length":120},on:{change:t.onTextAreaChange},model:{value:t.postdata.xcontent,callback:function(e){t.$set(t.postdata,"xcontent","string"===typeof e?e.trim():e)},expression:"postdata.xcontent"}}),i("span",{staticStyle:{"margin-left":"10px"}},[t._v("已输入 "+t._s(t.postdata.xcontent.length)+" 个字")])],1)],1):t._e(),2===t.postdata.xtype||"2"===t.postdata.xtype?i("div",[i("a-form-item",{attrs:{label:"音频名称",extra:"音频名称30个字以内"}},[i("a-input",{staticStyle:{width:"310px"},attrs:{"max-length":30,placeholder:"30个字以内"},model:{value:t.postdata.xname,callback:function(e){t.$set(t.postdata,"xname","string"===typeof e?e.trim():e)},expression:"postdata.xname"}})],1),i("a-form-item",{attrs:{label:"回复音频",extra:"上传的音频不能超过2M,只支持mp3格式",required:""}},[i("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/community/village_api.ContentEngine/uploadVideo?pathname=soundAudio",multiple:!1,"file-list":t.fileAudioList,"before-upload":t.audioBeforeUpload},on:{change:t.audioUploadChange}},[i("a-button",[i("a-icon",{attrs:{type:"upload"}}),t._v("上传文件 ")],1)],1)],1)],1):t._e(),3===t.postdata.xtype||"3"===t.postdata.xtype?i("div",[i("a-form-item",{staticClass:"uploadFile",attrs:{label:"回复图片",required:""}},[i("a-upload",{attrs:{action:"/v20/public/index.php/community/village_api.ContentEngine/uploadFile?pathname=hotword","list-type":"picture-card","file-list":t.fileList,"before-upload":t.beforeUpload},on:{preview:t.handlePreview,change:t.handleUploadChange}},[t.fileList.length<3?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v(" 上传图片 ")])],1):t._e()]),i("div",{staticClass:"desc",staticStyle:{transform:"translateY(-18px)"}},[t._v(" 已上传"+t._s(t.fileList.length)+"张, 最多上传3张图片，上传的图片不能超过2M,只支持jpg,png,jpeg,gif ")]),i("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handlePreviewCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)],1):t._e()]):1*t.postdata.xtype>0?i("div",[i("a-button",{staticStyle:{"margin-left":"60px"},on:{click:function(e){return t.$refs.materialModal.materialLibrary(t.postdata.xtype,0,"hotWordMaterialLibrary")}}},[t._v(" 从素材库选择 ")]),"material_content"==t.material_type?i("div",{staticStyle:{"margin-top":"20px"}},[i("a-form-item",{attrs:{label:"选中的素材内容"}},[t.is_del_material_info?i("div",{staticStyle:{width:"650px",display:"inline-block"}},[i("span",{staticStyle:{color:"red"}},[t._v("所选素材内容数据已被删除，请重新选择！")])]):1==t.material_info.xtype?i("div",{staticStyle:{width:"650px",display:"inline-block"}},[t._v(" "+t._s(t.material_info.xcontent)+" ")]):2==t.material_info.xtype?i("div",{staticStyle:{width:"650px",display:"inline-block","word-break":"break-all"}},[i("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v(t._s(t.material_info.xname))]),i("a",{attrs:{href:t.material_info.audio_url,target:"_blank"}},[t._v(t._s(t.material_info.audio_url))])]):3==t.material_info.xtype?i("div",{staticClass:"previewimg"},t._l(t.material_info.word_imgs,(function(t,e){return i("img",{staticStyle:{height:"80px","margin-right":"10px"},attrs:{src:t,preview:"1"}})})),0):t._e()])],1):"material_category"==t.material_type?i("div",{staticStyle:{"margin-top":"20px"}},[i("a-form-item",{attrs:{label:"选中的素材分类"}},[t.is_del_material_info?i("div",{staticStyle:{width:"600px",display:"inline-block"}},[i("span",{staticStyle:{color:"red"}},[t._v("所选素材分类数据已被删除，请重新选择！")])]):t.categoryname?i("div",{staticStyle:{width:"600px",display:"inline-block"}},[i("span",[t._v(t._s(t.categoryname))])]):t._e()])],1):t._e()],1):t._e()],1),i("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"30px",background:"#fff",textAlign:"center",zIndex:1,height:"180px"}},[i("a-button",{style:{marginRight:"90px"},on:{click:function(e){return t.handleSubCancel()}}},[t._v("取消")]),i("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v("提交")])],1)]),i("function-library",{ref:"funcModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}}),i("material-library",{ref:"materialModal",attrs:{height:800,width:1200},on:{ok:t.handleMaterialOk}})],1)},r=[],o=i("c7eb"),n=i("1da1"),l=(i("d3b7"),i("d81d"),i("159b"),i("a434"),i("43bb")),s=i("4e96"),c=i("97bb");function d(t){return new Promise((function(e,i){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return e(a.result)},a.onerror=function(t){return i(t)}}))}var u={name:"hotWordManageEditword",components:{FunctionLibrary:s["default"],materialLibrary:c["default"]},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:17},form:this.$form.createForm(this),xtitle:"新建关键词",word_id:0,showvisible:!1,postdata:{wordname:"",xtype:"0",comfrom:0,xcontent:"",xname:""},wordurllist:[{showtitle:"",jumpurl:""}],rule_first:[],rule_last:[],show_add_button:!1,hotWordType:[{xtype:"0",xtitle:"功能链接"},{xtype:"1",xtitle:"文字回复"},{xtype:"2",xtitle:"音频回复"},{xtype:"3",xtitle:"图片回复"}],fileList:[],fileAudioList:[],previewVisible:!1,previewImage:"",word_imgs:[],audio_url:"",material_id:0,cate_id:0,categoryname:"",material_info:{},material_type:"",is_del_material_info:!1}},methods:{editword:function(t){this.word_id=0,this.is_del_material_info=!1,t&&t>0?(this.word_id=t,this.xtitle="编辑查看",this.getOneHotWord()):(this.postdata={wordname:"",xtype:"0",comfrom:0,xcontent:"",xname:""},this.wordurllist=[{showtitle:"",jumpurl:""}],this.showvisible=!0,this.wordurllist.length<10&&(this.show_add_button=!0))},getOneHotWord:function(){var t=this,e={word_id:this.word_id};this.request(l["a"].getOneHouseHotWord,e).then((function(e){t.postdata.wordname=e.hotword.wordname,t.postdata.xtype=e.hotword.xtype,t.postdata.comfrom=e.hotword.comfrom,t.postdata.xcontent=e.hotword.xcontent,t.postdata.xname=e.hotword.showtitle,e.wordurllist.length>0&&(t.wordurllist=e.wordurllist),t.showvisible=!0,t.wordurllist.length<10&&(t.show_add_button=!0),2!=t.postdata.xtype&&"2"!=t.postdata.xtype||!e.hotword.audio_url||(t.audio_url=e.hotword.audio_url,t.fileAudioList.push({uid:"audio"+e.hotword.id,url:t.audio_url,status:"done",name:t.audio_url})),e.hotword.comfrom>0&&(t.material_id=e.hotword.material_id,t.cate_id=e.hotword.cate_id,t.categoryname=e.hotword.categoryname,e.hotword.material_info?(t.material_info=e.hotword.material_info,t.is_del_material_info=!1):t.is_del_material_info=!0,t.material_type=e.hotword.material_type),3!=t.postdata.xtype&&"3"!=t.postdata.xtype||!e.hotword.word_imgs||(t.word_imgs=e.hotword.word_imgs,t.word_imgs.map((function(e,i){t.fileList.push({uid:"img"+i,url:e,status:"done",name:"img"+i})})))}))},handleOk:function(t,e,i){this.wordurllist[e].jumpurl=t},handleMaterialOk:function(t,e,i){this.material_type=e,t&&(this.material_info=t),this.material_info.xtype=1*this.material_info.xtype,this.is_del_material_info=!1,"material_category"==e?(this.material_id=0,this.cate_id=1*t.cate_id,this.categoryname=t.categoryname):"material_content"==e&&(this.material_id=1*t.material_id,this.cate_id=1*t.cate_id,this.categoryname="")},xtypeChange:function(t){console.log("xtypeChange",t),t*=1,this.material_info&&this.material_info.xtype&&this.material_info.xtype!=t&&(this.material_id=0,this.cate_id=0,this.categoryname="",this.material_info={},this.material_type="")},onTextAreaChange:function(t){},handleSubmit:function(){var t=this,e=t.postdata;if(t.postdata.wordname.length<1)return t.$message.error("关键词名称不能为空！"),!1;var i=!1,a=1*e.xtype,r=1*e.comfrom;if(0==a||"0"===a){if(t.wordurllist.forEach((function(t,e){(t.showtitle.length<1||t.jumpurl.length<1||0!=t.jumpurl.indexOf("http"))&&(i=!0)})),i)return t.$message.error("请将链接的每项字段都正确的填写完整！"),!1}else if(1==a||"1"===a){if(1==r&&t.cate_id<1&&t.material_id<1)return t.$message.error("请从素材库中选择文字回复数据！"),!1;if(r<1&&(!e.xcontent||e.xcontent.length<1))return t.$message.error("请填写回复内容！"),!1}else if(2==a||"2"===a){if(1==r&&t.cate_id<1&&t.material_id<1)return t.$message.error("请从素材库中选择音频回复数据！"),!1;if(r<1&&(!t.audio_url||t.audio_url.length<10))return t.$message.error("请上传回复音频文件！"),!1}else if(3==a||"3"===a){if(1==r&&t.cate_id<1&&t.material_id<1)return t.$message.error("请从素材库中选择图片回复数据！"),!1;if(r<1&&(!t.word_imgs||t.word_imgs.length<1))return t.$message.error("请上传回复图片文件！"),!1}t.confirmLoading=!0,e.word_id=t.word_id,e.wordurllist=t.wordurllist,e.word_imgs=t.word_imgs,e.audio_url=t.audio_url,e.material_id=t.material_id,e.cate_id=t.cate_id,e.material_info=t.material_info,console.log(e),t.request(l["a"].saveHotWordData,e).then((function(e){t.confirmLoading=!1,t.word_id>0?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),t.$emit("ok"),t.handleSubCancel()}))},setLinkBases:function(t){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(i){console.log("handleOk",i),e.url=i.url,console.log("123123",i.url),e.$nextTick((function(){e.wordurllist[t].jumpurl=e.url}))}})},handleSubCancel:function(){this.word_id=0,this.showvisible=!1,this.confirmLoading=!1,this.postdata={wordname:"",xtype:"0",comfrom:0,xcontent:"",xname:""},this.wordurllist=[{showtitle:"",jumpurl:""}],this.fileList=[],this.fileAudioList=[],this.previewVisible=!1,this.previewImage="",this.word_imgs=[],this.audio_url="",this.material_id=0,this.cate_id=0,this.categoryname="",this.material_info={},this.material_type="",this.is_del_material_info=!1},duration_add:function(){this.wordurllist.length>=9&&(this.show_add_button=!1),this.wordurllist.push({showtitle:"",jumpurl:""})},duration_reduce:function(t){this.wordurllist.splice(t,1),this.wordurllist.length<10?this.show_add_button=!0:this.show_add_button=!1},handlePreview:function(t){var e=this;return Object(n["a"])(Object(o["a"])().mark((function i(){return Object(o["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,d(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},handleUploadChange:function(t){var e=t.fileList,i=this;i.fileList=e,i.word_imgs=[],i.fileList.map((function(t){t.response&&t.response.data&&t.response.data.url?i.word_imgs.push(t.response.data.url):void 0!=t.url&&t.url&&i.word_imgs.push(t.url)}))},audioUploadChange:function(t){console.log("fileinfo",t),this.fileAudioList=t.fileList,t.file.response&&t.file.response.data&&t.file.response.data.url&&(this.audio_url=t.file.response.data.url,this.fileAudioList[0].url=this.audio_url),console.log("fileAudioList",this.fileAudioList),"removed"==t.file.status&&t.fileList.length<1&&(this.audio_url="")},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type||"image/jpg"===t.type;e||this.$message.error("您只能上传jpg,png,jpeg,gif文件!");var i=t.size/1024/1024<2;return i||this.$message.error("图像必须小于2MB!"),e&&i},audioBeforeUpload:function(t){console.log("mfile",t);var e=!1;"audio/mpeg"!=t.type&&"audio/x-mpeg"!=t.type&&"audio/mp3"!=t.type&&"audio/x-mpeg-3"!=t.type&&"audio/mpg"!=t.type&&"audio/x-mp3"!=t.type&&"audio/mpeg3"!=t.type&&"audio/x-mpeg3"!=t.type&&"audio/x-mpg"!=t.type&&"audio/x-mpegaudio"!=t.type||(e=!0),e||this.$message.error("请上传mp3格式的音频文件!");var i=t.size/1024/1024<2;return i||this.$message.error("音频文件大小不要超过 2MB!"),e&&i},handlePreviewCancel:function(){this.previewVisible=!1}}},h=u,p=(i("8d18"),i("0c7c")),f=Object(p["a"])(h,a,r,!1,null,"4a3f9412",null);e["default"]=f.exports}}]);