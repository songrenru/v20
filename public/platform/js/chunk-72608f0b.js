(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72608f0b","chunk-27e9b9f2"],{43158:function(t,e,a){"use strict";a("b8da")},"66f7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[a("a-form-model-item",{attrs:{label:t.L("文案"),prop:"txt",rules:{required:!0,message:t.L("文案不能为空"),trigger:""}}},[a("a-input",{attrs:{maxLength:4},model:{value:t.formDataDecorate.txt,callback:function(e){t.$set(t.formDataDecorate,"txt",e)},expression:"formDataDecorate.txt"}}),a("span",{staticClass:"online-service-desc"},[t._v(t._s(t.L("文案建议4个字")))])],1)],1)],1):t._e()],1)},o=[],r=a("a2f8"),c={components:{componentDesc:r["default"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("在线客服")},labelCol:{span:20},wrapperCol:{span:20},formDataDecorate:""}},watch:{formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])}},s=c,l=(a("43158"),a("0c7c")),i=Object(l["a"])(s,n,o,!1,null,"920a8746",null);e["default"]=i.exports},8037:function(t,e,a){},a2f8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},o=[],r={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},c=r,s=(a("f0ca"),a("0c7c")),l=Object(s["a"])(c,n,o,!1,null,"9947987e",null);e["default"]=l.exports},b8da:function(t,e,a){},f0ca:function(t,e,a){"use strict";a("8037")}}]);