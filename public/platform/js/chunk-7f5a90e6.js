(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f5a90e6","chunk-0c0a8e7e"],{"2b23":function(e,t,i){"use strict";i("9a85")},"307f":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:950,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:function(t){return e.handleSubmit(e.bind_type)},cancel:e.handleCancel}},[i("span",{staticClass:"page_top"},[i("span",{staticClass:"notice"},[e._v(" 注意："),i("br"),e._v(" 1、在绑定车库时，默认选中车库内所有车位号数据"),i("br")])]),i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[e._l(e.index_row,(function(t,a){return e.loadingLayer&&"bind_room"==e.bind_type?i("div",{staticClass:"form_box"},[i("a-row",{staticStyle:{"margin-left":"1px"},attrs:{gutter:48}},[i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"250px"},attrs:{md:8,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("选择楼栋：")]),i("a-select",{staticStyle:{width:"170px"},attrs:{placeholder:"请选择楼栋"},on:{change:function(i){return e.singleChange(t.single_id,a)}},model:{value:t.single_id,callback:function(i){e.$set(t,"single_id",i)},expression:"item.single_id"}},[i("a-select-option",{attrs:{value:0}},[e._v(" 请选择楼栋 ")]),e._l(e.single,(function(t,a){return i("a-select-option",{key:a,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-right":"1px",width:"270px"},attrs:{md:8,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("对应单元：")]),i("a-select",{staticStyle:{width:"170px"},attrs:{placeholder:"请选择单元"},on:{change:function(i){return e.singleFloorChange(t.single_id,t.floor_id,a)}},model:{value:t.floor_id,callback:function(i){e.$set(t,"floor_id",i)},expression:"item.floor_id"}},[i("a-select-option",{attrs:{value:0}},[e._v(" 请选择单元 ")]),e._l(e.floor[t.single_id],(function(t,a){return i("a-select-option",{key:a,attrs:{value:t.floor_id}},[e._v(" "+e._s(t.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-right":"1px",width:"330px"},attrs:{md:9,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("对应楼层：")]),i("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择楼层",mode:"multiple"},model:{value:t.layer_id,callback:function(i){e.$set(t,"layer_id",i)},expression:"item.layer_id"}},e._l(e.layer[t.floor_id],(function(t,a){return i("a-select-option",{key:a,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a>0?i("a-col",{staticClass:"icon_1",staticStyle:{"padding-right":"1px","padding-left":"1px"},on:{click:function(t){return e.del_row(a)}}},[i("a-icon",{attrs:{type:"minus"}})],1):e._e()],1)],1):e._e()})),e._l(e.index_row,(function(t,a){return e.loadingLayer&&"bind_car"==e.bind_type?i("div",{staticClass:"form_box"},[i("a-row",{staticStyle:{"margin-left":"1px"},attrs:{gutter:48}},[i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"500px"},attrs:{md:8,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[e._v("选择车库：")]),i("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":"0",placeholder:"请选择车库"},model:{value:e.garage_ids[a],callback:function(t){e.$set(e.garage_ids,a,t)},expression:"garage_ids[index]"}},e._l(e.garage_list,(function(t,a){return i("a-select-option",{key:a,attrs:{value:t.garage_id}},[e._v(" "+e._s(t.garage_num)+" ")])})),1)],1),a>0?i("a-col",{staticClass:"icon_1",staticStyle:{"padding-right":"1px","padding-left":"1px"},on:{click:function(t){return e.del_row(a)}}},[i("a-icon",{attrs:{type:"minus"}})],1):e._e()],1)],1):e._e()})),i("div",{staticClass:"icon_1 margin_top_10",on:{click:e.add_row}},[i("a-icon",{attrs:{type:"plus"}})],1)],2),i("addBindInfo",{ref:"AddBindModel",on:{ok:e.bindOk}})],1)],1)},o=[],s=(i("a434"),i("a0e0")),r=i("b74f"),n="",l={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},index_row:[{id:0,single_id:0,floor_id:0,layer_id:[]}],single_id:0,layer_id:0,layer:[],single:[],confirmLoading:!1,form:this.$form.createForm(this),visible:!1,loadingLayer:!1,rule_id:0,rule_info:[],address:n,garage_list:[],bind_type:"",floor:[],floor_id:0,garage_ids:[]}},components:{addBindInfo:r["default"]},mounted:function(){this.getGarageList()},methods:{add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.title="确定绑定",this.visible=!0,this.loadingLayer=!0,this.layer=[],this.single=[],this.bind_type=t,this.index_row=[{id:0,single_id:0,floor_id:0,layer_id:[]}],this.confirmLoading=!1,this.rule_id=e,this.getSingle(),this.getRuleInfo()},add_row:function(){var e={id:0,single_id:0,floor_id:0,layer_id:[]};this.index_row.push(e)},getSingle:function(){var e=this;this.request(s["a"].getSingleListByVillage).then((function(t){console.log("resSingle",t),e.single=t}))},getRuleInfo:function(){var e=this;this.request(s["a"].getRuleInfo,{rule_id:this.rule_id}).then((function(t){e.rule_info=t,console.log("rule_info",t)}))},getGarageList:function(){var e=this;this.request(s["a"].garageList).then((function(t){console.log("garage_list",t),e.garage_list=t}))},del_row:function(e){console.log("index",e),this.index_row.splice(e,1),"bind_car"==this.bind_type&&(this.garage_ids[e]="")},singleChange:function(e,t){var i=this;if(console.log("Selected: ".concat(e)),this.index_row[t].layer_id=[],this.index_row[t].floor_id=0,e<1)return console.log("singleChange=============layer",this.layer),console.log("singleChange=============index_row",this.index_row),!1;this.loadingLayer=!1,this.request(s["a"].getFloorList,{pid:e}).then((function(t){i.floor[e]=t,console.log("floor1",i.floor),i.loadingLayer=!0,i.$forceUpdate()}))},singleFloorChange:function(e,t,i){var a=this;this.index_row[i].layer_id=[],this.loadingLayer=!1,this.floor_id=1*t,console.log("index_row",this.index_row,"floor_id",t),this.request(s["a"].getLayerSingleList,{pid:e,single_id:e,floor_id:t}).then((function(e){console.log("resLayer",e),a.layer[a.floor_id]=e,a.loadingLayer=!0}))},bindCar:function(){var e=this,t={};t.rule_id=this.rule_id,t.garage_id=this.garage_ids,this.request(s["a"].addBindAllPosition,t).then((function(t){e.$message.success("绑定成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.garage_ids=[],e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id,"1")}),1500)})),console.log(this.garage_ids)},addBind:function(){var e=this,t={bind_type:2};t.rule_id=this.rule_id,t.pigcms_arr=this.index_row,this.confirmLoading=!0,this.request(s["a"].addStandardBind,t).then((function(t){if(console.log("resx",t),1e3==t.status&&t.msg)e.$message.error(t.msg),e.confirmLoading=!1;else if(t.err_count){var i="绑定失败"+t.err_count+"个";t.errMsgStr?i=i+"【错误："+t.errMsgStr+"】":t.errMsgArr&&t.errMsgArr[0]&&t.errMsgArr[0]["msg"]&&(i=i+"【错误："+t.errMsgArr[0]["msg"]+"】"),e.$message.warning(i),t.success_count?(e.$message.warning("绑定成功"+t.success_count+"个"),setTimeout((function(){e.confirmLoading=!1,e.form=e.$form.createForm(e),e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id,"1")}),1500)):e.confirmLoading=!1}else{var a="绑定成功";t.msg&&(a=t.msg),e.$message.success(a),setTimeout((function(){e.confirmLoading=!1,e.form=e.$form.createForm(e),e.visible=!1,e.loading=!1,e.$emit("ok",e.rule_id,"1")}),1500)}}))},handleSubmit:function(e){if(console.log("index_row111",this.index_row),1==this.rule_info.is_show)this.$refs.AddBindModel.add(2,this.rule_info,this.index_row,[]);else{var t=this;this.$confirm({title:"是否确认绑定?",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){"bind_car"==e?t.bindCar():t.addBind()}})}},handleCancel:function(){var e=this;this.visible=!1,this.confirmLoading=!1,setTimeout((function(){e.form=e.$form.createForm(e)}),500)},bindOk:function(){this.form=this.$form.createForm(this),this.visible=!1,this.loading=!1,this.$emit("ok",this.rule_id,"1")}}},d=l,c=(i("b21f"),i("2b23"),i("0c7c")),_=Object(c["a"])(d,a,o,!1,null,"7e4b322c",null);t["default"]=_.exports},"5fbb":function(e,t,i){},"80e6":function(e,t,i){"use strict";i("ed5c")},"9a85":function(e,t,i){},b21f:function(e,t,i){"use strict";i("5fbb")},b74f:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:500,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{staticStyle:{"margin-bottom":"1px"},attrs:{label:"收费项",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[e._v(" "+e._s(e.project_name)+" ")])],1),i("a-form-item",{staticStyle:{"margin-bottom":"1px"},attrs:{label:"收费标准",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[e._v(" "+e._s(e.rule_name)+" ")])],1),i("a-form-item",{staticStyle:{"margin-bottom":"8px"},attrs:{label:"账单生成周期模式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:18}},[e._v(" "+e._s(e.post.date_status)+" ")])],1),e.is_grapefruit_prepaid&&this.rule_info.bill_create_set>1?i("a-form-item",{attrs:{label:"账单合并生成",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为是。选择否将结合收费周期值来生成多笔按1个月计费的订单,请谨慎操作!"}},[i("a-col",{attrs:{span:18}},[i("a-radio-group",{attrs:{name:"radioGroup","default-value":0},model:{value:e.post.per_one_order,callback:function(t){e.$set(e.post,"per_one_order",t)},expression:"post.per_one_order"}},[i("a-radio",{attrs:{value:0}},[e._v("是")]),i("a-radio",{attrs:{value:1}},[e._v("否")])],1)],1)],1):e._e(),i("a-form-item",{attrs:{label:"收费周期",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"不填默认为1"}},[i("a-col",{attrs:{span:18}},[i("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入收费周期时长"},model:{value:e.post.cycle,callback:function(t){e.$set(e.post,"cycle",t)},expression:"post.cycle"}})],1)],1),i("a-form-item",{attrs:{label:"账单开始生成时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"不填默认下一缴费日生成应收账单"}},[i("a-col",{attrs:{span:18}},[e.is_show1&&e.post.order_add_time?i("a-date-picker",{attrs:{mode:e.date_status,format:e.dateFormat,placeholder:"请选择时间",value:e.moment(e.post.order_add_time,"YYYY-MM-DD")},on:{change:e.onChange,panelChange:e.selectYear}}):e._e(),e.is_show1&&!e.post.order_add_time?i("a-date-picker",{attrs:{mode:e.date_status,format:e.dateFormat,placeholder:"请选择时间"},on:{change:e.onChange,panelChange:e.selectYear}}):e._e()],1)],1),e.is_show?i("a-form-item",{attrs:{label:e.post.unit_gage,labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"收费标准计费方式为单价*计量单位时选择的自定义计量单位，需填写自定义计量单位对应的数值"}},[i("a-col",{attrs:{span:18}},[i("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.post.custom_value,callback:function(t){e.$set(e.post,"custom_value",t)},expression:"post.custom_value"}})],1),i("a-col",{attrs:{span:6}})],1):e._e()],1)],1)],1)},o=[],s=(i("ac1f"),i("5319"),i("a0e0")),r=i("c1df"),n=i.n(r),l={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},dateFormat:"YYYY-MM",confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,is_show:!0,is_show1:!0,project_name:"",rule_name:"",post:{id:0,type:1,unit_gage:"楼道面积",order_add_time:"",custom_value:"",date_status:"",cycle:"",per_one_order:0},dateValue:null,date_status:"month",rule_info:[],bind_type:0,bind:0,item:[],positionId:[],pigcms_id:[],is_grapefruit_prepaid:0}},mounted:function(){},methods:{moment:n.a,selectYear:function(e,t){console.log("dateString",t);"month"==this.date_status&&n()(e).format(this.dateFormat),"year"==this.date_status&&n()(e).format(this.dateFormat)},onChange:function(e,t){var i=t,a=this.rule_info.charge_valid_time1;this.post.order_add_time=t,new Date(i.replace(/-/g,"/"))<new Date(a.replace(/-/g,"/"))&&this.$message.error("账单生效时间不能小于收费标准生效时间")},add:function(e,t,i,a){this.post={id:0,type:1,unit_gage:"楼道面积",order_add_time:"",custom_value:"",date_status:"",cycle:"",per_one_order:0},this.getConfigCustomization(),null!=t.unit_gage&&""!=t.unit_gage?(this.is_show=!0,this.post.unit_gage=t.unit_gage):this.is_show=!1,this.visible=!0,this.title="确定绑定",this.confirmLoading=!1,this.rule_info=t,this.pigcms_id=i,this.positionId=a,this.rule_name=t.charge_name,this.project_name=t.project_name,this.bind=e,console.log("rule_info",t),this.date_status="date",this.dateFormat="YYYY-MM-DD",1==t.bill_create_set?(this.post.date_status="按日生成",this.post.per_one_order=0):2==t.bill_create_set?this.post.date_status="按月生成":this.post.date_status="按年生成"},getConfigCustomization:function(){var e=this;this.request(s["a"].getConfigCustomization).then((function(t){t&&(t.is_grapefruit_prepaid&&1==t.is_grapefruit_prepaid?e.is_grapefruit_prepaid=t.is_grapefruit_prepaid:e.is_grapefruit_prepaid=0,0==e.is_grapefruit_prepaid&&(e.post.per_one_order=0))}))},handleSubmit:function(){var e=this;console.log("this.bind",this.bind);var t={};t.bind_type=this.bind,t.rule_id=this.rule_info.id,t.order_add_time=this.post.order_add_time,t.custom_value=this.post.custom_value,t.cycle=this.post.cycle,t.per_one_order=this.post.per_one_order,1==this.bind?(t.pigcms_id=this.pigcms_id,t.position_id=this.positionId,console.log("bindData",t)):(t.pigcms_arr=this.pigcms_id,console.log("bindData",t)),this.confirmLoading=!0,this.request(s["a"].addStandardBind,t).then((function(t){if(1e3==t.status&&t.msg)e.$message.error(t.msg),e.confirmLoading=!1;else if(t.err_count){var i="绑定失败"+t.err_count+"个";t.errMsgStr?i=i+"【错误："+t.errMsgStr+"】":t.errMsgArr&&t.errMsgArr[0]&&t.errMsgArr[0]["msg"]&&(i=i+"【错误："+t.errMsgArr[0]["msg"]+"】"),e.$message.warning(i),t.success_count?(e.$message.warning("绑定成功"+t.success_count+"个"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)):e.confirmLoading=!1}else e.$message.success("绑定成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)}))},handleCancel:function(){var e=this;this.visible=!1,this.confirmLoading=!1,setTimeout((function(){e.post.id=0,e.form=e.$form.createForm(e)}),500)}}},d=l,c=(i("80e6"),i("0c7c")),_=Object(c["a"])(d,a,o,!1,null,null,null);t["default"]=_.exports},ed5c:function(e,t,i){}}]);