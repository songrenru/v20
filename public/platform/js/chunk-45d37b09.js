(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45d37b09"],{b706:function(a,t,e){"use strict";var n={getBankingList:"/banking/platform.Banking/getList",getBankingDetail:"/banking/platform.Banking/getDetail",saveBanking:"/banking/platform.Banking/saveBanking",getBankingLogList:"/banking/platform.Banking/getLogList",delBanking:"/banking/platform.Banking/delBanking",getApplyList:"/banking/platform.BankingApply/getList",changeStatus:"/banking/platform.BankingApply/changeStatus",exportUrl:"/banking/platform.BankingApply/export",getVillageList:"/banking/platform.BankingApply/getVillageList",getBankingConfigList:"/banking/platform.Banking/getConfigDataList",editSeting:"/banking/platform.Banking/editSeting",getInformationList:"/banking/platform.Banking/getInformationList",delInformation:"/banking/platform.Banking/delInformation",getInformationData:"/banking/platform.Banking/getInformationData",editOrAddInformation:"/banking/platform.Banking/editOrAddInformation"};t["a"]=n},f49f:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[e("a-tabs",{attrs:{"default-active-key":"loans"}},[e("a-tab-pane",{key:"loans",attrs:{tab:"管理配置"}})],1),e("a-form-model",{staticStyle:{"margin-top":"20px",padding:"20px","background-color":"#fff"},attrs:{model:a.formData,"label-col":a.labelCol,"wrapper-col":a.wrapperCol}},[e("a-form-model-item",{attrs:{label:"同一种信用卡申请次数"}},[e("a-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:a.formData.credit_card_apply_times,callback:function(t){a.$set(a.formData,"credit_card_apply_times",t)},expression:"formData.credit_card_apply_times"}}),a._v("   次 ")],1),e("a-form-model-item",{attrs:{label:"用户存款提交信息是否需要填写存款金额"}},[e("a-radio-group",{model:{value:a.formData.deposit_need_input_money,callback:function(t){a.$set(a.formData,"deposit_need_input_money",t)},expression:"formData.deposit_need_input_money"}},[e("a-radio",{attrs:{value:"1"}},[a._v(" 是 ")]),e("a-radio",{attrs:{value:"0"}},[a._v(" 否 ")])],1)],1),e("a-form-model-item",{attrs:{label:"E支付提交信息是否需要填写行业"}},[e("a-radio-group",{model:{value:a.formData.ecard_need_industry,callback:function(t){a.$set(a.formData,"ecard_need_industry",t)},expression:"formData.ecard_need_industry"}},[e("a-radio",{attrs:{value:"1"}},[a._v(" 是 ")]),e("a-radio",{attrs:{value:"0"}},[a._v(" 否 ")])],1)],1),e("a-form-model-item",{attrs:{label:"上传农商行APP下载二维码",required:""}},[e("a-upload",{attrs:{name:"reply_pic","list-type":"picture","show-upload-list":!1,data:{upload_dir:""},action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:a.handleUploadChange}},[a.formData.bank_download_qrcode?e("img",{staticStyle:{width:"120px",height:"120px"},attrs:{src:a.formData.bank_download_qrcode,alt:"image"}}):e("div",[!0===a.loading?e("a-icon",{attrs:{type:"loading"}}):a._e(),e("a-button",[e("a-icon",{attrs:{type:"upload"}}),a._v(" 上传 ")],1)],1)])],1),e("a-form-model-item",{attrs:{label:"上传农商行公众号",required:""}},[e("a-upload",{attrs:{name:"reply_pic","list-type":"picture","show-upload-list":!1,data:{upload_dir:""},action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:a.handleUploadChange1}},[a.formData.bank_wechat_qrcode?e("img",{staticStyle:{width:"120px",height:"120px"},attrs:{src:a.formData.bank_wechat_qrcode,alt:"image"}}):e("div",[!0===a.loading?e("a-icon",{attrs:{type:"loading"}}):a._e(),e("a-button",[e("a-icon",{attrs:{type:"upload"}}),a._v(" 上传 ")],1)],1)])],1),e("a-form-model-item",{attrs:{label:"首页轮播图"}},[e("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return a.indexAdver("首页轮播图")}}},[a._v("配置")])],1),e("a-form-model-item",{attrs:{label:"电子银行轮播图"}},[e("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return a.bankAdver("电子银行轮播图")}}},[a._v("配置")])],1),e("a-form-model-item",{attrs:{label:"是否显示隐私协议"}},[e("a-radio-group",{model:{value:a.formData.banking_user_agreement_show,callback:function(t){a.$set(a.formData,"banking_user_agreement_show",t)},expression:"formData.banking_user_agreement_show"}},[e("a-radio",{attrs:{value:"1"}},[a._v(" 是 ")]),e("a-radio",{attrs:{value:"0"}},[a._v(" 否 ")])],1)],1),e("a-form-model-item",{attrs:{label:"填写金融产品隐私协议",required:""}},[a.complete?e("rich-text",{attrs:{info:a.formData.banking_user_agreement},on:{"update:info":function(t){return a.$set(a.formData,"banking_user_agreement",t)}}}):a._e()],1),e("a-form-model-item",{attrs:{label:""}},[e("a-button",{staticClass:"ml-20",staticStyle:{"margin-left":"384px"},attrs:{type:"primary"},on:{click:function(t){return a.handleOk()}}},[a._v("保存")])],1)],1),e("decorate-adver",{ref:"bannerModel"})],1)},o=[],i=e("b706"),r=e("884f"),s=e("2295");function l(a,t){var e=new FileReader;e.addEventListener("load",(function(){return t(e.result)})),e.readAsDataURL(a)}var d={components:{RichText:r["a"],DecorateAdver:s["default"]},data:function(){return{labelCol:{span:6},wrapperCol:{span:10},loading:!1,formData:{credit_card_apply_times:1,deposit_need_input_money:"0",ecard_need_industry:"0",bank_download_qrcode:"",bank_wechat_qrcode:"",banking_user_agreement:"",banking_user_agreement_show:"0"},complete:!1}},mounted:function(){this.getConfigDataList()},methods:{indexAdver:function(a){this.$refs.bannerModel.getList("banking_index_adver",a)},bankAdver:function(a){this.$refs.bannerModel.getList("banking_electronic_adver",a)},handleOk:function(){var a=this;return console.log(this.formData),""===this.formData.bank_download_qrcode?(this.$message.error("农行APP下载二维码必传！"),!1):""===this.formData.bank_wechat_qrcode?(this.$message.error("农行公众号必传！"),!1):""===this.formData.banking_user_agreement?(this.$message.error("金融产品隐私协议必填！"),!1):void this.request(i["a"].editSeting,this.formData).then((function(t){console.log(t),a.$message.success("保存成功"),a.getConfigDataList()}))},handleUploadChange:function(a){var t=this;if(console.log(a,"gggggg"),"uploading"!==a.file.status){if("done"===a.file.status&&1e3===a.file.response.status){var e=a.file.response.data;console.log(e,"ffffff"),this.$set(this.formData,"bank_download_qrcode",e),l(a.file.originFileObj,(function(a){t.bank_download_qrcode=a,t.loading=!1}))}}else this.loading=!0},handleUploadChange1:function(a){var t=this;if(console.log(a,"gggggg"),"uploading"!==a.file.status){if("done"===a.file.status&&1e3===a.file.response.status){var e=a.file.response.data;console.log(e,"gggggg"),this.$set(this.formData,"bank_wechat_qrcode",e),l(a.file.originFileObj,(function(a){t.bank_wechat_qrcode=a,t.loading=!1}))}}else this.loading=!0},startTimeChange:function(a,t){this.$set(this.formData,"start_time",t)},endTimeChange:function(a,t){this.$set(this.formData,"end_time",t)},getConfigDataList:function(){var a=this;this.request(i["a"].getBankingConfigList).then((function(t){console.log(t,11111),a.$set(a.formData,"credit_card_apply_times",t.credit_card_apply_times),a.$set(a.formData,"deposit_need_input_money",t.deposit_need_input_money),a.$set(a.formData,"ecard_need_industry",t.ecard_need_industry),a.$set(a.formData,"bank_download_qrcode",t.bank_download_qrcode),a.$set(a.formData,"bank_wechat_qrcode",t.bank_wechat_qrcode),a.$set(a.formData,"banking_user_agreement",t.banking_user_agreement),a.$set(a.formData,"banking_user_agreement_show",t.banking_user_agreement_show),a.complete=!0}))}}},g=d,m=e("2877"),c=Object(m["a"])(g,n,o,!1,null,null,null);t["default"]=c.exports}}]);