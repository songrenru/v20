(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fedbaa4"],{"0458":function(o,e,t){},"1dc6":function(o,e,t){"use strict";t("0458")},"6ea1":function(o,e,t){"use strict";var a={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};e["a"]=a},"8d77":function(o,e,t){"use strict";t.r(e);var a=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("a-modal",{attrs:{title:o.title,width:400,visible:o.visible,confirmLoading:o.confirmLoading},on:{cancel:o.handleCancel,ok:o.handleSubmit}},[t("a-spin",{attrs:{spinning:o.confirmLoading}},[t("a-form",{attrs:{form:o.form}},[t("a-form-item",{attrs:{label:o.L("当前库存"),labelCol:o.labelCol,wrapperCol:o.wrapperCol}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["spec_stock",{initialValue:1==o.detail.spec_stock_type?o.detail.stock_num:o.detail.spec_stock,rules:[{required:!0,message:o.L("请输入当前库存！")}]}],expression:"[\n            'spec_stock',\n            {\n              initialValue: detail.spec_stock_type == 1 ? detail.stock_num : detail.spec_stock,\n              rules: [{ required: true, message: L('请输入当前库存！') }],\n            },\n          ]"}],staticClass:"small-size",attrs:{disabled:1==o.detail.spec_stock_type,min:-1}})],1),t("a-form-item",{attrs:{label:o.L("原始库存"),labelCol:o.labelCol,wrapperCol:o.wrapperCol}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["spec_original_stock",{initialValue:1==o.detail.spec_stock_type?o.detail.original_stock:o.detail.spec_original_stock,rules:[{required:!0,message:o.L("请输入原始库存！")}]}],expression:"[\n            'spec_original_stock',\n            {\n              initialValue: detail.spec_stock_type == 1 ? detail.original_stock : detail.spec_original_stock,\n              rules: [{ required: true, message: L('请输入原始库存！') }],\n            },\n          ]"}],staticClass:"small-size",attrs:{disabled:1==o.detail.spec_stock_type,min:-1}})],1),1==o.detail.spec_stock_type?t("div",{staticStyle:{"margin-left":"16%","margin-bottom":"10px"}},[t("span",[o._v(o._s(o.L("继承商品库商品库存后，如需修改商品库该商品的当前库存则可以到商品库中修改，规格的库存为独有库存")))])]):o._e()],1)],1)],1)},s=[],i=t("6ea1"),r={data:function(){return{title:this.L("修改库存"),labelCol:{xs:{span:24},sm:{span:10}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),data:{pigcms_id:0,spec_stock:0,spec_original_stock:0},detail:{}}},methods:{edit:function(o,e,t,a){this.visible=!0,this.data.pigcms_id=o,this.data.spec_stock=e,this.data.spec_original_stock=t,this.detail=a,console.log(a)},handleSubmit:function(){var o=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,t){e?o.confirmLoading=!1:(t.pigcms_id=o.data.pigcms_id,t.type=3,console.log(t),o.request(i["a"].editSingleGoods,t).then((function(e){o.$message.success(o.L("编辑成功")),o.$emit("handleGoodsUpdate"),setTimeout((function(){o.form=o.$form.createForm(o),o.visible=!1,o.confirmLoading=!1}),1500)})).catch((function(e){o.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.form=this.$form.createForm(this)},cancel:function(){}}},d=r,c=(t("1dc6"),t("0c7c")),n=Object(c["a"])(d,a,s,!1,null,"1f41f99c",null);e["default"]=n.exports}}]);