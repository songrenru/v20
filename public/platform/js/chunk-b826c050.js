(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b826c050","chunk-96ec8c44"],{43158:function(t,e,a){"use strict";a("6e32")},"66f7":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?e("div",{staticClass:"content"},[e("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[e("a-form-model-item",{attrs:{label:t.L("文案"),prop:"txt",rules:{required:!0,message:t.L("文案不能为空"),trigger:""}}},[e("a-input",{attrs:{maxLength:4},model:{value:t.formDataDecorate.txt,callback:function(e){t.$set(t.formDataDecorate,"txt",e)},expression:"formDataDecorate.txt"}}),e("span",{staticClass:"online-service-desc"},[t._v(t._s(t.L("文案建议4个字")))])],1)],1)],1):t._e()],1)},n=[],r=a("a2f8"),s={components:{componentDesc:r["default"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("在线客服")},labelCol:{span:20},wrapperCol:{span:20},formDataDecorate:""}},watch:{formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])}},c=s,i=(a("43158"),a("0b56")),l=Object(i["a"])(c,o,n,!1,null,"920a8746",null);e["default"]=l.exports},"6e32":function(t,e,a){},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return t.content?e("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[e("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),e("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],r={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},s=r,c=(a("f0ca"),a("0b56")),i=Object(c["a"])(s,o,n,!1,null,"9947987e",null);e["default"]=i.exports},ddee:function(t,e,a){},f0ca:function(t,e,a){"use strict";a("ddee")}}]);