(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7723b28c","chunk-38460c68"],{3400:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"account-settings-info-view"},[e("a-row",{attrs:{gutter:16}},[e("a-col",{attrs:{md:24,lg:16}},[e("a-form",{attrs:{layout:"vertical"}},[e("a-form-item",{attrs:{label:"昵称"}},[e("a-input",{attrs:{placeholder:"给自己起个名字"}})],1),e("a-form-item",{attrs:{label:"Bio"}},[e("a-textarea",{attrs:{rows:"4",placeholder:"You are not alone."}})],1),e("a-form-item",{attrs:{label:"电子邮件",required:!1}},[e("a-input",{attrs:{placeholder:"exp@admin.com"}})],1),e("a-form-item",{attrs:{label:"加密方式",required:!1}},[e("a-select",{attrs:{defaultValue:"aes-256-cfb"}},[e("a-select-option",{attrs:{value:"aes-256-cfb"}},[t._v("aes-256-cfb")]),e("a-select-option",{attrs:{value:"aes-128-cfb"}},[t._v("aes-128-cfb")]),e("a-select-option",{attrs:{value:"chacha20"}},[t._v("chacha20")])],1)],1),e("a-form-item",{attrs:{label:"连接密码",required:!1}},[e("a-input",{attrs:{placeholder:"h3gSbecd"}})],1),e("a-form-item",{attrs:{label:"登录密码",required:!1}},[e("a-input",{attrs:{placeholder:"密码"}})],1),e("a-form-item",[e("a-button",{attrs:{type:"primary"}},[t._v("提交")]),e("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("保存")])],1)],1)],1),e("a-col",{style:{minHeight:"180px"},attrs:{md:24,lg:8}},[e("div",{staticClass:"ant-upload-preview",on:{click:function(a){return t.$refs.modal.edit(1)}}},[e("a-icon",{staticClass:"upload-icon",attrs:{type:"cloud-upload-o"}}),e("div",{staticClass:"mask"},[e("a-icon",{attrs:{type:"plus"}})],1),e("img",{attrs:{src:t.option.img}})],1)])],1),e("avatar-modal",{ref:"modal",on:{ok:t.setavatar}})],1)},i=[],r=e("795f"),n={components:{AvatarModal:r["default"]},data:function(){return{preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]}}},methods:{setavatar:function(t){this.option.img=t}}},s=n,c=(e("fdc7"),e("0c7c")),l=Object(c["a"])(s,o,i,!1,null,"a7fe1326",null);a["default"]=l.exports},"45b4":function(t,a,e){},"795f":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:"修改头像",visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading,width:800,footer:null},on:{cancel:t.cancelHandel}},[e("a-row",[e("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),e("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e("div",{staticClass:"avatar-upload-preview"},[e("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),e("br"),e("a-row",[e("a-col",{attrs:{lg:2,md:2}},[e("a-upload",{attrs:{name:"file",beforeUpload:t.beforeUpload,showUploadList:!1}},[e("a-button",{attrs:{icon:"upload"}},[t._v("选择图片")])],1)],1),e("a-col",{attrs:{lg:{span:1,offset:2},md:2}},[e("a-button",{attrs:{icon:"plus"},on:{click:function(a){return t.changeScale(1)}}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"minus"},on:{click:function(a){return t.changeScale(-1)}}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"undo"},on:{click:t.rotateLeft}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"redo"},on:{click:t.rotateRight}})],1),e("a-col",{attrs:{lg:{span:2,offset:6},md:2}},[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.finish("blob")}}},[t._v("保存")])],1)],1)],1)},i=[],r=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("9861"),{data:function(){return{visible:!1,id:null,confirmLoading:!1,fileList:[],uploading:!1,options:{img:"",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(t){this.visible=!0,this.id=t},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},beforeUpload:function(t){var a=this,e=new FileReader;return e.readAsDataURL(t),e.onload=function(){a.options.img=e.result},!1},finish:function(t){var a=this;console.log("finish");var e=this,o=new FormData;"blob"===t?this.$refs.cropper.getCropBlob((function(t){var i=window.URL.createObjectURL(t);a.model=!0,a.modelSrc=i,o.append("file",t,a.fileName),a.$http.post("https://www.mocky.io/v2/5cc8019d300000980a055e76",o,{contentType:!1,processData:!1,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){console.log("upload response:",t),e.$message.success("上传成功"),e.$emit("ok",t.url),e.visible=!1}))})):this.$refs.cropper.getCropData((function(t){a.model=!0,a.modelSrc=t}))},okHandel:function(){var t=this;t.confirmLoading=!0,setTimeout((function(){t.confirmLoading=!1,t.close(),t.$message.success("上传头像成功")}),2e3)},realTime:function(t){this.previews=t}}}),n=r,s=(e("79a0"),e("0c7c")),c=Object(s["a"])(n,o,i,!1,null,"a3a87442",null);a["default"]=c.exports},"79a0":function(t,a,e){"use strict";e("e43c")},e43c:function(t,a,e){},fdc7:function(t,a,e){"use strict";e("45b4")}}]);