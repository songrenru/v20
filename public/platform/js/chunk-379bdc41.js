(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-379bdc41"],{b925:function(t,e,a){},f2b5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-drawer",{attrs:{width:1e3,visible:t.visible},on:{close:t.handleSubCancel}},[e("div",[e("a-tabs",{attrs:{"default-active-key":"1"}},[e("a-tab-pane",{key:"1"},[e("span",{attrs:{slot:"tab"},slot:"tab"},[e("a-icon",{attrs:{type:"alert"}}),t._v(" 详细日志 ")],1),e("div",[e("p",[t._v("注意：这套识别程序的数据库是免费IP数据库、IP离线地址库，因此有误差、获取不到一些数据在所难免。仅供参考作用。")])]),e("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"main"},[e("a-descriptions",{attrs:{size:"small",column:2}},[e("a-descriptions-item",{attrs:{label:"操作时间"}},[t._v(" "+t._s(t.logExtend.add_time)+" ")]),e("a-descriptions-item",{attrs:{label:"操作来源"}},[t._v(" "+t._s(t.logExtend.country)+" ")]),e("a-descriptions-item",{attrs:{label:"操作账号"}},[t._v(" "+t._s(t.logExtend.account)+" ")]),e("a-descriptions-item",{attrs:{label:"账号名称"}},[t._v(" "+t._s(t.logExtend.realname)+" ")]),e("a-descriptions-item",{attrs:{label:"省份"}},[t._v(" "+t._s(t.logExtend.province)+" ")]),e("a-descriptions-item",{attrs:{label:"城市"}},[t._v(" "+t._s(t.logExtend.city)+" ")]),e("a-descriptions-item",{attrs:{label:"浏览器"}},[t._v(" "+t._s(t.logExtend.browser_name)+" ")]),e("a-descriptions-item",{attrs:{label:"浏览器版本"}},[t._v(" "+t._s(t.logExtend.browser_version)+" ")]),e("a-descriptions-item",{attrs:{label:"操作系统"}},[t._v(" "+t._s(t.logExtend.os)+" ")]),e("a-descriptions-item",{attrs:{label:"操作系统版本"}},[t._v(" "+t._s(t.logExtend.os_version)+" ")]),e("a-descriptions-item",{attrs:{label:"ISP"}},[t._v(" "+t._s(t.logExtend.isp)+" ")]),e("a-descriptions-item",{attrs:{label:"model"}},[t._v(" "+t._s(t.logExtend.model)+" ")]),e("a-descriptions-item",{attrs:{label:"制造商"}},[t._v(" "+t._s(t.logExtend.manufacturer)+" ")]),e("a-descriptions-item",{attrs:{label:"备注"}},[e("a",[t._v(" "+t._s(t.logExtend.reson))])])],1)],1)])])],1)],1),e("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[e("a-button",{style:{marginRight:"8px"},on:{click:t.handleSubCancel}},[t._v("关闭页面")])],1)],1)])},s=[],n=(a("19f1"),a("a0e0")),l={props:{visible:{type:Boolean,default:!1},log_fid:{type:Number,default:0}},watch:{visible:{handler:function(t){this.getDetailInfo()}}},data:function(){return{logExtend:[]}},methods:{countChange:function(){},getDetailInfo:function(){var t=this;t.log_fid&&t.request(n["a"].villageLoginLogDetailApi,{log_fid:t.log_fid}).then((function(e){t.logExtend=e.logInfo}))},handleSubCancel:function(t){this.$emit("closeDrawer",!1)},handleCodeCancel:function(){}}},o=l,r=(a("f6a4"),a("0b56")),d=Object(r["a"])(o,i,s,!1,null,"0b8d19a5",null);e["default"]=d.exports},f6a4:function(t,e,a){"use strict";a("b925")}}]);