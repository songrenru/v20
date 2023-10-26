(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fabb856"],{"4cd9":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{staticClass:"balance_info",attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("span",{staticClass:"label_col ant-form-item-required"},[e._v("用户列表")]),a("a-table",{staticClass:"components-table-demo-nested",staticStyle:{"padding-left":"100px"},attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination},on:{change:e.table_change}})],1),1==e.is_customized_meter_reading?a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("label",{staticClass:"label_col ant-form-item-required"},[e._v("余额类型")]),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.opt_money_type",{initialValue:e.post.opt_money_type}],expression:"['post.opt_money_type', {initialValue:post.opt_money_type}]"}],staticStyle:{width:"180px"},attrs:{placeholder:"请选择余额类型"}},[a("a-select-option",{attrs:{value:"cold_water_balance"}},[e._v("冷水余额")]),a("a-select-option",{attrs:{value:"hot_water_balance"}},[e._v("热水余额")]),a("a-select-option",{attrs:{value:"electric_balance"}},[e._v("电费余额")]),a("a-select-option",{attrs:{value:"current_money"}},[e._v("物业余额")])],1),a("span",{staticStyle:{"margin-left":"15px"}},[e._v(" 请选择要增加或减少余额的类型")])],1),a("a-col",{attrs:{span:6}})],1):e._e(),a("a-form-item",{attrs:{label:"",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("span",{staticClass:"label_col ant-form-item-required"},[e._v("操作类型")]),a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.status",{initialValue:e.post.status}],expression:"['post.status', {initialValue:post.status}]"}]},[a("a-radio",{attrs:{value:1}},[e._v(" 增加 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 减少 ")])],1),a("span",{staticStyle:{"margin-left":"15px"}},[e._v("操作类型为减少时，如果用户相应余额不够将")])],1),a("a-form-item",{attrs:{label:"",required:!0,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[e._v("缴费金额")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.price",{initialValue:e.post.price,rules:[{required:!0,message:e.L("请输入缴费金额！")}]}],expression:"['post.price',{ initialValue: post.price, rules: [{ required: true, message: L('请输入缴费金额！') }] }]"}],staticStyle:{width:"300px"},attrs:{placeholder:"请输入缴费金额",min:0,maxLength:10,oninput:"value=value.replace(/[^\\d.]/g, '').replace(/\\.{2,}/g, '.').replace('.', '$#$').replace(/\\./g, '').replace('$#$', '.').replace(/^(\\-)*(\\d+)\\.(\\d\\d).*$/, '$1$2.$3').replace(/^\\./g, '')",suffix:"元"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",required:!0,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[e._v("备注")]),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.remarks",{initialValue:e.post.remarks,rules:[{required:!0,message:e.L("请输入备注！")}]}],expression:"['post.remarks',{ initialValue: post.remarks, rules: [{ required: true, message: L('请输入备注！') }] }]"}],staticClass:"textarea",attrs:{placeholder:"请输入备注",rows:4}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},i=[],r=(a("ac1f"),a("841c"),a("a0e0")),s=[{title:"姓名",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"余额",dataIndex:"now_money",key:"now_money"}],n=[],l={components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{name:"",phone:"",page:1},data:n,columns:s,title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,uid:[],post:{pigcms_id:0,now_money:"",status:1,price:"",uid:0,remarks:"",opt_money_type:"current_money"},is_disabled:!0,is_customized_meter_reading:0}},mounted:function(){},methods:{add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=this;a.title="增加/减少",a.visible=!0,a.post.status=1,a.post.price="",a.post.remarks="",a.uid=e,a.post.opt_money_type="current_money",this.is_customized_meter_reading=0,t&&(this.is_customized_meter_reading=t),1==this.is_customized_meter_reading&&(this.columns=[{title:"姓名",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"冷水余额",dataIndex:"cold_water_balance",key:"cold_water_balance"},{title:"热水余额",dataIndex:"hot_water_balance",key:"hot_water_balance"},{title:"电费余额",dataIndex:"electric_balance",key:"electric_balance"},{title:"物业费余额",dataIndex:"now_money",key:"now_money"}]),a.request(r["a"].storageUserBalance,{uid:e}).then((function(t){a.post.uid=e,a.post.now_money=t.current_money})),a.List()},List:function(){var e=this;this.search["uid"]=this.uid,this.search["page"]=this.pagination.current,this.request(r["a"].storageUserList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list}))},table_change:function(e){var t=this;console.log("e",e),e.current&&e.current>0&&(t.pagination.current=e.current,t.List())},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){if(t)e.confirmLoading=!1;else{a.post.uid=e.uid;var o=r["a"].addAllVillageUserMoney;console.log("param",a.post),e.request(o,a.post).then((function(t){e.$message.success("操作成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,console.log(123),e.$emit("ok")}),1500),console.log(345)})).catch((function(t){e.confirmLoading=!1}))}}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.post.id=0,e.form=e.$form.createForm(e)}),500)}}},c=l,p=(a("e24a"),a("2877")),m=Object(p["a"])(c,o,i,!1,null,"00e46a40",null);t["default"]=m.exports},7873:function(e,t,a){},e24a:function(e,t,a){"use strict";a("7873")}}]);