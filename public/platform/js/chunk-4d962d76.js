(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d962d76","chunk-403db8cf"],{"10b6":function(t,e,r){"use strict";r("6c8d")},3445:function(t,e,r){"use strict";var i={getMerchantList:"/recruit/platform.RecruitMerchant/getMerchantList",updateMerchant:"/recruit/platform.RecruitMerchant/updateMerchant",categoryList:"/recruit/platform.RecruitJobCategory/categoryList",childList:"/recruit/platform.RecruitJobCategory/childList",addCategory:"/recruit/platform.RecruitJobCategory/addCategory",editCategory:"/recruit/platform.RecruitJobCategory/editCategory",updateCategory:"/recruit/platform.RecruitJobCategory/updateCategory",delCategory:"/recruit/platform.RecruitJobCategory/delCategory",delCategorys:"/recruit/platform.RecruitJobCategory/delCategorys",changeSort:"/recruit/platform.RecruitJobCategory/changeSort",childChangeSort:"/recruit/platform.RecruitJobCategory/childChangeSort",getCategory:"/recruit/platform.RecruitJobCategory/getCategory",byOtherCategory:"/recruit/platform.RecruitJobCategory/byOtherCategory",getChildCategory:"/recruit/platform.RecruitJobCategory/getChildCategory",updateChildCategory:"/recruit/platform.RecruitJobCategory/updateChildCategory",getJobList:"/recruit/platform.RecruitMerchant/getJobList",updateJob:"/recruit/platform.RecruitMerchant/updateJob",delJob:"/recruit/platform.RecruitMerchant/delJob",getJobSearch:"/recruit/platform.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/platform.RecruitMerchant/getJobDetail",getRecruitBannerList:"/recruit/platform.RecruitBanner/getRecruitBannerList",getRecruitBannerCreate:"/recruit/platform.RecruitBanner/getRecruitBannerCreate",getRecruitBannerInfo:"/recruit/platform.RecruitBanner/getRecruitBannerInfo",getRecruitBannerSort:"/recruit/platform.RecruitBanner/getRecruitBannerSort",getRecruitBannerDis:"/recruit/platform.RecruitBanner/getRecruitBannerDis",getRecruitBannerDel:"/recruit/platform.RecruitBanner/getRecruitBannerDel",getRecruitIndustryList:"/recruit/platform.RecruitIndustry/getRecruitIndustryList",getRecruitIndustryCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryCreate",getRecruitIndustryInfo:"/recruit/platform.RecruitIndustry/getRecruitIndustryInfo",getRecruitIndustrySort:"/recruit/platform.RecruitIndustry/getRecruitIndustrySort",getRecruitIndustryDis:"/recruit/platform.RecruitIndustry/getRecruitIndustryDis",getRecruitIndustryDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryDel",getRecruitIndustryLevelList:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelList",getRecruitIndustryLevelCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelCreate",getRecruitIndustryLevelDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelDel",getRecruitWelfareList:"/recruit/platform.RecruitWelfare/getRecruitWelfareList",getRecruitWelfareCreate:"/recruit/platform.RecruitWelfare/getRecruitWelfareCreate",getRecruitWelfareInfo:"/recruit/platform.RecruitWelfare/getRecruitWelfareInfo",getRecruitWelfareDis:"/recruit/platform.RecruitWelfare/getRecruitWelfareDis",getRecruitWelfareDel:"/recruit/platform.RecruitWelfare/getRecruitWelfareDel",getList:"/recruit/platform.TalentManagement/getList",getLibMsgLIst:"/recruit/platform.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/platform.TalentManagement/getResumeMsg"};e["a"]=i},"6c8d":function(t,e,r){},"9d87":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[r("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.$refs.createModal.add()}}},[r("a-icon",{attrs:{type:"plus"}}),t._v("新增企业福利")],1),r("div",{staticStyle:{height:"30px"}}),r("a-card",{attrs:{bordered:!1}},[r("a-table",{attrs:{columns:t.columns,"data-source":t.hrList,pagination:t.pagination,rowKey:"id"},on:{change:t.handleChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return r("span",{},[r("a",{on:{click:function(e){return t.$refs.createModal.edit(i.id)}}},[t._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.del(i.id)}}},[t._v("删除")])],1)}}])}),r("recruit-welfare-create",{ref:"createModal",attrs:{id:t.id},on:{ok:t.handleOk}})],1)],1)},a=[],n=r("5530"),c=r("dee9"),o=r("3445"),u={name:"RecruitHrList",components:{RecruitWelfareCreate:c["default"]},data:function(){return{hrList:[],searchForm:{cont:""},columns:[{title:"福利名称",dataIndex:"name",key:"name"},{title:"操作",dataIndex:"",key:"x",scopedSlots:{customRender:"action"}}],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},mounted:function(){this.getRecruitHrList({is_search:!1})},methods:{submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(n["a"])({},this.searchForm);delete e.time,e.is_search=t,this.getRecruitHrList(e)},getRecruitHrList:function(t){var e=this,r=Object(n["a"])({},this.searchForm);delete r.time,1==t.is_search&&console.log(this.pagination.pageSize),this.request(o["a"].getRecruitWelfareList,r).then((function(t){e.hrList=t.list,e.$set(e.pagination,"total",t.count)}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t)},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e)},handleChange:function(t,e,r){this.filteredInfo=e,this.sortedInfo=r},add:function(){},getView:function(t,e){this.$refs.specialModel.getAtlastSpecial(t,e)},handleOk:function(){this.getRecruitHrList({is_search:!1})},del:function(t){var e=this;this.$confirm({title:"提示",content:"是否确认删除？",onOk:function(){e.request(o["a"].getRecruitWelfareDel,{id:t}).then((function(t){e.getRecruitHrList({is_search:!1}),e.$message.success("删除成功")}))},onCancel:function(){}})},dis:function(t,e){var r=this;this.$confirm({title:"提示",content:"是否确认删除？",onOk:function(){r.request(o["a"].getRecruitWelfareDis,{id:t,type:e}).then((function(t){r.getRecruitHrList({is_search:!1}),r.$message.success("删除成功")}))},onCancel:function(){}})}}},s=u,l=r("0c7c"),d=Object(l["a"])(s,i,a,!1,null,null,null);e["default"]=d.exports},dee9:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-modal",{attrs:{title:t.title,width:840,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[r("a-spin",{attrs:{spinning:t.confirmLoading}},[r("a-form",{attrs:{form:t.form}},[r("a-form-item",{attrs:{label:"福利名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,max:8,message:"限八个字"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, max:8,message:'限八个字'}]}]"}],attrs:{placeholder:"限八个字"}})],1)],1)],1)],1)},a=[],n=r("3445"),c={data:function(){return{maskClosable:!1,title:"新增福利",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0},id:0}},mounted:function(){},methods:{add:function(){this.visible=!0,this.id=0,this.title="新增福利",this.detail={id:0,name:"",sort:0}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(t),this.title="编辑福利"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,r){e?t.confirmLoading=!1:(r.id=t.id,t.request(n["a"].getRecruitWelfareCreate,r).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",r)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(t){var e=this;this.request(n["a"].getRecruitWelfareInfo,{id:this.id}).then((function(t){e.showMethod=t.showMethod,e.detail=t}))}}},o=c,u=(r("10b6"),r("0c7c")),s=Object(u["a"])(o,i,a,!1,null,null,null);e["default"]=s.exports}}]);