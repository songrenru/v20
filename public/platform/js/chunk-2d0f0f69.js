(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0f69"],{"9f39":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{attrs:{destroyOnClose:"",width:900,visible:e.visible,bodyStyle:{"max-height":"700px","overflow-y":"auto"}},on:{cancel:e.handleCancel,ok:e.handleSubmit}},[s("a-card",[s("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[s("a-table",{attrs:{columns:e.columns,"data-source":e.data},scopedSlots:e._u([{key:"address",fn:function(e,t,a){return s("span",{},[s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address["+a+"]",{rules:[{required:!1,message:"test!",whitespace:!0}]}],expression:"[\n                   `address[${index}]`,\n                  {\n                    rules: [{ required: false, message: 'test!', whitespace: true }],\n                  },\n                ]"}]})],1)],1)}}])}),s("a-form-item",{style:{textAlign:"center"},attrs:{"wrapper-col":{span:12,offset:5}}},[s("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},r=[],n=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",width:"12%",scopedSlots:{customRender:"age"}},{title:"Address",dataIndex:"address",width:"30%",key:"address",scopedSlots:{customRender:"address"}}],o=[{key:1,name:"John Brown sr.",age:60,address:"00000"},{key:2,name:"Joe Black",age:32,address:"11111"}],d={data:function(){return{form:this.$form.createForm(this),data:o,columns:n,visible:!1}},mounted:function(){for(var e=this,t={},s=0;s<this.data.length;s++)this.form.getFieldDecorator("address["+s+"]"),t["address["+s+"]"]=this.data[s].address;console.log(t),setTimeout((function(){e.form.setFieldsValue(t)}),0)},methods:{handleCancel:function(){this.visible=!1,this.form=this.$form.createForm(this)},edit:function(){this.visible=!0},handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){console.log(t)}))}}},i=d,l=s("2877"),c=Object(l["a"])(i,a,r,!1,null,null,null);t["default"]=c.exports}}]);