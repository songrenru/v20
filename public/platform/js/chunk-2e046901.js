(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e046901"],{b706:function(t,a,e){"use strict";var i={getBankingList:"/banking/platform.Banking/getList",getBankingDetail:"/banking/platform.Banking/getDetail",saveBanking:"/banking/platform.Banking/saveBanking",getBankingLogList:"/banking/platform.Banking/getLogList",delBanking:"/banking/platform.Banking/delBanking",getApplyList:"/banking/platform.BankingApply/getList",changeStatus:"/banking/platform.BankingApply/changeStatus",exportUrl:"/banking/platform.BankingApply/export",getVillageList:"/banking/platform.BankingApply/getVillageList",getBankingConfigList:"/banking/platform.Banking/getConfigDataList",editSeting:"/banking/platform.Banking/editSeting",getInformationList:"/banking/platform.Banking/getInformationList",delInformation:"/banking/platform.Banking/delInformation",getInformationData:"/banking/platform.Banking/getInformationData",editOrAddInformation:"/banking/platform.Banking/editOrAddInformation"};a["a"]=i},eb06:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-modal",{attrs:{visible:t.visible,title:t.title,width:"60%",destroyOnClose:!0,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel,ok:t.handleOk}},[e("a-form-model",{attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-model-item",{attrs:{label:"资讯标题",required:""}},[e("a-input",{model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("a-form-model-item",{attrs:{label:"图片",required:"",help:"建议尺寸104*78"}},[e("a-upload",{attrs:{name:"reply_pic","list-type":"picture","show-upload-list":!1,data:{upload_dir:""},action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:t.handleUploadChange}},[t.image?e("img",{staticStyle:{width:"120px",height:"120px"},attrs:{src:t.image,alt:"image"}}):e("div",[!0===t.loading?e("a-icon",{attrs:{type:"loading"}}):t._e(),e("a-button",[e("a-icon",{attrs:{type:"upload"}}),t._v(" 上传 ")],1)],1)])],1),e("a-form-model-item",{attrs:{label:"显示时长",required:""}},[e("a-radio-group",{model:{value:t.formData.show_type,callback:function(a){t.$set(t.formData,"show_type",a)},expression:"formData.show_type"}},[e("a-radio",{attrs:{value:"1"}},[t._v(" 永久显示 ")]),e("a-radio",{attrs:{value:"2"}},[t._v(" 时间段 ")])],1)],1),2==t.formData.show_type?e("a-form-model-item",{attrs:{label:"显示开始时间",required:""}},[null===t.formData.start_time?e("a-date-picker",{staticStyle:{width:"100%"},attrs:{"default-value":null,"show-time":"",type:"date",placeholder:"显示开始时间"},on:{change:t.startTimeChange}}):e("a-date-picker",{staticStyle:{width:"100%"},attrs:{"default-value":t.moment(t.formData.start_time),"show-time":"",type:"date",placeholder:"显示开始时间"},on:{change:t.startTimeChange}})],1):t._e(),2==t.formData.show_type?e("a-form-model-item",{attrs:{label:"显示结束时间",required:""}},[null===t.formData.start_time?e("a-date-picker",{staticStyle:{width:"100%"},attrs:{"default-value":null,"show-time":"",type:"date",placeholder:"显示结束时间"},on:{change:t.endTimeChange}}):e("a-date-picker",{staticStyle:{width:"100%"},attrs:{"default-value":t.moment(t.formData.end_time),"show-time":"",type:"date",placeholder:"显示结束时间"},on:{change:t.endTimeChange}})],1):t._e(),e("a-form-model-item",{attrs:{label:"资讯内容"}},[e("rich-text",{attrs:{info:t.formData.content},on:{"update:info":function(a){return t.$set(t.formData,"content",a)}}})],1)],1)],1)],1)},n=[],o=e("b706"),r=e("884f"),l=e("c1df"),s=e.n(l);function m(t,a){var e=new FileReader;e.addEventListener("load",(function(){return a(e.result)})),e.readAsDataURL(t)}var d={components:{RichText:r["a"]},props:{visible:Boolean,title:String,formData:Object},data:function(){return{labelCol:{span:6},wrapperCol:{span:12},loading:!1,image:"",confirmLoading:!1}},watch:{formData:function(t){this.image=this.formData.image}},mounted:function(){this.image=this.formData.image},methods:{moment:s.a,handleOk:function(){var t=this;if(console.log(this.formData,"dddddd"),""===this.formData.title)return this.$message.error("资讯标题必填！"),!1;if(""===this.formData.image)return this.$message.error("资讯图片必传！"),!1;if("2"===this.formData.show_type){if(void 0===this.formData.start_time||null===this.formData.start_time)return this.$message.error("显示开始时间必填！"),!1;if(void 0===this.formData.end_time||null===this.formData.end_time)return this.$message.error("显示结束时间必填！"),!1}this.confirmLoading=!0,this.request(o["a"].editOrAddInformation,this.formData).then((function(a){t.$message.success("操作成功!",1),setTimeout((function(){t.image="",t.formData={},t.$emit("handleCancel"),t.$emit("getDataList",!1),t.confirmLoading=!1}),1e3)}))},handleCancel:function(){this.$emit("handleCancel")},handleUploadChange:function(t){var a=this;if("uploading"!==t.file.status){if("done"===t.file.status&&1e3===t.file.response.status){var e=t.file.response.data;this.$set(this.formData,"image",e),m(t.file.originFileObj,(function(t){a.image=t,a.loading=!1}))}}else this.loading=!0},startTimeChange:function(t,a){this.$set(this.formData,"start_time",a)},endTimeChange:function(t,a){this.$set(this.formData,"end_time",a)}}},g=d,f=e("2877"),p=Object(f["a"])(g,i,n,!1,null,null,null);a["default"]=p.exports}}]);