(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d4b8074"],{"1cb1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box"},[a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:5,sm:24}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("a-col",{staticStyle:{"text-align":"center"}},[t._v(" 志愿者姓名： ")]),a("a-col",[a("a-input",{attrs:{placeholder:"请输入志愿者姓名"},model:{value:t.search.join_name,callback:function(e){t.$set(t.search,"join_name",e)},expression:"search.join_name"}})],1)],1)],1),a("a-col",{attrs:{md:5,sm:24}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("a-col",{staticStyle:{"text-align":"center"}},[t._v(" 联系方式： ")]),a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{placeholder:"请输入联系方式"},model:{value:t.search.join_phone,callback:function(e){t.$set(t.search,"join_phone",e)},expression:"search.join_phone"}})],1)],1)],1),a("a-col",{attrs:{md:5,sm:24}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("a-col",{staticStyle:{"text-align":"center"}},[t._v(" 审核状态： ")]),a("a-select",{staticStyle:{width:"60%"},attrs:{placeholder:"请选择审核状态"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("全部")]),a("a-select-option",{attrs:{value:"2"}},[t._v("待审核")]),a("a-select-option",{attrs:{value:"3"}},[t._v("审核通过")]),a("a-select-option",{attrs:{value:"4"}},[t._v("审核拒绝")])],1)],1)],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loadPost},on:{change:t.table_change},scopedSlots:t._u([{key:"join_status",fn:function(e,i){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusFilter")(i.join_status),text:e}})],1)}},{key:"join_examine",fn:function(e,i){return a("span",{},[a("a-badge",{attrs:{status:t._f("examineFilter")(i.join_examine),text:i.join_examine_txt}})],1)}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.join_name,i.join_id,i.activity_id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.delInfo(i)}}},[t._v("删除")])],1)}}])}),a("a-modal",{attrs:{title:"查看编辑"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",[a("a-row",{attrs:{align:"middle"}},[a("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[a("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]),t._v(" 报名姓名 ")]),a("a-col",{attrs:{span:19}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_name",{initialValue:t.detail.join_name,rules:[{required:!0,message:"请填写报名者姓名!"}]}],expression:"[\n                    `join_name`,\n                    {\n                    initialValue: detail.join_name,\n                      rules: [\n                        {\n                          required: true,\n                          message: '请填写报名者姓名!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{placeholder:"请填写报名者姓名"}})],1)],1)],1),a("a-form-item",[a("a-row",{attrs:{align:"middle"}},[a("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[a("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]),t._v(" 报名手机号 ")]),a("a-col",{attrs:{span:19}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_phone",{initialValue:t.detail.join_phone,rules:[{required:!0,message:"请填写报名手机号!"}]}],expression:"[\n                  `join_phone`,\n                  {\n                  initialValue: detail.join_phone,\n                    rules: [\n                      {\n                        required: true,\n                        message: '请填写报名手机号!',\n                      },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请填写报名手机号"}})],1)],1)],1),a("a-form-item",[a("a-row",{attrs:{align:"middle"}},[a("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[1==t.detail.active_is_need?a("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]):t._e(),t._v(" 报名身份证 ")]),a("a-col",{attrs:{span:19}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_id_card",{initialValue:t.detail.join_id_card}],expression:"[\n                  `join_id_card`,\n                  {\n                    initialValue: detail.join_id_card,\n                  },\n                ]"}],attrs:{placeholder:"请填写报名身份证"}})],1)],1)],1),a("a-form-item",[a("a-row",{attrs:{align:"middle"}},[a("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[t._v(" 所属活动 ")]),a("a-col",{attrs:{span:19}},[t._v(" "+t._s(t.detail.active_name)+" ")])],1)],1),a("a-form-item",[a("a-row",{attrs:{align:"middle"}},[a("a-col",{staticClass:"modal_box_title",attrs:{md:5}},[t._v(" 备注 ")]),a("a-col",{attrs:{md:19}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["join_remark",{initialValue:t.detail.join_remark}],expression:"[\n                  `join_remark`,\n                  {\n                    initialValue: detail.join_remark,\n                  },\n                ]"}],attrs:{placeholder:"请输入备注内容"}})],1)],1)],1),a("a-form-item",[a("a-row",{attrs:{align:"middle"}},[a("a-col",{staticClass:"modal_box_title",attrs:{span:5}},[a("span",{staticStyle:{color:"#F5242E"}},[t._v("*")]),t._v(" 报名状态 ")]),a("a-col",{attrs:{span:19}},[a("a-radio-group",{attrs:{name:"join_status"},model:{value:t.detail.join_status,callback:function(e){t.$set(t.detail,"join_status",e)},expression:"detail.join_status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:t.onClose}},[t._v(" 取消 ")]),a("a-button",{attrs:{type:"primary"},on:{click:t.onSubmitSave}},[t._v(" 确认 ")])],1)],1),a("signVolunteerInfo",{ref:"createModal",on:{ok:t.handleOks}})],1)},n=[],s=(a("ac1f"),a("841c"),a("567c")),o=a("7fde"),r=[{title:"姓名",dataIndex:"join_name",key:"join_name"},{title:"联系电话",dataIndex:"join_phone",key:"join_phone"},{title:"身份证明",dataIndex:"join_id_card",key:"join_id_card"},{title:"报名时间",dataIndex:"join_add_time_txt",key:"join_add_time_txt"},{title:"审核状态",dataIndex:"join_examine",key:"join_examine",scopedSlots:{customRender:"join_examine"}},{title:"报名状态",dataIndex:"join_status_txt",key:"join_status_txt",scopedSlots:{customRender:"join_status"}},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],c=[],l={name:"signVolunteerActivitiesList",components:{signVolunteerInfo:o["default"]},filters:{statusFilter:function(t){var e=["error","success","error"];return e[t]},examineFilter:function(t){var e=["warning","success","error"];return e[t]}},data:function(){return{reply_content:"",pagination:{pageSize:10,total:10},search_data:[],search:{join_name:"",join_phone:"",page:1,status:void 0},form:this.$form.createForm(this),visible:!1,data:c,columns:r,page:1,detail:{join_name:"",join_phone:"",join_id_card:"",join_remark:"",join_status:1,activity_id:1,active_name:"",active_is_need:0},join_id:0,loadPost:!1}},mounted:function(){console.log("router",1),console.log("router",this.$route.query.activity_id);var t=this.$route.query.activity_id;t&&(this.search.activity_id=t),this.getActiveJoinList()},activated:function(){console.log("router",1),console.log("router",this.$route.query.activity_id);var t=this.$route.query.activity_id;t&&(this.search.activity_id=t),this.getActiveJoinList()},methods:{handleOks:function(){this.getActiveJoinList()},getActiveJoinList:function(){var t=this;if(this.loadPost)return!1;this.loadPost=!0,this.search["page"]=this.page,this.request(s["a"].getActiveJoinList,this.search).then((function(e){t.loadPost=!1,console.log("res",e),t.pagination.total=e.count?e.count:0,t.data=e.list}))},getMessageSuggestionsDetail:function(t){var e=this;this.request(s["a"].messageSuggestionsDetail,{suggestions_id:t}).then((function(t){console.log("res",t),e.detail=t.info}))},saveMessageSuggestionsReplyInfo:function(){var t=this;this.request(s["a"].saveMessageSuggestionsReplyInfo,{suggestions_id:this.detail.suggestions_id,reply_content:this.reply_content}).then((function(e){console.log("res",e),t.visible=!1,t.reply_content="",t.$notification.success({message:"回复成功"}),t.getMessageSuggestionsList()}))},onSubmitSave:function(){this.handleSubmit()},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(console.log("rerererere",a),a.join_id=t.join_id,a.join_status=t.detail.join_status,t.request(s["a"].subActiveJoin,a).then((function(e){t.$message.success("编辑成功"),t.getActiveJoinList(),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",a))}))},lookEdit:function(t){console.log("e",t),this.visible=!0,this.detail=t,this.join_id=t.join_id,this.active_is_need=t.active_is_need},delInfo:function(t){var e=this;this.$confirm({title:"你确定要删除该报名信息?",content:"该报名信息一旦删除不可恢复",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){e.request(s["a"].delActivityJoin,{activity_id:t.activity_id,join_id:t.join_id}).then((function(t){e.$message.success("删除成功！"),e.getActiveJoinList()}))},onCancel:function(){console.log("Cancel")}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.page=t.current,this.getActiveJoinList())},onClose:function(){this.visible=!1},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.getActiveJoinList()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search.join_name="",this.search.join_phone="",this.search.status=void 0,this.search.page=1,this.search_data=[],this.getActiveJoinList()}}},d=l,u=(a("d5c9"),a("0c7c")),_=Object(u["a"])(d,i,n,!1,null,"48ca92c8",null);e["default"]=_.exports},"73cb":function(t,e,a){},d5c9:function(t,e,a){"use strict";a("73cb")}}]);