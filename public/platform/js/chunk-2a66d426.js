(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a66d426"],{"2d57":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"查看订单",visible:e.visible,"confirm-loading":e.confirmLoading,width:750,footer:null},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("div",{staticClass:"container"},e._l(e.propsList,(function(n,i){return t("div",{key:i,staticClass:"props_item"},[e._v(" "+e._s(n.key)+"："+e._s(n.value)+" ")])})),0),t("a-table",{attrs:{columns:e.columns,"data-source":e.tableList,loading:e.tableLoading,pagination:!1}})],1)},a=[],o=(n("a9e3"),[{title:"充电时段",key:"time",dataIndex:"time"},{title:"电费单价（元/度）",dataIndex:"ele_money",key:"ele_money"},{title:"服务费单价（元/度）",dataIndex:"serve_money",key:"serve_money"},{title:"充电度数",dataIndex:"use_ele",key:"use_ele"},{title:"费用",dataIndex:"use_money",key:"use_money"}]),l={props:{visible:{type:Boolean,default:!1},order_id:{type:Number,default:0}},watch:{visible:{handler:function(e){e&&this.getOrderDetail(this.order_id)},immediate:!0}},data:function(){return{confirmLoading:!1,propsList:[],columns:o,tableList:[],tableLoading:!1}},methods:{handleOk:function(){this.$emit("closeOrder")},handleCancel:function(){this.$emit("closeOrder")},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},handleSelectChange:function(e,t){console.log(e,t)},getOrderDetail:function(e){var t=this;t.tableLoading=!0,t.request("/community/village_api.Pile/getOrderDetail",{id:e}).then((function(e){t.propsList=e.list,t.tableList=e.charge_info,t.tableLoading=!1}))},viewCode:function(e){}}},s=l,d=(n("769a"),n("2877")),r=Object(d["a"])(s,i,a,!1,null,"3f662f56",null);t["default"]=r.exports},"769a":function(e,t,n){"use strict";n("9070")},9070:function(e,t,n){}}]);