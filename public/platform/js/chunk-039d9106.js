(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-039d9106"],{"2ab4":function(e,t,o){"use strict";var s={verification:"life_tools/storestaff.LifeToolsAppoint/verification",verifyList:"life_tools/storestaff.LifeToolsAppoint/verifyList",sportsVerification:"life_tools/storestaff.LifeToolsSports/verification",sportsVerifyList:"life_tools/storestaff.LifeToolsSports/verifyList",scenicVerification:"life_tools/storestaff.LifeToolsScenic/verification",scenicVerifyList:"life_tools/storestaff.LifeToolsScenic/verifyList",getCardOrderDetail:"life_tools/storestaff.LifeToolsScenic/getCardOrderDetail",getScenic:"life_tools/storestaff.LifeToolsScenic/getScenic",getTicket:"life_tools/storestaff.LifeToolsScenic/getTicket",confirmPrice:"life_tools/storestaff.LifeToolsOrder/confirm",saveOrde:"life_tools/storestaff.LifeToolsOrder/saveOrder",goPay:"life_tools/storestaff.LifeToolsOrder/goPay",getScenicOrderList:"/life_tools/storestaff.LifeToolsScenic/getOrderList",exportToolsOrder:"/life_tools/storestaff.LifeToolsScenic/exportToolsOrder",getScenicOrderDetail:"/life_tools/storestaff.LifeToolsScenic/getOrderDetail",agreeScenicOrderRefund:"/life_tools/storestaff.LifeToolsScenic/agreeRefund",refuseScenicOrderRefund:"/life_tools/storestaff.LifeToolsScenic/refuseRefund",sportsTimeCardVerifyOrderDetail:"/life_tools/storestaff.LifeToolsScenic/getCardOrderDetail"};t["a"]=s},"53ed":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{title:"",width:800,height:300,visible:e.visible,footer:null},on:{cancel:e.closeWindow}},[o("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}}},[o("a-form-item",{attrs:{label:"订单编号"}},[o("span",[e._v(e._s(e.detail.orderid))])]),o("a-form-item",{attrs:{label:"基本信息"}},[o("p",[e._v("订单类型："+e._s(e.detail.type_name))]),"card"==e.type?o("p",{staticClass:"item_order_detail"},[e._v("次卡名称："+e._s(e.detail.title))]):e._e(),o("p",{staticClass:"item_order_detail"},[e._v("景区名称："+e._s(e.detail.tools_title_val))]),o("p",{staticClass:"item_order_detail"},[e._v("订单状态："+e._s(e.detail.order_status_val))]),o("p",{staticClass:"item_order_detail"},[e._v("下单数量："+e._s(e.detail.num))]),o("p",{staticClass:"item_order_detail"},[e._v("下单时间："+e._s(e.detail.add_time))]),"card"==e.type?o("p",{staticClass:"item_order_detail"},[e._v("过期时间："+e._s(e.detail.out_time))]):e._e()]),o("a-form-item",{attrs:{label:"用户信息"}},[o("p",[e._v("下单用户昵称："+e._s(e.detail.nickname))]),o("p",{staticClass:"item_order_detail"},[e._v("在线支付金额："+e._s(e.detail.phone))])]),o("a-form-item",{attrs:{label:"价格信息"}},[o("p",[e._v("订单总价格："+e._s(e.detail.total_price))]),o("p",{staticClass:"item_order_detail"},[e._v("下单用户手机号："+e._s(e.detail.pay_money))]),o("p",{staticClass:"item_order_detail"},[e._v("平台余额支付金额："+e._s(e.detail.system_balance))]),o("p",{staticClass:"item_order_detail"},[e._v("商家余额支付金额："+e._s(e.detail.merchant_balance_pay))]),o("p",{staticClass:"item_order_detail"},[e._v("商家赠送余额支付金额："+e._s(e.detail.merchant_balance_give))])])],1)],1)},i=[],a=o("2ab4"),r=(o("6c54"),{data:function(){return{sort_id:0,type:"card",title:"添加类型",visible:!1,order_id:"",queryParam:{sort_id:0,name:"",describe:"",sort:0},detail:{orderid:"",type_name:"",title:"",tools_title_val:"",order_status_val:"",num:"",add_time:"",out_time:"",nickname:"",phone:"",total_price:"",pay_money:"",system_balance:"",merchant_balance_pay:"",merchant_balance_give:""},form:this.$form.createForm(this,{name:"coordinated"})}},methods:{getData:function(e,t){var o=this;this.type=t,this.request(a["a"].getCardOrderDetail,{order_id:e,type:t}).then((function(e){o.detail={orderid:"",type_name:"",title:"",tools_title_val:"",order_status_val:"",num:"",add_time:"",out_time:"",nickname:"",phone:"",total_price:"",pay_money:"",system_balance:"",merchant_balance_pay:"",merchant_balance_give:""},o.form.resetFields(),o.detail=e,o.visible=!0}))},closeWindow:function(){this.visible=!1}},mounted:function(){}}),d=r,c=(o("b771e"),o("0c7c")),l=Object(c["a"])(d,s,i,!1,null,null,null);t["default"]=l.exports},"6c54":function(e,t,o){"use strict";var s,i=o("ade3"),a=(s={getGoodsSortList:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortList",getGoodsSortEdit:"/merchant/merchant.deposit.DepositGoodsSort/handleGoodsSort",getGoodsSortInfo:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortInfo",delGoodsSort:"/merchant/merchant.deposit.DepositGoodsSort/delGoodsSort",goodsEdit:"/merchant/merchant.deposit.DepositGoods/goodsEdit",getGoodsSortSelect:"/merchant/merchant.deposit.DepositGoodsSort/getGoodsSortSelect",getGoodsList:"/merchant/merchant.deposit.DepositGoods/getGoodsList",getGoodsDetail:"/merchant/merchant.deposit.DepositGoods/getGoodsDetail",delGoods:"/merchant/merchant.deposit.DepositGoods/delGoods",getVerificationList:"/merchant/merchant.deposit.DepositGoodsVerification/getVerificationList",getCashBackList:"/merchant/merchant.Store/getCashBackList",exportCashBackList:"/merchant/merchant.Store/exportCashBackList",goodsTypeList:"/merchant/merchant.CardGoods/goodsTypeList",goodsTypeAdd:"/merchant/merchant.CardGoods/goodsTypeAdd",goodsTypeEdit:"/merchant/merchant.CardGoods/goodsTypeEdit",goodsTypeDel:"/merchant/merchant.CardGoods/goodsTypeDel",goodsList:"/merchant/merchant.CardGoods/goodsList",goodsAdd:"/merchant/merchant.CardGoods/goodsAdd"},Object(i["a"])(s,"goodsEdit","/merchant/merchant.CardGoods/goodsEdit"),Object(i["a"])(s,"goodsDel","/merchant/merchant.CardGoods/goodsDel"),Object(i["a"])(s,"goodsDetail","/merchant/merchant.CardGoods/goodsDetail"),Object(i["a"])(s,"couponList","/merchant/merchant.CardGoods/couponList"),Object(i["a"])(s,"goodsExchangeList","/merchant/merchant.CardGoods/goodsExchangeList"),s);t["a"]=a},b771e:function(e,t,o){"use strict";o("c185")},c185:function(e,t,o){}}]);