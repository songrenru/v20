(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63757428"],{"04f61":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"search-box",staticStyle:{"margin-bottom":"10px",display:"flex"},attrs:{id:"search_0601"}},[a("span",{class:t.isStreet?"span_box1":"span_box2"},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("任务名称：")]),a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入任务名称"},model:{value:t.search.title,callback:function(e){t.$set(t.search,"title",e)},expression:"search.title"}})],1),t.isStreet?a("span",{class:t.isStreet?"span_box1":"span_box2",staticStyle:{"margin-left":"10px"}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("任务类型：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择任务类型"},on:{change:t.handleChange},model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}},t._l(t.type_all,(function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.value)+" ")])})),1)],1):t._e(),a("span",{class:t.isStreet?"span_box1":"span_box2",staticStyle:{"margin-left":"10px"}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("完成时间：")]),a("a-range-picker",{staticStyle:{width:"200px"},attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(e){t.search_data=e},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("span",{class:t.isStreet?"span_box1":"span_box2",staticStyle:{width:"210px","margin-left":"20px",padding:"0 !important"}},[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v("查询")]),a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)]),a("div",{staticClass:"table-operator"},[t.isStreet?t._e():a("a-radio-group",{on:{change:t.sourceChange},model:{value:t.search.source,callback:function(e){t.$set(t.search,"source",e)},expression:"search.source"}},[a("a-radio-button",{staticStyle:{"margin-right":"10px"},attrs:{value:1}},[t._v("社区任务")]),a("a-radio-button",{attrs:{value:2}},[t._v("街道任务列表")])],1)],1),t.isButton?a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.EditModel.add()}}},[t._v("添加")])],1):t._e(),t.isStatus?a("a-table",{attrs:{columns:t.columnss,"data-source":t.list,pagination:t.pagination,loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"tags",fn:function(e,n){return a("span",{},t._l(e,(function(e){return a("a-tag",{staticStyle:{"margin-bottom":"5px"},attrs:{color:n.work_color}},[t._v(" "+t._s(e)+" ")])})),1)}},{key:"complete_qk",fn:function(e,n){return a("span",{},[n.status_button?a("a",{on:{click:function(e){return t.$refs.RecordModel.getList(n.title,n.id)}}},[t._v("查看")]):a("a",[t._v("--")])])}},{key:"action",fn:function(e,n){return a("span",{},[2!=t.search.source?a("a",{on:{click:function(e){return t.$refs.EditModel.edit(n.title,n.id)}}},[t._v("编辑")]):a("a",{on:{click:function(e){return t.$refs.seeModel.edit(n.title,n.id)}}},[t._v("查看")]),2!=t.search.source?a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?(操作后可能不能恢复！)","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.delCancel}},[t._v(" | "),a("a",{attrs:{href:"#"}},[t._v("删除")])]):t._e()],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}],null,!1,973159261)}):t._e(),a("Info",{ref:"EditModel",on:{ok:t.info}}),a("Record",{ref:"RecordModel",on:{ok:t.info}}),a("SeeInfo",{ref:"seeModel",on:{ok:t.info}})],1)],1)},i=[],s=(a("ac1f"),a("841c"),a("567c")),o=a("6a47"),l=a("1a29"),r=a("7b9a"),c=[],u={name:"taskRelease",components:{Info:o["default"],Record:l["default"],SeeInfo:r["default"]},data:function(){return{list:[],visible:!1,loading:!1,sortedInfo:null,pagination:{current:1,pageSize:10,total:10},search:{title:"",date:[],page:1,type:void 0,source:1},page:1,area_type:1,search_data:[],type_all:[],isStreet:!1,isButton:!0,columnss:c,isStatus:!0}},mounted:function(){this.getType(),this.getTableColumns(this.search.source),this.getList()},created:function(){},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.pagination.current,this.request(s["a"].getTaskReleaseList,this.search).then((function(e){t.isStatus=!0,t.loading=!1,t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.area_type=e.area_type}))},tableChange:function(t){var e=this;t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},info:function(t){this.getList()},handleOks:function(){this.getList()},dateOnChange:function(t,e){this.search.date=e,console.log("search",e,this.search.date)},searchList:function(){this.tableChange({current:1,pageSize:10,total:10})},resetList:function(){this.search={title:"",date:[],page:1,type:void 0,source:this.search.source},this.search_data=[],this.tableChange({current:1,pageSize:10,total:10})},deleteConfirm:function(t){var e=this;this.request(s["a"].taskReleaseDel,{id:t}).then((function(t){e.getList(),e.$message.success("删除成功")}))},delCancel:function(){},getType:function(){var t=this;this.request(s["a"].getTaskReleaseType).then((function(e){t.type_all=e.list,t.status1=e.typeStatus,t.status1&&(t.isStreet=!0,t.search.source=0)}))},handleChange:function(t){this.search.type=t},sourceChange:function(t){var e=t.target.value;this.isStatus=!1,this.isButton=1==e,this.getTableColumns(e),this.search.source=e,this.resetList()},getTableColumns:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.request(s["a"].getTaskReleaseListColumns,{type:e}).then((function(e){t.columnss=e}))}}},d=u,p=(a("586d"),a("2877")),h=Object(p["a"])(d,n,i,!1,null,"71dabe31",null);e["default"]=h.exports},"0617":function(t,e,a){"use strict";a("6f32")},"1a29":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"imgss",fn:function(e,n){return a("span",{},[e?a("viewer",{attrs:{images:n.img}},t._l(e,(function(t,e){return a("img",{staticClass:"img_w",class:0==e?"img_d":"img_n",attrs:{src:t}})})),0):a("a",[t._v("--")])],1)}}])})],1)},i=[],s=(a("ac1f"),a("841c"),a("0808"),a("6944")),o=a.n(s),l=a("8bbf"),r=a.n(l),c=a("567c");r.a.use(o.a);var u=[{title:"上报人",dataIndex:"work_name",key:"work_name"},{title:"上报时间",dataIndex:"add_time",key:"add_time"},{title:"任务数量",dataIndex:"complete_num",key:"complete_num"},{title:"完成数量",dataIndex:"complete_num_u",key:"complete_num_u"},{title:"上报内容",dataIndex:"content",key:"content"},{title:"图片",dataIndex:"img",key:"img",scopedSlots:{customRender:"imgss"},width:"10%"},{title:"状态",dataIndex:"status",key:"status"}],d=[],p={name:"balanceList",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:d,columns:u,title:"",confirmLoading:!1,id:""}},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.loading=!0,e&&(this.title="查看【"+e+"】"),a>0&&(this.$set(this.pagination,"current",1),this.id=a,this.search["id"]=this.id),this.search["page"]=this.pagination.current,this.request(c["a"].getTaskReleaseRecord,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})}}},h=p,m=(a("0617"),a("2877")),f=Object(m["a"])(h,n,i,!1,null,"01306dec",null);e["default"]=f.exports},"586d":function(t,e,a){"use strict";a("6e86")},"6e86":function(t,e,a){},"6f32":function(t,e,a){},7725:function(t,e,a){},"7b9a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:850,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticClass:"prepaid_info",attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"box_width label_col"},[t._v("任务名称")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.post.title,rules:[{required:!0,message:t.L("请输入任务名称！")}]}],expression:"['title',{ initialValue: post.title,rules: [{ required: true, message: L('请输入任务名称！') }] }]"}],staticStyle:{width:"400px"},attrs:{maxLength:30,disabled:!0,placeholder:"请输入任务名称"}})],1),a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"box_width label_col"},[t._v("完成时间")]),a("a-date-picker",{attrs:{disabled:!0,format:t.dateFormat,placeholder:"报名截止时间",value:t.date_moment(t.post.complete_time,t.dateFormat),allowClear:!1},on:{change:t.onChange}})],1),a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"box_width label_col "},[t._v("完成数量")]),a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["complete_num",{initialValue:t.post.complete_num,rules:[{required:!0,message:t.L("请输入完成数量！")}]}],expression:"['complete_num',{ initialValue: post.complete_num,rules: [{ required: true, message: L('请输入完成数量！') }] }]"}],staticStyle:{width:"175px"},attrs:{disabled:!0,min:1,max:999999999,placeholder:"请输入完成数量"}})],1),a("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("span",{staticClass:"box_width label_col",staticStyle:{float:"left"}},[t._v("任务内容")]),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{initialValue:t.post.content,rules:[{required:!0,message:t.L("请输入任务内容！")}]}],expression:"['content',{ initialValue: post.content,rules: [{ required: true, message: L('请输入任务内容！') }] }]"}],staticStyle:{width:"300px"},attrs:{disabled:!0,maxLength:200,placeholder:"请输入任务内容",rows:4}})],1)],1)],1)],1)},i=[],s=a("c1df"),o=a.n(s),l=a("567c"),r={components:{},data:function(){return{title:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,post:{id:0,type:void 0,title:"",complete_time:"",complete_num:"",content:"",wid_all:[]},selectedKeys:[],defaultExpandAll:!0,dateFormat:"YYYY-MM-DD"}},mounted:function(){},methods:{moment:o.a,date_moment:function(t,e){return t?o()(t,e):""},catIdChange:function(t){this.post.wid_all=t},edit:function(t,e){this.title="查看【"+t+"】",this.post.id=e,this.getEditInfo()},handleChange:function(t){this.post.wid_all=[]},onChange:function(t,e){console.log("date",t),console.log("dateString",e),this.post.complete_time=e},getEditInfo:function(){var t=this;t.confirmLoading=!0,this.request(l["a"].getTaskReleaseOne,{id:t.post.id}).then((function(e){t.visible=!0,t.post=e,t.confirmLoading=!1})).catch((function(e){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},c=r,u=(a("d5fa"),a("2877")),d=Object(u["a"])(c,n,i,!1,null,"5fecde1e",null);e["default"]=d.exports},d5fa:function(t,e,a){"use strict";a("7725")}}]);