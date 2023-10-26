(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12441cea"],{"5df3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-10 mb-20 mh-full"},[a("a-form-model",t._b({ref:"form",attrs:{model:t.formData,rules:t.rules}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[a("a-card",{attrs:{title:"基本信息",bordered:!1}},[a("a-form-model-item",{attrs:{label:"活动名称",prop:"name"}},[a("a-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("a-form-model-item",{attrs:{label:"活动时间"}},[a("a-form-model-item",{ref:"startTime",style:{display:"inline-block"},attrs:{prop:"start_time",autoLink:!1}},[a("a-date-picker",{attrs:{disabled:2==t.formData.status||1==t.formData.status,"show-time":"",format:"YYYY-MM-DD","disabled-date":t.disabledStartDate,placeholder:"请选择活动开始时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateStartChange},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}})],1),a("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),a("a-form-model-item",{ref:"endTime",style:{display:"inline-block"},attrs:{prop:"end_time",autoLink:!1}},[a("a-date-picker",{attrs:{disabled:2==t.formData.status,"show-time":"",format:"YYYY-MM-DD","disabled-date":t.disabledEndDate,placeholder:"请选择活动结束时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateEndChange},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1)],1)],1),a("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"优惠信息",bordered:!1}},[a("a-form-model-item",{attrs:{label:"优惠条件",prop:"full_type"}},[a("a-radio-group",{on:{change:t.handleFullTypeChange},model:{value:t.formData.full_type,callback:function(e){t.$set(t.formData,"full_type",e)},expression:"formData.full_type"}},[a("a-radio",{attrs:{value:1}},[t._v(" 满N件")]),a("a-radio",{attrs:{value:0}},[t._v(" 满N元")])],1)],1),a("a-form-model-item",{attrs:{label:"满足包邮条件",prop:"nums"}},[a("span",{staticClass:"mr-10"},[t._v("满")]),a("a-input-number",{attrs:{min:1},model:{value:t.formData.nums,callback:function(e){t.$set(t.formData,"nums",e)},expression:"formData.nums"}}),a("span",{staticClass:"ml-10"},[t._v(t._s(1==t.formData.full_type?"件":"元"))])],1),a("a-form-model-item",{attrs:{label:"限购",prop:"join_max_num",help:"0代表不限购，请输入0~999正整数"}},[a("span",{staticClass:"mr-10"},[t._v("每人最多可参与")]),a("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.join_max_num,callback:function(e){t.$set(t.formData,"join_max_num",e)},expression:"formData.join_max_num"}}),a("span",{staticClass:"ml-10"},[t._v("次")])],1),a("a-form-model-item",{attrs:{label:"优惠是否同享",prop:"is_discount_share"}},[a("a-radio-group",{model:{value:t.formData.is_discount_share,callback:function(e){t.$set(t.formData,"is_discount_share",e)},expression:"formData.is_discount_share"}},[a("a-radio",{attrs:{value:1}},[t._v(" 是")]),a("a-radio",{attrs:{value:2}},[t._v(" 否")])],1),1==t.formData.is_discount_share?a("div",[a("a-checkbox-group",{model:{value:t.formData.share_discount,callback:function(e){t.$set(t.formData,"share_discount",e)},expression:"formData.share_discount"}},[a("a-checkbox",{attrs:{value:"1"}},[t._v(" 商家会员卡")]),a("a-checkbox",{attrs:{value:"2"}},[t._v(" 商家优惠券")])],1)],1):t._e()],1)],1),a("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"商品信息",bordered:!1}},[a("a-form-model-item",{attrs:{label:"活动商品",prop:"act_type"}},[a("a-radio-group",{model:{value:t.formData.act_type,callback:function(e){t.$set(t.formData,"act_type",e)},expression:"formData.act_type"}},[a("a-radio",{attrs:{value:1}},[t._v(" 全店商品参与")]),a("a-radio",{attrs:{value:0}},[t._v(" 部分商品参与")])],1)],1),0==t.formData.act_type?a("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addProduct()}}},[t._v(" 添加商品")]),t.selectedRowKeys.length?a("a-button",{staticClass:"ml-20",attrs:{type:"danger"},on:{click:function(e){return t.removeGoods()}}},[t._v(" 删除 "+t._s(t.selectedRowKeys.length)+" 项 ")]):t._e(),a("a-table",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.goodsList,rowKey:"goods_id",scroll:{x:!1}},scopedSlots:t._u([{key:"name",fn:function(e,s){return a("span",{},[a("div",{staticClass:"product-info"},[a("div",[a("img",{attrs:{src:s.image}})]),a("div",[t._v(t._s(e))])])])}},{key:"price",fn:function(e,s){return a("span",{staticClass:"cr-red"},[a("span",[t._v("￥"+t._s(s.min_price)+" ~ ￥"+t._s(s.max_price))])])}},{key:"action",fn:function(e){return a("span",{},[a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return t.removeGoods(e)}}},[t._v("删除")])])}}],null,!1,4275358666)})],1):t._e()],1),2!=t.formData.status?a("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:2}}},[a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData()}}},[t._v(" 保存")])],1)]):t._e()],1),a("select-goods",{ref:"selectGoods",attrs:{storeId:t.store_id,source:"shipping",startTime:t.formData.start_time,endTime:t.formData.end_time,selectedList:t.goodsList},on:{submit:t.selecrGoodsSubmit}})],1)},o=[],i=(a("a9e3"),a("a434"),a("d3b7"),a("159b"),a("4031")),r=a("c1df"),n=a.n(r),d=a("37fd"),l=a("ac0d"),m={name:"ShippingEdit",mixins:[l["d"]],components:{SelectGoods:d["default"]},data:function(){return{store_id:"",id:"",type:"",addGoodsModalVisible:!1,formData:{name:"",time:[],start_time:"",end_time:"",full_type:1,nums:1,join_max_num:0,is_discount_share:1,share_discount:[],act_type:1},rules:{start_time:[{required:!0,message:"请选择活动开始时间",trigger:["blur","change"]}],end_time:[{required:!0,message:"请选择活动结束时间",trigger:["blur","change"]}],name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],time:[{required:!0,message:"请选择活动时间",trigger:"blur"}],full_type:[{required:!0,message:"请选择优惠条件",trigger:"blur"}],nums:[{required:!0,message:"请选择满包邮条件",trigger:"blur"}],join_max_num:[{required:!0,message:"请选择限购数量",trigger:"blur"}],is_discount_share:[{required:!0,message:"请选择优惠是否同享",trigger:"blur"}],act_type:[{required:!0,message:"请选择活动商品",trigger:"blur"}]},columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"},width:"300px"},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"},width:"200px"},{title:"当前库存",dataIndex:"stock_num"},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],goodsList:[],selectedRowKeys:[],start_time:null,end_time:null}},watch:{"$route.query.store_id":function(t){t&&(this.store_id=t,this.resetForm())},"$route.query.id":function(t){var e=this;this.$nextTick((function(){e.activatedFlag&&t?(e.id=t,e.resetForm(),e.getFormData()):e.resetForm()}))},"$route.query.type":function(t){t&&(this.type=t,this.resetForm())}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:"checkbox",onChange:this.onSelectChange,getCheckboxProps:function(t){return{props:{}}}}}},created:function(){this.store_id=this.$route.query.store_id,this.resetForm(),this.$route.query.id&&(this.id=this.$route.query.id,this.getFormData())},methods:{moment:n.a,getFormData:function(){var t=this;this.request(i["a"].getShippingInfo,{id:this.id}).then((function(e){console.log(e),e.time=[n()(e.start_time),n()(e.end_time)],t.start_time=n()(e.start_time),t.end_time=n()(e.end_time),1==e.is_discount_share&&(e.share_discount=[],1==e.discount_card&&e.share_discount.push("1"),1==e.discount_coupon&&e.share_discount.push("2")),Number(e.num)<1&&(e.num=1),t.$set(t,"formData",e),t.goodsList=e.goods_info}))},onDateRangeChange:function(t,e){this.$set(this.formData,"time",[t[0],t[1]]),this.$set(this.formData,"start_time",e[0]),this.$set(this.formData,"end_time",e[1])},disabledStartDate:function(t){return t<n()().add(-1,"d")},disabledEndDate:function(t){var e=this.start_time;return e?e.valueOf()>=t.valueOf():t<n()().add(-1,"d")},onDateStartChange:function(t,e){this.$set(this.formData,"start_time",e),this.$refs.startTime.onFieldChange()},onDateEndChange:function(t,e){var a=n()(this.formData.start_time).valueOf(),s=n()(e).valueOf();console.log("1-----------活动结束时间选择"),console.log(a),console.log(s),s<a?this.$message.error("活动结束时间必须大于活动开始时间！"):(this.$set(this.formData,"end_time",e),this.$refs.endTime.onFieldChange())},addProduct:function(){var t=this.activeTimeCheck(),e=t.activeTime,a=t.message;e||!a?this.$refs.selectGoods.openDialog():this.$message.error(a)},activeTimeCheck:function(){var t=!0,e="";return this.start_time||this.end_time?this.start_time?this.end_time||(e="请先选择活动的结束时间！",t=!1):(e="请先选择活动的开始时间！",t=!1):(e="请先选择活动的开始时间和结束时间！",t=!1),{activeTime:t,message:e}},selecrGoodsSubmit:function(t){console.log(t),this.goodsList=t.goods},onSelectChange:function(t){this.selectedRowKeys=t},removeGoods:function(t){var e=this;if(t){for(var a=0;a<this.goodsList.length;a++)if(this.goodsList[a].goods_id==t)return this.goodsList.splice(a,1),this.selectedRowKeys.forEach((function(a,s){a==t&&e.selectedRowKeys.splice(s,1)})),void console.log(this.selectedRowKeys)}else this.selectedRowKeys.forEach((function(t,a){e.goodsList.forEach((function(a,s){a.goods_id==t&&e.goodsList.splice(s,1)}))})),this.selectedRowKeys=[],console.log(this.selectedRowKeys)},handleFullTypeChange:function(t){this.$set(this.formData,"nums",0)},resetForm:function(){this.formData=this.$options.data().formData,this.start_time=this.$options.data().start_time,this.end_time=this.$options.data().end_time,this.goodsList=[],this.$forceUpdate()},saveData:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!",t.formData),!1;var a=JSON.parse(JSON.stringify(t.formData));1!=a.is_discount_share||0!=a.share_discount.length?0!=a.act_type||0!=t.goodsList.length?(1==a.is_discount_share&&(a.discount_card=0,a.discount_coupon=0,a.share_discount.forEach((function(t){1==t?a.discount_card=1:2==t&&(a.discount_coupon=1)}))),a.store_id=t.store_id,"edit"==t.type&&(a.id=t.id),(t.goodsList.length||a.goods_info)&&(a.goods_info=JSON.stringify(t.goodsList)),delete a.share_discount,delete a.time,console.log(a),t.request(i["a"].updateShipping,a).then((function(e){t.resetForm(),t.id&&t.getFormData(),t.$message.success("提交成功！"),t.$router.push({path:"/merchant/merchant.mall/shippingList",query:{store_id:t.store_id}}),sessionStorage.setItem("shippingEdit",1)}))):t.$message.error("请选择活动商品"):t.$message.error("请选择优惠同享类型")}))}}},c=m,u=(a("d116"),a("2877")),f=Object(u["a"])(c,s,o,!1,null,"7f079564",null);e["default"]=f.exports},cfd0:function(t,e,a){},d116:function(t,e,a){"use strict";a("cfd0")}}]);