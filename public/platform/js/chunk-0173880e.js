(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0173880e"],{"301f1":function(e,t,r){"use strict";r("5adf")},3445:function(e,t,r){"use strict";var i={getMerchantList:"/recruit/platform.RecruitMerchant/getMerchantList",updateMerchant:"/recruit/platform.RecruitMerchant/updateMerchant",categoryList:"/recruit/platform.RecruitJobCategory/categoryList",childList:"/recruit/platform.RecruitJobCategory/childList",addCategory:"/recruit/platform.RecruitJobCategory/addCategory",editCategory:"/recruit/platform.RecruitJobCategory/editCategory",updateCategory:"/recruit/platform.RecruitJobCategory/updateCategory",delCategory:"/recruit/platform.RecruitJobCategory/delCategory",delCategorys:"/recruit/platform.RecruitJobCategory/delCategorys",changeSort:"/recruit/platform.RecruitJobCategory/changeSort",childChangeSort:"/recruit/platform.RecruitJobCategory/childChangeSort",getCategory:"/recruit/platform.RecruitJobCategory/getCategory",byOtherCategory:"/recruit/platform.RecruitJobCategory/byOtherCategory",getChildCategory:"/recruit/platform.RecruitJobCategory/getChildCategory",updateChildCategory:"/recruit/platform.RecruitJobCategory/updateChildCategory",getJobList:"/recruit/platform.RecruitMerchant/getJobList",updateJob:"/recruit/platform.RecruitMerchant/updateJob",delJob:"/recruit/platform.RecruitMerchant/delJob",getJobSearch:"/recruit/platform.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/platform.RecruitMerchant/getJobDetail",getRecruitBannerList:"/recruit/platform.RecruitBanner/getRecruitBannerList",getRecruitBannerCreate:"/recruit/platform.RecruitBanner/getRecruitBannerCreate",getRecruitBannerInfo:"/recruit/platform.RecruitBanner/getRecruitBannerInfo",getRecruitBannerSort:"/recruit/platform.RecruitBanner/getRecruitBannerSort",getRecruitBannerDis:"/recruit/platform.RecruitBanner/getRecruitBannerDis",getRecruitBannerDel:"/recruit/platform.RecruitBanner/getRecruitBannerDel",getRecruitIndustryList:"/recruit/platform.RecruitIndustry/getRecruitIndustryList",getRecruitIndustryCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryCreate",getRecruitIndustryInfo:"/recruit/platform.RecruitIndustry/getRecruitIndustryInfo",getRecruitIndustrySort:"/recruit/platform.RecruitIndustry/getRecruitIndustrySort",getRecruitIndustryDis:"/recruit/platform.RecruitIndustry/getRecruitIndustryDis",getRecruitIndustryDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryDel",getRecruitIndustryLevelList:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelList",getRecruitIndustryLevelCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelCreate",getRecruitIndustryLevelDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelDel",getRecruitWelfareList:"/recruit/platform.RecruitWelfare/getRecruitWelfareList",getRecruitWelfareCreate:"/recruit/platform.RecruitWelfare/getRecruitWelfareCreate",getRecruitWelfareInfo:"/recruit/platform.RecruitWelfare/getRecruitWelfareInfo",getRecruitWelfareDis:"/recruit/platform.RecruitWelfare/getRecruitWelfareDis",getRecruitWelfareDel:"/recruit/platform.RecruitWelfare/getRecruitWelfareDel",getList:"/recruit/platform.TalentManagement/getList",getLibMsgLIst:"/recruit/platform.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/platform.TalentManagement/getResumeMsg"};t["a"]=i},"5adf":function(e,t,r){},"5f1d":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:840,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"行业名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请填写行业名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请填写行业名称'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.sort,rules:[{required:!1,message:"请填写排序"}]}],expression:"['sort', {initialValue:detail.sort,rules: [{required: false, message: '请填写排序'}]}]"}]})],1)],1)],1)],1)},a=[],u=r("3445"),o={data:function(){return{maskClosable:!1,title:"行业添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:0},id:0}},mounted:function(){},methods:{add:function(){this.visible=!0,this.id=0,this.title="行业添加",this.detail={id:0,name:"",sort:0}},edit:function(e){this.visible=!0,this.id=e,this.getEditInfo(e),this.title="行业编辑"},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:(r.id=e.id,e.request(u["a"].getRecruitIndustryCreate,r).then((function(t){e.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",r)}),1500)})).catch((function(t){e.confirmLoading=!1})))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(e){var t=this;this.request(u["a"].getRecruitIndustryInfo,{id:this.id}).then((function(e){t.showMethod=e.showMethod,t.detail=e}))}}},c=o,n=(r("301f1"),r("2877")),l=Object(n["a"])(c,i,a,!1,null,null,null);t["default"]=l.exports}}]);