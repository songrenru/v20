(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9dbfe3ee","chunk-19e949d9"],{5988:function(t,e,a){"use strict";var o={categoryList:"/foodshop/platform.StoreCategory/categoryList",getEditInfo:"/foodshop/platform.StoreCategory/getEditInfo",editSort:"/foodshop/platform.StoreCategory/editSort",delSort:"/foodshop/platform.StoreCategory/delSort",storeList:"/foodshop/platform.Store/storeList",saveSort:"/foodshop/platform.Store/saveSort",searchHotList:"/foodshop/platform.SearchHot/searchHotList",saveSearchHot:"/foodshop/platform.SearchHot/saveSearchHot",getSearchHotDetail:"/foodshop/platform.SearchHot/getSearchHotDetail",delSearchHot:"/foodshop/platform.SearchHot/delSearchHot",saveSearchHotSort:"/foodshop/platform.SearchHot/saveSort",orderList:"/foodshop/platform.order/orderList",orderDetail:"/foodshop/platform.order/orderDetail",orderExportUrl:"/foodshop/platform.order/export",merchantAutoLogin:"/foodshop/platform.login/merchantAutoLogin",staffAutoLogin:"/foodshop/platform.login/staffAutoLogin"};e["a"]=o},"761e":function(t,e,a){},"8c78":function(t,e,a){"use strict";a.r(e);var o,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-page-header",{staticStyle:{padding:"0 0 16px 0"},attrs:{title:"店铺分类"}},[a("template",{slot:"extra"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v("新建分类")])],1)],2),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.categoryList,pagination:!1},on:{change:t.handleChange},scopedSlots:t._u([{key:"action",fn:function(e,o){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(o.cat_id)}}},[t._v("编辑")]),0==o.cat_fid?a("a-divider",{attrs:{type:"vertical"}}):t._e(),0==o.cat_fid?a("a",{on:{click:function(e){return t.$refs.createModal.addSub(o.cat_id)}}},[t._v("新增下级分类")]):t._e(),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteConfirm(o.cat_id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"cat_status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}}])}),a("create-sort",{ref:"createModal",attrs:{catId:t.catId,catFid:t.catFid},on:{ok:t.handleOk}})],1)],1)},r=[],s=a("ade3"),n=(a("c1df"),a("5988")),c=a("fea6"),l={0:{status:"default",text:"关闭"},1:{status:"success",text:"开启"}},d=(o={name:"TableList",components:{CreateSort:c["default"]},data:function(){return{sortedInfo:null,categoryList:[],catId:"0",catFid:"0"}},filters:{},created:function(){},computed:{columns:function(){var t=this.sortedInfo,e=this.filteredInfo;t=t||{},e=e||{};var a=[{title:"分类名称",dataIndex:"cat_name",key:"cat_name"},{title:"不营业时显示状态",dataIndex:"show_method",key:"show_method",width:"30%"},{title:"状态",dataIndex:"cat_status",width:"12%",key:"cat_status",scopedSlots:{customRender:"cat_status"}},{title:"操作",dataIndex:"",key:"x",scopedSlots:{customRender:"action"}}];return a}}},Object(s["a"])(o,"filters",{statusFilter:function(t){return l[t].text},statusTypeFilter:function(t){return l[t].status}}),Object(s["a"])(o,"mounted",(function(){this.getCategoryTree()})),Object(s["a"])(o,"methods",{getCategoryTree:function(){var t=this;this.request(n["a"].categoryList).then((function(e){console.log("res",e),t.categoryList=e}))},handleChange:function(t,e,a){console.log("Various parameters",t,e,a),this.filteredInfo=e,this.sortedInfo=a},add:function(){},handleOk:function(){this.getCategoryTree()},deleteConfirm:function(t){var e=this;this.request(n["a"].delSort,{cat_id:t}).then((function(t){e.getCategoryTree(),e.$message.success("删除成功")}))},cancel:function(){},customExpandIcon:function(t){var e=this.$createElement;return console.log(t.record.children),void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}),o),u=d,f=(a("d5e3"),a("0c7c")),h=Object(f["a"])(u,i,r,!1,null,"7ecf23e6",null);e["default"]=h.exports},d5e3:function(t,e,a){"use strict";a("761e")},fea6:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:t.L("分类名称"),labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_name",{initialValue:t.detail.cat_name,rules:[{required:!0,message:t.L("请输入分类名称")}]}],expression:"[\n            'cat_name',\n            { initialValue: detail.cat_name, rules: [{ required: true, message: L('请输入分类名称') }] },\n          ]"}]})],1),0!=t.detail.cat_fid||t.catId<=0?a("a-form-item",{attrs:{label:t.L("上级分类"),labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:t.L("不选择上级分类，则添加为一级分类")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_fid",{initialValue:t.detail.cat_fid?t.detail.cat_fid:t.catFid}],expression:"['cat_fid', { initialValue: detail.cat_fid ? detail.cat_fid : catFid }]"}],staticStyle:{width:"320px"}},t._l(t.categoryList,(function(e){return a("a-select-option",{attrs:{value:e.cat_id}},[t._v(t._s(e.cat_name))])})),1)],1):t._e(),a("a-form-item",{attrs:{label:t.L("不营业时显示状态"),labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_method",{initialValue:t.detail.show_method},{rules:[{required:!0,message:t.L("请选择不营业时显示状态！")}]}],expression:"[\n            'show_method',\n            { initialValue: detail.show_method },\n            { rules: [{ required: true, message: L('请选择不营业时显示状态！') }] },\n          ]"}],staticStyle:{width:"320px"}},t._l(t.showMethod,(function(e,o){return a("a-select-option",{attrs:{value:o}},[t._v(t._s(e))])})),1)],1),a("a-form-item",{attrs:{label:t.L("排序值"),labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:t.L("排序值越高，在餐饮首页店铺列表排序越前")}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_sort",{initialValue:t.detail.cat_sort}],expression:"['cat_sort', { initialValue: detail.cat_sort }]"}],attrs:{min:0}})],1),a("a-form-item",{attrs:{label:t.L("状态"),labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_status",{initialValue:1==t.detail.cat_status,valuePropName:"checked"}],expression:"[\n            'cat_status',\n            { initialValue: detail.cat_status == 1 ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":t.L("开启"),"un-checked-children":t.L("关闭")}})],1)],1)],1)],1)},i=[],r=a("53ca"),s=(a("99af"),a("5988")),n={data:function(){return{title:this.L("新建分类"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),categoryList:[],showMethod:[],detail:{cat_id:0,cat_fid:0,cat_name:"",cat_status:1,show_method:0,cat_sort:""},catId:"",catFid:""}},mounted:function(){this.getEditInfo(),console.log(this.catFid)},methods:{add:function(){this.visible=!0,this.catId="0",this.catFid="0",this.title=this.L("新建分类"),this.detail={cat_id:0,cat_fid:0,cat_name:"",cat_status:1,show_method:0,cat_sort:""}},edit:function(t){this.visible=!0,this.catId=t,this.getEditInfo(),console.log(this.catId),console.log(this.title),this.catId>0?this.title=this.L("编辑分类"):this.title=this.L("新建分类"),console.log(this.title)},addSub:function(t){this.title=this.L("新建分类"),this.visible=!0,this.catFid=t,this.catId=0,this.getEditInfo()},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.cat_id=t.catId,t.request(s["a"].editSort,a).then((function(e){t.catId>0?t.$message.success(t.L("编辑成功")):t.$message.success(t.L("添加成功")),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})),console.log("values",a))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.catId="0",t.catFid="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(s["a"].getEditInfo,{cat_id:this.catId}).then((function(e){t.categoryList=[{cat_id:"0",cat_name:t.L("请选择上级分类")}],t.categoryList=t.categoryList.concat(e.categoryList),t.showMethod=e.showMethod,t.detail={cat_id:0,cat_fid:0,cat_name:"",cat_status:1,show_method:0,cat_sort:""},"object"==Object(r["a"])(e.detail)&&(t.detail=e.detail),console.log("detail1",Object(r["a"])(e.detail)),console.log("detail",t.detail)}))}}},c=n,l=a("0c7c"),d=Object(l["a"])(c,o,i,!1,null,null,null);e["default"]=d.exports}}]);