(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffcc96be"],{"62ac":function(t,e,a){"use strict";a("d24a")},d24a:function(t,e,a){},de0b:function(t,e,a){"use strict";var i={mailList:"/common/platform.user.Mail/mailList",mailEdit:"/common/platform.user.Mail/editMail",delData:"/common/platform.user.Mail/delData",addData:"/common/platform.user.Mail/addData",getComplaintList:"/complaint/platform.Complaint/getList",getComplaintTypeList:"complaint/platform.Complaint/getTypeList",changeComplaintStatus:"/complaint/platform.Complaint/changeStatus",deleteComplaint:"/complaint/platform.Complaint/delete"};e["a"]=i},f61b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-ff ml-10 mt-20 mb-20 mr-10 pl-10 pr-10 pt-20 pb-20"},[a("a-row",[a("a-col",{attrs:{span:8}},[a("a-input-search",{attrs:{placeholder:t.L("请输入标题/内容/昵称/手机号"),allowClear:!0},on:{search:t.onSearch},model:{value:t.search_content,callback:function(e){t.search_content=e},expression:"search_content"}})],1),a("a-col",{attrs:{span:8,offset:2}},[a("span",[t._v(t._s(t.L("业务"))+"：")]),a("a-select",{staticStyle:{width:"60%"},attrs:{placeholder:t.L("请选择"),allowClear:!0,options:t.searchTypeOptions},on:{change:t.searchTypeChange},model:{value:t.search_type,callback:function(e){t.search_type=e},expression:"search_type"}})],1)],1),a("a-row",{staticClass:"mt-20"},[a("a-tabs",{attrs:{activeKey:t.tabActive},on:{change:t.tabChange}},t._l(t.tabList,(function(e){return a("a-tab-pane",{key:e.key,attrs:{tab:t.L(e.title)}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination,rowKey:"id"},scopedSlots:t._u([{key:"status_action",fn:function(e,i){return a("span",{},[a("a-switch",{attrs:{"checked-children":"已采纳","un-checked-children":"待采纳",checked:0!=i.status},on:{change:function(e){return t.statusChange(e,i)}}})],1)}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{staticClass:"label-sm blue",on:{click:function(e){return t.detail(i)}}},[t._v("查看详情")]),a("a",{staticClass:"btn label-sm blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.del(i.id)}}},[t._v("删除")])])}}],null,!0)})],1)})),1)],1),a("a-modal",{attrs:{title:t.L("详情"),visible:t.modalVisible,width:"60%"},on:{ok:function(e){t.modalVisible=!1},cancel:function(e){t.modalVisible=!1}}},[a("a-descriptions",{attrs:{title:t.L("用户"),column:2}},[a("a-descriptions-item",{attrs:{label:t.L("昵称")}},[t._v(" "+t._s(t.detailInfo.nickname||"-")+" ")]),a("a-descriptions-item",{attrs:{label:t.L("手机号")}},[t._v(" "+t._s(t.detailInfo.phone||"-")+" ")])],1),a("a-divider"),a("a-descriptions",{attrs:{title:t.L("投诉建议"),column:2}},[a("a-descriptions-item",{attrs:{label:t.L("商家/店铺")}},[t._v(" "+t._s(t.detailInfo.company||"-")+" ")]),a("a-descriptions-item",{attrs:{label:t.L("投诉类型")}},[t._v(" "+t._s(t.detailInfo.other_type||"-")+" ")])],1),a("a-descriptions",{attrs:{column:1}},[a("a-descriptions-item",{attrs:{label:t.L("发布时间")}},[t._v(" "+t._s(t.detailInfo.create_time||"-")+" ")])],1),a("a-descriptions",{attrs:{column:1,layout:"vertical"}},[t.detailInfo.img_arr&&t.detailInfo.img_arr.length?a("a-descriptions-item",{attrs:{label:t.L("图片")}},t._l(t.detailInfo.img_arr,(function(e,i){return a("img",{key:i,staticClass:"img",attrs:{alt:"图片",src:e},on:{click:function(a){return t.previewOpt(e)}}})})),0):t._e()],1),a("a-descriptions",{attrs:{column:1}},[a("a-descriptions-item",{attrs:{label:t.L("内容")}},[t._v(" "+t._s(t.detailInfo.body||"-")+" ")])],1)],1),a("a-modal",{attrs:{visible:t.previewVisible,footer:null,width:"30%"},on:{cancel:function(e){t.previewVisible=!1}}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)},n=[],s=(a("d81d"),a("c740"),a("de0b")),o={data:function(){return{search_content:"",search_type:void 0,searchTypeOptions:[],tabActive:"-1",tabList:[{key:"-1",title:"全部"},{key:"1",title:"采纳"},{key:"0",title:"待采纳"}],columns:[{title:"用户/手机号",dataIndex:"user_name",scopedSlots:{customRender:"user_name"}},{title:"业务",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"投诉类型",dataIndex:"other_type",scopedSlots:{customRender:"other_type"}},{title:"商家/店铺",dataIndex:"company",scopedSlots:{customRender:"company"}},{title:"内容",dataIndex:"body",scopedSlots:{customRender:"body"}},{title:"是否采纳",dataIndex:"status_action",scopedSlots:{customRender:"status_action"}},{title:"发布时间",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],list:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},modalVisible:!1,previewVisible:!1,previewImage:"",detailInfo:""}},mounted:function(){this.getTypeList(),this.getList()},beforeRouteLeave:function(t,e,a){this.$destroy(),a()},methods:{getTypeList:function(){var t=this;this.request(s["a"].getComplaintTypeList,{}).then((function(e){e&&e.length&&(e=e.map((function(t){return{value:t.key,label:t.value}}))),t.searchTypeOptions=e||[]}))},onSearch:function(){this.getList(!0)},tabChange:function(t){t!=this.tabActive&&(this.tabActive=t,this.$set(this.pagination,"current",1),this.getList(!0))},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&this.$set(this.pagination,"current",1);var a={status:this.tabActive,type:void 0==this.search_type?"":this.search_type,keywords:this.search_content,page:this.pagination.current,page_size:this.pagination.pageSize};this.request(s["a"].getComplaintList,a).then((function(e){t.list=e.data||[],t.pagination.total=e.total||0}))},searchTypeChange:function(){this.getList(!0)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.getList()},detail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.detailInfo=t,this.modalVisible=!0},del:function(t){var e=this;this.$confirm({title:"提示",content:"确定删除吗？",onOk:function(){var a={id:t};e.request(s["a"].deleteComplaint,a).then((function(t){e.$message.success("删除成功",1,(function(){e.list.length<2&&1!=e.pagination.current&&e.$set(e.pagination,"current",e.pagination.current-1),e.getList(!0)}))}))},onCancel:function(){}})},previewOpt:function(t){this.previewImage=t,this.previewVisible=!0},statusChange:function(t,e){var a=this,i={id:e.id,status:t?1:0};this.request(s["a"].changeComplaintStatus,i).then((function(t){var n=a.list.findIndex((function(t){return t.id==e.id}));a.$set(a.list[n],"status",i.status)}))}}},c=o,l=(a("62ac"),a("0c7c")),r=Object(l["a"])(c,i,n,!1,null,"30aeda16",null);e["default"]=r.exports}}]);