(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79e2f6aa","chunk-b3a4043e","chunk-5389367b","chunk-47dc0db8","chunk-2d0bacf3"],{"193c":function(t,e,i){"use strict";i("47d4")},3182:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"third-data-important-index-box"},[i("div",{staticClass:"card-container"},[i("a-tabs",{attrs:{type:"card",activeKey:t.cardActiveKey},on:{change:t.callback}},[i("a-tab-pane",{key:"roomUploadPage",attrs:{tab:"房产信息导入"}}),i("a-tab-pane",{key:"userUploadPage",attrs:{tab:"客户信息导入","force-render":""}}),i("a-tab-pane",{key:"chargeUploadPage",attrs:{tab:"收费信息导入"}})],1)],1),i("div",{staticClass:"tab_components"},[t.visible?i(t.currentTab,{key:t.currentTab,tag:"room-upload-page"}):t._e()],1)])},s=[],l=i("f2dc"),n=i("355a"),r=i("519b"),o={name:"thirdDataImportIndex",components:{roomUploadPage:l["default"],userUploadPage:n["default"],chargeUploadPage:r["default"]},data:function(){return{cardActiveKey:"roomUploadPage",visible:!0,currentTab:"roomUploadPage"}},methods:{callback:function(t){this.currentTab=t,this.cardActiveKey=t},closeRoomUploadPage:function(t){this.roomUploadPageVisbile=!1}}},c=o,d=(i("193c"),i("0c7c")),u=Object(d["a"])(c,a,s,!1,null,"9d412402",null);e["default"]=u.exports},"355a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-upload-page-box"},[t.isImporting?t._e():i("div",[i("div",{staticClass:"third-user-upload-page"},[t._m(0),i("p",[t._v("您要从何处导入数据，请选择导入的 Excel 文件")]),i("div",{staticStyle:{display:"flex",width:"50%"}},[i("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[t._v("Excel文件")]),i("a-upload-dragger",{staticStyle:{height:"150px",width:"calc(100% - 82px)","margin-left":"10px"},attrs:{name:"file",multiple:!1,action:t.uploadUrl,beforeUpload:t.beforeUploadExcel,"file-list":t.fileList,showUploadList:!0,headers:t.headers,data:{upload_dir:"thirdUser",system_type:"village",type:"thirdUserInfo"}},on:{change:t.handleUploadChange}},[i("a-icon",{attrs:{type:t.uploadLoading?"loading":"upload"}}),t._v(" 拖拽或点击上传 Excel 文件 ")],1)],1)]),i("div",{staticStyle:{width:"calc(50% + 82px)","text-align":"center","margin-top":"60px"}},[i("a-button",{attrs:{type:"primary",icon:"upload",size:"large",loading:t.imporLoading},on:{click:t.startImport}},[t._v("开始导入")])],1)]),t.isImporting?i("div",{staticClass:"progress_content",staticStyle:{width:"100%",height:"450px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[i("a-progress",{attrs:{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:t.percentVal}}),i("div",{staticClass:"importing",staticStyle:{"margin-top":"15px"}},[t._v(" 正在导入，剩余"+t._s(t.surplusVal)+"行记录待导入，成功"),i("span",{staticStyle:{color:"#68C472"}},[t._v(t._s(t.successVal))]),t._v("行。。。 ")]),i("div",{staticClass:"desc",staticStyle:{"margin-top":"15px",color:"#999999","font-size":"14px"}},[t._v(" 正在等待导入，稍候 ")])],1):t._e()])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",[t._v("上传 "),i("b",[t._v("业主信息")]),t._v(" Excel 文件")])}],l=(i("ac1f"),i("1276"),i("b0c0"),i("8bbf")),n=i.n(l),r=i("3990"),o=i("ca00"),c={name:"thirdUserUploadPage",data:function(){return{uploadLoading:!1,imporLoading:!1,isImporting:!1,interval:null,pathUrl:"",fileList:[],percentVal:0,successVal:0,surplusVal:0,firstLoading:!0,headers:{},uploadUrl:"",tokenName:"",sysName:"",orderGroupId:""}},activated:function(){this.clearData()},mounted:function(){this.clearData()},methods:{clearData:function(){if(!this.firstLoading)return!1;var t=Object(o["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.firstLoading=!1,this.uploadLoading=!1,this.imporLoading=!1,this.isImporting=!1,this.interval=null,this.pathUrl="",this.fileList=[],this.percentVal=0,this.successVal=0,this.surplusVal=0,this.headers={authorization:"authorization-text",ticket:n.a.ls.get(this.tokenName)},this.uploadUrl="/v20/public/index.php/"+r["a"].thirdVillageUploadFile},beforeUploadExcel:function(t){var e=t.name.split(".").pop();if("xlsx"!=e&&"xls"!=e)return this.uploadLoading=!1,this.$message.warn("上传文件格式非Excel"),!1},handleUploadChange:function(t){this.uploadLoading=!0,"removed"===t.file.status?(this.uploadLoading=!1,this.fileList=[],this.pathUrl="",this.$message.warn("删除上传文件 ".concat(t.file.name," 成功。"))):t.file&&(this.fileList=[t.file]),"done"===t.file.status?(this.pathUrl=t.file.response.data,this.uploadLoading=!1,1e3==t.file.response.status?this.$message.success("".concat(t.file.name," 文件上传成功。")):this.$message.error(t.file.response.msg)):"error"===t.file.status&&(this.uploadLoading=!1,this.$message.error("".concat(t.file.name," 文件上传失败。")))},startImport:function(){if(!this.pathUrl)return this.$message.error("请先上传文件。"),!1;this.imporLoading=!0;var t=this;this.request(r["a"].thirdStartUserImport,{inputFileName:this.pathUrl}).then((function(e){console.log("1111111---",e),t.orderGroupId=e.orderGroupId,t.imporLoading=!1,t.$message.success("提交成功，准备导入，调整画面为进度条画面！"),t.isImporting=!0,t.interval=setInterval((function(){t.refreshProgress()}),1e3)})).catch((function(e){t.imporLoading=!1}))},refreshProgress:function(){var t=this;this.request(r["a"].thirdRefreshProcess,{type:"thirdUserInfo",orderGroupId:this.orderGroupId}).then((function(e){t.percentVal=e.process,100==e.process&&(t.$message.success("导入完成！"),t.clearTimer()),e.success&&(t.successVal=e.success),e.surplus&&(t.surplusVal=e.surplus)})).catch((function(e){console.log("e",e),t.imporLoading=!1,t.clearTimer()}))},clearTimer:function(){clearInterval(this.interval),this.interval=null}}},d=c,u=i("0c7c"),p=Object(u["a"])(d,a,s,!1,null,null,null);e["default"]=p.exports},3990:function(t,e,i){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess"};e["a"]=a},"47d4":function(t,e,i){},"519b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"charge-upload-page-box"},[t.isImporting?t._e():i("div",[i("div",{staticClass:"third-charge-upload-page"},[t._m(0),i("p",[t._v("您要从何处导入数据，请选择导入的 Excel 文件")]),i("div",{staticStyle:{display:"flex",width:"50%"}},[i("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[t._v("Excel文件")]),i("a-upload-dragger",{staticStyle:{height:"150px",width:"calc(100% - 82px)","margin-left":"10px"},attrs:{name:"file",multiple:!1,action:t.uploadUrl,beforeUpload:t.beforeUploadExcel,"file-list":t.fileList,showUploadList:!0,headers:t.headers,data:{upload_dir:"thirdCharge",system_type:"village",type:"thirdChargeInfo"}},on:{change:t.handleUploadChange}},[i("a-icon",{attrs:{type:t.uploadLoading?"loading":"upload"}}),t._v(" 拖拽或点击上传 Excel 文件 ")],1)],1)]),i("div",{staticStyle:{width:"calc(50% + 82px)","text-align":"center","margin-top":"60px"}},[i("a-button",{attrs:{type:"primary",icon:"upload",size:"large",loading:t.imporLoading},on:{click:t.startImport}},[t._v("开始导入")])],1)]),t.isImporting?i("div",{staticClass:"progress_content",staticStyle:{width:"100%",height:"450px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[i("a-progress",{attrs:{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:t.percentVal}}),i("div",{staticClass:"importing",staticStyle:{"margin-top":"15px"}},[t._v(" 正在导入，剩余"+t._s(t.surplusVal)+"行记录待导入，成功"),i("span",{staticStyle:{color:"#68C472"}},[t._v(t._s(t.successVal))]),t._v("行。。。 ")]),i("div",{staticClass:"desc",staticStyle:{"margin-top":"15px",color:"#999999","font-size":"14px"}},[t._v(" 正在等待导入，稍候 ")])],1):t._e()])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",[t._v("上传 "),i("b",[t._v("账单信息")]),t._v(" Excel 文件")])}],l=(i("ac1f"),i("1276"),i("b0c0"),i("8bbf")),n=i.n(l),r=i("3990"),o=i("ca00"),c={name:"thirdChargeUploadPage",data:function(){return{uploadLoading:!1,imporLoading:!1,isImporting:!1,interval:null,pathUrl:"",fileList:[],percentVal:0,successVal:0,surplusVal:0,firstLoading:!0,headers:{},uploadUrl:"",tokenName:"",sysName:"",orderGroupId:""}},activated:function(){this.clearData()},mounted:function(){this.clearData()},methods:{clearData:function(){if(!this.firstLoading)return!1;var t=Object(o["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.firstLoading=!1,this.uploadLoading=!1,this.imporLoading=!1,this.isImporting=!1,this.interval=null,this.pathUrl="",this.fileList=[],this.percentVal=0,this.successVal=0,this.surplusVal=0,this.headers={authorization:"authorization-text",ticket:n.a.ls.get(this.tokenName)},this.uploadUrl="/v20/public/index.php/"+r["a"].thirdVillageUploadFile},beforeUploadExcel:function(t){var e=t.name.split(".").pop();if("xlsx"!=e&&"xls"!=e)return this.uploadLoading=!1,this.$message.warn("上传文件格式非Excel"),!1},handleUploadChange:function(t){this.uploadLoading=!0,"removed"===t.file.status?(this.uploadLoading=!1,this.fileList=[],this.pathUrl="",this.$message.warn("删除上传文件 ".concat(t.file.name," 成功。"))):t.file&&(this.fileList=[t.file]),"done"===t.file.status?(this.pathUrl=t.file.response.data,this.uploadLoading=!1,1e3==t.file.response.status?this.$message.success("".concat(t.file.name," 文件上传成功。")):this.$message.error(t.file.response.msg)):"error"===t.file.status&&(this.uploadLoading=!1,this.$message.error("".concat(t.file.name," 文件上传失败。")))},startImport:function(){if(!this.pathUrl)return this.$message.error("请先上传文件。"),!1;this.imporLoading=!0;var t=this;this.request(r["a"].thirdStartChargeImport,{inputFileName:t.pathUrl}).then((function(e){console.log("1111111---",e),t.orderGroupId=e.orderGroupId,t.imporLoading=!1,t.$message.success("提交成功，准备导入，调整画面为进度条画面！"),t.isImporting=!0,t.interval=setInterval((function(){t.refreshProgress()}),1e3)})).catch((function(e){t.imporLoading=!1}))},refreshProgress:function(){var t=this;this.request(r["a"].thirdRefreshProcess,{type:"thirdChargeInfo",orderGroupId:this.orderGroupId}).then((function(e){t.percentVal=e.process,100==e.process&&(t.$message.success("导入完成！"),t.clearTimer()),e.success&&(t.successVal=e.success),e.surplus&&(t.surplusVal=e.surplus)})).catch((function(e){console.log("e",e),t.imporLoading=!1,t.clearTimer()}))},clearTimer:function(){clearInterval(this.interval),this.interval=null}}},d=c,u=i("0c7c"),p=Object(u["a"])(d,a,s,!1,null,null,null);e["default"]=p.exports},f2dc:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"room-upload-page-box"},[t.isImporting?t._e():i("div",[i("div",{staticClass:"third-room-upload-page"},[t._m(0),i("p",[t._v("您要从何处导入数据，请选择导入的 Excel 文件")]),i("div",[t._v(" 注意事项 ")]),i("div",{staticStyle:{display:"flex",width:"50%"}},[i("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[t._v("Excel文件")]),i("a-upload-dragger",{staticStyle:{height:"150px",width:"calc(100% - 82px)","margin-left":"10px"},attrs:{name:"file",multiple:!1,action:t.uploadUrl,beforeUpload:t.beforeUploadExcel,"file-list":t.fileList,showUploadList:!0,headers:t.headers,data:{upload_dir:"thirdRoom",system_type:"village",type:"thirdRoomInfo"}},on:{change:t.handleUploadChange}},[i("a-icon",{attrs:{type:t.uploadLoading?"loading":"upload"}}),t._v(" 拖拽或点击上传 Excel 文件 ")],1)],1)]),i("div",{staticStyle:{width:"calc(50% + 82px)","text-align":"center","margin-top":"60px"}},[i("a-button",{attrs:{type:"primary",icon:"upload",size:"large",loading:t.imporLoading},on:{click:t.startImport}},[t._v("开始导入")])],1)]),t.isImporting?i("div",{staticClass:"progress_content",staticStyle:{width:"100%",height:"450px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[i("a-progress",{attrs:{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:t.percentVal}}),i("div",{staticClass:"importing",staticStyle:{"margin-top":"15px"}},[t._v(" 正在导入，剩余"+t._s(t.surplusVal)+"行记录待导入，成功"),i("span",{staticStyle:{color:"#68C472"}},[t._v(t._s(t.successVal))]),t._v("行。。。 ")]),i("div",{staticClass:"desc",staticStyle:{"margin-top":"15px",color:"#999999","font-size":"14px"}},[t._v(" 正在等待导入，稍候 ")])],1):t._e()])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",[t._v("上传 "),i("b",[t._v("房产信息")]),t._v(" Excel 文件")])}],l=(i("ac1f"),i("1276"),i("b0c0"),i("8bbf")),n=i.n(l),r=i("3990"),o=i("ca00"),c={name:"thirdRoomUploadPage",data:function(){return{uploadLoading:!1,imporLoading:!1,isImporting:!1,interval:null,pathUrl:"",fileList:[],percentVal:0,successVal:0,surplusVal:0,firstLoading:!0,headers:{},uploadUrl:"",tokenName:"",sysName:"",orderGroupId:""}},activated:function(){this.clearData()},mounted:function(){this.clearData()},methods:{clearData:function(){if(!this.firstLoading)return!1;var t=Object(o["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.firstLoading=!1,this.uploadLoading=!1,this.imporLoading=!1,this.isImporting=!1,this.interval=null,this.pathUrl="",this.fileList=[],this.percentVal=0,this.successVal=0,this.surplusVal=0,this.headers={authorization:"authorization-text",ticket:n.a.ls.get(this.tokenName)},this.uploadUrl="/v20/public/index.php/"+r["a"].thirdVillageUploadFile},beforeUploadExcel:function(t){var e=t.name.split(".").pop();if("xlsx"!=e&&"xls"!=e)return this.uploadLoading=!1,this.$message.warn("上传文件格式非Excel"),!1},handleUploadChange:function(t){this.uploadLoading=!0,"removed"===t.file.status?(this.uploadLoading=!1,this.fileList=[],this.pathUrl="",this.$message.warn("删除上传文件 ".concat(t.file.name," 成功。"))):t.file&&(this.fileList=[t.file]),"done"===t.file.status?(this.pathUrl=t.file.response.data,this.uploadLoading=!1,1e3==t.file.response.status?this.$message.success("".concat(t.file.name," 文件上传成功。")):this.$message.error(t.file.response.msg)):"error"===t.file.status&&(this.uploadLoading=!1,this.$message.error("".concat(t.file.name," 文件上传失败。")))},startImport:function(){if(!this.pathUrl)return this.$message.error("请先上传文件。"),!1;this.imporLoading=!0;var t=this;this.request(r["a"].thirdStartRoomImport,{inputFileName:this.pathUrl}).then((function(e){console.log("1111111---",e),t.orderGroupId=e.orderGroupId,t.imporLoading=!1,t.$message.success("导入结束！"),e.fileArr&&e.fileArr.url&&window.open(e.fileArr.url)})).catch((function(e){t.imporLoading=!1}))},refreshProgress:function(){var t=this;this.request(r["a"].thirdRefreshProcess,{type:"thirdRoomInfo",orderGroupId:this.orderGroupId}).then((function(e){t.percentVal=e.process,100==e.process&&(t.$message.success("导入完成！"),t.imporLoading=!1,t.clearTimer()),e.success&&(t.successVal=e.success),e.surplus&&(t.surplusVal=e.surplus)})).catch((function(e){console.log("e",e),t.imporLoading=!1,t.clearTimer()}))},clearTimer:function(){this.isImporting=!1,clearInterval(this.interval),this.interval=null}}},d=c,u=i("0c7c"),p=Object(u["a"])(d,a,s,!1,null,null,null);e["default"]=p.exports}}]);