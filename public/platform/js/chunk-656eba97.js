(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-656eba97","chunk-4e96469d"],{2136:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"shopping_Cart"},[o("div",{staticClass:"cart_left_wrapper"},[o("div",{staticClass:"orderTotal_info"},[o("div",{staticClass:"info_container"},[o("div",{staticClass:"left_infoContent"},[o("div",{staticClass:"table_orderTime"},[o("div",{staticClass:"table"},[t._v(t._s(t.L("桌号"))+"："+t._s(t.TABLE_INFO.table_name))]),o("div",{staticClass:"underbox"},[t._v(t._s(t.L("下单时间"))+"："+t._s(t.ORDER_INFO.create_time_str))])]),o("div",{staticClass:"table_orderTime"},[o("div",{staticClass:"table"},[t._v(t._s(t.L("就餐人数"))+"："+t._s(t.ORDER_INFO.book_num))]),o("div",{staticClass:"underbox"},[t._v(t._s(t.L("店员"))+"："+t._s(t.staffname))])])]),o("div",{staticClass:"right_iconbox",on:{click:function(s){return t.openmodels("opendiners")}}},[o("img",{attrs:{src:e("ab2e"),alt:""}})])])]),o("div",{staticClass:"slider_cart_wrapper"},[o("div",{staticClass:"slider_cart_container"},[o("div",{staticClass:"order_List"},t._l(t.ORDER_INFO.goods_detail,(function(s,e){return o("div",{key:e,staticClass:"pay_times_wrapper"},[t._l(s.goods_combine,(function(s,i){return o("div",{key:i,staticClass:"order_timers_list"},[o("div",{staticClass:"order_timers_title_info"},[o("div",{staticClass:"lefttitleText"},[t._v(t._s(s.number_str))]),o("div",{staticClass:"rightstate"},[t._v(t._s(s.status_str))])]),t._l(s.goods,(function(s,a){return o("div",{key:a,staticClass:"order_items",class:t.nowselectFoodID==s.id?"selected_item":"",on:{click:function(s){return t.selectFood(e,i,a)}}},[o("div",{staticClass:"items_content"},[o("div",{staticClass:"mainCourse_info"},[o("div",{staticClass:"foodname_count"},[o("div",{staticClass:"foode_name"},[o("div",{staticClass:"name"},[t._v(t._s(s.name))])]),o("div",{staticClass:"count"},[t._v("x"+t._s(s.num))])]),o("div",{staticClass:"food_totalprice"},[t._v(t._s(t.L("￥"))+t._s(s.total_price))])]),s.is_staff?o("div",{staticClass:"only_straff"},[o("span",[t._v(t._s(t.L("由店员下单")))])]):t._e(),s.is_must?o("div",{staticClass:"isMust"},[o("span",[t._v(t._s(t.L("必点")))])]):t._e(),o("div",{staticClass:"spec_info"},[t._v(t._s(s.spec))]),s.spec_sub?o("div",{staticClass:"accessory_dish"},[o("div",{staticClass:"accessory_tips"},[s.is_package_goods?o("span",[t._v(t._s(t.L("菜品")))]):o("span",[t._v(t._s(t.L("附")))])]),o("div",{staticClass:"accessory_dish_info"},[t._v(t._s(s.spec_sub))])]):t._e()])])})),s.refund_goods?o("div",t._l(s.refund_goods,(function(s,e){return o("div",{key:e,staticClass:"order_items",staticStyle:{position:"relative"}},[o("div",{staticClass:"items_content"},[o("div",{staticClass:"mainCourse_info"},[o("div",{staticClass:"foodname_count"},[o("div",{staticClass:"foode_name"},[o("div",{staticClass:"name"},[t._v(t._s(s.name))])]),o("div",{staticClass:"count"},[t._v("x"+t._s(s.num))])]),o("div",{staticClass:"food_totalprice"},[t._v(t._s(t.L("￥"))+t._s(s.total_price))])]),s.is_staff?o("div",{staticClass:"only_straff"},[o("span",[t._v(t._s(t.L("由店员下单")))])]):t._e(),s.is_must?o("div",{staticClass:"isMust"},[o("span",[t._v(t._s(t.L("必点")))])]):t._e(),o("div",{staticClass:"spec_info"},[t._v(t._s(s.spec))]),s.spec_sub?o("div",{staticClass:"accessory_dish"},[o("div",{staticClass:"accessory_tips"},[s.is_package_goods?o("span",[t._v(t._s(t.L("菜品")))]):o("span",[t._v(t._s(t.L("附")))])]),o("div",{staticClass:"accessory_dish_info"},[t._v(t._s(s.spec_sub))])]):t._e()]),t._m(0,!0)])})),0):t._e()],2)})),s.book_money>0?o("div",{staticClass:"book_price"},[t._v(" "+t._s(t.L("订金已抵扣X1X2",{X1:t.L("￥"),X2:s.book_money}))+" ")]):t._e(),o("div",{staticClass:"order_price_info"},[s.pay_price?o("div",{staticClass:"priceInfo_content"},[o("div",{staticClass:"discount_money"},[t._v(t._s(t.L("优惠X1X2",{X1:t.L("￥"),X2:s.discount_price})))]),o("div",{staticClass:"actual_payment"},[t._v(" "+t._s(t.L("实付"))+" "),o("span",[t._v(t._s(t.L("￥"))+t._s(s.pay_price))])])]):t._e()])],2)})),0)])]),o("div",{staticClass:"bottom_total_info_wrapper"},[o("div",{staticClass:"bottom_content"},[o("div",{staticClass:"topprice_content"},[o("div",{staticClass:"total_price_box"},[o("span",{staticClass:"total_count"},[t._v(t._s(t.L("共X1项",{X1:t.ORDER_INFO.goods_num})))]),o("span",[t._v(t._s(t.L("￥")))]),t._v(" "+t._s(t.ORDER_INFO.goods_total_price)+" ")])]),o("div",{staticClass:"btn_container"},[o("div",{staticClass:"btn_items addorder",on:{click:function(s){return t.addmoreGoods()}}},[t._m(1),o("div",{staticClass:"icontent"},[t._v(t._s(t.L("加菜")))])]),o("div",{staticClass:"btn_items checkout_btn",on:{click:function(s){return t.cleanOrder()}}},[t._m(2),o("div",{staticClass:"icontent"},[t._v(t._s(t.L("清台")))])])])])])]),o("div",{staticClass:"cart_right_wrapper"},[o("div",{staticClass:"food_operation"},[o("div",{staticClass:"return_dishes",on:{click:function(s){return t.openmodels("returndish")}}},[o("div",{staticClass:"return_dishes_btn"},[t._v(t._s(t.L("退菜")))])]),o("div",{staticClass:"printing"},[o("div",{staticClass:"prinTing_btn",on:{click:function(s){return t.openmodels("printing")}}},[t._v(t._s(t.L("打印")))])]),o("div",{staticClass:"change_table"},[o("div",{staticClass:"change_table_btn",on:{click:function(s){return t.openmodels("changeSeat")}}},[o("div",{staticClass:"btn_style"},[t._v(t._s(t.L("更换桌台")))])])])])]),o("a-modal",{attrs:{footer:null,title:null,width:"32%",maskClosable:!1,closable:!1,centered:!0,bodyStyle:{padding:0},destroyOnClose:!0},model:{value:t.returnFoodShow,callback:function(s){t.returnFoodShow=s},expression:"returnFoodShow"}},[o("div",{staticClass:"alert_wrapper"},[o("returnFood",{attrs:{goodsInfo:t.nowselectFoodinfo},on:{returnSuccess:t.cfmreturn,closemodel:t.closemodel}})],1)]),o("a-modal",{attrs:{wrapClassName:"borderradius",footer:null,title:null,centered:!0,width:"60%",maskClosable:!1,closable:!1,bodyStyle:{padding:0},destroyOnClose:!0},model:{value:t.changeSeatshow,callback:function(s){t.changeSeatshow=s},expression:"changeSeatshow"}},[o("div",{staticClass:"alert_wrapper"},[o("changeSeatsModel",{attrs:{orderId:Number(t.ORDER_INFO.order_id)},on:{uploadfnc:t.getorderInfo,closemodel:function(s){return t.closemodel()}}})],1)]),o("a-modal",{attrs:{destroyOnClose:!0,wrapClassName:"borderradius",footer:null,title:null,centered:!0,width:"30%",maskClosable:!1,closable:!1,bodyStyle:{padding:0}},model:{value:t.warningShow,callback:function(s){t.warningShow=s},expression:"warningShow"}},[o("div",{staticClass:"alert_wrapper"},[o("warningModel",{attrs:{modelTitle:t.L("清台"),textTips:t.L("是否确认清台")+"？"},on:{comfirmfnc:t.clearfnc,closemodel:t.closemodel}})],1)])],1)},i=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"return_img"},[o("img",{attrs:{src:e("7109"),alt:""}})])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"iconbox"},[o("img",{attrs:{src:e("a8c1"),alt:""}})])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"iconbox"},[o("img",{attrs:{src:e("bec6"),alt:""}})])}],a=(e("a9e3"),e("d81d"),e("d3b7"),e("159b"),e("ac27")),n=e("3576"),c=e("aa8e"),l=e("8bbf"),r=e.n(l),d={props:{nowselected:Number},components:{returnFood:a["default"],changeSeatsModel:n["default"],warningModel:c["default"]},data:function(){return{staffname:"",nowselectOrderID:"",nowselectFoodID:"",nowselectFoodinfo:"",share_table_type:"",TABLE_INFO:{},ORDER_INFO:{},PAGE_INFO:{},returnFoodShow:!1,changeSeatshow:!1,warningShow:!1,clearShake:!0,nowselect_is_package_goods:!1,nowselect_isRefundPackageGoods:!0}},created:function(){this.staffname=r.a.ls.get("storestaff_page_info").staff_name,this.getorderInfo()},watch:{nowselected:function(t,s){t&&(this.nowselectFoodID="",this.nowselectFoodinfo="",this.getorderInfo())}},methods:{getorderInfo:function(){var t=this;this.request("/foodshop/storestaff.order/orderDetail",{order_id:this.nowselected}).then((function(s){console.log(s,"----------------------拿到订单数据---------------------"),t.PAGE_INFO=s,t.TABLE_INFO=s.table_info,t.ORDER_INFO=s.order,t.initData()}))},initData:function(){var t=this;this.ORDER_INFO.goods_detail.map((function(s){s.goods_combine&&s.goods_combine.map((function(s){if(s.goods){s.goods.map((function(s){s.id==t.nowselectFoodID?(s.is_selected=!0,t.nowselectFoodID=s.id,t.nowselectFoodinfo=s):s.is_selected=!1}));var e=s.goods.some((function(s){return s.id==t.nowselectFoodID}));e||(t.nowselectFoodID="",t.nowselectFoodinfo="")}}))})),this.ORDER_INFO.go_pay_num<1?this.$store.commit("changeleftState",4):this.$store.commit("changeleftState",2)},selectFood:function(t,s,e){var o=this;this.ORDER_INFO.goods_detail.forEach((function(i,a){t==a&&i.goods_combine.forEach((function(t,i){s==i&&t.goods.forEach((function(t,s){e==s&&(o.nowselect_is_package_goods=t.is_package_goods||!1,o.nowselect_isRefundPackageGoods=t.isRefundPackageGoods||!1,o.nowselectFoodID==t.id?(o.nowselectFoodID="",o.nowselectFoodinfo={}):(console.log(o.nowselectFoodID),o.nowselectFoodID=t.id,o.nowselectFoodinfo=t))}))})),o.$set(o.ORDER_INFO.goods_detail,a,i)}))},addmoreGoods:function(){this.$store.commit("changeleftState",1),this.$router.push({name:"menu",query:{orderId:this.nowselected,formState:"addfood"}})},openmodels:function(t){console.log(this.PAGE_INFO,"PAGE_INFO---waitingClean"),"opendiners"==t?this.$emit(t,this.PAGE_INFO):"changeSeat"==t?this.changeSeatshow=!0:"returndish"==t?this.nowselectFoodID?(console.log(this.nowselect_is_package_goods,"nowselect_is_package_goods"),console.log(this.nowselect_isRefundPackageGoods,"nowselect_isRefundPackageGoods"),this.nowselect_is_package_goods&&!this.nowselect_isRefundPackageGoods?(this.returnFoodShow=!1,this.$warning({title:this.L("提示"),centered:!0,content:this.L("该套餐已全部核销，不能退菜~")})):this.returnFoodShow=!0):this.$warning({title:this.L("提示"),centered:!0,content:this.L("您还未选中菜品~")}):"printing"==t&&this.$emit(t)},cfmreturn:function(){this.getorderInfo(),this.closemodel()},closemodel:function(){this.returnFoodShow=!1,this.changeSeatshow=!1,this.warningShow=!1},cleanOrder:function(){this.warningShow=!0},clearfnc:function(){var t=this;this.clearShake&&(this.clearShake=!1,this.request("/foodshop/storestaff.order/completeOrder",{order_id:this.nowselected}).then((function(s){console.log(s,"----------------------清台---------------------"),t.closemodel(),t.$store.commit("changeleftState",""),t.$store.commit("changeOrder",""),t.$bus.$emit("uploadtable")})).catch((function(s){t.clearShake=!0})))}}},_=d,u=(e("6f9a"),e("2877")),f=Object(u["a"])(_,o,i,!1,null,"9158a8ec",null);s["default"]=f.exports},"399b":function(t,s,e){},"4aad6":function(t,s,e){"use strict";e("399b")},"6f9a":function(t,s,e){"use strict";e("fef0")},a77d:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIzMEY5ODAyRUQxMTExRUE4QkNERUUzNUQ5MEMwQkExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIzMEY5ODAzRUQxMTExRUE4QkNERUUzNUQ5MEMwQkExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjMwRjk4MDBFRDExMTFFQThCQ0RFRTM1RDkwQzBCQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjMwRjk4MDFFRDExMTFFQThCQ0RFRTM1RDkwQzBCQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RM0CKAAAFX0lEQVR42uxca4hVVRj97nU0FZ3xOWSaZpNjPqaiECKt1KmswDFfmH/KlJksirKoIPoZCEKWQpDzQ9If9jJQU6ksGwrHH+JjfFWaWqEFWY4xTiUTTmt5vjPdbmfuPWfm7L3Pxbtggd57uHudNfvxffuVan/6UbGEHuAt4CSwCrweHAkOBsvA3mAbeAFsBlvAk+Ax5X6wCbxkQ2yJ4d8vB+eB94N3ggPyPN8THKgkbs76/jfwS3AH+AH4qynhKQM1hmbPAfnD9+rLmgBr18fgenAT+HecP56O8beuAh8HvwHfAx80aIpfu2ZqzWGZdaohUcYsAI+Db4EVYh8scw14Anw4CcaMA3eC74LXinsMB98BP1dtToxhs9kHTpPkYbqOYs+xH7VlTCn4vjab3pJcsL95TTvmMtPGDAO/AudL4aAG3AWONmXMjWAjeJMUHiaoOePjNuYGDayuk8IFa3uDmhSLMSPAz8ChUvjgO3waZgTNZww7re3gKINifwCXgreBE8El4EGD5V0DbsvXIedKCVLao9cYFLlX04bmgBGF4qsNlr1JU5f2qDXmGcOmMEteFGAKcVG/+9Ng+Q+Bz0ZtSuyglhtu7+zMD+f4/rTWGpNYrqNtKGPYhOotBG97QjY100Hgm2GNeQS8w8IIcS7EM39YSh8W5jOmD/iqpaEzTA5ztSUtK8BeuYyp07jFVsAVJlu2Ab7zY50ZU6LZqC2MSpAxxAuSMdWbaQzH9JEWhZTH9Exc4GTX7CBjai2H56UhQ3ibqM02Zpj2zkkzZpBlTdV+3+cbM1finRiPw5iy7JHCAtLapXSYcY+DTLc0Yc3IxwO+MeRdjkTkynAHO9LEOewSmsLVvoGORJQmsMb0pSc05nZxh1zGDHGo67IxEx0K6J/ApkRU0pjRCa0x5Q51jU1bDrujGOOyxlTQmAFFY/7f8adDRqBXWlPqR2P6FUelYGMuFZtScG7Q4rD8sgQlkJlopTEXHAoYksOUlENdLTSm2aGAqk4+HyducZbGnHIZL4BjAj6/z7ExJ2jMMcciFmf9n+tZtY41fZsEY5aJt5bFpZtK8G0Jt4JgEsc5K97kWARXA9cpk4KmtBrTKkX44OrnARrDHdUNRT868AU98ed8txf96MAnfuRLcNt5W9GTy+nRxkxjzop3YOFKB3e5/5xpDLHekZgfwSd0qGawV6efuUC9/4/MPXgcunlIweb6NTv9moBElnPBW8Cplv9AFToY/afG8IOVFoWcF28FNCi7b9HvzlvU87pknHnKXpbl0ZbTloSwk8u1q+qcDgo2cEbfXToz5i/wFUtijsb0TBx4UbJ2iAYt5LMTbrQgJsx5TBsbDRjQbQhTcLtmtxcNC5oU4plKwxr4jk9G+YuwCr9kWFSN5D4m2EvMbsAmXhbvPGWkqrpavG3lJrNqHioNmvTmtOYKw9MPW3QkCkS+48WcrObBrSrDI8Iq8c4TMbMdCz4FTjFY5iHxzoH/3lVjiBEq2mbgZxI/gZPB77vb6zOuqdZ8qtDBd5iRz5Qow+F34N1+glWgoHbuljoc5uEoccLXWgWPFKApR6NqjxpAndICNheQKR+p5kjLRF2JLNmTcwf1MgtBYHeDt+fBWV1JRrsacjM6fkO8c4yNCTRlt2pbKZ0c7TOdixzReGCJxiOucUa1TOluXxhHksZ50rUa3vO+h5MODGH/sVQ1rJUYtrakY27T9Rq58oqDrWJ2gr1Ny5ivyeaaOPu8lOE7qriJmVcx8QjxVOn+RmvuzGgQ7yqmD8FfTAlPWby8y9+Ffqv+hf3JbyaR3FnVV/69vIujSKsGlv7lXbySxdrlXf8IMADodfU1HwYkpAAAAABJRU5ErkJggg=="},aa8e:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"payConfirm_alert_wrapper"},[e("div",{staticClass:"title_container"},[e("div",{staticClass:"title_font"},[t._v(t._s(t.modelTitle))])]),e("div",{staticClass:"alert_content_wrapper"},[t._m(0),e("div",{staticClass:"fonttipsbox"},[t._v(" "+t._s(t.textTips)+" ")]),e("div",{staticClass:"bottom_btn_wrapper"},[e("div",{staticClass:"seeorder_btn",on:{click:function(s){return t.closemodel()}}},[t._v(t._s(t.L("取消")))]),e("div",{staticClass:"back_btn",on:{click:function(s){return t.confirm()}}},[t._v(t._s(t.L("确定")))])])])])},i=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"centericonbox"},[o("img",{attrs:{src:e("a77d"),alt:""}})])}],a=(e("8bbf"),{props:{textTips:String,modelTitle:String},data:function(){return{}},created:function(){console.log(this.textTips)},methods:{closemodel:function(){this.$emit("closemodel")},confirm:function(){this.$emit("comfirmfnc")}}}),n=a,c=(e("4aad6"),e("2877")),l=Object(c["a"])(n,o,i,!1,null,"7e45946b",null);s["default"]=l.exports},bec6:function(t,s,e){t.exports=e.p+"img/clean.7dc3f486.png"},fef0:function(t,s,e){}}]);