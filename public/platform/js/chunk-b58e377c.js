(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b58e377c","chunk-7aefb6b6"],{"0229":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"search-box",staticStyle:{"margin-bottom":"10px"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("label",{staticStyle:{"margin-top":"5px"}},[t._v("新闻标题：")]),e("a-input",{staticStyle:{width:"70%"},model:{value:t.search.title,callback:function(a){t.$set(t.search,"title",a)},expression:"search.title"}})],1)],1),e("a-col",{staticStyle:{"margin-top":"5px"},attrs:{md:2,sm:1}},[t._v(" 发布时间： ")]),e("a-col",{staticStyle:{"margin-left":"-55px"},attrs:{md:6,sm:1}},[e("a-range-picker",{attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(a){t.search_data=a},expression:"search_data"}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-col",{attrs:{md:2,sm:2}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(a){return t.searchList()}}},[t._v(" 查询 ")])],1),e("a-col",{attrs:{md:2,sm:2}},[e("a-button",{on:{click:function(a){return t.resetList()}}},[t._v("重置")])],1)],1)],1),e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(a){return t.$refs.createModal.add(t.cat_id)}}},[t._v("新建")])],1),e("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(a,i){return e("span",{},[e("a",{on:{click:function(a){return t.$refs.seeModal.edit(i.build_id,i.cat_id,i.title)}}},[t._v("查看")]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(a){return t.$refs.createModal.edit(i.build_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(a){return t.deleteConfirm(i.build_id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])]),e("a-divider",{attrs:{type:"vertical"}}),e("router-link",{staticStyle:{color:"#1890ff"},attrs:{to:{name:"ReplyList",params:{build_id:i.build_id}}}},[t._v("评论列表")])],1)}},{key:"status",fn:function(a){return e("span",{},[e("a-badge",{attrs:{status:t._f("statusTypeFilter")(a),text:t._f("statusFilter")(a)}})],1)}},{key:"name",fn:function(a){return[t._v(" "+t._s(a.first)+" "+t._s(a.last)+" ")]}}])}),e("news-info",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}}),e("news-see",{ref:"seeModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)],1)},s=[],l=(e("ac1f"),e("841c"),e("567c")),n=e("f5ae"),o=e("5492"),r={1:{status:"success",text:"开启"},2:{status:"default",text:"禁止"}},c={name:"NewsList",components:{NewsInfo:n["default"],NewsSee:o["default"]},data:function(){var t=this;return{list:[],visible:!1,confirmLoading:!1,sortedInfo:null,pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(a,e){return t.onTableChange(a,e)},onChange:function(a,e){return t.onTableChange(a,e)}},search:{page:1},page:1,search_data:[],cat_id:"",loadPost:!1}},mounted:function(){this.cat_id=this.$route.params.cat_id,this.cat_id?sessionStorage.setItem("lesson_cat_id",this.cat_id):this.cat_id=sessionStorage.getItem("lesson_cat_id"),console.log("idddddd",this.cat_id),this.getPartyBuild()},filters:{statusFilter:function(t){return r[t].text},statusTypeFilter:function(t){return r[t].status}},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var a=[{title:"新闻标题",dataIndex:"title",key:"title"},{title:"发布时间",dataIndex:"add_time",key:"add_time"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return a}},activated:function(){this.cat_id=this.$route.params.cat_id,this.cat_id?sessionStorage.setItem("lesson_cat_id",this.cat_id):this.cat_id=sessionStorage.getItem("lesson_cat_id"),console.log("idddddd",this.cat_id),this.getPartyBuild()},methods:{callback:function(t){console.log(t)},getPartyBuild:function(){var t=this;if(this.loadPost)return!1;this.loadPost=!0,this.search["page"]=this.pagination.current,this.search["limit"]=this.pagination.pageSize,this.search["cat_id"]=this.cat_id,this.request(l["a"].getPartyBuildList,this.search).then((function(a){t.loadPost=!1,console.log("res",a),t.list=a.list,t.cat_id=a.cat_id,t.pagination.total=a.count?a.count:0,t.pagination.pageSize=a.total_limit?a.total_limit:10}))},onTableChange:function(t,a){this.pagination.current=t,this.pagination.pageSize=a,this.getPartyBuild(),console.log("onTableChange==>",t,a)},tableChange:function(t){var a=this;t.current&&t.current>0&&(a.pagination.current=t.current,a.getPartyBuild())},cancel:function(){},handleOks:function(){this.getPartyBuild()},dateOnChange:function(t,a){this.search.date=a,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.tableChange({current:1,pageSize:10,total:10})},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={key_val:"title",value:"",status:"",date:[],page:1},this.search_data=[],this.tableChange({current:1,pageSize:10,total:10})},deleteConfirm:function(t){var a=this;this.request(l["a"].delPartyBuild,{build_id:t}).then((function(t){a.tableChange({current:1,pageSize:10,total:10}),a.$message.success("删除成功")}))},weChatNotice:function(t){var a=this;this.request(l["a"].partyWeChatNotice,{id:t}).then((function(t){a.tableChange({current:1,pageSize:10,total:10}),a.$message.success("已发送")}))}}},d=c,u=(e("813d"),e("0c7c")),h=Object(u["a"])(d,i,s,!1,null,null,null);a["default"]=h.exports},2205:function(t,a,e){},"4f5e":function(t,a,e){},5492:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"新闻标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("span",{staticClass:"f2206"},[t._v(t._s(t.detail.title))])]),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"新闻封面图",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-row",[e("div",[t.imageUrl?e("img",{staticClass:"imgname",attrs:{src:t.imageUrl,alt:"img"}}):t._e()])])],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"发布内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:40}},[e("div",{domProps:{innerHTML:t._s(t.detail.content)}})])],1),e("a-form-item",{attrs:{label:"是否热门",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[1==t.detail.is_hot?e("span",{staticClass:"f2206"},[t._v("是")]):t._e(),2==t.detail.is_hot?e("span",{staticClass:"f2206"},[t._v("否")]):t._e()])],1),e("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[1==t.detail.status?e("span",{staticClass:"f2206"},[t._v("是")]):t._e(),2==t.detail.status?e("span",{staticClass:"f2206"},[t._v("否")]):t._e()])],1)],1)],1)],1)},s=[],l=e("53ca"),n=e("567c"),o={data:function(){return{title:"新建",labelCol:{xs:{span:20},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{meeting_id:0,title:"",content:"",status:1,is_hot:1,cat_id:0,area_id:0,title_img:""},meeting_id:0,imageUrl:"",img:"",cat_id:0,isClear:!1,loading:!1}},components:{},mounted:function(){},methods:{edit:function(t,a,e){this.title="查看【"+e+"】",this.visible=!0,this.cat_id=a,this.build_id=t,this.getEditInfo(),console.log(this.title)},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.cat_id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(n["a"].getPartyBuildInfo,{build_id:this.build_id}).then((function(a){console.log(a),t.detail={build_id:0,title:"",content:"",status:0,is_hot:0,cat_id:0,area_id:0,title_img:""},t.checkedKeys=[],"object"==Object(l["a"])(a)&&(t.detail=a,t.cat_id=a.cat_id,t.build_id=a.build_id,t.imageUrl=a.title_img,t.img=a.title_img),console.log("detail",t.detail)}))}}},r=o,c=(e("dfe0"),e("0c7c")),d=Object(c["a"])(r,i,s,!1,null,"6e377f42",null);a["default"]=d.exports},"6f11a":function(t,a,e){},"813d":function(t,a,e){"use strict";e("6f11a")},dab9:function(t,a,e){"use strict";e("2205")},dfe0:function(t,a,e){"use strict";e("4f5e")},f5ae:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"新闻标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入新闻标题！"}]}],expression:"['title', {initialValue:detail.title,rules: [{required: true, message: '请输入新闻标题！'}]}]"}]})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"新闻封面图",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-row",[e("div",[e("a-upload",{staticClass:"avatar-uploader",attrs:{name:"img","list-type":"picture-card","show-upload-list":!1,action:t.upload_url,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[t.imageUrl?e("img",{staticClass:"imgname",attrs:{src:t.imageUrl,alt:"img"}}):e("div",[e("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传 ")])],1)]),e("div",{staticStyle:{float:"right","margin-top":"-110px"}},[t._v("建议尺寸：295*412px")])],1)])],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"发布内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:20}},[e("rich-text",{attrs:{info:t.detail.content},on:{"update:info":function(a){return t.$set(t.detail,"content",a)}}})],1)],1),e("a-form-item",{attrs:{label:"是否热门",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_hot",{initialValue:t.detail.is_hot}],expression:"['is_hot',{initialValue:detail.is_hot}]"}]},[e("a-radio",{attrs:{value:1}},[t._v("是")]),e("a-radio",{attrs:{value:2}},[t._v("否")])],1)],1)],1),e("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:t.detail.status}],expression:"['status',{initialValue:detail.status}]"}]},[e("a-radio",{attrs:{value:1}},[t._v("开启")]),e("a-radio",{attrs:{value:2}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)},s=[],l=e("53ca"),n=e("567c"),o=e("3683"),r=e("6ec16");function c(t,a){var e=new FileReader;e.addEventListener("load",(function(){return a(e.result)})),e.readAsDataURL(t)}var d={data:function(){return{title:"新建",labelCol:{xs:{span:20},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{meeting_id:0,title:"",content:"",status:1,is_hot:1,cat_id:0,area_id:0,title_img:""},meeting_id:0,imageUrl:"",upload_url:"/v20/public/index.php/"+n["a"].uploadMeeting,img:"",cat_id:0,isClear:!1,loading:!1}},components:{Editor:o["a"],RichText:r["a"]},mounted:function(){},methods:{change:function(t){console.log(t)},onSelect:function(t,a){console.log("selected",t,a)},onCheck:function(t,a){console.log("onCheck",t,a),this.detail.community=t,this.checkedKeys=t,console.log("community",this.detail.community)},add:function(t){console.log("123",t),this.title="新建",this.visible=!0,this.cat_id=t,this.build_id=0,this.detail={build_id:0,title:"",content:" ",status:1,is_hot:1,cat_id:0,area_id:0,title_img:""},console.log(666,this.detail),this.imageUrl=""},edit:function(t,a){this.visible=!0,this.cat_id=a,this.build_id=t,this.getEditInfo(),console.log(this.build_id),this.build_id>0?this.title="编辑":this.title="新建",console.log(this.title)},handleSubmit:function(){var t=this,a=this.form.validateFields;this.confirmLoading=!0,a((function(a,e){var i;a?t.confirmLoading=!1:(e.cat_id=t.cat_id?t.cat_id:0,e.build_id=t.build_id,e.title_img=t.img,e.content=t.detail.content,console.log(e),i=t.detail.cat_id>0?n["a"].savePartyBuild:n["a"].addPartyBuild,t.request(i,e).then((function(a){t.detail.build_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",e)}),1500)})).catch((function(a){t.confirmLoading=!1})),console.log("values",e))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.cat_id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(n["a"].getPartyBuildInfo,{build_id:this.build_id}).then((function(a){console.log(a),t.detail={build_id:0,title:"",content:"",status:0,is_hot:0,cat_id:0,area_id:0,title_img:""},t.checkedKeys=[],"object"==Object(l["a"])(a)&&(t.detail=a,t.cat_id=a.cat_id,t.build_id=a.build_id,t.imageUrl=a.title_img,t.img=a.title_img),console.log("detail",t.detail)}))},handleChange:function(t){var a=this;"uploading"!==t.file.status?"done"===t.file.status&&(c(t.file.originFileObj,(function(t){a.imageUrl=t,a.loading=!1})),1e3===t.file.response.status&&(this.img=t.file.response.data)):this.loading=!0},beforeUpload:function(t){var a="image/jpeg"===t.type||"image/png"===t.type;a||this.$message.error("You can only upload JPG file!");var e=t.size/1024/1024<2;return e||this.$message.error("Image must smaller than 2MB!"),a&&e}}},u=d,h=(e("dab9"),e("0c7c")),m=Object(h["a"])(u,i,s,!1,null,null,null);a["default"]=m.exports}}]);