(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1747ee52","chunk-ae08dd42","chunk-6386eda8","chunk-2d0c06af"],{"01f0":function(t,e,a){"use strict";a("73d5")},4261:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[t._v(" Open the message box ")])},o=[],i={downloadExportFile:"/common/common.export/downloadExportFile"},s=i,n="updatable",l={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(a){t.$message.loading({content:e,key:n,duration:0}),console.log("添加导出计划任务成功"),t.file_url=s.downloadExportFile+"?id="+a.export_id,t.file_date=a,t.CheckStatus()}))},CheckStatus:function(){var t=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(e){0==e.error?(t.$message.success({content:"下载成功!",key:n,duration:2}),location.href=e.url):setTimeout((function(){t.CheckStatus(),console.log("重复请求")}),1e3)}))}}},d=l,u=a("2877"),c=Object(u["a"])(d,r,o,!1,null,"dd2f8128",null);e["default"]=c.exports},"4c5b":function(t,e,a){"use strict";a("b81e")},"721e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:350,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[a("div",{staticClass:"content"},[a("div",{staticClass:"code-box"},[a("div",{staticClass:"code"},[t.h5Qrcode?a("img",{attrs:{src:t.h5Qrcode}}):t._e()])])])])},o=[],i=(a("ea1d"),{components:{},data:function(){return{title:"查看网址二维码",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,image:"",visible:!1,h5Qrcode:""}},mounted:function(){},methods:{showModal:function(t){this.visible=!0,this.id=IDBCursor,this.qrcodeUrl=t,this.getH5Code()},getH5Code:function(){var t=encodeURIComponent(this.qrcodeUrl);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+t},handleCancel:function(){this.visible=!1}}}),s=i,n=(a("8dd0"),a("2877")),l=Object(n["a"])(s,r,o,!1,null,"7310db8a",null);e["default"]=l.exports},"73d5":function(t,e,a){},"8a11":function(t,e,a){"use strict";var r={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};e["a"]=r},"8dd0":function(t,e,a){"use strict";a("df21")},b81e:function(t,e,a){},c5e6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-card",{attrs:{bordered:!1}},[a("a-tabs",{attrs:{"default-active-key":"1"},on:{change:t.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"优惠组合"}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{staticClass:"form-content",attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:1}},[a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"组合类型："}},[a("a-select",{staticStyle:{width:"110px"},attrs:{"default-value":"queryParam.cat_id"},model:{value:t.queryParam.cat_id,callback:function(e){t.$set(t.queryParam,"cat_id",e)},expression:"queryParam.cat_id"}},t._l(t.catArr,(function(e){return a("a-select-option",{key:e.cat_id,attrs:{value:e.cat_id}},[t._v(t._s(e.cat_name))])})),1)],1)],1),a("a-col",{attrs:{md:10}},[a("a-form-item",[a("a-select",{staticStyle:{width:"110px"},attrs:{"default-value":"queryParam.time_type"},model:{value:t.queryParam.time_type,callback:function(e){t.$set(t.queryParam,"time_type",e)},expression:"queryParam.time_type"}},[a("a-select-option",{attrs:{value:"start_time"}},[t._v("开始时间")]),a("a-select-option",{attrs:{value:"end_time"}},[t._v("结束时间")])],1),a("a-range-picker",{attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(e){t.search_data=e},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),a("a-col",{attrs:{md:7}},[a("a-form-item",{attrs:{label:"手动搜索："}},[a("a-input",{staticStyle:{width:"235px"},attrs:{"allow-clear":"",placeholder:"请输入优惠组合名称"},model:{value:t.queryParam.keyword,callback:function(e){t.$set(t.queryParam,"keyword",e)},expression:"queryParam.keyword"}})],1)],1),a("a-col",{attrs:{md:3}},[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchBtn()}}},[t._v("查询")])],1)],1)],1),a("div",{staticClass:"message-suggestions-list-box"},[a("div",{staticClass:"button-content"},[a("router-link",{attrs:{slot:"groupCombine",to:{path:"/group/platform.groupCombine/edit"}},slot:"groupCombine"},[a("a-button",{attrs:{type:"primary"}},[t._v("添加优惠组合")])],1)],1),a("a-table",{staticClass:"components-table-demo-nested",staticStyle:{"min-height":"700px"},attrs:{columns:t.columns,"data-source":t.data,rowKey:"combine_id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"detail_url",fn:function(e){return a("span",{},[a("a",{staticClass:"ant-btn-link pointer",on:{click:function(a){return t.$refs.SeeH5QrcodeModal.showModal(e)}}},[t._v("查看二维码")])])}},{key:"start_time",fn:function(e,r){return a("span",{},[t._v(" "+t._s(e)+"至"+t._s(r.end_time)+" ")])}},{key:"can_use_day",fn:function(e,r){return a("span",{},[t._v(" "+t._s(e)+"天 ")])}},{key:"action",fn:function(e,r){return a("span",{},[a("router-link",{attrs:{slot:"groupCombine",to:{path:"/group/platform.groupCombine/edit",query:{id:r.combine_id}}},slot:"groupCombine"},[a("a-button",{attrs:{type:"link"}},[t._v("编辑")])],1),t._v(" | "),a("router-link",{attrs:{slot:"groupCombine",to:{path:"/group/platform.groupCombine/editRobot",query:{id:r.combine_id}}},slot:"groupCombine"},[a("a-button",{attrs:{type:"link"}},[t._v("机器人")])],1)],1)}}])})],1)],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"优惠组合订单","force-render":""}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{staticClass:"form-content",attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:3}},[a("a-col",{attrs:{md:11}},[a("a-form-item",[a("a-select",{staticStyle:{width:"110px"},attrs:{"default-value":"orderQueryParam.time_type"},model:{value:t.orderQueryParam.time_type,callback:function(e){t.$set(t.orderQueryParam,"time_type",e)},expression:"orderQueryParam.time_type"}},[a("a-select-option",{attrs:{value:"add_time"}},[t._v("下单时间")]),a("a-select-option",{attrs:{value:"pay_time"}},[t._v("支付时间")])],1),a("a-range-picker",{attrs:{allowClear:!0},on:{change:t.orderdateOnChange},model:{value:t.search_data_order,callback:function(e){t.search_data_order=e},expression:"search_data_order"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("a-form-item",{attrs:{label:"支付方式："}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":"orderQueryParam.pay_type"},model:{value:t.orderQueryParam.pay_type,callback:function(e){t.$set(t.orderQueryParam,"pay_type",e)},expression:"orderQueryParam.pay_type"}},t._l(t.payTypeArr,(function(e){return a("a-select-option",{key:e.key,attrs:{value:e.key}},[t._v(t._s(e.name))])})),1)],1)],1),a("a-col",{style:{textAlign:"right"},attrs:{md:4,span:8}},[a("a-button",{attrs:{icon:"download"},on:{click:function(e){return t.$refs.ExportAddModal.exports()}}},[t._v("导出订单")])],1)],1),a("a-row",{attrs:{gutter:2}},[a("a-col",{attrs:{md:11,sm:12}},[a("a-form-item",{attrs:{label:""}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"110px"},model:{value:t.orderQueryParam.searchtype,callback:function(e){t.$set(t.orderQueryParam,"searchtype",e)},expression:"orderQueryParam.searchtype"}},t._l(t.search_keyword,(function(e){return a("a-select-option",{key:e.key,attrs:{value:e.key}},[t._v(t._s(e.value))])})),1),a("a-input",{staticStyle:{width:"273px"},attrs:{"allow-clear":""},model:{value:t.orderQueryParam.keyword,callback:function(e){t.$set(t.orderQueryParam,"keyword",e)},expression:"orderQueryParam.keyword"}})],1)],1)],1),a("a-col",{attrs:{md:3,sm:12}},[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchOrderBtn()}}},[t._v("查询")])],1)],1)],1),a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",staticStyle:{"min-height":"700px"},attrs:{columns:t.orderColumns,"data-source":t.orderList,rowKey:"order_id",pagination:t.orderPagination},on:{change:t.orderTableChange},scopedSlots:t._u([{key:"combine_id",fn:function(e,r){return a("span",{},[t._v(" 优惠组合ID： "+t._s(r.combine_id)+" 优惠组合价： ￥"+t._s(r.total_money)+" 优惠组合名称： "+t._s(r.title)+" ")])}},{key:"add_time_str",fn:function(e,r){return a("span",{},[t._v(" 下单时间： "+t._s(r.add_time_str)+" "),r.pay_time_str?a("span",[a("br"),t._v("付款时间： "+t._s(r.pay_time_str))]):t._e()])}},{key:"num",fn:function(e,r){return a("span",{},[t._v(" 数量： "+t._s(r.num)+" 总价： ￥"+t._s(r.total_money)+" ")])}},{key:"phone",fn:function(e,r){return a("span",{},[t._v(" 用户名： "+t._s(r.nickname)+" "),a("br"),t._v("订单手机号： "+t._s(r.phone)+" ")])}},{key:"action",fn:function(e,r){return a("span",{},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.OrderDetailModal.show(r.order_id)}}},[t._v("查看详情")])],1)}}])})],1)],1)],1)],1),a("export-add",{ref:"ExportAddModal",attrs:{exportUrl:t.exportUrl,queryParam:t.orderQueryParam}}),a("see-h5-qrcode",{ref:"SeeH5QrcodeModal"}),a("order-detail",{ref:"OrderDetailModal"})],1)],1)},o=[],i=a("8a11"),s=a("4261"),n=a("721e"),l=a("e9e6"),d=(a("e37c"),a("c1df")),u=a.n(d),c=(a("8bbf"),[]),p={name:"GroupCombineList",components:{ExportAdd:s["default"],OrderDetail:l["default"],SeeH5Qrcode:n["default"]},data:function(){return{catArr:[],treeData:[],exportUrl:i["a"].exportCombineOrder,baseUrl:"/v20/public/platform/#",queryParam:{time_type:"start_time",cat_id:"-1",start_time:"",end_time:""},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-quick-jumper":!0},editingKey:"",page:1,columns:[{title:"编号",dataIndex:"combine_id",width:"8%"},{title:"优惠组合名称",dataIndex:"title",width:"15%"},{title:"优惠组合类型",dataIndex:"cat_name",width:"12%"},{title:"查看二维码",dataIndex:"detail_url",scopedSlots:{customRender:"detail_url"},width:"10%"},{title:"销量",dataIndex:"sell_count",width:"5%"},{title:"优惠组合活动时间",dataIndex:"start_time",width:"15%",scopedSlots:{customRender:"start_time"}},{title:"优惠组合有效期",dataIndex:"can_use_day",width:"12%",scopedSlots:{customRender:"can_use_day"}},{title:"状态",dataIndex:"status",width:"5%",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"action",width:"25%",scopedSlots:{customRender:"action"}}],data:c,search_data:[void 0,void 0],orderColumns:[{title:"订单编号",dataIndex:"real_orderid",width:"15%"},{title:"优惠组合信息",dataIndex:"combine_id",width:"15%",scopedSlots:{customRender:"combine_id"}},{title:"订单信息",dataIndex:"num",width:"15%",scopedSlots:{customRender:"num"}},{title:"订单状态",dataIndex:"status_str",width:"15%"},{title:"创建时间",dataIndex:"add_time_str",width:"15%",scopedSlots:{customRender:"add_time_str"}},{title:"订单用户",dataIndex:"phone",width:"15%",scopedSlots:{customRender:"phone"}},{title:"订单有效期",dataIndex:"can_use_end_time",width:"15%"},{title:"操作",dataIndex:"action",width:"8%",scopedSlots:{customRender:"action"}}],payTypeArr:[],orderList:[],orderQueryParam:{time_type:"add_time",start_time:"",end_time:"",searchtype:"real_orderid",pay_type:"-1"},orderPagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-quick-jumper":!0},search_data_order:[void 0,void 0],search_keyword:[{key:"real_orderid",value:"订单编号"},{key:"title",value:"优惠组合名称"}]}},created:function(){},activated:function(){this.getList(),this.getCategoryList()},mounted:function(){this.getList(),this.getCategoryList()},methods:{moment:u.a,getList:function(){var t=this;this.queryParam["page"]=this.page,this.request(i["a"].groupCombineList,this.queryParam).then((function(e){t.data=e.list,t.pagination.total=e.count}))},getOrderList:function(){var t=this;this.orderQueryParam["page"]=this.orderPage,this.request(i["a"].getGroupCombineOrderList,this.orderQueryParam).then((function(e){t.orderList=e.list,t.orderPagination.total=e.count}))},getCategoryList:function(){var t=this;this.request(i["a"].getGroupFirstCategorylist).then((function(e){var a={cat_id:"-1",cat_name:"全部"},r={cat_id:"0",cat_name:"其他"};e.unshift(a),e.push(r),t.catArr=e,console.log(t.catArr,"this.catArr")}))},getpayMethodList:function(){var t=this;this.request(i["a"].getPayMethodList).then((function(e){var a={key:"",name:"余额支付"};e.unshift(a);a={key:"-1",name:"全部"};e.unshift(a),t.payTypeArr=e,console.log(t.payTypeArr,"this.payTypeArr")}))},searchBtn:function(){this.page=1,this.getList()},searchOrderBtn:function(){this.orderPage=1,this.getOrderList()},tableChange:function(t,e,a){this.queryParam["pageSize"]=t.pageSize,this.queryParam["page"]=t.current,t.current&&t.current>0&&(this.page=t.current),this.getList()},orderTableChange:function(t,e,a){console.log(t,"eeeeeee"),this.orderQueryParam["pageSize"]=t.pageSize,this.orderQueryParam["page"]=t.current,t.current&&t.current>0&&(this.orderPage=t.current),this.getOrderList()},dateOnChange:function(t,e){this.queryParam.start_time=e[0],this.queryParam.end_time=e[1]},orderdateOnChange:function(t,e){this.orderQueryParam.start_time=e[0],this.orderQueryParam.end_time=e[1]},callback:function(t){console.log(t,"callback"),"1"==t?(this.getCategoryList(),this.getList()):(this.getOrderList(),this.getpayMethodList())}}},m=p,g=(a("01f0"),a("2877")),_=Object(g["a"])(m,r,o,!1,null,"5a259a06",null);e["default"]=_.exports},df21:function(t,e,a){},e9e6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,confirmLoading:t.confirmLoading,destroyOnClose:!0},on:{cancel:t.handleCancel}},[a("div",{staticClass:"detail-content"},[a("a-card",{attrs:{title:"基本信息",bordered:!1}},[a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:8}},[t._v(" 订单编号 ")]),a("a-col",{attrs:{span:16}},[t._v(" "+t._s(t.detail.real_orderid)+" ")])],1),a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:8}},[t._v("订单名称 ")]),a("a-col",{attrs:{span:16}},[t._v(" "+t._s(t.detail.order_name)+" ")])],1)],1),a("a-card",{attrs:{title:"订单信息",bordered:!1}},[a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 订单类型 ")]),a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.order_type)+" ")]),a("a-col",{staticClass:"table-title left-border",attrs:{span:6}},[t._v(" 订单状态 ")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.detail.order_status))])],1),a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 数量 ")]),a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.num)+" ")]),a("a-col",{staticClass:"table-title left-border",attrs:{span:6}},[t._v(" 总价 ")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.detail.total_money))])],1),a("a-row",[t.detail.add_time?a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 下单时间 ")]):t._e(),t.detail.add_time?a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.add_time)+" ")]):t._e(),t.detail.pay_time?a("a-col",{staticClass:"table-title left-border",attrs:{span:6}},[t._v(" 付款时间 ")]):t._e(),t.detail.pay_time?a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.pay_time)+" ")]):t._e()],1),a("a-row",[t.detail.can_use_day?a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 优惠组合有效期 ")]):t._e(),t.detail.can_use_day?a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.can_use_day)+" 天")]):t._e(),t.detail.can_use_end_time?a("a-col",{staticClass:"table-title left-border",attrs:{span:6}},[t._v(" 订单有效期 ")]):t._e(),t.detail.can_use_end_time?a("a-col",{attrs:{span:6}},[t._v(t._s(t.detail.can_use_end_time))]):t._e()],1),a("a-row",[t.detail.can_use_count?a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 总核销次数 ")]):t._e(),t.detail.can_use_count?a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.can_use_count)+" ")]):t._e(),t.detail.can_use_count?a("a-col",{staticClass:"table-title left-border",attrs:{span:6}},[t._v(" 未使用核销次数 ")]):t._e(),t.detail.can_use_count?a("a-col",{attrs:{span:6}},[t._v(t._s(t.detail.now_use_count))]):t._e()],1)],1),t.detail.is_group_combine&&3!=t.detail.status&&4!=t.detail.status?a("a-card",{attrs:{title:"消费记录",bordered:!1}},[t.detail.is_group_combine?a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:24}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.orderColumns,"data-source":t.detail.has_used_goods,rowKey:"order_id",pagination:!1}})],1)],1):t._e()],1):t._e(),a("a-card",{attrs:{title:"用户信息",bordered:!1}},[a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 用户ID ")]),a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.uid)+" ")]),a("a-col",{staticClass:"table-title left-border",attrs:{span:6}},[t._v(" 用户昵称 ")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.detail.nickname))])],1),a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 订单手机号 ")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.detail.phone)+" ")]),a("a-col",{staticClass:"table-title left-border",attrs:{span:6}},[t._v(" 用户手机号 ")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.detail.phone))])],1)],1),1==t.detail.paid?a("a-card",{attrs:{title:"支付信息",bordered:!1}},[a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 支付方式 ")]),a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.pay_type_str)+" ")])],1),t.detail.card_discount>0?a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 商家会员卡折扣 ")]),a("a-col",{attrs:{span:6}},[t._v(" "+t._s(t.detail.card_discount)+"折 ")])],1):t._e(),t.detail.use_ecard_price>0?a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 平台E卡支付 ")]),a("a-col",{attrs:{span:6}},[t._v(" ¥"+t._s(t.detail.use_ecard_price)+" ")])],1):t._e(),t.detail.balance_pay>0?a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 余额支付金额 ")]),a("a-col",{attrs:{span:6}},[t._v(" ¥"+t._s(t.detail.balance_pay)+" ")])],1):t._e(),t.detail.payment_money>0?a("a-row",[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 在线支付金额 ")]),a("a-col",{attrs:{span:6}},[t._v(" ¥"+t._s(t.detail.payment_money)+" ")])],1):t._e()],1):t._e(),3!=t.detail.status&&4!=t.detail.status?a("a-card",{attrs:{title:"订单操作",bordered:!1}},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-col",{staticClass:"table-title",attrs:{span:6}},[t._v(" 备注 ")]),a("a-col",{staticClass:"table-title flex",attrs:{span:18}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticStyle:{width:"60%"}},[a("a-textarea",{model:{value:t.detail.note_info,callback:function(e){t.$set(t.detail,"note_info",e)},expression:"detail.note_info"}})],1),a("div",{staticStyle:{width:"40%","margin-left":"10px"}},[a("a-button",{on:{click:t.editOrderNote}},[t._v("提交")])],1)])])],1)],1):t._e(),3!=t.detail.status&&4!=t.detail.status||!t.detail.cancel_reason?t._e():a("a-card",{attrs:{title:""}},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-col",{staticClass:"table-title",attrs:{span:24}},[t._v(" 取消原因："+t._s(t.detail.cancel_reason)+" ")])],1)],1)],1),a("a-spin",{attrs:{spinning:t.confirmLoading}}),a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:t.handleCancel}},[t._v(" 关闭 ")])],1)],2)},o=[],i=a("8a11"),s=a("7a6b"),n={components:{CustomTooltip:s["a"]},data:function(){return{title:"订单详情",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{},orderColumns:[{title:"验证店铺",dataIndex:"store_name",width:"20%"},{title:"团购商品",dataIndex:"name",width:"20%"},{title:"商品成本价",dataIndex:"price",width:"13%"},{title:"消费密码",dataIndex:"group_pass",width:"18%"},{title:"验证店员",dataIndex:"staff_name",width:"12%"}]}},mounted:function(){console.log(this.catFid)},methods:{show:function(t){this.visible=!0,this.detail.order_id=t,this.orderDetail()},orderDetail:function(){var t=this;this.request(i["a"].getOrderDetail,{order_id:this.detail.order_id}).then((function(e){t.detail=e}))},editOrderNote:function(){var t=this;this.request(i["a"].editOrderNote,{order_id:this.detail.order_id,note_info:this.detail.note_info}).then((function(e){t.$message.success(e.msg)}))},handleCancel:function(){this.visible=!1}}},l=n,d=(a("4c5b"),a("2877")),u=Object(d["a"])(l,r,o,!1,null,"648de8aa",null);e["default"]=u.exports},ea1d:function(t,e,a){"use strict";var r={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit",merAccountList:"/merchant/merchant.system.MerchantMenu/userAccountList",merAccountDel:"/merchant/merchant.system.MerchantMenu/userAccountDelete",merAccountEdit:"/merchant/merchant.system.MerchantMenu/userAccountAddOrEdit",importMerAccount:"/merchant/merchant.system.MerchantMenu/importAccount",merchantMenu:"/merchant/merchant.system.MerchantMenu/merchantMenu",merStationsList:"/merchant/merchant.system.MerchantMenu/stations",merStationsSave:"/merchant/merchant.system.MerchantMenu/saveStation",merStationsDel:"/merchant/merchant.system.MerchantMenu/delStation"};e["a"]=r}}]);