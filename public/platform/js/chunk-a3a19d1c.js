(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3a19d1c","chunk-2d0b6a79","chunk-ce64b8de","chunk-f2ba684e","chunk-668251a3","chunk-2d0b6a79"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function i(t,e,a,i,n,s,l){try{var r=t[s](l),c=r.value}catch(o){return void a(o)}r.done?e(c):Promise.resolve(c).then(i,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var l=t.apply(e,a);function r(t){i(l,n,s,r,c,"next",t)}function c(t){i(l,n,s,r,c,"throw",t)}r(void 0)}))}}},4009:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:1100,height:600,visible:t.visible,footer:""},on:{cancel:t.handelCancle,ok:t.handleOk}},[a("div",[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.$refs.createModal.addSub(t.cat_id)}}},[t._v("添加填写项")]),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,scroll:{y:700},rowKey:"id",pagination:!1},scopedSlots:t._u([{key:"sort",fn:function(e,i){return a("span",{},[t._v(t._s(i.sort))])}},{key:"name",fn:function(e,i){return a("span",{},[t._v(t._s(i.name))])}},{key:"type_id",fn:function(e){return a("span",{},[0==e?a("div",[t._v("单选")]):t._e(),1==e?a("div",[t._v("多选")]):t._e()])}},{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.deleteConfirm(i.id)}}},[a("a",[t._v("删除")])])],1)}}])}),a("atlas-special-create",{ref:"createModal",on:{ok:t.handleOk}})],1)])},n=[],s=a("1da1"),l=(a("96cf"),a("ba1b")),r=a("ea82"),c=[{title:"排序",dataIndex:"sort",width:100,key:"sort",scopedSlots:{customRender:"sort"}},{title:"名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"选择类型",dataIndex:"type_id",key:"type_id",scopedSlots:{customRender:"type_id"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],o={name:"atlasCategorySpecialList",components:{AtlasSpecialCreate:r["default"]},data:function(){return{visible:!1,add_visible:!1,title:"",desc:"",cat_id:"",columns:c,list:[],tab_key:1,form:this.$form.createForm(this),id:"",type:3,currency:1,fileList:[],formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"validate_other"})},created:function(){},methods:{init:function(){},getAtlastSpecial:function(t,e){var a=this;this.visible=!0,this.title=e,this.cat_id=t,this.request(l["a"].getAtlasSpecialList,{cat_id:t}).then((function(t){console.log(t),a.list=t}))},handelCancle:function(){this.visible=!1},deleteConfirm:function(t){var e=this;this.request(l["a"].getAtlasSpecialDel,{id:t}).then((function(t){e.getAtlastSpecial(e.cat_id,e.title),e.$message.success("删除成功")}))},handleCancle:function(){this.add_visible=!1,this.pic=""},handleOk:function(t){this.visible=!1},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){t||(a.cat_id=e.cat_id,a.currency=!1===a.currency?0:1,a.pic=e.pic,a.areaList||(a.areaList=[]),console.log(a),e.request(l["a"].getAtlasSpecialCreate,a).then((function(t){e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.pic="",e.getAtlastSpecial(e.cat_id,e.title),e.add_visible=!1}),1500)})))}))},switchCurrency:function(t){this.currency=t},changeAppType:function(t){this.app_open_type=t},handleUploadChange:function(t){var e=t.fileList;this.fileList=e,this.fileList.length||(this.length=0,this.pic=""),"done"==this.fileList[0].status&&(this.length=this.fileList.length,this.pic=this.fileList[0].response.data)},handleUploadCancel:function(){this.previewVisible=!1},handleUploadPreview:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,getBase64(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},setLinkBases:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(e){console.log("handleOk",e),t.url=e.url,t.$nextTick((function(){t.form.setFieldsValue({url:t.url})}))}})}}},d=o,u=(a("809b"),a("2877")),f=Object(u["a"])(d,i,n,!1,null,"43c1eea5",null);e["default"]=f.exports},"6be2":function(t,e,a){},"7f4e":function(t,e,a){},8016:function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-page-header",{staticStyle:{padding:"0 0 16px 0"},attrs:{title:"分类信息列表"}},[a("div",[t._v("用于分类装修展示对应分类图文信息")])]),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.categoryList,pagination:!1,rowKey:"cat_id"},on:{change:t.handleChange},scopedSlots:t._u([{key:"special",fn:function(e,i){return a("span",{},[i.cat_fid?a("a",{on:{click:function(e){return t.getClick(i.cat_id,"分类标签填写项")}}},[t._v("编辑标签")]):t._e()])}},{key:"action",fn:function(e,i){return a("span",{},[i.cat_fid?a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.cat_id)}}},[t._v("编辑")]):t._e(),i.cat_fid?a("a-divider",{attrs:{type:"vertical"}}):t._e(),0==i.cat_fid?a("a",{on:{click:function(e){return t.$refs.createModal.addSub(i.cat_id)}}},[t._v("新增图文分类")]):t._e(),i.cat_fid?a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(i.cat_id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])]):t._e()],1)}},{key:"cat_status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}}])}),a("atlas-category-create",{ref:"createModal",attrs:{catId:t.catId,catFid:t.catFid},on:{ok:t.handleOk}}),a("atlas-special-list",{ref:"specialModel"})],1)],1)},s=[],l=a("ade3"),r=a("ba1b"),c=a("a0e6"),o=a("4009"),d={0:{status:"default",text:"关闭"},1:{status:"success",text:"开启"}},u=(i={name:"TableList",components:{AtlasCategoryCreate:c["default"],AtlasSpecialList:o["default"]},data:function(){return{sortedInfo:null,categoryList:[],catId:"0",catFid:"0"}},filters:{},created:function(){},computed:{columns:function(){var t,e=this.sortedInfo,a=this.filteredInfo;e=e||{},a=a||{};var i=[{title:"ID",dataIndex:"cat_id",key:"cat_id",width:"10%"},{title:"店铺分类名称",dataIndex:"cat_name",key:"cat_name",width:"40%"},{title:"标签填写项",dataIndex:"special",key:"special",width:"20%",scopedSlots:{customRender:"special"}},(t={title:"状态",dataIndex:"cat_status",width:"12%",key:"cat_status"},Object(l["a"])(t,"width","10%"),Object(l["a"])(t,"scopedSlots",{customRender:"cat_status"}),t),{title:"操作",dataIndex:"",key:"x",width:"20%",scopedSlots:{customRender:"action"}}];return i}}},Object(l["a"])(i,"filters",{statusFilter:function(t){return d[t].text},statusTypeFilter:function(t){return d[t].status}}),Object(l["a"])(i,"mounted",(function(){this.getCategoryTree()})),Object(l["a"])(i,"methods",{getCategoryTree:function(){var t=this;this.request(r["a"].getAtlasCategoryList).then((function(e){t.categoryList=e}))},handleChange:function(t,e,a){this.filteredInfo=e,this.sortedInfo=a},add:function(){},getClick:function(t,e){this.$refs.specialModel.getAtlastSpecial(t,e)},handleOk:function(){this.getCategoryTree()},deleteConfirm:function(t){var e=this;this.request(r["a"].getAtlasCategoryDel,{cat_id:t}).then((function(t){e.getCategoryTree(),e.$message.success("删除成功")}))},cancel:function(){},customExpandIcon:function(t){var e=this.$createElement;return void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}),i),f=u,p=(a("9496"),a("2877")),h=Object(p["a"])(f,n,s,!1,null,"9ebefe30",null);e["default"]=h.exports},"809b":function(t,e,a){"use strict";a("7f4e")},9496:function(t,e,a){"use strict";a("6be2")},a0e6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"分类名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_name",{initialValue:t.detail.cat_name,rules:[{required:!0,message:"请输入分类名称"}]}],expression:"['cat_name', {initialValue:detail.cat_name,rules: [{required: true, message: '请输入分类名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_status",{initialValue:1==t.detail.cat_status,valuePropName:"checked"}],expression:"['cat_status',{initialValue:detail.cat_status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1)],1)},n=[],s=a("ba1b"),l={data:function(){return{title:"下级分类",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{cat_id:0,cat_fid:0,cat_name:"",cat_status:1},catId:"",catFid:""}},mounted:function(){this.getEditInfo()},methods:{edit:function(t){this.visible=!0,this.catId=t,this.getEditInfo(),this.catId>0?this.title="编辑分类":this.title="下级分类"},addSub:function(t){this.title="下级分类",this.visible=!0,this.catFid=t,this.catId=0,this.getEditInfo()},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.cat_id=t.catId,a.cat_fid=t.catFid,t.request(s["a"].getAtlasCategoryCreate,a).then((function(e){t.catId>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.catId="0",t.catFid="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(s["a"].getAtlasCategoryInfo,{cat_id:this.catId}).then((function(e){t.detail={cat_id:0,cat_fid:0,cat_name:"",cat_status:1},e&&(t.detail=e,console.log(e))}))}}},r=l,c=a("2877"),o=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=o.exports},ba1b:function(t,e,a){"use strict";var i={getAtlasArticleList:"/atlas/api.AtlasArticle/getAtlasArticleList",getAtlasArticleClass:"/atlas/api.AtlasArticle/getAtlasArticleClass",getAtlasArticleOption:"/atlas/api.AtlasArticle/getAtlasArticleOption",getAtlasArticleDetail:"/atlas/api.AtlasArticle/getAtlasArticleDetail",getAtlasArticleCreate:"/atlas/api.AtlasArticle/getAtlasArticleCreate",getAtlasArticleDel:"/atlas/api.AtlasArticle/getAtlasArticleDel",getAtlasCategoryList:"/atlas/api.AtlasCategory/getAtlasCategoryList",getAtlasCategoryInfo:"/atlas/api.AtlasCategory/getAtlasCategoryInfo",getAtlasCategoryCreate:"/atlas/api.AtlasCategory/getAtlasCategoryCreate",getAtlasCategoryDel:"/atlas/api.AtlasCategory/getAtlasCategoryDel",getAtlasArticleSecond:"/atlas/api.AtlasCategory/getAtlasArticleSecond",getAtlasSpecialList:"/atlas/api.AtlasSpecial/getAtlasSpecialList",getAtlasSpecialInfo:"/atlas/api.AtlasSpecial/getAtlasSpecialInfo",getAtlasSpecialCreate:"/atlas/api.AtlasSpecial/getAtlasSpecialCreate",getAtlasSpecialDel:"/atlas/api.AtlasSpecial/getAtlasSpecialDel"};e["a"]=i},ea82:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"显示排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort', {initialValue:detail.sort}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[t._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"选择类型",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type_id",{initialValue:t.detail.type_id}],expression:"['type_id', {initialValue:detail.type_id}]"}],staticStyle:{width:"115px"},attrs:{min:0}},[a("a-select-option",{attrs:{value:0}},[t._v(" 单选")]),a("a-select-option",{attrs:{value:1}},[t._v(" 多选")])],1)],1),a("a-form-item",{attrs:{label:"选项值",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{initialValue:t.detail.content,rules:[{required:!1,message:"请填写选项值"}]}],expression:"['content', {initialValue:detail.content,rules: [{required: false, message: '请填写选项值'}]}]"}],attrs:{rows:4}})],1)],1)],1)],1)},n=[],s=a("ba1b"),l={data:function(){return{title:"添加填写项",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",sort:"",content:"",type_id:0},catId:"",catFid:""}},mounted:function(){this.id=0,this.cat_id=cat_id,console.log(cat_id),this.getEditInfo()},methods:{edit:function(t){this.visible=!0,this.id=t,this.cat_id=0,this.getEditInfo(),this.id>0?this.title="编辑填写项":this.title="添加填写项"},addSub:function(t){this.title="添加填写项",this.visible=!0,this.id=0,this.cat_id=t,this.getEditInfo()},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.cat_id=t.cat_id,a.id=t.id,t.request(s["a"].getAtlasSpecialCreate,a).then((function(e){t.cat_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.catId="0",t.catFid="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(s["a"].getAtlasSpecialInfo,{id:this.id,cat_id:this.cat_id}).then((function(e){t.detail={cat_id:0,cat_fid:0,cat_name:"",cat_status:1},e&&(t.detail=e,console.log(e))}))}}},r=l,c=a("2877"),o=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=o.exports}}]);