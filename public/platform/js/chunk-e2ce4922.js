(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2ce4922"],{"7af2":function(e,a,t){"use strict";var r={toolList:"/marriage_helper/platform.MarriageTool/toolList",childList:"/marriage_helper/platform.MarriageTool/childList",changeSort:"/marriage_helper/platform.MarriageTool/changeSort",childChangeSort:"/marriage_helper/platform.MarriageTool/childChangeSort",editCategory:"/marriage_helper/platform.MarriageTool/editCategory",delCategory:"/marriage_helper/platform.MarriageTool/delCategory",updateCategory:"/marriage_helper/platform.MarriageTool/updateCategory",addCategory:"/marriage_helper/platform.MarriageTool/addCategory",planCategoryList:"/marriage_helper/platform.MarriagePlan/planCategoryList",childPlanList:"/marriage_helper/platform.MarriagePlan/childPlanList",addPlanCategory:"/marriage_helper/platform.MarriagePlan/addCategory",updatePlanCategory:"/marriage_helper/platform.MarriagePlan/updateCategory",editPlanCategory:"/marriage_helper/platform.MarriagePlan/editCategory",delPlanCategory:"/marriage_helper/platform.MarriagePlan/delCategory",delPlan:"/marriage_helper/platform.MarriagePlan/delPlan",changePlanSort:"/marriage_helper/platform.MarriagePlan/changeSort",getSelCategory:"/marriage_helper/platform.MarriagePlan/getSelCategory",byOtherCategory:"/marriage_helper/platform.MarriagePlan/byOtherCategory",addPlan:"/marriage_helper/platform.MarriagePlan/addPlan",updatePlan:"/marriage_helper/platform.MarriagePlan/updatePlan",editPlan:"/marriage_helper/platform.MarriagePlan/editPlan",getBudgetList:"/marriage_helper/platform.MarriageBudget/getBudgetList",getBudgetCreate:"/marriage_helper/platform.MarriageBudget/getBudgetCreate",getBudgetInfo:"/marriage_helper/platform.MarriageBudget/getBudgetInfo",getBudgetScaleCreate:"/marriage_helper/platform.MarriageBudget/getBudgetScaleCreate",getBudgetScaleInfo:"/marriage_helper/platform.MarriageBudget/getBudgetScaleInfo",getBudgetDel:"/marriage_helper/platform.MarriageBudget/getBudgetDel",getPersonList:"/marriage_helper/platform.JobPerson/getPersonList",getPersonView:"/marriage_helper/platform.JobPerson/getPersonView",getPersonDel:"/marriage_helper/platform.JobPerson/getPersonDel",getCategoryList:"/marriage_helper/platform.MarriageCategory/getCategoryList",getCategoryCreate:"/marriage_helper/platform.MarriageCategory/getCategoryCreate",getCategoryInfo:"/marriage_helper/platform.MarriageCategory/getCategoryInfo",getCategoryPositionList:"/marriage_helper/platform.MarriageCategory/getCategoryPositionList",getCategorySort:"/marriage_helper/platform.MarriageCategory/getCategorySort",getCategoryDelAll:"/marriage_helper/platform.MarriageCategory/getCategoryDelAll"};a["a"]=r},f5de:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{title:e.title,width:640,visible:e.visible,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",[t("a-form-item",{attrs:{label:e.L("子攻略名称"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0,help:e.L("1-8字符")}},[t("a-input",{attrs:{maxLength:8},model:{value:e.detail.cat_title,callback:function(a){e.$set(e.detail,"cat_title",a)},expression:"detail.cat_title"}})],1),t("a-form-item",{attrs:{label:e.L("描述文案"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0,help:e.L("建议8个字符以内")}},[t("a-input",{model:{value:e.detail.cat_description,callback:function(a){e.$set(e.detail,"cat_description",a)},expression:"detail.cat_description"}})],1),t("a-form-item",{attrs:{label:e.L("链接选择"),help:e.L("可从平台图文素材中选择相关链接图文"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("div",{staticClass:"flex"},[t("a-row",[t("a-col",{attrs:{span:15}},[t("a-input",{attrs:{placeholder:e.L("请输入链接/功能库选择"),autoSize:""},model:{value:e.detail.cat_url,callback:function(a){e.$set(e.detail,"cat_url",a)},expression:"detail.cat_url"}})],1),t("a-col",{staticClass:"text-left",attrs:{span:9}},[t("a",{staticClass:"ml-20",on:{click:function(a){return e.getLinkUrl()}}},[e._v(e._s(e.L("从功能库选择")))])])],1)],1)]),t("a-form-item",{attrs:{label:e.L("角标文案"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.L("用于前端角标展示,不填则不展示角标")}},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{maxLength:5},model:{value:e.detail.logo_title,callback:function(a){e.$set(e.detail,"logo_title",a)},expression:"detail.logo_title"}})],1),t("a-col",{staticClass:"text-left",attrs:{span:18}},[e._v(" 1-5字符 ")])],1)],1)],1)],1),t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(e._s(e.L("取消")))]),t("a-button",{key:"submit",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.L("确定")))])],1)],2)},l=[],i=t("290c"),o=t("da05"),g=t("7af2"),n={name:"addChild",components:{ACol:o["b"],ARow:i["a"]},data:function(){return{title:"添加子攻略",visible:!1,confirmLoading:!1,detail:{cat_id:"",cat_fid:"",cat_title:"",cat_description:"",cat_url:"",logo_title:""},labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}}},methods:{add:function(e){this.visible=!0,this.detail={cat_id:"",cat_fid:e,cat_title:"",cat_description:"",cat_url:"",logo_title:""}},edit:function(e,a){this.visible=!0,this.detail.cat_id=e,this.detail.cat_fid=a,this.detail.cat_id>0?(this.title=this.L("编辑子攻略"),this.getEditInfo()):this.title=this.L("添加子攻略")},getLinkUrl:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",source_id:"",handleOkBtn:function(a){console.log("handleOk",a),e.$nextTick((function(){e.$set(e.detail,"cat_url",a.url)}))}})},handleCancel:function(){this.visible=!1},handleSubmit:function(){var e=this;this.confirmLoading=!0,this.detail.cat_id?this.request(g["a"].updateCategory,this.detail).then((function(a){e.detail.cat_id?e.$message.success(e.L("编辑成功")):e.$message.success(e.L("添加成功")),e.$emit("handleUpdate",{}),setTimeout((function(){e.visible=!1,e.confirmLoading=!1,e.$emit("ok","")}),1500)})).catch((function(a){e.confirmLoading=!1})):this.request(g["a"].addCategory,this.detail).then((function(a){e.detail.cat_id?e.$message.success(e.L("编辑成功")):e.$message.success(e.L("添加成功")),e.$emit("handleUpdate",{}),setTimeout((function(){e.visible=!1,e.confirmLoading=!1,e.$emit("ok","")}),1500)})).catch((function(a){e.confirmLoading=!1}))},getEditInfo:function(){var e=this;this.request(g["a"].editCategory,{cat_id:this.detail.cat_id}).then((function(a){e.detail.cat_id=a.cat_id,e.detail.cat_title=a.cat_title,e.detail.cat_description=a.cat_description,e.detail.cat_url=a.cat_url,e.detail.logo_title=a.logo_title}))}}},s=n,d=t("2877"),c=Object(d["a"])(s,r,l,!1,null,"54ec4b43",null);a["default"]=c.exports}}]);