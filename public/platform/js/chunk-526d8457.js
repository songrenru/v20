(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-526d8457"],{"033c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vehicle_management"},[a("div",{staticClass:"header_search"},[a("div",{staticClass:"search_item",staticStyle:{"margin-left":"10px"}},[e.clearSelect?a("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.search_type,callback:function(t){e.$set(e.pageInfo,"search_type",t)},expression:"pageInfo.search_type"}},e._l(e.searchType,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.search_type}},[e._v(" "+e._s(t.label)+" ")])})),1):e._e(),a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入搜索关键字"},model:{value:e.pageInfo.search_value,callback:function(t){e.$set(e.pageInfo,"search_value",t)},expression:"pageInfo.search_value"}}),a("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[a("a-select",{staticStyle:{width:"130px","margin-left":"10px"},attrs:{"show-search":"",placeholder:"请选筛选项"},on:{change:e.handleDateSelect},model:{value:e.pageInfo.date_type,callback:function(t){e.$set(e.pageInfo,"date_type",t)},expression:"pageInfo.date_type"}},[a("a-select-option",{attrs:{value:"1"}},[e._v(" 录入时间 ")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" 审核时间 ")])],1),e.clearSelect?a("a-range-picker",{on:{change:e.ondateChange}}):e._e()],1),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.queryThis()}}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"20px"},on:{click:function(t){return e.clearThis()}}},[e._v("清空")])],1),a("div",{staticClass:"search_item",staticStyle:{"margin-left":"30px"}},[1==e.role_addcar?a("a-button",{staticStyle:{"margin-left":"50px"},attrs:{type:"primary"},on:{click:e.addThis}},[e._v("添加车辆")]):e._e(),1==e.role_importcar?a("a-upload",{attrs:{showUploadList:!1,data:e.uploadData,name:"file",multiple:!1,action:"/v20/public/index.php/community/village_api.Parking/uplodeCar",headers:e.headers},on:{change:e.handleUploadChange}},[a("a-button",{staticClass:"operation_btn",attrs:{type:"primary"}},[e._v("导入车辆")])],1):e._e(),"A1"==e.park_sys_type?a("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding3},on:{click:e.synchronization}},[e._v("批量同步智慧停车")]):e._e(),"D3"==e.park_sys_type?a("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding4},on:{click:e.parkWhite}},[e._v("一键同步白名单")]):e._e(),"D7"==e.park_sys_type?a("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding5},on:{click:e.whiteList}},[e._v("一键同步")]):e._e(),1==e.role_importcar?a("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding2},on:{click:e.downModel}},[e._v("导入模板 ")]):e._e(),1==e.role_exportcar?a("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding1},on:{click:e.downCar}},[e._v("excel导出 ")]):e._e()],1)]),a("div",{staticClass:"table_content"},[a("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.car_id},pagination:e.pageInfo,loading:e.tableLoadding,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"data-source":e.vehicleList},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[1==e.role_editcar?a("a",{on:{click:function(t){return e.editThis(i.car_id)}}},[e._v("编辑")]):e._e(),a("a-divider",{attrs:{type:"vertical"}}),1==e.role_delcar?a("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(i)},cancel:e.delCancel}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])]):e._e()],1)}},{key:"car_user_name",fn:function(t,i){return a("span",{},[a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(i.car_user_name))])]),e._v(" "+e._s(i.car_user_name.length>12?i.car_user_name.substring(0,12)+"...":i.car_user_name)+" ")],2)],1)}}])}),a("vehicle-model",{attrs:{car_id:e.car_id,vehicle_type:e.vehicle_type,visible:e.vehicleVisible,modelTitle:e.modelTitle},on:{closeVehicle:e.closeVehicle}})],1)])},n=[],o=a("af97"),r=a("a0e0"),s=[{title:"车辆编号",dataIndex:"car_id",key:"car_id"},{title:"车位号",dataIndex:"position_num",key:"position_num"},{title:"车牌号码",dataIndex:"car_number",key:"car_number"},{title:"停车到期时间",dataIndex:"end_time",key:"end_time"},{title:"业主姓名",dataIndex:"car_user_name",key:"car_user_name",scopedSlots:{customRender:"car_user_name"}},{title:"业主手机号",dataIndex:"car_user_phone",key:"car_user_phone"},{title:"与业主关系",dataIndex:"relationship",key:"relationship"},{title:"录入时间",dataIndex:"car_addtime",key:"car_addtime"},{title:"审核时间",dataIndex:"examine_time",key:"examine_time"},{title:"审核状态",dataIndex:"examine_status",key:"examine_status"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],c={data:function(){var e=this;return{columns:s,vehicleVisible:!1,selectedRowKeys:[],modelTitle:"",park_sys_type:"",pageInfo:{current:1,page:1,pageSize:10,total:10,search_value:"",search_type:1,date_type:"1",record_date:"",pass_date:"",showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},frequency:!1,vehicleList:[],tableLoadding:!1,vehicle_type:"add",searchType:[{search_type:1,label:"车牌号"},{search_type:3,label:"车位号"},{search_type:5,label:"业主姓名"},{search_type:6,label:"业主手机号"}],car_id:"",headers:{authorization:"authorization-text"},exportLoadding1:!1,exportLoadding2:!1,exportLoadding3:!1,exportLoadding4:!1,exportLoadding5:!1,clearSelect:!0,uploadData:{village_id:0},role_addcar:0,role_delcar:0,role_editcar:0,role_exportcar:0,role_importcar:0}},components:{vehicleModel:o["default"]},mounted:function(){this.getVehicleList()},methods:{queryThis:function(){var e=this;if(this.frequency)this.$message.warn("请求频繁，请稍后再试");else{this.frequency=!0;var t=setTimeout((function(){e.frequency=!1,clearTimeout(t)}),2e3);this.pageInfo.page=1,this.getVehicleList()}},clearThis:function(){var e=this;this.pageInfo={page:1,current:1,search_value:"",search_type:1,pageSize:20,date_type:"1",total:0},this.clearSelect=!1;var t=setTimeout((function(){e.clearSelect=!0,clearTimeout(t)}),100);this.getVehicleList()},handleTableChange:function(e,t,a){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.getVehicleList()},onTableChange:function(e,t){this.pageInfo.current=e,this.pageInfo.pageSize=t,this.pageInfo.page=e,this.getVehicleList(),console.log("onTableChange==>",e,t)},getVehicleList:function(){var e=this,t=this;t.tableLoadding=!0,t.request(r["a"].getCarlist,t.pageInfo).then((function(a){t.vehicleList=a.list,t.pageInfo.total=a.count,t.uploadData.village_id=a.village_id,t.tableLoadding=!1,t.park_sys_type=a.park_sys_type,void 0!=a.role_addcar?(e.role_addcar=a.role_addcar,e.role_delcar=a.role_delcar,e.role_editcar=a.role_editcar,e.role_exportcar=a.role_exportcar,e.role_importcar=a.role_importcar):(e.role_addcar=1,e.role_delcar=1,e.role_editcar=1,e.role_exportcar=1,e.role_importcar=1)})).catch((function(e){t.tableLoadding=!1}))},handleSelectChange:function(e){this.pageInfo.search_type=e,console.log("selected ".concat(e))},handleDateSelect:function(e){this.pageInfo.date_type=e,2==e||"2"==e?(this.pageInfo.pass_date=this.pageInfo.record_date,this.pageInfo.record_date=""):1!=e&&"1"!=e||(this.pageInfo.record_date=this.pageInfo.pass_date,this.pageInfo.pass_date="")},ondateChange:function(e,t){console.log("date_type",this.pageInfo.date_type),this.pageInfo.record_date="",this.pageInfo.pass_date="",2==this.pageInfo.date_type||"2"==this.pageInfo.date_type?this.pageInfo.pass_date=t:1!=this.pageInfo.date_type&&"1"!=this.pageInfo.date_type||(this.pageInfo.record_date=t),console.log(e,t)},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},editThis:function(e){this.modelTitle="编辑车辆",this.vehicle_type="edit",this.car_id=e+"",this.vehicleVisible=!0},delConfirm:function(e){var t=this;t.request(r["a"].delCar,{car_id:e.car_id}).then((function(e){t.$message.success("删除成功！"),t.getVehicleList()}))},delBindConfirm:function(e){console.log("record=======>",e)},delCancel:function(){},closeVehicle:function(e){this.car_id="",this.vehicleVisible=!1,e&&this.getVehicleList()},onSelectChange:function(e){console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e},handleUploadChange:function(e){"done"===e.file.status?1e3==e.file.response.status?(this.$message.success("上传成功！"),e.file.response.data.url?window.location.href=e.file.response.data.url:this.getVehicleList()):this.$message.error(e.file.response.msg):"error"===e.file.status&&this.$message.error("上传失败！")},addThis:function(){this.modelTitle="添加车辆",this.vehicle_type="add",this.vehicleVisible=!0},downCar:function(){var e=this,t=this;t.exportLoadding1=!0,t.request("/community/village_api.Parking/downCar",t.pageInfo).then((function(a){0==a.error?(window.location.href=a.url,e.$message.success("导出成功")):e.$message.error("导出失败"),t.exportLoadding1=!1})).catch((function(e){t.exportLoadding1=!1}))},downModel:function(){var e=this;e.exportLoadding2=!0,e.request("/community/village_api.Parking/downCarModel",e.pageInfo).then((function(t){0==t.error?(window.location.href=t.url,e.$message.success("导出成功")):e.$message.error("导出失败"),e.exportLoadding2=!1})).catch((function(t){e.exportLoadding2=!1}))},parkWhite:function(){var e=this,t=this;t.exportLoadding4=!0,t.request("/community/village_api.Parking/allAddParkWhite",{}).then((function(a){a?e.$message.success("同步成功！"):e.$message.error("同步失败！"),t.exportLoadding4=!1})).catch((function(e){t.exportLoadding4=!1}))},whiteList:function(){var e=this,t=this;t.exportLoadding5=!0,t.request("/community/village_api.Parking/allAddWhiteList",{}).then((function(a){a?e.$message.success("同步成功！"):e.$message.error("同步失败！"),t.exportLoadding5=!1})).catch((function(e){t.exportLoadding5=!1}))},synchronization:function(){var e=this,t=this;t.exportLoadding3=!0,t.request("/community/village_api.Parking/sysParkCarDevice",{}).then((function(a){1==a.retval.code?e.$message.success("同步成功！"):e.$message.error("同步失败！"),t.exportLoadding3=!1})).catch((function(e){t.exportLoadding3=!1}))}}},l=c,d=(a("482f"),a("2877")),p=Object(d["a"])(l,i,n,!1,null,"20671056",null);t["default"]=p.exports},"482f":function(e,t,a){"use strict";a("e01dc")},e01dc:function(e,t,a){}}]);