(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a1bf063","chunk-203ac732","chunk-39749bb8"],{"1f65":function(t,e,a){},"58bf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("a-card",{attrs:{title:"街道功能库"}},[a("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块外链代码，或者点击“详细”选择具体的内容外链 ")]),a("div",{staticClass:"header-title"},[t._v(" 请选择模块： ")]),t._l(t.appList,(function(e,i){return a("div",{key:i,staticClass:"body-item"},[a("div",{staticClass:"items"},[a("div",{staticClass:"items-left"},[t._v(t._s(e.title))]),a("a",{on:{click:function(a){return t.selected_url(e.url)}}},[a("div",{staticClass:"items-right"},[t._v("选中")])]),e.sub&&""!=e.module?a("a",{on:{click:function(a){return t.$refs.createModal.navigations(e.title,e.module)}}},[a("div",{staticClass:"items-right"},[t._v("详细")])]):t._e()])])})),a("function-details",{ref:"createModal",on:{ok:t.handleOk}})],2)],1)},n=[],o=a("567c"),s=a("43bc"),l={name:"FunctionLibrary",components:{functionDetails:s["default"]},data:function(){return{title:"插入连接或者关键词",visible:!1,confirmLoading:!1,appList:{title:"",url:""}}},methods:{FunctionLibrary:function(){this.title="插入连接或者关键词",this.visible=!0,this.AppLists()},AppLists:function(){var t=this;this.request(o["a"].getApplication).then((function(e){console.log("res",e),t.appList=e.list}))},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.visible=!1},handleOk:function(t){this.$emit("ok",t),this.visible=!1}}},r=l,c=(a("de2c"),a("2877")),u=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports},"66e9":function(t,e,a){},"837b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("span",{staticClass:"add-banner sel"},[a("a",{on:{click:function(t){}}},[t._v(t._s(t.title)+"-列表")])]),a("span",{staticClass:"add-banner"},[a("a",{on:{click:function(e){return t.$refs.createModal.addSlideShows(t.cat_id)}}},[t._v("添加广告")])]),a("hr"),a("div",{staticClass:"prompt"},[t._v("广告背景颜色自定义")]),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.BannerList,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.editSlideShows(i.id,t.cat_id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"bg_color",fn:function(t){return a("span",{},[a("colorPicker",{attrs:{disabled:""},model:{value:t,callback:function(e){t=e},expression:"text"}})],1)}},{key:"url",fn:function(e){return a("span",{},[a("a",{attrs:{href:e,target:"_blank"}},[t._v("访问链接")])])}},{key:"status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])})],1),a("add-slide-show",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)},n=[],o=(a("ac1f"),a("841c"),a("567c")),s=a("a7f9"),l={1:{status:"success",text:"正常"},2:{status:"default",text:"关闭"}},r={name:"FourAdvertising",components:{addSlideShow:s["default"]},data:function(){return{title:"广告图",visible:!1,confirmLoading:!1,sortedInfo:null,BannerList:[],pagination:{pageSize:10,total:10},search:{page:1},page:1,cat_id:0,cat_key:"street_four_adver",prompt:""}},filters:{statusFilter:function(t){return l[t].text},statusTypeFilter:function(t){return l[t].status}},mounted:function(){this.BannerLists()},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"name",key:"name"},{title:"链接地址",key:"url",dataIndex:"url",scopedSlots:{customRender:"url"}},{title:"背景色",key:"bg_color",dataIndex:"bg_color",scopedSlots:{customRender:"bg_color"}},{title:"最后操作时间",key:"last_time",dataIndex:"last_time"},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},methods:{slideshowList:function(){this.title="广告图",this.visible=!0,this.BannerLists()},BannerLists:function(){var t=this;this.search["page"]=this.page,this.search["cat_key"]=this.cat_key;this.request(o["a"].getBannerList,this.search).then((function(e){console.log("res",e),t.BannerList=e.list,t.cat_id=e.cat_id,t.title=e.now_category.cat_name,t.prompt=e.now_category.size_info,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.BannerLists())},handleOks:function(){this.BannerLists()},deleteConfirm:function(t){var e=this;this.request(o["a"].bannerDel,{id:t}).then((function(t){e.BannerLists(),e.$message.success("删除成功")}))},cancel:function(){},handleCancel:function(){this.visible=!1},customExpandIcon:function(t){var e=this.$createElement;return console.log(t.record.children),void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}},c=r,u=(a("f5f5"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,null,null);e["default"]=d.exports},a7f9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"广告名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入广告名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入广告名称！'}]}]"}]})],1)],1),a("a-form-item",{attrs:{label:"广告副标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sub_name",{initialValue:t.detail.sub_name,rules:[{required:!0,message:"请输入广告副标题！"}]}],expression:"['sub_name', {initialValue:detail.sub_name,rules: [{required: true, message: '请输入广告副标题！'}]}]"}]})],1)],1)],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.show_img,expression:"show_img"}],attrs:{label:"广告图片",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-row",[a("div",[a("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:t.upload_url,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t.imageUrl?a("img",{staticClass:"imgname",attrs:{src:t.imageUrl,alt:"img"}}):a("div",[a("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1)])],1)])],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.show_color,expression:"show_color"}],attrs:{label:"背景颜色选择",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("colorPicker",{directives:[{name:"show",rawName:"v-show",value:t.show_color,expression:"show_color"}],staticClass:"color_picker",attrs:{defaultColor:"#ff0000"},on:{change:function(e){return t.headleChangeColor(t.color)}},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)],1),a("a-form-item",{attrs:{label:"链接地址",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-row",[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:t.detail.url,rules:[{required:!0,message:"请选择链接地址！"}]}],expression:"['url', {initialValue:detail.url,rules: [{required: true, message: '请选择链接地址！'}]}]"}]})],1),a("a-col",{attrs:{span:6}},[a("a",{on:{click:function(e){return t.$refs.createModal.FunctionLibrary()}}},[t._v("从功能库中选择")])])],1)],1),a("a-form-item",{attrs:{label:"广告排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}]})],1),a("a-col",{attrs:{span:6}},[a("a-tooltip",{attrs:{placement:"right"}},[a("template",{slot:"title"},[a("span",[t._v("此值越大排序越靠前")])]),a("a-button",{staticClass:"add-box-tip"},[a("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1),a("a-form-item",{attrs:{label:"广告状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.detail.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1),a("function-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},n=[],o=a("53ca"),s=a("567c"),l=a("58bf");function r(t,e){var a=new FileReader;a.addEventListener("load",(function(){return e(a.result)})),a.readAsDataURL(t)}var c={name:"addSlideShow",components:{FunctionLibrary:l["default"]},data:function(){return{title:"添加轮播图",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,sortedInfo:null,form:this.$form.createForm(this),detail:{id:0,name:"",sub_name:"",pic:"",url:"",status:1,sort:0},cat_id:0,loading:!1,imageUrl:"",upload_url:"/v20/public/index.php/"+s["a"].upload,img:"",show_img:!0,show_color:!1,color:"#ff0000",id:0}},methods:{editSlideShows:function(t,e){this.visible=!0,this.cat_id=e,console.log("cat_id",e),8===e&&(this.show_img=!1,this.show_color=!0),this.id=t,this.id>0?this.title="编辑广告":this.title="添加广告",this.getEditInfo()},addSlideShows:function(t){this.id=0,this.title="添加广告",this.visible=!0,this.cat_id=t,8===t&&(this.show_img=!1,this.show_color=!0),this.detail={id:0,name:"",sub_name:"",pic:"",url:"",status:1,sort:0},this.imageUrl=""},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getEditInfo())},handleOk:function(t){console.log("url",t),this.detail.url=t},cancel:function(){},headleChangeColor:function(t){console.log("color",t),this.color=t},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.id=t.id,a.cat_id=t.cat_id,a.pic=t.img,a.bg_color=t.color,t.request(s["a"].addBanner,a).then((function(e){console.log(e),t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",a))}))},auditSuccess:function(t){console.log("fffffff",t)},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(s["a"].getBannerInfo,{id:this.id}).then((function(e){console.log(e),t.detail={id:0,name:"",sub_name:"",pic:"",url:"",status:1,sort:0,type:0},"object"==Object(o["a"])(e.info)&&(t.detail=e.info,t.imageUrl=e.info.pic,e.info.bg_color&&(t.color=e.info.bg_color)),console.log("detail",t.detail)}))},handleChange:function(t){var e=this;"uploading"!==t.file.status?"done"===t.file.status&&(r(t.file.originFileObj,(function(t){e.imageUrl=t,e.loading=!1})),1e3===t.file.response.status&&(this.img=t.file.response.data)):this.loading=!0},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;e||this.$message.error("You can only upload JPG file!");var a=t.size/1024/1024<2;return a||this.$message.error("Image must smaller than 2MB!"),e&&a}}},u=c,d=(a("cf4e"),a("2877")),f=Object(d["a"])(u,i,n,!1,null,null,null);e["default"]=f.exports},cf4e:function(t,e,a){"use strict";a("1f65")},de2c:function(t,e,a){"use strict";a("fa32")},f5f5:function(t,e,a){"use strict";a("66e9")},fa32:function(t,e,a){}}]);