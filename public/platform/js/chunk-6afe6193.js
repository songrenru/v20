(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6afe6193","chunk-89494adc"],{1215:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{staticClass:"project_info",attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("设备名称")]),t._v(" "+t._s(t.replyInfo.camera_name)+" ")])],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("设备编号")]),t._v(" "+t._s(t.replyInfo.camera_sn)+" ")])],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("申请姓名")]),t._v(" "+t._s(t.replyInfo.name)+" ")])],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("申请电话")]),t._v(" "+t._s(t.replyInfo.phone)+" ")])],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("申请地址")]),t._v(" "+t._s(t.replyInfo.address)+" ")])],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("申请理由")]),t._v(" "+t._s(t.replyInfo.reply_reason)+" ")])],1),e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("可看时间范围")]),t.replyInfo.start_time_txt&&t.replyInfo.end_time_txt?e("span",[t._v(t._s(t.replyInfo.start_time_txt)+"到"+t._s(t.replyInfo.end_time_txt))]):t._e(),t.replyInfo.start_time||t.replyInfo.end_time?t._e():e("span",[t._v("不限")])])],1),t.is_look>0?e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("审核结果")]),t._v(" "+t._s(t.replyInfo.reply_status_txt)+" ")])],1):t._e(),t.is_look>0&&t.replyInfo.reason?e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("拒绝原因")]),t._v(" "+t._s(t.replyInfo.reason)+" ")])],1):t._e(),t.is_look>0&&t.replyInfo.reply_time_txt?e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("审核时间")]),t._v(" "+t._s(t.replyInfo.reply_time_txt)+" ")])],1):t._e(),t.is_look<=0?e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:30}},[e("span",{staticClass:"label_col"},[t._v("审核选择")]),e("a-radio-group",{on:{change:function(a){return t.checkChoose(a)}},model:{value:t.replyInfo.reply_status,callback:function(a){t.$set(t.replyInfo,"reply_status",a)},expression:"replyInfo.reply_status"}},[e("a-radio",{attrs:{value:1}},[t._v("申请中")]),e("a-radio",{attrs:{value:2}},[t._v("允许")]),e("a-radio",{attrs:{value:3}},[t._v("拒绝")])],1)],1)],1):t._e(),t.is_look<=0&&3==t.replyInfo.reply_status?e("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("span",{staticClass:"label_col"},[t._v("拒绝理由")]),e("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:30,placeholder:"请输入拒绝理由！"},model:{value:t.replyInfo.reason,callback:function(a){t.$set(t.replyInfo,"reason",a)},expression:"replyInfo.reason"}})],1):t._e()],1)],1)],1)},s=[],o=e("a0e0"),r={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,replyInfo:{},id:0,is_look:0}},mounted:function(){},methods:{edit:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.title=a?"查看":"审核",this.is_look=a,this.visible=!0,this.id=t,this.getReplyInfo(t)},checkChoose:function(t){this.$set(this.replyInfo,"reply_status",t.target.value),console.log("e.target.value",t.target.value)},getReplyInfo:function(t){var a=this;this.request(o["a"].getReplyInfo,{id:t}).then((function(t){console.log("res",t),a.replyInfo=t.info}))},handleSubmit:function(){var t=this;if(this.is_look)return this.visible=!1,setTimeout((function(){t.id=0,t.form=t.$form.createForm(t)}),500),!1;this.confirmLoading=!0;var a=o["a"].checkReplyInfo;console.log("replyInfo",this.replyInfo),this.request(a,this.replyInfo).then((function(a){t.$message.success("审核操作成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(a){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id=0,t.form=t.$form.createForm(t)}),500)}}},n=r,i=(e("adbc"),e("0c7c")),c=Object(i["a"])(n,l,s,!1,null,"f1b351f0",null);a["default"]=c.exports},2018:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-suggestions-box-1"},[e("div",{staticClass:"search-box"},[e("a-row",{attrs:{gutter:48}},[e("a-col",{staticClass:"padding-tp10",staticStyle:{width:"240px","padding-right":"1px"},attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("设备编号：")]),e("a-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入设备编号"},model:{value:t.search.camera_sn,callback:function(a){t.$set(t.search,"camera_sn",a)},expression:"search.camera_sn"}})],1)],1),e("a-col",{staticClass:"padding-tp10",staticStyle:{width:"240px","padding-right":"1px"},attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("设备名称：")]),e("a-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入设备名称"},model:{value:t.search.camera_name,callback:function(a){t.$set(t.search,"camera_name",a)},expression:"search.camera_name"}})],1)],1),e("a-col",{staticClass:"padding-tp10",staticStyle:{width:"210px","padding-right":"1px"},attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("申请人：")]),e("a-input",{staticStyle:{width:"110px"},attrs:{placeholder:"请输入申请人"},model:{value:t.search.name,callback:function(a){t.$set(t.search,"name",a)},expression:"search.name"}})],1)],1),e("a-col",{staticClass:"padding-tp10",staticStyle:{width:"210px","padding-right":"1px"},attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("手机号：")]),e("a-input",{staticStyle:{width:"110px"},attrs:{placeholder:"请输入手机号"},model:{value:t.search.phone,callback:function(a){t.$set(t.search,"phone",a)},expression:"search.phone"}})],1)],1),e("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"1px","padding-right":"1px",width:"210px"},attrs:{md:8,sm:24}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("申请状态：")]),e("a-select",{staticStyle:{width:"117px"},attrs:{"default-value":"0",placeholder:"请选择状态"},model:{value:t.search.reply_status,callback:function(a){t.$set(t.search,"reply_status",a)},expression:"search.reply_status"}},[e("a-select-option",{attrs:{value:"0"}},[t._v(" 全部 ")]),e("a-select-option",{attrs:{value:"1"}},[t._v(" 申请中 ")]),e("a-select-option",{attrs:{value:"2"}},[t._v(" 审核通过 ")]),e("a-select-option",{attrs:{value:"3"}},[t._v(" 审核拒绝 ")])],1)],1),e("a-col",{staticClass:"padding-tp10",staticStyle:{width:"250px","padding-right":"1px"},attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),e("a-range-picker",{staticStyle:{width:"150px"},attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search.dateData,callback:function(a){t.$set(t.search,"dateData",a)},expression:"search.dateData"}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),e("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"0px","padding-right":"1px",width:"90px"},attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(a){return t.searchList()}}},[t._v(" 查询 ")])],1)],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"cameraName",fn:function(a,l){return e("span",{staticClass:"pointer"},[e("a-tooltip",{attrs:{placement:"rightTop"},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("设备编号："+t._s(l.camera_sn))])]},proxy:!0}],null,!0)},[t._v(" "+t._s(l.camera_name)+" ")])],1)}},{key:"action",fn:function(a,l){return e("span",{},[1==l.reply_status?e("a",{on:{click:function(a){return t.$refs.replayChek.edit(l.id)}}},[t._v("审核")]):e("a",{on:{click:function(a){return t.$refs.replayChek.edit(l.id,1)}}},[t._v("查看")])])}}])}),e("replay-chek",{ref:"replayChek",on:{ok:t.getList}})],1)},s=[],o=(e("ac1f"),e("841c"),e("a0e0")),r=e("1215"),n=[{title:"设备名",dataIndex:"",key:"cameraName",scopedSlots:{customRender:"cameraName"}},{title:"申请人",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"关系",dataIndex:"relation",key:"relation"},{title:"地址",dataIndex:"address",key:"address"},{title:"添加时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"申请开始时间",dataIndex:"start_time_txt",key:"start_time_txt"},{title:"申请结束时间",dataIndex:"end_time_txt",key:"end_time_txt"},{title:"申请理由",dataIndex:"reply_reason",key:"reply_reason"},{title:"审核时间",dataIndex:"reply_time_txt",key:"reply_time_txt"},{title:"状态",dataIndex:"reply_status_txt",key:"reply_status_txt"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],i=[],c={name:"replyList",filters:{},components:{replayChek:r["default"]},data:function(){return{pagination:{pageSize:10,total:10,current:1},search:{camera_sn:"",camera_name:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:i,columns:n,page:1}},mounted:function(){this.getList()},methods:{dateOnChange:function(t,a){this.search.date=a,console.log("search",this.search)},getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.request(o["a"].getReplyList,this.search).then((function(a){t.pagination.total=a.count?a.count:0,t.pagination.pageSize=a.total_limit?a.total_limit:10,t.data=a.list,t.loading=!1}))},table_change:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)}}},p=c,d=(e("43e0"),e("0c7c")),m=Object(d["a"])(p,l,s,!1,null,"9a94aa9c",null);a["default"]=m.exports},"43e0":function(t,a,e){"use strict";e("66ea")},"66ea":function(t,a,e){},"9cb0":function(t,a,e){},adbc:function(t,a,e){"use strict";e("9cb0")}}]);