(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396865a5"],{"3f801":function(r,e,t){},b6d8:function(r,e,t){"use strict";t("3f801")},c421:function(r,e,t){"use strict";t.r(e);var a=function(){var r=this,e=r._self._c;return e("div",{staticClass:"remark_set",staticStyle:{width:"800px"}},[e("a-form-model",{ref:"ruleForm",attrs:{model:r.remarkForm,rules:r.rules,"label-col":r.labelCol,"wrapper-col":r.wrapperCol}},[e("div",{staticClass:"add_coupon"},[e("a-form-model-item",{attrs:{label:"用户评价获得",prop:"per_works_order_integral",extra:"用户评价打星后会增加用户积分,如果工单多次评价只能获得一次积分"}},[e("div",{staticClass:"order_compelete"},[e("a-input-number",{attrs:{id:"inputNumber",min:0,max:99999999},model:{value:r.remarkForm.per_works_order_integral,callback:function(e){r.$set(r.remarkForm,"per_works_order_integral",e)},expression:"remarkForm.per_works_order_integral"}}),r._v("   积分 ")],1)]),e("a-form-model-item",{attrs:{label:"当天评价获取最大",prop:"day_works_order_integral",extra:"当天评价获取的积分数当超过设置最大积分值时，后续评价不会增加积分.用户评价获取积分跟当天评价获取最大积分建议取整数。例：用户评价获取积分为“2”积分，当天评价获取最大为“8”积分。当天评价获取最大积分设置为“0”时，不限制用户评价工单获取积分；"}},[e("div",{staticClass:"order_compelete"},[e("a-input-number",{attrs:{id:"inputNumber",min:0,max:99999999},model:{value:r.remarkForm.day_works_order_integral,callback:function(e){r.$set(r.remarkForm,"day_works_order_integral",e)},expression:"remarkForm.day_works_order_integral"}}),r._v("   积分（必须大于 【用户评价获得】设置的值） ")],1)]),e("div",{staticStyle:{"text-align":"center"}},[e("a-button",{staticStyle:{"margin-top":"50px"},attrs:{type:"primary"},on:{click:function(e){return r.handleSubmit()}}},[r._v("保存设置")])],1)],1)])],1)},o=[],i=t("a0e0"),s={data:function(){return{labelCol:{span:4},wrapperCol:{span:15},remarkForm:{per_works_order_integral:0,day_works_order_integral:0,xtype:"other_set"},rules:{}}},mounted:function(){this.getVillageRepairConfig()},methods:{getVillageRepairConfig:function(){var r=this;this.request(i["a"].getVillageRepairConfig).then((function(e){e&&e.repairConfig&&(r.remarkForm.per_works_order_integral=e.repairConfig.per_works_order_integral,r.remarkForm.day_works_order_integral=e.repairConfig.day_works_order_integral)}))},handleSubmit:function(){var r=this;if(console.log(this.remarkForm),this.remarkForm.day_works_order_integral>0&&this.remarkForm.day_works_order_integral<this.remarkForm.per_works_order_integral)return this.$message.error("【当天评论获取最大】 必须要大于【用户评论获得】的值！"),!1;this.remarkForm.xtype="other_set",this.request(i["a"].saveVillageRepairConfig,this.remarkForm).then((function(e){r.$message.success("操作成功！")}))}}},n=s,l=(t("b6d8"),t("0b56")),m=Object(l["a"])(n,a,o,!1,null,"a8cc480c",null);e["default"]=m.exports}}]);