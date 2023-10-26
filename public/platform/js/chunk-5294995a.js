(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5294995a","chunk-2d0b6a79","chunk-4f3150f4","chunk-2c250dd4","chunk-910a7668","chunk-2d0b6a79","chunk-2d0b3786"],{"01be":function(t,e,a){},"020d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"编辑",width:1080,visible:t.visible,maskClosable:!1,placement:"right"},on:{close:t.handleCancel}},[a("a-card",[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form-model",{ref:"ruleForm",staticClass:"div_box",attrs:{model:t.post,labelCol:t.labelCol,rules:t.rules}},[a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("a-form-model-item",{staticClass:"form_item",attrs:{label:"物业编号",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入物业编号",autocomplete:"off",name:"property_number",disabled:"disabled"},model:{value:t.post.property_number,callback:function(e){t.$set(t.post,"property_number",e)},expression:"post.property_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"楼栋名称",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入单元楼号",autocomplete:"off",name:"single_name",disabled:"disabled"},model:{value:t.post.single_name,callback:function(e){t.$set(t.post,"single_name",e)},expression:"post.single_name"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"单元名称",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入单元名称",name:"floor_name",disabled:"disabled"},model:{value:t.post.floor_name,callback:function(e){t.$set(t.post,"floor_name",e)},expression:"post.floor_name"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"楼层名称",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入楼层名称",name:"layer_name",disabled:"disabled"},model:{value:t.post.layer_name,callback:function(e){t.$set(t.post,"layer_name",e)},expression:"post.layer_name"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"合同时间",labelCol:t.labelCol,required:!0}},[t.post.contract_time_start_str?a("a-date-picker",{staticStyle:{width:"150px"},attrs:{"default-value":t.moment(t.post.contract_time_start_str,t.dateFormat)},model:{value:t.post.contract_time_start_str,callback:function(e){t.$set(t.post,"contract_time_start_str",e)},expression:"post.contract_time_start_str"}}):a("a-date-picker",{staticStyle:{width:"150px"},model:{value:t.post.contract_time_start_str,callback:function(e){t.$set(t.post,"contract_time_start_str",e)},expression:"post.contract_time_start_str"}}),t._v(" --到-- "),t.post.contract_time_end_str?a("a-date-picker",{staticStyle:{width:"150px"},attrs:{"default-value":t.moment(t.post.contract_time_end_str,t.dateFormat),disabled:"disabled"},model:{value:t.post.contract_time_end_str,callback:function(e){t.$set(t.post,"contract_time_end_str",e)},expression:"post.contract_time_end_str"}}):a("a-date-picker",{staticStyle:{width:"150px"},model:{value:t.post.contract_time_end_str,callback:function(e){t.$set(t.post,"contract_time_end_str",e)},expression:"post.contract_time_end_str"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间号",labelCol:t.labelCol,prop:"room",required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入房间号",name:"room"},model:{value:t.post.room,callback:function(e){t.$set(t.post,"room",e)},expression:"post.room"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间编号",labelCol:t.labelCol,extra:"必填项（仅限1-9999不重复的数字）",prop:"room_number",required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入房间编号",name:"room_number"},model:{value:t.post.room_number,callback:function(e){t.$set(t.post,"room_number",e)},expression:"post.room_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋面积",labelCol:t.labelCol,prop:"housesize",required:!0}},[a("a-input-number",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入房屋面积",min:0,step:.01,precision:2,name:"housesize"},model:{value:t.post.housesize,callback:function(e){t.$set(t.post,"housesize",e)},expression:"post.housesize"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋类型",labelCol:t.labelCol}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择房屋类型","default-value":t.post.house_type},model:{value:t.post.house_type,callback:function(e){t.$set(t.post,"house_type",e)},expression:"post.house_type"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("无")]),a("a-select-option",{attrs:{value:"1"}},[t._v("住宅")]),a("a-select-option",{attrs:{value:"2"}},[t._v("商铺")]),a("a-select-option",{attrs:{value:"3"}},[t._v("办公")])],1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间户型",labelCol:t.labelCol}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择房间户型","default-value":t.post.room_type},model:{value:t.post.room_type,callback:function(e){t.$set(t.post,"room_type",e)},expression:"post.room_type"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("无")]),t._l(t.room_types,(function(e,n){return a("a-select-option",{attrs:{value:e.type_id}},[t._v(" "+t._s(e.type_name)+" ")])}))],2)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"使用状态",labelCol:t.labelCol,extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择使用状态","default-value":t.post.user_status},model:{value:t.post.user_status,callback:function(e){t.$set(t.post,"user_status",e)},expression:"post.user_status"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("无")]),a("a-select-option",{attrs:{value:"1"}},[t._v("业主入住")]),a("a-select-option",{attrs:{value:"2"}},[t._v("未入住")]),a("a-select-option",{attrs:{value:"3"}},[t._v("租客入住")])],1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"出售状态",labelCol:t.labelCol,extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择出售状态","default-value":t.post.sell_status},model:{value:t.post.sell_status,callback:function(e){t.$set(t.post,"sell_status",e)},expression:"post.sell_status"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("正常居住")]),a("a-select-option",{attrs:{value:"2"}},[t._v("出售中")]),a("a-select-option",{attrs:{value:"3"}},[t._v("出租中")])],1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"排序",labelCol:t.labelCol,extra:"数字越大越靠前"}},[a("a-input-number",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入排序值",name:"sort",min:0},model:{value:t.post.sort,callback:function(e){t.$set(t.post,"sort",e)},expression:"post.sort"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"状态",labelCol:t.labelCol}},[a("a-radio-group",{attrs:{"default-value":1*t.post.status>0?"1":"0"},on:{change:t.statusChange}},[a("a-radio",{attrs:{value:"1"}},[t._v("开启")]),a("a-radio",{attrs:{value:"0"}},[t._v("关闭")])],1)],1)],1)])],1)],1),a("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[a("a-button",{staticStyle:{"margin-top":"20px","margin-right":"15px"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.handleSubmit()}}},[t._v("保存数据")]),a("a-button",{on:{click:function(e){return t.handleCancel()}}},[t._v(" 关闭当前页 ")])],1)],1)},i=[],o=(a("7d24"),a("dfae")),s=(a("ac1f"),a("841c"),a("a0e0")),r=a("c1df"),l=a.n(r),c=null,u=[],d=[],p={name:"houseWorkerEdit",filters:{},components:{"a-collapse":o["a"],"a-collapse-panel":o["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:4}},form:this.$form.createForm(this),visible:!1,loading:!1,data:d,columns:u,dateFormat:"YYYY-MM-DD",rules:{room:[{required:!0,message:"请输入房间号",trigger:"blur"}],room_number:[{required:!0,message:"请输入房间编号",trigger:"blur"}],housesize:[{required:!0,message:"请输入房屋面积",trigger:"blur"}]},post:{property_number:"",single_name:"",floor_name:"",layer_name:"",contract_time_start_str:"",contract_time_end_str:"",room:"",room_number:"",housesize:"",house_type:"0",room_type:"0",user_status:"0",sell_status:"1",sort:0,status:"1"},room_types:[],record:{},pigcms_id:0,visible_img:!1,confirmLoading:!1}},activated:function(){},methods:{moment:l.a,edit:function(t){this.record=t,this.pigcms_id=this.record.pigcms_id,this.visible=!0,this.getRoomVacancyDetail()},getRoomVacancyDetail:function(){var t=this,e={};e.pigcms_id=this.pigcms_id,this.request(s["a"].getUnitRentalRoomDetail,e).then((function(e){t.post=e.roominfo,t.room_types=e.room_types}))},statusChange:function(t){console.log(t),this.post.status=t.target.value},handleSubmit:function(){var t=this;return!this.post.room||this.post.room.length<1?(this.$message.error("请输入房间号!"),!1):!this.post.room_number||this.post.room_number.length<1?(this.$message.error("请输入房间编号!"),!1):!this.post.housesize||this.post.housesize.length<1?(this.$message.error("请输入房屋面积!"),!1):(this.post.pigcms_id=this.pigcms_id,this.loading=!0,void this.request(s["a"].saveUnitRentalRoomEdit,this.post).then((function(e){t.loading=!1,t.$message.success("保存成功!"),setTimeout((function(){t.handleCancel(),t.$emit("ok")}),1500)})).catch((function(e){t.loading=!1})))},handleCancel:function(){var t=this;this.visible=!1,this.record={},this.pigcms_id=0,this.post={property_number:"",single_name:"",floor_name:"",layer_name:"",contract_time_start_str:"",contract_time_end_str:"",room:"",room_number:"",housesize:"",house_type:"0",room_type:"0",user_status:"0",sell_status:"1",sort:0,status:"1"},setTimeout((function(){t.form=t.$form.createForm(t)}),500)},date_moment:function(t,e){return t?l()(t,e):""},table_change:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current)},dateOnChange:function(t,e){this.search.date=e,this.search.begin_time=e["0"],this.search.end_time=e["1"]},handleImgCancel:function(){this.visible_img=!1,this.srcUrl="",clearInterval(c),this.$emit("ok")}}},m=p,h=(a("c71d"),a("0c7c")),_=Object(h["a"])(m,n,i,!1,null,"40ecc1f6",null);e["default"]=_.exports},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7");function n(t,e,a,n,i,o,s){try{var r=t[o](s),l=r.value}catch(c){return void a(c)}r.done?e(l):Promise.resolve(l).then(n,i)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(i,o){var s=t.apply(e,a);function r(t){n(s,i,o,r,l,"next",t)}function l(t){n(s,i,o,r,l,"throw",t)}r(void 0)}))}}},"1fa6":function(t,e,a){"use strict";a("2a96")},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||o(t)||Object(s["a"])(t)||r()}},"2a96":function(t,e,a){},"2ce9":function(t,e,a){},"707d":function(t,e,a){"use strict";a("2ce9")},"805c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"build_index"},[a("div",{staticClass:"search-box",staticStyle:{"padding-top":"15px"}},[a("a-row",{staticClass:"suggestions_row",staticStyle:{"margin-bottom":"15px"}},[a("a-col",{staticClass:"suggestions_col",attrs:{md:5,sm:20}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"130px"},attrs:{placeholder:"请选择类型","default-value":"usernum"},on:{change:t.keyChange},model:{value:t.search.keytype,callback:function(e){t.$set(t.search,"keytype",e)},expression:"search.keytype"}},[a("a-select-option",{attrs:{value:"usernum"}},[t._v("物业编号")]),a("a-select-option",{attrs:{value:"name"}},[t._v("姓名")]),a("a-select-option",{attrs:{value:"phone"}},[t._v("手机号")])],1),a("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:t.key_name},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1),a("a-col",{staticClass:"suggestions_col",attrs:{md:2,sm:20}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择状态"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),a("a-select-option",{attrs:{value:"1"}},[t._v("空置")]),a("a-select-option",{attrs:{value:"2"}},[t._v("审核中")]),a("a-select-option",{attrs:{value:"3"}},[t._v("已绑定业主")]),a("a-select-option",{attrs:{value:"-1"}},[t._v("关闭")])],1)],1)],1),a("a-col",{staticClass:"suggestions_col",attrs:{md:6,sm:20}},[a("label",{staticStyle:{"margin-top":"5px"}},[t._v("房间：")]),a("a-cascader",{staticClass:"cascader_style",staticStyle:{width:"330px"},attrs:{options:t.room_options,"load-data":t.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:t.setVisionsFunc},model:{value:t.search.vacancy,callback:function(e){t.$set(t.search,"vacancy",e)},expression:"search.vacancy"}})],1),a("a-col",{staticClass:"suggestions_col_btn",attrs:{md:10,sm:20}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v("查找房间")]),a("a-button",{staticStyle:{"margin-left":"15px"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),a("a-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:function(e){return t.excelExportIn()}}},[t._v("导入数据")]),a("a-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:function(e){return t.excelExportOut()}}},[t._v("导出数据")])],1)],1),a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.mayDelRoomItem()}}},[t._v("批量删除")])],1),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,"row-key":function(t){return t.pigcms_id},"row-selection":t.rowSelection,pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.RoomEditModel.edit(n)}}},[t._v("编辑")]),1==n.status?a("a-divider",{attrs:{type:"vertical"}}):t._e(),1==n.status?a("a",{on:{click:function(e){return t.delRoomItem(n.pigcms_id,0)}}},[t._v("删除")]):t._e()],1)}},{key:"user_unbind_action",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.userUnbindRecord.List(n)}}},[t._v("点击查看")])])}},{key:"ic_manage_action",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.icCardManage.List(n)}}},[t._v("点击查看")])])}}])}),a("a-drawer",{attrs:{title:"导入房间数据",width:1100,visible:t.showExcelExportIn},on:{close:t.handleExportInCancel}},[t.showExcelExportIn?a("iframe",{staticStyle:{height:"970px",border:"none"},attrs:{src:t.excelExportInUrl,width:"100%"}}):t._e()]),a("a-modal",{attrs:{title:"请稍等,正在为您导出数据...",visible:t.tips_visible,closable:!1,"mask-closable":!1,footer:null,width:550}},[a("div",[a("a-spin",{attrs:{size:"large"}}),a("span",{staticStyle:{"margin-left":"25px"}},[t._v("加载中,请耐心等待,数量越多时间越长。")]),a("p",{staticStyle:{margin:"15px"}},[t._v("若长时间未成功导出，建议调整筛选条件减少导出数，然后分多次导出。")])],1)]),a("userUnbindRecord",{ref:"userUnbindRecord"}),a("room-edit",{ref:"RoomEditModel",on:{ok:t.bindOk}}),a("icCardManage",{ref:"icCardManage"})],1)},i=[],o=a("2909"),s=a("1da1"),r=(a("7d24"),a("dfae")),l=(a("96cf"),a("a9e3"),a("ac1f"),a("841c"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),c=a("020d"),u=a("f827"),d=a("a5c0"),p=[{title:"选择房间",dataIndex:"pigcms_id",key:"pigcms_id"},{title:"排序",dataIndex:"sort",key:"sort"},{title:"物业编号",dataIndex:"usernum",key:"usernum"},{title:"楼栋名称",dataIndex:"single_name",key:"single_name"},{title:"单元名称",dataIndex:"floor_name",key:"floor_name"},{title:"楼层名称",dataIndex:"layer_name",key:"layer_name"},{title:"房间号",dataIndex:"room",key:"room"},{title:"使用状态",dataIndex:"user_status_str",key:"user_status_str"},{title:"已解绑住户记录",key:"user_unbind_action",scopedSlots:{customRender:"user_unbind_action"}},{title:"IC卡管理",key:"ic_manage_action",scopedSlots:{customRender:"ic_manage_action"}},{title:"物业服务时间",dataIndex:"service_cycle",key:"service_cycle"},{title:"状态",dataIndex:"status_str",key:"status_str"},{title:"操作",key:"action",width:"170px",dataIndex:"",scopedSlots:{customRender:"action"}}],m=[],h={name:"unitRentalHouseList",filters:{},props:{pigcmsId:{type:Number,default:0},village_id:{type:Number,default:0},usernum:{type:String,default:""}},components:{"a-collapse":r["a"],"a-collapse-panel":r["a"].Panel,roomEdit:c["default"],userUnbindRecord:u["default"],icCardManage:d["default"]},data:function(){var t=this;return{reply_content:"",pagination:{current:1,pageSize:20,total:20,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},search:{keyword:"",keytype:"usernum",page:1,status:"0",vacancy:[]},form:this.$form.createForm(this),visible:!1,loading:!1,key_name:"请输物业编号",data:m,columns:p,room_options:[],search_data:"",page:1,selectedRowKeys:[],choice_ids:[],confirmLoading:!1,exportPattern:2,modalTitle:"Excel导出",showExcelExportIn:!1,excelExportInUrl:"",excelExportOutUrl:"",tips_visible:!1,excelExportOutFileUrl:"",export_out_id:0,setTimeoutS:null}},activated:function(){},mounted:function(){this.getList(),this.getSingleListByVillage()},computed:{rowSelection:function(){var t=this;return{onChange:function(e,a){console.log("selectedRowKeys changed: ",e),t.choice_ids=e,t.selectedRowKeys=e,t.$forceUpdate()},getCheckboxProps:function(t){return{props:{disabled:1!=t.status}}}}}},methods:{getList:function(){var t=this;this.choice_ids=[],this.loading=!0,this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.request(l["a"].getUnitRentalRooms,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.excelExportInUrl=e.excelExportInUrl,t.excelExportOutUrl=e.excelExportOutUrl,t.excelExportOutFileUrl=e.excelExportOutFileUrl,console.log("list",e.list),t.loading=!1}))},keyChange:function(t){"name"==t&&(this.key_name="请输入姓名"),"phone"==t&&(this.key_name="请输入电话"),"usernum"==t&&(this.key_name="请输物业编号"),this.search.keyword=""},bindOk:function(){this.getList()},resetSearch:function(){this.search={keyword:"",keytype:"",page:1,status:"0",vacancy:[]},this.getList()},excelExportIn:function(){this.showExcelExportIn=!0},handleExportInCancel:function(){this.showExcelExportIn=!1,this.getList(),this.getSingleListByVillage()},excelExportOut:function(){var t=this;this.tips_visible=!0,this.search["tokenName"]="village_access_token",this.request(this.excelExportOutUrl,this.search).then((function(e){t.export_out_id=e.export_id,t.excelExportOutFileUrl=t.excelExportOutFileUrl+"&id="+e.export_id,t.CheckExportOutStatus()}))},CheckExportOutStatus:function(){var t=this,e=this,a=this.excelExportOutFileUrl+"&ajax=village_ajax";this.request(a,{tokenName:"village_access_token",ajax:"village_ajax"}).then((function(a){if(0==a.error_code)return clearTimeout(e.setTimeoutS),e.setTimeoutS=null,window.location.href=t.excelExportOutFileUrl,e.tips_visible=!1,!1;e.setTimeoutS=setTimeout(e.CheckExportOutStatus,2e3)}))},getSingleListByVillage:function(){var t=this;this.request(l["a"].getSingleListByVillage,{xtype:"unitRental"}).then((function(e){if(console.log("+++++++Single",e),e){var a=[];e.map((function(t){a.push({label:t.name,value:t.id,isLeaf:!1})})),t.room_options=a}}))},getFloorList:function(t){var e=this;return new Promise((function(a){e.request(l["a"].getFloorList,{pid:t}).then((function(t){console.log("+++++++Single",t),console.log("resolve",a),a(t)}))}))},getLayerList:function(t){var e=this;return new Promise((function(a){e.request(l["a"].getLayerList,{pid:t}).then((function(t){console.log("+++++++Single",t),t&&a(t)}))}))},getVacancyList:function(t){var e=this;return new Promise((function(a){e.request(l["a"].getVacancyList,{pid:t}).then((function(t){console.log("+++++++Single",t),t&&a(t)}))}))},loadDataFunc:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t[t.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return e.stop()}}),e)})))()},setVisionsFunc:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i,s,r,l,c,u,d,p,m,h,_;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(1!==t.length){a.next=12;break}return n=Object(o["a"])(e.room_options),a.next=4,e.getFloorList(t[0]);case 4:i=a.sent,console.log("res",i),s=[],i.map((function(t){return s.push({label:t.name,value:t.id,isLeaf:!1}),n["children"]=s,!0})),n.find((function(e){return e.value===t[0]}))["children"]=s,e.room_options=n,a.next=36;break;case 12:if(2!==t.length){a.next=24;break}return a.next=15,e.getLayerList(t[1]);case 15:r=a.sent,l=Object(o["a"])(e.room_options),c=[],r.map((function(t){return c.push({label:t.name,value:t.id,isLeaf:!1}),!0})),u=l.find((function(e){return e.value===t[0]})),u.children.find((function(e){return e.value===t[1]}))["children"]=c,e.room_options=l,a.next=36;break;case 24:if(3!==t.length){a.next=36;break}return a.next=27,e.getVacancyList(t[2]);case 27:d=a.sent,p=Object(o["a"])(e.room_options),m=[],d.map((function(t){return m.push({label:t.name,value:t.id,isLeaf:!0}),!0})),h=p.find((function(e){return e.value===t[0]})),_=h.children.find((function(e){return e.value===t[1]})),_.children.find((function(e){return e.value===t[2]}))["children"]=m,e.room_options=p,console.log("_this.options",e.room_options);case 36:case"end":return a.stop()}}),a)})))()},dateOnChange:function(t,e){this.search.date=e,console.log("search1111",this.search)},onTableChange:function(t,e){this.page=t,this.pagination.current=t,this.pagination.pageSize=e,this.getList(),console.log("onTableChange==>",t,e)},table_change:function(t){console.log("table_change",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},handleCancel:function(){this.visible=!1,this.exportType=1},excelExport:function(){var t=this;this.loading=!0,this.search["exportPattern"]=this.exportPattern,console.log(this.search),this.request(l["a"].printPayOrderList,this.search).then((function(e){console.log("list",e.list),window.location.href=e.url,t.loading=!1,t.handleCancel()})).catch((function(e){t.loading=!1,t.handleCancel()}))},mayDelRoomItem:function(){if(!this.choice_ids||this.choice_ids.length<1)return this.$message.error("请至少选择一条数据!"),!1;this.delRoomItem(this.choice_ids,1)},delRoomItem:function(t,e){if(t){var a=this,n={pigcms_ids:t},i="您确认要删除此条房间数据吗？";1==e&&(i="您确认要删除所选中的房间数据吗？"),this.$confirm({title:"确认删除",content:i,onOk:function(){a.request(l["a"].deleteUnitRentalRoom,n).then((function(t){a.$message.success("删除成功"),setTimeout((function(){a.getList()}),1500)}))},onCancel:function(){}})}},arrUnique:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pigcms_id",a=[],n=0,i=t.length;n<i;n++)-1===a.indexOf(t[n][e])&&a.push(t[n][e]);return a}}},_=h,f=(a("707d"),a("0c7c")),g=Object(f["a"])(_,n,i,!1,null,"346c1a34",null);e["default"]=g.exports},"87b2a":function(t,e,a){"use strict";a("8db0")},"8db0":function(t,e,a){},a5c0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"IC卡管理(仅展示该房间绑定的IC卡，不显示业主/家属/租客绑定的IC卡)",width:850,visible:t.visible,maskClosable:!0,placement:"right"},on:{close:t.handleCancel}},[a("div",[a("a-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.icCardAdd()}}},[t._v("添加IC卡")]),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,"row-key":function(t){return t.id},pagination:t.pagination,loading:t.loading},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.delRoomItem(n)}}},[t._v("删除")])])}}])}),a("a-modal",{attrs:{title:"读取卡号",visible:t.iframe_visible,"mask-closable":!1,footer:null,width:750},on:{cancel:t.handleIframeCancel}},[t.iframe_visible?a("iframe",{staticStyle:{height:"550px",border:"none"},attrs:{src:t.icCardAddUrl,width:"100%"}}):t._e()])],1)])},i=[],o=(a("7d24"),a("dfae")),s=(a("ac1f"),a("841c"),a("a0e0")),r=[{title:"设备品牌",dataIndex:"device_brand",key:"device_brand"},{title:"设备类型",dataIndex:"device_type",key:"device_type"},{title:"IC卡号",dataIndex:"ic_card",key:"ic_card"},{title:"添加时间",dataIndex:"add_time_str",key:"add_time_str"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l=[],c={name:"houseWorkerEdit",filters:{},components:{"a-collapse":o["a"],"a-collapse-panel":o["a"].Panel},data:function(){var t=this;return{visible:!1,loading:!1,data:l,columns:r,record:{},search:{page:1,limit:20},pagination:{current:1,pageSize:20,total:20,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},page:1,iframe_visible:!1,icCardAddUrl:""}},activated:function(){},methods:{List:function(t){this.record=t,this.visible=!0,this.getRoomIcCardList()},handleCancel:function(){this.record={},this.visible=!1},handleIframeCancel:function(){this.iframe_visible=!1,this.getRoomIcCardList()},icCardAdd:function(){this.iframe_visible=!0},getRoomIcCardList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.search["vacancy_id"]=this.record.pigcms_id,this.request(s["a"].getRoomIcCardList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:20,t.data=e.list,t.icCardAddUrl=e.icCardAddUrl,t.loading=!1}))},onTableChange:function(t,e){this.page=t,this.pagination.current=t,this.pagination.pageSize=e,this.getRoomIcCardList()},delRoomItem:function(t){if(t.id){var e=this,a={idd:t.id,village_id:t.village_id},n="确认删除卡号是【"+t.ic_card+"】这条数据？一旦删除无法恢复，请谨慎操作";this.$confirm({title:"确认删除",content:n,onOk:function(){e.request(s["a"].deleteRoomIcCardUrl,a).then((function(t){e.$message.success("删除成功"),setTimeout((function(){e.getRoomIcCardList()}),1500)}))},onCancel:function(){}})}},table_change:function(t){console.log("table_change",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getRoomIcCardList())}}},u=c,d=(a("1fa6"),a("0c7c")),p=Object(d["a"])(u,n,i,!1,null,"4b45a894",null);e["default"]=p.exports},c71d:function(t,e,a){"use strict";a("01be")},f827:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"住户记录（该住户记录仅记录该房间已解绑的用户）",width:850,visible:t.visible,maskClosable:!0,placement:"right"},on:{close:t.handleCancel}},[a("div",[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,"row-key":function(t){return t.id},pagination:t.pagination,loading:t.loading},on:{change:t.table_change}})],1)])},i=[],o=(a("7d24"),a("dfae")),s=(a("ac1f"),a("841c"),a("a0e0")),r=[{title:"名称",dataIndex:"name",key:"name"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"类型",dataIndex:"type_str",key:"type_str"},{title:"入住时间",dataIndex:"check_in_time_str",key:"check_in_time_str"},{title:"解绑时间",dataIndex:"add_time_str",key:"add_time_str"}],l=[],c={name:"houseWorkerEdit",filters:{},components:{"a-collapse":o["a"],"a-collapse-panel":o["a"].Panel},data:function(){var t=this;return{visible:!1,loading:!1,data:l,columns:r,record:{},search:{page:1,limit:20},pagination:{current:1,pageSize:20,total:20,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},page:1}},activated:function(){},methods:{List:function(t){this.record=t,this.visible=!0,this.getUserUnbindList()},handleCancel:function(){this.record={},this.visible=!1},getUserUnbindList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.search["vacancy_id"]=this.record.pigcms_id,this.request(s["a"].getUserRecordList,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:20,t.data=e.list,t.loading=!1}))},onTableChange:function(t,e){this.page=t,this.pagination.current=t,this.pagination.pageSize=e,this.getUserUnbindList()},table_change:function(t){console.log("table_change",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getUserUnbindList())}}},u=c,d=(a("87b2a"),a("0c7c")),p=Object(d["a"])(u,n,i,!1,null,"5173533e",null);e["default"]=p.exports}}]);