(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be8a6012","chunk-2d0b6a79","chunk-1529b364","chunk-2d0b6a79","chunk-2d0b3786"],{"13ba":function(t,e,a){},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function r(t,e,a,r,n,o,i){try{var s=t[o](i),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,o){var i=t.apply(e,a);function s(t){r(i,n,o,s,l,"next",t)}function l(t){r(i,n,o,s,l,"throw",t)}s(void 0)}))}}},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var r=a("6b75");function n(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=a("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||o(t)||Object(i["a"])(t)||s()}},"6a33":function(t,e,a){"use strict";a.r(e);a("b0c0");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("a-page-header",{staticClass:"page-header",attrs:{title:"完善公司招聘类信息，更有利于展示您的企业"}}),e("a-form-model",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{model:t.form,"label-col":{span:2},"wrapper-col":{span:8},rules:t.rules}},[e("a-form-model-item",{attrs:{label:"公司照片",colon:!1,help:"限上传10张，建议尺寸900*500",rules:{required:!0}}},[e("div",{staticClass:"clearfix"},[e("a-upload",{attrs:{name:"pic",action:t.uploadImg,"list-type":"picture-card","file-list":t.imgUploadList,multiple:!0},on:{preview:t.handlePreview,change:t.handleImgChange}},[t.imgUploadList.length<10?e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1):t._e()]),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleImgCancel}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]),e("a-form-model-item",{ref:"name",attrs:{colon:!1,prop:"name",label:"公司名称"}},[e("a-input",{attrs:{placeholder:"请输入公司名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("a-form-model-item",{ref:"short_name",attrs:{colon:!1,prop:"short_name",label:"公司简称"}},[e("a-input",{attrs:{placeholder:"限5个字"},model:{value:t.form.short_name,callback:function(e){t.$set(t.form,"short_name",e)},expression:"form.short_name"}})],1),e("a-form-model-item",{attrs:{label:"公司经纬度"}},[e("a-row",[e("a-col",[e("a-button",{on:{click:function(e){return t.$refs.MapModal.showMap({lng:t.form.long,lat:t.form.lat})}}},[t._v(" 点击选取经纬度 ")])],1),e("a-col",[t._v(" "+t._s(t.form.long)+","+t._s(t.form.lat)+" ")])],1)],1),e("a-form-model-item",{attrs:{label:"公司规模",colon:!1}},[e("a-select",{model:{value:t.form.people_scale,callback:function(e){t.$set(t.form,"people_scale",e)},expression:"form.people_scale"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("小于50人")]),e("a-select-option",{attrs:{value:"2"}},[t._v("50~100人")]),e("a-select-option",{attrs:{value:"3"}},[t._v("101-200人")]),e("a-select-option",{attrs:{value:"4"}},[t._v("201~500人")]),e("a-select-option",{attrs:{value:"5"}},[t._v("500人~1000人以上")])],1)],1),e("a-form-model-item",{attrs:{label:"融资状态",colon:!1}},[e("a-select",{model:{value:t.form.financing_status,callback:function(e){t.$set(t.form,"financing_status",e)},expression:"form.financing_status"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("未融资")]),e("a-select-option",{attrs:{value:"2"}},[t._v("天使轮")]),e("a-select-option",{attrs:{value:"3"}},[t._v("A轮")]),e("a-select-option",{attrs:{value:"4"}},[t._v("B轮")]),e("a-select-option",{attrs:{value:"5"}},[t._v("C轮")]),e("a-select-option",{attrs:{value:"6"}},[t._v("D轮及以上")]),e("a-select-option",{attrs:{value:"7"}},[t._v("已上市")]),e("a-select-option",{attrs:{value:"8"}},[t._v("不需要融资")])],1)],1),e("a-form-model-item",{attrs:{label:"公司性质",colon:!1}},[e("a-select",{model:{value:t.form.nature,callback:function(e){t.$set(t.form,"nature",e)},expression:"form.nature"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("民营")]),e("a-select-option",{attrs:{value:"2"}},[t._v("国企")]),e("a-select-option",{attrs:{value:"3"}},[t._v("外企")]),e("a-select-option",{attrs:{value:"4"}},[t._v("合资")]),e("a-select-option",{attrs:{value:"5"}},[t._v("股份制企业")]),e("a-select-option",{attrs:{value:"6"}},[t._v("事业单位")]),e("a-select-option",{attrs:{value:"7"}},[t._v("个体")]),e("a-select-option",{attrs:{value:"8"}},[t._v("其他")])],1)],1),e("a-form-model-item",{attrs:{label:"公司行业",colon:!1}},[e("a-cascader",{attrs:{placeholder:"未选择",options:t.industryLists,"expand-trigger":"hover"},model:{value:t.form.defaultIndustry,callback:function(e){t.$set(t.form,"defaultIndustry",e)},expression:"form.defaultIndustry"}})],1),e("a-form-model-item",{ref:"intro",attrs:{label:"公司介绍",colon:!1,prop:"intro"}},[e("a-input",{attrs:{type:"textarea",rows:4},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1),e("a-form-model-item",{attrs:{"wrapper-col":{offset:2}}},[e("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" 保存 ")])],1)],1),e("choose-point",{ref:"MapModal",on:{updatePosition:t.updatePosition}})],1)},n=[],o=a("2909"),i=a("1da1"),s=(a("96cf"),a("d3b7"),a("25f0"),a("d81d"),a("dcd5")),l=(a("7b3f"),a("7304"));function c(t){return new Promise((function(e,a){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return a(t)}}))}var u={name:"Company",components:{ChoosePoint:l["default"]},data:function(){return{form:{name:"",short_name:"",long:"",lat:"",people_scale:"1",financing_status:"1",nature:"1",intro:"",images:[],defaultIndustry:[]},previewVisible:!1,previewImage:"",imgUploadList:[],uploadImg:"/v20/public/index.php/common/common.UploadFile/uploadPic?type=company",industryLists:[],rules:{name:[{required:!0,message:"公司名称不能为空",trigger:"blur"}],intro:[{required:!0,message:"公司介绍不能为空",trigger:"blur"}],short_name:[{max:5,message:"公司简称限5个字",trigger:"blur"}]}}},mounted:function(){this.syncIndustrySelect(),this.getCompanyInfo()},methods:{syncIndustrySelect:function(){var t=this;this.request(s["a"].industryTree,{}).then((function(e){t.industryLists=e})).catch((function(t){}))},getCompanyInfo:function(){var t=this;this.request(s["a"].getInfo,{}).then((function(e){t.form.name=e.name,t.form.short_name=e.short_name,t.form.long=e.long,t.form.lat=e.lat,t.form.people_scale=e.people_scale.toString(),t.form.financing_status=e.financing_status.toString(),t.form.nature=e.nature.toString(),t.form.intro=e.intro,t.form.defaultIndustry=[e.industry_id1,e.industry_id2],t.form.images=e.images_arr;for(var a=[],r=e.show_images_arr.length,n=0;n<r;n++)a.push({uid:-1*n,name:e.show_images_arr[n].path,status:"done",response:{status:"1000",data:e.show_images_arr[n]},url:e.show_images_arr[n].url});t.imgUploadList=a})).catch((function(t){}))},handleImgCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.url||t.preview){a.next=4;break}return a.next=3,c(t.originFileObj);case 3:t.preview=a.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},handleImgChange:function(t){var e=this,a=Object(o["a"])(t.fileList);this.imgUploadList=a;var r=[];this.imgUploadList.map((function(a){if("done"===a.status&&"1000"==a.response.status){var n=a.response.data;r.push(n.path),e.$set(e.form,"images",r)}else"error"===t.file.status&&e.$message.error("".concat(t.file.name," 上传失败！"))})),0==a.length&&this.$set(this.form,"images",[])},onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){return!!e&&(0==t.form.images.length?(t.$message.error("请上传公司照片"),!1):void t.request(s["a"].saveInfo,t.form).then((function(e){t.$message.success("保存成功")})).catch((function(t){})))}))},updatePosition:function(t){this.form.long=t.lng,this.form.lat=t.lat,console.log("更新坐标点",t)}}},m=u,f=(a("b8ad0"),a("2877")),p=Object(f["a"])(m,r,n,!1,null,"0ff43642",null);e["default"]=p.exports},7304:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,visible:t.visible,width:1e3,footer:null},on:{cancel:t.handleCancelMap}},[e("div",{staticClass:"flex flex-wrap justify-between"},[e("div",{staticClass:"flex",staticStyle:{width:"260px"}},[e("a-input",{attrs:{placeholder:"请输入关键字"},on:{change:t.showPanelInput},model:{value:t.addressKeyword,callback:function(e){t.addressKeyword=e},expression:"addressKeyword"}})],1),e("div",{staticClass:"flex-1 ml-40"},[e("baidu-map",{staticClass:"bm-view",attrs:{zoom:t.zoom,center:t.postionMap,"scroll-wheel-zoom":!0},on:{click:t.getLocationPoint}},[e("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),e("bm-map-type",{attrs:{"map-types":["BMAP_NORMAL_MAP","BMAP_SATELLITE_MAP"],anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),e("bm-local-search",{staticClass:"searchRes",attrs:{keyword:t.addressKeyword,zoom:t.zoom,"auto-viewport":!0,panel:t.showPanel},on:{infohtmlset:t.infohtmlset}}),e("bm-marker",{attrs:{position:t.postionMap,dragging:!0}})],1)],1)])])},n=[],o={name:"ChoosePoint",data:function(){return{title:"地图",showPanel:!0,visible:!1,zoom:12.8,addressKeyword:"",postionMap:{lng:117.217433,lat:31.838546}}},methods:{handleOk:function(){this.visible=!1,this.$emit("updatePosition",this.postionMap)},handleCancelMap:function(){this.visible=!1},infohtmlset:function(t){t&&(this.postionMap.lng=t.point.lng,this.postionMap.lat=t.point.lat)},getLocationPoint:function(t){this.postionMap.lng=t.point.lng,this.postionMap.lat=t.point.lat,this.handleOk()},showMap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0!=t.lat&&(this.postionMap=t),this.visible=!0},showPanelInput:function(){this.showPanel=!this.showPanel}}},i=o,s=(a("eaa7d"),a("2877")),l=Object(s["a"])(i,r,n,!1,null,"4c2249b6",null);e["default"]=l.exports},"7b3f":function(t,e,a){"use strict";var r={uploadImg:"/common/common.UploadFile/uploadImg"};e["a"]=r},b8ad0:function(t,e,a){"use strict";a("f800")},dcd5:function(t,e,a){"use strict";var r={getRecruitHrList:"/recruit/merchant.NewRecruitHr/getRecruitHrList",getRecruitHrCreate:"/recruit/merchant.NewRecruitHr/getRecruitHrCreate",getRecruitHrInfo:"/recruit/merchant.NewRecruitHr/getRecruitHrInfo",getRecruitHrDel:"/recruit/merchant.NewRecruitHr/getRecruitHrDel",getJobList:"/recruit/merchant.RecruitMerchant/getJobList",updateJob:"/recruit/merchant.RecruitMerchant/updateJob",delJob:"/recruit/merchant.RecruitMerchant/delJob",getJobSearch:"/recruit/merchant.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/merchant.RecruitMerchant/getJobDetail",industryTree:"/recruit/merchant.Company/industryTree",getInfo:"/recruit/merchant.Company/getInfo",saveInfo:"/recruit/merchant.Company/saveInfo",getRecruitWelfareLabelList:"/recruit/merchant.Company/getRecruitWelfareLabelList",getRecruitWelfareLabelCreate:"/recruit/merchant.Company/getRecruitWelfareLabelCreate",getRecruitWelfareLabelInfo:"/recruit/merchant.Company/getRecruitWelfareLabelInfo",getList:"/recruit/merchant.TalentManagement/getList",getLibMsgLIst:"/recruit/merchant.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/merchant.TalentManagement/getResumeMsg"};e["a"]=r},eaa7d:function(t,e,a){"use strict";a("13ba")},f800:function(t,e,a){}}]);