(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8b31110","chunk-2d0b6a79","chunk-076a060e","chunk-2d0b6a79"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("d3b7");function i(t,e,a,i,r,n,s){try{var o=t[n](s),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(i,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function o(t){i(s,r,n,o,l,"next",t)}function l(t){i(s,r,n,o,l,"throw",t)}o(void 0)}))}}},"3ccb":function(t,e,a){"use strict";a("4d0b")},"4d0b":function(t,e,a){},6317:function(t,e,a){"use strict";a.r(e);a("b0c0"),a("4e82");var i=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"活动名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入会议名称！"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入会议名称！'}]}]"}]})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"图片",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-row",[e("div",{staticClass:"clearfix"},[e("a-upload",{attrs:{name:"active_img",action:t.uploadImgUrl,"list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<5?e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1):t._e()]),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),e("div",{staticStyle:{color:"red"}},[t._v("建议尺寸：640*238px，最多上传5张")])])],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"发布内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:20}},[e("rich-text",{attrs:{info:t.detail.desc},on:{"update:info":function(e){return t.$set(t.detail,"desc",e)}}})],1)],1),e("a-form-item",{attrs:{label:"活动时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:20}},[e("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["activity_time",{initialValue:[t.date_moment(t.detail.start_time,t.dateFormat),t.date_moment(t.detail.end_time,t.dateFormat)],rules:[{type:"array",required:!0,message:"Please select time!"}]}],expression:"['activity_time',{initialValue:[date_moment(detail.start_time, dateFormat), date_moment(detail.end_time, dateFormat)],rules: [{ type: 'array', required: true, message: 'Please select time!' }]}]"}],attrs:{format:t.dateFormat,placeholder:"活动时间"},on:{change:t.dateOnChange}})],1)],1),e("a-form-item",{attrs:{label:"报名截止时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol,required:!0}},[e("a-col",{attrs:{span:20}},[e("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["close_time",{initialValue:t.date_moment(t.detail.close_time,t.dateFormat)}],expression:"[\n              'close_time',\n              {initialValue:date_moment(detail.close_time, dateFormat)}\n          ]"}],attrs:{format:t.dateFormat,placeholder:"报名截止时间"},on:{change:t.onChange}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),e("a-form-item",{attrs:{label:"活动报名人数",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:20}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["max_num",{initialValue:t.detail.max_num}],expression:"['max_num', {initialValue:detail.max_num}]"}]})],1)],1),e("a-form-item",{attrs:{label:"是否需要身份证",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["id_card_status",{initialValue:t.detail.id_card_status}],expression:"['id_card_status',{initialValue:detail.id_card_status}]"}]},[e("a-radio",{attrs:{value:1}},[t._v("是")]),e("a-radio",{attrs:{value:2}},[t._v("否")])],1)],1)],1),e("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:20}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort', {initialValue:detail.sort}]"}]})],1)],1),e("a-form-item",{attrs:{label:"活动状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:t.detail.status}],expression:"['status',{initialValue:detail.status}]"}]},[e("a-radio",{attrs:{value:1}},[t._v("开启")]),e("a-radio",{attrs:{value:2}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)},r=[],n=a("1da1"),s=a("53ca"),o=(a("96cf"),a("d3b7"),a("159b"),a("c1df")),l=a.n(o),c=a("567c"),d=a("3683"),u=a("6ec16");function m(t,e){var a=new FileReader;a.addEventListener("load",(function(){return e(a.result)})),a.readAsDataURL(t)}var p={data:function(){return{title:"新建",labelCol:{xs:{span:20},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{party_activity_id:0,name:"",img:"",desc:0,start_time:"",end_time:"",last_time:0,close_time:0,sign_up_num:"",sort:"",status:1,street_id:"",id_card_status:1,max_num:0},party_activity_id:0,isClear:!1,loading:!1,activity_date:[],uploadImgUrl:"/v20/public/index.php/"+c["a"].activityUpload,previewVisible:!1,previewImage:"",fileList:[],activity_time:"",dateFormat:"YYYY-MM-DD"}},components:{Editor:d["a"],RichText:u["a"]},mounted:function(){},methods:{change:function(t){console.log(t)},onChange:function(t,e){this.detail.close_time=e,console.log(t,e)},add:function(){this.title="新建",this.visible=!0,this.detail={party_activity_id:0,name:"",img:"",desc:" ",last_time:"",close_time:"",sign_up_num:"",sort:"",status:1,street_id:"",id_card_status:1,max_num:0},this.imageUrl="",this.fileList=[]},edit:function(t){this.visible=!0,this.isClear=!0,this.party_activity_id=t,this.getEditInfo(),console.log(this.party_activity_id),this.party_activity_id>0?this.title="编辑":this.title="新建",console.log(this.party_activity_id)},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){if(e)t.confirmLoading=!1;else{a.party_activity_id=t.party_activity_id?t.party_activity_id:0,a.desc=t.detail.desc,t.activity_time&&(a.activity_time=t.activity_time),a.close_time=t.detail.close_time;var i=t.fileList,r=[];i.forEach((function(t){t.response?r.push(t.response):r.push(t.url_path)})),r.length>0&&(a.img_arr=r),console.log(a),t.request(c["a"].subPartyActivity,a).then((function(e){t.detail.party_activity_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",a)}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.form=t.$form.createForm(t)}),500)},moment:l.a,date_moment:function(t,e){return t?l()(t,e):""},getEditInfo:function(){var t=this;this.request(c["a"].getPartyActivityInfo,{party_activity_id:this.party_activity_id}).then((function(e){console.log(e),t.detail={party_activity_id:0,name:"",img:"",desc:0,start_time:"",end_time:"",last_time:0,close_time:0,sign_up_num:"",sort:"",status:"",street_id:"",id_card_status:"",max_num:0},"object"==Object(s["a"])(e.info)&&(t.detail=e.info,t.fileList=e.info.img,t.activity_time=e.info.activity_time),console.log("detail",t.detail)}))},dateOnChange:function(t,e){this.activity_time=e,console.log(t),console.log(e),console.log("activity_date",this.activity_time)},handlePreview:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,m(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},handleChange:function(t){var e=t.fileList;this.fileList=e,console.log("th",this.fileList)}}},f=p,_=(a("bdd4"),a("2877")),v=Object(_["a"])(f,i,r,!1,null,null,null);e["default"]=v.exports},b9b5:function(t,e,a){},bdd4:function(t,e,a){"use strict";a("b9b5")},d074:function(t,e,a){"use strict";a.r(e);a("b0c0"),a("ac1f"),a("841c");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"search-box",staticStyle:{"margin-bottom":"10px"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("活动名称：")]),e("a-input",{staticStyle:{width:"70%"},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1)],1),e("a-col",{attrs:{md:2,sm:2}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),e("a-col",{attrs:{md:2,sm:2}},[e("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v("新建")])],1),e("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(a,i){return e("span",{},[e("a",{on:{click:function(e){return t.$refs.createModal.edit(i.party_activity_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.party_activity_id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])]),e("a-divider",{attrs:{type:"vertical"}}),e("router-link",{staticStyle:{color:"#1890ff"},attrs:{to:{name:"ActivityApplyList",params:{id:i.party_activity_id}}}},[t._v("报名列表")])],1)}},{key:"status",fn:function(a){return e("span",{},[e("a-badge",{attrs:{status:t._f("statusTypeFilter")(a),text:t._f("statusFilter")(a)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])}),e("activity-info",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)],1)},r=[],n=a("567c"),s=a("6317"),o={1:{status:"success",text:"开启"},2:{status:"default",text:"禁止"}},l={name:"PartyActivityList",components:{activityInfo:s["default"]},data:function(){return{list:[],visible:!1,confirmLoading:!1,sortedInfo:null,pagination:{pageSize:10,total:10},search:{page:1},page:1,search_data:[]}},mounted:function(){this.getMeeting()},filters:{statusFilter:function(t){return o[t].text},statusTypeFilter:function(t){return o[t].status}},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"标题",dataIndex:"name",key:"name"},{title:"添加时间",dataIndex:"add_time",key:"add_time"},{title:"最后修改时间",dataIndex:"last_time",key:"last_time"},{title:"总名额/剩余名额",dataIndex:"num",key:"num"},{title:"排序",dataIndex:"sort",key:"sort"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},created:function(){},methods:{callback:function(t){console.log(t)},getMeeting:function(){var t=this;this.search["page"]=this.page,this.request(n["a"].getPartyActivityList,this.search).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getMeeting())},cancel:function(){},handleOks:function(){this.getMeeting()},searchList:function(){console.log("search",this.search),this.getMeeting()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={key_val:"name",value:"",status:"",date:[],page:1},this.search_data=[],this.getMeeting()},deleteConfirm:function(t){var e=this;this.request(n["a"].delPartyActivity,{id:t}).then((function(t){e.getMeeting(),e.$message.success("删除成功")}))}}},c=l,d=(a("3ccb"),a("2877")),u=Object(d["a"])(c,i,r,!1,null,null,null);e["default"]=u.exports}}]);