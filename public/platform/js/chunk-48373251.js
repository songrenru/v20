(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48373251"],{8443:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"会议名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入会议名称！"}]}],expression:"['title', {initialValue:detail.title,rules: [{required: true, message: '请输入会议名称！'}]}]"}]})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"会议封面图",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-row",[e("div",[e("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:t.upload_url,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t.imageUrl?e("img",{staticClass:"imgname",attrs:{src:t.imageUrl,alt:"img"}}):e("div",[e("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1)]),e("div",{staticStyle:{float:"right","margin-top":"-110px"}},[t._v("建议尺寸：295*412px")])],1)])],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"会议内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:20}},[e("rich-text",{attrs:{info:t.detail.content},on:{"update:info":function(e){return t.$set(t.detail,"content",e)}}})],1)],1),e("a-form-item",{attrs:{label:"是否热门",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_hot",{initialValue:t.detail.is_hot}],expression:"['is_hot',{initialValue:detail.is_hot}]"}]},[e("a-radio",{attrs:{value:1}},[t._v("是")]),e("a-radio",{attrs:{value:2}},[t._v("否")])],1)],1)],1),e("a-form-item",{attrs:{label:"会议状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:t.detail.status}],expression:"['status',{initialValue:detail.status}]"}]},[e("a-radio",{attrs:{value:1}},[t._v("开启")]),e("a-radio",{attrs:{value:2}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)},o=[],l=i("2396"),n=i("567c"),s=i("3683"),r=i("6ec16");function c(t,e){var i=new FileReader;i.addEventListener("load",(function(){return e(i.result)})),i.readAsDataURL(t)}var d={data:function(){return{title:"新建",labelCol:{xs:{span:20},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{meeting_id:0,title:"",content:"",status:1,is_hot:1,cat_id:0,area_id:0,title_img:""},meeting_id:0,imageUrl:"",upload_url:"/v20/public/index.php/"+n["a"].uploadMeeting,img:"",cat_id:0,isClear:!1,loading:!1}},components:{Editor:s["a"],RichText:r["a"]},mounted:function(){},methods:{change:function(t){console.log(t)},onSelect:function(t,e){console.log("selected",t,e)},onCheck:function(t,e){console.log("onCheck",t,e),this.detail.community=t,this.checkedKeys=t,console.log("community",this.detail.community)},add:function(t){this.title="新建",this.visible=!0,this.cat_id=t,this.detail={meeting_id:0,title:"",content:" ",status:1,is_hot:1,cat_id:0,area_id:0,title_img:""},this.imageUrl="",this.meeting_id=0},edit:function(t,e){this.visible=!0,this.cat_id=e,this.meeting_id=t,this.getEditInfo(),console.log(this.meeting_id),this.meeting_id>0?this.title="编辑":this.title="新建",console.log(this.title)},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(i.cat_id=t.cat_id?t.cat_id:0,i.meeting_id=t.meeting_id,i.title_img=t.img,i.content=t.detail.content,console.log(i),t.request(n["a"].subMeeting,i).then((function(e){t.detail.meeting_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",i)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",i))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.cat_id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(n["a"].getMeetingInfo,{meeting_id:this.meeting_id}).then((function(e){console.log(e),t.detail={meeting_id:0,title:"",content:"",status:0,is_hot:0,cat_id:0,area_id:0,title_img:""},t.checkedKeys=[],"object"==Object(l["a"])(e.info)&&(t.detail=e.info,t.cat_id=e.info.cat_id,t.meeting_id=e.info.meeting_id,t.imageUrl=e.info.title_img,t.img=e.info.title_img),console.log("detail",t.detail)}))},handleChange:function(t){var e=this;"uploading"!==t.file.status?"done"===t.file.status&&(c(t.file.originFileObj,(function(t){e.imageUrl=t,e.loading=!1})),1e3===t.file.response.status&&(this.img=t.file.response.data)):this.loading=!0},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;e||this.$message.error("You can only upload JPG file!");var i=t.size/1024/1024<2;return i||this.$message.error("Image must smaller than 2MB!"),e&&i}}},m=d,u=(i("8ebf"),i("0b56")),g=Object(u["a"])(m,a,o,!1,null,null,null);e["default"]=g.exports},"8ebf":function(t,e,i){"use strict";i("b7f10")},b7f10:function(t,e,i){}}]);