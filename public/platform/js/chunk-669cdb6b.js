(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-669cdb6b"],{"1cb4":function(t,a,e){},"80d3":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-20 ml-10 mr-10 mb-20 bg-ff",staticStyle:{padding:"24px","box-sizing":"border-box"}},[e("a-tabs",{attrs:{"default-active-key":"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:"店员管理"}},[e("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"username",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"name",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"type",fn:function(a){return e("span",{},[e("span",{staticClass:"height-30"},0==a?[t._v(" 店小二 ")]:1==a?[t._v(" 核销 ")]:[t._v(" 店长 ")])])}},{key:"tel",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"last_time",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"is_change",fn:function(a){return e("span",{},[e("span",{staticClass:"height-30"},0==a?[t._v(" 不能 ")]:[t._v(" 能 ")])])}},{key:"action",fn:function(a,r){return e("span",{},[e("a",{on:{click:function(a){return t.staffEdit(r.id)}}},[t._v(" 修改")]),e("a",{staticStyle:{"margin-left":"10px",color:"red"},on:{click:function(a){return t.staffDel(r.id)}}},[t._v("删除")])])}},{key:"title",fn:function(a){return[e("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[e("a-col",{attrs:{span:8}},[t._v(" 店员管理 ")]),e("a-col",{attrs:{span:12}}),e("a-col",{staticClass:"text-right",attrs:{span:2}},[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.goNextPage()}}},[t._v(" 添加店员 ")])],1),e("a-col",{staticClass:"text-right",attrs:{span:2}},[e("a-button",{attrs:{type:"default"},on:{click:function(a){return t.staffLogin()}}},[t._v(" 店员登录 ")])],1)],1)]}}])})],1),e("a-modal",{attrs:{title:"店员信息维护",footer:null,width:"600px"},model:{value:t.visible_staff,callback:function(a){t.visible_staff=a},expression:"visible_staff"}},[e("a-form",t._b({on:{submit:t.handleSubmit}},"a-form",{labelCol:{span:9},wrapperCol:{span:14}},!1),[e("a-form-item",{attrs:{label:"姓名"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入姓名"}]}],expression:"['name', { rules: [{ required: true, message: '请输入姓名' }] }]"}],attrs:{placeholder:"请输入姓名"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("a-form-item",{attrs:{label:"店员类型"}},[e("a-select",{model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}},[e("a-select-option",{attrs:{value:0}},[t._v(" 店小二 ")]),e("a-select-option",{attrs:{value:1}},[t._v(" 核销 ")]),e("a-select-option",{attrs:{value:2}},[t._v(" 店长 ")])],1)],1),e("a-form-item",{attrs:{label:"账号"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入账号"}]}],expression:"['username', { rules: [{ required: true, message: '请输入账号' }] }]"}],attrs:{placeholder:"请输入账号"},model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("a-form-item",{attrs:{label:"密码"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}]}],expression:"['password', { rules: [{ required: true, message: '请输入密码' }] }]"}],attrs:{type:"password",placeholder:t.password_str},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),e("a-form-item",{attrs:{label:"电话"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tel",{rules:[{required:!0,message:"请输入电话"}]}],expression:"['tel', { rules: [{ required: true, message: '请输入电话' }] }]"}],attrs:{placeholder:"请输入电话"},model:{value:t.formData.tel,callback:function(a){t.$set(t.formData,"tel",a)},expression:"formData.tel"}})],1),e("a-form-item",{attrs:{label:"能否修改订单价格"}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_change"],expression:"['is_change']"}],model:{value:t.formData.is_change,callback:function(a){t.$set(t.formData,"is_change",a)},expression:"formData.is_change"}},[e("a-radio",{attrs:{value:0}},[t._v(" 不能 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 能 ")])],1)],1),e("a-form-item",{attrs:{label:"是否可以操作餐饮整单退款"}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["can_refund_dinging_order"],expression:"['can_refund_dinging_order']"}],model:{value:t.formData.can_refund_dinging_order,callback:function(a){t.$set(t.formData,"can_refund_dinging_order",a)},expression:"formData.can_refund_dinging_order"}},[e("a-radio",{attrs:{value:0}},[t._v(" 不能 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 能 ")])],1)],1),e("a-form-item",{attrs:{label:"是否可以查看景区订单列表"}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_scenic_order"],expression:"['show_scenic_order']"}],model:{value:t.formData.show_scenic_order,callback:function(a){t.$set(t.formData,"show_scenic_order",a)},expression:"formData.show_scenic_order"}},[e("a-radio",{attrs:{value:0}},[t._v(" 不能 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 能 ")])],1)],1),e("a-form-item",{attrs:{label:"是否可以核销商家活动订单"}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["can_verify_activity_appoint"],expression:"['can_verify_activity_appoint']"}],model:{value:t.formData.can_verify_activity_appoint,callback:function(a){t.$set(t.formData,"can_verify_activity_appoint",a)},expression:"formData.can_verify_activity_appoint"}},[e("a-radio",{attrs:{value:0}},[t._v(" 不能 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 能 ")])],1)],1),e("a-form-item",{attrs:{label:"绑定自提点",help:"不选择则为全部"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["address"],expression:"['address']"}],attrs:{mode:"multiple",placeholder:"点击绑定自提点"},on:{change:t.handleChange},model:{value:t.formData.pick_addr_ids,callback:function(a){t.$set(t.formData,"pick_addr_ids",a)},expression:"formData.pick_addr_ids"}},t._l(t.addressList,(function(a){return e("a-select-option",{key:a.id,attrs:{value:a.id}},[t._v(" "+t._s(a.pick_addr)+" ")])})),1)],1),e("a-form-item",{attrs:{"wrapper-col":{span:20,offset:6}}},[e("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[e("a-col",{staticClass:"text-left",attrs:{span:4}},[e("a-button",{attrs:{type:"default"},on:{click:function(a){return t.hidelModel()}}},[t._v(" 取消 ")])],1),e("a-col",{staticClass:"text-center",attrs:{span:6}},[e("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 提交 ")])],1),e("a-col",{attrs:{span:6}})],1)],1)],1)],1)],1)],1)],1)},s=[],i=(e("b0c0"),e("8e4c")),o=e("fe3e"),n=[{title:"账号",dataIndex:"username",scopedSlots:{customRender:"username"}},{title:"姓名",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"店员类型",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"电话",dataIndex:"tel",scopedSlots:{customRender:"tel"}},{title:"最后登录时间",dataIndex:"last_time",scopedSlots:{customRender:"last_time"}},{title:"能否修改订单价格",dataIndex:"is_change",scopedSlots:{customRender:"is_change"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],c={components:{JobPersonList:o["default"]},data:function(){return{spinning:!1,data:[],visible_staff:!1,store_id:"",site_url:"",pagination:{current:1,total:0,pageSize:20,showSizeChanger:!1,showQuickJumper:!1,onChange:this.onPageChange},queryParam:{page:1,store_id:""},formData:{id:"",name:"",type:0,username:"",password:"",tel:"",is_change:0,store_id:"",can_refund_dinging_order:0,show_scenic_order:1,can_verify_activity_appoint:0,pick_addr_ids:[]},addressList:[],columns:n,password_str:"请输入密码"}},mounted:function(){this.store_id=this.$route.query.store_id,this.formData.store_id=this.$route.query.store_id,this.getLists()},activated:function(){this.store_id=this.$route.query.store_id,this.formData.store_id=this.$route.query.store_id,this.getLists()},created:function(){this.store_id=this.$route.query.store_id,this.formData.store_id=this.$route.query.store_id},methods:{handleChange:function(t){console.log("selected ".concat(t)),this.formData.pick_addr_ids=t},getPickAddress:function(){var t=this;this.request(i["a"].getPickAddress).then((function(a){t.addressList=a}))},getLists:function(){var t=this;this.queryParam["page"]=this.pagination.current,this.queryParam["store_id"]=this.store_id,this.request(i["a"].getStaffList,this.queryParam).then((function(a){t.site_url=a.site_url,t.data=a.list,t.pagination.total=a.count,t.queryParam["page"]+=1}))},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},goNextPage:function(){this.visible_staff=!0,this.formData.id="",this.formData.name="",this.formData.type="",this.formData.username="",this.formData.password="",this.password_str="请输入密码",this.formData.tel="",this.formData.is_change=0,this.formData.can_refund_dinging_order=0,this.formData.show_scenic_order=1,this.formData.store_id=this.store_id,this.formData.can_verify_activity_appoint=0,this.formData.pick_addr_ids=[],this.getPickAddress()},handleSubmit:function(t){var a=this;t.preventDefault(),this.request(i["a"].staffEdit,this.formData).then((function(t){a.getLists(),a.visible_staff=!1,a.formData.id=""}))},hidelModel:function(){this.visible_staff=!1},staffEdit:function(t){var a=this,e={id:t};this.request(i["a"].staffSet,e).then((function(t){a.formData.id=t.staff_item.id,a.formData.name=t.staff_item.name,a.formData.type=t.staff_item.type,a.formData.username=t.staff_item.username,a.formData.password=t.staff_item.password,a.password_str="******",a.formData.tel=t.staff_item.tel,a.formData.is_change=t.staff_item.is_change,a.formData.can_refund_dinging_order=t.staff_item.can_refund_dinging_order,a.formData.store_id=t.staff_item.store_id,a.formData.show_scenic_order=t.staff_item.show_scenic_order,a.formData.store_id=t.staff_item.store_id,a.formData.pick_addr_ids=t.staff_item.pick_addr_ids,a.getPickAddress(),a.formData.can_verify_activity_appoint=t.staff_item.can_verify_activity_appoint,a.visible_staff=!0}))},staffDel:function(t){var a=this;this.$confirm({title:"是否确定删除该店员?",centered:!0,onOk:function(){var e={id:t,store_id:a.store_id};a.request(i["a"].staffDel,e).then((function(t){a.getLists(),a.$message.success("操作成功！")}))},onCancel:function(){}})},staffLogin:function(){var t=this.site_url+"/v20/public/platform/#/usernew/storestaff/login";window.open(t)},onPageChange:function(t,a){this.$set(this.pagination,"current",t),this.getLists()}}},d=c,f=(e("e86d"),e("2877")),l=Object(f["a"])(d,r,s,!1,null,"60cb51cf",null);a["default"]=l.exports},e86d:function(t,a,e){"use strict";e("1cb4")}}]);