(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7051130c"],{"1a83":function(e,t,i){"use strict";var r={passwordEdit:"/community/house_meter.AdminUser/passwordEdit",adminUserList:"/community/house_meter.AdminUser/adminUserList",adminUserAdd:"/community/house_meter.AdminUser/adminUserAdd ",adminUserEdit:"/community/house_meter.AdminUser/adminUserEdit",adminUserInfo:"/community/house_meter.AdminUser/adminUserInfo",adminUserDelete:"/community/house_meter.AdminUser/adminUserDelete",areaList:"/community/house_meter.AdminUser/areaList",villageBindList:"/community/house_meter.Power/villageBindList",meterVillageAdd:"/community/house_meter.Power/meterVillageAdd",meterVillageAddll:"/community/house_meter.Power/meterVillageAddll",meterVillageDelete:"/community/house_meter.Power/meterVillageDelete",getVillageInfo:"/community/house_meter.Power/getVillageInfo",meterElectricList:"/community/house_meter.MeterElectric/meterElectricList",meterElectricInfo:"/community/house_meter.MeterElectric/meterElectricInfo",meterElectricAdd:"/community/house_meter.MeterElectric/meterElectricAdd",meterElectricEdit:"/community/house_meter.MeterElectric/meterElectricEdit",meterElectricDelete:"/community/house_meter.MeterElectric/meterElectricDelete",getMeasureList:"/community/house_meter.MeterElectric/getMeasureList",switch:"/community/house_meter.MeterElectric/switch",meterReading:"/community/house_meter.MeterElectric/now_reading_electric",meterElectricGroupList:"/community/house_meter.MeterElectricGroup/meterElectricGroupList",meterElectricGroupAdd:"/community/house_meter.MeterElectricGroup/meterElectricGroupAdd",meterElectricGroupEdit:"/community/house_meter.MeterElectricGroup/meterElectricGroupEdit",meterElectricGroupInfo:"/community/house_meter.MeterElectricGroup/meterElectricGroupInfo",meterElectricSetInfo:"/community/house_meter.MeterElectric/meterElectricSetInfo",meterElectricSetEdit:"/community/house_meter.MeterElectric/meterElectricSetEdit",MeterReadingList:"/community/house_meter.MeterElectric/getMeterReadingList",getAreaList:"/community/house_meter.MeterElectricPrice/getAreaList",getAreaPriceList:"/community/house_meter.MeterElectricPrice/getAreaPriceList",meterElectricPriceAdd:"/community/house_meter.MeterElectricPrice/meterElectricPriceAdd",meterElectricPriceEdit:"/community/house_meter.MeterElectricPrice/meterElectricPriceEdit",payorderList:"/community/house_meter.MeterUserPayorder/payorderList",payorderPrint:"/community/house_meter.MeterUserPayorder/payorderPrint",getAreasList:"/community/house_meter.MeterElectric/getAreaList",getCommunityList:"/community/house_meter.MeterElectric/getCommunityList",getVillageList:"/community/house_meter.MeterElectric/getVillageList",getSingleList:"/community/house_meter.MeterElectric/getSingleList",getFloorList:"/community/house_meter.MeterElectric/getFloorList",getLayerList:"/community/house_meter.MeterElectric/getLayerList",getVacancyList:"/community/house_meter.MeterElectric/getVacancyList",uploadFile:"/community/house_meter.MeterElectric/uploadFile",getTongjiCount:"/community/house_meter.DataStatistics/getTongjiCount",getEleWarnList:"/community/house_meter.DataStatistics/getEleWarnList",powerConsumptionAnalysis:"/community/house_meter.DataStatistics/powerConsumptionAnalysis",deviceManage:"/community/house_meter.DataStatistics/deviceManage",powerConsumptionFeeAnalysis:"/community/house_meter.DataStatistics/powerConsumptionFeeAnalysis",getTongjiCountByCity:"/community/house_meter.DataStatistics/getTongjiCountByCity"};t["a"]=r},"86c3":function(e,t,i){},c0e2:function(e,t,i){"use strict";i("86c3")},e48d:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"message-suggestions-list-box"},[i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination},on:{change:e.table_change},scopedSlots:e._u([{key:"status",fn:function(t,r){return i("span",{},[i("a-badge",{attrs:{status:e._f("statusFilter")(r.status),text:t}})],1)}},{key:"action",fn:function(t,r){return i("span",{},[i("a",{on:{click:function(t){return e.lookEdit(r)}}},[e._v("管理")])])}}])})],1)},c=[],o=(i("ac1f"),i("841c"),i("1a83")),m=[{title:"城市名称",dataIndex:"area_name",key:"area_name"},{title:"收费标准",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],s={name:"cityList",data:function(){return{data:[],reply_content:"",pagination:{pageSize:10,total:10},search_data:[],search:{page:1},form:this.$form.createForm(this),visible:!1,columns:m,page:1}},activated:function(){this.getAreaList()},methods:{getAreaList:function(){var e=this;this.search["page"]=this.page,this.request(o["a"].getAreaList,this.search).then((function(t){console.log("res",t),e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:0,e.data=t.list}))},lookEdit:function(e){console.log("record",e);var t=this.getRouterPath("meter_electric_price");console.log("lookEdit",t),this.$router.push({path:t,query:{area_id:e.area_id}})},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.page=e.current,this.getAreaList())}}},n=s,a=(i("c0e2"),i("2877")),u=Object(a["a"])(n,r,c,!1,null,"45aa6185",null);t["default"]=u.exports}}]);