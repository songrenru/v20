(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46728e60"],{"0550":function(t,s,o){},af53:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"clear_wrapper"},[e("div",{staticClass:"left_wrapper"},[e("div",{staticClass:"headertop_content"},[e("div",{staticClass:"pagetitle"},[t._v(t._s(t.L("点菜单")))])]),e("div",{staticClass:"headerbottom_content"},[e("div",{staticClass:"white_info_wrapper"},[e("div",{staticClass:"shopping_Cart"},[e("div",{staticClass:"cart_left_wrapper"},[e("div",{staticClass:"orderTotal_info"},[e("div",{staticClass:"info_container"},[e("div",{staticClass:"left_infoContent"},[e("div",{staticClass:"table_orderTime"},[e("div",{staticClass:"table"},[t._v(t._s(t.L("下单时间"))+"："+t._s(t.ORDER_INFO.create_time_str))])]),e("div",{staticClass:"table_orderTime"},[e("div",{staticClass:"table"},[t._v(t._s(t.L("店员"))+"："+t._s(t.staffname))])])])])]),e("div",{staticClass:"slider_cart_wrapper"},[e("div",{staticClass:"slider_cart_container"},[e("div",{staticClass:"order_List"},t._l(t.PAGE_INFO.goods_list,(function(s,o){return e("div",{key:o,staticClass:"order_items",class:s.is_selected?"selected_item":"",on:{click:function(s){return t.selectFood(o)}}},[e("div",{staticClass:"items_content"},[e("div",{staticClass:"mainCourse_info"},[e("div",{staticClass:"foodname_count"},[e("div",{staticClass:"foode_name"},[s.only_staff?e("div",{staticClass:"only_straff"},[e("span",[t._v(t._s(t.L("由店员下单")))])]):t._e(),e("div",{staticClass:"name"},[t._v(t._s(s.name))])]),e("div",{staticClass:"count"},[t._v("x"+t._s(s.num))])]),e("div",{staticClass:"food_totalprice"},[t._v("￥"+t._s(s.total_price))])]),s.is_must?e("div",{staticClass:"isMust"},[e("span",[t._v(t._s(t.L("必点")))])]):t._e(),e("div",{staticClass:"spec_info"},[t._v(t._s(s.spec))]),s.spec_sub?e("div",{staticClass:"accessory_dish"},[e("div",{staticClass:"accessory_tips"},[e("span",[t._v(t._s(t.L("附")))])]),e("div",{staticClass:"accessory_dish_info"},[t._v(t._s(s.spec_sub))])]):t._e()])])})),0)])]),e("div",{staticClass:"bottom_tatol_info_wrapper"},[e("div",{staticClass:"tatol_info_container"},[e("div",{staticClass:"order_food_info"},[e("div",{staticClass:"order_tatol_num"},[t._v(t._s(t.L("已加菜X1项",{X1:t.PAGE_INFO.num})))]),e("div",{staticClass:"order_tatol_price"},[e("span",[t._v("￥")]),t._v(" "+t._s(t.PAGE_INFO.total_price)+" ")])]),e("div",{staticClass:"confirmOrder_btn",class:t.canshow?"cantOrder":"",on:{click:function(s){return t.confirmOrder()}}},[t._v(" "+t._s(t.L("确定下单"))+" ")])])])]),e("div",{staticClass:"cart_right_wrapper"},[e("div",{staticClass:"food_operation"},[t.nowSelectgooods.num?e("div",{staticClass:"change_num"},[e("div",{staticClass:"reduce_icon",on:{click:function(s){return t.reduceFoodcount()}}},[e("a-icon",{attrs:{type:"minus"}})],1),e("div",{staticClass:"countnum"},[t._v(t._s(t.nowSelectgooods.num))]),e("div",{staticClass:"add_icon",on:{click:function(s){return t.addFoodcount()}}},[e("a-icon",{attrs:{type:"plus"}})],1)]):t._e(),e("div",{staticClass:"clean_up"},[e("div",{staticClass:"clean_up_btn",class:t.canshow?"cantOrder":"",on:{click:function(s){return t.clearallgoods()}}},[t._v(" "+t._s(t.L("清空"))+" ")])])])])])])])]),e("div",{staticClass:"right_wrapper"},[e("div",{staticClass:"menu_wrapper"},[e("div",{staticClass:"header_info_container"},[e("div",{staticClass:"header_left_content"},[e("div",{staticClass:"header_title"},[t._v(t._s(t.L("菜单")))])]),e("div",{staticClass:"refresh_box",class:t.animateshow?"rotatecls":"",on:{click:function(s){return t.addanimate()}}},[e("a-icon",{staticClass:"iconfont",attrs:{type:"reload"}})],1)]),e("div",{staticClass:"body_cashier_container"},[e("div",{staticClass:"tablesize_container"},[e("div",{staticClass:"switchbox",class:t.foodnavshow?"":"hiddenbox"},[e("div",{staticClass:"leftslidericon"},[e("div",{staticClass:"iconfont circlebox",on:{click:function(s){return t.slidetoleft()}}},[e("img",{attrs:{src:o("cb7bc"),alt:""}})])]),e("div",{ref:"slidercontent",staticClass:"center_slider_container",attrs:{id:"slidercontent"}},[e("div",{ref:"sliderbox",staticClass:"sliderList_content",on:{mousewheel:t.changeslidernum}},t._l(t.foodMenu,(function(s,o){return e("div",{key:o,staticClass:"table_items",class:t.tableCurrent==o?"table_items_active":"",on:{click:function(s){return t.screenFoodtype(o)}}},[e("div",{staticClass:"items_content"},[e("div",{staticClass:"table_name",staticStyle:{position:"relative"}},[e("span",[t._v(t._s(s.cat_name))]),s.counts>0?e("span",{staticClass:"table_count",staticStyle:{position:"absolute"}},[t._v(t._s(s.counts))]):t._e()]),e("div",{staticClass:"bottomborder"})])])})),0)]),e("div",{staticClass:"rightslidericon"},[e("div",{staticClass:"iconfont circlebox",on:{click:function(s){return t.slidetoright()}}},[e("img",{attrs:{src:o("c13d"),alt:""}})])])]),e("div",{staticClass:"search_content",class:t.foodnavshow?"":"searching_box"},[e("div",{staticClass:"searchiconbox",on:{click:function(s){return t.searchFood()}}},[e("img",{attrs:{src:o("bcac"),alt:""}})]),t.foodnavshow?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],ref:"selfinput",staticClass:"self_input",attrs:{type:"text",placeholder:t.L("请输入菜品名称")},domProps:{value:t.searchText},on:{input:[function(s){s.target.composing||(t.searchText=s.target.value)},function(s){return t.keyWordsearch()}]}}),t.foodnavshow?t._e():e("div",{staticClass:"forkiconbox",on:{click:function(s){return t.forkclk()}}},[e("img",{attrs:{src:o("8c162"),alt:""}})])])]),e("a-spin",{staticClass:"changecolor",staticStyle:{height:"75%"},attrs:{spinning:t.loadingdata,indicator:t.indicator,size:"large"}}),t.loadingdata?t._e():e("div",{staticClass:"tableList_wrapper"},[e("div",{staticClass:"table_list_sliderbox"},t._l(t.goods_list,(function(s,i){return e("div",{key:i,staticClass:"table_card_items"},[e("div",{staticClass:"card_container"},[s.counts>0?e("div",{staticClass:"topbadge"},[e("div",[t._v(t._s(s.counts))])]):t._e(),e("div",{staticClass:"topcontent",on:{click:function(o){return t.checkmenuFood(s)}}},[e("div",{staticClass:"tableinfo"},[e("div",{staticClass:"tablenumber"},[t._v(" "+t._s(s.product_abbreviation?s.product_abbreviation:s.product_name)+" ")])]),e("div",{staticClass:"minCounts"},[t._v(t._s(s.mini_num>1?t.L("X1份起购",{X1:s.mini_num}):""))]),e("div",{staticClass:"food_price"},[e("div",{staticClass:"left"},[t._v("￥"+t._s(s.product_price))]),s.only_staff?e("div",{staticClass:"only_straff"},[e("span",[t._v(t._s(t.L("由店员下单")))])]):t._e()])]),e("div",{staticClass:"status_text",on:{click:function(o){return t.checkmenuFood(s)}}},[s.is_subsidiary_goods?e("div",{staticClass:"acs_food_tips"},[e("span",[t._v(t._s(t.L("附")))])]):t._e(),e("div",{staticClass:"food_fullname"},[t._v(t._s(s.product_name))])]),s.stock_num<s.mini_num&&-1!=s.stock_num||s.is_sell_out?e("div",{staticClass:"card_shadow"}):t._e(),s.stock_num<s.mini_num&&-1!=s.stock_num||s.is_sell_out?e("div",{staticClass:"shortSale_tips"},[e("img",{attrs:{src:o("9896"),alt:""}})]):t._e()])])})),0),t.goods_list?t._e():e("div",{staticClass:"emptyTips"},[e("div",[t._v(t._s(t.L("暂无菜品")))])])])],1)])])])},i=[],n=(o("b680"),o("ac1f"),o("5319"),o("d3b7"),o("159b"),o("d81d"),o("8bbf")),a=o.n(n),c=o("22b5"),r={components:{},data:function(){var t=this.$createElement;return{ORDER_ID:"",staffname:"",animateshow:!1,loadingdata:!0,indicator:t("a-icon",{attrs:{type:"loading-3-quarters","font-size":"30px",spin:!0}}),tableCurrent:0,listenopen:!1,warningShow:!1,foodnavshow:!0,goods_list:"",foodMenu:"",canshow:!0,slideshake:!0,numTween:0,leftscroll:0,slidercontentwidth:"",sliderwidth:"",searchText:"",PAGE_INFO:{},ORDER_INFO:{},nowSelectgooods:"",nowSelectgooodsNum:"",buffer:!0}},watch:{"$store.state.storestaff.nowSelectgooodsNum":function(t,s){this.nowSelectgooodsNum=t,console.log(t)},numTween:function(t,s){var o=this;function e(){c["a"].update()&&requestAnimationFrame(e)}new c["a"].Tween({number:s}).to({number:t},100).onUpdate((function(t){o.leftscroll=t.number.toFixed(0),document.getElementById("slidercontent").scrollLeft=o.leftscroll,o.leftscroll-document.getElementById("slidercontent").scrollLeft>150&&(o.numTween=document.getElementById("slidercontent").scrollLeft)})).start(),e()}},mounted:function(){var t=this;this.$emit("getcurrent","orderQuickly"),this.staffname=a.a.ls.get("storestaff_page_info").staff_name,this.getAllfood(),this.getOrderinfo(),this.$route.query.clean?this.$store.commit("changenowSelectgooodsNum",""):console.log(this.$store.state.storestaff.nowSelectgooodsNum),setTimeout((function(){t.sliderwidth=window.getComputedStyle(t.$refs.sliderbox).width.replace("px",""),t.slidercontentwidth=window.getComputedStyle(t.$refs.slidercontent).width.replace("px",""),t.foodMenu&&t.screenFoodtype(0)}),200)},methods:{uplaodMenufc:function(t){var s=this;console.log(t),t.goods_list.length>0?(this.foodMenu.length&&this.foodMenu.forEach((function(o,e){o.counts=0,o.goods_list.forEach((function(s,e){s.counts=0,t.goods_list.forEach((function(t){s.product_id==t.goods_id&&(s.counts+=t.num)})),s.counts>0&&(o.counts+=s.counts)})),s.$set(s.foodMenu,e,o)})),console.log(this.foodMenu)):this.foodMenu.length&&this.foodMenu.forEach((function(t,o){t.counts=0,t.goods_list.forEach((function(t,s){t.counts=0})),s.$set(s.foodMenu,o,t)}))},getAllfood:function(){var t=this;this.loadingdata=!0,this.request("/foodshop/storestaff.goods/goodsListTree",{is_clear_stock:1}).then((function(s){console.log(s,"----------------------菜单数据获取---------------------"),t.loadingdata=!1,t.foodMenu=s,t.screenFoodtype(t.tableCurrent)}))},getOrderinfo:function(){var t=this;this.request("/foodshop/storestaff.order/quickOrder").then((function(s){console.log(s,"----------------------获取订单信息---------------------"),t.ORDER_ID=s.order_id,t.getShopcartInfo()}))},getShopcartInfo:function(){var t=this;this.request("/foodshop/storestaff.order/cartDetail",{order_id:this.ORDER_ID}).then((function(s){console.log(s,"----------------------拿到购物车数据---------------------"),t.PAGE_INFO=s,t.ORDER_INFO=s.order.order,t.uplaodMenufc(s),t.PAGE_INFO.goods_list.length>0?t.canshow=!1:t.canshow=!0,t.initData()}))},initData:function(){var t=this;if(console.log(this.$store.state.storestaff.nowSelectgooodsNum),this.PAGE_INFO.goods_list.length>0){this.PAGE_INFO.goods_list.map((function(s){t.$store.state.storestaff.nowSelectgooodsNum==s.uniqueness_number?(s.is_selected=!0,t.nowSelectgooods=s,t.nowSelectgooodsNum=s.uniqueness_number):s.is_selected=!1}));var s=this.PAGE_INFO.goods_list.some((function(s){return s.uniqueness_number==t.nowSelectgooods.uniqueness_number}));console.log(s),s||(this.nowSelectgooods="",this.nowSelectgooodsNum="",this.$store.commit("changenowSelectgooodsNum",""))}else this.nowSelectgooods="",this.nowSelectgooodsNum="",this.$store.commit("changenowSelectgooodsNum","")},checkmenuFood:function(t){var s=this;if(console.log(t),console.log(this.$store.state.storestaff.nowSelectgooodsNum),t.has_format||t.has_spec||t.is_subsidiary_goods)this.$router.push({name:"foodDetails",query:{orderId:this.ORDER_ID,productId:t.product_id,otherpage:4}});else{this.$store.commit("changenowSelectgooodsNum","");var o={};o.productId=t.product_id,o.productName=t.product_name,o.productPrice=t.product_price,o.count=0==t.mini_num?"1":t.mini_num,o.uniqueness_number=t.product_id,o.productParam=[],o.host_goods_id=0,console.log(o),this.$store.commit("changenowSelectgooodsNum",o.uniqueness_number),this.$nextTick((function(){s.watchmenu(o)}))}},watchmenu:function(t){var s=this;if(console.log(this.nowSelectgooodsNum),this.nowSelectgooodsNum){var o=this.PAGE_INFO.goods_list.some((function(t){return t.uniqueness_number==s.nowSelectgooodsNum}));console.log(o),o?this.PAGE_INFO.goods_list.forEach((function(t,o){console.log(t),t.uniqueness_number==s.nowSelectgooodsNum?(s.nowSelectgooods=t,t.is_selected=!0,t.nowSelectgooodsNum=t.uniqueness_number,s.addFoodcount()):t.is_selected=!1,s.$set(s.PAGE_INFO.goods_list,o,t)})):this.request("/foodshop/storestaff.order/addCart",{order_id:this.ORDER_ID,product:t.length?t:[t],number:0==t.mini_num?"1":t.mini_num,operate_type:0}).then((function(t){console.log(t,"----------------------加减购物车---------------------"),t.msg!=s.L("商品已售罄")&&"商品已售罄"!=t.msg||s.$message.error(s.L("商品已售罄!")),s.getShopcartInfo()}))}},selectFood:function(t){var s=this;this.PAGE_INFO.goods_list.forEach((function(o,e){t==e?(o.is_selected=!0,o.is_selected&&(s.nowSelectgooods=o,s.$store.commit("changenowSelectgooodsNum",o.uniqueness_number))):o.is_selected=!1,s.$set(s.PAGE_INFO.goods_list,e,o)})),this.$forceUpdate()},reduceFoodcount:function(){var t=this;if(this.buffer){if(this.buffer=!1,console.log(this.nowSelectgooods),this.nowSelectgooods.num>this.nowSelectgooods.mini_num)var s=1;else s=this.nowSelectgooods.mini_num;this.request("/foodshop/storestaff.order/addCart",{order_id:this.ORDER_ID,uniqueness_number:this.nowSelectgooods.uniqueness_number,number:s,operate_type:1,product:[]}).then((function(s){console.log(s,"-----------------------减菜--------------------"),t.getShopcartInfo(),t.buffer=!0}))}},addFoodcount:function(){var t=this;if(this.buffer){if(this.buffer=!1,this.nowSelectgooods.num<this.nowSelectgooods.mini_num)var s=this.nowSelectgooods.mini_num;else s=1;this.request("/foodshop/storestaff.order/addCart",{order_id:this.ORDER_ID,uniqueness_number:this.nowSelectgooods.uniqueness_number,number:s,product:[],operate_type:0}).then((function(s){console.log(s,"-----------------------加菜--------------------"),0==s.status&&t.$message.error(s.msg),t.getShopcartInfo(),t.buffer=!0}))}},addanimate:function(){var t=this;this.animateshow=!0,setTimeout((function(){t.animateshow=!1,location.reload()}),500)},searchFood:function(){var t=this;this.foodnavshow=!1,this.$nextTick((function(){t.$refs.selfinput.focus()})),this.goods_list=[]},keyWordsearch:function(){var t=this;""!=this.searchText&&this.request("/foodshop/storestaff.goods/goodsListTree",{keyword:this.searchText,is_clear_stock:1}).then((function(s){t.loadingdata=!0,console.log(s,"----------------------关键词搜索---------------------"),t.loadingdata=!1,t.goods_list=s}))},forkclk:function(){this.searchText="",this.foodnavshow=!0,this.getAllfood()},screenFoodtype:function(t){var s=this;this.tableCurrent=t,this.foodMenu.length&&this.foodMenu.forEach((function(o,e){e==t&&(s.goods_list=o.goods_list)}))},canlisten:function(){this.listenopen=!0,console.log(window.getComputedStyle(this.$refs.slidercontent).width.replace("px",""))},changeslidernum:function(t){this.slideshake&&(this.slideshake=!1,this.numTween>-1?t.deltaY>0?this.numTween+=150:this.numTween-=150:this.numTween=0,this.slideshake=!0)},slidetoleft:function(){this.numTween>-1?this.numTween+=150:this.numTween=0},slidetoright:function(){this.numTween>-1?this.numTween-=150:this.numTween=0},clearallgoods:function(){var t=this;this.$confirm({title:this.L("提示"),content:this.L("确定要清空购物车吗")+"？",okText:this.L("确认"),centered:!0,cancelText:this.L("取消"),onOk:function(){t.request("/foodshop/storestaff.order/clearCart",{order_id:t.ORDER_ID}).then((function(s){console.log(s),t.nowSelectgooods="",t.$store.commit("changenowSelectgooodsNum",""),t.getShopcartInfo()}))}})},confirmOrder:function(){this.$store.commit("changeleftState",3),this.$router.push({name:"settlement_order",query:{orderId:this.ORDER_ID,otherpage:4}})}}},d=r,l=(o("dddae"),o("0c7c")),u=Object(l["a"])(d,e,i,!1,null,"dda69ea2",null);s["default"]=u.exports},dddae:function(t,s,o){"use strict";o("0550")}}]);