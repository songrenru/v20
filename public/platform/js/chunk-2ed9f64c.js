(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ed9f64c","chunk-604011fe","chunk-5bd5d968"],{"07b4":function(e,t,a){"use strict";a("cf88")},"3a04":function(e,t,a){"use strict";a("e4de")},4048:function(e,t,a){},8362:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"老版管理员数据",width:1400,visible:e.visible,maskClosable:!1,placement:"right"},on:{close:e.handleCancel}},[a("p",[a("a",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-left":"50px"},attrs:{href:e.src_href,target:"_blank"}},[e._v("Excel导出")])]),a("div",{staticClass:"message-suggestions-list-box",staticStyle:{"margin-top":"5px"}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading,"row-key":function(e){return e.id}},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,i,n){return a("span",{},[a("a",{on:{click:function(t){return e.editAccount(i)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.synFrameWork(i)}}},[e._v("同步数据")])],1)}}])}),a("a-modal",{attrs:{width:800,title:"编辑",visible:e.visible_edit,maskClosable:!1,"confirm-loading":e.confirmLoading},on:{cancel:e.handle2Cancel,ok:e.handleSubmit}},[a("a-card",[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"登录账号",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入登录账号",autocomplete:"off",name:"account",disabled:e.accountAisabled},model:{value:e.post.account,callback:function(t){e.$set(e.post,"account",t)},expression:"post.account"}})],1)],1),a("a-form-item",{attrs:{label:"登录密码",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input-password",{staticStyle:{width:"300px"},attrs:{placeholder:1==e.editRecord.set_pwd?" 如果不需修改密码则不填写":"请填写登录密码",name:"password",autocomplete:"new-password"},model:{value:e.post.pwd,callback:function(t){e.$set(e.post,"pwd",t)},expression:"post.pwd"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"姓名",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名",autocomplete:"off",name:"realname"},on:{blur:e.validateInput},model:{value:e.post.realname,callback:function(t){e.$set(e.post,"realname",t)},expression:"post.realname"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"手机号",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入手机号",autocomplete:"off",name:"phone","max-length":11},on:{blur:e.validateInput},model:{value:e.post.phone,callback:function(t){e.$set(e.post,"phone",t)},expression:"post.phone"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注信息",labelCol:e.labelCol}},[a("a-col",{attrs:{span:20}},[a("a-textarea",{ref:"textareax",staticStyle:{width:"300px"},attrs:{autocomplete:"off",rows:8,placeholder:"请输入备注信息",name:"remarks"},model:{value:e.post.remarks,callback:function(t){e.$set(e.post,"remarks",t)},expression:"post.remarks"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1),a("a-modal",{attrs:{title:"请选择同步数据到组织架构的部门",width:600,visible:e.visible_tree,maskClosable:!1,confirmLoading:e.confirmxLoading},on:{ok:e.handleTSubmit,cancel:e.handleTCancel}},[e.visible_tree?a("a-tree",{attrs:{defaultExpandedKeys:[e.firstKey],"tree-data":e.treeData,"default-selected-keys":[],"auto-expand-parent":!0,"default-expand-parent":!0},on:{select:e.onTreeSelect}}):e._e()],1)],1)])},n=[],s=(a("7d24"),a("dfae")),r=(a("ac1f"),a("841c"),a("1276"),a("b0c0"),a("498a"),a("a0e0")),o=[{title:"编号",dataIndex:"id",key:"id"},{title:"登录账号",dataIndex:"account",key:"account"},{title:"姓名",dataIndex:"realname",key:"realname"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"备注",dataIndex:"remarks",key:"remarks"},{title:"权限分组",dataIndex:"group_name",key:"group_name"},{title:"操作",dataIndex:"",key:"",width:150,scopedSlots:{customRender:"action"}}],c=[],l={name:"houseAdminList",filters:{},components:{"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:"",key_val:"name",key_val1:"paytime",page:1},form:this.$form.createForm(this),visible:!1,visible_edit:!1,loading:!1,data:c,columns:o,key_name:"",page:1,search_data:"",confirmLoading:!1,confirmxLoading:!1,accountAisabled:!0,is_edit_worker:!0,editRecord:{},src_href:"/shequ.php?g=House&c=Role&a=role_export",post:{account:"",pwd:"",realname:"",phone:"",remarks:""},group_id:0,visible_tree:!1,treeData:[],firstKey:"",department_id:0,selectTitle:"",recordV:[]}},activated:function(){},methods:{adminList:function(){this.visible=!0,this.getList()},getList:function(){var e=this;this.loading=!0,this.search["page"]=this.page,this.request(r["a"].getAdminRoleList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1}))},synFrameWork:function(e){this.recordV=e,this.getOrganizationTree()},getOrganizationTree:function(){var e=this;this.request(r["a"].getOrganizationTree).then((function(t){e.treeData=t.menu_list,console.log("resTree",e.treeData),t.menu_list[0].key&&(e.firstKey=t.menu_list[0].key,t.menu_list[0].disabled=!0,console.log("firstKey",e.firstKey)),e.visible_tree=!0}))},onTreeSelect:function(e,t){var a=e[0].split("-");this.department_id=a[a.length-1],this.department_id=1*this.department_id,this.selectTitle=a[a.length-2]},handleTSubmit:function(){if(this.department_id<1)return this.$message.error("请选择一个组织架构部门！"),!1;var e=this,t="您确定将账号为【"+this.recordV.account+"】姓名为【"+this.recordV.realname+"】 的数据同步到组织架构的【"+this.selectTitle+"】部门下？",a={admin_id:this.recordV.id,account:this.recordV.account};a.department_id=this.department_id,this.$confirm({title:"同步数据确认",content:t,onOk:function(){e.confirmxLoading=!0,e.request(r["a"].synAdminToWorker,a).then((function(t){e.$message.success("操作成功"),setTimeout((function(){e.confirmxLoading=!1,e.visible_tree=!1,e.getList()}),1500)})).catch((function(t){e.confirmxLoading=!1}))},onCancel:function(){}})},handleTCancel:function(){this.department_id=0,this.recordV=[],this.visible_tree=!1},handleSubmit:function(){var e=this;if(!this.post.account||this.post.account.length<1)return this.$message.error("请输入登录账号!"),!1;if(0==this.is_set_pwd&&(!this.post.pwd||this.post.account.pwd<1))return this.$message.error("请输入登录密码!"),!1;if(!this.post.phone||this.post.phone.length<1)return this.$message.error("请输入手机号!"),!1;var t=/^1[23456789]\d{9}$/;return t.test(this.post.phone)?!this.post.realname||this.post.realname.length<1?(this.$message.error("请输入姓名!"),!1):(this.post.id=this.editRecord.id,this.loading=!0,void this.request(r["a"].saveHouseAdminEdit,this.post).then((function(t){e.loading=!1,t.is_haved_account&&1==t.is_haved_account?(e.accountAisabled=!1,e.$message.error("此账号【"+e.post.account+"】已经存在了，请修改！")):t.is_haved_phone&&1==t.is_haved_phone?e.$message.error("此手机号【"+e.post.phone+"】已经存在了，请修改！"):(e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible_edit=!1,e.is_edit_worker=!1,e.editRecord={},e.post={account:"",pwd:"",realname:"",phone:"",remarks:""},e.group_id=0,e.getList()}),1500))})).catch((function(t){e.loading=!1}))):(this.$message.error("手机号格式不正确！"),!1)},validateInput:function(e){var t=e.target.value,a=e.target.name;if(console.log("name",a),console.log("value",t),t=t.trim(),!this.is_edit_worker)return!1;if("account"==a){if(!t||t.length<1)return e.target.focus(),!1;var i=/^[A-Za-z0-9_]+$/;if(!this.accountAisabled&&!i.test(t))return this.$message.error("登录账号必须是英文大小写字母、数字、下划线组成"),e.target.focus(),!1;if(!this.accountAisabled&&t.length<3)return this.$message.error("请保持登录账号长度至少3位以上!"),e.target.focus(),!1;if(!this.accountAisabled&&t.length>90)return this.$message.error("登录账号长度太长了，请小于90个字符！"),e.target.focus(),!1;this.post.account=t}else if("password"==a){if(0==this.is_set_pwd&&(!t||t.length<1))return e.target.focus(),!1;var n=/^[A-Za-z0-9_]+$/;if(0==this.is_set_pwd&&!n.test(t))return this.$message.error("登录密码必须是英文大小写字母、数字、下划线组成"),e.target.focus(),!1;if(0==this.is_set_pwd&&t.length<3)return this.$message.error("请保持登录密码长度至少3位以上!"),e.target.focus(),!1;if(0==this.is_set_pwd&&t.length>32)return this.$message.error("登录密码长度太长了，请小于32个字符！"),e.target.focus(),!1;this.post.pwd=t||""}else if("realname"==a){if(!t||t.length<1)return e.target.focus(),!1;if(t.length>10)return this.$message.error("您输入的姓名长度太长了，请小于10个字符！"),e.target.focus(),!1;this.post.realname=t}else if("phone"==a){if(!t||t.length<1)return e.target.focus(),!1;var s=/^1[23456789]\d{9}$/;if(!s.test(t))return this.$message.error("请输入正确的手机号格式！"),e.target.focus(),!1;this.post.phone=t}},keyChange:function(e){},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current,this.getList())},handleCancel:function(){this.visible=!1},handle2Cancel:function(){this.visible_edit=!1,this.is_edit_worker=!1,this.editRecord={},this.post={account:"",pwd:"",realname:"",phone:"",remarks:""},this.group_id=0},editAccount:function(e){this.visible_edit=!0,this.editRecord=e,this.post.account=e.account,this.post.realname=e.realname,this.post.phone=e.phone,this.is_set_pwd=1*e.set_pwd,this.post.remarks=e.remarks?e.remarks:"",this.group_id=1*e.group_id},dateOnChange:function(e,t){this.search.date=t,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var e={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(e)},resetList:function(){this.search={keyword:"",page:1},this.getList()}}},d=l,u=(a("3a04"),a("2877")),h=Object(u["a"])(d,i,n,!1,null,"c2278986",null);t["default"]=h.exports},"8d6e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"编辑",width:1400,visible:e.visible,maskClosable:!1,placement:"right"},on:{close:e.handleCancel}},[0==e.currentIndex?a("div",{staticStyle:{"margin-bottom":"20px"}},[a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("基本设置")]),a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("权限设置")])],1):a("div",{staticStyle:{"margin-bottom":"20px"}},[a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("基本设置")]),a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("权限设置")])],1),0==e.currentIndex?a("a-card",[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"分组名称",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:20,placeholder:"请输入姓名",autocomplete:"off",name:"group_name"},on:{blur:e.validateInput},model:{value:e.post.name,callback:function(t){e.$set(e.post,"name",t)},expression:"post.name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"选择标签",labelCol:e.labelCol}},[a("a-col",{attrs:{span:18}},[a("a-select",{staticStyle:{width:"300px"},attrs:{mode:"multiple","option-label-prop":"label",placeholder:"请选择标签"},on:{change:e.catIdChange},model:{value:e.post.label_all,callback:function(t){e.$set(e.post,"label_all",t)},expression:"post.label_all"}},e._l(e.label_list,(function(t){return a("a-select-option",{key:t.id,attrs:{label:t.title}},[e._v(" "+e._s(t.title)+" ")])})),1)],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注信息",labelCol:e.labelCol}},[a("a-col",{attrs:{span:20}},[a("a-textarea",{ref:"textareax",staticStyle:{width:"300px"},attrs:{autocomplete:"off",rows:8,placeholder:"请输入备注信息",name:"remarks"},model:{value:e.post.remarks,callback:function(t){e.$set(e.post,"remarks",t)},expression:"post.remarks"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1):e._e(),1==e.currentIndex?a("a-card",[a("div",{staticClass:"all_menus",attrs:{id:"components_layout_menus"}},[a("div",[a("a-layout",{staticStyle:{"line-height":"40px","font-size":"25px"}},[a("a-layout-content",[a("a-checkbox",{staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:"0",checked:e.all_checked},on:{change:e.checkAll}},[e._v(" 全选 ")])],1)],1),e._l(e.menus,(function(t,i){return a("a-layout",{staticStyle:{"line-height":"40px"}},[a("a-layout-sider",[a("a-checkbox",{ref:t.ckey,refInFor:!0,staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:t.id,checked:e.getCval(t.ckey)},on:{change:e.check2All}},[e._v(" "+e._s(t.name)+" ")])],1),a("a-layout",e._l(t.child,(function(i,n){return a("a-layout-content",[a("div",{staticClass:"sub1div"},[a("a-checkbox",{ref:i.ckey,refInFor:!0,attrs:{checked:e.getCval(i.ckey),value:i.id,id:"item0id_"+t.id},on:{change:e.check3All}},[e._v(" "+e._s(i.name)+" ")])],1),e._l(i.child,(function(n,s){return i.child&&i.child.length>0?a("div",{staticClass:"sub2div"},[a("div",{staticClass:"sub2div_1div"},[a("a-checkbox",{ref:n.ckey,refInFor:!0,attrs:{value:n.id,checked:e.getCval(n.ckey),id:"item0id_"+t.id+"-item1id_"+i.id},on:{change:e.check4All}},[e._v(" "+e._s(n.name)+" ")])],1),n.child&&n.child.length>0?a("div",{staticClass:"sub2div_2div",staticStyle:{width:"100%"}},[a("a-row",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},e._l(n.child,(function(s,r){return a("a-col",{staticStyle:{width:"33.3%","flex-shrink":"0","margin-bottom":"5px"}},[a("a-checkbox",{ref:s.ckey,refInFor:!0,attrs:{value:s.id,checked:e.getCval(s.ckey),id:"item0id_"+t.id+"-item1id_"+i.id+"-item2id_"+n.id},on:{change:e.onGroupChange}},[e._v(" "+e._s(s.name)+" ")])],1)})),1)],1):e._e()]):e._e()}))],2)})),1)],1)}))],2)])]):e._e(),a("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[a("a-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit()}}},[e._v("保存设置")])],1)],1)},n=[],s=(a("7d24"),a("dfae")),r=(a("b0c0"),a("ac1f"),a("1276"),a("d81d"),a("a15b"),a("498a"),a("841c"),a("a0e0")),o=a("c1df"),c=a.n(o),l=[],d=[],u={name:"houseAdminGroupEdit",filters:{},components:{"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},search:{keyword:"",key_val:"name",key_val1:"paytime",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:d,columns:l,currentIndex:0,dateFormat:"YYYY-MM-DD HH:mm:ss",is_edit_worker:!0,menus:[],post:{name:"",remarks:"",label_all:void 0},all_checked:!1,mckeyArr:[],group_id:0,label_list:[]}},activated:function(){},methods:{moment:c.a,editGroup:function(e){console.log("record",e),this.visible=!0,this.post.name=e.name?e.name:"",this.post.remarks=e.remarks?e.remarks:"",this.group_id=e.group_id?1*e.group_id:0,this.mckeyArr=[],this.menus=[],this.all_checked=!1,this.currentIndex=0,this.is_edit_worker=!0,this.post.label_all=e.label_all?e.label_all:void 0,this.getPowerLabelAll()},onGroupChange:function(e){var t=e.target.id,a=this.handleIdd(t),i=e.target.checked,n=(e.target.defaultChecked,e.target.value);i?this.setCval(a,!0,3,n):(this.setCval(a,!1,3,n),this.all_checked=!1)},handleIdd:function(e){for(var t=e.split("-"),a=[],i=0;i<t.length;i++){var n=t[i].split("_");a.push({item_id:n["0"],item_id_v:n["1"]})}return a},checkAll:function(e){var t=e.target.checked;e.target.defaultChecked,e.target.value;t?(this.all_checked=!0,this.mckeyArr.map((function(e,t){e.cv=!0}))):(this.all_checked=!1,this.mckeyArr.map((function(e,t){e.cv=!1})))},check2All:function(e){var t=e.target.checked,a=(e.target.defaultChecked,e.target.value);t?this.setCval(null,!0,0,a):(this.setCval(null,!1,0,a),this.all_checked=!1)},check3All:function(e){var t=e.target.id,a=this.handleIdd(t),i=e.target.checked,n=(e.target.defaultChecked,e.target.value);i?this.setCval(a,!0,1,n):(this.setCval(a,!1,1,n),this.all_checked=!1)},check4All:function(e){var t=e.target.id,a=this.handleIdd(t),i=e.target.checked,n=(e.target.defaultChecked,e.target.value);i?this.setCval(a,!0,2,n):(this.setCval(a,!1,2,n),this.all_checked=!1)},handleSubmit:function(){var e=this;if(1==this.currentIndex){if(this.group_id<1)return this.$message.error("请先去基本设置中保存设置一个分组信息!"),!1;var t={xtype:1};t.group_id=this.group_id,t.menus="";var a=[];this.mckeyArr.map((function(e,t){e.cv&&a.push(e.id)})),a.length>0&&(t.menus=a.join(",")),this.loading=!0,this.request(r["a"].saveHouseGroupEdit,t).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.is_edit_worker=!1,e.group_id=0,e.currentIndex=0,e.menus=[],e.mckeyArr=[],e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))}else{if(!this.post.name||this.post.name.length<1)return this.$message.error("请输入分组名称!"),!1;this.post.group_id=this.group_id,this.post.xtype=0,this.loading=!0,this.request(r["a"].saveHouseGroupEdit,this.post).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.is_edit_worker=!1,e.group_id=t.group_id,e.currentIndex=0,e.menus=[],e.mckeyArr=[],e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))}},validateInput:function(e){var t=e.target.value,a=e.target.name;if(console.log("name",a),console.log("value",t),t=t.trim(),!this.is_edit_worker)return!1;if(0!=this.currentIndex)return!1;if("group_name"==a){if(!t||t.length<1)return e.target.focus(),!1;if(t.length>20)return this.$message.error("您输入的分组名称长度太长了，请小于20个字！"),e.target.focus(),!1;this.post.name=t}},getRolePermissionMenus:function(){var e=this,t={group_id:this.group_id};this.request(r["a"].getGroupPermissionMenus,t).then((function(t){e.mckeyArr=t.mckeyArr,e.menus=t.menus}))},getCval:function(e){var t=!1;return this.mckeyArr.map((function(a,i){e==a.ckey&&(t=a.cv)})),console.log("ckey",e+"=>"+t),t},setCval:function(e,t,a,i){var n=this;if(a>=0){var s=a,r="key_"+s+"_"+i,o="",c=-1;this.mckeyArr.map((function(e,a){r==e.ckey&&(e,e.cv=t,void 0!=e.ckey2?(o=e.ckey2,c=2):void 0!=e.ckey1?(o=e.ckey1,c=1):void 0!=e.ckey0&&(o=e.ckey0,c=0)),r==e.ckey2&&(e.cv=t),r==e.ckey1&&(e.cv=t),r==e.ckey0&&(e.cv=t)}));var l=!0;if((!e||null===e||e.length<1)&&(l=!1),a>0&&!t&&this.mckeyArr.map((function(e,t){(2==c&&o==e.ckey2&&e.cv||1==c&&o==e.ckey1&&e.cv||0==c&&o==e.ckey0&&e.cv)&&(l=!1)})),l&&a>0){a-=1;for(var d=function(a){var i="item"+a+"id",s=0;e.map((function(e,t){e.item_id==i&&(s=e.item_id_v)}));var r="key_"+a+"_"+s;if(t)n.mckeyArr.map((function(e,a){r==e.ckey&&(e.cv=t)}));else if(0==a){var o=!1;n.mckeyArr.map((function(e,t){r==e.ckey0&&e.cv&&(console.log("tmp_ckey0",e),o=!0)})),o||n.mckeyArr.map((function(e,a){r==e.ckey&&(e.cv=t)}))}else if(1==a){var c=!1;n.mckeyArr.map((function(e,t){r==e.ckey1&&e.cv&&(console.log("tmp_ckey1",e),c=!0)})),c||n.mckeyArr.map((function(e,a){r==e.ckey&&(e.cv=t)}))}else if(2==a){var l=!1;n.mckeyArr.map((function(e,t){r==e.ckey2&&e.cv&&(l=!0)})),l||n.mckeyArr.map((function(e,a){r==e.ckey&&(e.cv=t)}))}},u=a;u>=0;u--)d(u)}}},changeXTab:function(e){this.currentIndex=e,0==this.currentIndex||this.menus.length<1&&this.getRolePermissionMenus()},handleCancel:function(){var e=this;this.is_edit_worker=!1,this.visible=!1,this.group_id=0,this.menus=[],this.mckeyArr=[],this.post.name="",this.post.remarks="",this.currentIndex=0,setTimeout((function(){e.form=e.$form.createForm(e)}),500)},date_moment:function(e,t){return e?c()(e,t):""},table_change:function(e){e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current)},dateOnChange:function(e,t){this.search.date=t,this.search.begin_time=t["0"],this.search.end_time=t["1"]},getPowerLabelAll:function(){var e=this;this.request(r["a"].powerLabelAll).then((function(t){e.label_list=t})).catch((function(e){})),this.request(r["a"].powerLabel,{group_id:this.group_id}).then((function(t){e.post.label_all=t})).catch((function(e){}))},catIdChange:function(e){this.post.label_all=e}}},h=u,p=(a("07b4"),a("2877")),m=Object(p["a"])(h,i,n,!1,null,"6d8001cc",null);t["default"]=m.exports},bc4c:function(e,t,a){"use strict";a("4048")},cf88:function(e,t,a){},d689:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-suggestions-list-box"},[a("a-row",[a("a-col",{staticClass:"padding-tp10",staticStyle:{width:"400px","margin-left":"50px"},attrs:{md:2,sm:24}},[e.role_check.role_add>0?a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.houseAdminGroupEdit.editGroup({})}}},[e._v("添加")]):e._e(),e.role_check.role_olddata>0?a("a-button",{staticStyle:{"margin-left":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.houseAdminList.adminList({})}}},[e._v(" 老版管理员数据 ")]):e._e(),e.role_check.role_explod>0?a("a",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-left":"50px"},attrs:{href:e.src_href,target:"_blank"}},[e._v("Excel导出")]):e._e()],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading,"row-key":function(e){return e.group_id}},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,i,n){return a("span",{},[e.role_check.role_edit>0?a("a",{on:{click:function(t){return e.$refs.houseAdminGroupEdit.editGroup(i)}}},[e._v(" 编辑 ")]):e._e(),a("a-divider",{attrs:{type:"vertical"}}),e.role_check.role_del>0?a("a",{on:{click:function(t){return e.delGroup(i)}}},[e._v(" 删除 ")]):e._e()],1)}}])}),a("house-admin-group-edit",{ref:"houseAdminGroupEdit",on:{ok:e.bindOk}}),a("house-admin-list",{ref:"houseAdminList"})],1)},n=[],s=(a("7d24"),a("dfae")),r=(a("ac1f"),a("841c"),a("b0c0"),a("a0e0")),o=a("8d6e"),c=a("8362"),l=[{title:"编号",dataIndex:"group_id",width:120,key:"group_id"},{title:"名称",dataIndex:"name",key:"name",width:120},{title:"备注",dataIndex:"remarks",key:"remarks",width:120},{title:"操作",dataIndex:"",key:"",width:150,scopedSlots:{customRender:"action"}}],d=[],u={name:"houseAdminGroupList",filters:{},components:{houseAdminGroupEdit:o["default"],houseAdminList:c["default"],"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:""},visible:!1,loading:!1,data:d,columns:l,key_name:"",page:1,search_data:"",confirmLoading:!1,src_href:"/shequ.php?g=House&c=Role&a=group_export",role_check:{}}},activated:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,this.search["page"]=this.page,this.request(r["a"].getHouseAdminGroupList,this.search).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.role_check=t.role_check,e.loading=!1}))},bindOk:function(){this.getList()},delGroup:function(e){var t=this,a={group_id:e.group_id};this.$confirm({title:"确认删除",content:"您确认要删除此条分组名为【"+e.name+"】数据吗？",onOk:function(){t.request(r["a"].deleteHouseGroup,a).then((function(e){t.$message.success("删除成功"),setTimeout((function(){t.visible=!1,t.confirmLoading=!1,t.getList()}),1500)}))},onCancel:function(){}})},keyChange:function(e){},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current,this.getList())},dateOnChange:function(e,t){this.search.date=t,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var e={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(e)},resetList:function(){this.search={keyword:"",page:1},this.getList()}}},h=u,p=(a("bc4c"),a("2877")),m=Object(p["a"])(h,i,n,!1,null,"567a1c15",null);t["default"]=m.exports},e4de:function(e,t,a){}}]);