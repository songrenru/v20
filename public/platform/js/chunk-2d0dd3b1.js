(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd3b1"],{8102:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{width:1e3,title:t.title,visible:t.visible_director,maskClosable:!1,"confirm-loading":t.confirmLoading},on:{cancel:t.handleCancel,ok:t.handleOk}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"负责人",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-select",{staticStyle:{width:"30%"},attrs:{placeholder:"请选择"},on:{change:t.select_director},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},t._l(t.work_list,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"负责人手机号",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"提醒时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",[t._v("将在每月")]),t._v("   "),a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"1"},model:{value:t.day,callback:function(e){t.day=e},expression:"day"}},[a("a-select-option",{attrs:{value:1}},[t._v(" 01 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 02 ")]),a("a-select-option",{attrs:{value:3}},[t._v(" 03 ")]),a("a-select-option",{attrs:{value:4}},[t._v(" 04 ")]),a("a-select-option",{attrs:{value:5}},[t._v(" 05 ")]),a("a-select-option",{attrs:{value:6}},[t._v(" 06 ")]),a("a-select-option",{attrs:{value:7}},[t._v(" 07 ")]),a("a-select-option",{attrs:{value:8}},[t._v(" 08 ")]),a("a-select-option",{attrs:{value:9}},[t._v(" 09 ")]),a("a-select-option",{attrs:{value:10}},[t._v(" 10 ")]),a("a-select-option",{attrs:{value:11}},[t._v(" 11 ")]),a("a-select-option",{attrs:{value:12}},[t._v(" 12 ")]),a("a-select-option",{attrs:{value:13}},[t._v(" 13 ")]),a("a-select-option",{attrs:{value:14}},[t._v(" 14 ")]),a("a-select-option",{attrs:{value:15}},[t._v(" 15 ")]),a("a-select-option",{attrs:{value:16}},[t._v(" 16 ")]),a("a-select-option",{attrs:{value:17}},[t._v(" 17 ")]),a("a-select-option",{attrs:{value:18}},[t._v(" 18 ")]),a("a-select-option",{attrs:{value:19}},[t._v(" 19 ")]),a("a-select-option",{attrs:{value:20}},[t._v(" 20 ")]),a("a-select-option",{attrs:{value:21}},[t._v(" 21 ")]),a("a-select-option",{attrs:{value:22}},[t._v(" 22 ")]),a("a-select-option",{attrs:{value:23}},[t._v(" 23 ")]),a("a-select-option",{attrs:{value:24}},[t._v(" 24 ")]),a("a-select-option",{attrs:{value:25}},[t._v(" 25 ")]),a("a-select-option",{attrs:{value:26}},[t._v(" 26 ")]),a("a-select-option",{attrs:{value:27}},[t._v(" 27 ")]),a("a-select-option",{attrs:{value:28}},[t._v(" 28 ")]),a("a-select-option",{attrs:{value:29}},[t._v(" 29 ")]),a("a-select-option",{attrs:{value:30}},[t._v(" 30 ")])],1),a("span",[t._v("日")]),a("a-time-picker",{attrs:{format:"HH:mm",value:t.moment(t.dateDay,"HH:mm")},on:{change:t.onChange}}),a("span",[t._v("发送模板消息给工作人员")])],1),a("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("a-radio",{attrs:{value:1}},[t._v("正常")]),a("a-radio",{attrs:{value:2}},[t._v("禁止")])],1)],1)],1)],1)],1)],1)},o=[],i=(a("b0c0"),a("c1df")),r=a.n(i),l=a("a0e0"),n=a("ca00"),c={data:function(){return{visible_director:!1,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),project_id:0,dateFormat:"YYYY-MM-DD",dateDay:"09:00",day:1,title:"添加负责人",work_list:[],worker_id:"",phone:"",status:1,time:"2021-7-30",name:"",id:0,tokenName:"",sysName:""}},methods:{onChange:function(t,e){null==t&&(e="00:00"),this.dateDay=e,this.$forceUpdate()},select_director:function(t){this.phone=t.phone,this.worker_id=t.wid,this.name=t.name},moment:r.a,add:function(t){var e=Object(n["j"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.name="",this.phone="",this.worker_id=0,this.dateDay="09:00",this.day=1,this.status=1,this.title="添加负责人",this.project_id=t,this.getWorkers(),this.visible_director=!0,this.id=0},edit:function(t,e){var a=Object(n["j"])(location.hash);a?(this.tokenName=a+"_access_token",this.sysName=a):this.sysName="village",this.title="编辑负责人",this.project_id=t,this.id=e,this.getWorkers(),this.getWorkerInfo(),this.visible_director=!0},getWorkerInfo:function(){var t=this;this.request(l["a"].getWorkerInfo,{id:this.id,tokenName:this.tokenName}).then((function(e){t.status=e.status,t.name=e.name,t.phone=e.phone,t.worker_id=e.worker_id,t.dateDay=e.dateDay,t.day=e.day}))},getWorkers:function(){var t=this;this.request(l["a"].getWorkers,{tokenName:this.tokenName}).then((function(e){t.work_list=e}))},handleCancel:function(){this.visible_director=!1},handleOk:function(){var t=this;this.id>0?this.request(l["a"].saveMeterDirector,{id:this.id,worker_id:this.worker_id,name:this.name,phone:this.phone,status:this.status,dateDay:this.dateDay,day:this.day,tokenName:this.tokenName}).then((function(e){t.$message.success("修改成功"),t.$emit("getMeterDirectorList"),t.visible_director=!1})):this.request(l["a"].addMeterDirector,{project_id:this.project_id,worker_id:this.worker_id,name:this.name,phone:this.phone,status:this.status,dateDay:this.dateDay,day:this.day,tokenName:this.tokenName}).then((function(e){t.$message.success("添加成功"),t.$emit("getMeterDirectorList"),t.visible_director=!1}))}}},h=c,d=a("2877"),p=Object(d["a"])(h,s,o,!1,null,"41a3f0cc",null);e["default"]=p.exports}}]);