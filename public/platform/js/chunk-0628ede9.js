(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0628ede9","chunk-8447ee56","chunk-f189d49a","chunk-2d0b6a79","chunk-2d0b3786"],{"0b52":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-drawer",{attrs:{width:1450,title:"抄表记录",visible:e.visible_record,maskClosable:!1,"confirm-loading":e.confirmLoading,"dialog-style":{top:"20px"}},on:{close:e.handleCancel}},[a("div",{staticClass:"message-suggestions-list-box"},[a("div",{staticClass:"search-box",staticStyle:{"margin-top":"12px","margin-left":"10px"}},[a("a-row",{staticStyle:{"margin-bottom":"12px"},attrs:{gutter:48}},[a("a-col",{staticStyle:{"padding-right":"0px"},attrs:{md:6,sm:14}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("房间：")]),a("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:e.options,"load-data":e.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:e.setVisionsFunc},model:{value:e.room_id,callback:function(t){e.room_id=t},expression:"room_id"}})],1),a("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"5px","padding-right":"1px",width:"470px"},attrs:{md:8,sm:20}},[a("label",{staticStyle:{"margin-top":"5px"}},[e._v("时间筛选：")]),a("a-range-picker",{staticStyle:{width:"325px"},attrs:{allowClear:!0},on:{change:e.dateChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e.is_show?a("a-col",{staticClass:"padding-tp10",staticStyle:{"padding-left":"5px","padding-right":"1px",width:"210px"},attrs:{md:6,sm:24}},[a("label",{staticClass:"label_title"},[e._v("交易类型：")]),a("a-select",{staticStyle:{width:"110px"},attrs:{"show-search":"",placeholder:"请选择"},model:{value:e.transaction_type,callback:function(t){e.transaction_type=t},expression:"transaction_type"}},e._l(e.pay_order_type,(function(t,i){return a("a-select-option",{attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),a("a-col",{staticStyle:{"padding-left":"0px","padding-right":"1px",width:"90px"},attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.searchList()}}},[e._v(" 查询 ")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.printList()}}},[e._v("Excel导出")])],1),a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.createUploadModal.add(e.charge_name,e.project_id)}}},[e._v("导入")])],1)],1)],1),a("br"),a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.is_show?e.columns1:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.table_change},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[1==i.is_edit?a("a",{on:{click:function(t){return e.$refs.addMeter.edit(i)}}},[e._v("修改")]):e._e(),1==i.order_is_pay&&i.mdy_change_ammeter>0&&i.mdy_change_money>0?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==i.order_is_pay&&i.mdy_change_ammeter>0&&i.mdy_change_money>0?a("a",{attrs:{loading:e.createNewOrderLoading},on:{click:function(t){return e.createNewOrder(i)}}},[e._v("生成收费账单")]):e._e()],1)}}])})],1)]),a("meter-upload",{ref:"createUploadModal",attrs:{height:800,width:500},on:{ok:e.handleOks}}),a("add-meter",{ref:"addMeter",on:{okk:e.handleOks}})],1)},n=[],r=a("2909"),s=a("1da1"),o=(a("96cf"),a("ac1f"),a("841c"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),l=a("ca00"),d=a("d2cd"),c=a("b794"),m=[{title:"住址",dataIndex:"address",key:"address"},{title:"姓名",dataIndex:"name",key:"name"},{title:"电话",dataIndex:"phone",key:"phone"},{title:"单价(元)",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"总价(元)",dataIndex:"cost_money",key:"cost_money"},{title:"操作人",dataIndex:"realname",key:"realname"},{title:"备注",dataIndex:"note",key:"note"},{title:"操作",dataIndex:"",width:190,key:"action",scopedSlots:{customRender:"action"}}],h=[{title:"住址",dataIndex:"address",key:"address"},{title:"姓名",dataIndex:"name",key:"name"},{title:"电话",dataIndex:"phone",key:"phone"},{title:"单价(元)",dataIndex:"unit_price",key:"unit_price"},{title:"倍率",dataIndex:"rate",key:"rate"},{title:"抄表时间",dataIndex:"opt_meter_time_str",key:"opt_meter_time_str"},{title:"起度",dataIndex:"start_ammeter",key:"start_ammeter"},{title:"止度",dataIndex:"last_ammeter",key:"last_ammeter"},{title:"总价(元)",dataIndex:"cost_money",key:"cost_money"},{title:"交易类型",dataIndex:"transaction_type_txt",key:"transaction_type_txt"},{title:"操作人",dataIndex:"realname",key:"realname"},{title:"备注",dataIndex:"note",key:"note"},{title:"操作",dataIndex:"",width:190,key:"action",scopedSlots:{customRender:"action"}}],u=[],_={components:{meterUpload:d["default"],addMeter:c["default"]},data:function(){var e=this;return{is_show:!0,visible_record:!1,confirmLoading:!1,data:u,columns:m,columns1:h,options:[],pay_order_type:[{name:"全部",value:0},{name:"购买",value:1},{name:"缴费",value:2}],pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,a){return e.onTableChange(t,a)},onChange:function(t,a){return e.onTableChange(t,a)}},loading:!1,charge_name:"",project_id:0,page:1,room_id:[],transaction_type:"",date_time:[],tokenName:"",sysName:"",createNewOrderLoading:!1}},mounted:function(){var e=Object(l["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{dateChange:function(e,t){this.date_time=t,console.log("dateString",this.date_time)},get:function(e,t){this.charge_name=e,this.project_id=t,this.getList(e,t),this.getSingleListByVillage(),this.visible_record=!0},printList:function(){var e=this;this.loading=!0,this.request(o["a"].printRecordList,{charge_name:this.charge_name,room_id:this.room_id,date_time:this.date_time,tokenName:this.tokenName}).then((function(t){window.location.href=t.url,e.loading=!1}))},createNewOrder:function(e){var t="生成新收费订单确认",a="止度增加了"+e.mdy_change_ammeter+"，费用增加了"+e.mdy_change_money+"元，您确认生成收费账单吗？",i=this;this.$confirm({title:t,content:a,onOk:function(){i.createNewOrderLoading=!0;var t={idd:e.id,mdy_change_ammeter:e.mdy_change_ammeter,mdy_change_money:e.mdy_change_money,tokenName:i.tokenName};i.request(o["a"].addMdyMeterReadingOrder,t).then((function(e){i.createNewOrderLoading=!1,i.$message.success("操作成功"),i.getList(i.charge_name,i.project_id)}))},onCancel:function(){}})},handleOks:function(){this.getList(this.charge_name,this.project_id)},handleCancel:function(){this.visible_record=!1},onTableChange:function(e,t){this.page=e,this.pagination.current=e,this.pagination.pageSize=t,this.getList(this.charge_name,this.project_id),console.log("onTableChange==>",e,t)},table_change:function(e){console.log("e",e),e.current&&e.current>0&&(this.page=e.current,this.getList(this.charge_name,this.project_id))},getList:function(e,t){var a=this;this.request(o["a"].getMeterReadingRecord,{charge_name:e,project_id:t,page:this.page,limit:this.pagination.pageSize,room_id:this.room_id,date_time:this.date_time,tokenName:this.tokenName,single_id:this.single_id,floor_id:this.floor_id,layer_id:this.layer_id,transaction_type:this.transaction_type}).then((function(e){a.pagination.total=e.count?e.count:0,a.pagination.pageSize=e.total_limit?e.total_limit:10,a.data=e.list,a.is_show=e.is_show,a.loading=!1}))},searchList:function(){console.log("search",this.search),this.getList(this.charge_name,this.project_id)},getSingleListByVillage:function(){var e=this;this.request(o["a"].getSingleListByVillage,{tokenName:this.tokenName}).then((function(t){if(console.log("+++++++Single",t),t){var a=[];t.map((function(e){a.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=a}}))},getFloorList:function(e){var t=this;return new Promise((function(a){t.request(o["a"].getFloorList,{pid:e,tokenName:t.tokenName}).then((function(e){console.log("+++++++Single",e),console.log("resolve",a),a(e)}))}))},getLayerList:function(e){var t=this;return new Promise((function(a){t.request(o["a"].getLayerList,{pid:e,tokenName:t.tokenName}).then((function(e){console.log("+++++++Single",e),e&&a(e)}))}))},getVacancyList:function(e){var t=this;return new Promise((function(a){t.request(o["a"].getVacancyList,{pid:e,tokenName:t.tokenName}).then((function(e){console.log("+++++++Single",e),e&&a(e)}))}))},loadDataFunc:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e[e.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,o,l,d,c,m,h,u,_,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(1!==e.length){a.next=12;break}return i=Object(r["a"])(t.options),a.next=4,t.getFloorList(e[0]);case 4:n=a.sent,console.log("res",n),s=[],n.map((function(e){return s.push({label:e.name,value:e.id,isLeaf:!1}),i["children"]=s,!0})),i.find((function(t){return t.value===e[0]}))["children"]=s,t.options=i,a.next=39;break;case 12:if(2!==e.length){a.next=24;break}return a.next=15,t.getLayerList(e[1]);case 15:o=a.sent,l=Object(r["a"])(t.options),d=[],o.map((function(e){return d.push({label:e.name,value:e.id,isLeaf:!1}),!0})),c=l.find((function(t){return t.value===e[0]})),c.children.find((function(t){return t.value===e[1]}))["children"]=d,t.options=l,a.next=39;break;case 24:if(3!==e.length){a.next=38;break}return a.next=27,t.getVacancyList(e[2]);case 27:m=a.sent,h=Object(r["a"])(t.options),u=[],m.map((function(e){return u.push({label:e.name,value:e.id,isLeaf:!0}),!0})),_=h.find((function(t){return t.value===e[0]})),p=_.children.find((function(t){return t.value===e[1]})),p.children.find((function(t){return t.value===e[2]}))["children"]=u,t.options=h,console.log("options",t.options),a.next=39;break;case 38:4===e.length&&console.log("room_id+++",t.room_id);case 39:case"end":return a.stop()}}),a)})))()}}},p=_,g=(a("f2e6"),a("2877")),f=Object(g["a"])(p,i,n,!1,null,"0b9b8bb0",null);t["default"]=f.exports},"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("d3b7");function i(e,t,a,i,n,r,s){try{var o=e[r](s),l=o.value}catch(d){return void a(d)}o.done?t(l):Promise.resolve(l).then(i,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function o(e){i(s,n,r,o,l,"next",e)}function l(e){i(s,n,r,o,l,"throw",e)}o(void 0)}))}}},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("6b75");function n(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return n(e)||r(e)||Object(s["a"])(e)||o()}},3117:function(e,t,a){"use strict";a("8238")},8238:function(e,t,a){},"996f":function(e,t,a){},b794:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:1e3,title:e.xtitle,destroyOnClose:!0,visible:e.visible_meter,maskClosable:!1,"confirm-loading":e.confirmLoading,footer:null},on:{cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[e.edit_disabled?a("div",{staticStyle:{margin:"0px 0px 20px 20px"}},[0==e.currentIndex?a("div",[a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("修改详情")]),e.show_mdylog?a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("修改记录")]):e._e()],1):a("div",[a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"default"},on:{click:function(t){return e.changeXTab(0)}}},[e._v("修改详情")]),e.show_mdylog?a("a-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:function(t){return e.changeXTab(1)}}},[e._v("修改记录")]):e._e()],1)]):e._e(),0==e.currentIndex||0==e.edit_id?a("div",{staticClass:"order_list_box"},[a("a-form",{attrs:{form:e.form}},[e.edit_id<1?a("a-form-item",{attrs:{label:"选择",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-cascader",{staticClass:"cascader_style margin_left_10",attrs:{options:e.options,"load-data":e.loadDataFunc,placeholder:"请选择房间","change-on-select":""},on:{change:e.setVisionsFunc}})],1):a("a-form-item",{attrs:{label:"房间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{disabled:"disabled"},model:{value:e.irecord.address,callback:function(t){e.$set(e.irecord,"address",t)},expression:"irecord.address"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"收费项目",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.project_name,callback:function(t){e.project_name=t},expression:"project_name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"收费标准名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.charge_name,callback:function(t){e.charge_name=t},expression:"charge_name"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"单价",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.unit_price,callback:function(t){e.unit_price=t},expression:"unit_price"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"倍率",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:"disabled"},model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"抄表时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[e.opt_meter_time?a("a-date-picker",{attrs:{"show-time":{format:"HH:mm"},placeholder:"选择抄表时间",value:e.moment(e.opt_meter_time,e.dateFormat),format:e.dateFormat,"disabled-date":e.disabledDate,"disabled-time":e.disabledDateTime,disabled:e.edit_disabled},on:{change:e.onMeterChange}}):a("a-date-picker",{attrs:{"show-time":{format:"HH:mm"},placeholder:"选择抄表时间","disabled-date":e.disabledDate,"disabled-time":e.disabledDateTime,format:e.dateFormat,disabled:e.edit_disabled},on:{change:e.onMeterChange}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"起度",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10,disabled:e.edit_disabled},model:{value:e.start_ammeter,callback:function(t){e.start_ammeter=t},expression:"start_ammeter"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"止度",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10},model:{value:e.last_ammeter,callback:function(t){e.last_ammeter=t},expression:"last_ammeter"}})],1),a("a-col",{attrs:{span:6}})],1),a("a-form-item",{attrs:{label:"备注",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:10},model:{value:e.note,callback:function(t){e.note=t},expression:"note"}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1):e._e(),1==e.currentIndex?a("div",{staticClass:"meter_reading_mdylog",staticStyle:{margin:"30px 0px 20px 35px"}},[a("a-timeline",e._l(e.meterReadingMdylog,(function(t,i){return a("a-timeline-item",{attrs:{color:t.color_v}},[a("p",[a("strong",[e._v("修改人：")]),e._v(" "+e._s(t.role_name))]),a("p",[a("strong",[e._v("修改时间：")]),e._v(" "+e._s(t.add_time_str))]),a("p",[a("strong",[e._v("修改前起始度：")]),e._v(" "+e._s(t.old_ammeter_str))]),a("p",[a("strong",[e._v("修改后起始度：")]),e._v(" "+e._s(t.now_ammeter_str))]),a("p",[a("strong",[e._v("备注：")]),e._v(" "+e._s(t.note))])])})),1)],1):e._e()]),e.is_footer?a("div",{staticStyle:{"text-align":"center"}},[a("a-button",{key:"back",staticStyle:{"margin-right":"50px"},on:{click:e.handleCancel}},[e._v(" 取消 ")]),a("a-button",{key:"submit",attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleOk}},[e._v(" 确认 ")])],1):e._e()],1)},n=[],r=a("2909"),s=a("1da1"),o=(a("96cf"),a("d81d"),a("b0c0"),a("d3b7"),a("7db0"),a("a0e0")),l=a("ca00"),d=a("c1df"),c=a.n(d),m={name:"addMeter",data:function(){return{visible_meter:!1,confirmLoading:!1,form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},options:[],project_name:"",charge_name:"",rate:1,unit_price:0,start_ammeter:"",last_ammeter:"",note:"",single_id:0,floor_id:0,layer_id:0,room_id:0,rule_id:0,project_id:0,charge_type:"",tokenName:"",sysName:"",opt_meter_time:"",dateFormat:"YYYY-MM-DD HH:mm",irecord:{},edit_id:0,xtitle:"用量录入",edit_disabled:!1,show_mdylog:!1,currentIndex:0,meterReadingMdylog:[],is_footer:!0}},methods:{moment:c.a,add:function(e,t,a,i,n,r,s){var o=Object(l["i"])(location.hash);o?(this.tokenName=o+"_access_token",this.sysName=o):this.sysName="village",this.opt_meter_time=this.get_data_time(),this.project_name=e,this.charge_name=t,this.unit_price=a,this.rate=i,this.charge_type=n,this.rule_id=r,this.project_id=s,this.getSingleListByVillage(),this.irecord={},this.edit_id=0,this.edit_disabled=!1,this.show_mdylog=!1,this.currentIndex=0,this.meterReadingMdylog=[],this.is_footer=!0,this.visible_meter=!0},edit:function(e){var t=Object(l["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.irecord=e,console.log(this.irecord),this.edit_id=e.id,this.edit_disabled=!0,this.meterReadingMdylog=[],this.getMeterReading(),this.opt_meter_time=e.opt_meter_time_str,this.unit_price=e.unit_price,this.rate=e.rate,this.project_id=e.project_id,this.start_ammeter=e.start_ammeter,this.last_ammeter=e.last_ammeter,this.note=e.note,this.room_id=e.layer_num,this.xtitle="编辑抄表止度",this.show_mdylog=!1,this.currentIndex=0,this.is_footer=!0,this.visible_meter=!0},changeXTab:function(e){this.currentIndex=e,0==this.currentIndex?this.is_footer=!0:1==this.currentIndex&&(this.is_footer=!1,this.meterReadingMdylogList())},meterReadingMdylogList:function(){var e=this;this.request(o["a"].getMeterReadingMdylog,{meter_reading_id:this.irecord.id,tokenName:this.tokenName}).then((function(t){e.meterReadingMdylog=t.list,e.meterReadingMdylog&&e.meterReadingMdylog.length>0&&(e.show_mdylog=!0)}))},getMeterReading:function(){var e=this;this.request(o["a"].getOneMeterReading,{id:this.irecord.id,tokenName:this.tokenName}).then((function(t){e.irecord=t,e.charge_type=t.charge_type,e.rule_id=t.rule_id,e.project_name=t.project_name,e.charge_name=t.rule_name,e.unit_price=t.unit_price,e.rate=t.rate,e.start_ammeter=t.start_ammeter,e.last_ammeter=t.last_ammeter,e.note=t.note,e.room_id=t.layer_num,e.single_id=t.single_id,e.floor_id=t.floor_id,e.layer_id=t.layer_id,e.meterReadingMdylogList()}))},get_data_time:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes();return console.log(t),t},disabledDate:function(e){return e&&e>c()().endOf("day")},date_range:function(e,t){for(var a=[],i=e;i<=t;i++)a.push(i);return a},disabledDateTime:function(e){console.log("date",e);var t=(new Date).getDate(),a=new Date(e._i).getDate(),i=new Date(e._i).getHours();if(console.log("xday",t,"selectdate",a),a<t)return{disabledHours:function(){return[]},disabledMinutes:function(){return[]}};var n=(new Date).getHours(),r=[],s=n+1;s<23&&(r=this.date_range(s,23));var o=[];if(n==i){var l=(new Date).getMinutes(),d=l+1;d<59&&(o=this.date_range(d,59))}return{disabledHours:function(){return r},disabledMinutes:function(){return o}}},onMeterChange:function(e,t){this.opt_meter_time=t},handleOk:function(){var e=this;return 0==this.room_id?(this.$message.warning("请选择房间"),!1):parseFloat(this.start_ammeter)>=parseFloat(this.last_ammeter)?(this.$message.warning("止度需要大于起度"),!1):""==this.start_ammeter||""==this.last_ammeter?(this.$message.warning("起度/止度不能为空"),!1):void(this.edit_id>0&&this.edit_disabled?this.request(o["a"].meterReadingEdit,{id:this.edit_id,start_ammeter:this.start_ammeter,last_ammeter:this.last_ammeter,tokenName:this.tokenName,rule_id:this.rule_id,note:this.note}).then((function(t){e.$message.success("操作成功"),e.$emit("okk"),e.start_ammeter="",e.last_ammeter="",e.handleCancel(),e.visible_meter=!1})):this.request(o["a"].meterReadingAdd,{single_id:this.single_id,floor_id:this.floor_id,layer_id:this.layer_id,vacancy_id:this.room_id,start_ammeter:this.start_ammeter,last_ammeter:this.last_ammeter,charge_name:this.project_name,unit_price:this.unit_price,charge_type:this.charge_type,rule_id:this.rule_id,note:this.note,project_id:this.project_id,tokenName:this.tokenName,rate:this.rate,opt_meter_time:this.opt_meter_time}).then((function(t){e.$message.success("录入成功"),e.$emit("getMeterProject"),e.start_ammeter="",e.last_ammeter="",e.visible_meter=!1})))},handleCancel:function(){this.start_ammeter="",this.last_ammeter="",this.visible_meter=!1,this.edit_id=0,this.edit_disabled=!1,this.irecord={},this.show_mdylog=!1,this.currentIndex=0,this.is_footer=!0,this.meterReadingMdylog=[]},getLastMeter:function(){var e=this;this.request(o["a"].getIsBind,{project_id:this.project_id,vacancy_id:this.room_id}).then((function(t){t.status?e.request(o["a"].getLastMeter,{project_id:e.project_id,vacancy_id:e.room_id,tokenName:e.tokenName}).then((function(t){e.start_ammeter=t.last_ammeter})):e.$message.warning("当前房间没有绑定该收费项目")}))},getSingleListByVillage:function(){var e=this,t={tokenName:this.tokenName};this.charge_type&&(t["charge_type"]=this.charge_type),this.rule_id&&(t["rule_id"]=this.rule_id),this.project_id&&(t["project_id"]=this.project_id),this.request(o["a"].getSingleListByVillage,t).then((function(t){if(console.log("+++++++Single",t),t){var a=[];t.map((function(e){a.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=a}}))},getFloorList:function(e){var t=this,a={pid:e,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(e){t.request(o["a"].getFloorList,a).then((function(t){console.log("+++++++Single",t),console.log("resolve",e),e(t)}))}))},getLayerList:function(e){var t=this,a={pid:e,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(e){t.request(o["a"].getLayerList,a).then((function(t){console.log("+++++++Single",t),t&&e(t)}))}))},getVacancyList:function(e){var t=this,a={pid:e,tokenName:this.tokenName};return this.charge_type&&(a["charge_type"]=this.charge_type),this.rule_id&&(a["rule_id"]=this.rule_id),this.project_id&&(a["project_id"]=this.project_id),new Promise((function(e){t.request(o["a"].getVacancyList,a).then((function(t){console.log("+++++++Single",t),t&&e(t)}))}))},loadDataFunc:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e[e.length-1],a.loading=!0,setTimeout((function(){a.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,o,l,d,c,m,h,u,_,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.room_id=0,1!==e.length){a.next=14;break}return t.single_id=e[0],i=Object(r["a"])(t.options),a.next=6,t.getFloorList(e[0]);case 6:n=a.sent,console.log("res",n),s=[],n.map((function(e){return s.push({label:e.name,value:e.id,isLeaf:!1}),i["children"]=s,!0})),i.find((function(t){return t.value===e[0]}))["children"]=s,t.options=i,a.next=43;break;case 14:if(2!==e.length){a.next=27;break}return t.floor_id=e[1],a.next=18,t.getLayerList(e[1]);case 18:o=a.sent,l=Object(r["a"])(t.options),d=[],o.map((function(e){return d.push({label:e.name,value:e.id,isLeaf:!1}),!0})),c=l.find((function(t){return t.value===e[0]})),c.children.find((function(t){return t.value===e[1]}))["children"]=d,t.options=l,a.next=43;break;case 27:if(3!==e.length){a.next=42;break}return t.layer_id=e[2],a.next=31,t.getVacancyList(e[2]);case 31:m=a.sent,h=Object(r["a"])(t.options),u=[],m.map((function(e){return u.push({label:e.name,value:e.id,isLeaf:!0}),!0})),_=h.find((function(t){return t.value===e[0]})),p=_.children.find((function(t){return t.value===e[1]})),p.children.find((function(t){return t.value===e[2]}))["children"]=u,t.options=h,console.log("_this.options",t.options),a.next=43;break;case 42:4===e.length&&(t.room_id=e[3],t.getLastMeter());case 43:case"end":return a.stop()}}),a)})))()}}},h=m,u=a("2877"),_=Object(u["a"])(h,i,n,!1,null,"0aac626f",null);t["default"]=_.exports},d2cd:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:300,visible:e.visibleUpload,maskClosable:!1,confirmLoading:e.confirmLoading,footer:null},on:{cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("div",[a("span",[e._v("示例表格")]),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/static/file/village/meter/addMeter.xls",target:"_blank"}},[e._v("点击下载")])]),a("div",{staticStyle:{"border-bottom":"1px solid #dad8d8","border-top":"1px solid #dad8d8","margin-top":"20px"}},[a("span",[e._v("导入Excel")]),a("a-upload",{attrs:{name:"file","file-list":e.avatarFileList,action:e.upload,headers:e.headers,"before-upload":e.beforeUploadFile},on:{change:e.handleChangeUpload}},[a("a-button",{staticStyle:{margin:"20px   20px  10px"},attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 导入 ")],1)],1)],1),e.show?a("div",{staticStyle:{"margin-top":"20px"}},[a("span",[e._v("导入失败")]),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:e.url,target:"_blank"}},[e._v("点击下载带入失败数据表格")])]):e._e()])],1)},n=[],r=a("a0e0"),s=a("ca00"),o={data:function(){return{upload:"/v20/public/index.php"+r["a"].uploadMeterFiles+"?upload_dir=/house/excel/meterUpload",avatarFileList:[],headers:{authorization:"authorization-text"},visibleUpload:!1,confirmLoading:!1,title:"导入",url:"",show:!1,fileloading:!1,data_arr:[],tokenName:"",sysName:"",charge_name:"",project_id:0}},activated:function(){var e=Object(s["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village"},methods:{add:function(e,t){this.title="导入",this.visibleUpload=!0,this.url=window.location.host+"/v20/runtime/demo.xlsx",this.avatarFileList=[],this.charge_name=e,this.project_id=t},beforeUploadFile:function(e){var t=e.size/1024/1024<20;return t?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):t:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChangeUpload:function(e){var t=this;if(console.log("########",e),e.file&&!e.file.status&&this.fileloading)return!1;if("uploading"===e.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.avatarFileList=e.fileList}if("uploading"!==e.file.status&&(this.fileloading=!1,console.log(e.file,e.fileList)),"done"==e.file.status&&e.file&&e.file.response){var a=e.file.response;if(1e3===a.status)this.data_arr.push(a.data),console.log("data_arr",this.data_arr),this.avatarFileList=e.fileList,console.log("--------",a.data.url),this.request(r["a"].exportMeter,{tokenName:this.tokenName,file:a.data.url,charge_name:this.charge_name}).then((function(e){e.error?(t.$parent.getList(t.charge_name,t.project_id),t.$message.success("上传成功")):window.location.href=e.data})),this.visibleUpload=!1;else for(var i in this.$message.error(e.file.response.msg),this.avatarFileList=[],e.fileList)if(e.fileList[i]){var n=e.fileList[i];console.log("info_1",n),n&&n.response&&1e3===n.response.status&&this.avatarFileList.push(n)}}if("removed"==e.file.status&&e.file){var s=e.file.response;if(s&&1e3===s.status)for(var i in this.data_arr=[],e.fileList)if(e.fileList[i]){var o=e.fileList[i];o&&o.response&&1e3===o.response.status&&this.data_arr.push(o.response.data)}this.avatarFileList=e.fileList,console.log("data_arr1",this.data_arr)}},handleCancel:function(){this.visibleUpload=!1}}},l=o,d=(a("3117"),a("2877")),c=Object(d["a"])(l,i,n,!1,null,"21c34c8b",null);t["default"]=c.exports},f2e6:function(e,t,a){"use strict";a("996f")}}]);