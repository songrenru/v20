(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bb0f1b4"],{8016:function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-page-header",{staticStyle:{padding:"0 0 16px 0"},attrs:{title:"分类信息列表"}},[a("div",[t._v("用于分类装修展示对应分类图文信息")])]),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.categoryList,pagination:!1,rowKey:"cat_id"},on:{change:t.handleChange},scopedSlots:t._u([{key:"special",fn:function(e,i){return a("span",{},[i.cat_fid?a("a",{on:{click:function(e){return t.getClick(i.cat_id,"分类标签填写项")}}},[t._v("编辑标签")]):t._e()])}},{key:"action",fn:function(e,i){return a("span",{},[i.cat_fid?a("a",{on:{click:function(e){return t.$refs.createModal.edit(i.cat_id)}}},[t._v("编辑")]):t._e(),i.cat_fid?a("a-divider",{attrs:{type:"vertical"}}):t._e(),0==i.cat_fid?a("a",{on:{click:function(e){return t.$refs.createModal.addSub(i.cat_id)}}},[t._v("新增图文分类")]):t._e(),i.cat_fid?a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(i.cat_id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])]):t._e()],1)}},{key:"cat_status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}}])}),a("atlas-category-create",{ref:"createModal",attrs:{catId:t.catId,catFid:t.catFid},on:{ok:t.handleOk}}),a("atlas-special-list",{ref:"specialModel"})],1)],1)},c=[],s=a("ade3"),r=a("ba1b"),o=a("a0e6"),l=a("4009"),d={0:{status:"default",text:"关闭"},1:{status:"success",text:"开启"}},u=(i={name:"TableList",components:{AtlasCategoryCreate:o["default"],AtlasSpecialList:l["default"]},data:function(){return{sortedInfo:null,categoryList:[],catId:"0",catFid:"0"}},filters:{},created:function(){},computed:{columns:function(){var t,e=this.sortedInfo,a=this.filteredInfo;e=e||{},a=a||{};var i=[{title:"ID",dataIndex:"cat_id",key:"cat_id",width:"10%"},{title:"店铺分类名称",dataIndex:"cat_name",key:"cat_name",width:"40%"},{title:"标签填写项",dataIndex:"special",key:"special",width:"20%",scopedSlots:{customRender:"special"}},(t={title:"状态",dataIndex:"cat_status",width:"12%",key:"cat_status"},Object(s["a"])(t,"width","10%"),Object(s["a"])(t,"scopedSlots",{customRender:"cat_status"}),t),{title:"操作",dataIndex:"",key:"x",width:"20%",scopedSlots:{customRender:"action"}}];return i}}},Object(s["a"])(i,"filters",{statusFilter:function(t){return d[t].text},statusTypeFilter:function(t){return d[t].status}}),Object(s["a"])(i,"mounted",(function(){this.getCategoryTree()})),Object(s["a"])(i,"methods",{getCategoryTree:function(){var t=this;this.request(r["a"].getAtlasCategoryList).then((function(e){t.categoryList=e}))},handleChange:function(t,e,a){this.filteredInfo=e,this.sortedInfo=a},add:function(){},getClick:function(t,e){this.$refs.specialModel.getAtlastSpecial(t,e)},handleOk:function(){this.getCategoryTree()},deleteConfirm:function(t){var e=this;this.request(r["a"].getAtlasCategoryDel,{cat_id:t}).then((function(t){e.getCategoryTree(),e.$message.success("删除成功")}))},cancel:function(){},customExpandIcon:function(t){var e=this.$createElement;return void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}),i),f=u,h=(a("9496"),a("0c7c")),m=Object(h["a"])(f,n,c,!1,null,"9ebefe30",null);e["default"]=m.exports},9496:function(t,e,a){"use strict";a("f8133")},a0e6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"分类名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_name",{initialValue:t.detail.cat_name,rules:[{required:!0,message:"请输入分类名称"}]}],expression:"['cat_name', {initialValue:detail.cat_name,rules: [{required: true, message: '请输入分类名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_status",{initialValue:1==t.detail.cat_status,valuePropName:"checked"}],expression:"['cat_status',{initialValue:detail.cat_status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1)],1)},n=[],c=a("ba1b"),s={data:function(){return{title:"下级分类",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{cat_id:0,cat_fid:0,cat_name:"",cat_status:1},catId:"",catFid:""}},mounted:function(){this.getEditInfo()},methods:{edit:function(t){this.visible=!0,this.catId=t,this.getEditInfo(),this.catId>0?this.title="编辑分类":this.title="下级分类"},addSub:function(t){this.title="下级分类",this.visible=!0,this.catFid=t,this.catId=0,this.getEditInfo()},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.cat_id=t.catId,a.cat_fid=t.catFid,t.request(c["a"].getAtlasCategoryCreate,a).then((function(e){t.catId>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.catId="0",t.catFid="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(c["a"].getAtlasCategoryInfo,{cat_id:this.catId}).then((function(e){t.detail={cat_id:0,cat_fid:0,cat_name:"",cat_status:1},e&&(t.detail=e,console.log(e))}))}}},r=s,o=a("0c7c"),l=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=l.exports},f8133:function(t,e,a){}}]);