(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b511fd0","chunk-41430b25"],{"0ed3":function(e,t,a){},"58bf":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,footer:null,maskClosable:!1,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancel}},[a("a-card",{attrs:{title:"街道功能库"}},[a("div",{staticClass:"header-func"},[e._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),a("div",{staticClass:"header-title"},[e._v(" 请选择模块： ")]),e._l(e.appList,(function(t,i){return a("div",{key:i,staticClass:"body-item"},[a("div",{staticClass:"items"},[a("div",{staticClass:"items-left"},[e._v(e._s(t.title))]),a("a",{on:{click:function(a){return e.selected_url(t.url)}}},[a("div",{staticClass:"items-right"},[e._v("选中")])]),t.sub&&""!=t.module?a("a",{on:{click:function(a){return e.$refs.createModal.navigations(t.title,t.module)}}},[a("div",{staticClass:"items-right"},[e._v("详细")])]):e._e()])])})),a("function-details",{ref:"createModal",on:{ok:e.handleOk}})],2)],1)},l=[],o=a("567c"),s=a("43bc"),r={name:"FunctionLibrary",components:{functionDetails:s["default"]},data:function(){return{title:"插入连接或者关键词",visible:!1,confirmLoading:!1,appList:{title:"",url:""}}},methods:{FunctionLibrary:function(){this.title="插入连接或者关键词",this.visible=!0,this.AppLists()},AppLists:function(){var e=this;this.request(o["a"].getApplication).then((function(t){console.log("res",t),e.appList=t.list}))},selected_url:function(e){this.$emit("ok",e),this.visible=!1},handleCancel:function(){this.visible=!1},handleOk:function(e){this.$emit("ok",e),this.visible=!1}}},n=r,c=(a("de2c"),a("0c7c")),u=Object(c["a"])(n,i,l,!1,null,null,null);t["default"]=u.exports},a406:function(e,t,a){},a7f9:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"广告名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入广告名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入广告名称！'}]}]"}]})],1)],1),a("a-form-item",{attrs:{label:"广告副标题",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sub_name",{initialValue:e.detail.sub_name,rules:[{required:!0,message:"请输入广告副标题！"}]}],expression:"['sub_name', {initialValue:detail.sub_name,rules: [{required: true, message: '请输入广告副标题！'}]}]"}]})],1)],1)],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show_img,expression:"show_img"}],attrs:{label:"广告图片",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-row",[a("div",[a("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:e.upload_url,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[e.imageUrl?a("img",{staticClass:"imgname",attrs:{src:e.imageUrl,alt:"img"}}):a("div",[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" 上传 ")])],1)])],1)])],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show_color,expression:"show_color"}],attrs:{label:"背景颜色选择",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("colorPicker",{directives:[{name:"show",rawName:"v-show",value:e.show_color,expression:"show_color"}],staticClass:"color_picker",attrs:{defaultColor:"#ff0000"},on:{change:function(t){return e.headleChangeColor(e.color)}},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)],1)],1),a("a-form-item",{attrs:{label:"链接地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.url,rules:[{required:!0,message:"请选择链接地址！"}]}],expression:"['url', {initialValue:detail.url,rules: [{required: true, message: '请选择链接地址！'}]}]"}]})],1),a("a-col",{attrs:{span:6}},[a("a",{on:{click:function(t){return e.$refs.createModal.FunctionLibrary()}}},[e._v("从功能库中选择")])])],1)],1),a("a-form-item",{attrs:{label:"广告排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}]})],1),a("a-col",{attrs:{span:6}},[a("a-tooltip",{attrs:{placement:"right"}},[a("template",{slot:"title"},[a("span",[e._v("此值越大排序越靠前")])]),a("a-button",{staticClass:"add-box-tip"},[a("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1),a("a-form-item",{attrs:{label:"广告状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1),a("function-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:e.handleOk}})],1)},l=[],o=a("53ca"),s=a("567c"),r=a("58bf");function n(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}var c={name:"addSlideShow",components:{FunctionLibrary:r["default"]},data:function(){return{title:"添加轮播图",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,sortedInfo:null,form:this.$form.createForm(this),detail:{id:0,name:"",sub_name:"",pic:"",url:"",status:1,sort:0},cat_id:0,loading:!1,imageUrl:"",upload_url:"/v20/public/index.php/"+s["a"].upload,img:"",show_img:!0,show_color:!1,color:"#ff0000",id:0}},methods:{editSlideShows:function(e,t){this.visible=!0,this.cat_id=t,console.log("cat_id",t),8===t&&(this.show_img=!1,this.show_color=!0),this.id=e,this.id>0?this.title="编辑广告":this.title="添加广告",this.getEditInfo()},addSlideShows:function(e){this.id=0,this.title="添加广告",this.visible=!0,this.cat_id=e,8===e&&(this.show_img=!1,this.show_color=!0),this.detail={id:0,name:"",sub_name:"",pic:"",url:"",status:1,sort:0},this.imageUrl=""},tableChange:function(e){e.current&&e.current>0&&(this.page=e.current,this.getEditInfo())},handleOk:function(e){console.log("url",e),this.detail.url=e},cancel:function(){},headleChangeColor:function(e){console.log("color",e),this.color=e},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){t?e.confirmLoading=!1:(a.id=e.id,a.cat_id=e.cat_id,a.pic=e.img,a.bg_color=e.color,e.request(s["a"].addBanner,a).then((function(t){console.log(t),e.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",a)}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",a))}))},auditSuccess:function(e){console.log("fffffff",e)},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this;this.request(s["a"].getBannerInfo,{id:this.id}).then((function(t){console.log(t),e.detail={id:0,name:"",sub_name:"",pic:"",url:"",status:1,sort:0,type:0},"object"==Object(o["a"])(t.info)&&(e.detail=t.info,e.imageUrl=t.info.pic,t.info.bg_color&&(e.color=t.info.bg_color)),console.log("detail",e.detail)}))},handleChange:function(e){var t=this;"uploading"!==e.file.status?"done"===e.file.status&&(n(e.file.originFileObj,(function(e){t.imageUrl=e,t.loading=!1})),1e3===e.file.response.status&&(this.img=e.file.response.data)):this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||this.$message.error("Image must smaller than 2MB!"),t&&a}}},u=c,d=(a("cf4e"),a("0c7c")),m=Object(d["a"])(u,i,l,!1,null,null,null);t["default"]=m.exports},cf4e:function(e,t,a){"use strict";a("0ed3")},de2c:function(e,t,a){"use strict";a("a406")}}]);