(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfb8f992","chunk-2d0b6a79","chunk-2d0b6a79"],{"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d3b7");function i(e,t,a,i,r,s,l){try{var n=e[s](l),o=n.value}catch(d){return void a(d)}n.done?t(o):Promise.resolve(o).then(i,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,s){var l=e.apply(t,a);function n(e){i(l,r,s,n,o,"next",e)}function o(e){i(l,r,s,n,o,"throw",e)}n(void 0)}))}}},"4a23":function(e,t,a){"use strict";a.r(t);a("b0c0"),a("4e82");var i=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{visible:e.visible,width:"780px",height:"600px",closable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[t("div",{staticStyle:{"overflow-y":"scroll",height:"600px"}},[t("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),t("a-form-item",{attrs:{label:"通用广告"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1),0==e.detail.now_adver.currency?t("a-form-item",{attrs:{label:"所在区域"}},[t("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区",defaultValue:[e.detail.now_adver.province_id,e.detail.now_adver.city_id]}})],1):e._e(),t("a-form-item",{attrs:{label:"图片",extra:""}},[t("div",{staticClass:"clearfix"},[e.pic_show?t("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?t("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),t("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"mall/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),t("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),t("a-form-item",{attrs:{label:"链接地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url,rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url', {initialValue:detail.now_adver.url,rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?t("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1),t("a-form-item",{attrs:{label:"小程序中想要打开"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_open_type",{initialValue:e.detail.now_adver.wxapp_open_type}],expression:"['wxapp_open_type', {initialValue:detail.now_adver.wxapp_open_type}]"}],attrs:{disabled:this.edited}},[t("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")])],1)],1),t("a-form-item",{attrs:{label:"打开其他小程序"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_id",{initialValue:e.detail.now_adver.wxapp_id}],expression:"['wxapp_id', {initialValue:detail.now_adver.wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"请选择小程序"}},e._l(e.detail.wxapp_list,(function(a,i){return t("a-select-option",{attrs:{value:a.appid}},[e._v(" "+e._s(a.name)+" ")])})),1)],1),t("a-form-item",{attrs:{label:"小程序页面"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_page",{initialValue:e.detail.now_adver.wxapp_page}],expression:"['wxapp_page', {initialValue:detail.now_adver.wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),t("a-tooltip",{attrs:{trigger:"“hover"}},[t("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),t("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),t("a-divider",[e._v("打开其他APP")]),t("a-form-item",{attrs:{label:"APP中想要打开"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_open_type",{initialValue:e.detail.now_adver.app_open_type}],expression:"['app_open_type', {initialValue:detail.now_adver.app_open_type}]"}],attrs:{disabled:this.edited},on:{change:e.changeAppType}},[t("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")]),t("a-select-option",{attrs:{value:2}},[e._v(" 打开其他APP ")])],1)],1),2==e.detail.now_adver.app_open_type?t("a-form-item",{attrs:{label:"选择苹果APP"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_name",{initialValue:e.detail.now_adver.ios_app_name}],expression:"['ios_app_name', {initialValue:detail.now_adver.ios_app_name}]"}],attrs:{disabled:this.edited,placeholder:"选择苹果APP"}},e._l(e.detail.app_list,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a.url_scheme}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),2==e.detail.now_adver.app_open_type?t("a-form-item",{attrs:{label:"苹果APP下载地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_url",{initialValue:e.detail.now_adver.ios_app_url}],expression:"['ios_app_url', {initialValue:detail.now_adver.ios_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入苹果APP下载地址"}})],1):e._e(),2==e.detail.now_adver.app_open_type?t("a-form-item",{attrs:{label:"安卓APP包名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_name",{initialValue:e.detail.now_adver.android_app_name}],expression:"['android_app_name', {initialValue:detail.now_adver.android_app_name}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP包名"}})],1):e._e(),2==e.detail.now_adver.app_open_type?t("a-form-item",{attrs:{label:"安卓APP下载地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_url",{initialValue:e.detail.now_adver.android_app_url}],expression:"['android_app_url', {initialValue:detail.now_adver.android_app_url}]"}],attrs:{disabled:this.edited,placeholder:"请输入安卓APP下载地址"}})],1):e._e(),1==e.detail.now_adver.app_open_type?t("a-form-item",{attrs:{label:"打开其他小程序"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_id",{initialValue:e.detail.now_adver.app_wxapp_id}],expression:"['app_wxapp_id', {initialValue:detail.now_adver.app_wxapp_id}]"}],attrs:{disabled:this.edited,placeholder:"选择小程序"}},e._l(e.detail.wxapp_list,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a.appid}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),1==e.detail.now_adver.app_open_type?t("a-form-item",{attrs:{label:"小程序页面"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_page",{initialValue:e.detail.now_adver.app_wxapp_page}],expression:"['app_wxapp_page', {initialValue:detail.now_adver.app_wxapp_page}]"}],staticStyle:{width:"317px"},attrs:{disabled:this.edited,placeholder:"请输入小程序页面路径"}}),t("a-tooltip",{attrs:{trigger:"“hover"}},[t("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),t("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),t("a-form-item",{attrs:{label:"排序"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),t("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),t("a-form-item",{attrs:{label:"状态"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),t("link-bases",{ref:"linkModel"})],1)},r=[],s=a("1da1"),l=(a("a434"),a("96cf"),a("011d")),n=a("c2d1"),o={name:"decorateAdverEdit",components:{LinkBases:n["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",edited:!0,cat_key:"",title:title,areaList:"",detail:"",previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(e,t,a,i,r){var s=this;this.visible=!0,this.edited=t,this.type=a,this.id=e,this.cat_key=i,this.title=r,this.getAllArea(),this.request(l["a"].getEdit,{id:e}).then((function(e){s.removeImage(),s.detail=e,s.detail.now_adver.pic&&(s.fileList=[{uid:"-1",name:"当前图片",status:"done",url:s.detail.now_adver.pic}],s.length=s.fileList.length,s.pic=s.detail.now_adver.pic,s.pic_show=!0)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(l["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(a.id=t.id,a.cat_key=t.cat_key,a.currency=1==a.currency?1:0,a.pic=t.pic,a.areaList||(a.areaList=[]),console.log(a),t.request(l["a"].addOrEditDecorate,a).then((function(e){t.id>0?(t.$message.success("编辑成功"),t.$emit("update",{cat_key:t.cat_key,title:t.title})):t.$message.success("添加成功"),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",a)}),1500)})))}))},switchComplete:function(e){this.detail.now_adver.currency=e},changeAppType:function(e){this.detail.now_adver.app_open_type=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},d=o,c=(a("67a3"),a("2877")),p=Object(c["a"])(d,i,r,!1,null,null,null);t["default"]=p.exports},"56b7":function(e,t,a){"use strict";a.r(t);a("4e82"),a("b0c0");var i=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:1100,height:600,visible:e.visible,footer:""},on:{cancel:e.handelCancle,ok:e.handleOk}},[t("div",[t("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.getAddModel}},[e._v("新建")]),t("a-table",{attrs:{columns:e.columns,"data-source":e.list,scroll:{y:700}},scopedSlots:e._u([{key:"sort",fn:function(a,i){return t("span",{},[e._v(e._s(i.sort))])}},{key:"name",fn:function(a,i){return t("span",{},[e._v(e._s(i.name))])}},{key:"area_name",fn:function(a,i){return t("span",{},[e._v(e._s(i.area_name))])}},{key:"pic",fn:function(e,a){return t("span",{},[t("img",{attrs:{width:"70px",height:"30px",src:a.pic}})])}},{key:"last_time",fn:function(a,i){return t("span",{},[e._v(e._s(i.last_time))])}},{key:"status",fn:function(a,i){return t("span",{},[0==a?t("a-badge",{attrs:{status:"error",text:"关闭"}}):e._e(),1==a?t("a-badge",{attrs:{status:"success",text:"开启"}}):e._e()],1)}},{key:"action",fn:function(a,i){return t("span",{},[t("a",{on:{click:function(t){return e.getOrEdit(i.id,!0,1)}}},[e._v("查看")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{on:{click:function(t){return e.getOrEdit(i.id,!1,1)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(i.id)}}},[t("a",[e._v("删除")])])],1)}}])}),t("a-modal",{attrs:{visible:e.add_visible,width:"780px",closable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[t("div",{staticStyle:{"overflow-y":"scroll",height:"600px"}},[t("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name',{rules: [{required: true, message: '请填写名称'}]}]"}],attrs:{placeholder:"请输入名称"}})],1),t("a-form-item",{attrs:{label:"通用广告"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency"],expression:"['currency']"}],attrs:{"checked-children":"通用","un-checked-children":"不通用",defaultChecked:!0},on:{change:e.switchCurrency}})],1),0==e.currency?t("a-form-item",{attrs:{label:"所在区域"}},[t("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区"}})],1):e._e(),t("a-form-item",{attrs:{label:"图片",extra:""}},[t("div",{staticClass:"clearfix"},[e.pic_show?t("div",[t("img",{attrs:{width:"75px",height:"75px",src:this.pic}}),t("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}})],1):e._e(),t("div",[t("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"mall/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),t("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)])]),t("a-form-item",{attrs:{label:"链接地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url',{rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),t("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")])],1),t("a-form-item",{attrs:{label:"小程序中想要打开"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_open_type",{initialValue:1}],expression:"['wxapp_open_type', {initialValue:1}]"}]},[t("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")])],1)],1),t("a-form-item",{attrs:{label:"打开其他小程序"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_id"],expression:"['wxapp_id']"}],attrs:{placeholder:"选择小程序"}},e._l(e.wxapp_list,(function(a,i){return t("a-select-option",{attrs:{value:a.appid}},[e._v(" "+e._s(a.name)+" ")])})),1)],1),t("a-form-item",{attrs:{label:"小程序页面"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["wxapp_page"],expression:"['wxapp_page']"}],staticStyle:{width:"317px"},attrs:{placeholder:"请输入小程序页面路径"}}),t("a-tooltip",{attrs:{trigger:"“hover"}},[t("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),t("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),t("a-divider",[e._v("打开其他APP")]),t("a-form-item",{attrs:{label:"APP中想要打开"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_open_type",{initialValue:2}],expression:"['app_open_type', {initialValue:2}]"}],on:{change:e.changeAppType}},[t("a-select-option",{attrs:{value:1}},[e._v(" 打开其他小程序 ")]),t("a-select-option",{attrs:{value:2}},[e._v(" 打开其他APP ")])],1)],1),2==e.app_open_type?t("a-form-item",{attrs:{label:"选择苹果APP"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_name"],expression:"['ios_app_name']"}],attrs:{placeholder:"选择苹果APP"}},e._l(e.app_list,(function(a,i){return t("a-select-option",{attrs:{value:a.url_scheme}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),2==e.app_open_type?t("a-form-item",{attrs:{label:"苹果APP下载地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ios_app_url"],expression:"['ios_app_url']"}],attrs:{placeholder:"请输入苹果APP下载地址"}})],1):e._e(),2==e.app_open_type?t("a-form-item",{attrs:{label:"安卓APP包名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_name"],expression:"['android_app_name']"}],attrs:{placeholder:"请输入安卓APP包名"}})],1):e._e(),2==e.app_open_type?t("a-form-item",{attrs:{label:"安卓APP下载地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["android_app_url"],expression:"['android_app_url']"}],attrs:{placeholder:"请输入安卓APP下载地址"}})],1):e._e(),1==e.app_open_type?t("a-form-item",{attrs:{label:"打开其他小程序"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_id"],expression:"['app_wxapp_id']"}],attrs:{placeholder:"选择小程序"}},e._l(e.wxapp_list,(function(a,i){return t("a-select-option",{attrs:{value:a.appid}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),1==e.app_open_type?t("a-form-item",{attrs:{label:"小程序页面"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_wxapp_page"],expression:"['app_wxapp_page']"}],staticStyle:{width:"317px"},attrs:{placeholder:"请输入小程序页面路径"}}),t("a-tooltip",{attrs:{trigger:"“hover"}},[t("template",{slot:"title"},[e._v(" 即打开另一个小程序时进入的页面路径，如果为空则打开首页；另一个小程序的页面路径请联系该小程序的技术人员询要；目前仅支持用户在平台小程序首页和外卖首页中打开其他小程序。 ")]),t("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1):e._e(),t("a-form-item",{attrs:{label:"排序"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),t("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),t("a-form-item",{attrs:{label:"状态"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status"],expression:"['status']"}],attrs:{defaultChecked:!0,"checked-children":"开启","un-checked-children":"关闭"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)]),t("decorate-adver-edit",{ref:"adverEditModel",on:{update:e.getList}})],1)])},r=[],s=a("1da1"),l=(a("a434"),a("96cf"),a("011d")),n=a("4a23"),o=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"浏览量",dataIndex:"click_number",key:"click_number"},{title:"城市",dataIndex:"area_name",width:100,key:"area_name",scopedSlots:{customRender:"area_name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],d={name:"decorateAdver",components:{DecorateAdverEdit:n["default"]},data:function(){return{visible:!1,add_visible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:o,list:[],tab_key:1,form:this.$form.createForm(this),id:"",type:3,areaList:"",app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{init:function(){},getList:function(e,t){var a=this;this.visible=!0,this.title=t,this.cat_key=e,this.request(l["a"].getList,{cat_key:e}).then((function(e){console.log(e),a.tab_name=e.now_category.cat_name,a.cat_id=e.now_category.cat_id,a.cat_key=e.now_category.cat_key,a.desc="图片建议尺寸"+e.now_category.size_info,a.list=e.adver_list}))},handelCancle:function(){this.visible=!1},getOrEdit:function(e,t,a){this.$refs.adverEditModel.editOne(e,t,a,this.cat_key,this.title)},getAddModel:function(){this.add_visible=!0,this.length=0,this.pic="",this.pic_show=!1,this.removeImage()},delOne:function(e){var t=this;this.request(l["a"].getDel,{id:e}).then((function(e){t.getList(t.cat_key,t.title)}))},editOne:function(e){var t=this;this.getAllArea(),this.tab_key=e,2==e&&this.request(l["a"].getEdit).then((function(e){t.app_list=e.app_list,t.wxapp_list=e.wxapp_list,t.epic&&(t.fileList=[{uid:"-1",name:"当前图片",status:"done",url:t.epic}],t.length=t.fileList.length,t.pic=t.epic,t.pic_show=!0)}))},handleCancle:function(){this.add_visible=!1,this.pic=""},getAllArea:function(){var e=this;this.request(l["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleOk:function(e){this.visible=!1},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(a.cat_key=t.cat_key,a.currency=!1===a.currency?0:1,a.pic=t.pic,a.areaList||(a.areaList=[]),console.log(a),t.request(l["a"].addOrEditDecorate,a).then((function(e){t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.pic="",t.getList(t.cat_key,t.title),t.add_visible=!1}),1500)})))}))},switchCurrency:function(e){this.currency=e},changeAppType:function(e){this.app_open_type=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},c=d,p=(a("ead3"),a("2877")),u=Object(p["a"])(c,i,r,!1,null,"343ff129",null);t["default"]=u.exports},"67a3":function(e,t,a){"use strict";a("7d50")},"7d50":function(e,t,a){},e209:function(e,t,a){},ead3:function(e,t,a){"use strict";a("e209")}}]);