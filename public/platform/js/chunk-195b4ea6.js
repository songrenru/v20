(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-195b4ea6","chunk-748b470d"],{"4bb5d":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var o=a("ea87");function i(t){if(Array.isArray(t))return Object(o["a"])(t)}a("6073"),a("2c5c"),a("c5cb"),a("36fa"),a("02bf"),a("a617"),a("17c8");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("9877");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||r(t)||Object(s["a"])(t)||n()}},"7a35":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-20 pl-20 pr-20 pb-20 br-10"},[e("a-spin",{attrs:{spinning:t.confirmLoading}},[e("a-tabs",{attrs:{"default-active-key":"loans"}},[e("a-tab-pane",{key:"loans",attrs:{tab:t.tabName}})],1),e("a-form-model",{ref:"ruleForm",attrs:{model:t.formData,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-card",{attrs:{bordered:!1,title:"约战基本信息"}},[e("a-form-model-item",{attrs:{label:"名称:",colon:!1,prop:"title",rules:[{required:!0,message:"名称不能为空",trigger:["blur"]}]}},[e("a-input",{staticStyle:{width:"300px"},attrs:{maxLength:100,placeholder:"请输入名称"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),e("a-form-model-item",{attrs:{label:"约战人数:",colon:!1,help:"请填写数字",rules:[{required:!0,message:"名称不能为空",trigger:["blur"]}]}},[t._l(t.label.tags,(function(a){return[e("a-tooltip",{key:a,attrs:{title:a+"人"}},[e("a-tag",{key:a,attrs:{closable:!0},on:{close:function(){return t.handleClose(a)}}},[t._v(" "+t._s(a+"人")+" ")])],1)]})),t.label.inputVisible?e("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.label.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}}}):e("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showAddTagInput}},[e("a-icon",{attrs:{type:"plus"}}),t._v("添加 ")],1)],2),e("a-form-model-item",{attrs:{label:"选择约战方式:",colon:!1,rules:[{required:!0,message:"名称不能为空",trigger:["blur"]}]}},[e("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择"},on:{change:t.handleChange},model:{value:t.formData.group_type,callback:function(e){t.$set(t.formData,"group_type",e)},expression:"formData.group_type"}},[e("a-select-option",{key:1,attrs:{value:"1"}},[t._v(" 团长请客 ")]),e("a-select-option",{key:2,attrs:{value:"2"}},[t._v(" AA ")])],1)],1),e("a-form-model-item",{attrs:{label:"约战说明:",colon:!1}},[e("a-textarea",{attrs:{placeholder:"请输入约战说明","auto-size":{minRows:3,maxRows:5}},model:{value:t.formData.desc,callback:function(e){t.$set(t.formData,"desc",e)},expression:"formData.desc"}})],1),e("a-form-model-item",{attrs:{label:"团长退款设置",prop:"join_max_num"}},[e("a-radio-group",{model:{value:t.formData.leader_back_type,callback:function(e){t.$set(t.formData,"leader_back_type",e)},expression:"formData.leader_back_type"}},[e("a-radio",{attrs:{value:0}},[t._v(" 不可以退款 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 随时退款 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 提前 "),e("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.leader_back_time,callback:function(e){t.$set(t.formData,"leader_back_time",e)},expression:"formData.leader_back_time"}}),t._v(" 小时退款 ")],1)],1)],1),e("a-form-model-item",{attrs:{label:"团员退款设置",prop:"join_max_num"}},[e("a-radio-group",{model:{value:t.formData.other_back_type,callback:function(e){t.$set(t.formData,"other_back_type",e)},expression:"formData.other_back_type"}},[e("a-radio",{attrs:{value:0}},[t._v(" 不可以退款 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 随时退款 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 提前 "),e("a-input-number",{attrs:{min:0,max:999},model:{value:t.formData.other_back_time,callback:function(e){t.$set(t.formData,"other_back_time",e)},expression:"formData.other_back_time"}}),t._v(" 小时退款 ")],1)],1)],1),e("a-form-model-item",{attrs:{label:"约战门票是否只能约战使用",prop:"join_max_num"}},[e("a-radio-group",{model:{value:t.formData.is_only_sports_activity,callback:function(e){t.$set(t.formData,"is_only_sports_activity",e)},expression:"formData.is_only_sports_activity"}},[e("a-radio",{attrs:{value:1}},[t._v(" 是 ")]),e("a-radio",{attrs:{value:0}},[t._v(" 否 ")])],1)],1)],1),e("a-card",{staticStyle:{"margin-top":"10px"},attrs:{title:"门票信息",bordered:!1}},[e("a-form-model-item",{attrs:{prop:"goods_info","wrapper-col":{span:24}}},[e("a-row",[e("a-col",{attrs:{span:3}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addProduct()}}},[t._v(" 添加参与约战的体育馆门票 ")])],1)],1)],1),e("a-form-model-item",{attrs:{"wrapper-col":{span:24}}},[e("a-table",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length,expression:"goodsList.length"}],staticClass:"mt-20",attrs:{columns:t.columns,"data-source":t.goodsList,rowKey:"goods_id",childrenColumnName:"sku_info",defaultExpandAllRows:!0,scroll:{x:!1}},scopedSlots:t._u([{key:"action",fn:function(a,o){return e("span",{},[o.sku_info?e("span",[e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.removeGoods(o)}}},[t._v("删除")])]):e("span",[t._v(" ---- ")])])}}])})],1)],1)],1),e("div",{staticClass:"page-header"},[e("a-button",{staticClass:"ml-20 mt-20 mb-20",attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v(" 保存 ")])],1),e("select-goods",{ref:"selectGoods",attrs:{source:"sport",targeTage:t.label.tags,group_type:t.formData.group_type,selectedList:t.goodsList},on:{submit:t.selecrGoodsSubmit}})],1)],1)},i=[],r=a("4bb5d"),s=(a("075f"),a("4afa"),a("cd5d"),a("c5cb"),a("6e84"),a("4d95")),n=a("1b98"),l=a("5065"),c=a("249b"),d={name:"SportsActivityEdit",components:{ACol:c["b"],ARow:l["a"],SelectGoods:n["default"]},data:function(){return{title:this.L("新建门票"),labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:10}},visible:!1,confirmLoading:!1,goodsList:[],tabName:"新建约战",columns:[{title:"体育馆名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"门票价格",dataIndex:"price",scopedSlots:{customRender:"price"}},{title:"门票",dataIndex:"tickect_name",scopedSlots:{customRender:"tickect_name"}},{title:"约战人数",dataIndex:"pin_num",scopedSlots:{customRender:"pin_num"}},{title:"团长请客价",dataIndex:"group_price",scopedSlots:{customRender:"group_price"}},{title:"团长拼团价",dataIndex:"aa_group_price",scopedSlots:{customRender:"aa_group_price"}},{title:"团员拼团价",dataIndex:"aa_price",scopedSlots:{customRender:"aa_price"}},{title:"操作",dataIndex:"goods_id",width:"100px",scopedSlots:{customRender:"action"}}],selectedRowKeys:[],form:this.$form.createForm(this),label:{tags:[],inputVisible:!1,inputValue:""},formData:{activity_id:0,title:"",desc:"",group_type:void 0,num:[],goods:[],leader_back_type:0,leader_back_time:0,other_back_type:0,other_back_time:0,is_only_sports_activity:0}}},watch:{"$route.query.activity_id":function(t){t>0?(this.formData.activity_id=t,this.tabName="编辑约战",this.getEditInfo()):(this.tabName="新增约战",this.getDetail())}},mounted:function(){this.formData.activity_id=this.$route.query.activity_id,this.form=this.$form.createForm(this),this.formData.activity_id>0?this.getEditInfo():this.getDetail()},activated:function(){this.formData.activity_id=this.$route.query.activity_id,this.form=this.$form.createForm(this),this.formData.activity_id>0?this.getEditInfo():this.getDetail()},methods:{handleChange:function(t){this.formData.group_type=t},addProduct:function(){return 0==this.label.tags.length?(this.$message.error("请添加约战人数"),!1):void 0==this.formData.group_type||""==this.formData.group_type?(this.$message.error("选择约战方式"),!1):void this.$refs.selectGoods.openDialog()},dellProduct:function(){this.goodsList=[]},selecrGoodsSubmit:function(t){this.goodsList=[],console.log(t,"e-----selecrGoodsSubmit-----选择商品回调"),t.goods=t.goods.map((function(t){return t.type="sport",t.act_price=t.price,t.act_stock_num=t.stock_num,t.title&&(t.tickect_name=t.title),t})),this.goodsList=t.goods},removeGoods:function(t){if(t.ticket_id)for(var e=0;e<this.goodsList.length;e++)this.goodsList[e].ticket_id===t.ticket_id&&this.goodsList.splice(e,1)},handleClose:function(t){var e=this.label.tags.filter((function(e){return e!==t}));this.label.tags=e},handleInputChange:function(t){this.label.inputValue=t.target.value},handleInputConfirm:function(){var t=this.label.inputValue,e=this.label.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(r["a"])(e),[t])),this.label.tags=e,this.label.inputVisible=!1,this.label.inputValue=""},showAddTagInput:function(){this.label.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleSubmit:function(){var t=this;return""==this.formData.title?(this.$message.error("请输入约战名称"),!1):0==this.goodsList.length?(this.$message.error("请添加体育馆门票"),!1):0==this.label.tags.length?(this.$message.error("请添加约战人数"),!1):void 0==this.formData.group_type||""==this.formData.group_type?(this.$message.error("选择约战方式"),!1):(this.formData.goods=this.goodsList,this.formData.num=this.label.tags,void this.request(s["a"].addSportsActivity,this.formData).then((function(e){t.$message.success("保存成功！"),t.formData.activity_id=0,setTimeout((function(){t.$message.destroy(),t.confirmLoading=!1,t.$router.push({path:"/merchant/merchant.life_tools/sportsActivityList"})}),1500)})).catch((function(e){t.confirmLoading=!1})))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.ticket_id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(s["a"].editSportsActivity,{activity_id:this.formData.activity_id}).then((function(e){t.formData={activity_id:e.data.activity_id,title:e.data.title,desc:e.data.desc,group_type:e.data.group_type,num:e.num,goods:e.goods,leader_back_type:e.data.leader_back_type,leader_back_time:e.data.leader_back_time,other_back_type:e.data.other_back_type,other_back_time:e.data.other_back_time,is_only_sports_activity:e.data.is_only_sports_activity},t.label.tags=e.num,t.goodsList=e.goods}))},getDetail:function(){this.formData={activity_id:0,title:"",desc:"",group_type:[],num:[],goods:[],leader_back_type:0,leader_back_time:0,other_back_type:0,other_back_time:0,is_only_sports_activity:0},this.label.tags=[],this.goodsList=[]}}},u=d,m=a("0b56"),p=Object(m["a"])(u,o,i,!1,null,null,null);e["default"]=p.exports}}]);