(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47dc0db8","chunk-2d0bacf3"],{"355a":function(i,t,e){"use strict";e.r(t);var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"user-upload-page-box"},[i.isImporting?i._e():e("div",[e("div",{staticClass:"third-user-upload-page"},[i._m(0),e("p",[i._v("您要从何处导入数据，请选择导入的 Excel 文件")]),i._m(1),e("div",{staticStyle:{display:"flex",width:"50%"}},[e("div",{staticClass:"label",staticStyle:{width:"82px","text-align":"left"}},[i._v("Excel文件")]),e("a-upload-dragger",{staticStyle:{height:"150px",width:"calc(100% - 82px)","margin-left":"10px"},attrs:{name:"file",multiple:!1,action:i.uploadUrl,beforeUpload:i.beforeUploadExcel,"file-list":i.fileList,showUploadList:!0,headers:i.headers,data:{upload_dir:"thirdUser",system_type:"village",type:"thirdUserInfo"}},on:{change:i.handleUploadChange}},[e("a-icon",{attrs:{type:i.uploadLoading?"loading":"upload"}}),i._v(" 拖拽或点击上传 Excel 文件 ")],1)],1)]),e("div",{staticStyle:{width:"calc(50% + 82px)","text-align":"center","margin-top":"60px"}},[e("a-button",{attrs:{type:"primary",icon:"upload",size:"large",loading:i.imporLoading},on:{click:i.startImport}},[i._v("开始导入")])],1)]),i.isImporting?e("div",{staticClass:"progress_content",staticStyle:{width:"100%",height:"450px",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column"}},[e("a-progress",{attrs:{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:i.percentVal}}),e("div",{staticClass:"importing",staticStyle:{"margin-top":"15px"}},[i._v(" 正在导入，剩余"+i._s(i.surplusVal)+"行记录待导入，成功"),e("span",{staticStyle:{color:"#68C472"}},[i._v(i._s(i.successVal))]),i._v("行。。。 ")]),e("div",{staticClass:"desc",staticStyle:{"margin-top":"15px",color:"#999999","font-size":"14px"}},[i._v(" 正在等待导入，稍候 ")])],1):i._e()])},n=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("h4",[i._v("上传 "),e("b",[i._v("业主信息")]),i._v(" Excel 文件")])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("p",[i._v(" 注意事项："),e("br"),i._v(" 1、导入成功后的信息，如果要修改信息不要变动关键字和房号。"),e("br"),i._v(" 2、如果有导出错误会立马自动下载对应错误信息excel表。"),e("br")])}],l=(e("ac1f"),e("1276"),e("b0c0"),e("8bbf")),o=e.n(l),s=e("3990"),r=e("ca00"),u={name:"thirdUserUploadPage",data:function(){return{uploadLoading:!1,imporLoading:!1,isImporting:!1,interval:null,pathUrl:"",fileList:[],percentVal:0,successVal:0,surplusVal:0,firstLoading:!0,headers:{},uploadUrl:"",tokenName:"",sysName:"",orderGroupId:""}},activated:function(){this.clearData()},mounted:function(){this.clearData()},methods:{clearData:function(){if(!this.firstLoading)return!1;var i=Object(r["j"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",this.firstLoading=!1,this.uploadLoading=!1,this.imporLoading=!1,this.isImporting=!1,this.interval=null,this.pathUrl="",this.fileList=[],this.percentVal=0,this.successVal=0,this.surplusVal=0,this.headers={authorization:"authorization-text",ticket:o.a.ls.get(this.tokenName)},this.uploadUrl="/v20/public/index.php/"+s["a"].thirdVillageUploadFile},beforeUploadExcel:function(i){var t=i.name.split(".").pop();if("xlsx"!=t&&"xls"!=t)return this.uploadLoading=!1,this.$message.warn("上传文件格式非Excel"),!1},handleUploadChange:function(i){this.uploadLoading=!0,"removed"===i.file.status?(this.uploadLoading=!1,this.fileList=[],this.pathUrl="",this.$message.warn("删除上传文件 ".concat(i.file.name," 成功。"))):i.file&&(this.fileList=[i.file]),"done"===i.file.status?(this.pathUrl=i.file.response.data,this.uploadLoading=!1,1e3==i.file.response.status?this.$message.success("".concat(i.file.name," 文件上传成功。")):this.$message.error(i.file.response.msg)):"error"===i.file.status&&(this.uploadLoading=!1,this.$message.error("".concat(i.file.name," 文件上传失败。")))},startImport:function(){if(!this.pathUrl)return this.$message.error("请先上传文件。"),!1;this.imporLoading=!0;var i=this;this.request(s["a"].thirdStartUserImport,{inputFileName:this.pathUrl}).then((function(t){console.log("1111111---",t),i.orderGroupId=t.orderGroupId,i.imporLoading=!1,i.$message.success("提交成功，准备导入，调整画面为进度条画面！"),i.isImporting=!0,i.successVal=0,i.surplusVal=0,i.percentVal=0,i.interval=setInterval((function(){i.refreshProgress()}),2e3)})).catch((function(t){i.imporLoading=!1}))},refreshProgress:function(){var i=this;this.request(s["a"].thirdRefreshProcess,{type:"thirdUserInfo",orderGroupId:this.orderGroupId}).then((function(t){i.percentVal=t.process,t.success&&(i.successVal=t.success),t.surplus&&(i.surplusVal=t.surplus),t.excelInfo&&window.open(t.excelInfo),t.process>=100&&setTimeout((function(){i.$message.success("导入完成！"),i.imporLoading=!1,i.orderGroupId="",i.clearTimer()}),800)})).catch((function(t){console.log("e",t),i.imporLoading=!1,i.clearTimer()}))},clearTimer:function(){this.isImporting=!1,clearInterval(this.interval),this.interval=null}}},c=u,d=e("2877"),p=Object(d["a"])(c,a,n,!1,null,null,null);t["default"]=p.exports},3990:function(i,t,e){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=a}}]);