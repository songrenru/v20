(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e736086","chunk-2d0b6a79"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("d3b7");function i(t,e,a,i,r,l,o){try{var s=t[l](o),n=s.value}catch(c){return void a(c)}s.done?e(n):Promise.resolve(n).then(i,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,l){var o=t.apply(e,a);function s(t){i(o,r,l,s,n,"next",t)}function n(t){i(o,r,l,s,n,"throw",t)}s(void 0)}))}}},"20e2":function(t,e,a){},6317:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"活动名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入会议名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入会议名称！'}]}]"}]})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"图片",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-row",[a("div",{staticClass:"clearfix"},[a("a-upload",{attrs:{name:"active_img",action:t.uploadImgUrl,"list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<5?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1):t._e()]),a("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),a("div",{staticStyle:{color:"red"}},[t._v("建议尺寸：640*238px，最多上传5张")])])],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"发布内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:20}},[a("rich-text",{attrs:{info:t.detail.desc},on:{"update:info":function(e){return t.$set(t.detail,"desc",e)}}})],1)],1),a("a-form-item",{attrs:{label:"活动时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:20}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["activity_time",{initialValue:[t.date_moment(t.detail.start_time,t.dateFormat),t.date_moment(t.detail.end_time,t.dateFormat)],rules:[{type:"array",required:!0,message:"Please select time!"}]}],expression:"['activity_time',{initialValue:[date_moment(detail.start_time, dateFormat), date_moment(detail.end_time, dateFormat)],rules: [{ type: 'array', required: true, message: 'Please select time!' }]}]"}],attrs:{format:t.dateFormat,placeholder:"活动时间"},on:{change:t.dateOnChange}})],1)],1),a("a-form-item",{attrs:{label:"报名截止时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol,required:!0}},[a("a-col",{attrs:{span:20}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["close_time",{initialValue:t.date_moment(t.detail.close_time,t.dateFormat)}],expression:"[\n              'close_time',\n              {initialValue:date_moment(detail.close_time, dateFormat)}\n          ]"}],attrs:{format:t.dateFormat,placeholder:"报名截止时间"},on:{change:t.onChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),a("a-form-item",{attrs:{label:"活动报名人数",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:20}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["max_num",{initialValue:t.detail.max_num}],expression:"['max_num', {initialValue:detail.max_num}]"}]})],1)],1),a("a-form-item",{attrs:{label:"是否需要身份证",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["id_card_status",{initialValue:t.detail.id_card_status}],expression:"['id_card_status',{initialValue:detail.id_card_status}]"}]},[a("a-radio",{attrs:{value:1}},[t._v("是")]),a("a-radio",{attrs:{value:2}},[t._v("否")])],1)],1)],1),a("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:20}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort', {initialValue:detail.sort}]"}]})],1)],1),a("a-form-item",{attrs:{label:"活动状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:t.detail.status}],expression:"['status',{initialValue:detail.status}]"}]},[a("a-radio",{attrs:{value:1}},[t._v("开启")]),a("a-radio",{attrs:{value:2}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)},r=[],l=a("1da1"),o=a("53ca"),s=(a("96cf"),a("d3b7"),a("159b"),a("c1df")),n=a.n(s),c=a("567c"),d=a("3683"),m=a("6ec16");function u(t,e){var a=new FileReader;a.addEventListener("load",(function(){return e(a.result)})),a.readAsDataURL(t)}var p={data:function(){return{title:"新建",labelCol:{xs:{span:20},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{party_activity_id:0,name:"",img:"",desc:0,start_time:"",end_time:"",last_time:0,close_time:0,sign_up_num:"",sort:"",status:1,street_id:"",id_card_status:1,max_num:0},party_activity_id:0,isClear:!1,loading:!1,activity_date:[],uploadImgUrl:"/v20/public/index.php/"+c["a"].activityUpload,previewVisible:!1,previewImage:"",fileList:[],activity_time:"",dateFormat:"YYYY-MM-DD"}},components:{Editor:d["a"],RichText:m["a"]},mounted:function(){},methods:{change:function(t){console.log(t)},onChange:function(t,e){this.detail.close_time=e,console.log(t,e)},add:function(){this.title="新建",this.visible=!0,this.detail={party_activity_id:0,name:"",img:"",desc:" ",last_time:"",close_time:"",sign_up_num:"",sort:"",status:1,street_id:"",id_card_status:1,max_num:0},this.imageUrl="",this.fileList=[]},edit:function(t){this.visible=!0,this.isClear=!0,this.party_activity_id=t,this.getEditInfo(),console.log(this.party_activity_id),this.party_activity_id>0?this.title="编辑":this.title="新建",console.log(this.party_activity_id)},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{a.party_activity_id=t.party_activity_id?t.party_activity_id:0,a.desc=t.detail.desc,t.activity_time&&(a.activity_time=t.activity_time),a.close_time=t.detail.close_time;var i=t.fileList,r=[];i.forEach((function(t){t.response?r.push(t.response):r.push(t.url_path)})),r.length>0&&(a.img_arr=r),console.log(a),t.request(c["a"].subPartyActivity,a).then((function(e){t.detail.party_activity_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",a)}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.form=t.$form.createForm(t)}),500)},moment:n.a,date_moment:function(t,e){return t?n()(t,e):""},getEditInfo:function(){var t=this;this.request(c["a"].getPartyActivityInfo,{party_activity_id:this.party_activity_id}).then((function(e){console.log(e),t.detail={party_activity_id:0,name:"",img:"",desc:0,start_time:"",end_time:"",last_time:0,close_time:0,sign_up_num:"",sort:"",status:"",street_id:"",id_card_status:"",max_num:0},"object"==Object(o["a"])(e.info)&&(t.detail=e.info,t.fileList=e.info.img,t.activity_time=e.info.activity_time),console.log("detail",t.detail)}))},dateOnChange:function(t,e){this.activity_time=e,console.log(t),console.log(e),console.log("activity_date",this.activity_time)},handlePreview:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,u(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},handleChange:function(t){var e=t.fileList;this.fileList=e,console.log("th",this.fileList)}}},_=p,v=(a("bdd4"),a("0c7c")),f=Object(v["a"])(_,i,r,!1,null,null,null);e["default"]=f.exports},bdd4:function(t,e,a){"use strict";a("20e2")}}]);