(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54cac666","chunk-44a071ce","chunk-89173d72","chunk-46b2505f","chunk-772afb86","chunk-2d0bacf3"],{"2f05":function(e,t,a){"use strict";a("b1de")},3990:function(e,t,a){"use strict";var l={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=l},"39e3":function(e,t,a){},6811:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"form_con",staticStyle:{display:"flex","flex-wrap":"wrap"}},e._l(e.baseForm,(function(t,l){return a("a-form-model-item",{key:l,staticStyle:{width:"33.3%"},attrs:{label:t.title}},[1==t.type?a("div",{staticClass:"form_item"},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请输入"+t.title},model:{value:e.baseForm[l].value,callback:function(t){e.$set(e.baseForm[l],"value",t)},expression:"baseForm[index].value"}})],1):e._e(),2==t.type?a("div",{staticClass:"form_item"},[a("a-select",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title},model:{value:e.baseForm[l].value,callback:function(t){e.$set(e.baseForm[l],"value",t)},expression:"baseForm[index].value"}},e._l(t.use_field,(function(t,l){return a("a-select-option",{attrs:{value:t}},[e._v(e._s(t))])})),1)],1):e._e(),3==t.type?a("div",{staticClass:"form_item"},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请输入"+t.title},model:{value:e.baseForm[l].value,callback:function(t){e.$set(e.baseForm[l],"value",t)},expression:"baseForm[index].value"}})],1):e._e(),4==t.type?a("div",{staticClass:"form_item"},[e.baseForm[l].value?a("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,"default-value":e.moment(e.baseForm[l].value,"YYYY-MM-DD"),placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}}):a("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}})],1):e._e()])})),1),e.baseForm?a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1):e._e()],1)},n=[],i=(a("d81d"),a("c1df")),o=a.n(i),r=(a("8bbf"),a("ed09")),u=(a("3990"),Object(r["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(r["h"])({span:6}),l=Object(r["h"])({span:14}),n=Object(r["h"])([]);n.value=e.formParams.field_list;var i=Object(r["h"])({}),u=Object(r["h"])();Object(r["i"])((function(){return e.formParams}),(function(e){n.value=e.field_list}));var s=function(){var e=!1,t=[];n.value.map((function(a){a.is_must&&!a.value&&(e=!0),t.push({key:a.key,value:a.value})})),console.log("resultParams===>",t),e&&console.log("val===>")},c=function(){u.value.resetFields()};return{labelCol:a,wrapperCol:l,baseForm:n,rules:i,onSubmit:s,resetForm:c,moment:o.a}}})),s=u,c=(a("e376"),a("0c7c")),m=Object(c["a"])(s,l,n,!1,null,"425560b8",null);t["default"]=m.exports},9556:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_label"},[e._l(e.labelForm.list,(function(t,l){return a("div",{key:l,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.name)+"：")]),a("div",{staticClass:"radio_con"},[a("a-radio-group",{on:{change:e.radioChange},model:{value:e.valueGroup[l],callback:function(t){e.$set(e.valueGroup,l,t)},expression:"valueGroup[index]"}},e._l(t.children,(function(l,n){return a("a-radio",{key:t.value,attrs:{value:l.id}},[e._v(e._s(l.name))])})),1)],1)])})),a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},n=[],i=(a("8bbf"),a("ed09")),o=(a("3990"),Object(i["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(i["h"])({}),l=Object(i["h"])([]);a.value=e.formParams.label_list,l.value=e.formParams.label_list.value;var n=function(e){console.log("value===>",e)},o=function(){console.log("labelForm===>",a.value.value)};return{labelForm:a,onSubmit:o,valueGroup:l,radioChange:n}}})),r=o,u=(a("dbd3"),a("0c7c")),s=Object(u["a"])(r,l,n,!1,null,"dbb68476",null);t["default"]=s.exports},"9e6e":function(e,t,a){"use strict";a("ff68")},b1de:function(e,t,a){},b6cf:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(t,l){return a("div",{key:l,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.label)+"：")]),1==t.type?a("div",{staticClass:"choose_con",staticStyle:{display:"flex","align-items":"center"}},[a("a-radio-group",{model:{value:e.ownerForm[l].data.value,callback:function(t){e.$set(e.ownerForm[l].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,l){return a("a-radio",{attrs:{value:t.label}},[e._v(e._s(t.value))])})),1),1==e.ownerForm[l].data.value?a("a-select",{staticStyle:{width:"200px","margin-left":"5px"},attrs:{placeholder:"请选择党支部"},on:{change:e.selectChange},model:{value:e.partyId,callback:function(t){e.partyId=t},expression:"partyId"}},e._l(t.data.street_party_branch,(function(t,l){return a("a-select-option",{attrs:{value:t.id}},[e._v(e._s(t.name))])})),1):e._e()],1):e._e(),0==t.type?a("div",{staticClass:"choose_con"},[a("a-checkbox-group",{model:{value:e.ownerForm[l].data.value,callback:function(t){e.$set(e.ownerForm[l].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,l){return a("a-checkbox",{attrs:{value:t.label+""}},[e._v(e._s(t.value))])})),1)],1):e._e()])})),a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},n=[],i=(a("d81d"),a("8bbf"),a("ed09")),o=(a("3990"),Object(i["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(i["h"])({}),l=Object(i["h"])("");a.value=e.formParams.mark_list;var n=function(e){console.log("value===>",e),console.log("partyId===>",l.value)},o=function(){console.log("ownerForm===>",a.value);var e=[];a.value.map((function(t,a){1==t.type&&1==t.data.value?e.push({partyId:l.value,key:t.field,value:t.data.value}):e.push({key:t.field,value:t.data.value})})),console.log("resultParams===>",e)};return{ownerForm:a,onSubmit:o,partyId:l,selectChange:n}}})),r=o,u=(a("2f05"),a("0c7c")),s=Object(u["a"])(r,l,n,!1,null,"701394f0",null);t["default"]=s.exports},cc19:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"添加人员",visible:e.visible,width:950,"confirm-loading":e.confirmLoading,footer:null},on:{cancel:e.handleCancel}},[a("a-tabs",{attrs:{"default-active-key":e.currentIndex},on:{change:e.tabChange}},e._l(e.tabList,(function(t,l){return a("a-tab-pane",{key:t.key},[a("span",{attrs:{slot:"tab"},slot:"tab"},[e._v(e._s(t.label))]),e.currentIndex==t.key?a(t.component,{tag:"component",attrs:{formParams:e.formParams}}):e._e()],1)})),1)],1)},n=[],i=(a("a9e3"),a("8bbf")),o=a.n(i),r=(a("c1df"),a("ed09")),u=(a("3990"),a("6811")),s=a("b6cf"),c=a("d79e"),m=a("9556"),d=Object(r["c"])({props:{visible:{type:Boolean,default:!1},personId:{type:[String,Number],default:0},roomId:{type:[String,Number],default:""}},components:{baseMsg:u["default"],msgMarker:s["default"],ownerMsg:c["default"],userLabel:m["default"]},setup:function(e,t){var a=Object(r["h"])(!1),l=Object(r["h"])({}),n=(Object(r["h"])(),Object(r["h"])(1)),i=function(e){n.value=e},u=function(){t.emit("close")},s=Object(r["h"])([{key:1,value:"baseMsg",label:"基本信息",component:"baseMsg"},{key:2,value:"ownerMsg",label:"业主资料",component:"ownerMsg"},{key:3,value:"msgMarker",label:"信息标注",component:"msgMarker"},{key:4,value:"userLabel",label:"用户标签",component:"userLabel"}]),c=Object(r["h"])({}),m=Object(r["h"])(!1),d=function(){console.log("context.roomId===>",e.roomId),o.a.prototype.request("/community/village_api.Building/getRoomBindUserData",{vacancy_id:e.roomId}).then((function(e){l.value=e}))};return Object(r["i"])((function(){return e.visible}),(function(e){e&&d()}),{deep:!0}),{confirmLoading:a,personForm:l,personStatus:m,getPersonInfo:d,tabList:s,tabChange:i,handleCancel:u,currentIndex:n,formParams:c}}}),p=d,v=a("0c7c"),f=Object(v["a"])(p,l,n,!1,null,null,null);t["default"]=f.exports},d79e:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(t,l){return a("div",{key:l,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.label)+"：")]),a("div",{staticClass:"checkbox_con"},[a("a-checkbox-group",e._l(t.value,(function(t,l){return a("a-checkbox",[e._v(e._s(t.value))])})),1)],1)])})),a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},n=[],i=(a("8bbf"),a("ed09")),o=(a("3990"),Object(i["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(i["h"])({});a.value=e.formParams.mark_list;var l=function(){console.log("ownerForm===>",a.value)};return{ownerForm:a,onSubmit:l}}})),r=o,u=(a("9e6e"),a("0c7c")),s=Object(u["a"])(r,l,n,!1,null,"69d727fe",null);t["default"]=s.exports},dbd3:function(e,t,a){"use strict";a("39e3")},e376:function(e,t,a){"use strict";a("fb7f")},fb7f:function(e,t,a){},ff68:function(e,t,a){}}]);