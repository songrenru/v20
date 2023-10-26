(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10483f5f"],{"3a6f":function(e,a,t){"use strict";t("52ee")},"52ee":function(e,a,t){},f018:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"lane_model_container"},[t("a-drawer",{attrs:{title:e.modelTitle,width:1e3,visible:e.visible},on:{close:e.handleSubCancel}},[t("a-form-model",{ref:"ruleForm",attrs:{model:e.laneForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("div",{staticClass:"add_lane"},[t("a-form-model-item",{attrs:{label:"通道名称",prop:"passage_name"}},[t("a-input",{attrs:{placeholder:"请输入通道名称"},model:{value:e.laneForm.passage_name,callback:function(a){e.$set(e.laneForm,"passage_name",a)},expression:"laneForm.passage_name"}})],1),t("a-form-model-item",{attrs:{label:"归属区域",prop:"passage_area"}},[t("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.laneForm.passage_area},on:{change:e.handleSelectChange}},e._l(e.areaList,(function(a,n){return t("a-select-option",{attrs:{value:a.id}},[e._v(" "+e._s(a.garage_num)+" ")])})),1)],1),t("a-form-model-item",{attrs:{label:"通道号",prop:"channel_number"}},[t("a-input",{attrs:{placeholder:"请上输入通道号"},model:{value:e.laneForm.channel_number,callback:function(a){e.$set(e.laneForm,"channel_number",a)},expression:"laneForm.channel_number"}})],1),t("a-form-model-item",{attrs:{label:"请填写设备编号",prop:"device_number"}},[t("a-input",{attrs:{placeholder:"请填写设备编号"},model:{value:e.laneForm.device_number,callback:function(a){e.$set(e.laneForm,"device_number",a)},expression:"laneForm.device_number"}})],1),t("a-form-model-item",{attrs:{label:"通道类型",prop:"passage_direction"}},[t("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.laneForm.passage_direction,callback:function(a){e.$set(e.laneForm,"passage_direction",a)},expression:"laneForm.passage_direction"}},[t("a-radio",{attrs:{value:1}},[e._v("入口")]),t("a-radio",{attrs:{value:0}},[e._v("出口")])],1)],1),t("a-form-model-item",{attrs:{label:"通道坐标",prop:"long_lat"}},[t("a-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:e.laneForm.long_lat,callback:function(a){e.$set(e.laneForm,"long_lat",a)},expression:"laneForm.long_lat"}}),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.openMap()}}},[e._v("点击获取经纬度")])],1),t("a-form-model-item",{attrs:{label:"标签",prop:"current"}},[t("a-transfer",{attrs:{locale:{itemUnit:"【已选】",itemsUnit:"【全部】",notFoundContent:"列表为空",searchPlaceholder:"请输入搜索内容"},"show-search":"",rowKey:function(e){return e.key},"data-source":e.labelList,"list-style":{width:"210px",height:"270px"},render:e.renderItem,"show-select-all":!0,"target-keys":e.targetKeys},on:{change:e.handleTransferChange}})],1),t("a-form-model-item",{attrs:{label:"通道状态",prop:"status"}},[t("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.laneForm.status,callback:function(a){e.$set(e.laneForm,"status",a)},expression:"laneForm.status"}},[t("a-radio",{attrs:{value:1}},[e._v("开启")]),t("a-radio",{attrs:{value:2}},[e._v("关闭")])],1)],1),"D3"==e.park_sys_type?t("a-form-model-item",{attrs:{label:"设备类型",prop:"device_type"}},[t("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.laneForm.device_type,callback:function(a){e.$set(e.laneForm,"device_type",a)},expression:"laneForm.device_type"}},[t("a-radio",{attrs:{value:1}},[e._v("横屏")]),t("a-radio",{attrs:{value:2}},[e._v("竖屏")])],1)],1):e._e()],1),t("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[t("a-button",{style:{marginRight:"8px"},on:{click:e.handleSubCancel}},[e._v("取消")]),t("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.handleSubmit()}}},[e._v("提交")])],1)])],1),e.mapVisible?t("a-modal",{attrs:{title:"百度地图拾取经纬度",visible:e.mapVisible,width:800},on:{ok:e.handleMapOk,cancel:e.handleMapCancel}},[t("a-input",{staticClass:"input_style",staticStyle:{width:"200px"},attrs:{type:"text",id:"suggestId",name:"address_detail",placeholder:"请输入城市名/地区名"},model:{value:e.address_detail,callback:function(a){e.address_detail=a},expression:"address_detail"}}),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchMap}},[e._v("搜索")]),t("div",{staticStyle:{width:"100%",height:"500px","margin-top":"10px"},attrs:{id:"allmap"}})],1):e._e()],1)},l=[],r=(t("5cad"),t("7b2d")),s=(t("ac1f"),t("1276"),t("d81d"),t("841c"),t("c1df")),i=t.n(s),o=(t("8bbf"),t("a0e0")),c={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},lane_type:{type:String,default:""},lane_id:{type:String,default:""},park_sys_type:{type:String,default:""}},watch:{lane_id:{immediate:!0,handler:function(e){"edit"==this.lane_type&&this.getLaneInfo()}}},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},laneForm:{long_lat:"",passage_area:"",status:1,device_type:1,passage_direction:1},rules:{passage_name:[{required:!0,message:"请输入通道名称",trigger:"blur"}],channel_number:[{required:!0,message:"请输入通道号",trigger:"blur"}]},dateFormat:"YYYY-MM-DD",selectedKeys:[],targetKeys:[],labelList:[],mapVisible:!1,address_detail:"北京",userlocation:{lng:"",lat:""},userLng:"",userLat:"",areaList:[]}},mounted:function(){this.getLabelList(),this.getAreaList()},components:{"a-transfer":r["a"]},methods:{clearForm:function(){this.laneForm={long_lat:"",passage_area:"",status:1,passage_direction:1},this.targetKeys=[]},getAreaList:function(){var e=this;e.request(o["a"].getAreaList,{}).then((function(a){e.areaList=a.list}))},moment:i.a,handleSubmit:function(e){var a=this;this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),a.confirmLoading=!1,!1;var t=a,n=o["a"].addPassage;"edit"==a.lane_type&&(n=o["a"].editPassage),t.request(n,t.laneForm).then((function(e){"edit"==a.lane_type?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),a.$emit("closeLane",!0),a.clearForm(),a.confirmLoading=!1})).catch((function(e){a.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.$emit("closeLane",!1),this.clearForm()},getLaneInfo:function(){var e=this;e.lane_id&&e.request(o["a"].getPassageInfo,{id:this.lane_id}).then((function(a){e.laneForm=a,e.laneForm.passage_area=1*a.passage_area||"",e.laneForm.long_lat=a.lat+","+a.long,e.targetKeys=a.passage_label.split(",")}))},getLabelList:function(){var e=this;e.request(o["a"].getPassageLabelList,{}).then((function(a){e.labelList=[],a.map((function(a){e.labelList.push({key:a.id+"",title:a.label_name})}))}))},handleSelectChange:function(e){var a=this;this.laneForm.passage_area=1*e,this.areaList.map((function(t){t.id==e&&(a.laneForm.area_type=t.area_type)})),this.$forceUpdate(),console.log("selected ".concat(e))},filterOption:function(e,a){return a.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},onDateChange:function(e,a){console.log(e,a)},renderItem:function(e){var a=this.$createElement,t=a("span",{class:"custom-item"},[e.title]);return{label:t,value:e.title}},handleTransferChange:function(e,a,t){var n=this;this.targetKeys=e;var l="";this.targetKeys.map((function(e,a){a<n.targetKeys.length-1?l+=e+",":l+=e})),this.laneForm.passage_label=l},handleMapOk:function(){this.laneForm.long_lat=this.userLat+","+this.userLng,this.mapVisible=!1},handleMapCancel:function(){this.mapVisible=!1},openMap:function(){this.mapVisible=!0,this.initMap()},searchMap:function(){this.address_detail&&this.initMap()},initMap:function(){this.$nextTick((function(){var e=this,a=new BMap.Map("allmap");a.centerAndZoom(e.address_detail,15),a.enableScrollWheelZoom();var t,n=new BMap.Autocomplete({input:"suggestId",location:a});function l(){function n(){e.userlocation=l.getResults().getPoi(0).point,a.centerAndZoom(e.userlocation,18),a.addOverlay(new BMap.Marker(e.userlocation)),e.userLng=e.userlocation.lng,e.userLat=e.userlocation.lat}a.clearOverlays();var l=new BMap.LocalSearch(a,{onSearchComplete:n});l.search(t),a.addEventListener("click",(function(){}))}n.addEventListener("onconfirm",(function(a){var n=a.item.value;t=n.province+n.city+n.district+n.street+n.business,e.address_detail=t,l()})),a.addEventListener("click",(function(t){a.clearOverlays(),a.addOverlay(new BMap.Marker(t.point));var n={width:180,height:60},l=new BMap.InfoWindow("所选位置",n);a.openInfoWindow(l,t.point),e.userLng=t.point.lng,e.userLat=t.point.lat}))}))}}},d=c,u=(t("3a6f"),t("2877")),p=Object(u["a"])(d,n,l,!1,null,"9c5fa36e",null);a["default"]=p.exports}}]);