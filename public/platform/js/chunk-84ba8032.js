(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84ba8032"],{"0af3":function(a,t,e){"use strict";e("9587")},9587:function(a,t,e){},"9a51":function(a,t,e){},b27d:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-modal",{attrs:{title:a.title,width:700,visible:a.visible,maskClosable:!1,confirmLoading:a.confirmLoading},on:{ok:a.handleSubmit,cancel:a.handleCancel}},[e("a-spin",{attrs:{spinning:a.confirmLoading,height:800}},[e("a-form",{staticStyle:{"padding-left":"35px"},attrs:{form:a.form}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[e("a-col",{attrs:{span:10}},[e("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[a._v("类目名称:")])]),e("a-col",{attrs:{span:14}},[e("a-input",{attrs:{placeholder:"请输入类目名称(6字以内)",disabled:a.disabled},model:{value:a.group.name,callback:function(t){a.$set(a.group,"name",t)},expression:"group.name"}})],1)],1),e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[e("a-col",{attrs:{span:10}},[e("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[a._v("背景色:")])]),e("a-col",{attrs:{span:11}},[e("a-input",{attrs:{placeholder:"请输入背景色",disabled:!0},model:{value:a.group.color,callback:function(t){a.$set(a.group,"color",t)},expression:"group.color"}})],1),e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:2}},[e("colorPicker",{on:{change:a.headleChangeColor},model:{value:a.color,callback:function(t){a.color=t},expression:"color"}})],1)],1),a.is_grab_order?e("a-form-item",{attrs:{label:"",labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[e("a-col",{attrs:{span:10}},[e("span",{staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[a._v("关联部门:")])]),e("a-col",{attrs:{span:14}},[e("a-tree",{attrs:{"tree-data":a.treeData,"default-expand-all":a.defaultExpandAll,defaultExpandedKeys:[a.treeData[0].key],checkable:""},model:{value:a.group.group_id_all,callback:function(t){a.$set(a.group,"group_id_all",t)},expression:"group.group_id_all"}})],1)],1):a._e(),e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[e("a-col",{attrs:{span:10}},[e("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[a._v("状态:")])]),e("a-col",{attrs:{span:14}},[e("a-radio-group",{model:{value:a.group.status,callback:function(t){a.$set(a.group,"status",t)},expression:"group.status"}},[e("a-radio",{attrs:{value:1}},[a._v(" 开启 ")]),e("a-radio",{attrs:{value:2}},[a._v(" 关闭 ")])],1)],1)],1)],1)],1)],1)},o=[],r=(e("b0c0"),e("a0e0")),l=e("a9f5"),s=e.n(l),n=e("8bbf"),c=e.n(n);c.a.use(s.a);var u={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},disabled:!1,value:null,color:"#d5b6b6",defaultColor:"#d5b6b6",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",color:"#d5b6b6",status:1,group_id_all:[]},id:0,treeData:[],defaultExpandAll:!0,is_grab_order:!1,selectKey:[]}},methods:{add:function(){this.title="添加",this.visible=!0,this.disabled=!1,this.group={id:0,name:"",color:"#d5b6b6",status:1,type:1,group_id_all:[]},this.selectKey=[],this.getTissue(this.group.id)},edit:function(a){this.visible=!0,this.id=a,this.group.group_id_all=[],this.selectKey=[],this.getTissue(a),this.id>0?this.title="编辑":this.title="添加"},getRepairCateInfo:function(){var a=this;this.request(r["a"].newRepairCateEdit,{id:this.id,type:1}).then((function(t){a.group.id=t.id,a.group.status=t.status,a.group.name=t.cate_name,a.group.color=t.color,a.group.group_id_all=t.group_id_all,a.color=t.color,1==t.flag?a.disabled=!0:a.disabled=!1}))},headleChangeColor:function(a){console.log("color",a),this.group.color=a},handleSubmit:function(){var a=this;if(this.confirmLoading=!0,this.group.id=this.id,this.group.name.length>6)return this.$message.error("请保持类目名称6个字以内！"),this.confirmLoading=!1,!1;var t=r["a"].newRepairCateAdd;this.group.id>0&&(t=r["a"].newRepairCateEdit),this.request(t,this.group).then((function(t){a.group.id>0?a.$message.success("编辑成功"):a.$message.success("添加成功"),setTimeout((function(){a.form=a.$form.createForm(a),a.visible=!1,a.confirmLoading=!1,a.$emit("ok")}),1500)})).catch((function(t){a.confirmLoading=!1}))},handleCancel:function(){var a=this;this.visible=!1,setTimeout((function(){a.id="0",a.form=a.$form.createForm(a)}),500)},getTissue:function(a){var t=this;this.request(r["a"].newRepairTissueNav).then((function(e){t.is_grab_order=e.status,t.treeData=e.list.data,e.list.key&&(0==a&&(t.group.group_id_all=e.list.key),t.selectKey=e.list.key),t.defaultExpandAll=!1,a>0&&t.getRepairCateInfo()})).catch((function(a){}))}}},p=u,d=(e("0af3"),e("ff12"),e("0c7c")),f=Object(d["a"])(p,i,o,!1,null,"a15fbd74",null);t["default"]=f.exports},ff12:function(a,t,e){"use strict";e("9a51")}}]);