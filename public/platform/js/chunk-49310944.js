(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49310944"],{"8b77":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"分组名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入分组名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入分组名称！'}]}]"}],attrs:{placeholder:"请输入分组名称（分组名称不得超过15个字）",maxLength:e.max_len},on:{input:function(t){return e.importText(t)}}})],1),i("a-col",{attrs:{span:6}},[i("span",{},[e._v(e._s(e.yet_len)+"/"+e._s(e.max_len))])])],1)],1)],1)],1)},a=[],s=i("53ca"),o=(i("b0c0"),i("a0e0")),l=i("ca00"),r={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:""},id:0,pid:0,max_len:15,yet_len:0,surplus_len:15,tokenName:"",sysName:""}},mounted:function(){},methods:{text_change:function(e){},add:function(e){this.title="创建子分组",this.visible=!0,this.id="0",this.pid=e,this.detail={id:0,name:""},this.checkedKeys=[];var t=Object(l["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village"},edit:function(e){var t=Object(l["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",console.log("erererererer",e),this.visible=!0,this.id=e,this.getEditInfo(),this.id>0?this.title="编辑子分组":this.title="添加子分组",console.log(this.title)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,i){t?e.confirmLoading=!1:(i.id=e.id,i.pid=e.pid,e.tokenName&&(i["tokenName"]=e.tokenName),e.request(o["a"].subEngineGroup,i).then((function(t){e.detail.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",i)}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",i))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this,t={id:this.id};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(o["a"].getGroupInfo,t).then((function(t){console.log(t),e.detail={id:0,name:""},"object"==Object(s["a"])(t.info)&&(e.detail=t.info,e.pid=t.info.pid,e.yet_len=t.info.name.length,e.surplus_len=e.max_len-e.yet_len)}))},importText:function(e){this.yet_len=e.target.value.length,this.surplus_len=this.max_len-this.yet_len,this.surplus_len<=0&&this.$message.error("最多可写15个字")}}},c=r,m=(i("a57f"),i("2877")),u=Object(m["a"])(c,n,a,!1,null,null,null);t["default"]=u.exports},a57f:function(e,t,i){"use strict";i("d84b")},d84b:function(e,t,i){}}]);