(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5256d3e3","chunk-05f904ce","chunk-23ae6a2c"],{"16a0":function(e,t,i){},"2b23":function(e,t,i){"use strict";i("f16d")},"2e92":function(e,t,i){"use strict";i.r(t);i("ac1f"),i("841c");var n=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,confirmLoading:e.loading},on:{close:e.handleCancel}},[t("div",{staticStyle:{"background-color":"white"}},["park_new"!=e.charge_type?t("span",{staticClass:"page_top"},[e._v(" 1、列表展示当前收费标准名称已经绑定的所有房间/车位信息；"),t("br"),e._v(" 2、通过在房产的房间筛选楼栋、单元、楼层、房间信息进行查询绑定对象；"),t("br"),e._v(" 3、通过在车场的所属车库、车位号筛选功能，查询车辆绑定对象；"),t("br"),t("span",{staticStyle:{color:"red"}},[e._v(" 注意：全选框只能选中当前页的所有绑定对象，如需选中绑定对象，需要每页都选中全选框绑定 ")])]):t("span",{staticClass:"page_top"},[e._v(" 1、列表展示当前收费标准名称已经绑定的所有车位信息；"),t("br"),e._v(" 2、通过在车场的所属车库、车位号筛选功能，查询车辆绑定对象；"),t("br"),t("span",{staticStyle:{color:"red"}},[e._v(" 注意：全选框只能选中当前页的所有绑定对象，如需选中绑定对象，需要每页都选中全选框绑定 ")])]),t("a-tabs",{attrs:{active:e.active},on:{change:e.callback}},["park_new"!=e.charge_type?t("a-tab-pane",{key:"1",attrs:{tab:"房产"}},[t("div",{staticClass:"order-list-box"},[t("div",{staticClass:"search-box",staticStyle:{display:"flex"}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("房间：")]),t("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:e.options,"load-data":e.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:e.setVisionsFunc},model:{value:e.search.vacancy,callback:function(t){e.$set(e.search,"vacancy",t)},expression:"search.vacancy"}}),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")]),t("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.clearList()}}},[e._v(" 清空 ")])],1),t("div",{staticClass:"table-operator",staticStyle:{margin:"10px 1px 10px"}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.AddBindModel.add(e.rule_id,"1")}}},[e._v("绑定房间")]),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.AddVacancyModel.add(e.rule_id,"bind_room")}}},[e._v("批量绑定")]),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.OrderLogModel.add(e.rule_id,"1")}}},[e._v("查看账单生成结果")]),t("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px"},attrs:{title:"确认解绑?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.unbindAll(1)},cancel:e.cancel}},[t("a-button",{attrs:{type:"primary"}},[e._v("批量解绑")])],1)],1),t("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,"row-selection":e.rowSelection,rowKey:"id",pagination:e.pagination},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(i,n){return t("span",{},[t("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认解绑?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.bind(n.id,1)},cancel:e.cancel}},[t("a",{attrs:{href:"#"}},[e._v("解绑")])])],1)}}],null,!1,598916438)})],1)]):e._e(),e.no_paking_bind?e._e():t("a-tab-pane",{key:"2",attrs:{tab:"车场","force-render":""}},[t("div",{staticClass:"order-list-box"},[t("div",{staticClass:"search-box",staticStyle:{display:"flex"}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("所属车库：")]),t("a-select",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{"default-value":"0",placeholder:"请选择车库"},model:{value:e.search1.garage_id,callback:function(t){e.$set(e.search1,"garage_id",t)},expression:"search1.garage_id"}},[t("a-select-option",{attrs:{value:0}},[e._v(" 全部 ")]),e._l(e.garage_list,(function(i,n){return t("a-select-option",{key:n,attrs:{value:i.garage_id}},[e._v(" "+e._s(i.garage_num)+" ")])}))],2),t("label",{staticStyle:{"margin-top":"5px","margin-left":"10px"}},[e._v("车位号：")]),t("a-input",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{placeholder:"请输入车位号"},model:{value:e.search1.position_num,callback:function(t){e.$set(e.search1,"position_num",t)},expression:"search1.position_num"}}),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")]),t("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.clearList()}}},[e._v(" 清空 ")])],1),t("div",{staticClass:"table-operator",staticStyle:{margin:"10px 1px 10px"}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.AddBindModel.add(e.rule_id,"2",e.charge_type)}}},[e._v("绑定车位")]),"park_new"==e.charge_type?t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.AddVacancyModel.add(e.rule_id,"bind_car")}}},[e._v("批量绑定")]):e._e(),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.OrderLogModel.add(e.rule_id,"2")}}},[e._v("查看账单生成结果")]),t("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px"},attrs:{title:"确认解绑?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.unbindAll(2)},cancel:e.cancel}},[t("a-button",{attrs:{type:"primary"}},[e._v("批量解绑")])],1)],1),t("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns1,"data-source":e.data1,"row-selection":e.rowSelection1,rowKey:"id",pagination:e.pagination1},on:{change:e.table_change1},scopedSlots:e._u([{key:"action",fn:function(i,n){return t("span",{},[t("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认解绑?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.bind(n.id,2)},cancel:e.cancel}},[t("a",{attrs:{href:"#"}},[e._v("解绑")])])],1)}}],null,!1,2108261493)})],1)])],1),t("addBindList",{ref:"AddBindModel",on:{ok:e.bindOk}}),t("order-log-list",{ref:"OrderLogModel",on:{ok:e.bindOk}}),t("addVacancyBind",{ref:"AddVacancyModel",on:{ok:e.bindOk}})],1)])},a=[],o=i("2909"),s=i("1da1"),r=(i("96cf"),i("d81d"),i("b0c0"),i("d3b7"),i("7db0"),i("4de4"),i("a0e0")),l=i("f7de"),c=i("307f"),d=i("9642"),u=[{title:"楼号",dataIndex:"single_name",key:"single_name"},{title:"单元名称",dataIndex:"floor_name",key:"floor_name"},{title:"层号",dataIndex:"layer_name",key:"layer_name"},{title:"房间号",dataIndex:"room",key:"room"},{title:"收费周期",dataIndex:"cycle",key:"cycle"},{title:"账单生成时间",dataIndex:"order_add_time",key:"order_add_time"},{title:"账单生成周期模式",dataIndex:"date_status",key:"date_status"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],h=[{title:"车位号",dataIndex:"position_num",key:"position_num"},{title:"所属车库",dataIndex:"garage_num",key:"garage_num"},{title:"收费周期",dataIndex:"cycle",key:"cycle"},{title:"账单生成时间",dataIndex:"order_add_time",key:"order_add_time"},{title:"账单生成周期模式",dataIndex:"date_status",key:"date_status"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],g={name:"bingList",data:function(){var e=this;return{title:"绑定",key:1,active:1,data:[],data1:[],rule_id:0,pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,i){return e.onTableChange(t,i)},onChange:function(t,i){return e.onTableChange(t,i)}},pagination1:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,i){return e.onTableChange1(t,i)},onChange:function(t,i){return e.onTableChange1(t,i)}},search_data:[],search:{page:1},search_data1:[],search1:{page:1},form:this.$form.createForm(this),visible:!1,loading:!1,columns:u,columns1:h,page:1,page1:1,position_id:[],vacancy_id:[],village_list:[],single_list:[],floor_list:[],layer_list:[],vacancy_list:[],garage_list:[],options:[],selectedRowKeys:[],selectedRowKeys1:[],charge_type:"",recordObj:{},no_paking_bind:!1}},components:{OrderLogList:d["default"],addBindList:l["default"],addVacancyBind:c["default"]},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},rowSelection1:function(){return{selectedRowKeys:this.selectedRowKeys1,onChange:this.onSelectChange1}}},methods:{list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.log("record",i),this.title="绑定【"+i.charge_number_name+"-"+i.project_name+"-"+i.charge_name+"】",this.recordObj=i,this.charge_type=t,"park_new"==this.charge_type&&(this.key=2),"public_water"!=this.charge_type&&"public_electric"!=this.charge_type||(this.no_paking_bind=!0),this.loading=!0,this.visible=!0,this.rule_id=e,this.page=1,this.page1=1,this.search["page"]=1,this.search1["page"]=1,this.active=1,this.selectedRowKeys=[],this.selectedRowKeys1=[],this.vacancy_id=[],this.position_id=[],this.getBindList(),this.getGarageList(),this.getSingleListByVillage()},getBindList:function(){var e=this,t={};1==this.key?(this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.search.bind_type=this.key,this.search.rule_id=this.rule_id,t=this.search):(this.search1["page"]=this.page1,this.search1["limit"]=this.pagination1.pageSize,this.search1.bind_type=this.key,this.search1.rule_id=this.rule_id,t=this.search1),"park_new"==this.charge_type&&(this.search.bind_type=2),this.request(r["a"].standardBindList,t).then((function(t){console.log("res",t),e.selectedRowKeys=[],e.selectedRowKeys1=[],e.vacancy_id=[],e.position_id=[],1==e.key?(e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:0,e.data=t.list):(e.pagination1.total=t.count?t.count:0,e.pagination1.pageSize=t.total_limit?t.total_limit:0,e.data1=t.list)}))},getGarageList:function(){var e=this;this.request(r["a"].garageList).then((function(t){console.log("garage_list",t),e.garage_list=t})).catch((function(t){e.loading=!1}))},clearList:function(){this.search={page:1,vacancy:""},this.search1={page:1,position_num:"",garage_id:0},this.getBindList()},getSingleListByVillage:function(){var e=this;this.request(r["a"].getSingleListByVillage).then((function(t){if(console.log("+++++++Single",t),t){var i=[];t.map((function(e){i.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=i}}))},getFloorList:function(e){var t=this;return new Promise((function(i){t.request(r["a"].getFloorList,{pid:e}).then((function(e){console.log("+++++++Single",e),console.log("resolve",i),i(e)}))}))},getLayerList:function(e){var t=this;return new Promise((function(i){t.request(r["a"].getLayerList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&i(e)}))}))},getVacancyList:function(e){var t=this;return new Promise((function(i){t.request(r["a"].getVacancyList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&i(e)}))}))},loadDataFunc:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e[e.length-1],i.loading=!0,setTimeout((function(){i.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,a,s,r,l,c,d,u,h,g,_,f;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(1!==e.length){i.next=12;break}return n=Object(o["a"])(t.options),i.next=4,t.getFloorList(e[0]);case 4:a=i.sent,console.log("res",a),s=[],a.map((function(e){return s.push({label:e.name,value:e.id,isLeaf:!1}),n["children"]=s,!0})),n.find((function(t){return t.value===e[0]}))["children"]=s,t.options=n,i.next=36;break;case 12:if(2!==e.length){i.next=24;break}return i.next=15,t.getLayerList(e[1]);case 15:r=i.sent,l=Object(o["a"])(t.options),c=[],r.map((function(e){return c.push({label:e.name,value:e.id,isLeaf:!1}),!0})),d=l.find((function(t){return t.value===e[0]})),d.children.find((function(t){return t.value===e[1]}))["children"]=c,t.options=l,i.next=36;break;case 24:if(3!==e.length){i.next=36;break}return i.next=27,t.getVacancyList(e[2]);case 27:u=i.sent,h=Object(o["a"])(t.options),g=[],u.map((function(e){return g.push({label:e.name,value:e.id,isLeaf:!0}),!0})),_=h.find((function(t){return t.value===e[0]})),f=_.children.find((function(t){return t.value===e[1]})),f.children.find((function(t){return t.value===e[2]}))["children"]=g,t.options=h,console.log("_this.options",t.options);case 36:case"end":return i.stop()}}),i)})))()},bindOk:function(e,t){console.log("rule_id",e),this.key=t,this.active=t,this.rule_id=e,this.getBindList(),this.selectedRowKeys=[],this.selectedRowKeys1=[],this.vacancy_id=[],this.position_id=[]},bind:function(e,t){var i=this;console.log("type",t),console.log("id",e),this.request(r["a"].delStandardBind,{bind_id:e}).then((function(e){console.log("res",e),i.key=t,i.getBindList(),i.selectedRowKeys=[],i.selectedRowKeys1=[],i.vacancy_id=[],i.position_id=[]}))},unbindAll:function(e){var t=this;1==e?0==this.selectedRowKeys.length?this.$message.error("请勾选需解绑的房间"):this.selectedRowKeys.filter((function(i,n){t.request(r["a"].delStandardBind,{bind_id:i}).then((function(i){console.log("res",i),t.key=e,t.getBindList(),delete t.selectedRowKeys[n]}))})):0==this.selectedRowKeys1.length?this.$message.error("请勾选需解绑的车位"):this.selectedRowKeys1.filter((function(i,n){t.request(r["a"].delStandardBind,{bind_id:i}).then((function(i){console.log("res",i),t.key=e,t.getBindList(),delete t.selectedRowKeys1[n]}))}))},handleCancel:function(){var e=this;this.selectedRowKeys=[],this.selectedRowKeys1=[],this.vacancy_id=[],this.position_id=[],this.visible=!1,this.no_paking_bind=!1,setTimeout((function(){e.rule_id="0",e.form=e.$form.createForm(e)}),500)},cancel:function(){},callback:function(e){this.key=e,this.getBindList(),console.log(e)},onSelectChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t),this.vacancy_id=t,this.selectedRowKeys=e,console.log("villagess",this.vacancy_id)},onSelectChange1:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t),this.position_id=t,this.selectedRowKeys1=e,console.log("villagess",this.position_id)},searchList:function(){console.log("search",this.search),this.page=1,this.page1=1,this.getBindList()},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getBindList(),console.log("onTableChange==>",e,t)},onTableChange1:function(e,t){this.page1=e,this.pagination1.current=e,this.pagination1.pageSize=t,this.getBindList(),console.log("onTableChange==>",e,t)},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.page=e.current,this.data=[],this.getBindList())},table_change1:function(e){console.log("e",e),e.current&&e.current>0&&(this.page1=e.current,this.data1=[],this.getBindList())}}},_=g,f=(i("bb7e"),i("2877")),p=Object(f["a"])(_,n,a,!1,null,null,null);t["default"]=p.exports},"307f":function(e,t,i){"use strict";i.r(t);i("b0c0");var n=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:950,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:function(t){return e.handleSubmit(e.bind_type)},cancel:e.handleCancel}},[t("span",{staticClass:"page_top"},[t("span",{staticClass:"notice"},[e._v(" 注意："),t("br"),e._v(" 1、在绑定车库时，默认选中车库内所有车位号数据"),t("br")])]),t("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[t("a-form",{attrs:{form:e.form}},[e._l(e.index_row,(function(i,n){return e.loadingLayer&&"bind_room"==e.bind_type?t("div",{staticClass:"form_box"},[t("a-row",{staticStyle:{"margin-left":"1px"},attrs:{gutter:48}},[t("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"250px"},attrs:{md:8,sm:24}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("选择楼栋：")]),t("a-select",{staticStyle:{width:"170px"},attrs:{placeholder:"请选择楼栋"},on:{change:function(t){return e.singleChange(i.single_id,n)}},model:{value:i.single_id,callback:function(t){e.$set(i,"single_id",t)},expression:"item.single_id"}},[t("a-select-option",{attrs:{value:0}},[e._v(" 请选择楼栋 ")]),e._l(e.single,(function(i,n){return t("a-select-option",{key:n,attrs:{value:i.id}},[e._v(" "+e._s(i.name)+" ")])}))],2)],1),t("a-col",{staticStyle:{"padding-right":"1px",width:"270px"},attrs:{md:8,sm:24}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("对应单元：")]),t("a-select",{staticStyle:{width:"170px"},attrs:{placeholder:"请选择单元"},on:{change:function(t){return e.singleFloorChange(i.single_id,i.floor_id,n)}},model:{value:i.floor_id,callback:function(t){e.$set(i,"floor_id",t)},expression:"item.floor_id"}},[t("a-select-option",{attrs:{value:0}},[e._v(" 请选择单元 ")]),e._l(e.floor[i.single_id],(function(i,n){return t("a-select-option",{key:n,attrs:{value:i.floor_id}},[e._v(" "+e._s(i.name)+" ")])}))],2)],1),t("a-col",{staticStyle:{"padding-right":"1px",width:"330px"},attrs:{md:9,sm:24}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("对应楼层：")]),t("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择楼层",mode:"multiple"},model:{value:i.layer_id,callback:function(t){e.$set(i,"layer_id",t)},expression:"item.layer_id"}},e._l(e.layer[i.floor_id],(function(i,n){return t("a-select-option",{key:n,attrs:{value:i.id}},[e._v(" "+e._s(i.name)+" ")])})),1)],1),n>0?t("a-col",{staticClass:"icon_1",staticStyle:{"padding-right":"1px","padding-left":"1px"},on:{click:function(t){return e.del_row(n)}}},[t("a-icon",{attrs:{type:"minus"}})],1):e._e()],1)],1):e._e()})),e._l(e.index_row,(function(i,n){return e.loadingLayer&&"bind_car"==e.bind_type?t("div",{staticClass:"form_box"},[t("a-row",{staticStyle:{"margin-left":"1px"},attrs:{gutter:48}},[t("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"500px"},attrs:{md:8,sm:24}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("选择车库：")]),t("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":"0",placeholder:"请选择车库"},model:{value:e.garage_ids[n],callback:function(t){e.$set(e.garage_ids,n,t)},expression:"garage_ids[index]"}},e._l(e.garage_list,(function(i,n){return t("a-select-option",{key:n,attrs:{value:i.garage_id}},[e._v(" "+e._s(i.garage_num)+" ")])})),1)],1),n>0?t("a-col",{staticClass:"icon_1",staticStyle:{"padding-right":"1px","padding-left":"1px"},on:{click:function(t){return e.del_row(n)}}},[t("a-icon",{attrs:{type:"minus"}})],1):e._e()],1)],1):e._e()})),t("div",{staticClass:"icon_1 margin_top_10",on:{click:e.add_row}},[t("a-icon",{attrs:{type:"plus"}})],1)],2),t("addBindInfo",{ref:"AddBindModel",on:{ok:e.bindOk}})],1)],1)},a=[],o=(i("a434"),i("a0e0")),s=i("b74f"),r="",l={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},index_row:[{id:0,single_id:0,floor_id:0,layer_id:[]}],single_id:0,layer_id:0,layer:[],single:[],confirmLoading:!1,form:this.$form.createForm(this),visible:!1,loadingLayer:!1,rule_id:0,rule_info:[],address:r,garage_list:[],bind_type:"",floor:[],floor_id:0,garage_ids:[]}},components:{addBindInfo:s["default"]},mounted:function(){this.getGarageList()},methods:{add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.title="确定绑定",this.visible=!0,this.loadingLayer=!0,this.layer=[],this.single=[],this.bind_type=t,this.index_row=[{id:0,single_id:0,floor_id:0,layer_id:[]}],this.confirmLoading=!1,this.rule_id=e,this.getSingle(),this.getRuleInfo()},add_row:function(){var e={id:0,single_id:0,floor_id:0,layer_id:[]};this.index_row.push(e)},getSingle:function(){var e=this;this.request(o["a"].getSingleListByVillage).then((function(t){console.log("resSingle",t),e.single=t}))},getRuleInfo:function(){var e=this;this.request(o["a"].getRuleInfo,{rule_id:this.rule_id}).then((function(t){e.rule_info=t,console.log("rule_info",t)}))},getGarageList:function(){var e=this;this.request(o["a"].garageList).then((function(t){console.log("garage_list",t),e.garage_list=t}))},del_row:function(e){console.log("index",e),this.index_row.splice(e,1),"bind_car"==this.bind_type&&(this.garage_ids[e]="")},singleChange:function(e,t){var i=this;if(console.log("Selected: ".concat(e)),this.index_row[t].layer_id=[],this.index_row[t].floor_id=0,e<1)return console.log("singleChange=============layer",this.layer),console.log("singleChange=============index_row",this.index_row),!1;this.loadingLayer=!1,this.request(o["a"].getFloorList,{pid:e}).then((function(t){i.floor[e]=t,console.log("floor1",i.floor),i.loadingLayer=!0,i.$forceUpdate()}))},singleFloorChange:function(e,t,i){var n=this;this.index_row[i].layer_id=[],this.loadingLayer=!1,this.floor_id=1*t,console.log("index_row",this.index_row,"floor_id",t),this.request(o["a"].getLayerSingleList,{pid:e,single_id:e,floor_id:t}).then((function(e){console.log("resLayer",e),n.layer[n.floor_id]=e,n.loadingLayer=!0}))},bindCar:function(){var e=this,t={};t.rule_id=this.rule_id,t.garage_id=this.garage_ids,this.request(o["a"].addBindAllPosition,t).then((function(t){e.$message.success("绑定成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.garage_ids=[],e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id,"1")}),1500)})),console.log(this.garage_ids)},addBind:function(){var e=this,t={bind_type:2};t.rule_id=this.rule_id,t.pigcms_arr=this.index_row,this.confirmLoading=!0,this.request(o["a"].addStandardBind,t).then((function(t){if(console.log("resx",t),1e3==t.status&&t.msg)e.$message.error(t.msg),e.confirmLoading=!1;else if(t.err_count){var i="绑定失败"+t.err_count+"个";t.errMsgStr?i=i+"【错误："+t.errMsgStr+"】":t.errMsgArr&&t.errMsgArr[0]&&t.errMsgArr[0]["msg"]&&(i=i+"【错误："+t.errMsgArr[0]["msg"]+"】"),e.$message.warning(i),t.success_count?(e.$message.warning("绑定成功"+t.success_count+"个"),setTimeout((function(){e.confirmLoading=!1,e.form=e.$form.createForm(e),e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id,"1")}),1500)):e.confirmLoading=!1}else{var n="绑定成功";t.msg&&(n=t.msg),e.$message.success(n),setTimeout((function(){e.confirmLoading=!1,e.form=e.$form.createForm(e),e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id,"1")}),1500)}}))},handleSubmit:function(e){if(console.log("index_row111",this.index_row),1==this.rule_info.is_show)this.$refs.AddBindModel.add(2,this.rule_info,this.index_row,[]);else{var t=this;this.$confirm({title:"是否确认绑定?",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){"bind_car"==e?t.bindCar():t.addBind()}})}},handleCancel:function(){var e=this;this.visible=!1,this.confirmLoading=!1,setTimeout((function(){e.form=e.$form.createForm(e)}),500)},bindOk:function(){this.form=this.$form.createForm(this),this.visible=!1,this.loading=!1,this.$emit("ok",this.rule_id,"1")}}},c=l,d=(i("b21f"),i("2b23"),i("2877")),u=Object(d["a"])(c,n,a,!1,null,"7e4b322c",null);t["default"]=u.exports},5355:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:function(t){return e.handleSubmit()},cancel:e.handleCancel}},[t("span",{staticClass:"page_top"},[t("span",{staticClass:"notice"},[e._v(" 注意："),t("br"),e._v(" 1、需要先在收费标准绑定页面，绑定房间数据。绑定成功后在进行操作生成账单"),t("br"),e._v(" 2、手动生成账单是给已绑定该收费标准的房间，批量生成待缴账单"),t("br")])]),t("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[t("div",[e._v("请点击确定按钮给已绑定房间的【"+e._s(e.charge_name)+"】标准生成账单")])])],1)},a=[],o=(i("a434"),i("a0e0")),s={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},index_row:[{id:0}],single_id:0,floor_id:0,floor:[],single:[],confirmLoading:!1,form:this.$form.createForm(this),visible:!1,loadingLayer:!1,rule_id:0,rule_info:[],bind_type:"",charge_name:""}},components:{},mounted:function(){},methods:{add:function(e,t){this.title="给已绑定该标准的房间手动批量生成账单",t&&(this.title="给已绑定【"+t+"】手动批量生成账单"),this.charge_name=t,this.visible=!0,this.loadingLayer=!0,this.single=[],this.floor_id=0,this.floor=[],this.single_id=0,this.index_row=[{id:0,single_id:0,floor_id:[]}],this.confirmLoading=!1,this.rule_id=e,this.getSingle(),this.getRuleInfo()},add_row:function(){if(this.index_row.length>=5)return this.$message.error("最多每次添加5条数据操作"),!1;var e={id:0,single_id:0,floor_id:[]};this.index_row.push(e)},getSingle:function(){var e=this;this.request(o["a"].getSingleListByVillage).then((function(t){console.log("resSingle",t),e.single=t}))},getRuleInfo:function(){var e=this;this.request(o["a"].getRuleInfo,{rule_id:this.rule_id}).then((function(t){e.rule_info=t,console.log("rule_info",t)}))},del_row:function(e){e>0&&this.index_row.splice(e,1)},singleChange:function(e,t){var i=this;if(console.log("value: ".concat(e)),console.log("index: ".concat(t)),this.index_row[t].floor_id=[],e<1)return!1;console.log("floor0",this.floor),this.loadingLayer=!1,this.request(o["a"].getFloorList,{pid:e}).then((function(t){i.floor[e]=t,console.log("floor1",i.floor),i.loadingLayer=!0,i.$forceUpdate()}))},addBind:function(){var e=this,t={};t.rule_id=this.rule_id,t.create_order=1,t.single_data=this.index_row,this.confirmLoading=!0,this.request(o["a"].standardCreateManyOrderByRuleId,t).then((function(t){if(console.log("resx",t),1e3==t.status&&t.msg)e.$message.error(t.msg),e.confirmLoading=!1;else{var i="操作成功！";i=t.standard_bind_count<1?"此标准还没有绑定房间！":"已成功生成"+t.ordercount+"个待缴账单",e.$message.success(i),setTimeout((function(){e.confirmLoading=!1,e.form=e.$form.createForm(e),e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id)}),1500)}}))},handleSubmit:function(e){var t=this;this.$confirm({title:"是否确定手动批量生成账单?",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){t.addBind()},onCancel:function(){}})},handleCancel:function(){var e=this;this.visible=!1,this.index_row=[{id:0,single_id:0,floor_id:[]}],this.floor=[],this.confirmLoading=!1,setTimeout((function(){e.form=e.$form.createForm(e)}),500)}}},r=s,l=(i("69d9"),i("abf8"),i("2877")),c=Object(l["a"])(r,n,a,!1,null,"7d8b802f",null);t["default"]=c.exports},6032:function(e,t,i){},"69d9":function(e,t,i){"use strict";i("6032")},9642:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return e.visible?t("a-drawer",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.loading},on:{close:e.handleCancel}},[t("div",{staticStyle:{"background-color":"white","padding-bottom":"50px"}},[t("div",{staticClass:"order-list-box"},[t("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination}})],1)])]):e._e()},a=[],o=(i("ac1f"),i("841c"),i("a0e0"),i("b74f")),s=[{title:"房间号/车位号",dataIndex:"numbers",key:"numbers"},{title:"生成时间",dataIndex:"time",key:"time"},{title:"生成结果",dataIndex:"status",key:"status"},{title:"失败原因",dataIndex:"fail_reason",key:"fail_reason"}],r={name:"OrderLogList",data:function(){var e=this;return{title:"查看账单生成结果",ruleInfo:"",is_show:1,show:!0,dataId:1,data:[],rule_id:0,pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,i){return e.onTableChange(t,i)},onChange:function(t,i){return e.onTableChange(t,i)}},search_data:[],search:{page:1},form:this.$form.createForm(this),visible:!1,loading:!1,columns:s,page:1}},components:{addBindInfo:o["default"]},mounted:function(){this.key=1},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}}},methods:{add:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";console.log("key==============>",t),this.loading=!1,this.visible=!0,this.rule_id=e,this.page=1,this.search["page"]=1,console.log("key",this.key),this.data=[],this.charge_type=i,console.log("this.charge_type======>",this.charge_type),this.getAddBindList()},getAddBindList:function(){var e=this;this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.search.rule_id=this.rule_id,this.request("community/village_api.Cashier/getAutoOrderLogList",this.search).then((function(t){console.log("res1=============>",t),e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:0,e.data=t.list}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.rule_id="0",e.form=e.$form.createForm(e)}),500)},cancel:function(){},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getAddBindList(),console.log("onTableChange==>",e,t)}}},l=r,c=(i("ccc3"),i("2877")),d=Object(c["a"])(l,n,a,!1,null,"42b0d838",null);t["default"]=d.exports},a8e2:function(e,t,i){},abf8:function(e,t,i){"use strict";i("fe9f")},aebf:function(e,t,i){"use strict";i.r(t);i("b0c0"),i("ac1f"),i("841c");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"message-suggestions-list-box"},[t("a-collapse",{attrs:{accordion:""}},[t("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[t("p",[e._v(" 1、账单生成周期设置：根据实际收费情况进行设置，若是需要业主一直缴纳则是无限期；若是仅需缴纳一段时间的费用，则自定收费周期即可（非水电燃使用）"),t("br"),e._v(" 2、账单欠费模式：预生成即表示在账单开始时间生成应收账单，后生成即在账单结束时间生成应收账单（非水电燃使用）"),t("br"),e._v(" 3、生成账单模式：手动生成账单需手动操作给收费对象生成应缴账单，一般用于停车费的收取； 自动生成账单则系统根据账单开始生成时间自动生成账单（非水电燃使用）"),t("br"),e._v(" 4、是否支持预缴：用户可提前预缴收费项，可设置预缴的优惠方案"),t("br"),e._v(" 5、未入住房屋折扣：房屋无人入住的状态下及没有绑定车辆的未使用车位可设置应收费用优惠折扣（以百分比计算，请输入0-100），例如输入80，则按80%进行收取，即100元仅需缴纳80元，优惠掉20元 ")])])],1),t("div",{staticClass:"search-box"},[t("a-row",{attrs:{gutter:48}},[t("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:5,sm:16}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("收费科目：")]),t("a-select",{staticStyle:{width:"200px"},on:{change:e.handleChargeNumberChange},model:{value:e.subjectId,callback:function(t){e.subjectId=t},expression:"subjectId"}},e._l(e.chargeNumber,(function(i){return t("a-select-option",{key:i.id},[e._v(e._s(i.name))])})),1)],1),t("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:5,sm:16}},[t("label",{staticStyle:{"margin-top":"5px"}},[e._v("收费项目：")]),t("a-select",{staticStyle:{width:"200px"},model:{value:e.charge_project_id,callback:function(t){e.charge_project_id=t},expression:"charge_project_id"}},e._l(e.chargeProject,(function(i){return t("a-select-option",{key:i.id},[e._v(e._s(i.name))])})),1)],1),t("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"320px"},attrs:{md:7,sm:16}},[t("a-input-group",{staticStyle:{display:"flex"},attrs:{compact:""}},[t("p",{staticStyle:{"margin-top":"5px",width:"120px"}},[e._v("收费标准名称：")]),t("a-input",{staticStyle:{width:"65%"},attrs:{placeholder:"请输入收费标准名称"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1)],1),t("a-col",{attrs:{md:2,sm:16}},[t("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")])],1),t("a-col",{attrs:{md:2,sm:24}},[t("a-button",{on:{click:function(t){return e.resetList()}}},[e._v("重置")])],1)],1)],1),t("div",{staticClass:"add-box"},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:3,sm:24}},[1==e.role_addrule?t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.PopupAddModel.add(0,"special")}}},[e._v(" 添加 ")]):e._e()],1)],1)],1),t("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"standard",fn:function(i,n){return t("span",{},[3!=n.fees_type_status&&1==e.role_bindrule&&"qrcode"!=n.charge_type?t("a",{on:{click:function(t){return e.bindFunc(n)}}},[e._v("绑定")]):t("span",[e._v(" -- ")])])}},{key:"action",fn:function(i,n){return t("span",{},[1==e.role_editrule?t("a",{on:{click:function(t){return e.$refs.PopupEditModel.edit(n.id)}}},[e._v("编辑")]):e._e(),3!=n.fees_type_status&&1==n.rule_to_order_btn?t("a",{staticStyle:{"margin-right":"15px"},on:{click:function(t){return e.$refs.addVacancyBindToOrder.add(n.id,n.charge_name)}}},[e._v("手动生成账单")]):e._e(),1==e.role_delrule?t("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px",width:"225px"},attrs:{"cancel-text":"否","ok-text":"是"},on:{confirm:function(t){return e.deleteConfirm(n.id)}}},[t("template",{slot:"title"},[t("p",{staticStyle:{width:"180px"}},[e._v("删除时会影响已绑定的信息和未缴费账单，确认删除?")])]),t("a",{attrs:{href:"#"}},[e._v("删除")])],2):e._e()],1)}}])}),t("ruleInfo",{ref:"PopupEditModel",on:{ok:e.editRule}}),t("bindList",{ref:"BindModel",on:{ok:e.bindOk}}),t("ruleInfo",{ref:"PopupAddModel",on:{ok:e.addRule}}),t("addVacancyBindOrder",{ref:"addVacancyBindToOrder",on:{ok:e.bindOk}})],1)},a=[],o=(i("7d24"),i("dfae")),s=i("a0e0"),r=i("78bd"),l=i("2e92"),c=i("5355"),d=[{title:"标准ID",dataIndex:"id",key:"id"},{title:"收费标准名称",dataIndex:"charge_name",key:"charge_name"},{title:"收费标准生效时间",dataIndex:"charge_valid_time",key:"charge_valid_time"},{title:"收费项目名称",dataIndex:"project_name",key:"project_name"},{title:"所属收费科目",dataIndex:"charge_number_name",key:"charge_number_name"},{title:"计费模式",dataIndex:"fees_type",key:"fees_type"},{title:"账单生成周期设置",dataIndex:"bill_create_set",key:"bill_create_set"},{title:"账单欠费模式",dataIndex:"bill_arrears_set",key:"bill_arrears_set"},{title:"生成账单模式",dataIndex:"bill_type",key:"bill_type"},{title:"是否支持预缴",dataIndex:"is_prepaid",key:"is_prepaid"},{title:"未入住房屋折扣",dataIndex:"not_house_rate",key:"not_house_rate"},{title:"绑定费用对象",dataIndex:"bddx",key:"bddx",scopedSlots:{customRender:"standard"}},{title:"操作",dataIndex:"operation",width:110,key:"operation",scopedSlots:{customRender:"action"}}],u=[],h={name:"ChargeStandardAll",components:{ruleInfo:r["default"],bindList:l["default"],addVacancyBindOrder:c["default"],"a-collapse":o["a"],"a-collapse-panel":o["a"].Panel},data:function(){var e=this;return{pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,i){return e.onTableChange(t,i)},onChange:function(t,i){return e.onTableChange(t,i)}},search:{keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,subjectId:"请选择科目",charge_project_id:"请选择项目",data:u,columns:d,chargeNumber:[],chargeProject:[],role_addrule:0,role_bindrule:0,role_delrule:0,role_editrule:0}},mounted:function(){this.getChargeNumber(),this.getList(1)},methods:{getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="收费标准管理",this.loading=!0,1===t&&this.$set(this.pagination,"current",1),"请选择项目"===this.charge_project_id?this.search.charge_project_id=0:this.search.charge_project_id=this.charge_project_id,"请选择科目"===this.subjectId?this.search.subjectId=0:this.search.subjectId=this.subjectId,this.search["page"]=this.pagination.current,this.search["limit"]=this.pagination.pageSize,this.request(s["a"].ChargeRuleList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1,e.confirmLoading=!0,e.visible=!0,void 0!=t.role_addrule?(e.role_addrule=t.role_addrule,e.role_bindrule=t.role_bindrule,e.role_delrule=t.role_delrule,e.role_editrule=t.role_editrule):(e.role_addrule=1,e.role_bindrule=1,e.role_delrule=1,e.role_editrule=1)}))},onTableChange:function(e,t){this.pagination.current=e,this.pagination.pageSize=t,this.getList(),console.log("onTableChange==>",e,t)},table_change:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.pagination,"current",e.current),t.getList())},searchList:function(){this.getList(1)},resetList:function(){this.search={keyword:"",page:1},this.subjectId="请选择科目",this.charge_project_id="请选择项目",this.getList(1)},editRule:function(e){this.getList()},bindOk:function(e){this.getList()},deleteConfirm:function(e){var t=this;this.request(s["a"].ChargeRuleDel,{id:e}).then((function(e){t.getList(1),t.$message.success("删除成功")}))},handleChargeNumberChange:function(e){this.charge_project_id="请选择项目",this.getChargeProject(e)},getChargeNumber:function(){var e=this;this.request(s["a"].getChargeSubject).then((function(t){e.chargeNumber=t}))},getChargeProject:function(e){var t=this,i={subject_id:e};this.request(s["a"].getChargeProject,i).then((function(e){t.chargeProject=e}))},addRule:function(e){this.getList()},bindFunc:function(e){var t=this;this.request(s["a"].checkTakeEffectTime).then((function(i){if(!i.status)return t.$message.warning(i.msg),!1;t.$refs.BindModel.list(e.id,e.charge_type,e)}))}}},g=h,_=(i("ee664"),i("2877")),f=Object(_["a"])(g,n,a,!1,null,"839670b0",null);t["default"]=f.exports},b21f:function(e,t,i){"use strict";i("c9f3")},bb7e:function(e,t,i){"use strict";i("a8e2")},c666:function(e,t,i){},c9f3:function(e,t,i){},ccc3:function(e,t,i){"use strict";i("c666")},ee664:function(e,t,i){"use strict";i("16a0")},f16d:function(e,t,i){},fe9f:function(e,t,i){}}]);