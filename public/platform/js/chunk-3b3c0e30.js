(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b3c0e30","chunk-8b74a5c6"],{"0102":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shopping_Cart"},[o("div",{staticClass:"cart_left_wrapper"},[o("div",{staticClass:"orderTotal_info"},[o("div",{staticClass:"info_container"},[o("div",{staticClass:"left_infoContent"},[o("div",{staticClass:"table_orderTime"},[t.TABLE_INFO.table_name?o("div",{staticClass:"table"},[t._v(t._s(t.L("桌号"))+"："+t._s(t.TABLE_INFO.table_name))]):t._e(),t.ORDER_INFO.create_time_str?o("div",{staticClass:"underbox"},[t._v(" "+t._s(t.L("下单时间"))+"："+t._s(t.ORDER_INFO.create_time_str)+" ")]):t._e()]),o("div",{staticClass:"table_orderTime"},[t.TABLE_INFO.table_name?o("div",{staticClass:"table"},[t._v(t._s(t.L("就餐人数"))+"："+t._s(t.ORDER_INFO.book_num))]):t._e(),o("div",{staticClass:"underbox"},[t._v(t._s(t.L("店员"))+"："+t._s(t.staffname))])])])])]),o("div",{staticClass:"slider_cart_wrapper"},[o("div",{staticClass:"slider_cart_container"},[o("div",{staticClass:"order_List"},t._l(t.PAGE_INFO.goods_list,(function(e,s){return o("div",{key:s,staticClass:"order_items",class:e.is_selected?"selected_item":"",on:{click:function(e){return t.selectFood(s)}}},[o("orderGoodsItem",{attrs:{goods:e}})],1)})),0)])]),o("div",{staticClass:"bottom_tatol_info_wrapper"},[o("div",{staticClass:"tatol_info_container"},[o("div",{staticClass:"order_food_info"},[o("div",{staticClass:"order_tatol_num"},[t._v(t._s(t.L("已加菜X1项",{X1:t.PAGE_INFO.num})))]),o("div",{staticClass:"order_tatol_price"},[o("span",[t._v(t._s(t.L("￥")))]),t._v(" "+t._s(t.PAGE_INFO.total_price)+" ")])]),o("div",{staticClass:"confirmOrder_btn",class:t.canshow?"cantOrder":"",on:{click:function(e){return t.confirmOrder()}}},[t._v(" "+t._s(t.L("确定下单"))+" ")])])])]),o("div",{staticClass:"cart_right_wrapper"},[o("div",{staticClass:"food_operation"},[t.nowSelectgooods?o("div",{staticClass:"change_num"},[o("div",{staticClass:"reduce_icon",on:{click:function(e){return t.reduceFoodcount()}}},[o("a-icon",{attrs:{type:"minus"}})],1),o("div",{staticClass:"countnum"},[t._v(t._s(t.nowSelectgooods.num))]),o("div",{staticClass:"add_icon",on:{click:function(e){return t.addFoodcount()}}},[o("a-icon",{attrs:{type:"plus"}})],1)]):t._e(),o("div",{staticClass:"cancel_order"},[t.showReturnBtn?o("div",{staticClass:"cancel_order_btn",on:{click:function(e){return t.cancelOrder()}}},[t._v(t._s(t.L("撤单")))]):t._e()]),o("div",{staticClass:"clean_up"},[o("div",{staticClass:"clean_up_btn",class:t.canshow?"cantOrder":"",on:{click:function(e){return t.clearallgoods()}}},[t._v(t._s(t.L("清空")))])])])])])},i=[],n=(o("d81d"),o("d3b7"),o("159b"),o("ac1f"),o("5319"),o("8bbf")),a=o.n(n),r=o("9e03"),c={props:{showReturnBtn:Boolean,frompage:String},components:{orderGoodsItem:r["default"]},data:function(){return{ORDER_ID:"",TABLE_INFO:"",ORDER_INFO:"",PAGE_INFO:"",canshow:!0,staffname:"",currentfoodnumber:1,nowSelectgooods:"",nowSelectgooodsNum:"",buffer:!0}},destroyed:function(){this.$bus.$off("updatacart")},created:function(){this.ORDER_ID=this.$store.state.storestaff.nowOrderId,this.staffname=a.a.ls.get("storestaff_page_info").staff_name,this.getShopcartInfo()},watch:{"$store.state.storestaff.nowOrderId":function(t,e){this.getShopcartInfo()},"$store.state.storestaff.nowSelectgooodsNum":function(t,e){this.nowSelectgooodsNum=t,console.log(t)}},methods:{getShopcartInfo:function(){var t=this;this.request("/foodshop/storestaff.order/cartDetail",{order_id:this.$store.state.storestaff.nowOrderId}).then((function(e){console.log(e,"----------------------拿到购物车数据---------------------"),t.PAGE_INFO=e,t.TABLE_INFO=e.table_info,t.ORDER_INFO=e.order.order,t.$emit("uploadMenu",t.PAGE_INFO),e.goods_list.length>0?t.canshow=!1:t.canshow=!0,t.initData()}))},initData:function(){var t=this;if(console.log(this.$store.state.storestaff.nowSelectgooodsNum),this.PAGE_INFO.goods_list.length>0){console.log(this.PAGE_INFO.goods_list),this.PAGE_INFO.goods_list.map((function(e,o){t.$store.state.storestaff.nowSelectgooodsNum==e.uniqueness_number?(e.is_selected=!0,t.nowSelectgooods=e,t.nowSelectgooodsNum=e.uniqueness_number,console.log(t.nowSelectgooods)):e.is_selected=!1,t.$set(t.PAGE_INFO.goods_list,o,e)}));var e=this.PAGE_INFO.goods_list.some((function(e){return e.uniqueness_number==t.nowSelectgooods.uniqueness_number}));e||(this.nowSelectgooods="",this.nowSelectgooodsNum="",this.$store.commit("changenowSelectgooodsNum",""))}else console.log(this.nowSelectgooods),this.nowSelectgooods="",this.nowSelectgooodsNum="",this.$store.commit("changenowSelectgooodsNum","")},selectFood:function(t){var e=this;this.PAGE_INFO.goods_list.forEach((function(o,s){t==s?(o.is_selected=!0,o.is_selected&&(e.nowSelectgooods=o,e.$store.commit("changenowSelectgooodsNum",o.uniqueness_number))):o.is_selected=!1,e.$set(e.PAGE_INFO.goods_list,s,o)})),this.$forceUpdate()},watchmenu:function(t){var e=this;if(console.log(t,"foodinfo--shopcart"),console.log(this.nowSelectgooodsNum,"nowSelectgooodsNum--shopcart"),this.nowSelectgooodsNum){var o=this.PAGE_INFO.goods_list.some((function(t){return t.uniqueness_number==e.nowSelectgooodsNum}));console.log(o),o?this.PAGE_INFO.goods_list.forEach((function(t,o){console.log(t),t.uniqueness_number==e.nowSelectgooodsNum?(e.nowSelectgooods=t,t.is_selected=!0,e.addFoodcount()):t.is_selected=!1,e.$set(e.PAGE_INFO.goods_list,o,t)})):this.request("/foodshop/storestaff.order/addCart",{order_id:this.$store.state.storestaff.nowOrderId,product:t.length?t:[t],number:0==t.mini_num?"1":t.mini_num,operate_type:0}).then((function(t){console.log(t,"----------------------加减购物车---------------------"),0==t.status&&e.$message.error(t.msg),e.getShopcartInfo()}))}},reduceFoodcount:function(){var t=this;if(console.log(this.nowSelectgooods,"nowSelectgooods"),this.buffer){if(this.buffer=!1,this.nowSelectgooods.num>this.nowSelectgooods.mini_num)var e=1;else e=this.nowSelectgooods.mini_num||1;this.request("/foodshop/storestaff.order/addCart",{order_id:this.$store.state.storestaff.nowOrderId,uniqueness_number:this.nowSelectgooods.uniqueness_number,number:e,operate_type:1,product:[]}).then((function(e){console.log(e,"-----------------------减菜--------------------"),t.getShopcartInfo(),t.buffer=!0}))}},addFoodcount:function(){var t=this;if(this.buffer){if(this.buffer=!1,this.nowSelectgooods.num<this.nowSelectgooods.mini_num)var e=this.nowSelectgooods.mini_num;else e=1;this.request("/foodshop/storestaff.order/addCart",{order_id:this.$store.state.storestaff.nowOrderId,uniqueness_number:this.nowSelectgooods.uniqueness_number,number:e,product:[],operate_type:0}).then((function(e){console.log(e,"-----------------------加菜--------------------"),t.getShopcartInfo(),0==e.status&&t.$message.error(e.msg),t.buffer=!0}))}},clearallgoods:function(){var t=this;this.$confirm({title:this.L("提示"),content:this.L("确定要清空购物车吗")+"？",okText:this.L("确认"),centered:!0,cancelText:this.L("取消"),onOk:function(){t.request("/foodshop/storestaff.order/clearCart",{order_id:t.$store.state.storestaff.nowOrderId}).then((function(e){console.log(e),t.$store.commit("changenowSelectgooodsNum",""),t.nowSelectgooods="",t.getShopcartInfo()}))}})},cancelOrder:function(){var t=this;this.$confirm({title:this.L("提示"),content:this.L("是否取消订单")+"？",okText:this.L("确认"),centered:!0,cancelText:this.L("取消"),onOk:function(){t.request("/foodshop/storestaff.order/cancelOrder",{order_id:t.$store.state.storestaff.nowOrderId}).then((function(e){console.log(e),t.$router.go(-1),t.$store.commit("changeleftState",""),t.$store.commit("changenowSelectgooodsNum",""),t.nowSelectgooods=""}))}})},confirmOrder:function(){var t=this;this.request("/foodshop/storestaff.order/saveCart",{order_id:this.$store.state.storestaff.nowOrderId}).then((function(e){console.log(e),"order"==t.frompage?(t.$router.replace({name:"order"}),t.$store.commit("changeorderPageState","nomarlCode")):(t.$store.commit("changeleftState",2),t.$router.replace({name:"dining"}))}))}}},l=c,d=(o("d755"),o("2877")),u=Object(d["a"])(l,s,i,!1,null,"5d81bd6a",null);e["default"]=u.exports},"093b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU3QkUxNjQwRUI3QTExRUE5QkZDRkIwQjE5NTFFODUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU3QkUxNjQxRUI3QTExRUE5QkZDRkIwQjE5NTFFODUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTdCRTE2M0VFQjdBMTFFQTlCRkNGQjBCMTk1MUU4NTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTdCRTE2M0ZFQjdBMTFFQTlCRkNGQjBCMTk1MUU4NTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71tl/1AAAB1ElEQVR42rSWv0vDQBTHkyBYOjjo5D8gVYSOUn9WB0Uc/DG5q9hRV9HJOjmom0XB2cUqoqJClarB4uSiRZzVwS6CFfHn95WXEo9r0kvjg09L7i7vw+WSd6drV7uaSzSAIdALmkAdt+fADTgC2+DOKYnuIOoC86BDKy/OwCxIyzoNSVsArIITBYnGY0/53oCbqBakwGRhtuqh870pziUVBcE+iGiVR4RzBWWiFdCi+ReUa1kURcGY5n+M80tVFMU9rok9LsEm+BTWLG6JwqCtQskGaAejYFHoo/YwiUZ8kEyAL75+lYwZNhS/FTcJrfWMZFwniUKSjh9wDO4VJXv2V9oWIcNWu+yxxLWtGRxUKCkUAqNExzP/v9PzFWSqkmJRfcB/vdD+AvqBydfVIAmevEgQj1X4yUpENTwLS0YzGwTfHiQUWYPLuywsWStff3iUUKRJtOUwQJR5kVAk6dFdgwuH6mDJFriSzClKzslh7bBR3kN0n4sqfY89tCFarzftjOv/UL3XOPef/WgKZHyUUK5p2caXBwM+yTKcK1/qzEBHqG6Q4OfrZU0SvC45t1PQG4ix0FSQmHxPzD6Tcs51xcrLVaEPNAoHyFtwCHa4wpSMXwEGAExqcQ1KiE38AAAAAElFTkSuQmCC"},"10d6":function(t,e,o){},1825:function(t,e,o){},"1cc1":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.info?s("div",{staticClass:"change_diners_wrapper"},[s("div",{staticClass:"title_container"},[t._v(t._s(t.L("更改就餐人数")))]),s("div",{staticClass:"bottom_container"},[s("div",{staticClass:"table_info"},[s("div",{staticClass:"texttips"},[t._v(t._s(t.L("操作台号"))+"：")]),s("div",{staticClass:"infovalue"},[t._v(t._s(t.info.table_info.table_name))])]),s("div",{staticClass:"dinersnum_operation"},[s("div",{staticClass:"texttips"},[t._v(t._s(t.L("就餐人数"))+"：")]),s("div",{staticClass:"rightbtn_container"},[s("div",{staticClass:"reduce_box",on:{click:function(e){return t.reduceNum()}}},[s("img",{attrs:{src:o("f76e"),alt:""}})]),s("div",{staticClass:"numbox"},[s("div",{staticClass:"centerbox"},[t._v(t._s(t.info.order.book_num))])]),s("div",{staticClass:"add_box",on:{click:function(e){return t.addNum()}}},[s("img",{attrs:{src:o("334a"),alt:""}})])])]),s("div",{staticClass:"btn_container"},[s("div",{staticClass:"ccl_btn",on:{click:function(e){return t.closemodel()}}},[t._v(t._s(t.L("取消")))]),s("div",{staticClass:"cfm_btn",on:{click:function(e){return t.confirmChange()}}},[t._v(t._s(t.L("确认")))])])])]):t._e()},i=[],n=(o("8bbf"),{props:{tableInfo:Object},data:function(){return{info:"",minBookNum:1}},created:function(){console.log(this.tableInfo,"传入当前的就餐人数"),this.info=JSON.parse(JSON.stringify(this.tableInfo))},methods:{closemodel:function(){this.$emit("closemodel")},reduceNum:function(){var t=this.minBookNum||this.tableInfo.order.book_num;this.info.order.book_num>t&&this.info.order.book_num--},addNum:function(){this.info.order.book_num<255&&this.info.order.book_num++},confirmChange:function(){var t=this;this.request("/foodshop/storestaff.order/changePeopleNum",{order_id:this.$store.state.storestaff.nowOrderId,number:this.info.order.book_num}).then((function(e){console.log(e,"----------------------更改就餐人数---------------------"),e.msg==t.L("修改成功")?(t.$emit("changedinersNum",t.info),t.closemodel()):alert(e.msg)}))}}}),a=n,r=(o("23b1"),o("2877")),c=Object(r["a"])(a,s,i,!1,null,"2cbe054e",null);e["default"]=c.exports},"23b1":function(t,e,o){"use strict";o("10d6")},"334a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBNEI5QUZBRTlEMjExRUFBNDc5QkVFMzM3QTVCRTEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBNEI5QUZCRTlEMjExRUFBNDc5QkVFMzM3QTVCRTEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REE0QjlBRjhFOUQyMTFFQUE0NzlCRUUzMzdBNUJFMTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REE0QjlBRjlFOUQyMTFFQUE0NzlCRUUzMzdBNUJFMTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4kg9CMAAACKUlEQVR42mKUOLaNgQjACcTeQOwCxKZArAjEglC5t0B8H4hPA/FuIN4OxD8IGchIwGIRIC4F4nQg5mcgDnwA4qlA3ANlYwVMeAxIBOLbQFxGgqUgIADE1VC90aRYzAbEC4B4HtQQcgEotJYA8UwgZkGXZMFi6UYg9mCgHkgDYlEgDgXiv7h8PJvKlsJAIBBPxBXUoDiNI9Kg70CcA8SFQPyLSD3ZQByBbjEoKHpJ8MEqaMqdAMTrSNA3CZZuYBaXIuVLYsA3JPZ7EvSJQkMJbDEHEKcy0A9kATErE7REEqCjxaBs5gqy2I2B/sANZLHxAFhsAipAlPBkmdU4CvwjaGxmLGq4gTgEiNmxyKmw4EnNJUA8jQjXL4NibOA8tLJAB3z4KglWKgQpMy4JkI/fAbEQFrkuILYE4o9Y5A4i+TIKiO1x1FKBuKpOFmglLoSjlgrHofEvksU20IqAFHAHFNSnBiBVn2GCNlfoDXaCLN6Gr4lCA/ASiPeCLP5JZLahFpgCxH9g2akPiN+QoJkXiU1KrfYCWjXCmz6gJmoBtI1EDAA1Yy5C82kwCRaDGgOf0NtcS6H5kZgqElQMdpMYxJORGw3oJVcmEK+nQbyuhDUAcFn8FxqMM6lo6URo+/ovoXY1SEEGEEcC8WsKLHwOrZ0K0C0l1JNYAcRqQNxEYooH5dNaqN615PadkGsqNygGNRyUodnoP7TwuQvttO0EFQ5A/JuQgQABBgClw2WrX0osIAAAAABJRU5ErkJggg=="},"3ade":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shopping_Cart"},[o("div",{staticClass:"cart_left_wrapper"},[o("div",{staticClass:"orderTotal_info"},[o("div",{staticClass:"info_container"},[o("div",{staticClass:"left_infoContent"},[o("div",{staticClass:"table_orderTime"},[t.TABLE_INFO.id?o("div",{staticClass:"table"},[t._v(t._s(t.L("桌号"))+"："+t._s(t.TABLE_INFO.table_name))]):t._e(),o("div",{staticClass:"underbox"},[t._v(t._s(t.L("下单时间"))+"："+t._s(t.ORDER_INFO.create_time_str))])]),o("div",{staticClass:"table_orderTime"},[t.TABLE_INFO.id?o("div",{staticClass:"table"},[t._v(t._s(t.L("就餐人数"))+"："+t._s(t.ORDER_INFO.book_num))]):t._e(),o("div",{staticClass:"underbox"},[t._v(t._s(t.L("店员"))+"："+t._s(t.staffname))])])])])]),o("div",{staticClass:"slider_cart_wrapper"},[o("div",{staticClass:"slider_cart_container"},[o("div",{staticClass:"order_List"},t._l(t.ORDER_INFO.goods_detail,(function(e,s){return o("div",{key:s,staticClass:"pay_times_wrapper"},[t._l(e.goods_combine,(function(e,s){return o("div",{key:s,staticClass:"order_timers_list"},[t.TABLE_INFO.id||4==t.ORDER_INFO.order_from?o("div",{staticClass:"order_timers_title_info"},[o("div",{staticClass:"lefttitleText"},[t._v(t._s(e.number_str))]),o("div",{staticClass:"rightstate"},[t._v(t._s(e.status_str))])]):t._e(),t._l(e.goods,(function(t,e){return o("div",{key:e,staticClass:"order_items"},[o("orderGoodsItem",{attrs:{goods:t,pageType:"order"}})],1)})),e.refund_goods?o("div",t._l(e.refund_goods,(function(t,e){return o("div",{key:e,staticClass:"order_items",staticStyle:{position:"relative"}},[o("orderGoodsItem",{attrs:{goods:t,refund_goods:!0}})],1)})),0):t._e()],2)})),e.book_price>0?o("div",{staticClass:"book_price"},[t._v(" "+t._s(t.L("订金已抵扣"))+t._s(t.L("￥"))+t._s(e.book_price)+" ")]):t._e(),o("div",{staticClass:"order_price_info"},[e.pay_price?o("div",{staticClass:"priceInfo_content"},[o("div",{staticClass:"discount_money"},[t._v(t._s(t.L("优惠"))+t._s(t.L("￥"))+t._s(e.discount_price))]),o("div",{staticClass:"actual_payment"},[t._v(" "+t._s(t.L("实付"))+" "),o("span",[t._v(t._s(t.L("￥"))+t._s(e.pay_price))])])]):t._e()])],2)})),0)])]),o("div",{staticClass:"bottom_total_info_wrapper"},[o("div",{staticClass:"bottom_content"},[o("div",{staticClass:"topprice_content"},[o("div",{staticClass:"total_price_box"},[o("span",{staticClass:"total_count"},[t._v(t._s(t.L("共X1项",{X1:t.ORDER_INFO.go_pay_num})))]),o("span",[t._v("￥")]),t._v(" "+t._s(t.ORDER_INFO.goods_total_price)+" ")])])])])])])},i=[],n=o("8bbf"),a=o.n(n),r=o("9e03"),c={components:{orderGoodsItem:r["default"]},data:function(){return{staffname:"",ORDER_ID:"",TABLE_INFO:{},ORDER_INFO:{},PAGE_INFO:{}}},created:function(){this.ORDER_ID=this.$store.state.storestaff.nowOrderId,this.staffname=a.a.ls.get("storestaff_page_info").staff_name,this.getorderInfo()},methods:{getorderInfo:function(){var t=this;this.request("/foodshop/storestaff.order/orderDetail",{show_goods_detail:1,order_id:this.ORDER_ID}).then((function(e){console.log(e,"----------------------拿到订单数据---------------------"),t.PAGE_INFO=e,t.TABLE_INFO=e.table_info,t.ORDER_INFO=e.order}))},addmoreGoods:function(){this.$store.commit("changeleftState",1),this.$router.push({name:"menu",query:{orderId:this.ORDER_ID}})},openmodels:function(t){this.$emit(t)}}},l=c,d=(o("6ee6"),o("2877")),u=Object(d["a"])(l,s,i,!1,null,"1492510a",null);e["default"]=u.exports},"4ef9":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"payConfirm_alert_wrapper"},[s("div",{staticClass:"title_container"},[s("div",{staticClass:"leftempty_box"}),s("div",{staticClass:"title_font"},[t._v(t._s(t.L("打印")))]),s("div",{staticClass:"closeicon",on:{click:function(e){return t.closemodel()}}},[s("img",{attrs:{src:o("c588"),alt:""}})])]),s("div",{staticClass:"alert_content_wrapper"},[s("div",{staticClass:"billList_content"},t._l(t.billList,(function(e,i){return s("div",{key:i,staticClass:"bill_items"},[s("div",{staticClass:"select_content",on:{click:function(e){return t.selectItems(i)}}},[e.ischeck?s("div",{staticClass:"iconbox"},[s("img",{attrs:{src:o("093b"),alt:""}})]):s("div",{staticClass:"no_select"})]),s("div",{staticClass:"billname",on:{click:function(e){return t.selectItems(i)}}},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"selectall_content",on:{click:function(e){return t.changeAall()}}},[t.selectall?s("div",{staticClass:"iconbox"},[s("img",{attrs:{src:o("ebd4"),alt:""}})]):s("div",{staticClass:"select_all_border"}),s("div",{staticClass:"select_all_text"},[t._v(t._s(t.L("全选")))])])]),s("div",{staticClass:"confirm_bar",on:{click:function(e){return t.confirmPrinting()}}},[t._v(" "+t._s(t.L("确定"))+" ")])])},i=[],n=(o("a9e3"),o("d3b7"),o("159b"),o("d81d"),o("8bbf"),{props:{orderId:Number},data:function(){return{selectall:!0,billList:[{name:this.L("打印客看单"),type:"customer_account",ischeck:!0},{name:this.L("打印后厨单"),type:"menu",ischeck:!0},{name:this.L("打印预结单"),type:"pre_account",ischeck:!0},{name:this.L("打印结账单"),type:"bill_account",ischeck:!0}]}},methods:{selectItems:function(t){var e=this;this.billList.forEach((function(o,s){t==s&&(o.ischeck=!o.ischeck,o.ischeck?e.selectall=e.billList.every((function(t){return t.ischeck})):e.selectall=!1)}))},changeAall:function(){var t=this;this.selectall=!this.selectall,this.billList.map((function(e){return t.selectall?e.ischeck=!0:e.ischeck=!1}))},confirmPrinting:function(){var t=this,e=[];this.billList.forEach((function(t){t.ischeck&&e.push(t.type)})),e.length<1?this.$message.warning("请选择打印类型！"):this.request("/foodshop/storestaff.print/printOrder",{order_id:this.orderId,type:e}).then((function(e){console.log(e),t.closemodel()}))},closemodel:function(){this.$emit("closemodel")}}}),a=n,r=(o("bc14"),o("2877")),c=Object(r["a"])(a,s,i,!1,null,"63d7b7bd",null);e["default"]=c.exports},"5cff":function(t,e,o){},"5f3e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGMjBBQTA1MDI0NTExRUJCODE3QkJEOEZDMkFENkE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGMjBBQTA2MDI0NTExRUJCODE3QkJEOEZDMkFENkE5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUYyMEFBMDMwMjQ1MTFFQkI4MTdCQkQ4RkMyQUQ2QTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYyMEFBMDQwMjQ1MTFFQkI4MTdCQkQ4RkMyQUQ2QTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zqRzoAAAAoklEQVR42mJZvXohAxoIAOJ5QNwExBPQJVnQ+GFAvASIWbHIgQETEjsGiJdBFXcCcQ8+DclAvACImaFOqWDAAUDWpgPxdCBmBOKbQPwNiMtxqL8I0tAHVQwC6kDcwYAbfAJpKEKzYT4eDWAbZgLxHygNsoELiOtx6YB5ei4QJwDxXyCuw+cs5GAFhX8UEP+GerqEkAYQWAWNvPdQZ2IAgAADAKblHn/bdeSyAAAAAElFTkSuQmCC"},"6ee6":function(t,e,o){"use strict";o("1825")},"8a1d":function(t,e,o){"use strict";o("8d1e5")},"8d1e5":function(t,e,o){},"949d":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"diningTable_wrapper"},[o("div",{staticClass:"left_wrapper"},[o("div",{staticClass:"headertop_content"},[0!=t.LEFT_CONTENT_STATES&&t.selectOrderID?o("div",{staticClass:"info"},[o("div",{staticClass:"toBackbar_container"},[t.showBackbtn?o("div",{staticClass:"leftbackBtn",on:{click:function(e){return t.backPage()}}},[t._m(0),o("div",{staticClass:"bactext"},[t._v(t._s(t.L("返回已点菜单")))])]):t._e()]),o("div",{staticClass:"pagetitle"},[t._v(t._s(t.leftTitle))])]):t._e()]),o("div",{staticClass:"headerbottom_content"},[o("div",{staticClass:"white_info_wrapper"},[t.LEFT_CONTENT_STATES&&t.selectOrderID?o("div",{staticClass:"info"},[1==t.LEFT_CONTENT_STATES?o("shopCart",{ref:"shopcart",attrs:{showReturnBtn:t.showReturnBtn,frompage:t.frompage},on:{uploadMenu:t.uploadMenu}}):t._e(),2==t.LEFT_CONTENT_STATES?o("tableOrder",{ref:"orderDetails",attrs:{nowselected:Number(t.selectOrderID)},on:{opendiners:t.opendiner,printing:function(e){return t.openprinting()},openvipinfo:function(e){return t.openvipinfo()},changeSeat:function(e){return t.changeSeat()}}}):t._e(),4==t.LEFT_CONTENT_STATES?o("waitingClean",{ref:"waitingClean",attrs:{nowselected:Number(t.selectOrderID)},on:{opendiners:t.opendiner,printing:function(e){return t.openprinting()},openvipinfo:function(e){return t.openvipinfo()},changeSeat:function(e){return t.changeSeat()}}}):t._e(),3==t.LEFT_CONTENT_STATES?o("noBtn",{ref:"cashDetail"}):t._e()],1):o("div",{staticClass:"tips"},[t._v(t._s(t.L("选中餐台，开始点餐")))])])])]),o("div",{staticClass:"right_wrapper"},[o("keep-alive",{attrs:{include:t.keepAlive}},[o("router-view",{ref:"sonRouter",on:{titleState:t.changeTitle,backfromState:t.backfromState,foodClick:t.foodClick,returnbtn:t.returnbtn,uploadLeft:t.uploadLeft}})],1)],1),o("a-modal",{attrs:{wrapClassName:"borderradius",footer:null,title:null,centered:!0,width:"31%",maskClosable:!1,destroyOnClose:!0,closable:!1,bodyStyle:{padding:0}},model:{value:t.dinersModel,callback:function(e){t.dinersModel=e},expression:"dinersModel"}},[o("div",{staticClass:"alert_wrapper"},[o("changeDishers",{attrs:{tableInfo:t.tableInfo},on:{changedinersNum:t.changedinersNum,closemodel:function(e){return t.closemodelfnc()}}})],1)]),o("a-modal",{attrs:{wrapClassName:"borderradius",footer:null,title:null,centered:!0,width:"30%",maskClosable:!1,closable:!1,bodyStyle:{padding:0}},model:{value:t.warningShow,callback:function(e){t.warningShow=e},expression:"warningShow"}},[o("div",{staticClass:"alert_wrapper"},[o("warningModel",{on:{closemodel:function(e){return t.closemodelfnc()}}})],1)]),o("a-modal",{attrs:{wrapClassName:"borderradius",footer:null,title:null,centered:!0,width:"27%",maskClosable:!1,closable:!1,bodyStyle:{padding:0},destroyOnClose:!0},model:{value:t.printingShow,callback:function(e){t.printingShow=e},expression:"printingShow"}},[o("div",{staticClass:"alert_wrapper"},[o("printingModel",{attrs:{orderId:Number(t.selectOrderID)},on:{closemodel:function(e){return t.closemodelfnc()}}})],1)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"iconbox"},[s("img",{attrs:{src:o("5f3e"),alt:""}})])}],n=(o("b0c0"),o("ac1f"),o("5319"),o("0102")),a=o("3ade"),r=o("0235"),c=o("2136"),l=o("1cc1"),d=o("4ef9"),u={components:{shopCart:n["default"],tableOrder:r["default"],changeDishers:l["default"],printingModel:d["default"],noBtn:a["default"],waitingClean:c["default"]},props:{},data:function(){return{animateshow:!1,screenCurrent:0,tableCurrent:0,payMethod:"outline",showReturnBtn:!0,leftTitle:this.L("点菜单"),LEFT_CONTENT_STATES:0,selectOrderID:"",dinersModel:!1,alldishesReturn:!1,changeSeatshow:!1,payMethodshow:!1,printingShow:!1,warningShow:!1,cancelOrderbtn:!0,frompage:"",showBackbtn:!1,returnPage:"dining",tableInfo:"",loadoperation:"",orderInfo:""}},created:function(){this.$emit("getcurrent","diningTable"),this.$store.commit("changeOrder",""),this.$store.commit("changeleftState","")},watch:{"$store.state.storestaff.nowOrderId":function(t,e){console.log(t,"新的订单id进来了"),this.selectOrderID=t},"$store.state.storestaff.LEFT_CONTENT_STATES":function(t,e){console.log(t,"当前左侧的内容,1是购物车,2是详情,3是结算页，4是清台"),this.LEFT_CONTENT_STATES=t}},computed:{keepAlive:function(){return this.$store.getters.keepAlive}},mounted:function(){this.loadoperation=""},methods:{closemodelfnc:function(){this.dinersModel=!1,this.alldishesReturn=!1,this.changeSeatshow=!1,this.payConfim=!1,this.payMethodshow=!1,this.printingShow=!1,this.warningShow=!1},opendiner:function(t){this.tableInfo=t,this.dinersModel=!0},openprinting:function(){this.printingShow=!0},openvipinfo:function(){this.vipinfoShow=!0},changeSeat:function(){this.changeSeatshow=!0},foodClick:function(t){var e=this;console.log("菜单无规格无属性点击了"),console.log(this.$store.state.storestaff.LEFT_CONTENT_STATES,"LEFT_CONTENT_STATES"),this.LEFT_CONTENT_STATES=this.$store.state.storestaff.LEFT_CONTENT_STATES,this.$nextTick((function(){console.log(e.$refs.shopcart,"shopcart"),e.$refs.shopcart&&e.$refs.shopcart.watchmenu(t)}))},changedinersNum:function(t){"2"==this.LEFT_CONTENT_STATES?this.$refs.orderDetails.getorderInfo():this.$refs.waitingClean.getorderInfo()},uploadLeft:function(t){console.log("菜单页刷新在点餐台主页改变左侧状态，更新订单id"),this.$store.commit("changeOrder",t.id),this.$store.commit("changeleftState",t.type),this.selectOrderID=this.$store.state.storestaff.nowOrderId,console.log(this.selectOrderID),this.LEFT_CONTENT_STATES=this.$store.state.storestaff.LEFT_CONTENT_STATES,this.$refs.cashDetail&&this.$refs.cashDetail.getorderInfo()},returnbtn:function(t){console.log(t,"e-----this.showReturnBtn"),this.showReturnBtn=t,this.orderInfo&&(this.orderInfo.status>20||20==this.orderInfo.status)&&(this.showReturnBtn=!1)},changeTitle:function(t){console.log(t,"e"),"hide"==t.showstate?this.showBackbtn=!1:this.showBackbtn=!0,this.leftTitle=t.titleText?this.L("加菜单"):this.L("点菜单"),this.showReturnBtn=!t.titleText,console.log(this.showReturnBtn,"this.showReturnBtn"),t.operation&&(this.loadoperation=t.operation)},uploadMenu:function(t){console.log(t,"e---uploadMenu"),this.orderInfo=t.order.order||"",console.log(this.$route),"menu"==this.$route.name&&this.$refs.sonRouter.uplaodMenufc(t)},backfromState:function(t){this.frompage=0==t?"order":"table"},backPage:function(){console.log(this.loadoperation),"changeLefttwo"==this.loadoperation?this.$store.commit("changeleftState",2):"changeLeftone"==this.loadoperation&&this.$store.commit("changeleftState",1),this.$router.replace({name:this.returnPage})}}},f=u,h=(o("8a1d"),o("2877")),m=Object(h["a"])(f,s,i,!1,null,null,null);e["default"]=m.exports},bc14:function(t,e,o){"use strict";o("5cff")},bc30:function(t,e,o){},d755:function(t,e,o){"use strict";o("bc30")},ebd4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABd0lEQVRYR+2XO07DQBBA34SKlmOARGWLFnqHDi6QjoISUUGokGgRXbgAVMiGFkpLMdQcgQsgKrJo48R2kg3edT5GKC6t9bzn8cysV6j5EiM/fthmrbExVzfhA6/5Ph5zVKAb7gJXiPhzhWfBJEapDn5wO7yVC3SjFkJnMeCxqErt4Tdf9N1cIIliYGcpAvCKF3i5gE69yPOS4ClmkIU0AyuBf5sBpS5oSDiorTMU+1mdLbwGNNxvtjNgEh0BN64CX8C6c3eMw3WA5PES1KmdgEiISIve9yeKE0TOrSVM8LenTXq9O2DLTgAO8YL7bHE3bFtJ2MJL54ApUJmEC7xUIH310SykA8ucCVe4pYCdRBW4g8DvElXhjgLTJYp9rleZqn1a+1QYRJM1UQzuAq+QgSHKLOEKn0Fg8nNUgc8ooB8/xguuSaIDQE/JfMLZjswKNWAb2m7dSuBvZaC/X9f5W97faOo+mKS7XY1Hs2Lz1HY4tevgua76AZ0YLDCUc5A3AAAAAElFTkSuQmCC"},f76e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGNTgwNzcwRTlEMjExRUE4RkYyQkE3NEEwMDI2MTJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGNTgwNzcxRTlEMjExRUE4RkYyQkE3NEEwMDI2MTJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkY1ODA3NkVFOUQyMTFFQThGRjJCQTc0QTAwMjYxMkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkY1ODA3NkZFOUQyMTFFQThGRjJCQTc0QTAwMjYxMkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4l/34/AAAB3ElEQVR42sSXTStEURzG74w7XlKMwQfwki9gLOyZlJUipJSF980oYyMbS6HGW01KFhQJ2dAkX4BbPgCyRF4aNogbz7/+V7qdc++83HvnqV9NnXPP0zlzzvk/x6dpmpKGSkA7aAFNoAZUcNszuAUX4BScgA+7AVWb9ioQA8OgXNKnkgmDUZACq2CefwvltzAdAFdgysJUpCCY5m/7MjEuBJtggwfJVrRaWyAhWllVYHoE2hTnNASqQRfQZTNed9jUUAeIy5aa/tN+xT2Ngx6zMS3FguK+lox9YxjH/p1LN0UTnDCMi8Gg4p3GQMDPN1LQQ2M6Zq1kHFG8V4SMG/NgHKYLpFbS+A720rnwJSoFnaBI0FavWuzmSbCW48wuuViYVWZVJAIOLGmBVVl8ASFB2xxoBq9Zmgb5qhQppXIRD0mqVLdLm+ualvo8D7ta83Nc8VpJMj62iigu6AGckfGnA8cmE62Ab+M4LYInD0zvuTT+lUWKqFEPjCkMvJkTyDZHH7e0DA5kmYty8aELprtGAJAZ65wGEw6axjlf63a5mjqMgF7wmIPhHVenqNnU7iWxAxrAbIY7ns7pDH+7L+vkS/PRFuCkEuHgUMfl9Icvnxt+tCXpcgBfdgP+CjAAIoJVVJpMqJoAAAAASUVORK5CYII="}}]);