(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1b499f4","chunk-2d0b3786"],{"16f5":function(t,a,e){},2909:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));var o=e("6b75");function r(t){if(Array.isArray(t))return Object(o["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function l(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=e("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){return r(t)||l(t)||Object(s["a"])(t)||n()}},c956:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.formData?e("div",{staticClass:"bg-ff custom-page-index-decorate"},[e("a-form-model",{attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,rules:t.rules,labelAlign:"left"}},[e("a-card",{attrs:{title:t.L("页面设置"),bordered:!1}},[e("a-form-model-item",{attrs:{label:t.L("页面名称"),prop:"page_title"}},[e("a-input",{model:{value:t.formData.page_title,callback:function(a){t.$set(t.formData,"page_title",a)},expression:"formData.page_title"}})],1),e("a-form-model-item",{attrs:{label:t.L("背景颜色")}},[e("a-radio-group",{on:{change:t.bgColorStyleChange},model:{value:t.formData.bg_color_style,callback:function(a){t.$set(t.formData,"bg_color_style",a)},expression:"formData.bg_color_style"}},t._l(t.bgColorStyleOptions,(function(a,o){return e("a-radio",{key:o,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1),"2"==t.formData.bg_color_style?e("a-form-model-item",{staticClass:"flex-end",attrs:{label:""}},[e("div",{staticClass:"flex align-center color-picker-wrap"},[e("span",{staticClass:"color-name"},[t._v(t._s(t.formData.bg_color))]),e("label",{staticClass:"color-picker-label",style:[{background:t.formData.bg_color}],attrs:{for:"bg_color"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.bg_color,expression:"formData.bg_color"}],attrs:{type:"color",id:"bg_color"},domProps:{value:t.formData.bg_color},on:{input:function(a){a.target.composing||t.$set(t.formData,"bg_color",a.target.value)}}})]),e("a-button",{attrs:{type:"link"},on:{click:function(a){return t.resetOpt("bg_color")}}},[t._v(" "+t._s(t.L("重置")))])],1)]):t._e(),e("a-form-model-item",{attrs:{label:t.L("导航栏背景色")}},[e("a-radio-group",{on:{change:t.bgColorNavStyleChange},model:{value:t.formData.bg_color_nav_style,callback:function(a){t.$set(t.formData,"bg_color_nav_style",a)},expression:"formData.bg_color_nav_style"}},t._l(t.bgColorStyleOptions,(function(a,o){return e("a-radio",{key:o,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1),"2"==t.formData.bg_color_nav_style?e("a-form-model-item",{staticClass:"flex-end",attrs:{label:""}},[e("div",{staticClass:"flex align-center color-picker-wrap"},[e("span",{staticClass:"color-name"},[t._v(t._s(t.formData.bg_color_nav))]),e("label",{staticClass:"color-picker-label",style:[{background:t.formData.bg_color_nav}],attrs:{for:"bg_color_nav"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.bg_color_nav,expression:"formData.bg_color_nav"}],attrs:{type:"color",id:"bg_color_nav"},domProps:{value:t.formData.bg_color_nav},on:{input:function(a){a.target.composing||t.$set(t.formData,"bg_color_nav",a.target.value)}}})]),e("a-button",{attrs:{type:"link"},on:{click:function(a){return t.resetOpt("bg_color_nav")}}},[t._v(" "+t._s(t.L("重置")))])],1)]):t._e(),e("a-form-model-item",{attrs:{label:t.L("页面标题颜色")}},[e("a-radio-group",{model:{value:t.formData.title_color,callback:function(a){t.$set(t.formData,"title_color",a)},expression:"formData.title_color"}},t._l(t.fontColorOptions,(function(a,o){return e("a-radio",{key:o,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1)],1),e("a-form-model-item",{attrs:{label:t.L("底部导航")}},[e("div",{staticClass:"flex justify-between align-center"},[e("span",[t._v(t._s(t.formData.nav_bottom_display&&"1"==t.formData.nav_bottom_display?t.L("显示"):t.L("隐藏")))]),e("a-checkbox",{attrs:{checked:!(!t.formData.nav_bottom_display||"1"!=t.formData.nav_bottom_display)},on:{change:t.navBottomDisplayChange}})],1)])],1),e("a-card",{attrs:{title:t.L("分享设置"),bordered:!1}},[e("a-form-model-item",{attrs:{label:t.L("分享标题")}},[e("a-input",{attrs:{placeholder:t.L("请输入分享标题")},model:{value:t.formData.share_title,callback:function(a){t.$set(t.formData,"share_title",a)},expression:"formData.share_title"}})],1),e("a-form-model-item",{attrs:{label:t.L("分享描述")}},[e("a-textarea",{staticStyle:{height:"200px","overflow-y":"auto",resize:"none"},attrs:{placeholder:t.L("请输入分享描述"),autoSize:""},model:{value:t.formData.share_desc,callback:function(a){t.$set(t.formData,"share_desc",a)},expression:"formData.share_desc"}})],1),e("a-form-model-item",{attrs:{label:t.L("分享图片")}},[e("div",[e("a-upload",{attrs:{name:"reply_pic",action:t.$store.state.customPage.uploadAction,showUploadList:!1,data:t.uploadData},on:{change:function(a){return t.handleUploadChange(a,"share_image_wechat")}}},[e("div",{staticClass:"upload-wrap upload-wrap-wechat pointer flex align-center justify-center"},[t.formData.share_image_wechat?e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.formData.share_image_wechat,alt:""}}):e("div",{staticClass:"flex flex-column justify-center align-center"},[e("a-icon",{attrs:{type:"plus"}}),e("span",{staticClass:"mt-20"},[t._v(t._s(t.L("添加分享图片")))])],1)])]),e("div",{staticClass:"mt-10"},[t._v(t._s(t.L("小程序")))]),e("div",{staticClass:"ant-form-explain"},[t._v(" "+t._s(t.L("建议图片长度宽比5:4，如不设置，自动截取页面首屏"))+" ")])],1),e("div",{staticClass:"mt-20"},[e("a-upload",{attrs:{name:"reply_pic",action:t.$store.state.customPage.uploadAction,showUploadList:!1,data:t.uploadData},on:{change:function(a){return t.handleUploadChange(a,"share_image_h5")}}},[e("div",{staticClass:"upload-wrap upload-wrap-h5 pointer flex align-center justify-center"},[t.formData.share_image_h5?e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.formData.share_image_h5,alt:""}}):e("div",{staticClass:"flex flex-column justify-center align-center"},[e("a-icon",{attrs:{type:"plus"}}),e("span",{staticClass:"mt-20"},[t._v(t._s(t.L("添加分享图片")))])],1)])]),e("div",{staticClass:"mt-10"},[t._v("h5")]),e("div",{staticClass:"ant-form-explain"},[t._v(" "+t._s(t.L("建议图片长度宽比1:1，如不设置，自动获取logo图"))+" ")])],1)])],1)],1)],1):t._e()},r=[],l=e("2909"),s=(e("fb6a"),e("d81d"),e("b0c0"),{data:function(){return{formData:"",labelCol:{span:6},wrapperCol:{span:18},bgColorStyleOptions:[{label:this.L("默认背景色"),value:"1"},{label:this.L("自定义背景色"),value:"2"}],fontColorOptions:[{label:this.L("黑色"),value:"#000000"},{label:this.L("白色"),value:"#ffffff"}],rules:{page_title:{required:!0,message:this.L("页面名称必填"),trigger:"blur"}},bg_color:"#f9f9f9",bg_color_nav:"#ffffff"}},computed:{componentId:function(){return this.$store.state.customPage.componentId},sourceInfo:function(){return this.$store.state.customPage.sourceInfo},uploadData:function(){return{upload_dir:"/decorate/images",source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,is_decorate:1}},pageInfo:function(){return this.$store.state.customPage.pageInfo}},watch:{formData:{deep:!0,handler:function(t){t&&this.updatePageInfo()}},pageInfo:{immediate:!0,handler:function(t){this.formData||this.getEditMicoPageOpt(t)}}},methods:{updatePageInfo:function(){this.$store.dispatch("updatePageInfo",this.formData)},getEditMicoPageOpt:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=t?JSON.stringify(t):JSON.stringify(this.pageInfo)||"";this.formData=a?JSON.parse(a):this.formData},resetOpt:function(t){this.$set(this.formData,t,this[t])},navBottomDisplayChange:function(t){this.$set(this.formData,"nav_bottom_display",t.target.checked)},handleUploadChange:function(t,a){var e=this,o=Object(l["a"])(t.fileList);o=o.slice(-1),o=o.map((function(t){if("done"===t.status&&"1000"==t.response.status){var o=t.response.data;e.$set(e.formData,a,o),console.log(e.formData,"this.formData")}return t})),"done"===t.file.status||"error"===t.file.status&&this.$message.error(this.L("X1上传失败。",{X1:t.file.name}))},bgColorStyleChange:function(t){"1"==t.target.value?this.$set(this.formData,"bg_color",this.bg_color):this.$set(this.formData,"bg_color",this.formData.bg_color)},bgColorNavStyleChange:function(t){"1"==t.target.value?this.$set(this.formData,"bg_color_nav",this.bg_color_nav):this.$set(this.formData,"bg_color_nav",this.formData.bg_color_nav)}}}),n=s,i=(e("e462"),e("0c7c")),c=Object(i["a"])(n,o,r,!1,null,"6c4edf64",null);a["default"]=c.exports},e462:function(t,a,e){"use strict";e("16f5")}}]);