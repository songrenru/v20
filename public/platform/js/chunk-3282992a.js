(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3282992a","chunk-2d0be317"],{"2ee3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1200,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("span",[a("input",{ref:"tempUploadFile",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadPic}}),a("a-button",{staticStyle:{"margin-bottom":"5px"},attrs:{type:"primary",title:"请选择需要上传的文件，大小不超过50M"},on:{click:function(e){return t.clickUpload()}}},[t._v("上传附件")]),t.uploadFileName?a("a",{staticStyle:{color:"red",margin:"0 10px"}},[t._v("当前【"+t._s(t.uploadFileName)+"】上传中")]):t._e(),a("a",{staticStyle:{"margin-left":"10px"}},[t._v("类型支持：EXCEL、PDF、WORD、图片")])],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"see",fn:function(e,n){return a("span",{},[n.file_url?a("a",{on:{click:function(e){return t.lookImg(n.file_url)}}},[n.is_image?a("a",[t._v("查看图片")]):a("a",[t._v("下载文件")])]):a("a",[t._v("--")])])}},{key:"desc",fn:function(e,n){return a("span",{},[a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?(操作后可能不能恢复！)","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.file_id)}}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}])})],1)},i=[],s=(a("ac1f"),a("841c"),a("b0c0"),a("a0e0")),o=[{title:"文件名称",dataIndex:"file_remark",key:"file_remark"},{title:"上传人",dataIndex:"account",key:"account"},{title:"查看",dataIndex:"see",key:"see",scopedSlots:{customRender:"see"}},{title:"上传时间",dataIndex:"add_time",key:"add_time"},{title:"操作",dataIndex:"desc",key:"desc",scopedSlots:{customRender:"desc"}}],l=[],c={name:"balanceList",filters:{},components:{},data:function(){return{reply_content:"",pagination:{current:1,pageSize:10,total:10,showTotal:function(t){return"共 ".concat(t," 条")}},search:{uid:"",keyword:"",page:1},form:this.$form.createForm(this),visible:!1,loading:!1,data:l,columns:o,title:"",confirmLoading:!1,uploadVisible:!1,uploadFileName:!1}},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;""!=e&&(this.title=e,this.$set(this.pagination,"current",1)),a>0&&(this.search["template_id"]=a),n>0&&(this.search["value_id"]=n),this.uploadFileName=!1,this.loading=!0,this.search["page"]=this.pagination.current,this.request(s["a"].publicRentalEnclosureList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.loading=!1,t.confirmLoading=!0,t.visible=!0}))},lookImg:function(t){window.open(t,"_blank")},deleteConfirm:function(t){var e=this;this.request(s["a"].publicRentalEnclosureDel,{id:t}).then((function(t){e.getList(),e.$message.success("删除成功")}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search.keyword="",this.search.page=1,this.table_change({current:1,pageSize:10,total:10})},uploadPic:function(t){var e=this,a=t.target;if(this.uploadFileName=!1,a.files&&!(a.files.length<=0)){var n=a.files[0],i=new FormData,o=this.search,l="";i.append("file",n),this.loading=!0,this.request(s["a"].publicRentalUpload,i).then((function(t){t&&(e.uploadFileName=t.file.name,l=t.file.name,o["file"]=t,e.request(s["a"].publicRentalAddFile,o).then((function(t){e.loading=!1,e.getList(),e.$message.success("【"+l+"】上传成功")})).catch((function(t){e.loading=!1})))})).catch((function(t){e.loading=!1}))}},clickUpload:function(){this.$refs.tempUploadFile.click()}}},r=c,u=a("0c7c"),d=Object(u["a"])(r,n,i,!1,null,null,null);e["default"]=d.exports},3320:function(t,e,a){"use strict";a("ad46")},aae8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-suggestions-list-box userList"},[a("div",{staticClass:"content-p1"}),a("div",{staticClass:"search-box"},[a("a-row",{attrs:{gutter:48}},[a("a-col",{staticStyle:{"padding-right":"0 !important"},attrs:{md:6}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},on:{change:t.handleSelectChange},model:{value:t.search.key,callback:function(e){t.$set(t.search,"key",e)},expression:"search.key"}},t._l(t.searchType,(function(e,n){return a("a-select-option",{attrs:{value:e.key}},[t._v(" "+t._s(e.value)+" ")])})),1),a("a-input",{staticStyle:{width:"63%","margin-left":"5px"},attrs:{placeholder:"请输入关键字"},model:{value:t.search.value,callback:function(e){t.$set(t.search,"value",e)},expression:"search.value"}})],1)],1),a("a-col",{staticClass:"pdno",attrs:{md:7}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("申请提交时间：")]),a("a-range-picker",{on:{change:t.ondateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}})],1)],1),a("a-col",{staticClass:"pdno",attrs:{md:4}},[a("a-input-group",{attrs:{compact:""}},[a("p",{staticStyle:{"margin-top":"5px"}},[t._v("状态：")]),a("a-select",{staticClass:"input1",attrs:{placeholder:"请选择状态"},model:{value:t.search.flow_status,callback:function(e){t.$set(t.search,"flow_status",e)},expression:"search.flow_status"}},t._l(t.status_list,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.key}},[t._v(" "+t._s(e.value)+" ")])})),1)],1)],1),a("a-col",{staticClass:"but-box pdno",attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v("查询")]),a("a-button",{on:{click:function(e){return t.resetList()}}},[t._v("重置")])],1)],1)],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"enclosure",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){t.$refs.EnclosureModel.getList("编号:【"+n.number+"】 姓名:【"+n.nickname+"】 模板标题:【"+n.template_title+"】附件",n.template_id,n.value_id)}}},[t._v("查看附件")])])}},{key:"flow_status",fn:function(e){return a("span",{},[1*e==12?a("a-tag",{attrs:{color:"green"}},[t._v(" 已通过 ")]):1*e==11?a("a-tag",{attrs:{color:"red"}},[t._v(" 已拒绝 ")]):a("a-tag",[t._v(" 待审核 ")])],1)}},{key:"action",fn:function(e,n){return a("span",{},[n.button.is_see?a("a",{staticClass:"but_sty",on:{click:function(e){return t.jumpLink(n.see_url,n,1e3)}}},[t._v("查看")]):t._e(),n.button.is_edit?a("a",{staticClass:"but_sty",on:{click:function(e){return t.jumpLink(n.edit_url,n,1300)}}},[t._v("编辑")]):t._e(),n.button.is_del?a("a-popconfirm",{staticClass:"ant-dropdown-link but_sty",attrs:{title:"确认删除?(操作后可能不能恢复！)","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(n.id)},cancel:t.delCancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])]):t._e()],1)}}])}),a("applyEnclosure",{ref:"EnclosureModel",on:{ok:t.callback}}),a("a-drawer",{attrs:{title:t.showTitle,width:t.showWidth,visible:t.showData},on:{close:t.handleUploadCancel}},[t.showData?a("iframe",{attrs:{src:t.showUrl,width:"100%",height:"800px"}}):t._e()])],1)},i=[],s=(a("7d24"),a("dfae")),o=(a("ac1f"),a("841c"),a("a0e0")),l=a("2ee3"),c=[{title:"编号",dataIndex:"number",key:"number"},{title:"姓名",dataIndex:"nickname",key:"nickname"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"申请提交时间",dataIndex:"add_time",key:"add_time"},{title:"模板标题",dataIndex:"template_title",key:"template_title"},{title:"附件",dataIndex:"enclosure",key:"enclosure",scopedSlots:{customRender:"enclosure"}},{title:"状态",dataIndex:"flow_status",key:"flow_status",width:"12%",scopedSlots:{customRender:"flow_status"}},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"},width:"18%"}],r=[],u={name:"applyList",filters:{},components:{applyEnclosure:l["default"],"a-collapse":s["a"],"a-collapse-panel":s["a"].Panel},data:function(){return{pagination:{current:1,pageSize:10,total:10,showTotal:function(t){return"共 ".concat(t," 条")}},search:{key:"r.number",value:"",flow_status:0,page:1,date:[]},form:this.$form.createForm(this),visible:!1,loading:!1,data:r,columns:c,status_list:[],searchType:[{key:"r.number",value:"编号"},{key:"u.nickname",value:"姓名"},{key:"u.phone",value:"手机号"}],showData:!1,showUrl:"",showTitle:"",showWidth:800}},activated:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,this.showUrl="",this.showData=!1,this.showTitle="",this.search["page"]=this.pagination.current,this.request(o["a"].publicRentalApplyList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.status_list=e.search_hotel_status,t.loading=!1}))},ondateChange:function(t,e){this.search.date=e,console.log(t,e)},callback:function(t){this.getList()},deleteConfirm:function(t){var e=this;this.request(o["a"].publicRentalApplyDel,{id:t}).then((function(t){e.getList(),e.$message.success("删除成功")}))},delCancel:function(){},table_change:function(t){var e=this;console.log("e",t),t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},searchList:function(){console.log("search",this.search),this.table_change({current:1,pageSize:10,total:10})},resetList:function(){this.search={key:this.search.key,value:"",flow_status:0,page:1,date:[]},this.table_change({current:1,pageSize:10,total:10})},jumpLink:function(t,e,a){this.showTitle="编号：【"+e.number+"】 姓名：【"+e.nickname+"】 模板标题：【"+e.template_title+"】",this.showUrl=t,this.showWidth=a,this.showData=!0},handleUploadCancel:function(){this.showData=!1,this.getList()},handleSelectChange:function(t){this.search.key=t,console.log("selected ".concat(t))}}},d=u,h=(a("3320"),a("0c7c")),p=Object(h["a"])(d,n,i,!1,null,"4764b83f",null);e["default"]=p.exports},ad46:function(t,e,a){}}]);