(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f011c3","chunk-2d0ab670"],{"0935":function(e,t,a){"use strict";a("7807")},"14b9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"操作",width:600,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"父级ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["parentId",{}],expression:"['parentId', {}]"}],attrs:{disabled:""}})],1),t("a-form-item",{attrs:{label:"机构名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgName",{}],expression:"['orgName', {}]"}]})],1)],1)],1)],1)},o=[],i=a("5530"),s=(a("d3b7"),{name:"OrgModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,mdl:{}}},beforeCreate:function(){this.form=this.$form.createForm(this),console.log("form::",this.form)},created:function(){},methods:{add:function(e){this.edit({parentId:e})},edit:function(e){var t=this;this.mdl=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(Object(i["a"])({},e))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(t,a){t||(console.log("form values",a),e.confirmLoading=!0,new Promise((function(e){setTimeout((function(){return e()}),2e3)})).then((function(){e.$message.success("保存成功"),e.$emit("ok")})).catch((function(){})).finally((function(){e.confirmLoading=!1,e.close()})))}))},handleCancel:function(){this.close()}}}),l=s,r=a("2877"),c=Object(r["a"])(l,n,o,!1,null,null,null);t["default"]=c.exports},"3c82":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:5}},[t("s-tree",{attrs:{dataSource:e.orgTree,openKeys:e.openKeys,search:!0},on:{"update:openKeys":function(t){e.openKeys=t},"update:open-keys":function(t){e.openKeys=t},click:e.handleClick,add:e.handleAdd,titleClick:e.handleTitleClick}})],1),t("a-col",{attrs:{span:19}},[t("s-table",{ref:"table",attrs:{size:"default",columns:e.columns,data:e.loadData,alert:!1,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},scopedSlots:e._u([{key:"action",fn:function(a,n){return t("span",{},[e.$auth("table.update")?[t("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}})]:e._e(),t("a-dropdown",[t("a",{staticClass:"ant-dropdown-link"},[e._v(" 更多 "),t("a-icon",{attrs:{type:"down"}})],1),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[e._v("详情")])]),e.$auth("table.disable")?t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[e._v("禁用")])]):e._e(),e.$auth("table.delete")?t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[e._v("删除")])]):e._e()],1)],1)],2)}}])})],1)],1),t("org-modal",{ref:"modal",on:{ok:e.handleSaveOk,close:e.handleSaveClose}})],1)},o=[],i=(a("99af"),a("1bff")),s=a("2af9"),l=a("14b9"),r={name:"TreeList",components:{STable:s["o"],STree:i["a"],OrgModal:l["default"]},data:function(){return{openKeys:["key-01"],queryParam:{},columns:[{title:"#",dataIndex:"no"},{title:"成员名称",dataIndex:"description"},{title:"登录次数",dataIndex:"callNo",sorter:!0,needTotal:!0,customRender:function(e){return e+" 次"}},{title:"状态",dataIndex:"status",needTotal:!0},{title:"更新时间",dataIndex:"updatedAt",sorter:!0},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],loadData:function(e){},orgTree:[],selectedRowKeys:[],selectedRows:[]}},created:function(){},methods:{handleClick:function(e){console.log("handleClick",e),this.queryParam={key:e.key},this.$refs.table.refresh(!0)},handleAdd:function(e){console.log("add button, item",e),this.$message.info("提示：你点了 ".concat(e.key," - ").concat(e.title," ")),this.$refs.modal.add(e.key)},handleTitleClick:function(e){console.log("handleTitleClick",e)},titleClick:function(e){console.log("titleClick",e)},handleSaveOk:function(){},handleSaveClose:function(){},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t}}},c=r,d=(a("0935"),a("2877")),u=Object(d["a"])(c,n,o,!1,null,null,null);t["default"]=u.exports},7807:function(e,t,a){}}]);