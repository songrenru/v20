(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c468912"],{"8e47":function(t,e,i){"use strict";i.r(e);i("54f8");var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[e("a-form-model",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,"label-col":{span:5},"wrapper-col":{span:18}},on:{submit:t.handleSubmit}},[e("a-form-model-item",{attrs:{label:"活动名称",prop:"name"}},[e("a-input",{staticStyle:{width:"450px"},attrs:{placeholder:"请输入活动名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("a-form-model-item",{attrs:{label:"绑定店铺",prop:"store_id"}},[e("a-select",{staticStyle:{width:"450px"},attrs:{placeholder:"请选择店铺"},on:{change:t.categorySelectChange},model:{value:t.form.store_id,callback:function(e){t.$set(t.form,"store_id",e)},expression:"form.store_id"}},t._l(t.storeList,(function(i){return e("a-select-option",{key:i.store_id},[t._v(" "+t._s(i.name)+" ")])})),1)],1),e("a-form-model-item",{attrs:{label:"POI_ID"}},[e("a-input",{staticStyle:{width:"450px"},attrs:{placeholder:"请输入POI_ID"},model:{value:t.form.poi_id,callback:function(e){t.$set(t.form,"poi_id",e)},expression:"form.poi_id"}}),e("div",[t._v("设置后，则探店活动发布视频关联POI_ID")])],1),e("a-form-model-item",{attrs:{label:"抖音用户UID"}},[e("a-input",{staticStyle:{width:"450px"},attrs:{placeholder:"请输入抖音用户UID"},model:{value:t.form.store_douyin_id,callback:function(e){t.$set(t.form,"store_douyin_id",e)},expression:"form.store_douyin_id"}}),e("div",[t._v("用户探店活动页跳转店铺抖音主页")])],1),e("a-form-model-item",{attrs:{label:"关联优惠券",prop:"coupon_ids"}},[e("a-select",{staticStyle:{width:"450px"},attrs:{mode:"multiple",placeholder:"请选择优惠券"},on:{change:t.couponSelectChange},model:{value:t.form.coupon_ids,callback:function(e){t.$set(t.form,"coupon_ids",e)},expression:"form.coupon_ids"}},t._l(t.couponList,(function(i){return e("a-select-option",{key:i.coupon_id},[t._v(" "+t._s(i.name)+" ")])})),1),e("div",[t._v("可以选择多种优惠券，每次发视频只能领取一张")])],1),e("a-form-model-item",{attrs:{label:"用户最多参与次数",prop:"video_num"}},[e("a-input-number",{staticStyle:{width:"450px"},attrs:{id:"inputNumber",placeholder:"请输入用户最多参与次数"},model:{value:t.form.video_num,callback:function(e){t.$set(t.form,"video_num",e)},expression:"form.video_num"}})],1),e("a-form-model-item",{attrs:{label:"活动详情",prop:"content"}},[e("rich-text",{attrs:{info:t.form.content},on:{"update:info":function(e){return t.$set(t.form,"content",e)}}})],1),e("a-form-model-item",{attrs:{label:"关联视频素材",prop:"material_ids"}},[e("a-select",{staticStyle:{width:"450px"},attrs:{mode:"multiple",placeholder:"请选择视频素材"},model:{value:t.form.material_ids,callback:function(e){t.$set(t.form,"material_ids",e)},expression:"form.material_ids"}},t._l(t.materialList,(function(i){return e("a-select-option",{key:i.id},[t._v(" "+t._s(i.material_name)+" ")])})),1),e("div",[t._v("视频可以多选，用户发视频会随机发送一个")])],1),e("a-form-model-item",{attrs:{label:"状态"}},[e("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",checked:1==t.form.status},on:{change:t.switchChange}})],1),e("a-form-model-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[e("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 提交 ")])],1)],1)],1)},s=[],r=(i("075f"),i("19f1"),i("e49a")),a=i("6ec16"),n={data:function(){return{title:"添加活动",storeList:[],couponList:[],materialList:[],form:{id:"",name:"",content:"",video_num:"",store_id:"",coupon_ids:[],material_ids:[],poi_id:"",store_douyin_id:"",status:1},rules:{name:[{required:!0,message:"请输入活动名称！"}],store_id:[{required:!0,message:"请选择店铺！"}],store_douyin_id:[{required:!0,message:"请输入店铺抖音号！"}],coupon_ids:[{required:!0,message:"请选择优惠券"}],video_num:[{required:!0,message:"请输入用户最多参与次数！"}],content:[{required:!0,message:"请输入活动详情！"}],material_ids:[{required:!0,message:"请选择视频素材！"}]},detail:"",tools_id:0}},components:{RichText:a["a"]},mounted:function(){this.resetForm(),this.$route.query.tools_id?(this.title="编辑活动",this.tools_id=this.$route.query.tools_id,this.getLifeToolsDetail()):this.title="添加活动"},watch:{$route:function(t,e){console.log(t,e,"-------123132213123------------",t.query.tools_id);var i=t.path,o=e.path;if("/douyin/merchant.Actiyity/ActivityAdd"==i){console.log(132313);var s=t.query;s.tools_id?(this.tools_id=s.tools_id,this.getLifeToolsDetail(),this.resetForm(),"/douyin/merchant.Activity/ActivityList"!=o&&e||(this.tools_id=s.tools_id,this.getLifeToolsDetail(),this.resetForm())):this.resetForm()}}},beforeRouteLeave:function(t,e,i){this.$destroy(!0),i()},methods:{resetForm:function(){this.getStoreList(),this.getCouponList(),this.getMaterialList(),this.$refs.ruleForm.resetFields()},getLifeToolsDetail:function(){var t=this;this.request(r["a"].getActivityDetail,{id:this.tools_id}).then((function(e){t.getStoreList(),t.getCouponList(),t.getMaterialList(),e.coupon_ids.map((function(t,i){e.coupon_ids[i]=Number(t)})),e.material_ids.map((function(t,i){e.material_ids[i]=Number(t)})),console.log(e,"-----------详情------------"),t.detail=e,t.form=e}))},getStoreList:function(){var t=this;this.request(r["a"].getStoreList,{}).then((function(e){console.log(e,"-------获取店铺列表---------------"),t.storeList=e}))},getCouponList:function(){var t=this;this.request(r["a"].getCouponList,{}).then((function(e){console.log(e,"-------获取优惠券列表---------------"),t.couponList=e}))},getMaterialList:function(){var t=this;this.request(r["a"].getSourceMaterialLists,{}).then((function(e){console.log(e,"-------获取视频素材列表---------------"),t.materialList=e.data}))},categorySelectChange:function(t){console.log("selected ".concat(t))},couponSelectChange:function(t){console.log("selected ".concat(t))},switchChange:function(t){t=t?1:0,this.form.status=t},handleSubmit:function(t){var e=this;t.preventDefault(),this.$refs.ruleForm.validate((function(t){console.log(e.form),t&&(e.detail&&(e.form.id=e.tools_id,e.form.status=e.detail.status),e.request(r["a"].addOrEditActivity,e.form).then((function(t){e.resetForm(),e.$message.success(e.L("操作成功！")),e.$router.push({path:"/douyin/merchant.Activity/ActivityList"}),e.$destroy(!0)})))}))}}},l=n,c=(i("bcda"),i("0b56")),u=Object(c["a"])(l,o,s,!1,null,null,null);e["default"]=u.exports},bcda:function(t,e,i){"use strict";i("ed07")},e49a:function(t,e,i){"use strict";var o={getActivityList:"/douyin/merchant.DouyinActivity/getActivityList",setActivityStatus:"/douyin/merchant.DouyinActivity/setActivityStatus",delActivity:"/douyin/merchant.DouyinActivity/delActivity",getStoreList:"/douyin/merchant.DouyinActivity/getStoreList",getCouponList:"/douyin/merchant.DouyinActivity/getCouponList",addOrEditActivity:"/douyin/merchant.DouyinActivity/addOrEditActivity",getActivityDetail:"/douyin/merchant.DouyinActivity/getActivityDetail",getSourceMaterialLists:"/douyin/merchant.DouyinActivity/getSourceMaterialLists",saveSourceMaterial:"/douyin/merchant.DouyinActivity/saveSourceMaterial",delSourceMaterial:"/douyin/merchant.DouyinActivity/delSourceMaterial"};e["a"]=o},ed07:function(t,e,i){}}]);