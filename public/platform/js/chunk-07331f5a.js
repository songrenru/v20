(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07331f5a","chunk-27e9b9f2"],{"02b2":function(t,e,a){"use strict";a("8a6c")},8037:function(t,e,a){},"8a6c":function(t,e,a){},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],r={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},c=r,s=(a("f0ca"),a("0c7c")),l=Object(s["a"])(c,o,n,!1,null,"9947987e",null);e["default"]=l.exports},f0ca:function(t,e,a){"use strict";a("8037")},fa7e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[a("a-form-model-item",{attrs:{label:t.L("空白高度")}},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:17}},[a("a-slider",{attrs:{max:100,min:10},model:{value:t.formDataDecorate.blank_height,callback:function(e){t.$set(t.formDataDecorate,"blank_height",e)},expression:"formDataDecorate.blank_height"}})],1),a("a-col",{attrs:{span:6,offset:1}},[a("a-input-number",{attrs:{min:10,max:100},model:{value:t.formDataDecorate.blank_height,callback:function(e){t.$set(t.formDataDecorate,"blank_height",e)},expression:"formDataDecorate.blank_height"}})],1)],1)],1)],1)],1):t._e()],1)},n=[],r=a("a2f8"),c=a("5bb2"),s={components:{componentDesc:r["default"],IconFont:c["a"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("辅助空白")},labelCol:{span:4},wrapperCol:{span:20},formDataDecorate:""}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var a in this.formDataDecorate={},t)this.$set(this.formDataDecorate,a,t[a]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])}},l=s,i=(a("02b2"),a("0c7c")),f=Object(i["a"])(l,o,n,!1,null,"44c5a8b9",null);e["default"]=f.exports}}]);