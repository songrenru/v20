(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08cb78d5","chunk-44565da4"],{"6d52":function(t,e,a){},9251:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[a("a-form-model-item",{attrs:{label:t.L("文案")}},[a("a-input",{attrs:{maxLength:4},model:{value:t.formDataDecorate.txt,callback:function(e){t.$set(t.formDataDecorate,"txt",e)},expression:"formDataDecorate.txt"}})],1)],1)],1):t._e()],1)},n=[],r=a("a2f8"),c={components:{componentDesc:r["default"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:"进入店铺"},labelCol:{span:4},wrapperCol:{span:20},formDataDecorate:""}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var a in this.formDataDecorate={},t)this.$set(this.formDataDecorate,a,t[a]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])}},s=c,i=(a("9259"),a("2877")),l=Object(i["a"])(s,o,n,!1,null,"a5154ca6",null);e["default"]=l.exports},9259:function(t,e,a){"use strict";a("6d52")},"9cea":function(t,e,a){},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],r={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},c=r,s=(a("f0ca"),a("2877")),i=Object(s["a"])(c,o,n,!1,null,"9947987e",null);e["default"]=i.exports},f0ca:function(t,e,a){"use strict";a("9cea")}}]);