(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c20dc"],{4956:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"charging_standard"},[n("a-table",{attrs:{"row-key":function(e){return e.add_time},pagination:e.pageInfo,columns:e.chargeColumns,loading:e.tableLoading,"data-source":e.tableList},on:{change:e.tableChange},scopedSlots:e._u([{key:"file_url",fn:function(t,a){return n("span",{},[0==a.status?n("a",{on:{click:function(t){return e.goUrl(a.file_url)}}},[e._v("点击查看")]):n("span",[e._v("--")])])}},{key:"duration",fn:function(t,a){return n("span",{},[e._v(" "+e._s(a.duration)+"s ")])}},{key:"status",fn:function(t,a){return n("span",{},[n("span",{style:{color:0==a.status?"red":"green"}},[e._v(e._s(0==a.status?"存在导入失败的数据":"导入成功"))])])}}])})],1)},o=[],u=n("8bbf"),i=n.n(u),l=n("ed09"),r=Object(l["c"])({props:{type:{type:String,default:""}},setup:function(e,t){var n=Object(l["h"])([]),a=Object(l["h"])({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0}),o=Object(l["h"])([]),u=Object(l["h"])(!1);Object(l["f"])((function(){s()}));var r=function(e){var t=e.pageSize,n=e.current;a.value.current=n,a.value.pageSize=t,s()},s=function(){u.value=!0,i.a.prototype.request("/community/common.BillExcel/getVillageImportRecord",{tokenName:"village_access_token",type:e.type,page:a.value.current,limit:a.value.pageSize}).then((function(e){o.value=e.list,a.value.total=e.count,u.value=!1})).catch((function(e){u.value=!1}))};n.value=[{title:"文件名称",dataIndex:"file_name",key:"file_name"},{title:"详情",dataIndex:"file_url",key:"file_url",scopedSlots:{customRender:"file_url"}},{title:"时长",dataIndex:"duration",key:"duration",scopedSlots:{customRender:"duration"}},{title:"结果",dataIndex:"import_msg",key:"import_msg"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"时间",dataIndex:"add_time",key:"add_time"}];var c=function(e){window.open(e)};return{chargeColumns:n,pageInfo:a,tableList:o,tableLoading:u,getRecordList:s,tableChange:r,goUrl:c}}}),s=r,c=n("2877"),d=Object(c["a"])(s,a,o,!1,null,"b87be6f2",null);t["default"]=d.exports}}]);