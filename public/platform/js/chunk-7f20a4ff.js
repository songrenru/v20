(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f20a4ff","chunk-4d4ad090","chunk-000310e2","chunk-799a54fe","chunk-0700195e"],{"0a5f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box userList"},[a("div",{staticClass:"content-p1"},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[a("span",{staticStyle:{"font-weight":"500"}},[t._v(" 1、展示的是当前小区手机号唯一的业主 "),a("br"),t._v(" 2、不同手机号业主对应的余额、关联房间数、关联车位数 "),a("br"),t._v(" 例如： 张三在平台注册了一个账号，手机号是 18312345678， 并且在该小区1号楼和5号楼都是户主，对于小区而言他仅仅是一个业主，只是拥有了多套房产（或车位），所以这里不会显示两条张三的信息。而且这个住户的余额就是张三在这个平台上的总余额 。 如果张三分别用两个手机号（18312345678、18387654321）注册了平台用户且分别绑定了该小区的两个不同的房间，那么这里就会显示两个张三的余额信息 ")])])],1)],1)]),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("住户姓名：")]),a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入住户姓名"},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("手机号：")]),a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入手机号"},model:{value:t.search.phone,callback:function(e){t.$set(t.search,"phone",e)},expression:"search.phone"}})],1)],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.balanceModel.add(i.pigcms_id)}}},[t._v("增加/减少")]),a("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.balanceListModel.List(i.uid)}}},[t._v("余额记录")]),a("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.orderListModel.List(i.uid)}}},[t._v("消费记录")])])}}])}),a("balanceInfo",{ref:"balanceModel",on:{ok:t.balanceInfo}}),a("balanceList",{ref:"balanceListModel",on:{ok:t.balanceListInfo}}),a("orderList",{ref:"orderListModel",on:{ok:t.orderInfo}})],1)},n=[],s=(a("7d24"),a("dfae")),o=(a("ac1f"),a("841c"),a("a0e0")),r=a("6fd9"),l=a("5a58"),c=a("eb05"),d=[{title:"住户姓名",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"余额",dataIndex:"now_money",key:"now_money"},{title:"关联房间数",dataIndex:"room_num",key:"room_num"},{title:"关联车位数",dataIndex:"position_num",key:"position_num"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],p=[],u={name:"storageUserList_old",filters:{},components:{balanceInfo:r["default"],balanceList:l["default"],orderList:c["default"],"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){var t=this;return{reply_content:"",pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},search:{name:"",phone:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:p,columns:d,oldVersion:""}},activated:function(){this.getList()},methods:{onTableChange:function(t,e){this.pagination.current=t,this.pagination.pageSize=e,this.getList(),console.log("onTableChange==>",t,e)},getList:function(){var t=this;this.loading=!0,this.search["page"]=this.pagination.current,this.search["limit"]=this.pagination.pageSize,this.request(o["a"].storageUserList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.data=e.list,t.loading=!1,t.oldVersion=e.oldVersion}))},balanceInfo:function(t){this.getList()},balanceListInfo:function(){this.getList()},orderInfo:function(t){this.getList()},searchList:function(){console.log("search",this.search),this.pagination.current=1,this.pagination.pageSize=10,this.getList()},resetList:function(){this.search={name:"",phone:"",page:1},this.pagination.current=1,this.pagination.pageSize=10,this.getList()}}},m=u,h=(a("3ea11"),a("2877")),f=Object(h["a"])(m,i,n,!1,null,"e283b81e",null);e["default"]=f.exports},"3ea11":function(t,e,a){"use strict";a("77ce")},"40cbb":function(t,e,a){},5165:function(t,e,a){},"57ac":function(t,e,a){"use strict";a("5165")},"5a58":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"money",fn:function(e,i){return a("span",{},[1==i.type?a("div",{staticStyle:{color:"green"}},[t._v(t._s(i.money))]):t._e(),2==i.type?a("div",{staticStyle:{color:"red"}},[t._v(t._s(i.money))]):t._e()])}}])})],1)},n=[],s=(a("ac1f"),a("841c"),a("a0e0")),o=[{title:"订单编号",dataIndex:"order_no",key:"order_no"},{title:"预存时间",dataIndex:"add_time",key:"add_time"},{title:"金额变更前（元）",dataIndex:"current_money",key:"current_money"},{title:"缴费金额（元）",dataIndex:"money",key:"money",scopedSlots:{customRender:"money"}},{title:"金额变更后（元）",dataIndex:"after_price",key:"after_price"},{title:"备注",dataIndex:"desc",key:"desc"}],r=[],l={name:"balanceList",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:r,columns:o,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="余额记录",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(s["a"].storageUserBalanceRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},c=l,d=(a("d5ec"),a("2877")),p=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=p.exports},"6fd9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticClass:"balance_info",attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col "},[t._v("现在余额")]),a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:30,disabled:t.is_disabled,suffix:"元"},model:{value:t.post.now_money,callback:function(e){t.$set(t.post,"now_money",e)},expression:"post.now_money"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("状态")]),a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.status",{initialValue:t.post.status}],expression:"['post.status', {initialValue:post.status}]"}]},[a("a-radio",{attrs:{value:1}},[t._v(" 增加 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 减少 ")])],1)],1),a("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("缴费金额")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.price",{initialValue:t.post.price,rules:[{required:!0,message:t.L("请输入缴费金额！")}]}],expression:"['post.price',{ initialValue: post.price, rules: [{ required: true, message: L('请输入缴费金额！') }] }]"}],staticStyle:{width:"300px"},attrs:{placeholder:"请输入缴费金额",min:0,maxLength:10,oninput:"value=value.replace(/[^\\d.]/g, '').replace(/\\.{2,}/g, '.').replace('.', '$#$').replace(/\\./g, '').replace('$#$', '.').replace(/^(\\-)*(\\d+)\\.(\\d\\d).*$/, '$1$2.$3').replace(/^\\./g, '')",suffix:"元"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("备注")]),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.remarks",{initialValue:t.post.remarks,rules:[{required:!0,message:t.L("请输入备注！")}]}],expression:"['post.remarks',{ initialValue: post.remarks, rules: [{ required: true, message: L('请输入备注！') }] }]"}],staticClass:"textarea",attrs:{placeholder:"请输入备注",rows:4}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},n=[],s=a("a0e0"),o={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,post:{pigcms_id:0,now_money:"",status:1,price:"",remarks:""},is_disabled:!0}},mounted:function(){},methods:{add:function(t){var e=this;e.title="增加/减少",e.visible=!0,e.post.status=1,e.post.price="",e.post.remarks="",console.log("pigcms_iddfsdf",t),e.request(s["a"].storageUserBalance,{pigcms_id:t}).then((function(t){e.post.pigcms_id=t.pigcms_id,e.post.now_money=t.now_money}))},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{a.post.pigcms_id=t.post.pigcms_id;var i=s["a"].storageUserBalanceChange;t.request(i,a.post).then((function(e){t.$message.success("操作成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,console.log(123),t.$emit("ok")}),1500),console.log(345)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},r=o,l=(a("da27"),a("2877")),c=Object(l["a"])(r,i,n,!1,null,"43cba591",null);e["default"]=c.exports},"77ce":function(t,e,a){},"9cf1":function(t,e,a){},a9b7:function(t,e,a){"use strict";a("9cf1")},ce95:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[t.is_set?a("div",{staticStyle:{"margin-bottom":"20px"},domProps:{innerHTML:t._s(t.set_msg)}}):t._e(),a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"选择打印模板",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择打印模板"},model:{value:t.template_id,callback:function(e){t.template_id=e},expression:"template_id"}},t._l(t.template_list,(function(e,i){return a("a-select-option",{key:i,attrs:{value:e.template_id}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)],1)],1)],1),a("print-order",{ref:"PrintModel"})],1)},n=[],s=a("a0e0"),o=a("f7e3"),r={components:{PrintOrder:o["default"]},data:function(){return{title:"选择打印模板",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,order_id:0,template_id:void 0,template_list:[],pigcms_id:0,choice_ids:[],is_set:!1,set_msg:"",set_type:0,source_type:0,print_type:0}},mounted:function(){},methods:{add:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3?arguments[3]:void 0;this.source_type=0,this.print_type=void 0!=i&&i?i:0,0==a?(this.title="选择打印模板",this.is_set=!1,this.set_msg=""):(this.is_set=!0,this.title="设置打印模板",1==a?(this.source_type=1,this.set_msg="1、在收银台设置打印模板，收银台支持打印功能。打印功能；不设置打印模板，则不支持。<br/>2、设置打印模板后，在收银台显示已缴账单按钮，进入查看所有已缴账单数据。"):2==a&&(this.set_msg='1、设置打印模板后，联动收银台打印模板功能。<br/>2、设置打印模板后，<span style="color: #1890ff">已缴账单</span>列表点击<span style="color: #1890ff">打印</span>按钮直接打印')),1==this.print_type&&(this.title="设置待缴账单打印模板",this.set_msg='1、设置<span style="color: #1583e3">待缴</span>账单打印模板后，设置后此模板用于<span style="color: #1583e3">未交费</span>的账单打印<br />2、最多可选8个账单打印'),this.set_type=a,this.template_id=void 0,this.visible=!0,this.pigcms_id=e,this.template_list=[],this.order_id=t,this.choice_ids=[],this.getTemplate()},batchPrint:function(t){var e=this;if(t.length<1)return e.$message.error("请勾选账单"),!1;e.title="选择打印模板",e.visible=!0,e.template_id=void 0,e.template_list=[],e.order_id=0,e.pigcms_id=0,e.choice_ids=t,this.set_type=0,this.source_type=0,this.print_type=0,e.getTemplate()},getTemplate:function(){var t=this;this.request(s["a"].getTemplate,{print_type:this.print_type}).then((function(e){t.template_list=e.list,e&&e.template_id>0&&(t.template_id=e.template_id)}))},handleSubmit:function(){var t=this;if(!this.template_id)return this.$message.error("选择打印模板"),!1;this.set_type>0?(this.confirmLoading=!0,this.request(s["a"].editSetPrint,{template_id:this.template_id,print_type:this.print_type}).then((function(e){t.$message.success("编辑成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.print_type=0,t.confirmLoading=!1,t.$emit("ok",{type:t.source_type,template_id:t.template_id})}),1e3)})).catch((function(t){}))):this.$refs.PrintModel.add(this.order_id,this.template_id,this.pigcms_id,this.choice_ids)},handleCancel:function(){this.visible=!1,this.print_type=0}}},l=r,c=(a("57ac"),a("2877")),d=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=d.exports},d1892:function(t,e,a){},d5ec:function(t,e,a){"use strict";a("40cbb")},da27:function(t,e,a){"use strict";a("d1892")},eb05:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1400,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("div",{staticClass:"content-p1"},[a("p",[t._v("1、消费记录展示的是，水费、电费、燃气费三种费用，缴费记录")])]),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"operation",fn:function(e,i){return a("span",{},[1==i.is_paid?a("div",[a("a",{on:{click:function(e){return t.$refs.PrintModel.add(i.order_id,i.pigcms_id)}}},[t._v("打印")])]):a("div",[a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认催缴?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.send_message(i.order_id)}}},[a("a",[t._v("一键催缴")])])],1)])}}])}),a("get-print-template",{ref:"PrintModel"})],1)},n=[],s=(a("ac1f"),a("841c"),a("a0e0")),o=a("ce95"),r=[{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"收费所属类别",dataIndex:"order_type",key:"order_type"},{title:"单价（元）",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"add_time",key:"add_time"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"余额（元）",dataIndex:"now_money",key:"now_money"},{title:"应收费用（元）",dataIndex:"total_money",key:"total_money"},{title:"实缴费用（元）",dataIndex:"pay_money",key:"pay_money"},{title:"操作人",dataIndex:"realname",key:"realname"},{title:"备注",dataIndex:"note",key:"note"},{title:"操作",dataIndex:"operation",width:"100px",key:"operation",scopedSlots:{customRender:"operation"}}],l=[],c={name:"orderList",filters:{},components:{GetPrintTemplate:o["default"]},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:l,columns:r,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="消费记录",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(s["a"].storageUserOrderRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},send_message:function(t){var e=this;this.request(s["a"].storageUserSendMessage,{order_id:t}).then((function(t){e.$message.success("发送成功")}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},searchList:function(){this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.$set(this.pagination,"current",1),this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},d=c,p=(a("a9b7"),a("2877")),u=Object(p["a"])(d,i,n,!1,null,null,null);e["default"]=u.exports}}]);