(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83b86152"],{"65ad":function(e,t,a){"use strict";a("8ed4")},"8ed4":function(e,t,a){},fbd5:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,visible:e.visible,width:700,footer:"审核"==e.title?void 0:null},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.formObj,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"提现单号"}},[a("a-input",{attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.formObj.id,callback:function(t){e.$set(e.formObj,"id",t)},expression:"formObj.id"}})],1),a("a-form-model-item",{attrs:{label:"申请人"}},[a("a-input",{attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.formObj.name,callback:function(t){e.$set(e.formObj,"name",t)},expression:"formObj.name"}})],1),a("a-form-model-item",{attrs:{label:"真实姓名"}},[a("a-input",{attrs:{disabled:!0,placeholder:""},model:{value:e.formObj.true_name,callback:function(t){e.$set(e.formObj,"true_name",t)},expression:"formObj.true_name"}})],1),a("a-form-model-item",{attrs:{label:"手机号"}},[a("a-input",{attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.formObj.phone,callback:function(t){e.$set(e.formObj,"phone",t)},expression:"formObj.phone"}})],1),a("a-form-model-item",{attrs:{label:"申请时间"}},[a("a-input",{attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.formObj.add_time,callback:function(t){e.$set(e.formObj,"add_time",t)},expression:"formObj.add_time"}})],1),a("a-form-model-item",{attrs:{label:"申请金额"}},[a("a-input",{attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.formObj.refund_money,callback:function(t){e.$set(e.formObj,"refund_money",t)},expression:"formObj.refund_money"}})],1),a("a-form-model-item",{attrs:{label:"申请提现理由"}},[a("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.formObj.refund_reason,callback:function(t){e.$set(e.formObj,"refund_reason",t)},expression:"formObj.refund_reason"}})],1),a("a-form-model-item",{attrs:{label:"提现至"}},[a("a-select",{attrs:{disabled:!0,value:e.formObj.refundType},on:{change:e.selectChange}},e._l(e.typeList,(function(t,l){return a("a-select-option",{key:l,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),"查看"==e.title?a("a-form-model-item",{attrs:{label:"审核结果"}},[3==e.formObj.status?a("span",{staticStyle:{color:"green"}},[e._v("审核通过")]):e._e(),4==e.formObj.status?a("span",{staticStyle:{color:"red"}},[e._v("审核拒绝")]):e._e()]):e._e(),"审核"==e.title?a("a-form-model-item",{attrs:{label:"拒绝原因"}},[a("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.formObj.reason,callback:function(t){e.$set(e.formObj,"reason",t)},expression:"formObj.reason"}})],1):e._e(),"审核"==e.title?a("a-form-model-item",{attrs:{label:"状态"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.formObj.status,callback:function(t){e.$set(e.formObj,"status",t)},expression:"formObj.status"}},[a("a-radio",{attrs:{value:3}},[e._v("同意")]),a("a-radio",{attrs:{value:4}},[e._v("拒绝")])],1)],1):e._e()],1)],1)},r=[],o=(a("a9e3"),{data:function(){return{formObj:{id:"",name:"",phone:"",add_time:"",refund_money:"",refund_reason:"",refundType:"",status:3,true_name:""},labelCol:{span:6},wrapperCol:{span:14},typeList:[{label:"微信",value:1},{label:"平台余额",value:2}]}},props:{visible:{type:Boolean,default:!1},id:{type:[String,Number],default:0},title:{type:String,default:""}},watch:{visible:{handler:function(e){e&&this.getDetail(this.id)},immediate:!0}},methods:{getDetail:function(e){var t=this;t.request("/community/village_api.Pile/getWithdrawInfo ",{id:e}).then((function(e){t.formObj=e}))},handleOk:function(){var e=this;e.$refs.ruleForm.validate((function(t){t&&(e.formObj.id=e.id,e.request("/community/village_api.Pile/checkWithdraw",e.formObj).then((function(t){e.$message.success("审核成功！"),e.$emit("close",!0)})))}))},handleCancel:function(){var e=this;e.$refs.ruleForm.resetFields(),e.formObj={id:"",name:"",phone:"",add_time:"",refund_money:"",refund_reason:"",refundType:"",status:3,true_name:""},e.$emit("close",!1)},selectChange:function(e){this.formObj.refundType=e,this.$forceUpdate()}}}),n=o,i=(a("65ad"),a("2877")),s=Object(i["a"])(n,l,r,!1,null,"e524f08c",null);t["default"]=s.exports}}]);