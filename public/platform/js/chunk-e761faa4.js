(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e761faa4"],{"61ce":function(s,o,t){"use strict";t.r(o);t("b0c0");var i=function(){var s=this,o=s._self._c;return s.goods?o("div",{staticClass:"table_card_items",class:s.goods.is_package_goods?"package_goods_item":"goods_item"},[s.goods.is_package_goods?o("div",{staticClass:"card_container package_goods_container",on:{click:function(o){return s.checkmenuFood(s.goods)}}},[s.goods.counts>0?o("div",{staticClass:"topbadge"},[o("div",[s._v(s._s(s.goods.counts))])]):s._e(),o("div",{staticClass:"package_name_price"},[o("span",{staticClass:"package_name"},[s._v(s._s(s.goods.product_name))]),o("span",{staticClass:"package_price"},[s._v("￥"+s._s(s.goods.product_price))])]),s.goods.subsidiary_piece&&s.goods.subsidiary_piece.length?o("div",{staticClass:"subsidiary_piece"},[s._l(s.goods.subsidiary_piece,(function(t,i){return[t.goods&&t.goods.length&&i<3?o("div",{key:i,staticClass:"subsidiary_piece_wrap"},[o("span",{staticClass:"subsidiary_piece_name"},[s._v(" "+s._s(t.name)+" ")]),o("div",{staticClass:"subsidiary_goods_wrap"},s._l(t.goods,(function(t,i){return o("span",{key:i,staticClass:"subsidiary_goods"},[s._v(" "+s._s(t.product_name)+" ")])})),0)]):s._e()]}))],2):s._e(),s.isClear?o("div",{staticClass:"card_shadow"}):s._e()]):o("div",{staticClass:"card_container"},[s.goods.counts>0?o("div",{staticClass:"topbadge"},[o("div",[s._v(s._s(s.goods.counts))])]):s._e(),o("div",{staticClass:"topcontent",on:{click:function(o){return s.checkmenuFood(s.goods)}}},[o("div",{staticClass:"tableinfo"},[o("div",{staticClass:"tablenumber"},[s._v(" "+s._s(s.goods.product_abbreviation?s.goods.product_abbreviation:s.goods.product_name)+" ")])]),!s.goods.has_format&&!s.goods.has_spec&&s.goods.mini_num&&s.goods.mini_num>1?o("div",{staticClass:"minCounts"},[s._v(" "+s._s(s.goods.mini_num>1?s.L("X1份起购",{X1:s.goods.mini_num}):"")+" ")]):s._e(),(s.goods.has_format||s.goods.has_spec)&&s.isClear?o("div",{staticClass:"minCounts"},[s._v(" "+s._s(s.L("多规格"))+" ")]):s._e(),o("div",{staticClass:"food_price"},[o("div",{staticClass:"left"},[s._v(s._s(s.L("￥"))+s._s(s.goods.product_price))]),s.goods.only_staff?o("div",{staticClass:"only_straff"},[o("span",[s._v(s._s(s.L("由店员下单")))])]):s._e()])]),o("div",{staticClass:"status_text",on:{click:function(o){return s.checkmenuFood(s.goods)}}},[s.goods.is_subsidiary_goods?o("div",{staticClass:"acs_food_tips"},[o("span",[s._v(s._s(s.L("附")))])]):s._e(),o("div",{staticClass:"food_fullname"},[s._v(s._s(s.goods.product_name))])]),s.goods.stock_num<s.goods.mini_num&&-1!=s.goods.stock_num||s.goods.is_sell_out?o("div",{staticClass:"card_shadow"}):s._e(),s.goods.stock_num<s.goods.mini_num&&-1!=s.goods.stock_num||s.goods.is_sell_out?o("div",{staticClass:"shortSale_tips"},[o("img",{attrs:{src:t("9896"),alt:""}})]):s._e()])]):s._e()},a=[],e=(t("a9e3"),{props:{goods:{type:[String,Object],default:""},ORDER_ID:{type:[String,Number],default:""},isClear:{type:Boolean,default:!1},otherpage:{type:[String,Number],default:""}},data:function(){return{}},created:function(){},mounted:function(){},methods:{checkmenuFood:function(s){var o=this;if(this.isClear)this.$emit("checkmenuFood",s);else if(s.has_format||s.has_spec||s.is_subsidiary_goods||s.is_package_goods)this.$router.push({name:"foodDetails",query:{orderId:this.ORDER_ID,productId:s.product_id,otherpage:this.otherpage,goodsType:s.is_package_goods?2:1}});else{this.$store.commit("changenowSelectgooodsNum","");var t={};t.productId=s.product_id,t.productName=s.product_name,t.productPrice=s.product_price,t.count=0==s.mini_num?"1":s.mini_num,t.uniqueness_number=s.product_id,t.productParam=[],t.host_goods_id=0,this.$store.commit("changenowSelectgooodsNum",t.uniqueness_number),this.$nextTick((function(){o.$emit("watchmenu",t)}))}}}}),d=e,c=(t("9f32"),t("2877")),n=Object(c["a"])(d,i,a,!1,null,"73d56037",null);o["default"]=n.exports},8915:function(s,o,t){},9896:function(s,o,t){s.exports=t.p+"img/shortSale.431d4467.png"},"9f32":function(s,o,t){"use strict";t("8915")}}]);