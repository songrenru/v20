(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-798bbc30"],{"28d4d":function(t,e,a){"use strict";a("5aac")},"5aac":function(t,e,a){},8362:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"老版管理员数据",width:1400,visible:t.visible,maskClosable:!1,placement:"right"},on:{close:t.handleCancel}},[a("p",[a("a",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-left":"50px"},attrs:{href:t.src_href,target:"_blank"}},[t._v("Excel导出")])]),a("div",{staticClass:"message-suggestions-list-box",staticStyle:{"margin-top":"5px"}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.id}},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,s,o){return a("span",{},[a("a",{on:{click:function(e){return t.editAccount(s)}}},[t._v("编辑")])])}}])}),a("a-modal",{attrs:{width:800,title:"编辑",visible:t.visible_edit,maskClosable:!1,"confirm-loading":t.confirmLoading},on:{cancel:t.handle2Cancel,ok:t.handleSubmit}},[a("a-card",[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"登录账号",labelCol:t.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入登录账号",autocomplete:"off",name:"account",disabled:t.accountAisabled},model:{value:t.post.account,callback:function(e){t.$set(t.post,"account",e)},expression:"post.account"}})],1)],1),a("a-form-item",{attrs:{label:"登录密码",labelCol:t.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input-password",{staticStyle:{width:"300px"},attrs:{placeholder:1==t.editRecord.set_pwd?" 如果不需修改密码则不填写":"请填写登录密码",name:"password",autocomplete:"new-password"},model:{value:t.post.pwd,callback:function(e){t.$set(t.post,"pwd",e)},expression:"post.pwd"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"姓名",labelCol:t.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名",autocomplete:"off",name:"realname"},on:{blur:t.validateInput},model:{value:t.post.realname,callback:function(e){t.$set(t.post,"realname",e)},expression:"post.realname"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"手机号",labelCol:t.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入手机号",autocomplete:"off",name:"phone","max-length":11},on:{blur:t.validateInput},model:{value:t.post.phone,callback:function(e){t.$set(t.post,"phone",e)},expression:"post.phone"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注信息",labelCol:t.labelCol}},[a("a-col",{attrs:{span:20}},[a("a-textarea",{ref:"textareax",staticStyle:{width:"300px"},attrs:{autocomplete:"off",rows:8,placeholder:"请输入备注信息",name:"remarks"},model:{value:t.post.remarks,callback:function(e){t.$set(t.post,"remarks",e)},expression:"post.remarks"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)],1)])},o=[],i=(a("7d24"),a("dfae")),n=(a("ac1f"),a("841c"),a("b0c0"),a("498a"),a("a0e0")),r=[{title:"编号",dataIndex:"id",key:"id"},{title:"登录账号",dataIndex:"account",key:"account"},{title:"姓名",dataIndex:"realname",key:"realname"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"备注",dataIndex:"remarks",key:"remarks"},{title:"权限分组",dataIndex:"group_name",key:"group_name"},{title:"操作",dataIndex:"",key:"",width:150,scopedSlots:{customRender:"action"}}],l=[],c={name:"houseAdminList",filters:{},components:{"a-collapse":i["a"],"a-collapse-panel":i["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:"",key_val:"name",key_val1:"paytime",page:1},form:this.$form.createForm(this),visible:!1,visible_edit:!1,loading:!1,data:l,columns:r,key_name:"",page:1,search_data:"",confirmLoading:!1,accountAisabled:!0,is_edit_worker:!0,editRecord:{},src_href:"/shequ.php?g=House&c=Role&a=role_export",post:{account:"",pwd:"",realname:"",phone:"",remarks:""},group_id:0}},activated:function(){},methods:{adminList:function(){this.visible=!0,this.getList()},getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.request(n["a"].getAdminRoleList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1}))},handleSubmit:function(){var t=this;if(!this.post.account||this.post.account.length<1)return this.$message.error("请输入登录账号!"),!1;if(0==this.is_set_pwd&&(!this.post.pwd||this.post.account.pwd<1))return this.$message.error("请输入登录密码!"),!1;if(!this.post.phone||this.post.phone.length<1)return this.$message.error("请输入手机号!"),!1;var e=/^1[23456789]\d{9}$/;return e.test(this.post.phone)?!this.post.realname||this.post.realname.length<1?(this.$message.error("请输入姓名!"),!1):(this.post.id=this.editRecord.id,this.loading=!0,void this.request(n["a"].saveHouseAdminEdit,this.post).then((function(e){t.loading=!1,e.is_haved_account&&1==e.is_haved_account?(t.accountAisabled=!1,t.$message.error("此账号【"+t.post.account+"】已经存在了，请修改！")):e.is_haved_phone&&1==e.is_haved_phone?t.$message.error("此手机号【"+t.post.phone+"】已经存在了，请修改！"):(t.$message.success("保存成功!"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible_edit=!1,t.is_edit_worker=!1,t.editRecord={},t.post={account:"",pwd:"",realname:"",phone:"",remarks:""},t.group_id=0,t.getList()}),1500))})).catch((function(e){t.loading=!1}))):(this.$message.error("手机号格式不正确！"),!1)},validateInput:function(t){var e=t.target.value,a=t.target.name;if(console.log("name",a),console.log("value",e),e=e.trim(),!this.is_edit_worker)return!1;if("account"==a){if(!e||e.length<1)return t.target.focus(),!1;var s=/^[A-Za-z0-9_]+$/;if(!this.accountAisabled&&!s.test(e))return this.$message.error("登录账号必须是英文大小写字母、数字、下划线组成"),t.target.focus(),!1;if(!this.accountAisabled&&e.length<3)return this.$message.error("请保持登录账号长度至少3位以上!"),t.target.focus(),!1;if(!this.accountAisabled&&e.length>90)return this.$message.error("登录账号长度太长了，请小于90个字符！"),t.target.focus(),!1;this.post.account=e}else if("password"==a){if(0==this.is_set_pwd&&(!e||e.length<1))return t.target.focus(),!1;var o=/^[A-Za-z0-9_]+$/;if(0==this.is_set_pwd&&!o.test(e))return this.$message.error("登录密码必须是英文大小写字母、数字、下划线组成"),t.target.focus(),!1;if(0==this.is_set_pwd&&e.length<3)return this.$message.error("请保持登录密码长度至少3位以上!"),t.target.focus(),!1;if(0==this.is_set_pwd&&e.length>32)return this.$message.error("登录密码长度太长了，请小于32个字符！"),t.target.focus(),!1;this.post.pwd=e||""}else if("realname"==a){if(!e||e.length<1)return t.target.focus(),!1;if(e.length>10)return this.$message.error("您输入的姓名长度太长了，请小于10个字符！"),t.target.focus(),!1;this.post.realname=e}else if("phone"==a){if(!e||e.length<1)return t.target.focus(),!1;var i=/^1[23456789]\d{9}$/;if(!i.test(e))return this.$message.error("请输入正确的手机号格式！"),t.target.focus(),!1;this.post.phone=e}},keyChange:function(t){},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},handleCancel:function(){this.visible=!1},handle2Cancel:function(){this.visible_edit=!1,this.is_edit_worker=!1,this.editRecord={},this.post={account:"",pwd:"",realname:"",phone:"",remarks:""},this.group_id=0},editAccount:function(t){this.visible_edit=!0,this.editRecord=t,this.post.account=t.account,this.post.realname=t.realname,this.post.phone=t.phone,this.is_set_pwd=1*t.set_pwd,this.post.remarks=t.remarks?t.remarks:"",this.group_id=1*t.group_id},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.getList()}}},p=c,h=(a("28d4d"),a("2877")),d=Object(h["a"])(p,s,o,!1,null,"4faaeb8b",null);e["default"]=d.exports}}]);