(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-327834af","chunk-1363b2af"],{"0b52":function(e,t,a){"use strict";a.r(t);a("b0c0");var i=function(){var e=this,t=e._self._c;return t("div",[t("a-drawer",{attrs:{width:1450,title:"抄表记录",visible:e.visible_record,maskClosable:!1,"confirm-loading":e.confirmLoading,"dialog-style":{top:"20px"}},on:{close:e.handleCancel}},[t("div",{staticClass:"message-suggestions-list-box"},[t("div",{staticClass:"search-box",staticStyle:{"margin-top":"12px","margin-left":"10px"}},[t("a-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:48}},[t("a-col",{staticStyle:{"padding-right":"0px"},attrs:{md:6,sm:14}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("房间：")]),t("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:e.options,"load-data":e.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:e.setVisionsFunc},model:{value:e.room_id,callback:function(t){e.room_id=t},expression:"room_id"}})],1),t("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"5px","padding-right":"1px",width:"470px"},attrs:{md:8,sm:20}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("时间筛选：")]),t("a-range-picker",{staticStyle:{width:"325px"},attrs:{allowClear:!0},on:{change:e.dateChange},model:{value:e.date_time,callback:function(t){e.date_time=t},expression:"date_time"}},[t("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e.is_show?t("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"5px","padding-right":"1px",width:"210px"},attrs:{md:6,sm:24}},[t("label",{staticClass:"label_title"},[e._v("交易类型：")]),t("a-select",{staticStyle:{width:"110px"},attrs:{"show-search":"",placeholder:"请选择"},model:{value:e.transaction_type,callback:function(t){e.transaction_type=t},expression:"transaction_type"}},e._l(e.pay_order_type,(function(a,i){return t("a-select-option",{attrs:{value:a.value}},[e._v(" "+e._s(a.name)+" ")])})),1)],1):e._e(),t("a-col",{staticStyle:{"padding-left":"0px","padding-right":"1px",width:"90px"},attrs:{md:2,sm:24}},[t("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")])],1),1==e.role_export?t("a-col",{attrs:{md:2,sm:24}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.printList()}}},[e._v("Excel导出")])],1):e._e(),1==e.role_import?t("a-col",{attrs:{md:2,sm:24}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.createUploadModal.add(e.charge_name,e.project_id)}}},[e._v("导入")])],1):e._e()],1)],1),t("br"),t("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.is_show?e.columns1:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(a,i){return t("span",{},[i.source_type&&"revise_data"==i.source_type?t("span",{staticStyle:{color:"red"}},[e._v(" 数据矫正记录 ")]):t("span",[1==e.role_mfymeter?t("span",[1==i.is_edit?t("a",{on:{click:function(t){return e.$refs.addMeter.edit(i)}}},[e._v("修改")]):e._e(),1==i.order_is_pay&&i.mdy_change_ammeter>0&&i.mdy_change_money>0?t("a-divider",{attrs:{type:"vertical"}}):e._e(),1==i.order_is_pay&&i.mdy_change_ammeter>0&&i.mdy_change_money>0?t("a",{attrs:{loading:e.createNewOrderLoading},on:{click:function(t){return e.createNewOrder(i)}}},[e._v("生成收费账单")]):e._e()],1):e._e()])])}}])})],1)]),t("meter-upload",{ref:"createUploadModal",attrs:{height:800,width:500},on:{ok:e.handleOks}}),t("add-meter",{ref:"addMeter",on:{okk:e.handleOks}})],1)},n=[],o=a("2909"),s=a("1da1"),r=(a("96cf"),a("ac1f"),a("841c"),a("d81d"),a("d3b7"),a("7db0"),a("a0e0")),l=a("ca00"),d=a("d2cd"),c=a("b794"),h=[{title:"住址",dataIndex:"address",key:"address"},{title:"姓名",dataIndex:"name",key:"name"},{title:"电话",dataIndex:"phone",key:"phone"},{title:"单价(元)",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"总价(元)",dataIndex:"cost_money",key:"cost_money"},{title:"操作人",dataIndex:"realname",key:"realname"},{title:"备注",dataIndex:"note",key:"note"},{title:"操作",dataIndex:"",width:190,key:"action",scopedSlots:{customRender:"action"}}],m=[{title:"住址",dataIndex:"address",key:"address"},{title:"姓名",dataIndex:"name",key:"name"},{title:"电话",dataIndex:"phone",key:"phone"},{title:"单价(元)",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"opt_meter_time_str",key:"opt_meter_time_str"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"总价(元)",dataIndex:"cost_money",key:"cost_money"},{title:"交易类型",dataIndex:"transaction_type_txt",key:"transaction_type_txt"},{title:"操作人",dataIndex:"realname",key:"realname"},{title:"备注",dataIndex:"note",key:"note"},{title:"操作",dataIndex:"",width:190,key:"action",scopedSlots:{customRender:"action"}}],u=[],p={components:{meterUpload:d["default"],addMeter:c["default"]},data:function(){var e=this;return{is_show:!0,visible_record:!1,confirmLoading:!1,data:u,columns:h,columns1:m,options:[],pay_order_type:[{name:"全部",value:0},{name:"购买",value:1},{name:"缴费",value:2}],pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},loading:!1,charge_name:"",rule_name:"",project_id:0,page:1,room_id:[],transaction_type:"",date_time:[],tokenName:"",sysName:"",createNewOrderLoading:!1,role_export:0,role_import:0,role_mfymeter:0,total_info:[]}},mounted:function(){var e=Object(l["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{dateChange:function(e,t){this.date_time=t,console.log("dateString",this.date_time)},get:function(e,t,a){this.date_time=[],this.room_id=[],this.charge_name=e,this.project_id=t,this.page=1,a&&(this.rule_name=a),this.getList(e,t),this.getSingleListByVillage(),this.visible_record=!0},printList:function(){var e=this;this.loading=!0,this.request(r["a"].printRecordList,{charge_name:this.charge_name,room_id:this.room_id,date_time:this.date_time,tokenName:this.tokenName,rule_name:this.rule_name,project_id:this.project_id}).then((function(t){window.location.href=t.url,e.loading=!1}))},createNewOrder:function(e){var t="生成新收费订单确认",a="止度增加了"+e.mdy_change_ammeter+"，费用增加了"+e.mdy_change_money+"元，您确认生成收费账单吗？",i=this;this.$confirm({title:t,content:a,onOk:function(){i.createNewOrderLoading=!0;var t={idd:e.id,mdy_change_ammeter:e.mdy_change_ammeter,mdy_change_money:e.mdy_change_money,tokenName:i.tokenName};i.request(r["a"].addMdyMeterReadingOrder,t).then((function(e){i.createNewOrderLoading=!1,i.$message.success("操作成功"),i.getList(i.charge_name,i.project_id)}))},onCancel:function(){}})},handleOks:function(){this.getList(this.charge_name,this.project_id)},handleCancel:function(){this.visible_record=!1},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getList(this.charge_name,this.project_id),console.log("onTableChange==>",e,t)},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.page=e.current,this.getList(this.charge_name,this.project_id))},getList:function(e,t){var a=this;this.loading=!0,this.request(r["a"].getMeterReadingRecord,{charge_name:e,project_id:t,page:this.page,limit:this.pagination.pageSize,room_id:this.room_id,date_time:this.date_time,tokenName:this.tokenName,single_id:this.single_id,floor_id:this.floor_id,layer_id:this.layer_id,transaction_type:this.transaction_type}).then((function(e){a.pagination.total=e.count?e.count:0,a.pagination.pageSize=e.total_limit?e.total_limit:10,a.data=e.list,a.total_info=e.total_info,a.is_show=e.is_show,void 0!=e.role_export?(a.role_export=e.role_export,a.role_import=e.role_import,a.role_mfymeter=e.role_mfymeter):(a.role_export=1,a.role_import=1,a.role_mfymeter=1),a.loading=!1}))},searchList:function(){console.log("search",this.search),this.getList(this.charge_name,this.project_id)},getSingleListByVillage:function(){var e=this;this.request(r["a"].getSingleListByVillage,{tokenName:this.tokenName}).then((function(t){if(console.log("+++++++Single",t),t){var a=[];t.map((function(e){a.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=a}}))},getFloorList:function(e){var t=this;return new Promise((function(a){t.request(r["a"].getFloorList,{pid:e,tokenName:t.tokenName}).then((function(e){console.log("+++++++Single",e),console.log("resolve",a),a(e)}))}))},getLayerList:function(e){var t=this;return new Promise((function(a){t.request(r["a"].getLayerList,{pid:e,tokenName:t.tokenName}).then((function(e){console.log("+++++++Single",e),e&&a(e)}))}))},getVacancyList:function(e){var t=this;return new Promise((function(a){t.request(r["a"].getVacancyList,{pid:e,tokenName:t.tokenName}).then((function(e){console.log("+++++++Single",e),e&&a(e)}))}))},loadDataFunc:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e[e.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,r,l,d,c,h,m,u,p,_;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(1!==e.length){a.next=12;break}return i=Object(o["a"])(t.options),a.next=4,t.getFloorList(e[0]);case 4:n=a.sent,console.log("res",n),s=[],n.map((function(e){return s.push({label:e.name,value:e.id,isLeaf:!1}),i["children"]=s,!0})),i.find((function(t){return t.value===e[0]}))["children"]=s,t.options=i,a.next=39;break;case 12:if(2!==e.length){a.next=24;break}return a.next=15,t.getLayerList(e[1]);case 15:r=a.sent,l=Object(o["a"])(t.options),d=[],r.map((function(e){return d.push({label:e.name,value:e.id,isLeaf:!1}),!0})),c=l.find((function(t){return t.value===e[0]})),c.children.find((function(t){return t.value===e[1]}))["children"]=d,t.options=l,a.next=39;break;case 24:if(3!==e.length){a.next=38;break}return a.next=27,t.getVacancyList(e[2]);case 27:h=a.sent,m=Object(o["a"])(t.options),u=[],h.map((function(e){return u.push({label:e.name,value:e.id,isLeaf:!0}),!0})),p=m.find((function(t){return t.value===e[0]})),_=p.children.find((function(t){return t.value===e[1]})),_.children.find((function(t){return t.value===e[2]}))["children"]=u,t.options=m,console.log("options",t.options),a.next=39;break;case 38:4===e.length&&console.log("room_id+++",t.room_id);case 39:case"end":return a.stop()}}),a)})))()}}},_=p,g=(a("8fbd"),a("2877")),f=Object(g["a"])(_,i,n,!1,null,"1ff489b6",null);t["default"]=f.exports},3117:function(e,t,a){"use strict";a("5802")},5802:function(e,t,a){},"8fbd":function(e,t,a){"use strict";a("c721")},c721:function(e,t,a){},d2cd:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:300,visible:e.visibleUpload,maskClosable:!1,confirmLoading:e.confirmLoading,footer:null},on:{cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[t("div",[t("span",[e._v("示例表格")]),t("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/static/file/village/meter/addMeter.xls",target:"_blank"}},[e._v("点击下载")])]),t("div",{staticStyle:{"border-bottom":"1px solid #dad8d8","border-top":"1px solid #dad8d8","margin-top":"20px"}},[t("span",[e._v("导入Excel")]),t("a-upload",{attrs:{name:"file","file-list":e.avatarFileList,action:e.upload,headers:e.headers,"before-upload":e.beforeUploadFile},on:{change:e.handleChangeUpload}},[t("a-button",{staticStyle:{margin:"20px   20px  10px"},attrs:{type:"primary"}},[t("a-icon",{attrs:{type:"upload"}}),e._v(" 导入 ")],1)],1)],1),e.show?t("div",{staticStyle:{"margin-top":"20px"}},[t("span",[e._v("导入失败")]),t("a",{staticStyle:{"margin-left":"20px"},attrs:{href:e.url,target:"_blank"}},[e._v("点击下载带入失败数据表格")])]):e._e()])],1)},n=[],o=a("a0e0"),s=a("ca00"),r={data:function(){return{upload:"/v20/public/index.php"+o["a"].uploadMeterFiles+"?upload_dir=/house/excel/meterUpload",avatarFileList:[],headers:{authorization:"authorization-text"},visibleUpload:!1,confirmLoading:!1,title:"导入",url:"",show:!1,fileloading:!1,data_arr:[],tokenName:"",sysName:"",charge_name:"",project_id:0}},activated:function(){var e=Object(s["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{add:function(e,t){this.title="导入",this.visibleUpload=!0,this.url=window.location.host+"/v20/runtime/demo.xlsx",this.avatarFileList=[],this.charge_name=e,this.project_id=t},beforeUploadFile:function(e){var t=e.size/1024/1024<20;return t?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):t:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChangeUpload:function(e){var t=this;if(console.log("########",e),e.file&&!e.file.status&&this.fileloading)return!1;if("uploading"===e.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.avatarFileList=e.fileList}if("uploading"!==e.file.status&&(this.fileloading=!1,console.log(e.file,e.fileList)),"done"==e.file.status&&e.file&&e.file.response){var a=e.file.response;if(1e3===a.status)this.data_arr.push(a.data),console.log("data_arr",this.data_arr),this.avatarFileList=e.fileList,console.log("--------",a.data.url),this.request(o["a"].exportMeter,{tokenName:this.tokenName,file:a.data.url,charge_name:this.charge_name}).then((function(e){e.error?(t.$parent.getList(t.charge_name,t.project_id),t.$message.success("上传成功")):window.location.href=e.data})),this.visibleUpload=!1;else for(var i in this.$message.error(e.file.response.msg),this.avatarFileList=[],e.fileList)if(e.fileList[i]){var n=e.fileList[i];console.log("info_1",n),n&&n.response&&1e3===n.response.status&&this.avatarFileList.push(n)}}if("removed"==e.file.status&&e.file){var s=e.file.response;if(s&&1e3===s.status)for(var i in this.data_arr=[],e.fileList)if(e.fileList[i]){var r=e.fileList[i];r&&r.response&&1e3===r.response.status&&this.data_arr.push(r.response.data)}this.avatarFileList=e.fileList,console.log("data_arr1",this.data_arr)}},handleCancel:function(){this.visibleUpload=!1}}},l=r,d=(a("3117"),a("2877")),c=Object(d["a"])(l,i,n,!1,null,"21c34c8b",null);t["default"]=c.exports}}]);