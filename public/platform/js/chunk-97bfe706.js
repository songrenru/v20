(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97bfe706","chunk-2d0c4883"],{"3adc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1100,height:600,visible:t.visible,footer:null},on:{cancel:t.handelCancle}},[a("div",[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:t.getAddModel}},[t._v("新建")]),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,rowKey:"id",scroll:{y:700}},scopedSlots:t._u([{key:"sort",fn:function(e,i){return a("span",{},[t._v(t._s(i.sort))])}},{key:"name",fn:function(e,i){return a("span",{},[t._v(t._s(i.name))])}},{key:"area_name",fn:function(e,i){return a("span",{},[t._v(t._s(i.area_name))])}},{key:"pic",fn:function(t,e){return a("span",{},[a("img",{attrs:{width:"70px",height:"30px",src:e.pic}})])}},{key:"last_time",fn:function(e,i){return a("span",{},[t._v(t._s(i.last_time))])}},{key:"status",fn:function(e){return a("span",{},[0==e?a("a-badge",{attrs:{status:"error",text:"关闭"}}):t._e(),1==e?a("a-badge",{attrs:{status:"success",text:"开启"}}):t._e()],1)}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.getOrEdit(i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.delOne(i.id)}}},[t._v("删除")])],1)}}])}),a("a-modal",{attrs:{title:"添加",visible:t.add_visible,width:"650px",maskClosable:!1},on:{cancel:t.handleCancle,ok:t.handleSubmit}},[a("div",{staticStyle:{"overflow-y":"scroll",height:"500px"}},[a("a-form",t._b({attrs:{id:"components-form-demo-validate-other",form:t.form}},"a-form",t.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name',{rules: [{required: true, message: '请填写名称'}]}]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"通用广告"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["currency"],expression:"['currency']"}],attrs:{"checked-children":"通用","un-checked-children":"不通用",defaultChecked:!0},on:{change:t.switchCurrency}})],1),0==t.currency?a("a-form-item",{attrs:{label:"所在区域"}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["areaList",{rules:[{required:!0,message:"请选择区域"}]}],expression:"['areaList',{rules: [{required: true, message: '请选择区域'}]}]"}],attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:t.areaList,placeholder:"请选择省市区"}})],1):t._e(),a("a-form-item",{attrs:{label:"图片",extra:""}},[a("div",{staticClass:"clearfix"},[t.pic_show?a("div",[a("img",{attrs:{width:"75px",height:"75px",src:this.pic}}),a("a-icon",{staticClass:"delete-pointer",attrs:{type:"close-circle",theme:"filled"},on:{click:t.removeImage}})],1):t._e(),a("div",[a("a-upload",{attrs:{"list-type":"picture-card",name:"reply_pic",data:{upload_dir:"group/adver"},multiple:!0,action:"/v20/public/index.php/common/common.UploadFile/uploadPictures"},on:{change:t.handleUploadChange,preview:t.handleUploadPreview}},[this.length<1&&!this.pic_show?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v(" 选择图片 ")])],1):t._e()]),a("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleUploadCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)])]),a("a-form-item",{attrs:{label:"链接地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请填写链接地址"}]}],expression:"['url',{rules: [{required: true, message: '请填写链接地址'}]}]"}],staticStyle:{width:"249px"},attrs:{placeholder:"请填写跳转链接"}}),a("a",{staticClass:"ant-form-text",on:{click:t.setLinkBases}},[t._v(" 从功能库选择 ")])],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[t._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.status,valuePropName:"checked"}],expression:"['status',{initialValue:status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1)]),a("decorate-adver-edit",{ref:"adverEditModel",on:{update:t.getList}})],1)])},r=[],o=a("c7eb"),n=a("1da1"),s=(a("a434"),a("8a11")),c=a("00d3"),l=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"城市",dataIndex:"area_name",width:100,key:"area_name",scopedSlots:{customRender:"area_name"}},{title:"图片",dataIndex:"pic",key:"pic",scopedSlots:{customRender:"pic"}},{title:"操作时间",dataIndex:"last_time",key:"last_time",scopedSlots:{customRender:"last_time"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],u={name:"decorateAdver",components:{DecorateAdverEdit:c["default"]},data:function(){return{visible:!1,add_visible:!1,title:"",tab_name:"",desc:"",cat_id:"",cat_key:"",columns:l,list:[],tab_key:1,form:this.$form.createForm(this),id:"",type:3,areaList:"",app_open_type:2,wxapp_open_type:1,currency:1,previewVisible:!1,previewImage:"",app_list:[],wxapp_list:[],fileList:[],length:0,pic:"",pic_show:!1,formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},now_cat_id:0,status:1}},created:function(){this.getAllArea()},methods:{init:function(){},getList:function(t){var e=this;this.visible=!0,this.title=t.title,this.request(s["a"].getAdverList,t).then((function(t){console.log(t),e.list=t.adver_list,e.now_cat_id=t.now_cat_id}))},handelCancle:function(){this.visible=!1},getAddModel:function(){this.add_visible=!0,this.length=0,this.pic="",this.pic_show=!1,this.removeImage()},getOrEdit:function(t){this.$refs.adverEditModel.editOne(t,this.title)},delOne:function(t){var e=this;this.$confirm({title:"提示",content:"确定删除该广告？",onOk:function(){e.request(s["a"].delGroupAdver,{id:t}).then((function(t){e.getList({now_cat_id:e.now_cat_id})}))},onCancel:function(){}})},switchCurrency:function(t){this.currency=t},handleUploadChange:function(t){var e=t.fileList;this.fileList=e,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(t){var e=this;return Object(n["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,getBase64(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},removeImage:function(){this.fileList.splice(0,this.fileList.length),console.log(this.fileList),this.length=this.fileList.length,this.pic="",this.pic_show=!1},setLinkBases:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(e){console.log("handleOk",e),t.url=e.url,t.$nextTick((function(){t.form.setFieldsValue({url:t.url})}))}})},handleCancle:function(){this.add_visible=!1,this.pic=""},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){t||(a.cat_id=e.now_cat_id,a.currency=!1===a.currency?0:1,a.pic=e.pic,a.areaList||(a.areaList=[]),a.status=!1===a.status?0:1,e.request(s["a"].addGroupAdver,a).then((function(t){e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.pic="",e.getList({now_cat_id:e.now_cat_id}),e.add_visible=!1}),1500)})))}))},getAllArea:function(){var t=this;this.request(s["a"].getAllArea,{type:1}).then((function(e){t.areaList=e}))}}},d=u,h=a("0c7c"),p=Object(h["a"])(d,i,r,!1,null,null,null);e["default"]=p.exports},"563e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color-picker"},[a("colorPicker",{staticClass:"color-box",on:{change:t.headleChangeColor},model:{value:t.colorInfo,callback:function(e){t.colorInfo=e},expression:"colorInfo"}}),a("p",{staticClass:"color-name"},[t._v(t._s(t.colorInfo))])],1)},r=[],o={name:"CustomColorPicker",components:{},data:function(){return{colorInfo:""}},props:{color:{type:String,default:"#ffffff"},disabled:{type:Boolean,default:!1}},watch:{color:{handler:function(t){console.log(t),t&&this.$nextTick((function(){this.colorInfo=t}))},immediate:!0}},mounted:function(){this.colorInfo=this.color},methods:{headleChangeColor:function(t){this.$emit("update:color",t)}}},n=o,s=(a("7d1f0"),a("0c7c")),c=Object(s["a"])(n,i,r,!1,null,"0f1938e4",null);e["a"]=c.exports},"6c65":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.refresh?a("div",{staticClass:"page mt-20 ml-10 mr-10 mb-20"},[0==t.$route.query.cat_id?a("groupCategoryEditForm",{attrs:{cat_id:t.$route.query.cat_id||0,cat_fid:t.$route.query.cat_fid||0,group_content_switch:t.group_content_switch}}):t._e(),0!=t.$route.query.cat_id?a("a-tabs",{attrs:{"default-active-key":t.key},on:{change:t.tabsChange}},[a("a-tab-pane",{key:"1",attrs:{tab:"分类信息"}},[a("groupCategoryEditForm",{attrs:{cat_id:t.$route.query.cat_id||0,cat_fid:t.$route.query.cat_fid||0,group_content_switch:t.group_content_switch}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"分类页装修"}},[a("a-row",{staticStyle:{background:"white",padding:"20px"}},[a("a-col",{attrs:{span:10}},[a("a-list",{attrs:{"item-layout":"horizontal","data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.desc}},[a("a",{attrs:{slot:"title",id:"title"},slot:"title"},[t._v(t._s(e.title))])]),"头部背景色"==e.title?a("a-form",[a("a-form-item",[a("color-picker",{attrs:{color:t.main_color},on:{"update:color":function(e){t.main_color=e}}})],1)],1):t._e(),e.show_switch?a("a-switch",{on:{change:t.changeRec},model:{value:t.is_display,callback:function(e){t.is_display=e},expression:"is_display"}}):t._e(),e.button?a("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.getClick(e.click,e.title)}}},[t._v(" "+t._s(e.button)+" ")]):t._e()],1)}}],null,!1,2911478796)}),a("a-divider")],1),a("a-col",{attrs:{span:2}}),a("a-col",{staticStyle:{position:"relative",display:"flex","flex-direction":"column"},attrs:{span:12}},[a("iframe",{staticStyle:{width:"400px",height:"800px"},attrs:{id:"myframe",frameborder:"0",src:t.url}}),a("a-button",{staticStyle:{width:"65px","margin-top":"10px"},attrs:{type:"primary"},on:{click:t.refreshFrame}},[t._v("刷新 ")])],1)],1)],1)],1):t._e(),a("decorate-adver",{ref:"bannerModel"})],1):t._e()},r=[],o=(a("d3b7"),a("25f0"),a("a9e3"),a("8a11")),n=a("2c92c"),s=a("563e"),c=a("3adc"),l=[{title:"头部背景色",desc:"",button:"",show_switch:!1,change:"",click:""},{title:"热搜词",desc:"设置推荐热搜关键词后，对应热搜词即可展示在频道页头部",button:"装修",show_switch:!1,change:"",click:"getHotSearch"},{title:"导航栏导航列表",desc:"按照团购分类子分类读取数据，默认一行展示5个，可展示两行，更多可轮播展示",button:"",show_switch:!1,change:"",click:""},{title:"广告位",desc:"尺寸为 702*142，仅显示一张广告图",button:"装修",show_switch:!1,change:"",click:"getAdver"},{title:"优选好店",desc:"按照分类下店铺评分以及销量展示店铺，默认展示9个",button:"",show_switch:!1,change:"",click:""},{title:"特价拼团",desc:"在该分类下，按照销量，展示正在拼团的前3款商品",button:"",show_switch:!1,change:"",click:""},{title:"精选热卖",desc:"推荐分类下热门商品，提高曝光率",button:"装修",show_switch:!1,change:"",click:"getSelect"},{title:"超值联盟",desc:"推荐该分类类型的优惠组合，提高曝光率",button:"装修",show_switch:!1,change:"",click:"getCombination"},{title:"店铺列表",desc:"在该频道分类下，默认按评分高低展示店铺",button:"",show_switch:!1,change:"",click:""}],u={components:{groupCategoryEditForm:n["default"],ColorPicker:s["a"],DecorateAdver:c["default"]},data:function(){return{cat_id:this.$route.query.cat_id||0,cat_fid:this.$route.query.cat_fid||0,group_content_switch:0,refresh:!0,data:l,main_color:"",queryParam:{now_cat_id:0,cat_id:0,location:0,size:"",cat_name:"",cat_key:""},key:"1",url:""}},watch:{main_color:function(t){this.updateGroupCategoryBgColor(t)},"$route.query.key":function(t){t&&(this.key=t.toString())}},mounted:function(){},activated:function(){this.refresh=!0,this.configGroupCategoryOpt(),this.getGroupCategory(),this.getUrl()},deactivated:function(){this.refresh=!1},methods:{configGroupCategoryOpt:function(){var t=this;this.request(o["a"].configGroupCategory,null).then((function(e){t.group_content_switch=e&&e.group_content_switch?e.group_content_switch:0}))},tabsChange:function(t){console.log(t,"tabsChange")},getGroupCategory:function(){var t=this;Number(this.$route.query.cat_id)&&this.request(o["a"].getGroupCategoryInfo,{cat_id:this.$route.query.cat_id}).then((function(e){t.main_color=e.detail.bg_color}))},updateGroupCategoryBgColor:function(t){this.request(o["a"].updateGroupCategoryBgColor,{cat_id:this.$route.query.cat_id,bg_color:t}).then((function(t){}))},getClick:function(t,e){this[t](e)},getHotSearch:function(){this.$router.push({path:"/group/platform.groupRenovationSearchHot/index",query:{cat_id:this.$route.query.cat_id}})},getBanner:function(t){this.queryParam["cat_id"]=this.$route.query.cat_id,this.queryParam["location"]=2,this.queryParam["size"]="640*240",this.queryParam["cat_name"]=t,this.queryParam["cat_key"]="wap_group_channel_top",this.queryParam["title"]=t,this.$refs.bannerModel.getList(this.queryParam)},getAdver:function(t){this.queryParam["cat_id"]=this.$route.query.cat_id,this.queryParam["location"]=2,this.queryParam["size"]="702*142",this.queryParam["cat_key"]="wap_group_channel_adver",this.queryParam["cat_name"]=t,this.queryParam["title"]=t,this.$refs.bannerModel.getList(this.queryParam)},getSelect:function(t){this.$router.push({path:"/group/platform.groupSelect/edit",query:{cat_id:this.$route.query.cat_id,type:1}})},getCombination:function(t){this.$router.push({path:"/group/platform.groupRenovationCombine/edit",query:{cat_id:this.$route.query.cat_id,type:2}})},getUrl:function(){var t=this;this.request(o["a"].getUrl,{type:"channel",cat_id:this.$route.query.cat_id}).then((function(e){t.url=e.url}))},refreshFrame:function(){document.getElementById("myframe").contentWindow.location.reload(!0)}}},d=u,h=(a("cd2e"),a("0c7c")),p=Object(h["a"])(d,i,r,!1,null,"9ce9bb30",null);e["default"]=p.exports},"743fb":function(t,e,a){},"7d1f0":function(t,e,a){"use strict";a("b4c8")},b4c8:function(t,e,a){},cd2e:function(t,e,a){"use strict";a("743fb")}}]);