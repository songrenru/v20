(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f046a5b","chunk-27e9b9f2"],{"501a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("componentDesc",{attrs:{content:t.desc}}),t.formData?a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[a("a-form-model-item",{attrs:{label:t.L("拨号按钮")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(1==t.formData.show_phone_icon?t.L("显示"):t.L("不显示")))]),a("a-checkbox",{attrs:{checked:1==t.formData.show_phone_icon,disabled:2==t.formData.show_address_icon,"default-checked":2==t.formData.show_address_icon},on:{change:t.showPhoneChange}})],1)]),a("a-form-model-item",{attrs:{label:t.L("店铺地址")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(1==t.formData.show_address_icon?t.L("显示"):t.L("不显示")))]),a("a-checkbox",{attrs:{checked:1==t.formData.show_address_icon,disabled:2==t.formData.show_phone_icon,"default-checked":2==t.formData.show_phone_icon},on:{change:t.showAddChange}})],1)])],1)],1):t._e()],1)},n=[],s=a("a2f8"),c={components:{componentDesc:s["default"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("联系店铺")},labelCol:{span:4},wrapperCol:{span:20},formData:""}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var a in this.formData={},t)this.$set(this.formData,a,t[a]);else this.formData=""}},formData:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formData={},this.formContent)this.$set(this.formData,t,this.formContent[t])},methods:{showPhoneChange:function(t){this.$set(this.formData,"show_phone_icon",t.target.checked?1:2)},showAddChange:function(t){this.$set(this.formData,"show_address_icon",t.target.checked?1:2)}}},r=c,i=(a("c6f4"),a("0c7c")),f=Object(i["a"])(r,o,n,!1,null,"7777002e",null);e["default"]=f.exports},"6ace":function(t,e,a){},8037:function(t,e,a){},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],s={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},c=s,r=(a("f0ca"),a("0c7c")),i=Object(r["a"])(c,o,n,!1,null,"9947987e",null);e["default"]=i.exports},c6f4:function(t,e,a){"use strict";a("6ace")},f0ca:function(t,e,a){"use strict";a("8037")}}]);