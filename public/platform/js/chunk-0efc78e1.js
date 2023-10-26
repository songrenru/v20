(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0efc78e1"],{"2edc":function(t,e,s){},"39c9":function(t,e,s){"use strict";s.r(e);s("b0c0");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 mb-20 mh-full"},[e("a-form-model",t._b({ref:"form",attrs:{model:t.formData,rules:t.rules}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[e("a-card",{attrs:{title:"基本信息",bordered:!1}},[e("a-form-model-item",{attrs:{label:"活动名称",prop:"name"}},[e("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}}),e("a-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),e("a-form-model-item",{attrs:{label:"活动时间"}},[e("a-form-model-item",{ref:"startTime",style:{display:"inline-block"},attrs:{prop:"start_time",autoLink:!1}},[e("a-date-picker",{attrs:{disabled:2==t.formData.status||1==t.formData.status,"show-time":"",format:"YYYY-MM-DD","disabled-date":t.disabledStartDate,placeholder:"请选择活动开始时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateStartChange},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}})],1),e("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),e("a-form-model-item",{ref:"endTime",style:{display:"inline-block"},attrs:{prop:"end_time",autoLink:!1}},[e("a-date-picker",{attrs:{disabled:2==t.formData.status,"show-time":"",format:"YYYY-MM-DD","disabled-date":t.disabledEndDate,placeholder:"请选择活动结束时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateEndChange},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1)],1)],1),e("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"优惠信息",bordered:!1}},[e("a-form-model-item",{attrs:{label:"活动规则",prop:"nums",help:"参与活动的商品单价最低不可低于【活动价/活动件数】的平均价。比如，后台设置【99元任选3件】，则参与此活动的单个商品单价最低不可小于【99/3=33元】"}},[e("span",{staticClass:"mr-10"},[t._v("满(元)")]),e("a-input-number",{attrs:{min:0},model:{value:t.formData.money,callback:function(e){t.$set(t.formData,"money",e)},expression:"formData.money"}}),e("span",{staticClass:"mr-10"},[t._v("任选(件)")]),e("a-input-number",{attrs:{min:0},model:{value:t.formData.nums,callback:function(e){t.$set(t.formData,"nums",e)},expression:"formData.nums"}})],1),e("a-form-model-item",{attrs:{label:"限购",prop:"buy_limit",help:"0代表不限购，请输入0~999正整数"}},[e("span",{staticClass:"mr-10"},[t._v("每人最多可参与")]),e("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.buy_limit,callback:function(e){t.$set(t.formData,"buy_limit",e)},expression:"formData.buy_limit"}}),e("span",{staticClass:"ml-10"},[t._v("次")])],1),e("a-form-model-item",{attrs:{label:"优惠是否同享",prop:"is_discount_share"}},[e("a-radio-group",{model:{value:t.formData.is_discount_share,callback:function(e){t.$set(t.formData,"is_discount_share",e)},expression:"formData.is_discount_share"}},[e("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 否 ")])],1),1==t.formData.is_discount_share?e("div",[e("a-checkbox-group",{model:{value:t.formData.share_discount,callback:function(e){t.$set(t.formData,"share_discount",e)},expression:"formData.share_discount"}},[e("a-checkbox",{attrs:{value:"1"}},[t._v(" 商家会员卡 ")]),e("a-checkbox",{attrs:{value:"2"}},[t._v(" 商家优惠券 ")])],1)],1):t._e()],1)],1),e("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"商品信息",bordered:!1}},[0==t.formData.act_type?e("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:4}}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addProduct()}}},[t._v(" 添加商品 ")]),t.selectedRowKeys.length?e("a-button",{staticClass:"ml-20",attrs:{type:"danger"},on:{click:function(e){return t.removeGoods()}}},[t._v(" 删除 "+t._s(t.selectedRowKeys.length)+" 项 ")]):t._e(),e("a-table",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.goodsList,rowKey:"goods_id",scroll:{x:!1}},scopedSlots:t._u([{key:"name",fn:function(s,a){return e("span",{},[e("div",{staticClass:"product-info"},[e("div",[e("img",{attrs:{src:a.image}})]),e("div",[t._v(t._s(s))])])])}},{key:"price",fn:function(s,a){return e("span",{staticClass:"cr-red"},["sku"==a.goods_type?e("span",[t._v("￥"+t._s(a.min_price)+" ~ ￥"+t._s(a.max_price))]):e("span",[t._v("￥"+t._s(a.price))])])}},{key:"action",fn:function(s){return e("span",{},[e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.removeGoods(s)}}},[t._v("删除")])])}}],null,!1,3135878249)})],1):t._e()],1),2!=t.formData.status?e("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:2}}},[e("div",{staticClass:"mt-20 mb-20"},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData()}}},[t._v(" 保存 ")])],1)]):t._e()],1),e("select-goods",{ref:"selectGoods",attrs:{storeId:t.store_id,source:"reached",startTime:t.formData.start_time,endTime:t.formData.end_time,selectedList:t.goodsList},on:{submit:t.selecrGoodsSubmit}})],1)},o=[],i=(s("a434"),s("d3b7"),s("159b"),s("4031")),r=s("c1df"),n=s.n(r),d=s("37fd"),c=s("ac0d"),m={name:"ReachedEdit",mixins:[c["d"]],components:{SelectGoods:d["default"]},data:function(){return{store_id:"",id:"",addGoodsModalVisible:!1,formData:{type:"reached",name:"",time:[],start_time:"",end_time:"",money:"",full_type:1,nums:0,buy_limit:0,is_discount_share:2,is_discoubuy_nt_share:2,share_discount:[],act_type:0,is_discoubuy_share:0},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],time:[{required:!0,message:"请选择活动时间",trigger:"blur"}],full_type:[{required:!0,message:"请选择优惠条件",trigger:"blur"}],money:[{required:!0,message:"请输入满多少元",trigger:"blur"}],nums:[{required:!0,message:"请输入满多少件",trigger:"blur"}],buy_limit:[{required:!0,message:"请选择限购数量",trigger:"blur"}],is_discount_share:[{required:!0,message:"请选择优惠是否同享",trigger:"blur"}],act_type:[{required:!0,message:"请选择活动商品",trigger:"blur"}]},columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"},width:"300px"},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"},width:"200px"},{title:"当前库存",dataIndex:"stock_num"},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],goodsList:[],selectedRowKeys:[],start_time:null,end_time:null}},watch:{"$route.path":function(t){"/merchant/merchant.mall/editReached"==t&&(this.id="",this.resetForm())},"$route.query.store_id":function(t){t&&(this.store_id=t,this.resetForm())},"$route.query.id":function(t){var e=this;this.$nextTick((function(){e.activatedFlag&&t?(e.id=t,e.resetForm(),e.getFormData()):(e.id="",e.resetForm())}))}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:"checkbox",onChange:this.onSelectChange,getCheckboxProps:function(t){return{props:{}}}}}},created:function(){this.store_id=this.$route.query.store_id,this.resetForm(),this.$route.query.id&&(this.id=this.$route.query.id,this.getFormData())},methods:{moment:n.a,disabledDate:function(t){return t<n()().endOf("day").subtract(1,"days")},getFormData:function(){var t=this;console.log(this.id),this.request(i["a"].getReachedInfo,{id:this.id}).then((function(e){console.log(e),t.start_time=n()(e.start_time),t.end_time=n()(e.end_time),e.time=[n()(e.start_time),n()(e.end_time)],1==e.is_discount_share?(e.share_discount=[],1==e.discount_card&&e.share_discount.push("1"),1==e.discount_coupon&&e.share_discount.push("2")):e.share_discount=[],t.$set(t,"formData",e),console.log(t.formData),t.goodsList=e.goods_info}))},onDateRangeChange:function(t,e){this.$set(this.formData,"time",[t[0],t[1]]),this.$set(this.formData,"start_time",e[0]),this.$set(this.formData,"end_time",e[1])},disabledStartDate:function(t){return t<n()().add(-1,"d")},disabledEndDate:function(t){var e=this.start_time;return e?e.valueOf()>=t.valueOf():t<n()().add(-1,"d")},onDateStartChange:function(t,e){this.$set(this.formData,"start_time",e),this.$refs.startTime.onFieldChange()},onDateEndChange:function(t,e){var s=n()(this.formData.start_time).valueOf(),a=n()(e).valueOf();console.log("1-----------活动结束时间选择"),console.log(s),console.log(a),a<s?this.$message.error("活动结束时间必须大于活动开始时间！"):(this.$set(this.formData,"end_time",e),this.$refs.endTime.onFieldChange())},addProduct:function(){var t=this.activeTimeCheck(),e=t.activeTime,s=t.message;e||!s?this.$refs.selectGoods.openDialog():this.$message.error(s)},activeTimeCheck:function(){var t=!0,e="";return this.start_time||this.end_time?this.start_time?this.end_time||(e="请先选择活动的结束时间！",t=!1):(e="请先选择活动的开始时间！",t=!1):(e="请先选择活动的开始时间和结束时间！",t=!1),{activeTime:t,message:e}},selecrGoodsSubmit:function(t){console.log(t),this.goodsList=t.goods},onSelectChange:function(t){this.selectedRowKeys=t},removeGoods:function(t){for(var e=0;e<this.goodsList.length;e++)this.goodsList[e].goods_id===t&&this.goodsList.splice(e,1)},resetForm:function(){this.formData=this.$options.data().formData,this.start_time=this.$options.data().start_time,this.end_time=this.$options.data().end_time,this.goodsList=[],this.$forceUpdate()},saveData:function(){var t=this;console.log(this.formData),this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!",t.formData),!1;var s=t.formData;1!=s.is_discount_share||0!=s.share_discount.length?0!=s.act_type||0!=t.goodsList.length?(1==s.is_discount_share&&(s.discount_card=0,s.discount_coupon=0,s.share_discount.forEach((function(t){1==t?s.discount_card=1:2==t&&(s.discount_coupon=1)}))),s.store_id=t.store_id,t.id&&(s.id=t.id),(t.goodsList.length||s.goods_info)&&(s.goods_info=JSON.stringify(t.goodsList)),s.is_discoubuy_nt_share=s.is_discoubuy_share,delete s.share_discount,delete s.time,console.log(s),t.request(i["a"].updateReachedList,s).then((function(e){t.resetForm(),t.id&&t.getFormData(),t.$message.success("提交成功！"),t.$router.push({path:"/merchant/merchant.mall/reachedList",query:{store_id:t.store_id}}),sessionStorage.setItem("ReachedEdit",1)}))):t.$message.error("请选择活动商品"):t.$message.error("请选择优惠同享类型")}))}}},l=m,u=(s("9e06"),s("2877")),h=Object(u["a"])(l,a,o,!1,null,"773a389a",null);e["default"]=h.exports},"9e06":function(t,e,s){"use strict";s("2edc")}}]);