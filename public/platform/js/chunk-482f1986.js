(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-482f1986","chunk-fb5c961e","chunk-27929796","chunk-424180a4"],{"0a05":function(t,e,i){},"258d":function(t,e,i){"use strict";i("e073")},"2d70":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"选择分组",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":t.treeData,placeholder:"请选择分组","tree-default-expand-all":""},scopedSlots:t._u([{key:"title",fn:function(i){var a=i.key,s=i.value;return 1==a?e("span",{staticStyle:{color:"#08c"}},[t._v(" Child Node1 "+t._s(s)+" ")]):t._e()}}],null,!0),model:{value:t.gid,callback:function(e){t.gid=e},expression:"gid"}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入标题！"}]}],expression:"['title', {initialValue:detail.title,rules: [{required: true, message: '请输入标题！'}]}]"}],attrs:{placeholder:"请输入标题",disabled:t.is_default}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"分享链接",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{initialValue:t.content,rules:[{required:!0,message:"请输入或选择分享链接！"}]}],expression:"['content', {initialValue:content,rules: [{required: true, message: '请输入或选择分享链接！'}]}]"}],attrs:{disabled:t.is_default}})],1),e("a-col",{attrs:{span:6}},[t.is_default?t._e():e("a",{on:{click:function(e){return t.$refs.createModal.FunctionLibrary()}}},[t._v("从功能库中选择")])])],1),e("a-form-item",{attrs:{label:"分享标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["share_title",{initialValue:t.detail.share_title,rules:[{required:!0,message:"请输入分享标题！"}]}],expression:"['share_title', {initialValue:detail.share_title,rules: [{required: true, message: '请输入分享标题！'}]}]"}],attrs:{placeholder:"请输入分享标题"}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"分享描述",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["share_dsc",{initialValue:t.detail.share_dsc}],expression:"['share_dsc', {initialValue:detail.share_dsc}]"}],attrs:{placeholder:"请输入分享描述"}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"分享图片",labelCol:t.labelCol,wrapperCol:t.wrapperCol,required:!0}},[e("a-col",{attrs:{span:10}},[e("a-upload",{staticClass:"avatar-uploader",attrs:{name:"file","list-type":"picture-card","show-upload-list":!1,action:t.upload_url,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t.imageUrl?e("img",{staticClass:"imgname",attrs:{src:t.imageUrl,alt:"img"}}):e("div",[e("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1)])],1),e("a-col",{attrs:{span:20}},[t._v(" 图片宽度建议为：500px，高度建议为400px ")])],1)],1)],1),e("function-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},s=[],n=i("2396"),l=i("a0e0"),o=i("4d37"),r=i("ca00");function c(t,e){var i=new FileReader;i.addEventListener("load",(function(){return e(i.result)})),i.readAsDataURL(t)}var d={components:{functionLibrary:o["default"]},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,title:"",content:"",share_title:"",share_dsc:"",is_default:0},is_default:!1,id:0,pid:0,gid:1,imageUrl:"",loading:!1,upload_url:"/v20/public/index.php/"+l["a"].uploadFile,treeData:[],img:"",content:"",select_key:"",tokenName:"",sysName:""}},mounted:function(){},methods:{text_change:function(t){},add:function(t,e){this.title="添加功能库",this.visible=!0,this.id=0,this.detail={id:0,title:""};var i=Object(r["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",this.checkedKeys=[],t&&(this.gid=t),this.imageUrl="",this.img="",this.content="",this.select_key=e,this.getMenuList()},edit:function(t,e,i){console.log("erererererer",t),this.visible=!0,this.id=t,this.id>0?this.title="编辑功能库":this.title="添加功能库",e&&(this.gid=e);var a=Object(r["i"])(location.hash);a?(this.tokenName=a+"_access_token",this.sysName=a):this.sysName="village",this.select_key=i,console.log(this.title),this.getMenuList(),this.getEditInfo()},handleOk:function(t){console.log("url",t),this.detail.content=t,this.content=t,console.log("this.detail.content",this.detail.content)},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(i.id=t.id,i.gid=t.gid,i.share_img=t.img,i.type=4,i.select_key=t.select_key,t.tokenName&&(i["tokenName"]=t.tokenName),t.request(l["a"].subContent,i).then((function(e){t.detail.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",i)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",i))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getMenuList:function(){var t=this,e={};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(l["a"].getMenuSelect,e).then((function(e){console.log(e),t.treeData=e.menu_list,t.id||(t.gid=e.menu_list[0].id)}))},getEditInfo:function(){var t=this,e={id:this.id};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(l["a"].getContentInfo,e).then((function(e){console.log(e),t.detail={id:0,title:"",content:"",share_title:"",share_dsc:""},"object"==Object(n["a"])(e.info)&&(t.detail=e.info,t.gid=e.info.gid,t.imageUrl=e.info.share_img,t.img=e.info.share_img,t.content=e.info.content,e.info.is_default?t.is_default=!0:t.is_default=!1)}))},handleChange:function(t){var e=this;if("uploading"!==t.file.status){if("done"===t.file.status&&(c(t.file.originFileObj,(function(t){e.imageUrl=t,e.loading=!1})),t.file&&t.file.response)){var i=t.file.response;1e3===i.status?(this.img=i.data.url,this.$message.success("上传成功")):this.$message.error(i.msg)}}else this.loading=!0},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;e||this.$message.error("You can only upload JPG file!");var i=t.size/1024/1024<2;return i||this.$message.error("Image must smaller than 2MB!"),e&&i}}},u=d,h=(i("66be"),i("0b56")),f=Object(h["a"])(u,a,s,!1,null,null,null);e["default"]=f.exports},"4d37":function(t,e,i){"use strict";i.r(e);i("54f8"),i("497f");var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-card",{attrs:{title:"街道功能库"}},[e("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),e("div",{staticClass:"header-title"},[t._v(" 请选择模块： ")]),t._l(t.appList,(function(i,a){return e("div",{key:a,staticClass:"body-item"},[e("div",{staticClass:"items"},[e("div",{staticClass:"items-left"},[t._v(t._s(i.name))]),e("a",{on:{click:function(e){return t.selected_url(i.linkcode)}}},[e("div",{staticClass:"items-right"},[t._v("选中")])]),i.sub?e("a",{on:{click:function(e){return t.$refs.createModal.FunctionLibrary(i.module)}}},[e("div",{staticClass:"items-right"},[t._v("查看")])]):t._e()])])}))],2),e("within-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},s=[],n=i("a0e0"),l=i("d2b9"),o=i("ca00"),r={name:"functionLibrary",components:{withinLibrary:l["default"]},data:function(){return{title:"插入连接或者关键词",visible:!1,confirmLoading:!1,appList:{title:"",url:""},tokenName:"",sysName:""}},methods:{FunctionLibrary:function(){this.title="插入连接或者关键词",this.visible=!0;var t=Object(o["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.AppLists()},AppLists:function(){var t=this,e={};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(n["a"].functionLibraryData,e).then((function(e){console.log("res",e),t.appList=e.list}))},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1},handleOk:function(t){console.log("url",t),this.$emit("ok",t),this.visible=!1,console.log("this.detail.content",this.detail.content)}}},c=r,d=(i("f504"),i("0b56")),u=Object(d["a"])(c,a,s,!1,null,null,null);e["default"]=u.exports},"557d":function(t,e,i){"use strict";i("0a05")},"66be":function(t,e,i){"use strict";i("fa03")},"7e7f":function(t,e,i){},"8b71":function(t,e,i){"use strict";i.r(e);i("54f8");var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-card",{attrs:{title:"街道功能库"}},[e("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),e("div",{staticClass:"header-title"},[t._v(" 请选择模块： ")]),t._l(t.appList,(function(i,a){return e("div",{key:a,staticClass:"body-item"},[e("div",{staticClass:"son_items"},[e("div",{staticClass:"items-left"},[t._v(t._s(i.name))]),e("a",{on:{click:function(e){return t.selected_url(i.linkcode)}}},[e("div",{staticClass:"items-right"},[t._v("选中")])])])])}))],2)],1)},s=[],n=i("a0e0"),l=i("ca00"),o={name:"functionLibrary",data:function(){return{title:"插入连接或者关键词",visible:!1,confirmLoading:!1,appList:{title:"",url:""},id:0,type:"",tokenName:"",sysName:""}},methods:{FunctionLibrary:function(t,e){var i=Object(l["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",this.title="插入连接或者关键词",this.visible=!0,this.id=e,this.type=t,this.AppLists()},AppLists:function(){var t=this;console.log("id",this.id),console.log("type",this.type);var e={id:this.id,type:this.type};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(n["a"].childLibrary,e).then((function(e){console.log("res",e),t.appList=e.list}))},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1}}},r=o,c=(i("557d"),i("0b56")),d=Object(c["a"])(r,a,s,!1,null,null,null);e["default"]=d.exports},d2b9:function(t,e,i){"use strict";i.r(e);i("54f8"),i("497f");var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-card",{attrs:{title:"街道功能库"}},[e("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),e("div",{staticClass:"header-title"},[t._v(" 请选择模块： ")]),t._l(t.appList,(function(i,a){return e("div",{key:a,staticClass:"body-item"},[e("div",{staticClass:"son_items"},[e("div",{staticClass:"items-left"},[t._v(t._s(i.name))]),i.sub?e("a",{on:{click:function(e){return t.$refs.createModal.FunctionLibrary(t.type,i.id)}}},[e("div",{staticClass:"items-right"},[t._v("详情")])]):e("a",{on:{click:function(e){return t.selected_url(i.linkcode)}}},[e("div",{staticClass:"items-right"},[t._v("选中")])])])])}))],2),e("within-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},s=[],n=i("a0e0"),l=i("8b71"),o=i("ca00"),r={name:"functionLibrary",components:{withinLibrary:l["default"]},data:function(){return{title:"插入连接或者关键词",visible:!1,confirmLoading:!1,appList:{title:"",url:""},type:"",tokenName:"",sysName:""}},methods:{FunctionLibrary:function(t){var e=Object(o["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.title="插入连接或者关键词",this.visible=!0,this.type=t,this.AppLists()},AppLists:function(){var t=this,e={type:this.type};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(n["a"].childLibrary,e).then((function(e){console.log("res",e),t.appList=e.list}))},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1},handleOk:function(t){this.$emit("ok",t),this.visible=!1}}},c=r,d=(i("258d"),i("0b56")),u=Object(d["a"])(c,a,s,!1,null,null,null);e["default"]=u.exports},e073:function(t,e,i){},f504:function(t,e,i){"use strict";i("7e7f")},fa03:function(t,e,i){}}]);