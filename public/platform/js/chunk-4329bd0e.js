(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4329bd0e","chunk-66b5dc0c"],{"10fd":function(e,t,i){},1756:function(e,t,i){"use strict";i("7a56")},"3d33":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{title:e.title,width:1400,visible:e.visible,maskClosable:!1,placement:"right"},on:{close:e.handleCancel}},[0==e.currentIndex?i("div",{staticStyle:{"margin-bottom":"20px"}},[i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("基本设置")]),i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("小区权限设置")]),i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(2)}}},[e._v("物业权限设置")])],1):1==e.currentIndex?i("div",{staticStyle:{"margin-bottom":"20px"}},[i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("基本设置")]),i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("小区权限设置")]),i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(2)}}},[e._v("物业权限设置")])],1):i("div",{staticStyle:{"margin-bottom":"20px"}},[i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("基本设置")]),i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("小区权限设置")]),i("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(2)}}},[e._v("物业权限设置")])],1),0==e.currentIndex?i("a-card",[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"登录账号",labelCol:e.labelCol,required:!0}},[i("a-col",{attrs:{span:18}},[i("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入登录账号",autocomplete:"off",name:"account",disabled:e.accountAisabled},model:{value:e.post.account,callback:function(t){e.$set(e.post,"account",t)},expression:"post.account"}})],1)],1),i("a-form-item",{attrs:{label:"登录密码",labelCol:e.labelCol,required:!0}},[i("a-col",{attrs:{span:18}},[i("a-input-password",{staticStyle:{width:"300px"},attrs:{placeholder:1==e.worker.set_pwd?" 如果不需修改密码则不填写":"请填写登录密码",name:"password",autocomplete:"new-password"},model:{value:e.post.password,callback:function(t){e.$set(e.post,"password",t)},expression:"post.password"}})],1),i("a-col",{attrs:{span:6}})],1),i("a-form-item",{attrs:{label:"姓名",labelCol:e.labelCol,required:!0}},[i("a-col",{attrs:{span:18}},[i("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名",autocomplete:"off",name:"realname"},on:{blur:e.validateInput},model:{value:e.post.realname,callback:function(t){e.$set(e.post,"realname",t)},expression:"post.realname"}})],1),i("a-col",{attrs:{span:6}})],1),i("a-form-item",{attrs:{label:"手机号",labelCol:e.labelCol,required:!0}},[i("a-col",{attrs:{span:18}},[i("a-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入手机号",autocomplete:"off",name:"phone","max-length":11},on:{blur:e.validateInput},model:{value:e.post.phone,callback:function(t){e.$set(e.post,"phone",t)},expression:"post.phone"}})],1),i("a-col",{attrs:{span:6}})],1),i("a-form-item",{attrs:{label:"备注信息",labelCol:e.labelCol}},[i("a-col",{attrs:{span:20}},[i("a-textarea",{ref:"textareax",staticStyle:{width:"300px",resize:"none"},attrs:{autocomplete:"off",rows:8,placeholder:"请输入备注信息",name:"remarks"},model:{value:e.post.remarks,callback:function(t){e.$set(e.post,"remarks",t)},expression:"post.remarks"}})],1),i("a-col",{attrs:{span:6}})],1)],1)],1):e._e(),1==e.currentIndex?i("a-card",[i("div",{staticClass:"search-box"},[i("a-row",[i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"250px"},attrs:{span:18}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("选择省市区县：")]),i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部省",placeholder:"请选择省"},on:{change:e.handleSelectProvince},model:{value:e.search.province_id,callback:function(t){e.$set(e.search,"province_id",t)},expression:"search.province_id"}},[i("a-select-option",{attrs:{value:"0"}},[e._v(" 全部省 ")]),e._l(e.province_list,(function(t,a){return i("a-select-option",{attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"155px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部城市",placeholder:"请选择城市"},on:{change:e.handleSelectCity},model:{value:e.search.city_id,callback:function(t){e.$set(e.search,"city_id",t)},expression:"search.city_id"}},[i("a-select-option",{attrs:{value:"0"}},[e._v(" 全部城市 ")]),e._l(e.city_list,(function(t,a){return i("a-select-option",{attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"170px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部区县",placeholder:"请选择区县"},on:{change:e.handleSelectArea},model:{value:e.search.area_id,callback:function(t){e.$set(e.search,"area_id",t)},expression:"search.area_id"}},[i("a-select-option",{attrs:{value:"0"}},[e._v(" 全部区县 ")]),e._l(e.area_list,(function(t,a){return i("a-select-option",{attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"200px"},attrs:{span:18}},[i("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入小区名称",autocomplete:"off"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1),i("a-col",{staticStyle:{"padding-left":"10px","padding-bottom":"15px",width:"37%"},attrs:{span:18}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")]),i("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(t){return e.resetList()}}},[e._v(" 重置 ")]),i("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(t){return e.batchSetRolePermission()}}},[e._v(" 批量权限分配 ")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading,"row-key":function(e){return e.village_id},"row-selection":e.rowSelection},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,a,r){return i("span",{},[i("a",{on:{click:function(t){return e.$refs.propertyPowerVillageEdit.editAccount(a,e.iddd)}}},[e._v("分配权限")])])}}],null,!1,592446962)})],1):e._e(),2==e.currentIndex?i("a-card",[i("div",{staticClass:"all_menus",attrs:{id:"components_layout_menus"}},[i("p",[i("strong",[e._v("温馨提示：")]),e._v("物业菜单默认会有首页，数据中心，控制台，新版收费，功能应用库")]),i("div",[i("a-layout",{staticStyle:{"line-height":"40px","font-size":"25px"}},[i("a-layout-content",[i("a-checkbox",{staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:"0",checked:e.all_checked},on:{change:e.checkAll}},[e._v(" 全选 ")])],1)],1),e._l(e.menus,(function(t,a){return i("a-layout",{staticStyle:{"line-height":"40px"}},[i("a-layout-sider",[i("a-checkbox",{ref:t.ckey,refInFor:!0,staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:t.id,checked:e.getCval(t.ckey)},on:{change:e.check2All}},[e._v(" "+e._s(t.name)+" ")])],1),i("a-layout",e._l(t.child,(function(a,r){return i("a-layout-content",[i("div",{staticClass:"sub1div"},[i("a-checkbox",{ref:a.ckey,refInFor:!0,attrs:{checked:e.getCval(a.ckey),value:a.id,id:"item0id:"+t.id},on:{change:e.check3All}},[e._v(" "+e._s(a.name)+" ")])],1),e._l(a.child,(function(r,s){return a.child&&a.child.length>0?i("div",{staticClass:"sub2div"},[i("div",{staticClass:"sub2div_1div"},[i("a-checkbox",{ref:r.ckey,refInFor:!0,attrs:{value:r.id,checked:e.getCval(r.ckey),id:"item0id:"+t.id+"-item1id:"+a.id},on:{change:e.check4All}},[e._v(" "+e._s(r.name)+" ")])],1),r.child&&r.child.length>0?i("div",{staticClass:"sub2div_2div",staticStyle:{width:"100%"}},[i("a-row",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},e._l(r.child,(function(s,n){return i("a-col",{staticStyle:{width:"33.3%","flex-shrink":"0","margin-bottom":"5px"}},[i("a-checkbox",{ref:s.ckey,refInFor:!0,attrs:{value:s.id,checked:e.getCval(s.ckey),id:"item0id:"+t.id+"-item1id:"+a.id+"-item2id:"+r.id},on:{change:e.onGroupChange}},[e._v(" "+e._s(s.name)+" ")])],1)})),1)],1):e._e()]):e._e()}))],2)})),1)],1)}))],2)])]):e._e(),i("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[i("a-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit()}}},[e._v("保存设置")])],1),i("property-power-village-edit",{ref:"propertyPowerVillageEdit"})],1)},r=[],s=(i("7d24"),i("dfae")),n=(i("d81d"),i("caad"),i("2532"),i("a15b"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("a630"),i("c740"),i("a434"),i("ac1f"),i("841c"),i("b0c0"),i("498a"),i("a0e0")),c=i("f331"),l=i("c1df"),o=i.n(l),d=[{title:"全选",dataIndex:"village_id",key:"village_id"},{title:"小区名称",dataIndex:"village_name",key:"village_name"},{title:"小区地址",dataIndex:"village_address",key:"village_address"},{title:"分配权限",dataIndex:"",key:"",scopedSlots:{customRender:"action"}}],h=[],u={name:"propertyPowerEdit",filters:{},components:{propertyPowerVillageEdit:c["default"],"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},search:{keyword:"",province_id:"0",city_id:"0",area_id:"0",page:1},form:this.$form.createForm(this),pagination:{current:1,pageSize:10,total:10},visible:!1,loading:!1,data:h,columns:d,iddd:0,worker:{},currentIndex:0,dateFormat:"YYYY-MM-DD HH:mm:ss",is_set_pwd:0,accountAisabled:!1,is_edit_worker:!0,menus:[],selectedRowKeys:[],post:{account:"",password:"",realname:"",phone:"",remarks:""},role:{},all_checked:!1,mckeyArr:[],group_id:0,property_id:0,title:"",province_list:[],city_list:[],area_list:[],village_ids:[],opt_village_ids:[]}},activated:function(){},computed:{rowSelection:function(){var e=this,t=this.selectedRowKeys;return{onChange:function(t,i){console.log("selectedRowKeys",t),e.village_ids=t},onSelect:function(t,i,a,r){if(console.log("record,",t,"selected",i),t&&t.village_id){var s=!1;e.opt_village_ids.map((function(a,r){a.village_id==t.village_id&&(s=!0,e.opt_village_ids[r].selected=i)})),s||e.opt_village_ids.push({village_id:t.village_id,selected:i})}console.log("opt_village_ids,",e.opt_village_ids)},getCheckboxProps:function(e){var i=e.village_id;return{props:{defaultChecked:t.includes(i)}}}}}},methods:{moment:o.a,editAccount:function(e){if(console.log("record",e),this.title="登录账号【"+e.account+"】编辑",this.visible=!0,this.iddd=e.id,this.worker=e,this.post.account=e.account,this.post.realname=e.realname,this.post.phone=e.phone,this.is_set_pwd=1*e.set_pwd,this.post.remarks=e.remarks?e.remarks:"",this.group_id=1*e.group_id,this.mckeyArr=[],this.menus=[],this.data=[],this.all_checked=!1,this.currentIndex=0,this.property_id=e.property_id,this.village_ids=[],e.menus.length>0){for(var t=e.menus.split(","),i=0;i<t.length;i++){var a=1*t[i];this.selectedRowKeys.push(a),this.village_ids.push(a)}console.log("recordSelectedRowKeys",this.selectedRowKeys)}this.opt_village_ids=[],e.account&&e.account.length>0?this.accountAisabled=!0:this.accountAisabled=!1,this.is_edit_worker=!0},handleSelectChange:function(e,t){this.group_id=0!=e&&"0"!=e&&e?1*e:0},batchSetRolePermission:function(){if(this.selectedRowKeys.length<1)return this.$message.error("请至少勾选一个小区！"),!1;var e=this.selectedRowKeys.join(","),t={village_name:"",village_id:"0"};t.property_id=this.property_id,this.$refs.propertyPowerVillageEdit.editAccount(t,this.iddd,e)},onGroupChange:function(e){this.group_id=0;var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,r=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,3,r):(this.setCval(i,!1,3,r),this.all_checked=!1)},handleIdd:function(e){for(var t=e.split("-"),i=[],a=0;a<t.length;a++){var r=t[a].split(":");i.push({item_id:r["0"],item_id_v:r["1"]})}return i},checkAll:function(e){this.group_id=0;var t=e.target.checked;e.target.defaultChecked,e.target.value;t?(this.all_checked=!0,this.mckeyArr.map((function(e,t){e.cv=!0}))):(this.all_checked=!1,this.mckeyArr.map((function(e,t){e.cv=!1})))},check2All:function(e){this.group_id=0;var t=e.target.checked,i=(e.target.defaultChecked,e.target.value);t?this.setCval(null,!0,0,i):(this.setCval(null,!1,0,i),this.all_checked=!1)},check3All:function(e){this.group_id=0;var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,r=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,1,r):(this.setCval(i,!1,1,r),this.all_checked=!1)},check4All:function(e){this.group_id=0;var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,r=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,2,r):(this.setCval(i,!1,2,r),this.all_checked=!1)},handleSubmit:function(){var e=this;if(1==this.currentIndex){var t={xtype:1};t.id=this.iddd,t.menus_village="";var i=[];i=this.village_ids;var a=new Set(i);if(i=Array.from(a),this.opt_village_ids.length>0&&this.opt_village_ids.map((function(e,t){if(e.village_id&&!e.selected){var a=1*e.village_id,r=i.findIndex((function(e){return e==a}));console.log("index",r,"v_id",a),r>-1&&i.splice(r,1)}else e.village_id&&e.selected&&i.push(e.village_id)})),console.log("tmp_village_ids",i),i.length>0){var r=new Set(i);i=Array.from(r),t.menus_village=i.join(",")}this.loading=!0,this.request(n["a"].savePropertyEdit,t).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.is_edit_worker=!1,e.worker={},e.iddd=0,e.data=[],e.menus=[],e.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",page:1},e.selectedRowKeys=[],e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))}else if(0==this.currentIndex){if(!this.post.account||this.post.account.length<1)return this.$message.error("请输入登录账号!"),!1;if(0==this.is_set_pwd&&(!this.post.password||this.post.account.password<1))return this.$message.error("请输入登录密码!"),!1;if(!this.post.phone||this.post.phone.length<1)return this.$message.error("请输入手机号码!"),!1;var s=/^1[23456789]\d{9}$/;if(!s.test(this.post.phone))return this.$message.error("手机号格式不正确！"),!1;if(!this.post.realname||this.post.realname.length<1)return this.$message.error("请输入姓名!"),!1;this.post.id=this.iddd,this.post.xtype=0,this.loading=!0,this.request(n["a"].savePropertyEdit,this.post).then((function(t){e.loading=!1,t.is_haved_account&&1==t.is_haved_account?(e.accountAisabled=!1,e.$message.error("此账号【"+e.post.account+"】已经存在了，请修改！")):t.is_haved_phone&&1==t.is_haved_phone?e.$message.error("此手机号【"+e.post.phone+"】已经存在了，请修改！"):(e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.is_edit_worker=!1,e.record={},e.iddd=0,e.menus=[],e.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",page:1},e.post={account:"",password:"",realname:"",phone:"",remarks:""},e.selectedRowKeys=[],e.$emit("ok")}),1500))})).catch((function(t){e.loading=!1}))}else if(2==this.currentIndex){var c={xtype:2};c.id=this.iddd,c.menus_property="";var l=[];this.mckeyArr.map((function(e,t){e.cv&&l.push(e.id)})),l.length>0&&(c.menus_property=l.join(",")),this.loading=!0,this.request(n["a"].savePropertyEdit,c).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.is_edit_worker=!1,e.worker={},e.iddd=0,e.menus=[],e.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",page:1},e.selectedRowKeys=[],e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))}},validateInput:function(e){var t=e.target.value,i=e.target.name;if(console.log("name",i),console.log("value",t),t=t.trim(),!this.is_edit_worker)return!1;if(0!=this.currentIndex)return!1;if("account"==i){if(!t||t.length<1)return this.$message.error("请输入登录账号!"),e.target.focus(),!1;var a=/^[A-Za-z0-9_]+$/;if(!this.accountAisabled&&!a.test(t))return this.$message.error("登录账号必须是英文大小写字母、数字、下划线组成"),e.target.focus(),!1;if(!this.accountAisabled&&t.length<3)return this.$message.error("请保持登录账号长度至少3位以上!"),e.target.focus(),!1;if(!this.accountAisabled&&t.length>90)return this.$message.error("登录账号长度太长了，请小于90个字符！"),e.target.focus(),!1;this.post.account=t}else if("password"==i){if(0==this.is_set_pwd&&(!t||t.length<1))return this.$message.error("请输入登录密码!"),e.target.focus(),!1;var r=/^[A-Za-z0-9_]+$/;if(t.length>0&&!r.test(t))return this.$message.error("登录密码必须是英文大小写字母、数字、下划线组成"),e.target.focus(),!1;if(t.length>0&&t.length<3)return this.$message.error("请保持登录密码长度至少3位以上!"),e.target.focus(),!1;if(t.length>0&&t.length>32)return this.$message.error("登录密码长度太长了，请小于32个字符！"),e.target.focus(),!1;t&&(this.post.password=t)}else if("realname"==i){if(!t||t.length<1)return this.$message.error("请输入姓名!"),e.target.focus(),!1;if(t.length>10)return this.$message.error("您输入的姓名长度太长了，请小于10个字符！"),e.target.focus(),!1;this.post.realname=t}else if("phone"==i){if(!t||t.length<1)return this.$message.error("请输入手机号!"),e.target.focus(),!1;var s=/^1[23456789]\d{9}$/;if(!s.test(t))return this.$message.error("请输入正确的手机号格式！"),e.target.focus(),!1;this.post.phone=t}},getPropertyvillage:function(){var e=this;this.search.page=this.pagination.current,this.search.id=this.worker.id,this.search.property_id=this.property_id,this.request(n["a"].getPropertyvillage,this.search).then((function(t){e.data=t.list,e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10}))},searchList:function(){this.pagination.current=1,this.getPropertyvillage()},getProvinceCityAreas:function(e,t){var i=this,a={xtype:e,pid:t};this.request(n["a"].getProvinceCityAreas,a).then((function(t){0==e?i.province_list=t:1==e?i.city_list=t:2==e&&(i.area_list=t)}))},handleSelectProvince:function(e,t){this.city_list=[],this.area_list=[],this.search.city_id="0",this.search.area_id="0",0!=e&&"0"!=e&&e?(this.search.province_id=e,this.getProvinceCityAreas(1,this.search.province_id)):this.search.province_id="0"},handleSelectCity:function(e,t){this.area_list=[],this.search.area_id="0",0!=e&&"0"!=e&&e?(this.search.city_id=e,this.getProvinceCityAreas(2,this.search.city_id)):this.search.city_id="0"},handleSelectArea:function(e,t){this.search.area_id=0!=e&&"0"!=e&&e?e:"0"},getRolePermissionMenus:function(){var e=this,t={id:this.iddd};this.request(n["a"].getPropertyRolePermission,t).then((function(t){e.mckeyArr=t.mckeyArr,e.menus=t.menus}))},getCval:function(e){var t=!1;return this.mckeyArr.map((function(i,a){e==i.ckey&&(t=i.cv)})),console.log("ckey",e+"=>"+t),t},setCval:function(e,t,i,a){var r=this;if(i>=0){var s=i,n="key_"+s+"_"+a,c="",l=-1;this.mckeyArr.map((function(e,i){n==e.ckey&&(e,e.cv=t,void 0!=e.ckey2?(c=e.ckey2,l=2):void 0!=e.ckey1?(c=e.ckey1,l=1):void 0!=e.ckey0&&(c=e.ckey0,l=0)),n==e.ckey2&&(e.cv=t),n==e.ckey1&&(e.cv=t),n==e.ckey0&&(e.cv=t)}));var o=!0;if((!e||null===e||e.length<1)&&(o=!1),i>0&&!t&&this.mckeyArr.map((function(e,t){(2==l&&c==e.ckey2&&e.cv||1==l&&c==e.ckey1&&e.cv||0==l&&c==e.ckey0&&e.cv)&&(o=!1)})),o&&i>0){i-=1;for(var d=function(){var i="item"+h+"id",a=0;e.map((function(e,t){e.item_id==i&&(a=e.item_id_v)}));var s="key_"+h+"_"+a;if(t)r.mckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}));else if(0==h){var n=!1;r.mckeyArr.map((function(e,t){s==e.ckey0&&e.cv&&(console.log("tmp_ckey0",e),n=!0)})),n||r.mckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}))}else if(1==h){var c=!1;r.mckeyArr.map((function(e,t){s==e.ckey1&&e.cv&&(console.log("tmp_ckey1",e),c=!0)})),c||r.mckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}))}else if(2==h){var l=!1;r.mckeyArr.map((function(e,t){s==e.ckey2&&e.cv&&(l=!0)})),l||r.mckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}))}},h=i;h>=0;h--)d()}}},changeXTab:function(e){this.currentIndex=e,0==this.currentIndex||(1==this.currentIndex?(this.data.length<1&&(this.pagination.current=1,this.getPropertyvillage()),this.getProvinceCityAreas(0,0)):2==this.currentIndex&&this.menus.length<1&&this.getRolePermissionMenus())},handleCancel:function(){var e=this;this.is_edit_worker=!1,this.visible=!1,this.worker={},this.iddd=0,this.menus=[],this.currentIndex=0,this.selectedRowKeys=[],this.data=[],this.opt_village_ids=[],this.village_ids=[],this.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",page:1},this.post={account:"",password:"",realname:"",phone:"",remarks:""},setTimeout((function(){e.form=e.$form.createForm(e)}),500)},date_moment:function(e,t){return e?o()(e,t):""},resetList:function(){this.city_list=[],this.area_list=[],this.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",page:1},this.getPropertyvillage()},table_change:function(e){var t=this;e.current&&e.current>0&&(t.pagination.current=e.current,t.getPropertyvillage())}}},p=u,v=(i("716f"),i("0c7c")),g=Object(v["a"])(p,a,r,!1,null,"698b7db8",null);t["default"]=g.exports},"716f":function(e,t,i){"use strict";i("10fd")},"7a56":function(e,t,i){},f331:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{title:e.title,width:1400,visible:e.visible,maskClosable:!1,placement:"right"},on:{close:e.handleXCancel}},[i("a-card",[i("div",{staticClass:"all_menus",attrs:{id:"components_layout_menus"}},[i("div",[i("a-layout",{staticStyle:{"line-height":"40px","font-size":"25px"}},[i("a-layout-content",[i("a-checkbox",{staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:"0",checked:e.all_checked},on:{change:e.checkAll}},[e._v(" 全选 ")])],1)],1),e._l(e.vmenus,(function(t,a){return i("a-layout",{staticStyle:{"line-height":"40px"}},[i("a-layout-sider",[i("a-checkbox",{ref:t.ckey,refInFor:!0,staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:t.id,checked:e.getCval(t.ckey)},on:{change:e.check2All}},[e._v(" "+e._s(t.name)+" ")])],1),i("a-layout",e._l(t.child,(function(a,r){return i("a-layout-content",[i("div",{staticClass:"sub1div"},[i("a-checkbox",{ref:a.ckey,refInFor:!0,attrs:{checked:e.getCval(a.ckey),value:a.id,id:"item0id:"+t.id},on:{change:e.check3All}},[e._v(" "+e._s(a.name)+" ")])],1),e._l(a.child,(function(r,s){return a.child&&a.child.length>0?i("div",{staticClass:"sub2div"},[i("div",{staticClass:"sub2div_1div"},[i("a-checkbox",{ref:r.ckey,refInFor:!0,attrs:{value:r.id,checked:e.getCval(r.ckey),id:"item0id:"+t.id+"-item1id:"+a.id},on:{change:e.check4All}},[e._v(" "+e._s(r.name)+" ")])],1),r.child&&r.child.length>0?i("div",{staticClass:"sub2div_2div",staticStyle:{width:"100%"}},[i("a-row",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},e._l(r.child,(function(s,n){return i("a-col",{staticStyle:{width:"33.3%","flex-shrink":"0","margin-bottom":"5px"}},[i("a-checkbox",{ref:s.ckey,refInFor:!0,attrs:{value:s.id,checked:e.getCval(s.ckey),id:"item0id:"+t.id+"-item1id:"+a.id+"-item2id:"+r.id},on:{change:e.onGroupChange}},[e._v(" "+e._s(s.name)+" ")])],1)})),1)],1):e._e()]):e._e()}))],2)})),1)],1)}))],2)])]),i("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[i("a-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleXSubmit()}}},[e._v("保存设置")])],1)],1)},r=[],s=(i("7d24"),i("dfae")),n=(i("d81d"),i("a15b"),i("ac1f"),i("841c"),i("a0e0")),c=i("c1df"),l=i.n(c),o=[],d=[],h={name:"propertyPowerVillageEdit",filters:{},components:{"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},search:{keyword:"",key_val:"name",key_val1:"paytime",page:1},form:this.$form.createForm(this),pagination:{current:1,pageSize:10,total:10},visible:!1,loading:!1,data:d,columns:o,dateFormat:"YYYY-MM-DD HH:mm:ss",vmenus:[],all_checked:!1,vmckeyArr:[],property_id:0,title:"",admin_id:0,village_id:0,village_ids:"",batchSetRolePermission:0}},activated:function(){},computed:{},methods:{moment:l.a,editAccount:function(e,t,i){console.log("record",e),this.title="小区名称【"+e.village_name+"】编辑",this.village_id=e.village_id,void 0!=i&&i.length>0&&(this.title="批量设置小区权限",this.village_id=0,this.batchSetRolePermission=1,this.village_ids=i),this.admin_id=t,this.visible=!0,this.vmckeyArr=[],this.vmenus=[],this.all_checked=!1,this.property_id=e.property_id,this.getRolePermissionMenus()},onGroupChange:function(e){var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,r=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,3,r):(this.setCval(i,!1,3,r),this.all_checked=!1)},handleIdd:function(e){for(var t=e.split("-"),i=[],a=0;a<t.length;a++){var r=t[a].split(":");i.push({item_id:r["0"],item_id_v:r["1"]})}return i},checkAll:function(e){var t=e.target.checked;e.target.defaultChecked,e.target.value;t?(this.all_checked=!0,this.vmckeyArr.map((function(e,t){e.cv=!0}))):(this.all_checked=!1,this.vmckeyArr.map((function(e,t){e.cv=!1})))},check2All:function(e){var t=e.target.checked,i=(e.target.defaultChecked,e.target.value);t?this.setCval(null,!0,0,i):(this.setCval(null,!1,0,i),this.all_checked=!1)},check3All:function(e){var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,r=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,1,r):(this.setCval(i,!1,1,r),this.all_checked=!1)},check4All:function(e){var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,r=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,2,r):(this.setCval(i,!1,2,r),this.all_checked=!1)},handleXSubmit:function(){var e=this,t={xtype:3};t.id=this.admin_id,t.menus_property="",t.village_id=this.village_id,1==this.batchSetRolePermission&&this.village_ids.length>0&&(t.village_id=this.village_ids),t.property_id=this.property_id;var i=[];this.vmckeyArr.map((function(e,t){e.cv&&i.push(e.id)})),i.length>0&&(t.menus_property=i.join(",")),this.loading=!0,this.request(n["a"].savePropertyEdit,t).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.vmenus=[],e.vmckeyArr=[],e.admin_id=0,e.title="",e.village_id=0,e.all_checked=!1,e.property_id=0,e.batchSetRolePermission=0,e.village_ids=""}),1500)})).catch((function(t){e.loading=!1}))},getRolePermissionMenus:function(){var e=this,t={admin_id:this.admin_id};t.village_id=this.village_id,t.property_id=this.property_id,this.request(n["a"].getPropertyVillageRolePermission,t).then((function(t){e.vmckeyArr=t.mckeyArr,e.vmenus=t.menus}))},getCval:function(e){var t=!1;return this.vmckeyArr.map((function(i,a){e==i.ckey&&(t=i.cv)})),t},setCval:function(e,t,i,a){var r=this;if(i>=0){var s=i,n="key_"+s+"_"+a,c="",l=-1;this.vmckeyArr.map((function(e,i){n==e.ckey&&(e,e.cv=t,void 0!=e.ckey2?(c=e.ckey2,l=2):void 0!=e.ckey1?(c=e.ckey1,l=1):void 0!=e.ckey0&&(c=e.ckey0,l=0)),n==e.ckey2&&(e.cv=t),n==e.ckey1&&(e.cv=t),n==e.ckey0&&(e.cv=t)}));var o=!0;if((!e||null===e||e.length<1)&&(o=!1),i>0&&!t&&this.vmckeyArr.map((function(e,t){(2==l&&c==e.ckey2&&e.cv||1==l&&c==e.ckey1&&e.cv||0==l&&c==e.ckey0&&e.cv)&&(o=!1)})),o&&i>0){i-=1;for(var d=function(){var i="item"+h+"id",a=0;e.map((function(e,t){e.item_id==i&&(a=e.item_id_v)}));var s="key_"+h+"_"+a;if(t)r.vmckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}));else if(0==h){var n=!1;r.vmckeyArr.map((function(e,t){s==e.ckey0&&e.cv&&(console.log("tmp_ckey0",e),n=!0)})),n||r.vmckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}))}else if(1==h){var c=!1;r.vmckeyArr.map((function(e,t){s==e.ckey1&&e.cv&&(console.log("tmp_ckey1",e),c=!0)})),c||r.vmckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}))}else if(2==h){var l=!1;r.vmckeyArr.map((function(e,t){s==e.ckey2&&e.cv&&(l=!0)})),l||r.vmckeyArr.map((function(e,i){s==e.ckey&&(e.cv=t)}))}},h=i;h>=0;h--)d()}}},handleXCancel:function(){var e=this;this.visible=!1,this.vmenus=[],this.vmckeyArr=[],this.admin_id=0,this.title="",this.village_id=0,this.all_checked=!1,this.property_id=0,this.batchSetRolePermission=0,this.village_ids="",setTimeout((function(){e.form=e.$form.createForm(e)}),500)},date_moment:function(e,t){return e?l()(e,t):""},table_change:function(e){},dateOnChange:function(e,t){this.search.date=t,this.search.begin_time=t["0"],this.search.end_time=t["1"]}}},u=h,p=(i("1756"),i("0c7c")),v=Object(p["a"])(u,a,r,!1,null,"9e48bafc",null);t["default"]=v.exports}}]);