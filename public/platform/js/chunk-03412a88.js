(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03412a88","chunk-03b06d58","chunk-4d846e32","chunk-62432244","chunk-72139018","chunk-2d0b6a79"],{"00d3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"编辑",visible:t.visible,width:"650px",height:"600px",maskClosable:!1},on:{cancel:t.handleCancle,ok:t.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"500px"}},[a("a-form",t._b({attrs:{id:"components-form-demo-validate-other",form:t.form}},"a-form",t.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),a("a-form-item",{attrs:{label:"通用广告"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==t.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:t.switchComplete}})],1),0==t.detail.now_adver.currency?a("a-form-item",{attrs:{label:"所在区域"}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{initialValue:t.detail.now_adver.area,rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{initialValue:detail.now_adver.area,rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:t.areaList,placeholder:"请选择省市区"}})],1):t._e(),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[t.pic_show?a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):t._e(),t.pic_show?a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:t.removeImage}}):t._e(),a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"group/adver"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:t.handleUploadChange,preview:t.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v(" 选择图片 ")])],1):t._e()]),a("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:t.detail.now_adver.url,rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url', {initialValue:detail.now_adver.url,rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),a("a",{staticClass:"ant-form-text",on:{click:t.setLinkBases}},[t._v(" 从功能库选择 ")])],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),a("span",{staticClass:"ant-form-text"},[t._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.detail.now_adver.status,valuePropName:"checked"}],expression:"['status', {initialValue:detail.now_adver.status == 1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)])},o=[],r=a("1da1"),n=(a("a434"),a("96cf"),a("8a11")),s=(a("c2d1"),{name:"decorateAdverEdit",data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",edited:!1,cat_key:"",title:title,areaList:"",detail:"",previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(t,e){var a=this;this.visible=!0,this.id=t,this.title=e,this.getAllArea(),this.request(n["a"].getEditAdver,{id:t}).then((function(t){a.removeImage(),a.detail=t,a.detail.now_adver.pic&&(a.fileList=[{uid:"-1",name:"当前图片",status:"done",url:a.detail.now_adver.pic}],a.length=a.fileList.length,a.pic=a.detail.now_adver.pic,a.pic_show=!0)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var t=this;this.request(n["a"].getAllArea,{type:1}).then((function(e){console.log(e),t.areaList=e}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){console.log(t),t?alert(2222):(a.id=e.id,a.currency=1==a.currency?1:0,a.pic=e.pic,a.areaList||(a.areaList=[]),e.request(n["a"].addGroupAdver,a).then((function(t){e.id>0?(e.$message.success("编辑成功"),e.$emit("update",{now_cat_id:e.detail.now_adver.cat_id})):e.$message.success("添加成功"),setTimeout((function(){e.pic="",e.form=e.$form.createForm(e),e.visible=!1,e.$emit("ok",a)}),1500)})))}))},switchComplete:function(t){this.detail.now_adver.currency=t},changeAppType:function(t){this.detail.now_adver.app_open_type=t},handleUploadChange:function(t){var e=t.fileList;this.fileList=e,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,getBase64(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(e){console.log("handleOk",e),t.url=e.url,t.$nextTick((function(){t.form.setFieldsValue({url:t.url})}))}})}}}),l=s,c=(a("a281"),a("2877")),d=Object(c["a"])(l,i,o,!1,null,null,null);e["default"]=d.exports},"08f5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:960,height:860,visible:t.visible},on:{cancel:t.handelCancle,ok:t.handelOK}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"message-suggestions-list-box"},[a("a-page-header",{staticStyle:{padding:"0 0 16px 0"}},[a("template",{slot:"extra"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add(t.now_cat_id)}}},[t._v("新建分类")])],1)],2),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,rowKey:"custom_id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"custom_id",fn:function(e,i){return[a("a-button",{staticClass:"pcButton",on:{click:function(e){return t.getManage(i)}}},[t._v("去管理")])]}},{key:"action",fn:function(e,i){return a("span",{},[[a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.custom_id,i.cat_id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}})],a("a",{on:{click:function(e){return t.removeCustom(i)}}},[t._v("删除")])],2)}}])}),a("create-custom",{ref:"createModal",on:{loaddata:t.getList}})],1)])],1)},o=[],r=(a("d81d"),a("8a11")),n=a("30cd"),s={name:"GroupCustomList",components:{CreateCustom:n["default"]},data:function(){return{visible:!1,title:"",queryParam:{cat_id:"0"},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")}},page:1,data:[],now_cat_id:0,columns:[{title:"排序",dataIndex:"sort",width:"8%"},{title:"推荐标题",dataIndex:"title",width:"15%"},{title:"副标题",dataIndex:"sub_title",width:"15%"},{title:"团购类型",dataIndex:"category",width:"15%"},{title:"店铺管理",dataIndex:"custom_id",width:"8%",scopedSlots:{customRender:"custom_id"}},{title:"操作",dataIndex:"action",width:"10%",scopedSlots:{customRender:"action"}}]}},created:function(){},activated:function(){},mounted:function(){},methods:{getList:function(t){var e=this;console.log(t),this.visible=!0,this.title=t.title,this.queryParam["page"]=this.page,this.queryParam["cat_id"]=t.cat_id,this.now_cat_id=t.cat_id,this.columns.map((function(e){return"custom_id"==e.dataIndex&&(0==t.cat_id?e.title="店铺管理":e.title="商品管理"),e})),this.request(r["a"].getRenovationCustomList,this.queryParam).then((function(t){console.log(t.list),e.data=t.list,e.pagination.total=t.count}))},tableChange:function(t){this.queryParam["pageSize"]=t.pageSize,this.queryParam["page"]=t.current,t.current&&t.current>0&&(this.page=t.current),this.getList({cat_id:this.now_cat_id,page:this.page})},removeCustom:function(t){var e=this;this.$confirm({title:"是否确定删除该店铺活动推荐分类吗?",centered:!0,onOk:function(){e.request(r["a"].delRenovationCustom,{custom_id:t.custom_id,cat_id:t.cat_id}).then((function(t){e.$message.success("操作成功！"),e.getList({cat_id:e.now_cat_id,page:e.page})}))},onCancel:function(){}})},getManage:function(t){0==t.cat_id?this.$router.push({path:"/group/platform.groupRenovationCustomStore/index",query:{custom_id:t.custom_id}}):this.$router.push({path:"/group/platform.groupRenovationCustomGroup/index",query:{custom_id:t.custom_id}}),this.visible=!1},handelCancle:function(){this.visible=!1},handelOK:function(){this.visible=!1}}},l=s,c=(a("3575"),a("2877")),d=Object(c["a"])(l,i,o,!1,null,"0935c6b5",null);e["default"]=d.exports},"18c6":function(t,e,a){"use strict";a("3419")},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("d3b7");function i(t,e,a,i,o,r,n){try{var s=t[r](n),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(i,o)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(o,r){var n=t.apply(e,a);function s(t){i(n,o,r,s,l,"next",t)}function l(t){i(n,o,r,s,l,"throw",t)}s(void 0)}))}}},"30cd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:840,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("div",{staticStyle:{margin:"0px 0px 40px 0px"}},[a("h3",[t._v("商品管理规则")]),a("div",[t._v("1.店铺展示按距离默认展示，可手动进行商品排序，且手动排序的店铺展示的优先级最高")]),a("div",[t._v("2.商品类型即团购商品所有类型，在所有类型中，可进行多选")])]),a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"推荐标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入推荐标题"},{max:4,message:"字数限制为4个字",trigger:"blur"}]}],expression:"['title', {initialValue:detail.title,rules: [{required: true, message: '请输入推荐标题'},{ max: 4, message: '字数限制为4个字', trigger: 'blur' }]}]"}]})],1),a("a-form-item",{attrs:{label:"副标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sub_title",{initialValue:t.detail.sub_title,rules:[{required:!0,message:"请输入副标题"},{max:4,message:"字数限制为4个字",trigger:"blur"}]}],expression:"['sub_title', {initialValue:detail.sub_title,rules: [{required: true, message: '请输入副标题'},{ max: 4, message: '字数限制为4个字', trigger: 'blur' }]}]"}]})],1),a("a-form-item",{attrs:{label:"团购类型",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"不选择则为全部"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:t.detail.type?t.detail.type:t.type}],expression:"[\n            'type',\n            {initialValue:detail.type ? detail.type : type}\n          ]"}],staticStyle:{width:"430px"},attrs:{placeholder:"请选择团购类型"},on:{change:t.handleTypeChange}},t._l(t.dataList,(function(e){return a("a-select-option",{key:e.cat_id},[t._v(t._s(e.cat_name))])})),1)],1),a("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"值越大越靠前"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},o=[],r=a("53ca"),n=(a("99af"),a("8a11")),s={data:function(){return{size:"default",title:"新建店铺活动推荐",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),dataList:[],type:"0",showMethod:[],detail:{custom_id:0,title:"",sub_title:"",sort:"",type:""},cat_id:"",cat_type:"",custom_id:0}},mounted:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.request(n["a"].getGroupCategoryList,{cat_id:this.cat_id}).then((function(e){var a=[{cat_id:"0",cat_name:"全部"}];e.list.length&&(a=a.concat(e.list)),t.$set(t,"dataList",a)}))},add:function(t){this.visible=!0,this.title=0==t?"新建店铺活动推荐":"新建团购分类展示",this.cat_type=t,this.custom_id=0,this.getDataList(),this.detail={custom_id:0,title:"",sub_title:"",sort:"",type:[]}},edit:function(t,e){this.visible=!0,this.cat_type=e,this.custom_id=t,this.getDataList(),this.getEditInfo(),this.custom_id>0?this.title=0==e?"编辑店铺活动推荐":"编辑团购分类展示":this.title=0==e?"新建店铺活动推荐":"新建团购分类展示"},handleTypeChange:function(t){console.log("Selected: ".concat(t))},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){console.log(a),e?t.confirmLoading=!1:(a.custom_id=t.custom_id,a.cat_id=t.cat_type,t.request(n["a"].addRenovationCustom,a).then((function(e){t.custom_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1;var e={};0==t.cat_type?e["title"]="店铺活动推荐":e["title"]="团购分类展示",e["cat_id"]=t.cat_type,t.$emit("loaddata",e)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.fid="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(n["a"].getRenovationCustomInfo,{custom_id:this.custom_id}).then((function(e){t.showMethod=e.showMethod,t.detail={title:"",sub_title:"",sort:""},"object"==Object(r["a"])(e.detail)&&(t.detail=e.detail),console.log("detail",t.detail)}))},change:function(t){this.detail.fid=t}}},l=s,c=a("2877"),d=Object(c["a"])(l,i,o,!1,null,null,null);e["default"]=d.exports},3419:function(t,e,a){},3575:function(t,e,a){"use strict";a("46f2")},"3adc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1100,height:600,visible:t.visible,footer:null},on:{cancel:t.handelCancle}},[a("div",[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:t.getAddModel}},[t._v("新建")]),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,rowKey:"id",scroll:{y:700}},scopedSlots:t._u([{key:"sort",fn:function(e,i){return a("span",{},[t._v(t._s(i.sort))])}},{key:"name",fn:function(e,i){return a("span",{},[t._v(t._s(i.name))])}},{key:"area_name",fn:function(e,i){return a("span",{},[t._v(t._s(i.area_name))])}},{key:"pic",fn:function(t,e){return a("span",{},[a("img",{attrs:{width:"70px",height:"30px",src:e.pic}})])}},{key:"last_time",fn:function(e,i){return a("span",{},[t._v(t._s(i.last_time))])}},{key:"status",fn:function(e){return a("span",{},[0==e?a("a-badge",{attrs:{status:"error",text:"关闭"}}):t._e(),1==e?a("a-badge",{attrs:{status:"success",text:"开启"}}):t._e()],1)}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.getOrEdit(i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.delOne(i.id)}}},[t._v("删除")])],1)}}])}),a("a-modal",{attrs:{title:"添加",visible:t.add_visible,width:"650px",maskClosable:!1},on:{cancel:t.handleCancle,ok:t.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"500px"}},[a("a-form",t._b({attrs:{id:"components-form-demo-validate-other",form:t.form}},"a-form",t.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name',{rules: [{required: true, message: '请填写名称'}]}]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"通用广告"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency"],expression:"['currency']"}],attrs:{"checked-children":"通用","un-checked-children":"不通用",defaultChecked:!0},on:{change:t.switchCurrency}})],1),0==t.currency?a("a-form-item",{attrs:{label:"所在区域"}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:t.areaList,placeholder:"请选择省市区"}})],1):t._e(),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[t.pic_show?a("div",[a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}),a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:t.removeImage}})],1):t._e(),a("div",[a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"group/adver"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:t.handleUploadChange,preview:t.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v(" 选择图片 ")])],1):t._e()]),a("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)])]),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url',{rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),a("a",{staticClass:"ant-form-text",on:{click:t.setLinkBases}},[t._v(" 从功能库选择 ")])],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[t._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.status,valuePropName:"checked"}],expression:"['status',{initialValue:status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)]),a("decorate-adver-edit",{ref:"adverEditModel",on:{update:t.getList}})],1)])},o=[],r=a("1da1"),n=(a("a434"),a("96cf"),a("8a11")),s=a("00d3"),l=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"城市",dataIndex:"area_name",width:100,key:"area_name",scopedSlots:{customRender:"area_name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],c={name:"decorateAdver",components:{DecorateAdverEdit:s["default"]},data:function(){return{visible:!1,add_visible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:l,list:[],tab_key:1,form:this.$form.createForm(this),id:"",type:3,areaList:"",app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},now_cat_id:0,status:1}},created:function(){this.getAllArea()},methods:{init:function(){},getList:function(t){var e=this;this.visible=!0,this.title=t.title,this.request(n["a"].getAdverList,t).then((function(t){console.log(t),e.list=t.adver_list,e.now_cat_id=t.now_cat_id}))},handelCancle:function(){this.visible=!1},getAddModel:function(){this.add_visible=!0,this.length=0,this.pic="",this.pic_show=!1,this.removeImage()},getOrEdit:function(t){this.$refs.adverEditModel.editOne(t,this.title)},delOne:function(t){var e=this;this.$confirm({title:"提示",content:"确定删除该广告？",onOk:function(){e.request(n["a"].delGroupAdver,{id:t}).then((function(t){e.getList({now_cat_id:e.now_cat_id})}))},onCancel:function(){}})},switchCurrency:function(t){this.currency=t},handleUploadChange:function(t){var e=t.fileList;this.fileList=e,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,getBase64(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(e){console.log("handleOk",e),t.url=e.url,t.$nextTick((function(){t.form.setFieldsValue({url:t.url})}))}})},handleCancle:function(){this.add_visible=!1,this.pic=""},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){t||(a.cat_id=e.now_cat_id,a.currency=!1===a.currency?0:1,a.pic=e.pic,a.areaList||(a.areaList=[]),a.status=!1===a.status?0:1,e.request(n["a"].addGroupAdver,a).then((function(t){e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.pic="",e.getList({now_cat_id:e.now_cat_id}),e.add_visible=!1}),1500)})))}))},getAllArea:function(){var t=this;this.request(n["a"].getAllArea,{type:1}).then((function(e){t.areaList=e}))}}},d=c,u=a("2877"),p=Object(u["a"])(d,i,o,!1,null,null,null);e["default"]=p.exports},"46f2":function(t,e,a){},5071:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"团购首页配置"}},[a("a-row",{staticStyle:{background:"white",padding:"20px"}},[a("a-col",{attrs:{span:10}},[a("a-list",{attrs:{"item-layout":"horizontal","data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e,i){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.desc}},[a("a",{attrs:{slot:"title",id:"title"},slot:"title"},[t._v(t._s(e.title))])]),e.show_switch?a("a-switch",{on:{change:t.changeRec},model:{value:t.is_display,callback:function(e){t.is_display=e},expression:"is_display"}}):t._e(),e.button?a("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.getClick(e.click,e.title)}}},[t._v(" "+t._s(e.button)+" ")]):t._e()],1)}}])}),a("a-divider")],1),a("a-col",{attrs:{span:2}}),a("a-col",{staticStyle:{position:"relative",display:"flex","flex-direction":"column"},attrs:{span:12}},[a("iframe",{attrs:{id:"myframe",frameborder:"0",src:t.url}}),a("a-button",{staticStyle:{width:"65px","margin-top":"10px"},attrs:{type:"primary"},on:{click:t.refreshFrame}},[t._v("刷新 ")])],1)],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"发现页配置"}},[a("a-row",{staticStyle:{background:"white",padding:"20px"}},[a("a-col",{attrs:{span:10}},[a("a-list",{attrs:{"item-layout":"horizontal","data-source":t.list},scopedSlots:t._u([{key:"renderItem",fn:function(e,i){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.desc}},[a("a",{attrs:{slot:"title",id:"title"},slot:"title"},[t._v(t._s(e.title))])]),e.show_switch?a("a-switch",{on:{change:t.changeRec},model:{value:t.is_display,callback:function(e){t.is_display=e},expression:"is_display"}}):t._e(),e.button?a("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.getClick(e.click,e.title)}}},[t._v(" "+t._s(e.button)+" ")]):t._e()],1)}}])}),a("a-divider")],1),a("a-col",{attrs:{span:2}}),a("a-col",{staticStyle:{position:"relative",display:"flex","flex-direction":"column"},attrs:{span:12}},[a("iframe",{attrs:{id:"myframe",frameborder:"0",src:t.findUrl}}),a("a-button",{staticStyle:{width:"65px","margin-top":"10px"},attrs:{type:"primary"},on:{click:t.refreshFrame}},[t._v("刷新 ")])],1)],1)],1)],1),a("decorate-adver",{ref:"bannerModel"}),a("rec-custom",{ref:"recModel"})],1)},o=[],r=a("3adc"),n=a("08f5"),s=a("8a11"),l=[{title:"轮播图",desc:"尺寸为 702*272",button:"装修",show_switch:!1,change:"",click:"getBanner"},{title:"导航栏导航列表",desc:"每行展示五个，不设置不展示",button:"装修",show_switch:!1,change:"",click:"getNav"},{title:"广告位",desc:"尺寸为 702*142，仅显示一张广告图",button:"装修",show_switch:!1,change:"",click:"getAdver"},{title:"附近好店",desc:"按当前位置距离、评分展示9家店铺",button:"",show_switch:!1,change:"",click:""},{title:"优选商品",desc:"推荐热门商品到团购首页，提高热门商品曝光率",button:"装修",show_switch:!1,change:"",click:"getSelect"},{title:"超值组合",desc:"推荐优惠组合套餐到团购首页，增加曝光率",button:"装修",show_switch:!1,change:"",click:"getCombination"},{title:"特价拼团",desc:"在所有分类下，按照销量，展示正在拼团的前3款商品",button:"",show_switch:!1,change:"",click:""},{title:"店铺活动推荐",desc:"首页自定义推荐分类店铺，提高店铺曝光率",button:"装修",show_switch:!1,change:"",click:"getRec"}],c=[{title:"特色推荐",desc:"尺寸为 702*348",button:"装修",show_switch:!1,change:"",click:"getSearchBanner"},{title:"top打卡店",desc:"所有团购商品店铺分类中 默认展示评分最高 且销量最高的9家店",button:"",show_switch:!1,change:"",click:""},{title:"广告位",desc:"尺寸为 702*142，仅显示一张广告图",button:"装修",show_switch:!1,change:"",click:"getSearchAdver"},{title:"买单人气榜",desc:"在所有商品分类中，按销量高低展示商品",button:"",show_switch:!1,change:"",click:""},{title:"团购分类展示",desc:"展示发现页各分类商品瀑布流",button:"装修",show_switch:!1,change:"",click:"getSearchRec"}],d={name:"PlatformHomeDecorate",components:{DecorateAdver:r["default"],RecCustom:n["default"]},data:function(){return{is_display:"",data:l,list:c,url:"",findUrl:"",queryParam:{now_cat_id:0,cat_id:0,location:0,size:"702*272",cat_name:"团购首页轮播图",cat_key:"wap_group_index_top"}}},created:function(){this.getUrlAndRecSwitch(),this.getUrl()},methods:{getClick:function(t,e){this[t](e)},getBanner:function(t){var e={now_cat_id:0,cat_id:0,location:0,size:"702*272"};e["cat_name"]=t,e["cat_key"]="wap_group_index_top",e["title"]=t,this.$refs.bannerModel.getList(e)},getNav:function(t){var e={now_cat_id:0,cat_id:0,location:0,size:"80*80"};e["cat_name"]=t,e["cat_key"]="wap_group_index_nav",e["title"]=t,this.$refs.bannerModel.getList(e)},getAdver:function(t){var e={now_cat_id:0,cat_id:0,location:0,size:"702*142"};e["cat_name"]=t,e["cat_key"]="wap_group_index_adver",e["title"]=t,this.$refs.bannerModel.getList(e)},getSearchBanner:function(t){var e={now_cat_id:0,cat_id:0,location:1,size:"702*348"};e["cat_name"]=t,e["cat_key"]="wap_group_search_top",e["title"]=t,this.$refs.bannerModel.getList(e)},getSearchAdver:function(t){var e={now_cat_id:0,cat_id:0,location:1,size:"702*142"};e["cat_name"]=t,e["cat_key"]="wap_group_search_adver",e["title"]=t,this.$refs.bannerModel.getList(e)},getSearchRec:function(t){this.$refs.recModel.getList({cat_id:1,title:t})},getSelect:function(t){this.$router.push({path:"/group/platform.groupSelect/edit",query:{cat_id:0,type:1}})},getCombination:function(t){this.$router.push({path:"/group/platform.groupRenovationCombine/edit",query:{cat_id:0,type:2}})},getRec:function(t){this.$refs.recModel.getList({cat_id:0,title:t})},getChange:function(t){this[t](this.status)},changeRec:function(t){var e=this;this.is_display=1==t,this.request(s["a"].recDisplay,{is_display:t}).then((function(t){t&&e.$message.success("修改成功")}))},getUrlAndRecSwitch:function(){var t=this;this.request(s["a"].getUrl,{type:"index"}).then((function(e){t.url=e.url}))},getUrl:function(){var t=this;this.request(s["a"].getUrl,{type:"find"}).then((function(e){t.findUrl=e.url}))},refreshFrame:function(){document.getElementById("myframe").contentWindow.location.reload(!0)}}},u=d,p=(a("18c6"),a("2877")),m=Object(p["a"])(u,i,o,!1,null,"63d5078b",null);e["default"]=m.exports},"55d8":function(t,e,a){},"8a11":function(t,e,a){"use strict";var i={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl"};e["a"]=i},a281:function(t,e,a){"use strict";a("55d8")}}]);