(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6e93e5a","chunk-2d0bacf3"],{"2f05":function(e,t,i){"use strict";i("76a2")},3990:function(e,t,i){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=a},"76a2":function(e,t,i){},b6cf:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(t,a){return i("div",{key:a,staticClass:"label_con"},[i("div",{staticClass:"title"},[e._v(e._s(t.label)+"：")]),1==t.type?i("div",{staticClass:"choose_con",staticStyle:{display:"flex","align-items":"center"}},[i("a-radio-group",{model:{value:e.ownerForm[a].data.value,callback:function(t){e.$set(e.ownerForm[a].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,a){return i("a-radio",{attrs:{value:t.label}},[e._v(e._s(t.value))])})),1),1==e.ownerForm[a].data.value?i("a-select",{staticStyle:{width:"200px","margin-left":"5px"},attrs:{placeholder:"请选择党支部"},on:{change:e.selectChange},model:{value:e.partyId,callback:function(t){e.partyId=t},expression:"partyId"}},e._l(t.data.street_party_branch,(function(t,a){return i("a-select-option",{attrs:{value:t.id}},[e._v(e._s(t.name))])})),1):e._e()],1):e._e(),0==t.type?i("div",{staticClass:"choose_con"},[i("a-checkbox-group",{model:{value:e.ownerForm[a].data.value,callback:function(t){e.$set(e.ownerForm[a].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,a){return i("a-checkbox",{attrs:{value:t.label+""}},[e._v(e._s(t.value))])})),1)],1):e._e()])})),i("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},n=[],l=(i("d81d"),i("8bbf"),i("ed09")),o=(i("3990"),Object(l["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var i=Object(l["h"])({}),a=Object(l["h"])("");i.value=e.formParams.mark_list;var n=function(e){console.log("value===>",e),console.log("partyId===>",a.value)},o=function(){console.log("ownerForm===>",i.value);var e=[];i.value.map((function(t,i){1==t.type&&1==t.data.value?e.push({partyId:a.value,key:t.field,value:t.data.value}):e.push({key:t.field,value:t.data.value})})),console.log("resultParams===>",e)};return{ownerForm:i,onSubmit:o,partyId:a,selectChange:n}}})),u=o,r=(i("2f05"),i("2877")),m=Object(r["a"])(u,a,n,!1,null,"701394f0",null);t["default"]=m.exports}}]);