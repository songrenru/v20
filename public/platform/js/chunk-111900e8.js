(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-111900e8","chunk-2d0b3786"],{2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var o=a("6b75");function r(t){if(Array.isArray(t))return Object(o["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=a("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||n(t)||Object(i["a"])(t)||s()}},"2e04":function(t,e,a){},5988:function(t,e,a){"use strict";var o={categoryList:"/foodshop/platform.StoreCategory/categoryList",getEditInfo:"/foodshop/platform.StoreCategory/getEditInfo",editSort:"/foodshop/platform.StoreCategory/editSort",delSort:"/foodshop/platform.StoreCategory/delSort",storeList:"/foodshop/platform.Store/storeList",saveSort:"/foodshop/platform.Store/saveSort",searchHotList:"/foodshop/platform.SearchHot/searchHotList",saveSearchHot:"/foodshop/platform.SearchHot/saveSearchHot",getSearchHotDetail:"/foodshop/platform.SearchHot/getSearchHotDetail",delSearchHot:"/foodshop/platform.SearchHot/delSearchHot",saveSearchHotSort:"/foodshop/platform.SearchHot/saveSort",orderList:"/foodshop/platform.order/orderList",orderDetail:"/foodshop/platform.order/orderDetail",orderExportUrl:"/foodshop/platform.order/export",merchantAutoLogin:"/foodshop/platform.login/merchantAutoLogin",staffAutoLogin:"/foodshop/platform.login/staffAutoLogin"};e["a"]=o},"5bfc":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-page-header",{staticStyle:{padding:"0 0 16px 0"},attrs:{title:"店铺列表"}},[a("template",{slot:"extra"},[a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"输入店铺名称"},on:{search:t.search}})],1),a("div",{staticStyle:{color:"#999"}},[t._v("商家添加店铺时，选择开启餐饮业务并完善资料后，店铺才会展示在此列表")])],2),a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",staticStyle:{"min-height":"700px"},attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([t._l(["store_sort"],(function(e){return{key:e,fn:function(o,r,n){return[a("div",{key:e},[r.editable?a("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[a("template",{slot:"title"},[t._v("值越大，店铺在餐饮首页排序越靠前。")]),a("a-input",{staticStyle:{margin:"-5px 2px",width:"56px"},attrs:{value:o},on:{change:function(a){return t.handleChange(a.target.value,r.key,e)}}})],2):[t._v(t._s(o))],a("span",{staticClass:"editable-row-operations"},[r.editable?a("span",[a("a",{on:{click:function(){return t.save(r.key)}}},[t._v("保存")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(){return t.cancel(r.key)}}},[t._v("取消")])],1):a("span",[a("a",{staticStyle:{"margin-left":"4px"},attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(r.key)}}},[t._v("编辑")])])])],2)]}}})),{key:"action",fn:function(e,o){return a("span",{},[t.isShow?a("a-button",{on:{click:function(e){return t.merchantLogin(o.mer_id)}}},[t._v("访问")]):t._e(),0==t.isShow?a("a-label",[t._v("暂无操作")]):t._e()],1)}}],null,!0)})],1)])],1)},r=[],n=a("2909"),i=a("5530"),s=(a("d81d"),a("4de4"),a("5988")),c=a("ca00"),d=a("e37c"),l=a("8bbf"),h=a.n(l),u=[],f={name:"StoreList",components:{},data:function(){return this.cacheData=u.map((function(t){return Object(i["a"])({},t)})),{form:this.$form.createForm(this),mdl:{},baseUrl:"/v20/public/platform/#",queryParam:{},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:"",page:1,columns:[{title:"店铺名称",dataIndex:"store_name",width:"30%"},{title:"店铺电话",dataIndex:"phone",width:"15%"},{title:"所属商家",dataIndex:"merchant_name",width:"15%"},{title:"创建时间",dataIndex:"last_time",width:"15%",sorter:!0},{title:"排序",dataIndex:"store_sort",width:"20%",scopedSlots:{customRender:"store_sort"},sorter:!0},{title:"操作",dataIndex:"action",width:"15%",scopedSlots:{customRender:"action"}}],data:u,isShow:1,order:{}}},created:function(){},mounted:function(){this.getStoreList()},methods:{getStoreList:function(){var t=this;this.queryParam["page"]=this.page,this.request(s["a"].storeList,this.queryParam).then((function(e){t.data=e.store_list,t.pagination.total=e.count,1==e.notShow&&(t.isShow=0)}))},search:function(t){console.log(t),this.queryParam["keyword"]=t,this.page=1,this.getStoreList()},tableChange:function(t,e,a){console.log("sorter",a),this.queryParam["pageSize"]=t.pageSize,this.order={},this.order[a.columnKey]=a.order,this.queryParam["order"]=this.order,t.current&&t.current>0&&(this.page=t.current),this.getStoreList()},handleChange:function(t,e,a){var o=Object(n["a"])(this.data),r=o.filter((function(t){return e===t.key}))[0];r&&(r[a]=t,this.data=o)},edit:function(t){var e=Object(n["a"])(this.data),a=e.filter((function(e){return t===e.key}))[0];this.editingKey=t,a&&(a.editable=!0,this.data=e)},save:function(t){var e=this,a=Object(n["a"])(this.data),o=Object(n["a"])(this.cacheData),r=a.filter((function(e){return t===e.key}))[0];o.filter((function(e){return t===e.key}))[0];r&&(delete r.editable,this.data=a,Object.assign(r,this.cacheData.filter((function(e){return t===e.key}))[0]),this.cacheData=o),this.request(s["a"].saveSort,{store_id:t,sort:r.store_sort}).then((function(t){e.getStoreList()})),this.editingKey=""},cancel:function(t){var e=Object(n["a"])(this.data),a=e.filter((function(e){return t===e.key}))[0];this.editingKey="",a&&(Object.assign(a,this.cacheData.filter((function(e){return t===e.key}))[0]),delete a.editable,this.data=e),this.getStoreList()},merchantLogin:function(t){var e=this;console.log("merId",t),this.request(s["a"].merchantAutoLogin,{mer_id:t}).then((function(t){var a=Object(c["k"])(d["a"].merchantIndex);h.a.ls.set(a,t.ticket,null),Object(c["m"])(a,t.ticket,null),window.open(e.baseUrl+d["a"].merchantIndex,"_blank")}))}}},p=f,m=(a("f03c"),a("2877")),g=Object(m["a"])(p,o,r,!1,null,"073fcb40",null);e["default"]=g.exports},f03c:function(t,e,a){"use strict";a("2e04")}}]);