(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c38bbf1e"],{"66a7":function(t,a,e){},b8a6:function(t,a,e){"use strict";e.r(a);for(var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"package-bill-list-box"},[e("div",{staticClass:"search-box"},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:7,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("div",{staticStyle:{width:"20%","line-height":"32px"}},[t._v(" 套餐标题： ")]),e("a-input",{staticStyle:{width:"60%"},model:{value:t.search.title,callback:function(a){t.$set(t.search,"title",a)},expression:"search.title"}})],1)],1),e("a-col",{attrs:{md:7,sm:24}},[e("a-input-group",{attrs:{compact:""}},[e("a-select",{staticStyle:{width:"30%"},attrs:{"default-value":"1"},model:{value:t.search.type,callback:function(a){t.$set(t.search,"type",a)},expression:"search.type"}},[e("a-select-option",{attrs:{value:"1"}},[t._v(" 物业名称 ")]),e("a-select-option",{attrs:{value:"2"}},[t._v(" 物业联系方式 ")])],1),e("a-input",{staticStyle:{width:"70%"},model:{value:t.search.matter,callback:function(a){t.$set(t.search,"matter",a)},expression:"search.matter"}})],1)],1),e("a-col",{attrs:{md:5,sm:24}},[e("a-range-picker",{attrs:{allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(a){t.search_data=a},expression:"search_data"}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("a-col",{attrs:{md:2,sm:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(a){return t.searchList()}}},[t._v(" 查询 ")])],1),e("a-col",{attrs:{md:2,sm:24}},[e("a-button",{on:{click:function(a){return t.resetList()}}},[t._v("重置")])],1)],1)],1),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(a,o){return e("a",{on:{click:function(a){return t.look(o)}}},[t._v("订单详情")])}}])}),e("a-drawer",{attrs:{title:"套餐订单详情",width:720,visible:t.visible,maskClosable:!0,"body-style":{paddingBottom:"80px"}},on:{close:t.onClose}},[e("a-form",{staticClass:"message_box",attrs:{form:t.form,layout:"vertical","hide-required-mark":""}},[e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 订单编号： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.order_no)+" ")])],1)],1),e("a-form-item",[e("a-table",{attrs:{columns:t.package_columns,"data-source":t.package_data,pagination:!1}})],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 购买方物业名称： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.property_name)+" ")])],1)],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 购买方物业联系方式： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.property_tel)+" ")])],1)],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 支付金额： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.pay_money)+" ")])],1)],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 支付方式： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.pay_type)+" ")])],1)],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 交易流水： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.transaction_no)+" ")])],1)],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 支付时间： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.pay_time)+" ")])],1)],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 购买套餐周期（年/366天）： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.package_period)+" ")])],1)],1),e("a-form-item",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:8,sm:24}},[t._v(" 套餐到期时间： ")]),e("a-col",{attrs:{md:16,sm:24}},[t._v(" "+t._s(t.detail.package_end_time)+" ")])],1)],1)],1),e("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[e("a-button",{style:{marginRight:"8px"},on:{click:t.onClose}},[t._v(" 取消 ")])],1)],1)],1)},r=[],s=e("ade3"),i=(e("ac1f"),e("841c"),e("df93")),c=[{title:"套餐标题",dataIndex:"details_info.room_title",key:"room_title"},{title:"购买方物业名称",dataIndex:"property_name",key:"property_name"},{title:"购买方物业联系方式",dataIndex:"property_tel",key:"property_tel"},{title:"支付金额",dataIndex:"pay_money",key:"pay_money"},{title:"支付时间",dataIndex:"pay_time",key:"pay_time"},{title:"套餐到期时间",dataIndex:"package_end_time",key:"package_end_time"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"action"}}],n=[{title:"套餐标题",dataIndex:"room_title",key:"room_title_detail"},{title:"所含房间",dataIndex:"room_num",key:"room_num"},{title:"价格（元/年）",dataIndex:"price",key:"price"}],l=[],m=0;m<1;m++){var d;l.push((d={key:m,name:"Edrward ".concat(m),phone:"1835609356 ".concat(m),content:"这是第 ".concat(m," 位"),add_time_txt:"2020/5/27 10:".concat(m)},Object(s["a"])(d,"add_time_txt","2020/5/27 10:".concat(m)),Object(s["a"])(d,"status_txt","正常 ".concat(m)),d))}var g={name:"RoomPackageBillList",filters:{statusFilter:function(t){var a=["error","error","success"];return console.log("type21-",t),console.log("type2-",a[t]),a[t]}},data:function(){return{pagination:{pageSize:10,total:10},search_data:[],search:{type:"1",matter:"",title:"",status:"",start_time:"",end_time:"",page:1},form:this.$form.createForm(this),visible:!1,data:l,columns:c,package_columns:n,page:1,detail:{},package_data:[]}},mounted:function(){this.getRoomPackageBillList()},methods:{getRoomPackageBillList:function(){this.search["page"]=this.page;var t=this;this.request(i["a"].packageRoomOrderList,this.search).then((function(a){console.log("res",a),t.pagination.total=a.count?a.count:0,t.data=a.list}))},getPackageRoomOrderInfo:function(t){var a=this;this.request(i["a"].packageRoomOrderInfo,{order_id:t}).then((function(t){console.log("res",t),a.detail=t,a.package_data=[t.details_info]}))},look:function(t){console.log("e",t),this.visible=!0,this.getPackageRoomOrderInfo(t.order_id)},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.page=t.current,this.getRoomPackageBillList())},onClose:function(){this.visible=!1},dateOnChange:function(t,a){this.search.start_time=a[0],this.search.end_time=a[1]},searchList:function(){console.log("search",this.search),this.getRoomPackageBillList()},resetList:function(){console.log("search",this.search),console.log("search_data",this.search_data),this.search={type:"1",matter:"",title:"",status:"",start_time:"",end_time:"",page:1},this.search_data=[],this.getRoomPackageBillList()}}},p=g,u=(e("b8b6"),e("2877")),_=Object(u["a"])(p,o,r,!1,null,"1551bf92",null);a["default"]=_.exports},b8b6:function(t,a,e){"use strict";e("66a7")},df93:function(t,a,e){"use strict";var o={packageList:"/community/platform.PrivilegePackage/getList",getEditInfo:"/community/platform.PrivilegePackage/detailPrivilegePackage",getFunctionApp:"/community/platform.PrivilegePackage/getFunctionApplication",delPackage:"/community/platform.PrivilegePackage/delPrivilegePackage",addPackage:"/community/platform.PrivilegePackage/addPrivilegePackage",packageOrderList:"/community/platform.PackageOrder/getList",packageOrderInfo:"/community/platform.PackageOrder/getInfo",roomPackageList:"/community/platform.RoomPackage/getList",addRoomPackage:"/community/platform.RoomPackage/addRoomPackage",detailRoomPackage:"/community/platform.RoomPackage/getDetails",delRoomPackage:"/community/platform.RoomPackage/delRoomPackage",packageRoomOrderList:"/community/platform.PackageRoomOrder/getList",packageRoomOrderInfo:"/community/platform.PackageRoomOrder/getInfo"};a["a"]=o}}]);