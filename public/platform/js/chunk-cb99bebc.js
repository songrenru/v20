(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb99bebc","chunk-0487d178","chunk-108f8274"],{"38c4":function(t,e,a){},"3bd8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"money",fn:function(e,n){return a("span",{},[1==n.type?a("div",{staticStyle:{color:"green"}},[t._v(t._s(n.money))]):t._e(),2==n.type?a("div",{staticStyle:{color:"red"}},[t._v(t._s(n.money))]):t._e()])}}])})],1)},i=[],o=(a("ac1f"),a("841c"),a("a0e0")),s=[{title:"订单编号",dataIndex:"order_no",key:"order_no"},{title:"预存时间",dataIndex:"add_time",key:"add_time"},{title:"金额变更前（元）",dataIndex:"current_money",key:"current_money"},{title:"缴费金额（元）",dataIndex:"money",key:"money",scopedSlots:{customRender:"money"}},{title:"金额变更后（元）",dataIndex:"after_price",key:"after_price"},{title:"备注",dataIndex:"desc",key:"desc"}],r=[],l={name:"balanceList",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:r,columns:s,title:"",confirmLoading:!1,uid:""}},methods:{List:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.title="余额记录",this.loading=!0,e>0&&(this.$set(this.pagination,"current",1),this.uid=e,this.search["uid"]=this.uid),this.search["page"]=this.pagination.current,this.request(o["a"].storageUserBalanceRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.List())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},c=l,u=(a("e6d5"),a("2877")),d=Object(u["a"])(c,n,i,!1,null,null,null);e["default"]=d.exports},"6f4b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticClass:"balance_info",attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col "},[t._v("现在余额")]),a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:30,disabled:t.is_disabled,suffix:"元"},model:{value:t.post.now_money,callback:function(e){t.$set(t.post,"now_money",e)},expression:"post.now_money"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("状态")]),a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.status",{initialValue:t.post.status}],expression:"['post.status', {initialValue:post.status}]"}]},[a("a-radio",{attrs:{value:1}},[t._v(" 增加 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 减少 ")])],1)],1),a("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("缴费金额")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.price",{initialValue:t.post.price,rules:[{required:!0,message:t.L("请输入缴费金额！")}]}],expression:"['post.price',{ initialValue: post.price, rules: [{ required: true, message: L('请输入缴费金额！') }] }]"}],staticStyle:{width:"300px"},attrs:{placeholder:"请输入缴费金额",min:0,maxLength:10,oninput:"value=value.replace(/[^\\d.]/g, '').replace(/\\.{2,}/g, '.').replace('.', '$#$').replace(/\\./g, '').replace('$#$', '.').replace(/^(\\-)*(\\d+)\\.(\\d\\d).*$/, '$1$2.$3').replace(/^\\./g, '')",suffix:"元"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"",required:!0,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:30}},[a("span",{staticClass:"label_col ant-form-item-required"},[t._v("备注")]),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["post.remarks",{initialValue:t.post.remarks,rules:[{required:!0,message:t.L("请输入备注！")}]}],expression:"['post.remarks',{ initialValue: post.remarks, rules: [{ required: true, message: L('请输入备注！') }] }]"}],staticClass:"textarea",attrs:{placeholder:"请输入备注",rows:4}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},i=[],o=a("a0e0"),s={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,post:{pigcms_id:0,now_money:"",status:1,price:"",remarks:""},is_disabled:!0}},mounted:function(){},methods:{add:function(t){var e=this;e.title="增加/减少",e.visible=!0,e.post.status=1,e.post.price="",e.post.remarks="",e.request(o["a"].storageUserBalance,{pigcms_id:t}).then((function(t){e.post.pigcms_id=t.pigcms_id,e.post.now_money=t.now_money}))},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{a.post.pigcms_id=t.post.pigcms_id;var n=o["a"].storageUserBalanceChange;t.request(n,a.post).then((function(e){t.$message.success("操作成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,console.log(123),t.$emit("ok")}),1500),console.log(345)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},r=s,l=(a("ff30"),a("2877")),c=Object(l["a"])(r,n,i,!1,null,"0dc6b839",null);e["default"]=c.exports},7186:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box userList"},[a("div",{staticClass:"content-p1"},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[a("span",{staticStyle:{"font-weight":"500"}},[t._v(" 1、展示的是当前小区手机号唯一的业主 "),a("br"),t._v(" 2、不同手机号业主对应的余额、关联房间数、关联车位数 "),a("br"),t._v(" 例如： 张三在平台注册了一个账号，手机号是 18312345678， 并且在该小区1号楼和5号楼都是户主，对于小区而言他仅仅是一个业主，只是拥有了多套房产（或车位），所以这里不会显示两条张三的信息。而且这个住户的余额就是张三在这个平台上的总余额 。 如果张三分别用两个手机号（18312345678、18387654321）注册了平台用户且分别绑定了该小区的两个不同的房间，那么这里就会显示两个张三的余额信息 ")])])],1)],1)]),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("住户姓名：")]),a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入住户姓名"},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("手机号：")]),a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入手机号"},model:{value:t.search.phone,callback:function(e){t.$set(t.search,"phone",e)},expression:"search.phone"}})],1)],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{},[a("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.balanceModel.add(n.pigcms_id)}}},[t._v("增加/减少")]),a("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.balanceListModel.List(n.uid)}}},[t._v("余额记录")]),a("a",{staticClass:"but_1",on:{click:function(e){return t.$refs.orderListModel.List(n.uid)}}},[t._v("消费记录")])])}}])}),a("balanceInfo",{ref:"balanceModel",on:{ok:t.balanceInfo}}),a("balanceList",{ref:"balanceListModel",on:{ok:t.balanceListInfo}}),a("orderList",{ref:"orderListModel",on:{ok:t.orderInfo}})],1)},i=[],o=(a("7d24"),a("dfae")),s=(a("ac1f"),a("841c"),a("a0e0")),r=a("6f4b"),l=a("3bd8"),c=a("242c"),u=[{title:"住户姓名",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"余额",dataIndex:"now_money",key:"now_money"},{title:"关联房间数",dataIndex:"room_num",key:"room_num"},{title:"关联车位数",dataIndex:"position_num",key:"position_num"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],d=[],p={name:"storageUserList",filters:{},components:{balanceInfo:r["default"],balanceList:l["default"],orderList:c["default"],"a-collapse":o["a"],"a-collapse-panel":o["a"].Panel},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{name:"",phone:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:d,columns:u,oldVersion:""}},activated:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.pagination.current,this.request(s["a"].storageUserList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.oldVersion=e.oldVersion}))},balanceInfo:function(t){this.getList()},balanceListInfo:function(){this.getList()},orderInfo:function(t){this.getList()},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search={name:"",phone:"",page:1},this.table_change({current:1,pageSize:10,total:10})}}},m=p,f=(a("95c9"),a("2877")),h=Object(f["a"])(m,n,i,!1,null,"2fe06a54",null);e["default"]=h.exports},"95c9":function(t,e,a){"use strict";a("e354")},ca3e:function(t,e,a){},e354:function(t,e,a){},e6d5:function(t,e,a){"use strict";a("ca3e")},ff30:function(t,e,a){"use strict";a("38c4")}}]);