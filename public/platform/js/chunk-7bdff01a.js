(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bdff01a"],{"61ce":function(s,o,t){"use strict";t.r(o);var e=function(){var s=this,o=s.$createElement,e=s._self._c||o;return s.goods?e("div",{staticClass:"table_card_items",class:s.goods.is_package_goods?"package_goods_item":"goods_item"},[s.goods.is_package_goods?e("div",{staticClass:"card_container package_goods_container",on:{click:function(o){return s.checkmenuFood(s.goods)}}},[s.goods.counts>0?e("div",{staticClass:"topbadge"},[e("div",[s._v(s._s(s.goods.counts))])]):s._e(),e("div",{staticClass:"package_name_price"},[e("span",{staticClass:"package_name"},[s._v(s._s(s.goods.product_name))]),e("span",{staticClass:"package_price"},[s._v("￥"+s._s(s.goods.product_price))])]),s.goods.subsidiary_piece&&s.goods.subsidiary_piece.length?e("div",{staticClass:"subsidiary_piece"},[s._l(s.goods.subsidiary_piece,(function(o,t){return[o.goods&&o.goods.length&&t<3?e("div",{key:t,staticClass:"subsidiary_piece_wrap"},[e("span",{staticClass:"subsidiary_piece_name"},[s._v(" "+s._s(o.name)+" ")]),e("div",{staticClass:"subsidiary_goods_wrap"},s._l(o.goods,(function(o,t){return e("span",{key:t,staticClass:"subsidiary_goods"},[s._v(" "+s._s(o.product_name)+" ")])})),0)]):s._e()]}))],2):s._e(),s.isClear?e("div",{staticClass:"card_shadow"}):s._e()]):e("div",{staticClass:"card_container"},[s.goods.counts>0?e("div",{staticClass:"topbadge"},[e("div",[s._v(s._s(s.goods.counts))])]):s._e(),e("div",{staticClass:"topcontent",on:{click:function(o){return s.checkmenuFood(s.goods)}}},[e("div",{staticClass:"tableinfo"},[e("div",{staticClass:"tablenumber"},[s._v(" "+s._s(s.goods.product_abbreviation?s.goods.product_abbreviation:s.goods.product_name)+" ")])]),!s.goods.has_format&&!s.goods.has_spec&&s.goods.mini_num&&s.goods.mini_num>1?e("div",{staticClass:"minCounts"},[s._v(" "+s._s(s.goods.mini_num>1?s.L("X1份起购",{X1:s.goods.mini_num}):"")+" ")]):s._e(),(s.goods.has_format||s.goods.has_spec)&&s.isClear?e("div",{staticClass:"minCounts"},[s._v(" "+s._s(s.L("多规格"))+" ")]):s._e(),e("div",{staticClass:"food_price"},[e("div",{staticClass:"left"},[s._v(s._s(s.L("￥"))+s._s(s.goods.product_price))]),s.goods.only_staff?e("div",{staticClass:"only_straff"},[e("span",[s._v(s._s(s.L("由店员下单")))])]):s._e()])]),e("div",{staticClass:"status_text",on:{click:function(o){return s.checkmenuFood(s.goods)}}},[s.goods.is_subsidiary_goods?e("div",{staticClass:"acs_food_tips"},[e("span",[s._v(s._s(s.L("附")))])]):s._e(),e("div",{staticClass:"food_fullname"},[s._v(s._s(s.goods.product_name))])]),s.goods.stock_num<s.goods.mini_num&&-1!=s.goods.stock_num||s.goods.is_sell_out?e("div",{staticClass:"card_shadow"}):s._e(),s.goods.stock_num<s.goods.mini_num&&-1!=s.goods.stock_num||s.goods.is_sell_out?e("div",{staticClass:"shortSale_tips"},[e("img",{attrs:{src:t("9896"),alt:""}})]):s._e()])]):s._e()},i=[],a=(t("a9e3"),{props:{goods:{type:[String,Object],default:""},ORDER_ID:{type:[String,Number],default:""},isClear:{type:Boolean,default:!1},otherpage:{type:[String,Number],default:""}},data:function(){return{}},created:function(){},mounted:function(){},methods:{checkmenuFood:function(s){var o=this;if(console.log(s,"info"),console.log(this.$store.state.storestaff.nowSelectgooodsNum,"nowSelectgooodsNum"),this.isClear)this.$emit("checkmenuFood",s);else if(s.has_format||s.has_spec||s.is_subsidiary_goods||s.is_package_goods)this.$router.push({name:"foodDetails",query:{orderId:this.ORDER_ID,productId:s.product_id,otherpage:this.otherpage,goodsType:s.is_package_goods?2:1}});else{this.$store.commit("changenowSelectgooodsNum","");var t={};t.productId=s.product_id,t.productName=s.product_name,t.productPrice=s.product_price,t.count=0==s.mini_num?"1":s.mini_num,t.uniqueness_number=s.product_id,t.productParam=[],t.host_goods_id=0,console.log(t,"checkObj"),this.$store.commit("changenowSelectgooodsNum",t.uniqueness_number),this.$nextTick((function(){console.log("watchmenu----111111"),o.$emit("watchmenu",t)}))}}}}),c=a,d=(t("eb06c"),t("0c7c")),n=Object(d["a"])(c,e,i,!1,null,"960e2304",null);o["default"]=n.exports},9896:function(s,o,t){s.exports=t.p+"img/shortSale.431d4467.png"},df88:function(s,o,t){},eb06c:function(s,o,t){"use strict";t("df88")}}]);