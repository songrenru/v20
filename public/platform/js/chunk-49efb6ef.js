(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49efb6ef","chunk-34fd56e3","chunk-2d0dd3b1"],{"2fa1":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[a("p",[e._v(" 新版收费生效后，抄表录入统一由水电燃气收费项的收费标准进行管理设置，移动端及后台录入抄表数据交互不变，所有的抄表记录及生成的账单数据可汇总查询。"),a("br"),e._v(" 1、仅展示当前有正在生效的收费标准的收费项目，若没有，则该页为空白页；"),a("br"),e._v(" 2、收费项目在物业管理平台设置；"),a("br"),e._v(" 3、在抄表管理支持户录入抄表单和导入抄表单。"),a("br")])])],1),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.pagination},on:{change:e.tableChange},scopedSlots:e._u([{key:"director_manage",fn:function(t,i){return a("span",{},[1==e.role_managebe?a("a",{on:{click:function(t){return e.$refs.directorModel.get(i.project_id)}}},[e._v("负责人管理")]):e._e()])}},{key:"action",fn:function(t,i){return a("span",{},[e.is_show?a("a",{on:{click:function(t){return e.$refs.addMeterPrice.add(i.project_name,i.rule_name,i.unit_price,i.rate,i.charge_type,i.rule_id,i.project_id)}}},[e._v("录入费用")]):e._e(),e.is_show?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==e.role_addmeter?a("a",{on:{click:function(t){return e.$refs.addMeter.add(i.project_name,i.rule_name,i.unit_price,i.rate,i.charge_type,i.rule_id,i.project_id)}}},[e._v("录入用量")]):e._e(),1==e.role_addmeter?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==e.role_recordmeter?a("a",{on:{click:function(t){return e.$refs.recordModel.get(i.charge_name,i.project_id,i.rule_name)}}},[e._v("抄表记录")]):e._e(),1==e.role_recordmeter?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==e.role_meterset?a("a",{on:{click:function(t){return e.setMeterReading(i)}}},[e._v("抄表设置")]):e._e(),e.is_revise_btn?a("a-divider",{attrs:{type:"vertical"}}):e._e(),e.is_revise_btn?a("a",{on:{click:function(t){return e.$refs.addMeter.add(i.project_name,i.rule_name,i.unit_price,i.rate,i.charge_type,i.rule_id,i.project_id,"revise_data")}}},[e._v("手工矫正")]):e._e()],1)}}])})],1),a("meter-director-list",{ref:"directorModel"}),a("meter-record-list",{ref:"recordModel"}),a("add-meter",{ref:"addMeter",on:{getMeterProject:e.getMeterProject}}),a("add-meter-price",{ref:"addMeterPrice",on:{getMeterProject:e.getMeterProject}}),a("a-modal",{attrs:{title:"编辑缴费周期",width:500,visible:e.mRvisible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleMrSubmit,cancel:e.handleMrCancel}},[a("a-form-model",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"缴费时间"}},[e._v(" 每月 "),a("a-input-number",{staticStyle:{width:"100px"},attrs:{placeholder:"缴费时间",min:0,max:30},model:{value:e.mday,callback:function(t){e.mday=t},expression:"mday"}}),e._v(" 号进行抄表 "),a("span",{staticStyle:{color:"red"}},[e._v("*必填项（0表示关闭缴费时间）")])],1)],1)],1)],1)},r=[],n=(a("7d24"),a("dfae")),o=a("a0e0"),s=a("99a6"),l=a("0b52"),c=a("b794"),d=a("f5bc"),p=a("ca00"),u={components:{MeterDirectorList:s["default"],MeterRecordList:l["default"],addMeter:c["default"],addMeterPrice:d["default"],"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){var e=this;return{labelCol:{span:6},wrapperCol:{span:16},list:[],is_show:!1,pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},page:1,tokenName:"",sysName:"",confirmLoading:!1,mday:0,mRvisible:!1,mRrecord:{},role_addmeter:0,role_managebe:0,role_meterset:0,role_recordmeter:0,is_revise_btn:0}},mounted:function(){var e=Object(p["j"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.getMeterProject()},computed:{columns:function(){var e=[{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"收费所属类别",dataIndex:"subject_name",key:"subject_name"},{title:"当前生效标准",dataIndex:"rule_name",key:"rule_name"},{title:"负责人管理",dataIndex:"",key:"director_manage",scopedSlots:{customRender:"director_manage"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},methods:{getMeterProject:function(){var e=this;this.request(o["a"].getMeterProject,{page:this.page,limit:this.pagination.pageSize,tokenName:this.tokenName}).then((function(t){console.log("res",t),e.is_show=t.is_show,void 0!=t.is_revise_btn&&t.is_revise_btn&&(e.is_revise_btn=t.is_revise_btn),e.list=t.list,e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,void 0!=t.role_addmeter?(e.role_addmeter=t.role_addmeter,e.role_managebe=t.role_managebe,e.role_meterset=t.role_meterset,e.role_recordmeter=t.role_recordmeter):(e.role_addmeter=1,e.role_managebe=1,e.role_meterset=1,e.role_recordmeter=1)}))},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getMeterProject()},setMeterReading:function(e){this.mRrecord=e,this.mday=e.mday,this.mRvisible=!0},handleMrSubmit:function(){var e=this;if(this.mday>30||this.mday<0)return this.$message.error("缴费时间,请设置在0到30之间的数字"),!1;this.request(o["a"].setMeterReadingDay,{mday:this.mday,project_id:this.mRrecord.project_id,subject_id:this.mRrecord.subject_id,tokenName:this.tokenName}).then((function(t){e.$message.success("保存成功！"),e.getMeterProject(),e.handleMrCancel()}))},handleMrCancel:function(){this.mRvisible=!1,this.mRrecord={},this.mday=0},tableChange:function(e){e.current&&e.current>0&&(this.page=e.current,this.getMeterProject())}}},_=u,h=a("2877"),m=Object(h["a"])(_,i,r,!1,null,"0fd1de8f",null);t["default"]=m.exports},8102:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:1e3,title:e.title,visible:e.visible_director,maskClosable:!1,"confirm-loading":e.confirmLoading},on:{cancel:e.handleCancel,ok:e.handleOk}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"负责人",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{staticStyle:{width:"30%"},attrs:{placeholder:"请选择"},on:{change:e.select_director},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},e._l(e.work_list,(function(t){return a("a-select-option",{key:t},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"负责人手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"提醒时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("span",[e._v("将在每月")]),e._v("   "),a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"1"},model:{value:e.day,callback:function(t){e.day=t},expression:"day"}},[a("a-select-option",{attrs:{value:1}},[e._v(" 01 ")]),a("a-select-option",{attrs:{value:2}},[e._v(" 02 ")]),a("a-select-option",{attrs:{value:3}},[e._v(" 03 ")]),a("a-select-option",{attrs:{value:4}},[e._v(" 04 ")]),a("a-select-option",{attrs:{value:5}},[e._v(" 05 ")]),a("a-select-option",{attrs:{value:6}},[e._v(" 06 ")]),a("a-select-option",{attrs:{value:7}},[e._v(" 07 ")]),a("a-select-option",{attrs:{value:8}},[e._v(" 08 ")]),a("a-select-option",{attrs:{value:9}},[e._v(" 09 ")]),a("a-select-option",{attrs:{value:10}},[e._v(" 10 ")]),a("a-select-option",{attrs:{value:11}},[e._v(" 11 ")]),a("a-select-option",{attrs:{value:12}},[e._v(" 12 ")]),a("a-select-option",{attrs:{value:13}},[e._v(" 13 ")]),a("a-select-option",{attrs:{value:14}},[e._v(" 14 ")]),a("a-select-option",{attrs:{value:15}},[e._v(" 15 ")]),a("a-select-option",{attrs:{value:16}},[e._v(" 16 ")]),a("a-select-option",{attrs:{value:17}},[e._v(" 17 ")]),a("a-select-option",{attrs:{value:18}},[e._v(" 18 ")]),a("a-select-option",{attrs:{value:19}},[e._v(" 19 ")]),a("a-select-option",{attrs:{value:20}},[e._v(" 20 ")]),a("a-select-option",{attrs:{value:21}},[e._v(" 21 ")]),a("a-select-option",{attrs:{value:22}},[e._v(" 22 ")]),a("a-select-option",{attrs:{value:23}},[e._v(" 23 ")]),a("a-select-option",{attrs:{value:24}},[e._v(" 24 ")]),a("a-select-option",{attrs:{value:25}},[e._v(" 25 ")]),a("a-select-option",{attrs:{value:26}},[e._v(" 26 ")]),a("a-select-option",{attrs:{value:27}},[e._v(" 27 ")]),a("a-select-option",{attrs:{value:28}},[e._v(" 28 ")]),a("a-select-option",{attrs:{value:29}},[e._v(" 29 ")]),a("a-select-option",{attrs:{value:30}},[e._v(" 30 ")])],1),a("span",[e._v("日")]),a("a-time-picker",{attrs:{format:"HH:mm",value:e.moment(e.dateDay,"HH:mm")},on:{change:e.onChange}}),a("span",[e._v("发送模板消息给工作人员")])],1),a("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[a("a-radio",{attrs:{value:1}},[e._v("正常")]),a("a-radio",{attrs:{value:2}},[e._v("禁止")])],1)],1)],1)],1)],1)],1)},r=[],n=(a("b0c0"),a("c1df")),o=a.n(n),s=a("a0e0"),l=a("ca00"),c={data:function(){return{visible_director:!1,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),project_id:0,dateFormat:"YYYY-MM-DD",dateDay:"09:00",day:1,title:"添加负责人",work_list:[],worker_id:"",phone:"",status:1,time:"2021-7-30",name:"",id:0,tokenName:"",sysName:""}},methods:{onChange:function(e,t){null==e&&(t="00:00"),this.dateDay=t,this.$forceUpdate()},select_director:function(e){this.phone=e.phone,this.worker_id=e.wid,this.name=e.name},moment:o.a,add:function(e){var t=Object(l["j"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.name="",this.phone="",this.worker_id=0,this.dateDay="09:00",this.day=1,this.status=1,this.title="添加负责人",this.project_id=e,this.getWorkers(),this.visible_director=!0,this.id=0},edit:function(e,t){var a=Object(l["j"])(location.hash);a?(this.tokenName=a+"_access_token",this.sysName=a):this.sysName="village",this.title="编辑负责人",this.project_id=e,this.id=t,this.getWorkers(),this.getWorkerInfo(),this.visible_director=!0},getWorkerInfo:function(){var e=this;this.request(s["a"].getWorkerInfo,{id:this.id,tokenName:this.tokenName}).then((function(t){e.status=t.status,e.name=t.name,e.phone=t.phone,e.worker_id=t.worker_id,e.dateDay=t.dateDay,e.day=t.day}))},getWorkers:function(){var e=this;this.request(s["a"].getWorkers,{tokenName:this.tokenName}).then((function(t){e.work_list=t}))},handleCancel:function(){this.visible_director=!1},handleOk:function(){var e=this;this.id>0?this.request(s["a"].saveMeterDirector,{id:this.id,worker_id:this.worker_id,name:this.name,phone:this.phone,status:this.status,dateDay:this.dateDay,day:this.day,tokenName:this.tokenName}).then((function(t){e.$message.success("修改成功"),e.$emit("getMeterDirectorList"),e.visible_director=!1})):this.request(s["a"].addMeterDirector,{project_id:this.project_id,worker_id:this.worker_id,name:this.name,phone:this.phone,status:this.status,dateDay:this.dateDay,day:this.day,tokenName:this.tokenName}).then((function(t){e.$message.success("添加成功"),e.$emit("getMeterDirectorList"),e.visible_director=!1}))}}},d=c,p=a("2877"),u=Object(p["a"])(d,i,r,!1,null,"41a3f0cc",null);t["default"]=u.exports},"99a6":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{width:1e3,title:"负责人列表",visible:e.visible,maskClosable:!1,"confirm-loading":e.confirmLoading},on:{close:e.handleCancel}},[a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[1==e.role_addmanage?a("a-button",{staticClass:"margin_top_20",attrs:{type:"primary"},on:{click:function(t){return e.$refs.addDirectorModel.add(e.project_id)}}},[e._v(" 添加 ")]):e._e(),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.pagination},on:{change:e.tableChange},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[1==e.role_editmanage?a("a",{on:{click:function(t){return e.$refs.addDirectorModel.edit(e.project_id,i.id)}}},[e._v("修改")]):e._e(),a("a-divider",{attrs:{type:"vertical"}}),1==e.role_delmanage?a("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px"},attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.del_director(i.id)}}},[a("a",[e._v("删除")])]):e._e()],1)}},{key:"status",fn:function(t,i){return a("span",{},[1==i.status?a("span",{staticStyle:{color:"dodgerblue"}},[e._v("正常")]):a("span",{staticStyle:{color:"red"}},[e._v("禁止")])])}}])})],1),a("add-director",{ref:"addDirectorModel",on:{getMeterDirectorList:e.getMeterDirectorList}})],1)])},r=[],n=a("a0e0"),o=a("8102"),s=a("ca00"),l={components:{AddDirector:o["default"]},data:function(){var e=this;return{visible:!1,confirmLoading:!1,list:[],pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},page:1,project_id:0,tokenName:"",sysName:"",role_addmanage:0,role_delmanage:0,role_editmanage:0}},mounted:function(){var e=Object(s["j"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},computed:{columns:function(){var e=[{title:"负责人姓名",dataIndex:"name",key:"name"},{title:"负责人手机号",dataIndex:"phone",key:"phone"},{title:"提醒时间",dataIndex:"notice_time_txt",key:"notice_time_txt"},{title:"添加时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},created:function(){},methods:{del_director:function(e){var t=this;this.request(n["a"].delMeterDirector,{id:e,tokenName:this.tokenName}).then((function(e){t.$message.success("删除成功"),t.getMeterDirectorList()}))},get:function(e){this.project_id=e,this.getMeterDirectorList(),this.visible=!0},getMeterDirectorList:function(){var e=this;this.request(n["a"].getMeterDirectorList,{page:this.page,limit:this.pagination.pageSize,project_id:this.project_id,tokenName:this.tokenName}).then((function(t){console.log("res",t),e.list=t.list,e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,void 0!=t.role_addmanage?(e.role_addmanage=t.role_addmanage,e.role_delmanage=t.role_delmanage,e.role_editmanage=t.role_editmanage):(e.role_addmanage=1,e.role_delmanage=1,e.role_editmanage=1)}))},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getMeterDirectorList(),console.log("onTableChange==>",e,t)},tableChange:function(e){e.current&&e.current>0&&(this.page=e.current,this.getMeterDirectorList())},handleCancel:function(){this.visible=!1}}},c=l,d=a("2877"),p=Object(d["a"])(c,i,r,!1,null,"05c2e845",null);t["default"]=p.exports},f5bc:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:1e3,title:e.xtitle,visible:e.visible_meter,maskClosable:!1,"confirm-loading":e.confirmLoading},on:{cancel:e.handleCancel,ok:e.handleOk}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"选择",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e.visible_meter?a("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:e.options,"load-data":e.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:e.setVisionsFunc}}):e._e()],1),a("a-form-item",{attrs:{label:"收费项目",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.project_name,callback:function(t){e.project_name=t},expression:"project_name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"收费标准名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.charge_name,callback:function(t){e.charge_name=t},expression:"charge_name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"单价",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.unit_price,callback:function(t){e.unit_price=t},expression:"unit_price"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"倍率",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"交易类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,value:"购买",disabled:"disabled"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"抄表时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-date-picker",{attrs:{"show-time":{format:"HH:mm"},placeholder:"选择抄表时间","disabled-date":e.disabledDate,"disabled-time":e.disabledDateTime,format:e.dateFormat,value:e.meter_time},on:{change:e.onMeterChange}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"总价",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10},model:{value:e.total,callback:function(t){e.total=t},expression:"total"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"线下支付方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-select",{staticStyle:{width:"300px"},attrs:{"default-value":"0",placeholder:"请选择"},on:{change:e.payTypeChange},model:{value:e.offline_pay_type,callback:function(t){e.offline_pay_type=t},expression:"offline_pay_type"}},[a("a-select-option",{key:"0"},[e._v(" 请选择 ")]),e._l(e.offline_pay_type_arr,(function(t){return a("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10},model:{value:e.note,callback:function(t){e.note=t},expression:"note"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},r=[],n=a("2909"),o=a("1da1"),s=(a("96cf"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),l=a("ca00"),c=a("c1df"),d=a.n(c),p={name:"addMeterPrice",data:function(){return{visible_meter:!1,confirmLoading:!1,offline_pay_type_arr:[],form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},options:[],project_name:"",charge_name:"",rate:1,unit_price:0,total:"",offline_pay_type:"",note:"",single_id:0,floor_id:0,layer_id:0,room_id:0,rule_id:0,project_id:0,charge_type:"",tokenName:"",sysName:"",opt_meter_time:"",meter_time:"",dateFormat:"YYYY-MM-DD HH:mm",xtitle:"录入费用"}},methods:{moment:d.a,payChange:function(){var e=this;this.request(s["a"].getOfflineList,{}).then((function(t){e.offline_pay_type_arr=t}))},payTypeChange:function(e){this.offline_pay_type=e},add:function(e,t,a,i,r,n,o){var s=Object(l["j"])(location.hash);s?(this.tokenName=s+"_access_token",this.sysName=s):this.sysName="village",this.opt_meter_time=this.get_data_time(),this.project_name=e,this.charge_name=t,this.unit_price=a,this.rate=i,this.charge_type=r,this.rule_id=n,this.project_id=o,this.getSingleListByVillage(),this.visible_meter=!0,this.payChange()},get_data_time:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes();return console.log(t),t},disabledDate:function(e){return e&&e>d()().endOf("day")},date_range:function(e,t){for(var a=[],i=e;i<=t;i++)a.push(i);return a},disabledDateTime:function(e){console.log("date",e);var t=(new Date).getDate(),a=new Date(e._i).getDate(),i=new Date(e._i).getHours();if(console.log("xday",t,"selectdate",a),a<t)return{disabledHours:function(){return[]},disabledMinutes:function(){return[]}};var r=(new Date).getHours(),n=[],o=r+1;o<23&&(n=this.date_range(o,23));var s=[];if(r==i){var l=(new Date).getMinutes(),c=l+1;c<59&&(s=this.date_range(c,59))}return{disabledHours:function(){return n},disabledMinutes:function(){return s}}},onMeterChange:function(e,t){this.opt_meter_time=t,this.meter_time=e},handleOk:function(){var e=this;if(console.log("room_id1111",this.room_id),0==this.room_id)return this.$message.warning("请选择房间"),!1;this.request("community/village_api.HouseMeter/meterReadingPriceAdd",{single_id:this.single_id,floor_id:this.floor_id,layer_id:this.layer_id,vacancy_id:this.room_id,total:this.total,offline_pay_type:this.offline_pay_type,charge_name:this.project_name,unit_price:this.unit_price,charge_type:this.charge_type,rule_id:this.rule_id,note:this.note,project_id:this.project_id,tokenName:this.tokenName,rate:this.rate,opt_meter_time:this.opt_meter_time}).then((function(t){e.$message.success("录入成功"),e.$emit("getMeterProject"),e.note="",e.total="",e.single_id=0,e.floor_id=0,e.layer_id=0,e.offline_pay_type="",e.offline_pay_type_arr=[],e.opt_meter_time="",e.meter_time="",e.visible_meter=!1,e.confirmLoading=!1}))},handleCancel:function(){this.note="",this.total="",this.single_id=0,this.floor_id=0,this.layer_id=0,this.offline_pay_type="",this.offline_pay_type_arr=[],this.opt_meter_time="",this.meter_time="",this.visible_meter=!1,this.confirmLoading=!1},getSingleListByVillage:function(){var e=this,t={tokenName:this.tokenName};this.charge_type&&(t["charge_type"]=this.charge_type),this.rule_id&&(t["rule_id"]=this.rule_id),this.project_id&&(t["project_id"]=this.project_id),this.request(s["a"].getSingleListByVillage,t).then((function(t){if(console.log("+++++++Single",t),t){var a=[];t.map((function(e){a.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=a}}))},getFloorList:function(e){var t=this,a={pid:e,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(e){t.request(s["a"].getFloorList,a).then((function(t){console.log("+++++++Single",t),console.log("resolve",e),e(t)}))}))},getLayerList:function(e){var t=this,a={pid:e,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(e){t.request(s["a"].getLayerList,a).then((function(t){console.log("+++++++Single",t),t&&e(t)}))}))},getVacancyList:function(e){var t=this,a={pid:e,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(e){t.request(s["a"].getVacancyList,a).then((function(t){console.log("+++++++Single",t),t&&e(t)}))}))},loadDataFunc:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e[e.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var i,r,o,s,l,c,d,p,u,_,h,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.room_id=0,1!==e.length){a.next=14;break}return t.single_id=e[0],i=Object(n["a"])(t.options),a.next=6,t.getFloorList(e[0]);case 6:r=a.sent,console.log("res",r),o=[],r.map((function(e){return o.push({label:e.name,value:e.id,isLeaf:!1}),i["children"]=o,!0})),i.find((function(t){return t.value===e[0]}))["children"]=o,t.options=i,a.next=43;break;case 14:if(2!==e.length){a.next=27;break}return t.floor_id=e[1],a.next=18,t.getLayerList(e[1]);case 18:s=a.sent,l=Object(n["a"])(t.options),c=[],s.map((function(e){return c.push({label:e.name,value:e.id,isLeaf:!1}),!0})),d=l.find((function(t){return t.value===e[0]})),d.children.find((function(t){return t.value===e[1]}))["children"]=c,t.options=l,a.next=43;break;case 27:if(3!==e.length){a.next=42;break}return t.layer_id=e[2],a.next=31,t.getVacancyList(e[2]);case 31:p=a.sent,u=Object(n["a"])(t.options),_=[],p.map((function(e){return _.push({label:e.name,value:e.id,isLeaf:!0}),!0})),h=u.find((function(t){return t.value===e[0]})),m=h.children.find((function(t){return t.value===e[1]})),m.children.find((function(t){return t.value===e[2]}))["children"]=_,t.options=u,console.log("_this.options",t.options),a.next=43;break;case 42:4===e.length&&(t.room_id=e[3]);case 43:case"end":return a.stop()}}),a)})))()}}},u=p,_=a("2877"),h=Object(_["a"])(u,i,r,!1,null,"4bcc274e",null);t["default"]=h.exports}}]);