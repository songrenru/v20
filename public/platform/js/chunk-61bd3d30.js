(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61bd3d30","chunk-2d0c20dc","chunk-2d0bacf3"],{2537:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"欠费账单导入向导",width:1e3,visible:e.visible,maskClosable:!1,footer:e.isImporting||2==e.currentKey?null:void 0},on:{cancel:e.handleCancel}},[a("a-tabs",{attrs:{"default-active-key":1},on:{change:e.tabChange}},[a("a-tab-pane",{key:1,attrs:{tab:"导入操作"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.firstStep&&!e.isImporting,expression:"firstStep && !isImporting"}],staticClass:"step_one"},[a("h4",[e._v("步骤一：选择需要上传【欠费账单】所属【收费项目】")]),a("h5",[a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("注意：")]),e._v("1. 仅支持"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【收费模式：一次性费用】")]),e._v("的"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【收费项目】")]),e._v("。")]),a("div",[a("span",{staticClass:"label_col",staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[e._v("收费科目：")]),a("a-select",{staticStyle:{width:"282px","margin-left":"20px"},attrs:{"show-search":""},on:{change:e.handleChargeNumberChange},model:{value:e.subjectId,callback:function(t){e.subjectId=t},expression:"subjectId"}},e._l(e.chargeNumber,(function(t,l){return a("a-select-option",{key:l,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),a("div",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label_col",staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[e._v("收费项目：")]),a("a-select",{staticStyle:{width:"282px","margin-left":"20px"},attrs:{"show-search":""},on:{change:e.handleChargeProjectChange},model:{value:e.projectId,callback:function(t){e.projectId=t},expression:"projectId"}},e._l(e.chargeProject,(function(t,l){return a("a-select-option",{key:l,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),e.projectId?a("div",[a("h4",[e._v("步骤二：上传 Excel 文件")]),a("h5",[a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("注意：")]),e._v("1. 导入的欠费会归属到所选"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【收费项目】")]),e._v("下，以导入表中"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("[欠缴费用名称]")]),e._v("为名称的"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【计费模式：固定费用】")]),e._v("的"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【收费标准】")]),e._v("中。")]),a("h5",{staticStyle:{"padding-left":"35px"}},[e._v("2. 表中相同"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("[欠缴费用名称]")]),e._v("不同"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("[欠缴金额]")]),e._v("会生成不同的"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【收费标准】")]),e._v("。")]),a("p",[e._v("您要从何处导入数据，请选择导入的 Excel 文件")]),a("div",{staticStyle:{display:"flex",width:"80%"}},[a("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[e._v("Excel文件")]),a("a-upload-dragger",{staticStyle:{height:"100px",width:"calc(100% - 82px)","margin-left":"10px"},attrs:{name:"file",multiple:!0,action:e.uploadUrl,beforeUpload:e.beforeUploadExcel,showUploadList:!1,headers:e.headers,data:{upload_dir:"billExcel",system_type:"village",type:"billExcel"}},on:{change:e.handleUploadChange}},[a("a-icon",{attrs:{type:e.uploadLoading?"loading":"upload"}}),e._v(" "+e._s(e.uploadFileName?e.uploadFileName:"拖拽或点击上传 Excel 文件")+" ")],1)],1),e.fileList.length>0?a("div",{staticClass:"select_list",staticStyle:{display:"flex","align-items":"center",height:"50px"}},[a("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[e._v("选择Sheet表")]),a("a-select",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{"default-value":0},on:{change:e.handleSelectChange}},e._l(e.fileList,(function(t,l){return a("a-select-option",{key:l,attrs:{value:l}},[e._v(" "+e._s(t.worksheetName)+" ")])})),1),a("div",{staticStyle:{color:"red","margin-left":"10px"}},[e._v("总数据量："+e._s(e.selectObj.totalRows?e.selectObj.totalRows-1:0)+" 条")])],1):e._e(),a("h5",[e._v("导入步骤：")]),a("h5",[a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("注意：")]),e._v(" 1. "),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【楼栋】")]),e._v("、 "),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【单元】")]),e._v("、 "),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【楼层】")]),e._v("、 "),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("【房间号】")]),e._v(" 是和对应名称或编号"),a("span",{staticStyle:{color:"#ff4d4f"}},[e._v("全匹配[就是名称或者编号需要完全一致]")]),e._v("定位对应房间的。")]),a("p",[e._v(" 第一步：上传存储有的资料 Excel 文件；【您可以直接上传 Excel 文件或者下载模板："),a("a-button",{attrs:{type:"link"},on:{click:e.downloadExcel}},[e._v(" 模板下载")]),e._v("】 ")],1),a("p",[e._v(" 第二步：设置 Excel 里的列与系统中的列的对应关系")]),a("p",[e._v(" 第三步：开始导入")])]):e._e()])]),a("a-tab-pane",{key:2,attrs:{tab:"导入日志"}},[2==e.currentKey?a("importRecord",{attrs:{type:e.uploadType}}):e._e()],1)],1),e.isImporting?e._e():a("template",{slot:"footer"},[a("div",{staticClass:"footer_con",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",width:"100%"}},[e.firstStep?a("div",{staticClass:"left"}):e._e(),a("div",{staticClass:"right"},[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.startImport}},[e._v("开始导入")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default"},on:{click:e.handleCancel}},[e._v("取消")])],1)])]),e.isImporting&&2!=e.currentKey?a("div",{staticClass:"progress_content",staticStyle:{width:"100%",height:"450px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[a("a-progress",{attrs:{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:e.percentVal}}),a("div",{staticClass:"importing",staticStyle:{"margin-top":"15px"}},[e._v(" 总行数 "),a("span",{staticStyle:{"font-size":"larger"}},[e._v(e._s(e.readRowTotal))]),e._v("，正在导入，剩余"),a("span",{staticStyle:{"font-size":"larger"}},[e._v(e._s(e.readRowTotal-(e.successInsterTotal+e.errorTotal))+" ")]),e._v(" 条记录待导入，成功"),a("span",{staticStyle:{color:"#68C472","font-size":"larger"}},[e._v(e._s(e.successInsterTotal))]),e._v("条,失败"),a("span",{staticStyle:{color:"red","font-size":"larger"}},[e._v(" "+e._s(e.errorTotal)+" ")]),e._v("条 ")]),a("div",{staticClass:"desc",staticStyle:{"margin-top":"15px",color:"#999999","font-size":"14px"}},[100!=e.percentVal?a("span",[e._v("提示：正在等待导入，如果关闭本窗口，导入不会中断")]):a("span",[e._v("导入完成")]),100==e.percentVal?a("a-button",{attrs:{type:"link"},on:{click:e.goBack}},[e._v("重新导入")]):e._e()],1)],1):e._e()],2)},n=[],i=(a("b0c0"),a("8bbf")),o=a.n(i),c=(a("5880"),a("ca00")),r=a("ed09"),s=(a("3990"),a("4956")),u=Object(r["c"])({props:{visible:{type:Boolean,default:!1},uploadType:{type:String,default:"billExcel"}},components:{importRecord:s["default"]},setup:function(e,t){var a=Object(r["h"])(0),l=Object(r["h"])(null),n=Object(r["h"])(!1),i=Object(r["h"])(0),s=Object(r["h"])("/v20/public/index.php/community/common.BillExcel/billUploadFile"),u=Object(r["h"])([]),p=Object(r["h"])(!1),d=Object(r["h"])(!0),v=Object(r["h"])(0),m=Object(r["h"])(""),g=Object(r["h"])([]),f=Object(r["h"])(null),y=Object(r["h"])([]),h=Object(r["h"])(null),_=function(){o.a.prototype.request("/community/common.BillExcel/getChargeSubject",{tokenName:X.value}).then((function(e){g.value=e,console.log("getChargeNumber",e)})).catch((function(e){console.log("getChargeNumber",e)}))},b=function(e){o.a.prototype.request("/community/common.BillExcel/getChargeProject",{subject_id:e,tokenName:X.value}).then((function(e){y.value=e,console.log("chargeProject",e)})).catch((function(e){console.log("chargeProject",e)}))},x=function(e){console.log("handleChargeNumberChange",e),f.value=e,h.value=null,b(e)},I=function(e){console.log("handleChargeProjectChange",e),h.value=e},R=function(e){var t=e.name.split(".").pop();if("xlsx"!=t&&"xls"!=t)return p.value=!1,o.a.prototype.$message.warn("上传文件格式非 Excel"),!1},S=function(){q(),t.emit("exit",!1)},w=function(){d.value=!0},j=function(){f.value?h.value?L.totalRows&&0==L.totalRows?o.a.prototype.$message.warn("请完善上传信息"):B.value&&O.value?o.a.prototype.request("/community/common.BillExcel/startImport",{tokenName:X.value,subjectId:f.value,projectId:h.value,inputFileName:O.value,worksheetName:B.value,selectWorkSheetIndex:v.value}).then((function(e){o.a.prototype.$message.success("提交成功，准备导入，调整画面为进度条画面！"),n.value=!0,l.value=setInterval((function(){V()}),1e3)})).catch((function(e){n.value=!1,q()})):o.a.prototype.$message.warn("请先上传Excel文件"):o.a.prototype.$message.warn("请选择收费项目"):o.a.prototype.$message.warn("请选择收费科目")},U=Object(c["k"])("/community/village_api.Building/villageUploadFile"),k=o.a.ls.get(U),C=Object(r["g"])({authorization:"authorization-text",ticket:k}),O=Object(r["h"])(""),B=Object(r["h"])(""),E=function(e){p.value=!0,"uploading"!==e.file.status&&(p.value=!0),"done"===e.file.status?(console.log("info.file.response.data.path",e.file.response.data.path),O.value=e.file.response.data.path,p.value=!1,1e3==e.file.response.status?(m.value=e.file.response.data.file_name,F(O.value)):o.a.prototype.$message.error(e.file.response.msg)):"error"===e.file.status&&(p.value=!1,o.a.prototype.$message.error("".concat(e.file.name," file upload failed.")))},L=Object(r["h"])({}),N=function(e){L.value=u.value[e],B.value=u.value[e].worksheetName,v.value=e,Object(r["d"])()},F=function(e){o.a.prototype.request("/community/common.BillExcel/importForExcel",{inputFileName:e,tokenName:X.value}).then((function(e){u.value=e.worksheet,L.value=e.worksheet[0],B.value=e.worksheet[0].worksheetName,console.log("importForExcel ------\x3e",e),Object(r["d"])()})).catch((function(e){}))},T=Object(r["h"])(0),P=Object(r["h"])(0),z=Object(r["h"])(0),$=Object(r["h"])(0),V=function(){o.a.prototype.request("/community/common.BillExcel/refreshProcess",{type:"billExcel",tokenName:X.value}).then((function(e){e.process&&(T.value=e.process,P.value=e.processInfo.readRowTotal,z.value=e.processInfo.successInsterTotal,$.value=e.processInfo.errorTotal,100==e.process&&(o.a.prototype.$message.warn("导入执行完毕！"),q()))})).catch((function(e){q()}))},q=function(){clearInterval(l.value),l.value=null,O.value="",B.value="",m.value="",u.value=[]},D=function(){o.a.prototype.request("/community/common.BillExcel/getImportTemplateUrl",{tokenName:X.value}).then((function(e){console.log("downloadExcel",e.url),window.open(e.url)})).catch((function(e){console.log("downloadExcel",e)}))},K=function(){u.value=[],d.value=!0,n.value=!1,T.value=0,P.value=0,P.value=0,z.value=0,$.value=0,m.value="",O.value="",B.value="",clearInterval(l.value),l.value=null},W=Object(r["h"])(1),J=function(e){W.value=e},M=Object(r["h"])(null),X=Object(r["h"])(null);return Object(r["i"])((function(){return e.visible}),(function(e){M.value=Object(c["i"])(location.hash),M.value?X.value=M.value+"_access_token":M.value="village",g.value=[],y.value=[],f.value=null,h.value=null,console.log("val",e),console.log("tokenNameSys",X.value),console.log("tokenName",U),console.log("token",k),_()}),{deep:!0}),{handleCancel:S,headers:C,handleUploadChange:E,currentIndex:i,uploadUrl:s,uploadExcelFile:F,downloadExcel:D,fileList:u,uploadLoading:p,selectObj:L,handleSelectChange:N,firstStep:d,preStep:w,startImport:j,pathUrl:O,beforeUploadExcel:R,interval:l,refreshProgress:V,isImporting:n,percentVal:T,clearTimer:q,isSkip:a,readRowTotal:P,successInsterTotal:z,errorTotal:$,uploadFileName:m,goBack:K,tabChange:J,currentKey:W,getChargeNumber:_,handleChargeNumberChange:x,handleChargeProjectChange:I,chargeNumber:g,chargeProject:y,subjectId:f,projectId:h,sysName:M}}}),p=u,d=(a("c704"),a("0c7c")),v=Object(d["a"])(p,l,n,!1,null,"1be75dec",null);t["default"]=v.exports},3990:function(e,t,a){"use strict";var l={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=l},4395:function(e,t,a){},4956:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"charging_standard"},[a("a-table",{attrs:{"row-key":function(e){return e.add_time},pagination:e.pageInfo,columns:e.chargeColumns,loading:e.tableLoading,"data-source":e.tableList},on:{change:e.tableChange},scopedSlots:e._u([{key:"file_url",fn:function(t,l){return a("span",{},[0==l.status?a("a",{on:{click:function(t){return e.goUrl(l.file_url)}}},[e._v("点击查看")]):a("span",[e._v("--")])])}},{key:"duration",fn:function(t,l){return a("span",{},[e._v(" "+e._s(l.duration)+"s ")])}},{key:"status",fn:function(t,l){return a("span",{},[a("span",{style:{color:0==l.status?"red":"green"}},[e._v(e._s(0==l.status?"存在导入失败的数据":"导入成功"))])])}}])})],1)},n=[],i=a("8bbf"),o=a.n(i),c=a("ed09"),r=Object(c["c"])({props:{type:{type:String,default:""}},setup:function(e,t){var a=Object(c["h"])([]),l=Object(c["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0}),n=Object(c["h"])([]),i=Object(c["h"])(!1);Object(c["f"])((function(){s()}));var r=function(e){var t=e.pageSize,a=e.current;l.value.current=a,l.value.pageSize=t,s()},s=function(){i.value=!0,o.a.prototype.request("/community/common.BillExcel/getVillageImportRecord",{tokenName:"village_access_token",type:e.type,page:l.value.current,limit:l.value.pageSize}).then((function(e){n.value=e.list,l.value.total=e.count,i.value=!1})).catch((function(e){i.value=!1}))};a.value=[{title:"文件名称",dataIndex:"file_name",key:"file_name"},{title:"详情",dataIndex:"file_url",key:"file_url",scopedSlots:{customRender:"file_url"}},{title:"时长",dataIndex:"duration",key:"duration",scopedSlots:{customRender:"duration"}},{title:"结果",dataIndex:"import_msg",key:"import_msg"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"时间",dataIndex:"add_time",key:"add_time"}];var u=function(e){window.open(e)};return{chargeColumns:a,pageInfo:l,tableList:n,tableLoading:i,getRecordList:s,tableChange:r,goUrl:u}}}),s=r,u=a("0c7c"),p=Object(u["a"])(s,l,n,!1,null,"b87be6f2",null);t["default"]=p.exports},c704:function(e,t,a){"use strict";a("4395")}}]);