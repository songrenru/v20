(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a8026ee","chunk-0520df42","chunk-0731176e","chunk-25fd3226","chunk-2d0b3786"],{"0242":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?e("div",{staticClass:"content"},[e("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[e("div",{staticClass:"ant-form-item-label fs-16 cr-black"},[t._v(" "+t._s(t.L("热搜词列表"))+" ")]),e("div",{staticClass:"flex align-center justify-between mb-20"},[e("span",{staticClass:"ant-form-explain"},[t._v(t._s(t.L("用于热搜关键词管理")))]),e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.setOpt()}}},[t._v(t._s(t.L("设置")))])],1),e("a-form-model-item",{attrs:{label:t.L("热搜标题")}},[e("div",{staticClass:"flex align-center justify-between"},[e("span",[t._v(t._s(t.L("勾选代表展示 热搜 标题")))]),e("a-checkbox",{attrs:{checked:1==t.formDataDecorate.is_show_title},on:{change:t.isChange}})],1)])],1)],1):t._e(),e("a-modal",{attrs:{title:t.L("热搜词列表"),visible:t.visible,destroyOnClose:!0,width:"60%",cancelText:t.L("取消"),okText:t.L("确定"),bodyStyle:{maxHeight:"700px",overflowY:"auto"}},on:{ok:t.getOpt,cancel:function(e){t.visible=!1}}},[e("HotWordsList",{attrs:{sourceInfo:t.sourceInfo}})],1)],1)},n=[],i=o("a2f8"),s=o("9686"),r=o("8b83"),c={components:{componentDesc:i["default"],HotWordsList:r["default"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:"热搜关键词",desc:"设置推荐热搜关键词后，对应热搜词即可展示在频道页头部"},labelCol:{span:5},wrapperCol:{span:18},formDataDecorate:"",visible:!1}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var o in this.formDataDecorate={},t)this.$set(this.formDataDecorate,o,t[o]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])},methods:{isChange:function(t){this.$set(this.formDataDecorate,"is_show_title",t.target.checked?"1":"2")},getOpt:function(){var t=this,e={source:this.sourceInfo.source||"",source_id:this.sourceInfo.source_id||""};this.request(s["a"].getSearchHotList,e).then((function(e){t.$set(t.formDataDecorate,"list",e.list||[]),t.visible=!1}))},setOpt:function(){this.visible=!0}}},d=c,l=(o("772a"),o("2877")),u=Object(l["a"])(d,a,n,!1,null,"7e1039e1",null);e["default"]=u.exports},"168a":function(t,e,o){"use strict";o.r(e);o("b0c0"),o("4e82");var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"搜索词",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入搜索词名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入搜索词名称'}]}]"}]})],1),e("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"值越大，排序越前"}},[e("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},n=[],i=o("d043"),s={props:{sourceInfo:{type:[String,Object],default:""}},data:function(){return{title:"新建搜索词",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0,is_hot:"0"},id:"0"}},mounted:function(){this.getEditInfo()},methods:{add:function(){this.visible=!0,this.id="0",this.detail={id:0,name:"",sort:0,is_hot:"0"}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),console.log(this.getEditInfo()),this.id>0?this.title="编辑搜索词":this.title="新建搜索词"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,o){e?t.confirmLoading=!1:(o.id=t.id,o.source=t.sourceInfo.source,o.source_id=t.sourceInfo.source_id,t.request(i["a"].getHotWordsEdit,o).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",o)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)},getEditInfo:function(){var t=this;this.request(i["a"].getWordDetail,{id:this.id,source:this.sourceInfo.source,source_id:this.sourceInfo.source_id}).then((function(e){t.detail=e}))}}},r=s,c=o("2877"),d=Object(c["a"])(r,a,n,!1,null,null,null);e["default"]=d.exports},2909:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var a=o("6b75");function n(t){if(Array.isArray(t))return Object(a["a"])(t)}o("a4d3"),o("e01a"),o("d3b7"),o("d28b"),o("3ca3"),o("ddb0"),o("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=o("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||i(t)||Object(s["a"])(t)||r()}},"41ffa":function(t,e,o){"use strict";o("7370")},"497b":function(t,e,o){"use strict";o("b7db")},7370:function(t,e,o){},"772a":function(t,e,o){"use strict";o("e3c3")},"7fe1":function(t,e,o){},"8b83":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("a-button",{staticStyle:{margin:"15px 20px 15px auto"},attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v("新建搜索词")]),e("a-button",{staticClass:"icon_btn",on:{click:function(e){return t.delete_selected_word()}}},[t._v("删除")]),e("a-table",{attrs:{columns:t.columns,"data-source":t.searchHotList,pagination:t.pagination,rowKey:"pigcms_id","row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.tableChange},scopedSlots:t._u([t._l(["sort"],(function(o){return{key:o,fn:function(a,n,i){return[e("div",{key:o},[n.editable?e("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[e("template",{slot:"title"},[t._v("值越大，搜索词排序越靠前")]),e("a-input",{staticStyle:{margin:"-5px 2px",width:"56px"},attrs:{value:a},on:{change:function(e){return t.handleChange(e.target.value,i,o)}}})],2):[t._v(" "+t._s(a)+" ")],e("span",{staticClass:"editable-row-operations"},[n.editable?e("span",[e("a",{on:{click:function(){return t.save(i)}}},[t._v("保存")]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(){return t.cancel(i)}}},[t._v("取消")])],1):e("span",[e("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(i)}}},[t._v("编辑")])])])],2)]}}})),{key:"action",fn:function(o,a){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.createModal.edit(a.pigcms_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(a.pigcms_id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}],null,!0)}),e("create-search-hot-words",{ref:"createModal",attrs:{sourceInfo:t.sourceInfo},on:{ok:t.handleOk}})],1)},n=[],i=o("ade3"),s=o("2909"),r=o("5530"),c=(o("d81d"),o("4e82"),o("d043")),d=o("168a"),l={0:{status:"default",text:"否"},1:{status:"error",text:"是"}},u=[],m={name:"SearchHotList",components:{CreateSearchHotWords:d["default"]},props:{sourceInfo:{type:[String,Object],default:""}},data:function(){return this.cacheData=u.map((function(t){return Object(r["a"])({},t)})),{sortedInfo:null,searchHotList:u,queryParam:{page:1,pageSize:10},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:"",selectedRowKeys:[]}},filters:{statusFilter:function(t){return l[t].text},statusTypeFilter:function(t){return l[t].status}},created:function(){},computed:{columns:function(){var t=this.sortedInfo,e=this.filteredInfo;t=t||{},e=e||{};var o=[{title:"关键词",dataIndex:"name"},{title:"排序",dataIndex:"sort",width:"20%",scopedSlots:{customRender:"sort"},sorter:function(t,e){return t.sort-e.sort}},{title:"操作",dataIndex:"",scopedSlots:{customRender:"action"}}];return o}},mounted:function(){this.getSearchHotList()},methods:Object(i["a"])({delete_selected_word:function(){var t=this;this.selectedRowKeys.length<1?this.$message.success("请选择一条记录"):this.request(c["a"].delWords,{ids:this.selectedRowKeys}).then((function(e){t.getSearchHotList(),t.$message.success("删除成功")}))},onSelectChange:function(t){this.selectedRowKeys=t},getSearchHotList:function(){var t=this;this.$set(this.queryParam,"source",this.sourceInfo.source),this.$set(this.queryParam,"source_id",this.sourceInfo.source_id),this.request(c["a"].getHotWordsList,this.queryParam).then((function(e){console.log("res",e),t.searchHotList=e.list,t.pagination.total=e.total}))},add:function(){},handleOk:function(){this.getSearchHotList()},deleteConfirm:function(t){var e=this;this.request(c["a"].delWords,{ids:[t]}).then((function(t){e.getSearchHotList(),e.$message.success("删除成功")}))},cancel:function(){},tableChange:function(t,e,o){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getSearchHotList())},handleChange:function(t,e,o){var a=Object(s["a"])(this.searchHotList),n=a[e];n&&(n[o]=t,this.searchHotList=a)},edit:function(t){var e=Object(s["a"])(this.searchHotList),o=e[t];this.editingKey=t,o&&(o.editable=!0,this.searchHotList=e)},save:function(t){var e=this,o=Object(s["a"])(this.searchHotList),a=Object(s["a"])(this.cacheData),n=o[t];a[t];n&&(delete n.editable,this.searchHotList=o,Object.assign(n,this.cacheData[t]),this.cacheData=a),console.log(n),this.request(c["a"].getHotWordsEditSort,{id:n.pigcms_id,sort:n.sort}).then((function(t){e.getSearchHotList()})),this.editingKey=""}},"cancel",(function(t){var e=Object(s["a"])(this.searchHotList),o=e[t];this.editingKey="",o&&(Object.assign(o,this.cacheData[t]),delete o.editable,this.searchHotList=e),this.getSearchHotList()}))},f=m,h=(o("497b"),o("41ffa"),o("2877")),g=Object(h["a"])(f,a,n,!1,null,"0c2704d0",null);e["default"]=g.exports},9686:function(t,e,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};e["a"]=a},a2f8:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return t.content?e("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[e("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),e("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],i={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},s=i,r=(o("f0ca"),o("2877")),c=Object(r["a"])(s,a,n,!1,null,"9947987e",null);e["default"]=c.exports},b7db:function(t,e,o){},d043:function(t,e,o){"use strict";var a={getHotWordsList:"/common/platform.HotWords/getHotWordsList",getWordDetail:"/common/platform.HotWords/getWordDetail",getHotWordsEdit:"/common/platform.HotWords/getHotWordsEdit",getHotWordsEditSort:"/common/platform.HotWords/getHotWordsEditSort",delWords:"/common/platform.HotWords/delWords"};e["a"]=a},e3c3:function(t,e,o){},f0ca:function(t,e,o){"use strict";o("7fe1")}}]);