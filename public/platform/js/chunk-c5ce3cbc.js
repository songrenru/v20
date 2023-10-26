(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5ce3cbc","chunk-2d0b3786"],{"19bb":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",["text"==e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[e.number?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,staticStyle:{width:"100%"},attrs:{precision:e.digits?0:e.precision,min:e.min,max:e.max,name:e.name,disabled:e.disabled,placeholder:e.placeholder}}):e.url?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{type:"url",message:"请输入正确的url地址"},{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value,\n              rules: [\n                {\n                  type: 'url',\n                  message: '请输入正确的url地址',\n                },\n                { required: required, message: requiredMessage },\n              ],\n            },\n          ]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}}):t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{disabled:e.disabled,"max-length":e.maxlength,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"textarea"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{rows:e.rows,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"switch"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:22}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:"1"==e.value,valuePropName:"checked"}],expression:"[name, { initialValue: value == '1' ? true : false, valuePropName: 'checked' }]"}],key:e.name,attrs:{"checked-children":e.switchCheckedText,"un-checked-children":e.switchUncheckedText}})],1)],1)],1):e._e(),"radio"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,options:e.selectArray}})],1)],1)],1):e._e(),"select"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"selectAll"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{mode:"multiple",name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"time"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.timeFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, timeFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name,format:e.timeFormat}})],1)],1)],1):e._e(),"date"===e.type?t("a-form-item",{attrs:{format:e.dateFormat,label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.dateFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, dateFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name}})],1)],1)],1):e._e(),"file"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/common/common.UploadFile/uploadFile?upload_dir=file&fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange,preview:e.handlePreview}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传文件 ")],1)],1)],1)],1)],1):e._e(),"image"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{attrs:{name:"img",action:"/v20/public/index.php/common/platform.system.config/upload?fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传图片 ")],1)],1)],1)],1)],1):e._e()],1)},i=[],l=t("2909"),o=(t("a9e3"),t("b0c0"),t("fb6a"),t("d81d"),t("ac1f"),t("1276"),t("caad"),t("2532"),t("c1df")),n=t.n(o),s=t("7a6b");function u(e,a){var t=new FileReader;t.addEventListener("load",(function(){return a(t.result)})),t.readAsDataURL(e)}var d={name:"FormItem",components:{CustomTooltip:s["a"]},props:{labelCol:{type:Object,default:function(){return{lg:{span:6},sm:{span:7}}}},wrapperCol:{type:Object,default:function(){return{lg:{span:14},sm:{span:17}}}},title:{type:String,default:"标题"},name:{type:String,default:"name"},required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"此项必填"},tips:{type:String,default:""},type:{type:String,default:"text"},number:{type:Boolean,default:!1},digits:{type:Boolean,default:!1},precision:{type:Number,default:2},url:{type:Boolean,default:!1},max:{type:[Number,String]},min:{type:[Number,String]},maxlength:{type:[Number,String],default:21e3},selectArray:{type:Array,default:function(){return[]}},rows:{type:Number,default:4},placeholder:{type:String,default:""},value:{type:[Object,String,Array,Boolean,Number],default:null},tipsSize:{type:String,default:"18px"},tipsColor:{type:String,default:"#c5c5c5"},disabled:{type:Boolean,default:!1},fileUploadUrl:{type:String,default:""},imgUploadUrl:{type:String,default:""},switchCheckedText:{type:String,default:"开启"},switchUncheckedText:{type:String,default:"关闭"},filetype:{type:String,default:""},fsize:{type:[Number,String],default:0}},data:function(){return{timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD",headers:{authorization:"authorization-text"},loading:!1,imageUrl:"",fileList:[],uploadFileRet:!0}},mounted:function(){this.uploadFileRet=!0,"image"!=this.type&&"file"!=this.type||(console.log("----------------",this.type,this.name,this.value),this.value&&(this.fileList=[{uid:"1",name:this.value,status:"done",url:this.value}]))},watch:{fileList:function(e){this.$emit("uploadChange",{name:this.name,type:this.type,value:e})}},methods:{moment:n.a,handleChange:function(e){var a=this,t=Object(l["a"])(e.fileList);console.log("fileList",t),t=t.slice(-1);t=t.map((function(e){return e.response&&(a.uploadFileRet=!0,1e3==e.response.status?(e.url=e.response.data,!0):(e.name=a.value,e.url=a.value,a.$message.error(e.response.msg))),e})),this.uploadFileRet?this.fileList=t:this.fileList=[]},handlePreview:function(e){return!1},beforeUploadFile:function(e){console.log("file",e),console.log("filetype",this.filetype);var a=e.type.toLowerCase(),t=a.split("/");this.uploadFileRet=!0;var r=["mpeg","x-mpeg","mp3","x-mpeg-3","mpg","x-mp3","mpeg3","x-mpeg3","x-mpg","x-mpegaudio"];if(this.filetype&&this.filetype.length>0){if("mp3"==this.filetype&&!r.includes(t["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1;if("mp3"!=this.filetype&&!this.filetype.includes(t["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1}console.log("fsize",this.fsize);var i=e.size/1024/1024,l=0;return this.fsize&&(l=1*this.fsize),!(l>0&&i>l)||(this.uploadFileRet=!1,this.$message.error("上传图片最大支持"+l+"MB!"),!1)},normFile:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?e.file.response.data:void this.$message.error("上传失败！")},imgFile:function(e){var a=this;return console.log("Upload event:",e),u(e.file.originFileObj,(function(e){a.imageUrl=e})),"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?(this.fileList=[e.file.response.data],console.log(22222,this.fileList),this.fileList):void this.$message.error("上传失败！")}}},m=d,c=(t("e3b1"),t("2877")),p=Object(c["a"])(m,r,i,!1,null,"1fb4675a",null);a["a"]=p.exports},2909:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t("6b75");function i(e){if(Array.isArray(e))return Object(r["a"])(e)}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0"),t("a630");function l(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=t("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return i(e)||l(e)||Object(o["a"])(e)||n()}},"563e":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"color-picker"},[t("colorPicker",{staticClass:"color-box",on:{change:e.headleChangeColor},model:{value:e.colorInfo,callback:function(a){e.colorInfo=a},expression:"colorInfo"}}),t("p",{staticClass:"color-name"},[e._v(e._s(e.colorInfo))])],1)},i=[],l={name:"CustomColorPicker",components:{},data:function(){return{colorInfo:""}},props:{color:{type:String,default:"#ffffff"},disabled:{type:Boolean,default:!1}},watch:{color:{handler:function(e){console.log(e),e&&this.$nextTick((function(){this.colorInfo=e}))},immediate:!0}},mounted:function(){this.colorInfo=this.color},methods:{headleChangeColor:function(e){this.$emit("update:color",e)}}},o=l,n=(t("7d1f0"),t("2877")),s=Object(n["a"])(o,r,i,!1,null,"0f1938e4",null);a["a"]=s.exports},"7d1f0":function(e,a,t){"use strict";t("8401")},8401:function(e,a,t){},"9a1b":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},e._l(e.configTab,(function(a){return t("div",{key:a.tab_id},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},e._l(a.list,(function(a){return t("div",{key:a.name},["richtext"==a.type?t("a-form-item",{attrs:{label:a.info,labelCol:e.labelCol,wrapperCol:e.wrapperCol,name:a.name}},[t("rich-text",{attrs:{info:a.value},on:{"update:info":function(t){return e.$set(a,"value",t)}}})],1):"mobile_head_color"==a.name?t("a-form-item",{attrs:{label:a.info,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("color-picker",{attrs:{color:a.value},on:{"update:color":function(t){return e.$set(a,"value",t)}}})],1):t("form-item",{key:a.gid,attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,title:a.info,name:a.name,type:a.type,required:Boolean(a.required),value:a.value,tips:a.desc,digits:!!a.digits,url:Boolean(a.url),max:a.max?1*a.max:99999999,min:a.min?1*a.min:0,number:!!a.isnumber,selectArray:a.typeValue,rows:Number(a.rows),placeholder:a.placeholder,filetype:a.filetype?a.filetype:"",fsize:a.fsize?1*a.fsize:0,maxlength:a.maxlength?1*a.maxlength:21e3},on:{uploadChange:e.uploadChange}})],1)})),0)],1)})),0)],1)],1)},i=[],l=t("5530"),o=(t("fb6a"),t("b0c0"),t("d3b7"),t("159b"),t("7db0"),t("af09")),n=t("19bb"),s=t("563e"),u=t("6ec16"),d=t("ca00"),m=void 0,c={name:"ConfigPlatform",components:{FormItem:n["a"],ColorPicker:s["a"],RichText:u["a"]},data:function(){return{form:this.$form.createForm(this),labelCol:{lg:{span:6},sm:{span:7}},wrapperCol:{lg:{span:14},sm:{span:17}},groupList:[],configTab:[],configList:[],gid:"",GLindex:0,confirmLoading:!1}},mounted:function(){m=this,-1!=this.$route.path.indexOf("gid")&&(this.gid=this.$route.path.slice(this.$route.path.indexOf("=")+1)),this.getData(this.gid)},watch:{$route:{handler:function(){-1!=this.$route.path.indexOf("gid")?this.gid=this.$route.path.slice(this.$route.path.indexOf("=")+1):this.gid="",this.getData(this.gid)}}},created:function(){},methods:{getData:function(e){var a=this;this.request(o["a"].configData,{gid:e},"get").then((function(e){console.log(e.config_list),a.groupList=e.group_list,a.configTab=e.config_list}))},uploadChange:function(e){var a=e.name,t="";if(e.value.length){var r=e.value[0];t=r.response&&r.response.data}this.form.getFieldDecorator(a,{initialValue:t})}}};window.dialogConfirm=function(){var e=m,a=e.form.validateFields;m.confirmLoading=!0,a((function(e,a){if(e)m.confirmLoading=!1;else{var t=Object(l["a"])({},a),r=["switch","date","time"];m.configTab.forEach((function(e){e.list.forEach((function(e){"richtext"==e["type"]&&(t[e.name]=e.value)}));var a=e.list.find((function(e){return"mobile_head_color"==e["name"]}));a&&(t.mobile_head_color=a.value),Object(d["p"])(e.list,t,r)})),console.log("Received values of form: ",t);var i=1;m.request(o["a"].configDataAmend,t).then((function(e){m.$message.success("编辑成功",i),setTimeout((function(){m.form=m.$form.createForm(m),m.getData(m.gid),m.confirmLoading=!1}),1500)})).catch((function(){m.confirmLoading=!1}))}}))},window.dialogCancel=function(){m.form=m.$form.createForm(m)};var p=c,f=t("2877"),g=Object(f["a"])(p,r,i,!1,null,null,null);a["default"]=g.exports},af09:function(e,a,t){"use strict";var r={config:"/common/platform.system.config/index",amendConfig:"/common/platform.system.config/amend",uploadConfig:"/common/platform.system.config/upload",configData:"/common/platform.system.configData/index",configDataAmend:"/common/platform.system.configData/amend"};a["a"]=r},d9fa:function(e,a,t){},e3b1:function(e,a,t){"use strict";t("d9fa")}}]);