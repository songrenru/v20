(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a8804e2","chunk-4f17862c","chunk-2d0b3786"],{"1a49":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"用户名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入搜索词名称"}]}],expression:"[\n            'name',\n            { initialValue: detail.name, rules: [{ required: true, message: '请输入搜索词名称' }] },\n          ]"}]}),e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.getRandNames()}}},[t._v("随机姓名")])],1),e("a-form-item",{attrs:{label:"用户头像",help:"建议100*100px",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-upload",{attrs:{name:"reply_pic","file-list":t.avatarFileList,action:t.uploadImg,headers:t.headers},on:{change:t.avatarImgChange}},[e("a-button",[e("a-icon",{attrs:{type:"upload"}}),t._v(" 上传图片")],1)],1)],1)],1)],1)],1)},i=[],n=e("2909"),r=(e("b0c0"),e("fb6a"),e("d81d"),e("5c08")),s=e("7b3f"),l={data:function(){return{title:"新增机器人",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",avatar:""},id:"0",uploadImg:"/v20/public/index.php"+s["a"].uploadImg+"?upload_dir=/system/robot",avatarFileList:[],headers:{authorization:"authorization-text"}}},mounted:function(){},methods:{add:function(){this.visible=!0,this.id="0",this.detail={id:0,name:"",avatar:""},this.avatarFileList=[]},edit:function(t){this.visible=!0,this.id=t,this.avatarFileList=[],this.getEditInfo(),this.id>0?this.title="编辑机器人":this.title="新增机器人"},getRandNames:function(){var t=this;this.request(r["a"].getRandName,{}).then((function(a){t.detail.name=a}))},avatarImgChange:function(t){var a=this,e=Object(n["a"])(t.fileList);e=e.slice(-1),e=e.map((function(e){return e.response&&(e.url=e.response.data.full_url,a.detail.avatar=t.file.response.data.image),e})),this.avatarFileList=e,console.log(this.avatarFileList,"this.avatarFileList"),"done"===t.file.status?console.log("done"):"error"===t.file.status&&(console.log("error"),this.$message.error("".concat(t.file.name," 上传失败.")))},handleSubmit:function(){var t=this,a=this.form.validateFields;this.confirmLoading=!0,a((function(a,e){if(a)t.confirmLoading=!1;else{if(e.id=t.id,e.avatar=t.detail.avatar,""==e.avatar)return t.$message.error("请上传头像"),void(t.confirmLoading=!1);t.request(r["a"].editRobot,e).then((function(a){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",e)}),1500)})).catch((function(a){t.confirmLoading=!1}))}}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)},getEditInfo:function(){var t=this;this.request(r["a"].getRobotDetail,{id:this.id}).then((function(a){if(t.detail=a,a.avatar){var e={uid:"1",name:a.avatar,status:"done",url:a.avatar};t.avatarFileList.push(e)}}))}}},c=l,d=e("0c7c"),u=Object(d["a"])(c,o,i,!1,null,null,null);a["default"]=u.exports},2909:function(t,a,e){"use strict";e.d(a,"a",(function(){return l}));var o=e("6b75");function i(t){if(Array.isArray(t))return Object(o["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=e("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||n(t)||Object(r["a"])(t)||s()}},"2c98":function(t,a,e){},"5c08":function(t,a,e){"use strict";var o={getRobotList:"/common/platform.robot/getRobotList",getRobotDetail:"/common/platform.robot/getRobotDetail",editRobot:"/common/platform.robot/editRobot",delRobot:"/common/platform.robot/delRobot",getRandName:"/common/platform.robot/getRandName"};a["a"]=o},"7b3f":function(t,a,e){"use strict";var o={uploadImg:"/common/common.UploadFile/uploadImg"};a["a"]=o},"983a":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{margin:"24px 0 0"},attrs:{id:"components-layout-demo-basic"}},[e("a-page-header",{staticStyle:{padding:"0 0 16px 0"},attrs:{title:"机器人管理"}},[e("template",{slot:"extra"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(a){return t.$refs.RobotEditModal.add()}}},[t._v("添加机器人")])],1),e("div",{staticStyle:{color:"#999"}},[t._v("提供各业务所需数据")])],2),e("a-card",[e("a-table",{attrs:{columns:t.columns,"data-source":t.robotList,rowKey:"id",loading:t.loading,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"avatar",fn:function(t){return e("span",{},[e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"goods-image",attrs:{src:t}})])])}},{key:"action",fn:function(a,o){return e("span",{},[e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(a){return t.deleteRobot(o.id)},cancel:t.cancel}},[e("a-button",{attrs:{type:"link"}},[t._v("删除")])],1)],1)}}])})],1),e("robot-edit",{ref:"RobotEditModal",on:{ok:t.handleOk}})],1)},i=[],n=e("5c08"),r=e("1a49"),s=[],l={name:"robotList",components:{robotEdit:r["default"]},data:function(){return{form:this.$form.createForm(this),queryParam:{page:1},columns:[{title:"编号",dataIndex:"id",width:"15%"},{title:"机器人名称",dataIndex:"name",width:"20%"},{title:"机器人头像  ",width:"20%",dataIndex:"avatar",scopedSlots:{customRender:"avatar"}},{title:"添加时间",dataIndex:"create_time",width:"20%"},{title:"操作",dataIndex:"action",width:"20%",scopedSlots:{customRender:"action"}}],pagination:{pageSize:10,total:0,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-quick-jumper":!0},selectedRowKeys:s,robotList:[],loading:!1}},created:function(){},mounted:function(){this.getRobotList()},computed:{hasSelected:function(){return this.selectedRowKeys.length>0}},methods:{getRobotList:function(){var t=this;this.loading=!0,this.request(n["a"].getRobotList,this.queryParam).then((function(a){t.robotList=a.list,t.pagination.total=a.total,t.loading=!1}))},onSelectChange:function(t){console.log("selectedRowKeys changed: ",t),this.selectedRowKeys=t},deleteRobot:function(t){var a=this;this.request(n["a"].delRobot,{id:t}).then((function(t){a.getRobotList(),a.$message.success("删除成功")}))},tableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getRobotList())},cancel:function(){},handleOk:function(){this.getRobotList()}}},c=l,d=(e("de9a"),e("0c7c")),u=Object(d["a"])(c,o,i,!1,null,"68633d43",null);a["default"]=u.exports},de9a:function(t,a,e){"use strict";e("2c98")}}]);