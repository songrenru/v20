(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62647e6e","chunk-2d0b3786"],{"06c3":function(e,a,t){"use strict";t("d7d1")},"0f316":function(e,a,t){"use strict";t("9003")},"19bb":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",["text"==e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[e.number?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,staticStyle:{width:"100%"},attrs:{precision:e.digits?0:e.precision,min:e.min,max:e.max,name:e.name,disabled:e.disabled,placeholder:e.placeholder}}):e.url?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{type:"url",message:"请输入正确的url地址"},{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value,\n              rules: [\n                {\n                  type: 'url',\n                  message: '请输入正确的url地址',\n                },\n                { required: required, message: requiredMessage },\n              ],\n            },\n          ]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}}):t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"textarea"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{rows:e.rows,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"switch"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:22}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:"1"==e.value,valuePropName:"checked"}],expression:"[name, { initialValue: value == '1' ? true : false, valuePropName: 'checked' }]"}],key:e.name,attrs:{"checked-children":e.switchCheckedText,"un-checked-children":e.switchUncheckedText}})],1)],1)],1):e._e(),"radio"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,options:e.selectArray}})],1)],1)],1):e._e(),"select"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"time"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.timeFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, timeFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name,format:e.timeFormat}})],1)],1)],1):e._e(),"date"===e.type?t("a-form-item",{attrs:{format:e.dateFormat,label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.dateFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, dateFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name}})],1)],1)],1):e._e(),"file"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/common/common.UploadFile/uploadFile?upload_dir=file","file-list":e.fileList,multiple:!1},on:{change:e.handleChange,preview:e.handlePreview}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传文件 ")],1)],1)],1)],1)],1):e._e(),"image"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{attrs:{name:"img",action:"/v20/public/index.php/common/platform.system.config/upload","file-list":e.fileList,multiple:!1},on:{change:e.handleChange}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传图片 ")],1)],1)],1)],1)],1):e._e()],1)},l=[],n=t("2909"),i=(t("a9e3"),t("b0c0"),t("fb6a"),t("d81d"),t("c1df")),s=t.n(i),o=t("7a6b");function u(e,a){var t=new FileReader;t.addEventListener("load",(function(){return a(t.result)})),t.readAsDataURL(e)}var d={name:"FormItem",components:{CustomTooltip:o["a"]},props:{labelCol:{type:Object,default:function(){return{lg:{span:6},sm:{span:7}}}},wrapperCol:{type:Object,default:function(){return{lg:{span:14},sm:{span:17}}}},title:{type:String,default:"标题"},name:{type:String,default:"name"},required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"此项必填"},tips:{type:String,default:""},type:{type:String,default:"text"},number:{type:Boolean,default:!1},digits:{type:Boolean,default:!1},precision:{type:Number,default:2},url:{type:Boolean,default:!1},max:{type:Number},min:{type:Number},selectArray:{type:Array,default:function(){return[]}},rows:{type:Number,default:4},placeholder:{type:String,default:""},value:{type:[Object,String,Array,Boolean,Number],default:null},tipsSize:{type:String,default:"18px"},tipsColor:{type:String,default:"#c5c5c5"},disabled:{type:Boolean,default:!1},fileUploadUrl:{type:String,default:""},imgUploadUrl:{type:String,default:""},switchCheckedText:{type:String,default:"开启"},switchUncheckedText:{type:String,default:"关闭"}},data:function(){return{timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD",headers:{authorization:"authorization-text"},loading:!1,imageUrl:"",fileList:[]}},mounted:function(){"image"!=this.type&&"file"!=this.type||(console.log("----------------",this.type,this.name,this.value),this.value&&(this.fileList=[{uid:"1",name:this.value,status:"done",url:this.value}]))},watch:{fileList:function(e){this.$emit("uploadChange",{name:this.name,type:this.type,value:e})}},methods:{moment:s.a,handleChange:function(e){var a=this,t=Object(n["a"])(e.fileList);t=t.slice(-1);t=t.map((function(e){return e.response&&(1e3==e.response.status?(e.url=e.response.data,!0):(e.name=a.value,e.url=a.value,a.$message.error(e.response.msg))),e})),this.fileList=t},handlePreview:function(e){return!1},normFile:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?e.file.response.data:void this.$message.error("上传失败！")},imgFile:function(e){var a=this;return console.log("Upload event:",e),u(e.file.originFileObj,(function(e){a.imageUrl=e})),"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?(this.fileList=[e.file.response.data],console.log(22222,this.fileList),this.fileList):void this.$message.error("上传失败！")}}},c=d,m=(t("0f316"),t("0c7c")),p=Object(m["a"])(c,r,l,!1,null,"a127712e",null);a["a"]=p.exports},2627:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-header-index-wide"},[t("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[t("div",{staticClass:"account-settings-info-main",class:e.device},[t("div",{staticClass:"account-settings-info-left"},[t("a-menu",{style:{border:"0",width:"mobile"==e.device?"560px":"auto"},attrs:{mode:"mobile"==e.device?"horizontal":"inline",type:"inner","selected-keys":e.selectedKeys}},e._l(e.channels,(function(a){return t("a-menu-item",{key:a.id,on:{click:function(t){return e.changeChannel(a.id)}}},[e._v(" "+e._s(a.channel_name)+" ")])})),1)],1),t("div",{staticClass:"account-settings-info-right"},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[e._l(e.formData,(function(a,r){return t("form-item",{key:a.name+"_"+e.current_channelid,attrs:{title:a.title,name:a.name,type:a.type,required:a.required,value:a.value,tips:a.tips,url:a.url,max:a.max,min:a.min,rows:a.rows,placeholder:a.placeholder,selectArray:a.selectArray},on:{uploadChange:e.uploadChange}})})),t("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")])],1)],2)],1)])])],1)},l=[],n=t("5530"),i=(t("b0c0"),t("a9e3"),t("ac0d")),s=t("19bb"),o=t("c6fe"),u=t("85f8"),d={components:{FormItem:s["a"]},mixins:[i["c"]],props:{code:{type:String,default:""},env:{type:String,default:""},isSystem:{type:String,default:""}},data:function(){return{form:this.$form.createForm(this),formData:[],channels:[],selectedKeys:[1],openKeys:[],current_channelid:0}},methods:{uploadChange:function(e){console.log("-------------success",e);var a=e.name,t="";if(e.value.length){var r=e.value[0];t=r.response.data}this.form.getFieldDecorator(a,{initialValue:t})},getChannel:function(e){var a=this,t=o["a"].getChannels;0==this.isSystem&&(t=u["a"].getChannels),e&&this.request(t,{code:this.code,env:e}).then((function(e){a.selectedKeys=[],a.channels=e.channels,a.selectedKeys.push(Number(e.default_channel)),a.getChannelInfo(e.default_channel)}))},getChannelInfo:function(e){var a=this,t=o["a"].getChannelInfo;0==this.isSystem&&(t=u["a"].getChannelInfo),this.current_channelid=e,this.request(t,{channel_id:e}).then((function(e){a.formData=e}))},changeChannel:function(e){this.selectedKeys=[],this.selectedKeys.push(Number(e)),this.getChannelInfo(e)},handleSubmit:function(e){var a=this,t=o["a"].setChannelParams;0==this.isSystem&&(t=u["a"].setChannelParams),e.preventDefault(),this.form.validateFields((function(e,r){if(!e){var l=Object(n["a"])({},r);a.request(t,{channel_id:a.current_channelid,formData:l},"post",(function(e){a.$message.success(e)})).then((function(e,a){console.log(e),console.log(a)}))}}))}},mounted:function(){this.getChannel(this.env)},watch:{env:{handler:function(e){console.log(e),this.getChannel(e)}}}},c=d,m=(t("06c3"),t("0c7c")),p=Object(m["a"])(c,r,l,!1,null,"7df8037e",null);a["default"]=p.exports},2909:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t("6b75");function l(e){if(Array.isArray(e))return Object(r["a"])(e)}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0"),t("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var i=t("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return l(e)||n(e)||Object(i["a"])(e)||s()}},"85f8":function(e,a,t){"use strict";var r={getPayTypes:"/pay/merchant.pay/getPayTypes",getPayTypeInfo:"/pay/merchant.pay/getPayTypeInfo",getChannels:"/pay/merchant.pay/getChannels",getChannelInfo:"/pay/merchant.pay/getChannelInfo",setChannelParams:"/pay/merchant.pay/setChannelParams"};a["a"]=r},9003:function(e,a,t){},c6fe:function(e,a,t){"use strict";var r={getPayTypes:"/pay/platform.pay/getPayTypes",getPayTypeInfo:"/pay/platform.pay/getPayTypeInfo",getChannels:"/pay/platform.pay/getChannels",getChannelInfo:"/pay/platform.pay/getChannelInfo",setChannelParams:"/pay/platform.pay/setChannelParams"};a["a"]=r},d7d1:function(e,a,t){}}]);