(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee34757a"],{10986:function(e,t,o){},6659:function(e,t,o){"use strict";var i={goodsDetail:"/shop/merchant.goods/goodsDetail",goodsList:"/shop/merchant.goods/goodsLibraryList",sortList:"/shop/merchant.sort/sortList"};t["a"]=i},"6ea1":function(e,t,o){"use strict";var i={getLists:"/foodshop/merchant.FoodshopStore/getStoreList",seeQrcode:"/foodshop/merchant.FoodshopStore/seeQrcode",orderList:"/foodshop/merchant.order/orderList",orderDetail:"/foodshop/merchant.order/orderDetail",orderExportUrl:"/foodshop/merchant.order/export",sortList:"/foodshop/merchant.sort/sortList",changeSort:"/foodshop/merchant.sort/changeSort",geSortDetail:"/foodshop/merchant.sort/geSortDetail",editSort:"/foodshop/merchant.sort/editSort",delSort:"/foodshop/merchant.sort/delSort",selectSortList:"/foodshop/merchant.sort/selectSortList",goodsList:"/foodshop/merchant.goods/goodsList",goodsDetail:"/foodshop/merchant.goods/goodsDetail",editSingleGoods:"/foodshop/merchant.goods/editSingleGoods",editGoods:"/foodshop/merchant.goods/editGoods",addGoods:"/foodshop/merchant.goods/addGoods",goodsDel:"/foodshop/merchant.goods/goodsDel",changeStatus:"/foodshop/merchant.goods/changeStatus",editGoodsBatch:"/foodshop/merchant.goods/editGoodsBatch",getShopDetail:"/foodshop/merchant.FoodshopStore/getShopDetail",shopEdit:"/foodshop/merchant.FoodshopStore/shopEdit",storePrintList:"/foodshop/merchant.print/getStorePrintList",tableTypeList:"/foodshop/merchant.FoodshopStore/tableTypeList",tableList:"/foodshop/merchant.FoodshopStore/tableList",getTableType:"/foodshop/merchant.FoodshopStore/getTableType",saveTableType:"/foodshop/merchant.FoodshopStore/saveTableType",delTableType:"/foodshop/merchant.FoodshopStore/delTableType",getTable:"/foodshop/merchant.FoodshopStore/getTable",saveTable:"/foodshop/merchant.FoodshopStore/saveTable",delTable:"/foodshop/merchant.FoodshopStore/delTable",downloadQrcodeTable:"/foodshop/merchant.FoodshopStore/downloadQrcodeTable",downloadQrcodeStore:"/foodshop/merchant.FoodshopStore/downloadQrcodeStore",getPrintRuleList:"/foodshop/merchant.print/getPrintRuleList",getPrintRuleDetail:"/foodshop/merchant.print/getPrintRuleDetail",editPrintRule:"/foodshop/merchant.print/editPrintRule",delPrintRule:"/foodshop/merchant.print/delPrintRule",getPrintGoodsList:"/foodshop/merchant.print/getPrintGoodsList",getPackageList:"/foodshop/merchant.Package/getPackageList",removePackage:"/foodshop/merchant.Package/delPackage",getPackageDetail:"/foodshop/merchant.Package/getPackageDetail",editPackage:"/foodshop/merchant.Package/editPackage",getPackageDetailList:"/foodshop/merchant.Package/getPackageDetailList",editPackageDetail:"/foodshop/merchant.Package/editPackageDetail",getPackageDetailInfo:"/foodshop/merchant.Package/getPackageDetailInfo",delPackageDetail:"/foodshop/merchant.Package/delPackageDetail",getPackageDetailGoodsList:"/foodshop/merchant.Package/getPackageDetailGoodsList",getPackageGoodsList:"/foodshop/merchant.Package/getPackageGoodsList"};t["a"]=i},"7a1b":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{destroyOnClose:"",title:e.title,width:900,visible:e.visible,confirmLoading:e.confirmLoading,bodyStyle:{"max-height":"700px","overflow-y":"auto"}},on:{cancel:e.handleCancel,ok:e.handleSubmit}},[o("a-spin",{attrs:{spinning:e.confirmLoading}},[o("a-form",{attrs:{form:e.form}},[o("a-form-item",{attrs:{label:e.L("商品名称"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.L("餐饮商品数据来源于店铺商品库，请提前至综合店铺管理--商品库中进行管理商品")}},[o("a-input-group",[o("a-row",{attrs:{gutter:8}},[e.detail.goods_id?o("a-col",{attrs:{span:14}},[e.detail.goods_id?o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:e.L("请选择商品！")}]}],expression:"[\n                  'name',\n                  { initialValue: detail.name, rules: [{ required: true, message: L('请选择商品！') }] },\n                ]"}],attrs:{disabled:!0}}):e._e()],1):e._e(),o("a-col",{attrs:{span:8}},[o("a-button",{staticStyle:{color:"#40a9ff"},attrs:{type:"dashed"},on:{click:e.clicAddGoods}},[o("a-icon",{attrs:{type:"plus"}}),e._v(e._s(e.L("选择商品库商品"))+" ")],1)],1)],1)],1)],1),o("a-form-item",{attrs:{label:e.L("商品分类"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["spec_sort_id",{initialValue:String(e.sort_id)}],expression:"['spec_sort_id', { initialValue: String(sort_id) }]"}],staticStyle:{width:"200px"}},e._l(e.sortList,(function(t){return o("a-select-option",{key:String(t.sort_id),attrs:{value:String(t.sort_id)}},[e._v(e._s(t.sort_name))])})),1)],1),o("a-form-item",{attrs:{label:e.L("商品简称"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.L("用于店员端点菜时快速搜索到该商品")}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["abbreviation",{initialValue:e.detail.abbreviation}],expression:"['abbreviation', { initialValue: detail.abbreviation }]"}],staticStyle:{width:"200px"}})],1),o("a-form-item",{attrs:{label:e.L("售卖价格"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["price",{initialValue:e.detail.price,rules:[{required:!0,message:e.L("请输入价格！")}]}],expression:"[\n            'price',\n            { initialValue: detail.price, rules: [{ required: true, message: L('请输入价格！') }] },\n          ]"}],staticStyle:{width:"200px"},attrs:{precision:"2",step:"0.01"}})],1),o("a-form-item",{attrs:{label:e.L("售卖库存"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.L("继承商品库商品库存后，如需修改商品库该商品的当前库存则可以到商品库中修改，规格的库存为独有库存")}},[o("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["spec_stock_type",{initialValue:e.detail.spec_stock_type,rules:[{required:!0}]}],expression:"['spec_stock_type', { initialValue: detail.spec_stock_type, rules: [{ required: true }] }]"}],attrs:{name:"spec_stock_type"},on:{change:e.changeStockType}},[o("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("沿用商品库商品库存")))]),o("a-radio",{attrs:{value:0}},[e._v(e._s(e.L("独有库存")))])],1)],1),o("a-form-item",{attrs:{label:e.L("当前库存/原始库存"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.showStockTip?e.L("商品库里的该商品当前库存为【0】，不可继续售卖，请先补足商品库里的该商品当前库存"):""}},[o("div",{staticClass:"stock-content"},[o("span",[o("a-input-group",{attrs:{compact:""}},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["spec_stock",{initialValue:1==e.detail.spec_stock_type?e.detail.stock_num:e.detail.spec_stock,rules:[]}],expression:"[\n                  'spec_stock',\n                  {\n                    initialValue: detail.spec_stock_type == 1 ? detail.stock_num : detail.spec_stock,\n                    rules: [],\n                  },\n                ]"}],staticStyle:{width:"80px","border-right":"0"},attrs:{disabled:1==e.detail.spec_stock_type,min:-1},on:{change:e.stockNumChange}}),o("a-input-number",{staticStyle:{width:"40px","border-left":"0","border-right":"0","pointer-events":"none"},attrs:{placeholder:"/",disabled:1==e.detail.spec_stock_type,min:-1}}),o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["spec_original_stock",{initialValue:1==e.detail.spec_stock_type?e.detail.original_stock:e.detail.spec_original_stock,rules:[]}],expression:"[\n                  'spec_original_stock',\n                  {\n                    initialValue: detail.spec_stock_type == 1 ? detail.original_stock : detail.spec_original_stock,\n                    rules: [],\n                  },\n                ]"}],staticStyle:{width:"80px","text-align":"center","border-left":"0"},attrs:{disabled:1==e.detail.spec_stock_type,min:-1}})],1)],1),0==e.detail.spec_stock_type?o("span",{},[o("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["stock_type",{valuePropName:"checked",initialValue:0!=e.detail.stock_type}],expression:"[\n                'stock_type',\n                { valuePropName: 'checked', initialValue: detail.stock_type != 0 ? true : false },\n              ]"}]},[e._v(" "+e._s(e.L("次日置满"))+" "),o("custom-tooltip",{attrs:{text:e.L("开启后，次日00:00自动置满库存")}})],1)],1):e._e()])]),o("a-form-item",{attrs:{label:e.L("最小购买量"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["min_num",{initialValue:e.detail.min_num,rules:[{required:!0,message:e.L("请输入1~50的整数！")}]}],expression:"[\n            'min_num',\n            { initialValue: detail.min_num, rules: [{ required: true, message: L('请输入1~50的整数！') }] },\n          ]"}],attrs:{min:1,max:50}}),e._v(" "+e._s(e.detail.unit)+" ")],1),o("a-form-item",{attrs:{label:e.L("是否必点菜"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,help:e.L("一般用于餐具等，如果此商品有规格属性或者附属菜则必点菜功能失效")}},[o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_must",{initialValue:1==e.detail.is_must,valuePropName:"checked"}],expression:"['is_must', { initialValue: detail.is_must == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":e.L("是"),"un-checked-children":e.L("否")}})],1),o("a-form-item",{attrs:{label:e.L("是否只可店员下单"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["only_staff",{initialValue:1==e.detail.only_staff,valuePropName:"checked"}],expression:"[\n            'only_staff',\n            { initialValue: detail.only_staff == 1 ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":e.L("是"),"un-checked-children":e.L("否")}})],1),o("a-form-item",{attrs:{label:e.L("是否推荐"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_recommend",{initialValue:1==e.detail.is_recommend,valuePropName:"checked"}],expression:"[\n            'is_recommend',\n            { initialValue: detail.is_recommend == 1 ? true : false, valuePropName: 'checked' },\n          ]"}],attrs:{"checked-children":e.L("是"),"un-checked-children":e.L("否")}})],1),e.detail.list&&e.detail.list.length>0?o("a-divider",{attrs:{dashed:""}}):e._e(),e.detail.list&&e.detail.list.length>0?o("a-form-item",{attrs:{label:e.L("售卖规格"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.detail.list,pagination:!1,rowKey:"index"},scopedSlots:e._u([{key:"price",fn:function(t,i,s){return o("span",{},[o("a-form-item",[o("a-input",{attrs:{type:"hidden"},model:{value:e.index_arr[s],callback:function(t){e.$set(e.index_arr,s,t)},expression:"index_arr[ind]"}})],1),o("a-form-item",[o("a-input",{staticStyle:{width:"60px"},model:{value:e.price_arr[s],callback:function(t){e.$set(e.price_arr,s,t)},expression:"price_arr[ind]"}})],1)],1)}},{key:"stock_num",fn:function(t,i,s){return o("span",{},[o("a-form-item"),o("a-form-item",[o("a-input-number",{staticStyle:{width:"60px"},attrs:{min:-1},model:{value:e.stock_arr[s],callback:function(t){e.$set(e.stock_arr,s,t)},expression:"stock_arr[ind]"}})],1)],1)}}],null,!1,3312813385)})],1):e._e(),e.detail.list&&e.detail.list.length>0?o("a-divider",{attrs:{dashed:""}}):e._e(),e.detail.properties_list&&e.detail.properties_list.length>0?o("a-form-item",{attrs:{label:e.L("售卖属性"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.detail.properties_list,(function(t){return o("div",[e._v(" "+e._s(e.L("属性名称"))+"："+e._s(t.name)+" "),o("div",{staticStyle:{"font-weight":"bold","border-bottom":"1px solid #d9d9d9"}},[e._v(e._s(e.L("属性值")))]),e._l(t.val,(function(t){return o("div",{staticStyle:{"border-bottom":"1px solid #f2f2f2"}},[e._v(e._s(t))])}))],2)})),0):e._e(),e.detail.subsidiary_piece&&e.detail.subsidiary_piece.length>0?o("a-form-item",{attrs:{label:e.L("售卖附属菜"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.detail.subsidiary_piece,(function(t,i){return o("div",[o("div",[e._v(" "+e._s(e.L("区块名称"))+"："+e._s(t.name)+" "+e._s(e.L("设置区块总的最少购买数和最大购买数"))+"："+e._s(t.mininum)+" ~ "+e._s(t.maxnum)+" ")]),o("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columnsSub,"data-source":t.goods,pagination:!1,rowKey:"index"},scopedSlots:e._u([{key:"product_price",fn:function(t,i){return o("span",{},[i.has_spec?o("span",[e._v(e._s(e.L("多规格")))]):o("span",[e._v(e._s(t))])])}}],null,!0)})],1)})),0):e._e(),e.detail.properties_list&&e.detail.properties_list.length>0?o("a-divider",{attrs:{dashed:""}}):e._e(),o("a-form-item",{attrs:{label:e.L("售卖时间"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["all_date",{initialValue:e.detail.all_date,rules:[{required:!0}]}],expression:"['all_date', { initialValue: detail.all_date, rules: [{ required: true }] }]"}],attrs:{name:"date_type"},on:{change:e.onDataTypeChange}},[o("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("全时段售卖")))]),o("a-radio",{attrs:{value:0}},[e._v(e._s(e.L("自定义时间")))])],1)],1),0==e.detail.all_date?o("a-form-item",{staticClass:"date-content",attrs:{label:e.L("选择时间段"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date_range",{initialValue:""==e.detail.show_start_date?null:[e.moment(e.detail.show_start_date,e.dateFormat),e.moment(e.detail.show_end_date,e.dateFormat)]}],expression:"[\n            'date_range',\n            {\n              initialValue:\n                detail.show_start_date == ''\n                  ? null\n                  : [moment(detail.show_start_date, dateFormat), moment(detail.show_end_date, dateFormat)],\n            },\n          ]"}],staticStyle:{width:"320px"},attrs:{allowClear:!0},on:{change:e.dateOnChange}},[o("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1),o("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["week",{initialValue:e.detail.week}],expression:"['week', { initialValue: detail.week }]"}],attrs:{options:e.weekList},on:{change:e.onWeekChange}})],1):e._e(),0==e.detail.all_date?o("a-form-item",{attrs:{label:e.L("售卖时间段"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["all_time",{initialValue:e.detail.all_time,rules:[{required:!0}]}],expression:"['all_time', { initialValue: detail.all_time, rules: [{ required: true }] }]"}],attrs:{name:"time_type"},on:{change:e.onTimeTypeChange}},[o("a-radio",{attrs:{value:1}},[e._v(e._s(e.L("全时段售卖")))]),o("a-radio",{attrs:{value:0}},[e._v(e._s(e.L("自定义时间")))])],1)],1):e._e(),0==e.detail.all_time?o("a-form-item",{staticClass:"date-content",attrs:{label:e.L("选择时间段"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_start_time",{initialValue:""==e.detail.show_start_time?null:e.moment(e.detail.show_start_time,e.timeFormat)}],expression:"[\n            'show_start_time',\n            { initialValue: detail.show_start_time == '' ? null : moment(detail.show_start_time, timeFormat) },\n          ]"}],attrs:{format:e.timeFormat}}),o("span",{staticClass:"time_space"},[e._v(e._s(e.L("至")))]),o("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_end_time",{initialValue:""==e.detail.show_end_time?null:e.moment(e.detail.show_end_time,e.timeFormat)}],expression:"[\n            'show_end_time',\n            { initialValue: detail.show_end_time == '' ? null : moment(detail.show_end_time, timeFormat) },\n          ]"}],attrs:{format:e.timeFormat}}),o("br"),o("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_start_time2",{initialValue:""==e.detail.show_start_time2?null:e.moment(e.detail.show_start_time2,e.timeFormat)}],expression:"[\n            'show_start_time2',\n            { initialValue: detail.show_start_time2 == '' ? null : moment(detail.show_start_time2, timeFormat) },\n          ]"}],attrs:{format:e.timeFormat}}),o("span",{staticClass:"time_space"},[e._v(e._s(e.L("至")))]),o("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_end_time2",{initialValue:""==e.detail.show_end_time2?null:e.moment(e.detail.show_end_time2,e.timeFormat)}],expression:"[\n            'show_end_time2',\n            { initialValue: detail.show_end_time2 == '' ? null : moment(detail.show_end_time2, timeFormat) },\n          ]"}],attrs:{format:e.timeFormat}}),o("br"),o("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_start_time3",{initialValue:""==e.detail.show_start_time3?null:e.moment(e.detail.show_start_time3,e.timeFormat)}],expression:"[\n            'show_start_time3',\n            { initialValue: detail.show_start_time3 == '' ? null : moment(detail.show_start_time3, timeFormat) },\n          ]"}],attrs:{format:e.timeFormat}}),o("span",{staticClass:"time_space"},[e._v(e._s(e.L("至")))]),o("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["show_end_time3",{initialValue:""==e.detail.show_end_time3?null:e.moment(e.detail.show_end_time3,e.timeFormat)}],expression:"[\n            'show_end_time3',\n            { initialValue: detail.show_end_time3 == '' ? null : moment(detail.show_end_time3, timeFormat) },\n          ]"}],attrs:{format:e.timeFormat}})],1):e._e(),o("a-form-item",{attrs:{label:e.L("排序值"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.sort}],expression:"['sort', { initialValue: detail.sort }]"}]})],1),o("a-form-item",{attrs:{label:e.L("状态"),labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==e.detail.status,valuePropName:"checked"}],expression:"['status', { initialValue: detail.status == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":e.L("开启"),"un-checked-children":e.L("关闭")}})],1)],1)],1),o("select-shop-goods",{attrs:{visible:e.selectGoodsVisible,storeId:e.store_id,source:"foodshop_goods_library",type:e.goodsSelectType},on:{"update:visible":function(t){e.selectGoodsVisible=t},onSubmit:e.onGoodsSelect}})],1)},s=[],a=(o("159b"),o("b0c0"),o("99af"),o("c1df")),r=o.n(a),l=o("6ea1"),n=o("6659"),d=o("ca00"),c=o("8c58"),h=o("7a6b"),m={components:{SelectShopGoods:c["a"],CustomTooltip:h["a"]},data:function(){return{title:"新建商品",timeFormat:"HH:mm:ss",dateFormat:"YYYY-MM-DD",labelCol:{xs:{span:12},sm:{span:6}},wrapperCol:{xs:{span:12},sm:{span:15}},dateSelect:"",timeSelect:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),categoryList:[],showMethod:[],detail:{sort_id:0,store_id:this.$route.query.store_id,print_id:"",show_start_date:"",show_end_date:"",week:[this.L("星期日"),this.L("星期一"),this.L("星期二"),this.L("星期三"),this.L("星期四"),this.L("星期五"),this.L("星期六")],show_start_time:"",show_end_time:"",show_start_time2:"",show_end_time2:"",show_start_time3:"",show_end_time3:"",all_date:1,all_time:1,date_range:"",status:1,spec_stock_type:1,pigcms_id:0,goods_id:0,min_num:1},weekList:[this.L("星期日"),this.L("星期一"),this.L("星期二"),this.L("星期三"),this.L("星期四"),this.L("星期五"),this.L("星期六")],printList:[],sortList:[],shopGoods:null,goods_id:0,sort_id:0,store_id:0,selectGoodsVisible:!1,goodsSelectType:"radio",columns:[],price_arr:[],stock_arr:[],index_arr:[],columnsBase:[{title:this.L("原价"),dataIndex:"old_price"},{title:this.L("现价"),dataIndex:"price",scopedSlots:{customRender:"price"}},{title:this.L("库存"),dataIndex:"stock_num",scopedSlots:{customRender:"stock_num"}}],columnsSub:[{title:this.L("附属商品"),dataIndex:"product_name"},{title:this.L("售价"),dataIndex:"product_price",scopedSlots:{customRender:"product_price"}},{title:this.L("最少可选数"),dataIndex:"mini_num"},{title:this.L("最多可选数"),dataIndex:"max_num"},{title:this.L("排序"),dataIndex:"sort"}],showStockTip:!1}},mounted:function(){},methods:{moment:r.a,add:function(e,t){this.visible=!0,this.sort_id=t,this.store_id=e,this.title=this.L("新建商品"),this.detail={},this.detail={sort_id:0,store_id:this.$route.query.store_id,print_id:"",show_start_date:"",show_end_date:"",week:[this.L("星期日"),this.L("星期一"),this.L("星期二"),this.L("星期三"),this.L("星期四"),this.L("星期五"),this.L("星期六")],show_start_time:"",show_end_time:"",show_start_time2:"",show_end_time2:"",show_start_time3:"",show_end_time3:"",abbreviation:"",all_date:1,all_time:1,date_range:"",status:1,spec_stock_type:1,pigcms_id:0,goods_id:0,min_num:1},this.showStockTip=!1,this.getSortList()},edit:function(e,t,o){this.visible=!0,this.sort_id=t,console.log("sort_id",this.sort_id),this.store_id=e,this.goods_id=o,this.detail.goods_id=this.goods_id,this.title=this.L("编辑商品"),this.getSortList(),this.getEditInfo()},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,o){if(console.log(t),t)e.confirmLoading=!1;else{o.store_id=e.store_id,o.pigcms_id=e.detail.pigcms_id,o.goods_id=e.detail.goods_id,o.show_start_date=e.detail.show_start_date,o.show_end_date=e.detail.show_end_date,o.stock_type=o.stock_type?1:0,o.prices=e.price_arr,o.stock_nums=e.stock_arr,o.indexs=e.index_arr,o.all_date=e.detail.all_date;var i={show_start_time:"time",show_end_time:"time",show_start_time2:"time",show_end_time2:"time",show_start_time3:"time",show_end_time3:"time"};if(Object(d["b"])(o,i),console.log(o),!o.goods_id)return e.$message.error(e.L("请选择商品")),e.confirmLoading=!1,!0;e.request(l["a"].editGoods,o).then((function(t){e.detail.pigcms_id?(e.$message.success(e.L("编辑成功")),e.$emit("handleGoodsUpdate")):(e.$message.success(e.L("添加成功")),e.$emit("handleGoodsUpdate",1)),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",o)}),1500)})).catch((function(t){e.confirmLoading=!1}))}}))},handleCancel:function(){this.visible=!1,this.form=this.$form.createForm(this)},getEditInfo:function(){var e=this;this.request(l["a"].goodsDetail,{goods_id:this.detail.goods_id}).then((function(t){e.detail=t,console.log(1==t.spec_stock_type&&0==t.spec_stock||1!=t.spec_stock_type&&0==t.stock_num),0==t.stock_num?e.showStockTip=!0:e.showStockTip=!1,console.log(e.index_arr,"index_arr1"),t.list.length&&(e.price_arr=[],e.stock_arr=[],e.index_arr=[],t.list.forEach((function(t){e.price_arr.push(t.price),e.stock_arr.push(t.stock_num),e.index_arr.push(t.index)}))),e.createColumn(e.detail)}))},getStorePrintList:function(){var e=this;this.request(l["a"].storePrintList,{store_id:this.store_id}).then((function(t){e.printList=t.list}))},getSortList:function(){var e=this;this.request(l["a"].selectSortList,{store_id:this.store_id}).then((function(t){e.sortList=t}))},getShopDetail:function(){var e=this;this.request(n["a"].goodsDetail,{goods_id:this.goods_id}).then((function(t){e.shopGoods=t,e.shopDetail()}))},createColumn:function(e){var t=[];if(e.spec_list)for(var o in e.spec_list)console.log(o),t.push({title:e.spec_list[o].name,dataIndex:"spec_val_sid_"+e.spec_list[o].id});this.columns=t.concat(this.columnsBase),console.log(this.columns)},clicAddGoods:function(){this.selectGoodsVisible=!0},onGoodsSelect:function(e){console.log(e),this.selectGoodsVisible=!1,e.ids&&(this.goods_id=e.ids,this.getShopDetail())},shopDetail:function(){this.detail={},this.detail={spec_stock_type:1,print_id:"",show_start_date:"",show_end_date:"",week:[this.L("星期日"),this.L("星期一"),this.L("星期二"),this.L("星期三"),this.L("星期四"),this.L("星期五"),this.L("星期六")],show_start_time:"",show_end_time:"",show_start_time2:"",show_end_time2:"",show_start_time3:"",show_end_time3:"",all_date:1,all_time:1,min_num:1},this.detail.goods_id=this.shopGoods.goods_id,this.detail.name=this.shopGoods.name,this.detail.price=this.shopGoods.price,this.detail.stock_num=this.shopGoods.stock_num,1==this.shopGoods.spec_stock_type&&0==this.shopGoods.spec_stock||1!=this.shopGoods.spec_stock_type&&0==this.shopGoods.stock_num?this.showStockTip=!0:this.showStockTip=!1,this.detail.original_stock=this.shopGoods.original_stock,this.detail.spec_stock=this.shopGoods.stock_num,this.detail.spec_original_stock=this.shopGoods.original_stock,this.detail.list=this.shopGoods.list,this.detail.properties_list=this.shopGoods.properties_list,this.detail.subsidiary_piece=this.shopGoods.subsidiary_piece,this.createColumn(this.shopGoods)},onDataTypeChange:function(e){this.detail.all_date=e.target.value},dateOnChange:function(e,t){this.detail.show_start_date=t[0],this.detail.show_end_date=t[1]},onWeekChange:function(e){},onTimeTypeChange:function(e){this.detail.all_time=e.target.value},changeStockType:function(e){this.detail.spec_stock_type=e.target.value},cancel:function(){},stockNumChange:function(e){0==e.data?this.showStockTip=!0:this.showStockTip=!1}}},p=m,_=(o("86b0"),o("2877")),u=Object(_["a"])(p,i,s,!1,null,"abfe5f7a",null);t["default"]=u.exports},"86b0":function(e,t,o){"use strict";o("10986")},"8c58":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[o("div",{staticClass:"select-goods"},[o("div",{staticClass:"left scrollbar"},[o("a-menu",{attrs:{mode:"inline","open-keys":e.openKeys,selectedKeys:e.selectedSort},on:{openChange:e.onOpenChange,select:e.onSelect}},[e._l(e.sortList,(function(t){return[t.son_list&&t.son_list.length?o("a-sub-menu",{key:t.sort_id},[o("span",{attrs:{slot:"title"},slot:"title"},[o("span",[e._v(e._s(t.sort_name))])]),t.son_list&&t.son_list.length?[e._l(t.son_list,(function(t){return[t.son_list&&t.son_list.length?[o("a-sub-menu",{key:t.sort_id,attrs:{title:t.sort_name}},e._l(t.son_list,(function(t){return o("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])})),1)]:[o("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]]}))]:e._e()],2):o("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]}))],2)],1),o("div",{staticClass:"right"},[o("div",{staticClass:"top"},[o("a-input-search",{staticClass:"search",attrs:{placeholder:e.L("商品名称")},on:{change:e.onSearchChange,search:e.onSearch},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),o("div",{staticClass:"bottom"},[o("a-table",{attrs:{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.tableList,rowKey:"goods_id",scroll:{y:500},pagination:!!e.tableList.length},scopedSlots:e._u([{key:"name",fn:function(t,i){return o("span",{},[o("div",{staticClass:"product-info"},[o("div",[o("img",{attrs:{src:i.image_url}})]),o("div",[e._v(e._s(t))])])])}},{key:"price",fn:function(t,i){return o("span",{},[o("span",[e._v(e._s(t))]),o("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s("1"==i.has_spec?"（"+e.L("多规格")+"）":""))])])}},{key:"selected",fn:function(t){return o("span",{},["1"==t?o("span",{staticClass:"cr-blue"},[e._v(e._s(e.L("已添加过")))]):e._e()])}}])})],1)])])])},s=[],a=(o("a9e3"),o("159b"),o("4de4"),o("99af"),o("d3b7"),o("25f0"),o("7db0"),o("6659")),r={name:"SelectShopGoods",props:{visible:{type:Boolean,default:!1},storeId:{type:[String,Number],default:"0"},source:{type:String,default:"foodshop_goods_library"},type:{type:String,default:"checkbox"}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"商品",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"}},{title:"",dataIndex:"selected",width:100,scopedSlots:{customRender:"selected"}}],menuId:0,hasSelected:[],selectedRowKeys:[],selectedSort:[],sortList:[],keywords:"",tableList:[],oldMenuId:""}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:this.type,onChange:this.onChange,getCheckboxProps:function(e){return{props:{disabled:"1"==e.selected}}}}}},watch:{visible:function(e,t){this.dialogVisible=e,e&&(this.init(),this.getSortList())}},mounted:function(){this.dialogVisible=this.visible},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.selectedSort=[],this.tableList=[],this.keywords="",this.currentPage=1},getSortList:function(){var e=this;this.request(a["a"].sortList,{store_id:this.storeId}).then((function(t){e.sortList=t,e.sortList.length&&e.handleDefaultSelect()}))},handleDefaultSelect:function(){var e=this;this.init(),this.sortList.forEach((function(t,o){if(e.rootSubmenuKeys.push(t.sort_id),t.son_list&&t.son_list.length){0==o&&e.openKeys.push(t.sort_id);var i=t.son_list;i.forEach((function(t,i){if(t.son_list&&t.son_list.length){0==i&&e.openKeys.push(t.sort_id);var s=t.son_list;s.forEach((function(t,s){0==o&&0==i&&0==s&&(e.menuId=t.sort_id)}))}else 0==o&&0==i&&(e.menuId=t.sort_id)}))}else 0==o&&(e.menuId=t.sort_id)})),this.selectedSort.push(this.menuId),this.getGoodsList()},onSelect:function(e){var t=e.key;this.selectedSort=[t],this.menuId=t,this.currentPage=1,this.getGoodsList()},getGoodsList:function(){var e=this;this.tableList=[];var t={store_id:this.storeId,name:this.keywords,source:this.source};this.menuId&&(t.sort_id=this.menuId),this.request(a["a"].goodsList,t).then((function(t){e.tableList=t.list,e.tableList.length&&e.handleList()}))},handleList:function(){var e=this;this.hasSelected=[],"checkbox"==this.type&&(this.tableList.forEach((function(t){t.selected&&e.hasSelected.push(t.goods_id)})),this.selectedRowKeys=this.hasSelected)},handleOk:function(){var e=this.selectedRowKeys,t=this.hasSelected,o=[];e.length&&(o=e.concat(t).filter((function(e,t,o){return o.indexOf(e)===o.lastIndexOf(e)}))),o.length?(this.$emit("onSubmit",{ids:o.toString()}),this.init()):this.$message.warning(this.L("请先选择商品哦~"))},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onOpenChange:function(e){var t=this,o=e.find((function(e){return-1===t.openKeys.indexOf(e)}));-1===this.rootSubmenuKeys.indexOf(o)?this.openKeys=e:this.openKeys.push(o)},onSearch:function(e){this.menuId&&(this.oldMenuId=this.menuId),this.menuId="",this.openKeys=[],this.selectedSort=[],this.getGoodsList()},onSearchChange:function(e){this.keywords||!this.oldMenuId?this.onSearch(this.keywords):(this.menuId=this.oldMenuId,this.selectedSort=[this.menuId])},onChange:function(e){this.selectedRowKeys=e}}},l=r,n=(o("d082"),o("2877")),d=Object(n["a"])(l,i,s,!1,null,"31f19d46",null);t["a"]=d.exports},c7d0:function(e,t,o){},d082:function(e,t,o){"use strict";o("c7d0")}}]);