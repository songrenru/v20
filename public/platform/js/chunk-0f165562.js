(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f165562"],{"1a83":function(e,t,i){"use strict";var r={passwordEdit:"/community/house_meter.AdminUser/passwordEdit",adminUserList:"/community/house_meter.AdminUser/adminUserList",adminUserAdd:"/community/house_meter.AdminUser/adminUserAdd ",adminUserEdit:"/community/house_meter.AdminUser/adminUserEdit",adminUserInfo:"/community/house_meter.AdminUser/adminUserInfo",adminUserDelete:"/community/house_meter.AdminUser/adminUserDelete",areaList:"/community/house_meter.AdminUser/areaList",villageBindList:"/community/house_meter.Power/villageBindList",meterVillageAdd:"/community/house_meter.Power/meterVillageAdd",meterVillageAddll:"/community/house_meter.Power/meterVillageAddll",meterVillageDelete:"/community/house_meter.Power/meterVillageDelete",getVillageInfo:"/community/house_meter.Power/getVillageInfo",meterElectricList:"/community/house_meter.MeterElectric/meterElectricList",meterElectricInfo:"/community/house_meter.MeterElectric/meterElectricInfo",meterElectricAdd:"/community/house_meter.MeterElectric/meterElectricAdd",meterElectricEdit:"/community/house_meter.MeterElectric/meterElectricEdit",meterElectricDelete:"/community/house_meter.MeterElectric/meterElectricDelete",getMeasureList:"/community/house_meter.MeterElectric/getMeasureList",switch:"/community/house_meter.MeterElectric/switch",meterReading:"/community/house_meter.MeterElectric/now_reading_electric",meterElectricGroupList:"/community/house_meter.MeterElectricGroup/meterElectricGroupList",meterElectricGroupAdd:"/community/house_meter.MeterElectricGroup/meterElectricGroupAdd",meterElectricGroupEdit:"/community/house_meter.MeterElectricGroup/meterElectricGroupEdit",meterElectricGroupInfo:"/community/house_meter.MeterElectricGroup/meterElectricGroupInfo",meterElectricSetInfo:"/community/house_meter.MeterElectric/meterElectricSetInfo",meterElectricSetEdit:"/community/house_meter.MeterElectric/meterElectricSetEdit",MeterReadingList:"/community/house_meter.MeterElectric/getMeterReadingList",getAreaList:"/community/house_meter.MeterElectricPrice/getAreaList",getAreaPriceList:"/community/house_meter.MeterElectricPrice/getAreaPriceList",meterElectricPriceAdd:"/community/house_meter.MeterElectricPrice/meterElectricPriceAdd",meterElectricPriceEdit:"/community/house_meter.MeterElectricPrice/meterElectricPriceEdit",payorderList:"/community/house_meter.MeterUserPayorder/payorderList",payorderPrint:"/community/house_meter.MeterUserPayorder/payorderPrint",getAreasList:"/community/house_meter.MeterElectric/getAreaList",getCommunityList:"/community/house_meter.MeterElectric/getCommunityList",getVillageList:"/community/house_meter.MeterElectric/getVillageList",getSingleList:"/community/house_meter.MeterElectric/getSingleList",getFloorList:"/community/house_meter.MeterElectric/getFloorList",getLayerList:"/community/house_meter.MeterElectric/getLayerList",getVacancyList:"/community/house_meter.MeterElectric/getVacancyList",uploadFile:"/community/house_meter.MeterElectric/uploadFile",getTongjiCount:"/community/house_meter.DataStatistics/getTongjiCount",getEleWarnList:"/community/house_meter.DataStatistics/getEleWarnList",powerConsumptionAnalysis:"/community/house_meter.DataStatistics/powerConsumptionAnalysis",deviceManage:"/community/house_meter.DataStatistics/deviceManage",powerConsumptionFeeAnalysis:"/community/house_meter.DataStatistics/powerConsumptionFeeAnalysis",getTongjiCountByCity:"/community/house_meter.DataStatistics/getTongjiCountByCity"};t["a"]=r},4622:function(e,t,i){"use strict";i("a5a7")},"85ed":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{width:400,visible:e.visible,footer:null,maskClosable:!1,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancel}},[i("a-spin",{staticStyle:{"margin-top":"30px"},attrs:{spinning:e.confirmLoading,height:800}},[i("span",[e._v(" 点击【继续】后将为你打开新网页登录企业微信，请在完成登录后回到本页面进行后续操作")]),i("div",{staticStyle:{"text-align":"-webkit-center"}},[e.is_hide?i("a",{attrs:{href:e.goUrl,target:"_blank",type:"primary",referrer:"unsafe-url"}},[i("a-button",{key:"console",staticStyle:{"margin-top":"18px"},attrs:{type:"primary"},on:{click:e.link}},[e._v(" 继续 ")])],1):e._e()]),e.is_show?i("a-button",{key:"console",staticStyle:{"margin-top":"19px","margin-left":"125px"},attrs:{type:"primary"},on:{click:e.getNewMessage}},[e._v(" 已完成登录 ")]):e._e()],1)],1)},c=[],o=(i("1a83"),i("ca00")),m=i("8bbf"),s=i.n(m),n=i("64e6"),l={data:function(){return{is_show:!1,is_hide:!0,visible:!1,confirmLoading:!1,register_title:"注册",type:1,randomNumber:"",goUrl:""}},methods:{add:function(){this.is_show=!1,this.is_hide=!0,this.visible=!0,this.type=2,this.register_title="注册",this.getUrl()},handleCancel:function(){this.visible=!1},getUrl:function(){var e=this;this.request(n["a"].qyLogin).then((function(t){t&&(console.log("res",t),e.randomNumber=t.randomNumber,""!=t.login_url?e.goUrl=t.login_url:e.goUrl=t.url)}))},link:function(){this.is_show=!0,this.is_hide=!1},getNewMessage:function(){var e=this,t="login";this.request(n["a"].getResult,{randomNumber:this.randomNumber,type:t}).then((function(t){if(console.log("res",t),1==t.login&&""!=t.ticket)e.is_show=!1,e.is_hide=!0,e.visible=!1,s.a.ls.set("property_access_token",t.ticket,null),Object(o["n"])("property_access_token",t.ticket,null),window.open(t.jump_url);else{var i="您还未授权登录，请完成授权登录后继续";e.$message.warning(i)}}))}}},u=l,a=(i("4622"),i("2877")),d=Object(a["a"])(u,r,c,!1,null,"02121ec8",null);t["default"]=d.exports},a5a7:function(e,t,i){}}]);