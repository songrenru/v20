(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212fb1"],{ab71:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"parking_space"},[a("a-table",{attrs:{pagination:e.pageInfo,columns:e.paymentTitle,loading:e.tableLoading,"data-source":e.paymentData},on:{change:e.tableChange}})],1)},i=[],c=(a("a9e3"),a("8bbf")),l=a.n(c),o=a("ed09"),r=Object(o["c"])({props:{roomParams:{type:Object,default:function(){return{}}},roomId:{type:[String,Number],defalut:""}},setup:function(e,t){var a=Object(o["h"])([]),n=Object(o["h"])([]),i=Object(o["h"])(!1);a.value=[{title:"收费标准",dataIndex:"charge_name",key:"charge_name"},{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"所属收费科目",dataIndex:"subject_name",key:"subject_name"},{title:"应收费用",dataIndex:"total_money",key:"total_money"},{title:"账单生成时间",dataIndex:"add_time",key:"add_time"},{title:"上次止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"本次度数",dataIndex:"now_ammeter",key:"now_ammeter"},{title:"审核状态",dataIndex:"check_status",key:"check_status"},{title:"计费开始时间",dataIndex:"service_start_time",key:"service_start_time"},{title:"计费结束时间",dataIndex:"service_end_time",key:"service_end_time"}];var c=Object(o["h"])({pageSize:10,current:1,type:1,total:0,pageSizeOptions:["10","20","30","40","50","60","70","80","90","100"],showSizeChanger:!0});Object(o["f"])((function(){d()}));var r=function(e){var t=e.pageSize,a=e.current;c.value.current=a,c.value.pageSize=t,d()},u=function(e){l.a.prototype.$confirm({title:"提示",content:"确定要删除此项吗？",onOk:function(){l.a.prototype.request("/community/village_api.cashier/delChargeStandardBind",{charge_standard_bind_id:e.bind_id}).then((function(e){l.a.prototype.$message.success("删除成功！"),c.value.current=1,c.value.pageSize=10,d()}))},onCancel:function(){}})},d=function(){i.value=!0,l.a.prototype.request("/community/village_api.Building/getRoomBindBillList",{vacancy_id:e.roomId,page:c.value.current,limit:c.value.pageSize,type:1}).then((function(e){n.value=e.list,c.value.total=e.count,i.value=!1})).catch((function(e){i.value=!1}))};return{paymentTitle:a,paymentData:n,getPaymentBill:d,deleteBill:u,tableLoading:i,tableChange:r,pageInfo:c}}}),u=r,d=a("2877"),s=Object(d["a"])(u,n,i,!1,null,"3fa16e85",null);t["default"]=s.exports}}]);