(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7981bba4"],{"048e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[i("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.$refs.createModal.add()}}},[i("a-icon",{attrs:{type:"plus"}}),t._v("新增")],1),i("div",{staticStyle:{height:"30px"}}),i("a-card",{attrs:{bordered:!1}},[i("a-table",{attrs:{columns:t.columns,"data-source":t.hrList,pagination:t.pagination,rowKey:"id"},on:{change:t.handleChange},scopedSlots:t._u([{key:"sort",fn:function(e,n){return i("span",{},[i("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0,step:"1"},on:{blur:function(i){return t.handleSortChange(e,n.id)}},model:{value:n.sort,callback:function(e){t.$set(n,"sort",e)},expression:"record.sort"}})],1)}},{key:"id",fn:function(e,n){return i("span",{},[i("a",{on:{click:function(e){return t.getView(n.id,"下属行业类别管理")}}},[t._v("管理")])])}},{key:"action",fn:function(e,n){return i("span",{},[i("a",{on:{click:function(e){return t.$refs.createModal.edit(n.id)}}},[t._v("编辑")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(e){return t.del(n.id)}}},[t._v("删除")])],1)}}])}),i("recruit-industry-create",{ref:"createModal",attrs:{id:t.id},on:{ok:t.handleOk}}),i("recruit-industry-level-list",{ref:"specialModel"})],1)],1)},a=[],s=i("5530"),r=i("5f1d"),o=i("d8b9"),c=i("3445"),u={name:"RecruitHrList",components:{RecruitIndustryCreate:r["default"],RecruitIndustryLevelList:o["default"]},data:function(){return{hrList:[],searchForm:{cont:""},columns:[{title:"行业分类",dataIndex:"name",key:"name"},{title:"排序",dataIndex:"sort",key:"sort",scopedSlots:{customRender:"sort"}},{title:"下属行业类别",dataIndex:"id",key:"id",scopedSlots:{customRender:"id"}},{title:"操作",dataIndex:"",key:"x",scopedSlots:{customRender:"action"}}],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},mounted:function(){this.getRecruitHrList({is_search:!1})},methods:{submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(s["a"])({},this.searchForm);delete e.time,e.is_search=t,this.getRecruitHrList(e)},getRecruitHrList:function(t){var e=this,i=Object(s["a"])({},this.searchForm);delete i.time,1==t.is_search&&console.log(this.pagination.pageSize),1==t.is_search?(i.page=1,this.$set(this.pagination,"current",1)):(i.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),this.pagination.total>0&&Math.ceil(this.pagination.total/this.pagination.pageSize)<i.page&&(this.pagination.current=0,i.page=1),i.pageSize=this.pagination.pageSize,this.request(c["a"].getRecruitIndustryList,i).then((function(t){e.hrList=t.list,e.$set(e.pagination,"total",t.count)}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},handleChange:function(t,e,i){this.filteredInfo=e,this.sortedInfo=i},add:function(){},getView:function(t,e){this.$refs.specialModel.getAtlastSpecial(t,e)},handleOk:function(){this.getRecruitHrList({is_search:!1})},handleSortChange:function(t,e){var i=this;this.request(c["a"].getRecruitIndustrySort,{id:e,sort:t}).then((function(t){i.getRecruitHrList({is_search:!1})}))},del:function(t){var e=this;this.$confirm({title:"提示",content:"是否确认删除？",onOk:function(){e.request(c["a"].getRecruitIndustryDel,{id:t}).then((function(t){e.getRecruitHrList({is_search:!1}),e.$message.success("删除成功")}))},onCancel:function(){}})},dis:function(t,e){var i=this;this.$confirm({title:"提示",content:"是否确认删除？",onOk:function(){i.request(c["a"].getRecruitIndustryDis,{id:t,type:e}).then((function(t){i.getRecruitHrList({is_search:!1}),i.$message.success("删除成功")}))},onCancel:function(){}})}}},l=u,d=i("0c7c"),h=Object(d["a"])(l,n,a,!1,null,null,null);e["default"]=h.exports},"301f1":function(t,e,i){"use strict";i("864d")},"5f1d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:840,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"行业名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请填写行业名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请填写行业名称'}]}]"}]})],1),i("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort,rules:[{required:!1,message:"请填写排序"}]}],expression:"['sort', {initialValue:detail.sort,rules: [{required: false, message: '请填写排序'}]}]"}]})],1)],1)],1)],1)},a=[],s=i("3445"),r={data:function(){return{maskClosable:!1,title:"行业添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0},id:0}},mounted:function(){},methods:{add:function(){this.visible=!0,this.id=0,this.title="行业添加",this.detail={id:0,name:"",sort:0}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(t),this.title="行业编辑"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(i.id=t.id,t.request(s["a"].getRecruitIndustryCreate,i).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",i)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(t){var e=this;this.request(s["a"].getRecruitIndustryInfo,{id:this.id}).then((function(t){e.showMethod=t.showMethod,e.detail=t}))}}},o=r,c=(i("301f1"),i("0c7c")),u=Object(c["a"])(o,n,a,!1,null,null,null);e["default"]=u.exports},"864d":function(t,e,i){}}]);