(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-337bf602","chunk-2d0b6a79","chunk-2d0b6a79"],{"1da1":function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("d3b7");function i(t,a,e,i,r,n,s){try{var o=t[n](s),c=o.value}catch(l){return void e(l)}o.done?a(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var a=this,e=arguments;return new Promise((function(r,n){var s=t.apply(a,e);function o(t){i(s,r,n,o,c,"next",t)}function c(t){i(s,r,n,o,c,"throw",t)}o(void 0)}))}}},2406:function(t,a,e){"use strict";var i={getStoreCategoryList:"/merchant/platform.MerchantStoreCategory/getStoreCategoryList",editStoreCategory:"/merchant/platform.MerchantStoreCategory/editStoreCategory",saveStoreCategory:"/merchant/platform.MerchantStoreCategory/saveStoreCategory",delStoreCategory:"/merchant/platform.MerchantStoreCategory/delStoreCategory",updateSort:"/merchant/platform.MerchantStoreCategory/updateSort",getCorrList:"/merchant/platform.Corr/searchCorr",getCorrDetails:"/merchant/platform.Corr/getCorrDetails",getEditCorr:"/merchant/platform.Corr/getEditCorr",getPositionList:"/merchant/platform.Position/getPositionList",getPositionCreate:"/merchant/platform.Position/getPositionCreate",getPositionInfo:"/merchant/platform.Position/getPositionInfo",getPositionCategoryList:"/merchant/platform.Position/getPositionCategoryList",getPositionDelAll:"/merchant/platform.Position/getPositionDelAll",getTechnicianList:"/merchant/platform.Technician/getTechnicianList",getTechnicianView:"/merchant/platform.Technician/getTechnicianView",getTechnicianExamine:"/merchant/platform.Technician/getTechnicianExamine",getTechnicianDel:"/merchant/platform.Technician/getTechnicianDel",getContractList:"/common/platform.merchant.MerchantContract/getList",addResignTip:"/common/platform.merchant.MerchantContract/addResignTip"};a["a"]=i},"47d8":function(t,a,e){"use strict";e("ea6a")},"5b02":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"components-layout-demo-basic"}},[e("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[e("a-layout",[e("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"cat_id",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"cat_name",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"cat_url",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"cat_fid",fn:function(a,i){return e("router-link",{attrs:{to:{path:"/platform/platform.merchant/StoreCategoryChildList",query:{cat_id:i.cat_id}}}},[e("a",{staticClass:"label-sm-1"},[t._v("查看")])])}},{key:"cat_sort",fn:function(a,i){return[e("a-input-number",{staticClass:"sort-input",attrs:{"default-value":a||0,precision:0,min:0},on:{blur:function(e){return t.handleSortChange(e,a,i)}},model:{value:i.cat_sort,callback:function(a){t.$set(i,"cat_sort",a)},expression:"record.cat_sort"}})]}},{key:"diy_status",fn:function(a,i){return e("router-link",{attrs:{to:{path:"/common/platform.custom/catCustomPage",query:{source_id:i.cat_id,source:"category"}},target:"_blank"}},[t._v(" "+t._s(0==i.diy_status?"未装修":"已装修")+" ")])}},{key:"cat_status",fn:function(a,i){return e("span",{},[0==i.cat_status?e("span",[t._v("关闭")]):e("span",[t._v("启用")])])}},{key:"action",fn:function(a,i){return e("span",{},[e("a",{staticClass:"label-sm blue",on:{click:function(a){return t.diyEdit(i.cat_id)}}},[t._v("编辑")]),e("a",{staticClass:"btn label-sm blue",staticStyle:{"margin-left":"10px"},on:{click:function(a){return t.diyDel(i.cat_id)}}},[t._v("删除")])])}},{key:"title",fn:function(a){return[e("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[e("a-col",{staticClass:"text-left",attrs:{span:4}},[t._v(" 分类列表")]),e("a-col",{attrs:{span:15}}),e("a-col",{staticClass:"text-right",attrs:{span:5}},[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.addCategory()}}},[t._v(" 添加主分类")])],1)],1)]}}])})],1)],1)],1),e("a-modal",{attrs:{width:920,title:t.title,footer:null},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(a){t.visible=a},expression:"visible"}},[e("a-form",t._b({},"a-form",{labelCol:{span:7},wrapperCol:{span:16}},!1),[e("a-form-item",{attrs:{label:"分类名称",required:"true"}},[e("a-row",[e("a-col",{attrs:{span:14}},[e("a-input",{attrs:{placeholder:"分类名称"},model:{value:t.formData.cat_name,callback:function(a){t.$set(t.formData,"cat_name",a)},expression:"formData.cat_name"}})],1)],1)],1),e("a-form-item",{attrs:{label:"分类描述",help:"用于描述分类的副标题,吸引客户,限制100字以内"}},[e("a-row",[e("a-col",{attrs:{span:14}},[e("a-textarea",{attrs:{placeholder:"分类描述","auto-size":{minRows:2},maxLength:100},model:{value:t.formData.cat_info,callback:function(a){t.$set(t.formData,"cat_info",a)},expression:"formData.cat_info"}})],1)],1)],1),e("a-form-item",{attrs:{label:"短标记",help:"只能用英文或数字,用于网址(url)中的标记!建议使用分类的拼音",required:"true"}},[e("a-row",[e("a-col",{attrs:{span:14}},[e("a-input",{attrs:{placeholder:"短标记"},model:{value:t.formData.cat_url,callback:function(a){t.$set(t.formData,"cat_url",a)},expression:"formData.cat_url"}})],1)],1)],1),e("a-form-item",{attrs:{label:"分类LOGO图标",required:"true",help:"仅支持jpg、png、jpeg、gif图片类型"}},[e("a-input",{attrs:{hidden:""},model:{value:t.formData.cat_pic,callback:function(a){t.$set(t.formData,"cat_pic",a)},expression:"formData.cat_pic"}}),[e("div",{staticClass:"clearfix"},[e("a-upload",{attrs:{action:t.action,name:t.uploadName,data:{upload_dir:t.upload_dir},"list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:t.handleChange}},[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel1}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]],2),e("a-form-item",{attrs:{label:"绑定行业属性",required:"true"}},[e("a-row",[e("a-col",{attrs:{span:14}},[e("a-select",{model:{value:t.formData.cat_industry,callback:function(a){t.$set(t.formData,"cat_industry",a)},expression:"formData.cat_industry"}},t._l(t.cat_sel,(function(a,i){return e("a-select-option",{key:i,attrs:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)],1)],1),e("a-form-item",{attrs:{label:"分类广告图",help:"分类广告图,建议尺寸 702*142"}},[e("a-input",{attrs:{hidden:""},model:{value:t.formData.cat_adver,callback:function(a){t.$set(t.formData,"cat_adver",a)},expression:"formData.cat_adver"}}),[e("div",{staticClass:"clearfix"},[e("a-upload",{attrs:{action:t.action,name:t.uploadName,data:{upload_dir:t.upload_dir},"list-type":"picture-card","file-list":t.fileList1},on:{preview:t.handlePreview1,change:t.handleChange1}},[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1),e("a-modal",{attrs:{visible:t.previewVisible1,footer:null},on:{cancel:t.handleCancel2}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]],2),e("a-form-item",{attrs:{label:"分类排序",help:"默认添加时间排序!手动排序数值越大,排序越前。"}},[e("a-row",[e("a-col",{attrs:{span:14}},[e("a-input",{attrs:{placeholder:"分类排序"},model:{value:t.formData.cat_sort,callback:function(a){t.$set(t.formData,"cat_sort",a)},expression:"formData.cat_sort"}})],1)],1)],1),e("a-form-item",{attrs:{label:"是否热门",help:"如果选择热门,颜色会有变化"}},[e("a-row",[e("a-col",{attrs:{span:14}},[e("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_hot",{initialValue:1==t.formData.is_hot,valuePropName:"checked"}],expression:"[\n                                'is_hot',\n                                { initialValue: formData.is_hot == 1 ? true : false, valuePropName: 'checked' },\n                            ]"}],attrs:{"checked-children":"是","un-checked-children":"否"},model:{value:t.formData.is_hot,callback:function(a){t.$set(t.formData,"is_hot",a)},expression:"formData.is_hot"}})],1)],1)],1),e("a-form-item",{attrs:{label:"分类状态"}},[e("a-row",[e("a-col",{attrs:{span:14}},[e("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_status",{initialValue:1==t.formData.cat_status,valuePropName:"checked"}],expression:"[\n                                'cat_status',\n                                { initialValue: formData.cat_status == 1 ? true : false, valuePropName: 'checked' },\n                            ]"}],attrs:{"checked-children":"打开","un-checked-children":"关闭"},model:{value:t.formData.cat_status,callback:function(a){t.$set(t.formData,"cat_status",a)},expression:"formData.cat_status"}})],1)],1)],1),e("a-form-item",{attrs:{"wrapper-col":{span:20,offset:6}}},[e("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[e("a-col",{staticClass:"text-center",attrs:{span:6}},[e("a-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(" 提交")])],1),e("a-col",{attrs:{span:6}})],1)],1)],1)],1)],1)},r=[],n=e("1da1"),s=(e("96cf"),e("d3b7"),e("fb6a"),e("b0c0"),e("a434"),e("2406"));function o(t){return new Promise((function(a,e){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){return a(i.result)},i.onerror=function(t){return e(t)}}))}var c=[{title:"编号",dataIndex:"cat_id",scopedSlots:{customRender:"cat_id"}},{title:"名称",dataIndex:"cat_name",scopedSlots:{customRender:"cat_name"}},{title:"短标记",dataIndex:"cat_url",scopedSlots:{customRender:"cat_url"}},{title:"子分类",dataIndex:"cat_fid",scopedSlots:{customRender:"cat_fid"}},{title:"排序",dataIndex:"cat_sort",scopedSlots:{customRender:"cat_sort"}},{title:"页面装修",dataIndex:"diy_status",scopedSlots:{customRender:"diy_status"}},{title:"状态",dataIndex:"cat_status",scopedSlots:{customRender:"cat_status"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],l={name:"StoreCategoryList",props:{upload_dir:{type:String,default:""}},data:function(){return{title:"添加主分类",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",visible:!1,spinning:!1,previewVisible:!1,previewVisible1:!1,previewImage:"",cat_id:0,cat_sel:[],fileList:[],fileList1:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},queryParam:{cat_id:"",page:1},formData:{cat_id:"",cat_fid:"",cat_name:"",cat_pic:"",cat_url:"",cat_sort:0,is_hot:0,cat_status:1,cat_industry:"",cat_info:"",cat_adver:""},data:[],columns:c}},mounted:function(){this.getLists()},activated:function(){this.getLists()},created:function(){this.title="添加主分类",this.getLists()},methods:{getLists:function(){var t=this;this.queryParam.page=this.pagination.current,this.queryParam.pageSize=this.pagination.pageSize,this.request(s["a"].getStoreCategoryList,this.queryParam).then((function(a){a.list.length>0&&(t.data=a.list,t.pagination.total=a.count,t.queryParam["page"]+=1)}))},getChildList:function(t){},addCategory:function(){var t=this;this.fileList=[],this.fileList1=[],this.visible=!0,this.formData={cat_id:"",cat_fid:"",cat_name:"",cat_pic:"",cat_url:"",cat_sort:0,is_hot:0,cat_status:1,cat_industry:"",cat_info:"",cat_adver:""},this.request(s["a"].editStoreCategory,{}).then((function(a){t.cat_sel=a.sel}))},diyEdit:function(t){var a=this;this.show_catId=t,this.formData={cat_id:"",cat_fid:"",cat_name:"",cat_pic:"",cat_url:"",cat_sort:0,is_hot:0,cat_status:1,cat_industry:"",cat_info:"",cat_adver:""},this.request(s["a"].editStoreCategory,{cat_id:t}).then((function(t){if(a.visible=!0,a.title="编辑主分类",a.cat_sel=t.sel,a.formData=t.data,a.fileList1=[],a.fileList=[],t.data.cat_pic){var e={uid:"logo",name:"logo_1",status:"done",url:t.data.cat_pic};a.fileList.push(e)}if(t.data.cat_adver){var i={uid:"logo2",name:"logo_2",status:"done",url:t.data.cat_adver};a.fileList1.push(i)}}))},diyDel:function(t){var a=this;this.$confirm({title:"您确定删除此分类吗?",centered:!0,onOk:function(){var e={cat_id:t};a.request(s["a"].delStoreCategory,e).then((function(t){t&&a.getLists()}))},onCancel:function(){}})},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},handleCancel:function(){this.title="添加主分类",this.visible=!1},handleSubmit:function(){var t=this;this.request(s["a"].saveStoreCategory,this.formData).then((function(a){a?t.$message.success("编辑成功！"):t.$message.error("编辑失败！"),t.visible=!1,t.formData.cat_id=t.$route.query.cat_id,t.formData.cat_fid="",t.formData.cat_name="",t.formData.cat_pic="",t.formData.cat_url="",t.formData.cat_sort=0,t.formData.is_hot=0,t.formData.cat_status=1,t.formData.cat_industry="",t.formData.cat_info="",t.formData.cat_adver="",t.title="添加主分类",t.getLists()}))},onPageChange:function(t,a){this.$set(this.pagination,"current",t),this.getLists()},onPageSizeChange:function(t,a){this.$set(this.pagination,"pageSize",a),this.getLists()},handlePreview:function(t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,o(t.originFileObj);case 3:t.preview=e.sent;case 4:a.previewImage=t.url||t.preview,a.previewVisible=!0;case 6:case"end":return e.stop()}}),e)})))()},handleSortChange:function(t,a,e){var i=this,r={cat_id:e.cat_id,cat_sort:a};this.request(s["a"].updateSort,r).then((function(t){i.getLists()}))},handleChange:function(t){var a=t.fileList;if(console.log(a,"iamge==iamge==iamge"),a.length>0){var e=a.length-1;if(this.fileList=a,"done"==this.fileList[e].status){if(1e3!=this.fileList[e].response.status)return this.$message.error(this.fileList[e].response.msg),this.fileList=this.fileList.slice(0,-1),!1;console.log(this.fileList[e].response.data,"iamge==iamge==iamge"),this.formData.cat_pic=this.fileList[e].response.data,this.fileList[0].uid="logo",this.fileList[0].name="logo_1",this.fileList[0].status="done",this.fileList[0].url=this.fileList[e].response.data,a.length>1&&this.fileList.splice(0,e)}}else this.fileList=[],this.formData.cat_pic=""},handleCancel1:function(){this.previewVisible=!1},handlePreview1:function(t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,o(t.originFileObj);case 3:t.preview=e.sent;case 4:a.previewImage=t.url||t.preview,a.previewVisible1=!0;case 6:case"end":return e.stop()}}),e)})))()},handleChange1:function(t){var a=t.fileList;if(a.length>0){var e=a.length-1;this.fileList1=a,"done"==this.fileList1[e].status&&(this.formData.cat_adver=this.fileList1[e].response.data,this.fileList1[0].uid="logo_2",this.fileList1[0].name="logo_2",this.fileList1[0].status="done",this.fileList1[0].url=this.fileList1[e].response.data,a.length>1&&this.fileList1.splice(0,e))}else this.fileList1=[],this.formData.cat_adver=""},handleCancel2:function(){this.previewVisible1=!1}}},u=l,d=(e("47d8"),e("2877")),f=Object(d["a"])(u,i,r,!1,null,"57716949",null);a["default"]=f.exports},ea6a:function(t,a,e){}}]);