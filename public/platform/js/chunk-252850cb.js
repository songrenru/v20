(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-252850cb"],{"0496":function(t,e,i){"use strict";i("d4e3")},"15a8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{staticStyle:{"margin-top":"100px"},attrs:{title:t.title,width:900,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[i("div",{staticClass:"clearfix"},[i("a-upload",{attrs:{name:"img","list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview}}),i("a-modal",{staticStyle:{"margin-top":"10px"},attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancels}},[i("img",{staticStyle:{"margin-top":"20px",width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)])],1)],1)},a=[],s=i("1da1"),o=i("53ca"),r=(i("96cf"),i("d3b7"),i("567c"));function l(t){return new Promise((function(e,i){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return i(t)}}))}var c={data:function(){return{title:"查看附件",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),assets_num_id:0,fileList:[],previewVisible:!1,previewImage:""}},mounted:function(){},methods:{look:function(t,e){this.title="查看附件",this.visible=!0,this.assets_num_id=e,this.id=t,this.getEditInfo()},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},handleCancels:function(){var t=this;this.previewVisible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(r["a"].getMaintainInfo,{id:this.id,assets_num_id:this.assets_num_id}).then((function(e){"object"==Object(o["a"])(e.info)&&(t.fileList=e.info.imgList)}))},handlePreview:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,l(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},handleChange:function(t){var e=t.fileList;this.fileList=e,console.log("th",this.fileList)}}},u=c,d=(i("4d2c"),i("2877")),f=Object(d["a"])(u,n,a,!1,null,null,null);e["default"]=f.exports},"4d2c":function(t,e,i){"use strict";i("738a")},6325:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:1100,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:1e3}},[i("div",{staticClass:"table-operator",staticStyle:{"margin-bottom":"10px"}},[i("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add(t.assets_num_id)}}},[t._v("新增记录")])],1),i("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"img_path",fn:function(e,n){return i("span",{},[i("a",{on:{click:function(e){return t.$refs.createModals.look(n.id,t.assets_num_id)}}},[t._v("查看")])])}},{key:"action",fn:function(e,n){return i("span",{},[i("a",{on:{click:function(e){return t.$refs.createModal.edit(n.id,t.assets_num_id)}}},[t._v("编辑")])])}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])}),i("maintain",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}}),i("accessory",{ref:"createModals",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)],1)},a=[],s=i("567c"),o=i("8a84"),r=i("15a8"),l={components:{maintain:o["default"],accessory:r["default"]},data:function(){return{title:"维修记录",visible:!1,confirmLoading:!1,list:[],sortedInfo:null,pagination:{pageSize:10,total:10},search:{page:1},page:1,id:0,assets_num_id:0}},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"维修人",dataIndex:"name",key:"name"},{title:"联系方式",dataIndex:"phone",key:"phone"},{title:"维修费用",dataIndex:"price",key:"price"},{title:"维修时间",dataIndex:"time",key:"time"},{title:"附件",dataIndex:"",key:"img_path",scopedSlots:{customRender:"img_path"}},{title:"备注",dataIndex:"remark",key:"remark"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},filters:{statusFilter:function(t){return statusMap[t].text},statusTypeFilter:function(t){return statusMap[t].status}},mounted:function(){},methods:{look:function(t){this.title="维修记录",this.visible=!0,this.assets_num_id=t,this.id=0,this.getMaintainList()},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getMaintainList())},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.d="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},handleOks:function(){this.getMaintainList()},getMaintainList:function(){var t=this;this.request(s["a"].getMaintainList,{assets_num_id:this.assets_num_id,page:this.page}).then((function(e){console.log(e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:20}))}}},c=l,u=(i("0496"),i("2877")),d=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=d.exports},"738a":function(t,e,i){},d4e3:function(t,e,i){}}]);