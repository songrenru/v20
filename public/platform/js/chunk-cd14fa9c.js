(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd14fa9c","chunk-b763c74e","chunk-2d0b6a79","chunk-2d0b6a79"],{1101:function(t,e,a){"use strict";a("b983")},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function s(t,e,a,s,n,r,o){try{var i=t[r](o),c=i.value}catch(l){return void a(l)}i.done?e(c):Promise.resolve(c).then(s,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var o=t.apply(e,a);function i(t){s(o,n,r,i,c,"next",t)}function c(t){s(o,n,r,i,c,"throw",t)}i(void 0)}))}}},"84bc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:720,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[a("div",{staticClass:"content"},[a("div",{staticClass:"code-box"},[a("div",{staticClass:"code"},[t.wxQrcode?a("img",{attrs:{src:t.wxQrcode}}):t._e(),t.wxErrorMsg?a("div",{staticClass:"error-msg"},[t._v(t._s(t.wxErrorMsg))]):t._e(),a("div",[t._v(t._s(t.L("公众号二维码")))])]),a("div",{staticClass:"code"},[t.h5Qrcode?a("img",{attrs:{src:t.h5Qrcode}}):t._e(),a("div",[t._v(t._s(t.L("网页二维码")))])]),a("div",{staticClass:"code"},[t.wxappQrcode?a("img",{attrs:{src:t.wxappQrcode}}):t._e(),a("div",[t._v(t._s(t.L("小程序二维码")))])])])])])},n=[],r=a("ea1d"),o={components:{},data:function(){return{title:this.L("店铺综合二维码"),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,type:"merchantstore",image:"",visible:!1,wxErrorMsg:"",wxQrcode:"",wxappErrorMsg:"",wxappQrcode:"",h5ErrorMsg:"",h5Qrcode:""}},mounted:function(){console.log(this.catFid)},methods:{showModal:function(t){this.visible=!0,this.id=t,this.getWxCode(),this.getH5Code(),this.getWxappCode()},getWxCode:function(){var t=this;this.request(r["a"].seeWxQrcode,{type:this.type,id:this.id}).then((function(e){0!=e.error_code?(t.wxErrorMsg=e.msg,t.wxQrcode=""):(t.wxQrcode=e.qrcode,t.wxErrorMsg="")}))},getH5Code:function(){var t=encodeURIComponent(location.origin+"/packapp/platn/pages/store/v1/home/index?store_id="+this.id);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+t},getWxappCode:function(){var t=encodeURIComponent("platn/pages/store/v1/home/index?page_from=store_qr_code&store_id="+this.id);this.wxappQrcode="/index.php?g=Index&c=Recognition_wxapp&a=create_page_qrcode&page="+t},handleCancel:function(){this.visible=!1}}},i=o,c=(a("a408"),a("2877")),l=Object(c["a"])(i,s,n,!1,null,"2688b9f4",null);e["default"]=l.exports},"8e4c":function(t,e,a){"use strict";var s={getLists:"/merchant/merchant.MerchantShopManagement/storeList",getStoreMsg:"/merchant/merchant.MerchantShopManagement/storeMsg",getStaffList:"/merchant/merchant.MerchantShopManagement/staffManagement",staffEdit:"/merchant/merchant.MerchantShopManagement/staffEdit",staffSet:"/merchant/merchant.MerchantShopManagement/staffSet",staffDel:"/merchant/merchant.MerchantShopManagement/staffDelete",storeDiscount:"/merchant/merchant.MerchantShopManagement/discount",discountMsg:"/merchant/merchant.MerchantShopManagement/discountMsg",discountDel:"/merchant/merchant.MerchantShopManagement/discountDelete",discountAdd:"/merchant/merchant.MerchantShopManagement/discountAdd",storeSliderList:"/merchant/merchant.MerchantShopManagement/storeSlider",storeSliderEdit:"/merchant/merchant.MerchantShopManagement/storeSliderAdd",storeSliderDel:"/merchant/merchant.MerchantShopManagement/sliderDel",storeSliderMsg:"/merchant/merchant.MerchantShopManagement/storeSliderMsg",storeAuthEdit:"/merchant/merchant.MerchantShopManagement/authEdit",storeAuthMsg:"/merchant/merchant.MerchantShopManagement/authMsg",storeEdit:"/merchant/merchant.MerchantShopManagement/storeEdit",storeEditSave:"/merchant/merchant.MerchantShopManagement/saveStoreEdit",storeAddSave:"/merchant/merchant.MerchantShopManagement/addStoreEdit",getUrlencode:"/merchant/merchant.MerchantShopManagement/getUrlencode",storeDel:"/merchant/merchant.MerchantShopManagement/storeDel",getStreet:"/merchant/merchant.MerchantShopManagement/getStreet",jobList:"/merchant/merchant.JobPerson/jobList",delJob:"/merchant/merchant.JobPerson/delJob",selJob:"/merchant/merchant.JobPerson/selJob",resJob:"/merchant/merchant.JobPerson/resJob",addJob:"/merchant/merchant.JobPerson/addJob",authentica:"/merchant/merchant.JobPerson/authentica",editJob:"/merchant/merchant.JobPerson/editJob",updateJob:"/merchant/merchant.JobPerson/updateJob",getPersonList:"/merchant/merchant.StoreMarketingPerson/getPersonList",regPhone:"/merchant/merchant.StoreMarketingPerson/regPhone",editPerson:"/merchant/merchant.StoreMarketingPerson/editPerson",addPerson:"/merchant/merchant.StoreMarketingPerson/addPerson",savePerson:"/merchant/merchant.StoreMarketingPerson/savePerson",delPerson:"/merchant/merchant.StoreMarketingPerson/delPerson",storeMarketingRecord:"/store_marketing/merchant.StoreMarketingPerson/storeMarketingRecord",getCircleList:"/merchant/merchant.MerchantShopManagement/getCircleList"};e["a"]=s},"9ed1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[a("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:t.columns,"row-key":function(t){return t.store_id},"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(e,s){return a("span",{},[a("a",{on:{click:function(e){return t.showModal(s.store_id)}}},[t._v(t._s(s.name))])])}},{key:"status",fn:function(e,s){return a("span",{},[1==s.status?a("a",{staticClass:"label-sm-1 green"},[t._v("正常")]):0==s.status?a("a",{staticClass:"label-sm-1 red"},[t._v("关闭")]):2==s.status?a("a",{staticClass:"label-sm-1 red"},[t._v("审核中")]):4==s.status?a("a",{staticClass:"label-sm-1 red"},[t._v("禁用")]):a("a",{staticClass:"label-sm-1 red"},[t._v("店铺待认领")])])}},{key:"auth",fn:function(e,s){return a("span",{},[0==s.auth?a("span",[a("a",{staticClass:"label-sm-1 red"},[t._v(" 未提交")]),a("a",{staticClass:"btn label-sm-1 blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.goNextPage(s.store_id)}}},[t._v("提交")])]):1==s.auth?a("span",[a("a",{staticClass:"label-sm-1 red"},[t._v(" 审核中")]),a("a",{staticClass:"btn label-sm-1 blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.goNextPage(s.store_id)}}},[t._v("修改")])]):2==s.auth?a("span",[a("a",{staticClass:"label-sm-1 red"},[t._v(" 已拒绝")]),a("a",{staticClass:"btn label-sm-1 blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.goNextPage(s.store_id)}}},[t._v("修改")])]):3==s.auth?a("span",[a("a",{staticClass:"label-sm-1 red"},[t._v(" 已通过")]),a("a",{staticClass:"btn label-sm-1 blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.goNextPage(s.store_id)}}},[t._v("修改")])]):4==s.auth?a("span",[a("a",{staticClass:"label-sm-1-1 red"},[t._v(" 再次提交审核")]),a("a",{staticClass:"btn label-sm-1-1 blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.goNextPage(s.store_id)}}},[t._v("修改")])]):a("span",[a("a",{staticClass:"label-sm-1 red"},[t._v(" 已驳回")]),a("a",{staticClass:"btn label-sm-1 blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.goNextPage(s.store_id)}}},[t._v("修改")])])])}},{key:"show_qrcode",fn:function(e,s){return s.store_id>0?a("span",{},[a("a",{on:{click:function(e){return t.$refs.seeStoreQrcodeModal.showModal(s.store_id)}}},[t._v("查看二维码")])]):t._e()}},{key:"design_web",fn:function(e,s){return a("router-link",{attrs:{to:{path:"/common/merchant.custom/index",query:{source_id:s.store_id,source:"store"}}}},[a("label",{staticStyle:{cursor:"pointer"}},[t._v(t._s(t.L("点击设置")))])])}},{key:"goods_list",fn:function(e,s){return a("span",{},[a("a",{staticClass:"label-sm-1 label-sm-1-blue",on:{click:function(e){return t.goMyGoods(s.store_id)}}},[t._v("商品管理")])])}},{key:"staff_list",fn:function(e,s){return a("router-link",{attrs:{to:{path:"/merchant/store.merchant/StaffList",query:{store_id:s.store_id}}}},[a("a",{staticClass:"label-sm-1 blue"},[t._v("店员管理")])])}},{key:"slider_list",fn:function(e,s){return a("router-link",{attrs:{to:{path:"/merchant/store.merchant/StoreSlider",query:{store_id:s.store_id,mer_id:s.mer_id}}}},[a("a",{staticClass:"label-sm-1 label-sm-1-blue"},[t._v("导航管理")])])}},{key:"store_discount",fn:function(e,s){return a("router-link",{attrs:{to:{path:"/merchant/store.merchant/StoreDiscount",query:{store_id:s.store_id}}}},[a("a",{staticClass:"label-sm-1 label-sm-1-blue"},[t._v("店铺优惠")])])}},{key:"action",fn:function(e,s){return a("span",{},[a("a",{staticClass:"label-sm-1 blue",on:{click:function(e){return t.storeEdit(s.store_id)}}},[t._v(" 修改")]),a("a",{staticClass:"btn label-sm-1 blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.storeDel(s.store_id)}}},[t._v("删除")])])}},{key:"title",fn:function(e){return[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:8}}),a("a-col",{attrs:{span:13}}),a("a-col",{staticClass:"text-left",attrs:{span:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addMerchantStore()}}},[t._v(" 添加店铺 ")])],1)],1)]}}],null,!0)}),a("see-store-qrcode",{ref:"seeStoreQrcodeModal"}),a("a-modal",{attrs:{title:"店铺信息",footer:null},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:3}}),a("a-col",{staticClass:"text-right",attrs:{span:4}},[a("p",{staticClass:"height-30"},[t._v("店铺名称:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[a("p",{staticClass:"height-30"},[t._v(" "+t._s(t.store_name)+" ")])])],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:3}}),a("a-col",{staticClass:"text-right",attrs:{span:4}},[a("p",{staticClass:"height-30"},[t._v("联系电话:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[a("p",{staticClass:"height-30"},[t._v(" "+t._s(t.phone)+" ")])])],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:3}}),a("a-col",{staticClass:"text-right",attrs:{span:4}},[a("p",{staticClass:"height-30"},[t._v("店铺地址:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[a("p",{staticClass:"height-30"},[t._v(" "+t._s(t.address)+" ")])])],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:3}}),a("a-col",{staticClass:"text-right",attrs:{span:4}},[a("p",{staticClass:"height-30"},[t._v("餐饮:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[1==t.foodshop_on_sale?a("p",{staticClass:"height-30"},[t._v("已启用")]):t._e(),2==t.foodshop_on_sale?a("p",{staticClass:"height-30"},[t._v("未启用")]):t._e()])],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:3}}),a("a-col",{staticClass:"text-right",attrs:{span:4}},[a("p",{staticClass:"height-30"},[t._v("团购:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[1==t.group_on_sale?a("p",{staticClass:"height-30"},[t._v("已启用")]):t._e(),2==t.group_on_sale?a("p",{staticClass:"height-30"},[t._v("未启用")]):t._e()])],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:3}}),a("a-col",{staticClass:"text-right",attrs:{span:4}},[a("p",{staticClass:"height-30"},[t._v("外卖:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[1==t.shop_on_sale?a("p",{staticClass:"height-30"},[t._v("已启用")]):t._e(),2==t.shop_on_sale?a("p",{staticClass:"height-30"},[t._v("未启用")]):t._e()])],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{attrs:{span:3}}),a("a-col",{staticClass:"text-right",attrs:{span:4}},[a("p",{staticClass:"height-30"},[t._v("商城:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[1==t.mall_on_sale?a("p",{staticClass:"height-30"},[t._v("已启用")]):t._e(),2==t.mall_on_sale?a("p",{staticClass:"height-30"},[t._v("未启用")]):t._e()])],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{staticClass:"text-right",attrs:{span:7}},[a("p",{staticClass:"height-30"},[t._v("线下支付方式:")])]),a("a-col",{attrs:{span:1}}),a("a-col",{attrs:{span:16}},[a("p",{staticClass:"height-30"},[t._v(" "+t._s(t.off_pay_name)+" ")])])],1)],1),a("a-modal",{staticStyle:{width:"800px"},attrs:{title:"店铺资质资料管理",footer:null},model:{value:t.visible_staff,callback:function(e){t.visible_staff=e},expression:"visible_staff"}},[a("a-form",t._b({on:{submit:t.handleSubmit}},"a-form",{labelCol:{span:7},wrapperCol:{span:14}},!1),[a("a-form-item",{attrs:{label:"资质资料图片"}},[a("a-input",{attrs:{hidden:""},model:{value:t.pic,callback:function(e){t.pic=e},expression:"pic"}}),[a("div",{staticClass:"clearfix"},[a("a-upload",{attrs:{action:t.action,name:t.uploadName,data:{upload_dir:t.upload_dir,store_id:this.store_id},"list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:t.handleChange1}},[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1),a("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]],2),a("a-form-item",{attrs:{"wrapper-col":{span:20,offset:6}}},[a("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[a("a-col",{staticClass:"text-left",attrs:{span:4}},[a("a-button",{attrs:{type:"default"},on:{click:function(e){return t.hidelModel()}}},[t._v(" 取消 ")])],1),a("a-col",{staticClass:"text-center",attrs:{span:6}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 提交 ")])],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)],1)},n=[],r=a("1da1"),o=(a("96cf"),a("d3b7"),a("b0c0"),a("a15b"),a("8e4c")),i=a("84bc");function c(t){return new Promise((function(e,a){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return e(s.result)},s.onerror=function(t){return a(t)}}))}var l=[{title:"排序",dataIndex:"store_id"},{title:"店铺名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"店铺资质审核状态",dataIndex:"auth",scopedSlots:{customRender:"auth"}},{title:"综合二维码",dataIndex:"show_qrcode",scopedSlots:{customRender:"show_qrcode"}},{title:"微页面",dataIndex:" design_web",scopedSlots:{customRender:"design_web"}},{title:"商品管理",dataIndex:"goods_list",scopedSlots:{customRender:"goods_list"}},{title:"店员管理",dataIndex:"staff_list",scopedSlots:{customRender:"staff_list"}},{title:"导航管理",dataIndex:"slider_list",scopedSlots:{customRender:"slider_list"}},{title:"店铺优惠",dataIndex:"store_discount",scopedSlots:{customRender:"store_discount"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],h={components:{SeeStoreQrcode:i["default"]},props:{upload_dir:{type:String,default:""}},data:function(){return{pic:"",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",previewVisible:!1,previewImage:"",fileList:[],data:[],pagination:{},store_id:"",loading:!1,visible:!1,visible_staff:!1,queryParam:{page:1,status:"",name:""},columns:l,store_name:"",phone:"",address:"",foodshop_on_sale:2,group_on_sale:2,shop_on_sale:2,mall_on_sale:2,off_pay_name:"",autn_image:""}},mounted:function(){this.getLists()},activated:function(){this.getLists()},methods:{getLists:function(){var t=this;this.queryParam["page"]=1,this.request(o["a"].getLists,this.queryParam).then((function(e){t.data=e.list,t.pagination.total=e.count,t.queryParam["page"]+=1}))},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},showQrcode:function(t){alert(t)},showModal:function(t){var e=this;this.visible=!0;var a={store_id:t};this.request(o["a"].getStoreMsg,a).then((function(t){void 0!=t.list.store_id&&(e.store_name=t.list.name,e.phone=t.list.phone,e.address=t.list.adress,e.foodshop_on_sale=t.list.foodshop_on_sale,e.group_on_sale=t.list.group_on_sale,e.shop_on_sale=t.list.shop_on_sale,e.mall_on_sale=t.list.mall_on_sale,e.off_pay_name=t.list.pay_name)}))},addMerchantStore:function(){this.$router.push({path:"/merchant/store.merchant/StoreEdit"})},goNextPage:function(t){var e=this;this.visible_staff=!0,this.store_id=t;var a={store_id:this.store_id};this.fileList=[],this.$set(this,"store_id",t),this.request(o["a"].storeAuthMsg,a).then((function(t){if(t.auth_files.length>0)for(var a=0;a<t.auth_files.length;a++){var s={uid:a,name:"image_"+a,status:"done",url:t.auth_files[a]};e.fileList.push(s)}}))},hidelModel:function(){this.visible_staff=!1},handleSubmit:function(t){var e=this;t.preventDefault();var a={store_id:this.store_id,pic:this.pic};this.request(o["a"].storeAuthEdit,a).then((function(t){1e3==t.status&&e.$message.success("保存成功"),e.visible_staff=!1}))},handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,c(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},handleChange:function(t){var e=t.fileList;this.fileList=e},handleChange1:function(t){var e=t.fileList;this.fileList=e;for(var a=[],s=0;s<this.fileList.length;s++)"done"==this.fileList[s].status&&(void 0!==this.fileList[s].url?a.push(this.fileList[s].url):a.push(this.fileList[s].response.data));a.length>0&&(this.pic=a.join(";"))},storeEdit:function(t){this.$router.push({path:"/merchant/store.merchant/StoreEdit",query:{store_id:t}})},goMyGoods:function(t){window.open("/merchant.php?g=Merchant&c=GoodsLibrary&a=goods_list&store_id="+t)},openDiyPage:function(t){window.open("/merchant.php?g=Merchant&c=Diypage&a=index&store_id="+t)},storeDel:function(t){var e=this;this.$confirm({title:"是否确定删除该店铺?",centered:!0,onOk:function(){var a={store_id:t};e.request(o["a"].storeDel,a).then((function(t){t.status&&(e.$message.success("删除成功"),e.getLists())}))},onCancel:function(){}})}}},d=h,u=(a("1101"),a("2877")),p=Object(u["a"])(d,s,n,!1,null,"8c8d6810",null);e["default"]=p.exports},a408:function(t,e,a){"use strict";a("ee6f")},b983:function(t,e,a){},ea1d:function(t,e,a){"use strict";var s={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode"};e["a"]=s},ee6f:function(t,e,a){}}]);