(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d88d48e","chunk-634498fa"],{1300:function(t,e,i){"use strict";i("62017")},"58bf":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-card",{attrs:{title:"街道功能库"}},[i("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),i("div",{staticClass:"header-title"},[t._v(" 请选择模块： ")]),t._l(t.appList,(function(e,a){return i("div",{key:a,staticClass:"body-item"},[i("div",{staticClass:"items"},[i("div",{staticClass:"items-left"},[t._v(t._s(e.title))]),i("a",{on:{click:function(i){return t.selected_url(e.url)}}},[i("div",{staticClass:"items-right"},[t._v("选中")])]),e.sub&&""!=e.module?i("a",{on:{click:function(i){return t.$refs.createModal.navigations(e.title,e.module)}}},[i("div",{staticClass:"items-right"},[t._v("详细")])]):t._e()])])})),i("function-details",{ref:"createModal",on:{ok:t.handleOk}})],2)],1)},l=[],n=i("567c"),s=i("43bc"),o={name:"FunctionLibrary",components:{functionDetails:s["default"]},data:function(){return{title:"插入连接或者关键词",visible:!1,confirmLoading:!1,appList:{title:"",url:""}}},methods:{FunctionLibrary:function(){this.title="插入连接或者关键词",this.visible=!0,this.AppLists()},AppLists:function(){var t=this;this.request(n["a"].getApplication).then((function(e){console.log("res",e),t.appList=e.list}))},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1},handleOk:function(t){this.$emit("ok",t),this.visible=!1}}},r=o,c=(i("de2c"),i("0c7c")),u=Object(c["a"])(r,a,l,!1,null,null,null);e["default"]=u.exports},62017:function(t,e,i){},"7e47":function(t,e,i){},"92c8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入名称！'}]}]"}]})],1)],1),i("a-form-item",{attrs:{label:"图片",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-row",[i("div",[i("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:t.upload_url,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t.imageUrl?i("img",{staticClass:"imgname",attrs:{src:t.imageUrl,alt:"img"}}):i("div",[i("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1)])],1)])],1),i("a-form-item",{attrs:{label:"链接",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-row",[i("a-col",{attrs:{span:18}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:t.detail.url,rules:[{required:!0,message:"请选择链接地址！"}]}],expression:"['url', {initialValue:detail.url,rules: [{required: true, message: '请选择链接地址！'}]}]"}]})],1),i("a-col",{attrs:{span:6}},[i("a",{on:{click:function(e){return t.$refs.createModal.FunctionLibrary()}}},[t._v("从功能库中选择")])])],1)],1),i("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}]})],1),i("a-col",{attrs:{span:6}},[i("a-tooltip",{attrs:{placement:"right"}},[i("template",{slot:"title"},[i("span",[t._v("此值越大排序越靠前")])]),i("a-button",{staticClass:"add-box-tip"},[i("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1),i("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.detail.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1),i("function-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},l=[],n=i("53ca"),s=i("567c"),o=i("58bf");function r(t,e){var i=new FileReader;i.addEventListener("load",(function(){return e(i.result)})),i.readAsDataURL(t)}var c={name:"addBottNavigation",components:{FunctionLibrary:o["default"]},data:function(){return{title:"添加轮播图",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,sortedInfo:null,form:this.$form.createForm(this),detail:{id:0,name:"",img:"",url:"",status:1,sort:0},loading:!1,imageUrl:"",upload_url:"/v20/public/index.php/"+s["a"].upload,img:""}},methods:{editBottNavigation:function(t){this.visible=!0,this.id=t,this.id>0?this.title="编辑导航":this.title="添加导航",this.getEditInfo()},addBottNavigations:function(){this.title="添加导航",this.visible=!0,this.detail={id:0,name:"",img:"",url:"",status:1,sort:0},this.imageUrl=""},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getEditInfo())},handleOk:function(t){console.log("url",t),this.detail.url=t},cancel:function(){},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(i.id=t.id,i.img=t.img,t.request(s["a"].addStreetNav,i).then((function(e){console.log(e),t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.id="",t.$emit("ok",i)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",i))}))},auditSuccess:function(t){console.log("fffffff",t)},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(s["a"].getStreetNavInfo,{id:this.id}).then((function(e){console.log(e),t.detail={id:0,name:"",img:"",url:"",status:1,sort:0},"object"==Object(n["a"])(e.info)&&(t.detail=e.info,t.imageUrl=e.info.img),console.log("detail",t.detail)}))},handleChange:function(t){var e=this;"uploading"!==t.file.status?"done"===t.file.status&&(r(t.file.originFileObj,(function(t){e.imageUrl=t,e.loading=!1})),1e3===t.file.response.status&&(this.img=t.file.response.data)):this.loading=!0},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;e||this.$message.error("You can only upload JPG file!");var i=t.size/1024/1024<2;return i||this.$message.error("Image must smaller than 2MB!"),e&&i}}},u=c,d=(i("1300"),i("0c7c")),m=Object(d["a"])(u,a,l,!1,null,null,null);e["default"]=m.exports},de2c:function(t,e,i){"use strict";i("7e47")}}]);