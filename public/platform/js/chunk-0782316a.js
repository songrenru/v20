(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0782316a"],{"33ef":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{title:"编辑",width:900,visible:e.visible},on:{close:e.handleSubCancel}},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.persentForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("div",{staticClass:"add_persent"},[r("div",{staticClass:"label_title"},[e._v("车辆信息")]),r("div",{staticClass:"form_content"},[r("a-form-model-item",{staticClass:"form_item",attrs:{label:"订单编号",prop:"order_id"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入订单编号"},model:{value:e.persentForm.order_id,callback:function(t){e.$set(e.persentForm,"order_id",t)},expression:"persentForm.order_id"}})],1),r("a-form-model-item",{staticClass:"form_item",attrs:{label:"车场",prop:"park_name"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入车场"},model:{value:e.persentForm.park_name,callback:function(t){e.$set(e.persentForm,"park_name",t)},expression:"persentForm.park_name"}})],1),r("a-form-model-item",{staticClass:"form_item",attrs:{label:"车牌号",prop:"car_number"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入车牌号"},model:{value:e.persentForm.car_number,callback:function(t){e.$set(e.persentForm,"car_number",t)},expression:"persentForm.car_number"}})],1),r("a-form-model-item",{staticClass:"form_item",attrs:{label:"车辆类型",prop:"car_type"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入车辆类型"},model:{value:e.persentForm.car_type,callback:function(t){e.$set(e.persentForm,"car_type",t)},expression:"persentForm.car_type"}})],1),r("a-form-model-item",{staticClass:"form_item",attrs:{label:"车主姓名",prop:"user_name"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入车主姓名"},model:{value:e.persentForm.user_name,callback:function(t){e.$set(e.persentForm,"user_name",t)},expression:"persentForm.user_name"}})],1),r("a-form-model-item",{staticClass:"form_item",attrs:{label:"车主手机号",prop:"user_phone"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入车主手机号"},model:{value:e.persentForm.user_phone,callback:function(t){e.$set(e.persentForm,"user_phone",t)},expression:"persentForm.user_phone"}})],1),r("a-form-model-item",{staticClass:"form_item",attrs:{label:"出场通道",prop:"channel_name"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入出场通道"},model:{value:e.persentForm.channel_name,callback:function(t){e.$set(e.persentForm,"channel_name",t)},expression:"persentForm.channel_name"}})],1),r("a-form-model-item",{staticClass:"form_item",attrs:{label:"出场时间",prop:"accessTime"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入出场时间"},model:{value:e.persentForm.accessTime,callback:function(t){e.$set(e.persentForm,"accessTime",t)},expression:"persentForm.accessTime"}})],1)],1),r("div",{staticClass:"form_content_2"},[r("a-form-model-item",{attrs:{label:"标签",prop:"label_name"}},[r("a-transfer",{staticClass:"form_item_2",attrs:{locale:{itemUnit:"【已选】",itemsUnit:"【全部】",notFoundContent:"列表为空",searchPlaceholder:"请输入搜索内容"},"show-search":"",rowKey:function(e){return e.key},"data-source":e.labelList,"list-style":{width:"210px",height:"270px"},render:e.renderItem,"show-select-all":!0,"target-keys":e.targetKeys},on:{change:e.handleTransferChange}})],1)],1)]),r("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[r("a-button",{style:{marginRight:"8px"},on:{click:e.handleSubCancel}},[e._v("取消")]),r("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit()}}},[e._v("提交")])],1)])],1)},s=[],n=(r("5cad"),r("7b2d")),l=(r("d81d"),r("a0e0")),o=(r("8bbf"),{props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},present_id:{type:String,default:""}},watch:{present_id:{immediate:!0,handler:function(e){this.visible&&(this.getPresentInfo(),this.getLabelList())}}},components:{"a-transfer":n["a"]},data:function(){return{labelCol:{span:6},wrapperCol:{span:14},persentForm:{name:""},rules:{name:[{required:!0,message:"请输入车场名称",trigger:"blur"}]},targetKeys:[],labelList:[]}},methods:{clearForm:function(){this.persentForm={},this.targetKeys=[]},handleSubmit:function(e){var t=this,r=this;this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;r.request(l["a"].editOutParkInfo,{record_id:r.present_id,label_id:r.targetKeys}).then((function(e){r.$message.success("编辑标签成功！"),t.$emit("closePersent",!0),t.clearForm()}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.$emit("closePersent",!1),this.clearForm()},handleSelectChange:function(e){console.log("selected ".concat(e))},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},getPresentInfo:function(){var e=this;e.present_id&&e.request(l["a"].getOutParkInfo,{record_id:e.present_id}).then((function(t){e.persentForm=t,e.persentForm.record_id=t.record_id,t.label_id&&t.label_id.length>0&&(e.targetKeys=t.label_id)}))},getLabelList:function(){var e=this;e.request(l["a"].getParkLabelList,{}).then((function(t){e.labelList=[],t.map((function(t){e.labelList.push({key:t.id+"",title:t.label_name})}))}))},renderItem:function(e){var t=this.$createElement,r=t("span",{class:"custom-item"},[e.title]);return{label:r,value:e.title}},handleTransferChange:function(e,t,r){var a=this;this.targetKeys=e;var s="";this.targetKeys.map((function(e,t){t<a.targetKeys.length-1?s+=e+",":s+=e})),this.persentForm.passage_label=s}}}),i=o,m=(r("e32f"),r("0c7c")),c=Object(m["a"])(i,a,s,!1,null,"999b381e",null);t["default"]=c.exports},"63ff":function(e,t,r){},e32f:function(e,t,r){"use strict";r("63ff")}}]);