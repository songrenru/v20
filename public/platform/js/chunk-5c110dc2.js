(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c110dc2"],{"2b77":function(t,e,a){},"701e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{width:1e3,visible:t.visible},on:{close:t.handleSubCancel}},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"highlight"}}),t._v(" 变更详细 ")],1),a("a-table",{attrs:{columns:t.infoColumns,"data-source":t.list,rowKey:"id"}})],1),a("a-tab-pane",{key:"2"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"alert"}}),t._v(" 操作源 ")],1),a("div",[a("p",[t._v("注意：这套识别程序的数据库是免费IP数据库、IP离线地址库，因此有误差、获取不到一些数据在所难免。仅供参考作用。")])]),a("a-descriptions",{attrs:{size:"small",column:2}},[a("a-descriptions-item",{attrs:{label:"操作时间"}},[t._v(" "+t._s(t.logExtend.add_time)+" ")]),a("a-descriptions-item",{attrs:{label:"操作来源"}},[t._v(" "+t._s(t.logExtend.country)+" ")]),a("a-descriptions-item",{attrs:{label:"操作账号"}},[t._v(" "+t._s(t.logExtend.account)+" ")]),a("a-descriptions-item",{attrs:{label:"账号名称"}},[t._v(" "+t._s(t.logExtend.realname)+" ")]),a("a-descriptions-item",{attrs:{label:"省份"}},[t._v(" "+t._s(t.logExtend.province)+" ")]),a("a-descriptions-item",{attrs:{label:"城市"}},[t._v(" "+t._s(t.logExtend.city)+" ")]),a("a-descriptions-item",{attrs:{label:"浏览器"}},[t._v(" "+t._s(t.logExtend.browser_name)+" ")]),a("a-descriptions-item",{attrs:{label:"浏览器版本"}},[t._v(" "+t._s(t.logExtend.browser_version)+" ")]),a("a-descriptions-item",{attrs:{label:"操作系统"}},[t._v(" "+t._s(t.logExtend.os)+" ")]),a("a-descriptions-item",{attrs:{label:"操作系统版本"}},[t._v(" "+t._s(t.logExtend.os_version)+" ")]),a("a-descriptions-item",{attrs:{label:"ISP"}},[t._v(" "+t._s(t.logExtend.isp)+" ")]),a("a-descriptions-item",{attrs:{label:"model"}},[t._v(" "+t._s(t.logExtend.model)+" ")]),a("a-descriptions-item",{attrs:{label:"制造商"}},[t._v(" "+t._s(t.logExtend.manufacturer)+" ")]),a("a-descriptions-item",{attrs:{label:"备注"}},[a("a",[t._v(" "+t._s(t.logExtend.reson))])])],1)],1)],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:t.handleSubCancel}},[t._v("关闭页面")])],1)],1)])},l=[],s=(a("a9e3"),a("a0e0")),n=[{title:"变更字段",dataIndex:"field",key:"field"},{title:"变更前值",dataIndex:"old_val",key:"old_val"},{title:"变更后值",dataIndex:"new_val",key:"new_val"}],o={props:{visible:{type:Boolean,default:!1},log_fid:{type:Number,default:0}},watch:{visible:{handler:function(t){this.getDetailInfo()}}},data:function(){return{infoColumns:n,list:[],logExtend:[]}},methods:{countChange:function(){},getDetailInfo:function(){var t=this;t.log_fid&&t.request(s["a"].villageSettingLogDetailApi,{log_fid:t.log_fid}).then((function(e){t.list=e.logInfo,t.logExtend=e.logExtend}))},handleSubCancel:function(t){this.$emit("closeDrawer",!1)},handleCodeCancel:function(){}}},d=o,r=(a("d711"),a("0c7c")),c=Object(r["a"])(d,i,l,!1,null,"2ae8ffc2",null);e["default"]=c.exports},d711:function(t,e,a){"use strict";a("2b77")}}]);