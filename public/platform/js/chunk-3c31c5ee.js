(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c31c5ee"],{"41e8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:640,visible:t.visible},on:{cancel:t.handleCancel}},[i("div",{staticClass:"detail-content",attrs:{id:"print_table"}},[i("div",{staticStyle:{width:"100%","text-align":"left",color:"lightgrey"}},[t._v(" 更新时间："+t._s(t.data.update_time)+" ")]),i("div",{staticStyle:{width:"100%","text-align":"left","font-size":"15px","font-weight":"bold"}},[t._v(" 基本信息 ")]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px","padding-top":"15px"}},[i("div",{staticStyle:{position:"absolute","z-index":"100",right:"50px",top:"100px"}},[i("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.data.base_msg.avatar}})]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 姓名 ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(t.data.base_msg.name)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 性别 ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(t.data.base_msg.sex)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 年龄 ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(t.data.base_msg.age)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 工作经验 ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(t.data.base_msg.work_time)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 电话 ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(t.data.base_msg.phone)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 邮箱 ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(t.data.base_msg.email)+" ")])]),t.data.education_history.length?i("div",{staticStyle:{width:"100%","text-align":"left","font-size":"15px","font-weight":"bold"}},[t._v(" 教育经历 ")]):t._e(),t._l(t.data.education_history,(function(e){return i("div",{key:e.id},[i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" "+t._s(e.education_time)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(e.school_name)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(e.education)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(e.education_cate)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" "+t._s(e.profession_name)+" ")])])])})),t.data.work_history.length?i("div",{staticStyle:{width:"100%","text-align":"left","font-size":"15px","font-weight":"bold"}},[t._v(" 工作经历 ")]):t._e(),t._l(t.data.work_history,(function(e){return i("div",{key:e.id},[i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" "+t._s(e.job_time)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(e.job_name)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" "+t._s(e.company_name)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(e.ind_id)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" 下属"+t._s(e.branch_number)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 工作描述 ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[t._v(" "+t._s(e.job_desc)+" ")])])})),t.data.project_history.length?i("div",{staticStyle:{width:"100%","text-align":"left","font-size":"15px","font-weight":"bold"}},[t._v(" 项目经历 ")]):t._e(),t._l(t.data.project_history,(function(e){return i("div",{key:e.id},[i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" "+t._s(e.pro_time)+" ")]),i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center","padding-left":"30px","padding-right":"30px"}},[t._v(" "+t._s(e.project_name)+" ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[i("div",{staticStyle:{width:"150px",display:"inline","text-align":"center"}},[t._v(" 项目描述 ")])]),i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[t._v(" "+t._s(e.pro_desc)+" ")])])})),t.data.evaluate?i("div",{staticStyle:{width:"100%","text-align":"left","font-size":"15px","font-weight":"bold"}},[t._v(" 自我评价 ")]):t._e(),t.data.evaluate?i("div",{staticStyle:{width:"100%","padding-left":"20px","padding-bottom":"15px"}},[t._v(" "+t._s(t.data.evaluate)+" ")]):t._e()],2),i("template",{slot:"footer"},[i("a-button",{key:"back",on:{click:t.print}},[t._v(t._s(t.L("打印")))]),i("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(t.L("关闭")))])],1)],2)},n=[],d=i("dcd5"),l=i("290c"),r=i("da05"),p=(i("add5"),{name:"jobResume",components:{ACol:r["b"],ARow:l["a"]},data:function(){return{title:"人员简历",visible:!1,data:{update_time:"",base_msg:{name:"",sex:"",age:"",work_time:"",phone:"",email:"",avatar:"",address:""},education_history:[],work_history:[],project_history:[],evaluate:""}}},methods:{getList:function(t){var e=this;this.visible=!0,this.data=[];var i={id:t};this.request(d["a"].getResumeMsg,i).then((function(t){e.data=t}))},handleCancel:function(){this.visible=!1},handleSubmit:function(){this.visible=!1},print:function(){var t="@page { size: auto A4 landscape;margin:3mm;} @media print { }";printJS({printable:"print_table",type:"html",targetStyles:["*"],maxWidth:"100%",style:t,scanStyles:!1})}}}),s=p,c=i("2877"),g=Object(c["a"])(s,a,n,!1,null,"57e11acb",null);e["default"]=g.exports},dcd5:function(t,e,i){"use strict";var a={getRecruitHrList:"/recruit/merchant.NewRecruitHr/getRecruitHrList",getRecruitHrCreate:"/recruit/merchant.NewRecruitHr/getRecruitHrCreate",getRecruitHrInfo:"/recruit/merchant.NewRecruitHr/getRecruitHrInfo",getRecruitHrDel:"/recruit/merchant.NewRecruitHr/getRecruitHrDel",getJobList:"/recruit/merchant.RecruitMerchant/getJobList",updateJob:"/recruit/merchant.RecruitMerchant/updateJob",delJob:"/recruit/merchant.RecruitMerchant/delJob",getJobSearch:"/recruit/merchant.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/merchant.RecruitMerchant/getJobDetail",industryTree:"/recruit/merchant.Company/industryTree",getInfo:"/recruit/merchant.Company/getInfo",saveInfo:"/recruit/merchant.Company/saveInfo",getRecruitWelfareLabelList:"/recruit/merchant.Company/getRecruitWelfareLabelList",getRecruitWelfareLabelCreate:"/recruit/merchant.Company/getRecruitWelfareLabelCreate",getRecruitWelfareLabelInfo:"/recruit/merchant.Company/getRecruitWelfareLabelInfo",getList:"/recruit/merchant.TalentManagement/getList",getLibMsgLIst:"/recruit/merchant.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/merchant.TalentManagement/getResumeMsg"};e["a"]=a}}]);