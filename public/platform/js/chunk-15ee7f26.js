(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15ee7f26","chunk-79174ffb"],{2806:function(t,e,a){},"7c13":function(t,e,a){},"80e6":function(t,e,a){"use strict";a("2806")},9642:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("a-drawer",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.loading},on:{close:t.handleCancel}},[a("div",{staticStyle:{"background-color":"white","padding-bottom":"50px"}},[a("div",{staticClass:"order-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination}})],1)])]):t._e()},o=[],s=(a("ac1f"),a("841c"),a("a0e0"),a("b74f")),r=[{title:"房间号/车位号",dataIndex:"numbers",key:"numbers"},{title:"生成时间",dataIndex:"time",key:"time"},{title:"生成结果",dataIndex:"status",key:"status"},{title:"失败原因",dataIndex:"fail_reason",key:"fail_reason"}],n={name:"OrderLogList",data:function(){var t=this;return{title:"查看账单生成结果",ruleInfo:"",is_show:1,show:!0,dataId:1,data:[],rule_id:0,pagination:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){return t.onTableChange(e,a)},onChange:function(e,a){return t.onTableChange(e,a)}},search_data:[],search:{page:1},form:this.$form.createForm(this),visible:!1,loading:!1,columns:r,page:1}},components:{addBindInfo:s["default"]},mounted:function(){this.key=1},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}}},methods:{add:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";console.log("key==============>",e),this.loading=!1,this.visible=!0,this.rule_id=t,this.page=1,this.search["page"]=1,console.log("key",this.key),this.data=[],this.charge_type=a,console.log("this.charge_type======>",this.charge_type),this.getAddBindList()},getAddBindList:function(){var t=this;this.search["page"]=this.page,this.search["limit"]=this.pagination.pageSize,this.search.rule_id=this.rule_id,this.request("community/village_api.Cashier/getAutoOrderLogList",this.search).then((function(e){console.log("res1=============>",e),t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:0,t.data=e.list}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.rule_id="0",t.form=t.$form.createForm(t)}),500)},cancel:function(){},onTableChange:function(t,e){this.page=t,this.pagination.current=t,this.pagination.pageSize=e,this.getAddBindList(),console.log("onTableChange==>",t,e)}}},l=n,c=(a("ccc3"),a("2877")),d=Object(c["a"])(l,i,o,!1,null,"42b0d838",null);e["default"]=d.exports},b74f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{staticStyle:{"margin-bottom":"1px"},attrs:{label:"收费项",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[t._v(" "+t._s(t.project_name)+" ")])],1),a("a-form-item",{staticStyle:{"margin-bottom":"1px"},attrs:{label:"收费标准",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[t._v(" "+t._s(t.rule_name)+" ")])],1),a("a-form-item",{staticStyle:{"margin-bottom":"8px"},attrs:{label:"账单生成周期模式",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:18}},[t._v(" "+t._s(t.post.date_status)+" ")])],1),t.is_grapefruit_prepaid&&this.rule_info.bill_create_set>1?a("a-form-item",{attrs:{label:"账单合并生成",labelCol:t.labelCol,wrapperCol:t.wrapperCol,extra:"默认为是。选择否将结合收费周期值来生成多笔按1个月计费的订单,请谨慎操作!"}},[a("a-col",{attrs:{span:18}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":0},model:{value:t.post.per_one_order,callback:function(e){t.$set(t.post,"per_one_order",e)},expression:"post.per_one_order"}},[a("a-radio",{attrs:{value:0}},[t._v("是")]),a("a-radio",{attrs:{value:1}},[t._v("否")])],1)],1)],1):t._e(),a("a-form-item",{attrs:{label:"收费周期",labelCol:t.labelCol,wrapperCol:t.wrapperCol,extra:"不填默认为1"}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入收费周期时长"},model:{value:t.post.cycle,callback:function(e){t.$set(t.post,"cycle",e)},expression:"post.cycle"}})],1)],1),a("a-form-item",{attrs:{label:"账单开始生成时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol,extra:"不填默认下一缴费日生成应收账单"}},[a("a-col",{attrs:{span:18}},[t.is_show1&&t.post.order_add_time?a("a-date-picker",{attrs:{mode:t.date_status,format:t.dateFormat,placeholder:"请选择时间",value:t.moment(t.post.order_add_time,"YYYY-MM-DD")},on:{change:t.onChange,panelChange:t.selectYear}}):t._e(),t.is_show1&&!t.post.order_add_time?a("a-date-picker",{attrs:{mode:t.date_status,format:t.dateFormat,placeholder:"请选择时间"},on:{change:t.onChange,panelChange:t.selectYear}}):t._e()],1)],1),t.is_show?a("a-form-item",{attrs:{label:t.post.unit_gage,labelCol:t.labelCol,wrapperCol:t.wrapperCol,extra:"收费标准计费方式为单价*计量单位时选择的自定义计量单位，需填写自定义计量单位对应的数值"}},[a("a-col",{attrs:{span:18}},[a("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:t.post.custom_value,callback:function(e){t.$set(t.post,"custom_value",e)},expression:"post.custom_value"}})],1),a("a-col",{attrs:{span:6}})],1):t._e()],1)],1)],1)},o=[],s=(a("ac1f"),a("5319"),a("a0e0")),r=a("c1df"),n=a.n(r),l={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},dateFormat:"YYYY-MM",confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,is_show:!0,is_show1:!0,project_name:"",rule_name:"",post:{id:0,type:1,unit_gage:"楼道面积",order_add_time:"",custom_value:"",date_status:"",cycle:"",per_one_order:0},dateValue:null,date_status:"month",rule_info:[],bind_type:0,bind:0,item:[],positionId:[],pigcms_id:[],is_grapefruit_prepaid:0}},mounted:function(){},methods:{moment:n.a,selectYear:function(t,e){console.log("dateString",e);"month"==this.date_status&&n()(t).format(this.dateFormat),"year"==this.date_status&&n()(t).format(this.dateFormat)},onChange:function(t,e){var a=e,i=this.rule_info.charge_valid_time1;this.post.order_add_time=e,new Date(a.replace(/-/g,"/"))<new Date(i.replace(/-/g,"/"))&&this.$message.error("账单生效时间不能小于收费标准生效时间")},add:function(t,e,a,i){this.post={id:0,type:1,unit_gage:"楼道面积",order_add_time:"",custom_value:"",date_status:"",cycle:"",per_one_order:0},this.getConfigCustomization(),null!=e.unit_gage&&""!=e.unit_gage?(this.is_show=!0,this.post.unit_gage=e.unit_gage):this.is_show=!1,this.visible=!0,this.title="确定绑定",this.confirmLoading=!1,this.rule_info=e,this.pigcms_id=a,this.positionId=i,this.rule_name=e.charge_name,this.project_name=e.project_name,this.bind=t,console.log("rule_info",e),this.date_status="date",this.dateFormat="YYYY-MM-DD",1==e.bill_create_set?(this.post.date_status="按日生成",this.post.per_one_order=0):2==e.bill_create_set?this.post.date_status="按月生成":this.post.date_status="按年生成"},getConfigCustomization:function(){var t=this;this.request(s["a"].getConfigCustomization).then((function(e){e&&(e.is_grapefruit_prepaid&&1==e.is_grapefruit_prepaid?t.is_grapefruit_prepaid=e.is_grapefruit_prepaid:t.is_grapefruit_prepaid=0,0==t.is_grapefruit_prepaid&&(t.post.per_one_order=0))}))},handleSubmit:function(){var t=this;console.log("this.bind",this.bind);var e={};e.bind_type=this.bind,e.rule_id=this.rule_info.id,e.order_add_time=this.post.order_add_time,e.custom_value=this.post.custom_value,e.cycle=this.post.cycle,e.per_one_order=this.post.per_one_order,1==this.bind?(e.pigcms_id=this.pigcms_id,e.position_id=this.positionId,console.log("bindData",e)):(e.pigcms_arr=this.pigcms_id,console.log("bindData",e)),this.confirmLoading=!0,this.request(s["a"].addStandardBind,e).then((function(e){if(1e3==e.status&&e.msg)t.$message.error(e.msg),t.confirmLoading=!1;else if(e.err_count){var a="绑定失败"+e.err_count+"个";e.errMsgStr?a=a+"【错误："+e.errMsgStr+"】":e.errMsgArr&&e.errMsgArr[0]&&e.errMsgArr[0]["msg"]&&(a=a+"【错误："+e.errMsgArr[0]["msg"]+"】"),t.$message.warning(a),e.success_count?(t.$message.warning("绑定成功"+e.success_count+"个"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)):t.confirmLoading=!1}else t.$message.success("绑定成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)}))},handleCancel:function(){var t=this;this.visible=!1,this.confirmLoading=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},c=l,d=(a("80e6"),a("2877")),p=Object(d["a"])(c,i,o,!1,null,null,null);e["default"]=p.exports},ccc3:function(t,e,a){"use strict";a("7c13")}}]);