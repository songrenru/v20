(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18a494a0"],{"33a4":function(t,e,a){"use strict";a("94b5")},"8e18":function(t,e,a){"use strict";a.r(e);a("aa48"),a("3446");var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"remark_set"},[e("a-form-model",{ref:"ruleForm",attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("div",{staticClass:"add_coupon"},[e("a-form-model-item",{attrs:{label:"启用 / 禁用"}},[e("a-switch",{attrs:{"default-checked":!1,"checked-children":"启用","un-checked-children":"禁用"},on:{change:t.switchChange},model:{value:t.auto_evaluate.is_open,callback:function(e){t.$set(t.auto_evaluate,"is_open",e)},expression:"auto_evaluate.is_open"}})],1),e("a-form-model-item",{attrs:{label:"结单完成后",extra:"当设置为 0 时,不支持小数,系统不进行自动好评"}},[e("div",{staticClass:"order_compelete"},[e("a-input-number",{attrs:{id:"inputNumber",min:0,max:360,step:1,formatter:function(t){return t.replace(/[^\d]/g,"")}},model:{value:t.auto_evaluate.stime,callback:function(e){t.$set(t.auto_evaluate,"stime",e)},expression:"auto_evaluate.stime"}}),e("a-select",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{placeholder:"请选择类型"},model:{value:t.auto_evaluate.stime_type,callback:function(e){t.$set(t.auto_evaluate,"stime_type",e)},expression:"auto_evaluate.stime_type"}},[e("a-select-option",{attrs:{value:"hour"}},[t._v("小时")]),e("a-select-option",{attrs:{value:"day"}},[t._v("天")])],1),e("span",{staticStyle:{"margin-left":"10px",width:"100px"}},[t._v("后自动好评")]),e("span",{staticStyle:{"margin-left":"10px",width:"115px"}},[t._v("自动好评时打星")]),e("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择评分","default-value":"5"},model:{value:t.auto_evaluate.star,callback:function(e){t.$set(t.auto_evaluate,"star",e)},expression:"auto_evaluate.star"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("一星")]),e("a-select-option",{attrs:{value:"2"}},[t._v("二星")]),e("a-select-option",{attrs:{value:"3"}},[t._v("三星")]),e("a-select-option",{attrs:{value:"4"}},[t._v("四星")]),e("a-select-option",{attrs:{value:"5"}},[t._v("五星")])],1)],1)]),e("div",{staticStyle:{"text-align":"center"}},[e("a-button",{staticStyle:{"margin-top":"50px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v("保存设置")])],1)],1)])],1)},o=[],i=a("a0e0"),s={data:function(){return{labelCol:{span:4},wrapperCol:{span:20},auto_evaluate:{is_open:!1,stime:0,stime_type:"hour",star:"5"}}},mounted:function(){this.getVillageRepairConfig()},methods:{switchChange:function(t){console.log("e===>",t)},getVillageRepairConfig:function(){var t=this;this.request(i["a"].getVillageRepairConfig).then((function(e){e&&e.repairConfig&&(t.auto_evaluate=e.repairConfig.auto_evaluate)}))},handleSubmit:function(){var t=this;console.log("auto_evaluate===>",this.auto_evaluate);var e={};e.auto_evaluate=this.auto_evaluate,e.xtype="auto_evaluate_set",this.request(i["a"].saveVillageRepairConfig,e).then((function(e){t.$message.success("操作成功！")}))}}},u=s,n=(a("33a4"),a("0b56")),r=Object(n["a"])(u,l,o,!1,null,"2593fedb",null);e["default"]=r.exports},"94b5":function(t,e,a){}}]);