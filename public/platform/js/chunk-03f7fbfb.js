(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03f7fbfb","chunk-25fd3226","chunk-2d0b3786"],{"168a":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"搜索词",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入搜索词名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入搜索词名称'}]}]"}]})],1),i("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"值越大，排序越前"}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},n=[],s=i("d043"),a={props:{sourceInfo:{type:[String,Object],default:""}},data:function(){return{title:"新建搜索词",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0,is_hot:"0"},id:"0"}},mounted:function(){this.getEditInfo()},methods:{add:function(){this.visible=!0,this.id="0",this.detail={id:0,name:"",sort:0,is_hot:"0"}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),console.log(this.getEditInfo()),this.id>0?this.title="编辑搜索词":this.title="新建搜索词"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(i.id=t.id,i.source=t.sourceInfo.source,i.source_id=t.sourceInfo.source_id,t.request(s["a"].getHotWordsEdit,i).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",i)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)},getEditInfo:function(){var t=this;this.request(s["a"].getWordDetail,{id:this.id,source:this.sourceInfo.source,source_id:this.sourceInfo.source_id}).then((function(e){t.detail=e}))}}},r=a,c=i("2877"),l=Object(c["a"])(r,o,n,!1,null,null,null);e["default"]=l.exports},2592:function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var o=i("6b75");function n(t){if(Array.isArray(t))return Object(o["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=i("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||s(t)||Object(a["a"])(t)||r()}},"351f":function(t,e,i){},"41ff":function(t,e,i){"use strict";i("2592")},"497b":function(t,e,i){"use strict";i("351f")},"8b83":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a-button",{staticStyle:{margin:"15px 20px 15px auto"},attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v("新建搜索词")]),i("a-button",{staticClass:"icon_btn",on:{click:function(e){return t.delete_selected_word()}}},[t._v("删除")]),i("a-table",{attrs:{columns:t.columns,"data-source":t.searchHotList,pagination:t.pagination,rowKey:"pigcms_id","row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.tableChange},scopedSlots:t._u([t._l(["sort"],(function(e){return{key:e,fn:function(o,n,s){return[i("div",{key:e},[n.editable?i("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[i("template",{slot:"title"},[t._v("值越大，搜索词排序越靠前")]),i("a-input",{staticStyle:{margin:"-5px 2px",width:"56px"},attrs:{value:o},on:{change:function(i){return t.handleChange(i.target.value,s,e)}}})],2):[t._v(" "+t._s(o)+" ")],i("span",{staticClass:"editable-row-operations"},[n.editable?i("span",[i("a",{on:{click:function(){return t.save(s)}}},[t._v("保存")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(){return t.cancel(s)}}},[t._v("取消")])],1):i("span",[i("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(s)}}},[t._v("编辑")])])])],2)]}}})),{key:"action",fn:function(e,o){return i("span",{},[i("a",{on:{click:function(e){return t.$refs.createModal.edit(o.pigcms_id)}}},[t._v("编辑")]),i("a-divider",{attrs:{type:"vertical"}}),i("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(o.pigcms_id)},cancel:t.cancel}},[i("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}],null,!0)}),i("create-search-hot-words",{ref:"createModal",attrs:{sourceInfo:t.sourceInfo},on:{ok:t.handleOk}})],1)},n=[],s=i("ade3"),a=i("2909"),r=i("5530"),c=(i("d81d"),i("4e82"),i("d043")),l=i("168a"),d={0:{status:"default",text:"否"},1:{status:"error",text:"是"}},u=[],h={name:"SearchHotList",components:{CreateSearchHotWords:l["default"]},props:{sourceInfo:{type:[String,Object],default:""}},data:function(){return this.cacheData=u.map((function(t){return Object(r["a"])({},t)})),{sortedInfo:null,searchHotList:u,queryParam:{page:1,pageSize:10},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:"",selectedRowKeys:[]}},filters:{statusFilter:function(t){return d[t].text},statusTypeFilter:function(t){return d[t].status}},created:function(){},computed:{columns:function(){var t=this.sortedInfo,e=this.filteredInfo;t=t||{},e=e||{};var i=[{title:"关键词",dataIndex:"name"},{title:"排序",dataIndex:"sort",width:"20%",scopedSlots:{customRender:"sort"},sorter:function(t,e){return t.sort-e.sort}},{title:"操作",dataIndex:"",scopedSlots:{customRender:"action"}}];return i}},mounted:function(){this.getSearchHotList()},methods:Object(s["a"])({delete_selected_word:function(){var t=this;this.selectedRowKeys.length<1?this.$message.success("请选择一条记录"):this.request(c["a"].delWords,{ids:this.selectedRowKeys}).then((function(e){t.getSearchHotList(),t.$message.success("删除成功")}))},onSelectChange:function(t){this.selectedRowKeys=t},getSearchHotList:function(){var t=this;this.$set(this.queryParam,"source",this.sourceInfo.source),this.$set(this.queryParam,"source_id",this.sourceInfo.source_id),this.request(c["a"].getHotWordsList,this.queryParam).then((function(e){console.log("res",e),t.searchHotList=e.list,t.pagination.total=e.total}))},add:function(){},handleOk:function(){this.getSearchHotList()},deleteConfirm:function(t){var e=this;this.request(c["a"].delWords,{ids:[t]}).then((function(t){e.getSearchHotList(),e.$message.success("删除成功")}))},cancel:function(){},tableChange:function(t,e,i){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getSearchHotList())},handleChange:function(t,e,i){var o=Object(a["a"])(this.searchHotList),n=o[e];n&&(n[i]=t,this.searchHotList=o)},edit:function(t){var e=Object(a["a"])(this.searchHotList),i=e[t];this.editingKey=t,i&&(i.editable=!0,this.searchHotList=e)},save:function(t){var e=this,i=Object(a["a"])(this.searchHotList),o=Object(a["a"])(this.cacheData),n=i[t];o[t];n&&(delete n.editable,this.searchHotList=i,Object.assign(n,this.cacheData[t]),this.cacheData=o),console.log(n),this.request(c["a"].getHotWordsEditSort,{id:n.pigcms_id,sort:n.sort}).then((function(t){e.getSearchHotList()})),this.editingKey=""}},"cancel",(function(t){var e=Object(a["a"])(this.searchHotList),i=e[t];this.editingKey="",i&&(Object.assign(i,this.cacheData[t]),delete i.editable,this.searchHotList=e),this.getSearchHotList()}))},f=h,m=(i("497b"),i("41ff"),i("2877")),p=Object(m["a"])(f,o,n,!1,null,"0c2704d0",null);e["default"]=p.exports},d043:function(t,e,i){"use strict";var o={getHotWordsList:"/common/platform.HotWords/getHotWordsList",getWordDetail:"/common/platform.HotWords/getWordDetail",getHotWordsEdit:"/common/platform.HotWords/getHotWordsEdit",getHotWordsEditSort:"/common/platform.HotWords/getHotWordsEditSort",delWords:"/common/platform.HotWords/delWords"};e["a"]=o}}]);