(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1299486","chunk-d5e86e0a","chunk-3798ccad","chunk-2d0b1c73","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("d3b7");function r(t,e,i,r,a,n,s){try{var o=t[n](s),c=o.value}catch(l){return void i(l)}o.done?e(c):Promise.resolve(c).then(r,a)}function a(t){return function(){var e=this,i=arguments;return new Promise((function(a,n){var s=t.apply(e,i);function o(t){r(s,a,n,o,c,"next",t)}function c(t){r(s,a,n,o,c,"throw",t)}o(void 0)}))}}},"20fe":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:528,visible:t.visible,confirmLoading:t.confirmLoading,cancelText:"关闭"},on:{cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("img",{staticStyle:{width:"480px"},attrs:{src:t.detail.images}})])],1),i("template",{slot:"footer"},[i("a-button",{on:{click:t.handleCancel}},[t._v("关闭")])],1)],2)},a=[],n={data:function(){return{title:"广告图片查看",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,images:""}}},methods:{images:function(t){this.visible=!0,this.title="广告图片查看",this.detail={id:0,images:t}},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},s=n,o=i("0c7c"),c=Object(o["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},"24e5":function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var r=i("6b75");function a(t){if(Array.isArray(t))return Object(r["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||n(t)||Object(s["a"])(t)||o()}},3445:function(t,e,i){"use strict";var r={getMerchantList:"/recruit/platform.RecruitMerchant/getMerchantList",updateMerchant:"/recruit/platform.RecruitMerchant/updateMerchant",categoryList:"/recruit/platform.RecruitJobCategory/categoryList",childList:"/recruit/platform.RecruitJobCategory/childList",addCategory:"/recruit/platform.RecruitJobCategory/addCategory",editCategory:"/recruit/platform.RecruitJobCategory/editCategory",updateCategory:"/recruit/platform.RecruitJobCategory/updateCategory",delCategory:"/recruit/platform.RecruitJobCategory/delCategory",delCategorys:"/recruit/platform.RecruitJobCategory/delCategorys",changeSort:"/recruit/platform.RecruitJobCategory/changeSort",childChangeSort:"/recruit/platform.RecruitJobCategory/childChangeSort",getCategory:"/recruit/platform.RecruitJobCategory/getCategory",byOtherCategory:"/recruit/platform.RecruitJobCategory/byOtherCategory",getChildCategory:"/recruit/platform.RecruitJobCategory/getChildCategory",updateChildCategory:"/recruit/platform.RecruitJobCategory/updateChildCategory",getJobList:"/recruit/platform.RecruitMerchant/getJobList",updateJob:"/recruit/platform.RecruitMerchant/updateJob",delJob:"/recruit/platform.RecruitMerchant/delJob",getJobSearch:"/recruit/platform.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/platform.RecruitMerchant/getJobDetail",getRecruitBannerList:"/recruit/platform.RecruitBanner/getRecruitBannerList",getRecruitBannerCreate:"/recruit/platform.RecruitBanner/getRecruitBannerCreate",getRecruitBannerInfo:"/recruit/platform.RecruitBanner/getRecruitBannerInfo",getRecruitBannerSort:"/recruit/platform.RecruitBanner/getRecruitBannerSort",getRecruitBannerDis:"/recruit/platform.RecruitBanner/getRecruitBannerDis",getRecruitBannerDel:"/recruit/platform.RecruitBanner/getRecruitBannerDel",getRecruitIndustryList:"/recruit/platform.RecruitIndustry/getRecruitIndustryList",getRecruitIndustryCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryCreate",getRecruitIndustryInfo:"/recruit/platform.RecruitIndustry/getRecruitIndustryInfo",getRecruitIndustrySort:"/recruit/platform.RecruitIndustry/getRecruitIndustrySort",getRecruitIndustryDis:"/recruit/platform.RecruitIndustry/getRecruitIndustryDis",getRecruitIndustryDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryDel",getRecruitIndustryLevelList:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelList",getRecruitIndustryLevelCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelCreate",getRecruitIndustryLevelDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelDel",getRecruitWelfareList:"/recruit/platform.RecruitWelfare/getRecruitWelfareList",getRecruitWelfareCreate:"/recruit/platform.RecruitWelfare/getRecruitWelfareCreate",getRecruitWelfareInfo:"/recruit/platform.RecruitWelfare/getRecruitWelfareInfo",getRecruitWelfareDis:"/recruit/platform.RecruitWelfare/getRecruitWelfareDis",getRecruitWelfareDel:"/recruit/platform.RecruitWelfare/getRecruitWelfareDel",getList:"/recruit/platform.TalentManagement/getList",getLibMsgLIst:"/recruit/platform.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/platform.TalentManagement/getResumeMsg"};e["a"]=r},4299:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.detail.title,width:810,height:640,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[i("div",{staticStyle:{"margin-top":"-14px","font-width":"bold"}},[t._v(t._s(t.detail.add_time)),i("a",{staticStyle:{"padding-left":"10px"}},[t._v("本站")])]),i("div",[i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:22}},[i("viewer",{attrs:{images:t.detail.img}},t._l(t.detail.img,(function(t,e){return i("img",{key:e,staticStyle:{"max-width":"680px"},attrs:{src:t}})})),0)],1)],1),i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:21}},[i("span",{domProps:{innerHTML:t._s(t.detail.content)}},[t._v(" "+t._s(t.detail.content))])])],1)],1)])},a=[],n=i("3445"),s=(i("0808"),i("6944")),o=i.n(s),c=i("8bbf"),l=i.n(c),u=i("d6d3");i("fda2");l.a.use(o.a);var d={components:{videoPlayer:u["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[]}}},methods:{view:function(t){var e=this;this.visible=!0,this.id=t,this.request(n["a"].getAtlasArticleDetail,{id:this.id}).then((function(t){e.detail=t,console.log(e.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},f=d,g=(i("b189"),i("0c7c")),m=Object(g["a"])(f,r,a,!1,null,"0d43a6fd",null);e["default"]=m.exports},"7b3f":function(t,e,i){"use strict";var r={uploadImg:"/common/common.UploadFile/uploadImg"};e["a"]=r},"86e9":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:840,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"广告名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请填写广告名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请填写广告名称'}]}]"}]})],1),i("div",{staticStyle:{"margin-left":"152px","line-height":"30px"}},[i("span",{staticStyle:{color:"red"}},[t._v("* ")]),i("span",{staticStyle:{color:"#000"}},[t._v("选择图片：")]),t._v("图片建议350*120")]),i("a-form-model-item",{attrs:{label:" ",colon:!1,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("div",{key:t.ImgKey,staticClass:"clearfix"},[i("a-upload",{attrs:{name:"reply_pic",action:t.uploadImg,"list-type":"picture-card","file-list":t.imgUploadList,multiple:!0},on:{preview:t.handlePreview,change:t.handleImgChange}},[t.imgUploadList.length<1?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v(" 上传图片 ")])],1):t._e()]),i("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleImgCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]),i("a-form-item",{attrs:{label:"链接",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["links",{initialValue:t.detail.links,rules:[{required:!1,message:"请填写链接地址"}]}],expression:"['links', {initialValue:detail.links,rules: [{required: false, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),i("a",{staticClass:"ant-form-text",on:{click:t.setLinkBases}},[t._v(" 从功能库选择 ")])],1)],1)],1)],1)},a=[],n=i("53ca"),s=i("2909"),o=i("1da1"),c=(i("96cf"),i("d3b7"),i("d81d"),i("b0c0"),i("4d63"),i("ac1f"),i("25f0"),i("7b3f")),l=i("3445"),u=i("6ec1");function d(t){return new Promise((function(e,i){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return i(t)}}))}var f={components:{RichText:u["a"]},data:function(){return{maskClosable:!1,options:[],specialList:[],previewVisible:!1,previewImage:"",imgUploadList:[],uploadImg:"/v20/public/index.php"+c["a"].uploadImg+"?upload_dir=/group",title:"Banner添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",description:"",content:"",sort:"",img:[],cat_id:0},cat_id:0,id:0}},watch:{visible:function(){this.visible?(this.ImgKey="",this.previewVisible=!1,this.previewImage="",this.imgUploadList=""):this.ImgKey=Math.random(),console.log("this.ImgKey :>> ",this.ImgKey)}},mounted:function(){},methods:{onChange:function(t){var e=this;this.cat_id=t,this.request(l["a"].getAtlasArticleOption,{value:t}).then((function(t){e.specialList=t}))},clearUeditor:function(){$EDITORUI["edui51"]._onClick()},setLinkBases:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(e){console.log("handleOk",e),t.links=e.url,t.$nextTick((function(){t.form.setFieldsValue({links:t.links})}))},handleCancelBtn:function(){console.log("handleCancel")}})},handleImgCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,d(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},handleChange:function(t){},handleImgChange:function(t){var e=this,i=Object(s["a"])(t.fileList);this.imgUploadList=i;var r=[];this.imgUploadList.map((function(i){if("done"===i.status&&"1000"==i.response.status){var a=i.response.data;r.push(a.full_url),e.$set(e.detail,"img",r)}else"error"===t.file.status&&e.$message.error("".concat(t.file.name," 上传失败！"))}))},add:function(){this.visible=!0,this.id=0,this.title="Banner添加",this.detail={id:0,name:"",description:"",content:"",sort:"",img:[]}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(t),this.title="Banner编辑"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){if(e)t.confirmLoading=!1;else{i.cat_id=t.cat_id,i.id=t.id,i.pic=t.detail.img;var r="^[ ]+$",a=new RegExp(r);if(!i.name||a.test(i.name))return t.$message.error("请输入广告名称！"),t.confirmLoading=!1,!1;if(!i.pic[0])return t.$message.error("请上传图片！"),t.confirmLoading=!1,!1;i.content=t.detail.content,t.request(l["a"].getRecruitBannerCreate,i).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",i)}),1500)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(t){var e=this;this.request(l["a"].getRecruitBannerInfo,{id:this.id}).then((function(t){if(e.img=t.pic,e.showMethod=t.showMethod,e.detail=t,t.cat_id&&(e.specialList=t.specialList,e.request(l["a"].getAtlasArticleOption,{value:t.cat_id,id:t.id}).then((function(t){e.specialList=t}))),t.img){e.imgUploadList=[];for(var i=0;i<t.img.length;i++){var r={uid:i,name:"img_"+i,status:"done",url:t.img[i]};e.imgUploadList.push(r)}}"object"==Object(n["a"])(t.detail)&&(e.detail=t.detail)}))}}},g=f,m=(i("b99a"),i("0c7c")),h=Object(m["a"])(g,r,a,!1,null,null,null);e["default"]=h.exports},b189:function(t,e,i){"use strict";i("f12d")},b271:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[i("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.$refs.createModal.add()}}},[i("a-icon",{attrs:{type:"plus"}}),t._v("新增")],1),i("div",{staticStyle:{height:"30px"}}),i("a-card",{attrs:{bordered:!1}},[i("div",[t._v("设置图片后将自动显示在招聘专栏的首页位置，对坐展示5个")]),i("a-table",{attrs:{columns:t.columns,"data-source":t.hrList,pagination:t.pagination,rowKey:"id"},on:{change:t.handleChange},scopedSlots:t._u([{key:"sort",fn:function(e,r){return i("span",{},[i("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0,step:"1"},on:{blur:function(i){return t.handleSortChange(e,r.id)}},model:{value:r.sort,callback:function(e){t.$set(r,"sort",e)},expression:"record.sort"}})],1)}},{key:"images",fn:function(e,r){return i("span",{},[i("a",{on:{click:function(e){return t.$refs.imagesModal.images(r.images)}}},[i("img",{staticStyle:{"max-width":"84px","max-height":"38px"},attrs:{src:r.images}})])])}},{key:"links",fn:function(e,r){return i("span",{},[i("a",{attrs:{target:"_blank",href:r.links}},[t._v("查看")])])}},{key:"status",fn:function(e,r){return i("span",{},[1==r.is_dis?i("span",[t._v("展示")]):t._e(),0==r.is_dis?i("span",[t._v("不展示")]):t._e()])}},{key:"action",fn:function(e,r){return i("span",{},[i("a",{on:{click:function(e){return t.$refs.createModal.edit(r.id)}}},[t._v("编辑")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(e){return t.del(r.id)}}},[t._v("删除")]),i("a-divider",{attrs:{type:"vertical"}}),0==r.is_dis?i("a",{on:{click:function(e){return t.ondis(r.id,1)}}},[t._v("展示")]):t._e(),1==r.is_dis?i("a",{on:{click:function(e){return t.dis(r.id,0)}}},[t._v("取消展示")]):t._e()],1)}}])}),i("recruit-banner-create",{ref:"createModal",attrs:{id:t.id},on:{ok:t.handleOk}}),i("recruit-banner-images",{ref:"imagesModal"}),i("atlas-special-list",{ref:"specialModel"})],1)],1)},a=[],n=i("5530"),s=i("86e9"),o=i("20fe"),c=i("4299"),l=i("3445"),u={name:"RecruitHrList",components:{RecruitBannerCreate:s["default"],RecruitBannerImages:o["default"],RecruitBannerView:c["default"]},data:function(){return{hrList:[],searchForm:{cont:""},columns:[{title:"广告名称",dataIndex:"name",key:"name"},{title:"广告图片",dataIndex:"images",key:"images",scopedSlots:{customRender:"images"}},{title:"排序",dataIndex:"sort",key:"sort",scopedSlots:{customRender:"sort"}},{title:"关联链接",dataIndex:"links",key:"links",scopedSlots:{customRender:"links"}},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"",key:"x",scopedSlots:{customRender:"action"}}],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},mounted:function(){this.getRecruitHrList({is_search:!1})},methods:{submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(n["a"])({},this.searchForm);delete e.time,e.is_search=t,this.getRecruitHrList(e)},getRecruitHrList:function(t){var e=this,i=Object(n["a"])({},this.searchForm);delete i.time,1==t.is_search&&console.log(this.pagination.pageSize),1==t.is_search?(i.page=1,this.$set(this.pagination,"current",1)):(i.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),i.pageSize=this.pagination.pageSize,this.request(l["a"].getRecruitBannerList,i).then((function(t){e.hrList=t.list,e.$set(e.pagination,"total",t.count)}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},handleChange:function(t,e,i){this.filteredInfo=e,this.sortedInfo=i},add:function(){},getView:function(t,e){this.$refs.specialModel.getAtlastSpecial(t,e)},handleSortChange:function(t,e){var i=this;this.request(l["a"].getRecruitBannerSort,{id:e,sort:t}).then((function(t){i.getRecruitHrList({is_search:!1})}))},handleOk:function(){this.getRecruitHrList({is_search:!1})},del:function(t){var e=this;this.$confirm({title:"提示",content:"是否确认删除？",onOk:function(){e.request(l["a"].getRecruitBannerDel,{id:t}).then((function(t){e.getRecruitHrList({is_search:!1}),e.$message.success("删除成功")}))},onCancel:function(){}})},ondis:function(t,e){var i=this;this.$confirm({title:"提示",content:"是否确认设置为展示？",onOk:function(){i.request(l["a"].getRecruitBannerDis,{id:t,type:e}).then((function(t){i.getRecruitHrList({is_search:!1}),i.$message.success("设置成功")}))},onCancel:function(){}})},dis:function(t,e){var i=this;this.$confirm({title:"提示",content:"是否确认设置为不展示？",onOk:function(){i.request(l["a"].getRecruitBannerDis,{id:t,type:e}).then((function(t){i.getRecruitHrList({is_search:!1}),i.$message.success("设置成功")}))},onCancel:function(){}})}}},d=u,f=i("0c7c"),g=Object(f["a"])(d,r,a,!1,null,null,null);e["default"]=g.exports},b99a:function(t,e,i){"use strict";i("24e5")},f12d:function(t,e,i){}}]);