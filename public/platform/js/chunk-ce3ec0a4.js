(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce3ec0a4","chunk-5ce9e80e","chunk-44565da4","chunk-25fd3226","chunk-2d0b3786"],{"0242":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?o("div",{staticClass:"content"},[o("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[o("div",{staticClass:"ant-form-item-label fs-16 cr-black"},[t._v(" "+t._s(t.L("热搜词列表"))+" ")]),o("div",{staticClass:"flex align-center justify-between mb-20"},[o("span",{staticClass:"ant-form-explain"},[t._v(t._s(t.L("用于热搜关键词管理")))]),o("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.setOpt()}}},[t._v(t._s(t.L("设置")))])],1),o("a-form-model-item",{attrs:{label:t.L("热搜标题")}},[o("div",{staticClass:"flex align-center justify-between"},[o("span",[t._v(t._s(t.L("勾选代表展示 热搜 标题")))]),o("a-checkbox",{attrs:{checked:1==t.formDataDecorate.is_show_title},on:{change:t.isChange}})],1)])],1)],1):t._e(),o("a-modal",{attrs:{title:t.L("热搜词列表"),visible:t.visible,destroyOnClose:!0,width:"60%",cancelText:t.L("取消"),okText:t.L("确定"),bodyStyle:{maxHeight:"700px",overflowY:"auto"}},on:{ok:t.getOpt,cancel:function(e){t.visible=!1}}},[o("HotWordsList",{attrs:{sourceInfo:t.sourceInfo}})],1)],1)},n=[],i=o("a2f8"),s=o("9686"),r=o("8b83"),c={components:{componentDesc:i["default"],HotWordsList:r["default"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:"热搜关键词",desc:"设置推荐热搜关键词后，对应热搜词即可展示在频道页头部"},labelCol:{span:5},wrapperCol:{span:18},formDataDecorate:"",visible:!1}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var o in this.formDataDecorate={},t)this.$set(this.formDataDecorate,o,t[o]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])},methods:{isChange:function(t){this.$set(this.formDataDecorate,"is_show_title",t.target.checked?"1":"2")},getOpt:function(){var t=this,e={source:this.sourceInfo.source||"",source_id:this.sourceInfo.source_id||""};this.request(s["a"].getSearchHotList,e).then((function(e){t.$set(t.formDataDecorate,"list",e.list||[]),t.visible=!1}))},setOpt:function(){this.visible=!0}}},l=c,d=(o("772a"),o("2877")),u=Object(d["a"])(l,a,n,!1,null,"7e1039e1",null);e["default"]=u.exports},"168a":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[o("a-spin",{attrs:{spinning:t.confirmLoading}},[o("a-form",{attrs:{form:t.form}},[o("a-form-item",{attrs:{label:"搜索词",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入搜索词名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入搜索词名称'}]}]"}]})],1),o("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"值越大，排序越前"}},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},n=[],i=o("d043"),s={props:{sourceInfo:{type:[String,Object],default:""}},data:function(){return{title:"新建搜索词",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0,is_hot:"0"},id:"0"}},mounted:function(){this.getEditInfo()},methods:{add:function(){this.visible=!0,this.id="0",this.detail={id:0,name:"",sort:0,is_hot:"0"}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),console.log(this.getEditInfo()),this.id>0?this.title="编辑搜索词":this.title="新建搜索词"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,o){e?t.confirmLoading=!1:(o.id=t.id,o.source=t.sourceInfo.source,o.source_id=t.sourceInfo.source_id,t.request(i["a"].getHotWordsEdit,o).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",o)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)},getEditInfo:function(){var t=this;this.request(i["a"].getWordDetail,{id:this.id,source:this.sourceInfo.source,source_id:this.sourceInfo.source_id}).then((function(e){t.detail=e}))}}},r=s,c=o("2877"),l=Object(c["a"])(r,a,n,!1,null,null,null);e["default"]=l.exports},2909:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var a=o("6b75");function n(t){if(Array.isArray(t))return Object(a["a"])(t)}o("a4d3"),o("e01a"),o("d3b7"),o("d28b"),o("3ca3"),o("ddb0"),o("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=o("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||i(t)||Object(s["a"])(t)||r()}},"41ffa":function(t,e,o){"use strict";o("67de")},"497b":function(t,e,o){"use strict";o("c7e7")},"67de":function(t,e,o){},"772a":function(t,e,o){"use strict";o("ee05")},"8b83":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("a-button",{staticStyle:{margin:"15px 20px 15px auto"},attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v("新建搜索词")]),o("a-button",{staticClass:"icon_btn",on:{click:function(e){return t.delete_selected_word()}}},[t._v("删除")]),o("a-table",{attrs:{columns:t.columns,"data-source":t.searchHotList,pagination:t.pagination,rowKey:"pigcms_id","row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.tableChange},scopedSlots:t._u([t._l(["sort"],(function(e){return{key:e,fn:function(a,n,i){return[o("div",{key:e},[n.editable?o("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[o("template",{slot:"title"},[t._v("值越大，搜索词排序越靠前")]),o("a-input",{staticStyle:{margin:"-5px 2px",width:"56px"},attrs:{value:a},on:{change:function(o){return t.handleChange(o.target.value,i,e)}}})],2):[t._v(" "+t._s(a)+" ")],o("span",{staticClass:"editable-row-operations"},[n.editable?o("span",[o("a",{on:{click:function(){return t.save(i)}}},[t._v("保存")]),o("a-divider",{attrs:{type:"vertical"}}),o("a",{on:{click:function(){return t.cancel(i)}}},[t._v("取消")])],1):o("span",[o("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(i)}}},[t._v("编辑")])])])],2)]}}})),{key:"action",fn:function(e,a){return o("span",{},[o("a",{on:{click:function(e){return t.$refs.createModal.edit(a.pigcms_id)}}},[t._v("编辑")]),o("a-divider",{attrs:{type:"vertical"}}),o("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(a.pigcms_id)},cancel:t.cancel}},[o("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}],null,!0)}),o("create-search-hot-words",{ref:"createModal",attrs:{sourceInfo:t.sourceInfo},on:{ok:t.handleOk}})],1)},n=[],i=o("ade3"),s=o("2909"),r=o("5530"),c=(o("d81d"),o("4e82"),o("d043")),l=o("168a"),d={0:{status:"default",text:"否"},1:{status:"error",text:"是"}},u=[],m={name:"SearchHotList",components:{CreateSearchHotWords:l["default"]},props:{sourceInfo:{type:[String,Object],default:""}},data:function(){return this.cacheData=u.map((function(t){return Object(r["a"])({},t)})),{sortedInfo:null,searchHotList:u,queryParam:{page:1,pageSize:10},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:"",selectedRowKeys:[]}},filters:{statusFilter:function(t){return d[t].text},statusTypeFilter:function(t){return d[t].status}},created:function(){},computed:{columns:function(){var t=this.sortedInfo,e=this.filteredInfo;t=t||{},e=e||{};var o=[{title:"关键词",dataIndex:"name"},{title:"排序",dataIndex:"sort",width:"20%",scopedSlots:{customRender:"sort"},sorter:function(t,e){return t.sort-e.sort}},{title:"操作",dataIndex:"",scopedSlots:{customRender:"action"}}];return o}},mounted:function(){this.getSearchHotList()},methods:Object(i["a"])({delete_selected_word:function(){var t=this;this.selectedRowKeys.length<1?this.$message.success("请选择一条记录"):this.request(c["a"].delWords,{ids:this.selectedRowKeys}).then((function(e){t.getSearchHotList(),t.$message.success("删除成功")}))},onSelectChange:function(t){this.selectedRowKeys=t},getSearchHotList:function(){var t=this;this.$set(this.queryParam,"source",this.sourceInfo.source),this.$set(this.queryParam,"source_id",this.sourceInfo.source_id),this.request(c["a"].getHotWordsList,this.queryParam).then((function(e){console.log("res",e),t.searchHotList=e.list,t.pagination.total=e.total}))},add:function(){},handleOk:function(){this.getSearchHotList()},deleteConfirm:function(t){var e=this;this.request(c["a"].delWords,{ids:[t]}).then((function(t){e.getSearchHotList(),e.$message.success("删除成功")}))},cancel:function(){},tableChange:function(t,e,o){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getSearchHotList())},handleChange:function(t,e,o){var a=Object(s["a"])(this.searchHotList),n=a[e];n&&(n[o]=t,this.searchHotList=a)},edit:function(t){var e=Object(s["a"])(this.searchHotList),o=e[t];this.editingKey=t,o&&(o.editable=!0,this.searchHotList=e)},save:function(t){var e=this,o=Object(s["a"])(this.searchHotList),a=Object(s["a"])(this.cacheData),n=o[t];a[t];n&&(delete n.editable,this.searchHotList=o,Object.assign(n,this.cacheData[t]),this.cacheData=a),console.log(n),this.request(c["a"].getHotWordsEditSort,{id:n.pigcms_id,sort:n.sort}).then((function(t){e.getSearchHotList()})),this.editingKey=""}},"cancel",(function(t){var e=Object(s["a"])(this.searchHotList),o=e[t];this.editingKey="",o&&(Object.assign(o,this.cacheData[t]),delete o.editable,this.searchHotList=e),this.getSearchHotList()}))},f=m,h=(o("497b"),o("41ffa"),o("2877")),g=Object(h["a"])(f,a,n,!1,null,"0c2704d0",null);e["default"]=g.exports},9686:function(t,e,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};e["a"]=a},"9cea":function(t,e,o){},a2f8:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.content?o("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[o("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),o("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],i={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},s=i,r=(o("f0ca"),o("2877")),c=Object(r["a"])(s,a,n,!1,null,"9947987e",null);e["default"]=c.exports},c7e7:function(t,e,o){},d043:function(t,e,o){"use strict";var a={getHotWordsList:"/common/platform.HotWords/getHotWordsList",getWordDetail:"/common/platform.HotWords/getWordDetail",getHotWordsEdit:"/common/platform.HotWords/getHotWordsEdit",getHotWordsEditSort:"/common/platform.HotWords/getHotWordsEditSort",delWords:"/common/platform.HotWords/delWords"};e["a"]=a},ee05:function(t,e,o){},f0ca:function(t,e,o){"use strict";o("9cea")}}]);