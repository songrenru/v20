(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c2cf725"],{"113a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-box-1"},[a("div",[a("a-collapse",[a("a-collapse-panel",{attrs:{header:"注意事项"}},[a("p",[t._v("目前已知情况如下")]),a("p",[t._v("1、目前大华-指纹锁的指纹数据需要到大华云睿平台进行录入，设备添加成功后会进行获取下发")])])],1)],1),a("div",{staticClass:"add-box"},[a("a-row",[a("a-col",{attrs:{md:8,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.addFingerprintDevice.add()}}},[t._v(" 添加指纹锁 ")])],1)],1)],1),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"padding-tp10",staticStyle:{width:"250px","padding-right":"1px"},attrs:{md:8,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("指纹器编号：")]),t._v(" "),a("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入指纹器编号"},model:{value:t.search.device_sn,callback:function(e){t.$set(t.search,"device_sn",e)},expression:"search.device_sn"}})],1)],1),a("a-col",{staticClass:"padding-tp10",staticStyle:{width:"250px","padding-right":"1px"},attrs:{md:8,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("指纹器名称：")]),t._v(" "),a("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入指纹器名称"},model:{value:t.search.device_name,callback:function(e){t.$set(t.search,"device_name",e)},expression:"search.device_name"}})],1)],1),a("a-col",{staticClass:"padding-tp10",attrs:{md:8,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.addFingerprintDevice.edit(i.device_id)}}},[t._v("修改设备")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px"},attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.del_device(i.device_id)}}},[a("a",[t._v("删除")])])],1)}}])}),a("add-fingerprint-device",{ref:"addFingerprintDevice",on:{ok:t.getList}})],1)},n=[],c=(a("ac1f"),a("841c"),a("76c1")),s=a("a507"),r=[{title:"指纹锁ID",dataIndex:"device_id",key:"device_id"},{title:"指纹锁名称",dataIndex:"device_name",key:"camera_name"},{title:"指纹锁编号SN",dataIndex:"device_sn",key:"device_sn"},{title:"指纹锁品牌",dataIndex:"brand_txt",key:"brand_txt"},{title:"添加时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"操作",dataIndex:"",scopedSlots:{customRender:"action"},key:"action",width:"300px"}],d=[],o={name:"fingerprintDeviceList",components:{addFingerprintDevice:s["default"]},data:function(){return{pagination:{pageSize:10,total:10,current:1},search:{device_sn:"",device_name:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:d,columns:r,page:1}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.request(c["a"].getFingerprintDeviceList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.pageSize?e.pageSize:10,t.data=e.list,t.loading=!1}))},del_device:function(t){var e=this;this.request(c["a"].fingerprintDeviceDeleteDevice,{device_id:t}).then((function(t){e.$message.success("删除成功"),e.getList()}))},table_change:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={camera_sn:"",device_name:"",page:1},this.table_change({current:1,pageSize:10,total:10})}}},l=o,p=(a("ff15"),a("0c7c")),u=Object(p["a"])(l,i,n,!1,null,"89985604",null);e["default"]=u.exports},d27c:function(t,e,a){},ff15:function(t,e,a){"use strict";a("d27c")}}]);