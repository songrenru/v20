(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c065172","chunk-d08bf7fe"],{"035a":function(e,t,a){"use strict";a("6666")},2066:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:640,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"选择岗位",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["pos_id",{initialValue:e.detail.pos_id,rules:[{required:!1,message:"请选择岗位"}]}],expression:"['pos_id', {initialValue:detail.pos_id,rules: [{required: false, message: '请选择岗位'}]}]"}],attrs:{placeholder:"请选择岗位"}},e._l(e.categoryList,(function(t){return a("a-select-option",{key:t.pos_id,attrs:{pos_id:t.pos_id}},[e._v(e._s(t.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"分类名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_name",{initialValue:e.detail.cat_name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['cat_name', {initialValue:detail.cat_name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:"值越大越靠前"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1),a("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:e.detail.status}],expression:"['status',{initialValue:detail.status}]"}],attrs:{name:"status","default-value":{initialValue:e.detail.status},min:0}},[a("a-radio",{attrs:{value:0}},[e._v(" 正常 ")]),a("a-radio",{attrs:{value:1}},[e._v(" 关闭 ")])],1)],1)],1)],1)],1)},i=[],o=a("7af2"),n={data:function(){return{categoryList:[],title:"添加分类",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{cat_id:0,pos_id:"",cat_name:"",sort:0,status:0},cat_id:0}},mounted:function(){},methods:{edit:function(e){this.visible=!0,this.cat_id=e,this.getEditInfo(),this.getPositionCategoryList(),this.cat_id>0?this.title="编辑分类":this.title="添加分类"},add:function(){this.title="添加分类",this.getPositionCategoryList(),this.visible=!0,this.detail={cat_id:0,cat_name:"",sort:0,status:0}},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){t?e.confirmLoading=!1:(a.cat_id=e.detail.cat_id,e.request(o["a"].getCategoryCreate,a).then((function(t){e.cat_id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("loaddata",e.cat_id)}),1500)})).catch((function(t){e.confirmLoading=!1})))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this;this.request(o["a"].getCategoryInfo,{cat_id:this.cat_id}).then((function(t){e.detail={id:0,name:"",remarks:""},t&&(e.detail=t)}))},getPositionCategoryList:function(){var e=this;this.request(o["a"].getCategoryPositionList,{}).then((function(t){t&&(e.categoryList=t)}))}}},l=n,s=a("0c7c"),g=Object(s["a"])(l,r,i,!1,null,null,null);t["default"]=g.exports},"3f9c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{attrs:{tab:"分类管理"}})],1)],1),a("div",[a("a-form-model-item",[a("a-button",{staticClass:"ml-20 maxbox",attrs:{type:"primary"},on:{click:function(t){return e.$refs.createModal.add()}}},[e._v(" 添加分类")]),a("a-button",{staticClass:"ml-20 maxbox",on:{click:function(t){return e.delAll()}}},[e._v(" 删除")])],1)],1),a("a-table",{staticClass:"mt-20",attrs:{rowKey:"cat_id",columns:e.columns,"data-source":e.dataList,"row-selection":e.rowSelection,pagination:e.pagination},scopedSlots:e._u([{key:"sort",fn:function(t,r){return a("span",{},[a("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0,step:"1"},on:{blur:function(a){return e.handleSortChange(t,r.cat_id)}},model:{value:r.sort,callback:function(t){e.$set(r,"sort",t)},expression:"record.sort"}})],1)}},{key:"action",fn:function(t){return a("span",{},[a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return e.$refs.createModal.edit(t)}}},[e._v("编辑")]),a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return e.delAll(t)}}},[e._v("删除")])])}}])}),a("category-create",{ref:"createModal",on:{loaddata:e.getDataList}})],1)},i=[],o=a("5530"),n=a("c1df"),l=a.n(n),s=a("2066"),g=a("7af2"),c=(a("0808"),a("6944")),d=a.n(c),m=a("8bbf"),u=a.n(m),h=a("d6d3");a("fda2"),a("451f");u.a.use(d.a);var p={name:"CategoryList",components:{CategoryCreate:s["default"],videoPlayer:h["videoPlayer"]},data:function(){return{searchForm:{cat_id:0,remarks:""},selectedRowKeys:[],store_list:[],columns:[{title:"编号",dataIndex:"cat_id",key:"cat_id"},{title:"分类标题",dataIndex:"cat_name",key:"cat_name"},{title:"关联职位",dataIndex:"pos_name",key:"pos_name"},{title:"排序",dataIndex:"sort",key:"sort",width:"12%",scopedSlots:{customRender:"sort"}},{title:"操作",dataIndex:"cat_id",key:"cat_id",width:"12%",scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},mounted:function(){this.getDataList({is_search:!1})},methods:{moment:l.a,handleSortChange:function(e,t){var a=this;this.request(g["a"].getCategorySort,{cat_id:t,sort:e}).then((function(e){a.getDataList({is_search:!1})}))},handleRowSelectChange:function(e){console.log(e),this.selectedRowKeys=e},getDataList:function(e){var t=this,a=Object(o["a"])({},this.searchForm);delete a.time,1==e.is_search?(a.page=1,this.$set(this.pagination,"current",1)):(a.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),a.pageSize=this.pagination.pageSize,this.request(g["a"].getCategoryList,a).then((function(e){t.dataList=e.list,t.$set(t.pagination,"total",e.count)}))},onDateRangeChange:function(e,t){this.$set(this.searchForm,"time",[e[0],e[1]]),this.$set(this.searchForm,"begin_time",t[0]),this.$set(this.searchForm,"end_time",t[1])},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o["a"])({},this.searchForm);delete t.time,t.is_search=e,console.log(t),this.getDataList(t)},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{remarks:"",cat_id:0}),this.$set(this.pagination,"current",1),this.getDataList({is_search:!1})},showCorr:function(){},delAll:function(e){var t=this,a=[];if(a=e?[e]:this.selectedRowKeys,a.length){var r=this.$confirm({title:"确定要删除选择的岗位吗?",centered:!0,onOk:function(){t.request(g["a"].getCategoryDelAll,{ids:a}).then((function(e){t.$message.success("删除成功！"),t.getDataList({is_search:!1}),r.destroy()}))}});console.log(a)}else this.$message.warning("请先选择要删除的岗位~")}}},f=p,C=(a("035a"),a("0c7c")),_=Object(C["a"])(f,r,i,!1,null,"77b35a61",null);t["default"]=_.exports},"451f":function(e,t,a){},6666:function(e,t,a){},"7af2":function(e,t,a){"use strict";var r={toolList:"/marriage_helper/platform.MarriageTool/toolList",childList:"/marriage_helper/platform.MarriageTool/childList",changeSort:"/marriage_helper/platform.MarriageTool/changeSort",childChangeSort:"/marriage_helper/platform.MarriageTool/childChangeSort",editCategory:"/marriage_helper/platform.MarriageTool/editCategory",delCategory:"/marriage_helper/platform.MarriageTool/delCategory",updateCategory:"/marriage_helper/platform.MarriageTool/updateCategory",addCategory:"/marriage_helper/platform.MarriageTool/addCategory",planCategoryList:"/marriage_helper/platform.MarriagePlan/planCategoryList",childPlanList:"/marriage_helper/platform.MarriagePlan/childPlanList",addPlanCategory:"/marriage_helper/platform.MarriagePlan/addCategory",updatePlanCategory:"/marriage_helper/platform.MarriagePlan/updateCategory",editPlanCategory:"/marriage_helper/platform.MarriagePlan/editCategory",delPlanCategory:"/marriage_helper/platform.MarriagePlan/delCategory",delPlan:"/marriage_helper/platform.MarriagePlan/delPlan",changePlanSort:"/marriage_helper/platform.MarriagePlan/changeSort",getSelCategory:"/marriage_helper/platform.MarriagePlan/getSelCategory",byOtherCategory:"/marriage_helper/platform.MarriagePlan/byOtherCategory",addPlan:"/marriage_helper/platform.MarriagePlan/addPlan",updatePlan:"/marriage_helper/platform.MarriagePlan/updatePlan",editPlan:"/marriage_helper/platform.MarriagePlan/editPlan",getBudgetList:"/marriage_helper/platform.MarriageBudget/getBudgetList",getBudgetCreate:"/marriage_helper/platform.MarriageBudget/getBudgetCreate",getBudgetInfo:"/marriage_helper/platform.MarriageBudget/getBudgetInfo",getBudgetScaleCreate:"/marriage_helper/platform.MarriageBudget/getBudgetScaleCreate",getBudgetScaleInfo:"/marriage_helper/platform.MarriageBudget/getBudgetScaleInfo",getBudgetDel:"/marriage_helper/platform.MarriageBudget/getBudgetDel",getPersonList:"/marriage_helper/platform.JobPerson/getPersonList",getPersonView:"/marriage_helper/platform.JobPerson/getPersonView",getPersonDel:"/marriage_helper/platform.JobPerson/getPersonDel",getCategoryList:"/marriage_helper/platform.MarriageCategory/getCategoryList",getCategoryCreate:"/marriage_helper/platform.MarriageCategory/getCategoryCreate",getCategoryInfo:"/marriage_helper/platform.MarriageCategory/getCategoryInfo",getCategoryPositionList:"/marriage_helper/platform.MarriageCategory/getCategoryPositionList",getCategorySort:"/marriage_helper/platform.MarriageCategory/getCategorySort",getCategoryDelAll:"/marriage_helper/platform.MarriageCategory/getCategoryDelAll"};t["a"]=r}}]);