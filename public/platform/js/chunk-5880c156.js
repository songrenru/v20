(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5880c156","chunk-2d0b6a79","chunk-2d0b6a79"],{"1da1":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i("d3b7");function a(e,t,i,a,o,s,r){try{var n=e[s](r),l=n.value}catch(d){return void i(d)}n.done?t(l):Promise.resolve(l).then(a,o)}function o(e){return function(){var t=this,i=arguments;return new Promise((function(o,s){var r=e.apply(t,i);function n(e){a(r,o,s,n,l,"next",e)}function l(e){a(r,o,s,n,l,"throw",e)}n(void 0)}))}}},2760:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[i("a-row",[i("a-col",{attrs:{span:16}},[i("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:e.L("请输入")},on:{search:e.onSearch},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}}),i("a-button",{staticClass:"m-10",attrs:{type:"primary"},on:{click:e.onSearch}},[e._v(" "+e._s(e.L("搜索"))+" ")])],1),i("a-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[i("a-button",{staticClass:"m-10",attrs:{type:"danger"},on:{click:e.onDelete}},[e._v(" "+e._s(e.L("删除"))+" ")]),i("a-button",{staticClass:"m-10",attrs:{type:"primary"},on:{click:e.onAdd}},[e._v(" "+e._s(e.L("新建"))+" ")])],1)],1),i("a-table",{attrs:{columns:e.columns,rowKey:"id","data-source":e.list,"row-selection":{selectedRowKeys:e.selectedRowKeys,onSelect:e.onSelect,onSelectAll:e.onSelectAll},pagination:e.pagination},scopedSlots:e._u([{key:"cover",fn:function(t,a){return i("span",{},[i("img",{staticClass:"img pointer",attrs:{src:a.cover},on:{click:function(t){return e.handlePreview({url:a.cover})}}})])}},{key:"material_url",fn:function(t,a){return i("span",{staticClass:"pointer cr-primary no-wrap",on:{click:function(t){return e.viewItem(a)}}},[e._v(" "+e._s(e.L("点击播放"))+" ")])}},{key:"action",fn:function(t,a){return i("span",{},[i("a-button",{attrs:{type:"link"},on:{click:function(t){return e.delItem(a)}}},[e._v(e._s(e.L("删除")))]),i("a-button",{attrs:{type:"link"},on:{click:function(t){return e.editItem(a)}}},[e._v(e._s(e.L("编辑")))])],1)}}])}),i("a-modal",{attrs:{visible:e.modalVisible,title:e.modalTitle,destroyOnClose:!0,width:"60%",bodyStyle:{maxHeight:"650px",overflowY:"auto"},footer:"viewVideo"==e.modalType?null:void 0},on:{cancel:e.handleCancel,ok:e.handleOk}},["viewVideo"==e.modalType?i("section",[i("video",{staticStyle:{width:"100%","max-height":"400px"},attrs:{src:e.modalForm.material_url,controls:"",autoplay:""}})]):i("section",[i("a-form-model",{attrs:{model:e.modalForm,"label-col":{span:4},"wrapper-col":{span:16}}},["addVideo"==e.modalType?i("section",[i("a-form-model-item",{attrs:{label:e.L("视频名称"),required:""}},[i("a-input",{attrs:{"allow-clear":"",placeholder:e.L("请输入")},model:{value:e.modalForm.material_name,callback:function(t){e.$set(e.modalForm,"material_name",t)},expression:"modalForm.material_name"}})],1),i("a-form-model-item",{staticClass:"videos",attrs:{label:e.L("上传视频"),help:e.L("视频上传不可以大于100M，必须是MP4文件"),required:""}},[e.modalForm.material_url?i("div",[i("video",{staticStyle:{width:"60%","max-height":"200px"},attrs:{src:e.modalForm.material_url,controls:""}})]):e._e(),i("a-upload",{attrs:{name:"video",action:"/v20/public/index.php/common/common.UploadFile/uploadVideos","file-list":e.videoUploadList,multiple:!1,showUploadList:!e.modalForm.material_url,"before-upload":e.beforeUploadFile,data:{upload_dir:"/douyin/video"}},on:{change:e.handleChangeVideo}},[i("div",[i("a-button",[i("a-icon",{attrs:{type:"upload"}}),e._v(" "+e._s(e.L("上传视频"))+" ")],1)],1)])],1),i("a-form-model-item",{attrs:{label:e.L("上传封面"),help:e.L("封面未设置则默认读取视频第一帧作为封面图")}},[i("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",name:"reply_pic","list-type":"picture-card",data:{upload_dir:""},"file-list":e.videoCoverList},on:{preview:e.handlePreview,change:function(t){return e.handleUploadImgChange(t,"cover","videoCoverList")}}},[i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.L("上传封面")))])],1)])],1),i("a-form-model-item",{attrs:{label:e.L("转发文案"),required:""}},[i("a-textarea",{attrs:{"allow-clear":"",placeholder:e.L("请输入"),autoSize:{minRows:2,maxRows:6}},model:{value:e.modalForm.share_desc,callback:function(t){e.$set(e.modalForm,"share_desc",t)},expression:"modalForm.share_desc"}})],1),i("a-form-model-item",{attrs:{label:e.L("话题"),help:e.L("多个话题请以英文分号隔开")}},[i("a-input",{attrs:{"allow-clear":"",placeholder:e.L("请输入")},model:{value:e.modalForm.topic,callback:function(t){e.$set(e.modalForm,"topic",t)},expression:"modalForm.topic"}})],1)],1):e._e()])],1)]),i("a-modal",{attrs:{width:"60%",bodyStyle:{maxHeight:"650px",overflowY:"auto"},visible:e.previewVisible,footer:null},on:{cancel:function(t){e.previewVisible=!1}}},[i("img",{staticClass:"mt-20",staticStyle:{width:"100%",height:"auto"},attrs:{src:e.previewImage}})])],1)},o=[],s=i("1da1"),r=i("5530"),n=(i("96cf"),i("b0c0"),i("a15b"),i("c740"),i("d81d"),i("99af"),i("4de4"),i("d3b7"),i("caad"),i("2532"),i("a434"),i("e49a")),l={data:function(){return{queryParams:{name:""},list:[],columns:[{title:this.L("名称"),dataIndex:"material_name"},{title:this.L("封面"),dataIndex:"cover",scopedSlots:{customRender:"cover"}},{title:this.L("视频"),dataIndex:"material_url",scopedSlots:{customRender:"material_url"}},{title:this.L("创建时间"),dataIndex:"create_time"},{title:this.L("操作"),key:"action",scopedSlots:{customRender:"action"}}],pagination:{pageSize:10,total:0,current:1,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}},selectedRowKeys:[],modalVisible:!1,modalType:"",modalTitle:"",modalForm:"",fileloading:!1,videoUploadList:[],videoCoverList:[],previewVisible:!1,previewImage:""}},mounted:function(){this.getList()},methods:{getList:function(){var e=this,t={name:this.queryParams.name,page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(n["a"].getSourceMaterialLists,t).then((function(t){e.list=t.data,e.$set(e.pagination,"total",t.total)}))},onSearch:function(){this.$set(this.pagination,"current",1),this.getList()},onAdd:function(){this.modalType="addVideo",this.modalTitle=this.L("添加视频"),this.modalForm={id:"",material_name:"",material_url:"",material_type:"video",cover:"",share_desc:"",topic:""},this.modalVisible=!0},onDelete:function(){var e=this;this.selectedRowKeys.length?this.$confirm({title:this.L("确定要删除列表吗？"),centered:!0,onOk:function(){e.request(n["a"].delSourceMaterial,{ids:e.selectedRowKeys.join(",")}).then((function(t){e.$message.success(e.L("操作成功！")),e.selectedRowKeys=[],e.getList()}))},onCancel:function(){}}):this.$message.error(this.L("请选择要删除的列表"))},onSelect:function(e,t,i,a){var o=this.selectedRowKeys;if(t)o.push(e.id);else if(o.length){var s=o.findIndex((function(t){return t==e.id}));-1!=s&&this.$delete(o,s)}this.selectedRowKeys=JSON.parse(JSON.stringify(o))},onSelectAll:function(e,t,i){var a=i.map((function(e){return e.id})),o=this.selectedRowKeys;o=e?o.concat(a):o.concat(a).filter((function(e){return!a.includes(e)})),this.selectedRowKeys=JSON.parse(JSON.stringify(o))},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getList()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.getList()},viewItem:function(e){this.modalType="viewVideo",this.modalTitle=this.L("视频查看"),this.modalForm={material_url:e.material_url},this.modalVisible=!0},editItem:function(e){this.modalType="addVideo",this.modalTitle=this.L("视频编辑"),this.modalForm=Object(r["a"])(Object(r["a"])({},e),{},{image_full_url:e.cover,video_full_url:e.material_url}),e.video_url&&(this.videoUploadList=[{uid:"video_url",name:e.material_url,status:"done",url:e.material_url}]),e.cover&&(this.videoCoverList=[{uid:"video_cover",name:e.cover,status:"done",url:e.cover}]),this.modalVisible=!0},delItem:function(e){var t=this;this.$confirm({title:this.L("确定要删除该条数据吗？"),centered:!0,onOk:function(){t.request(n["a"].delSourceMaterial,{ids:e.id}).then((function(i){if(t.$message.success(t.L("操作成功！")),t.selectedRowKeys.length){var a=t.selectedRowKeys.findIndex((function(t){return t==e.id}));-1!=a&&t.$delete(t.selectedRowKeys,a)}t.getList()}))},onCancel:function(){}})},beforeUploadFile:function(e){var t=e.type.toLowerCase();if(this.fileloading)return this.$message.warning(this.L("当前还有文件上传中，请等候上传完成!")),!1;if(-1==t.indexOf("mp4"))return this.$message.error(this.L("仅支持mp4文件上传!")),!1;var i=e.size/1024/1024<100;return i?void 0:(this.$message.error("视频上传最大支持100MB!"),!1)},handleChangeVideo:function(e){if(e.file&&!e.file.status&&this.fileloading)return!1;if(this.modalForm.material_url="","uploading"===e.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.videoUploadList=[e.file]}if("uploading"!==e.file.status&&(this.fileloading=!1),e.file&&e.file.response){var t=e.file.response;1e3===t.status?(this.videoUploadList=[],this.modalForm=Object(r["a"])(Object(r["a"])({},this.modalForm),{},{material_url:t.data.video_url,cover:this.modalForm.cover||t.data.video_image}),this.videoUploadList=[{uid:"video_url",name:this.modalForm.material_url,status:"done",url:this.modalForm.material_url}],this.$message.success(this.L("上传成功"))):(this.videoUploadList=[],t.msg&&this.$message.error(t.msg))}},handleCancel:function(){this.modalVisible=!1,this.videoUploadList=[],this.videoCoverList=[],this.modalType="",this.modalTitle="",this.modalForm={}},handleOk:function(){"addVideo"==this.modalType&&this.addVideo()},addVideo:function(){var e=this;if(this.modalForm.material_name)if(this.modalForm.material_url)if(this.modalForm.share_desc){var t={id:this.modalForm.id,material_name:this.modalForm.material_name,material_url:this.modalForm.material_url,material_type:this.modalForm.material_type,cover:this.modalForm.cover,share_desc:this.modalForm.share_desc,topic:this.modalForm.topic};this.request(n["a"].saveSourceMaterial,t).then((function(t){e.$message.success(e.L("操作成功")),e.getList(),e.handleCancel()}))}else this.$message.error(this.L("请输入转发文案"));else this.$message.error(this.L("请上传视频"));else this.$message.error(this.L("请输入视频名称"))},handleUploadImgChange:function(e,t,i){var a=e.fileList;if(this[i]=a,a.length>0){var o=a.length-1;if("done"==this[i][o].status){var s=this[i][o].response.data;this.$set(this.modalForm,t,s),this[i][0].uid=t,this[i][0].name=s,this[i][0].status="done",this[i][0].url=s,a.length>1&&this[i].splice(0,1)}}else this.$set(this.modalForm,t,"")},handlePreview:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.url||e.preview){i.next=4;break}return i.next=3,d(e.originFileObj);case 3:e.preview=i.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()}}};function d(e){return new Promise((function(t,i){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return i(e)}}))}var c=l,u=(i("35d9"),i("fb3b"),i("2877")),m=Object(u["a"])(c,a,o,!1,null,"2d50c8d0",null);t["default"]=m.exports},"35d9":function(e,t,i){"use strict";i("b1b0")},"9a40":function(e,t,i){},b1b0:function(e,t,i){},e49a:function(e,t,i){"use strict";var a={getActivityList:"/douyin/merchant.DouyinActivity/getActivityList",setActivityStatus:"/douyin/merchant.DouyinActivity/setActivityStatus",delActivity:"/douyin/merchant.DouyinActivity/delActivity",getStoreList:"/douyin/merchant.DouyinActivity/getStoreList",getCouponList:"/douyin/merchant.DouyinActivity/getCouponList",addOrEditActivity:"/douyin/merchant.DouyinActivity/addOrEditActivity",getActivityDetail:"/douyin/merchant.DouyinActivity/getActivityDetail",getSourceMaterialLists:"/douyin/merchant.DouyinActivity/getSourceMaterialLists",saveSourceMaterial:"/douyin/merchant.DouyinActivity/saveSourceMaterial",delSourceMaterial:"/douyin/merchant.DouyinActivity/delSourceMaterial"};t["a"]=a},fb3b:function(e,t,i){"use strict";i("9a40")}}]);