(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf3bae6","chunk-58f2e316"],{"0558":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"message-suggestions-list-box"},[i("a-row",[i("a-col",{staticStyle:{margin:"20px 0px 20px 30px"}},[i("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.addNoticeWork()}}},[e._v("添加/修改通知人员")])],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change}}),i("off-line-worker",{ref:"offLineWorkerModel",on:{ok:e.bindOk}})],1)},o=[],s=(i("ac1f"),i("841c"),i("a0e0")),n=i("6e9e"),c=[{title:"设备品牌",dataIndex:"device_brand_str",key:"device_brand_str"},{title:"设备类型",dataIndex:"device_type_str",key:"device_type_str"},{title:"设备号",dataIndex:"device_sn",key:"device_sn"},{title:"设备位置",dataIndex:"address",key:"address"},{title:"状态",dataIndex:"device_status_str",key:"device_status_str"},{title:"发生时间",dataIndex:"add_time_str",key:"add_time_str"},{title:"备注",dataIndex:"reason",key:"reason"},{title:"通知人员",dataIndex:"worker_str",key:"worker_str"}],a=[],m={name:"offLineDevList",filters:{},components:{offLineWorker:n["default"]},data:function(){return{pagination:{pageSize:10,total:10,current:1},search:{begin_time:"",end_time:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:a,columns:c,options:[],search_data:"",page:1}},mounted:function(){this.getList()},computed:{},methods:{clear:function(){},getList:function(){var e=this;this.loading=!0,this.search["page"]=this.page,this.request(s["a"].getOffLineDevList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:20,e.data=t.list,e.loading=!1,e.total_money=t.total_money}))},onChange:function(e,t){console.log(t),this.search.begin_time="",this.search.end_time="",t&&(this.search.begin_time=t[0],this.search.end_time=t[1]),this.getList()},searchList:function(){console.log("search",this.search),this.page=1;var e={current:1,pageSize:10,total:10};this.table_change(e)},addNoticeWork:function(){this.$refs.offLineWorkerModel.add()},bindOk:function(){this.getList()},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current,this.getList())}}},l=m,u=(i("8a88"),i("2877")),d=Object(u["a"])(l,r,o,!1,null,"ffff7e92",null);t["default"]=d.exports},"175b":function(e,t,i){},"1a83":function(e,t,i){"use strict";var r={passwordEdit:"/community/house_meter.AdminUser/passwordEdit",adminUserList:"/community/house_meter.AdminUser/adminUserList",adminUserAdd:"/community/house_meter.AdminUser/adminUserAdd ",adminUserEdit:"/community/house_meter.AdminUser/adminUserEdit",adminUserInfo:"/community/house_meter.AdminUser/adminUserInfo",adminUserDelete:"/community/house_meter.AdminUser/adminUserDelete",areaList:"/community/house_meter.AdminUser/areaList",villageBindList:"/community/house_meter.Power/villageBindList",meterVillageAdd:"/community/house_meter.Power/meterVillageAdd",meterVillageAddll:"/community/house_meter.Power/meterVillageAddll",meterVillageDelete:"/community/house_meter.Power/meterVillageDelete",getVillageInfo:"/community/house_meter.Power/getVillageInfo",meterElectricList:"/community/house_meter.MeterElectric/meterElectricList",meterElectricInfo:"/community/house_meter.MeterElectric/meterElectricInfo",meterElectricAdd:"/community/house_meter.MeterElectric/meterElectricAdd",meterElectricEdit:"/community/house_meter.MeterElectric/meterElectricEdit",meterElectricDelete:"/community/house_meter.MeterElectric/meterElectricDelete",getMeasureList:"/community/house_meter.MeterElectric/getMeasureList",switch:"/community/house_meter.MeterElectric/switch",meterReading:"/community/house_meter.MeterElectric/now_reading_electric",meterElectricGroupList:"/community/house_meter.MeterElectricGroup/meterElectricGroupList",meterElectricGroupAdd:"/community/house_meter.MeterElectricGroup/meterElectricGroupAdd",meterElectricGroupEdit:"/community/house_meter.MeterElectricGroup/meterElectricGroupEdit",meterElectricGroupInfo:"/community/house_meter.MeterElectricGroup/meterElectricGroupInfo",meterElectricSetInfo:"/community/house_meter.MeterElectric/meterElectricSetInfo",meterElectricSetEdit:"/community/house_meter.MeterElectric/meterElectricSetEdit",MeterReadingList:"/community/house_meter.MeterElectric/getMeterReadingList",getAreaList:"/community/house_meter.MeterElectricPrice/getAreaList",getAreaPriceList:"/community/house_meter.MeterElectricPrice/getAreaPriceList",meterElectricPriceAdd:"/community/house_meter.MeterElectricPrice/meterElectricPriceAdd",meterElectricPriceEdit:"/community/house_meter.MeterElectricPrice/meterElectricPriceEdit",payorderList:"/community/house_meter.MeterUserPayorder/payorderList",payorderPrint:"/community/house_meter.MeterUserPayorder/payorderPrint",getAreasList:"/community/house_meter.MeterElectric/getAreaList",getCommunityList:"/community/house_meter.MeterElectric/getCommunityList",getVillageList:"/community/house_meter.MeterElectric/getVillageList",getSingleList:"/community/house_meter.MeterElectric/getSingleList",getFloorList:"/community/house_meter.MeterElectric/getFloorList",getLayerList:"/community/house_meter.MeterElectric/getLayerList",getVacancyList:"/community/house_meter.MeterElectric/getVacancyList",uploadFile:"/community/house_meter.MeterElectric/uploadFile",getTongjiCount:"/community/house_meter.DataStatistics/getTongjiCount",getEleWarnList:"/community/house_meter.DataStatistics/getEleWarnList",powerConsumptionAnalysis:"/community/house_meter.DataStatistics/powerConsumptionAnalysis",deviceManage:"/community/house_meter.DataStatistics/deviceManage",powerConsumptionFeeAnalysis:"/community/house_meter.DataStatistics/powerConsumptionFeeAnalysis",getTongjiCountByCity:"/community/house_meter.DataStatistics/getTongjiCountByCity"};t["a"]=r},"36a0":function(e,t,i){"use strict";i("c62a")},"6e9e":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"选择工作人员",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",[i("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择工作人员","default-value":e.defaultvalue,"show-search":!0,"option-filter-prop":"children"},on:{change:e.handleChange}},[i("a-select-option",{attrs:{value:"0"}},[e._v("请选择")]),e._l(e.workers,(function(t,r){return i("a-select-option",{key:t.wid,attrs:{value:t.wid,title:t.name}},[e._v(e._s(t.name))])}))],2)],1)],1)],1),i("div",{staticClass:"refund_type_desc",staticStyle:{"margin-left":"30px"}},[i("span",[e._v("已选择的工作人员：")]),e._l(e.tags,(function(t,r){return i("span",{staticClass:"have_selected"},[e._v(" "+e._s(t.name)+" "),i("a-icon",{staticStyle:{color:"#ff0000"},attrs:{type:"close"},on:{click:function(i){return e.delSelect(t,r)}}})],1)}))],2)],1)},o=[],s=(i("159b"),i("a434"),i("a0e0")),n=(i("1a83"),{components:{},data:function(){return{title:"通知人员添加修改",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,workers:[],tags:[],defaultvalue:"0"}},mounted:function(){},methods:{add:function(){this.title="通知人员添加修改",this.getWorkeList(),this.visible=!0},handleChange:function(e,t){console.log("value",e);var i={};if(""==e||0==e||"0"==e);else{i.wid=e,this.workers.forEach((function(t,r){t.wid==e&&(i=t)}));var r=!1;this.tags.forEach((function(t,i){t.wid==e&&(r=!0)})),r||this.tags.push(i),console.log("tags",this.tags)}},delSelect:function(e,t){console.log("index",t),this.tags.splice(t,1),console.log("deltags",this.tags)},getWorkeList:function(){var e=this;this.request(s["a"].getNoticeWorkers,{}).then((function(t){e.workers=t.workers,e.tags=t.tags}))},handleSubmit:function(){var e=this;this.request(s["a"].saveNoticeWorkers,{tags:this.tags}).then((function(t){e.$message.success("操作成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)}))},handleCancel:function(){var e=this;this.visible=!1,this.tags=[],setTimeout((function(){e.form=e.$form.createForm(e)}),500)}}}),c=n,a=(i("36a0"),i("2877")),m=Object(a["a"])(c,r,o,!1,null,null,null);t["default"]=m.exports},"8a88":function(e,t,i){"use strict";i("175b")},c62a:function(e,t,i){}}]);