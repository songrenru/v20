(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f78723e","chunk-e1e9eaca","chunk-47e15848","chunk-f189d49a","chunk-34fd56e3","chunk-2d0dd3b1","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"0b52":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-modal",{attrs:{width:1200,title:"抄表记录",visible:t.visible_record,maskClosable:!1,"confirm-loading":t.confirmLoading},on:{cancel:t.handleCancel}},[a("div",{staticClass:"message-suggestions-list-box"},[a("div",{staticClass:"search-box",staticStyle:{"margin-top":"20px","margin-left":"5px"}},[a("a-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:48}},[a("a-col",{staticStyle:{"padding-right":"0px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("房间：")]),a("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:t.options,"load-data":t.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:t.setVisionsFunc},model:{value:t.room_id,callback:function(e){t.room_id=e},expression:"room_id"}})],1),a("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"5px","padding-right":"1px",width:"470px"},attrs:{md:8,sm:24}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),a("a-range-picker",{staticStyle:{width:"325px"},attrs:{allowClear:!0},on:{change:t.dateChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-col",{staticStyle:{"padding-left":"0px","padding-right":"1px",width:"90px"},attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.printList()}}},[t._v("Excel导出")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.createUploadModal.add(t.charge_name,t.project_id)}}},[t._v("导入")])],1)],1)],1),a("br"),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change}})],1)]),a("meter-upload",{ref:"createUploadModal",attrs:{height:800,width:500},on:{ok:t.handleOks}})],1)},n=[],r=a("2909"),s=a("1da1"),o=(a("96cf"),a("ac1f"),a("841c"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),l=a("ca00"),c=a("d2cd"),d=[{title:"住址",dataIndex:"address",key:"address",scopedSlots:{customRender:"room_position"}},{title:"姓名",dataIndex:"name",key:"name"},{title:"电话",dataIndex:"phone",key:"phone"},{title:"单价（元）",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"操作人",dataIndex:"realname",key:"realname"},{title:"备注",dataIndex:"note",key:"note"}],u=[],h={components:{meterUpload:c["default"]},data:function(){return{visible_record:!1,confirmLoading:!1,data:u,columns:d,options:[],pagination:{pageSize:10,total:10},loading:!1,charge_name:"",project_id:0,page:1,room_id:0,date_time:[],tokenName:"",sysName:""}},activated:function(){var t=Object(l["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village"},methods:{dateChange:function(t,e){this.date_time=e,console.log("dateString",this.date_time)},get:function(t,e){this.charge_name=t,this.project_id=e,this.getList(t,e),this.getSingleListByVillage(),this.visible_record=!0},printList:function(){var t=this;this.loading=!0,this.request(o["a"].printRecordList,{charge_name:this.charge_name,room_id:this.room_id,date_time:this.date_time,tokenName:this.tokenName}).then((function(e){window.location.href=e.url,t.loading=!1}))},handleCancel:function(){this.visible_record=!1},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.page=t.current,this.getList(this.charge_name,this.project_id))},getList:function(t,e){var a=this;this.request(o["a"].getMeterReadingRecord,{charge_name:t,project_id:e,page:this.page,room_id:this.room_id,date_time:this.date_time,tokenName:this.tokenName,single_id:this.single_id,floor_id:this.floor_id,layer_id:this.layer_id}).then((function(t){a.pagination.total=t.count?t.count:0,a.pagination.pageSize=t.total_limit?t.total_limit:10,a.data=t.list,a.loading=!1}))},searchList:function(){console.log("search",this.search),this.getList(this.charge_name,this.project_id)},getSingleListByVillage:function(){var t=this;this.request(o["a"].getSingleListByVillage,{tokenName:this.tokenName}).then((function(e){if(console.log("+++++++Single",e),e){var a=[];e.map((function(t){a.push({label:t.name,value:t.id,isLeaf:!1})})),t.options=a}}))},getFloorList:function(t){var e=this;return new Promise((function(a){e.request(o["a"].getFloorList,{pid:t,tokenName:e.tokenName}).then((function(t){console.log("+++++++Single",t),console.log("resolve",a),a(t)}))}))},getLayerList:function(t){var e=this;return new Promise((function(a){e.request(o["a"].getLayerList,{pid:t,tokenName:e.tokenName}).then((function(t){console.log("+++++++Single",t),t&&a(t)}))}))},getVacancyList:function(t){var e=this;return new Promise((function(a){e.request(o["a"].getVacancyList,{pid:t,tokenName:e.tokenName}).then((function(t){console.log("+++++++Single",t),t&&a(t)}))}))},loadDataFunc:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t[t.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return e.stop()}}),e)})))()},setVisionsFunc:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,o,l,c,d,u,h,p,m,_;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(1!==t.length){a.next=12;break}return i=Object(r["a"])(e.options),a.next=4,e.getFloorList(t[0]);case 4:n=a.sent,console.log("res",n),s=[],n.map((function(t){return s.push({label:t.name,value:t.id,isLeaf:!1}),i["children"]=s,!0})),i.find((function(e){return e.value===t[0]}))["children"]=s,e.options=i,a.next=39;break;case 12:if(2!==t.length){a.next=24;break}return a.next=15,e.getLayerList(t[1]);case 15:o=a.sent,l=Object(r["a"])(e.options),c=[],o.map((function(t){return c.push({label:t.name,value:t.id,isLeaf:!1}),!0})),d=l.find((function(e){return e.value===t[0]})),d.children.find((function(e){return e.value===t[1]}))["children"]=c,e.options=l,a.next=39;break;case 24:if(3!==t.length){a.next=38;break}return a.next=27,e.getVacancyList(t[2]);case 27:u=a.sent,h=Object(r["a"])(e.options),p=[],u.map((function(t){return p.push({label:t.name,value:t.id,isLeaf:!0}),!0})),m=h.find((function(e){return e.value===t[0]})),_=m.children.find((function(e){return e.value===t[1]})),_.children.find((function(e){return e.value===t[2]}))["children"]=p,e.options=h,console.log("_this.options",e.options),a.next=39;break;case 38:4===t.length&&console.log("_this.room_id+++",_this.room_id);case 39:case"end":return a.stop()}}),a)})))()}}},p=h,m=a("0c7c"),_=Object(m["a"])(p,i,n,!1,null,"9e75925a",null);e["default"]=_.exports},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function i(t,e,a,i,n,r,s){try{var o=t[r](s),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(i,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var s=t.apply(e,a);function o(t){i(s,n,r,o,l,"next",t)}function l(t){i(s,n,r,o,l,"throw",t)}o(void 0)}))}}},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("6b75");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||r(t)||Object(s["a"])(t)||o()}},"2fa1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[a("p",[t._v(" 新版收费生效后，抄表录入统一由水电燃气收费项的收费标准进行管理设置，移动端及后台录入抄表数据交互不变，所有的抄表记录及生成的账单数据可汇总查询。"),a("br"),t._v(" 1、仅展示当前有正在生效的收费标准的收费项目，若没有，则该页为空白页；"),a("br"),t._v(" 2、收费项目在物业管理平台设置；"),a("br"),t._v(" 3、在抄表管理支持户录入抄表单和导入抄表单。"),a("br")])])],1),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"director_manage",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.directorModel.get(i.project_id)}}},[t._v("负责人管理")])])}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.addMeter.add(i.project_name,i.rule_name,i.unit_price,i.rate,i.charge_type,i.rule_id,i.project_id)}}},[t._v("录入用量")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.$refs.recordModel.get(i.charge_name,i.project_id)}}},[t._v("抄表记录")])],1)}}])})],1),a("meter-director-list",{ref:"directorModel"}),a("meter-record-list",{ref:"recordModel"}),a("add-meter",{ref:"addMeter",on:{getMeterProject:t.getMeterProject}})],1)},n=[],r=(a("7d24"),a("dfae")),s=a("a0e0"),o=a("99a6"),l=a("0b52"),c=a("b794"),d=a("ca00"),u={components:{MeterDirectorList:o["default"],MeterRecordList:l["default"],addMeter:c["default"],"a-collapse":r["a"],"a-collapse-panel":r["a"].Panel},data:function(){return{list:[],pagination:{pageSize:10,total:15},page:1,tokenName:"",sysName:""}},mounted:function(){var t=Object(d["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.getMeterProject()},computed:{columns:function(){var t=[{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"收费所属类别",dataIndex:"subject_name",key:"subject_name"},{title:"当前生效标准",dataIndex:"rule_name",key:"rule_name"},{title:"负责人管理",dataIndex:"",key:"director_manage",scopedSlots:{customRender:"director_manage"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return t}},methods:{getMeterProject:function(){var t=this;this.request(s["a"].getMeterProject,{page:this.page,tokenName:this.tokenName}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getMeterProject())}}},h=u,p=a("0c7c"),m=Object(p["a"])(h,i,n,!1,null,"3104c4df",null);e["default"]=m.exports},3117:function(t,e,a){"use strict";a("886b")},8102:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{width:1e3,title:t.title,visible:t.visible_director,maskClosable:!1,"confirm-loading":t.confirmLoading},on:{cancel:t.handleCancel,ok:t.handleOk}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"负责人",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-select",{staticStyle:{width:"30%"},attrs:{placeholder:"请选择"},on:{change:t.select_director},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},t._l(t.work_list,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"负责人手机号",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"提醒时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",[t._v("将在")]),t._v("   "),a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"1"},model:{value:t.day,callback:function(e){t.day=e},expression:"day"}},[a("a-select-option",{attrs:{value:1}},[t._v(" 01 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 02 ")]),a("a-select-option",{attrs:{value:3}},[t._v(" 03 ")]),a("a-select-option",{attrs:{value:4}},[t._v(" 04 ")]),a("a-select-option",{attrs:{value:5}},[t._v(" 05 ")]),a("a-select-option",{attrs:{value:6}},[t._v(" 06 ")]),a("a-select-option",{attrs:{value:7}},[t._v(" 07 ")]),a("a-select-option",{attrs:{value:8}},[t._v(" 08 ")]),a("a-select-option",{attrs:{value:9}},[t._v(" 09 ")]),a("a-select-option",{attrs:{value:10}},[t._v(" 10 ")]),a("a-select-option",{attrs:{value:11}},[t._v(" 11 ")]),a("a-select-option",{attrs:{value:12}},[t._v(" 12 ")]),a("a-select-option",{attrs:{value:13}},[t._v(" 13 ")]),a("a-select-option",{attrs:{value:14}},[t._v(" 14 ")]),a("a-select-option",{attrs:{value:15}},[t._v(" 15 ")]),a("a-select-option",{attrs:{value:16}},[t._v(" 16 ")]),a("a-select-option",{attrs:{value:17}},[t._v(" 17 ")]),a("a-select-option",{attrs:{value:18}},[t._v(" 18 ")]),a("a-select-option",{attrs:{value:19}},[t._v(" 19 ")]),a("a-select-option",{attrs:{value:20}},[t._v(" 20 ")]),a("a-select-option",{attrs:{value:21}},[t._v(" 21 ")]),a("a-select-option",{attrs:{value:22}},[t._v(" 22 ")]),a("a-select-option",{attrs:{value:23}},[t._v(" 23 ")]),a("a-select-option",{attrs:{value:24}},[t._v(" 24 ")]),a("a-select-option",{attrs:{value:25}},[t._v(" 25 ")]),a("a-select-option",{attrs:{value:26}},[t._v(" 26 ")]),a("a-select-option",{attrs:{value:27}},[t._v(" 27 ")]),a("a-select-option",{attrs:{value:28}},[t._v(" 28 ")]),a("a-select-option",{attrs:{value:29}},[t._v(" 29 ")]),a("a-select-option",{attrs:{value:30}},[t._v(" 30 ")])],1),a("span",[t._v("日")]),a("a-time-picker",{attrs:{format:"HH:mm",value:t.moment(t.dateDay,"HH:mm")},on:{change:t.onChange}}),a("span",[t._v("发送模板消息给工作人员")])],1),a("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("a-radio",{attrs:{value:1}},[t._v("正常")]),a("a-radio",{attrs:{value:2}},[t._v("禁止")])],1)],1)],1)],1)],1)],1)},n=[],r=(a("b0c0"),a("c1df")),s=a.n(r),o=a("a0e0"),l=a("ca00"),c={data:function(){return{visible_director:!1,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),project_id:0,dateFormat:"YYYY-MM-DD",dateDay:"09:00",day:1,title:"添加负责人",work_list:[],worker_id:"",phone:"",status:1,time:"2021-7-30",name:"",id:0,tokenName:"",sysName:""}},methods:{onChange:function(t,e){null==t&&(e="00:00"),this.dateDay=e,this.$forceUpdate()},select_director:function(t){this.phone=t.phone,this.worker_id=t.wid,this.name=t.name},moment:s.a,add:function(t){var e=Object(l["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.title="添加负责人",this.project_id=t,this.getWorkers(),this.visible_director=!0,this.id=0},edit:function(t,e){var a=Object(l["i"])(location.hash);a?(this.tokenName=a+"_access_token",this.sysName=a):this.sysName="village",this.title="编辑负责人",this.project_id=t,this.id=e,this.getWorkers(),this.getWorkerInfo(),this.visible_director=!0},getWorkerInfo:function(){var t=this;this.request(o["a"].getWorkerInfo,{id:this.id,tokenName:this.tokenName}).then((function(e){t.status=e.status,t.name=e.name,t.phone=e.phone,t.worker_id=e.worker_id,t.dateDay=e.dateDay,t.day=e.day}))},getWorkers:function(){var t=this;this.request(o["a"].getWorkers,{tokenName:this.tokenName}).then((function(e){t.work_list=e}))},handleCancel:function(){this.visible_director=!1},handleOk:function(){var t=this;this.id>0?this.request(o["a"].saveMeterDirector,{id:this.id,worker_id:this.worker_id,name:this.name,phone:this.phone,status:this.status,dateDay:this.dateDay,day:this.day,tokenName:this.tokenName}).then((function(e){t.$message.success("修改成功"),t.$emit("getMeterDirectorList"),t.visible_director=!1})):this.request(o["a"].addMeterDirector,{project_id:this.project_id,worker_id:this.worker_id,name:this.name,phone:this.phone,status:this.status,dateDay:this.dateDay,day:this.day,tokenName:this.tokenName}).then((function(e){t.$message.success("添加成功"),t.$emit("getMeterDirectorList"),t.visible_director=!1}))}}},d=c,u=a("0c7c"),h=Object(u["a"])(d,i,n,!1,null,"d0a07172",null);e["default"]=h.exports},"886b":function(t,e,a){},"99a6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{width:1e3,title:"负责人列表",visible:t.visible,maskClosable:!1,"confirm-loading":t.confirmLoading,footer:null},on:{cancel:t.handleCancel}},[a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-button",{staticClass:"margin_top_20",attrs:{type:"primary"},on:{click:function(e){return t.$refs.addDirectorModel.add(t.project_id)}}},[t._v(" 添加 ")]),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.addDirectorModel.edit(t.project_id,i.id)}}},[t._v("修改")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px"},attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.del_director(i.id)}}},[a("a",[t._v("删除")])])],1)}},{key:"status",fn:function(e,i){return a("span",{},[1==i.status?a("span",{staticStyle:{color:"dodgerblue"}},[t._v("正常")]):a("span",{staticStyle:{color:"red"}},[t._v("禁止")])])}}])})],1),a("add-director",{ref:"addDirectorModel",on:{getMeterDirectorList:t.getMeterDirectorList}})],1)])},n=[],r=a("a0e0"),s=a("8102"),o=a("ca00"),l={components:{AddDirector:s["default"]},data:function(){return{visible:!1,confirmLoading:!1,list:[],pagination:{pageSize:10,total:15},page:1,project_id:0,tokenName:"",sysName:""}},mounted:function(){var t=Object(o["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village"},computed:{columns:function(){var t=[{title:"负责人姓名",dataIndex:"name",key:"name"},{title:"负责人手机号",dataIndex:"phone",key:"phone"},{title:"提醒时间",dataIndex:"notice_time_txt",key:"notice_time_txt"},{title:"添加时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return t}},created:function(){},methods:{del_director:function(t){var e=this;this.request(r["a"].delMeterDirector,{id:t,tokenName:this.tokenName}).then((function(t){e.$message.success("删除成功"),e.getMeterDirectorList()}))},get:function(t){this.project_id=t,this.getMeterDirectorList(),this.visible=!0},getMeterDirectorList:function(){var t=this;this.request(r["a"].getMeterDirectorList,{page:this.page,project_id:this.project_id,tokenName:this.tokenName}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getMeterDirectorList())},handleCancel:function(){this.visible=!1}}},c=l,d=a("0c7c"),u=Object(d["a"])(c,i,n,!1,null,"48073eaa",null);e["default"]=u.exports},b794:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{width:1e3,title:"用量录入",destroyOnClose:!0,visible:t.visible_meter,maskClosable:!1,"confirm-loading":t.confirmLoading},on:{cancel:t.handleCancel,ok:t.handleOk}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"选择",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:t.options,"load-data":t.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:t.setVisionsFunc}})],1),a("a-form-item",{attrs:{label:"收费项目",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:t.project_name,callback:function(e){t.project_name=e},expression:"project_name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"收费标准名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:t.charge_name,callback:function(e){t.charge_name=e},expression:"charge_name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"单价",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:t.unit_price,callback:function(e){t.unit_price=e},expression:"unit_price"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"倍率",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"起度",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10},model:{value:t.start_ammeter,callback:function(e){t.start_ammeter=e},expression:"start_ammeter"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"止度",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10},model:{value:t.last_ammeter,callback:function(e){t.last_ammeter=e},expression:"last_ammeter"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},n=[],r=a("2909"),s=a("1da1"),o=(a("96cf"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),l=a("ca00"),c={name:"addMeter",data:function(){return{visible_meter:!1,confirmLoading:!1,form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},options:[],project_name:"",charge_name:"",rate:1,unit_price:0,start_ammeter:"",last_ammeter:"",note:"",single_id:0,floor_id:0,layer_id:0,room_id:0,rule_id:0,project_id:0,charge_type:"",tokenName:"",sysName:""}},methods:{add:function(t,e,a,i,n,r,s){var o=Object(l["i"])(location.hash);o?(this.tokenName=o+"_access_token",this.sysName=o):this.sysName="village",this.project_name=t,this.charge_name=e,this.unit_price=a,this.rate=i,this.charge_type=n,this.rule_id=r,this.project_id=s,this.getSingleListByVillage(),this.visible_meter=!0},handleOk:function(){var t=this;return 0==this.room_id?(this.$message.warning("请选择房间"),!1):parseFloat(this.start_ammeter)>=parseFloat(this.last_ammeter)?(this.$message.warning("止度需要大于起度"),!1):""==this.start_ammeter||""==this.last_ammeter?(this.$message.warning("起度/止度不能为空"),!1):void this.request(o["a"].meterReadingAdd,{single_id:this.single_id,floor_id:this.floor_id,layer_id:this.layer_id,vacancy_id:this.room_id,start_ammeter:this.start_ammeter,last_ammeter:this.last_ammeter,charge_name:this.project_name,unit_price:this.unit_price,charge_type:this.charge_type,rule_id:this.rule_id,note:this.note,project_id:this.project_id,tokenName:this.tokenName,rate:this.rate}).then((function(e){t.$message.success("录入成功"),t.$emit("getMeterProject"),t.start_ammeter="",t.last_ammeter="",t.visible_meter=!1}))},handleCancel:function(){this.start_ammeter="",this.last_ammeter="",this.visible_meter=!1},getLastMeter:function(){var t=this;this.request(o["a"].getIsBind,{project_id:this.project_id,vacancy_id:this.room_id}).then((function(e){e.status?t.request(o["a"].getLastMeter,{project_id:t.project_id,vacancy_id:t.room_id,tokenName:t.tokenName}).then((function(e){t.start_ammeter=e.last_ammeter})):t.$message.warning("当前房间没有绑定该收费项目")}))},getSingleListByVillage:function(){var t=this,e={tokenName:this.tokenName};this.charge_type&&(e["charge_type"]=this.charge_type),this.rule_id&&(e["rule_id"]=this.rule_id),this.project_id&&(e["project_id"]=this.project_id),this.request(o["a"].getSingleListByVillage,e).then((function(e){if(console.log("+++++++Single",e),e){var a=[];e.map((function(t){a.push({label:t.name,value:t.id,isLeaf:!1})})),t.options=a}}))},getFloorList:function(t){var e=this,a={pid:t,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(t){e.request(o["a"].getFloorList,a).then((function(e){console.log("+++++++Single",e),console.log("resolve",t),t(e)}))}))},getLayerList:function(t){var e=this,a={pid:t,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(t){e.request(o["a"].getLayerList,a).then((function(e){console.log("+++++++Single",e),e&&t(e)}))}))},getVacancyList:function(t){var e=this,a={pid:t,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(t){e.request(o["a"].getVacancyList,a).then((function(e){console.log("+++++++Single",e),e&&t(e)}))}))},loadDataFunc:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t[t.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return e.stop()}}),e)})))()},setVisionsFunc:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,o,l,c,d,u,h,p,m,_;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.room_id=0,1!==t.length){a.next=14;break}return e.single_id=t[0],i=Object(r["a"])(e.options),a.next=6,e.getFloorList(t[0]);case 6:n=a.sent,console.log("res",n),s=[],n.map((function(t){return s.push({label:t.name,value:t.id,isLeaf:!1}),i["children"]=s,!0})),i.find((function(e){return e.value===t[0]}))["children"]=s,e.options=i,a.next=43;break;case 14:if(2!==t.length){a.next=27;break}return e.floor_id=t[1],a.next=18,e.getLayerList(t[1]);case 18:o=a.sent,l=Object(r["a"])(e.options),c=[],o.map((function(t){return c.push({label:t.name,value:t.id,isLeaf:!1}),!0})),d=l.find((function(e){return e.value===t[0]})),d.children.find((function(e){return e.value===t[1]}))["children"]=c,e.options=l,a.next=43;break;case 27:if(3!==t.length){a.next=42;break}return e.layer_id=t[2],a.next=31,e.getVacancyList(t[2]);case 31:u=a.sent,h=Object(r["a"])(e.options),p=[],u.map((function(t){return p.push({label:t.name,value:t.id,isLeaf:!0}),!0})),m=h.find((function(e){return e.value===t[0]})),_=m.children.find((function(e){return e.value===t[1]})),_.children.find((function(e){return e.value===t[2]}))["children"]=p,e.options=h,console.log("_this.options",e.options),a.next=43;break;case 42:4===t.length&&(e.room_id=t[3],e.getLastMeter());case 43:case"end":return a.stop()}}),a)})))()}}},d=c,u=a("0c7c"),h=Object(u["a"])(d,i,n,!1,null,"a55d2e08",null);e["default"]=h.exports},d2cd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:300,visible:t.visibleUpload,maskClosable:!1,confirmLoading:t.confirmLoading,footer:null},on:{cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("div",[a("span",[t._v("示例表格")]),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/static/file/village/meter/addMeter.xls",target:"_blank"}},[t._v("点击下载")])]),a("div",{staticStyle:{"border-bottom":"1px solid #dad8d8","border-top":"1px solid #dad8d8","margin-top":"20px"}},[a("span",[t._v("导入Excel")]),a("a-upload",{attrs:{name:"file","file-list":t.avatarFileList,action:t.upload,headers:t.headers,"before-upload":t.beforeUploadFile},on:{change:t.handleChangeUpload}},[a("a-button",{staticStyle:{margin:"20px   20px  10px"},attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"upload"}}),t._v(" 导入 ")],1)],1)],1),t.show?a("div",{staticStyle:{"margin-top":"20px"}},[a("span",[t._v("导入失败")]),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:t.url,target:"_blank"}},[t._v("点击下载带入失败数据表格")])]):t._e()])],1)},n=[],r=a("a0e0"),s=a("ca00"),o={data:function(){return{upload:"/v20/public/index.php"+r["a"].uploadMeterFiles+"?upload_dir=/house/excel/meterUpload",avatarFileList:[],headers:{authorization:"authorization-text"},visibleUpload:!1,confirmLoading:!1,title:"导入",url:"",show:!1,fileloading:!1,data_arr:[],tokenName:"",sysName:"",charge_name:"",project_id:0}},activated:function(){var t=Object(s["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village"},methods:{add:function(t,e){this.title="导入",this.visibleUpload=!0,this.url=window.location.host+"/v20/runtime/demo.xlsx",this.avatarFileList=[],this.charge_name=t,this.project_id=e},beforeUploadFile:function(t){var e=t.size/1024/1024<20;return e?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):e:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChangeUpload:function(t){var e=this;if(console.log("########",t),t.file&&!t.file.status&&this.fileloading)return!1;if("uploading"===t.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.avatarFileList=t.fileList}if("uploading"!==t.file.status&&(this.fileloading=!1,console.log(t.file,t.fileList)),"done"==t.file.status&&t.file&&t.file.response){var a=t.file.response;if(1e3===a.status)this.data_arr.push(a.data),console.log("data_arr",this.data_arr),this.avatarFileList=t.fileList,console.log("--------",a.data.url),this.request(r["a"].exportMeter,{tokenName:this.tokenName,file:a.data.url,charge_name:this.charge_name}).then((function(t){t.error?(e.$parent.getList(e.charge_name,e.project_id),e.$message.success("上传成功")):window.location.href=t.data})),this.visibleUpload=!1;else for(var i in this.$message.error(t.file.response.msg),this.avatarFileList=[],t.fileList)if(t.fileList[i]){var n=t.fileList[i];console.log("info_1",n),n&&n.response&&1e3===n.response.status&&this.avatarFileList.push(n)}}if("removed"==t.file.status&&t.file){var s=t.file.response;if(s&&1e3===s.status)for(var i in this.data_arr=[],t.fileList)if(t.fileList[i]){var o=t.fileList[i];o&&o.response&&1e3===o.response.status&&this.data_arr.push(o.response.data)}this.avatarFileList=t.fileList,console.log("data_arr1",this.data_arr)}},handleCancel:function(){this.visibleUpload=!1}}},l=o,c=(a("3117"),a("0c7c")),d=Object(c["a"])(l,i,n,!1,null,"21c34c8b",null);e["default"]=d.exports}}]);