(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04fe35b6"],{"4edf":function(t,a,e){},"6ad8":function(t,a,e){"use strict";e("4edf")},"85f8":function(t,a,e){"use strict";var s={getPayTypes:"/pay/merchant.pay/getPayTypes",getPayTypeInfo:"/pay/merchant.pay/getPayTypeInfo",getChannels:"/pay/merchant.pay/getChannels",getChannelInfo:"/pay/merchant.pay/getChannelInfo",setChannelParams:"/pay/merchant.pay/setChannelParams"};a["a"]=s},"9a2f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"content",staticClass:"card-list"},[e("a-list",{attrs:{rowKey:"id",grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[[e("a-card",{attrs:{hoverable:!0},on:{click:function(e){return t.gotoconfig(a.code)}}},[e("a-card-meta",[e("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.text))]),e("a-avatar",{staticClass:"card-avatar",attrs:{slot:"avatar",src:a.icon,size:"large"},slot:"avatar"}),e("div",{staticClass:"meta-content",attrs:{slot:"description"},slot:"description"},[t._v(t._s(a.introduce))])],1),e("template",{staticClass:"ant-card-actions",slot:"actions"},[e("a",[t._v("去配置 >>>")])])],2)]],2)}}])})],1)},n=[],r=e("c6fe"),o=e("85f8"),i={name:"CardList",data:function(){return{dataSource:[],getPayTypesUrl:"",isSystem:1,gopath:""}},mounted:function(){console.log(this.$route.query,"this.$route.query"),-1!=this.$route.path.indexOf("merchant")?(this.getPayTypesUrl=o["a"].getPayTypes,this.gopath="/pay/merchant.paytype/index",this.isSystem=0):(this.getPayTypesUrl=r["a"].getPayTypes,this.gopath="/pay/platform.paytype/index",this.isSystem=1),this.getPayTypes()},methods:{getPayTypes:function(){var t=this;this.request(this.getPayTypesUrl).then((function(a){console.log("res",a),t.dataSource=a}))},gotoconfig:function(t){this.$router.push({path:this.gopath,query:{code:t}})}}},y=i,c=(e("6ad8"),e("0c7c")),p=Object(c["a"])(y,s,n,!1,null,"39505300",null);a["default"]=p.exports},c6fe:function(t,a,e){"use strict";var s={getPayTypes:"/pay/platform.pay/getPayTypes",getPayTypeInfo:"/pay/platform.pay/getPayTypeInfo",getChannels:"/pay/platform.pay/getChannels",getChannelInfo:"/pay/platform.pay/getChannelInfo",setChannelParams:"/pay/platform.pay/setChannelParams"};a["a"]=s}}]);