(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13f63013","chunk-18dcc24e"],{"2eea":function(t,e,i){},"307f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:600,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("span",{staticClass:"page_top"},[i("span",{staticClass:"notice"},[t._v(" 注意："),i("br"),t._v(" 1、在绑定楼栋的对应楼层时，不选择楼层，则默认是选择该楼栋下的所有楼层"),i("br"),t._v(" 2、对应楼层展示的“单元-楼层”，例如 1-3 表示 1单元3层"),i("br"),t._v(" 3、每次批量绑定只能最多添加5条数据操作 ")])]),i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[t._l(t.index_row,(function(e,s){return t.loadingLayer?i("div",{staticClass:"form_box"},[i("a-row",{staticStyle:{"margin-left":"1px"},attrs:{gutter:48}},[i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"200px"},attrs:{md:8,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("选择楼栋：")]),i("a-select",{staticStyle:{width:"117px"},attrs:{placeholder:"请选择楼栋"},on:{change:function(i){return t.singleChange(e.single_id,s)}},model:{value:e.single_id,callback:function(i){t.$set(e,"single_id",i)},expression:"item.single_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 请选择楼栋 ")]),t._l(t.single,(function(e,s){return i("a-select-option",{key:s,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{width:"250px","padding-right":"1px"},attrs:{md:8,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("对应楼层：")]),i("a-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择楼层",mode:"multiple"},model:{value:e.layer_id,callback:function(i){t.$set(e,"layer_id",i)},expression:"item.layer_id"}},t._l(t.layer[e.single_id],(function(e,s){return i("a-select-option",{key:s,attrs:{value:e.id}},[t._v(" "+t._s(e.floor_name)+"-"+t._s(e.name)+" ")])})),1)],1),1!=t.index_row.length?i("a-col",{staticClass:"icon_1",staticStyle:{"padding-right":"1px","padding-left":"1px"},on:{click:function(e){return t.del_row(s)}}},[i("a-icon",{attrs:{type:"minus"}})],1):t._e()],1)],1):t._e()})),t.index_row.length<5?i("div",{staticClass:"icon_1 margin_top_10",on:{click:t.add_row}},[i("a-icon",{attrs:{type:"plus"}})],1):t._e()],2),i("addBindInfo",{ref:"AddBindModel",on:{ok:t.bindOk}})],1)],1)},n=[],a=(i("a434"),i("a0e0")),o=i("b74f"),l="",r={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},index_row:[{id:0}],single_id:0,layer_id:0,layer:[],single:[],confirmLoading:!1,form:this.$form.createForm(this),visible:!1,loadingLayer:!1,rule_id:0,rule_info:[],address:l}},components:{addBindInfo:o["default"]},mounted:function(){},methods:{add:function(t){this.title="确定绑定",this.visible=!0,this.loadingLayer=!0,this.layer=[],this.single=[],this.index_row=[{id:0}],this.confirmLoading=!1,this.rule_id=t,this.getSingle(),this.getRuleInfo()},add_row:function(){if(this.index_row.length>=5)return this.$message.error("最多每次添加5条数据操作"),!1;var t={id:0};this.index_row.push(t)},getSingle:function(){var t=this;this.request(a["a"].getSingleListByVillage).then((function(e){console.log("resSingle",e),t.single=e}))},getRuleInfo:function(){var t=this;this.request(a["a"].getRuleInfo,{rule_id:this.rule_id}).then((function(e){t.rule_info=e,console.log("rule_info",e)}))},del_row:function(t){console.log("index",t),this.index_row.splice(t,1)},singleChange:function(t,e){var i=this;if(console.log("Selected: ".concat(t)),console.log("Selected: ".concat(e)),delete this.index_row[e].layer_id,t<1)return console.log("singleChange=============layer",this.layer),console.log("singleChange=============index_row",this.index_row),!1;this.loadingLayer=!1,this.request(a["a"].getLayerSingleList,{pid:t}).then((function(e){console.log("resSingle",e),i.layer[t]=e,i.loadingLayer=!0,console.log("singleChange======request=======layerq",i.layer),console.log("singleChange=======request======index_row",i.index_row)}))},addBind:function(){var t=this,e={bind_type:2};e.rule_id=this.rule_id,e.pigcms_arr=this.index_row,this.confirmLoading=!0,this.request(a["a"].addStandardBind,e).then((function(e){console.log("resx",e),1e3==e.status&&e.msg?(t.$message.error(e.msg),t.confirmLoading=!1):(t.$message.success("绑定成功"),setTimeout((function(){t.confirmLoading=!1,t.form=t.$form.createForm(t),t.visible=!1,t.loading=!1,t.$emit("ok",t.rule_id,"1")}),1500))}))},handleSubmit:function(){if(console.log("index_row111",this.index_row),1==this.rule_info.is_show)this.$refs.AddBindModel.add(2,this.rule_info,this.index_row,[]);else{var t=this;this.$confirm({title:"是否确认绑定?",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){t.confirmLoading=!0,t.addBind()}})}},handleCancel:function(){var t=this;this.visible=!1,this.confirmLoading=!1,setTimeout((function(){t.form=t.$form.createForm(t)}),500)},bindOk:function(){this.form=this.$form.createForm(this),this.visible=!1,this.loading=!1,this.$emit("ok",this.rule_id,"1")}}},d=r,c=(i("3d40"),i("fb82"),i("2877")),u=Object(c["a"])(d,s,n,!1,null,"4c59af76",null);e["default"]=u.exports},"3d40":function(t,e,i){"use strict";i("b21c")},"66bc":function(t,e,i){},a864:function(t,e,i){"use strict";i("66bc")},b21c:function(t,e,i){},b74f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"账单生成周期模式",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-col",{attrs:{span:18}},[t._v(" "+t._s(t.post.date_status)+" ")])],1),i("a-form-item",{attrs:{label:"账单开始生成时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol,extra:"不填默认下一缴费日生成应收账单"}},[i("a-col",{attrs:{span:18}},[t.is_show1&&t.post.order_add_time?i("a-date-picker",{attrs:{mode:t.date_status,format:t.dateFormat,placeholder:"请选择时间",value:t.moment(t.post.order_add_time,"YYYY-MM-DD")},on:{change:t.onChange,panelChange:t.selectYear}}):t._e(),t.is_show1&&!t.post.order_add_time?i("a-date-picker",{attrs:{mode:t.date_status,format:t.dateFormat,placeholder:"请选择时间"},on:{change:t.onChange,panelChange:t.selectYear}}):t._e()],1)],1),t.is_show?i("a-form-item",{attrs:{label:t.post.unit_gage,labelCol:t.labelCol,wrapperCol:t.wrapperCol,extra:"收费标准计费方式为单价*计量单位时选择的自定义计量单位，需填写自定义计量单位对应的数值"}},[i("a-col",{attrs:{span:18}},[i("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:t.post.custom_value,callback:function(e){t.$set(t.post,"custom_value",e)},expression:"post.custom_value"}})],1),i("a-col",{attrs:{span:6}})],1):t._e()],1)],1)],1)},n=[],a=(i("ac1f"),i("5319"),i("a0e0")),o=i("c1df"),l=i.n(o),r={components:{},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},dateFormat:"YYYY-MM",confirmLoading:!1,form:this.$form.createForm(this),sensitive_info:[],visible:!1,is_show:!0,is_show1:!0,post:{id:0,type:1,unit_gage:"楼道面积",order_add_time:"",custom_value:"",date_status:""},dateValue:null,date_status:"month",rule_info:[],bind_type:0,bind:0,item:[],positionId:[],pigcms_id:[]}},mounted:function(){},methods:{moment:l.a,selectYear:function(t,e){console.log("dateString",e);"month"==this.date_status&&l()(t).format(this.dateFormat),"year"==this.date_status&&l()(t).format(this.dateFormat)},onChange:function(t,e){var i=e,s=this.rule_info.charge_valid_time1;this.post.order_add_time=e,new Date(i.replace(/-/g,"/"))<new Date(s.replace(/-/g,"/"))&&this.$message.error("账单生效时间不能小于收费标准生效时间")},add:function(t,e,i,s){this.post={id:0,type:1,unit_gage:"楼道面积",order_add_time:"",custom_value:"",date_status:""},null!=e.unit_gage&&""!=e.unit_gage?(this.is_show=!0,this.post.unit_gage=e.unit_gage):this.is_show=!1,this.visible=!0,this.title="确定绑定",this.confirmLoading=!1,this.rule_info=e,this.pigcms_id=i,this.positionId=s,this.bind=t,console.log("rule_info",e),this.date_status="date",this.dateFormat="YYYY-MM-DD",1==e.bill_create_set?this.post.date_status="按日生成":2==e.bill_create_set?this.post.date_status="按月生成":this.post.date_status="按年生成"},handleSubmit:function(){var t=this;console.log("this.bind",this.bind);var e={};e.bind_type=this.bind,e.rule_id=this.rule_info.id,e.order_add_time=this.post.order_add_time,e.custom_value=this.post.custom_value,1==this.bind?(e.pigcms_id=this.pigcms_id,e.position_id=this.positionId,console.log("bindData",e)):(e.pigcms_arr=this.pigcms_id,console.log("bindData",e)),this.confirmLoading=!0,this.request(a["a"].addStandardBind,e).then((function(e){1e3==e.status&&e.msg?(t.$message.error(e.msg),t.confirmLoading=!1):(t.$message.success("绑定成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500))}))},handleCancel:function(){var t=this;this.visible=!1,this.confirmLoading=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)}}},d=r,c=(i("a864"),i("2877")),u=Object(c["a"])(d,s,n,!1,null,null,null);e["default"]=u.exports},fb82:function(t,e,i){"use strict";i("2eea")}}]);