(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-856aaa1a"],{"39c9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-10 mb-20 mh-full"},[a("a-form-model",t._b({ref:"form",attrs:{model:t.formData,rules:t.rules}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[a("a-card",{attrs:{title:"基本信息",bordered:!1}},[a("a-form-model-item",{attrs:{label:"活动名称",prop:"name"}},[a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}}),a("a-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("a-form-model-item",{attrs:{label:"活动时间"}},[a("a-form-model-item",{ref:"startTime",style:{display:"inline-block"},attrs:{prop:"start_time",autoLink:!1}},[a("a-date-picker",{attrs:{disabled:2==t.formData.status||1==t.formData.status,"show-time":"",format:"YYYY-MM-DD","disabled-date":t.disabledStartDate,placeholder:"请选择活动开始时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateStartChange},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}})],1),a("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),a("a-form-model-item",{ref:"endTime",style:{display:"inline-block"},attrs:{prop:"end_time",autoLink:!1}},[a("a-date-picker",{attrs:{disabled:2==t.formData.status,"show-time":"",format:"YYYY-MM-DD","disabled-date":t.disabledEndDate,placeholder:"请选择活动结束时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateEndChange},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1)],1)],1),a("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"优惠信息",bordered:!1}},[a("a-form-model-item",{attrs:{label:"活动规则",prop:"nums",help:"参与活动的商品单价最低不可低于【活动价/活动件数】的平均价。比如，后台设置【99元任选3件】，则参与此活动的单个商品单价最低不可小于【99/3=33元】"}},[a("span",{staticClass:"mr-10"},[t._v("满(元)")]),a("a-input-number",{attrs:{min:0},model:{value:t.formData.money,callback:function(e){t.$set(t.formData,"money",e)},expression:"formData.money"}}),a("span",{staticClass:"mr-10"},[t._v("任选(件)")]),a("a-input-number",{attrs:{min:0},model:{value:t.formData.nums,callback:function(e){t.$set(t.formData,"nums",e)},expression:"formData.nums"}})],1),a("a-form-model-item",{attrs:{label:"限购",prop:"buy_limit",help:"0代表不限购，请输入0~999正整数"}},[a("span",{staticClass:"mr-10"},[t._v("每人最多可参与")]),a("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.buy_limit,callback:function(e){t.$set(t.formData,"buy_limit",e)},expression:"formData.buy_limit"}}),a("span",{staticClass:"ml-10"},[t._v("次")])],1),a("a-form-model-item",{attrs:{label:"优惠是否同享",prop:"is_discount_share"}},[a("a-radio-group",{model:{value:t.formData.is_discount_share,callback:function(e){t.$set(t.formData,"is_discount_share",e)},expression:"formData.is_discount_share"}},[a("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 否 ")])],1),1==t.formData.is_discount_share?a("div",[a("a-checkbox-group",{model:{value:t.formData.share_discount,callback:function(e){t.$set(t.formData,"share_discount",e)},expression:"formData.share_discount"}},[a("a-checkbox",{attrs:{value:"1"}},[t._v(" 商家会员卡 ")]),a("a-checkbox",{attrs:{value:"2"}},[t._v(" 商家优惠券 ")])],1)],1):t._e()],1)],1),a("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"商品信息",bordered:!1}},[0==t.formData.act_type?a("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addProduct()}}},[t._v(" 添加商品 ")]),t.selectedRowKeys.length?a("a-button",{staticClass:"ml-20",attrs:{type:"danger"},on:{click:function(e){return t.removeGoods()}}},[t._v(" 删除 "+t._s(t.selectedRowKeys.length)+" 项 ")]):t._e(),a("a-table",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.goodsList,rowKey:"goods_id",scroll:{x:!1}},scopedSlots:t._u([{key:"name",fn:function(e,s){return a("span",{},[a("div",{staticClass:"product-info"},[a("div",[a("img",{attrs:{src:s.image}})]),a("div",[t._v(t._s(e))])])])}},{key:"price",fn:function(e,s){return a("span",{staticClass:"cr-red"},["sku"==s.goods_type?a("span",[t._v("￥"+t._s(s.min_price)+" ~ ￥"+t._s(s.max_price))]):a("span",[t._v("￥"+t._s(s.price))])])}},{key:"action",fn:function(e){return a("span",{},[a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return t.removeGoods(e)}}},[t._v("删除")])])}}],null,!1,3135878249)})],1):t._e()],1),2!=t.formData.status?a("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:2}}},[a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData()}}},[t._v(" 保存 ")])],1)]):t._e()],1),a("select-goods",{ref:"selectGoods",attrs:{storeId:t.store_id,source:"reached",startTime:t.formData.start_time,endTime:t.formData.end_time,selectedList:t.goodsList},on:{submit:t.selecrGoodsSubmit}})],1)},o=[],i=(a("a434"),a("d3b7"),a("159b"),a("4031")),r=a("c1df"),n=a.n(r),d=a("37fd"),c=a("ac0d"),m={name:"ReachedEdit",mixins:[c["d"]],components:{SelectGoods:d["default"]},data:function(){return{store_id:"",id:"",addGoodsModalVisible:!1,formData:{type:"reached",name:"",time:[],start_time:"",end_time:"",money:"",full_type:1,nums:0,buy_limit:0,is_discount_share:2,is_discoubuy_nt_share:2,share_discount:[],act_type:0,is_discoubuy_share:0},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],time:[{required:!0,message:"请选择活动时间",trigger:"blur"}],full_type:[{required:!0,message:"请选择优惠条件",trigger:"blur"}],money:[{required:!0,message:"请输入满多少元",trigger:"blur"}],nums:[{required:!0,message:"请输入满多少件",trigger:"blur"}],buy_limit:[{required:!0,message:"请选择限购数量",trigger:"blur"}],is_discount_share:[{required:!0,message:"请选择优惠是否同享",trigger:"blur"}],act_type:[{required:!0,message:"请选择活动商品",trigger:"blur"}]},columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"},width:"300px"},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"},width:"200px"},{title:"当前库存",dataIndex:"stock_num"},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],goodsList:[],selectedRowKeys:[],start_time:null,end_time:null}},watch:{"$route.path":function(t){"/merchant/merchant.mall/editReached"==t&&(this.id="",this.resetForm())},"$route.query.store_id":function(t){t&&(this.store_id=t,this.resetForm())},"$route.query.id":function(t){var e=this;this.$nextTick((function(){e.activatedFlag&&t?(e.id=t,e.resetForm(),e.getFormData()):(e.id="",e.resetForm())}))}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:"checkbox",onChange:this.onSelectChange,getCheckboxProps:function(t){return{props:{}}}}}},created:function(){this.store_id=this.$route.query.store_id,this.resetForm(),this.$route.query.id&&(this.id=this.$route.query.id,this.getFormData())},methods:{moment:n.a,disabledDate:function(t){return t<n()().endOf("day").subtract(1,"days")},getFormData:function(){var t=this;console.log(this.id),this.request(i["a"].getReachedInfo,{id:this.id}).then((function(e){console.log(e),t.start_time=n()(e.start_time),t.end_time=n()(e.end_time),e.time=[n()(e.start_time),n()(e.end_time)],1==e.is_discount_share?(e.share_discount=[],1==e.discount_card&&e.share_discount.push("1"),1==e.discount_coupon&&e.share_discount.push("2")):e.share_discount=[],t.$set(t,"formData",e),console.log(t.formData),t.goodsList=e.goods_info}))},onDateRangeChange:function(t,e){this.$set(this.formData,"time",[t[0],t[1]]),this.$set(this.formData,"start_time",e[0]),this.$set(this.formData,"end_time",e[1])},disabledStartDate:function(t){return t<n()().add(-1,"d")},disabledEndDate:function(t){var e=this.start_time;return e?e.valueOf()>=t.valueOf():t<n()().add(-1,"d")},onDateStartChange:function(t,e){this.$set(this.formData,"start_time",e),this.$refs.startTime.onFieldChange()},onDateEndChange:function(t,e){var a=n()(this.formData.start_time).valueOf(),s=n()(e).valueOf();console.log("1-----------活动结束时间选择"),console.log(a),console.log(s),s<a?this.$message.error("活动结束时间必须大于活动开始时间！"):(this.$set(this.formData,"end_time",e),this.$refs.endTime.onFieldChange())},addProduct:function(){var t=this.activeTimeCheck(),e=t.activeTime,a=t.message;e||!a?this.$refs.selectGoods.openDialog():this.$message.error(a)},activeTimeCheck:function(){var t=!0,e="";return this.start_time||this.end_time?this.start_time?this.end_time||(e="请先选择活动的结束时间！",t=!1):(e="请先选择活动的开始时间！",t=!1):(e="请先选择活动的开始时间和结束时间！",t=!1),{activeTime:t,message:e}},selecrGoodsSubmit:function(t){console.log(t),this.goodsList=t.goods},onSelectChange:function(t){this.selectedRowKeys=t},removeGoods:function(t){for(var e=0;e<this.goodsList.length;e++)this.goodsList[e].goods_id===t&&this.goodsList.splice(e,1)},resetForm:function(){this.formData=this.$options.data().formData,this.start_time=this.$options.data().start_time,this.end_time=this.$options.data().end_time,this.goodsList=[],this.$forceUpdate()},saveData:function(){var t=this;console.log(this.formData),this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!",t.formData),!1;var a=t.formData;1!=a.is_discount_share||0!=a.share_discount.length?0!=a.act_type||0!=t.goodsList.length?(1==a.is_discount_share&&(a.discount_card=0,a.discount_coupon=0,a.share_discount.forEach((function(t){1==t?a.discount_card=1:2==t&&(a.discount_coupon=1)}))),a.store_id=t.store_id,t.id&&(a.id=t.id),(t.goodsList.length||a.goods_info)&&(a.goods_info=JSON.stringify(t.goodsList)),a.is_discoubuy_nt_share=a.is_discoubuy_share,delete a.share_discount,delete a.time,console.log(a),t.request(i["a"].updateReachedList,a).then((function(e){t.resetForm(),t.id&&t.getFormData(),t.$message.success("提交成功！"),t.$router.push({path:"/merchant/merchant.mall/reachedList",query:{store_id:t.store_id}}),sessionStorage.setItem("ReachedEdit",1)}))):t.$message.error("请选择活动商品"):t.$message.error("请选择优惠同享类型")}))}}},l=m,u=(a("9e06"),a("0c7c")),h=Object(u["a"])(l,s,o,!1,null,"773a389a",null);e["default"]=h.exports},"932d":function(t,e,a){},"9e06":function(t,e,a){"use strict";a("932d")}}]);