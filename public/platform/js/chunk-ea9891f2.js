(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea9891f2","chunk-112c6452","chunk-112c6452"],{"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("d3b7");function r(t,e,i,r,o,a,n){try{var s=t[a](n),l=s.value}catch(c){return void i(c)}s.done?e(l):Promise.resolve(l).then(r,o)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(o,a){var n=t.apply(e,i);function s(t){r(n,o,a,s,l,"next",t)}function l(t){r(n,o,a,s,l,"throw",t)}s(void 0)}))}}},2760:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[i("a-row",[i("a-col",{attrs:{span:16}},[i("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:t.L("请输入")},on:{search:t.onSearch},model:{value:t.queryParams.name,callback:function(e){t.$set(t.queryParams,"name",e)},expression:"queryParams.name"}}),i("a-button",{staticClass:"m-10",attrs:{type:"primary"},on:{click:t.onSearch}},[t._v(" "+t._s(t.L("搜索"))+" ")])],1),i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[i("a-button",{staticClass:"m-10",attrs:{type:"danger"},on:{click:t.onDelete}},[t._v(" "+t._s(t.L("删除"))+" ")]),i("a-button",{staticClass:"m-10",attrs:{type:"primary"},on:{click:t.onAdd}},[t._v(" "+t._s(t.L("新建"))+" ")])],1)],1),i("a-table",{attrs:{columns:t.columns,rowKey:"id","data-source":t.list,"row-selection":{selectedRowKeys:t.selectedRowKeys,onSelect:t.onSelect,onSelectAll:t.onSelectAll},pagination:t.pagination},scopedSlots:t._u([{key:"cover",fn:function(e,r){return i("span",{},[i("img",{staticClass:"img pointer",attrs:{src:r.cover},on:{click:function(e){return t.handlePreview({url:r.cover})}}})])}},{key:"material_url",fn:function(e,r){return i("span",{staticClass:"pointer cr-primary no-wrap",on:{click:function(e){return t.viewItem(r)}}},[t._v(" "+t._s(t.L("点击播放"))+" ")])}},{key:"action",fn:function(e,r){return i("span",{},[i("a-button",{attrs:{type:"link"},on:{click:function(e){return t.delItem(r)}}},[t._v(t._s(t.L("删除")))]),i("a-button",{attrs:{type:"link"},on:{click:function(e){return t.editItem(r)}}},[t._v(t._s(t.L("编辑")))])],1)}}])}),i("a-modal",{attrs:{visible:t.modalVisible,title:t.modalTitle,destroyOnClose:!0,width:"60%",bodyStyle:{maxHeight:"650px",overflowY:"auto"},footer:"viewVideo"==t.modalType?null:void 0},on:{cancel:t.handleCancel,ok:t.handleOk}},["viewVideo"==t.modalType?i("section",[i("video",{staticStyle:{width:"100%","max-height":"400px"},attrs:{src:t.modalForm.material_url,controls:"",autoplay:""}})]):i("section",[i("a-form-model",{attrs:{model:t.modalForm,"label-col":{span:4},"wrapper-col":{span:16}}},["addVideo"==t.modalType?i("section",[i("a-form-model-item",{attrs:{label:t.L("视频名称"),required:""}},[i("a-input",{attrs:{"allow-clear":"",placeholder:t.L("请输入")},model:{value:t.modalForm.material_name,callback:function(e){t.$set(t.modalForm,"material_name",e)},expression:"modalForm.material_name"}})],1),i("a-form-model-item",{staticClass:"videos",attrs:{label:t.L("上传视频"),help:t.L("视频上传不可以大于100M，必须是MP4文件"),required:""}},[t.modalForm.material_url?i("div",[i("video",{staticStyle:{width:"60%","max-height":"200px"},attrs:{src:t.modalForm.material_url,controls:""}})]):t._e(),i("a-upload",{attrs:{name:"video",action:"/v20/public/index.php/common/common.UploadFile/uploadVideos","file-list":t.videoUploadList,multiple:!1,showUploadList:!t.modalForm.material_url,"before-upload":t.beforeUploadFile,data:{upload_dir:"/douyin/video"}},on:{change:t.handleChangeVideo}},[i("div",[i("a-button",[i("a-icon",{attrs:{type:"upload"}}),t._v(" "+t._s(t.L("上传视频"))+" ")],1)],1)])],1),i("a-form-model-item",{attrs:{label:t.L("上传封面"),help:t.L("封面未设置则默认读取视频第一帧作为封面图")}},[i("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",name:"reply_pic","list-type":"picture-card",data:{upload_dir:""},"file-list":t.videoCoverList},on:{preview:t.handlePreview,change:function(e){return t.handleUploadImgChange(e,"cover","videoCoverList")}}},[i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v(t._s(t.L("上传封面")))])],1)])],1),i("a-form-model-item",{attrs:{label:t.L("转发文案"),required:""}},[i("a-textarea",{attrs:{"allow-clear":"",placeholder:t.L("请输入"),autoSize:{minRows:2,maxRows:6}},model:{value:t.modalForm.share_desc,callback:function(e){t.$set(t.modalForm,"share_desc",e)},expression:"modalForm.share_desc"}})],1),i("a-form-model-item",{attrs:{label:t.L("话题"),help:t.L("多个话题请以英文分号隔开")}},[i("a-input",{attrs:{"allow-clear":"",placeholder:t.L("请输入")},model:{value:t.modalForm.topic,callback:function(e){t.$set(t.modalForm,"topic",e)},expression:"modalForm.topic"}})],1)],1):t._e()])],1)]),i("a-modal",{attrs:{width:"60%",bodyStyle:{maxHeight:"650px",overflowY:"auto"},visible:t.previewVisible,footer:null},on:{cancel:function(e){t.previewVisible=!1}}},[i("img",{staticClass:"mt-20",staticStyle:{width:"100%",height:"auto"},attrs:{src:t.previewImage}})])],1)},o=[],a=i("c7eb"),n=i("1da1"),s=i("5530"),l=(i("b0c0"),i("a15b"),i("c740"),i("b64b"),i("d81d"),i("99af"),i("4de4"),i("d3b7"),i("caad"),i("2532"),i("a434"),i("e49a")),c={data:function(){return{queryParams:{name:""},list:[],columns:[{title:this.L("名称"),dataIndex:"material_name"},{title:this.L("封面"),dataIndex:"cover",scopedSlots:{customRender:"cover"}},{title:this.L("视频"),dataIndex:"material_url",scopedSlots:{customRender:"material_url"}},{title:this.L("创建时间"),dataIndex:"create_time"},{title:this.L("操作"),key:"action",scopedSlots:{customRender:"action"}}],pagination:{pageSize:10,total:0,current:1,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},selectedRowKeys:[],modalVisible:!1,modalType:"",modalTitle:"",modalForm:"",fileloading:!1,videoUploadList:[],videoCoverList:[],previewVisible:!1,previewImage:""}},mounted:function(){this.getList()},methods:{getList:function(){var t=this,e={name:this.queryParams.name,page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(l["a"].getSourceMaterialLists,e).then((function(e){t.list=e.data,t.$set(t.pagination,"total",e.total)}))},onSearch:function(){this.$set(this.pagination,"current",1),this.getList()},onAdd:function(){this.modalType="addVideo",this.modalTitle=this.L("添加视频"),this.modalForm={id:"",material_name:"",material_url:"",material_type:"video",cover:"",share_desc:"",topic:""},this.modalVisible=!0},onDelete:function(){var t=this;this.selectedRowKeys.length?this.$confirm({title:this.L("确定要删除列表吗？"),centered:!0,onOk:function(){t.request(l["a"].delSourceMaterial,{ids:t.selectedRowKeys.join(",")}).then((function(e){t.$message.success(t.L("操作成功！")),t.selectedRowKeys=[],t.getList()}))},onCancel:function(){}}):this.$message.error(this.L("请选择要删除的列表"))},onSelect:function(t,e,i,r){var o=this.selectedRowKeys;if(e)o.push(t.id);else if(o.length){var a=o.findIndex((function(e){return e==t.id}));-1!=a&&this.$delete(o,a)}this.selectedRowKeys=JSON.parse(JSON.stringify(o))},onSelectAll:function(t,e,i){var r=i.map((function(t){return t.id})),o=this.selectedRowKeys;o=t?o.concat(r):o.concat(r).filter((function(t){return!r.includes(t)})),this.selectedRowKeys=JSON.parse(JSON.stringify(o))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.getList()},viewItem:function(t){this.modalType="viewVideo",this.modalTitle=this.L("视频查看"),this.modalForm={material_url:t.material_url},this.modalVisible=!0},editItem:function(t){this.modalType="addVideo",this.modalTitle=this.L("视频编辑"),this.modalForm=Object(s["a"])(Object(s["a"])({},t),{},{image_full_url:t.cover,video_full_url:t.material_url}),t.video_url&&(this.videoUploadList=[{uid:"video_url",name:t.material_url,status:"done",url:t.material_url}]),t.cover&&(this.videoCoverList=[{uid:"video_cover",name:t.cover,status:"done",url:t.cover}]),this.modalVisible=!0},delItem:function(t){var e=this;this.$confirm({title:this.L("确定要删除该条数据吗？"),centered:!0,onOk:function(){e.request(l["a"].delSourceMaterial,{ids:t.id}).then((function(i){if(e.$message.success(e.L("操作成功！")),e.selectedRowKeys.length){var r=e.selectedRowKeys.findIndex((function(e){return e==t.id}));-1!=r&&e.$delete(e.selectedRowKeys,r)}e.getList()}))},onCancel:function(){}})},beforeUploadFile:function(t){var e=t.type.toLowerCase();if(this.fileloading)return this.$message.warning(this.L("当前还有文件上传中，请等候上传完成!")),!1;if(-1==e.indexOf("mp4"))return this.$message.error(this.L("仅支持mp4文件上传!")),!1;var i=t.size/1024/1024<100;return i?void 0:(this.$message.error("视频上传最大支持100MB!"),!1)},handleChangeVideo:function(t){if(t.file&&!t.file.status&&this.fileloading)return!1;if(this.modalForm.material_url="","uploading"===t.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.videoUploadList=[t.file]}if("uploading"!==t.file.status&&(this.fileloading=!1),t.file&&t.file.response){var e=t.file.response;1e3===e.status?(this.videoUploadList=[],this.modalForm=Object(s["a"])(Object(s["a"])({},this.modalForm),{},{material_url:e.data.video_url,cover:this.modalForm.cover||e.data.video_image}),this.videoUploadList=[{uid:"video_url",name:this.modalForm.material_url,status:"done",url:this.modalForm.material_url}],this.$message.success(this.L("上传成功"))):(this.videoUploadList=[],e.msg&&this.$message.error(e.msg))}},handleCancel:function(){this.modalVisible=!1,this.videoUploadList=[],this.videoCoverList=[],this.modalType="",this.modalTitle="",this.modalForm={}},handleOk:function(){"addVideo"==this.modalType&&this.addVideo()},addVideo:function(){var t=this;if(this.modalForm.material_name)if(this.modalForm.material_url)if(this.modalForm.share_desc){var e={id:this.modalForm.id,material_name:this.modalForm.material_name,material_url:this.modalForm.material_url,material_type:this.modalForm.material_type,cover:this.modalForm.cover,share_desc:this.modalForm.share_desc,topic:this.modalForm.topic};this.request(l["a"].saveSourceMaterial,e).then((function(e){t.$message.success(t.L("操作成功")),t.getList(),t.handleCancel()}))}else this.$message.error(this.L("请输入转发文案"));else this.$message.error(this.L("请上传视频"));else this.$message.error(this.L("请输入视频名称"))},handleUploadImgChange:function(t,e,i){var r=t.fileList;if(this[i]=r,r.length>0){var o=r.length-1;if("done"==this[i][o].status){var a=this[i][o].response.data;this.$set(this.modalForm,e,a),this[i][0].uid=e,this[i][0].name=a,this[i][0].status="done",this[i][0].url=a,r.length>1&&this[i].splice(0,1)}}else this.$set(this.modalForm,e,"")},handlePreview:function(t){var e=this;return Object(n["a"])(Object(a["a"])().mark((function i(){return Object(a["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,u(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()}}};function u(t){return new Promise((function(e,i){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return i(t)}}))}var d=c,h=(i("35d9"),i("fb3b"),i("0c7c")),m=Object(h["a"])(d,r,o,!1,null,"2d50c8d0",null);e["default"]=m.exports},"35d9":function(t,e,i){"use strict";i("db72")},"4e9a":function(t,e,i){},c7eb:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("b636"),i("944a"),i("0c47"),i("23dc"),i("3410"),i("159b"),i("b0c0"),i("131a"),i("fb6a");var r=i("53ca");function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return e};var t,e={},i=Object.prototype,a=i.hasOwnProperty,n=Object.defineProperty||function(t,e,i){t[e]=i.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,i){return t[e]=i}}function h(t,e,i,r){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),s=new j(r||[]);return n(a,"_invoke",{value:C(t,i,s)}),a}function m(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",p="suspendedYield",v="executing",y="completed",g={};function w(){}function L(){}function b(){}var _={};d(_,l,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(P([])));S&&S!==i&&a.call(S,l)&&(_=S);var F=b.prototype=w.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function i(o,n,s,l){var c=m(t[o],t,n);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==Object(r["a"])(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,s,l)}),(function(t){i("throw",t,s,l)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return i("throw",t,s,l)}))}l(c.arg)}var o;n(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){i(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function C(e,i,r){var o=f;return function(a,n){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw n;return{value:t,done:!0}}for(r.method=a,r.arg=n;;){var s=r.delegate;if(s){var l=A(s,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var c=m(e,i,r);if("normal"===c.type){if(o=r.done?y:p,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=y,r.method="throw",r.arg=c.arg)}}}function A(e,i){var r=i.method,o=e.iterator[r];if(o===t)return i.delegate=null,"throw"===r&&e.iterator["return"]&&(i.method="return",i.arg=t,A(e,i),"throw"===i.method)||"return"!==r&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=m(o,e.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,g;var n=a.arg;return n?n.done?(i[e.resultName]=n.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=t),i.delegate=null,g):n:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,g)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function P(e){if(e||""===e){var i=e[l];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function i(){for(;++o<e.length;)if(a.call(e,o))return i.value=e[o],i.done=!1,i;return i.value=t,i.done=!0,i};return n.next=n}}throw new TypeError(Object(r["a"])(e)+" is not iterable")}return L.prototype=b,n(F,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:L,configurable:!0}),L.displayName=d(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,u,"GeneratorFunction")),t.prototype=Object.create(F),t},e.awrap=function(t){return{__await:t}},k(O.prototype),d(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,i,r,o,a){void 0===a&&(a=Promise);var n=new O(h(t,i,r,o),a);return e.isGeneratorFunction(i)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},k(F),d(F,u,"Generator"),d(F,l,(function(){return this})),d(F,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),i=[];for(var r in e)i.push(r);return i.reverse(),function t(){for(;i.length;){var r=i.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var i in this)"t"===i.charAt(0)&&a.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function r(r,o){return s.type="throw",s.arg=e,i.next=r,o&&(i.method="next",i.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],s=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=a.call(n,"catchLoc"),c=a.call(n,"finallyLoc");if(l&&c){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=t,n.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),E(i),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var o=r.arg;E(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,i,r){return this.delegate={iterator:P(e),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}},db72:function(t,e,i){},e49a:function(t,e,i){"use strict";var r={getActivityList:"/douyin/merchant.DouyinActivity/getActivityList",setActivityStatus:"/douyin/merchant.DouyinActivity/setActivityStatus",delActivity:"/douyin/merchant.DouyinActivity/delActivity",getStoreList:"/douyin/merchant.DouyinActivity/getStoreList",getCouponList:"/douyin/merchant.DouyinActivity/getCouponList",addOrEditActivity:"/douyin/merchant.DouyinActivity/addOrEditActivity",getActivityDetail:"/douyin/merchant.DouyinActivity/getActivityDetail",getSourceMaterialLists:"/douyin/merchant.DouyinActivity/getSourceMaterialLists",saveSourceMaterial:"/douyin/merchant.DouyinActivity/saveSourceMaterial",delSourceMaterial:"/douyin/merchant.DouyinActivity/delSourceMaterial"};e["a"]=r},fb3b:function(t,e,i){"use strict";i("4e9a")}}]);