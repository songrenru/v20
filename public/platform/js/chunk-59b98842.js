(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59b98842","chunk-1c935058","chunk-23c2a02c","chunk-ef27b3d4","chunk-370650a0","chunk-2d0b3786","chunk-2d0bacf3"],{"00c4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",staticStyle:{margin:"20px 0"}},[a("a-tabs",{attrs:{"active-key":e.currentKey,"tab-position":"left"},on:{change:e.tabChange}},e._l(e.tabList,(function(t,i){return a("a-tab-pane",{key:t.key},[a("span",{attrs:{slot:"tab"},slot:"tab"},[e._v(e._s(t.label))]),e.currentKey==t.key?a(t.component,{tag:"component",attrs:{pigcms_id:e.pigcms_id,formParams:e.formParams}}):e._e()],1)})),1)],1)},n=[],l=(a("a9e3"),a("8bbf")),o=a.n(l),r=(a("c1df"),a("ed09")),u=(a("3990"),a("8f9f")),c=a("c844"),s=a("ab86"),m=a("aba1"),d=Object(r["c"])({props:{personId:{type:[String,Number],default:0},roomId:{type:[String,Number],default:""},pigcms_id:{type:[String,Number],default:""}},components:{baseMsg:u["default"],msgMarker:c["default"],ownerMsg:s["default"],userLabel:m["default"]},setup:function(e,t){var a=Object(r["h"])(!1),i=(Object(r["h"])(),Object(r["h"])(1)),n=function(e){i.value=e},l=function(){t.emit("close")},u=Object(r["h"])([{key:1,value:"baseMsg",label:"基本信息",component:"baseMsg"},{key:2,value:"msgMarker",label:"信息标注",component:"msgMarker"},{key:3,value:"userLabel",label:"用户标签",component:"userLabel"}]),c=Object(r["h"])({}),s=Object(r["h"])(!1),m=function(){o.a.prototype.request("/community/village_api.Building/getRoomBindUserData",{vacancy_id:e.roomId,pigcms_id:e.pigcms_id}).then((function(e){c.value=e}))};return Object(r["i"])((function(){return e.pigcms_id}),(function(e){e&&m()})),e.pigcms_id&&m(),{confirmLoading:a,personStatus:s,getPersonInfo:m,tabList:u,tabChange:n,handleCancel:l,currentKey:i,formParams:c}}}),p=d,v=a("2877"),f=Object(v["a"])(p,i,n,!1,null,"908f7354",null);t["default"]=f.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a("6b75");function n(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function l(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=a("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return n(e)||l(e)||Object(o["a"])(e)||r()}},3990:function(e,t,a){"use strict";var i={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=i},"50c5":function(e,t,a){},"8f9f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"form_con",staticStyle:{display:"flex","flex-wrap":"wrap"}},e._l(e.baseForm,(function(t,i){return a("a-form-model-item",{key:i,staticStyle:{width:"33.3%"}},[a("div",{attrs:{slot:"label"},slot:"label"},[t.is_must?a("span",{staticStyle:{color:"red"}},[e._v("*")]):e._e(),a("span",[e._v(e._s(t.title)+"：")])]),1==t.type?a("div",{staticClass:"form_item"},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请输入"+t.title},model:{value:e.baseForm[i].value,callback:function(t){e.$set(e.baseForm[i],"value",t)},expression:"baseForm[index].value"}})],1):e._e(),2==t.type?a("div",{staticClass:"form_item"},[a("a-select",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title},model:{value:e.baseForm[i].value,callback:function(t){e.$set(e.baseForm[i],"value",t)},expression:"baseForm[index].value"}},e._l(t.use_field,(function(t,i){return a("a-select-option",{attrs:{value:t}},[e._v(e._s(t))])})),1)],1):e._e(),3==t.type?a("div",{staticClass:"form_item",staticStyle:{display:"flex","align-items":"center"}},[a("a-select",{staticStyle:{width:"99px"},attrs:{placeholder:"选择省",disabled:t.is_disabled},on:{change:function(t){return e.handleSelectChange(t,"province_id",i)}},model:{value:e.province_id,callback:function(t){e.province_id=t},expression:"province_id"}},e._l(e.provinceList,(function(t,i){return a("a-select-option",{attrs:{value:t.id+""}},[e._v(e._s(t.name))])})),1),a("a-select",{staticStyle:{width:"99px","margin-left":"2px"},attrs:{placeholder:"选择市",disabled:t.is_disabled},on:{change:function(t){return e.handleSelectChange(t,"city_id",i)}},model:{value:e.city_id,callback:function(t){e.city_id=t},expression:"city_id"}},e._l(e.cityList,(function(t,i){return a("a-select-option",{attrs:{value:t.id+""}},[e._v(e._s(t.name))])})),1)],1):e._e(),4==t.type?a("div",{staticClass:"form_item"},[e.baseForm[i].value?a("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,"default-value":e.moment(e.baseForm[i].value,"YYYY-MM-DD"),placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}}):a("a-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:t.is_disabled,placeholder:"请选择"+t.title,format:"YYYY-MM-DD"}})],1):e._e()])})),1),e.baseForm?a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:2}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1):e._e()],1)},n=[],l=(a("a9e3"),a("d81d"),a("ac1f"),a("1276"),a("b0c0"),a("c1df")),o=a.n(l),r=a("8bbf"),u=a.n(r),c=a("ed09"),s=(a("3990"),Object(c["c"])({props:{formParams:{type:Object,default:function(){return{}}},pigcms_id:{type:[String,Number],default:""}},setup:function(e,t){var a=Object(c["h"])({span:6}),i=Object(c["h"])({span:14}),n=Object(c["h"])(!1),l=Object(c["h"])([]);l.value=e.formParams.field_list;var r=Object(c["h"])({}),s=Object(c["h"])(),m=Object(c["h"])([]),d=Object(c["h"])(""),p=Object(c["h"])(""),v=function(){u.a.prototype.request("/community/village_api.Building/getHouseVillageProvince").then((function(e){m.value=e,l.value.map((function(e){if(0==e.value&&(e.value=void 0),3==e.type){var t=e.value.split("#");d.value=0!=t[0]?t[0]:void 0,f.value=0!=t[1]?t[1]:void 0,console.log(e.value,t),m.value.map((function(e){d.value==e.id&&(p.value=e.name,_(d.value,p.value))}))}}))}))},f=Object(c["h"])(""),b=Object(c["h"])([]),_=function(e,t){u.a.prototype.request("/community/village_api.Building/getHouseVillageCity",{id:e,name:t}).then((function(e){b.value=e}))};Object(c["i"])((function(){return e.formParams}),(function(e){l.value=e.field_list,v()}));var g=function(){var t=!1,a=[];l.value.map((function(e){e.is_must&&!e.value&&(t=!0),a.push({key:e.key,value:e.value?e.value:0,type:e.type,title:e.title,source:e.source,is_must:e.is_must})})),t?u.a.prototype.$message.warn("请填写必填项"):n.value?u.a.prototype.$message.warn("正在提交中，请稍等..."):(n.value=!0,u.a.prototype.request("/community/village_api.Building/subRoomBindUserData",{pigcms_id:e.pigcms_id,basic_data:a}).then((function(e){n.value=!1,u.a.prototype.$message.success("保存成功！")})).catch((function(e){n.value=!1})))},y=function(e,t,a){"province_id"==t?(d.value=e,b.value=[],f.value="",m.value.map((function(e){d.value==e.id&&(p.value=e.name,_(d.value,p.value))})),l.value[a].value=d.value+"#"):"city_id"==t&&(f.value=e,l.value[a].value=d.value+"#"+f.value)},h=function(){s.value.resetFields()};return{labelCol:a,wrapperCol:i,baseForm:l,rules:r,onSubmit:g,resetForm:h,moment:o.a,delayPost:n,provinceList:m,province_id:d,province_name:p,getProvince:v,city_id:f,cityList:b,getCity:_,handleSelectChange:y}}})),m=s,d=(a("aaf6"),a("2877")),p=Object(d["a"])(m,i,n,!1,null,"05429713",null);t["default"]=p.exports},"8fa3":function(e,t,a){"use strict";a("50c5")},a61a:function(e,t,a){},aa8b:function(e,t,a){},aaeb:function(e,t,a){"use strict";a("a61a")},aaf6:function(e,t,a){"use strict";a("d4a9")},ab86:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(t,i){return a("div",{key:i,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.label)+"：")]),a("div",{staticClass:"checkbox_con"},[a("a-checkbox-group",e._l(t.value,(function(t,i){return a("a-checkbox",[e._v(e._s(t.value))])})),1)],1)])})),e.ownerForm.length>0?a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]):e._e()],2)},n=[],l=(a("8bbf"),a("ed09")),o=(a("3990"),Object(l["c"])({props:{formParams:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(l["h"])({});a.value=e.formParams.mark_list;var i=function(){console.log("ownerForm===>",a.value)};return{ownerForm:a,onSubmit:i}}})),r=o,u=(a("aaeb"),a("2877")),c=Object(u["a"])(r,i,n,!1,null,"5351f0cb",null);t["default"]=c.exports},aba1:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_label"},[e._l(e.labelForm.list,(function(t,i){return a("div",{key:i,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.name)+"：")]),a("div",{staticClass:"radio_con"},[a("a-checkbox-group",{on:{change:e.radioChange},model:{value:e.labelForm.list[i].value,callback:function(t){e.$set(e.labelForm.list[i],"value",t)},expression:"labelForm.list[index].value"}},e._l(t.children,(function(t,i){return a("a-checkbox",{key:t.id,attrs:{value:1*t.id}},[e._v(e._s(t.name))])})),1)],1)])})),a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],2)},n=[],l=a("2909"),o=(a("a9e3"),a("d81d"),a("99af"),a("8bbf")),r=a.n(o),u=a("ed09"),c=(a("3990"),Object(u["c"])({props:{formParams:{type:Object,default:function(){return{}}},pigcms_id:{type:[String,Number],default:""}},setup:function(e,t){var a=Object(u["h"])({}),i=Object(u["h"])([]);a.value=e.formParams.label_list,i.value=e.formParams.label_list.value;var n=function(e){console.log("value===>",e)},o=Object(u["h"])(!1),c=function(){var t=[];if(a.value.list.map((function(e){t=[].concat(Object(l["a"])(t),Object(l["a"])(e.value))})),o.value)r.a.prototype.$message.warn("正在提交中，请稍等...");else{o.value=!0;var i={pigcms_id:e.pigcms_id,user_label_groups:t};r.a.prototype.request("/community/village_api.Building/subBindUserLabel",i).then((function(e){o.value=!1,r.a.prototype.$message.success("保存成功！")})).catch((function(e){o.value=!1}))}};return{labelForm:a,onSubmit:c,valueGroup:i,radioChange:n}}})),s=c,m=(a("8fa3"),a("2877")),d=Object(m["a"])(s,i,n,!1,null,"cfc260c4",null);t["default"]=d.exports},c844:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"owner_msg"},[e._l(e.ownerForm,(function(t,i){return a("div",{key:i,staticClass:"label_con"},[a("div",{staticClass:"title"},[e._v(e._s(t.label)+"：")]),1==t.type?a("div",{staticClass:"choose_con",staticStyle:{display:"flex","align-items":"center"}},[a("a-radio-group",{model:{value:e.ownerForm[i].data.value,callback:function(t){e.$set(e.ownerForm[i].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,i){return a("a-radio",{attrs:{value:t.label}},[e._v(e._s(t.value))])})),1),1==e.ownerForm[i].data.value?a("a-select",{staticStyle:{width:"200px","margin-left":"5px"},attrs:{placeholder:"请选择党支部"},on:{change:e.selectChange},model:{value:e.partyId,callback:function(t){e.partyId=t},expression:"partyId"}},e._l(t.data.street_party_branch,(function(t,i){return a("a-select-option",{attrs:{value:t.id}},[e._v(e._s(t.name))])})),1):e._e()],1):e._e(),0==t.type?a("div",{staticClass:"choose_con"},[a("a-checkbox-group",{model:{value:e.ownerForm[i].data.value,callback:function(t){e.$set(e.ownerForm[i].data,"value",t)},expression:"ownerForm[index].data.value"}},e._l(t.value,(function(t,i){return a("a-checkbox",{attrs:{value:t.label+""}},[e._v(e._s(t.value))])})),1)],1):e._e()])})),e.ownerForm.length>0?a("a-button",{staticStyle:{"margin-left":"20px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]):e._e()],2)},n=[],l=(a("a9e3"),a("d81d"),a("8bbf")),o=a.n(l),r=a("ed09"),u=(a("3990"),Object(r["c"])({props:{formParams:{type:Object,default:function(){return{}}},pigcms_id:{type:[String,Number],default:""}},setup:function(e,t){var a=Object(r["h"])({}),i=Object(r["h"])(""),n=Object(r["h"])(!1);a.value=e.formParams.mark_list;var l=function(e){console.log("value===>",e),console.log("partyId===>",i.value)},u=function(){if(n.value)o.a.prototype.$message.warn("正在提交中，请稍等...");else{n.value=!0;var t={};a.value.map((function(e,a){t[e.field]=e.data.value})),1==t.user_political_affiliation?t["user_party_id"]=i.value:t["user_party_id"]=0,t["pigcms_id"]=e.pigcms_id,o.a.prototype.request("/community/village_api.Building/subStreetPartyBindUser",t).then((function(e){n.value=!1,o.a.prototype.$message.success("保存成功！")})).catch((function(e){n.value=!1}))}};return{ownerForm:a,onSubmit:u,partyId:i,selectChange:l}}})),c=u,s=(a("e5f8"),a("2877")),m=Object(s["a"])(c,i,n,!1,null,"0c3bef53",null);t["default"]=m.exports},d4a9:function(e,t,a){},e5f8:function(e,t,a){"use strict";a("aa8b")}}]);