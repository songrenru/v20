(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7478d208"],{a72a:function(e,i,t){"use strict";t("da7a")},c101:function(e,i,t){"use strict";t.r(i);t("aa48"),t("8f7e");var a=function(){var e=this,i=e._self._c;return i("div",{staticClass:"cloudintercom"},[i("div",{staticClass:"search-box"},[i("a-row",{attrs:{type:"flex"}},[i("a-col",{attrs:{span:4}},[i("a-input-group",{attrs:{compact:""}},[i("p",{staticStyle:{"margin-top":"5px"}},[e._v("设备ID：")]),i("a-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入设备ID"},model:{value:e.search.keyword,callback:function(i){e.$set(e.search,"keyword",i)},expression:"search.keyword"}})],1)],1),i("a-col",{attrs:{span:4}},[i("a-input-group",{attrs:{compact:""}},[i("p",{staticStyle:{"margin-top":"5px"}},[e._v("状态：")]),i("a-select",{staticStyle:{width:"150px"},model:{value:e.search.deviceStatus,callback:function(i){e.$set(e.search,"deviceStatus",i)},expression:"search.deviceStatus"}},[i("a-select-option",{attrs:{value:0}},[e._v("请选择状态")]),i("a-select-option",{attrs:{value:1}},[e._v("在线")]),i("a-select-option",{attrs:{value:2}},[e._v("离线")])],1)],1)],1),i("a-col",{staticStyle:{"margin-right":"10px"},attrs:{span:1}},[i("a-button",{attrs:{type:"primary"},on:{click:function(i){return e.getDeviceDataList(1)}}},[e._v("查询")])],1),i("a-col",{attrs:{span:1}},[i("a-button",{on:{click:function(i){return e.resetList()}}},[e._v("重置")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,a){return i("span",{},[i("a",{on:{click:function(i){return e.editDevice(a)}}},[e._v("编辑设备")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(i){return e.$refs.OpenDoorLog.list(a.id)}}},[e._v("查看开门记录")])],1)}}])}),e.visible?i("a-modal",{attrs:{title:"编辑设备",width:900,visible:e.visible,maskClosable:!1},on:{cancel:e.handleCancel,ok:e.handleSubmit}},[i("a-form",{staticClass:"third_user_info",attrs:{form:e.checkForm}},[i("a-form-item",{attrs:{label:"设备ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-input",{attrs:{value:e.info.deviceSn,disabled:!0}})],1),i("a-form-item",{attrs:{label:"设备类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-radio-group",{model:{value:e.info.thirdDeviceTypeStr,callback:function(i){e.$set(e.info,"thirdDeviceTypeStr",i)},expression:"info.thirdDeviceTypeStr"}},[i("a-radio",{attrs:{value:1}},[e._v("人行通道")]),i("a-radio",{attrs:{value:2}},[e._v("非机动车车道")])],1)],1),i("a-form-item",{attrs:{label:"设备名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-input",{model:{value:e.info.deviceName,callback:function(i){e.$set(e.info,"deviceName",i)},expression:"info.deviceName"}})],1),i("a-form-item",{attrs:{label:"选择位置",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-select",{staticClass:"select_position",on:{change:e.handleChangeFloor},model:{value:e.info.singleId,callback:function(i){e.$set(e.info,"singleId",i)},expression:"info.singleId"}},e._l(e.info.singleList,(function(t,a){return i("a-select-option",{key:a,attrs:{value:t["single_id"]}},[e._v(e._s(t["single_name"]))])})),1),e.floorShow?i("a-select",{staticClass:"select_position",model:{value:e.info.floorId,callback:function(i){e.$set(e.info,"floorId",i)},expression:"info.floorId"}},e._l(e.info.floorList,(function(t,a){return i("a-select-option",{key:a,attrs:{value:t["floor_id"]}},[e._v(e._s(t["floor_name"]))])})),1):e._e()],1),i("a-form-item",{attrs:{label:"设备进出方向",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-radio-group",{model:{value:e.info.deviceDirection,callback:function(i){e.$set(e.info,"deviceDirection",i)},expression:"info.deviceDirection"}},[i("a-radio",{attrs:{value:0}},[e._v("进")]),i("a-radio",{attrs:{value:1}},[e._v("出")])],1)],1)],1)],1):e._e()],1)},o=[],n=t("a0e0"),l=[{title:"设备ID",dataIndex:"device_sn",key:"device_sn"},{title:"设备名",dataIndex:"device_name",key:"device_name"},{title:"对应位置",dataIndex:"device_position",key:"device_position"},{title:"设备进出方向",dataIndex:"device_direction_text",key:"device_direction_text"},{title:"添加时间",dataIndex:"add_time",key:"add_time"},{title:"状态",dataIndex:"device_status",key:"device_status"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],s=[],r={name:"faceDevice",data:function(){return{labelCol:{span:4},wrapperCol:{span:14},pagination:{current:1,pageSize:10,total:10},search:{keyword:"",deviceStatus:0,page:1},loading:!1,logShow:!1,columns:l,data:s,checkForm:this.$form.createForm(this),villageId:"",visible:!1,floorShow:!0,info:{deviceSn:"",thirdDeviceTypeStr:1,deviceName:"",deviceDirection:0,singleId:"请选择楼栋",floorId:"请选择单元",singleList:[],floorList:[]}}},mounted:function(){this.getDeviceDataList()},methods:{getDeviceDataList:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===i&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.request(n["a"].getDeviceDataList,this.search).then((function(i){console.log(i),e.pagination.total=i.count?i.count:0,e.pagination.pageSize=i.total_limit?i.total_limit:10,e.data=i.list,e.loading=!1}))},resetList:function(){this.$set(this.pagination,"current",1),this.search={keyword:"",deviceStatus:0,page:1},this.getDeviceDataList()},table_change:function(e){var i=this;e.current&&e.current>0&&(i.$set(i.pagination,"current",e.current),i.getDeviceDataList())},editDevice:function(e){console.log(e),this.visible=!0,this.info.deviceSn=e.device_sn,this.info.thirdDeviceTypeStr=parseInt(e.thirdDeviceTypeStr),this.info.deviceName=e.device_name,this.info.deviceDirection=e.device_direction,this.info.singleId=e.public_area_id?"1-"+e.public_area_id:e.single_id?"0-"+e.single_id:"请选择楼栋",this.info.floorId=e.floor_id?parseInt(e.floor_id):"请选择单元",this.villageId=e.village_id,this.handleChangeSingle(),!e.public_area_id&&e.single_id&&this.handleChangeFloor(this.info.singleId)},handleCancel:function(){var e=this;this.visible=!1,this.getDeviceDataList(),setTimeout((function(){e.checkForm=e.$form.createForm(e)}),500)},handleChangeSingle:function(){var e=this,i={village_id:this.villageId};this.request(n["a"].getVillageSinglePublic,i).then((function(i){console.log(i),e.info.singleList=i.list,e.info.floorList=[]}))},handleChangeFloor:function(e){var i=this,t=e.split("-");if("1"===t[0])this.floorShow=!1;else{this.floorShow=!0;var a={village_id:this.villageId,single_id:t[1]};this.request("/community/manage_api.v1.user/villageFloorList",a).then((function(e){console.log(e),i.info.floorList=e.list}))}},handleSubmit:function(){var e=this,i={deviceSn:this.info.deviceSn,thirdDeviceTypeStr:this.info.thirdDeviceTypeStr,device_name:this.info.deviceName,device_direction:this.info.deviceDirection,single_id:this.info.singleId,floor_id:this.info.floorId};console.log("编辑========================",i),"请选择楼栋"===this.info.singleId&&this.$message.error("请选择位置");var t=this.info.singleId.split("-");"0"===t[0]&&"请选择单元"===this.info.floorId&&this.$message.error("请选择单元"),this.request(n["a"].editDeviceInfo,i).then((function(i){e.getDeviceDataList(),e.$message.success("操作成功"),e.visible=!1}))},openDoorLog:function(e){this.logShow=!0}}},c=r,d=(t("a72a"),t("0b56")),v=Object(d["a"])(c,a,o,!1,null,null,null);i["default"]=v.exports},da7a:function(e,i,t){}}]);