(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a4fac62","chunk-bfa5f482"],{2406:function(t,e,a){"use strict";var i={getStoreCategoryList:"/merchant/platform.MerchantStoreCategory/getStoreCategoryList",editStoreCategory:"/merchant/platform.MerchantStoreCategory/editStoreCategory",saveStoreCategory:"/merchant/platform.MerchantStoreCategory/saveStoreCategory",delStoreCategory:"/merchant/platform.MerchantStoreCategory/delStoreCategory",updateSort:"/merchant/platform.MerchantStoreCategory/updateSort",getCorrList:"/merchant/platform.Corr/searchCorr",getCorrDetails:"/merchant/platform.Corr/getCorrDetails",getEditCorr:"/merchant/platform.Corr/getEditCorr",getPositionList:"/merchant/platform.Position/getPositionList",getPositionCreate:"/merchant/platform.Position/getPositionCreate",getPositionInfo:"/merchant/platform.Position/getPositionInfo",getPositionCategoryList:"/merchant/platform.Position/getPositionCategoryList",getPositionDelAll:"/merchant/platform.Position/getPositionDelAll",getTechnicianList:"/merchant/platform.Technician/getTechnicianList",getTechnicianView:"/merchant/platform.Technician/getTechnicianView",getTechnicianExamine:"/merchant/platform.Technician/getTechnicianExamine",getTechnicianDel:"/merchant/platform.Technician/getTechnicianDel"};e["a"]=i},2706:function(t,e,a){},"451f":function(t,e,a){},5673:function(t,e,a){"use strict";a("2706")},"940d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{attrs:{tab:"岗位列表"}})],1)],1),a("a-form-model",{staticStyle:{"margin-bottom":"20px","margin-left":"20px"},attrs:{layout:"inline",model:t.searchForm}},[a("a-form-model-item",{attrs:{label:"职位分类"}},[a("a-select",{staticStyle:{width:"160px"},model:{value:t.searchForm.cat_id,callback:function(e){t.$set(t.searchForm,"cat_id",e)},expression:"searchForm.cat_id"}},[a("a-select-option",{attrs:{value:0}},[t._v(" 全部")]),t._l(t.categoryList,(function(e){return a("a-select-option",{key:e.cat_id,attrs:{cat_id:e.cat_id}},[t._v(t._s(e.cat_name)+" ")])}))],2)],1),a("a-form-model-item",{attrs:{label:"岗位名称"}},[a("a-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入岗位名称"},model:{value:t.searchForm.remarks,callback:function(e){t.$set(t.searchForm,"remarks",e)},expression:"searchForm.remarks"}})],1),a("a-form-model-item",[a("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.submitForm(!0)}}},[t._v(" 查询")]),a("a-button",{staticClass:"ml-20",on:{click:function(e){return t.resetForm()}}},[t._v(" 重置")])],1)],1),a("div",[a("a-form-model-item",[a("a-button",{staticClass:"ml-20 maxbox",attrs:{type:"primary"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v(" 添加岗位")]),a("a-button",{staticClass:"ml-20 maxbox",on:{click:function(e){return t.delAll()}}},[t._v(" 删除")])],1)],1),a("a-table",{staticClass:"mt-20",attrs:{rowKey:"id",columns:t.columns,"data-source":t.dataList,"row-selection":t.rowSelection,pagination:t.pagination},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return t.$refs.createModal.edit(e)}}},[t._v("编辑")]),i.people_number<1?a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return t.delAll(e)}}},[t._v("删除")]):t._e()])}}])}),a("position-create",{ref:"createModal",on:{loaddata:t.getDataList}})],1)},o=[],n=a("5530"),r=a("c1df"),s=a.n(r),c=a("d699"),l=a("2406"),m=(a("0808"),a("6944")),d=a.n(m),h=a("8bbf"),u=a.n(h),g=a("d6d3");a("fda2"),a("451f");u.a.use(d.a);var f={name:"PositionList",components:{PositionCreate:c["default"],videoPlayer:g["videoPlayer"]},data:function(){return{searchForm:{cat_id:0,remarks:""},categoryList:[],selectedRowKeys:[],store_list:[],columns:[{title:"岗位名称",dataIndex:"name",key:"name"},{title:"分类",dataIndex:"cat_name",key:"cat_name"},{title:"职位绑定人数",dataIndex:"people_number",key:"people_number",width:"12%"},{title:"操作",dataIndex:"id",key:"id",width:"12%",scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},mounted:function(){this.getDataList({is_search:!1})},methods:{moment:s.a,handleRowSelectChange:function(t){console.log(t),this.selectedRowKeys=t},getDataList:function(t){var e=this,a=Object(n["a"])({},this.searchForm);delete a.time,1==t.is_search?(a.page=1,this.$set(this.pagination,"current",1)):(a.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),a.pageSize=this.pagination.pageSize,this.request(l["a"].getPositionList,a).then((function(t){e.dataList=t.list,e.categoryList=t.categoryList,e.$set(e.pagination,"total",t.count)}))},onDateRangeChange:function(t,e){this.$set(this.searchForm,"time",[t[0],t[1]]),this.$set(this.searchForm,"begin_time",e[0]),this.$set(this.searchForm,"end_time",e[1])},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(n["a"])({},this.searchForm);delete e.time,e.is_search=t,console.log(e),this.getDataList(e)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{remarks:"",cat_id:0}),this.$set(this.pagination,"current",1),this.getDataList({is_search:!1})},showCorr:function(){},delAll:function(t){var e=this,a=[];if(a=t?[t]:this.selectedRowKeys,a.length){var i=this.$confirm({title:"确定要删除选择的岗位吗?",centered:!0,onOk:function(){e.request(l["a"].getPositionDelAll,{ids:a}).then((function(t){e.$message.success("删除成功！"),e.getDataList({is_search:!1}),i.destroy()}))}});console.log(a)}else this.$message.warning("请先选择要删除的岗位~")}}},p=f,C=(a("5673"),a("0c7c")),b=Object(C["a"])(p,i,o,!1,null,"aa3a576a",null);e["default"]=b.exports},d699:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"选择店铺分类",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_id",{initialValue:t.detail.cat_id,rules:[{required:!0,message:"请选择店铺分类"}]}],expression:"['cat_id', {initialValue:detail.cat_id,rules: [{required: true, message: '请选择店铺分类'}]}]"}],attrs:{placeholder:"请选择店铺分类"}},t._l(t.categoryList,(function(e){return a("a-select-option",{key:e.cat_id,attrs:{cat_id:e.cat_id}},[t._v(t._s(e.cat_name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"岗位名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"1-6个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{placeholder:"请输入名称",maxLength:6}})],1),a("a-form-item",{attrs:{label:"备注",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks",{initialValue:t.detail.remarks,rules:[{required:!1}]}],expression:"['remarks', {initialValue:detail.remarks,rules: [{required: false}]}]"}],attrs:{placeholder:"添加备注","auto-size":{minRows:3,maxRows:5}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1)],1)},o=[],n=a("2406"),r={data:function(){return{categoryList:[],title:"添加岗位",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,cat_id:"",name:"",remarks:""},id:0}},mounted:function(){},methods:{edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),this.getPositionCategoryList(),this.id>0?this.title="编辑岗位":this.title="添加岗位"},add:function(){this.title="添加岗位",this.getPositionCategoryList(),this.visible=!0,this.detail={id:0,name:"",remarks:""}},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.id=t.detail.id,t.request(n["a"].getPositionCreate,a).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("loaddata",t.id)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(n["a"].getPositionInfo,{id:this.id}).then((function(e){t.detail={id:0,name:"",remarks:""},e&&(t.detail=e)}))},getPositionCategoryList:function(){var t=this;this.request(n["a"].getPositionCategoryList,{id:this.id}).then((function(e){e&&(t.categoryList=e)}))}}},s=r,c=a("0c7c"),l=Object(c["a"])(s,i,o,!1,null,null,null);e["default"]=l.exports}}]);