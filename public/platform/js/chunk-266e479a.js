(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-266e479a","chunk-4b6b2561","chunk-4b6b2561"],{"0b4c":function(t,e,a){"use strict";a("84dd")},5598:function(t,e,a){"use strict";a("e4aa9")},"803f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("componentDesc",{attrs:{content:t.desc}}),t.formDataDecorate?a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[a("a-form-model-item",{attrs:{label:t.L("选择样式")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.lineStyle,t.formDataDecorate.aux_line_style)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.formDataDecorate.aux_line_style,callback:function(e){t.$set(t.formDataDecorate,"aux_line_style",e)},expression:"formDataDecorate.aux_line_style"}},t._l(t.lineStyle,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]),a("a-form-model-item",{attrs:{label:t.L("左右边距")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.lineMargin,t.formDataDecorate.left_right_margin)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.formDataDecorate.left_right_margin,callback:function(e){t.$set(t.formDataDecorate,"left_right_margin",e)},expression:"formDataDecorate.left_right_margin"}},t._l(t.lineMargin,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]),a("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("辅助线颜色"),labelCol:{span:5},wrapperCol:{span:19}}},[a("div",{staticClass:"flex align-center color-picker-wrap"},[a("span",{staticClass:"color-name"},[t._v(t._s(t.formDataDecorate.aux_line_color))]),a("label",{staticClass:"color-picker-label",style:[{background:t.formDataDecorate.aux_line_color}],attrs:{for:"aux_line_color"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formDataDecorate.aux_line_color,expression:"formDataDecorate.aux_line_color"}],attrs:{type:"color",id:"aux_line_color"},domProps:{value:t.formDataDecorate.aux_line_color},on:{input:function(e){e.target.composing||t.$set(t.formDataDecorate,"aux_line_color",e.target.value)}}})]),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.resetOpt("aux_line_color")}}},[t._v(t._s(t.L("重置")))])],1)])],1)],1):t._e()],1)},n=[],r=(a("159b"),a("a2f8")),l=a("5bb2"),i={components:{componentDesc:r["default"],IconFont:l["a"]},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("辅助线")},labelCol:{span:4},wrapperCol:{span:20},formDataDecorate:"",lineStyle:[{value:"solid",label:this.L("实线"),icon:"iconCustomPageBorderLine"},{value:"dashed",label:this.L("虚线"),icon:"iconCustomPageBorderDashed"}],lineMargin:[{value:"noMargin",label:this.L("无边距"),icon:"iconCustomPagePadding0"},{value:"hasMargin",label:this.L("有边距"),icon:"iconCustomPagePadding"}],aux_line_color:"#e5e5e5"}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var a in this.formDataDecorate={},t)this.$set(this.formDataDecorate,a,t[a]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])},methods:{getLabel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="";return t.length&&t.forEach((function(t){t.value==e&&(a=t.label)})),a},resetOpt:function(t){this.$set(this.formDataDecorate,t,this[t])}}},s=i,c=(a("5598"),a("2877")),u=Object(c["a"])(s,o,n,!1,null,"bb3ed5fa",null);e["default"]=u.exports},"84dd":function(t,e,a){},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],r={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},l=r,i=(a("0b4c"),a("2877")),s=Object(i["a"])(l,o,n,!1,null,"9947987e",null);e["default"]=s.exports},e4aa9:function(t,e,a){}}]);