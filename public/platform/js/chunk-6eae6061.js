(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eae6061","chunk-0162cfe0","chunk-2d0bacf3","chunk-2d0bacf3"],{"168b":function(e,t,i){"use strict";i("9142")},"1f16":function(e,t,i){"use strict";i.r(t);i("4e82");var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("a-drawer",{attrs:{title:e.title,visible:e.visible,width:700,"body-style":{paddingBottom:"80px"}},on:{close:function(t){return e.resetForm(!1)}}},[t("a-form-model",{ref:"ruleForm",attrs:{model:e.buildForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("div",{staticStyle:{display:"flex"}},[t("a-card",{staticStyle:{width:"630px"},attrs:{title:"基本信息"}},[t("a-form-model-item",{attrs:{label:"楼层名称",prop:"layer_name"}},[t("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.layer_name,callback:function(t){e.$set(e.buildForm,"layer_name",t)},expression:"buildForm.layer_name"}})],1),t("a-form-model-item",{attrs:{label:"楼层编号",prop:"layer_number"}},[t("a-input-number",{staticClass:"input_style_240",attrs:{max:99,min:1,extra:"必填项（仅限1-99不重复的数字"},model:{value:e.buildForm.layer_number,callback:function(t){e.$set(e.buildForm,"layer_number",t)},expression:"buildForm.layer_number"}})],1),t("a-form-model-item",{attrs:{label:"排序",prop:"sort",extra:"数字越大越靠前"}},[t("a-input-number",{staticClass:"input_style_240",attrs:{min:0},model:{value:e.buildForm.sort,callback:function(t){e.$set(e.buildForm,"sort",t)},expression:"buildForm.sort"}})],1),t("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[t("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭","default-checked":""},model:{value:e.statusBool,callback:function(t){e.statusBool=t},expression:"statusBool"}})],1)],1)],1)]),t("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[t("a-button",{staticStyle:{"margin-right":"30px"},on:{click:function(t){return e.resetForm(!1)}}},[e._v(" 关闭 ")]),t("a-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1)],1)},n=[],l=(i("a9e3"),i("8bbf")),o=i.n(l),r=i("c1df"),u=i.n(r),s=i("3990"),c=Object(l["defineComponent"])({props:{visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0},layer_id:{type:[String,Number],default:0}},setup:function(e,t){Object(l["watch"])((function(){return e.visible}),(function(t){t&&(e.layer_id>0?d.value="编辑楼层":d.value="添加楼层",_(e.single_id,e.floor_id,e.layer_id))}),{deep:!0});var i=function(e){var t=e.getFullYear(),i=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),n=t+"-"+i+"-"+a;return n},a=Object(l["ref"])(!1),n=Object(l["ref"])(!1),r=Object(l["ref"])(!1),c=Object(l["ref"])({}),d=Object(l["ref"])("编辑楼层"),m=Object(l["ref"])({layer_name:[{required:!0,message:"请输入楼层名称",trigger:"blur"}],layer_number:[{required:!0,message:"请输入楼层编号",trigger:"blur"}]}),p=Object(l["ref"])(),f=Object(l["ref"])({span:6}),g=Object(l["ref"])({span:16}),y=function(){p.value.validate((function(t){t&&(c.value.single_id=e.single_id,c.value.status=a.value?1:0,console.log("buildForm.value===>",c.value),r.value=!0,b())}))},v=function(e){t.emit("closeLayerDrawer",e),c.value={},p.value.resetFields()},b=function(){o.a.prototype.request(s["a"].saveUnitRentalLayerInfo,c.value).then((function(t){r.value=!1,e.floor_id>0?o.a.prototype.$message.success("编辑成功！"):o.a.prototype.$message.success("添加成功！"),v(!0)})).catch((function(e){r.value=!1}))},_=function(e,t,i){o.a.prototype.request(s["a"].unitRentalLayerInfo,{single_id:e,floor_id:t,layer_id:i}).then((function(e){c.value=e,a.value=1==e.status}))};return{confirmLoading:r,onSubmit:y,resetForm:v,buildForm:c,labelCol:f,wrapperCol:g,rules:m,saveForm:b,ruleForm:p,searchArea:n,formDate:i,moment:u.a,statusBool:a,title:d,getLayerInfo:_}}}),d=c,m=(i("168b"),i("2877")),p=Object(m["a"])(d,a,n,!1,null,"7fac06a6",null);t["default"]=p.exports},3990:function(e,t,i){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=a},"5bcb":function(e,t,i){},"868f":function(e,t,i){"use strict";i("5bcb")},9142:function(e,t,i){},a2ce:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("a-drawer",{attrs:{title:"楼层管理",visible:e.layer_visible,width:1300,"mask-closable":!1,"body-style":{paddingBottom:"80px"}},on:{close:e.closeLayerManage}},[t("div",{staticClass:"build_index"},[t("div",{staticClass:"table-operations top-box-padding"},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.editBuild("",0)}}},[e._v("添加楼层")])],1),t("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.id},"data-source":e.buildingList,pagination:!1,loading:e.loading},scopedSlots:e._u([{key:"status",fn:function(i,a){return[t("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭",checked:1==i},on:{change:function(t){return e.switchChange(t,a)}}})]}},{key:"action",fn:function(i,a){return t("span",{},[t("a",{on:{click:function(t){return e.editBuild(a,1)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(a)},cancel:e.delCancel}},[t("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)}}])}),t("div",{staticClass:"total_number"},[e._v(" 总楼层数："),t("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.total))]),e._v("层 ")]),t("layer-edit",{attrs:{visible:e.layerEditVisible,single_id:e.single_id,floor_id:e.floor_id,layer_id:e.layer_id},on:{closeLayerDrawer:e.closeLayerDrawer}})],1)])},n=[],l=(i("a9e3"),i("4e82"),i("8bbf")),o=i.n(l),r=i("1f16"),u=i("3990"),s=Object(l["defineComponent"])({props:{layer_visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0}},name:"unitRentalLayerList",components:{layerEdit:r["default"]},setup:function(e,t){Object(l["watch"])((function(){return e.layer_visible}),(function(e){e&&d()}),{deep:!0});var i=Object(l["ref"])([{title:"楼层名称",dataIndex:"layer_name"},{title:"楼层编号",dataIndex:"layer_number"},{title:"楼栋名称",dataIndex:"single_name"},{title:"单元名称",dataIndex:"floor_name"},{title:"排序",dataIndex:"sort",sorter:function(e,t){return e.sort-t.sort}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}]),a=Object(l["ref"])(0),n=Object(l["ref"])(!1),r=Object(l["ref"])(!1),s=Object(l["ref"])([]),c=Object(l["ref"])(0),d=function(){o.a.prototype.request(u["a"].unitRentalLayerList,{single_id:e.single_id,floor_id:e.floor_id}).then((function(e){s.value=e.dataList,c.value=e.count,r.value=!1})).catch((function(e){r.value=!1}))},m=function(){},p=Object(l["ref"])(!0),f=function(e,t){if(p.value){var i=e?1:0;y(t.id,i,t.floor_id)}else o.a.prototype.$message.warn("请求频繁！")},g=function(e){console.log("closeLayerManage"),t.emit("closeDrawer",e)},y=function(e,t,i){p.value=!1,o.a.prototype.request(u["a"].updateUnitRentalLayerStatus,{layer_id:e,status:t,floor_id:i}).then((function(e){p.value=!0,d(),o.a.prototype.$message.success("修改成功！")})).catch((function(e){d(),p.value=!0}))},v=function(e,t){o.a.prototype.request(u["a"].deleteUnitRentalLayer,{layer_id:e,floor_id:t}).then((function(e){r.value=!0,d(),o.a.prototype.$message.success("删除成功！")})).catch((function(e){}))},b=function(e){v(e.id,e.floor_id)},_=function(e,t){0==t?(n.value=!0,a.value=0):1==t&&(n.value=!0,a.value=e.id)},R=function(e){n.value=!1,e&&(r.value=!0,d())};return{columns:i,buildingList:s,loading:r,getSingleLayerList:d,total:c,delCancel:m,delConfirm:b,deleteBiuld:v,editBuild:_,layer_id:a,closeLayerDrawer:R,switchChange:f,changeSingleStatus:y,changeStatus:p,layerEditVisible:n,closeLayerManage:g}}}),c=s,d=(i("868f"),i("2877")),m=Object(d["a"])(c,a,n,!1,null,"20abb1cf",null);t["default"]=m.exports}}]);