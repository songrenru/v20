(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3f6da48","chunk-7a44152e"],{"3ade":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"shopping_Cart"},[e("div",{staticClass:"cart_left_wrapper"},[e("div",{staticClass:"orderTotal_info"},[e("div",{staticClass:"info_container"},[e("div",{staticClass:"left_infoContent"},[e("div",{staticClass:"table_orderTime"},[s.TABLE_INFO.id?e("div",{staticClass:"table"},[s._v(s._s(s.L("桌号"))+"："+s._s(s.TABLE_INFO.table_name))]):s._e(),e("div",{staticClass:"underbox"},[s._v(s._s(s.L("下单时间"))+"："+s._s(s.ORDER_INFO.create_time_str))])]),e("div",{staticClass:"table_orderTime"},[s.TABLE_INFO.id?e("div",{staticClass:"table"},[s._v(s._s(s.L("就餐人数"))+"："+s._s(s.ORDER_INFO.book_num))]):s._e(),e("div",{staticClass:"underbox"},[s._v(s._s(s.L("店员"))+"："+s._s(s.staffname))])])])])]),e("div",{staticClass:"slider_cart_wrapper"},[e("div",{staticClass:"slider_cart_container"},[e("div",{staticClass:"order_List"},s._l(s.ORDER_INFO.goods_detail,(function(t,i){return e("div",{key:i,staticClass:"pay_times_wrapper"},[s._l(t.goods_combine,(function(t,i){return e("div",{key:i,staticClass:"order_timers_list"},[s.TABLE_INFO.id||4==s.ORDER_INFO.order_from?e("div",{staticClass:"order_timers_title_info"},[e("div",{staticClass:"lefttitleText"},[s._v(s._s(t.number_str))]),e("div",{staticClass:"rightstate"},[s._v(s._s(t.status_str))])]):s._e(),s._l(t.goods,(function(s,t){return e("div",{key:t,staticClass:"order_items"},[e("orderGoodsItem",{attrs:{goods:s,pageType:"order"}})],1)})),t.refund_goods?e("div",s._l(t.refund_goods,(function(s,t){return e("div",{key:t,staticClass:"order_items",staticStyle:{position:"relative"}},[e("orderGoodsItem",{attrs:{goods:s,refund_goods:!0}})],1)})),0):s._e()],2)})),t.book_price>0?e("div",{staticClass:"book_price"},[s._v(" "+s._s(s.L("订金已抵扣"))+s._s(s.L("￥"))+s._s(t.book_price)+" ")]):s._e(),e("div",{staticClass:"order_price_info"},[t.pay_price?e("div",{staticClass:"priceInfo_content"},[e("div",{staticClass:"discount_money"},[s._v(s._s(s.L("优惠"))+s._s(s.L("￥"))+s._s(t.discount_price))]),e("div",{staticClass:"actual_payment"},[s._v(" "+s._s(s.L("实付"))+" "),e("span",[s._v(s._s(s.L("￥"))+s._s(t.pay_price))])])]):s._e()])],2)})),0)])]),e("div",{staticClass:"bottom_total_info_wrapper"},[e("div",{staticClass:"bottom_content"},[e("div",{staticClass:"topprice_content"},[e("div",{staticClass:"total_price_box"},[e("span",{staticClass:"total_count"},[s._v(s._s(s.L("共X1项",{X1:s.ORDER_INFO.go_pay_num})))]),e("span",[s._v("￥")]),s._v(" "+s._s(s.ORDER_INFO.goods_total_price)+" ")])])])])])])},a=[],o=e("8bbf"),_=e.n(o),r=e("9e03"),d={components:{orderGoodsItem:r["default"]},data:function(){return{staffname:"",ORDER_ID:"",TABLE_INFO:{},ORDER_INFO:{},PAGE_INFO:{}}},created:function(){this.ORDER_ID=this.$store.state.storestaff.nowOrderId,this.staffname=_.a.ls.get("storestaff_page_info").staff_name,this.getorderInfo()},methods:{getorderInfo:function(){var s=this;this.request("/foodshop/storestaff.order/orderDetail",{show_goods_detail:1,order_id:this.ORDER_ID}).then((function(t){console.log(t,"----------------------拿到订单数据---------------------"),s.PAGE_INFO=t,s.TABLE_INFO=t.table_info,s.ORDER_INFO=t.order}))},addmoreGoods:function(){this.$store.commit("changeleftState",1),this.$router.push({name:"menu",query:{orderId:this.ORDER_ID}})},openmodels:function(s){this.$emit(s)}}},n=d,c=(e("6ee6"),e("0c7c")),l=Object(c["a"])(n,i,a,!1,null,"1492510a",null);t["default"]=l.exports},"617e":function(s,t,e){},"6bf7":function(s,t,e){"use strict";e("617e")},"6ee6":function(s,t,e){"use strict";e("a9d5")},7109:function(s,t,e){s.exports=e.p+"img/return_dishes.f310e4e4.png"},"9e03":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",[i("div",{staticClass:"items_content"},[i("div",{staticClass:"mainCourse_info"},[i("div",{staticClass:"foodname_count"},[i("div",{staticClass:"foode_name"},[i("div",{staticClass:"name"},[s._v(" "+s._s(s.goods.name)+" ")]),s.goods.is_package_goods&&"order"==s.pageType?i("span",{staticClass:"verific_num"},[s._v(s._s(s.goods.verific_num&&0!=s.goods.verific_num?s.L("已核销X1份",{X1:s.goods.verific_num}):s.L("待核销")))]):s._e()]),i("div",{staticClass:"count"},[s._v("x"+s._s(s.goods.num))])]),i("div",{staticClass:"food_totalprice"},[s._v(s._s(s.L("￥"))+s._s(s.goods.total_price))])]),s.goods.is_staff?i("div",{staticClass:"only_straff"},[i("span",[s._v(s._s(s.L("由店员下单")))])]):s._e(),s.goods.is_must?i("div",{staticClass:"isMust"},[i("span",[s._v(s._s(s.L("必点")))])]):s._e(),i("div",{staticClass:"spec_info"},[s._v(s._s(s.goods.spec))]),s.goods.spec_sub?i("div",{staticClass:"accessory_dish"},[i("div",{staticClass:"accessory_tips"},[i("span",[s._v(" "+s._s(s.goods.is_package_goods?s.L("菜品"):s.L("附"))+" ")])]),i("div",{staticClass:"accessory_dish_info"},[s._v(s._s(s.goods.spec_sub))])]):s._e()]),s.refund_goods?i("div",{staticClass:"return_img"},[i("img",{attrs:{src:e("7109"),alt:""}})]):s._e()])},a=[],o=(e("8bbf"),{props:{goods:{type:[String,Object],default:""},refund_goods:{type:Boolean,default:!1},pageType:{type:String,default:""}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}}),_=o,r=(e("6bf7"),e("0c7c")),d=Object(r["a"])(_,i,a,!1,null,"cd11dd7c",null);t["default"]=d.exports},a9d5:function(s,t,e){}}]);