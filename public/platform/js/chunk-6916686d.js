(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6916686d"],{"8e67":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fee-summary-list-box"},[i("div",{staticClass:"search-box"},[i("a-row",{attrs:{gutter:48}},[i("a-col",{staticStyle:{"padding-left":"5px","padding-right":"1px",width:"490px"},attrs:{md:8,sm:24}},[i("a-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择账单计费时间"},on:{change:t.changeOrderServiceType},model:{value:t.search.order_service_type,callback:function(e){t.$set(t.search,"order_service_type",e)},expression:"search.order_service_type"}},[i("a-select-option",{attrs:{value:"0"}},[t._v("账单生成时间")]),i("a-select-option",{attrs:{value:"1"}},[t._v("计费开始时间")]),i("a-select-option",{attrs:{value:"2"}},[t._v("计费结束时间")])],1),i("a-month-picker",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择月份"},on:{change:t.serviceDateOnChange},model:{value:t.search_data,callback:function(e){t.search_data=e},expression:"search_data"}})],1),i("a-col",{staticStyle:{"padding-left":"5px","padding-right":"1px"},attrs:{md:5,sm:12}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("收费项目：")]),i("a-select",{staticStyle:{width:"230px"},attrs:{"default-value":"0",placeholder:"请选择项目"},on:{change:t.projectItemChange},model:{value:t.search.charge_project_id,callback:function(e){t.$set(t.search,"charge_project_id",e)},expression:"search.charge_project_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部 ")]),t._l(t.project_list,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"5px","padding-right":"10px"},attrs:{md:5,sm:12}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("收费标准：")]),i("a-select",{staticStyle:{width:"230px"},attrs:{"default-value":"0",placeholder:"收费标准"},model:{value:t.search.rule_id,callback:function(e){t.$set(t.search,"rule_id",e)},expression:"search.rule_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部 ")]),t._l(t.project_rule_list,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.id}},[t._v(" "+t._s(e.charge_name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"20px","padding-right":"1px",width:"90px"},attrs:{md:6,sm:24}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),i("a-col",{staticStyle:{"padding-left":"20px","padding-right":"1px",width:"90px"},attrs:{md:6,sm:24}},[i("a-button",{staticClass:"ml-20",attrs:{icon:"refresh"},on:{click:t.resetList}},[t._v(" 重置")])],1),i("a-col",{staticClass:"suggestions_col_btn",staticStyle:{"padding-left":"40px"},attrs:{md:3,sm:12}},[i("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.excelExportOut()}}},[t._v("Excel导出")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,"row-key":function(t){return t.order_id},loading:t.loading,scroll:t.xscroll,bordered:""},on:{change:t.table_change},scopedSlots:t._u([{key:"address",fn:function(e,a){return[i("span",{staticStyle:{display:"inline-block",width:"150px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[i("a-tooltip",{attrs:{placement:"topLeft",title:a.address}},[t._v(" "+t._s(a.address)+" ")])],1)]}}])}),i("a-modal",{attrs:{title:"请稍等,正在为您导出数据...",visible:t.tips_visible,closable:!1,"mask-closable":!1,footer:null,width:550}},[i("div",[i("a-spin",{attrs:{size:"large"}}),i("span",{staticStyle:{"margin-left":"25px"}},[t._v("导出数据中,请耐心等待,数量越多时间越长。")]),i("p",{staticStyle:{margin:"15px"}},[t._v("若长时间未成功导出，建议调整筛选条件减少导出数，然后分多次导出。")])],1)])],1)},s=[],l=(i("ac1f"),i("841c"),i("c1df")),r=i.n(l),c=i("a0e0"),n=[{title:"房间号/车位号",dataIndex:"address",key:"address",fixed:"left",width:180,scopedSlots:{customRender:"address"}},{title:"业主",dataIndex:"name",key:"name",fixed:"left",width:120},{title:"电话",dataIndex:"phone",key:"phone",fixed:"left",width:120},{title:"计费开始时间",dataIndex:"service_start_time_str",key:"service_start_time_str",fixed:"left",width:120},{title:"计费结束时间",dataIndex:"service_end_time_str",key:"service_end_time_str",fixed:"left",width:120},{title:"合计",dataIndex:"all_total_money",key:"all_total_money",fixed:"right",width:140}],o=[],d={name:"dailyStatementList",data:function(){return{pagination:{current:1,pageSize:11,total:10},search:{order_service_type:"0",charge_project_id:"0",rule_id:"0",date:r()().format("YYYY-MM")},visible:!1,loading:!1,data:o,columns:n,page:1,project_rule_list:[],project_list:[],search_data:r()().format("YYYY-MM"),xscroll:{x:1400},tips_visible:!1,excelExportOutFileUrl:"",export_out_id:0,setTimeoutS:null}},mounted:function(){this.getOrderRuleList(),this.getList(),this.getProjectList(),this.getProjectRuleList()},methods:{getList:function(){var t=this;this.tips_visible=!1,this.loading=!0,this.search["page"]=this.page,this.search["pay_status"]="no_pay",this.search["xtype"]="monthly",this.request(c["a"].getSummaryByRoomAndRuleList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:11,t.data=e.lists,t.loading=!1,t.excelExportOutFileUrl=e.excelExportOutFileUrl}))},excelExportOut:function(){var t=this;this.tips_visible=!0,this.loading=!0,this.search["pay_status"]="no_pay",this.search["xtype"]="monthly",this.request(c["a"].excelExportFinancialOutUrl,this.search).then((function(e){t.export_out_id=e.export_id,t.excelExportOutFileUrl=t.excelExportOutFileUrl+"&id="+e.export_id,console.log("excelExportOutFileUrl",t.excelExportOutFileUrl),t.CheckExportOutStatus()})).catch((function(e){t.loading=!1}))},CheckExportOutStatus:function(){var t=this,e=this.excelExportOutFileUrl+"&ajax=village_ajax";console.log("excelExportOutFileUrlCheck",this.excelExportOutFileUrlCheck),this.request(e,{tokenName:"village_access_token",ajax:"village_ajax"}).then((function(e){return console.log("exportOutStatus",e),0==e.error_code?(clearTimeout(t.setTimeoutS),t.setTimeoutS=null,window.location.href=t.excelExportOutFileUrl,t.tips_visible=!1,t.loading=!1,!1):404==e.error_code?(t.tips_visible=!1,t.loading=!1,clearTimeout(t.setTimeoutS),t.setTimeoutS=null,t.$message.error(e.error_msg),!1):void(t.setTimeoutS=setTimeout(t.CheckExportOutStatus,2e3))})).catch((function(e){t.$message.error("出错了，请刷新页面重试！"),t.tips_visible=!1,t.loading=!1}))},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},serviceDateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1};this.table_change(t)},getOrderRuleList:function(){var t=this;this.request(c["a"].getOrderTableRuleList,{pay_status:"no_pay",xtype:"monthly"}).then((function(e){if(e.lists&&e.lists.length>0){t.xscroll.x=1400,t.columns=[{title:"房间号/车位号",dataIndex:"address",key:"address",fixed:"left",width:180,scopedSlots:{customRender:"address"}},{title:"业主",dataIndex:"name",key:"name",fixed:"left",width:120},{title:"电话",dataIndex:"phone",key:"phone",fixed:"left",width:120}],e.count>5?(t.columns.push({title:"计费开始时间",dataIndex:"service_start_time_str",key:"service_start_time_str",fixed:"left",width:110}),t.columns.push({title:"计费结束时间",dataIndex:"service_end_time_str",key:"service_end_time_str",fixed:"left",width:110})):(t.columns.push({title:"计费开始时间",dataIndex:"service_start_time_str",key:"service_start_time_str",fixed:"left",width:120}),t.columns.push({title:"计费结束时间",dataIndex:"service_end_time_str",key:"service_end_time_str",fixed:"left",width:120})),e.count&&e.count>7?t.xscroll.x=140*e.count:t.xscroll.x=0;for(var i=0;i<e.lists.length;i++)t.columns.push({title:e.lists[i].charge_name,dataIndex:"rule_"+e.lists[i].id,key:"rule_"+e.lists[i].id,width:140});t.columns.push({title:"合计",dataIndex:"all_total_money",key:"all_total_money",fixed:"right",width:140})}else t.columns=[{title:"房间号/车位号",dataIndex:"address",key:"address",fixed:"left",width:180,scopedSlots:{customRender:"address"}},{title:"业主",dataIndex:"name",key:"name",fixed:"left",width:120},{title:"电话",dataIndex:"phone",key:"phone",fixed:"left",width:120},{title:"计费开始时间",dataIndex:"service_start_time_str",key:"service_start_time_str",fixed:"left",width:120},{title:"计费结束时间",dataIndex:"service_end_time_str",key:"service_end_time_str",fixed:"left",width:120},{title:"合计",dataIndex:"all_total_money",key:"all_total_money",fixed:"right",width:140}]})).catch((function(e){t.loading=!1}))},getProjectList:function(){var t=this;this.request(c["a"].ChargeProjectList,{type:"selectdata"}).then((function(e){t.project_list=e.list})).catch((function(e){t.loading=!1}))},changeOrderServiceType:function(t){this.search_data=null,this.search.date=[]},projectItemChange:function(t){this.getProjectRuleList()},getProjectRuleList:function(){var t=this;this.project_rule_list=[],this.search.rule_id="0";var e={charge_project_id:this.search.charge_project_id,type:"selectdata"};this.request(c["a"].ChargeRuleList,e).then((function(e){t.project_rule_list=e.list,console.log(t.project_rule_list)})).catch((function(e){t.loading=!1}))},resetList:function(){this.search={order_service_type:"1",charge_project_id:"0",rule_id:"0"},this.search_data=null,this.getList()}}},h=d,u=(i("ecef"),i("2877")),_=Object(u["a"])(h,a,s,!1,null,"0b4ddcca",null);e["default"]=_.exports},aab3:function(t,e,i){},ecef:function(t,e,i){"use strict";i("aab3")}}]);