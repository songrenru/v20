(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ed7f82a","chunk-2d0b6a79","chunk-7a6e7d32","chunk-304a8d84","chunk-3a7892db","chunk-2d0b6a79","chunk-2d0b3786"],{"148c":function(e,t,a){"use strict";var i={getActivityList:"/employee/platform.EmployeeActivity/getActivityList",delActivity:"/employee/platform.EmployeeActivity/delActivity",getActivityEdit:"/employee/platform.EmployeeActivity/getActivityEdit",employActivityAddOrEdit:"/employee/platform.EmployeeActivity/employActivityAddOrEdit",getActivityGoods:"/employee/platform.EmployeeActivity/getActivityGoods",getActivityAdverList:"/employee/platform.EmployeeActivity/getActivityAdverList",activityAdverDel:"/employee/platform.EmployeeActivity/activityAdverDel",getAllArea:"/employee/platform.EmployeeActivity/getAllArea",addOrEditActivityAdver:"/employee/platform.EmployeeActivity/addOrEditActivityAdver",getActivityAdver:"/employee/platform.EmployeeActivity/getActivityAdver",getShopGoodsList:"/employee/platform.EmployeeActivity/getShopGoodsList",addActivityShopGoods:"/employee/platform.EmployeeActivity/addActivityShopGoods",setActivityGoodsSort:"/employee/platform.EmployeeActivity/setActivityGoodsSort",delActivityGoods:"/employee/platform.EmployeeActivity/delActivityGoods",getlableAll:"/employee/platform.EmployeeActivity/getlableAll",getPickTimeSetting:"/employee/platform.EmployeeActivity/getPickTimeSetting",pickTimeSetting:"/employee/platform.EmployeeActivity/pickTimeSetting"};t["a"]=i},"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("d3b7");function i(e,t,a,i,s,r,o){try{var l=e[r](o),n=l.value}catch(c){return void a(c)}l.done?t(n):Promise.resolve(n).then(i,s)}function s(e){return function(){var t=this,a=arguments;return new Promise((function(s,r){var o=e.apply(t,a);function l(e){i(o,s,r,l,n,"next",e)}function n(e){i(o,s,r,l,n,"throw",e)}l(void 0)}))}}},"269b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,width:"750px",height:e.height,closable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[a("div",{style:[{height:e.height},{"overflow-y":"scroll"}]},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),"wap_life_tools_ticket_slider"!==this.cat_key?a("a-form-item",{attrs:{label:"通用广告"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1):e._e(),0==e.detail.now_adver.currency?a("a-form-item",{attrs:{label:"所在区域"}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区",defaultValue:[e.detail.now_adver.province_id,e.detail.now_adver.city_id]}})],1):e._e(),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[e.pic_show?a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"employee/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url}],expression:"['url', {initialValue:detail.now_adver.url}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?a("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1),a("a-form-item",{attrs:{label:"设置仅为员工可见"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onAddInput}},[e._v(" 添加 ")]),e._l(e.selectedLable,(function(t,i){return a("div",{key:i,staticClass:"goods-container"},[a("div",{staticClass:"goods-content"},[a("div",{staticClass:"goods-content-box"},[a("div",{staticClass:"goods-content-left"},[a("a-form",{attrs:{"label-col":{span:3},"wrapper-col":{span:20}}},[a("a-form-item",{attrs:{label:"商家"}},[a("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择商家",value:t.mer_id},on:{change:function(t){return e.selecteMerChangge(t,i)}}},e._l(e.lableList,(function(t){return a("a-select-option",{key:t.mer_id,attrs:{value:t.mer_id}},[e._v(e._s(t.name))])})),1)],1),e._l(e.lableList,(function(s){return a("div",{key:s.mer_id},[s.mer_id==t.mer_id?a("a-form-item",{attrs:{label:"标签"}},[a("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择标签",mode:"multiple",value:t.lables},on:{change:function(t){return e.selecteLableChangge(t,i)}}},e._l(s.lables,(function(t){return a("a-select-option",{key:t.lable_id,attrs:{value:t.lable_id}},[e._v(e._s(t.name))])})),1)],1):e._e()],1)}))],2)],1),a("div",{staticClass:"goods-content-right"},[a("a-button",{attrs:{type:"danger"},on:{click:function(t){return e.delPrivateSpec(i)}}},[e._v("删除")])],1)])])])}))],2),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),a("link-bases",{ref:"linkModel"})],1)},s=[],r=a("1da1"),o=(a("96cf"),a("7db0"),a("d3b7"),a("a434"),a("148c")),l=a("c2d1"),n={name:"decorateAdverEdit",components:{LinkBases:l["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",height:"600px",edited:!0,cat_key:"",title:"",areaList:"",activity_id:0,detail:{now_adver:{name:"",pic:"",status:0}},previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},selectedLable:[],lableList:[]}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(e,t,a,i,s){var r=this;this.visible=!0,this.edited=t,this.type=a,this.id=e,this.activity_id=i,this.title=s,this.getAllArea(),this.getlableAll(),e>0?this.request(o["a"].getActivityAdver,{id:e}).then((function(e){r.removeImage(),r.detail=e,r.selectedLable=e.lable_arr||[],r.detail.now_adver.pic&&(r.fileList=[{uid:"-1",name:"当前图片",status:"done",url:r.detail.now_adver.pic}],r.length=r.fileList.length,r.pic=r.detail.now_adver.pic,r.pic_show=!0)})):(this.detail.now_adver={name:"",pic:"",status:0},this.selectedLable=[],this.removeImage())},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(o["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},getlableAll:function(){var e=this;this.request(o["a"].getlableAll,{}).then((function(t){e.lableList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(console.log(44444,t.activity_id),!e){if(a.id=t.id,a.activity_id=t.activity_id,a.currency=1==a.currency?1:0,a.pic=t.pic,a.areaList||(a.areaList=[]),a.lable_arr=t.selectedLable,a.lable_arr.length>0){var i=a.lable_arr.find((function(e){return e.mer_id<=0||e.lables.length<=0}));if(i)return t.$message.error("未选择商家或者标签"),!1}console.log(a),t.request(o["a"].addOrEditActivityAdver,a).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),t.$emit("update",t.activity_id),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",a)}),1500)}))}}))},switchComplete:function(e){this.detail.now_adver.currency=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){console.log(1111,this.fileList),void 0!=this.fileList?this.fileList.splice(0,this.fileList.length):this.fileList=[],this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})},onAddInput:function(){this.selectedLable.push({lables:[]})},delPrivateSpec:function(e){this.selectedLable.splice(e,1)},selecteMerChangge:function(e,t){var a=this.selectedLable.find((function(t){return t.mer_id==e}));if(a)return this.$message.error("该商家已添加过"),!1;var i=this.selectedLable[t];i["mer_id"]=e,i["lables"]=[],this.$set(this.selectedLable,t,i)},selecteLableChangge:function(e,t){console.log(e,"val2");var a=this.selectedLable[t];a["lables"]=e,this.$set(this.selectedLable,t,a)}}},c=n,d=(a("40eb"),a("2877")),m=Object(d["a"])(c,i,s,!1,null,"9cda09bc",null);t["default"]=m.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("6b75");function s(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=a("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return s(e)||r(e)||Object(o["a"])(e)||l()}},"40eb":function(e,t,a){"use strict";a("5737")},5737:function(e,t,a){},"68cf":function(e,t,a){"use strict";a("b4e7")},"7b3f":function(e,t,a){"use strict";var i={uploadImg:"/common/common.UploadFile/uploadImg"};t["a"]=i},a618:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticClass:"dialog",attrs:{title:e.titleName,width:"65%",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticStyle:{"margin-top":"5px",padding:"10px","background-color":"#fff"}},[a("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[a("a-form-model-item",{attrs:{label:"搜索"}},[a("a-select",{staticStyle:{width:"100px"},model:{value:e.searchForm.search_type,callback:function(t){e.$set(e.searchForm,"search_type",t)},expression:"searchForm.search_type"}},[a("a-select-option",{attrs:{value:"3"}},[e._v("商品名称")]),a("a-select-option",{attrs:{value:"1"}},[e._v("商家名称")]),a("a-select-option",{attrs:{value:"2"}},[e._v("店铺名称")])],1)],1),a("a-form-model-item",{attrs:{label:""}},[a("a-input",{attrs:{placeholder:"关键词"},model:{value:e.searchForm.keyword,callback:function(t){e.$set(e.searchForm,"keyword",t)},expression:"searchForm.keyword"}})],1),a("a-form-model-item",[a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm(!0)}}},[e._v("搜索")])],1)],1),a("a-table",{attrs:{rowKey:"goods_id",columns:e.columns,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"data-source":e.datalist,pagination:e.pagination,bordered:""}})],1)])},s=[],r=a("5530"),o=a("148c"),l=[{title:"商品名称",dataIndex:"goods_name",key:"goods_name"},{title:"商家名称",dataIndex:"mer_name",key:"mer_name"},{title:"店铺名称",dataIndex:"store_name",key:"store_name"},{title:"价格",dataIndex:"price",key:"price"},{title:"可见员工身份标签",dataIndex:"employee_lables",key:"employee_lables"}],n={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)}},c={name:"SelectShopGoods",data:function(){return{titleName:"选择商品",dialogVisible:!1,rowSelection:n,labelCol:{span:4},wrapperCol:{span:14},datalist:[],columns:l,addVisible:!1,editVisible:!1,recordVisible:!1,currentBtn:"",setVisible:!1,activity_id:0,searchForm:{search_type:"3",activity_id:0,keyword:""},selectedRowKeys:[],selectedRows:[],cat_id:"",pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},methods:{onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t,console.log(e,"selectedRowKeys==selectedRowKeys"),console.log(t,"selectedRows==selectedRows")},openDialog:function(e){console.log(1111,e),this.dialogVisible=!0,this.activity_id=e,this.$set(this.searchForm,"activity_id",e),console.log(1111,this.searchForm),this.getDataList()},getDataList:function(e){var t=this,a=Object(r["a"])({},this.searchForm);!0===e?(a.page=1,a.keyWords=this.searchForm.title,this.$set(this.pagination,"current",1)):(a.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),a.pageSize=this.pagination.pageSize,console.log(1111,a),this.request(o["a"].getShopGoodsList,a).then((function(e){t.datalist=e.data,t.$set(t.pagination,"total",e.total)}))},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.getDataList(e)},resetForm:function(){this.$set(this,"searchForm",{name:"",status:-1}),this.$set(this.pagination,"current",1),this.getDataList()},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},confirm:function(e,t){this.onChange(e,t)},setCancel:function(){this.setVisible=!1},handleOk:function(){var e=this;this.selectedRowKeys.length?(this.request(o["a"].addActivityShopGoods,{goods_ids:this.selectedRowKeys,activity_id:this.activity_id}).then((function(t){e.$message.success("添加成功"),e.$emit("getTable")})),this.handleCancel()):this.$message.error("请选择")},handleCancel:function(){this.searchForm={search_type:"1",activity_id:0,keyword:""},this.selectedRowKeys=[],this.selectedRows=[],this.dialogVisible=!1}}},d=c,m=a("2877"),u=Object(m["a"])(d,i,s,!1,null,"354bcaeb",null);t["default"]=u.exports},a91b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{visible:e.visible,title:e.title,width:"60%",bodyStyle:{"overflow-y":"auto",height:"750px"}},on:{cancel:e.handleCancel,ok:e.handleOk}},[a("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"活动页名称",required:""}},[a("a-input",{staticClass:"sort-input",on:{change:e.handleNameChange},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}}),e._v(" 活动页名称将在活动页标题栏展示 ")],1),a("a-form-model-item",{attrs:{label:"配置轮播图"}},[a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.getBanner()}}},[e._v("配置")])],1)],1),a("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"活动时间",required:""}},[a("a-range-picker",{attrs:{format:e.dateFormat},on:{change:e.dateOnChange},model:{value:e.datetimeStr,callback:function(t){e.datetimeStr=t},expression:"datetimeStr"}})],1)],1),a("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"上传列表标题图片",help:"建议700*285px",required:""}},[a("a-upload",{attrs:{name:"reply_pic","file-list":e.fileListCover,action:e.uploadImg,headers:e.headers,"list-type":"picture-card"},on:{preview:e.handlePreviewCover,change:function(t){return e.upLoadChangeCover(t)}}},[e.fileListCover.length<1?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisibleCover,footer:null},on:{cancel:e.handleCancelCover}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImageCover}})])],1)],1),a("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"发布单位"}},[a("a-input",{staticClass:"sort-input",attrs:{"default-value":e.formData.company},model:{value:e.formData.company,callback:function(t){e.$set(e.formData,"company",t)},expression:"formData.company"}})],1)],1),a("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"状态"}},[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭"},model:{value:e.formData.status_bool,callback:function(t){e.$set(e.formData,"status_bool",t)},expression:"formData.status_bool"}})],1)],1),a("a-form-model",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"设置仅为员工可见"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onAddInput}},[e._v(" 添加 ")]),e._l(e.selectedLable,(function(t,i){return a("div",{key:i,staticClass:"goods-container"},[a("div",{staticClass:"goods-content"},[a("div",{staticClass:"goods-content-box"},[a("div",{staticClass:"goods-content-left"},[a("a-form",{attrs:{"label-col":{span:3},"wrapper-col":{span:20}}},[a("a-form-item",{attrs:{label:"商家"}},[a("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择商家",value:t.mer_id},on:{change:function(t){return e.selecteMerChangge(t,i)}}},e._l(e.lableList,(function(t){return a("a-select-option",{key:t.mer_id,attrs:{value:t.mer_id}},[e._v(e._s(t.name))])})),1)],1),e._l(e.lableList,(function(s){return a("div",{key:s.mer_id},[s.mer_id==t.mer_id?a("a-form-item",{attrs:{label:"标签"}},[a("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择标签",mode:"multiple",value:t.lables},on:{change:function(t){return e.selecteLableChangge(t,i)}}},e._l(s.lables,(function(t){return a("a-select-option",{key:t.lable_id,attrs:{value:t.lable_id}},[e._v(e._s(t.name))])})),1)],1):e._e()],1)}))],2)],1),a("div",{staticClass:"goods-content-right"},[a("a-button",{attrs:{type:"danger"},on:{click:function(t){return e.delPrivateSpec(i)}}},[e._v("删除")])],1)])])])}))],2)],1),a("a-form-model",{attrs:{model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"是否开启自由跳转"}},[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭"},model:{value:e.formData.open_free_jump,callback:function(t){e.$set(e.formData,"open_free_jump",t)},expression:"formData.open_free_jump"}})],1),a("a-form-model-item",{attrs:{label:"跳转链接"}},[a("a-input",{staticClass:"sort-input",attrs:{"default-value":e.formData.free_jump_url},model:{value:e.formData.free_jump_url,callback:function(t){e.$set(e.formData,"free_jump_url",t)},expression:"formData.free_jump_url"}})],1)],1),a("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[a("a-form-model-item",{attrs:{label:"搜索"}},[a("a-select",{staticStyle:{width:"100px"},model:{value:e.searchForm.search_type,callback:function(t){e.$set(e.searchForm,"search_type",t)},expression:"searchForm.search_type"}},[a("a-select-option",{attrs:{value:"3"}},[e._v("商品名称")]),a("a-select-option",{attrs:{value:"1"}},[e._v("商家名称")]),a("a-select-option",{attrs:{value:"2"}},[e._v("店铺名称")])],1)],1),a("a-form-model-item",{attrs:{label:""}},[a("a-input",{attrs:{placeholder:"关键词"},model:{value:e.searchForm.keyword,callback:function(t){e.$set(e.searchForm,"keyword",t)},expression:"searchForm.keyword"}})],1),a("a-form-model-item",[a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm(!0)}}},[e._v("搜索")]),a("a-button",{staticClass:"ml-20",on:{click:function(t){return e.resetForm()}}},[e._v("重置")]),a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),a("a-popconfirm",{attrs:{title:"确认删除吗?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(t){return e.handleDelAll()}}},[a("a-button",{staticClass:"ml-20",attrs:{type:"primary"}},[e._v("删除")])],1)],1)],1),a("br"),a("a-table",{attrs:{rowKey:"pigcms_id",columns:e.columns,"data-source":e.datalist,pagination:e.pagination,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},bordered:""},scopedSlots:e._u([{key:"sort",fn:function(t,i){return a("span",{},[a("a-input-number",{staticClass:"sort-input",attrs:{"default-value":i.sort},on:{blur:function(t){return e.handleSortChange(t,i.sort,i.pigcms_id)}},model:{value:i.sort,callback:function(t){e.$set(i,"sort",t)},expression:"record.sort"}})],1)}},{key:"action",fn:function(t,i){return a("span",{},[a("a-popconfirm",{attrs:{title:"确认删除吗?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(t){return e.handleDelOne(i.pigcms_id)}}},[a("a",[e._v("删除")])])],1)}}])})],1),a("decorate-adver",{ref:"bannerModel"}),a("select-shop-goods",{ref:"selectGoods",on:{getTable:e.getDataList}})],1)},s=[],r=a("2909"),o=a("1da1"),l=a("5530"),n=(a("96cf"),a("b0c0"),a("7db0"),a("d3b7"),a("fb6a"),a("d81d"),a("a434"),a("148c")),c=a("e8df"),d=a("a618"),m=a("7b3f"),u=a("c1df"),h=a.n(u),p=[{title:"商品名称",dataIndex:"goods_name",key:"goods_name"},{title:"商家名称",dataIndex:"mer_name",key:"mer_name"},{title:"店铺名称",dataIndex:"store_name",key:"store_name"},{title:"价格",dataIndex:"price",key:"price"},{title:"可见员工身份标签",dataIndex:"employee_lables",key:"employee_lables"},{title:"排序",scopedSlots:{customRender:"sort"},key:"sort"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],f={props:{visible:Boolean,title:String},components:{DecorateAdver:c["default"],SelectShopGoods:d["default"]},data:function(){return{labelCol:{span:6},wrapperCol:{span:14},datalist:[],columns:p,searchForm:{search_type:"3",keyword:""},selectedRowKeys:[],selectedRows:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}},loading:!1,image:"",dateFormat:"YYYY-MM-DD",datetimeStr:null,headers:{authorization:"authorization-text"},uploadImg:"/v20/public/index.php"+m["a"].uploadImg+"?upload_dir=/employee/activity",fileListCover:[],previewVisibleCover:!1,previewImageCover:null,lableList:[],selectedLable:[],formData:{}}},watch:{formData:function(e){this.getDataList(!1),this.getlableAll(),this.formData.cover_image?this.fileListCover[0]={uid:1,name:"image.png",status:"done",url:this.formData.cover_image,data:this.formData.cover_image}:this.fileListCover=[],this.formData.start_time?this.datetimeStr=[h()(this.formData.start_time,this.dateFormat),h()(this.formData.end_time,this.dateFormat)]:this.datetimeStr=null,this.selectedLable.length>0&&(this.formData.lable_arr=this.selectedLable),this.selectedLable=this.formData.lable_arr||[],console.log(this.formData,"this.formData2"),console.log(this.datetimeStr,"this.datetimeStr")}},created:function(){this.getDataList(!1),this.getlableAll(),this.formData.cover_image&&(this.fileListCover[0]={uid:1,name:"image.png",status:"done",url:this.formData.cover_image,data:this.formData.cover_image}),this.formData.start_time?this.datetimeStr=[h()(this.formData.start_time,this.dateFormat),h()(this.formData.end_time,this.dateFormat)]:this.datetimeStr=null,console.log(this.formData,"this.formData")},methods:{moment:h.a,handleNameChange:function(e,t){var a=this;if(this.formData.pigcms_id)return!1;if(""==this.formData.name)return this.$message.error("活动名称必填"),!1;var i={is_temp:1,name:this.formData.name};this.request(n["a"].employActivityAddOrEdit,i).then((function(e){a.$set(a.formData,"pigcms_id",e.pigcms_id)}))},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},getBanner:function(){if(0==this.formData.pigcms_id)return this.$message.error("请先设置活动名称"),!1;this.$refs.bannerModel.getList(this.formData.pigcms_id,"配置轮播图")},getlableAll:function(){var e=this;this.request(n["a"].getlableAll,{}).then((function(t){e.lableList=t,console.log(e.lableList,"lableList")}))},getDataList:function(e){var t=this,a=Object(l["a"])({},this.searchForm);!0===e?(a.page=1,this.$set(this.pagination,"current",1)):(a.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),a.pageSize=this.pagination.pageSize,a.activity_id=this.formData.pigcms_id,this.request(n["a"].getActivityGoods,a).then((function(e){t.datalist=e.data,t.$set(t.pagination,"total",e.total)}))},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.getDataList(e)},resetForm:function(){this.$set(this,"searchForm",{keyword:""}),this.$set(this.pagination,"current",1),this.getDataList()},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},handleOk:function(){var e=this;if(""==this.formData.name)return this.$message.error("活动名称必填"),!1;if(!this.formData.start_time||void 0==this.formData.start_time)return this.$message.error("请选择活动时间"),!1;if(0==this.fileListCover.length)return this.$message.error("请上传活动列表标题图片"),!1;if(this.formData.status=this.formData.status_bool?1:0,this.formData.lable_arr=this.selectedLable,this.formData.lable_arr.length>0){var t=this.formData.lable_arr.find((function(e){return e.mer_id<=0||e.lables.length<=0}));if(t)return this.$message.error("未选择商家或者标签"),!1}this.request(n["a"].employActivityAddOrEdit,this.formData).then((function(t){e.$set(e.formData,"pigcms_id",t.pigcms_id),e.$message.success("活动保存成功!",1),e.handleCancel()}))},handleCancel:function(){this.$emit("handleCancel"),this.$emit("getDataList",!1),this.formData.pigcms_id&&this.request(n["a"].delActivity,{pigcms_id:this.formData.pigcms_id,is_temp:1},"GET").then((function(e){}))},dateOnChange:function(e,t){this.formData.start_time=t[0],this.formData.end_time=t[1]},handleSortChange:function(e,t,a){var i=this,s={pigcms_id:a,sort:t};this.request(n["a"].setActivityGoodsSort,s).then((function(e){i.getDataList(),i.$message.success("排序设置成功!",1)}))},handleAdd:function(){if(0==this.formData.pigcms_id)return this.$message.error("请先设置活动名称"),!1;this.$refs.selectGoods.openDialog(this.formData.pigcms_id)},handleDelOne:function(e){var t=this;this.request(n["a"].delActivityGoods,{pigcms_id:[e]}).then((function(e){t.$message.success("删除成功!",1),setTimeout((function(){t.getDataList()}),1e3)}))},handleDelAll:function(){var e=this;this.selectedRowKeys.length>0?this.request(n["a"].delActivityGoods,{pigcms_id:this.selectedRowKeys}).then((function(t){e.selectedRowKeys=[],e.selectedRows=[],e.$message.success("删除成功"),setTimeout((function(){e.getDataList()}),1e3)})):this.$message.error("请选择")},handlePreviewCover:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImageCover=e.url||e.preview,t.previewVisibleCover=!0;case 6:case"end":return a.stop()}}),a)})))()},upLoadChangeCover:function(e){var t=this,a=Object(r["a"])(e.fileList);a=a.slice(-1),a=a.map((function(a){return a.response&&(a.url=a.response.data.full_url,t.formData.cover_image=e.file.response.data.image),a})),this.fileListCover=a,"done"===e.file.status||"error"===e.file.status&&this.$message.error("".concat(e.file.name," 上传失败."))},handleCancelCover:function(){this.previewVisibleCover=!1},onAddInput:function(){this.selectedLable.push({lables:[]})},delPrivateSpec:function(e){this.selectedLable.splice(e,1)},selecteMerChangge:function(e,t){var a=this.selectedLable.find((function(t){return t.mer_id==e}));if(a)return this.$message.error("该商家已添加过"),!1;var i=this.selectedLable[t];i["mer_id"]=e,i["lables"]=[],this.$set(this.selectedLable,t,i)},selecteLableChangge:function(e,t){console.log(e,"val2");var a=this.selectedLable[t];a["lables"]=e,this.$set(this.selectedLable,t,a)},setFormData:function(e){this.formData=JSON.parse(JSON.stringify(e)),this.selectedLable=this.formData.lable_arr||[]}}},v=f,g=(a("68cf"),a("2877")),y=Object(g["a"])(v,i,s,!1,null,"5d1ed312",null);t["default"]=y.exports},b4e7:function(e,t,a){},b5e7:function(e,t,a){"use strict";a("ee2f")},e8df:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1100,height:600,visible:e.avisible,footer:""},on:{cancel:e.handelCancle}},[a("div",[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.getAddModel}},[e._v("新建")]),a("a-table",{attrs:{columns:e.columns,rowKey:"id","data-source":e.list,scroll:{y:700}},scopedSlots:e._u([{key:"sort",fn:function(t,i){return a("span",{},[e._v(e._s(i.sort))])}},{key:"name",fn:function(t,i){return a("span",{},[e._v(e._s(i.name))])}},{key:"area_name",fn:function(t,i){return a("span",{},[e._v(e._s(i.area_name))])}},{key:"pic",fn:function(e,t){return a("span",{},[a("img",{attrs:{width:"70px",height:"30px",src:t.pic}})])}},{key:"last_time",fn:function(t,i){return a("span",{},[e._v(e._s(i.last_time))])}},{key:"status",fn:function(t){return a("span",{},[0==t?a("a-badge",{attrs:{status:"error",text:"关闭"}}):e._e(),1==t?a("a-badge",{attrs:{status:"success",text:"开启"}}):e._e()],1)}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.getOrEdit(i.id,!0,1)}}},[e._v("查看")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.getOrEdit(i.id,!1,1)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(i.id)}}},[a("a",[e._v("删除")])])],1)}}])}),a("decorate-adver-edit",{ref:"adverEditModel",on:{update:e.getList}})],1)])},s=[],r=a("148c"),o=a("269b"),l=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"浏览量",dataIndex:"click_number",key:"click_number"},{title:"城市",dataIndex:"area_name",width:100,key:"area_name",scopedSlots:{customRender:"area_name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],n={name:"decorateAdver",components:{DecorateAdverEdit:o["default"]},data:function(){return{avisible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:l,list:[],tab_key:1,activity_id:0,form:this.$form.createForm(this),id:"",type:3,app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){},methods:{init:function(){},getList:function(e,t){var a=this;this.avisible=!0,this.activity_id=e,this.title="配置轮播图",this.request(r["a"].getActivityAdverList,{activity_id:e}).then((function(e){a.tab_name=e.now_category.cat_name,a.cat_id=e.now_category.cat_id,a.cat_key=e.now_category.cat_key,a.desc="图片建议尺寸"+e.now_category.size_info,a.list=e.adver_list}))},getOrEdit:function(e,t,a){this.$refs.adverEditModel.editOne(e,t,a,this.activity_id,this.title)},getAddModel:function(){this.$refs.adverEditModel.editOne(0,!1,1,this.activity_id,this.title)},delOne:function(e){var t=this;this.request(r["a"].activityAdverDel,{id:e}).then((function(e){t.$message.success("删除成功"),t.getList(t.activity_id,t.title)}))},handleOk:function(e){this.avisible=!1},handelCancle:function(){this.avisible=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},c=n,d=(a("b5e7"),a("2877")),m=Object(d["a"])(c,i,s,!1,null,"37945294",null);t["default"]=m.exports},ee2f:function(e,t,a){}}]);