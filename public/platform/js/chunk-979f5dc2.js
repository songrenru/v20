(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-979f5dc2"],{"47b9":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:640,visible:e.visible},on:{cancel:e.handleCancel}},[r("a-timeline",e._l(e.data,(function(t){return r("a-timeline-item",{key:t.id},[r("a-row",{attrs:{gutter:4}},[r("a-col",{attrs:{span:24}},[r("span",[e._v(" "+e._s(t.name)+" ")])]),t.remark?r("a-col",{attrs:{span:24}},[r("span",[e._v(" "+e._s(t.remark)+" ")])]):e._e(),r("a-col",{attrs:{span:24}},[r("span",{staticStyle:{color:"lightgrey"}},[e._v(" "+e._s(t.update_time)+" ")])])],1)],1)})),1),r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(e._s(e.L("取消")))]),r("a-button",{key:"submit",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.L("确定")))])],1)],2)},i=[],n=r("dcd5"),c={name:"historyList",data:function(){return{title:"历史记录",visible:!1,data:[]}},methods:{getList:function(e,t){var r=this;this.visible=!0,this.data=[];var a={resume_id:e,deliver_id:t};this.request(n["a"].getLibMsgLIst,a).then((function(e){r.data=e}))},handleCancel:function(){this.visible=!1},handleSubmit:function(){this.visible=!1}}},u=c,s=r("2877"),l=Object(s["a"])(u,a,i,!1,null,"31670d1f",null);t["default"]=l.exports},dcd5:function(e,t,r){"use strict";var a={getRecruitHrList:"/recruit/merchant.NewRecruitHr/getRecruitHrList",getRecruitHrCreate:"/recruit/merchant.NewRecruitHr/getRecruitHrCreate",getRecruitHrInfo:"/recruit/merchant.NewRecruitHr/getRecruitHrInfo",getRecruitHrDel:"/recruit/merchant.NewRecruitHr/getRecruitHrDel",getJobList:"/recruit/merchant.RecruitMerchant/getJobList",updateJob:"/recruit/merchant.RecruitMerchant/updateJob",delJob:"/recruit/merchant.RecruitMerchant/delJob",getJobSearch:"/recruit/merchant.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/merchant.RecruitMerchant/getJobDetail",industryTree:"/recruit/merchant.Company/industryTree",getInfo:"/recruit/merchant.Company/getInfo",saveInfo:"/recruit/merchant.Company/saveInfo",getRecruitWelfareLabelList:"/recruit/merchant.Company/getRecruitWelfareLabelList",getRecruitWelfareLabelCreate:"/recruit/merchant.Company/getRecruitWelfareLabelCreate",getRecruitWelfareLabelInfo:"/recruit/merchant.Company/getRecruitWelfareLabelInfo",getList:"/recruit/merchant.TalentManagement/getList",getLibMsgLIst:"/recruit/merchant.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/merchant.TalentManagement/getResumeMsg"};t["a"]=a}}]);