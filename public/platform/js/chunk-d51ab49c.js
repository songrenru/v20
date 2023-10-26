(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d51ab49c"],{"4d4c":function(t,e,s){},"553c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-10 mb-20 mh-full"},[s("a-form-model",t._b({ref:"form",attrs:{model:t.formData,rules:t.rules}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[s("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"优惠信息",bordered:!1}},[s("a-form-model-item",{attrs:{label:"定金支付时间",required:""}},[s("a-form-model-item",{ref:"bargainStartTime",style:{display:"inline-block"},attrs:{prop:"bargain_start_time",autoLink:!1}},[s("a-date-picker",{attrs:{disabled:2==t.formData.status||1==t.formData.status,"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm","disabled-date":t.disabledStartDate,placeholder:"请选择定金支付开始时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateStartChange},model:{value:t.bargain_start_time,callback:function(e){t.bargain_start_time=e},expression:"bargain_start_time"}})],1),s("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),s("a-form-model-item",{ref:"bargainEndTime",style:{display:"inline-block"},attrs:{prop:"bargain_end_time",autoLink:!1}},[s("a-date-picker",{attrs:{disabled:2==t.formData.status,"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm","disabled-date":t.disabledEndDate,placeholder:"请选择定金支付结束时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateEndChange},model:{value:t.bargain_end_time,callback:function(e){t.bargain_end_time=e},expression:"bargain_end_time"}})],1)],1),s("a-form-model-item",{attrs:{label:"尾款支付时间",required:!0}},[s("a-radio-group",{on:{change:t.onChange},model:{value:t.formData.rest_type,callback:function(e){t.$set(t.formData,"rest_type",e)},expression:"formData.rest_type"}},[s("a-radio",{attrs:{value:0}},[t._v(" 固定时间 ")]),s("a-radio",{attrs:{value:1}},[t._v(" 非固定时间 ")])],1),0==t.formData.rest_type?s("div",[s("a-form-model-item",{ref:"restStartTime",style:{display:"inline-block"},attrs:{prop:"rest_start_time",autoLink:!1}},[s("a-date-picker",{attrs:{disabled:2==t.formData.status||1==t.formData.status,"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm","disabled-date":t.disabledRestStartDate,placeholder:"请选择尾款支付开始时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateRestStartChange},model:{value:t.rest_start_time,callback:function(e){t.rest_start_time=e},expression:"rest_start_time"}})],1),s("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),s("a-form-model-item",{ref:"restEndTime",style:{display:"inline-block"},attrs:{prop:"rest_end_time",autoLink:!1}},[s("a-date-picker",{attrs:{disabled:2==t.formData.status,"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm","disabled-date":t.disabledRestEndDate,placeholder:"请选择尾款支付结束时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateRestEndChange},model:{value:t.rest_end_time,callback:function(e){t.rest_end_time=e},expression:"rest_end_time"}})],1)],1):t._e(),1==t.formData.rest_type?s("div",[s("span",{staticClass:"mr-10"},[t._v("定金支付后")]),s("a-input-number",{attrs:{min:0},model:{value:t.formData.rest_start_time,callback:function(e){t.$set(t.formData,"rest_start_time",e)},expression:"formData.rest_start_time"}}),s("span",{staticClass:"ml-10"},[t._v(" 时")]),s("a-input-number",{attrs:{min:0,max:59},model:{value:t.formData.rest_end_time,callback:function(e){t.$set(t.formData,"rest_end_time",e)},expression:"formData.rest_end_time"}}),s("span",{staticClass:"ml-10"},[t._v("分内支付尾款")])],1):t._e()],1),s("a-form-model-item",{attrs:{label:"发货时间",required:!0}},[s("a-radio-group",{on:{change:t.changeSendGoodsType},model:{value:t.formData.send_goods_type,callback:function(e){t.$set(t.formData,"send_goods_type",e)},expression:"formData.send_goods_type"}},[s("a-radio",{attrs:{value:1}},[t._v(" 固定时间 ")]),s("a-radio",{attrs:{value:2}},[t._v(" 非固定时间 ")])],1),1==t.formData.send_goods_type?s("a-form-item",[s("a-date-picker",{attrs:{format:"YYYY-MM-DD","disabled-date":t.disabledDate,getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onChangeSenDate},model:{value:t.send_goods_date,callback:function(e){t.send_goods_date=e},expression:"send_goods_date"}})],1):t._e(),2==t.formData.send_goods_type?s("a-form-item",[s("span",{staticClass:"mr-10"},[t._v("尾款支付后")]),s("a-input-number",{attrs:{min:0},model:{value:t.formData.send_goods_days,callback:function(e){t.$set(t.formData,"send_goods_days",e)},expression:"formData.send_goods_days"}}),s("span",{staticClass:"ml-10"},[t._v("天发货")])],1):t._e()],1),s("a-form-model-item",{attrs:{label:"限购",prop:"limit_num",help:"0代表不限购，请输入0~999正整数"}},[s("span",{staticClass:"mr-10"},[t._v("每人最多可参与")]),s("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.limit_num,callback:function(e){t.$set(t.formData,"limit_num",e)},expression:"formData.limit_num"}}),s("span",{staticClass:"ml-10"},[t._v("次")])],1),s("a-form-model-item",{attrs:{label:"优惠是否同享",prop:"is_discount_share"}},[s("a-radio-group",{model:{value:t.formData.is_discount_share,callback:function(e){t.$set(t.formData,"is_discount_share",e)},expression:"formData.is_discount_share"}},[s("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),s("a-radio",{attrs:{value:2}},[t._v(" 否 ")])],1),1==t.formData.is_discount_share?s("div",[s("a-checkbox-group",{model:{value:t.formData.share_discount,callback:function(e){t.$set(t.formData,"share_discount",e)},expression:"formData.share_discount"}},[s("a-checkbox",{attrs:{value:"1"}},[t._v(" 商家会员卡 ")]),s("a-checkbox",{attrs:{value:"2"}},[t._v(" 商家优惠券 ")])],1)],1):t._e()],1)],1),s("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"商品信息",bordered:!1}},[s("a-form-model-item",{attrs:{label:"活动商品",prop:"goods_info"}},[s("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addProduct()}}},[t._v(" 添加商品 ")]),t.goodsList.length?[s("a-popconfirm",{attrs:{placement:"top","ok-text":"确认","cancel-text":"取消",visible:t.discount_price_visible,getPopupContainer:function(t){return t.parentNode}},on:{cancel:function(e){t.discount_price="",t.discount_price_visible=!1},confirm:function(e){return t.batchSet(e,"discount_price")}}},[s("template",{slot:"title"},[s("a-input-number",{attrs:{min:0,suffix:"元",prefix:""},model:{value:t.discount_price,callback:function(e){t.discount_price=e},expression:"discount_price"}})],1),s("a-button",{staticClass:"ml-20",on:{click:function(e){t.discount_price_visible=!t.discount_price_visible,t.bargain_price_visible=!1}}},[t._v(" 批量设置优惠价格 ")])],2),s("a-popconfirm",{attrs:{placement:"top","ok-text":"确认","cancel-text":"取消",visible:t.bargain_price_visible,getPopupContainer:function(t){return t.parentNode}},on:{cancel:function(e){t.bargain_price="",t.bargain_price_visible=!1},confirm:function(e){return t.batchSet(e,"bargain_price")}}},[s("template",{slot:"title"},[s("a-input-number",{attrs:{min:0,suffix:"元",prefix:""},model:{value:t.bargain_price,callback:function(e){t.bargain_price=e},expression:"bargain_price"}})],1),s("a-button",{staticClass:"ml-20",on:{click:function(e){t.bargain_price_visible=!t.bargain_price_visible,t.discount_price_visible=!1}}},[t._v(" 批量设置定金 ")])],2)]:t._e()],2),s("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:4}}},[s("a-table",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{columns:t.columns,"data-source":t.goodsList,rowKey:"goods_id",childrenColumnName:"sku_info",defaultExpandAllRows:!0,scroll:{x:!1}},scopedSlots:t._u([{key:"name",fn:function(e,i){return s("span",{},[s("a-avatar",{attrs:{shape:"square",size:64,src:i.image}}),s("span",{staticClass:"ml-10 name"},[t._v(t._s(e))])],1)}},{key:"skuStr",fn:function(e,i){return s("span",{},[i.sku_info&&"sku"==i.goods_type?s("span",[t._v(" 多规格 ")]):s("span",[t._v(" "+t._s(e||"----")+" ")])])}},{key:"price",fn:function(e,i){return s("span",{staticClass:"cr-red"},[i.sku_info&&"sku"==i.goods_type?s("span",[t._v(" ￥"+t._s(i.min_price)+" ~ ￥"+t._s(i.max_price)+" ")]):s("span",[t._v(" ￥"+t._s(e)+" ")])])}},{key:"discountPrice",fn:function(e,i){return s("span",{},[i.sku_info?s("span",[t._v(" ---- ")]):s("span",[s("a-form-item",{staticStyle:{margin:"-5px 0"}},[s("a-input-number",{attrs:{min:0,max:i.price-0},on:{blur:function(e){return t.handleChange(i.discount_price,i,"discount_price")}},model:{value:i.discount_price,callback:function(e){t.$set(i,"discount_price",e)},expression:"record.discount_price"}})],1)],1)])}},{key:"bargainPrice",fn:function(e,i){return s("span",{},[i.sku_info?s("span",[t._v(" ---- ")]):s("span",[s("a-form-item",{staticStyle:{margin:"-5px 0"}},[s("a-input-number",{attrs:{min:0,max:i.price-0},on:{blur:function(e){return t.handleChange(i.bargain_price,i,"bargain_price")}},model:{value:i.bargain_price,callback:function(e){t.$set(i,"bargain_price",e)},expression:"record.bargain_price"}})],1)],1)])}},{key:"restPrice",fn:function(e,i){return s("span",{},[i.sku_info?s("span",[t._v(" ---- ")]):s("span",[t._v(" "+t._s(i.rest_price)+" ")])])}},{key:"action",fn:function(e,i){return s("span",{},[i.sku_info?s("span",[s("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.removeGoods(i)}}},[t._v("删除")])]):s("span",[t._v(" ---- ")])])}}])},[s("span",{attrs:{slot:"discountPriceTitle"},slot:"discountPriceTitle"},[t._v(" 优惠价格 "),s("a-tooltip",{attrs:{trigger:"“hover"}},[s("template",{slot:"title"},[t._v("设置每个sku的优惠价格")]),s("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),s("span",{attrs:{slot:"bargainPriceTitle"},slot:"bargainPriceTitle"},[t._v(" 定金 "),s("a-tooltip",{attrs:{trigger:"“hover"}},[s("template",{slot:"title"},[t._v("设置每个sku的定金")]),s("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),s("span",{attrs:{slot:"restPriceTitle"},slot:"restPriceTitle"},[t._v(" 尾款 "),s("a-tooltip",{attrs:{trigger:"“hover"}},[s("template",{slot:"title"},[t._v("设置每个sku的尾款")]),s("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1)])],1)],1),2!=t.formData.status?s("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:2}}},[s("div",{staticClass:"mt-20 mb-20"},[s("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData()}}},[t._v(" 保存 ")])],1)]):t._e()],1),s("select-goods",{ref:"selectGoods",attrs:{type:"radio",storeId:t.store_id,source:"prepare",startTime:t.formData.bargain_start_time,endTime:t.formData.bargain_end_time,selectedList:t.goodsList},on:{submit:t.selecrGoodsSubmit}})],1)},a=[],r=(s("d81d"),s("159b"),s("b0c0"),s("35b3"),s("a9e3"),s("a434"),s("4031")),o=s("c1df"),n=s.n(o),d=s("37fd"),_=s("ca00"),c=s("ac0d"),u={name:"PrepareEdit",mixins:[c["d"]],components:{SelectGoods:d["default"]},data:function(){return{store_id:"",id:"",addGoodsModalVisible:!1,formData:{bargain_start_time:"",bargain_end_time:"",rest_type:0,rest_start_time:"",rest_end_time:"",send_goods_type:1,send_goods_days:"",send_goods_date:"",is_discount_share:1,share_discount:["1","2"],limit_num:0},rules:{time:[{required:!0,message:"请选择活动时间",trigger:"blur"}],bargain_start_time:[{required:!0,message:"请选择定金支付开始时间",trigger:"blur"}],bargain_end_time:[{required:!0,message:"请选择定金支付结束时间",trigger:"blur"}],rest_start_time:[{required:!0,message:"请选择尾款支付开始时间",trigger:"blur"}],rest_end_time:[{required:!0,message:"请选择尾款支付结束时间",trigger:"blur"}],limit_num:[{required:!0,message:"请选择限购数量",trigger:"blur"}],is_discount_share:[{required:!0,message:"请选择优惠是否同享",trigger:"blur"}],goods_info:[{required:!0,message:"请添加活动商品",trigger:"blur"}]},columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"规格",dataIndex:"sku_str",scopedSlots:{customRender:"skuStr"}},{title:"原价格",dataIndex:"price",scopedSlots:{customRender:"price"}},{title:"当前库存",dataIndex:"stock_num"},{dataIndex:"discount_price",key:"discount_price",slots:{title:"discountPriceTitle"},scopedSlots:{customRender:"discountPrice"}},{dataIndex:"bargain_price",key:"bargain_price",slots:{title:"bargainPriceTitle"},scopedSlots:{customRender:"bargainPrice"}},{dataIndex:"rest_price",key:"rest_price",slots:{title:"restPriceTitle"},scopedSlots:{customRender:"restPrice"}},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],goodsList:[],selectedRowKeys:[],discount_price:"",bargain_price:"",discount_price_visible:!1,bargain_price_visible:!1,bargain_start_time:null,bargain_end_time:null,rest_start_time:null,rest_end_time:null,send_goods_date:null}},watch:{"$route.path":function(t){"/merchant/merchant.mall/EditPrepare"==t&&(this.id="",this.resetForm())},"$route.query.store_id":function(t){t&&(this.store_id=t,this.resetForm())},"$route.query.id":function(t){var e=this;this.$nextTick((function(){e.activatedFlag&&t?(e.id=t,e.resetForm(),e.getFormData()):(e.id="",e.resetForm())}))}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:"checkbox",onChange:this.onSelectChange,getCheckboxProps:function(t){return{props:{}}}}}},created:function(){this.store_id=this.$route.query.store_id,this.resetForm(),this.$route.query.id&&(this.id=this.$route.query.id,this.getFormData())},methods:{moment:n.a,disabledDate:function(t){if(0==this.formData.rest_type){var e=this.rest_end_time,s=this.bargain_end_time;return e?t.valueOf()<e.valueOf()+86400:t.valueOf()<s.valueOf()+86400}var i=this.bargain_end_time;return t.valueOf()<i.valueOf()+86400},disabledStartDate:function(t){return t<n()().add(-1,"d")},disabledEndDate:function(t){var e=this.bargain_start_time;return e?e.valueOf()>t.valueOf():t<n()().add(-1,"d")},onDateStartChange:function(t,e){this.$set(this.formData,"bargain_start_time",e),this.$refs.bargainStartTime.onFieldChange()},onDateEndChange:function(t,e){var s=n()(this.formData.bargain_start_time).valueOf(),i=n()(e).valueOf();i<s?this.$message.error("定金支付结束时间必须大于定金支付开始时间！"):(this.$set(this.formData,"bargain_end_time",e),this.$refs.bargainEndTime.onFieldChange())},disabledRestStartDate:function(t){var e=this.bargain_end_time;return e?t.valueOf()<e.valueOf():t<n()().add(-1,"d")},disabledRestEndDate:function(t){var e=this.rest_start_time;return e?e.valueOf()>t.valueOf():t<n()().add(-1,"d")},onDateRestStartChange:function(t,e){this.$set(this.formData,"rest_start_time",e),this.$refs.restStartTime.onFieldChange()},onDateRestEndChange:function(t,e){var s=n()(this.formData.rest_start_time).valueOf(),i=n()(e).valueOf();i<s?this.$message.error("尾款支付结束时间必须大于尾款支付开始时间！"):(this.$set(this.formData,"rest_end_time",e),this.$refs.restEndTime.onFieldChange())},getFormData:function(){var t=this;this.request(r["a"].getPrepareInfo,{id:this.id}).then((function(e){t.bargain_start_time=n()(e.bargain_start_time),t.bargain_end_time=n()(e.bargain_end_time),e.send_goods_date?t.send_goods_date=n()(e.send_goods_date):t.send_goods_date=null,0==e.rest_type?(t.rest_start_time=n()(e.rest_start_time),t.rest_end_time=n()(e.rest_end_time)):(e.rest_start_time=e.rest_start_time/3600,e.rest_end_time=e.rest_end_time/60),1==e.is_discount_share&&(e.share_discount=[],1==e.discount_card&&e.share_discount.push("1"),1==e.discount_coupon&&e.share_discount.push("2")),t.$set(t,"formData",e);var s=e.goods_info||[];t.goodsList=s.length?s.map((function(t){return t.sku_info&&t.sku_info.length&&t.sku_info.forEach((function(e){e.name=t.name,e.image=t.image,e.goods_id=t.goods_id+"_"+e.sku_id})),t})):[]}))},onDateRangeChange:function(t,e){this.$set(this.formData,"time",[t[0],t[1]]),this.$set(this.formData,"start_time",e[0]),this.$set(this.formData,"end_time",e[1])},onBargainDateRangeChange:function(t,e){this.$set(this.formData,"bargain_time",[t[0],t[1]]),this.$set(this.formData,"bargain_start_time",e[0]),this.$set(this.formData,"bargain_end_time",e[1])},onRestDateRangeChange:function(t,e){this.$set(this.formData,"rest_time",[t[0],t[1]]),this.$set(this.formData,"rest_start_time",e[0]),this.$set(this.formData,"rest_end_time",e[1])},onChange:function(t){this.$set(this.formData,"rest_start_time",""),this.$set(this.formData,"rest_end_time","")},changeSendGoodsType:function(t){1==t.target.value?this.formData.send_goods_date=Object(_["f"])():this.formData.send_goods_days=""},onChangeSenDate:function(t,e){this.$set(this.formData,"send_goods_date",e)},addProduct:function(){this.bargain_start_time&&this.bargain_end_time?this.$refs.selectGoods.openDialog():this.$message.error("请先选择定金支付时间！")},selecrGoodsSubmit:function(t){console.log(t,"e-----selecrGoodsSubmit-----选择商品回调"),t.goods=t.goods.map((function(t){return t.sku_info&&t.sku_info.length&&t.sku_info.forEach((function(e){e.name=t.name,e.image=t.image,e.goods_id=t.goods_id+"_"+e.sku_id,e.discount_price||(e.discount_price=""),e.bargain_price||(e.bargain_price=""),e.rest_price||(e.rest_price=0)})),t})),this.goodsList=t.goods,this.$set(this.formData,"goods_info",this.goodsList.length?this.goodsList[0]:""),console.log(this.goodsList,"this.goodsList")},onSelectChange:function(t){console.log("selectedRowKeys changed: ",t),this.selectedRowKeys=t},handleChange:function(t,e,s){this.goodsList=this.goodsList.map((function(t){return t.sku_info&&t.sku_info.length&&(t.sku_info=t.sku_info.map((function(t){return t.rest_price=Math.round(100*(t.price-t.discount_price-t.bargain_price+Number.EPSILON))/100,t.rest_price<0&&("discount_price"==s?t.discount_price=0:t.bargain_price=0,t.rest_price=Math.round(100*(t.price-t.discount_price-t.bargain_price+Number.EPSILON))/100),t}))),t}))},batchSet:function(t,e){var s=this,i=0;this.goodsList.forEach((function(t){i="spu"==t.goods_type?t.price:t.min_price})),"discount_price"==e&&Number(this.discount_price)>Number(i)?this.$message.error("批量设置优惠价格不能大于原价格"):(this.discount_price_visible=!1,this.bargain_price_visible=!1,"bargain_price"==e&&Number(this.bargain_price)>Number(i)?this.$message.error("批量设置定金不能大于原价格"):(this.discount_price_visible=!1,this.bargain_price_visible=!1,Number(this.discount_price)+Number(this.bargain_price)>Number(i)?this.$message.error("批量设置优惠价格+批量设置定金大于原价格"):(this.discount_price_visible=!1,this.bargain_price_visible=!1,this.goodsList=this.goodsList.map((function(t){return t.sku_info&&t.sku_info.length&&(t.sku_info=t.sku_info.map((function(t){return"discount_price"==e?t[e]=s.discount_price:"bargain_price"==e&&(t[e]=s.bargain_price),t.rest_price<0&&("discount_price"==e?t.discount_price=0:t.bargain_price=0),t.rest_price=Math.round(100*(t.price-t.discount_price-t.bargain_price+Number.EPSILON))/100,t}))),t})),"discount_price"==e?this.discount_price="":"bargain_price"==e&&(this.bargain_price=""))))},removeGoods:function(t){if(t.sku_id)this.goodsList.forEach((function(e){e.sku_info&&e.sku_info.length&&e.sku_info.forEach((function(s,i){s.sku_id==t.sku_id&&e.sku_info.splice(i,1)}))}));else if(t.goods_id)for(var e=0;e<this.goodsList.length;e++)this.goodsList[e].goods_id===t.goods_id&&this.goodsList.splice(e,1)},resetForm:function(){this.$set(this,"formData",{bargain_start_time:"",bargain_end_time:"",rest_type:0,rest_start_time:"",rest_end_time:"",send_goods_type:1,send_goods_days:"",send_goods_date:Object(_["f"])(),is_discount_share:1,share_discount:["1","2"],limit_num:0}),this.bargain_start_time=this.$options.data().bargain_start_time,this.bargain_end_time=this.$options.data().bargain_end_time,this.rest_start_time=this.$options.data().rest_start_time,this.rest_end_time=this.$options.data().rest_end_time,this.send_goods_date=this.$options.data().send_goods_date,this.goodsList=[],this.$forceUpdate()},saveData:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!",t.formData),!1;var s=t.formData;if(1!=s.send_goods_type||s.send_goods_date)if(n()(s.bargain_end_time).valueOf()<n()(s.bargain_start_time).valueOf())t.$message.error("定金支付结束时间必须大于定金支付开始时间！");else{if(0==s.rest_type){if(n()(s.rest_start_time).valueOf()<=n()(s.bargain_start_time).valueOf())return void t.$message.error("尾款支付开始时间应在定金支付开始时间之后");if(n()(s.rest_end_time).valueOf()<n()(s.rest_start_time).valueOf())return void t.$message.error("尾款支付结束时间必须大于尾款支付开始时间！")}if(1==s.send_goods_type){if(0==s.rest_type)var i=n()(s.rest_end_time).valueOf()/1e3;else i=n()(s.bargain_end_time).valueOf()/1e3+3600*s.rest_start_time+60*s.rest_end_time;var a=n()(s.send_goods_date).valueOf()/1e3;if(a<=i)return void t.$message.error("发货时间应在尾款支付结束时间之后")}if(1!=s.is_discount_share||0!=s.share_discount.length)if(0!=t.goodsList.length){1==s.is_discount_share&&(s.discount_card=0,s.discount_coupon=0,s.share_discount.forEach((function(t){1==t?s.discount_card=1:2==t&&(s.discount_coupon=1)}))),s.store_id=t.store_id,t.id&&(s.id=t.id);for(var o=[],d=0;d<t.goodsList[0].sku_info.length;d++){if(""==t.goodsList[0].sku_info[d].bargain_price)return void t.$message.error(t.goodsList[0].sku_info[d].sku_str+"定金必填");if(t.goodsList[0].sku_info[d].rest_price<=0)return void(t.goodsList[0].sku_info[d].sku_str?0==t.goodsList[0].sku_info[d].rest_price?t.$message.error(t.goodsList[0].sku_info[d].sku_str+"尾款等于0,设置不合理"):t.$message.error(t.goodsList[0].sku_info[d].sku_str+"尾款小于0,设置不合理"):0==t.goodsList[0].sku_info[d].rest_price?t.$message.error(t.goodsList[0].name+"尾款等于0,设置不合理"):t.$message.error(t.goodsList[0].name+"尾款小于0,设置不合理"));var _={goods_id:t.goodsList[0].goods_id,goods_name:t.goodsList[0].name,sku_id:t.goodsList[0].sku_info[d].sku_id,sku_str:t.goodsList[0].sku_info[d].sku_str,act_stock_num:t.goodsList[0].sku_info[d].stock_num,bargain_price:t.goodsList[0].sku_info[d].bargain_price,discount_price:t.goodsList[0].sku_info[d].discount_price,rest_price:t.goodsList[0].sku_info[d].rest_price};o.push(_)}o.length?(s.goods_sku=JSON.stringify(o),delete s.share_discount,delete s.goods_info,1==s.rest_type&&(s.rest_start_time=3600*s.rest_start_time,s.rest_end_time=60*s.rest_end_time),console.log(s,"submit-----formData"),t.request(r["a"].updatePrepare,s).then((function(e){t.resetForm(),t.$message.success("提交成功！"),t.$router.push({path:"/merchant/merchant.mall/prepareList",query:{store_id:t.store_id}}),sessionStorage.setItem("prepareEdit",1)}))):t.$message.error("请填写活动商品的定金等信息")}else t.$message.error("请选择活动商品");else t.$message.error("请选择优惠同享类型")}else t.$message.error("请选择固定时间的发货日期！")}))}}},m=u,l=(s("e6b7"),s("2877")),p=Object(l["a"])(m,i,a,!1,null,"b848972a",null);e["default"]=p.exports},e6b7:function(t,e,s){"use strict";s("4d4c")}}]);