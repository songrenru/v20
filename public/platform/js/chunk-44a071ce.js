(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44a071ce","chunk-2d0bacf3"],{3990:function(e,t,i){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=a},6811:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[i("div",{staticClass:"form_con",staticStyle:{display:"flex","flex-wrap":"wrap"}},e._l(e.baseForm,(function(t,a){return i("a-form-model-item",{key:a,staticStyle:{width:"33.3%"},attrs:{label:t.title}},[1==t.type?i("div",{staticClass:"form_item"},[i("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请输入"+t.title},model:{value:e.baseForm[a].value,callback:function(t){e.$set(e.baseForm[a],"value",t)},expression:"baseForm[index].value"}})],1):e._e(),2==t.type?i("div",{staticClass:"form_item"},[i("a-select",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title},model:{value:e.baseForm[a].value,callback:function(t){e.$set(e.baseForm[a],"value",t)},expression:"baseForm[index].value"}},e._l(t.use_field,(function(t,a){return i("a-select-option",{attrs:{value:t}},[e._v(e._s(t))])})),1)],1):e._e(),3==t.type?i("div",{staticClass:"form_item"},[i("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请输入"+t.title},model:{value:e.baseForm[a].value,callback:function(t){e.$set(e.baseForm[a],"value",t)},expression:"baseForm[index].value"}})],1):e._e(),4==t.type?i("div",{staticClass:"form_item"},[e.baseForm[a].value?i("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,"default-value":e.moment(e.baseForm[a].value,"YYYY-MM-DD"),placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}}):i("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}})],1):e._e()])})),1),e.baseForm?i("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[i("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1):e._e()],1)},l=[],n=(i("d81d"),i("c1df")),o=i.n(n),r=(i("8bbf"),i("ed09")),u=(i("3990"),Object(r["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var i=Object(r["h"])({span:6}),a=Object(r["h"])({span:14}),l=Object(r["h"])([]);l.value=e.formParams.field_list;var n=Object(r["h"])({}),u=Object(r["h"])();Object(r["i"])((function(){return e.formParams}),(function(e){l.value=e.field_list}));var m=function(){var e=!1,t=[];l.value.map((function(i){i.is_must&&!i.value&&(e=!0),t.push({key:i.key,value:i.value})})),console.log("resultParams===>",t),e&&console.log("val===>")},s=function(){u.value.resetFields()};return{labelCol:i,wrapperCol:a,baseForm:l,rules:n,onSubmit:m,resetForm:s,moment:o.a}}})),m=u,s=(i("e376"),i("0c7c")),d=Object(s["a"])(m,a,l,!1,null,"425560b8",null);t["default"]=d.exports},e376:function(e,t,i){"use strict";i("fb7f")},fb7f:function(e,t,i){}}]);