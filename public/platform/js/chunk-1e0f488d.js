(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e0f488d"],{"9f50":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box"},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[a("p",[t._v(" 1、账单生成周期设置：根据实际收费情况进行设置，若是需要业主一直缴纳则是无限期；若是仅需缴纳一段时间的费用，则自定收费周期即可（非水电燃使用）"),a("br"),t._v(" 2、账单欠费模式：预生成即表示在账单开始时间生成应收账单，后生成即在账单结束时间生成应收账单（非水电燃使用）"),a("br"),t._v(" 3、生成账单模式：手动生成账单需手动操作给收费对象生成应缴账单，一般用于停车费的收取； 自动生成账单则系统根据账单开始生成时间自动生成账单（非水电燃使用）"),a("br"),t._v(" 4、是否支持预缴：用户可提前预缴收费项，可设置预缴的优惠方案"),a("br"),t._v(" 5、未入住房屋折扣：房屋无人入住的状态下及没有绑定车辆的未使用车位可设置应收费用优惠折扣（以百分比计算，请输入0-100），例如输入80，则按80%进行收取，即100元仅需缴纳80元，优惠掉20元 ")])])],1),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:5,sm:16}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("收费科目：")]),a("a-select",{staticStyle:{width:"200px"},on:{change:t.handleChargeNumberChange},model:{value:t.subjectId,callback:function(e){t.subjectId=e},expression:"subjectId"}},t._l(t.chargeNumber,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1),a("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"280px"},attrs:{md:5,sm:16}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("收费项目：")]),a("a-select",{staticStyle:{width:"200px"},model:{value:t.charge_project_id,callback:function(e){t.charge_project_id=e},expression:"charge_project_id"}},t._l(t.chargeProject,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1),a("a-col",{staticStyle:{"padding-left":"5px","padding-right":"5px",width:"320px"},attrs:{md:7,sm:16}},[a("a-input-group",{staticStyle:{display:"flex"},attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px",width:"120px"}},[t._v("收费标准名称：")]),a("a-input",{staticStyle:{width:"65%"},attrs:{placeholder:"请输入收费标准名称"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1),a("a-col",{attrs:{md:2,sm:16}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("div",{staticClass:"add-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:3,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.PopupAddModel.add(0,"special")}}},[t._v(" 添加 ")])],1),a("a-col",{attrs:{md:8,sm:24}},[a("router-link",{attrs:{to:{path:"/village/village.charge.standard/chargeStandardAllDel"}}},[a("a-button",{attrs:{type:"primary"}},[t._v("已删除的收费标准")])],1)],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"standard",fn:function(e,i){return a("span",{},[3!=i.fees_type_status?a("a",{on:{click:function(e){return t.$refs.BindModel.list(i.id,i.charge_type,i)}}},[t._v("绑定")]):t._e()])}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.PopupEditModel.edit(i.id)}}},[t._v("编辑")]),a("a-popconfirm",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"20px",width:"225px"},attrs:{"cancel-text":"否","ok-text":"是"},on:{confirm:function(e){return t.deleteConfirm(i.id)}}},[a("template",{slot:"title"},[a("p",{staticStyle:{width:"180px"}},[t._v("删除时会影响已绑定的信息和未缴费账单，确认删除?")])]),a("a",{attrs:{href:"#"}},[t._v("删除")])],2)],1)}}])}),a("ruleInfo",{ref:"PopupEditModel",on:{ok:t.editRule}}),a("bindList",{ref:"BindModel",on:{ok:t.bindOk}}),a("ruleInfo",{ref:"PopupAddModel",on:{ok:t.addRule}})],1)},n=[],r=(a("7d24"),a("dfae")),s=(a("ac1f"),a("841c"),a("a0e0")),o=a("78bd"),c=a("2e92"),d=[{title:"收费标准名称",dataIndex:"charge_name",key:"charge_name"},{title:"收费标准生效时间",dataIndex:"charge_valid_time",key:"charge_valid_time"},{title:"收费项目名称",dataIndex:"project_name",key:"project_name"},{title:"所属收费科目",dataIndex:"charge_number_name",key:"charge_number_name"},{title:"计费模式",dataIndex:"fees_type",key:"fees_type"},{title:"账单生成周期设置",dataIndex:"bill_create_set",key:"bill_create_set"},{title:"账单欠费模式",dataIndex:"bill_arrears_set",key:"bill_arrears_set"},{title:"生成账单模式",dataIndex:"bill_type",key:"bill_type"},{title:"是否支持预缴",dataIndex:"is_prepaid",key:"is_prepaid"},{title:"未入住房屋折扣",dataIndex:"not_house_rate",key:"not_house_rate"},{title:"绑定费用对象",dataIndex:"bddx",key:"bddx",scopedSlots:{customRender:"standard"}},{title:"操作",dataIndex:"operation",key:"operation",width:"120px",scopedSlots:{customRender:"action"}}],l=[],h={name:"ChargeStandardAll",components:{ruleInfo:o["default"],bindList:c["default"],"a-collapse":r["a"],"a-collapse-panel":r["a"].Panel},data:function(){var t=this;return{pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},search:{keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,subjectId:"请选择科目",charge_project_id:"请选择项目",data:l,columns:d,chargeNumber:[],chargeProject:[]}},mounted:function(){this.getChargeNumber(),this.getList(1)},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="收费标准管理",this.loading=!0,1===e&&this.$set(this.pagination,"current",1),"请选择项目"===this.charge_project_id?this.search.charge_project_id=0:this.search.charge_project_id=this.charge_project_id,"请选择科目"===this.subjectId?this.search.subjectId=0:this.search.subjectId=this.subjectId,this.search["page"]=this.pagination.current,this.search["limit"]=this.pagination.pageSize,this.request(s["a"].ChargeRuleList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},onTableChange:function(t,e){this.pagination.current=t,this.pagination.pageSize=e,this.getList(),console.log("onTableChange==>",t,e)},table_change:function(t){var e=this;t.current&&t.current>0&&(e.$set(e.pagination,"current",t.current),e.getList())},searchList:function(){this.getList(1)},resetList:function(){this.search={keyword:"",page:1},this.subjectId="请选择科目",this.charge_project_id="请选择项目",this.getList(1)},editRule:function(t){this.getList()},bindOk:function(t){this.getList()},deleteConfirm:function(t){var e=this;this.request(s["a"].ChargeRuleDel,{id:t}).then((function(t){e.getList(1),e.$message.success("删除成功")}))},handleChargeNumberChange:function(t){this.charge_project_id="请选择项目",this.getChargeProject(t)},getChargeNumber:function(){var t=this;this.request(s["a"].getChargeSubject).then((function(e){t.chargeNumber=e}))},getChargeProject:function(t){var e=this,a={subject_id:t};this.request(s["a"].getChargeProject,a).then((function(t){e.chargeProject=t}))},addRule:function(t){this.getList()}}},u=h,p=(a("ff577"),a("2877")),g=Object(p["a"])(u,i,n,!1,null,"761ca6f4",null);e["default"]=g.exports},f836:function(t,e,a){},ff577:function(t,e,a){"use strict";a("f836")}}]);