(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746c9bf1"],{"5e1f":function(o,e,t){},"6ea1":function(o,e,t){"use strict";var a={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};e["a"]=a},a710:function(o,e,t){"use strict";t("5e1f")},dfd6:function(o,e,t){"use strict";t.r(e);var a=function(){var o=this,e=o._self._c;return e("a-modal",{attrs:{title:o.title,width:400,visible:o.visible,confirmLoading:o.confirmLoading},on:{cancel:o.handleCancel,ok:o.handleSubmit}},[e("a-spin",{attrs:{spinning:o.confirmLoading}},[e("a-form",{staticClass:"scrollbar scroll_content",attrs:{form:o.form}},o._l(o.data.list,(function(t,a){return e("a-form-item",{attrs:{label:t.index_name,labelCol:o.labelCol,wrapperCol:o.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["indexs[".concat(a,"]"),{initialValue:t.index}],expression:"[`indexs[${index}]`, { initialValue: item.index }]"}],attrs:{type:"hidden"}}),e("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["stock_nums[".concat(a,"]"),{initialValue:t.stock_num}],expression:"[`stock_nums[${index}]`, { initialValue: item.stock_num }]"}],staticClass:"small-size",attrs:{min:-1}})],1)})),1)],1)],1)},s=[],i=t("6ea1"),d={data:function(){return{title:this.L("修改库存"),labelCol:{xs:{span:24},sm:{span:10}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),data:{goods_id:0}}},methods:{edit:function(o){this.visible=!0,this.data.goods_id=o,this.getEditInfo()},getEditInfo:function(){var o=this;this.request(i["a"].goodsDetail,{goods_id:this.data.goods_id}).then((function(e){o.data=e}))},handleSubmit:function(){var o=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,t){e?o.confirmLoading=!1:(t.goods_id=o.data.goods_id,t.type=5,o.request(i["a"].editSingleGoods,t).then((function(e){o.$message.success(o.L("编辑成功")),o.$emit("handleGoodsUpdate"),setTimeout((function(){o.form=o.$form.createForm(o),o.visible=!1,o.confirmLoading=!1}),1500)})).catch((function(e){o.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.form=this.$form.createForm(this)},cancel:function(){}}},r=d,n=(t("a710"),t("2877")),c=Object(n["a"])(r,a,s,!1,null,"1d12273b",null);e["default"]=c.exports}}]);