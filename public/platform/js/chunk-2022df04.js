(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2022df04","chunk-7c36e2bc","chunk-2d0b3786"],{"02e3":function(e,t,a){"use strict";a("ccc6")},"1db9":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"select-goods"},[a("div",{staticClass:"left scrollbar"},[a("a-menu",{attrs:{mode:"inline","open-keys":e.openKeys,selectedKeys:e.defaultSelectedKey},on:{openChange:e.onOpenChange,select:e.onSelect}},[e._l(e.menuList,(function(t){return[t.children&&t.children.length?a("a-sub-menu",{key:t.sort_id},[a("span",{attrs:{slot:"title"},slot:"title"},[a("span",[e._v(e._s(t.sort_name))])]),t.children&&t.children.length?[e._l(t.children,(function(t){return[t.children&&t.children.length?[a("a-sub-menu",{key:t.sort_id,attrs:{title:t.sort_name}},e._l(t.children,(function(t){return a("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])})),1)]:[a("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]]}))]:e._e()],2):a("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]}))],2)],1),a("div",{staticClass:"right"},[a("div",{staticClass:"top"},[1==e.selectType?a("span",{staticClass:"tips"},[e._v("同一商家只可选择一个商品参与组合活动")]):a("span",{staticClass:"tips"}),a("a-input-search",{staticClass:"search",attrs:{placeholder:"商品名称/商家名称/商品id"},on:{search:e.onSearch,change:e.onSearchChange},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),a("div",{staticClass:"bottom"},[a("a-table",{attrs:{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.list,rowKey:"group_id",scroll:{y:500}},scopedSlots:e._u([{key:"selected",fn:function(t,o){return a("span",{},[t?a("div",{staticStyle:{color:"#1890ff"}},[e._v("已选择")]):e._e()])}},{key:"name",fn:function(t,o){return a("span",{},[a("div",{staticClass:"product-info"},[a("div",[a("img",{attrs:{src:o.image}})]),a("div",{staticStyle:{"margin-left":"10px"}},[a("p",{staticClass:"product-name"},[e._v(e._s(t))])])])])}}])})],1)])])])},r=[],i=(a("a9e3"),a("159b"),a("7db0"),a("d81d"),a("a434"),{name:"SelectGoods",props:{visible:{type:Boolean,default:!1},selectType:{type:Number,default:1},menuList:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[]}},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"商品名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"商家名称",dataIndex:"merchant_name"},{title:"价格",dataIndex:"price"},{title:"团购状态",dataIndex:"status_str"},{title:"状态",dataIndex:"selected",scopedSlots:{customRender:"selected"}}],menuId:0,selectedRowKeys:[],selectedRows:[],defaultSelectedKey:[],keywords:"",sList:[],merIdArr:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onSelect:this.onRowSelect,hideDefaultSelections:!0,getCheckboxProps:function(e){return{props:{}}}}}},watch:{visible:function(e,t){this.dialogVisible=e,e&&(this.handleMenuList(),this.handleList())},menuList:function(){this.handleMenuList()},list:function(){this.handleList()},selectedList:function(e){this.sList=JSON.parse(JSON.stringify(e))}},mounted:function(){this.dialogVisible=this.visible,this.handleMenuList(),this.handleList(),this.sList=JSON.parse(JSON.stringify(this.selectedList))},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.defaultSelectedKey=[],this.keywords="",this.currentPage=1},handleMenuList:function(){var e=this;this.init(),console.log(this.menuList," this.menuList"),this.menuList.forEach((function(t,a){if(e.rootSubmenuKeys.push(t.sort_id),t.children&&t.children.length){0==a&&e.openKeys.push(t.sort_id);var o=t.children;o.forEach((function(t,o){if(t.children&&t.children.length){0==o&&e.openKeys.push(t.sort_id);var r=t.children;r.forEach((function(t,r){0==a&&0==o&&0==r&&(e.menuId=t.sort_id)}))}else 0==a&&0==o&&(e.menuId=t.sort_id)}))}else 0==a&&(e.menuId=t.sort_id)})),this.defaultSelectedKey.push(this.menuId),this.onSelect({key:this.menuId})},handleList:function(){var e=this;console.log("-----------1",this.sList),this.selectedRowKeys=[],this.merIdArr=[],this.sList.length&&this.sList.forEach((function(t){e.selectedRowKeys.push(t.group_id),e.merIdArr.push(t.mer_id)})),this.list.length&&this.list.forEach((function(t,a){-1!=e.selectedRowKeys.indexOf(t.group_id)?e.list[a].selected=1:e.list[a].selected=0})),this.selectedRows=this.sList},handleOk:function(){var e=this.selectedRowKeys,t=this.sList;t.length?this.$emit("submit",{ids:e,goods:t}):this.$message.error("请选择商品")},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onSelect:function(e){var t=e.key;console.log("menu id selected:",t),this.menuId=t,this.defaultSelectedKey=[t],this.$emit("onMenuSelect",{id:t})},onOpenChange:function(e){var t=this,a=e.find((function(e){return-1===t.openKeys.indexOf(e)}));-1===this.rootSubmenuKeys.indexOf(a)?this.openKeys=e:this.openKeys.push(a)},onSearch:function(e){this.keywords?(this.menuId="",this.openKeys=[],this.defaultSelectedKey=[],this.$emit("onSearch",{id:this.menuId,keywords:e})):this.$message.warning("请输入商品名称！")},onSearchChange:function(e){this.keywords?this.onSearch(this.keywords):this.handleMenuList()},onRowSelect:function(e,t,a){var o=this;if(t)if("group_renovation"==e.flag)this.sList.push(e),this.selectedRowKeys.push(e.group_id),this.merIdArr.push(e.mer_id);else{if(-1!=this.merIdArr.indexOf(e.mer_id))return this.$message.error("该商家已选过一个商品"),!1;this.sList.push(e),this.selectedRowKeys.push(e.group_id),this.merIdArr.push(e.mer_id)}else-1!=this.selectedRowKeys.indexOf(e.group_id)&&(this.merIdArr.remove(e.mer_id),this.sList.remove(e),this.selectedRowKeys.remove(e.group_id));this.list.length&&this.list.forEach((function(e,t){-1!=o.selectedRowKeys.indexOf(e.group_id)?o.list[t].selected=1:o.list[t].selected=0}))},onSelectAll:function(e,t,a){var o=this;e?a.map((function(e){if(-1!=o.merIdArr.indexOf(e.mer_id))return o.$message.error("该商家已选过一个商品"),!1;o.selectedRowKeys.push(e.group_id),o.sList.push(e),o.merIdArr.push(e.mer_id)})):a.map((function(e){o.sList.remove(e),o.selectedRowKeys.remove(e.group_id),o.merIdArr.remove(e.mer_id)}))}}});Array.prototype.remove=function(e){var t=this.indexOf(e),a=-1;t>-1?this.splice(t,1):(this.map((function(t,o){t.group_id==e.group_id&&(a=o)})),a>-1&&this.splice(a,1))};var s=i,n=(a("f4bc"),a("2877")),l=Object(n["a"])(s,o,r,!1,null,"0db84022",null);t["default"]=l.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a("6b75");function r(e){if(Array.isArray(e))return Object(o["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=a("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return r(e)||i(e)||Object(s["a"])(e)||n()}},"563e":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"color-picker"},[a("colorPicker",{staticClass:"color-box",on:{change:e.headleChangeColor},model:{value:e.colorInfo,callback:function(t){e.colorInfo=t},expression:"colorInfo"}}),a("p",{staticClass:"color-name"},[e._v(e._s(e.colorInfo))])],1)},r=[],i={name:"CustomColorPicker",components:{},data:function(){return{colorInfo:""}},props:{color:{type:String,default:"#ffffff"},disabled:{type:Boolean,default:!1}},mounted:function(){this.colorInfo=this.color},methods:{headleChangeColor:function(e){this.$emit("update:color",e)}}},s=i,n=(a("02e3"),a("2877")),l=Object(n["a"])(s,o,r,!1,null,"8e58703e",null);t["a"]=l.exports},"771c":function(e,t,a){},"7b3f":function(e,t,a){"use strict";var o={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=o},"8a11":function(e,t,a){"use strict";var o={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow"};t["a"]=o},ccc6:function(e,t,a){},f4bc:function(e,t,a){"use strict";a("771c")},fb70:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[e.ajaxData?a("a-form",{attrs:{form:e.form,"label-col":{span:4},"wrapper-col":{span:10}},on:{submit:e.handleSubmit}},[a("a-card",{attrs:{title:"基本信息",bordered:!1}},[a("a-form-item",{attrs:{label:"优惠组合名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:e.ajaxData.title,rules:[{required:!0,message:"请输入优惠组合名称！"}]}],expression:"[\n            'title',\n            { initialValue: ajaxData.title, rules: [{ required: true, message: '请输入优惠组合名称！' }] },\n          ]"}],attrs:{placeholder:"填写优惠组合名称"}})],1),a("a-form-item",{attrs:{label:"优惠组合类型",help:"如果该优惠组合中有不同类型的商品，可选其他"}},[e.catArr.length?a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_id",{initialValue:e.ajaxData.cat_id}],expression:"['cat_id', { initialValue: ajaxData.cat_id }]"}],staticStyle:{width:"210px"}},e._l(e.catArr,(function(t){return a("a-select-option",{key:t.cat_id,attrs:{value:t.cat_id}},[e._v(e._s(t.cat_name))])})),1):e._e()],1),a("a-form-item",{attrs:{label:"优惠组合价格"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["price",{initialValue:e.ajaxData.price,rules:[{required:!0,message:"请输入价格！"}]}],expression:"[\n            'price',\n            { initialValue: ajaxData.price, rules: [{ required: true, message: '请输入价格！' }] },\n          ]"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入价格",precision:2,min:0,step:"1"}})],1),a("a-form-item",{attrs:{label:"优惠组合原价"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["old_price",{initialValue:e.ajaxData.old_price,rules:[{required:!0,message:"请输入原价！"}]}],expression:"[\n            'old_price',\n            { initialValue: ajaxData.old_price, rules: [{ required: true, message: '请输入原价！' }] },\n          ]"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入原价",precision:2,min:0,step:"1"}})],1),a("a-form-item",{attrs:{label:"可使用优惠组合券次数",help:"可限制用户消费的总次数"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["can_use_count",{initialValue:e.ajaxData.can_use_count,rules:[{required:!0,message:"请输入整数！"}]}],expression:"[\n            'can_use_count',\n            { initialValue: ajaxData.can_use_count, rules: [{ required: true, message: '请输入整数！' }] },\n          ]"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入次数",min:1},on:{change:e.canUseCountChange}})],1),a("a-form-item",{attrs:{label:"组合商品使用规则",help:"该项可规定用户消费时每件商品的消费方式"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["use_rule",{initialValue:String(e.ajaxData.use_rule)}],expression:"['use_rule', { initialValue: String(ajaxData.use_rule) }]"}],staticStyle:{width:"210px"},on:{change:e.useRuleChange}},[a("a-select-option",{attrs:{value:"1"}},[e._v("每件商品可重复使用")]),a("a-select-option",{attrs:{value:"2"}},[e._v("每件商品限制次数使用")])],1)],1),a("a-form-item",{attrs:{label:"优惠组合有效天数",help:"从用户下单当天计算，到期后将不能使用该优惠组合。若想设置月卡或年卡只需设置对应的天数即可"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["can_use_day",{initialValue:e.ajaxData.can_use_day,rules:[{required:!0,message:"请输入有效天数！"}]}],expression:"[\n            'can_use_day',\n            { initialValue: ajaxData.can_use_day, rules: [{ required: true, message: '请输入有效天数！' }] },\n          ]"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入具体天数",min:1}})],1),a("a-form-item",{attrs:{label:"优惠组合开始时间",help:"开始时间 结束时间 是用于限制用户前端展示的，不影响有效期。"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["start_time",{initialValue:""==e.ajaxData.start_time?null:e.moment(e.ajaxData.start_time,e.dateFormat),rules:[{required:!0,message:"选择开始时间"}]}],expression:"[\n            'start_time',\n            {\n              initialValue: ajaxData.start_time == '' ? null : moment(ajaxData.start_time, dateFormat),\n              rules: [{ required: true, message: '选择开始时间' }],\n            },\n          ]"}],attrs:{"show-time":"",format:"YYYY-MM-DD HH:mm",placeholder:"选择开始时间精确到时分"},on:{change:e.onChangeStartTime,ok:e.onOkStartTime}})],1),a("a-form-item",{attrs:{label:"优惠组合结束时间",help:"开始时间 结束时间 是用于限制用户前端展示的，不影响有效期。"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["end_time",{initialValue:""==e.ajaxData.end_time?null:e.moment(e.ajaxData.end_time,e.dateFormat),rules:[{required:!0,message:"选择结束时间"}]}],expression:"[\n            'end_time',\n            {\n              initialValue: ajaxData.end_time == '' ? null : moment(ajaxData.end_time, dateFormat),\n              rules: [{ required: true, message: '选择结束时间' }],\n            },\n          ]"}],attrs:{"show-time":"",format:"YYYY-MM-DD HH:mm",placeholder:"选择结束时间精确到时分"},on:{change:e.onChangeEndTime,ok:e.onOkEndTime}})],1),a("a-form-item",{attrs:{label:"组合商品库存",help:"商品原始总库存，库存填写-1 则代表无限量"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["stock_num",{initialValue:e.ajaxData.stock_num,rules:[{required:!0,message:"请输入库存！"}]}],expression:"[\n            'stock_num',\n            { initialValue: ajaxData.stock_num, rules: [{ required: true, message: '请输入库存！' }] },\n          ]"}],attrs:{min:-1}})],1),a("a-form-item",{attrs:{label:"用户限购数",help:"用户可购买上限，填写0 则代表不限购"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["limit_number",{initialValue:e.ajaxData.limit_number,rules:[{required:!0,message:"请输入大于等于0的整数！"}]}],expression:"[\n            'limit_number',\n            { initialValue: ajaxData.limit_number, rules: [{ required: true, message: '请输入大于等于0的整数！' }] },\n          ]"}],attrs:{min:0}})],1),a("a-form-item",{attrs:{label:"优惠组合主图色"}},[a("color-picker",{attrs:{color:e.ajaxData.main_color},on:{"update:color":function(t){return e.$set(e.ajaxData,"main_color",t)}}})],1),a("a-form-item",{attrs:{label:"优惠组合banner图",help:"建议750*600px"}},[a("a-upload",{attrs:{name:"reply_pic","file-list":e.bannerFileList,action:e.uploadImg,headers:e.headers},on:{change:e.bannerImgChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传图片")],1)],1)],1),a("a-form-item",{attrs:{label:"优惠组合分享图",help:"宽度建议750px，高度会跟随等比例展示。"}},[a("a-upload",{attrs:{name:"reply_pic",action:e.uploadImg,"file-list":e.shareFileList,headers:e.headers},on:{change:e.shareImgChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传图片 ")],1)],1)],1),a("a-form-item",{attrs:{label:"推广海报背景图",help:"用户分享海报背景图，系统左下角将自动生成二维码。尺寸1080*1920"}},[a("a-upload",{attrs:{name:"reply_pic",action:e.uploadImg,"file-list":e.sharePosterFileList,headers:e.headers},on:{change:e.sharePosterImgChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传图片 ")],1)],1)],1),a("a-form-item",{attrs:{label:"优惠组合分享标题",help:"未填写默认为组合活动名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["share_title",{initialValue:e.ajaxData.share_title}],expression:"['share_title', { initialValue: ajaxData.share_title }]"}],attrs:{placeholder:"请输入内容"}})],1),a("a-form-item",{attrs:{label:"优惠组合分享副标题",help:"未填写默认为 点击进入"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["share_desc",{initialValue:e.ajaxData.share_desc}],expression:"['share_desc', { initialValue: ajaxData.share_desc }]"}],attrs:{placeholder:"请输入内容"}})],1),a("a-form-item",{attrs:{label:"优惠组合使用规则",help:""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["rule_detail",{initialValue:e.ajaxData.rule_detail}],expression:"['rule_detail', { initialValue: ajaxData.rule_detail }]"}],attrs:{placeholder:"请输入内容",rows:4}})],1),a("a-form-item",{attrs:{label:"购买后可取消订单",help:""}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["can_cancel",{initialValue:1==e.ajaxData.can_cancel,valuePropName:"checked"}],expression:"[\n            'can_cancel',\n            { initialValue: ajaxData.can_cancel == 1 ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":"是","un-checked-children":"否"},on:{change:e.switchCanCancel}})],1),0==e.ajaxData.can_cancel?a("a-form-item",{attrs:{label:"分享佣金金额",help:"用户推广组合套餐成功下单后获得的金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["spread_money",{initialValue:e.ajaxData.spread_money}],expression:"['spread_money', { initialValue: ajaxData.spread_money }]"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入佣金金额",precision:2,min:0,step:"1"}})],1):e._e(),a("a-form-item",{attrs:{label:"活动状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.ajaxData.status,valuePropName:"checked"}],expression:"['status', { initialValue: ajaxData.status == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"},on:{change:e.switchStatus}})],1)],1),a("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:"商品信息",bordered:!1}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",[a("a-button",{attrs:{type:"primary"},on:{click:e.selectGoodsClick}},[e._v("添加商品")]),e.selectedGoodsDetailList.length?a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger"},on:{click:e.delGoodsClick}},[e._v("删除")]):e._e()],1),a("div",[a("div",[e._v("当前优惠组合可使用次数 "+e._s(e.can_use_count))]),a("div",[e._v(" 商品总成本价"),a("span",{staticStyle:{color:"red"}},[e._v(" ￥"+e._s(e.cost_price_total)+" ")])])])]),[a("div",[a("div",{staticStyle:{"margin-bottom":"16px"}},[a("span",{staticStyle:{"margin-left":"8px"}})]),a("a-table",{attrs:{"row-selection":{selectedRowKeys:e.selectedGoodsList,onChange:e.onSelectChange},rowKey:"group_id",columns:e.goodsColumns,"data-source":e.selectedGoodsDetailList},scopedSlots:e._u([{key:"cost_price",fn:function(t,o){return a("span",{},[a("a-input-number",{staticStyle:{width:"100px"},attrs:{precision:2,min:0,step:"1"},model:{value:o.cost_price,callback:function(t){e.$set(o,"cost_price",t)},expression:"record.cost_price"}})],1)}},{key:"use_count",fn:function(t,o){return a("span",{},[2==e.ajaxData.use_rule?a("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0},model:{value:o.use_count,callback:function(t){e.$set(o,"use_count",t)},expression:"record.use_count"}}):e._e(),1==e.ajaxData.use_rule?a("span",[e._v("不限次数")]):e._e()],1)}},{key:"time",fn:function(t,o){return a("span",{},[e._v(" 开始时间："+e._s(o.begin_time)+"结束时间："+e._s(o.end_time)+" ")])}},{key:"sale_count",fn:function(t,o){return a("span",{},[a("p",[e._v("售出："+e._s(o.sale_count)+" 份")]),a("p",[e._v("原始库存："+e._s(o.count_num>0?o.count_num:"无限制"))]),a("p",[e._v("虚拟："+e._s(o.virtual_num)+" 人")])])}},{key:"action",fn:function(t,o){return a("span",{},[a("a",{on:{click:function(t){return e.delGoods(o.group_id)}}},[e._v("删除")])])}}],null,!1,2368997690)})],1)],a("select-goods",{attrs:{visible:e.selectGoodsVisible,menuList:e.goodsSortList,list:e.selectGoodsList,selectedList:e.selectedGoodsDetailList},on:{"update:visible":function(t){e.selectGoodsVisible=t},submit:e.onGoodsSelect,onMenuSelect:e.onMenuSelect,onSearch:e.goodsOnSearch}})],2),a("a-form-item",{staticClass:"text-left",staticStyle:{margin:"20px 0"},attrs:{wrapperCol:{span:24}}},[a("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")])],1)],1):e._e()],1)},r=[],i=a("2909"),s=(a("4de4"),a("fb6a"),a("d81d"),a("b0c0"),a("ca00"),a("8a11")),n=a("7b3f"),l=a("c1df"),u=a.n(l),d=a("563e"),c=a("1db9"),m=[{title:"编号",dataIndex:"group_id",width:"8%"},{title:"名称",dataIndex:"name",width:"10%"},{title:"商家名称",dataIndex:"merchant_name",width:"10%"},{title:"价格",dataIndex:"price",width:"8%"},{title:"销售概览",dataIndex:"sale_count",width:"10%",scopedSlots:{customRender:"sale_count"}},{title:"时间",dataIndex:"time",width:"15%",scopedSlots:{customRender:"time"}},{title:"成本价",dataIndex:"cost_price",width:"10%",scopedSlots:{customRender:"cost_price"}},{title:"用户使用次数",dataIndex:"use_count",width:"10%",scopedSlots:{customRender:"use_count"}},{title:"团购状态",dataIndex:"status_str",width:"10%"},{title:"操作",dataIndex:"action",width:"15%",scopedSlots:{customRender:"action"}}],p={name:"ShopForm",components:{ColorPicker:d["a"],SelectGoods:c["default"]},data:function(){return{queryParam:{},ajaxData:{name:"",cat_id:0,use_rule:"1",start_time:"",end_time:"",stock_num:1e3,limit_number:0,banner_img:"",share_img:""},timeFormat:"HH:mm",dateFormat:"YYYY-MM-DD HH:mm",headers:{authorization:"authorization-text"},catArr:[],uploadImg:"/v20/public/index.php"+n["a"].uploadImg+"?upload_dir=/group/group_combine",bannerFileList:[],sharePosterFileList:[],shareFileList:[],selectGoodsVisible:!1,goodsColumns:m,form:null,can_use_count:0,has_use_count:0,goodsSortList:[],selectedGoodsDetailList:[],selectedGoodsList:[],selectGoodsList:[]}},computed:{cost_price_total:function(){for(var e=0,t=0;t<this.selectedGoodsDetailList.length;t++){var a=this.selectedGoodsDetailList[t].cost_price||0;e+=parseFloat(a)}return e}},watch:{$route:function(){this.getData()}},created:function(){this.form=this.$form.createForm(this)},mounted:function(){this.getData(),this.getCategoryList(),this.getCategoryListAll()},methods:{moment:u.a,getData:function(){var e=this;this.ajaxData=null,this.selectedGoodsDetailList=[],this.can_use_count=0,this.bannerFileList=[],this.shareFileList=[],this.sharePosterFileList=[],this.form=this.$form.createForm(this),console.log("getData"),void 0!=this.$route.query.id?this.queryParam["combine_id"]=this.$route.query.id:this.queryParam["combine_id"]=0,this.queryParam["combine_id"]>0?this.request(s["a"].getGroupCombineDetail,this.queryParam).then((function(t){if(e.ajaxData=t,console.log(e.ajaxData,"this.ajaxData"),e.selectedGoodsDetailList=t.group_list,e.can_use_count=t.can_use_count,t.banner_img){var a={uid:"1",name:t.banner_img,status:"done",url:t.banner_img};e.bannerFileList.push(a)}if(t.share_img){var o={uid:"2",name:t.share_img,status:"done",url:t.share_img};e.shareFileList.push(o)}if(t.share_poster_img){var r={uid:"2",name:t.share_poster_img,status:"done",url:t.share_poster_img};e.sharePosterFileList.push(r)}e.$forceUpdate()})):this.ajaxData={name:"",cat_id:0,use_rule:"1",start_time:"",end_time:"",stock_num:1e3,limit_number:0,banner_img:"",share_img:""}},getCostPriceTotal:function(){this.cost_price_total=0;for(var e=0;e<this.selectedGoodsDetailList.length;e++)this.cost_price_total=this.cost_price_total+parseFloat(this.selectedGoodsDetailList[e].cost_price)},getCategoryList:function(){var e=this;this.request(s["a"].getGroupFirstCategorylist).then((function(t){var a={cat_id:0,cat_name:"其他"};t.push(a),e.catArr=t}))},getCategoryListAll:function(){var e=this;this.request(s["a"].getCategoryTree).then((function(t){e.goodsSortList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(!e){if(a.start_time=u()(a.start_time).format(t.dateFormat),a.end_time=u()(a.end_time).format(t.dateFormat),a.can_cancel=a.can_cancel?1:0,a.status=a.status?1:0,a.combine_id=t.$route.query.id,a.banner_img=t.ajaxData.banner_img,a.share_img=t.ajaxData.share_img,a.share_poster_img=t.ajaxData.share_poster_img,a.goods_list=t.selectedGoodsDetailList,a.main_color=t.ajaxData.main_color,console.log(a,"values"),""==a.banner_img)return t.$message.error("请上传优惠组合背景图"),!1;if(""==a.share_img)return t.$message.error("请上传优惠组合分享图"),!1;if(""==a.share_poster_img)return t.$message.error("请上传分享海报图"),!1;for(var o=0,r=0;r<t.selectedGoodsDetailList.length;r++){var i=t.selectedGoodsDetailList[r].use_count||0;o+=parseFloat(i)}if(t.selectedGoodsDetailList&&t.selectedGoodsDetailList.length){var n=t.selectedGoodsDetailList.filter((function(e){if(""===e.cost_price||null===e.cost_price||void 0===e.cost_price)return e}))||[];if(n.length)return void t.$message.error("请输入商品成本价")}if(console.log(t.ajaxData,"this.ajaxData "),2==a.use_rule)for(r=0;r<t.selectedGoodsDetailList.length;r++){var l=t.selectedGoodsDetailList[r].use_count||0;if(l<=0)return void t.$message.error("请输入商品用户使用次数")}if(2==a.use_rule&&o!=t.can_use_count)return t.$message.error("商品的用户使用次数之和与可使用优惠组合券次数必须一致"),!1;console.log(111111,a),t.request(s["a"].editGroupCombine,a).then((function(e){t.$message.success("保存成功"),t.form=t.$form.createForm(t),t.$router.push("/group/platform.groupCombine/index")}))}}))},handleDragDataChange:function(e){console.log(e)},onChangeStartTime:function(e){console.log(e,"value   ")},onOkStartTime:function(){},onChangeEndTime:function(){},onOkEndTime:function(){},switchStatus:function(e){},switchCanCancel:function(e){this.ajaxData.can_cancel=e},canUseCountChange:function(e){this.can_use_count=e},useRuleChange:function(e){if(this.ajaxData.use_rule=e,1==e)for(var t=0;t<this.selectedGoodsDetailList.length;t++)this.selectedGoodsDetailList[t].use_count=""},bannerImgChange:function(e){var t=this,a=Object(i["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.ajaxData.banner_img=e.file.response.data.image),a})),this.bannerFileList=a,console.log(this.bannerFileList,"this.bannerFileList"),"done"===e.file.status?console.log("done"):"error"===e.file.status&&(console.log("error"),this.$message.error("".concat(e.file.name," 上传失败.")))},shareImgChange:function(e){var t=this,a=Object(i["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.ajaxData.share_img=e.file.response.data.image),a})),this.shareFileList=a,"done"===e.file.status||"error"===e.file.status&&this.$message.error("".concat(e.file.name," 上传失败."))},sharePosterImgChange:function(e){var t=this,a=Object(i["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.ajaxData.share_poster_img=e.file.response.data.image),a})),this.sharePosterFileList=a,"done"===e.file.status?console.log("done"):"error"===e.file.status&&(console.log("error"),this.$message.error("".concat(e.file.name," 上传失败.")))},getSelectGoodsList:function(){var e=this;this.request(s["a"].getGroupCombineGoodsList,this.queryParam).then((function(t){e.selectGoodsList=t.list}))},selectGoodsClick:function(){this.selectGoodsVisible=!0},onGoodsSelect:function(e){console.log(e,"onGoodsSelect"),this.selectedGoodsDetailList=e.goods,this.selectGoodsVisible=!1},onMenuSelect:function(e){this.queryParam.sort_id=e.id,this.queryParam.keywords="",this.getSelectGoodsList()},delGoodsClick:function(){for(var e=[],t=0;t<this.selectedGoodsDetailList.length;t++)-1==this.selectedGoodsList.indexOf(this.selectedGoodsDetailList[t].group_id)&&e.push(this.selectedGoodsDetailList[t]);this.selectedGoodsDetailList=e,this.selectedGoodsList=[]},delGoods:function(e){for(var t=[],a=[],o=0;o<this.selectedGoodsList.length;o++)e!=this.selectedGoodsList[o]&&t.push(this.selectedGoodsList[o]);for(o=0;o<this.selectedGoodsDetailList.length;o++)this.selectedGoodsDetailList[o].group_id!=e&&a.push(this.selectedGoodsDetailList[o]);this.selectedGoodsList=t,this.selectedGoodsDetailList=a},goodsOnSearch:function(e){this.queryParam.sort_id=e.id,this.queryParam.keywords=e.keywords,this.getSelectGoodsList()},onSelectChange:function(e){this.selectedGoodsList=e}}},g=p,h=a("2877"),f=Object(h["a"])(g,o,r,!1,null,null,null);t["default"]=f.exports}}]);