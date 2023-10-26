(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6b983b2","chunk-748b470d"],{"32f9":function(t,e,s){},"4bb5d":function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var a=s("ea87");function i(t){if(Array.isArray(t))return Object(a["a"])(t)}s("6073"),s("2c5c"),s("c5cb"),s("36fa"),s("02bf"),s("a617"),s("17c8");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=s("9877");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||Object(r["a"])(t)||n()}},"659d":function(t,e,s){"use strict";s("32f9")},a090:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 mb-20 mh-full"},[e("a-form-model",t._b({ref:"form",attrs:{model:t.formData,rules:t.rules}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[e("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"基本信息",bordered:!1}},[e("a-form-model-item",{attrs:{label:"活动商品",prop:"goods_info"}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addProduct()}}},[t._v(" 添加商品 ")])],1),e("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:4}}},[e("a-table",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{columns:t.columns,"data-source":t.goodsList,rowKey:"goods_id",childrenColumnName:"sku_info",defaultExpandAllRows:!0,scroll:{x:!1}},scopedSlots:t._u([{key:"name",fn:function(s,a){return e("span",{},[e("a-avatar",{attrs:{shape:"square",size:64,src:a.image}}),e("span",{staticClass:"ml-10 name"},[t._v(t._s(s))])],1)}},{key:"skuStr",fn:function(s,a){return e("span",{},[a.sku_info&&"sku"==a.sku_info.goods_type?e("span",[t._v(" 多规格 ")]):e("span",[t._v(" "+t._s(s||"----")+" ")])])}},{key:"actStockNum",fn:function(s,a){return e("span",{},[a.sku_info&&a.sku_info.length?e("span",[t._v(" ---- ")]):e("span",[e("a-form-item",{staticStyle:{margin:"-5px 0"},attrs:{prop:"act_stock_num"}},[-1==a.stock_num?e("a-input-number",{attrs:{min:-1},on:{change:function(e){return t.handleChange(a.act_stock_num,a,"act_stock_num")}},model:{value:a.act_stock_num,callback:function(e){t.$set(a,"act_stock_num",e)},expression:"record.act_stock_num"}}):e("a-input-number",{attrs:{min:0,max:a.stock_num-0},on:{change:function(e){return t.handleChange(a.act_stock_num,a,"act_stock_num")}},model:{value:a.act_stock_num,callback:function(e){t.$set(a,"act_stock_num",e)},expression:"record.act_stock_num"}})],1)],1)])}},{key:"price",fn:function(s,a){return e("span",{staticClass:"cr-red"},[a.sku_info&&"sku"==a.sku_info.goods_type?e("span",[t._v(" ￥"+t._s(a.min_price)+" ~ ￥"+t._s(a.max_price)+" ")]):e("span",[t._v(" ￥"+t._s(s)+" ")])])}},{key:"actPrice",fn:function(s,a){return e("span",{},[a.sku_info&&a.sku_info.length?e("span",[t._v(" ---- ")]):e("span",[e("a-form-item",{staticStyle:{margin:"-5px 0"},attrs:{prop:"act_price"}},[e("a-input-number",{attrs:{disabled:t.disabled_status,min:0,max:a.price-0},on:{change:function(e){return t.handleChange(a.act_price,a,"act_price")}},model:{value:a.act_price,callback:function(e){t.$set(a,"act_price",e)},expression:"record.act_price"}})],1)],1)])}},{key:"action",fn:function(s,a){return e("span",{},[e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.removeGoods(a)}}},[t._v("删除")])])}}])},[e("span",{attrs:{slot:"actStockNumTitle"},slot:"actStockNumTitle"},[t._v(" 活动库存 "),e("a-tooltip",{attrs:{trigger:"“hover"}},[e("template",{slot:"title"},[t._v("设置每个sku的活动库存")]),e("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),e("span",{attrs:{slot:"actPriceTitle"},slot:"actPriceTitle"},[t._v(" 活动价 "),e("a-tooltip",{attrs:{trigger:"“hover"}},[e("template",{slot:"title"},[t._v("设置每个商品的活动价")]),e("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1)])],1),e("a-form-model-item",{attrs:{label:"活动时间",required:""}},[e("a-form-model-item",{ref:"startTime",style:{display:"inline-block"},attrs:{prop:"start_time",autoLink:!1}},[e("a-date-picker",{attrs:{disabled:2==t.formData.status||1==t.formData.status,"show-time":"",format:"YYYY-MM-DD HH:mm:ss","disabled-date":t.disabledStartDate,placeholder:"请选择活动开始时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateStartChange},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}})],1),e("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),e("a-form-model-item",{ref:"endTime",style:{display:"inline-block"},attrs:{prop:"end_time",autoLink:!1}},[e("a-date-picker",{attrs:{disabled:2==t.formData.status,"show-time":"",format:"YYYY-MM-DD HH:mm:ss","disabled-date":t.disabledEndDate,placeholder:"请选择活动结束时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateEndChange},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1)],1),e("a-form-model-item",{attrs:{label:"砍价有效时间",prop:"affect_time",help:"请填写4-48之间正整数"}},[e("a-input-number",{staticStyle:{width:"180px"},attrs:{min:4,max:48,placeholder:""},model:{value:t.formData.affect_time,callback:function(e){t.$set(t.formData,"affect_time",e)},expression:"formData.affect_time"}}),t._v("（小时） ")],1),e("a-form-model-item",{attrs:{label:"首刀砍价最小比例",prop:"bar_first_per_min",help:"请填写1-90之间正整数"}},[e("a-input-number",{staticStyle:{width:"80px"},attrs:{min:1,max:90,placeholder:""},model:{value:t.formData.bar_first_per_min,callback:function(e){t.$set(t.formData,"bar_first_per_min",e)},expression:"formData.bar_first_per_min"}}),t._v(" % ")],1),e("a-form-model-item",{attrs:{label:"首刀砍价最大比例",prop:"bar_first_per_max",help:"请填写1-90之间正整数"}},[e("a-input-number",{staticStyle:{width:"80px"},attrs:{min:1,max:90,placeholder:""},model:{value:t.formData.bar_first_per_max,callback:function(e){t.$set(t.formData,"bar_first_per_max",e)},expression:"formData.bar_first_per_max"}}),t._v(" % ")],1),e("a-form-model-item",{attrs:{label:"帮砍人数",prop:"help_bargain_people_num",help:"当帮砍人数到达设置人数，商品将砍到底价，请填写2-100之间正整数"}},[e("a-input-number",{staticStyle:{width:"180px"},attrs:{min:2,max:100,placeholder:""},model:{value:t.formData.help_bargain_people_num,callback:function(e){t.$set(t.formData,"help_bargain_people_num",e)},expression:"formData.help_bargain_people_num"}})],1)],1),e("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"优惠信息",bordered:!1}},[e("a-form-model-item",{attrs:{label:"优惠是否同享",prop:"is_discount_share"}},[e("a-radio-group",{model:{value:t.formData.is_discount_share,callback:function(e){t.$set(t.formData,"is_discount_share",e)},expression:"formData.is_discount_share"}},[e("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 否 ")])],1),1==t.formData.is_discount_share?e("div",[e("a-checkbox-group",{model:{value:t.formData.share_discount,callback:function(e){t.$set(t.formData,"share_discount",e)},expression:"formData.share_discount"}},[e("a-checkbox",{attrs:{value:"1"}},[t._v(" 商家会员卡 ")]),e("a-checkbox",{attrs:{value:"2"}},[t._v(" 商家优惠券 ")])],1)],1):t._e()],1),e("a-form-model-item",{attrs:{label:"限购",prop:"buy_limit",help:"0代表不限购，请输入0~999正整数"}},[e("span",{staticClass:"mr-10"},[t._v("每人最多可参与")]),e("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.buy_limit,callback:function(e){t.$set(t.formData,"buy_limit",e)},expression:"formData.buy_limit"}}),e("span",{staticClass:"ml-10"},[t._v("次")])],1)],1),2!=t.formData.status?e("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:2}}},[e("div",{staticClass:"mt-20 mb-20"},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData()}}},[t._v(" 保存 ")])],1)]):t._e()],1),e("select-goods",{ref:"selectGoods",attrs:{storeId:t.store_id,source:"bargain",type:"radio",startTime:t.formData.start_time,endTime:t.formData.end_time,selectedList:t.goodsList},on:{submit:t.selecrGoodsSubmit}})],1)},i=[],o=s("4bb5d"),r=(s("075f"),s("c5cb"),s("08c7"),s("54f8"),s("4afa"),s("19f1"),s("cd5d"),s("4031")),n=s("2f42"),c=s.n(n),u=s("37fd"),_=s("ac0d"),m={name:"BragainEdit",mixins:[_["d"]],components:{SelectGoods:u["default"]},data:function(){return{disabled_status:!1,store_id:"",id:"",formData:{time:[],start_time:"",end_time:"",affect_time:"",bar_first_per_min:"",bar_first_per_max:"",help_bargain_people_num:"",is_discount_share:1,share_discount:[],buy_limit:0,goods_info:""},rules:{start_time:[{required:!0,message:"请选择活动开始时间",trigger:["blur","change"]}],end_time:[{required:!0,message:"请选择活动结束时间",trigger:["blur","change"]}],help_bargain_people_num:[{required:!0,message:"请输入帮砍人数",trigger:"blur"}],bar_first_per_min:[{required:!0,message:"请输入首刀最小比例",trigger:"blur"}],bar_first_per_max:[{required:!0,message:"请输入首刀最大比例",trigger:"blur"}],is_discount_share:[{required:!0,message:"请选择优惠是否同享",trigger:"blur"}],affect_time:[{required:!0,message:"请选择砍价有效时间",trigger:"blur"}],act_stock_num:[{required:!0,message:"请输入商品活动库存",trigger:"blur"}],act_price:[{required:!0,message:"请输入商品活动价",trigger:"blur"}],buy_limit:[{required:!0,message:"请输入每人最多可参与次数请输入每人最多可参与次数",trigger:"blur"}]},columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"规格",dataIndex:"sku_str",scopedSlots:{customRender:"skuStr"}},{title:"当前库存",dataIndex:"stock_num",scopedSlots:{customRender:"stockNum"}},{dataIndex:"act_stock_num",key:"act_stock_num",slots:{title:"actStockNumTitle"},scopedSlots:{customRender:"actStockNum"}},{title:"原价格",dataIndex:"price",scopedSlots:{customRender:"price"}},{dataIndex:"act_price",key:"act_price",slots:{title:"actPriceTitle"},scopedSlots:{customRender:"actPrice"}},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],goodsList:[],act_price:"",act_stock_num:"",affect_time:{hours:""},all_noGroup_time:{hours:"",minutes:""},simulate_group_time:{hours:"",minutes:""},act_price_visible:!1,act_stock_num_visible:!1,start_time:null,end_time:null}},watch:{"$route.path":function(t){"/merchant/merchant.mall/editBargain"==t&&(this.id="",this.resetForm())},"$route.query.store_id":function(t){t&&(this.store_id=t,this.resetForm())},"$route.query.id":function(t){var e=this;this.$nextTick((function(){e.activatedFlag&&t?(e.id=t,e.resetForm(),e.getFormData()):(e.id="",e.resetForm())}))}},created:function(){this.store_id=this.$route.query.store_id,this.resetForm(),this.$route.query.id&&(this.id=this.$route.query.id,this.getFormData())},methods:{moment:c.a,getFormData:function(){var t=this;this.request(r["a"].getBargainInfo,{id:this.id}).then((function(e){console.log(e),t.start_time=c()(e.start_time),t.end_time=c()(e.end_time),1==e.is_discount_share&&(e.share_discount=[],1==e.discount_card&&e.share_discount.push("1"),1==e.discount_coupon&&e.share_discount.push("2")),e.affect_time&&(t.affect_time=t.timeStamp(e.affect_time)),t.$set(t,"formData",e),t.disabled_status=1==e.is_began;var s=e.goods_info||[];t.goodsList=s.length?s.map((function(t){return t.type="bargain",t.sku_info&&t.sku_info.length&&t.sku_info.forEach((function(e){e.name=t.name,e.image=t.image,e.act_stock_num||(e.act_stock_num=0),e.act_price||(e.act_price=0)})),t.sku_info&&!t.sku_info.length&&(t.act_stock_num=0,t.act_price=0,t.sku_info=""),t})):[]}))},timeStamp:function(t){var e,s,a;parseInt(t);if(parseInt(t)>60){parseInt(t);var i=parseInt(t/60);i>60&&(i=parseInt(t/60)%60,s=parseInt(parseInt(t/60)/60),s>24&&(s=parseInt(parseInt(t/60)/60)%24,e=parseInt(parseInt(parseInt(t/60)/60)/24)))}return{day:e,hours:s,minutes:a}},disabledStartDate:function(t){return!this.$route.query.id&&(t&&t<c()().subtract(1,"days"))},disabledEndDate:function(t){var e=this.start_time;return e?e.valueOf()>=t.valueOf():t&&t<c()().subtract(1,"days")},onDateStartChange:function(t,e){this.$set(this.formData,"start_time",e),this.$refs.startTime.onFieldChange()},onDateEndChange:function(t,e){var s=c()(this.formData.start_time).valueOf(),a=c()(e).valueOf();a<s?this.$message.error("活动结束时间必须大于活动开始时间！"):(this.$set(this.formData,"end_time",e),this.$refs.endTime.onFieldChange())},addProduct:function(){var t=this.activeTimeCheck(),e=t.activeTime,s=t.message;e||!s?this.$refs.selectGoods.openDialog():this.$message.error(s)},activeTimeCheck:function(){var t=!0,e="";return this.start_time||this.end_time?this.start_time?this.end_time||(e="请先选择活动的结束时间！",t=!1):(e="请先选择活动的开始时间！",t=!1):(e="请先选择活动的开始时间和结束时间！",t=!1),{activeTime:t,message:e}},selecrGoodsSubmit:function(t){console.log(t,"e-----selecrGoodsSubmit-----选择商品回调"),t.goods=t.goods.map((function(t){return t.type="bargain",t.sku_info&&t.sku_info.length&&t.sku_info.forEach((function(e){e.goods_id=t.goods_id+"_"+e.sku_id,e.name=t.name,e.image=t.image,e.act_stock_num||(e.act_stock_num=0),e.act_price||(e.act_price=0)})),t.sku_info&&!t.sku_info.length&&(t.act_stock_num=0,t.act_price=0,t.sku_info=""),t})),this.goodsList=t.goods,this.$set(this.formData,"goods_info",this.goodsList.length?this.goodsList[0]:""),console.log(this.goodsList,"this.goodsList")},removeGoods:function(t){if(t.sku_id)this.goodsList.forEach((function(e){e.sku_info&&e.sku_info.length&&e.sku_info.forEach((function(s,a){s.sku_id==t.sku_id&&e.sku_info.splice(a,1)}))}));else if(t.goods_id)for(var e=0;e<this.goodsList.length;e++)this.goodsList[e].goods_id===t.goods_id&&this.goodsList.splice(e,1)},resetForm:function(){this.formData=this.$options.data().formData,this.affect_time=this.$options.data().affect_time,this.start_time=this.$options.data().start_time,this.end_time=this.$options.data().end_time,this.goodsList=[],this.$forceUpdate()},handleChange:function(t,e,s){this.goodsList=this.goodsList.map((function(a){return e.sku_info?e.sku_id==a.sku_id&&(a[s]=t):e.goods_id==a.goods_id&&(a[s]=t),a}))},batchSet:function(t,e){var s=this,a=0;if(this.goodsList.forEach((function(t){t.sku_info?t.sku_info&&t.sku_info.length&&(a=t.min_price):a=t.price})),"act_price"==e&&Number(this.act_price)>Number(a))this.$message.error("活动价不能大于原价格");else{this.act_price_visible=!1,this.act_stock_num_visible=!1;var i=0;this.goodsList.forEach((function(t){t.sku_info?t.sku_info&&t.sku_info.length&&(i=Math.min.apply(Math,Object(o["a"])(t.sku_info.map((function(t){return t.stock_num}))))):i=t.stock_num})),"act_stock_num"==e&&Number(this.act_stock_num)>Number(i)?this.$message.error("活动库存不能大于当前库存"):(this.act_price_visible=!1,this.act_stock_num_visible=!1,this.goodsList=this.goodsList.map((function(t){return t.sku_info?t.sku_info&&t.sku_info.length&&(t.sku_info=t.sku_info.map((function(t){return"act_price"==e&&(t.act_price=s.act_price),"act_stock_num"==e&&(t.act_stock_num=s.act_stock_num),t}))):t[e]=s[e],t})))}},affectTimeChange:function(t,e){this.$set(this.affect_time,e,t);var s=this.affect_time,a=s.day,i=void 0===a?0:a,o=s.hours,r=void 0===o?0:o,n=s.minutes,c=void 0===n?0:n,u=24*Number(i)*60*60+60*Number(r)+60*Number(c);this.$set(this.formData,"affect_time",u)},saveData:function(){var t=this;console.log(this.all_machine_into_time,"all_machine_into_time "),console.log(this.formData,"this.formData"),this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!",t.formData),!1;console.log(t.goodsList,"this.goodsList");var s=t.formData;if(1!=s.is_discount_share||0!=s.share_discount.length)if(0!=t.goodsList.length){for(var a=0;a<t.goodsList.length;a++)for(var i=0;i<t.goodsList[a].sku_info.length;i++)if(0==t.goodsList[a].sku_info[i].act_stock_num)return void t.$message.error("活动库存不能为0");var o=JSON.parse(JSON.stringify(t.goodsList)).filter((function(t){if(!t.sku_info||t.sku_info&&!t.sku_info.length){if(t.act_stock_num&&Number(t.act_stock_num)>Number(t.stock_num)&&-1!=t.stock_num)return t}else if(t.sku_info&&t.sku_info.length&&(t.sku_info=t.sku_info.filter((function(t){if(t.act_stock_num&&Number(t.act_stock_num)>Number(t.stock_num)&&-1!=t.stock_num)return t})),t.sku_info.length))return t}))||[];if(o.length)t.$message.error("商品活动库存不能大于当前库存");else{var n=JSON.parse(JSON.stringify(t.goodsList)).filter((function(t){if(!t.sku_info||t.sku_info&&!t.sku_info.length){if((null==t.act_price||void 0==t.act_price||""==t.act_price)&&0!=t.act_price)return t}else if(t.sku_info&&t.sku_info.length&&(t.sku_info=t.sku_info.filter((function(t){if((null==t.act_price||void 0==t.act_price||""==t.act_price)&&0!=t.act_price)return t})),t.sku_info.length))return t}))||[];if(n.length)t.$message.error("请设置商品的活动价");else{1==s.is_discount_share&&(s.discount_card=0,s.discount_coupon=0,s.share_discount.forEach((function(t){1==t?s.discount_card=1:2==t&&(s.discount_coupon=1)}))),s.store_id=t.store_id,t.id&&(s.id=t.id),(t.goodsList.length||s.goods_info)&&(s.goods_info=t.goodsList.length?t.goodsList[0]:"");var c={id:t.id,store_id:t.store_id,start_time:s.start_time,end_time:s.end_time,affect_time:s.affect_time,help_bargain_people_num:s.help_bargain_people_num,bar_first_per_min:s.bar_first_per_min,bar_first_per_max:s.bar_first_per_max,buy_limit:s.buy_limit,is_discount_share:s.is_discount_share,discount_card:s.discount_card,discount_coupon:s.discount_coupon,goods_info:s.goods_info};console.log(c,"params"),t.request(r["a"].bargainAdd,c).then((function(e){t.resetForm(),t.id&&t.getFormData(),t.$message.success("提交成功！"),t.$router.push({path:"/merchant/merchant.mall/bargainList",query:{store_id:t.store_id}}),sessionStorage.setItem("bargainEdit",1)}))}}}else t.$message.error("请选择活动商品");else t.$message.error("请选择优惠同享类型")}))}}},l=m,d=(s("659d"),s("0b56")),f=Object(d["a"])(l,a,i,!1,null,"4690bb3e",null);e["default"]=f.exports}}]);