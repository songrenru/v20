(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58f2e316"],{"1a83":function(e,t,i){"use strict";var r={passwordEdit:"/community/house_meter.AdminUser/passwordEdit",adminUserList:"/community/house_meter.AdminUser/adminUserList",adminUserAdd:"/community/house_meter.AdminUser/adminUserAdd ",adminUserEdit:"/community/house_meter.AdminUser/adminUserEdit",adminUserInfo:"/community/house_meter.AdminUser/adminUserInfo",adminUserDelete:"/community/house_meter.AdminUser/adminUserDelete",areaList:"/community/house_meter.AdminUser/areaList",villageBindList:"/community/house_meter.Power/villageBindList",meterVillageAdd:"/community/house_meter.Power/meterVillageAdd",meterVillageAddll:"/community/house_meter.Power/meterVillageAddll",meterVillageDelete:"/community/house_meter.Power/meterVillageDelete",getVillageInfo:"/community/house_meter.Power/getVillageInfo",meterElectricList:"/community/house_meter.MeterElectric/meterElectricList",meterElectricInfo:"/community/house_meter.MeterElectric/meterElectricInfo",meterElectricAdd:"/community/house_meter.MeterElectric/meterElectricAdd",meterElectricEdit:"/community/house_meter.MeterElectric/meterElectricEdit",meterElectricDelete:"/community/house_meter.MeterElectric/meterElectricDelete",getMeasureList:"/community/house_meter.MeterElectric/getMeasureList",switch:"/community/house_meter.MeterElectric/switch",meterReading:"/community/house_meter.MeterElectric/now_reading_electric",meterElectricGroupList:"/community/house_meter.MeterElectricGroup/meterElectricGroupList",meterElectricGroupAdd:"/community/house_meter.MeterElectricGroup/meterElectricGroupAdd",meterElectricGroupEdit:"/community/house_meter.MeterElectricGroup/meterElectricGroupEdit",meterElectricGroupInfo:"/community/house_meter.MeterElectricGroup/meterElectricGroupInfo",meterElectricSetInfo:"/community/house_meter.MeterElectric/meterElectricSetInfo",meterElectricSetEdit:"/community/house_meter.MeterElectric/meterElectricSetEdit",MeterReadingList:"/community/house_meter.MeterElectric/getMeterReadingList",getAreaList:"/community/house_meter.MeterElectricPrice/getAreaList",getAreaPriceList:"/community/house_meter.MeterElectricPrice/getAreaPriceList",meterElectricPriceAdd:"/community/house_meter.MeterElectricPrice/meterElectricPriceAdd",meterElectricPriceEdit:"/community/house_meter.MeterElectricPrice/meterElectricPriceEdit",payorderList:"/community/house_meter.MeterUserPayorder/payorderList",payorderPrint:"/community/house_meter.MeterUserPayorder/payorderPrint",getAreasList:"/community/house_meter.MeterElectric/getAreaList",getCommunityList:"/community/house_meter.MeterElectric/getCommunityList",getVillageList:"/community/house_meter.MeterElectric/getVillageList",getSingleList:"/community/house_meter.MeterElectric/getSingleList",getFloorList:"/community/house_meter.MeterElectric/getFloorList",getLayerList:"/community/house_meter.MeterElectric/getLayerList",getVacancyList:"/community/house_meter.MeterElectric/getVacancyList",uploadFile:"/community/house_meter.MeterElectric/uploadFile",getTongjiCount:"/community/house_meter.DataStatistics/getTongjiCount",getEleWarnList:"/community/house_meter.DataStatistics/getEleWarnList",powerConsumptionAnalysis:"/community/house_meter.DataStatistics/powerConsumptionAnalysis",deviceManage:"/community/house_meter.DataStatistics/deviceManage",powerConsumptionFeeAnalysis:"/community/house_meter.DataStatistics/powerConsumptionFeeAnalysis",getTongjiCountByCity:"/community/house_meter.DataStatistics/getTongjiCountByCity"};t["a"]=r},"36a0":function(e,t,i){"use strict";i("c62a")},"6e9e":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"选择工作人员",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",[i("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择工作人员","default-value":e.defaultvalue,"show-search":!0,"option-filter-prop":"children"},on:{change:e.handleChange}},[i("a-select-option",{attrs:{value:"0"}},[e._v("请选择")]),e._l(e.workers,(function(t,r){return i("a-select-option",{key:t.wid,attrs:{value:t.wid,title:t.name}},[e._v(e._s(t.name))])}))],2)],1)],1)],1),i("div",{staticClass:"refund_type_desc",staticStyle:{"margin-left":"30px"}},[i("span",[e._v("已选择的工作人员：")]),e._l(e.tags,(function(t,r){return i("span",{staticClass:"have_selected"},[e._v(" "+e._s(t.name)+" "),i("a-icon",{staticStyle:{color:"#ff0000"},attrs:{type:"close"},on:{click:function(i){return e.delSelect(t,r)}}})],1)}))],2)],1)},o=[],c=(i("159b"),i("a434"),i("a0e0")),s=(i("1a83"),{components:{},data:function(){return{title:"通知人员添加修改",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,workers:[],tags:[],defaultvalue:"0"}},mounted:function(){},methods:{add:function(){this.title="通知人员添加修改",this.getWorkeList(),this.visible=!0},handleChange:function(e,t){console.log("value",e);var i={};if(""==e||0==e||"0"==e);else{i.wid=e,this.workers.forEach((function(t,r){t.wid==e&&(i=t)}));var r=!1;this.tags.forEach((function(t,i){t.wid==e&&(r=!0)})),r||this.tags.push(i),console.log("tags",this.tags)}},delSelect:function(e,t){console.log("index",t),this.tags.splice(t,1),console.log("deltags",this.tags)},getWorkeList:function(){var e=this;this.request(c["a"].getNoticeWorkers,{}).then((function(t){e.workers=t.workers,e.tags=t.tags}))},handleSubmit:function(){var e=this;this.request(c["a"].saveNoticeWorkers,{tags:this.tags}).then((function(t){e.$message.success("操作成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)}))},handleCancel:function(){var e=this;this.visible=!1,this.tags=[],setTimeout((function(){e.form=e.$form.createForm(e)}),500)}}}),m=s,n=(i("36a0"),i("2877")),a=Object(n["a"])(m,r,o,!1,null,null,null);t["default"]=a.exports},c62a:function(e,t,i){}}]);