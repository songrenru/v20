(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2463670","chunk-6b219d7c"],{"06b1":function(t,o,e){},"53f9":function(t,o,e){"use strict";e("06b1")},"654a":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.formData?e("div",[e("componentDesc",{attrs:{content:t.desc}}),t.formData?e("div",{staticClass:"content"},[e("a-form-model",{attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[e("a-form-model-item",{attrs:{label:t.L("公告"),labelCol:{span:8},wrapperCol:{span:20},prop:"noticeTxt",rules:{required:!0,message:t.L("请填写公告内容"),trigger:""}}},[e("a-input",{staticStyle:{resize:"none"},attrs:{placeholder:t.L("请填写公告内容"),autoSize:"",type:"textarea"},model:{value:t.formData.noticeTxt,callback:function(o){t.$set(t.formData,"noticeTxt",o)},expression:"formData.noticeTxt"}})],1),e("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("背景颜色"),labelCol:{span:5},wrapperCol:{span:19}}},[e("div",{staticClass:"flex align-center color-picker-wrap"},[e("span",{staticClass:"color-name"},[t._v(t._s(t.formData.bg_color))]),e("label",{staticClass:"color-picker-label",style:[{background:t.formData.bg_color}],attrs:{for:"bg_color"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.bg_color,expression:"formData.bg_color"}],attrs:{type:"color",id:"bg_color"},domProps:{value:t.formData.bg_color},on:{input:function(o){o.target.composing||t.$set(t.formData,"bg_color",o.target.value)}}})]),e("a-button",{attrs:{type:"link"},on:{click:function(o){return t.resetOpt("bg_color")}}},[t._v(t._s(t.L("重置")))])],1)]),e("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("文字颜色"),labelCol:{span:5},wrapperCol:{span:19}}},[e("div",{staticClass:"flex align-center color-picker-wrap"},[e("span",{staticClass:"color-name"},[t._v(t._s(t.formData.font_color))]),e("label",{staticClass:"color-picker-label",style:[{background:t.formData.font_color}],attrs:{for:"font_color"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.font_color,expression:"formData.font_color"}],attrs:{type:"color",id:"font_color"},domProps:{value:t.formData.font_color},on:{input:function(o){o.target.composing||t.$set(t.formData,"font_color",o.target.value)}}})]),e("a-button",{attrs:{type:"link"},on:{click:function(o){return t.resetOpt("font_color")}}},[t._v(t._s(t.L("重置")))])],1)])],1)],1):t._e()],1):t._e()},r=[],n=(e("d3b7"),e("159b"),e("a2f8")),l=e("5bb2"),s={components:{componentDesc:n["default"],IconFont:l["a"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("公告")},labelCol:{span:4},wrapperCol:{span:20},formData:"",bg_color:"#FFF3DB",font_color:"#666666"}},watch:{formContent:{deep:!0,handler:function(t,o){if(t)for(var e in this.formData={},t)this.$set(this.formData,e,t[e]);else this.formData=""}},formData:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formData={},this.formContent)this.$set(this.formData,t,this.formContent[t])},methods:{getLabel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e="";return t.length&&t.forEach((function(t){t.value==o&&(e=t.label)})),e},resetOpt:function(t){this.$set(this.formData,t,this[t])}}},c=s,i=(e("53f9"),e("0c7c")),f=Object(i["a"])(c,a,r,!1,null,"40faa9b6",null);o["default"]=f.exports},a2f8:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.content?e("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[e("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),e("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},r=[],n={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},l=n,s=(e("f0ca"),e("0c7c")),c=Object(s["a"])(l,a,r,!1,null,"9947987e",null);o["default"]=c.exports},e063:function(t,o,e){},f0ca:function(t,o,e){"use strict";e("e063")}}]);