(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cbe64ac6","chunk-112c6452","chunk-112c6452"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function o(e,t,r,o,a,n,i){try{var c=e[n](i),p=c.value}catch(u){return void r(u)}c.done?t(p):Promise.resolve(p).then(o,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function c(e){o(i,a,n,c,p,"next",e)}function p(e){o(i,a,n,c,p,"throw",e)}c(void 0)}))}}},"1fac":function(e,t,r){},"4f2c":function(e,t,r){"use strict";var o={propertyGetOrderPackage:"/community/property_api.PrivilagePackage/getOrderPackage",propertyGetPackageRoom:"/community/property_api.PrivilagePackage/getPackageRoom",propertyGetPackageRoomList:"/community/property_api.PrivilagePackage/getPackageRoomList",propertyCreateOrder:"/community/property_api.PrivilagePackage/createOrder",propertygetRoomOrderPrice:"/community/property_api.PrivilagePackage/getRoomOrderPrice",propertyCreateRoomOrderNew:"/community/property_api.PrivilagePackage/createRoomOrderNew",propertyGetPayType:"/community/property_api.PrivilagePackage/getPayType",propertyCreateQrCode:"/community/property_api.PrivilagePackage/createQrCode",propertyCreateRoomQrCode:"/community/property_api.PrivilagePackage/createRoomQrCode",propertyQueryOrderPayStatus:"/community/property_api.PrivilagePackage/queryOrderPayStatus",propertyGetRoomList:"/community/property_api.RoomPackage/getRoomList",propertyGetBuyRoom:"/community/property_api.RoomPackage/getBuyRoom",propertyCreateRoomOrder:"/community/property_api.RoomPackage/createRoomOrder",propertyRoomCreateQrCode:"/community/property_api.RoomPackage/createQrCode",propertyRoomQueryOrderPayStatus:"/community/property_api.RoomPackage/queryOrderPayStatus",propertyGetPrivilagePackage:"/community/property_api.BuyPackage/getPrivilagePackage",propertyGetRoomPackage:"/community/property_api.BuyPackage/getRoomPackage",chargeTimeInfo:"/community/property_api.ChargeTime/takeEffectTimeInfo",setChargeTime:"/community/property_api.ChargeTime/takeEffectTimeSet",chargeNumberList:"/community/property_api.ChargeTime/chargeNumberList",chargeNumberInfo:"/community/property_api.ChargeTime/chargeNumberInfo",addChargeNumber:"/community/property_api.ChargeTime/addChargeNumber",editChargeNumber:"/community/property_api.ChargeTime/editChargeNumber",getChargeType:"/community/property_api.ChargeTime/getChargeType",chargeWaterType:"/community/property_api.ChargeTime/chargeWaterType",offlinePayList:"/community/property_api.ChargeTime/offlinePayList",offlinePayInfo:"/community/property_api.ChargeTime/offlinePayInfo",addOfflinePay:"/community/property_api.ChargeTime/addOfflinePay",editOfflinePay:"/community/property_api.ChargeTime/editOfflinePay",delOfflinePay:"/community/property_api.ChargeTime/delOfflinePay",getCountFeeList:"/community/property_api.ChargeTime/countVillageFee",villageLogin:"/community/property_api.ChargeTime/village_login",frameworkTissueNav:"/community/common.Framework/getTissueNav",frameworkTissueUser:"/community/common.Framework/getTissueUser",frameworkGroupParam:"/community/common.Framework/getGroupParam",frameworkPropertyVillage:"/community/common.Framework/getPropertyVillage",frameworkOrganizationAdd:"/community/common.Framework/organizationAdd",frameworkOrganizationQuery:"/community/common.Framework/organizationQuery",frameworkOrganizationSub:"/community/common.Framework/organizationSub",frameworkOrganizationDel:"/community/common.Framework/organizationDel",frameworkWorkerAdd:"/community/common.Framework/workerAdd",frameworkWorkerSub:"/community/common.Framework/workerSub",powerRoleList:"/community/property_api.Power/getRoleList",powerRoleDel:"/community/property_api.Power/roleDel",propertyConfigSetApi:"/community/property_api.Property/config",passwordChangeApi:"/community/property_api.Property/passwordChange",digitApi:"/community/property_api.Property/digit",saveDigitApi:"/community/property_api.Property/saveDigit",ajaxProvince:"/community/property_api.Property/ajaxProvince",ajaxCity:"/community/property_api.Property/ajaxCity",ajaxArea:"/community/property_api.Property/ajaxArea",saveConfig:"/community/property_api.Property/saveConfig",loginLogList:"/community/property_api.Security/loginLog",loginLogDetail:"/community/property_api.Security/loginLogDetail",commonLog:"/community/property_api.Security/commonLog",commonLogDetail:"/community/property_api.Security/commonLogDetail"};t["a"]=o},"585c":function(e,t,r){"use strict";r("1fac")},a5bd:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[r("a-collapse",{attrs:{accordion:""}},[r("a-collapse-panel",{key:"1",attrs:{header:"相关说明"}},[r("div",{staticClass:"count-fee-list-tip-box"},[r("a-alert",{attrs:{message:"",type:"info"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("div",[e._v("以下展示的是物业下对应小区所有相关账单统计（不包含作废的账单）；")]),r("div",[e._v("1、【应收费用】：未支付的账单应收总金额统计（不包含作废的账单）；")]),r("div",[e._v("2、【已收费用】：已经支付的账单实际用户支付金额统计（不包含已经退款的，不包含作废的账单）；")]),r("div",[e._v("3、【查看详情】：点击可直接跳转对应小区查看应收账单相关信息；")])])])],1)])],1),r("a-card",{attrs:{bordered:!1}},[r("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t,o){return r("span",{},[r("a",{on:{click:function(t){return e.goTo(o.village_id)}}},[e._v("查看详情")])])}}])})],1)],1)},a=[],n=r("4f2c"),i=(r("b8f9"),r("8bbf")),c=r.n(i),p=r("ca00"),u=[{title:"小区名称",dataIndex:"village_name",key:"village_name"},{title:"应收费用",dataIndex:"total_money",key:"total_money"},{title:"已收费用",dataIndex:"pay_money",key:"pay_money"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],m={name:"countFeeList",components:{},data:function(){return{list:[],id:0,columns:u}},mounted:function(){this.getCountFeeList()},methods:{getCountFeeList:function(){var e=this;this.request(n["a"].getCountFeeList).then((function(t){console.log("res",t),e.list=t}))},goTo:function(e){this.request(n["a"].villageLogin,{village_id:e}).then((function(e){console.log("res",e),""!=e.ticket&&(console.log("ticket",e.ticket),c.a.ls.set("village_access_token",e.ticket,null),Object(p["n"])("village_access_token",e.ticket,null),window.open(location.protocol+"//"+location.host+"/v20/public/platform/#/village/village.charge.cashier/receivableOrderList"))}))}}},y=m,l=(r("585c"),r("0c7c")),s=Object(l["a"])(y,o,a,!1,null,"17eb3a40",null);t["default"]=s.exports},c7eb:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var o=r("53ca");function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},p=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",m=c.toStringTag||"@@toStringTag";function y(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{y({},"")}catch(e){y=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var a=t&&t.prototype instanceof w?t:w,n=Object.create(a.prototype),c=new S(o||[]);return i(n,"_invoke",{value:T(e,r,c)}),n}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var f="suspendedStart",g="suspendedYield",h="executing",d="completed",v={};function w(){}function P(){}function _(){}var k={};y(k,p,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(F([])));L&&L!==r&&n.call(L,p)&&(k=L);var C=_.prototype=w.prototype=Object.create(k);function O(e){["next","throw","return"].forEach((function(t){y(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(a,i,c,p){var u=s(e[a],e,i);if("throw"!==u.type){var m=u.arg,y=m.value;return y&&"object"==Object(o["a"])(y)&&n.call(y,"__await")?t.resolve(y.__await).then((function(e){r("next",e,c,p)}),(function(e){r("throw",e,c,p)})):t.resolve(y).then((function(e){m.value=e,c(m)}),(function(e){return r("throw",e,c,p)}))}p(u.arg)}var a;i(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,a){r(e,o,t,a)}))}return a=a?a.then(n,n):n()}})}function T(t,r,o){var a=f;return function(n,i){if(a===h)throw new Error("Generator is already running");if(a===d){if("throw"===n)throw i;return{value:e,done:!0}}for(o.method=n,o.arg=i;;){var c=o.delegate;if(c){var p=R(c,o);if(p){if(p===v)continue;return p}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(a===f)throw a=d,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a=h;var u=s(t,r,o);if("normal"===u.type){if(a=o.done?d:g,u.arg===v)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(a=d,o.method="throw",o.arg=u.arg)}}}function R(t,r){var o=r.method,a=t.iterator[o];if(a===e)return r.delegate=null,"throw"===o&&t.iterator["return"]&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),v;var n=s(a,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,v;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[p];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(Object(o["a"])(t)+" is not iterable")}return P.prototype=_,i(C,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:P,configurable:!0}),P.displayName=y(_,m,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===P||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,y(e,m,"GeneratorFunction")),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},O(x.prototype),y(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,o,a,n){void 0===n&&(n=Promise);var i=new x(l(e,r,o,a),n);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(C),y(C,m,"Generator"),y(C,p,(function(){return this})),y(C,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=F,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(o,a){return c.type="throw",c.arg=t,r.next=o,a&&(r.method="next",r.arg=e),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var p=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(p&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(p){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var a=o.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:F(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),v}},t}}}]);