(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b21b872"],{"03cf6":function(t,a,s){},"6d5c":function(t,a,s){"use strict";s("03cf6")},e04c:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"background-color":"white","padding-left":"10px"}},[s("a-tabs",{attrs:{active:t.active},on:{change:t.callback}},[s("a-tab-pane",{key:"1",attrs:{tab:"显屏"}},[s("span",{staticClass:"page_top"},[t._v(" 进/出场显屏变量填写规则(可对应复制到显屏设置)"),s("br"),t._v(" 例，进场后台显示设置：欢迎光临{车牌号}；显示效果，欢迎光临皖A12345。"),s("br"),t._v(" 例，出场后台显示设置：您的车辆{车牌号}在停车场内停留{停留时长}需缴费{停车费}；显示效果，您的车辆皖A12345在停车场内停留2小时15分钟需缴费30元。"),s("br"),s("span",{staticStyle:{color:"red"}},[t._v(" 备注：可用变量有{车牌号、停留时长、停车费、停车期时间} ")])]),s("div",{staticStyle:{width:"682px"}},[s("a-card",[s("span",{staticClass:"ant-card-head-title",staticStyle:{"margin-bottom":"30px","font-size":"16px","font-weight":"600"}},[t._v("临时车显示配置")]),s("span",{staticStyle:{"margin-right":"150px"}},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第一行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_1,callback:function(a){t.$set(t.post,"temp_line_1",a)},expression:"post.temp_line_1"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第二行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_2,callback:function(a){t.$set(t.post,"temp_line_2",a)},expression:"post.temp_line_2"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第三行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_3,callback:function(a){t.$set(t.post,"temp_line_3",a)},expression:"post.temp_line_3"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第四行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_4,callback:function(a){t.$set(t.post,"temp_line_4",a)},expression:"post.temp_line_4"}})],1)]),s("a-card",{staticStyle:{"margin-top":"10px"}},[s("span",{staticClass:"ant-card-head-title",staticStyle:{"margin-bottom":"30px","font-size":"16px","font-weight":"600"}},[t._v("月租车显示配置")]),s("span",{staticStyle:{"margin-right":"150px"}},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第一行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.mouth_line_1,callback:function(a){t.$set(t.post,"mouth_line_1",a)},expression:"post.mouth_line_1"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第二行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.mouth_line_2,callback:function(a){t.$set(t.post,"mouth_line_2",a)},expression:"post.mouth_line_2"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第三行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.mouth_line_3,callback:function(a){t.$set(t.post,"mouth_line_3",a)},expression:"post.mouth_line_3"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第四行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.mouth_line_4,callback:function(a){t.$set(t.post,"mouth_line_4",a)},expression:"post.mouth_line_4"}})],1)])],1),s("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[s("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.save()}}},[t._v("保存")])],1)]),s("a-tab-pane",{key:"2",attrs:{tab:"语音","force-render":""}},[s("span",{staticClass:"page_top"},[t._v(" 1. 语言播放功能受设备限制，只能下拉选择，不能自定义内容；"),s("br"),t._v(" 2. 选中的内容跟播放的内容会有部分差有，请以实际播放为准。"),s("br")]),s("div",{staticStyle:{width:"682px"}},[s("a-card",{staticStyle:{"margin-top":"20px"}},[s("span",{staticClass:"ant-card-head-title",staticStyle:{"margin-bottom":"30px","font-size":"16px","font-weight":"600"}},[t._v("临时车语音配置")]),s("span",{staticStyle:{"margin-right":"150px"}},[s("label",{staticClass:"ant-card-span1_park"},[t._v("配置内容:")]),s("a-select",{staticStyle:{width:"300px","margin-bottom":"50px"},attrs:{placeholder:"请选择临时车语音播报内容","default-value":"0"},model:{value:t.post.temp_line_11,callback:function(a){t.$set(t.post,"temp_line_11",a)},expression:"post.temp_line_11"}},[s("a-select-option",{attrs:{value:"0"}},[t._v("请选择临时车语音播报内容")]),t._l(t.temp_list,(function(a,e){return s("a-select-option",{key:e,attrs:{value:a.key}},[t._v(" "+t._s(a.txt)+" ")])}))],2)],1)]),s("a-card",{staticStyle:{"margin-top":"20px"}},[s("span",{staticClass:"ant-card-head-title",staticStyle:{"margin-bottom":"30px","font-size":"16px","font-weight":"600"}},[t._v("月租车语音配置")]),s("span",{staticStyle:{"margin-right":"150px"}},[s("label",{staticClass:"ant-card-span1_park"},[t._v("配置内容:")]),s("a-select",{staticStyle:{width:"300px","margin-bottom":"50px"},attrs:{placeholder:"请选择月租车语音播报内容"},model:{value:t.post.mouth_line_11,callback:function(a){t.$set(t.post,"mouth_line_11",a)},expression:"post.mouth_line_11"}},[s("a-select-option",{attrs:{value:"0"}},[t._v("请选择月租车语音播报内容")]),t._l(t.mouth_list,(function(a,e){return s("a-select-option",{key:e,attrs:{value:a.key}},[t._v(" "+t._s(a.txt)+" ")])}))],2)],1)])],1),s("div",{staticStyle:{"text-align":"center","margin-top":"80px"}},[s("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.submit1()}}},[t._v("保存")])],1)])],1)],1)},i=[],n=s("a0e0"),l={name:"showScreenSet",data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},mouth_list:[],temp_list:[],title:"绑定",key:1,active:1,passage_id:0,form:this.$form.createForm(this),visible:!1,loading:!1,post:{temp_line_11:0,mouth_line_11:0,temp_line_1:"",temp_line_2:"",temp_line_3:"",temp_line_4:"",mouth_line_1:"",mouth_line_2:"",mouth_line_3:"",mouth_line_4:""}}},mounted:function(){this.title="绑定",this.loading=!0,this.visible=!0,this.passage_id=this.$route.query.id,console.log("dfdsfg",this.passage_id),this.getShowVoice()},methods:{add:function(t){this.title="绑定",this.loading=!0,this.visible=!0,this.passage_id=t,console.log("dfdsfg",this.passage_id),this.getShowVoice()},callback:function(t){this.key=t,console.log(t),this.getShowVoice()},submit1:function(){var t=this;this.request(n["a"].setVoiceSet,{passage_id:this.passage_id,temp_id:this.post.temp_line_11,mouth_id:this.post.mouth_line_11}).then((function(a){console.log("res123",a),a>0?t.$message.success("语音内容配置成功"):t.$message.success("语音内容配置失败")}))},save:function(){var t=this;this.request(n["a"].setScreenSet,{passage_id:this.passage_id,content:this.post}).then((function(a){console.log("res456",a),a>0?t.$message.success("显屏内容配置成功"):t.$message.success("显屏内容配置失败")}))},getShowVoice:function(){var t=this;1==this.key?this.request(n["a"].getScreenSet,{passage_id:this.passage_id}).then((function(a){t.post=a})):this.request(n["a"].getVoiceSet,{passage_id:this.passage_id}).then((function(a){console.log("res13243",a),t.mouth_list=a.mouthList,t.temp_list=a.tempList,a.setData&&(t.post.mouth_line_11=a.setData.mouth_line_1,t.post.temp_line_11=a.setData.temp_line_1),console.log("mouth_line_11",t.post.mouth_line_11),console.log("temp_line_11",t.post.temp_line_11)}))}}},p=l,o=(s("6d5c"),s("0c7c")),c=Object(o["a"])(p,e,i,!1,null,"73679c14",null);a["default"]=c.exports}}]);