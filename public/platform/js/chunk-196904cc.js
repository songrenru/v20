(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-196904cc","chunk-2d0b6a79","chunk-609b776b","chunk-2d0b6a79"],{"0190":function(t,e,a){"use strict";a("0daf")},"0daf":function(t,e,a){},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function i(t,e,a,i,n,o,s){try{var r=t[o](s),l=r.value}catch(c){return void a(c)}r.done?e(l):Promise.resolve(l).then(i,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,o){var s=t.apply(e,a);function r(t){i(s,n,o,r,l,"next",t)}function l(t){i(s,n,o,r,l,"throw",t)}r(void 0)}))}}},2945:function(t,e,a){"use strict";a("41a1")},"41a1":function(t,e,a){},b771:function(t,e,a){"use strict";a.r(e);a("498a");var i=function(){var t=this,e=t._self._c;return e("a-drawer",{attrs:{title:t.xtitle,width:1e3,visible:t.visibleMaterial},on:{close:function(e){return t.handleMaterialCancel()}}},[e("div",{staticClass:"message-suggestions-list-box"},[e("div",{staticClass:"search-box",staticStyle:{"padding-bottom":"20px"}},[e("a-row",[e("a-col",{staticClass:"suggestions_col",attrs:{md:10,sm:24}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),e("a-range-picker",{staticStyle:{width:"300px"},attrs:{allowClear:!0},on:{change:t.dateOnChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-col",{staticClass:"suggestions_col_btn",attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1)],1)],1),e("a-row",[e("a-col",{staticStyle:{"margin-bottom":"18px"}},[1==t.xtype&&1==t.role_addmaterial?e("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:function(e){return t.addTextReply()}}},[t._v(" 添加回复文字 ")]):t._e(),3==t.xtype&&1==t.role_addmaterial?e("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:function(e){return t.addImgReply()}}},[t._v(" 添加回复图片 ")]):t._e(),2==t.xtype&&1==t.role_addmaterial?e("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:function(e){return t.addAudioReply()}}},[t._v(" 添加回复音频 ")]):t._e(),1==t.role_delmaterial?e("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delMaterialMany()}}},[t._v("批量删除")]):t._e()],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.material_id},"row-selection":t.rowSelection},on:{change:t.table_change},scopedSlots:t._u([{key:"xcontentaction",fn:function(a,i,n){return e("div",{},[1==i.xtype?e("div",[t._v(" "+t._s(i.xcontent)+" ")]):2==i.xtype?e("div",[e("a",{attrs:{href:i.audio_url,target:"_blank"}},[t._v(t._s(i.audio_url))])]):3==i.xtype?e("div",{staticClass:"previewimg"},t._l(i.word_imgs,(function(t,a){return e("img",{staticStyle:{height:"80px","margin-right":"10px"},attrs:{src:t,preview:"1"}})})),0):t._e()])}},{key:"action",fn:function(a,i,n){return e("span",{},[1==t.role_editmaterial?e("a",{on:{click:function(e){return t.editMaterial(i)}}},[t._v(" 编辑 ")]):t._e(),1==t.role_delmaterial&&1==t.role_editmaterial?e("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_delmaterial?e("a-popconfirm",{attrs:{title:"您确定将此条分类数据删除吗？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.delMaterial(i,0)}}},[e("a",{attrs:{href:"#"}},[t._v(" 删 除 ")])]):t._e()],1)}}])})],1),e("a-drawer",{attrs:{title:t.xaddtitle,width:800,visible:t.visibleAddMaterial},on:{close:function(e){return t.handleAddMaterialCancel()}}},[e("div",{staticClass:"addMaterial"},[1===t.xtype||"1"===t.xtype?e("div",[e("a-form-item",{attrs:{label:"回复内容",extra:"回复的内容文字不能超过120个",required:""}},[e("a-textarea",{staticStyle:{width:"360px",height:"160px"},attrs:{"max-length":120},on:{change:t.onTextAreaChange},model:{value:t.xcontent,callback:function(e){t.xcontent="string"===typeof e?e.trim():e},expression:"xcontent"}}),e("span",{staticStyle:{"margin-left":"10px"}},[t._v("已输入 "+t._s(t.xcontent.length)+" 个字")])],1)],1):t._e(),2===t.xtype||"2"===t.xtype?e("div",[e("a-form-item",{attrs:{label:"音频名称",extra:"音频名称30个字以内"}},[e("a-input",{staticStyle:{width:"310px"},attrs:{"max-length":30,placeholder:"30个字以内"},model:{value:t.xname,callback:function(e){t.xname="string"===typeof e?e.trim():e},expression:"xname"}})],1),e("a-form-item",{attrs:{label:"回复音频",extra:"上传的音频不能超过2M,只支持mp3格式",required:""}},[e("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/community/village_api.ContentEngine/uploadVideo?pathname=soundAudio",multiple:t.audioMultiple,"file-list":t.fileAudioList,"before-upload":t.audioBeforeUpload},on:{change:t.audioUploadChange}},[e("a-button",[e("a-icon",{attrs:{type:"upload"}}),t._v("上传文件 ")],1)],1)],1)],1):t._e(),3===t.xtype||"3"===t.xtype?e("div",[e("a-form-item",{staticClass:"uploadFile",attrs:{label:"回复图片",required:""}},[e("a-upload",{attrs:{action:"/v20/public/index.php/community/village_api.ContentEngine/uploadFile?pathname=hotword","list-type":"picture-card",accept:".png,.jpg","file-list":t.fileList,"before-upload":t.beforeUpload,multiple:!0},on:{preview:t.handlePreview,change:t.handleUploadChange}},[t.fileList.length<3?e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传图片 ")])],1):t._e()]),e("div",{staticClass:"desc",staticStyle:{transform:"translateY(-18px)"}},[t._v(" 已上传"+t._s(t.fileList.length)+"张, 最多上传3张图片，上传的图片不能超过2M，只支持jpg,png,jpeg,gif ")]),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handlePreviewCancel}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)],1):t._e(),e("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"30px",background:"#fff",textAlign:"center",zIndex:1,height:"180px"}},[e("a-button",{style:{marginRight:"90px"},on:{click:function(e){return t.handleAddMaterialCancel()}}},[t._v("取消")]),e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleMaterialSubmit()}}},[t._v("提交")])],1)])])],1)},n=[],o=a("1da1"),s=(a("7d24"),a("dfae")),r=(a("96cf"),a("d3b7"),a("ac1f"),a("841c"),a("a15b"),a("d81d"),a("fb6a"),a("b0c0"),a("a0e0"));function l(t){return new Promise((function(e,a){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){return e(i.result)},i.onerror=function(t){return a(t)}}))}var c=[{title:"回复内容",dataIndex:"xcontent",key:"xcontent",width:450,scopedSlots:{customRender:"xcontentaction"}},{title:"更新时间",dataIndex:"update_time_str",key:"update_time_str",align:"center",width:200},{title:"操作",dataIndex:"",key:"",align:"center",width:200,scopedSlots:{customRender:"action"}}],d=[],u={name:"hotWordManageMaterial",filters:{},components:{"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:"",date:""},form:this.$form.createForm(this),loading:!1,data:d,columns:c,page:1,confirmLoading:!1,visibleMaterial:!1,xcategory:{categoryname:"",cate_id:0,xtype:0,village_id:0},xtype:0,xtitle:"",selectedRowKeys:[],xaddtitle:"",visibleAddMaterial:!1,fileList:[],fileAudioList:[],previewVisible:!1,previewImage:"",word_imgs:[],audio_url:[],xcontent:"",xname:"",material_id:0,audioMultiple:!0,role_addmaterial:0,role_editmaterial:0,role_delmaterial:0}},activated:function(){},computed:{rowSelection:function(){var t=this;return{onChange:function(e,a){console.log("selectedRowKeys",e),t.selectedRowKeys=e},onSelect:function(t,e,a,i){}}}},methods:{xList:function(t,e){this.xcategory=t,this.xtype=1*e,1==this.xtype?this.xtitle="回复文字【"+this.xcategory.categoryname+"】管理":2==this.xtype?(this.xtitle="回复音频【"+this.xcategory.categoryname+"】管理",this.columns=[{title:"音频标题",dataIndex:"xname",key:"xname",width:150},{title:"回复内容",dataIndex:"xcontent",key:"xcontent",width:400,scopedSlots:{customRender:"xcontentaction"}},{title:"更新时间",dataIndex:"update_time_str",key:"update_time_str",align:"center",width:200},{title:"操作",dataIndex:"",key:"",align:"center",width:200,scopedSlots:{customRender:"action"}}]):3==this.xtype&&(this.xtitle="回复图片【"+this.xcategory.categoryname+"】管理"),this.getList(),this.visibleMaterial=!0},handleMaterialCancel:function(){this.visibleMaterial=!1},getList:function(){var t=this;this.loading=!0,this.search.page=this.page,this.search.xtype=this.xtype,this.search.cate_id=this.xcategory.cate_id,this.request(r["a"].getHouseHotWordMaterialLists,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.role_addmaterial=e.role_addmaterial,t.role_editmaterial=e.role_editmaterial,t.role_delmaterial=e.role_delmaterial,t.loading=!1}))},bindOk:function(){this.getList()},delMaterial:function(t){var e=this,a={material_ids:t.material_id,village_id:t.village_id,xtype:this.xtype};a.cate_id=this.xcategory.cate_id,this.request(r["a"].deleteHouseHotWordMaterialContent,a).then((function(t){e.$message.success("删除成功"),setTimeout((function(){e.confirmLoading=!1,e.getList()}),1e3)}))},delMaterialMany:function(){if(this.selectedRowKeys.length<1)return this.$message.error("请至少选择一项要删除的数据！"),!1;console.log("material_ids",this.selectedRowKeys);var t=this,e={material_ids:this.selectedRowKeys.join(","),xtype:this.xtype};e.cate_id=this.xcategory.cate_id,this.$confirm({title:"确认删除",content:"您确认要删除您选中的这些数据吗",onOk:function(){t.request(r["a"].deleteHouseHotWordMaterialContent,e).then((function(e){t.$message.success("删除成功"),setTimeout((function(){t.confirmLoading=!1,t.getList()}),1e3)}))},onCancel:function(){}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.page=1,this.getList()},handleMaterialSubmit:function(){var t=this,e={};if(e.xtype=this.xtype,1==this.xtype){if(this.xname="",this.xcontent.length<1)return this.$message.error("请填写回复内容！"),!1}else if(2==this.xtype){if(!this.audio_url||this.audio_url.length<1)return this.$message.error("请上传回复音频文件！"),!1}else if(3==this.xtype&&(this.xname="",!this.word_imgs||this.word_imgs.length<1))return this.$message.error("请上传回复图片文件！"),!1;e.cate_id=this.xcategory.cate_id,e.material_id=this.material_id,e.xcontent=this.xcontent,e.xname=this.xname,e.word_imgs=this.word_imgs,e.audio_url=this.audio_url,this.confirmLoading=!0,this.request(r["a"].saveHouseHotWordMaterialSetData,e).then((function(e){t.confirmLoading=!1,t.material_id>0?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),t.handleAddMaterialCancel(),t.getList()}))},editMaterial:function(t){var e=this;this.material_id=t.material_id,this.xname="",1==this.xtype?(this.xcontent=t.xcontent,this.xaddtitle="编辑回复文字"):2==this.xtype?(this.audioMultiple=!1,this.audio_url=t.audio_url,this.xname=t.xname,this.fileAudioList.push({uid:"audio"+t.material_id,url:this.audio_url,status:"done",name:this.audio_url}),this.xaddtitle="编辑回复音频"):3==this.xtype&&(this.word_imgs=t.word_imgs,t.word_imgs.map((function(t,a){e.fileList.push({uid:"img"+a,url:t,status:"done",name:"img"+a})})),this.xaddtitle="编辑回复图片"),this.visibleAddMaterial=!0},addTextReply:function(){this.xaddtitle="添加回复文字",this.visibleAddMaterial=!0},addImgReply:function(){this.xaddtitle="添加回复图片",this.visibleAddMaterial=!0},addAudioReply:function(){this.audioMultiple=!0,this.xaddtitle="添加回复音频",this.visibleAddMaterial=!0},handleAddMaterialCancel:function(){this.xcontent="",this.xname="",this.word_imgs=[],this.audio_url=[],this.fileList=[],this.material_id=0,this.fileAudioList=[],this.previewVisible=!1,this.previewImage="",this.visibleAddMaterial=!1,this.audioMultiple=!0},onTextAreaChange:function(t){},handlePreview:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log("handlePreview",t),t.url||t.preview){a.next=5;break}return a.next=4,l(t.originFileObj);case 4:t.preview=a.sent;case 5:t.response&&t.response.data&&t.response.data.url?e.previewImage=t.response.data.url:t.url?e.previewImage=t.url:e.previewImage=t.preview,e.previewVisible=!0;case 7:case"end":return a.stop()}}),a)})))()},handleUploadChange:function(t){var e=t.fileList;console.log("fileList",e);var a=this;a.fileList=e.slice(0,3),a.word_imgs=[],a.fileList.map((function(t){t.response&&t.response.data&&t.response.data.url?a.word_imgs.push(t.response.data.url):void 0!=t.url&&t.url&&a.word_imgs.push(t.url)}))},audioUploadChange:function(t){var e=this;console.log("fileinfo",t),this.fileAudioList=t.fileList,this.audio_url=[],this.material_id>0?this.fileAudioList.map((function(t,a){if(t.response&&t.response.data&&t.response.data.url)return e.fileAudioList=[],t.url=t.response.data.url,e.fileAudioList.push(t),void e.audio_url.push({url:t.response.data.url,filename:t.name})})):this.fileAudioList.map((function(t,a){t.response&&t.response.data&&t.response.data.url?(e.fileAudioList[a].url=t.response.data.url,e.audio_url.push({url:t.response.data.url,filename:t.name})):void 0!=t.url&&t.url&&e.audio_url.push({url:t.url,filename:""})})),console.log("fileAudioList",this.fileAudioList)},beforeUpload:function(t,e){var a="image/jpeg"===t.type||"image/jpg"===t.type||"image/png"===t.type||"image/gif"===t.type;if(!a)return this.$message.error("You can only upload JPG file!"),!1;var i=t.size/1024/1024<2;return i?a&&i:(this.$message.error("Image must smaller than 2MB!"),!1)},audioBeforeUpload:function(t){console.log("mfile",t);var e=!1;"audio/mpeg"!=t.type&&"audio/x-mpeg"!=t.type&&"audio/mp3"!=t.type&&"audio/x-mpeg-3"!=t.type&&"audio/mpg"!=t.type&&"audio/x-mp3"!=t.type&&"audio/mpeg3"!=t.type&&"audio/x-mpeg3"!=t.type&&"audio/x-mpg"!=t.type&&"audio/x-mpegaudio"!=t.type||(e=!0),e||this.$message.error("请上传mp3格式的音频文件!");var a=t.size/1024/1024<2;return a||this.$message.error("音频文件大小不要超过 2MB!"),e&&a},handlePreviewCancel:function(){this.previewVisible=!1}}},h=u,g=(a("0190"),a("2877")),p=Object(g["a"])(h,i,n,!1,null,"13ec3c16",null);e["default"]=p.exports},e342:function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c"),a("498a");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-suggestions-list-box"},[e("div",{staticClass:"search-box",staticStyle:{"padding-bottom":"20px"}},[e("a-row",[e("a-col",{staticClass:"suggestions_col",attrs:{md:6,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("分类名称：")]),e("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入分类名称"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1),e("a-col",{staticClass:"suggestions_col",attrs:{md:7,sm:24}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),e("a-range-picker",{staticStyle:{width:"300px"},attrs:{allowClear:!0},on:{change:t.dateOnChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-col",{staticClass:"suggestions_col_btn",attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1)],1)],1),e("a-row",[e("a-col",{staticStyle:{"margin-bottom":"18px"}},[1==t.role_addcategory?e("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:t.addCategory}},[t._v("新建分类")]):t._e(),1==t.role_delcategory?e("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.delCategoryMany()}}},[t._v("批量删除")]):t._e()],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.cate_id},"row-selection":t.rowSelection},on:{change:t.table_change},scopedSlots:t._u([{key:"manageaction",fn:function(a,i,n){return e("span",{},[1==t.role_managecategory?e("a-button",{attrs:{type:"default"},on:{click:function(e){return t.$refs.materialModel.xList(i,2)}}},[t._v(" 管 理 ")]):t._e()],1)}},{key:"action",fn:function(a,i,n){return e("span",{},[1==t.role_editcategory?e("a",{on:{click:function(e){return t.editCategory(i)}}},[t._v(" 编辑 ")]):t._e(),1==t.role_delcategory&&1==t.role_editcategory?e("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_delcategory?e("a-popconfirm",{attrs:{title:"您确定将此条分类数据删除吗？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.delCategory(i,0)}}},[e("a",{attrs:{href:"#"}},[t._v(" 删 除 ")])]):t._e()],1)}}])}),e("a-modal",{attrs:{title:t.titleCategory,width:600,visible:t.visibleCategory,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleCategorySubmit,cancel:t.handleCategoryCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:500}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"分类名称",required:""}},[e("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入分类名称，最多20个字",maxLength:20},model:{value:t.categoryname,callback:function(e){t.categoryname="string"===typeof e?e.trim():e},expression:"categoryname"}})],1)],1)],1)],1),e("material-list-page",{ref:"materialModel",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},n=[],o=(a("7d24"),a("dfae")),s=(a("a15b"),a("a0e0")),r=a("b771"),l=[{title:"分类名称",dataIndex:"categoryname",key:"categoryname",width:310},{title:"更新时间",dataIndex:"update_time_str",key:"update_time_str",width:200},{title:"回复音频管理",dataIndex:"cate_id",key:"cate_id",align:"center",scopedSlots:{customRender:"manageaction"}},{title:"操作",dataIndex:"",key:"",align:"center",scopedSlots:{customRender:"action"}}],c=[],d={name:"hotWordManageListText",filters:{},props:{params:{type:Object,default:function(){return{}}}},watch:{params:{immediate:!0,handler:function(t){console.log("val===>",t),this.getList()}}},components:{materialListPage:r["default"],"a-collapse":o["a"],"a-collapse-panel":o["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:""},form:this.$form.createForm(this),loading:!1,data:c,columns:l,page:1,confirmLoading:!1,titleCategory:"新建分类",visibleCategory:!1,categoryname:"",cate_id:0,selectedRowKeys:[],role_addcategory:0,role_editcategory:0,role_delcategory:0,role_managecategory:0}},activated:function(){},computed:{rowSelection:function(){var t=this;return{onChange:function(e,a){console.log("selectedRowKeys",e),t.selectedRowKeys=e},onSelect:function(t,e,a,i){}}}},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.search["xtype"]=2,this.request(s["a"].getHouseHotWordMaterialCategoryLists,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.role_addcategory=e.role_addcategory,t.role_editcategory=e.role_editcategory,t.role_delcategory=e.role_delcategory,t.role_managecategory=e.role_managecategory,t.loading=!1}))},handleOk:function(){this.getList()},delCategory:function(t){var e=this,a={cate_ids:t.cate_id,village_id:t.village_id,xtype:2};this.request(s["a"].deleteHouseHotWordMaterialCategory,a).then((function(t){e.$message.success("删除成功"),setTimeout((function(){e.confirmLoading=!1,e.getList()}),1e3)}))},delCategoryMany:function(){if(this.selectedRowKeys.length<1)return this.$message.error("请至少选择一项要删除的数据！"),!1;console.log("cate_ids",this.selectedRowKeys);var t=this,e={cate_ids:this.selectedRowKeys.join(","),xtype:2};this.$confirm({title:"确认删除",content:"您确认要删除您选中的这些数据吗",onOk:function(){t.request(s["a"].deleteHouseHotWordMaterialCategory,e).then((function(e){t.$message.success("删除成功"),setTimeout((function(){t.confirmLoading=!1,t.getList()}),1e3)}))},onCancel:function(){}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.page=1,this.getList()},handleCategorySubmit:function(){var t=this;if(this.categoryname.length<1)return that.$message.error("分类名称不能为空！"),!1;var e={};e.categoryname=this.categoryname,e.cate_id=this.cate_id,e.xtype=2,this.confirmLoading=!0,this.request(s["a"].saveMaterialCategoryData,e).then((function(e){if(t.confirmLoading=!1,void 0!=e.is_have_err&&1==e.is_have_err)return t.$message.error(e.errmsg),!1;t.cate_id>0?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),t.handleCategoryCancel(),t.getList()}))},handleCategoryCancel:function(){this.categoryname="",this.cate_id=0,this.visibleCategory=!1},addCategory:function(){this.titleCategory="新建分类",this.cate_id=0,this.visibleCategory=!0},editCategory:function(t){this.cate_id=t.cate_id,this.categoryname=t.categoryname,this.titleCategory="编辑分类",this.visibleCategory=!0}}},u=d,h=(a("2945"),a("2877")),g=Object(h["a"])(u,i,n,!1,null,"e69f4356",null);e["default"]=g.exports}}]);