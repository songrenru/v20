(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45477ca6","chunk-2d0aaba6"],{"11f6":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAECAYAAACDQW/RAAAAAXNSR0IArs4c6QAAAEFJREFUKFNjZNUNSWf6z9Dyn/E/y/9/DAW/r65dyAAFpMgxsukGv2dkYBQA6/3P8ObnlTWiMINIkaOeQaQ4H5+3AV+sVK3HF5AUAAAAAElFTkSuQmCC"},"6ca1f":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"view_component"},[s("div",{staticClass:"single_desc"},[s("a-button",{staticClass:"margin_top_20",staticStyle:{transform:"translateX(20px)"},attrs:{type:"default"},on:{click:function(i){return t.goBack(0)}}},[t._v(" 返回 ")]),t._l(t.descList,(function(i,e){return s("div",{key:e,staticClass:"single_item"},[t._v(" "+t._s(i.key)+"："+t._s(i.value?i.value:"暂无")+" ")])}))],2),s("div",{staticClass:"unit_tab"},t._l(t.unitList,(function(i,e){return s("div",{key:e,staticClass:"tab_item",class:t.currentIndex==e?"active":"",on:{click:function(s){return t.changeTabs(i,e)}}},[t._v(" "+t._s(i.floor_name)+"单元 ")])})),0),s("div",{staticClass:"single_level"},[t._l(t.singleArr,(function(i,a){return t.noData?t._e():s("div",{key:a,staticClass:"level_item"},[s("div",{staticClass:"level_name"},[t._v(t._s(i.level))]),t._l(i.roomList,(function(i,a){return s("div",{key:a,staticClass:"room_item",on:{click:function(e){return t.goDetail(i)}}},[s("div",{staticClass:"right_content"},[s("div",{staticClass:"room_title"},[t._v(t._s(i.title))]),s("div",{staticClass:"room_status",class:1==i.pay_status?"status_yezhu":2==i.pay_status?"status_kongzhi":3==i.pay_status?"status_zuke":""},[t._v(" "+t._s(i.pay_status_txt)+" ")]),s("div",{staticClass:"room_edit"},[s("a-popover",{attrs:{title:"",placement:"right"}},[s("template",{slot:"content"},[s("a-icon",{attrs:{type:"edit"},on:{click:function(e){return t.showModel(i)}}})],1),s("img",{attrs:{src:e("11f6")}})],2)],1),s("div",{staticClass:"props_con"},t._l(i.roomProps,(function(i,e){return s("div",{key:e,staticClass:"props_item",style:{width:"欠费金额"==i.key?"75%":"45%"}},["欠费金额"!=i.key||i.value?s("span",{staticStyle:{"font-size":"10px"},style:{color:"欠费金额"==i.key?"red":""}},[s("a-tooltip",{attrs:{placement:"rightTop"}},[s("template",{slot:"title"},["户主"!=i.key&&"面积"!=i.key?s("span",[t._v(t._s(i.key)+"：")]):t._e(),t._v(" "+t._s(i.value?i.value:"暂无")+" ")]),"户主"!=i.key&&"面积"!=i.key?s("span",[t._v(t._s(i.key)+"：")]):t._e(),t._v(" "+t._s(i.value?i.value:"暂无")+" ")],2)],1):t._e()])})),0)])])}))],2)})),t.noData?s("div",{staticClass:"no_data",staticStyle:{width:"100%",height:"300px",display:"flex","align-items":"center","justify-content":"center","font-size":"20px",color:"#999999",position:"absolute"}},[t.dataLoading?s("span",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",color:"#999999"}},[s("a-icon",{attrs:{type:"loading"}}),t._v(" 加载中... ")],1):s("span",[t._v("暂无数据")])]):t._e()],2),s("a-modal",{attrs:{title:"修改房间状态",visible:t.visible,"confirm-loading":t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[s("span",[t._v("房间状态")]),s("a-radio-group",{staticStyle:{"margin-left":"20px"},attrs:{name:"radioGroup"},model:{value:t.pay_status,callback:function(i){t.pay_status=i},expression:"pay_status"}},[s("a-radio",{attrs:{value:1}},[t._v("业主入住")]),s("a-radio",{attrs:{value:3}},[t._v("租客入住")]),s("a-radio",{attrs:{value:2}},[t._v("空置")])],1)],1)],1)},a=[],n=(e("a9e3"),{props:{single_id:{type:Number,default:0}},data:function(){return{currentIndex:0,descList:[],unitList:[],singleArr:[],visible:!1,confirmLoading:!1,pay_status:1,dataLoading:!1,noData:!0}},mounted:function(){this.getUnitList(),this.getBuildingInfo()},methods:{changeTabs:function(t,i){this.currentIndex==i?console.log("重复"):(this.currentIndex=i,this.getRoomList(t.floor_id,t.single_id))},goBack:function(){this.$emit("goBack")},getUnitList:function(){var t=this;t.request("/community/village_api.cashier/getfloorList",{single_id:t.single_id},"post").then((function(i){i.length>0&&(t.unitList=i,t.getRoomList(i[0].floor_id,i[0].single_id),t.currentIndex)}))},getRoomList:function(t,i){var e=this;e.dataLoading=!0,e.singleArr=[],e.noData=!0,e.request("/community/village_api.cashier/getVacancyList",{single_id:i,floor_id:t},"post").then((function(t){e.dataLoading=!1,t.length>0?(e.noData=!1,e.singleArr=t):e.noData=!0})).catch((function(t){e.dataLoading=!1}))},goDetail:function(t){var i={};t.pigcms_id&&(i.pigcms_id=t.pigcms_id),t.key[3]&&(i.room_id=[t.key[3]+"|"+t.title+"|room"]),t.key.length>0&&(i.room_key=t.key),i.back_type=1,this.$emit("roomInfo",i)},getBuildingInfo:function(){var t=this;t.request("/community/village_api.Aockpit/getBuildingInfo",{single_id:t.single_id},"post").then((function(i){t.descList=i.list}))},handleOk:function(t){this.confirmLoading=!0;var i=this;i.request("/community/village_api.Cashier/setVacancyPayStatus",{room_id:i.room_id,pay_status:i.pay_status},"post").then((function(t){i.$message.success("修改成功！"),i.getRoomList(i.unitList[i.currentIndex].floor_id,i.unitList[i.currentIndex].single_id),i.confirmLoading=!1,i.visible=!1}))},handleCancel:function(t){this.visible=!1},showModel:function(t){console.log(t),this.pay_status=t.pay_status,this.room_id=t.key[3],this.visible=!0}}}),o=n,l=(e("dfc2"),e("0c7c")),c=Object(l["a"])(o,s,a,!1,null,"caa93a1e",null);i["default"]=c.exports},dfc2:function(t,i,e){"use strict";e("e751")},e751:function(t,i,e){}}]);