(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75975890"],{"1ec3":function(t,e,a){"use strict";a("c1c7")},"91cf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator"}),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:!1,rowKey:"id",loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"status",fn:function(e,n){return a("span",{},[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭","data-id":n.id,"default-checked":1==e},on:{change:function(e){return t.statusChange(e,n.id)}}})],1)}},{key:"template_key",fn:function(e,n){return a("span",{},[""==e?a("a-button",{on:{click:function(e){return t.addTemplate(n.id)}}},[t._v("一键获取")]):t._e(),e?a("span",{staticClass:"template_key"},[t._v(t._s(e))]):t._e()],1)}},{key:"image",fn:function(e){return a("span",{},[a("div",{staticClass:"right-c"},[a("div",{staticClass:"img-wrap"},[a("a-popover",{attrs:{placement:"left"}},[a("template",{slot:"content"},[a("img",{staticClass:"goods-image-big",attrs:{src:e}})]),t._v(" 预览 ")],2)],1)])])}}])})],1)},s=[],i=(a("c1df"),a("2af9")),c={getWxappTemplateList:"/common/platform.weixin.WxappTemplate/getWxappTemplateList",editWxappTemplate:"/common/platform.weixin.WxappTemplate/editWxappTemplate",addTemplate:"/common/platform.weixin.WxappTemplate/addTemplate"},l=c,o={name:"MenuList",components:{STable:i["o"],Ellipsis:i["g"]},data:function(){return{mdl:{},advanced:!1,queryParam:{},loading:!0,list:[],columns:[{title:"标题",dataIndex:"title"},{title:"所属类目",dataIndex:"category"},{title:"推送规则",dataIndex:"rule"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"模板ID",dataIndex:"template_key",scopedSlots:{customRender:"template_key"}},{title:"预览",dataIndex:"image",scopedSlots:{customRender:"image"}}]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.request(l.getWxappTemplateList).then((function(e){t.list=e.list,t.loading=!1}))},handleOk:function(){this.$refs.table.refresh()},tableChange:function(){},statusChange:function(t,e){var a=this,n=1==t?1:0,s={id:e,status:n};e&&this.request(l.editWxappTemplate,s).then((function(t){a.$message.success(t.msg)}))},addTemplate:function(t){var e=this;this.request(l.addTemplate,{id:t}).then((function(t){e.$message.success(t.msg),e.getList()}))}}},d=o,p=(a("1ec3"),a("0c7c")),r=Object(p["a"])(d,n,s,!1,null,"76435d64",null);e["default"]=r.exports},c1c7:function(t,e,a){}}]);