(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-767797b0","chunk-41dd438a","chunk-c0b2ec94","chunk-f31c2e46"],{"2c00":function(e,t,o){e.exports=o.p+"img/table_normal.ee00c62d.png"},"4cc6":function(e,t,o){},"56a2":function(e,t,o){"use strict";o.r(t);o("b0c0");var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:640,visible:e.visible},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:e.L("桌台类型"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["tid",{initialValue:e.tid,rules:[{required:!0,message:e.L("请选择桌台类型！")}]}],expression:"['tid', { initialValue: tid, rules: [{ required: true, message: L('请选择桌台类型！') }] }]"}],staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:e.L("请选择"),"option-filter-prop":"children","filter-option":e.filterOption},on:{focus:e.handleFocus,blur:e.handleBlur,change:e.handleChange}},e._l(e.tableTypes,(function(o){return t("a-select-option",{attrs:{value:o.id}},[e._v(" "+e._s(o.name)+" ")])})),1)],1),t("a-form-item",{attrs:{label:e.L("桌台编号"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.name,rules:[{required:!0,message:e.L("请输入桌台编号！")}]}],expression:"['name', { initialValue: name, rules: [{ required: true, message: L('请输入桌台编号！') }] }]"}]})],1)],1)],1)],1)},i=[],s=o("6ea1"),r={data:function(){return{title:this.L("新建分类"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,store_id:0,tid:null,name:"",tableTypes:[],visible:!1,confirmLoading:!1,form:this.$form.createForm(this)}},mounted:function(){"undefined"!=typeof this.$route.query.store_id&&(this.store_id=this.$route.query.store_id)},methods:{initForm:function(){var e=this;this.name="",this.request(s["a"].tableTypeList,{store_id:this.store_id}).then((function(t){e.tableTypes=t,e.id<=0&&t.length>0&&(e.tid=t[0].id)}))},addTable:function(){this.initForm(),this.id=0,this.visible=!0,this.title=this.L("新建桌台")},editTable:function(e){var t=this;this.id=e,this.visible=!0,this.title=this.L("编辑桌台"),this.initForm(),this.request(s["a"].getTable,{id:e}).then((function(e){t.tid=e.tid,t.name=e.name}))},handleCancel:function(){this.visible=!1,this.confirmLoading=!1,this.form=this.$form.createForm(this)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,o){t?e.confirmLoading=!1:(o.id=e.id,o.store_id=e.store_id,e.request(s["a"].saveTable,o).then((function(t){e.$message.success(e.id>0?e.L("编辑成功"):e.L("添加成功")),e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("updateTableList",{})})).catch((function(t){e.confirmLoading=!1})))}))},handleChange:function(e){console.log("selected ".concat(e))},handleBlur:function(){console.log("blur")},handleFocus:function(){console.log("focus")},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},n=r,l=o("2877"),d=Object(l["a"])(n,a,i,!1,null,null,null);t["default"]=d.exports},"6c4d":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("a-tabs",{attrs:{"default-active-key":"1"},on:{change:e.callback}},[t("a-tab-pane",{key:"1",staticStyle:{background:"#fff"},attrs:{tab:e.L("桌台类型列表")}},[t("a-button",{staticStyle:{margin:"10px 20px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.editTableTypeModal.addType()}}},[e._v(e._s(e.L("新建桌台类型")))]),t("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.tableTypeColumn,rowKey:"id","data-source":e.tableTypeData},scopedSlots:e._u([{key:"people",fn:function(o,a){return t("span",{},[e._v(e._s(a.min_people)+"-"+e._s(a.max_people)+e._s(e.L("人")))])}},{key:"table_type_btn",fn:function(o,a){return t("span",{},[t("span",{staticStyle:{color:"#1890ff",cursor:"pointer"},on:{click:function(t){return e.$refs.editTableTypeModal.editType(a.id)}}},[e._v(e._s(e.L("编辑")))]),e._v(" | "),t("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.delTableType(a.id)}}},[e._v(e._s(e.L("删除")))])])}}])}),t("edit-table-type",{ref:"editTableTypeModal",on:{updateTableTypeList:e.getData}})],1),t("a-tab-pane",{key:"2",staticStyle:{background:"#fff"},attrs:{tab:e.L("桌台列表"),"force-render":""}},[t("a-button",{staticStyle:{margin:"10px 20px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.editTableModal.addTable()}}},[e._v(e._s(e.L("新建桌台")))]),t("a-button",{staticClass:"icon_btn",on:{click:function(t){return e.$refs.showTableQrcodeModal.showModal(e.store_id,e.selectedRowKeys)}}},[e._v(e._s(e.L("下载桌台码")))]),t("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.tableColumn,rowKey:"id","data-source":e.tableData,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},scopedSlots:e._u([{key:"table_btn",fn:function(o,a){return t("span",{},[t("span",{staticStyle:{color:"#1890ff",cursor:"pointer"},on:{click:function(t){return e.$refs.editTableModal.editTable(a.id)}}},[e._v(e._s(e.L("编辑")))]),e._v(" | "),t("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.delTable(a.id)}}},[e._v(e._s(e.L("删除")))])])}}])}),t("edit-table",{ref:"editTableModal",on:{updateTableList:e.getData}})],1)],1),t("show-table-qrcode",{ref:"showTableQrcodeModal"})],1)},i=[],s=o("6ea1"),r=o("7a23"),n=o("56a2"),l=o("c75a"),d=[],c=[],u={components:{EditTableType:r["default"],EditTable:n["default"],ShowTableQrcode:l["default"]},data:function(){return{tabKey:1,store_id:0,queryParam:{store_id:0},tableTypeData:[],tableData:[],isAllCheck:!1,tableTypeColumn:d,tableColumn:c,selectedRowKeys:[]}},created:function(){this.tableTypeColumn=[{title:this.L("桌台类型"),dataIndex:"name"},{title:this.L("桌台数"),dataIndex:"num"},{title:this.L("容纳人数"),dataIndex:"people",scopedSlots:{customRender:"people"}},{title:this.L("预订金"),dataIndex:"deposit"},{title:this.L("排号前缀"),dataIndex:"number_prefix"},{title:this.L("使用时间"),dataIndex:"use_time"},{title:this.L("操作"),dataIndex:"table_type_btn",scopedSlots:{customRender:"table_type_btn"}}],this.tableColumn=[{title:this.L("桌台类型"),dataIndex:"type_name"},{title:this.L("桌号"),dataIndex:"name"},{title:this.L("操作"),dataIndex:"table_btn",scopedSlots:{customRender:"table_btn"}}]},mounted:function(){this.store_id=this.$route.query.store_id,this.getData()},watch:{$route:function(){"/merchant/merchant.foodshop/tableList"==this.$route.path&&void 0!=this.$route.query.store_id&&this.getData()}},computed:{hasSelected:function(){return this.selectedRowKeys.length>0}},methods:{start:function(){var e=this;setTimeout((function(){e.selectedRowKeys=[]}),1e3)},onSelectChange:function(e){console.log(e),this.selectedRowKeys=e},allCheck:function(e){console.log(this.allCheck())},delTableType:function(e){var t=this,o={};o.id=e,o.store_id=this.$route.query.store_id,this.$confirm({title:this.L("确定删除该桌台类型?"),content:"",okText:this.L("确定"),okType:"danger",class:"del_center",cancelText:this.L("取消"),onOk:function(){t.request(s["a"].delTableType,o).then((function(e){t.$message.success(t.L("删除成功")),t.getData()}))}})},delTable:function(e){var t=this,o={};o.id=e,o.store_id=this.$route.query.store_id,this.$confirm({title:this.L("确定删除该桌台?"),content:"",okText:this.L("确定"),class:"del_center",okType:"danger",cancelText:this.L("取消"),onOk:function(){t.request(s["a"].delTable,o).then((function(e){t.$message.success(t.L("删除成功")),t.getData()}))}})},callback:function(e){this.tabKey=e,this.getData()},getData:function(){1==this.tabKey?this.getTableTypeList():this.getTableList()},getTableTypeList:function(){var e=this;this.queryParam["store_id"]=this.$route.query.store_id,this.request(s["a"].tableTypeList,this.queryParam).then((function(t){e.tableTypeData=t}))},getTableList:function(){var e=this;this.queryParam["store_id"]=this.$route.query.store_id,this.request(s["a"].tableList,this.queryParam).then((function(t){e.tableData=t}))}}},h=u,p=(o("a38b"),o("2877")),m=Object(p["a"])(h,a,i,!1,null,null,null);t["default"]=m.exports},"6ea1":function(e,t,o){"use strict";var a={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};t["a"]=a},"70b5":function(e,t,o){e.exports=o.p+"img/table_qr.c1da849d.png"},"7a23":function(e,t,o){"use strict";o.r(t);o("b0c0");var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:640,visible:e.visible},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:e.L("桌台类型"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.name,rules:[{required:!0,message:e.L("请输入桌台类型！")}]}],expression:"['name', { initialValue: name, rules: [{ required: true, message: L('请输入桌台类型！') }] }]"}]})],1),t("a-form-item",{attrs:{label:e.L("最少人数"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["min_people",{initialValue:e.min_people,rules:[{required:!0,message:e.L("请输入最少人数！")},{pattern:/^[1-9]\d*$/,message:e.L("请填写大于0的整数！")}]}],expression:"[\n            'min_people',\n            {\n              initialValue: min_people,\n              rules: [\n                { required: true, message: L('请输入最少人数！') },\n                { pattern: /^[1-9]\\d*$/, message: L('请填写大于0的整数！') },\n              ],\n            },\n          ]"}]})],1),t("a-form-item",{attrs:{label:e.L("最多人数"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["max_people",{initialValue:e.max_people,rules:[{required:!0,message:e.L("请输入最多人数！")},{pattern:/^[1-9]\d*$/,message:e.L("请填写大于0的整数！")}]}],expression:"[\n            'max_people',\n            {\n              initialValue: max_people,\n              rules: [\n                { required: true, message: L('请输入最多人数！') },\n                { pattern: /^[1-9]\\d*$/, message: L('请填写大于0的整数！') },\n              ],\n            },\n          ]"}]})],1),t("a-form-item",{attrs:{label:e.L("预定订金"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["deposit",{initialValue:e.deposit,rules:[{pattern:/^[0-9]+(.?)[0-9]*$/,message:e.L("金额输入有误！")}]}],expression:"[\n            'deposit',\n            { initialValue: deposit, rules: [{ pattern: /^[0-9]+(.?)[0-9]*$/, message: L('金额输入有误！') }] },\n          ]"}],attrs:{prefix:"￥"}})],1),t("a-form-item",{attrs:{label:e.L("排号前缀"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.L("在排号时区分桌台类型（如大桌用：D,小桌用S,等，得到的排号D1、D2；S1、S2等）")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["number_prefix",{initialValue:e.number_prefix,rules:[{required:!0,message:e.L("请输入排号前缀！")}]}],expression:"[\n            'number_prefix',\n            { initialValue: number_prefix, rules: [{ required: true, message: L('请输入排号前缀！') }] },\n          ]"}]})],1),t("a-form-item",{attrs:{label:e.L("使用时间"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.L("该类型下的桌台每次使用时间大约是多长时间，如一个小时，那么下一桌大约就要60分钟后才能使用（单位：分钟）")}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["use_time",{initialValue:e.use_time,rules:[{required:!0,message:e.L("请输入使用时间！")}]}],expression:"[\n            'use_time',\n            { initialValue: use_time, rules: [{ required: true, message: L('请输入使用时间！') }] },\n          ]"}],attrs:{min:0}})],1)],1)],1)],1)},i=[],s=o("6ea1"),r={data:function(){return{title:this.L("新建分类"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,store_id:0,name:"",min_people:1,max_people:1,deposit:0,number_prefix:"",use_time:0,visible:!1,confirmLoading:!1,form:this.$form.createForm(this)}},mounted:function(){"undefined"!=typeof this.$route.query.store_id&&(this.store_id=this.$route.query.store_id)},methods:{initForm:function(){this.name="",this.min_people=1,this.max_people=1,this.deposit=0,this.number_prefix="",this.use_time=0},addType:function(){this.initForm(),this.id=0,this.visible=!0,this.title=this.L("新建桌台类型")},editType:function(e){var t=this;this.id=e,this.visible=!0,this.title=this.L("编辑桌台类型"),this.request(s["a"].getTableType,{id:e}).then((function(e){t.name=e.name,t.min_people=e.min_people,t.max_people=e.max_people,t.deposit=e.deposit,t.number_prefix=e.number_prefix,t.use_time=e.use_time}))},handleCancel:function(){this.visible=!1,this.confirmLoading=!1,this.form=this.$form.createForm(this)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,o){t?e.confirmLoading=!1:(o.id=e.id,o.store_id=e.store_id,e.request(s["a"].saveTableType,o).then((function(t){e.$message.success(e.id>0?e.L("编辑成功"):e.L("添加成功")),e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("updateTableTypeList",{})})).catch((function(t){e.confirmLoading=!1})))}))}}},n=r,l=o("2877"),d=Object(l["a"])(n,a,i,!1,null,null,null);t["default"]=d.exports},a38b:function(e,t,o){"use strict";o("c628")},c3b98:function(e,t,o){"use strict";o("4cc6")},c628:function(e,t,o){},c75a:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",{staticClass:"content"},[t("div",{staticClass:"code-box"},[t("div",{staticClass:"code"},[t("img",{attrs:{src:o("70b5")}}),t("div",{staticClass:"title_code"},[t("b",[e._v(e._s(e.L("已装修的桌台码(示例)")))])])]),t("div",{staticClass:"qr_code"},[t("img",{attrs:{src:o("2c00")}}),t("div",{staticClass:"title_qr_code"},[t("b",[e._v(e._s(e.L("普通桌台码(示例)")))])])])]),t("a-radio-group",{staticClass:"code-box",attrs:{value:e.radioValue},on:{change:e.radioChange}},[t("a-radio",{staticClass:"code radio-style",attrs:{value:2}}),t("a-radio",{staticClass:"code radio-style",attrs:{value:1}})],1),t("div",{staticClass:"footer-box"},[t("a-button",{attrs:{type:"primary",icon:"download"},on:{click:e.tableQrcode}},[e._v(" "+e._s(e.L("批量下载"))+" ")]),t("a-button",{on:{click:e.handleCancel}},[e._v(" "+e._s(e.L("取消"))+" ")])],1)],1)])},i=[],s=o("6ea1"),r={data:function(){return{title:this.L("下载桌台二维码"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},store_id:0,selectedTableIds:[],image:"",visible:!1,storeId:0,radioValue:2}},mounted:function(){console.log(this.catFid)},methods:{showModal:function(e,t){this.storeId=e,this.selectedTableIds=t,this.visible=!0},radioChange:function(e){this.radioValue=e.target.value},seeQrcode:function(e){this.visible=!0,this.store_id=e,this.getCode()},tableQrcode:function(){var e=this;this.title=this.L("选择您需要下载的桌台码类型"),this.request(s["a"].downloadQrcodeTable,{store_id:this.storeId,is_common:this.radioValue,table_ids:this.selectedTableIds}).then((function(t){e.url=t.download_url,n(e.url)}))},getCode:function(){var e=this;this.request(s["a"].seeQrcode,{store_id:this.store_id}).then((function(t){e.image=t.qrcode}))},handleCancel:function(){this.visible=!1}}};function n(e){window.open(e)}var l=r,d=(o("c3b98"),o("2877")),c=Object(d["a"])(l,a,i,!1,null,"3cf37498",null);t["default"]=c.exports}}]);