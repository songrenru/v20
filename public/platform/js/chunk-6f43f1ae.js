(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f43f1ae","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function i(e,t,r,i,a,n,o){try{var c=e[n](o),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(i,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function c(e){i(o,a,n,c,l,"next",e)}function l(e){i(o,a,n,c,l,"throw",e)}c(void 0)}))}}},2909:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r("6b75");function a(e){if(Array.isArray(e))return Object(i["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=r("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return a(e)||n(e)||Object(o["a"])(e)||c()}},3445:function(e,t,r){"use strict";var i={getMerchantList:"/recruit/platform.RecruitMerchant/getMerchantList",updateMerchant:"/recruit/platform.RecruitMerchant/updateMerchant",categoryList:"/recruit/platform.RecruitJobCategory/categoryList",childList:"/recruit/platform.RecruitJobCategory/childList",addCategory:"/recruit/platform.RecruitJobCategory/addCategory",editCategory:"/recruit/platform.RecruitJobCategory/editCategory",updateCategory:"/recruit/platform.RecruitJobCategory/updateCategory",delCategory:"/recruit/platform.RecruitJobCategory/delCategory",delCategorys:"/recruit/platform.RecruitJobCategory/delCategorys",changeSort:"/recruit/platform.RecruitJobCategory/changeSort",childChangeSort:"/recruit/platform.RecruitJobCategory/childChangeSort",getCategory:"/recruit/platform.RecruitJobCategory/getCategory",byOtherCategory:"/recruit/platform.RecruitJobCategory/byOtherCategory",getChildCategory:"/recruit/platform.RecruitJobCategory/getChildCategory",updateChildCategory:"/recruit/platform.RecruitJobCategory/updateChildCategory",getJobList:"/recruit/platform.RecruitMerchant/getJobList",updateJob:"/recruit/platform.RecruitMerchant/updateJob",delJob:"/recruit/platform.RecruitMerchant/delJob",getJobSearch:"/recruit/platform.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/platform.RecruitMerchant/getJobDetail",getRecruitBannerList:"/recruit/platform.RecruitBanner/getRecruitBannerList",getRecruitBannerCreate:"/recruit/platform.RecruitBanner/getRecruitBannerCreate",getRecruitBannerInfo:"/recruit/platform.RecruitBanner/getRecruitBannerInfo",getRecruitBannerSort:"/recruit/platform.RecruitBanner/getRecruitBannerSort",getRecruitBannerDis:"/recruit/platform.RecruitBanner/getRecruitBannerDis",getRecruitBannerDel:"/recruit/platform.RecruitBanner/getRecruitBannerDel",getRecruitIndustryList:"/recruit/platform.RecruitIndustry/getRecruitIndustryList",getRecruitIndustryCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryCreate",getRecruitIndustryInfo:"/recruit/platform.RecruitIndustry/getRecruitIndustryInfo",getRecruitIndustrySort:"/recruit/platform.RecruitIndustry/getRecruitIndustrySort",getRecruitIndustryDis:"/recruit/platform.RecruitIndustry/getRecruitIndustryDis",getRecruitIndustryDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryDel",getRecruitIndustryLevelList:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelList",getRecruitIndustryLevelCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelCreate",getRecruitIndustryLevelDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelDel",getRecruitWelfareList:"/recruit/platform.RecruitWelfare/getRecruitWelfareList",getRecruitWelfareCreate:"/recruit/platform.RecruitWelfare/getRecruitWelfareCreate",getRecruitWelfareInfo:"/recruit/platform.RecruitWelfare/getRecruitWelfareInfo",getRecruitWelfareDis:"/recruit/platform.RecruitWelfare/getRecruitWelfareDis",getRecruitWelfareDel:"/recruit/platform.RecruitWelfare/getRecruitWelfareDel",getList:"/recruit/platform.TalentManagement/getList",getLibMsgLIst:"/recruit/platform.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/platform.TalentManagement/getResumeMsg"};t["a"]=i},"7b3f":function(e,t,r){"use strict";var i={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=i},"86e9":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:840,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"广告名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请填写广告名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请填写广告名称'}]}]"}]})],1),r("div",{staticStyle:{"margin-left":"152px","line-height":"30px"}},[r("span",{staticStyle:{color:"red"}},[e._v("* ")]),r("span",{staticStyle:{color:"#000"}},[e._v("选择图片：")]),e._v("图片建议350*120")]),r("a-form-model-item",{attrs:{label:" ",colon:!1,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("div",{key:e.ImgKey,staticClass:"clearfix"},[r("a-upload",{attrs:{name:"reply_pic",action:e.uploadImg,"list-type":"picture-card","file-list":e.imgUploadList,multiple:!0},on:{preview:e.handlePreview,change:e.handleImgChange}},[e.imgUploadList.length<1?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v(" 上传图片 ")])],1):e._e()]),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleImgCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),r("a-form-item",{attrs:{label:"链接",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["links",{initialValue:e.detail.links,rules:[{required:!1,message:"请填写链接地址"}]}],expression:"['links', {initialValue:detail.links,rules: [{required: false, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),r("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")])],1)],1)],1)],1)},a=[],n=r("53ca"),o=r("2909"),c=r("1da1"),l=(r("96cf"),r("d3b7"),r("d81d"),r("b0c0"),r("4d63"),r("ac1f"),r("25f0"),r("7b3f")),u=r("3445"),s=r("6ec16");function d(e){return new Promise((function(t,r){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(e){return r(e)}}))}var g={components:{RichText:s["a"]},data:function(){return{maskClosable:!1,options:[],specialList:[],previewVisible:!1,previewImage:"",imgUploadList:[],uploadImg:"/v20/public/index.php"+l["a"].uploadImg+"?upload_dir=/group",title:"Banner添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",description:"",content:"",sort:"",img:[],cat_id:0},cat_id:0,id:0}},watch:{visible:function(){this.visible?(this.ImgKey="",this.previewVisible=!1,this.previewImage="",this.imgUploadList=""):this.ImgKey=Math.random(),console.log("this.ImgKey :>> ",this.ImgKey)}},mounted:function(){},methods:{onChange:function(e){var t=this;this.cat_id=e,this.request(u["a"].getAtlasArticleOption,{value:e}).then((function(e){t.specialList=e}))},clearUeditor:function(){$EDITORUI["edui51"]._onClick()},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.links=t.url,e.$nextTick((function(){e.form.setFieldsValue({links:e.links})}))},handleCancelBtn:function(){console.log("handleCancel")}})},handleImgCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,d(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},handleChange:function(e){},handleImgChange:function(e){var t=this,r=Object(o["a"])(e.fileList);this.imgUploadList=r;var i=[];this.imgUploadList.map((function(r){if("done"===r.status&&"1000"==r.response.status){var a=r.response.data;i.push(a.full_url),t.$set(t.detail,"img",i)}else"error"===e.file.status&&t.$message.error("".concat(e.file.name," 上传失败！"))}))},add:function(){this.visible=!0,this.id=0,this.title="Banner添加",this.detail={id:0,name:"",description:"",content:"",sort:"",img:[]}},edit:function(e){this.visible=!0,this.id=e,this.getEditInfo(e),this.title="Banner编辑"},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){if(t)e.confirmLoading=!1;else{r.cat_id=e.cat_id,r.id=e.id,r.pic=e.detail.img;var i="^[ ]+$",a=new RegExp(i);if(!r.name||a.test(r.name))return e.$message.error("请输入广告名称！"),e.confirmLoading=!1,!1;if(!r.pic[0])return e.$message.error("请上传图片！"),e.confirmLoading=!1,!1;r.content=e.detail.content,e.request(u["a"].getRecruitBannerCreate,r).then((function(t){e.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",r)}),1500)})).catch((function(t){e.confirmLoading=!1}))}}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(e){var t=this;this.request(u["a"].getRecruitBannerInfo,{id:this.id}).then((function(e){if(t.img=e.pic,t.showMethod=e.showMethod,t.detail=e,e.cat_id&&(t.specialList=e.specialList,t.request(u["a"].getAtlasArticleOption,{value:e.cat_id,id:e.id}).then((function(e){t.specialList=e}))),e.img){t.imgUploadList=[];for(var r=0;r<e.img.length;r++){var i={uid:r,name:"img_"+r,status:"done",url:e.img[r]};t.imgUploadList.push(i)}}"object"==Object(n["a"])(e.detail)&&(t.detail=e.detail)}))}}},m=g,f=(r("b99a"),r("0c7c")),p=Object(f["a"])(m,i,a,!1,null,null,null);t["default"]=p.exports},b99a:function(e,t,r){"use strict";r("e89b")},e89b:function(e,t,r){}}]);