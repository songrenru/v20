(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22ba7ef2"],{c2d4:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:600,visible:e.visibleUpload,maskClosable:!1,confirmLoading:e.confirmLoading,footer:null},on:{cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("div",[a("span",[e._v("示例表格")]),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/static/file/village/villageUserMoney/导入小区住户余额模板.xlsx",target:"_blank"}},[e._v("点击下载")])]),a("div",{staticStyle:{"border-bottom":"1px solid #e9e6e6","margin-top":"20px"}},[a("span",[e._v("导入Excel")]),a("a-upload",{attrs:{name:"file","file-list":e.avatarFileList,action:e.upload,headers:e.headers,"before-upload":e.beforeUploadFile},on:{change:e.handleChangeUpload}},[a("a-button",{staticStyle:{margin:"20px   20px  10px"},attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 导入 ")],1)],1)],1),e.show?a("div",{staticStyle:{"margin-top":"20px"}},[a("span",[e._v("导入失败")]),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:e.url,target:"_blank"}},[e._v("点击下载带入失败数据表格")])]):e._e(),a("div",{staticStyle:{"margin-top":"20px"}},[a("span",{staticStyle:{"font-weight":"500"}},[e._v(" 1、对应物业编号、楼栋、单元、楼层和房间号对应已经存在的名称进行导入"),a("br"),e._v(" 2、导入的住户余额信息，必须跟小区业主列表数据一致，否则导入失败 ")])])])],1)},s=[],l=a("a0e0"),o=a("ca00"),n={data:function(){return{upload:"/v20/public/index.php"+l["a"].uploadUserMoneyFiles+"?upload_dir=/house/excel/userMoneyUpload",avatarFileList:[],headers:{authorization:"authorization-text"},visibleUpload:!1,confirmLoading:!1,title:"导入",url:"",show:!1,fileloading:!1,data_arr:[],tokenName:"",sysName:"",charge_name:"",project_id:0}},activated:function(){var e=Object(o["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{add:function(e,t){this.title="导入",this.visibleUpload=!0,this.url=window.location.host+"/v20/runtime/demo.xlsx",this.avatarFileList=[],this.charge_name=e,this.project_id=t},beforeUploadFile:function(e){var t=e.size/1024/1024<20;return t?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):t:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChangeUpload:function(e){var t=this;if(console.log("########",e),e.file&&!e.file.status&&this.fileloading)return!1;if("uploading"===e.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.avatarFileList=e.fileList}if("uploading"!==e.file.status&&(this.fileloading=!1,console.log(e.file,e.fileList)),"done"==e.file.status&&e.file&&e.file.response){var a=e.file.response;if(1e3===a.status)this.data_arr.push(a.data),console.log("data_arr",this.data_arr),this.avatarFileList=e.fileList,console.log("--------",a.data.url),this.request(l["a"].exportUserMoney,{tokenName:this.tokenName,file:a.data.url}).then((function(e){e.error?(t.$parent.getList(),t.$message.success("上传成功")):window.location.href=e.data})),this.visibleUpload=!1;else for(var i in this.$message.error(e.file.response.msg),this.avatarFileList=[],e.fileList)if(e.fileList[i]){var s=e.fileList[i];console.log("info_1",s),s&&s.response&&1e3===s.response.status&&this.avatarFileList.push(s)}}if("removed"==e.file.status&&e.file){var o=e.file.response;if(o&&1e3===o.status)for(var i in this.data_arr=[],e.fileList)if(e.fileList[i]){var n=e.fileList[i];n&&n.response&&1e3===n.response.status&&this.data_arr.push(n.response.data)}this.avatarFileList=e.fileList,console.log("data_arr1",this.data_arr)}},handleCancel:function(){this.visibleUpload=!1}}},r=n,d=(a("ccc9"),a("2877")),f=Object(d["a"])(r,i,s,!1,null,"ae9a20bc",null);t["default"]=f.exports},ccc9:function(e,t,a){"use strict";a("f74c")},f74c:function(e,t,a){}}]);