(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-959e05e0"],{"3a04":function(e,t,a){"use strict";a("d6ce")},8362:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"老版管理员数据",width:1400,visible:e.visible,maskClosable:!1,placement:"right"},on:{close:e.handleCancel}},[a("p",[a("a",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-left":"50px"},attrs:{href:e.src_href,target:"_blank"}},[e._v("Excel导出")])]),a("div",{staticClass:"message-suggestions-list-box",staticStyle:{"margin-top":"5px"}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading,"row-key":function(e){return e.id}},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,s,i){return a("span",{},[a("a",{on:{click:function(t){return e.editAccount(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.synFrameWork(s)}}},[e._v("同步数据")])],1)}}])}),a("a-modal",{attrs:{width:800,title:"编辑",visible:e.visible_edit,maskClosable:!1,"confirm-loading":e.confirmLoading},on:{cancel:e.handle2Cancel,ok:e.handleSubmit}},[a("a-card",[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"登录账号",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入登录账号",autocomplete:"off",name:"account",disabled:e.accountAisabled},model:{value:e.post.account,callback:function(t){e.$set(e.post,"account",t)},expression:"post.account"}})],1)],1),a("a-form-item",{attrs:{label:"登录密码",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input-password",{staticStyle:{width:"300px"},attrs:{placeholder:1==e.editRecord.set_pwd?" 如果不需修改密码则不填写":"请填写登录密码",name:"password",autocomplete:"new-password"},model:{value:e.post.pwd,callback:function(t){e.$set(e.post,"pwd",t)},expression:"post.pwd"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"姓名",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名",autocomplete:"off",name:"realname"},on:{blur:e.validateInput},model:{value:e.post.realname,callback:function(t){e.$set(e.post,"realname",t)},expression:"post.realname"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"手机号",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入手机号",autocomplete:"off",name:"phone","max-length":11},on:{blur:e.validateInput},model:{value:e.post.phone,callback:function(t){e.$set(e.post,"phone",t)},expression:"post.phone"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注信息",labelCol:e.labelCol}},[a("a-col",{attrs:{span:20}},[a("a-textarea",{ref:"textareax",staticStyle:{width:"300px"},attrs:{autocomplete:"off",rows:8,placeholder:"请输入备注信息",name:"remarks"},model:{value:e.post.remarks,callback:function(t){e.$set(e.post,"remarks",t)},expression:"post.remarks"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1),a("a-modal",{attrs:{title:"请选择同步数据到组织架构的部门",width:600,visible:e.visible_tree,maskClosable:!1,confirmLoading:e.confirmxLoading},on:{ok:e.handleTSubmit,cancel:e.handleTCancel}},[e.visible_tree?a("a-tree",{attrs:{defaultExpandedKeys:[e.firstKey],"tree-data":e.treeData,"default-selected-keys":[],"auto-expand-parent":!0,"default-expand-parent":!0},on:{select:e.onTreeSelect}}):e._e()],1)],1)])},i=[],n=(a("7d24"),a("dfae")),o=(a("ac1f"),a("841c"),a("1276"),a("b0c0"),a("498a"),a("a0e0")),r=[{title:"编号",dataIndex:"id",key:"id"},{title:"登录账号",dataIndex:"account",key:"account"},{title:"姓名",dataIndex:"realname",key:"realname"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"备注",dataIndex:"remarks",key:"remarks"},{title:"权限分组",dataIndex:"group_name",key:"group_name"},{title:"操作",dataIndex:"",key:"",width:150,scopedSlots:{customRender:"action"}}],l=[],c={name:"houseAdminList",filters:{},components:{"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:"",key_val:"name",key_val1:"paytime",page:1},form:this.$form.createForm(this),visible:!1,visible_edit:!1,loading:!1,data:l,columns:r,key_name:"",page:1,search_data:"",confirmLoading:!1,confirmxLoading:!1,accountAisabled:!0,is_edit_worker:!0,editRecord:{},src_href:"/shequ.php?g=House&c=Role&a=role_export",post:{account:"",pwd:"",realname:"",phone:"",remarks:""},group_id:0,visible_tree:!1,treeData:[],firstKey:"",department_id:0,selectTitle:"",recordV:[]}},activated:function(){},methods:{adminList:function(){this.visible=!0,this.getList()},getList:function(){var e=this;this.loading=!0,this.search["page"]=this.page,this.request(o["a"].getAdminRoleList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1}))},synFrameWork:function(e){this.recordV=e,this.getOrganizationTree()},getOrganizationTree:function(){var e=this;this.request(o["a"].getOrganizationTree).then((function(t){e.treeData=t.menu_list,console.log("resTree",e.treeData),t.menu_list[0].key&&(e.firstKey=t.menu_list[0].key,t.menu_list[0].disabled=!0,console.log("firstKey",e.firstKey)),e.visible_tree=!0}))},onTreeSelect:function(e,t){var a=e[0].split("-");this.department_id=a[a.length-1],this.department_id=1*this.department_id,this.selectTitle=a[a.length-2]},handleTSubmit:function(){if(this.department_id<1)return this.$message.error("请选择一个组织架构部门！"),!1;var e=this,t="您确定将账号为【"+this.recordV.account+"】姓名为【"+this.recordV.realname+"】 的数据同步到组织架构的【"+this.selectTitle+"】部门下？",a={admin_id:this.recordV.id,account:this.recordV.account};a.department_id=this.department_id,this.$confirm({title:"同步数据确认",content:t,onOk:function(){e.confirmxLoading=!0,e.request(o["a"].synAdminToWorker,a).then((function(t){e.$message.success("操作成功"),setTimeout((function(){e.confirmxLoading=!1,e.visible_tree=!1,e.getList()}),1500)})).catch((function(t){e.confirmxLoading=!1}))},onCancel:function(){}})},handleTCancel:function(){this.department_id=0,this.recordV=[],this.visible_tree=!1},handleSubmit:function(){var e=this;if(!this.post.account||this.post.account.length<1)return this.$message.error("请输入登录账号!"),!1;if(0==this.is_set_pwd&&(!this.post.pwd||this.post.account.pwd<1))return this.$message.error("请输入登录密码!"),!1;if(!this.post.phone||this.post.phone.length<1)return this.$message.error("请输入手机号!"),!1;var t=/^1[23456789]\d{9}$/;return t.test(this.post.phone)?!this.post.realname||this.post.realname.length<1?(this.$message.error("请输入姓名!"),!1):(this.post.id=this.editRecord.id,this.loading=!0,void this.request(o["a"].saveHouseAdminEdit,this.post).then((function(t){e.loading=!1,t.is_haved_account&&1==t.is_haved_account?(e.accountAisabled=!1,e.$message.error("此账号【"+e.post.account+"】已经存在了，请修改！")):t.is_haved_phone&&1==t.is_haved_phone?e.$message.error("此手机号【"+e.post.phone+"】已经存在了，请修改！"):(e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible_edit=!1,e.is_edit_worker=!1,e.editRecord={},e.post={account:"",pwd:"",realname:"",phone:"",remarks:""},e.group_id=0,e.getList()}),1500))})).catch((function(t){e.loading=!1}))):(this.$message.error("手机号格式不正确！"),!1)},validateInput:function(e){var t=e.target.value,a=e.target.name;if(console.log("name",a),console.log("value",t),t=t.trim(),!this.is_edit_worker)return!1;if("account"==a){if(!t||t.length<1)return e.target.focus(),!1;var s=/^[A-Za-z0-9_]+$/;if(!this.accountAisabled&&!s.test(t))return this.$message.error("登录账号必须是英文大小写字母、数字、下划线组成"),e.target.focus(),!1;if(!this.accountAisabled&&t.length<3)return this.$message.error("请保持登录账号长度至少3位以上!"),e.target.focus(),!1;if(!this.accountAisabled&&t.length>90)return this.$message.error("登录账号长度太长了，请小于90个字符！"),e.target.focus(),!1;this.post.account=t}else if("password"==a){if(0==this.is_set_pwd&&(!t||t.length<1))return e.target.focus(),!1;var i=/^[A-Za-z0-9_]+$/;if(0==this.is_set_pwd&&!i.test(t))return this.$message.error("登录密码必须是英文大小写字母、数字、下划线组成"),e.target.focus(),!1;if(0==this.is_set_pwd&&t.length<3)return this.$message.error("请保持登录密码长度至少3位以上!"),e.target.focus(),!1;if(0==this.is_set_pwd&&t.length>32)return this.$message.error("登录密码长度太长了，请小于32个字符！"),e.target.focus(),!1;this.post.pwd=t||""}else if("realname"==a){if(!t||t.length<1)return e.target.focus(),!1;if(t.length>10)return this.$message.error("您输入的姓名长度太长了，请小于10个字符！"),e.target.focus(),!1;this.post.realname=t}else if("phone"==a){if(!t||t.length<1)return e.target.focus(),!1;var n=/^1[23456789]\d{9}$/;if(!n.test(t))return this.$message.error("请输入正确的手机号格式！"),e.target.focus(),!1;this.post.phone=t}},keyChange:function(e){},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current,this.getList())},handleCancel:function(){this.visible=!1},handle2Cancel:function(){this.visible_edit=!1,this.is_edit_worker=!1,this.editRecord={},this.post={account:"",pwd:"",realname:"",phone:"",remarks:""},this.group_id=0},editAccount:function(e){this.visible_edit=!0,this.editRecord=e,this.post.account=e.account,this.post.realname=e.realname,this.post.phone=e.phone,this.is_set_pwd=1*e.set_pwd,this.post.remarks=e.remarks?e.remarks:"",this.group_id=1*e.group_id},dateOnChange:function(e,t){this.search.date=t,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var e={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(e)},resetList:function(){this.search={keyword:"",page:1},this.getList()}}},d=c,h=(a("3a04"),a("0c7c")),u=Object(h["a"])(d,s,i,!1,null,"c2278986",null);t["default"]=u.exports},d6ce:function(e,t,a){}}]);