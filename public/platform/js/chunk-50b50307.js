(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50b50307"],{"63bc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:"",title:t.title,width:1200,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"事项名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入事项名称！"}]}],expression:"['title', {initialValue:detail.title,rules: [{required: true, message: '请输入事项名称！'}]}]"}]})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:20}},[a("rich-text",{attrs:{info:t.content},on:{"update:info":function(e){t.content=e}}})],1)],1),a("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort', {initialValue:detail.sort}]"}]})],1)],1),a("a-form-item",{attrs:{label:"会议状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:t.detail.status}],expression:"['status',{initialValue:detail.status}]"}]},[a("a-radio",{attrs:{value:1}},[t._v("开启")]),a("a-radio",{attrs:{value:0}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)},o=[],n=a("53ca"),l=a("567c"),s=a("3683"),r=a("6ec1"),c={data:function(){return{title:"新建",labelCol:{xs:{span:20},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{matter_id:0,title:"",content:"",status:1,cat_id:0,area_id:0},matter_id:0,cat_id:0,isClear:!1,loading:!1,content:""}},watch:{content:function(t){console.log(111111111,t),this.$set(this.detail,"content",t)}},components:{Editor:s["a"],RichText:r["a"]},mounted:function(){},methods:{change:function(t){console.log(t)},add:function(t){this.title="新建",this.visible=!0,this.cat_id=t,this.matter_id=0,this.detail={meeting_id:0,title:"",content:" ",status:1,cat_id:0,area_id:0}},edit:function(t,e){this.visible=!0,this.cat_id=e,this.matter_id=t,this.getEditInfo(),this.matter_id>0?this.title="编辑":this.title="新建",console.log(this.title)},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.cat_id=t.cat_id?t.cat_id:0,a.matter_id=t.matter_id,a.content=t.detail.content,console.log(a),t.request(l["a"].subMatter,a).then((function(e){t.detail.matter_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,this.content="",setTimeout((function(){t.cat_id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(l["a"].getMatterInfo,{matter_id:this.matter_id}).then((function(e){console.log(e),t.detail={matter_id:0,title:"",content:"",status:0,cat_id:0,area_id:0},t.checkedKeys=[],"object"==Object(n["a"])(e.info)&&(t.detail=e.info,t.content=e.info.content,t.cat_id=e.info.cat_id,t.matter_id=e.info.matter_id)}))}}},d=c,u=(a("939d"),a("2877")),m=Object(u["a"])(d,i,o,!1,null,null,null);e["default"]=m.exports},"939d":function(t,e,a){"use strict";a("ff45")},ff45:function(t,e,a){}}]);