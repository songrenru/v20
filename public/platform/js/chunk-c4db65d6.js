(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4db65d6","chunk-4b6b2561","chunk-4b6b2561"],{"0b4c":function(t,e,o){"use strict";o("84dd")},5311:function(t,e,o){},"84dd":function(t,e,o){},"953b":function(t,e,o){"use strict";o("5311")},a2f8:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.content?o("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[o("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),o("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},r=[],n={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},s=n,c=(o("0b4c"),o("2877")),l=Object(c["a"])(s,a,r,!1,null,"9947987e",null);e["default"]=l.exports},d5c5:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.formDataDecorate?o("div",[o("componentDesc",{attrs:{content:t.desc}}),o("div",{staticClass:"content"},[o("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[o("div",{staticClass:"content mt-20"},[o("div",{staticClass:"add-nav-wrap mb-20"},[o("draggable",{attrs:{disabled:t.isDisabled},model:{value:t.formDataDecorate.list,callback:function(e){t.$set(t.formDataDecorate,"list",e)},expression:"formDataDecorate.list"}},t._l(t.formDataDecorate.list,(function(e,a){return o("div",{key:a,staticClass:"group-menu-wrap",on:{click:function(e){e.stopPropagation(),t.isDisabled=!1}}},[o("a-icon",{staticClass:"delIcon",attrs:{type:"close-circle"},on:{click:function(o){return t.delCurNav(e,a)}}}),o("a-form-model-item",{attrs:{label:t.L("标题"),prop:"list."+a+".name",rules:{required:!0,message:t.L("标题不能为空"),trigger:"change"}}},[o("a-input",{attrs:{placeholder:t.L("请输入导航标题")},on:{mouseenter:function(e){t.isDisabled=!0},mouseleave:function(e){t.isDisabled=!1},click:function(e){e.stopPropagation(),t.isDisabled=!0}},model:{value:e.name,callback:function(o){t.$set(e,"name",o)},expression:"item.name"}})],1),o("a-form-model-item",{attrs:{label:t.L("链接")}},[o("a-input",{staticStyle:{resize:"none"},attrs:{type:"textarea",autoSize:""},on:{mouseenter:function(e){t.isDisabled=!0},mouseleave:function(e){t.isDisabled=!1},click:function(e){e.stopPropagation(),t.isDisabled=!0}},model:{value:e.link_url,callback:function(o){t.$set(e,"link_url",o)},expression:"item.link_url"}}),o("a-button",{on:{click:function(o){return t.getLinkUrl(e,a)}}},[t._v(t._s(t.L("链接库选择")))])],1)],1)})),0)],1)]),o("div",{staticClass:"mt-20 mb-20"},[o("a-button",{attrs:{block:""},on:{click:t.addNavGroup}},[o("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加文本导航")))],1)],1),o("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("背景颜色")}},[o("div",{staticClass:"flex align-center color-picker-wrap"},[o("span",{staticClass:"color-name"},[t._v(t._s(t.formDataDecorate.bg_color))]),o("label",{staticClass:"color-picker-label",style:[{background:t.formDataDecorate.bg_color}],attrs:{for:"bg_color"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formDataDecorate.bg_color,expression:"formDataDecorate.bg_color"}],attrs:{type:"color",id:"bg_color"},domProps:{value:t.formDataDecorate.bg_color},on:{input:function(e){e.target.composing||t.$set(t.formDataDecorate,"bg_color",e.target.value)}}})]),o("a-button",{attrs:{type:"link"},on:{click:function(e){return t.resetOpt("bg_color")}}},[t._v(t._s(t.L("重置")))])],1)]),o("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("文字颜色")}},[o("div",{staticClass:"flex align-center color-picker-wrap"},[o("span",{staticClass:"color-name"},[t._v(t._s(t.formDataDecorate.font_color))]),o("label",{staticClass:"color-picker-label",style:[{background:t.formDataDecorate.font_color}],attrs:{for:"font_color"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formDataDecorate.font_color,expression:"formDataDecorate.font_color"}],attrs:{type:"color",id:"font_color"},domProps:{value:t.formDataDecorate.font_color},on:{input:function(e){e.target.composing||t.$set(t.formDataDecorate,"font_color",e.target.value)}}})]),o("a-button",{attrs:{type:"link"},on:{click:function(e){return t.resetOpt("font_color")}}},[t._v(t._s(t.L("重置")))])],1)])],1)],1)],1):t._e()},r=[],n=(o("a434"),o("a2f8")),s=o("5bb2"),c=o("b76a"),l=o.n(c),i={components:{componentDesc:n["default"],IconFont:s["a"],draggable:l.a},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("文本导航")},labelCol:{span:5},wrapperCol:{span:19},formDataDecorate:"",list:[],currentIndex:0,bg_color:"#ffffff",font_color:"#000000",isDisabled:!1}},watch:{formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])},methods:{addNavGroup:function(){var t=this.formDataDecorate.list||[];t.push({name:"",link_url:""}),this.$set(this.formDataDecorate,"list",t)},delCurNav:function(t,e){var o=this.formDataDecorate.list||[];o.length&&o.splice(e,1),this.$set(this.formDataDecorate,"list",o)},getLinkUrl:function(t,e){var o=this;this.currentIndex=e,this.$LinkBases({source:this.$store.state.customPage.sourceInfo.source,type:"h5",source_id:this.$store.state.customPage.sourceInfo.source_id,handleOkBtn:function(t){o.$nextTick((function(){var e=o.formDataDecorate.list||[],a=e[o.currentIndex];o.$set(a,"link_url",t.url),o.$set(e,o.currentIndex,a),o.$set(o.formDataDecorate,"list",e)}))}})},resetOpt:function(t){this.$set(this.formDataDecorate,t,this[t])}}},u=i,f=(o("953b"),o("2877")),d=Object(f["a"])(u,a,r,!1,null,"7438b578",null);e["default"]=d.exports}}]);