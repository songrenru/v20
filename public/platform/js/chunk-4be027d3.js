(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4be027d3","chunk-5f867cee"],{"09b8":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-card",{attrs:{bordered:!1}},[r("a-row",[r("a-col",{attrs:{sm:8,xs:24}},[r("head-info",{attrs:{title:"我的待办",content:"8个任务",bordered:!0}})],1),r("a-col",{attrs:{sm:8,xs:24}},[r("head-info",{attrs:{title:"本周任务平均处理时间",content:"32分钟",bordered:!0}})],1),r("a-col",{attrs:{sm:8,xs:24}},[r("head-info",{attrs:{title:"本周完成任务数",content:"24个"}})],1)],1)],1),r("a-card",{staticStyle:{"margin-top":"24px"},attrs:{bordered:!1,title:"标准列表"}},[r("div",{attrs:{slot:"extra"},slot:"extra"},[r("a-radio-group",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[r("a-radio-button",{attrs:{value:"all"}},[t._v("全部")]),r("a-radio-button",{attrs:{value:"processing"}},[t._v("进行中")]),r("a-radio-button",{attrs:{value:"waiting"}},[t._v("等待中")])],1),r("a-input-search",{staticStyle:{"margin-left":"16px",width:"272px"}})],1),r("div",{staticClass:"operate"},[r("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed",icon:"plus"},on:{click:function(e){return t.$refs.taskForm.add()}}},[t._v("添加")])],1),r("a-list",{attrs:{size:"large",pagination:{showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50}}},t._l(t.data,(function(e,a){return r("a-list-item",{key:a},[r("a-list-item-meta",{attrs:{description:e.description}},[r("a-avatar",{attrs:{slot:"avatar",size:"large",shape:"square",src:e.avatar},slot:"avatar"}),r("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])],1),r("div",{attrs:{slot:"actions"},slot:"actions"},[r("a",{on:{click:function(r){return t.edit(e)}}},[t._v("编辑")])]),r("div",{attrs:{slot:"actions"},slot:"actions"},[r("a-dropdown",[r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",[r("a",[t._v("编辑")])]),r("a-menu-item",[r("a",[t._v("删除")])])],1),r("a",[t._v("更多"),r("a-icon",{attrs:{type:"down"}})],1)],1)],1),r("div",{staticClass:"list-content"},[r("div",{staticClass:"list-content-item"},[r("span",[t._v("Owner")]),r("p",[t._v(t._s(e.owner))])]),r("div",{staticClass:"list-content-item"},[r("span",[t._v("开始时间")]),r("p",[t._v(t._s(e.startAt))])]),r("div",{staticClass:"list-content-item"},[r("a-progress",{staticStyle:{width:"180px"},attrs:{percent:e.progress.value,status:e.progress.status?e.progress.status:null}})],1)])],1)})),1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"head-info",class:t.center&&"center"},[r("span",[t._v(t._s(t.title))]),r("p",[t._v(t._s(t.content))]),t.bordered?r("em"):t._e()])},o=[],l={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},i=l,c=(r("5818"),r("2877")),u=Object(c["a"])(i,n,o,!1,null,"432d5786",null),p=u.exports,d=r("f2a1"),m=[];m.push({title:"Alipay",avatar:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",description:"那是一种内在的东西， 他们到达不了，也无法触及的",owner:"付晓晓",startAt:"2018-07-26 22:44",progress:{value:90}}),m.push({title:"Angular",avatar:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",description:"希望是一个好东西，也许是最好的，好东西是不会消亡的",owner:"曲丽丽",startAt:"2018-07-26 22:44",progress:{value:54}}),m.push({title:"Ant Design",avatar:"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",description:"生命就像一盒巧克力，结果往往出人意料",owner:"林东东",startAt:"2018-07-26 22:44",progress:{value:66}}),m.push({title:"Ant Design Pro",avatar:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",description:"城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",owner:"周星星",startAt:"2018-07-26 22:44",progress:{value:30}}),m.push({title:"Bootstrap",avatar:"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",description:"那时候我只会想自己想要什么，从不想自己拥有什么",owner:"吴加好",startAt:"2018-07-26 22:44",progress:{status:"exception",value:100}});var f={name:"StandardList",components:{HeadInfo:p,TaskForm:d["default"]},data:function(){return{data:m,status:"all"}},methods:{edit:function(t){console.log("record",t),t.taskName="测试",this.$dialog(d["default"],{record:t},{title:"操作",width:700,centered:!0,maskClosable:!1})}}},v=f,h=(r("d886"),Object(c["a"])(v,a,s,!1,null,"4733e962",null));e["default"]=h.exports},5818:function(t,e,r){"use strict";r("d751")},"88bc":function(t,e,r){(function(e){var r=1/0,a=9007199254740991,s="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",i="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=i||c||Function("return this")();function p(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function d(t,e){var r=-1,a=t?t.length:0,s=Array(a);while(++r<a)s[r]=e(t[r],r,t);return s}function m(t,e){var r=-1,a=e.length,s=t.length;while(++r<a)t[s+r]=e[r];return t}var f=Object.prototype,v=f.hasOwnProperty,h=f.toString,b=u.Symbol,g=f.propertyIsEnumerable,w=b?b.isConcatSpreadable:void 0,y=Math.max;function C(t,e,r,a,s){var n=-1,o=t.length;r||(r=k),s||(s=[]);while(++n<o){var l=t[n];e>0&&r(l)?e>1?C(l,e-1,r,a,s):m(s,l):a||(s[s.length]=l)}return s}function _(t,e){return t=Object(t),j(t,e,(function(e,r){return r in t}))}function j(t,e,r){var a=-1,s=e.length,n={};while(++a<s){var o=e[a],l=t[o];r(l,o)&&(n[o]=l)}return n}function x(t,e){return e=y(void 0===e?t.length-1:e,0),function(){var r=arguments,a=-1,s=y(r.length-e,0),n=Array(s);while(++a<s)n[a]=r[e+a];a=-1;var o=Array(e+1);while(++a<e)o[a]=r[a];return o[e]=n,p(t,this,o)}}function k(t){return S(t)||O(t)||!!(w&&t&&t[w])}function A(t){if("string"==typeof t||P(t))return t;var e=t+"";return"0"==e&&1/t==-r?"-0":e}function O(t){return F(t)&&v.call(t,"callee")&&(!g.call(t,"callee")||h.call(t)==s)}var S=Array.isArray;function z(t){return null!=t&&N(t.length)&&!q(t)}function F(t){return E(t)&&z(t)}function q(t){var e=B(t)?h.call(t):"";return e==n||e==o}function N(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function B(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function E(t){return!!t&&"object"==typeof t}function P(t){return"symbol"==typeof t||E(t)&&h.call(t)==l}var T=x((function(t,e){return null==t?{}:_(t,d(C(e,1),A))}));t.exports=T}).call(this,r("c8ba"))},d751:function(t,e,r){},d886:function(t,e,r){"use strict";r("e67f")},e67f:function(t,e,r){},f2a1:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[r("a-form-item",{attrs:{label:"任务名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["taskName",{rules:[{required:!0,message:"请输入任务名称"}]}],expression:"['taskName', {rules:[{required: true, message: '请输入任务名称'}]}]"}]})],1),r("a-form-item",{attrs:{label:"开始时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["startTime",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['startTime', {rules:[{required: true, message: '请选择开始时间'}]}]"}],staticStyle:{width:"100%"}})],1),r("a-form-item",{attrs:{label:"任务负责人",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['owner', {rules:[{required: true, message: '请选择开始时间'}]}]"}]},[r("a-select-option",{attrs:{value:0}},[t._v("付晓晓")]),r("a-select-option",{attrs:{value:1}},[t._v("周毛毛")])],1)],1),r("a-form-item",{attrs:{label:"产品描述",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc"],expression:"['desc']"}]})],1)],1)},s=[],n=(r("d3b7"),r("88bc")),o=r.n(n),l={name:"TaskForm",props:{record:{type:Object,default:null}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},form:this.$form.createForm(this)}},mounted:function(){console.log("this.",this.record),this.record&&this.form.setFieldsValue(o()(this.record,["taskName"]))},methods:{onOk:function(){return new Promise((function(t){t(!0)}))},onCancel:function(){return new Promise((function(t){t(!0)}))},handleSubmit:function(){var t=this.form.validateFields;this.visible=!0,t((function(t,e){t||console.log("values",e)}))}}},i=l,c=r("2877"),u=Object(c["a"])(i,a,s,!1,null,null,null);e["default"]=u.exports}}]);