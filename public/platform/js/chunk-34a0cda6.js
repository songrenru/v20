(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34a0cda6"],{1300:function(t,e,a){"use strict";a("9c2d")},"2e82":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-container"},[e("a-tabs",{staticClass:"tab-head",attrs:{type:"card"},on:{change:t.callback}},[e("a-tab-pane",{key:"1",attrs:{tab:"首页"}},[e("a-list",{staticClass:"tab-list",attrs:{"item-layout":"horizontal","data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(a,n){return e("a-list-item",{},[e("a-list-item-meta",{attrs:{description:a.content}},[e("a",{attrs:{slot:"title",href:"#"},slot:"title"},[t._v(t._s(a.title))])]),e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.onclickCreate(a.onUrl)}}},[t._v("装修")])],1)],1)}}])}),e("div",{staticClass:"rights"},[e("div",{staticClass:"zhez"}),e("iframe",{attrs:{frameborder:"0",name:"showHere",width:"100%",height:"100%",src:t.url,scrolling:"auto"}})])],1)],1),e("slide-shows",{ref:"createModalSlide",attrs:{height:800,width:1200}}),e("bott-navigation",{ref:"createModalBott",attrs:{height:800,width:1200}}),e("four-advertising",{ref:"createModalFour",attrs:{height:800,width:1200}}),e("content-slide-show",{ref:"createModalContent",attrs:{height:800,width:1200}})],1)},i=[],s=a("567c"),r=a("6dd4"),o=a("fbfa"),l=a("837b"),c=a("b2cf"),d={name:"VisualizationIndex",components:{SlideShows:r["default"],BottNavigation:o["default"],FourAdvertising:l["default"],ContentSlideShow:c["default"]},data:function(){return{url:"",data:[],visible:!1}},mounted:function(){this.streetUrl()},created:function(){},methods:{callback:function(t){console.log(t)},streetUrl:function(){var t=this;this.request(s["a"].getStreetShowUrl).then((function(e){console.log("res",e),t.url=e.url,t.data=e.list}))},onclickCreate:function(t){2===t?this.$refs.createModalBott.navigations():3===t?this.$refs.createModalContent.slideshowList():4===t?this.$refs.createModalFour.slideshowList():this.$refs.createModalSlide.slideshowList()}}},u=d,f=(a("4fa9"),a("0b56")),h=Object(f["a"])(u,n,i,!1,null,null,null);e["default"]=h.exports},"374d":function(t,e,a){},"4fa9":function(t,e,a){"use strict";a("374d")},"6dd4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("span",{staticClass:"add-banner sel"},[e("a",{on:{click:function(t){}}},[t._v(t._s(t.title)+"-列表")])]),e("span",{staticClass:"add-banner"},[e("a",{on:{click:function(e){return t.$refs.createModal.addSlideShows(t.cat_id)}}},[t._v("添加广告")])]),e("hr"),e("div",{staticClass:"prompt"},[t._v("广告建议尺寸："+t._s(t.prompt))]),e("a-card",{attrs:{bordered:!1}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.BannerList,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(a,n){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.createModal.editSlideShows(n.id,t.cat_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"pic",fn:function(t){return e("span",{},[e("img",{key:t,attrs:{height:50,src:t,preview:"0","preview-text":"描述文字"}})])}},{key:"url",fn:function(a){return e("span",{},[e("a",{attrs:{href:a,target:"_blank"}},[t._v("访问链接")])])}},{key:"status",fn:function(a){return e("span",{},[e("a-badge",{attrs:{status:t._f("statusTypeFilter")(a),text:t._f("statusFilter")(a)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])})],1),e("add-slide-show",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)},i=[],s=(a("aa48"),a("8f7e"),a("567c")),r=a("a7f9"),o={1:{status:"success",text:"正常"},2:{status:"default",text:"关闭"}},l={name:"SlideShow",components:{addSlideShow:r["default"]},data:function(){return{title:"广告图",visible:!1,confirmLoading:!1,sortedInfo:null,BannerList:[],pagination:{pageSize:10,total:10},search:{page:1},page:1,cat_id:0,cat_key:"street_app_index_top",prompt:""}},filters:{statusFilter:function(t){return o[t].text},statusTypeFilter:function(t){return o[t].status}},mounted:function(){this.BannerLists()},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"name",key:"name"},{title:"链接地址",key:"url",dataIndex:"url",scopedSlots:{customRender:"url"}},{title:"图片",key:"pic",dataIndex:"pic",scopedSlots:{customRender:"pic"}},{title:"最后操作时间",key:"last_time",dataIndex:"last_time"},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},methods:{slideshowList:function(){this.page=1,this.title="广告图",this.visible=!0,this.BannerLists()},BannerLists:function(){var t=this;this.search["page"]=this.page,this.search["cat_key"]=this.cat_key;this.request(s["a"].getBannerList,this.search).then((function(e){console.log("res",e),t.BannerList=e.list,t.cat_id=e.cat_id,t.title=e.now_category.cat_name,t.prompt=e.now_category.size_info,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.BannerLists())},handleOks:function(){this.BannerLists()},deleteConfirm:function(t){var e=this;this.request(s["a"].bannerDel,{id:t}).then((function(t){e.BannerLists(),e.$message.success("删除成功")}))},cancel:function(){},handleCancel:function(){this.visible=!1},customExpandIcon:function(t){var e=this.$createElement;return console.log(t.record.children),void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}},c=l,d=(a("938c"),a("0b56")),u=Object(d["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},"70c2":function(t,e,a){},"83e8":function(t,e,a){},"86dc":function(t,e,a){"use strict";a("70c2")},"92c8":function(t,e,a){"use strict";a.r(e);a("54f8"),a("3849");var n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入名称！'}]}]"}]})],1)],1),e("a-form-item",{attrs:{label:"图片",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-row",[e("div",[e("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:t.upload_url,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t.imageUrl?e("img",{staticClass:"imgname",attrs:{src:t.imageUrl,alt:"img"}}):e("div",[e("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1)])],1)])],1),e("a-form-item",{attrs:{label:"链接",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:t.detail.url,rules:[{required:!0,message:"请选择链接地址！"}]}],expression:"['url', {initialValue:detail.url,rules: [{required: true, message: '请选择链接地址！'}]}]"}]})],1),e("a-col",{attrs:{span:6}},[e("a",{on:{click:function(e){return t.$refs.createModal.FunctionLibrary()}}},[t._v("从功能库中选择")])])],1)],1),e("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}]})],1),e("a-col",{attrs:{span:6}},[e("a-tooltip",{attrs:{placement:"right"}},[e("template",{slot:"title"},[e("span",[t._v("此值越大排序越靠前")])]),e("a-button",{staticClass:"add-box-tip"},[e("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1),e("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.detail.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1),e("function-library",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},i=[],s=a("2396"),r=a("567c"),o=a("58bf");function l(t,e){var a=new FileReader;a.addEventListener("load",(function(){return e(a.result)})),a.readAsDataURL(t)}var c={name:"addBottNavigation",components:{FunctionLibrary:o["default"]},data:function(){return{title:"添加轮播图",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,sortedInfo:null,form:this.$form.createForm(this),detail:{id:0,name:"",img:"",url:"",status:1,sort:0},loading:!1,imageUrl:"",upload_url:"/v20/public/index.php/"+r["a"].upload,img:""}},methods:{editBottNavigation:function(t){this.visible=!0,this.id=t,this.id>0?this.title="编辑导航":this.title="添加导航",this.getEditInfo()},addBottNavigations:function(){this.title="添加导航",this.visible=!0,this.detail={id:0,name:"",img:"",url:"",status:1,sort:0},this.imageUrl=""},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getEditInfo())},handleOk:function(t){console.log("url",t),this.detail.url=t},cancel:function(){},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.id=t.id,a.img=t.img,t.request(r["a"].addStreetNav,a).then((function(e){console.log(e),t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.id="",t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",a))}))},auditSuccess:function(t){console.log("fffffff",t)},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(r["a"].getStreetNavInfo,{id:this.id}).then((function(e){console.log(e),t.detail={id:0,name:"",img:"",url:"",status:1,sort:0},"object"==Object(s["a"])(e.info)&&(t.detail=e.info,t.imageUrl=e.info.img),console.log("detail",t.detail)}))},handleChange:function(t){var e=this;"uploading"!==t.file.status?"done"===t.file.status&&(l(t.file.originFileObj,(function(t){e.imageUrl=t,e.loading=!1})),1e3===t.file.response.status&&(this.img=t.file.response.data)):this.loading=!0},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;e||this.$message.error("You can only upload JPG file!");var a=t.size/1024/1024<2;return a||this.$message.error("Image must smaller than 2MB!"),e&&a}}},d=c,u=(a("1300"),a("0b56")),f=Object(u["a"])(d,n,i,!1,null,null,null);e["default"]=f.exports},"938c":function(t,e,a){"use strict";a("de2e")},"9c2d":function(t,e,a){},b2cf:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("span",{staticClass:"add-banner sel"},[e("a",{on:{click:function(t){}}},[t._v(t._s(t.title)+"-列表")])]),e("span",{staticClass:"add-banner"},[e("a",{on:{click:function(e){return t.$refs.createModal.addSlideShows(t.cat_id)}}},[t._v("添加广告")])]),e("hr"),e("div",{staticClass:"prompt"},[t._v("广告建议尺寸："+t._s(t.prompt))]),e("a-card",{attrs:{bordered:!1}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.BannerList,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(a,n){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.createModal.editSlideShows(n.id,t.cat_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"pic",fn:function(t){return e("span",{},[e("img",{attrs:{height:50,src:t,preview:"0","preview-text":"描述文字"}})])}},{key:"url",fn:function(a){return e("span",{},[e("a",{attrs:{href:a,target:"_blank"}},[t._v("访问链接")])])}},{key:"status",fn:function(a){return e("span",{},[e("a-badge",{attrs:{status:t._f("statusTypeFilter")(a),text:t._f("statusFilter")(a)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])})],1),e("add-slide-show",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)},i=[],s=(a("aa48"),a("8f7e"),a("567c")),r=a("a7f9"),o={1:{status:"success",text:"正常"},2:{status:"default",text:"关闭"}},l={name:"ContentSlideShow",components:{addSlideShow:r["default"]},data:function(){return{title:"广告图",visible:!1,confirmLoading:!1,sortedInfo:null,BannerList:[],pagination:{pageSize:10,total:10},search:{page:1},page:1,cat_id:0,cat_key:"street_app_index_center",prompt:""}},filters:{statusFilter:function(t){return o[t].text},statusTypeFilter:function(t){return o[t].status}},mounted:function(){this.BannerLists()},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"name",key:"name"},{title:"链接地址",key:"url",dataIndex:"url",scopedSlots:{customRender:"url"}},{title:"图片",key:"pic",dataIndex:"pic",scopedSlots:{customRender:"pic"}},{title:"最后操作时间",key:"last_time",dataIndex:"last_time"},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},methods:{slideshowList:function(){this.page=1,this.title="广告图",this.visible=!0,this.BannerLists()},BannerLists:function(){var t=this;this.search["page"]=this.page,this.search["cat_key"]=this.cat_key;this.request(s["a"].getBannerList,this.search).then((function(e){console.log("res",e),t.BannerList=e.list,t.cat_id=e.cat_id,t.title=e.now_category.cat_name,t.prompt=e.now_category.size_info,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.BannerLists())},handleOks:function(){this.BannerLists()},deleteConfirm:function(t){var e=this;this.request(s["a"].bannerDel,{id:t}).then((function(t){e.BannerLists(),e.$message.success("删除成功")}))},cancel:function(){},handleCancel:function(){this.visible=!1},customExpandIcon:function(t){var e=this.$createElement;return console.log(t.record.children),void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}},c=l,d=(a("fe6b"),a("0b56")),u=Object(d["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},de2e:function(t,e,a){},fbfa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("span",{staticClass:"add-banner sel"},[e("a",{on:{click:function(t){}}},[t._v("首页功能导航-列表")])]),e("span",{staticClass:"add-banner"},[e("a",{on:{click:function(e){return t.$refs.createModal.addBottNavigations()}}},[t._v("添加导航")])]),e("hr"),e("div",{staticClass:"prompt"},[t._v("图标建议尺寸：图片宽度建议为：150px，高度建议为：150px")]),e("a-card",{attrs:{bordered:!1}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.navigationList,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(a,n){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.createModal.editBottNavigation(n.id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"status",fn:function(a){return e("span",{},[e("a-badge",{attrs:{status:t._f("statusTypeFilter")(a),text:t._f("statusFilter")(a)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])})],1),e("add-bott-navigation",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOk}})],1)},i=[],s=(a("aa48"),a("8f7e"),a("567c")),r=a("92c8"),o={1:{status:"success",text:"正常"},2:{status:"default",text:"关闭"}},l={name:"BottNavigation",components:{addBottNavigation:r["default"]},data:function(){return{title:"功能导航",visible:!1,confirmLoading:!1,sortedInfo:null,navigationList:[],pagination:{pageSize:10,total:10},search:{page:1},page:1}},filters:{statusFilter:function(t){return o[t].text},statusTypeFilter:function(t){return o[t].status}},mounted:function(){this.streetLists()},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"name",key:"name"},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},methods:{navigations:function(){this.title="功能导航",this.visible=!0,this.streetLists()},streetLists:function(){var t=this;this.search["page"]=this.page;this.request(s["a"].getStreetNavList,this.search).then((function(e){console.log("res",e),t.navigationList=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.streetLists())},handleOk:function(){this.streetLists()},deleteConfirm:function(t){var e=this;this.request(s["a"].streetNavDel,{id:t}).then((function(t){e.streetLists(),e.$message.success("删除成功")}))},cancel:function(){},handleCancel:function(){this.visible=!1},customExpandIcon:function(t){var e=this.$createElement;return console.log(t.record.children),void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}},c=l,d=(a("86dc"),a("0b56")),u=Object(d["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},fe6b:function(t,e,a){"use strict";a("83e8")}}]);