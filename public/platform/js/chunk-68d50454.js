(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68d50454","chunk-2d0b6a79","chunk-6d11acd6","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d3b7");function i(e,t,a,i,r,o,n){try{var s=e[o](n),l=s.value}catch(d){return void a(d)}s.done?t(l):Promise.resolve(l).then(i,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,o){var n=e.apply(t,a);function s(e){i(n,r,o,s,l,"next",e)}function l(e){i(n,r,o,s,l,"throw",e)}s(void 0)}))}}},2295:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1100,height:600,visible:e.visible,footer:""},on:{cancel:e.handelCancle,ok:e.handleOk}},[a("div",[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.getAddModel}},[e._v("新建")]),a("a-table",{attrs:{columns:e.columns,"data-source":e.list,scroll:{y:700},rowkey:"id"},scopedSlots:e._u([{key:"sort",fn:function(t,i){return a("span",{},[e._v(e._s(i.sort))])}},{key:"name",fn:function(t,i){return a("span",{},[e._v(e._s(i.name))])}},{key:"area_name",fn:function(t,i){return a("span",{},[e._v(e._s(i.area_name))])}},{key:"pic",fn:function(e,t){return a("span",{},[a("img",{attrs:{width:"70px",height:"30px",src:t.pic}})])}},{key:"last_time",fn:function(t,i){return a("span",{},[e._v(e._s(i.last_time))])}},{key:"status",fn:function(t,i){return a("span",{},[0==t?a("a-badge",{attrs:{status:"error",text:"关闭"}}):e._e(),1==t?a("a-badge",{attrs:{status:"success",text:"开启"}}):e._e()],1)}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.getOrEdit(i.id,!1,1)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(i.id)}}},[a("a",[e._v("删除")])])],1)}}])}),a("a-modal",{attrs:{visible:e.add_visible,width:"650px",closable:!1,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"600px"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name',{rules: [{required: true, message: '请填写名称'}]}]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[e.pic_show?a("div",[a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}),a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}})],1):e._e(),a("div",[a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"mall/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),a("font",{staticStyle:{color:"red"}},[e._v("建议750*270px")])],1),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url"],expression:"['url']"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),a("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")])],1),e.isPlat?a("a-form-item",{attrs:{label:"小程序中想要打开"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_open_type",{initialValue:1}],expression:"['wxapp_open_type', {initialValue:1}]"}]},[a("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")])],1)],1):e._e(),e.isPlat?a("a-form-item",{attrs:{label:"打开其他小程序"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_id"],expression:"['wxapp_id']"}],attrs:{placeholder:"选择小程序"}},e._l(e.wxapp_list,(function(t,i){return a("a-select-option",{attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),e.isPlat?a("a-form-item",{attrs:{label:"小程序页面"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_page"],expression:"['wxapp_page']"}],staticStyle:{width:"317px"},attrs:{placeholder:"请输入小程序页面路径"}}),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),e.isPlat?a("a-divider",[e._v("打开其他APP")]):e._e(),e.isPlat?a("a-form-item",{attrs:{label:"APP中想要打开"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_open_type",{initialValue:2}],expression:"['app_open_type', {initialValue:2}]"}],on:{change:e.changeAppType}},[a("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")]),a("a-select-option",{attrs:{value:2}},[e._v(" 打开其他APP ")])],1)],1):e._e(),2==e.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"选择苹果APP"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_name"],expression:"['ios_app_name']"}],attrs:{placeholder:"选择苹果APP"}},e._l(e.app_list,(function(t,i){return a("a-select-option",{attrs:{value:t.url_scheme}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),2==e.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"苹果APP下载地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_url"],expression:"['ios_app_url']"}],attrs:{placeholder:"请输入苹果APP下载地址"}})],1):e._e(),2==e.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"安卓APP包名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_name"],expression:"['android_app_name']"}],attrs:{placeholder:"请输入安卓APP包名"}})],1):e._e(),2==e.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"安卓APP下载地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_url"],expression:"['android_app_url']"}],attrs:{placeholder:"请输入安卓APP下载地址"}})],1):e._e(),1==e.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"打开其他小程序"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_id"],expression:"['app_wxapp_id']"}],attrs:{placeholder:"选择小程序"}},e._l(e.wxapp_list,(function(t,i){return a("a-select-option",{attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),1==e.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"小程序页面"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_page"],expression:"['app_wxapp_page']"}],staticStyle:{width:"317px"},attrs:{placeholder:"请输入小程序页面路径"}}),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status"],expression:"['status']"}],attrs:{defaultChecked:!0,"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)]),a("decorate-adver-edit",{ref:"adverEditModel",on:{update:e.getList}})],1)])},r=[],o=a("1da1"),n=(a("a434"),a("96cf"),a("beed")),s=a("7d4c"),l=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],d={name:"decorateAdver",components:{DecorateAdverEdit:s["default"]},data:function(){return{visible:!1,add_visible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:l,list:[],tab_key:1,form:this.$form.createForm(this),id:"",type:3,areaList:"",app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},isPlat:!0,confirmLoading:!1}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{init:function(){},getList:function(e,t){var a=this;this.visible=!0,this.title=t,this.cat_key=e,this.isPlat="banking_index_adver"!=e&&"banking_electronic_adver"!=e,this.request(n["a"].getList,{cat_key:e}).then((function(e){console.log(e),a.tab_name=e.now_category.cat_name,a.cat_id=e.now_category.cat_id,a.cat_key=e.now_category.cat_key,a.desc="图片建议尺寸"+e.now_category.size_info,a.list=e.adver_list}))},handelCancle:function(){this.visible=!1},getOrEdit:function(e,t,a){this.$refs.adverEditModel.editOne(e,t,a,this.cat_key,this.title)},getAddModel:function(){this.add_visible=!0,this.length=0,this.pic="",this.pic_show=!1,this.removeImage()},delOne:function(e){var t=this;this.request(n["a"].getDel,{id:e}).then((function(e){t.getList(t.cat_key,t.title)}))},editOne:function(e){var t=this;this.getAllArea(),this.tab_key=e,2==e&&this.request(n["a"].getEdit).then((function(e){t.app_list=e.app_list,t.wxapp_list=e.wxapp_list,t.epic&&(t.fileList=[{uid:"-1",name:"当前图片",status:"done",url:t.epic}],t.length=t.fileList.length,t.pic=t.epic,t.pic_show=!0)}))},handleCancle:function(){this.add_visible=!1,this.pic=""},getAllArea:function(){var e=this;this.request(n["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleOk:function(e){this.visible=!1},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(a.cat_key=t.cat_key,a.pic=t.pic,a.areaList||(a.areaList=[]),console.log(a),t.confirmLoading=!0,t.request(n["a"].addOrEditDecorate,a).then((function(e){t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.pic="",t.getList(t.cat_key,t.title),t.add_visible=!1,t.confirmLoading=!1}),1500)})))}))},switchCurrency:function(e){},changeAppType:function(e){this.app_open_type=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},c=d,p=(a("88d07"),a("0c7c")),u=Object(p["a"])(c,i,r,!1,null,"56815b55",null);t["default"]=u.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("6b75");function r(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var n=a("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return r(e)||o(e)||Object(n["a"])(e)||s()}},"49a2":function(e,t,a){"use strict";a("f7b5")},"530a":function(e,t,a){},"7b3f":function(e,t,a){"use strict";var i={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=i},"7d4c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,width:"650px",height:"600px",closable:!1,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"600px"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("a-upload",{attrs:{name:"reply_pic","file-list":e.fileListCover,action:e.uploadImg,headers:e.headers,"list-type":"picture-card"},on:{preview:e.handlePreviewCover,change:function(t){return e.upLoadChangeCover(t)}}},[e.fileListCover.length<1?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisibleCover,footer:null},on:{cancel:e.handleCancelCover}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImageCover}})]),a("font",{staticStyle:{color:"red"}},[e._v("建议750*270px")])],1),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url}],expression:"['url', {initialValue:detail.now_adver.url}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?a("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1),e.isPlat?a("a-form-item",{attrs:{label:"小程序中想要打开"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_open_type",{initialValue:e.detail.now_adver.wxapp_open_type}],expression:"['wxapp_open_type', {initialValue:detail.now_adver.wxapp_open_type}]"}],attrs:{disabled:this.edited}},[a("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")])],1)],1):e._e(),e.isPlat?a("a-form-item",{attrs:{label:"打开其他小程序"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_id",{initialValue:e.detail.now_adver.wxapp_id}],expression:"['wxapp_id', {initialValue:detail.now_adver.wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"请选择小程序"}},e._l(e.detail.wxapp_list,(function(t,i){return a("a-select-option",{attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),e.isPlat?a("a-form-item",{attrs:{label:"小程序页面"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_page",{initialValue:e.detail.now_adver.wxapp_page}],expression:"['wxapp_page', {initialValue:detail.now_adver.wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),e.isPlat?a("a-divider",[e._v("打开其他APP")]):e._e(),e.isPlat?a("a-form-item",{attrs:{label:"APP中想要打开"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_open_type",{initialValue:e.detail.now_adver.app_open_type}],expression:"['app_open_type', {initialValue:detail.now_adver.app_open_type}]"}],attrs:{disabled:this.edited},on:{change:e.changeAppType}},[a("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")]),a("a-select-option",{attrs:{value:2}},[e._v(" 打开其他APP ")])],1)],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"选择苹果APP"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_name",{initialValue:e.detail.now_adver.ios_app_name}],expression:"['ios_app_name', {initialValue:detail.now_adver.ios_app_name}]"}],attrs:{disabled:this.edited,placeholder:"选择苹果APP"}},e._l(e.detail.app_list,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.url_scheme}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"苹果APP下载地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_url",{initialValue:e.detail.now_adver.ios_app_url}],expression:"['ios_app_url', {initialValue:detail.now_adver.ios_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入苹果APP下载地址"}})],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"安卓APP包名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_name",{initialValue:e.detail.now_adver.android_app_name}],expression:"['android_app_name', {initialValue:detail.now_adver.android_app_name}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP包名"}})],1):e._e(),2==e.detail.now_adver.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"安卓APP下载地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_url",{initialValue:e.detail.now_adver.android_app_url}],expression:"['android_app_url', {initialValue:detail.now_adver.android_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP下载地址"}})],1):e._e(),1==e.detail.now_adver.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"打开其他小程序"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_id",{initialValue:e.detail.now_adver.app_wxapp_id}],expression:"['app_wxapp_id', {initialValue:detail.now_adver.app_wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"选择小程序"}},e._l(e.detail.wxapp_list,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.appid}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),1==e.detail.now_adver.app_open_type&&e.isPlat?a("a-form-item",{attrs:{label:"小程序页面"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_page",{initialValue:e.detail.now_adver.app_wxapp_page}],expression:"['app_wxapp_page', {initialValue:detail.now_adver.app_wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),a("a-tooltip",{attrs:{trigger:"“hover"}},[a("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),a("link-bases",{ref:"linkModel"})],1)},r=[],o=a("2909"),n=a("1da1"),s=(a("fb6a"),a("d81d"),a("b0c0"),a("96cf"),a("beed")),l=a("c2d1"),d=a("7b3f"),c={name:"decorateAdverEdit",components:{LinkBases:l["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",edited:!0,cat_key:"",title:"",areaList:"",detail:{now_adver:{}},previewVisible:!1,previewImage:"",length:0,pic:"",headers:{authorization:"authorization-text"},uploadImg:"/v20/public/index.php"+d["a"].uploadImg+"?upload_dir=/adver/images",fileList:[],fileListCover:[],previewVisibleCover:!1,previewImageCover:null,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},isPlat:!0,confirmLoading:!1}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){console.log(this.cat_key,"cat_key111"),this.form=this.$form.createForm(this,{name:"validate_other"}),this.getAllArea()},methods:{editOne:function(e,t,a,i,r){var o=this;this.visible=!0,this.edited=t,this.type=a,this.id=e,this.cat_key=i,this.title=r,this.getAllArea(),console.log(i,"cat_key"),this.isPlat="banking_index_adver"!=i&&"banking_electronic_adver"!=i,this.request(s["a"].getEdit,{id:e}).then((function(e){o.detail=e,o.detail.now_adver.pic&&(o.fileListCover[0]={uid:1,name:"image.png",status:"done",url:o.detail.now_adver.pic,data:o.detail.now_adver.pic},o.length=o.fileList.length,o.pic=o.detail.now_adver.pic)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(s["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(a.id=t.id,a.cat_key=t.cat_key,a.pic=t.pic,a.areaList||(a.areaList=[]),console.log(a),t.confirmLoading=!0,t.request(s["a"].addOrEditDecorate,a).then((function(e){t.id>0?(t.$message.success("编辑成功"),t.$emit("update",{cat_key:t.cat_key,title:t.title})):t.$message.success("添加成功"),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",a),t.confirmLoading=!1}),1500)})))}))},switchComplete:function(e){},changeAppType:function(e){this.detail.now_adver.app_open_type=e},handlePreviewCover:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImageCover=e.url||e.preview,t.previewVisibleCover=!0;case 6:case"end":return a.stop()}}),a)})))()},upLoadChangeCover:function(e){var t=this,a=Object(o["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.pic=e.file.response.data.image),a})),this.fileListCover=a,"done"===e.file.status||"error"===e.file.status&&this.$message.error("".concat(e.file.name," 上传失败."))},handleCancelCover:function(){this.previewVisibleCover=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},p=c,u=(a("49a2"),a("0c7c")),m=Object(u["a"])(p,i,r,!1,null,null,null);t["default"]=m.exports},"88d07":function(e,t,a){"use strict";a("530a")},beed:function(e,t,a){"use strict";var i={getList:"/common/common.DecoratePage/getHomeDecorateList",getDel:"/common/common.DecoratePage/getHomeDecorateDel",getEdit:"/common/common.DecoratePage/getHomeDecorateEdit",getAllArea:"/common/common.DecoratePage/getAllArea",addOrEditDecorate:"/common/common.DecoratePage/homeDecorateaddOrEdit"};t["a"]=i},f7b5:function(e,t,a){}}]);