(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc9cea3e","chunk-2d0b3786"],{"192b":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("a-modal",{staticClass:"dialog",attrs:{title:e.L("选择商品"),width:"800",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("div",{staticClass:"select-goods"},[t("div",{staticClass:"left scrollbar"},[t("a-menu",{attrs:{mode:"inline","open-keys":e.openKeys,selectedKeys:e.defaultSelectedKey},on:{openChange:e.onOpenChange,select:e.onSelect}},[e._l(e.menuList,(function(a){return[a.children&&a.children.length?t("a-sub-menu",{key:a.sort_id},[t("span",{attrs:{slot:"title"},slot:"title"},[t("span",[e._v(e._s(a.sort_name))])]),a.children&&a.children.length?[e._l(a.children,(function(a){return[a.children&&a.children.length?[t("a-sub-menu",{key:a.sort_id,attrs:{title:a.sort_name}},e._l(a.children,(function(a){return t("a-menu-item",{key:a.sort_id},[e._v(e._s(a.sort_name))])})),1)]:[t("a-menu-item",{key:a.sort_id},[e._v(e._s(a.sort_name))])]]}))]:e._e()],2):t("a-menu-item",{key:a.sort_id},[e._v(e._s(a.sort_name))])]}))],2)],1),t("div",{staticClass:"right"},[t("div",{staticClass:"top"},[t("a-input-search",{staticClass:"search",attrs:{placeholder:e.L("商品名称")},on:{search:e.onSearch,change:e.onSearchChange},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),t("div",{staticClass:"bottom"},[t("a-table",{attrs:{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.list,rowKey:"goods_id",scroll:{y:500}},scopedSlots:e._u([{key:"name",fn:function(a,i){return t("span",{},[t("div",{staticClass:"product-info"},[t("div",[t("img",{attrs:{src:i.image}})]),t("div",{staticStyle:{"margin-left":"10px"}},[t("p",{staticClass:"product-name"},[e._v(e._s(a))])])])])}}])})],1)])])])},s=[],o=(a("d3b7"),a("159b"),a("7db0"),a("d81d"),a("a434"),{name:"SelectGoods",props:{visible:{type:Boolean,default:!1},menuList:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[]}},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:this.L("商品"),dataIndex:"name",scopedSlots:{customRender:"name"}},{title:this.L("价格"),dataIndex:"price"}],menuId:0,selectedRowKeys:[],selectedRows:[],defaultSelectedKey:[],keywords:"",sList:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onSelect:this.onRowSelect,onSelectAll:this.onSelectAll,getCheckboxProps:function(e){return{props:{disabled:0==e.can_be_choose}}}}}},watch:{visible:function(e,t){this.dialogVisible=e,e&&(this.handleMenuList(),this.handleList())},menuList:function(){this.handleMenuList()},list:function(){this.handleList()},selectedList:function(e){this.sList=JSON.parse(JSON.stringify(e))}},mounted:function(){this.dialogVisible=this.visible,this.handleMenuList(),this.handleList(),this.sList=JSON.parse(JSON.stringify(this.selectedList))},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.defaultSelectedKey=[],this.keywords="",this.currentPage=1},handleMenuList:function(){var e=this;this.init(),this.menuList.forEach((function(t,a){if(e.rootSubmenuKeys.push(t.sort_id),t.children&&t.children.length){0==a&&e.openKeys.push(t.sort_id);var i=t.children;i.forEach((function(t,i){if(t.children&&t.children.length){0==i&&e.openKeys.push(t.sort_id);var s=t.children;s.forEach((function(t,s){0==a&&0==i&&0==s&&(e.menuId=t.sort_id)}))}else 0==a&&0==i&&(e.menuId=t.sort_id)}))}else 0==a&&(e.menuId=t.sort_id)})),this.defaultSelectedKey.push(this.menuId),this.onSelect({key:this.menuId})},handleList:function(){var e=this;this.selectedRowKeys=[],this.sList.length&&this.sList.forEach((function(t){e.selectedRowKeys.push(t.goods_id)})),this.selectedRows=this.sList},handleOk:function(){var e=this.selectedRowKeys,t=this.sList;t.length?this.$emit("submit",{ids:e,goods:t}):this.$message.error(this.L("请选择商品"))},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onSelect:function(e){var t=e.key;console.log("menu id selected:",t),this.menuId=t,this.defaultSelectedKey=[t],this.$emit("onMenuSelect",{id:t})},onOpenChange:function(e){var t=this,a=e.find((function(e){return-1===t.openKeys.indexOf(e)}));-1===this.rootSubmenuKeys.indexOf(a)?this.openKeys=e:this.openKeys.push(a)},onSearch:function(e){this.keywords?(this.menuId="",this.openKeys=[],this.defaultSelectedKey=[],this.$emit("onSearch",{id:this.menuId,keywords:e})):this.$message.warning(this.L("请输入商品名称！"))},onSearchChange:function(e){this.keywords?this.onSearch(this.keywords):this.handleMenuList()},onRowSelect:function(e,t,a){t?(this.sList.push(e),this.selectedRowKeys.push(e.goods_id)):(this.sList.remove(e),this.selectedRowKeys.remove(e.goods_id))},onSelectAll:function(e,t,a){var i=this;e?a.map((function(e){i.selectedRowKeys.push(e.goods_id),i.sList.push(e)})):a.map((function(e){i.sList.remove(e),i.selectedRowKeys.remove(e.goods_id)}))}}});Array.prototype.remove=function(e){var t=this.indexOf(e),a=-1;t>-1?this.splice(t,1):(this.map((function(t,i){t.goods_id==e.goods_id&&(a=i)})),a>-1&&this.splice(a,1))};var r=o,n=(a("4efa"),a("2877")),l=Object(n["a"])(r,i,s,!1,null,"0674a471",null);t["a"]=l.exports},"19bb":function(e,t,a){"use strict";a("b0c0");var i=function(){var e=this,t=e._self._c;return t("div",["text"==e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[e.number?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,staticStyle:{width:"100%"},attrs:{precision:e.digits?0:e.precision,min:e.min,max:e.max,name:e.name,disabled:e.disabled,placeholder:e.placeholder}}):e.url?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{type:"url",message:"请输入正确的url地址"},{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value,\n              rules: [\n                {\n                  type: 'url',\n                  message: '请输入正确的url地址',\n                },\n                { required: required, message: requiredMessage },\n              ],\n            },\n          ]"}],key:e.name,attrs:{disabled:e.disabled,name:e.name,placeholder:e.placeholder}}):t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{disabled:e.disabled,"max-length":e.maxlength,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"textarea"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{rows:e.rows,name:e.name,placeholder:e.placeholder}})],1)],1)],1):e._e(),"switch"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:22}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:"1"==e.value,valuePropName:"checked"}],expression:"[name, { initialValue: value == '1' ? true : false, valuePropName: 'checked' }]"}],key:e.name,attrs:{"checked-children":e.switchCheckedText,"un-checked-children":e.switchUncheckedText}})],1)],1)],1):e._e(),"radio"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,options:e.selectArray}})],1)],1)],1):e._e(),"select"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"selectAll"===e.type?t("a-form-item",{attrs:{disabled:e.disabled,label:e.title,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:e.value,rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[name, { initialValue: value, rules: [{ required: required, message: requiredMessage }] }]"}],key:e.name,attrs:{mode:"multiple",name:e.name,placeholder:e.placeholder}},e._l(e.selectArray,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1)],1)],1):e._e(),"time"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.timeFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, timeFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name,format:e.timeFormat}})],1)],1)],1):e._e(),"date"===e.type?t("a-form-item",{attrs:{format:e.dateFormat,label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.name,{initialValue:""==e.value?null:e.moment(e.value,e.dateFormat),rules:[{required:e.required,message:e.requiredMessage}]}],expression:"[\n            name,\n            {\n              initialValue: value == '' ? null : moment(value, dateFormat),\n              rules: [{ required: required, message: requiredMessage }],\n            },\n          ]"}],key:e.name,staticStyle:{width:"100%"},attrs:{name:e.name}})],1)],1)],1):e._e(),"file"===e.type?t("a-form-item",{attrs:{label:e.title,disabled:e.disabled,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{staticClass:"file-upload",attrs:{name:"file",action:"/v20/public/index.php/common/common.UploadFile/uploadFile?upload_dir=file&fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange,preview:e.handlePreview}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传文件 ")],1)],1)],1)],1)],1):e._e(),"image"===e.type?t("a-form-item",{attrs:{label:e.title,labelCol:e.labelCol,disabled:e.disabled,wrapperCol:e.wrapperCol,extra:e.tips}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-upload",{attrs:{name:"img",action:"/v20/public/index.php/common/platform.system.config/upload?fieldname="+e.name,"file-list":e.fileList,multiple:!1,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v("上传图片 ")],1)],1)],1)],1)],1):e._e()],1)},s=[],o=a("2909"),r=(a("a9e3"),a("fb6a"),a("d81d"),a("ac1f"),a("1276"),a("caad"),a("2532"),a("c1df")),n=a.n(r),l=a("7a6b");function d(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}var u={name:"FormItem",components:{CustomTooltip:l["a"]},props:{labelCol:{type:Object,default:function(){return{lg:{span:6},sm:{span:7}}}},wrapperCol:{type:Object,default:function(){return{lg:{span:14},sm:{span:17}}}},title:{type:String,default:"标题"},name:{type:String,default:"name"},required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"此项必填"},tips:{type:String,default:""},type:{type:String,default:"text"},number:{type:Boolean,default:!1},digits:{type:Boolean,default:!1},precision:{type:Number,default:2},url:{type:Boolean,default:!1},max:{type:[Number,String]},min:{type:[Number,String]},maxlength:{type:[Number,String],default:21e3},selectArray:{type:Array,default:function(){return[]}},rows:{type:Number,default:4},placeholder:{type:String,default:""},value:{type:[Object,String,Array,Boolean,Number],default:null},tipsSize:{type:String,default:"18px"},tipsColor:{type:String,default:"#c5c5c5"},disabled:{type:Boolean,default:!1},fileUploadUrl:{type:String,default:""},imgUploadUrl:{type:String,default:""},switchCheckedText:{type:String,default:"开启"},switchUncheckedText:{type:String,default:"关闭"},filetype:{type:String,default:""},fsize:{type:[Number,String],default:0}},data:function(){return{timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD",headers:{authorization:"authorization-text"},loading:!1,imageUrl:"",fileList:[],uploadFileRet:!0}},mounted:function(){this.uploadFileRet=!0,"image"!=this.type&&"file"!=this.type||this.value&&(this.fileList=[{uid:"1",name:this.value,status:"done",url:this.value}],this.$emit("getFileValue",this.type,this.name,this.value))},watch:{fileList:function(e){this.$emit("uploadChange",{name:this.name,type:this.type,value:e})}},methods:{moment:n.a,handleChange:function(e){var t=this,a=Object(o["a"])(e.fileList);a=a.slice(-1);a=a.map((function(e){return e.response&&(t.uploadFileRet=!0,1e3==e.response.status?(e.url=e.response.data,!0):(e.name=t.value,e.url=t.value,t.$message.error(e.response.msg))),e})),this.uploadFileRet?this.fileList=a:this.fileList=[]},handlePreview:function(e){return!1},beforeUploadFile:function(e){var t=e.type.toLowerCase(),a=t.split("/");this.uploadFileRet=!0;var i=["mpeg","x-mpeg","mp3","x-mpeg-3","mpg","x-mp3","mpeg3","x-mpeg3","x-mpg","x-mpegaudio"];if(this.filetype&&this.filetype.length>0){if("mp3"==this.filetype&&!i.includes(a["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1;if("mp3"!=this.filetype&&!this.filetype.includes(a["1"]))return this.uploadFileRet=!1,this.$message.error("上传的文件只支持"+this.filetype+"格式"),!1}var s=e.size/1024/1024,o=0;return this.fsize&&(o=1*this.fsize),!(o>0&&s>o)||(this.uploadFileRet=!1,this.$message.error("上传图片最大支持"+o+"MB!"),!1)},normFile:function(e){return Array.isArray(e)?e:"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?e.file.response.data:void this.$message.error("上传失败！")},imgFile:function(e){var t=this;return d(e.file.originFileObj,(function(e){t.imageUrl=e})),"done"!=e.file.status?e.fileList:"1000"==e.file.response.status?(this.fileList=[e.file.response.data],this.fileList):void this.$message.error("上传失败！")}}},c=u,h=(a("d03d"),a("2877")),p=Object(h["a"])(c,i,s,!1,null,"5afeb148",null);t["a"]=p.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("6b75");function s(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var r=a("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return s(e)||o(e)||Object(r["a"])(e)||n()}},"4efa":function(e,t,a){"use strict";a("520d")},"520d":function(e,t,a){},"6ea1":function(e,t,a){"use strict";var i={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};t["a"]=i},"71e1":function(e,t,a){"use strict";a.r(t);a("b0c0");var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[e.detail?t("a-form",{attrs:{form:e.form,"label-col":{span:4},"wrapper-col":{span:14}},on:{submit:e.handleSubmit}},[t("a-card",{attrs:{title:e.L("基本信息"),bordered:!1}},[t("a-form-item",{attrs:{label:e.L("小票类型")}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["reciept_type",{initialValue:e.reciept_type}],expression:"['reciept_type', { initialValue: reciept_type }]"}],on:{change:e.onRecieptTypeChange}},[t("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("普通小票")))]),t("a-radio",{attrs:{value:2}},[e._v(e._s(e.L("标签小票")))])],1)],1),t("a-form-item",{attrs:{label:"打印机规则名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:e.L("请输入打印规则名称")}]}],expression:"[\n            'name',\n            { initialValue: detail.name, rules: [{ required: true, message: L('请输入打印规则名称') }] },\n          ]"}],attrs:{"aria-placeholder":e.L("请输入打印机规则名称")}})],1),t("a-form-item",{attrs:{label:e.L("打印张数")}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["number",{initialValue:e.detail.number,rules:[{required:!0}]}],expression:"['number', { initialValue: detail.number, rules: [{ required: true }] }]"}],staticStyle:{width:"200px"},attrs:{disabled:2==e.reciept_type}},e._l(e.numberList,(function(a){return t("a-select-option",{key:a.key},[e._v(e._s(a.name))])})),1)],1)],1),t("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:e.L("打印设置"),bordered:!1}},[1==e.reciept_type?t("a-form-item",{attrs:{label:e.L("打印类型")}},[t("div",[t("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["print_type",{initialValue:e.detail.print_type,rules:[{required:!0,message:e.L("请选择打印类型")}]}],expression:"[\n              'print_type',\n              { initialValue: detail.print_type, rules: [{ required: true, message: L('请选择打印类型') }] },\n            ]"}],on:{change:e.printTypeChange}},e._l(e.plainOptions,(function(a,i){return t("a-checkbox",{key:i,attrs:{value:a.value}},[e._v(" "+e._s(a.label)+" ")])})),1)],1)]):e._e(),e.frontShow&&1==e.reciept_type?[t("a-form-item",{attrs:{label:e.L("打印前台小票内容")}},[t("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["front_print",{initialValue:e.detail.front_print}],expression:"['front_print', { initialValue: detail.front_print }]"}],on:{change:e.onChange}},e._l(e.frontPrintOptions,(function(a,i){return t("a-checkbox",{key:i,attrs:{value:a.value}},[e._v(" "+e._s(a.label)+" ")])})),1)],1)]:e._e(),[e.backShow||2==e.reciept_type?t("div",[1==e.reciept_type?t("a-form-item",{attrs:{label:e.L("打印后厨小票内容")}},[t("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["back_print",{initialValue:e.detail.back_print}],expression:"['back_print', { initialValue: detail.back_print }]"}],on:{change:e.onChange}},e._l(e.backPrintOptions,(function(a,i){return t("a-checkbox",{key:i,attrs:{value:a.value}},[e._v(" "+e._s(a.label)+" ")])})),1)],1):e._e(),t("a-form-item",{attrs:{label:e.L("档口选项")}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["dangkou_select",{initialValue:e.dangkouSelect}],expression:"['dangkou_select', { initialValue: dangkouSelect }]"}],on:{change:e.onDangkouChange}},e._l(e.dangkouSelectOption,(function(a,i){return t("a-radio",{key:i,attrs:{value:i}},[e._v(e._s(a))])})),1)],1),e.fenDangkouShow?t("a-form-item",{attrs:{label:e.L("分档口打印类型")}},e._l(e.fendangkouSelectOption,(function(a){return t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["fendangkou_select",{initialValue:e.detail.fendangkou_select}],expression:"['fendangkou_select', { initialValue: detail.fendangkou_select }]"}],key:a.value,on:{change:e.onFenDangkouChange}},[t("a-radio",{attrs:{value:a.value}},[e._v(e._s(a.label))])],1)})),1):e._e(),e.fenDangkouShow&&1==e.fenDangkouTypeShow?t("a-form-item",{attrs:{label:e.L("选择打印分类")}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dangkou_select_goods",{initialValue:e.selectedGoodsSortList}],expression:"['dangkou_select_goods', { initialValue: selectedGoodsSortList }]"}],attrs:{value:e.selectedGoodsSortList,"tree-checkable":"","show-clear":"","show-checked-strategy":"SHOW_PARENT","dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:e.L("请选择分类")},on:{change:e.onGoodsSortChange}},e._l(e.goodsSortList,(function(e){return t("a-tree-select-node",{key:e.sort_id,attrs:{value:e.sort_id,title:e.sort_name,disabled:!1}})})),1)],1):e._e(),e.fenDangkouShow&&2==e.fenDangkouTypeShow?t("a-form-item",{attrs:{label:e.L("选择打印商品")}},[t("a-button",{attrs:{type:"primary"},on:{click:e.selectGoodsClick}},[e._v(e._s(e.L("添加商品")))]),[t("div",[t("div",{staticStyle:{"margin-bottom":"16px"}},[t("span",{staticStyle:{"margin-left":"8px"}})]),t("a-table",{attrs:{rowKey:"goods_id",columns:e.goodsColumns,"data-source":e.selectedGoodsDetailList},scopedSlots:e._u([{key:"action",fn:function(a,i){return t("span",{},[t("a",{on:{click:function(t){return e.delGoods(i.goods_id)}}},[e._v(e._s(e.L("删除")))])])}}],null,!1,2757762255)})],1)]],2):e._e()],1):e._e()]],2),t("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:e.L("打印设备"),bordered:!1}},[[t("div",[1==e.have_print_role?t("div",{staticStyle:{"margin-bottom":"16px"}},[t("span",{staticStyle:{"margin-left":"8px"}},[1==e.reciept_type?[t("router-link",{attrs:{to:{path:"/merchant/merchant.iframe/menu_49",query:{store_id:e.queryParam.store_id}}}},[t("a-button",{staticClass:"icon_btn"},[e._v(e._s(e.L("添加打印机")))])],1)]:[t("router-link",{attrs:{to:{path:"/merchant/merchant.iframe/menu_10101",query:{store_id:e.queryParam.store_id}}}},[t("a-button",{staticClass:"icon_btn"},[e._v("添加打印机")])],1)]],2)]):e._e(),t("a-table",{attrs:{"row-selection":{selectedRowKeys:e.selectedPrintList,onChange:e.onSelectChange},rowKey:"pigcms_id",columns:e.columns,"data-source":e.printList}})],1)],t("select-goods",{attrs:{visible:e.selectGoodsVisible,storeId:e.queryParam.store_id,menuList:e.goodsSortList,list:e.selectGoodsList,selectedList:e.selectedGoodsDetailList},on:{"update:visible":function(t){e.selectGoodsVisible=t},submit:e.onGoodsSelect,onMenuSelect:e.onMenuSelect,onSearch:e.goodsOnSearch}})],2),t("a-form-item",{staticClass:"text-left",staticStyle:{margin:"20px 0"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v(e._s(e.L("提交")))])],1)],1):e._e()],1)},s=[],o=(a("a15b"),a("19bb")),r=(a("ca00"),a("6ea1")),n=a("192b"),l=[{key:1,name:1},{key:2,name:2},{key:3,name:3},{key:4,name:4},{key:5,name:5}],d=[],u=[],c=[],h=[],p=[],m=[],g=[],f={name:"",number:1,print_type:["1","2"],front_print:["1","2","3"],back_print:["1","2"],dangkou_select:0},y={name:"ShopForm",components:{FormItem:o["a"],SelectGoods:n["a"]},data:function(){return{visible:!1,title:this.L("添加"),queryParam:{},defaultDetail:f,detail:{name:"",number:1,print_type:["1","2"],front_print:["1","2","3"],back_print:["1","2"],dangkou_select:0,fendangkou_select:1},dangkouSelect:0,have_print_role:0,printList:[],goodsSortList:[],selectedGoodsList:[],selectedGoodsDetailList:[],selectedGoodsSortList:[],selectedPrintList:[],plainOptions:d,frontPrintOptions:h,backPrintOptions:p,dangkouSelectOption:u,fendangkouSelectOption:c,numberList:l,goodsColumns:g,columns:m,selectedRowKeys:[],form:this.$form.createForm(this),fenDangkouShow:!1,fenDangkouTypeShow:1,selectGoodsVisible:!1,selectGoodsList:[],getDataStatus:!0,backShow:!0,frontShow:!0,reciept_type:1}},watch:{$route:function(){var e=this;console.log("watch-----------"),void 0!=this.$route.query.store_id&&(this.queryParam.store_id=this.$route.query.store_id,this.queryParam.id=this.$route.query.id,this.reciept_type=this.$route.query.reciept_type||1,this.getPrintList(),this.getGoodsSortList(),this.getDataStatus=!1),this.$set(this,"detail",null),this.$nextTick((function(){e.getData()}))}},created:function(){this.plainOptions=[{value:"1",label:this.L("前台小票")},{value:"2",label:this.L("后厨小票")},{value:"3",label:this.L("排号小票")}],this.goodsColumns=[{title:this.L("商品名称"),dataIndex:"name",width:"50%"},{title:this.L("商品分类"),dataIndex:"sort_name",width:"35%"},{title:this.L("操作"),dataIndex:"action",width:"15%",scopedSlots:{customRender:"action"}}],this.columns=[{title:this.L("打印机名称"),dataIndex:"name"},{title:this.L("打印类型"),dataIndex:"print_type_txt"},{title:this.L("纸张类型"),dataIndex:"paper_txt"}],this.backPrintOptions=[{value:"1",label:this.L("一菜一单")},{value:"2",label:this.L("整单打印")}],this.frontPrintOptions=[{value:"1",label:this.L("客看单")},{value:"2",label:this.L("预结账单")},{value:"3",label:this.L("结账单")}],this.fendangkouSelectOption=[{value:1,label:this.L("打印指定分类")},{value:2,label:this.L("打印指定商品")}],this.dangkouSelectOption=[this.L("同一档口"),this.L("分档口")]},mounted:function(){console.log("mounted-----------"),this.getDataStatus&&(this.queryParam.store_id=this.$route.query.store_id,this.queryParam.id=this.$route.query.id,this.reciept_type=this.$route.query.reciept_type||1,this.getData(),this.getPrintList(),this.getGoodsSortList())},destroyed:function(){},methods:{add:function(){},onSelectChange:function(e){this.selectedPrintList=e,console.log(e,"selectedRowKeys")},printTypeChange:function(e){this.backShow=-1!=e.join(",").indexOf("2"),console.log(this.backShow," this.backShow"),this.frontShow=-1!=e.join(",").indexOf("1")},onGoodsSortChange:function(e){this.selectedGoodsSortList=e},selectGoodsClick:function(){this.selectGoodsVisible=!0},onGoodsSelect:function(e){console.log(e,"onGoodsSelect"),this.selectedGoodsDetailList=e.goods,this.selectedGoodsList=e.ids,this.selectGoodsVisible=!1},onMenuSelect:function(e){this.queryParam.sort_id=e.id,this.queryParam.keywords="",this.getSelectGoodsList()},delGoods:function(e){for(var t=[],a=[],i=0;i<this.selectedGoodsList.length;i++)e!=this.selectedGoodsList[i]&&t.push(this.selectedGoodsList[i]);for(i=0;i<this.selectedGoodsDetailList.length;i++)this.selectedGoodsDetailList[i].goods_id!=e&&a.push(this.selectedGoodsDetailList[i]);this.selectedGoodsList=t,this.selectedGoodsDetailList=a},goodsOnSearch:function(e){this.queryParam.sort_id=e.id,this.queryParam.keywords=e.keywords,this.getSelectGoodsList()},onDangkouChange:function(e){1==e.target.value?this.fenDangkouShow=!0:this.fenDangkouShow=!1,console.log(this.fenDangkouShow,"value")},onFenDangkouChange:function(e){1==e.target.value?this.fenDangkouTypeShow=1:this.fenDangkouTypeShow=2},getData:function(){var e=this;this.detail=[],this.$forceUpdate(),console.log("222222222222222222222",this.queryParam["id"]),this.queryParam["id"]?this.request(r["a"].getPrintRuleDetail,this.queryParam).then((function(t){e.detail=t,e.selectedPrintList=t.print_list,e.selectedGoodsList=t.goods_list,e.selectedGoodsDetailList=t.goods_detail_list,e.selectedGoodsSortList=t.goods_sort_list,e.fenDangkouShow=t.dangkou_select,e.detail.fendangkou_select=2==t.dangkou_select?2:1,e.dangkouSelect=t.dangkou_select?1:0,e.fenDangkouTypeShow=e.detail.fendangkou_select,e.reciept_type!=t.reciept_type&&(e.reciept_type=t.reciept_type,e.getPrintList()),t.print_type&&t.print_type.length&&(e.backShow=-1!=t.print_type.join(",").indexOf("2"),e.frontShow=-1!=t.print_type.join(",").indexOf("1")),console.log(e.detail," this.detail")})):(console.log("333333333333333333"),this.detail=this.defaultDetail,this.selectedPrintList=[],this.selectedGoodsList=[],this.selectedGoodsDetailList=[],this.selectedGoodsSortList=[],this.fenDangkouTypeShow=0,this.dangkouSelect=0,this.frontShow=!0,console.log(this.detail,"detail-----------")),this.$set(this,"detail",this.detail)},getPrintList:function(){var e=this;this.queryParam.is_bind_rule=1,this.queryParam.reciept_type=this.reciept_type,this.request(r["a"].storePrintList,this.queryParam).then((function(t){e.printList=t.list,e.have_print_role=t.have_print_role}))},getGoodsSortList:function(){var e=this;this.request(r["a"].selectSortList,this.queryParam).then((function(t){e.goodsSortList=t}))},getSelectGoodsList:function(){var e=this;this.request(r["a"].getPrintGoodsList,this.queryParam).then((function(t){e.selectGoodsList=t.list}))},onChange:function(e){console.log(e)},onSelect:function(){var e;(e=console).log.apply(e,arguments),console.log(this.cate_value)},onRecieptTypeChange:function(e){this.reciept_type=e.target.value,this.selectedPrintList=[],this.getPrintList(),1==this.reciept_type?(this.$set(this.detail,"print_type",this.defaultDetail.print_type),this.$set(this.detail,"front_print",this.defaultDetail.front_print),this.$set(this.detail,"back_print",this.defaultDetail.back_print)):(this.$set(this.detail,"print_type",[]),this.$set(this.detail,"front_print",[]),this.$set(this.detail,"back_print",[]))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(a.store_id=t.queryParam.store_id,a.print_list=t.selectedPrintList,a.id=t.queryParam.id,a.reciept_type=t.reciept_type,a.number=1==t.reciept_type?a.number:1,a.dangkou_select>0&&2==a.fendangkou_select&&(a.dangkou_select_goods=t.selectedGoodsList),console.log(111111,a),t.request(r["a"].editPrintRule,a).then((function(e){t.$message.success(t.L("保存成功")),t.$router.push({path:"/merchant/merchant.foodshop/printRule",query:{store_id:a.store_id}})})))}))}}},b=y,_=a("2877"),v=Object(_["a"])(b,i,s,!1,null,null,null);t["default"]=v.exports},d03d:function(e,t,a){"use strict";a("f9d9")},f9d9:function(e,t,a){}}]);