(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d89b2c4"],{"80d3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-layout",[a("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"店员管理"}},[a("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"username",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"name",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"type",fn:function(e){return a("span",{},[a("span",{staticClass:"height-30"},0==e?[t._v(" 店小二 ")]:1==e?[t._v(" 核销 ")]:[t._v(" 店长 ")])])}},{key:"tel",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"last_time",fn:function(e){return a("span",{},[t._v(" "+t._s(e)+" ")])}},{key:"is_change",fn:function(e){return a("span",{},[a("span",{staticClass:"height-30"},0==e?[t._v(" 不能 ")]:[t._v(" 能 ")])])}},{key:"action",fn:function(e,s){return a("span",{},[a("a",{on:{click:function(e){return t.staffEdit(s.id)}}},[t._v(" 修改")]),a("a",{staticStyle:{"margin-left":"10px",color:"red"},on:{click:function(e){return t.staffDel(s.id)}}},[t._v("删除")])])}},{key:"title",fn:function(e){return[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:8}},[t._v(" 店员管理 ")]),a("a-col",{attrs:{span:12}}),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.goNextPage()}}},[t._v(" 添加店员 ")])],1),a("a-col",{staticClass:"text-right",attrs:{span:2}},[a("a-button",{attrs:{type:"default"},on:{click:function(e){return t.staffLogin()}}},[t._v(" 店员登录 ")])],1)],1)]}}])})],1),a("a-modal",{attrs:{title:"店员信息维护",footer:null,width:"600px"},model:{value:t.visible_staff,callback:function(e){t.visible_staff=e},expression:"visible_staff"}},[a("a-form",t._b({on:{submit:t.handleSubmit}},"a-form",{labelCol:{span:9},wrapperCol:{span:14}},!1),[a("a-form-item",{attrs:{label:"姓名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入姓名"}]}],expression:"[\n                          'name',\n                          { rules: [{ required: true, message: '请输入姓名' }] },\n                        ]"}],attrs:{placeholder:"请输入姓名"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("a-form-item",{attrs:{label:"店员类型"}},[a("a-select",{model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("a-select-option",{attrs:{value:0}},[t._v(" 店小二 ")]),a("a-select-option",{attrs:{value:1}},[t._v(" 核销 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 店长 ")])],1)],1),a("a-form-item",{attrs:{label:"账号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入账号"}]}],expression:"[\n                          'username',\n                          { rules: [{ required: true, message: '请输入账号' }] },\n                        ]"}],attrs:{placeholder:"请输入账号"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),a("a-form-item",{attrs:{label:"密码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}]}],expression:"[\n                              'password',\n                              { rules: [{ required: true, message: '请输入密码' }] },\n                            ]"}],attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),a("a-form-item",{attrs:{label:"电话"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tel",{rules:[{required:!0,message:"请输入电话"}]}],expression:"[\n                              'tel',\n                              { rules: [{ required: true, message: '请输入电话' }] },\n                            ]"}],attrs:{placeholder:"请输入电话"},model:{value:t.formData.tel,callback:function(e){t.$set(t.formData,"tel",e)},expression:"formData.tel"}})],1),a("a-form-item",{attrs:{label:"能否修改订单价格"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_change"],expression:"['is_change']"}],model:{value:t.formData.is_change,callback:function(e){t.$set(t.formData,"is_change",e)},expression:"formData.is_change"}},[a("a-radio",{attrs:{value:0}},[t._v(" 不能 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 能 ")])],1)],1),a("a-form-item",{attrs:{label:"是否可以操作餐饮整单退款"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["can_refund_dinging_order"],expression:"['can_refund_dinging_order']"}],model:{value:t.formData.can_refund_dinging_order,callback:function(e){t.$set(t.formData,"can_refund_dinging_order",e)},expression:"formData.can_refund_dinging_order"}},[a("a-radio",{attrs:{value:0}},[t._v(" 不能 ")]),a("a-radio",{attrs:{value:1}},[t._v(" 能 ")])],1)],1),a("a-form-item",{attrs:{"wrapper-col":{span:20,offset:6}}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{staticClass:"text-left",attrs:{span:4}},[a("a-button",{attrs:{type:"default"},on:{click:function(e){return t.hidelModel()}}},[t._v(" 取消 ")])],1),a("a-col",{staticClass:"text-center",attrs:{span:6}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 提交 ")])],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},r=[],n=(a("b0c0"),a("8e4c")),i=a("fe3e"),o=[{title:"账号",dataIndex:"username",scopedSlots:{customRender:"username"}},{title:"姓名",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"店员类型",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"电话",dataIndex:"tel",scopedSlots:{customRender:"tel"}},{title:"最后登录时间",dataIndex:"last_time",scopedSlots:{customRender:"last_time"}},{title:"能否修改订单价格",dataIndex:"is_change",scopedSlots:{customRender:"is_change"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],l={components:{JobPersonList:i["default"]},data:function(){return{spinning:!1,data:[],visible_staff:!1,store_id:"",site_url:"",pagination:{},queryParam:{page:1,store_id:""},formData:{id:"",name:"",type:0,username:"",password:"",tel:"",is_change:0,store_id:"",can_refund_dinging_order:0},columns:o}},mounted:function(){this.store_id=this.$route.query.store_id,this.formData.store_id=this.$route.query.store_id,this.getLists()},activated:function(){this.getLists()},created:function(){this.store_id=this.$route.query.store_id,this.formData.store_id=this.$route.query.store_id},methods:{getLists:function(){var t=this;this.queryParam["page"]=1,this.queryParam["store_id"]=this.store_id,this.request(n["a"].getStaffList,this.queryParam).then((function(e){t.site_url=e.site_url,t.data=e.list,t.pagination.total=e.count,t.queryParam["page"]+=1}))},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},goNextPage:function(){this.visible_staff=!0,this.formData.id="",this.formData.name="",this.formData.type="",this.formData.username="",this.formData.password="",this.formData.tel="",this.formData.is_change=0,this.formData.can_refund_dinging_order=0,this.formData.store_id=this.store_id},handleSubmit:function(t){var e=this;t.preventDefault(),this.request(n["a"].staffEdit,this.formData).then((function(t){e.getLists(),e.visible_staff=!1,e.formData.id=""}))},hidelModel:function(){this.visible_staff=!1},staffEdit:function(t){var e=this,a={id:t};this.request(n["a"].staffSet,a).then((function(t){e.formData.id=t.staff_item.id,e.formData.name=t.staff_item.name,e.formData.type=t.staff_item.type,e.formData.username=t.staff_item.username,e.formData.password=t.staff_item.password,e.formData.tel=t.staff_item.tel,e.formData.is_change=t.staff_item.is_change,e.formData.can_refund_dinging_order=t.staff_item.can_refund_dinging_order,e.formData.store_id=t.staff_item.store_id,e.visible_staff=!0}))},staffDel:function(t){var e=this;this.$confirm({title:"是否确定删除该店员?",centered:!0,onOk:function(){var a={id:t,store_id:e.store_id};e.request(n["a"].staffDel,a).then((function(t){e.getLists(),e.$message.success("操作成功！")}))},onCancel:function(){}})},staffLogin:function(){var t=this.site_url+"/v20/public/platform/#/usernew/storestaff/login";window.open(t)}}},u=l,f=(a("eaf7"),a("2877")),c=Object(f["a"])(u,s,r,!1,null,"9cd8580a",null);e["default"]=c.exports},d179:function(t,e,a){},eaf7:function(t,e,a){"use strict";a("d179")}}]);