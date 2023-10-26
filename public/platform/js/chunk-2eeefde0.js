(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eeefde0","chunk-2d0b3786"],{"19bb":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",["text"==e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[e.number?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,staticStyle:{width:"100%"},attrs:{precision:e.digits?0:e.precision,min:e.min,max:e.max,name:e.name,disabled:e.disabled,placeholder:e.placeholder}}):e.url?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{type:"url",message:"请输入正确的url地址"},{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value,\n              rules: [\n                {\n                  type: 'url',\n                  message: '请输入正确的url地址',\n                },\n                { required: required, message: requiredMessage },\n              ],\n            },\n          ]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}}):t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{disabled:e.disabled,"max-length":e.maxlength,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"textarea"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{rows:e.rows,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"switch"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:22}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:"1"==e.value,valuePropName:"checked"}],expression:"[name, { initialValue: value == '1' ? true : false, valuePropName: 'checked' }]"}],key:e.name,attrs:{"checked-children":e.switchCheckedText,"un-checked-children":e.switchUncheckedText}})],1)],1)],1):e._e(),"radio"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,options:e.selectArray}})],1)],1)],1):e._e(),"select"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"selectAll"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{mode:"multiple",name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"time"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.timeFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, timeFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name,format:e.timeFormat}})],1)],1)],1):e._e(),"date"===e.type?t("a-form-item",{attrs:{format:e.dateFormat,label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.dateFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, dateFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name}})],1)],1)],1):e._e(),"file"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/common/common.UploadFile/uploadFile?upload_dir=file&fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange,preview:e.handlePreview}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传文件 ")],1)],1)],1)],1)],1):e._e(),"image"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{attrs:{name:"img",action:"/v20/public/index.php/common/platform.system.config/upload?fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传图片 ")],1)],1)],1)],1)],1):e._e()],1)},o=[],i=t("2909"),l=(t("a9e3"),t("b0c0"),t("fb6a"),t("d81d"),t("ac1f"),t("1276"),t("caad"),t("2532"),t("c1df")),s=t.n(l),n=t("7a6b");function d(e,a){var t=new FileReader;t.addEventListener("load",(function(){return a(t.result)})),t.readAsDataURL(e)}var u={name:"FormItem",components:{CustomTooltip:n["a"]},props:{labelCol:{type:Object,default:function(){return{lg:{span:6},sm:{span:7}}}},wrapperCol:{type:Object,default:function(){return{lg:{span:14},sm:{span:17}}}},title:{type:String,default:"标题"},name:{type:String,default:"name"},required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"此项必填"},tips:{type:String,default:""},type:{type:String,default:"text"},number:{type:Boolean,default:!1},digits:{type:Boolean,default:!1},precision:{type:Number,default:2},url:{type:Boolean,default:!1},max:{type:[Number,String]},min:{type:[Number,String]},maxlength:{type:[Number,String],default:21e3},selectArray:{type:Array,default:function(){return[]}},rows:{type:Number,default:4},placeholder:{type:String,default:""},value:{type:[Object,String,Array,Boolean,Number],default:null},tipsSize:{type:String,default:"18px"},tipsColor:{type:String,default:"#c5c5c5"},disabled:{type:Boolean,default:!1},fileUploadUrl:{type:String,default:""},imgUploadUrl:{type:String,default:""},switchCheckedText:{type:String,default:"开启"},switchUncheckedText:{type:String,default:"关闭"},filetype:{type:String,default:""},fsize:{type:[Number,String],default:0}},data:function(){return{timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD",headers:{authorization:"authorization-text"},loading:!1,imageUrl:"",fileList:[],uploadFileRet:!0}},mounted:function(){this.uploadFileRet=!0,"image"!=this.type&&"file"!=this.type||(console.log("----------------",this.type,this.name,this.value),this.value&&(this.fileList=[{uid:"1",name:this.value,status:"done",url:this.value}]))},watch:{fileList:function(e){this.$emit("uploadChange",{name:this.name,type:this.type,value:e})}},methods:{moment:s.a,handleChange:function(e){var a=this,t=Object(i["a"])(e.fileList);console.log("fileList",t),t=t.slice(-1);t=t.map((function(e){return e.response&&(a.uploadFileRet=!0,1e3==e.response.status?(e.url=e.response.data,!0):(e.name=a.value,e.url=a.value,a.$message.error(e.response.msg))),e})),this.uploadFileRet?this.fileList=t:this.fileList=[]},handlePreview:function(e){return!1},beforeUploadFile:function(e){console.log("file",e),console.log("filetype",this.filetype);var a=e.type.toLowerCase(),t=a.split("/");this.uploadFileRet=!0;var r=["mpeg","x-mpeg","mp3","x-mpeg-3","mpg","x-mp3","mpeg3","x-mpeg3","x-mpg","x-mpegaudio"];if(this.filetype&&this.filetype.length>0){if("mp3"==this.filetype&&!r.includes(t["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1;if("mp3"!=this.filetype&&!this.filetype.includes(t["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1}console.log("fsize",this.fsize);var o=e.size/1024/1024,i=0;return this.fsize&&(i=1*this.fsize),!(i>0&&o>i)||(this.uploadFileRet=!1,this.$message.error("上传图片最大支持"+i+"MB!"),!1)},normFile:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?e.file.response.data:void this.$message.error("上传失败！")},imgFile:function(e){var a=this;return console.log("Upload event:",e),d(e.file.originFileObj,(function(e){a.imageUrl=e})),"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?(this.fileList=[e.file.response.data],console.log(22222,this.fileList),this.fileList):void this.$message.error("上传失败！")}}},c=u,p=(t("e3b1"),t("2877")),m=Object(p["a"])(c,r,o,!1,null,"1fb4675a",null);a["a"]=m.exports},2909:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t("6b75");function o(e){if(Array.isArray(e))return Object(r["a"])(e)}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0"),t("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var l=t("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return o(e)||i(e)||Object(l["a"])(e)||s()}},"2fe3":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[e.ajaxData?t("a-form",{attrs:{form:e.form,"label-col":{span:4},"wrapper-col":{span:10}},on:{submit:e.handleSubmit}},[t("a-card",{attrs:{title:e.L("基本信息"),bordered:!1}},[t("a-form-item",{attrs:{label:e.L("店铺名称")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.ajaxData.name}],expression:"['name', { initialValue: ajaxData.name }]"}],attrs:{disabled:""}})],1),t("a-form-item",{attrs:{label:e.L("店铺图片"),help:e.L("读取店铺列表 商家图片的第一张图片作为餐饮店铺logo图使用，如需修改可在店铺管理--店铺描述里修改")}},[t("img",{staticStyle:{height:"70px",border:"1px solid #ddd"},attrs:{src:e.ajaxData.logo}})]),t("a-form-item",{attrs:{label:e.L("店铺公告")}},[t("template",{slot:"help"},[t("div",[e._v("1. "+e._s(e.L("用于前台店铺菜单页展示公告信息")))]),t("div",[e._v(" 2. "+e._s(e.L("介绍中不得含有虚假的、冒充、利用他人名义的、容易构成法律、法规和政策禁止的内容，公告字符数建议4-120个"))+" ")])]),t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["store_notice",{initialValue:e.ajaxData.store_notice}],expression:"['store_notice', { initialValue: ajaxData.store_notice }]"}],attrs:{rows:4}})],2)],1),t("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:e.L("服务信息"),bordered:!1}},[t("a-form-item",{attrs:{label:e.L("是否开启在线预订")}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_book",{initialValue:1==e.ajaxData.is_book,valuePropName:"checked"}],expression:"['is_book', { initialValue: ajaxData.is_book == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":e.L("开启"),"un-checked-children":e.L("关闭")},on:{change:e.switchBookType}})],1),e.is_book?[t("a-form-item",{attrs:{label:e.L("预订方式")}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["book_type",{initialValue:e.ajaxData.book_type}],expression:"['book_type', { initialValue: ajaxData.book_type }]"}],on:{change:e.changeBookType}},[t("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("提前选桌")))]),t("a-radio",{attrs:{value:2}},[e._v(e._s(e.L("提前选菜")))])],1)],1),e.book_table_show?[t("a-form-item",{attrs:{label:e.L("预订时间")}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["book_start",{initialValue:""==e.ajaxData.book_start?null:e.moment(e.ajaxData.book_start,"HH:mm"),rules:[{required:!0,message:e.L("请选择预定时间~")}]}],expression:"[\n                'book_start',\n                {\n                  initialValue: ajaxData.book_start == '' ? null : moment(ajaxData.book_start, 'HH:mm'),\n                  rules: [{ required: true, message: L('请选择预定时间~') }],\n                },\n              ]"}],attrs:{format:"HH:mm",placeholder:e.L("开始时间")}}),t("span",{staticClass:"ml-10 mr-10"},[e._v(e._s(e.L("至")))]),t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["book_stop",{initialValue:""==e.ajaxData.book_stop?null:e.moment(e.ajaxData.book_stop,"HH:mm")}],expression:"[\n                'book_stop',\n                { initialValue: ajaxData.book_stop == '' ? null : moment(ajaxData.book_stop, 'HH:mm') },\n              ]"}],attrs:{format:"HH:mm",placeholder:e.L("结束时间")}})],1),t("a-form-item",{attrs:{label:e.L("预订间隔时长"),help:e.L("两个可预订时间之间相隔的时长")}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["book_time",{initialValue:e.ajaxData.book_time,rules:[{required:!0,message:e.L("请填写预定间隔时长~")}]}],expression:"[\n                'book_time',\n                { initialValue: ajaxData.book_time, rules: [{ required: true, message: L('请填写预定间隔时长~') }] },\n              ]"}]}),t("span",{staticClass:"ml-10"},[e._v(e._s(e.L("分钟")))])],1),t("a-form-item",{attrs:{label:e.L("可提前几天预订下单")}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["book_day",{initialValue:e.ajaxData.book_day,rules:[{required:!0,message:e.L("请填写可提前几天预订下单~")}]}],expression:"[\n                'book_day',\n                {\n                  initialValue: ajaxData.book_day,\n                  rules: [{ required: true, message: L('请填写可提前几天预订下单~') }],\n                },\n              ]"}],attrs:{min:1,max:100}}),t("span",{staticClass:"ml-10"},[e._v("天")])],1),t("a-form-item",{attrs:{label:e.L("定金取消时长"),help:e.L("至少提前多久取消订单才可退订金")}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["cancel_time",{initialValue:e.ajaxData.cancel_time,rules:[{required:!0,message:e.L("请填写定金取消时长~")}]}],expression:"[\n                'cancel_time',\n                {\n                  initialValue: ajaxData.cancel_time,\n                  rules: [{ required: true, message: L('请填写定金取消时长~') }],\n                },\n              ]"}],attrs:{min:0}}),t("span",{staticClass:"ml-10"},[e._v(e._s(e.L("分钟")))])],1)]:e._e()]:e._e(),t("a-form-item",{attrs:{label:e.L("是否开启扫码落座"),help:e.L("即是否支持用户到店后自己主动扫桌台码/通用码落座桌台位置；设置不开启，则只支持店员手动帮助用户落座；建议开启前，请先下载桌台/通用二维码")}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["take_seat_by_scan",{initialValue:"1"==e.ajaxData.take_seat_by_scan,valuePropName:"checked"}],expression:"[\n            'take_seat_by_scan',\n            { initialValue: ajaxData.take_seat_by_scan == '1' ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":e.L("开启"),"un-checked-children":e.L("关闭")}})],1),t("a-form-item",{attrs:{label:e.L("结算方式")}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["settle_accounts_type",{initialValue:e.ajaxData.settle_accounts_type}],expression:"['settle_accounts_type', { initialValue: ajaxData.settle_accounts_type }]"}],on:{change:e.changeSettlementType}},[t("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("先吃后付")))]),t("a-radio",{attrs:{value:2}},[e._v(e._s(e.L("先付后吃")))])],1)],1),2==e.settle_accounts_type?t("a-form-item",{attrs:{label:e.L("就餐方式"),help:e.L("该配置只对用户端的【扫通用码且先付后吃】模式下生效")}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["dining_type",{initialValue:e.ajaxData.dining_type}],expression:"['dining_type', { initialValue: ajaxData.dining_type }]"}]},[t("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("堂食")))]),t("a-radio",{attrs:{value:2}},[e._v(e._s(e.L("自取")))]),t("a-radio",{attrs:{value:3}},[e._v(e._s(e.L("自取or堂食")))])],1)],1):e._e(),t("a-form-item",{attrs:{label:e.L("拼桌方式"),help:e.L("拼桌方式只针对于有桌台号的订单生效")}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["share_table_type",{initialValue:e.ajaxData.share_table_type}],expression:"['share_table_type', { initialValue: ajaxData.share_table_type }]"}]},[t("a-radio",{attrs:{value:2}},[e._v(e._s(e.L("拼桌")))]),t("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("多人点餐")))]),t("a-radio",{attrs:{value:3}},[e._v(e._s(e.L("一桌一单(关闭多人的点餐)")))])],1)],1),t("a-form-item",{attrs:{label:e.L("是否开启在线支付"),help:e.L("即是否支持用户自己主动在线结算订单；设置不支持，则用户只可联系店员在柜台结算；该配置只对用户端的【先吃后付】模式下生效")}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["open_online_pay",{initialValue:1==e.ajaxData.open_online_pay,valuePropName:"checked"}],expression:"[\n            'open_online_pay',\n            { initialValue: ajaxData.open_online_pay == 1 ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":e.L("开启"),"un-checked-children":e.L("关闭")}})],1),t("a-form-item",{attrs:{label:e.L("人均消费")}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["mean_money",{initialValue:e.ajaxData.mean_money}],expression:"['mean_money', { initialValue: ajaxData.mean_money }]"}],attrs:{min:0,formatter:function(a){return e.L("￥")+" "+a}}})],1),t("a-form-item",{attrs:{label:e.L("店铺所属分类"),required:""}},[t("a-tree-select",{staticStyle:{width:"100%"},attrs:{"show-search":"",value:e.cate_value,"tree-checkable":"","show-checked-strategy":"SHOW_PARENT","dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:e.L("请选择分类"),"allow-clear":"",multiple:"","tree-default-expand-all":""},on:{change:e.onChange,search:e.onSearch,select:e.onSelect}},e._l(e.categoryTreeData,(function(a){return t("a-tree-select-node",{key:a.key,attrs:{value:a.value,title:a.title,disabled:!0}},e._l(a.category_list,(function(e){return t("a-tree-select-node",{key:e.key,attrs:{value:e.value,title:e.title}})})),1)})),1)],1)],2),t("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:e.L("排号信息"),bordered:!1}},[t("a-form-item",{attrs:{label:e.L("是否开启在线排号")}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["queue_is_open",{initialValue:1==e.ajaxData.queue_is_open,valuePropName:"checked"}],expression:"[\n            'queue_is_open',\n            { initialValue: ajaxData.queue_is_open == 1 ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":e.L("开启"),"un-checked-children":e.L("关闭")}})],1),t("a-form-item",{attrs:{label:e.L("叫号模板配置"),help:e.L("排号号码用{$a}表示")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["queue_content",{initialValue:e.ajaxData.queue_content}],expression:"['queue_content', { initialValue: ajaxData.queue_content }]"}]})],1)],1),t("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:e.L("打印配置"),bordered:!1}},[t("a-form-item",{attrs:{label:e.L("是否开启分单打印")}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["print_type",{initialValue:1==e.ajaxData.print_type,valuePropName:"checked"}],expression:"[\n            'print_type',\n            { initialValue: ajaxData.print_type == 1 ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":e.L("开启"),"un-checked-children":e.L("关闭")}})],1)],1),t("a-form-item",{staticClass:"text-left",staticStyle:{margin:"20px 0"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v(e._s(e.L("提交")))])],1)],1):e._e()],1)},o=[],i=t("19bb"),l=(t("ca00"),t("6ea1")),s=t("c1df"),n=t.n(s),d={name:"ShopForm",components:{FormItem:i["a"]},data:function(){return{queryParam:{},ajaxData:null,store_name:"",is_book:!1,book_type:1,book_start:"00:00:00",book_stop:"00:00:00",book_time:0,book_day:0,cancel_time:60,take_seat_by_scan:!1,settle_accounts_type:1,dining_type:1,share_table_type:1,open_online_pay:!1,mean_money:0,queue_is_open:0,queue_content:"",print_type:0,categoryTreeData:[],cate_value:[],value:1,form:null,book_table_show:!0}},watch:{$route:function(){"/merchant/merchant.foodshop/shopEdit"==this.$route.path&&void 0!=this.$route.query.store_id&&(this.ajaxData=this.$options.data().ajaxData,this.getData())}},mounted:function(){this.form=this.$form.createForm(this),this.getData()},methods:{moment:n.a,handleOpenChange:function(e){this.book_start=e},handleClose:function(){this.book_start=!1,this.book_stop=!1},getData:function(){var e=this;void 0!=this.$route.query.store_id?this.queryParam["store_id"]=this.$route.query.store_id:this.queryParam["store_id"]=0,this.request(l["a"].getShopDetail,this.queryParam).then((function(a){e.ajaxData=a,e.categoryTreeData=a.category,e.cate_value=a.current_cate,e.is_book=1==a.is_book,console.log(e.is_book),e.form.setFieldsValue({is_book:e.is_book,settle_accounts_type:a.settle_accounts_type}),e.book_table_show=1==a.book_type,e.settle_accounts_type=a.settle_accounts_type,e.queue_is_open=a.queue_is_open,e.print_type=a.print_type,e.queue_content=a.queue_content,e.$forceUpdate()}))},switchBookType:function(e){this.is_book=e},onChange:function(e){this.cate_value=e},onSearch:function(){},onSelect:function(){console.log(this.cate_value)},changeSettlementType:function(e){console.log(e),this.settle_accounts_type=e.target.value},changeIsBook:function(e){this.is_book=e},changeBookType:function(e){1==e.target.value?this.book_table_show=!0:this.book_table_show=!1},handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFields((function(e,t){if(!e){if(t.book_start=n()(t.book_start).format("HH:mm"),t.book_stop=n()(t.book_stop).format("HH:mm"),t.store_id=a.$route.query.store_id,t.cate_id_arr=a.cate_value,t.is_book=a.is_book,a.cate_value.length<1)return a.$message.error(a.L("请选择店铺分类")),!1;console.log(111111,t),a.request(l["a"].shopEdit,t).then((function(e){a.$message.success(a.L("保存成功")),a.$router.push("/merchant/merchant.foodshop/storeList")}))}}))},handleDragDataChange:function(e){console.log(e)}}},u=d,c=t("2877"),p=Object(c["a"])(u,r,o,!1,null,null,null);a["default"]=p.exports},"6ea1":function(e,a,t){"use strict";var r={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};a["a"]=r},d9fa:function(e,a,t){},e3b1:function(e,a,t){"use strict";t("d9fa")}}]);