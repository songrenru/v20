(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18da9247"],{"4c9d":function(e,t,i){"use strict";i("b168f")},b168f:function(e,t,i){},c9fe:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"上传文件",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-upload",{attrs:{accept:"txt",multiple:!1,"show-upload-list":!1,name:"file",action:e.upload_url,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[i("a-button",[i("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传 ")],1)],1)],1),i("a-col",{attrs:{span:20}},[e._v(" 下载"),i("a",{on:{click:function(t){return e.downloads()}}},[e._v("Excel模板")]),e._v("，按要求填写数据 ")])],1)],1)],1)],1)},a=[],n=i("a0e0"),s=i("ca00"),l={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),headers:{authorization:"authorization-text"},upload_url:"/v20/public/index.php/"+n["a"].uploadExcel,file_url:"",gid:"",select_key:"",tokenName:"",sysName:""}},watch:{gid:function(e){console.log("555555555555555555",e),this.gid=e}},mounted:function(){},methods:{add:function(e,t){this.title="添加",this.visible=!0,this.id="0",this.file_url="",e&&(this.gid=e),this.select_key=t;var i=Object(s["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village"},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,i){t?e.confirmLoading=!1:(i.file_url=e.file_url,i.gid=e.gid,i.select_key=e.select_key,e.tokenName&&(i["tokenName"]=e.tokenName),e.request(n["a"].importExcel,i).then((function(t){e.$message.success("导入成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",i)}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",i))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},downloads:function(){window.location.href="/v20/public/index.php/"+n["a"].downloadExcel},handleChange:function(e){if("uploading"!==e.file.status&&console.log(e.file,e.fileList),console.log("123123123",e.file),e.file&&e.file.response){var t=e.file.response;1e3===t.status?(this.file_url=t.data.url,this.$message.success("上传Excel成功")):this.$message.error(t.msg)}},beforeUpload:function(e){var t=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],i=t.indexOf(e.type);i<0&&this.$message.error("只支持xlsx格式的图片");var o=e.size/1024/1024<2;return o||this.$message.error("上传图片最大支持2MB!"),i&&o}}},r=l,c=(i("4c9d"),i("2877")),f=Object(c["a"])(r,o,a,!1,null,null,null);t["default"]=f.exports}}]);