(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3feb2456","chunk-3ebf396c","chunk-748b470d"],{"4bb5d":function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o("ea87");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}o("6073"),o("2c5c"),o("c5cb"),o("36fa"),o("02bf"),o("a617"),o("17c8");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=o("9877");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||Object(i["a"])(t)||s()}},"65eb":function(t,e,o){"use strict";var n={getConfig:"/common/platform.system.config/getConfig",saveConfig:"/common/platform.system.config/saveConfig",getSearchHotWords:"/common/platform.coupon/getSearchHotWords",getWordDetail:"/common/platform.coupon/getWordDetail",saveWords:"/common/platform.coupon/saveWords",saveWordsSort:"/common/platform.coupon/saveWordsSort",delWords:"/common/platform.coupon/delWords",getBrandSelectCoupon:"/common/platform.coupon/getBrandSelectCoupon",chooseBrandSelectCoupon:"/common/platform.coupon/chooseBrandSelectCoupon",addBrandCoupon:"/common/platform.coupon/addBrandCoupon",delBrandCoupon:"/common/platform.coupon/delBrandCoupon",sysCouponUseRecords:"/common/platform.coupon/sysCouponUseRecords",sysCouponGetRecords:"/common/platform.coupon/sysCouponGetRecords",exportSysGetRecords:"/common/platform.coupon/exportSysGetRecords",merCouponUseRecords:"/merchant/merchant.coupon/merCouponUseRecords",merCouponGetRecords:"/merchant/merchant.coupon/merCouponGetRecords",exportMerGetRecords:"/merchant/merchant.coupon/exportMerGetRecords",getStoreList:"/merchant/merchant.store/getStoreList",updateUse:"/merchant/merchant.coupon/updateUse"};e["a"]=n},"79c9":function(t,e,o){},"7e97":function(t,e,o){"use strict";o("84b3")},"84b3":function(t,e,o){},9255:function(t,e,o){"use strict";o.r(e);o("54f8"),o("3849");var n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"搜索词",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入搜索词名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入搜索词名称'}]}]"}]})],1),e("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"值越大，排序越前"}},[e("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},a=[],r=o("65eb"),i={data:function(){return{title:"新建搜索词",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0,is_hot:"0"},id:"0"}},mounted:function(){this.getEditInfo(),console.log(this.catFid)},methods:{add:function(){this.visible=!0,this.id="0",this.detail={id:0,name:"",sort:0,is_hot:"0"}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),this.id>0?this.title="编辑搜索词":this.title="新建搜索词"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,o){e?t.confirmLoading=!1:(o.id=t.id,t.request(r["a"].saveWords,o).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",o)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)},getEditInfo:function(){var t=this;this.request(r["a"].getWordDetail,{id:this.id}).then((function(e){t.detail=e}))}}},s=i,c=o("0b56"),l=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},d6db:function(t,e,o){"use strict";o("79c9")},f73c:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[e("a-card",{attrs:{bordered:!1}},[e("a-button",{staticStyle:{margin:"15px 20px 15px auto"},attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v("新建搜索词")]),e("a-button",{staticClass:"icon_btn",on:{click:function(e){return t.delete_selected_word()}}},[t._v("删除")]),e("a-table",{attrs:{columns:t.columns,"data-source":t.searchHotList,pagination:t.pagination,rowKey:"id","row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.tableChange},scopedSlots:t._u([t._l(["sort"],(function(o){return{key:o,fn:function(n,a,r){return[e("div",{key:o},[a.editable?e("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[e("template",{slot:"title"},[t._v("值越大，搜索词排序越靠前")]),e("a-input",{staticStyle:{margin:"-5px 2px",width:"56px"},attrs:{value:n},on:{change:function(e){return t.handleChange(e.target.value,r,o)}}})],2):[t._v(" "+t._s(n)+" ")],e("span",{staticClass:"editable-row-operations"},[a.editable?e("span",[e("a",{on:{click:function(){return t.save(r)}}},[t._v("保存")]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(){return t.cancel(r)}}},[t._v("取消")])],1):e("span",[e("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(r)}}},[t._v("编辑")])])])],2)]}}})),{key:"action",fn:function(o,n){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.createModal.edit(n.id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}],null,!0)}),e("create-search-hot-words",{ref:"createModal",on:{ok:t.handleOk}})],1)],1)},a=[],r=o("bcc3"),i=o("4bb5d"),s=o("8ee2"),c=(o("075f"),o("3849"),o("2f42"),o("65eb")),l=o("9255"),d={0:{status:"default",text:"否"},1:{status:"error",text:"是"}},u=[],h={name:"SearchHotList",components:{CreateSearchHotWords:l["default"]},data:function(){return this.cacheData=u.map((function(t){return Object(s["a"])({},t)})),{sortedInfo:null,searchHotList:u,queryParam:{page:1,pageSize:10},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:"",selectedRowKeys:[]}},filters:{statusFilter:function(t){return d[t].text},statusTypeFilter:function(t){return d[t].status}},created:function(){},computed:{columns:function(){var t=this.sortedInfo,e=this.filteredInfo;t=t||{},e=e||{};var o=[{title:"关键词",dataIndex:"name"},{title:"排序",dataIndex:"sort",width:"20%",scopedSlots:{customRender:"sort"},sorter:function(t,e){return t.sort-e.sort}},{title:"操作",dataIndex:"",scopedSlots:{customRender:"action"}}];return o}},mounted:function(){this.getSearchHotList()},methods:Object(r["a"])({delete_selected_word:function(){var t=this;this.selectedRowKeys.length<1?this.$message.success("请选择一条记录"):this.request(c["a"].delWords,{ids:this.selectedRowKeys}).then((function(e){t.getSearchHotList(),t.$message.success("删除成功")}))},onSelectChange:function(t){console.log(t),this.selectedRowKeys=t},getSearchHotList:function(){var t=this;this.request(c["a"].getSearchHotWords,this.queryParam).then((function(e){console.log("res",e),t.searchHotList=e.list,t.pagination.total=e.total}))},add:function(){},handleOk:function(){this.getSearchHotList()},deleteConfirm:function(t){var e=this;this.request(c["a"].delWords,{ids:[t]}).then((function(t){e.getSearchHotList(),e.$message.success("删除成功")}))},cancel:function(){},tableChange:function(t,e,o){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getSearchHotList())},handleChange:function(t,e,o){var n=Object(i["a"])(this.searchHotList),a=n[e];a&&(a[o]=t,this.searchHotList=n)},edit:function(t){var e=Object(i["a"])(this.searchHotList),o=e[t];this.editingKey=t,o&&(o.editable=!0,this.searchHotList=e)},save:function(t){var e=this,o=Object(i["a"])(this.searchHotList),n=Object(i["a"])(this.cacheData),a=o[t];n[t];a&&(delete a.editable,this.searchHotList=o,Object.assign(a,this.cacheData[t]),this.cacheData=n),console.log(a),this.request(c["a"].saveWordsSort,{id:a.id,sort:a.sort}).then((function(t){e.getSearchHotList()})),this.editingKey=""}},"cancel",(function(t){var e=Object(i["a"])(this.searchHotList),o=e[t];this.editingKey="",o&&(Object.assign(o,this.cacheData[t]),delete o.editable,this.searchHotList=e),this.getSearchHotList()}))},m=h,f=(o("d6db"),o("7e97"),o("0b56")),p=Object(f["a"])(m,n,a,!1,null,"46d3dfbd",null);e["default"]=p.exports}}]);