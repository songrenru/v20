(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28ac7ca4","chunk-c156b57c"],{"474f":function(e,t,i){},"4c6d":function(e,t,i){},5355:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:function(t){return e.handleSubmit()},cancel:e.handleCancel}},[i("span",{staticClass:"page_top"},[i("span",{staticClass:"notice"},[e._v(" 注意："),i("br"),e._v(" 1、需要先在收费标准绑定页面，绑定房间数据。绑定成功后在进行操作生成账单"),i("br"),e._v(" 2、手动生成账单是给已绑定该收费标准的房间，批量生成待缴账单"),i("br")])]),i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("div",[e._v("请点击确定按钮给已绑定房间的【"+e._s(e.charge_name)+"】标准生成账单")])])],1)},a=[],r=(i("a434"),i("a0e0")),o={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},index_row:[{id:0}],single_id:0,floor_id:0,floor:[],single:[],confirmLoading:!1,form:this.$form.createForm(this),visible:!1,loadingLayer:!1,rule_id:0,rule_info:[],bind_type:"",charge_name:""}},components:{},mounted:function(){},methods:{add:function(e,t){this.title="给已绑定该标准的房间手动批量生成账单",t&&(this.title="给已绑定【"+t+"】手动批量生成账单"),this.charge_name=t,this.visible=!0,this.loadingLayer=!0,this.single=[],this.floor_id=0,this.floor=[],this.single_id=0,this.index_row=[{id:0,single_id:0,floor_id:[]}],this.confirmLoading=!1,this.rule_id=e,this.getSingle(),this.getRuleInfo()},add_row:function(){if(this.index_row.length>=5)return this.$message.error("最多每次添加5条数据操作"),!1;var e={id:0,single_id:0,floor_id:[]};this.index_row.push(e)},getSingle:function(){var e=this;this.request(r["a"].getSingleListByVillage).then((function(t){console.log("resSingle",t),e.single=t}))},getRuleInfo:function(){var e=this;this.request(r["a"].getRuleInfo,{rule_id:this.rule_id}).then((function(t){e.rule_info=t,console.log("rule_info",t)}))},del_row:function(e){e>0&&this.index_row.splice(e,1)},singleChange:function(e,t){var i=this;if(console.log("value: ".concat(e)),console.log("index: ".concat(t)),this.index_row[t].floor_id=[],e<1)return!1;console.log("floor0",this.floor),this.loadingLayer=!1,this.request(r["a"].getFloorList,{pid:e}).then((function(t){i.floor[e]=t,console.log("floor1",i.floor),i.loadingLayer=!0,i.$forceUpdate()}))},addBind:function(){var e=this,t={};t.rule_id=this.rule_id,t.create_order=1,t.single_data=this.index_row,this.confirmLoading=!0,this.request(r["a"].standardCreateManyOrderByRuleId,t).then((function(t){if(console.log("resx",t),1e3==t.status&&t.msg)e.$message.error(t.msg),e.confirmLoading=!1;else{var i="操作成功！";i=t.standard_bind_count<1?"此标准还没有绑定房间！":"已成功生成"+t.ordercount+"个待缴账单",e.$message.success(i),setTimeout((function(){e.confirmLoading=!1,e.form=e.$form.createForm(e),e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id)}),1500)}}))},handleSubmit:function(e){var t=this;this.$confirm({title:"是否确定手动批量生成账单?",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){t.addBind()},onCancel:function(){}})},handleCancel:function(){var e=this;this.visible=!1,this.index_row=[{id:0,single_id:0,floor_id:[]}],this.floor=[],this.confirmLoading=!1,setTimeout((function(){e.form=e.$form.createForm(e)}),500)}}},s=o,l=(i("69d9"),i("abf8"),i("2877")),d=Object(l["a"])(s,n,a,!1,null,"7d8b802f",null);t["default"]=d.exports},"69d9":function(e,t,i){"use strict";i("d7ab")},a8ea:function(e,t,i){"use strict";i("474f")},abf8:function(e,t,i){"use strict";i("4c6d")},aebf:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"message-suggestions-list-box"},[i("a-collapse",{attrs:{accordion:""}},[i("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[i("p",[e._v(" 1、账单生成周期设置：根据实际收费情况进行设置，若是需要业主一直缴纳则是无限期；若是仅需缴纳一段时间的费用，则自定收费周期即可（非水电燃使用）"),i("br"),e._v(" 2、账单欠费模式：预生成即表示在账单开始时间生成应收账单，后生成即在账单结束时间生成应收账单（非水电燃使用）"),i("br"),e._v(" 3、生成账单模式：手动生成账单需手动操作给收费对象生成应缴账单，一般用于停车费的收取； 自动生成账单则系统根据账单开始生成时间自动生成账单（非水电燃使用）"),i("br"),e._v(" 4、是否支持预缴：用户可提前预缴收费项，可设置预缴的优惠方案"),i("br"),e._v(" 5、未入住房屋折扣：房屋无人入住的状态下及没有绑定车辆的未使用车位可设置应收费用优惠折扣（以百分比计算，请输入0-100），例如输入80，则按80%进行收取，即100元仅需缴纳80元，优惠掉20元 ")])])],1),i("div",{staticClass:"search-box"},[i("a-row",{attrs:{gutter:48}},[i("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:5,sm:16}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("收费科目：")]),i("a-select",{staticStyle:{width:"200px"},on:{change:e.handleChargeNumberChange},model:{value:e.subjectId,callback:function(t){e.subjectId=t},expression:"subjectId"}},e._l(e.chargeNumber,(function(t){return i("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1),i("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:5,sm:16}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("收费项目：")]),i("a-select",{staticStyle:{width:"200px"},model:{value:e.charge_project_id,callback:function(t){e.charge_project_id=t},expression:"charge_project_id"}},e._l(e.chargeProject,(function(t){return i("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1),i("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"320px"},attrs:{md:7,sm:16}},[i("a-input-group",{staticStyle:{display:"flex"},attrs:{compact:""}},[i("p",{staticStyle:{"margin-top":"5px",width:"120px"}},[e._v("收费标准名称：")]),i("a-input",{staticStyle:{width:"65%"},attrs:{placeholder:"请输入收费标准名称"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1)],1),i("a-col",{attrs:{md:2,sm:16}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")])],1),i("a-col",{attrs:{md:2,sm:24}},[i("a-button",{on:{click:function(t){return e.resetList()}}},[e._v("重置")])],1)],1)],1),i("div",{staticClass:"add-box"},[i("a-row",{attrs:{gutter:48}},[i("a-col",{attrs:{md:3,sm:24}},[1==e.role_addrule?i("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.PopupAddModel.add(0,"special")}}},[e._v(" 添加 ")]):e._e()],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"standard",fn:function(t,n){return i("span",{},[3!=n.fees_type_status&&1==e.role_bindrule?i("a",{on:{click:function(t){return e.bindFunc(n)}}},[e._v("绑定")]):e._e()])}},{key:"action",fn:function(t,n){return i("span",{},[1==e.role_editrule?i("a",{on:{click:function(t){return e.$refs.PopupEditModel.edit(n.id)}}},[e._v("编辑")]):e._e(),3!=n.fees_type_status&&1==n.rule_to_order_btn?i("a",{staticStyle:{"margin-right":"15px"},on:{click:function(t){return e.$refs.addVacancyBindToOrder.add(n.id,n.charge_name)}}},[e._v("手动生成账单")]):e._e(),1==e.role_delrule?i("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"10px",width:"225px"},attrs:{"cancel-text":"否","ok-text":"是"},on:{confirm:function(t){return e.deleteConfirm(n.id)}}},[i("template",{slot:"title"},[i("p",{staticStyle:{width:"180px"}},[e._v("删除时会影响已绑定的信息和未缴费账单，确认删除?")])]),i("a",{attrs:{href:"#"}},[e._v("删除")])],2):e._e()],1)}}])}),i("ruleInfo",{ref:"PopupEditModel",on:{ok:e.editRule}}),i("bindList",{ref:"BindModel",on:{ok:e.bindOk}}),i("ruleInfo",{ref:"PopupAddModel",on:{ok:e.addRule}}),i("addVacancyBindOrder",{ref:"addVacancyBindToOrder",on:{ok:e.bindOk}})],1)},a=[],r=(i("7d24"),i("dfae")),o=(i("ac1f"),i("841c"),i("a0e0")),s=i("78bd"),l=i("2e92"),d=i("5355"),c=[{title:"标准ID",dataIndex:"id",key:"id"},{title:"收费标准名称",dataIndex:"charge_name",key:"charge_name"},{title:"收费标准生效时间",dataIndex:"charge_valid_time",key:"charge_valid_time"},{title:"收费项目名称",dataIndex:"project_name",key:"project_name"},{title:"所属收费科目",dataIndex:"charge_number_name",key:"charge_number_name"},{title:"计费模式",dataIndex:"fees_type",key:"fees_type"},{title:"账单生成周期设置",dataIndex:"bill_create_set",key:"bill_create_set"},{title:"账单欠费模式",dataIndex:"bill_arrears_set",key:"bill_arrears_set"},{title:"生成账单模式",dataIndex:"bill_type",key:"bill_type"},{title:"是否支持预缴",dataIndex:"is_prepaid",key:"is_prepaid"},{title:"未入住房屋折扣",dataIndex:"not_house_rate",key:"not_house_rate"},{title:"绑定费用对象",dataIndex:"bddx",key:"bddx",scopedSlots:{customRender:"standard"}},{title:"操作",dataIndex:"operation",width:110,key:"operation",scopedSlots:{customRender:"action"}}],u=[],h={name:"ChargeStandardAll",components:{ruleInfo:s["default"],bindList:l["default"],addVacancyBindOrder:d["default"],"a-collapse":r["a"],"a-collapse-panel":r["a"].Panel},data:function(){var e=this;return{pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,i){return e.onTableChange(t,i)},onChange:function(t,i){return e.onTableChange(t,i)}},search:{keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,subjectId:"请选择科目",charge_project_id:"请选择项目",data:u,columns:c,chargeNumber:[],chargeProject:[],role_addrule:0,role_bindrule:0,role_delrule:0,role_editrule:0}},mounted:function(){this.getChargeNumber(),this.getList(1)},methods:{getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="收费标准管理",this.loading=!0,1===t&&this.$set(this.pagination,"current",1),"请选择项目"===this.charge_project_id?this.search.charge_project_id=0:this.search.charge_project_id=this.charge_project_id,"请选择科目"===this.subjectId?this.search.subjectId=0:this.search.subjectId=this.subjectId,this.search["page"]=this.pagination.current,this.search["limit"]=this.pagination.pageSize,this.request(o["a"].ChargeRuleList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1,e.confirmLoading=!0,e.visible=!0,void 0!=t.role_addrule?(e.role_addrule=t.role_addrule,e.role_bindrule=t.role_bindrule,e.role_delrule=t.role_delrule,e.role_editrule=t.role_editrule):(e.role_addrule=1,e.role_bindrule=1,e.role_delrule=1,e.role_editrule=1)}))},onTableChange:function(e,t){this.pagination.current=e,this.pagination.pageSize=t,this.getList(),console.log("onTableChange==>",e,t)},table_change:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.pagination,"current",e.current),t.getList())},searchList:function(){this.getList(1)},resetList:function(){this.search={keyword:"",page:1},this.subjectId="请选择科目",this.charge_project_id="请选择项目",this.getList(1)},editRule:function(e){this.getList()},bindOk:function(e){this.getList()},deleteConfirm:function(e){var t=this;this.request(o["a"].ChargeRuleDel,{id:e}).then((function(e){t.getList(1),t.$message.success("删除成功")}))},handleChargeNumberChange:function(e){this.charge_project_id="请选择项目",this.getChargeProject(e)},getChargeNumber:function(){var e=this;this.request(o["a"].getChargeSubject).then((function(t){e.chargeNumber=t}))},getChargeProject:function(e){var t=this,i={subject_id:e};this.request(o["a"].getChargeProject,i).then((function(e){t.chargeProject=e}))},addRule:function(e){this.getList()},bindFunc:function(e){var t=this;this.request(o["a"].checkTakeEffectTime).then((function(i){if(!i.status)return t.$message.warning(i.msg),!1;t.$refs.BindModel.list(e.id,e.charge_type,e)}))}}},g=h,_=(i("a8ea"),i("2877")),f=Object(_["a"])(g,n,a,!1,null,"b1675f7e",null);t["default"]=f.exports},d7ab:function(e,t,i){}}]);