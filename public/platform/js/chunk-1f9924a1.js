(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f9924a1"],{"075ac":function(e,t,a){"use strict";a("8be0")},"0b5a":function(e,t,a){},"1f16":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:e.title,visible:e.visible,width:700,"body-style":{paddingBottom:"80px"}},on:{close:function(t){return e.resetForm(!1)}}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.buildForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticStyle:{display:"flex"}},[a("a-card",{staticStyle:{width:"630px"},attrs:{title:"基本信息"}},[a("a-form-model-item",{attrs:{label:"楼层名称",prop:"layer_name"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.layer_name,callback:function(t){e.$set(e.buildForm,"layer_name",t)},expression:"buildForm.layer_name"}})],1),a("a-form-model-item",{attrs:{label:"楼层编号",prop:"layer_number"}},[a("a-input-number",{staticClass:"input_style_240",attrs:{max:99,min:1,extra:"必填项（仅限1-99不重复的数字"},model:{value:e.buildForm.layer_number,callback:function(t){e.$set(e.buildForm,"layer_number",t)},expression:"buildForm.layer_number"}})],1),a("a-form-model-item",{attrs:{label:"排序",prop:"sort",extra:"数字越大越靠前"}},[a("a-input-number",{staticClass:"input_style_240",attrs:{min:0},model:{value:e.buildForm.sort,callback:function(t){e.$set(e.buildForm,"sort",t)},expression:"buildForm.sort"}})],1),a("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭","default-checked":""},model:{value:e.statusBool,callback:function(t){e.statusBool=t},expression:"statusBool"}})],1)],1)],1)]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-right":"30px"},on:{click:function(t){return e.resetForm(!1)}}},[e._v(" 关闭 ")]),a("a-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1)],1)},o=[],r=(a("a9e3"),a("8bbf")),i=a.n(r),n=a("c1df"),u=a.n(n),s=a("ed09"),c=a("3990"),d=Object(s["c"])({props:{visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0},layer_id:{type:[String,Number],default:0}},setup:function(e,t){Object(s["i"])((function(){return e.visible}),(function(t){t&&(e.layer_id>0?d.value="编辑楼层":d.value="添加楼层",y(e.single_id,e.floor_id,e.layer_id))}),{deep:!0});var a=function(e){var t=e.getFullYear(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,l=e.getDate()<10?"0"+e.getDate():e.getDate(),o=t+"-"+a+"-"+l;return o},l=Object(s["h"])(!1),o=Object(s["h"])(!1),r=Object(s["h"])(!1),n=Object(s["h"])({}),d=Object(s["h"])("编辑楼层"),p=Object(s["h"])({layer_name:[{required:!0,message:"请输入楼层名称",trigger:"blur"}],layer_number:[{required:!0,message:"请输入楼层编号",trigger:"blur"}]}),m=Object(s["h"])(),f=Object(s["h"])({span:6}),b=Object(s["h"])({span:16}),_=function(){m.value.validate((function(t){t&&(n.value.single_id=e.single_id,n.value.status=l.value?1:0,console.log("buildForm.value===>",n.value),r.value=!0,g())}))},v=function(e){t.emit("closeLayerDrawer",e),n.value={},m.value.resetFields()},g=function(){i.a.prototype.request(c["a"].saveUnitRentalLayerInfo,n.value).then((function(t){r.value=!1,e.floor_id>0?i.a.prototype.$message.success("编辑成功！"):i.a.prototype.$message.success("添加成功！"),v(!0)})).catch((function(e){r.value=!1}))},y=function(e,t,a){i.a.prototype.request(c["a"].unitRentalLayerInfo,{single_id:e,floor_id:t,layer_id:a}).then((function(e){n.value=e,l.value=1==e.status}))};return{confirmLoading:r,onSubmit:_,resetForm:v,buildForm:n,labelCol:f,wrapperCol:b,rules:p,saveForm:g,ruleForm:m,searchArea:o,formDate:a,moment:u.a,statusBool:l,title:d,getLayerInfo:y}}}),p=d,m=(a("fb5b"),a("2877")),f=Object(m["a"])(p,l,o,!1,null,"5d59dd62",null);t["default"]=f.exports},"44ef":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:e.title,visible:e.visible,width:1300,"body-style":{paddingBottom:"80px"}},on:{close:function(t){return e.resetForm(!1)}}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.buildForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticStyle:{display:"flex"}},[a("a-card",{staticStyle:{width:"480px"},attrs:{title:"基本信息"}},[a("a-form-model-item",{attrs:{label:"单元名称",prop:"floor_name"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_name,callback:function(t){e.$set(e.buildForm,"floor_name",t)},expression:"buildForm.floor_name"}})],1),a("a-form-model-item",{attrs:{label:"单元编号",prop:"floor_number"}},[a("a-input-number",{staticClass:"input_style_240",attrs:{max:99,min:1,extra:"必填项（仅限1-99不重复的数字"},model:{value:e.buildForm.floor_number,callback:function(t){e.$set(e.buildForm,"floor_number",t)},expression:"buildForm.floor_number"}})],1),a("a-form-model-item",{attrs:{label:"单元地址",prop:"long_lat"}},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:e.buildForm.long_lat,callback:function(t){e.$set(e.buildForm,"long_lat",t)},expression:"buildForm.long_lat"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.openMap()}}},[e._v("点击获取经纬度")])],1),a("a-form-model-item",{attrs:{label:"单元管家名称",prop:"floor_keeper_name"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_keeper_name,callback:function(t){e.$set(e.buildForm,"floor_keeper_name",t)},expression:"buildForm.floor_keeper_name"}})],1),a("a-form-model-item",{attrs:{label:"联系方式",prop:"floor_keeper_phone"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_keeper_phone,callback:function(t){e.$set(e.buildForm,"floor_keeper_phone",t)},expression:"buildForm.floor_keeper_phone"}})],1),a("a-form-model-item",{attrs:{label:"管家头像",prop:"floor_keeper_head"}},[a("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"floor_keeper_head")}}},[a("a-button",{attrs:{loading:e.temimgLoading}},[e._v("上传头像")]),e.imageUrl?a("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.previewImage()}}},[e._v("查看头像图片")]):e._e()],1)],1),a("a-form-model-item",{attrs:{label:"排序",prop:"sort"}},[a("a-input-number",{staticClass:"input_style_240",attrs:{min:0},model:{value:e.buildForm.sort,callback:function(t){e.$set(e.buildForm,"sort",t)},expression:"buildForm.sort"}})],1),a("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭","default-checked":""},model:{value:e.statusBool,callback:function(t){e.statusBool=t},expression:"statusBool"}})],1)],1),a("a-card",{staticStyle:{width:"320px"},attrs:{title:"相关费用"}},[a("a-form-model-item",{attrs:{label:"物业费",prop:"property_fee"}},[a("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.property_fee,callback:function(t){e.$set(e.buildForm,"property_fee",t)},expression:"buildForm.property_fee"}})],1),a("a-form-model-item",{attrs:{label:"水费",prop:"water_fee"}},[a("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.water_fee,callback:function(t){e.$set(e.buildForm,"water_fee",t)},expression:"buildForm.water_fee"}})],1),a("a-form-model-item",{attrs:{label:"电费",prop:"electric_fee"}},[a("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.electric_fee,callback:function(t){e.$set(e.buildForm,"electric_fee",t)},expression:"buildForm.electric_fee"}})],1),a("a-form-model-item",{attrs:{label:"燃气费",prop:"gas_fee"}},[a("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.gas_fee,callback:function(t){e.$set(e.buildForm,"gas_fee",t)},expression:"buildForm.gas_fee"}})],1),a("a-form-model-item",{attrs:{label:"停车费",prop:"parking_fee"}},[a("a-input-number",{staticClass:"input_style_140",model:{value:e.buildForm.parking_fee,callback:function(t){e.$set(e.buildForm,"parking_fee",t)},expression:"buildForm.parking_fee"}})],1)],1),a("a-card",{staticStyle:{width:"480px"},attrs:{title:"单元资料"}},[a("a-form-model-item",{attrs:{label:"单元面积(m²)",prop:"floor_area"}},[a("a-input",{staticClass:"input_style_240",model:{value:e.buildForm.floor_area,callback:function(t){e.$set(e.buildForm,"floor_area",t)},expression:"buildForm.floor_area"}})],1),a("a-form-model-item",{attrs:{label:"门户数量",prop:"house_num"}},[a("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.house_num,callback:function(t){e.$set(e.buildForm,"house_num",t)},expression:"buildForm.house_num"}})],1),a("a-form-model-item",{attrs:{label:"地面建筑层数",prop:"floor_upper_layer_num"}},[a("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.floor_upper_layer_num,callback:function(t){e.$set(e.buildForm,"floor_upper_layer_num",t)},expression:"buildForm.floor_upper_layer_num"}})],1),a("a-form-model-item",{attrs:{label:"地下建筑层数",prop:"floor_lower_layer_num"}},[a("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.floor_lower_layer_num,callback:function(t){e.$set(e.buildForm,"floor_lower_layer_num",t)},expression:"buildForm.floor_lower_layer_num"}})],1),a("a-form-model-item",{attrs:{label:"起始住人楼层",prop:"start_layer_num"}},[a("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.start_layer_num,callback:function(t){e.$set(e.buildForm,"start_layer_num",t)},expression:"buildForm.start_layer_num"}})],1),a("a-form-model-item",{attrs:{label:"最高住人楼层",prop:"end_layer_num"}},[a("a-input-number",{staticClass:"input_style_240",model:{value:e.buildForm.end_layer_num,callback:function(t){e.$set(e.buildForm,"end_layer_num",t)},expression:"buildForm.end_layer_num"}})],1)],1)],1)]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"center",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-right":"30px"},on:{click:function(t){return e.resetForm(!1)}}},[e._v(" 关闭 ")]),a("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1),a("a-modal",{attrs:{title:"预览图片",width:650,visible:e.previewVisible,footer:null},on:{cancel:e.handlePreviewCancel}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[a("img",{staticStyle:{width:"550px"},attrs:{preview:"2",src:e.imageUrl}})])]),e.mapVisible?a("a-modal",{attrs:{title:"百度地图拾取经纬度",visible:e.mapVisible,width:800},on:{ok:e.handleMapOk,cancel:e.handleMapCancel}},[a("a-input",{staticClass:"input_style",staticStyle:{width:"200px"},attrs:{type:"text",id:"suggestId",name:"address_detail",placeholder:"请输入城市名/地区名"},model:{value:e.address_detail,callback:function(t){e.address_detail=t},expression:"address_detail"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchMap}},[e._v("搜索")]),a("div",{staticStyle:{width:"100%",height:"500px","margin-top":"10px"},attrs:{id:"allmap"}})],1):e._e()],1)},o=[],r=(a("a9e3"),a("4e82"),a("8bbf")),i=a.n(r),n=a("c1df"),u=a.n(n),s=a("ed09"),c=a("3990"),d=Object(s["c"])({props:{visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0}},setup:function(e,t){Object(s["i"])((function(){return e.visible}),(function(t){t&&(e.floor_id>0?d.value="编辑单元":d.value="添加单元",M(e.single_id,e.floor_id))}),{deep:!0});var a=function(e){var t=e.getFullYear(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,l=e.getDate()<10?"0"+e.getDate():e.getDate(),o=t+"-"+a+"-"+l;return o},l=Object(s["h"])(!1),o=Object(s["h"])(!1),r=Object(s["h"])(!1),n=Object(s["h"])({}),d=Object(s["h"])("编辑单元"),p=Object(s["h"])(!1),m=Object(s["g"])({authorization:"authorization-text"}),f=Object(s["h"])("/v20/public/index.php/common/common.UploadFile/uploadImg"),b=Object(s["g"])({upload_dir:"village"}),_=Object(s["h"])({floor_name:[{required:!0,message:"请输入单元名称",trigger:"blur"}],floor_number:[{required:!0,message:"请输入单元编号",trigger:"blur"}],long_lat:[{required:!0,message:"请选择单元地址",trigger:"blur"}],floor_area:[{required:!0,message:"请输入单元面积",trigger:"blur"}],house_num:[{required:!0,message:"请输入所含门户数",trigger:"blur"}]}),v=Object(s["h"])(),g=Object(s["h"])({span:6}),y=Object(s["h"])({span:16}),h=function(){v.value.validate((function(t){t&&(n.value.single_id=e.single_id,n.value.status=l.value?1:0,console.log("buildForm.value===>",n.value),r.value=!0,w())}))},x=function(e){t.emit("closeDrawer",e),n.value={},v.value.resetFields()},w=function(){i.a.prototype.request(c["a"].saveUnitRentalFloorInfo,n.value).then((function(t){r.value=!1,e.floor_id>0?i.a.prototype.$message.success("编辑成功！"):i.a.prototype.$message.success("添加成功！"),x(!0)})).catch((function(e){r.value=!1}))},F=Object(s["h"])(!1),k=Object(s["h"])(""),O=Object(s["h"])(""),j=Object(s["h"])(""),C=function(){n.value.long_lat=O.value+","+k.value,n.value.long=O.value,n.value.lat=k.value,F.value=!1,o.value=!1},S=function(){F.value=!1,o.value=!1},L=function(){F.value=!0,$()},B=function(){j.value&&(o.value=!0,$())},$=function(){Object(s["e"])((function(){var e,t=new BMap.Map("allmap");if(n.value.lat&&n.value.long&&!o.value){t.clearOverlays(),e=new BMap.Point(n.value.long,n.value.lat);new BMap.Size(0,15);t.addOverlay(new BMap.Marker(e))}else e=j.value;t.centerAndZoom(e,15),t.enableScrollWheelZoom(),t.addEventListener("click",(function(e){t.clearOverlays(),t.addOverlay(new BMap.Marker(e.point)),O.value=e.point.lng,k.value=e.point.lat,console.log(e.point),(new BMap.Geocoder).getLocation(e.point,(function(e){j.value=e.address}))}))}))},U=Object(s["h"])(""),M=function(e,t){i.a.prototype.request(c["a"].unitRentalFloorInfo,{single_id:e,floor_id:t}).then((function(e){n.value=e,n.value.sort=e.sort||0,n.value.long_lat=e.long+","+e.lat,U.value=e.floor_keeper_head;var t=new BMap.Point(Number(e.long),Number(e.lat));(new BMap.Geocoder).getLocation(t,(function(e){j.value=e.address})),l.value=1==e.status}))},q=function(e,t){if("uploading"!==e.file.status)return"error"===e.file.status?(i.a.prototype.$message.error("上传失败!"),void(p.value=!0)):void("done"===e.file.status&&(U.value=e.file.response.data.full_url,n.value.floor_keeper_head=e.file.response.data.image,p.value=!1));p.value=!0},I=function(e,t){var a="image/jpeg"===e.type||"image/png"===e.type;a||i.a.prototype.$message.error("You can only upload JPG file!");var l=e.size/1024/1024<2;return l||i.a.prototype.$message.error("Image must smaller than 2MB!"),a&&l},R=Object(s["h"])(!1),D=function(){R.value=!1},P=function(e){R.value=!0};return{confirmLoading:r,onSubmit:h,resetForm:x,buildForm:n,labelCol:g,wrapperCol:y,rules:_,saveForm:w,openMap:L,mapVisible:F,userLat:k,userLng:O,address_detail:j,handleMapOk:C,searchMap:B,initMap:$,handleMapCancel:S,ruleForm:v,searchArea:o,formDate:a,moment:u.a,statusBool:l,title:d,getFloorInfo:M,uploadUrl:f,uploadParams:b,headers:m,beforeUpload:I,temimgLoading:p,handleUploadChange:q,imageUrl:U,previewVisible:R,handlePreviewCancel:D,previewImage:P}}}),p=d,m=(a("aed5"),a("2877")),f=Object(m["a"])(p,l,o,!1,null,"56654b7d",null);t["default"]=f.exports},"4b87":function(e,t,a){},"5fa7":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:e.xtitle,visible:e.visible,width:850,"body-style":{paddingBottom:"80px"}},on:{close:e.resetForm}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.buildForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"绑定员工",prop:"yuangong",extra:"多选，不限制数量，绑定员工后，业主加好友时随机从其中选择"}},[a("a-select",{attrs:{mode:"multiple",placeholder:"请选择员工",value:e.selectedItems},on:{change:function(t){return e.handleSelectChange(t,"yuangong")}}},e._l(e.filteredOptions,(function(t,l){return a("a-select-option",{attrs:{value:t.name,index:l}},[e._v(" "+e._s(t.name))])})),1)],1),e.floor_id<=0?a("a-form-model-item",{attrs:{label:"绑定楼栋",prop:"is_kefu",extra:"选择“是”选项，添加客服时只能选择楼栋下的业主；选择“否”选项，添加客服时能选择楼栋所有的业主"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.buildForm.is_kefu,callback:function(t){e.$set(e.buildForm,"is_kefu",t)},expression:"buildForm.is_kefu"}},[a("a-radio",{attrs:{value:1}},[e._v("是")]),a("a-radio",{attrs:{value:0}},[e._v("否")])],1)],1):e._e(),a("a-form-model-item",{attrs:{label:"欢迎语",prop:"welcome_tip",extra:"变量填写规则（可对应复制到填写内容）：{姓名} {手机号}"}},[a("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入欢迎语"},model:{value:e.buildForm.welcome_tip,callback:function(t){e.$set(e.buildForm,"welcome_tip",t)},expression:"buildForm.welcome_tip"}})],1),a("a-form-model-item",{attrs:{label:"企业微信服务群二维码"}},[a("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"qycode")}}},[a("a-button",{attrs:{loading:e.qyimgLoading}},[e._v("上传二维码")]),e.ercodeUrl?a("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.lookCode()}}},[e._v("查看二维码")]):e._e(),a("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.lookHelp.apply(null,arguments)}}},[e._v("点击可查看使用帮助")])],1)],1),a("a-form-model-item",{attrs:{label:"装修",prop:"zhuangxiu"}},[a("template",{slot:"extra"},[e._v(" 1、无需装修：将直接使用二维码自带的模板样式"),a("br"),e._v(" 2、系统默认模板：将直接使用我们提供的模板样式，可选择查看样式"),a("br"),e._v(" 3、上传模板：需要自行设计好模板后上传，尺寸：750*1334；注意：模板左下角需距离页面边缘间距20像素预留100*100像素的空白位置，用于放置群二维码 ")]),a("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择装修",value:e.buildForm.template_type},on:{change:function(t){return e.handleSelectChange(t,"zhuangxiu")}}},e._l(e.repaireList,(function(t,l){return a("a-select-option",{attrs:{value:t.id,index:l}},[e._v(e._s(t.name))])})),1)],2),2==e.buildForm.template_type?a("a-form-model-item",{attrs:{label:"上传模板",prop:"template_url",extra:"尺寸：750*1334；注意：模板左下角需距离页面边缘间距20像素预留100*100像素的空白位置，用于放置群二维码"}},[a("a-upload",{attrs:{name:"reply_pic",multiple:!1,action:e.uploadUrl,data:e.uploadParams,"before-upload":e.beforeUpload,showUploadList:!1,headers:e.headers},on:{change:function(t){return e.handleUploadChange(t,"template")}}},[a("a-button",{attrs:{loading:e.temimgLoading}},[e._v("上传模板")]),e.imageUrl?a("a-button",{attrs:{type:"link"},on:{click:function(t){return t.stopPropagation(),e.previewImage()}}},[e._v("查看图片")]):e._e()],1)],1):e._e()],1),a("a-modal",{attrs:{title:"查看二维码",width:350,visible:e.erCodeVisible,footer:null},on:{cancel:e.handleCodeCancel}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[a("img",{staticStyle:{width:"150px"},attrs:{preview:"1",src:e.ercodeUrl}})])]),a("a-modal",{attrs:{title:"预览图片",width:350,visible:e.previewVisible,footer:null},on:{cancel:e.handlePreviewCancel}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[a("img",{staticStyle:{width:"150px"},attrs:{preview:"2",src:e.imageUrl}})])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{marginRight:"8px"},on:{click:e.resetForm}},[e._v(" 关闭 ")]),a("a-button",{attrs:{loading:e.confirmLoading,type:"primary"},on:{click:e.onSubmit}},[e._v(" 保存 ")])],1)],1)},o=[],r=(a("a9e3"),a("4de4"),a("d3b7"),a("caad"),a("2532"),a("ac1f"),a("1276"),a("d81d"),a("b0c0"),a("8bbf")),i=a.n(r),n=a("ed09"),u=a("3990"),s=Object(n["c"])({props:{visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0}},setup:function(e,t){var a=function(){r.value=!1},l=function(){r.value=!0},o=Object(n["h"])(""),r=Object(n["h"])(!1),s=Object(n["h"])(""),c=Object(n["g"])({authorization:"authorization-text"}),d=Object(n["h"])("/v20/public/index.php/common/common.UploadFile/uploadImg"),p=Object(n["g"])({upload_dir:"village"}),m=Object(n["h"])(!1),f=function(){m.value=!1},b=Object(n["h"])(""),_=Object(n["h"])(!1),v=Object(n["h"])(!1),g=function(e,t){if("uploading"!==e.file.status)return"error"===e.file.status?(i.a.prototype.$message.error("上传失败!"),void("qycode"==t?_.value=!0:v.value=!0)):void("done"===e.file.status&&("qycode"==t?(o.value=e.file.response.data.full_url,C.value.qy_qrcode=e.file.response.data.image,_.value=!1):(b.value=e.file.response.data.full_url,C.value.template_url=e.file.response.data.image,v.value=!1)));"qycode"==t?_.value=!0:v.value=!0},y=function(e,t){var a="image/jpeg"===e.type||"image/png"===e.type;a||i.a.prototype.$message.error("You can only upload JPG file!");var l=e.size/1024/1024<2;return l||i.a.prototype.$message.error("Image must smaller than 2MB!"),a&&l},h=function(e){m.value=!0},x=Object(n["h"])([]),w=Object(n["h"])([]),F=Object(n["a"])({get:function(){return x.value.filter((function(e){return!w.value.includes(e)}))}}),k=Object(n["h"])([{name:"无需装修",id:0},{name:"系统默认模板",id:1},{name:"上传模板",id:2}]),O=function(){window.open(s.value)},j=Object(n["h"])(!1),C=Object(n["h"])({template_type:0}),S=Object(n["g"])({is_kefu:[{required:!0,message:"请选择是否绑定楼栋",trigger:"blur"}],welcome_tip:[{required:!0,message:"请输入欢迎语",trigger:"blur"}]}),L=Object(n["h"])(),B=Object(n["h"])({span:6}),$=Object(n["h"])({span:16}),U=Object(n["h"])("楼栋管家"),M=function(){L.value.validate((function(e){if(e){if(0==w.length)return void i.a.prototype.$message.warn("请选择绑定员工！");I()}}))},q=function(){t.emit("closeDrawer"),C.value={template_type:0},b.value="",o.value="",L.value.resetFields()},I=function(){j.value=!0,i.a.prototype.request(u["a"].saveUnitRentalButler,C.value).then((function(e){j.value=!1,q(),i.a.prototype.$message.success("保存成功！")})).catch((function(e){j.value=!1}))},R=function(t){i.a.prototype.request(u["a"].getUnitRentalButler,{single_id:t,floor_id:e.floor_id}).then((function(e){e.buldingButler&&(C.value=e.buldingButler,o.value=e.buldingButler.qy_qrcode,b.value=e.buldingButler.template_url,C.value.work_arr=e.buldingButler.work_arr.split(","),C.value.template_url=e.buldingButler.template_url),e.buldingButlerList&&(x.value=e.buldingButlerList),e.buldingButlerBindList&&(w.value=e.buldingButlerBindList.map((function(e){return e.name}))),s.value=e.qyhelp_url}))},D=function(e,t){if(console.log("value",e,t),"yuangong"==t){w.value=e;var a=[];x.value.map((function(t){e.map((function(e){e==t.name&&a.push(t.wid)}))})),C.value.work_arr=a}"zhuangxiu"==t&&(C.value.template_type=e)};return Object(n["i"])((function(){return e.visible}),(function(t){t&&(e.floor_id=parseInt(e.floor_id),e.floor_id>0&&(U.value="单元管家"),R(e.single_id))}),{deep:!0}),{confirmLoading:j,onSubmit:M,resetForm:q,buildForm:C,labelCol:B,wrapperCol:$,rules:S,saveForm:I,ruleForm:L,userList:x,repaireList:k,handleSelectChange:D,filteredOptions:F,selectedItems:w,lookHelp:O,lookCode:l,handleCodeCancel:a,ercodeUrl:o,erCodeVisible:r,getBuildInfo:R,qyhelpUrl:s,headers:c,uploadUrl:d,uploadParams:p,imageUrl:b,qyimgLoading:_,temimgLoading:v,beforeUpload:y,handleUploadChange:g,previewImage:h,previewVisible:m,handlePreviewCancel:f,xtitle:U}}}),c=s,d=(a("075ac"),a("2877")),p=Object(d["a"])(c,l,o,!1,null,"021e1b13",null);t["default"]=p.exports},"6c5f":function(e,t,a){"use strict";a("fd30")},"8be0":function(e,t,a){},a2ce:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"楼层管理",visible:e.layer_visible,width:1300,"mask-closable":!1,"body-style":{paddingBottom:"80px"}},on:{close:e.closeLayerManage}},[a("div",{staticClass:"build_index"},[a("div",{staticClass:"table-operations top-box-padding"},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.editBuild("",0)}}},[e._v("添加楼层")])],1),a("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.id},"data-source":e.buildingList,pagination:!1,loading:e.loading},scopedSlots:e._u([{key:"status",fn:function(t,l){return[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭",checked:1==t},on:{change:function(t){return e.switchChange(t,l)}}})]}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.editBuild(l,1)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(l)},cancel:e.delCancel}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)}}])}),a("div",{staticClass:"total_number"},[e._v(" 总楼层数："),a("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.total))]),e._v("层 ")]),a("layer-edit",{attrs:{visible:e.layerEditVisible,single_id:e.single_id,floor_id:e.floor_id,layer_id:e.layer_id},on:{closeLayerDrawer:e.closeLayerDrawer}})],1)])},o=[],r=(a("a9e3"),a("4e82"),a("8bbf")),i=a.n(r),n=a("1f16"),u=a("ed09"),s=a("3990"),c=Object(u["c"])({props:{layer_visible:{type:Boolean,default:!1},single_id:{type:[String,Number],default:0},floor_id:{type:[String,Number],default:0}},name:"unitRentalLayerList",components:{layerEdit:n["default"]},setup:function(e,t){Object(u["i"])((function(){return e.layer_visible}),(function(e){e&&d()}),{deep:!0});var a=Object(u["g"])([{title:"楼层名称",dataIndex:"layer_name"},{title:"楼层编号",dataIndex:"layer_number"},{title:"楼栋名称",dataIndex:"single_name"},{title:"单元名称",dataIndex:"floor_name"},{title:"排序",dataIndex:"sort",sorter:function(e,t){return e.sort-t.sort}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}]),l=Object(u["h"])(0),o=Object(u["h"])(!1),r=Object(u["h"])(!1),n=Object(u["h"])([]),c=Object(u["h"])(0),d=function(){i.a.prototype.request(s["a"].unitRentalLayerList,{single_id:e.single_id,floor_id:e.floor_id}).then((function(e){n.value=e.dataList,c.value=e.count,r.value=!1})).catch((function(e){r.value=!1}))},p=function(){},m=Object(u["h"])(!0),f=function(e,t){if(m.value){var a=e?1:0;_(t.id,a,t.floor_id)}else i.a.prototype.$message.warn("请求频繁！")},b=function(e){console.log("closeLayerManage"),t.emit("closeDrawer",e)},_=function(e,t,a){m.value=!1,i.a.prototype.request(s["a"].updateUnitRentalLayerStatus,{layer_id:e,status:t,floor_id:a}).then((function(e){m.value=!0,d(),i.a.prototype.$message.success("修改成功！")})).catch((function(e){d(),m.value=!0}))},v=function(e,t){i.a.prototype.request(s["a"].deleteUnitRentalLayer,{layer_id:e,floor_id:t}).then((function(e){r.value=!0,d(),i.a.prototype.$message.success("删除成功！")})).catch((function(e){}))},g=function(e){v(e.id,e.floor_id)},y=function(e,t){0==t?(o.value=!0,l.value=0):1==t&&(o.value=!0,l.value=e.id)},h=function(e){o.value=!1,e&&(r.value=!0,d())};return{columns:a,buildingList:n,loading:r,getSingleLayerList:d,total:c,delCancel:p,delConfirm:g,deleteBiuld:v,editBuild:y,layer_id:l,closeLayerDrawer:h,switchChange:f,changeSingleStatus:_,changeStatus:m,layerEditVisible:o,closeLayerManage:b}}}),d=c,p=(a("a8bc"),a("2877")),m=Object(p["a"])(d,l,o,!1,null,"3a5859d2",null);t["default"]=m.exports},a8bc:function(e,t,a){"use strict";a("0b5a")},aed5:function(e,t,a){"use strict";a("b611")},b611:function(e,t,a){},bcde:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"单元管理",visible:e.floor_visible,width:1500,"mask-closable":!1,"body-style":{paddingBottom:"80px"}},on:{close:e.closeFloorManage}},[a("div",{staticClass:"build_index"},[a("div",{staticClass:"table-operations top-box-padding"},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.editBuild("",0)}}},[e._v("添加单元")])],1),a("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.floor_id},"data-source":e.singleFloorList,pagination:!1,loading:e.loading},scopedSlots:e._u([{key:"status",fn:function(t,l){return[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭",checked:1==t||"1"==t},on:{change:function(t){return e.switchChange(t,l)}}})]}},{key:"layer_manage_action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.layer_manage(l)}}},[e._v("管理楼层")])])}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.editBuild(l,1)}}},[e._v("单元管家")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.editBuild(l,2)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(l)},cancel:e.delCancel}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)}}])}),a("div",{staticClass:"total_number"},[e._v(" 总单元数："),a("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.total))]),e._v("单元 ")]),a("floorEdit",{attrs:{visible:e.buildVisible,single_id:e.single_id,floor_id:e.floor_id},on:{closeDrawer:e.closeFloorDrawer}}),a("buildingHousekeeper",{attrs:{visible:e.manageVisible,single_id:e.single_id,floor_id:e.floor_id},on:{closeDrawer:e.closeFloorDrawer}}),a("layerManage",{attrs:{layer_visible:e.layerManageVisible,single_id:e.single_id,floor_id:e.floor_id},on:{closeDrawer:e.closeFloorDrawer}})],1)])},o=[],r=(a("4e82"),a("8bbf")),i=a.n(r),n=a("44ef"),u=a("5fa7"),s=a("a2ce"),c=a("ed09"),d=a("3990"),p=Object(c["c"])({props:{floor_visible:{type:Boolean,default:!1},singleObj:{type:Object,default:{}}},name:"unitRentalFloorList",components:{floorEdit:n["default"],buildingHousekeeper:u["default"],layerManage:s["default"]},setup:function(e,t){Object(c["i"])((function(){return e.floor_visible}),(function(t){t&&(l.value=e.singleObj,b(e.singleObj))}),{deep:!0});var a=Object(c["g"])([{title:"楼栋名称",dataIndex:"single_name"},{title:"单元名称",dataIndex:"floor_name"},{title:"单元编号",dataIndex:"floor_number"},{title:"排序",dataIndex:"sort",sorter:function(e,t){return e.sort-t.sort}},{title:"门禁编号",dataIndex:"door_control"},{title:"添加时间",dataIndex:"add_time_str"},{title:"楼层管理",key:"layer_manage_action",scopedSlots:{customRender:"layer_manage_action"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}]),l=Object(c["h"])({}),o=Object(c["h"])(!1),r=Object(c["h"])(!1),n=Object(c["h"])(!1),u=Object(c["h"])(!1),s=Object(c["h"])([]),p=Object(c["h"])(0),m=Object(c["h"])(0),f=Object(c["h"])(0),b=function(){var e={single_id:l.value.id};i.a.prototype.request(d["a"].unitRentalFloorList,e).then((function(e){s.value=e.dataList,f.value=e.count,u.value=!1})).catch((function(e){u.value=!1}))},_=function(){},v=Object(c["h"])(!0),g=function(e,t){if(v.value){var a=e?1:0;x(t.floor_id,a)}else i.a.prototype.$message.warn("请求频繁！")},y=function(e){t.emit("closeDrawer",e)},h=function(e){o.value=!1,r.value=!1,n.value=!1,e&&(u.value=!0,b())},x=function(e,t){v.value=!1,i.a.prototype.request(d["a"].updateUnitRentalFloorStatus,{floor_id:e,status:t}).then((function(e){v.value=!0,b(),i.a.prototype.$message.success("修改成功！")})).catch((function(e){b(),v.value=!0}))},w=function(e,t){i.a.prototype.request(d["a"].deleteUnitRentalFloor,{floor_id:e,single_id:t}).then((function(e){u.value=!0,b(),i.a.prototype.$message.success("删除成功！")})).catch((function(e){}))},F=function(e){w(e.floor_id,e.single_id)},k=function(e,t){m.value=l.value.id,0==t?(o.value=!0,p.value=0):1==t?(r.value=!0,p.value=e.floor_id):2==t&&(o.value=!0,p.value=e.floor_id)},O=function(e){m.value=l.value.id,p.value=e.floor_id,n.value=!0};return{columns:a,singleFloorList:s,loading:u,getSingleFloorList:b,total:f,delCancel:_,delConfirm:F,deleteBiuld:w,editBuild:k,buildVisible:o,manageVisible:r,switchChange:g,changeSingleStatus:x,changeStatus:v,layerManageVisible:n,layer_manage:O,closeFloorManage:y,closeFloorDrawer:h,singleRecord:l,floor_id:p,single_id:m}}}),m=p,f=(a("6c5f"),a("2877")),b=Object(f["a"])(m,l,o,!1,null,"1651e230",null);t["default"]=b.exports},fb5b:function(e,t,a){"use strict";a("4b87")},fd30:function(e,t,a){}}]);