(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e50e2f3"],{"56b74":function(e,t,a){},"9b56":function(e,t,a){"use strict";a("56b74")},eed2:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"选择分组",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"请选择分组","tree-default-expand-all":""},scopedSlots:e._u([{key:"title",fn:function(t){var i=t.key,s=t.value;return 1==i?a("span",{staticStyle:{color:"#08c"}},[e._v(" Child Node1 "+e._s(s)+" ")]):e._e()}}],null,!0),model:{value:e.gid,callback:function(t){e.gid=t},expression:"gid"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"上传文件",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-upload",{attrs:{name:"file",action:e.upload_url,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传 ")],1)],1)],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},s=[],o=a("53ca"),n=a("a0e0"),l=a("ca00"),r={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,title:"",content:""},treeData:[],id:0,pid:0,gid:1,headers:{authorization:"authorization-text"},upload_url:"/v20/public/index.php/"+n["a"].uploadFile,data_arr:[],select_key:"",tokenName:"",sysName:""}},watch:{gid:function(e){console.log("555555555555555555",e),this.gid=e}},mounted:function(){},methods:{add:function(e,t){var a=Object(l["i"])(location.hash);a?(this.tokenName=a+"_access_token",this.sysName=a):this.sysName="village",this.title="添加",this.visible=!0,this.id="0",this.detail={id:0,title:"",content:""},this.checkedKeys=[],e&&(this.gid=e),this.select_key=t,this.data_arr=[],this.getMenuList()},edit:function(e,t){var a=Object(l["i"])(location.hash);a?(this.tokenName=a+"_access_token",this.sysName=a):this.sysName="village",console.log("erererererer",e),this.visible=!0,this.id=e,this.getEditInfo(),this.getMenuList(),this.id>0?this.title="编辑":this.title="添加",this.select_key=t,console.log(this.title)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){t?e.confirmLoading=!1:(a.id=e.id,a.gid=e.gid,a.type=2,a.select_key=e.select_key,e.data_arr&&e.data_arr.length>0?a.content=e.data_arr:e.$message.error("请上传图片"),e.tokenName&&(a["tokenName"]=e.tokenName),e.request(n["a"].subContent,a).then((function(t){e.detail.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",a)}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",a))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this,t={id:this.id};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getContentInfo,t).then((function(t){console.log(t),e.detail={id:0,title:"",content:""},"object"==Object(o["a"])(t.info)&&(e.detail=t.info,e.gid=t.info.gid)}))},getMenuList:function(){var e=this,t={};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getMenuSelect,t).then((function(t){console.log(t),e.treeData=t.menu_list}))},handleChange:function(e){if("uploading"!==e.file.status&&console.log(e.file,e.fileList),console.log("123123123",e.file),e.file&&e.file.response){var t=e.file.response;1e3===t.status?(this.data_arr.push(t.data),console.log("data_arr",this.data_arr),this.$message.success("上传成功")):this.$message.error(t.msg)}},beforeUpload:function(e){var t=["image/jpeg","image/png","image/jpg"],a=t.indexOf(e.type);a<0&&this.$message.error("只支持JPEG,PNG,JPG格式的图片");var i=e.size/1024/1024<2;return i||this.$message.error("上传图片最大支持2MB!"),a&&i}}},c=r,d=(a("9b56"),a("0c7c")),h=Object(d["a"])(c,i,s,!1,null,null,null);t["default"]=h.exports}}]);