(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79af7195"],{"281a":function(e,t,r){"use strict";r("cc18")},"52ef":function(e,t,r){"use strict";r.r(t);var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("a-page-header",{staticClass:"page-header",attrs:{title:"选择的标签将展示到公司主页"}}),r("a-form-model",{ref:"ruleForm",staticStyle:{"margin-top":"20px","margin-left":"120px"},attrs:{model:e.form,"label-col":{span:2},"wrapper-col":{span:8},rules:e.rules}},[r("div",{staticStyle:{"line-height":"50px"}},[e._v("标签支持多选，若需要补充，请联系平台管理员。")]),r("a-form-model-item",{ref:"name",attrs:{colon:!1,prop:"name",label:""}},[r("a-checkbox-group",{staticClass:"biaoqian",attrs:{options:e.plainOptions},on:{change:e.onChange},model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}})],1),r("a-form-model-item",[r("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1)],1)],1)},a=[],n=r("5530"),i=r("dcd5"),o={name:"Company",components:{},data:function(){return{checkedList:[],indeterminate:!0,checkAll:!1,plainOptions:[],form:{checked:[]}}},mounted:function(){this.getCompanyInfo(),this.syncIndustrySelect()},methods:{onChange:function(e){this.checkedList=e,console.log("checked = ",e)},getCompanyInfo:function(){var e=this;this.request(i["a"].getRecruitWelfareLabelInfo,{}).then((function(t){e.checkedList=t})).catch((function(e){}))},syncIndustrySelect:function(){var e=this;this.request(i["a"].getRecruitWelfareLabelList,{}).then((function(t){e.plainOptions=t})).catch((function(e){}))},onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var r=Object(n["a"])({},e.form);r.checked=e.checkedList,console.log(e.form),e.request(i["a"].getRecruitWelfareLabelCreate,r).then((function(t){e.$message.success("保存成功")})).catch((function(e){}))}))}}},u=o,s=(r("281a"),r("2877")),l=Object(s["a"])(u,c,a,!1,null,null,null);t["default"]=l.exports},cc18:function(e,t,r){},dcd5:function(e,t,r){"use strict";var c={getRecruitHrList:"/recruit/merchant.NewRecruitHr/getRecruitHrList",getRecruitHrCreate:"/recruit/merchant.NewRecruitHr/getRecruitHrCreate",getRecruitHrInfo:"/recruit/merchant.NewRecruitHr/getRecruitHrInfo",getRecruitHrDel:"/recruit/merchant.NewRecruitHr/getRecruitHrDel",getJobList:"/recruit/merchant.RecruitMerchant/getJobList",updateJob:"/recruit/merchant.RecruitMerchant/updateJob",delJob:"/recruit/merchant.RecruitMerchant/delJob",getJobSearch:"/recruit/merchant.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/merchant.RecruitMerchant/getJobDetail",industryTree:"/recruit/merchant.Company/industryTree",getInfo:"/recruit/merchant.Company/getInfo",saveInfo:"/recruit/merchant.Company/saveInfo",getRecruitWelfareLabelList:"/recruit/merchant.Company/getRecruitWelfareLabelList",getRecruitWelfareLabelCreate:"/recruit/merchant.Company/getRecruitWelfareLabelCreate",getRecruitWelfareLabelInfo:"/recruit/merchant.Company/getRecruitWelfareLabelInfo",getList:"/recruit/merchant.TalentManagement/getList",getLibMsgLIst:"/recruit/merchant.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/merchant.TalentManagement/getResumeMsg"};t["a"]=c}}]);