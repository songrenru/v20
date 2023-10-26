(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-776d1799"],{"014f":function(t,e,s){},"3ee1":function(t,e,s){"use strict";s("014f")},fe13:function(t,e,s){"use strict";s.r(e);s("b0c0");var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 mb-20 mh-full"},[e("a-form-model",t._b({ref:"form",attrs:{model:t.formData,rules:t.rules}},"a-form-model",{labelCol:{span:4},wrapperCol:{span:10}},!1),[e("a-card",{attrs:{title:"基本信息",bordered:!1}},[e("a-form-model-item",{attrs:{label:"活动名称",prop:"name"}},[e("a-input",{attrs:{placeholder:"请输入活动名称",disabled:2==t.formData.status},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),e("a-form-model-item",{attrs:{label:"活动时间"}},[e("a-form-model-item",{ref:"startTime",style:{display:"inline-block"},attrs:{prop:"start_time",autoLink:!1}},[e("a-date-picker",{attrs:{disabled:2==t.formData.status||1==t.formData.status,format:"YYYY-MM-DD","disabled-date":t.disabledStartDate,placeholder:"请选择活动开始时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateStartChange},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}})],1),e("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[t._v(" - ")]),e("a-form-model-item",{ref:"endTime",style:{display:"inline-block"},attrs:{prop:"end_time",autoLink:!1}},[e("a-date-picker",{attrs:{disabled:2==t.formData.status,format:"YYYY-MM-DD","disabled-date":t.disabledEndDate,placeholder:"请选择活动结束时间",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateEndChange},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1)],1)],1),e("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"优惠信息",bordered:!1}},[e("a-form-model-item",{attrs:{label:"活动类型",prop:"is_discount"}},[e("a-radio-group",{on:{change:t.isDiscountChange},model:{value:t.formData.is_discount,callback:function(e){t.$set(t.formData,"is_discount",e)},expression:"formData.is_discount"}},[e("a-radio",{attrs:{value:0}},[t._v(" 满减")]),e("a-radio",{attrs:{value:1}},[t._v(" 满折")])],1)],1),t._l(t.formData.rule,(function(s,o){return e("div",{key:s.key},[e("a-form-model-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"优惠条件","wrapper-col":{span:18},prop:"rule."+o+".level_money",rules:t.rule_detail_rules}},[e("div",[e("span",{staticClass:"mr-10"},[t._v("满足")]),e("a-input-number",{attrs:{min:0},model:{value:s.level_money,callback:function(e){t.$set(s,"level_money",e)},expression:"rule_item.level_money"}}),e("span",{staticClass:"mr-10"},[t._v("元")]),e("span",{staticClass:"ml-10"},[t._v(t._s(0==t.formData.is_discount?"优惠":"折扣"))]),e("a-input-number",{attrs:{min:0},model:{value:s.level_discount,callback:function(e){t.$set(s,"level_discount",e)},expression:"rule_item.level_discount"}}),e("span",{staticClass:"ml-10"},[t._v(t._s(0==t.formData.is_discount?"元":"折"))]),e("a-button",{directives:[{name:"show",rawName:"v-show",value:0==o,expression:"rule_index == 0"}],attrs:{type:"link"},on:{click:function(e){return t.addRuleDetail()}}},[t._v("添加一级")]),e("a-button",{directives:[{name:"show",rawName:"v-show",value:0!=o,expression:"rule_index != 0"}],attrs:{type:"link"},on:{click:function(e){return t.delRuleDetail(o)}}},[t._v("删除")])],1)])],1)})),e("a-form-model-item",{attrs:{label:"限购",prop:"max_num",help:"0代表不限购，请输入0~999正整数"}},[e("span",{staticClass:"mr-10"},[t._v("每人最多可参与")]),e("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.max_num,callback:function(e){t.$set(t.formData,"max_num",e)},expression:"formData.max_num"}}),e("span",{staticClass:"ml-10"},[t._v("次")])],1),e("a-form-model-item",{attrs:{label:"优惠是否同享",prop:"is_discount_share"}},[e("a-radio-group",{model:{value:t.formData.is_discount_share,callback:function(e){t.$set(t.formData,"is_discount_share",e)},expression:"formData.is_discount_share"}},[e("a-radio",{attrs:{value:1}},[t._v(" 是")]),e("a-radio",{attrs:{value:2}},[t._v(" 否")])],1),1==t.formData.is_discount_share?e("div",[e("a-checkbox-group",{model:{value:t.formData.share_discount,callback:function(e){t.$set(t.formData,"share_discount",e)},expression:"formData.share_discount"}},[e("a-checkbox",{attrs:{value:"1"}},[t._v(" 商家会员卡")]),e("a-checkbox",{attrs:{value:"2"}},[t._v(" 商家优惠券")])],1)],1):t._e()],1),e("a-form-model-item",{attrs:{label:"活动商品",prop:"act_type"}},[e("a-radio-group",{model:{value:t.formData.act_type,callback:function(e){t.$set(t.formData,"act_type",e)},expression:"formData.act_type"}},[e("a-radio",{attrs:{value:1}},[t._v(" 全店商品参与")]),e("a-radio",{attrs:{value:0}},[t._v(" 部分商品参与")])],1)],1),0==t.formData.act_type?e("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:4}}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addProduct()}}},[t._v(" 添加商品")]),t.selectedRowKeys.length?e("a-button",{staticClass:"ml-20",attrs:{type:"danger"},on:{click:function(e){return t.removeGoods()}}},[t._v(" 删除 "+t._s(t.selectedRowKeys.length)+" 项 ")]):t._e(),e("a-table",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.goodsList,rowKey:"goods_id",scroll:{x:!1}},scopedSlots:t._u([{key:"name",fn:function(s,o){return e("span",{},[e("div",{staticClass:"product-info"},[e("div",[e("img",{attrs:{src:o.image}})]),e("div",[t._v(t._s(s))])])])}},{key:"price",fn:function(s,o){return e("span",{staticClass:"cr-red"},[e("span",[t._v("￥"+t._s(o.min_price)+" ~ ￥"+t._s(o.max_price))])])}},{key:"action",fn:function(s){return e("span",{},[e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.removeGoods(s)}}},[t._v("删除")])])}}],null,!1,4275358666)})],1):t._e()],2),2!=t.formData.status?e("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:2}}},[e("div",{staticClass:"mt-20 mb-20"},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData()}}},[t._v(" 保存")])],1)]):t._e()],1),e("select-goods",{ref:"selectGoods",attrs:{storeId:t.store_id,source:"minus_discount",startTime:t.formData.start_time,endTime:t.formData.end_time,selectedList:t.goodsList},on:{submit:t.selecrGoodsSubmit}})],1)},a=[],i=(s("a434"),s("d3b7"),s("159b"),s("4e82"),s("25f0"),s("4031")),r=s("c1df"),n=s.n(r),l=s("37fd"),d=s("ca00"),c=s("ac0d"),u={name:"MinusDiscountEdit",mixins:[c["d"]],components:{SelectGoods:l["default"]},data:function(){return{store_id:"",id:"",addGoodsModalVisible:!1,pagination:{total:0,pageSize:10,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条记录")}},formData:{name:"",start_time:"",end_time:"",is_discount:0,max_num:0,is_discount_share:1,share_discount:["1","2"],act_type:1,rule:[{level_sort:1,level_money:"",level_discount:""}]},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],start_time:[{required:!0,message:"请选择活动开始时间",trigger:["blur","change"]}],end_time:[{required:!0,message:"请选择活动结束时间",trigger:["blur","change"]}],nums:[{required:!0,message:"请选择满包邮条件",trigger:"blur"}],max_num:[{required:!0,message:"请选择限购数量",trigger:"blur"}],is_discount_share:[{required:!0,message:"请选择优惠是否同享",trigger:"blur"}],act_type:[{required:!0,message:"请选择活动商品",trigger:"blur"}]},columns:[{title:"商品信息",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"价格",dataIndex:"price",scopedSlots:{customRender:"price"},width:"200px"},{title:"当前库存",dataIndex:"stock_num"},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],goodsList:[],selectedRowKeys:[],rule_detail_rules:[{required:!0,message:"请输入优惠条件",trigger:"blur"}],start_time:null,end_time:null}},watch:{"$route.query.store_id":function(t){t&&(this.store_id=t,this.resetForm())},"$route.query.id":function(t){var e=this;this.$nextTick((function(){e.activatedFlag&&t?(e.id=t,e.resetForm(),e.getFormData()):(e.id="",e.resetForm())}))}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,type:"checkbox",onChange:this.onSelectChange,getCheckboxProps:function(t){return{props:{}}}}}},created:function(){this.store_id=this.$route.query.store_id,this.resetForm(),this.$route.query.id&&(this.id=this.$route.query.id,this.getFormData())},methods:{moment:n.a,disabledStartDate:function(t){return t<n()().add(-1,"d")},disabledEndDate:function(t){var e=this.start_time;return e?e.valueOf()>=t.valueOf():t<n()().add(-1,"d")},onDateStartChange:function(t,e){this.$set(this.formData,"start_time",e),this.$refs.startTime.onFieldChange()},onDateEndChange:function(t,e){var s=n()(this.formData.start_time).valueOf(),o=n()(e).valueOf();console.log("1-----------活动结束时间选择"),console.log(s),console.log(o),o<s?this.$message.error("活动结束时间必须大于活动开始时间！"):(this.$set(this.formData,"end_time",e),this.$refs.endTime.onFieldChange())},getFormData:function(){var t=this;this.request(i["a"].getMinusDiscountInfo,{id:this.id}).then((function(e){console.log(e),t.start_time=n()(e.start_time),t.end_time=n()(e.end_time),1==e.is_discount_share&&(e.share_discount=[],1==e.discount_card&&e.share_discount.push("1"),1==e.discount_coupon&&e.share_discount.push("2")),t.$set(t,"formData",e),t.goodsList=e.goods_info}))},onDateRangeChange:function(t,e){this.$set(this.formData,"time",[t[0],t[1]]),this.$set(this.formData,"start_time",e[0]),this.$set(this.formData,"end_time",e[1])},addProduct:function(){this.start_time&&this.end_time?this.$refs.selectGoods.openDialog():this.$message.error("请先选择活动时间！")},selecrGoodsSubmit:function(t){console.log(t),this.goodsList=t.goods,this.$set(this.pagination,"total",this.goodsList.length)},isDiscountChange:function(){this.formData.rule=[{level_sort:1,level_money:"",level_discount:""}]},onSelectChange:function(t){this.selectedRowKeys=t},removeGoods:function(t){var e=this;if(t){for(var s=0;s<this.goodsList.length;s++)if(this.goodsList[s].goods_id==t)return this.goodsList.splice(s,1),this.selectedRowKeys.forEach((function(s,o){s==t&&e.selectedRowKeys.splice(o,1)})),void console.log(this.selectedRowKeys)}else this.selectedRowKeys.forEach((function(t,s){e.goodsList.forEach((function(s,o){s.goods_id==t&&e.goodsList.splice(o,1)}))})),this.selectedRowKeys=[],console.log(this.selectedRowKeys)},resetForm:function(){this.formData=this.$options.data().formData,this.start_time=this.$options.data().start_time,this.end_time=this.$options.data().end_time,this.goodsList=[],this.$forceUpdate()},addRuleDetail:function(){if(5!=this.formData.rule.length){var t=this.formData.rule[this.formData.rule.length-1]&&this.formData.rule[this.formData.rule.length-1].level_sort?this.formData.rule[this.formData.rule.length-1].level_sort+1:1,e={level_sort:t,level_money:"",level_discount:""};this.formData.rule.push(e)}else this.$message.error("最多可添加5级")},delRuleDetail:function(t){this.formData.rule.splice(t,1)},saveData:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!",t.formData),!1;var s={};for(var o in t.formData)s[o]=t.formData[o];try{if(!s.rule||!s.rule.length)throw"请输入优惠条件";s.rule.forEach((function(t){if(""==t.level_money)throw"请输入优惠条件";if(0==s.is_discount&&""==t.level_discount)throw"请输入优惠条件";if(1==s.is_discount&&""==t.level_discount)throw"请输入优惠条件";if(0==s.is_discount&&t.level_money<t.level_discount)throw"优惠金额不能大于满足金额";if(1==s.is_discount&&t.level_discount>100)throw"折扣范围0-100之间"}))}catch(c){return void t.$message.error(c)}var a=[];s.rule.forEach((function(t){var e={level_sort:t.level_sort,level_money:t.level_money,level_discount:t.level_discount};a.push(e)}));var r=a.sort(Object(d["a"])("level_money",1));try{r.forEach((function(t,e){if(e+1!=t.level_sort)throw"满足金额层级应为递增"}))}catch(c){return void t.$message.error(c)}if(0==s.is_discount){var n=a.sort(Object(d["a"])("level_discount",1));try{n.forEach((function(t,e){if(e+1!=t.level_sort)throw"优惠金额层级应为递增"}))}catch(c){return void t.$message.error(c)}}else{var l=a.sort(Object(d["a"])("level_discount",2));try{l.forEach((function(t,e){if(e+1!=t.level_sort)throw"优惠折扣层级应为递减"}))}catch(c){return void t.$message.error(c)}}1==s.is_discount_share&&(s.discount_card=0,s.discount_coupon=0,s.share_discount.forEach((function(t){1==t?s.discount_card=1:2==t&&(s.discount_coupon=1)}))),s.store_id=t.store_id,t.id&&(s.id=t.id),s.rule&&(s.rule=JSON.stringify(s.rule)),0!=s.act_type||t.goodsList.length?(s.goods_ids=[],0==s.act_type&&t.goodsList.length&&t.goodsList.forEach((function(t){s.goods_ids.push(t.goods_id)})),s.goods_ids=s.goods_ids.toString(),delete s.share_discount,t.request(i["a"].updateMinusDiscount,s).then((function(e){t.resetForm(),t.$message.success("提交成功！"),t.$router.push({path:"/merchant/merchant.mall/minusDiscountList",query:{store_id:t.store_id}}),sessionStorage.setItem("minusDiscountEdit",1)}))):t.$message.error("请选择活动商品")}))}}},m=u,_=(s("3ee1"),s("2877")),f=Object(_["a"])(m,o,a,!1,null,"c531f07e",null);e["default"]=f.exports}}]);