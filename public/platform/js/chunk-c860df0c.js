(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c860df0c","chunk-2d0b3786"],{2909:function(t,a,e){"use strict";e.d(a,"a",(function(){return l}));var n=e("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=e("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||s(t)||Object(r["a"])(t)||c()}},5814:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header-index-wide page-header-wrapper-grid-content-main"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:24,lg:7}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"account-center-avatarHolder"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.avatar()}})]),e("div",{staticClass:"username"},[t._v(t._s(t.nickname()))]),e("div",{staticClass:"bio"},[t._v("海纳百川，有容乃大")])]),e("div",{staticClass:"account-center-detail"},[e("p",[e("i",{staticClass:"title"}),t._v("交互专家 ")]),e("p",[e("i",{staticClass:"group"}),t._v("蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED ")]),e("p",[e("i",{staticClass:"address"}),e("span",[t._v("浙江省")]),e("span",[t._v("杭州市")])])]),e("a-divider"),e("div",{staticClass:"account-center-tags"},[e("div",{staticClass:"tagsTitle"},[t._v("标签")]),e("div",[t._l(t.tags,(function(a,n){return[a.length>20?e("a-tooltip",{key:a,attrs:{title:a}},[e("a-tag",{key:a,attrs:{closable:0!==n,afterClose:function(){return t.handleTagClose(a)}}},[t._v(t._s(a.slice(0,20)+"..."))])],1):e("a-tag",{key:a,attrs:{closable:0!==n,afterClose:function(){return t.handleTagClose(a)}}},[t._v(t._s(a))])]})),t.tagInputVisible?e("a-input",{ref:"tagInput",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.tagInputValue},on:{change:t.handleInputChange,blur:t.handleTagInputConfirm,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleTagInputConfirm.apply(null,arguments)}}}):e("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showTagInput}},[e("a-icon",{attrs:{type:"plus"}}),t._v("New Tag ")],1)],2)]),e("a-divider",{attrs:{dashed:!0}}),e("div",{staticClass:"account-center-team"},[e("div",{staticClass:"teamTitle"},[t._v("团队")]),e("a-spin",{attrs:{spinning:t.teamSpinning}},[e("div",{staticClass:"members"},[e("a-row",t._l(t.teams,(function(a,n){return e("a-col",{key:n,attrs:{span:12}},[e("a",[e("a-avatar",{attrs:{size:"small",src:a.avatar}}),e("span",{staticClass:"member"},[t._v(t._s(a.name))])],1)])})),1)],1)])],1)],1)],1),e("a-col",{attrs:{md:24,lg:17}},[e("a-card",{staticStyle:{width:"100%"},attrs:{bordered:!1,tabList:t.tabListNoTitle,activeTabKey:t.noTitleKey},on:{tabChange:function(a){return t.handleTabChange(a,"noTitleKey")}}},["article"===t.noTitleKey?e("article-page"):"app"===t.noTitleKey?e("app-page"):"project"===t.noTitleKey?e("project-page"):t._e()],1)],1)],1)],1)},i=[],s=e("2909"),r=e("5530"),c=(e("4de4"),e("d3b7"),e("caad"),e("2532"),e("99af"),e("680a")),l=e("0388"),o=e("5880"),u={components:{RouteView:c["e"],PageView:c["d"],AppPage:l["AppPage"],ArticlePage:l["ArticlePage"],ProjectPage:l["ProjectPage"]},data:function(){return{tags:["很有想法的","专注设计","辣~","大长腿","川妹子","海纳百川"],tagInputVisible:!1,tagInputValue:"",teams:[],teamSpinning:!0,tabListNoTitle:[{key:"article",tab:"文章(8)"},{key:"app",tab:"应用(8)"},{key:"project",tab:"项目(8)"}],noTitleKey:"app"}},mounted:function(){this.getTeams()},methods:Object(r["a"])(Object(r["a"])({},Object(o["mapGetters"])(["nickname","avatar"])),{},{getTeams:function(){var t=this;this.$http.get("/workplace/teams").then((function(a){t.teams=a.result,t.teamSpinning=!1}))},handleTabChange:function(t,a){this[a]=t},handleTagClose:function(t){var a=this.tags.filter((function(a){return a!==t}));this.tags=a},showTagInput:function(){var t=this;this.tagInputVisible=!0,this.$nextTick((function(){t.$refs.tagInput.focus()}))},handleInputChange:function(t){this.tagInputValue=t.target.value},handleTagInputConfirm:function(){var t=this.tagInputValue,a=this.tags;t&&!a.includes(t)&&(a=[].concat(Object(s["a"])(a),[t])),Object.assign(this,{tags:a,tagInputVisible:!1,tagInputValue:""})}})},d=u,p=(e("ce972"),e("2877")),g=Object(p["a"])(d,n,i,!1,null,"252754e7",null);a["default"]=g.exports},a641:function(t,a,e){},ce972:function(t,a,e){"use strict";e("a641")}}]);