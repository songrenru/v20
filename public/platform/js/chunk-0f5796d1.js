(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f5796d1","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"072f":function(t,e,i){"use strict";var r={getRebateList:"/shop/merchant.Rebate/getList",changeRebateStatus:"/shop/merchant.Rebate/changeStatus",rebateShowDetail:"/shop/merchant.Rebate/showDetail",addRebate:"/shop/merchant.Rebate/add",editRebate:"/shop/merchant.Rebate/edit",getGoodsList:"/shop/merchant.Rebate/getGoodsList",deleteRebate:"/shop/merchant.Rebate/delete",getRebateCouponList:"/shop/merchant.Rebate/getCouponList",shopEditSliderList:"/merchant/merchant.ShopSlider/getSlider",shopEditAddSlider:"/merchant/merchant.ShopSlider/addSlider",shopEditEditSlider:"/merchant/merchant.ShopSlider/editSlider",shopEditDelSlider:"/merchant/merchant.ShopSlider/delSlider"};e["a"]=r},"13a0":function(t,e,i){"use strict";i("da4e")},"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("d3b7");function r(t,e,i,r,n,a,s){try{var o=t[a](s),l=o.value}catch(c){return void i(c)}o.done?e(l):Promise.resolve(l).then(r,n)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var s=t.apply(e,i);function o(t){r(s,n,a,o,l,"next",t)}function l(t){r(s,n,a,o,l,"throw",t)}o(void 0)}))}}},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var r=i("6b75");function n(t){if(Array.isArray(t))return Object(r["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||a(t)||Object(s["a"])(t)||o()}},"8a87":function(t,e,i){"use strict";i.r(e);i("b0c0"),i("4e82");var r=function(){var t=this,e=t._self._c;return e("div",[e("a-row",[e("a-col",[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.edit()}}},[t._v(t._s(t.L("新建")))])],1)],1),e("a-table",{staticClass:"mt-20",attrs:{columns:t.columns,rowKey:"id","data-source":t.list,pagination:t.pagination,scroll:{y:418.5}},scopedSlots:t._u([{key:"pic",fn:function(t,i){return e("span",{},[e("beautiful-image",{attrs:{src:i.pic,width:"60px",height:"60px",hover:"",radius:"6px"}})],1)}},{key:"status",fn:function(i){return e("span",{},[e("a-badge",{attrs:{color:1==i?"green":"red",text:1==i?t.L("开启"):t.L("关闭")}})],1)}},{key:"action",fn:function(i,r){return e("span",{},[e("span",{staticClass:"cr-primary pointer mr-10",on:{click:function(e){return t.edit(r)}}},[t._v(t._s(t.L("编辑")))]),e("span",{staticClass:"cr-primary pointer",on:{click:function(e){return t.del(r)}}},[t._v(t._s(t.L("删除")))])])}}])}),e("a-modal",{attrs:{title:t.modalTitle,destroyOnClose:"",width:"60%",centered:!0,getContainer:t.getContainer},on:{ok:t.handleOk,cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-model-item",{attrs:{label:t.L("名称"),prop:"name"}},[e("a-input",{attrs:{placeholder:t.L("请输入")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("a-form-model-item",{attrs:{label:t.L("图片"),help:t.L("建议尺寸80*80")}},[e("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",accept:"image/*","list-type":"picture-card","file-list":t.fileList,name:"reply_pic",data:{upload_dir:"merchant/shop_new"}},on:{preview:t.handlePreviewImg,change:function(e){return t.handleUploadImg(e)}}},[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1)],1),e("a-form-model-item",{attrs:{label:t.L("链接地址"),prop:"url"}},[e("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:t.L("请输入")},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}}),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.changeUrl()}}},[t._v(t._s(t.L("从功能库选择")))])],1),e("a-form-model-item",{attrs:{label:t.L("排序"),help:t.L("值越大越靠前")}},[e("a-input-number",{attrs:{min:0},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),e("a-form-model-item",{attrs:{label:"状态"}},[e("a-switch",{attrs:{"checked-children":t.L("开"),"un-checked-children":t.L("关"),checked:1==t.form.status},on:{change:t.onModelStatusChange}})],1)],1)],1),e("a-modal",{attrs:{visible:t.previewVisible,footer:null,getContainer:t.getContainer},on:{cancel:function(e){t.previewVisible=!1,t.previewImage=""}}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)},n=[],a=i("2909"),s=i("1da1"),o=i("5530"),l=(i("a434"),i("d81d"),i("498a"),i("d3b7"),i("96cf"),i("072f")),c=i("bc11"),d={components:{BeautifulImage:c["a"]},data:function(){var t=this;return{store_id:"",mer_id:"",list:[],columns:[{title:this.L("排序"),dataIndex:"sort"},{title:this.L("名称"),dataIndex:"name"},{title:this.L("图片"),dataIndex:"pic",scopedSlots:{customRender:"pic"}},{title:this.L("操作时间"),dataIndex:"last_time"},{title:this.L("状态"),dataIndex:"status",scopedSlots:{customRender:"status"}},{title:this.L("操作"),scopedSlots:{customRender:"action"}}],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return t.L("共 X1 条记录",{X1:e})}},visible:!1,modalTitle:"",labelCol:{span:4},wrapperCol:{span:14},rules:{name:[{required:!0,message:this.L("请输入名称"),trigger:"blur"}],url:[{required:!0,message:this.L("请选择链接地址"),trigger:"blur"}]},form:{name:"",pic:"",status:1,sort:"",url:""},fileList:[],previewVisible:!1,previewImage:""}},mounted:function(){this.store_id=this.$route.query.store_id||"",this.mer_id=this.$route.query.mer_id||"",this.shopEditSliderList(),this.$message.config({getContainer:this.getContainer}),this.$notification.config({getContainer:this.getContainer})},beforeRouteLeave:function(t,e,i){this.$destroy(),i()},methods:{shopEditSliderList:function(){var t=this,e={page:this.pagination.current,pageSize:this.pagination.pageSize,store_id:this.store_id};this.request(l["a"].shopEditSliderList,e).then((function(e){t.list=e.data||[],!t.list.length&&t.pagination.current>1&&(t.pagination.current=t.pagination.current-1,t.shopEditSliderList()),t.pagination.total=e.total||0}))},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.shopEditSliderList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.shopEditSliderList()},edit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?(this.form=Object(o["a"])({},t),this.modalTitle=this.L("导航编辑"),this.fileList=[{uid:"image",name:"image_1",status:"done",url:t.pic}]):(this.form={name:"",pic:"",status:1,sort:"",url:""},this.fileList=[],this.modalTitle=this.L("导航添加")),this.visible=!0},del:function(t){var e=this;this.$confirm({title:this.L("是否确定删除该条数据?"),centered:!0,getContainer:this.getContainer,onOk:function(){var i={id:t.id,store_id:e.store_id};e.request(l["a"].shopEditDelSlider,i).then((function(t){e.$message.success(e.L("操作成功！")),e.shopEditSliderList()}))},onCancel:function(){}})},getContainer:function(){return window.parent&&window.parent.document.body?window.parent.document.body:document.body},onModelStatusChange:function(t){this.$set(this.form,"status",t?1:0)},handlePreviewImg:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,u(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},handleUploadImg:function(t){var e=Object(a["a"])(t.fileList);if(e.length){e=e.splice(-1);var i=[];e=e.map((function(t){if(t.response&&"done"==t.status&&1e3==t.response.status){var e=t.response.data;i.push(e)}return t})),this.$set(this.form,"pic",i[0]),this.fileList=e}else this.$set(this.form,"pic",""),this.fileList=[]},changeUrl:function(){var t=this;this.$LinkBases({source:"merchant",type:"h5",modalGetContainer:this.getContainer,source_id:this.mer_id,handleOkBtn:function(e){t.$set(t.form,"url",e.url)}})},handleOk:function(){var t=this;if(this.form.name.trim())if(this.form.url.trim()){var e={store_id:this.store_id,name:this.form.name.trim(),pic:this.form.pic,url:this.form.url,status:this.form.status,sort:this.form.sort},i=l["a"].shopEditAddSlider;this.form.id&&(i=l["a"].shopEditEditSlider,e["id"]=this.form.id),this.request(i,e).then((function(e){t.$message.success(t.L("操作成功！")),t.shopEditSliderList(),t.handleCancel()}))}else this.$message.error(this.L("请选择链接地址"));else this.$message.error(this.L("请输入名称"))},handleCancel:function(){this.visible=!1}}};function u(t){return new Promise((function(e,i){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return i(t)}}))}var h=d,m=i("2877"),p=Object(m["a"])(h,r,n,!1,null,"b06d82ae",null);e["default"]=p.exports},bc11:function(t,e,i){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content",style:[{width:t.width,height:t.height,borderRadius:t.radius}]},[t.is_Loading?e("div",{staticClass:"status-1",class:[t.shape?"img-border-radius":""],style:[{width:"100%",height:"100%"}]},[t.is_error?e("a-icon",{attrs:{type:"exclamation-circle"}}):t.is_Loading?e("a-icon",{attrs:{type:"loading"}}):t._e(),t.is_error?e("div",{staticClass:"trip"},[t._v("加载失败")]):t._e()],1):t._e(),t.is_error?t._e():e("img",{staticClass:"imgs",class:[t.shape?"img-border-radius":"",t.mode,t.hover?"is-hover":""],style:[{width:"100%",height:"100%"}],attrs:{src:t.src,alt:"暂无图片",title:t.visible?"点击查看图片":""},on:{click:t.viewImg,error:t.imgOnRrror,load:t.imgOnLoad}}),e("a-modal",{attrs:{title:"查看图片",footer:null,width:t.modalWidth,centered:""},model:{value:t.visibleImg,callback:function(e){t.visibleImg=e},expression:"visibleImg"}},[e("img",{style:[{width:"100%",height:"100%"}],attrs:{src:t.src,alt:"暂无图片"},on:{error:t.imgOnRrror}})])],1)},n=[],a={name:"BeautifulImage",props:{src:{type:String,default:function(){return""}},width:{type:String,default:function(){return"100%"}},height:{type:String,default:function(){return"100%"}},shape:{type:Boolean,default:function(){return!1}},radius:{type:String,default:function(){return"0px"}},mode:{type:String,default:function(){return""}},visible:{type:Boolean,default:function(){return!1}},hover:{type:Boolean,default:function(){return!1}},modalWidth:{type:String,default:function(){return"50%"}}},data:function(){return{visibleImg:!1,defaultImg:"",is_error:!1,is_Loading:!0}},created:function(){},methods:{viewImg:function(){this.visible&&(this.visibleImg=!0)},imgOnLoad:function(t){this.is_error=!1,this.is_Loading=!1},imgOnRrror:function(t){this.is_error=!0}}},s=a,o=(i("13a0"),i("2877")),l=Object(o["a"])(s,r,n,!1,null,"7135f060",null);e["a"]=l.exports},da4e:function(t,e,i){}}]);