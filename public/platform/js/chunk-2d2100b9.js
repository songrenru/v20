(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2100b9"],{b5e5:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[e("router-link",{attrs:{to:{path:"/merchant/merchant.card/goodsList"}}},[e("a-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"default"}},[t._v(t._s(t.L("会员商品列表")))])],1),e("router-link",{attrs:{to:{path:"/merchant/merchant.card/goodsSort"}}},[e("a-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"default"}},[t._v(t._s(t.L("类型管理")))])],1),e("a-button",{attrs:{type:"default"},on:{click:function(a){return t.$refs.goodsModel.showEdit(0)}}},[t._v(" 添加商品 ")]),e("router-link",{attrs:{to:{path:"/merchant/merchant.card/verificationList"}}},[e("a-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"primary"}},[t._v(t._s(t.L("核销列表")))])],1),e("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:t.columns,rowKey:"id","data-source":t.datalist,pagination:t.pagination},scopedSlots:t._u([{key:"status",fn:function(a,n){return e("span",{},[1==a?e("span",[t._v(" 成功 ")]):e("span",{staticStyle:{color:"red"}},[t._v(" 失败 ")])])}}])}),e("goods-edit",{ref:"goodsModel",on:{loadRefresh:t.goGoodsList}})],1)},s=[],i=e("6c54"),o=e("7309"),r={components:{goodsEdit:o["default"]},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},datalist:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},columns:[{title:this.L("用户名称"),dataIndex:"username"},{title:this.L("用户手机号"),dataIndex:"phone"},{title:this.L("店铺名称"),dataIndex:"store_name"},{title:this.L("店员名称"),dataIndex:"staff_name"},{title:this.L("商品名称"),dataIndex:"goods_name"},{title:this.L("核销数量"),dataIndex:"num"},{title:this.L("核销状态"),dataIndex:"status",scopedSlots:{customRender:"status"},key:"status"},{title:this.L("核销日期"),dataIndex:"use_time"},{title:this.L("失败原因"),dataIndex:"error_msg",ellipsis:!0}]}},created:function(){this.getDataList(!1)},methods:{getDataList:function(){var t=this,a={};a.page=this.pagination.current,a.pageSize=this.pagination.pageSize,this.request(i["a"].getVerificationList,a).then((function(a){t.datalist=a.data,t.$set(t.pagination,"total",a.total)}))},goGoodsList:function(){this.$router.push({path:"/merchant/merchant.card/goodsList"})},onPageChange:function(t,a){this.$set(this.pagination,"current",t),this.getDataList()},onPageSizeChange:function(t,a){this.$set(this.pagination,"pageSize",a),this.getDataList()}}},d=r,c=e("0c7c"),l=Object(c["a"])(d,n,s,!1,null,null,null);a["default"]=l.exports}}]);