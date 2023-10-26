(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45a76598","chunk-2d0f0f38","chunk-2d0bacf3"],{3990:function(e,t,a){"use strict";var l={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=l},"7b72":function(e,t,a){"use strict";a("ee12")},"89a3":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"导入"+e.modalTitle,width:1e3,visible:e.visible,maskClosable:!1,footer:e.isImporting||2==e.currentKey?null:void 0},on:{cancel:e.handleCancel}},[a("a-tabs",{attrs:{"default-active-key":1},on:{change:e.tabChange}},[a("a-tab-pane",{key:1,attrs:{tab:"导入操作"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.firstStep&&!e.isImporting,expression:"firstStep && !isImporting"}],staticClass:"step_one"},[a("h4",[e._v("步骤一：上传 Excel 文件")]),a("p",[e._v("您要从何处导入数据，请选择导入的 Excel 文件")]),a("div",{staticStyle:{display:"flex",width:"80%"}},[a("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[e._v("Excel文件")]),a("a-upload-dragger",{staticStyle:{height:"100px",width:"calc(100% - 82px)","margin-left":"10px"},attrs:{name:"file",multiple:!0,action:e.uploadUrl,beforeUpload:e.beforeUploadExcel,showUploadList:!1,headers:e.headers,data:{upload_dir:"building",system_type:"village",type:e.uploadType,tokenName:e.tokenStr}},on:{change:e.handleUploadChange}},[a("a-icon",{attrs:{type:e.uploadLoading?"loading":"upload"}}),e._v(" "+e._s(e.uploadFileName?e.uploadFileName:"拖拽或点击上传 Excel 文件")+" ")],1)],1),e.fileList.length>0?a("div",{staticClass:"select_list",staticStyle:{display:"flex","align-items":"center",height:"50px"}},[a("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[e._v("选择Sheet表")]),a("a-select",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{"default-value":0},on:{change:e.handleSelectChange}},e._l(e.fileList,(function(t,l){return a("a-select-option",{key:l,attrs:{value:l}},[e._v(" "+e._s(t.worksheetName)+" ")])})),1),a("div",{staticStyle:{color:"red","margin-left":"10px"}},[e._v("总数据量："+e._s(e.selectObj.totalRows?e.selectObj.totalRows-1:0)+" 条")])],1):e._e(),e.fileList.length>0&&e.replaceFieldSelect.length>0?a("div",{staticClass:"select_list",staticStyle:{display:"flex","align-items":"center",height:"50px"}},[a("div",{staticClass:"label",staticStyle:{width:"90px","text-align":"left"}},[e._v("数据重复时")]),a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.isSkip,callback:function(t){e.isSkip=t},expression:"isSkip"}},e._l(e.replaceFieldSelect,(function(t,l){return a("a-radio",{attrs:{value:t.key}},[e._v(e._s(t.value))])})),1),"cover"==e.isSkip&&e.replaceFieldSelect[1]&&e.replaceFieldSelect[1].children.length>0?a("div",{staticStyle:{"margin-left":"10px",display:"flex","align-items":"center"}},[a("a-select",{staticStyle:{width:"120px",margin:"0 10px"},attrs:{value:e.selectreplaceFie},on:{change:e.handleReplaceChange}},e._l(e.replaceFieldSelect[1].children,(function(t,l){return a("a-select-option",{key:l,attrs:{value:t.option}},[e._v(e._s(t.title))])})),1),a("div",{staticStyle:{color:"red"}},[e._v(e._s(e.selectTips))])],1):e._e()],1):e._e(),a("h5",[e._v("导入步骤：")]),a("p",[e._v(" 第一步：上传存储有楼栋的资料 Excel 文件；【您可以直接上传 Excel 文件或者下载模板："),a("a-button",{attrs:{type:"link"},on:{click:e.downloadExcel}},[e._v(" "+e._s(e.modalTitle)+"模板下载")]),e._v("】 ")],1),a("p",[e._v(" 第二步：设置 Excel 里的列与系统中的列的对应关系")]),a("p",[e._v(" 第三步：开始导入")])]),e.firstStep||e.isImporting?e._e():a("div",{staticClass:"step_two"},[a("div",{staticClass:"top_desc",staticStyle:{display:"flex","align-items":"center",height:"30px"}},[a("h4",[e._v("步骤二：【企业客户创建对应关系】建立系统列与Excel列的对应关系")]),a("p",{staticStyle:{"margin-left":"10px","margin-top":"7px"}},[e._v("建立系统列与Excel列的对应关系")])]),a("div",{staticClass:"line",staticStyle:{width:"100%",height:"1px",border:"0","background-color":"#999999",margin:"10px 0"}}),a("div",{staticClass:"list"},[a("div",{staticClass:"title"},[a("span",[e._v(e._s(e.modalTitle)+"信息")]),a("span",{staticStyle:{"margin-left":"10px",color:"red"}},[e._v("*号为必填项")])]),a("div",{staticClass:"top_label",staticStyle:{width:"100%",height:"30px",display:"flex","justify-content":"space-between margin-top: 10px"}},[a("div",{staticClass:"left_label",staticStyle:{width:"50%",display:"flex","background-color":"#dddddd",border:"1px solid #999999"}},e._l(e.labelList,(function(t,l){return a("div",{key:l,staticStyle:{width:"50%",display:"flex","align-items":"center","justify-content":"center"}},[e._v(e._s(t.name))])})),0),a("div",{staticClass:"right_label",staticStyle:{width:"50%",display:"flex","background-color":"#dddddd",border:"1px solid #999999"}},e._l(e.labelList,(function(t,l){return a("div",{key:l,staticStyle:{width:"50%",display:"flex","align-items":"center","justify-content":"center"}},[e._v(e._s(t.name))])})),0)]),a("div",{staticClass:"select_con",staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},e._l(e.sourceMapFields,(function(t,l){return a("div",{key:l,staticClass:"select_list",staticStyle:{width:"50%",display:"flex","align-items":"center","justify-content":"space-around"}},[a("div",{staticClass:"left_label",staticStyle:{width:"30%",display:"flex","align-items":"center","justify-content":"flex-end","margin-right":"30px"}},[t.val.isMust?a("span",{staticStyle:{color:"red","margin-right":"3px"}},[e._v("*")]):e._e(),a("a-tooltip",{attrs:{placement:"topLeft",title:t.key}},[e._v(" "+e._s(t.key.length>8?t.key.substring(0,8)+"...":t.key)+"： ")])],1),a("div",{staticClass:"right_select",staticStyle:{width:"50%",display:"flex","align-items":"center","justify-content":"flex-end",transform:"translateY(-4px)"}},[e.refreshSelect?a("a-select",{staticStyle:{width:"200px","margin-left":"10px","margin-top":"10px"},attrs:{allowClear:"",placeholder:"请选择","default-value":t.selected?t.key:void 0},on:{change:function(a){return e.handleExcelChange(a,t.val.field)}}},e._l(e.excelCloumns,(function(t,l){return a("a-select-option",{key:l,staticStyle:{height:"32px"},attrs:{value:t.key}},[e._v(" "+e._s(t.val)+" ")])})),1):e._e()],1)])})),0)])])]),a("a-tab-pane",{key:2,attrs:{tab:"导入日志"}},[2==e.currentKey?a("importRecord",{attrs:{type:e.uploadType}}):e._e()],1)],1),e.isImporting?e._e():a("template",{slot:"footer"},[a("div",{staticClass:"footer_con",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",width:"100%"}},[e.firstStep?a("div",{staticClass:"left"}):e._e(),e.firstStep?e._e():a("div",{staticClass:"left"},[e._v(" 请注意系统列与Excel列的类型要匹配 ")]),a("div",{staticClass:"right"},[e.firstStep?e._e():a("a-button",{attrs:{type:"default"},on:{click:e.preStep}},[e._v("上一步")]),e.firstStep?a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.nextStep}},[e._v("下一步")]):e._e(),e.firstStep?e._e():a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.startImport}},[e._v("开始导入")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default"},on:{click:e.handleCancel}},[e._v("取消")])],1)])]),e.isImporting&&2!=e.currentKey?a("div",{staticClass:"progress_content",staticStyle:{width:"100%",height:"450px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[a("a-progress",{attrs:{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:e.percentVal}}),a("div",{staticClass:"importing",staticStyle:{"margin-top":"15px"}},[e._v(" 总行数 "),a("span",{staticStyle:{"font-size":"larger"}},[e._v(e._s(e.readRowTotal))]),e._v("，正在导入，剩余"),a("span",{staticStyle:{"font-size":"larger"}},[e._v(e._s(e.readRowTotal-(e.successInsterTotal+e.errorTotal))+" ")]),e._v(" 条记录待导入，成功"),a("span",{staticStyle:{color:"#68C472","font-size":"larger"}},[e._v(e._s(e.successInsterTotal))]),e._v("条,失败"),a("span",{staticStyle:{color:"red","font-size":"larger"}},[e._v(" "+e._s(e.errorTotal)+" ")]),e._v("条 ")]),a("div",{staticClass:"desc",staticStyle:{"margin-top":"15px",color:"#999999","font-size":"14px"}},[100!=e.percentVal?a("span",[e._v("提示：正在等待导入，如果关闭本窗口，导入不会中断")]):a("span",[e._v("导入完成")]),100==e.percentVal?a("a-button",{attrs:{type:"link"},on:{click:e.goBack}},[e._v("重新导入")]):e._e()],1)],1):e._e()],2)},i=[],n=a("ade3"),o=(a("a9e3"),a("ac1f"),a("1276"),a("b0c0"),a("d81d"),a("a434"),a("4de4"),a("d3b7"),a("8bbf")),s=a.n(o),r=(a("5880"),a("ca00")),c=a("9f0e"),u=a("ed09"),p=(a("3990"),Object(u["c"])({props:{visible:{type:Boolean,default:!1},upload_type:{type:[String,Number],default:0},uploadType:{type:String,default:""}},components:{importRecord:c["default"]},setup:function(e,t){var a=Object(u["h"])("");"uploadBuilding"==e.uploadType&&(a.value="楼栋"),"uploadUnit"==e.uploadType&&(a.value="单元"),"uploadFloor"==e.uploadType&&(a.value="楼层"),"uploadRoom"==e.uploadType&&(a.value="房间"),"uploadThreeTable"==e.uploadType&&(a.value="三表");var l=Object(u["h"])("skip"),i=Object(u["h"])(""),o=Object(u["h"])(null),c=Object(u["h"])(!1),p=Object(u["h"])(0),d=[{name:"系统列"},{name:"Excel列"}],v=Object(u["h"])("/v20/public/index.php/community/common.ImportExcel/villageUploadFile"),m=Object(u["h"])([]),g=Object(u["h"])(!1),f=Object(u["h"])(!0),y=Object(u["h"])(!1),h=Object(u["h"])(0),_=Object(u["h"])(""),x=Object(u["h"])(""),b=Object(r["i"])(location.hash);x.value=b+"_access_token";var S=function(e){var t=e.name.split(".").pop();if("xlsx"!=t&&"xls"!=t)return g.value=!1,s.a.prototype.$message.warn("上传文件格式非 Excel"),!1},k=function(){o.value&&(clearInterval(o.value),o.value=null),t.emit("exit",!1)},R=function(){f.value=!0},w=Object(u["h"])([]),I=function(e,t){if("root"!=e&&void 0!=e){var a=!0;w.value.map((function(l,i){l.key==t&&(l.value=e,a=!1)})),a&&w.value.push({key:t,value:e})}else w.value.map((function(e,a){e.key==t&&w.value.splice(a,1)}))},U=function(){z.totalRows&&0==z.totalRows?s.a.prototype.$message.warn("请完善上传信息"):E.value&&L.value?(f.value=!1,P()):s.a.prototype.$message.warn("请先上传Excel文件")},C=Object(u["h"])("重复时，覆盖现有客户数据"),j=function(e){i.value=e,q.value[1].children.map((function(t){t.option==e&&(C.value=t.msg?t.msg:"重复时，覆盖现有客户数据")})),Object(u["d"])()},O=function(){var t=V.value.filter((function(e){return e.val.isMust})).length,a=0;V.value.map((function(e){w.value.map((function(t){e.val.isMust&&t.key==e.val.field&&a++}))})),a==t?s.a.prototype.request("/community/common.ImportExcel/startImport ",{tokenName:x.value,type:e.uploadType,relationship:w.value,inputFileName:L.value.path,worksheetName:E.value,find_type:l.value,find_value:i.value,selectWorkSheetIndex:h.value}).then((function(e){s.a.prototype.$message.success("提交成功，准备导入！"),c.value=!0,o.value=setInterval((function(){X()}),1e3)})).catch((function(e){c.value=!1,Y()})):s.a.prototype.$message.warn("有必填项未选")},F=Object(r["k"])("/community/common.ImportExcel/villageUploadFile"),B=s.a.ls.get(F),T=Object(u["g"])({authorization:"authorization-text",ticket:B}),L=Object(u["h"])(""),E=Object(u["h"])(""),N=function(e){g.value=!0,"uploading"!==e.file.status&&(g.value=!1),"done"===e.file.status?(L.value=e.file.response.data,g.value=!1,1e3==e.file.response.status?(_.value=e.file.response.data.file_name,D(L.value)):s.a.prototype.$message.error(e.file.response.msg)):"error"===e.file.status&&(g.value=!1,s.a.prototype.$message.error("".concat(e.file.name," file upload failed.")))},z=Object(u["h"])({}),$=function(e){z.value=m.value[e],E.value=m.value[e].worksheetName,h.value=e,Object(u["d"])()},M=Object(u["h"])([]),V=Object(u["h"])([]),P=function(){s.a.prototype.request("/community/common.ImportExcel/startBindExcelCol",{tokenName:x.value,type:e.uploadType,inputFileName:L.value.path,worksheetName:E.value,selectWorkSheetIndex:h.value}).then((function(e){M.value=e.excelCloumns,V.value=e.sourceMapFields,w.value=[],e.sourceMapFields.map((function(t){if(t.selected){var a=e.excelCloumns.filter((function(e){return e.val==t.key}))[0].key;w.value.push({key:t.val.field,value:a})}})),y.value=!1,Object(u["e"])((function(){y.value=!0})),Object(u["d"])()})).catch((function(e){}))},q=Object(u["h"])([]),D=function(t){s.a.prototype.request("/community/common.ImportExcel/importForExcel",Object(n["a"])({tokenName:x.value,inputFileName:t.path,type:e.uploadType},"tokenName",x.value)).then((function(e){m.value=e.worksheet,z.value=e.worksheet[0],E.value=e.worksheet[0].worksheetName,q.value=e.replaceFieldSelect,q.value,length>0&&(l.value=q.value[0].key),i.value=e.replaceFieldSelect[1].children[0].option,C.value=e.replaceFieldSelect[1].children[0].msg?e.replaceFieldSelect[1].children[0].msg:"重复时，覆盖现有客户数据",Object(u["d"])()})).catch((function(e){}))},K=Object(u["h"])(0),W=Object(u["h"])(0),J=Object(u["h"])(0),G=Object(u["h"])(0),X=function(){s.a.prototype.request("/community/common.ImportExcel/refreshProcess",{tokenName:x.value,type:e.uploadType}).then((function(a){a.process&&(c.value=!0,K.value=a.process,W.value=a.processInfo.readRowTotal,J.value=a.processInfo.successInsterTotal,G.value=a.processInfo.errorTotal,100==a.process&&(s.a.prototype.$message.success("导入执行完毕！"),"uploadBuilding"==e.uploadType?t.emit("exit","building"):"uploadRoom"==e.uploadType&&t.emit("exit","room"),Y()))})).catch((function(e){Y()}))},Y=function(){clearInterval(o.value),o.value=null,L.value="",E.value="",q.value=[],_.value="",m.value=[]},A=function(){window.open(ee.value)},H=function(){m.value=[],f.value=!0,c.value=!1,K.value=0,W.value=0,W.value=0,J.value=0,G.value=0,_.value="",L.value="",E.value="",q.value=[],l.value="skip"},Q=Object(u["h"])(1),Z=function(e){Q.value=e},ee=Object(u["h"])(""),te=function(){s.a.prototype.request("/community/common.ImportExcel/getImportTemplateUrl",{tokenName:x.value,type:e.uploadType}).then((function(e){ee.value=e.url}))};return te(),{handleCancel:k,headers:T,handleUploadChange:N,currentIndex:p,uploadUrl:v,uploadExcelFile:D,downloadExcel:A,fileList:m,uploadLoading:g,selectObj:z,handleSelectChange:$,nextStep:U,firstStep:f,preStep:R,startImport:O,labelList:d,getSelectList:P,pathUrl:L,excelCloumns:M,sourceMapFields:V,handleExcelChange:I,relationship:w,beforeUploadExcel:S,refreshSelect:y,interval:o,refreshProgress:X,isImporting:c,percentVal:K,clearTimer:Y,replaceFieldSelect:q,selectreplaceFie:i,isSkip:l,handleReplaceChange:j,readRowTotal:W,successInsterTotal:J,errorTotal:G,goBack:H,tabChange:Z,currentKey:Q,tokenStr:x,modalTitle:a,uploadFileName:_,modalUrl:ee,getModalUrl:te,selectTips:C}}})),d=p,v=(a("7b72"),a("2877")),m=Object(v["a"])(d,l,i,!1,null,"5e17f8bc",null);t["default"]=m.exports},"9f0e":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"charging_standard"},[a("a-table",{attrs:{"row-key":function(e){return e.add_time},pagination:e.pageInfo,columns:e.chargeColumns,loading:e.tableLoading,"data-source":e.tableList},on:{change:e.tableChange},scopedSlots:e._u([{key:"file_url",fn:function(t,l){return a("span",{},[0==l.status?a("a",{on:{click:function(t){return e.goUrl(l.file_url)}}},[e._v("点击查看")]):a("span",[e._v("--")])])}},{key:"duration",fn:function(t,l){return a("span",{},[e._v(" "+e._s(l.duration)+"s ")])}},{key:"status",fn:function(t,l){return a("span",{},[a("span",{style:{color:0==l.status?"red":"green"}},[e._v(e._s(0==l.status?"存在导入失败的数据":"导入成功"))])])}}])})],1)},i=[],n=a("8bbf"),o=a.n(n),s=a("ed09"),r=Object(s["c"])({props:{type:{type:String,default:""}},setup:function(e,t){var a=Object(s["h"])([]),l=Object(s["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0}),i=Object(s["h"])([]),n=Object(s["h"])(!1);Object(s["f"])((function(){c()}));var r=function(e){var t=e.pageSize,a=e.current;l.value.current=a,l.value.pageSize=t,c()},c=function(){n.value=!0,o.a.prototype.request("/community/common.ImportExcel/getVillageImportRecord",{type:e.type,page:l.value.current,limit:l.value.pageSize}).then((function(e){i.value=e.list,l.value.total=e.count,n.value=!1})).catch((function(e){n.value=!1}))};a.value=[{title:"文件名称",dataIndex:"file_name",key:"file_name"},{title:"详情",dataIndex:"file_url",key:"file_url",scopedSlots:{customRender:"file_url"}},{title:"时长",dataIndex:"duration",key:"duration",scopedSlots:{customRender:"duration"}},{title:"结果",dataIndex:"import_msg",key:"import_msg"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"时间",dataIndex:"add_time",key:"add_time"}];var u=function(e){window.open(e)};return{chargeColumns:a,pageInfo:l,tableList:i,tableLoading:n,getRecordList:c,tableChange:r,goUrl:u}}}),c=r,u=a("2877"),p=Object(u["a"])(c,l,i,!1,null,"0ae99df8",null);t["default"]=p.exports},ee12:function(e,t,a){}}]);