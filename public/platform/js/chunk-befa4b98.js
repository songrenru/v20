(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-befa4b98","chunk-ab90f82e","chunk-2d0aeefa"],{"0bd6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"收费设置",visible:t.visible,"confirm-loading":t.confirmLoading,width:"800px"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"工单类别为选中状态时，新版工单启用收费流程；工单类别未选中状态时，新版工单不启用收费流程。",type:"info",banner:""}}),a("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"工单类别在启用收费流程操作时，该工单类别下的工单必须全部是已关闭状态或没有工单时，才能启用成功。",type:"info",banner:""}}),a("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"工单类别在关闭收费流程操作时，该工单类别下的工单必须全部是已关闭状态或没有工单时，才能关闭成功。",type:"info",banner:""}}),a("a-form-model",{ref:"ruleForm",attrs:{model:t.chargeForm,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"工单类目",prop:"subject_id"}},[a("a-tree",{attrs:{"tree-data":t.treeData,"default-expand-all":t.defaultExpandAll,defaultExpandedKeys:["0-0"],checkable:""},model:{value:t.chargeForm.subject_id,callback:function(e){t.$set(t.chargeForm,"subject_id",e)},expression:"chargeForm.subject_id"}})],1)],1)],1)},o=[],i=a("a0e0"),s={props:{visible:{type:Boolean,default:!1}},data:function(){return{rules:{subject_id:[{required:!1,message:"请选择工单类目",trigger:"blur"}]},labelCol:{span:4},wrapperCol:{span:14},chargeForm:{charge_type:1,subject_id:[]},treeData:[],defaultExpandAll:!0,confirmLoading:!1}},mounted:function(){this.getRepairCharge()},methods:{getRepairCharge:function(){var t=this;t.request(i["a"].getRepairCharge).then((function(e){t.treeData=e.res,t.chargeForm.subject_id=e.subject_ids,t.defaultExpandAll=!1}))},handleOk:function(){var t=this,e=this;e.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;var a=t;a.confirmLoading=!0,a.request(i["a"].setRepairCharge,a.chargeForm).then((function(t){a.$message.success("设置成功！"),a.handleCancel(),a.confirmLoading=!1})).catch((function(t){a.confirmLoading=!1}))}))},handleCancel:function(){this.$refs.ruleForm.resetFields(),this.chargeForm={charge_type:1,subject_id:[]},this.$emit("closeCharge")}}},n=s,l=a("2877"),c=Object(l["a"])(n,r,o,!1,null,"27147556",null);e["default"]=c.exports},2739:function(t,e,a){},6999:function(t,e,a){"use strict";a("2739")},a4a7:function(t,e,a){},b27d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:700,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticStyle:{"padding-left":"35px"},attrs:{form:t.form}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("类目名称:")])]),a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输入类目名称(6字以内)",disabled:t.disabled},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}})],1)],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("背景色:")])]),a("a-col",{attrs:{span:11}},[a("a-input",{attrs:{placeholder:"请输入背景色",disabled:!0},model:{value:t.group.color,callback:function(e){t.$set(t.group,"color",e)},expression:"group.color"}})],1),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:2}},[a("colorPicker",{on:{change:t.headleChangeColor},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1),t.is_grab_order?a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("关联部门:")])]),a("a-col",{attrs:{span:14}},[a("a-tree",{attrs:{"tree-data":t.treeData,"default-expand-all":t.defaultExpandAll,defaultExpandedKeys:[t.treeData[0].key],checkable:""},model:{value:t.group.group_id_all,callback:function(e){t.$set(t.group,"group_id_all",e)},expression:"group.group_id_all"}})],1)],1):t._e(),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("状态:")])]),a("a-col",{attrs:{span:14}},[a("a-radio-group",{model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1)],1)},o=[],i=(a("b0c0"),a("a0e0")),s=a("a9f5"),n=a.n(s),l=a("8bbf"),c=a.n(l);c.a.use(n.a);var u={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},disabled:!1,value:null,color:"#d5b6b6",defaultColor:"#d5b6b6",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",color:"#d5b6b6",status:1,group_id_all:[]},id:0,treeData:[],defaultExpandAll:!0,is_grab_order:!1,selectKey:[]}},methods:{add:function(){this.title="添加",this.visible=!0,this.disabled=!1,this.group={id:0,name:"",color:"#d5b6b6",status:1,type:1,group_id_all:[]},this.selectKey=[],this.getTissue(this.group.id)},edit:function(t){this.visible=!0,this.id=t,this.group.group_id_all=[],this.selectKey=[],this.getTissue(t),this.id>0?this.title="编辑":this.title="添加"},getRepairCateInfo:function(){var t=this;this.request(i["a"].newRepairCateEdit,{id:this.id,type:1}).then((function(e){t.group.id=e.id,t.group.status=e.status,t.group.name=e.cate_name,t.group.color=e.color,t.group.group_id_all=e.group_id_all,t.color=e.color,1==e.flag?t.disabled=!0:t.disabled=!1}))},headleChangeColor:function(t){console.log("color",t),this.group.color=t},handleSubmit:function(){var t=this;if(this.confirmLoading=!0,this.group.id=this.id,this.group.name.length>6)return this.$message.error("请保持类目名称6个字以内！"),this.confirmLoading=!1,!1;var e=i["a"].newRepairCateAdd;this.group.id>0&&(e=i["a"].newRepairCateEdit),this.request(e,this.group).then((function(e){t.group.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getTissue:function(t){var e=this;this.request(i["a"].newRepairTissueNav).then((function(a){e.is_grab_order=a.status,e.treeData=a.list.data,a.list.key&&(0==t&&(e.group.group_id_all=a.list.key),e.selectKey=a.list.key),e.defaultExpandAll=!1,t>0&&e.getRepairCateInfo()})).catch((function(t){}))}}},d=u,p=(a("cd85"),a("d98b"),a("2877")),g=Object(p["a"])(d,r,o,!1,null,"a15fbd74",null);e["default"]=g.exports},cd85:function(t,e,a){"use strict";a("a4a7")},d98b:function(t,e,a){"use strict";a("e3a1")},e3a1:function(t,e,a){},fb06:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-operator"},[r("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"工单类目，即物业日常管理事务中涉及到业主提交工单的场景，例如报修、投诉建议等，物业可根据实际需要创建工单类目用以工单流转管理",type:"info",banner:""}}),r("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"请注意：为了同步类目菜单数据,工单类目添加和编辑会强刷页面!",type:"info",banner:""}}),r("div",{staticStyle:{display:"flex"}},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.createModalsss.add()}}},[e._v("添加")]),r("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.chargeSet}},[e._v("收费设置")])],1)],1),r("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.pagination,rowKey:"id",expandIcon:function(e){return t.customExpandIcon(e)}},on:{change:e.tableChange},scopedSlots:e._u([{key:"color",fn:function(t,a){return r("a-tag",{attrs:{color:t}},[e._v(" "+e._s(t)+" ")])}},{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.$refs.createModalsss.edit(a.id)}}},[e._v("编辑")]),1==a.status1?r("a-divider",{attrs:{type:"vertical"}}):e._e(),1==a.status1?r("router-link",{staticStyle:{color:"#1890ff"},attrs:{to:{name:"house_repaircategorylist_"+a.id}}},[e._v("管理")]):e._e()],1)}},{key:"status",fn:function(t,a){return r("span",{},[r("div",{class:"开启"===t?"txt-green":"txt-red"},[e._v(" "+e._s(t)+" ")])])}},{key:"name",fn:function(t){return[e._v(" "+e._s(t.first)+" "+e._s(t.last))]}}])})],1),r("group-info",{ref:"createModalsss",attrs:{height:800,width:1200},on:{ok:e.handleOks}}),e.showCharge?r("charge-model",{attrs:{visible:e.showCharge},on:{closeCharge:e.closeCharge}}):e._e()],1)},o=[],i=a("a0e0"),s=a("b27d"),n=a("0bd6"),l=[{title:"类目名称",dataIndex:"cate_name",key:"cate_name",width:"950px"},{title:"背景色（仅移动端展示用)",dataIndex:"color",key:"color",scopedSlots:{customRender:"color"}},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],c={name:"newRepairCateList",components:{groupInfo:s["default"],chargeModel:n["default"]},data:function(){return{list:[],sortedInfo:null,pagination:{current:1,pageSize:10,total:10},search:{page:1},page:1,search_data:[],id:0,columns:l,showCharge:!1}},mounted:function(){this.getSubjectList()},created:function(){},methods:{chargeSet:function(){this.showCharge=!0,console.log("this.showCharge===>",this.showCharge)},getSubjectList:function(){var t=this;this.page=this.pagination.current,this.request(i["a"].getCateList,{page:this.page,parent_id:0}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.getSubjectList())},cancel:function(){},handleOks:function(){window.location.reload()},closeCharge:function(){this.showCharge=!1}}},u=c,d=(a("6999"),a("2877")),p=Object(d["a"])(u,r,o,!1,null,"049fbe89",null);e["default"]=p.exports}}]);