(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-469f77c0"],{"3c21":function(e,t,i){},"9b56":function(e,t,i){"use strict";i("3c21")},eed2:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"选择分组",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"请选择分组","tree-default-expand-all":""},scopedSlots:e._u([{key:"title",fn:function(i){var a=i.key,s=i.value;return 1==a?t("span",{staticStyle:{color:"#08c"}},[e._v(" Child Node1 "+e._s(s)+" ")]):e._e()}}],null,!0),model:{value:e.gid,callback:function(t){e.gid=t},expression:"gid"}})],1),t("a-col",{attrs:{span:6}})],1),t("a-form-item",{attrs:{label:"上传文件",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-upload",{attrs:{name:"file",action:e.upload_url,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传 ")],1)],1)],1),t("a-col",{attrs:{span:6}})],1)],1)],1)],1)},s=[],o=i("2396"),n=i("a0e0"),l=i("ca00"),r={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,title:"",content:""},treeData:[],id:0,pid:0,gid:1,headers:{authorization:"authorization-text"},upload_url:"/v20/public/index.php/"+n["a"].uploadFile,data_arr:[],select_key:"",tokenName:"",sysName:""}},watch:{gid:function(e){console.log("555555555555555555",e),this.gid=e}},mounted:function(){},methods:{add:function(e,t){var i=Object(l["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",this.title="添加",this.visible=!0,this.id="0",this.detail={id:0,title:"",content:""},this.checkedKeys=[],e&&(this.gid=e),this.select_key=t,this.data_arr=[],this.getMenuList()},edit:function(e,t){var i=Object(l["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",console.log("erererererer",e),this.visible=!0,this.id=e,this.getEditInfo(),this.getMenuList(),this.id>0?this.title="编辑":this.title="添加",this.select_key=t,console.log(this.title)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,i){t?e.confirmLoading=!1:(i.id=e.id,i.gid=e.gid,i.type=2,i.select_key=e.select_key,e.data_arr&&e.data_arr.length>0?i.content=e.data_arr:e.$message.error("请上传图片"),e.tokenName&&(i["tokenName"]=e.tokenName),e.request(n["a"].subContent,i).then((function(t){e.detail.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",i)}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",i))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this,t={id:this.id};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getContentInfo,t).then((function(t){console.log(t),e.detail={id:0,title:"",content:""},"object"==Object(o["a"])(t.info)&&(e.detail=t.info,e.gid=t.info.gid)}))},getMenuList:function(){var e=this,t={};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getMenuSelect,t).then((function(t){console.log(t),e.treeData=t.menu_list}))},handleChange:function(e){if("uploading"!==e.file.status&&console.log(e.file,e.fileList),console.log("123123123",e.file),e.file&&e.file.response){var t=e.file.response;1e3===t.status?(this.data_arr.push(t.data),console.log("data_arr",this.data_arr),this.$message.success("上传成功")):this.$message.error(t.msg)}},beforeUpload:function(e){var t=["image/jpeg","image/png","image/jpg"],i=t.indexOf(e.type);i<0&&this.$message.error("只支持JPEG,PNG,JPG格式的图片");var a=e.size/1024/1024<2;return a||this.$message.error("上传图片最大支持2MB!"),i&&a}}},c=r,d=(i("9b56"),i("0b56")),h=Object(d["a"])(c,a,s,!1,null,null,null);t["default"]=h.exports}}]);