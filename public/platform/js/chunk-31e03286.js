(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31e03286","chunk-0731176e"],{"7fe1":function(t,e,o){},a2f8:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return t.content?e("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[e("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),e("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},r=[],s={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},n=s,c=(o("f0ca"),o("2877")),l=Object(c["a"])(n,a,r,!1,null,"9947987e",null);e["default"]=l.exports},ac06:function(t,e,o){"use strict";o("f874")},d5c5:function(t,e,o){"use strict";o.r(e);o("b0c0");var a=function(){var t=this,e=t._self._c;return t.formDataDecorate?e("div",[e("componentDesc",{attrs:{content:t.desc}}),e("div",{staticClass:"content"},[e("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[e("div",{staticClass:"content mt-20"},[e("div",{staticClass:"add-nav-wrap mb-20"},[e("draggable",{attrs:{disabled:t.isDisabled},model:{value:t.formDataDecorate.list,callback:function(e){t.$set(t.formDataDecorate,"list",e)},expression:"formDataDecorate.list"}},t._l(t.formDataDecorate.list,(function(o,a){return e("div",{key:a,staticClass:"group-menu-wrap",on:{click:function(e){e.stopPropagation(),t.isDisabled=!1}}},[e("a-icon",{staticClass:"delIcon",attrs:{type:"close-circle"},on:{click:function(e){return t.delCurNav(o,a)}}}),e("a-form-model-item",{attrs:{label:t.L("标题"),prop:"list."+a+".name",rules:{required:!0,message:t.L("标题不能为空"),trigger:"change"}}},[e("a-input",{attrs:{placeholder:t.L("请输入导航标题")},on:{mouseenter:function(e){t.isDisabled=!0},mouseleave:function(e){t.isDisabled=!1},click:function(e){e.stopPropagation(),t.isDisabled=!0}},model:{value:o.name,callback:function(e){t.$set(o,"name",e)},expression:"item.name"}})],1),e("a-form-model-item",{attrs:{label:t.L("链接")}},[e("a-input",{staticStyle:{resize:"none"},attrs:{type:"textarea",autoSize:""},on:{mouseenter:function(e){t.isDisabled=!0},mouseleave:function(e){t.isDisabled=!1},click:function(e){e.stopPropagation(),t.isDisabled=!0}},model:{value:o.link_url,callback:function(e){t.$set(o,"link_url",e)},expression:"item.link_url"}}),e("a-button",{on:{click:function(e){return t.getLinkUrl(o,a)}}},[t._v(t._s(t.L("链接库选择")))])],1)],1)})),0)],1)]),e("div",{staticClass:"mt-20 mb-20"},[e("a-button",{attrs:{block:""},on:{click:t.addNavGroup}},[e("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加文本导航")))],1)],1),e("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("背景颜色")}},[e("div",{staticClass:"flex align-center color-picker-wrap"},[e("span",{staticClass:"color-name"},[t._v(t._s(t.formDataDecorate.bg_color))]),e("label",{staticClass:"color-picker-label",style:[{background:t.formDataDecorate.bg_color}],attrs:{for:"bg_color"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formDataDecorate.bg_color,expression:"formDataDecorate.bg_color"}],attrs:{type:"color",id:"bg_color"},domProps:{value:t.formDataDecorate.bg_color},on:{input:function(e){e.target.composing||t.$set(t.formDataDecorate,"bg_color",e.target.value)}}})]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.resetOpt("bg_color")}}},[t._v(t._s(t.L("重置")))])],1)]),e("a-form-model-item",{staticClass:"flex-end",attrs:{label:t.L("文字颜色")}},[e("div",{staticClass:"flex align-center color-picker-wrap"},[e("span",{staticClass:"color-name"},[t._v(t._s(t.formDataDecorate.font_color))]),e("label",{staticClass:"color-picker-label",style:[{background:t.formDataDecorate.font_color}],attrs:{for:"font_color"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formDataDecorate.font_color,expression:"formDataDecorate.font_color"}],attrs:{type:"color",id:"font_color"},domProps:{value:t.formDataDecorate.font_color},on:{input:function(e){e.target.composing||t.$set(t.formDataDecorate,"font_color",e.target.value)}}})]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.resetOpt("font_color")}}},[t._v(t._s(t.L("重置")))])],1)])],1)],1)],1):t._e()},r=[],s=(o("a434"),o("a2f8")),n=o("5bb2"),c=o("b76a"),l=o.n(c),i={components:{componentDesc:s["default"],IconFont:n["a"],draggable:l.a},props:{formContent:{type:[String,Object],default:""}},data:function(){return{desc:{title:this.L("文本导航")},labelCol:{span:5},wrapperCol:{span:19},formDataDecorate:"",list:[],currentIndex:0,bg_color:"#ffffff",font_color:"#000000",isDisabled:!1}},watch:{formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t])},methods:{addNavGroup:function(){var t=this.formDataDecorate.list||[];t.push({name:"",link_url:""}),this.$set(this.formDataDecorate,"list",t)},delCurNav:function(t,e){var o=this.formDataDecorate.list||[];o.length&&o.splice(e,1),this.$set(this.formDataDecorate,"list",o)},getLinkUrl:function(t,e){var o=this;this.currentIndex=e,this.$LinkBases({source:this.$store.state.customPage.sourceInfo.source,type:"h5",source_id:this.$store.state.customPage.sourceInfo.source_id,handleOkBtn:function(t){o.$nextTick((function(){var e=o.formDataDecorate.list||[],a=e[o.currentIndex];o.$set(a,"link_url",t.url),o.$set(e,o.currentIndex,a),o.$set(o.formDataDecorate,"list",e)}))}})},resetOpt:function(t){this.$set(this.formDataDecorate,t,this[t])}}},f=i,u=(o("ac06"),o("2877")),m=Object(u["a"])(f,a,r,!1,null,"7438b578",null);e["default"]=m.exports},f0ca:function(t,e,o){"use strict";o("7fe1")},f874:function(t,e,o){}}]);