(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06a3cf05"],{"6b41":function(a,e,t){"use strict";t("a477")},"92c8":function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-modal",{attrs:{title:a.title,width:900,visible:a.visible,maskClosable:!1,confirmLoading:a.confirmLoading},on:{ok:a.handleSubmit,cancel:a.handleCancel}},[t("a-spin",{attrs:{spinning:a.confirmLoading,height:800}},[t("a-form",{attrs:{form:a.form}},[t("a-form-item",{attrs:{label:"名称",labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:a.detail.name,rules:[{required:!0,message:"请输入名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入名称！'}]}]"}]})],1)],1),t("a-form-item",{attrs:{label:"图片",labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[t("a-row",[t("div",[t("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:a.upload_url,"before-upload":a.beforeUpload},on:{change:a.handleChange}},[a.imageUrl?t("img",{staticClass:"imgname",attrs:{src:a.imageUrl,alt:"img"}}):t("div",[t("a-icon",{attrs:{type:a.loading?"loading":"plus"}}),t("div",{staticClass:"ant-upload-text"},[a._v(" 上传 ")])],1)])],1)])],1),t("a-form-item",{attrs:{label:"链接",labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[t("a-row",[t("a-col",{attrs:{span:18}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:a.detail.url,rules:[{required:!0,message:"请选择链接地址！"}]}],expression:"['url', {initialValue:detail.url,rules: [{required: true, message: '请选择链接地址！'}]}]"}]})],1),t("a-col",{attrs:{span:6}},[t("a",{on:{click:function(e){return a.$refs.createModal.FunctionLibrary()}}},[a._v("从功能库中选择")])])],1)],1),t("a-form-item",{attrs:{label:"排序",labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[t("a-col",{attrs:{span:18}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:a.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}]})],1),t("a-col",{attrs:{span:6}},[t("a-tooltip",{attrs:{placement:"right"}},[t("template",{slot:"title"},[t("span",[a._v("此值越大排序越靠前")])]),t("a-button",{staticClass:"add-box-tip"},[t("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1),t("a-form-item",{attrs:{label:"状态",labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==a.detail.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1),t("function-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:a.handleOk}})],1)},l=[],o=t("53ca"),r=t("567c"),n=t("58bf");function s(a,e){var t=new FileReader;t.addEventListener("load",(function(){return e(t.result)})),t.readAsDataURL(a)}var u={name:"addBottNavigation",components:{FunctionLibrary:n["default"]},data:function(){return{title:"添加轮播图",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,sortedInfo:null,form:this.$form.createForm(this),detail:{id:0,name:"",img:"",url:"",status:1,sort:0},loading:!1,imageUrl:"",upload_url:"/v20/public/index.php/"+r["a"].upload,img:""}},methods:{editBottNavigation:function(a){this.visible=!0,this.id=a,this.id>0?this.title="编辑导航":this.title="添加导航",this.getEditInfo()},addBottNavigations:function(){this.title="添加导航",this.visible=!0,this.detail={id:0,name:"",img:"",url:"",status:1,sort:0},this.imageUrl=""},tableChange:function(a){a.current&&a.current>0&&(this.page=a.current,this.getEditInfo())},handleOk:function(a){console.log("url",a),this.detail.url=a},cancel:function(){},handleSubmit:function(){var a=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,t){e?a.confirmLoading=!1:(t.id=a.id,t.img=a.img,a.request(r["a"].addStreetNav,t).then((function(e){console.log(e),a.id>0?a.$message.success("编辑成功"):a.$message.success("添加成功"),setTimeout((function(){a.form=a.$form.createForm(a),a.visible=!1,a.confirmLoading=!1,a.$emit("ok",t)}),1500)})).catch((function(e){a.confirmLoading=!1})),console.log("values",t))}))},auditSuccess:function(a){console.log("fffffff",a)},handleCancel:function(){var a=this;this.visible=!1,setTimeout((function(){a.id="0",a.form=a.$form.createForm(a)}),500)},getEditInfo:function(){var a=this;this.request(r["a"].getStreetNavInfo,{id:this.id}).then((function(e){console.log(e),a.detail={id:0,name:"",img:"",url:"",status:1,sort:0},"object"==Object(o["a"])(e.info)&&(a.detail=e.info,a.imageUrl=e.info.img),console.log("detail",a.detail)}))},handleChange:function(a){var e=this;"uploading"!==a.file.status?"done"===a.file.status&&(s(a.file.originFileObj,(function(a){e.imageUrl=a,e.loading=!1})),1e3===a.file.response.status&&(this.img=a.file.response.data)):this.loading=!0},beforeUpload:function(a){var e="image/jpeg"===a.type||"image/png"===a.type;e||this.$message.error("You can only upload JPG file!");var t=a.size/1024/1024<2;return t||this.$message.error("Image must smaller than 2MB!"),e&&t}}},c=u,d=(t("6b41"),t("2877")),m=Object(d["a"])(c,i,l,!1,null,null,null);e["default"]=m.exports},a477:function(a,e,t){}}]);