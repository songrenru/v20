(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e688af0","chunk-54a535bb","chunk-53b36e89","chunk-07f67e62","chunk-45bd1a9e","chunk-9f525824","chunk-2ceb5483","chunk-9ae3f7f8","chunk-55d8e28e"],{"0b524":function(t,e,a){},"1573e":function(t,e,a){"use strict";a("2f2d")},"1c7b":function(t,e,a){},"242c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1400,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"operation",fn:function(a,i){return e("span",{},[1==i.is_paid?e("div",[e("a",{on:{click:function(e){return t.$refs.PrintModel.add(i.order_id,i.pigcms_id)}}},[t._v("打印")])]):e("div",[e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认催缴?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.send_message(i.order_id)}}},[e("a",[t._v("一键催缴")])])],1)])}}])}),e("get-print-template",{ref:"PrintModel"})],1)},n=[],s=(a("aa48"),a("8f7e"),a("a0e0")),o=a("ce95"),r=[{title:"订单编号",dataIndex:"order_id",key:"order_id"},{title:"收费项目",dataIndex:"project_name",key:"project_name"},{title:"收费所属类别",dataIndex:"order_type",key:"order_type"},{title:"单价（元）",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"add_time",key:"add_time"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"应收费用（元）",dataIndex:"total_money",key:"total_money"},{title:"实缴费用（元）",dataIndex:"pay_money",key:"pay_money"},{title:"住户余额支付（元）",dataIndex:"now_money",key:"now_money"},{title:"备注",dataIndex:"note",key:"note"},{title:"操作",dataIndex:"operation",width:"100px",key:"operation",scopedSlots:{customRender:"operation"}}],l=[],c={name:"orderList",filters:{},components:{GetPrintTemplate:o["default"]},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:l,columns:r,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="消费记录",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(s["a"].storageUserOrderRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},send_message:function(t){var e=this;this.request(s["a"].storageUserSendMessage,{order_id:t}).then((function(t){e.$message.success("发送成功")}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},searchList:function(){this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.$set(this.pagination,"current",1),this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},d=c,u=(a("8772"),a("0b56")),p=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=p.exports},"2f2d":function(t,e,a){},"3bd8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"money",fn:function(a,i){return e("span",{},[1==i.type?e("div",{staticStyle:{color:"green"}},[t._v(t._s(i.money))]):t._e(),2==i.type?e("div",{staticStyle:{color:"red"}},[t._v(t._s(i.money))]):t._e()])}}])})],1)},n=[],s=(a("aa48"),a("8f7e"),a("a0e0")),o=[{title:"订单编号",dataIndex:"order_no",key:"order_no"},{title:"预存时间",dataIndex:"add_time",key:"add_time"},{title:"金额变更前（元）",dataIndex:"current_money",key:"current_money"},{title:"缴费金额（元）",dataIndex:"money",key:"money",scopedSlots:{customRender:"money"}},{title:"金额变更后（元）",dataIndex:"after_price",key:"after_price"},{title:"备注",dataIndex:"desc",key:"desc"}],r=[],l={name:"balanceList",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:r,columns:o,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="余额记录",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(s["a"].storageUserBalanceRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},c=l,d=(a("566b"),a("0b56")),u=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=u.exports},"42e0":function(t,e,a){"use strict";a("def8")},"4cd9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{staticClass:"balance_info",attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"label_col ant-form-item-required"},[t._v("用户列表")]),e("a-table",{staticClass:"components-table-demo-nested",staticStyle:{"padding-left":"100px"},attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.table_change}})],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"label_col ant-form-item-required"},[t._v("状态")]),e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.status",{initialValue:t.post.status}],expression:"['post.status', {initialValue:post.status}]"}]},[e("a-radio",{attrs:{value:1}},[t._v(" 增加 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 减少 ")])],1)],1),e("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col ant-form-item-required"},[t._v("缴费金额")]),e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.price",{initialValue:t.post.price,rules:[{required:!0,message:t.L("请输入缴费金额！")}]}],expression:"['post.price',{ initialValue: post.price, rules: [{ required: true, message: L('请输入缴费金额！') }] }]"}],staticStyle:{width:"300px"},attrs:{placeholder:"请输入缴费金额",min:0,maxLength:10,oninput:"value=value.replace(/[^\\d.]/g, '').replace(/\\.{2,}/g, '.').replace('.', '$#$').replace(/\\./g, '').replace('$#$', '.').replace(/^(\\-)*(\\d+)\\.(\\d\\d).*$/, '$1$2.$3').replace(/^\\./g, '')",suffix:"元"}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col ant-form-item-required"},[t._v("备注")]),e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.remarks",{initialValue:t.post.remarks,rules:[{required:!0,message:t.L("请输入备注！")}]}],expression:"['post.remarks',{ initialValue: post.remarks, rules: [{ required: true, message: L('请输入备注！') }] }]"}],staticClass:"textarea",attrs:{placeholder:"请输入备注",rows:4}})],1),e("a-col",{attrs:{span:6}})],1)],1)],1)],1)},n=[],s=(a("aa48"),a("8f7e"),a("a0e0")),o=[{title:"姓名",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"余额",dataIndex:"now_money",key:"now_money"}],r=[],l={components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{name:"",phone:"",page:1},data:r,columns:o,title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,uid:[],post:{pigcms_id:0,now_money:"",status:1,price:"",uid:0,remarks:""},is_disabled:!0}},mounted:function(){},methods:{add:function(t){var e=this;e.title="增加/减少",e.visible=!0,e.post.status=1,e.post.price="",e.post.remarks="",e.uid=t,e.request(s["a"].storageUserBalance,{uid:t}).then((function(a){e.post.uid=t,e.post.now_money=a.current_money})),e.List()},List:function(){var t=this;this.search["uid"]=this.uid,this.search["page"]=this.pagination.current,this.request(s["a"].storageUserList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list}))},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{a.post.uid=t.uid;var i=s["a"].addAllVillageUserMoney;console.log("param",a.post),t.request(i,a.post).then((function(e){t.$message.success("操作成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,console.log(123),t.$emit("ok")}),1500),console.log(345)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},c=l,d=(a("42e0"),a("0b56")),u=Object(d["a"])(c,i,n,!1,null,"0439f9f8",null);e["default"]=u.exports},"566b":function(t,e,a){"use strict";a("9064")},"57ac":function(t,e,a){"use strict";a("d2e9")},"6f4b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{staticClass:"balance_info",attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("现在余额")]),e("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:30,disabled:t.is_disabled,suffix:"元"},model:{value:t.post.now_money,callback:function(e){t.$set(t.post,"now_money",e)},expression:"post.now_money"}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"label_col ant-form-item-required"},[t._v("状态")]),e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.status",{initialValue:t.post.status}],expression:"['post.status', {initialValue:post.status}]"}]},[e("a-radio",{attrs:{value:1}},[t._v(" 增加 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 减少 ")])],1)],1),e("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col ant-form-item-required"},[t._v("缴费金额")]),e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.price",{initialValue:t.post.price,rules:[{required:!0,message:t.L("请输入缴费金额！")}]}],expression:"['post.price',{ initialValue: post.price, rules: [{ required: true, message: L('请输入缴费金额！') }] }]"}],staticStyle:{width:"300px"},attrs:{placeholder:"请输入缴费金额",min:0,maxLength:10,oninput:"value=value.replace(/[^\\d.]/g, '').replace(/\\.{2,}/g, '.').replace('.', '$#$').replace(/\\./g, '').replace('$#$', '.').replace(/^(\\-)*(\\d+)\\.(\\d\\d).*$/, '$1$2.$3').replace(/^\\./g, '')",suffix:"元"}})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col ant-form-item-required"},[t._v("备注")]),e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.remarks",{initialValue:t.post.remarks,rules:[{required:!0,message:t.L("请输入备注！")}]}],expression:"['post.remarks',{ initialValue: post.remarks, rules: [{ required: true, message: L('请输入备注！') }] }]"}],staticClass:"textarea",attrs:{placeholder:"请输入备注",rows:4}})],1),e("a-col",{attrs:{span:6}})],1)],1)],1)],1)},n=[],s=a("a0e0"),o={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,post:{pigcms_id:0,now_money:"",status:1,price:"",uid:0,remarks:""},is_disabled:!0}},mounted:function(){},methods:{add:function(t){var e=this;e.title="增加/减少",e.visible=!0,e.post.status=1,e.post.price="",e.post.remarks="",e.request(s["a"].storageUserBalance,{uid:t}).then((function(a){e.post.uid=t,e.post.now_money=a.current_money}))},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{a.post.uid=t.post.uid;var i=s["a"].storageUserBalanceChange;t.request(i,a.post).then((function(e){t.$message.success("操作成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,console.log(123),t.$emit("ok")}),1500),console.log(345)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},r=o,l=(a("8c76"),a("0b56")),c=Object(l["a"])(r,i,n,!1,null,"78f3d520",null);e["default"]=c.exports},7186:function(t,e,a){"use strict";a.r(e);a("54f8"),a("aa48"),a("8f7e");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-suggestions-list-box userList"},[e("div",{staticClass:"content-p1"},[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("a-collapse",{attrs:{accordion:""}},[e("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[e("span",{staticStyle:{"font-weight":"500"}},[t._v(" 1、展示的是当前小区手机号唯一的业主 "),e("br"),t._v(" 2、不同手机号业主对应的余额、关联房间数、关联车位数 "),e("br"),t._v(" 例如： 张三在平台注册了一个账号，手机号是 18312345678， 并且在该小区1号楼和5号楼都是户主，对于小区而言他仅仅是一个业主，只是拥有了多套房产（或车位），所以这里不会显示两条张三的信息。而且这个住户的余额就是张三在这个平台上的总余额 。 如果张三分别用两个手机号（18312345678、18387654321）注册了平台用户且分别绑定了该小区的两个不同的房间，那么这里就会显示两个张三的余额信息 ")])])],1)],1)]),e("div",{staticClass:"search-box"},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("p",{staticStyle:{"margin-top":"5px"}},[t._v("姓名：")]),e("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入姓名"},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("p",{staticStyle:{"margin-top":"5px"}},[t._v("手机号：")]),e("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入手机号"},model:{value:t.search.phone,callback:function(e){t.$set(t.search,"phone",e)},expression:"search.phone"}})],1)],1),e("a-col",{attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),e("a-col",{attrs:{md:2,sm:24}},[e("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1),e("a-row",{staticStyle:{"margin-top":"24px"},attrs:{gutter:48}},[e("a-col",{attrs:{md:3,sm:24}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addAllUserMoney()}}},[t._v(" 批量修改住户余额 ")])],1),e("a-col",{attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.uploadMoneyModel.add()}}},[t._v("导入住户余额")])],1)],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-selection":t.rowSelection,rowKey:"uid"},scopedSlots:t._u([{key:"action",fn:function(a,i){return e("span",{},[e("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.balanceModel.add(i.uid)}}},[t._v("增加/减少")]),e("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.balanceListModel.List(i.uid)}}},[t._v("余额记录")]),e("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.orderListModel.List(i.uid)}}},[t._v("消费记录")])])}},{key:"room_num",fn:function(a,i){return e("span",{},[e("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.roomListModel.List(i.uid)}}},[t._v(t._s(i.room_num))])])}},{key:"position_num",fn:function(a,i){return e("span",{},[e("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.positionListModel.List(i.uid)}}},[t._v(t._s(i.position_num))])])}}])}),e("balanceInfo",{ref:"balanceModel",on:{ok:t.balanceInfo}}),e("allBalanceInfo",{ref:"allBalanceModel",on:{ok:t.balanceInfo}}),e("balanceList",{ref:"balanceListModel",on:{ok:t.balanceListInfo}}),e("roomList",{ref:"roomListModel",on:{ok:t.roomListInfo}}),e("positionList",{ref:"positionListModel",on:{ok:t.positionListInfo}}),e("orderList",{ref:"orderListModel",on:{ok:t.orderInfo}}),e("uploadUserMoney",{ref:"uploadMoneyModel",on:{ok:t.orderInfo}})],1)},n=[],s=(a("b121"),a("7d40")),o=a("a0e0"),r=a("6f4b"),l=a("4cd9"),c=a("3bd8"),d=a("e617"),u=a("dd03"),p=a("242c"),m=a("c2d4"),h=[{title:"姓名",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"余额",dataIndex:"now_money",key:"now_money"},{title:"关联房间数",dataIndex:"room_num",key:"room_num",scopedSlots:{customRender:"room_num"}},{title:"关联车位数",dataIndex:"position_num",key:"position_num",scopedSlots:{customRender:"position_num"}},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],f=[],g={name:"storageUserList",filters:{},components:{allBalanceInfo:l["default"],balanceInfo:r["default"],balanceList:c["default"],positionList:u["default"],roomList:d["default"],orderList:p["default"],uploadUserMoney:m["default"],"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){var t=this;return{reply_content:"",pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},search:{name:"",phone:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:f,columns:h,oldVersion:"",selectedRowKeys:[]}},activated:function(){this.getList()},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}}},methods:{onSelectChange:function(t,e){console.log("selectedRowKeys: ".concat(t),"selectedRows: ",e),this.selectedRowKeys=t,console.log("villagess",this.selectedRowKeys)},onTableChange:function(t,e){this.pagination.current=t,this.pagination.pageSize=e,this.getList(),console.log("onTableChange==>",t,e)},getList:function(){var t=this;this.loading=!0,this.search["page"]=this.pagination.current,this.search["limit"]=this.pagination.pageSize,this.request(o["a"].storageUserList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.data=e.list,t.loading=!1,t.oldVersion=e.oldVersion}))},addAllUserMoney:function(){if(console.log("uid",this.selectedRowKeys),!(this.selectedRowKeys.length>0))return this.$message.error("请先选择用户"),!1;this.$refs.allBalanceModel.add(this.selectedRowKeys)},balanceInfo:function(t){this.getList()},balanceListInfo:function(){this.getList()},roomListInfo:function(){this.getList()},positionListInfo:function(){this.getList()},orderInfo:function(t){this.getList()},searchList:function(){console.log("search",this.search),this.pagination.current=1,this.pagination.pageSize=10,this.getList()},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},resetList:function(){this.search={name:"",phone:"",page:1},this.pagination.current=1,this.pagination.pageSize=10,this.getList()}}},_=g,b=(a("1573e"),a("0b56")),v=Object(b["a"])(_,i,n,!1,null,"a7bfef38",null);e["default"]=v.exports},"83cd":function(t,e,a){"use strict";a("0b524")},8772:function(t,e,a){"use strict";a("cf06")},"8c76":function(t,e,a){"use strict";a("c4f2")},9064:function(t,e,a){},"934f":function(t,e,a){},c2d4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:600,visible:t.visibleUpload,maskClosable:!1,confirmLoading:t.confirmLoading,footer:null},on:{cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("div",[e("span",[t._v("示例表格")]),e("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/static/file/village/villageUserMoney/villageUserMoneyModel.xlsx",target:"_blank"}},[t._v("点击下载")])]),e("div",{staticStyle:{"border-bottom":"1px solid #e9e6e6","margin-top":"20px"}},[e("span",[t._v("导入Excel")]),e("a-upload",{attrs:{name:"file","file-list":t.avatarFileList,action:t.upload,headers:t.headers,"before-upload":t.beforeUploadFile},on:{change:t.handleChangeUpload}},[e("a-button",{staticStyle:{margin:"20px   20px  10px"},attrs:{type:"primary"}},[e("a-icon",{attrs:{type:"upload"}}),t._v(" 导入 ")],1)],1)],1),t.show?e("div",{staticStyle:{"margin-top":"20px"}},[e("span",[t._v("导入失败")]),e("a",{staticStyle:{"margin-left":"20px"},attrs:{href:t.url,target:"_blank"}},[t._v("点击下载带入失败数据表格")])]):t._e(),e("div",{staticStyle:{"margin-top":"20px"}},[e("span",{staticStyle:{"font-weight":"500"}},[t._v(" 1、对应物业编号、楼栋、单元、楼层和房间号对应已经存在的名称进行导入"),e("br"),t._v(" 2、导入的住户余额信息，必须跟小区业主列表数据一致，否则导入失败 ")])])])],1)},n=[],s=a("a0e0"),o=a("ca00"),r={data:function(){return{upload:"/v20/public/index.php"+s["a"].uploadUserMoneyFiles+"?upload_dir=/house/excel/userMoneyUpload",avatarFileList:[],headers:{authorization:"authorization-text"},visibleUpload:!1,confirmLoading:!1,title:"导入",url:"",show:!1,fileloading:!1,data_arr:[],tokenName:"",sysName:"",charge_name:"",project_id:0}},activated:function(){var t=Object(o["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village"},methods:{add:function(t,e){this.title="导入",this.visibleUpload=!0,this.url=window.location.host+"/v20/runtime/demo.xlsx",this.avatarFileList=[],this.charge_name=t,this.project_id=e},beforeUploadFile:function(t){var e=t.size/1024/1024<20;return e?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):e:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChangeUpload:function(t){var e=this;if(console.log("########",t),t.file&&!t.file.status&&this.fileloading)return!1;if("uploading"===t.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.avatarFileList=t.fileList}if("uploading"!==t.file.status&&(this.fileloading=!1,console.log(t.file,t.fileList)),"done"==t.file.status&&t.file&&t.file.response){var a=t.file.response;if(1e3===a.status)this.data_arr.push(a.data),console.log("data_arr",this.data_arr),this.avatarFileList=t.fileList,console.log("--------",a.data.url),this.request(s["a"].exportUserMoney,{tokenName:this.tokenName,file:a.data.url}).then((function(t){t.error?(e.$parent.getList(),e.$message.success("上传成功")):window.location.href=t.data})),this.visibleUpload=!1;else for(var i in this.$message.error(t.file.response.msg),this.avatarFileList=[],t.fileList)if(t.fileList[i]){var n=t.fileList[i];console.log("info_1",n),n&&n.response&&1e3===n.response.status&&this.avatarFileList.push(n)}}if("removed"==t.file.status&&t.file){var o=t.file.response;if(o&&1e3===o.status)for(var i in this.data_arr=[],t.fileList)if(t.fileList[i]){var r=t.fileList[i];r&&r.response&&1e3===r.response.status&&this.data_arr.push(r.response.data)}this.avatarFileList=t.fileList,console.log("data_arr1",this.data_arr)}},handleCancel:function(){this.visibleUpload=!1}}},l=r,c=(a("ea9e"),a("0b56")),d=Object(c["a"])(l,i,n,!1,null,"7009d00a",null);e["default"]=d.exports},c4f2:function(t,e,a){},ce95:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[t.is_set?e("div",{staticStyle:{"margin-bottom":"20px"},domProps:{innerHTML:t._s(t.set_msg)}}):t._e(),e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"选择打印模板",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择打印模板"},model:{value:t.template_id,callback:function(e){t.template_id=e},expression:"template_id"}},t._l(t.template_list,(function(a,i){return e("a-select-option",{key:i,attrs:{value:a.template_id}},[t._v(" "+t._s(a.title)+" ")])})),1)],1)],1)],1)],1),e("print-order",{ref:"PrintModel"})],1)},n=[],s=a("a0e0"),o=a("f7e3"),r={components:{PrintOrder:o["default"]},data:function(){return{title:"选择打印模板",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,order_id:0,template_id:void 0,template_list:[],pigcms_id:0,choice_ids:[],is_set:!1,set_msg:"",set_type:0,source_type:0,print_type:0}},mounted:function(){},methods:{add:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3?arguments[3]:void 0;this.source_type=0,this.print_type=void 0!=i&&i?i:0,0==a?(this.title="选择打印模板",this.is_set=!1,this.set_msg=""):(this.is_set=!0,this.title="设置打印模板",1==a?(this.source_type=1,this.set_msg="1、在收银台设置打印模板，收银台支持打印功能。打印功能；不设置打印模板，则不支持。<br/>2、设置打印模板后，在收银台显示已缴账单按钮，进入查看所有已缴账单数据。"):2==a&&(this.set_msg='1、设置打印模板后，联动收银台打印模板功能。<br/>2、设置打印模板后，<span style="color: #1890ff">已缴账单</span>列表点击<span style="color: #1890ff">打印</span>按钮直接打印')),1==this.print_type&&(this.title="设置待缴账单打印模板",this.set_msg='1、设置<span style="color: #1583e3">待缴</span>账单打印模板后，设置后此模板用于<span style="color: #1583e3">未交费</span>的账单打印<br />2、最多可选8个账单打印'),this.set_type=a,this.template_id=void 0,this.visible=!0,this.pigcms_id=e,this.template_list=[],this.order_id=t,this.choice_ids=[],this.getTemplate()},batchPrint:function(t){var e=this;if(t.length<1)return e.$message.error("请勾选账单"),!1;e.title="选择打印模板",e.visible=!0,e.template_id=void 0,e.template_list=[],e.order_id=0,e.pigcms_id=0,e.choice_ids=t,this.set_type=0,this.source_type=0,this.print_type=0,e.getTemplate()},getTemplate:function(){var t=this;this.request(s["a"].getTemplate,{print_type:this.print_type}).then((function(e){t.template_list=e.list,e&&e.template_id>0&&(t.template_id=e.template_id)}))},handleSubmit:function(){var t=this;if(!this.template_id)return this.$message.error("选择打印模板"),!1;this.set_type>0?(this.confirmLoading=!0,this.request(s["a"].editSetPrint,{template_id:this.template_id,print_type:this.print_type}).then((function(e){t.$message.success("编辑成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.print_type=0,t.confirmLoading=!1,t.$emit("ok",{type:t.source_type,template_id:t.template_id})}),1e3)})).catch((function(t){}))):this.$refs.PrintModel.add(this.order_id,this.template_id,this.pigcms_id,this.choice_ids)},handleCancel:function(){this.visible=!1,this.print_type=0}}},l=r,c=(a("57ac"),a("0b56")),d=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=d.exports},cf06:function(t,e,a){},d2e9:function(t,e,a){},dd03:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"money",fn:function(a,i){return e("span",{},[1==i.type?e("div",{staticStyle:{color:"green"}},[t._v(t._s(i.money))]):t._e(),2==i.type?e("div",{staticStyle:{color:"red"}},[t._v(t._s(i.money))]):t._e()])}}])})],1)},n=[],s=(a("aa48"),a("8f7e"),a("a0e0")),o=[{title:"车库",dataIndex:"garage_num",key:"garage_num"},{title:"车位号",dataIndex:"position_num",key:"position_num"}],r=[],l={name:"positionList",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:r,columns:o,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="关联的车位记录",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(s["a"].getUserPositionList,this.search).then((function(e){console.log("llist",e),t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},c=l,d=(a("83cd"),a("0b56")),u=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=u.exports},def8:function(t,e,a){},e617:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change}})],1)},n=[],s=(a("aa48"),a("8f7e"),a("a0e0")),o=[{title:"楼栋",dataIndex:"single_name",key:"single_name"},{title:"单元",dataIndex:"floor_name",key:"floor_name"},{title:"楼层",dataIndex:"layer_name",key:"layer_name"},{title:"房间号",dataIndex:"room",key:"room"},{title:"姓名",dataIndex:"bind_name",key:"bind_name"}],r=[],l={name:"roomList",data:function(){return{pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:r,columns:o,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="关联的房间列表",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(s["a"].getUserRoomList,this.search).then((function(e){console.log("roomlist",e),t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},c=l,d=(a("f243"),a("0b56")),u=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=u.exports},ea9e:function(t,e,a){"use strict";a("934f")},f243:function(t,e,a){"use strict";a("1c7b")}}]);