(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-971255be"],{c801:function(e,t,a){},cd55:function(e,t,a){"use strict";a("c801")},de8f:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,rowKey:"id",loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"enclosure",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.enclosureList(i.id)}}},[e._v("附件")])])}},{key:"remark",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.remarkList(i.id)}}},[e._v("备注")])])}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.editDecorationOrder(i.edit_url)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.delDecorationOrder(i.id)}}},[e._v("删除")])],1)}}])}),e.visible?a("a-modal",{attrs:{title:"模板编辑",width:1300,footer:null,visible:e.visible,maskClosable:!1,confirmLoading:!1},on:{cancel:e.handleCancel}},[a("iframe",{ref:"editDecorationOrderIframe",staticStyle:{width:"100% !important",height:"550px !important"},attrs:{id:"myframe",frameborder:"0",src:e.editUrl}})]):e._e(),a("a-modal",{attrs:{title:"附件",width:600,footer:null,visible:e.enclosureVisible,maskClosable:!1,confirmLoading:!1},on:{cancel:e.enclosureHandleCancel}},[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",round:"",size:"small"},on:{click:function(t){return e.uploadFileSingle()}}},[e._v("上传附件")]),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.enclosureColumns,"data-source":e.enclosureData,pagination:e.enclosurePagination,rowKey:"id",loading:e.enclosureLoading},on:{change:e.table_change_enclosure},scopedSlots:e._u([{key:"enclosureAction",fn:function(t,i){return a("span",{},[a("a",{attrs:{href:i.file_url_path,target:"_blank"}},[e._v("查看图片")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.delEnclosure(i.file_id)}}},[e._v("删除")])],1)}}])}),e.uploadFileDialog?a("a-modal",{attrs:{title:"上传附件",center:!0,footer:null,visible:e.uploadFileDialog,width:"450px"},on:{cancel:e.enclosureFileHandleCancel}},[a("a-row",[a("a-col",{staticStyle:{"text-align":"-webkit-center"},attrs:{span:24}},[a("a-upload",{attrs:{name:"file",multiple:!0,data:e.uploadFileData,action:"/v20/public/index.php/community/village_api.ChatSidebar/uploadFile",headers:e.headers},on:{change:e.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传文件 ")],1)],1)],1),a("a-col",{staticStyle:{"text-align":"-webkit-center",padding:"25px"},attrs:{span:24}},[e._v(" 类型支持：EXCEL、PDF、WORD、图片 ")])],1)],1):e._e()],1),a("a-modal",{attrs:{title:"备注",width:600,footer:null,visible:e.remarkVisible,maskClosable:!1,confirmLoading:!1},on:{cancel:e.remarkHandleCancel}},[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",round:"",size:"small"},on:{click:function(t){return e.addRemarkSingle()}}},[e._v("添加备注")]),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.remarkColumns,"data-source":e.remarkData,pagination:e.remarkPagination,rowKey:"id",loading:e.remarkLoading},on:{change:e.table_change_remark},scopedSlots:e._u([{key:"remarkAction",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.editRemark(i.remark_id,i.remark)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.delRemark(i.remark_id)}}},[e._v("删除")])],1)}}])}),e.addRemarkListShow?a("a-modal",{attrs:{title:e.remarkTitle,center:!0,footer:null,visible:e.addRemarkListShow,width:"450px"},on:{cancel:e.remarkAddHandleCancel}},[a("a-row",[a("a-col",{staticStyle:{"text-align":"-webkit-center"},attrs:{span:24}},[a("a-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:e.remarkVal,callback:function(t){e.remarkVal=t},expression:"remarkVal"}}),a("a-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.trueAddRemark()}}},[e._v("确 定")])],1)],1)],1):e._e()],1)],1)},n=[],r=(a("a9e3"),a("ac1f"),a("841c"),a("b0c0"),a("a0e0")),o=[{title:"ID",dataIndex:"id",key:"id"},{title:"模板标题",dataIndex:"title",key:"title"},{title:"申请填写时间",dataIndex:"add_time",key:"add_time"},{title:"附件",scopedSlots:{customRender:"enclosure"}},{title:"备注",scopedSlots:{customRender:"remark"}},{title:"状态",dataIndex:"diy_tatus_txt",key:"diy_tatus_txt"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],s=[],l=[{title:"文件名称",dataIndex:"title",key:"title"},{title:"上传人",dataIndex:"account",key:"account"},{title:"上传时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"enclosureAction"}}],c=[],d=[{title:"备注内容",dataIndex:"remark",key:"remark"},{title:"添加人",dataIndex:"account",key:"account"},{title:"最新记录时间",dataIndex:"add_time_text",key:"add_time_text"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"remarkAction"}}],u=[],m={name:"decorationOrder",components:{},data:function(){return{pagination:{current:1,pageSize:10,total:10},enclosurePagination:{current:1,pageSize:10,total:10},remarkPagination:{current:1,pageSize:10,total:10},search:{page:1},enclosureSearch:{page:1},remarkSearch:{page:1},headers:{authorization:"authorization-text"},uploadFileData:{path:"writeFile"},loading:!1,enclosureLoading:!1,uploadFileDialog:!1,remarkLoading:!1,addRemarkListShow:!1,visible:!1,enclosureVisible:!1,remarkTitle:"",remarkVisible:!1,data:s,columns:o,enclosureData:c,enclosureColumns:l,diyId:0,remarkData:u,remarkColumns:d,remarkVal:"",type:"add",remarkId:0,editUrl:"",iframe:""}},props:{pigcmsId:{type:Number,default:0},uid:{type:Number,default:0}},created:function(){this.getList(1)},methods:{getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.loading=!0,1===t&&this.$set(this.pagination,"current",1),this.search["page"]=this.pagination.current,this.search["uid"]=this.uid,this.request(r["a"].getDecorationOrderList,this.search).then((function(t){console.log(t),e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.data=t.list,e.loading=!1}))},table_change:function(e){var t=this;console.log("e",e),e.current&&e.current>0&&(t.$set(t.pagination,"current",e.current),t.getList())},handleCancel:function(e){this.visible=!1},editDecorationOrder:function(e){var t=this;this.editUrl=e,this.visible=!0,this.$nextTick((function(){var e=document.querySelector("#myframe");e.contentWindow.addEventListener("click",(function(e){console.log("返回触发此事件的元素（事件的目标节点）",e.target),console.log("返回触发此事件的元素（事件的目标节点）文本====innerText",e.target.innerText),-1!==e.target.innerText.indexOf("保存")&&(t.visible=!1,t.$message.success("修改成功"),t.getList(1)),-1!==e.target.innerText.indexOf("返回")&&(t.visible=!1,t.getList(1))}))}))},enclosureList:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.enclosureLoading=!0,this.diyId=e,1===a&&this.$set(this.enclosurePagination,"current",1),this.enclosureSearch["page"]=this.enclosurePagination.current,this.enclosureSearch["diy_id"]=e,this.request(r["a"].getWriteFileList,this.enclosureSearch).then((function(e){console.log(e),t.enclosurePagination.total=e.count?e.count:0,t.enclosurePagination.pageSize=e.total_limit?e.total_limit:10,t.enclosureData=e.list,t.enclosureLoading=!1,t.enclosureVisible=!0}))},enclosureHandleCancel:function(){this.enclosureVisible=!1},table_change_enclosure:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.enclosurePagination,"current",e.current),t.enclosureList(this.diyId))},uploadFileSingle:function(){this.uploadFileDialog=!0},handleChange:function(e){var t=this;if("done"===e.file.status)if(console.log(e),1e3===e.file.response.status){var a={diy_id:this.diyId,file_remark:e.file.name,file_type:e.file.type,file_url:e.file.response.data.url};this.request(r["a"].addWriteFile,a).then((function(e){t.enclosureList(t.diyId,1)})),this.$message.success("".concat(e.file.name," 图片上传成功"))}else this.$message.error("".concat(e.file.name," 图片上传失败."));else"error"===e.file.status&&this.$message.error("".concat(e.file.name," 图片上传失败."))},enclosureFileHandleCancel:function(){this.uploadFileDialog=!1},delEnclosure:function(e){var t=this,a={file_id:e};this.request(r["a"].delWriteFileList,a).then((function(e){t.$message.success("删除成功"),t.enclosureList(t.diyId,1)}))},remarkHandleCancel:function(){this.remarkVisible=!1},table_change_remark:function(e){var t=this;e.current&&e.current>0&&(t.$set(t.remarkPagination,"current",e.current),t.remarkList(this.diyId))},remarkList:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.remarkLoading=!0,this.diyId=e,1===a&&this.$set(this.remarkPagination,"current",1),this.remarkSearch["page"]=this.remarkPagination.current,this.remarkSearch["diy_id"]=e,this.request(r["a"].getRemarkList,this.remarkSearch).then((function(e){console.log(e),t.remarkPagination.total=e.count?e.count:0,t.remarkPagination.pageSize=e.total_limit?e.total_limit:10,t.remarkData=e.list,t.remarkLoading=!1,t.remarkVisible=!0}))},addRemarkSingle:function(){this.remarkTitle="添加备注",this.type="add",this.remarkVal="",this.remarkId=0,this.addRemarkListShow=!0},remarkAddHandleCancel:function(){this.addRemarkListShow=!1},trueAddRemark:function(){var e=this,t={diy_id:this.diyId,remark_value:this.remarkVal,remark_id:this.remarkId,type:this.type};this.request(r["a"].addRemark,t).then((function(t){e.remarkList(e.diyId,1),e.addRemarkListShow=!1}))},editRemark:function(e,t){this.remarkTitle="编辑备注",this.type="update",this.remarkId=e,this.remarkVal=t,this.addRemarkListShow=!0},delRemark:function(e){var t=this,a={remark_id:e};this.request(r["a"].delRemark,a).then((function(e){t.$message.success("删除成功"),t.remarkList(t.diyId,1)}))}}},h=m,k=(a("cd55"),a("2877")),g=Object(k["a"])(h,i,n,!1,null,null,null);t["default"]=g.exports}}]);