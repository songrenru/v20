(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-468ca9ae","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t("d3b7");function i(e,a,t,i,r,n,l){try{var o=e[n](l),s=o.value}catch(u){return void t(u)}o.done?a(s):Promise.resolve(s).then(i,r)}function r(e){return function(){var a=this,t=arguments;return new Promise((function(r,n){var l=e.apply(a,t);function o(e){i(l,r,n,o,s,"next",e)}function s(e){i(l,r,n,o,s,"throw",e)}o(void 0)}))}}},2909:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var i=t("6b75");function r(e){if(Array.isArray(e))return Object(i["a"])(e)}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0"),t("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var l=t("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return r(e)||n(e)||Object(l["a"])(e)||o()}},"7b3f":function(e,a,t){"use strict";var i={uploadImg:"/common/common.UploadFile/uploadImg"};a["a"]=i},aa9a:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-tabs",{attrs:{"default-active-key":"1"}},[t("a-tab-pane",{key:"1",attrs:{tab:e.title}})],1),t("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:8}},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"e支付名称",help:"建议不要超过10个字"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:e.detail.title,rules:[{required:!0,message:"请输入e支付名称!"}]}],expression:"['title', { initialValue: detail.title,rules: [{ required: true, message: '请输入e支付名称!' }] }]"}],attrs:{"field-names":"title",placeholder:"请输入e支付名称"}})],1),t("a-form-item",{attrs:{label:"功能优势",help:"每个优势标签之间用空格隔开"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["label",{initialValue:e.detail.label,rules:[{required:!0,message:"请输入功能优势!"}]}],expression:"['label', { initialValue: detail.label,rules: [{ required: true, message: '请输入功能优势!' }] }]"}],attrs:{"field-names":"label",placeholder:"请输入功能优势"}})],1),t("a-form-item",{attrs:{label:"业务简介"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["introduce",{initialValue:e.detail.introduce,rules:[{required:!0,message:"请输入业务简介!"}]}],expression:"['introduce', { initialValue: detail.introduce,rules: [{ required: true, message: '请输入业务简介!' }] }]"}],attrs:{placeholder:"请输入业务简介"}})],1),t("a-form-item",{attrs:{label:"使用客户"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["for_customer",{initialValue:e.detail.for_customer,rules:[{required:!0,message:"请输入使用客户!"}]}],expression:"['for_customer', { initialValue: detail.for_customer,rules: [{ required: true, message: '请输入使用客户!' }] }]"}],attrs:{"field-names":"for_customer",placeholder:"请输入使用客户"}})],1),t("a-form-item",{attrs:{label:"联系电话"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{initialValue:e.detail.phone,rules:[{required:!0,message:"请输入联系电话!"}]}],expression:"['phone', { initialValue: detail.phone,rules: [{ required: true, message: '请输入联系电话!' }] }]"}],attrs:{"field-names":"phone",placeholder:"请输入联系电话"}})],1),t("a-form-item",{attrs:{label:"发布人"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["release_people",{initialValue:e.detail.release_people,rules:[{required:!0,message:"请输入发布人!"}]}],expression:"['release_people', { initialValue: detail.release_people,rules: [{ required: true, message: '请输入发布人!' }] }]"}],attrs:{"field-names":"release_people",placeholder:"请输入发布人"}})],1),e.detail.banking_id?t("a-form-item",{attrs:{label:"修改人"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["edit_people",{initialValue:e.detail.edit_people,rules:[{required:!0,message:"请输入修改人!"}]}],expression:"['edit_people', { initialValue: detail.edit_people,rules: [{ required: true, message: '请输入修改人!' }] }]"}],attrs:{"field-names":"edit_people",placeholder:"请输入修改人"}})],1):e._e(),t("a-form-item",{attrs:{label:"上传产品封面图片",help:"建议200*200px"}},[t("a-upload",{attrs:{name:"reply_pic","file-list":e.fileListCover,action:e.uploadImg,headers:e.headers,"list-type":"picture-card"},on:{preview:e.handlePreviewCover,change:function(a){return e.upLoadChangeCover(a)}}},[e.fileListCover.length<1?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),t("a-modal",{attrs:{visible:e.previewVisibleCover,footer:null},on:{cancel:e.handleCancelCover}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImageCover}})])],1),t("a-form-item",{attrs:{label:"上传产品详情图片",help:"建议750*600px"}},[t("a-upload",{attrs:{name:"reply_pic","file-list":e.fileList,action:e.uploadImg,headers:e.headers,"list-type":"picture-card"},on:{preview:e.handlePreview,change:function(a){return e.upLoadChange(a)}}},[e.fileList.length<1?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),t("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" 提交 ")])],1)],1)],1)],1)},r=[],n=t("2909"),l=t("1da1"),o=(t("fb6a"),t("d81d"),t("b0c0"),t("96cf"),t("b706")),s=t("7b3f"),u={components:{},data:function(){return{type:"ecard",headers:{authorization:"authorization-text"},uploadImg:"/v20/public/index.php"+s["a"].uploadImg+"?upload_dir=/banking/ecard",baseData:{banking_id:0,type:"ecard",title:"",introduce:"",images:"",cover_image:"",phone:"",label:"",release_people:"",for_customer:""},title:"新建E支付",detail:{},fileList:[],fileListCover:[],previewVisible:!1,previewVisibleCover:!1,previewImage:null,previewImageCover:null,form:this.$form.createForm(this,{name:"coordinated"})}},mounted:function(){console.log("mounted"),this.resetForm(),this.$route.query.banking_id&&(this.detail.banking_id=this.$route.query.banking_id,this.getBankingDetail())},watch:{$route:function(e,a){console.log("watch");var t=e.query;t.banking_id?(this.detail.banking_id=t.banking_id,this.getBankingDetail()):this.resetForm()}},methods:{resetForm:function(){this.title="新建E支付",this.form.resetFields(),this.detail=this.baseData},getBankingDetail:function(){var e=this;this.title="编辑E支付",this.request(o["a"].getBankingDetail,{banking_id:this.detail.banking_id}).then((function(a){e.detail=a;var t=[];if(a.images.length>0)for(var i in a.images)t.push({uid:i+1,name:"image.png",status:"done",url:a.images[i],data:a.images[i]});e.fileList=t,e.fileListCover[0]={uid:1,name:"image.png",status:"done",url:a.cover_image,data:a.cover_image}}))},handlePreview:function(e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.url||e.preview){t.next=4;break}return t.next=3,getBase64(e.originFileObj);case 3:e.preview=t.sent;case 4:a.previewImage=e.url||e.preview,a.previewVisible=!0;case 6:case"end":return t.stop()}}),t)})))()},handlePreviewCover:function(e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.url||e.preview){t.next=4;break}return t.next=3,getBase64(e.originFileObj);case 3:e.preview=t.sent;case 4:a.previewImageCover=e.url||e.preview,a.previewVisibleCover=!0;case 6:case"end":return t.stop()}}),t)})))()},upLoadChange:function(e){var a=this,t=Object(n["a"])(e.fileList);t=t.slice(-1),t=t.map((function(t){return t.response&&(t.url=t.response.data.full_url,a.detail.images=e.file.response.data.image),t})),this.fileList=t,"done"===e.file.status||"error"===e.file.status&&this.$message.error("".concat(e.file.name," 上传失败."))},upLoadChangeCover:function(e){var a=this,t=Object(n["a"])(e.fileList);t=t.slice(-1),t=t.map((function(t){return t.response&&(t.url=t.response.data.full_url,a.detail.cover_image=e.file.response.data.image),t})),this.fileListCover=t,"done"===e.file.status||"error"===e.file.status&&this.$message.error("".concat(e.file.name," 上传失败."))},handleCancel:function(){this.previewVisible=!1},handleCancelCover:function(){this.previewVisibleCover=!1},handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFields((function(e,t){if(!e){if(console.log(t,"values"),console.log(a.detail,"detail"),t.banking_id=a.detail.banking_id,t.cover_image=a.detail.cover_image,t.images=a.detail.images,t.type=a.detail.type,!a.detail.cover_image)return a.$message.error("请上传产品封面图！"),!1;if(!a.detail.images)return a.$message.error("请上传产品详情图！"),!1;a.request(o["a"].saveBanking,t).then((function(e){a.resetForm(),a.$message.success(a.L("操作成功！")),localStorage.setItem("refresh",1),a.$router.push({path:"/banking/platform.banking/BankingList"})}))}}))}}},d=u,p=t("2877"),c=Object(p["a"])(d,i,r,!1,null,null,null);a["default"]=c.exports},b706:function(e,a,t){"use strict";var i={getBankingList:"/banking/platform.Banking/getList",getBankingDetail:"/banking/platform.Banking/getDetail",saveBanking:"/banking/platform.Banking/saveBanking",getBankingLogList:"/banking/platform.Banking/getLogList",delBanking:"/banking/platform.Banking/delBanking",getApplyList:"/banking/platform.BankingApply/getList",changeStatus:"/banking/platform.BankingApply/changeStatus",exportUrl:"/banking/platform.BankingApply/export",getVillageList:"/banking/platform.BankingApply/getVillageList",getBankingConfigList:"/banking/platform.Banking/getConfigDataList",editSeting:"/banking/platform.Banking/editSeting",getInformationList:"/banking/platform.Banking/getInformationList",delInformation:"/banking/platform.Banking/delInformation",getInformationData:"/banking/platform.Banking/getInformationData",editOrAddInformation:"/banking/platform.Banking/editOrAddInformation"};a["a"]=i}}]);