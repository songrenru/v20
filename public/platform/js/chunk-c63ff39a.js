(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c63ff39a","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"0bcd":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[e("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-model-item",{attrs:{label:"地图标注"}},[e("a-row",[e("a-button",{staticClass:"mr-20",attrs:{type:"primary"},on:{click:function(a){return t.mapPlaceHandleEdit()}}},[t._v("添加")]),t.mapPlaceList.length&&t.selectedRowKeys.length?e("a-button",{staticClass:"mr-20",attrs:{type:"danger"},on:{click:function(a){return t.mapPlaceHandleDel(-1)}}},[t._v("删除")]):t._e()],1),e("a-table",{staticClass:"mt-20",attrs:{rowKey:"id","row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},columns:t.mapPlaceColumns,"data-source":t.mapPlaceList},scopedSlots:t._u([{key:"lng_lat",fn:function(a,i){return e("span",{},[e("span",{staticClass:"mr-10"},[t._v(t._s(i.longitude))]),e("span",[t._v(t._s(i.latitude))])])}},{key:"action",fn:function(a,i){return e("span",{},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.mapPlaceHandleDel(i.id)}}},[t._v("删除")]),e("a",{staticClass:"ml-20",attrs:{href:"javascript:;"},on:{click:function(a){return t.mapPlaceHandleEdit(i)}}},[t._v("编辑")])])}}])})],1),e("a-form-model-item",{attrs:{label:"推荐路线"}},[e("a-row",[e("a-button",{staticClass:"mr-20",attrs:{type:"primary"},on:{click:function(a){return t.recomRouteHandleAdd()}}},[t._v("添加")])],1)],1),t.mapLineList.length?e("a-form-model-item",{attrs:{label:"  ",colon:!1}},t._l(t.mapLineList,(function(a,i){return e("div",{key:i,staticClass:"pt-20 pb-20 inner-form",class:0!=i?"mt-20":null},[e("a-form-model-item",{staticClass:"flex-input",attrs:{label:"路线名称",required:!0}},[e("a-row",{attrs:{type:"flex"}},[e("a-col",{attrs:{span:"20"}},[e("a-input",{attrs:{placeholder:"请输入路线名称"},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item.name"}})],1),e("a-col",{attrs:{span:"2",offset:"1"}},[e("a",{staticClass:"btn cr-red",attrs:{href:"javascript:;"},on:{click:function(a){return t.delMapLine(i)}}},[t._v("删除")])])],1)],1),e("a-form-model-item",{attrs:{label:"路线排序"}},[e("a-row",[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.routeSortHandleAdd(i)}}},[t._v("添加")])],1)],1),t._l(a.location_ids,(function(a,n){return e("a-form-model-item",{key:i+"_"+n,attrs:{label:"游览顺序"+(n+1),"label-col":Object.assign({},t.labelCol,{offset:2})}},[e("a-row",{attrs:{type:"flex"}},[e("a-col",{attrs:{span:"17"}},[e("a-select",{attrs:{placeholder:"请选择",options:t.getRouteSortOptions(i,a.id)},model:{value:a.id,callback:function(e){t.$set(a,"id",e)},expression:"routeSortItem.id"}})],1),e("a-col",{attrs:{span:"2",offset:"1"}},[e("a",{staticClass:"btn cr-red",attrs:{href:"javascript:;"},on:{click:function(a){return t.delRouteSortItem(i,n)}}},[t._v("删除")])])],1)],1)})),e("a-form-model-item",{attrs:{label:"上传路线周边图片"}},[e("a-row",{attrs:{type:"flex"}},[e("a-col",{attrs:{span:"24"}},[e("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",accept:"image/*","list-type":"picture-card","file-list":a.fileList,name:"reply_pic",data:{upload_dir:"merchant/life_tools/tools"}},on:{preview:t.handlePreviewImg,change:function(a){return t.handleRecomRouteUpload(a,i,"scenic_location_img")}}},[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1)],1)],1)],1),e("a-form-model-item",{attrs:{label:"路线绘制",required:!0}},[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.setPolyline(i)}}},[t._v("绘制路线")])],1)],2)})),0):t._e(),t.mapLineList.length?e("a-form-model-item",{attrs:{label:" ",colon:!1}},[e("a-button",{staticClass:"mt-20",attrs:{type:"primary"},on:{click:function(a){return t.handleSave()}}},[t._v("保存")])],1):t._e()],1),e("a-modal",{attrs:{title:t.modalTitle,visible:t.modalVisible,maskClosable:!1,width:"60%",destroyOnClose:!0,bodyStyle:{maxHeight:"70vh",overflowY:"auto"}},on:{ok:t.modalHandleOk,cancel:t.modalHandleCancel}},[e("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol,model:t.mapPlaceFormData}},[e("a-form-model-item",{attrs:{label:"名称",required:!0}},[e("a-input",{attrs:{placeholder:"请输入名称"},model:{value:t.mapPlaceFormData.name,callback:function(a){t.$set(t.mapPlaceFormData,"name",a)},expression:"mapPlaceFormData.name"}})],1),e("a-form-model-item",{attrs:{label:"店铺链接"}},[e("a-input-search",{attrs:{placeholder:"请输入","enter-button":"功能库"},on:{search:function(a){return t.addLinkUrl()}},model:{value:t.mapPlaceFormData.merchant_url,callback:function(a){t.$set(t.mapPlaceFormData,"merchant_url",a)},expression:"mapPlaceFormData.merchant_url"}})],1),e("a-form-model-item",{attrs:{label:"店铺前往按钮名称"}},[e("a-input",{attrs:{placeholder:"请输入店铺前往按钮名称"},model:{value:t.mapPlaceFormData.btn_text,callback:function(a){t.$set(t.mapPlaceFormData,"btn_text",a)},expression:"mapPlaceFormData.btn_text"}})],1),e("a-form-model-item",{attrs:{label:"选择分类",required:!0}},[e("a-select",{attrs:{placeholder:"请选择分类",options:t.catOptions,showSearch:!0},model:{value:t.mapPlaceFormData.category_id,callback:function(a){t.$set(t.mapPlaceFormData,"category_id",a)},expression:"mapPlaceFormData.category_id"}})],1),e("a-form-model-item",{attrs:{label:"经纬度",required:!0}},[e("a-input",{staticStyle:{width:"200px"},attrs:{readOnly:"",value:t.mapPlaceFormData.lnglat,placeholder:"请选择位置"}}),e("a",{staticClass:"ml-10",on:{click:function(a){return t.$refs.mapPointModel.selectPoint()}}},[t._v("地图选点")])],1),e("a-form-model-item",{attrs:{label:"上传标记点图标",help:""}},[e("a-row",{attrs:{type:"flex"}},[e("a-col",{attrs:{span:"20"}},[e("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",accept:"image/*","list-type":"picture",name:"reply_pic",data:{upload_dir:"merchant/life_tools/tools"},showUploadList:!1},on:{change:function(a){return t.handleMapPlaceUpload(a,"mark_icon")}}},[e("a-button",{staticClass:"mb-20"},[e("a-icon",{attrs:{type:"upload"}}),t._v(" 上传文件 ")],1),e("div",{staticClass:"ant-form-explain"},[t._v("推荐尺寸70 * 70")])],1)],1)],1),t.mapPlaceFormData.mark_icon?e("a-row",{attrs:{type:"flex"}},[e("a-col",{attrs:{span:"16"}},[e("div",{staticClass:"upload-img-list"},[e("img",{staticClass:"img",attrs:{src:t.mapPlaceFormData.mark_icon,alt:""}}),e("a-icon",{staticClass:"pointer",attrs:{type:"delete"},on:{click:function(a){return t.handleMapMarkersUploadDel("mark_icon")}}})],1)])],1):t._e()],1),e("a-form-model-item",{attrs:{label:"周边监控"}},[e("a-button",{attrs:{type:"primary"},on:{click:t.addMonitor}},[t._v("添加")])],1),t.mapPlaceFormData.monitor&&t.mapPlaceFormData.monitor.length?e("a-form-model-item",{attrs:{label:"  ",colon:!1}},t._l(t.mapPlaceFormData.monitor,(function(a,i){return e("div",{key:i,staticClass:"pt-20 pb-20 inner-form",class:0!=i?"mt-20":null},[e("a-form-model-item",{staticClass:"flex-input",attrs:{label:"监控名称"}},[e("a-row",{attrs:{type:"flex"}},[e("a-col",{attrs:{span:"20"}},[e("a-input",{attrs:{placeholder:"请输入监控名称"},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item.name"}})],1),e("a-col",{attrs:{span:"2",offset:"1"}},[e("a",{staticClass:"btn cr-red",attrs:{href:"javascript:;"},on:{click:function(a){return t.delMonitorItem(i)}}},[t._v("删除")])])],1)],1),e("a-form-model-item",{attrs:{label:"监控链接"}},[e("a-row",{attrs:{type:"flex"}},[e("a-col",{attrs:{span:"20"}},[e("a-input",{attrs:{placeholder:"请输入监控链接"},model:{value:a.url,callback:function(e){t.$set(a,"url",e)},expression:"item.url"}})],1)],1)],1)],1)})),0):t._e(),e("a-form-model-item",{attrs:{label:"上传语音介绍",help:"上传MP3格式文件，推荐小于10M"}},[e("a-row",{attrs:{type:"flex"}},[e("a-col",{staticClass:"mb-20",attrs:{span:"20"}},[e("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadFile",accept:".mp3,.MP3","list-type":"picture",name:"file",data:{upload_dir:"merchant/life_tools/tools"},showUploadList:!1},on:{change:function(a){return t.handleMapPlaceUpload(a,"order_introduce")}}},[e("a-button",[e("a-icon",{attrs:{type:"upload"}}),t._v(" 上传文件 ")],1)],1)],1)],1),t.mapPlaceFormData.order_introduce?e("a-row",{attrs:{type:"flex"}},[e("div",{staticClass:"upload-img-list mb-20"},[e("a",{staticClass:"pointer",attrs:{href:t.mapPlaceFormData.order_introduce,target:"blank"}},[e("a-icon",{staticClass:"mr-10",attrs:{type:"link"}}),t._v("语音文件")],1),e("a-icon",{staticClass:"pointer",attrs:{type:"delete"},on:{click:function(a){return t.handleMapMarkersUploadDel("order_introduce")}}})],1)]):t._e()],1),e("a-form-model-item",{attrs:{label:"上传周边图片",help:"推荐上传3张-10张，图片格式建议上传png/jpg，尺寸1:1"}},[e("a-upload",{attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",accept:"image/*","list-type":"picture-card","file-list":t.mapPlaceFileList,name:"reply_pic",data:{upload_dir:"merchant/life_tools/tools"}},on:{preview:t.handlePreviewImg,change:function(a){return t.handleMapPlaceUpload(a,"location_img",!0)}}},[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1)],1),e("a-form-model-item",{attrs:{label:"单位名称"}},[e("a-input",{attrs:{placeholder:"请输入单位名称"},model:{value:t.mapPlaceFormData.place_name,callback:function(a){t.$set(t.mapPlaceFormData,"place_name",a)},expression:"mapPlaceFormData.place_name"}})],1),e("a-form-model-item",{attrs:{label:"标注点简介",required:!0}},[e("a-input",{attrs:{type:"textarea",maxLength:-1,placeholder:"请输入标注点简介"},model:{value:t.mapPlaceFormData.introduction,callback:function(a){t.$set(t.mapPlaceFormData,"introduction",a)},expression:"mapPlaceFormData.introduction"}})],1),e("a-form-model-item",{attrs:{label:"详细描述"}},[e("rich-text",{attrs:{info:t.mapPlaceFormData.desc},on:{"update:info":function(a){return t.$set(t.mapPlaceFormData,"desc",a)}}})],1)],1)],1),e("map-point",{ref:"mapPointModel",on:{loadRefresh:t.setLongLat}}),e("mapPolyline",{ref:"mapPolyline",on:{conform:t.getPolyLine}}),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:function(a){t.previewVisible=!1,t.previewImage=""}}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)},n=[],l=e("1da1"),o=e("2909"),s=e("5530"),r=(e("96cf"),e("d3b7"),e("d81d"),e("b0c0"),e("159b"),e("c740"),e("99af"),e("fb6a"),e("4de4"),e("70e4")),c=e("884f"),m=e("aadf"),p=e("4d95");function d(t){return new Promise((function(a,e){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){return a(i.result)},i.onerror=function(t){return e(t)}}))}var u={name:"ScenicMapAdd",components:{mapPoint:r["default"],RichText:c["a"],mapPolyline:m["default"]},data:function(){return{previewVisible:!1,previewImage:"",labelCol:{span:5},wrapperCol:{span:16},modalVisible:!1,modalTitle:"",catOptions:[],mapPlaceColumns:[{title:"名称",dataIndex:"name"},{title:"经纬度",dataIndex:"lng_lat",scopedSlots:{customRender:"lng_lat"}},{title:"分类",dataIndex:"category_name"},{title:"地址",dataIndex:"address"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],selectedRowKeys:[],mapPlaceList:[],mapPlaceFormData:"",mapPlaceFileList:[],setPolylineIndex:-1,mapLineList:[],map_id:""}},mounted:function(){this.map_id=this.$route.query.id||"",this.map_id&&(this.getMapPlaceList(),this.getMapLineList())},beforeRouteLeave:function(t,a,e){this.$destroy(),e()},methods:{getOptions:function(){var t=this;this.request(p["a"].scenicMapPlaceCatList,{}).then((function(a){t.catOptions=a&&a.length?a.map((function(t){return{value:t.id,label:t.name}})):[]}))},getMapPlaceList:function(){var t=this,a={map_id:this.map_id};this.request(p["a"].scenicMapPlaceList,a).then((function(a){t.mapPlaceList=a||[]}))},getMapLineList:function(){var t=this,a={map_id:this.map_id};this.request(p["a"].scenicMapLineList,a).then((function(a){t.mapLineList=a&&a.length?t.initMapLineList(a):[],console.log("this.mapLineList",t.mapLineList)}))},onSelectChange:function(t){this.selectedRowKeys=t},initMapLineList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.length&&t.forEach((function(t){t.scenic_location_img&&t.scenic_location_img.length&&(t.fileList=t.scenic_location_img.map((function(t,a){return{uid:a,name:"image",status:"done",url:t}}))),t.location_ids&&t.location_ids.length&&(t.location_ids=t.location_ids.map((function(t){return{id:t-0}})))})),t},modalHandleOk:function(){var t=this;if(this.mapPlaceFormData.name)if(this.mapPlaceFormData.category_id)if(this.mapPlaceFormData.lnglat)if(this.mapPlaceFormData.introduction){var a=Object(s["a"])(Object(s["a"])({},this.mapPlaceFormData),{},{category_id:this.mapPlaceFormData.category_id||""});this.$delete(a,"lnglat"),this.$delete(a,"category_name"),this.request(p["a"].scenicMapPlaceSave,a).then((function(a){t.$message.success("操作成功",1,(function(){t.modalHandleCancel(),t.getMapPlaceList()}))}))}else this.$message.error("请输入标记点简介");else this.$message.error("请添加经纬度");else this.$message.error("请选择分类");else this.$message.error("请输入地图标注名称")},modalHandleCancel:function(){this.modalVisible=!1,this.modalTitle="",this.mapPlaceFileList=[]},mapPlaceHandleDel:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;this.$confirm({title:"是否确定删除地图标注?",centered:!0,onOk:function(){var e={map_id:t.map_id,place_ids:-1!=a?[a]:t.selectedRowKeys};t.request(p["a"].scenicMapPlaceDel,e).then((function(a){t.$message.success("操作成功",1,(function(){t.updateRecomRoute(e.place_id),t.getMapPlaceList(),t.selectedRowKeys=[]}))}))},onCancel:function(){}})},updateRecomRoute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=this.mapLineList||[];a.length&&t.length&&(a.forEach((function(a){a.location_ids&&a.location_ids.length&&a.location_ids.forEach((function(a){-1!=t.findIndex((function(t){return t==a.id}))&&(a.id=void 0)}))})),this.mapLineList=a)},mapPlaceHandleEdit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(t){this.mapPlaceFormData=Object(s["a"])(Object(s["a"])({lnglat:"".concat(t.longitude,",").concat(t.latitude)},t),{},{map_id:this.map_id}),this.modalTitle="编辑地图标注";var a=t.location_img||[];this.mapPlaceFileList=a.map((function(t,a){return{uid:a,name:"image",status:"done",url:t}}))}else this.mapPlaceFormData={id:"",map_id:this.map_id,name:"",merchant_url:"",btn_text:"",category_id:void 0,longitude:"",latitude:"",address:"",mark_icon:"",monitor:[],order_introduce:"",location_img:[],place_name:"",desc:"",lnglat:"",introduction:""},this.modalTitle="添加地图标注";this.getOptions(),this.modalVisible=!0},addLinkUrl:function(){var t=this;this.$LinkBases({source:"merchant",type:"h5",handleOkBtn:function(a){t.$set(t.mapPlaceFormData,"merchant_url",a.url)}})},setLongLat:function(t,a){this.mapPlaceFormData.lnglat=t,this.mapPlaceFormData.longitude=a.lng,this.mapPlaceFormData.latitude=a.lat,this.mapPlaceFormData.address=a.address},addMonitor:function(){var t=this.mapPlaceFormData.monitor||[];t.push({name:"",url:""}),this.$set(this.mapPlaceFormData,"monitor",t)},handleMapPlaceUpload:function(t,a){var e=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Object(o["a"])(t.fileList);if(n.length)if(i){var l=[];this.mapPlaceFileList=n.map((function(t){if(t.response){var a=t.response.data;l.push(a)}else"done"==t.status&&t.url&&l.push(t.url);return t})),this.$set(this.mapPlaceFormData,a,l)}else n=n.slice(-1),n=n.map((function(t){if(t.response){var i=t.response.data;e.$set(e.mapPlaceFormData,a,i)}else"done"==t.status&&t.url&&e.$set(e.mapPlaceFormData,a,t.url);return t}));else this.mapPlaceFileList=[],i?this.$set(this.mapPlaceFormData,a,[]):this.$set(this.mapPlaceFormData,a,"")},handleMapMarkersUploadDel:function(t){this.$set(this.mapPlaceFormData,t,"")},delMonitorItem:function(t){this.$delete(this.mapPlaceFormData["monitor"],t)},handlePreviewImg:function(t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,d(t.originFileObj);case 3:t.preview=e.sent;case 4:a.previewImage=t.url||t.preview,a.previewVisible=!0;case 6:case"end":return e.stop()}}),e)})))()},recomRouteHandleAdd:function(){this.mapLineList.push({id:"",map_id:this.map_id,name:"",location_ids:[],scenic_location_img:[],scenic_location_line:[]})},delMapLine:function(t){var a=this,e=this.mapLineList[t];this.$confirm({title:"是否确定删除推荐路线?",centered:!0,onOk:function(){if(e.id){var i={map_id:a.map_id,line_id:e.id};a.request(p["a"].scenicMapLineDel,i).then((function(e){a.$message.success("操作成功",1,(function(){a.$delete(a.mapLineList,t)}))}))}else a.$delete(a.mapLineList,t)},onCancel:function(){}})},routeSortHandleAdd:function(t){var a=this.mapLineList[t]["location_ids"]||[];a.push({id:void 0}),this.$set(this.mapLineList[t],"location_ids",a)},delRouteSortItem:function(t,a){var e=this.mapLineList[t]["location_ids"];this.$delete(e,a),this.$set(this.mapLineList[t],"location_ids",e)},getRouteSortOptions:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=this.mapPlaceList||[];if(i.length){var n=i.map((function(t){return{value:t.id-0,label:t.name}})),l=this.mapLineList[t]["location_ids"]||[];return e&&l.length&&(l=l.filter((function(t){return t.id!=e}))),l.length&&l.forEach((function(t){var e=n.findIndex((function(a){return a.value==t.id}));-1!=e&&a.$set(n[e],"disabled",!0)})),n}return i},handleRecomRouteUpload:function(t,a,e){var i=Object(o["a"])(t.fileList);if(i.length){var n=[];i=i.map((function(t){if("image"==t.name&&t.url){var a=t.url;n.push(a)}if(t.response&&"done"==t.status&&1e3==t.response.status){var e=t.response.data;n.push(e)}return t})),this.$set(this.mapLineList[a],e,n),this.$set(this.mapLineList[a],"fileList",i)}else this.$set(this.mapLineList[a],e,[]),this.$set(this.mapLineList[a],"fileList",[])},setPolyline:function(t){this.setPolylineIndex=t;var a=this.mapLineList[t],e=a["scenic_location_line"]||[];e.length&&(e=e.map((function(t){return{lng:t.longitude,lat:t.latitude}})));var i=this.mapPlaceList||[],n=[],l=[];a.location_ids&&a.location_ids.length&&i.length&&a.location_ids.forEach((function(t){i.forEach((function(a){t.id==a.id&&(e.length||l.push({lng:a.longitude,lat:a.latitude}),n.push(Object(s["a"])(Object(s["a"])({},a),{},{lng:a.longitude,lat:a.latitude})))}))})),e.length||(e=l),this.$refs.mapPolyline.setPolyline(e,n)},getPolyLine:function(t){console.log("polylinePath",t),t.length&&(t=t.map((function(t){return{longitude:t.lng,latitude:t.lat}}))),this.$set(this.mapLineList[this.setPolylineIndex],"scenic_location_line",t),this.setPolylineIndex=-1},handleSave:function(){var t=this,a=!0,e=JSON.parse(JSON.stringify(this.mapLineList))||[];if(e.length){e=e.map((function(a){return a.fileList&&t.$delete(a,"fileList"),a.location_ids&&a.location_ids.length&&(a.location_ids=a.location_ids.filter((function(t){return t&&t.id&&void 0!=t.id})).map((function(t){return t.id}))),a}));try{e.forEach((function(e){if(!e.name)throw t.$message.error("请输入推荐路线名称"),a=!1,Error();if(!e.scenic_location_line||e.scenic_location_line&&!e.scenic_location_line.length)throw t.$message.error("请绘制推荐路线"),a=!1,Error()}))}catch(i){}}a&&this.request(p["a"].scenicMapLineSave,{map_lines:e}).then((function(a){t.$message.success("操作成功",1,(function(){t.$router.push({path:"/merchant/merchant.life_tools/ScenicMapList"})}))}))}}},h=u,f=(e("35a0"),e("2877")),g=Object(f["a"])(h,i,n,!1,null,"4a914fb4",null);a["default"]=g.exports},"1da1":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("d3b7");function i(t,a,e,i,n,l,o){try{var s=t[l](o),r=s.value}catch(c){return void e(c)}s.done?a(r):Promise.resolve(r).then(i,n)}function n(t){return function(){var a=this,e=arguments;return new Promise((function(n,l){var o=t.apply(a,e);function s(t){i(o,n,l,s,r,"next",t)}function r(t){i(o,n,l,s,r,"throw",t)}s(void 0)}))}}},2909:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var i=e("6b75");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function l(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=e("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return n(t)||l(t)||Object(o["a"])(t)||s()}},"35a0":function(t,a,e){"use strict";e("e728")},"46d6":function(t,a,e){},aadf:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:"80%",height:"80vh",visible:t.visible,footer:null,destroyOnClose:!0},on:{cancel:t.closeWindow}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("baidu-map",{staticClass:"bm-view",attrs:{center:t.mapConfig.center,"scroll-wheel-zoom":!0,zoom:t.mapConfig.zoom,ak:t.AK,id:""},on:{click:t.clickMap,ready:t.mapReady}},[e("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0}}),e("bm-map-type",{attrs:{"map-types":["BMAP_NORMAL_MAP"],anchor:"BMAP_ANCHOR_TOP_LEFT"}}),e("bm-overview-map",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",isOpen:!0}}),t.isShowMapSign?t._l(t.mapMakers,(function(a){return e("bm-marker",{key:a.id,attrs:{position:{lng:a.lng,lat:a.lat},dragging:!1},on:{click:function(e){return t.markerClick(a)}}},[a.name?e("bm-label",{attrs:{content:a.name,labelStyle:{color:"#333",fontSize:"14px",borderColor:"#ffffff",backgroundColor:"#fff",padding:"4px",borderRadius:"4px"},offset:{width:0,height:-30}}}):t._e()],1)})):t._e(),e("bm-polyline",{attrs:{path:t.polylinePath,"stroke-color":"blue","stroke-opacity":.6,"stroke-weight":4,editing:!0},on:{lineupdate:t.updatePolylinePath}})],2)],1)],1),e("div",{staticStyle:{"text-align":"right"}},[e("row",{staticClass:"mt-20 mr-20"},[e("span",[t._v("是否开启删除线路点：")]),e("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:t.switchChange},model:{value:t.mapPointFlag,callback:function(a){t.mapPointFlag=a},expression:"mapPointFlag"}})],1),e("a-button",{staticClass:"mt-20 mr-20",on:{click:function(a){t.polylinePath=[]}}},[t._v("重新绘制")]),e("a-button",{staticClass:"mt-20",attrs:{type:"primary"},on:{click:t.confirmPoint}},[t._v("确认绘制")])],1)],1)},n=[],l=(e("d3b7"),e("159b"),e("b0c0"),e("4de4"),e("df2b")),o=e("4d95"),s={components:{BaiduMap:l["a"]},props:{deletePoint:{type:Boolean,default:function(){return!1}}},data:function(){return{title:"地图绘制",visible:!1,mapConfig:{center:"北京",zoom:15},isShowMapSign:!1,clickMapShow:{position:{lng:116.404,lat:39.915}},AK:"",longlat:"",BMap:"",polylinePath:[],mapMakers:[],mapPointFlag:!1}},methods:{switchChange:function(t){var a=this;if(this.mapPointFlag=t,this.mapPointFlag)this.polylinePath.forEach((function(t,e){a.mapMakers.push({id:"id"+e,lng:t.lng,lat:t.lat})}));else{var e=[];this.mapMakers.forEach((function(t){t.name&&e.push(t)})),this.mapMakers=[],this.mapMakers=e}},markerClick:function(t){if(!t.name&&this.mapPointFlag){var a=this.polylinePath.filter((function(a){return a.lat==t.lat&&a.lng==t.lng}));a[0]&&(this.polylinePath=this.polylinePath.filter((function(t){return t.lat!=a[0].lat&&t.lng!=a[0].lng})),this.mapMakers=this.mapMakers.filter((function(t){return t.lat!=a[0].lat&&t.lng!=a[0].lng})))}},closeWindow:function(){this.visible=!1,this.polylinePath=[],this.mapPointFlag=!1},setPolyline:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.log("polylinePath",t),this.visible=!0,this.polylinePath=t,this.polylinePath.length&&this.$set(this.mapConfig,"center",{lat:this.polylinePath[0]["lat"],lng:this.polylinePath[0]["lng"]}),this.mapConfig.zoom=15,this.mapMakers=a,this.mapMakers&&this.mapMakers.length&&(this.isShowMapSign=!0)},mapReady:function(t){var a=this;this.request(o["a"].getMapConfig).then((function(t){a.AK=t.ak,a.polylinePath.length?a.$set(a.mapConfig,"center",{lat:a.polylinePath[0]["lat"],lng:a.polylinePath[0]["lng"]}):a.$set(a.mapConfig,"center",t.detault_city?t.detault_city:"北京"),a.mapConfig.zoom=15})),this.BMap=t.BMap},confirmPoint:function(){this.$emit("conform",this.polylinePath),this.closeWindow()},updatePolylinePath:function(t){this.polylinePath=t.target.getPath()},clickMap:function(t){t.type,t.target;var a=t.point;t.pixel,t.overlay;if(!this.mapPointFlag){var e=this.polylinePath||[];e.push({lng:a.lng,lat:a.lat}),this.polylinePath=e}}}},r=s,c=(e("bb25"),e("2877")),m=Object(c["a"])(r,i,n,!1,null,"6acaeda4",null);a["default"]=m.exports},bb25:function(t,a,e){"use strict";e("46d6")},e728:function(t,a,e){}}]);