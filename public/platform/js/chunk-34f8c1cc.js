(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34f8c1cc","chunk-2d0b6a79","chunk-52f70b58","chunk-2d0b6a79"],{"148c":function(e,t,i){"use strict";var a={getActivityList:"/employee/platform.EmployeeActivity/getActivityList",delActivity:"/employee/platform.EmployeeActivity/delActivity",getActivityEdit:"/employee/platform.EmployeeActivity/getActivityEdit",employActivityAddOrEdit:"/employee/platform.EmployeeActivity/employActivityAddOrEdit",getActivityGoods:"/employee/platform.EmployeeActivity/getActivityGoods",getActivityAdverList:"/employee/platform.EmployeeActivity/getActivityAdverList",activityAdverDel:"/employee/platform.EmployeeActivity/activityAdverDel",getAllArea:"/employee/platform.EmployeeActivity/getAllArea",addOrEditActivityAdver:"/employee/platform.EmployeeActivity/addOrEditActivityAdver",getActivityAdver:"/employee/platform.EmployeeActivity/getActivityAdver",getShopGoodsList:"/employee/platform.EmployeeActivity/getShopGoodsList",addActivityShopGoods:"/employee/platform.EmployeeActivity/addActivityShopGoods",setActivityGoodsSort:"/employee/platform.EmployeeActivity/setActivityGoodsSort",delActivityGoods:"/employee/platform.EmployeeActivity/delActivityGoods",getlableAll:"/employee/platform.EmployeeActivity/getlableAll",getPickTimeSetting:"/employee/platform.EmployeeActivity/getPickTimeSetting",pickTimeSetting:"/employee/platform.EmployeeActivity/pickTimeSetting"};t["a"]=a},"1da1":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));i("d3b7");function a(e,t,i,a,l,s,r){try{var n=e[s](r),o=n.value}catch(c){return void i(c)}n.done?t(o):Promise.resolve(o).then(a,l)}function l(e){return function(){var t=this,i=arguments;return new Promise((function(l,s){var r=e.apply(t,i);function n(e){a(r,l,s,n,o,"next",e)}function o(e){a(r,l,s,n,o,"throw",e)}n(void 0)}))}}},"269b":function(e,t,i){"use strict";i.r(t);i("b0c0"),i("4e82");var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{visible:e.visible,width:"750px",height:e.height,closable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[t("div",{style:[{height:e.height},{"overflow-y":"scroll"}]},[t("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),"wap_life_tools_ticket_slider"!==this.cat_key?t("a-form-item",{attrs:{label:"通用广告"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1):e._e(),0==e.detail.now_adver.currency?t("a-form-item",{attrs:{label:"所在区域"}},[t("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区",defaultValue:[e.detail.now_adver.province_id,e.detail.now_adver.city_id]}})],1):e._e(),t("a-form-item",{attrs:{label:"图片",extra:""}},[t("div",{staticClass:"clearfix"},[e.pic_show?t("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?t("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),t("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"employee/pictures"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),t("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),t("a-form-item",{attrs:{label:"链接地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url}],expression:"['url', {initialValue:detail.now_adver.url}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),0==this.edited?t("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")]):e._e()],1),t("a-form-item",{attrs:{label:"设置仅为员工可见"}},[t("a-button",{attrs:{type:"primary"},on:{click:e.onAddInput}},[e._v(" 添加 ")]),e._l(e.selectedLable,(function(i,a){return t("div",{key:a,staticClass:"goods-container"},[t("div",{staticClass:"goods-content"},[t("div",{staticClass:"goods-content-box"},[t("div",{staticClass:"goods-content-left"},[t("a-form",{attrs:{"label-col":{span:3},"wrapper-col":{span:20}}},[t("a-form-item",{attrs:{label:"商家"}},[t("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择商家",value:i.mer_id},on:{change:function(t){return e.selecteMerChangge(t,a)}}},e._l(e.lableList,(function(i){return t("a-select-option",{key:i.mer_id,attrs:{value:i.mer_id}},[e._v(e._s(i.name))])})),1)],1),e._l(e.lableList,(function(l){return t("div",{key:l.mer_id},[l.mer_id==i.mer_id?t("a-form-item",{attrs:{label:"标签"}},[t("a-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择标签",mode:"multiple",value:i.lables},on:{change:function(t){return e.selecteLableChangge(t,a)}}},e._l(l.lables,(function(i){return t("a-select-option",{key:i.lable_id,attrs:{value:i.lable_id}},[e._v(e._s(i.name))])})),1)],1):e._e()],1)}))],2)],1),t("div",{staticClass:"goods-content-right"},[t("a-button",{attrs:{type:"danger"},on:{click:function(t){return e.delPrivateSpec(a)}}},[e._v("删除")])],1)])])])}))],2),t("a-form-item",{attrs:{label:"排序"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),t("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),t("a-form-item",{attrs:{label:"状态"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.now_adver.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),t("link-bases",{ref:"linkModel"})],1)},l=[],s=i("1da1"),r=(i("96cf"),i("7db0"),i("d3b7"),i("a434"),i("148c")),n=i("c2d1"),o={name:"decorateAdverEdit",components:{LinkBases:n["default"]},data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",height:"600px",edited:!0,cat_key:"",title:"",areaList:"",activity_id:0,detail:{now_adver:{name:"",pic:"",status:0}},previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},selectedLable:[],lableList:[]}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(e,t,i,a,l){var s=this;this.visible=!0,this.edited=t,this.type=i,this.id=e,this.activity_id=a,this.title=l,this.getAllArea(),this.getlableAll(),e>0?this.request(r["a"].getActivityAdver,{id:e}).then((function(e){s.removeImage(),s.detail=e,s.selectedLable=e.lable_arr||[],s.detail.now_adver.pic&&(s.fileList=[{uid:"-1",name:"当前图片",status:"done",url:s.detail.now_adver.pic}],s.length=s.fileList.length,s.pic=s.detail.now_adver.pic,s.pic_show=!0)})):(this.detail.now_adver={name:"",pic:"",status:0},this.selectedLable=[],this.removeImage())},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(r["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},getlableAll:function(){var e=this;this.request(r["a"].getlableAll,{}).then((function(t){e.lableList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,i){if(console.log(44444,t.activity_id),!e){if(i.id=t.id,i.activity_id=t.activity_id,i.currency=1==i.currency?1:0,i.pic=t.pic,i.areaList||(i.areaList=[]),i.lable_arr=t.selectedLable,i.lable_arr.length>0){var a=i.lable_arr.find((function(e){return e.mer_id<=0||e.lables.length<=0}));if(a)return t.$message.error("未选择商家或者标签"),!1}console.log(i),t.request(r["a"].addOrEditActivityAdver,i).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),t.$emit("update",t.activity_id),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",i)}),1500)}))}}))},switchComplete:function(e){this.detail.now_adver.currency=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.url||e.preview){i.next=4;break}return i.next=3,getBase64(e.originFileObj);case 3:e.preview=i.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},removeImage:function(){console.log(1111,this.fileList),void 0!=this.fileList?this.fileList.splice(0,this.fileList.length):this.fileList=[],this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})},onAddInput:function(){this.selectedLable.push({lables:[]})},delPrivateSpec:function(e){this.selectedLable.splice(e,1)},selecteMerChangge:function(e,t){var i=this.selectedLable.find((function(t){return t.mer_id==e}));if(i)return this.$message.error("该商家已添加过"),!1;var a=this.selectedLable[t];a["mer_id"]=e,a["lables"]=[],this.$set(this.selectedLable,t,a)},selecteLableChangge:function(e,t){console.log(e,"val2");var i=this.selectedLable[t];i["lables"]=e,this.$set(this.selectedLable,t,i)}}},c=o,d=(i("40eb"),i("2877")),u=Object(d["a"])(c,a,l,!1,null,"9cda09bc",null);t["default"]=u.exports},"40eb":function(e,t,i){"use strict";i("c359")},"66f7e":function(e,t,i){},b5e7:function(e,t,i){"use strict";i("66f7e")},c359:function(e,t,i){},e8df:function(e,t,i){"use strict";i.r(t);i("4e82"),i("b0c0");var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:1100,height:600,visible:e.avisible,footer:""},on:{cancel:e.handelCancle}},[t("div",[t("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.getAddModel}},[e._v("新建")]),t("a-table",{attrs:{columns:e.columns,rowKey:"id","data-source":e.list,scroll:{y:700}},scopedSlots:e._u([{key:"sort",fn:function(i,a){return t("span",{},[e._v(e._s(a.sort))])}},{key:"name",fn:function(i,a){return t("span",{},[e._v(e._s(a.name))])}},{key:"area_name",fn:function(i,a){return t("span",{},[e._v(e._s(a.area_name))])}},{key:"pic",fn:function(e,i){return t("span",{},[t("img",{attrs:{width:"70px",height:"30px",src:i.pic}})])}},{key:"last_time",fn:function(i,a){return t("span",{},[e._v(e._s(a.last_time))])}},{key:"status",fn:function(i){return t("span",{},[0==i?t("a-badge",{attrs:{status:"error",text:"关闭"}}):e._e(),1==i?t("a-badge",{attrs:{status:"success",text:"开启"}}):e._e()],1)}},{key:"action",fn:function(i,a){return t("span",{},[t("a",{on:{click:function(t){return e.getOrEdit(a.id,!0,1)}}},[e._v("查看")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{on:{click:function(t){return e.getOrEdit(a.id,!1,1)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(a.id)}}},[t("a",[e._v("删除")])])],1)}}])}),t("decorate-adver-edit",{ref:"adverEditModel",on:{update:e.getList}})],1)])},l=[],s=i("148c"),r=i("269b"),n=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"浏览量",dataIndex:"click_number",key:"click_number"},{title:"城市",dataIndex:"area_name",width:100,key:"area_name",scopedSlots:{customRender:"area_name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],o={name:"decorateAdver",components:{DecorateAdverEdit:r["default"]},data:function(){return{avisible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:n,list:[],tab_key:1,activity_id:0,form:this.$form.createForm(this),id:"",type:3,app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){},methods:{init:function(){},getList:function(e,t){var i=this;this.avisible=!0,this.activity_id=e,this.title="配置轮播图",this.request(s["a"].getActivityAdverList,{activity_id:e}).then((function(e){i.tab_name=e.now_category.cat_name,i.cat_id=e.now_category.cat_id,i.cat_key=e.now_category.cat_key,i.desc="图片建议尺寸"+e.now_category.size_info,i.list=e.adver_list}))},getOrEdit:function(e,t,i){this.$refs.adverEditModel.editOne(e,t,i,this.activity_id,this.title)},getAddModel:function(){this.$refs.adverEditModel.editOne(0,!1,1,this.activity_id,this.title)},delOne:function(e){var t=this;this.request(s["a"].activityAdverDel,{id:e}).then((function(e){t.$message.success("删除成功"),t.getList(t.activity_id,t.title)}))},handleOk:function(e){this.avisible=!1},handelCancle:function(){this.avisible=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}},c=o,d=(i("b5e7"),i("2877")),u=Object(d["a"])(c,a,l,!1,null,"37945294",null);t["default"]=u.exports}}]);