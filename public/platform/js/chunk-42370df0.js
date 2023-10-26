(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42370df0","chunk-1e7f42f6"],{"14fb":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"套餐名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["package_title",{initialValue:t.detail.package_title,rules:[{required:!0,message:"请输入套餐名称！"}]}],expression:"['package_title', {initialValue:detail.package_title,rules: [{required: true, message: '请输入套餐名称！'}]}]"}]})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"套餐试用期限",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["package_try_days",{initialValue:t.detail.package_try_days,rules:[{required:!0,message:"请输入套餐适用期限！"}]}],expression:"['package_try_days', {initialValue:detail.package_try_days,rules: [{required: true, message: '请输入套餐适用期限！'}]}]"}]})],1),e("a-col",{attrs:{span:6}},[e("a-span",{staticClass:"tip-txt"},[t._v("单位：天")])],1)],1)],1),e("a-form-item",{attrs:{label:"套餐价格",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["package_price",{initialValue:t.detail.package_price,rules:[{required:!0,message:"请输入套餐价格！"}]}],expression:"['package_price', {initialValue:detail.package_price,rules: [{required: true, message: '请输入套餐价格！'}]}]"}]})],1),e("a-col",{attrs:{span:6}},[e("a-span",{staticClass:"tip-txt"},[t._v("单位：元/年(366天)")])],1)],1)],1),e("a-form-item",{attrs:{label:"套餐最多可购买期限",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["package_limit_num",{initialValue:t.detail.package_limit_num,rules:[{required:!0,message:"请输入套餐最多可购买期限！"}]}],expression:"['package_limit_num', {initialValue:detail.package_limit_num,rules: [{required: true, message: '请输入套餐最多可购买期限！'}]}]"}]})],1),e("a-col",{attrs:{span:6}},[e("a-span",{staticClass:"tip-txt"},[t._v("单位：年")]),e("a-tooltip",{attrs:{placement:"right"}},[e("template",{slot:"title"},[e("span",[t._v("套餐最多购买期限")])]),e("a-button",{staticClass:"add-box-tip"},[e("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1)],1),e("a-form-item",{attrs:{label:"文字说明",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["txt_des",{initialValue:t.detail.txt_des,rules:[{message:"请输入文字说明！"}]}],expression:"['txt_des', {initialValue:detail.txt_des,rules: [{message: '请输入文字说明！'}]}]"}]})],1),e("a-col",{attrs:{span:6}})],1),e("a-form-item",{attrs:{label:"所含房间数",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["room_num",{initialValue:t.detail.room_num,rules:[{required:!0,message:"请输入所含房间数！"}]}],expression:"['room_num', {initialValue:detail.room_num,rules: [{required: true, message: '请输入所含房间数！'}]}]"}]})],1),e("a-col",{attrs:{span:6}},[e("a-span",{staticClass:"tip-txt"},[t._v("单位：间")]),e("a-tooltip",{attrs:{placement:"right"}},[e("template",{slot:"title"},[e("span",[t._v("此为套餐内赠与的免费房间数")])]),e("a-button",{staticClass:"add-box-tip"},[e("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1)],1),e("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-col",{attrs:{span:18}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}]})],1),e("a-col",{attrs:{span:6}},[e("a-tooltip",{attrs:{placement:"right"}},[e("template",{slot:"title"},[e("span",[t._v("此值越大排序越靠前")])]),e("a-button",{staticClass:"add-box-tip"},[e("a-icon",{staticClass:"tip-txt",attrs:{type:"question"}})],1)],2)],1)],1),e("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.detail.status,valuePropName:"checked"}],expression:"['status',{initialValue:detail.status==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1),e("span",{staticStyle:{"margin-left":"75px","font-weight":"bold"}},[t._v("选择功能应用")]),e("a-form-item",{attrs:{label:"物业管理后台",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-checkbox-group",{attrs:{name:"bind_arr",options:t.property,value:t.detail.property},on:{change:t.onChange},model:{value:t.detail.property,callback:function(a){t.$set(t.detail,"property",a)},expression:"detail.property"}})],1),e("a-form-item",{attrs:{label:"小区管理后台",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-checkbox-group",{attrs:{name:"bind_arr",options:t.community,value:t.detail.community},on:{change:t.onChanges},model:{value:t.detail.community,callback:function(a){t.$set(t.detail,"community",a)},expression:"detail.community"}})],1)],1)],1)],1)},r=[],o=e("53ca"),n=(e("99af"),e("df93")),s={data:function(){return{title:"添加套餐",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),property:[],community:[],showMethod:[],detail:{package_id:0,package_title:"",package_try_days:"",package_price:"",package_limit_num:"",txt_des:"",room_num:"",status:1,sort:0,type:0,operate_type:0,details:"",community:[],property:[]},packageId:"",property_arr:[],community_arr:[],value:[]}},mounted:function(){},methods:{add:function(){this.title="添加套餐",this.visible=!0,this.packageId="0",this.property_arr=[],this.community_arr=[],this.detail={package_id:0,package_title:"",package_try_days:"",package_price:"",package_limit_num:"",txt_des:"",room_num:"",status:1,sort:0,type:0,operate_type:0,details:"",community:[],property:[]},this.getFunctionApp()},edit:function(t){this.visible=!0,this.packageId=t,this.property_arr=[],this.community_arr=[],this.detail={package_id:0,package_title:"",package_try_days:"",package_price:"",package_limit_num:"",txt_des:"",room_num:"",status:1,sort:0,type:0,operate_type:0,details:"",community:[],property:[]},this.getEditInfo(),this.getFunctionApp(),console.log(this.packageId),this.packageId>0?this.title="编辑套餐":this.title="添加套餐",console.log(this.title)},handleSubmit:function(){var t=this,a=this.form.validateFields;this.confirmLoading=!0,a((function(a,e){a?t.confirmLoading=!1:(e.package_id=t.packageId,t.community_arr.length<=0&&(t.community_arr=t.detail.community),t.property_arr.length<=0&&(t.property_arr=t.detail.property),e.bind_arr=t.property_arr.concat(t.community_arr),t.request(n["a"].addPackage,e).then((function(a){t.packageId>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",e)}),1500)})).catch((function(a){t.confirmLoading=!1})),console.log("values",e))}))},onChange:function(t){this.property_arr=t,this.detail.property=t,console.log("property_arr",this.property_arr)},onChanges:function(t){this.community_arr=t,this.detail.community=t,console.log("community_arr",this.community_arr)},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.packageId="0",t.form=t.$form.createForm(t)}),500)},getFunctionApp:function(){var t=this;this.request(n["a"].getFunctionApp,{package_id:this.packageId}).then((function(a){"object"==Object(o["a"])(a)&&(t.community=a.community,t.property=a.property),console.log("shuju",a)}))},getEditInfo:function(){var t=this;this.request(n["a"].getEditInfo,{package_id:this.packageId}).then((function(a){console.log(a),t.detail={package_id:0,package_title:"",package_try_days:"",package_price:"",package_limit_num:"",txt_des:"",room_num:"",status:1,sort:0,type:0,operate_type:0,details:"",community:[],property:[]},"object"==Object(o["a"])(a.info)&&(t.detail=a.info),console.log("detail",t.detail)}))}}},l=s,c=(e("44fa"),e("0c7c")),p=Object(c["a"])(l,i,r,!1,null,null,null);a["default"]=p.exports},"324e":function(t,a,e){},"330e8":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(a){return t.$refs.createModal.add()}}},[t._v("添加套餐")])],1),e("a-card",{attrs:{bordered:!1}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.packageList,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(a,i){return e("span",{},[e("a",{on:{click:function(a){return t.$refs.createModal.edit(i.package_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(a){return t.deleteConfirm(i.package_id)},cancel:t.cancel}},[e("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"status",fn:function(a){return e("span",{},[e("a-badge",{attrs:{status:t._f("statusTypeFilter")(a),text:t._f("statusFilter")(a)}})],1)}},{key:"name",fn:function(a){return[t._v(" "+t._s(a.first)+" "+t._s(a.last)+" ")]}}])}),e("create-package",{ref:"createModal",attrs:{height:800,packageId:t.packageId},on:{ok:t.handleOk}})],1)],1)},r=[],o=(e("ac1f"),e("841c"),e("df93")),n=e("14fb"),s={1:{status:"success",text:"开启"},2:{status:"default",text:"关闭"}},l={name:"PackageList",components:{CreatePackage:n["default"]},data:function(){return{sortedInfo:null,packageList:[],pagination:{pageSize:10,total:10},packageId:"0",search:{page:1},page:1}},created:function(){},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var a=[{title:"套餐标题",dataIndex:"package_title",key:"package_title"},{title:"功能个数",dataIndex:"count",key:"count"},{title:"价格（元/年）",key:"package_price",dataIndex:"package_price"},{title:"试用期限",key:"package_try_days",dataIndex:"package_try_days"},{title:"所含房间数",key:"room_num",dataIndex:"room_num"},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"排序",key:"sort",dataIndex:"sort"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return a}},filters:{statusFilter:function(t){return s[t].text},statusTypeFilter:function(t){return s[t].status}},mounted:function(){this.packageTree()},methods:{packageTree:function(){var t=this;this.search["page"]=this.page;this.request(o["a"].packageList,this.search).then((function(a){console.log("res",a),t.packageList=a.list,t.pagination.total=a.count?a.count:0}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.packageTree())},handleOk:function(){this.packageTree()},deleteConfirm:function(t){var a=this;this.request(o["a"].delPackage,{package_id:t}).then((function(t){a.packageTree(),a.$message.success("删除成功")}))},add:function(){},cancel:function(){},customExpandIcon:function(t){var a=this.$createElement;return console.log(t.record.children),void 0!=t.record.children?t.record.children.length>0?t.expanded?a("a",{style:{color:"black",marginRight:"8px"},on:{click:function(a){t.onExpand(t.record,a)}}},[a("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):a("a",{style:{color:"black",marginRight:"4px"},on:{click:function(a){t.onExpand(t.record,a)}}},[a("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):a("span",{style:{marginRight:"8px"}}):a("span",{style:{marginRight:"20px"}})}}},c=l,p=(e("55c6"),e("bd54"),e("0c7c")),u=Object(p["a"])(c,i,r,!1,null,"293c160b",null);a["default"]=u.exports},"44fa":function(t,a,e){"use strict";e("46b8")},"46b8":function(t,a,e){},"55c6":function(t,a,e){"use strict";e("5b07")},"5b07":function(t,a,e){},bd54:function(t,a,e){"use strict";e("324e")},df93:function(t,a,e){"use strict";var i={packageList:"/community/platform.PrivilegePackage/getList",getEditInfo:"/community/platform.PrivilegePackage/detailPrivilegePackage",getFunctionApp:"/community/platform.PrivilegePackage/getFunctionApplication",delPackage:"/community/platform.PrivilegePackage/delPrivilegePackage",addPackage:"/community/platform.PrivilegePackage/addPrivilegePackage",packageOrderList:"/community/platform.PackageOrder/getList",packageOrderInfo:"/community/platform.PackageOrder/getInfo",roomPackageList:"/community/platform.RoomPackage/getList",addRoomPackage:"/community/platform.RoomPackage/addRoomPackage",detailRoomPackage:"/community/platform.RoomPackage/getDetails",delRoomPackage:"/community/platform.RoomPackage/delRoomPackage",packageRoomOrderList:"/community/platform.PackageRoomOrder/getList",packageRoomOrderInfo:"/community/platform.PackageRoomOrder/getInfo"};a["a"]=i}}]);