(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef3482aa","chunk-2d0bacf3","chunk-2d0bacf3"],{3990:function(e,t,i){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=a},"437c":function(e,t,i){},"8e1b":function(e,t,i){"use strict";i("437c")},c844:function(e,t,i){"use strict";i.r(t);i("b0c0");var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(i,a){return t("div",{key:a,staticClass:"label_con"},[t("div",{staticClass:"title"},[e._v(e._s(i.label)+"：")]),1==i.type?t("div",{staticClass:"choose_con",staticStyle:{display:"flex","align-items":"center"}},[t("a-radio-group",{model:{value:e.ownerForm[a].data.value,callback:function(t){e.$set(e.ownerForm[a].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(i.value,(function(i,a){return t("a-radio",{attrs:{value:i.label}},[e._v(e._s(i.value))])})),1),1==e.ownerForm[a].data.value?t("a-select",{staticStyle:{width:"200px","margin-left":"5px"},attrs:{placeholder:"请选择党支部"},on:{change:e.selectChange},model:{value:e.partyId,callback:function(t){e.partyId=t},expression:"partyId"}},e._l(i.data.street_party_branch,(function(i,a){return t("a-select-option",{attrs:{value:i.id}},[e._v(e._s(i.name))])})),1):e._e()],1):e._e(),0==i.type?t("div",{staticClass:"choose_con"},[t("a-checkbox-group",{model:{value:e.ownerForm[a].data.value,callback:function(t){e.$set(e.ownerForm[a].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(i.value,(function(i,a){return t("a-checkbox",{attrs:{value:i.label+""}},[e._v(e._s(i.value))])})),1)],1):e._e()])})),e.ownerForm.length>0?t("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]):e._e()],2)},n=[],l=(i("a9e3"),i("d81d"),i("8bbf")),o=i.n(l),u=(i("3990"),Object(l["defineComponent"])({props:{formParams:{type:Object,default:function(){return{}}},pigcms_id:{type:[String,Number],default:""}},setup:function(e,t){var i=Object(l["ref"])({}),a=Object(l["ref"])(""),n=Object(l["ref"])(!1);i.value=e.formParams.mark_list;var u=function(e){console.log("value===>",e),console.log("partyId===>",a.value)},r=function(){if(n.value)o.a.prototype.$message.warn("正在提交中，请稍等...");else{n.value=!0;var t={};i.value.map((function(e,i){t[e.field]=e.data.value})),1==t.user_political_affiliation?t["user_party_id"]=a.value:t["user_party_id"]=0,t["pigcms_id"]=e.pigcms_id,o.a.prototype.request("/community/village_api.Building/subStreetPartyBindUser",t).then((function(e){n.value=!1,o.a.prototype.$message.success("保存成功！")})).catch((function(e){n.value=!1}))}};return{ownerForm:i,onSubmit:r,partyId:a,selectChange:u}}})),r=u,m=(i("8e1b"),i("2877")),c=Object(m["a"])(r,a,n,!1,null,"196ef22d",null);t["default"]=c.exports}}]);