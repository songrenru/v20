(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6fc5c84"],{"5e801":function(t,a,e){},"700f":function(t,a,e){"use strict";e("5e801")},8386:function(t,a,e){"use strict";var s={getPayTypes:"/pay/property.pay/getPayTypes",getPayTypeInfo:"/pay/property.pay/getPayTypeInfo",getChannels:"/pay/property.pay/getChannels",getChannelInfo:"/pay/property.pay/getChannelInfo",setChannelParams:"/pay/property.pay/setChannelParams"};a["a"]=s},"85f8":function(t,a,e){"use strict";var s={getPayTypes:"/pay/merchant.pay/getPayTypes",getPayTypeInfo:"/pay/merchant.pay/getPayTypeInfo",getChannels:"/pay/merchant.pay/getChannels",getChannelInfo:"/pay/merchant.pay/getChannelInfo",setChannelParams:"/pay/merchant.pay/setChannelParams"};a["a"]=s},"9a2f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"content",staticClass:"card-list"},[e("a-list",{attrs:{rowKey:"id",grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[[e("a-card",{attrs:{hoverable:!0},on:{click:function(e){return t.gotoconfig(a.code)}}},[e("a-card-meta",[e("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.text))]),e("a-avatar",{staticClass:"card-avatar",attrs:{slot:"avatar",src:a.icon,size:"large"},slot:"avatar"}),e("div",{staticClass:"meta-content",attrs:{slot:"description"},slot:"description"},[t._v(t._s(a.introduce))])],1),e("template",{staticClass:"ant-card-actions",slot:"actions"},[e("a",[t._v("去配置 >>>")])])],2)]],2)}}])})],1)},n=[],r=e("c6fe"),p=e("85f8"),y=e("8386"),o={name:"CardList",data:function(){return{dataSource:[],getPayTypesUrl:"",isSystem:1,gopath:""}},mounted:function(){console.log(this.$route.query,"this.$route.query"),-1!=this.$route.path.indexOf("merchant")?(this.getPayTypesUrl=p["a"].getPayTypes,this.gopath="/pay/merchant.paytype/index",this.isSystem=0):-1!=this.$route.path.indexOf("property")?(this.getPayTypesUrl=y["a"].getPayTypes,this.gopath="/property/property/pay/paytype",this.isSystem=2):(this.getPayTypesUrl=r["a"].getPayTypes,this.gopath="/pay/platform.paytype/index",this.isSystem=1),this.getPayTypes()},methods:{getPayTypes:function(){var t=this;this.request(this.getPayTypesUrl).then((function(a){console.log("res",a),t.dataSource=a}))},gotoconfig:function(t){this.$router.push({path:this.gopath,query:{code:t}})}}},i=o,c=(e("700f"),e("2877")),l=Object(c["a"])(i,s,n,!1,null,"27ac4465",null);a["default"]=l.exports},c6fe:function(t,a,e){"use strict";var s={getPayTypes:"/pay/platform.pay/getPayTypes",getPayTypeInfo:"/pay/platform.pay/getPayTypeInfo",getChannels:"/pay/platform.pay/getChannels",getChannelInfo:"/pay/platform.pay/getChannelInfo",setChannelParams:"/pay/platform.pay/setChannelParams"};a["a"]=s}}]);