(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c8f0"],{f46b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"报警记录",width:850,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[a("a-table",{attrs:{rowKey:function(e){return e.id},loading:e.tableLoading,pagination:e.pageInfo,columns:e.columns,"data-source":e.tableList},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"pictureUrl",fn:function(t,i){return[i.picture_url?a("viewer",{attrs:{images:[i.picture_url]}},[a("img",{staticStyle:{width:"50px",height:"50px","border-radius":"5px"},attrs:{src:i.picture_url}})]):a("span",[e._v("暂无")])]}}])})],1)},n=[],l=(a("a9e3"),a("8bbf")),c=a.n(l),r=(a("0808"),a("6944")),s=a.n(r);c.a.use(s.a);var o=[{title:"设备名称",dataIndex:"device_name",key:"device_name"},{title:"设备通道名称",key:"channel_name",dataIndex:"channel_name"},{title:"设备类型",key:"device_type",dataIndex:"device_type"},{title:"图片URL",key:"picture_url",dataIndex:"picture_url",scopedSlots:{customRender:"pictureUrl"}},{title:"备注",key:"event_remark",dataIndex:"event_remark"}],u={props:{visible:{type:Boolean,default:!1},device_id:{type:[String,Number],default:""}},watch:{visible:{handler:function(e){e&&this.device_id&&(this.tableList=[],this.pageInfo.current=1,this.pageInfo.page=1,this.pageInfo.total=0,this.getTableList())},immediate:!0}},data:function(){return{tableLoading:!1,tableList:[],pageInfo:{page:1,current:1,pageSize:10,total:0},columns:o}},methods:{handleCancel:function(){this.$emit("close")},getTableList:function(){var e=this;this.tableLoading=!0;var t={};Object.assign(t,this.pageInfo),t.device_id=this.device_id,this.request("/community/village_api.AlarmDevice/getDeviceAlarmEventList",t).then((function(t){e.tableLoading=!1,e.tableList=t.alarm_list,e.pageInfo.total=t.count})).catch((function(t){e.tableLoading=!1,e.$emit("close")}))},handleTableChange:function(e,t,a){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.pageInfo.pageSize=e.pageSize,this.getTableList()}}},d=u,p=a("2877"),h=Object(p["a"])(d,i,n,!1,null,"1c93fa24",null);t["default"]=h.exports}}]);