(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ef65f1","chunk-2d0bacf3"],{3990:function(e,t,a){"use strict";var i={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=i},"45dc":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basice_set"},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.baseSetForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"小区名称",prop:"village_name"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.baseSetForm.village_name,callback:function(t){e.$set(e.baseSetForm,"village_name",t)},expression:"baseSetForm.village_name"}})],1),a("a-form-model-item",{attrs:{label:"小区logo",prop:"village_logo",extra:"建议上传200*200的图片"}},[a("a-upload",{staticClass:"avatar-uploader",attrs:{name:"avatar","list-type":"picture-card","show-upload-list":!1,action:e.uploadUrl,"before-upload":e.beforeUpload},on:{change:e.handleUploadChange}},[e.imageUrl?a("img",{staticStyle:{width:"6.25rem",height:"6.25rem"},attrs:{src:e.imageUrl,alt:"avatar"}}):a("div",[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" Upload ")])],1)])],1),a("a-form-model-item",{attrs:{label:"所在省市区",prop:"province_area"}}),a("a-form-model-item",{attrs:{label:"小区地址",extra:"地址不能带有上面所在地选择的省/市/区/街道/社区信息。",prop:"village_address"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.baseSetForm.village_address,callback:function(t){e.$set(e.baseSetForm,"village_address",t)},expression:"baseSetForm.village_address"}})],1),a("a-form-model-item",{attrs:{label:"小区经纬度",prop:"lang_lat"}},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:e.baseSetForm.long_lat,callback:function(t){e.$set(e.baseSetForm,"long_lat",t)},expression:"baseSetForm.long_lat"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.openMap()}}},[e._v("点击获取经纬度")])],1),a("a-form-model-item",{attrs:{label:"小区登录地址",prop:"house_village_login"}},[a("a-input",{staticClass:"input_style_240",staticStyle:{width:"200px"},model:{value:e.baseSetForm.house_village_login,callback:function(t){e.$set(e.baseSetForm,"house_village_login",t)},expression:"baseSetForm.house_village_login"}}),a("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.baseSetForm.house_village_login,expression:"baseSetForm.house_village_login",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.firstCopySuccess,expression:"firstCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.firstCopyError,expression:"firstCopyError",arg:"error"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[e._v("点击复制")])],1),a("a-form-model-item",{attrs:{label:"物业联系方式",prop:"property_phone",extra:"电话号码以空格分开"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.baseSetForm.property_phone,callback:function(t){e.$set(e.baseSetForm,"property_phone",t)},expression:"baseSetForm.property_phone"}})],1),a("a-form-model-item",{attrs:{label:"物业联系地址",prop:"property_address"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.baseSetForm.property_address,callback:function(t){e.$set(e.baseSetForm,"property_address",t)},expression:"baseSetForm.property_address"}})],1),a("a-form-model-item",{attrs:{label:"该小区楼栋是否超过100栋",extra:"选择是，楼栋号即可支持三位， 不支持编辑",prop:"remark"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.baseSetForm.village_single_support_digit,callback:function(t){e.$set(e.baseSetForm,"village_single_support_digit",t)},expression:"baseSetForm.village_single_support_digit"}},[a("a-radio",{attrs:{value:3}},[e._v("是")]),a("a-radio",{attrs:{value:2}},[e._v("否")])],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),a("a-button",{staticStyle:{"margin-left":"10px"},on:{click:e.resetForm}},[e._v("重置")])],1)],1),e.mapVisible?a("a-modal",{attrs:{title:"百度地图拾取经纬度",visible:e.mapVisible,width:800},on:{ok:e.handleMapOk,cancel:e.handleMapCancel}},[a("a-input",{staticClass:"input_style",staticStyle:{width:"200px"},attrs:{type:"text",id:"suggestId",name:"address_detail",placeholder:"请输入城市名/地区名"},model:{value:e.address_detail,callback:function(t){e.address_detail=t},expression:"address_detail"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchMap}},[e._v("搜索")]),a("div",{staticStyle:{width:"100%",height:"500px","margin-top":"10px"},attrs:{id:"allmap"}})],1):e._e()],1)},l=[],n=a("8bbf"),o=a.n(n),r=a("3990"),s=a("ed09"),u=a("c1df"),p=a.n(u),m=Object(s["c"])({name:"basiceSet",setup:function(e,t){var a=Object(s["h"])({span:4}),i=Object(s["h"])({span:14}),l=function(){o.a.prototype.$message.success("复制成功！")},n=function(){o.a.prototype.$message.error("复制失败！")},u=Object(s["h"])({}),m=Object(s["h"])(null),c=Object(s["g"])({}),d=function(){o.a.prototype.$confirm({title:"提示",content:"确定要保存此表单内容吗？",onOk:function(){m.value.validate((function(e){e&&y()}))},onCancel:function(){}})},g=function(e){console.log(e)},v=function(){u.value={},m.value.resetFields()},y=function(){o.a.prototype.request("/community/village_api.VillageConfig/villageInfoUpdate",u.value).then((function(e){o.a.prototype.$message.success("保存成功！")}))},_=function(){o.a.prototype.request(r["a"].baseConfig,{}).then((function(e){u.value=e}))},f=Object(s["h"])("/v20/public/index.php/common/common.UploadFile/uploadPictures"),b=Object(s["h"])(""),h=Object(s["h"])(!1),R=function(e){if("uploading"!==e.file.status)return"error"===e.file.status?(o.a.prototype.$message.error("上传失败!"),void(h.value=!1)):void("done"===e.file.status&&U(e.file.originFileObj,(function(e){e.value=e,u.value.village_logo=e,h.value=!1})));h.value=!0},U=function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)},S=function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||o.a.prototype.$message.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||o.a.prototype.$message.error("Image must smaller than 2MB!"),t&&a},F=Object(s["h"])(!1),x=Object(s["h"])(""),I=Object(s["h"])(""),B=Object(s["h"])("北京"),w=function(){u.value.long_lat=I.value+","+x.value,F.value=!1},C=function(){F.value=!1},k=function(){F.value=!0,L()},O=function(){B.value&&L()},L=function(){o.a.prototype.$nextTick((function(){var e=new BMap.Map("allmap");e.centerAndZoom(B.value,15),e.enableScrollWheelZoom(),e.addEventListener("click",(function(t){e.clearOverlays(),e.addOverlay(new BMap.Marker(t.point)),I.value=t.point.lng,x.value=t.point.lat}))}))};return Object(s["f"])((function(){_()})),{imageUrl:b,loading:h,ruleForm:m,labelCol:a,wrapperCol:i,baseSetForm:u,rules:c,onSubmit:d,resetForm:v,getBaseConfig:_,onChange:g,getBase64:U,moment:p.a,uploadUrl:f,beforeUpload:S,handleUploadChange:R,openMap:k,mapVisible:F,userLat:x,userLng:I,address_detail:B,handleMapOk:w,searchMap:O,initMap:L,handleMapCancel:C,firstCopySuccess:l,firstCopyError:n}}}),c=m,d=(a("ac169"),a("2877")),g=Object(d["a"])(c,i,l,!1,null,"4b899540",null);t["default"]=g.exports},ac169:function(e,t,a){"use strict";a("fbd0")},fbd0:function(e,t,a){}}]);