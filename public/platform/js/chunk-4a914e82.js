(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a914e82","chunk-3ebf396c","chunk-2d0b3786"],{"02ab":function(t,e,o){"use strict";o("d5af")},1723:function(t,e,o){"use strict";o("2fa18")},2909:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}o("a4d3"),o("e01a"),o("d3b7"),o("d28b"),o("3ca3"),o("ddb0"),o("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=o("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||Object(r["a"])(t)||s()}},"2fa18":function(t,e,o){},"65eb":function(t,e,o){"use strict";var n={getConfig:"/common/platform.system.config/getConfig",saveConfig:"/common/platform.system.config/saveConfig",getSearchHotWords:"/common/platform.coupon/getSearchHotWords",getWordDetail:"/common/platform.coupon/getWordDetail",saveWords:"/common/platform.coupon/saveWords",saveWordsSort:"/common/platform.coupon/saveWordsSort",delWords:"/common/platform.coupon/delWords",getBrandSelectCoupon:"/common/platform.coupon/getBrandSelectCoupon",chooseBrandSelectCoupon:"/common/platform.coupon/chooseBrandSelectCoupon",addBrandCoupon:"/common/platform.coupon/addBrandCoupon",delBrandCoupon:"/common/platform.coupon/delBrandCoupon",sysCouponUseRecords:"/common/platform.coupon/sysCouponUseRecords",merCouponUseRecords:"/merchant/merchant.coupon/merCouponUseRecords",getStoreList:"/merchant/merchant.store/getStoreList"};e["a"]=n},9255:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[o("a-spin",{attrs:{spinning:t.confirmLoading}},[o("a-form",{attrs:{form:t.form}},[o("a-form-item",{attrs:{label:"搜索词",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入搜索词名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入搜索词名称'}]}]"}]})],1),o("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"值越大，排序越前"}},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},a=[],i=o("65eb"),r={data:function(){return{title:"新建搜索词",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0,is_hot:"0"},id:"0"}},mounted:function(){this.getEditInfo(),console.log(this.catFid)},methods:{add:function(){this.visible=!0,this.id="0",this.detail={id:0,name:"",sort:0,is_hot:"0"}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),this.id>0?this.title="编辑搜索词":this.title="新建搜索词"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,o){e?t.confirmLoading=!1:(o.id=t.id,t.request(i["a"].saveWords,o).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",o)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)},getEditInfo:function(){var t=this;this.request(i["a"].getWordDetail,{id:this.id}).then((function(e){t.detail=e}))}}},s=r,c=o("2877"),l=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},d5af:function(t,e,o){},f73c:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[o("a-card",{attrs:{bordered:!1}},[o("a-button",{staticStyle:{margin:"15px 20px 15px auto"},attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v("新建搜索词")]),o("a-button",{staticClass:"icon_btn",on:{click:function(e){return t.delete_selected_word()}}},[t._v("删除")]),o("a-table",{attrs:{columns:t.columns,"data-source":t.searchHotList,pagination:t.pagination,rowKey:"id","row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.tableChange},scopedSlots:t._u([t._l(["sort"],(function(e){return{key:e,fn:function(n,a,i){return[o("div",{key:e},[a.editable?o("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[o("template",{slot:"title"},[t._v("值越大，搜索词排序越靠前")]),o("a-input",{staticStyle:{margin:"-5px 2px",width:"56px"},attrs:{value:n},on:{change:function(o){return t.handleChange(o.target.value,i,e)}}})],2):[t._v(" "+t._s(n)+" ")],o("span",{staticClass:"editable-row-operations"},[a.editable?o("span",[o("a",{on:{click:function(){return t.save(i)}}},[t._v("保存")]),o("a-divider",{attrs:{type:"vertical"}}),o("a",{on:{click:function(){return t.cancel(i)}}},[t._v("取消")])],1):o("span",[o("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(i)}}},[t._v("编辑")])])])],2)]}}})),{key:"action",fn:function(e,n){return o("span",{},[o("a",{on:{click:function(e){return t.$refs.createModal.edit(n.id)}}},[t._v("编辑")]),o("a-divider",{attrs:{type:"vertical"}}),o("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.cancel}},[o("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}],null,!0)}),o("create-search-hot-words",{ref:"createModal",on:{ok:t.handleOk}})],1)],1)},a=[],i=o("ade3"),r=o("2909"),s=o("5530"),c=(o("d81d"),o("c1df"),o("65eb")),l=o("9255"),d={0:{status:"default",text:"否"},1:{status:"error",text:"是"}},u=[],h={name:"SearchHotList",components:{CreateSearchHotWords:l["default"]},data:function(){return this.cacheData=u.map((function(t){return Object(s["a"])({},t)})),{sortedInfo:null,searchHotList:u,queryParam:{page:1,pageSize:10},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:"",selectedRowKeys:[]}},filters:{statusFilter:function(t){return d[t].text},statusTypeFilter:function(t){return d[t].status}},created:function(){},computed:{columns:function(){var t=this.sortedInfo,e=this.filteredInfo;t=t||{},e=e||{};var o=[{title:"关键词",dataIndex:"name"},{title:"排序",dataIndex:"sort",width:"20%",scopedSlots:{customRender:"sort"},sorter:function(t,e){return t.sort-e.sort}},{title:"操作",dataIndex:"",scopedSlots:{customRender:"action"}}];return o}},mounted:function(){this.getSearchHotList()},methods:Object(i["a"])({delete_selected_word:function(){var t=this;this.selectedRowKeys.length<1?this.$message.success("请选择一条记录"):this.request(c["a"].delWords,{ids:this.selectedRowKeys}).then((function(e){t.getSearchHotList(),t.$message.success("删除成功")}))},onSelectChange:function(t){console.log(t),this.selectedRowKeys=t},getSearchHotList:function(){var t=this;this.request(c["a"].getSearchHotWords,this.queryParam).then((function(e){console.log("res",e),t.searchHotList=e.list,t.pagination.total=e.total}))},add:function(){},handleOk:function(){this.getSearchHotList()},deleteConfirm:function(t){var e=this;this.request(c["a"].delWords,{ids:[t]}).then((function(t){e.getSearchHotList(),e.$message.success("删除成功")}))},cancel:function(){},tableChange:function(t,e,o){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getSearchHotList())},handleChange:function(t,e,o){var n=Object(r["a"])(this.searchHotList),a=n[e];a&&(a[o]=t,this.searchHotList=n)},edit:function(t){var e=Object(r["a"])(this.searchHotList),o=e[t];this.editingKey=t,o&&(o.editable=!0,this.searchHotList=e)},save:function(t){var e=this,o=Object(r["a"])(this.searchHotList),n=Object(r["a"])(this.cacheData),a=o[t];n[t];a&&(delete a.editable,this.searchHotList=o,Object.assign(a,this.cacheData[t]),this.cacheData=n),console.log(a),this.request(c["a"].saveWordsSort,{id:a.id,sort:a.sort}).then((function(t){e.getSearchHotList()})),this.editingKey=""}},"cancel",(function(t){var e=Object(r["a"])(this.searchHotList),o=e[t];this.editingKey="",o&&(Object.assign(o,this.cacheData[t]),delete o.editable,this.searchHotList=e),this.getSearchHotList()}))},f=h,m=(o("02ab"),o("1723"),o("2877")),p=Object(m["a"])(f,n,a,!1,null,"46d3dfbd",null);e["default"]=p.exports}}]);