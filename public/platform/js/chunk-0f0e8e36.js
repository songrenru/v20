(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f0e8e36","chunk-2d0bacf3"],{3438:function(e,t,i){"use strict";i("f623")},3990:function(e,t,i){"use strict";var a={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess"};t["a"]=a},8803:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{title:"楼栋管家",visible:e.visible,width:750,"body-style":{paddingBottom:"80px"}},on:{close:e.resetForm}},[i("a-form-model",{ref:"ruleForm",attrs:{model:e.buildForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[i("a-form-model-item",{attrs:{label:"绑定员工",prop:"yuangong",extra:"多选，不限制数量，绑定员工后，业主加好友时随机从其中选择"}},[i("a-select",{staticStyle:{width:"240px"},attrs:{mode:"multiple",placeholder:"请选择员工",value:e.selectedItems},on:{change:function(t){return e.handleSelectChange(t,"yuangong")}}},e._l(e.filteredOptions,(function(t,a){return i("a-select-option",{attrs:{value:t.name,index:a}},[e._v(" "+e._s(t.name))])})),1)],1),i("a-form-model-item",{attrs:{label:"绑定楼栋",prop:"is_kefu",extra:"选择“是”选项，添加客服时只能选择楼栋下的业主；选择“否”选项，添加客服时能选择楼栋所有的业主"}},[i("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.buildForm.is_kefu,callback:function(t){e.$set(e.buildForm,"is_kefu",t)},expression:"buildForm.is_kefu"}},[i("a-radio",{attrs:{value:1}},[e._v("是")]),i("a-radio",{attrs:{value:0}},[e._v("否")])],1)],1),i("a-form-model-item",{attrs:{label:"欢迎语",prop:"welcome_tip",extra:"变量填写规则（可对应复制到填写内容）：{姓名} {手机号}"}},[i("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入欢迎语"},model:{value:e.buildForm.welcome_tip,callback:function(t){e.$set(e.buildForm,"welcome_tip",t)},expression:"buildForm.welcome_tip"}})],1),i("a-form-model-item",{attrs:{label:"企业微信服务群二维码"}},[i("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"qycode")}}},[i("a-button",{attrs:{loading:e.qyimgLoading}},[e._v("上传二维码")]),e.ercodeUrl?i("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.lookCode()}}},[e._v("查看二维码")]):e._e(),i("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.lookHelp.apply(null,arguments)}}},[e._v("点击可查看使用帮助")])],1)],1),i("a-form-model-item",{attrs:{label:"装修",prop:"zhuangxiu"}},[i("template",{slot:"extra"},[e._v(" 1、无需装修：将直接使用二维码自带的模板样式"),i("br"),e._v(" 2、系统默认模板：将直接使用我们提供的模板样式，可选择查看样式"),i("br"),e._v(" 3、上传模板：需要自行设计好模板后上传，尺寸：750*1334；注意：模板左下角需距离页面边缘间距20像素预留100*100像素的空白位置，用于放置群二维码 ")]),i("a-select",{staticStyle:{width:"240px"},attrs:{placeholder:"请选择装修",value:e.buildForm.template_type},on:{change:function(t){return e.handleSelectChange(t,"zhuangxiu")}}},e._l(e.repaireList,(function(t,a){return i("a-select-option",{attrs:{value:t.id,index:a}},[e._v(e._s(t.name))])})),1)],2),2==e.buildForm.template_type?i("a-form-model-item",{attrs:{label:"上传模板",prop:"template_url",extra:"尺寸：750*1334；注意：模板左下角需距离页面边缘间距20像素预留100*100像素的空白位置，用于放置群二维码"}},[i("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"template")}}},[i("a-button",{attrs:{loading:e.temimgLoading}},[e._v("上传模板")]),e.imageUrl?i("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.previewImage()}}},[e._v("查看图片")]):e._e()],1)],1):e._e()],1),i("a-modal",{attrs:{title:"查看二维码",width:350,visible:e.erCodeVisible,footer:null},on:{cancel:e.handleCodeCancel}},[i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[i("img",{staticStyle:{width:"150px"},attrs:{preview:"1",src:e.ercodeUrl}})])]),i("a-modal",{attrs:{title:"预览图片",width:350,visible:e.previewVisible,footer:null},on:{cancel:e.handlePreviewCancel}},[i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[i("img",{staticStyle:{width:"150px"},attrs:{preview:"2",src:e.imageUrl}})])]),i("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[i("a-button",{staticStyle:{marginRight:"8px"},on:{click:e.resetForm}},[e._v(" 关闭 ")]),i("a-button",{attrs:{loading:e.confirmLoading,type:"primary"},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1)],1)},l=[],n=(i("a9e3"),i("4de4"),i("d3b7"),i("caad"),i("2532"),i("d81d"),i("b0c0"),i("ac1f"),i("1276"),i("8bbf")),o=i.n(n),r=i("ed09"),u=i("3990"),d=Object(r["c"])({props:{visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0}},setup:function(e,t){var i=function(){n.value=!1},a=function(){n.value=!0},l=Object(r["h"])(""),n=Object(r["h"])(!1),d=Object(r["h"])(""),p=Object(r["g"])({authorization:"authorization-text"}),m=Object(r["h"])("/v20/public/index.php/common/common.UploadFile/uploadImg"),s=Object(r["g"])({upload_dir:"village"}),c=Object(r["h"])(!1),g=function(){c.value=!1},v=Object(r["h"])(""),f=Object(r["h"])(!1),y=Object(r["h"])(!1),b=function(e,t){if("uploading"!==e.file.status)return"error"===e.file.status?(o.a.prototype.$message.error("上传失败!"),void("qycode"==t?f.value=!0:y.value=!0)):void("done"===e.file.status&&("qycode"==t?(l.value=e.file.response.data.full_url,F.value.qy_qrcode=e.file.response.data.image,f.value=!1):(v.value=e.file.response.data.full_url,F.value.template_url=e.file.response.data.image,y.value=!1)));"qycode"==t?f.value=!0:y.value=!0},_=function(e,t){var i="image/jpeg"===e.type||"image/png"===e.type;i||o.a.prototype.$message.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||o.a.prototype.$message.error("Image must smaller than 2MB!"),i&&a},h=function(e){c.value=!0},R=Object(r["h"])([]),U=Object(r["h"])([]),w=Object(r["a"])({get:function(){return R.value.filter((function(e){return!U.value.includes(e)}))}}),B=Object(r["h"])([{name:"无需装修",id:0},{name:"系统默认模板",id:1},{name:"上传模板",id:2}]),x=function(){window.open(d.value)},I=Object(r["h"])(!1),F=Object(r["h"])({}),L=Object(r["g"])({is_kefu:[{required:!0,message:"请选择是否绑定楼栋",trigger:"blur"}],welcome_tip:[{required:!0,message:"请输入欢迎语",trigger:"blur"}]}),O=Object(r["h"])(),k=Object(r["h"])({span:6}),j=Object(r["h"])({span:16}),C=function(){O.value.validate((function(e){if(e){if(0==U.length)return void o.a.prototype.$message.warn("请选择绑定员工！");q()}}))},S=function(){t.emit("closeDrawer"),F.value={},v.value="",l.value="",O.value.resetFields()},q=function(){I.value=!0,o.a.prototype.request(u["a"].saveBuildingButler,F.value).then((function(e){I.value=!1,S(),o.a.prototype.$message.success("保存成功！")})).catch((function(e){I.value=!1}))},P=function(e){o.a.prototype.request(u["a"].getBuildingButler,{single_id:e}).then((function(e){e.buldingButler&&(F.value=e.buldingButler,R.value=e.buldingButlerList,U.value=e.buldingButlerBindList.map((function(e){return e.name})),l.value=e.buldingButler.qy_qrcode,F.value.template_url=e.buldingButler.template_url,v.value=e.buldingButler.template_url,F.value.work_arr=e.buldingButler.work_arr.split(",")),d.value=e.qyhelp_url}))},V=function(e,t){if("yuangong"==t){U.value=e;var i=[];R.value.map((function(t){e.map((function(e){e==t.name&&i.push(t.wid)}))})),F.value.work_arr=i}"zhuangxiu"==t&&(F.value.template_type=e)};return Object(r["i"])((function(){return e.visible}),(function(t){t&&P(e.single_id)}),{deep:!0}),{confirmLoading:I,onSubmit:C,resetForm:S,buildForm:F,labelCol:k,wrapperCol:j,rules:L,saveForm:q,ruleForm:O,userList:R,repaireList:B,handleSelectChange:V,filteredOptions:w,selectedItems:U,lookHelp:x,lookCode:a,handleCodeCancel:i,ercodeUrl:l,erCodeVisible:n,getBuildInfo:P,qyhelpUrl:d,headers:p,uploadUrl:m,uploadParams:s,imageUrl:v,qyimgLoading:f,temimgLoading:y,beforeUpload:_,handleUploadChange:b,previewImage:h,previewVisible:c,handlePreviewCancel:g}}}),p=d,m=(i("3438"),i("0c7c")),s=Object(m["a"])(p,a,l,!1,null,"3468d95a",null);t["default"]=s.exports},f623:function(e,t,i){}}]);