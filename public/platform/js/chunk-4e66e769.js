(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e66e769"],{"1756c":function(e,t,i){"use strict";i("9db2")},"9db2":function(e,t,i){},f331:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{title:e.title,width:1400,visible:e.visible,maskClosable:!1,placement:"right"},on:{close:e.handleXCancel}},[i("a-card",[i("div",{staticClass:"all_menus",attrs:{id:"components_layout_menus"}},[i("div",[i("a-layout",{staticStyle:{"line-height":"40px","font-size":"25px"}},[i("a-layout-content",[i("a-checkbox",{staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:"0",checked:e.all_checked},on:{change:e.checkAll}},[e._v(" 全选 ")])],1)],1),e._l(e.vmenus,(function(t,a){return i("a-layout",{staticStyle:{"line-height":"40px"}},[i("a-layout-sider",[i("a-checkbox",{ref:t.ckey,refInFor:!0,staticStyle:{"font-size":"18px","pfont-weight":"bold","padding-left":"2px"},attrs:{value:t.id,checked:e.getCval(t.ckey)},on:{change:e.check2All}},[e._v(" "+e._s(t.name)+" ")])],1),i("a-layout",e._l(t.child,(function(a,c){return i("a-layout-content",[i("div",{staticClass:"sub1div"},[i("a-checkbox",{ref:a.ckey,refInFor:!0,attrs:{checked:e.getCval(a.ckey),value:a.id,id:"item0id:"+t.id},on:{change:e.check3All}},[e._v(" "+e._s(a.name)+" ")])],1),e._l(a.child,(function(c,l){return a.child&&a.child.length>0?i("div",{staticClass:"sub2div"},[i("div",{staticClass:"sub2div_1div"},[i("a-checkbox",{ref:c.ckey,refInFor:!0,attrs:{value:c.id,checked:e.getCval(c.ckey),id:"item0id:"+t.id+"-item1id:"+a.id},on:{change:e.check4All}},[e._v(" "+e._s(c.name)+" ")])],1),c.child&&c.child.length>0?i("div",{staticClass:"sub2div_2div",staticStyle:{width:"100%"}},[i("a-row",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},e._l(c.child,(function(l,n){return i("a-col",{staticStyle:{width:"33.3%","flex-shrink":"0","margin-bottom":"5px"}},[i("a-checkbox",{ref:l.ckey,refInFor:!0,attrs:{value:l.id,checked:e.getCval(l.ckey),id:"item0id:"+t.id+"-item1id:"+a.id+"-item2id:"+c.id},on:{change:e.onGroupChange}},[e._v(" "+e._s(l.name)+" ")])],1)})),1)],1):e._e()]):e._e()}))],2)})),1)],1)}))],2)])]),i("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[i("a-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleXSubmit()}}},[e._v("保存设置")])],1)],1)},c=[],l=(i("7d24"),i("dfae")),n=(i("ac1f"),i("1276"),i("d81d"),i("a15b"),i("841c"),i("a0e0")),s=i("c1df"),r=i.n(s),d=[],o=[],h={name:"propertyPowerVillageEdit",filters:{},components:{"a-collapse":l["a"],"a-collapse-panel":l["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},search:{keyword:"",key_val:"name",key_val1:"paytime",page:1},form:this.$form.createForm(this),pagination:{current:1,pageSize:10,total:10},visible:!1,loading:!1,data:o,columns:d,dateFormat:"YYYY-MM-DD HH:mm:ss",vmenus:[],all_checked:!1,vmckeyArr:[],property_id:0,title:"",admin_id:0,village_id:0,village_ids:"",batchSetRolePermission:0}},activated:function(){},computed:{},methods:{moment:r.a,editAccount:function(e,t,i){console.log("record",e),this.title="小区名称【"+e.village_name+"】编辑",this.village_id=e.village_id,void 0!=i&&i.length>0&&(this.title="批量设置小区权限",this.village_id=0,this.batchSetRolePermission=1,this.village_ids=i),this.admin_id=t,this.visible=!0,this.vmckeyArr=[],this.vmenus=[],this.all_checked=!1,this.property_id=e.property_id,this.getRolePermissionMenus()},onGroupChange:function(e){var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,c=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,3,c):(this.setCval(i,!1,3,c),this.all_checked=!1)},handleIdd:function(e){for(var t=e.split("-"),i=[],a=0;a<t.length;a++){var c=t[a].split(":");i.push({item_id:c["0"],item_id_v:c["1"]})}return i},checkAll:function(e){var t=e.target.checked;e.target.defaultChecked,e.target.value;t?(this.all_checked=!0,this.vmckeyArr.map((function(e,t){e.cv=!0}))):(this.all_checked=!1,this.vmckeyArr.map((function(e,t){e.cv=!1})))},check2All:function(e){var t=e.target.checked,i=(e.target.defaultChecked,e.target.value);t?this.setCval(null,!0,0,i):(this.setCval(null,!1,0,i),this.all_checked=!1)},check3All:function(e){var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,c=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,1,c):(this.setCval(i,!1,1,c),this.all_checked=!1)},check4All:function(e){var t=e.target.id,i=this.handleIdd(t),a=e.target.checked,c=(e.target.defaultChecked,e.target.value);a?this.setCval(i,!0,2,c):(this.setCval(i,!1,2,c),this.all_checked=!1)},handleXSubmit:function(){var e=this,t={xtype:3};t.id=this.admin_id,t.menus_property="",t.village_id=this.village_id,1==this.batchSetRolePermission&&this.village_ids.length>0&&(t.village_id=this.village_ids),t.property_id=this.property_id;var i=[];this.vmckeyArr.map((function(e,t){e.cv&&i.push(e.id)})),i.length>0&&(t.menus_property=i.join(",")),this.loading=!0,this.request(n["a"].savePropertyEdit,t).then((function(t){e.loading=!1,e.$message.success("保存成功!"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.vmenus=[],e.vmckeyArr=[],e.admin_id=0,e.title="",e.village_id=0,e.all_checked=!1,e.property_id=0,e.batchSetRolePermission=0,e.village_ids=""}),1500)})).catch((function(t){e.loading=!1}))},getRolePermissionMenus:function(){var e=this,t={admin_id:this.admin_id};t.village_id=this.village_id,t.property_id=this.property_id,this.request(n["a"].getPropertyVillageRolePermission,t).then((function(t){e.vmckeyArr=t.mckeyArr,e.vmenus=t.menus}))},getCval:function(e){var t=!1;return this.vmckeyArr.map((function(i,a){e==i.ckey&&(t=i.cv)})),t},setCval:function(e,t,i,a){var c=this;if(i>=0){var l=i,n="key_"+l+"_"+a,s="",r=-1;this.vmckeyArr.map((function(e,i){n==e.ckey&&(e,e.cv=t,void 0!=e.ckey2?(s=e.ckey2,r=2):void 0!=e.ckey1?(s=e.ckey1,r=1):void 0!=e.ckey0&&(s=e.ckey0,r=0)),n==e.ckey2&&(e.cv=t),n==e.ckey1&&(e.cv=t),n==e.ckey0&&(e.cv=t)}));var d=!0;if((!e||null===e||e.length<1)&&(d=!1),i>0&&!t&&this.vmckeyArr.map((function(e,t){(2==r&&s==e.ckey2&&e.cv||1==r&&s==e.ckey1&&e.cv||0==r&&s==e.ckey0&&e.cv)&&(d=!1)})),d&&i>0){i-=1;for(var o=function(i){var a="item"+i+"id",l=0;e.map((function(e,t){e.item_id==a&&(l=e.item_id_v)}));var n="key_"+i+"_"+l;if(t)c.vmckeyArr.map((function(e,i){n==e.ckey&&(e.cv=t)}));else if(0==i){var s=!1;c.vmckeyArr.map((function(e,t){n==e.ckey0&&e.cv&&(console.log("tmp_ckey0",e),s=!0)})),s||c.vmckeyArr.map((function(e,i){n==e.ckey&&(e.cv=t)}))}else if(1==i){var r=!1;c.vmckeyArr.map((function(e,t){n==e.ckey1&&e.cv&&(console.log("tmp_ckey1",e),r=!0)})),r||c.vmckeyArr.map((function(e,i){n==e.ckey&&(e.cv=t)}))}else if(2==i){var d=!1;c.vmckeyArr.map((function(e,t){n==e.ckey2&&e.cv&&(d=!0)})),d||c.vmckeyArr.map((function(e,i){n==e.ckey&&(e.cv=t)}))}},h=i;h>=0;h--)o(h)}}},handleXCancel:function(){var e=this;this.visible=!1,this.vmenus=[],this.vmckeyArr=[],this.admin_id=0,this.title="",this.village_id=0,this.all_checked=!1,this.property_id=0,this.batchSetRolePermission=0,this.village_ids="",setTimeout((function(){e.form=e.$form.createForm(e)}),500)},date_moment:function(e,t){return e?r()(e,t):""},table_change:function(e){},dateOnChange:function(e,t){this.search.date=t,this.search.begin_time=t["0"],this.search.end_time=t["1"]}}},v=h,u=(i("1756c"),i("2877")),m=Object(u["a"])(v,a,c,!1,null,"9e48bafc",null);t["default"]=m.exports}}]);