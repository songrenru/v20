(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b94f2b6","chunk-2d0bacf3"],{3990:function(e,t,l){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=a},"44ef":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-drawer",{attrs:{title:e.title,visible:e.visible,width:1300,"body-style":{paddingBottom:"80px"}},on:{close:function(t){return e.resetForm(!1)}}},[l("a-form-model",{ref:"ruleForm",attrs:{model:e.buildForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[l("div",{staticStyle:{display:"flex"}},[l("a-card",{staticStyle:{width:"480px"},attrs:{title:"基本信息"}},[l("a-form-model-item",{attrs:{label:"单元名称",prop:"floor_name"}},[l("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_name,callback:function(t){e.$set(e.buildForm,"floor_name",t)},expression:"buildForm.floor_name"}})],1),l("a-form-model-item",{attrs:{label:"单元编号",prop:"floor_number"}},[l("a-input-number",{staticClass:"input_style_240",attrs:{max:99,min:1,extra:"必填项（仅限1-99不重复的数字"},model:{value:e.buildForm.floor_number,callback:function(t){e.$set(e.buildForm,"floor_number",t)},expression:"buildForm.floor_number"}})],1),l("a-form-model-item",{attrs:{label:"单元地址",prop:"long_lat"}},[l("a-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:e.buildForm.long_lat,callback:function(t){e.$set(e.buildForm,"long_lat",t)},expression:"buildForm.long_lat"}}),l("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.openMap()}}},[e._v("点击获取经纬度")])],1),l("a-form-model-item",{attrs:{label:"单元管家名称",prop:"floor_keeper_name"}},[l("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_keeper_name,callback:function(t){e.$set(e.buildForm,"floor_keeper_name",t)},expression:"buildForm.floor_keeper_name"}})],1),l("a-form-model-item",{attrs:{label:"联系方式",prop:"floor_keeper_phone"}},[l("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_keeper_phone,callback:function(t){e.$set(e.buildForm,"floor_keeper_phone",t)},expression:"buildForm.floor_keeper_phone"}})],1),l("a-form-model-item",{attrs:{label:"管家头像",prop:"floor_keeper_head"}},[l("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"floor_keeper_head")}}},[l("a-button",{attrs:{loading:e.temimgLoading}},[e._v("上传头像")]),e.imageUrl?l("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.previewImage()}}},[e._v("查看头像图片")]):e._e()],1)],1),l("a-form-model-item",{attrs:{label:"排序",prop:"sort"}},[l("a-input-number",{staticClass:"input_style_240",attrs:{min:0},model:{value:e.buildForm.sort,callback:function(t){e.$set(e.buildForm,"sort",t)},expression:"buildForm.sort"}})],1),l("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[l("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭","default-checked":""},model:{value:e.statusBool,callback:function(t){e.statusBool=t},expression:"statusBool"}})],1)],1),l("a-card",{staticStyle:{width:"320px"},attrs:{title:"相关费用"}},[l("a-form-model-item",{attrs:{label:"物业费",prop:"property_fee"}},[l("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.property_fee,callback:function(t){e.$set(e.buildForm,"property_fee",t)},expression:"buildForm.property_fee"}})],1),l("a-form-model-item",{attrs:{label:"水费",prop:"water_fee"}},[l("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.water_fee,callback:function(t){e.$set(e.buildForm,"water_fee",t)},expression:"buildForm.water_fee"}})],1),l("a-form-model-item",{attrs:{label:"电费",prop:"electric_fee"}},[l("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.electric_fee,callback:function(t){e.$set(e.buildForm,"electric_fee",t)},expression:"buildForm.electric_fee"}})],1),l("a-form-model-item",{attrs:{label:"燃气费",prop:"gas_fee"}},[l("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.gas_fee,callback:function(t){e.$set(e.buildForm,"gas_fee",t)},expression:"buildForm.gas_fee"}})],1),l("a-form-model-item",{attrs:{label:"停车费",prop:"parking_fee"}},[l("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.parking_fee,callback:function(t){e.$set(e.buildForm,"parking_fee",t)},expression:"buildForm.parking_fee"}})],1)],1),l("a-card",{staticStyle:{width:"480px"},attrs:{title:"单元资料"}},[l("a-form-model-item",{attrs:{label:"单元面积(m²)",prop:"floor_area"}},[l("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_area,callback:function(t){e.$set(e.buildForm,"floor_area",t)},expression:"buildForm.floor_area"}})],1),l("a-form-model-item",{attrs:{label:"门户数量",prop:"house_num"}},[l("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.house_num,callback:function(t){e.$set(e.buildForm,"house_num",t)},expression:"buildForm.house_num"}})],1),l("a-form-model-item",{attrs:{label:"地面建筑层数",prop:"floor_upper_layer_num"}},[l("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.floor_upper_layer_num,callback:function(t){e.$set(e.buildForm,"floor_upper_layer_num",t)},expression:"buildForm.floor_upper_layer_num"}})],1),l("a-form-model-item",{attrs:{label:"地下建筑层数",prop:"floor_lower_layer_num"}},[l("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.floor_lower_layer_num,callback:function(t){e.$set(e.buildForm,"floor_lower_layer_num",t)},expression:"buildForm.floor_lower_layer_num"}})],1),l("a-form-model-item",{attrs:{label:"起始住人楼层",prop:"start_layer_num"}},[l("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.start_layer_num,callback:function(t){e.$set(e.buildForm,"start_layer_num",t)},expression:"buildForm.start_layer_num"}})],1),l("a-form-model-item",{attrs:{label:"最高住人楼层",prop:"end_layer_num"}},[l("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.end_layer_num,callback:function(t){e.$set(e.buildForm,"end_layer_num",t)},expression:"buildForm.end_layer_num"}})],1)],1)],1)]),l("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"center",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[l("a-button",{staticStyle:{"margin-right":"30px"},on:{click:function(t){return e.resetForm(!1)}}},[e._v(" 关闭 ")]),l("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1),l("a-modal",{attrs:{title:"预览图片",width:650,visible:e.previewVisible,footer:null},on:{cancel:e.handlePreviewCancel}},[l("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[l("img",{staticStyle:{width:"550px"},attrs:{preview:"2",src:e.imageUrl}})])]),e.mapVisible?l("a-modal",{attrs:{title:"百度地图拾取经纬度",visible:e.mapVisible,width:800},on:{ok:e.handleMapOk,cancel:e.handleMapCancel}},[l("a-input",{staticClass:"input_style",staticStyle:{width:"200px"},attrs:{type:"text",id:"suggestId",name:"address_detail",placeholder:"请输入城市名/地区名"},model:{value:e.address_detail,callback:function(t){e.address_detail=t},expression:"address_detail"}}),l("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchMap}},[e._v("搜索")]),l("div",{staticStyle:{width:"100%",height:"500px","margin-top":"10px"},attrs:{id:"allmap"}})],1):e._e()],1)},i=[],o=(l("a9e3"),l("4e82"),l("8bbf")),n=l.n(o),r=l("c1df"),u=l.n(r),s=l("ed09"),m=l("3990"),p=Object(s["c"])({props:{visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0}},setup:function(e,t){Object(s["i"])((function(){return e.visible}),(function(t){t&&(e.floor_id>0?p.value="编辑单元":p.value="添加单元",j(e.single_id,e.floor_id))}),{deep:!0});var l=function(e){var t=e.getFullYear(),l=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),i=t+"-"+l+"-"+a;return i},a=Object(s["h"])(!1),i=Object(s["h"])(!1),o=Object(s["h"])(!1),r=Object(s["h"])({}),p=Object(s["h"])("编辑单元"),d=Object(s["h"])(!1),c=Object(s["g"])({authorization:"authorization-text"}),_=Object(s["h"])("/v20/public/index.php/common/common.UploadFile/uploadImg"),f=Object(s["g"])({upload_dir:"village"}),b=Object(s["h"])({floor_name:[{required:!0,message:"请输入单元名称",trigger:"blur"}],floor_number:[{required:!0,message:"请输入单元编号",trigger:"blur"}],long_lat:[{required:!0,message:"请选择单元地址",trigger:"blur"}],floor_area:[{required:!0,message:"请输入单元面积",trigger:"blur"}],house_num:[{required:!0,message:"请输入所含门户数",trigger:"blur"}]}),g=Object(s["h"])(),v=Object(s["h"])({span:6}),y=Object(s["h"])({span:16}),h=function(){g.value.validate((function(t){t&&(r.value.single_id=e.single_id,r.value.status=a.value?1:0,console.log("buildForm.value===>",r.value),o.value=!0,R())}))},F=function(e){t.emit("closeDrawer",e),r.value={},g.value.resetFields()},R=function(){n.a.prototype.request(m["a"].saveUnitRentalFloorInfo,r.value).then((function(t){o.value=!1,e.floor_id>0?n.a.prototype.$message.success("编辑成功！"):n.a.prototype.$message.success("添加成功！"),F(!0)})).catch((function(e){o.value=!1}))},w=Object(s["h"])(!1),x=Object(s["h"])(""),U=Object(s["h"])(""),k=Object(s["h"])(""),B=function(){r.value.long_lat=U.value+","+x.value,r.value.long=U.value,r.value.lat=x.value,w.value=!1,i.value=!1},I=function(){w.value=!1,i.value=!1},C=function(){w.value=!0,L()},O=function(){k.value&&(i.value=!0,L())},L=function(){Object(s["e"])((function(){var e,t=new BMap.Map("allmap");if(r.value.lat&&r.value.long&&!i.value){t.clearOverlays(),e=new BMap.Point(r.value.long,r.value.lat);new BMap.Size(0,15);t.addOverlay(new BMap.Marker(e))}else e=k.value;t.centerAndZoom(e,15),t.enableScrollWheelZoom(),t.addEventListener("click",(function(e){t.clearOverlays(),t.addOverlay(new BMap.Marker(e.point)),U.value=e.point.lng,x.value=e.point.lat,console.log(e.point),(new BMap.Geocoder).getLocation(e.point,(function(e){k.value=e.address}))}))}))},S=Object(s["h"])(""),j=function(e,t){n.a.prototype.request(m["a"].unitRentalFloorInfo,{single_id:e,floor_id:t}).then((function(e){r.value=e,r.value.sort=e.sort||0,r.value.long_lat=e.long+","+e.lat,S.value=e.floor_keeper_head;var t=new BMap.Point(Number(e.long),Number(e.lat));(new BMap.Geocoder).getLocation(t,(function(e){k.value=e.address})),a.value=1==e.status}))},M=function(e,t){if("uploading"!==e.file.status)return"error"===e.file.status?(n.a.prototype.$message.error("上传失败!"),void(d.value=!0)):void("done"===e.file.status&&(S.value=e.file.response.data.full_url,r.value.floor_keeper_head=e.file.response.data.image,d.value=!1));d.value=!0},$=function(e,t){var l="image/jpeg"===e.type||"image/png"===e.type;l||n.a.prototype.$message.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||n.a.prototype.$message.error("Image must smaller than 2MB!"),l&&a},P=Object(s["h"])(!1),D=function(){P.value=!1},V=function(e){P.value=!0};return{confirmLoading:o,onSubmit:h,resetForm:F,buildForm:r,labelCol:v,wrapperCol:y,rules:b,saveForm:R,openMap:C,mapVisible:w,userLat:x,userLng:U,address_detail:k,handleMapOk:B,searchMap:O,initMap:L,handleMapCancel:I,ruleForm:g,searchArea:i,formDate:l,moment:u.a,statusBool:a,title:p,getFloorInfo:j,uploadUrl:_,uploadParams:f,headers:c,beforeUpload:$,temimgLoading:d,handleUploadChange:M,imageUrl:S,previewVisible:P,handlePreviewCancel:D,previewImage:V}}}),d=p,c=(l("aed5"),l("0c7c")),_=Object(c["a"])(d,a,i,!1,null,"56654b7d",null);t["default"]=_.exports},aed5:function(e,t,l){"use strict";l("d940")},d940:function(e,t,l){}}]);