(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01ba49bc","chunk-2d0b3786"],{"19bb":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",["text"==e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[e.number?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,staticStyle:{width:"100%"},attrs:{precision:e.digits?0:e.precision,min:e.min,max:e.max,name:e.name,disabled:e.disabled,placeholder:e.placeholder}}):e.url?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{type:"url",message:"请输入正确的url地址"},{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value,\n              rules: [\n                {\n                  type: 'url',\n                  message: '请输入正确的url地址',\n                },\n                { required: required, message: requiredMessage },\n              ],\n            },\n          ]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}}):t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{disabled:e.disabled,"max-length":e.maxlength,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"textarea"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{rows:e.rows,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"switch"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:22}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:"1"==e.value,valuePropName:"checked"}],expression:"[name, { initialValue: value == '1' ? true : false, valuePropName: 'checked' }]"}],key:e.name,attrs:{"checked-children":e.switchCheckedText,"un-checked-children":e.switchUncheckedText}})],1)],1)],1):e._e(),"radio"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,options:e.selectArray}})],1)],1)],1):e._e(),"select"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"selectAll"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{mode:"multiple",name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"time"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.timeFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, timeFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name,format:e.timeFormat}})],1)],1)],1):e._e(),"date"===e.type?t("a-form-item",{attrs:{format:e.dateFormat,label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.dateFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, dateFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name}})],1)],1)],1):e._e(),"file"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/common/common.UploadFile/uploadFile?upload_dir=file&fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange,preview:e.handlePreview}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传文件 ")],1)],1)],1)],1)],1):e._e(),"image"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{attrs:{name:"img",action:"/v20/public/index.php/common/platform.system.config/upload?fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传图片 ")],1)],1)],1)],1)],1):e._e()],1)},l=[],i=t("2909"),o=(t("a9e3"),t("b0c0"),t("fb6a"),t("d81d"),t("ac1f"),t("1276"),t("caad"),t("2532"),t("c1df")),n=t.n(o),s=t("7a6b");function u(e,a){var t=new FileReader;t.addEventListener("load",(function(){return a(t.result)})),t.readAsDataURL(e)}var d={name:"FormItem",components:{CustomTooltip:s["a"]},props:{labelCol:{type:Object,default:function(){return{lg:{span:6},sm:{span:7}}}},wrapperCol:{type:Object,default:function(){return{lg:{span:14},sm:{span:17}}}},title:{type:String,default:"标题"},name:{type:String,default:"name"},required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"此项必填"},tips:{type:String,default:""},type:{type:String,default:"text"},number:{type:Boolean,default:!1},digits:{type:Boolean,default:!1},precision:{type:Number,default:2},url:{type:Boolean,default:!1},max:{type:[Number,String]},min:{type:[Number,String]},maxlength:{type:[Number,String],default:21e3},selectArray:{type:Array,default:function(){return[]}},rows:{type:Number,default:4},placeholder:{type:String,default:""},value:{type:[Object,String,Array,Boolean,Number],default:null},tipsSize:{type:String,default:"18px"},tipsColor:{type:String,default:"#c5c5c5"},disabled:{type:Boolean,default:!1},fileUploadUrl:{type:String,default:""},imgUploadUrl:{type:String,default:""},switchCheckedText:{type:String,default:"开启"},switchUncheckedText:{type:String,default:"关闭"},filetype:{type:String,default:""},fsize:{type:[Number,String],default:0}},data:function(){return{timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD",headers:{authorization:"authorization-text"},loading:!1,imageUrl:"",fileList:[],uploadFileRet:!0}},mounted:function(){this.uploadFileRet=!0,"image"!=this.type&&"file"!=this.type||this.value&&(this.fileList=[{uid:"1",name:this.value,status:"done",url:this.value}])},watch:{fileList:function(e){this.$emit("uploadChange",{name:this.name,type:this.type,value:e})}},methods:{moment:n.a,handleChange:function(e){var a=this,t=Object(i["a"])(e.fileList);t=t.slice(-1);t=t.map((function(e){return e.response&&(a.uploadFileRet=!0,1e3==e.response.status?(e.url=e.response.data,!0):(e.name=a.value,e.url=a.value,a.$message.error(e.response.msg))),e})),this.uploadFileRet?this.fileList=t:this.fileList=[]},handlePreview:function(e){return!1},beforeUploadFile:function(e){var a=e.type.toLowerCase(),t=a.split("/");this.uploadFileRet=!0;var r=["mpeg","x-mpeg","mp3","x-mpeg-3","mpg","x-mp3","mpeg3","x-mpeg3","x-mpg","x-mpegaudio"];if(this.filetype&&this.filetype.length>0){if("mp3"==this.filetype&&!r.includes(t["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1;if("mp3"!=this.filetype&&!this.filetype.includes(t["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1}var l=e.size/1024/1024,i=0;return this.fsize&&(i=1*this.fsize),!(i>0&&l>i)||(this.uploadFileRet=!1,this.$message.error("上传图片最大支持"+i+"MB!"),!1)},normFile:function(e){return Array.isArray(e)?e:"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?e.file.response.data:void this.$message.error("上传失败！")},imgFile:function(e){var a=this;return u(e.file.originFileObj,(function(e){a.imageUrl=e})),"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?(this.fileList=[e.file.response.data],this.fileList):void this.$message.error("上传失败！")}}},m=d,c=(t("d991"),t("2877")),p=Object(c["a"])(m,r,l,!1,null,"3b079c27",null);a["a"]=p.exports},2909:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t("6b75");function l(e){if(Array.isArray(e))return Object(r["a"])(e)}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0"),t("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=t("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return l(e)||i(e)||Object(o["a"])(e)||n()}},"3e3b":function(e,a,t){"use strict";t("c71f")},5431:function(e,a,t){},7659:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{on:{click:e.mobileColor}},[t("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[t("a-tabs",{attrs:{"default-active-key":0},on:{change:e.firstTabChange}},e._l(e.groupList,(function(a,r){return t("a-tab-pane",{key:r,attrs:{tab:a.gname}},[t("a-tabs",{attrs:{type:"card"},on:{change:e.secondTabChange}},e._l(e.configTab,(function(a){return t("a-tab-pane",{key:a.tab_id,attrs:{tab:a.name}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},["marketing_service"==a.tab_id?t("div",{staticStyle:{"font-size":"18px",color:"#000",margin:"30px 0 40px 212px"}},[e._v("申请业务经理资格设置")]):e._e(),"marketing_agent"==a.tab_id?t("div",{staticStyle:{"font-size":"18px",color:"#000",margin:"30px 0 40px 212px"}},[e._v("申请区域代理资格设置")]):e._e(),e._l(a.list,(function(a,r){return"mobile_head_floor_color"!==a.name&&"mobile_head_affect"!==a.name||("mobile_head_floor_color"===a.name&&e.mobileEffect||"mobile_head_affect"===a.name)&&e.huizhisq?t("div",{key:a.name},["richtext"==a.type?t("a-form-item",{attrs:{label:a.info,labelCol:e.labelCol,wrapperCol:e.wrapperCol,name:a.name}},[t("rich-text",{attrs:{info:a.value},on:{"update:info":function(t){return e.$set(a,"value",t)}}})],1):"mobile_head_color"===a.name?t("a-form-item",{attrs:{label:a.info,labelCol:e.labelCol,wrapperCol:e.wrapperCol,name:a.name}},[t("div",{staticClass:"color-picker"},[t("colorPicker",{ref:"mobileHeadInfo",refInFor:!0,staticClass:"color-box",on:{change:e.headleHeadChangeColor},model:{value:e.colorHeadInfo,callback:function(a){e.colorHeadInfo=a},expression:"colorHeadInfo"}}),t("p",{staticClass:"color-name"},[e._v(e._s(e.colorHeadInfo))])],1)]):"mobile_head_floor_color"===a.name?t("a-form-item",{attrs:{label:a.info,labelCol:e.labelCol,wrapperCol:e.wrapperCol,name:a.name}},[t("div",{staticClass:"color-picker"},[t("colorPicker",{ref:"mobileFloorInfo",refInFor:!0,staticClass:"color-box",on:{change:e.headleFloorChangeColor},model:{value:e.colorFloorInfo,callback:function(a){e.colorFloorInfo=a},expression:"colorFloorInfo"}}),t("p",{staticClass:"color-name"},[e._v(e._s(e.colorFloorInfo))])],1)]):"mobile_head_affect"===a.name?t("a-form-item",{attrs:{label:a.info,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:a.desc}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.name,{initialValue:a.value}],expression:"[itemv.name, { initialValue: itemv.value }]"}],key:a.name,attrs:{name:a.name,options:a.typeValue},on:{change:e.effectChange}})],1)],1)],1):t("form-item",{key:a.gid,attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,title:a.info,name:a.name,type:a.type,required:Boolean(a.required),value:a.value,tips:a.desc,digits:!!a.digits,url:Boolean(a.url),max:a.max?1*a.max:99999999,min:a.min?1*a.min:0,number:!!a.isnumber,selectArray:a.typeValue,rows:Number(a.rows),placeholder:a.placeholder,filetype:a.filetype?a.filetype:"",fsize:a.fsize?a.fsize:0,maxlength:a.maxlength?1*a.maxlength:21e3},on:{uploadChange:e.uploadChange}})],1):e._e()})),t("a-form-item",{staticStyle:{"text-align":"left"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")])],1)],2)],1)})),1)],1)})),1)],1)],1)},l=[],i=t("5530"),o=(t("fb6a"),t("b0c0"),t("d3b7"),t("159b"),t("af09")),n=t("19bb"),s=t("6ec16"),u=t("ca00"),d=t("a9f5"),m=t.n(d),c={name:"ConfigPlatform",components:{FormItem:n["a"],RichText:s["a"],vcolorpicker:m.a},data:function(){return{form:this.$form.createForm(this),labelCol:{lg:{span:6},sm:{span:7}},wrapperCol:{lg:{span:14},sm:{span:17}},groupList:[],configTab:[],configList:[],currentList:void 0,gid:"",GLindex:0,colorHeadInfo:"",colorFloorInfo:"",mobileEffect:!1,huizhisq:!1}},mounted:function(){-1!=this.$route.path.indexOf("gid")&&(this.gid=this.$route.path.slice(this.$route.path.indexOf("=")+1)),console.log(1111,this.gid),this.getData(this.gid)},watch:{$route:{handler:function(){-1!=this.$route.path.indexOf("gid")?this.gid=this.$route.path.slice(this.$route.path.indexOf("=")+1):this.gid="",(this.gid||this.$route.path.indexOf("platform.config")>-1)&&this.getData(this.gid)}}},created:function(){},methods:{firstTabChange:function(e){var a=this.groupList[e];this.GLindex=e,this.getTabData(a.gid)},secondTabChange:function(e){console.log(e)},getTabData:function(e){var a=this;this.request(o["a"].config,{gid:e},"get").then((function(e){a.configTab=e.config_list,a.mobileEffect=e.mobile_head_affect,a.huizhisq=e.huizhisq,a.colorHeadInfo=e.colorHeadInfo,a.colorFloorInfo=e.colorFloorInfo,a.form.getFieldDecorator("mobile_head_color",{initialValue:a.colorHeadInfo}),a.form.getFieldDecorator("mobile_head_floor_color",{initialValue:a.colorFloorInfo})}))},getData:function(e){var a=this;this.request(o["a"].config,{gid:e},"get").then((function(e){console.log(e.config_list),a.groupList=e.group_list,a.configTab=e.config_list,a.mobileEffect=e.mobile_head_affect,a.huizhisq=e.huizhisq,a.colorHeadInfo=e.colorHeadInfo,a.colorFloorInfo=e.colorFloorInfo,a.form.getFieldDecorator("mobile_head_color",{initialValue:a.colorHeadInfo}),a.form.getFieldDecorator("mobile_head_floor_color",{initialValue:a.colorFloorInfo})}))},uploadChange:function(e){console.log("-------------success",e);var a=e.name,t="";if(e.value.length){var r=e.value[0];t=r.response&&r.response.data}this.form.getFieldDecorator(a,{initialValue:t})},handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFields((function(e,t){if(!e){var r=Object(i["a"])({},t);console.log("formData ===============",r);var l=["switch","date","time"];a.configTab.forEach((function(e){e.list.forEach((function(e){"richtext"==e["type"]&&(r[e.name]=e.value)})),Object(u["q"])(e.list,r,l)})),console.log("Received values of form: ",r);var n=1;a.$message.loading({content:"正在提交...",duration:0,key:n}),a.request(o["a"].amendConfig,r).then((function(e){var t=a.groupList[a.GLindex];a.getTabData(t.gid),a.$message.success({content:e.msg,key:n})})).catch((function(){a.$message.destroy()}))}}))},effectChange:function(e){"1"===e.target.value?this.mobileEffect=!1:this.mobileEffect=!0},headleHeadChangeColor:function(e){this.colorHeadInfo=e,this.form.setFieldsValue({mobile_head_color:e})},headleFloorChangeColor:function(e){this.colorFloorInfo=e,this.form.setFieldsValue({mobile_head_floor_color:e})},mobileColor:function(){this.$refs.mobileHeadInfo[0].openStatus=!1,this.$refs.mobileFloorInfo[0].openStatus=!1}}},p=c,f=(t("3e3b"),t("2877")),g=Object(f["a"])(p,r,l,!1,null,"3f377444",null);a["default"]=g.exports},af09:function(e,a,t){"use strict";var r={config:"/common/platform.system.config/index",amendConfig:"/common/platform.system.config/amend",uploadConfig:"/common/platform.system.config/upload",configData:"/common/platform.system.configData/index",configDataAmend:"/common/platform.system.configData/amend"};a["a"]=r},c71f:function(e,a,t){},d991:function(e,a,t){"use strict";t("5431")}}]);