(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1139a74","chunk-748b470d","chunk-2d0bacf3","chunk-2d0bacf3"],{3341:function(e,a,l){},3990:function(e,a,l){"use strict";var t={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index"};a["a"]=t},"4bb5d":function(e,a,l){"use strict";l.d(a,"a",(function(){return u}));var t=l("ea87");function i(e){if(Array.isArray(e))return Object(t["a"])(e)}l("6073"),l("2c5c"),l("c5cb"),l("36fa"),l("02bf"),l("a617"),l("17c8");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=l("9877");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return i(e)||n(e)||Object(o["a"])(e)||r()}},8359:function(e,a,l){"use strict";l("3341")},fef2:function(e,a,l){"use strict";l.r(a);var t=l("4bb5d"),i=(l("6e84"),function(){var e=this,a=e._self._c;e._self._setupProxy;return a("div",{staticClass:"single_view"},[e.showSingle?a("div",{staticClass:"left_single"},e._l(e.singleList,(function(l,t){return a("div",{key:t,staticClass:"single_item",class:t==e.currentSingle?"single_item_active":"",on:{click:function(a){return a.stopPropagation(),e.switchSingle(l,t)}}},[e._v(e._s(l.single_name))])})),0):e._e(),a("div",{staticClass:"right_content",style:{width:e.showSingle?"calc(100% - 160px)":"calc(100% - 10px)",marginLeft:e.showSingle?"0px":"10px"}},[a("div",{staticClass:"top_unit"},e._l(e.unitList,(function(l,t){return a("div",{key:t,staticClass:"unit_item",class:t==e.currentUnit?"unit_item_active":"",on:{click:function(a){return a.stopPropagation(),e.switchUnit(l,t)}}},[a("div",{staticClass:"unit_name"},[e._v(e._s(l.unit_name))]),a("div",{staticClass:"operation"},[a("a-icon",{attrs:{type:"edit"}}),a("a-icon",{staticStyle:{color:"red","margin-left":"10px"},attrs:{type:"delete"}})],1)])})),0),a("div",{staticClass:"layer_content"},[a("div",{staticClass:"left_room_structure"},e._l([].concat(Object(t["a"])(e.roomStructure),Object(t["a"])(e.roomStructure),Object(t["a"])(e.roomStructure)),(function(l,t){return a("div",{key:t,staticClass:"layer_item"},[a("div",{staticClass:"layer_left_content"},[a("div",{staticClass:"layer_name_vertical"},[e._v(" "+e._s(l.layer_name)+" "),a("a-icon",{attrs:{type:"edit",theme:"twoTone"}}),a("a-icon",{staticStyle:{color:"red"},attrs:{type:"delete"}})],1)]),a("div",{staticClass:"layer_left_txt"},[a("div",{staticClass:"layer_name_vertical"},[e._v(" "+e._s(l.layer_name)+" ")])]),e._l(l.room_list,(function(l,t){return a("div",{key:t,staticClass:"room_item"},[a("div",{staticClass:"status_icon"},[e._v("欠费")]),a("div",{staticClass:"room_title"},[e._v("1栋1单元1701室")]),e._l(l.room_props,(function(l,t){return a("div",{key:t,staticClass:"room_props"},[e._v(" "+e._s(l.label)+":"+e._s(l.value)+" ")])}))],2)})),a("div",{staticClass:"layer_right_txt"},[a("div",{staticClass:"layer_name_vertical"},[e._v(" "+e._s(l.layer_name)+" ")])]),a("div",{staticClass:"layer_right_content"},[a("div",{staticClass:"layer_name_vertical"},[e._v(" "+e._s(l.layer_name)+" "),a("a-icon",{attrs:{type:"edit",theme:"twoTone"}}),a("a-icon",{staticStyle:{color:"red"},attrs:{type:"delete"}})],1)])],2)})),0),a("div",{staticClass:"right_layer_nav",style:{width:e.isTrigger?"100px":"0"}},[a("div",{staticClass:"trigger_content"},[a("div",{staticClass:"trigger",on:{click:e.triggerThis}},[e._v(" "+e._s(e.isTrigger?"折叠":"展开")+" ")]),e.isTrigger?a("div",{staticClass:"layer_nav_desc"},[e._v(" 楼层导航 ")]):e._e(),e._l(e.layerList,(function(l,t){return a("div",{key:t,staticClass:"layer_item",class:t==e.currentLayer?"layer_item_active":"",style:{display:e.isTrigger?"flex":"none"},on:{click:function(a){return a.stopPropagation(),e.switchLayer(l,t)}}},[e._v(" "+e._s(l.layer_name)+" ")])}))],2)])])])])}),n=[],o=(l("8bbf"),l("f91f")),r=(l("3990"),Object(o["c"])({setup:function(e,a){var l=Object(o["h"])([{single_id:0,single_name:"第一十二栋"},{single_id:1,single_name:"二栋"},{single_id:2,single_name:"三栋"},{single_id:3,single_name:"四栋"},{single_id:4,single_name:"五栋"},{single_id:5,single_name:"六栋"}]),t=Object(o["h"])([{unit_id:0,unit_name:"一单元"},{unit_id:1,unit_name:"二单元"},{unit_id:2,unit_name:"三单元"},{unit_id:3,unit_name:"四单元"},{unit_id:4,unit_name:"五单元"},{unit_id:5,unit_name:"六单元"}]),i=Object(o["h"])([{layer_id:0,layer_name:"1"},{layer_id:1,layer_name:"2"},{layer_id:2,layer_name:"3"},{layer_id:3,layer_name:"4"},{layer_id:4,layer_name:"5"},{layer_id:5,layer_name:"6"},{layer_id:0,layer_name:"7"},{layer_id:1,layer_name:"8"},{layer_id:2,layer_name:"9"},{layer_id:3,layer_name:"10"},{layer_id:4,layer_name:"11"},{layer_id:5,layer_name:"12"},{layer_id:0,layer_name:"13"},{layer_id:1,layer_name:"14"},{layer_id:2,layer_name:"15"},{layer_id:3,layer_name:"16"},{layer_id:4,layer_name:"17"}]),n=Object(o["h"])([{layer_id:17,layer_name:"第17层",room_list:[{room_id:0,room_status:0,room_props:[{label:"房间名",value:"1701"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"},{label:"欠费状态",value:"欠费10元"}]},{room_id:1,room_status:0,room_props:[{label:"房间名",value:"1702"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:2,room_status:0,room_props:[{label:"房间名",value:"1703"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:3,room_status:0,room_props:[{label:"房间名",value:"1704"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:4,room_status:0,room_props:[{label:"房间名",value:"1705"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:5,room_status:0,room_props:[{label:"房间名",value:"1706"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:6,room_status:0,room_props:[{label:"房间名",value:"1707"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:7,room_status:0,room_props:[{label:"房间名",value:"1708"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]}]},{layer_id:16,layer_name:"16层",room_list:[{room_id:0,room_status:0,room_props:[{label:"房间名",value:"1601"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:1,room_status:0,room_props:[{label:"房间名",value:"1602"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:2,room_status:0,room_props:[{label:"房间名",value:"1603"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:3,room_status:0,room_props:[{label:"房间名",value:"1604"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]}]},{layer_id:15,layer_name:"15层",room_list:[{room_id:0,room_status:0,room_props:[{label:"房间名",value:"1501"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:1,room_status:0,room_props:[{label:"房间名",value:"1502"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:2,room_status:0,room_props:[{label:"房间名",value:"1503"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]},{room_id:3,room_status:0,room_props:[{label:"房间名",value:"1504"},{label:"住户",value:"张三， 李四"},{label:"面积",value:"120㎡"},{label:"售价",value:"200万元"}]}]}]),r=Object(o["h"])(!0),u=Object(o["h"])(!0),s=function(){u.value=!u.value},_=Object(o["h"])(-1),m=Object(o["h"])(-1),c=Object(o["h"])(-1),v=function(e,a){_.value!=a?_.value=a:console.log("重复")},d=function(e,a){m.value!=a?(m.value=a,_.value=-1):console.log("重复")},y=function(e,a){c.value!=a?(m.value=-1,_.value=-1,c.value=a):console.log("重复")};return{singleList:l,unitList:t,roomStructure:n,isTrigger:u,triggerThis:s,showSingle:r,layerList:i,currentLayer:_,currentUnit:m,currentSingle:c,switchLayer:v,switchUnit:d,switchSingle:y}}})),u=r,s=(l("8359"),l("0b56")),_=Object(s["a"])(u,i,n,!1,null,"d68dee18",null);a["default"]=_.exports}}]);