(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-537b4d73","chunk-2d0b6a79","chunk-2d0b6a79"],{"00d3":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"编辑",visible:e.visible,width:"650px",height:"600px",maskClosable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"500px"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.now_adver.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.now_adver.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{disabled:this.edited}})],1),a("a-form-item",{attrs:{label:"通用广告"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency",{initialValue:1==e.detail.now_adver.currency,valuePropName:"checked"}],expression:"['currency', {initialValue:detail.now_adver.currency == 1?true:false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"通用","un-checked-children":"不通用"},on:{change:e.switchComplete}})],1),0==e.detail.now_adver.currency?a("a-form-item",{attrs:{label:"所在区域"}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{initialValue:e.detail.now_adver.area,rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{initialValue:detail.now_adver.area,rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{disabled:this.edited,"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区"}})],1):e._e(),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[e.pic_show?a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}):e._e(),e.pic_show?a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}}):e._e(),a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"group/adver"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)]),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:e.detail.now_adver.url,rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url', {initialValue:detail.now_adver.url,rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{disabled:this.edited}}),a("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")])],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.now_adver.sort}],expression:"['sort', { initialValue: detail.now_adver.sort }]"}],attrs:{disabled:this.edited,min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.now_adver.status,valuePropName:"checked"}],expression:"['status', {initialValue:detail.now_adver.status == 1 ? true : false,valuePropName: 'checked'}]"}],attrs:{disabled:this.edited,"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)])},r=[],n=a("1da1"),s=(a("a434"),a("96cf"),a("8a11")),o=(a("c2d1"),{name:"decorateAdverEdit",data:function(){return{visible:!1,form:this.$form.createForm(this),id:"",type:1,url:"",edited:!1,cat_key:"",title:title,areaList:"",detail:"",previewVisible:!1,previewImage:"",fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){this.getAllArea()},methods:{editOne:function(e,t){var a=this;this.visible=!0,this.id=e,this.title=t,this.getAllArea(),this.request(s["a"].getEditAdver,{id:e}).then((function(e){a.removeImage(),a.detail=e,a.detail.now_adver.pic&&(a.fileList=[{uid:"-1",name:"当前图片",status:"done",url:a.detail.now_adver.pic}],a.length=a.fileList.length,a.pic=a.detail.now_adver.pic,a.pic_show=!0)}))},handleCancle:function(){this.visible=!1},getAllArea:function(){var e=this;this.request(s["a"].getAllArea,{type:1}).then((function(t){console.log(t),e.areaList=t}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){console.log(e),e?alert(2222):(a.id=t.id,a.currency=1==a.currency?1:0,a.pic=t.pic,a.areaList||(a.areaList=[]),t.request(s["a"].addGroupAdver,a).then((function(e){t.id>0?(t.$message.success("编辑成功"),t.$emit("update",{now_cat_id:t.detail.now_adver.cat_id})):t.$message.success("添加成功"),setTimeout((function(){t.pic="",t.form=t.$form.createForm(t),t.visible=!1,t.$emit("ok",a)}),1500)})))}))},switchComplete:function(e){this.detail.now_adver.currency=e},changeAppType:function(e){this.detail.now_adver.app_open_type=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})}}}),c=o,l=(a("96e4"),a("2877")),d=Object(l["a"])(c,i,r,!1,null,null,null);t["default"]=d.exports},"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d3b7");function i(e,t,a,i,r,n,s){try{var o=e[n](s),c=o.value}catch(l){return void a(l)}o.done?t(c):Promise.resolve(c).then(i,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function o(e){i(s,r,n,o,c,"next",e)}function c(e){i(s,r,n,o,c,"throw",e)}o(void 0)}))}}},"3adc":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1100,height:600,visible:e.visible,footer:null},on:{cancel:e.handelCancle}},[a("div",[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.getAddModel}},[e._v("新建")]),a("a-table",{attrs:{columns:e.columns,"data-source":e.list,rowKey:"id",scroll:{y:700}},scopedSlots:e._u([{key:"sort",fn:function(t,i){return a("span",{},[e._v(e._s(i.sort))])}},{key:"name",fn:function(t,i){return a("span",{},[e._v(e._s(i.name))])}},{key:"area_name",fn:function(t,i){return a("span",{},[e._v(e._s(i.area_name))])}},{key:"pic",fn:function(e,t){return a("span",{},[a("img",{attrs:{width:"70px",height:"30px",src:t.pic}})])}},{key:"last_time",fn:function(t,i){return a("span",{},[e._v(e._s(i.last_time))])}},{key:"status",fn:function(t){return a("span",{},[0==t?a("a-badge",{attrs:{status:"error",text:"关闭"}}):e._e(),1==t?a("a-badge",{attrs:{status:"success",text:"开启"}}):e._e()],1)}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.getOrEdit(i.id)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.delOne(i.id)}}},[e._v("删除")])],1)}}])}),a("a-modal",{attrs:{title:"添加",visible:e.add_visible,width:"650px",maskClosable:!1},on:{cancel:e.handleCancle,ok:e.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"500px"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name',{rules: [{required: true, message: '请填写名称'}]}]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"通用广告"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency"],expression:"['currency']"}],attrs:{"checked-children":"通用","un-checked-children":"不通用",defaultChecked:!0},on:{change:e.switchCurrency}})],1),0==e.currency?a("a-form-item",{attrs:{label:"所在区域"}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:e.areaList,placeholder:"请选择省市区"}})],1):e._e(),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[e.pic_show?a("div",[a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}),a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:e.removeImage}})],1):e._e(),a("div",[a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"group/adver"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:e.handleUploadChange,preview:e.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(" 选择图片 ")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)])]),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url',{rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),a("a",{staticClass:"ant-form-text",on:{click:e.setLinkBases}},[e._v(" 从功能库选择 ")])],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.status,valuePropName:"checked"}],expression:"['status',{initialValue:status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)]),a("decorate-adver-edit",{ref:"adverEditModel",on:{update:e.getList}})],1)])},r=[],n=a("1da1"),s=(a("a434"),a("96cf"),a("8a11")),o=a("00d3"),c=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"城市",dataIndex:"area_name",width:100,key:"area_name",scopedSlots:{customRender:"area_name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l={name:"decorateAdver",components:{DecorateAdverEdit:o["default"]},data:function(){return{visible:!1,add_visible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:c,list:[],tab_key:1,form:this.$form.createForm(this),id:"",type:3,areaList:"",app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},now_cat_id:0,status:1}},created:function(){this.getAllArea()},methods:{init:function(){},getList:function(e){var t=this;this.visible=!0,this.title=e.title,this.request(s["a"].getAdverList,e).then((function(e){console.log(e),t.list=e.adver_list,t.now_cat_id=e.now_cat_id}))},handelCancle:function(){this.visible=!1},getAddModel:function(){this.add_visible=!0,this.length=0,this.pic="",this.pic_show=!1,this.removeImage()},getOrEdit:function(e){this.$refs.adverEditModel.editOne(e,this.title)},delOne:function(e){var t=this;this.$confirm({title:"提示",content:"确定删除该广告？",onOk:function(){t.request(s["a"].delGroupAdver,{id:e}).then((function(e){t.getList({now_cat_id:t.now_cat_id})}))},onCancel:function(){}})},switchCurrency:function(e){this.currency=e},handleUploadChange:function(e){var t=e.fileList;this.fileList=t,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,getBase64(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var e=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(t){console.log("handleOk",t),e.url=t.url,e.$nextTick((function(){e.form.setFieldsValue({url:e.url})}))}})},handleCancle:function(){this.add_visible=!1,this.pic=""},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(a.cat_id=t.now_cat_id,a.currency=!1===a.currency?0:1,a.pic=t.pic,a.areaList||(a.areaList=[]),a.status=!1===a.status?0:1,t.request(s["a"].addGroupAdver,a).then((function(e){t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.pic="",t.getList({now_cat_id:t.now_cat_id}),t.add_visible=!1}),1500)})))}))},getAllArea:function(){var e=this;this.request(s["a"].getAllArea,{type:1}).then((function(t){e.areaList=t}))}}},d=l,u=a("2877"),h=Object(u["a"])(d,i,r,!1,null,null,null);t["default"]=h.exports},"3f29":function(e,t,a){},"563e":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"color-picker"},[a("colorPicker",{staticClass:"color-box",on:{change:e.headleChangeColor},model:{value:e.colorInfo,callback:function(t){e.colorInfo=t},expression:"colorInfo"}}),a("p",{staticClass:"color-name"},[e._v(e._s(e.colorInfo))])],1)},r=[],n={name:"CustomColorPicker",components:{},data:function(){return{colorInfo:""}},props:{color:{type:String,default:"#ffffff"},disabled:{type:Boolean,default:!1}},watch:{color:{handler:function(e){console.log(e),e&&this.$nextTick((function(){this.colorInfo=e}))},immediate:!0}},mounted:function(){this.colorInfo=this.color},methods:{headleChangeColor:function(e){this.$emit("update:color",e)}}},s=n,o=(a("7d1f0"),a("2877")),c=Object(o["a"])(s,i,r,!1,null,"0f1938e4",null);t["a"]=c.exports},"6c65":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.refresh?a("div",{staticClass:"page mt-20 ml-10 mr-10 mb-20"},[0==e.$route.query.cat_id?a("groupCategoryEditForm",{attrs:{cat_id:e.$route.query.cat_id||0,cat_fid:e.$route.query.cat_fid||0,group_content_switch:e.group_content_switch}}):e._e(),0!=e.$route.query.cat_id?a("a-tabs",{attrs:{"default-active-key":e.key},on:{change:e.tabsChange}},[a("a-tab-pane",{key:"1",attrs:{tab:"分类信息"}},[a("groupCategoryEditForm",{attrs:{cat_id:e.$route.query.cat_id||0,cat_fid:e.$route.query.cat_fid||0,group_content_switch:e.group_content_switch}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"分类页装修"}},[a("a-row",{staticStyle:{background:"white",padding:"20px"}},[a("a-col",{attrs:{span:10}},[a("a-list",{attrs:{"item-layout":"horizontal","data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:t.desc}},[a("a",{attrs:{slot:"title",id:"title"},slot:"title"},[e._v(e._s(t.title))])]),"头部背景色"==t.title?a("a-form",[a("a-form-item",[a("color-picker",{attrs:{color:e.main_color},on:{"update:color":function(t){e.main_color=t}}})],1)],1):e._e(),t.show_switch?a("a-switch",{on:{change:e.changeRec},model:{value:e.is_display,callback:function(t){e.is_display=t},expression:"is_display"}}):e._e(),t.button?a("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.getClick(t.click,t.title)}}},[e._v(" "+e._s(t.button)+" ")]):e._e()],1)}}],null,!1,2911478796)}),a("a-divider")],1),a("a-col",{attrs:{span:2}}),a("a-col",{staticStyle:{position:"relative",display:"flex","flex-direction":"column"},attrs:{span:12}},[a("iframe",{staticStyle:{width:"400px",height:"800px"},attrs:{id:"myframe",frameborder:"0",src:e.url}}),a("a-button",{staticStyle:{width:"65px","margin-top":"10px"},attrs:{type:"primary"},on:{click:e.refreshFrame}},[e._v("刷新 ")])],1)],1)],1)],1):e._e(),a("decorate-adver",{ref:"bannerModel"})],1):e._e()},r=[],n=(a("d3b7"),a("25f0"),a("a9e3"),a("8a11")),s=a("2c92c"),o=a("563e"),c=a("3adc"),l=[{title:"头部背景色",desc:"",button:"",show_switch:!1,change:"",click:""},{title:"热搜词",desc:"设置推荐热搜关键词后，对应热搜词即可展示在频道页头部",button:"装修",show_switch:!1,change:"",click:"getHotSearch"},{title:"导航栏导航列表",desc:"按照团购分类子分类读取数据，默认一行展示5个，可展示两行，更多可轮播展示",button:"",show_switch:!1,change:"",click:""},{title:"广告位",desc:"尺寸为 702*142，仅显示一张广告图",button:"装修",show_switch:!1,change:"",click:"getAdver"},{title:"优选好店",desc:"按照分类下店铺评分以及销量展示店铺，默认展示9个",button:"",show_switch:!1,change:"",click:""},{title:"特价拼团",desc:"在该分类下，按照销量，展示正在拼团的前3款商品",button:"",show_switch:!1,change:"",click:""},{title:"精选热卖",desc:"推荐分类下热门商品，提高曝光率",button:"装修",show_switch:!1,change:"",click:"getSelect"},{title:"超值联盟",desc:"推荐该分类类型的优惠组合，提高曝光率",button:"装修",show_switch:!1,change:"",click:"getCombination"},{title:"店铺列表",desc:"在该频道分类下，默认按评分高低展示店铺",button:"",show_switch:!1,change:"",click:""}],d={components:{groupCategoryEditForm:s["default"],ColorPicker:o["a"],DecorateAdver:c["default"]},data:function(){return{cat_id:this.$route.query.cat_id||0,cat_fid:this.$route.query.cat_fid||0,group_content_switch:0,refresh:!0,data:l,main_color:"",queryParam:{now_cat_id:0,cat_id:0,location:0,size:"",cat_name:"",cat_key:""},key:"1",url:""}},watch:{main_color:function(e){this.updateGroupCategoryBgColor(e)},"$route.query.key":function(e){e&&(this.key=e.toString())}},mounted:function(){},activated:function(){this.refresh=!0,this.configGroupCategoryOpt(),this.getGroupCategory(),this.getUrl()},deactivated:function(){this.refresh=!1},methods:{configGroupCategoryOpt:function(){var e=this;this.request(n["a"].configGroupCategory,null).then((function(t){e.group_content_switch=t&&t.group_content_switch?t.group_content_switch:0}))},tabsChange:function(e){console.log(e,"tabsChange")},getGroupCategory:function(){var e=this;Number(this.$route.query.cat_id)&&this.request(n["a"].getGroupCategoryInfo,{cat_id:this.$route.query.cat_id}).then((function(t){e.main_color=t.detail.bg_color}))},updateGroupCategoryBgColor:function(e){this.request(n["a"].updateGroupCategoryBgColor,{cat_id:this.$route.query.cat_id,bg_color:e}).then((function(e){}))},getClick:function(e,t){this[e](t)},getHotSearch:function(){this.$router.push({path:"/group/platform.groupRenovationSearchHot/index",query:{cat_id:this.$route.query.cat_id}})},getBanner:function(e){this.queryParam["cat_id"]=this.$route.query.cat_id,this.queryParam["location"]=2,this.queryParam["size"]="640*240",this.queryParam["cat_name"]=e,this.queryParam["cat_key"]="wap_group_channel_top",this.queryParam["title"]=e,this.$refs.bannerModel.getList(this.queryParam)},getAdver:function(e){this.queryParam["cat_id"]=this.$route.query.cat_id,this.queryParam["location"]=2,this.queryParam["size"]="702*142",this.queryParam["cat_key"]="wap_group_channel_adver",this.queryParam["cat_name"]=e,this.queryParam["title"]=e,this.$refs.bannerModel.getList(this.queryParam)},getSelect:function(e){this.$router.push({path:"/group/platform.groupSelect/edit",query:{cat_id:this.$route.query.cat_id,type:1}})},getCombination:function(e){this.$router.push({path:"/group/platform.groupRenovationCombine/edit",query:{cat_id:this.$route.query.cat_id,type:2}})},getUrl:function(){var e=this;this.request(n["a"].getUrl,{type:"channel",cat_id:this.$route.query.cat_id}).then((function(t){e.url=t.url}))},refreshFrame:function(){document.getElementById("myframe").contentWindow.location.reload(!0)}}},u=d,h=(a("cd2e"),a("2877")),p=Object(h["a"])(u,i,r,!1,null,"9ce9bb30",null);t["default"]=p.exports},"75ab":function(e,t,a){},"7d1f0":function(e,t,a){"use strict";a("8401")},8401:function(e,t,a){},"96e4":function(e,t,a){"use strict";a("75ab")},cd2e:function(e,t,a){"use strict";a("3f29")}}]);