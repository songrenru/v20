(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e9f1418"],{"020d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"编辑",width:1080,visible:t.visible,maskClosable:!1,placement:"right"},on:{close:t.handleCancel}},[a("a-card",[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form-model",{ref:"ruleForm",staticClass:"div_box",attrs:{model:t.post,labelCol:t.labelCol,rules:t.rules}},[a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("a-form-model-item",{staticClass:"form_item",attrs:{label:"物业编号",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入物业编号",autocomplete:"off",name:"property_number",disabled:"disabled"},model:{value:t.post.property_number,callback:function(e){t.$set(t.post,"property_number",e)},expression:"post.property_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"楼栋名称",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入单元楼号",autocomplete:"off",name:"single_name",disabled:"disabled"},model:{value:t.post.single_name,callback:function(e){t.$set(t.post,"single_name",e)},expression:"post.single_name"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"单元名称",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入单元名称",name:"floor_name",disabled:"disabled"},model:{value:t.post.floor_name,callback:function(e){t.$set(t.post,"floor_name",e)},expression:"post.floor_name"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"楼层名称",labelCol:t.labelCol,required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入楼层名称",name:"layer_name",disabled:"disabled"},model:{value:t.post.layer_name,callback:function(e){t.$set(t.post,"layer_name",e)},expression:"post.layer_name"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"合同时间",labelCol:t.labelCol,required:!0}},[t.post.contract_time_start_str?a("a-date-picker",{staticStyle:{width:"150px"},attrs:{"default-value":t.moment(t.post.contract_time_start_str,t.dateFormat)},model:{value:t.post.contract_time_start_str,callback:function(e){t.$set(t.post,"contract_time_start_str",e)},expression:"post.contract_time_start_str"}}):a("a-date-picker",{staticStyle:{width:"150px"},model:{value:t.post.contract_time_start_str,callback:function(e){t.$set(t.post,"contract_time_start_str",e)},expression:"post.contract_time_start_str"}}),t._v(" --到-- "),t.post.contract_time_end_str?a("a-date-picker",{staticStyle:{width:"150px"},attrs:{"default-value":t.moment(t.post.contract_time_end_str,t.dateFormat),disabled:"disabled"},model:{value:t.post.contract_time_end_str,callback:function(e){t.$set(t.post,"contract_time_end_str",e)},expression:"post.contract_time_end_str"}}):a("a-date-picker",{staticStyle:{width:"150px"},model:{value:t.post.contract_time_end_str,callback:function(e){t.$set(t.post,"contract_time_end_str",e)},expression:"post.contract_time_end_str"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间号",labelCol:t.labelCol,prop:"room",required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入房间号",name:"room"},model:{value:t.post.room,callback:function(e){t.$set(t.post,"room",e)},expression:"post.room"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间编号",labelCol:t.labelCol,extra:"必填项（仅限1-9999不重复的数字）",prop:"room_number",required:!0}},[a("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入房间编号",name:"room_number"},model:{value:t.post.room_number,callback:function(e){t.$set(t.post,"room_number",e)},expression:"post.room_number"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋面积",labelCol:t.labelCol,prop:"housesize",required:!0}},[a("a-input-number",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入房屋面积",min:0,step:.01,precision:2,name:"housesize"},model:{value:t.post.housesize,callback:function(e){t.$set(t.post,"housesize",e)},expression:"post.housesize"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房屋类型",labelCol:t.labelCol}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择房屋类型","default-value":t.post.house_type},model:{value:t.post.house_type,callback:function(e){t.$set(t.post,"house_type",e)},expression:"post.house_type"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("无")]),a("a-select-option",{attrs:{value:"1"}},[t._v("住宅")]),a("a-select-option",{attrs:{value:"2"}},[t._v("商铺")]),a("a-select-option",{attrs:{value:"3"}},[t._v("办公")])],1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"房间户型",labelCol:t.labelCol}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择房间户型","default-value":t.post.room_type},model:{value:t.post.room_type,callback:function(e){t.$set(t.post,"room_type",e)},expression:"post.room_type"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("无")]),t._l(t.room_types,(function(e,s){return a("a-select-option",{attrs:{value:e.type_id}},[t._v(" "+t._s(e.type_name)+" ")])}))],2)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"使用状态",labelCol:t.labelCol,extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择使用状态","default-value":t.post.user_status},model:{value:t.post.user_status,callback:function(e){t.$set(t.post,"user_status",e)},expression:"post.user_status"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("无")]),a("a-select-option",{attrs:{value:"1"}},[t._v("业主入住")]),a("a-select-option",{attrs:{value:"2"}},[t._v("未入住")]),a("a-select-option",{attrs:{value:"3"}},[t._v("租客入住")])],1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"出售状态",labelCol:t.labelCol,extra:"仅供标记使用，不会自动变化的，需要自行编辑维护"}},[a("a-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择出售状态","default-value":t.post.sell_status},model:{value:t.post.sell_status,callback:function(e){t.$set(t.post,"sell_status",e)},expression:"post.sell_status"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("正常居住")]),a("a-select-option",{attrs:{value:"2"}},[t._v("出售中")]),a("a-select-option",{attrs:{value:"3"}},[t._v("出租中")])],1)],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"排序",labelCol:t.labelCol,extra:"数字越大越靠前"}},[a("a-input-number",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入排序值",name:"sort",min:0},model:{value:t.post.sort,callback:function(e){t.$set(t.post,"sort",e)},expression:"post.sort"}})],1),a("a-form-model-item",{staticClass:"form_item",attrs:{label:"状态",labelCol:t.labelCol}},[a("a-radio-group",{attrs:{"default-value":1*t.post.status>0?"1":"0"},on:{change:t.statusChange}},[a("a-radio",{attrs:{value:"1"}},[t._v("开启")]),a("a-radio",{attrs:{value:"0"}},[t._v("关闭")])],1)],1)],1)])],1)],1),a("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[a("a-button",{staticStyle:{"margin-top":"20px","margin-right":"15px"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.handleSubmit()}}},[t._v("保存数据")]),a("a-button",{on:{click:function(e){return t.handleCancel()}}},[t._v(" 关闭当前页 ")])],1)],1)},o=[],l=(a("7d24"),a("dfae")),r=(a("ac1f"),a("841c"),a("a0e0")),i=a("c1df"),n=a.n(i),c=null,m=[],p=[],u={name:"houseWorkerEdit",filters:{},components:{"a-collapse":l["a"],"a-collapse-panel":l["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:4}},form:this.$form.createForm(this),visible:!1,loading:!1,data:p,columns:m,dateFormat:"YYYY-MM-DD",rules:{room:[{required:!0,message:"请输入房间号",trigger:"blur"}],room_number:[{required:!0,message:"请输入房间编号",trigger:"blur"}],housesize:[{required:!0,message:"请输入房屋面积",trigger:"blur"}]},post:{property_number:"",single_name:"",floor_name:"",layer_name:"",contract_time_start_str:"",contract_time_end_str:"",room:"",room_number:"",housesize:"",house_type:"0",room_type:"0",user_status:"0",sell_status:"1",sort:0,status:"1"},room_types:[],record:{},pigcms_id:0,visible_img:!1,confirmLoading:!1}},activated:function(){},methods:{moment:n.a,edit:function(t){this.record=t,this.pigcms_id=this.record.pigcms_id,this.visible=!0,this.getRoomVacancyDetail()},getRoomVacancyDetail:function(){var t=this,e={};e.pigcms_id=this.pigcms_id,this.request(r["a"].getUnitRentalRoomDetail,e).then((function(e){t.post=e.roominfo,t.room_types=e.room_types}))},statusChange:function(t){console.log(t),this.post.status=t.target.value},handleSubmit:function(){var t=this;return!this.post.room||this.post.room.length<1?(this.$message.error("请输入房间号!"),!1):!this.post.room_number||this.post.room_number.length<1?(this.$message.error("请输入房间编号!"),!1):!this.post.housesize||this.post.housesize.length<1?(this.$message.error("请输入房屋面积!"),!1):(this.post.pigcms_id=this.pigcms_id,this.loading=!0,void this.request(r["a"].saveUnitRentalRoomEdit,this.post).then((function(e){t.loading=!1,t.$message.success("保存成功!"),setTimeout((function(){t.handleCancel(),t.$emit("ok")}),1500)})).catch((function(e){t.loading=!1})))},handleCancel:function(){var t=this;this.visible=!1,this.record={},this.pigcms_id=0,this.post={property_number:"",single_name:"",floor_name:"",layer_name:"",contract_time_start_str:"",contract_time_end_str:"",room:"",room_number:"",housesize:"",house_type:"0",room_type:"0",user_status:"0",sell_status:"1",sort:0,status:"1"},setTimeout((function(){t.form=t.$form.createForm(t)}),500)},date_moment:function(t,e){return t?n()(t,e):""},table_change:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current)},dateOnChange:function(t,e){this.search.date=e,this.search.begin_time=e["0"],this.search.end_time=e["1"]},handleImgCancel:function(){this.visible_img=!1,this.srcUrl="",clearInterval(c),this.$emit("ok")}}},d=u,_=(a("c71d"),a("0c7c")),h=Object(_["a"])(d,s,o,!1,null,"40ecc1f6",null);e["default"]=h.exports},"1e6d":function(t,e,a){},c71d:function(t,e,a){"use strict";a("1e6d")}}]);