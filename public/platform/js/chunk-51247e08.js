(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51247e08"],{"07b4":function(e,t,a){"use strict";a("a884")},"8d6e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"编辑",width:1400,visible:e.visible,maskClosable:!1,placement:"right"},on:{close:e.handleCancel}},[0==e.currentIndex?a("div",{staticStyle:{"margin-bottom":"20px"}},[a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("基本设置")]),a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("权限设置")])],1):a("div",{staticStyle:{"margin-bottom":"20px"}},[a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("基本设置")]),a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("权限设置")])],1),0==e.currentIndex?a("a-card",[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"分组名称",labelCol:e.labelCol,required:!0}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:20,placeholder:"请输入姓名",autocomplete:"off",name:"group_name"},on:{blur:e.validateInput},model:{value:e.post.name,callback:function(t){e.$set(e.post,"name",t)},expression:"post.name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"选择标签",labelCol:e.labelCol}},[a("a-col",{attrs:{span:18}},[a("a-select",{staticStyle:{width:"300px"},attrs:{mode:"multiple","option-label-prop":"label",placeholder:"请选择标签"},on:{change:e.catIdChange},model:{value:e.post.label_all,callback:function(t){e.$set(e.post,"label_all",t)},expression:"post.label_all"}},e._l(e.label_list,(function(t){return a("a-select-option",{key:t.id,attrs:{label:t.title}},[e._v(" "+e._s(t.title)+" ")])})),1)],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注信息",labelCol:e.labelCol}},[a("a-col",{attrs:{span:20}},[a("a-textarea",{ref:"textareax",staticStyle:{width:"300px"},attrs:{autocomplete:"off",rows:8,placeholder:"请输入备注信息",name:"remarks"},model:{value:e.post.remarks,callback:function(t){e.$set(e.post,"remarks",t)},expression:"post.remarks"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1):e._e(),1==e.currentIndex?a("a-card",[a("div",{staticClass:"all_menus",attrs:{id:"components_layout_menus"}},[a("div",[a("a-layout",{staticStyle:{"line-height":"40px","font-size":"25px"}},[a("a-layout-content",[a("a-checkbox",{staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:"0",checked:e.all_checked},on:{change:e.checkAll}},[e._v(" 全选 ")])],1)],1),e._l(e.menus,(function(t,i){return a("a-layout",{staticStyle:{"line-height":"40px"}},[a("a-layout-sider",[a("a-checkbox",{ref:t.ckey,refInFor:!0,staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:t.id,checked:e.getCval(t.ckey)},on:{change:e.check2All}},[e._v(" "+e._s(t.name)+" ")])],1),a("a-layout",e._l(t.child,(function(i,n){return a("a-layout-content",[a("div",{staticClass:"sub1div"},[a("a-checkbox",{ref:i.ckey,refInFor:!0,attrs:{checked:e.getCval(i.ckey),value:i.id,id:"item0id_"+t.id},on:{change:e.check3All}},[e._v(" "+e._s(i.name)+" ")])],1),e._l(i.child,(function(n,r){return i.child&&i.child.length>0?a("div",{staticClass:"sub2div"},[a("div",{staticClass:"sub2div_1div"},[a("a-checkbox",{ref:n.ckey,refInFor:!0,attrs:{value:n.id,checked:e.getCval(n.ckey),id:"item0id_"+t.id+"-item1id_"+i.id},on:{change:e.check4All}},[e._v(" "+e._s(n.name)+" ")])],1),n.child&&n.child.length>0?a("div",{staticClass:"sub2div_2div",staticStyle:{width:"100%"}},[a("a-row",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},e._l(n.child,(function(r,c){return a("a-col",{staticStyle:{width:"33.3%","flex-shrink":"0","margin-bottom":"5px"}},[a("a-checkbox",{ref:r.ckey,refInFor:!0,attrs:{value:r.id,checked:e.getCval(r.ckey),id:"item0id_"+t.id+"-item1id_"+i.id+"-item2id_"+n.id},on:{change:e.onGroupChange}},[e._v(" "+e._s(r.name)+" ")])],1)})),1)],1):e._e()]):e._e()}))],2)})),1)],1)}))],2)])]):e._e(),a("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[a("a-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit()}}},[e._v("保存设置")])],1)],1)},n=[],r=(a("7d24"),a("dfae")),c=(a("b0c0"),a("ac1f"),a("1276"),a("d81d"),a("a15b"),a("498a"),a("841c"),a("a0e0")),l=a("c1df"),s=a.n(l),o=[],u=[],d={name:"houseAdminGroupEdit",filters:{},components:{"a-collapse":r["a"],"a-collapse-panel":r["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},search:{keyword:"",key_val:"name",key_val1:"paytime",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:u,columns:o,currentIndex:0,dateFormat:"YYYY-MM-DD HH:mm:ss",is_edit_worker:!0,menus:[],post:{name:"",remarks:"",label_all:void 0},all_checked:!1,mckeyArr:[],group_id:0,label_list:[]}},activated:function(){},methods:{moment:s.a,editGroup:function(e){console.log("record",e),this.visible=!0,this.post.name=e.name?e.name:"",this.post.remarks=e.remarks?e.remarks:"",this.group_id=e.group_id?1*e.group_id:0,this.mckeyArr=[],this.menus=[],this.all_checked=!1,this.currentIndex=0,this.is_edit_worker=!0,this.post.label_all=e.label_all?e.label_all:void 0,this.getPowerLabelAll()},onGroupChange:function(e){var t=e.target.id,a=this.handleIdd(t),i=e.target.checked,n=(e.target.defaultChecked,e.target.value);i?this.setCval(a,!0,3,n):(this.setCval(a,!1,3,n),this.all_checked=!1)},handleIdd:function(e){for(var t=e.split("-"),a=[],i=0;i<t.length;i++){var n=t[i].split("_");a.push({item_id:n["0"],item_id_v:n["1"]})}return a},checkAll:function(e){var t=e.target.checked;e.target.defaultChecked,e.target.value;t?(this.all_checked=!0,this.mckeyArr.map((function(e,t){e.cv=!0}))):(this.all_checked=!1,this.mckeyArr.map((function(e,t){e.cv=!1})))},check2All:function(e){var t=e.target.checked,a=(e.target.defaultChecked,e.target.value);t?this.setCval(null,!0,0,a):(this.setCval(null,!1,0,a),this.all_checked=!1)},check3All:function(e){var t=e.target.id,a=this.handleIdd(t),i=e.target.checked,n=(e.target.defaultChecked,e.target.value);i?this.setCval(a,!0,1,n):(this.setCval(a,!1,1,n),this.all_checked=!1)},check4All:function(e){var t=e.target.id,a=this.handleIdd(t),i=e.target.checked,n=(e.target.defaultChecked,e.target.value);i?this.setCval(a,!0,2,n):(this.setCval(a,!1,2,n),this.all_checked=!1)},handleSubmit:function(){var e=this;if(1==this.currentIndex){if(this.group_id<1)return this.$message.error("请先去基本设置中保存设置一个分组信息!"),!1;var t={xtype:1};t.group_id=this.group_id,t.menus="";var a=[];this.mckeyArr.map((function(e,t){e.cv&&a.push(e.id)})),a.length>0&&(t.menus=a.join(",")),this.loading=!0,this.request(c["a"].saveHouseGroupEdit,t).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.is_edit_worker=!1,e.group_id=0,e.currentIndex=0,e.menus=[],e.mckeyArr=[],e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))}else{if(!this.post.name||this.post.name.length<1)return this.$message.error("请输入分组名称!"),!1;this.post.group_id=this.group_id,this.post.xtype=0,this.loading=!0,this.request(c["a"].saveHouseGroupEdit,this.post).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.is_edit_worker=!1,e.group_id=t.group_id,e.currentIndex=0,e.menus=[],e.mckeyArr=[],e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))}},validateInput:function(e){var t=e.target.value,a=e.target.name;if(console.log("name",a),console.log("value",t),t=t.trim(),!this.is_edit_worker)return!1;if(0!=this.currentIndex)return!1;if("group_name"==a){if(!t||t.length<1)return e.target.focus(),!1;if(t.length>20)return this.$message.error("您输入的分组名称长度太长了，请小于20个字！"),e.target.focus(),!1;this.post.name=t}},getRolePermissionMenus:function(){var e=this,t={group_id:this.group_id};this.request(c["a"].getGroupPermissionMenus,t).then((function(t){e.mckeyArr=t.mckeyArr,e.menus=t.menus}))},getCval:function(e){var t=!1;return this.mckeyArr.map((function(a,i){e==a.ckey&&(t=a.cv)})),console.log("ckey",e+"=>"+t),t},setCval:function(e,t,a,i){var n=this;if(a>=0){var r=a,c="key_"+r+"_"+i,l="",s=-1;this.mckeyArr.map((function(e,a){c==e.ckey&&(e,e.cv=t,void 0!=e.ckey2?(l=e.ckey2,s=2):void 0!=e.ckey1?(l=e.ckey1,s=1):void 0!=e.ckey0&&(l=e.ckey0,s=0)),c==e.ckey2&&(e.cv=t),c==e.ckey1&&(e.cv=t),c==e.ckey0&&(e.cv=t)}));var o=!0;if((!e||null===e||e.length<1)&&(o=!1),a>0&&!t&&this.mckeyArr.map((function(e,t){(2==s&&l==e.ckey2&&e.cv||1==s&&l==e.ckey1&&e.cv||0==s&&l==e.ckey0&&e.cv)&&(o=!1)})),o&&a>0){a-=1;for(var u=function(a){var i="item"+a+"id",r=0;e.map((function(e,t){e.item_id==i&&(r=e.item_id_v)}));var c="key_"+a+"_"+r;if(t)n.mckeyArr.map((function(e,a){c==e.ckey&&(e.cv=t)}));else if(0==a){var l=!1;n.mckeyArr.map((function(e,t){c==e.ckey0&&e.cv&&(console.log("tmp_ckey0",e),l=!0)})),l||n.mckeyArr.map((function(e,a){c==e.ckey&&(e.cv=t)}))}else if(1==a){var s=!1;n.mckeyArr.map((function(e,t){c==e.ckey1&&e.cv&&(console.log("tmp_ckey1",e),s=!0)})),s||n.mckeyArr.map((function(e,a){c==e.ckey&&(e.cv=t)}))}else if(2==a){var o=!1;n.mckeyArr.map((function(e,t){c==e.ckey2&&e.cv&&(o=!0)})),o||n.mckeyArr.map((function(e,a){c==e.ckey&&(e.cv=t)}))}},d=a;d>=0;d--)u(d)}}},changeXTab:function(e){this.currentIndex=e,0==this.currentIndex||this.menus.length<1&&this.getRolePermissionMenus()},handleCancel:function(){var e=this;this.is_edit_worker=!1,this.visible=!1,this.group_id=0,this.menus=[],this.mckeyArr=[],this.post.name="",this.post.remarks="",this.currentIndex=0,setTimeout((function(){e.form=e.$form.createForm(e)}),500)},date_moment:function(e,t){return e?s()(e,t):""},table_change:function(e){e.current&&e.current>0&&(this.pagination.current=e.current,this.page=e.current)},dateOnChange:function(e,t){this.search.date=t,this.search.begin_time=t["0"],this.search.end_time=t["1"]},getPowerLabelAll:function(){var e=this;this.request(c["a"].powerLabelAll).then((function(t){e.label_list=t})).catch((function(e){})),this.request(c["a"].powerLabel,{group_id:this.group_id}).then((function(t){e.post.label_all=t})).catch((function(e){}))},catIdChange:function(e){this.post.label_all=e}}},h=d,m=(a("07b4"),a("2877")),p=Object(m["a"])(h,i,n,!1,null,"6d8001cc",null);t["default"]=p.exports},a884:function(e,t,a){}}]);