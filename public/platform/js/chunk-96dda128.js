(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96dda128","chunk-8f493a0c"],{"817b":function(t,e,a){},"8e58":function(t,e,a){"use strict";a("817b")},aa8e8:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{width:"1000px",title:"自定义字段",visible:t.bindVisible},on:{close:t.handleCandel}},[a("div",{staticClass:"package-list"},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{"margin-bottom":"10px"}},[a("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"添加字段后，业主提交工单时可根据以下字段选择自己的问题，方便物业快速定位问题，避免多次确认",type:"info"}}),a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add(t.cate_id)}}},[t._v("添加字段")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,rowKey:"id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(t.cate_id,i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"status",fn:function(e,i){return a("span",{},[a("div",{class:"开启"===e?"txt-green":"txt-red"},[t._v(" "+t._s(e)+" ")])])}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last))]}}])})],1),a("custom-info",{ref:"createModal",attrs:{height:800,width:1500},on:{ok:t.handleOks}})],1)])},s=[],n=a("ade3"),o=a("a0e0"),r=a("b38b"),c=[{title:"标签名称",dataIndex:"name",key:"name",width:"680px"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"排序值",dataIndex:"sort",key:"sort"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"repairCateCustomList",components:{customInfo:r["default"]},data:function(){return{list:[],pagination:{current:1,pageSize:10,total:10},page:1,id:0,columns:c,bindVisible:!1,confirmLoading:!1,cate_id:0}},methods:Object(n["a"])({handleOks:function(){this.getCateList()},customList:function(t){this.pagination.current=1,this.cate_id=t,this.bindVisible=!0,this.getCateList()},deleteConfirm:function(t){var e=this;this.request(o["a"].delCateCustom,{id:t.id,cate_id:t.cate_id}).then((function(t){e.getCateList(),e.$message.success("删除成功")}))},handleCandel:function(){this.bindVisible=!1},cancel:function(){},getCateList:function(){var t=this;this.page=this.pagination.current,this.request(o["a"].getCateCustomList,{page:this.page,cate_id:this.cate_id}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.getCateList())}},"handleOks",(function(){this.getCateList()}))},u=l,d=(a("c4d5"),a("0c7c")),p=Object(d["a"])(u,i,s,!1,null,"7714f1f4",null);e["default"]=p.exports},b38b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:600,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticStyle:{"padding-left":"35px"},attrs:{form:t.form}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("字段名称:")])]),a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输入字段名称"},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}})],1)],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("排序值:")])]),a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"不填则默认为0"},model:{value:t.group.sort,callback:function(e){t.$set(t.group,"sort",e)},expression:"group.sort"}})],1)],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("状态:")])]),a("a-col",{attrs:{span:14}},[a("a-radio-group",{model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1)],1)},s=[],n=(a("b0c0"),a("4e82"),a("a0e0")),o={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",cate_id:0,sort:"",status:1},id:0}},methods:{add:function(t){this.title="添加",this.visible=!0,this.id=0,this.group={id:0,name:"",sort:"",cate_id:t,status:1}},edit:function(t,e){this.visible=!0,this.id=e,this.group={id:e,name:"",sort:"",cate_id:t,status:1},this.getCateCustomInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getCateCustomInfo:function(){var t=this;this.request(n["a"].getCateCustomInfo,{id:this.id,cate_id:this.group.cate_id}).then((function(e){t.group.id=e.id,t.group.status=e.status,t.group.name=e.name,t.group.sort=e.sort,console.log("group",t.group)}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(n["a"].addCateCustom,this.group).then((function(e){e?t.$message.success("编辑成功"):t.$message.success("编辑失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))):this.request(n["a"].addCateCustom,this.group).then((function(e){e?t.$message.success("添加成功"):t.$message.success("添加失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},r=o,c=(a("8e58"),a("0c7c")),l=Object(c["a"])(r,i,s,!1,null,"246dc643",null);e["default"]=l.exports},c4d5:function(t,e,a){"use strict";a("d93a")},d93a:function(t,e,a){}}]);