(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddc6e2f0","chunk-2d0b6a79","chunk-fb36e5c8","chunk-2d0b6a79"],{"00d3":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"编辑",visible:e.visible,width:"650px",height:"600px",maskClosable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[r("div",{staticStyle:{"overflow-y":"scroll",height:"500px"}},[r("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[r("a-form-item",{attrs:{label:"名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),r("a-form-item",{attrs:{label:"通用广告"}},[r("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1),0==e.detail.now_adver.currency?r("a-form-item",{attrs:{label:"所在区域"}},[r("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{initialValue:e.detail.now_adver.area,rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{initialValue:detail.now_adver.area,rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区"}})],1):e._e(),r("a-form-item",{attrs:{label:"图片",extra:""}},[r("div",{staticClass:"clearfix"},[e.pic_show?r("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?r("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),r("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"group/adver"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),r("a-form-item",{attrs:{label:"链接地址"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url,rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url', {initialValue:detail.now_adver.url,rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),r("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")])],1),r("a-form-item",{attrs:{label:"排序"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),r("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),r("a-form-item",{attrs:{label:"状态"}},[r("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status', {initialValue:detail.now_adver.status == 1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),r("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)])},a=[],i=r("1da1"),n=(r("a434"),r("96cf"),r("8a11")),s=(r("c2d1"),{name:"decorateAdverEdit",data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",edited:!1,cat_key:"",title:title,areaList:"",detail:"",previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(e,t){var r=this;this.visible=!0,this.id=e,this.title=t,this.getAllArea(),this.request(n["a"].getEditAdver,{id:e}).then((function(e){r.removeImage(),r.detail=e,r.detail.now_adver.pic&&(r.fileList=[{uid:"-1",name:"当前图片",status:"done",url:r.detail.now_adver.pic}],r.length=r.fileList.length,r.pic=r.detail.now_adver.pic,r.pic_show=!0)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(n["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){console.log(e),e?alert(2222):(r.id=t.id,r.currency=1==r.currency?1:0,r.pic=t.pic,r.areaList||(r.areaList=[]),t.request(n["a"].addGroupAdver,r).then((function(e){t.id>0?(t.$message.success("编辑成功"),t.$emit("update",{now_cat_id:t.detail.now_adver.cat_id})):t.$message.success("添加成功"),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",r)}),1500)})))}))},switchComplete:function(e){this.detail.now_adver.currency=e},changeAppType:function(e){this.detail.now_adver.app_open_type=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,getBase64(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}}),l=s,u=(r("96e4"),r("2877")),d=Object(u["a"])(l,o,a,!1,null,null,null);t["default"]=d.exports},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function o(e,t,r,o,a,i,n){try{var s=e[i](n),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(o,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var n=e.apply(t,r);function s(e){o(n,a,i,s,l,"next",e)}function l(e){o(n,a,i,s,l,"throw",e)}s(void 0)}))}}},"381b":function(e,t,r){},"3adc":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1100,height:600,visible:e.visible,footer:null},on:{cancel:e.handelCancle}},[r("div",[r("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.getAddModel}},[e._v("新建")]),r("a-table",{attrs:{columns:e.columns,"data-source":e.list,rowKey:"id",scroll:{y:700}},scopedSlots:e._u([{key:"sort",fn:function(t,o){return r("span",{},[e._v(e._s(o.sort))])}},{key:"name",fn:function(t,o){return r("span",{},[e._v(e._s(o.name))])}},{key:"area_name",fn:function(t,o){return r("span",{},[e._v(e._s(o.area_name))])}},{key:"pic",fn:function(e,t){return r("span",{},[r("img",{attrs:{width:"70px",height:"30px",src:t.pic}})])}},{key:"last_time",fn:function(t,o){return r("span",{},[e._v(e._s(o.last_time))])}},{key:"status",fn:function(t){return r("span",{},[0==t?r("a-badge",{attrs:{status:"error",text:"关闭"}}):e._e(),1==t?r("a-badge",{attrs:{status:"success",text:"开启"}}):e._e()],1)}},{key:"action",fn:function(t,o){return r("span",{},[r("a",{on:{click:function(t){return e.getOrEdit(o.id)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.delOne(o.id)}}},[e._v("删除")])],1)}}])}),r("a-modal",{attrs:{title:"添加",visible:e.add_visible,width:"650px",maskClosable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[r("div",{staticStyle:{"overflow-y":"scroll",height:"500px"}},[r("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[r("a-form-item",{attrs:{label:"名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name',{rules: [{required: true, message: '请填写名称'}]}]"}],attrs:{placeholder:"请输入名称"}})],1),r("a-form-item",{attrs:{label:"通用广告"}},[r("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency"],expression:"['currency']"}],attrs:{"checked-children":"通用","un-checked-children":"不通用",defaultChecked:!0},on:{change:e.switchCurrency}})],1),0==e.currency?r("a-form-item",{attrs:{label:"所在区域"}},[r("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区"}})],1):e._e(),r("a-form-item",{attrs:{label:"图片",extra:""}},[r("div",{staticClass:"clearfix"},[e.pic_show?r("div",[r("img",{attrs:{width:"75px",height:"75px",src:this.pic}}),r("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}})],1):e._e(),r("div",[r("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"group/adver"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)])]),r("a-form-item",{attrs:{label:"链接地址"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url',{rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),r("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")])],1),r("a-form-item",{attrs:{label:"排序"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),r("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),r("a-form-item",{attrs:{label:"状态"}},[r("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.status,valuePropName:"checked"}],expression:"['status',{initialValue:status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1),r("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)]),r("decorate-adver-edit",{ref:"adverEditModel",on:{update:e.getList}})],1)])},a=[],i=r("1da1"),n=(r("a434"),r("96cf"),r("8a11")),s=r("00d3"),l=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"城市",dataIndex:"area_name",width:100,key:"area_name",scopedSlots:{customRender:"area_name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],u={name:"decorateAdver",components:{DecorateAdverEdit:s["default"]},data:function(){return{visible:!1,add_visible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:l,list:[],tab_key:1,form:this.$form.createForm(this),id:"",type:3,areaList:"",app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},now_cat_id:0,status:1}},created:function(){this.getAllArea()},methods:{init:function(){},getList:function(e){var t=this;this.visible=!0,this.title=e.title,this.request(n["a"].getAdverList,e).then((function(e){console.log(e),t.list=e.adver_list,t.now_cat_id=e.now_cat_id}))},handelCancle:function(){this.visible=!1},getAddModel:function(){this.add_visible=!0,this.length=0,this.pic="",this.pic_show=!1,this.removeImage()},getOrEdit:function(e){this.$refs.adverEditModel.editOne(e,this.title)},delOne:function(e){var t=this;this.$confirm({title:"提示",content:"确定删除该广告？",onOk:function(){t.request(n["a"].delGroupAdver,{id:e}).then((function(e){t.getList({now_cat_id:t.now_cat_id})}))},onCancel:function(){}})},switchCurrency:function(e){this.currency=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,getBase64(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})},handleCancle:function(){this.add_visible=!1,this.pic=""},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||(r.cat_id=t.now_cat_id,r.currency=!1===r.currency?0:1,r.pic=t.pic,r.areaList||(r.areaList=[]),r.status=!1===r.status?0:1,t.request(n["a"].addGroupAdver,r).then((function(e){t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.pic="",t.getList({now_cat_id:t.now_cat_id}),t.add_visible=!1}),1500)})))}))},getAllArea:function(){var e=this;this.request(n["a"].getAllArea,{type:1}).then((function(t){e.areaList=t}))}}},d=u,p=r("2877"),c=Object(p["a"])(d,o,a,!1,null,null,null);t["default"]=c.exports},"8a11":function(e,t,r){"use strict";var o={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};t["a"]=o},"96e4":function(e,t,r){"use strict";r("381b")}}]);