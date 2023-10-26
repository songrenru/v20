(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f805db3"],{"573c":function(e,t,o){"use strict";o("f768")},a7ab:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mt-10 mb-20 mh-full"},[o("a-form-model",e._b({ref:"form",attrs:{model:e.formData,rules:e.rules}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[o("a-card",{attrs:{title:"基本信息",bordered:!1}},[o("a-form-model-item",{attrs:{label:"活动名称",prop:"name"}},[o("a-input",{attrs:{placeholder:"请输入活动名称",disabled:2==e.formData.status},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),o("a-form-model-item",{attrs:{label:"活动预告设置",prop:"is_discount_share"}},[o("a-radio-group",{model:{value:e.formData.notice_type,callback:function(t){e.$set(e.formData,"notice_type",t)},expression:"formData.notice_type"}},[o("a-radio",{attrs:{value:1}},[e._v(" 不进行活动预告")]),o("a-radio",{attrs:{value:2}},[e._v(" 进行活动预告")])],1)],1),2==e.formData.notice_type?o("a-form-model-item",{attrs:{"wrapper-col":{span:8,offset:4},help:"最多填写240小时,填写’0‘代表不进行活动预告"}},[o("span",{staticClass:"mr-10"},[e._v("活动开始前")]),o("a-input-number",{attrs:{min:0,max:240},model:{value:e.formData.notice_time,callback:function(t){e.$set(e.formData,"notice_time",t)},expression:"formData.notice_time"}}),o("span",{staticClass:"ml-10"},[e._v("小时进行活动预告")])],1):e._e()],1),o("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"优惠信息",bordered:!1}},[o("a-form-model-item",{attrs:{label:"活动时间",help:"活动将按照指定周期自动生效",prop:"time_type"}},[o("a-radio-group",{on:{change:e.changeTimeType},model:{value:e.formData.time_type,callback:function(t){e.$set(e.formData,"time_type",t)},expression:"formData.time_type"}},[o("a-radio",{attrs:{value:1}},[e._v(" 固定时间")]),o("a-radio",{attrs:{value:2}},[e._v(" 按周期")])],1)],1),o("a-form-model-item",{attrs:{label:"起止日期"}},[o("a-form-model-item",{ref:"startTime",style:{display:"inline-block"},attrs:{prop:"start_time",autoLink:!1}},[o("a-date-picker",{attrs:{disabled:2==e.formData.status||1==e.formData.status,"show-time":e.showTime,format:e.dateFormat,"disabled-date":e.disabledStartDate,placeholder:"请选择活动开始时间",getCalendarContainer:function(e){return e.parentNode}},on:{change:e.onDateStartChange},model:{value:e.start_time,callback:function(t){e.start_time=t},expression:"start_time"}})],1),o("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[e._v(" - ")]),o("a-form-model-item",{ref:"endTime",style:{display:"inline-block"},attrs:{prop:"end_time",autoLink:!1}},[o("a-date-picker",{attrs:{disabled:2==e.formData.status,"show-time":e.showTime,format:e.dateFormat,"disabled-date":e.disabledEndDate,placeholder:"请选择活动结束时间",getCalendarContainer:function(e){return e.parentNode}},on:{change:e.onDateEndChange},model:{value:e.end_time,callback:function(t){e.end_time=t},expression:"end_time"}})],1)],1),2==e.formData.time_type?o("a-form-model-item",{attrs:{"wrapper-col":{span:8,offset:4}}},[o("a-radio-group",{on:{change:e.cycleTypeChange},model:{value:e.formData.cycle_type,callback:function(t){e.$set(e.formData,"cycle_type",t)},expression:"formData.cycle_type"}},[o("a-radio",{attrs:{value:1}},[e._v(" 每日")]),o("a-radio",{attrs:{value:2}},[e._v(" 每周")]),o("a-radio",{attrs:{value:3}},[e._v(" 每月")])],1)],1):e._e(),2==e.formData.time_type&&2==e.formData.cycle_type?o("a-form-model-item",{attrs:{"wrapper-col":{span:8,offset:4}}},[o("a-checkbox-group",{model:{value:e.formData.cycle_date,callback:function(t){e.$set(e.formData,"cycle_date",t)},expression:"formData.cycle_date"}},[o("a-checkbox",{attrs:{value:"1"}},[e._v(" 周一")]),o("a-checkbox",{attrs:{value:"2"}},[e._v(" 周二")]),o("a-checkbox",{attrs:{value:"3"}},[e._v(" 周三")]),o("a-checkbox",{attrs:{value:"4"}},[e._v(" 周四")]),o("a-checkbox",{attrs:{value:"5"}},[e._v(" 周五")]),o("a-checkbox",{attrs:{value:"6"}},[e._v(" 周六")]),o("a-checkbox",{attrs:{value:"0"}},[e._v(" 周日")])],1)],1):e._e(),2==e.formData.time_type&&3==e.formData.cycle_type?o("a-form-model-item",{attrs:{"wrapper-col":{span:8,offset:4}}},[o("a-input-number",{attrs:{min:0,max:30},model:{value:e.formData.cycle_date,callback:function(t){e.$set(e.formData,"cycle_date",t)},expression:"formData.cycle_date"}}),e._v("号 ")],1):e._e(),2==e.formData.time_type?o("a-form-model-item",{attrs:{"wrapper-col":{span:8,offset:4}}},[o("a-time-picker",{attrs:{"default-value":e.moment(e.formData.cycle_start_time,"HH:mm"),format:"HH:mm",getPopupContainer:function(e){return e.parentNode}},on:{change:e.onCycleStimeeRangeChange}}),o("span",[e._v("-")]),o("a-time-picker",{attrs:{"default-value":e.moment(e.formData.cycle_end_time,"HH:mm"),format:"HH:mm",getPopupContainer:function(e){return e.parentNode}},on:{change:e.onCycleEtimeeRangeChange}})],1):e._e(),o("a-form-model-item",{attrs:{label:"限购",prop:"buy_limit",help:"0代表不限购，请输入0~999正整数"}},[o("span",{staticClass:"mr-10"},[e._v("每人最多可参与")]),o("a-input-number",{attrs:{min:0,max:999},model:{value:e.formData.buy_limit,callback:function(t){e.$set(e.formData,"buy_limit",t)},expression:"formData.buy_limit"}}),o("span",{staticClass:"ml-10"},[e._v("次")])],1),o("a-form-model-item",{attrs:{label:"优惠是否同享",prop:"is_discount_share"}},[o("a-radio-group",{model:{value:e.formData.is_discount_share,callback:function(t){e.$set(e.formData,"is_discount_share",t)},expression:"formData.is_discount_share"}},[o("a-radio",{attrs:{value:1}},[e._v(" 是")]),o("a-radio",{attrs:{value:2}},[e._v(" 否")])],1),1==e.formData.is_discount_share?o("div",[o("a-checkbox-group",{model:{value:e.formData.share_discount,callback:function(t){e.$set(e.formData,"share_discount",t)},expression:"formData.share_discount"}},[o("a-checkbox",{attrs:{value:"1"}},[e._v(" 商家会员卡")]),o("a-checkbox",{attrs:{value:"2"}},[e._v(" 商家优惠券")])],1)],1):e._e()],1)],1),o("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"商品信息",bordered:!1}},[o("a-form-model-item",{attrs:{label:"活动商品",prop:"goods_info"}},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.addProduct()}}},[e._v(" 添加商品 ")]),e.goodsList.length?[o("a-popconfirm",{attrs:{placement:"top","ok-text":"确认","cancel-text":"取消",visible:e.reduce_money_visible,getPopupContainer:function(e){return e.parentNode}},on:{cancel:function(t){e.reduce_money="",e.reduce_money_visible=!1},confirm:function(t){return e.batchSet(t,"reduce_money")}}},[o("template",{slot:"title"},[o("a-input-number",{attrs:{min:0,suffix:"元",prefix:""},model:{value:e.reduce_money,callback:function(t){e.reduce_money=t},expression:"reduce_money"}})],1),o("a-button",{staticClass:"ml-20",on:{click:function(t){e.reduce_money_visible=!e.reduce_money_visible,e.discount_rate_visible=!1}}},[e._v(" 批量设置减少金额 ")])],2),o("a-popconfirm",{attrs:{placement:"top","ok-text":"确认","cancel-text":"取消",visible:e.discount_rate_visible,getPopupContainer:function(e){return e.parentNode}},on:{cancel:function(t){e.discount_rate="",e.discount_rate_visible=!1},confirm:function(t){return e.batchSet(t,"discount_rate")}}},[o("template",{slot:"title"},[o("a-input-number",{attrs:{min:0,suffix:"元",prefix:""},model:{value:e.discount_rate,callback:function(t){e.discount_rate=t},expression:"discount_rate"}})],1),o("a-button",{staticClass:"ml-20",on:{click:function(t){e.discount_rate_visible=!e.discount_rate_visible,e.reduce_money_visible=!1}}},[e._v(" 批量设置折扣比例 ")])],2)]:e._e()],2),o("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:4}}},[o("a-table",{directives:[{name:"show",rawName:"v-show",value:e.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{columns:e.columns,"data-source":e.goodsList,rowKey:"goods_id",childrenColumnName:"sku_info",defaultExpandAllRows:!0,scroll:{x:!1}},scopedSlots:e._u([{key:"name",fn:function(t,a){return o("span",{},[o("a-avatar",{attrs:{shape:"square",size:64,src:a.image}}),o("span",{staticClass:"ml-10 name"},[e._v(e._s(t))])],1)}},{key:"skuStr",fn:function(t,a){return o("span",{},[a.sku_info&&"sku"==a.goods_type?o("span",[e._v(" 多规格 ")]):o("span",[e._v(" "+e._s(t||"----")+" ")])])}},{key:"actStockNum",fn:function(t,a){return o("span",{},[a.sku_info&&a.sku_info.length?o("span",[e._v(" ---- ")]):o("span",[o("a-form-item",{staticStyle:{margin:"-5px 0"},attrs:{prop:"act_stock_num"}},[-1==a.act_stock_num?o("a-input-number",{attrs:{min:-1},on:{change:function(t){return e.handleChange(a.act_stock_num,a,"act_stock_num")}},model:{value:a.act_stock_num,callback:function(t){e.$set(a,"act_stock_num",t)},expression:"record.act_stock_num"}}):o("a-input-number",{attrs:{min:0,max:a.act_stock_num-0},on:{change:function(t){return e.handleChange(a.act_stock_num,a,"act_stock_num")}},model:{value:a.act_stock_num,callback:function(t){e.$set(a,"act_stock_num",t)},expression:"record.act_stock_num"}})],1)],1)])}},{key:"price",fn:function(t,a){return o("span",{staticClass:"cr-red"},[a.sku_info&&"sku"==a.goods_type?o("span",[e._v(" ￥"+e._s(a.min_price)+" ~ ￥"+e._s(a.max_price)+" ")]):o("span",[e._v(" ￥"+e._s(t)+" ")])])}},{key:"reduceMoney",fn:function(t,a){return o("span",{},[a.sku_info&&a.sku_info.length?o("span",[e._v(" ---- ")]):o("span",[o("a-form-item",{staticStyle:{margin:"-5px 0"}},[o("a-input-number",{attrs:{min:0,max:a.price-0},on:{change:function(t){return e.handleChange(a.reduce_money,a,"reduce_money")}},model:{value:a.reduce_money,callback:function(t){e.$set(a,"reduce_money",t)},expression:"record.reduce_money"}})],1)],1)])}},{key:"discountRate",fn:function(t,a){return o("span",{},[a.sku_info&&a.sku_info.length?o("span",[e._v(" ---- ")]):o("span",[o("a-form-item",{staticStyle:{margin:"-5px 0"}},[o("a-input-number",{attrs:{min:0,max:10},on:{change:function(t){return e.handleChange(a.discount_rate,a,"discount_rate")}},model:{value:a.discount_rate,callback:function(t){e.$set(a,"discount_rate",t)},expression:"record.discount_rate"}})],1)],1)])}},{key:"action",fn:function(t,a){return o("span",{},[a.sku_info?o("span",[o("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.removeGoods(a)}}},[e._v("删除")])]):o("span",[e._v(" ---- ")])])}}])},[o("span",{attrs:{slot:"actStockNumTitle"},slot:"actStockNumTitle"},[e._v(" 活动库存 "),o("a-tooltip",{attrs:{trigger:"hover"}},[o("template",{slot:"title"},[e._v("设置每个sku的活动库存")]),o("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),o("span",{attrs:{slot:"reduceMoneyTitle"},slot:"reduceMoneyTitle"},[e._v(" 减少金额 "),o("a-tooltip",{attrs:{trigger:"“hover"}},[o("template",{slot:"title"},[e._v("设置每个sku的减少金额")]),o("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),o("span",{attrs:{slot:"discountRateTitle"},slot:"discountRateTitle"},[e._v(" 折扣比例 "),o("a-tooltip",{attrs:{trigger:"“hover"}},[o("template",{slot:"title"},[e._v("设置每个sku的折扣比列（范围0-10）")]),o("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1)])],1)],1),2!=e.formData.status?o("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:2}}},[o("div",{staticClass:"mt-20 mb-20"},[o("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.saveData()}}},[e._v(" 保存")])],1)]):e._e()],1),o("select-goods",{ref:"selectGoods",attrs:{storeId:e.store_id,source:"limited",startTime:e.formData.start_time,endTime:e.formData.end_time,selectedList:e.goodsList},on:{submit:e.selecrGoodsSubmit}})],1)},s=[],i=(o("ac1f"),o("1276"),o("d81d"),o("159b"),o("b0c0"),o("35b3"),o("a9e3"),o("b680"),o("a434"),o("d3b7"),o("25f0"),o("4de4"),o("4031")),n=o("c1df"),r=o.n(n),c=o("37fd"),u=(o("ca00"),o("ac0d")),m={name:"LimitedEdit",mixins:[u["d"]],components:{SelectGoods:c["default"]},data:function(){return{store_id:"",id:"",addGoodsModalVisible:!1,formData:{name:"",start_time:"",end_time:"",time_type:1,cycle_type:1,cycle_date:[],cycle_start_time:"00:00",cycle_end_time:"00:00",remove_type:1,buy_limit:0,is_discount_share:1,share_discount:["1","2"],goods_info:"",notice_type:1,notice_time:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],start_time:[{required:!0,message:"请选择活动开始时间",trigger:["blur","change"]}],end_time:[{required:!0,message:"请选择活动结束时间",trigger:["blur","change"]}],time_type:[{required:!0,message:"请选择秒杀活动时间",trigger:"blur"}],buy_limit:[{required:!0,message:"请选择限购数量",trigger:"blur"}],is_discount_share:[{required:!0,message:"请选择优惠是否同享",trigger:"blur"}],goods_info:[{required:!0,message:"请添加活动商品",trigger:"blur"}]},columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"规格",dataIndex:"sku_str",scopedSlots:{customRender:"skuStr"}},{title:"当前库存",dataIndex:"stock_num",scopedSlots:{customRender:"stockNum"}},{dataIndex:"act_stock_num",key:"act_stock_num",slots:{title:"actStockNumTitle"},scopedSlots:{customRender:"actStockNum"}},{title:"原价格",dataIndex:"price",scopedSlots:{customRender:"price"}},{dataIndex:"reduce_money",key:"reduce_money",slots:{title:"reduceMoneyTitle"},scopedSlots:{customRender:"reduceMoney"}},{dataIndex:"discount_rate",key:"discount_rate",slots:{title:"discountRateTitle"},scopedSlots:{customRender:"discountRate"}},{title:"活动价",dataIndex:"act_price",scopedSlots:{customRender:"act_price"}},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],goodsList:[],selectedRowKeys:[],reduce_money:"",discount_rate:"",reduce_money_visible:!1,discount_rate_visible:!1,start_time:null,end_time:null,showTime:{format:"HH:mm"},dateFormat:"YYYY-MM-DD HH:mm"}},watch:{"$route.query.store_id":function(e){e&&(this.store_id=e,this.resetForm())},"$route.query.id":function(e){var t=this;this.$nextTick((function(){t.activatedFlag&&e?(t.id=e,t.resetForm(),t.getFormData()):(t.id="",t.resetForm())}))}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:"checkbox",onChange:this.onSelectChange,getCheckboxProps:function(e){return{props:{}}}}}},created:function(){this.store_id=this.$route.query.store_id,this.resetForm(),this.$route.query.id&&(this.id=this.$route.query.id,this.getFormData())},methods:{moment:r.a,disabledStartDate:function(e){return e<r()().add(-1,"d")},disabledEndDate:function(e){var t=this.start_time;return t?t.valueOf()>=e.valueOf():e<r()().add(-1,"d")},onDateStartChange:function(e,t){this.$set(this.formData,"start_time",t),this.$refs.startTime.onFieldChange()},onDateEndChange:function(e,t){var o=r()(this.formData.start_time).valueOf(),a=r()(t).valueOf();console.log("1-----------活动结束时间选择"),console.log(o),console.log(a),a<=o?this.$message.error("活动结束时间必须大于活动开始时间！"):(this.$set(this.formData,"end_time",t),this.$refs.endTime.onFieldChange())},changeTimeType:function(e){1==e.target.value?(this.showTime={format:"HH:mm"},this.dateFormat="YYYY-MM-DD HH:mm"):(this.showTime=!1,this.dateFormat="YYYY-MM-DD")},getFormData:function(){var e=this;this.request(i["a"].getLimitedInfo,{id:this.id}).then((function(t){e.start_time=r()(t.start_time),e.end_time=r()(t.end_time),1==t.time_type?(e.showTime={format:"HH:mm"},e.dateFormat="YYYY-MM-DD HH:mm"):(e.showTime=!1,e.dateFormat="YYYY-MM-DD"),1==t.is_discount_share&&(t.share_discount=[],1==t.discount_card&&t.share_discount.push("1"),1==t.discount_coupon&&t.share_discount.push("2")),2==t.time_type&&2==t.cycle_type&&(t.cycle_date=t.cycle_date.split(",")),e.$set(e,"formData",t);var o=t.goods_info||[];e.goodsList=o.length?o.map((function(e){return e.sku_info&&e.sku_info.length&&e.sku_info.forEach((function(t){t.name=e.name,t.goods_id=e.goods_id+"_"+t.sku_id})),e.sku_info&&!e.sku_info.length&&(e.act_stock_num=0,e.act_price=0,e.sku_info=""),e})):[]}))},cycleTypeChange:function(){2==this.formData.cycle_type?this.$set(this.formData,"cycle_date",[]):this.$set(this.formData,"cycle_date","")},onCycleStimeeRangeChange:function(e,t){this.$set(this.formData,"cycle_start_time",t)},onCycleEtimeeRangeChange:function(e,t){this.$set(this.formData,"cycle_end_time",t)},handleChange:function(e,t,o){var a=this;this.goodsList=this.goodsList.map((function(s){return s.sku_info?s.sku_info&&s.sku_info.length&&(s.sku_info=s.sku_info.map((function(a){if(t.sku_id==a.sku_id)if("act_stock_num"==o)a.act_stock_num=e;else if("reduce_money"==o){a.act_price=Math.round(100*(a.price-e+Number.EPSILON))/100,a.reduce_money=Math.round(100*(e+Number.EPSILON))/100;var s=(10*(1-e/a.price)).toFixed(2);s=s>0?s:.01;var i=a.price>0?s:0;a.discount_rate=i}else if("discount_rate"==o){a.discount_rate=e;var n=(1-e/10)*a.price;a.reduce_money=Math.round(100*(n+Number.EPSILON))/100,a.act_price=Math.round(100*(a.price-a.reduce_money+Number.EPSILON))/100}return a}))):s[o]=a[o],s}))},batchSet:function(e,t){var o=this,a=0;this.goodsList.forEach((function(e){a="spu"==e.goods_type?e.price:e.min_price})),"reduce_money"==t&&Number(this.reduce_money)>Number(a)?this.$message.error("批量设置减少金额不能大于原价格"):(this.reduce_money_visible=!1,this.discount_rate_visible=!1,"discount_rate"==t&&Number(this.discount_rate)>10?this.$message.error("批量设置折扣比例不能大于10"):(this.reduce_money_visible=!1,this.discount_rate_visible=!1,this.goodsList=this.goodsList.map((function(e){return e.sku_info?e.sku_info&&e.sku_info.length&&(e.sku_info=e.sku_info.map((function(e){if("reduce_money"==t){e.act_price=Math.round(100*(e.price-o.reduce_money+Number.EPSILON))/100,e.reduce_money=Math.round(100*(o.reduce_money+Number.EPSILON))/100;var a=e.price>0?(o.reduce_money/e.price*10).toFixed(2):0;e.discount_rate=10-a}else{e.discount_rate=o.discount_rate;var s=(1-e.discount_rate/10)*e.price;e.reduce_money=Math.round(100*(s+Number.EPSILON))/100,e.act_price=Math.round(100*(e.price-e.reduce_money+Number.EPSILON))/100}return e}))):e[t]=o[t],e})),"reduce_money"==t?this.reduce_money="":"discount_rate"==t&&(this.discount_rate="")))},addProduct:function(){this.start_time&&this.end_time?this.$refs.selectGoods.openDialog():this.$message.error("请先选择活动起止日期！")},selecrGoodsSubmit:function(e){console.log(e,"e-----selecrGoodsSubmit-----选择商品回调"),e.goods=e.goods.map((function(e){return e.type="limited",e.sku_info&&e.sku_info.length&&e.sku_info.forEach((function(t){t.goods_id=e.goods_id+"_"+t.sku_id,t.name=e.name,t.act_stock_num||(t.act_stock_num=t.stock_num),t.act_price||(t.act_price=0),t.discount_rate||(t.discount_rate=0),t.reduce_money||(t.reduce_money=0)})),e.sku_info&&!e.sku_info.length&&(e.act_stock_num=0,e.act_price=0,e.sku_info=""),e})),this.goodsList=e.goods,this.$set(this.formData,"goods_info",this.goodsList.length?this.goodsList[0]:""),console.log(this.goodsList,"this.goodsList")},onSelectChange:function(e){this.selectedRowKeys=e},removeGoods:function(e){if(e.sku_id)this.goodsList.forEach((function(t){t.sku_info&&t.sku_info.length&&t.sku_info.forEach((function(o,a){o.sku_id==e.sku_id&&t.sku_info.splice(a,1)}))}));else if(e.goods_id)for(var t=0;t<this.goodsList.length;t++)this.goodsList[t].goods_id===e.goods_id&&this.goodsList.splice(t,1)},resetForm:function(){this.formData=this.$options.data().formData,this.start_time=this.$options.data().start_time,this.end_time=this.$options.data().end_time,this.goodsList=[],this.$forceUpdate()},saveData:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return console.log("error submit!!",e.formData),!1;var o={};for(var a in e.formData)o[a]=e.formData[a];if(1!=o.is_discount_share||0!=o.share_discount.length)if(0!=e.goodsList.length)if(1==o.is_discount_share&&(o.discount_card=0,o.discount_coupon=0,o.share_discount.forEach((function(e){1==e?o.discount_card=1:2==e&&(o.discount_coupon=1)}))),o.store_id=e.store_id,e.id&&(o.id=e.id),o.start_time&&o.end_time){if(1==o.time_type){var s=r()(o.start_time).valueOf(),n=r()(o.end_time).valueOf();if(n<=s)return void e.$message.error("活动结束时间必须大于活动开始时间！")}else{var c=r()(o.start_time).valueOf(),u=r()(o.end_time).valueOf();if(u<=c)return void e.$message.error("周期结束时间必须大于活动开始时间！")}if(2==o.cycle_type){if(!o.cycle_date.length)return void e.$message.error("请选择每周周期");o.cycle_date=o.cycle_date.toString()}if(3!=o.cycle_type||o.cycle_date)if(e.goodsList.length){o.goods_sku=JSON.stringify(e.goodsList);var m=JSON.parse(JSON.stringify(e.goodsList)).filter((function(e){if(!e.sku_info||e.sku_info&&!e.sku_info.length){if(e.act_stock_num&&Number(e.act_stock_num)>Number(e.stock_num)&&-1!=e.stock_num)return e}else if(e.sku_info&&e.sku_info.length&&(e.sku_info=e.sku_info.filter((function(e){if(e.act_stock_num&&Number(e.act_stock_num)>Number(e.stock_num)&&-1!=e.stock_num)return e})),e.sku_info.length))return e}))||[];if(m.length)e.$message.error("商品活动库存不能大于当前库存");else{var d=JSON.parse(JSON.stringify(e.goodsList)).filter((function(e){if(!e.sku_info||e.sku_info&&!e.sku_info.length){if(null==e.reduce_money||void 0==e.reduce_money||0==e.reduce_money)return e;if(null==e.discount_rate||void 0==e.discount_rate||0==e.discount_rate)return e}else if(e.sku_info&&e.sku_info.length&&(e.sku_info=e.sku_info.filter((function(t){return null==t.reduce_money||void 0==t.reduce_money||0==t.reduce_money||null==t.discount_rate||void 0==t.discount_rate||0==t.discount_rate?e:void 0})),e.sku_info.length))return e}))||[];d.length?e.$message.error("请设置商品的减少金额或折扣"):(console.log(o),delete o.share_discount,delete o.goods_info,e.request(i["a"].updateLimited,o).then((function(t){e.resetForm(),e.id&&e.getFormData(),e.$message.success("提交成功！"),e.$router.push({path:"/merchant/merchant.mall/limitedList",query:{store_id:e.store_id}}),sessionStorage.setItem("limitedEdit",1)})))}}else e.$message.error("请选择活动商品");else e.$message.error("请填写每月周期")}else e.$message.error("请先选择活动起止日期！");else e.$message.error("请选择活动商品");else e.$message.error("请选择优惠同享类型")}))}}},d=m,l=(o("573c"),o("2877")),_=Object(l["a"])(d,a,s,!1,null,"a03d578c",null);t["default"]=_.exports},f768:function(e,t,o){}}]);