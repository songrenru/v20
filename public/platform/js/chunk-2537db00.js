(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2537db00"],{"2e8e":function(t,e,s){"use strict";s("bb88")},bb88:function(t,e,s){},e0ca:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-modal",{attrs:{title:t.title,width:750,visible:t.visible,maskClosable:!1,footer:null},on:{cancel:t.handleOpenGateCancel}},[s("div",{staticStyle:{"background-color":"white","padding-left":"10px"}},[s("div",{staticStyle:{width:"682px"}},[s("span",{staticStyle:{"margin-right":"150px","margin-left":"111px"}},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第一行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_1,callback:function(e){t.$set(t.post,"temp_line_1",e)},expression:"post.temp_line_1"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第二行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_2,callback:function(e){t.$set(t.post,"temp_line_2",e)},expression:"post.temp_line_2"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第三行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_3,callback:function(e){t.$set(t.post,"temp_line_3",e)},expression:"post.temp_line_3"}})],1),s("span",{staticClass:"ant-card-span_park"},[s("label",{staticClass:"ant-card-span1_park"},[t._v("第四行:")]),s("a-input",{staticClass:"ant-card-input_park",model:{value:t.post.temp_line_4,callback:function(e){t.$set(t.post,"temp_line_4",e)},expression:"post.temp_line_4"}})],1)]),s("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[s("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.save()}}},[t._v("保存")])],1)])])},n=[],i=s("a0e0"),l={name:"showScreenSet",data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},mouth_list:[],temp_list:[],title:"绑定",key:1,active:1,passage_id:0,form:this.$form.createForm(this),visible:!1,loading:!1,post:{temp_line_1:"",temp_line_2:"",temp_line_3:"",temp_line_4:""}}},mounted:function(){},methods:{add:function(t){this.title="设置默认显屏内容",this.loading=!0,this.visible=!0,this.passage_id=t,console.log("dfdsfg",this.passage_id),this.getShowVoice()},save:function(){var t=this;this.request(i["a"].setScreenSet,{passage_id:this.passage_id,content:this.post}).then((function(e){console.log("res456",e),e>0?(t.$message.success("显屏内容配置成功"),t.visible=!1):t.$message.success("显屏内容配置失败")}))},getShowVoice:function(){var t=this;this.request(i["a"].getScreenSet,{passage_id:this.passage_id}).then((function(e){console.log("getScreenSet111",e),t.post=e}))},handleOpenGateCancel:function(){this.post={temp_line_1:"",temp_line_2:"",temp_line_3:"",temp_line_4:""},this.visible=!1}}},p=l,c=(s("2e8e"),s("2877")),o=Object(c["a"])(p,a,n,!1,null,"7ca696a8",null);e["default"]=o.exports}}]);