(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6efa754c"],{a19f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-20 ml-10 mr-10 mb-20 bg-ff pt-10 pb-10 pl-10 pr-10"},[e("div",{staticClass:"desc mb-20"},[e("span",{staticClass:"text-wrap"},[t._v(t._s(t.L("功能介绍")))]),e("ul",{staticClass:"desc-list-wrap"},t._l(t.descList,(function(a,r){return e("li",{key:r},[t._v(" "+t._s(t.L(a))+" ")])})),0)]),e("a-tabs",{on:{change:t.activeKeyChange},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.tabList,(function(a){return e("a-tab-pane",{key:a.key,attrs:{tab:t.L(a.tab)}},[e("a-form-model",{attrs:{model:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[1==t.activeKey?[e("a-form-model-item",{attrs:{label:t.L("是否开启修改地址")}},[e("a-radio-group",{model:{value:t.form.platform_allow,callback:function(e){t.$set(t.form,"platform_allow",e)},expression:"form.platform_allow"}},[e("a-radio",{attrs:{value:1}},[t._v(" "+t._s(t.L("开启"))+" ")]),e("a-radio",{attrs:{value:2}},[t._v(" "+t._s(t.L("禁止"))+" ")])],1)],1),e("a-form-model-item",{attrs:{label:t.L("支持业务")}},[e("a-checkbox-group",{model:{value:t.form.platform_type,callback:function(e){t.$set(t.form,"platform_type",e)},expression:"form.platform_type"}},t._l(t.bussinessList,(function(a){return e("a-checkbox",{key:a.value,attrs:{value:a.value,name:a.value}},[t._v(" "+t._s(t.L(a.label))+" ")])})),1)],1),e("a-form-model-item",{attrs:{label:t.L("可以修改地址订单状态")}},[e("a-radio-group",{attrs:{disabled:!0},model:{value:t.form.address_edit_order_status,callback:function(e){t.$set(t.form,"address_edit_order_status",e)},expression:"form.address_edit_order_status"}},t._l(t.orderStatusOption,(function(a){return e("a-radio",{key:a.value,attrs:{value:a.value}},[t._v(" "+t._s(t.L(a.label))+" ")])})),1)],1),e("a-form-model-item",{attrs:{label:t.L("多少公里内可以免费修改地址")}},[e("a-input-number",{attrs:{min:0,disabled:!0},model:{value:t.form.address_edit_distribution_distance,callback:function(e){t.$set(t.form,"address_edit_distribution_distance",e)},expression:"form.address_edit_distribution_distance"}}),e("span",{staticClass:"ml-10"},[t._v(t._s(t.L("公里")))])],1)]:t._e(),2==t.activeKey?[e("a-form-model-item",{attrs:{label:t.L("是否开启修改地址")}},[e("a-radio-group",{model:{value:t.form.merchant_allow,callback:function(e){t.$set(t.form,"merchant_allow",e)},expression:"form.merchant_allow"}},[e("a-radio",{attrs:{value:1}},[t._v(" "+t._s(t.L("开启"))+" ")]),e("a-radio",{attrs:{value:2}},[t._v(" "+t._s(t.L("禁止"))+" ")])],1)],1),e("a-form-model-item",{attrs:{label:t.L("支持业务")}},[e("a-checkbox-group",{model:{value:t.form.merchant_type,callback:function(e){t.$set(t.form,"merchant_type",e)},expression:"form.merchant_type"}},t._l(t.bussinessList,(function(a){return e("a-checkbox",{key:a.value,attrs:{value:a.value,name:a.value}},[t._v(" "+t._s(t.L(a.label))+" ")])})),1)],1),e("a-form-model-item",{attrs:{label:t.L("可以修改地址订单状态")}},[e("a-radio-group",{model:{value:t.form.order_status,callback:function(e){t.$set(t.form,"order_status",e)},expression:"form.order_status"}},t._l(t.orderStatusOption,(function(a){return e("a-radio",{key:a.value,attrs:{value:a.value}},[t._v(" "+t._s(t.L(a.label))+" ")])})),1)],1),e("a-form-model-item",{attrs:{label:t.L("多少公里内可以免费修改地址")}},[e("a-input-number",{attrs:{min:0},model:{value:t.form.distribution_distance,callback:function(e){t.$set(t.form,"distribution_distance",e)},expression:"form.distribution_distance"}}),e("span",{staticClass:"ml-10"},[t._v(t._s(t.L("公里")))])],1),e("a-form-model-item",{attrs:{label:t.L("是否开启店铺审核"),help:t.L("注：开启，用户修改收货地址需要商家店员进行审核才能成功；关闭，则无需审核。")}},[e("a-radio-group",{model:{value:t.form.has_check,callback:function(e){t.$set(t.form,"has_check",e)},expression:"form.has_check"}},[e("a-radio",{attrs:{value:1}},[t._v(" "+t._s(t.L("开启"))+" ")]),e("a-radio",{attrs:{value:2}},[t._v(" "+t._s(t.L("关闭"))+" ")])],1)],1)]:t._e(),e("a-form-model-item",{attrs:{"wrapper-col":{offset:6}}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v(t._s(t.L("保存")))])],1)],2)],1)})),1)],1)},s=[],o=a("8ee2"),i=(a("f597"),a("ea1d")),l={data:function(){return{descList:["1、商家开通自助修改地址服务后，消费者可以通过平台个人中心订单列表、订单详情页等入口自助提交修改收货地址申请。","2、自助修改地址服务可降低商家消费者改地址诉求导致的退款，同时也能提升商家接待效率。目前仅适用于外卖业务。","3、用户修改地址后，商家打印机会再次打印一张小票用于替换上一张小票，新的小票头部有修改地址订单字样。","4、用户修改地址后，店员端会有语音提醒用户修改地址。"],activeKey:"1",tabList:[{key:"1",tab:"平台配送"},{key:"2",tab:"商家配送"}],labelCol:{span:6},wrapperCol:{span:14},bussinessList:[{value:"shop",label:"外卖"}],orderStatusOption:[{value:1,label:"店铺接单前"},{value:2,label:"骑手接单前"},{value:3,label:"骑手到店前"}],form:{platform_allow:1,platform_type:[],address_edit_order_status:1,address_edit_distribution_distance:0,merchant_allow:1,merchant_type:[],order_status:1,distribution_distance:0,has_check:1}}},mounted:function(){this.getForm()},methods:{activeKeyChange:function(t){this.activeKey=t},getForm:function(){var t=this;this.request(i["a"].addressSettingConfig,{}).then((function(e){t.form=Object(o["a"])(Object(o["a"])({},e),{},{platform_allow:e.platform_allow-0,platform_type:e.platform_type?e.platform_type.split(","):[],address_edit_order_status:e.address_edit_order_status-0,address_edit_distribution_distance:e.address_edit_distribution_distance-0,merchant_allow:e.merchant_allow-0,merchant_type:e.merchant_type?e.merchant_type.split(","):[],order_status:e.order_status-0,distribution_distance:e.distribution_distance-0,has_check:e.has_check-0})}))},submitForm:function(){var t=this;if(1==this.form.platform_allow&&!this.form.platform_type.length)return this.$message.error(this.L("请选择平台配送支持业务")),void("1"!=this.activeKey&&(this.activeKey="1"));if(1==this.form.merchant_allow&&!this.form.merchant_type.length)return this.$message.error(this.L("请选择商家配送支持业务")),void("2"!=this.activeKey&&(this.activeKey="2"));var e=Object(o["a"])(Object(o["a"])({},this.form),{},{platform_type:this.form.platform_type.join(","),merchant_type:this.form.merchant_type.join(",")});this.request(i["a"].addressSettingEdit,e).then((function(e){t.$message.success(t.L("操作成功"))}))}}},n=l,c=(a("d239"),a("0b56")),d=Object(c["a"])(n,r,s,!1,null,"88571054",null);e["default"]=d.exports},d239:function(t,e,a){"use strict";a("d929")},d929:function(t,e,a){},ea1d:function(t,e,a){"use strict";var r={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode",addressSettingConfig:"/merchant/merchant.MerchantShopManagement/addressSetting",addressSettingEdit:"/merchant/merchant.MerchantShopManagement/addressSettingEdit"};e["a"]=r}}]);