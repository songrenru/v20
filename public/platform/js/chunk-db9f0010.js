(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db9f0010"],{"0c370":function(e,i,t){"use strict";t("7171")},7171:function(e,i,t){},e816:function(e,i,t){"use strict";t.r(i);t("b0c0");var a=function(){var e=this,i=e._self._c;return i("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"分组名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["label_group_name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入分组名称！"}]}],expression:"['label_group_name', {initialValue:detail.name,rules: [{required: true, message: '请输入分组名称！'}]}]"}],attrs:{placeholder:"请输入分组名称（分组名称不得超过15个字）",maxLength:15},on:{change:e.text_change}})],1),i("a-col",{attrs:{span:6}})],1)],1)],1)],1)},n=[],o=t("53ca"),s=t("a0e0"),l=t("ca00"),r={name:"addLabelGroup",data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:""},id:0,pid:0,tokenName:"",sysName:""}},mounted:function(){},methods:{text_change:function(e){},add:function(e){var i=Object(l["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",this.title="新建标签组",this.visible=!0,this.id="0",this.pid=e,this.detail={id:0,name:""},this.checkedKeys=[]},edit:function(e){var i=Object(l["i"])(location.hash);i?(this.tokenName=i+"_access_token",this.sysName=i):this.sysName="village",console.log("erererererer",e),this.visible=!0,this.id=e,this.getEditInfo(),this.id>0?this.title="编辑":this.title="添加",console.log(this.title)},handleSubmit:function(){var e=this,i=this.form.validateFields;this.confirmLoading=!0,i((function(i,t){i?e.confirmLoading=!1:(t.id=e.id,t.pid=e.pid,e.tokenName&&(t.tokenName=e.tokenName),e.request(s["a"].addLabelGroup,t).then((function(i){e.detail.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",t)}),1500)})).catch((function(i){e.confirmLoading=!1})),console.log("values",t))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this,i={id:this.id};this.tokenName&&(i["tokenName"]=this.tokenName),this.request(s["a"].getCodeGroupInfo,i).then((function(i){console.log(i),e.detail={id:0,name:""},"object"==Object(o["a"])(i.info)&&(e.detail=i.info,e.pid=i.info.pid)}))}}},c=r,d=(t("0c370"),t("2877")),m=Object(d["a"])(c,a,n,!1,null,null,null);i["default"]=m.exports}}]);