(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f2ace64","chunk-8c070860","chunk-49651db4"],{"44c8":function(t,e,s){},"481e":function(t,e,s){"use strict";s("50f8")},"50f8":function(t,e,s){},"61ce":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.goods?o("div",{staticClass:"table_card_items",class:t.goods.is_package_goods?"package_goods_item":"goods_item"},[t.goods.is_package_goods?o("div",{staticClass:"card_container package_goods_container",on:{click:function(e){return t.checkmenuFood(t.goods)}}},[t.goods.counts>0?o("div",{staticClass:"topbadge"},[o("div",[t._v(t._s(t.goods.counts))])]):t._e(),o("div",{staticClass:"package_name_price"},[o("span",{staticClass:"package_name"},[t._v(t._s(t.goods.product_name))]),o("span",{staticClass:"package_price"},[t._v("￥"+t._s(t.goods.product_price))])]),t.goods.subsidiary_piece&&t.goods.subsidiary_piece.length?o("div",{staticClass:"subsidiary_piece"},[t._l(t.goods.subsidiary_piece,(function(e,s){return[e.goods&&e.goods.length&&s<3?o("div",{key:s,staticClass:"subsidiary_piece_wrap"},[o("span",{staticClass:"subsidiary_piece_name"},[t._v(" "+t._s(e.name)+" ")]),o("div",{staticClass:"subsidiary_goods_wrap"},t._l(e.goods,(function(e,s){return o("span",{key:s,staticClass:"subsidiary_goods"},[t._v(" "+t._s(e.product_name)+" ")])})),0)]):t._e()]}))],2):t._e(),t.isClear?o("div",{staticClass:"card_shadow"}):t._e()]):o("div",{staticClass:"card_container"},[t.goods.counts>0?o("div",{staticClass:"topbadge"},[o("div",[t._v(t._s(t.goods.counts))])]):t._e(),o("div",{staticClass:"topcontent",on:{click:function(e){return t.checkmenuFood(t.goods)}}},[o("div",{staticClass:"tableinfo"},[o("div",{staticClass:"tablenumber"},[t._v(" "+t._s(t.goods.product_abbreviation?t.goods.product_abbreviation:t.goods.product_name)+" ")])]),!t.goods.has_format&&!t.goods.has_spec&&t.goods.mini_num&&t.goods.mini_num>1?o("div",{staticClass:"minCounts"},[t._v(" "+t._s(t.goods.mini_num>1?t.L("X1份起购",{X1:t.goods.mini_num}):"")+" ")]):t._e(),(t.goods.has_format||t.goods.has_spec)&&t.isClear?o("div",{staticClass:"minCounts"},[t._v(" "+t._s(t.L("多规格"))+" ")]):t._e(),o("div",{staticClass:"food_price"},[o("div",{staticClass:"left"},[t._v(t._s(t.L("￥"))+t._s(t.goods.product_price))]),t.goods.only_staff?o("div",{staticClass:"only_straff"},[o("span",[t._v(t._s(t.L("由店员下单")))])]):t._e()])]),o("div",{staticClass:"status_text",on:{click:function(e){return t.checkmenuFood(t.goods)}}},[t.goods.is_subsidiary_goods?o("div",{staticClass:"acs_food_tips"},[o("span",[t._v(t._s(t.L("附")))])]):t._e(),o("div",{staticClass:"food_fullname"},[t._v(t._s(t.goods.product_name))])]),t.goods.stock_num<t.goods.mini_num&&-1!=t.goods.stock_num||t.goods.is_sell_out?o("div",{staticClass:"card_shadow"}):t._e(),t.goods.stock_num<t.goods.mini_num&&-1!=t.goods.stock_num||t.goods.is_sell_out?o("div",{staticClass:"shortSale_tips"},[o("img",{attrs:{src:s("9896"),alt:""}})]):t._e()])]):t._e()},i=[],n=(s("a9e3"),{props:{goods:{type:[String,Object],default:""},ORDER_ID:{type:[String,Number],default:""},isClear:{type:Boolean,default:!1},otherpage:{type:[String,Number],default:""}},data:function(){return{}},created:function(){},mounted:function(){},methods:{checkmenuFood:function(t){var e=this;if(console.log(t,"info"),console.log(this.$store.state.storestaff.nowSelectgooodsNum,"nowSelectgooodsNum"),this.isClear)this.$emit("checkmenuFood",t);else if(t.has_format||t.has_spec||t.is_subsidiary_goods||t.is_package_goods)this.$router.push({name:"foodDetails",query:{orderId:this.ORDER_ID,productId:t.product_id,otherpage:this.otherpage,goodsType:t.is_package_goods?2:1}});else{this.$store.commit("changenowSelectgooodsNum","");var s={};s.productId=t.product_id,s.productName=t.product_name,s.productPrice=t.product_price,s.count=0==t.mini_num?"1":t.mini_num,s.uniqueness_number=t.product_id,s.productParam=[],s.host_goods_id=0,console.log(s,"checkObj"),this.$store.commit("changenowSelectgooodsNum",s.uniqueness_number),this.$nextTick((function(){console.log("watchmenu----111111"),e.$emit("watchmenu",s)}))}}}}),a=n,c=(s("7e6e"),s("2877")),d=Object(c["a"])(a,o,i,!1,null,"40afcadf",null);e["default"]=d.exports},"62da":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu_wrapper"},[o("div",{staticClass:"header_info_container"},[o("div",{staticClass:"header_left_content"},[o("div",{staticClass:"header_title"},[t._v(t._s(t.L("菜单")))])]),o("div",{staticClass:"refresh_box",class:t.animateshow?"rotatecls":"",on:{click:function(e){return t.addanimate()}}},[o("a-icon",{staticClass:"iconfont",attrs:{type:"reload"}})],1)]),o("div",{staticClass:"body_cashier_container"},[o("div",{staticClass:"tablesize_container"},[o("div",{staticClass:"switchbox",class:t.foodnavshow?"":"hiddenbox"},[o("div",{staticClass:"leftslidericon"},[o("div",{staticClass:"iconfont circlebox",on:{click:function(e){return t.slidetoright()}}},[o("img",{attrs:{src:s("cb7bc"),alt:""}})])]),o("div",{ref:"slidercontent",staticClass:"center_slider_container",attrs:{id:"slidercontent"}},[o("div",{ref:"sliderbox",staticClass:"sliderList_content",on:{mousewheel:t.changeslidernum}},t._l(t.foodMenu,(function(e,s){return o("div",{key:s,staticClass:"table_items",class:t.tableCurrent==s?"table_items_active":"",on:{click:function(e){return t.screenFoodtype(s)}}},[o("div",{staticClass:"items_content"},[o("div",{staticClass:"table_name",staticStyle:{position:"relative"}},[o("span",[t._v(t._s(e.cat_name))]),e.counts>0?o("span",{staticClass:"table_count",staticStyle:{position:"absolute"}},[t._v(t._s(e.counts))]):t._e()]),o("div",{staticClass:"bottomborder"})])])})),0)]),o("div",{staticClass:"rightslidericon"},[o("div",{staticClass:"iconfont circlebox",on:{click:function(e){return t.slidetoleft()}}},[o("img",{attrs:{src:s("c13d"),alt:""}})])])]),o("div",{staticClass:"search_content",class:t.foodnavshow?"":"searching_box"},[o("div",{staticClass:"searchiconbox",on:{click:function(e){return t.searchFood()}}},[o("img",{attrs:{src:s("bcac"),alt:""}})]),t.foodnavshow?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],ref:"selfinput",staticClass:"self_input",attrs:{onkeyup:"this.value=this.value.replace(/\\s+/g,'')",type:"text",placeholder:t.L("请输入菜品名称")},domProps:{value:t.searchText},on:{change:function(e){return t.keyWordsearch()},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t.foodnavshow?t._e():o("div",{staticClass:"forkiconbox",on:{click:function(e){return t.forkclk()}}},[o("img",{attrs:{src:s("8c162"),alt:""}})])])]),o("a-spin",{staticClass:"changecolor",staticStyle:{height:"75%"},attrs:{spinning:t.loadingdata,indicator:t.indicator,size:"large"}}),t.loadingdata?t._e():o("div",{staticClass:"tableList_wrapper"},[t.isSearchText?[t.goods_list.length?o("div",{staticClass:"table_list_sliderbox flex-direction"},[o("div",{staticClass:"goods_list_wrap"},[o("div",{staticClass:"goods_list_title"},[t._v(t._s(t.L("菜品")))]),o("div",{staticClass:"goods_list"},[t._l(t.goods_list,(function(e,s){return[e.is_package_goods?t._e():o("goodsItem",{key:s,attrs:{goods:e,ORDER_ID:t.ORDER_ID,otherpage:t.otherpage},on:{watchmenu:t.foodClick}})]}))],2)]),o("div",{staticClass:"goods_list_wrap"},[o("div",{staticClass:"goods_list_title"},[t._v(t._s(t.L("套餐")))]),o("div",{staticClass:"goods_list"},[t._l(t.goods_list,(function(e){return[e.is_package_goods?o("goodsItem",{key:e.product_id,attrs:{goods:e,ORDER_ID:t.ORDER_ID,otherpage:t.otherpage},on:{watchmenu:t.foodClick}}):t._e()]}))],2)])]):t._e()]:[o("div",{staticClass:"table_list_sliderbox"},[t._l(t.goods_list,(function(e,s){return[o("goodsItem",{key:s,attrs:{goods:e,ORDER_ID:t.ORDER_ID,otherpage:t.otherpage},on:{watchmenu:t.foodClick}})]}))],2)],t.goods_list?t._e():o("div",{staticClass:"emptyTips"},[o("div",[t._v(t._s(t.L("暂无菜品")))])])],2)],1)])},i=[],n=(s("b680"),s("a9e3"),s("ac1f"),s("5319"),s("b0c0"),s("159b"),s("8bbf"),s("22b5")),a=s("7f0f"),c=s("e2fd"),d=s("61ce"),r={name:"foodMenu",components:{Computer:a["default"],selectOrder:c["default"],goodsItem:d["default"]},data:function(){var t=this.$createElement;return{ORDER_ID:"",animateshow:!1,loadingdata:!0,indicator:t("a-icon",{attrs:{type:"loading-3-quarters","font-size":"30px",spin:!0}}),tableCurrent:0,listenopen:!1,foodnavshow:!0,goods_list:"",foodMenu:"",slideshake:!0,numTween:0,leftscroll:0,slidercontentwidth:"",sliderwidth:"",searchText:"",otherpage:"",isSearchText:!1}},watch:{numTween:function(t,e){var s=this;function o(){n["a"].update()&&requestAnimationFrame(o)}new n["a"].Tween({number:e}).to({number:t},100).onUpdate((function(t){s.leftscroll=t.number.toFixed(0),document.getElementById("slidercontent").scrollLeft=s.leftscroll,s.leftscroll-document.getElementById("slidercontent").scrollLeft>150&&(s.numTween=document.getElementById("slidercontent").scrollLeft)})).start(),o()}},created:function(){var t=this;if(console.log(this.$route.query.otherpage,"e,,,,,"),this.$emit("uploadLeft",{id:this.$route.query.orderId,type:1}),this.ORDER_ID=this.$route.query.orderId||"",0==Number(this.$route.query.otherpage)){var e=!1;this.$bus.$emit("changecurrent",this.$route.query.otherpage),this.otherpage=this.$route.query.otherpage,"addfood"==this.$route.query.formState&&(this.otherpage=this.$route.query.otherpage,e=!0),this.$emit("titleState",{showstate:"hide",operation:"changeLeftone",formpage:this.$route.query.otherpage,titleText:e}),this.$nextTick((function(){t.$emit("backfromState",t.$route.query.otherpage)}))}else console.log(this.$route.query.otherpage,"sdfsdf"),this.otherpage="","addfood"==this.$route.query.formState?this.$emit("titleState",{showstate:"show",operation:"changeLefttwo",titleText:!0}):this.$emit("titleState",{showstate:"show",operation:"changeLeftone"});this.getAllfood()},mounted:function(){var t=this;setTimeout((function(){t.sliderwidth=window.getComputedStyle(t.$refs.sliderbox).width.replace("px",""),t.slidercontentwidth=window.getComputedStyle(t.$refs.slidercontent).width.replace("px","")}))},beforeRouteLeave:function(t,e,s){t.name.indexOf("foodDetails")>-1?this.$store.commit("setKeepAlive",["foodMenu"]):this.$store.commit("setKeepAlive",[]),s()},methods:{uplaodMenufc:function(t){var e=this;console.log(t),t.goods_list.length>0?(this.foodMenu&&this.foodMenu.length&&this.foodMenu.forEach((function(s,o){s.counts=0,s.goods_list.forEach((function(e,o){e.counts=0,t.goods_list.forEach((function(t){e.product_id==t.goods_id&&(e.counts+=t.num)})),e.counts>0&&(s.counts+=e.counts)})),e.$set(e.foodMenu,o,s)})),console.log(this.foodMenu,"foodMenu")):this.foodMenu&&this.foodMenu.length&&this.foodMenu.forEach((function(t,s){t.counts=0,t.goods_list.forEach((function(t,e){t.counts=0})),e.$set(e.foodMenu,s,t)})),this.screenFoodtype(this.tableCurrent)},getAllfood:function(){var t=this;this.loadingdata=!0,this.request("/foodshop/storestaff.goods/goodsListTree").then((function(e){console.log(e,"----------------------菜单数据获取---------------------"),t.loadingdata=!1,e.length>0?(t.foodMenu=e,t.screenFoodtype(t.tableCurrent),t.getShopcartInfo()):t.foodMenu=""}))},searchFood:function(){var t=this;this.foodnavshow=!1,this.$nextTick((function(){t.$refs.selfinput.focus()})),this.goods_list=[]},keyWordsearch:function(){var t=this;this.searchText&&(this.isSearchText=!0,this.request("/foodshop/storestaff.goods/goodsListTree",{keyword:this.searchText}).then((function(e){t.loadingdata=!0,console.log(e,"----------------------关键词搜索---------------------"),t.loadingdata=!1,t.goods_list=e})))},forkclk:function(){this.searchText="",this.foodnavshow=!0,this.isSearchText=!1,this.getAllfood()},screenFoodtype:function(t){var e=this;console.log("menu---screenFoodtype"),this.tableCurrent=t,this.foodMenu&&this.foodMenu.length&&this.foodMenu.forEach((function(s,o){o==t&&s.goods_list&&s.goods_list.length&&(e.goods_list=[],s.goods_list.forEach((function(t,s){e.$nextTick((function(){e.$set(e.goods_list,s,t),e.$set(e.goods_list[s],"counts",t.counts),e.$forceUpdate()}))})))}))},foodClick:function(t){console.log(t,"checkObj"),this.$emit("foodClick",t)},getShopcartInfo:function(){var t=this;this.request("/foodshop/storestaff.order/cartDetail",{order_id:this.$store.state.storestaff.nowOrderId}).then((function(e){console.log(e,"----------------------拿到购物车数据---------------------"),t.uplaodMenufc(e)}))},addanimate:function(){var t=this;this.searchText="",this.isSearchText=!1,this.foodnavshow=!0,this.getAllfood(),this.animateshow=!0,setTimeout((function(){t.animateshow=!1}),500)},canlisten:function(){this.listenopen=!0,console.log(window.getComputedStyle(this.$refs.slidercontent).width.replace("px",""))},changeslidernum:function(t){this.slideshake&&(this.slideshake=!1,this.numTween>-1?t.deltaY>0?this.numTween+=150:this.numTween-=150:this.numTween=0,this.slideshake=!0)},slidetoleft:function(){this.numTween>-1?this.numTween+=150:this.numTween=0},slidetoright:function(){this.numTween>-1?this.numTween-=150:this.numTween=0}}},l=r,u=(s("bfe9"),s("2877")),h=Object(u["a"])(l,o,i,!1,null,"2c886d42",null);e["default"]=h.exports},"62dd":function(t,e,s){},"7e6e":function(t,e,s){"use strict";s("62dd")},"7f0f":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"computer_model"},[o("div",{staticClass:"title_content"},[o("div",{staticClass:"border_box"},[o("div",{staticClass:"leftemptyybox"}),o("div",{staticClass:"titletext"},[t._v(t._s(t.L("开台")))]),o("div",{staticClass:"closeicon",on:{click:function(e){return t.closemodel()}}},[o("img",{attrs:{src:s("c588"),alt:""}})])])]),o("div",{staticClass:"tableinfo"},[o("div",{staticClass:"table_name"},[t._v(t._s(t.L("台号"))+"："+t._s(t.tableinfos.name))]),o("div",{staticClass:"table_size"},[t._v(" "+t._s(t.L("餐位数"))+"："+t._s(t.tableinfos.min_people)+"-"+t._s(t.tableinfos.max_people)+t._s(t.L("人"))+" ")])]),o("div",{staticClass:"numberinput_container"},[o("div",{staticClass:"numberinput"},[t._v(t._s(t.diningPeople))])]),o("div",{staticClass:"computer_wrapper"},[o("div",{staticClass:"computer_container"},[t._l(t.numbervalueList,(function(e,s){return o("div",{key:s,staticClass:"btn_items",on:{click:function(s){return t.addnum(e)}}},[t._v(" "+t._s(e)+" ")])})),o("div",{staticClass:"btn_items",on:{click:function(e){return t.del()}}},[o("img",{attrs:{src:s("a350"),alt:""}})])],2)]),o("div",{staticClass:"confirm_btn",class:Number(t.diningPeople)>0?"":"noclick",on:{click:function(e){return t.confirmOpen()}}},[t._v(" "+t._s(t.L("开台并点菜"))+" ")])])},i=[],n=(s("fb6a"),s("d3b7"),s("25f0"),s("8bbf"),{props:{tableinfos:Object},data:function(){return{tableinfo:{},diningPeople:"",numbervalueList:["1","2","3","4","5","6","7","8","9","","0"]}},created:function(){console.log(this.tableinfos)},methods:{confirmOpen:function(){var t=this;this.request("/foodshop/storestaff.order/createOrder",{table_id:this.tableinfos.id,book_num:this.diningPeople}).then((function(e){console.log(e,"-----------------------开台点击--------------------"),e.order_id&&(t.$store.commit("changeOrder",e.order_id),t.closemodel(),t.$router.push({name:"menu",query:{orderId:e.order_id}}))}))},del:function(){this.diningPeople.length>1?this.diningPeople=this.diningPeople.slice(0,this.diningPeople.length-1):1==this.diningPeople.length&&(this.diningPeople="")},closemodel:function(){this.$emit("closemodel")},addnum:function(t){""==this.diningPeople?this.diningPeople=t:(this.diningPeople=this.diningPeople+t.toString(),this.diningPeople>255&&(this.diningPeople="255"))}}}),a=n,c=(s("a484"),s("2877")),d=Object(c["a"])(a,o,i,!1,null,"1d56a53b",null);e["default"]=d.exports},"84dd3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACKElEQVRoQ+3Z72fVYRjH8c/1vL+kHk2k2uR7XXdEVkbMFBkxEYkZkdiYiMREZGxSoh9EGRHnvju1JpIe91f0D5xz5eTeHDd7cv/69tXZ8/uc9+t7Xd+5Z4SO/1DH+zEBtD3B/3cC1tojqnqZiH4xs2trEtETcM59VdVTPnyVmdfaQEQDrLUaBN9l5vXaiBTANoDF8WBVvSMi92oiogGjSGvtGwCXguDbzHy/FiIJ4BFvAcwFwSvM/KAGIhngEe8AXAjWaVlEHpZGZAGMIp1zO6p6Pgi+xcwbJRHZAH4SHwCcGw8eDoc3jTGPSiGyAjziI4CzwTrdEJHHJRDZAR7RA8BB8HVmfpIbUQQwiuz1ep+I6EywTkvGmM2ciGIAP4kvAKaDdbomIlu5EEUB/rfT+J1pv3uRmZ/mQBQHeMQ3VT0RrNNVY8yzVEQVgH8nvhPR8WCdrojIixRENYB/J/YAnAyCF5j5ZSyiKsAjPgOYCSYxKyI7MYjqAI/4AWBqP5iI3jdNc7ETgH6/f3QwGDzvJMDHvwJwrHMrdFg8Ec03TfM6Zn1GZ6q8A6XiqwBKxhcHlI4vCqgRXwxQK74IoGZ8dkDt+KyANuKzAdqKzwJoMz4Z0HZ8EuBfiE8COOd2VfX0+CUs9WIWc6GLvsyF/+BoIz5pAtZaC6AB8JuIllKuxDFP/uCvuZTD1tq/AGb+mfI5KWejVyjlS3OenQByPs2Yz5pMIOap5TzzB9YfHEAtKDccAAAAAElFTkSuQmCC"},a350:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAiCAYAAADPuYByAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNDQkQ1RDg5RTgwOTExRUE5QUFDQjE3NzA4MjRCN0U4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNDQkQ1RDhBRTgwOTExRUE5QUFDQjE3NzA4MjRCN0U4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0NCRDVEODdFODA5MTFFQTlBQUNCMTc3MDgyNEI3RTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0NCRDVEODhFODA5MTFFQTlBQUNCMTc3MDgyNEI3RTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5CltaDAAAC/klEQVR42syYS2xNQRjHT3tRrqQ39NpSFsKuuqDRqHqmJaVIPBdIuDRlQTy3iAgLEmki4pV4S3pLpK02NN6xEGIrIWUhEolocT2q+E/yTTL5MueemTOce77kt+h3eib/b+73mDlFmUzGs7TdYC9IeYWz12DtEMuX1oNDXuFtAjhdbPFCJWjx4mMTTcWnQRaMiJF4zyRtEuASGMf8J0BrhFqngQO24sUL85jvNtgCBiMUX8IdQWmzjLqLar1gdcTCtZZP/GRwBhQpvhxYCj7EIef9xJdSgZYyvxgKzw3WXQw6QdJQRw24B0a5ihc7fRZMYv6j4KLBmkvANVAH2g0CmEmB1lAtjXYRv4dSQ7UesNNQ+BUwjP6uDQhAPO9QnldSAGVhxM8H+5nvDVhpWKA5zf/V0s6OZP7ZPoGJNQZsxZdTWiQcCrQLNNJ7PKfVAITwmxrhj0A96LcRn6SBk2bPN4Nnlk2gm9KHBzCDAmj0Ef6QhH+2zfkWyjfVjoHzIbtYN3UcXQBtGuEPbIVL8RvBOua/C3Y4tmFReIs0AXg+wr+E6fMHme8tWP6PJugd0JAngPsk/GvYITXg/V8bmmcYJliDsBa/lfnGgqsuiyomBtV1MNzneTUVcSqs+FaanqrNAkcchdcHCJc2HdwKE4D8OXdR/qm2DaxxEN6mOcb20K/Bc7wqTABS/C+wArxjz0+CKZbCF9KOl2i6TwMNMl13qaIWm7IVL+w9dZmfii9JOzjGQnhWOdv49X2/vj6VgkzZipfjmfd3cf277FDAfhNXTNQFmgB+u5wqj4MLzDcHHDZYr53G/4+Asw4/EsizzBM6HPa5XEY2gRfMtx2sMlizk3b6Bgn/FvD/8jDWRcXc57Lz8jQp7q+fmP8UqDAMQAj/bqjjsa3woDvsK2qVfzQFnI7zHVZah+ZyUu5YwJF+dNpHLaxO8c2lws5GqLUijPhBSp+nYLzibyJimzbSPlIB57wYmc1XYvG9pjlG2l8WW75wjj6N9BdYeC/Y8FeAAQAybKI4jo7bcwAAAABJRU5ErkJggg=="},a484:function(t,e,s){"use strict";s("b4c1")},b4c1:function(t,e,s){},bfe9:function(t,e,s){"use strict";s("44c8")},c588:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEQUQ2MEJCRTc5NDExRUFCMUVDQUMyQjY4MTkxNzFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEQUQ2MEJDRTc5NDExRUFCMUVDQUMyQjY4MTkxNzFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QURBRDYwQjlFNzk0MTFFQUIxRUNBQzJCNjgxOTE3MUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QURBRDYwQkFFNzk0MTFFQUIxRUNBQzJCNjgxOTE3MUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZNxy+AAABD0lEQVR42qzVSwrCMBAG4DoEFTyeS72EC99YsVFQN27di3iZXsW9SyclhRDymGln4BctOF8nbdpBXdfPoihmmDPmVshWiVliPgo/5pgJ5ooZYrQQYk58b79PwR5oq8IchJHmN9hJjoKYj2wwD3CaS2AhpLnu4DX3sZKBXGKID4WwExEzyC6GhKDQJDnMR9ahbQKRP2siFkLuoYaQONMcRkZMqczaa2c5W8zUiINQoBRGRnJLl1pGFsKBTI2Jx3pB/oXn7jMSFLq7Si6mOiB3b3O7N0jVZaIcojmTQUeEjUGfxwoHg54IGQMBhISBEJLFlH1lSyCpZ+MPbGMpJDbZ1kBvzBezEEJcbGV7v/4CDACcQVyt8CQU0QAAAABJRU5ErkJggg=="},e2fd:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"computer_model"},[o("div",{staticClass:"title_content"},[o("div",{staticClass:"border_box"},[o("div",{staticClass:"leftemptyybox"}),o("div",{staticClass:"titletext"},[t._v(t._s(t.L("开台")))]),o("div",{staticClass:"closeicon",on:{click:function(e){return t.closemodel()}}},[o("img",{attrs:{src:s("c588"),alt:""}})])])]),o("div",{staticClass:"texttips"},[o("span",[t._v(t._s(t.L("当前桌台有多个订单在进行中，请选择要处理的订单")))])]),o("div",{staticClass:"order_wrapper"},[o("div",{staticClass:"slider_content"},[o("div",{staticClass:"order_list_container"},t._l(t.orderList,(function(e,s){return o("div",{key:s,staticClass:"order_item",on:{click:function(s){return t.checkOrder(e)}}},[o("div",{staticClass:"source_state"},[o("div",{staticClass:"tipslabel online"},[o("span",[t._v(t._s(e.order_from_txt))])]),1==e.table_order_status?o("div",{staticClass:"orderstate dinging"},[t._v(t._s(t.L("就餐中")))]):2==e.table_order_status?o("div",{staticClass:"orderstate ordering"},[t._v(t._s(t.L("点餐中")))]):3==e.table_order_status?o("div",{staticClass:"orderstate clean"},[t._v(t._s(t.L("待清台")))]):t._e()]),o("div",{staticClass:"customerinfo"},[o("div",{staticClass:"leftinfo"},[t._v(" "+t._s(t.L("会员"))+": "+t._s(e.card_name||e.user_phone?e.card_name+" "+e.user_phone:t.L("无"))+" ")]),t._m(0,!0)]),o("div",{staticClass:"createTime"},[t._v(t._s(t.L("开台时间"))+"："+t._s(e.create_time))]),o("div",{staticClass:"bookNum_price"},[o("div",{staticClass:"bookNum"},[t._v(t._s(t.L("就餐人数"))+"："+t._s(e.book_num))]),o("div",{staticClass:"orderprice"},[t._v(t._s(t.L("￥"))+t._s(e.total_price))])])])})),0)])]),o("div",{staticClass:"bottom_btn"},[o("div",{staticClass:"btnbox",on:{click:function(e){return t.opennewOrder()}}},[t._v(t._s(t.L("创建新的订单")))])])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"righticon"},[o("img",{attrs:{src:s("84dd3"),alt:""}})])}],n=(s("8bbf"),{props:{tableinfos:Object},data:function(){return{orderList:[]}},created:function(){this.tableinfos&&(console.log(this.tableinfos),this.getOrderList(this.tableinfos.id))},methods:{getOrderList:function(t){var e=this;this.request("/foodshop/storestaff.foodshopStore/tableOrderList",{table_id:t}).then((function(t){console.log(t,"----------------------订单列表获取---------------------"),e.orderList=t.list}))},checkOrder:function(t){console.log(t),2==t.table_order_status?(this.$store.commit("changeOrder",t.order_id),this.$emit("changeLeftDetails",this.tableinfos.id),this.$store.commit("changeleftState",1),this.$router.push({name:"menu",query:{orderId:t.order_id}}),this.closemodel()):1==t.table_order_status?(this.$store.commit("changeOrder",t.order_id),this.$store.commit("changeleftState",2),this.$emit("changeLeftDetails",this.tableinfos.id),this.closemodel()):3==t.table_order_status&&(this.$store.commit("changeOrder",t.order_id),this.$store.commit("changeleftState",4),this.$emit("changeLeftDetails",this.tableinfos.id),this.closemodel())},closemodel:function(){this.$emit("closemodel")},opennewOrder:function(){this.$emit("openNewTable",this.tableinfos)}}}),a=n,c=(s("481e"),s("2877")),d=Object(c["a"])(a,o,i,!1,null,"60741aee",null);e["default"]=d.exports}}]);