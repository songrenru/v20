(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c41d1e8","chunk-6b219d7c"],{"5bb3":function(t,e,o){"use strict";o("bac4")},7858:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?o("div",{staticClass:"rich-text-content"},[o("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[o("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("背景颜色")}},[o("div",{staticClass:"flex align-center color-picker-wrap"},[o("span",{staticClass:"color-name"},[t._v(t._s(t.formDataDecorate.bg_color))]),o("label",{staticClass:"color-picker-label",style:[{background:t.formDataDecorate.bg_color}],attrs:{for:"bg_color"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formDataDecorate.bg_color,expression:"formDataDecorate.bg_color"}],attrs:{type:"color",id:"bg_color"},domProps:{value:t.formDataDecorate.bg_color},on:{input:function(e){e.target.composing||t.$set(t.formDataDecorate,"bg_color",e.target.value)}}})]),o("a-button",{attrs:{type:"link"},on:{click:function(e){return t.resetOpt("bg_color")}}},[t._v(t._s(t.L("重置")))])],1)]),o("a-form-model-item",{attrs:{label:t.L("是否全屏显示"),labelCol:{span:6},wrapperCol:{span:18}}},[o("div",{staticClass:"flex align-center justify-between"},[o("span",[t._v(t._s("full"==t.formDataDecorate.show_full_screen?t.L("全屏显示"):t.L("不全屏显示")))]),o("a-checkbox",{staticStyle:{padding:"0 15px"},attrs:{checked:"full"==t.formDataDecorate.show_full_screen},on:{change:t.isShowChange}})],1)])],1),o("custom-rich-text",{attrs:{info:t.formDataDecorate.richTextCode,height:600,autoHeight:!0},on:{"update:info":function(e){return t.$set(t.formDataDecorate,"richTextCode",e)}}})],1):t._e()],1)},r=[],c=o("a2f8"),n=o("5bb2"),s=o("6ec1"),l={components:{componentDesc:c["default"],IconFont:n["a"],CustomRichText:s["a"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:"富文本",desc:"小程序富文本展示以实际效果为准，左侧预览仅供参考"},formDataDecorate:"",labelCol:{span:4},wrapperCol:{span:20},bg_color:"#ffffff"}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var o in this.formDataDecorate={},t)this.$set(this.formDataDecorate,o,t[o]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])},methods:{resetOpt:function(t){this.$set(this.formDataDecorate,t,this[t])},isShowChange:function(t){this.$set(this.formDataDecorate,"show_full_screen",t.target.checked?"full":"unfull")}}},i=l,f=(o("5bb3"),o("0c7c")),u=Object(f["a"])(i,a,r,!1,null,"1696285a",null);e["default"]=u.exports},a2f8:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.content?o("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[o("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),o("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},r=[],c={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},n=c,s=(o("f0ca"),o("0c7c")),l=Object(s["a"])(n,a,r,!1,null,"9947987e",null);e["default"]=l.exports},bac4:function(t,e,o){},e063:function(t,e,o){},f0ca:function(t,e,o){"use strict";o("e063")}}]);