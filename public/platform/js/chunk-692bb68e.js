(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-692bb68e"],{"0aad":function(t,a,e){"use strict";e("1270")},1270:function(t,a,e){},"43bb":function(t,a,e){"use strict";var o={getHouseHotWordLists:"/voice_robot/platform.HotWordManage/hotWordList",setHouseHotWordStatus:"/voice_robot/platform.HotWordManage/editHotWordStatus",saveHotWordData:"/voice_robot/platform.HotWordManage/editHotWord",deleteHouseHotWord:"/voice_robot/platform.HotWordManage/delHotWord",getOneHouseHotWord:"/voice_robot/platform.HotWordManage/hotWordDetail",getHouseHotWordMaterialCategoryLists:"/voice_robot/platform.MaterialCategory/materialCategoryList",deleteHouseHotWordMaterialCategory:"/voice_robot/platform.MaterialCategory/delMaterialCategory",saveMaterialCategoryData:"/voice_robot/platform.MaterialCategory/editMaterialCategory",exportHotWordMaterial:"/voice_robot/platform.MaterialCategory/exportMaterialCategory",getHouseHotWordMaterialLists:"/voice_robot/platform.MaterialCategory/contentList",deleteHouseHotWordMaterialContent:"/voice_robot/platform.MaterialCategory/delContent",saveHouseHotWordMaterialSetData:"/voice_robot/platform.MaterialCategory/saveContent",getHotWordMaterialLibrary:"/voice_robot/platform.MaterialCategory/getHotWordMaterialLibrary",getHotWordMaterialLibraryDetails:"/voice_robot/platform.MaterialCategory/getHotWordMaterialLibraryDetail"};a["a"]=o},"85c3":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:400,visible:t.visibleUpload,maskClosable:!1,confirmLoading:t.confirmLoading,footer:null},on:{cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:500}},[e("div",[e("span",[t._v("示例表格")]),e("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/static/file/village/hotword/text_material.xls",target:"_blank"}},[t._v("点击下载")]),e("div",[t._v("注意：表格中的【分类名称】和【文字素材内容】都是必填项，有一项没填写则该行数据将不会被导入")])]),e("div",{staticStyle:{"border-bottom":"1px solid #dad8d8","border-top":"1px solid #dad8d8","margin-top":"20px"}},[e("span",[t._v("导入Excel")]),e("a-upload",{attrs:{name:"file","file-list":t.avatarFileList,action:t.upload,headers:t.headers,"before-upload":t.beforeUploadFile},on:{change:t.handleChangeUpload}},[e("a-button",{staticStyle:{margin:"20px   20px  10px"},attrs:{type:"primary"}},[e("a-icon",{attrs:{type:"upload"}}),t._v(" 导入 ")],1)],1)],1),t.show?e("div",{staticStyle:{"margin-top":"20px"}},[e("span",[t._v("导入失败")]),e("a",{staticStyle:{"margin-left":"20px"},attrs:{href:t.url,target:"_blank"}},[t._v("点击下载带入失败数据表格")])]):t._e()])],1)},i=[],r=e("43bb"),s=e("ca00"),l={data:function(){return{upload:"/v20/public/index.php/community/village_api.ContentEngine/uploadExcel?pathname=hotword",avatarFileList:[],headers:{authorization:"authorization-text"},visibleUpload:!1,confirmLoading:!1,title:"导入文字素材",show:!1,fileloading:!1,data_arr:[],tokenName:"",sysName:"",xtype:0}},activated:function(){var t=Object(s["j"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village"},methods:{uploadXfile:function(t){this.title="导入文字素材",this.visibleUpload=!0,this.avatarFileList=[],this.xtype=t},beforeUploadFile:function(t){var a=t.size/1024/1024<20;return a?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):a:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChangeUpload:function(t){var a=this;if(console.log("########",t),t.file&&!t.file.status&&this.fileloading)return!1;if("uploading"===t.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.avatarFileList=t.fileList}if("uploading"!==t.file.status&&(this.fileloading=!1,console.log(t.file,t.fileList)),"done"==t.file.status&&t.file&&t.file.response){var e=t.file.response;if(1e3===e.status)this.data_arr.push(e.data),console.log("data_arr",this.data_arr),this.avatarFileList=t.fileList,console.log("--------",e.data.url),this.request(r["a"].exportHotWordMaterial,{tokenName:this.tokenName,file:e.data.url,xtype:this.xtype}).then((function(t){t.error?(a.$parent.getList(a.xtype),a.$message.success("上传成功")):window.location.href=t.data})),this.visibleUpload=!1;else for(var o in this.$message.error(t.file.response.msg),this.avatarFileList=[],t.fileList)if(t.fileList[o]){var i=t.fileList[o];console.log("info_1",i),i&&i.response&&1e3===i.response.status&&this.avatarFileList.push(i)}}if("removed"==t.file.status&&t.file){var s=t.file.response;if(s&&1e3===s.status)for(var o in this.data_arr=[],t.fileList)if(t.fileList[o]){var l=t.fileList[o];l&&l.response&&1e3===l.response.status&&this.data_arr.push(l.response.data)}this.avatarFileList=t.fileList,console.log("data_arr1",this.data_arr)}},handleCancel:function(){this.visibleUpload=!1}}},n=l,d=(e("0aad"),e("2877")),f=Object(d["a"])(n,o,i,!1,null,"b35fe9f8",null);a["default"]=f.exports}}]);