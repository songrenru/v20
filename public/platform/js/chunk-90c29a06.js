(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90c29a06"],{"4cb3":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"选择分组",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"请选择分组","tree-default-expand-all":""},scopedSlots:e._u([{key:"title",fn:function(t){var a=t.key,s=t.value;return 1==a?i("span",{staticStyle:{color:"#08c"}},[e._v(" Child Node1 "+e._s(s)+" ")]):e._e()}}],null,!0),model:{value:e.gid,callback:function(t){e.gid=t},expression:"gid"}})],1),i("a-col",{attrs:{span:6}})],1),2===e.type?i("a-form-item",{attrs:{label:"上传图片",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:10}},[i("a-upload",{attrs:{name:"file",action:e.upload_url,"file-list":e.fileList3,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[i("a-button",[i("a-icon",{attrs:{type:e.fileloading?"loading":"upload"}}),e._v(" 点击上传 ")],1)],1)],1),i("a-col",{attrs:{span:24}},[e._v(" （图片大小不超过2M，图片名不能重复，支持JPG、JPEG及PNG格式) ")])],1):e._e(),3===e.type?i("a-form-item",{attrs:{label:"上传文件",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:16}},[i("a-upload",{attrs:{name:"file",action:e.upload_file_url,"file-list":e.fileList3,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[i("a-button",[i("a-icon",{attrs:{type:e.fileloading?"loading":"upload"}}),e._v(" 点击上传 ")],1)],1)],1),i("a-col",{staticStyle:{"margin-left":"-30px"},attrs:{span:24}},[e._v(" （上传文件大小不超过20MB，支持DOC、DOCX、XLS、XLSX、PPT、PPTX、TXT、PDF及Xmind格式。） ")])],1):e._e()],1)],1)],1)},s=[],l=i("53ca"),o=i("a0e0"),n=i("ca00"),r={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,fileloading:!1,form:this.$form.createForm(this),detail:{id:0,title:"",content:""},treeData:[],id:0,pid:0,gid:1,headers:{authorization:"authorization-text"},upload_url:"/v20/public/index.php/"+o["a"].uploadFile,upload_file_url:"/v20/public/index.php/"+o["a"].uploadFiles,data_arr:[],type:"",select_key:"",tokenName:"",sysName:"",fileList3:[]}},watch:{gid:function(e){console.log("555555555555555555",e),this.gid=e}},mounted:function(){},methods:{add:function(e,t,i){this.title=2===t?"上传图片":"上传文件";var a=Object(n["i"])(location.hash);a?(this.tokenName=a+"_access_token",this.sysName=a):this.sysName="village",this.fileList3=[],this.data_arr=[],this.visible=!0,this.id="0",this.detail={id:0,title:"",content:""},this.checkedKeys=[],e&&(this.gid=e),this.select_key=i,this.type=t,this.getMenuList()},edit:function(e,t){var i=Object(n["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",console.log("erererererer",e),this.visible=!0,this.id=e,this.fileList3=[],this.data_arr=[],this.getEditInfo(),this.getMenuList(),this.id>0?this.title="编辑":this.title="添加",this.select_key=t,console.log(this.title)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,i){if(t)e.confirmLoading=!1;else{if(i.id=e.id,i.gid=e.gid,e.type||e.$message.error("参数异常"),i.type=e.type,!(e.data_arr&&e.data_arr.length>0))return e.$message.error("请上传图片"),e.confirmLoading=!1,e.visible=!1,!1;i.content=e.data_arr,i.select_key=e.select_key,e.tokenName&&(i["tokenName"]=e.tokenName),e.request(o["a"].subContent,i).then((function(t){e.detail.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",i)}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",i)}}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this,t={id:this.id};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(o["a"].getContentInfo,t).then((function(t){console.log(t),e.detail={id:0,title:"",content:""},"object"==Object(l["a"])(t.info)&&(e.detail=t.info,e.gid=t.info.gid)}))},getMenuList:function(){var e=this,t={};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(o["a"].getMenuSelect,t).then((function(t){console.log(t),e.treeData=t.menu_list}))},beforeUpload:function(e){var t=["image/jpeg","image/png","image/jpg"],i=t.indexOf(e.type);if(i<0)return this.$message.error("只支持JPEG,PNG,JPG格式的图片"),!1;var a=e.size/1024/1024<2;return a?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):i&&a:(this.$message.error("上传图片最大支持2MB!"),!1)},beforeUploadFile:function(e){var t=e.size/1024/1024<20;return t?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):t:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChange:function(e){if(console.log("rrrrrrrrrrrrrrrrrrr",e),e.file&&!e.file.status&&this.fileloading)return!1;if("uploading"===e.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.fileList3=e.fileList}if("uploading"!==e.file.status&&(this.fileloading=!1,console.log(e.file,e.fileList)),console.log("123123123",e.file),"done"==e.file.status&&e.file&&e.file.response){var t=e.file.response;if(1e3===t.status)this.data_arr.push(t.data),console.log("data_arr",this.data_arr),this.$message.success("上传成功"),this.fileList3=e.fileList;else{for(var i in this.$message.error(e.file.response.msg),this.fileList3=[],e.fileList)if(e.fileList[i]){var a=e.fileList[i];console.log("info_1",a),a&&a.response&&1e3===a.response.status&&this.fileList3.push(a)}console.log("fileList3",this.fileList3)}}if("removed"==e.file.status&&e.file){var s=e.file.response;if(s&&1e3===s.status)for(var i in this.data_arr=[],e.fileList)if(e.fileList[i]){var l=e.fileList[i];l&&l.response&&1e3===l.response.status&&this.data_arr.push(l.response.data)}this.fileList3=e.fileList,console.log("data_arr1",this.data_arr)}}}},f=r,d=(i("b721"),i("2877")),c=Object(d["a"])(f,a,s,!1,null,null,null);t["default"]=c.exports},"85f1":function(e,t,i){},b721:function(e,t,i){"use strict";i("85f1")}}]);