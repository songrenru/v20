(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5561d4f2"],{"3e74":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cloudintercom"},[t._m(0),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:12}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("收费项目名称：")]),a("a-input",{staticStyle:{width:"160px","margin-right":"10px"},attrs:{placeholder:"请输入收费项目名称"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}}),a("p",{staticStyle:{"margin-top":"5px"}},[t._v("收费类型：")]),a("a-select",{staticStyle:{width:"150px","margin-right":"10px"},model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}},[a("a-select-option",{attrs:{value:0}},[t._v("请选择状态")]),a("a-select-option",{attrs:{value:1}},[t._v("每天")]),a("a-select-option",{attrs:{value:2}},[t._v("每月")]),a("a-select-option",{attrs:{value:3}},[t._v("每年")])],1),a("p",{staticStyle:{"margin-top":"5px"}},[t._v("状态：")]),a("a-select",{staticStyle:{width:"150px","margin-right":"10px"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}},[a("a-select-option",{attrs:{value:-1}},[t._v("请选择状态")]),a("a-select-option",{attrs:{value:1}},[t._v("启用")]),a("a-select-option",{attrs:{value:0}},[t._v("禁用")])],1)],1)],1),a("a-col",{staticStyle:{"margin-right":"10px"},attrs:{span:1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.getNmvChargeList(1)}}},[t._v("查询")])],1),a("a-col",{attrs:{span:1}},[a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1),a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.editNmvChargePage(t.info,"add")}}},[t._v("新增非机动车收费标准")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,rowKey:"id",loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.editNmvChargePage(i,"edit")}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.editNmvCharge(i.id,"del")}}},[t._v("删除")])],1)}}])}),a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1},on:{cancel:t.handleCancel,ok:t.handleSubmit}},[a("a-form",{staticClass:"third_user_info",attrs:{form:t.checkForm,labelAlign:"left"}},[a("a-form-item",{attrs:{label:"收费项目名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol,placeholder:"请输入收费项目名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nmvChargeName",{initialValue:t.info.nmvChargeName,rules:[{required:!0,message:"请输入收费项目名称!"}]}],expression:"['nmvChargeName', { initialValue: info.nmvChargeName, rules: [{ required: true, message: '请输入收费项目名称!' }] }]"}]})],1),a("a-form-item",{attrs:{label:"收费类型",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:t.info.type,rules:[{required:!0}]}],expression:"['type', { initialValue: info.type, rules: [{ required: true }] }]"}]},[a("a-radio",{attrs:{value:1}},[t._v("每天")]),a("a-radio",{attrs:{value:2}},[t._v("每月")]),a("a-radio",{attrs:{value:3}},[t._v("每年")])],1)],1),a("a-form-item",{attrs:{label:"收费标准金额",labelCol:t.labelCol,wrapperCol:t.wrapperCol,placeholder:"请输入收费标准金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["price",{initialValue:t.info.price,rules:[{required:!0,message:"请输入收费标准金额!"}]}],expression:"['price', { initialValue: info.price, rules: [{ required: true, message: '请输入收费标准金额!' }] }]"}],staticStyle:{width:"150px"},attrs:{min:0,precision:2}})],1),a("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:t.info.status,rules:[{required:!0}]}],expression:"['status', { initialValue: info.status, rules: [{ required: true }] }]"}]},[a("a-radio",{attrs:{value:1}},[t._v("启用")]),a("a-radio",{attrs:{value:0}},[t._v("禁用")])],1)],1)],1)],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"page_top"},[t._v(" 1、自然月天数计算：收费的起止时间根据每月的实际天数计算费用。若足月的情兄下按照自然月计算,不足月的情况下按照天数计算;"),a("br"),t._v(" 2、一个月天数计算：收费的起止时间为根据每月的实际天数往后计算一个月费用;"),a("br"),t._v(" 3、收费类型为每天：起始时间为当天的时间。例：2021-12-04 15:20:21至2021-12-04 23:59:59;"),a("br"),t._v(" 4、收费类型为每月：起始时间为一个月的时间。例：2021-12-01至2021-12-31;"),a("br"),t._v(" 5、收费类型为每年：起始时间为一年的时间。例：2021-12-04至2022-12-03;"),a("br"),a("span",{staticClass:"notice"},[t._v('注意：收费的起始时间跟开启的"自然月天数或一个月天数"有关联')])])}],s=(a("ac1f"),a("841c"),a("a0e0")),n=[{title:"收费项目名称",dataIndex:"nmv_charge_name",key:"nmv_charge_name"},{title:"收费类型",dataIndex:"type_text",key:"type_text"},{title:"收费标准金额",dataIndex:"price",key:"price"},{title:"状态",dataIndex:"status_text",key:"status_text"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],o=[],l={name:"nmvChargeRule",data:function(){return{labelCol:{span:4},wrapperCol:{span:14},pagination:{current:1,pageSize:10,total:10},search:{keyword:"",type:0,status:-1,page:1},loading:!1,columns:n,data:o,visible:!1,title:"编辑",type:"edit",checkForm:this.$form.createForm(this),info:{id:"",nmvChargeName:"",type:1,price:"",status:0}}},mounted:function(){this.getNmvChargeList()},methods:{getNmvChargeList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===e&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.request(s["a"].getNmvChargeList,this.search).then((function(e){console.log(e),t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1}))},resetList:function(){this.$set(this.pagination,"current",1),this.search={keyword:"",type:0,status:-1,page:1},this.getNmvChargeList()},table_change:function(t){var e=this;t.current&&t.current>0&&(e.$set(e.pagination,"current",t.current),e.getNmvChargeList())},editNmvChargePage:function(t,e){this.visible=!0,this.type=e,this.title="edit"===e?"编辑":"添加",this.info={id:t["id"],nmvChargeName:t["nmv_charge_name"],type:t["type"],price:t["price"],status:t["status"]}},editNmvCharge:function(t,e){var a=this,i={type:e,id:t,info:this.info};this.request(s["a"].editNmvChargeInfo,i).then((function(t){a.$message.success(t.message),a.handleCancel()}))},handleCancel:function(){var t=this;this.visible=!1,this.info={id:"",nmvChargeName:"",type:1,price:"",status:0},this.type="",this.getNmvChargeList(),setTimeout((function(){t.checkForm=t.$form.createForm(t)}),500)},handleSubmit:function(){var t=this;this.checkForm.validateFields((function(e,a){e||(t.info.nmvChargeName=a["nmvChargeName"],t.info.type=a["type"],t.info.price=a["price"],t.info.status=a["status"])})),this.editNmvCharge(this.info.id,this.type)}}},c=l,u=(a("790c"),a("2877")),p=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=p.exports},"44df":function(t,e,a){},"790c":function(t,e,a){"use strict";a("44df")}}]);