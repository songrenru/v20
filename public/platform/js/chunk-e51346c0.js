(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e51346c0"],{3478:function(e,a,r){"use strict";r("8643")},"533f":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-modal",{attrs:{title:"信息查看",width:600,height:640,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[r("p",{staticStyle:{"margin-left":"206px"}},[r("img",{staticStyle:{width:"120px",height:"120px","border-radius":"50%"},attrs:{src:e.detail.headimg}})]),r("p",{staticStyle:{"text-align":"center","font-weight":"bold"}},[e._v(e._s(e.detail.name))]),r("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.detail.desc))]),r("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.pos_name)+" | 从业"+e._s(e.detail.job_time))]),r("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.store_name))]),r("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.province_name)+e._s(e.detail.city_name))]),r("p",{staticStyle:{"text-align":"left"}},[e._v("详细描述：")]),r("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.detail))])])},l=[],i=r("7af2"),g=(r("0808"),r("6944")),o=r.n(g),n=r("8bbf"),p=r.n(n),d=r("d6d3");r("fda2");p.a.use(o.a);var m={components:{videoPlayer:d["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[]}}},methods:{view:function(e){var a=this;this.visible=!0,this.id=e,this.request(i["a"].getPersonView,{id:this.id}).then((function(e){a.detail=e,console.log(a.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},s=m,h=(r("3478"),r("0c7c")),f=Object(h["a"])(s,t,l,!1,null,"88678778",null);a["default"]=f.exports},"7af2":function(e,a,r){"use strict";var t={toolList:"/marriage_helper/platform.MarriageTool/toolList",childList:"/marriage_helper/platform.MarriageTool/childList",changeSort:"/marriage_helper/platform.MarriageTool/changeSort",childChangeSort:"/marriage_helper/platform.MarriageTool/childChangeSort",editCategory:"/marriage_helper/platform.MarriageTool/editCategory",delCategory:"/marriage_helper/platform.MarriageTool/delCategory",updateCategory:"/marriage_helper/platform.MarriageTool/updateCategory",addCategory:"/marriage_helper/platform.MarriageTool/addCategory",planCategoryList:"/marriage_helper/platform.MarriagePlan/planCategoryList",childPlanList:"/marriage_helper/platform.MarriagePlan/childPlanList",addPlanCategory:"/marriage_helper/platform.MarriagePlan/addCategory",updatePlanCategory:"/marriage_helper/platform.MarriagePlan/updateCategory",editPlanCategory:"/marriage_helper/platform.MarriagePlan/editCategory",delPlanCategory:"/marriage_helper/platform.MarriagePlan/delCategory",delPlan:"/marriage_helper/platform.MarriagePlan/delPlan",changePlanSort:"/marriage_helper/platform.MarriagePlan/changeSort",getSelCategory:"/marriage_helper/platform.MarriagePlan/getSelCategory",byOtherCategory:"/marriage_helper/platform.MarriagePlan/byOtherCategory",addPlan:"/marriage_helper/platform.MarriagePlan/addPlan",updatePlan:"/marriage_helper/platform.MarriagePlan/updatePlan",editPlan:"/marriage_helper/platform.MarriagePlan/editPlan",getBudgetList:"/marriage_helper/platform.MarriageBudget/getBudgetList",getBudgetCreate:"/marriage_helper/platform.MarriageBudget/getBudgetCreate",getBudgetInfo:"/marriage_helper/platform.MarriageBudget/getBudgetInfo",getBudgetScaleCreate:"/marriage_helper/platform.MarriageBudget/getBudgetScaleCreate",getBudgetScaleInfo:"/marriage_helper/platform.MarriageBudget/getBudgetScaleInfo",getBudgetDel:"/marriage_helper/platform.MarriageBudget/getBudgetDel",getPersonList:"/marriage_helper/platform.JobPerson/getPersonList",getPersonView:"/marriage_helper/platform.JobPerson/getPersonView",getPersonDel:"/marriage_helper/platform.JobPerson/getPersonDel",getCategoryList:"/marriage_helper/platform.MarriageCategory/getCategoryList",getCategoryCreate:"/marriage_helper/platform.MarriageCategory/getCategoryCreate",getCategoryInfo:"/marriage_helper/platform.MarriageCategory/getCategoryInfo",getCategoryPositionList:"/marriage_helper/platform.MarriageCategory/getCategoryPositionList",getCategorySort:"/marriage_helper/platform.MarriageCategory/getCategorySort",getCategoryDelAll:"/marriage_helper/platform.MarriageCategory/getCategoryDelAll"};a["a"]=t},8643:function(e,a,r){}}]);