(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a0520b0","chunk-2d0bacf3"],{3990:function(e,t,a){"use strict";var i={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};t["a"]=i},"5fa7":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:e.xtitle,visible:e.visible,width:850,"body-style":{paddingBottom:"80px"}},on:{close:e.resetForm}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.buildForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"绑定员工",prop:"yuangong",extra:"多选，不限制数量，绑定员工后，业主加好友时随机从其中选择"}},[a("a-select",{attrs:{mode:"multiple",placeholder:"请选择员工",value:e.selectedItems},on:{change:function(t){return e.handleSelectChange(t,"yuangong")}}},e._l(e.filteredOptions,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.name,index:i}},[e._v(" "+e._s(t.name))])})),1)],1),e.floor_id<=0?a("a-form-model-item",{attrs:{label:"绑定楼栋",prop:"is_kefu",extra:"选择“是”选项，添加客服时只能选择楼栋下的业主；选择“否”选项，添加客服时能选择楼栋所有的业主"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.buildForm.is_kefu,callback:function(t){e.$set(e.buildForm,"is_kefu",t)},expression:"buildForm.is_kefu"}},[a("a-radio",{attrs:{value:1}},[e._v("是")]),a("a-radio",{attrs:{value:0}},[e._v("否")])],1)],1):e._e(),a("a-form-model-item",{attrs:{label:"欢迎语",prop:"welcome_tip",extra:"变量填写规则（可对应复制到填写内容）：{姓名} {手机号}"}},[a("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入欢迎语"},model:{value:e.buildForm.welcome_tip,callback:function(t){e.$set(e.buildForm,"welcome_tip",t)},expression:"buildForm.welcome_tip"}})],1),a("a-form-model-item",{attrs:{label:"企业微信服务群二维码"}},[a("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"qycode")}}},[a("a-button",{attrs:{loading:e.qyimgLoading}},[e._v("上传二维码")]),e.ercodeUrl?a("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.lookCode()}}},[e._v("查看二维码")]):e._e(),a("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.lookHelp.apply(null,arguments)}}},[e._v("点击可查看使用帮助")])],1)],1),a("a-form-model-item",{attrs:{label:"装修模板",prop:"zhuangxiu"}},[a("template",{slot:"extra"},[e._v(" 1、无需装修：将直接使用二维码自带的模板样式"),a("br"),e._v(" 2、系统默认模板：将直接使用我们提供的模板样式，可选择查看样式"),a("br"),e._v(" 3、上传模板：需要自行设计好模板后上传，尺寸：750*1334；注意：模板左下角需距离页面边缘间距20像素预留100*100像素的空白位置，用于放置群二维码 ")]),a("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择装修模板",value:e.buildForm.template_type},on:{change:function(t){return e.handleSelectChange(t,"zhuangxiu")}}},e._l(e.repaireList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.id,index:i}},[e._v(e._s(t.name))])})),1)],2),2==e.buildForm.template_type?a("a-form-model-item",{attrs:{label:"上传模板1",prop:"template_url",extra:"尺寸：750*1334；注意：模板左下角需距离页面边缘间距20像素预留100*100像素的空白位置，用于放置群二维码"}},[a("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"template")}}},[a("a-button",{attrs:{loading:e.temimgLoading}},[e._v("上传模板")]),e.imageUrl?a("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.previewImage()}}},[e._v("查看图片")]):e._e()],1)],1):e._e(),e.effect_img?a("a-form-model-item",{attrs:{label:"效果预览"}},[a("img",{staticStyle:{width:"50px"},attrs:{src:e.effect_img}})]):e._e()],1),a("a-modal",{attrs:{title:"查看二维码",width:350,visible:e.erCodeVisible,footer:null},on:{cancel:e.handleCodeCancel}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[a("img",{staticStyle:{width:"150px"},attrs:{preview:"1",src:e.ercodeUrl}})])]),a("a-modal",{attrs:{title:"查看图片",width:350,visible:e.previewVisible,footer:null},on:{cancel:e.handlePreviewCancel}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[a("img",{staticStyle:{width:"150px"},attrs:{preview:"2",src:e.imageUrl}})])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{marginRight:"8px"},on:{click:e.resetForm}},[e._v(" 关闭 ")]),a("a-button",{attrs:{loading:e.confirmLoading,type:"primary"},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1)],1)},l=[],n=(a("a9e3"),a("4de4"),a("d3b7"),a("caad"),a("2532"),a("d81d"),a("b0c0"),a("8bbf")),o=a.n(n),r=a("ed09"),u=a("3990"),d=Object(r["c"])({props:{visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0}},setup:function(e,t){var a=function(){n.value=!1},i=function(){n.value=!0},l=Object(r["h"])(""),n=Object(r["h"])(!1),d=Object(r["h"])(""),m=Object(r["h"])(""),p=Object(r["g"])({authorization:"authorization-text"}),s=Object(r["h"])("/v20/public/index.php/common/common.UploadFile/uploadImg"),c=Object(r["g"])({upload_dir:"village"}),g=Object(r["h"])(!1),v=function(){g.value=!1},f=Object(r["h"])(""),_=Object(r["h"])(!1),y=Object(r["h"])(!1),b=function(e,t){if("uploading"!==e.file.status)return"error"===e.file.status?(o.a.prototype.$message.error("上传失败!"),void("qycode"==t?_.value=!0:y.value=!0)):void("done"===e.file.status&&("qycode"==t?(l.value=e.file.response.data.full_url,L.value.qy_qrcode=e.file.response.data.image,_.value=!1):(f.value=e.file.response.data.full_url,L.value.template_url=e.file.response.data.image,y.value=!1)));"qycode"==t?_.value=!0:y.value=!0},h=function(e,t){var a="image/jpeg"===e.type||"image/png"===e.type;a||o.a.prototype.$message.error("You can only upload JPG file!");var i=e.size/1024/1024<2;return i||o.a.prototype.$message.error("Image must smaller than 2MB!"),a&&i},R=function(e){g.value=!0},U=Object(r["h"])([]),w=Object(r["h"])([]),B=Object(r["a"])({get:function(){return U.value.filter((function(e){return!w.value.includes(e)}))}}),x=Object(r["h"])([{name:"无需装修",id:0},{name:"系统默认模板",id:1},{name:"上传模板",id:2}]),I=function(){window.open(d.value)},F=Object(r["h"])(!1),L=Object(r["h"])({template_type:0}),k=Object(r["g"])({is_kefu:[{required:!0,message:"请选择是否绑定楼栋",trigger:"blur"}],welcome_tip:[{required:!0,message:"请输入欢迎语",trigger:"blur"}]}),O=Object(r["h"])(),j=Object(r["h"])({span:6}),q=Object(r["h"])({span:16}),C=Object(r["h"])("楼栋管家"),S=function(){O.value.validate((function(e){if(e){if(0==w.length)return void o.a.prototype.$message.warn("请选择绑定员工！");$()}}))},P=function(){t.emit("closeDrawer"),L.value={template_type:0},f.value="",l.value="",m.value="",O.value.resetFields()},$=function(){F.value=!0,o.a.prototype.request(u["a"].saveUnitRentalButler,L.value).then((function(e){F.value=!1,P(),o.a.prototype.$message.success("保存成功！")})).catch((function(e){F.value=!1}))},V=function(t){o.a.prototype.request(u["a"].getUnitRentalButler,{single_id:t,floor_id:e.floor_id}).then((function(e){e.buldingButler&&(L.value=e.buldingButler,l.value=e.buldingButler.qy_qrcode,f.value=e.buldingButler.template_url,m.value=e.buldingButler.effect_img,L.value.work_arr=e.buldingButler.work_arr.split(","),L.value.template_url=e.buldingButler.template_url),e.buldingButlerList&&(U.value=e.buldingButlerList),e.buldingButlerBindList&&(w.value=e.buldingButlerBindList.map((function(e){return e.name}))),d.value=e.qyhelp_url}))},z=function(e,t){if(console.log("value",e,t),"yuangong"==t){w.value=e;var a=[];U.value.map((function(t){e.map((function(e){e==t.name&&a.push(t.wid)}))})),L.value.work_arr=a}"zhuangxiu"==t&&(L.value.template_type=e,1==e&&L.value.qy_qrcode||2==value2&&L.value.qy_qrcode&&L.value.template_url?D():(L.value.effect_img="",m.value=""))},D=function(){var e=L.value.template_type;0!=e&&e&&(L.value.qy_qrcode?2!=e||L.value.template_url?o.a.prototype.request(u["a"].servicesImgPreview,{template_type:e,qy_qrcode:L.value.qy_qrcode,template_url:L.value.template_url}).then((function(e){if(console.log("services_look_img",data),data.data){var t=e.data.file_path,a=e.data.file;L.value.effect_img=a,m.value=t}})):o.a.prototype.$message.warn("请上传对应模板！"):o.a.prototype.$message.warn("请上传企业微信群二维码！"))};return Object(r["i"])((function(){return e.visible}),(function(t){t&&(e.floor_id=parseInt(e.floor_id),e.floor_id>0&&(C.value="单元管家"),V(e.single_id))}),{deep:!0}),{confirmLoading:F,onSubmit:S,resetForm:P,buildForm:L,labelCol:j,wrapperCol:q,rules:k,saveForm:$,ruleForm:O,userList:U,repaireList:x,handleSelectChange:z,filteredOptions:B,selectedItems:w,lookHelp:I,lookCode:i,handleCodeCancel:a,ercodeUrl:l,erCodeVisible:n,getBuildInfo:V,qyhelpUrl:d,headers:p,uploadUrl:s,uploadParams:c,imageUrl:f,qyimgLoading:_,temimgLoading:y,beforeUpload:h,handleUploadChange:b,previewImage:R,previewVisible:g,handlePreviewCancel:v,xtitle:C,services_look_img:D,effect_img:m}}}),m=d,p=(a("eb27"),a("0c7c")),s=Object(p["a"])(m,i,l,!1,null,"60bde39c",null);t["default"]=s.exports},e7a9:function(e,t,a){},eb27:function(e,t,a){"use strict";a("e7a9")}}]);